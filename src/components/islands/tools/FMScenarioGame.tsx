import { useState } from 'react';

interface Scenario {
  time: string;
  situation: string;
  options: string[];
  answerIndex: number;
  domain: string;
  why: string;
}

const scenarios: Scenario[] = [
  {
    time: '7:00 صباحاً',
    situation: 'بلاغ أن مصعداً متوقفاً بين الطوابق والموظفون سيصلون خلال 30 دقيقة.',
    options: ['التشغيل والصيانة', 'الماليات', 'التواصل', 'الاستدامة'],
    answerIndex: 0,
    domain: 'التشغيل والصيانة',
    why: 'استمرارية الأنظمة (المصاعد) هي قلب المحطة 1 — التشغيل والصيانة (Operations & Maintenance).',
  },
  {
    time: '9:00 صباحاً',
    situation: 'اجتماع مع المالية لبناء ميزانية تشغيل العام القادم وتبرير مجموعات الإنفاق.',
    options: ['العقارات', 'البيانات والتقنية', 'الماليات والأعمال', 'العوامل البشرية'],
    answerIndex: 2,
    domain: 'الماليات والأعمال',
    why: 'بناء الميزانية وتحليل الانحرافات مجال Finance & Business — المحطة 3 في الكورس.',
  },
  {
    time: '11:00 صباحاً',
    situation: 'قسم تكنولوجيا المعلومات يشتكي من حرارة غرفة السيرفرات وفشل محتمل للأجهزة.',
    options: ['القائمة والاستراتيجية', 'التشغيل والصيانة', 'الاستدامة', 'الجودة'],
    answerIndex: 1,
    domain: 'التشغيل والصيانة',
    why: 'التكييف الدقيق للغرف الحرجة إدارة تشغيلية — لكن القرار قد يتطلب أيضاً الاستدامة لاحقاً.',
  },
  {
    time: '2:00 ظهراً',
    situation: 'تخطيط نقل قسم إداري كامل إلى مبنى مجاور: مساحات، مكاتب، وخدمات.',
    options: ['العقارات وتخطيط المساحات', 'الصحة والسلامة', 'البيانات', 'الطوارئ'],
    answerIndex: 0,
    domain: 'العقارات وتخطيط المساحات',
    why: 'إدارة المساحات وحلقة حياة العقار هي المحطة 2 (Real Estate & Space Management).',
  },
  {
    time: '4:00 عصراً',
    situation: 'مراجعة استهلاك الطاقة الشهري واقتراح تخفيض الانبعاثات لتحقيق التزام بيئي.',
    options: ['العوامل البشرية', 'الاستدامة', 'التواصل', 'المشاريع'],
    answerIndex: 1,
    domain: 'الاستدامة',
    why: 'إدارة الطاقة والاستدامة البيئية مجال Environmental Stewardship & Sustainability — المحطة 7.',
  },
  {
    time: '5:30 مساءً',
    situation: 'إجراء تدريب إخلاء جزئي ومراجعة جاهزية خطة الطوارئ قبل موسم الأمطار.',
    options: ['الجودة', 'الماليات', 'السلامة والطوارئ', 'التقنية'],
    answerIndex: 2,
    domain: 'السلامة والطوارئ',
    why: 'الاستعداد للطوارئ واستمرارية الأعمال مجالان أساسيان — المحطتان 5 و6 في الكورس.',
  },
];

export default function FMScenarioGame() {
  const [current, setCurrent] = useState(0);
  const [picked, setPicked] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);

  const s = scenarios[current];
  const total = scenarios.length;

  const choose = (idx: number) => {
    if (picked !== null) return;
    setPicked(idx);
    if (idx === s.answerIndex) setScore((n) => n + 1);
  };

  const next = () => {
    if (current + 1 >= total) setDone(true);
    else {
      setCurrent((c) => c + 1);
      setPicked(null);
    }
  };

  if (done) {
    return (
      <div className="card mt-6 overflow-hidden">
        <div className="border-b border-slate-200 bg-brand-50 px-5 py-3 text-sm font-semibold text-brand-800">
          🧭 دليل مهام مدير المنشأة — النتيجة
        </div>
        <div className="p-6 text-center">
          <p className="text-3xl font-bold text-brand-700" dir="ltr">{score} / {total}</p>
          <p className="mt-2 text-sm text-ink-600">
            {score === total
              ? 'ممتاز! حدسك يدل على فهم يوم مدير المنشأة 🎉'
              : score >= 4
                ? 'جيد جداً — راجع مجالات المنشأة جيداً قبل التقدم.'
                : 'لا مشكلة، هذه بداية المسار. المحطات القادمة ستكوّن لك المنطق تدريجياً.'}
          </p>
          <button
            type="button"
            onClick={() => {
              setCurrent(0);
              setPicked(null);
              setScore(0);
              setDone(false);
            }}
            className="mt-5 rounded-xl bg-ink-900 px-6 py-2.5 text-sm font-semibold text-white cursor-pointer hover:bg-ink-600"
          >
            🔄 إعادة التجربة
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="card mt-6 overflow-hidden">
      <div className="flex items-center justify-between border-b border-slate-200 bg-slate-50 px-5 py-3">
        <span className="text-sm font-semibold text-ink-900">موقف {current + 1} من {total}</span>
        <span className="chip bg-amber-100 text-amber-800">⏰ {s.time}</span>
      </div>
      <div className="p-5">
        <p className="text-base font-medium leading-relaxed text-ink-900">{s.situation}</p>
        <p className="mt-4 text-sm font-semibold text-brand-700">أي مجال من مجالات إدارة المنشآت يتولى هذه المهمة؟</p>

        <div className="mt-4 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
          {s.options.map((option, idx) => {
            let cls = 'ring-1 ring-slate-200 hover:ring-brand-500';
            if (picked !== null) {
              if (idx === s.answerIndex) cls = 'bg-brand-50 ring-1 ring-brand-500';
              else if (picked === idx) cls = 'bg-rose-50 ring-1 ring-rose-400';
              else cls = 'opacity-40 ring-1 ring-slate-200';
            }
            return (
              <button
                type="button"
                key={idx}
                onClick={() => choose(idx)}
                disabled={picked !== null}
                className={`rounded-xl px-4 py-3 text-sm font-medium text-ink-700 transition ${cls} ${picked === null ? 'cursor-pointer bg-white' : 'cursor-default'}`}
              >
                {option}
              </button>
            );
          })}
        </div>

        {picked !== null && (
          <div className={`mt-4 rounded-xl p-4 text-sm leading-relaxed ${picked === s.answerIndex ? 'bg-brand-50 text-brand-800' : 'bg-rose-50 text-rose-800'}`}>
            <span className="font-bold">{picked === s.answerIndex ? '✓ صحيح — ' : '✗ الاختيار الأنسب: '}<span className="font-bold">{s.domain}</span></span>
            <span> {s.why}</span>
          </div>
        )}

        {picked !== null && (
          <button
            type="button"
            onClick={next}
            className="mt-5 rounded-xl bg-brand-600 px-6 py-2.5 text-sm font-semibold text-white cursor-pointer hover:bg-brand-700"
          >
            {current + 1 >= total ? 'عرض النتيجة 🏁' : 'التالي ←'}
          </button>
        )}
      </div>
    </div>
  );
}