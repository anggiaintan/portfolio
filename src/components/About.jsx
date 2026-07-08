import { MapPin, GraduationCap, Target, Sparkles } from 'lucide-react';
import Reveal from '../ui/Reveal';
import { StaggerGroup, StaggerItem } from '../ui/Stagger';
import { Container, Eyebrow } from '../ui/Primitives';
import { useLanguage } from '../context/LanguageContext';

const FACT_ICONS = [MapPin, GraduationCap, Target, Sparkles];

export default function About() {
  const { t } = useLanguage();
  const facts = t('about.facts');

  return (
    <section id="about" className="scroll-mt-24 py-24 md:py-32">
      <Container>
        <Reveal direction="scale">
          <div className="canvas-grid relative overflow-hidden rounded-[2rem] border border-line p-8 dark:border-void-line md:p-12">
            <div className="reg-mark -left-1 -top-1 hidden text-ink-faint dark:text-fog-soft md:block" />
            <div className="reg-mark -bottom-1 -right-1 hidden text-ink-faint dark:text-fog-soft md:block" />

            <div className="relative grid grid-cols-1 gap-10 md:grid-cols-[1.3fr_0.7fr] md:gap-14">
              <div>
                <Eyebrow>{t('about.eyebrow')}</Eyebrow>
                <h2 className="mt-4 font-display text-3xl font-medium leading-[1.15] text-ink md:text-4xl dark:text-fog">
                  {t('about.title')}
                </h2>
                <p className="mt-6 text-[15px] leading-relaxed text-ink-soft dark:text-fog-soft">{t('about.p1')}</p>
                <p className="mt-4 text-[15px] leading-relaxed text-ink-soft dark:text-fog-soft">{t('about.p2')}</p>
              </div>

              <StaggerGroup
                className="flex flex-col justify-center gap-5 border-t border-line pt-8 md:border-l md:border-t-0 md:pl-10 md:pt-0 dark:border-void-line"
                stagger={0.08}
              >
                {facts.map((fact, i) => {
                  const Icon = FACT_ICONS[i];
                  return (
                    <StaggerItem key={fact.label} className="flex items-start gap-3" y={14}>
                      <span className="mt-0.5 flex h-9 w-9 flex-none items-center justify-center rounded-full bg-surface text-accent dark:bg-void-surface">
                        <Icon size={15} />
                      </span>
                      <div>
                        <p className="font-mono text-[10px] uppercase tracking-wide text-ink-faint dark:text-fog-soft">
                          {fact.label}
                        </p>
                        <p className="mt-0.5 text-sm text-ink dark:text-fog">{fact.value}</p>
                      </div>
                    </StaggerItem>
                  );
                })}
              </StaggerGroup>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
