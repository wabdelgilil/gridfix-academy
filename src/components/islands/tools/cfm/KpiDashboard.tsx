import { useState } from 'react';

interface Preset {
  id: string;
  label: string;
  unit: string;
  betterLower: boolean;
  warn: number;
  bad: number;
  hint: string;
}

const presets: Preset[] = [
  { id: 'avail', label: 'توافر المعدات الحرجة', unit: '%', betterLower: false, warn: 97, bad: 95, hint: 'نسبة الوقت الذي تعمل فيه الأصول الحرجة وفق الجدول; تُقاس دورياً وتُقارن بالهدف المتفق عليه' },
  { id: 'rtf', label: 'متوسط زمن الاستجابة للطوارئ', unit: 'دقيقة', betterLower: true, warn: 30, bad: 45, hint: 'من لحظة البلاغ لوصول الفريق; الأقل أفضل' },
  { id: 'cm', label: 'إنجاز أوامر العمل حسب العقد', unit: '%', betterLower: false, warn: 90, bad: 80, hint: 'نسبة الأوامر المغلقة داخل الفترة المتفق عليها (SLA)' },
  { id: 'euivalue', label: 'كثافة الطاقة (EUI)', unit: 'kWh/m²/سنة', betterLower: true, warn: 150, bad: 180, hint: 'كلما انخفض انخفضت الكلفة والانبعاثات مع السلامة' },
  { id: 'omcost', label: 'كلفة التشغيل لكل متر مربع', unit: 'ريال/م²', betterLower: true, warn: 80, bad: 100, hint: 'مجموع كلف التشغيل والأعمال على المساحة الإجمالية' },
  { id: 'satis', label: 'رضا المستخدمين', unit: '/10', betterLower: false, warn: 7, bad: 6, hint: 'قياس استطلاعات دورية للتجربة الفعلية' },
];

export default function KpiDashboard() {
  const [id, setId] = useState(presets[0].id);
  const [target, setTarget] = useState('98');
  const [actual, setActual] = useState('96.5');

  const p = presets.find((x) => x.id === id) ?? presets[0];
  const t = Number(target);
  const a = Number(actual);

  let verdict = '';
  let tone = 'bg-slate-100 text-ink-500';
  let ratio = 0;
  if (Number.isFinite(t) && Number.isFinite(a) && t > 0) {
    const isOk = p.betterLower ? a <= t : a >= t;
    const diffPct = p.betterLower ? ((a - t) / t) * 100 : ((t - a) / t) * 100;
    if (isOk) verdict = 'أداء ضمن المستهدف';
    else if (diffPct <= 10) verdict = 'قريب من المستهدف — راقب الاتجاه';
    else verdict = 'تجاوز الحد — لزم تدخل';
    tone = isOk ? 'bg-teal-50 text-teal-800' : diffPct <= 10 ? 'bg-amber-50 text-amber-800' : 'bg-rose-50 text-rose-800';
    ratio = p.betterLower ? Math.min(100, Math.max(0, 100 - diffPct)) : Math.min(100, Math.max(0, 100 + diffPct));
  }

  return (
    <div className="card mt-6 overflow-hidden">
      <div className="border-b border-slate-200 bg-brand-50 px-5 py-3 text-sm font-semibold text-brand-800">
        📊 لوحة مؤشرات الأداء — اختبر صحة أي KPI
      </div>

      <div className="space-y-4 p-5">
        <div className="grid gap-3 sm:grid-cols-3">
          <label className="text-sm font-semibold text-ink-700">
            المؤشر
            <select value={id} onChange={(e) => setId(e.target.value)} className="mt-1.5 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-ink-800">
              {presets.map((x) => (
                <option key={x.id} value={x.id}>{x.label}</option>
              ))}
            </select>
          </label>
          <label className="text-sm font-semibold text-ink-700">
            الهدف ({p.unit})
            <input value={target} onChange={(e) => setTarget(e.target.value)} type="number" className="mt-1.5 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-ink-800" />
          </label>
          <label className="text-sm font-semibold text-ink-700">
            الأداء الفعلي ({p.unit})
            <input value={actual} onChange={(e) => setActual(e.target.value)} type="number" className="mt-1.5 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-ink-800" />
          </label>
        </div>

        <div>
          <div className={`flex items-center justify-between rounded-lg px-4 py-3 text-sm font-bold ring-1 ${tone}`}>
            <span>{verdict || 'أدخل هدفاً وفقاً فعلياً لترى رأياً'}</span>
            <span dir="ltr">{t ? `${a} / ${t} ${p.unit}` : ''}</span>
          </div>
          <div dir="ltr" className="mt-2 h-2.5 w-full overflow-hidden rounded-full bg-slate-200">
            <div className="h-full rounded-full bg-gradient-to-r from-teal-400 to-emerald-500 transition-all" style={{ width: `${Math.max(0, Math.min(100, ratio))}%` }} />
          </div>
        </div>

        <p className="rounded-xl bg-slate-100 p-3 text-xs leading-relaxed text-ink-500">{p.hint} • المؤشر يُقرأ بمقارنته بقياس سابق ودوري، ولا يصلح مؤشر بلا أفق ومسؤول.</p>
      </div>
    </div>
  );
}