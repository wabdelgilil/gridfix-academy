import { useState } from 'react';

interface Param {
  id: string;
  label: string;
  unit: string;
  low: number;
  high: number;
  hint: string;
}

const params: Param[] = [
  { id: 'temp', label: 'درجة حرارة الهواء', unit: '°C', low: 20, high: 26, hint: 'المرجع ASHRAE للراحة الحرارية المعتدلة' },
  { id: 'humidity', label: 'الرطوبة النسبية', unit: '%', low: 30, high: 60, hint: 'أعلى من 60 تعزز الرطوبة والعفن' },
  { id: 'co2', label: 'تركيز CO₂', unit: 'ppm', low: 400, high: 1000, hint: 'فوق 1000 يعكس ضعف تهوية' },
];

function check(val: number, low: number, high: number): 'ok' | 'warn' | 'bad' {
  if (val >= low && val <= high) return 'ok';
  if (val >= low - 4 && val <= high + 4) return 'warn';
  return 'bad';
}

export default function IEQScanner() {
  const [values, setValues] = useState({ temp: 24, humidity: 45, co2: 850 });

  const set = (id: string, v: number) => setValues((prev) => ({ ...prev, [id]: v }));

  const results = params.map((p) => ({ p, v: values[p.id as keyof typeof values], s: check(values[p.id as keyof typeof values], p.low, p.high) }));

  const badCount = results.filter((r) => r.s === 'bad').length;
  const warnCount = results.filter((r) => r.s === 'warn').length;

  const overall =
    badCount === 0 && warnCount === 0 ? { label: 'بيئة داخلية سليمة', tone: 'ok' }
    : badCount === 0 ? { label: 'مقبول مع مراقبة النقاط الصفراء', tone: 'warn' }
    : { label: 'مؤشرات تحتاج إجراء الآن (تهوية/ضبط حرارة)', tone: 'bad' };

  const toneClasses = {
    ok: 'bg-teal-50 text-teal-800',
    warn: 'bg-amber-50 text-amber-800',
    bad: 'bg-rose-50 text-rose-800',
  }[overall.tone];

  return (
    <div className="card mt-6 overflow-hidden">
      <div className="border-b border-slate-200 bg-brand-50 px-5 py-3 text-sm font-semibold text-brand-800">
        🌡️ ماسح جودة البيئة الداخلية (IEQ)
      </div>

      <div className="grid gap-4 p-5 sm:grid-cols-3">
        {results.map(({ p, v, s }) => (
          <div className={`rounded-xl border p-4 ${s === 'ok' ? 'border-teal-200 bg-teal-50/50' : s === 'warn' ? 'border-amber-200 bg-amber-50/50' : 'border-rose-200 bg-rose-50/50'}`}>
            <p className="text-sm font-semibold text-ink-900">{p.label}</p>
            <input
              type="number"
              step="any"
              value={v}
              onChange={(e) => set(p.id, Number(e.target.value))}
              className="mt-1 w-full rounded-lg border border-slate-200 px-2.5 py-1.5 text-sm outline-none focus:border-brand-500"
            />
            <p className="mt-1" dir="ltr">{p.unit} — النطاق المرجعي {p.low}{p.unit === '°C' ? '' : p.unit === '%' ? '%' : ' ppm'} إلى {p.high}{p.unit}</p>
            <p className="mt-0.5 text-xs text-ink-400">{p.hint}</p>
            <span className={`chip mt-2 ${s === 'ok' ? 'bg-teal-100 text-teal-800' : s === 'warn' ? 'bg-amber-100 text-amber-800' : 'bg-rose-100 text-rose-800'}`}>
              {s === 'ok' ? '✓ سليم' : s === 'warn' ? '⚠ على الحد' : '✗ خارج النطاق'}
            </span>
          </div>
        ))}
      </div>

      <div className={`mx-5 mb-5 rounded-xl p-4 text-sm font-semibold ${toneClasses}`}>
        {overall.label}
        <p className="mt-1 text-xs font-normal opacity-80">مؤشرات إرشادية عامة للتهوية والراحة. القياسات الفعلية على أرض المنشأة بأجهزة معايرة.</p>
      </div>
    </div>
  );
}