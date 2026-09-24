import { useState } from 'react';

type Role = 'pm' | 'ops' | 'ms' | 'plan' | 'craft';
type Letter = 'R' | 'A' | 'C' | 'I' | '-';

const roles: { id: Role; label: string }[] = [
  { id: 'pm', label: 'مدير المصنع' },
  { id: 'ops', label: 'مشرف التشغيل' },
  { id: 'ms', label: 'مشرف الصيانة' },
  { id: 'plan', label: 'مخطط الصيانة' },
  { id: 'craft', label: 'الفني الحرفي' },
];

const tasks: { id: string; task: string; desc: string; standard: Record<Role, Letter> }[] = [
  {
    id: 't1',
    task: 'اعتماد الجدول الأسبوعي للصيانة',
    desc: 'الاتفاق النهائي على أوامر الشغل المجدولة ومواعيد تسليم المعدات.',
    standard: { pm: 'I', ops: 'A', ms: 'R', plan: 'C', craft: 'I' },
  },
  {
    id: 't2',
    task: 'الموافقة على كسر الجدول للطوارئ',
    desc: 'الإذن بإيقاف عمل مجدول لإدخال مهمة طارئة حقيقية.',
    standard: { pm: 'C', ops: 'A', ms: 'R', plan: 'I', craft: 'I' },
  },
  {
    id: 't3',
    task: 'إعداد حزمة العمل المخططة',
    desc: 'كتابة الخطوات وحجز القطع وتحديد الرفع والسلامة.',
    standard: { pm: 'I', ops: 'I', ms: 'A', plan: 'R', craft: 'C' },
  },
  {
    id: 't4',
    task: 'التنفيذ الميداني والإغلاق في CMMS',
    desc: 'تنفيذ العمل بأمان وتسجيل الساعات والقطع والملاحظات.',
    standard: { pm: 'I', ops: 'I', ms: 'A', plan: 'I', craft: 'R' },
  },
  {
    id: 't5',
    task: 'قيادة تحليل الأسباب الجذرية',
    desc: 'إدارة جلسة متعددة التخصصات لعطل حرج متكرر.',
    standard: { pm: 'A', ops: 'C', ms: 'R', plan: 'C', craft: 'C' },
  },
];

const sequence: Letter[] = ['R', 'A', 'C', 'I', '-'];

function letterStyle(letter: Letter) {
  if (letter === 'A') return 'bg-rose-100 text-rose-800 border-rose-400';
  if (letter === 'R') return 'bg-blue-100 text-blue-800 border-blue-400';
  if (letter === 'C') return 'bg-amber-100 text-amber-800 border-amber-400';
  if (letter === 'I') return 'bg-emerald-100 text-emerald-800 border-emerald-400';
  return 'bg-slate-100 text-slate-400 border-slate-300';
}

