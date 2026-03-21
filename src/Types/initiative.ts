export type DeathSaveStatus = "success" | "failure" | "neutral";

export enum DeathSaveStatusEnum {
  Success = "success",
  Failure = "failure",
  Neutral = "neutral",
}

/** @deprecated Use condition names from `CONDITIONS` / `normalizeStatusConditions`; kept for reference. */
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
  /** Condition labels matching `CONDITIONS` names (see `normalizeStatusConditions`). */
  statusConditions: string[];
  concentration?: boolean;
  actions?: Array<{
    name: string;
    description: string;
  }>; 
};

export type CombatMechanic = {
  name: string;
  description: string;
  trigger?: string;
};

export type LoadableEncounter = {
  id: string;
  name: string;
  creatures: InitiativeRow[];
  description?: string;
  aiDescription?: string;
  combatMechanics?: CombatMechanic[];
  tactics?: string;
};
