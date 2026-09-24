import { useState, useEffect } from 'react';
import { getLastVisitedLesson, type LastVisitedLesson } from '../../../lib/storage';

export default function ResumeLearningWidget() {
  const [last, setLast] = useState<LastVisitedLesson | null>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const data = getLastVisitedLesson();
    if (data) {
      setLast(data);
    }
  }, []);

  if (!isClient || !last) return null;

  const timeAgo = getTimeAgo(last.visitedAt ?? new Date().toISOString());

  return (
    <a
      href={`/${last.courseId}/lessons/${last.lessonId}`}
      className="card group relative overflow-hidden border-brand-200 bg-gradient-to-l from-brand-50 to-white p-5 transition hover:border-brand-400 hover:shadow-md"
    >
      <div className="flex items-center gap-3">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-100 text-lg text-brand-700 transition-transform duration-200 group-hover:scale-110">
          ▶
        </span>
        <div className="min-w-0 flex-1">
          <p className="text-xs text-ink-400">تابع من حيث توقفت</p>
          <p className="mt-0.5 truncate font-bold text-ink-900">{last.lessonTitle}</p>
          <p className="mt-0.5 text-xs text-ink-400">
            {last.stationTitle} · {timeAgo}
          </p>
        </div>
        <span className="text-lg font-bold text-brand-600 transition-all duration-300 group-hover:-translate-x-1">←</span>
      </div>
    </a>
  );
}

function getTimeAgo(iso: string): string {
  const diff = Date.now() - new Date(iso).getTime();
  const mins = Math.floor(diff / 60000);
  if (mins < 1) return 'الآن';
  if (mins < 60) return `منذ ${mins} دقيقة`;
  const hrs = Math.floor(mins / 60);
  if (hrs < 24) return `منذ ${hrs} ساعة`;
  const days = Math.floor(hrs / 24);
  return `منذ ${days} يوم`;
}