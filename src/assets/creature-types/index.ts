import type { ConditionIcon } from "../../data/conditions";
import Beast from "./beast.svg?react";
import Construct from "./construct.svg?react";
import Dragon from "./dragon.svg?react";
import Elemental from "./elemental.svg?react";
import Fey from "./fey.svg?react";
import Fiend from "./fiend.svg?react";
import Giant from "./giant.svg?react";
import Humanoid from "./humanoid.svg?react";
import Monstrosity from "./monstrosity.svg?react";
import Ooze from "./ooze.svg?react";
import Plant from "./plant.svg?react";
import SwarmOfTinyBeasts from "./swarm of tiny beasts.svg?react";
import Undead from "./undead.svg?react";
import Wildcard from "./wildcard.svg?react";
import Celestial from "./celestial.svg?react";

/** Used when a slug has no asset yet or an unknown future type is stored. */
export const CREATURE_TYPE_ICON_FALLBACK = Wildcard;

/**
 * Canonical creature-type slug (see `CREATURE_TYPES` in `@/data/creature-types`) → icon.
 * `aberration` and `celestial` use the wildcard asset until dedicated SVGs exist.
 */
export const CREATURE_TYPE_ICONS: Record<string, ConditionIcon> = {
  aberration: Wildcard,
  beast: Beast,
  celestial: Celestial,
  construct: Construct,
  dragon: Dragon,
  elemental: Elemental,
  fey: Fey,
  fiend: Fiend,
  giant: Giant,
  humanoid: Humanoid,
  monstrosity: Monstrosity,
  ooze: Ooze,
  plant: Plant,
  "swarm of Tiny beasts": SwarmOfTinyBeasts,
  undead: Undead,
};
