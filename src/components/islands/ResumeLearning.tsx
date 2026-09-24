import { useState, useEffect } from 'react';
import { getLastLesson } from '../../lib/storage';
import { resolveLessonEnglish } from '../../data/curriculum';

interface Props {
  course: string;
}

export default function ResumeLearning({ course }: Props) {
  const [last, setLast] = useState<{ lessonId: string; title: string; titleEn?: string; stationTitle: string; stationTitleEn?: string; at: string } | null>(null);
  const [lang, setLang] = useState<'ar' | 'en'>('ar');

  useEffect(() => {
    const langFromDoc = document.documentElement.lang === 'en' ? 'en' : 'ar';
    setLang(langFromDoc);
    const onChange = () => setLang(document.documentElement.lang === 'en' ? 'en' : 'ar');
    document.addEventListener('cfm-lang-changed', onChange);
    return () => document.removeEventListener('cfm-lang-changed', onChange);
  }, []);

  useEffect(() => {
    const data = getLastLesson(course);
    if (data && data.courseId === course) {
      setLast(data);
    }
  }, [course]);

  if (!last) return null;

  const timeAgo = getTimeAgo(last.at, lang);
  const resolved = resolveLessonEnglish(course, last.lessonId);
  const lessonTitle = lang === 'en' ? (last.titleEn ?? resolved.lessonTitleEn ?? last.title) : last.title;
  const stationTitle = lang === 'en' ? (last.stationTitleEn ?? resolved.stationTitleEn ?? last.stationTitle) : last.stationTitle;

  return (
    <a
      href={`/${course}/lessons/${last.lessonId}`}
      className="card group relative overflow-hidden border-brand-200 bg-gradient-to-l from-brand-50 to-white p-5 transition hover:border-brand-400 hover:shadow-md"
    >
      <div className="flex items-center gap-3">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-100 text-lg text-brand-700">
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

function getTimeAgo(iso: string, lang: 'ar' | 'en'): string {
  const diff = Date.now() - new Date(iso).getTime();
  const mins = Math.floor(diff / 60000);
  if (lang === 'en') {
    if (mins < 1) return 'just now';
    if (mins < 60) return `${mins} min ago`;
    const hrs = Math.floor(mins / 60);
    if (hrs < 24) return `${hrs} hr ago`;
    const days = Math.floor(hrs / 24);
    return `${days} day${days === 1 ? '' : 's'} ago`;
  }
  if (mins < 1) return 'الآن';
  if (mins < 60) return `منذ ${mins} دقيقة`;
  const hrs = Math.floor(mins / 60);
  if (hrs < 24) return `منذ ${hrs} ساعة`;
  const days = Math.floor(hrs / 24);
  return `منذ ${days} يوم`;
}
