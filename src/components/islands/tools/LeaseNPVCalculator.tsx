import { useState } from 'react';

interface Lease {
  label: string;
  rent: number;
  area: number;
  term: number;
  escalation: number;
}

function pv(amount: number, rate: number, year: number): number {
  return amount / Math.pow(1 + rate / 100, year);
}

function leaseNpv(cash: Lease, discount: number): number {
  let npv = 0;
  const annual = cash.rent * cash.area * 12;
  for (let y = 1; y <= cash.term; y++) {
    npv += pv(annual * Math.pow(1 + cash.escalation / 100, y - 1), discount, y);
  }
  return npv;
}

const defaultA: Lease = { label: 'العقد الحالي A', rent: 18, area: 1200, term: 5, escalation: 5 };
const defaultB: Lease = { label: 'العرض الجديد B', rent: 21, area: 1100, term: 8, escalation: 3 };

export default function LeaseNPVCalculator() {
  const [discount, setDiscount] = useState(8);
  const [a, setA] = useState<Lease>(defaultA);
  const [b, setB] = useState<Lease>(defaultB);

  const npvA = leaseNpv(a, discount);
  const npvB = leaseNpv(b, discount);
  const better = npvA <= npvB ? 'A' : 'B';

  const setLease = (group: 'a' | 'b', key: keyof Lease, value: number) => {
    const target = group === 'a' ? a : b;
    const setter = group === 'a' ? setA : setB;
    setter({ ...target, [key]: value });
  };

  const renderLeaseInputs = (lease: Lease, group: 'a' | 'b') => (
    <div className="rounded-xl border border-slate-200 p-4">
      <p className="mb-3 text-sm font-bold text-ink-900">{lease.label}</p>
      <div className="grid grid-cols-2 gap-3 text-sm">
        <label>
          <span className="text-xs text-ink-400">إيجار شهري/م²</span>
          <input
            type="number"
            value={lease.rent}
            onChange={(e) => setLease(group, 'rent', Number(e.target.value))}
            className="mt-1 w-full rounded-lg border border-slate-200 px-2.5 py-1.5 outline-none focus:border-brand-500"
          />
        </label>
        <label>
          <span className="text-xs text-ink-400">المساحة (م²)</span>
          <input
            type="number"
            value={lease.area}
            onChange={(e) => setLease(group, 'area', Number(e.target.value))}
            className="mt-1 w-full rounded-lg border border-slate-200 px-2.5 py-1.5 outline-none focus:border-brand-500"
          />
        </label>
        <label>
          <span className="text-xs text-ink-400">المدة (سنوات)</span>
          <input
            type="number"
            value={lease.term}
            onChange={(e) => setLease(group, 'term', Number(e.target.value))}
            className="mt-1 w-full rounded-lg border border-slate-200 px-2.5 py-1.5 outline-none focus:border-brand-500"
          />
        </label>
        <label>
          <span className="text-xs text-ink-400">تصعيد سنوي %</span>
          <input
            type="number"
            value={lease.escalation}
            onChange={(e) => setLease(group, 'escalation', Number(e.target.value))}
            className="mt-1 w-full rounded-lg border border-slate-200 px-2.5 py-1.5 outline-none focus:border-brand-500"
          />
        </label>
      </div>
    </div>
  );

  return (
    <div className="card mt-6 overflow-hidden">
      <div className="border-b border-slate-200 bg-brand-50 px-5 py-3 text-sm font-semibold text-brand-800">
        🧮 حاسبة مقارنة عقود الإيجار (NPV)
      </div>

      <div className="grid gap-4 p-5 sm:grid-cols-2">
        {renderLeaseInputs(a, 'a')}
        {renderLeaseInputs(b, 'b')}
      </div>

      <div className="px-5 pb-4">
        <label className="text-sm font-semibold text-ink-900">معدل الخصم السنوي % <span className="font-normal text-ink-400">(معدل تكلفة رأس المال)</span></label>
        <input
          type="range"
          min="0"
          max="20"
          step="0.5"
          value={discount}
          onChange={(e) => setDiscount(Number(e.target.value))}
          className="mt-2 w-full accent-teal-600"
        />
        <span className="chip mt-2 bg-brand-100 text-brand-700" dir="ltr">{discount}%</span>
      </div>

      <div className="mx-5 mb-5 rounded-xl p-4 ring-2 ring-brand-500 bg-brand-50 text-sm text-brand-800">
        <p className="text-base font-bold" dir="ltr">أ: {Math.round(npvA).toLocaleString('en-US')} جنيه | ب: {Math.round(npvB).toLocaleString('en-US')} جنيه</p>
        <p className="mt-1">
          NPV الأقل = الأفضل مالياً (التكلفة الإجمالية المخصومة للقيمة الحالية). الأفضل الحالي: <strong>العقد {better}</strong>
        </p>
        <p className="mt-2 text-xs opacity-80">المقارنة بمعيار واحد: تكلفة الإيجار الكلية بعد خصم القيمة الزمنية. لا يغني عن دراسة الموقع والبنية والخدمات.</p>
      </div>
    </div>
  );
}