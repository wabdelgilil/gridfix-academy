import { useState } from 'react';

interface Check {
  id: string;
  label: string;
  good: string;
}

const checks: Check[] = [
  { id: 'screen', label: 'الشاشة أمام العين على مستوى النظر', good: 'قمة الشاشة عند مستوى العين أو أقل قليلاً' },
  { id: 'distance', label: 'المسافة المريحة بين العين والشاشة', good: 'نحو 50-70 سم تبعاً لحجم الشاشة' },
  { id: 'chair', label: 'كرسي قابل لتعديل الارتفاع ودعم الظهر', good: 'قدمك تلامس الأرض أو على مسند وركوك مدعومة' },
  { id: 'keyboard', label: 'لوحة مفاتيح ومكان مريح للمعصمين', good: 'معصمان مسترخيان بزاوية قريبة من موازية لسطح الطاولة' },
  { id: 'light', label: 'إضاءة بلا انعكاس مزعج على الشاشة', good: 'لا وهج مباشر أو انعكاس نافذة على الشاشة' },
  { id: 'breaks', label: 'استراحات حركة دورية', good: 'نهوض وحركة كل 30-60 دقيقة' },
];

function scoreOf(answers: Record<string, number>): number {
  return Object.values(answers).reduce((a, b) => a + b, 0);
}

export default function ErgonomicsSelfCheck() {
  const [answers, setAnswers] = useState<Record<string, number>>({});

  const set = (id: string, v: number) => setAnswers((prev) => ({ ...prev, [id]: v }));

  const answered = Object.values(answers).length;
  const score = scoreOf(answers);
  const max = checks.length * 2;
  const pct = Math.round((score / max) * 100);

  const verdict =
    pct >= 80
      ? { label: 'وضع ممتاز — استمر مع استراحات الحركة', tone: 'ok' as const }
      : pct >= 50
        ? { label: 'وضع مقبول — رحب العناية بالنقاط الضعيفة', tone: 'warn' as const }
        : { label: 'وضع يحتاج تحسيناً فعلياً — راجع النقاط الضعيفة الآن', tone: 'bad' as const };

  const toneClasses = {
    ok: 'bg-teal-50 text-teal-800 ring-teal-500',
    warn: 'bg-amber-50 text-amber-800 ring-amber-500',
    bad: 'bg-rose-50 text-rose-800 ring-rose-500',
  }[verdict.tone];

  return (
    <div className="card mt-6 overflow-hidden">
      <div className="border-b border-slate-200 bg-brand-50 px-5 py-3 text-sm font-semibold text-brand-800">
        🪑 فحص ذاتي لبيئة العمل (Ergonomics)
      </div>

      <div className="space-y-3 p-5">
        {checks.map((c, i) => {
          const val = answers[c.id] ?? -1;
          return (
            <div key={c.id} className={`rounded-xl border p-3.5 transition ${val >= 0 ? 'border-brand-200 bg-brand-50/40' : 'border-slate-200'}`}>
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="font-semibold text-ink-900">{i + 1}. {c.label}</p>
                  <p className="mt-0.5 text-xs text-ink-400">{c.good}</p>
                </div>
                <div className="flex shrink-0 gap-1.5">
                  {[0, 1, 2].map((v) => (
                    <button
                      key={v}
                      type="button"
                      onClick={() => set(c.id, v)}
                      className={`rounded-lg px-3 py-1.5 text-xs font-semibold transition ${
                        val === v
                          ? v === 2 ? 'bg-teal-600 text-white' : v === 1 ? 'bg-amber-500 text-white' : 'bg-rose-600 text-white'
                          : 'bg-slate-100 text-ink-500 hover:bg-slate-200 cursor-pointer'
                      }`}
                    >
                      {v === 2 ? 'ممتاز' : v === 1 ? 'جزئي' : 'ضعيف'}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          );
        })}

        {answered === checks.length ? (
          <div className={`rounded-xl p-4 text-sm font-semibold ring-2 ${toneClasses}`}>
            نتيجتك: <strong dir="ltr">{score}/{max} ({pct}%)</strong> — {verdict.label}
            <p className="mt-1 text-xs font-normal opacity-80">هذا فحص ذاتي إرشادي وليس تقييم طبياً مهنياً.</p>
          </div>
        ) : (
          <p className="rounded-xl bg-slate-100 p-3 text-center text-sm text-ink-400">قيّم البنود الستة كلها لتحصل على النتيجة.</p>
        )}
      </div>
    </div>
  );
}