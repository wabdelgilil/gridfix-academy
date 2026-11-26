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
