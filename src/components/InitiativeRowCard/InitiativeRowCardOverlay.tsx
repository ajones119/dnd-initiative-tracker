import type { InitiativeRow } from "../../Types";
import { InitiativeRowCardContent } from "./InitiativeRowCardContent";

interface InitiativeRowCardOverlayProps {
  row: InitiativeRow;
}

export const InitiativeRowCardOverlay = ({
  row,
}: InitiativeRowCardOverlayProps) => {
  return (
    <div className="rounded-lg shadow-2xl scale-105 cursor-grabbing ring-2 ring-primary/20">
      <InitiativeRowCardContent row={row} isCurrentTurn={false} />
    </div>
  );
};
