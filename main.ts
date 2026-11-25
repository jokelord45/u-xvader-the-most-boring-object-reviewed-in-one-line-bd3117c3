import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "The doorstop spends its whole life being kicked, stepped on and forgotten, yet still holds the door open for people who never once said thank you.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
console.log(`Wrote ${entry.length} characters to /output/entry.txt`);
