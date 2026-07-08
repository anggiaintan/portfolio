import { Mail } from 'lucide-react';
import Reveal from '../ui/Reveal';
import { Container, SectionHeading } from '../ui/Primitives';
import { useLanguage } from '../context/LanguageContext';
import BrandIcon from '../ui/BrandIcon';
import Magnetic from '../ui/Magnetic';

const CHANNELS = [
  { id: 'email', label: 'Email', kind: 'lucide', Icon: Mail, color: '#EA4335', href: 'mailto:anggiaintanw@gmail.com' },
  { id: 'whatsapp', label: 'WhatsApp', kind: 'brand', brandId: 'whatsapp', href: 'https://wa.me/6281274584434' },
  { id: 'instagram', label: 'Instagram', kind: 'brand', brandId: 'instagram', href: 'https://instagram.com/anggia.intan' },
  { id: 'linkedin', label: 'LinkedIn', kind: 'mono', href: 'https://www.linkedin.com/in/anggia-intan-widyaningrum-95269b2b1/' },
];

function ChannelIcon({ channel }) {
  if (channel.kind === 'brand') {
    return <BrandIcon name={channel.brandId} size={22} />;
  }
  if (channel.kind === 'lucide') {
    return <channel.Icon size={22} color={channel.color} />;
  }
  return <span className="font-display text-lg font-medium text-ink dark:text-fog">in</span>;
}

export default function Contact() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="scroll-mt-24 border-t border-line py-24 dark:border-void-line md:py-32">
      <Container>
        <Reveal direction="scale" className="mx-auto max-w-2xl text-center">
          <SectionHeading eyebrow={t('contact.eyebrow')} title={t('contact.title')} sub={t('contact.sub')} align="center" />

          <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
            {CHANNELS.map((channel) => (
              <Magnetic key={channel.id} strength={0.25}>
                <a
                  href={channel.href}
                  target={channel.href.startsWith('http') ? '_blank' : undefined}
                  rel={channel.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="group flex items-center gap-3 rounded-full border border-line bg-surface px-6 py-3.5 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent hover:shadow-[0_12px_30px_-12px_rgba(20,21,26,0.18)] dark:border-void-line dark:bg-void-surface"
                >
                  <ChannelIcon channel={channel} />
                  <span className="text-sm font-medium text-ink dark:text-fog">{channel.label}</span>
                </a>
              </Magnetic>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
