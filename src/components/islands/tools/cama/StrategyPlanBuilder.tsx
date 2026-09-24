import { useState } from 'react';

const POLICY_ELEMENTS = [
  { id: 'purpose', label: 'الغرض', placeholder: 'لماذا نمارس إدارة الأصول؟' },
  { id: 'scope', label: 'النطاق', placeholder: 'على من تنطبق السياسة؟' },
  { id: 'roles', label: 'الأدوار والمسؤوليات', placeholder: 'من المسؤول عن ماذا؟' },
  { id: 'commitments', label: 'الالتزامات', placeholder: 'ما الذي تلتزم به المنظمة؟' },
];

const OBJECTIVE_LEVELS = [
  { id: 'strategic', label: 'استراتيجي (5+ سنوات)', color: 'bg-brand-100 text-brand-800' },
  { id: 'tactical', label: 'تكتيمي (1-3 سنوات)', color: 'bg-teal-100 text-teal-800' },
  { id: 'operational', label: 'تشغيلي (شهري/ربع سنوي)', color: 'bg-amber-100 text-amber-800' },
];

const KPI_CATEGORIES = [
  {
    id: 'availability',
    label: 'التوفر والأداء',
    kpis: [
      { id: 'uptime', name: 'نسبة التوفر', target: 95, unit: '%' },
      { id: 'mtbf', name: 'MTBF', target: 500, unit: 'ساعة' },
      { id: 'mttr', name: 'MTTR', target: 4, unit: 'ساعة' },
    ],
  },
  {
    id: 'cost',
    label: 'التكاليف',
    kpis: [
      { id: 'cost_per_unit', name: 'تكلفة الصيانة/وحدة', target: 12, unit: 'ريال' },
      { id: 'budget_variance', name: 'الانحراف عن الميزانية', target: 5, unit: '%' },
      { id: 'maintenance_ratio', name: 'نسبة التكلفة/القيمة', target: 3, unit: '%' },
    ],
  },
  {
    id: 'safety',
    label: 'السلامة والبيئة',
    kpis: [
      { id: 'incidents', name: 'الحوادث', target: 0, unit: 'حادث/شهر' },
      { id: 'leaks', name: 'التسريبات البيئية', target: 0, unit: 'تسريب/شهر' },
      { id: 'compliance', name: 'نسبة الامتثال', target: 100, unit: '%' },
    ],
  },
];

const RESOURCES = [
  { id: 'technicians', label: 'الفنيين المطلوبين', unit: 'فني', min: 5, max: 50, default: 15 },
  { id: 'training', label: 'ساعات التدريب', unit: 'ساعة/فني/سنة', min: 20, max: 200, default: 80 },
  { id: 'opex', label: 'ميزانية الصيانة التشغيلية', unit: 'ألف ريال/سنة', min: 100, max: 5000, default: 1000 },
  { id: 'capex', label: 'ميزانية الاستثمار', unit: 'ألف ريال/سنة', min: 200, max: 10000, default: 2000 },
];

type PolicyValues = Record<string, string>;
type ObjectiveValues = Record<string, string>;
type KPIValues = Record<string, number>;
type ResourceValues = Record<string, number>;

