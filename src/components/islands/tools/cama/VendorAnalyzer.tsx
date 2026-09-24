import { useState } from 'react';

interface Vendor {
  id: string;
  name: string;
  quality: number;
  delivery: number;
  response: number;
  price: number;
}

function classify(v: Vendor): { label: string; color: string; bg: string } {
  const avg = (v.quality + v.delivery + v.response + v.price) / 4;
  if (avg >= 85) return { label: 'استراتيجي', color: 'text-emerald-800', bg: 'bg-emerald-50 ring-emerald-300' };
  if (avg >= 70) return { label: 'مفضل', color: 'text-brand-800', bg: 'bg-brand-50 ring-brand-300' };
  if (avg >= 55) return { label: 'مرشّح للتطوير', color: 'text-amber-800', bg: 'bg-amber-50 ring-amber-300' };
  return { label: 'يحتاج استبدال', color: 'text-rose-800', bg: 'bg-rose-50 ring-rose-300' };
}

function avgScore(v: Vendor) {
  return Math.round(((v.quality + v.delivery + v.response + v.price) / 4) * 10) / 10;
}

const INITIAL_VENDORS: Vendor[] = [
  { id: 'v1', name: 'شركة الأمل لل_parts', quality: 92, delivery: 88, response: 85, price: 78 },
  { id: 'v2', name: 'مؤسسة النخبة الصناعية', quality: 75, delivery: 80, response: 70, price: 90 },
  { id: 'v3', name: 'شركة البركة للمعدات', quality: 60, delivery: 55, response: 50, price: 85 },
];

const FIELDS: { key: keyof Omit<Vendor, 'id' | 'name'>; label: string; description: string }[] = [
  { key: 'quality', label: 'جودة التسليم', description: 'نسبة التسليم بدون عيوب' },
  { key: 'delivery', label: 'الالتزام بالمواعيد', description: 'نسبة التسليم في الوقت المحدد' },
  { key: 'response', label: 'سرعة الاستجابة', description: 'سرعة الرد على الاستفسارات' },
  { key: 'price', label: 'القيمة الإجمالية', description: 'ليس الأرخص بل الأفضل قيمة' },
];

export default function VendorAnalyzer() {
  const [vendors, setVendors] = useState<Vendor[]>(INITIAL_VENDORS);
  const [newName, setNewName] = useState('');
  const [sortBy, setSortBy] = useState<'avg' | 'quality' | 'delivery'>('avg');

  const updateField = (id: string, key: keyof Omit<Vendor, 'id' | 'name'>, value: number) => {
    setVendors((prev) => prev.map((v) => (v.id === id ? { ...v, [key]: Math.min(100, Math.max(0, value)) } : v)));
  };

  const addVendor = () => {
    if (!newName.trim()) return;
    setVendors((prev) => [
      ...prev,
      { id: `v${Date.now()}`, name: newName.trim(), quality: 70, delivery: 70, response: 70, price: 70 },
    ]);
    setNewName('');
  };

  const removeVendor = (id: string) => {
    setVendors((prev) => prev.filter((v) => v.id !== id));
  };

  const sorted = [...vendors].sort((a, b) => {
    if (sortBy === 'avg') return avgScore(b) - avgScore(a);
    return b[sortBy] - a[sortBy];
  });

  return (
    <div className="card mt-6 overflow-hidden">
      <div className="border-b border-slate-200 bg-brand-50 px-5 py-3 text-sm font-semibold text-brand-800">
        🏢 محلل الموردين — قيّم وأضف وقارن بين مورديك
      </div>

      <div className="space-y-4 p-5">
        <div className="flex flex-wrap items-center gap-3">
          <div className="flex items-center gap-2">
            <input
              type="text"
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
              placeholder="اسم مورد جديد..."
              className="rounded-lg border border-slate-300 px-3 py-1.5 text-sm text-ink-700 placeholder:text-ink-400 focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500"
              onKeyDown={(e) => e.key === 'Enter' && addVendor()}
            />
            <button
              type="button"
              onClick={addVendor}
              className="cursor-pointer rounded-lg bg-brand-600 px-3 py-1.5 text-sm font-semibold text-white transition hover:bg-brand-700"
            >
              إضافة
            </button>
          </div>
          <div className="mr-auto flex items-center gap-1">
            <span className="text-xs text-ink-500">ترتيب حسب:</span>
            {(['avg', 'quality', 'delivery'] as const).map((s) => (
              <button
                key={s}
                type="button"
                onClick={() => setSortBy(s)}
                className={`cursor-pointer rounded px-2 py-1 text-xs font-semibold transition ${
                  sortBy === s ? 'bg-brand-600 text-white' : 'bg-slate-100 text-ink-600 hover:bg-slate-200'
                }`}
              >
                {s === 'avg' ? 'المتوسط' : s === 'quality' ? 'الجودة' : 'التسليم'}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-3">
          {sorted.map((vendor) => {
            const cls = classify(vendor);
            return (
              <div key={vendor.id} className={`rounded-xl border p-4 ring-1 ${cls.bg}`}>
                <div className="mb-3 flex items-center justify-between">
                  <div>
                    <span className="text-sm font-bold text-ink-800">{vendor.name}</span>
                    <span className={`mr-2 rounded-full px-2 py-0.5 text-xs font-bold ${cls.color}`}>
                      {cls.label}
                    </span>
                    <span className="mr-2 text-xs text-ink-500" dir="ltr">
                      ({avgScore(vendor)}/100)
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={() => removeVendor(vendor.id)}
                    className="cursor-pointer text-xs text-rose-500 transition hover:text-rose-700"
                  >
                    حذف
                  </button>
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  {FIELDS.map((field) => (
                    <div key={field.key}>
                      <div className="mb-1 flex items-center justify-between">
                        <label className="text-xs font-semibold text-ink-600">{field.label}</label>
                        <span className="text-xs font-bold text-ink-700" dir="ltr">
                          {vendor[field.key]}%
                        </span>
                      </div>
                      <input
                        type="range"
                        min={0}
                        max={100}
                        value={vendor[field.key]}
                        onChange={(e) => updateField(vendor.id, field.key, Number(e.target.value))}
                        className="w-full cursor-pointer"
                        aria-label={field.label}
                      />
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {vendors.length === 0 && (
          <p className="py-4 text-center text-sm text-ink-500">لم تُضف أي مورد بعد. أضف مورداً جديداً أعلاه.</p>
        )}
      </div>
    </div>
  );
}
