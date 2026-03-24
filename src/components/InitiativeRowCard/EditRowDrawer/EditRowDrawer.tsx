import { Drawer } from "vaul";
import { EditRowMode, useInitiativeTracker } from "../../InitiativeTrackerContext";
import { cn } from "@/lib/utils";
import { FullEditRowContent } from "./FullEditRowContent";
import { HpQuickEditContent } from "./HpQuickEditContent";
import { useMemo, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { AnimatePresence, motion } from "motion/react";
import useMeasure from "react-use-measure";

export const EditRowDrawer = () => {
  const [elementRef, bounds] = useMeasure();
  const previousHeightRef = useRef<number>(0);

  const [editMode, setEditMode] = useState<EditRowMode>(EditRowMode.HP);
  const { currentEditRow, setCurrentEditRow } = useInitiativeTracker();

  const content = useMemo(() => {
    if (editMode === EditRowMode.HP) return <HpQuickEditContent />;
    return <FullEditRowContent />;
  }, [currentEditRow, editMode]);

  // Scale animation duration proportionally to how much the drawer height changes.
  // Small mode switches (tiny diff) animate fast; large jumps animate slower.
  const animDuration = useMemo(() => {
    const MIN = 0.15;
    const MAX = 0.27;
    if (!previousHeightRef.current) {
      previousHeightRef.current = bounds.height;
      return MIN;
    }
    const diff = Math.abs(bounds.height - previousHeightRef.current);
    previousHeightRef.current = bounds.height;
    return Math.min(Math.max(diff / 500, MIN), MAX);
  }, [bounds.height]);

  return (
    <Drawer.Root
      open={currentEditRow !== null}
      onOpenChange={(open) => {
        if (!open) setCurrentEditRow(null);
      }}
      direction="bottom"
    >
      <Drawer.Portal>
        <Drawer.Overlay
          className={cn(
            "fixed inset-0 z-50 bg-black/50",
            "data-[state=open]:animate-in data-[state=closed]:animate-out",
            "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
          )}
        />
        <Drawer.Content
          asChild
          aria-labelledby="edit-row-title"
          aria-describedby="edit initiative combat row basics"
          className="crt-surface fixed inset-x-0 bottom-0 z-50 mx-auto max-w-2xl overflow-hidden rounded-t-xl border-t bg-drawer outline-none"
        >
          <motion.div
            animate={{
              height: bounds.height + 24,
              transition: { duration: animDuration, ease: [0.25, 1, 0.5, 1] },
            }}
          >
            <div ref={elementRef}>
              {/* Drag handle */}
              <div className="mx-auto mt-3 h-1.5 w-10 shrink-0 bg-muted-foreground/30" />
              <Drawer.Title className="sr-only">Edit Row</Drawer.Title>

              <AnimatePresence initial={false} mode="popLayout" custom={editMode}>
                <motion.div
                  key={editMode}
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: animDuration, ease: [0.26, 0.08, 0.25, 1] }}
                >
                  {content}
                </motion.div>
              </AnimatePresence>

              <div className="mx-4 mb-4">
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  className="w-full"
                  onClick={() =>
                    setEditMode(editMode === EditRowMode.HP ? EditRowMode.FULL : EditRowMode.HP)
                  }
                >
                  {editMode === EditRowMode.HP ? "Full Edit" : "Quick Edit"}
                </Button>
              </div>
            </div>
          </motion.div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
};
