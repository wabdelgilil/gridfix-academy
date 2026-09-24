import { useState } from 'react';

const skills = [
  { id: 'alignment', name: 'المحاذاة بالليزر', target: 3 },
  { id: 'vibration', name: 'تحليل الاهتزازات', target: 3 },
  { id: 'hydraulics', name: 'الهيدروليكا والصمامات', target: 3 },
  { id: 'balancing', name: 'الاتزان الديناميكي', target: 3 },
  { id: 'loto', name: 'عزل الطاقة (LOTO)', target: 4 },
];

const initial: Record<string, { current: number; required: number }> = {
  alignment: { current: 2, required: 3 },
  vibration: { current: 1, required: 3 },
  hydraulics: { current: 3, required: 3 },
  balancing: { current: 2, required: 3 },
  loto: { current: 3, required: 4 },
};

function priority(gap: number) {
  if (gap <= 0) return { label: 'مكتملة — لا تدريب مطلوب', cls: 'bg-teal-100 text-teal-800' };
  if (gap === 1) return { label: 'أولوية متوسطة — تدريب على رأس العمل', cls: 'bg-amber-100 text-amber-800' };
  return { label: 'أولوية حرجة — برنامج تدريبي عاجل', cls: 'bg-rose-100 text-rose-800' };
}

export default function SkillsGapAnalyzer() {
  const [levels, setLevels] = useState(initial);
  const [kirkpatrick, setKirkpatrick] = useState(3);

  function set(side: 'current' | 'required', id: string, value: number) {
    setLevels((prev) => ({
      ...prev,
      [id]: { ...prev[id], [side]: Math.max(1, Math.min(4, value)) },
    }));
  }

  const gaps = skills.map((s) => ({
    ...s,
    current: levels[s.id].current,
    required: levels[s.id].required,
    gap: Math.max(0, levels[s.id].required - levels[s.id].current),
  }));
  const critical = gaps.filter((g) => g.gap >= 2).length;
  const done = gaps.filter((g) => g.gap === 0).length;

  const kirkpatrickLevels = [
    { n: 1, name: 'رد الفعل', desc: 'استبيان رضا المتدربين عن القاعة والمدرب — مؤشر شكلي لا يضمن أي مهارة.' },
    { n: 2, name: 'التعلم', desc: 'اختبار المعرفة بعد الدورة مباشرة لقياس استيعاب المفاهيم.' },
    { n: 3, name: 'السلوك', desc: 'التطبيق الميداني الفعلي: هل يستخدم الفني الجهاز على المعدة وفق الإجراءات؟' },
    { n: 4, name: 'النتائج', desc: 'الأثر التشغيلي: انخفاض الأعطال وتراجع زمن الإصلاح والعائد المالي.' },
  ];

  return (
    <div className="card mt-6 overflow-hidden">
      <div className="border-b border-slate-200 bg-brand-50 px-5 py-3 text-sm font-semibold text-brand-800">
        🎯 محلل الفجوة المهارية — المستوى الحالي مقابل المطلوب
      </div>
      <div className="space-y-5 p-5">
        <div className="space-y-4">
          {gaps.map((g) => {
            const p = priority(g.gap);
            return (
              <div key={g.id} className="rounded-xl border border-slate-200 p-4">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <p className="text-sm font-bold text-ink-800">
                    {g.name} <span className="text-xs font-normal text-ink-500">(المطلوب: مستوى {g.required})</span>
                  </p>
                  <span className={`rounded-full px-3 py-1 text-xs font-bold ${p.cls}`}>
                    {g.gap === 0 ? p.label : `فجوة ${g.gap} — ${p.label}`}
                  </span>
                </div>
                <div className="mt-3 grid gap-3 sm:grid-cols-2">
                  <div>
                    <label className="mb-1 block text-xs font-semibold text-ink-700">
                      المستوى الحالي: {g.current} من 4
                    </label>
                    <input
                      type="range"
                      min={1}
                      max={4}
                      step={1}
                      value={g.current}
                      onChange={(e) => set('current', g.id, Number(e.target.value))}
                      className="w-full accent-teal-600"
                    />
                    <div className="flex justify-between text-[11px] text-ink-500">
                      <span>1 مبتدئ</span>
                      <span>2 إشراف</span>
                      <span>3 متمكن</span>
                      <span>4 خبير</span>
                    </div>
                  </div>
                  <div>
                    <label className="mb-1 block text-xs font-semibold text-ink-700">
                      المستوى المطلوب: {g.required} من 4
                    </label>
                    <input
                      type="range"
                      min={1}
                      max={4}
                      step={1}
                      value={g.required}
                      onChange={(e) => set('required', g.id, Number(e.target.value))}
                      className="w-full accent-indigo-600"
                    />
                    <div className="flex justify-between text-[11px] text-ink-500">
                      <span>1</span>
                      <span>2</span>
                      <span>3</span>
                      <span>4</span>
                    </div>
                  </div>
                </div>
                <div dir="ltr" className="mt-2 h-2.5 overflow-hidden rounded-full bg-slate-100">
                  <div
                    className={`h-full rounded-full transition-all ${g.gap === 0 ? 'bg-teal-500' : g.gap === 1 ? 'bg-amber-500' : 'bg-rose-500'}`}
                    style={{ width: `${(g.current / 4) * 100}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>
        <div className="rounded-xl bg-slate-50 p-4 text-sm font-bold text-ink-800">
          المهارات المكتملة: <strong dir="ltr">{done} / {gaps.length}</strong>
          <span className="mx-2 text-slate-300">|</span>
          الفجوات الحرجة: <strong dir="ltr">{critical}</strong>
          <p className="mt-1 text-xs font-normal text-ink-500">
            ابدأ بالفجوات الحرجة (فجوة 2 فأكثر) ببرنامج تدريب على رأس العمل بإشراف خبير، وامنع تكليف من هم دون المستوى الثالث بالأعمال الحرجة.
          </p>
        </div>
        <div className="rounded-xl border border-slate-200 p-4">
          <p className="mb-2 text-sm font-bold text-ink-800">مستويات كيركباتريك لتقييم التدريب — المستوى الحالي: {kirkpatrick} من 4</p>
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
            {kirkpatrickLevels.map((k) => (
              <button
                key={k.n}
                type="button"
                onClick={() => setKirkpatrick(k.n)}
                className={`cursor-pointer rounded-lg border px-3 py-2 text-xs font-bold transition ${
                  kirkpatrick === k.n
                    ? 'border-ink-900 bg-ink-900 text-white'
                    : 'border-slate-300 bg-white text-ink-700 hover:bg-slate-50'
                }`}
              >
                {k.n} — {k.name}
              </button>
            ))}
          </div>
          <p className="mt-2 rounded-lg bg-brand-50 p-3 text-xs leading-relaxed text-ink-600">
            {kirkpatrickLevels[kirkpatrick - 1].desc}
            {kirkpatrick >= 3
              ? ' هذا هو النطاق الذي يحقق عائداً حقيقياً على الاستثمار التدريبي.'
              : ' تحذير: الاكتفاء بهذا المستوى لا يضمن أي تحسن في الموثوقية.'}
          </p>
        </div>
      </div>
    </div>
  );
}
