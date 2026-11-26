import fs from 'fs';
import path from 'path';

function parseFrontmatter(content) {
  const match = content.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!match) return { data: {}, body: content };
  const raw = match[1];
  const body = content.slice(match[0].length);
  const data = {};
  for (const line of raw.split('\n')) {
    const idx = line.indexOf(':');
    if (idx > 0) {
      const key = line.slice(0, idx).trim();
      let val = line.slice(idx + 1).trim();
      if (
        (val.startsWith('"') && val.endsWith('"')) ||
        (val.startsWith("'") && val.endsWith("'"))
      ) {
        val = val.slice(1, -1);
      }
      data[key] = val;
    }
  }
  return { data, body };
}

const courses = ['cfm', 'cmrp', 'cama'];

console.log(
  '========================================================================================'
);
console.log('GRIDFIX ACADEMY — COMPREHENSIVE CURRICULUM & CONTENT DEPTH AUDIT');
console.log(
  '========================================================================================\n'
);

for (const c of courses) {
  const lessonDir = path.join('src/content/lessons', c);
  if (!fs.existsSync(lessonDir)) continue;
  const files = fs
    .readdirSync(lessonDir)
    .filter((f) => f.endsWith('.md') || f.endsWith('.mdx'));
  files.sort((a, b) =>
    a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' })
  );

  let totalWords = 0;
  let totalArabicWords = 0;
  let totalEnglishWords = 0;
  let totalFigures = 0;
  let totalQuizzes = 0;
  let totalInteractives = 0;
  let totalGlossary = 0;
  let totalCallouts = 0;
  let totalQuizQuestions = 0;

  const quizDir = path.join('src/data/quiz', c);
  const quizFiles = fs.existsSync(quizDir)
    ? fs.readdirSync(quizDir).filter((f) => f.endsWith('.ts'))
    : [];

  // Count questions in quiz files
  const questionsPerQuiz = {};
  for (const qf of quizFiles) {
    const qContent = fs.readFileSync(path.join(quizDir, qf), 'utf8');
    const qCount = (qContent.match(/scenario:\s*["'`]/g) || []).length;
    questionsPerQuiz[qf] = qCount;
    totalQuizQuestions += qCount;
  }

  const lessonDetails = [];

  for (const f of files) {
    const full = path.join(lessonDir, f);
    const raw = fs.readFileSync(full, 'utf8');
    const { data, body } = parseFrontmatter(raw);
    const words = body.trim().split(/\s+/).length;
    const lines = body.split('\n').length;
    const h2s = (body.match(/^##\s+(.+)$/gm) || []).map((h) =>
      h.replace(/^##\s+/, '').trim()
    );

    // Extract Arabic vs English sections if LangSection exists
    const arSections =
      body.match(/<LangSection\s+lang=["']ar["']>([\s\S]*?)<\/LangSection>/g) ||
      [];
    const enSections =
      body.match(/<LangSection\s+lang=["']en["']>([\s\S]*?)<\/LangSection>/g) ||
      [];

    const arText = arSections.map((s) => s.replace(/<[^>]+>/g, '')).join(' ');
    const enText = enSections.map((s) => s.replace(/<[^>]+>/g, '')).join(' ');

    const arWords = arText.trim() ? arText.trim().split(/\s+/).length : 0;
    const enWords = enText.trim() ? enText.trim().split(/\s+/).length : 0;

    totalArabicWords += arWords;
    totalEnglishWords += enWords;

    const hasCallout = /<Callout/i.test(body);
    const hasGlossary = /<GlossaryCard/i.test(body);
    const hasQuiz = /<(ScenarioQuiz|QuizBank)/i.test(body) || !!data.quizId;
    const hasFigure =
      /<(FlowChart|Timeline|Infographic|Hierarchy|Comparison|StatGrid)/i.test(
        body
      );
    const hasInteractive =
      data.hasTool === 'true' ||
      data.hasTool === true ||
      /Interactive|BuildingSystemsMap|FmeaTool|WeibullTool|RcmDecisionTree|PtoFInteractive|RimeMatrix/i.test(
        body
      );

    totalWords += words;
    if (hasFigure) totalFigures++;
    if (hasQuiz) totalQuizzes++;
    if (hasInteractive) totalInteractives++;
    if (hasGlossary) totalGlossary++;
    if (hasCallout) totalCallouts++;

    lessonDetails.push({
      file: f,
      number: data.number || f,
      title: data.title || f,
      titleEn: data.titleEn || '',
      station: data.station || '',
      words,
      arWords,
      enWords,
      lines,
      h2Count: h2s.length,
      hasFigure,
      hasQuiz,
      hasInteractive,
      hasGlossary,
      hasCallout,
      quizId: data.quizId,
    });
  }

  console.log(
    `========================================================================================`
  );
  console.log(
    `COURSE: ${c.toUpperCase()} (${files.length} Lessons | ${quizFiles.length} Quiz Files | ${totalQuizQuestions} Questions)`
  );
  console.log(
    `========================================================================================`
  );
  console.log(
    `  Total Content Words: ${totalWords.toLocaleString()} (Avg: ${Math.round(totalWords / files.length)} words/lesson)`
  );
  if (totalArabicWords > 0) {
    console.log(
      `  Arabic Words: ${totalArabicWords.toLocaleString()} | English Words: ${totalEnglishWords.toLocaleString()}`
    );
  }
  console.log(
    `  Interactive Tools: ${totalInteractives}/${files.length} (${Math.round((totalInteractives / files.length) * 100)}%)`
  );
  console.log(
    `  Visual Figures: ${totalFigures}/${files.length} (${Math.round((totalFigures / files.length) * 100)}%)`
  );
  console.log(
    `  Scenario Quizzes: ${totalQuizzes}/${files.length} (${Math.round((totalQuizzes / files.length) * 100)}%)`
  );
  console.log(
    `  Glossary Terms: ${totalGlossary}/${files.length} (${Math.round((totalGlossary / files.length) * 100)}%)`
  );
  console.log(
    `  Callouts: ${totalCallouts}/${files.length} (${Math.round((totalCallouts / files.length) * 100)}%)`
  );
  console.log(
    `  Quiz Bank Coverage: ${totalQuizQuestions} total questions across course quizzes & mock exams.\n`
  );

  // Print distribution by length
  const under1k = lessonDetails.filter((l) => l.words < 1000);
  const between1kAnd15k = lessonDetails.filter(
    (l) => l.words >= 1000 && l.words < 1500
  );
  const between15kAnd2k = lessonDetails.filter(
    (l) => l.words >= 1500 && l.words < 2000
  );
  const over2k = lessonDetails.filter((l) => l.words >= 2000);

  console.log(`  Word Count Distribution:`);
  console.log(`    < 1,000 words:  ${under1k.length} lessons`);
  console.log(`    1,000 - 1,499: ${between1kAnd15k.length} lessons`);
  console.log(`    1,500 - 1,999: ${between15kAnd2k.length} lessons`);
  console.log(`    >= 2,000 words: ${over2k.length} lessons`);

  if (under1k.length > 0) {
    console.log(`\n  Lessons < 1,000 words:`);
    for (const l of under1k) {
      console.log(
        `    - [${l.number}] ${l.title} (${l.words} words, ${l.lines} lines)`
      );
    }
  }
  console.log('\n');
}
