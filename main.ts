import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I load the dishwasher like Tetris and unload it like a hostage negotiation.";

if (LINE.length < 1 || LINE.length > 200 || LINE.trim().length === 0) {
  throw new Error(`entry line must be 1-200 characters, got ${LINE.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
