import { useState, useRef, useEffect, useCallback } from 'react';

interface LessonAudioPlayerProps {
  courseId: string;
  audioSrc: string;
  lessonTitle: string;
  lessonNumber: string;
  stationTitle?: string;
  courseTitle?: string;
  prevLessonUrl?: string;
  prevLessonTitle?: string;
  nextLessonUrl?: string;
  nextLessonTitle?: string;
}

export default function LessonAudioPlayer({
  courseId,
  audioSrc,
  lessonTitle,
  lessonNumber,
  stationTitle,
  courseTitle = 'GridFix Academy',
  prevLessonUrl,
  prevLessonTitle,
  nextLessonUrl,
  nextLessonTitle
}: LessonAudioPlayerProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const progressBarRef = useRef<HTMLDivElement | null>(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [playbackRate, setPlaybackRate] = useState(1);
  const [autoPlayNext, setAutoPlayNext] = useState(true);
  const [isNavigating, setIsNavigating] = useState(false);
  const [countdown, setCountdown] = useState(3);

  // Formatting seconds to mm:ss
  const formatTime = (time: number) => {
    if (isNaN(time) || time === 0) return '00:00';
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  // Play / Pause toggle
  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(() => {});
    }
  };

  // Skip time forward or backward within current lesson
  const skip = (seconds: number) => {
    if (!audioRef.current) return;
    audioRef.current.currentTime = Math.min(
      Math.max(audioRef.current.currentTime + seconds, 0),
      duration
    );
  };

  // Cycle playback speed: 1x -> 1.25x -> 1.5x -> 1.75x -> 2x
  const cyclePlaybackRate = () => {
    const rates = [1, 1.25, 1.5, 1.75, 2];
    const currentIndex = rates.indexOf(playbackRate);
    const nextRate = rates[(currentIndex + 1) % rates.length];
    setPlaybackRate(nextRate);
    if (audioRef.current) {
      audioRef.current.playbackRate = nextRate;
    }
  };

  // Handle scrub on progress bar
  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!progressBarRef.current || !audioRef.current || !duration) return;
    const rect = progressBarRef.current.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const percentage = Math.max(0, Math.min(1, clickX / rect.width));
    audioRef.current.currentTime = percentage * duration;
  };

  // Navigate to previous lesson or restart current
  const goToPrev = () => {
    if (audioRef.current && audioRef.current.currentTime > 3) {
      audioRef.current.currentTime = 0;
    } else if (prevLessonUrl) {
      window.location.href = `${prevLessonUrl}?autoplay=1`;
    }
  };

  // Navigate to next lesson
  const goToNext = () => {
    if (nextLessonUrl) {
      window.location.href = `${nextLessonUrl}?autoplay=1`;
    }
  };

  // Auto-play next lesson logic
  const handleAudioEnded = useCallback(() => {
    setIsPlaying(false);
    if (autoPlayNext && nextLessonUrl) {
      setIsNavigating(true);
      let count = 3;
      setCountdown(count);
      const timer = setInterval(() => {
        count -= 1;
        setCountdown(count);
        if (count <= 0) {
          clearInterval(timer);
          window.location.href = `${nextLessonUrl}?autoplay=1`;
        }
      }, 1000);
    }
  }, [autoPlayNext, nextLessonUrl]);

  // Setup MediaSession for lock-screen & car steering wheel controls
  useEffect(() => {
    if ('mediaSession' in navigator) {
      navigator.mediaSession.metadata = new MediaMetadata({
        title: `${lessonNumber} ${lessonTitle}`,
        artist: courseTitle,
        album: stationTitle ?? 'منهج الاعتمادية وإدارة المنشآت',
        artwork: [
          { src: '/logo-icon-192.png', sizes: '192x192', type: 'image/png' },
          { src: '/logo-icon-512.png', sizes: '512x512', type: 'image/png' }
        ]
      });

      navigator.mediaSession.setActionHandler('play', () => {
        audioRef.current?.play();
      });
      navigator.mediaSession.setActionHandler('pause', () => {
        audioRef.current?.pause();
      });
      navigator.mediaSession.setActionHandler('seekbackward', () => {
        skip(-15);
      });
      navigator.mediaSession.setActionHandler('seekforward', () => {
        skip(15);
      });

      if (prevLessonUrl) {
        navigator.mediaSession.setActionHandler('previoustrack', () => {
          goToPrev();
        });
      }

      if (nextLessonUrl) {
        navigator.mediaSession.setActionHandler('nexttrack', () => {
          goToNext();
        });
      }
    }
  }, [lessonTitle, lessonNumber, courseTitle, stationTitle, prevLessonUrl, nextLessonUrl]);

  // Check URL param for ?autoplay=1
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get('autoplay') === '1' && audioRef.current) {
      audioRef.current.play().catch(() => {});
    }
  }, []);

  const progressPercent = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <div className="my-6 rounded-2xl border border-slate-200/90 bg-gradient-to-br from-white to-slate-50/80 p-4 sm:p-5 shadow-sm dark:border-slate-800 dark:from-slate-900 dark:to-slate-900/60 transition-all">
      <audio
        ref={audioRef}
        src={audioSrc}
        preload="metadata"
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onTimeUpdate={() => {
          if (audioRef.current) {
            setCurrentTime(audioRef.current.currentTime);
          }
        }}
        onLoadedMetadata={() => {
          if (audioRef.current) {
            setDuration(audioRef.current.duration);
          }
        }}
        onEnded={handleAudioEnded}
      />

      {/* Header Info */}
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
                href={`/${courseId}/listen/`}
                className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 px-2 py-0.5 text-[10px] font-semibold text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-400 hover:bg-emerald-500/20 transition border border-emerald-500/20"
                title="فتح المشغل المتصل المخصص للسيارة بدون انقطاع"
              >
                <span>🚗 وضع القيادة</span>
              </a>
            </div>
            <div className="text-xs text-slate-500 dark:text-slate-400 font-mono mt-0.5">
              {formatTime(currentTime)} / {formatTime(duration)}
            </div>
          </div>
        </div>

        {/* Speed & Auto-advance toggle */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={cyclePlaybackRate}
            className="rounded-lg border border-slate-200 bg-white px-2.5 py-1 text-xs font-medium text-slate-700 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 transition"
            title="تغيير سرعة الإلقاء"
          >
            {playbackRate}x
          </button>

          {nextLessonUrl && (
            <label className="flex items-center gap-1.5 cursor-pointer text-[11px] text-slate-600 dark:text-slate-400 select-none">
              <input
                type="checkbox"
                checked={autoPlayNext}
                onChange={(e) => setAutoPlayNext(e.target.checked)}
                className="h-3.5 w-3.5 rounded border-slate-300 text-brand-600 focus:ring-brand-500 dark:border-slate-600 dark:bg-slate-800"
              />
              <span>التالي تلقائياً</span>
            </label>
          )}
        </div>
      </div>

      {/* Progress Bar */}
      <div
        ref={progressBarRef}
        onClick={handleSeek}
        className="relative h-2 w-full cursor-pointer rounded-full bg-slate-200/80 dark:bg-slate-800 overflow-hidden mb-3"
      >
        <div
          className="h-full bg-gradient-to-l from-brand-600 to-brand-400 transition-all duration-75"
          style={{ width: `${progressPercent}%` }}
        />
      </div>

      {/* Controls: Prev Lesson, Seek Back 15s, Play/Pause, Seek Fwd 15s, Next Lesson */}
      <div className="flex items-center justify-center gap-2 sm:gap-4">
        {/* Previous Lesson */}
        <button
          type="button"
          onClick={goToPrev}
          disabled={!prevLessonUrl && currentTime <= 3}
          className="flex h-9 w-9 items-center justify-center rounded-xl text-slate-500 hover:bg-slate-100 hover:text-slate-900 disabled:opacity-30 disabled:cursor-not-allowed dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-slate-100 transition"
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
          onClick={() => skip(-15)}
          className="flex h-9 w-9 items-center justify-center rounded-xl text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-slate-100 transition text-xs font-bold"
          title="تأخير 15 ثانية داخل الدرس"
          aria-label="تأخير 15 ثانية"
        >
          <span>↺ 15</span>
        </button>

        {/* Play / Pause Primary Button */}
        <button
          type="button"
          onClick={togglePlay}
          className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-600 text-white shadow-md shadow-brand-500/20 hover:bg-brand-500 active:scale-95 transition"
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
          onClick={() => skip(15)}
          className="flex h-9 w-9 items-center justify-center rounded-xl text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-slate-100 transition text-xs font-bold"
          title="تقديم 15 ثانية داخل الدرس"
          aria-label="تقديم 15 ثانية"
        >
          <span>15 ↻</span>
        </button>

        {/* Next Lesson */}
        <button
          type="button"
          onClick={goToNext}
          disabled={!nextLessonUrl}
          className="flex h-9 w-9 items-center justify-center rounded-xl text-slate-500 hover:bg-slate-100 hover:text-slate-900 disabled:opacity-30 disabled:cursor-not-allowed dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-slate-100 transition"
          title="الدرس التالي"
          aria-label="الدرس التالي"
        >
          <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
            <path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z" />
          </svg>
        </button>
      </div>

      {/* Countdown overlay when auto-advancing */}
      {isNavigating && nextLessonTitle && (
        <div className="mt-3 rounded-xl bg-brand-50 border border-brand-200/60 p-2 text-center text-xs text-brand-900 dark:bg-brand-950/40 dark:border-brand-800/40 dark:text-brand-300 animate-pulse">
          🚗 انتهى الدرس! جاري الانتقال تلقائياً إلى <strong>{nextLessonTitle}</strong> خلال {countdown} ثوانٍ...
        </div>
      )}
    </div>
  );
}
