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

export default function AudioLauncherModal({
  isOpen,
  onClose,
  initialCourseId,
  lang = 'ar',
}: AudioLauncherModalProps) {
  const [mounted, setMounted] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState<string>(initialCourseId || 'cmrp');
  const [lastPlayedLesson, setLastPlayedLesson] = useState<{
    courseId: string;
    lessonId: string;
    lessonTitle: string;
  } | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

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

  const modalContent = (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-3 sm:p-6 bg-slate-950/85 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="audio-modal-title"
    >
      <div
        className="relative flex flex-col w-full max-w-2xl max-h-[88vh] rounded-3xl border border-slate-700 bg-slate-900 text-slate-100 shadow-2xl overflow-hidden my-auto"
        onClick={(e) => e.stopPropagation()}
        dir={lang === 'ar' ? 'rtl' : 'ltr'}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-800 p-4 sm:p-5 bg-slate-950/70 shrink-0">
          <div className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-tr from-amber-500/25 to-emerald-500/25 border border-amber-500/30 text-2xl shadow-xs">
              🚗
            </span>
            <div>
              <h2 id="audio-modal-title" className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
                <span>{lang === 'ar' ? 'ادرس أثناء القيادة' : 'Drive & Learn'}</span>
                <span className="text-xs px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 font-semibold">
                  {lang === 'ar' ? 'مشغل السيارة' : 'Car Mode'}
                </span>
              </h2>
              <p className="text-xs text-slate-400 mt-0.5">
                {lang === 'ar'
                  ? 'اختر أي كورس من المسارات الثلاثة ثم حدد الدرس الذي ترغب في الاستماع إليه فوراً'
                  : 'Select any course and choose the lesson you want to listen to'}
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-800/80 text-slate-400 hover:bg-slate-700 hover:text-white transition cursor-pointer"
            aria-label={lang === 'ar' ? 'إغلاق' : 'Close'}
          >
            ✕
          </button>
        </div>

        {/* Course Tabs (Switcher for ALL 3 Courses) */}
        <div className="p-3 sm:p-4 border-b border-slate-800 bg-slate-950/40 shrink-0">
          <div className="flex items-center justify-between mb-2 px-1">
            <span className="text-xs font-bold text-slate-300">
              {lang === 'ar' ? '1. اختر الكورس التعليمي:' : '1. Choose Course Path:'}
            </span>
            <span className="text-[11px] text-slate-400">
              {lang === 'ar' ? 'انقر على أي كورس لتصفح دروسه' : 'Click any course to view lessons'}
            </span>
          </div>

          <div className="grid grid-cols-3 gap-2 sm:gap-3">
            {courses.map((course) => {
              const isSelected = selectedCourse === course.id;
              const audioCount = getAudioCount(course.id);
              return (
                <button
                  key={course.id}
                  type="button"
                  onClick={() => setSelectedCourse(course.id)}
                  className={`flex flex-col items-center justify-center p-2.5 sm:p-3 rounded-2xl border-2 transition-all cursor-pointer select-none text-center ${
                    isSelected
                      ? 'border-emerald-500 bg-emerald-500/20 text-white shadow-lg shadow-emerald-500/10 scale-[1.02]'
                      : 'border-slate-800 bg-slate-800/60 text-slate-300 hover:bg-slate-800 hover:border-slate-700 hover:text-white'
                  }`}
                >
                  <span className="text-2xl sm:text-3xl mb-1">{course.icon}</span>
                  <span className="text-xs sm:text-sm font-black tracking-wide">{course.code}</span>
                  <span className="text-[10px] sm:text-xs text-slate-300 font-medium truncate max-w-full">
                    {lang === 'ar' ? course.title : course.titleEn}
                  </span>
                  <div className="mt-1.5">
                    {audioCount > 0 ? (
                      <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/25 px-2 py-0.5 text-[10px] font-bold text-emerald-300 border border-emerald-500/40">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                        <span>{audioCount} {lang === 'ar' ? 'دروس جاهزة' : 'ready'}</span>
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 rounded-full bg-amber-500/20 px-2 py-0.5 text-[10px] font-semibold text-amber-300 border border-amber-500/30">
                        <span>🎙️</span>
                        <span>{lang === 'ar' ? 'قيد التسجيل' : 'Recording'}</span>
                      </span>
                    )}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Quick Resume Card (if user previously played a lesson) */}
        {lastPlayedLesson && (
          <div className="mx-4 mt-3 p-3 rounded-2xl border border-amber-500/30 bg-amber-500/10 flex items-center justify-between gap-3 shrink-0">
            <div className="min-w-0 flex-1">
              <div className="text-[11px] font-semibold text-amber-300">
                {lang === 'ar' ? '⚡ استئناف من حيث توقفت:' : '⚡ Resume where you left off:'}
              </div>
              <div className="text-xs sm:text-sm font-bold text-white truncate">
                {lastPlayedLesson.lessonTitle}
              </div>
            </div>
            <a
              href={`/${lastPlayedLesson.courseId}/listen/?lesson=${lastPlayedLesson.lessonId}`}
              className="shrink-0 rounded-xl bg-amber-500 px-3.5 py-1.5 text-xs font-bold text-slate-950 hover:bg-amber-400 transition shadow-sm flex items-center gap-1.5"
            >
              <span>▶</span>
              <span>{lang === 'ar' ? 'متابعة' : 'Resume'}</span>
            </a>
          </div>
        )}

        {/* Selected Course Header Banner */}
        <div className="flex items-center justify-between px-4 pt-3 pb-1 shrink-0">
          <div className="flex items-center gap-1.5 text-xs font-bold text-brand-300">
            <span>2. دروس كورس {selectedCourseMeta?.code} ({selectedCourseMeta?.title}):</span>
          </div>
          <a
            href={`/${selectedCourse}/listen/?playlist=true`}
            className="inline-flex items-center gap-1 rounded-xl bg-slate-800 hover:bg-slate-700 px-3 py-1.5 text-xs font-bold text-slate-200 transition"
          >
            <span>🚗</span>
            <span>{lang === 'ar' ? `فتح مشغل ${selectedCourseMeta?.code} الكامل` : `Open Full ${selectedCourseMeta?.code} Player`}</span>
            <span>↗</span>
          </a>
        </div>

        {/* Lesson Selection Section */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {currentCourseStations.length === 0 ? (
            <div className="rounded-2xl border border-slate-800 bg-slate-950/40 p-8 text-center text-slate-400">
              {lang === 'ar' ? 'لا توجد دروس متاحة حالياً لهذا الكورس.' : 'No lessons available for this course.'}
            </div>
          ) : (
            currentCourseStations.map((station) => (
              <div
                key={station.id}
                className="rounded-2xl border border-slate-800/80 bg-slate-950/40 p-3 sm:p-4 space-y-2.5"
              >
                <div className="flex items-center justify-between border-b border-slate-800/80 pb-2">
                  <div className="text-xs font-bold text-brand-400 flex items-center gap-1.5">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-brand-500/20 text-[10px]">
                      {station.number}
                    </span>
                    <span>{lang === 'ar' ? station.title : station.titleEn}</span>
                  </div>
                  <span className="text-[11px] text-slate-500">
                    {station.lessons.length} {lang === 'ar' ? 'دروس' : 'lessons'}
                  </span>
                </div>

                <div className="space-y-1.5">
                  {station.lessons.map((lesson) => {
                    const hasAudio = Boolean(audioLessons[lesson.id]);
                    return (
                      <div
                        key={lesson.id}
                        className={`flex items-center justify-between gap-3 p-2.5 rounded-xl border transition ${
                          hasAudio
                            ? 'border-slate-800 bg-slate-900/80 hover:border-emerald-500/50 hover:bg-slate-800/60'
                            : 'border-slate-800/40 bg-slate-900/30'
                        }`}
                      >
                        <div className="min-w-0 flex-1">
                          <div className="flex items-center gap-2">
                            <span className="text-xs font-bold text-slate-400">
                              {lesson.number}
                            </span>
                            <span className="text-xs sm:text-sm font-semibold text-slate-200 truncate">
                              {lang === 'ar' ? lesson.title : lesson.titleEn}
                            </span>
                          </div>
                          <div className="text-[11px] text-slate-500 dir-ltr text-right rtl:text-right mt-0.5" dir="ltr">
                            {lang === 'ar' ? lesson.titleEn : lesson.title}
                          </div>
                        </div>

                        {hasAudio ? (
                          <a
                            href={`/${selectedCourse}/listen/?lesson=${lesson.id}`}
                            className="shrink-0 inline-flex items-center gap-1.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 px-3 py-1.5 text-xs font-bold text-white shadow-sm hover:from-emerald-500 hover:to-teal-500 transition active:scale-95"
                            title={lang === 'ar' ? 'بدء الاستماع لهذا الدرس' : 'Listen to this lesson'}
                          >
                            <span>▶</span>
                            <span>{lang === 'ar' ? 'استمع' : 'Play'}</span>
                          </a>
                        ) : (
                          <div className="shrink-0 flex items-center gap-1.5">
                            <a
                              href={`/${selectedCourse}/listen/?lesson=${lesson.id}`}
                              className="inline-flex items-center gap-1 rounded-xl bg-slate-800 hover:bg-slate-700 px-2.5 py-1 text-xs font-semibold text-slate-300 transition"
                              title={lang === 'ar' ? 'فتح في مشغل وضع القيادة' : 'Open in Car Player'}
                            >
                              <span>🚗</span>
                              <span>{lang === 'ar' ? 'المشغل' : 'Player'}</span>
                            </a>
                            <a
                              href={`/${selectedCourse}/lessons/${lesson.id}/`}
                              className="inline-flex items-center gap-1 rounded-xl bg-slate-800/60 hover:bg-slate-700 px-2 py-1 text-xs text-brand-400 hover:underline"
                              title={lang === 'ar' ? 'قراءة المقال' : 'Read article'}
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

        {/* Modal Footer */}
        <div className="border-t border-slate-800 p-3 sm:p-4 bg-slate-950/70 flex flex-wrap items-center justify-between gap-2 shrink-0">
          <div className="text-[11px] text-slate-400 flex items-center gap-1.5">
            <span>🔘</span>
            <span>
              {lang === 'ar'
                ? 'مشغل السيارة يدعم أزرار عجلة القيادة وبلوتوث السيارة تلقائياً'
                : 'Car player supports steering wheel buttons and Bluetooth'}
            </span>
          </div>
          <a
            href={`/${selectedCourse}/listen/?playlist=true`}
            className="rounded-xl bg-slate-800 px-4 py-2 text-xs font-bold text-slate-200 hover:bg-slate-700 transition"
          >
            {lang === 'ar' ? `فتح مشغل ${selectedCourseMeta?.code} 🚗` : `Open ${selectedCourseMeta?.code} Player 🚗`}
          </a>
        </div>
      </div>
    </div>
  );

  return createPortal(modalContent, document.body);
}
