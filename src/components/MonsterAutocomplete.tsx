import React, { useEffect, useMemo, useState } from "react";
import {
  Combobox,
  ComboboxInput,
  ComboboxContent,
  ComboboxList,
  ComboboxItem,
  ComboboxGroup,
  ComboboxLabel,
  ComboboxSeparator,
} from "./ui/combobox";
import {
  searchMonsters,
  getBrowseMonsters,
  getInitiativeModifier,
  type Monster,
} from "../data/monsters";
import { Badge } from "./ui/badge";
import type { InitiativeRow } from "../Types";
import { normalizeCreatureType } from "../data/creature-types";

/** Stable id for programmatic focus (e.g. empty-state CTA). */
export const MONSTER_AUTOCOMPLETE_INPUT_ID = "monster-autocomplete-input";

/** Base UI + `render` input: programmatic `focus()` may not run `onFocus`; pair with `setOpen(true)`. */
let forceOpenMonsterAutocomplete: (() => void) | null = null;

/** Focus the monster field and open the combobox (for empty-state / external CTAs). */
export function focusMonsterAutocompleteInput() {
  const el = document.getElementById(
    MONSTER_AUTOCOMPLETE_INPUT_ID,
  ) as HTMLInputElement | null;
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "center" });
  requestAnimationFrame(() => {
    el.focus({ preventScroll: true });
    forceOpenMonsterAutocomplete?.();
  });
}

interface MonsterAutocompleteProps {
  onSelect: (row: Omit<InitiativeRow, "id">) => void;
}

export const MonsterAutocomplete: React.FC<MonsterAutocompleteProps> = ({
  onSelect,
}) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    forceOpenMonsterAutocomplete = () => setOpen(true);
    return () => {
      forceOpenMonsterAutocomplete = null;
    };
  }, []);
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState<Monster[]>([]);
  const browseMonsters = useMemo(() => getBrowseMonsters(10), []);

  const hasTypedQuery = search.trim().length >= 1;
  const monstersToShow = hasTypedQuery ? searchResults : browseMonsters;

  const handleInputChange = (val: string) => {
    if (val === "__custom__") {
      setSearch("");
      setSearchResults([]);
      return;
    }
    setSearch(val);
    if (val.trim().length >= 1) {
      setSearchResults(searchMonsters(val, 10));
    } else {
      setSearchResults([]);
    }
  };

  const commit = (row: Omit<InitiativeRow, "id">) => {
    onSelect(row);
    setSearch("");
    setSearchResults([]);
    setOpen(false);
  };

  const handleValueChange = (value: string | null) => {
    if (!value) return;

    if (value === "__custom__") {
      const name = search.trim();
      if (!name) return;
      commit({ name, initiative: 99, statusConditions: [] });
      return;
    }

    const monster = monstersToShow.find((m) => m.index === value);
    if (!monster) return;

    const speedValue = parseInt(monster.speed.replace(/\D/g, "")) || 30;
    const rolledInitiative = Math.floor(Math.random() * 20) + 1 + getInitiativeModifier(monster.dexterity);
    commit({
      name: monster.name,
      initiative: rolledInitiative,
      speed: speedValue,
      actions: monster.actions,
      hp: monster.hit_points,
      maxHp: monster.hit_points,
      ac: monster.armor_class,
      statusConditions: [],
      creatureType: normalizeCreatureType(monster.type),
    });
  };

  const getChallengeRatingColor = (cr: number) => {
    if (cr <= 1) return "bg-green-100 text-green-800";
    if (cr <= 5) return "bg-yellow-100 text-yellow-800";
    if (cr <= 10) return "bg-orange-100 text-orange-800";
    return "bg-red-100 text-red-800";
  };

  return (
    <Combobox
      open={open}
      onOpenChange={setOpen}
      inputValue={search}
      onInputValueChange={handleInputChange}
      onValueChange={handleValueChange}
      value={null}
    >
      <ComboboxInput
        id={MONSTER_AUTOCOMPLETE_INPUT_ID}
        placeholder="Search monsters or type a custom name..."
        showTrigger={false}
        showClear={search.length > 0}
        className="w-full"
        onFocus={() => setOpen(true)}
      />

      <ComboboxContent>
        <ComboboxList>
          {hasTypedQuery ? (
            <ComboboxGroup>
              <ComboboxItem
                value="__custom__"
                className="flex items-center justify-between gap-2"
              >
                <span className="truncate">{search.trim()}</span>
                <Badge variant="outline" className="text-xs shrink-0 ml-auto">
                  Custom
                </Badge>
              </ComboboxItem>
            </ComboboxGroup>
          ) : null}

          {monstersToShow.length > 0 ? (
            <>
              {hasTypedQuery ? <ComboboxSeparator /> : null}
              <ComboboxGroup>
                <ComboboxLabel>
                  {hasTypedQuery ? "Monsters" : "Monsters (A–Z)"}
                </ComboboxLabel>
                {monstersToShow.map((monster) => (
                  <ComboboxItem
                    key={monster.index}
                    value={monster.index}
                    className="flex items-center justify-between gap-2"
                  >
                    <div className="flex flex-col gap-0.5 min-w-0 flex-1">
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-medium truncate">
                          {monster.name}
                        </span>
                        <Badge
                          variant="secondary"
                          className={`text-xs shrink-0 ${getChallengeRatingColor(monster.challenge_rating)}`}
                        >
                          CR {monster.challenge_rating}
                        </Badge>
                      </div>
                      <span className="text-xs text-muted-foreground">
                        {monster.size} {monster.type} · AC{" "}
                        {monster.armor_class} · HP {monster.hit_points}
                      </span>
                    </div>
                    <span className="text-xs text-muted-foreground shrink-0">
                      +{getInitiativeModifier(monster.dexterity)} init
                    </span>
                  </ComboboxItem>
                ))}
              </ComboboxGroup>
            </>
          ) : null}
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  );
};
