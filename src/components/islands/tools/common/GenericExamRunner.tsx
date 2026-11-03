import { useEffect, useState } from 'react';
import useLang from '../../../../lib/useLang';
import { DIFFICULTY_EN } from '../../../../data/quiz/types';
import { loadProgress, saveProgress, recordMockExamScore } from '../../../../lib/storage';

export interface ExamOption {
  text: string;
  textEn?: string;
  isCorrect: boolean;
  explanation: string;
  explanationEn?: string;
}

export interface ExamQuestion {
  id?: string;
  scenario: string;
  scenarioEn?: string;
  question: string;
  questionEn?: string;
  difficulty: 'سهل' | 'متوسط' | 'صعب';
  options: ExamOption[];
  sectionId: number;
}

export interface SectionMeta {
  id: number;
  name: string;
  nameEn: string;
}

export interface GenericExamRunnerProps {
  examCode: string; // e.g. "CFM", "CMRP", "CAMA"
  examTitle: string;
  examTitleEn: string;
  examDescription: string;
  examDescriptionEn: string;
  sectionLabel: string; // e.g. "المحطة", "المحور", "المجلد"
  sectionLabelEn: string; // e.g. "Station", "Pillar", "Volume"
  questions: ExamQuestion[];
  sections: SectionMeta[];
  countOptions?: number[];
  defaultCount?: number;
  secondsPerQuestion?: number;
  passThresholdPercent?: number;
  storageCourseId?: string;
}

