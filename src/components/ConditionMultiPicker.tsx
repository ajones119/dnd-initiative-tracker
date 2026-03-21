"use client";

import { useMemo, useState } from "react";
import { ChevronDown, X } from "lucide-react";
import {
  normalizeStatusConditions,
  searchConditions,
} from "@/data/conditions";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";

interface ConditionMultiPickerProps {
  value: string[];
  onChange: (next: string[]) => void;
  className?: string;
}

export const ConditionMultiPicker = ({
  value,
  onChange,
  className,
}: ConditionMultiPickerProps) => {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");

  const selected = useMemo(() => normalizeStatusConditions(value), [value]);

  const filtered = useMemo(() => searchConditions(query), [query]);

  const toggle = (name: string) => {
    if (selected.includes(name)) {
      onChange(selected.filter((x) => x !== name));
    } else {
      onChange([...selected, name]);
    }
  };

  const remove = (name: string) => {
    onChange(selected.filter((x) => x !== name));
  };

  return (
    <div className={cn("flex flex-col gap-2", className)}>
      <div className="flex min-h-8 flex-wrap gap-1.5">
        {selected.length === 0 ? (
          <span className="text-sm text-muted-foreground">None selected</span>
        ) : (
          selected.map((name) => (
            <button
              key={name}
              type="button"
              onClick={() => remove(name)}
              className="inline-flex max-w-full items-center gap-1 rounded-full border border-border bg-muted/80 px-2 py-0.5 text-left text-2xs font-medium text-drawer-foreground hover:bg-muted"
            >
              <span className="truncate">{name}</span>
              <X className="size-3 shrink-0 opacity-70" aria-hidden />
            </button>
          ))
        )}
      </div>
      <Popover
        modal
        open={open}
        onOpenChange={(next) => {
          setOpen(next);
          if (!next) setQuery("");
        }}
      >
        <PopoverTrigger asChild>
          <Button
            type="button"
            variant="outline"
            className="h-auto min-h-9 w-full justify-between border-border bg-primary-900 py-2 text-drawer-foreground hover:bg-primary-900/80"
          >
            <span className="text-muted-foreground">Search & add conditions…</span>
            <ChevronDown className="size-4 shrink-0 opacity-60" />
          </Button>
        </PopoverTrigger>
        <PopoverContent
          className="z-[60] w-[min(calc(100vw-2rem),22rem)] border-border bg-popover p-0"
          align="start"
          sideOffset={6}
        >
          <div className="border-b border-border p-2">
            <Input
              placeholder="Filter by name or description…"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="h-9 border-border bg-primary-900 text-drawer-foreground placeholder:text-muted-foreground"
            />
          </div>
          <div className="max-h-64 overflow-y-auto overscroll-contain p-1">
            {filtered.length === 0 ? (
              <p className="px-2 py-6 text-center text-sm text-muted-foreground">
                No matches
              </p>
            ) : (
              filtered.map((c) => {
                const isOn = selected.includes(c.name);
                return (
                  <label
                    key={c.name}
                    className="flex cursor-pointer items-start gap-2 rounded-md px-2 py-2 text-sm hover:bg-accent/50"
                  >
                    <Checkbox
                      checked={isOn}
                      onCheckedChange={() => toggle(c.name)}
                      className="mt-0.5"
                    />
                    <span className="min-w-0 flex-1">
                      <span className="font-medium">{c.name}</span>
                      <span className="mt-0.5 block text-2xs text-muted-foreground line-clamp-2">
                        {c.description}
                      </span>
                    </span>
                  </label>
                );
              })
            )}
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
};
