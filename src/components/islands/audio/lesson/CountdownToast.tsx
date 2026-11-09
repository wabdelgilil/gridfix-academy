interface CountdownToastProps {
  isNavigating: boolean;
  nextLessonTitle?: string;
  countdown: number;
}

export default function CountdownToast({
  isNavigating,
  nextLessonTitle,
  countdown,
}: CountdownToastProps) {
  if (!isNavigating || !nextLessonTitle) return null;

  return (
    <div className="mt-3 rounded-xl bg-brand-50 border border-brand-200/60 p-2 text-center text-xs text-brand-900 dark:bg-brand-950/40 dark:border-brand-800/40 dark:text-brand-300 animate-pulse">
      🚗 انتهى الدرس! جاري الانتقال تلقائياً إلى <strong>{nextLessonTitle}</strong> خلال {countdown} ثوانٍ...
    </div>
  );
}
