import { useEffect } from 'react';
import Lenis from 'lenis';

export default function useSmoothScroll() {
  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return undefined;

    // lerp-based smoothing: proportional to scroll distance, so it stays
    // light and responsive instead of always taking a fixed duration to settle.
    const lenis = new Lenis({
      lerp: 0.11,
      smoothWheel: true,
      syncTouch: false, // keep native touch scroll on mobile — lighter & more responsive
      wheelMultiplier: 1,
    });

    let rafId;
    function raf(time) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    window.__lenis = lenis;

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      window.__lenis = undefined;
    };
  }, []);
}
