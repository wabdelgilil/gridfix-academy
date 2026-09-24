import { useState } from 'react';

function zone(beta: number) {
  if (beta < 1)
    return {
      name: 'وفيات الرضع — فشل مبكر (Infant Mortality)',
      cls: 'bg-violet-50 text-violet-800 ring-violet-500',
      cause: 'معدل الفشل ينخفض مع الزمن. الأسباب: عيوب التصنيع وأخطاء التركيب والتلوث أثناء التجميع.',
      tactic: 'مراقبة الجودة والتدشين الدقيق واختبار التشغيل التجريبي (Burn-in)، وتجنب العمرات المتكررة التي تعيد المعدة لنقطة الخطر.',
    };
  if (beta <= 1.1)
    return {
      name: 'فشل عشوائي — معدل ثابت (Random Failure)',
      cls: 'bg-blue-50 text-blue-800 ring-blue-500',
      cause: 'معدل الفشل ثابت ومستقل عن ساعات التشغيل (التوزيع الأسي). شائع في الإلكترونيات والأنظمة المعقدة.',
      tactic: 'الصيانة الوقائية بالزمن غير مجدية — المراقبة المشروطة (CBM) أو التشغيل حتى العطل (RTF) للمعدات غير الحرجة.',
    };
  if (beta < 2.5)
    return {
      name: 'بداية التآكل الميكانيكي (Early Wear-out)',
      cls: 'bg-amber-50 text-amber-800 ring-amber-500',
      cause: 'معدل الفشل يتزايد تدريجياً مع العمر. شائع في كراسي التحميل والأجزاء الدوارة.',
      tactic: 'المراقبة المشروطة بالاهتزاز والزيوت (CBM) هي الأنسب، مع تخطيط العمرة استناداً للمؤشرات الفيزيائية.',
    };
  return {
    name: 'تآكل سريع يماثل التوزيع الطبيعي (Wear-out)',
    cls: 'bg-rose-50 text-rose-800 ring-rose-500',
    cause: 'معدل الفشل يرتفع بحدة بعد عمر محدد (يماثل التوزيع الطبيعي عند β ≈ 3.5). شائع في بطانات الفرامل والفلاتر وسيور الاحتكاك.',
    tactic: 'هنا فقط تنجح الصيانة الوقائية بالزمن (Time-Based PM): استبدل القطعة بعد ساعات محددة قبل بلوغ نقطة التآكل الحتمي.',
  };
}

export default function WeibullExplorer() {
  const [beta, setBeta] = useState(1.0);
  const [mtbf, setMtbf] = useState(2000);
  const [mttr, setMttr] = useState(10);

  const z = zone(beta);
  const availability = (mtbf / (mtbf + mttr)) * 100;

  return (
    <div className="card mt-6 overflow-hidden">
      <div className="border-b border-slate-200 bg-brand-50 px-5 py-3 text-sm font-semibold text-brand-800">
        📈 مستكشف ويبول — معامل الشكل β يحدد التكتيك
      </div>

      <div className="space-y-4 p-5">
        <div>
          <div className="mb-1 flex items-center justify-between text-sm font-semibold text-ink-700">
            <span>معامل الشكل بيتا (Beta)</span>
            <span className="rounded border border-slate-300 px-2 py-0.5 font-mono text-sm font-bold" dir="ltr">
              β = {beta.toFixed(2)}
            </span>
          </div>
          <input
            type="range"
            min="0.4"
            max="4.5"
            step="0.05"
            value={beta}
            onChange={(e) => setBeta(Number(e.target.value))}
            className="w-full cursor-pointer accent-brand-600"
          />
          <div className="flex flex-wrap gap-1.5 pt-1">
            {[
              { label: 'رضع 0.6', v: 0.6 },
              { label: 'عشوائي 1.0', v: 1.0 },
              { label: 'تآكل مبكر 1.8', v: 1.8 },
              { label: 'تآكل حاد 3.5', v: 3.5 },
            ].map((b) => (
              <button
                key={b.label}
                type="button"
                onClick={() => setBeta(b.v)}
                className="cursor-pointer rounded-lg border border-slate-300 bg-white px-2.5 py-1 font-mono text-[11px] font-bold text-ink-700 transition hover:bg-slate-50"
                dir="ltr"
              >
                β = {b.v.toFixed(1)}
              </button>
            ))}
          </div>
          <p className="mt-1 text-[11px] text-ink-500" dir="ltr">
            β &lt; 1 رضّع • β = 1 عشوائي ثابت • β &gt; 1 تآكل • β ≈ 3.5 توزيع طبيعي
          </p>
        </div>

        <div className={`rounded-xl p-4 text-sm ring-2 ${z.cls}`}>
          <p className="font-bold">المنطقة: {z.name}</p>
          <p className="mt-1 text-xs font-normal opacity-90">{z.cause}</p>
          <p className="mt-1 text-xs font-bold opacity-100">التكتيك: {z.tactic}</p>
        </div>

        <div className="rounded-xl border border-slate-200 p-4">
          <p className="text-sm font-bold text-ink-800">
            حاسبة الإتاحة الذاتية <span dir="ltr" className="font-mono text-xs font-semibold text-ink-500">(Ai = MTBF / (MTBF + MTTR))</span>
          </p>
          <div className="mt-3 grid gap-3 sm:grid-cols-3">
            <div>
              <label className="mb-1 block text-xs font-semibold text-ink-700">
                متوسط الوقت بين الأعطال (MTBF) بالساعة
              </label>
              <input
                type="number"
                min="1"
                value={mtbf}
                onChange={(e) => setMtbf(Math.max(1, Number(e.target.value) || 1))}
                className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 font-mono text-sm text-ink-800"
              />
            </div>
            <div>
              <label className="mb-1 block text-xs font-semibold text-ink-700">
                متوسط وقت الإصلاح (MTTR) بالساعة
              </label>
              <input
                type="number"
                min="0.1"
                step="0.5"
                value={mttr}
                onChange={(e) => setMttr(Math.max(0.1, Number(e.target.value) || 0.1))}
                className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 font-mono text-sm text-ink-800"
              />
            </div>
            <div className="flex flex-col justify-center rounded-lg bg-slate-50 px-3 py-2">
              <span className="text-xs font-semibold text-ink-500">الإتاحة الذاتية (Ai)</span>
              <strong className="font-mono text-xl" dir="ltr">{availability.toFixed(2)}%</strong>
              <span className="text-[11px] text-ink-500">
                {availability >= 98 ? 'مستوى عالمي ممتاز (World-Class)' : 'يحتاج تحسين MTBF أو MTTR'}
              </span>
            </div>
          </div>
          <p className="mt-2 text-[11px] text-ink-500">
            مثال محلول: توربينة عملت 6000 ساعة مع 3 أعطال و30 ساعة إصلاح — MTBF = 2000 وMTTR = 10 والإتاحة 99.5%.
          </p>
        </div>
      </div>
    </div>
  );
}
