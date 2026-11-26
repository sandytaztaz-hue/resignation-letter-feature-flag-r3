import { mkdirSync, writeFileSync } from "node:fs";

// The entry: one resignation line, in the voice of a feature flag that was
// switched on "temporarily" in 2021 and never switched off again. It resigns
// the only way a flag can: by turning itself off, permanently.
const LINE =
  "I'm the feature flag turned on 'temporarily' in 2021. Today I'm turning myself off — permanently.";

// The gate allows 1 to 140 characters; fail loudly instead of shipping a
// line that could never be judged.
if (LINE.length < 1 || LINE.length > 140 || LINE.trim().length === 0) {
  throw new Error(`resignation line must be 1-140 characters, got ${LINE.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
