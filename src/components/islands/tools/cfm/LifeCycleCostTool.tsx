import { useState } from 'react';

interface Option {
  initial: number;
  annual: number;
  life: number;
  escalate: number;
}

const HORIZON = 12;

function pv(amount: number, rate: number, year: number): number {
  return amount / Math.pow(1 + rate / 100, year);
}

function lccTotal(opt: Option, discount: number): number {
  let total = opt.initial;
  for (let y = 1; y <= HORIZON; y++) {
    const opCost = opt.annual * Math.pow(1 + opt.escalate / 100, y - 1);
    total += pv(opCost, discount, y);
    if (y % opt.life === 0) total += pv(opt.initial, discount, y);
  }
  return total;
}

export default function LifeCycleCostTool() {
  const [discount, setDiscount] = useState(8);
  const [a, setA] = useState<Option>({ initial: 250000, annual: 12000, life: 6, escalate: 4 });
  const [b, setB] = useState<Option>({ initial: 180000, annual: 22000, life: 4, escalate: 5 });

  const setOpt = (group: 'a' | 'b', key: keyof Option, value: number) => {
    const target = group === 'a' ? a : b;
    const setter = group === 'a' ? setA : setB;
    setter({ ...target, [key]: value });
  };

  const costA = lccTotal(a, discount);
  const costB = lccTotal(b, discount);
  const better = costA <= costB ? 'الخيار الأول' : 'الخيار الثاني';

  const renderInputs = (label: string, opt: Option, group: 'a' | 'b') => (
    <div className="rounded-xl border border-slate-200 p-4">
      <p className="mb-3 text-sm font-bold text-ink-900">{label}</p>
      <div className="grid grid-cols-2 gap-3 text-sm">
        <label>
          <span className="text-xs text-ink-400">الاستثمار الأولي</span>
          <input type="number" value={opt.initial} onChange={(e) => setOpt(group, 'initial', Number(e.target.value))} className="mt-1 w-full rounded-lg border border-slate-200 px-2.5 py-1.5 outline-none focus:border-brand-500" />
        </label>
        <label>
          <span className="text-xs text-ink-400">تكلفة تشغيل سنوية</span>
          <input type="number" value={opt.annual} onChange={(e) => setOpt(group, 'annual', Number(e.target.value))} className="mt-1 w-full rounded-lg border border-slate-200 px-2.5 py-1.5 outline-none focus:border-brand-500" />
        </label>
        <label>
          <span className="text-xs text-ink-400">عمر الأصل (سنوات)</span>
          <input type="number" value={opt.life} onChange={(e) => setOpt(group, 'life', Number(e.target.value))} className="mt-1 w-full rounded-lg border border-slate-200 px-2.5 py-1.5 outline-none focus:border-brand-500" />
        </label>
        <label>
          <span className="text-xs text-ink-400">تصعيد تشغيلي %</span>
          <input type="number" value={opt.escalate} onChange={(e) => setOpt(group, 'escalate', Number(e.target.value))} className="mt-1 w-full rounded-lg border border-slate-200 px-2.5 py-1.5 outline-none focus:border-brand-500" />
        </label>
      </div>
    </div>
  );

  return (
    <div className="card mt-6 overflow-hidden">
      <div className="border-b border-slate-200 bg-brand-50 px-5 py-3 text-sm font-semibold text-brand-800">
        ♻️ حاسبة تكلفة دورة الحياة (LCC) — أفق {HORIZON} سنوات
      </div>

      <div className="grid gap-4 p-5 sm:grid-cols-2">
        {renderInputs('الخيار الأول (أ)' , a, 'a')}
        {renderInputs('الخيار الثاني (ب)', b, 'b')}
      </div>

      <div className="px-5 pb-4">
        <label className="text-sm font-semibold text-ink-900">معدل الخصم % <span className="font-normal text-ink-400">(تكلفة رأس المال)</span></label>
        <input type="range" min="0" max="20" step="0.5" value={discount} onChange={(e) => setDiscount(Number(e.target.value))} className="mt-2 w-full accent-teal-600" />
        <span className="chip mt-2 bg-brand-100 text-brand-700" dir="ltr">{discount}%</span>
      </div>

      <div className="mx-5 mb-5 rounded-xl bg-brand-50 p-4 text-sm text-brand-800 ring-2 ring-brand-500">
        <p className="text-base font-bold" dir="ltr">أ: {Math.round(costA).toLocaleString('en-US')} | ب: {Math.round(costB).toLocaleString('en-US')}</p>
        <p className="mt-1 font-semibold">الأقل LCC إجمالياً: {better} — على أفق {HORIZON} سنة بشمل إعادة الشراء كل {a.life} سنة و{b.life} سنة.</p>
        <p className="mt-2 text-xs opacity-80">الاستثمار الأرخص أولاً قد يكون أغلى على 10 سنوات — لذلك نحسب على امتداد الأفق الكامل.</p>
      </div>
    </div>
  );
}