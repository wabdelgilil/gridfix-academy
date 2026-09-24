import { useState, useCallback, useEffect } from 'react';
import { loadProgress, saveProgress, toggleLessonComplete, isLessonComplete } from '../../../lib/storage';
import { translate } from '../../../i18n/translations';

interface Props {
  course: string;
  lessonId: string;
}

export default function CompleteLessonButton({ course, lessonId }: Props) {
  const [done, setDone] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    setDone(isLessonComplete(loadProgress(course), lessonId));
    setIsInitialized(true);
  }, [course, lessonId]);

  const toggle = useCallback(() => {
    setDone((prev) => {
      const newDone = !prev;
      saveProgress(toggleLessonComplete(loadProgress(course), lessonId), course);
      if (newDone) {
        setShowConfetti(true);
        setTimeout(() => setShowConfetti(false), 2000);
      }
      return newDone;
    });
  }, [course, lessonId]);

  if (!isInitialized) {
    return (
      <div className="w-full rounded-xl bg-slate-100 px-5 py-4 text-base font-bold text-slate-400 animate-pulse-soft">
        <span className="flex items-center justify-center gap-2">
          <span className="text-lg">📖</span>
          <span data-lang="ar">جاري التحميل...</span>
          <span data-lang="en">Loading...</span>
        </span>
      </div>
    );
  }

  return (
    <div className="relative">
      {showConfetti && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none animate-fade-in">
          <div className="text-4xl animate-scale-in">🎉</div>
        </div>
      )}
      <button
        type="button"
        onClick={toggle}
        className={`w-full rounded-xl px-5 py-4 text-base font-bold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 ${
          done
            ? 'bg-brand-100 text-brand-700 ring-2 ring-brand-500 hover:bg-brand-50 hover:shadow-md'
            : 'bg-brand-600 text-white hover:bg-brand-700 hover:shadow-lg hover:shadow-brand-500/25 cursor-pointer active:scale-[0.98]'
        }`}
        aria-pressed={done}
      >
        <span className="flex items-center justify-center gap-2">
          {done ? (
            <>
              <span className="text-lg animate-scale-in">✓</span>
              <span data-lang="ar">{translate('ar', 'lesson.completed')}</span>
              <span data-lang="en">{translate('en', 'lesson.completed')}</span>
            </>
          ) : (
            <>
              <span className="text-lg">📖</span>
              <span data-lang="ar">{translate('ar', 'lesson.complete')}</span>
              <span data-lang="en">{translate('en', 'lesson.complete')}</span>
            </>
          )}
        </span>
      </button>
    </div>
  );
}
