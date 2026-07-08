import { Code2, Palette } from 'lucide-react';
import Reveal from '../ui/Reveal';
import { StaggerGroup, StaggerItem } from '../ui/Stagger';
import { Container, Eyebrow, Chip } from '../ui/Primitives';
import { useLanguage } from '../context/LanguageContext';
import BrandIcon from '../ui/BrandIcon';

// Real brand marks where available; generic icons for tools without a
// redistributable brand mark (VS Code, Canva) to avoid approximating a
// trademarked logo by hand.
const TOOLS = [
  { name: 'Figma', kind: 'brand', id: 'figma' },
  { name: 'Canva', kind: 'lucide', Icon: Palette, color: '#00C4CC' },
  { name: 'WordPress', kind: 'brand', id: 'wordpress' },
  { name: 'VS Code', kind: 'lucide', Icon: Code2, color: '#007ACC' },
  { name: 'Laravel', kind: 'brand', id: 'laravel' },
  { name: 'HTML5', kind: 'brand', id: 'html5' },
  { name: 'CSS', kind: 'brand', id: 'css' },
  { name: 'JavaScript', kind: 'brand', id: 'javascript' },
];

export default function ToolsSection() {
  const { t } = useLanguage();
  const skills = t('experience.skills');

  return (
    <section className="border-t border-line py-24 dark:border-void-line md:py-32">
      <Container>
        <Reveal>
          <Eyebrow>{t('about.eyebrow')}</Eyebrow>
          <h2 className="mt-4 font-display text-4xl font-medium leading-[1.1] text-ink md:text-5xl dark:text-fog">
            {t('about.toolsTitle')}
          </h2>
          <p className="mt-4 max-w-md text-[15px] leading-relaxed text-ink-soft dark:text-fog-soft">
            {t('about.toolsSub')}
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <h3 className="mt-14 font-mono text-xs uppercase tracking-wide text-ink-faint dark:text-fog-soft">
            Tools
          </h3>
          <StaggerGroup className="mt-6 grid grid-cols-3 gap-x-8 gap-y-12 sm:grid-cols-4 md:grid-cols-8" stagger={0.05}>
            {TOOLS.map((tool) => (
              <StaggerItem
                key={tool.name}
                className="group flex flex-col items-center gap-3 text-center"
              >
                <div className="flex h-14 w-14 items-center justify-center transition-transform duration-300 ease-out group-hover:scale-110 md:h-16 md:w-16">
                  {tool.kind === 'brand' ? (
                    <BrandIcon name={tool.id} size={44} />
                  ) : (
                    <tool.Icon size={40} color={tool.color} />
                  )}
                </div>
                <span className="font-mono text-[11px] uppercase tracking-wide text-ink-faint dark:text-fog-soft">
                  {tool.name}
                </span>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </Reveal>

        <Reveal delay={0.16}>
          <h3 className="mt-16 font-mono text-xs uppercase tracking-wide text-ink-faint dark:text-fog-soft">
            Skills
          </h3>
          <StaggerGroup className="mt-6 flex flex-wrap gap-2.5" stagger={0.04} as="div">
            {skills.map((skill) => (
              <StaggerItem key={skill} as="span" y={12}>
                <Chip className="normal-case">{skill}</Chip>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </Reveal>
      </Container>
    </section>
  );
}
