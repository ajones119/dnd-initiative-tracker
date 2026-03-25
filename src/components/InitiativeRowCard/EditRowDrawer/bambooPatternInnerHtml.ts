import bambooSvgRaw from "@/assets/backgrounds/bamboo.svg?raw";

/** Inner markup of bamboo.svg (path only) for <pattern>; file is source of truth for geometry + paint attrs. */
export const bambooPatternInnerHtml = bambooSvgRaw
  .replace(/^[\s\S]*?<svg[^>]*>/i, "")
  .replace(/<\/svg>\s*$/i, "")
  .trim();
