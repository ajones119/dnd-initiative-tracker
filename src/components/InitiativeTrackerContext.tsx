import {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
  useRef,
} from "react";
import { aiService } from "../lib/ai-service";
import { useEncountersStorage } from "./EncountersStorageContext";
import type {
  InitiativeRow,
  LoadableEncounter,
  CombatMechanic,
} from "../Types";
import { normalizeStatusConditions } from "../data/conditions";

export type { InitiativeRow, LoadableEncounter, CombatMechanic } from "../Types";

export type InitiativeTrackerContextType = {
  initiativeRows: InitiativeRow[];
  setInitiativeRows: (initiativeRows: InitiativeRow[]) => void;
  currentRound: number;
  setCurrentRound: (currentRound: number) => void;
  currentTurn: number;
  setCurrentTurn: (currentTurn: number) => void;
  addInitiativeRow: (initiativeRow: Omit<InitiativeRow, "id">) => void;
  removeInitiativeRow: (index: number) => void;
  updateInitiativeRow: (
    id: string,
    field: keyof InitiativeRow,
    value: any,
  ) => void;
  nextTurn: () => void;
  previousTurn: () => void;
  reset: () => void;
  encounterName: string;
  setEncounterName: (name: string) => void;
  combatDescription: string;
  setCombatDescription: (value: string) => void;
  encounterDescription: string;
  setEncounterDescription: (value: string) => void;
  isGeneratingEncounter: boolean;
  aiDescription: string;
  setAiDescription: (value: string) => void;
  combatMechanics: CombatMechanic[];
  setCombatMechanics: (value: CombatMechanic[]) => void;
  tactics: string;
  setTactics: (value: string) => void;
  generateEncounter: () => Promise<void>;
  loadEncounter: (encounter: LoadableEncounter) => void;
  newEncounter: () => void;
  sortByInitiative: () => void;
  editMode: boolean;
  setEditMode: (editMode: boolean) => void;
  currentEditRowId: string | null;
  setCurrentEditRowId: (id: string | null) => void;
  startCombat: () => void;
  };

export const InitiativeTrackerContext =
  createContext<InitiativeTrackerContextType>({
    initiativeRows: [],
    setInitiativeRows: () => {},
    currentRound: 1,
    setCurrentRound: () => {},
    currentTurn: 0,
    setCurrentTurn: () => {},
    addInitiativeRow: () => {},
    removeInitiativeRow: () => {},
    updateInitiativeRow: () => {},
    nextTurn: () => {},
    previousTurn: () => {},
    reset: () => {},
  encounterName: "",
  setEncounterName: () => {},
  combatDescription: "",
  setCombatDescription: () => {},
  encounterDescription: "",
  setEncounterDescription: () => {},
  isGeneratingEncounter: false,
  aiDescription: "",
  setAiDescription: () => {},
  combatMechanics: [],
  setCombatMechanics: () => {},
  tactics: "",
  setTactics: () => {},
  generateEncounter: async () => {},
  loadEncounter: () => {},
  newEncounter: () => {},
  sortByInitiative: () => {},
  editMode: false,
  setEditMode: () => {},
  currentEditRowId: null,
  setCurrentEditRowId: () => {},
  startCombat: () => {},
});

const createEmptyRow = (): InitiativeRow => ({
  id: crypto.randomUUID(),
  name: "",
  initiative: 0,
  statusConditions: [],
});

const AUTO_SAVE_DEBOUNCE_MS = 800;

