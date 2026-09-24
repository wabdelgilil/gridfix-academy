import { useState } from 'react';

export default function LifeCycleCostCalculator() {
  const [capexA, setCapexA] = useState(500000);
  const [opexA, setOpexA] = useState(120000);
  const [capexB, setCapexB] = useState(800000);
  const [opexB, setOpexB] = useState(30000);
  const [years, setYears] = useState(10);

  const totalA = capexA + opexA * years;
  const totalB = capexB + opexB * years;
  const diff = Math.abs(totalA - totalB);
  const winnerB = totalB < totalA;

  function fmt(n: number) {
    return n.toLocaleString('en-US');
  }

  return (
    <div className="card mt-6 overflow-hidden">
      <div className="border-b border-slate-200 bg-brand-50 px-5 py-3 text-sm font-semibold text-brand-800">
        ⚖️ حاسبة تكلفة دورة الحياة — مقارنة خيارين عبر العمر الافتراضي
      </div>

      <div className="space-y-5 p-5">
        <div>
          <label className="mb-1.5 block text-sm font-semibold text-ink-700">
            العمر الافتراضي للأصل: {years} سنوات
          </label>
          <input
            type="range"
            min={3}
            max={25}
            value={years}
            onChange={(e) => setYears(Number(e.target.value))}
            className="w-full accent-teal-600"
          />
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl border border-slate-200 p-4">
            <p className="mb-3 text-sm font-bold text-rose-700">الخيار (أ): سعر شراء منخفض</p>
            <label className="mb-1 block text-xs font-semibold text-ink-500">
              سعر الشراء الأولي (CapEx) بالدولار
            </label>
            <input
              type="number"
              value={capexA}
              onChange={(e) => setCapexA(Number(e.target.value))}
              className="mb-3 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 font-mono text-sm text-ink-800"
            />
            <label className="mb-1 block text-xs font-semibold text-ink-500">
              تكلفة الصيانة والتشغيل السنوية (OpEx) بالدولار
            </label>
            <input
              type="number"
              value={opexA}
              onChange={(e) => setOpexA(Number(e.target.value))}
              className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 font-mono text-sm text-ink-800"
            />
            <p className="mt-3 rounded-lg bg-rose-50 px-3 py-2 text-center font-mono text-base font-bold text-rose-700">
              ${fmt(totalA)}
            </p>
          </div>

          <div className="rounded-xl border border-slate-200 p-4">
            <p className="mb-3 text-sm font-bold text-teal-700">الخيار (ب): تصميم عالي الاعتمادية</p>
            <label className="mb-1 block text-xs font-semibold text-ink-500">
              سعر الشراء الأولي (CapEx) بالدولار
            </label>
            <input
              type="number"
              value={capexB}
              onChange={(e) => setCapexB(Number(e.target.value))}
              className="mb-3 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 font-mono text-sm text-ink-800"
            />
            <label className="mb-1 block text-xs font-semibold text-ink-500">
              تكلفة الصيانة والتشغيل السنوية (OpEx) بالدولار
            </label>
            <input
              type="number"
              value={opexB}
              onChange={(e) => setOpexB(Number(e.target.value))}
              className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 font-mono text-sm text-ink-800"
            />
            <p className="mt-3 rounded-lg bg-teal-50 px-3 py-2 text-center font-mono text-base font-bold text-teal-700">
              ${fmt(totalB)}
            </p>
          </div>
        </div>

        <div
          className={`rounded-xl p-4 text-sm ring-2 ${
            winnerB
              ? 'bg-teal-50 text-teal-800 ring-teal-500'
              : 'bg-rose-50 text-rose-800 ring-rose-500'
          }`}
        >
          <p className="font-bold">
            {winnerB
              ? `الخيار (ب) هو الأوفر: إجمالي تكلفة دورة الحياة $${fmt(totalB)} مقابل $${fmt(totalA)} للخيار (أ).`
              : `الخيار (أ) هو الأوفر: إجمالي تكلفة دورة الحياة $${fmt(totalA)} مقابل $${fmt(totalB)} للخيار (ب).`}
          </p>
          <p className="mt-1 text-xs font-normal opacity-90">
            صافي الوفر على مدى {years} سنوات: ${fmt(diff)} — القاعدة: تكلفة دورة الحياة = سعر الشراء + (التكلفة السنوية × عدد السنوات)، وسعر الشراء لا يمثل عادة سوى 10% إلى 20% من الإجمالي.
          </p>
        </div>
      </div>
    </div>
  );
}
