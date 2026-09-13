import { useState } from 'react';

const monthLabels = ['يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو'];

function pct(planned: number, actual: number): number {
  if (planned === 0) return 0;
  return Math.round(((actual - planned) / planned) * 1000) / 10;
}

function tone(v: number): { label: string; tone: 'ok' | 'warn' | 'bad' } {
  const abs = Math.abs(v);
  if (abs <= 5) return { label: 'ضمن الحدود', tone: 'ok' };
  if (abs <= 15) return { label: 'يحتاج مراجعة', tone: 'warn' };
  return { label: 'إنذار — تصحيح فوري', tone: 'bad' };
}

export default function BudgetVarianceTool() {
  const [planned, setPlanned] = useState([100, 105, 102, 110, 108, 112]);
  const [actual, setActual] = useState([98, 111, 109, 108, 130, 118]);

  const setVal = (arr: number[], setter: (v: number[]) => void, i: number, v: number) => {
    const next = [...arr];
    next[i] = v;
    setter(next);
  };

  const totalPlanned = planned.reduce((a, b) => a + b, 0);
  const totalActual = actual.reduce((a, b) => a + b, 0);
  const totalVar = pct(totalPlanned, totalActual);
  const totalTone = tone(totalVar);

  const barColor = (v: number) => {
    const vv = Math.min(Math.abs(v), 30);
    const p = (vv / 30) * 100;
    return v < 0
      ? `linear-gradient(to top, #0d9488 ${p}%, #e2e8f0 ${p}%)`
      : v <= 15
        ? `linear-gradient(to top, #f59e0b ${p}%, #e2e8f0 ${p}%)`
        : `linear-gradient(to top, #e11d48 ${p}%, #e2e8f0 ${p}%)`;
  };

  return (
    <div className="card mt-6 overflow-hidden">
      <div className="border-b border-slate-200 bg-brand-50 px-5 py-3 text-sm font-semibold text-brand-800">
        📊 حاسبة انحراف الميزانية (Variance)
      </div>

      <div className="p-5">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-slate-200 text-right text-xs text-ink-400">
              <th className="py-2 pr-0 font-medium">الشهر</th>
              <th className="py-2 font-medium">المخطط</th>
              <th className="py-2 font-medium">الفعلي</th>
              <th className="py-2 font-medium">الانحراف %</th>
              <th className="w-24 py-2 font-medium">بصرياً</th>
            </tr>
          </thead>
          <tbody>
            {monthLabels.map((m, i) => {
              const v = pct(planned[i], actual[i]);
              return (
                <tr key={m} className="border-b border-slate-100">
                  <td className="py-2 pr-0 font-semibold text-ink-800">{m}</td>
                  <td className="py-2">
                    <input
                      type="number"
                      value={planned[i]}
                      onChange={(e) => setVal(planned, setPlanned, i, Number(e.target.value))}
                      className="w-20 rounded-lg border border-slate-200 px-2 py-1 outline-none focus:border-brand-500"
                    />
                  </td>
                  <td className="py-2">
                    <input
                      type="number"
                      value={actual[i]}
                      onChange={(e) => setVal(actual, setActual, i, Number(e.target.value))}
                      className="w-20 rounded-lg border border-slate-200 px-2 py-1 outline-none focus:border-brand-500"
                    />
                  </td>
                  <td className={`py-2 font-semibold ${v > 0 ? 'text-rose-600' : 'text-teal-700'}`} dir="ltr">
                    {v > 0 ? '+' : ''}{v}%
                  </td>
                  <td className="py-2">
                    <div className="h-10 w-full overflow-hidden rounded-md bg-slate-100" style={{ background: barColor(v) }} />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>

        <div className={`mt-4 rounded-xl p-4 text-sm font-semibold ${totalTone.tone === 'ok' ? 'bg-teal-50 text-teal-800' : totalTone.tone === 'warn' ? 'bg-amber-50 text-amber-800' : 'bg-rose-50 text-rose-800'}`}>
          الإجمالي: المخطط {totalPlanned.toLocaleString('en-US')} × الفعلي {totalActual.toLocaleString('en-US')} → انحراف <span dir="ltr">{totalVar > 0 ? '+' : ''}{totalVar}%</span> — {totalTone.label}
          <p className="mt-1 text-xs font-normal opacity-80">الانحراف الموجب إنفاق زائد؛ السالب توفير أو تأخير إنفاق. خارج ±5% يتطلب تحليلاً وسبباً.</p>
        </div>
      </div>
    </div>
  );
}