import { useState } from 'react';

const stages = [
  {
    title: 'اكتشاف العمل وتحديده',
    en: 'Work Identification',
    owner: 'المشغل أو الفني أو حساسات المراقبة',
    status: 'طلب عمل جديد',
    desc: 'يرصد المشغل أو الفني الخلل ويسجل طلب عمل (Work Request) في نظام CMMS يصف الأعراض الفيزيائية بدقة مع رقم الأصل وموقعه، دون تخمين عشوائي للسبب الجذري.',
    tip: 'جودة الوصف هنا تحدد جودة كل ما يليها: عرض دقيق يساوي تخطيطا دقيقا.',
  },
  {
    title: 'التصفية وحراسة البوابة',
    en: 'Screening & Gatekeeping',
    owner: 'مشرف الصيانة وممثل التشغيل',
    status: 'معتمد ومصفى',
    desc: 'مراجعة يومية مشتركة لطلبات العمل: التحقق من الحاجة الفعلية، دمج الطلبات المكررة، ورفض غير المجدية، ثم اعتماد الطلب الحقيقي ليتحول إلى أمر شغل رسمي.',
    tip: 'صمام الأمان الذي يمنع إغراق المخطط بطلبات وهمية قبل دخولها مرحلة التخطيط.',
  },
  {
    title: 'التخطيط التفصيلي',
    en: 'Detailed Planning',
    owner: 'مخطط الصيانة (Planner)',
    status: 'مخطط بالكامل',
    desc: 'يجيب المخطط عن ماذا وكيف: خطوات العمل، التخصصات المطلوبة، الأدوات الخاصة، تصاريح السلامة، تقدير الساعات، وحجز قطع الغيار في المستودع ضمن حزمة العمل.',
    tip: 'المخطط يعمل للمستقبل (الأسبوع القادم وما بعده) ولا يطارد طوارئ اليوم.',
  },
  {
    title: 'الجدولة والتنسيق الأسبوعي',
    en: 'Scheduling & Coordination',
    owner: 'منسق الجدولة (Scheduler)',
    status: 'مجدول أسبوعيا',
    desc: 'يجيب المجدول عن متى ومن: التنسيق مع الإنتاج لحجز نافذة تسليم المعدة، وتخصيص أسماء الفنيين في الجدول الأسبوعي المعتمد حتى 100% من صافي الطاقة المتاحة.',
    tip: 'الجدول الأسبوعي عقد ملزم بين الصيانة والإنتاج لا قائمة أمنيات داخلية.',
  },
  {
    title: 'التنفيذ والتغذية الراجعة',
    en: 'Execution & Craft Feedback',
    owner: 'فنيو الصيانة ومشرف الميدان',
    status: 'قيد التنفيذ الميداني',
    desc: 'يستلم الفنيون حزمة العمل وتصاريح السلامة، ينفذون العمل وفق الخطوات، ويسجلون الساعات الفعلية والقطع المستهلكة وملاحظات الفحص الفنية في نظام CMMS.',
    tip: 'التغذية الراجعة الدقيقة هي وقود التحسين المستمر ودقة الخطط القادمة.',
  },
  {
    title: 'الإغلاق الفني والمالي',
    en: 'Work Order Closure',
    owner: 'المخطط والمشرف ومحاسب التكاليف',
    status: 'مغلق فنيا وماليا',
    desc: 'مراجعة انحراف الساعات والتكاليف عن المخطط، ترحيل المصاريف الفعلية إلى مركز تكلفة الأصل، وتحديث سجل تاريخ المعدة لخدمة تحليل الموثوقية مستقبلا.',
    tip: 'أمر الشغل المفتوح وعاء مالي مفتوح يشوه مؤشر التراكم ويجب إغلاقه سريعا.',
  },
];

export default function WorkOrderFlow() {
  const [idx, setIdx] = useState(0);
  const s = stages[idx];

  return (
    <div className="card mt-6 overflow-hidden">
      <div className="border-b border-slate-200 bg-brand-50 px-5 py-3 text-sm font-semibold text-brand-800">
        🔄 مخطط تدفق أمر الشغل — المراحل الست في نظام CMMS
      </div>

      <div className="space-y-4 p-5">
        <div className="grid grid-cols-2 gap-1.5 sm:grid-cols-3 lg:grid-cols-6">
          {stages.map((st, i) => (
            <button
              key={st.en}
              type="button"
              onClick={() => setIdx(i)}
              className={`flex cursor-pointer flex-col gap-1 rounded-lg border px-2 py-2.5 text-right transition ${
                i === idx
                  ? 'border-brand-600 bg-brand-50 ring-2 ring-brand-600 ring-offset-1'
                  : i < idx
                    ? 'border-teal-300 bg-teal-50'
                    : 'border-slate-200 bg-white hover:border-slate-400'
              }`}
            >
              <span className="font-mono text-[11px] font-bold text-ink-400">#{i + 1}</span>
              <span className="text-[11px] font-bold leading-tight text-ink-800">{st.title}</span>
            </button>
          ))}
        </div>

        <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <p className="text-sm font-bold text-ink-900">
              المرحلة {idx + 1} من 6: {s.title} <span className="font-mono text-xs text-ink-400">({s.en})</span>
            </p>
            <span className="rounded-full bg-brand-100 px-3 py-1 font-mono text-[11px] font-bold text-brand-800">
              {s.status}
            </span>
          </div>
          <p className="mt-2 text-sm leading-relaxed text-ink-700">{s.desc}</p>
          <p className="mt-2 text-xs leading-relaxed text-ink-500">
            <strong>المسؤول:</strong> {s.owner}
          </p>
          <p className="mt-1 rounded-lg bg-amber-50 px-3 py-2 text-xs leading-relaxed text-amber-900 ring-1 ring-amber-300">
            <strong>الممارسة الفضلى:</strong> {s.tip}
          </p>
        </div>

        <div className="flex items-center justify-between">
          <button
            type="button"
            disabled={idx === 0}
            onClick={() => setIdx((v) => v - 1)}
            className="cursor-pointer rounded-lg border border-slate-300 bg-white px-4 py-2 text-xs font-bold text-ink-700 disabled:opacity-30"
          >
            → المرحلة السابقة
          </button>
          <button
            type="button"
            disabled={idx === stages.length - 1}
            onClick={() => setIdx((v) => v + 1)}
            className="cursor-pointer rounded-lg bg-ink-900 px-5 py-2 text-xs font-bold text-white disabled:opacity-30"
          >
            المرحلة التالية ←
          </button>
        </div>
      </div>
    </div>
  );
}
