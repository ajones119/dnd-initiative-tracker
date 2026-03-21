import React, { useState } from "react";
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
  getInitiativeModifier,
  type Monster,
} from "../data/monsters";
import { Badge } from "./ui/badge";
import type { InitiativeRow } from "../Types";

interface MonsterAutocompleteProps {
  onSelect: (row: Omit<InitiativeRow, "id">) => void;
}

export const MonsterAutocomplete: React.FC<MonsterAutocompleteProps> = ({
  onSelect,
}) => {
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState<Monster[]>([]);

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
  };

  const handleValueChange = (value: string | null) => {
    if (!value) return;

    if (value === "__custom__") {
      const name = search.trim();
      if (!name) return;
      commit({ name, initiative: 0, statusConditions: [] });
      return;
    }

    const monster = searchResults.find((m) => m.index === value);
    if (!monster) return;

    const initiativeModifier = getInitiativeModifier(monster.dexterity);
    const speedValue = parseInt(monster.speed.replace(/\D/g, "")) || 30;
    commit({
      name: monster.name,
      initiative: 32,
      speed: speedValue,
      actions: monster.actions,
      hp: monster.hit_points,
      maxHp: monster.hit_points,
      ac: monster.armor_class,
      statusConditions: [],
    });
  };

  const getChallengeRatingColor = (cr: number) => {
    if (cr <= 1) return "bg-green-100 text-green-800";
    if (cr <= 5) return "bg-yellow-100 text-yellow-800";
    if (cr <= 10) return "bg-orange-100 text-orange-800";
    return "bg-red-100 text-red-800";
  };

  const hasContent = search.trim().length >= 1;

  return (
    <Combobox
      inputValue={search}
      onInputValueChange={handleInputChange}
      onValueChange={handleValueChange}
      value={null}
    >
      <ComboboxInput
        placeholder="Search monsters or type a custom name..."
        showTrigger={false}
        showClear={search.length > 0}
        className="w-full"
      />

      {hasContent && (
        <ComboboxContent>
          <ComboboxList>
            {/* Custom — always first */}
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

            {searchResults.length > 0 && (
              <>
                <ComboboxSeparator />
                <ComboboxGroup>
                  <ComboboxLabel>Monsters</ComboboxLabel>
                  {searchResults.map((monster) => (
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
            )}
          </ComboboxList>
        </ComboboxContent>
      )}
    </Combobox>
  );
};
