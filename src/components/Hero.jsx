import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { Container, Button } from '../ui/Primitives';
import { smoothScrollTo } from '../utils/scroll';
import Magnetic from '../ui/Magnetic';
import CountUp from '../ui/CountUp';
import FigmaFrame from '../ui/FigmaFrame';

export default function Hero() {
  const { t } = useLanguage();
  const stats = [
    [t('hero.stat1n'), t('hero.stat1l')],
    [t('hero.stat2n'), t('hero.stat2l')],
    [t('hero.stat3n'), t('hero.stat3l')],
  ];

  return (
    <section id="home" className="relative overflow-hidden pt-36 pb-20 md:pt-44 md:pb-28">
      <div className="canvas-grid pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_20%,black,transparent)]" />

      <div className="reg-mark left-6 top-24 hidden text-ink-faint md:block dark:text-fog-soft" />
      <div className="reg-mark right-6 top-24 hidden text-ink-faint md:block dark:text-fog-soft" />

      <Container className="relative grid grid-cols-1 items-center gap-14 md:grid-cols-[1.2fr_0.8fr] md:gap-8">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-start"
          >
            <div className="mb-7 flex items-center gap-2 rounded-full border border-line bg-surface/60 px-3.5 py-1.5 font-mono text-[11px] uppercase tracking-wide text-ink-soft backdrop-blur-sm dark:border-void-line dark:bg-void-surface/60 dark:text-fog-soft">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
              </span>
              {t('hero.available')}
            </div>

            <h1 className="mt-5 max-w-3xl font-display text-[2.6rem] font-medium leading-[1.06] tracking-tight text-balance text-ink sm:text-6xl md:text-7xl dark:text-fog">
              {t('hero.headline1')}
              <br />
              <span className="italic text-accent">{t('hero.headline2')}</span>
            </h1>

            <p className="mt-7 max-w-lg text-[16px] leading-relaxed text-ink-soft md:text-[17px] dark:text-fog-soft">
              {t('hero.sub')}
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Magnetic strength={0.4}>
                <Button href="#work" onClick={(e) => { e.preventDefault(); smoothScrollTo('#work'); }}>
                  {t('hero.ctaPrimary')}
                </Button>
              </Magnetic>
              <Magnetic strength={0.3}>
                <Button variant="secondary" href="/cv-anggia.pdf" icon={false} download>
                  {t('hero.ctaSecondary')}
                </Button>
              </Magnetic>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="mt-20 grid grid-cols-3 gap-6 border-t border-line pt-8 dark:border-void-line md:max-w-xl"
          >
            {stats.map(([n, l]) => (
              <div key={l}>
                <div className="font-display text-2xl text-ink md:text-3xl dark:text-fog">
                  <CountUp value={n} />
                </div>
                <div className="mt-1 text-xs leading-snug text-ink-faint dark:text-fog-soft">{l}</div>
              </div>
            ))}
          </motion.div>
        </div>

        <div className="flex justify-center md:justify-end">
          <FigmaFrame initials="A" name="anggia.png" dimensions="480 × 600" photoSrc="/anggia.png" />
        </div>
      </Container>
    </section>
  );
}
