import { useState } from 'react';

type Clause = {
  id: string;
  number: string;
  title: string;
  titleEn: string;
  items: string[];
  phase: 'plan' | 'do' | 'check' | 'act';
};

const clauses: Clause[] = [
  {
    id: 'ctx',
    number: '4',
    title: 'سياق المنظومة',
    titleEn: 'Context of the Organization',
    phase: 'plan',
    items: [
      'تحديد العوامل الداخلية والخارجية المؤثرة على إدارة الأصول',
      'تحديد أصحاب المصلحة ومتطلباتهم وتوقعاتهم',
      'تحديد نطاق نظام إدارة الأصول (النطاق)',
      'تحديد نظام إدارة المنظومة الكلي وتكامل نظام إدارة الأصول معه',
    ],
  },
  {
    id: 'lead',
    number: '5',
    title: 'القيادة',
    titleEn: 'Leadership',
    phase: 'plan',
    items: [
      'الالتزام الإداري بإدارة الأصول وتوفير الموارد',
      'وضع سياسة إدارة الأصول ومراجعتها وتحديثها',
      'تحديد الأدوار والمسؤوليات والصلاحيات',
      'ربط إدارة الأصول بالخطط الاستراتيجية للمؤسسة',
    ],
  },
  {
    id: 'plan',
    number: '6',
    title: 'التخطيط',
    titleEn: 'Planning',
    phase: 'plan',
    items: [
      'تحديد المخاطر والفرص المتعلقة بالأصول',
      'وضع أهداف إدارة الأصول وفق معايير SMART',
      'وضع خطط العمل لتحقيق الأهداف',
      'تخطيط إدارة التغيير والتجديد',
    ],
  },
  {
    id: 'support',
    number: '7',
    title: 'الدعم',
    titleEn: 'Support',
    phase: 'do',
    items: [
      'تحديد الموارد البشرية والمادية والمعلوماتية المطلوبة',
      'تحديد الكفاءات والتأهيل والتدريب المستمر',
      'إدارة الاتصال الداخلي والخارجي',
      'توثيق المعلومات وإدارة المعرفة',
    ],
  },
  {
    id: 'ops',
    number: '8',
    title: 'التشغيل',
    titleEn: 'Operation',
    phase: 'do',
    items: [
      'التخطيط والتحكم في العمليات التشغيلية للأصول',
      'إدارة تغييرات التخطيط والتشغيل',
      'التحكم في التوثيق والسجلات',
      'إدارة الموردين والمقاولين الخارجيين',
    ],
  },
  {
    id: 'perf',
    number: '9',
    title: 'تقييم الأداء',
    titleEn: 'Performance Evaluation',
    phase: 'check',
    items: [
      'تحديد مؤشرات الأداء الرئيسية (KPIs) لإدارة الأصول',
      'مراقبة وقياس الأداء الفعلي ومقارنته بالمخطط',
      'إجراء المراجعات الداخلية لنظام إدارة الأصول',
      'تحليل البيانات وأخذ القرارات المبنية على الأدلة',
    ],
  },
  {
    id: 'improve',
    number: '10',
    title: 'التحسين',
    titleEn: 'Improvement',
    phase: 'act',
    items: [
      'تحديد فرص التحسين من نتائج المراجعات',
      'معالجة عدم المطابقة وأسبابها الجذرية',
      'تطبيق إجراءات التحسين المستمر',
      'مراجعة فعالية التحسينات المنفذة',
    ],
  },
];

type ItemStatus = 'pending' | 'partial' | 'done';

const phaseLabels: Record<string, { label: string; color: string }> = {
  plan: { label: 'Plan — التخطيط', color: 'bg-sky-100 text-sky-800' },
  do: { label: 'Do — التنفيذ', color: 'bg-emerald-100 text-emerald-800' },
  check: { label: 'Check — التحقق', color: 'bg-amber-100 text-amber-800' },
  act: { label: 'Act — التحسين', color: 'bg-violet-100 text-violet-800' },
};

const statusLabels: Record<ItemStatus, { label: string; color: string }> = {
  pending: { label: 'لم يتم', color: 'bg-rose-100 text-rose-700' },
  partial: { label: 'جزئياً', color: 'bg-amber-100 text-amber-700' },
  done: { label: 'مكتمل', color: 'bg-emerald-100 text-emerald-700' },
};

