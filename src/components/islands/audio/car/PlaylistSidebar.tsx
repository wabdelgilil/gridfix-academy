import type { RefObject } from 'react';
import type { PlaylistItem } from './types';
import { lessonAudioDurations } from '../../../../data/audioManifest';

interface PlaylistSidebarProps {
  isSidebarOpen: boolean;
  setIsSidebarOpen: (open: boolean) => void;
  isDay: boolean;
  courseTitle: string;
  currentIndex: number;
  availableTracksCount: number;
  playlist: PlaylistItem[];
  activeItemRef: RefObject<HTMLButtonElement | null>;
  selectTrack: (index: number) => void;
}

export default function PlaylistSidebar({
  isSidebarOpen,
  setIsSidebarOpen,
  isDay,
  courseTitle,
  currentIndex,
  availableTracksCount,
  playlist,
  activeItemRef,
  selectTrack,
}: PlaylistSidebarProps) {
  if (!isSidebarOpen) return null;

  return (
    <aside
      className={`hidden lg:flex flex-col w-84 xl:w-96 sticky top-4 max-h-[calc(100vh-2rem)] rounded-2xl sm:rounded-3xl border-2 shadow-xl shrink-0 overflow-hidden transition-all duration-300 ${
        isDay ? 'bg-white border-slate-200 text-slate-900' : 'bg-slate-900 border-slate-800 text-white'
      }`}
    >
      {/* Header */}
      <div
        className={`p-4 border-b shrink-0 flex items-center justify-between ${
          isDay ? 'border-slate-200 bg-slate-50' : 'border-slate-800 bg-slate-950/60'
        }`}
      >
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
            isDay
              ? 'border-slate-300 text-slate-600 hover:bg-slate-200'
              : 'border-slate-700 text-slate-400 hover:bg-slate-800 hover:text-white'
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
          const durationStr = lessonAudioDurations[track.id] || (track.hasAudio ? 'متاح' : 'قريباً');
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
  );
}
