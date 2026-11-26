import { useState, useEffect, useCallback } from 'react';
import useLang from '../../../lib/useLang';
import type { QuizQuestion, QuizOption } from '../../../data/quiz/types';
import { DIFFICULTY_EN } from '../../../data/quiz/types';
import {
  loadProgress,
  saveProgress,
  recordQuizScore,
} from '../../../lib/storage';

interface Props {
  quizId: string;
  questions: QuizQuestion[];
}

export default function ScenarioQuiz({ quizId, questions }: Props) {
  const course = quizId.startsWith('quiz-cmrp')
    ? 'cmrp'
    : quizId.startsWith('quiz-cama')
      ? 'cama'
      : quizId.startsWith('quiz-pmp')
        ? 'pmp'
        : 'cfm';
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [retried, setRetried] = useState(false);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const lang = useLang();

  const isEn = lang === 'en';

  const pick = <T,>(ar: T, en?: T) => (isEn && en !== undefined ? en : ar);

  const optionText = (o: QuizOption) => pick(o.text, o.textEn);
  const optionExplanation = (o: QuizOption) =>
    pick(o.explanation, o.explanationEn);

  const q = questions[current];
  const correctOption = q.options.find((o) => o.isCorrect);
  // A wrong first answer earns one hint and one retry; only the first try scores.
  const canRetry =
    selected !== null && !retried && !q.options[selected].isCorrect;
  const reviewHref = `/${course}/lessons/lesson-${quizId.slice('quiz-'.length)}/`;
  const progress = Math.round(
    ((current + (selected !== null ? 1 : 0)) / questions.length) * 100
  );

  const choose = useCallback(
    (idx: number) => {
      if (selected !== null) return;
      setSelected(idx);
      if (!retried && q.options[idx].isCorrect) setScore((s) => s + 1);
    },
    [selected, retried, q]
  );

  const retry = useCallback(() => {
    if (!canRetry) return;
    setRetried(true);
    setSelected(null);
  }, [canRetry]);

  const next = useCallback(() => {
    if (current + 1 >= questions.length) {
      const total = questions.length;
      const finalScore = score;
      saveProgress(
        recordQuizScore(loadProgress(course), quizId, finalScore, total),
        course
      );
      setFinished(true);
    } else {
      setCurrent((c) => c + 1);
      setSelected(null);
      setRetried(false);
    }
  }, [current, questions.length, score, course, quizId]);

  // Keyboard navigation: 1-4 or A-D to select, Enter to proceed
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ignore if typing in input/textarea
      const target = e.target as HTMLElement;
      if (target?.tagName === 'INPUT' || target?.tagName === 'TEXTAREA') return;

      if (finished) return;

      if (selected === null) {
        const key = e.key.toUpperCase();
        let optionIndex = -1;
        if (key === '1' || key === 'A') optionIndex = 0;
        else if (key === '2' || key === 'B') optionIndex = 1;
        else if (key === '3' || key === 'C') optionIndex = 2;
        else if (key === '4' || key === 'D') optionIndex = 3;

        if (optionIndex >= 0 && optionIndex < q.options.length) {
          e.preventDefault();
          choose(optionIndex);
        }
      } else if (e.key.toUpperCase() === 'R' && canRetry) {
        e.preventDefault();
        retry();
      } else if (e.key === 'Enter') {
        e.preventDefault();
        next();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [finished, selected, q.options.length, choose, next, canRetry, retry]);

  const reset = () => {
    setCurrent(0);
    setSelected(null);
    setRetried(false);
    setScore(0);
    setFinished(false);
  };

  if (finished) {
    const total = questions.length;
    const pct = Math.round((score / total) * 100);
    const pass = pct >= 70;
    return (
      <div className="card mt-6 overflow-hidden animate-fade-in dark:border-slate-700/80 dark:bg-slate-850">
        <div className="border-b border-slate-200 bg-slate-50 px-5 py-3 text-sm font-semibold text-ink-900 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100">
          {isEn
            ? '🏁 Test your understanding — final score'
            : '🏁 اختبر فهمك — النتيجة النهائية'}
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
                className="dark:opacity-20"
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
              <span
                className={`text-3xl font-extrabold ${pass ? 'text-brand-600 dark:text-brand-400' : 'text-rose-600 dark:text-rose-400'}`}
                dir="ltr"
              >
                {pct}%
              </span>
            </div>
          </div>

          <p className="mt-6 text-lg font-bold text-ink-900 dark:text-slate-100">
            {isEn
              ? `${score} out of ${total} correct`
              : `${score} من ${total} إجابة صحيحة`}
          </p>
          <p
            className={`mt-2 font-medium ${pass ? 'text-brand-600 dark:text-brand-400' : 'text-rose-600 dark:text-rose-400'}`}
          >
            {pass
              ? isEn
                ? '🎉 Great job! Solid foundation — ready for the actual exam'
                : '🎉 أحسنت، أساسك قوي! جاهز للامتحان الفعلي'
              : isEn
                ? '💪 Review the explanations and try again'
                : '💪 راجع الشرح وحاول مرة أخرى'}
          </p>
          <p className="mt-2 text-sm text-ink-400 dark:text-slate-400">
            {isEn
              ? course === 'pmp'
                ? 'The PMP exam favors scenario-based judgment in predictive, agile, and hybrid settings.'
                : 'The CFM exam favors scenario-based application, not memorization.'
              : course === 'pmp'
                ? 'أسئلة PMP تقيس الحكم في المواقف التنبؤية والرشيقة والهجينة، لا الحفظ.'
                : 'نمط أسئلة CFM يعتمد السيناريو والتطبيق، لا الحفظ.'}
          </p>

          <div className="mt-6 mx-auto max-w-xs">
            <div className="flex justify-between text-xs text-ink-400 dark:text-slate-400 mb-1">
              <span>{isEn ? 'Your progress' : 'تقدمك'}</span>
              <span dir="ltr">{pct}%</span>
            </div>
            <div className="h-2 overflow-hidden rounded-full bg-slate-100 dark:bg-slate-700">
              <div
                className={`h-full rounded-full transition-all duration-700 ${pass ? 'bg-brand-500' : 'bg-rose-400'}`}
                style={{ width: `${pct}%` }}
              />
            </div>
          </div>

          <button
            type="button"
            onClick={reset}
            className="btn-primary mt-6 shadow-sm"
          >
            {isEn ? '🔄 Try again' : '🔄 إعادة المحاولة'}
          </button>
          <p className="mt-4 text-sm">
            <a
              href={reviewHref}
              className="font-semibold text-brand-600 underline dark:text-brand-400"
            >
              {isEn ? '← Back to lesson review' : '← العودة إلى مراجعة الدرس'}
            </a>
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="card mt-6 overflow-hidden animate-fade-in dark:border-slate-700/80 dark:bg-slate-850">
      <div className="h-1 bg-slate-100 dark:bg-slate-800">
        <div
          className="h-full bg-gradient-to-l from-brand-500 to-brand-400 transition-all duration-500 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className="flex items-center justify-between border-b border-slate-200 bg-brand-50/70 px-5 py-3 dark:border-slate-700 dark:bg-brand-950/40">
        <span className="text-sm font-semibold text-brand-900 dark:text-brand-300">
          {isEn
            ? `💬 Scenario ${current + 1} of ${questions.length}`
            : `💬 سيناريو ${current + 1} من ${questions.length}`}
        </span>
        <div className="flex items-center gap-2">
          <span className="chip bg-brand-100 text-brand-800 dark:bg-brand-900/60 dark:text-brand-300">
            {isEn
              ? `${DIFFICULTY_EN[q.difficulty]}`
              : `الصعوبة: ${q.difficulty}`}
          </span>
          <span className="text-xs text-ink-400 dark:text-slate-400" dir="ltr">
            {progress}%
          </span>
        </div>
      </div>

      <div className="p-6">
        {q.sharedStem && (
          <div className="mb-4 rounded-xl border border-brand-200 bg-brand-50/60 p-4 dark:border-brand-800/60 dark:bg-brand-950/30">
            <p className="mb-1 text-xs font-bold text-brand-700 dark:text-brand-300">
              {isEn ? 'Shared case' : 'حالة مشتركة'}
            </p>
            <p
              className="whitespace-pre-line text-sm leading-relaxed text-ink-700 dark:text-slate-200"
              dir={isEn ? 'ltr' : 'rtl'}
            >
              {pick(q.sharedStem, q.sharedStemEn)}
            </p>
          </div>
        )}
        <p
          className="text-base font-medium leading-relaxed text-ink-900 dark:text-slate-100"
          dir={isEn ? 'ltr' : 'rtl'}
        >
          {pick(q.scenario, q.scenarioEn)}
        </p>
        <p className="mt-4 text-sm font-bold text-brand-700 dark:text-brand-400">
          {pick(q.question, q.questionEn)}
        </p>

        <div className="mt-5 grid gap-3">
          {q.options.map((option, idx) => {
            const isSelected = selected === idx;
            let cls =
              'bg-white text-ink-800 ring-1 ring-slate-200 hover:ring-brand-500 hover:bg-brand-50/40 dark:bg-slate-800/80 dark:text-slate-200 dark:ring-slate-700 dark:hover:bg-slate-750 dark:hover:ring-brand-400';
            let badgeCls =
              'bg-slate-100 text-ink-700 dark:bg-slate-700 dark:text-slate-300';

            if (selected !== null) {
              if (option.isCorrect) {
                cls =
                  'bg-emerald-50 text-emerald-950 ring-2 ring-emerald-500 dark:bg-emerald-950/40 dark:text-emerald-200 dark:ring-emerald-400';
                badgeCls = 'bg-emerald-600 text-white dark:bg-emerald-500';
              } else if (isSelected) {
                cls =
                  'bg-rose-50 text-rose-950 ring-2 ring-rose-400 dark:bg-rose-950/40 dark:text-rose-200 dark:ring-rose-500';
                badgeCls = 'bg-rose-600 text-white dark:bg-rose-500';
              } else {
                cls =
                  'bg-slate-50/60 text-ink-400 opacity-60 dark:bg-slate-800/30 dark:text-slate-500';
                badgeCls =
                  'bg-slate-200/50 text-slate-400 dark:bg-slate-700/50 dark:text-slate-500';
              }
            }

            return (
              <button
                type="button"
                key={idx}
                onClick={() => choose(idx)}
                disabled={selected !== null}
                className={`group flex items-start gap-3 rounded-xl px-4 py-3.5 text-start text-sm leading-relaxed transition-all duration-200 ${cls} ${selected === null ? 'cursor-pointer active:scale-[0.99]' : 'cursor-default'}`}
              >
                <span
                  className={`mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-md text-xs font-bold transition-colors ${badgeCls}`}
                  dir="ltr"
                >
                  {String.fromCharCode(65 + idx)}
                </span>
                <span className="flex-1">{optionText(option)}</span>
              </button>
            );
          })}
        </div>

        {selected !== null && (
          <div
            className={`mt-5 rounded-xl border p-4 text-sm leading-relaxed shadow-xs animate-fade-in ${
              q.options[selected].isCorrect
                ? 'border-emerald-200/90 bg-emerald-50/80 text-emerald-950 dark:border-emerald-800/60 dark:bg-emerald-950/50 dark:text-emerald-200'
                : 'border-rose-200/90 bg-rose-50/80 text-rose-950 dark:border-rose-800/60 dark:bg-rose-950/50 dark:text-rose-200'
            }`}
          >
            <span className="font-bold">
              {q.options[selected].isCorrect
                ? isEn
                  ? '✓ Correct — '
                  : '✓ إجابة صحيحة — '
                : isEn
                  ? '✗ Not the best choice — '
                  : '✗ ليست الأفضل — '}
            </span>
            {optionExplanation(q.options[selected])}
          </div>
        )}

        {selected !== null &&
          correctOption &&
          !q.options[selected].isCorrect && (
            <div className="mt-3 rounded-xl border border-emerald-200/90 bg-emerald-50/70 p-4 text-sm leading-relaxed text-emerald-950 animate-fade-in dark:border-emerald-800/60 dark:bg-emerald-950/40 dark:text-emerald-200">
              <p className="font-bold text-emerald-800 dark:text-emerald-300">
                {isEn ? '✓ Correct answer — ' : '✓ الإجابة الصحيحة — '}
                {optionText(correctOption)}
              </p>
              <p className="mt-1">{optionExplanation(correctOption)}</p>
            </div>
          )}

        {canRetry && (
          <div className="mt-3 rounded-xl border border-amber-200 bg-amber-50/70 p-4 text-sm leading-relaxed text-amber-950 dark:border-amber-800/60 dark:bg-amber-950/30 dark:text-amber-200">
            <p>
              <span className="font-bold">
                {isEn ? '💡 Hint — ' : '💡 تلميح — '}
              </span>
              {isEn
                ? 'Compare the option you picked with the scenario requirement: which choice actually resolves the stated problem? You have one retry.'
                : 'قارن الخيار الذي اخترته بما يطلبه السيناريو: أي خيار يعالج المشكلة المذكورة فعلاً؟ لديك محاولة واحدة لإعادة التفكير.'}
            </p>
            <button
              type="button"
              onClick={retry}
              className="mt-3 rounded-lg border border-amber-400 px-3 py-1.5 text-xs font-bold text-amber-900 transition hover:bg-amber-100 dark:text-amber-200 dark:hover:bg-amber-900/40"
            >
              {isEn ? 'Retry once (R)' : 'إعادة المحاولة مرة واحدة (R)'}
            </button>
          </div>
        )}

        {selected !== null && (
          <div className="mt-6 flex items-center justify-between gap-4">
            <button
              type="button"
              onClick={next}
              className="btn-primary shadow-sm shadow-brand-500/20"
            >
              {current + 1 >= questions.length
                ? isEn
                  ? 'Show final score 🏁'
                  : 'عرض النتيجة 🏁'
                : isEn
                  ? 'Next question ←'
                  : 'السؤال التالي ←'}
            </button>
            <a
              href={reviewHref}
              className="text-xs font-semibold text-brand-600 underline dark:text-brand-400"
            >
              {isEn ? 'Lesson review ←' : 'مراجعة الدرس ←'}
            </a>
            <span className="text-xs text-ink-400 dark:text-slate-400 hidden sm:inline">
              {isEn ? 'Press Enter ↵ for next' : 'اضغط Enter ↵ للتالي'}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
