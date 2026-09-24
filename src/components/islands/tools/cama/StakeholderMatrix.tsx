import { useState } from 'react';

type Stakeholder = {
  id: string;
  name: string;
  power: number;
  interest: number;
  role: string;
  engagement: string;
};

const initialStakeholders: Stakeholder[] = [
  { id: 's1', name: 'المدير التنفيذي', power: 95, interest: 80, role: 'قرار نهائي + ميزانية', engagement: 'إشراك مباشر في القرارات الكبرى' },
  { id: 's2', name: 'مدير الصيانة', power: 75, interest: 95, role: 'قيادة التنفيذ اليومي', engagement: 'تقرير أسبوعي + مشاركة في التخطيط' },
  { id: 's3', name: 'مدير التشغيل', power: 70, interest: 85, role: 'تحديد احتياجات الإنتاج', engagement: 'تنسيق مع الجدول الأسبوعي' },
  { id: 's4', name: 'مدير المالية', power: 80, interest: 40, role: 'اعتماد الميزانيات', engagement: 'تقرير ربع سنوي للنتائج المالية' },
  { id: 's5', name: 'مشرفو الخطوط', power: 30, interest: 75, role: 'المراقبة اليومية', engagement: 'إبلاغ بالعطل والتزاحم' },
  { id: 's6', name: 'الفنيون والحرفيون', power: 20, interest: 85, role: 'التنفيذ الميداني', engagement: 'تدريب + تغذية راجعة' },
  { id: 's7', name: 'الموردون الرئيسيون', power: 50, interest: 60, role: 'توريد القطع والخدمات', engagement: 'اتفاقيات شراكة طويلة' },
  { id: 's8', name: 'الجهات الرقابية', power: 85, interest: 30, role: 'الامتثال للأنظمة', engagement: 'تقارير دورية + مراجعة' },
];

function quadrant(power: number, interest: number): { label: string; color: string; action: string } {
  if (power >= 60 && interest >= 60) return { label: 'أدرهم بإشراف كثيف', color: 'bg-emerald-50 border-emerald-400 text-emerald-800', action: 'إشراك مباشر ومستمر في القرارات' };
  if (power >= 60 && interest < 60) return { label: 'أرضهم بإرضاء', color: 'bg-sky-50 border-sky-400 text-sky-800', action: 'إطلاع على النتائج الرئيسية فقط' };
  if (power < 60 && interest >= 60) return { label: 'أبلغهم بالمستجدات', color: 'bg-amber-50 border-amber-400 text-amber-800', action: 'تواصل منتظم ومعلومات واضحة' };
  return { label: 'راقبهم فقط', color: 'bg-slate-50 border-slate-300 text-slate-700', action: 'مراقبة أي تغيير في الوضع' };
}

