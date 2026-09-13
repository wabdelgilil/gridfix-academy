import { useState } from 'react';

interface PlanItem {
  id: string;
  label: string;
  good: string;
}

const items: PlanItem[] = [
  { id: 'hazards', label: 'تحديد السيناريوهات الواجب الاستجابة لها', good: 'قائمة بالأخطار المحتملة (حريق، زلزال، انقطاع كهرباء، تهديد أمني) وبين كل خطر استجابة محددة.' },
  { id: 'alarm', label: 'أنظمة الاكتشاف والإنذار تعمل وتُختبر', good: 'أجهزة كشف وإنذار بسمعها الجميع، واختبار شهري موثّق لسلامة المنبهات.' },
  { id: 'roles', label: 'تعيين قادة الطوارئ والمنسقين', good: 'منسق طوارئ لكل منطقة مع بديل موثق، وأدوار ومسؤوليات مكتوبة لكل دور.' },
  { id: 'routes', label: 'مسارات إخلاء ونقاط تجمع محددة', good: 'مخارج مفتوحة مضاءة معلَّمة، ونقطة تجمع (Assembly Point) ظاهرة لكل طابق، وبدائل عند إغلاق مسار.' },
  { id: 'procedures', label: 'إجراءات الإخلاء والاحتماء والإغلاق', good: 'خطوات مكتوبة وقصيرة: إخلاء لمخارج، واحتماء في المكان (Shelter-in-Place) عند عاصفة، وإغلاق (Lockdown) عند تهديد أمني.' },
  { id: 'training', label: 'تدريب وتمارين دورية موثقة', good: 'تمارين إخلاء (Fire Drill) دورية، وسجل حضور، ومراجعة نتائج كل تمرين لتحسين الإجراء.' },
  { id: 'contacts', label: 'قوائم اتصال محدثة وقنوات التواصل', good: 'أرقام موظفين وطوارئ محدثة، وقناة إعلان رسمية واحدة يثق بها الجميع (لوحة إلكترونية أو رسائل جماعية).' },
  { id: 'special', label: 'خطط لذوي الاحتياجات الخاصة', good: 'قائمة بأسماء من يحتاج مساعدة في الإخلاء، ومُعينون لهم، وخطة إخلاء بدل المصاعد.' },
  { id: 'external', label: 'التنسيق مع الجهات الخارجية', good: 'أرقام الدفاع المدني والإسعاف، وجدولة تنسيق مزودي الخدمات (كهرباء، صيانة) لحالات الطوارئ.' },
  { id: 'review', label: 'مراجعة وتحديث دوري للخطة', good: 'تُراجع الخطة سنوياً وبعد كل تمرين أو حادث فعلي وتُحدَّث بياناتها وتُوزَّع النسخ الجديدة.' },
];

function verdict(pct: number) {
  if (pct >= 80) return { text: 'جاهزية قوية — راجع الخطة دورياً فقط', tone: 'ok' as const };
  if (pct >= 50) return { text: 'جاهزية متوسطة — قم بسد العناصر الناقصة المعلَّمة', tone: 'warn' as const };
  return { text: 'جاهزية ضعيفة — الخطة لا تقوم بواجبها بعد، ابدأ بالعناصر الحرجة', tone: 'bad' as const };
}

const toneClasses: Record<string, string> = {
  ok: 'bg-teal-50 text-teal-800 ring-teal-500',
  warn: 'bg-amber-50 text-amber-800 ring-amber-500',
  bad: 'bg-rose-50 text-rose-800 ring-rose-500',
};

export default function EmergencyPlanBuilder() {
  const [answers, setAnswers] = useState<Record<string, number>>({});

  const set = (id: string, value: number) => setAnswers((prev) => ({ ...prev, [id]: value }));

  const answeredCount = Object.keys(answers).length;
  const score = Object.values(answers).reduce((a, b) => a + b, 0);
  const maxScore = items.length * 2;
  const pct = Math.round((score / maxScore) * 100);
  const v = verdict(pct);

  return (
    <div className="card mt-6 overflow-hidden">
      <div className="border-b border-slate-200 bg-brand-50 px-5 py-3 text-sm font-semibold text-brand-800">
        🚨 باني خطة طوارئ — افحص جاهزية خطة الطوارئ التشغيلية
      </div>

      <div className="space-y-3 p-5">
        {items.map((item, i) => {
          const val = answers[item.id] ?? -1;
          return (
            <div
              key={item.id}
              className={`rounded-xl border p-3.5 transition ${
                val >= 0 ? 'border-brand-200 bg-brand-50/40' : 'border-slate-200'
              }`}
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="font-semibold text-ink-900">
                    {i + 1}. {item.label}
                  </p>
                  <p className="mt-0.5 text-xs text-ink-400">{item.good}</p>
                </div>
                <div className="flex shrink-0 gap-1.5">
                  {[0, 1, 2].map((v) => (
                    <button
                      key={v}
                      type="button"
                      onClick={() => set(item.id, v)}
                      className={`cursor-pointer rounded-lg px-3 py-1.5 text-xs font-semibold transition ${
                        val === v
                          ? v === 2
                            ? 'bg-teal-600 text-white'
                            : v === 1
                              ? 'bg-amber-500 text-white'
                              : 'bg-rose-600 text-white'
                          : 'bg-slate-100 text-ink-500 hover:bg-slate-200'
                      }`}
                    >
                      {v === 2 ? 'جاهز' : v === 1 ? 'جزئي' : 'ناقص'}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          );
        })}

        {answeredCount === items.length ? (
          <div className={`rounded-xl p-4 text-sm font-semibold ring-2 ${toneClasses[v.tone]}`}>
            جاهزية خطتك: <strong dir="ltr">{score}/{maxScore} ({pct}%)</strong> — {v.text}
            <p className="mt-1 text-xs font-normal opacity-80">
              هذا فحص ذاتي إرشادي يبني خطة كاملة العناصر، وليس تقييماً رسمياً للامتثال.
            </p>
          </div>
        ) : (
          <p className="rounded-xl bg-slate-100 p-3 text-center text-sm text-ink-400">
            أجب عن العناصر العشرة لتحصل على النتيجة.
          </p>
        )}
      </div>
    </div>
  );
}