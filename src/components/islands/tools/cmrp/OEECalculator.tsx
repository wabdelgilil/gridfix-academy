import { useState } from 'react';

const LOSSES = [
  { factor: 'الإتاحة', items: ['الأعطال المفاجئة غير المخططة', 'أزمنة الضبط وتبديل القوالب'] },
  { factor: 'الأداء', items: ['التوقفات الدقيقة والخمول (أقل من 5 دقائق)', 'التشغيل بسرعة أبطأ من الطاقة التصميمية'] },
  { factor: 'الجودة', items: ['خردة بدء التشغيل والإحماء', 'عيوب الإنتاج المستمرة'] },
];

export default function OEECalculator() {
  const [availability, setAvailability] = useState(80);
  const [performance, setPerformance] = useState(83);
  const [quality, setQuality] = useState(95);

  const oee = ((availability / 100) * (performance / 100) * (quality / 100) * 100);
  const isWorldClass = oee >= 85;
  const weakest =
    availability <= performance && availability <= quality
      ? 'الإتاحة'
      : performance <= quality
        ? 'الأداء'
        : 'الجودة';

  const reset = () => {
    setAvailability(80);
    setPerformance(83);
    setQuality(95);
  };

  return (
    <div className="card mt-6 overflow-hidden">
      <div className="border-b border-slate-200 bg-brand-50 px-5 py-3 text-sm font-semibold text-brand-800">
        📊 حاسبة OEE — الإتاحة × الأداء × الجودة
      </div>

      <div className="space-y-5 p-5">
        <div className="grid gap-4 sm:grid-cols-3">
          <div>
            <label className="mb-1.5 block text-sm font-semibold text-ink-700">
              الإتاحة: <strong dir="ltr">{availability}%</strong>
            </label>
            <input
              type="range"
              min={0}
              max={100}
              value={availability}
              onChange={(e) => setAvailability(Number(e.target.value))}
              className="w-full cursor-pointer"
              aria-label="عامل الإتاحة"
            />
            <p className="mt-1 text-[11px] text-ink-500">الهدف العالمي: 90% فأكثر</p>
          </div>
          <div>
            <label className="mb-1.5 block text-sm font-semibold text-ink-700">
              الأداء: <strong dir="ltr">{performance}%</strong>
            </label>
            <input
              type="range"
              min={0}
              max={100}
              value={performance}
              onChange={(e) => setPerformance(Number(e.target.value))}
              className="w-full cursor-pointer"
              aria-label="عامل الأداء"
            />
            <p className="mt-1 text-[11px] text-ink-500">الهدف العالمي: 95% فأكثر</p>
          </div>
          <div>
            <label className="mb-1.5 block text-sm font-semibold text-ink-700">
              الجودة: <strong dir="ltr">{quality}%</strong>
            </label>
            <input
              type="range"
              min={0}
              max={100}
              value={quality}
              onChange={(e) => setQuality(Number(e.target.value))}
              className="w-full cursor-pointer"
              aria-label="عامل الجودة"
            />
            <p className="mt-1 text-[11px] text-ink-500">الهدف العالمي: 99.9%</p>
          </div>
        </div>

        <div className={`rounded-xl p-4 text-sm ring-2 ${isWorldClass ? 'bg-teal-50 text-teal-800 ring-teal-500' : 'bg-amber-50 text-amber-800 ring-amber-500'}`}>
          <p className="font-bold">
            كفاءة المعدات الكلية: <strong dir="ltr">{oee.toFixed(1)}%</strong>
            {' — '}
            {isWorldClass ? 'مستوى عالمي ممتاز (85% فأكثر)' : 'أقل من المعيار العالمي (85%)'}
          </p>
          <p className="mt-1 text-xs font-normal opacity-90">
            أضعف عامل هو {weakest} — ابدأ التحسين منه، فحاصل الضرب يتبع أضعف حلقة.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          {LOSSES.map((group) => (
            <div key={group.factor} className="rounded-xl border border-slate-200 bg-white p-4">
              <p className="text-xs font-bold text-ink-800">خسائر {group.factor}</p>
              <ul className="mt-2 list-disc space-y-1 pr-4 text-[11px] leading-relaxed text-ink-500">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-between rounded-xl bg-slate-50 px-4 py-3">
          <p className="text-xs text-ink-500">
            المعادلة: <strong dir="ltr">OEE = A × P × Q</strong> — حاصل ضرب لا متوسط حسابي.
          </p>
          <button
            type="button"
            onClick={reset}
            className="shrink-0 cursor-pointer rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-xs font-bold text-ink-700"
          >
            إعادة الضبط ↺
          </button>
        </div>
      </div>
    </div>
  );
}
