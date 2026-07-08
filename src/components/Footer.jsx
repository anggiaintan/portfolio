import { ArrowUp } from 'lucide-react';
import { Container } from '../ui/Primitives';
import { useLanguage } from '../context/LanguageContext';
import { smoothScrollToTop } from '../utils/scroll';

export default function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line py-10 dark:border-void-line">
      <Container>
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          <p className="text-xs text-ink-faint dark:text-fog-soft">
            © {year} Anggia Intan Widyaningrum. {t('footer.rights')}
          </p>
          <button
            onClick={smoothScrollToTop}
            className="flex items-center gap-2 font-mono text-xs uppercase tracking-wide text-ink-soft transition-colors hover:text-accent dark:text-fog-soft"
          >
            {t('footer.backToTop')}
            <ArrowUp size={14} />
          </button>
        </div>
      </Container>
    </footer>
  );
}
