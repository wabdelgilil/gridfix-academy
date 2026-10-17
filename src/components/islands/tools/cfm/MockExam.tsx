import { useEffect, useState } from 'react';
import { quiz01 } from '../../../../data/quiz/cfm/quiz-0-1';
import { quiz02 } from '../../../../data/quiz/cfm/quiz-0-2';
import { quiz03 } from '../../../../data/quiz/cfm/quiz-0-3';
import { quiz11 } from '../../../../data/quiz/cfm/quiz-1-1';
import { quiz12 } from '../../../../data/quiz/cfm/quiz-1-2';
import { quiz13 } from '../../../../data/quiz/cfm/quiz-1-3';
import { quiz14 } from '../../../../data/quiz/cfm/quiz-1-4';
import { quiz21 } from '../../../../data/quiz/cfm/quiz-2-1';
import { quiz22 } from '../../../../data/quiz/cfm/quiz-2-2';
import { quiz23 } from '../../../../data/quiz/cfm/quiz-2-3';
import { quiz31 } from '../../../../data/quiz/cfm/quiz-3-1';
import { quiz32 } from '../../../../data/quiz/cfm/quiz-3-2';
import { quiz33 } from '../../../../data/quiz/cfm/quiz-3-3';
import { quiz34 } from '../../../../data/quiz/cfm/quiz-3-4';
import { quiz41 } from '../../../../data/quiz/cfm/quiz-4-1';
import { quiz42 } from '../../../../data/quiz/cfm/quiz-4-2';
import { quiz43 } from '../../../../data/quiz/cfm/quiz-4-3';
import { quiz51 } from '../../../../data/quiz/cfm/quiz-5-1';
import { quiz52 } from '../../../../data/quiz/cfm/quiz-5-2';
import { quiz53 } from '../../../../data/quiz/cfm/quiz-5-3';
import { quiz61 } from '../../../../data/quiz/cfm/quiz-6-1';
import { quiz62 } from '../../../../data/quiz/cfm/quiz-6-2';
import { quiz63 } from '../../../../data/quiz/cfm/quiz-6-3';
import { quiz71 } from '../../../../data/quiz/cfm/quiz-7-1';
import { quiz72 } from '../../../../data/quiz/cfm/quiz-7-2';
import { quiz73 } from '../../../../data/quiz/cfm/quiz-7-3';
import { quiz81 } from '../../../../data/quiz/cfm/quiz-8-1';
import { quiz82 } from '../../../../data/quiz/cfm/quiz-8-2';
import { quiz83 } from '../../../../data/quiz/cfm/quiz-8-3';
import { quiz91 } from '../../../../data/quiz/cfm/quiz-9-1';
import { quiz92 } from '../../../../data/quiz/cfm/quiz-9-2';
import { quiz93 } from '../../../../data/quiz/cfm/quiz-9-3';
import { quiz101 } from '../../../../data/quiz/cfm/quiz-10-1';
import { quiz102 } from '../../../../data/quiz/cfm/quiz-10-2';
import { quiz111 } from '../../../../data/quiz/cfm/quiz-11-1';
import { quiz112 } from '../../../../data/quiz/cfm/quiz-11-2';
import { quiz113 } from '../../../../data/quiz/cfm/quiz-11-3';
import useLang from '../../../../lib/useLang';
import { DIFFICULTY_EN } from '../../../../data/quiz/types';

interface QuizOption {
  text: string;
  textEn?: string;
  isCorrect: boolean;
  explanation: string;
  explanationEn?: string;
}

interface QuizItem {
  scenario: string;
  scenarioEn?: string;
  question: string;
  questionEn?: string;
  difficulty: 'سهل' | 'متوسط' | 'صعب';
  options: QuizOption[];
  station: number;
}

const banks = [quiz01, quiz02, quiz03, quiz11, quiz12, quiz13, quiz14, quiz21, quiz22, quiz23, quiz31, quiz32, quiz33, quiz34, quiz41, quiz42, quiz43, quiz51, quiz52, quiz53, quiz61, quiz62, quiz63, quiz71, quiz72, quiz73, quiz81, quiz82, quiz83, quiz91, quiz92, quiz93, quiz101, quiz102, quiz111, quiz112, quiz113];

const pool: QuizItem[] = banks.flatMap((b) => {
  const st = Number(String(b.id).replace('quiz-', '').split('-')[0]);
  return b.questions.map((q) => ({ ...q, options: q.options as QuizOption[], station: st }));
}).sort(() => 0.5 - Math.random());

