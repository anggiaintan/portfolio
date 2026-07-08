export function smoothScrollTo(target, options = {}) {
  const lenis = typeof window !== 'undefined' ? window.__lenis : null;
  if (lenis) {
    lenis.scrollTo(target, {
      offset: 0,
      duration: 1,
      easing: (t) => 1 - Math.pow(1 - t, 3),
      ...options,
    });
    return;
  }
  const el = typeof target === 'string' ? document.querySelector(target) : target;
  if (el && el.scrollIntoView) el.scrollIntoView({ behavior: 'smooth' });
}

export function smoothScrollToTop() {
  const lenis = typeof window !== 'undefined' ? window.__lenis : null;
  if (lenis) {
    lenis.scrollTo(0, { duration: 1, easing: (t) => 1 - Math.pow(1 - t, 3) });
    return;
  }
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
