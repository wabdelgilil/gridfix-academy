import { useState } from 'react';

const perspectives = [
  {
    id: 'financial',
    name: 'البعد المالي',
    hint: 'كيف نبدو أمام المساهمين؟ مثال: تكلفة الصيانة كنسبة من ERV',
    color: 'accent-teal-600',
  },
  {
    id: 'customer',
    name: 'بعد العملاء والشركاء',
    hint: 'كيف يرانا الإنتاج؟ مثال: الإتاحة التشغيلية وتلبية الطلبات',
    color: 'accent-sky-600',
  },
  {
    id: 'internal',
    name: 'بعد العمليات الداخلية',
    hint: 'أين يجب أن نتفوق؟ مثال: الالتزام بالجدول ونسبة العمل الاستباقي',
    color: 'accent-amber-600',
  },
  {
    id: 'learning',
    name: 'بعد التعلم والنمو',
    hint: 'كيف نتطور؟ مثال: ساعات التدريب وتغطية مصفوفة الجدارات',
    color: 'accent-violet-600',
  },
];

function reading(avg: number) {
  if (avg >= 85)
    return {
      level: 'متوازن وممتاز',
      text: 'الأبعاد الأربعة قوية معاً — تحسن المؤشرات القيادية يقود النتائج التأخيرية إلى الأفضل.',
    };
  if (avg >= 65)
    return {
      level: 'متوازن جزئياً',
      text: 'بعد أو أكثر متأخر عن البقية — عالج المؤشرات القيادية في البعد الأضعف قبل أن تنعكس على النتائج.',
    };
  return {
    level: 'غير متوازن',
    text: 'التركيز على بعد واحد وإهمال البقية — النتائج المالية وحدها لا تحمي الأصول من الانهيار.',
  };
}

export default function BalancedScorecard() {
  const [scores, setScores] = useState<Record<string, number>>({
    financial: 80,
    customer: 75,
    internal: 70,
    learning: 65,
  });

  const avg = Math.round(
    (scores.financial + scores.customer + scores.internal + scores.learning) / 4
  );
  const r = reading(avg);
  const weakest = perspectives.reduce((a, b) => (scores[a.id] <= scores[b.id] ? a : b));

  return (
    <div className="card mt-6 overflow-hidden">
      <div className="border-b border-slate-200 bg-brand-50 px-5 py-3 text-sm font-semibold text-brand-800">
        📊 محاكي بطاقة الأداء — قيّم الأبعاد الأربعة ولاحظ العلاقة السببية
      </div>

      <div className="space-y-4 p-5">
        {perspectives.map((p) => (
          <div key={p.id} className="rounded-xl border border-slate-200 p-4">
            <div className="mb-1 flex items-center justify-between gap-2">
              <label className="text-sm font-bold text-ink-700">{p.name}</label>
              <span className="rounded bg-slate-100 px-2 py-0.5 font-mono text-xs font-bold text-ink-700">
                {scores[p.id]}%
              </span>
            </div>
            <p className="mb-2 text-xs text-ink-500">{p.hint}</p>
            <input
              type="range"
              min={0}
              max={100}
              value={scores[p.id]}
              onChange={(e) =>
                setScores((prev) => ({ ...prev, [p.id]: Number(e.target.value) }))
              }
              className={`w-full ${p.color}`}
            />
          </div>
        ))}

        <div className="rounded-xl bg-slate-50 p-4 text-sm ring-2 ring-slate-400">
          <p className="font-bold text-ink-800">
            متوسط التوازن: <strong dir="ltr">{avg}%</strong> — {r.level}
          </p>
          <p className="mt-1 text-xs text-ink-600">{r.text}</p>
          <p className="mt-1 text-xs text-ink-600">
            أضعف بعد حالياً: {weakest.name} ({scores[weakest.id]}%) — ابدأ منه: التدريب وجودة التخطيط والالتزام بالصيانة الوقائية مؤشرات قيادية ترفع الإتاحة وتخفض التكلفة لاحقاً.
          </p>
        </div>
      </div>
    </div>
  );
}
