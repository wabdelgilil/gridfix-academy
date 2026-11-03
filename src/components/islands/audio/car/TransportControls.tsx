import type { RefObject } from 'react';
import { formatAudioTime } from '../../../../lib/audioUtils';

interface TransportControlsProps {
  progressBarRef: RefObject<HTMLDivElement | null>;
  handleScrub: (e: React.MouseEvent<HTMLDivElement>) => void;
  progressPercent: number;
  isPlaying: boolean;
  togglePlay: () => void;
  playPrevLesson: () => void;
  playNextLesson: () => void;
  seek: (seconds: number) => void;
  currentTime: number;
  duration: number;
  autoPlayNext: boolean;
  setAutoPlayNext: (val: boolean) => void;
  playbackRate: number;
  cycleSpeed: () => void;
  isDay: boolean;
  toggleDriveTheme: () => void;
  isSidebarOpen: boolean;
  onTogglePlaylist: () => void;
  currentIndex: number;
  availableTracksCount: number;
  isFullscreen: boolean;
  toggleFullscreen: () => void;
}

export default function TransportControls({
  progressBarRef,
  handleScrub,
  progressPercent,
  isPlaying,
  togglePlay,
  playPrevLesson,
  playNextLesson,
  seek,
  currentTime,
  duration,
  autoPlayNext,
  setAutoPlayNext,
  playbackRate,
  cycleSpeed,
  isDay,
  toggleDriveTheme,
  isSidebarOpen,
  onTogglePlaylist,
  currentIndex,
  availableTracksCount,
  isFullscreen,
  toggleFullscreen,
}: TransportControlsProps) {
  return (
    <div
      className={`pt-3 pb-2 px-3 sm:px-5 shrink-0 z-10 space-y-1 ${
        isDay
          ? 'bg-gradient-to-t from-slate-200/95 via-slate-200/85 to-transparent text-slate-900'
          : 'bg-gradient-to-t from-black/95 via-black/85 to-transparent text-white'
      }`}
    >
      {/* Full-width Scrub Bar */}
      <div
        ref={progressBarRef}
        onClick={handleScrub}
        className={`group relative h-1.5 hover:h-2.5 w-full cursor-pointer rounded-full transition-all duration-150 overflow-hidden ${
          isDay ? 'bg-slate-300' : 'bg-white/20'
        }`}
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
            className={`flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full transition shadow-md active:scale-95 cursor-pointer shrink-0 ${
              isDay ? 'bg-brand-600 text-white hover:bg-brand-700' : 'bg-white text-slate-950 hover:bg-slate-100'
            }`}
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
            <span className="text-white font-bold">{formatAudioTime(currentTime)}</span>
            <span className="mx-1 text-slate-500">/</span>
            <span>{formatAudioTime(duration)}</span>
          </div>
        </div>

        {/* Right Controls: Auto Next, Speed, Theme, Playlist Toggle, Fullscreen */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          <label
            className="hidden sm:flex items-center gap-1.5 cursor-pointer select-none text-[11px] text-slate-300 hover:text-white px-2 py-1 rounded-md bg-white/5 hover:bg-white/10 transition"
            title="التشغيل التلقائي للدرس التالي"
          >
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
            onClick={onTogglePlaylist}
            className={`flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-bold transition cursor-pointer ${
              isSidebarOpen ? 'bg-emerald-600 text-white' : 'bg-white/10 hover:bg-white/20 text-slate-200'
            }`}
            title={isSidebarOpen ? 'إخفاء قائمة التشغيل' : 'عرض قائمة التشغيل'}
          >
            <span>📑</span>
            <span>
              {currentIndex + 1}/{availableTracksCount}
            </span>
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
  );
}
