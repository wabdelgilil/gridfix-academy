import { readdirSync, statSync, readFileSync } from 'node:fs';
import { basename, join } from 'node:path';

const roots = [
  'src/content/lessons/pmp',
  'src/content/stations/pmp',
  'src/data/quiz/pmp',
  'src/data/curriculum.ts',
];
const files = [];
for (const root of roots) {
  if (statSync(root).isDirectory()) {
    for (const entry of readdirSync(root, { withFileTypes: true })) {
      if (entry.isFile()) files.push(join(root, entry.name));
    }
  } else {
    files.push(root);
  }
}

const skip =
  /(?:En["']?\s*:|_En|titleEn|descriptionEn|badgeEn|objectivesEn|scenarioEn|questionEn|textEn|explanationEn|toolNameEn|domainTitleEn|export |import |const |interface |type |^---$|^\s*$)/;
let total = 0;
for (const file of files) {
  const lines = readFileSync(file, 'utf8').split('\n');
  for (let i = 0; i < lines.length; i += 1) {
    const line = lines[i];
    if (skip.test(line) || !/[\u0600-\u06FF]/.test(line)) continue;
    const stripped = line.replace(/\([^)]*\)/g, '').replace(/«[^»]*»/g, '');
    const match = stripped.match(/[A-Za-z]{2,}/);
    if (!match) continue;
    total += 1;
    console.log(
      `${basename(file)}:${i + 1} [${match[0]}] ${line.trim().slice(0, 190)}`
    );
  }
}
console.log('TOTAL', total);
