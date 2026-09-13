import { useState } from 'react';
import { loadProgress, saveProgress, toggleLessonComplete, isLessonComplete } from '../../../lib/storage';
import { translate } from '../../../i18n/translations';
import type { Language } from '../../../i18n/ui';

interface Props {
  lessonId: string;
  lang?: Language;
}

export default function CompleteLessonButton({ lessonId, lang = 'ar' }: Props) {
  const [done, setDone] = useState<boolean>(() => isLessonComplete(loadProgress(), lessonId));

  const toggle = () => {
    setDone((d) => {
      saveProgress(toggleLessonComplete(loadProgress(), lessonId));
      return !d;
    });
  };

  return (
    <button
      type="button"
      onClick={toggle}
      className={`mt-8 w-full rounded-xl px-5 py-3.5 text-base font-bold transition ${
        done
          ? 'bg-brand-100 text-brand-700 ring-1 ring-brand-500'
          : 'bg-brand-600 text-white hover:bg-brand-700 cursor-pointer'
      }`}
    >
      {done ? translate(lang, 'lesson.completed') : translate(lang, 'lesson.complete')}
    </button>
  );
}