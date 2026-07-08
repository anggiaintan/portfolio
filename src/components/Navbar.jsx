import { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import useScrollSpy from '../hooks/useScrollSpy';
import { Container } from '../ui/Primitives';
import { smoothScrollTo } from '../utils/scroll';

const SECTION_IDS = ['home', 'about', 'work', 'experience', 'contact'];

export default function Navbar() {
  const { t, lang, toggleLang } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const isHome = location.pathname === '/';
  const active = useScrollSpy(SECTION_IDS);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const links = [
    { id: 'about', label: t('nav.about') },
    { id: 'work', label: t('nav.work') },
    { id: 'experience', label: t('nav.experience') },
    { id: 'contact', label: t('nav.contact') },
  ];

  function goTo(id) {
    setMenuOpen(false);
    if (isHome) {
      const el = document.getElementById(id);
      if (el) smoothScrollTo(el);
    } else {
      navigate(`/#${id}`);
    }
  }

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'py-3' : 'py-5'
      }`}
    >
      <Container>
        <div
          className={`flex items-center justify-between rounded-full px-4 py-2.5 transition-all duration-300 ${
            scrolled
              ? 'border border-line/80 bg-paper/75 shadow-[0_1px_0_0_rgba(0,0,0,0.03)] backdrop-blur-xl dark:border-void-line/80 dark:bg-void/70'
              : 'border border-transparent bg-transparent'
          }`}
        >
          <Link to="/" onClick={() => setMenuOpen(false)} className="flex items-center gap-2 pl-2">
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-ink font-display text-sm text-paper dark:bg-fog dark:text-void">
              A
            </span>
            <span className="font-display text-[15px] font-medium text-ink dark:text-fog">Anggia</span>
          </Link>

          <nav className="hidden items-center gap-1 md:flex">
            {links.map((link) => (
              <button
                key={link.id}
                onClick={() => goTo(link.id)}
                className="relative rounded-full px-4 py-2 font-mono text-[12px] uppercase tracking-wide text-ink-soft transition-colors hover:text-ink dark:text-fog-soft dark:hover:text-fog"
              >
                {isHome && active === link.id && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-full bg-paper-dim dark:bg-void-raised"
                    transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                  />
                )}
                <span className="relative">{link.label}</span>
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-1.5">
            <button
              onClick={toggleLang}
              aria-label="Toggle language"
              className="hidden items-center gap-1 rounded-full border border-line px-1 py-1 font-mono text-[11px] uppercase text-ink-soft sm:flex dark:border-void-line dark:text-fog-soft"
            >
              <span className={`rounded-full px-2 py-1 transition-colors ${lang === 'id' ? 'bg-ink text-paper dark:bg-fog dark:text-void' : ''}`}>ID</span>
              <span className={`rounded-full px-2 py-1 transition-colors ${lang === 'en' ? 'bg-ink text-paper dark:bg-fog dark:text-void' : ''}`}>EN</span>
            </button>

            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="flex h-9 w-9 items-center justify-center rounded-full text-ink-soft transition-colors hover:bg-paper-dim hover:text-ink dark:text-fog-soft dark:hover:bg-void-raised dark:hover:text-fog"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={theme}
                  initial={{ opacity: 0, rotate: -90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 90 }}
                  transition={{ duration: 0.2 }}
                  className="flex"
                >
                  {theme === 'dark' ? <Sun size={17} /> : <Moon size={17} />}
                </motion.span>
              </AnimatePresence>
            </button>

            <button
              onClick={() => setMenuOpen((v) => !v)}
              aria-label="Toggle menu"
              className="flex h-9 w-9 items-center justify-center rounded-full text-ink-soft md:hidden dark:text-fog-soft"
            >
              {menuOpen ? <X size={19} /> : <Menu size={19} />}
            </button>
          </div>
        </div>
      </Container>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="mt-2 px-6 md:hidden"
          >
            <div className="flex flex-col gap-1 rounded-3xl border border-line bg-paper/95 p-3 backdrop-blur-xl dark:border-void-line dark:bg-void/95">
              {links.map((link) => (
                <button
                  key={link.id}
                  onClick={() => goTo(link.id)}
                  className="rounded-2xl px-4 py-3 text-left font-mono text-xs uppercase tracking-wide text-ink-soft hover:bg-paper-dim hover:text-ink dark:text-fog-soft dark:hover:bg-void-raised dark:hover:text-fog"
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={toggleLang}
                className="mt-1 flex items-center justify-between rounded-2xl px-4 py-3 font-mono text-xs uppercase tracking-wide text-ink-soft dark:text-fog-soft"
              >
                <span>Language</span>
                <span className="text-ink dark:text-fog">{lang === 'id' ? 'Indonesia' : 'English'}</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
