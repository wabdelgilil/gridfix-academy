import fs from 'node:fs';
import path from 'node:path';
function walk(d) {
  let r = [];
  for (const e of fs.readdirSync(d)) {
    const f = path.join(d, e);
    const s = fs.statSync(f);
    if (s.isDirectory()) r = r.concat(walk(f));
    else if (f.endsWith('.mdx')) r.push(f);
  }
  return r;
}
let changed = 0;
for (const f of walk('src/content/lessons/pmp')) {
  const lines = fs.readFileSync(f, 'utf8').split('\n');
  let mod = false;
  const out = lines.map((line) => {
    if (/^  - "/.test(line) && !/^  - '/.test(line)) {
      const content = line.slice(4);
      const escaped = content.replace(/'/g, "''");
      mod = true;
      return `  - '${escaped}'`;
    }
    return line;
  });
  if (mod) {
    fs.writeFileSync(f, out.join('\n'), 'utf8');
    changed++;
  }
}
console.log('changed files', changed);
