interface LessonTransportControlsProps {
  isPlaying: boolean;
  onTogglePlay: () => void;
  onSkip: (seconds: number) => void;
  onGoToPrev: () => void;
  onGoToNext: () => void;
  hasPrev: boolean;
  hasNext: boolean;
  prevLessonTitle?: string;
}

export default function LessonTransportControls({
  isPlaying,
  onTogglePlay,
  onSkip,
  onGoToPrev,
  onGoToNext,
  hasPrev,
  hasNext,
  prevLessonTitle,
}: LessonTransportControlsProps) {
  return (
    <div className="flex items-center justify-center gap-2 sm:gap-4">
      {/* Previous Lesson */}
      <button
        type="button"
        onClick={onGoToPrev}
        disabled={!hasPrev}
        className="flex h-10 w-10 items-center justify-center rounded-xl text-slate-500 hover:bg-slate-100 hover:text-slate-900 disabled:opacity-30 disabled:cursor-not-allowed dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-slate-100 transition cursor-pointer"
        title={prevLessonTitle ? `الدرس السابق (${prevLessonTitle})` : 'الدرس السابق (أو إعادة البدء)'}
        aria-label="الدرس السابق"
      >
        <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
          <path d="M6 6h2v12H6zm3.5 6l8.5 6V6z" />
        </svg>
      </button>

      {/* Replay 15s */}
      <button
        type="button"
        onClick={() => onSkip(-15)}
        className="flex h-10 w-10 items-center justify-center rounded-xl text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-slate-100 transition text-xs font-bold cursor-pointer"
        title="تأخير 15 ثانية داخل الدرس"
        aria-label="تأخير 15 ثانية"
      >
        <span>↺ 15</span>
      </button>

      {/* Play / Pause Primary Button */}
      <button
        type="button"
        onClick={onTogglePlay}
        className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-600 text-white shadow-md shadow-brand-500/20 hover:bg-brand-500 active:scale-95 transition cursor-pointer"
        title={isPlaying ? 'إيقاف مؤقت' : 'تشغيل'}
        aria-label={isPlaying ? 'إيقاف مؤقت' : 'تشغيل'}
      >
        {isPlaying ? (
          <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
            <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
          </svg>
        ) : (
          <svg className="h-5 w-5 fill-current translate-x-0.5" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z" />
          </svg>
        )}
      </button>

      {/* Forward 15s */}
      <button
        type="button"
        onClick={() => onSkip(15)}
        className="flex h-10 w-10 items-center justify-center rounded-xl text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-slate-100 transition text-xs font-bold cursor-pointer"
        title="تقديم 15 ثانية داخل الدرس"
        aria-label="تقديم 15 ثانية"
      >
        <span>15 ↻</span>
      </button>

      {/* Next Lesson */}
      <button
        type="button"
        onClick={onGoToNext}
        disabled={!hasNext}
        className="flex h-10 w-10 items-center justify-center rounded-xl text-slate-500 hover:bg-slate-100 hover:text-slate-900 disabled:opacity-30 disabled:cursor-not-allowed dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-slate-100 transition cursor-pointer"
        title="الدرس التالي"
        aria-label="الدرس التالي"
      >
        <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
          <path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z" />
        </svg>
      </button>
    </div>
  );
}
