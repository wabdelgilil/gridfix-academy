import { useState } from 'react';

interface Pillar {
  id: string;
  letter: string;
  ar: string;
  en: string;
  focus: string;
}

const pillars: Pillar[] = [
  { id: 'leadership', letter: 'A', ar: 'القيادة والاستراتيجية', en: 'Leadership & Strategy', focus: 'التخطيط الاستراتيجي، إدارة أصحاب المصلحة، وإدارة التغيير — محطة 8.' },
  { id: 'ops', letter: 'B', ar: 'عمليات المنشأة', en: 'Facility Operations', focus: 'أنظمة المباني، استراتيجيات الصيانة، الطاقة، والإشغال والعوامل البشرية — محطتا 1 و4.' },
  { id: 'risk', letter: 'C', ar: 'إدارة المخاطر', en: 'Risk Management', focus: 'السلامة، تقييم المخاطر والسيطرة، الطوارئ، واستمرارية الأعمال — محطتا 5 و6.' },
  { id: 'finance', letter: 'D', ar: 'الماليات والأعمال', en: 'Finance & Business', focus: 'الميزانيات، تحليل الانحرافات، LCC وROI، ومراقبة التكاليف — محطة 3.' },
  { id: 'sustain', letter: 'E', ar: 'الاستدامة', en: 'Sustainability', focus: 'المباني الخضراء LEED، إدارة النفايات، وجودة الهواء الداخلي — محطة 7.' },
  { id: 'comm', letter: 'F', ar: 'التواصل', en: 'Communication', focus: 'تقديم المشاريع والبيانات للإدارة العليا والتواصل مع أصحاب المصلحة — مدمج في محطة 8.' },
  { id: 'quality', letter: 'G', ar: 'الجودة', en: 'Quality', focus: 'التحسين المستمر، PDCA، الجودة والتدقيق — محطة 10.' },
  { id: 'realestate', letter: 'H', ar: 'العقارات', en: 'Real Estate', focus: 'عقود الإيجار، دورة حياة العقار، وتخطيط المساحات — محطة 2.' },
  { id: 'fmtech', letter: 'I', ar: 'تقنية المعلومات والبيانات', en: 'Facility Technology & Data Management', focus: 'مؤشرات KPIs وأنظمة CMMS/CAFM وتحليل البيانات — محطة 9.' },
  { id: 'projects', letter: 'J', ar: 'إدارة المشاريع', en: 'Project Management', focus: 'دورة حياة المشروع، الجدولة والتكلفة، المقاولون والإغلاق — محطة 12.' },
];

export default function PillarsExplorer() {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <div className="card mt-6 overflow-hidden">
      <div className="border-b border-slate-200 bg-brand-50 px-5 py-3 text-sm font-semibold text-brand-800">
        🗺️ مستكشف مجالات IFMA العشرة
      </div>
      <div className="grid gap-3 p-5 sm:grid-cols-2">
        {pillars.map((p) => {
          const isOpen = open === p.id;
          return (
            <button
              key={p.id}
              type="button"
              onClick={() => setOpen(isOpen ? null : p.id)}
              className={`cursor-pointer rounded-xl border p-4 text-right transition ${
                isOpen ? 'border-brand-500 bg-brand-50' : 'border-slate-200 bg-white hover:border-brand-300'
              }`}
            >
              <div className="flex items-center justify-between gap-2">
                <span className="font-semibold text-ink-900">{p.ar}</span>
                <span className="chip bg-slate-100 text-ink-500 shrink-0" dir="ltr">{p.letter} · 10%</span>
              </div>
              <p dir="ltr" lang="en" className="mt-0.5 text-left text-xs text-ink-400">{p.en}</p>
              {isOpen && <p className="mt-2 text-sm leading-relaxed text-ink-600">{p.focus}</p>}
            </button>
          );
        })}
      </div>
    </div>
  );
}