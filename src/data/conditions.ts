import { Searcher } from "fast-fuzzy";

const CONDITIONS_UNSORTED: { name: string; description: string }[] = [
  {
    name: "Blinded",
    description: "The creature is unable to see.",
  },
  {
    name: "Charmed",
    description: "The creature is friendly to you and will not attack you.",
  },
  {
    name: "Deafened",
    description: "The creature is unable to hear.",
  },
  {
    name: "Exhausted",
    description: "The creature is exhausted and cannot perform any actions.",
  },
  {
    name: "Fatigued",
    description: "The creature is fatigued and cannot perform any actions.",
  },
  {
    name: "Frightened",
    description: "The creature is frightened and cannot perform any actions.",
  },
  {
    name: "Grappled",
    description: "The creature is grappled and cannot perform any actions.",
  },
  {
    name: "Incapacitated",
    description: "The creature is incapacitated and cannot perform any actions.",
  },
  {
    name: "Invisible",
    description: "The creature is invisible and cannot be seen.",
  },
  {
    name: "Paralyzed",
    description: "The creature is paralyzed and cannot perform any actions.",
  },
  {
    name: "Petrified",
    description: "The creature is petrified and cannot perform any actions.",
  },
  {
    name: "Poisoned",
    description: "The creature is poisoned and cannot perform any actions.",
  },
  {
    name: "Prone",
    description: "The creature is prone and cannot perform any actions.",
  },
  {
    name: "Restrained",
    description: "The creature is restrained and cannot perform any actions.",
  },
  {
    name: "Stunned",
    description: "The creature is stunned and cannot perform any actions.",
  },
  {
    name: "Unconscious",
    description: "The creature is unconscious and cannot perform any actions.",
  },

  // Spell / effect tags (tracker-friendly)
  {
    name: "Absorb Elements",
    description:
      "Absorb Elements: resistance to the triggering damage type and extra melee damage on your next hit.",
  },
  {
    name: "Acided",
    description: "Taking ongoing acid damage from an effect (track source and duration).",
  },
  {
    name: "Bane",
    description: "-1d4 to attack rolls and saving throws (Bane, concentration).",
  },
  {
    name: "Banished",
    description:
      "Banishment (or similar): on another plane or otherwise removed until the effect ends or conditions are met.",
  },
  {
    name: "Blessed",
    description: "+1d4 to attack rolls and saving throws (Bless, concentration).",
  },
  {
    name: "Burning",
    description: "Ongoing fire damage or alight from an effect (track source and duration).",
  },
  {
    name: "Cursed",
    description:
      "Magical curse (e.g. Bestow Curse): penalties depend on the chosen curse—track specifics in notes.",
  },
  {
    name: "Dominated",
    description:
      "Dominate-style control: typically charmed and obeys commands; often includes a telepathic link (track spell or feature).",
  },
  {
    name: "Faerie Fire",
    description:
      "Outlined in light: attack rolls against the creature have advantage if the attacker can see it, and it can't benefit from being invisible.",
  },
  {
    name: "Flying",
    description: "Magical or granted flight (e.g. Fly)—track fly speed and duration.",
  },
  {
    name: "Guided",
    description: "Guidance: +1d4 to one ability check before the spell ends (concentration).",
  },
  {
    name: "Hasted",
    description:
      "Haste: +2 AC, advantage on Dexterity saving throws, doubled movement, and an extra action each turn (concentration).",
  },
  {
    name: "Heroism",
    description:
      "Heroism: immune to being frightened and gains temporary hit points at the start of each of your turns (concentration).",
  },
  {
    name: "Hexed",
    description:
      "Hex: disadvantage on ability checks with one ability you choose, and extra damage when you hit with attacks (concentration).",
  },
  {
    name: "Hunter's Mark",
    description:
      "Hunter's Mark: extra damage when you hit the marked creature, and advantage on Wisdom (Survival) checks to track it (concentration).",
  },
  {
    name: "In Darkness",
    description:
      "Inside magical darkness or similar: heavily obscured; can't see others unless you have senses that bypass it.",
  },
  {
    name: "In Difficult Terrain",
    description: "Each foot of movement costs extra—track when positioning matters.",
  },
  {
    name: "Inspired",
    description:
      "Bardic Inspiration: spend the die to add to an attack roll, ability check, or saving throw (exact use can vary by subclass).",
  },
  {
    name: "Moonbeam",
    description:
      "Moonbeam: damage when entering/light, shapechanger complications—track placement and concentration.",
  },
  {
    name: "Polymorphed",
    description:
      "Polymorph or similar: stats replaced by the beast form; mental stats often retained—track the form and duration.",
  },
  {
    name: "Protected (Evil and Good)",
    description:
      "Protection from evil and good: warded against aberrations, celestials, elementals, fey, fiends, and undead; they have disadvantage on attacks against the warded creature (concentration).",
  },
  {
    name: "Raging",
    description:
      "Rage: damage resistances, bonus damage on Strength-based melee attacks, and advantage on Strength checks and saves (as per your class feature).",
  },
  {
    name: "Shielded",
    description:
      "Temporary AC boost (e.g. Shield: +5 AC until the start of your next turn)—track duration.",
  },
  {
    name: "Silenced",
    description:
      "Inside Silence or similar: can't use verbal spell components in the area—distinct from the Deafened condition.",
  },
  {
    name: "Spell Restrained",
    description:
      "Restrained specifically by a spell or magical effect (e.g. Entangle, Web)—note the source alongside generic Restrained if useful.",
  },
  {
    name: "Spirit Guardians",
    description:
      "Spirit Guardians aura: difficult terrain for enemies in the area and damage when a creature starts its turn there (concentration).",
  },
  {
    name: "Stoneskinned",
    description:
      "Stoneskin: resistance to nonmagical bludgeoning, piercing, and slashing (concentration).",
  },
  {
    name: "True Striked",
    description:
      "True Strike (legacy): advantage on your next turn's first attack against the target (concentration).",
  },
];

