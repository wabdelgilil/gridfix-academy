export const Y = (text, explanation) => [text, explanation, true];
export const N = (text, explanation) => [text, explanation, false];

export const q = (scenario, question, difficulty, options) => ({
  scenario,
  question,
  difficulty,
  options: options.map(([text, explanation, isCorrect]) => ({
    text,
    isCorrect,
    explanation,
  })),
});

// Attach one shared case stem to every question of a bank that forms a case set.
export const withCase = (questions, caseInfo) =>
  questions.map((question) => ({ ...question, ...caseInfo }));
