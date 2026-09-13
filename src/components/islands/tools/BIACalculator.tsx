import { useState } from 'react';

interface ProcessRow {
  id: number;
  name: string;
  impact: number;
  mtd: number;
}

type Class = 'حرجة' | 'هامة' | 'قياسية';

function classify(impact: number, mtd: number): { level: Class; note: string } {
  if (impact >= 50000 || mtd <= 4)
    return { level: 'حرجة', note: 'تتوقف عليها الأعمال فوراً — استرداد بسرعة (RTO من ساعات) ومستوى توافر عالٍ.' };
  if (impact >= 10000 || mtd <= 24)
    return { level: 'هامة', note: 'تأثر ملموس — استرداد خلال يوم عمل وإجراءات موثقة.' };
  return { level: 'قياسية', note: 'يمكن تأجيلها بمرونة — استرداد خلال أيام دون ضرر جوهري.' };
}

const levelTone: Record<Class, string> = {
  حرجة: 'bg-rose-50 text-rose-800 ring-rose-500',
  هامة: 'bg-amber-50 text-amber-800 ring-amber-500',
  قياسية: 'bg-teal-50 text-teal-800 ring-teal-500',
};

let nextId = 1;

export default function BIACalculator() {
  const [rows, setRows] = useState<ProcessRow[]>([]);
  const [name, setName] = useState('');
  const [impact, setImpact] = useState('');
  const [mtd, setMtd] = useState('');

  const add = () => {
    const imp = Number(impact);
    const m = Number(mtd);
    if (!name.trim() || !Number.isFinite(imp) || imp <= 0 || !Number.isFinite(m) || m <= 0) return;
    setRows((prev) => [...prev, { id: nextId++, name: name.trim(), impact: imp, mtd: m }]);
    setName('');
    setImpact('');
    setMtd('');
  };

  const remove = (id: number) => setRows((prev) => prev.filter((r) => r.id !== id));

  const criticalCount = rows.filter((r) => classify(r.impact, r.mtd).level === 'حرجة').length;

  return (
    <div className="card mt-6 overflow-hidden">
      <div className="border-b border-slate-200 bg-brand-50 px-5 py-3 text-sm font-semibold text-brand-800">
        📊 حاسبة BIA — رتب عملياتك الحيوية قبل الكارثة
      </div>

      <div className="space-y-4 p-5">
        <div className="grid gap-3 sm:grid-cols-3">
          <label className="text-sm font-semibold text-ink-700">
            اسم العملية
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="مثال: الدفع للموردين"
              className="mt-1.5 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-ink-800"
            />
          </label>
          <label className="text-sm font-semibold text-ink-700">
            الأثر المالي لكل يوم تعطل
            <input
              value={impact}
              onChange={(e) => setImpact(e.target.value)}
              placeholder="مثال: 40000"
              dir="ltr"
              type="number"
              min="1"
              className="mt-1.5 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-ink-800"
            />
          </label>
          <div className="flex items-end">
            <label className="w-full text-sm font-semibold text-ink-700">
              أقصى وقت تعطل مقبول (ساعات)
              <input
                value={mtd}
                onChange={(e) => setMtd(e.target.value)}
                placeholder="مثال: 8"
                dir="ltr"
                type="number"
                min="1"
                className="mt-1.5 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-ink-800"
              />
            </label>
          </div>
          <div className="sm:col-span-3">
            <button
              type="button"
              onClick={add}
              className="cursor-pointer rounded-lg bg-brand-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-brand-700"
            >
              + أضف العملية إلى التحليل
            </button>
          </div>
        </div>

        {rows.length === 0 ? (
          <p className="rounded-xl bg-slate-100 p-3 text-center text-sm text-ink-400">
            أضف عملياتك واحدة تلو الأخرى، وسيُرتبها التحليل بحسب الأثر وأقصى وقت تعطل.
          </p>
        ) : (
          <>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[480px] text-right text-sm" dir="ltr">
                <thead className="text-xs text-ink-500">
                  <tr>
                    <th className="pb-2 pr-1 text-right font-semibold">العملية</th>
                    <th className="pb-2 pr-4 text-left font-semibold">الأثر/اليوم</th>
                    <th className="pb-2 pr-4 text-left font-semibold">MTD (ساعات)</th>
                    <th className="pb-2 pr-4 text-left font-semibold">خسارة تقديرية 3 أيام</th>
                    <th className="pb-2 text-left font-semibold">التصنيف</th>
                    <th className="pb-2" />
                  </tr>
                </thead>
                <tbody>
                  {rows.map((r) => {
                    const c = classify(r.impact, r.mtd);
                    return (
                      <tr key={r.id} className="border-t border-slate-100">
                        <td className="py-2.5 pr-1 text-right font-semibold text-ink-800">{r.name}</td>
                        <td className="py-2.5">{r.impact.toLocaleString()}</td>
                        <td className="py-2.5">{r.mtd}</td>
                        <td className="py-2.5">{(r.impact * 3).toLocaleString()}</td>
                        <td className="py-2.5">
                          <span className={`inline-block rounded-full px-2.5 py-1 text-xs font-bold ring-2 ${levelTone[c.level]}`}>
                            {c.level}
                          </span>
                        </td>
                        <td className="py-2.5">
                          <button
                            type="button"
                            onClick={() => remove(r.id)}
                            className="cursor-pointer rounded px-2 py-1 text-xs text-rose-600 transition hover:bg-rose-50"
                          >
                            إزالة
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            <div className="rounded-xl bg-ink-900 p-4 text-sm text-white">
              <p className="font-bold">
                أولويات الاسترداد: <span dir="ltr">{criticalCount}</span> عملية حرجة من أصل{' '}
                <span dir="ltr">{rows.length}</span>
              </p>
              <p className="mt-1 text-xs text-teal-100">
                ابدأ الاستعداد بالعمليات الحرجة: حدد لها أهداف استرداد صغيرة (RTO ≤ MTD بهامش مخطط) ونُسَخاً أكثر تكراراً (RPO أصغر).
              </p>
            </div>
          </>
        )}

        <p className="rounded-xl bg-slate-100 p-3 text-xs leading-relaxed text-ink-500">
          هذا تحليل استرشادي يقوم على أثر تعطل ليوم كامل — تُبنى القيمة من أرقام منشأتك الفعلية ومستوى توافر خدماتها.
        </p>
      </div>
    </div>
  );
}