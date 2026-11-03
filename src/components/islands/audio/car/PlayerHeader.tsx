import type { PlaylistItem, CourseOption } from './types';

interface PlayerHeaderProps {
  track: PlaylistItem;
  wakeLockActive: boolean;
  coursesList?: CourseOption[];
  courseId?: string;
  activeCueIndex: number;
  totalCues: number;
  isDay: boolean;
}

export default function PlayerHeader({
  track,
  wakeLockActive,
  coursesList,
  courseId,
  activeCueIndex,
  totalCues,
  isDay,
}: PlayerHeaderProps) {
  return (
    <div
      className={`flex items-center justify-between px-3 sm:px-5 py-2 sm:py-2.5 z-10 text-xs shrink-0 gap-2 ${
        isDay
          ? 'bg-gradient-to-b from-slate-200/95 via-slate-200/60 to-transparent text-slate-900'
          : 'bg-gradient-to-b from-black/85 via-black/40 to-transparent text-white'
      }`}
    >
      <div className="flex items-center gap-2 truncate min-w-0">
        <span className="px-2.5 py-0.5 rounded-full font-black bg-brand-500/30 text-brand-300 border border-brand-500/40 text-xs shrink-0">
          الدرس {track.number}
        </span>
        <span className={`font-bold truncate text-xs sm:text-sm ${isDay ? 'text-slate-900 font-black' : 'text-slate-200'}`}>
          {track.title}
        </span>
        {wakeLockActive && (
          <span
            className="hidden xl:inline-flex items-center gap-1 text-[10px] font-bold text-amber-400 bg-amber-400/10 px-2 py-0.5 rounded-full border border-amber-400/20"
            title="الشاشة ستبقى مضاءة أثناء القيادة"
          >
            ☀️ الشاشة مضاءة
          </span>
        )}
      </div>

      {/* Course Switcher Tabs */}
      {coursesList && coursesList.length > 0 && (
        <div
          className={`hidden md:flex items-center gap-1 p-0.5 rounded-xl border text-xs shrink-0 ${
            isDay ? 'bg-white border-slate-300' : 'border-white/10 bg-black/40'
          }`}
        >
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
        {totalCues > 0 && activeCueIndex >= 0 && (
          <div
            className={`px-2.5 py-0.5 rounded-full font-mono text-[11px] font-bold border shrink-0 ${
              isDay ? 'bg-slate-200 text-slate-800 border-slate-300' : 'bg-white/10 text-slate-300 border-white/15'
            }`}
          >
            مشهد {activeCueIndex + 1} من {totalCues}
          </div>
        )}
        <a
          href={track.lessonUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`hidden sm:flex items-center gap-1 px-2.5 py-0.5 rounded-lg text-[11px] font-bold border transition shrink-0 ${
            isDay
              ? 'bg-white hover:bg-slate-200 text-slate-900 border-slate-300'
              : 'bg-white/10 hover:bg-white/20 text-slate-200 border-white/15'
          }`}
          title="فتح المقال الكامل للقراءة"
        >
          <span>📖 المقال</span>
          <span>↗</span>
        </a>
      </div>
    </div>
  );
}
