import { useState } from 'react';

const INTERNAL_FACTORS = [
  {
    id: 'structure',
    label: 'الهيكل التنظيمي',
    items: ['إدارة مركزة', 'لامركزية', 'هجين'],
  },
  {
    id: 'financial',
    label: 'الموارد المالية',
    items: ['ميزانية وفيرة', 'قيود مالية شديدة', 'ميزانية ديناميكية'],
  },
  {
    id: 'human',
    label: 'الكفاءات البشرية',
    items: ['فريق مؤهل', 'فجوة مهارية كبيرة', 'اعتماد على المقاولين'],
  },
  {
    id: 'systems',
    label: 'الأنظمة والمعلومات',
    items: ['CMMS متكامل', 'بيانات جزئية', 'غياب النظم'],
  },
  {
    id: 'culture',
    label: 'الثقافة التنظيمية',
    items: ['ثقافة صيانة استباقية', 'ثقافة إصلاح الأعطال', 'ثقافة متغيرة'],
  },
];

const EXTERNAL_FACTORS = [
  {
    id: 'regulations',
    label: 'التشريعات والمعايير',
    items: ['ISO 55000 مطبق', 'تشريعات محلية صارمة', 'عدم وضوح تشريعي'],
  },
  {
    id: 'market',
    label: 'السوق والمنافسة',
    items: ['منافسة شديدة', 'سوق مستقر', 'نمو سريع'],
  },
  {
    id: 'technology',
    label: 'التكنولوجيا',
    items: ['تقنيات حديثة متاحة', 'تقنيات محدودة', 'تحول تكنولوجي وشيك'],
  },
  {
    id: 'economic',
    label: 'الظروف الاقتصادية',
    items: ['استقرار اقتصادي', 'تقلبات أسعار', 'تراجع اقتصادي'],
  },
  {
    id: 'environmental',
    label: 'المخاطر البيئية',
    items: ['مخاطر مناخية منخفضة', 'مخاطر مرتفعة', 'تغييرات مناخية كبيرة'],
  },
];

const STAKEHOLDERS = [
  { id: 'upper', label: 'الإدارة العليا', interest: 'عالي', power: 'عالي', strategy: 'إشراك وتمكين' },
  { id: 'ops', label: 'التشغيل', interest: 'عالي', power: 'عالي', strategy: 'تعاون يومي' },
  { id: 'eng', label: 'الهندسة', interest: 'متوسط', power: 'متوسط', strategy: 'استشارة ودعم فني' },
  { id: 'fin', label: 'المالية', interest: 'متوسط', power: 'عالي', strategy: 'تقارير مالية واضحة' },
  { id: 'suppliers', label: 'الموردون', interest: 'منخفض', power: 'منخفض', strategy: 'شراكات استراتيجية' },
  { id: 'regulators', label: 'الجهات الرقابية', interest: 'عالي', power: 'عالي', strategy: 'امتثال كامل' },
];

type FactorSelection = Record<string, string>;
type StakeholderSelection = Record<string, boolean>;

