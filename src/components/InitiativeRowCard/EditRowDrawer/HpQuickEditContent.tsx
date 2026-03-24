import { useMemo } from "react";
import { Button } from "../../ui/button";
import { Input } from "../../ui/input";
import { EditRowMode, useInitiativeTracker } from "../../InitiativeTrackerContext";
import { Heart, HeartPulse } from "lucide-react";

const HP_STEP_VALUES = [-10, -5, -1, 1, 5, 10] as const;
const DAMAGE_HP_STEP_VALUES = [-1, -5, -10] as const;
const HEAL_HP_STEP_VALUES = [1, 5, 10] as const;

export const HpQuickEditContent = () => {
  const { initiativeRows, currentEditRow, updateInitiativeRow } =
    useInitiativeTracker();

  const row = useMemo(() => {
    if (!currentEditRow) return null;
    return initiativeRows.find((candidate) => candidate.id === currentEditRow.id) ?? null;
  }, [currentEditRow, initiativeRows]);

  if (!currentEditRow || !row) return null;

  const currentHp = row.hp ?? 0;
  const maxHp = row.maxHp;

  const setHp = (nextHp: number) => {
    updateInitiativeRow(currentEditRow.id, "hp", nextHp);
  };

    const hpPercentage = Math.max(0, Math.min((currentHp / (maxHp ?? 0)) * 100, 100));

    let backgroundColor = `var(--color-primary-500)`;
    if (hpPercentage < 75) {
      backgroundColor = `var(--color-secondary-500)`;
    }
    if (hpPercentage < 25) {
      backgroundColor = `var(--color-tertiary-500)`;
    }


  return (
    <div className="flex flex-col gap-5 overflow-y-auto p-6 crt-hot-image-light crt-hot-text">
      <div className="flex items-start justify-between gap-8">
        <div className="min-w-0">
          <p className="truncate text-lg font-semibold text-drawer-foreground">{row.name}</p>
          <p className="text-sm text-muted-foreground"></p>
        </div>
        <div className="flex-1">
          <div className="text-end">
            <span className="text-sm text-muted-foreground">{currentHp}</span>
            <span className="text-sm text-muted-foreground">/</span>
            <span className="text-sm text-muted-foreground">{maxHp ?? "-"}</span>
          </div>
        
        <div className="rounded bg-primary-900 h-2 mt-3 text-sm ">
          <div
            className="transition-all duration-150 ease-out rounded bg-secondary-500 h-full"
            style={{
              width: `${hpPercentage}%`,
              backgroundColor: backgroundColor
            }}
          />
        </div>
        </div>
      </div>
      <div className="grid grid-cols-[1fr_auto_1fr] gap-2">
        <div id="damage-hp-stepper-column" className="flex flex-col gap-2 row-span-3">
          {DAMAGE_HP_STEP_VALUES.map((step) => {
            return (
              <Button
                key={step}
                type="button"
                variant="tertiary"
                size="sm"
                onClick={() => setHp(currentHp + step)}
                className="w-full"
              >
                {step > 0 ? `+${step}` : step}
              </Button>
            );
            })}
        </div>
        <div id="hp-input-column" className="flex flex-col gap-2 row-span-3">
          <label className="text-sm font-medium text-muted-foreground h-8 flex items-center">HP</label>
          <Input
            type="number"
            value={row.hp ?? ""}
            onChange={(event) => {
              const value = event.target.value;
              if (value === "") {
                updateInitiativeRow(currentEditRow.id, "hp", undefined);
                return;
              }
              setHp(Number(value));
            }}
            className="text-drawer-foreground border-b border-border focus-visible:border-drawer-foreground bg-primary-900"
          />
          <Button
            type="button"
            variant="default"
            size="sm"
            onClick={() => setHp(maxHp ?? 0)}
            className="w-full"
          >
            <HeartPulse />Heal to full
          </Button>
        </div>
        <div id="heal-hp-stepper-column" className="flex flex-col gap-2 row-span-3">
            {HEAL_HP_STEP_VALUES.map((step) => {
              return (
                <Button
                  key={step}
                  type="button"
                  variant="default"
                  size="sm"
                  onClick={() => setHp(currentHp + step)}
                  className="w-full"
                >
                  {step > 0 ? `+${step}` : step}
                </Button>
              );
            })}
        </div>
      </div>

      <div className="flex flex-col gap-2 hidden">
        <label className="text-sm font-medium text-muted-foreground">Step HP</label>
        <div className="grid grid-cols-3 gap-2">
          {HP_STEP_VALUES.map((step) => {
            const isDamage = step < 0;
            return (
              <Button
                key={step}
                type="button"
                variant={isDamage ? "tertiary" : "default"}
                size="sm"
                onClick={() => setHp(currentHp + step)}
              >
                {step > 0 ? `+${step}` : step}
              </Button>
            );
          })}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 hidden">
        <div className="flex flex-col gap-1.5">
          <label className="text-sm font-medium text-muted-foreground">HP</label>
          <Input
            type="number"
            value={row.hp ?? ""}
            onChange={(event) => {
              const value = event.target.value;
              if (value === "") {
                updateInitiativeRow(currentEditRow.id, "hp", undefined);
                return;
              }
              setHp(Number(value));
            }}
            className="text-drawer-foreground border-b border-border focus-visible:border-drawer-foreground bg-primary-900"
          />
        </div>
        <Button
          type="button"
          variant="default"
          size="sm"
          onClick={() => {
            if (maxHp === undefined) return;
            setHp(maxHp);
          }}
          disabled={maxHp === undefined}
          className="mt-6.5 h-9"
        >
          <HeartPulse />Heal to full
        </Button>
      </div>
    </div>
  );
};
