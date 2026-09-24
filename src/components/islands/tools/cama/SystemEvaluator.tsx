import { useState } from 'react';

const SYSTEMS = [
  {
    id: 'cmms',
    name: 'CMMS',
    nameAr: 'نظام صيانة الأعمال المحوسب',
    focus: 'التنفيذ التشغيلي',
    best: 'متوسط الحجم، ركز على أوامر الشغل والجدولة',
    cost: 'منخفض إلى متوسط',
    integration: 'متوسط',
    scalability: 'متوسط',
    features: ['أوامر الشغل', 'الجدولة الوقائية', 'المخزون', 'التقارير الأساسية'],
  },
  {
    id: 'cafm',
    name: 'CAFM',
    nameAr: 'نظام إدارة المنشآت المحوسب',
    focus: 'إدارة المنشآت والمساحات',
    best: 'مجمعات مكتبية، مرافق معقدة، إدارة مساحات',
    cost: 'متوسط',
    integration: 'جيد',
    scalability: 'جيد',
    features: ['إدارة المساحات', 'المخططات المعمارية', 'خدمات FM', 'السلامة البيئية'],
  },
  {
    id: 'eam',
    name: 'EAM',
    nameAr: 'نظام إدارة الأصول المتكامل',
    focus: 'دورة حياة الأصول المؤسسية',
    best: 'مؤسسات كبيرة، أنظمة متعددة، تكامل مالي',
    cost: 'مرتفع',
    integration: 'ممتاز',
    scalability: 'ممتاز',
    features: ['التكامل مع ERP', 'التحليل المالي', 'إدارة العقود', 'LCC و ROI'],
  },
];

const CRITERIA = [
  { id: 'scalability', label: 'قابلية التوسع', weight: 20 },
  { id: 'ease', label: 'سهولة الاستخدام', weight: 20 },
  { id: 'integration', label: 'التكامل مع الأنظمة', weight: 20 },
  { id: 'reports', label: 'التقارير والتحليل', weight: 15 },
  { id: 'cost', label: 'التكلفة الإجمالية', weight: 15 },
  { id: 'support', label: 'الدعم والتوثيق', weight: 10 },
];

const SCORE_MAP: Record<string, Record<string, number>> = {
  cmms: { scalability: 60, ease: 80, integration: 50, reports: 60, cost: 85, support: 70 },
  cafm: { scalability: 70, ease: 70, integration: 70, reports: 75, cost: 65, support: 65 },
  eam: { scalability: 90, ease: 55, integration: 95, reports: 90, cost: 40, support: 60 },
};

function getWeightedScore(systemId: string, weights: Record<string, number>) {
  let total = 0;
  let totalWeight = 0;
  for (const c of CRITERIA) {
    const w = weights[c.id] ?? c.weight;
    total += (SCORE_MAP[systemId]?.[c.id] ?? 0) * w;
    totalWeight += w;
  }
  return totalWeight > 0 ? Math.round(total / totalWeight) : 0;
}

export default function SystemEvaluator() {
  const [weights, setWeights] = useState<Record<string, number>>(
    Object.fromEntries(CRITERIA.map((c) => [c.id, c.weight]))
  );

  const scores = SYSTEMS.map((sys) => ({
    ...sys,
    score: getWeightedScore(sys.id, weights),
  })).sort((a, b) => b.score - a.score);

  const top = scores[0];

  return (
    <div className="card mt-6 overflow-hidden">
      <div className="border-b border-slate-200 bg-brand-50 px-5 py-3 text-sm font-semibold text-brand-800">
        📊 مقيّم نظم المعلومات — CMMS / CAFM / EAM
      </div>

      <div className="space-y-5 p-5">
        {/* Criteria Weights */}
        <div>
          <p className="mb-2 text-sm font-bold text-ink-700">weighted المعايير حسب أهميتها (المجموع = 100%):</p>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {CRITERIA.map((c) => (
              <div key={c.id} className="flex items-center gap-2">
                <label className="w-28 text-xs font-semibold text-ink-600">{c.label}:</label>
                <input
                  type="range"
                  min={0}
                  max={50}
                  value={weights[c.id]}
                  onChange={(e) => setWeights((prev) => ({ ...prev, [c.id]: Number(e.target.value) }))}
                  className="flex-1 cursor-pointer"
                  aria-label={`وزن ${c.label}`}
                />
                <span className="w-8 text-center text-[11px] font-bold text-ink-700">{weights[c.id]}</span>
              </div>
            ))}
          </div>
        </div>

        {/* System Scores */}
        <div className="grid gap-4 sm:grid-cols-3">
          {scores.map((sys, i) => (
            <div
              key={sys.id}
              className={`rounded-xl border-2 p-4 transition ${
                i === 0
                  ? 'border-teal-500 bg-teal-50'
                  : 'border-slate-200 bg-white'
              }`}
            >
              <div className="mb-2 flex items-center justify-between">
                <p className="text-sm font-bold text-ink-800">{sys.name}</p>
                {i === 0 && (
                  <span className="rounded-full bg-teal-500 px-2 py-0.5 text-[10px] font-bold text-white">
                    الأفضل
                  </span>
                )}
              </div>
              <p className="mb-1 text-[11px] text-ink-500">{sys.nameAr}</p>
              <p className="mb-2 text-[11px] font-semibold text-brand-700">التركيز: {sys.focus}</p>
              <div className="mb-3 flex items-center gap-2">
                <div className="h-2 flex-1 overflow-hidden rounded-full bg-slate-200">
                  <div
                    className={`h-full rounded-full transition-all ${
                      i === 0 ? 'bg-teal-500' : 'bg-slate-400'
                    }`}
                    style={{ width: `${sys.score}%` }}
                  />
                </div>
                <span className="text-sm font-bold text-ink-800">{sys.score}%</span>
              </div>
              <p className="mb-1 text-[10px] font-semibold text-ink-500">أفضل استخدام لـ: {sys.best}</p>
              <p className="mb-1 text-[10px] text-ink-500">التكلفة: {sys.cost}</p>
              <ul className="mt-2 space-y-0.5">
                {sys.features.map((f) => (
                  <li key={f} className="text-[10px] text-ink-500">• {f}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Recommendation */}
        <div className="rounded-xl bg-slate-50 px-4 py-3">
          <p className="text-xs text-ink-500">
            بناءً على أولوياتك: <strong>{top.name}</strong> ({top.nameAr}) هو الأنسب — درجة التوافق <strong>{top.score}%</strong>.{' '}
            {top.id === 'cmms' && 'مناسب للتركيز على التنفيذ التشغيلي مع تكلفة محدودة.'}
            {top.id === 'cafm' && 'مناسب لإدارة المنشآت والمساحات مع تكامل جيد.'}
            {top.id === 'eam' && 'مناسب للمؤسسات الكبيرة التي تحتاج تكاملاً مؤسسياً شاملاً.'}
          </p>
        </div>
      </div>
    </div>
  );
}
