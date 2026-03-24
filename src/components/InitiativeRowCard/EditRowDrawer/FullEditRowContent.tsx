import { Drawer } from "vaul";
import { EditRowMode, useInitiativeTracker } from "../../InitiativeTrackerContext";
import { ConditionMultiPicker } from "../../ConditionMultiPicker";
import { CreatureTypePicker } from "../../CreatureTypePicker";
import { Input } from "../../ui/input";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export const FullEditRowContent = () => {
  const {
    initiativeRows,
    currentEditRow,
    setCurrentEditRow,
    updateInitiativeRow,
  } = useInitiativeTracker();

  const row = currentEditRow
    ? (initiativeRows.find((r) => r.id === currentEditRow.id) ?? null)
    : null;

  return (
  <>
          {currentEditRow && row && (
            <form
              className="flex flex-col gap-5 p-6 crt-hot-image-light"
              onSubmit={(e) => {
                e.preventDefault();
                setCurrentEditRow(null);
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
                    updateInitiativeRow(currentEditRow.id, "name", e.target.value)
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
                    updateInitiativeRow(currentEditRow.id, "creatureType", next)
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
                      currentEditRow.id,
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
                      currentEditRow.id,
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
                        currentEditRow.id,
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
                        currentEditRow.id,
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
                    updateInitiativeRow(currentEditRow.id, "statusConditions", next)
                  }
                />
              </div>
            </form>
          )}
          </>
  );
};
