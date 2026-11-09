import { useState, useRef, useEffect, useCallback } from 'react';
import useLang from '../../../lib/useLang';
import {
  calculateProgressPercent,
  calculateSeekTime,
  getNextPlaybackSpeed,
} from '../../../lib/audioUtils';
import LessonPlayerHeader from './lesson/LessonPlayerHeader';
import LessonProgressBar from './lesson/LessonProgressBar';
import LessonTransportControls from './lesson/LessonTransportControls';
import CountdownToast from './lesson/CountdownToast';

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
  nextLessonTitle,
}: LessonAudioPlayerProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const progressBarRef = useRef<HTMLDivElement | null>(null);
  const lang = useLang();

  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [playbackRate, setPlaybackRate] = useState(1);
  const [autoPlayNext, setAutoPlayNext] = useState(true);
  const [isNavigating, setIsNavigating] = useState(false);
  const [countdown, setCountdown] = useState(3);

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

  // Cycle playback speed
  const cyclePlaybackRate = () => {
    const nextRate = getNextPlaybackSpeed(playbackRate);
    setPlaybackRate(nextRate);
    if (audioRef.current) {
      audioRef.current.playbackRate = nextRate;
    }
  };

  // Handle seek on progress bar
  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!progressBarRef.current || !audioRef.current || !duration) return;
    const rect = progressBarRef.current.getBoundingClientRect();
    const isRtl = document.dir === 'rtl' || getComputedStyle(progressBarRef.current).direction === 'rtl';
    const targetTime = calculateSeekTime(e.clientX, rect, isRtl, duration);
    audioRef.current.currentTime = targetTime;
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
          { src: '/logo-icon-512.png', sizes: '512x512', type: 'image/png' },
        ],
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

  const progressPercent = calculateProgressPercent(currentTime, duration);

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
      <LessonPlayerHeader
        courseId={courseId}
        lessonTitle={lessonTitle}
        currentTime={currentTime}
        duration={duration}
        playbackRate={playbackRate}
        onCyclePlaybackRate={cyclePlaybackRate}
        autoPlayNext={autoPlayNext}
        onToggleAutoPlayNext={setAutoPlayNext}
        hasNextLesson={Boolean(nextLessonUrl)}
      />

      {/* English notice if listening while browsing in English */}
      {lang === 'en' && (
        <div className="mb-2.5 rounded-xl border border-amber-500/30 bg-amber-500/10 px-3 py-1.5 text-xs text-amber-700 dark:text-amber-300 flex items-center justify-between gap-2">
          <div className="flex items-center gap-1.5">
            <span>🎙️</span>
            <span>English audio is in production. Playing Arabic narration.</span>
          </div>
          <span className="shrink-0 rounded-md bg-amber-500/20 px-1.5 py-0.5 text-[10px] font-bold">
            🇸🇦 Arabic Audio
          </span>
        </div>
      )}

      {/* Progress Bar */}
      <LessonProgressBar
        progressPercent={progressPercent}
        onSeek={handleSeek}
        progressBarRef={progressBarRef}
      />

      {/* Controls */}
      <LessonTransportControls
        isPlaying={isPlaying}
        onTogglePlay={togglePlay}
        onSkip={skip}
        onGoToPrev={goToPrev}
        onGoToNext={goToNext}
        hasPrev={Boolean(prevLessonUrl || currentTime > 3)}
        hasNext={Boolean(nextLessonUrl)}
        prevLessonTitle={prevLessonTitle}
      />

      {/* Countdown overlay when auto-advancing */}
      <CountdownToast
        isNavigating={isNavigating}
        nextLessonTitle={nextLessonTitle}
        countdown={countdown}
      />
    </div>
  );
}
