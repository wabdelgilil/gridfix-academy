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
  { id: 'availability', label: 'إتاحة الأصول (Availability)', unit: '%', betterLower: false, warn: 92, bad: 88, hint: 'نسبة الوقت الذي تكون فيه الأصول جاهزة للعمل مقسومةً على الوقت الكلي المخطط; تُحسب من MTBF و MTTR معاً' },
  { id: 'oee', label: 'الفعالية الكلية للمعدات (OEE)', unit: '%', betterLower: false, warn: 70, bad: 60, hint: 'حاصل ضرب الإتاحة × الأداء × الجودة; مؤشر مركب لمدى استثمار الأصل في القيمة' },
  { id: 'pmc', label: 'الالتزام بالصيانة الوقائية', unit: '%', betterLower: false, warn: 90, bad: 80, hint: 'نسبة أوامر الصيانة الوقائية المنفذة من المقرر لها خلال الفترة; يقل التحقّق دون تجاوز 90%' },
  { id: 'cmcc', label: 'الصيانة التصحيحية من إجمالي الأعمال', unit: '%', betterLower: true, warn: 35, bad: 50, hint: 'النسبة المئوية لأعمال الصيانة الطارئة غير المخطط لها من إجمالي الأعمال; كلما ارتفعت دلّت على ضعف التخطيط' },
  { id: 'mttr', label: 'متوسط زمن الإصلاح (MTTR)', unit: 'ساعة', betterLower: true, warn: 8, bad: 12, hint: 'المتوسط الزمني لإصلاح العطل من لحظة توقفه حتى عودته للعمل; الأقل يشير إلى قابلية صيانة أعلى' },
  { id: 'mtbf', label: 'متوسط زمن ما بين الأعطال (MTBF)', unit: 'ساعة', betterLower: false, warn: 360, bad: 240, hint: 'الزمن المتوسط بين عطل وآخر; يرتفع مع تحسن استراتيجية الصيانة والنظافة والتشغيل الأمثل' },
  { id: 'erv', label: 'تكلفة الصيانة إلى قيمة الاستبدال (ERV)', unit: '%', betterLower: true, warn: 3, bad: 5, hint: 'نسبة نفقات الصيانة السنوية إلى القيمة الاستبدالية; المعدل العالمي الجيد بين 2% و 3%' },
];

export default function KpiDashboard() {
  const [id, setId] = useState(presets[0].id);
  const [target, setTarget] = useState('95');
  const [actual, setActual] = useState('93');

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
        📊 لوحة مؤشرات KPI — اختبر صحة أي مؤشر أداء في إدارة الأصول
      </div>

      <div className="space-y-4 p-5">
        <p className="text-sm leading-relaxed text-ink-600">
          المؤشرات وحدها لا تعني شيئاً دون هدف محدد وأفق زمني. اختر مؤشراً من لوحة الأصول، وأدخل الهدف والأداء الفعلي لتحصل على حكم فوري وقراءة علمية.
        </p>

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
            <span>{verdict || 'أدخل هدفاً وفقاً فعلياً لترى الرأي'}</span>
            <span dir="ltr">{t ? `${a} / ${t} ${p.unit}` : ''}</span>
          </div>
          <div dir="ltr" className="mt-2 h-2.5 w-full overflow-hidden rounded-full bg-slate-200">
            <div className="h-full rounded-full bg-gradient-to-r from-teal-400 to-emerald-500 transition-all" style={{ width: `${Math.max(0, Math.min(100, ratio))}%` }} />
          </div>
        </div>

        <details className="rounded-xl border border-slate-200 bg-white p-3 text-sm">
          <summary className="cursor-pointer font-semibold text-ink-700">كيف أبني لوحة مؤشرات سليمة؟</summary>
          <div className="mt-2 space-y-1 text-xs leading-relaxed text-ink-600">
            <p>• لكل مؤشر: هدف رقمي، قياس (قياس دوري)، مصدر بيانات، ومسؤول عن النتيجة.</p>
            <p>• اخلط المؤشرات القيادية (الالتزام الوقائي) بالنتائج التأخيرية (الإتاحة والتوقف).</p>
            <p>• قارن بدورية (شهرية أو ربع سنوية) ولا تكافئ على رقم دون تحقق من سلامة السجلات.</p>
            <p>• المؤشر المنعزل عن الهدف عديم القيمة، والمؤشر بلا مسؤول لا يقاد.</p>
          </div>
        </details>

        <p className="rounded-xl bg-slate-100 p-3 text-xs leading-relaxed text-ink-500">{p.hint} • المؤشر يُقرأ بمقارنته بقياس سابق ودوري، ولا يصلح مؤشر بلا أفق زمني ومسؤول متابعة.</p>
      </div>
    </div>
  );
}