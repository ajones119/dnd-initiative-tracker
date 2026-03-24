import { Button } from "@/components/ui/button";
import { Swords } from "lucide-react";
import { focusMonsterAutocompleteInput } from "./MonsterAutocomplete";

export const InitiativeEmptyState = () => {
  return (
    <div
      className="flex flex-col items-center justify-center gap-4 px-4 py-12 text-center"
      aria-live="polite"
    >
      <div className="flex max-w-sm flex-col gap-2">
        <p className="font-title text-lg font-semibold text-foreground">
          No combatants yet
        </p>
        <p className="text-sm text-muted-foreground">
          Search the monster list above or add a custom name to build your
          encounter.
        </p>
      </div>
      <Button
        type="button"
        variant="secondary"
        size="sm"
        className="gap-2"
        onClick={focusMonsterAutocompleteInput}
      >
        <Swords className="size-4 shrink-0" aria-hidden />
        Add a creature
      </Button>
    </div>
  );
};
