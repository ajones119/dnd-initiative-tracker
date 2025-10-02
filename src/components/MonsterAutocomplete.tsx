import React, { useState, useEffect } from "react";
import { Input } from "./ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import {
  searchMonsters,
  getInitiativeModifier,
  type Monster,
} from "../data/monsters";
import { useInitiativeTracker } from "./InitiativeTrackerContext";
import { Badge } from "./ui/badge";

interface MonsterAutocompleteProps {
  getValue: () => string;
  row: any;
  column: any;
  placeholder?: string;
}

export const MonsterAutocomplete: React.FC<MonsterAutocompleteProps> = ({
  getValue,
  row,
  column,
  placeholder = "Name or search monsters...",
}) => {
  const { updateInitiativeRow } = useInitiativeTracker();
  const initialValue = getValue() as string;
  const [value, setValue] = useState(initialValue);
  const [open, setOpen] = useState(false);
  const [searchResults, setSearchResults] = useState<Monster[]>([]);

  React.useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  const handleBlur = () => {
    // Delay to allow dropdown clicks to register
    setTimeout(() => {
      setOpen(false);
      updateInitiativeRow(row.index, column.id, value);
    }, 200);
  };

  const handleFocus = () => {
    if (value.trim().length >= 2) {
      const results = searchMonsters(value, 10);
      setSearchResults(results);
      //setOpen(results.length > 0);
    }
  };

  const handleMonsterSelect = (monster: Monster) => {
    // Fill in all the monster data
    const initiativeModifier = getInitiativeModifier(monster.dexterity);
    const speedValue = parseInt(monster.speed.replace(/\D/g, "")) || 30;

    // Update each field individually to ensure they all get set
    updateInitiativeRow(row.index, "name", monster.name);
    updateInitiativeRow(row.index, "hp", monster.hit_points);
    updateInitiativeRow(row.index, "maxHp", monster.hit_points);
    updateInitiativeRow(row.index, "ac", monster.armor_class);
    updateInitiativeRow(row.index, "initiativeModifier", initiativeModifier);
    updateInitiativeRow(row.index, "speed", speedValue);
    updateInitiativeRow(row.index, "actions", monster.actions);

    setValue(monster.name);
    setOpen(false);
    setSearchResults([]);
  };

  const getChallengeRatingColor = (cr: number) => {
    if (cr <= 1) return "bg-green-100 text-green-800";
    if (cr <= 5) return "bg-yellow-100 text-yellow-800";
    if (cr <= 10) return "bg-orange-100 text-orange-800";
    return "bg-red-100 text-red-800";
  };

  return (
    <Popover
      open={open && searchResults.length > 0}
      onOpenChange={setOpen}
      modal={false}
    >
      <PopoverTrigger className="w-full">
        <Input
          value={value}
          onChange={(e) => {
            const inputValue = e.target.value;
            setValue(inputValue);

            // Search monsters as user types
            if (inputValue.trim().length >= 2) {
              const results = searchMonsters(inputValue, 10);
              setSearchResults(results);
              setOpen(results.length > 0);
            } else {
              setSearchResults([]);
              setOpen(false);
            }
          }}
          onFocus={handleFocus}
          onBlur={handleBlur}
          placeholder={placeholder}
          className="h-8 w-full"
          autoComplete="off"
        />
      </PopoverTrigger>

      <PopoverContent
        className="w-80 p-0 max-h-60 overflow-y-auto"
        align="start"
        onOpenAutoFocus={(e) => e.preventDefault()}
        onCloseAutoFocus={(e) => e.preventDefault()}
      >
        {searchResults.map((monster) => (
          <div
            key={monster.index}
            role="option"
            onMouseDown={(e) => {
              e.preventDefault(); // Prevent blur
              handleMonsterSelect(monster);
            }}
            className="flex items-center justify-between p-3 cursor-pointer hover:bg-gray-50 border-b border-gray-100 last:border-b-0"
          >
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2">
                <span className="font-medium text-sm">{monster.name}</span>
                <Badge
                  variant="secondary"
                  className={`text-xs ${getChallengeRatingColor(monster.challenge_rating)}`}
                >
                  CR {monster.challenge_rating}
                </Badge>
              </div>
              <div className="text-xs text-gray-500">
                {monster.size} {monster.type} • AC {monster.armor_class} • HP{" "}
                {monster.hit_points}
              </div>
            </div>
            <div className="text-xs text-gray-500">
              +{getInitiativeModifier(monster.dexterity)} init
            </div>
          </div>
        ))}
      </PopoverContent>
    </Popover>
  );
};
