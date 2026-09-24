import { useState, useEffect } from 'react';

interface TocItem {
  id: string;
  text: string;
  level: number;
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\u0600-\u06FF]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

function getActiveLang(): string {
  return document.documentElement.lang === 'en' ? 'en' : 'ar';
}

function collectToc(): TocItem[] {
  const activeLang = getActiveLang();
  const headings = document.querySelectorAll<HTMLElement>('.prose-lesson h2, .prose-lesson h3');
  const tocItems: TocItem[] = [];

  headings.forEach((el) => {
    const text = el.textContent?.trim() ?? '';
    if (!text) return;
    const owner = el.closest<HTMLElement>('[data-lang]');
    if (owner && (owner.dataset.lang ?? '') !== activeLang) return;

    let id = el.id;
    if (!id) {
      id = slugify(text);
      el.id = id;
    }
    if (tocItems.some((t) => t.id === id)) return;

    tocItems.push({
      id,
      text,
      level: el.tagName === 'H2' ? 2 : 3,
    });
  });

  return tocItems;
}

export default function LessonTOC() {
  const [items, setItems] = useState<TocItem[]>([]);
  const [activeId, setActiveId] = useState('');

  const rebuild = () => setItems(collectToc());

  useEffect(() => {
    rebuild();
    window.addEventListener('cfm-lang-changed', rebuild);
    return () => window.removeEventListener('cfm-lang-changed', rebuild);
  }, []);

  useEffect(() => {
    if (items.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        }
      },
      { rootMargin: '-80px 0px -60% 0px', threshold: 0 }
    );

    items.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [items]);

  if (items.length === 0) return null;

  function scrollTo(id: string) {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  const activeLang = getActiveLang();

  return (
    <nav className="sticky top-24 h-fit max-h-[calc(100vh-8rem)] overflow-y-auto rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
      <p className="mb-3 text-xs font-semibold text-ink-900">{activeLang === 'en' ? 'Lesson index' : 'فهرس الدرس'}</p>
      <ul className="space-y-1">
        {items.map((item) => (
          <li key={item.id}>
            <button
              type="button"
              onClick={() => scrollTo(item.id)}
              className={`w-full text-start rounded-lg px-3 py-1.5 text-xs leading-relaxed transition ${
                item.level === 3 ? 'pe-6' : ''
              } ${
                activeId === item.id
                  ? 'bg-brand-50 font-semibold text-brand-700'
                  : 'text-ink-600 hover:bg-slate-50 hover:text-ink-900'
              }`}
            >
              {item.text}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}