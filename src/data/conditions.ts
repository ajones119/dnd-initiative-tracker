import type { ComponentType, SVGProps } from "react";
import { Searcher } from "fast-fuzzy";
import {
  Blinded, Charmed, Wildcard, Deafened, Exhausted, Fatigued, Frightened,
  Grappled, Incapacitated, Invisible, Paralyzed, Petrified, Poisoned, Prone,
  Restrained, Stunned, Unconscious, AbsorbElements, Acid, Bane,
  Banished, Blessed, Burning, Cursed, DifficultTerrain, FaerieFire, Flying,
  Guided, Hasted, Heroism, Hexed, HuntersMark, Inspired, Moonbeam, Polymorphed,
  ProtectionFromEvilAndGood, Raging, Shielded, Silenced, SpellRestrained,
  Stoneskinned, TrueStrike,
} from "../assets/conditions";

/**
 * SVG imported with `?react` (see `vite-plugin-svgr`). Paths use `fill="currentColor"`, so Tailwind
 * `text-*` / `text-primary-400` etc. on the component control the icon color.
 */
export type ConditionIcon = ComponentType<SVGProps<SVGSVGElement>>;

const CONDITIONS_UNSORTED: {
  name: string;
  description: string;
  image: ConditionIcon;
}[] = [
  {
    name: "Blinded",
    description: "The creature is unable to see.",
    image: Blinded,
  },
  {
    name: "Charmed",
    description: "The creature is friendly to you and will not attack you.",
    image: Charmed,
  },
  {
    name: "Deafened",
    description: "The creature is unable to hear.",
    image: Deafened,
  },
  {
    name: "Exhausted",
    description: "The creature is exhausted and cannot perform any actions.",
    image: Exhausted,
  },
  {
    name: "Fatigued",
    description: "The creature is fatigued and cannot perform any actions.",
    image: Fatigued,
  },
  {
    name: "Frightened",
    description: "The creature is frightened and cannot perform any actions.",
    image: Frightened,
  },
  {
    name: "Grappled",
    description: "The creature is grappled and cannot perform any actions.",
    image: Grappled,
  },
  {
    name: "Incapacitated",
    description: "The creature is incapacitated and cannot perform any actions.",
    image: Incapacitated,
  },
  {
    name: "Invisible",
    description: "The creature is invisible and cannot be seen.",
    image: Invisible,
  },
  {
    name: "Paralyzed",
    description: "The creature is paralyzed and cannot perform any actions.",
    image: Paralyzed,
  },
  {
    name: "Petrified",
    description: "The creature is petrified and cannot perform any actions.",
    image: Petrified,
  },
  {
    name: "Poisoned",
    description: "The creature is poisoned and cannot perform any actions.",
    image: Poisoned,
  },
  {
    name: "Prone",
    description: "The creature is prone and cannot perform any actions.",
    image: Prone,
  },
  {
    name: "Restrained",
    description: "The creature is restrained and cannot perform any actions.",
    image: Restrained,
  },
  {
    name: "Stunned",
    description: "The creature is stunned and cannot perform any actions.",
    image: Stunned,
  },
  {
    name: "Unconscious",
    description: "The creature is unconscious and cannot perform any actions.",
    image: Unconscious,
  },

  // Spell / effect tags (tracker-friendly)
  {
    name: "Absorb Elements",
    description:
      "Absorb Elements: resistance to the triggering damage type and extra melee damage on your next hit.",
    image: AbsorbElements,
  },
  {
    name: "Acided",
    description: "Taking ongoing acid damage from an effect (track source and duration).",
    image: Acid,
  },
  {
    name: "Bane",
    description: "-1d4 to attack rolls and saving throws (Bane, concentration).",
    image: Bane,
  },
  {
    name: "Banished",
    description:
      "Banishment (or similar): on another plane or otherwise removed until the effect ends or conditions are met.",
    image: Banished,
  },
  {
    name: "Blessed",
    description: "+1d4 to attack rolls and saving throws (Bless, concentration).",
    image: Blessed,
  },
  {
    name: "Burning",
    description: "Ongoing fire damage or alight from an effect (track source and duration).",
    image: Burning,
  },
  {
    name: "Cursed",
    description:
      "Magical curse (e.g. Bestow Curse): penalties depend on the chosen curse—track specifics in notes.",
    image: Cursed,
  },
  {
    name: "Dominated",
    description:
      "Dominate-style control: typically charmed and obeys commands; often includes a telepathic link (track spell or feature).",
    image: Wildcard,
  },
  {
    name: "Faerie Fire",
    description:
      "Outlined in light: attack rolls against the creature have advantage if the attacker can see it, and it can't benefit from being invisible.",
    image: FaerieFire,
  },
  {
    name: "Flying",
    description: "Magical or granted flight (e.g. Fly)—track fly speed and duration.",
    image: Flying,
  },
  {
    name: "Guided",
    description: "Guidance: +1d4 to one ability check before the spell ends (concentration).",
    image: Guided,
  },
  {
    name: "Hasted",
    description:
      "Haste: +2 AC, advantage on Dexterity saving throws, doubled movement, and an extra action each turn (concentration).",
    image: Hasted,
  },
  {
    name: "Heroism",
    description:
      "Heroism: immune to being frightened and gains temporary hit points at the start of each of your turns (concentration).",
    image: Heroism,
  },
  {
    name: "Hexed",
    description:
      "Hex: disadvantage on ability checks with one ability you choose, and extra damage when you hit with attacks (concentration).",
    image: Hexed,
  },
  {
    name: "Hunter's Mark",
    description:
      "Hunter's Mark: extra damage when you hit the marked creature, and advantage on Wisdom (Survival) checks to track it (concentration).",
    image: HuntersMark,
  },
  {
    name: "In Darkness",
    description:
      "Inside magical darkness or similar: heavily obscured; can't see others unless you have senses that bypass it.",
    image: Wildcard,
  },
  {
    name: "In Difficult Terrain",
    description: "Each foot of movement costs extra—track when positioning matters.",
    image: DifficultTerrain,
  },
  {
    name: "Inspired",
    description:
      "Bardic Inspiration: spend the die to add to an attack roll, ability check, or saving throw (exact use can vary by subclass).",
    image: Inspired,
  },
  {
    name: "Moonbeam",
    description:
      "Moonbeam: damage when entering/light, shapechanger complications—track placement and concentration.",
    image: Moonbeam,
  },
  {
    name: "Polymorphed",
    description:
      "Polymorph or similar: stats replaced by the beast form; mental stats often retained—track the form and duration.",
    image: Polymorphed,
  },
  {
    name: "Protected (Evil and Good)",
    description:
      "Protection from evil and good: warded against aberrations, celestials, elementals, fey, fiends, and undead; they have disadvantage on attacks against the warded creature (concentration).",
    image: ProtectionFromEvilAndGood,
  },
  {
    name: "Raging",
    description:
      "Rage: damage resistances, bonus damage on Strength-based melee attacks, and advantage on Strength checks and saves (as per your class feature).",
    image: Raging,
  },
  {
    name: "Shielded",
    description:
      "Temporary AC boost (e.g. Shield: +5 AC until the start of your next turn)—track duration.",
    image: Shielded,
  },
  {
    name: "Silenced",
    description:
      "Inside Silence or similar: can't use verbal spell components in the area—distinct from the Deafened condition.",
    image: Silenced,
  },
  {
    name: "Spell Restrained",
    description:
      "Restrained specifically by a spell or magical effect (e.g. Entangle, Web)—note the source alongside generic Restrained if useful.",
    image: SpellRestrained,
  },
  {
    name: "Spirit Guardians",
    description:
      "Spirit Guardians aura: difficult terrain for enemies in the area and damage when a creature starts its turn there (concentration).",
    image: Wildcard,
  },
  {
    name: "Stoneskinned",
    description:
      "Stoneskin: resistance to nonmagical bludgeoning, piercing, and slashing (concentration).",
    image: Stoneskinned,
  },
  {
    name: "True Striked",
    description:
      "True Strike (legacy): advantage on your next turn's first attack against the target (concentration).",
    image: TrueStrike,
  },
];

export const CONDITIONS = [...CONDITIONS_UNSORTED].sort((a, b) =>
  a.name.localeCompare(b.name),
);

export type ConditionEntry = (typeof CONDITIONS)[number];

/** O(1) lookup by exact condition name (built once at module init). */
export const CONDITIONS_BY_NAME: Record<string, ConditionEntry> =
  Object.fromEntries(CONDITIONS.map((c) => [c.name, c]));

/** Lowercase name → canonical `CONDITIONS` label (for normalization). */
export const CONDITION_LOWER_TO_CANONICAL_NAME: Record<string, string> =
  Object.fromEntries(CONDITIONS.map((c) => [c.name.toLowerCase(), c.name]));

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
    const byLower =
      CONDITION_LOWER_TO_CANONICAL_NAME[label.toLowerCase()];
    if (byLower) label = byLower;
    if (!seen.has(label)) {
      seen.add(label);
      out.push(label);
    }
  }
  return out;
}
