import { test, describe } from 'node:test';
import assert from 'node:assert/strict';
import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';

const root = process.cwd();
const read = (p) => readFileSync(join(root, p), 'utf8');
const lessonDir = 'src/content/lessons/pmp';
const quizDir = 'src/data/quiz/pmp';

function pmpCurriculum() {
  const text = read('src/data/curriculum.ts');
  const start = text.indexOf("id: 'station-pmp-0'");
  const end = text.indexOf('];\n\nexport function getStation', start);
  assert.ok(start > 0 && end > start, 'PMP curriculum section not found');
  return text.slice(start, end);
}

function explanationStrings() {
  const out = [];
  for (const file of readdirSync(join(root, quizDir)).filter((f) =>
    f.endsWith('.ts')
  )) {
    const text = read(`${quizDir}/${file}`);
    const re = /explanation:\s*(['"])((?:\\.|(?!\1)[^\\])*)\1/g;
    for (const m of text.matchAll(re)) {
      out.push({
        file,
        value: m[2]
          .replace(/\\'/g, "'")
          .replace(/\\"/g, '"')
          .replace(/\\n/g, '\n'),
      });
    }
  }
  return out;
}

function glossaryBullets() {
  const out = [];
  for (const file of readdirSync(join(root, lessonDir)).filter((f) =>
    f.endsWith('.mdx')
  )) {
    const text = read(`${lessonDir}/${file}`);
    const marker = '## 📚 قاموس المصطلحات';
    const i = text.indexOf(marker);
    assert.ok(i >= 0, `${file} must contain the glossary heading`);
    const tail = text.slice(i + marker.length).split(/\n## /)[0];
    const bullets = tail
      .split('\n')
      .filter((line) => /^-\s+\*\*(.+?)\*\*:/.test(line));
    assert.ok(
      bullets.length >= 3,
      `${file} must contain at least 3 glossary bullets`
    );
    for (const line of bullets) out.push({ file, line });
  }
  return out;
}

function conceptSection(lesson) {
  const text = read(`${lessonDir}/lesson-pmp-${lesson}.mdx`);
  const start = text.indexOf('## 1. المفهوم');
  const end = text.indexOf('## 2. سيناريو واقعي', start);
  assert.ok(start > 0 && end > start, `concept section missing in ${lesson}`);
  return text.slice(start, end);
}

describe('PMP exam-readiness contract', () => {
  test('curriculum domain weights equal 33/41/26 and total 100', () => {
    const sums = { People: 0, Process: 0, 'Business Environment': 0 };
    const re =
      /examWeight:\s*(\d+),\s*\n\s*domain:\s*'(People|Process|Business Environment)'/g;
    for (const m of pmpCurriculum().matchAll(re)) sums[m[2]] += Number(m[1]);
    assert.deepEqual(sums, {
      People: 33,
      Process: 41,
      'Business Environment': 26,
    });
    assert.equal(
      Object.values(sums).reduce((a, b) => a + b, 0),
      100
    );
  });

  test('station content files agree with curriculum ECO weights', () => {
    const curriculum = pmpCurriculum();
    const stationDir = 'src/content/stations/pmp';
    const files = readdirSync(join(root, stationDir)).filter((f) =>
      f.endsWith('.md')
    );
    assert.equal(files.length, 12);
    for (const file of files) {
      const text = read(`${stationDir}/${file}`);
      const id = text.match(/^id:\s*"(station-pmp-\d+)"/m)?.[1];
      assert.ok(id, `${file} must declare its station id`);
      const weight = Number(text.match(/^examWeight:\s*(\d+)/m)?.[1]);
      const domain = text.match(/^domain:\s*"(.+)"/m)?.[1] ?? '';
      const curriculumBlock = curriculum.slice(
        curriculum.indexOf(`id: '${id}'`)
      );
      const expected = Number(
        curriculumBlock.match(/examWeight:\s*(\d+)/)?.[1]
      );
      assert.equal(weight, expected, `${file} weight must match curriculum`);
      if (id === 'station-pmp-10') {
        assert.ok(weight > 0, 'agile/hybrid station must carry exam weight');
        assert.equal(
          domain,
          'Process',
          'agile/hybrid belongs to the Process domain'
        );
      }
    }
  });

  test('all 26 ECO tasks are explicitly mapped to lessons and quizzes', () => {
    const path = 'src/data/pmpEcoTasks.ts';
    assert.ok(existsSync(join(root, path)), `${path} must exist`);
    const text = read(path);
    const ids = [...text.matchAll(/id:\s*'(P|BE|C)(\d+|T\d+)'/g)].map(
      (m) => m[1]
    );
    assert.equal(ids.length, 26, `expected 26 ECO tasks, found ${ids.length}`);
    assert.deepEqual(
      {
        P: ids.filter((id) => id.startsWith('P')).length,
        C: ids.filter((id) => id.startsWith('C')).length,
        BE: ids.filter((id) => id.startsWith('BE')).length,
      },
      { P: 8, C: 10, BE: 8 },
      'ECO task counts must be People 8 / Process 10 / Business Environment 8'
    );
    assert.ok(text.includes(`lessonIds:`), 'every task needs lessonIds');
    assert.ok(text.includes(`quizIds:`), 'every task needs quizIds');
  });

  test('mock exam uses 80 seconds per question and a single 180-question mode', () => {
    const text = read('src/components/islands/tools/pmp/PmpMockExam.tsx');
    assert.match(text, /secondsPerQuestion=\{80\}/);
    const m = text.match(/countOptions=\{([^}]+)\}/);
    assert.ok(m, 'countOptions must be declared');
    assert.equal(m[1].replace(/\s/g, ''), '[mockPmpQuestions.length]');
  });

  test('every inline glossary bullet has an English term in parentheses', () => {
    const missing = glossaryBullets().filter(
      (b) => !/\([A-Za-z][^)]*\)/.test(b.line)
    );
    assert.deepEqual(
      missing.slice(0, 5).map((b) => `${b.file}: ${b.line.trim()}`),
      [],
      `${missing.length} glossary bullets lack English parentheses`
    );
  });

  test('all 880 quiz explanations are substantial and not duplicated', () => {
    const all = explanationStrings();
    assert.equal(all.length, 880);
    const short = all.filter((x) => x.value.trim().length < 20);
    assert.deepEqual(
      short.slice(0, 5).map((x) => `${x.file}: ${x.value}`),
      [],
      `${short.length} explanations are shorter than 20 characters`
    );
    const counts = new Map();
    for (const x of all) counts.set(x.value, (counts.get(x.value) ?? 0) + 1);
    const duplicates = [...counts.entries()].filter(([, n]) => n > 1);
    assert.deepEqual(
      duplicates.slice(0, 5),
      [],
      `${duplicates.length} duplicated explanations`
    );
  });

  test('ScenarioQuiz shows the correct option explanation after a wrong answer', () => {
    const text = read('src/components/islands/quiz/ScenarioQuiz.tsx');
    assert.match(
      text,
      /q\.options\.find\(\(o\) => o\.isCorrect\)/,
      'must define the correct option for remediation'
    );
    assert.match(
      text,
      /optionExplanation\(correctOption\)/,
      'must render its explanation'
    );
  });

  test('at least two shared case sets with multi-question stems exist', () => {
    const withCase = readdirSync(join(root, quizDir))
      .filter((f) => f.endsWith('.ts'))
      .filter((f) => /caseSetId:/.test(read(`${quizDir}/${f}`)));
    assert.ok(
      withCase.length >= 2,
      `expected >=2 case-set banks, found ${withCase.length}`
    );
    assert.match(read('src/data/quiz/types.ts'), /caseSetId/);
  });

  test('shared case stems render Markdown tables instead of raw pipes', () => {
    const text = read('src/components/islands/quiz/ScenarioQuiz.tsx');
    assert.match(text, /split\('\|'\)/, 'must parse Markdown table rows');
    assert.match(text, /<table/, 'must render a real table element');
    assert.match(text, /<CaseStem/, 'must use the case-stem renderer');
  });

  test('generative AI is taught in content, quizzes and the island tool', () => {
    const re = /توليدي|GenAI|generative/i;
    assert.match(read(`${lessonDir}/lesson-pmp-9-6.mdx`), re);
    assert.match(read(`${quizDir}/quiz-pmp-9-6.ts`), re);
    assert.match(read('src/components/islands/tools/pmp/PmpTool.tsx'), re);
  });

  test('objectives promised in problem lessons are actually taught in the concept sections', () => {
    const expected = {
      '0-1': ['النتيجة (Outcome)', 'ميثاق المشروع'],
      '1-3': ['بوابة المرحلة', 'التطوير التدريجي'],
      '4-3': ['VAC'],
      '6-1': ['EMV'],
      '6-3': ['المخاطر المتبقية', 'المخاطر الثانوية'],
      '10-5': ['Burnup'],
    };
    for (const [lesson, terms] of Object.entries(expected)) {
      const body = conceptSection(lesson);
      for (const term of terms) {
        assert.ok(
          body.includes(term),
          `lesson ${lesson} concept must teach ${term}`
        );
      }
    }
  });

  test('every lesson has platform-level depth and bilingual teaching components', () => {
    const files = readdirSync(join(root, lessonDir)).filter((f) =>
      f.endsWith('.mdx')
    );
    assert.equal(files.length, 55);
    const shallow = [];
    for (const file of files) {
      const text = read(`${lessonDir}/${file}`);
      const words = text.split(/\s+/).filter(Boolean).length;
      if (words < 1000) shallow.push(`${file}: ${words}`);
      for (const component of ['LangSection', 'GlossaryCard', 'Callout']) {
        assert.ok(text.includes(component), `${file} must use ${component}`);
      }
    }
    assert.deepEqual(
      shallow.slice(0, 5),
      [],
      `${shallow.length} lessons are under 1000 words`
    );
  });

  test('known garbled, duplicated and non-Arabic fragments are gone', () => {
    const bad = [
      'الدوء المؤقتة',
      '(Temporary) (Temporary)',
      'ομπρέρα',
      'الأقتصادي',
      'repetitively',
    ];
    const dirs = [
      lessonDir,
      quizDir,
      'src/data/glossary',
      'src/components/islands/tools/pmp',
    ];
    const hits = [];
    for (const dir of dirs) {
      for (const file of readdirSync(join(root, dir)).filter((f) =>
        /\.(mdx|ts|tsx)$/.test(f)
      )) {
        const text = read(`${dir}/${file}`);
        for (const token of bad)
          if (text.includes(token)) hits.push(`${dir}/${file}: ${token}`);
      }
    }
    assert.deepEqual(
      hits.slice(0, 10),
      [],
      `${hits.length} bad fragments remain`
    );
  });
});
