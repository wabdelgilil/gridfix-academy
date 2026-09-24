import { useState } from 'react';

interface Option {
  label: string;
  purchase: number;
  operating: number;
  maintenance: number;
  disposal: number;
}

interface LccOption extends Option {
  life: number;
}

function presentValue(amount: number, rate: number, year: number): number {
  return amount / Math.pow(1 + rate / 100, year);
}

function lccTotal(cfg: LccOption, discount: number): number {
  let total = cfg.purchase;
  for (let y = 1; y <= cfg.life; y++) {
    total += presentValue(cfg.operating + cfg.maintenance, discount, y);
  }
  total -= cfg.disposal / Math.pow(1 + discount / 100, cfg.life);
  return total;
}

const defaultA: LccOption = { label: 'الخيار أ: الأرخص شراءً', purchase: 10000, operating: 3000, maintenance: 2000, disposal: 1500, life: 10 };
const defaultB: LccOption = { label: 'الخيار ب: الأكفأ تشغيلاً', purchase: 14000, operating: 1500, maintenance: 800, disposal: 2000, life: 10 };

export default function LccCalculator() {
  const [discount, setDiscount] = useState(10);
  const [a, setA] = useState<LccOption>(defaultA);
  const [b, setB] = useState<LccOption>(defaultB);

  const totalA = lccTotal(a, discount);
  const totalB = lccTotal(b, discount);
  const cheaper = totalA <= totalB ? 'أ' : 'ب';
  const savings = Math.abs(totalA - totalB);

  const setField = (group: 'a' | 'b', key: keyof LccOption, value: number) => {
    const setter = group === 'a' ? setA : setB;
    const target = group === 'a' ? a : b;
    setter({ ...target, [key]: value });
  };

  const renderInputs = (opt: LccOption, group: 'a' | 'b') => (
    <div className="rounded-xl border border-slate-200 p-4">
      <p className="mb-3 text-sm font-bold text-ink-900">{opt.label}</p>
      <div className="grid grid-cols-2 gap-3 text-sm">
        <label>
          <span className="text-xs text-ink-400">تكلفة الاكتساب</span>
          <input
            type="number"
            value={opt.purchase}
            onChange={(e) => setField(group, 'purchase', Number(e.target.value))}
            className="mt-1 w-full rounded-lg border border-slate-200 px-2.5 py-1.5 outline-none focus:border-brand-500"
            dir="ltr"
          />
        </label>
        <label>
          <span className="text-xs text-ink-400">تشغيل سنوي</span>
          <input
            type="number"
            value={opt.operating}
            onChange={(e) => setField(group, 'operating', Number(e.target.value))}
            className="mt-1 w-full rounded-lg border border-slate-200 px-2.5 py-1.5 outline-none focus:border-brand-500"
            dir="ltr"
          />
        </label>
        <label>
          <span className="text-xs text-ink-400">صيانة سنوية</span>
          <input
            type="number"
            value={opt.maintenance}
            onChange={(e) => setField(group, 'maintenance', Number(e.target.value))}
            className="mt-1 w-full rounded-lg border border-slate-200 px-2.5 py-1.5 outline-none focus:border-brand-500"
            dir="ltr"
          />
        </label>
        <label>
          <span className="text-xs text-ink-400">تكلفة النهاية (مطروحة)</span>
          <input
            type="number"
            value={opt.disposal}
            onChange={(e) => setField(group, 'disposal', Number(e.target.value))}
            className="mt-1 w-full rounded-lg border border-slate-200 px-2.5 py-1.5 outline-none focus:border-brand-500"
            dir="ltr"
          />
        </label>
        <label className="col-span-2">
          <span className="text-xs text-ink-400">العمر الافتراضي (سنوات)</span>
          <input
            type="number"
            value={opt.life}
            onChange={(e) => setField(group, 'life', Number(e.target.value))}
            className="mt-1 w-full rounded-lg border border-slate-200 px-2.5 py-1.5 outline-none focus:border-brand-500"
            dir="ltr"
          />
        </label>
      </div>
    </div>
  );

  return (
    <div className="card mt-6 overflow-hidden">
      <div className="border-b border-slate-200 bg-brand-50 px-5 py-3 text-sm font-semibold text-brand-800">
        💰 حاسبة تكلفة دورة الحياة (LCC) — قارن البدائل بالتكلفة الإجمالية
      </div>

      <div className="grid gap-4 p-5 sm:grid-cols-2">
        {renderInputs(a, 'a')}
        {renderInputs(b, 'b')}
      </div>

      <div className="px-5 pb-4">
        <label className="text-sm font-semibold text-ink-900">معدل الخصم السنوي % <span className="font-normal text-ink-400">(تكلفة رأس المال والتضخم)</span></label>
        <input
          type="range"
          min="0"
          max="25"
          step="0.5"
          value={discount}
          onChange={(e) => setDiscount(Number(e.target.value))}
          className="mt-2 w-full accent-teal-600"
        />
        <span className="chip mt-2 bg-brand-100 text-brand-700" dir="ltr">{discount}%</span>
      </div>

      <div className="mx-5 mb-5 space-y-3 rounded-xl p-4 ring-2 ring-brand-500 bg-brand-50 text-sm text-brand-800">
        <p className="text-base font-bold" dir="ltr">أ: {Math.round(totalA).toLocaleString('en-US')} ريال | ب: {Math.round(totalB).toLocaleString('en-US')} ريال</p>
        <p className="mt-1">
          تكلفة دورة الحياة الأقل = الأوفر على المدى الطويل. الخيار الأوفر حالياً: <strong>الخيار {cheaper}</strong> بفرق {Math.round(savings).toLocaleString('en-US')} ريال.
        </p>
        <p className="text-xs opacity-80">يحسّب التكلفة الإجمالية المخصومة: اكتساب + (تشغيل + صيانة) عبر العمر − قيمة النهاية المخصومة. لا يغني عن دراسة الجودة والمخاطر.</p>
      </div>
    </div>
  );
}