export const CONDITIONS = [...CONDITIONS_UNSORTED].sort((a, b) =>
  a.name.localeCompare(b.name),
);

export type ConditionEntry = (typeof CONDITIONS)[number];

const conditionSearcher = new Searcher(CONDITIONS, {
  keySelector: (c) => [c.name, c.description],
  threshold: 0.35,
});

/** Fuzzy search on condition name and description (fast-fuzzy). Empty query returns full sorted list. */
export function searchConditions(query: string): ConditionEntry[] {
  const q = query.trim();
  if (!q) return CONDITIONS;
  return conditionSearcher.search(q);
}

/** Maps legacy `StatusCondition` enum values to `CONDITIONS` labels. */
const LEGACY_STATUS_TO_LABEL: Record<string, string> = {
  blinded: "Blinded",
  charmed: "Charmed",
  deafened: "Deafened",
  exhaustion: "Exhausted",
  fatigued: "Fatigued",
  frightened: "Frightened",
  grappled: "Grappled",
  incapacitated: "Incapacitated",
  invisible: "Invisible",
  paralyzed: "Paralyzed",
  petrified: "Petrified",
  poisoned: "Poisoned",
  prone: "Prone",
  restrained: "Restrained",
  stunned: "Stunned",
  unconscious: "Unconscious",
};

const CONDITION_NAME_BY_LOWER = new Map(
  CONDITIONS.map((c) => [c.name.toLowerCase(), c.name]),
);

/**
 * Coerces stored status values to canonical `CONDITIONS` names; keeps unknown strings.
 */
export function normalizeStatusConditions(raw: unknown): string[] {
  if (!Array.isArray(raw)) return [];
  const out: string[] = [];
  const seen = new Set<string>();
  for (const item of raw) {
    if (typeof item !== "string" || !item.trim()) continue;
    let label = LEGACY_STATUS_TO_LABEL[item] ?? item;
    const byLower = CONDITION_NAME_BY_LOWER.get(label.toLowerCase());
    if (byLower) label = byLower;
    if (!seen.has(label)) {
      seen.add(label);
      out.push(label);
    }
  }
  return out;
}
