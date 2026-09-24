import { useState } from 'react';

type Mode = 'fixed' | 'open' | 'hoteling';

const benchmarks: Record<Mode, { label: string; low: number; high: number }> = {
  fixed: { label: 'مكاتب مغلقة/شخص بمساحة ثابتة', low: 15, high: 25 },
  open: { label: 'مخطط مفتوح', low: 8, high: 14 },
  hoteling: { label: 'Hoteling / مشاركة المكاتب', low: 5, high: 9 },
};

export default function SpaceDensityTool() {
  const [area, setArea] = useState(1800);
  const [employees, setEmployees] = useState(120);
  const [mode, setMode] = useState<Mode>('open');

  const density = area / employees;
  const ref = benchmarks[mode];
  const isLow = density < ref.low; // كثيف (أقل مساحة لكل موظف)
  const utilization = Math.min(100, Math.round(((density - ref.low) / (ref.high - ref.low)) * 100));

  const verdict =
    density < ref.low
      ? 'كثيفة — المساحة لكل موظف أقل من النطاق المرجعي، انتبه للراحة والازدحام.'
      : density <= ref.high
        ? 'متوازنة — داخل النطاق المرجعي لنمط عملك.'
        : 'واسعة — المساحة أعلى من المرجع؛ فرصة لدراسة تقليص تكلفة مساحية.'

  return (
    <div className="card mt-6 overflow-hidden">
      <div className="border-b border-slate-200 bg-brand-50 px-5 py-3 text-sm font-semibold text-brand-800">
        📐 حاسبة كثافة المساحة
      </div>

      <div className="grid gap-5 p-5 sm:grid-cols-2">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-semibold text-ink-900">المساحة المخصصة (م²)</label>
            <input
              type="number"
              value={area}
              onChange={(e) => setArea(Number(e.target.value))}
              className="mt-1 w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm outline-none focus:border-brand-500"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-ink-900">عدد الموظفين</label>
            <input
              type="number"
              value={employees}
              onChange={(e) => setEmployees(Number(e.target.value))}
              className="mt-1 w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm outline-none focus:border-brand-500"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-ink-900">نمط العمل</label>
            <div className="mt-2 flex flex-wrap gap-2">
              {(Object.keys(benchmarks) as Mode[]).map((m) => (
                <button
                  type="button"
                  key={m}
                  onClick={() => setMode(m)}
                  className={`rounded-xl px-3.5 py-2 text-sm font-medium transition ${
                    mode === m ? 'bg-brand-600 text-white' : 'bg-slate-100 text-ink-600 hover:bg-slate-200 cursor-pointer'
                  }`}
                >
                  {benchmarks[m].label}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className={`rounded-xl p-5 text-sm leading-relaxed ${isLow ? 'bg-rose-50 text-rose-800' : 'bg-brand-50 text-brand-800'}`}>
          <p className="text-lg font-bold" dir="ltr">{Math.round(density * 10) / 10} م²/موظف</p>
          <div className="mt-3 h-2.5 overflow-hidden rounded-full bg-white">
            <div className="h-full rounded-full bg-brand-500 transition-all" style={{ width: `${Math.max(5, Math.min(100, utilization))}%` }} />
          </div>
          <p className="mt-2 opacity-90">النطاق المرجعي التقريبي: <span dir="ltr">{ref.low}–{ref.high}</span> م²/موظف</p>
          <p className="mt-2 font-semibold">{verdict}</p>
          <p className="mt-2 text-xs opacity-75">النطاقات إرشادية (ممارسات مكتبية عامة) — تراجعها شرائح القطاع والمناخ ونمط العمل الفعلية.</p>
        </div>
      </div>
    </div>
  );
}