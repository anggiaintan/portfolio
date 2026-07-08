// Lightweight chrome around real project screenshots — a browser-style frame
// for desktop work, a phone-style frame for mobile app work, and a plain
// bordered frame for content that isn't a device screen (e.g. survey results).

export function BrowserFrame({ children, className = '' }) {
  return (
    <div
      className={`w-full overflow-hidden rounded-2xl border border-line bg-white shadow-[0_24px_60px_-24px_rgba(20,21,26,0.35)] dark:border-void-line dark:bg-void-raised ${className}`}
    >
      <div className="flex items-center gap-1.5 border-b border-line bg-paper-dim px-4 py-2.5 dark:border-void-line dark:bg-void-surface">
        <span className="h-2.5 w-2.5 rounded-full bg-ink-faint/25" />
        <span className="h-2.5 w-2.5 rounded-full bg-ink-faint/25" />
        <span className="h-2.5 w-2.5 rounded-full bg-ink-faint/25" />
      </div>
      <div className="relative w-full overflow-hidden bg-white dark:bg-void-raised">{children}</div>
    </div>
  );
}

export function PhoneFrame({ children, className = '' }) {
  return (
    <div
      className={`relative mx-auto w-full max-w-[280px] overflow-hidden rounded-[2.4rem] border-[6px] border-white bg-white shadow-[0_24px_60px_-24px_rgba(20,21,26,0.4)] dark:border-void-raised dark:bg-void-raised ${className}`}
    >
      <div className="pointer-events-none absolute left-1/2 top-2 z-10 h-1.5 w-16 -translate-x-1/2 rounded-full bg-ink-faint/20" />
      <div className="relative w-full overflow-hidden bg-white dark:bg-void-raised">{children}</div>
    </div>
  );
}

export function PlainFrame({ children, className = '' }) {
  return (
    <div
      className={`w-full overflow-hidden rounded-2xl border border-line shadow-[0_24px_60px_-24px_rgba(20,21,26,0.25)] dark:border-void-line ${className}`}
    >
      {children}
    </div>
  );
}

export const DEVICE_FRAMES = {
  desktop: BrowserFrame,
  mobile: PhoneFrame,
  plain: PlainFrame,
};
