import { useState } from 'react';

const initialStages = [
  { id: 'wash', name: 'الغسيل والتعقيم', rate: 120 },
  { id: 'fill', name: 'التعبئة الدقيقة', rate: 80 },
  { id: 'cap', name: 'كبس الأغطية', rate: 110 },
  { id: 'pack', name: 'التغليف الكرتوني', rate: 130 },
];

const PROFIT_PER_UNIT = 5;

export default function BottleneckSimulator() {
  const [stages, setStages] = useState(initialStages);

  const updateRate = (id: string, rate: number) => {
    setStages((prev) => prev.map((s) => (s.id === id ? { ...s, rate } : s)));
  };

  const reset = () => setStages(initialStages);

  const bottleneckRate = Math.min(...stages.map((s) => s.rate));
  const bottleneck = stages.find((s) => s.rate === bottleneckRate) ?? stages[0];
  const bottleneckIndex = stages.findIndex((s) => s.id === bottleneck.id);
  const upstream = bottleneckIndex > 0 ? stages[bottleneckIndex - 1] : null;
  const wip = upstream && upstream.rate > bottleneckRate ? upstream.rate - bottleneckRate : 0;
  const hourlyLoss = bottleneckRate * 60 * PROFIT_PER_UNIT;

  return (
    <div className="card mt-6 overflow-hidden">
      <div className="border-b border-slate-200 bg-brand-50 px-5 py-3 text-sm font-semibold text-brand-800">
        ⚙️ محاكي الاختناق — سرعة الخط يحكمها أضعف محطة
      </div>

      <div className="space-y-5 p-5">
        <div className="grid gap-4 sm:grid-cols-2">
          {stages.map((stage) => {
            const isBottleneck = stage.id === bottleneck.id;
            return (
              <div
                key={stage.id}
                className={`rounded-xl border p-4 ${isBottleneck ? 'border-rose-400 bg-rose-50' : 'border-slate-200 bg-white'}`}
              >
                <div className="flex items-center justify-between">
                  <p className="text-sm font-bold text-ink-800">{stage.name}</p>
                  {isBottleneck && (
                    <span className="rounded-full bg-rose-600 px-2 py-0.5 text-[11px] font-bold text-white">
                      نقطة الاختناق
                    </span>
                  )}
                </div>
                <p className="mt-1 text-xs text-ink-500">
                  الطاقة: <strong dir="ltr">{stage.rate}</strong> زجاجة/دقيقة
                </p>
                <input
                  type="range"
                  min={40}
                  max={200}
                  step={5}
                  value={stage.rate}
                  onChange={(e) => updateRate(stage.id, Number(e.target.value))}
                  className="mt-2 w-full cursor-pointer"
                  aria-label={`طاقة محطة ${stage.name}`}
                />
                <p className="mt-1 text-[11px] text-ink-500">
                  {isBottleneck
                    ? 'هذه المحطة تحكم سرعة المصنع كله — أي تحسين هنا يرفع المبيعات فوراً.'
                    : `طاقة فائضة (+${stage.rate - bottleneckRate}) — تسريعها لن يزيد المبيعات.`}
                </p>
              </div>
            );
          })}
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          <div className="rounded-xl bg-teal-50 p-4 ring-2 ring-teal-500">
            <p className="text-xs font-semibold text-teal-800">إنتاجية الخط الفعلية</p>
            <p className="mt-1 text-xl font-bold text-teal-800">
              <strong dir="ltr">{bottleneckRate}</strong> زجاجة/دقيقة
            </p>
            <p className="mt-1 text-[11px] text-teal-700">تساوي سرعة أبطأ محطة في الخط</p>
          </div>
          <div className={`rounded-xl p-4 ring-2 ${wip > 0 ? 'bg-rose-50 ring-rose-500' : 'bg-slate-50 ring-slate-300'}`}>
            <p className={`text-xs font-semibold ${wip > 0 ? 'text-rose-800' : 'text-ink-500'}`}>
              تكدس المخزون تحت التشغيل
            </p>
            <p className={`mt-1 text-xl font-bold ${wip > 0 ? 'text-rose-800' : 'text-ink-700'}`}>
              {wip > 0 ? (
                <>
                  +<strong dir="ltr">{wip}</strong> زجاجة/دقيقة
                </>
              ) : (
                'متوازن (0)'
              )}
            </p>
            <p className="mt-1 text-[11px] opacity-80">
              {wip > 0 ? 'رأس مال مجمد وخطر تلف قبل الاختناق' : 'تدفق سلس دون هدر تخزيني'}
            </p>
          </div>
          <div className="rounded-xl bg-amber-50 p-4 ring-2 ring-amber-500">
            <p className="text-xs font-semibold text-amber-800">خسارة ساعة توقف في الاختناق</p>
            <p className="mt-1 text-xl font-bold text-amber-800">
              $<strong dir="ltr">{hourlyLoss.toLocaleString('en-US')}</strong>
            </p>
            <p className="mt-1 text-[11px] text-amber-700">ساعة ضائعة هنا = ساعة من مبيعات المصنع كله</p>
          </div>
        </div>

        <div className="flex items-center justify-between rounded-xl bg-slate-50 px-4 py-3">
          <p className="text-xs text-ink-500">
            جرّب رفع التعبئة فوق 110 ولاحظ انتقال الاختناق إلى التغطية — هذه هي الخطوة الخامسة لنظرية القيود.
          </p>
          <button
            type="button"
            onClick={reset}
            className="shrink-0 cursor-pointer rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-xs font-bold text-ink-700"
          >
            إعادة الضبط ↺
          </button>
        </div>
      </div>
    </div>
  );
}
