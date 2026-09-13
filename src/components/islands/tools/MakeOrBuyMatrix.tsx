import { useState } from 'react';

interface Criterion {
  key: string;
  label: string;
  hint: string;
  direction: 'insource' | 'outsource';
}

const criteria: Criterion[] = [
  {
    key: 'strategic',
    label: 'الأهمية الاستراتيجية للخدمة',
    hint: 'هل هذه الخدمة جزء من تميّز المنظمة وقلب أعمالها؟',
    direction: 'insource',
  },
  {
    key: 'expertise',
    label: 'توافر الخبرة الداخلية',
    hint: 'هل يملك فريقك القدرة والخبرة المطلوبة فعلاً؟',
    direction: 'insource',
  },
  {
    key: 'control',
    label: 'التحكم والمخاطر',
    hint: 'هل فقدان السيطرة اليومية على الخدمة يشكل مخاطرة؟',
    direction: 'insource',
  },
  {
    key: 'cost',
    label: 'ميزة تكلفة الاستعانة بالخارج',
    hint: 'هل يحقق السوق الخارجي اقتصاد حجم أو أجراً أوفر؟',
    direction: 'outsource',
  },
];

export default function MakeOrBuyMatrix() {
  const [scores, setScores] = useState<Record<string, number>>({
    strategic: 5,
    expertise: 5,
    control: 5,
    cost: 5,
  });

  const insourceCount = criteria.filter((c) => c.direction === 'insource').length;
  const outsourceCount = criteria.filter((c) => c.direction === 'outsource').length;
  const insourceScore = criteria
    .filter((c) => c.direction === 'insource')
    .reduce((sum, c) => sum + scores[c.key], 0) / insourceCount;
  const outsourceScore = criteria
    .filter((c) => c.direction === 'outsource')
    .reduce((sum, c) => sum + scores[c.key], 0) / outsourceCount;

  const diff = insourceScore - outsourceScore;
  const recommendation =
    diff >= 1.5
      ? { text: '🗝️ تشغيل داخلي (Make) — الخدمة استراتيجية وتحتاج سيطرة وخبرة داخلية.', color: 'bg-brand-50 text-brand-800 ring-brand-500' }
      : diff <= -1.5
        ? { text: '🤝 استعانة بالخارج (Buy) — ميزة السوق واضحة والمخاطر منخفضة.', color: 'bg-slate-100 text-ink-700 ring-slate-400' }
        : { text: '⚖️ نموذج هجين (Hybrid) — مزيج مدروس: جوهر مضمون داخلياً والرافد الخارجي للطاقة. أوقف القرار بالبيانات.', color: 'bg-amber-50 text-amber-800 ring-amber-400' };

  return (
    <div className="card mt-6 overflow-hidden">
      <div className="border-b border-slate-200 bg-brand-50 px-5 py-3 text-sm font-semibold text-brand-800">
        🧮 مصفوفة Make-vs-Buy لخدمة منشأة
      </div>

      <div className="grid gap-5 p-5 sm:grid-cols-2">
        {criteria.map((c) => (
          <div className="rounded-xl border border-slate-200 p-4">
            <div className="flex items-center justify-between">
              <p className="text-sm font-bold text-ink-900">{c.label}</p>
              <span className="chip bg-slate-100 text-ink-500">{c.direction === 'insource' ? 'يدفع للتشغيل الداخلي' : 'يدفع للخارج'}</span>
            </div>
            <p className="mt-1 text-xs text-ink-400">{c.hint}</p>
            <input
              type="range"
              min="0"
              max="10"
              value={scores[c.key]}
              onChange={(e) => setScores({ ...scores, [c.key]: Number(e.target.value) })}
              className="mt-3 w-full accent-teal-600"
            />
            <div className="flex justify-between text-[11px] text-ink-400">
              <span>0 — ليس مؤثراً</span>
              <span dir="ltr" className="font-bold text-brand-700">{scores[c.key]}/10</span>
            </div>
          </div>
        ))}
      </div>

      <div className={`mx-5 mb-5 rounded-xl p-4 ring-2 ${recommendation.color}`}>
        <p className="font-bold">{recommendation.text}</p>
        <p className="mt-1 text-xs opacity-80">
          متوسط التشغيل الداخلي <span dir="ltr">{Math.round(insourceScore * 10) / 10}</span> مقابل متوسط الخارج <span dir="ltr">{Math.round(outsourceScore * 10) / 10}</span> — القرار النهائي يقارن النطاق المالي وسلوك أداء المقاولين.
        </p>
      </div>
    </div>
  );
}