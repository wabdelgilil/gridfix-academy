interface LauncherHeaderProps {
  isDay: boolean;
  lang: 'ar' | 'en';
  toggleDriveTheme: () => void;
  onClose: () => void;
}

export default function LauncherHeader({
  isDay,
  lang,
  toggleDriveTheme,
  onClose,
}: LauncherHeaderProps) {
  return (
    <div
      className={`flex items-center justify-between border-b px-4 py-3 sm:px-6 sm:py-3.5 shrink-0 ${
        isDay ? 'bg-white border-slate-200' : 'bg-slate-900 border-slate-800'
      }`}
    >
      <div className="flex items-center gap-3">
        <span
          className={`flex h-11 w-11 items-center justify-center rounded-2xl text-2xl shadow-xs border ${
            isDay
              ? 'bg-amber-100 border-amber-300 text-amber-800'
              : 'bg-slate-800 border-amber-500/40 text-white'
          }`}
        >
          🚗
        </span>
        <div>
          <div className="flex items-center gap-2">
            <h2 id="audio-modal-title" className="text-base sm:text-lg font-black tracking-tight">
              {lang === 'ar' ? 'ادرس أثناء القيادة' : 'Drive & Learn'}
            </h2>
            <span
              className={`text-xs px-2.5 py-0.5 rounded-full font-bold border ${
                isDay
                  ? 'bg-emerald-100 text-emerald-800 border-emerald-300'
                  : 'bg-emerald-950/80 text-emerald-300 border-emerald-700/60'
              }`}
            >
              {lang === 'ar' ? 'مشغل السيارة' : 'Car Mode'}
            </span>
          </div>
          <p
            className={`text-xs hidden sm:block mt-0.5 font-medium ${
              isDay ? 'text-slate-600' : 'text-slate-400'
            }`}
          >
            {lang === 'ar'
              ? 'واجهة تفاعلية مصممة خصيصاً لشاشات السيارات والتابلت'
              : 'Interface optimized for car dashboards and tablet mounts'}
          </p>
        </div>
      </div>

      {/* Quick Actions: Day/Night Mode Switch & Close */}
      <div className="flex items-center gap-2 sm:gap-3">
        <button
          type="button"
          onClick={toggleDriveTheme}
          className={`flex h-12 items-center gap-2 px-3.5 sm:px-5 rounded-2xl font-black text-xs sm:text-sm border-2 transition-all shadow-md active:scale-95 cursor-pointer ${
            isDay
              ? 'bg-amber-300 hover:bg-amber-400 text-amber-950 border-amber-400 ring-2 ring-amber-300/40'
              : 'bg-slate-800 hover:bg-slate-700 text-amber-300 border-slate-700'
          }`}
          title={
            lang === 'ar'
              ? 'التبديل بين وضع النهار عالي التباين ووضع الليل للقيادة'
              : 'Toggle Day High-Contrast and Night Mode'
          }
        >
          <span className="text-xl sm:text-2xl">{isDay ? '☀️' : '🌙'}</span>
          <span>
            {isDay
              ? lang === 'ar'
                ? 'وضع النهار'
                : 'Day Mode'
              : lang === 'ar'
              ? 'وضع الليل'
              : 'Night Mode'}
          </span>
        </button>

        <button
          type="button"
          onClick={onClose}
          className={`flex h-12 w-12 items-center justify-center rounded-2xl border-2 text-lg font-black transition-all shadow-md active:scale-95 cursor-pointer ${
            isDay
              ? 'bg-slate-200 hover:bg-slate-300 text-slate-900 border-slate-300'
              : 'bg-slate-800 hover:bg-slate-700 text-slate-300 border-slate-700'
          }`}
          aria-label={lang === 'ar' ? 'إغلاق' : 'Close'}
        >
          ✕
        </button>
      </div>
    </div>
  );
}
