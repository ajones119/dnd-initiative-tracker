import { useSortable } from "@dnd-kit/react/sortable";
import type { InitiativeRow } from "../../Types";
import { InitiativeRowCardContent } from "./InitiativeRowCardContent";

interface EditWrapperProps {
  initiativeRowId: string;
  row: InitiativeRow;
  isCurrentTurn: boolean;
  bucket: string;
  indexInBucket: number;
  onStartHold: () => void;
  onEndHold: () => void;
}

export const EditWrapper = ({
  initiativeRowId,
  row,
  isCurrentTurn,
  bucket,
  indexInBucket,
  onStartHold,
  onEndHold,
}: EditWrapperProps) => {
  const { ref, isDragging } = useSortable({
    id: initiativeRowId,
    index: indexInBucket,
    group: bucket,
    type: "item",
    accept: ["item", "bucket"],
  });

  return (
    <li
      ref={ref}
      id={`initiative-row-card-${initiativeRowId}`}
      data-current-turn={isCurrentTurn}
      onPointerDownCapture={onStartHold}
      onPointerUpCapture={onEndHold}
      onPointerCancelCapture={onEndHold}
      onContextMenu={(e) => e.preventDefault()}
      className=" my-0.5 list-none"
    >
      <InitiativeRowCardContent
        row={row}
        isCurrentTurn={isCurrentTurn}
        isDragging={isDragging}
        editMode
        indexInBucket={indexInBucket}
      />
    </li>
  );
};
