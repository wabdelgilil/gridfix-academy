import { useMemo, useState } from 'react';

interface Flow {
  id: number;
  year: number;
  amount: number;
}

const DEFAULT_FLOWS: Flow[] = [
  { id: 0, year: 0, amount: -500000 },
  { id: 1, year: 1, amount: 150000 },
  { id: 2, year: 2, amount: 150000 },
  { id: 3, year: 3, amount: 150000 },
  { id: 4, year: 4, amount: 150000 },
  { id: 5, year: 5, amount: 150000 },
];

function npv(flows: Flow[], rate: number): number {
  return flows.reduce((acc, f) => acc + f.amount / Math.pow(1 + rate, f.year), 0);
}

function irr(flows: Flow[]): number | null {
  if (flows.some((f) => f.amount >= 0) && flows.some((f) => f.amount < 0)) {
    let low = -0.99;
    let high = 10;
    for (let i = 0; i < 200; i++) {
      const mid = (low + high) / 2;
      const v = npv(flows, mid);
      if (Math.abs(v) < 1e-6) return mid;
      if (v > 0) low = mid;
      else high = mid;
    }
    return (low + high) / 2;
  }
  return null;
}

function payback(flows: Flow[]): number | null {
  let cum = 0;
  for (let i = 0; i < flows.length; i++) {
    cum += flows[i].amount;
    if (cum >= 0 && flows[i].year > 0) return flows[i].year;
  }
  return null;
}

export default function NpvIrrCalculator() {
  const [rate, setRate] = useState(10);
  const [flows, setFlows] = useState<Flow[]>(DEFAULT_FLOWS);

  const update = (id: number, amount: number) =>
    setFlows((fs) => fs.map((f) => (f.id === id ? { ...f, amount } : f)));

  const addFlow = () => {
    const next = flows.length ? flows[flows.length - 1].year + 1 : 0;
    setFlows((fs) => [...fs, { id: Date.now(), year: next, amount: 0 }]);
  };

  const removeFlow = (id: number) => setFlows((fs) => fs.filter((f) => f.id !== id));

  const result = useMemo(() => {
    const r = rate / 100;
    const npvVal = npv(flows, r);
    const irrVal = irr(flows);
    const paybackVal = payback(flows);
    const decision = npvVal > 0 ? 'قبول' : npvVal < 0 ? 'رفض' : 'محايد';
    const irrDecision =
      irrVal !== null ? (irrVal > r ? 'IRR يتجاوز معدل الخصم' : 'IRR أدنى من معدل الخصم') : 'غير قابل للحساب';
    return { npvVal, irrVal, paybackVal, decision, irrDecision };
  }, [flows, rate]);

  const fmt = (n: number) =>
    new Intl.NumberFormat('ar-EG', { maximumFractionDigits: 0 }).format(n);

  const fmtPct = (n: number) => `${(n * 100).toFixed(2)}%`;

  return (
    <div className="card mt-6 overflow-hidden">
      <div className="border-b border-slate-200 bg-brand-50 px-5 py-3 text-sm font-semibold text-brand-800">
        💰 حاسبة NPV و IRR — قيّم جدوى أي استثمار في الأصول
      </div>

      <div className="space-y-5 p-5">
        <div className="grid gap-4 sm:grid-cols-3">
          <div className="rounded-xl bg-slate-50 p-3">
            <p className="text-xs font-semibold text-ink-500">صافي القيمة الحالية (NPV)</p>
            <p className={`mt-1 text-xl font-bold ${result.npvVal >= 0 ? 'text-emerald-700' : 'text-rose-700'}`}>
              {fmt(result.npvVal)}
            </p>
            <p className="text-xs text-ink-500">النتيجة: {result.decision}</p>
          </div>
          <div className="rounded-xl bg-slate-50 p-3">
            <p className="text-xs font-semibold text-ink-500">معدل العائد الداخلي (IRR)</p>
            <p className="mt-1 text-xl font-bold text-ink-800">
              {result.irrVal !== null ? fmtPct(result.irrVal) : '—'}
            </p>
            <p className="text-xs text-ink-500">{result.irrDecision}</p>
          </div>
          <div className="rounded-xl bg-slate-50 p-3">
            <p className="text-xs font-semibold text-ink-500">فترة الاسترداد</p>
            <p className="mt-1 text-xl font-bold text-ink-800">
              {result.paybackVal !== null ? `${result.paybackVal} سنة` : 'لا تُسترد'}
            </p>
            <p className="text-xs text-ink-500">دون خصم القيمة الزمنية</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <label className="text-sm font-semibold text-ink-700">معدل الخصم: {rate}%</label>
          <input
            type="range"
            min={0}
            max={30}
            step={0.5}
            value={rate}
            onChange={(e) => setRate(Number(e.target.value))}
            className="flex-1 cursor-pointer accent-brand-600"
            aria-label="معدل الخصم"
          />
        </div>

        <div>
          <div className="mb-2 flex items-center justify-between">
            <p className="text-sm font-bold text-ink-700">التدفقات النقدية (السنة 0 = التكلفة الأولية)</p>
            <button
              type="button"
              onClick={addFlow}
              className="cursor-pointer rounded-lg bg-brand-600 px-3 py-1.5 text-xs font-semibold text-white transition hover:bg-brand-700"
            >
              + إضافة سنة
            </button>
          </div>
          <div className="space-y-2">
            {flows.map((f) => (
              <div key={f.id} className="flex items-center gap-3 rounded-lg bg-slate-50 px-3 py-2">
                <span className="w-20 shrink-0 text-xs font-bold text-ink-500">السنة {f.year}</span>
                <input
                  type="number"
                  value={f.amount}
                  onChange={(e) => update(f.id, Number(e.target.value))}
                  className="w-full rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-right text-sm"
                  aria-label={`صافي التدفق في السنة ${f.year}`}
                />
                <button
                  type="button"
                  onClick={() => removeFlow(f.id)}
                  disabled={flows.length <= 1}
                  className="cursor-pointer rounded-lg px-2 py-1 text-xs font-bold text-rose-600 hover:bg-rose-100 disabled:cursor-not-allowed disabled:opacity-40"
                >
                  حذف
                </button>
              </div>
            ))}
          </div>
        </div>

        <details className="rounded-xl border border-slate-200 bg-white p-3 text-sm">
          <summary className="cursor-pointer font-semibold text-ink-700">كيف أقرأ النتائج؟</summary>
          <div className="mt-2 space-y-1 text-xs leading-relaxed text-ink-600">
            <p>• NPV موجب يعني أن العائد يفوق معدل الخصم المطلوب → يُقبل المشروع.</p>
            <p>• NPV سالب يعني أن العائد لا يغطي تكلفة الفرصة → يُرفض.</p>
            <p>• IRR هو معدل الخصم الذي يجعل NPV صفراً؛ اقبله إذا تجاوز معدل الخصم المعتمد.</p>
            <p>• فترة الاسترداد مؤشر سريع يتجاهل القيمة الزمنية للنقود، فلا تعتمد عليه وحده.</p>
          </div>
        </details>
      </div>
    </div>
  );
}