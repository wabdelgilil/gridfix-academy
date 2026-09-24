import { useState } from 'react';

interface Factor {
  id: string;
  category: string;
  question: string;
  yesScore: number;
  noScore: number;
}

const FACTORS: Factor[] = [
  { id: 'f1', category: 'المالية', question: 'هل تكلفة الصيانة تفوق 60% من تكلفة شراء أصل جديد مماثل؟', yesScore: 3, noScore: 0 },
  { id: 'f2', category: 'المالية', question: 'هل القيمة المتبقية للأصل حالياً تقل عن 15% من سعر الشراء الأصلي؟', yesScore: 2, noScore: 0 },
  { id: 'f3', category: 'المالية', question: 'هل تكلفة الإطالة (التجديد) أقل من 50% من تكلفة الشراء الجديد؟', yesScore: 2, noScore: 0 },
  { id: 'f4', category: 'الفنية', question: 'هل الهيكل الأساسي للأصل لا يزال سليماً وقابلاً للعمل؟', yesScore: 3, noScore: 0 },
  { id: 'f5', category: 'الفنية', question: 'هل تتوفر قطع الغيار والدعم الفني للأصل الحالي؟', yesScore: 2, noScore: 0 },
  { id: 'f6', category: 'الفنية', question: 'هل الأصل يلبي المتطلبات التشغيلية الحالية للمصنع؟', yesScore: 2, noScore: 0 },
  { id: 'f7', category: 'البيئية', question: 'هل التخلص من الأصل يتطلب إجراءات بيئية مكلفة؟', yesScore: 2, noScore: 0 },
  { id: 'f8', category: 'البيئية', question: 'هل يمكن إعادة تدوير مواد الأصل واسترجاع جزء من قيمته؟', yesScore: 1, noScore: 0 },
];

const DECISIONS = [
  { min: 0, max: 5, label: 'تخلص من الأصل', color: 'bg-rose-50 text-rose-800 ring-rose-500', icon: '🗑️', description: 'الأصل غير مجدٍ اقتصادياً ولا فنياً. التخلص أو البيع في السوق الثانوي هو الخيار الأمثل.' },
  { min: 6, max: 9, label: 'قيّم الإطالة بحذر', color: 'bg-amber-50 text-amber-800 ring-amber-500', icon: '⚠️', description: 'النتيجة متوسطة. يحتاج تقييم تفصيلي للخيارات: تحديث جزئي، بيع، أو إطالة مع تحسينات.' },
  { min: 10, max: 12, label: 'أعد الأصل للخدمة', color: 'bg-teal-50 text-teal-800 ring-teal-500', icon: '🔄', description: 'الأصل لا يزال يحتمل التجديد. تكلفة الإطالة أقل من الشراء وبفارق ملحوظ.' },
];

export default function DisposalDecisionList() {
  const [answers, setAnswers] = useState<Record<string, boolean | null>>(
    Object.fromEntries(FACTORS.map((f) => [f.id, null]))
  );

  const setAnswer = (id: string, val: boolean) => setAnswers((prev) => ({ ...prev, [id]: val }));

  const score = FACTORS.reduce((sum, f) => {
    const a = answers[f.id];
    if (a === null) return sum;
    return sum + (a ? f.yesScore : f.noScore);
  }, 0);

  const maxScore = FACTORS.reduce((sum, f) => sum + f.yesScore, 0);
  const percentage = Math.round((score / maxScore) * 100);

  const decision = DECISIONS.find((d) => score >= d.min && score <= d.max) ?? DECISIONS[0];

  const answeredCount = Object.values(answers).filter((v) => v !== null).length;
  const allAnswered = answeredCount === FACTORS.length;

  const categories = [...new Set(FACTORS.map((f) => f.category))];

  return (
    <div className="card mt-6 overflow-hidden">
      <div className="border-b border-slate-200 bg-brand-50 px-5 py-3 text-sm font-semibold text-brand-800">
        📋 قائمة قرار التخلص — قيّم خيارات التعامل مع أصل في نهاية عمره
      </div>

      <div className="space-y-4 p-5">
        <div className="flex items-center gap-3">
          <div className="h-3 flex-1 overflow-hidden rounded-full bg-slate-200">
            <div
              className="h-full rounded-full bg-brand-500 transition-all duration-500"
              style={{ width: `${percentage}%` }}
            />
          </div>
          <span className="text-sm font-bold text-ink-700" dir="ltr">
            {score}/{maxScore} ({percentage}%)
          </span>
        </div>

        {allAnswered && (
          <div className={`rounded-xl p-4 text-sm ring-2 ${decision.color}`}>
            <p className="font-bold">
              {decision.icon} القرار المقترح: {decision.label}
            </p>
            <p className="mt-1 text-xs font-normal opacity-90">{decision.description}</p>
          </div>
        )}

        <div className="space-y-4">
          {categories.map((cat) => (
            <div key={cat}>
              <h4 className="mb-2 text-xs font-bold text-ink-500">{cat}</h4>
              <div className="space-y-2">
                {FACTORS.filter((f) => f.category === cat).map((factor) => (
                  <div
                    key={factor.id}
                    className={`rounded-xl border p-3 transition ${
                      answers[factor.id] !== null
                        ? 'border-brand-200 bg-brand-50'
                        : 'border-slate-200 bg-white'
                    }`}
                  >
                    <p className="mb-2 text-sm font-semibold text-ink-800">{factor.question}</p>
                    <div className="flex gap-2">
                      <button
                        type="button"
                        onClick={() => setAnswer(factor.id, true)}
                        className={`cursor-pointer rounded-lg px-4 py-1.5 text-xs font-bold transition ${
                          answers[factor.id] === true
                            ? 'bg-emerald-600 text-white'
                            : 'bg-slate-100 text-ink-600 hover:bg-slate-200'
                        }`}
                      >
                        نعم
                      </button>
                      <button
                        type="button"
                        onClick={() => setAnswer(factor.id, false)}
                        className={`cursor-pointer rounded-lg px-4 py-1.5 text-xs font-bold transition ${
                          answers[factor.id] === false
                            ? 'bg-rose-600 text-white'
                            : 'bg-slate-100 text-ink-600 hover:bg-slate-200'
                        }`}
                      >
                        لا
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
