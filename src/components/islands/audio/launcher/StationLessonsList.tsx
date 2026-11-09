import { curriculum } from '../../../../data/curriculum';
import { courses } from '../../../../data/courses';
import { audioLessons } from '../../../../data/audioManifest';

interface StationLessonsListProps {
  selectedCourse: string;
  isDay: boolean;
  lang: 'ar' | 'en';
}

export default function StationLessonsList({
  selectedCourse,
  isDay,
  lang,
}: StationLessonsListProps) {
  const selectedCourseMeta = courses.find((c) => c.id === selectedCourse);

  const currentCourseStations = curriculum
    .filter((s) => (s.courseId ?? 'cfm') === selectedCourse && s.status === 'live')
    .sort((a, b) => a.number - b.number);

  return (
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
              isDay
                ? 'bg-white border-slate-300 text-slate-600'
                : 'bg-slate-900 border-slate-800 text-slate-400'
            }`}
          >
            {lang === 'ar'
              ? 'لا توجد دروس متاحة حالياً لهذا الكورس.'
              : 'No lessons available for this course.'}
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

              {/* Lessons Grid */}
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

                      {/* Touch Actions */}
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
  );
}
