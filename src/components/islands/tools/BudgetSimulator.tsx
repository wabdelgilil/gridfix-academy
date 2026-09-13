import { useState } from 'react';

interface Item {
  id: string;
  label: string;
  hint: string;
}

const items: Item[] = [
  { id: 'opex', label: 'التشغيلية (Opex)', hint: 'مرافق، عقود، نظافة، تشغيل يومي' },
  { id: 'pm', label: 'الوقائية (PM)', hint: 'جداول صيانة مجدولة' },
  { id: 'capex', label: 'الإحلالات (CapEx)', hint: 'استبدال أصول رئيسية' },
  { id: 'reserve', label: 'الاحتياطي/الطوارئ', hint: 'انهيارات غير متوقعة' },
];

export default function BudgetSimulator() {
  const [total, setTotal] = useState(1200000);
  const [alloc, setAlloc] = useState({ opex: 45, pm: 25, capex: 20, reserve: 10 });

  const sum = Object.values(alloc).reduce((a, b) => a + b, 0);
  const over = sum > 100;

  const setItem = (id: string, value: number) => setAlloc((prev) => ({ ...prev, [id]: value }));

  return (
    <div className="card mt-6 overflow-hidden">
      <div className="border-b border-slate-200 bg-brand-50 px-5 py-3 text-sm font-semibold text-brand-800">
        🗂️ محاكي توزيع ميزانية المنشأة السنوية
      </div>

      <div className="space-y-4 p-5">
        <div>
          <label className="block text-sm font-semibold text-ink-900">إجمالي الميزانية السنوية</label>
          <input
            type="number"
            value={total}
            onChange={(e) => setTotal(Number(e.target.value))}
            className="mt-1 w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm outline-none focus:border-brand-500"
          />
        </div>

        <div className="space-y-3">
          {items.map((item) => {
            const value = alloc[item.id as keyof typeof alloc];
            return (
              <div className="rounded-xl border border-slate-200 p-3.5">
                <div className="flex items-center justify-between text-sm">
                  <div>
                    <p className="font-semibold text-ink-900">{item.label}</p>
                    <p className="text-xs text-ink-400">{item.hint}</p>
                  </div>
                  <span className="chip bg-brand-100 text-brand-800" dir="ltr">{value}%</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="100"
                  step="1"
                  value={value}
                  onChange={(e) => setItem(item.id, Number(e.target.value))}
                  className="mt-2 w-full accent-teal-600"
                />
                <p className="mt-1 text-xs text-ink-500" dir="ltr">
                  ≈ {Math.round((total * value) / 100).toLocaleString('en-US')}
                </p>
              </div>
            );
          })}
        </div>

        <div className={`rounded-xl p-4 text-sm font-semibold ${over ? 'bg-rose-50 text-rose-800' : 'bg-brand-50 text-brand-800'}`}>
          {over ? (
            <p>⚠️ مجموع النسب تجاوز 100% ({sum}%) — راجع توزيعك.</p>
          ) : (
            <p>
              ✅ التوزيع متوازن ({sum}%): نحتاط {Math.round((total * alloc.reserve) / 100).toLocaleString('en-US')} للطوارئ لوحده. الاحتياطي <strong>10-15%</strong> ممارسة سليمة للانقطاعات.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}