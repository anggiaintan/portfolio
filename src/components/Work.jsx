import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { Container, SectionHeading } from '../ui/Primitives';
import Reveal from '../ui/Reveal';
import DeviceMockup from '../ui/DeviceMockup';
import { DEVICE_FRAMES, BrowserFrame } from '../ui/DeviceFrame';
import projects from '../data/projects';

function ProjectCard({ project, index }) {
  const { lang, t } = useLanguage();
  const copy = project[lang];

  return (
    <Reveal delay={index * 0.08} className="group">
      <Link to={`/work/${project.slug}`} className="block">
        <div className="relative">
          {/* stacked "layers" behind the card — the signature motif */}
          <div
            className="absolute inset-0 translate-x-2 translate-y-2 rounded-3xl border border-line opacity-0 transition-all duration-300 ease-out group-hover:translate-x-3 group-hover:translate-y-3 group-hover:opacity-100 dark:border-void-line"
            aria-hidden
          />
          <div
            className="absolute inset-0 translate-x-1 translate-y-1 rounded-3xl border border-line opacity-0 transition-all duration-300 ease-out group-hover:translate-x-1.5 group-hover:translate-y-1.5 group-hover:opacity-100 dark:border-void-line"
            aria-hidden
          />

          <div className="relative overflow-hidden rounded-3xl border border-line bg-surface transition-all duration-300 ease-out group-hover:-translate-y-1 group-hover:shadow-[0_20px_48px_-16px_rgba(20,21,26,0.16)] dark:border-void-line dark:bg-void-surface dark:group-hover:shadow-[0_20px_48px_-16px_rgba(0,0,0,0.5)]">
            <div
              className="flex items-center justify-center overflow-hidden p-6 pb-0"
              style={{ background: `linear-gradient(180deg, ${project.accentSoft}, transparent)` }}
            >
              {project.gallery?.[0] ? (
                (() => {
                  const Frame = DEVICE_FRAMES[project.frameType] || BrowserFrame;
                  const isMobile = project.frameType === 'mobile';
                  return (
                    <div className={`w-full transition-transform duration-500 ease-out group-hover:-translate-y-1.5 ${isMobile ? 'max-w-[150px]' : 'max-w-sm'}`}>
                      <Frame className="shadow-[0_18px_30px_-10px_rgba(20,21,26,0.18)]">
                        <img
                          src={project.gallery[0]}
                          alt={`${copy.title} preview`}
                          className={isMobile ? 'h-56 w-full object-cover object-top' : 'h-auto w-full'}
                          loading="lazy"
                        />
                      </Frame>
                    </div>
                  );
                })()
              ) : (
                <DeviceMockup
                  variant={project.mockup}
                  accent={project.accent}
                  className="h-56 w-auto max-w-full drop-shadow-[0_18px_30px_rgba(20,21,26,0.10)] transition-transform duration-500 ease-out group-hover:-translate-y-1.5"
                />
              )}
            </div>

            <div className="p-6 md:p-7">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-wide" style={{ color: project.accent }}>
                    {copy.category}
                  </p>
                  <h3 className="mt-2 font-display text-xl text-ink dark:text-fog">{copy.title}</h3>
                </div>
                <span className="mt-1 flex h-9 w-9 flex-none items-center justify-center rounded-full border border-line text-ink-soft transition-all duration-300 group-hover:rotate-45 group-hover:border-accent group-hover:text-accent dark:border-void-line dark:text-fog-soft">
                  <ArrowRight size={15} />
                </span>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft dark:text-fog-soft">{copy.tagline}</p>
              <div className="mt-5 flex items-center gap-4 border-t border-line pt-4 text-xs text-ink-faint dark:border-void-line dark:text-fog-soft">
                <span>{t('work.role')}: {copy.role}</span>
                <span className="h-1 w-1 rounded-full bg-ink-faint/50" />
                <span>{t('work.year')}: {project.year}</span>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </Reveal>
  );
}

export default function Work() {
  const { t } = useLanguage();
  return (
    <section id="work" className="scroll-mt-24 py-24 md:py-32">
      <Container>
        <SectionHeading eyebrow={t('work.eyebrow')} title={t('work.title')} sub={t('work.sub')} />
        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
          {projects.map((p, i) => (
            <ProjectCard key={p.slug} project={p} index={i} />
          ))}
        </div>
      </Container>
    </section>
  );
}
