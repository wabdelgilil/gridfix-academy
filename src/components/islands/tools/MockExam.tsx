import { useEffect, useState } from 'react';
import { quiz01 } from '../../../data/quiz/quiz-0-1';
import { quiz02 } from '../../../data/quiz/quiz-0-2';
import { quiz03 } from '../../../data/quiz/quiz-0-3';
import { quiz11 } from '../../../data/quiz/quiz-1-1';
import { quiz12 } from '../../../data/quiz/quiz-1-2';
import { quiz13 } from '../../../data/quiz/quiz-1-3';
import { quiz14 } from '../../../data/quiz/quiz-1-4';
import { quiz21 } from '../../../data/quiz/quiz-2-1';
import { quiz22 } from '../../../data/quiz/quiz-2-2';
import { quiz23 } from '../../../data/quiz/quiz-2-3';
import { quiz31 } from '../../../data/quiz/quiz-3-1';
import { quiz32 } from '../../../data/quiz/quiz-3-2';
import { quiz33 } from '../../../data/quiz/quiz-3-3';
import { quiz34 } from '../../../data/quiz/quiz-3-4';
import { quiz41 } from '../../../data/quiz/quiz-4-1';
import { quiz42 } from '../../../data/quiz/quiz-4-2';
import { quiz43 } from '../../../data/quiz/quiz-4-3';
import { quiz51 } from '../../../data/quiz/quiz-5-1';
import { quiz52 } from '../../../data/quiz/quiz-5-2';
import { quiz53 } from '../../../data/quiz/quiz-5-3';
import { quiz61 } from '../../../data/quiz/quiz-6-1';
import { quiz62 } from '../../../data/quiz/quiz-6-2';
import { quiz63 } from '../../../data/quiz/quiz-6-3';
import { quiz71 } from '../../../data/quiz/quiz-7-1';
import { quiz72 } from '../../../data/quiz/quiz-7-2';
import { quiz73 } from '../../../data/quiz/quiz-7-3';
import { quiz81 } from '../../../data/quiz/quiz-8-1';
import { quiz82 } from '../../../data/quiz/quiz-8-2';
import { quiz83 } from '../../../data/quiz/quiz-8-3';
import { quiz91 } from '../../../data/quiz/quiz-9-1';
import { quiz92 } from '../../../data/quiz/quiz-9-2';
import { quiz93 } from '../../../data/quiz/quiz-9-3';
import { quiz101 } from '../../../data/quiz/quiz-10-1';
import { quiz102 } from '../../../data/quiz/quiz-10-2';
import { quiz121 } from '../../../data/quiz/quiz-12-1';
import { quiz122 } from '../../../data/quiz/quiz-12-2';
import { quiz123 } from '../../../data/quiz/quiz-12-3';

interface QuizOption {
  text: string;
  isCorrect: boolean;
  explanation: string;
}

interface QuizItem {
  scenario: string;
  question: string;
  difficulty: string;
  options: QuizOption[];
  station: number;
}

const banks = [quiz01, quiz02, quiz03, quiz11, quiz12, quiz13, quiz14, quiz21, quiz22, quiz23, quiz31, quiz32, quiz33, quiz34, quiz41, quiz42, quiz43, quiz51, quiz52, quiz53, quiz61, quiz62, quiz63, quiz71, quiz72, quiz73, quiz81, quiz82, quiz83, quiz91, quiz92, quiz93, quiz101, quiz102, quiz121, quiz122, quiz123];

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
  12: 'إدارة المشاريع',
};

