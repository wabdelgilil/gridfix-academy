import { useState, useRef, useEffect, useCallback } from 'react';
import { getLessonAudioCues } from '../../../data/audioCues';
import useLang from '../../../lib/useLang';
import { calculateProgressPercent, calculateSeekTime, getNextPlaybackSpeed } from '../../../lib/audioUtils';
import type { PlaylistItem, CourseOption, DriveTheme } from './car/types';
import PlayerHeader from './car/PlayerHeader';
import SlideStage from './car/SlideStage';
import TransportControls from './car/TransportControls';
import PlaylistSidebar from './car/PlaylistSidebar';
import MobilePlaylistDrawer from './car/MobilePlaylistDrawer';

export type { PlaylistItem, CourseOption, DriveTheme };

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
  initialLessonId,
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
  const lang = useLang();
  const [driveTheme, setDriveTheme] = useState<DriveTheme>('day');

  // Smart Synchronized Audio Cues for current track
  const currentCues = currentTrack ? getLessonAudioCues(currentTrack.id) : [];
  const activeCueIndex =
    currentCues.length > 0
      ? currentCues.reduce((acc, cue, idx) => (currentTime >= cue.atSeconds ? idx : acc), 0)
      : -1;
  const activeCue = activeCueIndex >= 0 ? currentCues[activeCueIndex] : null;

  // Auto-scroll active item in sidebar
  useEffect(() => {
    if (activeItemRef.current) {
      activeItemRef.current.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
    }
  }, [currentIndex]);

  // Read theme from localStorage or system preference
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
    const next: DriveTheme = driveTheme === 'day' ? 'night' : 'day';
    setDriveTheme(next);
    try {
      localStorage.setItem('car-drive-theme', next);
    } catch {}
  };

  // Read URL query (?lesson= or ?playlist=true) and stored last-played
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

  // Play / Pause
  const togglePlay = () => {
    if (!audioRef.current || !currentTrack.hasAudio) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(() => {});
    }
  };

  // Seek +/- seconds
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

  // Jump to specific track
  const selectTrack = (index: number) => {
    if (!playlist[index].hasAudio) return;
    setCurrentIndex(index);
    setIsMobileDrawerOpen(false);
  };

  // Cycle speed
  const cycleSpeed = () => {
    const next = getNextPlaybackSpeed(playbackRate);
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
    audioRef.current.currentTime = calculateSeekTime(e.clientX, rect, isRtl, duration);
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

  const progressPercent = calculateProgressPercent(currentTime, duration);
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
        {/* 16:9 Widescreen Video Player Canvas */}
        <div
          className={`relative w-full aspect-video rounded-2xl sm:rounded-3xl border-2 overflow-hidden shadow-2xl flex flex-col justify-between transition-all duration-300 ${
            isDay
              ? 'bg-slate-100 border-slate-300 text-slate-900 shadow-xl'
              : 'bg-slate-950 border-slate-800 text-white shadow-2xl'
          }`}
        >
          {/* Header Overlay */}
          <PlayerHeader
            track={currentTrack}
            wakeLockActive={wakeLockActive}
            coursesList={coursesList}
            courseId={courseId}
            activeCueIndex={activeCueIndex}
            totalCues={currentCues.length}
            isDay={isDay}
          />

          {/* Slide Stage */}
          <SlideStage
            track={currentTrack}
            activeCue={activeCue}
            isDay={isDay}
            lang={lang}
          />

          {/* Transport Overlay */}
          <TransportControls
            progressBarRef={progressBarRef}
            handleScrub={handleScrub}
            progressPercent={progressPercent}
            isPlaying={isPlaying}
            togglePlay={togglePlay}
            playPrevLesson={playPrevLesson}
            playNextLesson={playNextLesson}
            seek={seek}
            currentTime={currentTime}
            duration={duration}
            autoPlayNext={autoPlayNext}
            setAutoPlayNext={setAutoPlayNext}
            playbackRate={playbackRate}
            cycleSpeed={cycleSpeed}
            isDay={isDay}
            toggleDriveTheme={toggleDriveTheme}
            isSidebarOpen={isSidebarOpen}
            onTogglePlaylist={() => {
              if (typeof window !== 'undefined' && window.innerWidth < 1024) {
                setIsMobileDrawerOpen(true);
              } else {
                setIsSidebarOpen(!isSidebarOpen);
              }
            }}
            currentIndex={currentIndex}
            availableTracksCount={availableTracksCount}
            isFullscreen={isFullscreen}
            toggleFullscreen={toggleFullscreen}
          />
        </div>
      </div>

      {/* Column 2: YouTube Playlist Sidebar (~28% Width) */}
      <PlaylistSidebar
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
        isDay={isDay}
        courseTitle={courseTitle}
        currentIndex={currentIndex}
        availableTracksCount={availableTracksCount}
        playlist={playlist}
        activeItemRef={activeItemRef}
        selectTrack={selectTrack}
      />

      {/* Mobile Drawer (Only for mobile screens < lg:) */}
      <MobilePlaylistDrawer
        isOpen={isMobileDrawerOpen}
        onClose={() => setIsMobileDrawerOpen(false)}
        courseTitle={courseTitle}
        currentIndex={currentIndex}
        availableTracksCount={availableTracksCount}
        playlist={playlist}
        selectTrack={selectTrack}
      />
    </div>
  );
}