export default function StakeholderMatrix() {
  const [stakeholders, setStakeholders] = useState<Stakeholder[]>(initialStakeholders);
  const [selected, setSelected] = useState<string | null>(null);

  function updateField(id: string, field: 'power' | 'interest', value: number) {
    setStakeholders((prev) => prev.map((s) => (s.id === id ? { ...s, [field]: value } : s)));
  }

  const selectedStakeholder = stakeholders.find((s) => s.id === selected);
  const q = selectedStakeholder ? quadrant(selectedStakeholder.power, selectedStakeholder.interest) : null;

  const quadrants = [
    { key: 'high-high', label: 'أدرهم بإشراف كثيف', color: 'bg-emerald-50 border-emerald-200', pos: 'top-0 right-0' },
    { key: 'high-low', label: 'أرضهم بإرضاء', color: 'bg-sky-50 border-sky-200', pos: 'bottom-0 right-0' },
    { key: 'low-high', label: 'أبلغهم بالمستجدات', color: 'bg-amber-50 border-amber-200', pos: 'top-0 left-0' },
    { key: 'low-low', label: 'راقبهم فقط', color: 'bg-slate-50 border-slate-200', pos: 'bottom-0 left-0' },
  ];

  return (
    <div className="card mt-6 overflow-hidden">
      <div className="border-b border-slate-200 bg-brand-50 px-5 py-3 text-sm font-semibold text-brand-800">
        🎯 مصفوفة أصحاب المصلحة — اسحب النقاط لتحليل القوة والمصلحة
      </div>

      <div className="space-y-4 p-5">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          <div>
            <div className="relative mb-2 aspect-square w-full overflow-hidden rounded-xl border border-slate-300 bg-white">
              {quadrants.map((q) => (
                <div key={q.key} className={`absolute ${q.pos} flex h-1/2 w-1/2 items-center justify-center border ${q.color}`}>
                  <span className="text-[10px] font-bold opacity-60">{q.label}</span>
                </div>
              ))}
              {stakeholders.map((s) => {
                const x = (s.interest / 100) * 100;
                const y = (1 - s.power / 100) * 100;
                return (
                  <button
                    key={s.id}
                    type="button"
                    onClick={() => setSelected(selected === s.id ? null : s.id)}
                    className={`absolute z-10 flex h-7 w-7 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 text-[9px] font-bold transition hover:scale-125 ${
                      selected === s.id
                        ? 'border-brand-600 bg-brand-600 text-white shadow-lg'
                        : 'border-white bg-ink-700 text-white shadow'
                    }`}
                    style={{ left: `${x}%`, top: `${y}%` }}
                    title={s.name}
                  >
                    {s.name.charAt(0)}
                  </button>
                );
              })}
              <div className="absolute bottom-1 left-1/2 -translate-x-1/2 text-[10px] font-bold text-ink-500">
                المصلحة ←
              </div>
              <div className="absolute left-1 top-1/2 -translate-y-1/2 -rotate-90 text-[10px] font-bold text-ink-500">
                القوة ←
              </div>
            </div>
            <p className="text-[11px] text-ink-500">انقر أي نقطة لعرض التفاصيل والتوصية المناسبة</p>
          </div>

          <div className="space-y-3">
            {selectedStakeholder && q && (
              <div className={`rounded-xl border-2 p-4 ${q.color}`}>
                <p className="text-sm font-bold">{selectedStakeholder.name}</p>
                <p className="mt-1 text-xs">الفئة: {q.label}</p>
                <p className="text-xs">التوصية: {q.action}</p>
                <p className="mt-2 text-xs"><strong>الدور:</strong> {selectedStakeholder.role}</p>
              </div>
            )}

            {stakeholders.map((s) => {
              const sq = quadrant(s.power, s.interest);
              return (
                <div
                  key={s.id}
                  className={`cursor-pointer rounded-lg border p-3 transition ${
                    selected === s.id ? 'ring-2 ring-brand-400' : ''
                  }`}
                  onClick={() => setSelected(selected === s.id ? null : s.id)}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold text-ink-800">{s.name}</span>
                    <span className={`rounded px-2 py-0.5 text-[10px] font-bold ${sq.color}`}>
                      {sq.label}
                    </span>
                  </div>
                  <div className="mt-2 space-y-1.5">
                    <div className="flex items-center gap-2">
                      <span className="w-8 text-[10px] text-ink-500">القوة</span>
                      <input
                        type="range"
                        min={0}
                        max={100}
                        value={s.power}
                        onChange={(e) => updateField(s.id, 'power', Number(e.target.value))}
                        onClick={(e) => e.stopPropagation()}
                        className="h-1.5 flex-1 accent-rose-500"
                      />
                      <span className="w-8 text-right text-[10px] font-bold text-ink-600">{s.power}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-8 text-[10px] text-ink-500">المصلحة</span>
                      <input
                        type="range"
                        min={0}
                        max={100}
                        value={s.interest}
                        onChange={(e) => updateField(s.id, 'interest', Number(e.target.value))}
                        onClick={(e) => e.stopPropagation()}
                        className="h-1.5 flex-1 accent-sky-500"
                      />
                      <span className="w-8 text-right text-[10px] font-bold text-ink-600">{s.interest}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="rounded-xl bg-brand-50 p-4 text-xs leading-relaxed text-ink-600">
          <strong>القاعدة الذهبية:</strong> لا تعامل جميع أصحاب المصلحة بالطريقة ذاتها. القوة والمصلحة هما بُعدا التحليل الأساسيان، والتواصل الفعّال يعني إرسال الرسالة الصحيحة للشخص المناسب في التوقيت الصحيح.
        </div>
      </div>
    </div>
  );
}
