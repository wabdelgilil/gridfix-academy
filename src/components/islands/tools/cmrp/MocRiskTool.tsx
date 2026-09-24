import { useState } from 'react';

const severityLabels = ['طفيفة', 'محدودة', 'متوسطة', 'كبرى', 'كارثية'];
const likelihoodLabels = ['نادر جداً', 'غير مرجح', 'محتمل', 'متكرر', 'شبه مؤكد'];

const mocItems = [
  {
    key: 'sameSpec',
    title: 'تطابق المواصفات الأصلية',
    desc: 'نفس الخامة والأبعاد والضغط والقدرة حسب التصميم الأصلي.',
  },
  {
    key: 'safetyReview',
    title: 'مراجعة مخاطر السلامة',
    desc: 'قيّم مهندس السلامة أثر التغيير على الأرواح والبيئة والمعدات.',
  },
  {
    key: 'drawings',
    title: 'تحديث المخططات والسجلات',
    desc: 'حُدّثت مخططات P&ID وسجلات الأصل في نظام CMMS.',
  },
  {
    key: 'training',
    title: 'تدريب المشغلين والفنيين',
    desc: 'دُرّب الطاقم على طريقة التشغيل والعزل الجديدة قبل الإطلاق.',
  },
  {
    key: 'signoff',
    title: 'اعتماد الإدارة المختصة',
    desc: 'وقّعت إدارتا الصيانة والعمليات والسلامة على التغيير كتابياً.',
  },
];

function riskReading(score: number) {
  if (score >= 15)
    return {
      level: 'حرج غير مقبول',
      cls: 'bg-rose-50 text-rose-800 ring-rose-500',
      action: 'يُحظر التشغيل — يلزم تحكم هندسي فوري يخفض الشدة أو الاحتمال قبل أي عمل.',
    };
  if (score >= 8)
    return {
      level: 'متوسط يدار بمبدأ ALARP',
      cls: 'bg-amber-50 text-amber-800 ring-amber-500',
      action: 'يُدار بأقل مستوى ممكن عملياً: تفتيش تنبؤي وتحليل سلامة العمل وعزل الطاقة.',
    };
  return {
    level: 'منخفض مقبول',
    cls: 'bg-teal-50 text-teal-800 ring-teal-500',
    action: 'يُدار بالإجراءات القياسية ومهمات الوقاية المعتادة مع المتابعة الدورية.',
  };
}

export default function MocRiskTool() {
  const [severity, setSeverity] = useState(3);
  const [likelihood, setLikelihood] = useState(3);
  const [checks, setChecks] = useState<Record<string, boolean>>({});

  const score = severity * likelihood;
  const r = riskReading(score);
  const done = mocItems.filter((i) => checks[i.key]).length;
  const isRik = checks.sameSpec === true;
  const mocComplete =
    checks.safetyReview && checks.drawings && checks.training && checks.signoff;

  function toggle(key: string) {
    setChecks((prev) => ({ ...prev, [key]: !prev[key] }));
  }

  return (
    <div className="card mt-6 overflow-hidden">
      <div className="border-b border-slate-200 bg-brand-50 px-5 py-3 text-sm font-semibold text-brand-800">
        🛡️ أداة تقييم مخاطر MOC — مصفوفة الخطر ومدقق التغيير
      </div>

      <div className="space-y-5 p-5">
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className="mb-1.5 block text-sm font-semibold text-ink-700">
              شدة العواقب (Severity)
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
          <div>
            <label className="mb-1.5 block text-sm font-semibold text-ink-700">
              احتمالية الحدوث (Likelihood)
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
        </div>

        <div className={`rounded-xl p-4 text-sm ring-2 ${r.cls}`}>
          <p className="font-bold">
            درجة الخطر: <strong dir="ltr">{score} / 25</strong> — مستوى {r.level}
          </p>
          <p className="mt-1 text-xs font-normal opacity-90">{r.action}</p>
        </div>

        <div>
          <p className="mb-2 text-sm font-bold text-ink-700">
            قائمة التحقق من التغيير ({done} من {mocItems.length})
          </p>
          <div className="space-y-2">
            {mocItems.map((item) => (
              <button
                key={item.key}
                type="button"
                onClick={() => toggle(item.key)}
                className={`flex w-full cursor-pointer items-start gap-3 rounded-xl border p-3 text-right transition ${
                  checks[item.key]
                    ? 'border-teal-500 bg-teal-50'
                    : 'border-slate-200 bg-white'
                }`}
              >
                <span
                  className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md border text-xs font-bold ${
                    checks[item.key]
                      ? 'border-teal-600 bg-teal-600 text-white'
                      : 'border-slate-300 text-transparent'
                  }`}
                >
                  ✓
                </span>
                <span>
                  <span className="block text-xs font-bold text-ink-800">{item.title}</span>
                  <span className="block text-xs text-ink-500">{item.desc}</span>
                </span>
              </button>
            ))}
          </div>
        </div>

        <div className="rounded-xl bg-slate-50 p-4 text-sm ring-2 ring-slate-400">
          {isRik && !checks.safetyReview && done <= 2 ? (
            <p className="font-bold text-teal-800">
              ✅ استبدال مطابق للأصل (Replacement in Kind) — لا يتطلب دورة MOC كاملة، ويُغلق بأمر شغل عادي.
            </p>
          ) : mocComplete ? (
            <p className="font-bold text-teal-800">
              ✅ تغيير معتمد — اكتملت مراجعة السلامة وتحديث المخططات والتدريب والاعتماد، والتغيير جاهز للتنفيذ الآمن.
            </p>
          ) : (
            <p className="font-bold text-rose-800">
              ⛔ تغيير غير مكتمل — يُحظر التنفيذ حتى إتمام البنود الناقصة أعلاه، وأي تعديل في الخامة أو النوع أو البرمجة يستلزم دورة MOC كاملة.
            </p>
          )}
          <p className="mt-1 text-xs font-normal text-ink-600">
            القاعدة: الاستبدال المطابق 100% للتصميم الأصلي لا يحتاج MOC، وأي اختلاف في الخامة أو النوع أو السعة أو منطق التحكم يحتاج مراجعة واعتماداً وتوثيقاً.
          </p>
        </div>
      </div>
    </div>
  );
}
