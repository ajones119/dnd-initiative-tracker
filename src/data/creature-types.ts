import type { ConditionIcon } from "./conditions";
import {
  CREATURE_TYPE_ICON_FALLBACK,
  CREATURE_TYPE_ICONS,
} from "../assets/creature-types";
import { CREATURE_TYPES } from "./creature-types.generated";

export { CREATURE_TYPES };

/** Display labels for creature-type slugs (see `CREATURE_TYPES`). */
export const CREATURE_TYPES_BY_NAME: Record<string, string> = {
  aberration: "Aberration",
  beast: "Beast",
  celestial: "Celestial",
  construct: "Construct",
  dragon: "Dragon",
  elemental: "Elemental",
  fey: "Fey",
  fiend: "Fiend",
  giant: "Giant",
  humanoid: "Humanoid",
  monstrosity: "Monstrosity",
  ooze: "Ooze",
  plant: "Plant",
  "swarm of Tiny beasts": "Swarm of Tiny Beasts",
  undead: "Undead",
};

/** Lowercase input → canonical `CREATURE_TYPES` slug. */
export const CREATURE_TYPE_LOWER_TO_CANONICAL: Record<string, string> =
  Object.fromEntries(CREATURE_TYPES.map((t) => [t.toLowerCase(), t]));

/**
 * Maps free-text monster/API type strings to a canonical `CREATURE_TYPES` slug.
 * Returns `undefined` when unrecognized (caller may omit `creatureType`).
 */
export function normalizeCreatureType(
  raw: string | null | undefined,
): string | undefined {
  if (raw == null) return undefined;
  const trimmed = String(raw).trim();
  if (!trimmed) return undefined;
  const canon = CREATURE_TYPE_LOWER_TO_CANONICAL[trimmed.toLowerCase()];
  return canon;
}

/** Icon component for a canonical slug; unknown slugs fall back to the wildcard dice icon. */
export function getCreatureTypeIcon(canonical: string | undefined): ConditionIcon {
  if (!canonical) return CREATURE_TYPE_ICON_FALLBACK;
  return CREATURE_TYPE_ICONS[canonical] ?? CREATURE_TYPE_ICON_FALLBACK;
}
