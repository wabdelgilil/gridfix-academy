import { useState } from 'react';

type Step = 'plan' | 'do' | 'check' | 'act';

const steps: { id: Step; num: string; label: string; hint: string }[] = [
  { id: 'plan', num: '1', label: 'خطط (Plan)', hint: 'عرّف المشكلة بالأرقام، وحدد هدفاً ومؤشراً وإجراءات ومسؤولاً.' },
  { id: 'do', num: '2', label: 'نفذ (Do)', hint: 'جرّب الحل نطاقاً صغيراً، وراقب التنفيذ وسجّل الملاحظات.' },
  { id: 'check', num: '3', label: 'افحص (Check)', hint: 'قارن النتيجة بالهدف وبالقياس السابق، والقط جانب الانحراف.' },
  { id: 'act', num: '4', label: 'استعد (Act)', hint: 'اعتمد لو نجح، أو عدّل والكرار الدورة، ثم ثبّت في الإجراء القياسي.' },
];

export default function PDCALab() {
  const [step, setStep] = useState<Step>('plan');
  const [fields, setFields] = useState<Record<Step, string>>({ plan: '', do: '', check: '', act: '' });
  const [history, setHistory] = useState<string[]>([]);

  const set = (s: Step, v: string) => setFields((prev) => ({ ...prev, [s]: v }));

  const idx = steps.findIndex((s) => s.id === step);
  const canNext = fields[step].trim();

  const finish = () => {
    const line = `دورة: مشكلة «${fields.plan.split('\n')[0] || 'موجبة'}» → «${fields.act.split('\n')[0] || 'إجراء'}»`;
    setHistory((h) => [...h, line]);
    setFields({ plan: '', do: '', check: '', act: '' });
    setStep('plan');
  };

  return (
    <div className="card mt-6 overflow-hidden">
      <div className="border-b border-slate-200 bg-brand-50 px-5 py-3 text-sm font-semibold text-brand-800">
        🔁 مستكشف PDCA — خطط، نفذ، افحص، استعد
      </div>

      <div className="space-y-4 p-5">
        <div className="flex flex-wrap gap-1">
          {steps.map((s) => (
            <button
              key={s.id}
              type="button"
              onClick={() => setStep(s.id)}
              className={`cursor-pointer rounded-full px-3 py-1.5 text-sm font-semibold transition ${
                step === s.id ? 'bg-brand-600 text-white' : 'bg-slate-100 text-ink-500 hover:bg-slate-200'
              }`}
            >
              {s.num} {s.label}
            </button>
          ))}
        </div>

        <p className="text-sm text-ink-600">{steps[idx].hint}</p>

        <textarea
          value={fields[step]}
          onChange={(e) => set(step, e.target.value)}
          rows={4}
          placeholder={`أدخل مضمون مرحلة «${steps[idx].label}»`}
          className="w-full resize-y rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-ink-800"
        />

        <div className="flex flex-wrap items-center gap-2">
          {idx > 0 && (
            <button
              type="button"
              onClick={() => setStep(steps[idx - 1].id)}
              className="cursor-pointer rounded-lg bg-slate-200 px-4 py-2 text-sm font-semibold text-ink-700 hover:bg-slate-300"
            >
              → السابق
            </button>
          )}
          {idx < steps.length - 1 ? (
            <button
              type="button"
              disabled={!canNext}
              onClick={() => setStep(steps[idx + 1].id)}
              className="cursor-pointer rounded-lg bg-brand-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-brand-700 disabled:cursor-not-allowed disabled:opacity-40"
            >
              ← التالي
            </button>
          ) : (
            <button
              type="button"
              disabled={!canNext}
              onClick={finish}
              className="cursor-pointer rounded-lg bg-emerald-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-emerald-700 disabled:cursor-not-allowed disabled:opacity-40"
            >
              سجّل الدورة ثم ابدأ أخرى
            </button>
          )}
        </div>

        {history.length > 0 && (
          <div className="rounded-xl bg-slate-50 p-3">
            <p className="mb-1 text-xs font-bold text-ink-500">سجل دوراتك المكتملة:</p>
            <ul className="list-inside list-disc space-y-1 text-sm text-ink-700">
              {history.map((h, i) => (
                <li key={i}>{h}</li>
              ))}
            </ul>
            <p className="mt-2 text-xs text-teal-700">استمرار الدورات المتراكمة يحقق تحسيناً مستمراً ويُغلق في إجراءات قياسية موثقة.</p>
          </div>
        )}
      </div>
    </div>
  );
}