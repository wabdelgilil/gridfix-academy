import { readFileSync, writeFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';

let curriculum = readFileSync('src/data/curriculum.ts', 'utf8');
const start = curriculum.indexOf("id: 'station-pmp-0'");
const endMarker = '\n  },\n];';
const end = curriculum.indexOf(endMarker, start);
if (start < 0 || end < 0) throw new Error('PMP curriculum block not found');
const block = curriculum.slice(start, end);
const flipped = block.replace(/status: 'planned'/g, "status: 'live'");
curriculum = curriculum.slice(0, start) + flipped + curriculum.slice(end);
writeFileSync('src/data/curriculum.ts', curriculum, 'utf8');

const stationDir = 'src/content/stations/pmp';
let stationCount = 0;
for (const file of readdirSync(stationDir).filter((f) => f.endsWith('.md'))) {
  const path = join(stationDir, file);
  const text = readFileSync(path, 'utf8');
  const next = text.replace(/status: "planned"/g, 'status: "live"');
  if (next !== text) {
    writeFileSync(path, next, 'utf8');
    stationCount += 1;
  }
}
console.log(
  'curriculum flipped:',
  (block.match(/status: 'planned'/g) ?? []).length
);
console.log('stations flipped:', stationCount);
