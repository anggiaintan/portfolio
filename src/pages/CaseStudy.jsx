import { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Clock, Users, Wrench, Briefcase } from 'lucide-react';
import Reveal from '../ui/Reveal';
import { StaggerGroup, StaggerItem } from '../ui/Stagger';
import { Container } from '../ui/Primitives';
import ProjectGallery from '../ui/ProjectGallery';
import { useLanguage } from '../context/LanguageContext';
import projects from '../data/projects';

export default function CaseStudy() {
  const { slug } = useParams();
  const { lang, t } = useLanguage();
  const index = projects.findIndex((p) => p.slug === slug);
  const project = projects[index];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!project) return <Navigate to="/" replace />;

  const copy = project[lang];
  const next = projects[(index + 1) % projects.length];
  const nextCopy = next[lang];

  const metaRows = [
    { icon: Briefcase, label: t('caseStudy.role'), value: copy.role },
    { icon: Clock, label: t('caseStudy.timeline'), value: project.timeline[lang] },
    { icon: Users, label: t('caseStudy.team'), value: project.team[lang] },
    { icon: Wrench, label: t('caseStudy.tools'), value: project.tools.join(', ') },
  ];

  return (
    <article className="pb-24">
      <section className="relative overflow-hidden pt-32 pb-16 md:pt-40 md:pb-20">
        <div
          className="absolute inset-0 opacity-100 dark:opacity-[0.14]"
          style={{ background: `linear-gradient(180deg, ${project.accentSoft}, transparent)` }}
          aria-hidden
        />
        <div className="canvas-grid pointer-events-none absolute inset-0 opacity-40 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,black,transparent)]" />
        <Container className="relative">
          <Reveal>
            <Link
              to="/#work"
              className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wide text-ink-soft transition-colors hover:text-ink dark:text-fog-soft dark:hover:text-fog"
            >
              <ArrowLeft size={14} />
              {t('caseStudy.back')}
            </Link>
          </Reveal>

          <Reveal delay={0.08}>
            <p className="mt-8 font-mono text-[11px] uppercase tracking-[0.18em]" style={{ color: project.accent }}>
              {copy.category} · {project.year}
            </p>
            <h1 className="mt-3 max-w-3xl font-display text-4xl font-medium leading-[1.1] text-balance text-ink md:text-6xl dark:text-fog">
              {copy.tagline}
            </h1>
            <p className="mt-6 max-w-2xl text-[16px] leading-relaxed text-ink-soft dark:text-fog-soft">{copy.summary}</p>
          </Reveal>

          <Reveal delay={0.16}>
            <div className="mt-10 grid grid-cols-2 gap-6 border-t border-line pt-6 dark:border-void-line md:grid-cols-4">
              {metaRows.map((row) => (
                <div key={row.label}>
                  <div className="flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-wide text-ink-faint dark:text-fog-soft">
                    <row.icon size={12} />
                    {row.label}
                  </div>
                  <p className="mt-1.5 text-sm text-ink dark:text-fog">{row.value}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </Container>
      </section>

      <Container>
        <Reveal direction="scale">
          <div className="relative overflow-hidden rounded-[2rem] border border-line dark:border-void-line">
            <div
              className="absolute inset-0 opacity-100 dark:opacity-[0.14]"
              style={{ background: `linear-gradient(180deg, ${project.accentSoft}, transparent)` }}
              aria-hidden
            />
            <div className="relative px-4 md:px-10">
              <ProjectGallery
                images={project.gallery}
                title={copy.title}
                frameType={project.frameType || 'desktop'}
                mockupVariant={project.mockup}
                accent={project.accent}
              />
            </div>
          </div>
        </Reveal>

        <div className="mx-auto mt-20 max-w-2xl">
          <Reveal>
            <h2 className="font-mono text-xs uppercase tracking-wide text-accent">01 · {t('caseStudy.problem')}</h2>
            <p className="mt-4 text-[17px] leading-relaxed text-ink dark:text-fog">{copy.problem}</p>
          </Reveal>

          <Reveal delay={0.05} className="mt-14">
            <h2 className="font-mono text-xs uppercase tracking-wide text-accent">02 · {t('caseStudy.process')}</h2>
            <p className="mt-4 text-[17px] leading-relaxed text-ink dark:text-fog">{copy.processText}</p>
          </Reveal>

          <Reveal delay={0.05} className="mt-14">
            <h2 className="font-mono text-xs uppercase tracking-wide text-accent">03 · {t('caseStudy.solution')}</h2>
            <ul className="mt-5 space-y-4">
              {copy.solutionPoints.map((point, i) => (
                <li key={i} className="flex items-start gap-4 rounded-2xl border border-line bg-surface p-4 dark:border-void-line dark:bg-void-surface">
                  <span className="flex h-6 w-6 flex-none items-center justify-center rounded-full font-mono text-[11px]" style={{ backgroundColor: project.accentSoft, color: project.accent }}>
                    {i + 1}
                  </span>
                  <p className="text-sm leading-relaxed text-ink dark:text-fog">{point}</p>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.05} className="mt-14">
            <h2 className="font-mono text-xs uppercase tracking-wide text-accent">04 · {t('caseStudy.outcome')}</h2>
            {copy.outcomeStats && copy.outcomeStats.length > 0 ? (
              <StaggerGroup className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-3 sm:items-stretch" stagger={0.09}>
                {copy.outcomeStats.map((stat) => (
                  <StaggerItem
                    key={stat.l}
                    className="flex flex-col items-center justify-center gap-1.5 rounded-2xl border border-line p-5 text-center dark:border-void-line"
                  >
                    <div className="font-display text-2xl md:text-3xl" style={{ color: project.accent }}>{stat.n}</div>
                    <div className="text-xs leading-snug text-ink-faint dark:text-fog-soft">{stat.l}</div>
                  </StaggerItem>
                ))}
              </StaggerGroup>
            ) : (
              <p className="mt-4 text-[15px] leading-relaxed text-ink-soft dark:text-fog-soft">
                {copy.outcomeNote}
              </p>
            )}
          </Reveal>

          <Reveal delay={0.05} className="mt-14">
            <h2 className="font-mono text-xs uppercase tracking-wide text-accent">05 · {t('caseStudy.reflection')}</h2>
            <p className="mt-4 border-l-2 pl-5 text-[17px] italic leading-relaxed text-ink-soft dark:text-fog-soft" style={{ borderColor: project.accent }}>
              {copy.reflection}
            </p>
          </Reveal>
        </div>

        <Reveal className="mt-24">
          <Link
            to={`/work/${next.slug}`}
            className="group flex items-center justify-between gap-6 rounded-3xl border border-line p-7 transition-colors hover:border-accent dark:border-void-line md:p-10"
          >
            <div>
              <p className="font-mono text-[11px] uppercase tracking-wide text-ink-faint dark:text-fog-soft">{t('caseStudy.nextProject')}</p>
              <h3 className="mt-2 font-display text-2xl text-ink dark:text-fog md:text-3xl">{nextCopy.title}</h3>
              <p className="mt-1 text-sm text-ink-soft dark:text-fog-soft">{nextCopy.tagline}</p>
            </div>
            <span className="flex h-12 w-12 flex-none items-center justify-center rounded-full border border-line text-ink-soft transition-all duration-300 group-hover:translate-x-1 group-hover:border-accent group-hover:text-accent dark:border-void-line dark:text-fog-soft">
              <ArrowRight size={18} />
            </span>
          </Link>
        </Reveal>
      </Container>
    </article>
  );
}
