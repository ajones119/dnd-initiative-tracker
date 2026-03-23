import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  CREATURE_TYPES,
  CREATURE_TYPES_BY_NAME,
} from "@/data/creature-types";
import { cn } from "@/lib/utils";

const CREATURE_TYPE_NONE = "__none__";

interface CreatureTypePickerProps {
  value: string | undefined;
  onChange: (next: string | undefined) => void;
  className?: string;
}

export const CreatureTypePicker = ({
  value,
  onChange,
  className,
}: CreatureTypePickerProps) => {
  return (
    <Select
      value={value ?? CREATURE_TYPE_NONE}
      onValueChange={(v) =>
        onChange(v === CREATURE_TYPE_NONE ? undefined : v)
      }
    >
      <SelectTrigger
        className={cn(
          "h-auto min-h-9 w-full justify-between border-border bg-primary-900 py-2 text-drawer-foreground hover:bg-primary-900/80",
          className,
        )}
      >
        <SelectValue placeholder="Creature type" />
      </SelectTrigger>
      <SelectContent className="z-[60] border-border bg-popover max-h-64">
        <SelectItem value={CREATURE_TYPE_NONE}>None</SelectItem>
        {CREATURE_TYPES.map((slug) => (
          <SelectItem key={slug} value={slug}>
            {CREATURE_TYPES_BY_NAME[slug] ?? slug}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};
