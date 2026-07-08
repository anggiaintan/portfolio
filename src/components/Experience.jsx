import { Briefcase, GraduationCap, Download, BadgeCheck, ExternalLink } from 'lucide-react';
import Reveal from '../ui/Reveal';
import { Container, SectionHeading, Button } from '../ui/Primitives';
import { useLanguage } from '../context/LanguageContext';

function Timeline({ icon: Icon, title, items }) {
  return (
    <div>
      <div className="flex items-center gap-2.5">
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-paper-dim text-ink-soft dark:bg-void-raised dark:text-fog-soft">
          <Icon size={15} />
        </span>
        <h3 className="font-display text-lg text-ink dark:text-fog">{title}</h3>
      </div>
      <ol className="relative mt-6 space-y-8 border-l border-line pl-6 dark:border-void-line">
        {items.map((item, i) => (
          <li key={i} className="relative">
            <span className="absolute -left-[27px] top-1 h-2.5 w-2.5 rounded-full border-2 border-paper bg-accent dark:border-void" />
            <p className="font-mono text-[11px] uppercase tracking-wide text-accent">{item.period}</p>
            <h4 className="mt-1.5 font-display text-base text-ink dark:text-fog">{item.role || item.degree}</h4>
            <p className="text-sm text-ink-soft dark:text-fog-soft">{item.org}</p>
            {item.text && (
              <p className="mt-2 text-sm leading-relaxed text-ink-soft dark:text-fog-soft">{item.text}</p>
            )}
          </li>
        ))}
      </ol>
    </div>
  );
}

export default function Experience() {
  const { t } = useLanguage();
  const certifications = t('experience.certifications');

  return (
    <section id="experience" className="scroll-mt-24 border-t border-line py-24 dark:border-void-line md:py-32">
      <Container>
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading eyebrow={t('experience.eyebrow')} title={t('experience.title')} />
        </div>

        <div className="mt-16 grid grid-cols-1 gap-14 md:grid-cols-2 md:gap-16">
          <Reveal direction="left">
            <Timeline icon={Briefcase} title={t('experience.workHistory')} items={t('experience.items')} />
          </Reveal>

          <div className="space-y-14">
            <Reveal direction="right">
              <Timeline icon={GraduationCap} title={t('experience.education')} items={t('experience.educationItems')} />
            </Reveal>

            <Reveal direction="right" delay={0.1}>
              <div>
                <h4 className="font-mono text-xs uppercase tracking-wide text-ink-faint dark:text-fog-soft">
                  {t('experience.certificationsTitle')}
                </h4>
                <div className="mt-4 space-y-3">
                  {certifications.map((cert) => (
                    <a
                      key={cert.name}
                      href={cert.file}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-start gap-3 rounded-2xl border border-line p-4 transition-colors hover:border-accent dark:border-void-line"
                    >
                      <BadgeCheck size={17} className="mt-0.5 flex-none text-accent" />
                      <div className="flex-1">
                        <p className="text-sm text-ink dark:text-fog">{cert.name}</p>
                        <p className="mt-0.5 text-xs text-ink-faint dark:text-fog-soft">{cert.issuer}</p>
                      </div>
                      <ExternalLink size={14} className="mt-0.5 flex-none text-ink-faint transition-colors group-hover:text-accent" />
                    </a>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
