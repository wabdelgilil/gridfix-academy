import { useState, useRef, useEffect, useCallback } from 'react';
import { getLessonAudioCues } from '../../../data/audioCues';

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

export interface CourseOption {
  id: string;
  code: string;
  title: string;
  icon: string;
}

interface CarPlayerProps {
  courseTitle: string;
  courseId?: string;
  coursesList?: CourseOption[];
  playlist: PlaylistItem[];
  initialLessonId?: string;
}

export default function CarPlayer({
  courseTitle,
  courseId,
  coursesList,
  playlist,
  initialLessonId
}: CarPlayerProps) {
  // Find first playable track or matching initialLessonId
  const initialIndex = initialLessonId
    ? playlist.findIndex((item) => item.id === initialLessonId && item.hasAudio)
    : playlist.findIndex((item) => item.hasAudio);

  const [currentIndex, setCurrentIndex] = useState(Math.max(0, initialIndex !== -1 ? initialIndex : 0));
  const currentTrack = playlist[currentIndex] || playlist[0];

  const containerRef = useRef<HTMLDivElement | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const progressBarRef = useRef<HTMLDivElement | null>(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [playbackRate, setPlaybackRate] = useState(1);
  const [autoPlayNext, setAutoPlayNext] = useState(true);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [wakeLockActive, setWakeLockActive] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [lang, setLang] = useState<'ar' | 'en'>('ar');
  const [driveTheme, setDriveTheme] = useState<'day' | 'night'>('day');

  // Smart Synchronized Audio Cues for the current track (computed after currentTime state)
  const currentCues = currentTrack ? getLessonAudioCues(currentTrack.id) : [];
  const activeCueIndex = currentCues.length > 0
    ? currentCues.reduce((acc, cue, idx) => (currentTime >= cue.atSeconds ? idx : acc), 0)
    : -1;
  const activeCue = activeCueIndex >= 0 ? currentCues[activeCueIndex] : null;

  useEffect(() => {
    try {
      const storedTheme = localStorage.getItem('car-drive-theme');
      if (storedTheme === 'day' || storedTheme === 'night') {
        setDriveTheme(storedTheme);
      } else {
        const isDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
        setDriveTheme(isDark ? 'night' : 'day');
      }
    } catch {}
  }, []);

  const toggleDriveTheme = () => {
    const next = driveTheme === 'day' ? 'night' : 'day';
    setDriveTheme(next);
    try {
      localStorage.setItem('car-drive-theme', next);
    } catch {}
  };

  useEffect(() => {
    try {
      const stored = localStorage.getItem('cfm-lang');
      if (stored === 'en' || stored === 'ar') setLang(stored);
    } catch {}

    const onLangChanged = (e: any) => {
      if (e.detail?.lang) setLang(e.detail.lang);
    };
    window.addEventListener('cfm-lang-changed', onLangChanged);
    return () => window.removeEventListener('cfm-lang-changed', onLangChanged);
  }, []);

  // Read URL query (?lesson= or ?playlist=true) and localStorage on mount
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const params = new URLSearchParams(window.location.search);
    const lessonParam = params.get('lesson');
    if (lessonParam) {
      const idx = playlist.findIndex((item) => item.id === lessonParam);
      if (idx !== -1) {
        setCurrentIndex(idx);
        return;
      }
    }
    if (params.get('playlist') === 'true') {
      setIsDrawerOpen(true);
      return;
    }
    try {
      const stored = localStorage.getItem('last-played-audio');
      if (stored) {
        const parsed = JSON.parse(stored);
        if (parsed.courseId === courseId && parsed.lessonId) {
          const idx = playlist.findIndex((item) => item.id === parsed.lessonId);
          if (idx !== -1) setCurrentIndex(idx);
        }
      }
    } catch {}
  }, [playlist, courseId]);

  // Persist current track to localStorage
  useEffect(() => {
    if (!currentTrack || !courseId) return;
    try {
      localStorage.setItem(
        'last-played-audio',
        JSON.stringify({
          courseId,
          lessonId: currentTrack.id,
          lessonTitle: currentTrack.title,
        })
      );
    } catch {}
  }, [currentIndex, currentTrack, courseId]);

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

  // RTL-Aware Scrubbing fix
  const handleScrub = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!progressBarRef.current || !audioRef.current || !duration) return;
    const rect = progressBarRef.current.getBoundingClientRect();
    const isRtl = document.dir === 'rtl' || getComputedStyle(progressBarRef.current).direction === 'rtl';
    const clickX = isRtl ? rect.right - e.clientX : e.clientX - rect.left;
    const pct = Math.max(0, Math.min(1, clickX / rect.width));
    audioRef.current.currentTime = pct * duration;
  };

  // Fullscreen toggle for clean dashboard / tablet mode
  const toggleFullscreen = () => {
    if (!containerRef.current) return;
    if (!document.fullscreenElement) {
      containerRef.current.requestFullscreen().then(() => setIsFullscreen(true)).catch(() => {});
    } else {
      document.exitFullscreen().then(() => setIsFullscreen(false)).catch(() => {});
    }
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
  const isDay = driveTheme === 'day';

  return (
    <div
      ref={containerRef}
      className={`relative mx-auto flex min-h-[82vh] md:min-h-[85vh] w-full max-w-4xl flex-col justify-between rounded-3xl border-2 p-5 sm:p-8 shadow-2xl overflow-hidden select-none transition-colors duration-200 ${
        isDay
          ? 'bg-slate-100 border-slate-300 text-slate-900'
          : 'bg-slate-950 border-slate-800 text-white'
      }`}
    >
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

      {/* Top Bar: Chunky Driver Ergonomics & Balanced 2-Tier Toolbar */}
      <div className={`space-y-3 border-b pb-3.5 ${
        isDay ? 'border-slate-300' : 'border-slate-800/90'
      }`}>
        {/* Tier 1: Course Switcher & Slogan - Perfectly Spaced Across Top */}
        <div className="flex items-center justify-between gap-2 sm:gap-3 w-full">
          <div className="flex items-center gap-2 shrink-0">
            <div className={`flex items-center gap-2 rounded-2xl px-3 sm:px-3.5 py-1.5 sm:py-2 text-xs sm:text-sm font-black border-2 shadow-xs shrink-0 ${
              isDay
                ? 'bg-amber-100 text-amber-950 border-amber-300'
                : 'bg-amber-500/20 text-amber-300 border-amber-500/40'
            }`}>
              <span className="text-base sm:text-lg">🚗</span>
              <span>ادرس أثناء القيادة</span>
            </div>

            {wakeLockActive && (
              <span className={`hidden md:inline-flex items-center gap-1.5 text-xs font-bold px-2.5 py-1 rounded-xl border shrink-0 ${
                isDay ? 'bg-slate-200 text-slate-800 border-slate-300' : 'bg-slate-800 text-slate-300 border-slate-700'
              }`} title="الشاشة ستبقى مضاءة أثناء القيادة">
                <span>☀️</span>
                <span>الشاشة مضاءة</span>
              </span>
            )}
          </div>

          {coursesList && coursesList.length > 0 && (
            <div className={`flex items-center gap-1 rounded-2xl p-1 border-2 text-xs sm:text-sm shrink-0 ${
              isDay ? 'bg-white border-slate-300' : 'bg-slate-900 border-slate-800'
            }`}>
              {coursesList.map((c) => {
                const active = c.id === courseId;
                return (
                  <a
                    key={c.id}
                    href={`/${c.id}/listen/?playlist=true`}
                    className={`px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-xl font-black transition flex items-center gap-1 sm:gap-1.5 ${
                      active
                        ? 'bg-emerald-600 text-white shadow-xs'
                        : isDay
                        ? 'text-slate-700 hover:text-slate-950 hover:bg-slate-100'
                        : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800'
                    }`}
                    title={c.title}
                  >
                    <span>{c.icon}</span>
                    <span>{c.code}</span>
                  </a>
                );
              })}
            </div>
          )}
        </div>

        {/* Tier 2: Dedicated Driver Action Strip (Day/Night, Speed, Playlist, Fullscreen) */}
        <div className={`flex items-center justify-between gap-2 sm:gap-3 w-full pt-2 border-t ${
          isDay ? 'border-slate-200/80' : 'border-slate-800/80'
        }`}>
          {/* Day / Night Slap Button - Chunky 48px */}
          <button
            type="button"
            onClick={toggleDriveTheme}
            className={`flex h-12 items-center gap-2 px-3.5 sm:px-4 rounded-2xl font-black text-xs sm:text-sm border-2 transition-all shadow-md active:scale-95 cursor-pointer shrink-0 ${
              isDay
                ? 'bg-amber-300 hover:bg-amber-400 text-amber-950 border-amber-400 ring-2 ring-amber-300/40'
                : 'bg-slate-800 hover:bg-slate-700 text-amber-300 border-slate-700'
            }`}
            title="التبديل بين وضع النهار عالي التباين ووضع الليل للقيادة"
          >
            <span className="text-lg sm:text-xl">{isDay ? '☀️' : '🌙'}</span>
            <span>{isDay ? 'وضع النهار' : 'وضع الليل'}</span>
          </button>

          {/* Grouped Driver Utilities (Speed, Playlist, Fullscreen) */}
          <div className="flex items-center gap-2 sm:gap-2.5 shrink-0">
            {/* Speed Toggle - Chunky 48px */}
            <button
              type="button"
              onClick={cycleSpeed}
              className={`flex h-12 items-center gap-1.5 px-3 sm:px-4 rounded-2xl font-black text-xs sm:text-sm border-2 transition-all shadow-md active:scale-95 cursor-pointer ${
                isDay
                  ? 'bg-white hover:bg-slate-50 text-slate-900 border-slate-300'
                  : 'bg-slate-800 hover:bg-slate-700 text-slate-100 border-slate-700'
              }`}
              title="سرعة إلقاء الصوت (1x, 1.25x, 1.5x, 1.75x, 2x)"
            >
              <span className="text-amber-500 text-base">⚡</span>
              <span>{playbackRate}x</span>
            </button>

            {/* Playlist Drawer Button - Chunky 48px */}
            <button
              type="button"
              onClick={() => setIsDrawerOpen(!isDrawerOpen)}
              className={`flex h-12 items-center gap-1.5 px-3 sm:px-4 rounded-2xl font-black text-xs sm:text-sm border-2 transition-all shadow-md active:scale-95 cursor-pointer ${
                isDay
                  ? 'bg-white hover:bg-slate-50 text-slate-900 border-slate-300'
                  : 'bg-slate-800 hover:bg-slate-700 text-slate-100 border-slate-700'
              }`}
              title="عرض قائمة الدروس للاختيار"
            >
              <span>📑</span>
              <span className="hidden sm:inline">{availableTracksCount} درس</span>
              <span className="sm:hidden">{availableTracksCount}</span>
            </button>

            {/* Fullscreen Toggle - Chunky 48px */}
            <button
              type="button"
              onClick={toggleFullscreen}
              className={`flex h-12 w-12 items-center justify-center rounded-2xl border-2 transition-all shadow-md active:scale-95 cursor-pointer ${
                isDay
                  ? 'bg-white hover:bg-slate-50 text-slate-900 border-slate-300'
                  : 'bg-slate-800 hover:bg-slate-700 text-slate-100 border-slate-700'
              }`}
              title={isFullscreen ? 'إنهاء الشاشة الكاملة' : 'ملء الشاشة لوضع السيارة'}
              aria-label="ملء الشاشة"
            >
              <span className="text-base font-black">⛶</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Center Stage: Synchronized Smart Audio Visual Board OR Classic Track Typography */}
      <div className="my-auto py-4 sm:py-6 text-center">
        {activeCue ? (
          /* Live Synchronized Audio Cue Board */
          <div className="w-full max-w-3xl mx-auto space-y-3 animate-fadeIn">
            {/* Top Scene Context & Lesson Breadcrumb */}
            <div className="flex items-center justify-between gap-2 px-1 text-xs">
              <div className="flex items-center gap-2 truncate">
                <span className={`px-2.5 py-0.5 rounded-full font-black border text-xs shrink-0 ${
                  isDay
                    ? 'bg-brand-100 text-brand-900 border-brand-300'
                    : 'bg-brand-500/20 text-brand-300 border-brand-500/30'
                }`}>
                  الدرس {currentTrack.number}
                </span>
                <span className={`font-bold truncate text-xs sm:text-sm ${
                  isDay ? 'text-slate-800' : 'text-slate-300'
                }`}>
                  {currentTrack.title}
                </span>
              </div>

              <div className={`px-2.5 py-0.5 rounded-full font-mono text-[11px] font-bold border shrink-0 ${
                isDay ? 'bg-slate-200 text-slate-800 border-slate-300' : 'bg-slate-800 text-slate-300 border-slate-700'
              }`}>
                مشهد {activeCueIndex + 1} من {currentCues.length}
              </div>
            </div>

            {/* Smart Synchronized Visual Card */}
            <div className={`relative rounded-3xl p-5 sm:p-7 border-2 transition-all duration-300 shadow-xl text-right overflow-hidden ${
              isDay
                ? 'bg-white border-amber-300/80 text-slate-900 ring-2 ring-amber-100'
                : 'bg-slate-900/90 border-brand-500/40 text-white shadow-brand-500/5'
            }`}>
              {/* Card Header: Category Badge & Scene Time */}
              <div className="flex items-center justify-between gap-2 mb-3">
                <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-xl text-xs sm:text-sm font-black border ${
                  activeCue.type === 'rule'
                    ? isDay ? 'bg-amber-100 text-amber-950 border-amber-400' : 'bg-amber-500/20 text-amber-300 border-amber-500/40'
                    : activeCue.type === 'stat'
                    ? isDay ? 'bg-rose-100 text-rose-950 border-rose-300' : 'bg-rose-500/20 text-rose-300 border-rose-500/40'
                    : isDay ? 'bg-emerald-100 text-emerald-950 border-emerald-300' : 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40'
                }`}>
                  <span className="text-base">{activeCue.badgeIcon}</span>
                  <span>{activeCue.badge}</span>
                </div>

                <span className={`text-[11px] font-mono font-bold ${isDay ? 'text-slate-500' : 'text-slate-400'}`}>
                  بدء النقطة: {formatTime(activeCue.atSeconds)}
                </span>
              </div>

              {/* Title of the active point */}
              <h2 className={`text-xl sm:text-2xl lg:text-3xl font-black mb-3 leading-snug ${
                isDay ? 'text-slate-950' : 'text-white'
              }`}>
                {activeCue.title}
              </h2>

              {/* Big Bold Key Takeaway (Driver punchline) */}
              <div className={`p-4 rounded-2xl mb-4 border text-base sm:text-xl font-black leading-relaxed ${
                activeCue.type === 'rule'
                  ? isDay ? 'bg-amber-50 border-amber-200 text-amber-950' : 'bg-amber-500/10 border-amber-500/30 text-amber-200'
                  : isDay ? 'bg-slate-50 border-slate-200 text-slate-900' : 'bg-slate-800/60 border-slate-700/60 text-slate-100'
              }`}>
                {activeCue.keyTakeaway}
              </div>

              {/* Visual Graphic Element: Highlight Stat */}
              {activeCue.highlightStat && (
                <div className={`flex items-center justify-center gap-4 p-4 rounded-2xl border mb-3 ${
                  isDay ? 'bg-slate-100 border-slate-200' : 'bg-slate-950/60 border-slate-800'
                }`}>
                  <div className={`text-4xl sm:text-5xl font-black font-mono tracking-tight shrink-0 ${
                    activeCue.highlightStat.color === 'rose'
                      ? isDay ? 'text-rose-600' : 'text-rose-400'
                      : activeCue.highlightStat.color === 'amber'
                      ? isDay ? 'text-amber-600' : 'text-amber-400'
                      : activeCue.highlightStat.color === 'emerald'
                      ? isDay ? 'text-emerald-600' : 'text-emerald-400'
                      : isDay ? 'text-teal-600' : 'text-teal-400'
                  }`}>
                    {activeCue.highlightStat.value}
                  </div>
                  <div className="text-right">
                    <div className={`text-sm sm:text-base font-black ${isDay ? 'text-slate-900' : 'text-white'}`}>
                      {activeCue.highlightStat.label}
                    </div>
                    {activeCue.highlightStat.sub && (
                      <div className={`text-xs font-semibold mt-0.5 ${isDay ? 'text-slate-600' : 'text-slate-400'}`}>
                        {activeCue.highlightStat.sub}
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Visual Graphic Element: Comparison Side-by-Side */}
              {activeCue.comparison && (
                <div className="grid grid-cols-2 gap-3 mb-3 text-right">
                  <div className={`p-3.5 rounded-2xl border ${
                    isDay ? 'bg-rose-50 border-rose-200 text-slate-900' : 'bg-rose-950/30 border-rose-800/40 text-rose-100'
                  }`}>
                    <div className="text-xs font-bold opacity-80">{activeCue.comparison.right.label}</div>
                    <div className="text-lg sm:text-xl font-black my-1 text-rose-500">{activeCue.comparison.right.value}</div>
                    <div className="text-xs font-medium leading-relaxed">{activeCue.comparison.right.desc}</div>
                  </div>
                  <div className={`p-3.5 rounded-2xl border ${
                    isDay ? 'bg-emerald-50 border-emerald-200 text-slate-900' : 'bg-emerald-950/30 border-emerald-800/40 text-emerald-100'
                  }`}>
                    <div className="text-xs font-bold opacity-80">{activeCue.comparison.left.label}</div>
                    <div className="text-lg sm:text-xl font-black my-1 text-emerald-500">{activeCue.comparison.left.value}</div>
                    <div className="text-xs font-medium leading-relaxed">{activeCue.comparison.left.desc}</div>
                  </div>
                </div>
              )}

              {/* Detail sentence */}
              {activeCue.detail && (
                <p className={`text-xs sm:text-sm font-semibold leading-relaxed ${
                  isDay ? 'text-slate-700' : 'text-slate-300'
                }`}>
                  {activeCue.detail}
                </p>
              )}
            </div>

            {/* Interactive Chapter Scrubbing Strip */}
            <div className="flex items-center justify-center gap-1.5 sm:gap-2 max-w-2xl mx-auto overflow-x-auto py-1">
              {currentCues.map((cue, idx) => {
                const isActive = idx === activeCueIndex;
                const isPast = currentTime > cue.atSeconds;
                return (
                  <button
                    key={cue.id}
                    type="button"
                    onClick={() => {
                      if (audioRef.current) {
                        audioRef.current.currentTime = cue.atSeconds;
                        setCurrentTime(cue.atSeconds);
                      }
                    }}
                    className={`flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-xl text-xs font-bold transition-all shrink-0 cursor-pointer border ${
                      isActive
                        ? isDay
                          ? 'bg-amber-300 text-amber-950 border-amber-400 font-black shadow-md scale-105'
                          : 'bg-brand-500 text-white border-brand-400 font-black shadow-lg shadow-brand-500/20 scale-105'
                        : isPast
                        ? isDay
                          ? 'bg-slate-200 text-slate-700 border-slate-300'
                          : 'bg-slate-800/80 text-slate-300 border-slate-700'
                        : isDay
                        ? 'bg-white text-slate-500 border-slate-200 hover:bg-slate-100'
                        : 'bg-slate-900/60 text-slate-500 border-slate-800 hover:bg-slate-800'
                    }`}
                    title={`انقر للانتقال إلى: ${cue.title} (${formatTime(cue.atSeconds)})`}
                  >
                    <span>{cue.badgeIcon}</span>
                    <span className="hidden sm:inline">{cue.badge}</span>
                    <span className="font-mono text-[10px] opacity-75">{formatTime(cue.atSeconds)}</span>
                  </button>
                );
              })}
            </div>
          </div>
        ) : (
          /* Classic Minimal Typography (when no custom cues are registered) */
          <>
            <div className={`mb-3 inline-flex items-center gap-2 rounded-full px-4 py-1 text-xs font-black border ${
              isDay
                ? 'bg-brand-100 text-brand-900 border-brand-300'
                : 'bg-brand-500/20 text-brand-300 border-brand-500/30'
            }`}>
              <span>المحطة {currentTrack.stationNumber}:</span>
              <span>{currentTrack.stationTitle}</span>
            </div>

            <div className={`text-3xl sm:text-5xl font-black tracking-tight mb-2 sm:mb-3 ${
              isDay ? 'text-brand-600' : 'text-brand-400'
            }`}>
              الدرس {currentTrack.number}
            </div>

            <h1 className={`text-2xl sm:text-4xl lg:text-5xl font-black leading-relaxed sm:leading-tight px-2 max-w-2xl mx-auto ${
              isDay ? 'text-slate-950' : 'text-white drop-shadow-sm'
            }`}>
              {currentTrack.title}
            </h1>

            <p className={`mt-2 text-sm sm:text-base dir-ltr font-sans font-bold ${
              isDay ? 'text-slate-700' : 'text-slate-400'
            }`} dir="ltr">
              {currentTrack.titleEn}
            </p>

            {lang === 'en' && currentTrack.hasAudio && (
              <div className="mt-4 inline-flex items-center gap-2 rounded-2xl bg-amber-500/10 border border-amber-500/30 px-4 py-1.5 text-xs text-amber-300">
                <span>🎙️</span>
                <span>English audio is in production — Playing Arabic narration (🇸🇦)</span>
              </div>
            )}

            {currentTrack.hasAudio ? (
              <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-slate-800/60 px-3.5 py-1 text-xs text-slate-400 border border-slate-700/60">
                <span>🔘</span>
                <span>مدعوم بالتحكم من أزرار عجلة القيادة وبلوتوث السيارة</span>
              </div>
            ) : (
              <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-amber-500/20 px-4 py-1.5 text-xs font-bold text-amber-300 border border-amber-500/40 animate-pulse">
                <span>🎙️</span>
                <span>الشرح الصوتي لهذا الدرس قيد الإنتاج وسيتوفر قريباً</span>
              </div>
            )}
          </>
        )}
      </div>

      {/* Bottom Area: Controls & Scrub */}
      <div className="space-y-4 pt-4 border-t border-slate-800/90">
        {/* Progress Bar & Timers (RTL Fixed) */}
        <div>
          <div
            ref={progressBarRef}
            onClick={handleScrub}
            className="relative h-3.5 w-full cursor-pointer rounded-full bg-slate-800 overflow-hidden shadow-inner touch-none"
            title="انقر أو اسحب للتقديم والتأخير"
          >
            <div
              className="h-full bg-gradient-to-l from-brand-500 via-emerald-400 to-teal-300 transition-all duration-75"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
          <div className="mt-2 flex justify-between text-xs sm:text-sm font-mono text-slate-400 px-1">
            <span>{formatTime(currentTime)}</span>
            <span>{formatTime(duration)}</span>
          </div>
        </div>

        {/* Big Tactile Touch Targets for Mobile, Tablet & Dashboard (Standardized LTR Audio Transport) */}
        <div className="flex items-center justify-center gap-3 sm:gap-6 py-2" dir="ltr">
          {/* Previous Lesson (Track) */}
          <button
            type="button"
            onClick={playPrevLesson}
            className={`flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-2xl transition shadow-lg active:scale-95 border-2 cursor-pointer ${
              isDay
                ? 'bg-white hover:bg-slate-50 text-slate-900 border-slate-300'
                : 'bg-slate-800/90 text-slate-200 hover:bg-slate-700 border-slate-700/60'
            }`}
            title="الدرس السابق"
            aria-label="الدرس السابق"
          >
            <svg className="h-6 w-6 sm:h-7 sm:w-7 fill-current" viewBox="0 0 24 24">
              <path d="M6 6h2v12H6zm3.5 6l8.5 6V6z" />
            </svg>
          </button>

          {/* Seek -15s */}
          <button
            type="button"
            onClick={() => seek(-15)}
            className={`flex h-12 sm:h-14 items-center justify-center gap-1 px-3 sm:px-4 rounded-2xl transition text-xs sm:text-sm font-black border-2 active:scale-95 cursor-pointer ${
              isDay
                ? 'bg-slate-200 hover:bg-slate-300 text-slate-900 border-slate-300'
                : 'bg-slate-800/70 text-slate-300 hover:bg-slate-700 border-slate-700/40'
            }`}
            title="تأخير 15 ثانية داخل الدرس"
            aria-label="تأخير 15 ثانية"
          >
            <svg className="h-4 w-4 sm:h-5 sm:w-5 fill-none stroke-current stroke-2 shrink-0" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h10a5 5 0 0 1 5 5v1a5 5 0 0 1-5 5H6" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M7 6 3 10l4 4" />
            </svg>
            <span className="font-mono font-bold text-xs sm:text-sm">15s</span>
          </button>

          {/* Huge Play / Pause Button (Easy touch in car) */}
          <button
            type="button"
            onClick={togglePlay}
            disabled={!currentTrack.hasAudio}
            className="flex h-20 w-20 sm:h-22 sm:w-22 items-center justify-center rounded-3xl bg-gradient-to-tr from-emerald-600 to-teal-500 text-white shadow-2xl shadow-emerald-600/40 hover:scale-105 active:scale-95 disabled:opacity-40 disabled:cursor-not-allowed transition cursor-pointer"
            title={isPlaying ? 'إيقاف مؤقت' : 'تشغيل'}
            aria-label={isPlaying ? 'إيقاف مؤقت' : 'تشغيل'}
          >
            {isPlaying ? (
              <svg className="h-9 w-9 sm:h-10 sm:w-10 fill-current" viewBox="0 0 24 24">
                <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
              </svg>
            ) : (
              <svg className="h-9 w-9 sm:h-10 sm:w-10 fill-current translate-x-0.5" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            )}
          </button>

          {/* Seek +15s */}
          <button
            type="button"
            onClick={() => seek(15)}
            className={`flex h-12 sm:h-14 items-center justify-center gap-1 px-3 sm:px-4 rounded-2xl transition text-xs sm:text-sm font-black border-2 active:scale-95 cursor-pointer ${
              isDay
                ? 'bg-slate-200 hover:bg-slate-300 text-slate-900 border-slate-300'
                : 'bg-slate-800/70 text-slate-300 hover:bg-slate-700 border-slate-700/40'
            }`}
            title="تقديم 15 ثانية داخل الدرس"
            aria-label="تقديم 15 ثانية"
          >
            <span className="font-mono font-bold text-xs sm:text-sm">15s</span>
            <svg className="h-4 w-4 sm:h-5 sm:w-5 fill-none stroke-current stroke-2 shrink-0" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 10H11a5 5 0 0 0-5 5v1a5 5 0 0 0 5 5h7" />
              <path strokeLinecap="round" strokeLinejoin="round" d="m17 6 4 4-4 4" />
            </svg>
          </button>

          {/* Next Lesson (Track) */}
          <button
            type="button"
            onClick={playNextLesson}
            className={`flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-2xl transition shadow-lg active:scale-95 border-2 cursor-pointer ${
              isDay
                ? 'bg-white hover:bg-slate-50 text-slate-900 border-slate-300'
                : 'bg-slate-800/90 text-slate-200 hover:bg-slate-700 border-slate-700/60'
            }`}
            title="الدرس التالي"
            aria-label="الدرس التالي"
          >
            <svg className="h-6 w-6 sm:h-7 sm:w-7 fill-current" viewBox="0 0 24 24">
              <path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z" />
            </svg>
          </button>
        </div>

        {/* Footer info: Auto-advance switch & Read lesson link */}
        <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-slate-400 pt-2">
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
            <span>فتح المقال الكامل للقراءة</span>
            <span>↗</span>
          </a>
        </div>
      </div>

      {/* Playlist Drawer (Modal / Overlay) */}
      {isDrawerOpen && (
        <div className="absolute inset-0 z-30 flex flex-col bg-slate-950/98 backdrop-blur-md p-5 sm:p-6 animate-fadeIn">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
            <div>
              <h3 className="font-bold text-lg text-white">شروحات الكورس الصوتية</h3>
              <div className="text-xs text-slate-400">{availableTracksCount} درس جاهز للاستماع الآن</div>
            </div>
            <button
              type="button"
              onClick={() => setIsDrawerOpen(false)}
              className="rounded-xl bg-slate-800 px-3 py-1.5 text-sm font-semibold text-slate-300 hover:bg-slate-700"
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
                  className={`w-full text-right p-3.5 rounded-2xl border transition flex items-center justify-between gap-3 ${
                    isSelected
                      ? 'border-brand-500 bg-brand-500/10 text-brand-300 font-bold shadow-sm'
                      : track.hasAudio
                      ? 'border-slate-800 bg-slate-900/60 text-slate-300 hover:bg-slate-800/80 cursor-pointer'
                      : 'border-slate-800/30 bg-slate-900/20 text-slate-500 cursor-not-allowed opacity-50'
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
                      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-brand-500 text-white text-xs shadow-md">
                        ▶
                      </span>
                    ) : track.hasAudio ? (
                      <span className="text-[11px] font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-0.5 rounded-full">
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
