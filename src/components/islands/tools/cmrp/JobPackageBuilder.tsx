import { useState } from 'react';

const items = [
  {
    id: 'sop',
    title: 'إجراءات العمل القياسية خطوة بخطوة',
    en: 'SOPs',
    desc: 'خطوات فنية واضحة تشمل الخلوصات ومعايير القبول لمنع التباين بين الفنيين.',
  },
  {
    id: 'safety',
    title: 'خطة السلامة وتصاريح العمل',
    en: 'LOTO / PTW',
    desc: 'نقاط عزل الطاقة وتصاريح العمل الساخن والأماكن المغلقة قبل بدء التنفيذ.',
  },
  {
    id: 'kitting',
    title: 'تجميع وحجز قطع الغيار بالمستودع',
    en: 'Parts Kitting',
    desc: 'كل المحامل والحشوات محجوزة فعليا في صندوق المهمة فلا تصرف لعمل آخر.',
  },
  {
    id: 'tools',
    title: 'الأدوات الخاصة ومعدات الرفع',
    en: 'Special Tools',
    desc: 'المحاذاة بالليزر ومفاتيح العزم المعايرة والأوناش محجوزة قبل نزول الفريق.',
  },
  {
    id: 'labor',
    title: 'تقدير ساعات العمالة والتخصصات',
    en: 'Craft Hours',
    desc: 'عدد الفنيين وساعات كل تخصص محددة بدقة لتوازن الجدول الأسبوعي.',
  },
  {
    id: 'drawings',
    title: 'الرسومات والمخططات الهندسية',
    en: 'Drawings',
    desc: 'رسومات التجميع المقطعية ومخططات التوصيل وجداول عزوم الربط مرفقة.',
  },
];

export default function JobPackageBuilder() {
  const [checked, setChecked] = useState<Record<string, boolean>>({
    sop: true,
    safety: true,
    labor: true,
  });

  const done = items.filter((i) => checked[i.id]).length;
  const percent = Math.round((done / items.length) * 100);
  const ready = percent === 100;
  const kitted = !!checked['kitting'];

  return (
    <div className="card mt-6 overflow-hidden">
      <div className="border-b border-slate-200 bg-brand-50 px-5 py-3 text-sm font-semibold text-brand-800">
        📦 باني حزمة العمل — قائمة الاكتمال الستة
      </div>

      <div className="space-y-4 p-5">
        <div className={`rounded-xl p-4 text-sm ring-2 ${ready ? 'bg-teal-50 text-teal-800 ring-teal-500' : 'bg-amber-50 text-amber-800 ring-amber-500'}`}>
          <div className="flex items-center justify-between gap-2">
            <p className="font-bold">{ready ? 'جاهز للجدولة (RTS) — 100%' : `قيد التجهيز — ${percent}%`}</p>
            <p className="font-mono text-xs opacity-70" dir="ltr">
              {done} / {items.length}
            </p>
          </div>
          <div dir="ltr" className="mt-2 h-2.5 overflow-hidden rounded-full bg-white/70">
            <div className={`h-full rounded-full transition-all ${ready ? 'bg-teal-600' : 'bg-amber-500'}`} style={{ width: `${percent}%` }} />
          </div>
          <p className="mt-2 text-xs font-normal opacity-90">
            {ready
              ? 'الحزمة متكاملة — يمكن إدراج أمر الشغل في خطة الأسبوع القادم بثقة.'
              : !kitted
                ? 'تحذير: لا تجدول أي عمل قبل تجميع قطع الغيار فعليا في المستودع.'
                : 'أكمل باقي البنود حتى تصل الجاهزية إلى 100% قبل الجدولة.'}
          </p>
        </div>

        <div className="grid gap-2 sm:grid-cols-2">
          {items.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setChecked((p) => ({ ...p, [item.id]: !p[item.id] }))}
              className={`cursor-pointer rounded-xl border p-3 text-right transition ${
                checked[item.id] ? 'border-teal-400 bg-teal-50' : 'border-slate-200 bg-white hover:border-slate-400'
              }`}
            >
              <p className="flex items-center justify-between text-xs font-bold text-ink-800">
                <span>
                  {checked[item.id] ? '☑' : '☐'} {item.title}
                </span>
              </p>
              <p className="mt-0.5 font-mono text-[11px] text-ink-400" dir="ltr">
                {item.en}
              </p>
              <p className="mt-1 text-[11px] leading-relaxed text-ink-500">{item.desc}</p>
            </button>
          ))}
        </div>

        <button
          type="button"
          onClick={() => setChecked({ sop: true, safety: true, labor: true })}
          className="cursor-pointer rounded-lg border border-slate-300 bg-white px-4 py-2 text-xs font-bold text-ink-700"
        >
          إعادة الضبط
        </button>
      </div>
    </div>
  );
}
