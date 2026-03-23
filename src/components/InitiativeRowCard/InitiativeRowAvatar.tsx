import { Circle } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  getCreatureTypeIcon,
  normalizeCreatureType,
} from "@/data/creature-types";

interface InitiativeRowAvatarProps {
  creatureType: string | undefined;
  className?: string;
}

export const InitiativeRowAvatar = ({
  creatureType,
  className,
}: InitiativeRowAvatarProps) => {
  const canonical = normalizeCreatureType(creatureType);
  const Icon = canonical ? getCreatureTypeIcon(canonical) : null;

  return (
    <div
      className={cn(
        "flex size-16 shrink-0 items-center justify-center rounded-full bg-muted my-2 z-10",
        className,
      )}
    >
      {Icon ? (
        <Icon className="size-10 text-primary-400" aria-hidden />
      ) : (
        <Circle
          className="size-7 text-muted-foreground/50"
          strokeWidth={1.25}
          aria-hidden
        />
      )}
    </div>
  );
};
