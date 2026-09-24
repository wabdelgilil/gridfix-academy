import { useEffect, useState } from 'react';
import { mockCmrpQuestions, mockCmrpPillars } from '../../../../data/quiz/cmrp/mock-cmrp';

interface QuizItem {
  scenario: string;
  question: string;
  difficulty: string;
  options: { text: string; isCorrect: boolean; explanation: string }[];
  pillar: number;
}

export default function CmrpMockExam() {
  const [count, setCount] = useState(20);
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
    const picked = [...mockCmrpQuestions].sort(() => 0.5 - Math.random()).slice(0, n);
    setItems(picked);
    setAnswers(Array(n).fill(-1));
    setIdx(0);
    setSeconds(0);
    setCount(n);
    setStage('running');
  };

  const totalSec = count * 80;
  const left = Math.max(0, totalSec - seconds);
  const timedOut = stage === 'running' && seconds >= totalSec;

  useEffect(() => {
    if (timedOut) setStage('done');
  }, [timedOut]);

  const pick = (opt: number) => setAnswers((a) => a.map((v, i) => (i === idx ? opt : v)));
  const answered = answers.filter((a) => a >= 0).length;

  const score = answers.reduce((acc, a, i) => acc + (a >= 0 && items[i].options[a].isCorrect ? 1 : 0), 0);
  const pct = count ? Math.round((score / count) * 100) : 0;
  const pass = pct >= 70;

  const byPillar = [1, 2, 3, 4, 5].map((p) => {
    const qs = items.map((q, i) => ({ q, i })).filter(({ q }) => q.pillar === p);
    const ok = qs.filter(({ q, i }) => answers[i] >= 0 && q.options[answers[i]].isCorrect).length;
    return { p, ok, total: qs.length };
  }).filter((x) => x.total > 0);

  const weakest = byPillar.length ? [...byPillar].sort((a, b) => a.ok / a.total - b.ok / b.total)[0] : null;

  const fmt = (s: number) => `${Math.floor(s / 3600)}س ${Math.floor((s % 3600) / 60)}د ${s % 60}ث`;

  if (stage === 'setup') {
    return (
      <div className="card mt-6 overflow-hidden">
        <div className="border-b border-slate-200 bg-brand-50 px-5 py-3 text-sm font-semibold text-brand-800">
          🏆 محاكي امتحان CMRP — 110 أسئلة بتوزيع الركائز الرسمي
        </div>
        <div className="space-y-4 p-5">
          <p className="text-sm leading-relaxed text-ink-600">
            الامتحان الحقيقي: 110 أسئلة في 150 دقيقة (نحو 80 ثانية للسؤال) بتوزيع ركائز SMRP الخمس. اختر المحاكاة الكاملة للتجربة الواقعية، أو جولة قصيرة للمراجعة السريعة. النجاح من 70%.
          </p>
          <div className="grid gap-1.5 text-xs">
            {[1, 2, 3, 4, 5].map((p) => (
              <div key={p} className="flex items-center justify-between rounded-lg bg-slate-50 px-3 py-1.5">
                <span className="font-semibold text-ink-700">الركيزة {p}: {mockCmrpPillars[p]}</span>
                <span dir="ltr" className="font-mono text-ink-500">{mockCmrpQuestions.filter((q) => q.pillar === p).length} سؤال</span>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-2">
            {[20, 40, 110].map((n) => (
              <button key={n} type="button" onClick={() => start(n)} className="cursor-pointer rounded-lg bg-brand-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-brand-700">
                {n === 110 ? 'المحاكاة الكاملة (110)' : `${n} سؤالاً`}
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
          📋 تقرير المحاكاة — التشخيص بالركائز
        </div>
        <div className="space-y-4 p-5">
          <div className={`rounded-xl p-4 text-center ${pass ? 'bg-teal-50 text-teal-800' : 'bg-rose-50 text-rose-800'}`}>
            <p className="text-3xl font-bold">{pct}%</p>
            <p className="mt-1 text-sm font-semibold">{score} من {count}</p>
            <p className="mt-1 text-sm">{pass ? 'ممتاز — وتيرة النجاح في متناولك' : `راجع أضعف ركيزة (${weakest ? mockCmrpPillars[weakest.p] : ''}) ثم أعد المحاكاة`}</p>
          </div>

          <div className="grid gap-1.5 sm:grid-cols-2">
            {byPillar.map((s) => (
              <div key={s.p} className="flex items-center justify-between rounded-lg bg-slate-50 px-3 py-2 text-sm">
                <span className="font-semibold text-ink-700">الركيزة {s.p}: {mockCmrpPillars[s.p]}</span>
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
        🏆 محاكي CMRP — سؤال {idx + 1} من {count}
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
          <p className="text-xs font-semibold text-brand-600">الركيزة {q.pillar}: {mockCmrpPillars[q.pillar]} • {q.difficulty}</p>
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
            <button type="button" disabled={answered < count} onClick={() => setStage('done')} className="cursor-pointer rounded-lg bg-emerald-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-brand-700 disabled:cursor-not-allowed disabled:opacity-40">
              إنهاء وعرض النتيجة
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
