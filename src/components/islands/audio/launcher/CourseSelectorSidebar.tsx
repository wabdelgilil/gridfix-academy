import { courses } from '../../../../data/courses';
import type { LastPlayedAudio } from './types';

interface CourseSelectorSidebarProps {
  selectedCourse: string;
  onSelectCourse: (courseId: string) => void;
  lastPlayedLesson: LastPlayedAudio | null;
  isDay: boolean;
  lang: 'ar' | 'en';
  getAudioCount: (courseId: string) => number;
}

export default function CourseSelectorSidebar({
  selectedCourse,
  onSelectCourse,
  lastPlayedLesson,
  isDay,
  lang,
  getAudioCount,
}: CourseSelectorSidebarProps) {
  const selectedCourseMeta = courses.find((c) => c.id === selectedCourse);

  return (
    <div
      className={`md:col-span-4 lg:col-span-4 flex flex-col justify-between border-b md:border-b-0 md:border-l p-3 sm:p-4 overflow-y-auto shrink-0 ${
        isDay ? 'bg-white border-slate-200' : 'bg-slate-900/60 border-slate-800'
      }`}
    >
      <div className="space-y-3">
        <div className="flex items-center justify-between px-1">
          <span
            className={`text-xs font-black uppercase tracking-wider ${
              isDay ? 'text-slate-800' : 'text-slate-300'
            }`}
          >
            {lang === 'ar' ? '1. اختر الكورس التعليمي:' : '1. Choose Course:'}
          </span>
          <span className={`text-[11px] font-bold ${isDay ? 'text-slate-500' : 'text-slate-400'}`}>
            {courses.length} {lang === 'ar' ? 'مسارات' : 'courses'}
          </span>
        </div>

        {/* Course Switcher Buttons */}
        <div className="grid grid-cols-3 md:grid-cols-1 gap-2">
          {courses.map((course) => {
            const isSelected = selectedCourse === course.id;
            const audioCount = getAudioCount(course.id);
            return (
              <button
                key={course.id}
                type="button"
                onClick={() => onSelectCourse(course.id)}
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

        {/* Quick Resume Card */}
        {lastPlayedLesson && (
          <div
            className={`p-3 rounded-2xl border-2 flex items-center justify-between gap-2.5 shadow-xs ${
              isDay
                ? 'bg-amber-50 border-amber-300 text-slate-900'
                : 'bg-amber-500/10 border-amber-500/30 text-white'
            }`}
          >
            <div className="min-w-0 flex-1">
              <div
                className={`text-[10px] font-black uppercase tracking-wider ${
                  isDay ? 'text-amber-900' : 'text-amber-300'
                }`}
              >
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

      {/* Full Driving Mode Action Button */}
      <div className="pt-3 mt-3 border-t hidden md:block">
        <a
          href={`/${selectedCourse}/listen/?playlist=true`}
          className="w-full flex items-center justify-center gap-2 rounded-2xl py-3 px-4 text-sm font-black transition shadow-md bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white active:scale-98"
        >
          <span>🚗</span>
          <span>
            {lang === 'ar'
              ? `فتح مشغل ${selectedCourseMeta?.code} بملء الشاشة`
              : `Open Full ${selectedCourseMeta?.code} Player`}
          </span>
          <span>↗</span>
        </a>
      </div>
    </div>
  );
}
