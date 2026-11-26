import { readdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const dir = 'src/data/quiz/pmp';
const counts = new Map();
for (const file of readdirSync(dir).filter(
  (f) => f.startsWith('quiz-') && f.endsWith('.ts')
)) {
  const lines = readFileSync(join(dir, file), 'utf8').split('\n');
  for (const line of lines) {
    const match = line.match(/^\s*explanation:\s*(['"])(.*)\1,?$/);
    if (!match) continue;
    const value = match[2];
    const rest = value.replace(/\([^)]*\)/g, '');
    if (!/[A-Za-z][A-Za-z'-]*/.test(rest)) continue;
    counts.set(value, (counts.get(value) ?? 0) + 1);
  }
}
const sorted = [...counts.entries()].sort(
  (a, b) => b[1] - a[1] || a[0].localeCompare(b[0])
);
for (const [value, count] of sorted) console.log(`${count}\t${value}`);
console.log(
  'UNIQUE',
  sorted.length,
  'TOTAL',
  sorted.reduce((sum, [, n]) => sum + n, 0)
);