export default function RACIMatrix() {
  const [matrix, setMatrix] = useState<Record<string, Record<Role, Letter>>>(() => {
    const init: Record<string, Record<Role, Letter>> = {};
    tasks.forEach((t) => {
      init[t.id] = { ...t.standard };
    });
    return init;
  });

  function cycle(taskId: string, role: Role) {
    setMatrix((prev) => {
      const current = prev[taskId][role];
      const next = sequence[(sequence.indexOf(current) + 1) % sequence.length];
      return { ...prev, [taskId]: { ...prev[taskId], [role]: next } };
    });
  }

  function reset() {
    const init: Record<string, Record<Role, Letter>> = {};
    tasks.forEach((t) => {
      init[t.id] = { ...t.standard };
    });
    setMatrix(init);
  }

  const validCount = tasks.filter((t) => {
    const row = Object.values(matrix[t.id]);
    return row.filter((l) => l === 'A').length === 1 && row.includes('R');
  }).length;

  return (
    <div className="card mt-6 overflow-hidden">
      <div className="border-b border-slate-200 bg-brand-50 px-5 py-3 text-sm font-semibold text-brand-800">
        🎯 مصفوفة RACI — انقر أي خلية للتبديل بين R و A و C و I
      </div>
      <div className="space-y-4 p-5">
        <div className="grid grid-cols-2 gap-2 text-xs sm:grid-cols-4">
          <div className="rounded-lg bg-blue-50 px-3 py-2 text-blue-800">R = المنفذ الذي يعمل بيده</div>
          <div className="rounded-lg bg-rose-50 px-3 py-2 text-rose-800">A = المساءل وصاحب القرار (واحد فقط)</div>
          <div className="rounded-lg bg-amber-50 px-3 py-2 text-amber-800">C = المستشار قبل التنفيذ</div>
          <div className="rounded-lg bg-emerald-50 px-3 py-2 text-emerald-800">I = المبلَّغ بالنتيجة بعدها</div>
        </div>
        <div className="overflow-x-auto rounded-xl border border-slate-200">
          <table className="w-full min-w-[640px] border-collapse text-right text-xs">
            <thead>
              <tr className="bg-slate-50 text-ink-700">
                <th className="min-w-44 p-3 font-bold">المهمة</th>
                {roles.map((r) => (
                  <th key={r.id} className="min-w-20 border-r border-slate-200 p-2 text-center font-bold">
                    {r.label}
                  </th>
                ))}
                <th className="min-w-32 border-r border-slate-200 p-2 text-center font-bold">فحص الحوكمة</th>
              </tr>
            </thead>
            <tbody>
              {tasks.map((t) => {
                const row = matrix[t.id];
                const aCount = Object.values(row).filter((l) => l === 'A').length;
                const hasR = Object.values(row).includes('R');
                const valid = aCount === 1 && hasR;
                return (
                  <tr key={t.id} className="border-t border-slate-200">
                    <td className="p-3">
                      <div className="font-bold text-ink-800">{t.task}</div>
                      <div className="mt-0.5 text-[11px] text-ink-500">{t.desc}</div>
                    </td>
                    {roles.map((r) => (
                      <td key={r.id} className="border-r border-slate-200 p-2 text-center">
                        <button
                          type="button"
                          onClick={() => cycle(t.id, r.id)}
                          className={`mx-auto flex h-10 w-10 items-center justify-center rounded-xl border font-mono text-sm font-black transition hover:scale-105 ${letterStyle(row[r.id])}`}
                        >
                          {row[r.id]}
                        </button>
                      </td>
                    ))}
                    <td className="border-r border-slate-200 p-2 text-center text-[11px] font-bold">
                      {valid ? (
                        <span className="text-emerald-700">✔ حوكمة سليمة (A واحدة + R)</span>
                      ) : aCount === 0 ? (
                        <span className="text-amber-700">⚠ خطأ: لا يوجد مساءل (A)</span>
                      ) : aCount > 1 ? (
                        <span className="text-rose-700">✘ تعدد المساءلين ({aCount})!</span>
                      ) : (
                        <span className="text-amber-700">⚠ خطأ: لا يوجد منفذ (R)</span>
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className="flex flex-col items-start justify-between gap-3 rounded-xl bg-slate-50 p-4 text-sm sm:flex-row sm:items-center">
          <p className="font-bold text-ink-800">
            المهام السليمة: <strong dir="ltr">{validCount} / {tasks.length}</strong>
          </p>
          <button
            type="button"
            onClick={reset}
            className="cursor-pointer rounded-lg border border-slate-300 bg-white px-4 py-2 text-xs font-bold text-ink-700 transition hover:bg-slate-100"
          >
            ↺ استعادة المعيار النموذجي
          </button>
        </div>
        <p className="rounded-xl bg-brand-50 p-4 text-xs leading-relaxed text-ink-600">
          القاعدة الذهبية: حرف (A) واحد لكل مهمة، وتعدد المنفذين (R) مسموح. الاستشارة رأي فني والقرار النهائي لصاحب (A) وحده.
        </p>
      </div>
    </div>
  );
}
