import type { RefObject } from 'react';

interface LessonProgressBarProps {
  progressPercent: number;
  onSeek: (e: React.MouseEvent<HTMLDivElement>) => void;
  progressBarRef: RefObject<HTMLDivElement | null>;
}

export default function LessonProgressBar({
  progressPercent,
  onSeek,
  progressBarRef,
}: LessonProgressBarProps) {
  return (
    <div
      ref={progressBarRef}
      onClick={onSeek}
      className="relative h-2.5 w-full cursor-pointer rounded-full bg-slate-200/80 dark:bg-slate-800 overflow-hidden mb-3 touch-none"
      title="انقر لتقديم أو تأخير موضع الاستماع"
      role="progressbar"
      aria-valuenow={Math.round(progressPercent)}
      aria-valuemin={0}
      aria-valuemax={100}
    >
      <div
        className="h-full bg-gradient-to-l from-brand-600 via-emerald-500 to-brand-400 transition-all duration-75"
        style={{ width: `${progressPercent}%` }}
      />
    </div>
  );
}
