import {
  createContext,
  useContext,
  useMemo,
  useCallback,
  useEffect,
} from "react";
import { useLocalStorage } from "usehooks-ts";
import {
  EncounterSchema,
  createEncounter,
  updateEncounter,
  type Encounter,
} from "../lib/encounters";
import type { InitiativeRow, CombatMechanic } from "../Types";

const ENCOUNTERS_KEY = "initiative-tracker-encounters";
const CURRENT_ENCOUNTER_ID_KEY = "initiative-tracker-current-encounter-id";

export type EncountersRecord = Record<string, Encounter>;

function toEncountersRecord(
  value: unknown,
): EncountersRecord {
  if (Array.isArray(value)) {
    return value.reduce<EncountersRecord>((acc, item) => {
      try {
        const parsed = EncounterSchema.parse(item);
        acc[parsed.id] = parsed;
        return acc;
      } catch {
        return acc;
      }
    }, {});
  }
  if (value && typeof value === "object" && !Array.isArray(value)) {
    const record = value as Record<string, unknown>;
    const entries = Object.entries(record)
      .map(([, v]) => {
        try {
          const parsed = EncounterSchema.parse(v);
          return [parsed.id, parsed] as const;
        } catch {
          return null;
        }
      })
      .filter((entry): entry is [string, Encounter] => entry !== null);
    if (entries.length === Object.keys(record).length) {
      return value as EncountersRecord;
    }
    return Object.fromEntries(entries);
  }
  return {};
}

export type EncountersStorageContextType = {
  encounters: Encounter[];
  currentEncounterId: string | null;
  setCurrentEncounterId: (id: string | null) => void;
  getEncounter: (id: string) => Encounter | undefined;
  saveEncounter: (
    name: string,
    creatures: InitiativeRow[],
    description?: string,
    currentTurn?: number,
    currentRound?: number,
    aiDescription?: string,
    combatMechanics?: CombatMechanic[],
    tactics?: string,
  ) => Encounter;
  updateExistingEncounter: (
    id: string,
    updates: Partial<
      Omit<Encounter, "id" | "createdAt" | "updatedAt">
    >,
  ) => void;
  deleteEncounter: (id: string) => void;
  duplicateEncounter: (id: string, newName?: string) => Encounter | null;
  addNewEncounter: (name?: string) => Encounter;
  clearAllEncounters: () => void;
  exportEncounters: () => void;
  exportSingleEncounter: (id: string) => void;
  importEncounters: (file: File) => Promise<{ success: number; failed: number }>;
};

const defaultContext: EncountersStorageContextType = {
  encounters: [],
  currentEncounterId: null,
  setCurrentEncounterId: () => {},
  getEncounter: () => undefined,
  saveEncounter: () => ({} as Encounter),
  updateExistingEncounter: () => {},
  deleteEncounter: () => {},
  duplicateEncounter: () => null,
  addNewEncounter: (name?: string) => ({} as Encounter),
  clearAllEncounters: () => {},
  exportEncounters: () => {},
  exportSingleEncounter: () => {},
  importEncounters: () => Promise.resolve({ success: 0, failed: 0 }),
};

export const EncountersStorageContext =
  createContext<EncountersStorageContextType>(defaultContext);

