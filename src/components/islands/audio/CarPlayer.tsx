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

const LESSON_DURATIONS: Record<string, string> = {
  'lesson-cmrp-1-1': '06:23',
  'lesson-cmrp-1-2': '05:42',
  'lesson-cmrp-2-1': '04:11',
  'lesson-cmrp-2-2': '05:23',
  'lesson-cmrp-2-3': '04:08',
  'lesson-cmrp-2-4': '04:09',
  'lesson-cmrp-3-1': '04:05',
  'lesson-cmrp-3-2': '04:55',
  'lesson-cmrp-3-3': '04:14',
  'lesson-cmrp-4-1': '04:01',
  'lesson-cmrp-4-2': '03:19',
  'lesson-cmrp-4-3': '03:32',
  'lesson-cmrp-4-4': '02:55',
  'lesson-cmrp-4-5': '03:07',
  'lesson-cmrp-5-1': '03:52',
  'lesson-cmrp-5-2': '03:28',
  'lesson-cmrp-5-3': '04:11',
  'lesson-cmrp-6-1': '04:45',
  'lesson-cmrp-6-2': '05:28',
  'lesson-cmrp-6-3': '05:51',
  'lesson-cmrp-7-1': '03:13',
};

export default function CarPlayer({
  courseTitle,
  courseId,
  coursesList,
  playlist,
  initialLessonId
}: CarPlayerProps) {
  const initialIndex = initialLessonId
    ? playlist.findIndex((item) => item.id === initialLessonId && item.hasAudio)
    : playlist.findIndex((item) => item.hasAudio);

  const [currentIndex, setCurrentIndex] = useState(Math.max(0, initialIndex !== -1 ? initialIndex : 0));
  const currentTrack = playlist[currentIndex] || playlist[0];

  const containerRef = useRef<HTMLDivElement | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const progressBarRef = useRef<HTMLDivElement | null>(null);
  const activeItemRef = useRef<HTMLButtonElement | null>(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [playbackRate, setPlaybackRate] = useState(1);
  const [autoPlayNext, setAutoPlayNext] = useState(true);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isMobileDrawerOpen, setIsMobileDrawerOpen] = useState(false);
  const [wakeLockActive, setWakeLockActive] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [lang, setLang] = useState<'ar' | 'en'>('ar');
  const [driveTheme, setDriveTheme] = useState<'day' | 'night'>('day');

  // Smart Synchronized Audio Cues for the current track
  const currentCues = currentTrack ? getLessonAudioCues(currentTrack.id) : [];
  const activeCueIndex = currentCues.length > 0
    ? currentCues.reduce((acc, cue, idx) => (currentTime >= cue.atSeconds ? idx : acc), 0)
    : -1;
  const activeCue = activeCueIndex >= 0 ? currentCues[activeCueIndex] : null;

  // Auto-scroll active item into view in sidebar
  useEffect(() => {
    if (activeItemRef.current) {
      activeItemRef.current.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
    }
  }, [currentIndex]);

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
      setIsMobileDrawerOpen(true);
      setIsSidebarOpen(true);
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
    setIsMobileDrawerOpen(false);
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

  // Fullscreen toggle
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

  // Keep screen awake while playing in car
  useEffect(() => {
    let wakeLock: any = null;
    if ('wakeLock' in navigator && isPlaying) {
      navigator.wakeLock
        .request('screen')
        .then((lock) => {
          wakeLock = lock;
          setWakeLockActive(true);
          lock.addEventListener('release', () => {
            setWakeLockActive(false);
          });
        })
        .catch(() => {});
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
      className={`relative mx-auto flex w-full max-w-[1720px] flex-col lg:flex-row gap-5 items-start select-none transition-all duration-300 ${
        isDay ? 'text-slate-900' : 'text-slate-100'
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

      {/* Main Video & Details Column (YouTube Primary Area - ~72% Width) */}
      <div className="flex-1 min-w-0 w-full space-y-4">
        {/* 1. 16:9 Widescreen Video Player Canvas */}
        <div
          className={`relative w-full aspect-video rounded-2xl sm:rounded-3xl border-2 overflow-hidden shadow-2xl flex flex-col justify-between transition-all duration-300 ${
            isDay
              ? 'bg-slate-900 border-slate-700 text-white'
              : 'bg-slate-950 border-slate-800 text-white'
          }`}
        >
          {/* Top Subtle Video Header Overlay */}
          <div className="flex items-center justify-between px-3 sm:px-5 py-2 sm:py-2.5 bg-gradient-to-b from-black/85 via-black/40 to-transparent z-10 text-xs shrink-0 gap-2">
            <div className="flex items-center gap-2 truncate min-w-0">
              <span className="px-2.5 py-0.5 rounded-full font-black bg-brand-500/30 text-brand-300 border border-brand-500/40 text-xs shrink-0">
                الدرس {currentTrack.number}
              </span>
              <span className="font-bold text-slate-200 truncate text-xs sm:text-sm">
                {currentTrack.title}
              </span>
              {wakeLockActive && (
                <span className="hidden xl:inline-flex items-center gap-1 text-[10px] font-bold text-amber-400 bg-amber-400/10 px-2 py-0.5 rounded-full border border-amber-400/20" title="الشاشة ستبقى مضاءة أثناء القيادة">
                  ☀️ الشاشة مضاءة
                </span>
              )}
            </div>

            {/* Course Switcher Tabs */}
            {coursesList && coursesList.length > 0 && (
              <div className="hidden md:flex items-center gap-1 p-0.5 rounded-xl border border-white/10 bg-black/40 text-xs shrink-0">
                {coursesList.map((c) => (
                  <a
                    key={c.id}
                    href={`/${c.id}/listen/?playlist=true`}
                    className={`px-2 py-0.5 rounded-lg font-bold transition flex items-center gap-1 text-[11px] ${
                      c.id === courseId
                        ? 'bg-emerald-600 text-white shadow-xs'
                        : 'text-slate-400 hover:text-white'
                    }`}
                    title={c.title}
                  >
                    <span>{c.icon}</span>
                    <span>{c.code}</span>
                  </a>
                ))}
              </div>
            )}

            {/* Scene Count & Read Article Link */}
            <div className="flex items-center gap-2 shrink-0">
              {activeCue && currentCues.length > 0 && (
                <div className="px-2.5 py-0.5 rounded-full font-mono text-[11px] font-bold bg-white/10 text-slate-300 border border-white/15 shrink-0">
                  مشهد {activeCueIndex + 1} من {currentCues.length}
                </div>
              )}
              <a
                href={currentTrack.lessonUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:flex items-center gap-1 px-2.5 py-0.5 rounded-lg text-[11px] font-bold bg-white/10 hover:bg-white/20 text-slate-200 border border-white/15 transition shrink-0"
                title="فتح المقال الكامل للقراءة"
              >
                <span>📖 المقال</span>
                <span>↗</span>
              </a>
            </div>
          </div>

          {/* Center Slide Stage: Clean Responsive Visual Card */}
          <div className="flex-1 flex flex-col justify-center items-center px-4 sm:px-8 py-1 sm:py-2 overflow-y-auto w-full text-right">
            {activeCue ? (
              <div className="w-full max-w-4xl mx-auto space-y-2 animate-fadeIn">
                {/* Header: Category Badge & Scene Time */}
                <div className="flex items-center justify-between gap-2">
                  <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-xl text-xs sm:text-sm font-black border ${
                    activeCue.type === 'rule'
                      ? 'bg-amber-500/20 text-amber-300 border-amber-500/40'
                      : activeCue.type === 'stat'
                      ? 'bg-rose-500/20 text-rose-300 border-rose-500/40'
                      : 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40'
                  }`}>
                    <span className="text-base">{activeCue.badgeIcon}</span>
                    <span>{activeCue.badge}</span>
                  </div>

                  <span className="text-[11px] font-mono font-bold text-slate-400">
                    بدء النقطة: {formatTime(activeCue.atSeconds)}
                  </span>
                </div>

                {/* Title */}
                <h2 className="text-lg sm:text-xl md:text-2xl font-black text-white leading-snug">
                  {activeCue.title}
                </h2>

                {/* Key Takeaway */}
                <div className={`p-2.5 sm:p-3 rounded-xl border text-sm sm:text-base font-black leading-relaxed ${
                  activeCue.type === 'rule'
                    ? 'bg-amber-500/10 border-amber-500/30 text-amber-200'
                    : 'bg-slate-800/80 border-slate-700/80 text-slate-100'
                }`}>
                  {activeCue.keyTakeaway}
                </div>

                {/* 1. Mathematical Formula */}
                {activeCue.formula && (
                  <div className="p-3 sm:p-4 rounded-xl border bg-slate-900/90 border-amber-500/30 text-center">
                    <div className="text-xs font-bold mb-1 text-amber-400">
                      📐 {activeCue.formula.label}
                    </div>
                    <div className="font-mono text-lg sm:text-xl md:text-2xl lg:text-3xl font-black py-1 tracking-wider text-brand-400 whitespace-nowrap overflow-x-auto" dir="ltr">
                      {activeCue.formula.expression}
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mt-2 pt-2 border-t border-amber-500/20 text-right">
                      {activeCue.formula.variables.map((v, i) => (
                        <div key={i} className="p-1.5 sm:p-2 rounded-lg text-xs font-semibold bg-slate-950/80 text-slate-200">
                          <span className="font-mono font-black text-brand-400 inline-block ml-1 text-xs" dir="ltr">{v.symbol}:</span>
                          <span>{v.meaning}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* 2. Failure Curves Plotter */}
                {activeCue.curvesGraphic && (
                  <div className="p-3 rounded-xl border bg-slate-900/80 border-slate-800">
                    <div className="text-xs font-bold mb-2 text-right flex items-center justify-between text-slate-300">
                      <span className="flex items-center gap-1.5 font-black">
                        <span>📈</span>
                        <span>{activeCue.curvesGraphic.title}</span>
                      </span>
                      <span className="text-[11px] font-mono opacity-70">المحور الأفقي: الوقت ←</span>
                    </div>
                    <div className="grid grid-cols-3 gap-2 sm:gap-3">
                      {activeCue.curvesGraphic.items.map((item) => {
                        const pathD = item.letter === 'F'
                          ? "M 10,15 Q 30,50 60,52 L 140,52"
                          : item.letter === 'E'
                          ? "M 10,35 L 140,35"
                          : "M 10,20 Q 25,50 50,52 L 100,52 Q 125,50 140,20";
                        const strokeColor = item.group === 'random' ? '#f43f5e' : '#14b8a6';
                        return (
                          <div
                            key={item.letter}
                            className={`p-2 rounded-lg border text-center transition-all ${
                              item.highlight
                                ? 'bg-rose-950/40 border-rose-500 ring-1 ring-rose-500/50'
                                : 'bg-slate-950 border-slate-800'
                            }`}
                          >
                            <div className="flex items-center justify-between text-xs mb-1">
                              <span className={`px-1.5 py-0.2 rounded font-black text-white text-[10px] ${
                                item.group === 'random' ? 'bg-rose-600' : 'bg-teal-600'
                              }`}>
                                {item.letter}
                              </span>
                              <span className={`font-mono font-black text-xs ${
                                item.group === 'random' ? 'text-rose-400' : 'text-teal-400'
                              }`}>
                                {item.percent}
                              </span>
                            </div>
                            <svg viewBox="0 0 150 65" className="w-full h-8 sm:h-10 overflow-visible my-1">
                              <line x1="10" y1="58" x2="140" y2="58" stroke="currentColor" strokeOpacity="0.2" strokeWidth="1" />
                              <line x1="10" y1="10" x2="10" y2="58" stroke="currentColor" strokeOpacity="0.2" strokeWidth="1" />
                              <path d={pathD} fill="none" stroke={strokeColor} strokeWidth="3.5" strokeLinecap="round" />
                            </svg>
                            <div className="text-[10px] font-bold truncate mt-0.5">{item.label}</div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* 3. Proportion Bar */}
                {activeCue.visualBar && (
                  <div className="p-3 rounded-xl border bg-slate-900/80 border-slate-800">
                    <div className="text-xs font-bold mb-1.5 text-right text-slate-300">
                      📊 {activeCue.visualBar.title}
                    </div>
                    <div className="h-5 w-full rounded-lg overflow-hidden flex border border-slate-700/40 shadow-inner">
                      <div
                        className="bg-rose-500 flex items-center justify-center text-white text-xs font-black"
                        style={{ width: `${activeCue.visualBar.left.percent}%` }}
                      >
                        {activeCue.visualBar.left.percent}%
                      </div>
                      <div
                        className="bg-teal-500 flex items-center justify-center text-white text-xs font-black"
                        style={{ width: `${activeCue.visualBar.right.percent}%` }}
                      >
                        {activeCue.visualBar.right.percent}%
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-2 mt-2 text-right">
                      <div className="p-2 rounded-lg border bg-rose-950/30 border-rose-800 text-rose-200">
                        <div className="text-xs font-black text-rose-400">{activeCue.visualBar.left.label}</div>
                        <div className="text-[10px] opacity-80 mt-0.5">{activeCue.visualBar.left.desc}</div>
                      </div>
                      <div className="p-2 rounded-lg border bg-teal-950/30 border-teal-800 text-teal-200">
                        <div className="text-xs font-black text-teal-400">{activeCue.visualBar.right.label}</div>
                        <div className="text-[10px] opacity-80 mt-0.5">{activeCue.visualBar.right.desc}</div>
                      </div>
                    </div>
                  </div>
                )}

                {/* 4. Engineering Flowchart */}
                {activeCue.flowchart && (
                  <div className="p-3 rounded-xl border bg-slate-900/80 border-slate-800">
                    <div className="text-xs font-bold mb-2 text-right flex items-center gap-1.5 text-slate-300">
                      <span>🔄</span>
                      <span className="font-black">{activeCue.flowchart.title}</span>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                      {activeCue.flowchart.steps.map((st, i) => (
                        <div key={i} className={`p-2 rounded-xl border text-right text-xs font-bold ${
                          st.outcomeType === 'warning'
                            ? 'bg-amber-950/40 border-amber-800 text-amber-200'
                            : st.outcomeType === 'success'
                            ? 'bg-emerald-950/40 border-emerald-800 text-emerald-200'
                            : 'bg-slate-950 border-slate-800 text-slate-100'
                        }`}>
                          <div className="flex items-center gap-1.5 mb-1">
                            <span className={`flex h-5 w-5 shrink-0 items-center justify-center rounded font-mono text-[10px] font-black text-white ${
                              st.outcomeType === 'warning' ? 'bg-amber-600' : st.outcomeType === 'success' ? 'bg-emerald-600' : 'bg-brand-600'
                            }`}>
                              {st.step}
                            </span>
                            <span className="font-black text-xs">{st.title}</span>
                          </div>
                          {st.decision && (
                            <div className="text-[10px] opacity-80 font-normal pr-6">{st.decision}</div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* 5. Highlight Stat */}
                {activeCue.highlightStat && (
                  <div className="p-3 rounded-xl border bg-slate-900/80 border-slate-800 flex items-center justify-between gap-3 text-right">
                    <div className="flex-1 min-w-0">
                      <div className="text-xs sm:text-sm font-black text-white">{activeCue.highlightStat.label}</div>
                      {activeCue.highlightStat.sub && (
                        <div className="text-[11px] text-slate-400 mt-0.5">{activeCue.highlightStat.sub}</div>
                      )}
                    </div>
                    <div className="font-mono text-xl sm:text-2xl font-black px-3 py-1 rounded-lg border bg-rose-500/10 text-rose-400 border-rose-500/30 shrink-0">
                      {activeCue.highlightStat.value}
                    </div>
                  </div>
                )}

                {/* 6. Comparison */}
                {activeCue.comparison && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-right">
                    <div className="p-2.5 rounded-xl border bg-amber-950/20 border-amber-800/40 text-amber-200">
                      <div className="text-[10px] font-bold text-amber-400">{activeCue.comparison.right.label}</div>
                      <div className="text-xs sm:text-sm font-black my-0.5">{activeCue.comparison.right.value}</div>
                      <div className="text-[10px] opacity-80">{activeCue.comparison.right.desc}</div>
                    </div>
                    <div className="p-2.5 rounded-xl border bg-emerald-950/20 border-emerald-800/40 text-emerald-200">
                      <div className="text-[10px] font-bold text-emerald-400">{activeCue.comparison.left.label}</div>
                      <div className="text-xs sm:text-sm font-black my-0.5">{activeCue.comparison.left.value}</div>
                      <div className="text-[10px] opacity-80">{activeCue.comparison.left.desc}</div>
                    </div>
                  </div>
                )}

                {/* Detail */}
                {activeCue.detail && (
                  <p className="text-xs sm:text-sm font-semibold text-slate-300 leading-relaxed">
                    {activeCue.detail}
                  </p>
                )}
              </div>
            ) : (
              /* Fallback typography when no cues */
              <div className="space-y-3 text-center">
                <div className="inline-flex items-center gap-2 rounded-full px-4 py-1 text-xs font-black bg-brand-500/20 text-brand-300 border border-brand-500/30">
                  <span>المحطة {currentTrack.stationNumber}:</span>
                  <span>{currentTrack.stationTitle}</span>
                </div>
                <div className="text-3xl sm:text-5xl font-black text-brand-400">
                  الدرس {currentTrack.number}
                </div>
                <h1 className="text-xl sm:text-3xl font-black text-white px-2 max-w-2xl mx-auto">
                  {currentTrack.title}
                </h1>
                <p className="text-sm font-mono text-slate-400" dir="ltr">
                  {currentTrack.titleEn}
                </p>
                {lang === 'en' && (
                  <div className="mt-2 inline-flex items-center gap-1.5 rounded-full bg-amber-500/20 px-3 py-1 text-xs text-amber-300">
                    <span>🎙️</span>
                    <span>English audio is in production — Playing Arabic narration</span>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Bottom YouTube-Style Transport Overlay */}
          <div className="bg-gradient-to-t from-black/95 via-black/85 to-transparent pt-3 pb-2 px-3 sm:px-5 shrink-0 z-10 space-y-1">
            {/* Full-width Scrub Bar */}
            <div
              ref={progressBarRef}
              onClick={handleScrub}
              className="group relative h-1.5 hover:h-2.5 w-full cursor-pointer rounded-full bg-white/20 transition-all duration-150 overflow-hidden"
              title="انقر أو اسحب للتقديم والتأخير"
            >
              <div
                className="h-full bg-gradient-to-r from-brand-500 via-emerald-400 to-teal-300 transition-all duration-75"
                style={{ width: `${progressPercent}%` }}
              />
            </div>

            {/* Transport Row (LTR) */}
            <div className="flex items-center justify-between text-white pt-1" dir="ltr">
              {/* Left Controls: Play, Prev, -15s, +15s, Next, Time */}
              <div className="flex items-center gap-2 sm:gap-3">
                <button
                  type="button"
                  onClick={togglePlay}
                  className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-white text-slate-950 hover:bg-slate-100 transition shadow-md active:scale-95 cursor-pointer shrink-0"
                  aria-label={isPlaying ? 'إيقاف مؤقت' : 'تشغيل'}
                >
                  {isPlaying ? (
                    <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                      <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                    </svg>
                  ) : (
                    <svg className="h-5 w-5 fill-current translate-x-0.5" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  )}
                </button>

                <button
                  type="button"
                  onClick={playPrevLesson}
                  className="text-slate-300 hover:text-white transition p-1 cursor-pointer shrink-0"
                  title="الدرس السابق"
                >
                  <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                    <path d="M6 6h2v12H6zm3.5 6l8.5 6V6z" />
                  </svg>
                </button>

                <button
                  type="button"
                  onClick={() => seek(-15)}
                  className="text-slate-300 hover:text-white transition px-1.5 py-0.5 rounded text-xs font-mono font-bold hover:bg-white/10 cursor-pointer shrink-0"
                  title="تأخير 15 ثانية"
                >
                  -15s
                </button>

                <button
                  type="button"
                  onClick={() => seek(15)}
                  className="text-slate-300 hover:text-white transition px-1.5 py-0.5 rounded text-xs font-mono font-bold hover:bg-white/10 cursor-pointer shrink-0"
                  title="تقديم 15 ثانية"
                >
                  +15s
                </button>

                <button
                  type="button"
                  onClick={playNextLesson}
                  className="text-slate-300 hover:text-white transition p-1 cursor-pointer shrink-0"
                  title="الدرس التالي"
                >
                  <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                    <path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z" />
                  </svg>
                </button>

                <div className="font-mono text-xs sm:text-sm text-slate-300 ml-1">
                  <span className="text-white font-bold">{formatTime(currentTime)}</span>
                  <span className="mx-1 text-slate-500">/</span>
                  <span>{formatTime(duration)}</span>
                </div>
              </div>

              {/* Right Controls: Auto Next, Speed, Theme, Playlist Toggle, Fullscreen */}
              <div className="flex items-center gap-1.5 sm:gap-2">
                <label className="hidden sm:flex items-center gap-1.5 cursor-pointer select-none text-[11px] text-slate-300 hover:text-white px-2 py-1 rounded-md bg-white/5 hover:bg-white/10 transition" title="التشغيل التلقائي للدرس التالي">
                  <input
                    type="checkbox"
                    checked={autoPlayNext}
                    onChange={(e) => setAutoPlayNext(e.target.checked)}
                    className="h-3.5 w-3.5 rounded border-slate-700 bg-slate-800 text-brand-500 focus:ring-brand-500 cursor-pointer"
                  />
                  <span>تلقائي</span>
                </label>

                <button
                  type="button"
                  onClick={cycleSpeed}
                  className="px-2 py-1 rounded-md text-xs font-mono font-black bg-white/10 hover:bg-white/20 transition cursor-pointer text-slate-200"
                  title="سرعة التشغيل"
                >
                  {playbackRate}x
                </button>

                <button
                  type="button"
                  onClick={toggleDriveTheme}
                  className="p-1.5 rounded-md text-sm bg-white/10 hover:bg-white/20 transition cursor-pointer text-slate-200"
                  title={isDay ? 'وضع الليل' : 'وضع النهار'}
                >
                  {isDay ? '☀️' : '🌙'}
                </button>

                <button
                  type="button"
                  onClick={() => {
                    if (typeof window !== 'undefined' && window.innerWidth < 1024) {
                      setIsMobileDrawerOpen(true);
                    } else {
                      setIsSidebarOpen(!isSidebarOpen);
                    }
                  }}
                  className={`flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-bold transition cursor-pointer ${
                    isSidebarOpen
                      ? 'bg-emerald-600 text-white'
                      : 'bg-white/10 hover:bg-white/20 text-slate-200'
                  }`}
                  title={isSidebarOpen ? 'إخفاء قائمة التشغيل' : 'عرض قائمة التشغيل'}
                >
                  <span>📑</span>
                  <span>{currentIndex + 1}/{availableTracksCount}</span>
                </button>

                <button
                  type="button"
                  onClick={toggleFullscreen}
                  className="p-1.5 rounded-md text-sm bg-white/10 hover:bg-white/20 transition cursor-pointer text-slate-200"
                  title={isFullscreen ? 'إنهاء ملء الشاشة' : 'ملء الشاشة'}
                >
                  ⛶
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Column 2: YouTube Playlist Sidebar (~28% Width) */}
      {isSidebarOpen && (
        <aside
          className={`hidden lg:flex flex-col w-84 xl:w-96 sticky top-4 max-h-[calc(100vh-2rem)] rounded-2xl sm:rounded-3xl border-2 shadow-xl shrink-0 overflow-hidden transition-all duration-300 ${
            isDay
              ? 'bg-white border-slate-200 text-slate-900'
              : 'bg-slate-900 border-slate-800 text-white'
          }`}
        >
          {/* Header */}
          <div className={`p-4 border-b shrink-0 flex items-center justify-between ${
            isDay ? 'border-slate-200 bg-slate-50' : 'border-slate-800 bg-slate-950/60'
          }`}>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-base">📑</span>
                <h3 className="font-black text-sm sm:text-base">{courseTitle}</h3>
              </div>
              <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                أكاديمية جريد فيكس • {currentIndex + 1} من {availableTracksCount}
              </div>
            </div>
            <button
              type="button"
              onClick={() => setIsSidebarOpen(false)}
              className={`h-8 w-8 flex items-center justify-center rounded-xl border text-sm font-bold transition cursor-pointer ${
                isDay ? 'border-slate-300 text-slate-600 hover:bg-slate-200' : 'border-slate-700 text-slate-400 hover:bg-slate-800 hover:text-white'
              }`}
              title="إخفاء القائمة لتوسيع شاشة العرض"
            >
              ✕
            </button>
          </div>

          {/* Scrollable List of Lessons with 16:9 Mini Thumbnails */}
          <div className="flex-1 overflow-y-auto p-2 space-y-1.5">
            {playlist.map((track, globalIdx) => {
              const isSelected = globalIdx === currentIndex;
              const durationStr = LESSON_DURATIONS[track.id] || (track.hasAudio ? 'متاح' : 'قريباً');
              return (
                <button
                  key={track.id}
                  type="button"
                  ref={isSelected ? activeItemRef : undefined}
                  onClick={() => selectTrack(globalIdx)}
                  disabled={!track.hasAudio}
                  className={`w-full text-right p-2 rounded-xl transition flex items-center gap-2.5 border ${
                    isSelected
                      ? isDay
                        ? 'bg-emerald-50 border-emerald-400 text-emerald-950 font-bold shadow-xs'
                        : 'bg-white/10 border-emerald-500 text-white font-bold shadow-xs'
                      : track.hasAudio
                      ? isDay
                        ? 'border-transparent hover:bg-slate-100 text-slate-800 cursor-pointer'
                        : 'border-transparent hover:bg-white/5 text-slate-300 cursor-pointer'
                      : 'border-transparent opacity-40 cursor-not-allowed text-slate-500'
                  }`}
                >
                  {/* Track Index or Play Icon */}
                  <div className="w-5 shrink-0 text-center text-xs font-mono">
                    {isSelected ? (
                      <span className="text-emerald-500 font-black">▶</span>
                    ) : (
                      <span className="text-slate-400">{globalIdx + 1}</span>
                    )}
                  </div>

                  {/* 16:9 Mini Thumbnail */}
                  <div className="w-24 sm:w-28 aspect-video rounded-lg relative overflow-hidden shrink-0 border border-slate-700/50 bg-gradient-to-br from-slate-900 to-slate-800 flex items-center justify-center shadow-xs">
                    <span className="text-[10px] font-bold text-slate-400">
                      م {track.stationNumber}
                    </span>
                    <span className="absolute bottom-1 right-1 px-1 py-0.2 rounded bg-black/80 text-[9px] font-mono font-bold text-white" dir="ltr">
                      {durationStr}
                    </span>
                  </div>

                  {/* Video Details */}
                  <div className="min-w-0 flex-1">
                    <div className="text-xs sm:text-sm font-bold line-clamp-2 leading-snug">
                      {track.title}
                    </div>
                    <div className="text-[11px] text-slate-500 dark:text-slate-400 truncate mt-0.5">
                      المحطة {track.stationNumber}: {track.stationTitle}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </aside>
      )}

      {/* Mobile Drawer (Only for mobile screens < lg:) */}
      {isMobileDrawerOpen && (
        <div className="lg:hidden fixed inset-0 z-50 flex flex-col bg-slate-950/98 backdrop-blur-md p-4 animate-fadeIn">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-3 shrink-0">
            <div>
              <h3 className="font-bold text-base text-white">{courseTitle}</h3>
              <div className="text-xs text-slate-400">{availableTracksCount} درس جاهز للاستماع الآن</div>
            </div>
            <button
              type="button"
              onClick={() => setIsMobileDrawerOpen(false)}
              className="rounded-xl bg-slate-800 px-3 py-1.5 text-xs font-bold text-slate-300 hover:bg-slate-700 cursor-pointer"
            >
              ✕ إغلاق
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-1 space-y-1.5">
            {playlist.map((track, globalIdx) => {
              const isSelected = globalIdx === currentIndex;
              const durationStr = LESSON_DURATIONS[track.id] || (track.hasAudio ? 'متاح' : 'قريباً');
              return (
                <button
                  key={track.id}
                  type="button"
                  onClick={() => selectTrack(globalIdx)}
                  disabled={!track.hasAudio}
                  className={`w-full text-right p-2 rounded-xl transition flex items-center gap-2.5 border ${
                    isSelected
                      ? 'bg-emerald-500/20 border-emerald-500 text-emerald-200 font-bold shadow-xs'
                      : track.hasAudio
                      ? 'border-slate-800 bg-slate-900/60 text-slate-300'
                      : 'border-slate-800/30 opacity-40 cursor-not-allowed text-slate-500'
                  }`}
                >
                  <div className="w-5 shrink-0 text-center text-xs font-mono">
                    {isSelected ? <span className="text-emerald-400 font-black">▶</span> : <span className="text-slate-500">{globalIdx + 1}</span>}
                  </div>
                  <div className="w-20 aspect-video rounded-lg relative overflow-hidden shrink-0 border border-slate-700/50 bg-slate-900 flex items-center justify-center">
                    <span className="text-[10px] text-slate-400">م {track.stationNumber}</span>
                    <span className="absolute bottom-0.5 right-0.5 px-1 py-0.2 rounded bg-black/80 text-[8px] font-mono text-white" dir="ltr">
                      {durationStr}
                    </span>
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-xs font-bold line-clamp-2">{track.title}</div>
                    <div className="text-[10px] text-slate-400 truncate mt-0.5">المحطة {track.stationNumber}</div>
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
