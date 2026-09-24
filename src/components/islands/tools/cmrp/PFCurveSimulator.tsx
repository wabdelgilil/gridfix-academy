import { useState } from 'react';

const techniques = [
  {
    code: 'UT',
    name: 'الموجات فوق الصوتية',
    lead: 'شهور إلى أسابيع',
    cost: '1x',
    detail: 'تكشف الاحتكاك الدقيق وعيوب التزييت مبكرا جدا، قبل أن تظهر أي اهتزازات.',
  },
  {
    code: 'VA',
    name: 'تحليل الاهتزازات',
    lead: 'أسابيع إلى شهور',
    cost: '2x - 3x',
    detail: 'المعيار الذهبي للآلات الدوارة: يكشف عدم المحاذاة وعدم الاتزان وعيوب المحامل.',
  },
  {
    code: 'OA',
    name: 'تحليل الزيوت وبرادة التآكل',
    lead: 'أسابيع إلى أيام',
    cost: '5x',
    detail: 'يفحص اللزوجة والتلوث والجسيمات المعدنية المنفصلة من التروس والمحامل.',
  },
  {
    code: 'IR',
    name: 'التصوير الحراري',
    lead: 'أيام إلى ساعات',
    cost: '10x',
    detail: 'يرصد النقاط الساخنة الناتجة عن احتكاك معدني متقدم أو تراخي التوصيلات.',
  },
  {
    code: 'HS',
    name: 'الحواس البشرية والضجيج',
    lead: 'ساعات إلى دقائق',
    cost: '25x - 40x',
    detail: 'الصوت المسموع والحرارة الملموسة والدخان: آخر إنذار قبل الانهيار الوظيفي مباشرة.',
  },
];

export default function PFCurveSimulator() {
  const [pfInterval, setPfInterval] = useState(40);
  const [stage, setStage] = useState(1);

  const frequency = Math.max(1, Math.floor(pfInterval / 2));
  const netBuffer = pfInterval - frequency;
  const active = techniques[stage];

  return (
    <div className="card mt-6 overflow-hidden">
      <div className="border-b border-slate-200 bg-brand-50 px-5 py-3 text-sm font-semibold text-brand-800">
        ⏱️ محاكي منحنى P-F — الفاصل الزمني وقاعدة التفتيش
      </div>

      <div className="space-y-5 p-5">
        <div>
          <label className="mb-1.5 block text-sm font-semibold text-ink-700">
            الفاصل الزمني P-F المقدر بالأيام: <strong>{pfInterval} يوما</strong>
          </label>
          <input
            type="range"
            min={6}
            max={180}
            value={pfInterval}
            onChange={(e) => setPfInterval(Number(e.target.value))}
            className="w-full cursor-pointer accent-teal-600"
          />
          <div className="flex justify-between text-[11px] text-ink-500">
            <span>6 أيام</span>
            <span>180 يوما</span>
          </div>
        </div>

        <div className="grid gap-2 sm:grid-cols-2">
          <div className="rounded-xl bg-teal-50 p-4 text-center ring-2 ring-teal-500">
            <p className="text-xs font-semibold text-teal-800">أقصى تردد لفحص التفتيش (P-F ÷ 2)</p>
            <p className="mt-1 text-xl font-black text-teal-800">كل {frequency} أيام أو أقل</p>
          </div>
          <div className="rounded-xl bg-slate-50 p-4 text-center ring-1 ring-slate-300">
            <p className="text-xs font-semibold text-ink-600">الفاصل الصافي المتبقي للتخطيط</p>
            <p className="mt-1 text-xl font-black text-ink-900">{netBuffer} يوما على الأقل</p>
          </div>
        </div>

        <p className="rounded-lg bg-amber-50 px-3 py-2 text-xs leading-relaxed text-amber-900 ring-1 ring-amber-200">
          القاعدة: الفحص كل نصف الفاصل يضمن جولتين داخل نافذة التدهور، فلا يبدأ العطل وينهار بين جولتين متتاليتين.
        </p>

        <div>
          <label className="mb-1.5 block text-sm font-semibold text-ink-700">
            مرحلة الكشف على منحنى التدهور: <strong>{active.name}</strong>
          </label>
          <input
            type="range"
            min={0}
            max={techniques.length - 1}
            value={stage}
            onChange={(e) => setStage(Number(e.target.value))}
            className="w-full cursor-pointer accent-amber-600"
          />
          <div className="mt-2 rounded-xl border border-slate-200 bg-slate-50 p-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-lg bg-ink-900 px-2.5 py-1 font-mono text-xs font-bold text-white">
                {active.code}
              </span>
              <span className="text-sm font-bold text-ink-900">{active.name}</span>
              <span className="text-xs font-semibold text-ink-500">مهلة متبقية: {active.lead}</span>
              <span className="rounded-full bg-rose-100 px-2.5 py-0.5 text-[11px] font-bold text-rose-800" dir="ltr">
                Cost {active.cost}
              </span>
            </div>
            <p className="mt-2 text-sm leading-relaxed text-ink-700">{active.detail}</p>
          </div>
        </div>

        <div className="space-y-2">
          {techniques.map((t, i) => (
            <button
              key={t.code}
              type="button"
              onClick={() => setStage(i)}
              className={`w-full cursor-pointer rounded-lg border px-3 py-2 text-right transition ${
                i === stage
                  ? 'border-brand-600 bg-brand-50 ring-2 ring-brand-500 ring-offset-1'
                  : 'border-slate-200 bg-white hover:border-brand-300 hover:bg-slate-50'
              }`}
            >
              <span className="flex items-center justify-between gap-2 text-xs">
                <strong className="text-ink-900">
                  {t.code} — {t.name}
                </strong>
                <span className="shrink-0 font-semibold text-ink-500" dir="ltr">
                  Cost {t.cost}
                </span>
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