export const EncountersStorageProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [rawStored, setRawStored] = useLocalStorage<
    EncountersRecord | Encounter[]
  >(ENCOUNTERS_KEY, {});

  const storedRecord = useMemo(() => toEncountersRecord(rawStored), [rawStored]);

  useEffect(() => {
    if (Array.isArray(rawStored)) {
      setRawStored(toEncountersRecord(rawStored));
    }
  }, [rawStored, setRawStored]);

  const [currentEncounterId, setCurrentEncounterId] = useLocalStorage<
    string | null
  >(CURRENT_ENCOUNTER_ID_KEY, null);

  const encounters = useMemo(
    () =>
      Object.values(storedRecord).sort(
        (a, b) =>
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
      ),
    [storedRecord],
  );

  const getEncounter = useCallback(
    (id: string) => storedRecord[id],
    [storedRecord],
  );

  const setStoredRecord = useCallback(
    (next: EncountersRecord | ((prev: EncountersRecord) => EncountersRecord)) => {
      setRawStored(typeof next === "function" ? next(storedRecord) : next);
    },
    [storedRecord, setRawStored],
  );

  const saveEncounter = useCallback(
    (
      name: string,
      creatures: InitiativeRow[],
      description?: string,
      currentTurn?: number,
      currentRound?: number,
      aiDescription?: string,
      combatMechanics?: CombatMechanic[],
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
      setStoredRecord((prev) => ({
        ...prev,
        [newEncounter.id]: newEncounter,
      }));
      return newEncounter;
    },
    [setStoredRecord],
  );

  const updateExistingEncounter = useCallback(
    (
      id: string,
      updates: Partial<
        Omit<Encounter, "id" | "createdAt" | "updatedAt">
      >,
    ) => {
      const encounter = storedRecord[id];
      if (!encounter) return;
      setStoredRecord((prev) => ({
        ...prev,
        [id]: updateEncounter({ ...encounter, ...updates }),
      }));
    },
    [storedRecord, setStoredRecord],
  );

  const deleteEncounter = useCallback(
    (id: string) => {
      setStoredRecord((prev) => {
        const { [id]: _, ...rest } = prev;
        return rest;
      });
    },
    [setStoredRecord],
  );

  const duplicateEncounter = useCallback(
    (id: string, newName?: string) => {
      const encounter = storedRecord[id];
      if (!encounter) return null;

      const duplicatedEncounter = createEncounter(
        newName || `${encounter.name} (Copy)`,
        encounter.creatures,
        encounter.description,
        0,
        1,
        encounter.aiDescription,
        encounter.combatMechanics,
        encounter.tactics,
      );

      setStoredRecord((prev) => ({
        ...prev,
        [duplicatedEncounter.id]: duplicatedEncounter,
      }));
      return duplicatedEncounter;
    },
    [storedRecord, setStoredRecord],
  );

  const addNewEncounter = useCallback((name = "New Encounter") => {
    return saveEncounter(name, []);
  }, [saveEncounter]);

  const clearAllEncounters = useCallback(() => {
    setRawStored({});
  }, [setRawStored]);

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
      return new Promise<{ success: number; failed: number }>(
        (resolve, reject) => {
          const reader = new FileReader();

          reader.onload = (e) => {
            try {
              const text = e.target?.result as string;
              const importedData = JSON.parse(text);
              const encountersToImport = Array.isArray(importedData)
                ? importedData
                : [importedData];

              let successCount = 0;
              let failedCount = 0;

              const newEntries: [string, Encounter][] = [];
              for (const encounter of encountersToImport) {
                try {
                  const validated = EncounterSchema.parse(encounter);
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
                  newEntries.push([newEncounter.id, newEncounter]);
                } catch {
                  failedCount++;
                }
              }

              if (newEntries.length > 0) {
                setStoredRecord((prev) => ({
                  ...prev,
                  ...Object.fromEntries(newEntries),
                }));
              }

              resolve({ success: successCount, failed: failedCount });
            } catch {
              reject(new Error("Invalid JSON file"));
            }
          };

          reader.onerror = () => reject(new Error("Failed to read file"));
          reader.readAsText(file);
        },
      );
    },
    [setStoredRecord],
  );

  const value = useMemo(
    () => ({
      encounters,
      currentEncounterId,
      setCurrentEncounterId,
      getEncounter,
      saveEncounter,
      updateExistingEncounter,
      deleteEncounter,
      duplicateEncounter,
      addNewEncounter,
      clearAllEncounters,
      exportEncounters,
      exportSingleEncounter,
      importEncounters,
    }),
    [
      encounters,
      currentEncounterId,
      getEncounter,
      saveEncounter,
      updateExistingEncounter,
      deleteEncounter,
      duplicateEncounter,
      addNewEncounter,
      clearAllEncounters,
      exportEncounters,
      exportSingleEncounter,
      importEncounters,
    ],
  );

  return (
    <EncountersStorageContext.Provider value={value}>
      {children}
    </EncountersStorageContext.Provider>
  );
};

export const useEncountersStorage = () => {
  const context = useContext(EncountersStorageContext);
  if (context === undefined) {
    throw new Error(
      "useEncountersStorage must be used within EncountersStorageProvider",
    );
  }
  return context;
};
