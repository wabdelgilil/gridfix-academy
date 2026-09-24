import { useState } from 'react';

type Quadrant = 'strengths' | 'weaknesses' | 'opportunities' | 'threats';

const quadrants: { id: Quadrant; label: string; tone: string }[] = [
  { id: 'strengths', label: 'نقاط القوة الداخلية', tone: 'border-teal-300 bg-teal-50' },
  { id: 'weaknesses', label: 'نقاط الضعف الداخلية', tone: 'border-rose-300 bg-rose-50' },
  { id: 'opportunities', label: 'الفرص الخارجية', tone: 'border-emerald-300 bg-emerald-50' },
  { id: 'threats', label: 'التهديدات الخارجية', tone: 'border-orange-300 bg-orange-50' },
];

export default function StrategyBoard() {
  const [values, setValues] = useState<Record<Quadrant, string>>({
    strengths: '',
    weaknesses: '',
    opportunities: '',
    threats: '',
  });
  const [goal, setGoal] = useState('');
  const [horizon, setHorizon] = useState('');
  const [kpi, setKpi] = useState('');

  const set = (id: Quadrant, v: string) => setValues((prev) => ({ ...prev, [id]: v }));

  const countItems = (s: string) => s.split('\n').filter((l) => l.trim()).length;
  const filled = Object.values(values).filter((v) => v.trim().length > 0).length;
  const ready = filled === 4 && goal.trim() && horizon.trim() && kpi.trim();

  return (
    <div className="card mt-6 overflow-hidden">
      <div className="border-b border-slate-200 bg-brand-50 px-5 py-3 text-sm font-semibold text-brand-800">
        🧭 لوحة التخطيط الاستراتيجي — من سوات إلى بيان استراتيجي
      </div>

      <div className="space-y-4 p-5">
        <div className="grid gap-3 sm:grid-cols-2">
          {quadrants.map((q) => (
            <label key={q.id} className={`rounded-xl border p-3 ${q.tone}`}>
              <span className="text-sm font-bold text-ink-900">{q.label}</span>
              <textarea
                value={values[q.id]}
                onChange={(e) => set(q.id, e.target.value)}
                rows={3}
                placeholder="أضف بنوداً، كل سطر بند"
                className="mt-2 w-full resize-y rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-ink-800"
              />
              <span className="text-[11px] font-semibold text-ink-500">{countItems(values[q.id])} بند</span>
            </label>
          ))}
        </div>

        <div className="grid gap-3 sm:grid-cols-3">
          <label className="text-sm font-semibold text-ink-700">
            الهدف الاستراتيجي
            <input
              value={goal}
              onChange={(e) => setGoal(e.target.value)}
              placeholder="مثال: خفض تكلفة الطاقة 15%"
              className="mt-1.5 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-ink-800"
            />
          </label>
          <label className="text-sm font-semibold text-ink-700">
            الأفق الزمني
            <input
              value={horizon}
              onChange={(e) => setHorizon(e.target.value)}
              placeholder="مثال: 3 سنوات"
              className="mt-1.5 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-ink-800"
            />
          </label>
          <label className="text-sm font-semibold text-ink-700">
            مؤشر النجاح (KPI)
            <input
              value={kpi}
              onChange={(e) => setKpi(e.target.value)}
              dir="ltr"
              placeholder="مثال: EUI kWh/m²/سنة"
              className="mt-1.5 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-ink-800"
            />
          </label>
        </div>

        {ready ? (
          <div className="rounded-xl bg-ink-900 p-4 text-sm leading-relaxed text-white">
            <p className="font-bold text-teal-300">بيانك الاستراتيجي:</p>
            <p className="mt-1">
              تحقيقاً لهدف «{goal}» خلال {horizon}، نبنيه على قوتنا في {values.strengths.split('\n')[0] || 'التشغيل'}، ونعالج
              ضعفنا المتعلق بـ {values.weaknesses.split('\n')[0] || 'الموارد'}، ونستثمر فرصة {values.opportunities.split('\n')[0] || 'التحسين'}،
              مع التصدي لتهديد {values.threats.split('\n')[0] || 'الجهود'}. ويتحقق القياس بالمؤشر «{kpi}».
            </p>
            <p className="mt-2 text-xs text-teal-100">
              هذه مسودة قابلة للصقل → راجع مع الإدارة العليا، وخصص في الخطة خطوة ربط ذات معيار وموارد ومسؤول (RACI).
            </p>
          </div>
        ) : (
          <p className="rounded-xl bg-slate-100 p-3 text-center text-sm text-ink-400">
            أكمل الأربعة مربعات والهدف والأفق والمؤشر لترى بياناً استراتيجياً أولياً للتطوير.
          </p>
        )}
      </div>
    </div>
  );
}