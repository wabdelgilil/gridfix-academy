import { readdirSync, readFileSync } from 'node:fs';
import { basename, join } from 'node:path';

const dir = 'src/data/quiz/pmp';
const files = readdirSync(dir)
  .filter((f) => f.startsWith('quiz-') && f.endsWith('.ts'))
  .sort();

const findings = [];
for (const file of files) {
  const lines = readFileSync(join(dir, file), 'utf8').split('\n');
  for (let i = 0; i < lines.length; i += 1) {
    const line = lines[i];
    const match = line.match(/^\s*explanation:\s*(['"])(.*)\1,?$/);
    if (!match) continue;
    const value = match[2];
    const rest = value.replace(/\([^)]*\)/g, '');
    const latin = rest.match(/[A-Za-z][A-Za-z'-]*/g);
    if (!latin) continue;
    findings.push(`${basename(file)}:${i + 1} [${latin.join(',')}] ${value}`);
  }
}
console.log(findings.join('\n'));
console.log('TOTAL', findings.length);
