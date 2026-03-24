import { useCallback, useRef } from "react";
import type { InitiativeRow } from "../../Types";
import { EditRowMode, useInitiativeTracker } from "../InitiativeTrackerContext";
import { ViewWrapper } from "./ViewWrapper";
import { EditWrapper } from "./EditWrapper";

interface InitiativeRowCardProps {
  initiativeRowId: string;
  bucket: string;
  indexInBucket: number;
}

export const InitiativeRowCard = ({
  initiativeRowId,
  bucket,
  indexInBucket,
}: InitiativeRowCardProps) => {
  const {
    initiativeRows,
    removeInitiativeRow,
    addInitiativeRow,
    editMode,
    setEditMode,
    setCurrentEditRow,
    currentTurn,
  } = useInitiativeTracker();

  const initiativeRowIndex = initiativeRows.findIndex(
    (row) => row.id === initiativeRowId,
  );
  const isCurrentTurn = initiativeRowIndex === currentTurn;

  // Survives wrapper remount on editMode toggle — needed to render the exit
  // animation after the row is removed from state (initiativeRowIndex === -1).
  const lastRowRef = useRef<InitiativeRow | null>(null);
  const initiativeRow = initiativeRows[initiativeRowIndex];
  if (initiativeRow) lastRowRef.current = initiativeRow;
  const displayRow = initiativeRow ?? lastRowRef.current;

  // Survives wrapper remount so a long-press that starts in view mode and
  // crosses the editMode threshold still fires correctly.
  const editTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const startHoldTimers = useCallback(() => {
    editTimerRef.current = setTimeout(() => {
      setEditMode(true);
    }, 1000);
  }, [setEditMode]);

  const clearHoldTimers = useCallback(() => {
    if (editTimerRef.current) {
      clearTimeout(editTimerRef.current);
      editTimerRef.current = null;
    }
  }, []);

  const handleRemove = useCallback(() => {
    removeInitiativeRow(initiativeRowIndex);
  }, [initiativeRowIndex, removeInitiativeRow]);

  const handleDuplicate = useCallback(() => {
    const row = initiativeRows.find((r) => r.id === initiativeRowId);
    if (!row) return;
    addInitiativeRow({
      name: `${row.name} (Copy)`,
      initiative: row.initiative,
      hp: row.hp,
      maxHp: row.maxHp,
      ac: row.ac,
      speed: row.speed,
      notes: row.notes,
      statusConditions: row.statusConditions,
      creatureType: row.creatureType,
    });
  }, [initiativeRowId, initiativeRows, addInitiativeRow]);

  if (!displayRow) return null;

  if (editMode) {
    return (
      <EditWrapper
        initiativeRowId={initiativeRowId}
        row={displayRow}
        isCurrentTurn={isCurrentTurn}
        bucket={bucket}
        indexInBucket={indexInBucket}
        onStartHold={startHoldTimers}
        onEndHold={clearHoldTimers}
      />
    );
  }

  return (
    <ViewWrapper
      initiativeRowId={initiativeRowId}
      row={displayRow}
      isCurrentTurn={isCurrentTurn}
      onStartHold={startHoldTimers}
      onEndHold={clearHoldTimers}
      onRemove={handleRemove}
      onOpenDrawer={() => setCurrentEditRow({id: initiativeRowId, mode: EditRowMode.HP})}
    />
  );
};