export default function GenericExamRunner({
  examCode,
  examTitle,
  examTitleEn,
  examDescription,
  examDescriptionEn,
  sectionLabel,
  sectionLabelEn,
  questions,
  sections,
  countOptions = [10, 20, 50],
  defaultCount,
  secondsPerQuestion = 80,
  passThresholdPercent = 70,
  storageCourseId,
}: GenericExamRunnerProps) {
  const lang = useLang();
  const isEn = lang === 'en';

  const [count, setCount] = useState(defaultCount ?? countOptions[0]);
  const [stage, setStage] = useState<'setup' | 'running' | 'done'>('setup');
  const [items, setItems] = useState<ExamQuestion[]>([]);
  const [answers, setAnswers] = useState<number[]>([]);
  const [idx, setIdx] = useState(0);
  const [seconds, setSeconds] = useState(0);

  // Timer loop
  useEffect(() => {
    if (stage !== 'running') return;
    const t = setInterval(() => setSeconds((s) => s + 1), 1000);
    return () => clearInterval(t);
  }, [stage]);

  const start = (n: number) => {
    const picked = [...questions].sort(() => 0.5 - Math.random()).slice(0, n);
    setItems(picked);
    setAnswers(Array(n).fill(-1));
    setIdx(0);
    setSeconds(0);
    setCount(n);
    setStage('running');
  };

  const totalSec = count * secondsPerQuestion;
  const left = Math.max(0, totalSec - seconds);
  const timedOut = stage === 'running' && seconds >= totalSec;

  useEffect(() => {
    if (timedOut) setStage('done');
  }, [timedOut]);

  const pick = (opt: number) => setAnswers((a) => a.map((v, i) => (i === idx ? opt : v)));
  const answered = answers.filter((a) => a >= 0).length;

  const score = answers.reduce((acc, a, i) => acc + (a >= 0 && items[i]?.options[a]?.isCorrect ? 1 : 0), 0);
  const pct = count ? Math.round((score / count) * 100) : 0;
  const pass = pct >= passThresholdPercent;

  // Breakdown by section
  const sectionBreakdown = sections.map((sec) => {
    const qs = items.map((q, i) => ({ q, i })).filter(({ q }) => q.sectionId === sec.id);
    const ok = qs.filter(({ q, i }) => answers[i] >= 0 && q.options[answers[i]]?.isCorrect).length;
    return {
      id: sec.id,
      name: sec.name,
      nameEn: sec.nameEn,
      ok,
      total: qs.length,
      pct: qs.length ? Math.round((ok / qs.length) * 100) : 0,
    };
  }).filter((s) => s.total > 0 || stage === 'setup');

  const weakest = sectionBreakdown.filter((s) => s.total > 0).sort((a, b) => a.pct - b.pct)[0];

  // Save exam results when finished
  useEffect(() => {
    if (stage === 'done' && storageCourseId) {
      try {
        const current = loadProgress(storageCourseId);
        const breakdown: Record<string, number> = {};
        sectionBreakdown.forEach((s) => {
          breakdown[String(s.id)] = s.pct;
        });
        const updated = recordMockExamScore(current, pct, breakdown, pass);
        saveProgress(updated, storageCourseId);
      } catch {}
    }
  }, [stage, storageCourseId, pct, pass]);

  // Keyboard navigation during exam
  useEffect(() => {
    if (stage !== 'running') return;

    const handleKeyDown = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement;
      if (target?.tagName === 'INPUT' || target?.tagName === 'TEXTAREA') return;

      const key = e.key.toUpperCase();
      let optIdx = -1;
      if (key === '1' || key === 'A') optIdx = 0;
      else if (key === '2' || key === 'B') optIdx = 1;
      else if (key === '3' || key === 'C') optIdx = 2;
      else if (key === '4' || key === 'D') optIdx = 3;

      if (optIdx >= 0 && items[idx] && optIdx < items[idx].options.length) {
        e.preventDefault();
        pick(optIdx);
      } else if (e.key === 'ArrowLeft' || e.key === 'Enter') {
        if (idx < count - 1) {
          e.preventDefault();
          setIdx((i) => i + 1);
        }
      } else if (e.key === 'ArrowRight') {
        if (idx > 0) {
          e.preventDefault();
          setIdx((i) => i - 1);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [stage, idx, count, items]);

  const fmtTime = (s: number) => {
    const hrs = Math.floor(s / 3600);
    const mins = Math.floor((s % 3600) / 60);
    const secs = s % 60;
    if (hrs > 0) {
      return isEn ? `${hrs}h ${mins}m` : `${hrs}س ${mins}د`;
    }
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  // Stage 1: Setup
  if (stage === 'setup') {
    return (
      <div className="card mt-6 overflow-hidden dark:border-slate-700/80 dark:bg-slate-850">
        <div className="border-b border-slate-200 bg-brand-50/80 px-5 py-3 text-sm font-semibold text-brand-900 dark:border-slate-700 dark:bg-brand-950/40 dark:text-brand-300">
          📝 {isEn ? `${examTitleEn} — Choose questions count & start` : `${examTitle} — اختر عدد الأسئلة وابدأ`}
        </div>
        <div className="space-y-4 p-5">
          <p className="text-sm leading-relaxed text-ink-600 dark:text-slate-300">
            {isEn ? examDescriptionEn : examDescription}
          </p>

          <div className="grid gap-1.5 text-xs">
            {sections.map((sec) => {
              const secCount = questions.filter((q) => q.sectionId === sec.id).length;
              return (
                <div
                  key={sec.id}
                  className="flex items-center justify-between rounded-lg bg-slate-50 px-3 py-1.5 dark:bg-slate-800/60"
                >
                  <span className="font-semibold text-ink-700 dark:text-slate-300">
                    {isEn ? `${sectionLabelEn} ${sec.id}: ${sec.nameEn}` : `${sectionLabel} ${sec.id}: ${sec.name}`}
                  </span>
                  <span dir="ltr" className="font-mono text-ink-500 dark:text-slate-400">
                    {secCount} {isEn ? 'questions' : 'سؤال'}
                  </span>
                </div>
              );
            })}
          </div>

          <div className="flex flex-wrap gap-2.5 pt-2">
            {countOptions.map((n) => (
              <button
                key={n}
                type="button"
                onClick={() => start(n)}
                className="cursor-pointer rounded-lg bg-brand-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-700"
              >
                {n === questions.length
                  ? isEn
                    ? `Full simulation (${n})`
                    : `المحاكاة الكاملة (${n})`
                  : isEn
                  ? `${n} questions`
                  : `${n} سؤالاً`}
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Stage 2: Done (Report & Mistakes Review)
  if (stage === 'done') {
    return (
      <div className="card mt-6 overflow-hidden dark:border-slate-700/80 dark:bg-slate-850">
        <div className="border-b border-slate-200 bg-brand-50/80 px-5 py-3 text-sm font-semibold text-brand-900 dark:border-slate-700 dark:bg-brand-950/40 dark:text-brand-300">
          📋 {isEn ? `${examCode} Simulation Report — Diagnosis` : `تقرير محاكي ${examCode} — التشخيص والنتائج`}
        </div>
        <div className="space-y-4 p-5">
          <div
            className={`rounded-xl p-4 text-center ${
              pass
                ? 'bg-teal-50 text-teal-800 dark:bg-teal-950/40 dark:text-teal-300'
                : 'bg-rose-50 text-rose-800 dark:bg-rose-950/40 dark:text-rose-300'
            }`}
          >
            <p className="text-3xl font-bold">{pct}%</p>
            <p className="mt-1 text-sm font-semibold">
              {score} {isEn ? 'of' : 'من'} {count}
            </p>
            <p className="mt-1 text-sm">
              {pass
                ? isEn
                  ? 'Excellent — You are on track for certification!'
                  : 'ممتاز — وتيرة النجاح في متناولك وجاهزيتك ممتازة!'
                : isEn
                ? `Review your weakest section (${weakest ? weakest.nameEn : ''}) then retry`
                : `راجع أضعف قسم (${weakest ? weakest.name : ''}) ثم أعد المحاكاة`}
            </p>
          </div>

          <div className="grid gap-1.5 sm:grid-cols-2">
            {sectionBreakdown.map((s) => (
              <div
                key={s.id}
                className="flex items-center justify-between rounded-lg bg-slate-50 px-3 py-2 text-sm dark:bg-slate-800/60"
              >
                <span className="font-semibold text-ink-700 dark:text-slate-300">
                  {isEn ? `${sectionLabelEn} ${s.id}: ${s.nameEn}` : `${sectionLabel} ${s.id}: ${s.name}`}
                </span>
                <span dir="ltr" className="font-mono text-xs text-ink-500 dark:text-slate-400">
                  {s.ok}/{s.total} ({s.pct}%)
                </span>
              </div>
            ))}
          </div>

          <div>
            <p className="mb-2 text-sm font-bold text-ink-700 dark:text-slate-200">
              {isEn ? 'Review mistakes:' : 'مراجعة الأسئلة غير الموفقة:'}
            </p>
            {items.map((q, i) =>
              answers[i] >= 0 && !q.options[answers[i]]?.isCorrect ? (
                <details
                  key={i}
                  className="mb-2 rounded-lg border border-rose-200 bg-rose-50/70 p-3 text-sm dark:border-rose-900/40 dark:bg-rose-950/20"
                >
                  <summary className="cursor-pointer font-semibold text-rose-800 dark:text-rose-300">
                    {isEn ? q.questionEn ?? q.question : q.question}
                  </summary>
                  <p className="mt-1.5 text-xs text-ink-600 dark:text-slate-400">
                    {isEn ? q.scenarioEn ?? q.scenario : q.scenario}
                  </p>
                  <p className="mt-1.5 text-xs font-bold text-teal-700 dark:text-teal-400">
                    {isEn ? 'Correct Answer: ' : 'الإجابة الصحيحة: '}
                    {isEn
                      ? q.options.find((o) => o.isCorrect)?.textEn ?? q.options.find((o) => o.isCorrect)?.text
                      : q.options.find((o) => o.isCorrect)?.text}
                  </p>
                  <p className="mt-1 text-xs text-ink-500 dark:text-slate-400">
                    {isEn
                      ? q.options.find((o) => o.isCorrect)?.explanationEn ?? q.options.find((o) => o.isCorrect)?.explanation
                      : q.options.find((o) => o.isCorrect)?.explanation}
                  </p>
                </details>
              ) : null
            )}
          </div>

          <button
            type="button"
            onClick={() => setStage('setup')}
            className="cursor-pointer rounded-lg bg-brand-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-700"
          >
            {isEn ? 'Retry simulation' : 'إعادة المحاكاة'}
          </button>
        </div>
      </div>
    );
  }

  // Stage 3: Running Exam
  const q = items[idx];
  const currentSec = sections.find((s) => s.id === q.sectionId);

  return (
    <div className="card mt-6 overflow-hidden dark:border-slate-700/80 dark:bg-slate-850">
      <div className="border-b border-slate-200 bg-brand-50/80 px-5 py-3 text-sm font-semibold text-brand-900 dark:border-slate-700 dark:bg-brand-950/40 dark:text-brand-300">
        🏆 {isEn ? `${examCode} Mock — Question ${idx + 1} of ${count}` : `محاكي ${examCode} — سؤال ${idx + 1} من ${count}`}
      </div>

      <div className="space-y-4 p-5">
        <div className="flex items-center justify-between rounded-lg bg-ink-900 px-4 py-2 text-sm text-white">
          <span className="font-semibold text-teal-300">
            {isEn ? `Timer: ${fmtTime(left)}` : `المؤقت: ${fmtTime(left)}`}
          </span>
          <span className="text-xs opacity-80">
            {answered}/{count} {isEn ? 'answered' : 'مُجاب'}
          </span>
          <button
            type="button"
            onClick={() => setStage('done')}
            disabled={answered < count}
            className="cursor-pointer rounded-lg bg-emerald-600 px-3 py-1.5 text-xs font-bold text-white transition hover:bg-emerald-700 disabled:cursor-not-allowed disabled:opacity-40"
          >
            {isEn ? 'Finish review' : 'إنهاء المراجعة'}
          </button>
        </div>

        <div className="h-1.5 w-full overflow-hidden rounded-full bg-slate-200 dark:bg-slate-700">
          <div
            className="h-full bg-teal-500 transition-all"
            style={{ width: `${(answered / count) * 100}%` }}
          />
        </div>

        <div>
          <p className="text-xs font-semibold text-brand-600 dark:text-brand-400">
            {currentSec
              ? isEn
                ? `${sectionLabelEn} ${currentSec.id}: ${currentSec.nameEn}`
                : `${sectionLabel} ${currentSec.id}: ${currentSec.name}`
              : ''}{' '}
            • {isEn ? DIFFICULTY_EN[q.difficulty] : q.difficulty}
          </p>
          <p className="mt-1 text-sm italic text-ink-500 dark:text-slate-400">
            {isEn ? q.scenarioEn ?? q.scenario : q.scenario}
          </p>
          <p className="mt-1 text-base font-bold text-ink-900 dark:text-white">
            {isEn ? q.questionEn ?? q.question : q.question}
          </p>
        </div>

        <div className="space-y-2">
          {q.options.map((o, oi) => {
            const isSelected = answers[idx] === oi;
            return (
              <button
                key={oi}
                type="button"
                onClick={() => pick(oi)}
                className={`w-full cursor-pointer rounded-xl border px-4 py-2.5 text-right text-sm transition ${
                  isSelected
                    ? 'border-brand-500 bg-brand-50 font-semibold text-brand-900 dark:border-brand-500 dark:bg-brand-950/40 dark:text-brand-200'
                    : 'border-slate-200 bg-white text-ink-700 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-750'
                }`}
              >
                <div className="flex items-center gap-2">
                  <span
                    className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-lg text-xs font-bold ${
                      isSelected
                        ? 'bg-brand-600 text-white'
                        : 'bg-slate-100 text-slate-600 dark:bg-slate-700 dark:text-slate-300'
                    }`}
                  >
                    {String.fromCharCode(65 + oi)}
                  </span>
                  <span className="flex-1 text-right">{isEn ? o.textEn ?? o.text : o.text}</span>
                </div>
              </button>
            );
          })}
        </div>

        <div className="flex items-center justify-between pt-2">
          <button
            type="button"
            disabled={idx === 0}
            onClick={() => setIdx((i) => i - 1)}
            className="cursor-pointer rounded-lg bg-slate-200 px-4 py-2 text-sm font-semibold text-ink-700 hover:bg-slate-300 disabled:cursor-not-allowed disabled:opacity-40 dark:bg-slate-700 dark:text-slate-200 dark:hover:bg-slate-600"
          >
            {isEn ? '← Previous' : '→ السابق'}
          </button>
          {idx < count - 1 ? (
            <button
              type="button"
              onClick={() => setIdx((i) => i + 1)}
              className="cursor-pointer rounded-lg bg-brand-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-700"
            >
              {isEn ? 'Next →' : '← التالي'}
            </button>
          ) : (
            <button
              type="button"
              disabled={answered < count}
              onClick={() => setStage('done')}
              className="cursor-pointer rounded-lg bg-emerald-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-700 disabled:cursor-not-allowed disabled:opacity-40"
            >
              {isEn ? 'Finish & see result' : 'إنهاء وعرض النتيجة'}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
