import { useState } from 'react';

type EducationLevel = 'none' | 'any-bachelor' | 'fm-bachelor' | 'fm-master';

const educationOptions: { value: EducationLevel; label: string }[] = [
  { value: 'none', label: 'دون بكالوريوس (أي مستوى تعليمي آخر)' },
  { value: 'any-bachelor', label: 'بكالوريوس/دبلوم عالٍ في غير إدارة المنشآت' },
  { value: 'fm-bachelor', label: 'بكالوريوس في إدارة المنشآت (FM)' },
  { value: 'fm-master', label: 'ماجستير في إدارة المنشآت (FM)' },
];

const requirement = {
  'fm-bachelor': 36,
  'fm-master': 36,
  'none': 60,
  'any-bachelor': 60,
} as const;

function isFmDegree(level: EducationLevel): boolean {
  return level === 'fm-bachelor' || level === 'fm-master';
}

export default function EligibilityCalculator() {
  const [education, setEducation] = useState<EducationLevel>('any-bachelor');
  const [months, setMonths] = useState(30);

  const needed = requirement[education];
  const eligible = months >= needed;
  const gap = needed - months;

  return (
    <div className="card mt-6 overflow-hidden">
      <div className="border-b border-slate-200 bg-brand-50 px-5 py-3 text-sm font-semibold text-brand-800">
        🧮 حاسبة الأهلية — شهادة CFM (وفق كتيب IFMA الرسمي 2026)
      </div>

      <div className="grid gap-6 p-5 sm:grid-cols-2">
        <div>
          <label className="block text-sm font-semibold text-ink-900">1. مستواك التعليمي</label>
          <div className="mt-2 grid gap-2">
            {educationOptions.map((opt) => (
              <label
                key={opt.value}
                className={`flex cursor-pointer items-center gap-3 rounded-xl border px-4 py-2.5 text-sm transition ${
                  education === opt.value
                    ? 'border-brand-500 bg-brand-50 text-brand-800'
                    : 'border-slate-200 bg-white text-ink-600 hover:border-slate-300'
                }`}
              >
                <input
                  type="radio"
                  name="education"
                  className="accent-teal-600"
                  checked={education === opt.value}
                  onChange={() => setEducation(opt.value)}
                />
                {opt.label}
              </label>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold text-ink-900">2. خبرتك العملية في إدارة المنشآت</label>
          <div className="mt-2 flex items-center gap-3">
            <input
              type="range"
              min="0"
              max="120"
              value={months}
              onChange={(e) => setMonths(Number(e.target.value))}
              className="w-full accent-teal-600"
            />
            <span className="chip bg-brand-100 text-brand-700" dir="ltr">{months} شهراً</span>
          </div>
          <p className="mt-2 text-sm text-ink-600">الشرط المطلوب لمسارك الحالي: <strong dir="ltr" className="text-brand-700">{needed} شهراً</strong> ({Math.round(needed / 12)} سنوات)</p>

          <div className="mt-3 h-3 overflow-hidden rounded-full bg-slate-100">
            <div
              className="h-full rounded-full transition-all duration-300"
              style={{
                width: `${Math.min(100, (months / needed) * 100)}%`,
                background: months >= needed ? 'linear-gradient(to left, #059669, #34d399)' : 'linear-gradient(to left, #d97706, #fbbf24)',
              }}
            />
          </div>
        </div>
      </div>

      <div className={`mx-5 mb-5 rounded-xl p-4 text-sm leading-relaxed ${eligible ? 'bg-brand-50 text-brand-800' : 'bg-rose-50 text-rose-800'}`}>
        {eligible ? (
          <p>
            <span className="font-bold">✓ أنت مستوفي شرط الخيار {isFmDegree(education) ? 'الأول' : 'الثاني'} حالياً.</span>
            {' '}تستطيع الآن التقديم للامتحان عبر منصة IFMA، ثم حجز جلسة Prometric.
          </p>
        ) : (
          <p>
            <span className="font-bold">التقييم:</span> في مسارك الحالي
            {isFmDegree(education)
              ? ' (درجة FM + 3 سنوات)'
              : ' (أي تعليم آخر + 5 سنوات)'}
            {' '}ينقصك <strong dir="ltr" className="font-bold">{gap} شهراً</strong> من الخبرة. تنبيه: التدريب الداخلي لا يُحتسب ضمن هذه الخبرة.
          </p>
        )}
        <p className="mt-2 text-xs opacity-80">لمزيد من الدقة راجع نموذج الأهلية في موقع IFMA الرسمي عند تقديم طلبك، فالأهلية تُقيَّم وقت التقديم.</p>
      </div>
    </div>
  );
}