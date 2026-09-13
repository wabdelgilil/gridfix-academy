import { useState } from 'react';
import type { QuizQuestion } from '../../../data/quiz/types';
import { loadProgress, saveProgress, recordQuizScore } from '../../../lib/storage';

interface Props {
  quizId: string;
  questions: QuizQuestion[];
}

export default function ScenarioQuiz({ quizId, questions }: Props) {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const q = questions[current];

  const choose = (idx: number) => {
    if (selected !== null) return;
    setSelected(idx);
    if (q.options[idx].isCorrect) setScore((s) => s + 1);
  };

  const next = () => {
    if (current + 1 >= questions.length) {
      const total = questions.length;
      const finalScore = score;
      saveProgress(recordQuizScore(loadProgress(), quizId, finalScore, total));
      setFinished(true);
    } else {
      setCurrent((c) => c + 1);
      setSelected(null);
    }
  };

  const reset = () => {
    setCurrent(0);
    setSelected(null);
    setScore(0);
    setFinished(false);
  };

  if (finished) {
    const total = questions.length;
    const pct = Math.round((score / total) * 100);
    const pass = pct >= 70;
    return (
      <div className="card mt-6 overflow-hidden">
        <div className="border-b border-slate-200 bg-slate-50 px-5 py-3 text-sm font-semibold text-ink-900">
          🏁 اختبر فهمك — النتيجة النهائية
        </div>
        <div className="p-6 text-center">
          <div className={`mx-auto flex h-24 w-24 items-center justify-center rounded-full text-3xl font-bold ${pass ? 'bg-brand-50 text-brand-700' : 'bg-rose-50 text-rose-700'}`} dir="ltr">
            {pct}%
          </div>
          <p className="mt-4 text-lg font-semibold text-ink-900">
            {score} من {total} إجابة صحيحة
            {pass ? ' — أحسنت، أساسك قوي 🎉' : ' — راجع الشرح وحاول مرة أخرى 💪'}
          </p>
          <p className="mt-1 text-sm text-ink-400">نمط أسئلة CFM يعتمد السيناريو والتطبيق، لا الحفظ.</p>
          <button type="button" onClick={reset} className="mt-5 rounded-xl bg-ink-900 px-6 py-2.5 text-sm font-semibold text-white cursor-pointer hover:bg-ink-600">
            🔄 إعادة المحاولة
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="card mt-6 overflow-hidden">
      <div className="flex items-center justify-between border-b border-slate-200 bg-brand-50 px-5 py-3">
        <span className="text-sm font-semibold text-brand-800">💬 سيناريو {current + 1} من {questions.length}</span>
        <span className="chip bg-brand-100 text-brand-700">الصعوبة: {q.difficulty}</span>
      </div>

      <div className="p-5">
        <p className="text-base font-medium leading-relaxed text-ink-900">{q.scenario}</p>
        <p className="mt-3 text-sm font-semibold text-brand-700">{q.question}</p>

        <div className="mt-4 grid gap-3">
          {q.options.map((option, idx) => {
            const isSelected = selected === idx;
            let cls = 'bg-white ring-1 ring-slate-200 hover:ring-brand-500';
            if (selected !== null) {
              if (option.isCorrect) cls = 'bg-brand-50 ring-1 ring-brand-500';
              else if (isSelected) cls = 'bg-rose-50 ring-1 ring-rose-400';
              else cls = 'bg-white opacity-50';
            }
            return (
              <button
                type="button"
                key={idx}
                onClick={() => choose(idx)}
                disabled={selected !== null}
                className={`rounded-xl px-4 py-3 text-start text-sm leading-relaxed text-ink-700 transition ${cls} ${selected === null ? 'cursor-pointer' : 'cursor-default'}`}
              >
                <span className="font-bold text-brand-700" dir="ltr">{String.fromCharCode(65 + idx)}.</span> {option.text}
              </button>
            );
          })}
        </div>

        {selected !== null && (
          <div className={`mt-4 rounded-xl p-4 text-sm leading-relaxed ${q.options[selected].isCorrect ? 'bg-brand-50 text-brand-800' : 'bg-rose-50 text-rose-800'}`}>
            <span className="font-bold">{q.options[selected].isCorrect ? '✓ إجابة صحيحة — ' : '✗ ليست الأفضل — '}</span>
            {q.options[selected].explanation}
          </div>
        )}

        {selected !== null && (
          <button
            type="button"
            onClick={next}
            className="mt-5 rounded-xl bg-brand-600 px-6 py-2.5 text-sm font-semibold text-white cursor-pointer hover:bg-brand-700"
          >
            {current + 1 >= questions.length ? 'عرض النتيجة 🏁' : 'السؤال التالي ←'}
          </button>
        )}
      </div>
    </div>
  );
}