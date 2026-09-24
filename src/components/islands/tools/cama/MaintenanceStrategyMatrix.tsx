import { useState } from 'react';

type FailureType = 'age' | 'random' | 'condition' | 'initial';
type Consequence = 'safety' | 'environmental' | 'operational' | 'non-operational';
type Detection = 'cbm' | 'inspection' | 'none';

interface StrategyResult {
  strategy: string;
  color: string;
  description: string;
}

const PRESETS = [
  { id: 'pump', name: 'مضخة تبريد رئيسية — فشل عشوائي وتأثير إنتاجي', failure: 'random' as FailureType, consequence: 'operational' as Consequence, detection: 'cbm' as Detection },
  { id: 'bearing', name: 'محمل رولمان — تآكل تدريجي وقابل للمراقبة', failure: 'age' as FailureType, consequence: 'operational' as Consequence, detection: 'cbm' as Detection },
  { id: 'lamp', name: 'لمبة ممر مخزن — فشل عشوائي وبلا أثر', failure: 'random' as FailureType, consequence: 'non-operational' as Consequence, detection: 'none' as Detection },
  { id: 'valve', name: 'صمام أمان — فشل مخفي يمس السلامة', failure: 'condition' as FailureType, consequence: 'safety' as Consequence, detection: 'inspection' as Detection },
];

function getStrategy(failure: FailureType, consequence: Consequence, detection: Detection): StrategyResult {
  if (consequence === 'safety' || consequence === 'environmental') {
    if (detection === 'cbm')
      return { strategy: 'مراقبة مشروطة بالحالة (CBM)', color: 'bg-teal-50 text-teal-800 ring-teal-500', description: 'يهدد السلامة أو البيئة ويوجد مؤشر تدهور قابل للقياس.راقب الاهتزاز أو الحرارة وتدخل قبل الفشل.' };
    if (detection === 'inspection')
      return { strategy: 'فحص وظيفي دوري (FFI)', color: 'bg-rose-50 text-rose-800 ring-rose-500', description: 'يهدد السلامة والفحص الدوري يثبت الجاهزية عند الطلب. إن تعذر يُعاد التصميم.' };
    return { strategy: 'إعادة تصميم إلزامية', color: 'bg-rose-50 text-rose-800 ring-rose-500', description: 'يهدد السلامة ولا يمكن رصده: الإعادة هي الخيار الوحيد المتبقي.' };
  }
  if (consequence === 'operational') {
    if (failure === 'age' && detection === 'cbm')
      return { strategy: 'صيانة مشروطة بالحالة (CBM)', color: 'bg-teal-50 text-teal-800 ring-teal-500', description: 'يسبب خسائر إنتاجية وله نافذة تدهور: المراقبة المشروطة هي الأنسب اقتصادياً.' };
    if (failure === 'age')
      return { strategy: 'صيانة وقائية مجدولة (PM)', color: 'bg-amber-50 text-amber-800 ring-amber-500', description: 'التآكل مرتبط بالعمر: استبدال أو عمرة بعد ساعات تشغيل محددة.' };
    if (detection === 'cbm')
      return { strategy: 'مراقبة مشروطة (CBM)', color: 'bg-teal-50 text-teal-800 ring-teal-500', description: 'يمكن رصده مشروطاً: المراقبة الدورية أو النماذج التنبؤية.' };
    return { strategy: 'التشغيل حتى العطل (RTF)', color: 'bg-slate-100 text-slate-800 ring-slate-500', description: 'لا يمكن رصده ولا يهدد السلامة: الإصلاح عند العطل اقتصادياً.' };
  }
  if (detection === 'cbm')
    return { strategy: 'مراقبة مشروطة عند الجدوى', color: 'bg-teal-50 text-800 ring-teal-500', description: 'بلا أثر على الإنتاج أو السلامة: المراقبة فقط إذا كانت التكلفة أقل من تكلفة الفشل.' };
  return { strategy: 'التشغيل حتى العطل (RTF)', color: 'bg-slate-100 text-slate-800 ring-slate-500', description: 'لا أثر على السلامة أو الإنتاج: تكلفة الصيانة الوقائية تفوق تكلفة الإصلاح عند العطل.' };
}

const failureTypes: { value: FailureType; label: string }[] = [
  { value: 'age', label: 'مرتبط بالعمر (تآكل تدريجي)' },
  { value: 'random', label: 'عشوائي (لا يرتبط بالعمر)' },
  { value: 'condition', label: 'مرتبط بمؤشرات الحالة' },
  { value: 'initial', label: 'أخطاء تركيب أو تشغيل أولي' },
];

