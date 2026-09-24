import { useState } from 'react';

interface Pillar {
  id: string;
  ar: string;
  en: string;
  focus: string;
  weight: string;
}

const pillars: Pillar[] = [
  { id: 'ops', ar: 'التشغيل والصيانة', en: 'Operations & Maintenance', weight: 'الأكبر وزناً في الامتحان', focus: 'أنظمة المباني، استراتيجيات الصيانة، الطاقة، عقود الخدمة' },
  { id: 'realestate', ar: 'العقارات', en: 'Real Estate', weight: 'وزن كبير', focus: 'عقود الإيجار، تقييم الأصول، تخطيط المساحات' },
  { id: 'finance', ar: 'الماليات', en: 'Finance & Budgets', weight: 'وزن كبير', focus: 'الميزانيات، LCC، ROI، مراقبة التكاليف' },
  { id: 'sustain', ar: 'الاستدامة', en: 'Sustainability', weight: 'وزن متزايد', focus: 'المباني الخضراء، إدارة النفايات، كفاءة الطاقة' },
  { id: 'fmtech', ar: 'تكنولوجيا معلومات المنشآت', en: 'FIM & Technology', weight: 'وزن معتبر', focus: 'CMMS وCAFM والتحليل البياني' },
  { id: 'risk', ar: 'إدارة المخاطر', en: 'Risk Management', weight: 'وزن معتبر', focus: 'السلامة، الطوارئ، استمرارية الأعمال، التامين' },
  { id: 'comm', ar: 'التواصل', en: 'Communication', weight: 'وزن معتبر', focus: 'تقديم المشاريع والبيانات للإدارة العليا' },
  { id: 'quality', ar: 'الأداء والجودة', en: 'Performance & Quality', weight: 'وزن معتبر', focus: 'بنى المقاييس، الجودة، التحسين المستمر' },
  { id: 'leadership', ar: 'القيادة والاستراتيجية', en: 'Leadership & Strategy', weight: 'وزن معتبر', focus: 'الاستراتيجية، التخطيط، أصحاب المصلحة' },
  { id: 'human', ar: 'الإشغال والعوامل البشرية', en: 'Occupancy & Human Factors', weight: 'وزن معتبر', focus: 'Ergonomics، الرفاهية، IEQ' },
  { id: 'projects', ar: 'إدارة المشاريع', en: 'Project Management', weight: 'وزن معتبر', focus: 'دورة حياة المشروع، جدولة، الميزانية' },
];

export default function PillarsExplorer() {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <div className="card mt-6 overflow-hidden">
      <div className="border-b border-slate-200 bg-brand-50 px-5 py-3 text-sm font-semibold text-brand-800">
        🗺️ مستكشف أركان IFMA الإحدى عشر
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
                <span className="chip bg-slate-100 text-ink-500 shrink-0">{p.weight}</span>
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