import { useState } from 'react';

type Dimension = {
  id: string;
  name: string;
  questions: string[];
};

const dimensions: Dimension[] = [
  {
    id: 'strategy',
    name: 'الاستراتيجية والسياسة',
    questions: [
      'توجد سياسة إدارة الأصول مكتوبة ومعتمدة من القيادة العليا',
      'تربط سياسة إدارة الأصول بالخطة الاستراتيجية للمؤسسة',
      'يوجد قائد تنفيذي معني (سيدة/مسئول تنفيذي) لإدارة الأصول',
      'توجد أهداف واضحة وقابلة للقياس مرتبطه بإدارة الأصول',
      'يتم مراجعة السياسة والأهداف دورياً (سنوياً على الأقل)',
    ],
  },
  {
    id: 'system',
    name: 'النظام وإجراءات العمل',
    questions: [
      'يوجد نظام إدارة أصول موثق ومتاح لجميع الكوادر',
      'توجد إجراءات واضحة لدورة حياة الأصول من الشراء إلى الإعدام',
      'يوجد نظام CMMS أو CAFM مفعّل يغطي الأصول الرئيسية',
      'توجد إجراءات واضحة لاتخاذ قرارات الصيانة والاستبدال',
      'يوجد نظام لتوثيق القرارات المالية الكبرى على الأصول',
    ],
  },
  {
    id: 'performance',
    name: 'الأداء والقياس',
    questions: [
      'توجد مؤشرات أداء رئيسية (KPIs) محددة لإدارة الأصول',
      'تتم مراجعة مؤشرات الأداء دورياً (ربع سنوية على الأقل)',
      'يوجد تقارير دورية عن حالة الأصول وأدائها للقيادة العليا',
      'تتم مقارنة الأداء مع المعايير أو الممارسات المرجعية',
      'يوجد نظام لتحليل تكاليف دورة حياة الأصول (LCC)',
    ],
  },
  {
    id: 'improvement',
    name: 'التحسين والتطوير',
    questions: [
      'توجد آلية لجمع ملاحظات ومقترحات الكوادر',
      'تتم مراجعة أسباب الجذر للحوادث والأعطال الرئيسية',
      'يوجد خطة تطوير وتدريب مستمرة لكوادر إدارة الأصول',
      'تتم مراجعة الممارسات الخارجية وال Benchmarking',
      'يوجد برنامج لتطبيق تحسينات بناءً على نتائج المراجعات',
    ],
  },
  {
    id: 'resources',
    name: 'الموارد والكفاءات',
    questions: [
      'يوجد كوادر مؤهلة وذات كفاءات كافية لإدارة الأصول',
      'يوجد خطة تدريب وتطوير مهني للكوادر',
      'يوجد ميزانية مخصصة لأداء صيانة وتحسين الأصول',
      'يوجد موارد كافية لجمع البيانات وتحليلها',
      'يوجد تنسيق فعال بين الأقسام المختلفة المعنية بالأصول',
    ],
  },
];

function getScoreLabel(pct: number) {
  if (pct >= 90) return { label: 'ممتاز — نضج عالي', color: 'text-emerald-700', bg: 'bg-emerald-50' };
  if (pct >= 70) return { label: 'جيد — نضج متوسط مع تحسينات مطلوبة', color: 'text-sky-700', bg: 'bg-sky-50' };
  if (pct >= 50) return { label: 'مقبول — يحتاج تطوير جوهري', color: 'text-amber-700', bg: 'bg-amber-50' };
  return { label: 'ضعيف — يحتاج بناء من الأساس', color: 'text-rose-700', bg: 'bg-rose-50' };
}