const consequences: { value: Consequence; label: string }[] = [
  { value: 'safety', label: 'يهدد السلامة أو الأرواح' },
  { value: 'environmental', label: 'يسبب تلوثاً بيئياً' },
  { value: 'operational', label: 'يسبب خسائر إنتاجية' },
  { value: 'non-operational', label: 'بلا أثر على الإنتاج أو السلامة' },
];

const detections: { value: Detection; label: string }[] = [
  { value: 'cbm', label: 'يوجد مؤشر قابل للقياس (اهتزاز/حرارة/صوت)' },
  { value: 'inspection', label: 'يمكن كشفه بالفحص البصري أو الوظيفي' },
  { value: 'none', label: 'مفاجئ ولا يمكن كشفه مسبقاً' },
];

export default function MaintenanceStrategyMatrix() {
  const [failure, setFailure] = useState<FailureType>('random');
  const [consequence, setConsequence] = useState<Consequence>('operational');
  const [detection, setDetection] = useState<Detection>('cbm');

  const result = getStrategy(failure, consequence, detection);

  const applyPreset = (id: string) => {
    const p = PRESETS.find((x) => x.id === id);
    if (!p) return;
    setFailure(p.failure);
    setConsequence(p.consequence);
    setDetection(p.detection);
  };

  return (
    <div className="card mt-6 overflow-hidden">
      <div className="border-b border-slate-200 bg-brand-50 px-5 py-3 text-sm font-semibold text-brand-800">
        🔧 مصفوفة استراتيجيات الصيانة — اختر تحليل العطل والتأثير والكشف
      </div>

      <div className="space-y-4 p-5">
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs font-semibold text-ink-500">سرّع التحليل:</span>
          {PRESETS.map((p) => (
            <button
              key={p.id}
              type="button"
              onClick={() => applyPreset(p.id)}
              className="cursor-pointer rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-xs font-semibold text-ink-700 transition hover:bg-slate-50"
            >
              {p.name}
            </button>
          ))}
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          <div>
            <label className="mb-1.5 block text-xs font-bold text-ink-500">نوع الفشل</label>
            <div className="space-y-1">
              {failureTypes.map((ft) => (
                <label key={ft.value} className="flex cursor-pointer items-center gap-2 rounded-lg p-1.5 text-xs text-ink-700 transition hover:bg-slate-50">
                  <input type="radio" name="failure" checked={failure === ft.value} onChange={() => setFailure(ft.value)} className="accent-brand-600" />
                  {ft.label}
                </label>
              ))}
            </div>
          </div>

          <div>
            <label className="mb-1.5 block text-xs font-bold text-ink-500">التأثير</label>
            <div className="space-y-1">
              {consequences.map((c) => (
                <label key={c.value} className="flex cursor-pointer items-center gap-2 rounded-lg p-1.5 text-xs text-ink-700 transition hover:bg-slate-50">
                  <input type="radio" name="consequence" checked={consequence === c.value} onChange={() => setConsequence(c.value)} className="accent-brand-600" />
                  {c.label}
                </label>
              ))}
            </div>
          </div>

          <div>
            <label className="mb-1.5 block text-xs font-bold text-ink-500">قابلية الكشف</label>
            <div className="space-y-1">
              {detections.map((d) => (
                <label key={d.value} className="flex cursor-pointer items-center gap-2 rounded-lg p-1.5 text-xs text-ink-700 transition hover:bg-slate-50">
                  <input type="radio" name="detection" checked={detection === d.value} onChange={() => setDetection(d.value)} className="accent-brand-600" />
                  {d.label}
                </label>
              ))}
            </div>
          </div>
        </div>

        <div className={`rounded-xl p-4 text-sm ring-2 ${result.color}`}>
          <p className="font-bold">الاستراتيجية الموصى بها: {result.strategy}</p>
          <p className="mt-1 text-xs font-normal opacity-90">{result.description}</p>
        </div>

        <div className="rounded-lg bg-slate-50 p-3 text-[11px] leading-relaxed text-ink-500">
          <strong>ملاحظة:</strong> هذه أداة توجيهية. القرار النهائي يعتمد على تحليل FMEA كامل و cost-benefit_ خاص لكل أصل ووضعه التشغيلي.
        </div>
      </div>
    </div>
  );
}
