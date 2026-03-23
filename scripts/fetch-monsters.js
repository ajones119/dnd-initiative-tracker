

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const API_BASE = "https://www.dnd5eapi.co/api";

async function fetchMonsterList() {
  console.log("Fetching monster list...");
  const response = await fetch(`${API_BASE}/monsters`);
  const data = await response.json();
  return data.results;
}

async function fetchMonsterDetails(monsterIndex) {
  console.log(`Fetching details for: ${monsterIndex}`);
  const response = await fetch(`${API_BASE}/monsters/${monsterIndex}`);
  return await response.json();
}

function getUniqueCreatureTypes(monsters) {
  const types = new Set();
  for (const m of monsters) {
    if (m?.type && typeof m.type === "string") types.add(m.type);
  }
  return [...types].sort((a, b) => a.localeCompare(b));
}

function processMonsterData(monster) {
  // Extract only the fields we need for initiative tracking
  return {
    index: monster.index,
    name: monster.name,
    size: monster.size,
    type: monster.type,
    alignment: monster.alignment,
    armor_class: monster.armor_class?.[0]?.value || 10,
    hit_points: monster.hit_points,
    hit_dice: monster.hit_dice,
    speed: monster.speed?.walk || "30 ft.",
    challenge_rating: monster.challenge_rating,
    proficiency_bonus: monster.proficiency_bonus || 2,
    xp: monster.xp || 0,
    // Ability scores for initiative modifier calculation
    dexterity: monster.dexterity || 10,
    // Senses for passive perception
    passive_perception: monster.senses?.passive_perception || 10,
    // Languages
    languages: monster.languages || "",
    // Damage resistances/immunities (useful for DMs)
    damage_resistances: monster.damage_resistances || [],
    damage_immunities: monster.damage_immunities || [],
    condition_immunities:
      monster.condition_immunities?.map((ci) => ci.name) || [],
    // Actions for combat reference
    actions:
      monster.actions?.map((action) => ({
        name: action.name,
        description: action.desc,
      })) || [],
  };
}

async function buildMonsterDatabase() {
  try {
    console.log("🐉 Building D&D 5e Monster Database...");

    // Fetch the list of all monsters
    const monsterList = await fetchMonsterList();
    console.log(`Found ${monsterList.length} monsters`);

    const monsters = [];
    const batchSize = 10; // Process in batches to avoid overwhelming the API

    for (let i = 0; i < monsterList.length; i += batchSize) {
      const batch = monsterList.slice(i, i + batchSize);
      console.log(
        `Processing batch ${Math.floor(i / batchSize) + 1}/${Math.ceil(monsterList.length / batchSize)}`,
      );

      const batchPromises = batch.map(async (monster) => {
        try {
          const details = await fetchMonsterDetails(monster.index);
          return processMonsterData(details);
        } catch (error) {
          console.error(`Error fetching ${monster.index}:`, error.message);
          return null;
        }
      });

      const batchResults = await Promise.all(batchPromises);
      monsters.push(...batchResults.filter(Boolean));

      // Small delay to be nice to the API
      await new Promise((resolve) => setTimeout(resolve, 100));
    }

    // Sort monsters by name for better UX
    monsters.sort((a, b) => a.name.localeCompare(b.name));

    const creatureTypes = getUniqueCreatureTypes(monsters);

    // Create output directory if it doesn't exist
    const outputDir = path.join(process.cwd(), "src", "data");
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }

    // Write the monster database
    const outputPath = path.join(outputDir, "monsters.json");
    fs.writeFileSync(outputPath, JSON.stringify(monsters, null, 2));

    const typesPath = path.join(outputDir, "creature-types.json");
    fs.writeFileSync(typesPath, JSON.stringify(creatureTypes, null, 2));

    console.log(`✅ Successfully built monster database!`);
    console.log(`📊 Total monsters: ${monsters.length}`);
    console.log(`🏷️ Unique creature types: ${creatureTypes.length}`);
    console.log(`📁 Output: ${outputPath}`);
    console.log(`📁 Creature types: ${typesPath}`);
    console.log(
      `📦 File size: ${(fs.statSync(outputPath).size / 1024 / 1024).toFixed(2)} MB`,
    );

    // Generate TypeScript types
    generateTypeScript(monsters, creatureTypes, outputDir);
  } catch (error) {
    console.error("❌ Error building monster database:", error);
    process.exit(1);
  }
}

function generateTypeScript(monsters, creatureTypes, outputDir) {
  const typeDefinition = `import { Searcher } from "fast-fuzzy";

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

export const MONSTERS: Monster[] = ${JSON.stringify(monsters, null, 2)};

// Helper function to calculate initiative modifier
export function getInitiativeModifier(dexterity: number): number {
  return Math.floor((dexterity - 10) / 2);
}

const monsterSearcher = new Searcher(MONSTERS, {
  keySelector: (m: Monster) => [m.name, m.type],
  threshold: 0.35,
});

/** Fuzzy search by monster name and creature type (fast-fuzzy). */
export function searchMonsters(query: string, limit: number = 10): Monster[] {
  const q = query.trim();
  if (!q) return [];
  return monsterSearcher.search(q).slice(0, limit);
}
`;

  const monstersTsPath = path.join(outputDir, "monsters.ts");
  fs.writeFileSync(monstersTsPath, typeDefinition);
  console.log(`📝 Generated TypeScript types: ${monstersTsPath}`);

  const creatureTypesTs = `/** Auto-generated by scripts/fetch-monsters.js — do not edit */
export const CREATURE_TYPES: string[] = ${JSON.stringify(creatureTypes, null, 2)};
`;
  const creatureTypesTsPath = path.join(outputDir, "creature-types.generated.ts");
  fs.writeFileSync(creatureTypesTsPath, creatureTypesTs);
  console.log(`📝 Generated creature types: ${creatureTypesTsPath}`);
}

// Run the script
buildMonsterDatabase();
