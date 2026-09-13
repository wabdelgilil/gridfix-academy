import { useState } from 'react';

const likelihoodLabels = ['نادرة', 'مستبعدة', 'ممكنة', 'مرجحة', 'شبه مؤكدة'];
const severityLabels = ['تافهة', 'طفيفة', 'متوسطة', 'خطيرة', 'كارثية'];

function describe(score: number) {
  if (score <= 4)
    return {
      level: 'منخفض',
      bg: 'bg-teal-50',
      text: 'text-teal-800',
      ring: 'ring-teal-500',
      action: 'لا يتطلب إجراءً عاجلاً — يُراقَب ويُسجَّل في سجل المخاطر.',
    };
  if (score <= 9)
    return {
      level: 'متوسط',
      bg: 'bg-amber-50',
      text: 'text-amber-800',
      ring: 'ring-amber-500',
      action: 'يتطلب اتخاذ إجراء خلال فترات محددة — إجراءات إدارية أو وقاية شخصية.',
    };
  if (score <= 14)
    return {
      level: 'مرتفع',
      bg: 'bg-orange-50',
      text: 'text-orange-800',
      ring: 'ring-orange-500',
      action: 'يتطلب إجراءً فورياً — إجراء هندسي أو الاستبدال قبل المتابعة.',
    };
  return {
    level: 'حرج',
    bg: 'bg-rose-50',
    text: 'text-rose-800',
    ring: 'ring-rose-500',
    action: 'يُوقف العمل في المنطقة فوراً — لا يُستأنف إلا بعد القضاء على الخطر أو تغييره جذرياً.',
  };
}

function cellStyle(score: number) {
  if (score <= 4) return 'bg-teal-100 text-teal-800';
  if (score <= 9) return 'bg-amber-100 text-amber-800';
  if (score <= 14) return 'bg-orange-100 text-orange-800';
  return 'bg-rose-100 text-rose-800';
}

export default function RiskMatrix() {
  const [likelihood, setLikelihood] = useState(3);
  const [severity, setSeverity] = useState(3);

  const score = likelihood * severity;
  const r = describe(score);

  return (
    <div className="card mt-6 overflow-hidden">
      <div className="border-b border-slate-200 bg-brand-50 px-5 py-3 text-sm font-semibold text-brand-800">
        🎯 مصفوفة مخاطر 5×5 — الأرجحية × الشدة
      </div>

      <div className="space-y-4 p-5">
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className="mb-1.5 block text-sm font-semibold text-ink-700">
              الأرجحية (احتمال وقوع الحادث)
            </label>
            <select
              value={likelihood}
              onChange={(e) => setLikelihood(Number(e.target.value))}
              className="w-full cursor-pointer rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-ink-800"
            >
              {likelihoodLabels.map((label, i) => (
                <option key={label} value={i + 1}>
                  {i + 1} — {label}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="mb-1.5 block text-sm font-semibold text-ink-700">
              الشدة (حجم الضرر عند وقوع الحادث)
            </label>
            <select
              value={severity}
              onChange={(e) => setSeverity(Number(e.target.value))}
              className="w-full cursor-pointer rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-ink-800"
            >
              {severityLabels.map((label, i) => (
                <option key={label} value={i + 1}>
                  {i + 1} — {label}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div dir="ltr">
          <p className="mb-1 rounded bg-slate-100 px-3 py-2 text-center text-xs text-ink-500">
            أرجحية التكرار (رأسياً) × شدة الضرر (أفقياً)
          </p>
          <div className="grid grid-cols-5 gap-1.5">
            {Array.from({ length: 25 }, (_, idx) => {
              const row = 4 - Math.floor(idx / 5);
              const col = (idx % 5) + 1;
              const likelihoodVal = row + 1;
              const severityVal = col;
              const cellScore = likelihoodVal * severityVal;
              const isSelected = likelihood === likelihoodVal && severity === severityVal;
              return (
                <button
                  key={idx}
                  type="button"
                  onClick={() => {
                    setLikelihood(likelihoodVal);
                    setSeverity(severityVal);
                  }}
                  className={`flex h-12 cursor-pointer items-center justify-center rounded-lg text-xs font-bold transition ${
                    isSelected ? 'ring-2 ring-ink-900 ring-offset-2' : ''
                  } ${cellStyle(cellScore)}`}
                  title={`${likelihoodVal} × ${severityVal}`}
                >
                  {cellScore}
                </button>
              );
            })}
          </div>
        </div>

        <div className={`rounded-xl p-4 text-sm ring-2 ${r.ring} ${r.bg} ${r.text}`}>
          <p className="font-bold">
            درجة الخطر: <strong dir="ltr">{score} / 25</strong> — مستوى{' '}
            <strong>{r.level}</strong>
          </p>
          <p className="mt-1 text-xs font-normal opacity-90">{r.action}</p>
          <p className="mt-1 text-xs font-normal opacity-70">
            عدّل القيم أعلاه لمحاكاة سيناريوهات مختلفة، وجرّب نحو تقليل الأرجحية أو الشدة.
          </p>
        </div>
      </div>
    </div>
  );
}