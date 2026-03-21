# Potential Upgrades

## 1. Zustand for State Management

Replace the two React Context providers (`EncountersStorageContext`, `InitiativeTrackerContext`) with Zustand stores.

**Current pain point — the `useRef` workaround in `InitiativeTracker`:**

```tsx
// We can't put getEncounter in the effect deps because it changes on every
// auto-save (storedRecord → new getEncounter reference → effect re-runs →
// loadEncounter clobbers in-progress edits). So we stash it in a ref.
const getEncounterRef = useRef(getEncounter);
useEffect(() => { getEncounterRef.current = getEncounter; });

useEffect(() => {
  const encounter = getEncounterRef.current(currentEncounterId);
  // ...
}, [currentEncounterId]);
```

With Zustand this becomes a direct imperative read — no ref, no lint suppression:

```tsx
useEffect(() => {
  const encounter = useEncountersStore.getState().encounters[currentEncounterId];
  if (encounter) loadEncounter(encounter);
}, [currentEncounterId]);
```

**Other wins from Zustand:**
- No provider tree nesting
- Cross-store access without circular context imports (auto-save in tracker store can call encounters store directly)
- `persist` middleware replaces `useLocalStorage` + the `toEncountersRecord` migration helper
- Devtools out of the box

---

## 2. IndexedDB Instead of localStorage

localStorage is synchronous, blocks the main thread on large reads/writes, and has a ~5 MB cap per origin. As encounters grow (AI descriptions, actions arrays, large creature rosters), this becomes a real ceiling.

**Options:** [idb-keyval](https://github.com/jakearchibald/idb-keyval) (tiny) or Dexie.js (full ORM). Zustand's `persist` middleware has an IndexedDB storage adapter, making this a one-line swap.

---

## 3. Undo / Redo for Destructive Actions

Deleting an encounter or clearing all is irreversible. A simple undo stack (or even a 5-second "undo" toast) would prevent accidental data loss.

Could be implemented as a small in-memory stack of previous `EncountersRecord` snapshots — no persistence needed.

---

## 4. Stricter TypeScript

`updateInitiativeRow` currently accepts `value: any`:

```ts
updateInitiativeRow: (index: number, field: keyof InitiativeRow, value: any) => void;
```

Could be tightened to `value: InitiativeRow[typeof field]` for full type safety on field updates.

---

## 5. Keyboard Shortcuts

Next/previous turn, sort by initiative, open encounters drawer — all natural candidates for shortcuts. A library like [tinykeys](https://github.com/jamiebuilds/tinykeys) is ~400 bytes and integrates cleanly.

---

## 6. PWA / Offline Support

The app is already entirely client-side. Adding a service worker + web app manifest would make it installable and fully offline-capable — useful at a game table without reliable Wi-Fi.

---

## 7. Creature Templates / Presets

Save frequently-used creatures (custom player characters, recurring enemies) as templates separate from encounters, so they can be quickly dragged or added into any encounter without re-entering stats.

---

## 9. Centralize Initiative Row Card Styling

`InitiativeRowCard` and `InitiativeRowCardOverlay` currently duplicate the card's visual markup (avatar circle, name heading, Init/AC/HP stats). The overlay exists purely because `DragOverlay` needs a DOM node that isn't tied to dnd-kit's sortable hooks — but that forces both files to stay in sync manually.

**Fix:** extract a shared `InitiativeRowCardContent` component that accepts an `InitiativeRow` and renders only the visual markup. Both the sortable card and the drag overlay import it:

```tsx
// InitiativeRowCardContent.tsx
export const InitiativeRowCardContent = ({ row }: { row: InitiativeRow }) => (
  <div className="flex gap-2 rounded-lg border bg-card px-3 py-2">
    <div className="size-16 my-2 rounded-full bg-gray-200 shrink-0" />
    <div className="flex flex-col gap-2 grow min-w-0">
      <h3 className="...">{row.name}</h3>
      {/* stats */}
    </div>
  </div>
);

// InitiativeRowCard.tsx
<motion.li ...>
  <InitiativeRowCardContent row={initiativeRow} />
</motion.li>

// InitiativeRowCardOverlay.tsx
<div className="shadow-2xl scale-105 ring-2 ring-primary/20 cursor-grabbing">
  <InitiativeRowCardContent row={row} />
</div>
```

Any future change to the card layout (new stat, avatar swap, condition badges) is then made in one place.

---

## 8. Multi-tab / Multi-device Sync

`localStorage` is tab-local. A lightweight backend (Supabase, PocketBase, or even a shared URL with state encoded in a hash) would let a DM share the tracker state with players in real time.
