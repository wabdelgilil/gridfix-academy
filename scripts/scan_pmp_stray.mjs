import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join, relative } from 'node:path';

const roots = [
  'src/content/lessons/pmp',
  'src/content/stations/pmp',
  'src/data/quiz/pmp',
  'src/data/curriculum.ts',
  'scripts/gen_pmp_lessons.mjs',
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

let issues = 0;
for (const file of files) {
  const lines = readFileSync(file, 'utf8').split('\n');
  for (let i = 0; i < lines.length; i += 1) {
    const line = lines[i];
    const chinese = line.match(/[\u4e00-\u9fff]+/);
    if (chinese) {
      issues += 1;
      console.log(
        `${relative('.', file)}:${i + 1} [CN:${chinese[0]}] ${line.trim().slice(0, 160)}`
      );
    }
    let text = '';
    const quoted = line.match(
      /^\s*(scenario|question|text|explanation):\s*(['"])(.*)\2,?$/
    );
    if (quoted && !/\w+En/.test(quoted[1])) {
      text = quoted[3];
    } else if (!/\w+En\s*:/.test(line) && /[\u0600-\u06FF]/.test(line)) {
      text = line;
    }
    text = text
      .replace(/\([^)]*\)/g, '')
      .replace(/«[^»]*»/g, '')
      .replace(/^\s*(import|export|const|let|var|type|interface)\b.*$/, '');
    const latin = text.match(/[A-Za-z]{2,}/g);
    if (
      latin &&
      !/^\s*(import|export|const|let|var|type|interface)\b/.test(line)
    ) {
      issues += 1;
      console.log(
        `${relative('.', file)}:${i + 1} [LATIN:${latin.join(',')}] ${line.trim().slice(0, 160)}`
      );
    }
  }
}
console.log('ISSUES', issues);
