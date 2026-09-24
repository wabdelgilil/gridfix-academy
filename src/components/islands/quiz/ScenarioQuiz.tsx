import { useState, useEffect } from 'react';
import type { QuizQuestion, QuizOption } from '../../../data/quiz/types';
import { DIFFICULTY_EN } from '../../../data/quiz/types';
import { loadProgress, saveProgress, recordQuizScore } from '../../../lib/storage';

interface Props {
  quizId: string;
  questions: QuizQuestion[];
}

export default function ScenarioQuiz({ quizId, questions }: Props) {
  const course = quizId.startsWith('quiz-cmrp') ? 'cmrp' : quizId.startsWith('quiz-cama') ? 'cama' : 'cfm';
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const [lang, setLang] = useState<'ar' | 'en'>('ar');

  const isEn = lang === 'en';

  useEffect(() => {
    const sync = () => setLang(document.documentElement.lang === 'en' ? 'en' : 'ar');
    sync();
    window.addEventListener('cfm-lang-changed', sync);
    return () => window.removeEventListener('cfm-lang-changed', sync);
  }, []);

  const pick = <T,>(ar: T, en?: T) => (isEn && en !== undefined ? en : ar);

  const optionText = (o: QuizOption) => pick(o.text, o.textEn);
  const optionExplanation = (o: QuizOption) => pick(o.explanation, o.explanationEn);

  const q = questions[current];
  const progress = Math.round(((current + (selected !== null ? 1 : 0)) / questions.length) * 100);

  const choose = (idx: number) => {
    if (selected !== null) return;
    setSelected(idx);
    if (q.options[idx].isCorrect) setScore((s) => s + 1);
  };

  const next = () => {
    if (current + 1 >= questions.length) {
      const total = questions.length;
      const finalScore = score;
      saveProgress(recordQuizScore(loadProgress(course), quizId, finalScore, total), course);
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
      <div className="card mt-6 overflow-hidden animate-fade-in">
        <div className="border-b border-slate-200 bg-slate-50 px-5 py-3 text-sm font-semibold text-ink-900">
          {isEn ? '🏁 Test your understanding — final score' : '🏁 اختبر فهمك — النتيجة النهائية'}
        </div>
        <div className="p-8 text-center">
          <div className="relative mx-auto h-32 w-32">
            <svg className="h-full w-full -rotate-90" viewBox="0 0 120 120">
              <circle
                cx="60"
                cy="60"
                r="52"
                fill="none"
                stroke={pass ? '#ccfbf1' : '#ffe4e6'}
                strokeWidth="10"
              />
              <circle
                cx="60"
                cy="60"
                r="52"
                fill="none"
                stroke={pass ? '#14b8a6' : '#f43f5e'}
                strokeWidth="10"
                strokeLinecap="round"
                strokeDasharray={`${(pct / 100) * 327} 327`}
                className="transition-all duration-1000 ease-out"
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className={`text-3xl font-bold ${pass ? 'text-brand-700' : 'text-rose-600'}`} dir="ltr">
                {pct}%
              </span>
            </div>
          </div>

          <p className="mt-6 text-lg font-semibold text-ink-900">
            {isEn
              ? `${score} out of ${total} correct`
              : `${score} من ${total} إجابة صحيحة`}
          </p>
          <p className={`mt-2 font-medium ${pass ? 'text-brand-600' : 'text-rose-600'}`}>
            {pass
              ? isEn ? '🎉 Great job! Solid foundation — ready for the actual exam' : '🎉 أحسنت، أساسك قوي! جاهز للامتحان الفعلي'
              : isEn ? '💪 Review the explanations and try again' : '💪 راجع الشرح وحاول مرة أخرى'}
          </p>
          <p className="mt-2 text-sm text-ink-400">
            {isEn ? 'The CFM exam favors scenario-based application, not memorization.' : 'نمط أسئلة CFM يعتمد السيناريو والتطبيق، لا الحفظ.'}
          </p>

          <div className="mt-6 mx-auto max-w-xs">
            <div className="flex justify-between text-xs text-ink-400 mb-1">
              <span>{isEn ? 'Your progress' : 'تقدمك'}</span>
              <span dir="ltr">{pct}%</span>
            </div>
            <div className="h-2 overflow-hidden rounded-full bg-slate-100">
              <div
                className={`h-full rounded-full transition-all duration-700 ${pass ? 'bg-brand-500' : 'bg-rose-400'}`}
                style={{ width: `${pct}%` }}
              />
            </div>
          </div>

          <button type="button" onClick={reset} className="btn-primary mt-6 bg-ink-900 hover:bg-ink-800">
            {isEn ? '🔄 Try again' : '🔄 إعادة المحاولة'}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="card mt-6 overflow-hidden animate-fade-in">
      <div className="h-1 bg-slate-100">
        <div
          className="h-full bg-gradient-to-l from-brand-500 to-brand-400 transition-all duration-500 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className="flex items-center justify-between border-b border-slate-200 bg-brand-50 px-5 py-3">
        <span className="text-sm font-semibold text-brand-800">
          {isEn ? `💬 Scenario ${current + 1} of ${questions.length}` : `💬 سيناريو ${current + 1} من ${questions.length}`}
        </span>
        <div className="flex items-center gap-2">
          <span className="chip bg-brand-100 text-brand-700">{isEn ? `${DIFFICULTY_EN[q.difficulty]}` : `الصعوبة: ${q.difficulty}`}</span>
          <span className="text-xs text-ink-400" dir="ltr">{progress}%</span>
        </div>
      </div>

      <div className="p-6">
        <p className="text-base font-medium leading-relaxed text-ink-900" dir={isEn ? 'ltr' : 'rtl'}>{pick(q.scenario, q.scenarioEn)}</p>
        <p className="mt-4 text-sm font-bold text-brand-700">{pick(q.question, q.questionEn)}</p>

        <div className="mt-5 grid gap-3">
          {q.options.map((option, idx) => {
            const isSelected = selected === idx;
            let cls = 'bg-white ring-1 ring-slate-200 hover:ring-brand-500 hover:bg-brand-50/50';
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
                className={`rounded-xl px-5 py-4 text-start text-sm leading-relaxed text-ink-700 transition-all duration-200 ${cls} ${selected === null ? 'cursor-pointer active:scale-[0.98]' : 'cursor-default'}`}
              >
                <span className="font-bold text-brand-700" dir="ltr">{String.fromCharCode(65 + idx)}.</span> {optionText(option)}
              </button>
            );
          })}
        </div>

        {selected !== null && (
          <div className={`mt-5 rounded-xl p-4 text-sm leading-relaxed animate-fade-in ${q.options[selected].isCorrect ? 'bg-brand-50 text-brand-800' : 'bg-rose-50 text-rose-800'}`}>
            <span className="font-bold">
              {q.options[selected].isCorrect
                ? isEn ? '✓ Correct — ' : '✓ إجابة صحيحة — '
                : isEn ? '✗ Not the best choice — ' : '✗ ليست الأفضل — '}
            </span>
            {optionExplanation(q.options[selected])}
          </div>
        )}

        {selected !== null && (
          <button
            type="button"
            onClick={next}
            className="btn-primary mt-6"
          >
            {current + 1 >= questions.length
              ? isEn ? 'Show final score 🏁' : 'عرض النتيجة 🏁'
              : isEn ? 'Next question ←' : 'السؤال التالي ←'}
          </button>
        )}
      </div>
    </div>
  );
}