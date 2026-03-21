"use client";

import { useCallback, useMemo, useState } from "react";
import { Drawer } from "vaul";
import { Dices, Minus, Plus, Trash2 } from "lucide-react";
import { rollWithModifier } from "@/lib/dice";
import { Button } from "@/components/ui/button";
import { NumericInput } from "@/components/NumericInput";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";

const SIDE_PRESETS = [4, 6, 8, 10, 12, 20, 100] as const;

type DiceHistoryEntry = {
  id: string;
  at: number;
  count: number;
  sides: number;
  modifier: number;
  rolls: number[];
  total: number;
};

function formatFormula(count: number, sides: number, modifier: number): string {
  const base = `${count}d${sides}`;
  if (modifier === 0) return base;
  return modifier > 0 ? `${base}+${modifier}` : `${base}${modifier}`;
}

function clamp(n: number, min: number, max: number): number {
  return Math.min(max, Math.max(min, n));
}

interface DiceDrawerProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const DiceDrawer = ({ open, onOpenChange }: DiceDrawerProps) => {
  const [diceCount, setDiceCount] = useState<number | undefined>(1);
  const [sides, setSides] = useState<number | undefined>(20);
  const [modifier, setModifier] = useState<number | undefined>(0);
  const [bulkTimes, setBulkTimes] = useState<number | undefined>(1);
  const [history, setHistory] = useState<DiceHistoryEntry[]>([]);

  const count = diceCount ?? 1;
  const sidesVal = sides ?? 20;
  const mod = modifier ?? 0;
  const bulk = bulkTimes ?? 1;

  const formulaPreview = useMemo(
    () => formatFormula(count, sidesVal, mod),
    [count, sidesVal, mod],
  );

  const pushEntry = useCallback(
    (entry: Omit<DiceHistoryEntry, "id" | "at">) => {
      const full: DiceHistoryEntry = {
        ...entry,
        id: crypto.randomUUID(),
        at: Date.now(),
      };
      setHistory((h) => [full, ...h]);
    },
    [],
  );

  const handleRollOnce = useCallback(() => {
    const c = clamp(count, 1, 99);
    const s = clamp(sidesVal, 2, 100);
    const m = Number.isFinite(mod) ? Math.trunc(mod) : 0;
    try {
      const { rolls, total } = rollWithModifier(c, s, m);
      pushEntry({
        count: c,
        sides: s,
        modifier: m,
        rolls,
        total,
      });
    } catch (e) {
      alert(e instanceof Error ? e.message : "Invalid roll");
    }
  }, [count, sidesVal, mod, pushEntry]);

  const handleBulkRoll = useCallback(() => {
    const times = clamp(bulk, 1, 99);
    const c = clamp(count, 1, 99);
    const s = clamp(sidesVal, 2, 100);
    const m = Number.isFinite(mod) ? Math.trunc(mod) : 0;
    try {
      for (let i = 0; i < times; i++) {
        const { rolls, total } = rollWithModifier(c, s, m);
        pushEntry({
          count: c,
          sides: s,
          modifier: m,
          rolls,
          total,
        });
      }
    } catch (e) {
      alert(e instanceof Error ? e.message : "Invalid roll");
    }
  }, [bulk, count, sidesVal, mod, pushEntry]);

  const lastResult = history[0];

