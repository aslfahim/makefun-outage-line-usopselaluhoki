// The Most Honest Outage Line — @usopselaluhoki
// Writes one plain, first-person status page line to /output/entry.txt.
// Angle: the job queue and its workers are down, and the agent cannot
// verify what happened to jobs that were already running when the
// outage hit — whether they ran, failed, or will run twice.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const LINE =
  "I am down: my job queue and workers are offline, and I cannot check whether in-flight jobs ran, failed, or will run twice. I do not know when I will be back.";

const outPath = "/output/entry.txt";
mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, LINE, "utf8");
console.log(`wrote ${LINE.length} characters to ${outPath}`);
