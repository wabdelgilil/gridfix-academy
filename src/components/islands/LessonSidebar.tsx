import { useEffect, useState } from 'react';
import { curriculum, type PlanStation } from '../../data/curriculum';
import { loadProgress } from '../../lib/storage';
import type { Language } from '../../i18n/ui';

interface Props {
  course: string;
  currentStationId: string;
  currentLessonId: string;
}

function getInitialLang(): Language {
  try {
    const stored = localStorage.getItem('cfm-lang');
    if (stored === 'en' || stored === 'ar') return stored;
  } catch {}
  return 'ar';
}

function useLang(): Language {
  const [lang, setLang] = useState<Language>('ar');
  useEffect(() => {
    setLang(getInitialLang());
    const onChange = (e: Event) => {
      const detail = (e as CustomEvent<{ lang?: string }>).detail;
      if (detail?.lang === 'en' || detail?.lang === 'ar') setLang(detail.lang);
    };
    window.addEventListener('cfm-lang-changed', onChange);
    return () => window.removeEventListener('cfm-lang-changed', onChange);
  }, []);
  return lang;
}

function useProgress(course: string) {
  const [completed, setCompleted] = useState<string[]>([]);
  useEffect(() => {
    setCompleted(loadProgress(course).completedLessons);
  }, [course]);
  return completed;
}

function StationNode({
  station,
  course,
  currentStationId,
  currentLessonId,
  completed,
  lang,
}: {
  station: PlanStation;
  course: string;
  currentStationId: string;
  currentLessonId: string;
  completed: string[];
  lang: Language;
}) {
  const isActiveStation = station.id === currentStationId;
  const [open, setOpen] = useState(isActiveStation);

  useEffect(() => {
    if (isActiveStation) setOpen(true);
  }, [isActiveStation]);

  const doneCount = station.lessons.filter((l) => completed.includes(l.id)).length;
  const totalCount = station.lessons.length;

  return (
    <div>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        className={`flex w-full items-center gap-2 rounded-lg px-2.5 py-2 text-start text-xs font-semibold transition ${
          isActiveStation ? 'bg-brand-600 text-white shadow-sm' : 'text-ink-700 hover:bg-slate-50'
        }`}
      >
        <span className={`text-[10px] leading-none transition-transform ${open ? 'rotate-90' : ''}`}>▸</span>
        <span className="text-sm">{station.icon}</span>
        <span className="min-w-0 flex-1 truncate">
          <span className="block">{lang === 'ar' ? station.title : station.titleEn}</span>
        </span>
        <span className={`shrink-0 rounded-full px-1.5 py-0.5 text-[10px] font-bold ${isActiveStation ? 'bg-white/20' : 'bg-slate-100 text-ink-400'}`}>
          {doneCount}/{totalCount}
        </span>
      </button>

      {open && (
        <ul className="ms-3 mt-1 space-y-0.5 border-s border-slate-200 ps-2">
          {station.lessons.map((lesson) => {
            const isCurrent = lesson.id === currentLessonId;
            const isDone = completed.includes(lesson.id);
            return (
              <li key={lesson.id}>
                {lesson.status === 'live' ? (
                  <a
                    href={`/${course}/lessons/${lesson.id}`}
                    aria-current={isCurrent ? 'true' : undefined}
                    className={`group flex items-center gap-2 rounded-md px-2.5 py-1.5 text-xs leading-relaxed transition ${
                      isCurrent
                        ? 'bg-brand-100 font-semibold text-brand-800'
                        : isDone
                          ? 'text-brand-800 hover:bg-brand-50'
                          : 'text-ink-600 hover:bg-slate-50 hover:text-ink-900'
                    }`}
                  >
                    <span className={`text-[11px] font-bold ${isCurrent ? 'text-brand-700' : isDone ? 'text-brand-600' : 'text-ink-400'}`}>
                      {lesson.number}
                    </span>
                    <span className="min-w-0 flex-1 truncate">
                      <span className={lang === 'en' ? 'block' : 'sr-only'}>{lesson.titleEn}</span>
                      <span className={lang === 'ar' ? 'block' : 'sr-only'}>{lesson.title}</span>
                    </span>
                    <span className={`shrink-0 text-xs ${isCurrent ? 'text-brand-700' : isDone ? 'text-brand-600' : 'text-slate-300'}`}>
                      {isDone ? '✓' : ''}
                    </span>
                  </a>
                ) : (
                  <div className="flex items-center gap-2 rounded-md px-2.5 py-1.5 text-xs text-ink-400">
                    <span className="text-[11px] font-bold">{lesson.number}</span>
                    <span className="min-w-0 flex-1 truncate">
                      <span className={lang === 'en' ? 'block' : 'sr-only'}>{lesson.titleEn}</span>
                      <span className={lang === 'ar' ? 'block' : 'sr-only'}>{lesson.title}</span>
                    </span>
                    <span className="text-[10px]">🔒</span>
                  </div>
                )}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

export default function LessonSidebar({ course, currentStationId, currentLessonId }: Props) {
  const completed = useProgress(course);
  const lang = useLang();
  const stations = curriculum.filter((s) => (s.courseId ?? 'cfm') === course);

  return (
    <nav aria-label={lang === 'ar' ? 'دروس الكورس' : 'Course lessons'} className="sticky top-24 h-fit max-h-[calc(100vh-8rem)] overflow-y-auto rounded-2xl border border-slate-200 bg-white p-3 shadow-sm">
      <p className="mb-2 px-2 font-semibold">
        <span className={lang === 'ar' ? 'block' : 'sr-only'}>🗂 المحطات والدروس</span>
        <span className={lang === 'en' ? 'block' : 'sr-only'}>🗂 Stations & Lessons</span>
      </p>
      <div className="space-y-1">
        {stations.map((station) => (
          <StationNode
            key={station.id}
            station={station}
            course={course}
            currentStationId={currentStationId}
            currentLessonId={currentLessonId}
            completed={completed}
            lang={lang}
          />
        ))}
      </div>
    </nav>
  );
}