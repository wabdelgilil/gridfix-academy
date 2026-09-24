import { useState } from 'react';

const OPERATIONAL_DEMANDS = [
  { id: 'production', label: 'حجم الإنتاج المطلوب', unit: 'وحدة/يوم', min: 100, max: 1000, default: 500 },
  { id: 'availability', label: 'التوافر المطلوب', unit: '%', min: 80, max: 99, default: 92 },
  { id: 'shifts', label: 'عدد النوبات', unit: 'نوبات', min: 1, max: 3, default: 2 },
  { id: 'quality', label: 'معدل جودة المنتج', unit: '%', min: 90, max: 99.9, default: 97 },
];

const INVESTMENT_DEMANDS = [
  { id: 'replacement', label: 'استبدال الأصول المتقادمة', budget: 500000, urgency: 'متوسط' },
  { id: 'expansion', label: 'التوسع المستقبلي', budget: 2000000, urgency: 'منخفض' },
  { id: 'compliance', label: 'الامتثال للمعايير الجديدة', budget: 300000, urgency: 'عالي' },
  { id: 'upgrade', label: 'تحسين الكفاءة', budget: 800000, urgency: 'متوسط' },
];

const SCENARIOS = [
  {
    id: 'conservative',
    label: 'السيناريو المحافظ',
    growth: 0,
    color: 'bg-blue-100 text-blue-800 ring-blue-300',
    description: 'لا تغييرات كبيرة، الطلب يبقى عند المستوى الحالي أو ينخفض قليلاً.',
  },
  {
    id: 'base',
    label: 'السيناريو الأساسي',
    growth: 2,
    color: 'bg-teal-100 text-teal-800 ring-teal-300',
    description: 'نمو بمعدل 2% سنوياً وفق التوقعات المتوسطة.',
  },
  {
    id: 'ambitious',
    label: 'السيناريو الطموح',
    growth: 5,
    color: 'bg-amber-100 text-amber-800 ring-amber-300',
    description: 'توسع كبير أو تغير في السوق يرفع الطلب بشكل ملحوظ.',
  },
];

type DemandValues = Record<string, number>;
type InvestmentSelection = Record<string, boolean>;

