import { useState } from 'react';

const CATEGORIES = [
  {
    id: 'machine',
    name: 'الآلة (Machine)',
    causes: [
      { text: 'عدم محاذاة العمودين (Misalignment)', kind: 'سبب مادي' },
      { text: 'تآكل ونقر كرات المحمل الميكانيكي', kind: 'سبب مادي' },
      { text: 'تراخي مسامير التثبيت بالقاعدة الخرسانية', kind: 'سبب مادي' },
    ],
  },
  {
    id: 'man',
    name: 'الإنسان (Man)',
    causes: [
      { text: 'استخدام مفتاح عادي دون ضبط العزم المطلوب', kind: 'سبب بشري' },
      { text: 'قلة خبرة الفني الجديد بأجهزة المحاذاة بالليزر', kind: 'سبب بشري' },
      { text: 'إجهاد العمل الإضافي في الوردية الليلية', kind: 'سبب بشري' },
    ],
  },
  {
    id: 'material',
    name: 'المادة (Material)',
    causes: [
      { text: 'استخدام شحم غير مطابق لمواصفات الصانع', kind: 'سبب مادي' },
      { text: 'تلوث زيت التزييت بالرطوبة في المستودع', kind: 'سبب مادي' },
      { text: 'جوان غير أصلي من مورد رديء', kind: 'سبب مادي' },
    ],
  },
  {
    id: 'method',
    name: 'الطريقة (Method)',
    causes: [
      { text: 'غياب إجراءات عمل قياسية مكتوبة (SOPs)', kind: 'سبب كامن' },
      { text: 'لا قائمة تحقق إلزامية قبل تسليم الأصل للتشغيل', kind: 'سبب كامن' },
      { text: 'خطة صيانة وقائية غير محدثة منذ سنوات', kind: 'سبب كامن' },
    ],
  },
  {
    id: 'measurement',
    name: 'القياس (Measurement)',
    causes: [
      { text: 'جهاز قياس الاهتزازات منتهي المعايرة', kind: 'سبب كامن' },
      { text: 'غياب مجسات حرارة دائمة على المحامل', kind: 'سبب كامن' },
      { text: 'مانومتر تالف يعطي قراءة ضغط خادعة', kind: 'سبب كامن' },
    ],
  },
  {
    id: 'milieu',
    name: 'البيئة (Milieu)',
    causes: [
      { text: 'ارتفاع حرارة الجو المحيط إلى 50 درجة مئوية', kind: 'سبب مادي' },
      { text: 'تسرب مياه الأمطار ورطوبة عالية في غرفة المعدات', kind: 'سبب مادي' },
      { text: 'تراكم الغبار على زعانف تبريد المحرك', kind: 'سبب مادي' },
    ],
  },
];

function kindStyle(kind: string) {
  if (kind === 'سبب بشري') return 'bg-amber-100 text-amber-800';
  if (kind === 'سبب كامن') return 'bg-rose-100 text-rose-800';
  return 'bg-teal-100 text-teal-800';
}

export default function FishboneExplorer() {
  const [selected, setSelected] = useState('machine');

  const active = CATEGORIES.find((c) => c.id === selected) ?? CATEGORIES[0];

  return (
    <div className="card mt-6 overflow-hidden">
      <div className="border-b border-slate-200 bg-brand-50 px-5 py-3 text-sm font-semibold text-brand-800">
        🐟 مستكشف عظمة السمكة — فئات الأسباب الست (6Ms)
      </div>

      <div className="space-y-4 p-5">
        <p className="text-xs text-ink-500">
          مشكلة التحليل: كسر مفاجئ لعمود مضخة مياه التبريد — انقر أي فئة لاستعراض أسبابها المحتملة.
        </p>

        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
          {CATEGORIES.map((cat) => {
            const isSelected = cat.id === selected;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelected(cat.id)}
                className={`cursor-pointer rounded-xl border px-3 py-2.5 text-xs font-bold transition ${
                  isSelected
                    ? 'border-ink-900 bg-ink-900 text-white ring-2 ring-ink-900 ring-offset-2'
                    : 'border-slate-300 bg-white text-ink-700'
                }`}
              >
                {cat.name}
                <span className="mt-0.5 block text-[10px] font-normal opacity-70">
                  {cat.causes.length} أسباب محتملة
                </span>
              </button>
            );
          })}
        </div>

        <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
          <p className="text-sm font-bold text-ink-800">الأسباب المحتملة: {active.name}</p>
          <div className="mt-3 grid gap-2.5 sm:grid-cols-3">
            {active.causes.map((cause) => (
              <div key={cause.text} className="rounded-xl border border-slate-200 bg-white p-3">
                <span className={`inline-block rounded-full px-2 py-0.5 text-[10px] font-bold ${kindStyle(cause.kind)}`}>
                  {cause.kind}
                </span>
                <p className="mt-1.5 text-xs leading-relaxed text-ink-700">{cause.text}</p>
              </div>
            ))}
          </div>
          <p className="mt-3 text-[11px] leading-relaxed text-ink-500">
            الهدف الحقيقي للتحقيق هو السبب الكامن المؤسسي — معالجته تمنع العطل في المصنع كله، لا في هذه الماكينة وحدها.
          </p>
        </div>
      </div>
    </div>
  );
}
