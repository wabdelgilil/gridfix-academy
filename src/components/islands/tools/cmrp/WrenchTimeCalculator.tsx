import { useState } from 'react';

export default function WrenchTimeCalculator() {
  const [wrench, setWrench] = useState(150);
  const [travel, setTravel] = useState(80);
  const [waiting, setWaiting] = useState(150);
  const [meetings, setMeetings] = useState(40);

  const shift = 480;
  const percent = Math.round((wrench / shift) * 100);
  const worldClass = percent >= 55;
  const typical = percent >= 25 && percent <= 35;

  return (
    <div className="card mt-6 overflow-hidden">
      <div className="border-b border-slate-200 bg-brand-50 px-5 py-3 text-sm font-semibold text-brand-800">
        🔧 حاسبة زمن المفتاح — توزيع الوردية (480 دقيقة)
      </div>

      <div className="space-y-4 p-5">
        <div className="grid gap-3 sm:grid-cols-2">
          <div>
            <label className="mb-1.5 block text-sm font-semibold text-teal-700">
              العمل المباشر على المعدة (دقيقة): {wrench}
            </label>
            <input
              type="range"
              min={60}
              max={350}
              step={10}
              value={wrench}
              onChange={(e) => setWrench(Number(e.target.value))}
              className="w-full cursor-pointer accent-teal-600"
            />
          </div>
          <div>
            <label className="mb-1.5 block text-sm font-semibold text-ink-700">
              التنقل داخل المصنع (دقيقة): {travel}
            </label>
            <input
              type="range"
              min={10}
              max={150}
              step={10}
              value={travel}
              onChange={(e) => setTravel(Number(e.target.value))}
              className="w-full cursor-pointer accent-amber-500"
            />
          </div>
          <div>
            <label className="mb-1.5 block text-sm font-semibold text-ink-700">
              انتظار القطع والتصاريح (دقيقة): {waiting}
            </label>
            <input
              type="range"
              min={10}
              max={200}
              step={10}
              value={waiting}
              onChange={(e) => setWaiting(Number(e.target.value))}
              className="w-full cursor-pointer accent-amber-500"
            />
          </div>
          <div>
            <label className="mb-1.5 block text-sm font-semibold text-ink-700">
              اجتماعات وتنسيق (دقيقة): {meetings}
            </label>
            <input
              type="range"
              min={0}
              max={120}
              step={10}
              value={meetings}
              onChange={(e) => setMeetings(Number(e.target.value))}
              className="w-full cursor-pointer accent-amber-500"
            />
          </div>
        </div>

        <div className={`rounded-xl p-4 text-sm ring-2 ${worldClass ? 'bg-teal-50 text-teal-800 ring-teal-500' : 'bg-amber-50 text-amber-800 ring-amber-500'}`}>
          <p className="font-bold">
            زمن المفتاح: <strong dir="ltr">{percent}%</strong> —{' '}
            {worldClass ? 'مستوى عالمي ممتاز (55% إلى 65%)' : typical ? 'مستوى تفاعلي معتاد (25% إلى 35%)' : 'خارج النطاقين — راجع التوزيع'}
          </p>
          <p className="mt-1 text-xs font-normal opacity-90">
            {worldClass
              ? 'التخطيط وحزم العمل الجاهزة يضاعفان الإنتاجية دون جهد إضافي — حافظ على هذا المستوى.'
              : 'أكثر من ثلثي الوردية يضيع في التنقل والانتظار — التخطيط المسبق وتجميع القطع هما العلاج.'}
          </p>
          <p className="mt-1 text-xs font-normal opacity-70">
            تذكر: مهمة وقائية شهرية (30 يوما) تقبل نافذة سماح ±3 أيام فقط وفق قاعدة 10%، والمستهدف العالمي للالتزام الوقائي 95% إلى 99%.
          </p>
        </div>
      </div>
    </div>
  );
}
