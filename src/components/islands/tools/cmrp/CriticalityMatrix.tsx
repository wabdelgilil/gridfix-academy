import { useState } from 'react';

const probabilityLabels = ['نادر جداً', 'غير محتمل', 'محتمل', 'مرتفع', 'مستمر ومتكرر'];
const probabilityHints = [
  'أقل من مرة كل 5 إلى 10 سنوات',
  'مرة كل 2 إلى 5 سنوات',
  'مرة سنوياً',
  'مرة كل بضعة أشهر',
  'يتكرر شهرياً أو أسبوعياً',
];
const consequenceLabels = ['ضئيل', 'بسيط', 'متوسط', 'كبير وحرج', 'كارثي'];
const consequenceHints = [
  'لا توقف للإنتاج ولا أثر على السلامة',
  'توقف جزئي محدود وتكلفة إصلاح منخفضة',
  'توقف خط لعدة ساعات وتكلفة متوسطة',
  'توقف خط كامل لأيام وتكلفة إصلاح باهظة',
  'خسائر بشرية أو حريق كبير أو إغلاق المنشأة',
];

function classify(probability: number, consequence: number) {
  const score = probability * consequence;
  if (consequence === 5 || score >= 15)
    return {
      assetClass: 'A',
      title: 'فئة A: أصل حرج للغاية',
      bg: 'bg-rose-50',
      text: 'text-rose-800',
      ring: 'ring-rose-500',
      strategy: 'صيانة تنبؤية مشروطة متقدمة (CBM): اهتزازات وزيوت وحرارة مستمرة، مع دراسة إضافة نظام بديل (Redundancy) وتطبيق الصيانة الدقيقة.',
      spares: 'قطع غيار تأمينية مخصصة محجوزة في المستودع (Insurance Spares) مع مراقبة صلاحية التخزين.',
    };
  if (score <= 5 && consequence <= 2)
    return {
      assetClass: 'C',
      title: 'فئة C: أصل غير حرج',
      bg: 'bg-slate-50',
      text: 'text-slate-800',
      ring: 'ring-slate-500',
      strategy: 'مرشح مثالي للتشغيل حتى العطل (Run to Failure) كقرار هندسي واعٍ، أو فحص بصري بسيط بتكلفة لا تذكر.',
      spares: 'لا يُجمَّد رأس المال في التخزين — الشراء عند الطلب من السوق المحلي (Just-in-Time).',
    };
  return {
    assetClass: 'B',
    title: 'فئة B: أصل أساسي متوسط الحرجية',
    bg: 'bg-amber-50',
    text: 'text-amber-800',
    ring: 'ring-amber-500',
    strategy: 'صيانة وقائية دورية (PM) مع تشحيم منتظم وفحص اهتزازات محمول شهرياً، وتدخل مشروط عند توفر المؤشرات.',
    spares: 'مخزون قياسي بنظام الحد الأدنى والأعلى (Min/Max) مع استعواض دوري.',
  };
}

function cellStyle(probability: number, consequence: number) {
  const score = probability * consequence;
  if (consequence === 5 || score >= 15) return 'bg-rose-100 text-rose-800';
  if (score >= 6) return 'bg-amber-100 text-amber-800';
  return 'bg-slate-100 text-slate-700';
}

export default function CriticalityMatrix() {
  const [probability, setProbability] = useState(3);
  const [consequence, setConsequence] = useState(4);

  const score = probability * consequence;
  const r = classify(probability, consequence);

  return (
    <div className="card mt-6 overflow-hidden">
      <div className="border-b border-slate-200 bg-brand-50 px-5 py-3 text-sm font-semibold text-brand-800">
        🎯 مصفوفة الحرجية 5×5 — الاحتمالية × العواقب
      </div>

      <div className="space-y-4 p-5">
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className="mb-1.5 block text-sm font-semibold text-ink-700">
              احتمالية الفشل (Probability)
            </label>
            <select
              value={probability}
              onChange={(e) => setProbability(Number(e.target.value))}
              className="w-full cursor-pointer rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-ink-800"
            >
              {probabilityLabels.map((label, i) => (
                <option key={label} value={i + 1}>
                  {i + 1} — {label}: {probabilityHints[i]}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="mb-1.5 block text-sm font-semibold text-ink-700">
              شدة العواقب (Consequence)
            </label>
            <select
              value={consequence}
              onChange={(e) => setConsequence(Number(e.target.value))}
              className="w-full cursor-pointer rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-ink-800"
            >
              {consequenceLabels.map((label, i) => (
                <option key={label} value={i + 1}>
                  {i + 1} — {label}: {consequenceHints[i]}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div dir="ltr">
          <p className="mb-1 rounded bg-slate-100 px-3 py-2 text-center text-xs text-ink-500">
            احتمالية الفشل (أفقياً) × شدة العواقب (رأسياً) — انقر أي خلية لتحديدها
          </p>
          <div className="grid grid-cols-5 gap-1.5">
            {Array.from({ length: 25 }, (_, idx) => {
              const row = 4 - Math.floor(idx / 5);
              const col = (idx % 5) + 1;
              const pVal = col;
              const cVal = row + 1;
              const cellScore = pVal * cVal;
              const isSelected = probability === pVal && consequence === cVal;
              return (
                <button
                  key={idx}
                  type="button"
                  onClick={() => {
                    setProbability(pVal);
                    setConsequence(cVal);
                  }}
                  className={`flex h-12 cursor-pointer flex-col items-center justify-center rounded-lg text-xs font-bold transition ${
                    isSelected ? 'ring-2 ring-ink-900 ring-offset-2' : ''
                  } ${cellStyle(pVal, cVal)}`}
                  title={`${pVal} × ${cVal}`}
                >
                  <span>{cellScore}</span>
                  <span className="text-[9px] opacity-75">
                    {cVal === 5 || cellScore >= 15 ? 'A' : cellScore >= 6 ? 'B' : 'C'}
                  </span>
                </button>
              );
            })}
          </div>
          <div className="mt-2 flex flex-wrap items-center justify-center gap-3 text-[11px] font-bold text-ink-600">
            <span className="flex items-center gap-1">
              <span className="h-3 w-3 rounded bg-rose-600" /> فئة A: حرج (15–25 أو عواقب 5)
            </span>
            <span className="flex items-center gap-1">
              <span className="h-3 w-3 rounded bg-amber-500" /> فئة B: متوسط (6–12)
            </span>
            <span className="flex items-center gap-1">
              <span className="h-3 w-3 rounded bg-slate-400" /> فئة C: غير حرج (1–5)
            </span>
          </div>
        </div>

        <div className={`rounded-xl p-4 text-sm ring-2 ${r.ring} ${r.bg} ${r.text}`}>
          <p className="font-bold">
            درجة الخطر: <strong dir="ltr">{score} / 25</strong> — التصنيف:{' '}
            <strong>{r.title}</strong>
          </p>
          <p className="mt-2 text-xs font-normal opacity-90">
            <strong>التكتيك:</strong> {r.strategy}
          </p>
          <p className="mt-1 text-xs font-normal opacity-90">
            <strong>قطع الغيار:</strong> {r.spares}
          </p>
          <p className="mt-1 text-xs font-normal opacity-70">
            قاعدة ذهبية: أي عطل يمس السلامة أو البيئة (عواقب 5) يصنف فئة A تلقائياً مهما كانت ندرة احتماله.
          </p>
        </div>
      </div>
    </div>
  );
}
