import { useState } from 'react';

const curves = [
  {
    letter: 'F',
    name: 'وفيات الرضع',
    percent: 68,
    ageRelated: false,
    shape: 'احتمالية فشل مرتفعة جدا بعد التركيب أو العمرة، ثم تنخفض بسرعة وتستقر عند مستوى منخفض ثابت.',
    examples: 'المحركات الكهربائية، الدوائر الإلكترونية، التجميعات الهيدروليكية المعقدة، المضخات بعد الاستبدال.',
    implication: 'الاستبدال الدوري بالزمن ضار جدا لأنه يدخل عيوب تجميع جديدة. الحل هو الصيانة المشروطة بالحالة مع ضبط دقيق للمحاذاة والاتزان.',
  },
  {
    letter: 'E',
    name: 'العشوائي التام',
    percent: 14,
    ageRelated: false,
    shape: 'احتمالية فشل ثابتة ومتساوية من أول يوم تشغيل حتى آخر يوم، دون أي منطقة تقادم.',
    examples: 'الصمامات الكروية، لوحات الدوائر الإلكترونية، السيور الناقلة عند التعرض لأجسام غريبة وصدمات.',
    implication: 'لا يوجد عمر محدد يصلح للاستبدال الوقائي، فالصيانة بالزمن عديمة الجدوى. تجدي المراقبة المشروطة، أو التشغيل حتى العطل للمعدات غير الحرجة.',
  },
  {
    letter: 'D',
    name: 'البداية المنخفضة ثم الاستقرار',
    percent: 7,
    ageRelated: false,
    shape: 'احتمالية عطل منخفضة جدا والمعدة جديدة، ثم ترتفع قليلا وتستقر عند معدل ثابت.',
    examples: 'الأنابيب المعزولة، هياكل المعدات، الخراطيم الهيدروليكية عالية الجودة.',
    implication: 'الصيانة الوقائية بالزمن غير فعالة. يكفي الفحص الدوري للحالة واختبار الضغط وضبط ظروف التشغيل.',
  },
  {
    letter: 'C',
    name: 'التعب والإجهاد التدريجي',
    percent: 5,
    ageRelated: true,
    shape: 'احتمالية الفشل تبدأ منخفضة ثم تتزايد تدريجيا بانتظام مع تراكم ساعات التشغيل ودورات الإجهاد.',
    examples: 'التروس تحت عزوم متغيرة، نوابض الصمامات، الهياكل المعدنية المعرضة للاهتزاز المتكرر.',
    implication: 'الاستبدال الوقائي مجد إذا حسبت دورات الإجهاد بدقة. وتجدي المراقبة المشروطة باختبارات كشف الشروخ.',
  },
  {
    letter: 'A',
    name: 'حوض الاستحمام التقليدي',
    percent: 4,
    ageRelated: true,
    shape: 'وفيات رضع في البداية، ثم فترة عمر مفيد بمعدل فشل منخفض وثابت، ثم ارتفاع سريع عند نهاية العمر.',
    examples: 'المعدات الميكانيكية البسيطة القديمة، بطانات الأفران، الأجزاء ذات الاحتكاك المباشر مع عيوب تجميع أولية.',
    implication: 'الصيانة بالزمن مناسبة فقط عند عتبة نهاية العمر. والمراقبة المشروطة تمنع الاستبدال المبكر قبل التآكل الفعلي.',
  },
  {
    letter: 'B',
    name: 'التآكل الصريح مع العمر',
    percent: 2,
    ageRelated: true,
    shape: 'احتمالية فشل منخفضة وثابتة، ثم زيادة حادة ومفاجئة عند نقطة زمنية واضحة نتيجة استهلاك المادة.',
    examples: 'إطارات الشاحنات، شفرات التقطيع، بطانات الكسارات، فلاتر الهواء والوقود.',
    implication: 'مثالي للاستبدال الوقائي بالزمن أو بعدد الكيلومترات أو بقياس السمك، مع قياس عمق التآكل وفرق الضغط.',
  },
];

export default function SixCurvesExplorer() {
  const [selected, setSelected] = useState('F');
  const active = curves.find((c) => c.letter === selected) ?? curves[0];

  return (
    <div className="card mt-6 overflow-hidden">
      <div className="border-b border-slate-200 bg-brand-50 px-5 py-3 text-sm font-semibold text-brand-800">
        📊 مستكشف المنحنيات الستة — دراسة نولان وهيب
      </div>

      <div className="space-y-4 p-5">
        <div className="grid grid-cols-3 gap-2 text-center sm:grid-cols-6">
          {curves.map((c) => (
            <button
              key={c.letter}
              type="button"
              onClick={() => setSelected(c.letter)}
              className={`cursor-pointer rounded-xl border px-2 py-3 transition ${
                selected === c.letter
                  ? 'border-brand-600 bg-brand-50 ring-2 ring-brand-500 ring-offset-1'
                  : 'border-slate-200 bg-white hover:border-brand-300 hover:bg-slate-50'
              }`}
            >
              <span className="block text-lg font-black text-ink-900">{c.letter}</span>
              <span className="block text-[11px] font-semibold text-ink-600">{c.name}</span>
              <span className="mt-1 block text-xs font-bold text-brand-700" dir="ltr">
                {c.percent}%
              </span>
            </button>
          ))}
        </div>

        <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-lg bg-ink-900 px-3 py-1 text-sm font-black text-white">
              النمط {active.letter}
            </span>
            <span className="text-sm font-bold text-ink-900">{active.name}</span>
            <span className="text-xs font-semibold text-ink-500" dir="ltr">
              {active.percent}% من الأعطال
            </span>
            <span
              className={`rounded-full px-2.5 py-0.5 text-[11px] font-bold ${
                active.ageRelated ? 'bg-teal-100 text-teal-800' : 'bg-rose-100 text-rose-800'
              }`}
            >
              {active.ageRelated ? 'مرتبط بالعمر' : 'عشوائي غير مرتبط بالعمر'}
            </span>
          </div>

          <p className="mt-3 text-sm leading-relaxed text-ink-700">
            <strong>شكل المنحنى: </strong>
            {active.shape}
          </p>
          <p className="mt-2 text-sm leading-relaxed text-ink-700">
            <strong>أمثلة من المصنع: </strong>
            {active.examples}
          </p>
          <p className="mt-2 rounded-lg bg-white p-3 text-sm leading-relaxed text-ink-800 ring-1 ring-slate-200">
            <strong>القرار الهندسي: </strong>
            {active.implication}
          </p>
        </div>

        <div className="grid grid-cols-2 gap-2 text-center">
          <div className="rounded-xl bg-rose-50 p-3 ring-1 ring-rose-200">
            <p className="text-2xl font-black text-rose-700" dir="ltr">89%</p>
            <p className="text-[11px] font-semibold text-rose-800">أعطال عشوائية (D و E و F)</p>
          </div>
          <div className="rounded-xl bg-teal-50 p-3 ring-1 ring-teal-200">
            <p className="text-2xl font-black text-teal-700" dir="ltr">11%</p>
            <p className="text-[11px] font-semibold text-teal-800">مرتبطة بالعمر (A و B و C)</p>
          </div>
        </div>
      </div>
    </div>
  );
}
