import { z } from "zod";
import type { InitiativeRow } from "../components/InitiativeTrackerContext";

// Encounter schema for validation
export const EncounterSchema = z.object({
  id: z.string(),
  name: z.string().min(1, "Encounter name is required"),
  description: z.string().optional(),
  // AI-generated encounter details
  aiDescription: z
    .string()
    .optional()
    .describe(
      "Rich AI-generated description of the encounter setting and atmosphere",
    ),
  combatMechanics: z
    .array(
      z.object({
        name: z
          .string()
          .describe(
            "Name of the combat mechanic (e.g., 'Collapsing Bridge', 'Fire Spreads')",
          ),
        description: z
          .string()
          .describe("How this mechanic works and affects combat"),
        trigger: z
          .string()
          .optional()
          .describe(
            "When this mechanic activates (e.g., 'Round 3', 'When HP < 50%')",
          ),
      }),
    )
    .optional()
    .describe("Special combat mechanics and environmental hazards"),
  tactics: z
    .string()
    .optional()
    .describe("Suggested tactics and strategies for running this encounter"),
  creatures: z.array(z.any()), // Will be InitiativeRow[]
  currentTurn: z.number().default(0),
  currentRound: z.number().default(1),
  createdAt: z.string(),
  updatedAt: z.string(),
});

export type Encounter = z.infer<typeof EncounterSchema>;

// Helper to create a new encounter
export const createEncounter = (
  name: string,
  creatures: InitiativeRow[],
  description?: string,
  currentTurn: number = 0,
  currentRound: number = 1,
  aiDescription?: string,
  combatMechanics?: Array<{
    name: string;
    description: string;
    trigger?: string;
  }>,
  tactics?: string,
): Encounter => {
  const now = new Date().toISOString();
  return {
    id: crypto.randomUUID(),
    name,
    description: description || "",
    aiDescription: aiDescription || "",
    combatMechanics: combatMechanics || [],
    tactics: tactics || "",
    creatures,
    currentTurn,
    currentRound,
    createdAt: now,
    updatedAt: now,
  };
};

// Helper to update an encounter
export const updateEncounter = (encounter: Encounter): Encounter => {
  return {
    ...encounter,
    updatedAt: new Date().toISOString(),
  };
};

// Helper to format encounter display info
export const getEncounterSummary = (encounter: Encounter): string => {
  const creatureCount = encounter.creatures.length;
  const creatureNames = encounter.creatures
    .map((c) => c.name)
    .filter((name) => name.trim() !== "")
    .slice(0, 3);

  if (creatureNames.length === 0) {
    return `${creatureCount} creature${creatureCount !== 1 ? "s" : ""}`;
  }

  const summary = creatureNames.join(", ");
  const remaining = creatureCount - creatureNames.length;

  if (remaining > 0) {
    return `${summary} +${remaining} more`;
  }

  return summary;
};