export default function MockExam() {
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

  const byStation = stationNames
    ? Object.entries(
        items.reduce<Record<number, { ok: number; total: number }>>((acc, q) => {
          const st = q.station ?? 0;
          acc[st] = acc[st] || { ok: 0, total: 0 };
          return acc;
        }, {}),
      ).map(([st, v]) => ({ st: Number(st), ...v }))
    : [];
  items.forEach((q, i) => {
    const e = byStation.find((x) => x.st === q.station);
    if (e && answers[i] >= 0 && items[i].options[answers[i]].isCorrect) e.ok += 1;
    if (e) e.total += 1;
  });

  const fmt = (s: number) => `${Math.floor(s / 3600)}س ${Math.floor((s % 3600) / 60)}د`;

  if (stage === 'setup') {
    return (
      <div className="card mt-6 overflow-hidden">
        <div className="border-b border-slate-200 bg-brand-50 px-5 py-3 text-sm font-semibold text-brand-800">
          📝 محاكي امتحان CFM — اختر عدد الأسئلة وابدأ
        </div>
        <div className="space-y-4 p-5">
          <p className="text-sm leading-relaxed text-ink-600">
            أسئلة من مواقف حقيقية توزع على أركان المنهج، بمؤقت يحاكي إيقاع الامتحان (90 ثانية للسؤال). اجمع 70% أو أكثر لتهيئة جاهزة للاختبار الفعلي.
          </p>
          <div className="flex flex-wrap gap-2">
            {[10, 15, 20].map((n) => (
              <button key={n} type="button" onClick={() => start(n)} className="cursor-pointer rounded-lg bg-brand-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-brand-700">
                {n} أسئلة
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (stage === 'done') {
    return (
      <div className="card mt-6 overflow-hidden">
        <div className="border-b border-slate-200 bg-brand-50 px-5 py-3 text-sm font-semibold text-brand-800">
          📋 تقرير المحاكاة
        </div>
        <div className="space-y-4 p-5">
          <div className={`rounded-xl p-4 text-center ${pass ? 'bg-teal-50 text-teal-800' : 'bg-rose-50 text-rose-800'}`}>
            <p className="text-3xl font-bold">{pct}%</p>
            <p className="mt-1 text-sm font-semibold">{score} من {count}</p>
            <p className="mt-1 text-sm">{pass ? 'ممتاز — أنت جاهز لوتيرة الامتحان الفعلي' : 'لا تيأس: راجع أضعف محطة ثم أعد المحاكاة'}</p>
          </div>

          <div className="grid gap-1.5 sm:grid-cols-2">
            {byStation.map((s) => (
              <div key={s.st} className="flex items-center justify-between rounded-lg bg-slate-50 px-3 py-2 text-sm">
                <span className="font-semibold text-ink-700">{stationNames[s.st]}</span>
                <span dir="ltr" className="font-mono text-xs text-ink-500">{s.ok}/{s.total}</span>
              </div>
            ))}
          </div>

          <div>
            <p className="mb-1 text-sm font-bold text-ink-700">مراجعة الأخطاء:</p>
            {items.map((q, i) =>
              answers[i] >= 0 && !q.options[answers[i]].isCorrect ? (
                <details key={i} className="mb-1 rounded-lg border border-rose-200 bg-rose-50 px-3 py-2 text-sm">
                  <summary className="cursor-pointer font-semibold text-rose-800">{q.question}</summary>
                  <p className="mt-1 text-xs text-ink-600">{q.scenario}</p>
                  <p className="mt-1 text-xs text-teal-700">الصحيح: {q.options.find((o) => o.isCorrect)?.text}</p>
                  <p className="mt-1 text-xs text-ink-500">{q.options.find((o) => o.isCorrect)?.explanation}</p>
                </details>
              ) : null,
            )}
          </div>

          <button type="button" onClick={() => setStage('setup')} className="cursor-pointer rounded-lg bg-brand-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-brand-700">
            إعادة المحاكاة
          </button>
        </div>
      </div>
    );
  }

  const q = items[idx];
  return (
    <div className="card mt-6 overflow-hidden">
      <div className="border-b border-slate-200 bg-brand-50 px-5 py-3 text-sm font-semibold text-brand-800">
        📝 محاكي امتحان CFM — سؤال {idx + 1} من {count}
      </div>

      <div className="space-y-4 p-5">
        <div className="flex items-center justify-between rounded-lg bg-ink-900 px-4 py-2 text-sm text-white">
          <span className="font-semibold text-teal-300">المؤقت: {fmt(left)}</span>
          <span className="text-xs opacity-80">{answered}/{count} مُجاب</span>
          <button type="button" onClick={() => setStage('done')} disabled={answered < count} className="cursor-pointer rounded-lg bg-emerald-600 px-3 py-1.5 text-xs font-bold text-white transition hover:bg-emerald-700 disabled:cursor-not-allowed disabled:opacity-40">
            إنهاء المراجعة
          </button>
        </div>

        <div className="h-1.5 w-full overflow-hidden rounded-full bg-slate-200">
          <div className="h-full bg-teal-500 transition-all" style={{ width: `${(answered / count) * 100}%` }} />
        </div>

        <div>
          <p className="text-xs font-semibold text-brand-600">{stationNames[q.station]} • {q.difficulty}</p>
          <p className="mt-1 text-sm italic text-ink-500">{q.scenario}</p>
          <p className="mt-1 text-base font-bold text-ink-900">{q.question}</p>
        </div>

        <div className="space-y-2">
          {q.options.map((o, oi) => (
            <button
              key={oi}
              type="button"
              onClick={() => pick(oi)}
              className={`w-full cursor-pointer rounded-xl border px-4 py-2.5 text-right text-sm transition ${
                answers[idx] === oi ? 'border-brand-500 bg-brand-50 font-semibold text-brand-900' : 'border-slate-200 bg-white text-ink-700 hover:bg-slate-50'
              }`}
            >
              {o.text}
            </button>
          ))}
        </div>

        <div className="flex gap-2">
          <button type="button" disabled={idx === 0} onClick={() => setIdx((i) => i - 1)} className="cursor-pointer rounded-lg bg-slate-200 px-4 py-2 text-sm font-semibold text-ink-700 hover:bg-slate-300 disabled:cursor-not-allowed disabled:opacity-40">
            → السابق
          </button>
          {idx < count - 1 ? (
            <button type="button" onClick={() => setIdx((i) => i + 1)} className="cursor-pointer rounded-lg bg-brand-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-brand-700">
              ← التالي
            </button>
          ) : (
            <button type="button" disabled={answered < count} onClick={() => setStage('done')} className="cursor-pointer rounded-lg bg-emerald-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-emerald-700 disabled:cursor-not-allowed disabled:opacity-40">
              إنهاء وعرض النتيجة
            </button>
          )}
        </div>
      </div>
    </div>
  );
}