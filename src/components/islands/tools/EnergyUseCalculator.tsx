import { useState } from 'react';

type BuildingType = 'office' | 'retail' | 'hospital' | 'education';

const benchmarks: Record<BuildingType, { label: string; low: number; high: number }> = {
  office: { label: 'مكتبي', low: 200, high: 350 },
  retail: { label: 'تجاري', low: 250, high: 400 },
  hospital: { label: 'مستشفى', low: 450, high: 650 },
  education: { label: 'تعليمي', low: 180, high: 300 },
};

function fmt(n: number): string {
  if (!isFinite(n)) return '—';
  return Math.round(n).toLocaleString('en-US');
}

export default function EnergyUseCalculator() {
  const [kwh, setKwh] = useState(900000);
  const [area, setArea] = useState(5000);
  const [type, setType] = useState<BuildingType>('office');

  const eui = kwh / area;
  const ref = benchmarks[type];

  const verdict =
    !isFinite(eui) || eui <= 0
      ? 'أدخل أرقاماً صحيحة'
      : eui < ref.low
        ? 'ممتاز — أنت تحت النطاق المرجعي لمبنانا'
        : eui <= ref.high
          ? 'جيد — داخل النطاق المرجعي'
          : 'مرتفع — فوق النطاق المرجعي، راجع فرص الترشيد';

  const verdictColor =
    eui > 0 && eui < ref.low
      ? 'bg-brand-50 text-brand-800'
      : eui > 0 && eui <= ref.high
        ? 'bg-amber-50 text-amber-800'
        : eui > ref.high
          ? 'bg-rose-50 text-rose-800'
          : 'bg-slate-100 text-slate-600';

  return (
    <div className="card mt-6 overflow-hidden">
      <div className="border-b border-slate-200 bg-brand-50 px-5 py-3 text-sm font-semibold text-brand-800">
        ⚡ حاسبة كثافة استهلاك الطاقة (EUI)
      </div>

      <div className="grid gap-5 p-5 sm:grid-cols-2">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-semibold text-ink-900">الاستهلاك السنوي للطاقة (kWh/سنة)</label>
            <input
              type="number"
              value={kwh}
              onChange={(e) => setKwh(Number(e.target.value))}
              className="mt-1 w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-200"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-ink-900">صافي المساحة المبنية (م²)</label>
            <input
              type="number"
              value={area}
              onChange={(e) => setArea(Number(e.target.value))}
              className="mt-1 w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-200"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-ink-900">نوع المبنى (للمقارنة المرجعية)</label>
            <div className="mt-2 flex flex-wrap gap-2">
              {(Object.keys(benchmarks) as BuildingType[]).map((b) => (
                <button
                  type="button"
                  key={b}
                  onClick={() => setType(b)}
                  className={`rounded-xl px-3.5 py-2 text-sm font-medium transition ${
                    type === b ? 'bg-brand-600 text-white' : 'bg-slate-100 text-ink-600 hover:bg-slate-200 cursor-pointer'
                  }`}
                >
                  {benchmarks[b].label}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className={`rounded-xl p-5 text-sm leading-relaxed ${verdictColor}`}>
          <p className="text-lg font-bold" dir="ltr">EUI = {fmt(eui)} kWh/m²·yr</p>
          <p className="mt-2 opacity-90">النطاق المرجعي التقديري: <span dir="ltr">{ref.low}–{ref.high}</span> kWh/m²·yr</p>
          <p className="mt-3 font-semibold">{verdict}</p>
          <p className="mt-2 text-xs opacity-75">المرجع التقريبي حسب ENERGY STAR/ASHRAE؛ اقرن دائماً بظروف المناخ ونوع التجهيز. انخفاض EUI ليس هدفاً أعمى — بل مع الحفاظ على الراحة وجودة البيئة.</p>
        </div>
      </div>
    </div>
  );
}