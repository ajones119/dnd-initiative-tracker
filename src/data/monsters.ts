// Auto-generated monster types
export interface Monster {
  index: string;
  name: string;
  size: string;
  type: string;
  alignment: string;
  armor_class: number;
  hit_points: number;
  hit_dice: string;
  speed: string;
  challenge_rating: number;
  proficiency_bonus: number;
  xp: number;
  dexterity: number;
  passive_perception: number;
  languages: string;
  damage_resistances: string[];
  damage_immunities: string[];
  condition_immunities: string[];
  actions: Array<{
    name: string;
    description: string;
  }>;
}

export const MONSTERS: Monster[] = [
  {
    "index": "aboleth",
    "name": "Aboleth",
    "size": "Large",
    "type": "aberration",
    "alignment": "lawful evil",
    "armor_class": 17,
    "hit_points": 135,
    "hit_dice": "18d10",
    "speed": "10 ft.",
    "challenge_rating": 10,
    "proficiency_bonus": 4,
    "xp": 5900,
    "dexterity": 9,
    "passive_perception": 20,
    "languages": "Deep Speech, telepathy 120 ft.",
    "damage_resistances": [],
    "damage_immunities": [],
    "condition_immunities": [],
    "actions": [
      {
        "name": "Multiattack",
        "description": "The aboleth makes three tentacle attacks."
      },
      {
        "name": "Tentacle",
        "description": "Melee Weapon Attack: +9 to hit, reach 10 ft., one target. Hit: 12 (2d6 + 5) bludgeoning damage. If the target is a creature, it must succeed on a DC 14 Constitution saving throw or become diseased. The disease has no effect for 1 minute and can be removed by any magic that cures disease. After 1 minute, the diseased creature's skin becomes translucent and slimy, the creature can't regain hit points unless it is underwater, and the disease can be removed only by heal or another disease-curing spell of 6th level or higher. When the creature is outside a body of water, it takes 6 (1d12) acid damage every 10 minutes unless moisture is applied to the skin before 10 minutes have passed."
      },
      {
        "name": "Tail",
        "description": "Melee Weapon Attack: +9 to hit, reach 10 ft., one target. Hit: 15 (3d6 + 5) bludgeoning damage."
      },
      {
        "name": "Enslave",
        "description": "The aboleth targets one creature it can see within 30 ft. of it. The target must succeed on a DC 14 Wisdom saving throw or be magically charmed by the aboleth until the aboleth dies or until it is on a different plane of existence from the target. The charmed target is under the aboleth's control and can't take reactions, and the aboleth and the target can communicate telepathically with each other over any distance.\nWhenever the charmed target takes damage, the target can repeat the saving throw. On a success, the effect ends. No more than once every 24 hours, the target can also repeat the saving throw when it is at least 1 mile away from the aboleth."
      }
    ]
  },
  {
    "index": "acolyte",
    "name": "Acolyte",
    "size": "Medium",
    "type": "humanoid",
    "alignment": "any alignment",
    "armor_class": 10,
    "hit_points": 9,
    "hit_dice": "2d8",
    "speed": "30 ft.",
    "challenge_rating": 0.25,
    "proficiency_bonus": 2,
    "xp": 50,
    "dexterity": 10,
    "passive_perception": 12,
    "languages": "any one language (usually Common)",
    "damage_resistances": [],
    "damage_immunities": [],
    "condition_immunities": [],
    "actions": [
      {
        "name": "Club",
        "description": "Melee Weapon Attack: +2 to hit, reach 5 ft., one target. Hit: 2 (1d4) bludgeoning damage."
      }
    ]
  },
  {
    "index": "adult-black-dragon",
    "name": "Adult Black Dragon",
    "size": "Huge",
    "type": "dragon",
    "alignment": "chaotic evil",
    "armor_class": 19,
    "hit_points": 195,
    "hit_dice": "17d12",
    "speed": "40 ft.",
    "challenge_rating": 14,
    "proficiency_bonus": 5,
    "xp": 11500,
    "dexterity": 14,
    "passive_perception": 21,
    "languages": "Common, Draconic",
    "damage_resistances": [],
    "damage_immunities": [
      "acid"
    ],
    "condition_immunities": [],
    "actions": [
      {
        "name": "Multiattack",
        "description": "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws."
      },
      {
        "name": "Bite",
        "description": "Melee Weapon Attack: +11 to hit, reach 10 ft., one target. Hit: 17 (2d10 + 6) piercing damage plus 4 (1d8) acid damage."
      },
      {
        "name": "Claw",
        "description": "Melee Weapon Attack: +11 to hit, reach 5 ft., one target. Hit: 13 (2d6 + 6) slashing damage."
      },
      {
        "name": "Tail",
        "description": "Melee Weapon Attack: +11 to hit, reach 15 ft., one target. Hit: 15 (2d8 + 6) bludgeoning damage."
      },
      {
        "name": "Frightful Presence",
        "description": "Each creature of the dragon's choice that is within 120 feet of the dragon and aware of it must succeed on a DC 16 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours."
      },
      {
        "name": "Acid Breath",
        "description": "The dragon exhales acid in a 60-foot line that is 5 feet wide. Each creature in that line must make a DC 18 Dexterity saving throw, taking 54 (12d8) acid damage on a failed save, or half as much damage on a successful one."
      }
    ]
  },
  {
    "index": "adult-blue-dragon",
    "name": "Adult Blue Dragon",
    "size": "Huge",
    "type": "dragon",
    "alignment": "lawful evil",
    "armor_class": 19,
    "hit_points": 225,
    "hit_dice": "18d12",
    "speed": "40 ft.",
    "challenge_rating": 16,
    "proficiency_bonus": 5,
    "xp": 15000,
    "dexterity": 10,
    "passive_perception": 22,
    "languages": "Common, Draconic",
    "damage_resistances": [],
    "damage_immunities": [
      "lightning"
    ],
    "condition_immunities": [],
    "actions": [
      {
        "name": "Multiattack",
        "description": "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws."
      },
      {
        "name": "Bite",
        "description": "Melee Weapon Attack: +12 to hit, reach 10 ft., one target. Hit: 18 (2d10 + 7) piercing damage plus 5 (1d10) lightning damage."
      },
      {
        "name": "Claw",
        "description": "Melee Weapon Attack: +12 to hit, reach 5 ft., one target. Hit: 14 (2d6 + 7) slashing damage."
      },
      {
        "name": "Tail",
        "description": "Melee Weapon Attack: +12 to hit, reach 15 ft., one target. Hit: 16 (2d8 + 7) bludgeoning damage."
      },
      {
        "name": "Frightful Presence",
        "description": "Each creature of the dragon's choice that is within 120 ft. of the dragon and aware of it must succeed on a DC 17 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours."
      },
      {
        "name": "Lightning Breath",
        "description": "The dragon exhales lightning in a 90-foot line that is 5 ft. wide. Each creature in that line must make a DC 19 Dexterity saving throw, taking 66 (12d10) lightning damage on a failed save, or half as much damage on a successful one."
      }
    ]
  },
  {
    "index": "adult-brass-dragon",
    "name": "Adult Brass Dragon",
    "size": "Huge",
    "type": "dragon",
    "alignment": "chaotic good",
    "armor_class": 18,
    "hit_points": 172,
    "hit_dice": "15d12",
    "speed": "40 ft.",
    "challenge_rating": 13,
    "proficiency_bonus": 5,
    "xp": 10000,
    "dexterity": 10,
    "passive_perception": 21,
    "languages": "Common, Draconic",
    "damage_resistances": [],
    "damage_immunities": [
      "fire"
    ],
    "condition_immunities": [],
    "actions": [
      {
        "name": "Multiattack",
        "description": "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws."
      },
      {
        "name": "Bite",
        "description": "Melee Weapon Attack: +11 to hit, reach 10 ft., one target. Hit: 17 (2d10 + 6) piercing damage."
      },
      {
        "name": "Claw",
        "description": "Melee Weapon Attack: +11 to hit, reach 5 ft., one target. Hit: 13 (2d6 + 6) slashing damage."
      },
      {
        "name": "Tail",
        "description": "Melee Weapon Attack: +11 to hit, reach 15 ft., one target. Hit: 15 (2d8 + 6) bludgeoning damage."
      },
      {
        "name": "Frightful Presence",
        "description": "Each creature of the dragon's choice that is within 120 feet of the dragon and aware of it must succeed on a DC 16 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours ."
      },
      {
        "name": "Breath Weapons",
        "description": "The dragon uses one of the following breath weapons.\nFire Breath. The dragon exhales fire in an 60-foot line that is 5 feet wide. Each creature in that line must make a DC 18 Dexterity saving throw, taking 45 (13d6) fire damage on a failed save, or half as much damage on a successful one.\nSleep Breath. The dragon exhales sleep gas in a 60-foot cone. Each creature in that area must succeed on a DC 18 Constitution saving throw or fall unconscious for 10 minutes. This effect ends for a creature if the creature takes damage or someone uses an action to wake it."
      }
    ]
  },
  {
    "index": "adult-bronze-dragon",
    "name": "Adult Bronze Dragon",
    "size": "Huge",
    "type": "dragon",
    "alignment": "lawful good",
    "armor_class": 19,
    "hit_points": 212,
    "hit_dice": "17d12",
    "speed": "40 ft.",
    "challenge_rating": 15,
    "proficiency_bonus": 5,
    "xp": 13000,
    "dexterity": 10,
    "passive_perception": 22,
    "languages": "Common, Draconic",
    "damage_resistances": [],
    "damage_immunities": [
      "lightning"
    ],
    "condition_immunities": [],
    "actions": [
      {
        "name": "Multiattack",
        "description": "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws."
      },
      {
        "name": "Bite",
        "description": "Melee Weapon Attack: +12 to hit, reach 10 ft., one target. Hit: 18 (2d10 + 7) piercing damage."
      },
      {
        "name": "Claw",
        "description": "Melee Weapon Attack: +12 to hit, reach 5 ft., one target. Hit: 14 (2d6 + 7) slashing damage."
      },
      {
        "name": "Tail",
        "description": "Melee Weapon Attack: +12 to hit, reach 15 ft., one target. Hit: 16 (2d8 + 7) bludgeoning damage."
      },
      {
        "name": "Frightful Presence",
        "description": "Each creature of the dragon's choice that is within 120 feet of the dragon and aware of it must succeed on a DC 17 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours."
      },
      {
        "name": "Breath Weapons",
        "description": "The dragon uses one of the following breath weapons.\nLightning Breath. The dragon exhales lightning in a 90-foot line that is 5 feet wide. Each creature in that line must make a DC 19 Dexterity saving throw, taking 66 (12d10) lightning damage on a failed save, or half as much damage on a successful one.\nRepulsion Breath. The dragon exhales repulsion energy in a 30-foot cone. Each creature in that area must succeed on a DC 19 Strength saving throw. On a failed save, the creature is pushed 60 feet away from the dragon."
      }
    ]
  },
  {
    "index": "adult-copper-dragon",
    "name": "Adult Copper Dragon",
    "size": "Huge",
    "type": "dragon",
    "alignment": "chaotic good",
    "armor_class": 18,
    "hit_points": 184,
    "hit_dice": "16d12",
    "speed": "40 ft.",
    "challenge_rating": 14,
    "proficiency_bonus": 5,
    "xp": 11500,
    "dexterity": 12,
    "passive_perception": 22,
    "languages": "Common, Draconic",
    "damage_resistances": [],
    "damage_immunities": [
      "acid"
    ],
    "condition_immunities": [],
    "actions": [
      {
        "name": "Multiattack",
        "description": "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws."
      },
      {
        "name": "Bite",
        "description": "Melee Weapon Attack: +11 to hit, reach 10 ft., one target. Hit: 17 (2d10 + 6) piercing damage."
      },
      {
        "name": "Claw",
        "description": "Melee Weapon Attack: +11 to hit, reach 5 ft., one target. Hit: 13 (2d6 + 6) slashing damage."
      },
      {
        "name": "Tail",
        "description": "Melee Weapon Attack: +11 to hit, reach 15 ft., one target. Hit: 15 (2d8 + 6) bludgeoning damage."
      },
      {
        "name": "Frightful Presence",
        "description": "Each creature of the dragon's choice that is within 120 feet of the dragon and aware of it must succeed on a DC 16 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours."
      },
      {
        "name": "Breath Weapons",
        "description": "The dragon uses one of the following breath weapons.\nAcid Breath. The dragon exhales acid in an 60-foot line that is 5 feet wide. Each creature in that line must make a DC 18 Dexterity saving throw, taking 54 (12d8) acid damage on a failed save, or half as much damage on a successful one.\nSlowing Breath. The dragon exhales gas in a 60-foot cone. Each creature in that area must succeed on a DC 18 Constitution saving throw. On a failed save, the creature can't use reactions, its speed is halved, and it can't make more than one attack on its turn. In addition, the creature can use either an action or a bonus action on its turn, but not both. These effects last for 1 minute. The creature can repeat the saving throw at the end of each of its turns, ending the effect on itself with a successful save."
      }
    ]
  },
  {
    "index": "adult-gold-dragon",
    "name": "Adult Gold Dragon",
    "size": "Huge",
    "type": "dragon",
    "alignment": "lawful good",
    "armor_class": 19,
    "hit_points": 256,
    "hit_dice": "19d12",
    "speed": "40 ft.",
    "challenge_rating": 17,
    "proficiency_bonus": 6,
    "xp": 18000,
    "dexterity": 14,
    "passive_perception": 24,
    "languages": "Common, Draconic",
    "damage_resistances": [],
    "damage_immunities": [
      "fire"
    ],
    "condition_immunities": [],
    "actions": [
      {
        "name": "Multiattack",
        "description": "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws."
      },
      {
        "name": "Bite",
        "description": "Melee Weapon Attack: +14 to hit, reach 10 ft., one target. Hit: 19 (2d10 + 8) piercing damage."
      },
      {
        "name": "Claw",
        "description": "Melee Weapon Attack: +14 to hit, reach 5 ft., one target. Hit: 15 (2d6 + 8) slashing damage."
      },
      {
        "name": "Tail",
        "description": "Melee Weapon Attack: +14 to hit, reach 15 ft., one target. Hit: 17 (2d8 + 8) bludgeoning damage."
      },
      {
        "name": "Frightful Presence",
        "description": "Each creature of the dragon's choice that is within 120 feet of the dragon and aware of it must succeed on a DC 21 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours."
      },
      {
        "name": "Breath Weapons",
        "description": "The dragon uses one of the following breath weapons.\nFire Breath. The dragon exhales fire in a 60-foot cone. Each creature in that area must make a DC 21 Dexterity saving throw, taking 66 (12d10) fire damage on a failed save, or half as much damage on a successful one.\nWeakening Breath. The dragon exhales gas in a 60-foot cone. Each creature in that area must succeed on a DC 21 Strength saving throw or have disadvantage on Strength-based attack rolls, Strength checks, and Strength saving throws for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
      }
    ]
  },
  {
    "index": "adult-green-dragon",
    "name": "Adult Green Dragon",
    "size": "Huge",
    "type": "dragon",
    "alignment": "lawful evil",
    "armor_class": 19,
    "hit_points": 207,
    "hit_dice": "18d12",
    "speed": "40 ft.",
    "challenge_rating": 15,
    "proficiency_bonus": 5,
    "xp": 13000,
    "dexterity": 12,
    "passive_perception": 22,
    "languages": "Common, Draconic",
    "damage_resistances": [],
    "damage_immunities": [
      "poison"
    ],
    "condition_immunities": [
      "Poisoned"
    ],
    "actions": [
      {
        "name": "Multiattack",
        "description": "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws."
      },
      {
        "name": "Bite",
        "description": "Melee Weapon Attack: +11 to hit, reach 10 ft., one target. Hit: 17 (2d10 + 6) piercing damage plus 7 (2d6) poison damage."
      },
      {
        "name": "Claw",
        "description": "Melee Weapon Attack: +11 to hit, reach 5 ft., one target. Hit: 13 (2d6 + 6) slashing damage."
      },
      {
        "name": "Tail",
        "description": "Melee Weapon Attack: +11 to hit, reach 15 ft., one target. Hit: 15 (2d8 + 6) bludgeoning damage."
      },
      {
        "name": "Frightful Presence",
        "description": "Each creature of the dragon's choice that is within 120 feet of the dragon and aware of it must succeed on a DC 16 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours ."
      },
      {
        "name": "Poison Breath",
        "description": "The dragon exhales poisonous gas in a 60-foot cone. Each creature in that area must make a DC 18 Constitution saving throw, taking 56 (16d6) poison damage on a failed save, or half as much damage on a successful one."
      }
    ]
  },
  {
    "index": "adult-red-dragon",
    "name": "Adult Red Dragon",
    "size": "Huge",
    "type": "dragon",
    "alignment": "chaotic evil",
    "armor_class": 19,
    "hit_points": 256,
    "hit_dice": "19d12",
    "speed": "40 ft.",
    "challenge_rating": 17,
    "proficiency_bonus": 6,
    "xp": 18000,
    "dexterity": 10,
    "passive_perception": 23,
    "languages": "Common, Draconic",
    "damage_resistances": [],
    "damage_immunities": [
      "fire"
    ],
    "condition_immunities": [],
    "actions": [
      {
        "name": "Multiattack",
        "description": "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws."
      },
      {
        "name": "Bite",
        "description": "Melee Weapon Attack: +14 to hit, reach 10 ft., one target. Hit: 19 (2d10 + 8) piercing damage plus 7 (2d6) fire damage."
      },
      {
        "name": "Claw",
        "description": "Melee Weapon Attack: +14 to hit, reach 5 ft., one target. Hit: 15 (2d6 + 8) slashing damage."
      },
      {
        "name": "Tail",
        "description": "Melee Weapon Attack: +14 to hit, reach 15 ft., one target. Hit: 17 (2d8 + 8) bludgeoning damage."
      },
      {
        "name": "Frightful Presence",
        "description": "Each creature of the dragon's choice that is within 120 ft. of the dragon and aware of it must succeed on a DC 19 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours."
      },
      {
        "name": "Fire Breath",
        "description": "The dragon exhales fire in a 60-foot cone. Each creature in that area must make a DC 21 Dexterity saving throw, taking 63 (18d6) fire damage on a failed save, or half as much damage on a successful one."
      }
    ]
  },
  {
    "index": "adult-silver-dragon",
    "name": "Adult Silver Dragon",
    "size": "Huge",
    "type": "dragon",
    "alignment": "lawful good",
    "armor_class": 19,
    "hit_points": 243,
    "hit_dice": "18d12",
    "speed": "40 ft.",
    "challenge_rating": 16,
    "proficiency_bonus": 5,
    "xp": 15000,
    "dexterity": 10,
    "passive_perception": 21,
    "languages": "Common, Draconic",
    "damage_resistances": [],
    "damage_immunities": [
      "cold"
    ],
    "condition_immunities": [],
    "actions": [
      {
        "name": "Multiattack",
        "description": "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws."
      },
      {
        "name": "Bite",
        "description": "Melee Weapon Attack: +13 to hit, reach 10 ft., one target. Hit: 19 (2d10 + 8) piercing damage."
      },
      {
        "name": "Claw",
        "description": "Melee Weapon Attack: +13 to hit, reach 5 ft., one target. Hit: 15 (2d6 + 8) slashing damage."
      },
      {
        "name": "Tail",
        "description": "Melee Weapon Attack: +13 to hit, reach 15 ft., one target. Hit: 17 (2d8 + 8) bludgeoning damage."
      },
      {
        "name": "Frightful Presence",
        "description": "Each creature of the dragon's choice that is within 120 feet of the dragon and aware of it must succeed on a DC 18 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours."
      },
      {
        "name": "Breath Weapons",
        "description": "The dragon uses one of the following breath weapons.\nCold Breath. The dragon exhales an icy blast in a 60-foot cone. Each creature in that area must make a DC 20 Constitution saving throw, taking 58 (13d8) cold damage on a failed save, or half as much damage on a successful one.\nParalyzing Breath. The dragon exhales paralyzing gas in a 60-foot cone. Each creature in that area must succeed on a DC 20 Constitution saving throw or be paralyzed for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
      }
    ]
  },
  {
    "index": "adult-white-dragon",
    "name": "Adult White Dragon",
    "size": "Huge",
    "type": "dragon",
    "alignment": "chaotic evil",
    "armor_class": 18,
    "hit_points": 200,
    "hit_dice": "16d12",
    "speed": "40 ft.",
    "challenge_rating": 13,
    "proficiency_bonus": 5,
    "xp": 10000,
    "dexterity": 10,
    "passive_perception": 21,
    "languages": "Common, Draconic",
    "damage_resistances": [],
    "damage_immunities": [
      "cold"
    ],
    "condition_immunities": [],
    "actions": [
      {
        "name": "Multiattack",
        "description": "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws."
      },
      {
        "name": "Bite",
        "description": "Melee Weapon Attack: +11 to hit, reach 10 ft., one target. Hit: 17 (2d10 + 6) piercing damage plus 4 (1d8) cold damage."
      },
      {
        "name": "Claw",
        "description": "Melee Weapon Attack: +11 to hit, reach 5 ft., one target. Hit: 13 (2d6 + 6) slashing damage."
      },
      {
        "name": "Tail",
        "description": "Melee Weapon Attack: +11 to hit, reach 15 ft., one target. Hit: 15 (2d8 + 6) bludgeoning damage."
      },
      {
        "name": "Frightful Presence",
        "description": "Each creature of the dragon's choice that is within 120 ft. of the dragon and aware of it must succeed on a DC 14 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours."
      },
      {
        "name": "Cold Breath",
        "description": "The dragon exhales an icy blast in a 60-foot cone. Each creature in that area must make a DC 19 Constitution saving throw, taking 54 (12d8) cold damage on a failed save, or half as much damage on a successful one."
      }
    ]
  },
  {
    "index": "air-elemental",
    "name": "Air Elemental",
    "size": "Large",
    "type": "elemental",
    "alignment": "neutral",
    "armor_class": 15,
    "hit_points": 90,
    "hit_dice": "12d10",
    "speed": "30 ft.",
    "challenge_rating": 5,
    "proficiency_bonus": 3,
    "xp": 1800,
    "dexterity": 20,
    "passive_perception": 10,
    "languages": "Auran",
    "damage_resistances": [
      "lightning",
      "thunder",
      "bludgeoning, piercing, and slashing from nonmagical weapons"
    ],
    "damage_immunities": [
      "poison"
    ],
    "condition_immunities": [
      "Exhaustion",
      "Grappled",
      "Paralyzed",
      "Petrified",
      "Poisoned",
      "Prone",
      "Restrained",
      "Unconscious"
    ],
    "actions": [
      {
        "name": "Multiattack",
        "description": "The elemental makes two slam attacks."
      },
      {
        "name": "Slam",
        "description": "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 14 (2d8 + 5) bludgeoning damage."
      },
      {
        "name": "Whirlwind",
        "description": "Each creature in the elemental's space must make a DC 13 Strength saving throw. On a failure, a target takes 15 (3d8 + 2) bludgeoning damage and is flung up 20 feet away from the elemental in a random direction and knocked prone. If a thrown target strikes an object, such as a wall or floor, the target takes 3 (1d6) bludgeoning damage for every 10 feet it was thrown. If the target is thrown at another creature, that creature must succeed on a DC 13 Dexterity saving throw or take the same damage and be knocked prone.\nIf the saving throw is successful, the target takes half the bludgeoning damage and isn't flung away or knocked prone."
      }
    ]
  },
  {
    "index": "ancient-black-dragon",
    "name": "Ancient Black Dragon",
    "size": "Gargantuan",
    "type": "dragon",
    "alignment": "chaotic evil",
    "armor_class": 22,
    "hit_points": 367,
    "hit_dice": "21d20",
    "speed": "40 ft.",
    "challenge_rating": 21,
    "proficiency_bonus": 7,
    "xp": 33000,
    "dexterity": 14,
    "passive_perception": 26,
    "languages": "Common, Draconic",
    "damage_resistances": [],
    "damage_immunities": [
      "acid"
    ],
    "condition_immunities": [],
    "actions": [
      {
        "name": "Multiattack",
        "description": "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws."
      },
      {
        "name": "Bite",
        "description": "Melee Weapon Attack:+ 15 to hit, reach 15 ft., one target. Hit: 19 (2d10 + 8) piercing damage plus 9 (2d8) acid damage."
      },
      {
        "name": "Claw",
        "description": "Melee Weapon Attack: +15 to hit, reach 10 ft., one target. Hit: 15 (2d6 + 8) slashing damage."
      },
      {
        "name": "Tail",
        "description": "Melee Weapon Attack: +15 to hit, reach 20 ft., one target. Hit: 17 (2d8 + 8) bludgeoning damage."
      },
      {
        "name": "Frightful Presence",
        "description": "Each creature of the dragon's choice that is within 120 feet of the dragon and aware of it must succeed on a DC 19 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours."
      },
      {
        "name": "Acid Breath",
        "description": "The dragon exhales acid in a 90-foot line that is 10 feet wide. Each creature in that line must make a DC 22 Dexterity saving throw, taking 67 (15d8) acid damage on a failed save, or half as much damage on a successful one."
      }
    ]
  },
  {
    "index": "ancient-blue-dragon",
    "name": "Ancient Blue Dragon",
    "size": "Gargantuan",
    "type": "dragon",
    "alignment": "lawful evil",
    "armor_class": 22,
    "hit_points": 481,
    "hit_dice": "26d20",
    "speed": "40 ft.",
    "challenge_rating": 23,
    "proficiency_bonus": 7,
    "xp": 50000,
    "dexterity": 10,
    "passive_perception": 27,
    "languages": "Common, Draconic",
    "damage_resistances": [],
    "damage_immunities": [
      "lightning"
    ],
    "condition_immunities": [],
    "actions": [
      {
        "name": "Multiattack",
        "description": "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws."
      },
      {
        "name": "Bite",
        "description": "Melee Weapon Attack: +16 to hit, reach 15 ft., one target. Hit: 20 (2d10 + 9) piercing damage plus 11 (2d10) lightning damage."
      },
      {
        "name": "Claw",
        "description": "Melee Weapon Attack: +16 to hit, reach 10 ft., one target. Hit: 16 (2d6 + 9) slashing damage."
      },
      {
        "name": "Tail",
        "description": "Melee Weapon Attack: +16 to hit, reach 20 ft., one target. Hit: 18 (2d8 + 9) bludgeoning damage."
      },
      {
        "name": "Frightful Presence",
        "description": "Each creature of the dragon's choice that is within 120 feet of the dragon and aware of it must succeed on a DC 20 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours."
      },
      {
        "name": "Lightning Breath",
        "description": "The dragon exhales lightning in a 120-foot line that is 10 feet wide. Each creature in that line must make a DC 23 Dexterity saving throw, taking 88 (16d10) lightning damage on a failed save, or half as much damage on a successful one."
      }
    ]
  },
  {
    "index": "ancient-brass-dragon",
    "name": "Ancient Brass Dragon",
    "size": "Gargantuan",
    "type": "dragon",
    "alignment": "chaotic good",
    "armor_class": 20,
    "hit_points": 297,
    "hit_dice": "17d20",
    "speed": "40 ft.",
    "challenge_rating": 20,
    "proficiency_bonus": 6,
    "xp": 25000,
    "dexterity": 10,
    "passive_perception": 24,
    "languages": "Common, Draconic",
    "damage_resistances": [],
    "damage_immunities": [
      "fire"
    ],
    "condition_immunities": [],
    "actions": [
      {
        "name": "Multiattack",
        "description": "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws."
      },
      {
        "name": "Bite",
        "description": "Melee Weapon Attack: +14 to hit, reach 15 ft., one target. Hit: 19 (2d10 + 8) piercing damage."
      },
      {
        "name": "Claw",
        "description": "Melee Weapon Attack: +14 to hit, reach 10 ft., one target. Hit: 15 (2d6 + 8) slashing damage."
      },
      {
        "name": "Tail",
        "description": "Melee Weapon Attack: +14 to hit, reach 20 ft., one target. Hit: 17 (2d8 + 8) bludgeoning damage."
      },
      {
        "name": "Frightful Presence",
        "description": "Each creature of the dragon's choice that is within 120 feet of the dragon and aware of it must succeed on a DC 18 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours."
      },
      {
        "name": "Breath Weapons",
        "description": "The dragon uses one of the following breath weapons:\nFire Breath. The dragon exhales fire in an 90-foot line that is 10 feet wide. Each creature in that line must make a DC 21 Dexterity saving throw, taking 56 (16d6) fire damage on a failed save, or half as much damage on a successful one.\nSleep Breath. The dragon exhales sleep gas in a 90-foot cone. Each creature in that area must succeed on a DC 21 Constitution saving throw or fall unconscious for 10 minutes. This effect ends for a creature if the creature takes damage or someone uses an action to wake it."
      },
      {
        "name": "Change Shape",
        "description": "The dragon magically polymorphs into a humanoid or beast that has a challenge rating no higher than its own, or back into its true form. It reverts to its true form if it dies. Any equipment it is wearing or carrying is absorbed or borne by the new form (the dragon's choice).\nIn a new form, the dragon retains its alignment, hit points, Hit Dice, ability to speak, proficiencies, Legendary Resistance, lair actions, and Intelligence, Wisdom, and Charisma scores, as well as this action. Its statistics and capabilities are otherwise replaced by those of the new form, except any class features or legendary actions of that form."
      }
    ]
  },
  {
    "index": "ancient-bronze-dragon",
    "name": "Ancient Bronze Dragon",
    "size": "Gargantuan",
    "type": "dragon",
    "alignment": "lawful good",
    "armor_class": 22,
    "hit_points": 444,
    "hit_dice": "24d20",
    "speed": "40 ft.",
    "challenge_rating": 22,
    "proficiency_bonus": 7,
    "xp": 41000,
    "dexterity": 10,
    "passive_perception": 27,
    "languages": "Common, Draconic",
    "damage_resistances": [],
    "damage_immunities": [
      "lightning"
    ],
    "condition_immunities": [],
    "actions": [
      {
        "name": "Multiattack",
        "description": "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws."
      },
      {
        "name": "Bite",
        "description": "Melee Weapon Attack: +16 to hit, reach 15 ft., one target. Hit: 20 (2d10 + 9) piercing damage."
      },
      {
        "name": "Claw",
        "description": "Melee Weapon Attack: +16 to hit, reach 10 ft., one target. Hit: 16 (2d6 + 9) slashing damage."
      },
      {
        "name": "Tail",
        "description": "Melee Weapon Attack: +16 to hit, reach 20 ft., one target. Hit: 18 (2d8 + 9) bludgeoning damage."
      },
      {
        "name": "Frightful Presence",
        "description": "Each creature of the dragon's choice that is within 120 feet of the dragon and aware of it must succeed on a DC 20 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours."
      },
      {
        "name": "Breath Weapons",
        "description": "The dragon uses one of the following breath weapons.\nLightning Breath. The dragon exhales lightning in a 120-foot line that is 10 feet wide. Each creature in that line must make a DC 23 Dexterity saving throw, taking 88 (16d10) lightning damage on a failed save, or half as much damage on a successful one.\nRepulsion Breath. The dragon exhales repulsion energy in a 30-foot cone. Each creature in that area must succeed on a DC 23 Strength saving throw. On a failed save, the creature is pushed 60 feet away from the dragon."
      },
      {
        "name": "Change Shape",
        "description": "The dragon magically polymorphs into a humanoid or beast that has a challenge rating no higher than its own, or back into its true form. It reverts to its true form if it dies. Any equipment it is wearing or carrying is absorbed or borne by the new form (the dragon's choice).\nIn a new form, the dragon retains its alignment, hit points, Hit Dice, ability to speak, proficiencies, Legendary Resistance, lair actions, and Intelligence, Wisdom, and Charisma scores, as well as this action. Its statistics and capabilities are otherwise replaced by those of the new form, except any class features or legendary actions of that form."
      }
    ]
  },
  {
    "index": "ancient-copper-dragon",
    "name": "Ancient Copper Dragon",
    "size": "Gargantuan",
    "type": "dragon",
    "alignment": "chaotic good",
    "armor_class": 21,
    "hit_points": 350,
    "hit_dice": "20d20",
    "speed": "40 ft.",
    "challenge_rating": 21,
    "proficiency_bonus": 7,
    "xp": 33000,
    "dexterity": 12,
    "passive_perception": 27,
    "languages": "Common, Draconic",
    "damage_resistances": [],
    "damage_immunities": [
      "acid"
    ],
    "condition_immunities": [],
    "actions": [
      {
        "name": "Multiattack",
        "description": "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws."
      },
      {
        "name": "Bite",
        "description": "Melee Weapon Attack: +15 to hit, reach 15 ft., one target. Hit: 19 (2d10 + 8) piercing damage."
      },
      {
        "name": "Claw",
        "description": "Melee Weapon Attack: +15 to hit, reach 10 ft., one target. Hit: 15 (2d6 + 8) slashing damage."
      },
      {
        "name": "Tail",
        "description": "Melee Weapon Attack: +15 to hit, reach 20 ft., one target. Hit: 17 (2d8 + 8) bludgeoning damage."
      },
      {
        "name": "Frightful Presence",
        "description": "Each creature of the dragon's choice that is within 120 feet of the dragon and aware of it must succeed on a DC 19 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours."
      },
      {
        "name": "Breath Weapons",
        "description": "The dragon uses one of the following breath weapons.\nAcid Breath. The dragon exhales acid in an 90-foot line that is 10 feet wide. Each creature in that line must make a DC 22 Dexterity saving throw, taking 63 (14d8) acid damage on a failed save, or half as much damage on a successful one.\nSlowing Breath. The dragon exhales gas in a 90-foot cone. Each creature in that area must succeed on a DC 22 Constitution saving throw. On a failed save, the creature can't use reactions, its speed is halved, and it can't make more than one attack on its turn. In addition, the creature can use either an action or a bonus action on its turn, but not both. These effects last for 1 minute. The creature can repeat the saving throw at the end of each of its turns, ending the effect on itself with a successful save."
      },
      {
        "name": "Change Shape",
        "description": "The dragon magically polymorphs into a humanoid or beast that has a challenge rating no higher than its own, or back into its true form. It reverts to its true form if it dies. Any equipment it is wearing or carrying is absorbed or borne by the new form (the dragon's choice).\nIn a new form, the dragon retains its alignment, hit points, Hit Dice, ability to speak, proficiencies, Legendary Resistance, lair actions, and Intelligence, Wisdom, and Charisma scores, as well as this action. Its statistics and capabilities are otherwise replaced by those of the new form, except any class features or legendary actions of that form."
      }
    ]
  },
  {
    "index": "ancient-gold-dragon",
    "name": "Ancient Gold Dragon",
    "size": "Gargantuan",
    "type": "dragon",
    "alignment": "lawful good",
    "armor_class": 22,
    "hit_points": 546,
    "hit_dice": "28d20",
    "speed": "40 ft.",
    "challenge_rating": 24,
    "proficiency_bonus": 7,
    "xp": 62000,
    "dexterity": 14,
    "passive_perception": 27,
    "languages": "Common, Draconic",
    "damage_resistances": [],
    "damage_immunities": [
      "fire"
    ],
    "condition_immunities": [],
    "actions": [
      {
        "name": "Multiattack",
        "description": "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws."
      },
      {
        "name": "Bite",
        "description": "Melee Weapon Attack: +17 to hit, reach 15 ft., one target. Hit: 21 (2d10 + 10) piercing damage."
      },
      {
        "name": "Claw",
        "description": "Melee Weapon Attack: +17 to hit, reach 10 ft., one target. Hit: 17 (2d6 + 10) slashing damage."
      },
      {
        "name": "Tail",
        "description": "Melee Weapon Attack: +17 to hit, reach 20 ft., one target. Hit: 19 (2d8 + 10) bludgeoning damage."
      },
      {
        "name": "Frightful Presence",
        "description": "Each creature of the dragon's choice that is within 120 feet of the dragon and aware of it must succeed on a DC 24 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours."
      },
      {
        "name": "Breath Weapons",
        "description": "The dragon uses one of the following breath weapons.\nFire Breath. The dragon exhales fire in a 90-foot cone. Each creature in that area must make a DC 24 Dexterity saving throw, taking 71 (13d10) fire damage on a failed save, or half as much damage on a successful one.\nWeakening Breath. The dragon exhales gas in a 90-foot cone. Each creature in that area must succeed on a DC 24 Strength saving throw or have disadvantage on Strength-based attack rolls, Strength checks, and Strength saving throws for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
      },
      {
        "name": "Change Shape",
        "description": "The dragon magically polymorphs into a humanoid or beast that has a challenge rating no higher than its own, or back into its true form. It reverts to its true form if it dies. Any equipment it is wearing or carrying is absorbed or borne by the new form (the dragon's choice).\nIn a new form, the dragon retains its alignment, hit points, Hit Dice, ability to speak, proficiencies, Legendary Resistance, lair actions, and Intelligence, Wisdom, and Charisma scores, as well as this action. Its statistics and capabilities are otherwise replaced by those of the new form, except any class features or legendary actions of that form."
      }
    ]
  },
  {
    "index": "ancient-green-dragon",
    "name": "Ancient Green Dragon",
    "size": "Gargantuan",
    "type": "dragon",
    "alignment": "lawful evil",
    "armor_class": 21,
    "hit_points": 385,
    "hit_dice": "22d20",
    "speed": "40 ft.",
    "challenge_rating": 22,
    "proficiency_bonus": 7,
    "xp": 41000,
    "dexterity": 12,
    "passive_perception": 27,
    "languages": "Common, Draconic",
    "damage_resistances": [],
    "damage_immunities": [
      "poison"
    ],
    "condition_immunities": [
      "Poisoned"
    ],
    "actions": [
      {
        "name": "Multiattack",
        "description": "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws."
      },
      {
        "name": "Bite",
        "description": "Melee Weapon Attack: +15 to hit, reach 15 ft., one target. Hit: 19 (2d10 + 8) piercing damage plus 10 (3d6) poison damage."
      },
      {
        "name": "Claw",
        "description": "Melee Weapon Attack: +15 to hit, reach 10 ft., one target. Hit: 22 (4d6 + 8) slashing damage."
      },
      {
        "name": "Tail",
        "description": "Melee Weapon Attack: +15 to hit, reach 20 ft., one target. Hit: 17 (2d8 + 8) bludgeoning damage."
      },
      {
        "name": "Frightful Presence",
        "description": "Each creature of the dragon's choice that is within 120 feet of the dragon and aware of it must succeed on a DC 19 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours."
      },
      {
        "name": "Poison Breath",
        "description": "The dragon exhales poisonous gas in a 90-foot cone. Each creature in that area must make a DC 22 Constitution saving throw, taking 77 (22d6) poison damage on a failed save, or half as much damage on a successful one."
      }
    ]
  },
  {
    "index": "ancient-red-dragon",
    "name": "Ancient Red Dragon",
    "size": "Gargantuan",
    "type": "dragon",
    "alignment": "chaotic evil",
    "armor_class": 22,
    "hit_points": 546,
    "hit_dice": "28d20",
    "speed": "40 ft.",
    "challenge_rating": 24,
    "proficiency_bonus": 7,
    "xp": 62000,
    "dexterity": 10,
    "passive_perception": 26,
    "languages": "Common, Draconic",
    "damage_resistances": [],
    "damage_immunities": [
      "fire"
    ],
    "condition_immunities": [],
    "actions": [
      {
        "name": "Multiattack",
        "description": "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws."
      },
      {
        "name": "Bite",
        "description": "Melee Weapon Attack: +17 to hit, reach 15 ft., one target. Hit: 21 (2d10 + 10) piercing damage plus 14 (4d6) fire damage."
      },
      {
        "name": "Claw",
        "description": "Melee Weapon Attack: +17 to hit, reach 10 ft., one target. Hit: 17 (2d6 + 10) slashing damage."
      },
      {
        "name": "Tail",
        "description": "Melee Weapon Attack: +17 to hit, reach 20 ft., one target. Hit: 19 (2d8 + 10) bludgeoning damage."
      },
      {
        "name": "Frightful Presence",
        "description": "Each creature of the dragon's choice that is within 120 feet of the dragon and aware of it must succeed on a DC 21 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours."
      },
      {
        "name": "Fire Breath",
        "description": "The dragon exhales fire in a 90-foot cone. Each creature in that area must make a DC 24 Dexterity saving throw, taking 91 (26d6) fire damage on a failed save, or half as much damage on a successful one."
      }
    ]
  },
  {
    "index": "ancient-silver-dragon",
    "name": "Ancient Silver Dragon",
    "size": "Gargantuan",
    "type": "dragon",
    "alignment": "lawful good",
    "armor_class": 22,
    "hit_points": 487,
    "hit_dice": "25d20",
    "speed": "40 ft.",
    "challenge_rating": 23,
    "proficiency_bonus": 7,
    "xp": 50000,
    "dexterity": 10,
    "passive_perception": 26,
    "languages": "Common, Draconic",
    "damage_resistances": [],
    "damage_immunities": [
      "cold"
    ],
    "condition_immunities": [],
    "actions": [
      {
        "name": "Multiattack",
        "description": "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws."
      },
      {
        "name": "Bite",
        "description": "Melee Weapon Attack: +17 to hit, reach 15 ft., one target. Hit: 21 (2d10 + 10) piercing damage."
      },
      {
        "name": "Claw",
        "description": "Melee Weapon Attack: +17 to hit, reach 10 ft., one target. Hit: 17 (2d6 + 10) slashing damage."
      },
      {
        "name": "Tail",
        "description": "Melee Weapon Attack: +17 to hit, reach 20 ft., one target. Hit: 19 (2d8 + 10) bludgeoning damage."
      },
      {
        "name": "Frightful Presence",
        "description": "Each creature of the dragon's choice that is within 120 feet of the dragon and aware of it must succeed on a DC 21 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours."
      },
      {
        "name": "Breath Weapons",
        "description": "The dragon uses one of the following breath weapons.\nCold Breath. The dragon exhales an icy blast in a 90-foot cone. Each creature in that area must make a DC 24 Constitution saving throw, taking 67 (15d8) cold damage on a failed save, or half as much damage on a successful one.\nParalyzing Breath. The dragon exhales paralyzing gas in a 90- foot cone. Each creature in that area must succeed on a DC 24 Constitution saving throw or be paralyzed for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
      },
      {
        "name": "Change Shape",
        "description": "The dragon magically polymorphs into a humanoid or beast that has a challenge rating no higher than its own, or back into its true form. It reverts to its true form if it dies. Any equipment it is wearing or carrying is absorbed or borne by the new form (the dragon's choice).\nIn a new form, the dragon retains its alignment, hit points, Hit Dice, ability to speak, proficiencies, Legendary Resistance, lair actions, and Intelligence, Wisdom, and Charisma scores, as well as this action. Its statistics and capabilities are otherwise replaced by those of the new form, except any class features or legendary actions of that form."
      }
    ]
  },
  {
    "index": "ancient-white-dragon",
    "name": "Ancient White Dragon",
    "size": "Gargantuan",
    "type": "dragon",
    "alignment": "chaotic evil",
    "armor_class": 20,
    "hit_points": 333,
    "hit_dice": "18d20",
    "speed": "40 ft.",
    "challenge_rating": 20,
    "proficiency_bonus": 6,
    "xp": 25000,
    "dexterity": 10,
    "passive_perception": 23,
    "languages": "Common, Draconic",
    "damage_resistances": [],
    "damage_immunities": [
      "cold"
    ],
    "condition_immunities": [],
    "actions": [
      {
        "name": "Multiattack",
        "description": "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws."
      },
      {
        "name": "Bite",
        "description": "Melee Weapon Attack: +14 to hit, reach 15 ft., one target. Hit: 19 (2d10 + 8) piercing damage plus 9 (2d8) cold damage."
      },
      {
        "name": "Claw",
        "description": "Melee Weapon Attack: +14 to hit, reach 10 ft., one target. Hit: 15 (2d6 + 8) slashing damage."
      },
      {
        "name": "Tail",
        "description": "Melee Weapon Attack: +14 to hit, reach 20 ft., one target. Hit: 17 (2d8 + 8) bludgeoning damage."
      },
      {
        "name": "Frightful Presence",
        "description": "Each creature of the dragon's choice that is within 120 feet of the dragon and aware of it must succeed on a DC 16 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours ."
      },
      {
        "name": "Cold Breath",
        "description": "The dragon exhales an icy blast in a 90-foot cone. Each creature in that area must make a DC 22 Constitution saving throw, taking 72 (l6d8) cold damage on a failed save, or half as much damage on a successful one."
      }
    ]
  },
  {
    "index": "androsphinx",
    "name": "Androsphinx",
    "size": "Large",
    "type": "monstrosity",
    "alignment": "lawful neutral",
    "armor_class": 17,
    "hit_points": 199,
    "hit_dice": "19d10",
    "speed": "40 ft.",
    "challenge_rating": 17,
    "proficiency_bonus": 6,
    "xp": 18000,
    "dexterity": 10,
    "passive_perception": 20,
    "languages": "Common, Sphinx",
    "damage_resistances": [],
    "damage_immunities": [
      "psychic",
      "bludgeoning, piercing, and slashing from nonmagical weapons"
    ],
    "condition_immunities": [
      "Charmed",
      "Frightened"
    ],
    "actions": [
      {
        "name": "Multiattack",
        "description": "The sphinx makes two claw attacks."
      },
      {
        "name": "Claw",
        "description": "Melee Weapon Attack: +12 to hit, reach 5 ft., one target. Hit: 17 (2d10 + 6) slashing damage."
      },
      {
        "name": "Roar",
        "description": "The sphinx emits a magical roar. Each time it roars before finishing a long rest, the roar is louder and the effect is different, as detailed below. Each creature within 500 feet of the sphinx and able to hear the roar must make a saving throw.\n\nFirst Roar. Each creature that fails a DC 18 Wisdom saving throw is frightened for 1 minute. A frightened creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.\n\nSecond Roar. Each creature that fails a DC 18 Wisdom saving throw is deafened and frightened for 1 minute. A frightened creature is paralyzed and can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.\n\nThird Roar. Each creature makes a DC 18 Constitution saving throw. On a failed save, a creature takes 44 (8d10) thunder damage and is knocked prone. On a successful save, the creature takes half as much damage and isn't knocked prone."
      }
    ]
  },
  {
    "index": "animated-armor",
    "name": "Animated Armor",
    "size": "Medium",
    "type": "construct",
    "alignment": "unaligned",
    "armor_class": 18,
    "hit_points": 33,
    "hit_dice": "6d8",
    "speed": "25 ft.",
    "challenge_rating": 1,
    "proficiency_bonus": 2,
    "xp": 200,
    "dexterity": 11,
    "passive_perception": 6,
    "languages": "",
    "damage_resistances": [],
    "damage_immunities": [
      "poison",
      "psychic"
    ],
    "condition_immunities": [
      "Blinded",
      "Charmed",
      "Deafened",
      "Exhaustion",
      "Frightened",
      "Paralyzed",
      "Petrified",
      "Poisoned"
    ],
    "actions": [
      {
        "name": "Multiattack",
        "description": "The armor makes two melee attacks."
      },
      {
        "name": "Slam",
        "description": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6 + 2) bludgeoning damage."
      }
    ]
  },
  {
    "index": "ankheg",
    "name": "Ankheg",
    "size": "Large",
    "type": "monstrosity",
    "alignment": "unaligned",
    "armor_class": 14,
    "hit_points": 39,
    "hit_dice": "6d10",
    "speed": "30 ft.",
    "challenge_rating": 2,
    "proficiency_bonus": 2,
    "xp": 250,
    "dexterity": 11,
    "passive_perception": 11,
    "languages": "",
    "damage_resistances": [],
    "damage_immunities": [],
    "condition_immunities": [],
    "actions": [
      {
        "name": "Bite",
        "description": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 10 (2d6 + 3) slashing damage plus 3 (1d6) acid damage. If the target is a Large or smaller creature, it is grappled (escape DC 13). Until this grapple ends, the ankheg can bite only the grappled creature and has advantage on attack rolls to do so."
      },
      {
        "name": "Acid Spray",
        "description": "The ankheg spits acid in a line that is 30 ft. long and 5 ft. wide, provided that it has no creature grappled. Each creature in that line must make a DC 13 Dexterity saving throw, taking 10 (3d6) acid damage on a failed save, or half as much damage on a successful one."
      }
    ]
  },
  {
    "index": "ape",
    "name": "Ape",
    "size": "Medium",
    "type": "beast",
    "alignment": "unaligned",
    "armor_class": 12,
    "hit_points": 19,
    "hit_dice": "3d8",
    "speed": "30 ft.",
    "challenge_rating": 0.5,
    "proficiency_bonus": 2,
    "xp": 100,
    "dexterity": 14,
    "passive_perception": 13,
    "languages": "",
    "damage_resistances": [],
    "damage_immunities": [],
    "condition_immunities": [],
    "actions": [
      {
        "name": "Multiattack",
        "description": "The ape makes two fist attacks."
      },
      {
        "name": "Fist",
        "description": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 6 (1d6 + 3) bludgeoning damage."
      },
      {
        "name": "Rock",
        "description": "Ranged Weapon Attack: +5 to hit, range 25/50 ft., one target. Hit: 6 (1d6 + 3) bludgeoning damage."
      }
    ]
  },
  {
    "index": "archmage",
    "name": "Archmage",
    "size": "Medium",
    "type": "humanoid",
    "alignment": "any alignment",
    "armor_class": 12,
    "hit_points": 99,
    "hit_dice": "18d8",
    "speed": "30 ft.",
    "challenge_rating": 12,
    "proficiency_bonus": 4,
    "xp": 8400,
    "dexterity": 14,
    "passive_perception": 12,
    "languages": "any six languages",
    "damage_resistances": [
      "damage from spells",
      "bludgeoning, piercing, and slashing from nonmagical attacks (from stoneskin)"
    ],
    "damage_immunities": [],
    "condition_immunities": [],
    "actions": [
      {
        "name": "Dagger",
        "description": "Melee or Ranged Weapon Attack: +6 to hit, reach 5 ft. or range 20/60 ft., one target. Hit: 4 (1d4 + 2) piercing damage."
      }
    ]
  },
  {
    "index": "assassin",
    "name": "Assassin",
    "size": "Medium",
    "type": "humanoid",
    "alignment": "any non-good alignment",
    "armor_class": 15,
    "hit_points": 78,
    "hit_dice": "12d8",
    "speed": "30 ft.",
    "challenge_rating": 8,
    "proficiency_bonus": 3,
    "xp": 3900,
    "dexterity": 16,
    "passive_perception": 13,
    "languages": "Thieves' cant plus any two languages",
    "damage_resistances": [
      "poison"
    ],
    "damage_immunities": [],
    "condition_immunities": [],
    "actions": [
      {
        "name": "Multiattack",
        "description": "The assassin makes two shortsword attacks."
      },
      {
        "name": "Shortsword",
        "description": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 6 (1d6 + 3) piercing damage, and the target must make a DC 15 Constitution saving throw, taking 24 (7d6) poison damage on a failed save, or half as much damage on a successful one."
      },
      {
        "name": "Light Crossbow",
        "description": "Ranged Weapon Attack: +6 to hit, range 80/320 ft., one target. Hit: 7 (1d8 + 3) piercing damage, and the target must make a DC 15 Constitution saving throw, taking 24 (7d6) poison damage on a failed save, or half as much damage on a successful one."
      }
    ]
  },
  {
    "index": "awakened-shrub",
    "name": "Awakened Shrub",
    "size": "Small",
    "type": "plant",
    "alignment": "unaligned",
    "armor_class": 9,
    "hit_points": 10,
    "hit_dice": "3d6",
    "speed": "20 ft.",
    "challenge_rating": 0,
    "proficiency_bonus": 2,
    "xp": 10,
    "dexterity": 8,
    "passive_perception": 10,
    "languages": "one language known by its creator",
    "damage_resistances": [
      "piercing"
    ],
    "damage_immunities": [],
    "condition_immunities": [],
    "actions": [
      {
        "name": "Rake",
        "description": "Melee Weapon Attack: +1 to hit, reach 5 ft., one target. Hit: 1 (1d4 - 1) slashing damage."
      }
    ]
  },
  {
    "index": "awakened-tree",
    "name": "Awakened Tree",
    "size": "Huge",
    "type": "plant",
    "alignment": "unaligned",
    "armor_class": 13,
    "hit_points": 59,
    "hit_dice": "7d12",
    "speed": "20 ft.",
    "challenge_rating": 2,
    "proficiency_bonus": 2,
    "xp": 450,
    "dexterity": 6,
    "passive_perception": 10,
    "languages": "one language known by its creator",
    "damage_resistances": [
      "bludgeoning",
      "piercing"
    ],
    "damage_immunities": [],
    "condition_immunities": [],
    "actions": [
      {
        "name": "Slam",
        "description": "Melee Weapon Attack: +6 to hit, reach 10 ft., one target. Hit: 14 (3d6 + 4) bludgeoning damage."
      }
    ]
  },
  {
    "index": "axe-beak",
    "name": "Axe Beak",
    "size": "Large",
    "type": "beast",
    "alignment": "unaligned",
    "armor_class": 11,
    "hit_points": 19,
    "hit_dice": "3d10",
    "speed": "50 ft.",
    "challenge_rating": 0.25,
    "proficiency_bonus": 2,
    "xp": 50,
    "dexterity": 12,
    "passive_perception": 10,
    "languages": "",
    "damage_resistances": [],
    "damage_immunities": [],
    "condition_immunities": [],
    "actions": [
      {
        "name": "Beak",
        "description": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 6 (1d8 + 2) slashing damage."
      }
    ]
  },
  {
    "index": "azer",
    "name": "Azer",
    "size": "Medium",
    "type": "elemental",
    "alignment": "lawful neutral",
    "armor_class": 15,
    "hit_points": 39,
    "hit_dice": "6d8",
    "speed": "30 ft.",
    "challenge_rating": 2,
    "proficiency_bonus": 2,
    "xp": 450,
    "dexterity": 12,
    "passive_perception": 11,
    "languages": "Ignan",
    "damage_resistances": [],
    "damage_immunities": [
      "fire",
      "poison"
    ],
    "condition_immunities": [
      "Poisoned"
    ],
    "actions": [
      {
        "name": "Warhammer",
        "description": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 7 (1d8 + 3) bludgeoning damage, or 8 (1d10 + 3) bludgeoning damage if used with two hands to make a melee attack, plus 3 (1d6) fire damage."
      }
    ]
  },
  {
    "index": "baboon",
    "name": "Baboon",
    "size": "Small",
    "type": "beast",
    "alignment": "unaligned",
    "armor_class": 12,
    "hit_points": 3,
    "hit_dice": "1d6",
    "speed": "30 ft.",
    "challenge_rating": 0,
    "proficiency_bonus": 2,
    "xp": 10,
    "dexterity": 14,
    "passive_perception": 11,
    "languages": "",
    "damage_resistances": [],
    "damage_immunities": [],
    "condition_immunities": [],
    "actions": [
      {
        "name": "Bite",
        "description": "Melee Weapon Attack: +1 to hit, reach 5 ft., one target. Hit: 1 (1d4 - 1) piercing damage."
      }
    ]
  },
  {
    "index": "badger",
    "name": "Badger",
    "size": "Tiny",
    "type": "beast",
    "alignment": "unaligned",
    "armor_class": 10,
    "hit_points": 3,
    "hit_dice": "1d4",
    "speed": "20 ft.",
    "challenge_rating": 0,
    "proficiency_bonus": 2,
    "xp": 10,
    "dexterity": 11,
    "passive_perception": 11,
    "languages": "",
    "damage_resistances": [],
    "damage_immunities": [],
    "condition_immunities": [],
    "actions": [
      {
        "name": "Bite",
        "description": "Melee Weapon Attack: +2 to hit, reach 5 ft., one target. Hit: 1 piercing damage."
      }
    ]
  },
  {
    "index": "balor",
    "name": "Balor",
    "size": "Huge",
    "type": "fiend",
    "alignment": "chaotic evil",
    "armor_class": 19,
    "hit_points": 262,
    "hit_dice": "21d12",
    "speed": "40 ft.",
    "challenge_rating": 19,
    "proficiency_bonus": 6,
    "xp": 22000,
    "dexterity": 15,
    "passive_perception": 13,
    "languages": "Abyssal, telepathy 120 ft.",
    "damage_resistances": [
      "cold",
      "lightning",
      "bludgeoning, piercing, and slashing from nonmagical weapons"
    ],
    "damage_immunities": [
      "fire",
      "poison"
    ],
    "condition_immunities": [
      "Poisoned"
    ],
    "actions": [
      {
        "name": "Multiattack",
        "description": "The balor makes two attacks: one with its longsword and one with its whip."
      },
      {
        "name": "Longsword",
        "description": "Melee Weapon Attack: +14 to hit, reach 10 ft., one target. Hit: 21 (3d8 + 8) slashing damage plus 13 (3d8) lightning damage. If the balor scores a critical hit, it rolls damage dice three times, instead of twice."
      },
      {
        "name": "Whip",
        "description": "Melee Weapon Attack: +14 to hit, reach 30 ft., one target. Hit: 15 (2d6 + 8) slashing damage plus 10 (3d6) fire damage, and the target must succeed on a DC 20 Strength saving throw or be pulled up to 25 feet toward the balor."
      },
      {
        "name": "Teleport",
        "description": "The balor magically teleports, along with any equipment it is wearing or carrying, up to 120 feet to an unoccupied space it can see."
      }
    ]
  },
  {
    "index": "bandit",
    "name": "Bandit",
    "size": "Medium",
    "type": "humanoid",
    "alignment": "any non-lawful alignment",
    "armor_class": 12,
    "hit_points": 11,
    "hit_dice": "2d8",
    "speed": "30 ft.",
    "challenge_rating": 0.125,
    "proficiency_bonus": 2,
    "xp": 25,
    "dexterity": 12,
    "passive_perception": 10,
    "languages": "any one language (usually Common)",
    "damage_resistances": [],
    "damage_immunities": [],
    "condition_immunities": [],
    "actions": [
      {
        "name": "Scimitar",
        "description": "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 4 (1d6 + 1) slashing damage."
      },
      {
        "name": "Light Crossbow",
        "description": "Ranged Weapon Attack: +3 to hit, range 80 ft./320 ft., one target. Hit: 5 (1d8 + 1) piercing damage."
      }
    ]
  },
  {
    "index": "bandit-captain",
    "name": "Bandit Captain",
    "size": "Medium",
    "type": "humanoid",
    "alignment": "any non-lawful alignment",
    "armor_class": 15,
    "hit_points": 65,
    "hit_dice": "10d8",
    "speed": "30 ft.",
    "challenge_rating": 2,
    "proficiency_bonus": 2,
    "xp": 450,
    "dexterity": 16,
    "passive_perception": 10,
    "languages": "any two languages",
    "damage_resistances": [],
    "damage_immunities": [],
    "condition_immunities": [],
    "actions": [
      {
        "name": "Multiattack",
        "description": "The captain makes three melee attacks: two with its scimitar and one with its dagger. Or the captain makes two ranged attacks with its daggers."
      },
      {
        "name": "Scimitar",
        "description": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 6 (1d6 + 3) slashing damage."
      },
      {
        "name": "Dagger",
        "description": "Melee or Ranged Weapon Attack: +5 to hit, reach 5 ft. or range 20/60 ft., one target. Hit: 5 (1d4 + 3) piercing damage."
      }
    ]
  },
  {
    "index": "barbed-devil",
    "name": "Barbed Devil",
    "size": "Medium",
    "type": "fiend",
    "alignment": "lawful evil",
    "armor_class": 15,
    "hit_points": 110,
    "hit_dice": "13d8",
    "speed": "30 ft.",
    "challenge_rating": 5,
    "proficiency_bonus": 3,
    "xp": 1800,
    "dexterity": 17,
    "passive_perception": 18,
    "languages": "Infernal, telepathy 120 ft.",
    "damage_resistances": [
      "cold",
      "bludgeoning, piercing, and slashing from nonmagical weapons that aren't silvered"
    ],
    "damage_immunities": [
      "fire",
      "poison"
    ],
    "condition_immunities": [
      "Poisoned"
    ],
    "actions": [
      {
        "name": "Multiattack",
        "description": "The devil makes three melee attacks: one with its tail and two with its claws. Alternatively, it can use Hurl Flame twice."
      },
      {
        "name": "Claw",
        "description": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 6 (1d6 + 3) piercing damage."
      },
      {
        "name": "Tail",
        "description": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 10 (2d6 + 3) piercing damage."
      },
      {
        "name": "Hurl Flame",
        "description": "Ranged Spell Attack: +5 to hit, range 150 ft., one target. Hit: 10 (3d6) fire damage. If the target is a flammable object that isn't being worn or carried, it also catches fire."
      }
    ]
  },
  {
    "index": "basilisk",
    "name": "Basilisk",
    "size": "Medium",
    "type": "monstrosity",
    "alignment": "unaligned",
    "armor_class": 12,
    "hit_points": 52,
    "hit_dice": "8d8",
    "speed": "20 ft.",
    "challenge_rating": 3,
    "proficiency_bonus": 2,
    "xp": 700,
    "dexterity": 8,
    "passive_perception": 9,
    "languages": "",
    "damage_resistances": [],
    "damage_immunities": [],
    "condition_immunities": [],
    "actions": [
      {
        "name": "Bite",
        "description": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 10 (2d6 + 3) piercing damage plus 7 (2d6) poison damage."
      }
    ]
  },
  {
    "index": "bat",
    "name": "Bat",
    "size": "Tiny",
    "type": "beast",
    "alignment": "unaligned",
    "armor_class": 12,
    "hit_points": 1,
    "hit_dice": "1d4",
    "speed": "5 ft.",
    "challenge_rating": 0,
    "proficiency_bonus": 2,
    "xp": 10,
    "dexterity": 15,
    "passive_perception": 11,
    "languages": "",
    "damage_resistances": [],
    "damage_immunities": [],
    "condition_immunities": [],
    "actions": [
      {
        "name": "Bite",
        "description": "Melee Weapon Attack: +0 to hit, reach 5 ft., one creature. Hit: 1 piercing damage."
      }
    ]
  },
  {
    "index": "bearded-devil",
    "name": "Bearded Devil",
    "size": "Medium",
    "type": "fiend",
    "alignment": "lawful evil",
    "armor_class": 13,
    "hit_points": 52,
    "hit_dice": "8d8",
    "speed": "30 ft.",
    "challenge_rating": 3,
    "proficiency_bonus": 2,
    "xp": 700,
    "dexterity": 15,
    "passive_perception": 10,
    "languages": "Infernal, telepathy 120 ft.",
    "damage_resistances": [
      "cold",
      "bludgeoning, piercing, and slashing from nonmagical weapons that aren't silvered"
    ],
    "damage_immunities": [
      "fire",
      "poison"
    ],
    "condition_immunities": [
      "Poisoned"
    ],
    "actions": [
      {
        "name": "Multiattack",
        "description": "The devil makes two attacks: one with its beard and one with its glaive."
      },
      {
        "name": "Beard",
        "description": "Melee Weapon Attack: +5 to hit, reach 5 ft., one creature. Hit: 6 (1d8 + 2) piercing damage, and the target must succeed on a DC 12 Constitution saving throw or be poisoned for 1 minute. While poisoned in this way, the target can't regain hit points. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
      },
      {
        "name": "Glaive",
        "description": "Melee Weapon Attack: +5 to hit, reach 10 ft., one target. Hit: 8 (1d10 + 3) slashing damage. If the target is a creature other than an undead or a construct, it must succeed on a DC 12 Constitution saving throw or lose 5 (1d10) hit points at the start of each of its turns due to an infernal wound. Each time the devil hits the wounded target with this attack, the damage dealt by the wound increases by 5 (1d10). Any creature can take an action to stanch the wound with a successful DC 12 Wisdom (Medicine) check. The wound also closes if the target receives magical healing."
      }
    ]
  },
  {
    "index": "behir",
    "name": "Behir",
    "size": "Huge",
    "type": "monstrosity",
    "alignment": "neutral evil",
    "armor_class": 17,
    "hit_points": 168,
    "hit_dice": "16d12",
    "speed": "50 ft.",
    "challenge_rating": 11,
    "proficiency_bonus": 4,
    "xp": 7200,
    "dexterity": 16,
    "passive_perception": 16,
    "languages": "Draconic",
    "damage_resistances": [],
    "damage_immunities": [
      "lightning"
    ],
    "condition_immunities": [],
    "actions": [
      {
        "name": "Multiattack",
        "description": "The behir makes two attacks: one with its bite and one to constrict."
      },
      {
        "name": "Bite",
        "description": "Melee Weapon Attack: +10 to hit, reach 10 ft., one target. Hit: 22 (3d10 + 6) piercing damage."
      },
      {
        "name": "Constrict",
        "description": "Melee Weapon Attack: +10 to hit, reach 5 ft., one Large or smaller creature. Hit: 17 (2d10 + 6) bludgeoning damage plus 17 (2d10 + 6) slashing damage. The target is grappled (escape DC 16) if the behir isn't already constricting a creature, and the target is restrained until this grapple ends."
      },
      {
        "name": "Lightning Breath",
        "description": "The behir exhales a line of lightning that is 20 ft. long and 5 ft. wide. Each creature in that line must make a DC 16 Dexterity saving throw, taking 66 (12d10) lightning damage on a failed save, or half as much damage on a successful one."
      },
      {
        "name": "Swallow",
        "description": "The behir makes one bite attack against a Medium or smaller target it is grappling. If the attack hits, the target is also swallowed, and the grapple ends. While swallowed, the target is blinded and restrained, it has total cover against attacks and other effects outside the behir, and it takes 21 (6d6) acid damage at the start of each of the behir's turns. A behir can have only one creature swallowed at a time.\nIf the behir takes 30 damage or more on a single turn from the swallowed creature, the behir must succeed on a DC 14 Constitution saving throw at the end of that turn or regurgitate the creature, which falls prone in a space within 10 ft. of the behir. If the behir dies, a swallowed creature is no longer restrained by it and can escape from the corpse by using 15 ft. of movement, exiting prone."
      }
    ]
  },
  {
    "index": "berserker",
    "name": "Berserker",
    "size": "Medium",
    "type": "humanoid",
    "alignment": "any chaotic alignment",
    "armor_class": 13,
    "hit_points": 67,
    "hit_dice": "9d8",
    "speed": "30 ft.",
    "challenge_rating": 2,
    "proficiency_bonus": 2,
    "xp": 450,
    "dexterity": 12,
    "passive_perception": 10,
    "languages": "any one language (usually Common)",
    "damage_resistances": [],
    "damage_immunities": [],
    "condition_immunities": [],
    "actions": [
      {
        "name": "Greataxe",
        "description": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 9 (1d12 + 3) slashing damage."
      }
    ]
  },
  {
    "index": "black-bear",
    "name": "Black Bear",
    "size": "Medium",
    "type": "beast",
    "alignment": "unaligned",
    "armor_class": 11,
    "hit_points": 19,
    "hit_dice": "3d8",
    "speed": "40 ft.",
    "challenge_rating": 0.5,
    "proficiency_bonus": 2,
    "xp": 100,
    "dexterity": 10,
    "passive_perception": 13,
    "languages": "",
    "damage_resistances": [],
    "damage_immunities": [],
    "condition_immunities": [],
    "actions": [
      {
        "name": "Multiattack",
        "description": "The bear makes two attacks: one with its bite and one with its claws."
      },
      {
        "name": "Bite",
        "description": "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 5 (1d6 + 2) piercing damage."
      },
      {
        "name": "Claws",
        "description": "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 7 (2d4 + 2) slashing damage."
      }
    ]
  },
  {
    "index": "black-dragon-wyrmling",
    "name": "Black Dragon Wyrmling",
    "size": "Medium",
    "type": "dragon",
    "alignment": "chaotic evil",
    "armor_class": 17,
    "hit_points": 33,
    "hit_dice": "6d8",
    "speed": "30 ft.",
    "challenge_rating": 2,
    "proficiency_bonus": 2,
    "xp": 450,
    "dexterity": 14,
    "passive_perception": 14,
    "languages": "Draconic",
    "damage_resistances": [],
    "damage_immunities": [
      "acid"
    ],
    "condition_immunities": [],
    "actions": [
      {
        "name": "Bite",
        "description": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 7 (1d10 + 2) piercing damage plus 2 (1d4) acid damage."
      },
      {
        "name": "Acid Breath",
        "description": "The dragon exhales acid in a 15-foot line that is 5 feet wide. Each creature in that line must make a DC 11 Dexterity saving throw, taking 22 (5d8) acid damage on a failed save, or half as much damage on a successful one."
      }
    ]
  },
  {
    "index": "black-pudding",
    "name": "Black Pudding",
    "size": "Large",
    "type": "ooze",
    "alignment": "unaligned",
    "armor_class": 7,
    "hit_points": 85,
    "hit_dice": "10d10",
    "speed": "20 ft.",
    "challenge_rating": 4,
    "proficiency_bonus": 2,
    "xp": 1100,
    "dexterity": 5,
    "passive_perception": 8,
    "languages": "",
    "damage_resistances": [],
    "damage_immunities": [
      "acid",
      "cold",
      "lightning",
      "slashing"
    ],
    "condition_immunities": [
      "Blinded",
      "Charmed",
      "Exhaustion",
      "Frightened",
      "Prone"
    ],
    "actions": [
      {
        "name": "Pseudopod",
        "description": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 6 (1d6 + 3) bludgeoning damage plus 18 (4d8) acid damage. In addition, nonmagical armor worn by the target is partly dissolved and takes a permanent and cumulative -1 penalty to the AC it offers. The armor is destroyed if the penalty reduces its AC to 10."
      }
    ]
  },
  {
    "index": "blink-dog",
    "name": "Blink Dog",
    "size": "Medium",
    "type": "fey",
    "alignment": "lawful good",
    "armor_class": 13,
    "hit_points": 22,
    "hit_dice": "4d8",
    "speed": "40 ft.",
    "challenge_rating": 0.25,
    "proficiency_bonus": 2,
    "xp": 50,
    "dexterity": 17,
    "passive_perception": 10,
    "languages": "Blink Dog, understands Sylvan but can't speak it",
    "damage_resistances": [],
    "damage_immunities": [],
    "condition_immunities": [],
    "actions": [
      {
        "name": "Bite",
        "description": "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 4 (1d6 + 1) piercing damage."
      },
      {
        "name": "Teleport",
        "description": "The dog magically teleports, along with any equipment it is wearing or carrying, up to 40 ft. to an unoccupied space it can see. Before or after teleporting, the dog can make one bite attack."
      }
    ]
  },
  {
    "index": "blood-hawk",
    "name": "Blood Hawk",
    "size": "Small",
    "type": "beast",
    "alignment": "unaligned",
    "armor_class": 12,
    "hit_points": 7,
    "hit_dice": "2d6",
    "speed": "10 ft.",
    "challenge_rating": 0.125,
    "proficiency_bonus": 2,
    "xp": 25,
    "dexterity": 14,
    "passive_perception": 14,
    "languages": "",
    "damage_resistances": [],
    "damage_immunities": [],
    "condition_immunities": [],
    "actions": [
      {
        "name": "Beak",
        "description": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 4 (1d4 + 2) piercing damage."
      }
    ]
  },
  {
    "index": "blue-dragon-wyrmling",
    "name": "Blue Dragon Wyrmling",
    "size": "Medium",
    "type": "dragon",
    "alignment": "lawful evil",
    "armor_class": 17,
    "hit_points": 52,
    "hit_dice": "8d8",
    "speed": "30 ft.",
    "challenge_rating": 3,
    "proficiency_bonus": 2,
    "xp": 700,
    "dexterity": 10,
    "passive_perception": 14,
    "languages": "Draconic",
    "damage_resistances": [],
    "damage_immunities": [
      "lightning"
    ],
    "condition_immunities": [],
    "actions": [
      {
        "name": "Bite",
        "description": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 8 (1d10 + 3) piercing damage plus 3 (1d6) lightning damage."
      },
      {
        "name": "Lightning Breath",
        "description": "The dragon exhales lightning in a 30-foot line that is 5 feet wide. Each creature in that line must make a DC 12 Dexterity saving throw, taking 22 (4d10) lightning damage on a failed save, or half as much damage on a successful one."
      }
    ]
  },
  {
    "index": "boar",
    "name": "Boar",
    "size": "Medium",
    "type": "beast",
    "alignment": "unaligned",
    "armor_class": 11,
    "hit_points": 11,
    "hit_dice": "2d8",
    "speed": "40 ft.",
    "challenge_rating": 0.25,
    "proficiency_bonus": 2,
    "xp": 50,
    "dexterity": 11,
    "passive_perception": 9,
    "languages": "",
    "damage_resistances": [],
    "damage_immunities": [],
    "condition_immunities": [],
    "actions": [
      {
        "name": "Tusk",
        "description": "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 4 (1d6 + 1) slashing damage."
      }
    ]
  },
  {
    "index": "bone-devil",
    "name": "Bone Devil",
    "size": "Large",
    "type": "fiend",
    "alignment": "lawful evil",
    "armor_class": 19,
    "hit_points": 142,
    "hit_dice": "15d10",
    "speed": "40 ft.",
    "challenge_rating": 9,
    "proficiency_bonus": 4,
    "xp": 5000,
    "dexterity": 16,
    "passive_perception": 12,
    "languages": "Infernal, telepathy 120 ft.",
    "damage_resistances": [
      "cold",
      "bludgeoning, piercing, and slashing from nonmagical weapons that aren't silvered"
    ],
    "damage_immunities": [
      "fire",
      "poison"
    ],
    "condition_immunities": [
      "Poisoned"
    ],
    "actions": [
      {
        "name": "Multiattack",
        "description": "The devil makes three attacks: two with its claws and one with its sting."
      },
      {
        "name": "Claw",
        "description": "Melee Weapon Attack: +8 to hit, reach 10 ft., one target. Hit: 8 (1d8 + 4) slashing damage."
      },
      {
        "name": "Sting",
        "description": "Melee Weapon Attack: +8 to hit, reach 10 ft., one target. Hit: 13 (2d8 + 4) piercing damage plus 17 (5d6) poison damage, and the target must succeed on a DC 14 Constitution saving throw or become poisoned for 1 minute. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
      }
    ]
  },
  {
    "index": "brass-dragon-wyrmling",
    "name": "Brass Dragon Wyrmling",
    "size": "Medium",
    "type": "dragon",
    "alignment": "chaotic good",
    "armor_class": 16,
    "hit_points": 16,
    "hit_dice": "3d8",
    "speed": "30 ft.",
    "challenge_rating": 1,
    "proficiency_bonus": 2,
    "xp": 100,
    "dexterity": 10,
    "passive_perception": 14,
    "languages": "Draconic",
    "damage_resistances": [],
    "damage_immunities": [
      "fire"
    ],
    "condition_immunities": [],
    "actions": [
      {
        "name": "Bite",
        "description": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 7 (1d10 + 2) piercing damage."
      },
      {
        "name": "Breath Weapons",
        "description": "The dragon uses one of the following breath weapons.\nFire Breath. The dragon exhales fire in an 20-foot line that is 5 feet wide. Each creature in that line must make a DC 11 Dexterity saving throw, taking 14 (4d6) fire damage on a failed save, or half as much damage on a successful one.\nSleep Breath. The dragon exhales sleep gas in a 15-foot cone. Each creature in that area must succeed on a DC 11 Constitution saving throw or fall unconscious for 1 minute. This effect ends for a creature if the creature takes damage or someone uses an action to wake it."
      }
    ]
  },
  {
    "index": "bronze-dragon-wyrmling",
    "name": "Bronze Dragon Wyrmling",
    "size": "Medium",
    "type": "dragon",
    "alignment": "lawful good",
    "armor_class": 17,
    "hit_points": 32,
    "hit_dice": "5d8",
    "speed": "30 ft.",
    "challenge_rating": 2,
    "proficiency_bonus": 2,
    "xp": 450,
    "dexterity": 10,
    "passive_perception": 14,
    "languages": "Draconic",
    "damage_resistances": [],
    "damage_immunities": [
      "lightning"
    ],
    "condition_immunities": [],
    "actions": [
      {
        "name": "Bite",
        "description": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 8 (1d10 + 3) piercing damage."
      },
      {
        "name": "Breath Weapons",
        "description": "The dragon uses one of the following breath weapons.\nLightning Breath. The dragon exhales lightning in a 40-foot line that is 5 feet wide. Each creature in that line must make a DC 12 Dexterity saving throw, taking 16 (3d10) lightning damage on a failed save, or half as much damage on a successful one.\nRepulsion Breath. The dragon exhales repulsion energy in a 30-foot cone. Each creature in that area must succeed on a DC 12 Strength saving throw. On a failed save, the creature is pushed 30 feet away from the dragon."
      }
    ]
  },
  {
    "index": "brown-bear",
    "name": "Brown Bear",
    "size": "Large",
    "type": "beast",
    "alignment": "unaligned",
    "armor_class": 11,
    "hit_points": 34,
    "hit_dice": "4d10",
    "speed": "40 ft.",
    "challenge_rating": 1,
    "proficiency_bonus": 2,
    "xp": 200,
    "dexterity": 10,
    "passive_perception": 13,
    "languages": "",
    "damage_resistances": [],
    "damage_immunities": [],
    "condition_immunities": [],
    "actions": [
      {
        "name": "Multiattack",
        "description": "The bear makes two attacks: one with its bite and one with its claws."
      },
      {
        "name": "Bite",
        "description": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 8 (1d8 + 4) piercing damage."
      },
      {
        "name": "Claws",
        "description": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 11 (2d6 + 4) slashing damage."
      }
    ]
  },
  {
    "index": "bugbear",
    "name": "Bugbear",
    "size": "Medium",
    "type": "humanoid",
    "alignment": "chaotic evil",
    "armor_class": 16,
    "hit_points": 27,
    "hit_dice": "5d8",
    "speed": "30 ft.",
    "challenge_rating": 1,
    "proficiency_bonus": 2,
    "xp": 200,
    "dexterity": 14,
    "passive_perception": 10,
    "languages": "Common, Goblin",
    "damage_resistances": [],
    "damage_immunities": [],
    "condition_immunities": [],
    "actions": [
      {
        "name": "Morningstar",
        "description": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 11 (2d8 + 2) piercing damage."
      },
      {
        "name": "Javelin",
        "description": "Melee or Ranged Weapon Attack: +4 to hit, reach 5 ft. or range 30/120 ft., one target. Hit: 9 (2d6 + 2) piercing damage in melee or 5 (1d6 + 2) piercing damage at range."
      }
    ]
  },
  {
    "index": "bulette",
    "name": "Bulette",
    "size": "Large",
    "type": "monstrosity",
    "alignment": "unaligned",
    "armor_class": 17,
    "hit_points": 94,
    "hit_dice": "9d10",
    "speed": "40 ft.",
    "challenge_rating": 5,
    "proficiency_bonus": 3,
    "xp": 1800,
    "dexterity": 11,
    "passive_perception": 16,
    "languages": "",
    "damage_resistances": [],
    "damage_immunities": [],
    "condition_immunities": [],
    "actions": [
      {
        "name": "Bite",
        "description": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 30 (4d12 + 4) piercing damage."
      },
      {
        "name": "Deadly Leap",
        "description": "If the bulette jumps at least 15 ft. as part of its movement, it can then use this action to land on its feet in a space that contains one or more other creatures. Each of those creatures must succeed on a DC 16 Strength or Dexterity saving throw (target's choice) or be knocked prone and take 14 (3d6 + 4) bludgeoning damage plus 14 (3d6 + 4) slashing damage. On a successful save, the creature takes only half the damage, isn't knocked prone, and is pushed 5 ft. out of the bulette's space into an unoccupied space of the creature's choice. If no unoccupied space is within range, the creature instead falls prone in the bulette's space."
      }
    ]
  },
  {
    "index": "camel",
    "name": "Camel",
    "size": "Large",
    "type": "beast",
    "alignment": "unaligned",
    "armor_class": 9,
    "hit_points": 15,
    "hit_dice": "2d10",
    "speed": "50 ft.",
    "challenge_rating": 0.125,
    "proficiency_bonus": 2,
    "xp": 25,
    "dexterity": 8,
    "passive_perception": 9,
    "languages": "",
    "damage_resistances": [],
    "damage_immunities": [],
    "condition_immunities": [],
    "actions": [
      {
        "name": "Bite",
        "description": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 2 (1d4) bludgeoning damage."
      }
    ]
  },
  {
    "index": "cat",
    "name": "Cat",
    "size": "Tiny",
    "type": "beast",
    "alignment": "unaligned",
    "armor_class": 12,
    "hit_points": 2,
    "hit_dice": "1d4",
    "speed": "40 ft.",
    "challenge_rating": 0,
    "proficiency_bonus": 2,
    "xp": 10,
    "dexterity": 15,
    "passive_perception": 13,
    "languages": "",
    "damage_resistances": [],
    "damage_immunities": [],
    "condition_immunities": [],
    "actions": [
      {
        "name": "Claws",
        "description": "Melee Weapon Attack: +0 to hit, reach 5 ft., one target. Hit: 1 slashing damage."
      }
    ]
  },
  {
    "index": "centaur",
    "name": "Centaur",
    "size": "Large",
    "type": "monstrosity",
    "alignment": "neutral good",
    "armor_class": 12,
    "hit_points": 45,
    "hit_dice": "6d10",
    "speed": "50 ft.",
    "challenge_rating": 2,
    "proficiency_bonus": 2,
    "xp": 450,
    "dexterity": 14,
    "passive_perception": 13,
    "languages": "Elvish, Sylvan",
    "damage_resistances": [],
    "damage_immunities": [],
    "condition_immunities": [],
    "actions": [
      {
        "name": "Multiattack",
        "description": "The centaur makes two attacks: one with its pike and one with its hooves or two with its longbow."
      },
      {
        "name": "Pike",
        "description": "Melee Weapon Attack: +6 to hit, reach 10 ft., one target. Hit: 9 (1d10 + 4) piercing damage."
      },
      {
        "name": "Hooves",
        "description": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 11 (2d6 + 4) bludgeoning damage."
      },
      {
        "name": "Longbow",
        "description": "Ranged Weapon Attack: +4 to hit, range 150/600 ft., one target. Hit: 6 (1d8 + 2) piercing damage."
      }
    ]
  },
  {
    "index": "chain-devil",
    "name": "Chain Devil",
    "size": "Medium",
    "type": "fiend",
    "alignment": "lawful evil",
    "armor_class": 16,
    "hit_points": 85,
    "hit_dice": "10d8",
    "speed": "30 ft.",
    "challenge_rating": 8,
    "proficiency_bonus": 3,
    "xp": 3900,
    "dexterity": 15,
    "passive_perception": 11,
    "languages": "Infernal, telepathy 120 ft.",
    "damage_resistances": [
      "cold",
      "bludgeoning, piercing, and slashing from nonmagical weapons that aren't silvered"
    ],
    "damage_immunities": [
      "fire",
      "poison"
    ],
    "condition_immunities": [
      "Poisoned"
    ],
    "actions": [
      {
        "name": "Multiattack",
        "description": "The devil makes two attacks with its chains."
      },
      {
        "name": "Chain",
        "description": "Melee Weapon Attack: +8 to hit, reach 10 ft., one target. Hit: 11 (2d6 + 4) slashing damage. The target is grappled (escape DC 14) if the devil isn't already grappling a creature. Until this grapple ends, the target is restrained and takes 7 (2d6) piercing damage at the start of each of its turns."
      },
      {
        "name": "Animate Chains",
        "description": "Up to four chains the devil can see within 60 feet of it magically sprout razor-edged barbs and animate under the devil's control, provided that the chains aren't being worn or carried.\nEach animated chain is an object with AC 20, 20 hit points, resistance to piercing damage, and immunity to psychic and thunder damage. When the devil uses Multiattack on its turn, it can use each animated chain to make one additional chain attack. An animated chain can grapple one creature of its own but can't make attacks while grappling. An animated chain reverts to its inanimate state if reduced to 0 hit points or if the devil is incapacitated or dies."
      }
    ]
  },
  {
    "index": "chimera",
    "name": "Chimera",
    "size": "Large",
    "type": "monstrosity",
    "alignment": "chaotic evil",
    "armor_class": 14,
    "hit_points": 114,
    "hit_dice": "12d10",
    "speed": "30 ft.",
    "challenge_rating": 6,
    "proficiency_bonus": 3,
    "xp": 2300,
    "dexterity": 11,
    "passive_perception": 18,
    "languages": "understands Draconic but can't speak",
    "damage_resistances": [],
    "damage_immunities": [],
    "condition_immunities": [],
    "actions": [
      {
        "name": "Multiattack",
        "description": "The chimera makes three attacks: one with its bite, one with its horns, and one with its claws. When its fire breath is available, it can use the breath in place of its bite or horns."
      },
      {
        "name": "Bite",
        "description": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 11 (2d6 + 4) piercing damage."
      },
      {
        "name": "Horns",
        "description": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 10 (1d12 + 4) bludgeoning damage."
      },
      {
        "name": "Claws",
        "description": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 11 (2d6 + 4) slashing damage."
      },
      {
        "name": "Fire Breath",
        "description": "The dragon head exhales fire in a 15-foot cone. Each creature in that area must make a DC 15 Dexterity saving throw, taking 31 (7d8) fire damage on a failed save, or half as much damage on a successful one."
      }
    ]
  },
  {
    "index": "chuul",
    "name": "Chuul",
    "size": "Large",
    "type": "aberration",
    "alignment": "chaotic evil",
    "armor_class": 16,
    "hit_points": 93,
    "hit_dice": "11d10",
    "speed": "30 ft.",
    "challenge_rating": 4,
    "proficiency_bonus": 2,
    "xp": 1100,
    "dexterity": 10,
    "passive_perception": 14,
    "languages": "understands Deep Speech but can't speak",
    "damage_resistances": [],
    "damage_immunities": [
      "poison"
    ],
    "condition_immunities": [
      "Poisoned"
    ],
    "actions": [
      {
        "name": "Multiattack",
        "description": "The chuul makes two pincer attacks. If the chuul is grappling a creature, the chuul can also use its tentacles once."
      },
      {
        "name": "Pincer",
        "description": "Melee Weapon Attack: +6 to hit, reach 10 ft., one target. Hit: 11 (2d6 + 4) bludgeoning damage. The target is grappled (escape DC 14) if it is a Large or smaller creature and the chuul doesn't have two other creatures grappled."
      },
      {
        "name": "Tentacles",
        "description": "One creature grappled by the chuul must succeed on a DC 13 Constitution saving throw or be poisoned for 1 minute. Until this poison ends, the target is paralyzed. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
      }
    ]
  },
  {
    "index": "clay-golem",
    "name": "Clay Golem",
    "size": "Large",
    "type": "construct",
    "alignment": "unaligned",
    "armor_class": 14,
    "hit_points": 133,
    "hit_dice": "14d10",
    "speed": "20 ft.",
    "challenge_rating": 9,
    "proficiency_bonus": 4,
    "xp": 5000,
    "dexterity": 9,
    "passive_perception": 9,
    "languages": "understands the languages of its creator but can't speak",
    "damage_resistances": [],
    "damage_immunities": [
      "acid",
      "poison",
      "psychic",
      "bludgeoning, piercing, and slashing from nonmagical weapons that aren't adamantine"
    ],
    "condition_immunities": [
      "Charmed",
      "Exhaustion",
      "Frightened",
      "Paralyzed",
      "Petrified",
      "Poisoned"
    ],
    "actions": [
      {
        "name": "Multiattack",
        "description": "The golem makes two slam attacks."
      },
      {
        "name": "Slam",
        "description": "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 16 (2d10 + 5) bludgeoning damage. If the target is a creature, it must succeed on a DC 15 Constitution saving throw or have its hit point maximum reduced by an amount equal to the damage taken. The target dies if this attack reduces its hit point maximum to 0. The reduction lasts until removed by the greater restoration spell or other magic."
      },
      {
        "name": "Haste",
        "description": "Until the end of its next turn, the golem magically gains a +2 bonus to its AC, has advantage on Dexterity saving throws, and can use its slam attack as a bonus action."
      }
    ]
  },
  {
    "index": "cloaker",
    "name": "Cloaker",
    "size": "Large",
    "type": "aberration",
    "alignment": "chaotic neutral",
    "armor_class": 14,
    "hit_points": 78,
    "hit_dice": "12d10",
    "speed": "10 ft.",
    "challenge_rating": 8,
    "proficiency_bonus": 3,
    "xp": 3900,
    "dexterity": 15,
    "passive_perception": 11,
    "languages": "Deep Speech, Undercommon",
    "damage_resistances": [],
    "damage_immunities": [],
    "condition_immunities": [],
    "actions": [
      {
        "name": "Multiattack",
        "description": "The cloaker makes two attacks: one with its bite and one with its tail."
      },
      {
        "name": "Bite",
        "description": "Melee Weapon Attack: +6 to hit, reach 5 ft., one creature. Hit: 10 (2d6 + 3) piercing damage, and if the target is Large or smaller, the cloaker attaches to it. If the cloaker has advantage against the target, the cloaker attaches to the target's head, and the target is blinded and unable to breathe while the cloaker is attached. While attached, the cloaker can make this attack only against the target and has advantage on the attack roll. The cloaker can detach itself by spending 5 feet of its movement. A creature, including the target, can take its action to detach the cloaker by succeeding on a DC 16 Strength check."
      },
      {
        "name": "Tail",
        "description": "Melee Weapon Attack: +6 to hit, reach 10 ft., one creature. Hit: 7 (1d8 + 3) slashing damage."
      },
      {
        "name": "Moan",
        "description": "Each creature within 60 feet of the cloaker that can hear its moan and that isn't an aberration must succeed on a DC 13 Wisdom saving throw or become frightened until the end of the cloaker's next turn. If a creature's saving throw is successful, the creature is immune to the cloaker's moan for the next 24 hours."
      },
      {
        "name": "Phantasms",
        "description": "The cloaker magically creates three illusory duplicates of itself if it isn't in bright light. The duplicates move with it and mimic its actions, shifting position so as to make it impossible to track which cloaker is the real one. If the cloaker is ever in an area of bright light, the duplicates disappear.\nWhenever any creature targets the cloaker with an attack or a harmful spell while a duplicate remains, that creature rolls randomly to determine whether it targets the cloaker or one of the duplicates. A creature is unaffected by this magical effect if it can't see or if it relies on senses other than sight.\nA duplicate has the cloaker's AC and uses its saving throws. If an attack hits a duplicate, or if a duplicate fails a saving throw against an effect that deals damage, the duplicate disappears."
      }
    ]
  },
  {
    "index": "cloud-giant",
    "name": "Cloud Giant",
    "size": "Huge",
    "type": "giant",
    "alignment": "neutral good (50%) or neutral evil (50%)",
    "armor_class": 14,
    "hit_points": 200,
    "hit_dice": "16d12",
    "speed": "40 ft.",
    "challenge_rating": 9,
    "proficiency_bonus": 4,
    "xp": 5000,
    "dexterity": 10,
    "passive_perception": 17,
    "languages": "Common, Giant",
    "damage_resistances": [],
    "damage_immunities": [],
    "condition_immunities": [],
    "actions": [
      {
        "name": "Multiattack",
        "description": "The giant makes two morningstar attacks."
      },
      {
        "name": "Morningstar",
        "description": "Melee Weapon Attack: +12 to hit, reach 10 ft., one target. Hit: 21 (3d8 + 8) piercing damage."
      },
      {
        "name": "Rock",
        "description": "Ranged Weapon Attack: +12 to hit, range 60/240 ft., one target. Hit: 30 (4d10 + 8) bludgeoning damage."
      }
    ]
  },
  {
    "index": "cockatrice",
    "name": "Cockatrice",
    "size": "Small",
    "type": "monstrosity",
    "alignment": "unaligned",
    "armor_class": 11,
    "hit_points": 27,
    "hit_dice": "6d6",
    "speed": "20 ft.",
    "challenge_rating": 0.5,
    "proficiency_bonus": 2,
    "xp": 100,
    "dexterity": 12,
    "passive_perception": 11,
    "languages": "",
    "damage_resistances": [],
    "damage_immunities": [],
    "condition_immunities": [],
    "actions": [
      {
        "name": "Bite",
        "description": "Melee Weapon Attack: +3 to hit, reach 5 ft., one creature. Hit: 3 (1d4 + 1) piercing damage, and the target must succeed on a DC 11 Constitution saving throw against being magically petrified. On a failed save, the creature begins to turn to stone and is restrained. It must repeat the saving throw at the end of its next turn. On a success, the effect ends. On a failure, the creature is petrified for 24 hours."
      }
    ]
  },
  {
    "index": "commoner",
    "name": "Commoner",
    "size": "Medium",
    "type": "humanoid",
    "alignment": "any alignment",
    "armor_class": 10,
    "hit_points": 4,
    "hit_dice": "1d8",
    "speed": "30 ft.",
    "challenge_rating": 0,
    "proficiency_bonus": 2,
    "xp": 10,
    "dexterity": 10,
    "passive_perception": 10,
    "languages": "any one language (usually Common)",
    "damage_resistances": [],
    "damage_immunities": [],
    "condition_immunities": [],
    "actions": [
      {
        "name": "Club",
        "description": "Melee Weapon Attack: +2 to hit, reach 5 ft., one target. Hit: 2 (1d4) bludgeoning damage."
      }
    ]
  },
  {
    "index": "constrictor-snake",
    "name": "Constrictor Snake",
    "size": "Large",
    "type": "beast",
    "alignment": "unaligned",
    "armor_class": 12,
    "hit_points": 13,
    "hit_dice": "2d10",
    "speed": "30 ft.",
    "challenge_rating": 0.25,
    "proficiency_bonus": 2,
    "xp": 50,
    "dexterity": 14,
    "passive_perception": 10,
    "languages": "",
    "damage_resistances": [],
    "damage_immunities": [],
    "condition_immunities": [],
    "actions": [
      {
        "name": "Bite",
        "description": "Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 5 (1d6 + 2) piercing damage."
      },
      {
        "name": "Constrict",
        "description": "Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 6 (1d8 + 2) bludgeoning damage, and the target is grappled (escape DC 14). Until this grapple ends, the creature is restrained, and the snake can't constrict another target."
      }
    ]
  },
  {
    "index": "copper-dragon-wyrmling",
    "name": "Copper Dragon Wyrmling",
    "size": "Medium",
    "type": "dragon",
    "alignment": "chaotic good",
    "armor_class": 16,
    "hit_points": 22,
    "hit_dice": "4d8",
    "speed": "30 ft.",
    "challenge_rating": 1,
    "proficiency_bonus": 2,
    "xp": 200,
    "dexterity": 12,
    "passive_perception": 14,
    "languages": "Draconic",
    "damage_resistances": [],
    "damage_immunities": [
      "acid"
    ],
    "condition_immunities": [],
    "actions": [
      {
        "name": "Bite",
        "description": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 7 (1d10 + 2) piercing damage."
      },
      {
        "name": "Breath Weapons",
        "description": "The dragon uses one of the following breath weapons.\nAcid Breath. The dragon exhales acid in an 20-foot line that is 5 feet wide. Each creature in that line must make a DC 11 Dexterity saving throw, taking 18 (4d8) acid damage on a failed save, or half as much damage on a successful one.\nSlowing Breath. The dragon exhales gas in a 15-foot cone. Each creature in that area must succeed on a DC 11 Constitution saving throw. On a failed save, the creature can't use reactions, its speed is halved, and it can't make more than one attack on its turn. In addition, the creature can use either an action or a bonus action on its turn, but not both. These effects last for 1 minute. The creature can repeat the saving throw at the end of each of its turns, ending the effect on itself with a successful save."
      }
    ]
  },
  {
    "index": "couatl",
    "name": "Couatl",
    "size": "Medium",
    "type": "celestial",
    "alignment": "lawful good",
    "armor_class": 19,
    "hit_points": 97,
    "hit_dice": "13d8",
    "speed": "30 ft.",
    "challenge_rating": 4,
    "proficiency_bonus": 2,
    "xp": 1100,
    "dexterity": 20,
    "passive_perception": 15,
    "languages": "all, telepathy 120 ft.",
    "damage_resistances": [
      "radiant"
    ],
    "damage_immunities": [
      "psychic",
      "bludgeoning, piercing, and slashing from nonmagical weapons"
    ],
    "condition_immunities": [],
    "actions": [
      {
        "name": "Bite",
        "description": "Melee Weapon Attack: +8 to hit, reach 5 ft., one creature. Hit: 8 (1d6 + 5) piercing damage, and the target must succeed on a DC 13 Constitution saving throw or be poisoned for 24 hours. Until this poison ends, the target is unconscious. Another creature can use an action to shake the target awake."
      },
      {
        "name": "Constrict",
        "description": "Melee Weapon Attack: +6 to hit, reach 10 ft., one Medium or smaller creature. Hit: 10 (2d6 + 3) bludgeoning damage, and the target is grappled (escape DC 15). Until this grapple ends, the target is restrained, and the couatl can't constrict another target."
      },
      {
        "name": "Change Shape",
        "description": "The couatl magically polymorphs into a humanoid or beast that has a challenge rating equal to or less than its own, or back into its true form. It reverts to its true form if it dies. Any equipment it is wearing or carrying is absorbed or borne by the new form (the couatl's choice).\nIn a new form, the couatl retains its game statistics and ability to speak, but its AC, movement modes, Strength, Dexterity, and other actions are replaced by those of the new form, and it gains any statistics and capabilities (except class features, legendary actions, and lair actions) that the new form has but that it lacks. If the new form has a bite attack, the couatl can use its bite in that form."
      }
    ]
  },
  {
    "index": "crab",
    "name": "Crab",
    "size": "Tiny",
    "type": "beast",
    "alignment": "unaligned",
    "armor_class": 11,
    "hit_points": 2,
    "hit_dice": "1d4",
    "speed": "20 ft.",
    "challenge_rating": 0,
    "proficiency_bonus": 2,
    "xp": 10,
    "dexterity": 11,
    "passive_perception": 9,
    "languages": "",
    "damage_resistances": [],
    "damage_immunities": [],
    "condition_immunities": [],
    "actions": [
      {
        "name": "Claw",
        "description": "Melee Weapon Attack: +0 to hit, reach 5 ft., one target. Hit: 1 bludgeoning damage."
      }
    ]
  },
  {
    "index": "crocodile",
    "name": "Crocodile",
    "size": "Large",
    "type": "beast",
    "alignment": "unaligned",
    "armor_class": 12,
    "hit_points": 19,
    "hit_dice": "3d10",
    "speed": "20 ft.",
    "challenge_rating": 0.5,
    "proficiency_bonus": 2,
    "xp": 100,
    "dexterity": 10,
    "passive_perception": 10,
    "languages": "",
    "damage_resistances": [],
    "damage_immunities": [],
    "condition_immunities": [],
    "actions": [
      {
        "name": "Bite",
        "description": "Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 7 (1d10 + 2) piercing damage, and the target is grappled (escape DC 12). Until this grapple ends, the target is restrained, and the crocodile can't bite another target"
      }
    ]
  },
  {
    "index": "cult-fanatic",
    "name": "Cult Fanatic",
    "size": "Medium",
    "type": "humanoid",
    "alignment": "any non-good alignment",
    "armor_class": 13,
    "hit_points": 22,
    "hit_dice": "6d8",
    "speed": "30 ft.",
    "challenge_rating": 2,
    "proficiency_bonus": 2,
    "xp": 450,
    "dexterity": 14,
    "passive_perception": 11,
    "languages": "any one language (usually Common)",
    "damage_resistances": [],
    "damage_immunities": [],
    "condition_immunities": [],
    "actions": [
      {
        "name": "Multiattack",
        "description": "The fanatic makes two melee attacks."
      },
      {
        "name": "Dagger",
        "description": "Melee or Ranged Weapon Attack: +4 to hit, reach 5 ft. or range 20/60 ft., one creature. Hit: 4 (1d4 + 2) piercing damage."
      }
    ]
  },
  {
    "index": "cultist",
    "name": "Cultist",
    "size": "Medium",
    "type": "humanoid",
    "alignment": "any non-good alignment",
    "armor_class": 12,
    "hit_points": 9,
    "hit_dice": "2d8",
    "speed": "30 ft.",
    "challenge_rating": 0.125,
    "proficiency_bonus": 2,
    "xp": 25,
    "dexterity": 12,
    "passive_perception": 10,
    "languages": "any one language (usually Common)",
    "damage_resistances": [],
    "damage_immunities": [],
    "condition_immunities": [],
    "actions": [
      {
        "name": "Scimitar",
        "description": "Melee Weapon Attack: +3 to hit, reach 5 ft., one creature. Hit: 4 (1d6 + 1) slashing damage."
      }
    ]
  },
  {
    "index": "darkmantle",
    "name": "Darkmantle",
    "size": "Small",
    "type": "monstrosity",
    "alignment": "unaligned",
    "armor_class": 11,
    "hit_points": 22,
    "hit_dice": "5d6",
    "speed": "10 ft.",
    "challenge_rating": 0.5,
    "proficiency_bonus": 2,
    "xp": 100,
    "dexterity": 12,
    "passive_perception": 10,
    "languages": "",
    "damage_resistances": [],
    "damage_immunities": [],
    "condition_immunities": [],
    "actions": [
      {
        "name": "Crush",
        "description": "Melee Weapon Attack: +5 to hit, reach 5 ft., one creature. Hit: 6 (1d6 + 3) bludgeoning damage, and the darkmantle attaches to the target. If the target is Medium or smaller and the darkmantle has advantage on the attack roll, it attaches by engulfing the target's head, and the target is also blinded and unable to breathe while the darkmantle is attached in this way.\nWhile attached to the target, the darkmantle can attack no other creature except the target but has advantage on its attack rolls. The darkmantle's speed also becomes 0, it can't benefit from any bonus to its speed, and it moves with the target.\nA creature can detach the darkmantle by making a successful DC 13 Strength check as an action. On its turn, the darkmantle can detach itself from the target by using 5 feet of movement."
      },
      {
        "name": "Darkness Aura",
        "description": "A 15-foot radius of magical darkness extends out from the darkmantle, moves with it, and spreads around corners. The darkness lasts as long as the darkmantle maintains concentration, up to 10 minutes (as if concentrating on a spell). Darkvision can't penetrate this darkness, and no natural light can illuminate it. If any of the darkness overlaps with an area of light created by a spell of 2nd level or lower, the spell creating the light is dispelled."
      }
    ]
  },
  {
    "index": "death-dog",
    "name": "Death Dog",
    "size": "Medium",
    "type": "monstrosity",
    "alignment": "neutral evil",
    "armor_class": 12,
    "hit_points": 39,
    "hit_dice": "6d8",
    "speed": "40 ft.",
    "challenge_rating": 1,
    "proficiency_bonus": 2,
    "xp": 200,
    "dexterity": 14,
    "passive_perception": 15,
    "languages": "",
    "damage_resistances": [],
    "damage_immunities": [],
    "condition_immunities": [],
    "actions": [
      {
        "name": "Multiattack",
        "description": "The dog makes two bite attacks."
      },
      {
        "name": "Bite",
        "description": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6 + 2) piercing damage. If the target is a creature, it must succeed on a DC 12 Constitution saving throw against disease or become poisoned until the disease is cured. Every 24 hours that elapse, the creature must repeat the saving throw, reducing its hit point maximum by 5 (1d10) on a failure. This reduction lasts until the disease is cured. The creature dies if the disease reduces its hit point maximum to 0."
      }
    ]
  },
  {
    "index": "deep-gnome-svirfneblin",
    "name": "Deep Gnome (Svirfneblin)",
    "size": "Small",
    "type": "humanoid",
    "alignment": "neutral good",
    "armor_class": 15,
    "hit_points": 16,
    "hit_dice": "3d6",
    "speed": "20 ft.",
    "challenge_rating": 0.5,
    "proficiency_bonus": 2,
    "xp": 50,
    "dexterity": 14,
    "passive_perception": 12,
    "languages": "Gnomish, Terran, Undercommon",
    "damage_resistances": [],
    "damage_immunities": [],
    "condition_immunities": [],
    "actions": [
      {
        "name": "War Pick",
        "description": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 6 (1d8 + 2) piercing damage."
      },
      {
        "name": "Poisoned Dart",
        "description": "Ranged Weapon Attack: +4 to hit, range 30/120 ft., one creature. Hit: 4 (1d4 + 2) piercing damage, and the target must succeed on a DC 12 Constitution saving throw or be poisoned for 1 minute. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success"
      }
    ]
  },
  {
    "index": "deer",
    "name": "Deer",
    "size": "Medium",
    "type": "beast",
    "alignment": "unaligned",
    "armor_class": 13,
    "hit_points": 4,
    "hit_dice": "1d8",
    "speed": "50 ft.",
    "challenge_rating": 0,
    "proficiency_bonus": 2,
    "xp": 10,
    "dexterity": 16,
    "passive_perception": 12,
    "languages": "",
    "damage_resistances": [],
    "damage_immunities": [],
    "condition_immunities": [],
    "actions": [
      {
        "name": "Bite",
        "description": "Melee Weapon Attack: +2 to hit, reach 5 ft., one target. Hit: 2 (1d4) piercing damage."
      }
    ]
  },
  {
    "index": "deva",
    "name": "Deva",
    "size": "Medium",
    "type": "celestial",
    "alignment": "lawful good",
    "armor_class": 17,
    "hit_points": 136,
    "hit_dice": "16d8",
    "speed": "30 ft.",
    "challenge_rating": 10,
    "proficiency_bonus": 4,
    "xp": 5900,
    "dexterity": 18,
    "passive_perception": 19,
    "languages": "all, telepathy 120 ft.",
    "damage_resistances": [
      "radiant",
      "bludgeoning, piercing, and slashing from nonmagical weapons"
    ],
    "damage_immunities": [],
    "condition_immunities": [
      "Charmed",
      "Exhaustion",
      "Frightened"
    ],
    "actions": [
      {
        "name": "Multiattack",
        "description": "The deva makes two melee attacks."
      },
      {
        "name": "Mace",
        "description": "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 7 (1d6 + 4) bludgeoning damage plus 18 (4d8) radiant damage."
      },
      {
        "name": "Healing Touch",
        "description": "The deva touches another creature. The target magically regains 20 (4d8 + 2) hit points and is freed from any curse, disease, poison, blindness, or deafness."
      },
      {
        "name": "Change Shape",
        "description": "The deva magically polymorphs into a humanoid or beast that has a challenge rating equal to or less than its own, or back into its true form. It reverts to its true form if it dies. Any equipment it is wearing or carrying is absorbed or borne by the new form (the deva's choice).\nIn a new form, the deva retains its game statistics and ability to speak, but its AC, movement modes, Strength, Dexterity, and special senses are replaced by those of the new form, and it gains any statistics and capabilities (except class features, legendary actions, and lair actions) that the new form has but that it lacks."
      }
    ]
  },
  {
    "index": "dire-wolf",
    "name": "Dire Wolf",
    "size": "Large",
    "type": "beast",
    "alignment": "unaligned",
    "armor_class": 14,
    "hit_points": 37,
    "hit_dice": "5d10",
    "speed": "50 ft.",
    "challenge_rating": 1,
    "proficiency_bonus": 2,
    "xp": 200,
    "dexterity": 15,
    "passive_perception": 13,
    "languages": "",
    "damage_resistances": [],
    "damage_immunities": [],
    "condition_immunities": [],
    "actions": [
      {
        "name": "Bite",
        "description": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 10 (2d6 + 3) piercing damage. If the target is a creature, it must succeed on a DC 13 Strength saving throw or be knocked prone."
      }
    ]
  },
  {
    "index": "djinni",
    "name": "Djinni",
    "size": "Large",
    "type": "elemental",
    "alignment": "chaotic good",
    "armor_class": 17,
    "hit_points": 161,
    "hit_dice": "14d10",
    "speed": "30 ft.",
    "challenge_rating": 11,
    "proficiency_bonus": 4,
    "xp": 7200,
    "dexterity": 15,
    "passive_perception": 13,
    "languages": "Auran",
    "damage_resistances": [],
    "damage_immunities": [
      "lightning",
      "thunder"
    ],
    "condition_immunities": [],
    "actions": [
      {
        "name": "Multiattack",
        "description": "The djinni makes three scimitar attacks."
      },
      {
        "name": "Scimitar",
        "description": "Melee Weapon Attack: +9 to hit, reach 5 ft., one target. Hit: 12 (2d6 + 5) slashing damage plus 3 (1d6) lightning or thunder damage (djinni's choice)."
      },
      {
        "name": "Create Whirlwind",
        "description": "A 5-foot-radius, 30-foot-tall cylinder of swirling air magically forms on a point the djinni can see within 120 feet of it. The whirlwind lasts as long as the djinni maintains concentration (as if concentrating on a spell). Any creature but the djinni that enters the whirlwind must succeed on a DC 18 Strength saving throw or be restrained by it. The djinni can move the whirlwind up to 60 feet as an action, and creatures restrained by the whirlwind move with it. The whirlwind ends if the djinni loses sight of it.\nA creature can use its action to free a creature restrained by the whirlwind, including itself, by succeeding on a DC 18 Strength check. If the check succeeds, the creature is no longer restrained and moves to the nearest space outside the whirlwind."
      }
    ]
  },
  {
    "index": "doppelganger",
    "name": "Doppelganger",
    "size": "Medium",
    "type": "monstrosity",
    "alignment": "unaligned",
    "armor_class": 14,
    "hit_points": 52,
    "hit_dice": "8d8",
    "speed": "30 ft.",
    "challenge_rating": 3,
    "proficiency_bonus": 2,
    "xp": 700,
    "dexterity": 18,
    "passive_perception": 11,
    "languages": "Common",
    "damage_resistances": [],
    "damage_immunities": [],
    "condition_immunities": [
      "Charmed"
    ],
    "actions": [
      {
        "name": "Multiattack",
        "description": "The doppelganger makes two melee attacks."
      },
      {
        "name": "Slam",
        "description": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 7 (1d6 + 4) bludgeoning damage."
      },
      {
        "name": "Read Thoughts",
        "description": "The doppelganger magically reads the surface thoughts of one creature within 60 ft. of it. The effect can penetrate barriers, but 3 ft. of wood or dirt, 2 ft. of stone, 2 inches of metal, or a thin sheet of lead blocks it. While the target is in range, the doppelganger can continue reading its thoughts, as long as the doppelganger's concentration isn't broken (as if concentrating on a spell). While reading the target's mind, the doppelganger has advantage on Wisdom (Insight) and Charisma (Deception, Intimidation, and Persuasion) checks against the target."
      }
    ]
  },
  {
    "index": "draft-horse",
    "name": "Draft Horse",
    "size": "Large",
    "type": "beast",
    "alignment": "unaligned",
    "armor_class": 10,
    "hit_points": 19,
    "hit_dice": "3d10",
    "speed": "40 ft.",
    "challenge_rating": 0.25,
    "proficiency_bonus": 2,
    "xp": 50,
    "dexterity": 10,
    "passive_perception": 10,
    "languages": "",
    "damage_resistances": [],
    "damage_immunities": [],
    "condition_immunities": [],
    "actions": [
      {
        "name": "Hooves",
        "description": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 9 (2d4 + 4) bludgeoning damage."
      }
    ]
  },
  {
    "index": "dragon-turtle",
    "name": "Dragon Turtle",
    "size": "Gargantuan",
    "type": "dragon",
    "alignment": "neutral",
    "armor_class": 20,
    "hit_points": 341,
    "hit_dice": "22d20",
    "speed": "20 ft.",
    "challenge_rating": 17,
    "proficiency_bonus": 6,
    "xp": 18000,
    "dexterity": 10,
    "passive_perception": 11,
    "languages": "Aquan, Draconic",
    "damage_resistances": [
      "fire"
    ],
    "damage_immunities": [],
    "condition_immunities": [],
    "actions": [
      {
        "name": "Multiattack",
        "description": "The dragon turtle makes three attacks: one with its bite and two with its claws. It can make one tail attack in place of its two claw attacks."
      },
      {
        "name": "Bite",
        "description": "Melee Weapon Attack: +13 to hit, reach 15 ft., one target. Hit: 26 (3d12 + 7) piercing damage."
      },
      {
        "name": "Claw",
        "description": "Melee Weapon Attack: +13 to hit, reach 10 ft., one target. Hit: 16 (2d8 + 7) slashing damage."
      },
      {
        "name": "Tail",
        "description": "Melee Weapon Attack: +13 to hit, reach 15 ft., one target. Hit: 26 (3d12 + 7) bludgeoning damage. If the target is a creature, it must succeed on a DC 20 Strength saving throw or be pushed up to 10 feet away from the dragon turtle and knocked prone."
      },
      {
        "name": "Steam Breath",
        "description": "The dragon turtle exhales scalding steam in a 60-foot cone. Each creature in that area must make a DC 18 Constitution saving throw, taking 52 (15d6) fire damage on a failed save, or half as much damage on a successful one. Being underwater doesn't grant resistance against this damage."
      }
    ]
  },
  {
    "index": "dretch",
    "name": "Dretch",
    "size": "Small",
    "type": "fiend",
    "alignment": "chaotic evil",
    "armor_class": 11,
    "hit_points": 18,
    "hit_dice": "4d6",
    "speed": "20 ft.",
    "challenge_rating": 0.25,
    "proficiency_bonus": 2,
    "xp": 25,
    "dexterity": 11,
    "passive_perception": 9,
    "languages": "Abyssal, telepathy 60 ft. (works only with creatures that understand Abyssal)",
    "damage_resistances": [
      "cold",
      "fire",
      "lightning"
    ],
    "damage_immunities": [
      "poison"
    ],
    "condition_immunities": [
      "Poisoned"
    ],
    "actions": [
      {
        "name": "Multiattack",
        "description": "The dretch makes two attacks: one with its bite and one with its claws."
      },
      {
        "name": "Bite",
        "description": "Melee Weapon Attack: +2 to hit, reach 5 ft., one target. Hit: 3 (1d6) piercing damage."
      },
      {
        "name": "Claws",
        "description": "Melee Weapon Attack: +2 to hit, reach 5 ft., one target. Hit: 5 (2d4) slashing damage."
      },
      {
        "name": "Fetid Cloud",
        "description": "A 10-foot radius of disgusting green gas extends out from the dretch. The gas spreads around corners, and its area is lightly obscured. It lasts for 1 minute or until a strong wind disperses it. Any creature that starts its turn in that area must succeed on a DC 11 Constitution saving throw or be poisoned until the start of its next turn. While poisoned in this way, the target can take either an action or a bonus action on its turn, not both, and can't take reactions."
      }
    ]
  },
  {
    "index": "drider",
    "name": "Drider",
    "size": "Large",
    "type": "monstrosity",
    "alignment": "chaotic evil",
    "armor_class": 19,
    "hit_points": 123,
    "hit_dice": "13d10",
    "speed": "30 ft.",
    "challenge_rating": 6,
    "proficiency_bonus": 3,
    "xp": 2300,
    "dexterity": 16,
    "passive_perception": 15,
    "languages": "Elvish, Undercommon",
    "damage_resistances": [],
    "damage_immunities": [],
    "condition_immunities": [],
    "actions": [
      {
        "name": "Multiattack",
        "description": "The drider makes three attacks, either with its longsword or its longbow. It can replace one of those attacks with a bite attack."
      },
      {
        "name": "Bite",
        "description": "Melee Weapon Attack: +6 to hit, reach 5 ft., one creature. Hit: 2 (1d4) piercing damage plus 9 (2d8) poison damage."
      },
      {
        "name": "Longsword",
        "description": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 7 (1d8 + 3) slashing damage, or 8 (1d10 + 3) slashing damage if used with two hands."
      },
      {
        "name": "Longbow",
        "description": "Ranged Weapon Attack: +6 to hit, range 150/600 ft., one target. Hit: 7 (1d8 + 3) piercing damage plus 4 (1d8) poison damage."
      }
    ]
  },
  {
    "index": "drow",
    "name": "Drow",
    "size": "Medium",
    "type": "humanoid",
    "alignment": "neutral evil",
    "armor_class": 15,
    "hit_points": 13,
    "hit_dice": "3d8",
    "speed": "30 ft.",
    "challenge_rating": 0.25,
    "proficiency_bonus": 2,
    "xp": 50,
    "dexterity": 14,
    "passive_perception": 12,
    "languages": "Elvish, Undercommon",
    "damage_resistances": [],
    "damage_immunities": [],
    "condition_immunities": [],
    "actions": [
      {
        "name": "Shortsword",
        "description": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6 + 2) piercing damage."
      },
      {
        "name": "Hand Crossbow",
        "description": "Ranged Weapon Attack: +4 to hit, range 30/120 ft., one target. Hit: 5 (1d6 + 2) piercing damage, and the target must succeed on a DC 13 Constitution saving throw or be poisoned for 1 hour. If the saving throw fails by 5 or more, the target is also unconscious while poisoned in this way. The target wakes up if it takes damage or if another creature takes an action to shake it awake."
      }
    ]
  },
  {
    "index": "druid",
    "name": "Druid",
    "size": "Medium",
    "type": "humanoid",
    "alignment": "any alignment",
    "armor_class": 11,
    "hit_points": 27,
    "hit_dice": "5d8",
    "speed": "30 ft.",
    "challenge_rating": 2,
    "proficiency_bonus": 2,
    "xp": 450,
    "dexterity": 12,
    "passive_perception": 14,
    "languages": "Druidic plus any two languages",
    "damage_resistances": [],
    "damage_immunities": [],
    "condition_immunities": [],
    "actions": [
      {
        "name": "Quarterstaff",
        "description": " Melee Weapon Attack: +2 to hit (+4 to hit with shillelagh), reach 5 ft., one target. Hit: 3 (1d6) bludgeoning damage, 4 (1d8) bludgeoning damage if wielded with two hands, or 6 (1d8 + 2) bludgeoning damage with shillelagh."
      }
    ]
  },
  {
    "index": "dryad",
    "name": "Dryad",
    "size": "Medium",
    "type": "fey",
    "alignment": "neutral",
    "armor_class": 11,
    "hit_points": 22,
    "hit_dice": "5d8",
    "speed": "30 ft.",
    "challenge_rating": 1,
    "proficiency_bonus": 2,
    "xp": 200,
    "dexterity": 12,
    "passive_perception": 14,
    "languages": "Elvish, Sylvan",
    "damage_resistances": [],
    "damage_immunities": [],
    "condition_immunities": [],
    "actions": [
      {
        "name": "Club",
        "description": "Melee Weapon Attack: +2 to hit (+6 to hit with shillelagh), reach 5 ft., one target. Hit: 2 (1 d4) bludgeoning damage, or 8 (1d8 + 4) bludgeoning damage with shillelagh."
      },
      {
        "name": "Fey Charm",
        "description": "The dryad targets one humanoid or beast that she can see within 30 feet of her. If the target can see the dryad, it must succeed on a DC 14 Wisdom saving throw or be magically charmed. The charmed creature regards the dryad as a trusted friend to be heeded and protected. Although the target isn't under the dryad's control, it takes the dryad's requests or actions in the most favorable way it can.\nEach time the dryad or its allies do anything harmful to the target, it can repeat the saving throw, ending the effect on itself on a success. Otherwise, the effect lasts 24 hours or until the dryad dies, is on a different plane of existence from the target, or ends the effect as a bonus action. If a target's saving throw is successful, the target is immune to the dryad's Fey Charm for the next 24 hours.\nThe dryad can have no more than one humanoid and up to three beasts charmed at a time."
      }
    ]
  },
  {
    "index": "duergar",
    "name": "Duergar",
    "size": "Medium",
    "type": "humanoid",
    "alignment": "lawful evil",
    "armor_class": 16,
    "hit_points": 26,
    "hit_dice": "4d8",
    "speed": "25 ft.",
    "challenge_rating": 1,
    "proficiency_bonus": 2,
    "xp": 200,
    "dexterity": 11,
    "passive_perception": 10,
    "languages": "Dwarvish, Undercommon",
    "damage_resistances": [
      "poison"
    ],
    "damage_immunities": [],
    "condition_immunities": [],
    "actions": [
      {
        "name": "Enlarge",
        "description": "For 1 minute, the duergar magically increases in size, along with anything it is wearing or carrying. While enlarged, the duergar is Large, doubles its damage dice on Strength-based weapon attacks (included in the attacks), and makes Strength checks and Strength saving throws with advantage. If the duergar lacks the room to become Large, it attains the maximum size possible in the space available."
      },
      {
        "name": "War Pick",
        "description": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 6 (1d8 + 2) piercing damage, or 11 (2d8 + 2) piercing damage while enlarged."
      },
      {
        "name": "Javelin",
        "description": "Melee or Ranged Weapon Attack: +4 to hit, reach 5 ft. or range 30/120 ft., one target. Hit: 5 (1d6 + 2) piercing damage, or 9 (2d6 + 2) piercing damage while enlarged."
      },
      {
        "name": "Invisibility",
        "description": "The duergar magically turns invisible until it attacks, casts a spell, or uses its Enlarge, or until its concentration is broken, up to 1 hour (as if concentrating on a spell). Any equipment the duergar wears or carries is invisible with it."
      }
    ]
  },
  {
    "index": "dust-mephit",
    "name": "Dust Mephit",
    "size": "Small",
    "type": "elemental",
    "alignment": "neutral evil",
    "armor_class": 12,
    "hit_points": 17,
    "hit_dice": "5d6",
    "speed": "30 ft.",
    "challenge_rating": 0.5,
    "proficiency_bonus": 2,
    "xp": 100,
    "dexterity": 14,
    "passive_perception": 12,
    "languages": "Auran, Terran",
    "damage_resistances": [],
    "damage_immunities": [
      "poison"
    ],
    "condition_immunities": [
      "Poisoned"
    ],
    "actions": [
      {
        "name": "Claws",
        "description": "Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 4 (1d4 + 2) slashing damage."
      },
      {
        "name": "Blinding Breath",
        "description": "The mephit exhales a 15-foot cone of blinding dust. Each creature in that area must succeed on a DC 10 Dexterity saving throw or be blinded for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
      }
    ]
  },
  {
    "index": "eagle",
    "name": "Eagle",
    "size": "Small",
    "type": "beast",
    "alignment": "unaligned",
    "armor_class": 12,
    "hit_points": 3,
    "hit_dice": "1d6",
    "speed": "10 ft.",
    "challenge_rating": 0,
    "proficiency_bonus": 2,
    "xp": 10,
    "dexterity": 15,
    "passive_perception": 14,
    "languages": "",
    "damage_resistances": [],
    "damage_immunities": [],
    "condition_immunities": [],
    "actions": [
      {
        "name": "Talons",
        "description": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 4 (1d4 + 2) slashing damage."
      }
    ]
  },
  {
    "index": "earth-elemental",
    "name": "Earth Elemental",
    "size": "Large",
    "type": "elemental",
    "alignment": "neutral",
    "armor_class": 17,
    "hit_points": 126,
    "hit_dice": "12d10",
    "speed": "30 ft.",
    "challenge_rating": 5,
    "proficiency_bonus": 3,
    "xp": 1800,
    "dexterity": 8,
    "passive_perception": 10,
    "languages": "Terran",
    "damage_resistances": [
      "bludgeoning, piercing, and slashing from nonmagical weapons"
    ],
    "damage_immunities": [
      "poison"
    ],
    "condition_immunities": [
      "Exhaustion",
      "Paralyzed",
      "Petrified",
      "Poisoned",
      "Unconscious"
    ],
    "actions": [
      {
        "name": "Multiattack",
        "description": "The elemental makes two slam attacks."
      },
      {
        "name": "Slam",
        "description": "Melee Weapon Attack: +8 to hit, reach 10 ft., one target. Hit: 14 (2d8 + 5) bludgeoning damage."
      }
    ]
  },
  {
    "index": "efreeti",
    "name": "Efreeti",
    "size": "Large",
    "type": "elemental",
    "alignment": "lawful evil",
    "armor_class": 17,
    "hit_points": 200,
    "hit_dice": "16d10",
    "speed": "40 ft.",
    "challenge_rating": 11,
    "proficiency_bonus": 4,
    "xp": 7200,
    "dexterity": 12,
    "passive_perception": 12,
    "languages": "Ignan",
    "damage_resistances": [],
    "damage_immunities": [
      "fire"
    ],
    "condition_immunities": [],
    "actions": [
      {
        "name": "Multiattack",
        "description": "The efreeti makes two scimitar attacks or uses its Hurl Flame twice."
      },
      {
        "name": "Scimitar",
        "description": "Melee Weapon Attack: +10 to hit, reach 5 ft., one target. Hit: 13 (2d6 + 6) slashing damage plus 7 (2d6) fire damage."
      },
      {
        "name": "Hurl Flame",
        "description": "Ranged Spell Attack: +7 to hit, range 120 ft., one target. Hit: 17 (5d6) fire damage."
      }
    ]
  },
  {
    "index": "elephant",
    "name": "Elephant",
    "size": "Huge",
    "type": "beast",
    "alignment": "unaligned",
    "armor_class": 12,
    "hit_points": 76,
    "hit_dice": "8d12",
    "speed": "40 ft.",
    "challenge_rating": 4,
    "proficiency_bonus": 2,
    "xp": 1100,
    "dexterity": 9,
    "passive_perception": 10,
    "languages": "",
    "damage_resistances": [],
    "damage_immunities": [],
    "condition_immunities": [],
    "actions": [
      {
        "name": "Gore",
        "description": "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 19 (3d8 + 6) piercing damage."
      },
      {
        "name": "Stomp",
        "description": "Melee Weapon Attack: +8 to hit, reach 5 ft., one prone creature. Hit: 22 (3d10 + 6) bludgeoning damage."
      }
    ]
  },
  {
    "index": "elk",
    "name": "Elk",
    "size": "Large",
    "type": "beast",
    "alignment": "unaligned",
    "armor_class": 10,
    "hit_points": 13,
    "hit_dice": "2d10",
    "speed": "50 ft.",
    "challenge_rating": 0.25,
    "proficiency_bonus": 2,
    "xp": 50,
    "dexterity": 10,
    "passive_perception": 10,
    "languages": "",
    "damage_resistances": [],
    "damage_immunities": [],
    "condition_immunities": [],
    "actions": [
      {
        "name": "Ram",
        "description": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 6 (1d6 + 3) bludgeoning damage."
      },
      {
        "name": "Hooves",
        "description": "Melee Weapon Attack: +5 to hit, reach 5 ft., one prone creature. Hit: 8 (2d4 + 3) bludgeoning damage."
      }
    ]
  },
  {
    "index": "erinyes",
    "name": "Erinyes",
    "size": "Medium",
    "type": "fiend",
    "alignment": "lawful evil",
    "armor_class": 18,
    "hit_points": 153,
    "hit_dice": "18d8",
    "speed": "30 ft.",
    "challenge_rating": 12,
    "proficiency_bonus": 4,
    "xp": 8400,
    "dexterity": 16,
    "passive_perception": 12,
    "languages": "Infernal, telepathy 120 ft.",
    "damage_resistances": [
      "cold",
      "bludgeoning, piercing, and slashing from nonmagical weapons that aren't silvered"
    ],
    "damage_immunities": [
      "fire",
      "poison"
    ],
    "condition_immunities": [
      "Poisoned"
    ],
    "actions": [
      {
        "name": "Multiattack",
        "description": "The erinyes makes three attacks"
      },
      {
        "name": "Longsword",
        "description": "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 8 (1d8 + 4) slashing damage, or 9 (1d10 + 4) slashing damage if used with two hands, plus 13 (3d8) poison damage."
      },
      {
        "name": "Longbow",
        "description": "Ranged Weapon Attack: +7 to hit, range 150/600 ft., one target. Hit: 7 (1d8 + 3) piercing damage plus 13 (3d8) poison damage, and the target must succeed on a DC 14 Constitution saving throw or be poisoned. The poison lasts until it is removed by the lesser restoration spell or similar magic."
      }
    ]
  },
  {
    "index": "ettercap",
    "name": "Ettercap",
    "size": "Medium",
    "type": "monstrosity",
    "alignment": "neutral evil",
    "armor_class": 13,
    "hit_points": 44,
    "hit_dice": "8d8",
    "speed": "30 ft.",
    "challenge_rating": 2,
    "proficiency_bonus": 2,
    "xp": 450,
    "dexterity": 15,
    "passive_perception": 13,
    "languages": "",
    "damage_resistances": [],
    "damage_immunities": [],
    "condition_immunities": [],
    "actions": [
      {
        "name": "Multiattack",
        "description": "The ettercap makes two attacks: one with its bite and one with its claws."
      },
      {
        "name": "Bite",
        "description": "Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 6 (1d8 + 2) piercing damage plus 4 (1d8) poison damage. The target must succeed on a DC 11 Constitution saving throw or be poisoned for 1 minute. The creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
      },
      {
        "name": "Claws",
        "description": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 7 (2d4 + 2) slashing damage."
      },
      {
        "name": "Web",
        "description": "Ranged Weapon Attack: +4 to hit, range 30/60 ft., one Large or smaller creature. Hit: The creature is restrained by webbing. As an action, the restrained creature can make a DC 11 Strength check, escaping from the webbing on a success. The effect ends if the webbing is destroyed. The webbing has AC 10, 5 hit points, is vulnerable to fire damage and immune to bludgeoning damage."
      }
    ]
  },
  {
    "index": "ettin",
    "name": "Ettin",
    "size": "Large",
    "type": "giant",
    "alignment": "chaotic evil",
    "armor_class": 12,
    "hit_points": 85,
    "hit_dice": "10d10",
    "speed": "40 ft.",
    "challenge_rating": 4,
    "proficiency_bonus": 2,
    "xp": 1100,
    "dexterity": 8,
    "passive_perception": 14,
    "languages": "Giant, Orc",
    "damage_resistances": [],
    "damage_immunities": [],
    "condition_immunities": [],
    "actions": [
      {
        "name": "Multiattack",
        "description": "The ettin makes two attacks: one with its battleaxe and one with its morningstar."
      },
      {
        "name": "Battleaxe",
        "description": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 14 (2d8 + 5) slashing damage."
      },
      {
        "name": "Morningstar",
        "description": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 14 (2d8 + 5) piercing damage."
      }
    ]
  },
  {
    "index": "fire-elemental",
    "name": "Fire Elemental",
    "size": "Large",
    "type": "elemental",
    "alignment": "neutral",
    "armor_class": 13,
    "hit_points": 102,
    "hit_dice": "12d10",
    "speed": "50 ft.",
    "challenge_rating": 5,
    "proficiency_bonus": 3,
    "xp": 1800,
    "dexterity": 17,
    "passive_perception": 10,
    "languages": "Ignan",
    "damage_resistances": [
      "bludgeoning, piercing, and slashing from nonmagical weapons"
    ],
    "damage_immunities": [
      "fire",
      "poison"
    ],
    "condition_immunities": [
      "Exhaustion",
      "Grappled",
      "Paralyzed",
      "Petrified",
      "Poisoned",
      "Prone",
      "Restrained",
      "Unconscious"
    ],
    "actions": [
      {
        "name": "Multiattack",
        "description": "The elemental makes two touch attacks."
      },
      {
        "name": "Touch",
        "description": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 10 (2d6 + 3) fire damage. If the target is a creature or a flammable object, it ignites. Until a creature takes an action to douse the fire, the target takes 5 (1d10) fire damage at the start of each of its turns."
      }
    ]
  },
  {
    "index": "fire-giant",
    "name": "Fire Giant",
    "size": "Huge",
    "type": "giant",
    "alignment": "lawful evil",
    "armor_class": 18,
    "hit_points": 162,
    "hit_dice": "13d12",
    "speed": "30 ft.",
    "challenge_rating": 9,
    "proficiency_bonus": 4,
    "xp": 5000,
    "dexterity": 9,
    "passive_perception": 16,
    "languages": "Giant",
    "damage_resistances": [],
    "damage_immunities": [
      "fire"
    ],
    "condition_immunities": [],
    "actions": [
      {
        "name": "Multiattack",
        "description": "The giant makes two greatsword attacks."
      },
      {
        "name": "Greatsword",
        "description": "Melee Weapon Attack: +11 to hit, reach 10 ft., one target. Hit: 28 (6d6 + 7) slashing damage."
      },
      {
        "name": "Rock",
        "description": "Ranged Weapon Attack: +11 to hit, range 60/240 ft., one target. Hit: 29 (4d10 + 7) bludgeoning damage."
      }
    ]
  },
  {
    "index": "flesh-golem",
    "name": "Flesh Golem",
    "size": "Medium",
    "type": "construct",
    "alignment": "neutral",
    "armor_class": 9,
    "hit_points": 93,
    "hit_dice": "11d8",
    "speed": "30 ft.",
    "challenge_rating": 5,
    "proficiency_bonus": 3,
    "xp": 1800,
    "dexterity": 9,
    "passive_perception": 10,
    "languages": "understands the languages of its creator but can't speak",
    "damage_resistances": [],
    "damage_immunities": [
      "lightning",
      "poison",
      "bludgeoning, piercing, and slashing from nonmagical weapons that aren't adamantine"
    ],
    "condition_immunities": [
      "Charmed",
      "Exhaustion",
      "Frightened",
      "Paralyzed",
      "Petrified",
      "Poisoned"
    ],
    "actions": [
      {
        "name": "Multiattack",
        "description": "The golem makes two slam attacks."
      },
      {
        "name": "Slam",
        "description": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 13 (2d8 + 4) bludgeoning damage."
      }
    ]
  },
  {
    "index": "flying-snake",
    "name": "Flying Snake",
    "size": "Tiny",
    "type": "beast",
    "alignment": "unaligned",
    "armor_class": 14,
    "hit_points": 5,
    "hit_dice": "2d4",
    "speed": "30 ft.",
    "challenge_rating": 0.125,
    "proficiency_bonus": 2,
    "xp": 25,
    "dexterity": 18,
    "passive_perception": 11,
    "languages": "",
    "damage_resistances": [],
    "damage_immunities": [],
    "condition_immunities": [],
    "actions": [
      {
        "name": "Bite",
        "description": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 1 piercing damage plus 7 (3d4) poison damage."
      }
    ]
  },
  {
    "index": "flying-sword",
    "name": "Flying Sword",
    "size": "Small",
    "type": "construct",
    "alignment": "unaligned",
    "armor_class": 17,
    "hit_points": 17,
    "hit_dice": "5d6",
    "speed": "0 ft.",
    "challenge_rating": 0.25,
    "proficiency_bonus": 2,
    "xp": 50,
    "dexterity": 15,
    "passive_perception": 7,
    "languages": "",
    "damage_resistances": [],
    "damage_immunities": [
      "poison",
      "psychic"
    ],
    "condition_immunities": [
      "Blinded",
      "Charmed",
      "Blinded",
      "Frightened",
      "Paralyzed",
      "Petrified",
      "Poisoned"
    ],
    "actions": [
      {
        "name": "Longsword",
        "description": "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 5 (1d8 + 1) slashing damage."
      }
    ]
  },
  {
    "index": "frog",
    "name": "Frog",
    "size": "Tiny",
    "type": "beast",
    "alignment": "unaligned",
    "armor_class": 11,
    "hit_points": 1,
    "hit_dice": "1d4",
    "speed": "20 ft.",
    "challenge_rating": 0,
    "proficiency_bonus": 2,
    "xp": 0,
    "dexterity": 13,
    "passive_perception": 11,
    "languages": "",
    "damage_resistances": [],
    "damage_immunities": [],
    "condition_immunities": [],
    "actions": []
  },
  {
    "index": "frost-giant",
    "name": "Frost Giant",
    "size": "Huge",
    "type": "giant",
    "alignment": "neutral evil",
    "armor_class": 15,
    "hit_points": 138,
    "hit_dice": "12d12",
    "speed": "40 ft.",
    "challenge_rating": 8,
    "proficiency_bonus": 3,
    "xp": 3900,
    "dexterity": 9,
    "passive_perception": 13,
    "languages": "Giant",
    "damage_resistances": [],
    "damage_immunities": [
      "cold"
    ],
    "condition_immunities": [],
    "actions": [
      {
        "name": "Multiattack",
        "description": "The giant makes two greataxe attacks."
      },
      {
        "name": "Greataxe",
        "description": "Melee Weapon Attack: +9 to hit, reach 10 ft., one target. Hit: 25 (3d12 + 6) slashing damage."
      },
      {
        "name": "Rock",
        "description": "Ranged Weapon Attack: +9 to hit, range 60/240 ft., one target. Hit: 28 (4d10 + 6) bludgeoning damage."
      }
    ]
  },
  {
    "index": "gargoyle",
    "name": "Gargoyle",
    "size": "Medium",
    "type": "elemental",
    "alignment": "chaotic evil",
    "armor_class": 15,
    "hit_points": 52,
    "hit_dice": "7d8",
    "speed": "30 ft.",
    "challenge_rating": 2,
    "proficiency_bonus": 2,
    "xp": 450,
    "dexterity": 11,
    "passive_perception": 10,
    "languages": "Terran",
    "damage_resistances": [
      "bludgeoning, piercing, and slashing from nonmagical weapons that aren't adamantine"
    ],
    "damage_immunities": [
      "poison"
    ],
    "condition_immunities": [
      "Exhaustion",
      "Petrified",
      "Poisoned"
    ],
    "actions": [
      {
        "name": "Multiattack",
        "description": "The gargoyle makes two attacks: one with its bite and one with its claws."
      },
      {
        "name": "Bite",
        "description": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6 + 2) piercing damage."
      },
      {
        "name": "Claws",
        "description": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6 + 2) slashing damage."
      }
    ]
  },
  {
    "index": "gelatinous-cube",
    "name": "Gelatinous Cube",
    "size": "Large",
    "type": "ooze",
    "alignment": "unaligned",
    "armor_class": 6,
    "hit_points": 84,
    "hit_dice": "8d10",
    "speed": "15 ft.",
    "challenge_rating": 2,
    "proficiency_bonus": 2,
    "xp": 450,
    "dexterity": 3,
    "passive_perception": 8,
    "languages": "",
    "damage_resistances": [],
    "damage_immunities": [],
    "condition_immunities": [
      "Blinded",
      "Charmed",
      "Deafened",
      "Exhaustion",
      "Frightened",
      "Prone"
    ],
    "actions": [
      {
        "name": "Pseudopod",
        "description": "Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 10 (3d6) acid damage."
      },
      {
        "name": "Engulf",
        "description": "The cube moves up to its speed. While doing so, it can enter Large or smaller creatures' spaces. Whenever the cube enters a creature's space, the creature must make a DC 12 Dexterity saving throw.\nOn a successful save, the creature can choose to be pushed 5 feet back or to the side of the cube. A creature that chooses not to be pushed suffers the consequences of a failed saving throw.\nOn a failed save, the cube enters the creature's space, and the creature takes 10 (3d6) acid damage and is engulfed. The engulfed creature can't breathe, is restrained, and takes 21 (6d6) acid damage at the start of each of the cube's turns. When the cube moves, the engulfed creature moves with it.\nAn engulfed creature can try to escape by taking an action to make a DC 12 Strength check. On a success, the creature escapes and enters a space of its choice within 5 feet of the cube."
      }
    ]
  },
  {
    "index": "ghast",
    "name": "Ghast",
    "size": "Medium",
    "type": "undead",
    "alignment": "chaotic evil",
    "armor_class": 13,
    "hit_points": 36,
    "hit_dice": "8d8",
    "speed": "30 ft.",
    "challenge_rating": 2,
    "proficiency_bonus": 2,
    "xp": 450,
    "dexterity": 17,
    "passive_perception": 10,
    "languages": "Common",
    "damage_resistances": [
      "necrotic"
    ],
    "damage_immunities": [
      "poison"
    ],
    "condition_immunities": [
      "Poisoned",
      "Charmed",
      "Exhaustion"
    ],
    "actions": [
      {
        "name": "Bite",
        "description": "Melee Weapon Attack: +3 to hit, reach 5 ft., one creature. Hit: 12 (2d8 + 3) piercing damage."
      },
      {
        "name": "Claws",
        "description": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 10 (2d6 + 3) slashing damage. If the target is a creature other than an undead, it must succeed on a DC 10 Constitution saving throw or be paralyzed for 1 minute. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
      }
    ]
  },
  {
    "index": "ghost",
    "name": "Ghost",
    "size": "Medium",
    "type": "undead",
    "alignment": "any alignment",
    "armor_class": 11,
    "hit_points": 45,
    "hit_dice": "10d8",
    "speed": "0 ft.",
    "challenge_rating": 4,
    "proficiency_bonus": 2,
    "xp": 1100,
    "dexterity": 13,
    "passive_perception": 11,
    "languages": "any languages it knew in life",
    "damage_resistances": [
      "acid",
      "fire",
      "lightning",
      "thunder",
      "bludgeoning, piercing, and slashing from nonmagical weapons"
    ],
    "damage_immunities": [
      "cold",
      "necrotic",
      "poison"
    ],
    "condition_immunities": [
      "Charmed",
      "Exhaustion",
      "Frightened",
      "Grappled",
      "Paralyzed",
      "Petrified",
      "Poisoned",
      "Prone",
      "Restrained"
    ],
    "actions": [
      {
        "name": "Withering Touch",
        "description": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 17 (4d6 + 3) necrotic damage."
      },
      {
        "name": "Etherealness",
        "description": "The ghost enters the Ethereal Plane from the Material Plane, or vice versa. It is visible on the Material Plane while it is in the Border Ethereal, and vice versa, yet it can't affect or be affected by anything on the other plane."
      },
      {
        "name": "Horrifying Visage",
        "description": "Each non-undead creature within 60 ft. of the ghost that can see it must succeed on a DC 13 Wisdom saving throw or be frightened for 1 minute. If the save fails by 5 or more, the target also ages 1d4 × 10 years. A frightened target can repeat the saving throw at the end of each of its turns, ending the frightened condition on itself on a success. If a target's saving throw is successful or the effect ends for it, the target is immune to this ghost's Horrifying Visage for the next 24 hours. The aging effect can be reversed with a greater restoration spell, but only within 24 hours of it occurring."
      },
      {
        "name": "Possession",
        "description": "One humanoid that the ghost can see within 5 ft. of it must succeed on a DC 13 Charisma saving throw or be possessed by the ghost; the ghost then disappears, and the target is incapacitated and loses control of its body. The ghost now controls the body but doesn't deprive the target of awareness. The ghost can't be targeted by any attack, spell, or other effect, except ones that turn undead, and it retains its alignment, Intelligence, Wisdom, Charisma, and immunity to being charmed and frightened. It otherwise uses the possessed target's statistics, but doesn't gain access to the target's knowledge, class features, or proficiencies.\nThe possession lasts until the body drops to 0 hit points, the ghost ends it as a bonus action, or the ghost is turned or forced out by an effect like the dispel evil and good spell. When the possession ends, the ghost reappears in an unoccupied space within 5 ft. of the body. The target is immune to this ghost's Possession for 24 hours after succeeding on the saving throw or after the possession ends."
      }
    ]
  },
  {
    "index": "ghoul",
    "name": "Ghoul",
    "size": "Medium",
    "type": "undead",
    "alignment": "chaotic evil",
    "armor_class": 12,
    "hit_points": 22,
    "hit_dice": "5d8",
    "speed": "30 ft.",
    "challenge_rating": 1,
    "proficiency_bonus": 2,
    "xp": 200,
    "dexterity": 15,
    "passive_perception": 10,
    "languages": "Common",
    "damage_resistances": [],
    "damage_immunities": [
      "poison"
    ],
    "condition_immunities": [
      "Poisoned",
      "Charmed",
      "Exhaustion"
    ],
    "actions": [
      {
        "name": "Bite",
        "description": "Melee Weapon Attack: +2 to hit, reach 5 ft., one creature. Hit: 9 (2d6 + 2) piercing damage."
      },
      {
        "name": "Claws",
        "description": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 7 (2d4 + 2) slashing damage. If the target is a creature other than an elf or undead, it must succeed on a DC 10 Constitution saving throw or be paralyzed for 1 minute. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
      }
    ]
  },
  {
    "index": "giant-ape",
    "name": "Giant Ape",
    "size": "Huge",
    "type": "beast",
    "alignment": "unaligned",
    "armor_class": 12,
    "hit_points": 157,
    "hit_dice": "15d12",
    "speed": "40 ft.",
    "challenge_rating": 7,
    "proficiency_bonus": 3,
    "xp": 2900,
    "dexterity": 14,
    "passive_perception": 14,
    "languages": "",
    "damage_resistances": [],
    "damage_immunities": [],
    "condition_immunities": [],
    "actions": [
      {
        "name": "Multiattack",
        "description": "The ape makes two fist attacks."
      },
      {
        "name": "Fist",
        "description": "Melee Weapon Attack: +9 to hit, reach 10 ft., one target. Hit: 22 (3d10 + 6) bludgeoning damage."
      },
      {
        "name": "Rock",
        "description": "Ranged Weapon Attack: +9 to hit, range 50/100 ft., one target. Hit: 30 (7d6 + 6) bludgeoning damage."
      }
    ]
  },
  {
    "index": "giant-badger",
    "name": "Giant Badger",
    "size": "Medium",
    "type": "beast",
    "alignment": "unaligned",
    "armor_class": 10,
    "hit_points": 13,
    "hit_dice": "2d8",
    "speed": "30 ft.",
    "challenge_rating": 0.25,
    "proficiency_bonus": 2,
    "xp": 50,
    "dexterity": 10,
    "passive_perception": 11,
    "languages": "",
    "damage_resistances": [],
    "damage_immunities": [],
    "condition_immunities": [],
    "actions": [
      {
        "name": "Multiattack",
        "description": "The badger makes two attacks: one with its bite and one with its claws."
      },
      {
        "name": "Bite",
        "description": "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 4 (1d6 + 1) piercing damage."
      },
      {
        "name": "Claws",
        "description": "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 6 (2d4 + 1) slashing damage."
      }
    ]
  },
  {
    "index": "giant-bat",
    "name": "Giant Bat",
    "size": "Large",
    "type": "beast",
    "alignment": "unaligned",
    "armor_class": 13,
    "hit_points": 22,
    "hit_dice": "4d10",
    "speed": "10 ft.",
    "challenge_rating": 0.25,
    "proficiency_bonus": 2,
    "xp": 50,
    "dexterity": 16,
    "passive_perception": 11,
    "languages": "",
    "damage_resistances": [],
    "damage_immunities": [],
    "condition_immunities": [],
    "actions": [
      {
        "name": "Bite",
        "description": "Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 5 (1d6 + 2) piercing damage."
      }
    ]
  },
  {
    "index": "giant-boar",
    "name": "Giant Boar",
    "size": "Large",
    "type": "beast",
    "alignment": "unaligned",
    "armor_class": 12,
    "hit_points": 42,
    "hit_dice": "5d10",
    "speed": "40 ft.",
    "challenge_rating": 2,
    "proficiency_bonus": 2,
    "xp": 450,
    "dexterity": 10,
    "passive_perception": 8,
    "languages": "",
    "damage_resistances": [],
    "damage_immunities": [],
    "condition_immunities": [],
    "actions": [
      {
        "name": "Tusk",
        "description": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 10 (2d6 + 3) slashing damage."
      }
    ]
  },
  {
    "index": "giant-centipede",
    "name": "Giant Centipede",
    "size": "Small",
    "type": "beast",
    "alignment": "unaligned",
    "armor_class": 13,
    "hit_points": 4,
    "hit_dice": "1d6",
    "speed": "30 ft.",
    "challenge_rating": 0.25,
    "proficiency_bonus": 2,
    "xp": 50,
    "dexterity": 14,
    "passive_perception": 8,
    "languages": "",
    "damage_resistances": [],
    "damage_immunities": [],
    "condition_immunities": [],
    "actions": [
      {
        "name": "Bite",
        "description": "Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 4 (1d4 + 2) piercing damage, and the target must succeed on a DC 11 Constitution saving throw or take 10 (3d6) poison damage. If the poison damage reduces the target to 0 hit points, the target is stable but poisoned for 1 hour, even after regaining hit points, and is paralyzed while poisoned in this way."
      }
    ]
  },
  {
    "index": "giant-constrictor-snake",
    "name": "Giant Constrictor Snake",
    "size": "Huge",
    "type": "beast",
    "alignment": "unaligned",
    "armor_class": 12,
    "hit_points": 60,
    "hit_dice": "8d12",
    "speed": "30 ft.",
    "challenge_rating": 2,
    "proficiency_bonus": 2,
    "xp": 450,
    "dexterity": 14,
    "passive_perception": 12,
    "languages": "",
    "damage_resistances": [],
    "damage_immunities": [],
    "condition_immunities": [],
    "actions": [
      {
        "name": "Bite",
        "description": "Melee Weapon Attack: +6 to hit, reach 10 ft., one creature. Hit: 11 (2d6 + 4) piercing damage."
      },
      {
        "name": "Constrict",
        "description": "Melee Weapon Attack: +6 to hit, reach 5 ft., one creature. Hit: 13 (2d8 + 4) bludgeoning damage, and the target is grappled (escape DC 16). Until this grapple ends, the creature is restrained, and the snake can't constrict another target."
      }
    ]
  },
  {
    "index": "giant-crab",
    "name": "Giant Crab",
    "size": "Medium",
    "type": "beast",
    "alignment": "unaligned",
    "armor_class": 15,
    "hit_points": 13,
    "hit_dice": "3d8",
    "speed": "30 ft.",
    "challenge_rating": 0.125,
    "proficiency_bonus": 2,
    "xp": 25,
    "dexterity": 15,
    "passive_perception": 9,
    "languages": "",
    "damage_resistances": [],
    "damage_immunities": [],
    "condition_immunities": [],
    "actions": [
      {
        "name": "Claw",
        "description": "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 4 (1d6 + 1) bludgeoning damage, and the target is grappled (escape DC 11). The crab has two claws, each of which can grapple only one target."
      }
    ]
  },
  {
    "index": "giant-crocodile",
    "name": "Giant Crocodile",
    "size": "Huge",
    "type": "beast",
    "alignment": "unaligned",
    "armor_class": 14,
    "hit_points": 85,
    "hit_dice": "9d12",
    "speed": "30 ft.",
    "challenge_rating": 5,
    "proficiency_bonus": 3,
    "xp": 1800,
    "dexterity": 9,
    "passive_perception": 10,
    "languages": "",
    "damage_resistances": [],
    "damage_immunities": [],
    "condition_immunities": [],
    "actions": [
      {
        "name": "Multiattack",
        "description": "The crocodile makes two attacks: one with its bite and one with its tail."
      },
      {
        "name": "Bite",
        "description": "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 21 (3d10 + 5) piercing damage, and the target is grappled (escape DC 16). Until this grapple ends, the target is restrained, and the crocodile can't bite another target."
      },
      {
        "name": "Tail",
        "description": "Melee Weapon Attack: +8 to hit, reach 10 ft., one target not grappled by the crocodile. Hit: 14 (2d8 + 5) bludgeoning damage. If the target is a creature, it must succeed on a DC 16 Strength saving throw or be knocked prone."
      }
    ]
  },
  {
    "index": "giant-eagle",
    "name": "Giant Eagle",
    "size": "Large",
    "type": "beast",
    "alignment": "neutral good",
    "armor_class": 13,
    "hit_points": 26,
    "hit_dice": "4d10",
    "speed": "10 ft.",
    "challenge_rating": 1,
    "proficiency_bonus": 2,
    "xp": 200,
    "dexterity": 17,
    "passive_perception": 14,
    "languages": "Giant Eagle, understands Common and Auran but can't speak",
    "damage_resistances": [],
    "damage_immunities": [],
    "condition_immunities": [],
    "actions": [
      {
        "name": "Multiattack",
        "description": "The eagle makes two attacks: one with its beak and one with its talons."
      },
      {
        "name": "Beak",
        "description": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 6 (1d6 + 3) piercing damage."
      },
      {
        "name": "Talons",
        "description": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 10 (2d6 + 3) slashing damage."
      }
    ]
  },
  {
    "index": "giant-elk",
    "name": "Giant Elk",
    "size": "Huge",
    "type": "beast",
    "alignment": "unaligned",
    "armor_class": 14,
    "hit_points": 42,
    "hit_dice": "5d12",
    "speed": "60 ft.",
    "challenge_rating": 2,
    "proficiency_bonus": 2,
    "xp": 450,
    "dexterity": 16,
    "passive_perception": 14,
    "languages": "Giant Elk, understands Common, Elvish, and Sylvan but can't speak",
    "damage_resistances": [],
    "damage_immunities": [],
    "condition_immunities": [],
    "actions": [
      {
        "name": "Ram",
        "description": "Melee Weapon Attack: +6 to hit, reach 10 ft., one target. Hit: 11 (2d6 + 4) bludgeoning damage."
      },
      {
        "name": "Hooves",
        "description": "Melee Weapon Attack: +6 to hit, reach 5 ft., one prone creature. Hit: 22 (4d8 + 4) bludgeoning damage."
      }
    ]
  },
  {
    "index": "giant-fire-beetle",
    "name": "Giant Fire Beetle",
    "size": "Small",
    "type": "beast",
    "alignment": "unaligned",
    "armor_class": 13,
    "hit_points": 4,
    "hit_dice": "1d6",
    "speed": "30 ft.",
    "challenge_rating": 0,
    "proficiency_bonus": 2,
    "xp": 10,
    "dexterity": 10,
    "passive_perception": 8,
    "languages": "",
    "damage_resistances": [],
    "damage_immunities": [],
    "condition_immunities": [],
    "actions": [
      {
        "name": "Bite",
        "description": "Melee Weapon Attack: +1 to hit, reach 5 ft., one target. Hit: 2 (1d6 - 1) slashing damage."
      }
    ]
  },
  {
    "index": "giant-frog",
    "name": "Giant Frog",
    "size": "Medium",
    "type": "beast",
    "alignment": "unaligned",
    "armor_class": 11,
    "hit_points": 18,
    "hit_dice": "4d8",
    "speed": "30 ft.",
    "challenge_rating": 0.25,
    "proficiency_bonus": 2,
    "xp": 50,
    "dexterity": 13,
    "passive_perception": 12,
    "languages": "",
    "damage_resistances": [],
    "damage_immunities": [],
    "condition_immunities": [],
    "actions": [
      {
        "name": "Bite",
        "description": "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 4 (1d6 + 1) piercing damage, and the target is grappled (escape DC 11). Until this grapple ends, the target is restrained, and the frog can't bite another target."
      },
      {
        "name": "Swallow",
        "description": "The frog makes one bite attack against a Small or smaller target it is grappling. If the attack hits, the target is swallowed, and the grapple ends. The swallowed target is blinded and restrained, it has total cover against attacks and other effects outside the frog, and it takes 5 (2d4) acid damage at the start of each of the frog's turns. The frog can have only one target swallowed at a time. If the frog dies, a swallowed creature is no longer restrained by it and can escape from the corpse using 5 ft. of movement, exiting prone."
      }
    ]
  },
  {
    "index": "giant-goat",
    "name": "Giant Goat",
    "size": "Large",
    "type": "beast",
    "alignment": "unaligned",
    "armor_class": 11,
    "hit_points": 19,
    "hit_dice": "3d10",
    "speed": "40 ft.",
    "challenge_rating": 0.5,
    "proficiency_bonus": 2,
    "xp": 100,
    "dexterity": 11,
    "passive_perception": 11,
    "languages": "",
    "damage_resistances": [],
    "damage_immunities": [],
    "condition_immunities": [],
    "actions": [
      {
        "name": "Ram",
        "description": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 8 (2d4 + 3) bludgeoning damage."
      }
    ]
  },
  {
    "index": "giant-hyena",
    "name": "Giant Hyena",
    "size": "Large",
    "type": "beast",
    "alignment": "unaligned",
    "armor_class": 12,
    "hit_points": 45,
    "hit_dice": "6d10",
    "speed": "50 ft.",
    "challenge_rating": 1,
    "proficiency_bonus": 2,
    "xp": 200,
    "dexterity": 14,
    "passive_perception": 13,
    "languages": "",
    "damage_resistances": [],
    "damage_immunities": [],
    "condition_immunities": [],
    "actions": [
      {
        "name": "Bite",
        "description": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 10 (2d6 + 3) piercing damage."
      }
    ]
  },
  {
    "index": "giant-lizard",
    "name": "Giant Lizard",
    "size": "Large",
    "type": "beast",
    "alignment": "unaligned",
    "armor_class": 12,
    "hit_points": 19,
    "hit_dice": "3d10",
    "speed": "30 ft.",
    "challenge_rating": 0.25,
    "proficiency_bonus": 2,
    "xp": 50,
    "dexterity": 12,
    "passive_perception": 10,
    "languages": "",
    "damage_resistances": [],
    "damage_immunities": [],
    "condition_immunities": [],
    "actions": [
      {
        "name": "Bite",
        "description": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 6 (1d8 + 2) piercing damage."
      }
    ]
  },
  {
    "index": "giant-octopus",
    "name": "Giant Octopus",
    "size": "Large",
    "type": "beast",
    "alignment": "unaligned",
    "armor_class": 11,
    "hit_points": 52,
    "hit_dice": "8d10",
    "speed": "10 ft.",
    "challenge_rating": 1,
    "proficiency_bonus": 2,
    "xp": 200,
    "dexterity": 13,
    "passive_perception": 14,
    "languages": "",
    "damage_resistances": [],
    "damage_immunities": [],
    "condition_immunities": [],
    "actions": [
      {
        "name": "Tentacles",
        "description": "Melee Weapon Attack: +5 to hit, reach 15 ft., one target. Hit: 10 (2d6 + 3) bludgeoning damage. If the target is a creature, it is grappled (escape DC 16). Until this grapple ends, the target is restrained, and the octopus can't use its tentacles on another target."
      },
      {
        "name": "Ink Cloud",
        "description": "A 20-foot-radius cloud of ink extends all around the octopus if it is underwater. The area is heavily obscured for 1 minute, although a significant current can disperse the ink. After releasing the ink, the octopus can use the Dash action as a bonus action."
      }
    ]
  },
  {
    "index": "giant-owl",
    "name": "Giant Owl",
    "size": "Large",
    "type": "beast",
    "alignment": "neutral",
    "armor_class": 12,
    "hit_points": 19,
    "hit_dice": "3d10",
    "speed": "5 ft.",
    "challenge_rating": 0.25,
    "proficiency_bonus": 2,
    "xp": 50,
    "dexterity": 15,
    "passive_perception": 15,
    "languages": "Giant Owl, understands Common, Elvish, and Sylvan but can't speak",
    "damage_resistances": [],
    "damage_immunities": [],
    "condition_immunities": [],
    "actions": [
      {
        "name": "Talons",
        "description": "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 8 (2d6 + 1) slashing damage."
      }
    ]
  },
  {
    "index": "giant-poisonous-snake",
    "name": "Giant Poisonous Snake",
    "size": "Medium",
    "type": "beast",
    "alignment": "unaligned",
    "armor_class": 14,
    "hit_points": 11,
    "hit_dice": "2d8",
    "speed": "30 ft.",
    "challenge_rating": 0.25,
    "proficiency_bonus": 2,
    "xp": 50,
    "dexterity": 18,
    "passive_perception": 12,
    "languages": "",
    "damage_resistances": [],
    "damage_immunities": [],
    "condition_immunities": [],
    "actions": [
      {
        "name": "Bite",
        "description": "Melee Weapon Attack: +6 to hit, reach 10 ft., one target. Hit: 6 (1d4 + 4) piercing damage, and the target must make a DC 11 Constitution saving throw, taking 10 (3d6) poison damage on a failed save, or half as much damage on a successful one."
      }
    ]
  },
  {
    "index": "giant-rat",
    "name": "Giant Rat",
    "size": "Small",
    "type": "beast",
    "alignment": "unaligned",
    "armor_class": 12,
    "hit_points": 7,
    "hit_dice": "2d6",
    "speed": "30 ft.",
    "challenge_rating": 0.125,
    "proficiency_bonus": 2,
    "xp": 25,
    "dexterity": 15,
    "passive_perception": 10,
    "languages": "",
    "damage_resistances": [],
    "damage_immunities": [],
    "condition_immunities": [],
    "actions": [
      {
        "name": "Bite",
        "description": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 4 (1d4 + 2) piercing damage."
      }
    ]
  },
  {
    "index": "giant-rat-diseased",
    "name": "Giant Rat (Diseased)",
    "size": "Small",
    "type": "beast",
    "alignment": "unaligned",
    "armor_class": 12,
    "hit_points": 7,
    "hit_dice": "2d6",
    "speed": "30 ft.",
    "challenge_rating": 0.125,
    "proficiency_bonus": 2,
    "xp": 25,
    "dexterity": 15,
    "passive_perception": 10,
    "languages": "",
    "damage_resistances": [],
    "damage_immunities": [],
    "condition_immunities": [],
    "actions": [
      {
        "name": "Bite",
        "description": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 3 (1d4 + 2) piercing damage. If the target is a creature, it must succeed on a DC 10 Constitution saving throw or contract a disease. Until the disease is cured, the target can't regain hit points except by magical means, and the target's hit point maximum decreases by 3 (1d6) every 24 hours. If the target's hit point maximum drops to 0 as a result of this disease, the target dies."
      }
    ]
  },
  {
    "index": "giant-scorpion",
    "name": "Giant Scorpion",
    "size": "Large",
    "type": "beast",
    "alignment": "unaligned",
    "armor_class": 15,
    "hit_points": 52,
    "hit_dice": "7d10",
    "speed": "40 ft.",
    "challenge_rating": 3,
    "proficiency_bonus": 2,
    "xp": 700,
    "dexterity": 13,
    "passive_perception": 9,
    "languages": "",
    "damage_resistances": [],
    "damage_immunities": [],
    "condition_immunities": [],
    "actions": [
      {
        "name": "Claw",
        "description": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 6 (1d8 + 2) bludgeoning damage, and the target is grappled (escape DC 12). The scorpion has two claws, each of which can grapple only one target."
      },
      {
        "name": "Multiattack",
        "description": "The scorpion makes three attacks: two with its claws and one with its sting."
      },
      {
        "name": "Sting",
        "description": "Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 7 (1d10 + 2) piercing damage, and the target must make a DC 12 Constitution saving throw, taking 22 (4d10) poison damage on a failed save, or half as much damage on a successful one."
      }
    ]
  },
  {
    "index": "giant-sea-horse",
    "name": "Giant Sea Horse",
    "size": "Large",
    "type": "beast",
    "alignment": "unaligned",
    "armor_class": 13,
    "hit_points": 16,
    "hit_dice": "3d10",
    "speed": "0 ft.",
    "challenge_rating": 0.5,
    "proficiency_bonus": 2,
    "xp": 100,
    "dexterity": 15,
    "passive_perception": 11,
    "languages": "",
    "damage_resistances": [],
    "damage_immunities": [],
    "condition_immunities": [],
    "actions": [
      {
        "name": "Ram",
        "description": "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 4 (1d6 + 1) bludgeoning damage."
      }
    ]
  },
  {
    "index": "giant-shark",
    "name": "Giant Shark",
    "size": "Huge",
    "type": "beast",
    "alignment": "unaligned",
    "armor_class": 13,
    "hit_points": 126,
    "hit_dice": "11d12",
    "speed": "30 ft.",
    "challenge_rating": 5,
    "proficiency_bonus": 3,
    "xp": 1800,
    "dexterity": 11,
    "passive_perception": 13,
    "languages": "",
    "damage_resistances": [],
    "damage_immunities": [],
    "condition_immunities": [],
    "actions": [
      {
        "name": "Bite",
        "description": "Melee Weapon Attack: +9 to hit, reach 5 ft., one target. Hit: 22 (3d10 + 6) piercing damage."
      }
    ]
  },
  {
    "index": "giant-spider",
    "name": "Giant Spider",
    "size": "Large",
    "type": "beast",
    "alignment": "unaligned",
    "armor_class": 14,
    "hit_points": 26,
    "hit_dice": "4d10",
    "speed": "30 ft.",
    "challenge_rating": 1,
    "proficiency_bonus": 2,
    "xp": 200,
    "dexterity": 16,
    "passive_perception": 10,
    "languages": "",
    "damage_resistances": [],
    "damage_immunities": [],
    "condition_immunities": [],
    "actions": [
      {
        "name": "Bite",
        "description": "Melee Weapon Attack: +5 to hit, reach 5 ft., one creature. Hit: 7 (1d8 + 3) piercing damage, and the target must make a DC 11 Constitution saving throw, taking 9 (2d8) poison damage on a failed save, or half as much damage on a successful one. If the poison damage reduces the target to 0 hit points, the target is stable but poisoned for 1 hour, even after regaining hit points, and is paralyzed while poisoned in this way."
      },
      {
        "name": "Web",
        "description": "Ranged Weapon Attack: +5 to hit, range 30/60 ft., one creature. Hit: The target is restrained by webbing. As an action, the restrained target can make a DC 12 Strength check, bursting the webbing on a success. The webbing can also be attacked and destroyed (AC 10; hp 5; vulnerability to fire damage; immunity to bludgeoning, poison, and psychic damage)."
      }
    ]
  },
  {
    "index": "giant-toad",
    "name": "Giant Toad",
    "size": "Large",
    "type": "beast",
    "alignment": "unaligned",
    "armor_class": 11,
    "hit_points": 39,
    "hit_dice": "6d10",
    "speed": "20 ft.",
    "challenge_rating": 1,
    "proficiency_bonus": 2,
    "xp": 200,
    "dexterity": 13,
    "passive_perception": 10,
    "languages": "",
    "damage_resistances": [],
    "damage_immunities": [],
    "condition_immunities": [],
    "actions": [
      {
        "name": "Bite",
        "description": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 7 (1d10 + 2) piercing damage plus 5 (1d10) poison damage, and the target is grappled (escape DC 13). Until this grapple ends, the target is restrained, and the toad can't bite another target."
      },
      {
        "name": "Swallow",
        "description": "The toad makes one bite attack against a Medium or smaller target it is grappling. If the attack hits, the target is swallowed, and the grapple ends. The swallowed target is blinded and restrained, it has total cover against attacks and other effects outside the toad, and it takes 10 (3d6) acid damage at the start of each of the toad's turns. The toad can have only one target swallowed at a time.\nIf the toad dies, a swallowed creature is no longer restrained by it and can escape from the corpse using 5 feet of movement, exiting prone."
      }
    ]
  },
  {
    "index": "giant-vulture",
    "name": "Giant Vulture",
    "size": "Large",
    "type": "beast",
    "alignment": "neutral evil",
    "armor_class": 10,
    "hit_points": 22,
    "hit_dice": "3d10",
    "speed": "10 ft.",
    "challenge_rating": 1,
    "proficiency_bonus": 2,
    "xp": 200,
    "dexterity": 10,
    "passive_perception": 13,
    "languages": "understands Common but can't speak",
    "damage_resistances": [],
    "damage_immunities": [],
    "condition_immunities": [],
    "actions": [
      {
        "name": "Multiattack",
        "description": "The vulture makes two attacks: one with its beak and one with its talons."
      },
      {
        "name": "Beak",
        "description": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 7 (2d4 + 2) piercing damage."
      },
      {
        "name": "Talons",
        "description": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 9 (2d6 + 2) slashing damage."
      }
    ]
  },
  {
    "index": "giant-wasp",
    "name": "Giant Wasp",
    "size": "Medium",
    "type": "beast",
    "alignment": "unaligned",
    "armor_class": 12,
    "hit_points": 13,
    "hit_dice": "3d8",
    "speed": "10 ft.",
    "challenge_rating": 0.5,
    "proficiency_bonus": 2,
    "xp": 100,
    "dexterity": 14,
    "passive_perception": 10,
    "languages": "",
    "damage_resistances": [],
    "damage_immunities": [],
    "condition_immunities": [],
    "actions": [
      {
        "name": "Sting",
        "description": "Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 5 (1d6 + 2) piercing damage, and the target must make a DC 11 Constitution saving throw, taking 10 (3d6) poison damage on a failed save, or half as much damage on a successful one. If the poison damage reduces the target to 0 hit points, the target is stable but poisoned for 1 hour, even after regaining hit points, and is paralyzed while poisoned in this way."
      }
    ]
  },
  {
    "index": "giant-weasel",
    "name": "Giant Weasel",
    "size": "Medium",
    "type": "beast",
    "alignment": "unaligned",
    "armor_class": 13,
    "hit_points": 9,
    "hit_dice": "2d8",
    "speed": "40 ft.",
    "challenge_rating": 0.125,
    "proficiency_bonus": 2,
    "xp": 25,
    "dexterity": 16,
    "passive_perception": 13,
    "languages": "",
    "damage_resistances": [],
    "damage_immunities": [],
    "condition_immunities": [],
    "actions": [
      {
        "name": "Bite",
        "description": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 5 (1d4 + 3) piercing damage."
      }
    ]
  },
  {
    "index": "giant-wolf-spider",
    "name": "Giant Wolf Spider",
    "size": "Medium",
    "type": "beast",
    "alignment": "unaligned",
    "armor_class": 13,
    "hit_points": 11,
    "hit_dice": "2d8",
    "speed": "40 ft.",
    "challenge_rating": 0.25,
    "proficiency_bonus": 2,
    "xp": 50,
    "dexterity": 16,
    "passive_perception": 13,
    "languages": "",
    "damage_resistances": [],
    "damage_immunities": [],
    "condition_immunities": [],
    "actions": [
      {
        "name": "Bite",
        "description": "Melee Weapon Attack: +3 to hit, reach 5 ft., one creature. Hit: 4 (1d6 + 1) piercing damage, and the target must make a DC 11 Constitution saving throw, taking 7 (2d6) poison damage on a failed save, or half as much damage on a successful one. If the poison damage reduces the target to 0 hit points, the target is stable but poisoned for 1 hour, even after regaining hit points, and is paralyzed while poisoned in this way."
      }
    ]
  },
  {
    "index": "gibbering-mouther",
    "name": "Gibbering Mouther",
    "size": "Medium",
    "type": "aberration",
    "alignment": "neutral",
    "armor_class": 9,
    "hit_points": 67,
    "hit_dice": "9d8",
    "speed": "10 ft.",
    "challenge_rating": 2,
    "proficiency_bonus": 2,
    "xp": 450,
    "dexterity": 8,
    "passive_perception": 10,
    "languages": "",
    "damage_resistances": [],
    "damage_immunities": [],
    "condition_immunities": [
      "Prone"
    ],
    "actions": [
      {
        "name": "Multiattack",
        "description": "The gibbering mouther makes one bite attack and, if it can, uses its Blinding Spittle."
      },
      {
        "name": "Bites",
        "description": "Melee Weapon Attack: +2 to hit, reach 5 ft., one creature. Hit: 17 (5d6) piercing damage. If the target is Medium or smaller, it must succeed on a DC 10 Strength saving throw or be knocked prone. If the target is killed by this damage, it is absorbed into the mouther."
      },
      {
        "name": "Blinding Spittle",
        "description": "The mouther spits a chemical glob at a point it can see within 15 feet of it. The glob explodes in a blinding flash of light on impact. Each creature within 5 feet of the flash must succeed on a DC 13 Dexterity saving throw or be blinded until the end of the mouther's next turn."
      }
    ]
  },
  {
    "index": "glabrezu",
    "name": "Glabrezu",
    "size": "Large",
    "type": "fiend",
    "alignment": "chaotic evil",
    "armor_class": 17,
    "hit_points": 157,
    "hit_dice": "15d10",
    "speed": "40 ft.",
    "challenge_rating": 9,
    "proficiency_bonus": 4,
    "xp": 5000,
    "dexterity": 15,
    "passive_perception": 13,
    "languages": "Abyssal, telepathy 120 ft.",
    "damage_resistances": [
      "cold",
      "fire",
      "lightning",
      "bludgeoning, piercing, and slashing from nonmagical weapons"
    ],
    "damage_immunities": [
      "poison"
    ],
    "condition_immunities": [
      "Poisoned"
    ],
    "actions": [
      {
        "name": "Multiattack",
        "description": "The glabrezu makes four attacks: two with its pincers and two with its fists. Alternatively, it makes two attacks with its pincers and casts one spell."
      },
      {
        "name": "Pincer",
        "description": "Melee Weapon Attack: +9 to hit, reach 10 ft., one target. Hit: 16 (2d10 + 5) bludgeoning damage. If the target is a Medium or smaller creature, it is grappled (escape DC 15). The glabrezu has two pincers, each of which can grapple only one target."
      },
      {
        "name": "Fist",
        "description": "Melee Weapon Attack: +9 to hit, reach 5 ft., one target. Hit: 7 (2d4 + 2) bludgeoning damage."
      }
    ]
  },
  {
    "index": "gladiator",
    "name": "Gladiator",
    "size": "Medium",
    "type": "humanoid",
    "alignment": "any alignment",
    "armor_class": 16,
    "hit_points": 112,
    "hit_dice": "15d8",
    "speed": "30 ft.",
    "challenge_rating": 5,
    "proficiency_bonus": 3,
    "xp": 1800,
    "dexterity": 15,
    "passive_perception": 11,
    "languages": "any one language (usually Common)",
    "damage_resistances": [],
    "damage_immunities": [],
    "condition_immunities": [],
    "actions": [
      {
        "name": "Multiattack",
        "description": "The gladiator makes three melee attacks or two ranged attacks."
      },
      {
        "name": "Spear",
        "description": "Melee or Ranged Weapon Attack: +7 to hit, reach 5 ft. or range 20/60 ft., one target. Hit: 11 (2d6 + 4) piercing damage, or 13 (2d8 + 4) piercing damage if used with two hands to make a melee attack."
      },
      {
        "name": "Shield Bash",
        "description": "Melee Weapon Attack: +7 to hit, reach 5 ft., one creature. Hit: 9 (2d4 + 4) bludgeoning damage. If the target is a Medium or smaller creature, it must succeed on a DC 15 Strength saving throw or be knocked prone."
      }
    ]
  },
  {
    "index": "gnoll",
    "name": "Gnoll",
    "size": "Medium",
    "type": "humanoid",
    "alignment": "chaotic evil",
    "armor_class": 15,
    "hit_points": 22,
    "hit_dice": "5d8",
    "speed": "30 ft.",
    "challenge_rating": 0.5,
    "proficiency_bonus": 2,
    "xp": 100,
    "dexterity": 12,
    "passive_perception": 10,
    "languages": "Gnoll",
    "damage_resistances": [],
    "damage_immunities": [],
    "condition_immunities": [],
    "actions": [
      {
        "name": "Bite",
        "description": "Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 4 (1d4 + 2) piercing damage."
      },
      {
        "name": "Spear",
        "description": "Melee or Ranged Weapon Attack: +4 to hit, reach 5 ft. or range 20/60 ft., one target. Hit: 5 (1d6 + 2) piercing damage, or 6 (1d8 + 2) piercing damage if used with two hands to make a melee attack."
      },
      {
        "name": "Longbow",
        "description": "Ranged Weapon Attack: +3 to hit, range 150/600 ft., one target. Hit: 5 (1d8 + 1) piercing damage."
      }
    ]
  },
  {
    "index": "goat",
    "name": "Goat",
    "size": "Medium",
    "type": "beast",
    "alignment": "unaligned",
    "armor_class": 10,
    "hit_points": 4,
    "hit_dice": "1d8",
    "speed": "40 ft.",
    "challenge_rating": 0,
    "proficiency_bonus": 2,
    "xp": 10,
    "dexterity": 10,
    "passive_perception": 10,
    "languages": "",
    "damage_resistances": [],
    "damage_immunities": [],
    "condition_immunities": [],
    "actions": [
      {
        "name": "Ram",
        "description": "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 3 (1d4 + 1) bludgeoning damage."
      }
    ]
  },
  {
    "index": "goblin",
    "name": "Goblin",
    "size": "Small",
    "type": "humanoid",
    "alignment": "neutral evil",
    "armor_class": 15,
    "hit_points": 7,
    "hit_dice": "2d6",
    "speed": "30 ft.",
    "challenge_rating": 0.25,
    "proficiency_bonus": 2,
    "xp": 50,
    "dexterity": 14,
    "passive_perception": 9,
    "languages": "Common, Goblin",
    "damage_resistances": [],
    "damage_immunities": [],
    "condition_immunities": [],
    "actions": [
      {
        "name": "Scimitar",
        "description": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6 + 2) slashing damage."
      },
      {
        "name": "Shortbow",
        "description": "Ranged Weapon Attack: +4 to hit, range 80/320 ft., one target. Hit: 5 (1d6 + 2) piercing damage."
      }
    ]
  },
  {
    "index": "gold-dragon-wyrmling",
    "name": "Gold Dragon Wyrmling",
    "size": "Medium",
    "type": "dragon",
    "alignment": "lawful good",
    "armor_class": 17,
    "hit_points": 60,
    "hit_dice": "8d8",
    "speed": "30 ft.",
    "challenge_rating": 3,
    "proficiency_bonus": 2,
    "xp": 700,
    "dexterity": 14,
    "passive_perception": 14,
    "languages": "Draconic",
    "damage_resistances": [],
    "damage_immunities": [
      "fire"
    ],
    "condition_immunities": [],
    "actions": [
      {
        "name": "Bite",
        "description": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 9 (1d10 + 4) piercing damage."
      },
      {
        "name": "Breath Weapons",
        "description": "The dragon uses one of the following breath weapons.\nFire Breath. The dragon exhales fire in a 15-foot cone. Each creature in that area must make a DC 13 Dexterity saving throw, taking 22 (4d10) fire damage on a failed save, or half as much damage on a successful one.\nWeakening Breath. The dragon exhales gas in a 15-foot cone. Each creature in that area must succeed on a DC 13 Strength saving throw or have disadvantage on Strength-based attack rolls, Strength checks, and Strength saving throws for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
      }
    ]
  },
  {
    "index": "gorgon",
    "name": "Gorgon",
    "size": "Large",
    "type": "monstrosity",
    "alignment": "unaligned",
    "armor_class": 19,
    "hit_points": 114,
    "hit_dice": "12d10",
    "speed": "40 ft.",
    "challenge_rating": 5,
    "proficiency_bonus": 3,
    "xp": 1800,
    "dexterity": 11,
    "passive_perception": 14,
    "languages": "",
    "damage_resistances": [],
    "damage_immunities": [],
    "condition_immunities": [
      "Petrified"
    ],
    "actions": [
      {
        "name": "Gore",
        "description": "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 18 (2d12 + 5) piercing damage."
      },
      {
        "name": "Hooves",
        "description": "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 16 (2d10 + 5) bludgeoning damage."
      },
      {
        "name": "Petrifying Breath",
        "description": "The gorgon exhales petrifying gas in a 30-foot cone. Each creature in that area must succeed on a DC 13 Constitution saving throw. On a failed save, a target begins to turn to stone and is restrained. The restrained target must repeat the saving throw at the end of its next turn. On a success, the effect ends on the target. On a failure, the target is petrified until freed by the greater restoration spell or other magic."
      }
    ]
  },
  {
    "index": "gray-ooze",
    "name": "Gray Ooze",
    "size": "Medium",
    "type": "ooze",
    "alignment": "unaligned",
    "armor_class": 8,
    "hit_points": 22,
    "hit_dice": "3d8",
    "speed": "10 ft.",
    "challenge_rating": 0.5,
    "proficiency_bonus": 2,
    "xp": 100,
    "dexterity": 6,
    "passive_perception": 8,
    "languages": "",
    "damage_resistances": [
      "acid",
      "cold",
      "fire"
    ],
    "damage_immunities": [],
    "condition_immunities": [
      "Blinded",
      "Charmed",
      "Deafened",
      "Exhaustion",
      "Frightened",
      "Prone"
    ],
    "actions": [
      {
        "name": "Pseudopod",
        "description": "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 4 (1d6 + 1) bludgeoning damage plus 7 (2d6) acid damage, and if the target is wearing nonmagical metal armor, its armor is partly corroded and takes a permanent and cumulative -1 penalty to the AC it offers. The armor is destroyed if the penalty reduces its AC to 10."
      }
    ]
  },
  {
    "index": "green-dragon-wyrmling",
    "name": "Green Dragon Wyrmling",
    "size": "Medium",
    "type": "dragon",
    "alignment": "lawful evil",
    "armor_class": 17,
    "hit_points": 38,
    "hit_dice": "7d8",
    "speed": "30 ft.",
    "challenge_rating": 2,
    "proficiency_bonus": 2,
    "xp": 450,
    "dexterity": 12,
    "passive_perception": 14,
    "languages": "Draconic",
    "damage_resistances": [],
    "damage_immunities": [
      "poison"
    ],
    "condition_immunities": [
      "Poisoned"
    ],
    "actions": [
      {
        "name": "Bite",
        "description": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 7 (1d10 + 2) piercing damage plus 3 (1d6) poison damage."
      },
      {
        "name": "Poison Breath",
        "description": "The dragon exhales poisonous gas in a 15-foot cone. Each creature in that area must make a DC 11 Constitution saving throw, taking 21 (6d6) poison damage on a failed save, or half as much damage on a successful one."
      }
    ]
  },
  {
    "index": "green-hag",
    "name": "Green Hag",
    "size": "Medium",
    "type": "fey",
    "alignment": "neutral evil",
    "armor_class": 17,
    "hit_points": 82,
    "hit_dice": "11d8",
    "speed": "30 ft.",
    "challenge_rating": 3,
    "proficiency_bonus": 2,
    "xp": 700,
    "dexterity": 12,
    "passive_perception": 14,
    "languages": "Common, Draconic, Sylvan",
    "damage_resistances": [],
    "damage_immunities": [],
    "condition_immunities": [],
    "actions": [
      {
        "name": "Claws",
        "description": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 13 (2d8 + 4) slashing damage."
      },
      {
        "name": "Illusory Appearance",
        "description": "The hag covers herself and anything she is wearing or carrying with a magical illusion that makes her look like another creature of her general size and humanoid shape. The illusion ends if the hag takes a bonus action to end it or if she dies.\nThe changes wrought by this effect fail to hold up to physical inspection. For example, the hag could appear to have smooth skin, but someone touching her would feel her rough flesh. Otherwise, a creature must take an action to visually inspect the illusion and succeed on a DC 20 Intelligence (Investigation) check to discern that the hag is disguised."
      },
      {
        "name": "Invisible Passage",
        "description": "The hag magically turns invisible until she attacks or casts a spell, or until her concentration ends (as if concentrating on a spell). While invisible, she leaves no physical evidence of her passage, so she can be tracked only by magic. Any equipment she wears or carries is invisible with her."
      }
    ]
  },
  {
    "index": "grick",
    "name": "Grick",
    "size": "Medium",
    "type": "monstrosity",
    "alignment": "neutral",
    "armor_class": 14,
    "hit_points": 27,
    "hit_dice": "6d8",
    "speed": "30 ft.",
    "challenge_rating": 2,
    "proficiency_bonus": 2,
    "xp": 450,
    "dexterity": 14,
    "passive_perception": 12,
    "languages": "",
    "damage_resistances": [
      "bludgeoning, piercing, and slashing from nonmagical weapons"
    ],
    "damage_immunities": [],
    "condition_immunities": [],
    "actions": [
      {
        "name": "Multiattack",
        "description": "The grick makes one attack with its tentacles. If that attack hits, the grick can make one beak attack against the same target."
      },
      {
        "name": "Tentacles",
        "description": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 9 (2d6 + 2) slashing damage."
      },
      {
        "name": "Beak",
        "description": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6 + 2) piercing damage."
      }
    ]
  },
  {
    "index": "griffon",
    "name": "Griffon",
    "size": "Large",
    "type": "monstrosity",
    "alignment": "unaligned",
    "armor_class": 12,
    "hit_points": 59,
    "hit_dice": "7d10",
    "speed": "30 ft.",
    "challenge_rating": 2,
    "proficiency_bonus": 2,
    "xp": 450,
    "dexterity": 15,
    "passive_perception": 15,
    "languages": "",
    "damage_resistances": [],
    "damage_immunities": [],
    "condition_immunities": [],
    "actions": [
      {
        "name": "Multiattack",
        "description": "The griffon makes two attacks: one with its beak and one with its claws."
      },
      {
        "name": "Beak",
        "description": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 8 (1d8 + 4) piercing damage."
      },
      {
        "name": "Claws",
        "description": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 11 (2d6 + 4) slashing damage."
      }
    ]
  },
  {
    "index": "grimlock",
    "name": "Grimlock",
    "size": "Medium",
    "type": "humanoid",
    "alignment": "neutral evil",
    "armor_class": 11,
    "hit_points": 11,
    "hit_dice": "2d8",
    "speed": "30 ft.",
    "challenge_rating": 0.25,
    "proficiency_bonus": 2,
    "xp": 50,
    "dexterity": 12,
    "passive_perception": 13,
    "languages": "Undercommon",
    "damage_resistances": [],
    "damage_immunities": [],
    "condition_immunities": [
      "Blinded"
    ],
    "actions": [
      {
        "name": "Spiked Bone Club",
        "description": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 5 (1d4 + 3) bludgeoning damage plus 2 (1d4) piercing damage."
      }
    ]
  },
  {
    "index": "guard",
    "name": "Guard",
    "size": "Medium",
    "type": "humanoid",
    "alignment": "any alignment",
    "armor_class": 16,
    "hit_points": 11,
    "hit_dice": "2d8",
    "speed": "30 ft.",
    "challenge_rating": 0.125,
    "proficiency_bonus": 2,
    "xp": 25,
    "dexterity": 12,
    "passive_perception": 12,
    "languages": "any one language (usually Common)",
    "damage_resistances": [],
    "damage_immunities": [],
    "condition_immunities": [],
    "actions": [
      {
        "name": "Spear",
        "description": "Melee or Ranged Weapon Attack: +3 to hit, reach 5 ft. or range 20/60 ft., one target. Hit: 4 (1d6 + 1) piercing damage or 5 (1d8 + 1) piercing damage if used with two hands to make a melee attack."
      }
    ]
  },
  {
    "index": "guardian-naga",
    "name": "Guardian Naga",
    "size": "Large",
    "type": "monstrosity",
    "alignment": "lawful good",
    "armor_class": 18,
    "hit_points": 127,
    "hit_dice": "15d10",
    "speed": "40 ft.",
    "challenge_rating": 10,
    "proficiency_bonus": 4,
    "xp": 5900,
    "dexterity": 18,
    "passive_perception": 14,
    "languages": "Celestial, Common",
    "damage_resistances": [],
    "damage_immunities": [
      "poison"
    ],
    "condition_immunities": [
      "Charmed",
      "Poisoned"
    ],
    "actions": [
      {
        "name": "Bite",
        "description": "Melee Weapon Attack: +8 to hit, reach 10 ft., one creature. Hit: 8 (1d8 + 4) piercing damage, and the target must make a DC 15 Constitution saving throw, taking 45 (10d8) poison damage on a failed save, or half as much damage on a successful one."
      },
      {
        "name": "Spit Poison",
        "description": "Ranged Weapon Attack: +8 to hit, range 15/30 ft., one creature. Hit: The target must make a DC 15 Constitution saving throw, taking 45 (10d8) poison damage on a failed save, or half as much damage on a successful one."
      }
    ]
  },
  {
    "index": "gynosphinx",
    "name": "Gynosphinx",
    "size": "Large",
    "type": "monstrosity",
    "alignment": "lawful neutral",
    "armor_class": 17,
    "hit_points": 136,
    "hit_dice": "16d10",
    "speed": "40 ft.",
    "challenge_rating": 11,
    "proficiency_bonus": 4,
    "xp": 7200,
    "dexterity": 15,
    "passive_perception": 18,
    "languages": "Common, Sphinx",
    "damage_resistances": [
      "bludgeoning, piercing, and slashing from nonmagical weapons"
    ],
    "damage_immunities": [
      "psychic"
    ],
    "condition_immunities": [
      "Charmed",
      "Frightened"
    ],
    "actions": [
      {
        "name": "Multiattack",
        "description": "The sphinx makes two claw attacks."
      },
      {
        "name": "Claw",
        "description": "Melee Weapon Attack: +9 to hit, reach 5 ft., one target. Hit: 13 (2d8 + 4) slashing damage."
      }
    ]
  },
  {
    "index": "half-red-dragon-veteran",
    "name": "Half-Red Dragon Veteran",
    "size": "Medium",
    "type": "humanoid",
    "alignment": "any alignment",
    "armor_class": 18,
    "hit_points": 65,
    "hit_dice": "10d8",
    "speed": "30 ft.",
    "challenge_rating": 5,
    "proficiency_bonus": 3,
    "xp": 1800,
    "dexterity": 13,
    "passive_perception": 12,
    "languages": "Common, Draconic",
    "damage_resistances": [
      "fire"
    ],
    "damage_immunities": [],
    "condition_immunities": [],
    "actions": [
      {
        "name": "Multiattack",
        "description": "The veteran makes two longsword attacks. If it has a shortsword drawn, it can also make a shortsword attack."
      },
      {
        "name": "Longsword",
        "description": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 7 (1d8 + 3) slashing damage, or 8 (1d10 + 3) slashing damage if used with two hands."
      },
      {
        "name": "Shortsword",
        "description": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 6 (1d6 + 3) piercing damage."
      },
      {
        "name": "Heavy Crossbow",
        "description": "Ranged Weapon Attack: +3 to hit, range 100/400 ft., one target. Hit: 6 (1d10 + 1) piercing damage."
      },
      {
        "name": "Fire Breath",
        "description": "The veteran exhales fire in a 15-foot cone. Each creature in that area must make a DC 15 Dexterity saving throw, taking 24 (7d6) fire damage on a failed save, or half as much damage on a successful one."
      }
    ]
  },
  {
    "index": "harpy",
    "name": "Harpy",
    "size": "Medium",
    "type": "monstrosity",
    "alignment": "chaotic evil",
    "armor_class": 11,
    "hit_points": 38,
    "hit_dice": "7d8",
    "speed": "20 ft.",
    "challenge_rating": 1,
    "proficiency_bonus": 2,
    "xp": 200,
    "dexterity": 13,
    "passive_perception": 10,
    "languages": "Common",
    "damage_resistances": [],
    "damage_immunities": [],
    "condition_immunities": [],
    "actions": [
      {
        "name": "Multiattack",
        "description": "The harpy makes two attacks: one with its claws and one with its club."
      },
      {
        "name": "Claws",
        "description": "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 6 (2d4 + 1) slashing damage."
      },
      {
        "name": "Club",
        "description": "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 3 (1d4 + 1) bludgeoning damage."
      },
      {
        "name": "Luring Song",
        "description": "The harpy sings a magical melody. Every humanoid and giant within 300 ft. of the harpy that can hear the song must succeed on a DC 11 Wisdom saving throw or be charmed until the song ends. The harpy must take a bonus action on its subsequent turns to continue singing. It can stop singing at any time. The song ends if the harpy is incapacitated.\nWhile charmed by the harpy, a target is incapacitated and ignores the songs of other harpies. If the charmed target is more than 5 ft. away from the harpy, the must move on its turn toward the harpy by the most direct route. It doesn't avoid opportunity attacks, but before moving into damaging terrain, such as lava or a pit, and whenever it takes damage from a source other than the harpy, a target can repeat the saving throw. A creature can also repeat the saving throw at the end of each of its turns. If a creature's saving throw is successful, the effect ends on it.\nA target that successfully saves is immune to this harpy's song for the next 24 hours."
      }
    ]
  },
  {
    "index": "hawk",
    "name": "Hawk",
    "size": "Tiny",
    "type": "beast",
    "alignment": "unaligned",
    "armor_class": 13,
    "hit_points": 1,
    "hit_dice": "1d4",
    "speed": "10 ft.",
    "challenge_rating": 0,
    "proficiency_bonus": 2,
    "xp": 10,
    "dexterity": 16,
    "passive_perception": 14,
    "languages": "",
    "damage_resistances": [],
    "damage_immunities": [],
    "condition_immunities": [],
    "actions": [
      {
        "name": "Talons",
        "description": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 1 slashing damage."
      }
    ]
  },
  {
    "index": "hell-hound",
    "name": "Hell Hound",
    "size": "Medium",
    "type": "fiend",
    "alignment": "lawful evil",
    "armor_class": 15,
    "hit_points": 45,
    "hit_dice": "7d8",
    "speed": "50 ft.",
    "challenge_rating": 3,
    "proficiency_bonus": 2,
    "xp": 700,
    "dexterity": 12,
    "passive_perception": 15,
    "languages": "understands Infernal but can't speak it",
    "damage_resistances": [],
    "damage_immunities": [
      "fire"
    ],
    "condition_immunities": [],
    "actions": [
      {
        "name": "Bite",
        "description": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 7 (1d8 + 3) piercing damage plus 7 (2d6) fire damage."
      },
      {
        "name": "Fire Breath",
        "description": "The hound exhales fire in a 15-foot cone. Each creature in that area must make a DC 12 Dexterity saving throw, taking 21 (6d6) fire damage on a failed save, or half as much damage on a successful one."
      }
    ]
  },
  {
    "index": "hezrou",
    "name": "Hezrou",
    "size": "Large",
    "type": "fiend",
    "alignment": "chaotic evil",
    "armor_class": 16,
    "hit_points": 136,
    "hit_dice": "13d10",
    "speed": "30 ft.",
    "challenge_rating": 8,
    "proficiency_bonus": 3,
    "xp": 3900,
    "dexterity": 17,
    "passive_perception": 11,
    "languages": "Abyssal, telepathy 120 ft.",
    "damage_resistances": [
      "cold",
      "fire",
      "lightning",
      "bludgeoning, piercing, and slashing from nonmagical weapons"
    ],
    "damage_immunities": [
      "poison"
    ],
    "condition_immunities": [
      "Poisoned"
    ],
    "actions": [
      {
        "name": "Multiattack",
        "description": "The hezrou makes three attacks: one with its bite and two with its claws."
      },
      {
        "name": "Bite",
        "description": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 15 (2d10 + 4) piercing damage."
      },
      {
        "name": "Claws",
        "description": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 11 (2d6 + 4) slashing damage."
      }
    ]
  },
  {
    "index": "hobgoblin",
    "name": "Hobgoblin",
    "size": "Medium",
    "type": "humanoid",
    "alignment": "lawful evil",
    "armor_class": 18,
    "hit_points": 11,
    "hit_dice": "2d8",
    "speed": "30 ft.",
    "challenge_rating": 0.5,
    "proficiency_bonus": 2,
    "xp": 100,
    "dexterity": 12,
    "passive_perception": 10,
    "languages": "Common, Goblin",
    "damage_resistances": [],
    "damage_immunities": [],
    "condition_immunities": [],
    "actions": [
      {
        "name": "Longsword",
        "description": "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 5 (1d8 + 1) slashing damage, or 6 (1d10 + 1) slashing damage if used with two hands."
      },
      {
        "name": "Longbow",
        "description": "Ranged Weapon Attack: +3 to hit, range 150/600 ft., one target. Hit: 5 (1d8 + 1) piercing damage."
      }
    ]
  },
  {
    "index": "homunculus",
    "name": "Homunculus",
    "size": "Tiny",
    "type": "construct",
    "alignment": "neutral",
    "armor_class": 13,
    "hit_points": 5,
    "hit_dice": "2d4",
    "speed": "20 ft.",
    "challenge_rating": 0,
    "proficiency_bonus": 2,
    "xp": 10,
    "dexterity": 15,
    "passive_perception": 10,
    "languages": "understands the languages of its creator but can't speak",
    "damage_resistances": [],
    "damage_immunities": [
      "poison"
    ],
    "condition_immunities": [
      "Charmed",
      "Poisoned"
    ],
    "actions": [
      {
        "name": "Bite",
        "description": "Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 1 piercing damage, and the target must succeed on a DC 10 Constitution saving throw or be poisoned for 1 minute. If the saving throw fails by 5 or more, the target is instead poisoned for 5 (1d10) minutes and unconscious while poisoned in this way."
      }
    ]
  },
  {
    "index": "horned-devil",
    "name": "Horned Devil",
    "size": "Large",
    "type": "fiend",
    "alignment": "lawful evil",
    "armor_class": 18,
    "hit_points": 178,
    "hit_dice": "17d10",
    "speed": "20 ft.",
    "challenge_rating": 11,
    "proficiency_bonus": 4,
    "xp": 7200,
    "dexterity": 17,
    "passive_perception": 13,
    "languages": "Infernal, telepathy 120 ft.",
    "damage_resistances": [
      "cold",
      "bludgeoning, piercing, and slashing from nonmagical weapons that aren't silvered"
    ],
    "damage_immunities": [
      "fire",
      "poison"
    ],
    "condition_immunities": [
      "Poisoned"
    ],
    "actions": [
      {
        "name": "Multiattack",
        "description": "The devil makes three melee attacks: two with its fork and one with its tail. It can use Hurl Flame in place of any melee attack."
      },
      {
        "name": "Fork",
        "description": "Melee Weapon Attack: +10 to hit, reach 10 ft., one target. Hit: 15 (2d8 + 6) piercing damage."
      },
      {
        "name": "Tail",
        "description": "Melee Weapon Attack: +10 to hit, reach 10 ft., one target. Hit: 10 (1d8 + 6) piercing damage. If the target is a creature other than an undead or a construct, it must succeed on a DC 17 Constitution saving throw or lose 10 (3d6) hit points at the start of each of its turns due to an infernal wound. Each time the devil hits the wounded target with this attack, the damage dealt by the wound increases by 10 (3d6). Any creature can take an action to stanch the wound with a successful DC 12 Wisdom (Medicine) check. The wound also closes if the target receives magical healing."
      },
      {
        "name": "Hurl Flame",
        "description": "Ranged Spell Attack: +7 to hit, range 150 ft., one target. Hit: 14 (4d6) fire damage. If the target is a flammable object that isn't being worn or carried, it also catches fire."
      }
    ]
  },
  {
    "index": "hunter-shark",
    "name": "Hunter Shark",
    "size": "Large",
    "type": "beast",
    "alignment": "unaligned",
    "armor_class": 12,
    "hit_points": 45,
    "hit_dice": "6d10",
    "speed": "30 ft.",
    "challenge_rating": 2,
    "proficiency_bonus": 2,
    "xp": 450,
    "dexterity": 13,
    "passive_perception": 12,
    "languages": "",
    "damage_resistances": [],
    "damage_immunities": [],
    "condition_immunities": [],
    "actions": [
      {
        "name": "Bite",
        "description": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 13 (2d8 + 4) piercing damage."
      }
    ]
  },
  {
    "index": "hydra",
    "name": "Hydra",
    "size": "Huge",
    "type": "monstrosity",
    "alignment": "unaligned",
    "armor_class": 15,
    "hit_points": 172,
    "hit_dice": "15d12",
    "speed": "30 ft.",
    "challenge_rating": 8,
    "proficiency_bonus": 3,
    "xp": 3900,
    "dexterity": 12,
    "passive_perception": 16,
    "languages": "",
    "damage_resistances": [],
    "damage_immunities": [],
    "condition_immunities": [],
    "actions": [
      {
        "name": "Multiattack",
        "description": "The hydra makes as many bite attacks as it has heads."
      },
      {
        "name": "Bite",
        "description": "Melee Weapon Attack: +8 to hit, reach 10 ft., one target. Hit: 10 (1d10 + 5) piercing damage."
      }
    ]
  },
  {
    "index": "hyena",
    "name": "Hyena",
    "size": "Medium",
    "type": "beast",
    "alignment": "unaligned",
    "armor_class": 11,
    "hit_points": 5,
    "hit_dice": "1d8",
    "speed": "50 ft.",
    "challenge_rating": 0,
    "proficiency_bonus": 2,
    "xp": 10,
    "dexterity": 13,
    "passive_perception": 13,
    "languages": "",
    "damage_resistances": [],
    "damage_immunities": [],
    "condition_immunities": [],
    "actions": [
      {
        "name": "Bite",
        "description": "Melee Weapon Attack: +2 to hit, reach 5 ft., one target. Hit: 3 (1d6) piercing damage."
      }
    ]
  },
  {
    "index": "ice-devil",
    "name": "Ice Devil",
    "size": "Large",
    "type": "fiend",
    "alignment": "lawful evil",
    "armor_class": 18,
    "hit_points": 180,
    "hit_dice": "19d10",
    "speed": "40 ft.",
    "challenge_rating": 14,
    "proficiency_bonus": 5,
    "xp": 11500,
    "dexterity": 14,
    "passive_perception": 12,
    "languages": "Infernal, telepathy 120 ft.",
    "damage_resistances": [
      "bludgeoning, piercing, and slashing from nonmagical weapons that aren't silvered"
    ],
    "damage_immunities": [
      "fire",
      "poison"
    ],
    "condition_immunities": [
      "Poisoned"
    ],
    "actions": [
      {
        "name": "Multiattack",
        "description": "The devil makes three attacks: one with its bite, one with its claws, and one with its tail."
      },
      {
        "name": "Bite",
        "description": "Melee Weapon Attack: +10 to hit, reach 5 ft., one target. Hit: 12 (2d6 + 5) piercing damage plus 10 (3d6) cold damage."
      },
      {
        "name": "Claws",
        "description": "Melee Weapon Attack: +10 to hit, reach 5 ft., one target. Hit: 10 (2d4 + 5) slashing damage plus 10 (3d6) cold damage."
      },
      {
        "name": "Tail",
        "description": "Melee Weapon Attack: +10 to hit, reach 10 ft., one target. Hit: 12 (2d6 + 5) bludgeoning damage plus 10 (3d6) cold damage."
      },
      {
        "name": "Wall of Ice",
        "description": "The devil magically forms an opaque wall of ice on a solid surface it can see within 60 feet of it. The wall is 1 foot thick and up to 30 feet long and 10 feet high, or it's a hemispherical dome up to 20 feet in diameter.\nWhen the wall appears, each creature in its space is pushed out of it by the shortest route. The creature chooses which side of the wall to end up on, unless the creature is incapacitated. The creature then makes a DC 17 Dexterity saving throw, taking 35 (10d6) cold damage on a failed save, or half as much damage on a successful one.\nThe wall lasts for 1 minute or until the devil is incapacitated or dies. The wall can be damaged and breached; each 10-foot section has AC 5, 30 hit points, vulnerability to fire damage, and immunity to acid, cold, necrotic, poison, and psychic damage. If a section is destroyed, it leaves behind a sheet of frigid air in the space the wall occupied. Whenever a creature finishes moving through the frigid air on a turn, willingly or otherwise, the creature must make a DC 17 Constitution saving throw, taking 17 (5d6) cold damage on a failed save, or half as much damage on a successful one. The frigid air dissipates when the rest of the wall vanishes."
      }
    ]
  },
  {
    "index": "ice-mephit",
    "name": "Ice Mephit",
    "size": "Small",
    "type": "elemental",
    "alignment": "neutral evil",
    "armor_class": 11,
    "hit_points": 21,
    "hit_dice": "6d6",
    "speed": "30 ft.",
    "challenge_rating": 0.5,
    "proficiency_bonus": 2,
    "xp": 100,
    "dexterity": 13,
    "passive_perception": 12,
    "languages": "Aquan, Auran",
    "damage_resistances": [],
    "damage_immunities": [
      "cold",
      "poison"
    ],
    "condition_immunities": [
      "Poisoned"
    ],
    "actions": [
      {
        "name": "Claws",
        "description": "Melee Weapon Attack: +3 to hit, reach 5 ft., one creature. Hit: 3 (1d4 + 1) slashing damage plus 2 (1d4) cold damage."
      },
      {
        "name": "Frost Breath",
        "description": "The mephit exhales a 15-foot cone of cold air. Each creature in that area must succeed on a DC 10 Dexterity saving throw, taking 5 (2d4) cold damage on a failed save, or half as much damage on a successful one."
      }
    ]
  },
  {
    "index": "imp",
    "name": "Imp",
    "size": "Tiny",
    "type": "fiend",
    "alignment": "lawful evil",
    "armor_class": 13,
    "hit_points": 10,
    "hit_dice": "3d4",
    "speed": "20 ft.",
    "challenge_rating": 1,
    "proficiency_bonus": 2,
    "xp": 200,
    "dexterity": 17,
    "passive_perception": 11,
    "languages": "Infernal, Common",
    "damage_resistances": [
      "cold",
      "bludgeoning, piercing, and slashing from nonmagical weapons that aren't silvered"
    ],
    "damage_immunities": [
      "fire",
      "poison"
    ],
    "condition_immunities": [
      "Poisoned"
    ],
    "actions": [
      {
        "name": "Sting (Bite in Beast Form)",
        "description": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 5 (1d4 + 3) piercing damage, and the target must make on a DC 11 Constitution saving throw, taking 10 (3d6) poison damage on a failed save, or half as much damage on a successful one."
      },
      {
        "name": "Invisibility",
        "description": "The imp magically turns invisible until it attacks, or until its concentration ends (as if concentrating on a spell). Any equipment the imp wears or carries is invisible with it."
      }
    ]
  },
  {
    "index": "invisible-stalker",
    "name": "Invisible Stalker",
    "size": "Medium",
    "type": "elemental",
    "alignment": "neutral",
    "armor_class": 14,
    "hit_points": 104,
    "hit_dice": "16d8",
    "speed": "50 ft.",
    "challenge_rating": 6,
    "proficiency_bonus": 3,
    "xp": 2300,
    "dexterity": 19,
    "passive_perception": 18,
    "languages": "Auran, understands Common but doesn't speak it",
    "damage_resistances": [
      "bludgeoning, piercing, and slashing from nonmagical weapons"
    ],
    "damage_immunities": [
      "poison"
    ],
    "condition_immunities": [
      "Exhaustion",
      "Grappled",
      "Paralyzed",
      "Petrified",
      "Poisoned",
      "Prone",
      "Restrained",
      "Unconscious"
    ],
    "actions": [
      {
        "name": "Multiattack",
        "description": "The stalker makes two slam attacks."
      },
      {
        "name": "Slam",
        "description": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 10 (2d6 + 3) bludgeoning damage."
      }
    ]
  },
  {
    "index": "iron-golem",
    "name": "Iron Golem",
    "size": "Large",
    "type": "construct",
    "alignment": "unaligned",
    "armor_class": 20,
    "hit_points": 210,
    "hit_dice": "20d10",
    "speed": "30 ft.",
    "challenge_rating": 16,
    "proficiency_bonus": 5,
    "xp": 15000,
    "dexterity": 9,
    "passive_perception": 10,
    "languages": "understands the languages of its creator but can't speak",
    "damage_resistances": [],
    "damage_immunities": [
      "fire",
      "poison",
      "psychic",
      "bludgeoning, piercing, and slashing from nonmagical weapons that aren't adamantine"
    ],
    "condition_immunities": [
      "Charmed",
      "Exhaustion",
      "Frightened",
      "Paralyzed",
      "Petrified",
      "Poisoned"
    ],
    "actions": [
      {
        "name": "Multiattack",
        "description": "The golem makes two melee attacks."
      },
      {
        "name": "Slam",
        "description": "Melee Weapon Attack: +13 to hit, reach 5 ft., one target. Hit: 20 (3d8 + 7) bludgeoning damage."
      },
      {
        "name": "Sword",
        "description": "Melee Weapon Attack: +13 to hit, reach 10 ft., one target. Hit: 23 (3d10 + 7) slashing damage."
      },
      {
        "name": "Poison Breath",
        "description": "The golem exhales poisonous gas in a 15-foot cone. Each creature in that area must make a DC 19 Constitution saving throw, taking 45 (10d8) poison damage on a failed save, or half as much damage on a successful one."
      }
    ]
  },
  {
    "index": "jackal",
    "name": "Jackal",
    "size": "Small",
    "type": "beast",
    "alignment": "unaligned",
    "armor_class": 12,
    "hit_points": 3,
    "hit_dice": "1d6",
    "speed": "40 ft.",
    "challenge_rating": 0,
    "proficiency_bonus": 2,
    "xp": 10,
    "dexterity": 15,
    "passive_perception": 13,
    "languages": "",
    "damage_resistances": [],
    "damage_immunities": [],
    "condition_immunities": [],
    "actions": [
      {
        "name": "Bite",
        "description": "Melee Weapon Attack: +1 to hit, reach 5 ft., one target. Hit: 1 (1d4 - 1) piercing damage."
      }
    ]
  },
  {
    "index": "killer-whale",
    "name": "Killer Whale",
    "size": "Huge",
    "type": "beast",
    "alignment": "unaligned",
    "armor_class": 12,
    "hit_points": 90,
    "hit_dice": "12d12",
    "speed": "30 ft.",
    "challenge_rating": 3,
    "proficiency_bonus": 2,
    "xp": 700,
    "dexterity": 10,
    "passive_perception": 13,
    "languages": "",
    "damage_resistances": [],
    "damage_immunities": [],
    "condition_immunities": [],
    "actions": [
      {
        "name": "Bite",
        "description": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 21 (5d6 + 4) piercing damage."
      }
    ]
  },
  {
    "index": "knight",
    "name": "Knight",
    "size": "Medium",
    "type": "humanoid",
    "alignment": "any alignment",
    "armor_class": 18,
    "hit_points": 52,
    "hit_dice": "8d8",
    "speed": "30 ft.",
    "challenge_rating": 3,
    "proficiency_bonus": 2,
    "xp": 700,
    "dexterity": 11,
    "passive_perception": 10,
    "languages": "any one language (usually Common)",
    "damage_resistances": [],
    "damage_immunities": [],
    "condition_immunities": [],
    "actions": [
      {
        "name": "Multiattack",
        "description": "The knight makes two melee attacks."
      },
      {
        "name": "Greatsword",
        "description": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 10 (2d6 + 3) slashing damage."
      },
      {
        "name": "Heavy Crossbow",
        "description": "Ranged Weapon Attack: +2 to hit, range 100/400 ft., one target. Hit: 5 (1d10) piercing damage."
      },
      {
        "name": "Leadership",
        "description": "For 1 minute, the knight can utter a special command or warning whenever a nonhostile creature that it can see within 30 ft. of it makes an attack roll or a saving throw. The creature can add a d4 to its roll provided it can hear and understand the knight. A creature can benefit from only one Leadership die at a time. This effect ends if the knight is incapacitated."
      }
    ]
  },
  {
    "index": "kobold",
    "name": "Kobold",
    "size": "Small",
    "type": "humanoid",
    "alignment": "lawful evil",
    "armor_class": 12,
    "hit_points": 5,
    "hit_dice": "2d6",
    "speed": "30 ft.",
    "challenge_rating": 0.125,
    "proficiency_bonus": 2,
    "xp": 25,
    "dexterity": 15,
    "passive_perception": 8,
    "languages": "Common, Draconic",
    "damage_resistances": [],
    "damage_immunities": [],
    "condition_immunities": [],
    "actions": [
      {
        "name": "Dagger",
        "description": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 4 (1d4 + 2) piercing damage."
      },
      {
        "name": "Sling",
        "description": "Ranged Weapon Attack: +4 to hit, range 30/120 ft., one target. Hit: 4 (1d4 + 2) bludgeoning damage."
      }
    ]
  },
  {
    "index": "kraken",
    "name": "Kraken",
    "size": "Gargantuan",
    "type": "monstrosity",
    "alignment": "chaotic evil",
    "armor_class": 18,
    "hit_points": 472,
    "hit_dice": "27d20",
    "speed": "20 ft.",
    "challenge_rating": 23,
    "proficiency_bonus": 7,
    "xp": 50000,
    "dexterity": 11,
    "passive_perception": 14,
    "languages": "understands Abyssal, Celestial, Infernal, and Primordial but can't speak, telepathy 120 ft.",
    "damage_resistances": [],
    "damage_immunities": [
      "lightning",
      "bludgeoning, piercing, and slashing from nonmagical weapons"
    ],
    "condition_immunities": [
      "Frightened",
      "Paralyzed"
    ],
    "actions": [
      {
        "name": "Multiattack",
        "description": "The kraken makes three tentacle attacks, each of which it can replace with one use of Fling."
      },
      {
        "name": "Bite",
        "description": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 23 (3d8 + 10) piercing damage. If the target is a Large or smaller creature grappled by the kraken, that creature is swallowed, and the grapple ends. While swallowed, the creature is blinded and restrained, it has total cover against attacks and other effects outside the kraken, and it takes 42 (12d6) acid damage at the start of each of the kraken's turns. If the kraken takes 50 damage or more on a single turn from a creature inside it, the kraken must succeed on a DC 25 Constitution saving throw at the end of that turn or regurgitate all swallowed creatures, which fall prone in a space within 10 feet of the kraken. If the kraken dies, a swallowed creature is no longer restrained by it and can escape from the corpse using 15 feet of movement, exiting prone."
      },
      {
        "name": "Tentacle",
        "description": "Melee Weapon Attack: +7 to hit, reach 30 ft., one target. Hit: 20 (3d6 + 10) bludgeoning damage, and the target is grappled (escape DC 18). Until this grapple ends, the target is restrained. The kraken has ten tentacles, each of which can grapple one target."
      },
      {
        "name": "Fling",
        "description": "One Large or smaller object held or creature grappled by the kraken is thrown up to 60 feet in a random direction and knocked prone. If a thrown target strikes a solid surface, the target takes 3 (1d6) bludgeoning damage for every 10 feet it was thrown. If the target is thrown at another creature, that creature must succeed on a DC 18 Dexterity saving throw or take the same damage and be knocked prone."
      },
      {
        "name": "Lightning Storm",
        "description": "The kraken magically creates three bolts of lightning, each of which can strike a target the kraken can see within 120 feet of it. A target must make a DC 23 Dexterity saving throw, taking 22 (4d10) lightning damage on a failed save, or half as much damage on a successful one."
      }
    ]
  },
  {
    "index": "lamia",
    "name": "Lamia",
    "size": "Large",
    "type": "monstrosity",
    "alignment": "chaotic evil",
    "armor_class": 13,
    "hit_points": 97,
    "hit_dice": "13d10",
    "speed": "30 ft.",
    "challenge_rating": 4,
    "proficiency_bonus": 2,
    "xp": 1100,
    "dexterity": 13,
    "passive_perception": 12,
    "languages": "Abyssal, Common",
    "damage_resistances": [],
    "damage_immunities": [],
    "condition_immunities": [],
    "actions": [
      {
        "name": "Multiattack",
        "description": "The lamia makes two attacks: one with its claws and one with its dagger or Intoxicating Touch."
      },
      {
        "name": "Claws",
        "description": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 14 (2d10 + 3) slashing damage."
      },
      {
        "name": "Dagger",
        "description": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 5 (1d4 + 3) piercing damage."
      },
      {
        "name": "Intoxicating Touch",
        "description": "Melee Spell Attack: +5 to hit, reach 5 ft., one creature. Hit: The target is magically cursed for 1 hour. Until the curse ends, the target has disadvantage on Wisdom saving throws and all ability checks."
      }
    ]
  },
  {
    "index": "lemure",
    "name": "Lemure",
    "size": "Medium",
    "type": "fiend",
    "alignment": "lawful evil",
    "armor_class": 7,
    "hit_points": 13,
    "hit_dice": "3d8",
    "speed": "15 ft.",
    "challenge_rating": 0,
    "proficiency_bonus": 2,
    "xp": 10,
    "dexterity": 5,
    "passive_perception": 10,
    "languages": "understands infernal but can't speak",
    "damage_resistances": [
      "cold"
    ],
    "damage_immunities": [
      "fire",
      "poison"
    ],
    "condition_immunities": [
      "Charmed",
      "Frightened",
      "Poisoned"
    ],
    "actions": [
      {
        "name": "Fist",
        "description": "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 2 (1d4) bludgeoning damage."
      }
    ]
  },
  {
    "index": "lich",
    "name": "Lich",
    "size": "Medium",
    "type": "undead",
    "alignment": "any evil alignment",
    "armor_class": 17,
    "hit_points": 135,
    "hit_dice": "18d8",
    "speed": "30 ft.",
    "challenge_rating": 21,
    "proficiency_bonus": 7,
    "xp": 33000,
    "dexterity": 16,
    "passive_perception": 19,
    "languages": "Common plus up to five other languages",
    "damage_resistances": [
      "cold",
      "lightning",
      "necrotic"
    ],
    "damage_immunities": [
      "poison",
      "bludgeoning, piercing, and slashing from nonmagical weapons"
    ],
    "condition_immunities": [
      "Charmed",
      "Exhaustion",
      "Frightened",
      "Paralyzed",
      "Poisoned"
    ],
    "actions": [
      {
        "name": "Paralyzing Touch",
        "description": "Melee Spell Attack: +12 to hit, reach 5 ft., one creature. Hit: 10 (3d6) cold damage. The target must succeed on a DC 18 Constitution saving throw or be paralyzed for 1 minute. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
      }
    ]
  },
  {
    "index": "lion",
    "name": "Lion",
    "size": "Large",
    "type": "beast",
    "alignment": "unaligned",
    "armor_class": 12,
    "hit_points": 26,
    "hit_dice": "4d10",
    "speed": "50 ft.",
    "challenge_rating": 1,
    "proficiency_bonus": 2,
    "xp": 200,
    "dexterity": 15,
    "passive_perception": 13,
    "languages": "",
    "damage_resistances": [],
    "damage_immunities": [],
    "condition_immunities": [],
    "actions": [
      {
        "name": "Bite",
        "description": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 7 (1d8 + 3) piercing damage."
      },
      {
        "name": "Claw",
        "description": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 6 (1d6 + 3) slashing damage."
      }
    ]
  },
  {
    "index": "lizard",
    "name": "Lizard",
    "size": "Tiny",
    "type": "beast",
    "alignment": "unaligned",
    "armor_class": 10,
    "hit_points": 2,
    "hit_dice": "1d4",
    "speed": "20 ft.",
    "challenge_rating": 0,
    "proficiency_bonus": 2,
    "xp": 10,
    "dexterity": 11,
    "passive_perception": 9,
    "languages": "",
    "damage_resistances": [],
    "damage_immunities": [],
    "condition_immunities": [],
    "actions": [
      {
        "name": "Bite",
        "description": "Melee Weapon Attack: +0 to hit, reach 5 ft., one target. Hit: 1 piercing damage."
      }
    ]
  },
  {
    "index": "lizardfolk",
    "name": "Lizardfolk",
    "size": "Medium",
    "type": "humanoid",
    "alignment": "neutral",
    "armor_class": 13,
    "hit_points": 22,
    "hit_dice": "4d8",
    "speed": "30 ft.",
    "challenge_rating": 0.5,
    "proficiency_bonus": 2,
    "xp": 100,
    "dexterity": 10,
    "passive_perception": 13,
    "languages": "Draconic",
    "damage_resistances": [],
    "damage_immunities": [],
    "condition_immunities": [],
    "actions": [
      {
        "name": "Multiattack",
        "description": "The lizardfolk makes two melee attacks, each one with a different weapon."
      },
      {
        "name": "Bite",
        "description": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6 + 2) piercing damage."
      },
      {
        "name": "Heavy Club",
        "description": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6 + 2) bludgeoning damage."
      },
      {
        "name": "Javelin",
        "description": "Melee or Ranged Weapon Attack: +4 to hit, reach 5 ft. or range 30/120 ft., one target. Hit: 5 (1d6 + 2) piercing damage."
      },
      {
        "name": "Spiked Shield",
        "description": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6 + 2) piercing damage."
      }
    ]
  },
  {
    "index": "mage",
    "name": "Mage",
    "size": "Medium",
    "type": "humanoid",
    "alignment": "any alignment",
    "armor_class": 12,
    "hit_points": 40,
    "hit_dice": "9d8",
    "speed": "30 ft.",
    "challenge_rating": 6,
    "proficiency_bonus": 3,
    "xp": 2300,
    "dexterity": 14,
    "passive_perception": 11,
    "languages": "any four languages",
    "damage_resistances": [],
    "damage_immunities": [],
    "condition_immunities": [],
    "actions": [
      {
        "name": "Dagger",
        "description": "Melee or Ranged Weapon Attack: +5 to hit, reach 5 ft. or range 20/60 ft., one target. Hit: 4 (1d4 + 2) piercing damage."
      }
    ]
  },
  {
    "index": "magma-mephit",
    "name": "Magma Mephit",
    "size": "Small",
    "type": "elemental",
    "alignment": "neutral evil",
    "armor_class": 11,
    "hit_points": 22,
    "hit_dice": "5d6",
    "speed": "30 ft.",
    "challenge_rating": 0.5,
    "proficiency_bonus": 2,
    "xp": 100,
    "dexterity": 12,
    "passive_perception": 10,
    "languages": "Ignan, Terran",
    "damage_resistances": [],
    "damage_immunities": [
      "fire",
      "poison"
    ],
    "condition_immunities": [
      "Poisoned"
    ],
    "actions": [
      {
        "name": "Claws",
        "description": "Melee Weapon Attack: +3 to hit, reach 5 ft., one creature. Hit: 3 (1d4 + 1) slashing damage plus 2 (1d4) fire damage."
      },
      {
        "name": "Fire Breath",
        "description": "The mephit exhales a 15-foot cone of fire. Each creature in that area must make a DC 11 Dexterity saving throw, taking 7 (2d6) fire damage on a failed save, or half as much damage on a successful one."
      }
    ]
  },
  {
    "index": "magmin",
    "name": "Magmin",
    "size": "Small",
    "type": "elemental",
    "alignment": "chaotic neutral",
    "armor_class": 14,
    "hit_points": 9,
    "hit_dice": "2d6",
    "speed": "30 ft.",
    "challenge_rating": 0.5,
    "proficiency_bonus": 2,
    "xp": 100,
    "dexterity": 15,
    "passive_perception": 10,
    "languages": "Ignan",
    "damage_resistances": [
      "bludgeoning, piercing, and slashing from nonmagical weapons"
    ],
    "damage_immunities": [
      "fire"
    ],
    "condition_immunities": [],
    "actions": [
      {
        "name": "Touch",
        "description": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 7 (2d6) fire damage. If the target is a creature or a flammable object, it ignites. Until a target takes an action to douse the fire, the target takes 3 (1d6) fire damage at the end of each of its turns."
      }
    ]
  },
  {
    "index": "mammoth",
    "name": "Mammoth",
    "size": "Huge",
    "type": "beast",
    "alignment": "unaligned",
    "armor_class": 13,
    "hit_points": 126,
    "hit_dice": "11d12",
    "speed": "40 ft.",
    "challenge_rating": 6,
    "proficiency_bonus": 3,
    "xp": 2300,
    "dexterity": 9,
    "passive_perception": 10,
    "languages": "",
    "damage_resistances": [],
    "damage_immunities": [],
    "condition_immunities": [],
    "actions": [
      {
        "name": "Gore",
        "description": "Melee Weapon Attack: +10 to hit, reach 10 ft., one target. Hit: 25 (4d8 + 7) piercing damage."
      },
      {
        "name": "Stomp",
        "description": "Melee Weapon Attack: +10 to hit, reach 5 ft., one prone creature. Hit: 29 (4d10 + 7) bludgeoning damage."
      }
    ]
  },
  {
    "index": "manticore",
    "name": "Manticore",
    "size": "Large",
    "type": "monstrosity",
    "alignment": "lawful evil",
    "armor_class": 14,
    "hit_points": 68,
    "hit_dice": "8d10",
    "speed": "30 ft.",
    "challenge_rating": 3,
    "proficiency_bonus": 2,
    "xp": 700,
    "dexterity": 16,
    "passive_perception": 11,
    "languages": "",
    "damage_resistances": [],
    "damage_immunities": [],
    "condition_immunities": [],
    "actions": [
      {
        "name": "Multiattack",
        "description": "The manticore makes three attacks: one with its bite and two with its claws or three with its tail spikes."
      },
      {
        "name": "Bite",
        "description": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 7 (1d8 + 3) piercing damage."
      },
      {
        "name": "Claw",
        "description": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 6 (1d6 + 3) slashing damage."
      },
      {
        "name": "Tail Spike",
        "description": "Ranged Weapon Attack: +5 to hit, range 100/200 ft., one target. Hit: 7 (1d8 + 3) piercing damage."
      }
    ]
  },
  {
    "index": "marilith",
    "name": "Marilith",
    "size": "Large",
    "type": "fiend",
    "alignment": "chaotic evil",
    "armor_class": 18,
    "hit_points": 189,
    "hit_dice": "18d10",
    "speed": "40 ft.",
    "challenge_rating": 16,
    "proficiency_bonus": 5,
    "xp": 15000,
    "dexterity": 20,
    "passive_perception": 13,
    "languages": "Abyssal, telepathy 120 ft.",
    "damage_resistances": [
      "cold",
      "fire",
      "lightning",
      "bludgeoning, piercing, and slashing from nonmagical weapons"
    ],
    "damage_immunities": [
      "poison"
    ],
    "condition_immunities": [
      "Poisoned"
    ],
    "actions": [
      {
        "name": "Multiattack",
        "description": "The marilith can make seven attacks: six with its longswords and one with its tail."
      },
      {
        "name": "Longsword",
        "description": "Melee Weapon Attack: +9 to hit, reach 5 ft., one target. Hit: 13 (2d8 + 4) slashing damage."
      },
      {
        "name": "Tail",
        "description": "Melee Weapon Attack: +9 to hit, reach 10 ft., one creature. Hit: 15 (2d10 + 4) bludgeoning damage. If the target is Medium or smaller, it is grappled (escape DC 19). Until this grapple ends, the target is restrained, the marilith can automatically hit the target with its tail, and the marilith can't make tail attacks against other targets."
      },
      {
        "name": "Teleport",
        "description": "The marilith magically teleports, along with any equipment it is wearing or carrying, up to 120 feet to an unoccupied space it can see."
      }
    ]
  },
  {
    "index": "mastiff",
    "name": "Mastiff",
    "size": "Medium",
    "type": "beast",
    "alignment": "unaligned",
    "armor_class": 12,
    "hit_points": 5,
    "hit_dice": "1d8",
    "speed": "40 ft.",
    "challenge_rating": 0.125,
    "proficiency_bonus": 2,
    "xp": 25,
    "dexterity": 14,
    "passive_perception": 13,
    "languages": "",
    "damage_resistances": [],
    "damage_immunities": [],
    "condition_immunities": [],
    "actions": [
      {
        "name": "Bite",
        "description": "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 4 (1d6 + 1) piercing damage. If the target is a creature, it must succeed on a DC 11 Strength saving throw or be knocked prone."
      }
    ]
  },
  {
    "index": "medusa",
    "name": "Medusa",
    "size": "Medium",
    "type": "monstrosity",
    "alignment": "lawful evil",
    "armor_class": 15,
    "hit_points": 127,
    "hit_dice": "17d8",
    "speed": "30 ft.",
    "challenge_rating": 6,
    "proficiency_bonus": 3,
    "xp": 2300,
    "dexterity": 15,
    "passive_perception": 14,
    "languages": "Common",
    "damage_resistances": [],
    "damage_immunities": [],
    "condition_immunities": [],
    "actions": [
      {
        "name": "Multiattack",
        "description": "The medusa makes either three melee attacks--one with its snake hair and two with its shortsword--or two ranged attacks with its longbow."
      },
      {
        "name": "Snake Hair",
        "description": "Melee Weapon Attack: +5 to hit, reach 5 ft., one creature. Hit: 4 (1d4 + 2) piercing damage plus 14 (4d6) poison damage."
      },
      {
        "name": "Shortsword",
        "description": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 5 (1d6 + 2) piercing damage."
      },
      {
        "name": "Longbow",
        "description": "Ranged Weapon Attack: +5 to hit, range 150/600 ft., one target. Hit: 6 (1d8 + 2) piercing damage plus 7 (2d6) poison damage."
      }
    ]
  },
  {
    "index": "merfolk",
    "name": "Merfolk",
    "size": "Medium",
    "type": "humanoid",
    "alignment": "neutral",
    "armor_class": 11,
    "hit_points": 11,
    "hit_dice": "2d8",
    "speed": "10 ft.",
    "challenge_rating": 0.125,
    "proficiency_bonus": 2,
    "xp": 25,
    "dexterity": 13,
    "passive_perception": 12,
    "languages": "Aquan, Common",
    "damage_resistances": [],
    "damage_immunities": [],
    "condition_immunities": [],
    "actions": [
      {
        "name": "Spear",
        "description": "Melee or Ranged Weapon Attack: +2 to hit, reach 5 ft. or range 20/60 ft., one target. Hit: 3 (1d6) piercing damage, or 4 (1d8) piercing damage if used with two hands to make a melee attack."
      }
    ]
  },
  {
    "index": "merrow",
    "name": "Merrow",
    "size": "Large",
    "type": "monstrosity",
    "alignment": "chaotic evil",
    "armor_class": 13,
    "hit_points": 45,
    "hit_dice": "6d10",
    "speed": "10 ft.",
    "challenge_rating": 2,
    "proficiency_bonus": 2,
    "xp": 450,
    "dexterity": 10,
    "passive_perception": 10,
    "languages": "Abyssal, Aquan",
    "damage_resistances": [],
    "damage_immunities": [],
    "condition_immunities": [],
    "actions": [
      {
        "name": "Multiattack",
        "description": "The merrow makes two attacks: one with its bite and one with its claws or harpoon."
      },
      {
        "name": "Bite",
        "description": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 8 (1d8 + 4) piercing damage."
      },
      {
        "name": "Claws",
        "description": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 9 (2d4 + 4) slashing damage."
      },
      {
        "name": "Harpoon",
        "description": "Melee or Ranged Weapon Attack: +6 to hit, reach 5 ft. or range 20/60 ft., one target. Hit: 11 (2d6 + 4) piercing damage. If the target is a Huge or smaller creature, it must succeed on a Strength contest against the merrow or be pulled up to 20 feet toward the merrow."
      }
    ]
  },
  {
    "index": "mimic",
    "name": "Mimic",
    "size": "Medium",
    "type": "monstrosity",
    "alignment": "neutral",
    "armor_class": 12,
    "hit_points": 58,
    "hit_dice": "9d8",
    "speed": "15 ft.",
    "challenge_rating": 2,
    "proficiency_bonus": 2,
    "xp": 450,
    "dexterity": 12,
    "passive_perception": 11,
    "languages": "",
    "damage_resistances": [],
    "damage_immunities": [
      "acid"
    ],
    "condition_immunities": [
      "Prone"
    ],
    "actions": [
      {
        "name": "Pseudopod",
        "description": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 7 (1d8 + 3) bludgeoning damage. If the mimic is in object form, the target is subjected to its Adhesive trait."
      },
      {
        "name": "Bite",
        "description": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 7 (1d8 + 3) piercing damage plus 4 (1d8) acid damage."
      }
    ]
  },
  {
    "index": "minotaur",
    "name": "Minotaur",
    "size": "Large",
    "type": "monstrosity",
    "alignment": "chaotic evil",
    "armor_class": 14,
    "hit_points": 76,
    "hit_dice": "9d10",
    "speed": "40 ft.",
    "challenge_rating": 3,
    "proficiency_bonus": 2,
    "xp": 700,
    "dexterity": 11,
    "passive_perception": 17,
    "languages": "Abyssal",
    "damage_resistances": [],
    "damage_immunities": [],
    "condition_immunities": [],
    "actions": [
      {
        "name": "Greataxe",
        "description": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 17 (2d12 + 4) slashing damage."
      },
      {
        "name": "Gore",
        "description": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 13 (2d8 + 4) piercing damage."
      }
    ]
  },
  {
    "index": "minotaur-skeleton",
    "name": "Minotaur Skeleton",
    "size": "Large",
    "type": "undead",
    "alignment": "lawful evil",
    "armor_class": 12,
    "hit_points": 67,
    "hit_dice": "9d10",
    "speed": "40 ft.",
    "challenge_rating": 2,
    "proficiency_bonus": 2,
    "xp": 450,
    "dexterity": 11,
    "passive_perception": 9,
    "languages": "understands Abyssal but can't speak",
    "damage_resistances": [],
    "damage_immunities": [
      "poison"
    ],
    "condition_immunities": [
      "Exhaustion",
      "Poisoned"
    ],
    "actions": [
      {
        "name": "Greataxe",
        "description": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 17 (2d12 + 4) slashing damage."
      },
      {
        "name": "Gore",
        "description": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 13 (2d8 + 4) piercing damage."
      }
    ]
  },
  {
    "index": "mule",
    "name": "Mule",
    "size": "Medium",
    "type": "beast",
    "alignment": "unaligned",
    "armor_class": 10,
    "hit_points": 11,
    "hit_dice": "2d8",
    "speed": "40 ft.",
    "challenge_rating": 0.125,
    "proficiency_bonus": 2,
    "xp": 25,
    "dexterity": 10,
    "passive_perception": 10,
    "languages": "",
    "damage_resistances": [],
    "damage_immunities": [],
    "condition_immunities": [],
    "actions": [
      {
        "name": "Hooves",
        "description": "Melee Weapon Attack: +2 to hit, reach 5 ft., one target. Hit: 4 (1d4 + 2) bludgeoning damage."
      }
    ]
  },
  {
    "index": "mummy",
    "name": "Mummy",
    "size": "Medium",
    "type": "undead",
    "alignment": "lawful evil",
    "armor_class": 11,
    "hit_points": 58,
    "hit_dice": "9d8",
    "speed": "20 ft.",
    "challenge_rating": 3,
    "proficiency_bonus": 2,
    "xp": 700,
    "dexterity": 8,
    "passive_perception": 10,
    "languages": "the languages it knew in life",
    "damage_resistances": [
      "bludgeoning, piercing, and slashing from nonmagical weapons"
    ],
    "damage_immunities": [
      "necrotic",
      "poison"
    ],
    "condition_immunities": [
      "Charmed",
      "Exhaustion",
      "Frightened",
      "Paralyzed",
      "Poisoned"
    ],
    "actions": [
      {
        "name": "Multiattack",
        "description": "The mummy can use its Dreadful Glare and makes one attack with its rotting fist."
      },
      {
        "name": "Rotting Fist",
        "description": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 10 (2d6 + 3) bludgeoning damage plus 10 (3d6) necrotic damage. If the target is a creature, it must succeed on a DC 12 Constitution saving throw or be cursed with mummy rot. The cursed target can't regain hit points, and its hit point maximum decreases by 10 (3d6) for every 24 hours that elapse. If the curse reduces the target's hit point maximum to 0, the target dies, and its body turns to dust. The curse lasts until removed by the remove curse spell or other magic."
      },
      {
        "name": "Dreadful Glare",
        "description": "The mummy targets one creature it can see within 60 ft. of it. If the target can see the mummy, it must succeed on a DC 11 Wisdom saving throw against this magic or become frightened until the end of the mummy's next turn. If the target fails the saving throw by 5 or more, it is also paralyzed for the same duration. A target that succeeds on the saving throw is immune to the Dreadful Glare of all mummies (but not mummy lords) for the next 24 hours."
      }
    ]
  },
  {
    "index": "mummy-lord",
    "name": "Mummy Lord",
    "size": "Medium",
    "type": "undead",
    "alignment": "lawful evil",
    "armor_class": 17,
    "hit_points": 97,
    "hit_dice": "13d8",
    "speed": "20 ft.",
    "challenge_rating": 15,
    "proficiency_bonus": 5,
    "xp": 13000,
    "dexterity": 10,
    "passive_perception": 14,
    "languages": "the languages it knew in life",
    "damage_resistances": [],
    "damage_immunities": [
      "necrotic",
      "poison",
      "bludgeoning, piercing, and slashing from nonmagical weapons"
    ],
    "condition_immunities": [
      "Charmed",
      "Exhaustion",
      "Frightened",
      "Paralyzed",
      "Poisoned"
    ],
    "actions": [
      {
        "name": "Multiattack",
        "description": "The mummy can use its Dreadful Glare and makes one attack with its rotting fist."
      },
      {
        "name": "Rotting Fist",
        "description": "Melee Weapon Attack: +9 to hit, reach 5 ft., one target. Hit: 14 (3d6 + 4) bludgeoning damage plus 21 (6d6) necrotic damage. If the target is a creature, it must succeed on a DC 16 Constitution saving throw or be cursed with mummy rot. The cursed target can't regain hit points, and its hit point maximum decreases by 10 (3d6) for every 24 hours that elapse. If the curse reduces the target's hit point maximum to 0, the target dies, and its body turns to dust. The curse lasts until removed by the remove curse spell or other magic."
      },
      {
        "name": "Dreadful Glare",
        "description": "The mummy lord targets one creature it can see within 60 feet of it. If the target can see the mummy lord, it must succeed on a DC 16 Wisdom saving throw against this magic or become frightened until the end of the mummy's next turn. If the target fails the saving throw by 5 or more, it is also paralyzed for the same duration. A target that succeeds on the saving throw is immune to the Dreadful Glare of all mummies and mummy lords for the next 24 hours."
      }
    ]
  },
  {
    "index": "nalfeshnee",
    "name": "Nalfeshnee",
    "size": "Large",
    "type": "fiend",
    "alignment": "chaotic evil",
    "armor_class": 18,
    "hit_points": 184,
    "hit_dice": "16d10",
    "speed": "20 ft.",
    "challenge_rating": 13,
    "proficiency_bonus": 5,
    "xp": 10000,
    "dexterity": 10,
    "passive_perception": 11,
    "languages": "Abyssal, telepathy 120 ft.",
    "damage_resistances": [
      "cold",
      "fire",
      "lightning",
      "bludgeoning, piercing, and slashing from nonmagical weapons"
    ],
    "damage_immunities": [
      "poison"
    ],
    "condition_immunities": [
      "Poisoned"
    ],
    "actions": [
      {
        "name": "Multiattack",
        "description": "The nalfeshnee uses Horror Nimbus if it can. It then makes three attacks: one with its bite and two with its claws."
      },
      {
        "name": "Bite",
        "description": "Melee Weapon Attack: +10 to hit, reach 5 ft., one target. Hit: 32 (5d10 + 5) piercing damage."
      },
      {
        "name": "Claw",
        "description": "Melee Weapon Attack: +10 to hit, reach 10 ft., one target. Hit: 15 (3d6 + 5) slashing damage."
      },
      {
        "name": "Horror Nimbus",
        "description": "The nalfeshnee magically emits scintillating, multicolored light. Each creature within 15 feet of the nalfeshnee that can see the light must succeed on a DC 15 Wisdom saving throw or be frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the nalfeshnee's Horror Nimbus for the next 24 hours."
      },
      {
        "name": "Teleport",
        "description": "The nalfeshnee magically teleports, along with any equipment it is wearing or carrying, up to 120 feet to an unoccupied space it can see."
      }
    ]
  },
  {
    "index": "night-hag",
    "name": "Night Hag",
    "size": "Medium",
    "type": "fiend",
    "alignment": "neutral evil",
    "armor_class": 17,
    "hit_points": 112,
    "hit_dice": "15d8",
    "speed": "30 ft.",
    "challenge_rating": 5,
    "proficiency_bonus": 3,
    "xp": 1800,
    "dexterity": 15,
    "passive_perception": 16,
    "languages": "Abyssal, Common, Infernal, Primordial",
    "damage_resistances": [
      "cold",
      "fire",
      "bludgeoning, piercing, and slashing from nonmagical weapons that aren't silvered"
    ],
    "damage_immunities": [],
    "condition_immunities": [
      "Charmed"
    ],
    "actions": [
      {
        "name": "Claws (Hag Form Only)",
        "description": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 13 (2d8 + 4) slashing damage."
      },
      {
        "name": "Change Shape",
        "description": "The hag magically polymorphs into a Small or Medium female humanoid, or back into her true form. Her statistics are the same in each form. Any equipment she is wearing or carrying isn't transformed. She reverts to her true form if she dies."
      },
      {
        "name": "Etherealness",
        "description": "The hag magically enters the Ethereal Plane from the Material Plane, or vice versa. To do so, the hag must have a heartstone in her possession."
      },
      {
        "name": "Nightmare Haunting",
        "description": "While on the Ethereal Plane, the hag magically touches a sleeping humanoid on the Material Plane. A protection from evil and good spell cast on the target prevents this contact, as does a magic circle. As long as the contact persists, the target has dreadful visions. If these visions last for at least 1 hour, the target gains no benefit from its rest, and its hit point maximum is reduced by 5 (1d10). If this effect reduces the target's hit point maximum to 0, the target dies, and if the target was evil, its soul is trapped in the hag's soul bag. The reduction to the target's hit point maximum lasts until removed by the greater restoration spell or similar magic."
      }
    ]
  },
  {
    "index": "nightmare",
    "name": "Nightmare",
    "size": "Large",
    "type": "fiend",
    "alignment": "neutral evil",
    "armor_class": 13,
    "hit_points": 68,
    "hit_dice": "8d10",
    "speed": "60 ft.",
    "challenge_rating": 3,
    "proficiency_bonus": 2,
    "xp": 700,
    "dexterity": 15,
    "passive_perception": 11,
    "languages": "understands Abyssal, Common, and Infernal but can't speak",
    "damage_resistances": [],
    "damage_immunities": [
      "fire"
    ],
    "condition_immunities": [],
    "actions": [
      {
        "name": "Hooves",
        "description": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 13 (2d8 + 4) bludgeoning damage plus 7 (2d6) fire damage."
      },
      {
        "name": "Ethereal Stride",
        "description": "The nightmare and up to three willing creatures within 5 feet of it magically enter the Ethereal Plane from the Material Plane, or vice versa."
      }
    ]
  },
  {
    "index": "noble",
    "name": "Noble",
    "size": "Medium",
    "type": "humanoid",
    "alignment": "any alignment",
    "armor_class": 15,
    "hit_points": 9,
    "hit_dice": "2d8",
    "speed": "30 ft.",
    "challenge_rating": 0.125,
    "proficiency_bonus": 2,
    "xp": 25,
    "dexterity": 12,
    "passive_perception": 12,
    "languages": "any two languages",
    "damage_resistances": [],
    "damage_immunities": [],
    "condition_immunities": [],
    "actions": [
      {
        "name": "Rapier",
        "description": "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 5 (1d8 + 1) piercing damage."
      }
    ]
  },
  {
    "index": "ochre-jelly",
    "name": "Ochre Jelly",
    "size": "Large",
    "type": "ooze",
    "alignment": "unaligned",
    "armor_class": 8,
    "hit_points": 45,
    "hit_dice": "6d10",
    "speed": "10 ft.",
    "challenge_rating": 2,
    "proficiency_bonus": 2,
    "xp": 450,
    "dexterity": 6,
    "passive_perception": 8,
    "languages": "",
    "damage_resistances": [
      "acid"
    ],
    "damage_immunities": [
      "lightning",
      "slashing"
    ],
    "condition_immunities": [
      "Blinded",
      "Charmed",
      "Blinded",
      "Exhaustion",
      "Frightened",
      "Prone"
    ],
    "actions": [
      {
        "name": "Pseudopod",
        "description": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 9 (2d6 + 2) bludgeoning damage plus 3 (1d6) acid damage."
      }
    ]
  },
  {
    "index": "octopus",
    "name": "Octopus",
    "size": "Small",
    "type": "beast",
    "alignment": "unaligned",
    "armor_class": 12,
    "hit_points": 3,
    "hit_dice": "1d6",
    "speed": "5 ft.",
    "challenge_rating": 0,
    "proficiency_bonus": 2,
    "xp": 10,
    "dexterity": 15,
    "passive_perception": 12,
    "languages": "",
    "damage_resistances": [],
    "damage_immunities": [],
    "condition_immunities": [],
    "actions": [
      {
        "name": "Tentacles",
        "description": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 1 bludgeoning damage, and the target is grappled (escape DC 10). Until this grapple ends, the octopus can't use its tentacles on another target."
      },
      {
        "name": "Ink Cloud",
        "description": "A 5-foot-radius cloud of ink extends all around the octopus if it is underwater. The area is heavily obscured for 1 minute, although a significant current can disperse the ink. After releasing the ink, the octopus can use the Dash action as a bonus action."
      }
    ]
  },
  {
    "index": "ogre",
    "name": "Ogre",
    "size": "Large",
    "type": "giant",
    "alignment": "chaotic evil",
    "armor_class": 11,
    "hit_points": 59,
    "hit_dice": "7d10",
    "speed": "40 ft.",
    "challenge_rating": 2,
    "proficiency_bonus": 2,
    "xp": 450,
    "dexterity": 8,
    "passive_perception": 8,
    "languages": "Common, Giant",
    "damage_resistances": [],
    "damage_immunities": [],
    "condition_immunities": [],
    "actions": [
      {
        "name": "Greatclub",
        "description": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 13 (2d8 + 4) bludgeoning damage."
      },
      {
        "name": "Javelin",
        "description": "Melee or Ranged Weapon Attack: +6 to hit, reach 5 ft. or range 30/120 ft., one target. Hit: 11 (2d6 + 4) piercing damage."
      }
    ]
  },
  {
    "index": "ogre-zombie",
    "name": "Ogre Zombie",
    "size": "Large",
    "type": "undead",
    "alignment": "neutral evil",
    "armor_class": 8,
    "hit_points": 85,
    "hit_dice": "9d10",
    "speed": "30 ft.",
    "challenge_rating": 2,
    "proficiency_bonus": 2,
    "xp": 450,
    "dexterity": 6,
    "passive_perception": 8,
    "languages": "understands Common and Giant but can't speak",
    "damage_resistances": [],
    "damage_immunities": [
      "poison"
    ],
    "condition_immunities": [
      "Poisoned"
    ],
    "actions": [
      {
        "name": "Morningstar",
        "description": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 13 (2d8 + 4) bludgeoning damage."
      }
    ]
  },
  {
    "index": "oni",
    "name": "Oni",
    "size": "Large",
    "type": "giant",
    "alignment": "lawful evil",
    "armor_class": 16,
    "hit_points": 110,
    "hit_dice": "13d10",
    "speed": "30 ft.",
    "challenge_rating": 7,
    "proficiency_bonus": 3,
    "xp": 2900,
    "dexterity": 11,
    "passive_perception": 14,
    "languages": "Common, Giant",
    "damage_resistances": [],
    "damage_immunities": [],
    "condition_immunities": [],
    "actions": [
      {
        "name": "Multiattack",
        "description": "The oni makes two attacks, either with its claws or its glaive."
      },
      {
        "name": "Claw (Oni Form Only)",
        "description": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 8 (1d8 + 4) slashing damage."
      },
      {
        "name": "Glaive",
        "description": "Melee Weapon Attack: +7 to hit, reach 10 ft., one target. Hit: 15 (2d10 + 4) slashing damage, or 9 (1d10 + 4) slashing damage in Small or Medium form."
      },
      {
        "name": "Change Shape",
        "description": "The oni magically polymorphs into a Small or Medium humanoid, into a Large giant, or back into its true form. Other than its size, its statistics are the same in each form. The only equipment that is transformed is its glaive, which shrinks so that it can be wielded in humanoid form. If the oni dies, it reverts to its true form, and its glaive reverts to its normal size."
      }
    ]
  },
  {
    "index": "orc",
    "name": "Orc",
    "size": "Medium",
    "type": "humanoid",
    "alignment": "chaotic evil",
    "armor_class": 13,
    "hit_points": 15,
    "hit_dice": "2d8",
    "speed": "30 ft.",
    "challenge_rating": 0.5,
    "proficiency_bonus": 2,
    "xp": 100,
    "dexterity": 12,
    "passive_perception": 10,
    "languages": "Common, Orc",
    "damage_resistances": [],
    "damage_immunities": [],
    "condition_immunities": [],
    "actions": [
      {
        "name": "Greataxe",
        "description": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 9 (1d12 + 3) slashing damage."
      },
      {
        "name": "Javelin",
        "description": "Melee or Ranged Weapon Attack: +5 to hit, reach 5 ft. or range 30/120 ft., one target. Hit: 6 (1d6 + 3) piercing damage."
      }
    ]
  },
  {
    "index": "otyugh",
    "name": "Otyugh",
    "size": "Large",
    "type": "aberration",
    "alignment": "neutral",
    "armor_class": 14,
    "hit_points": 114,
    "hit_dice": "12d10",
    "speed": "30 ft.",
    "challenge_rating": 5,
    "proficiency_bonus": 3,
    "xp": 1800,
    "dexterity": 11,
    "passive_perception": 11,
    "languages": "Otyugh",
    "damage_resistances": [],
    "damage_immunities": [],
    "condition_immunities": [],
    "actions": [
      {
        "name": "Multiattack",
        "description": "The otyugh makes three attacks: one with its bite and two with its tentacles."
      },
      {
        "name": "Bite",
        "description": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 12 (2d8 + 3) piercing damage. If the target is a creature, it must succeed on a DC 15 Constitution saving throw against disease or become poisoned until the disease is cured. Every 24 hours that elapse, the target must repeat the saving throw, reducing its hit point maximum by 5 (1d10) on a failure. The disease is cured on a success. The target dies if the disease reduces its hit point maximum to 0. This reduction to the target's hit point maximum lasts until the disease is cured."
      },
      {
        "name": "Tentacle",
        "description": "Melee Weapon Attack: +6 to hit, reach 10 ft., one target. Hit: 7 (1d8 + 3) bludgeoning damage plus 4 (1d8) piercing damage. If the target is Medium or smaller, it is grappled (escape DC 13) and restrained until the grapple ends. The otyugh has two tentacles, each of which can grapple one target."
      },
      {
        "name": "Tentacle Slam",
        "description": "The otyugh slams creatures grappled by it into each other or a solid surface. Each creature must succeed on a DC 14 Constitution saving throw or take 10 (2d6 + 3) bludgeoning damage and be stunned until the end of the otyugh's next turn. On a successful save, the target takes half the bludgeoning damage and isn't stunned."
      }
    ]
  },
  {
    "index": "owl",
    "name": "Owl",
    "size": "Tiny",
    "type": "beast",
    "alignment": "unaligned",
    "armor_class": 11,
    "hit_points": 1,
    "hit_dice": "1d4",
    "speed": "5 ft.",
    "challenge_rating": 0,
    "proficiency_bonus": 2,
    "xp": 10,
    "dexterity": 13,
    "passive_perception": 13,
    "languages": "",
    "damage_resistances": [],
    "damage_immunities": [],
    "condition_immunities": [],
    "actions": [
      {
        "name": "Talons",
        "description": "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 1 slashing damage."
      }
    ]
  },
  {
    "index": "owlbear",
    "name": "Owlbear",
    "size": "Large",
    "type": "monstrosity",
    "alignment": "unaligned",
    "armor_class": 13,
    "hit_points": 59,
    "hit_dice": "7d10",
    "speed": "40 ft.",
    "challenge_rating": 3,
    "proficiency_bonus": 2,
    "xp": 700,
    "dexterity": 12,
    "passive_perception": 13,
    "languages": "",
    "damage_resistances": [],
    "damage_immunities": [],
    "condition_immunities": [],
    "actions": [
      {
        "name": "Multiattack",
        "description": "The owlbear makes two attacks: one with its beak and one with its claws."
      },
      {
        "name": "Beak",
        "description": "Melee Weapon Attack: +7 to hit, reach 5 ft., one creature. Hit: 10 (1d10 + 5) piercing damage."
      },
      {
        "name": "Claws",
        "description": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 14 (2d8 + 5) slashing damage."
      }
    ]
  },
  {
    "index": "panther",
    "name": "Panther",
    "size": "Medium",
    "type": "beast",
    "alignment": "unaligned",
    "armor_class": 12,
    "hit_points": 13,
    "hit_dice": "3d8",
    "speed": "50 ft.",
    "challenge_rating": 0.25,
    "proficiency_bonus": 2,
    "xp": 50,
    "dexterity": 15,
    "passive_perception": 14,
    "languages": "",
    "damage_resistances": [],
    "damage_immunities": [],
    "condition_immunities": [],
    "actions": [
      {
        "name": "Bite",
        "description": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6 + 2) piercing damage."
      },
      {
        "name": "Claw",
        "description": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 4 (1d4 + 2) slashing damage."
      }
    ]
  },
  {
    "index": "pegasus",
    "name": "Pegasus",
    "size": "Large",
    "type": "celestial",
    "alignment": "chaotic good",
    "armor_class": 12,
    "hit_points": 59,
    "hit_dice": "7d10",
    "speed": "60 ft.",
    "challenge_rating": 2,
    "proficiency_bonus": 2,
    "xp": 450,
    "dexterity": 15,
    "passive_perception": 16,
    "languages": "understands Celestial, Common, Elvish, and Sylvan but can't speak",
    "damage_resistances": [],
    "damage_immunities": [],
    "condition_immunities": [],
    "actions": [
      {
        "name": "Hooves",
        "description": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 11 (2d6 + 4) bludgeoning damage."
      }
    ]
  },
  {
    "index": "phase-spider",
    "name": "Phase Spider",
    "size": "Large",
    "type": "monstrosity",
    "alignment": "unaligned",
    "armor_class": 13,
    "hit_points": 32,
    "hit_dice": "5d10",
    "speed": "30 ft.",
    "challenge_rating": 3,
    "proficiency_bonus": 2,
    "xp": 700,
    "dexterity": 15,
    "passive_perception": 10,
    "languages": "",
    "damage_resistances": [],
    "damage_immunities": [],
    "condition_immunities": [],
    "actions": [
      {
        "name": "Bite",
        "description": "Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 7 (1d10 + 2) piercing damage, and the target must make a DC 11 Constitution saving throw, taking 18 (4d8) poison damage on a failed save, or half as much damage on a successful one. If the poison damage reduces the target to 0 hit points, the target is stable but poisoned for 1 hour, even after regaining hit points, and is paralyzed while poisoned in this way."
      }
    ]
  },
  {
    "index": "pit-fiend",
    "name": "Pit Fiend",
    "size": "Large",
    "type": "fiend",
    "alignment": "lawful evil",
    "armor_class": 19,
    "hit_points": 300,
    "hit_dice": "24d10",
    "speed": "30 ft.",
    "challenge_rating": 20,
    "proficiency_bonus": 6,
    "xp": 25000,
    "dexterity": 14,
    "passive_perception": 14,
    "languages": "Infernal, telepathy 120 ft.",
    "damage_resistances": [
      "cold",
      "bludgeoning, piercing, and slashing from nonmagical weapons that aren't silvered"
    ],
    "damage_immunities": [
      "fire",
      "poison"
    ],
    "condition_immunities": [
      "Poisoned"
    ],
    "actions": [
      {
        "name": "Multiattack",
        "description": "The pit fiend makes four attacks: one with its bite, one with its claw, one with its mace, and one with its tail."
      },
      {
        "name": "Bite",
        "description": "Melee Weapon Attack: +14 to hit, reach 5 ft., one target. Hit: 22 (4d6 + 8) piercing damage. The target must succeed on a DC 21 Constitution saving throw or become poisoned. While poisoned in this way, the target can't regain hit points, and it takes 21 (6d6) poison damage at the start of each of its turns. The poisoned target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
      },
      {
        "name": "Claw",
        "description": "Melee Weapon Attack: +14 to hit, reach 10 ft., one target. Hit: 17 (2d8 + 8) slashing damage."
      },
      {
        "name": "Mace",
        "description": "Melee Weapon Attack: +14 to hit, reach 10 ft., one target. Hit: 15 (2d6 + 8) bludgeoning damage plus 21 (6d6) fire damage."
      },
      {
        "name": "Tail",
        "description": "Melee Weapon Attack: +14 to hit, reach 10 ft., one target. Hit: 24 (3d10 + 8) bludgeoning damage."
      }
    ]
  },
  {
    "index": "planetar",
    "name": "Planetar",
    "size": "Large",
    "type": "celestial",
    "alignment": "lawful good",
    "armor_class": 19,
    "hit_points": 200,
    "hit_dice": "16d10",
    "speed": "40 ft.",
    "challenge_rating": 16,
    "proficiency_bonus": 5,
    "xp": 15000,
    "dexterity": 20,
    "passive_perception": 21,
    "languages": "all, telepathy 120 ft.",
    "damage_resistances": [
      "radiant",
      "bludgeoning, piercing, and slashing from nonmagical weapons"
    ],
    "damage_immunities": [],
    "condition_immunities": [
      "Charmed",
      "Exhaustion",
      "Frightened"
    ],
    "actions": [
      {
        "name": "Multiattack",
        "description": "The planetar makes two melee attacks."
      },
      {
        "name": "Greatsword",
        "description": "Melee Weapon Attack: +12 to hit, reach 5 ft., one target. Hit: 21 (4d6 + 7) slashing damage plus 22 (5d8) radiant damage."
      },
      {
        "name": "Healing Touch",
        "description": "The planetar touches another creature. The target magically regains 30 (6d8 + 3) hit points and is freed from any curse, disease, poison, blindness, or deafness."
      }
    ]
  },
  {
    "index": "plesiosaurus",
    "name": "Plesiosaurus",
    "size": "Large",
    "type": "beast",
    "alignment": "unaligned",
    "armor_class": 13,
    "hit_points": 68,
    "hit_dice": "8d10",
    "speed": "20 ft.",
    "challenge_rating": 2,
    "proficiency_bonus": 2,
    "xp": 450,
    "dexterity": 15,
    "passive_perception": 13,
    "languages": "",
    "damage_resistances": [],
    "damage_immunities": [],
    "condition_immunities": [],
    "actions": [
      {
        "name": "Bite",
        "description": "Melee Weapon Attack: +6 to hit, reach 10 ft., one target. Hit: 14 (3d6 + 4) piercing damage."
      }
    ]
  },
  {
    "index": "poisonous-snake",
    "name": "Poisonous Snake",
    "size": "Tiny",
    "type": "beast",
    "alignment": "unaligned",
    "armor_class": 13,
    "hit_points": 2,
    "hit_dice": "1d4",
    "speed": "30 ft.",
    "challenge_rating": 0.125,
    "proficiency_bonus": 2,
    "xp": 25,
    "dexterity": 16,
    "passive_perception": 10,
    "languages": "",
    "damage_resistances": [],
    "damage_immunities": [],
    "condition_immunities": [],
    "actions": [
      {
        "name": "Bite",
        "description": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 1 piercing damage, and the target must make a DC 10 Constitution saving throw, taking 5 (2d4) poison damage on a failed save, or half as much damage on a successful one."
      }
    ]
  },
  {
    "index": "polar-bear",
    "name": "Polar Bear",
    "size": "Large",
    "type": "beast",
    "alignment": "unaligned",
    "armor_class": 12,
    "hit_points": 42,
    "hit_dice": "5d10",
    "speed": "40 ft.",
    "challenge_rating": 2,
    "proficiency_bonus": 2,
    "xp": 450,
    "dexterity": 10,
    "passive_perception": 13,
    "languages": "",
    "damage_resistances": [],
    "damage_immunities": [],
    "condition_immunities": [],
    "actions": [
      {
        "name": "Multiattack",
        "description": "The bear makes two attacks: one with its bite and one with its claws."
      },
      {
        "name": "Bite",
        "description": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 9 (1d8 + 5) piercing damage."
      },
      {
        "name": "Claws",
        "description": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 12 (2d6 + 5) slashing damage."
      }
    ]
  },
  {
    "index": "pony",
    "name": "Pony",
    "size": "Medium",
    "type": "beast",
    "alignment": "unaligned",
    "armor_class": 10,
    "hit_points": 11,
    "hit_dice": "2d8",
    "speed": "40 ft.",
    "challenge_rating": 0.125,
    "proficiency_bonus": 2,
    "xp": 25,
    "dexterity": 10,
    "passive_perception": 10,
    "languages": "",
    "damage_resistances": [],
    "damage_immunities": [],
    "condition_immunities": [],
    "actions": [
      {
        "name": "Hooves",
        "description": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 7 (2d4 + 2) bludgeoning damage."
      }
    ]
  },
  {
    "index": "priest",
    "name": "Priest",
    "size": "Medium",
    "type": "humanoid",
    "alignment": "any alignment",
    "armor_class": 13,
    "hit_points": 27,
    "hit_dice": "5d8",
    "speed": "25 ft.",
    "challenge_rating": 2,
    "proficiency_bonus": 2,
    "xp": 450,
    "dexterity": 10,
    "passive_perception": 13,
    "languages": "any two languages",
    "damage_resistances": [],
    "damage_immunities": [],
    "condition_immunities": [],
    "actions": [
      {
        "name": "Mace",
        "description": "Melee Weapon Attack: +2 to hit, reach 5 ft., one target. Hit: 3 (1d6) bludgeoning damage."
      }
    ]
  },
  {
    "index": "pseudodragon",
    "name": "Pseudodragon",
    "size": "Tiny",
    "type": "dragon",
    "alignment": "neutral good",
    "armor_class": 13,
    "hit_points": 7,
    "hit_dice": "2d4",
    "speed": "15 ft.",
    "challenge_rating": 0.25,
    "proficiency_bonus": 2,
    "xp": 50,
    "dexterity": 15,
    "passive_perception": 13,
    "languages": "understands Common and Draconic but can't speak",
    "damage_resistances": [],
    "damage_immunities": [],
    "condition_immunities": [],
    "actions": [
      {
        "name": "Bite",
        "description": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 4 (1d4 + 2) piercing damage."
      },
      {
        "name": "Sting",
        "description": "Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 4 (1d4 + 2) piercing damage, and the target must succeed on a DC 11 Constitution saving throw or become poisoned for 1 hour. If the saving throw fails by 5 or more, the target falls unconscious for the same duration, or until it takes damage or another creature uses an action to shake it awake."
      }
    ]
  },
  {
    "index": "purple-worm",
    "name": "Purple Worm",
    "size": "Gargantuan",
    "type": "monstrosity",
    "alignment": "unaligned",
    "armor_class": 18,
    "hit_points": 247,
    "hit_dice": "15d20",
    "speed": "50 ft.",
    "challenge_rating": 15,
    "proficiency_bonus": 5,
    "xp": 13000,
    "dexterity": 7,
    "passive_perception": 9,
    "languages": "",
    "damage_resistances": [],
    "damage_immunities": [],
    "condition_immunities": [],
    "actions": [
      {
        "name": "Multiattack",
        "description": "The worm makes two attacks: one with its bite and one with its stinger."
      },
      {
        "name": "Bite",
        "description": "Melee Weapon Attack: +9 to hit, reach 10 ft., one target. Hit: 22 (3d8 + 9) piercing damage. If the target is a Large or smaller creature, it must succeed on a DC 19 Dexterity saving throw or be swallowed by the worm. A swallowed creature is blinded and restrained, it has total cover against attacks and other effects outside the worm, and it takes 21 (6d6) acid damage at the start of each of the worm's turns.\nIf the worm takes 30 damage or more on a single turn from a creature inside it, the worm must succeed on a DC 21 Constitution saving throw at the end of that turn or regurgitate all swallowed creatures, which fall prone in a space within 10 feet of the worm. If the worm dies, a swallowed creature is no longer restrained by it and can escape from the corpse by using 20 feet of movement, exiting prone."
      },
      {
        "name": "Tail Stinger",
        "description": "Melee Weapon Attack: +9 to hit, reach 10 ft., one creature. Hit: 19 (3d6 + 9) piercing damage, and the target must make a DC 19 Constitution saving throw, taking 42 (12d6) poison damage on a failed save, or half as much damage on a successful one."
      }
    ]
  },
  {
    "index": "quasit",
    "name": "Quasit",
    "size": "Tiny",
    "type": "fiend",
    "alignment": "chaotic evil",
    "armor_class": 13,
    "hit_points": 7,
    "hit_dice": "3d4",
    "speed": "40 ft.",
    "challenge_rating": 1,
    "proficiency_bonus": 2,
    "xp": 200,
    "dexterity": 17,
    "passive_perception": 10,
    "languages": "Abyssal, Common",
    "damage_resistances": [
      "cold",
      "fire",
      "lightning",
      "bludgeoning, piercing, and slashing from nonmagical weapons"
    ],
    "damage_immunities": [
      "poison"
    ],
    "condition_immunities": [
      "Poisoned"
    ],
    "actions": [
      {
        "name": "Claw (Bite in Beast Form)",
        "description": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d4 + 3) piercing damage, and the target must succeed on a DC 10 Constitution saving throw or take 5 (2d4) poison damage and become poisoned for 1 minute. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
      },
      {
        "name": "Scare",
        "description": "One creature of the quasit's choice within 20 ft. of it must succeed on a DC 10 Wisdom saving throw or be frightened for 1 minute. The target can repeat the saving throw at the end of each of its turns, with disadvantage if the quasit is within line of sight, ending the effect on itself on a success."
      },
      {
        "name": "Invisibility",
        "description": "The quasit magically turns invisible until it attacks or uses Scare, or until its concentration ends (as if concentrating on a spell). Any equipment the quasit wears or carries is invisible with it."
      }
    ]
  },
  {
    "index": "quipper",
    "name": "Quipper",
    "size": "Tiny",
    "type": "beast",
    "alignment": "unaligned",
    "armor_class": 13,
    "hit_points": 1,
    "hit_dice": "1d4",
    "speed": "30 ft.",
    "challenge_rating": 0,
    "proficiency_bonus": 2,
    "xp": 10,
    "dexterity": 16,
    "passive_perception": 8,
    "languages": "",
    "damage_resistances": [],
    "damage_immunities": [],
    "condition_immunities": [],
    "actions": [
      {
        "name": "Bite",
        "description": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 1 piercing damage."
      }
    ]
  },
  {
    "index": "rakshasa",
    "name": "Rakshasa",
    "size": "Medium",
    "type": "fiend",
    "alignment": "lawful evil",
    "armor_class": 16,
    "hit_points": 110,
    "hit_dice": "13d8",
    "speed": "40 ft.",
    "challenge_rating": 13,
    "proficiency_bonus": 5,
    "xp": 10000,
    "dexterity": 17,
    "passive_perception": 13,
    "languages": "Common, Infernal",
    "damage_resistances": [],
    "damage_immunities": [
      "bludgeoning, piercing, and slashing from nonmagical weapons"
    ],
    "condition_immunities": [],
    "actions": [
      {
        "name": "Multiattack",
        "description": "The rakshasa makes two claw attacks"
      },
      {
        "name": "Claw",
        "description": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 9 (2d6 + 2) slashing damage, and the target is cursed if it is a creature. The magical curse takes effect whenever the target takes a short or long rest, filling the target's thoughts with horrible images and dreams. The cursed target gains no benefit from finishing a short or long rest. The curse lasts until it is lifted by a remove curse spell or similar magic."
      }
    ]
  },
  {
    "index": "rat",
    "name": "Rat",
    "size": "Tiny",
    "type": "beast",
    "alignment": "unaligned",
    "armor_class": 10,
    "hit_points": 1,
    "hit_dice": "1d4",
    "speed": "20 ft.",
    "challenge_rating": 0,
    "proficiency_bonus": 2,
    "xp": 10,
    "dexterity": 11,
    "passive_perception": 10,
    "languages": "",
    "damage_resistances": [],
    "damage_immunities": [],
    "condition_immunities": [],
    "actions": [
      {
        "name": "Bite",
        "description": "Melee Weapon Attack: +0 to hit, reach 5 ft., one target. Hit: 1 piercing damage."
      }
    ]
  },
  {
    "index": "raven",
    "name": "Raven",
    "size": "Tiny",
    "type": "beast",
    "alignment": "unaligned",
    "armor_class": 12,
    "hit_points": 1,
    "hit_dice": "1d4",
    "speed": "10 ft.",
    "challenge_rating": 0,
    "proficiency_bonus": 2,
    "xp": 10,
    "dexterity": 14,
    "passive_perception": 13,
    "languages": "",
    "damage_resistances": [],
    "damage_immunities": [],
    "condition_immunities": [],
    "actions": [
      {
        "name": "Beak",
        "description": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 1 piercing damage."
      }
    ]
  },
  {
    "index": "red-dragon-wyrmling",
    "name": "Red Dragon Wyrmling",
    "size": "Medium",
    "type": "dragon",
    "alignment": "chaotic evil",
    "armor_class": 17,
    "hit_points": 75,
    "hit_dice": "10d8",
    "speed": "30 ft.",
    "challenge_rating": 4,
    "proficiency_bonus": 2,
    "xp": 1100,
    "dexterity": 10,
    "passive_perception": 14,
    "languages": "Draconic",
    "damage_resistances": [],
    "damage_immunities": [
      "fire"
    ],
    "condition_immunities": [],
    "actions": [
      {
        "name": "Bite",
        "description": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 9 (1d10 + 4) piercing damage plus 3 (1d6) fire damage."
      },
      {
        "name": "Fire Breath",
        "description": "The dragon exhales fire in a 15-foot cone. Each creature in that area must make a DC 13 Dexterity saving throw, taking 24 (7d6) fire damage on a failed save, or half as much damage on a successful one."
      }
    ]
  },
  {
    "index": "reef-shark",
    "name": "Reef Shark",
    "size": "Medium",
    "type": "beast",
    "alignment": "unaligned",
    "armor_class": 12,
    "hit_points": 22,
    "hit_dice": "4d8",
    "speed": "30 ft.",
    "challenge_rating": 0.5,
    "proficiency_bonus": 2,
    "xp": 100,
    "dexterity": 13,
    "passive_perception": 12,
    "languages": "",
    "damage_resistances": [],
    "damage_immunities": [],
    "condition_immunities": [],
    "actions": [
      {
        "name": "Bite",
        "description": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 6 (1d8 + 2) piercing damage."
      }
    ]
  },
  {
    "index": "remorhaz",
    "name": "Remorhaz",
    "size": "Huge",
    "type": "monstrosity",
    "alignment": "unaligned",
    "armor_class": 17,
    "hit_points": 195,
    "hit_dice": "17d12",
    "speed": "30 ft.",
    "challenge_rating": 11,
    "proficiency_bonus": 4,
    "xp": 7200,
    "dexterity": 13,
    "passive_perception": 10,
    "languages": "",
    "damage_resistances": [],
    "damage_immunities": [
      "cold",
      "fire"
    ],
    "condition_immunities": [],
    "actions": [
      {
        "name": "Bite",
        "description": "Melee Weapon Attack: +11 to hit, reach 10 ft., one target. Hit: 40 (6d10 + 7) piercing damage plus 10 (3d6) fire damage. If the target is a creature, it is grappled (escape DC 17). Until this grapple ends, the target is restrained, and the remorhaz can't bite another target."
      },
      {
        "name": "Swallow",
        "description": "The remorhaz makes one bite attack against a Medium or smaller creature it is grappling. If the attack hits, that creature takes the bite's damage and is swallowed, and the grapple ends. While swallowed, the creature is blinded and restrained, it has total cover against attacks and other effects outside the remorhaz, and it takes 21 (6d6) acid damage at the start of each of the remorhaz's turns.\nIf the remorhaz takes 30 damage or more on a single turn from a creature inside it, the remorhaz must succeed on a DC 15 Constitution saving throw at the end of that turn or regurgitate all swallowed creatures, which fall prone in a space within 10 feet of the remorhaz. If the remorhaz dies, a swallowed creature is no longer restrained by it and can escape from the corpse using 15 feet of movement, exiting prone."
      }
    ]
  },
  {
    "index": "rhinoceros",
    "name": "Rhinoceros",
    "size": "Large",
    "type": "beast",
    "alignment": "unaligned",
    "armor_class": 11,
    "hit_points": 45,
    "hit_dice": "6d10",
    "speed": "40 ft.",
    "challenge_rating": 2,
    "proficiency_bonus": 2,
    "xp": 450,
    "dexterity": 8,
    "passive_perception": 11,
    "languages": "",
    "damage_resistances": [],
    "damage_immunities": [],
    "condition_immunities": [],
    "actions": [
      {
        "name": "Gore",
        "description": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 14 (2d8 + 5) bludgeoning damage."
      }
    ]
  },
  {
    "index": "riding-horse",
    "name": "Riding Horse",
    "size": "Large",
    "type": "beast",
    "alignment": "unaligned",
    "armor_class": 10,
    "hit_points": 13,
    "hit_dice": "2d10",
    "speed": "60 ft.",
    "challenge_rating": 0.25,
    "proficiency_bonus": 2,
    "xp": 25,
    "dexterity": 10,
    "passive_perception": 10,
    "languages": "",
    "damage_resistances": [],
    "damage_immunities": [],
    "condition_immunities": [],
    "actions": [
      {
        "name": "Hooves",
        "description": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 8 (2d4 + 3) bludgeoning damage."
      }
    ]
  },
  {
    "index": "roc",
    "name": "Roc",
    "size": "Gargantuan",
    "type": "monstrosity",
    "alignment": "unaligned",
    "armor_class": 15,
    "hit_points": 248,
    "hit_dice": "16d20",
    "speed": "20 ft.",
    "challenge_rating": 11,
    "proficiency_bonus": 4,
    "xp": 7200,
    "dexterity": 10,
    "passive_perception": 14,
    "languages": "",
    "damage_resistances": [],
    "damage_immunities": [],
    "condition_immunities": [],
    "actions": [
      {
        "name": "Multiattack",
        "description": "The roc makes two attacks: one with its beak and one with its talons."
      },
      {
        "name": "Beak",
        "description": "Melee Weapon Attack: +13 to hit, reach 10 ft., one target. Hit: 27 (4d8 + 9) piercing damage."
      },
      {
        "name": "Talons",
        "description": "Melee Weapon Attack: +13 to hit, reach 5 ft., one target. Hit: 23 (4d6 + 9) slashing damage, and the target is grappled (escape DC 19). Until this grapple ends, the target is restrained, and the roc can't use its talons on another target."
      }
    ]
  },
  {
    "index": "roper",
    "name": "Roper",
    "size": "Large",
    "type": "monstrosity",
    "alignment": "neutral evil",
    "armor_class": 20,
    "hit_points": 93,
    "hit_dice": "11d10",
    "speed": "10 ft.",
    "challenge_rating": 5,
    "proficiency_bonus": 3,
    "xp": 1800,
    "dexterity": 8,
    "passive_perception": 16,
    "languages": "",
    "damage_resistances": [],
    "damage_immunities": [],
    "condition_immunities": [],
    "actions": [
      {
        "name": "Multiattack",
        "description": "The roper makes four attacks with its tendrils, uses Reel, and makes one attack with its bite."
      },
      {
        "name": "Bite",
        "description": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 22 (4d8 + 4) piercing damage."
      },
      {
        "name": "Tendril",
        "description": "Melee Weapon Attack: +7 to hit, reach 50 ft., one creature. Hit: The target is grappled (escape DC 15). Until the grapple ends, the target is restrained and has disadvantage on Strength checks and Strength saving throws, and the roper can't use the same tendril on another target."
      },
      {
        "name": "Reel",
        "description": "The roper pulls each creature grappled by it up to 25 ft. straight toward it."
      }
    ]
  },
  {
    "index": "rug-of-smothering",
    "name": "Rug of Smothering",
    "size": "Large",
    "type": "construct",
    "alignment": "unaligned",
    "armor_class": 12,
    "hit_points": 33,
    "hit_dice": "6d10",
    "speed": "10 ft.",
    "challenge_rating": 2,
    "proficiency_bonus": 2,
    "xp": 450,
    "dexterity": 14,
    "passive_perception": 6,
    "languages": "",
    "damage_resistances": [],
    "damage_immunities": [
      "poison",
      "psychic"
    ],
    "condition_immunities": [
      "Blinded",
      "Charmed",
      "Blinded",
      "Frightened",
      "Paralyzed",
      "Petrified",
      "Poisoned"
    ],
    "actions": [
      {
        "name": "Smother",
        "description": "Melee Weapon Attack: +5 to hit, reach 5 ft., one Medium or smaller creature. Hit: The creature is grappled (escape DC 13). Until this grapple ends, the target is restrained, blinded, and at risk of suffocating, and the rug can't smother another target. In addition, at the start of each of the target's turns, the target takes 10 (2d6 + 3) bludgeoning damage."
      }
    ]
  },
  {
    "index": "rust-monster",
    "name": "Rust Monster",
    "size": "Medium",
    "type": "monstrosity",
    "alignment": "unaligned",
    "armor_class": 14,
    "hit_points": 27,
    "hit_dice": "5d8",
    "speed": "40 ft.",
    "challenge_rating": 0.5,
    "proficiency_bonus": 2,
    "xp": 100,
    "dexterity": 12,
    "passive_perception": 11,
    "languages": "",
    "damage_resistances": [],
    "damage_immunities": [],
    "condition_immunities": [],
    "actions": [
      {
        "name": "Bite",
        "description": "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 5 (1d8 + 1) piercing damage."
      },
      {
        "name": "Antennae",
        "description": "The rust monster corrodes a nonmagical ferrous metal object it can see within 5 feet of it. If the object isn't being worn or carried, the touch destroys a 1-foot cube of it. If the object is being worn or carried by a creature, the creature can make a DC 11 Dexterity saving throw to avoid the rust monster's touch.\nIf the object touched is either metal armor or a metal shield being worn or carried, its takes a permanent and cumulative -1 penalty to the AC it offers. Armor reduced to an AC of 10 or a shield that drops to a +0 bonus is destroyed. If the object touched is a held metal weapon, it rusts as described in the Rust Metal trait."
      }
    ]
  },
  {
    "index": "saber-toothed-tiger",
    "name": "Saber-Toothed Tiger",
    "size": "Large",
    "type": "beast",
    "alignment": "unaligned",
    "armor_class": 12,
    "hit_points": 52,
    "hit_dice": "7d10",
    "speed": "40 ft.",
    "challenge_rating": 2,
    "proficiency_bonus": 2,
    "xp": 450,
    "dexterity": 14,
    "passive_perception": 13,
    "languages": "",
    "damage_resistances": [],
    "damage_immunities": [],
    "condition_immunities": [],
    "actions": [
      {
        "name": "Bite",
        "description": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 10 (1d10 + 5) piercing damage."
      },
      {
        "name": "Claw",
        "description": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 12 (2d6 + 5) slashing damage."
      }
    ]
  },
  {
    "index": "sahuagin",
    "name": "Sahuagin",
    "size": "Medium",
    "type": "humanoid",
    "alignment": "lawful evil",
    "armor_class": 12,
    "hit_points": 22,
    "hit_dice": "4d8",
    "speed": "30 ft.",
    "challenge_rating": 0.5,
    "proficiency_bonus": 2,
    "xp": 100,
    "dexterity": 11,
    "passive_perception": 15,
    "languages": "Sahuagin",
    "damage_resistances": [],
    "damage_immunities": [],
    "condition_immunities": [],
    "actions": [
      {
        "name": "Multiattack",
        "description": "The sahuagin makes two melee attacks: one with its bite and one with its claws or spear."
      },
      {
        "name": "Bite",
        "description": "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 3 (1d4 + 1) piercing damage."
      },
      {
        "name": "Claws",
        "description": "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 3 (1d4 + 1) slashing damage."
      },
      {
        "name": "Spear",
        "description": "Melee or Ranged Weapon Attack: +3 to hit, reach 5 ft. or range 20/60 ft., one target. Hit: 4 (1d6 + 1) piercing damage, or 5 (1d8 + 1) piercing damage if used with two hands to make a melee attack."
      }
    ]
  },
  {
    "index": "salamander",
    "name": "Salamander",
    "size": "Large",
    "type": "elemental",
    "alignment": "neutral evil",
    "armor_class": 15,
    "hit_points": 90,
    "hit_dice": "12d10",
    "speed": "30 ft.",
    "challenge_rating": 5,
    "proficiency_bonus": 3,
    "xp": 1800,
    "dexterity": 14,
    "passive_perception": 10,
    "languages": "Ignan",
    "damage_resistances": [
      "bludgeoning, piercing, and slashing from nonmagical weapons"
    ],
    "damage_immunities": [
      "fire"
    ],
    "condition_immunities": [],
    "actions": [
      {
        "name": "Multiattack",
        "description": "The salamander makes two attacks: one with its spear and one with its tail."
      },
      {
        "name": "Spear",
        "description": "Melee or Ranged Weapon Attack: +7 to hit, reach 5 ft. or range 20 ft./60 ft., one target. Hit: 11 (2d6 + 4) piercing damage, or 13 (2d8 + 4) piercing damage if used with two hands to make a melee attack, plus 3 (1d6) fire damage."
      },
      {
        "name": "Tail",
        "description": "Melee Weapon Attack: +7 to hit, reach 10 ft., one target. Hit: 11 (2d6 + 4) bludgeoning damage plus 7 (2d6) fire damage, and the target is grappled (escape DC 14). Until this grapple ends, the target is restrained, the salamander can automatically hit the target with its tail, and the salamander can't make tail attacks against other targets."
      }
    ]
  },
  {
    "index": "satyr",
    "name": "Satyr",
    "size": "Medium",
    "type": "fey",
    "alignment": "chaotic neutral",
    "armor_class": 14,
    "hit_points": 31,
    "hit_dice": "7d8",
    "speed": "40 ft.",
    "challenge_rating": 0.5,
    "proficiency_bonus": 2,
    "xp": 100,
    "dexterity": 16,
    "passive_perception": 12,
    "languages": "Common, Elvish, Sylvan",
    "damage_resistances": [],
    "damage_immunities": [],
    "condition_immunities": [],
    "actions": [
      {
        "name": "Ram",
        "description": "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 6 (2d4 + 1) bludgeoning damage."
      },
      {
        "name": "Shortsword",
        "description": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 6 (1 d6 + 3) piercing damage."
      },
      {
        "name": "Shortbow",
        "description": "Ranged Weapon Attack: +5 to hit, range 80/320 ft., one target. Hit: 6 (1d6 + 3) piercing damage."
      }
    ]
  },
  {
    "index": "scorpion",
    "name": "Scorpion",
    "size": "Tiny",
    "type": "beast",
    "alignment": "unaligned",
    "armor_class": 11,
    "hit_points": 1,
    "hit_dice": "1d4",
    "speed": "10 ft.",
    "challenge_rating": 0,
    "proficiency_bonus": 2,
    "xp": 10,
    "dexterity": 11,
    "passive_perception": 9,
    "languages": "",
    "damage_resistances": [],
    "damage_immunities": [],
    "condition_immunities": [],
    "actions": [
      {
        "name": "Sting",
        "description": "Melee Weapon Attack: +2 to hit, reach 5 ft., one creature. Hit: 1 piercing damage, and the target must make a DC 9 Constitution saving throw, taking 4 (1d8) poison damage on a failed save, or half as much damage on a successful one."
      }
    ]
  },
  {
    "index": "scout",
    "name": "Scout",
    "size": "Medium",
    "type": "humanoid",
    "alignment": "any alignment",
    "armor_class": 13,
    "hit_points": 16,
    "hit_dice": "3d8",
    "speed": "30 ft.",
    "challenge_rating": 0.5,
    "proficiency_bonus": 2,
    "xp": 100,
    "dexterity": 14,
    "passive_perception": 15,
    "languages": "any one language (usually Common)",
    "damage_resistances": [],
    "damage_immunities": [],
    "condition_immunities": [],
    "actions": [
      {
        "name": "Multiattack",
        "description": "The scout makes two melee attacks or two ranged attacks."
      },
      {
        "name": "Shortsword",
        "description": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6 + 2) piercing damage."
      },
      {
        "name": "Longbow",
        "description": "Ranged Weapon Attack: +4 to hit, range 150/600 ft., one target. Hit: 6 (1d8 + 2) piercing damage."
      }
    ]
  },
  {
    "index": "sea-hag",
    "name": "Sea Hag",
    "size": "Medium",
    "type": "fey",
    "alignment": "chaotic evil",
    "armor_class": 14,
    "hit_points": 52,
    "hit_dice": "7d8",
    "speed": "30 ft.",
    "challenge_rating": 2,
    "proficiency_bonus": 2,
    "xp": 450,
    "dexterity": 13,
    "passive_perception": 11,
    "languages": "Aquan, Common, Giant",
    "damage_resistances": [],
    "damage_immunities": [],
    "condition_immunities": [],
    "actions": [
      {
        "name": "Claws",
        "description": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 10 (2d6 + 3) slashing damage."
      },
      {
        "name": "Death Glare",
        "description": "The hag targets one frightened creature she can see within 30 ft. of her. If the target can see the hag, it must succeed on a DC 11 Wisdom saving throw against this magic or drop to 0 hit points."
      },
      {
        "name": "Illusory Appearance",
        "description": "The hag covers herself and anything she is wearing or carrying with a magical illusion that makes her look like an ugly creature of her general size and humanoid shape. The effect ends if the hag takes a bonus action to end it or if she dies.\nThe changes wrought by this effect fail to hold up to physical inspection. For example, the hag could appear to have no claws, but someone touching her hand might feel the claws. Otherwise, a creature must take an action to visually inspect the illusion and succeed on a DC 16 Intelligence (Investigation) check to discern that the hag is disguised."
      }
    ]
  },
  {
    "index": "sea-horse",
    "name": "Sea Horse",
    "size": "Tiny",
    "type": "beast",
    "alignment": "unaligned",
    "armor_class": 11,
    "hit_points": 1,
    "hit_dice": "1d4",
    "speed": "30 ft.",
    "challenge_rating": 0,
    "proficiency_bonus": 2,
    "xp": 0,
    "dexterity": 12,
    "passive_perception": 10,
    "languages": "",
    "damage_resistances": [],
    "damage_immunities": [],
    "condition_immunities": [],
    "actions": []
  },
  {
    "index": "shadow",
    "name": "Shadow",
    "size": "Medium",
    "type": "undead",
    "alignment": "chaotic evil",
    "armor_class": 12,
    "hit_points": 16,
    "hit_dice": "3d8",
    "speed": "40 ft.",
    "challenge_rating": 0.5,
    "proficiency_bonus": 2,
    "xp": 100,
    "dexterity": 14,
    "passive_perception": 10,
    "languages": "",
    "damage_resistances": [
      "acid",
      "cold",
      "fire",
      "lightning",
      "thunder",
      "bludgeoning, piercing, and slashing from nonmagical weapons"
    ],
    "damage_immunities": [
      "necrotic",
      "poison"
    ],
    "condition_immunities": [
      "Exhaustion",
      "Frightened",
      "Grappled",
      "Paralyzed",
      "Petrified",
      "Poisoned",
      "Prone",
      "Restrained"
    ],
    "actions": [
      {
        "name": "Strength Drain",
        "description": "Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 9 (2d6 + 2) necrotic damage, and the target's Strength score is reduced by 1d4. The target dies if this reduces its Strength to 0. Otherwise, the reduction lasts until the target finishes a short or long rest.\nIf a non-evil humanoid dies from this attack, a new shadow rises from the corpse 1d4 hours later."
      }
    ]
  },
  {
    "index": "shambling-mound",
    "name": "Shambling Mound",
    "size": "Large",
    "type": "plant",
    "alignment": "unaligned",
    "armor_class": 15,
    "hit_points": 136,
    "hit_dice": "16d10",
    "speed": "20 ft.",
    "challenge_rating": 5,
    "proficiency_bonus": 3,
    "xp": 1800,
    "dexterity": 8,
    "passive_perception": 10,
    "languages": "",
    "damage_resistances": [
      "cold",
      "fire"
    ],
    "damage_immunities": [
      "lightning"
    ],
    "condition_immunities": [
      "Blinded",
      "Blinded",
      "Exhaustion"
    ],
    "actions": [
      {
        "name": "Multiattack",
        "description": "The shambling mound makes two slam attacks. If both attacks hit a Medium or smaller target, the target is grappled (escape DC 14), and the shambling mound uses its Engulf on it."
      },
      {
        "name": "Slam",
        "description": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 13 (2d8 + 4) bludgeoning damage."
      },
      {
        "name": "Engulf",
        "description": "The shambling mound engulfs a Medium or smaller creature grappled by it. The engulfed target is blinded, restrained, and unable to breathe, and it must succeed on a DC 14 Constitution saving throw at the start of each of the mound's turns or take 13 (2d8 + 4) bludgeoning damage. If the mound moves, the engulfed target moves with it. The mound can have only one creature engulfed at a time."
      }
    ]
  },
  {
    "index": "shield-guardian",
    "name": "Shield Guardian",
    "size": "Large",
    "type": "construct",
    "alignment": "unaligned",
    "armor_class": 17,
    "hit_points": 142,
    "hit_dice": "15d10",
    "speed": "30 ft.",
    "challenge_rating": 7,
    "proficiency_bonus": 3,
    "xp": 2900,
    "dexterity": 8,
    "passive_perception": 10,
    "languages": "understands commands given in any language but can't speak",
    "damage_resistances": [],
    "damage_immunities": [
      "poison"
    ],
    "condition_immunities": [
      "Charmed",
      "Exhaustion",
      "Frightened",
      "Paralyzed",
      "Poisoned"
    ],
    "actions": [
      {
        "name": "Multiattack",
        "description": "The guardian makes two fist attacks."
      },
      {
        "name": "Fist",
        "description": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 11 (2d6 + 4) bludgeoning damage."
      }
    ]
  },
  {
    "index": "shrieker",
    "name": "Shrieker",
    "size": "Medium",
    "type": "plant",
    "alignment": "unaligned",
    "armor_class": 5,
    "hit_points": 13,
    "hit_dice": "3d8",
    "speed": "0 ft.",
    "challenge_rating": 0,
    "proficiency_bonus": 2,
    "xp": 10,
    "dexterity": 1,
    "passive_perception": 6,
    "languages": "",
    "damage_resistances": [],
    "damage_immunities": [],
    "condition_immunities": [
      "Blinded",
      "Blinded",
      "Frightened"
    ],
    "actions": []
  },
  {
    "index": "silver-dragon-wyrmling",
    "name": "Silver Dragon Wyrmling",
    "size": "Medium",
    "type": "dragon",
    "alignment": "lawful good",
    "armor_class": 17,
    "hit_points": 45,
    "hit_dice": "6d8",
    "speed": "30 ft.",
    "challenge_rating": 2,
    "proficiency_bonus": 2,
    "xp": 450,
    "dexterity": 10,
    "passive_perception": 14,
    "languages": "Draconic",
    "damage_resistances": [],
    "damage_immunities": [
      "cold"
    ],
    "condition_immunities": [],
    "actions": [
      {
        "name": "Bite",
        "description": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 9 (1d10 + 4) piercing damage."
      },
      {
        "name": "Breath Weapons",
        "description": "The dragon uses one of the following breath weapons.\nCold Breath. The dragon exhales an icy blast in a 15-foot cone. Each creature in that area must make a DC 13 Constitution saving throw, taking 18 (4d8) cold damage on a failed save, or half as much damage on a successful one.\nParalyzing Breath. The dragon exhales paralyzing gas in a 15-foot cone. Each creature in that area must succeed on a DC 13 Constitution saving throw or be paralyzed for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
      }
    ]
  },
  {
    "index": "skeleton",
    "name": "Skeleton",
    "size": "Medium",
    "type": "undead",
    "alignment": "lawful evil",
    "armor_class": 13,
    "hit_points": 13,
    "hit_dice": "2d8",
    "speed": "30 ft.",
    "challenge_rating": 0.25,
    "proficiency_bonus": 2,
    "xp": 50,
    "dexterity": 14,
    "passive_perception": 9,
    "languages": "understands all languages it spoke in life but can't speak",
    "damage_resistances": [],
    "damage_immunities": [
      "poison"
    ],
    "condition_immunities": [
      "Poisoned",
      "Exhaustion"
    ],
    "actions": [
      {
        "name": "Shortsword",
        "description": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6 + 2) piercing damage."
      },
      {
        "name": "Shortbow",
        "description": "Ranged Weapon Attack: +4 to hit, range 80/320 ft., one target. Hit: 5 (1d6 + 2) piercing damage."
      }
    ]
  },
  {
    "index": "solar",
    "name": "Solar",
    "size": "Large",
    "type": "celestial",
    "alignment": "lawful good",
    "armor_class": 21,
    "hit_points": 243,
    "hit_dice": "18d10",
    "speed": "50 ft.",
    "challenge_rating": 21,
    "proficiency_bonus": 7,
    "xp": 33000,
    "dexterity": 22,
    "passive_perception": 24,
    "languages": "all, telepathy 120 ft.",
    "damage_resistances": [
      "radiant",
      "bludgeoning, piercing, and slashing from nonmagical weapons"
    ],
    "damage_immunities": [
      "necrotic",
      "poison"
    ],
    "condition_immunities": [
      "Charmed",
      "Exhaustion",
      "Frightened",
      "Poisoned"
    ],
    "actions": [
      {
        "name": "Multiattack",
        "description": "The solar makes two greatsword attacks."
      },
      {
        "name": "Greatsword",
        "description": "Melee Weapon Attack: +15 to hit, reach 5 ft., one target. Hit: 22 (4d6 + 8) slashing damage plus 27 (6d8) radiant damage."
      },
      {
        "name": "Slaying Longbow",
        "description": "Ranged Weapon Attack: +13 to hit, range 150/600 ft., one target. Hit: 15 (2d8 + 6) piercing damage plus 27 (6d8) radiant damage. If the target is a creature that has 190 hit points or fewer, it must succeed on a DC 15 Constitution saving throw or die."
      },
      {
        "name": "Flying Sword",
        "description": "The solar releases its greatsword to hover magically in an unoccupied space within 5 ft. of it. If the solar can see the sword, the solar can mentally command it as a bonus action to fly up to 50 ft. and either make one attack against a target or return to the solar's hands. If the hovering sword is targeted by any effect, the solar is considered to be holding it. The hovering sword falls if the solar dies."
      },
      {
        "name": "Healing Touch",
        "description": "The solar touches another creature. The target magically regains 40 (8d8 + 4) hit points and is freed from any curse, disease, poison, blindness, or deafness."
      }
    ]
  },
  {
    "index": "specter",
    "name": "Specter",
    "size": "Medium",
    "type": "undead",
    "alignment": "chaotic evil",
    "armor_class": 12,
    "hit_points": 22,
    "hit_dice": "5d8",
    "speed": "0 ft.",
    "challenge_rating": 1,
    "proficiency_bonus": 2,
    "xp": 200,
    "dexterity": 14,
    "passive_perception": 10,
    "languages": "understands all languages it knew in life but can't speak",
    "damage_resistances": [
      "acid",
      "cold",
      "fire",
      "lightning",
      "thunder",
      "bludgeoning, piercing, and slashing from nonmagical weapons"
    ],
    "damage_immunities": [
      "necrotic",
      "poison"
    ],
    "condition_immunities": [
      "Charmed",
      "Exhaustion",
      "Grappled",
      "Paralyzed",
      "Petrified",
      "Poisoned",
      "Prone",
      "Restrained",
      "Unconscious"
    ],
    "actions": [
      {
        "name": "Life Drain",
        "description": "Melee Spell Attack: +4 to hit, reach 5 ft., one creature. Hit: 10 (3d6) necrotic damage. The target must succeed on a DC 10 Constitution saving throw or its hit point maximum is reduced by an amount equal to the damage taken. This reduction lasts until the creature finishes a long rest. The target dies if this effect reduces its hit point maximum to 0."
      }
    ]
  },
  {
    "index": "spider",
    "name": "Spider",
    "size": "Tiny",
    "type": "beast",
    "alignment": "unaligned",
    "armor_class": 12,
    "hit_points": 1,
    "hit_dice": "1d4",
    "speed": "20 ft.",
    "challenge_rating": 0,
    "proficiency_bonus": 2,
    "xp": 10,
    "dexterity": 14,
    "passive_perception": 12,
    "languages": "",
    "damage_resistances": [],
    "damage_immunities": [],
    "condition_immunities": [],
    "actions": [
      {
        "name": "Bite",
        "description": "Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 1 piercing damage, and the target must succeed on a DC 9 Constitution saving throw or take 2 (1d4) poison damage."
      }
    ]
  },
  {
    "index": "spirit-naga",
    "name": "Spirit Naga",
    "size": "Large",
    "type": "monstrosity",
    "alignment": "chaotic evil",
    "armor_class": 15,
    "hit_points": 75,
    "hit_dice": "10d10",
    "speed": "40 ft.",
    "challenge_rating": 8,
    "proficiency_bonus": 3,
    "xp": 3900,
    "dexterity": 17,
    "passive_perception": 12,
    "languages": "Abyssal, Common",
    "damage_resistances": [],
    "damage_immunities": [
      "poison"
    ],
    "condition_immunities": [
      "Charmed",
      "Poisoned"
    ],
    "actions": [
      {
        "name": "Bite",
        "description": "Melee Weapon Attack: +7 to hit, reach 10 ft., one creature. Hit: 7 (1d6 + 4) piercing damage, and the target must make a DC 13 Constitution saving throw, taking 31 (7d8) poison damage on a failed save, or half as much damage on a successful one."
      }
    ]
  },
  {
    "index": "sprite",
    "name": "Sprite",
    "size": "Tiny",
    "type": "fey",
    "alignment": "neutral good",
    "armor_class": 15,
    "hit_points": 2,
    "hit_dice": "1d4",
    "speed": "10 ft.",
    "challenge_rating": 0.25,
    "proficiency_bonus": 2,
    "xp": 50,
    "dexterity": 18,
    "passive_perception": 13,
    "languages": "Common, Elvish, Sylvan",
    "damage_resistances": [],
    "damage_immunities": [],
    "condition_immunities": [],
    "actions": [
      {
        "name": "Longsword",
        "description": "Melee Weapon Attack: +2 to hit, reach 5 ft., one target. Hit: 1 slashing damage."
      },
      {
        "name": "Shortbow",
        "description": "Ranged Weapon Attack: +6 to hit, range 40/160 ft., one target. Hit: 1 piercing damage, and the target must succeed on a DC 10 Constitution saving throw or become poisoned for 1 minute. If its saving throw result is 5 or lower, the poisoned target falls unconscious for the same duration, or until it takes damage or another creature takes an action to shake it awake."
      },
      {
        "name": "Heart Sight",
        "description": "The sprite touches a creature and magically knows the creature's current emotional state. If the target fails a DC 10 Charisma saving throw, the sprite also knows the creature's alignment. Celestials, fiends, and undead automatically fail the saving throw."
      },
      {
        "name": "Invisibility",
        "description": "The sprite magically turns invisible until it attacks or casts a spell, or until its concentration ends (as if concentrating on a spell). Any equipment the sprite wears or carries is invisible with it."
      }
    ]
  },
  {
    "index": "spy",
    "name": "Spy",
    "size": "Medium",
    "type": "humanoid",
    "alignment": "any alignment",
    "armor_class": 12,
    "hit_points": 27,
    "hit_dice": "6d8",
    "speed": "30 ft.",
    "challenge_rating": 1,
    "proficiency_bonus": 2,
    "xp": 200,
    "dexterity": 15,
    "passive_perception": 16,
    "languages": "any two languages",
    "damage_resistances": [],
    "damage_immunities": [],
    "condition_immunities": [],
    "actions": [
      {
        "name": "Multiattack",
        "description": "The spy makes two melee attacks."
      },
      {
        "name": "Shortsword",
        "description": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6 + 2) piercing damage."
      },
      {
        "name": "Hand Crossbow",
        "description": "Ranged Weapon Attack: +4 to hit, range 30/120 ft., one target. Hit: 5 (1d6 + 2) piercing damage."
      }
    ]
  },
  {
    "index": "steam-mephit",
    "name": "Steam Mephit",
    "size": "Small",
    "type": "elemental",
    "alignment": "neutral evil",
    "armor_class": 10,
    "hit_points": 21,
    "hit_dice": "6d6",
    "speed": "30 ft.",
    "challenge_rating": 0.25,
    "proficiency_bonus": 2,
    "xp": 50,
    "dexterity": 11,
    "passive_perception": 10,
    "languages": "Aquan, Ignan",
    "damage_resistances": [],
    "damage_immunities": [
      "fire",
      "poison"
    ],
    "condition_immunities": [
      "Poisoned"
    ],
    "actions": [
      {
        "name": "Claws",
        "description": "Melee Weapon Attack: +2 to hit, reach 5 ft., one creature. Hit: 2 (1d4) slashing damage plus 2 (1d4) fire damage."
      },
      {
        "name": "Steam Breath",
        "description": "The mephit exhales a 15-foot cone of scalding steam. Each creature in that area must succeed on a DC 10 Dexterity saving throw, taking 4 (1d8) fire damage on a failed save, or half as much damage on a successful one."
      }
    ]
  },
  {
    "index": "stirge",
    "name": "Stirge",
    "size": "Tiny",
    "type": "beast",
    "alignment": "unaligned",
    "armor_class": 14,
    "hit_points": 2,
    "hit_dice": "1d4",
    "speed": "10 ft.",
    "challenge_rating": 0.125,
    "proficiency_bonus": 2,
    "xp": 25,
    "dexterity": 16,
    "passive_perception": 9,
    "languages": "",
    "damage_resistances": [],
    "damage_immunities": [],
    "condition_immunities": [],
    "actions": [
      {
        "name": "Blood Drain",
        "description": "Melee Weapon Attack: +5 to hit, reach 5 ft., one creature. Hit: 5 (1d4 + 3) piercing damage, and the stirge attaches to the target. While attached, the stirge doesn't attack. Instead, at the start of each of the stirge's turns, the target loses 5 (1d4 + 3) hit points due to blood loss.\nThe stirge can detach itself by spending 5 feet of its movement. It does so after it drains 10 hit points of blood from the target or the target dies. A creature, including the target, can use its action to detach the stirge."
      }
    ]
  },
  {
    "index": "stone-giant",
    "name": "Stone Giant",
    "size": "Huge",
    "type": "giant",
    "alignment": "neutral",
    "armor_class": 17,
    "hit_points": 126,
    "hit_dice": "11d12",
    "speed": "40 ft.",
    "challenge_rating": 7,
    "proficiency_bonus": 3,
    "xp": 2900,
    "dexterity": 15,
    "passive_perception": 14,
    "languages": "Giant",
    "damage_resistances": [],
    "damage_immunities": [],
    "condition_immunities": [],
    "actions": [
      {
        "name": "Multiattack",
        "description": "The giant makes two greatclub attacks."
      },
      {
        "name": "Greatclub",
        "description": "Melee Weapon Attack: +9 to hit, reach 15 ft., one target. Hit: 19 (3d8 + 6) bludgeoning damage."
      },
      {
        "name": "Rock",
        "description": "Ranged Weapon Attack: +9 to hit, range 60/240 ft., one target. Hit: 28 (4d10 + 6) bludgeoning damage. If the target is a creature, it must succeed on a DC 17 Strength saving throw or be knocked prone."
      }
    ]
  },
  {
    "index": "stone-golem",
    "name": "Stone Golem",
    "size": "Large",
    "type": "construct",
    "alignment": "unaligned",
    "armor_class": 17,
    "hit_points": 178,
    "hit_dice": "17d10",
    "speed": "30 ft.",
    "challenge_rating": 10,
    "proficiency_bonus": 4,
    "xp": 5900,
    "dexterity": 9,
    "passive_perception": 10,
    "languages": "understands the languages of its creator but can't speak",
    "damage_resistances": [],
    "damage_immunities": [
      "poison",
      "psychic",
      "bludgeoning, piercing, and slashing from nonmagical weapons that aren't adamantine"
    ],
    "condition_immunities": [
      "Charmed",
      "Exhaustion",
      "Frightened",
      "Paralyzed",
      "Petrified",
      "Poisoned"
    ],
    "actions": [
      {
        "name": "Multiattack",
        "description": "The golem makes two slam attacks."
      },
      {
        "name": "Slam",
        "description": "Melee Weapon Attack: +10 to hit, reach 5 ft., one target. Hit: 19 (3d8 + 6) bludgeoning damage."
      },
      {
        "name": "Slow",
        "description": "The golem targets one or more creatures it can see within 10 ft. of it. Each target must make a DC 17 Wisdom saving throw against this magic. On a failed save, a target can't use reactions, its speed is halved, and it can't make more than one attack on its turn. In addition, the target can take either an action or a bonus action on its turn, not both. These effects last for 1 minute. A target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
      }
    ]
  },
  {
    "index": "storm-giant",
    "name": "Storm Giant",
    "size": "Huge",
    "type": "giant",
    "alignment": "chaotic good",
    "armor_class": 16,
    "hit_points": 230,
    "hit_dice": "20d12",
    "speed": "50 ft.",
    "challenge_rating": 13,
    "proficiency_bonus": 5,
    "xp": 10000,
    "dexterity": 14,
    "passive_perception": 19,
    "languages": "Common, Giant",
    "damage_resistances": [
      "cold"
    ],
    "damage_immunities": [
      "lightning",
      "thunder"
    ],
    "condition_immunities": [],
    "actions": [
      {
        "name": "Multiattack",
        "description": "The giant makes two greatsword attacks."
      },
      {
        "name": "Greatsword",
        "description": "Melee Weapon Attack: +14 to hit, reach 10 ft., one target. Hit: 30 (6d6 + 9) slashing damage."
      },
      {
        "name": "Rock",
        "description": "Ranged Weapon Attack: +14 to hit, range 60/240 ft., one target. Hit: 35 (4d12 + 9) bludgeoning damage."
      },
      {
        "name": "Lightning Strike",
        "description": "The giant hurls a magical lightning bolt at a point it can see within 500 feet of it. Each creature within 10 feet of that point must make a DC 17 Dexterity saving throw, taking 54 (12d8) lightning damage on a failed save, or half as much damage on a successful one."
      }
    ]
  },
  {
    "index": "succubus-incubus",
    "name": "Succubus/Incubus",
    "size": "Medium",
    "type": "fiend",
    "alignment": "neutral evil",
    "armor_class": 15,
    "hit_points": 66,
    "hit_dice": "12d8",
    "speed": "30 ft.",
    "challenge_rating": 4,
    "proficiency_bonus": 2,
    "xp": 1100,
    "dexterity": 17,
    "passive_perception": 15,
    "languages": "Abyssal, Common, Infernal, telepathy 60 ft.",
    "damage_resistances": [
      "cold",
      "fire",
      "lightning",
      "poison",
      "bludgeoning, piercing, and slashing from nonmagical weapons"
    ],
    "damage_immunities": [],
    "condition_immunities": [],
    "actions": [
      {
        "name": "Claw (Fiend Form Only)",
        "description": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 6 (1d6 + 3) slashing damage."
      },
      {
        "name": "Charm",
        "description": "One humanoid the fiend can see within 30 feet of it must succeed on a DC 15 Wisdom saving throw or be magically charmed for 1 day. The charmed target obeys the fiend's verbal or telepathic commands. If the target suffers any harm or receives a suicidal command, it can repeat the saving throw, ending the effect on a success. If the target successfully saves against the effect, or if the effect on it ends, the target is immune to this fiend's Charm for the next 24 hours.\nThe fiend can have only one target charmed at a time. If it charms another, the effect on the previous target ends."
      },
      {
        "name": "Draining Kiss",
        "description": "The fiend kisses a creature charmed by it or a willing creature. The target must make a DC 15 Constitution saving throw against this magic, taking 32 (5d10 + 5) psychic damage on a failed save, or half as much damage on a successful one. The target's hit point maximum is reduced by an amount equal to the damage taken. This reduction lasts until the target finishes a long rest. The target dies if this effect reduces its hit point maximum to 0."
      },
      {
        "name": "Etherealness",
        "description": "The fiend magically enters the Ethereal Plane from the Material Plane, or vice versa."
      }
    ]
  },
  {
    "index": "swarm-of-bats",
    "name": "Swarm of Bats",
    "size": "Medium",
    "type": "swarm of Tiny beasts",
    "alignment": "unaligned",
    "armor_class": 12,
    "hit_points": 22,
    "hit_dice": "5d8",
    "speed": "0 ft.",
    "challenge_rating": 0.25,
    "proficiency_bonus": 2,
    "xp": 50,
    "dexterity": 15,
    "passive_perception": 11,
    "languages": "",
    "damage_resistances": [
      "bludgeoning",
      "piercing",
      "slashing"
    ],
    "damage_immunities": [],
    "condition_immunities": [
      "Charmed",
      "Frightened",
      "Grappled",
      "Paralyzed",
      "Petrified",
      "Prone",
      "Restrained",
      "Stunned"
    ],
    "actions": [
      {
        "name": "Bites",
        "description": "Melee Weapon Attack: +4 to hit, reach 0 ft., one creature in the swarm's space. Hit: 5 (2d4) piercing damage, or 2 (1d4) piercing damage if the swarm has half of its hit points or fewer."
      }
    ]
  },
  {
    "index": "swarm-of-beetles",
    "name": "Swarm of Beetles",
    "size": "Medium",
    "type": "swarm of Tiny beasts",
    "alignment": "unaligned",
    "armor_class": 12,
    "hit_points": 22,
    "hit_dice": "5d8",
    "speed": "20 ft.",
    "challenge_rating": 0.5,
    "proficiency_bonus": 2,
    "xp": 100,
    "dexterity": 13,
    "passive_perception": 8,
    "languages": "",
    "damage_resistances": [
      "bludgeoning",
      "piercing",
      "slashing"
    ],
    "damage_immunities": [],
    "condition_immunities": [
      "Charmed",
      "Frightened",
      "Grappled",
      "Paralyzed",
      "Petrified",
      "Prone",
      "Restrained",
      "Stunned"
    ],
    "actions": [
      {
        "name": "Bites",
        "description": "Melee Weapon Attack: +3 to hit, reach 0 ft., one target in the swarm's space. Hit: 10 (4d4) piercing damage, or 5 (2d4) piercing damage if the swarm has half of its hit points or fewer."
      }
    ]
  },
  {
    "index": "swarm-of-centipedes",
    "name": "Swarm of Centipedes",
    "size": "Medium",
    "type": "swarm of Tiny beasts",
    "alignment": "unaligned",
    "armor_class": 12,
    "hit_points": 22,
    "hit_dice": "5d8",
    "speed": "20 ft.",
    "challenge_rating": 0.5,
    "proficiency_bonus": 2,
    "xp": 100,
    "dexterity": 13,
    "passive_perception": 8,
    "languages": "",
    "damage_resistances": [
      "bludgeoning",
      "piercing",
      "slashing"
    ],
    "damage_immunities": [],
    "condition_immunities": [
      "Charmed",
      "Frightened",
      "Grappled",
      "Paralyzed",
      "Petrified",
      "Prone",
      "Restrained",
      "Stunned"
    ],
    "actions": [
      {
        "name": "Bites",
        "description": "Melee Weapon Attack: +3 to hit, reach 0 ft., one target in the swarm's space. Hit: 10 (4d4) piercing damage, or 5 (2d4) piercing damage if the swarm has half of its hit points or fewer.\nA creature reduced to 0 hit points by a swarm of centipedes is stable but poisoned for 1 hour, even after regaining hit points, and paralyzed while poisoned in this way."
      }
    ]
  },
  {
    "index": "swarm-of-insects",
    "name": "Swarm of Insects",
    "size": "Medium",
    "type": "swarm of Tiny beasts",
    "alignment": "unaligned",
    "armor_class": 12,
    "hit_points": 22,
    "hit_dice": "5d8",
    "speed": "20 ft.",
    "challenge_rating": 0.5,
    "proficiency_bonus": 2,
    "xp": 100,
    "dexterity": 13,
    "passive_perception": 8,
    "languages": "",
    "damage_resistances": [
      "bludgeoning",
      "piercing",
      "slashing"
    ],
    "damage_immunities": [],
    "condition_immunities": [
      "Charmed",
      "Frightened",
      "Grappled",
      "Paralyzed",
      "Petrified",
      "Prone",
      "Restrained",
      "Stunned"
    ],
    "actions": [
      {
        "name": "Bites",
        "description": "Melee Weapon Attack: +3 to hit, reach 0 ft., one target in the swarm's space. Hit: 10 (4d4) piercing damage, or 5 (2d4) piercing damage if the swarm has half of its hit points or fewer."
      }
    ]
  },
  {
    "index": "swarm-of-poisonous-snakes",
    "name": "Swarm of Poisonous Snakes",
    "size": "Medium",
    "type": "swarm of Tiny beasts",
    "alignment": "unaligned",
    "armor_class": 14,
    "hit_points": 36,
    "hit_dice": "8d8",
    "speed": "30 ft.",
    "challenge_rating": 2,
    "proficiency_bonus": 2,
    "xp": 450,
    "dexterity": 18,
    "passive_perception": 10,
    "languages": "",
    "damage_resistances": [
      "bludgeoning",
      "piercing",
      "slashing"
    ],
    "damage_immunities": [],
    "condition_immunities": [
      "Charmed",
      "Frightened",
      "Grappled",
      "Paralyzed",
      "Petrified",
      "Prone",
      "Restrained",
      "Stunned"
    ],
    "actions": [
      {
        "name": "Bites",
        "description": "Melee Weapon Attack: +6 to hit, reach 0 ft., one creature in the swarm's space. Hit: 7 (2d6) piercing damage, or 3 (1d6) piercing damage if the swarm has half of its hit points or fewer. The target must make a DC 10 Constitution saving throw, taking 14 (4d6) poison damage on a failed save, or half as much damage on a successful one."
      }
    ]
  },
  {
    "index": "swarm-of-quippers",
    "name": "Swarm of Quippers",
    "size": "Medium",
    "type": "swarm of Tiny beasts",
    "alignment": "unaligned",
    "armor_class": 13,
    "hit_points": 28,
    "hit_dice": "8d8",
    "speed": "0 ft.",
    "challenge_rating": 1,
    "proficiency_bonus": 2,
    "xp": 200,
    "dexterity": 16,
    "passive_perception": 8,
    "languages": "",
    "damage_resistances": [
      "bludgeoning",
      "piercing",
      "slashing"
    ],
    "damage_immunities": [],
    "condition_immunities": [
      "Charmed",
      "Frightened",
      "Grappled",
      "Paralyzed",
      "Petrified",
      "Prone",
      "Restrained",
      "Stunned"
    ],
    "actions": [
      {
        "name": "Bites",
        "description": "Melee Weapon Attack: +5 to hit, reach 0 ft., one creature in the swarm's space. Hit: 14 (4d6) piercing damage, or 7 (2d6) piercing damage if the swarm has half of its hit points or fewer."
      }
    ]
  },
  {
    "index": "swarm-of-rats",
    "name": "Swarm of Rats",
    "size": "Medium",
    "type": "swarm of Tiny beasts",
    "alignment": "unaligned",
    "armor_class": 10,
    "hit_points": 24,
    "hit_dice": "7d8",
    "speed": "30 ft.",
    "challenge_rating": 0.25,
    "proficiency_bonus": 2,
    "xp": 50,
    "dexterity": 11,
    "passive_perception": 10,
    "languages": "",
    "damage_resistances": [
      "bludgeoning",
      "piercing",
      "slashing"
    ],
    "damage_immunities": [],
    "condition_immunities": [
      "Charmed",
      "Frightened",
      "Grappled",
      "Paralyzed",
      "Petrified",
      "Prone",
      "Restrained",
      "Stunned"
    ],
    "actions": [
      {
        "name": "Bites",
        "description": "Melee Weapon Attack: +2 to hit, reach 0 ft., one target in the swarm's space. Hit: 7 (2d6) piercing damage, or 3 (1d6) piercing damage if the swarm has half of its hit points or fewer."
      }
    ]
  },
  {
    "index": "swarm-of-ravens",
    "name": "Swarm of Ravens",
    "size": "Medium",
    "type": "swarm of Tiny beasts",
    "alignment": "unaligned",
    "armor_class": 12,
    "hit_points": 24,
    "hit_dice": "7d8",
    "speed": "10 ft.",
    "challenge_rating": 0.25,
    "proficiency_bonus": 2,
    "xp": 50,
    "dexterity": 14,
    "passive_perception": 15,
    "languages": "",
    "damage_resistances": [
      "bludgeoning",
      "piercing",
      "slashing"
    ],
    "damage_immunities": [],
    "condition_immunities": [
      "Charmed",
      "Frightened",
      "Grappled",
      "Paralyzed",
      "Petrified",
      "Prone",
      "Restrained",
      "Stunned"
    ],
    "actions": [
      {
        "name": "Beaks",
        "description": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target in the swarm's space. Hit: 7 (2d6) piercing damage, or 3 (1d6) piercing damage if the swarm has half of its hit points or fewer."
      }
    ]
  },
  {
    "index": "swarm-of-spiders",
    "name": "Swarm of Spiders",
    "size": "Medium",
    "type": "swarm of Tiny beasts",
    "alignment": "unaligned",
    "armor_class": 12,
    "hit_points": 22,
    "hit_dice": "5d8",
    "speed": "20 ft.",
    "challenge_rating": 0.5,
    "proficiency_bonus": 2,
    "xp": 100,
    "dexterity": 13,
    "passive_perception": 8,
    "languages": "",
    "damage_resistances": [
      "bludgeoning",
      "piercing",
      "slashing"
    ],
    "damage_immunities": [],
    "condition_immunities": [
      "Charmed",
      "Frightened",
      "Paralyzed",
      "Petrified",
      "Prone",
      "Restrained",
      "Stunned"
    ],
    "actions": [
      {
        "name": "Bites",
        "description": "Melee Weapon Attack: +3 to hit, reach 0 ft., one target in the swarm's space. Hit: 10 (4d4) piercing damage, or 5 (2d4) piercing damage if the swarm has half of its hit points or fewer."
      }
    ]
  },
  {
    "index": "swarm-of-wasps",
    "name": "Swarm of Wasps",
    "size": "Medium",
    "type": "swarm of Tiny beasts",
    "alignment": "unaligned",
    "armor_class": 12,
    "hit_points": 22,
    "hit_dice": "5d8",
    "speed": "5 ft.",
    "challenge_rating": 0.5,
    "proficiency_bonus": 2,
    "xp": 100,
    "dexterity": 13,
    "passive_perception": 8,
    "languages": "",
    "damage_resistances": [
      "bludgeoning",
      "piercing",
      "slashing"
    ],
    "damage_immunities": [],
    "condition_immunities": [
      "Charmed",
      "Frightened",
      "Grappled",
      "Paralyzed",
      "Petrified",
      "Prone",
      "Restrained",
      "Stunned"
    ],
    "actions": [
      {
        "name": "Bites",
        "description": "Melee Weapon Attack: +3 to hit, reach 0 ft., one target in the swarm's space. Hit: 10 (4d4) piercing damage, or 5 (2d4) piercing damage if the swarm has half of its hit points or fewer."
      }
    ]
  },
  {
    "index": "tarrasque",
    "name": "Tarrasque",
    "size": "Gargantuan",
    "type": "monstrosity",
    "alignment": "unaligned",
    "armor_class": 25,
    "hit_points": 676,
    "hit_dice": "33d20",
    "speed": "40 ft.",
    "challenge_rating": 30,
    "proficiency_bonus": 9,
    "xp": 155000,
    "dexterity": 11,
    "passive_perception": 10,
    "languages": "",
    "damage_resistances": [],
    "damage_immunities": [
      "fire",
      "poison",
      "bludgeoning, piercing, and slashing from nonmagical weapons"
    ],
    "condition_immunities": [
      "Charmed",
      "Frightened",
      "Paralyzed",
      "Poisoned"
    ],
    "actions": [
      {
        "name": "Multiattack",
        "description": "The tarrasque can use its Frightful Presence. It then makes five attacks: one with its bite, two with its claws, one with its horns, and one with its tail. It can use its Swallow instead of its bite."
      },
      {
        "name": "Bite",
        "description": "Melee Weapon Attack: +19 to hit, reach 10 ft., one target. Hit: 36 (4d12 + 10) piercing damage. If the target is a creature, it is grappled (escape DC 20). Until this grapple ends, the target is restrained, and the tarrasque can't bite another target."
      },
      {
        "name": "Claw",
        "description": "Melee Weapon Attack: +19 to hit, reach 15 ft., one target. Hit: 28 (4d8 + 10) slashing damage."
      },
      {
        "name": "Horns",
        "description": "Melee Weapon Attack: +19 to hit, reach 10 ft., one target. Hit: 32 (4d10 + 10) piercing damage."
      },
      {
        "name": "Tail",
        "description": "Melee Weapon Attack: +19 to hit, reach 20 ft., one target. Hit: 24 (4d6 + 10) bludgeoning damage. If the target is a creature, it must succeed on a DC 20 Strength saving throw or be knocked prone."
      },
      {
        "name": "Frightful Presence",
        "description": "Each creature of the tarrasque's choice within 120 feet of it and aware of it must succeed on a DC 17 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, with disadvantage if the tarrasque is within line of sight, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the tarrasque's Frightful Presence for the next 24 hours."
      },
      {
        "name": "Swallow",
        "description": "The tarrasque makes one bite attack against a Large or smaller creature it is grappling. If the attack hits, the target takes the bite's damage, the target is swallowed, and the grapple ends. While swallowed, the creature is blinded and restrained, it has total cover against attacks and other effects outside the tarrasque, and it takes 56 (16d6) acid damage at the start of each of the tarrasque's turns.\nIf the tarrasque takes 60 damage or more on a single turn from a creature inside it, the tarrasque must succeed on a DC 20 Constitution saving throw at the end of that turn or regurgitate all swallowed creatures, which fall prone in a space within 10 feet of the tarrasque. If the tarrasque dies, a swallowed creature is no longer restrained by it and can escape from the corpse by using 30 feet of movement, exiting prone."
      }
    ]
  },
  {
    "index": "thug",
    "name": "Thug",
    "size": "Medium",
    "type": "humanoid",
    "alignment": "any non-good alignment",
    "armor_class": 11,
    "hit_points": 32,
    "hit_dice": "5d8",
    "speed": "30 ft.",
    "challenge_rating": 0.5,
    "proficiency_bonus": 2,
    "xp": 100,
    "dexterity": 11,
    "passive_perception": 10,
    "languages": "any one language (usually Common)",
    "damage_resistances": [],
    "damage_immunities": [],
    "condition_immunities": [],
    "actions": [
      {
        "name": "Multiattack",
        "description": "The thug makes two melee attacks."
      },
      {
        "name": "Mace",
        "description": "Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 5 (1d6 + 2) bludgeoning damage."
      },
      {
        "name": "Heavy Crossbow",
        "description": "Ranged Weapon Attack: +2 to hit, range 100/400 ft., one target. Hit: 5 (1d10) piercing damage."
      }
    ]
  },
  {
    "index": "tiger",
    "name": "Tiger",
    "size": "Large",
    "type": "beast",
    "alignment": "unaligned",
    "armor_class": 12,
    "hit_points": 37,
    "hit_dice": "5d10",
    "speed": "40 ft.",
    "challenge_rating": 1,
    "proficiency_bonus": 2,
    "xp": 200,
    "dexterity": 15,
    "passive_perception": 13,
    "languages": "",
    "damage_resistances": [],
    "damage_immunities": [],
    "condition_immunities": [],
    "actions": [
      {
        "name": "Bite",
        "description": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 8 (1d10 + 3) piercing damage."
      },
      {
        "name": "Claw",
        "description": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 7 (1d8 + 3) slashing damage."
      }
    ]
  },
  {
    "index": "treant",
    "name": "Treant",
    "size": "Huge",
    "type": "plant",
    "alignment": "chaotic good",
    "armor_class": 16,
    "hit_points": 138,
    "hit_dice": "12d12",
    "speed": "30 ft.",
    "challenge_rating": 9,
    "proficiency_bonus": 4,
    "xp": 5000,
    "dexterity": 8,
    "passive_perception": 13,
    "languages": "Common, Druidic, Elvish, Sylvan",
    "damage_resistances": [
      "bludgeoning",
      "piercing"
    ],
    "damage_immunities": [],
    "condition_immunities": [],
    "actions": [
      {
        "name": "Multiattack",
        "description": "The treant makes two slam attacks."
      },
      {
        "name": "Slam",
        "description": "Melee Weapon Attack: +10 to hit, reach 5 ft., one target. Hit: 16 (3d6 + 6) bludgeoning damage."
      },
      {
        "name": "Rock",
        "description": "Ranged Weapon Attack: +10 to hit, range 60/180 ft., one target. Hit: 28 (4d10 + 6) bludgeoning damage."
      },
      {
        "name": "Animate Trees",
        "description": "The treant magically animates one or two trees it can see within 60 feet of it. These trees have the same statistics as a treant, except they have Intelligence and Charisma scores of 1, they can't speak, and they have only the Slam action option. An animated tree acts as an ally of the treant. The tree remains animate for 1 day or until it dies; until the treant dies or is more than 120 feet from the tree; or until the treant takes a bonus action to turn it back into an inanimate tree. The tree then takes root if possible."
      }
    ]
  },
  {
    "index": "tribal-warrior",
    "name": "Tribal Warrior",
    "size": "Medium",
    "type": "humanoid",
    "alignment": "any alignment",
    "armor_class": 12,
    "hit_points": 11,
    "hit_dice": "2d8",
    "speed": "30 ft.",
    "challenge_rating": 0.125,
    "proficiency_bonus": 2,
    "xp": 25,
    "dexterity": 11,
    "passive_perception": 10,
    "languages": "any one language",
    "damage_resistances": [],
    "damage_immunities": [],
    "condition_immunities": [],
    "actions": [
      {
        "name": "Spear",
        "description": "Melee or Ranged Weapon Attack: +3 to hit, reach 5 ft. or range 20/60 ft., one target. Hit: 4 (1d6 + 1) piercing damage, or 5 (1d8 + 1) piercing damage if used with two hands to make a melee attack."
      }
    ]
  },
  {
    "index": "triceratops",
    "name": "Triceratops",
    "size": "Huge",
    "type": "beast",
    "alignment": "unaligned",
    "armor_class": 13,
    "hit_points": 95,
    "hit_dice": "10d12",
    "speed": "50 ft.",
    "challenge_rating": 5,
    "proficiency_bonus": 3,
    "xp": 1800,
    "dexterity": 9,
    "passive_perception": 10,
    "languages": "",
    "damage_resistances": [],
    "damage_immunities": [],
    "condition_immunities": [],
    "actions": [
      {
        "name": "Gore",
        "description": "Melee Weapon Attack: +9 to hit, reach 5 ft., one target. Hit: 24 (4d8 + 6) piercing damage."
      },
      {
        "name": "Stomp",
        "description": "Melee Weapon Attack: +9 to hit, reach 5 ft., one prone creature. Hit: 22 (3d10 + 6) bludgeoning damage"
      }
    ]
  },
  {
    "index": "troll",
    "name": "Troll",
    "size": "Large",
    "type": "giant",
    "alignment": "chaotic evil",
    "armor_class": 15,
    "hit_points": 84,
    "hit_dice": "8d10",
    "speed": "30 ft.",
    "challenge_rating": 5,
    "proficiency_bonus": 3,
    "xp": 1800,
    "dexterity": 13,
    "passive_perception": 12,
    "languages": "Giant",
    "damage_resistances": [],
    "damage_immunities": [],
    "condition_immunities": [],
    "actions": [
      {
        "name": "Multiattack",
        "description": "The troll makes three attacks: one with its bite and two with its claws."
      },
      {
        "name": "Bite",
        "description": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 7 (1d6 + 4) piercing damage."
      },
      {
        "name": "Claw",
        "description": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 11 (2d6 + 4) slashing damage."
      }
    ]
  },
  {
    "index": "tyrannosaurus-rex",
    "name": "Tyrannosaurus Rex",
    "size": "Huge",
    "type": "beast",
    "alignment": "unaligned",
    "armor_class": 13,
    "hit_points": 136,
    "hit_dice": "13d12",
    "speed": "50 ft.",
    "challenge_rating": 8,
    "proficiency_bonus": 3,
    "xp": 3900,
    "dexterity": 10,
    "passive_perception": 14,
    "languages": "",
    "damage_resistances": [],
    "damage_immunities": [],
    "condition_immunities": [],
    "actions": [
      {
        "name": "Multiattack",
        "description": "The tyrannosaurus makes two attacks: one with its bite and one with its tail. It can't make both attacks against the same target."
      },
      {
        "name": "Bite",
        "description": "Melee Weapon Attack: +10 to hit, reach 10 ft., one target. Hit: 33 (4d12 + 7) piercing damage. If the target is a Medium or smaller creature, it is grappled (escape DC 17). Until this grapple ends, the target is restrained, and the tyrannosaurus can't bite another target."
      },
      {
        "name": "Tail",
        "description": "Melee Weapon Attack: +10 to hit, reach 10 ft., one target. Hit: 20 (3d8 + 7) bludgeoning damage."
      }
    ]
  },
  {
    "index": "unicorn",
    "name": "Unicorn",
    "size": "Large",
    "type": "celestial",
    "alignment": "lawful good",
    "armor_class": 12,
    "hit_points": 67,
    "hit_dice": "9d10",
    "speed": "50 ft.",
    "challenge_rating": 5,
    "proficiency_bonus": 3,
    "xp": 1800,
    "dexterity": 14,
    "passive_perception": 13,
    "languages": "Celestial, Elvish, Sylvan, telepathy 60 ft.",
    "damage_resistances": [],
    "damage_immunities": [
      "poison"
    ],
    "condition_immunities": [
      "Charmed",
      "Paralyzed",
      "Poisoned"
    ],
    "actions": [
      {
        "name": "Multiattack",
        "description": "The unicorn makes two attacks: one with its hooves and one with its horn."
      },
      {
        "name": "Hooves",
        "description": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 11 (2d6 + 4) bludgeoning damage."
      },
      {
        "name": "Horn",
        "description": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 8 (1d8 + 4) piercing damage."
      },
      {
        "name": "Healing Touch",
        "description": "The unicorn touches another creature with its horn. The target magically regains 11 (2d8 + 2) hit points. In addition, the touch removes all diseases and neutralizes all poisons afflicting the target."
      },
      {
        "name": "Teleport",
        "description": "The unicorn magically teleports itself and up to three willing creatures it can see within 5 ft. of it, along with any equipment they are wearing or carrying, to a location the unicorn is familiar with, up to 1 mile away."
      }
    ]
  },
  {
    "index": "vampire-spawn",
    "name": "Vampire Spawn",
    "size": "Medium",
    "type": "undead",
    "alignment": "neutral evil",
    "armor_class": 15,
    "hit_points": 82,
    "hit_dice": "11d8",
    "speed": "30 ft.",
    "challenge_rating": 5,
    "proficiency_bonus": 3,
    "xp": 1800,
    "dexterity": 16,
    "passive_perception": 13,
    "languages": "the languages it knew in life",
    "damage_resistances": [
      "necrotic",
      "bludgeoning, piercing, and slashing from nonmagical weapons"
    ],
    "damage_immunities": [],
    "condition_immunities": [],
    "actions": [
      {
        "name": "Multiattack",
        "description": "The vampire makes two attacks, only one of which can be a bite attack."
      },
      {
        "name": "Bite",
        "description": "Melee Weapon Attack: +6 to hit, reach 5 ft., one willing creature, or a creature that is grappled by the vampire, incapacitated, or restrained. Hit: 6 (1d6 + 3) piercing damage plus 7 (2d6) necrotic damage. The target's hit point maximum is reduced by an amount equal to the necrotic damage taken, and the vampire regains hit points equal to that amount. The reduction lasts until the target finishes a long rest. The target dies if this effect reduces its hit point maximum to 0."
      },
      {
        "name": "Claws",
        "description": "Melee Weapon Attack: +6 to hit, reach 5 ft., one creature. Hit: 8 (2d4 + 3) slashing damage. Instead of dealing damage, the vampire can grapple the target (escape DC 13)."
      }
    ]
  },
  {
    "index": "vampire-bat",
    "name": "Vampire, Bat Form",
    "size": "Medium",
    "type": "undead",
    "alignment": "lawful evil",
    "armor_class": 16,
    "hit_points": 144,
    "hit_dice": "17d8",
    "speed": "5 ft.",
    "challenge_rating": 13,
    "proficiency_bonus": 5,
    "xp": 10000,
    "dexterity": 18,
    "passive_perception": 17,
    "languages": "the languages it knew in life",
    "damage_resistances": [
      "necrotic",
      "bludgeoning, piercing, and slashing from nonmagical weapons"
    ],
    "damage_immunities": [],
    "condition_immunities": [],
    "actions": [
      {
        "name": "Bite",
        "description": "Melee Weapon Attack: +9 to hit, reach 5 ft., one willing creature, or a creature that is grappled by the vampire, incapacitated, or restrained. Hit: 7 (1d6 + 4) piercing damage plus 10 (3d6) necrotic damage. The target's hit point maximum is reduced by an amount equal to the necrotic damage taken, and the vampire regains hit points equal to that amount. The reduction lasts until the target finishes a long rest. The target dies if this effect reduces its hit point maximum to 0. A humanoid slain in this way and then buried in the ground rises the following night as a vampire spawn under the vampire's control."
      },
      {
        "name": "Charm",
        "description": "The vampire targets one humanoid it can see within 30 ft. of it. If the target can see the vampire, the target must succeed on a DC 17 Wisdom saving throw against this magic or be charmed by the vampire. The charmed target regards the vampire as a trusted friend to be heeded and protected. Although the target isn't under the vampire's control, it takes the vampire's requests or actions in the most favorable way it can, and it is a willing target for the vampire's bit attack.\nEach time the vampire or the vampire's companions do anything harmful to the target, it can repeat the saving throw, ending the effect on itself on a success. Otherwise, the effect lasts 24 hours or until the vampire is destroyed, is on a different plane of existence than the target, or takes a bonus action to end the effect."
      },
      {
        "name": "Children of the Night",
        "description": "The vampire magically calls 2d4 swarms of bats or rats, provided that the sun isn't up. While outdoors, the vampire can call 3d6 wolves instead. The called creatures arrive in 1d4 rounds, acting as allies of the vampire and obeying its spoken commands. The beasts remain for 1 hour, until the vampire dies, or until the vampire dismisses them as a bonus action."
      }
    ]
  },
  {
    "index": "vampire-mist",
    "name": "Vampire, Mist Form",
    "size": "Medium",
    "type": "undead",
    "alignment": "lawful evil",
    "armor_class": 16,
    "hit_points": 144,
    "hit_dice": "17d8",
    "speed": "30 ft.",
    "challenge_rating": 13,
    "proficiency_bonus": 5,
    "xp": 10000,
    "dexterity": 18,
    "passive_perception": 17,
    "languages": "the languages it knew in life",
    "damage_resistances": [
      "necrotic",
      "bludgeoning, piercing, and slashing from nonmagical weapons"
    ],
    "damage_immunities": [],
    "condition_immunities": [],
    "actions": []
  },
  {
    "index": "vampire-vampire",
    "name": "Vampire, Vampire Form",
    "size": "Medium",
    "type": "undead",
    "alignment": "lawful evil",
    "armor_class": 16,
    "hit_points": 144,
    "hit_dice": "17d8",
    "speed": "30 ft.",
    "challenge_rating": 13,
    "proficiency_bonus": 5,
    "xp": 10000,
    "dexterity": 18,
    "passive_perception": 17,
    "languages": "the languages it knew in life",
    "damage_resistances": [
      "necrotic",
      "bludgeoning, piercing, and slashing from nonmagical weapons"
    ],
    "damage_immunities": [],
    "condition_immunities": [],
    "actions": [
      {
        "name": "Multiattack",
        "description": "The vampire makes two attacks, only one of which can be a bite attack."
      },
      {
        "name": "Unarmed Strike",
        "description": "Melee Weapon Attack: +9 to hit, reach 5 ft., one creature. Hit: 8 (1d8 + 4) bludgeoning damage. Instead of dealing damage, the vampire can grapple the target (escape DC 18)."
      },
      {
        "name": "Bite",
        "description": "Melee Weapon Attack: +9 to hit, reach 5 ft., one willing creature, or a creature that is grappled by the vampire, incapacitated, or restrained. Hit: 7 (1d6 + 4) piercing damage plus 10 (3d6) necrotic damage. The target's hit point maximum is reduced by an amount equal to the necrotic damage taken, and the vampire regains hit points equal to that amount. The reduction lasts until the target finishes a long rest. The target dies if this effect reduces its hit point maximum to 0. A humanoid slain in this way and then buried in the ground rises the following night as a vampire spawn under the vampire's control."
      },
      {
        "name": "Charm",
        "description": "The vampire targets one humanoid it can see within 30 ft. of it. If the target can see the vampire, the target must succeed on a DC 17 Wisdom saving throw against this magic or be charmed by the vampire. The charmed target regards the vampire as a trusted friend to be heeded and protected. Although the target isn't under the vampire's control, it takes the vampire's requests or actions in the most favorable way it can, and it is a willing target for the vampire's bit attack.\nEach time the vampire or the vampire's companions do anything harmful to the target, it can repeat the saving throw, ending the effect on itself on a success. Otherwise, the effect lasts 24 hours or until the vampire is destroyed, is on a different plane of existence than the target, or takes a bonus action to end the effect."
      },
      {
        "name": "Children of the Night",
        "description": "The vampire magically calls 2d4 swarms of bats or rats, provided that the sun isn't up. While outdoors, the vampire can call 3d6 wolves instead. The called creatures arrive in 1d4 rounds, acting as allies of the vampire and obeying its spoken commands. The beasts remain for 1 hour, until the vampire dies, or until the vampire dismisses them as a bonus action."
      }
    ]
  },
  {
    "index": "veteran",
    "name": "Veteran",
    "size": "Medium",
    "type": "humanoid",
    "alignment": "any alignment",
    "armor_class": 17,
    "hit_points": 58,
    "hit_dice": "9d8",
    "speed": "30 ft.",
    "challenge_rating": 3,
    "proficiency_bonus": 2,
    "xp": 700,
    "dexterity": 13,
    "passive_perception": 12,
    "languages": "any one language (usually Common)",
    "damage_resistances": [],
    "damage_immunities": [],
    "condition_immunities": [],
    "actions": [
      {
        "name": "Multiattack",
        "description": "The veteran makes two longsword attacks. If it has a shortsword drawn, it can also make a shortsword attack."
      },
      {
        "name": "Longsword",
        "description": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 7 (1d8 + 3) slashing damage, or 8 (1d10 + 3) slashing damage if used with two hands."
      },
      {
        "name": "Shortsword",
        "description": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 6 (1d6 + 3) piercing damage."
      },
      {
        "name": "Heavy Crossbow",
        "description": "Ranged Weapon Attack: +3 to hit, range 100/400 ft., one target. Hit: 6 (1d10 + 1) piercing damage."
      }
    ]
  },
  {
    "index": "violet-fungus",
    "name": "Violet Fungus",
    "size": "Medium",
    "type": "plant",
    "alignment": "unaligned",
    "armor_class": 5,
    "hit_points": 18,
    "hit_dice": "4d8",
    "speed": "5 ft.",
    "challenge_rating": 0.25,
    "proficiency_bonus": 2,
    "xp": 50,
    "dexterity": 1,
    "passive_perception": 6,
    "languages": "",
    "damage_resistances": [],
    "damage_immunities": [],
    "condition_immunities": [
      "Blinded",
      "Blinded",
      "Frightened"
    ],
    "actions": [
      {
        "name": "Multiattack",
        "description": "The fungus makes 1d4 Rotting Touch attacks."
      },
      {
        "name": "Rotting Touch",
        "description": "Melee Weapon Attack: +2 to hit, reach 10 ft., one creature. Hit: 4 (1d8) necrotic damage."
      }
    ]
  },
  {
    "index": "vrock",
    "name": "Vrock",
    "size": "Large",
    "type": "fiend",
    "alignment": "chaotic evil",
    "armor_class": 15,
    "hit_points": 104,
    "hit_dice": "11d10",
    "speed": "40 ft.",
    "challenge_rating": 6,
    "proficiency_bonus": 3,
    "xp": 2300,
    "dexterity": 15,
    "passive_perception": 11,
    "languages": "Abyssal, telepathy 120 ft.",
    "damage_resistances": [
      "cold",
      "fire",
      "lightning",
      "bludgeoning, piercing, and slashing from nonmagical weapons"
    ],
    "damage_immunities": [
      "poison"
    ],
    "condition_immunities": [
      "Poisoned"
    ],
    "actions": [
      {
        "name": "Multiattack",
        "description": "The vrock makes two attacks: one with its beak and one with its talons."
      },
      {
        "name": "Beak",
        "description": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 10 (2d6 + 3) piercing damage."
      },
      {
        "name": "Talons",
        "description": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 14 (2d10 + 3) slashing damage."
      },
      {
        "name": "Spores",
        "description": "A 15-foot-radius cloud of toxic spores extends out from the vrock. The spores spread around corners. Each creature in that area must succeed on a DC 14 Constitution saving throw or become poisoned. While poisoned in this way, a target takes 5 (1d10) poison damage at the start of each of its turns. A target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. Emptying a vial of holy water on the target also ends the effect on it."
      },
      {
        "name": "Stunning Screech",
        "description": "The vrock emits a horrific screech. Each creature within 20 feet of it that can hear it and that isn't a demon must succeed on a DC 14 Constitution saving throw or be stunned until the end of the vrock's next turn ."
      }
    ]
  },
  {
    "index": "vulture",
    "name": "Vulture",
    "size": "Medium",
    "type": "beast",
    "alignment": "unaligned",
    "armor_class": 10,
    "hit_points": 5,
    "hit_dice": "1d8",
    "speed": "10 ft.",
    "challenge_rating": 0,
    "proficiency_bonus": 2,
    "xp": 10,
    "dexterity": 10,
    "passive_perception": 13,
    "languages": "",
    "damage_resistances": [],
    "damage_immunities": [],
    "condition_immunities": [],
    "actions": [
      {
        "name": "Beak",
        "description": "Melee Weapon Attack: +2 to hit, reach 5 ft., one target. Hit: 2 (1d4) piercing damage."
      }
    ]
  },
  {
    "index": "warhorse",
    "name": "Warhorse",
    "size": "Large",
    "type": "beast",
    "alignment": "unaligned",
    "armor_class": 11,
    "hit_points": 19,
    "hit_dice": "3d10",
    "speed": "60 ft.",
    "challenge_rating": 0.5,
    "proficiency_bonus": 2,
    "xp": 100,
    "dexterity": 12,
    "passive_perception": 11,
    "languages": "",
    "damage_resistances": [],
    "damage_immunities": [],
    "condition_immunities": [],
    "actions": [
      {
        "name": "Hooves",
        "description": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 11 (2d6 + 4) bludgeoning damage."
      }
    ]
  },
  {
    "index": "warhorse-skeleton",
    "name": "Warhorse Skeleton",
    "size": "Large",
    "type": "undead",
    "alignment": "lawful evil",
    "armor_class": 13,
    "hit_points": 22,
    "hit_dice": "3d10",
    "speed": "60 ft.",
    "challenge_rating": 0.5,
    "proficiency_bonus": 2,
    "xp": 100,
    "dexterity": 12,
    "passive_perception": 9,
    "languages": "",
    "damage_resistances": [],
    "damage_immunities": [
      "poison"
    ],
    "condition_immunities": [
      "Exhaustion",
      "Poisoned"
    ],
    "actions": [
      {
        "name": "Hooves",
        "description": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 11 (2d6 + 4) bludgeoning damage."
      }
    ]
  },
  {
    "index": "water-elemental",
    "name": "Water Elemental",
    "size": "Large",
    "type": "elemental",
    "alignment": "neutral",
    "armor_class": 14,
    "hit_points": 114,
    "hit_dice": "12d10",
    "speed": "30 ft.",
    "challenge_rating": 5,
    "proficiency_bonus": 3,
    "xp": 1800,
    "dexterity": 14,
    "passive_perception": 10,
    "languages": "Aquan",
    "damage_resistances": [
      "acid",
      "bludgeoning, piercing, and slashing from nonmagical weapons"
    ],
    "damage_immunities": [
      "poison"
    ],
    "condition_immunities": [
      "Exhaustion",
      "Grappled",
      "Paralyzed",
      "Petrified",
      "Poisoned",
      "Prone",
      "Restrained",
      "Unconscious"
    ],
    "actions": [
      {
        "name": "Multiattack",
        "description": "The elemental makes two slam attacks."
      },
      {
        "name": "Slam",
        "description": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 13 (2d8 + 4) bludgeoning damage."
      },
      {
        "name": "Whelm",
        "description": "Each creature in the elemental's space must make a DC 15 Strength saving throw. On a failure, a target takes 13 (2d8 + 4) bludgeoning damage. If it is Large or smaller, it is also grappled (escape DC 14). Until this grapple ends, the target is restrained and unable to breathe unless it can breathe water. If the saving throw is successful, the target is pushed out of the elemental's space.\nThe elemental can grapple one Large creature or up to two Medium or smaller creatures at one time. At the start of each of the elemental's turns, each target grappled by it takes 13 (2d8 + 4) bludgeoning damage. A creature within 5 feet of the elemental can pull a creature or object out of it by taking an action to make a DC 14 Strength and succeeding."
      }
    ]
  },
  {
    "index": "weasel",
    "name": "Weasel",
    "size": "Tiny",
    "type": "beast",
    "alignment": "unaligned",
    "armor_class": 13,
    "hit_points": 1,
    "hit_dice": "1d4",
    "speed": "30 ft.",
    "challenge_rating": 0,
    "proficiency_bonus": 2,
    "xp": 10,
    "dexterity": 16,
    "passive_perception": 13,
    "languages": "",
    "damage_resistances": [],
    "damage_immunities": [],
    "condition_immunities": [],
    "actions": [
      {
        "name": "Bite",
        "description": "Melee Weapon Attack: +5 to hit, reach 5 ft., one creature. Hit: 1 piercing damage."
      }
    ]
  },
  {
    "index": "werebear-bear",
    "name": "Werebear, Bear Form",
    "size": "Medium",
    "type": "humanoid",
    "alignment": "neutral good",
    "armor_class": 11,
    "hit_points": 135,
    "hit_dice": "18d8",
    "speed": "40 ft.",
    "challenge_rating": 5,
    "proficiency_bonus": 3,
    "xp": 1800,
    "dexterity": 10,
    "passive_perception": 17,
    "languages": "",
    "damage_resistances": [],
    "damage_immunities": [
      "bludgeoning, piercing, and slashing from nonmagical weapons that aren't silvered"
    ],
    "condition_immunities": [],
    "actions": [
      {
        "name": "Multiattack",
        "description": "In bear form, the werebear makes two claw attacks. In humanoid form, it makes two greataxe attacks. In hybrid form, it can attack like a bear or a humanoid."
      },
      {
        "name": "Bite",
        "description": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 15 (2d10 + 4) piercing damage. If the target is a humanoid, it must succeed on a DC 14 Constitution saving throw or be cursed with werebear lycanthropy."
      },
      {
        "name": "Claw",
        "description": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 13 (2d8 + 4) slashing damage."
      }
    ]
  },
  {
    "index": "werebear-human",
    "name": "Werebear, Human Form",
    "size": "Medium",
    "type": "humanoid",
    "alignment": "neutral good",
    "armor_class": 10,
    "hit_points": 135,
    "hit_dice": "18d8",
    "speed": "30 ft.",
    "challenge_rating": 5,
    "proficiency_bonus": 3,
    "xp": 1800,
    "dexterity": 10,
    "passive_perception": 17,
    "languages": "Common",
    "damage_resistances": [],
    "damage_immunities": [
      "bludgeoning, piercing, and slashing from nonmagical weapons that aren't silvered"
    ],
    "condition_immunities": [],
    "actions": [
      {
        "name": "Multiattack",
        "description": "In bear form, the werebear makes two claw attacks. In humanoid form, it makes two greataxe attacks. In hybrid form, it can attack like a bear or a humanoid."
      },
      {
        "name": "Greataxe",
        "description": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 10 (1d12 + 4) slashing damage."
      }
    ]
  },
  {
    "index": "werebear-hybrid",
    "name": "Werebear, Hybrid Form",
    "size": "Medium",
    "type": "humanoid",
    "alignment": "neutral good",
    "armor_class": 11,
    "hit_points": 135,
    "hit_dice": "18d8",
    "speed": "40 ft.",
    "challenge_rating": 5,
    "proficiency_bonus": 3,
    "xp": 1800,
    "dexterity": 10,
    "passive_perception": 17,
    "languages": "Common",
    "damage_resistances": [],
    "damage_immunities": [
      "bludgeoning, piercing, and slashing from nonmagical weapons that aren't silvered"
    ],
    "condition_immunities": [],
    "actions": [
      {
        "name": "Multiattack",
        "description": "In bear form, the werebear makes two claw attacks. In humanoid form, it makes two greataxe attacks. In hybrid form, it can attack like a bear or a humanoid."
      },
      {
        "name": "Bite",
        "description": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 15 (2d10 + 4) piercing damage. If the target is a humanoid, it must succeed on a DC 14 Constitution saving throw or be cursed with werebear lycanthropy."
      },
      {
        "name": "Claw",
        "description": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 13 (2d8 + 4) slashing damage."
      },
      {
        "name": "Greataxe",
        "description": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 10 (1d12 + 4) slashing damage."
      }
    ]
  },
  {
    "index": "wereboar-boar",
    "name": "Wereboar, Boar Form",
    "size": "Medium",
    "type": "humanoid",
    "alignment": "neutral evil",
    "armor_class": 11,
    "hit_points": 78,
    "hit_dice": "12d8",
    "speed": "40 ft.",
    "challenge_rating": 4,
    "proficiency_bonus": 2,
    "xp": 1100,
    "dexterity": 10,
    "passive_perception": 12,
    "languages": "",
    "damage_resistances": [],
    "damage_immunities": [
      "bludgeoning, piercing, and slashing from nonmagical weapons that aren't silvered"
    ],
    "condition_immunities": [],
    "actions": [
      {
        "name": "Tusks",
        "description": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 10 (2d6 + 3) slashing damage. If the target is a humanoid, it must succeed on a DC 12 Constitution saving throw or be cursed with wereboar lycanthropy."
      }
    ]
  },
  {
    "index": "wereboar-human",
    "name": "Wereboar, Human Form",
    "size": "Medium",
    "type": "humanoid",
    "alignment": "neutral evil",
    "armor_class": 10,
    "hit_points": 78,
    "hit_dice": "12d8",
    "speed": "30 ft.",
    "challenge_rating": 4,
    "proficiency_bonus": 2,
    "xp": 1100,
    "dexterity": 10,
    "passive_perception": 12,
    "languages": "Common (can't speak in boar form)",
    "damage_resistances": [],
    "damage_immunities": [
      "bludgeoning, piercing, and slashing from nonmagical weapons that aren't silvered"
    ],
    "condition_immunities": [],
    "actions": [
      {
        "name": "Multiattack",
        "description": "The wereboar makes two attacks, only one of which can be with its tusks."
      },
      {
        "name": "Maul",
        "description": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 10 (2d6 + 3) bludgeoning damage."
      }
    ]
  },
  {
    "index": "wereboar-hybrid",
    "name": "Wereboar, Hybrid Form",
    "size": "Medium",
    "type": "humanoid",
    "alignment": "neutral evil",
    "armor_class": 11,
    "hit_points": 78,
    "hit_dice": "12d8",
    "speed": "30 ft.",
    "challenge_rating": 4,
    "proficiency_bonus": 2,
    "xp": 1100,
    "dexterity": 10,
    "passive_perception": 12,
    "languages": "Common",
    "damage_resistances": [],
    "damage_immunities": [
      "bludgeoning, piercing, and slashing from nonmagical weapons that aren't silvered"
    ],
    "condition_immunities": [],
    "actions": [
      {
        "name": "Multiattack",
        "description": "The wereboar makes two attacks, only one of which can be with its tusks."
      },
      {
        "name": "Maul",
        "description": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 10 (2d6 + 3) bludgeoning damage."
      },
      {
        "name": "Tusks",
        "description": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 10 (2d6 + 3) slashing damage. If the target is a humanoid, it must succeed on a DC 12 Constitution saving throw or be cursed with wereboar lycanthropy."
      }
    ]
  },
  {
    "index": "wererat-human",
    "name": "Wererat, Human Form",
    "size": "Medium",
    "type": "humanoid",
    "alignment": "lawful evil",
    "armor_class": 12,
    "hit_points": 33,
    "hit_dice": "6d8",
    "speed": "30 ft.",
    "challenge_rating": 2,
    "proficiency_bonus": 2,
    "xp": 450,
    "dexterity": 15,
    "passive_perception": 12,
    "languages": "Common",
    "damage_resistances": [],
    "damage_immunities": [
      "bludgeoning, piercing, and slashing from nonmagical weapons that aren't silvered"
    ],
    "condition_immunities": [],
    "actions": [
      {
        "name": "Multiattack",
        "description": "The wererat makes two attacks, only one of which can be a bite."
      },
      {
        "name": "Shortsword",
        "description": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6 + 2) piercing damage."
      },
      {
        "name": "Hand Crossbow",
        "description": "Ranged Weapon Attack: +4 to hit, range 30/120 ft., one target. Hit: 5 (1d6 + 2) piercing damage."
      }
    ]
  },
  {
    "index": "wererat-hybrid",
    "name": "Wererat, Hybrid Form",
    "size": "Medium",
    "type": "humanoid",
    "alignment": "lawful evil",
    "armor_class": 12,
    "hit_points": 33,
    "hit_dice": "6d8",
    "speed": "30 ft.",
    "challenge_rating": 2,
    "proficiency_bonus": 2,
    "xp": 450,
    "dexterity": 15,
    "passive_perception": 12,
    "languages": "Common",
    "damage_resistances": [],
    "damage_immunities": [
      "bludgeoning, piercing, and slashing from nonmagical weapons that aren't silvered"
    ],
    "condition_immunities": [],
    "actions": [
      {
        "name": "Multiattack",
        "description": "The wererat makes two attacks, only one of which can be a bite."
      },
      {
        "name": "Bite",
        "description": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 4 (1d4 + 2) piercing damage. If the target is a humanoid, it must succeed on a DC 11 Constitution saving throw or be cursed with wererat lycanthropy."
      },
      {
        "name": "Shortsword",
        "description": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6 + 2) piercing damage."
      },
      {
        "name": "Hand Crossbow",
        "description": "Ranged Weapon Attack: +4 to hit, range 30/120 ft., one target. Hit: 5 (1d6 + 2) piercing damage."
      }
    ]
  },
  {
    "index": "wererat-rat",
    "name": "Wererat, Rat Form",
    "size": "Medium",
    "type": "humanoid",
    "alignment": "lawful evil",
    "armor_class": 12,
    "hit_points": 33,
    "hit_dice": "6d8",
    "speed": "30 ft.",
    "challenge_rating": 2,
    "proficiency_bonus": 2,
    "xp": 450,
    "dexterity": 15,
    "passive_perception": 12,
    "languages": "",
    "damage_resistances": [],
    "damage_immunities": [
      "bludgeoning, piercing, and slashing from nonmagical weapons that aren't silvered"
    ],
    "condition_immunities": [],
    "actions": [
      {
        "name": "Bite",
        "description": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 4 (1d4 + 2) piercing damage. If the target is a humanoid, it must succeed on a DC 11 Constitution saving throw or be cursed with wererat lycanthropy."
      }
    ]
  },
  {
    "index": "weretiger-human",
    "name": "Weretiger, Human Form",
    "size": "Medium",
    "type": "humanoid",
    "alignment": "neutral",
    "armor_class": 12,
    "hit_points": 120,
    "hit_dice": "16d8",
    "speed": "30 ft.",
    "challenge_rating": 4,
    "proficiency_bonus": 2,
    "xp": 1100,
    "dexterity": 15,
    "passive_perception": 15,
    "languages": "Common",
    "damage_resistances": [],
    "damage_immunities": [
      "bludgeoning, piercing, and slashing from nonmagical weapons that aren't silvered"
    ],
    "condition_immunities": [],
    "actions": [
      {
        "name": "Multiattack",
        "description": "In humanoid form, the weretiger makes two scimitar attacks or two longbow attacks. In hybrid form, it can attack like a humanoid or make two claw attacks."
      },
      {
        "name": "Scimitar",
        "description": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 6 (1d6 + 3) slashing damage."
      },
      {
        "name": "Longbow",
        "description": "Ranged Weapon Attack: +4 to hit, range 150/600 ft., one target. Hit: 6 (1d8 + 2) piercing damage."
      }
    ]
  },
  {
    "index": "weretiger-hybrid",
    "name": "Weretiger, Hybrid Form",
    "size": "Medium",
    "type": "humanoid",
    "alignment": "neutral",
    "armor_class": 12,
    "hit_points": 120,
    "hit_dice": "16d8",
    "speed": "30 ft.",
    "challenge_rating": 4,
    "proficiency_bonus": 2,
    "xp": 1100,
    "dexterity": 15,
    "passive_perception": 15,
    "languages": "Common",
    "damage_resistances": [],
    "damage_immunities": [
      "bludgeoning, piercing, and slashing from nonmagical weapons that aren't silvered"
    ],
    "condition_immunities": [],
    "actions": [
      {
        "name": "Multiattack",
        "description": "In humanoid form, the weretiger makes two scimitar attacks or two longbow attacks. In hybrid form, it can attack like a humanoid or make two claw attacks."
      },
      {
        "name": "Bite",
        "description": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 8 (1d10 + 3) piercing damage. If the target is a humanoid, it must succeed on a DC 13 Constitution saving throw or be cursed with weretiger lycanthropy."
      },
      {
        "name": "Claw",
        "description": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 7 (1d8 + 3) slashing damage."
      },
      {
        "name": "Scimitar",
        "description": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 6 (1d6 + 3) slashing damage."
      },
      {
        "name": "Longbow",
        "description": "Ranged Weapon Attack: +4 to hit, range 150/600 ft., one target. Hit: 6 (1d8 + 2) piercing damage."
      }
    ]
  },
  {
    "index": "weretiger-tiger",
    "name": "Weretiger, Tiger Form",
    "size": "Medium",
    "type": "humanoid",
    "alignment": "neutral",
    "armor_class": 12,
    "hit_points": 120,
    "hit_dice": "16d8",
    "speed": "40 ft.",
    "challenge_rating": 4,
    "proficiency_bonus": 2,
    "xp": 1100,
    "dexterity": 15,
    "passive_perception": 15,
    "languages": "",
    "damage_resistances": [],
    "damage_immunities": [
      "bludgeoning, piercing, and slashing from nonmagical weapons that aren't silvered"
    ],
    "condition_immunities": [],
    "actions": [
      {
        "name": "Bite",
        "description": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 8 (1d10 + 3) piercing damage. If the target is a humanoid, it must succeed on a DC 13 Constitution saving throw or be cursed with weretiger lycanthropy."
      },
      {
        "name": "Claw",
        "description": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 7 (1d8 + 3) slashing damage."
      }
    ]
  },
  {
    "index": "werewolf-human",
    "name": "Werewolf, Human Form",
    "size": "Medium",
    "type": "humanoid",
    "alignment": "chaotic evil",
    "armor_class": 11,
    "hit_points": 58,
    "hit_dice": "9d8",
    "speed": "30 ft.",
    "challenge_rating": 3,
    "proficiency_bonus": 2,
    "xp": 700,
    "dexterity": 13,
    "passive_perception": 14,
    "languages": "Common",
    "damage_resistances": [],
    "damage_immunities": [
      "bludgeoning, piercing, and slashing from nonmagical weapons that aren't silvered"
    ],
    "condition_immunities": [],
    "actions": [
      {
        "name": "Multiattack",
        "description": "The werewolf makes two attacks: two with its spear (humanoid form) or one with its bite and one with its claws (hybrid form)."
      },
      {
        "name": "Spear",
        "description": "Melee or Ranged Weapon Attack: +4 to hit, reach 5 ft. or range 20/60 ft., one creature. Hit: 5 (1d6 + 2) piercing damage, or 6 (1d8 + 2) piercing damage if used with two hands to make a melee attack."
      }
    ]
  },
  {
    "index": "werewolf-hybrid",
    "name": "Werewolf, Hybrid Form",
    "size": "Medium",
    "type": "humanoid",
    "alignment": "chaotic evil",
    "armor_class": 12,
    "hit_points": 58,
    "hit_dice": "9d8",
    "speed": "30 ft.",
    "challenge_rating": 3,
    "proficiency_bonus": 2,
    "xp": 700,
    "dexterity": 13,
    "passive_perception": 14,
    "languages": "Common",
    "damage_resistances": [],
    "damage_immunities": [
      "bludgeoning, piercing, and slashing from nonmagical weapons that aren't silvered"
    ],
    "condition_immunities": [],
    "actions": [
      {
        "name": "Multiattack",
        "description": "The werewolf makes two attacks: two with its spear (humanoid form) or one with its bite and one with its claws (hybrid form)."
      },
      {
        "name": "Bite",
        "description": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 6 (1d8 + 2) piercing damage. If the target is a humanoid, it must succeed on a DC 12 Constitution saving throw or be cursed with werewolf lycanthropy."
      },
      {
        "name": "Claws",
        "description": "Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 7 (2d4 + 2) slashing damage."
      }
    ]
  },
  {
    "index": "werewolf-wolf",
    "name": "Werewolf, Wolf Form",
    "size": "Medium",
    "type": "humanoid",
    "alignment": "chaotic evil",
    "armor_class": 12,
    "hit_points": 58,
    "hit_dice": "9d8",
    "speed": "40 ft.",
    "challenge_rating": 3,
    "proficiency_bonus": 2,
    "xp": 700,
    "dexterity": 13,
    "passive_perception": 14,
    "languages": "",
    "damage_resistances": [],
    "damage_immunities": [
      "bludgeoning, piercing, and slashing from nonmagical weapons that aren't silvered"
    ],
    "condition_immunities": [],
    "actions": [
      {
        "name": "Bite",
        "description": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 6 (1d8 + 2) piercing damage. If the target is a humanoid, it must succeed on a DC 12 Constitution saving throw or be cursed with werewolf lycanthropy."
      }
    ]
  },
  {
    "index": "white-dragon-wyrmling",
    "name": "White Dragon Wyrmling",
    "size": "Medium",
    "type": "dragon",
    "alignment": "chaotic evil",
    "armor_class": 16,
    "hit_points": 32,
    "hit_dice": "5d8",
    "speed": "30 ft.",
    "challenge_rating": 2,
    "proficiency_bonus": 2,
    "xp": 450,
    "dexterity": 10,
    "passive_perception": 14,
    "languages": "Draconic",
    "damage_resistances": [],
    "damage_immunities": [
      "cold"
    ],
    "condition_immunities": [],
    "actions": [
      {
        "name": "Bite",
        "description": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 7 (1d10 + 2) piercing damage plus 2 (1d4) cold damage."
      },
      {
        "name": "Cold Breath",
        "description": "The dragon exhales an icy blast of hail in a 15-foot cone. Each creature in that area must make a DC 12 Constitution saving throw, taking 22 (5d8) cold damage on a failed save, or half as much damage on a successful one."
      }
    ]
  },
  {
    "index": "wight",
    "name": "Wight",
    "size": "Medium",
    "type": "undead",
    "alignment": "neutral evil",
    "armor_class": 14,
    "hit_points": 45,
    "hit_dice": "6d8",
    "speed": "30 ft.",
    "challenge_rating": 3,
    "proficiency_bonus": 2,
    "xp": 700,
    "dexterity": 14,
    "passive_perception": 13,
    "languages": "the languages it knew in life",
    "damage_resistances": [
      "necrotic",
      "bludgeoning, piercing, and slashing from nonmagical weapons that aren't silvered"
    ],
    "damage_immunities": [
      "poison"
    ],
    "condition_immunities": [
      "Exhaustion",
      "Poisoned"
    ],
    "actions": [
      {
        "name": "Multiattack",
        "description": "The wight makes two longsword attacks or two longbow attacks. It can use its Life Drain in place of one longsword attack."
      },
      {
        "name": "Life Drain",
        "description": "Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 5 (1d6 + 2) necrotic damage. The target must succeed on a DC 13 Constitution saving throw or its hit point maximum is reduced by an amount equal to the damage taken. This reduction lasts until the target finishes a long rest. The target dies if this effect reduces its hit point maximum to 0.\nA humanoid slain by this attack rises 24 hours later as a zombie under the wight's control, unless the humanoid is restored to life or its body is destroyed. The wight can have no more than twelve zombies under its control at one time."
      },
      {
        "name": "Longsword",
        "description": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 6 (1d8 + 2) slashing damage, or 7 (1d10 + 2) slashing damage if used with two hands."
      },
      {
        "name": "Longbow",
        "description": "Ranged Weapon Attack: +4 to hit, range 150/600 ft., one target. Hit: 6 (1d8 + 2) piercing damage."
      }
    ]
  },
  {
    "index": "will-o-wisp",
    "name": "Will-o'-Wisp",
    "size": "Tiny",
    "type": "undead",
    "alignment": "chaotic evil",
    "armor_class": 19,
    "hit_points": 22,
    "hit_dice": "9d4",
    "speed": "0 ft.",
    "challenge_rating": 2,
    "proficiency_bonus": 2,
    "xp": 450,
    "dexterity": 28,
    "passive_perception": 12,
    "languages": "the languages it knew in life",
    "damage_resistances": [
      "acid",
      "cold",
      "fire",
      "necrotic",
      "thunder",
      "bludgeoning, piercing, and slashing from nonmagical weapons"
    ],
    "damage_immunities": [
      "lightning",
      "poison"
    ],
    "condition_immunities": [
      "Exhaustion",
      "Grappled",
      "Paralyzed",
      "Poisoned",
      "Prone",
      "Restrained",
      "Unconscious"
    ],
    "actions": [
      {
        "name": "Shock",
        "description": "Melee Spell Attack: +4 to hit, reach 5 ft., one creature. Hit: 9 (2d8) lightning damage."
      },
      {
        "name": "Invisibility",
        "description": "The will-o'-wisp and its light magically become invisible until it attacks or uses its Consume Life, or until its concentration ends (as if concentrating on a spell)."
      }
    ]
  },
  {
    "index": "winter-wolf",
    "name": "Winter Wolf",
    "size": "Large",
    "type": "monstrosity",
    "alignment": "neutral evil",
    "armor_class": 13,
    "hit_points": 75,
    "hit_dice": "10d10",
    "speed": "50 ft.",
    "challenge_rating": 3,
    "proficiency_bonus": 2,
    "xp": 700,
    "dexterity": 13,
    "passive_perception": 15,
    "languages": "Common, Giant, Winter Wolf",
    "damage_resistances": [],
    "damage_immunities": [
      "cold"
    ],
    "condition_immunities": [],
    "actions": [
      {
        "name": "Bite",
        "description": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 11 (2d6 + 4) piercing damage. If the target is a creature, it must succeed on a DC 14 Strength saving throw or be knocked prone."
      },
      {
        "name": "Cold Breath",
        "description": "The wolf exhales a blast of freezing wind in a 15-foot cone. Each creature in that area must make a DC 12 Dexterity saving throw, taking 18 (4d8) cold damage on a failed save, or half as much damage on a successful one."
      }
    ]
  },
  {
    "index": "wolf",
    "name": "Wolf",
    "size": "Medium",
    "type": "beast",
    "alignment": "unaligned",
    "armor_class": 13,
    "hit_points": 11,
    "hit_dice": "2d8",
    "speed": "40 ft.",
    "challenge_rating": 0.25,
    "proficiency_bonus": 2,
    "xp": 50,
    "dexterity": 15,
    "passive_perception": 13,
    "languages": "",
    "damage_resistances": [],
    "damage_immunities": [],
    "condition_immunities": [],
    "actions": [
      {
        "name": "Bite",
        "description": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 7 (2d4 + 2) piercing damage. If the target is a creature, it must succeed on a DC 11 Strength saving throw or be knocked prone."
      }
    ]
  },
  {
    "index": "worg",
    "name": "Worg",
    "size": "Large",
    "type": "monstrosity",
    "alignment": "neutral evil",
    "armor_class": 13,
    "hit_points": 26,
    "hit_dice": "4d10",
    "speed": "50 ft.",
    "challenge_rating": 0.5,
    "proficiency_bonus": 2,
    "xp": 100,
    "dexterity": 13,
    "passive_perception": 14,
    "languages": "Goblin, Worg",
    "damage_resistances": [],
    "damage_immunities": [],
    "condition_immunities": [],
    "actions": [
      {
        "name": "Bite",
        "description": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 10 (2d6 + 3) piercing damage. If the target is a creature, it must succeed on a DC 13 Strength saving throw or be knocked prone."
      }
    ]
  },
  {
    "index": "wraith",
    "name": "Wraith",
    "size": "Medium",
    "type": "undead",
    "alignment": "neutral evil",
    "armor_class": 13,
    "hit_points": 67,
    "hit_dice": "9d8",
    "speed": "0 ft.",
    "challenge_rating": 5,
    "proficiency_bonus": 3,
    "xp": 1800,
    "dexterity": 16,
    "passive_perception": 12,
    "languages": "the languages it knew in life",
    "damage_resistances": [
      "acid",
      "cold",
      "fire",
      "lightning",
      "thunder",
      "bludgeoning, piercing, and slashing from nonmagical weapons that aren't silvered"
    ],
    "damage_immunities": [
      "necrotic",
      "poison"
    ],
    "condition_immunities": [
      "Charmed",
      "Exhaustion",
      "Grappled",
      "Paralyzed",
      "Petrified",
      "Poisoned",
      "Prone",
      "Restrained"
    ],
    "actions": [
      {
        "name": "Life Drain",
        "description": "Melee Weapon Attack: +6 to hit, reach 5 ft., one creature. Hit: 21 (4d8 + 3) necrotic damage. The target must succeed on a DC 14 Constitution saving throw or its hit point maximum is reduced by an amount equal to the damage taken. This reduction lasts until the target finishes a long rest. The target dies if this effect reduces its hit point maximum to 0."
      },
      {
        "name": "Create Specter",
        "description": "The wraith targets a humanoid within 10 feet of it that has been dead for no longer than 1 minute and died violently. The target's spirit rises as a specter in the space of its corpse or in the nearest unoccupied space. The specter is under the wraith's control. The wraith can have no more than seven specters under its control at one time."
      }
    ]
  },
  {
    "index": "wyvern",
    "name": "Wyvern",
    "size": "Large",
    "type": "dragon",
    "alignment": "unaligned",
    "armor_class": 13,
    "hit_points": 110,
    "hit_dice": "13d10",
    "speed": "20 ft.",
    "challenge_rating": 6,
    "proficiency_bonus": 3,
    "xp": 2300,
    "dexterity": 10,
    "passive_perception": 14,
    "languages": "",
    "damage_resistances": [],
    "damage_immunities": [],
    "condition_immunities": [],
    "actions": [
      {
        "name": "Multiattack",
        "description": "The wyvern makes two attacks: one with its bite and one with its stinger. While flying, it can use its claws in place of one other attack."
      },
      {
        "name": "Bite",
        "description": "Melee Weapon Attack: +7 to hit, reach 10 ft., one creature. Hit: 11 (2d6 + 4) piercing damage."
      },
      {
        "name": "Claws",
        "description": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 13 (2d8 + 4) slashing damage."
      },
      {
        "name": "Stinger",
        "description": "Melee Weapon Attack: +7 to hit, reach 10 ft., one creature. Hit: 11 (2d6 + 4) piercing damage. The target must make a DC 15 Constitution saving throw, taking 24 (7d6) poison damage on a failed save, or half as much damage on a successful one."
      }
    ]
  },
  {
    "index": "xorn",
    "name": "Xorn",
    "size": "Medium",
    "type": "elemental",
    "alignment": "neutral",
    "armor_class": 19,
    "hit_points": 73,
    "hit_dice": "7d8",
    "speed": "20 ft.",
    "challenge_rating": 5,
    "proficiency_bonus": 3,
    "xp": 1800,
    "dexterity": 10,
    "passive_perception": 16,
    "languages": "Terran",
    "damage_resistances": [
      "piercing and slashing from nonmagical weapons that aren't adamantine"
    ],
    "damage_immunities": [],
    "condition_immunities": [],
    "actions": [
      {
        "name": "Multiattack",
        "description": "The xorn makes three claw attacks and one bite attack."
      },
      {
        "name": "Bite",
        "description": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 13 (3d6 + 3) piercing damage."
      },
      {
        "name": "Claw",
        "description": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 6 (1d6 + 3) slashing damage."
      }
    ]
  },
  {
    "index": "young-black-dragon",
    "name": "Young Black Dragon",
    "size": "Large",
    "type": "dragon",
    "alignment": "chaotic evil",
    "armor_class": 18,
    "hit_points": 127,
    "hit_dice": "15d10",
    "speed": "40 ft.",
    "challenge_rating": 7,
    "proficiency_bonus": 3,
    "xp": 2900,
    "dexterity": 14,
    "passive_perception": 16,
    "languages": "Common, Draconic",
    "damage_resistances": [],
    "damage_immunities": [
      "acid"
    ],
    "condition_immunities": [],
    "actions": [
      {
        "name": "Multiattack",
        "description": "The dragon makes three attacks: one with its bite and two with its claws."
      },
      {
        "name": "Bite",
        "description": "Melee Weapon Attack: +7 to hit, reach 10 ft., one target. Hit: 15 (2d10 + 4) piercing damage plus 4 (1d8) acid damage."
      },
      {
        "name": "Claw",
        "description": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 11 (2d6 + 4) slashing damage."
      },
      {
        "name": "Acid Breath",
        "description": "The dragon exhales acid in a 30-foot line that is 5 feet wide. Each creature in that line must make a DC 14 Dexterity saving throw, taking 49 (11d8) acid damage on a failed save, or half as much damage on a successful one."
      }
    ]
  },
  {
    "index": "young-blue-dragon",
    "name": "Young Blue Dragon",
    "size": "Large",
    "type": "dragon",
    "alignment": "lawful evil",
    "armor_class": 18,
    "hit_points": 152,
    "hit_dice": "16d10",
    "speed": "40 ft.",
    "challenge_rating": 9,
    "proficiency_bonus": 4,
    "xp": 5000,
    "dexterity": 10,
    "passive_perception": 19,
    "languages": "Common, Draconic",
    "damage_resistances": [],
    "damage_immunities": [
      "lightning"
    ],
    "condition_immunities": [],
    "actions": [
      {
        "name": "Multiattack",
        "description": "The dragon makes three attacks: one with its bite and two with its claws."
      },
      {
        "name": "Bite",
        "description": "Melee Weapon Attack: +9 to hit, reach 10 ft., one target. Hit: 16 (2d10 + 5) piercing damage plus 5 (1d10) lightning damage."
      },
      {
        "name": "Claw",
        "description": "Melee Weapon Attack: +9 to hit, reach 5 ft., one target. Hit: 12 (2d6 + 5) slashing damage."
      },
      {
        "name": "Lightning Breath",
        "description": "The dragon exhales lightning in an 60-foot line that is 5 feet wide. Each creature in that line must make a DC 16 Dexterity saving throw, taking 55 (10d10) lightning damage on a failed save, or half as much damage on a successful one."
      }
    ]
  },
  {
    "index": "young-brass-dragon",
    "name": "Young Brass Dragon",
    "size": "Large",
    "type": "dragon",
    "alignment": "chaotic good",
    "armor_class": 17,
    "hit_points": 110,
    "hit_dice": "13d10",
    "speed": "40 ft.",
    "challenge_rating": 6,
    "proficiency_bonus": 3,
    "xp": 2300,
    "dexterity": 10,
    "passive_perception": 16,
    "languages": "Common, Draconic",
    "damage_resistances": [],
    "damage_immunities": [
      "fire"
    ],
    "condition_immunities": [],
    "actions": [
      {
        "name": "Multiattack",
        "description": "The dragon makes three attacks: one with its bite and two with its claws."
      },
      {
        "name": "Bite",
        "description": "Melee Weapon Attack: +7 to hit, reach 10 ft., one target. Hit: 15 (2d10 + 4) piercing damage."
      },
      {
        "name": "Claw",
        "description": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 11 (2d6 + 4) slashing damage."
      },
      {
        "name": "Breath Weapons",
        "description": "The dragon uses one of the following breath weapons.\nFire Breath. The dragon exhales fire in a 40-foot line that is 5 feet wide. Each creature in that line must make a DC 14 Dexterity saving throw, taking 42 (12d6) fire damage on a failed save, or half as much damage on a successful one.\nSleep Breath. The dragon exhales sleep gas in a 30-foot cone. Each creature in that area must succeed on a DC 14 Constitution saving throw or fall unconscious for 5 minutes. This effect ends for a creature if the creature takes damage or someone uses an action to wake it."
      }
    ]
  },
  {
    "index": "young-bronze-dragon",
    "name": "Young Bronze Dragon",
    "size": "Large",
    "type": "dragon",
    "alignment": "lawful good",
    "armor_class": 18,
    "hit_points": 142,
    "hit_dice": "15d10",
    "speed": "40 ft.",
    "challenge_rating": 8,
    "proficiency_bonus": 3,
    "xp": 3900,
    "dexterity": 10,
    "passive_perception": 17,
    "languages": "Common, Draconic",
    "damage_resistances": [],
    "damage_immunities": [
      "lightning"
    ],
    "condition_immunities": [],
    "actions": [
      {
        "name": "Multiattack",
        "description": "The dragon makes three attacks: one with its bite and two with its claws."
      },
      {
        "name": "Bite",
        "description": "Melee Weapon Attack: +8 to hit, reach 10 ft., one target. Hit: 16 (2d10 + 5) piercing damage."
      },
      {
        "name": "Claw",
        "description": "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 12 (2d6 + 5) slashing damage."
      },
      {
        "name": "Breath Weapons",
        "description": "The dragon uses one of the following breath weapons.\nLightning Breath. The dragon exhales lightning in a 60-foot line that is 5 feet wide. Each creature in that line must make a DC 15 Dexterity saving throw, taking 55 (10d10) lightning damage on a failed save, or half as much damage on a successful one.\nRepulsion Breath. The dragon exhales repulsion energy in a 30-foot cone. Each creature in that area must succeed on a DC 15 Strength saving throw. On a failed save, the creature is pushed 40 feet away from the dragon."
      }
    ]
  },
  {
    "index": "young-copper-dragon",
    "name": "Young Copper Dragon",
    "size": "Large",
    "type": "dragon",
    "alignment": "chaotic good",
    "armor_class": 17,
    "hit_points": 119,
    "hit_dice": "14d10",
    "speed": "40 ft.",
    "challenge_rating": 7,
    "proficiency_bonus": 3,
    "xp": 2900,
    "dexterity": 12,
    "passive_perception": 17,
    "languages": "Common, Draconic",
    "damage_resistances": [],
    "damage_immunities": [
      "acid"
    ],
    "condition_immunities": [],
    "actions": [
      {
        "name": "Multiattack",
        "description": "The dragon makes three attacks: one with its bite and two with its claws."
      },
      {
        "name": "Bite",
        "description": "Melee Weapon Attack: +7 to hit, reach 10 ft., one target. Hit: 15 (2d10 + 4) piercing damage."
      },
      {
        "name": "Claw",
        "description": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 11 (2d6 + 4) slashing damage."
      },
      {
        "name": "Breath Weapons",
        "description": "The dragon uses one of the following breath weapons.\nAcid Breath. The dragon exhales acid in an 40-foot line that is 5 feet wide. Each creature in that line must make a DC 14 Dexterity saving throw, taking 40 (9d8) acid damage on a failed save, or half as much damage on a successful one.\nSlowing Breath. The dragon exhales gas in a 30-foot cone. Each creature in that area must succeed on a DC 14 Constitution saving throw. On a failed save, the creature can't use reactions, its speed is halved, and it can't make more than one attack on its turn. In addition, the creature can use either an action or a bonus action on its turn, but not both. These effects last for 1 minute. The creature can repeat the saving throw at the end of each of its turns, ending the effect on itself with a successful save."
      }
    ]
  },
  {
    "index": "young-gold-dragon",
    "name": "Young Gold Dragon",
    "size": "Large",
    "type": "dragon",
    "alignment": "lawful good",
    "armor_class": 18,
    "hit_points": 178,
    "hit_dice": "17d10",
    "speed": "40 ft.",
    "challenge_rating": 10,
    "proficiency_bonus": 4,
    "xp": 5900,
    "dexterity": 14,
    "passive_perception": 19,
    "languages": "Common, Draconic",
    "damage_resistances": [],
    "damage_immunities": [
      "fire"
    ],
    "condition_immunities": [],
    "actions": [
      {
        "name": "Multiattack",
        "description": "The dragon makes three attacks: one with its bite and two with its claws."
      },
      {
        "name": "Bite",
        "description": "Melee Weapon Attack: +10 to hit, reach 10 ft., one target. Hit: 17 (2d10 + 6) piercing damage."
      },
      {
        "name": "Claw",
        "description": "Melee Weapon Attack: +10 to hit, reach 5 ft., one target. Hit: 13 (2d6 + 6) slashing damage."
      },
      {
        "name": "Breath Weapons",
        "description": "The dragon uses one of the following breath weapons.\nFire Breath. The dragon exhales fire in a 30-foot cone. Each creature in that area must make a DC 17 Dexterity saving throw, taking 55 (10d10) fire damage on a failed save, or half as much damage on a successful one.\nWeakening Breath. The dragon exhales gas in a 30-foot cone. Each creature in that area must succeed on a DC 17 Strength saving throw or have disadvantage on Strength-based attack rolls, Strength checks, and Strength saving throws for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
      }
    ]
  },
  {
    "index": "young-green-dragon",
    "name": "Young Green Dragon",
    "size": "Large",
    "type": "dragon",
    "alignment": "lawful evil",
    "armor_class": 18,
    "hit_points": 136,
    "hit_dice": "16d10",
    "speed": "40 ft.",
    "challenge_rating": 8,
    "proficiency_bonus": 3,
    "xp": 3900,
    "dexterity": 12,
    "passive_perception": 17,
    "languages": "Common, Draconic",
    "damage_resistances": [],
    "damage_immunities": [
      "poison"
    ],
    "condition_immunities": [
      "Poisoned"
    ],
    "actions": [
      {
        "name": "Multiattack",
        "description": "The dragon makes three attacks: one with its bite and two with its claws."
      },
      {
        "name": "Bite",
        "description": "Melee Weapon Attack: +7 to hit, reach 10 ft., one target. Hit: 15 (2d10 + 4) piercing damage plus 7 (2d6) poison damage."
      },
      {
        "name": "Claw",
        "description": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 11 (2d6 + 4) slashing damage."
      },
      {
        "name": "Poison Breath",
        "description": "The dragon exhales poisonous gas in a 30-foot cone. Each creature in that area must make a DC 14 Constitution saving throw, taking 42 (12d6) poison damage on a failed save, or half as much damage on a successful one."
      }
    ]
  },
  {
    "index": "young-red-dragon",
    "name": "Young Red Dragon",
    "size": "Large",
    "type": "dragon",
    "alignment": "chaotic evil",
    "armor_class": 18,
    "hit_points": 178,
    "hit_dice": "17d10",
    "speed": "40 ft.",
    "challenge_rating": 10,
    "proficiency_bonus": 4,
    "xp": 5900,
    "dexterity": 10,
    "passive_perception": 18,
    "languages": "Common, Draconic",
    "damage_resistances": [],
    "damage_immunities": [
      "fire"
    ],
    "condition_immunities": [],
    "actions": [
      {
        "name": "Multiattack",
        "description": "The dragon makes three attacks: one with its bite and two with its claws."
      },
      {
        "name": "Bite",
        "description": "Melee Weapon Attack: +10 to hit, reach 10 ft., one target. Hit: 17 (2d10 + 6) piercing damage plus 3 (1d6) fire damage."
      },
      {
        "name": "Claw",
        "description": "Melee Weapon Attack: +10 to hit, reach 5 ft., one target. Hit: 13 (2d6 + 6) slashing damage."
      },
      {
        "name": "Fire Breath",
        "description": "The dragon exhales fire in a 30-foot cone. Each creature in that area must make a DC 17 Dexterity saving throw, taking 56 (16d6) fire damage on a failed save, or half as much damage on a successful one."
      }
    ]
  },
  {
    "index": "young-silver-dragon",
    "name": "Young Silver Dragon",
    "size": "Large",
    "type": "dragon",
    "alignment": "lawful good",
    "armor_class": 18,
    "hit_points": 168,
    "hit_dice": "16d10",
    "speed": "40 ft.",
    "challenge_rating": 9,
    "proficiency_bonus": 4,
    "xp": 5000,
    "dexterity": 10,
    "passive_perception": 18,
    "languages": "Common, Draconic",
    "damage_resistances": [],
    "damage_immunities": [
      "cold"
    ],
    "condition_immunities": [],
    "actions": [
      {
        "name": "Multiattack",
        "description": "The dragon makes three attacks: one with its bite and two with its claws."
      },
      {
        "name": "Bite",
        "description": "Melee Weapon Attack: +10 to hit, reach 10 ft., one target. Hit: 17 (2d10 + 6) piercing damage."
      },
      {
        "name": "Claw",
        "description": "Melee Weapon Attack: +10 to hit, reach 5 ft., one target. Hit: 13 (2d6 + 6) slashing damage."
      },
      {
        "name": "Breath Weapons",
        "description": "The dragon uses one of the following breath weapons.\nCold Breath. The dragon exhales an icy blast in a 30-foot cone. Each creature in that area must make a DC 17 Constitution saving throw, taking 54 (12d8) cold damage on a failed save, or half as much damage on a successful one.\nParalyzing Breath. The dragon exhales paralyzing gas in a 30-foot cone. Each creature in that area must succeed on a DC 17 Constitution saving throw or be paralyzed for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
      }
    ]
  },
  {
    "index": "young-white-dragon",
    "name": "Young White Dragon",
    "size": "Large",
    "type": "dragon",
    "alignment": "chaotic evil",
    "armor_class": 17,
    "hit_points": 133,
    "hit_dice": "14d10",
    "speed": "40 ft.",
    "challenge_rating": 6,
    "proficiency_bonus": 3,
    "xp": 2300,
    "dexterity": 10,
    "passive_perception": 16,
    "languages": "Common, Draconic",
    "damage_resistances": [],
    "damage_immunities": [
      "cold"
    ],
    "condition_immunities": [],
    "actions": [
      {
        "name": "Multiattack",
        "description": "The dragon makes three attacks: one with its bite and two with its claws."
      },
      {
        "name": "Bite",
        "description": "Melee Weapon Attack: +7 to hit, reach 10 ft., one target. Hit: 15 (2d10 + 4) piercing damage plus 4 (1d8) cold damage."
      },
      {
        "name": "Claw",
        "description": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 11 (2d6 + 4) slashing damage."
      },
      {
        "name": "Cold Breath",
        "description": "The dragon exhales an icy blast in a 30-foot cone. Each creature in that area must make a DC 15 Constitution saving throw, taking 45 (10d8) cold damage on a failed save, or half as much damage on a successful one."
      }
    ]
  },
  {
    "index": "zombie",
    "name": "Zombie",
    "size": "Medium",
    "type": "undead",
    "alignment": "neutral evil",
    "armor_class": 8,
    "hit_points": 22,
    "hit_dice": "3d8",
    "speed": "20 ft.",
    "challenge_rating": 0.25,
    "proficiency_bonus": 2,
    "xp": 50,
    "dexterity": 6,
    "passive_perception": 8,
    "languages": "understands all languages it spoke in life but can't speak",
    "damage_resistances": [],
    "damage_immunities": [
      "poison"
    ],
    "condition_immunities": [
      "Poisoned"
    ],
    "actions": [
      {
        "name": "Slam",
        "description": "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 4 (1d6 + 1) bludgeoning damage."
      }
    ]
  }
];

// Helper function to calculate initiative modifier
export function getInitiativeModifier(dexterity: number): number {
  return Math.floor((dexterity - 10) / 2);
}

// Helper function for fuzzy search
export function searchMonsters(query: string, limit: number = 10): Monster[] {
  if (!query.trim()) return [];
  
  const searchTerm = query.toLowerCase();
  
  return MONSTERS
    .filter(monster => 
      monster.name.toLowerCase().includes(searchTerm) ||
      monster.type.toLowerCase().includes(searchTerm)
    )
    .slice(0, limit);
}
