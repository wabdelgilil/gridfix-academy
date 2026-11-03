import type { PlaylistItem } from './types';
import { lessonAudioDurations } from '../../../../data/audioManifest';

interface MobilePlaylistDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  courseTitle: string;
  currentIndex: number;
  availableTracksCount: number;
  playlist: PlaylistItem[];
  selectTrack: (index: number) => void;
}

export default function MobilePlaylistDrawer({
  isOpen,
  onClose,
  courseTitle,
  currentIndex,
  availableTracksCount,
  playlist,
  selectTrack,
}: MobilePlaylistDrawerProps) {
  if (!isOpen) return null;

  return (
    <div className="lg:hidden fixed inset-0 z-50 flex flex-col bg-slate-950/98 backdrop-blur-md p-4 animate-fadeIn">
      <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-3 shrink-0">
        <div>
          <h3 className="font-bold text-base text-white">{courseTitle}</h3>
          <div className="text-xs text-slate-400">{availableTracksCount} درس جاهز للاستماع الآن</div>
        </div>
        <button
          type="button"
          onClick={onClose}
          className="rounded-xl bg-slate-800 px-3 py-1.5 text-xs font-bold text-slate-300 hover:bg-slate-700 cursor-pointer"
        >
          ✕ إغلاق
        </button>
      </div>

      <div className="flex-1 overflow-y-auto p-1 space-y-1.5">
        {playlist.map((track, globalIdx) => {
          const isSelected = globalIdx === currentIndex;
          const durationStr = lessonAudioDurations[track.id] || (track.hasAudio ? 'متاح' : 'قريباً');
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
                {isSelected ? (
                  <span className="text-emerald-400 font-black">▶</span>
                ) : (
                  <span className="text-slate-500">{globalIdx + 1}</span>
                )}
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
  );
}
