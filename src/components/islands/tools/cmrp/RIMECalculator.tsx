import { useState } from 'react';

const ecrOptions = [
  { score: 10, label: 'معدة خانقة لا بديل لها' },
  { score: 8, label: 'أصل إنتاجي رئيسي (فئة A)' },
  { score: 6, label: 'أصل مهم مع بديل جزئي (فئة B)' },
  { score: 4, label: 'نظام خدمات مساعد' },
  { score: 2, label: 'معدة غير حرجة (فئة C)' },
  { score: 1, label: 'ملحق مكتبي ثانوي' },
];

const wcrOptions = [
  { score: 10, label: 'خطر داهم على السلامة أو البيئة' },
  { score: 9, label: 'توقف إنتاجي وشيك خلال ساعات' },
  { score: 8, label: 'صيانة وقائية أو تنبؤية دورية' },
  { score: 6, label: 'صيانة تصحيحية معتمدة ومخططة' },
  { score: 4, label: 'تحسين هندسي غير ملح' },
  { score: 2, label: 'دهان وتشطيب تجميلي' },
];

function tierOf(score: number) {
  if (score >= 72)
    return {
      name: 'الفئة 1: طوارئ وأولوية حتمية',
      hint: 'تدخل فوري — يجوز كسر الجدولة الأسبوعية لأن السلامة أو الإنتاج في خطر مباشر.',
      cls: 'bg-rose-50 text-rose-800 ring-rose-500',
    };
  if (score >= 48)
    return {
      name: 'الفئة 2: أولوية عليا',
      hint: 'تدرج فورا في خطة الأسبوع القادم — صيانة حرجة لا تحتمل التأخير.',
      cls: 'bg-orange-50 text-orange-800 ring-orange-500',
    };
  if (score >= 24)
    return {
      name: 'الفئة 3: أولوية متوسطة',
      hint: 'تدخل قائمة التراكم المخطط وتجدول خلال أسبوعين إلى 4 أسابيع.',
      cls: 'bg-amber-50 text-amber-800 ring-amber-500',
    };
  return {
    name: 'الفئة 4: أولوية متدنية',
    hint: 'عمل تجميلي غير ملح — يؤجل للعمرات الكبرى أو عند توفر فائض عمالة.',
    cls: 'bg-teal-50 text-teal-800 ring-teal-500',
  };
}

export default function RIMECalculator() {
  const [ecr, setEcr] = useState(9);
  const [wcr, setWcr] = useState(8);

  const score = ecr * wcr;
  const t = tierOf(score);

  return (
    <div className="card mt-6 overflow-hidden">
      <div className="border-b border-slate-200 bg-brand-50 px-5 py-3 text-sm font-semibold text-brand-800">
        ⚖️ حاسبة RIME — حرجية الأصل × أهمية العمل
      </div>

      <div className="space-y-4 p-5">
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className="mb-1.5 block text-sm font-semibold text-ink-700">
              حرجية المعدة (ECR) — من 1 إلى 10
            </label>
            <select
              value={ecr}
              onChange={(e) => setEcr(Number(e.target.value))}
              className="w-full cursor-pointer rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-ink-800"
            >
              {ecrOptions.map((o) => (
                <option key={o.score} value={o.score}>
                  {o.score} — {o.label}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="mb-1.5 block text-sm font-semibold text-ink-700">
              فئة العمل وأهميته (WCR) — من 1 إلى 10
            </label>
            <select
              value={wcr}
              onChange={(e) => setWcr(Number(e.target.value))}
              className="w-full cursor-pointer rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-ink-800"
            >
              {wcrOptions.map((o) => (
                <option key={o.score} value={o.score}>
                  {o.score} — {o.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        <p dir="ltr" className="rounded bg-slate-100 px-3 py-2 text-center font-mono text-xs text-ink-500">
          RIME = ECR × WCR = {ecr} × {wcr} = {score} / 100
        </p>

        <div className={`rounded-xl p-4 text-sm ring-2 ${t.cls}`}>
          <p className="font-bold">
            درجة الأولوية: <strong dir="ltr">{score} / 100</strong> — {t.name}
          </p>
          <p className="mt-1 text-xs font-normal opacity-90">{t.hint}</p>
          <p className="mt-1 text-xs font-normal opacity-70">
            جرّب: طلمبة الغلاية (9 × 8 = 72) مقابل مكيف مكتب (2 × 3 = 6) لترى كيف يحمي المؤشر الجدول من ضغط الصوت الأعلى.
          </p>
        </div>
      </div>
    </div>
  );
}
