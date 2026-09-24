import { useState } from 'react';

interface Category {
  id: string;
  name: string;
  nameEn: string;
  max: number;
  hint: string;
}

const categories: Category[] = [
  { id: 'ip', name: 'العملية التكاملية', nameEn: 'Integrative Process', max: 1, hint: 'تحليل أنظمة الطاقة والمياه قبل بدء التصميم.' },
  { id: 'lt', name: 'الموقع والنقل', nameEn: 'Location & Transportation', max: 16, hint: 'قرب الخدمات، المواصلات العامة، البنية الآمنة للدراجات.' },
  { id: 'ss', name: 'المواقع المستدامة', nameEn: 'Sustainable Sites', max: 10, hint: 'إدارة مياه الأمطار، تقليل حرارة الأسطح، حماية الأراضي.' },
  { id: 'we', name: 'كفاءة المياه', nameEn: 'Water Efficiency', max: 11, hint: 'ترشيد الاستهلاك الداخلي والخارجي وقياس الماء.' },
  { id: 'ea', name: 'الطاقة والغلاف الجوي', nameEn: 'Energy & Atmosphere', max: 33, hint: 'تحسين الأداء الطاقي، قياسه، الطاقة المتجددة — أكبر فئة نقاط.' },
  { id: 'mr', name: 'المواد والمصادر', nameEn: 'Materials & Resources', max: 13, hint: 'مواد منخفضة الأثر، إعادة استخدام، إدارة مخلفات البناء.' },
  { id: 'eq', name: 'جودة البيئة الداخلية', nameEn: 'Indoor Environmental Quality', max: 16, hint: 'مواد منخفضة الانبعاث، إضاءة طبيعية، جودة تهوية.' },
  { id: 'in', name: 'الابتكار', nameEn: 'Innovation', max: 6, hint: 'أداء مميز أو أفكار معتمدة تتجاوز المتطلبات.' },
  { id: 'rp', name: 'الأولوية الإقليمية', nameEn: 'Regional Priority', max: 4, hint: 'نقاط إضافية لمشاريع تعالج أولويات بيئية محلية محددة.' },
];

const maxTotal = categories.reduce((a, c) => a + c.max, 0);

function level(total: number) {
  if (total >= 80)
    return { name: 'بلاتينيوم (Platinum)', tone: 'bg-slate-700 text-white ring-slate-600' };
  if (total >= 60)
    return { name: 'ذهبي (Gold)', tone: 'bg-amber-500 text-white ring-amber-600' };
  if (total >= 50)
    return { name: 'فضي (Silver)', tone: 'bg-slate-200 text-slate-800 ring-slate-300' };
  if (total >= 40)
    return { name: 'معتمد (Certified)', tone: 'bg-teal-600 text-white ring-teal-700' };
  return { name: 'أقل من عتبة الاعتماد', tone: 'bg-rose-100 text-rose-800 ring-rose-300' };
}

export default function LEEDPointsTracker() {
  const [values, setValues] = useState<Record<string, number>>({});

  const set = (id: string, v: number) => {
    const cat = categories.find((c) => c.id === id)!;
    const clamped = Math.max(0, Math.min(cat.max, Math.round(v)));
    setValues((prev) => ({ ...prev, [id]: clamped }));
  };

  const answeredCount = Object.keys(values).length;
  const total = categories.reduce((sum, c) => sum + (values[c.id] ?? 0), 0);
  const lvl = level(total);
  const pct = Math.round((total / maxTotal) * 100);

  return (
    <div className="card mt-6 overflow-hidden">
      <div className="border-b border-slate-200 bg-brand-50 px-5 py-3 text-sm font-semibold text-brand-800">
        🌱 متتبع نقاط LEED v4 — بي دي + سي (BD+C)
      </div>

      <div className="space-y-3 p-5">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((c) => {
            const val = values[c.id] ?? 0;
            return (
              <div key={c.id} className="rounded-xl border border-slate-200 p-3">
                <div className="flex items-center justify-between gap-2">
                  <p className="font-semibold text-ink-900">
                    {c.name}
                    <span className="mr-1 block text-[10px] font-normal text-ink-400" dir="ltr">
                      {c.nameEn}
                    </span>
                  </p>
                  <span className="shrink-0 rounded-full bg-slate-100 px-2 py-0.5 text-xs font-bold text-ink-600">
                    {val} / {c.max}
                  </span>
                </div>
                <input
                  type="range"
                  min={0}
                  max={c.max}
                  value={val}
                  onChange={(e) => set(c.id, Number(e.target.value))}
                  className="mt-2 w-full cursor-pointer accent-brand-600"
                />
                <p className="mt-1 text-[11px] leading-relaxed text-ink-400">{c.hint}</p>
              </div>
            );
          })}
        </div>

        {answeredCount === categories.length ? (
          <div className={`rounded-xl p-4 text-sm font-semibold ring-2 ${lvl.tone}`}>
            مجموع النقاط المستهدفة: <strong dir="ltr">{total}/{maxTotal} ({pct}%)</strong> — المستوى: {lvl.name}
            <p className="mt-1 text-xs font-normal opacity-80">
              مستويات LEED v4: معتمد 40–49، فضي 50–59، ذهبي 60–79، بلاتينيوم 80 فأكثر.
            </p>
          </div>
        ) : (
          <p className="rounded-xl bg-slate-100 p-3 text-center text-sm text-ink-400">
            حرّك كل الفئات التسع لتحدد المستوى المستهدف لاعتماد LEED.
          </p>
        )}
      </div>
    </div>
  );
}