export default function MaturityAssessment() {
  const [answers, setAnswers] = useState<Record<string, number>>(() => {
    const init: Record<string, number> = {};
    dimensions.forEach((d) => {
      d.questions.forEach((_, qi) => {
        init[`${d.id}-${qi}`] = 2;
      });
    });
    return init;
  });

  const [expanded, setExpanded] = useState<string | null>(dimensions[0].id);

  function setVal(key: string, val: number) {
    setAnswers((prev) => ({ ...prev, [key]: val }));
  }

  const dimScores = dimensions.map((d) => {
    const maxScore = d.questions.length * 4;
    const actualScore = d.questions.reduce((sum, _, qi) => sum + answers[`${d.id}-${qi}`], 0);
    return {
      ...d,
      pct: Math.round((actualScore / maxScore) * 100),
    };
  });

  const overallMax = dimensions.reduce((sum, d) => sum + d.questions.length * 4, 0);
  const overallActual = Object.values(answers).reduce((sum, v) => sum + v, 0);
  const overallPct = Math.round((overallActual / overallMax) * 100);
  const overall = getScoreLabel(overallPct);
  const weakest = dimScores.reduce((a, b) => (a.pct <= b.pct ? a : b));

  const levels = [
    { val: 0, label: 'غير موجود', color: 'bg-rose-100 text-rose-700' },
    { val: 1, label: 'جزئي', color: 'bg-amber-100 text-amber-700' },
    { val: 2, label: 'مطبق جزئياً', color: 'bg-sky-100 text-sky-700' },
    { val: 3, label: 'مطبق بالكامل', color: 'bg-emerald-100 text-emerald-700' },
    { val: 4, label: 'مُحسَّن باستمرار', color: 'bg-violet-100 text-violet-700' },
  ];

  return (
    <div className="card mt-6 overflow-hidden">
      <div className="border-b border-slate-200 bg-brand-50 px-5 py-3 text-sm font-semibold text-brand-800">
        🏛️ أداة تقييم النضج — قيّم مستوى نضج إدارة الأصول في مؤسستك
      </div>

      <div className="space-y-4 p-5">
        {dimScores.map((d) => (
          <div key={d.id} className="rounded-xl border border-slate-200">
            <button
              type="button"
              onClick={() => setExpanded(expanded === d.id ? null : d.id)}
              className="flex w-full items-center justify-between p-4 text-right"
            >
              <div>
                <span className="font-bold text-ink-800">{d.name}</span>
                <span className="mr-3 text-xs text-ink-500">({d.questions.length} أسئلة)</span>
              </div>
              <div className="flex items-center gap-3">
                <span
                  className={`rounded-lg px-3 py-1 text-xs font-bold ${getScoreLabel(d.pct).color} ${getScoreLabel(d.pct).bg}`}
                >
                  {d.pct}%
                </span>
                <span className="text-ink-400">{expanded === d.id ? '▲' : '▼'}</span>
              </div>
            </button>

            {expanded === d.id && (
              <div className="border-t border-slate-100 px-4 pb-4">
                {d.questions.map((q, qi) => {
                  const key = `${d.id}-${qi}`;
                  const val = answers[key];
                  return (
                    <div key={qi} className="flex items-center gap-3 border-b border-slate-50 py-3 last:border-0">
                      <span className="min-w-0 flex-1 text-sm text-ink-700">{q}</span>
                      <div className="flex shrink-0 gap-1">
                        {levels.map((lv) => (
                          <button
                            key={lv.val}
                            type="button"
                            onClick={() => setVal(key, lv.val)}
                            className={`rounded-lg px-2 py-1 text-[10px] font-bold transition ${
                              val === lv.val ? lv.color : 'bg-slate-50 text-slate-400 hover:bg-slate-100'
                            }`}
                            title={lv.label}
                          >
                            {lv.val}
                          </button>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        ))}

        <div className={`rounded-xl p-4 ring-2 ring-slate-300 ${overall.bg}`}>
          <p className="font-bold text-ink-800">
            النسبة الإجمالية: <strong dir="ltr">{overallPct}%</strong> — <span className={overall.color}>{overall.label}</span>
          </p>
          <p className="mt-1 text-xs text-ink-600">
            أضعف محور: {weakest.name} ({weakest.pct}%) — ابدأ من هنا لتحسين الأداء الكلي.
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            {dimScores.map((d) => (
              <div key={d.id} className="flex items-center gap-1.5 text-[11px] text-ink-600">
                <span
                  className={`inline-block h-2.5 w-2.5 rounded-full ${
                    d.pct >= 70 ? 'bg-emerald-500' : d.pct >= 50 ? 'bg-amber-500' : 'bg-rose-500'
                  }`}
                />
                {d.name}: {d.pct}%
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
