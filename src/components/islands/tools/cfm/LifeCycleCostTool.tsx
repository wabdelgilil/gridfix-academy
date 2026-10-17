import { useState } from 'react';
import { calculateLCC, type LCCOption } from '../../../../lib/formulas';

const HORIZON = 12;

export default function LifeCycleCostTool() {
  const [discount, setDiscount] = useState(8);
  const [a, setA] = useState<LCCOption>({ initial: 250000, annual: 12000, life: 6, escalate: 4 });
  const [b, setB] = useState<LCCOption>({ initial: 180000, annual: 22000, life: 4, escalate: 5 });

  const setOpt = (group: 'a' | 'b', key: keyof LCCOption, value: number) => {
    const target = group === 'a' ? a : b;
    const setter = group === 'a' ? setA : setB;
    setter({ ...target, [key]: value });
  };

  const costA = calculateLCC(a, discount, HORIZON);
  const costB = calculateLCC(b, discount, HORIZON);
  const better = costA <= costB ? 'الخيار الأول' : 'الخيار الثاني';

  const renderInputs = (label: string, opt: LCCOption, group: 'a' | 'b') => (
    <div className="rounded-xl border border-slate-200 p-4 dark:border-slate-700/80 dark:bg-slate-800/40">
      <p className="mb-3 text-sm font-bold text-ink-900 dark:text-slate-100">{label}</p>
      <div className="grid grid-cols-2 gap-3 text-sm">
        <label>
          <span className="text-xs text-ink-500 dark:text-slate-400">الاستثمار الأولي</span>
          <input
            type="number"
            value={opt.initial}
            onChange={(e) => setOpt(group, 'initial', Number(e.target.value))}
            className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-2.5 py-1.5 outline-none focus:border-brand-500 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
          />
        </label>
        <label>
          <span className="text-xs text-ink-500 dark:text-slate-400">تكلفة تشغيل سنوية</span>
          <input
            type="number"
            value={opt.annual}
            onChange={(e) => setOpt(group, 'annual', Number(e.target.value))}
            className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-2.5 py-1.5 outline-none focus:border-brand-500 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
          />
        </label>
        <label>
          <span className="text-xs text-ink-500 dark:text-slate-400">عمر الأصل (سنوات)</span>
          <input
            type="number"
            value={opt.life}
            onChange={(e) => setOpt(group, 'life', Number(e.target.value))}
            className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-2.5 py-1.5 outline-none focus:border-brand-500 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
          />
        </label>
        <label>
          <span className="text-xs text-ink-500 dark:text-slate-400">تصعيد تشغيلي %</span>
          <input
            type="number"
            value={opt.escalate}
            onChange={(e) => setOpt(group, 'escalate', Number(e.target.value))}
            className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-2.5 py-1.5 outline-none focus:border-brand-500 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
          />
        </label>
      </div>
    </div>
  );

  return (
    <div className="card mt-6 overflow-hidden dark:border-slate-700/80 dark:bg-slate-850">
      <div className="border-b border-slate-200 bg-brand-50/80 px-5 py-3 text-sm font-semibold text-brand-900 dark:border-slate-700 dark:bg-brand-950/40 dark:text-brand-300">
        ♻️ حاسبة تكلفة دورة الحياة (LCC) — أفق {HORIZON} سنوات
      </div>

      <div className="grid gap-4 p-5 sm:grid-cols-2">
        {renderInputs('الخيار الأول (أ)', a, 'a')}
        {renderInputs('الخيار الثاني (ب)', b, 'b')}
      </div>

      <div className="px-5 pb-4">
        <label className="text-sm font-semibold text-ink-900 dark:text-slate-100">
          معدل الخصم % <span className="font-normal text-ink-400 dark:text-slate-400">(تكلفة رأس المال)</span>
        </label>
        <input
          type="range"
          min="0"
          max="20"
          step="0.5"
          value={discount}
          onChange={(e) => setDiscount(Number(e.target.value))}
          className="mt-2 w-full accent-teal-600"
        />
        <span className="chip mt-2 bg-brand-100 text-brand-700 dark:bg-brand-900/60 dark:text-brand-300" dir="ltr">{discount}%</span>
      </div>

      <div className="mx-5 mb-5 rounded-xl bg-brand-50/80 p-4 text-sm text-brand-900 ring-2 ring-brand-500 dark:bg-brand-950/50 dark:text-brand-200 dark:ring-brand-400">
        <p className="text-base font-bold" dir="ltr">أ: {Math.round(costA).toLocaleString('en-US')} | ب: {Math.round(costB).toLocaleString('en-US')}</p>
        <p className="mt-1 font-semibold">الأقل LCC إجمالياً: {better} — على أفق {HORIZON} سنة بشمل إعادة الشراء كل {a.life} سنة و{b.life} سنة.</p>
        <p className="mt-2 text-xs opacity-80">الاستثمار الأرخص أولاً قد يكون أغلى على 10 سنوات — لذلك نحسب على امتداد الأفق الكامل.</p>
      </div>
    </div>
  );
}