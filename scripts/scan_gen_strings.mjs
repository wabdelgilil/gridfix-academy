import { readFileSync } from 'node:fs';

const text = readFileSync('scripts/gen_pmp_lessons.mjs', 'utf8');
const lines = text.split('\n');
for (let i = 0; i < lines.length; i += 1) {
  const line = lines[i];
  if (!/^\s*(?:'[^']*'|\[[^]]*\],?)$/.test(line.trim())) continue;
  const stripped = line
    .replace(/\([^)]*\)/g, '')
    .replace(/«[^»]*»/g, '')
    .replace(/^[^']*'/, '')
    .replace(/'[,]?$/, '');
  const latin = stripped.match(/[A-Za-z][A-Za-z'-]*/g);
  const chinese = stripped.match(/[\u4e00-\u9fff]+/g);
  if (latin || chinese) {
    console.log(
      `${i + 1} [${[...(latin ?? []), ...(chinese ?? [])].join(',')}] ${line.trim()}`
    );
  }
}