export default function ContextBuilder() {
  const [internal, setInternal] = useState<FactorSelection>({});
  const [external, setExternal] = useState<FactorSelection>({});
  const [stakeholders, setStakeholders] = useState<StakeholderSelection>({
    upper: true,
    ops: true,
  });

  const internalScore = Object.keys(internal).length;
  const externalScore = Object.keys(external).length;
  const activeStakeholders = Object.entries(stakeholders).filter(([, v]) => v).length;

  const getStrengthLabel = (count: number, total: number) => {
    const ratio = count / total;
    if (ratio >= 0.7) return { text: 'قوي', color: 'text-teal-700 bg-teal-100' };
    if (ratio >= 0.4) return { text: 'متوسط', color: 'text-amber-700 bg-amber-100' };
    return { text: 'ضعيف', color: 'text-rose-700 bg-rose-100' };
  };

  const scopeRecommendation = (() => {
    const total = internalScore + externalScore;
    if (total >= 7) return 'نطاق واسع يشمل جميع الأصول مع نظام إدارة متكامل.';
    if (total >= 4) return 'نطاق متوسط يركز على الأصول الحرجة أولاً.';
    return 'نطاق ضيق يبدأ بال_assets الحرجة ويتوسع تدريجياً.';
  })();

  return (
    <div className="card mt-6 overflow-hidden">
      <div className="border-b border-slate-200 bg-brand-50 px-5 py-3 text-sm font-semibold text-brand-800">
        🗺️ باني السياق المؤسسي — حدد البيئة وأصحاب المصلحة
      </div>

      <div className="space-y-5 p-5">
        {/* Internal Context */}
        <div>
          <p className="mb-2 text-sm font-bold text-ink-800">السياق الداخلي</p>
          <div className="space-y-3">
            {INTERNAL_FACTORS.map((factor) => (
              <div key={factor.id} className="rounded-xl border border-slate-200 p-3">
                <p className="mb-2 text-xs font-bold text-ink-700">{factor.label}</p>
                <div className="flex flex-wrap gap-1.5">
                  {factor.items.map((item) => (
                    <button
                      key={item}
                      type="button"
                      onClick={() =>
                        setInternal((prev) => ({
                          ...prev,
                          [factor.id]: prev[factor.id] === item ? '' : item,
                        }))
                      }
                      className={`cursor-pointer rounded-lg border px-2.5 py-1 text-[11px] font-semibold transition ${
                        internal[factor.id] === item
                          ? 'border-brand-500 bg-brand-100 text-brand-800'
                          : 'border-slate-200 bg-white text-ink-600 hover:bg-slate-50'
                      }`}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* External Context */}
        <div>
          <p className="mb-2 text-sm font-bold text-ink-800">السياق الخارجي</p>
          <div className="space-y-3">
            {EXTERNAL_FACTORS.map((factor) => (
              <div key={factor.id} className="rounded-xl border border-slate-200 p-3">
                <p className="mb-2 text-xs font-bold text-ink-700">{factor.label}</p>
                <div className="flex flex-wrap gap-1.5">
                  {factor.items.map((item) => (
                    <button
                      key={item}
                      type="button"
                      onClick={() =>
                        setExternal((prev) => ({
                          ...prev,
                          [factor.id]: prev[factor.id] === item ? '' : item,
                        }))
                      }
                      className={`cursor-pointer rounded-lg border px-2.5 py-1 text-[11px] font-semibold transition ${
                        external[factor.id] === item
                          ? 'border-teal-500 bg-teal-100 text-teal-800'
                          : 'border-slate-200 bg-white text-ink-600 hover:bg-slate-50'
                      }`}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stakeholders */}
        <div>
          <p className="mb-2 text-sm font-bold text-ink-800">أصحاب المصلحة الرئيسيون</p>
          <div className="overflow-x-auto">
            <table className="w-full text-[11px]">
              <thead>
                <tr className="border-b border-slate-200">
                  <th className="px-2 py-1.5 text-right font-bold text-ink-700">صاحب المصلحة</th>
                  <th className="px-2 py-1.5 text-center font-bold text-ink-700">المصلحة</th>
                  <th className="px-2 py-1.5 text-center font-bold text-ink-700">السلطة</th>
                  <th className="px-2 py-1.5 text-center font-bold text-ink-700">استراتيجية التعامل</th>
                  <th className="px-2 py-1.5 text-center font-bold text-ink-700">تفعيل</th>
                </tr>
              </thead>
              <tbody>
                {STAKEHOLDERS.map((s) => (
                  <tr key={s.id} className="border-b border-slate-100">
                    <td className="px-2 py-1.5 font-semibold text-ink-800">{s.label}</td>
                    <td className="px-2 py-1.5 text-center">
                      <span className={`rounded px-1.5 py-0.5 text-[10px] font-bold ${
                        s.interest === 'عالي' ? 'bg-rose-100 text-rose-700' : 'bg-slate-100 text-slate-600'
                      }`}>
                        {s.interest}
                      </span>
                    </td>
                    <td className="px-2 py-1.5 text-center">
                      <span className={`rounded px-1.5 py-0.5 text-[10px] font-bold ${
                        s.power === 'عالي' ? 'bg-rose-100 text-rose-700' : 'bg-slate-100 text-slate-600'
                      }`}>
                        {s.power}
                      </span>
                    </td>
                    <td className="px-2 py-1.5 text-center text-ink-600">{s.strategy}</td>
                    <td className="px-2 py-1.5 text-center">
                      <button
                        type="button"
                        onClick={() =>
                          setStakeholders((prev) => ({
                            ...prev,
                            [s.id]: !prev[s.id],
                          }))
                        }
                        className={`cursor-pointer rounded-full px-2 py-0.5 text-[10px] font-bold transition ${
                          stakeholders[s.id]
                            ? 'bg-brand-100 text-brand-700 ring-1 ring-brand-300'
                            : 'bg-slate-100 text-slate-500'
                        }`}
                      >
                        {stakeholders[s.id] ? 'مفعّل' : 'معطّل'}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Summary */}
        <div className="rounded-xl bg-slate-50 p-4 space-y-2">
          <div className="flex flex-wrap gap-2">
            <span className={`rounded-lg px-3 py-1 text-xs font-bold ${getStrengthLabel(internalScore, 5).color}`}>
              السياق الداخلي: {getStrengthLabel(internalScore, 5).text} ({internalScore}/5)
            </span>
            <span className={`rounded-lg px-3 py-1 text-xs font-bold ${getStrengthLabel(externalScore, 5).color}`}>
              السياق الخارجي: {getStrengthLabel(externalScore, 5).text} ({externalScore}/5)
            </span>
            <span className="rounded-lg bg-brand-100 px-3 py-1 text-xs font-bold text-brand-700">
              أصحاب مصلحة مفعّلين: {activeStakeholders}
            </span>
          </div>
          <p className="text-xs text-ink-600">
            <strong>التوصية:</strong> {scopeRecommendation}
          </p>
        </div>
      </div>
    </div>
  );
}
