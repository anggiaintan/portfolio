import { ArrowUpRight } from 'lucide-react';

export function Container({ children, className = '' }) {
  return <div className={`mx-auto w-full max-w-6xl px-6 md:px-10 ${className}`}>{children}</div>;
}

export function Eyebrow({ children, className = '' }) {
  return (
    <div className={`flex items-center gap-2.5 font-mono text-[11px] uppercase tracking-[0.18em] text-accent ${className}`}>
      <span className="h-1.5 w-1.5 rounded-full bg-accent" />
      {children}
    </div>
  );
}

export function SectionHeading({ eyebrow, title, sub, align = 'left' }) {
  return (
    <div className={`max-w-2xl ${align === 'center' ? 'mx-auto text-center' : ''}`}>
      {eyebrow && <Eyebrow className={align === 'center' ? 'justify-center' : ''}>{eyebrow}</Eyebrow>}
      <h2 className="mt-4 font-display text-3xl font-medium leading-[1.15] text-balance text-ink md:text-4xl dark:text-fog">
        {title}
      </h2>
      {sub && <p className="mt-4 text-[15px] leading-relaxed text-ink-soft dark:text-fog-soft">{sub}</p>}
    </div>
  );
}

export function Button({ children, href, onClick, variant = 'primary', className = '', icon = true, type = 'button', target, rel, download }) {
  const base = 'group relative inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-all duration-300 ease-out';
  const styles = {
    primary: 'bg-ink text-paper hover:bg-accent dark:bg-fog dark:text-void dark:hover:bg-accent-soft dark:hover:text-void',
    secondary: 'border border-line text-ink hover:border-accent hover:text-accent dark:border-void-line dark:text-fog dark:hover:border-accent-soft dark:hover:text-accent-soft',
    ghost: 'text-ink hover:text-accent dark:text-fog dark:hover:text-accent-soft px-0',
  };
  const content = (
    <>
      <span>{children}</span>
      {icon && (
        <ArrowUpRight
          size={16}
          className="transition-transform duration-300 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        />
      )}
    </>
  );
  if (href) {
    return (
      <a href={href} target={target} rel={rel} download={download} className={`${base} ${styles[variant]} ${className}`}>
        {content}
      </a>
    );
  }
  return (
    <button type={type} onClick={onClick} className={`${base} ${styles[variant]} ${className}`}>
      {content}
    </button>
  );
}

export function Chip({ children, className = '' }) {
  return (
    <span
      className={`inline-flex items-center rounded-full border border-line px-3 py-1.5 font-mono text-[11px] uppercase tracking-wide text-ink-soft dark:border-void-line dark:text-fog-soft ${className}`}
    >
      {children}
    </span>
  );
}
