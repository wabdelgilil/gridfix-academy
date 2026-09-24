import { useEffect, useState } from 'react';

export default function ReadingProgress() {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function onScroll() {
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight > 0) {
        const pct = Math.min(100, Math.round((window.scrollY / docHeight) * 100));
        setProgress(pct);
        setVisible(window.scrollY > 100);
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 top-0 z-[60] h-1 bg-transparent" dir="ltr">
      <div
        className="h-full rounded-s-full bg-gradient-to-l from-emerald-400 via-brand-500 to-brand-600 transition-[width] duration-200 ease-out"
        style={{ width: `${progress}%` }}
      />
      <div
        className="absolute top-0 h-full w-8 rounded-full bg-white/30 blur-sm transition-[left] duration-200 ease-out"
        style={{ left: `calc(${progress}% - 1rem)` }}
      />
    </div>
  );
}