### React + dnd-kit Buckets

This document explains how we use `@dnd-kit/react` to support dragging initiative cards between multiple buckets, and the trade-offs / edge cases of the current setup.

---

## Data & Layout Model

- **Bands / buckets**
  - `INITIATIVE_BUCKETS = [30, 25, 20, 15, 10, 5, 0]`.
  - `getBand(init)` maps a row’s initiative to one of those bands (e.g. 17 → 15).
  - Each band is rendered as a `BucketSection`.

- **Bucket structures**
  - `bucketItemsFromRows(rows)` builds a `Record<string, InitiativeRow[]>` like:
    - `"bucket-30"`, `"bucket-25"`, …, `"bucket-0"`.
  - `flattenBuckets(items)` re-flattens all buckets back into a single `InitiativeRow[]` in band order.
  - In `InitiativeTracker`:
    - `bucketItems` is derived from `rows` with `useMemo`.
    - `bucketItemsRef.current` always mirrors the latest `bucketItems` so drag events never see a stale snapshot.

- **Components**
  - `BucketSection`:
    - Uses `useDroppable({ id: "bucket-<band>", type: "bucket" })`.
    - Renders `InitiativeRowCard` for each row in that band.
  - `InitiativeRowCard`:
    - Uses `useSortable` with `id = initiativeRowId`, `group = bucket`, `index = indexInBucket`.
    - Also handles swipe-to-delete via `motion`.

---

## Drag & Drop Flow Across Buckets

### Drag start

In `InitiativeTracker`:

- `DragDropProvider.onDragStart`:
  - Saves `previousItemsRef.current = bucketItems`.
  - This snapshot is used to roll back if the drag is cancelled.

### Drag over (including across buckets)

`DragDropProvider.onDragOver`:

- Ignore drags where the source is a whole bucket (`source?.type === "bucket"`).
- Call `event.preventDefault()` to **disable dnd-kit’s `OptimisticSortingPlugin`** so it does not mutate the DOM directly.
- Compute the new layout purely from our state:
  - `const newItems = move(bucketItemsRef.current, event);`
  - `setInitiativeRows(flattenBuckets(newItems));`

**Result**:

- React state (`initiativeRows`) is the single source of truth for list ordering.
- Dragging within or across buckets does not rely on any DOM moves from dnd-kit itself.

### Drag end (drop)

`DragDropProvider.onDragEnd`:

- If `event.canceled`:
  - Use `requestAnimationFrame` to restore the snapshot:
    - `setInitiativeRows(flattenBuckets(previousItemsRef.current));`
  - Deferring with `requestAnimationFrame` lets dnd-kit finish its own DOM cleanup before React reconciles.

- If drop is successful:
  - Compute final layout from the latest snapshot:
    - `const newItems = move(bucketItemsRef.current, event);`
    - `const newFlat = flattenBuckets(newItems);`
  - Inside `requestAnimationFrame`:
    - `setInitiativeRows(newFlat);`
    - Determine the final bucket (`targetBucketId`) from either:
      - The bucket droppable itself, or
      - The bucket whose items array contains `source.id`.
    - If the bucket band changed:
      - Map the bucket ID back to a band value with `parseBucketValue`.
      - Persist that band into the row’s `initiative` via `updateInitiativeRow(id, "initiative", bucketValue)`.

**Result**:

- Dropping into a new bucket updates both:
  - The list ordering (`initiativeRows`).
  - The underlying `initiative` number so its band matches the bucket it was dropped into.

---

## Inside Each Row (`InitiativeRowCard`)

- `useSortable` config:
  - `id = initiativeRowId`.
  - `index = indexInBucket`.
  - `group = bucket`.
  - `type = "item"`, `accept = ["item", "bucket"]`.
  - Disabled when `editMode` is false.

- Swipe-to-delete:
  - A `motion.div` with horizontal drag when not in sort/edit mode.
  - If swiped past a `DELETE_THRESHOLD`, we call `removeInitiativeRow`.
  - Otherwise we animate back to the original position.

- Long-press:
  - Pointer hold starts a timer which sets `editMode(true)`.
  - Releasing/cancelling clears the timer.

---

## Why We Disable Optimistic DOM Moves

Without intervention, dnd-kit’s `OptimisticSortingPlugin` will:

- Physically move DOM nodes between lists/buckets as you drag, while
- We are also reordering via `setInitiativeRows` on every `onDragOver`.

This can produce errors like:

- `"Failed to execute 'removeChild' on 'Node': The node to be removed is not a child of this node."`

To avoid that:

- We **always** call `event.preventDefault()` in `onDragOver`.
- This turns off optimistic DOM moves so React’s state is the only driver of DOM structure.

Related upstream issue for reference (multi-list removeChild error):

- `https://github.com/clauderic/dnd-kit/issues/1940`

---

## React 19 / dnd-kit Caveats

- We still occasionally see warnings like:
  - `useInsertionEffect must not schedule updates.`
- These originate in dnd-kit’s internals when `DragDropManager.destroy()` updates internal reactive state from within `useInsertionEffect`.
- This is an upstream bug/limitation; tracking is ongoing in the dnd-kit repo.

We mitigate the worst of the timing issues by:

- Deferring our own state updates that run on drag end (`onDragEnd`) into `requestAnimationFrame`.
- Avoiding any direct DOM manipulation ourselves.

---

## Summary

- Buckets are derived from `initiativeRows` and are the only way we compute order and bands.
- During drag:
  - dnd-kit provides intent (what moved where).
  - React state (via `setInitiativeRows`) controls the DOM.
- On drop:
  - We update both order and `initiative` to match the final bucket.
- We accept some upstream React 19 + dnd-kit warnings, but the UX and state remain consistent and error-free for multi-bucket dragging.

