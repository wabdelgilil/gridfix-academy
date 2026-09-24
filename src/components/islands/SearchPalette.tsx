import { useState, useEffect, useRef, useCallback } from 'react';
import { courses } from '../../data/courses';
import { curriculum } from '../../data/curriculum';

interface SearchItem {
  kind: 'course' | 'station' | 'lesson';
  title: string;
  subtitle?: string;
  href: string;
  category: string;
}

function buildIndex(): SearchItem[] {
  const items: SearchItem[] = [];

  for (const c of courses) {
    items.push({
      kind: 'course',
      title: c.title,
      subtitle: c.code,
      href: `/${c.id}`,
      category: c.code,
    });
  }

  for (const s of curriculum) {
    const courseId = s.courseId ?? 'cfm';
    if (s.status !== 'live') continue;
    items.push({
      kind: 'station',
      title: s.title,
      subtitle: s.titleEn,
      href: `/${courseId}/stations/${s.id}`,
      category: 'المحطات',
    });
    for (const l of s.lessons) {
      if (l.status !== 'live') continue;
      items.push({
        kind: 'lesson',
        title: l.title,
        subtitle: `${s.title} • ${l.number} • ${l.minutes} دقيقة`,
        href: `/${courseId}/lessons/${l.id}`,
        category: s.title,
      });
    }
  }

  return items;
}

const KINDS = {
  course: { icon: '🎓', label: 'كورس' },
  station: { icon: '🗺', label: 'محطة' },
  lesson: { icon: '📖', label: 'درس' },
} as const;

export default function SearchPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [active, setActive] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  const items = useRef(buildIndex());

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setOpen((o) => !o);
      }
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  useEffect(() => {
    if (open) {
      setQuery('');
      setActive(0);
      setTimeout(() => inputRef.current?.focus(), 50);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const filtered = items.current
    .filter((item) => {
      const q = query.trim().toLowerCase();
      if (!q) return true;
      return (item.title + ' ' + item.subtitle + ' ' + item.href).toLowerCase().includes(q);
    })
    .slice(0, 12);

  useEffect(() => {
    setActive(0);
  }, [query, open]);

  const scrollActiveIntoView = useCallback((idx: number) => {
    listRef.current?.querySelector(`[data-idx="${idx}"]`)?.scrollIntoView?.({ block: 'nearest' });
  }, []);

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setActive((a) => {
        const next = (a + 1) % Math.max(filtered.length, 1);
        scrollActiveIntoView(next);
        return next;
      });
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActive((a) => {
        const next = (a - 1 + Math.max(filtered.length, 1)) % Math.max(filtered.length, 1);
        scrollActiveIntoView(next);
        return next;
      });
    } else if (e.key === 'Enter') {
      const item = filtered[active];
      if (item) window.location.href = item.href;
    }
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[80] flex items-start justify-center bg-ink-900/50 p-4 pt-[12vh] backdrop-blur-sm">
      <div
        className="w-full max-w-xl overflow-hidden rounded-2xl bg-white shadow-2xl ring-1 ring-slate-200"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-3 border-b border-slate-200 px-5 py-3">
          <span className="text-ink-400">🔍</span>
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={onKeyDown}
            placeholder="ابحث عن درس، محطة، أو كورس... (Ctrl+K)"
            className="w-full bg-transparent text-base text-ink-900 outline-none placeholder:text-ink-400"
            aria-label="بحث سريع"
          />
          <kbd className="chip bg-slate-100 text-xs text-ink-400" dir="ltr">esc</kbd>
        </div>

        <div ref={listRef} className="max-h-[55vh] overflow-y-auto p-2">
          {filtered.length === 0 && (
            <p className="px-4 py-8 text-center text-sm text-ink-400">لا توجد نتائج مطابقة لبحثك.</p>
          )}
          {filtered.map((item, idx) => (
            <a
              key={item.href}
              data-idx={idx}
              href={item.href}
              onClick={() => setOpen(false)}
              onMouseEnter={() => setActive(idx)}
              className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-start transition-colors ${active === idx ? 'bg-brand-50' : 'hover:bg-slate-50'}`}
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white text-lg shadow-sm ring-1 ring-slate-200">
                {KINDS[item.kind].icon}
              </span>
              <span className="min-w-0 flex-1">
                <span className="block truncate text-sm font-semibold text-ink-900">{item.title}</span>
                <span className="mt-0.5 block truncate text-xs text-ink-400">{item.subtitle}</span>
              </span>
              <span className="chip hidden bg-slate-100 text-[10px] text-ink-400 sm:inline-flex">{KINDS[item.kind].label}</span>
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3 border-t border-slate-200 bg-slate-50 px-5 py-2 text-[10px] text-ink-400">
          <span className="flex items-center gap-1"><kbd className="rounded bg-white px-1.5 py-0.5 ring-1 ring-slate-200" dir="ltr">↑↓</kbd> تنقل</span>
          <span className="flex items-center gap-1"><kbd className="rounded bg-white px-1.5 py-0.5 ring-1 ring-slate-200" dir="ltr">↵</kbd> فتح</span>
          <span className="ms-auto">بحث سريع في كل المنصة</span>
        </div>
      </div>
    </div>
  );
}