export default function StrategyPlanBuilder() {
  const [policy, setPolicy] = useState<PolicyValues>({});
  const [objectives, setObjectives] = useState<ObjectiveValues>({});
  const [kpiTargets, setKpiTargets] = useState<KPIValues>(
    Object.fromEntries(
      KPI_CATEGORIES.flatMap((cat) => cat.kpis.map((kpi) => [kpi.id, kpi.target]))
    )
  );
  const [resources, setResources] = useState<ResourceValues>(
    Object.fromEntries(RESOURCES.map((r) => [r.id, r.default]))
  );

  const policyCompleteness = POLICY_ELEMENTS.filter((el) => policy[el.id]?.trim()).length;
  const objectiveCompleteness = OBJECTIVE_LEVELS.filter((lv) => objectives[lv.id]?.trim()).length;
  const totalKPIs = KPI_CATEGORIES.reduce((sum, cat) => sum + cat.kpis.length, 0);

  const planScore = Math.round(
    ((policyCompleteness / POLICY_ELEMENTS.length) * 30 +
      (objectiveCompleteness / OBJECTIVE_LEVELS.length) * 30 +
      (totalKPIs > 0 ? 40 : 0)) 
  );

  const getScoreLabel = () => {
    if (planScore >= 80) return { text: 'خطة متكاملة', color: 'text-teal-700 bg-teal-100' };
    if (planScore >= 50) return { text: 'خطة متوسطة', color: 'text-amber-700 bg-amber-100' };
    return { text: 'خطة ناقصة', color: 'text-rose-700 bg-rose-100' };
  };

  return (
    <div className="card mt-6 overflow-hidden">
      <div className="border-b border-slate-200 bg-brand-50 px-5 py-3 text-sm font-semibold text-brand-800">
        📋 باني الخطة الاستراتيجية — ابنِ خطتك من السياسة إلى KPIs
      </div>

      <div className="space-y-5 p-5">
        {/* Policy Section */}
        <div>
          <p className="mb-2 text-sm font-bold text-ink-800">1. سياسة إدارة الأصول</p>
          <div className="space-y-2">
            {POLICY_ELEMENTS.map((el) => (
              <div key={el.id}>
                <label className="mb-1 block text-[11px] font-semibold text-ink-600">{el.label}</label>
                <input
                  type="text"
                  value={policy[el.id] ?? ''}
                  onChange={(e) => setPolicy((prev) => ({ ...prev, [el.id]: e.target.value }))}
                  placeholder={el.placeholder}
                  className="w-full rounded-lg border border-slate-200 px-3 py-2 text-xs text-ink-800 placeholder:text-ink-400 focus:border-brand-400 focus:outline-none focus:ring-1 focus:ring-brand-300"
                />
              </div>
            ))}
          </div>
          <div className="mt-2 flex items-center gap-2">
            <div className="h-2 flex-1 overflow-hidden rounded-full bg-slate-200">
              <div
                className="h-full rounded-full bg-brand-500 transition-all"
                style={{ width: `${(policyCompleteness / POLICY_ELEMENTS.length) * 100}%` }}
              />
            </div>
            <span className="text-[10px] font-bold text-ink-500">
              {policyCompleteness}/{POLICY_ELEMENTS.length}
            </span>
          </div>
        </div>

        {/* Objectives Section */}
        <div>
          <p className="mb-2 text-sm font-bold text-ink-800">2. الأهداف</p>
          <div className="space-y-2">
            {OBJECTIVE_LEVELS.map((level) => (
              <div key={level.id}>
                <label className="mb-1 flex items-center gap-2">
                  <span className={`rounded px-2 py-0.5 text-[10px] font-bold ${level.color}`}>
                    {level.label}
                  </span>
                </label>
                <input
                  type="text"
                  value={objectives[level.id] ?? ''}
                  onChange={(e) => setObjectives((prev) => ({ ...prev, [level.id]: e.target.value }))}
                  placeholder="اكتب الهدف بمعايير SMART..."
                  className="w-full rounded-lg border border-slate-200 px-3 py-2 text-xs text-ink-800 placeholder:text-ink-400 focus:border-brand-400 focus:outline-none focus:ring-1 focus:ring-brand-300"
                />
              </div>
            ))}
          </div>
        </div>

        {/* KPIs Section */}
        <div>
          <p className="mb-2 text-sm font-bold text-ink-800">3. مؤشرات الأداء (KPIs)</p>
          <div className="space-y-3">
            {KPI_CATEGORIES.map((cat) => (
              <div key={cat.id} className="rounded-xl border border-slate-200 p-3">
                <p className="mb-2 text-xs font-bold text-ink-700">{cat.label}</p>
                <div className="space-y-2">
                  {cat.kpis.map((kpi) => (
                    <div key={kpi.id} className="flex items-center gap-3">
                      <span className="min-w-[120px] text-[11px] text-ink-600">{kpi.name}</span>
                      <input
                        type="number"
                        value={kpiTargets[kpi.id] ?? kpi.target}
                        onChange={(e) =>
                          setKpiTargets((prev) => ({
                            ...prev,
                            [kpi.id]: Number(e.target.value),
                          }))
                        }
                        className="w-20 rounded-lg border border-slate-200 px-2 py-1 text-center text-[11px] text-ink-800 focus:border-brand-400 focus:outline-none"
                      />
                      <span className="text-[10px] text-ink-500">{kpi.unit}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Resources Section */}
        <div>
          <p className="mb-2 text-sm font-bold text-ink-800">4. تخطيط الموارد</p>
          <div className="grid gap-3 sm:grid-cols-2">
            {RESOURCES.map((res) => (
              <div key={res.id} className="rounded-xl border border-slate-200 p-3">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-semibold text-ink-700">{res.label}</span>
                  <span className="text-xs font-bold text-brand-700" dir="ltr">
                    {resources[res.id]} {res.unit}
                  </span>
                </div>
                <input
                  type="range"
                  min={res.min}
                  max={res.max}
                  value={resources[res.id]}
                  onChange={(e) =>
                    setResources((prev) => ({
                      ...prev,
                      [res.id]: Number(e.target.value),
                    }))
                  }
                  className="mt-2 w-full"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Plan Score */}
        <div className="rounded-xl bg-slate-50 p-4 space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-sm font-bold text-ink-800">تقييم اكتمال الخطة</span>
            <span className={`rounded-lg px-3 py-1 text-xs font-bold ${getScoreLabel().color}`}>
              {getScoreLabel().text}
            </span>
          </div>
          <div className="h-3 overflow-hidden rounded-full bg-slate-200">
            <div
              className={`h-full rounded-full transition-all ${
                planScore >= 80 ? 'bg-teal-500' : planScore >= 50 ? 'bg-amber-500' : 'bg-rose-500'
              }`}
              style={{ width: `${planScore}%` }}
            />
          </div>
          <div className="flex justify-between text-[10px] text-ink-500">
            <span>السياسة: {policyCompleteness}/{POLICY_ELEMENTS.length}</span>
            <span>الأهداف: {objectiveCompleteness}/{OBJECTIVE_LEVELS.length}</span>
            <span>KPIs: {totalKPIs} مؤشر</span>
          </div>
        </div>
      </div>
    </div>
  );
}
