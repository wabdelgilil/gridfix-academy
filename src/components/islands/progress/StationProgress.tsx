import { useState } from 'react';
import { loadProgress } from '../../../lib/storage';

interface Props {
  course: string;
  stationId: string;
  /** ids of all lessons belonging to this station */
  lessonIds: string[];
}

export default function StationProgress({ course, stationId, lessonIds }: Props) {
  const [progress] = useState(() => loadProgress(course));
  const completed = lessonIds.filter((id) => progress.completedLessons.includes(id)).length;
  const pct = lessonIds.length ? Math.round((completed / lessonIds.length) * 100) : 0;
  const stationNumber = stationId.match(/\d+$/)?.[0] ?? stationId;

  const getStatusColor = () => {
    if (pct === 100) return 'bg-emerald-500';
    if (pct >= 50) return 'bg-brand-500';
    if (pct > 0) return 'bg-amber-500';
    return 'bg-slate-300';
  };

  const getStatusText = () => {
    if (pct === 100) return { ar: '✓ مكتمل', en: '✓ Complete' };
    if (pct >= 50) return { ar: 'جاري التقدم', en: 'In progress' };
    if (pct > 0) return { ar: 'بدأ', en: 'Started' };
    return { ar: 'لم يبدأ', en: 'Not started' };
  };

  const statusText = getStatusText();

  return (
    <div className="card overflow-hidden">
      <div className="flex items-center justify-between bg-slate-50 px-4 py-3">
        <div className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-100 text-sm font-bold text-brand-700">{stationNumber}</span>
          <span className="text-sm font-semibold text-ink-900">
            <span data-lang="ar">تقدمك في المحطة</span>
            <span data-lang="en">Your progress in this station</span>
          </span>
        </div>
        <span className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ${pct === 100 ? 'bg-emerald-100 text-emerald-700' : pct > 0 ? 'bg-brand-100 text-brand-700' : 'bg-slate-100 text-slate-500'}`}>
          <span data-lang="ar">{statusText.ar}</span>
          <span data-lang="en">{statusText.en}</span>
        </span>
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between text-sm mb-2">
          <span className="text-ink-500">
            <span data-lang="ar">{completed} من {lessonIds.length} دروس</span>
            <span data-lang="en">{completed} of {lessonIds.length} lessons</span>
          </span>
          <span className="font-bold text-ink-900" dir="ltr">{pct}%</span>
        </div>
        <div className="h-3 overflow-hidden rounded-full bg-slate-100">
          <div
            className={`h-full rounded-full transition-all duration-700 ease-out ${getStatusColor()}`}
            style={{ width: `${pct}%` }}
          />
        </div>
        <p className="mt-3 text-xs text-ink-400">
          <span data-lang="ar">تُحفظ نقرات إتمام الدروس في متصفحك (localStorage).</span>
          <span data-lang="en">Lesson completion clicks are saved in your browser (localStorage).</span>
        </p>
      </div>
    </div>
  );
}
