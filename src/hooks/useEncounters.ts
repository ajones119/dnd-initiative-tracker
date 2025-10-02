import { useLocalStorage } from "usehooks-ts";
import { useMemo, useCallback } from "react";
import {
  EncounterSchema,
  createEncounter,
  updateEncounter,
  type Encounter,
} from "../lib/encounters";
import type { InitiativeRow } from "../components/InitiativeTrackerContext";

const ENCOUNTERS_KEY = "initiative-tracker-encounters";

export const useEncounters = () => {
  const [storedEncounters, setStoredEncounters] = useLocalStorage<Encounter[]>(
    ENCOUNTERS_KEY,
    [],
  );

  // Validate and sanitize encounters from localStorage
  const encounters = useMemo(() => {
    return storedEncounters
      .map((encounter) => {
        try {
          return EncounterSchema.parse(encounter);
        } catch {
          // Skip invalid encounters
          return null;
        }
      })
      .filter((encounter): encounter is Encounter => encounter !== null)
      .sort(
        (a, b) =>
          new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime(),
      );
  }, [storedEncounters]);

  const saveEncounter = useCallback(
    (
      name: string,
      creatures: InitiativeRow[],
      description?: string,
      currentTurn?: number,
      currentRound?: number,
      aiDescription?: string,
      combatMechanics?: Array<{
        name: string;
        description: string;
        trigger?: string;
      }>,
      tactics?: string,
    ) => {
      const newEncounter = createEncounter(
        name,
        creatures,
        description,
        currentTurn,
        currentRound,
        aiDescription,
        combatMechanics,
        tactics,
      );
      const updatedEncounters = [newEncounter, ...encounters];
      setStoredEncounters(updatedEncounters);
      return newEncounter;
    },
    [encounters, setStoredEncounters],
  );

  const updateExistingEncounter = useCallback(
    (
      id: string,
      updates: Partial<Omit<Encounter, "id" | "createdAt" | "updatedAt">>,
    ) => {
      const updatedEncounters = encounters.map((encounter) => {
        if (encounter.id === id) {
          return updateEncounter({ ...encounter, ...updates });
        }
        return encounter;
      });
      setStoredEncounters(updatedEncounters);
    },
    [encounters, setStoredEncounters],
  );

  const deleteEncounter = useCallback(
    (id: string) => {
      const updatedEncounters = encounters.filter(
        (encounter) => encounter.id !== id,
      );
      setStoredEncounters(updatedEncounters);
    },
    [encounters, setStoredEncounters],
  );

  const getEncounter = useCallback(
    (id: string) => {
      return encounters.find((encounter) => encounter.id === id);
    },
    [encounters],
  );

  const duplicateEncounter = useCallback(
    (id: string, newName?: string) => {
      const encounter = getEncounter(id);
      if (!encounter) return null;

      const duplicatedEncounter = createEncounter(
        newName || `${encounter.name} (Copy)`,
        encounter.creatures,
        encounter.description,
        0, // Reset turn and round for new encounter
        1,
        encounter.aiDescription,
        encounter.combatMechanics,
        encounter.tactics,
      );

      const updatedEncounters = [duplicatedEncounter, ...encounters];
      setStoredEncounters(updatedEncounters);
      return duplicatedEncounter;
    },
    [encounters, getEncounter, setStoredEncounters],
  );

  const clearAllEncounters = useCallback(() => {
    setStoredEncounters([]);
  }, [setStoredEncounters]);

  return {
    encounters,
    saveEncounter,
    updateExistingEncounter,
    deleteEncounter,
    getEncounter,
    duplicateEncounter,
    clearAllEncounters,
  };
};