export const InitiativeTrackerProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { currentEncounterId, updateExistingEncounter } =
    useEncountersStorage();

  const [initiativeRows, setInitiativeRows] = useState<InitiativeRow[]>(
    () => [],
  );
  const [currentRound, setCurrentRound] = useState<number>(1);
  const [currentTurn, setCurrentTurn] = useState<number>(0);
  const [encounterName, setEncounterName] = useState("Untitled Encounter");
  const [combatDescription, setCombatDescription] = useState("");
  const [encounterDescription, setEncounterDescription] = useState("");
  const [isGeneratingEncounter, setIsGeneratingEncounter] = useState(false);
  const [aiDescription, setAiDescription] = useState("");
  const [combatMechanics, setCombatMechanics] = useState<CombatMechanic[]>([]);
  const [tactics, setTactics] = useState("");
  const [editMode, setEditMode] = useState(false);
  const [currentEditRowId, setCurrentEditRowId] = useState<string | null>(null);
  const autoSaveTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (!currentEncounterId) return;

    if (autoSaveTimeoutRef.current) {
      clearTimeout(autoSaveTimeoutRef.current);
    }

    autoSaveTimeoutRef.current = setTimeout(() => {
      updateExistingEncounter(currentEncounterId, {
        name: encounterName,
        creatures: initiativeRows,
        currentTurn,
        currentRound,
        aiDescription,
        combatMechanics,
        tactics,
      });
      autoSaveTimeoutRef.current = null;
    }, AUTO_SAVE_DEBOUNCE_MS);

    return () => {
      if (autoSaveTimeoutRef.current) {
        clearTimeout(autoSaveTimeoutRef.current);
      }
    };
  }, [
    currentEncounterId,
    encounterName,
    initiativeRows,
    currentTurn,
    currentRound,
    aiDescription,
    combatMechanics,
    tactics,
    updateExistingEncounter,
  ]);

  const addInitiativeRow = (initiativeRow: Omit<InitiativeRow, "id">) => {
    const newRow: InitiativeRow = {
      id: crypto.randomUUID(),
      ...initiativeRow,
    };
    setInitiativeRows((list: InitiativeRow[]) => [...list, newRow]);
  };

  const updateInitiativeRow = (
    id: string,
    field: keyof InitiativeRow,
    value: unknown,
  ) => {
    setInitiativeRows((list: InitiativeRow[]) =>
      list.map((row) => (row.id === id ? { ...row, [field]: value as any } : row)),
    );
  };

  const removeInitiativeRow = (index: number) => {
    setInitiativeRows(initiativeRows.filter((_, i) => i !== index));
  };

  const nextTurn = () => {
    const len = initiativeRows.length;
    if (len === 0) return;

    const nextIndex =
      currentTurn + 1 >= len ? 0 : currentTurn + 1;
    if (nextIndex === 0 && currentTurn + 1 >= len) {
      setCurrentRound((r) => r + 1);
    }
    setCurrentTurn(nextIndex);

    const row = initiativeRows[nextIndex];
    if (row) {
      document
        .getElementById(`initiative-row-card-${row.id}`)
        ?.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  const previousTurn = () => {
    let newTurn = currentTurn - 1;
    if (currentTurn - 1 < 0) {
      newTurn = initiativeRows.length - 1;
      setCurrentRound(Math.max(1, currentRound - 1));
    }
    setCurrentTurn(newTurn);
    const row = initiativeRows[newTurn];
    if (row) {
      document
        .getElementById(`initiative-row-card-${row.id}`)
        ?.scrollIntoView({ behavior: "smooth", block: "end" });
    }
  };

  const reset = useCallback(() => {
    setInitiativeRows([]);
    setCurrentRound(1);
    setCurrentTurn(0);
  }, []);

  const loadEncounter = useCallback((encounter: LoadableEncounter) => {
    setInitiativeRows(
      encounter.creatures.map((c) => ({
        ...c,
        statusConditions: normalizeStatusConditions(c.statusConditions),
      })),
    );
    setEncounterName(encounter.name);
    setAiDescription(encounter.aiDescription ?? "");
    setCombatMechanics(encounter.combatMechanics ?? []);
    setTactics(encounter.tactics ?? "");
    if (encounter.aiDescription) {
      let displayDescription = encounter.aiDescription;
      if (
        encounter.combatMechanics &&
        encounter.combatMechanics.length > 0
      ) {
        displayDescription += "\n\n🎲 Combat Mechanics:\n";
        encounter.combatMechanics.forEach((mechanic) => {
          displayDescription += `• ${mechanic.name}: ${mechanic.description}\n`;
          if (mechanic.trigger) {
            displayDescription += `  Trigger: ${mechanic.trigger}\n`;
          }
        });
      }
      if (encounter.tactics) {
        displayDescription += `\n⚔️ Tactics: ${encounter.tactics}`;
      }
      setEncounterDescription(displayDescription);
    } else {
      setEncounterDescription(encounter.description ?? "");
    }
  }, []);

  const newEncounter = useCallback(() => {
    reset();
    setEncounterName("Untitled Encounter");
    setAiDescription("");
    setCombatMechanics([]);
    setTactics("");
    setEncounterDescription("");
  }, [reset]);

  const sortByInitiative = useCallback(() => {
    setInitiativeRows((prev) => {
      const sorted = [...prev].sort((a, b) => {
        if (b.initiative !== a.initiative) return b.initiative - a.initiative;
        const aMod = a.initiativeModifier ?? 0;
        const bMod = b.initiativeModifier ?? 0;
        if (bMod !== aMod) return bMod - aMod;
        return a.name.localeCompare(b.name);
      });
      return sorted;
    });
  }, []);

  const generateEncounter = async () => {
    if (!combatDescription.trim()) {
      alert(
        "Please enter a description for the encounter you want to generate.",
      );
      return;
    }

    setIsGeneratingEncounter(true);
    try {
      const encounterResponse = await aiService.generateFullEncounter(
        combatDescription,
      );

      reset();
      setEncounterName(encounterResponse.encounterName);
      setEncounterDescription(encounterResponse.description);
      setAiDescription(encounterResponse.description);
      setCombatMechanics(encounterResponse.combatMechanics || []);
      setTactics(encounterResponse.tactics || "");

      encounterResponse.creatures.forEach((creature) => {
        addInitiativeRow({
          name: creature.name,
          initiative: creature.initiative || 0,
          hp: creature.hp,
          maxHp: creature.maxHp,
          ac: creature.ac,
          speed: creature.speed,
          notes: creature.notes,
          actions: creature.actions,
          statusConditions: [],
        });
      });

      let message = `✅ Generated "${encounterResponse.encounterName}"!\n\n`;
      if (
        encounterResponse.combatMechanics &&
        encounterResponse.combatMechanics.length > 0
      ) {
        message += `🎲 Combat Mechanics:\n`;
        encounterResponse.combatMechanics.forEach((mechanic) => {
          message += `• ${mechanic.name}: ${mechanic.description}\n`;
          if (mechanic.trigger) {
            message += `  Trigger: ${mechanic.trigger}\n`;
          }
        });
        message += "\n";
      }
      if (encounterResponse.tactics) {
        message += `⚔️ Tactics: ${encounterResponse.tactics}`;
      }
      setEncounterDescription(message);
    } catch (error) {
      console.error("Encounter Generation Error:", error);
      alert(
        `Failed to generate encounter: ${error instanceof Error ? error.message : "Unknown error"}`,
      );
    } finally {
      setIsGeneratingEncounter(false);
    }
  };

  const startCombat = useCallback(() => {
    setCurrentRound(1);
    setCurrentTurn(0);
    setInitiativeRows((prev) => {
      //roll initiative for any rows with no initiative
      const rowsWithNoInitiative = prev.filter((row) => row.initiative === undefined);
      rowsWithNoInitiative.forEach((row) => {
        row.initiative = Math.floor(Math.random() * 20) + 1;
      });
      return prev;
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
    document.getElementById("initiative-tracker-container")?.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <InitiativeTrackerContext.Provider
      value={{
        initiativeRows,
        setInitiativeRows,
        currentRound,
        setCurrentRound,
        currentTurn,
        setCurrentTurn,
        addInitiativeRow,
        removeInitiativeRow,
        updateInitiativeRow,
        nextTurn,
        previousTurn,
        reset,
        encounterName,
        setEncounterName,
        combatDescription,
        setCombatDescription,
        encounterDescription,
        setEncounterDescription,
        isGeneratingEncounter,
        aiDescription,
        setAiDescription,
        combatMechanics,
        setCombatMechanics,
        tactics,
        setTactics,
        generateEncounter,
        loadEncounter,
        newEncounter,
        sortByInitiative,
        editMode,
        setEditMode,
        currentEditRowId,
        setCurrentEditRowId,
        startCombat,
      }}
    >
      {children}
    </InitiativeTrackerContext.Provider>
  );
};

export const useInitiativeTracker = () => {
  return useContext(InitiativeTrackerContext);
};
