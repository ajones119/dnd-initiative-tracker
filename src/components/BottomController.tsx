import { useInitiativeTracker } from "./InitiativeTrackerContext";
import { motion, AnimatePresence } from "motion/react";
import { Button } from "./ui/button";
import { useMemo } from "react";
import { Dices } from "lucide-react";

interface BottomControllerProps {
  onOpenDiceDrawer: () => void;
}

export const BottomController = ({ onOpenDiceDrawer }: BottomControllerProps) => {
  const {
    editMode,
    setEditMode,
    currentRound,
    currentTurn,
    nextTurn,
    previousTurn,
    initiativeRows,
  } = useInitiativeTracker();

  // Returns [key, content] for the overlay, or null when no overlay is active.
  // Key must be stable and unique per mode so AnimatePresence can diff correctly.
  const overlay = useMemo<[string, React.ReactNode] | null>(() => {
    if (editMode) {
      return [
        "edit",
        <div className="flex items-center justify-between px-4 py-3">
          <span className="text-sm text-muted-foreground">Hold & drag to reorder</span>
          <Button variant="default" size="sm" onClick={() => setEditMode(false)}>
            Done
          </Button>
        </div>,
      ];
    }

    return null;
  }, [editMode, setEditMode]);

  const activeCombatant = initiativeRows[currentTurn];

  return (
    <AnimatePresence>
   { initiativeRows.length > 0 && <motion.div initial={{ y: "100%", scale: 0.98 }} animate={{ y: 0, scale: 1 }} exit={{ y: "100%", scale: 0.95 }} transition={{ type: "spring", stiffness: 400, damping: 25 }} className="relative w-full border-t border-border bg-background">
      {/* Default bar — always rendered */}
      <div className="flex items-center justify-between px-4 py-3">
        <div className="flex flex-col">
          <span className="text-xs text-muted-foreground">Round</span>
          <span className="text-sm font-semibold">{currentRound}</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-xs text-muted-foreground">Up next</span>
          <span className="line-clamp-1 max-w-[86px] min-w-0 text-sm font-semibold">
            {activeCombatant?.name ?? "—"}
          </span>
        </div>
        <div className="flex flex-wrap items-center justify-end gap-2">
          <Button
            variant="outline"
            size="sm"
            type="button"
            className="min-h-9"
            onClick={onOpenDiceDrawer}
            aria-label="Open dice roller"
          >
            <Dices className="size-4 shrink-0 sm:mr-1" aria-hidden />
            <span className="hidden sm:inline">Dice</span>
          </Button>
          <Button variant="outline" size="sm" onClick={previousTurn}>
            ← Prev
          </Button>
          <Button variant="default" size="sm" onClick={nextTurn}>
            Next →
          </Button>
        </div>
      </div>

      {/* Overlay — slides up over the default bar when a mode is active */}
      <AnimatePresence>
        {overlay && (
          <motion.div
            key={overlay[0]}
            className="absolute inset-0 bg-background"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", stiffness: 400, damping: 35 }}
          >
            {overlay[1]}
          </motion.div>
          )}
        </AnimatePresence>
      </motion.div>}
    </AnimatePresence>
  );
};
