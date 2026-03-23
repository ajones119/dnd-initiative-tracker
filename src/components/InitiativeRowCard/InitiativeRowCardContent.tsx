import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import type { InitiativeRow } from "../../Types";
import { CONDITIONS_BY_NAME } from "../../data/conditions";
import { InitiativeRowAvatar } from "./InitiativeRowAvatar";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";

interface InitiativeRowCardContentProps {
  row: InitiativeRow;
  isCurrentTurn: boolean;
  isDragging?: boolean;
  editMode?: boolean;
  indexInBucket?: number;
}

const EASE = [0.39, 0.57, 0.56, 1] as const;

export const InitiativeRowCardContent = ({
  row,
  isCurrentTurn,
  isDragging = false,
  editMode = false,
  indexInBucket = 0,
}: InitiativeRowCardContentProps) => {
  return (
    <motion.div
      animate={{
        opacity: isDragging ? 0.3 : 1,
        rotate: editMode ? (indexInBucket % 2 === 0 ? -1 : 1) : 0,
        //scale: isCurrentTurn ? 1.03 : 1,
      }}
      transition={{ ease: EASE, duration: 0.2 }}
      className={cn(
        "flex gap-2 rounded-xs border bg-card px-3 py-2 relative",
        isCurrentTurn && "border-primary-500",
      )}
    >
      <motion.div
        className="absolute inset-0 rounded-xs"
        animate={{
          background: `linear-gradient(to right, var(--color-primary-500) 0%, transparent ${isCurrentTurn ? "30%" : "5%"})`,
        }}
        transition={{ ease: EASE, duration: 0.2 }}
      />
      <InitiativeRowAvatar creatureType={row.creatureType} />
      <div className="flex flex-col gap-2 grow min-w-0 z-10">
        <h3 className="font-title text-lg font-bold truncate min-w-0 w-full border-b pb-2 border-solid border-primary-300">
          {row.name}
        </h3>
        <div className="flex gap-2 justify-between px-4">
          <div>
            <p className="text-xs font-bold text-primary-500">Init.</p>
            <p className="text-sm">{row.initiative}</p>
          </div>
          <div>
            <p className="text-xs font-bold text-primary-500">AC</p>
            <p className="text-sm">{row.ac}</p>
          </div>
          <div>
            <p className="text-xs font-bold text-primary-500">HP</p>
            <p className="text-sm">{row.hp}</p>
          </div>
        </div>
        <TooltipProvider delayDuration={200}>
          <div className="flex flex-wrap gap-2 px-4">
            {row.statusConditions.map((condition) => {
              const entry = CONDITIONS_BY_NAME[condition];
              const Icon = entry?.image;
              return (
                <div
                  key={condition}
                  className="flex size-4 shrink-0 items-center justify-center"
                >
                  {Icon && entry ? (
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <span className="inline-flex cursor-default">
                          <Icon
                            className="size-4 text-primary-400"
                            aria-hidden
                          />
                        </span>
                      </TooltipTrigger>
                      <TooltipContent side="top" className="max-w-xs">
                        <span className="font-medium">{entry.name}</span>
                        <span className="mt-1 block text-muted-foreground">
                          {entry.description}
                        </span>
                      </TooltipContent>
                    </Tooltip>
                  ) : null}
                </div>
              );
            })}
          </div>
        </TooltipProvider>
      </div>
    </motion.div>
  );
};