export default function Iso55001Checklist() {
  const [statuses, setStatuses] = useState<Record<string, ItemStatus>>(() => {
    const init: Record<string, ItemStatus> = {};
    clauses.forEach((c) => {
      c.items.forEach((_, i) => {
        init[`${c.id}-${i}`] = 'pending';
      });
    });
    return init;
  });

  const [expandedClause, setExpandedClause] = useState<string | null>(clauses[0].id);

  function cycleStatus(key: string) {
    setStatuses((prev) => {
      const order: ItemStatus[] = ['pending', 'partial', 'done'];
      const current = prev[key];
      const next = order[(order.indexOf(current) + 1) % order.length];
      return { ...prev, [key]: next };
    });
  }

  const clauseScores = clauses.map((c) => {
    const done = c.items.filter((_, i) => statuses[`${c.id}-${i}`] === 'done').length;
    const partial = c.items.filter((_, i) => statuses[`${c.id}-${i}`] === 'partial').length;
    const total = c.items.length;
    return { ...c, done, partial, total, pct: Math.round(((done + partial * 0.5) / total) * 100) };
  });

  const totalItems = clauses.reduce((sum, c) => sum + c.items.length, 0);
  const totalDone = Object.values(statuses).filter((s) => s === 'done').length;
  const totalPartial = Object.values(statuses).filter((s) => s === 'partial').length;
  const overallPct = Math.round(((totalDone + totalPartial * 0.5) / totalItems) * 100);

  const phases = ['plan', 'do', 'check', 'act'] as const;

  return (
    <div className="card mt-6 overflow-hidden">
      <div className="border-b border-slate-200 bg-brand-50 px-5 py-3 text-sm font-semibold text-brand-800">
        ✅ قائمة امتثال ISO 55001 — تتبع جاهزية مؤسستك لتطبيق المعيار
      </div>

      <div className="space-y-4 p-5">
        {phases.map((phase) => {
          const phaseClauses = clauseScores.filter((c) => c.phase === phase);
          const pl = phaseLabels[phase];
          return (
            <div key={phase}>
              <div className={`mb-2 rounded-lg px-3 py-1.5 text-xs font-bold ${pl.color}`}>
                {pl.label}
              </div>
              {phaseClauses.map((c) => (
                <div key={c.id} className="mb-2 rounded-xl border border-slate-200">
                  <button
                    type="button"
                    onClick={() => setExpandedClause(expandedClause === c.id ? null : c.id)}
                    className="flex w-full items-center justify-between p-3 text-right"
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-ink-400">{c.number}</span>
                      <span className="text-sm font-bold text-ink-800">{c.title}</span>
                      <span className="text-[11px] text-ink-400" dir="ltr">({c.titleEn})</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-ink-500">{c.done}/{c.total} مكتمل</span>
                      <span className="text-ink-400 text-xs">{expandedClause === c.id ? '▲' : '▼'}</span>
                    </div>
                  </button>

                  {expandedClause === c.id && (
                    <div className="border-t border-slate-100 px-3 pb-3">
                      {c.items.map((item, i) => {
                        const key = `${c.id}-${i}`;
                        const st = statuses[key];
                        const sl = statusLabels[st];
                        return (
                          <div key={i} className="flex items-center gap-2 border-b border-slate-50 py-2.5 last:border-0">
                            <button
                              type="button"
                              onClick={() => cycleStatus(key)}
                              className={`shrink-0 rounded-lg px-2.5 py-1 text-[10px] font-bold transition ${sl.color}`}
                            >
                              {sl.label}
                            </button>
                            <span className="text-sm text-ink-700">{item}</span>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              ))}
            </div>
          );
        })}

        <div className="rounded-xl bg-slate-50 p-4 ring-2 ring-slate-300">
          <p className="font-bold text-ink-800">
            التقدم الإجمالي: <strong dir="ltr">{overallPct}%</strong> — {totalDone} مكتمل / {totalPartial} جزئي / {totalItems - totalDone - totalPartial} لم يتم
          </p>
          <div className="mt-2 h-3 w-full overflow-hidden rounded-full bg-slate-200">
            <div
              className="h-full rounded-full bg-brand-500 transition-all duration-300"
              style={{ width: `${overallPct}%` }}
            />
          </div>
          <p className="mt-2 text-xs text-ink-500">
            ابدأ بالبنود التي حصلت على "جزئياً" لأنها الأقرب للإنجاز، ثم انتقل لغير المكتملة.
          </p>
        </div>
      </div>
    </div>
  );
}
