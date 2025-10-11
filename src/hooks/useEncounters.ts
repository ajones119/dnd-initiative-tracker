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

  const exportEncounters = useCallback(() => {
    const dataStr = JSON.stringify(encounters, null, 2);
    const dataBlob = new Blob([dataStr], { type: "application/json" });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `initiative-tracker-encounters-${new Date().toISOString().split("T")[0]}.json`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  }, [encounters]);

  const exportSingleEncounter = useCallback(
    (id: string) => {
      const encounter = getEncounter(id);
      if (!encounter) return;

      const dataStr = JSON.stringify([encounter], null, 2);
      const dataBlob = new Blob([dataStr], { type: "application/json" });
      const url = URL.createObjectURL(dataBlob);
      const link = document.createElement("a");
      link.href = url;
      link.download = `${encounter.name.replace(/[^a-z0-9]/gi, "-").toLowerCase()}-${new Date().toISOString().split("T")[0]}.json`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    },
    [getEncounter],
  );

  const importEncounters = useCallback(
    (file: File) => {
      return new Promise<{ success: number; failed: number }>((resolve, reject) => {
        const reader = new FileReader();
        
        reader.onload = (e) => {
          try {
            const text = e.target?.result as string;
            const importedData = JSON.parse(text);
            
            // Ensure it's an array
            const encountersToImport = Array.isArray(importedData)
              ? importedData
              : [importedData];

            let successCount = 0;
            let failedCount = 0;

            const validEncounters = encountersToImport
              .map((encounter) => {
                try {
                  // Validate the encounter
                  const validated = EncounterSchema.parse(encounter);
                  // Generate new ID to avoid conflicts
                  const newEncounter = createEncounter(
                    validated.name,
                    validated.creatures,
                    validated.description,
                    validated.currentTurn,
                    validated.currentRound,
                    validated.aiDescription,
                    validated.combatMechanics,
                    validated.tactics,
                  );
                  successCount++;
                  return newEncounter;
                } catch (error) {
                  failedCount++;
                  console.error("Failed to import encounter:", error);
                  return null;
                }
              })
              .filter((encounter): encounter is Encounter => encounter !== null);

            if (validEncounters.length > 0) {
              const updatedEncounters = [...validEncounters, ...encounters];
              setStoredEncounters(updatedEncounters);
            }

            resolve({ success: successCount, failed: failedCount });
          } catch (error) {
            reject(new Error("Invalid JSON file"));
          }
        };

        reader.onerror = () => {
          reject(new Error("Failed to read file"));
        };

        reader.readAsText(file);
      });
    },
    [encounters, setStoredEncounters],
  );

  return {
    encounters,
    saveEncounter,
    updateExistingEncounter,
    deleteEncounter,
    getEncounter,
    duplicateEncounter,
    clearAllEncounters,
    exportEncounters,
    exportSingleEncounter,
    importEncounters,
  };
};
