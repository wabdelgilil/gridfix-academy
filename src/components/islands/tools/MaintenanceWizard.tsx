import { useState } from 'react';

interface Step {
  key: string;
  question: string;
  options: { text: string; value: string }[];
}

const steps: Step[] = [
  {
    key: 'criticality',
    question: 'ما مدى حرجية هذا الأصل لعمل المنشأة؟ (تخيّل توقفه وسط يوم عمل)',
    options: [
      { text: 'حرج للغاية — توقفه يوقف العمل أو يعرض السلامة للخطر', value: 'high' },
      { text: 'متوسط — يسبب إزعاجاً وضعف أداء لكنه ليس توقفاً كاملاً', value: 'med' },
      { text: 'منخفض — توقفه مؤقت وبسيط وبلا أثر كبير', value: 'low' },
    ],
  },
  {
    key: 'failurecost',
    question: 'كيف تقارن تكلفة الفشل المفاجئ بتكلفة الصيانة الوقائية؟',
    options: [
      { text: 'الفشل كارثي/باهظ التكلفة (توقف باهظ، أرواح، سمعة)', value: 'high' },
      { text: 'التكلفتان متقاربتان في المجمل', value: 'med' },
      { text: 'الفشل رخيص وسريع الإصلاح (مثل استبدال مروحة بسيطة)', value: 'low' },
    ],
  },
  {
    key: 'monitorable',
    question: 'هل يمكن قياس "حالة" الأصل بأجهزة (اهتزاز، حرارة، تحليل زيوت)؟',
    options: [
      { text: 'نعم — توجد حساسات عملية وتكلفتها معقولة', value: 'yes' },
      { text: 'لا — لا توجد طريقة عملية لقياس الحالة', value: 'no' },
    ],
  },
];

interface Verdict {
  strategy: string;
  icon: string;
  color: string;
  why: string;
}

function decide([criticality, failureCost, monitorable]: string[]): Verdict {
  const med = criticality === 'high' || failureCost === 'high';
  if (criticality === 'low' && (failureCost === 'low' || failureCost === 'med')) {
    return {
      strategy: 'Run-to-Failure (التشغيل حتى العطل)',
      icon: '🛌',
      color: 'bg-slate-100 text-slate-700 ring-slate-300',
      why: 'أصل غير حرج مع فشل رخيص: الإنفاق الإيجابي (وقائي) هنا لا يبرر نفسه، والخيار المُدار عمداً هو RTF.',
    };
  }
  if (med && monitorable === 'yes') {
    return {
      strategy: 'Predictive / Condition-Based (الصيانة التنبؤية)',
      icon: '📈',
      color: 'bg-brand-50 text-brand-800 ring-brand-500',
      why: 'أصل حرج تكلفة فشله عالية، وحالته قابلة للقياس: يُبقي الأجهزة تعمل، ويتنبأ بالعطل قبل الانهيار — الأبهج اقتصادياً.',
    };
  }
  return {
    strategy: 'Preventive (الصيانة الوقائية المجدولة)',
    icon: '🗓️',
    color: 'bg-amber-50 text-amber-800 ring-amber-400',
    why: 'الأصل يهم أو الفشل باهظ، لكن لا توجد طريقة عملية لقياس الحالة: الخيار الآمن هو الوقاية المجدولة بالدورات الزمنية.',
  };
}

export default function MaintenanceWizard() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [done, setDone] = useState(false);

  const choose = (value: string) => {
    const next = [...answers, value];
    if (step + 1 >= steps.length) {
      setAnswers(next);
      setDone(true);
    } else {
      setAnswers(next);
      setStep((s) => s + 1);
    }
  };

  const reset = () => {
    setStep(0);
    setAnswers([]);
    setDone(false);
  };

  if (done) {
    const verdict = decide(answers);
    return (
      <div className="card mt-6 overflow-hidden">
        <div className="border-b border-slate-200 bg-brand-50 px-5 py-3 text-sm font-semibold text-brand-800">
          🧭 معالج اختيار استراتيجية الصيانة — النتيجة
        </div>
        <div className="p-6 text-center">
          <div className={`inline-flex items-center gap-3 rounded-2xl px-6 py-4 ring-2 ${verdict.color}`}>
            <span className="text-3xl">{verdict.icon}</span>
            <span className="text-lg font-bold">{verdict.strategy}</span>
          </div>
          <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-ink-600">{verdict.why}</p>
          <button type="button" onClick={reset} className="mt-5 rounded-xl bg-ink-900 px-6 py-2.5 text-sm font-semibold text-white cursor-pointer hover:bg-ink-600">
            🔄 معالجة أصل آخر
          </button>
        </div>
      </div>
    );
  }

  const s = steps[step];
  const progress = Math.round((step / steps.length) * 100);

  return (
    <div className="card mt-6 overflow-hidden">
      <div className="border-b border-slate-200 bg-slate-50 px-5 py-3">
        <div className="flex items-center justify-between text-sm">
          <span className="font-semibold text-ink-900">سؤال {step + 1} من {steps.length}</span>
          <span className="chip bg-brand-100 text-brand-700">{progress}%</span>
        </div>
        <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-slate-100">
          <div className="h-full rounded-full bg-brand-600 transition-all" style={{ width: `${progress}%` }} />
        </div>
      </div>
      <div className="p-5">
        <p className="text-base font-medium leading-relaxed text-ink-900">{s.question}</p>
        <div className="mt-4 grid gap-2.5">
          {s.options.map((opt) => (
            <button
              type="button"
              key={opt.value}
              onClick={() => choose(opt.value)}
              className="cursor-pointer rounded-xl border border-slate-200 bg-white px-4 py-3 text-start text-sm font-medium text-ink-700 transition hover:border-brand-500 hover:bg-brand-50"
            >
              {opt.text}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}