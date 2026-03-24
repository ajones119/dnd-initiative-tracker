import { readFileSync, writeFileSync, readdirSync } from "fs";
import { join } from "path";

const dir = "src/assets/conditions";
const files = readdirSync(dir).filter((f) => f.endsWith(".svg"));
const changed = [];

for (const file of files) {
  const fp = join(dir, file);
  let src = readFileSync(fp, "utf8");
  const orig = src;

  // Remove style="height:...;width:...;" from the <svg> root tag
  src = src.replace(/(<svg[^>]*)\s+style="[^"]*"/g, "$1");

  // Remove explicit width/height attributes from the <svg> root tag
  src = src.replace(/(<svg[^>]*)\s+width="[^"]*"/g, "$1");
  src = src.replace(/(<svg[^>]*)\s+height="[^"]*"/g, "$1");

  // Replace fill="<any hardcoded color>" with fill="currentColor"
  // Leave fill="none" and fill="currentColor" and fill="url(...)" untouched
  src = src.replace(/\bfill="(?!none|currentColor|url)[^"]+"/g, 'fill="currentColor"');

  // Drop fill-opacity (currentColor inherits opacity from CSS)
  src = src.replace(/\s+fill-opacity="[^"]+"/g, "");

  if (src !== orig) {
    writeFileSync(fp, src, "utf8");
    changed.push(file);
  }
}

console.log("Changed:", changed.join(", ") || "(none)");
console.log("Total changed:", changed.length);
