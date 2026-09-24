import { useState } from 'react';

export default function WeeklyScheduler() {
  const [techs, setTechs] = useState(10);
  const [hoursPerTech, setHoursPerTech] = useState(40);
  const [deductions, setDeductions] = useState(70);
  const [scheduled, setScheduled] = useState(330);
  const [breakIns, setBreakIns] = useState(30);

  const gross = techs * hoursPerTech;
  const net = Math.max(0, gross - deductions);
  const load = net > 0 ? Math.round((scheduled / net) * 100) : 0;
  const displaced = Math.min(scheduled, breakIns);
  const executed = Math.max(0, scheduled - displaced);
  const compliance = scheduled > 0 ? (executed / scheduled) * 100 : 0;
  const good = compliance >= 80;

  return (
    <div className="card mt-6 overflow-hidden">
      <div className="border-b border-slate-200 bg-brand-50 px-5 py-3 text-sm font-semibold text-brand-800">
        📅 محاكي الجدولة الأسبوعية — صافي الطاقة مقابل الحمل
      </div>

      <div className="space-y-4 p-5">
        <div className="grid gap-3 sm:grid-cols-2">
          <div>
            <label className="mb-1.5 block text-sm font-semibold text-ink-700">عدد الفنيين: {techs}</label>
            <input
              type="range"
              min={2}
              max={25}
              value={techs}
              onChange={(e) => setTechs(Number(e.target.value))}
              className="w-full cursor-pointer accent-amber-500"
            />
          </div>
          <div>
            <label className="mb-1.5 block text-sm font-semibold text-ink-700">ساعات الفني أسبوعيا: {hoursPerTech}</label>
            <input
              type="range"
              min={24}
              max={48}
              value={hoursPerTech}
              onChange={(e) => setHoursPerTech(Number(e.target.value))}
              className="w-full cursor-pointer accent-amber-500"
            />
          </div>
          <div>
            <label className="mb-1.5 block text-sm font-semibold text-ink-700">
              الساعات المستقطعة (إجازات وتدريب واجتماعات): {deductions}
            </label>
            <input
              type="range"
              min={0}
              max={200}
              step={5}
              value={deductions}
              onChange={(e) => setDeductions(Number(e.target.value))}
              className="w-full cursor-pointer accent-rose-500"
            />
          </div>
          <div>
            <label className="mb-1.5 block text-sm font-semibold text-ink-700">
              ساعات الطوارئ الدخيلة (Break-ins): {breakIns}
            </label>
            <input
              type="range"
              min={0}
              max={150}
              step={5}
              value={breakIns}
              onChange={(e) => setBreakIns(Number(e.target.value))}
              className="w-full cursor-pointer accent-rose-600"
            />
          </div>
        </div>

        <div>
          <label className="mb-1.5 block text-sm font-semibold text-ink-700">
            ساعات الأعمال المجدولة: {scheduled} (صافي الطاقة: {net} ساعة)
          </label>
          <input
            type="range"
            min={0}
            max={Math.max(net, 1)}
            step={5}
            value={Math.min(scheduled, Math.max(net, 1))}
            onChange={(e) => setScheduled(Number(e.target.value))}
            className="w-full cursor-pointer accent-emerald-600"
          />
        </div>

        <div className="grid gap-2 text-center sm:grid-cols-3">
          <div className="rounded-xl bg-slate-100 p-3">
            <p className="text-[11px] font-bold text-ink-500">صافي الطاقة</p>
            <p className="font-mono text-xl font-black text-ink-900" dir="ltr">
              {net} Hrs
            </p>
            <p className="text-[10px] text-ink-400">الإجمالي {gross} − المستقطع {deductions}</p>
          </div>
          <div className="rounded-xl bg-slate-100 p-3">
            <p className="text-[11px] font-bold text-ink-500">نسبة التحميل</p>
            <p className={`font-mono text-xl font-black ${load === 100 ? 'text-teal-700' : 'text-amber-600'}`} dir="ltr">
              {load}%
            </p>
            <p className="text-[10px] text-ink-400">القاعدة: جدولة 100% من الصافي</p>
          </div>
          <div className={`rounded-xl p-3 ring-2 ${good ? 'bg-teal-50 ring-teal-500' : 'bg-amber-50 ring-amber-500'}`}>
            <p className="text-[11px] font-bold text-ink-500">الالتزام بالجدول</p>
            <p className={`font-mono text-xl font-black ${good ? 'text-teal-700' : 'text-amber-600'}`} dir="ltr">
              {compliance.toFixed(1)}%
            </p>
            <p className="text-[10px] text-ink-400">المستهدف العالمي ≥ 80%</p>
          </div>
        </div>

        <div className={`rounded-xl p-4 text-sm ring-2 ${good ? 'bg-teal-50 text-teal-800 ring-teal-500' : 'bg-amber-50 text-amber-800 ring-amber-500'}`}>
          <p className="text-xs leading-relaxed">
            {load < 100
              ? `تركت ${net - scheduled} ساعة فارغة عمدا — قانون باركنسون يحذر: العمل يتمدد ليملأ الوقت المتاح فتتباطأ الوتيرة وتضيع الساعات.`
              : 'حمّلت الجدول بنسبة 100% — هذا هو المعيار الصحيح.'}{' '}
            {breakIns > 0 &&
              `الطوارئ الدخيلة (${breakIns} ساعة) أزاحت ${displaced} ساعة مجدولة إلى التراكم وخفضت الالتزام إلى ${compliance.toFixed(1)}%.`}
          </p>
        </div>
      </div>
    </div>
  );
}
