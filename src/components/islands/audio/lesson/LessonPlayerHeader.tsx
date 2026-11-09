import { formatAudioTime } from '../../../../lib/audioUtils';

interface LessonPlayerHeaderProps {
  courseId: string;
  lessonTitle: string;
  currentTime: number;
  duration: number;
  playbackRate: number;
  onCyclePlaybackRate: () => void;
  autoPlayNext: boolean;
  onToggleAutoPlayNext: (val: boolean) => void;
  hasNextLesson: boolean;
}

export default function LessonPlayerHeader({
  courseId,
  lessonTitle,
  currentTime,
  duration,
  playbackRate,
  onCyclePlaybackRate,
  autoPlayNext,
  onToggleAutoPlayNext,
  hasNextLesson,
}: LessonPlayerHeaderProps) {
  return (
    <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
      <div className="flex items-center gap-2.5">
        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-500/10 text-brand-600 dark:bg-brand-500/20 dark:text-brand-400">
          <span className="text-lg">🎧</span>
        </div>
        <div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-ink-900 dark:text-slate-100">
              الشرح الصوتي المباشر للدرس
            </span>
            <a
              href={`/${courseId}/listen/?lesson=${encodeURIComponent(lessonTitle)}`}
              className="inline-flex items-center gap-1 rounded-full bg-amber-500/15 px-2.5 py-0.5 text-[10px] font-bold text-amber-600 dark:bg-amber-500/20 dark:text-amber-300 hover:bg-amber-500/25 transition border border-amber-500/30 shadow-xs"
              title="فتح المشغل المتصل المخصص للسيارة والتابلت بدون انقطاع"
            >
              <span>🚗</span>
              <span>ادرس أثناء القيادة</span>
            </a>
          </div>
          <div className="text-xs text-slate-500 dark:text-slate-400 font-mono mt-0.5">
            {formatAudioTime(currentTime)} / {formatAudioTime(duration)}
          </div>
        </div>
      </div>

      {/* Speed & Auto-advance toggle */}
      <div className="flex items-center gap-2">
        <button
          type="button"
          onClick={onCyclePlaybackRate}
          className="rounded-lg border border-slate-200 bg-white px-2.5 py-1 text-xs font-medium text-slate-700 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 transition cursor-pointer"
          title="تغيير سرعة الإلقاء"
        >
          {playbackRate}x
        </button>

        {hasNextLesson && (
          <label className="flex items-center gap-1.5 cursor-pointer text-[11px] text-slate-600 dark:text-slate-400 select-none">
            <input
              type="checkbox"
              checked={autoPlayNext}
              onChange={(e) => onToggleAutoPlayNext(e.target.checked)}
              className="h-3.5 w-3.5 rounded border-slate-300 text-brand-600 focus:ring-brand-500 dark:border-slate-600 dark:bg-slate-800 cursor-pointer"
            />
            <span>التالي تلقائياً</span>
          </label>
        )}
      </div>
    </div>
  );
}
