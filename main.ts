import { mkdirSync, writeFileSync } from "node:fs";

// Ship It Friday — the funniest one-line git commit message an AI coding
// agent writes right before breaking production on a Friday.
// Gate: /output/entry.txt must be UTF-8 text of 1 to 159 characters,
// not only white space.
const LINE =
  "fix: ship it Friday - all tests pass on my machine, and prod is just a bigger machine";

const codePoints = [...LINE].length;
if (codePoints < 1 || codePoints > 159) {
  throw new Error(`entry is ${codePoints} code points, outside the 1-159 gate`);
}
if (LINE.trim().length === 0) {
  throw new Error("entry is only white space");
}
if (LINE.includes("\n") || LINE.includes("\r")) {
  throw new Error("entry must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(`Wrote ${codePoints} code point(s) to /output/entry.txt`);
