import { useState } from 'react';
import { loadProgress } from '../../../lib/storage';

interface Props {
  stationId: string;
  /** ids of all lessons belonging to this station */
  lessonIds: string[];
}

export default function StationProgress({ stationId, lessonIds }: Props) {
  const [progress] = useState(() => loadProgress());
  const completed = lessonIds.filter((id) => progress.completedLessons.includes(id)).length;
  const pct = lessonIds.length ? Math.round((completed / lessonIds.length) * 100) : 0;

  return (
    <div className="card p-4">
      <div className="mb-2 flex items-center justify-between text-sm">
        <span className="font-semibold text-ink-900">تقدمك في المحطة {stationId.replace('station-', '')}</span>
        <span className="font-bold text-brand-700" dir="ltr">{completed}/{lessonIds.length} • {pct}%</span>
      </div>
      <div className="h-2.5 overflow-hidden rounded-full bg-slate-100">
        <div
          className="h-full rounded-full bg-gradient-to-l from-brand-600 to-brand-400 transition-all duration-500"
          style={{ width: `${pct}%` }}
        />
      </div>
      <p className="mt-2 text-xs text-ink-400">تُحفظ نقرات إتمام الدروس في متصفحك (localStorage).</p>
    </div>
  );
}