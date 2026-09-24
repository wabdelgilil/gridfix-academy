import { useState } from 'react';

const DIMENSIONS = [
  {
    id: 'accuracy',
    label: 'الدقة',
    labelEn: 'Accuracy',
    description: 'هل تعكس البيانات الواقع الفعلي؟',
    color: 'blue',
  },
  {
    id: 'completeness',
    label: 'الشمولية',
    labelEn: 'Completeness',
    description: 'هل تغطي البيانات كل ما تحتاجه؟',
    color: 'teal',
  },
  {
    id: 'timeliness',
    label: 'التوقيت',
    labelEn: 'Timeliness',
    description: 'هل البيانات محدثة في لحظة القرار؟',
    color: 'amber',
  },
  {
    id: 'consistency',
    label: 'التناسق',
    labelEn: 'Consistency',
    description: 'هل البيانات موحدة عبر الأنظمة؟',
    color: 'purple',
  },
  {
    id: 'validity',
    label: 'الصلاحية',
    labelEn: 'Validity',
    description: 'هل البيانات ضمن النطاق المقبول؟',
    color: 'rose',
  },
];

function getColorClasses(color: string, value: number) {
  if (value >= 80) {
    switch (color) {
      case 'blue': return 'bg-blue-100 text-blue-800 ring-blue-500';
      case 'teal': return 'bg-teal-100 text-teal-800 ring-teal-500';
      case 'amber': return 'bg-amber-100 text-amber-800 ring-amber-500';
      case 'purple': return 'bg-purple-100 text-purple-800 ring-purple-500';
      case 'rose': return 'bg-rose-100 text-rose-800 ring-rose-500';
    }
  }
  if (value >= 50) return 'bg-amber-50 text-amber-700 ring-amber-400';
  return 'bg-rose-50 text-rose-700 ring-rose-400';
}

function getRating(value: number) {
  if (value >= 90) return 'ممتاز';
  if (value >= 80) return 'جيد';
  if (value >= 60) return 'مقبول';
  if (value >= 40) return 'يحتاج تحسين';
  return 'ضعيف جداً';
}

function getRecommendations(scores: Record<string, number>) {
  const recs: string[] = [];
  if (scores.accuracy < 70) recs.push('قم بمراجعة يدوية لعينة عشوائية من السجلات وقارنها بالواقع الميداني.');
  if (scores.completeness < 70) recs.push('حدد الحقول الفارغة الأكثر تأثيراً وأكملها تدريجياً بدلاً من محاولة ملء الكل دفعة واحدة.');
  if (scores.timeliness < 70) recs.push('أدخل سياسة تحديث دورية (شهرياً على الأقل) مع تعيين مسؤول محدد.');
  if (scores.consistency < 70) recs.push('أنشئ دليل تسمية موحد وطبّقه على جميع الأنظمة قبل ربطها.');
  if (scores.validity < 70) recs.push('أضف قواعد تحقق آلية (Validation Rules) ترفض القيم خارج النطاق المقبول.');
  if (recs.length === 0) recs.push('بياناتك جيدة — حافظ على المراجعة الدورية المستمرة.');
  return recs;
}

export default function DataQualityScanner() {
  const [scores, setScores] = useState<Record<string, number>>({
    accuracy: 75,
    completeness: 60,
    timeliness: 80,
    consistency: 55,
    validity: 85,
  });

  const overall = Math.round(
    Object.values(scores).reduce((a, b) => a + b, 0) / DIMENSIONS.length
  );
  const recommendations = getRecommendations(scores);

  return (
    <div className="card mt-6 overflow-hidden">
      <div className="border-b border-slate-200 bg-brand-50 px-5 py-3 text-sm font-semibold text-brand-800">
        🔍 ماسح جودة البيانات — قيّم أبعاد جودة بياناتك الخمسة
      </div>

      <div className="space-y-5 p-5">
        {/* Sliders */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {DIMENSIONS.map((dim) => (
            <div key={dim.id} className="rounded-xl border border-slate-200 p-4">
              <div className="mb-2 flex items-center justify-between">
                <label className="text-sm font-bold text-ink-700">
                  {dim.label} <span className="text-[10px] font-normal text-ink-400">({dim.labelEn})</span>
                </label>
                <span className={`rounded-full px-2 py-0.5 text-[10px] font-bold ring-1 ${getColorClasses(dim.color, scores[dim.id])}`}>
                  {scores[dim.id]}%
                </span>
              </div>
              <p className="mb-2 text-[11px] text-ink-500">{dim.description}</p>
              <input
                type="range"
                min={0}
                max={100}
                value={scores[dim.id]}
                onChange={(e) => setScores((prev) => ({ ...prev, [dim.id]: Number(e.target.value) }))}
                className="w-full cursor-pointer"
                aria-label={`نسبة ${dim.label}`}
              />
              <p className="mt-1 text-center text-[10px] font-semibold text-ink-400">
                {getRating(scores[dim.id])}
              </p>
            </div>
          ))}
        </div>

        {/* Overall Score */}
        <div className={`rounded-xl p-4 text-center ring-2 ${
          overall >= 80
            ? 'bg-teal-50 text-teal-800 ring-teal-500'
            : overall >= 60
              ? 'bg-amber-50 text-amber-800 ring-amber-500'
              : 'bg-rose-50 text-rose-800 ring-rose-500'
        }`}>
          <p className="text-lg font-bold">
            التقييم الإجمالي: {overall}% — {getRating(overall)}
          </p>
        </div>

        {/* Recommendations */}
        <div className="rounded-xl border border-slate-200 bg-white p-4">
          <p className="mb-2 text-sm font-bold text-ink-800">توصيات التحسين:</p>
          <ul className="space-y-1.5">
            {recommendations.map((rec, i) => (
              <li key={i} className="flex items-start gap-2 text-xs text-ink-600">
                <span className="mt-0.5 text-teal-500">▸</span>
                {rec}
              </li>
            ))}
          </ul>
        </div>

        {/* Footer */}
        <div className="rounded-xl bg-slate-50 px-4 py-3">
          <p className="text-[11px] text-ink-500">
            جودة البيانات = الدقة × الشمولية × التوقيت × التناسق × الصلاحية. عامل واحد ضعيف يُضعف النتيجة الإجمالية.
          </p>
        </div>
      </div>
    </div>
  );
}
