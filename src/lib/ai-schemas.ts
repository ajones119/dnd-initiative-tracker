import { z } from "zod";

// Schema for a single initiative row that AI can generate
export const AIInitiativeRowSchema = z.object({
  name: z.string().describe("The name of the creature or character"),
  initiative: z
    .number()
    .min(1)
    .max(30)
    .optional()
    .describe("Initiative roll (1-30)"),
  hp: z.number().min(1).max(1000).optional().describe("Current hit points"),
  maxHp: z.number().min(1).max(1000).optional().describe("Maximum hit points"),
  ac: z.number().min(1).max(30).optional().describe("Armor class"),
  speed: z
    .number()
    .min(0)
    .max(120)
    .optional()
    .describe("Movement speed in feet"),
  notes: z
    .string()
    .optional()
    .describe("Any additional notes about the creature"),
  actions: z
    .array(
      z.object({
        name: z
          .string()
          .describe("Name of the action (e.g., 'Bite', 'Multiattack')"),
        description: z
          .string()
          .describe(
            "Full description of the action including attack bonus, damage, and effects",
          ),
      }),
    )
    .optional()
    .describe("Combat actions the creature can take"),
});

// Schema for multiple initiative rows
export const AIInitiativeResponseSchema = z.object({
  creatures: z
    .array(AIInitiativeRowSchema)
    .describe("Array of creatures for the initiative tracker"),
  explanation: z
    .string()
    .optional()
    .describe("Brief explanation of what was generated"),
});

// Schema for full encounter generation with descriptions and mechanics
export const AIEncounterResponseSchema = z.object({
  creatures: z
    .array(AIInitiativeRowSchema)
    .describe("Array of creatures for the initiative tracker"),
  encounterName: z.string().describe("Creative name for the encounter"),
  description: z
    .string()
    .describe("Rich description of the encounter setting and atmosphere"),
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
    .describe("Special combat mechanics and environmental hazards"),
  tactics: z
    .string()
    .optional()
    .describe("Suggested tactics and strategies for running this encounter"),
});

export type AIInitiativeRow = z.infer<typeof AIInitiativeRowSchema>;
export type AIInitiativeResponse = z.infer<typeof AIInitiativeResponseSchema>;
export type AIEncounterResponse = z.infer<typeof AIEncounterResponseSchema>;

// Example prompts for different scenarios
export const AI_PROMPT_EXAMPLES = {
  encounter:
    "Create a D&D encounter with 3 goblins and 1 hobgoblin captain for a party of 4 level 3 characters",
  party:
    "Create 4 D&D player characters: a human fighter, elf wizard, dwarf cleric, and halfling rogue, all level 5",
  monsters: "Add 2 owlbears and 3 dire wolves to the initiative tracker",
  npcs: "Create some tavern NPCs: a bartender, 2 patrons, and a mysterious hooded figure",
} as const;
