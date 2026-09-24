import { useState } from 'react';

interface CheckItem {
  id: string;
  category: string;
  label: string;
  description: string;
}

const CHECKLIST: CheckItem[] = [
  { id: 'doc-1', category: 'الوثائق الفنية', label: 'مخططات التوصيلات الكهربائية والميكانيكية', description: 'مخططات as-built محدثة تشمل جميع التوصيلات والمكونات' },
  { id: 'doc-2', category: 'الوثائق الفنية', label: 'جداول المواصفات الفنية', description: ' مواصفات المكونات الرئيسية والمعايير المرجعية' },
  { id: 'doc-3', category: 'الوثائق الفنية', label: 'شهادات الاختبار والفحص', description: 'نتائج اختبارات التشغيل الأولي وشهادات المطابقة' },
  { id: 'op-1', category: 'التدريب والتشغيل', label: 'تدريب المشغّلين', description: 'تدريب رسمي موثق لفريق التشغيل على الإجراءات والروتين اليومي' },
  { id: 'op-2', category: 'التدريب والتشغيل', label: 'دليل التشغيل والصيانة', description: 'دليل شامل يشمل إجراءات التشغيل والصيانة الدورية وإجراءات الطوارئ' },
  { id: 'op-3', category: 'التدريب والتشغيل', label: 'إجراءات الطوارئ', description: 'خطة طوارئ واضحة تشمل إجراءات الإغلاق والتعامل مع الحوادث' },
  { id: 'spare-1', category: 'قطع الغيار', label: 'قائمة قطع الغيار الأولية', description: 'قائمة بالقطع الحرجة الأساسية مع أرقام القطع والكميات' },
  { id: 'spare-2', category: 'قطع الغيار', label: 'مخزون أولي لقطع الغيار', description: 'تخزين القطع الحرجة في المخزن قبل بدء التشغيل' },
  { id: 'maint-1', category: 'الصيانة', label: 'خطة الصيانة الأولية', description: 'جدول الصيانة الوقائية للأشهر الأولى بناءً على توصيات المورد' },
  { id: 'maint-2', category: 'الصيانة', label: 'مسجل تاريخ الأصل في CMMS', description: 'إدخال الأصول والمكونات في نظام إدارة الصيانة مع جميع البيانات' },
  { id: 'safe-1', category: 'السلامة والبيئة', label: 'تقييم المخاطر', description: 'تقييم مخاطر السلامة والبيئة المرتبطة بالأصل وإجراءات التخفيف' },
  { id: 'safe-2', category: 'السلامة والبيئة', label: 'معدات الحماية الشخصية', description: 'توفر معدات الحماية الشخصية المناسبة لتشغيل الأصل وصيانته' },
];

const categories = [...new Set(CHECKLIST.map((c) => c.category))];

export default function AssetHandoverChecklist() {
  const [checked, setChecked] = useState<Record<string, boolean>>({});
  const [activeCategory, setActiveCategory] = useState<string>(categories[0]);

  const toggle = (id: string) => setChecked((prev) => ({ ...prev, [id]: !prev[id] }));

  const totalItems = CHECKLIST.length;
  const checkedCount = Object.values(checked).filter(Boolean).length;
  const percentage = Math.round((checkedCount / totalItems) * 100);

  const catItems = CHECKLIST.filter((c) => c.category === activeCategory);
  const catChecked = catItems.filter((c) => checked[c.id]).length;

  const allDone = checkedCount === totalItems;

  return (
    <div className="card mt-6 overflow-hidden">
      <div className="border-b border-slate-200 bg-brand-50 px-5 py-3 text-sm font-semibold text-brand-800">
        ✅ قائمة تسليم الأصول — تحقق من جاهزية الأصل للتسليم
      </div>

      <div className="space-y-4 p-5">
        <div className="flex items-center gap-3">
          <div className="h-3 flex-1 overflow-hidden rounded-full bg-slate-200">
            <div
              className={`h-full rounded-full transition-all duration-500 ${allDone ? 'bg-emerald-500' : 'bg-brand-500'}`}
              style={{ width: `${percentage}%` }}
            />
          </div>
          <span className="text-sm font-bold text-ink-700" dir="ltr">
            {checkedCount}/{totalItems} ({percentage}%)
          </span>
        </div>

        {allDone && (
          <div className="rounded-lg bg-emerald-50 p-3 text-sm font-semibold text-emerald-800 ring-1 ring-emerald-200">
            ✓ الأصل جاهز للتسليم — جميع البنود مكتملة
          </div>
        )}

        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => {
            const items = CHECKLIST.filter((c) => c.category === cat);
            const done = items.filter((c) => checked[c.id]).length;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`cursor-pointer rounded-lg px-3 py-1.5 text-xs font-semibold transition ${
                  activeCategory === cat
                    ? 'bg-brand-600 text-white'
                    : 'bg-slate-100 text-ink-600 hover:bg-slate-200'
                }`}
              >
                {cat} ({done}/{items.length})
              </button>
            );
          })}
        </div>

        <div className="space-y-2">
          {catItems.map((item) => (
            <label
              key={item.id}
              className={`flex cursor-pointer items-start gap-3 rounded-xl border p-3 transition ${
                checked[item.id]
                  ? 'border-emerald-300 bg-emerald-50'
                  : 'border-slate-200 bg-white hover:border-slate-300'
              }`}
            >
              <input
                type="checkbox"
                checked={checked[item.id] ?? false}
                onChange={() => toggle(item.id)}
                className="mt-0.5 h-4 w-4 shrink-0 cursor-pointer accent-emerald-600"
              />
              <div className="min-w-0">
                <p className={`text-sm font-semibold ${checked[item.id] ? 'text-emerald-800' : 'text-ink-800'}`}>
                  {item.label}
                </p>
                <p className="mt-0.5 text-xs text-ink-500">{item.description}</p>
              </div>
            </label>
          ))}
        </div>

        <div className="flex items-center justify-between rounded-lg bg-slate-50 px-4 py-2 text-xs text-ink-500">
          <span>{catItems.length - catChecked} بنود متبقية في هذا القسم</span>
          <span>{catChecked}/{catItems.length} مكتملة</span>
        </div>
      </div>
    </div>
  );
}
