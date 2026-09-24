import { useState } from 'react';

const presets = [
  { id: 'bearing', name: 'محمل العمود الرئيسي — تآكل ونقر في المجاري', s: 8, o: 6, d: 3 },
  { id: 'seal', name: 'مانع التسرب الميكانيكي — تصدع أسطح الحلقات', s: 10, o: 2, d: 4 },
  { id: 'prv', name: 'صمام الأمان — التصاق في وضع الإغلاق', s: 10, o: 2, d: 8 },
  { id: 'filter', name: 'فلتر سحب الهواء — انسداد تدريجي', s: 3, o: 7, d: 2 },
];

function actionFor(rpn: number, severity: number) {
  if (severity >= 9)
    return {
      level: 'أولوية سلامة مطلقة',
      cls: 'bg-rose-50 text-rose-800 ring-rose-500',
      text: 'الشدة 9 أو 10 تعني خطراً على الأرواح أو البيئة — عالج هذا النمط هندسياً أولاً مهما كان رقم RPN الإجمالي منخفضاً.',
    };
  if (rpn >= 150)
    return {
      level: 'تدخل فوري',
      cls: 'bg-rose-50 text-rose-800 ring-rose-500',
      text: 'خطر مرتفع ومتكرر وضعيف الكشف — أعد التصميم أو حسّن التزييت والمراقبة المشروطة فوراً.',
    };
  if (rpn >= 80)
    return {
      level: 'إجراء مخطط',
      cls: 'bg-amber-50 text-amber-800 ring-amber-500',
      text: 'خطر متوسط — ضعه في خطة الصيانة الوقائية والمراقبة الدورية القادمة.',
    };
  return {
    level: 'مراقبة روتينية',
    cls: 'bg-teal-50 text-teal-800 ring-teal-500',
    text: 'خطر منخفض — يكفي الفحص الدوري الروتيني وتسجيل القراءات.',
  };
}

export default function FMEATable() {
  const [presetId, setPresetId] = useState('bearing');
  const [severity, setSeverity] = useState(8);
  const [occurrence, setOccurrence] = useState(6);
  const [detection, setDetection] = useState(3);

  const rpn = severity * occurrence * detection;
  const a = actionFor(rpn, severity);

  function pick(id: string) {
    const p = presets.find((x) => x.id === id);
    if (!p) return;
    setPresetId(id);
    setSeverity(p.s);
    setOccurrence(p.o);
    setDetection(p.d);
  }

  return (
    <div className="card mt-6 overflow-hidden">
      <div className="border-b border-slate-200 bg-brand-50 px-5 py-3 text-sm font-semibold text-brand-800">
        🧪 جدول FMEA التفاعلي — الشدة × الحدوث × الكشف
      </div>

      <div className="space-y-4 p-5">
        <div>
          <label className="mb-1.5 block text-sm font-semibold text-ink-700">
            نمط الفشل (Failure Mode)
          </label>
          <select
            value={presetId}
            onChange={(e) => pick(e.target.value)}
            className="w-full cursor-pointer rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-ink-800"
          >
            {presets.map((p) => (
              <option key={p.id} value={p.id}>
                {p.name} (S={p.s} O={p.o} D={p.d})
              </option>
            ))}
          </select>
        </div>

        <div className="space-y-4">
          <div>
            <div className="mb-1 flex items-center justify-between text-sm font-semibold text-ink-700">
              <span>الشدة (Severity)</span>
              <span className="rounded border border-slate-300 px-2 py-0.5 font-mono text-sm font-bold" dir="ltr">
                {severity} / 10
              </span>
            </div>
            <input
              type="range"
              min="1"
              max="10"
              value={severity}
              onChange={(e) => setSeverity(Number(e.target.value))}
              className="w-full cursor-pointer accent-rose-600"
            />
            <p className="text-[11px] text-ink-500">
              1 = لا أثر — 10 = كارثة بشرية دون إنذار. الشدة 9 أو 10 أولوية مطلقة دائماً.
            </p>
          </div>

          <div>
            <div className="mb-1 flex items-center justify-between text-sm font-semibold text-ink-700">
              <span>معدل الحدوث (Occurrence)</span>
              <span className="rounded border border-slate-300 px-2 py-0.5 font-mono text-sm font-bold" dir="ltr">
                {occurrence} / 10
              </span>
            </div>
            <input
              type="range"
              min="1"
              max="10"
              value={occurrence}
              onChange={(e) => setOccurrence(Number(e.target.value))}
              className="w-full cursor-pointer accent-amber-500"
            />
            <p className="text-[11px] text-ink-500">
              1 = نادر للغاية — 10 = عطل مستمر وشبه حتمي.
            </p>
          </div>

          <div>
            <div className="mb-1 flex items-center justify-between text-sm font-semibold text-ink-700">
              <span>صعوبة الكشف (Detection)</span>
              <span className="rounded border border-slate-300 px-2 py-0.5 font-mono text-sm font-bold" dir="ltr">
                {detection} / 10
              </span>
            </div>
            <input
              type="range"
              min="1"
              max="10"
              value={detection}
              onChange={(e) => setDetection(Number(e.target.value))}
              className="w-full cursor-pointer accent-blue-600"
            />
            <p className="text-[11px] text-ink-500">
              1 = كشف فوري مضمون — 10 = عطل مخفي تماماً لا يُكتشف قبل وقوعه.
            </p>
          </div>
        </div>

        <div className={`rounded-xl p-4 text-sm ring-2 ${a.cls}`}>
          <p className="font-bold">
            رقم أولوية المخاطر: <strong dir="ltr">RPN = {severity} × {occurrence} × {detection} = {rpn}</strong> (من 1000) — {a.level}
          </p>
          <p className="mt-1 text-xs font-normal opacity-90">{a.text}</p>
          {severity >= 9 && (
            <p className="mt-1 text-xs font-bold opacity-100">
              تنبيه السلامة: لا تعتمد على الرقم الإجمالي وحده — نمط بشدة 10 ورقم 60 (10 × 2 × 3) يتقدم على نمط بشدة 3 ورقم 180 (3 × 10 × 6).
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
