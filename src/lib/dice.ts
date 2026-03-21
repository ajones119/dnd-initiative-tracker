/** Inclusive uniform integer in [1, sides]. */
export function rollDie(sides: number): number {
  if (!Number.isFinite(sides) || sides < 2 || sides > 100) {
    throw new RangeError("sides must be between 2 and 100");
  }
  const max = Math.floor(sides);
  if (typeof crypto !== "undefined" && crypto.getRandomValues) {
    const buf = new Uint32Array(1);
    crypto.getRandomValues(buf);
    // Rejection sampling to avoid modulo bias for large ranges
    const limit = 0x100000000 - (0x100000000 % max);
    let x = buf[0];
    while (x >= limit) {
      crypto.getRandomValues(buf);
      x = buf[0];
    }
    return (x % max) + 1;
  }
  return Math.floor(Math.random() * max) + 1;
}

export function rollPool(count: number, sides: number): number[] {
  if (!Number.isFinite(count) || count < 1 || count > 99) {
    throw new RangeError("count must be between 1 and 99");
  }
  const rolls: number[] = [];
  for (let i = 0; i < count; i++) {
    rolls.push(rollDie(sides));
  }
  return rolls;
}

export function rollWithModifier(
  count: number,
  sides: number,
  modifier: number,
): { rolls: number[]; total: number } {
  const rolls = rollPool(count, sides);
  const sumDice = rolls.reduce((a, b) => a + b, 0);
  const mod = Number.isFinite(modifier) ? Math.trunc(modifier) : 0;
  const total = sumDice + mod;
  return { rolls, total };
}
