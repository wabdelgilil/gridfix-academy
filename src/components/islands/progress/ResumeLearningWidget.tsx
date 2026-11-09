import { useState, useEffect } from 'react';
import useLang from '../../../lib/useLang';
import { getTimeAgo } from '../../../lib/dateUtils';
import { getLastVisitedLesson, type LastVisitedLesson } from '../../../lib/storage';
import { resolveLessonEnglish } from '../../../data/curriculum';

export default function ResumeLearningWidget() {
  const [last, setLast] = useState<LastVisitedLesson | null>(null);
  const [isClient, setIsClient] = useState(false);
  const lang = useLang();

  useEffect(() => {
    setIsClient(true);
    const data = getLastVisitedLesson();
    if (data) {
      setLast(data);
    }
  }, []);

  if (!isClient || !last) return null;

  const timeAgo = getTimeAgo(last.visitedAt ?? new Date().toISOString(), lang);
  const resolved = resolveLessonEnglish(last.courseId, last.lessonId);
  const lessonTitle = lang === 'en' ? (last.lessonTitleEn ?? resolved.lessonTitleEn ?? last.lessonTitle) : last.lessonTitle;
  const stationTitle = lang === 'en' ? (last.stationTitleEn ?? resolved.stationTitleEn ?? last.stationTitle) : last.stationTitle;

  return (
    <a
      href={`/${last.courseId}/lessons/${last.lessonId}/`}
      className="card group relative overflow-hidden border-brand-200 bg-gradient-to-l from-brand-50 to-white p-5 transition hover:border-brand-400 hover:shadow-md"
    >
      <div className="flex items-center gap-3">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-100 text-lg text-brand-700 transition-transform duration-200 group-hover:scale-110">
          ▶
        </span>
        <div className="min-w-0 flex-1">
          <p className="text-xs text-ink-400">{lang === 'en' ? 'Continue where you left off' : 'تابع من حيث توقفت'}</p>
          <p className="mt-0.5 truncate font-bold text-ink-900">{lessonTitle}</p>
          <p className="mt-0.5 text-xs text-ink-400">
            {stationTitle} · {timeAgo}
          </p>
        </div>
        <span className="text-lg font-bold text-brand-600 transition group-hover:-translate-x-1">←</span>
      </div>
    </a>
  );
}