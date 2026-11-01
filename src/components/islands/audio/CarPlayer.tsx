import { useState, useRef, useEffect, useCallback } from 'react';

export interface PlaylistItem {
  id: string;
  number: string;
  title: string;
  titleEn: string;
  stationNumber: number;
  stationTitle: string;
  audioSrc?: string;
  hasAudio: boolean;
  lessonUrl: string;
}

interface CarPlayerProps {
  courseTitle: string;
  playlist: PlaylistItem[];
  initialLessonId?: string;
}

export default function CarPlayer({
  courseTitle,
  playlist,
  initialLessonId
}: CarPlayerProps) {
  // Find first playable track or matching initialLessonId
  const initialIndex = initialLessonId
    ? playlist.findIndex((item) => item.id === initialLessonId && item.hasAudio)
    : playlist.findIndex((item) => item.hasAudio);

  const [currentIndex, setCurrentIndex] = useState(Math.max(0, initialIndex !== -1 ? initialIndex : 0));
  const currentTrack = playlist[currentIndex] || playlist[0];

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const progressBarRef = useRef<HTMLDivElement | null>(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [playbackRate, setPlaybackRate] = useState(1);
  const [autoPlayNext, setAutoPlayNext] = useState(true);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [wakeLockActive, setWakeLockActive] = useState(false);

  // Format seconds -> mm:ss
  const formatTime = (time: number) => {
    if (isNaN(time) || time === 0) return '00:00';
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  // Play / Pause
  const togglePlay = () => {
    if (!audioRef.current || !currentTrack.hasAudio) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(() => {});
    }
  };

  // Seek forward / backward within lesson (e.g. 15s)
  const seek = (seconds: number) => {
    if (!audioRef.current) return;
    const target = Math.min(Math.max(audioRef.current.currentTime + seconds, 0), duration);
    audioRef.current.currentTime = target;
  };

  // Find next available track with audio
  const playNextLesson = useCallback(() => {
    let nextIdx = currentIndex + 1;
    while (nextIdx < playlist.length && !playlist[nextIdx].hasAudio) {
      nextIdx++;
    }
    if (nextIdx < playlist.length) {
      setCurrentIndex(nextIdx);
    } else {
      setIsPlaying(false);
    }
  }, [currentIndex, playlist]);

  // Find previous available track with audio
  const playPrevLesson = useCallback(() => {
    if (audioRef.current && audioRef.current.currentTime > 3) {
      audioRef.current.currentTime = 0;
      return;
    }
    let prevIdx = currentIndex - 1;
    while (prevIdx >= 0 && !playlist[prevIdx].hasAudio) {
      prevIdx--;
    }
    if (prevIdx >= 0) {
      setCurrentIndex(prevIdx);
    }
  }, [currentIndex, playlist]);

  // Jump to specific track from playlist
  const selectTrack = (index: number) => {
    if (!playlist[index].hasAudio) return;
    setCurrentIndex(index);
    setIsDrawerOpen(false);
  };

  // Cycle speed: 1x -> 1.25x -> 1.5x -> 1.75x -> 2x
  const cycleSpeed = () => {
    const speeds = [1, 1.25, 1.5, 1.75, 2];
    const next = speeds[(speeds.indexOf(playbackRate) + 1) % speeds.length];
    setPlaybackRate(next);
    if (audioRef.current) {
      audioRef.current.playbackRate = next;
    }
  };

  // Handle Scrub
  const handleScrub = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!progressBarRef.current || !audioRef.current || !duration) return;
    const rect = progressBarRef.current.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const pct = Math.max(0, Math.min(1, clickX / rect.width));
    audioRef.current.currentTime = pct * duration;
  };

  // Auto-play when track index changes
  useEffect(() => {
    if (audioRef.current && currentTrack.hasAudio) {
      audioRef.current.load();
      audioRef.current.playbackRate = playbackRate;
      audioRef.current.play().catch(() => {});
    }
  }, [currentIndex]);

  // Screen WakeLock API to keep display on while mounted on dashboard
  useEffect(() => {
    let wakeLock: any = null;
    const requestWakeLock = async () => {
      try {
        if ('wakeLock' in navigator && isPlaying) {
          wakeLock = await (navigator as any).wakeLock.request('screen');
          setWakeLockActive(true);
        }
      } catch {
        setWakeLockActive(false);
      }
    };

    if (isPlaying) {
      requestWakeLock();
    } else if (wakeLock) {
      wakeLock.release().then(() => setWakeLockActive(false)).catch(() => {});
    }

    return () => {
      if (wakeLock) {
        wakeLock.release().catch(() => {});
      }
    };
  }, [isPlaying]);

  // Setup MediaSession for car steering wheel & lock screen hardware
  useEffect(() => {
    if (!currentTrack || !('mediaSession' in navigator)) return;

    navigator.mediaSession.metadata = new MediaMetadata({
      title: `${currentTrack.number} ${currentTrack.title}`,
      artist: courseTitle,
      album: currentTrack.stationTitle,
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
      seek(-15);
    });
    navigator.mediaSession.setActionHandler('seekforward', () => {
      seek(15);
    });
    navigator.mediaSession.setActionHandler('previoustrack', () => {
      playPrevLesson();
    });
    navigator.mediaSession.setActionHandler('nexttrack', () => {
      playNextLesson();
    });
  }, [currentTrack, courseTitle, playNextLesson, playPrevLesson, duration]);

  if (!currentTrack) {
    return (
      <div className="p-8 text-center text-slate-500">
        لا توجد تسجيلات صوتية متوفرة لهذا الكورس حالياً.
      </div>
    );
  }

  const progressPercent = duration > 0 ? (currentTime / duration) * 100 : 0;
  const availableTracksCount = playlist.filter((p) => p.hasAudio).length;

  return (
    <div className="relative mx-auto flex min-h-[82vh] max-w-2xl flex-col justify-between rounded-3xl border border-slate-200/90 bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 p-6 sm:p-8 text-white shadow-2xl overflow-hidden select-none">
      <audio
        ref={audioRef}
        src={currentTrack.audioSrc}
        preload="auto"
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onTimeUpdate={() => {
          if (audioRef.current) setCurrentTime(audioRef.current.currentTime);
        }}
        onLoadedMetadata={() => {
          if (audioRef.current) setDuration(audioRef.current.duration);
        }}
        onEnded={() => {
          if (autoPlayNext) {
            playNextLesson();
          } else {
            setIsPlaying(false);
          }
        }}
      />

      {/* Top Bar: Mode Badge, WakeLock & Playlist toggle */}
      <div className="flex items-center justify-between gap-3 border-b border-slate-800/80 pb-4">
        <div className="flex items-center gap-2">
          <span className="flex h-7 items-center gap-1.5 rounded-full bg-emerald-500/20 px-3 text-xs font-semibold text-emerald-400 border border-emerald-500/30">
            <span>🚗</span>
            <span>وضع القيادة المتصل</span>
          </span>
          {wakeLockActive && (
            <span className="text-[10px] text-slate-400" title="الشاشة ستبقى مضاءة أثناء القيادة">
              ☀️ الشاشة مستيقظة
            </span>
          )}
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={cycleSpeed}
            className="rounded-lg border border-slate-700 bg-slate-800/90 px-3 py-1 text-xs font-medium text-slate-200 hover:bg-slate-700 transition"
            title="سرعة الإلقاء"
          >
            {playbackRate}x
          </button>

          <button
            type="button"
            onClick={() => setIsDrawerOpen(!isDrawerOpen)}
            className="flex items-center gap-1 rounded-lg border border-slate-700 bg-slate-800/90 px-3 py-1 text-xs font-medium text-slate-200 hover:bg-slate-700 transition"
            title="قائمة الدروس"
          >
            <span>📑</span>
            <span>{availableTracksCount} درس جاهز</span>
          </button>
        </div>
      </div>

      {/* Main Track Display: Big typography for fast glances */}
      <div className="my-auto py-8 text-center">
        <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-brand-500/20 px-4 py-1 text-xs font-medium text-brand-300 border border-brand-500/30">
          <span>المحطة {currentTrack.stationNumber}:</span>
          <span>{currentTrack.stationTitle}</span>
        </div>

        <div className="text-4xl font-extrabold text-brand-400 tracking-tight mb-2">
          الدرس {currentTrack.number}
        </div>

        <h1 className="text-2xl sm:text-3xl font-bold leading-relaxed text-white drop-shadow-sm px-2">
          {currentTrack.title}
        </h1>

        <p className="mt-1 text-sm text-slate-400 dir-ltr" dir="ltr">
          {currentTrack.titleEn}
        </p>

        {currentTrack.hasAudio ? (
          <div className="mt-4 text-xs text-slate-400">
            يمكنك استخدام أزرار عجلة القيادة (Steering Wheel) لتخطي الدروس وتقديم الصوت
          </div>
        ) : (
          <div className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-amber-500/20 px-3 py-1 text-xs font-medium text-amber-300 border border-amber-500/30">
            <span>🎙️</span>
            <span>الشرح الصوتي لهذا الدرس قيد الإنتاج وسيتوفر قريباً</span>
          </div>
        )}
      </div>

      {/* Bottom Area: Controls & Scrub */}
      <div className="space-y-4 pt-4 border-t border-slate-800/80">
        {/* Progress Bar & Timers */}
        <div>
          <div
            ref={progressBarRef}
            onClick={handleScrub}
            className="relative h-3 w-full cursor-pointer rounded-full bg-slate-800 overflow-hidden shadow-inner"
          >
            <div
              className="h-full bg-gradient-to-l from-brand-500 to-emerald-400 transition-all duration-75"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
          <div className="mt-2 flex justify-between text-xs font-mono text-slate-400 px-1">
            <span>{formatTime(currentTime)}</span>
            <span>{formatTime(duration)}</span>
          </div>
        </div>

        {/* Big tactile controls */}
        <div className="flex items-center justify-center gap-3 sm:gap-6 py-2">
          {/* Previous Lesson (Track) */}
          <button
            type="button"
            onClick={playPrevLesson}
            className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-800 text-slate-200 hover:bg-slate-700 active:scale-95 transition shadow-md"
            title="الدرس السابق (أو رجوع لبداية الدرس)"
            aria-label="الدرس السابق"
          >
            <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
              <path d="M6 6h2v12H6zm3.5 6l8.5 6V6z" />
            </svg>
          </button>

          {/* Seek -15s */}
          <button
            type="button"
            onClick={() => seek(-15)}
            className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-800/80 text-slate-300 hover:bg-slate-700 active:scale-95 transition text-xs font-bold"
            title="تأخير 15 ثانية داخل الدرس"
            aria-label="تأخير 15 ثانية"
          >
            <span>↺ 15</span>
          </button>

          {/* Big Play / Pause Button */}
          <button
            type="button"
            onClick={togglePlay}
            disabled={!currentTrack.hasAudio}
            className="flex h-18 w-18 items-center justify-center rounded-3xl bg-gradient-to-tr from-brand-600 to-brand-500 text-white shadow-xl shadow-brand-500/30 hover:scale-105 active:scale-95 disabled:opacity-40 disabled:cursor-not-allowed transition"
            title={isPlaying ? 'إيقاف مؤقت' : 'تشغيل'}
            aria-label={isPlaying ? 'إيقاف مؤقت' : 'تشغيل'}
          >
            {isPlaying ? (
              <svg className="h-8 w-8 fill-current" viewBox="0 0 24 24">
                <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
              </svg>
            ) : (
              <svg className="h-8 w-8 fill-current translate-x-0.5" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            )}
          </button>

          {/* Seek +15s */}
          <button
            type="button"
            onClick={() => seek(15)}
            className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-800/80 text-slate-300 hover:bg-slate-700 active:scale-95 transition text-xs font-bold"
            title="تقديم 15 ثانية داخل الدرس"
            aria-label="تقديم 15 ثانية"
          >
            <span>15 ↻</span>
          </button>

          {/* Next Lesson (Track) */}
          <button
            type="button"
            onClick={playNextLesson}
            className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-800 text-slate-200 hover:bg-slate-700 active:scale-95 transition shadow-md"
            title="الدرس التالي"
            aria-label="الدرس التالي"
          >
            <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
              <path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z" />
            </svg>
          </button>
        </div>

        {/* Footer info: Auto-advance switch & Read lesson link */}
        <div className="flex items-center justify-between text-xs text-slate-400 pt-2">
          <label className="flex items-center gap-2 cursor-pointer select-none">
            <input
              type="checkbox"
              checked={autoPlayNext}
              onChange={(e) => setAutoPlayNext(e.target.checked)}
              className="h-4 w-4 rounded border-slate-700 bg-slate-800 text-brand-500 focus:ring-brand-500"
            />
            <span>التشغيل المتصل التلقائي للدرس التالي</span>
          </label>

          <a
            href={currentTrack.lessonUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-400 hover:underline flex items-center gap-1"
          >
            <span>فتح المقال الكامل</span>
            <span>↗</span>
          </a>
        </div>
      </div>

      {/* Playlist Drawer (Modal / Overlay) */}
      {isDrawerOpen && (
        <div className="absolute inset-0 z-30 flex flex-col bg-slate-950/95 backdrop-blur-md p-6 animate-fadeIn">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
            <div>
              <h3 className="font-bold text-lg text-white">شروحات الكورس الصوتية</h3>
              <div className="text-xs text-slate-400">{availableTracksCount} درس جاهز للاستماع</div>
            </div>
            <button
              type="button"
              onClick={() => setIsDrawerOpen(false)}
              className="rounded-lg bg-slate-800 p-2 text-slate-300 hover:bg-slate-700"
            >
              ✕ إغلاق
            </button>
          </div>

          <div className="flex-1 overflow-y-auto space-y-2 pr-1">
            {playlist.map((track, idx) => {
              const isSelected = idx === currentIndex;
              return (
                <button
                  key={track.id}
                  type="button"
                  onClick={() => selectTrack(idx)}
                  disabled={!track.hasAudio}
                  className={`w-full text-right p-3.5 rounded-xl border transition flex items-center justify-between gap-3 ${
                    isSelected
                      ? 'border-brand-500 bg-brand-500/10 text-brand-300 font-bold'
                      : track.hasAudio
                      ? 'border-slate-800 bg-slate-900/60 text-slate-300 hover:bg-slate-800/80 cursor-pointer'
                      : 'border-slate-800/40 bg-slate-900/20 text-slate-500 cursor-not-allowed opacity-60'
                  }`}
                >
                  <div className="min-w-0 flex-1">
                    <div className="text-[11px] text-slate-400">
                      محطة {track.stationNumber} • درس {track.number}
                    </div>
                    <div className="text-sm truncate">{track.title}</div>
                  </div>
                  <div>
                    {isSelected ? (
                      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-brand-500 text-white text-xs">
                        ▶
                      </span>
                    ) : track.hasAudio ? (
                      <span className="text-[11px] font-semibold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-full">
                        متاح
                      </span>
                    ) : (
                      <span className="text-[11px] text-slate-500 bg-slate-800/40 px-2 py-0.5 rounded-full">
                        قريباً
                      </span>
                    )}
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
