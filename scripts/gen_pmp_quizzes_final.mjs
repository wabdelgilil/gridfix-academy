import { writeFileSync } from 'node:fs';
import dataA from './pmp_quiz_data_a.mjs';
import dataB from './pmp_quiz_data_b.mjs';

const banks = { ...dataA, ...dataB };
const str = (value) => JSON.stringify(value);

const optionalField = (name, value) =>
  value ? `      ${name}: ${str(value)},\n` : '';

for (const [key, questions] of Object.entries(banks)) {
  const name = `quizPmp${key.replace('-', '')}`;
  const body = questions
    .map(
      (question) => `    {
      scenario: ${str(question.scenario)},
      question: ${str(question.question)},
      difficulty: ${str(question.difficulty)},
${optionalField('caseSetId', question.caseSetId)}${optionalField('sharedStem', question.sharedStem)}${optionalField('sharedStemEn', question.sharedStemEn)}      options: [
${question.options
  .map(
    (option) => `        {
          text: ${str(option.text)},
          isCorrect: ${option.isCorrect},
          explanation: ${str(option.explanation)},
        },`
  )
  .join('\n')}
      ],
    },`
    )
    .join('\n');
  const content = `import type { QuizBank } from '../types';

export const ${name}: QuizBank = {
  id: 'quiz-pmp-${key}',
  questions: [
${body}
  ],
};

export default ${name};
`;
  writeFileSync(`src/data/quiz/pmp/quiz-pmp-${key}.ts`, content, 'utf8');
}

console.log(`regenerated ${Object.keys(banks).length} PMP quiz banks`);