export default function DemandAnalyzer() {
  const [operational, setOperational] = useState<DemandValues>(
    Object.fromEntries(OPERATIONAL_DEMANDS.map((d) => [d.id, d.default]))
  );
  const [investments, setInvestments] = useState<InvestmentSelection>({
    replacement: true,
    compliance: true,
  });
  const [selectedScenario, setSelectedScenario] = useState('base');
  const [years, setYears] = useState(5);

  const scenario = SCENARIOS.find((s) => s.id === selectedScenario) ?? SCENARIOS[1];
  const futureProduction = Math.round(operational.production * Math.pow(1 + scenario.growth / 100, years));
  const futureAvailability = Math.min(99, operational.availability + (scenario.id === 'ambitious' ? 2 : 0));

  const totalInvestmentBudget = INVESTMENT_DEMANDS
    .filter((d) => investments[d.id])
    .reduce((sum, d) => sum + d.budget, 0);

  const annualInvestment = Math.round(totalInvestmentBudget / years);

  const gapAnalysis = (() => {
    const currentCapacity = operational.production * (operational.availability / 100);
    const futureCapacity = futureProduction * (futureAvailability / 100);
    const gap = futureCapacity - currentCapacity;
    const gapPercent = ((gap / currentCapacity) * 100).toFixed(1);
    if (gap > 0) return { text: `فجوة نمو ${gapPercent}% — تحتاج أصولاً إضافية`, color: 'text-rose-700 bg-rose-50' };
    if (gap < 0) return { text: `سعة زائدة ${Math.abs(Number(gapPercent))}% — فرصة للتحسين`, color: 'text-teal-700 bg-teal-50' };
    return { text: 'السعة الحالية كافية', color: 'text-brand-700 bg-brand-50' };
  })();

  return (
    <div className="card mt-6 overflow-hidden">
      <div className="border-b border-slate-200 bg-brand-50 px-5 py-3 text-sm font-semibold text-brand-800">
        📊 محلل سيناريوهات الطلب — حلل الطلب وشاهد الفجوة
      </div>

      <div className="space-y-5 p-5">
        {/* Scenario Selection */}
        <div>
          <p className="mb-2 text-sm font-bold text-ink-800">اختر السيناريو:</p>
          <div className="grid grid-cols-3 gap-2">
            {SCENARIOS.map((s) => (
              <button
                key={s.id}
                type="button"
                onClick={() => setSelectedScenario(s.id)}
                className={`cursor-pointer rounded-xl border-2 px-3 py-2 text-center transition ${
                  selectedScenario === s.id
                    ? `border-current ring-2 ${s.color}`
                    : 'border-slate-200 bg-white hover:border-slate-300'
                }`}
              >
                <span className="block text-xs font-bold">{s.label}</span>
                <span className="block text-[10px] text-ink-500 mt-0.5">{s.description}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Time Horizon */}
        <div className="flex items-center gap-3">
          <span className="text-xs font-bold text-ink-700">الأفق الزمني:</span>
          <input
            type="range"
            min={1}
            max={10}
            value={years}
            onChange={(e) => setYears(Number(e.target.value))}
            className="flex-1"
          />
          <span className="rounded-lg bg-brand-100 px-2 py-0.5 text-xs font-bold text-brand-700" dir="ltr">
            {years} سنوات
          </span>
        </div>

        {/* Operational Demand */}
        <div>
          <p className="mb-2 text-sm font-bold text-ink-800">الطلب التشغيلي:</p>
          <div className="grid gap-3 sm:grid-cols-2">
            {OPERATIONAL_DEMANDS.map((demand) => (
              <div key={demand.id} className="rounded-xl border border-slate-200 p-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-ink-700">{demand.label}</span>
                  <span className="text-xs font-bold text-brand-700" dir="ltr">
                    {operational[demand.id]} {demand.unit}
                  </span>
                </div>
                <input
                  type="range"
                  min={demand.min}
                  max={demand.max}
                  step={demand.unit === '%' ? 0.1 : 1}
                  value={operational[demand.id]}
                  onChange={(e) =>
                    setOperational((prev) => ({
                      ...prev,
                      [demand.id]: Number(e.target.value),
                    }))
                  }
                  className="mt-2 w-full"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Investment Demand */}
        <div>
          <p className="mb-2 text-sm font-bold text-ink-800">الطلب الاستثماري:</p>
          <div className="space-y-2">
            {INVESTMENT_DEMANDS.map((inv) => (
              <div
                key={inv.id}
                className={`flex items-center justify-between rounded-xl border p-3 transition ${
                  investments[inv.id]
                    ? 'border-teal-300 bg-teal-50'
                    : 'border-slate-200 bg-white'
                }`}
              >
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() =>
                      setInvestments((prev) => ({
                        ...prev,
                        [inv.id]: !prev[inv.id],
                      }))
                    }
                    className={`cursor-pointer rounded-full px-2 py-0.5 text-[10px] font-bold transition ${
                      investments[inv.id]
                        ? 'bg-teal-200 text-teal-800'
                        : 'bg-slate-200 text-slate-600'
                    }`}
                  >
                    {investments[inv.id] ? 'مفعّل' : 'معطّل'}
                  </button>
                  <span className="text-xs font-semibold text-ink-800">{inv.label}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] text-ink-500" dir="ltr">
                    {inv.budget.toLocaleString()} ريال
                  </span>
                  <span className={`rounded px-1.5 py-0.5 text-[10px] font-bold ${
                    inv.urgency === 'عالي' ? 'bg-rose-100 text-rose-700' :
                    inv.urgency === 'متوسط' ? 'bg-amber-100 text-amber-700' :
                    'bg-slate-100 text-slate-600'
                  }`}>
                    {inv.urgency}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Results */}
        <div className="grid gap-3 sm:grid-cols-2">
          <div className="rounded-xl bg-slate-50 p-4 space-y-2">
            <p className="text-[10px] font-bold text-ink-500 uppercase">الإنتاج المطلوب بعد {years} سنوات</p>
            <p className="text-2xl font-black text-ink-900" dir="ltr">
              {futureProduction.toLocaleString()} <span className="text-sm">وحدة/يوم</span>
            </p>
            <p className="text-[10px] text-ink-500">
              نمو {(scenario.growth * years).toFixed(0)}% إجمالي | التوفر المطلوب {futureAvailability}%
            </p>
          </div>

          <div className="rounded-xl bg-slate-50 p-4 space-y-2">
            <p className="text-[10px] font-bold text-ink-500 uppercase">إجمالي الميزانية الاستثمارية</p>
            <p className="text-2xl font-black text-ink-900" dir="ltr">
              {totalInvestmentBudget.toLocaleString()} <span className="text-sm">ريال</span>
            </p>
            <p className="text-[10px] text-ink-500">
              {(INVESTMENT_DEMANDS.filter((d) => investments[d.id]).length)} مشاريع | متوسط {annualInvestment.toLocaleString()} ريال/سنة
            </p>
          </div>
        </div>

        <div className={`rounded-xl p-4 ${gapAnalysis.color}`}>
          <p className="text-sm font-bold">
            تحليل الفجوة: {gapAnalysis.text}
          </p>
        </div>
      </div>
    </div>
  );
}
