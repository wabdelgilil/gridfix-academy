import { useState } from 'react';

type Answer = boolean | null;

function outcome(isEvident: boolean, hasSafety: boolean, hasOperational: boolean, hasCbm: boolean) {
  if (!isEvident && hasSafety)
    return {
      tactic: 'مهمة اكتشاف العطل الإلزامية (Failure-Finding Task) أو إعادة التصميم',
      color: 'bg-rose-50 text-rose-800 ring-rose-500',
      text: 'العطل مخفي ويهدد السلامة (مثل صمام الأمان أو مضخة الحريق): اختبار وظيفي دوري يثبت الجاهزية عند الطلب، وإن تعذر خفض الخطر فإعادة التصميم إلزامية.',
    };
  if (!isEvident)
    return {
      tactic: 'مهمة اكتشاف عطل دورية مبنية على الجدوى الاقتصادية',
      color: 'bg-amber-50 text-amber-800 ring-amber-500',
      text: 'العطل مخفي بلا أثر على السلامة: فحص دوري إذا كانت تكلفته أقل من خسائر العطل المزدوج المتزامن.',
    };
  if (hasSafety && hasCbm)
    return {
      tactic: 'مهمة مشروطة بالحالة (CBM)',
      color: 'bg-teal-50 text-teal-800 ring-teal-500',
      text: 'العطل ظاهر ويمس السلامة وله نافذة تدهور (P-F Interval): راقب الاهتزاز أو الحرارة أو الزيت وتدخل قبل الفشل الوظيفي.',
    };
  if (hasSafety)
    return {
      tactic: 'إعادة تصميم هندسية إلزامية (Mandatory Redesign)',
      color: 'bg-rose-50 text-rose-800 ring-rose-500',
      text: 'العطل يهدد الأرواح أو البيئة ولا توجد مهمة تنبؤية أو دورية مجدية: يفرض معيار SAE JA1011 إعادة تصميم المعدة فوراً.',
    };
  if (hasOperational && hasCbm)
    return {
      tactic: 'صيانة مشروطة بالحالة مجدية اقتصادياً (CBM)',
      color: 'bg-teal-50 text-teal-800 ring-teal-500',
      text: 'العطل يسبب خسائر إنتاجية وتكلفة المراقبة أقل بكثير من كلفة التوقف المفاجئ.',
    };
  if (hasOperational)
    return {
      tactic: 'صيانة وقائية دورية مجدولة (PM)',
      color: 'bg-amber-50 text-amber-800 ring-amber-500',
      text: 'العطل يسبب توقفاً ولا يمكن رصده مشروطاً: استبدال أو عمرة بعد ساعات تشغيل محددة إذا كان التآكل مرتبطاً بالعمر.',
    };
  return {
    tactic: 'التشغيل حتى العطل كقرار هندسي واعٍ (Run to Failure)',
    color: 'bg-slate-100 text-slate-800 ring-slate-500',
    text: 'لا أثر على السلامة ولا توقف إنتاجي: تكلفة الصيانة الوقائية تفوق تكلفة الإصلاح عند العطل.',
  };
}

const presets = [
  { id: 'relief', name: 'صمام أمان غلاية — مخفي ويمس السلامة', evident: false, safety: true, operational: false, cbm: false },
  { id: 'bearing', name: 'محمل سير ناقل — ظاهر ويوقف الإنتاج وقابل للمراقبة', evident: true, safety: false, operational: true, cbm: true },
  { id: 'lamp', name: 'لمبة ممر مخزن — ظاهرة بلا أثر', evident: true, safety: false, operational: false, cbm: false },
];

