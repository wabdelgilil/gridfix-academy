import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { courses } from '../../../data/courses';
import { curriculum } from '../../../data/curriculum';
import { audioLessons } from '../../../data/audioManifest';

interface AudioLauncherModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialCourseId?: string;
  lang?: 'ar' | 'en';
}

type DriveTheme = 'day' | 'night';

export default function AudioLauncherModal({
  isOpen,
  onClose,
  initialCourseId,
  lang = 'ar',
}: AudioLauncherModalProps) {
  const [mounted, setMounted] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState<string>(initialCourseId || 'cmrp');
  const [driveTheme, setDriveTheme] = useState<DriveTheme>('day');
  const [lastPlayedLesson, setLastPlayedLesson] = useState<{
    courseId: string;
    lessonId: string;
    lessonTitle: string;
  } | null>(null);

  useEffect(() => {
    setMounted(true);
    try {
      const storedTheme = localStorage.getItem('car-drive-theme');
      if (storedTheme === 'day' || storedTheme === 'night') {
        setDriveTheme(storedTheme);
      } else {
        // Default to day mode for high glare resistance, or detect preferences
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
  }, [isOpen]);

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

  // Filter stations for the currently selected course
  const currentCourseStations = curriculum
    .filter((s) => (s.courseId ?? 'cfm') === selectedCourse && s.status === 'live')
    .sort((a, b) => a.number - b.number);

  const selectedCourseMeta = courses.find((c) => c.id === selectedCourse);

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
        {/* Top Header: Car Mode, Day/Night Glare Toggle, Close button */}
        <div
          className={`flex items-center justify-between border-b px-4 py-3 sm:px-6 sm:py-3.5 shrink-0 ${
            isDay ? 'bg-white border-slate-200' : 'bg-slate-900 border-slate-800'
          }`}
        >
          <div className="flex items-center gap-3">
            <span
              className={`flex h-11 w-11 items-center justify-center rounded-2xl text-2xl shadow-xs border ${
                isDay
                  ? 'bg-amber-100 border-amber-300 text-amber-800'
                  : 'bg-slate-800 border-amber-500/40 text-white'
              }`}
            >
              🚗
            </span>
            <div>
              <div className="flex items-center gap-2">
                <h2 id="audio-modal-title" className="text-base sm:text-lg font-black tracking-tight">
                  {lang === 'ar' ? 'ادرس أثناء القيادة' : 'Drive & Learn'}
                </h2>
                <span
                  className={`text-xs px-2.5 py-0.5 rounded-full font-bold border ${
                    isDay
                      ? 'bg-emerald-100 text-emerald-800 border-emerald-300'
                      : 'bg-emerald-950/80 text-emerald-300 border-emerald-700/60'
                  }`}
                >
                  {lang === 'ar' ? 'مشغل السيارة' : 'Car Mode'}
                </span>
              </div>
              <p
                className={`text-xs hidden sm:block mt-0.5 font-medium ${
                  isDay ? 'text-slate-600' : 'text-slate-400'
                }`}
              >
                {lang === 'ar'
                  ? 'واجهة تفاعلية مصممة خصيصاً لشاشات السيارات والتابلت'
                  : 'Interface optimized for car dashboards and tablet mounts'}
              </p>
            </div>
          </div>

          {/* Quick Actions: Day/Night Mode Switch & Close */}
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              type="button"
              onClick={toggleDriveTheme}
              className={`flex h-12 items-center gap-2 px-3.5 sm:px-5 rounded-2xl font-black text-xs sm:text-sm border-2 transition-all shadow-md active:scale-95 cursor-pointer ${
                isDay
                  ? 'bg-amber-300 hover:bg-amber-400 text-amber-950 border-amber-400 ring-2 ring-amber-300/40'
                  : 'bg-slate-800 hover:bg-slate-700 text-amber-300 border-slate-700'
              }`}
              title={
                lang === 'ar'
                  ? 'التبديل بين وضع النهار عالي التباين ووضع الليل للقيادة'
                  : 'Toggle Day High-Contrast and Night Mode'
              }
            >
              <span className="text-xl sm:text-2xl">{isDay ? '☀️' : '🌙'}</span>
              <span>{isDay ? (lang === 'ar' ? 'وضع النهار' : 'Day Mode') : (lang === 'ar' ? 'وضع الليل' : 'Night Mode')}</span>
            </button>

            <button
              type="button"
              onClick={onClose}
              className={`flex h-12 w-12 items-center justify-center rounded-2xl border-2 text-lg font-black transition-all shadow-md active:scale-95 cursor-pointer ${
                isDay
                  ? 'bg-slate-200 hover:bg-slate-300 text-slate-900 border-slate-300'
                  : 'bg-slate-800 hover:bg-slate-700 text-slate-300 border-slate-700'
              }`}
              aria-label={lang === 'ar' ? 'إغلاق' : 'Close'}
            >
              ✕
            </button>
          </div>
        </div>

        {/* Responsive Content Area: Split 2-Column on Landscape / Tablets, Stacked on Mobile */}
        <div className="flex-1 overflow-hidden grid grid-cols-1 md:grid-cols-12">
          {/* Column 1: Course Selection, Quick Resume & Master CTA (Stacked on mobile, Sidebar on Tablet/Landscape) */}
          <div
            className={`md:col-span-4 lg:col-span-4 flex flex-col justify-between border-b md:border-b-0 md:border-l p-3 sm:p-4 overflow-y-auto shrink-0 ${
              isDay ? 'bg-white border-slate-200' : 'bg-slate-900/60 border-slate-800'
            }`}
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between px-1">
                <span className={`text-xs font-black uppercase tracking-wider ${isDay ? 'text-slate-800' : 'text-slate-300'}`}>
                  {lang === 'ar' ? '1. اختر الكورس التعليمي:' : '1. Choose Course:'}
                </span>
                <span className={`text-[11px] font-bold ${isDay ? 'text-slate-500' : 'text-slate-400'}`}>
                  {courses.length} {lang === 'ar' ? 'مسارات' : 'courses'}
                </span>
              </div>

              {/* Course Switcher Buttons: Grid on mobile, Stacked list on Tablet/Landscape */}
              <div className="grid grid-cols-3 md:grid-cols-1 gap-2">
                {courses.map((course) => {
                  const isSelected = selectedCourse === course.id;
                  const audioCount = getAudioCount(course.id);
                  return (
                    <button
                      key={course.id}
                      type="button"
                      onClick={() => setSelectedCourse(course.id)}
                      className={`flex flex-col md:flex-row md:items-center justify-between p-2.5 sm:p-3.5 rounded-2xl border-2 transition-all cursor-pointer text-right ${
                        isSelected
                          ? isDay
                            ? 'border-emerald-600 bg-emerald-50 text-slate-900 shadow-md ring-2 ring-emerald-500/30'
                            : 'border-emerald-500 bg-emerald-500/20 text-white shadow-lg shadow-emerald-500/10'
                          : isDay
                          ? 'border-slate-200 bg-slate-50 text-slate-800 hover:border-slate-300 hover:bg-white'
                          : 'border-slate-800 bg-slate-800/60 text-slate-300 hover:bg-slate-800 hover:border-slate-700'
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <span className="text-2xl sm:text-3xl shrink-0">{course.icon}</span>
                        <div className="min-w-0">
                          <div className="text-xs sm:text-sm font-black tracking-wide leading-tight">
                            {course.code}
                          </div>
                          <div
                            className={`text-[11px] font-bold truncate max-w-[130px] sm:max-w-none ${
                              isDay ? 'text-slate-600' : 'text-slate-400'
                            }`}
                          >
                            {lang === 'ar' ? course.title : course.titleEn}
                          </div>
                        </div>
                      </div>

                      <div className="mt-1 md:mt-0 shrink-0">
                        {audioCount > 0 ? (
                          <span
                            className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] sm:text-xs font-black border ${
                              isDay
                                ? 'bg-emerald-600 text-white border-emerald-700'
                                : 'bg-emerald-500/25 text-emerald-300 border-emerald-500/40'
                            }`}
                          >
                            <span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse"></span>
                            <span>{audioCount} {lang === 'ar' ? 'صوت جاهز' : 'Audio'}</span>
                          </span>
                        ) : (
                          <span
                            className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-bold border ${
                              isDay
                                ? 'bg-amber-100 text-amber-900 border-amber-300'
                                : 'bg-amber-500/20 text-amber-300 border-amber-500/30'
                            }`}
                          >
                            <span>🎙️</span>
                            <span>{lang === 'ar' ? 'قيد التسجيل' : 'Soon'}</span>
                          </span>
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Quick Resume Card (if user previously played a lesson) */}
              {lastPlayedLesson && (
                <div
                  className={`p-3 rounded-2xl border-2 flex items-center justify-between gap-2.5 shadow-xs ${
                    isDay
                      ? 'bg-amber-50 border-amber-300 text-slate-900'
                      : 'bg-amber-500/10 border-amber-500/30 text-white'
                  }`}
                >
                  <div className="min-w-0 flex-1">
                    <div className={`text-[10px] font-black uppercase tracking-wider ${isDay ? 'text-amber-900' : 'text-amber-300'}`}>
                      {lang === 'ar' ? '⚡ استئناف من حيث توقفت:' : '⚡ Resume listening:'}
                    </div>
                    <div className="text-xs sm:text-sm font-black truncate mt-0.5">
                      {lastPlayedLesson.lessonTitle}
                    </div>
                  </div>
                  <a
                    href={`/${lastPlayedLesson.courseId}/listen/?lesson=${lastPlayedLesson.lessonId}`}
                    className="shrink-0 rounded-xl bg-amber-500 hover:bg-amber-600 active:scale-95 px-3 py-2 text-xs font-black text-slate-950 transition shadow-sm flex items-center gap-1"
                  >
                    <span>▶</span>
                    <span>{lang === 'ar' ? 'متابعة' : 'Resume'}</span>
                  </a>
                </div>
              )}
            </div>

            {/* Bottom Button in Left Column: Open Full Driving Mode */}
            <div className="pt-3 mt-3 border-t hidden md:block">
              <a
                href={`/${selectedCourse}/listen/?playlist=true`}
                className="w-full flex items-center justify-center gap-2 rounded-2xl py-3 px-4 text-sm font-black transition shadow-md bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white active:scale-98"
              >
                <span>🚗</span>
                <span>{lang === 'ar' ? `فتح مشغل ${selectedCourseMeta?.code} بملء الشاشة` : `Open Full ${selectedCourseMeta?.code} Player`}</span>
                <span>↗</span>
              </a>
            </div>
          </div>

          {/* Column 2: Lessons & Stations Selection (Large Tactile Targets) */}
          <div
            className={`md:col-span-8 lg:col-span-8 flex flex-col h-full overflow-hidden ${
              isDay ? 'bg-slate-50' : 'bg-slate-950/80'
            }`}
          >
            {/* Header of Lesson List */}
            <div
              className={`flex items-center justify-between px-4 py-2.5 sm:px-6 sm:py-3 border-b shrink-0 ${
                isDay ? 'bg-white border-slate-200' : 'bg-slate-900/40 border-slate-800'
              }`}
            >
              <div className="flex items-center gap-2">
                <span className="text-sm font-black text-brand-600 dark:text-brand-400">
                  {lang === 'ar'
                    ? `2. اختر درساً للاستماع من (${selectedCourseMeta?.code}):`
                    : `2. Choose a lesson to listen from (${selectedCourseMeta?.code}):`}
                </span>
              </div>

              <a
                href={`/${selectedCourse}/listen/?playlist=true`}
                className={`md:hidden inline-flex items-center gap-1 rounded-xl px-2.5 py-1 text-xs font-black border transition ${
                  isDay
                    ? 'bg-slate-200 hover:bg-slate-300 text-slate-900 border-slate-300'
                    : 'bg-slate-800 hover:bg-slate-700 text-slate-200 border-slate-700'
                }`}
              >
                <span>🚗</span>
                <span>{lang === 'ar' ? 'المشغل الكامل' : 'Full Player'}</span>
              </a>
            </div>

            {/* Scrollable Lesson Feed */}
            <div className="flex-1 overflow-y-auto p-3 sm:p-5 space-y-4">
              {currentCourseStations.length === 0 ? (
                <div
                  className={`rounded-2xl border p-8 text-center font-bold ${
                    isDay ? 'bg-white border-slate-300 text-slate-600' : 'bg-slate-900 border-slate-800 text-slate-400'
                  }`}
                >
                  {lang === 'ar' ? 'لا توجد دروس متاحة حالياً لهذا الكورس.' : 'No lessons available for this course.'}
                </div>
              ) : (
                currentCourseStations.map((station) => (
                  <div
                    key={station.id}
                    className={`rounded-3xl border-2 p-3 sm:p-4 space-y-2.5 shadow-xs ${
                      isDay
                        ? 'bg-white border-slate-200/90'
                        : 'bg-slate-900/60 border-slate-800/80'
                    }`}
                  >
                    {/* Station Header */}
                    <div
                      className={`flex items-center justify-between border-b pb-2 ${
                        isDay ? 'border-slate-100' : 'border-slate-800/80'
                      }`}
                    >
                      <div className="text-xs sm:text-sm font-black flex items-center gap-2 text-brand-600 dark:text-brand-400">
                        <span
                          className={`flex h-6 w-6 items-center justify-center rounded-xl text-xs font-black ${
                            isDay ? 'bg-brand-100 text-brand-800' : 'bg-brand-500/20 text-brand-300'
                          }`}
                        >
                          {station.number}
                        </span>
                        <span>{lang === 'ar' ? station.title : station.titleEn}</span>
                      </div>
                      <span className={`text-xs font-bold ${isDay ? 'text-slate-500' : 'text-slate-500'}`}>
                        {station.lessons.length} {lang === 'ar' ? 'دروس' : 'lessons'}
                      </span>
                    </div>

                    {/* Lessons Grid: High Contrast, Tactile Touch */}
                    <div className="space-y-2">
                      {station.lessons.map((lesson) => {
                        const hasAudio = Boolean(audioLessons[lesson.id]);
                        return (
                          <div
                            key={lesson.id}
                            className={`flex items-center justify-between gap-3 p-3 rounded-2xl border-2 transition-all min-h-[58px] ${
                              hasAudio
                                ? isDay
                                  ? 'border-slate-300 bg-white hover:border-emerald-600 hover:shadow-md'
                                  : 'border-slate-800 bg-slate-900/90 hover:border-emerald-500/70'
                                : isDay
                                ? 'border-slate-200 bg-slate-50 opacity-80'
                                : 'border-slate-800/50 bg-slate-900/30 opacity-75'
                            }`}
                          >
                            <div className="min-w-0 flex-1">
                              <div className="flex items-center gap-2">
                                <span
                                  className={`text-xs sm:text-sm font-black px-1.5 py-0.5 rounded-lg ${
                                    isDay ? 'bg-slate-200 text-slate-900' : 'bg-slate-800 text-slate-300'
                                  }`}
                                >
                                  {lesson.number}
                                </span>
                                <span
                                  className={`text-xs sm:text-sm font-black truncate leading-snug ${
                                    isDay ? 'text-slate-950' : 'text-slate-100'
                                  }`}
                                >
                                  {lang === 'ar' ? lesson.title : lesson.titleEn}
                                </span>
                              </div>
                              <div
                                className={`text-[11px] font-bold dir-ltr text-right rtl:text-right mt-0.5 ${
                                  isDay ? 'text-slate-600' : 'text-slate-400'
                                }`}
                                dir="ltr"
                              >
                                {lang === 'ar' ? lesson.titleEn : lesson.title}
                              </div>
                            </div>

                            {/* Large Touch Actions */}
                            {hasAudio ? (
                              <a
                                href={`/${selectedCourse}/listen/?lesson=${lesson.id}`}
                                className="shrink-0 inline-flex items-center justify-center gap-1.5 rounded-2xl bg-emerald-600 hover:bg-emerald-700 active:scale-95 px-4 py-2.5 text-xs sm:text-sm font-black text-white shadow-md transition"
                                title={lang === 'ar' ? 'بدء الاستماع لهذا الدرس' : 'Listen now'}
                              >
                                <span className="text-sm">▶</span>
                                <span>{lang === 'ar' ? 'استمع' : 'Play'}</span>
                              </a>
                            ) : (
                              <div className="shrink-0 flex items-center gap-1.5">
                                <a
                                  href={`/${selectedCourse}/listen/?lesson=${lesson.id}`}
                                  className={`inline-flex items-center gap-1 rounded-xl px-2.5 py-1.5 text-xs font-bold border transition ${
                                    isDay
                                      ? 'bg-slate-200 hover:bg-slate-300 text-slate-800 border-slate-300'
                                      : 'bg-slate-800 hover:bg-slate-700 text-slate-300 border-slate-700'
                                  }`}
                                  title={lang === 'ar' ? 'فتح الدرس في وضع القيادة' : 'Open in Car Mode'}
                                >
                                  <span>🚗</span>
                                  <span>{lang === 'ar' ? 'وضع السيارة' : 'Car Mode'}</span>
                                </a>
                                <a
                                  href={`/${selectedCourse}/lessons/${lesson.id}/`}
                                  className={`inline-flex items-center justify-center h-8 w-8 rounded-xl border transition ${
                                    isDay
                                      ? 'bg-slate-100 hover:bg-slate-200 text-slate-700 border-slate-300'
                                      : 'bg-slate-800 hover:bg-slate-700 text-slate-300 border-slate-700'
                                  }`}
                                  title={lang === 'ar' ? 'قراءة نص الدرس' : 'Read article'}
                                >
                                  <span>📖</span>
                                </a>
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Mobile Footer CTA */}
            <div
              className={`p-3 border-t md:hidden shrink-0 flex items-center justify-between gap-2 ${
                isDay ? 'bg-white border-slate-200' : 'bg-slate-900 border-slate-800'
              }`}
            >
              <div className={`text-xs font-bold ${isDay ? 'text-slate-600' : 'text-slate-400'}`}>
                {lang === 'ar' ? 'مشغل السيارة يدعم أزرار عجلة القيادة' : 'Steering controls supported'}
              </div>
              <a
                href={`/${selectedCourse}/listen/?playlist=true`}
                className="rounded-xl bg-emerald-600 px-3.5 py-2 text-xs font-black text-white hover:bg-emerald-700 shadow-sm transition"
              >
                {lang === 'ar' ? `فتح مشغل ${selectedCourseMeta?.code} 🚗` : `Open Player 🚗`}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return createPortal(modalContent, document.body);
}
