import { readdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const roots = [
  'src/content/lessons/pmp',
  'src/content/stations/pmp',
  'src/data/curriculum.ts',
  'src/data/sources/pmp.ts',
  'scripts/gen_pmp_lessons.mjs',
];
const files = [];
for (const root of roots) {
  if (root.endsWith('.ts') || root.endsWith('.mjs')) files.push(root);
  else for (const f of readdirSync(root)) files.push(join(root, f));
}

const replacements = [
  [/الرؤية commune/g, 'الرؤية المشتركة'],
  [
    /قيمة قابلة للقياس dentro منظومة الأعمال/g,
    'قيمة قابلة للقياس ضمن منظومة الأعمال',
  ],
  [/معرفة 3 domains وأوزانها/g, 'معرفة المجالات الثلاثة (Domains) وأوزانها'],
  [/معرفة 26 task/g, 'معرفة المهام الـ 26 (Tasks)'],
  [/فهم approach mix 40\/60/g, 'فهم مزيج النُهج (Approach mix) 40/60'],
  [/"Approach mix" 40\/60/g, 'مزيج النُهج (Approach mix) 40/60'],
  [
    /«النتائج \(Outcomes\)» vs «المخرجات \(Outputs\)»/g,
    'الفرق بين النتائج (Outcomes) والمخرجات (Outputs)',
  ],
  [/"فوائد \(Benefits\)" realization/g, 'تحقيق الفوائد (Benefits realization)'],
  [/"قيمة \(Value\)" dimensions/g, 'أبعاد القيمة (Value dimensions)'],
  [/مصفوفة stakeholders/g, 'مصفوفة أصحاب المصلحة (Stakeholders)'],
  [/سجل stakeholders/g, 'سجل أصحاب المصلحة (Stakeholders)'],
  [/حل win-win/g, 'حل يربح فيه الجميع (Win-win)'],
  [
    /"متى \(When\)" to use hybrid/g,
    'متى يُستخدم النهج الهجين (When to use hybrid)',
  ],
  [
    /"تشخيص \(Diagnostic\)" بعد mock exam/g,
    'تشخيص (Diagnostic) بعد امتحان تجريبي (Mock exam)',
  ],
  [
    /"تحليل \(Analysis\)" by domain/g,
    'تحليل (Analysis) حسب المجال (By domain)',
  ],
  [/3 domains، 26 task/g, '3 مجالات (Domains)، 26 مهمة (Tasks)'],
  [
    /PESTLE \+ AI readiness/g,
    'تحليل PESTLE وجاهزية الذكاء الاصطناعي (AI readiness)',
  ],
];

let changed = 0;
for (const file of files) {
  const before = readFileSync(file, 'utf8');
  let after = before;
  for (const [pattern, replacement] of replacements) {
    after = after.replace(pattern, replacement);
  }
  if (after !== before) {
    writeFileSync(file, after, 'utf8');
    changed += 1;
    console.log('cleaned', file);
  }
}
console.log('files changed', changed);