  return (
    <Drawer.Root open={open} onOpenChange={onOpenChange} direction="bottom">
      <Drawer.Portal>
        <Drawer.Overlay
          className={cn(
            "fixed inset-0 z-50 bg-black/50",
            "data-[state=open]:animate-in data-[state=closed]:animate-out",
            "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
          )}
        />
        <Drawer.Content
          aria-labelledby="dice-drawer-title"
          aria-describedby="dice-drawer-desc"
          className="fixed inset-x-0 bottom-0 z-50 flex max-h-[80vh] flex-col rounded-t-xl border-t border-border bg-drawer"
        >
          <div className="mx-auto mt-3 h-1.5 w-10 shrink-0 rounded-full bg-muted-foreground/30" />
          <Drawer.Title
            id="dice-drawer-title"
            className="px-6 pt-2 text-lg font-semibold text-drawer-foreground"
          >
            Dice roller
          </Drawer.Title>
          <p id="dice-drawer-desc" className="sr-only">
            Configure dice count, sides, and modifier, then roll or bulk roll.
          </p>

          <div className="flex min-h-0 flex-1 flex-col gap-4 overflow-y-auto px-6 pb-6 pt-3">
            {/* Presets */}
            <div>
              <p className="mb-2 text-xs font-medium text-muted-foreground">
                Die type
              </p>
              <div className="flex flex-wrap gap-2">
                {SIDE_PRESETS.map((n) => (
                  <Button
                    key={n}
                    type="button"
                    variant={sidesVal === n ? "default" : "outline"}
                    size="sm"
                    className="min-h-10 min-w-[3rem]"
                    onClick={() => setSides(n)}
                  >
                    d{n}
                  </Button>
                ))}
              </div>
            </div>

            {/* Formula controls */}
            <div className="grid gap-4 sm:grid-cols-2">
              <StepField
                label="Dice"
                value={diceCount}
                onChange={setDiceCount}
                min={1}
                max={99}
                emptyAs={1}
              />
              <StepField
                label="Sides"
                value={sides}
                onChange={setSides}
                min={2}
                max={100}
                emptyAs={20}
              />
              <StepField
                label="Bonus"
                value={modifier}
                onChange={setModifier}
                min={-999}
                max={999}
                step={1}
                emptyAs={0}
              />
              <StepField
                label="Bulk ×"
                value={bulkTimes}
                onChange={setBulkTimes}
                min={1}
                max={99}
                emptyAs={1}
                hint="Roll formula this many times"
              />
            </div>

            <p className="text-center text-sm font-medium text-drawer-foreground">
              {formulaPreview}
            </p>

            <div className="flex flex-wrap gap-2">
              <Button
                type="button"
                className="min-h-11 flex-1"
                onClick={handleRollOnce}
              >
                <Dices className="mr-2 size-4" aria-hidden />
                Roll
              </Button>
              <Button
                type="button"
                variant="secondary"
                className="min-h-11 flex-1"
                onClick={handleBulkRoll}
                disabled={bulk < 1}
              >
                Roll {bulk}×
              </Button>
            </div>

            {/* Last result */}
            {lastResult && (
              <div className="rounded-lg border border-border bg-primary-900/50 px-4 py-3">
                <p className="text-xs font-medium text-muted-foreground">
                  Last roll
                </p>
                <p className="text-2xl font-bold tabular-nums text-drawer-foreground">
                  {lastResult.total}
                </p>
                <p className="mt-1 font-mono text-sm text-muted-foreground">
                  {formatFormula(
                    lastResult.count,
                    lastResult.sides,
                    lastResult.modifier,
                  )}
                  : [{lastResult.rolls.join(", ")}]
                  {lastResult.modifier !== 0 ? (
                    <>
                      {" "}
                      (dice {lastResult.rolls.reduce((a, b) => a + b, 0)}
                      {lastResult.modifier > 0 ? "+" : ""}
                      {lastResult.modifier})
                    </>
                  ) : null}
                </p>
              </div>
            )}

            {/* History */}
            <div className="flex min-h-0 flex-1 flex-col gap-2">
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-drawer-foreground">
                  History
                </p>
                {history.length > 0 && (
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="h-8 text-muted-foreground"
                    onClick={() => setHistory([])}
                  >
                    <Trash2 className="mr-1 size-3.5" />
                    Clear
                  </Button>
                )}
              </div>
              {history.length === 0 ? (
                <p className="py-6 text-center text-sm text-muted-foreground">
                  No rolls yet.
                </p>
              ) : (
                <ScrollArea className="h-48 rounded-md border border-border">
                  <ul className="space-y-2 p-3">
                    {history.map((h) => (
                      <li
                        key={h.id}
                        className="rounded-md border border-border/60 bg-background/40 px-3 py-2 text-sm"
                      >
                        <div className="flex items-baseline justify-between gap-2">
                          <span className="font-mono text-xs text-muted-foreground">
                            {formatFormula(h.count, h.sides, h.modifier)}
                          </span>
                          <span className="text-xs text-muted-foreground">
                            {new Date(h.at).toLocaleTimeString(undefined, {
                              hour: "2-digit",
                              minute: "2-digit",
                              second: "2-digit",
                            })}
                          </span>
                        </div>
                        <div className="mt-1 flex items-center justify-between gap-2">
                          <span className="font-mono text-xs text-muted-foreground">
                            [{h.rolls.join(", ")}]
                          </span>
                          <span className="text-lg font-semibold tabular-nums">
                            {h.total}
                          </span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              )}
            </div>
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
};

function StepField({
  label,
  value,
  onChange,
  min,
  max,
  step = 1,
  hint,
  emptyAs,
}: {
  label: string;
  value: number | undefined;
  onChange: (v: number | undefined) => void;
  min: number;
  max: number;
  step?: number;
  hint?: string;
  emptyAs: number;
}) {
  const n = value !== undefined ? value : emptyAs;
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-xs font-medium text-muted-foreground">{label}</label>
      <div className="flex items-center gap-1">
        <Button
          type="button"
          variant="outline"
          size="icon"
          className="h-11 w-11 shrink-0 touch-manipulation"
          onClick={() => onChange(clamp(n - step, min, max))}
          disabled={n <= min}
          aria-label={`Decrease ${label}`}
        >
          <Minus className="size-4" />
        </Button>
        <NumericInput
          value={value}
          onChange={(v) => {
            if (v === undefined) {
              onChange(undefined);
              return;
            }
            onChange(clamp(v, min, max));
          }}
          min={min}
          max={max}
          step={step}
          className="h-11 min-w-0 flex-1 text-center font-mono text-base tabular-nums"
          inputMode="numeric"
        />
        <Button
          type="button"
          variant="outline"
          size="icon"
          className="h-11 w-11 shrink-0 touch-manipulation"
          onClick={() => onChange(clamp(n + step, min, max))}
          disabled={n >= max}
          aria-label={`Increase ${label}`}
        >
          <Plus className="size-4" />
        </Button>
      </div>
      {hint ? (
        <p className="text-[11px] text-muted-foreground">{hint}</p>
      ) : null}
    </div>
  );
}
