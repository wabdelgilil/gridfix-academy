import type { AudioCue } from '../../../../data/audioCues';
import type { PlaylistItem } from './types';
import { formatAudioTime } from '../../../../lib/audioUtils';

interface SlideStageProps {
  track: PlaylistItem;
  activeCue: AudioCue | null;
  isDay: boolean;
  lang: 'ar' | 'en';
}

export default function SlideStage({ track, activeCue, isDay, lang }: SlideStageProps) {
  return (
    <div className="flex-1 flex flex-col justify-center items-center px-4 sm:px-8 py-1 sm:py-2 overflow-y-auto w-full text-right">
      {activeCue ? (
        <div className="w-full max-w-4xl mx-auto space-y-2 animate-fadeIn">
          {/* Header: Category Badge & Scene Time */}
          <div className="flex items-center justify-between gap-2">
            <div
              className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-xl text-xs sm:text-sm font-black border ${
                activeCue.type === 'rule'
                  ? 'bg-amber-500/20 text-amber-300 border-amber-500/40'
                  : activeCue.type === 'stat'
                  ? 'bg-rose-500/20 text-rose-300 border-rose-500/40'
                  : 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40'
              }`}
            >
              <span className="text-base">{activeCue.badgeIcon}</span>
              <span>{activeCue.badge}</span>
            </div>

            <span className="text-[11px] font-mono font-bold text-slate-400">
              بدء النقطة: {formatAudioTime(activeCue.atSeconds)}
            </span>
          </div>

          {/* Title */}
          <h2 className={`text-lg sm:text-xl md:text-2xl font-black leading-snug ${isDay ? 'text-slate-950' : 'text-white'}`}>
            {activeCue.title}
          </h2>

          {/* Key Takeaway */}
          <div
            className={`p-2.5 sm:p-3 rounded-xl border text-sm sm:text-base font-black leading-relaxed ${
              activeCue.type === 'rule'
                ? isDay
                  ? 'bg-amber-100 border-amber-300 text-amber-950'
                  : 'bg-amber-500/10 border-amber-500/30 text-amber-200'
                : isDay
                ? 'bg-white border-slate-300 text-slate-900 shadow-xs'
                : 'bg-slate-800/80 border-slate-700/80 text-slate-100'
            }`}
          >
            {activeCue.keyTakeaway}
          </div>

          {/* 1. Mathematical Formula */}
          {activeCue.formula && (
            <div
              className={`p-3 sm:p-4 rounded-xl border text-center ${
                isDay
                  ? 'bg-amber-50/70 border-amber-300 text-amber-950 shadow-xs'
                  : 'bg-slate-900/90 border-amber-500/30 text-amber-200'
              }`}
            >
              <div className="text-xs font-bold mb-1 text-amber-400">
                📐 {activeCue.formula.label}
              </div>
              <div
                className={`font-mono text-lg sm:text-xl md:text-2xl lg:text-3xl font-black py-1 tracking-wider whitespace-nowrap overflow-x-auto ${
                  isDay ? 'text-brand-600' : 'text-brand-400'
                }`}
                dir="ltr"
              >
                {activeCue.formula.expression}
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mt-2 pt-2 border-t border-amber-500/20 text-right">
                {activeCue.formula.variables.map((v, i) => (
                  <div
                    key={i}
                    className={`p-1.5 sm:p-2 rounded-lg text-xs font-semibold ${
                      isDay
                        ? 'bg-white text-slate-800 border border-slate-200 shadow-2xs'
                        : 'bg-slate-950/80 text-slate-200'
                    }`}
                  >
                    <span className="font-mono font-black text-brand-400 inline-block ml-1 text-xs" dir="ltr">
                      {v.symbol}:
                    </span>
                    <span>{v.meaning}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 2. Failure Curves Plotter */}
          {activeCue.curvesGraphic && (
            <div
              className={`p-3 rounded-xl border ${
                isDay ? 'bg-white border-slate-300 shadow-xs text-slate-900' : 'bg-slate-900/80 border-slate-800 text-white'
              }`}
            >
              <div className="text-xs font-bold mb-2 text-right flex items-center justify-between text-slate-300">
                <span className="flex items-center gap-1.5 font-black">
                  <span>📈</span>
                  <span>{activeCue.curvesGraphic.title}</span>
                </span>
                <span className="text-[11px] font-mono opacity-70">المحور الأفقي: الوقت ←</span>
              </div>
              <div className="grid grid-cols-3 gap-2 sm:gap-3">
                {activeCue.curvesGraphic.items.map((item) => {
                  const pathD =
                    item.letter === 'F'
                      ? 'M 10,15 Q 30,50 60,52 L 140,52'
                      : item.letter === 'E'
                      ? 'M 10,35 L 140,35'
                      : 'M 10,20 Q 25,50 50,52 L 100,52 Q 125,50 140,20';
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
                        <span
                          className={`px-1.5 py-0.2 rounded font-black text-white text-[10px] ${
                            item.group === 'random' ? 'bg-rose-600' : 'bg-teal-600'
                          }`}
                        >
                          {item.letter}
                        </span>
                        <span
                          className={`font-mono font-black text-xs ${
                            item.group === 'random' ? 'text-rose-400' : 'text-teal-400'
                          }`}
                        >
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
            <div
              className={`p-3 rounded-xl border ${
                isDay ? 'bg-white border-slate-300 shadow-xs text-slate-900' : 'bg-slate-900/80 border-slate-800 text-white'
              }`}
            >
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
            <div
              className={`p-3 rounded-xl border ${
                isDay ? 'bg-white border-slate-300 shadow-xs text-slate-900' : 'bg-slate-900/80 border-slate-800 text-white'
              }`}
            >
              <div className="text-xs font-bold mb-2 text-right flex items-center gap-1.5 text-slate-300">
                <span>🔄</span>
                <span className="font-black">{activeCue.flowchart.title}</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                {activeCue.flowchart.steps.map((st, i) => (
                  <div
                    key={i}
                    className={`p-2 rounded-xl border text-right text-xs font-bold ${
                      st.outcomeType === 'warning'
                        ? 'bg-amber-950/40 border-amber-800 text-amber-200'
                        : st.outcomeType === 'success'
                        ? 'bg-emerald-950/40 border-emerald-800 text-emerald-200'
                        : 'bg-slate-950 border-slate-800 text-slate-100'
                    }`}
                  >
                    <div className="flex items-center gap-1.5 mb-1">
                      <span
                        className={`flex h-5 w-5 shrink-0 items-center justify-center rounded font-mono text-[10px] font-black text-white ${
                          st.outcomeType === 'warning'
                            ? 'bg-amber-600'
                            : st.outcomeType === 'success'
                            ? 'bg-emerald-600'
                            : 'bg-brand-600'
                        }`}
                      >
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
            <p className={`text-xs sm:text-sm leading-relaxed ${isDay ? 'text-slate-700 font-bold' : 'text-slate-300 font-semibold'}`}>
              {activeCue.detail}
            </p>
          )}
        </div>
      ) : (
        /* Fallback typography when no cues */
        <div className="space-y-3 text-center">
          <div className="inline-flex items-center gap-2 rounded-full px-4 py-1 text-xs font-black bg-brand-500/20 text-brand-300 border border-brand-500/30">
            <span>المحطة {track.stationNumber}:</span>
            <span>{track.stationTitle}</span>
          </div>
          <div className="text-3xl sm:text-5xl font-black text-brand-400">
            الدرس {track.number}
          </div>
          <h1 className="text-xl sm:text-3xl font-black text-white px-2 max-w-2xl mx-auto">
            {track.title}
          </h1>
          <p className="text-sm font-mono text-slate-400" dir="ltr">
            {track.titleEn}
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
  );
}
