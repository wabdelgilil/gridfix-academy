import { readdirSync, readFileSync, statSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { join, relative, extname } from 'node:path';

// قاعدة جودة العربية — محتوى المشروع عربي (مع مصطلحات إنجليزية مشروعة بين مسافات).
// يحظر على جميع النصوص المكتوبة أو المولّدة أن تقع في "أخطاء الآلة":
//   - كلمات عربية غير موجودة (مولّدة غبياً): مثل "الحماس" و"ميليء" و"ابيبيل" و"لبساب"
//   - حروف لاتينية ملتصقة داخل كلمة عربية (أو عكسها): مثل "بمغritaje" و"الفلإ"
//   - رموز تشوه: "====" أو "==>" أو علامات تكرار غريبة
// ملاحظة: "وROI" بواو الواو عربية شرعية مسموحة (مصطلح إنجليزي يبدأ بعد مسافة أو واو)،
// والرمز "===" داخل الشيفرة البرمجية ليس عربياً — الفحص يستهدف النصوص فقط.
// التشغيل: من جذر المشروع عبر `npm run qa:ar`

const ROOT = fileURLToPath(new URL('..', import.meta.url));
const SRC = join(ROOT, 'src');
const EXTS = new Set(['.mdx', '.md', '.ts', '.tsx', '.astro']);
const SKIP_DIRS = new Set(['node_modules', 'dist', '.astro']);

// حروف عربية فعلية (بدون علامات الترقيم والتشكيل، وبدون الواو لأن "وROI" سرحية مشروعة)
const AR_LETTERS = '(?!\\u0648)[\\u0621-\\u063A\\u0641-\\u064A\\u066E-\\u06D3]';
const RE_AR_LATIN = new RegExp(AR_LETTERS + '([A-Za-z]{2,})');
const RE_LATIN_AR = new RegExp('([A-Za-z]{2,})' + AR_LETTERS);

// مصطلحات إنجليزية شرعية مرتبطة بالمجال — يُسمح بورودها حتى لو التصقت بحرف عربي
const ALLOWED_TERMS = new Set([
  'HVAC', 'CMMS', 'CAFM', 'SLA', 'ROI', 'LCC', 'IFMA', 'LLM', 'CFM', 'FMP',
  'OSHA', 'LEED', 'ISO', 'KPI', 'EUI', 'IEQ', 'IAQ', 'IEQ', 'NNN', 'CAM',
  'BAS', 'UPS', 'IoT', 'BIM', 'AI', 'GA', 'CO', 'LED', 'Payback', 'Gross',
  'CapEx', 'OPEX', 'PDCA', 'Six', 'Sigma', 'ROI', 'LCC', 'QA', 'RR', 'PLC',
]);
const isAllowedRun = (run) => ALLOWED_TERMS.has(run);

// كلمات آلة غبية عُثر عليها ونُهي عنها — أضف كل حالة جديدة تظهر هنا
const GARBLED_WORDS = [
  'ritaje', 'lply', 'يبلتحسن', 'المهملع', 'التسوئ', 'ابيبيل', 'ميليء',
  'الحماس', 'لبساب', 'وفراعية', 'الغيباب', 'شرطة المبنى', 'إلاستجابة',
  'انقطة', 'متريثة', 'الفلإ', 'بلاس التي', 'التقت', 'وصلة كل سنة',
  'HashMap', 'Flashs', 'Ticket-to-Main', 'بحيرات البيانات', 'مبنيانا',
  'المكتب الاداري',
];

const escapeRe = (word) => word.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
const garbledPattern = new RegExp(GARBLED_WORDS.map(escapeRe).join('|'), 'g');

function walk(dir) {
  const results = [];
  for (const entry of readdirSync(dir)) {
    if (SKIP_DIRS.has(entry)) continue;
    const full = join(dir, entry);
    const stat = statSync(full);
    if (stat.isDirectory()) results.push(...walk(full));
    else if (EXTS.has(extname(full))) results.push(full);
  }
  return results;
}

// الأسطر الخالية تماماً من حروف عربية تُعتبر شيفرة/تعليقاً برمجياً ولا تُفحص (لا عربية فيها أصلاً)
const hasArabic = (line) => /[\u0600-\u06FF]/.test(line);

let issues = 0;
const report = (file, line, message, snippet) => {
  issues += 1;
  const short = relative(ROOT, file);
  const frag = snippet && snippet.trim().replace(/\s+/g, ' ').slice(0, 100);
  console.log(`${short}:${line}  [${message}]${frag ? ' — ' + frag : ''}`);
};

for (const file of walk(SRC)) {
  const text = readFileSync(file, 'utf8');
  const lines = text.split('\n');
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const content = hasArabic(line);
    if (content && (/={4,}/.test(line) || /==>/.test(line)) && !line.includes('<!--')) {
      report(file, i + 1, 'رموز تساوي غريبة', line);
    }
    if (content) {
      RE_AR_LATIN.lastIndex = 0;
      RE_LATIN_AR.lastIndex = 0;
      const m1 = RE_AR_LATIN.exec(line);
      if (m1 && !isAllowedRun(m1[1])) {
        report(file, i + 1, 'لاتينية ملتصقة بحرف عربي', line);
      }
      if (!m1) {
        const m2 = RE_LATIN_AR.exec(line);
        if (m2 && !isAllowedRun(m2[1])) {
          report(file, i + 1, 'لاتينية ملتصقة بحرف عربي', line);
        }
      }
    }
    if (garbledPattern.test(line)) {
      garbledPattern.lastIndex = 0;
      report(file, i + 1, 'كلمة آلة غبية', line);
    }
  }
}

if (issues > 0) {
  console.error(`\n✖ جودة العربية فاشلة: ${issues} ملاحظة — أصلحها قبل الاعتماد.`);
  process.exit(1);
}
console.log('✔ جودة العربية سليمة — لا كلمات آلة ولا تشوهات.');