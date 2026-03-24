import React, { useMemo, useState, useEffect, useRef } from "react";
import {
  InitiativeTrackerProvider,
  useInitiativeTracker,
} from "./InitiativeTrackerContext";
import {
  EncountersStorageProvider,
  useEncountersStorage,
} from "./EncountersStorageContext";
import { Button } from "./ui/button";
import { BookOpen, Swords } from "lucide-react";
import { EncounterDrawer } from "./EncounterDrawer";
import type { InitiativeRow } from "../Types";
import { MonsterAutocomplete } from "./MonsterAutocomplete";
import { InitiativeRowCard } from "./InitiativeRowCard/InitiativeRowCard";
import { EditRowDrawer } from "./InitiativeRowCard/EditRowDrawer/EditRowDrawer";
import { DragDropProvider, DragOverlay, useDroppable } from "@dnd-kit/react";
import { move } from "@dnd-kit/helpers";
import { InitiativeRowCardOverlay } from "./InitiativeRowCard/InitiativeRowCardOverlay";
import { CollisionPriority } from "@dnd-kit/abstract";
import { BottomController } from "./BottomController";
import { InitiativeEmptyState } from "./InitiativeEmptyState";
import { DiceDrawer } from "./DiceDrawer";
import { AnimatePresence, motion } from "motion/react";

function getBand(init: number | undefined): number {
  if (init == null) return 0;
  return Math.min(30, Math.floor(Number(init) / 5) * 5);
}

const INITIATIVE_BUCKETS = [30, 25, 20, 15, 10, 5, 0];

function bucketLabel(bucket: number): string {
  return bucket === 30 ? "30+" : `${bucket}\u2013${bucket + 4}`;
}

function BucketSection({
  bucket,
  bucketRows,
}: {
  bucket: number;
  bucketRows: InitiativeRow[];
}) {
  const { ref, isDropTarget } = useDroppable({
    id: `bucket-${bucket}`,
    type: "bucket",
    collisionPriority: CollisionPriority.Low,
  });
  return (
    
      <li className="py-2 border-t border-border/60 list-none" aria-hidden>
        <div
          ref={ref}
          className={`min-h-[3rem] rounded-md p-2 transition-colors ${isDropTarget ? "bg-primary/10 ring-2 ring-primary/30" : ""}`}
        >
          <span className="text-xs font-medium text-muted-foreground">
            Init {bucketLabel(bucket)}
          </span>
          <ul className="relative mt-1 flex flex-col list-none overflow-x-hidden overflow-y-visible">
            <AnimatePresence initial={false} mode="popLayout">
              {bucketRows.map((row, index) => (
                <InitiativeRowCard
                  key={row.id}
                  initiativeRowId={row.id}
                  bucket={`bucket-${bucket}`}
                  indexInBucket={index}
                />
              ))}
            </AnimatePresence>
          </ul>
        </div>
    </li>
    
  );
}

type BucketItems = Record<string, InitiativeRow[]>;

function bucketItemsFromRows(rows: InitiativeRow[]): BucketItems {
  const items: BucketItems = {};
  for (const b of INITIATIVE_BUCKETS) items[`bucket-${b}`] = [];
  for (const r of rows) {
    const key = `bucket-${getBand(r.initiative)}`;
    if (!items[key]) items[key] = [];
    items[key].push(r);
  }
  return items;
}

function flattenBuckets(items: BucketItems): InitiativeRow[] {
  const flat: InitiativeRow[] = [];
  for (const b of INITIATIVE_BUCKETS) {
    const key = `bucket-${b}`;
    if (items[key]) flat.push(...items[key]);
  }
  return flat;
}

function parseBucketValue(bucketId: string): number {
  return Number(bucketId.replace("bucket-", ""));
}

