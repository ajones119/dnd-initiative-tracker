import { Drawer } from "vaul";
import { useInitiativeTracker } from "./InitiativeTrackerContext";
import { ConditionMultiPicker } from "./ConditionMultiPicker";
import { CreatureTypePicker } from "./CreatureTypePicker";
import { Input } from "./ui/input";
import { cn } from "@/lib/utils";

export const EditRowDrawer = () => {
  const {
    initiativeRows,
    currentEditRowId,
    setCurrentEditRowId,
    updateInitiativeRow,
  } = useInitiativeTracker();

  const row = currentEditRowId
    ? (initiativeRows.find((r) => r.id === currentEditRowId) ?? null)
    : null;

  return (
    <Drawer.Root
      open={currentEditRowId !== null}
      onOpenChange={(open) => {
        if (!open) setCurrentEditRowId(null);
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
          aria-labelledby="edit-row-title"
          aria-describedby="edit initiative combat row basics"
          className="fixed inset-x-0 bottom-0 z-50 flex flex-col rounded-t-xl border-t bg-drawer max-h-[80vh]"
        >
          {/* Drag handle */}
          <div className="mx-auto mt-3 h-1.5 w-10 shrink-0 rounded-full bg-muted-foreground/30" />
          <Drawer.Title className="sr-only">Edit Row</Drawer.Title>

          {row && (
            <form
              className="flex flex-col gap-5 overflow-y-auto p-6"
              onSubmit={(e) => {
                e.preventDefault();
                setCurrentEditRowId(null);
              }}
            >
              <button type="submit" className="hidden">Save</button>
              {/* Name */}
              <div className="flex flex-col gap-1.5">
                <label className="text-base font-medium text-muted-foreground">Name</label>
                <Input
                  className="text-drawer-foreground border-b border-border focus-visible:border-drawer-foreground bg-primary-900 rounded-md"
                  value={row.name}
                  onChange={(e) =>
                    updateInitiativeRow(currentEditRowId!, "name", e.target.value)
                  }
                  placeholder="Creature name"
                />
              </div>

              {/* Creature type */}
              <div className="flex flex-col gap-1.5">
                <label className="text-base font-medium text-muted-foreground">
                  Creature type
                </label>
                <CreatureTypePicker
                  value={row.creatureType}
                  onChange={(next) =>
                    updateInitiativeRow(currentEditRowId!, "creatureType", next)
                  }
                />
              </div>

            <div className="grid grid-cols-2 gap-4">
              {/* Initiative */}
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-medium text-muted-foreground">Initiative</label>
                <Input
                  type="number"
                  value={row.initiative ?? ""}
                  onChange={(e) =>
                    updateInitiativeRow(
                      currentEditRowId!,
                      "initiative",
                      e.target.value === "" ? undefined : Number(e.target.value),
                    )
                  }
                  placeholder=""
                  className="text-drawer-foreground border-b border-border focus-visible:border-drawer-foreground bg-primary-900 rounded-md w-14"
                />

              </div>
              
                 {/* AC */}
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-medium text-muted-foreground">AC</label>
                <Input
                  className="text-drawer-foreground border-b border-border focus-visible:border-drawer-foreground bg-primary-900 rounded-md w-14"
                  type="number"
                  value={row.ac ?? ""}
                  onChange={(e) =>
                    updateInitiativeRow(
                      currentEditRowId!,
                      "ac",
                      e.target.value === "" ? undefined : Number(e.target.value),
                    )
                  }
                  placeholder=""
                />
              </div>
              </div>

              {/* HP / Max HP */}
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-medium text-muted-foreground">HP</label>
                <div className="flex items-center gap-2">
                  <Input
                    type="number"
                    value={row.hp ?? ""}
                    onChange={(e) =>
                      updateInitiativeRow(
                        currentEditRowId!,
                        "hp",
                        e.target.value === "" ? undefined : Number(e.target.value),
                      )
                    }
                    placeholder="Current"
                    className="text-drawer-foreground border-b border-border focus-visible:border-drawer-foreground bg-primary-900 rounded-md w-20"
                  />
                  <span className="text-muted-foreground">/</span>
                  <Input
                    className="text-drawer-foreground border-b border-border focus-visible:border-drawer-foreground bg-primary-900 rounded-md w-20"
                    type="number"
                    value={row.maxHp ?? ""}
                    onChange={(e) =>
                      updateInitiativeRow(
                        currentEditRowId!,
                        "maxHp",
                        e.target.value === "" ? undefined : Number(e.target.value),
                      )
                    }
                    placeholder="Max"
                  />
                </div>
              </div>

              {/* Status conditions */}
              <div className="flex flex-col gap-1.5">
                <label className="text-base font-medium text-muted-foreground">
                  Conditions
                </label>
                <ConditionMultiPicker
                  value={row.statusConditions}
                  onChange={(next) =>
                    updateInitiativeRow(currentEditRowId!, "statusConditions", next)
                  }
                />
              </div>
            </form>
          )}
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
};
