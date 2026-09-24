import { useState } from 'react';

interface ComplianceItem {
  id: string;
  label: string;
  good: string;
}

const items: ComplianceItem[] = [
  { id: 'exits', label: 'المخارج ومسارات الهروب مُخلّية ومُضاءة ومُعلَّمة دائماً', good: 'جميع المخارج مفتوحة بلا عوائق، الإضاءة تعمل، واللافتات واضحة بلغتين.' },
  { id: 'extinguishers', label: 'طفايات الحريق موزّعة ويُفحص ضغطها شهرياً', good: 'العدد يكفي حسب المساحة، وسجل الفحص الشهري محدّث.' },
  { id: 'sds', label: 'أوراق بيانات السلامة (SDS) للمواد الخطرة متوفرة بجوارها', good: 'كل مادة كيميائية لها بطاقة حديثة ومترجمة، ويمكن الوصول إليها بسهولة.' },
  { id: 'ppe', label: 'معدات الوقاية الشخصية متوفرة ويُطلب استخدامها فعلاً', good: 'الخوذ والنظارات والقفازات متوفرة لكل من يحتاجها ويستخدمها في مواقع العمل.' },
  { id: 'signs', label: 'اللافتات والإنذارات واضحة وتعمل بالاختبار الدوري', good: 'إنذار الحريق يعمل عند الاختبار، ولافتات السلامة واضحة عند المخارج والمناطق الحرجة.' },
  { id: 'training', label: 'تدريب الإخلاء والسلامة مُنجز لكل موظف عند التعيين ومرتين سنوياً', good: 'سجل تدريب يحدد الاسم والتواريخ، وتمارين إخلاء واقعية مرة كل ستة أشهر.' },
  { id: 'incident', label: 'التوثيق والإبلاغ عن الحوادث وشبه الحوادث معمول به فعلاً', good: 'استمارة بلاغ سهلة، يُحلّل كل حادث ويُسجَّل الإجراء التصحيحي.' },
];

function totalScore(answers: Record<string, number>): number {
  return Object.values(answers).reduce((a, b) => a + b, 0);
}

const maxScore = items.length * 2;

function verdict(pct: number) {
  if (pct >= 80) return { text: 'جاهزية ممتازة — استمر في التدقيق الدوري', tone: 'ok' as const };
  if (pct >= 50) return { text: 'جاهزية مقبولة — ركّز على البنود الضعيفة', tone: 'warn' as const };
  return { text: 'جاهزية ضعيفة — راجع البنود فوراً قبل أي مراجعة', tone: 'bad' as const };
}

const toneClasses: Record<string, string> = {
  ok: 'bg-teal-50 text-teal-800 ring-teal-500',
  warn: 'bg-amber-50 text-amber-800 ring-amber-500',
  bad: 'bg-rose-50 text-rose-800 ring-rose-500',
};

export default function SafetyComplianceCheck() {
  const [answers, setAnswers] = useState<Record<string, number>>({});

  const set = (id: string, value: number) =>
    setAnswers((prev) => ({ ...prev, [id]: value }));

  const answeredCount = Object.keys(answers).length;
  const score = totalScore(answers);
  const pct = Math.round((score / maxScore) * 100);
  const v = verdict(pct);

  return (
    <div className="card mt-6 overflow-hidden">
      <div className="border-b border-slate-200 bg-brand-50 px-5 py-3 text-sm font-semibold text-brand-800">
        🛡️ فحص ذاتي لجاهزية الإمتثال (OSHA)
      </div>

      <div className="space-y-3 p-5">
        {items.map((item, i) => {
          const val = answers[item.id] ?? -1;
          return (
            <div
              key={item.id}
              className={`rounded-xl border p-3.5 transition ${
                val >= 0 ? 'border-brand-200 bg-brand-50/40' : 'border-slate-200'
              }`}
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="font-semibold text-ink-900">
                    {i + 1}. {item.label}
                  </p>
                  <p className="mt-0.5 text-xs text-ink-400">{item.good}</p>
                </div>
                <div className="flex shrink-0 gap-1.5">
                  {[0, 1, 2].map((v) => (
                    <button
                      key={v}
                      type="button"
                      onClick={() => set(item.id, v)}
                      className={`cursor-pointer rounded-lg px-3 py-1.5 text-xs font-semibold transition ${
                        val === v
                          ? v === 2
                            ? 'bg-teal-600 text-white'
                            : v === 1
                              ? 'bg-amber-500 text-white'
                              : 'bg-rose-600 text-white'
                          : 'bg-slate-100 text-ink-500 hover:bg-slate-200'
                      }`}
                    >
                      {v === 2 ? 'متوفر' : v === 1 ? 'جزئي' : 'ناقص'}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          );
        })}

        {answeredCount === items.length ? (
          <div className={`rounded-xl p-4 text-sm font-semibold ring-2 ${toneClasses[v.tone]}`}>
            نتيجتك: <strong dir="ltr">{score}/{maxScore} ({pct}%)</strong> — {v.text}
            <p className="mt-1 text-xs font-normal opacity-80">
              هذا فحص ذاتي إرشادي وليس تقييماً رسمياً للإمتثال.
            </p>
          </div>
        ) : (
          <p className="rounded-xl bg-slate-100 p-3 text-center text-sm text-ink-400">
            أجب عن جميع البنود السبعة لتحصل على النتيجة.
          </p>
        )}
      </div>
    </div>
  );
}