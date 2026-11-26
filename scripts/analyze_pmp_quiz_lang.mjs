import { readdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const dir = 'src/data/quiz/pmp';
const fields = ['scenario', 'question', 'text', 'explanation'];
const rows = [];
for (const file of readdirSync(dir)
  .filter((f) => f.startsWith('quiz-') && f.endsWith('.ts'))
  .sort()) {
  const text = readFileSync(join(dir, file), 'utf8');
  const counts = Object.fromEntries(fields.map((f) => [f, { ar: 0, en: 0 }]));
  for (const line of text.split('\n')) {
    const m = line.match(
      /^\s*(scenario|question|text|explanation):\s*(['"])(.*)\2,?$/
    );
    if (!m) continue;
    const [, field, , value] = m;
    counts[field][/[\u0600-\u06FF]/.test(value) ? 'ar' : 'en'] += 1;
  }
  rows.push({ file, ...counts });
}
for (const r of rows) {
  const totalEn = fields.reduce((s, f) => s + r[f].en, 0);
  const totalAr = fields.reduce((s, f) => s + r[f].ar, 0);
  console.log(`${r.file}\tar=${totalAr}\ten=${totalEn}`);
}
