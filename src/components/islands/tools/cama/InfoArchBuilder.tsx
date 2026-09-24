import { useState } from 'react';

const CATEGORIES = [
  {
    id: 'rotating',
    label: 'مُدوار (مضخات، مراوح، محركات)',
    fields: ['السرعة الدورانية (RPM)', 'الاهتزاز', 'درجة الحرارة', 'التدفق', 'الضغط', 'ساعات التشغيل'],
    standards: ['ISO 14224', 'ISO 20816'],
  },
  {
    id: 'static',
    label: 'ثابت (خزانات، مبخرات، أنابيب)',
    fields: ['الضغط', 'درجة الحرارة', 'التآكل', 'التسريبات', 'فحص الأشعة'],
    standards: ['API 510', 'API 653'],
  },
  {
    id: 'electrical',
    label: 'كهربائي (محولات، لوحات توزيع)',
    fields: ['التيار', 'الجهد', 'العزل', 'درجة الحرارة', 'الاهتزاز'],
    standards: ['IEEE C57', 'NFPA 70B'],
  },
  {
    id: 'hvac',
    label: 'تكييف وتبريد (HVAC)',
    fields: ['درجة حرارة الهواء', 'الرطوبة', 'التدفق', 'ضغط الغاز', 'الطاقة الاستهلاكية'],
    standards: ['ASHRAE 90.1', 'ISO 52120'],
  },
  {
    id: 'building',
    label: 'مباني ومنشآت',
    fields: ['الحالة البصرية', 'الĝدرات الهيكلية', 'العزل الحراري', 'أنظمة السلامة', 'المساحة'],
    standards: ['ASTM E2018', 'IFMA Standards'],
  },
];

const DECISION_TYPES = [
  { id: 'pm', label: 'الصيانة الوقائية', needs: ['التاريخ', 'الحالة', 'الجدول'] },
  { id: 'predictive', label: 'الصيانة التنبؤية', needs: ['المجسات', 'الأنماط', 'التنبؤات'] },
  { id: 'replacement', label: 'قرار الاستبدال', needs: ['LCC', 'الأداء', 'العمر'] },
  { id: 'investment', label: 'قرار الاستثمار', needs: ['ROI', 'الأداء', 'المقارنة'] },
  { id: 'safety', label: 'قرار السلامة', needs: ['المخاطر', 'الفحوصات', 'التوثيق'] },
];

export default function InfoArchBuilder() {
  const [selectedCategory, setSelectedCategory] = useState(CATEGORIES[0]);
  const [selectedDecisions, setSelectedDecisions] = useState<string[]>(['pm']);

  const toggleDecision = (id: string) => {
    setSelectedDecisions((prev) =>
      prev.includes(id) ? prev.filter((d) => d !== id) : [...prev, id]
    );
  };

  const activeDecisionNeeds = DECISION_TYPES
    .filter((d) => selectedDecisions.includes(d.id))
    .flatMap((d) => d.needs);
  const uniqueNeeds = [...new Set(activeDecisionNeeds)];

  return (
    <div className="card mt-6 overflow-hidden">
      <div className="border-b border-slate-200 bg-brand-50 px-5 py-3 text-sm font-semibold text-brand-800">
        🏗️ باني بنية المعلومات — حدد فئة الأصول واحتياجات القرار
      </div>

      <div className="space-y-5 p-5">
        {/* Category Selection */}
        <div>
          <p className="mb-2 text-sm font-bold text-ink-700">اختر فئة الأصول:</p>
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`cursor-pointer rounded-lg border px-3 py-1.5 text-xs font-semibold transition ${
                  selectedCategory.id === cat.id
                    ? 'border-brand-500 bg-brand-100 text-brand-800'
                    : 'border-slate-200 bg-white text-ink-600 hover:bg-slate-50'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Decision Types */}
        <div>
          <p className="mb-2 text-sm font-bold text-ink-700">قرارات الصيانة المطلوبة:</p>
          <div className="flex flex-wrap gap-2">
            {DECISION_TYPES.map((dec) => (
              <button
                key={dec.id}
                type="button"
                onClick={() => toggleDecision(dec.id)}
                className={`cursor-pointer rounded-lg border px-3 py-1.5 text-xs font-semibold transition ${
                  selectedDecisions.includes(dec.id)
                    ? 'border-teal-500 bg-teal-100 text-teal-800'
                    : 'border-slate-200 bg-white text-ink-600 hover:bg-slate-50'
                }`}
              >
                {dec.label}
              </button>
            ))}
          </div>
        </div>

        {/* Architecture Output */}
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl border border-slate-200 p-4">
            <p className="mb-2 text-xs font-bold text-ink-800">البيانات المطلوبة لفئة "{selectedCategory.label}":</p>
            <ul className="space-y-1">
              {selectedCategory.fields.map((field) => (
                <li key={field} className="flex items-center gap-2 text-xs text-ink-600">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-brand-500" />
                  {field}
                </li>
              ))}
            </ul>
            <div className="mt-3 rounded-lg bg-slate-50 px-3 py-2">
              <p className="text-[10px] font-semibold text-ink-500">المعايير المرجعية:</p>
              <div className="mt-1 flex flex-wrap gap-1">
                {selectedCategory.standards.map((std) => (
                  <span key={std} className="rounded bg-brand-50 px-1.5 py-0.5 text-[10px] font-bold text-brand-700">
                    {std}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-slate-200 p-4">
            <p className="mb-2 text-xs font-bold text-ink-800">متطلبات المعلومات للقرارات المحددة:</p>
            <div className="space-y-2">
              {uniqueNeeds.length > 0 ? (
                uniqueNeeds.map((need) => (
                  <div key={need} className="flex items-center gap-2 rounded-lg bg-teal-50 px-3 py-1.5 text-xs font-semibold text-teal-700">
                    <span className="text-teal-500">✓</span>
                    {need}
                  </div>
                ))
              ) : (
                <p className="text-xs text-ink-400">اختر قراراً واحداً على الأقل</p>
              )}
            </div>
          </div>
        </div>

        {/* Summary */}
        <div className="rounded-xl bg-slate-50 px-4 py-3">
          <p className="text-xs text-ink-500">
            بنية المعلومات المطلوبة: <strong>{selectedCategory.fields.length} حقل بيانات</strong> لفئة{' '}
            <strong>{selectedCategory.label}</strong> تدعم <strong>{selectedDecisions.length} قرار(ات)</strong>{' '}
            صيانة مع <strong>{uniqueNeeds.length} متطلب معلوماتي</strong>.
          </p>
        </div>
      </div>
    </div>
  );
}
