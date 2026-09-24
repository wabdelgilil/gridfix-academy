import { useState, useEffect } from 'react';
import { loadProgress } from '../../../lib/storage';

interface Props {
  course: string;
  stationId: string;
  /** ids of all lessons belonging to this station */
  lessonIds: string[];
}

export default function StationProgress({ course, stationId, lessonIds }: Props) {
  const [progress] = useState(() => loadProgress(course));
  const [lang, setLang] = useState<'ar' | 'en'>('ar');
  const completed = lessonIds.filter((id) => progress.completedLessons.includes(id)).length;
  const pct = lessonIds.length ? Math.round((completed / lessonIds.length) * 100) : 0;
  const stationNumber = stationId.match(/\d+$/)?.[0] ?? stationId;

  useEffect(() => {
    setLang(document.documentElement.lang === 'en' ? 'en' : 'ar');
    const onChange = () => setLang(document.documentElement.lang === 'en' ? 'en' : 'ar');
    document.addEventListener('cfm-lang-changed', onChange);
    return () => document.removeEventListener('cfm-lang-changed', onChange);
  }, []);

  const getStatusColor = () => {
    if (pct === 100) return 'bg-emerald-500';
    if (pct >= 50) return 'bg-brand-500';
    if (pct > 0) return 'bg-amber-500';
    return 'bg-slate-300';
  };

  const getStatusText = () => {
    if (lang === 'en') {
      if (pct === 100) return '✓ Complete';
      if (pct >= 50) return 'In progress';
      if (pct > 0) return 'Started';
      return 'Not started';
    }
    if (pct === 100) return '✓ مكتمل';
    if (pct >= 50) return 'جاري التقدم';
    if (pct > 0) return 'بدأ';
    return 'لم يبدأ';
  };

  return (
    <div className="card overflow-hidden">
      <div className="flex items-center justify-between bg-slate-50 px-4 py-3">
        <div className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-100 text-sm font-bold text-brand-700">{stationNumber}</span>
          <span className="text-sm font-semibold text-ink-900">{lang === 'en' ? 'Your progress in this station' : 'تقدمك في المحطة'}</span>
        </div>
        <span className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ${pct === 100 ? 'bg-emerald-100 text-emerald-700' : pct > 0 ? 'bg-brand-100 text-brand-700' : 'bg-slate-100 text-slate-500'}`}>
          {getStatusText()}
        </span>
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between text-sm mb-2">
          <span className="text-ink-500">
            {lang === 'en' ? `${completed} of ${lessonIds.length} lessons` : `${completed} من ${lessonIds.length} دروس`}
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
          {lang === 'en'
            ? 'Lesson completion clicks are saved in your browser (localStorage).'
            : 'تُحفظ نقرات إتمام الدروس في متصفحك (localStorage).'}
        </p>
      </div>
    </div>
  );
}
