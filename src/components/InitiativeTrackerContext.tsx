import { createContext, useContext, useState } from "react";

export type DeathSaveStatus = "success" | "failure" | "neutral";
export enum DeathSaveStatusEnum {
  Success = "success",
  Failure = "failure",
  Neutral = "neutral",
}

export enum StatusCondition {
  Blinded = "blinded",
  Charmed = "charmed",
  Deafened = "deafened",
  Exhaustion = "exhaustion",
  Fatigued = "fatigued",
  Frightened = "frightened",
  Grappled = "grappled",
  Incapacitated = "incapacitated",
  Invisible = "invisible",
  Paralyzed = "paralyzed",
  Petrified = "petrified",
  Poisoned = "poisoned",
  Prone = "prone",
  Restrained = "restrained",
  Stunned = "stunned",
  Unconscious = "unconscious",
}

export type InitiativeRow = {
  id: string;
  name: string;
  initiative: number;
  notes?: string;
  speed?: number;
  deathSaves?: {
    1: DeathSaveStatus;
    2: DeathSaveStatus;
    3: DeathSaveStatus;
  };
  hp?: number;
  maxHp?: number;
  tempHp?: number;
  ac?: number;
  initiativeModifier?: number;
  statusConditions: StatusCondition[];
  concentration?: boolean;
  actions?: Array<{
    name: string;
    description: string;
  }>;
};

export type InitiativeTrackerContextType = {
  initiativeTracker: InitiativeRow[];
  setInitiativeTracker: (initiativeTracker: InitiativeRow[]) => void;
  currentRound: number;
  setCurrentRound: (currentRound: number) => void;
  currentTurn: number;
  setCurrentTurn: (currentTurn: number) => void;
  addInitiativeRow: (initiativeRow: Omit<InitiativeRow, "id">) => void;
  removeInitiativeRow: (index: number) => void;
  updateInitiativeRow: (
    index: number,
    field: keyof InitiativeRow,
    value: any,
  ) => void;
  nextTurn: () => void;
  previousTurn: () => void;
  reset: () => void;
};

export const InitiativeTrackerContext =
  createContext<InitiativeTrackerContextType>({
    initiativeTracker: [],
    setInitiativeTracker: () => {},
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
  });

const createEmptyRow = (): InitiativeRow => ({
  id: crypto.randomUUID(),
  name: "",
  initiative: 0,
  statusConditions: [],
});

export const InitiativeTrackerProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [initiativeTracker, setInitiativeTracker] = useState<InitiativeRow[]>(
    () => Array.from({ length: 5 }, () => createEmptyRow()),
  );
  const [currentRound, setCurrentRound] = useState<number>(1);
  const [currentTurn, setCurrentTurn] = useState<number>(0);

  const addInitiativeRow = (initiativeRow: Omit<InitiativeRow, "id">) => {
    const newRow: InitiativeRow = {
      id: crypto.randomUUID(),
      ...initiativeRow,
    };
    setInitiativeTracker((list: InitiativeRow[]) => [...list, newRow]);
  };

  const updateInitiativeRow = (
    index: number,
    field: keyof InitiativeRow,
    value: any,
  ) => {
    setInitiativeTracker((list) =>
      list.map((row, i) => (i === index ? { ...row, [field]: value } : row)),
    );
  };

  const removeInitiativeRow = (index: number) => {
    setInitiativeTracker(initiativeTracker.filter((_, i) => i !== index));
  };

  const nextTurn = () => {
    if (currentTurn + 1 >= initiativeTracker.length) {
      setCurrentTurn(0);
      setCurrentRound(currentRound + 1);
    } else {
      setCurrentTurn(currentTurn + 1);
    }
  };

  const previousTurn = () => {
    if (currentTurn - 1 < 0) {
      setCurrentTurn(initiativeTracker.length - 1);
      setCurrentRound(Math.max(1, currentRound - 1));
    } else {
      setCurrentTurn(currentTurn - 1);
    }
  };

  const reset = () => {
    setInitiativeTracker(Array.from({ length: 5 }, () => createEmptyRow()));
    setCurrentRound(1);
    setCurrentTurn(0);
  };

  return (
    <InitiativeTrackerContext.Provider
      value={{
        initiativeTracker,
        setInitiativeTracker,
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
      }}
    >
      {children}
    </InitiativeTrackerContext.Provider>
  );
};

export const useInitiativeTracker = () => {
  return useContext(InitiativeTrackerContext);
};