const stationNames: Record<number, string> = {
  0: 'مقدمة وترخيص CFM',
  1: 'التشغيل والصيانة',
  2: 'العقارات والمساحات',
  3: 'الأعمال المالية',
  4: 'الرفاهية وبيئة العمل',
  5: 'السلامة والأمن',
  6: 'الطوارئ والاستمرارية',
  7: 'الاستدامة',
  8: 'القيادة والاستراتيجية',
  9: 'البيانات والتقنية',
  10: 'الجودة',
  11: 'إدارة المشاريع',
};

const stationNamesEn: Record<number, string> = {
  0: 'CFM Intro & Licensing',
  1: 'Operations & Maintenance',
  2: 'Real Estate & Space',
  3: 'Financial Management',
  4: 'Work Environment & HR',
  5: 'Safety & Security',
  6: 'Emergency & Continuity',
  7: 'Sustainability',
  8: 'Leadership & Strategy',
  9: 'Data & Technology',
  10: 'Quality',
  11: 'Project Management',
};

export default function MockExam() {
  const lang = useLang();
  const isEn = lang === 'en';
  const [count, setCount] = useState(15);
  const [stage, setStage] = useState<'setup' | 'running' | 'done'>('setup');
  const [items, setItems] = useState<QuizItem[]>([]);
  const [answers, setAnswers] = useState<number[]>([]);
  const [idx, setIdx] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    if (stage !== 'running') return;
    const t = setInterval(() => setSeconds((s) => s + 1), 1000);
    return () => clearInterval(t);
  }, [stage]);

  const start = (n: number) => {
    const picked = [...pool].sort(() => 0.5 - Math.random()).slice(0, n);
    setItems(picked);
    setAnswers(Array(n).fill(-1));
    setIdx(0);
    setSeconds(0);
    setCount(n);
    setStage('running');
  };

  const totalSec = count * 90;
  const left = Math.max(0, totalSec - seconds);
  const timedOut = stage === 'running' && seconds >= totalSec;

  useEffect(() => {
    if (timedOut) setStage('done');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [timedOut]);

  const pick = (opt: number) => setAnswers((a) => a.map((v, i) => (i === idx ? opt : v)));
  const answered = answers.filter((a) => a >= 0).length;

  const score = answers.reduce((acc, a, i) => acc + (a >= 0 && items[i].options[a].isCorrect ? 1 : 0), 0);
  const pct = count ? Math.round((score / count) * 100) : 0;
  const pass = pct >= 70;

  const byStation = Object.entries(
    items.reduce<Record<number, { ok: number; total: number }>>((acc, q) => {
      const st = q.station ?? 0;
      acc[st] = acc[st] || { ok: 0, total: 0 };
      return acc;
    }, {}),
  ).map(([st, v]) => ({ st: Number(st), ...v }));

  items.forEach((q, i) => {
    const e = byStation.find((x) => x.st === q.station);
    if (e && answers[i] >= 0 && items[i].options[answers[i]].isCorrect) e.ok += 1;
    if (e) e.total += 1;
  });

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

  const fmt = (s: number) => (isEn ? `${Math.floor(s / 3600)}h ${Math.floor((s % 3600) / 60)}m` : `${Math.floor(s / 3600)}س ${Math.floor((s % 3600) / 60)}د`);

  if (stage === 'setup') {
    return (
      <div className="card mt-6 overflow-hidden dark:border-slate-700/80 dark:bg-slate-850">
        <div className="border-b border-slate-200 bg-brand-50/80 px-5 py-3 text-sm font-semibold text-brand-900 dark:border-slate-700 dark:bg-brand-950/40 dark:text-brand-300">
          {isEn ? '📝 CFM Mock Exam — choose the number of questions and start' : '📝 محاكي امتحان CFM — اختر عدد الأسئلة وابدأ'}
        </div>
        <div className="space-y-4 p-5">
          <p className="text-sm leading-relaxed text-ink-600 dark:text-slate-300">
            {isEn
              ? 'Real scenario questions distributed across the CFM competencies with a timer mimicking the exam pace (90 seconds per question). Score 70% or more to be ready for the real test.'
              : 'أسئلة من مواقف حقيقية توزع على أركان المنهج، بمؤقت يحاكي إيقاع الامتحان (90 ثانية للسؤال). اجمع 70% أو أكثر لتهيئة جاهزة للاختبار الفعلي.'}
          </p>
          <div className="flex flex-wrap gap-2.5">
            {[10, 15, 20].map((n) => (
              <button key={n} type="button" onClick={() => start(n)} className="btn-primary shadow-sm">
                {n} {isEn ? 'questions' : 'أسئلة'}
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (stage === 'done') {
    return (
      <div className="card mt-6 overflow-hidden dark:border-slate-700/80 dark:bg-slate-850">
        <div className="border-b border-slate-200 bg-brand-50/80 px-5 py-3 text-sm font-semibold text-brand-900 dark:border-slate-700 dark:bg-brand-950/40 dark:text-brand-300">
          {isEn ? '📋 Simulation report' : '📋 تقرير المحاكاة'}
        </div>
        <div className="space-y-4 p-5">
          <div className={`rounded-xl border p-5 text-center shadow-xs ${pass ? 'border-teal-200 bg-teal-50/80 text-teal-950 dark:border-teal-800/60 dark:bg-teal-950/40 dark:text-teal-200' : 'border-rose-200 bg-rose-50/80 text-rose-950 dark:border-rose-800/60 dark:bg-rose-950/40 dark:text-rose-200'}`}>
            <p className="text-4xl font-extrabold tracking-tight" dir="ltr">{pct}%</p>
            <p className="mt-1 text-sm font-semibold">{score} {isEn ? 'of' : 'من'} {count}</p>
            <p className="mt-2 text-sm leading-relaxed font-medium">
              {pass ? (isEn ? '🎉 Excellent — you are ready for the real exam pace' : '🎉 ممتاز — أنت جاهز لوتيرة الامتحان الفعلي') : isEn ? '💪 Do not give up: review your weakest station then retry' : '💪 لا تيأس: راجع أضعف محطة ثم أعد المحاكاة'}
            </p>
          </div>

          <div className="grid gap-2 sm:grid-cols-2">
            {byStation.map((s) => (
              <div key={s.st} className="flex items-center justify-between rounded-xl border border-slate-200/70 bg-slate-50/70 px-3.5 py-2.5 text-sm dark:border-slate-700/70 dark:bg-slate-800/50">
                <span className="font-semibold text-ink-800 dark:text-slate-200">{isEn ? stationNamesEn[s.st] : stationNames[s.st]}</span>
                <span dir="ltr" className="font-mono text-xs font-bold text-ink-600 dark:text-slate-300">{s.ok}/{s.total}</span>
              </div>
            ))}
          </div>

          <div>
            <p className="mb-2 text-sm font-bold text-ink-900 dark:text-slate-100">{isEn ? 'Review mistakes:' : 'مراجعة الأخطاء:'}</p>
            {items.map((q, i) =>
              answers[i] >= 0 && !q.options[answers[i]].isCorrect ? (
                <details key={i} className="mb-2 rounded-xl border border-rose-200/80 bg-rose-50/60 p-3.5 text-sm dark:border-rose-800/50 dark:bg-rose-950/30">
                  <summary className="cursor-pointer font-bold text-rose-900 dark:text-rose-200">{isEn ? q.questionEn ?? q.question : q.question}</summary>
                  <p className="mt-1.5 text-xs text-ink-600 dark:text-slate-300 leading-relaxed">{isEn ? q.scenarioEn ?? q.scenario : q.scenario}</p>
                  <p className="mt-2 text-xs font-semibold text-teal-700 dark:text-teal-400">
                    {isEn ? 'Correct answer: ' : 'الإجابة الصحيحة: '}{isEn ? q.options.find((o) => o.isCorrect)?.textEn ?? q.options.find((o) => o.isCorrect)?.text : q.options.find((o) => o.isCorrect)?.text}
                  </p>
                  <p className="mt-1 text-xs text-ink-500 dark:text-slate-400 leading-relaxed">
                    {isEn ? q.options.find((o) => o.isCorrect)?.explanationEn ?? q.options.find((o) => o.isCorrect)?.explanation : q.options.find((o) => o.isCorrect)?.explanation}
                  </p>
                </details>
              ) : null,
            )}
          </div>

          <button type="button" onClick={() => setStage('setup')} className="btn-primary">
            {isEn ? 'Retry simulation' : 'إعادة المحاكاة'}
          </button>
        </div>
      </div>
    );
  }

  const q = items[idx];
  return (
    <div className="card mt-6 overflow-hidden dark:border-slate-700/80 dark:bg-slate-850">
      <div className="border-b border-slate-200 bg-brand-50/80 px-5 py-3 text-sm font-semibold text-brand-900 dark:border-slate-700 dark:bg-brand-950/40 dark:text-brand-300">
        {isEn ? `📝 CFM Mock Exam — question ${idx + 1} of ${count}` : `📝 محاكي امتحان CFM — سؤال ${idx + 1} من ${count}`}
      </div>

      <div className="space-y-4 p-5">
        <div className="flex items-center justify-between rounded-xl bg-slate-900 px-4 py-2.5 text-sm text-white dark:bg-slate-950 border border-slate-800">
          <span className="font-mono font-bold text-teal-300">{isEn ? `Timer: ${fmt(left)}` : `المؤقت: ${fmt(left)}`}</span>
          <span className="text-xs text-slate-300">{answered}/{count} {isEn ? 'answered' : 'مُجاب'}</span>
          <button type="button" onClick={() => setStage('done')} disabled={answered < count} className="cursor-pointer rounded-lg bg-emerald-600 px-3 py-1.5 text-xs font-bold text-white transition hover:bg-emerald-700 disabled:cursor-not-allowed disabled:opacity-40">
            {isEn ? 'Finish review' : 'إنهاء وعرض التقرير'}
          </button>
        </div>

        <div className="h-1.5 w-full overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800">
          <div className="h-full bg-teal-500 transition-all duration-300" style={{ width: `${(answered / count) * 100}%` }} />
        </div>

        <div>
          <p className="text-xs font-semibold text-brand-600 dark:text-brand-400">
            {isEn ? stationNamesEn[q.station] : stationNames[q.station]} • {isEn ? DIFFICULTY_EN[q.difficulty] : q.difficulty}
          </p>
          <p className="mt-1 text-sm italic text-ink-600 dark:text-slate-300 leading-relaxed">{isEn ? q.scenarioEn ?? q.scenario : q.scenario}</p>
          <p className="mt-2 text-base font-bold text-ink-900 dark:text-slate-100">{isEn ? q.questionEn ?? q.question : q.question}</p>
        </div>

        <div className="space-y-2.5">
          {q.options.map((o, oi) => {
            const isChosen = answers[idx] === oi;
            return (
              <button
                key={oi}
                type="button"
                onClick={() => pick(oi)}
                className={`flex w-full cursor-pointer items-start gap-3 rounded-xl border p-3.5 text-start text-sm transition-all duration-150 ${
                  isChosen
                    ? 'border-brand-500 bg-brand-50/80 font-semibold text-brand-950 ring-1 ring-brand-500/50 dark:border-brand-400 dark:bg-brand-950/50 dark:text-brand-200'
                    : 'border-slate-200 bg-white text-ink-800 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-800/80 dark:text-slate-200 dark:hover:bg-slate-750'
                }`}
              >
                <span className={`inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-md text-xs font-bold ${isChosen ? 'bg-brand-600 text-white' : 'bg-slate-100 dark:bg-slate-700 text-ink-700 dark:text-slate-300'}`} dir="ltr">
                  {String.fromCharCode(65 + oi)}
                </span>
                <span className="flex-1">{isEn ? o.textEn ?? o.text : o.text}</span>
              </button>
            );
          })}
        </div>

        <div className="flex flex-wrap items-center justify-between gap-2 pt-2">
          <div className="flex gap-2">
            <button type="button" disabled={idx === 0} onClick={() => setIdx((i) => i - 1)} className="cursor-pointer rounded-lg bg-slate-100 px-4 py-2 text-sm font-semibold text-ink-700 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700 disabled:cursor-not-allowed disabled:opacity-40">
              {isEn ? '← Previous' : '→ السابق'}
            </button>
            {idx < count - 1 ? (
              <button type="button" onClick={() => setIdx((i) => i + 1)} className="btn-primary">
                {isEn ? 'Next →' : '← التالي'}
              </button>
            ) : (
              <button type="button" disabled={answered < count} onClick={() => setStage('done')} className="cursor-pointer rounded-lg bg-emerald-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-emerald-700 disabled:cursor-not-allowed disabled:opacity-40">
                {isEn ? 'Finish & see result' : 'إنهاء وعرض النتيجة'}
              </button>
            )}
          </div>
          <span className="text-xs text-ink-400 dark:text-slate-400 hidden sm:inline">
            {isEn ? 'Keys: 1-4 or A-D to select' : 'أزرار 1-4 أو A-D للاختيار'}
          </span>
        </div>
      </div>
    </div>
  );
}