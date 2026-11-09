import { useState, useEffect } from 'react';
import { useLanguage } from '../../lib/useLang';
import { useTheme } from '../../lib/useTheme';
import AudioLauncherModal from './audio/AudioLauncherModal';
import { COURSES, getNavItems } from './header/headerUtils';
import NavLinks from './header/NavLinks';
import HeaderControls from './header/HeaderControls';
import MobileMenu from './header/MobileMenu';

export default function SiteHeader() {
  const [lang, setLang] = useLanguage();
  const [theme, toggleTheme] = useTheme();
  const [open, setOpen] = useState(false);
  const [course, setCourse] = useState<string>('');
  const [audioModalOpen, setAudioModalOpen] = useState(false);

  useEffect(() => {
    const first = window.location.pathname.split('/')[1];
    if (COURSES.some((c) => c.id === first)) setCourse(first);
    else setCourse('');
  }, []);

  const navKeys = getNavItems(course);

  const toggleLanguage = () => {
    setLang(lang === 'ar' ? 'en' : 'ar');
  };

  const handleOpenSearch = () => {
    window.dispatchEvent(new CustomEvent('open-search'));
  };

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur dark:border-slate-700 dark:bg-slate-900/90">
      <div className="mx-auto flex max-w-[1720px] w-full items-center justify-between px-4 sm:px-6 lg:px-8 py-3">
        {/* Platform Brand Logo & Name */}
        <a href="/" className="group flex items-center gap-2.5">
          <img
            src="/favicon.svg"
            alt="GridFix Academy"
            width="34"
            height="34"
            className="transition-transform duration-200 group-hover:scale-105"
          />
          <span className="text-lg font-bold tracking-tight text-ink-900 dark:text-white">
            <span className="text-[#1482db]">GridFix</span> Academy
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <NavLinks navKeys={navKeys} lang={lang} />

        {/* Top Header Action Buttons */}
        <HeaderControls
          lang={lang}
          theme={theme}
          course={course}
          isMenuOpen={open}
          onToggleTheme={toggleTheme}
          onToggleLang={toggleLanguage}
          onToggleMenu={() => setOpen((o) => !o)}
          onOpenAudioModal={() => setAudioModalOpen(true)}
          onOpenSearch={handleOpenSearch}
        />
      </div>

      {/* Mobile Menu Drawer */}
      {open && (
        <MobileMenu
          navKeys={navKeys}
          course={course}
          lang={lang}
          onClose={() => setOpen(false)}
          onOpenAudioModal={() => setAudioModalOpen(true)}
          onOpenSearch={handleOpenSearch}
        />
      )}

      {/* Drive & Learn Modal */}
      <AudioLauncherModal
        isOpen={audioModalOpen}
        onClose={() => setAudioModalOpen(false)}
        initialCourseId={course || 'cmrp'}
        lang={lang}
      />
    </header>
  );
}
