import { useState } from 'react';

interface Stake {
  id: number;
  name: string;
}

let nextId = 1;

function quadrant(power: number, interest: number): string {
  if (power >= 4 && interest >= 4) return 'إدارة وثيقة';
  if (power >= 4) return 'إرضاء';
  if (interest >= 4) return 'إبقاء على اطلاع';
  return 'مراقبة';
}

const qTone: Record<string, string> = {
  'إدارة وثيقة': 'bg-rose-50 text-rose-800 ring-rose-400',
  'إرضاء': 'bg-amber-50 text-amber-800 ring-amber-400',
  'إبقاء على اطلاع': 'bg-teal-50 text-teal-800 ring-teal-400',
  'مراقبة': 'bg-slate-100 text-ink-500 ring-slate-300',
};

export default function PowerInterestMatrix() {
  const [stakes, setStakes] = useState<Record<string, Stake>>({});
  const [name, setName] = useState('');
  const [power, setPower] = useState(0);
  const [interest, setInterest] = useState(0);

  const add = () => {
    if (!name.trim()) return;
    const key = `${power},${interest}`;
    const fresh = { id: nextId++, name: name.trim() };
    setStakes((prev) => ({ ...prev, [key]: prev[key] ? { ...prev[key] } : fresh }));
    setName('');
  };

  const remove = (key: string) =>
    setStakes((prev) => {
      const next = { ...prev };
      delete next[key];
      return next;
    });

  return (
    <div className="card mt-6 overflow-hidden">
      <div className="border-b border-slate-200 bg-brand-50 px-5 py-3 text-sm font-semibold text-brand-800">
        🗂️ مصفوفة القوة والاهتمام — رتب تواصلك مع أصحاب المصلحة
      </div>

      <div className="space-y-4 p-5">
        <div className="grid gap-3 sm:grid-cols-3">
          <label className="text-sm font-semibold text-ink-700">
            اسم صاحب المصلحة
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="مثال: مدير العمليات"
              className="mt-1.5 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-ink-800"
            />
          </label>
          <label className="text-sm font-semibold text-ink-700">
            القوة (1-5)
            <select
              value={power}
              onChange={(e) => setPower(Number(e.target.value))}
              className="mt-1.5 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-ink-800"
            >
              <option value={0}>اختر</option>
              {[1, 2, 3, 4, 5].map((v) => (
                <option key={v} value={v}>{v}</option>
              ))}
            </select>
          </label>
          <label className="text-sm font-semibold text-ink-700">
            الاهتمام (1-5)
            <select
              value={interest}
              onChange={(e) => setInterest(Number(e.target.value))}
              className="mt-1.5 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-ink-800"
            >
              <option value={0}>اختر</option>
              {[1, 2, 3, 4, 5].map((v) => (
                <option key={v} value={v}>{v}</option>
              ))}
            </select>
          </label>
          <div className="sm:col-span-3">
            <button
              type="button"
              onClick={add}
              className="cursor-pointer rounded-lg bg-brand-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-brand-700"
            >
              + ضع صاحب المصلحة في المصفوفة
            </button>
          </div>
        </div>

        <div dir="ltr" className="rounded-xl border border-slate-200 bg-slate-50 p-4">
          <p className="mb-2 text-center text-xs font-semibold text-ink-500">اهتمام (Interest) → مرتفع</p>
          <div className="grid grid-cols-5 gap-1.5" style={{ direction: 'ltr' }}>
            {Array.from({ length: 25 }, (_, idx) => {
              const powerVal = 5 - Math.floor(idx / 5);
              const interestVal = (idx % 5) + 1;
              const key = `${powerVal},${interestVal}`;
              const s = stakes[key];
              const q = quadrant(powerVal, interestVal);
              let qClass = 'bg-white';
              if (q === 'إدارة وثيقة') qClass = 'bg-rose-100';
              else if (q === 'إرضاء') qClass = 'bg-amber-100';
              else if (q === 'إبقاء على اطلاع') qClass = 'bg-teal-100';
              else qClass = 'bg-slate-100';
              return (
                <div key={key} className={`flex h-16 min-w-0 flex-col items-center justify-center rounded-lg p-1 ${qClass}`}>
                  {s ? (
                    <>
                      <span className="w-full truncate text-center text-[11px] font-bold text-ink-800">{s.name}</span>
                      <button type="button" onClick={() => remove(key)} className="cursor-pointer text-[10px] text-rose-500">
                        إزالة
                      </button>
                    </>
                  ) : (
                    <span className="text-[10px] text-ink-300" dir="rtl">
                      {powerVal},{interestVal}
                    </span>
                  )}
                </div>
              );
            })}
          </div>
          <p className="mb-1 mt-2 text-center text-xs font-semibold text-ink-500">قوة (Power) → تنازلياً (5 الأعلى أعلى)</p>
        </div>

        <div className="grid gap-2 sm:grid-cols-2">
          {Object.entries(stakes).map(([key, s]) => {
            const [pw, it] = key.split(',').map(Number);
            const q = quadrant(pw, it);
            return (
              <div key={key} className={`flex items-center justify-between gap-2 rounded-lg px-3 py-2 text-sm ring-1 ${qTone[q]}`}>
                <span className="font-semibold">{q}: {s.name}</span>
                <span className="text-xs" dir="ltr">قوة {pw} • اهتمام {it}</span>
              </div>
            );
          })}
        </div>

        <p className="rounded-xl bg-slate-100 p-3 text-xs leading-relaxed text-ink-500">
          القاعدة: أصحاب «القوة العالية» يحتاجون إرضاء أو إدارة وثيقة، و«الاهتمام العالي» يحتاجون إبقاءً على اطلاع — ومسارات التواصل تحدد من هذه المصفوفة قبل إعداد التقارير.
        </p>
      </div>
    </div>
  );
}