import { useRef, useState } from "react";
import { animate, motion, useMotionValue, useTransform } from "motion/react";
import { Trash2 } from "lucide-react";
import type { InitiativeRow } from "../../Types";
import { InitiativeRowCardContent } from "./InitiativeRowCardContent";

interface ViewWrapperProps {
  initiativeRowId: string;
  row: InitiativeRow;
  isCurrentTurn: boolean;
  onStartHold: () => void;
  onEndHold: () => void;
  onRemove: () => void;
  onOpenDrawer: () => void;
}

const EASE = [0.39, 0.57, 0.56, 1] as const;
const DELETE_THRESHOLD = 120;

export const ViewWrapper = ({
  initiativeRowId,
  row,
  isCurrentTurn,
  onStartHold,
  onEndHold,
  onRemove,
  onOpenDrawer,
}: ViewWrapperProps) => {
  const [isSwipeDragging, setIsSwipeDragging] = useState(false);
  const swipeX = useMotionValue(0);
  const deleteOpacity = useTransform(swipeX, [0, 80], [0, 1]);

  return (
    <motion.li
      id={`initiative-row-card-${initiativeRowId}`}
      data-current-turn={isCurrentTurn}
      onPointerDownCapture={onStartHold}
      onPointerUpCapture={onEndHold}
      onPointerCancelCapture={onEndHold}
      onContextMenu={(e) => e.preventDefault()}
      onClick={onOpenDrawer}
      className="relative rounded-lg my-0.5"
      layout
      //initial={{ opacity: 0, y: 10 }}
      //animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      transition={{ ease: EASE, duration: 0.2 }}
    >
      {/* Delete background — revealed as card slides right */}
      <motion.div
        style={{ opacity: deleteOpacity }}
        className="absolute inset-0 bg-red-500 flex items-center pl-5 rounded-md"
      >
        <Trash2 className="text-white size-5" />
      </motion.div>

      {/* Card — horizontally draggable for swipe-to-delete */}
      <motion.div
        style={{ x: swipeX }}
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={{ left: 0, right: 0.15 }}
        dragTransition={{ bounceStiffness: 500, bounceDamping: 20 }}
        drag="x"
        dragDirectionLock
        onDragStart={() => setIsSwipeDragging(true)}
        onDragEnd={(_, info) => {
          if (info.offset.x > DELETE_THRESHOLD) {
            onRemove();
          } else {
            animate(swipeX, 0, { type: "spring", stiffness: 500, damping: 35 });
          }
          setIsSwipeDragging(false);
        }}
        whileDrag={{ cursor: "grabbing" }}
      >
        <InitiativeRowCardContent
          row={row}
          isCurrentTurn={isCurrentTurn}
          editMode={false}
        />
      </motion.div>
    </motion.li>
  );
};