const InitiativeTracker = () => {
  const {
    initiativeRows: rows,
    addInitiativeRow,
    encounterName,
    loadEncounter,
    setInitiativeRows,
    updateInitiativeRow,
    startCombat,
    editMode,
  } = useInitiativeTracker();

  const bucketItems = useMemo(() => bucketItemsFromRows(rows), [rows]);
  const bucketItemsRef = useRef(bucketItems);
  bucketItemsRef.current = bucketItems;
  const previousItemsRef = useRef(bucketItems);

  const {
    currentEncounterId,
    getEncounter,
    setCurrentEncounterId,
    saveEncounter,
  } = useEncountersStorage();
  const [encounterOpen, setEncounterOpen] = useState(false);
  const [diceDrawerOpen, setDiceDrawerOpen] = useState(false);

  const getEncounterRef = useRef(getEncounter);
  useEffect(() => {
    getEncounterRef.current = getEncounter;
  });

  useEffect(() => {
    if (!currentEncounterId) return;
    const encounter = getEncounterRef.current(currentEncounterId);
    if (encounter) {
      loadEncounter(encounter);
    } else {
      setCurrentEncounterId(null);
    }
  }, [currentEncounterId, loadEncounter, setCurrentEncounterId]);

  const handleSelect = (rowData: Omit<InitiativeRow, "id">) => {
    const newRow: InitiativeRow = { id: crypto.randomUUID(), ...rowData };
    if (!currentEncounterId) {
      const created = saveEncounter("New Encounter", [newRow]);
      setCurrentEncounterId(created.id);
    } else {
      addInitiativeRow(rowData);
    }
  };

  return (
    <div className="relative mx-auto flex h-full min-h-0 w-full max-w-2xl flex-col crt-hot-image-light crt-hot-image crt-hot-text">
      <section className="flex flex-wrap items-center justify-between gap-3 shrink-0">
        <h2 className="text-lg font-semibold truncate">
          {encounterName || "Encounter"}
        </h2>
        <div className="flex gap-2 mb-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => {
              setEncounterOpen(true);
            }}
          >
            <BookOpen className="h-4 w-4 shrink-0" />
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => {
              startCombat();
            }}
          >
            <Swords className="h-4 w-4 shrink-0" />
          </Button>
        </div>
      </section>
      <motion.section
        id="initiative-tracker-container"
        className="min-h-0 flex-1 overflow-y-auto overscroll-y-contain"
        layoutScroll
      >
        <MonsterAutocomplete onSelect={handleSelect} />
        {rows.length === 0 && !editMode ? <InitiativeEmptyState /> : null}
        <DragDropProvider
          onDragStart={() => {
            previousItemsRef.current = bucketItems;
          }}
          onDragOver={(event) => {
            const { source } = event.operation;
            if (source?.type === "bucket") return;
            // Prevent dnd-kit's OptimisticSortingPlugin from physically moving
            // DOM nodes across bucket boundaries. React state drives the visual
            // order instead, avoiding the "removeChild: not a child" conflict.
            event.preventDefault();
            setInitiativeRows(flattenBuckets(move(bucketItemsRef.current, event)));
          }}
          onDragEnd={(event) => {
            const { canceled } = event;
            const { source, target } = event.operation;

            if (canceled) {
              requestAnimationFrame(() => {
                setInitiativeRows(flattenBuckets(previousItemsRef.current));
              });
              return;
            }

            if (!source || !target) return;

            const newItems = move(bucketItemsRef.current, event);
            const newFlat = flattenBuckets(newItems);

            requestAnimationFrame(() => {
              setInitiativeRows(newFlat);

              const targetBucketId =
                target.type === "bucket"
                  ? String(target.id)
                  : Object.keys(newItems).find((key) =>
                      newItems[key].some((r) => r.id === source.id),
                    );

              if (targetBucketId) {
                const bucketValue = parseBucketValue(targetBucketId);
                const currentBand = getBand(
                  rows.find((r) => r.id === source.id)?.initiative,
                );
                if (currentBand !== bucketValue) {
                  updateInitiativeRow(
                    String(source.id),
                    "initiative",
                    bucketValue,
                  );
                }
              }
            });
          }}
        >
          <ul className="space-y-6 mb-20 list-none">
            {INITIATIVE_BUCKETS.map((bucket) =>{
              return (bucketItems[`bucket-${bucket}`] ?? []).length > 0 || editMode ? (
                <BucketSection
                  key={bucket}
                    bucket={bucket}
                    bucketRows={bucketItems[`bucket-${bucket}`] ?? []}
                  />
                ) : null;
              })}
          </ul>
          <DragOverlay>
            {(source) => {
              if (!source) return null;
              const row = rows.find((r) => r.id === source.id);
              return row ? <InitiativeRowCardOverlay row={row} /> : null;
            }}
          </DragOverlay>
        </DragDropProvider>
      </motion.section>
      <section id="bottom-controller-container" className="shrink-0">
        <BottomController onOpenDiceDrawer={() => setDiceDrawerOpen(true)} />
      </section>

      <EncounterDrawer open={encounterOpen} onOpenChange={setEncounterOpen} />
      <DiceDrawer open={diceDrawerOpen} onOpenChange={setDiceDrawerOpen} />
      <EditRowDrawer />
    </div>
  );
};

export default function InitiativeTrackerWrapper() {
  return (
    <EncountersStorageProvider>
      <InitiativeTrackerProvider>
        <InitiativeTracker />
      </InitiativeTrackerProvider>
    </EncountersStorageProvider>
  );
}