export default function RCMDecisionTree() {
  const [step, setStep] = useState(1);
  const [isEvident, setIsEvident] = useState<Answer>(null);
  const [hasSafety, setHasSafety] = useState<Answer>(null);
  const [hasOperational, setHasOperational] = useState<Answer>(null);
  const [hasCbm, setHasCbm] = useState<Answer>(null);

  function reset() {
    setStep(1);
    setIsEvident(null);
    setHasSafety(null);
    setHasOperational(null);
    setHasCbm(null);
  }

  function applyPreset(id: string) {
    const p = presets.find((x) => x.id === id);
    if (!p) return;
    setIsEvident(p.evident);
    setHasSafety(p.safety);
    setHasOperational(p.operational);
    setHasCbm(p.cbm);
    setStep(5);
  }

  const done = step === 5 && isEvident !== null && hasSafety !== null;
  const r = done
    ? outcome(isEvident as boolean, hasSafety as boolean, hasOperational ?? false, hasCbm ?? false)
    : null;

  return (
    <div className="card mt-6 overflow-hidden">
      <div className="border-b border-slate-200 bg-brand-50 px-5 py-3 text-sm font-semibold text-brand-800">
        🌳 شجرة قرار RCM — أربع أسئلة نعم / لا نحو التكتيك الأمثل
      </div>

      <div className="space-y-4 p-5">
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs font-semibold text-ink-500">جرّب سيناريو جاهز:</span>
          {presets.map((p) => (
            <button
              key={p.id}
              type="button"
              onClick={() => applyPreset(p.id)}
              className="cursor-pointer rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-xs font-semibold text-ink-700 transition hover:bg-slate-50"
            >
              {p.name}
            </button>
          ))}
          <button
            type="button"
            onClick={reset}
            className="mr-auto cursor-pointer rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-xs font-semibold text-ink-500 transition hover:bg-slate-50"
          >
            البدء من جديد
          </button>
        </div>

        {step === 1 && (
          <div className="rounded-xl border border-slate-200 p-4">
            <p className="text-xs font-bold text-ink-500">الخطوة 1 من 4</p>
            <p className="mt-1 text-sm font-bold text-ink-800">
              هل نمط الفشل ظاهر للمشغلين في ظروف التشغيل العادية؟
            </p>
            <div className="mt-3 grid gap-2 sm:grid-cols-2">
              <button
                type="button"
                onClick={() => { setIsEvident(true); setStep(2); }}
                className="cursor-pointer rounded-lg bg-teal-600 px-4 py-2.5 text-sm font-bold text-white transition hover:bg-teal-700"
              >
                نعم — عطل ظاهر (Evident)
              </button>
              <button
                type="button"
                onClick={() => { setIsEvident(false); setStep(2); }}
                className="cursor-pointer rounded-lg bg-slate-600 px-4 py-2.5 text-sm font-bold text-white transition hover:bg-slate-700"
              >
                لا — عطل مخفي (Hidden)
              </button>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="rounded-xl border border-slate-200 p-4">
            <p className="text-xs font-bold text-ink-500">الخطوة 2 من 4</p>
            <p className="mt-1 text-sm font-bold text-ink-800">
              هل يسبب الفشل إصابة أو وفاة أو مخالفة بيئية؟
            </p>
            <div className="mt-3 grid gap-2 sm:grid-cols-2">
              <button
                type="button"
                onClick={() => { setHasSafety(true); setStep(isEvident ? 4 : 5); }}
                className="cursor-pointer rounded-lg bg-rose-600 px-4 py-2.5 text-sm font-bold text-white transition hover:bg-rose-700"
              >
                نعم — يمس السلامة أو البيئة
              </button>
              <button
                type="button"
                onClick={() => { setHasSafety(false); setStep(isEvident ? 3 : 5); }}
                className="cursor-pointer rounded-lg bg-teal-600 px-4 py-2.5 text-sm font-bold text-white transition hover:bg-teal-700"
              >
                لا — بلا أثر على السلامة
              </button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="rounded-xl border border-slate-200 p-4">
            <p className="text-xs font-bold text-ink-500">الخطوة 3 من 4</p>
            <p className="mt-1 text-sm font-bold text-ink-800">
              هل يؤثر العطل على الإنتاج أو الجودة أو يسبب خسائر تشغيلية مباشرة؟
            </p>
            <div className="mt-3 grid gap-2 sm:grid-cols-2">
              <button
                type="button"
                onClick={() => { setHasOperational(true); setStep(4); }}
                className="cursor-pointer rounded-lg bg-amber-600 px-4 py-2.5 text-sm font-bold text-white transition hover:bg-amber-700"
              >
                نعم — خسائر إنتاجية
              </button>
              <button
                type="button"
                onClick={() => { setHasOperational(false); setStep(5); }}
                className="cursor-pointer rounded-lg bg-slate-600 px-4 py-2.5 text-sm font-bold text-white transition hover:bg-slate-700"
              >
                لا — تكلفة إصلاح فقط
              </button>
            </div>
          </div>
        )}

        {step === 4 && (
          <div className="rounded-xl border border-slate-200 p-4">
            <p className="text-xs font-bold text-ink-500">الخطوة 4 من 4</p>
            <p className="mt-1 text-sm font-bold text-ink-800">
              هل للعطل نافذة تدهور (P-F Interval) تتيح كشفه بالاهتزاز أو الحرارة أو الزيت؟
            </p>
            <div className="mt-3 grid gap-2 sm:grid-cols-2">
              <button
                type="button"
                onClick={() => { setHasCbm(true); setStep(5); }}
                className="cursor-pointer rounded-lg bg-teal-600 px-4 py-2.5 text-sm font-bold text-white transition hover:bg-teal-700"
              >
                نعم — المراقبة المشروطة مجدية
              </button>
              <button
                type="button"
                onClick={() => { setHasCbm(false); setStep(5); }}
                className="cursor-pointer rounded-lg bg-slate-600 px-4 py-2.5 text-sm font-bold text-white transition hover:bg-slate-700"
              >
                لا — مفاجئ أو غير قابل للقياس
              </button>
            </div>
          </div>
        )}

        {step === 5 && r && (
          <div className={`rounded-xl p-4 text-sm ring-2 ${r.color}`}>
            <p className="font-bold">التكتيك الموصى به: {r.tactic}</p>
            <p className="mt-1 text-xs font-normal opacity-90">{r.text}</p>
            <p className="mt-2 text-xs font-normal opacity-70" dir="ltr">
              {isEvident ? 'Evident' : 'Hidden'} • {hasSafety ? 'Safety' : 'No safety'} • {hasOperational ? 'Operational' : 'Non-operational'}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
