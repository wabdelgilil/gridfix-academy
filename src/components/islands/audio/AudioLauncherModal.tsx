import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { curriculum } from '../../../data/curriculum';
import { audioLessons } from '../../../data/audioManifest';
import type { AudioLauncherModalProps, DriveTheme, LastPlayedAudio } from './launcher/types';
import LauncherHeader from './launcher/LauncherHeader';
import CourseSelectorSidebar from './launcher/CourseSelectorSidebar';
import StationLessonsList from './launcher/StationLessonsList';

export default function AudioLauncherModal({
  isOpen,
  onClose,
  initialCourseId,
  lang = 'ar',
}: AudioLauncherModalProps) {
  const [mounted, setMounted] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState<string>(initialCourseId || 'cmrp');
  const [driveTheme, setDriveTheme] = useState<DriveTheme>('day');
  const [lastPlayedLesson, setLastPlayedLesson] = useState<LastPlayedAudio | null>(null);

  useEffect(() => {
    setMounted(true);
    try {
      const storedTheme = localStorage.getItem('car-drive-theme');
      if (storedTheme === 'day' || storedTheme === 'night') {
        setDriveTheme(storedTheme);
      } else {
        const isDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
        setDriveTheme(isDark ? 'night' : 'day');
      }
    } catch {}
  }, []);

  const toggleDriveTheme = () => {
    const next = driveTheme === 'day' ? 'night' : 'day';
    setDriveTheme(next);
    try {
      localStorage.setItem('car-drive-theme', next);
    } catch {}
  };

  // Sync selectedCourse with initialCourseId ONLY when modal opens
  useEffect(() => {
    if (isOpen && initialCourseId) {
      setSelectedCourse(initialCourseId);
    }
  }, [isOpen, initialCourseId]);

  // Load last played lesson from localStorage
  useEffect(() => {
    if (!isOpen) return;
    try {
      const stored = localStorage.getItem('last-played-audio');
      if (stored) {
        setLastPlayedLesson(JSON.parse(stored));
      }
    } catch {}
  }, [isOpen]);

  // Close on Escape key
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen || !mounted) return null;

  // Count available audio lessons for each course
  const getAudioCount = (courseId: string) => {
    const stations = curriculum.filter((s) => (s.courseId ?? 'cfm') === courseId);
    return stations.reduce((acc, station) => {
      return acc + station.lessons.filter((l) => Boolean(audioLessons[l.id])).length;
    }, 0);
  };

  const isDay = driveTheme === 'day';

  const modalContent = (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-2 sm:p-4 md:p-6 bg-black/85 backdrop-blur-md animate-fadeIn select-none"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="audio-modal-title"
    >
      <div
        className={`relative flex flex-col w-full max-w-5xl h-[94vh] md:h-[86vh] rounded-3xl border-2 transition-colors duration-200 shadow-2xl overflow-hidden my-auto ${
          isDay
            ? 'bg-slate-100 border-slate-300 text-slate-900'
            : 'bg-slate-950 border-slate-800 text-slate-100'
        }`}
        onClick={(e) => e.stopPropagation()}
        dir={lang === 'ar' ? 'rtl' : 'ltr'}
      >
        <LauncherHeader
          isDay={isDay}
          lang={lang}
          toggleDriveTheme={toggleDriveTheme}
          onClose={onClose}
        />

        <div className="flex-1 overflow-hidden grid grid-cols-1 md:grid-cols-12">
          <CourseSelectorSidebar
            selectedCourse={selectedCourse}
            onSelectCourse={setSelectedCourse}
            lastPlayedLesson={lastPlayedLesson}
            isDay={isDay}
            lang={lang}
            getAudioCount={getAudioCount}
          />

          <StationLessonsList
            selectedCourse={selectedCourse}
            isDay={isDay}
            lang={lang}
          />
        </div>
      </div>
    </div>
  );

  return createPortal(modalContent, document.body);
}
