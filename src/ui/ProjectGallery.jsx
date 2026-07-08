import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, X, ZoomIn } from 'lucide-react';
import { DEVICE_FRAMES, BrowserFrame } from './DeviceFrame';
import DeviceMockup from './DeviceMockup';

const SWIPE_THRESHOLD = 60;

function NavButton({ direction, onClick, dark = false }) {
  const Icon = direction === 'prev' ? ChevronLeft : ChevronRight;
  const positionClasses =
    direction === 'prev'
      ? 'left-0 -translate-x-4 md:-translate-x-5'
      : 'right-0 translate-x-4 md:translate-x-5';
  const toneClasses = dark
    ? 'border-white/20 bg-white/10 text-white hover:border-white/50 hover:bg-white/20'
    : 'border-line bg-paper/90 text-ink-soft shadow-md hover:border-accent hover:text-accent dark:border-void-line dark:bg-void-surface/90 dark:text-fog-soft';
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={direction === 'prev' ? 'Sebelumnya' : 'Selanjutnya'}
      className={`absolute top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border backdrop-blur transition md:h-11 md:w-11 ${positionClasses} ${toneClasses}`}
    >
      <Icon size={18} />
    </button>
  );
}

export default function ProjectGallery({ images, title, frameType = 'desktop', mockupVariant, accent }) {
  const [index, setIndex] = useState(0);
  const [open, setOpen] = useState(false);
  const hasImages = Array.isArray(images) && images.length > 0;
  const count = hasImages ? images.length : 0;

  const go = useCallback(
    (dir) => setIndex((i) => (i + dir + count) % count),
    [count]
  );

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = 'hidden';
    function onKey(e) {
      if (e.key === 'Escape') setOpen(false);
      if (e.key === 'ArrowRight') go(1);
      if (e.key === 'ArrowLeft') go(-1);
    }
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [open, go]);

  if (!hasImages) {
    return (
      <div className="relative flex items-center justify-center overflow-hidden rounded-[2rem] border border-line py-14 dark:border-void-line">
        <DeviceMockup
          variant={mockupVariant}
          accent={accent}
          className="h-72 w-auto drop-shadow-[0_24px_40px_rgba(20,21,26,0.14)] md:h-96"
        />
      </div>
    );
  }

  const Frame = DEVICE_FRAMES[frameType] || BrowserFrame;
  const isMobile = frameType === 'mobile';

  function handleDragEnd(_e, info) {
    if (count < 2) return;
    if (info.offset.x < -SWIPE_THRESHOLD) go(1);
    else if (info.offset.x > SWIPE_THRESHOLD) go(-1);
  }

  return (
    <>
      <div className="relative flex flex-col items-center py-6 md:py-10">
        <div className={`relative w-full ${isMobile ? 'max-w-[300px]' : 'max-w-3xl'}`}>
          {count > 1 && <NavButton direction="prev" onClick={() => go(-1)} />}

          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Perbesar screenshot"
            className="group relative block w-full cursor-zoom-in text-left"
          >
            <Frame>
              <AnimatePresence mode="wait" initial={false}>
                <motion.img
                  key={images[index]}
                  src={images[index]}
                  alt={`${title} — screenshot ${index + 1}`}
                  className="h-auto w-full select-none"
                  drag={count > 1 ? 'x' : false}
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.15}
                  onDragEnd={handleDragEnd}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.22 }}
                  loading="lazy"
                />
              </AnimatePresence>
            </Frame>
            <span className="pointer-events-none absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-ink/60 text-white opacity-0 backdrop-blur transition-opacity duration-200 group-hover:opacity-100 dark:bg-black/60">
              <ZoomIn size={14} />
            </span>
          </button>

          {count > 1 && <NavButton direction="next" onClick={() => go(1)} />}
        </div>

        {count > 1 && (
          <div className="mt-5 flex items-center gap-2">
            {images.map((src, i) => (
              <button
                key={src}
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`Ke screenshot ${i + 1}`}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === index ? 'w-6 bg-accent' : 'w-1.5 bg-ink-faint/30 hover:bg-ink-faint/50'
                }`}
              />
            ))}
          </div>
        )}
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-void/85 p-5 backdrop-blur-sm md:p-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
          >
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Tutup"
              className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white transition hover:border-white/50 hover:bg-white/10"
            >
              <X size={18} />
            </button>

            {count > 1 && (
              <NavButton
                direction="prev"
                dark
                onClick={(e) => {
                  e.stopPropagation();
                  go(-1);
                }}
              />
            )}

            <motion.div
              className={`relative w-full ${isMobile ? 'max-w-[340px]' : 'max-w-4xl'}`}
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
            >
              <Frame>
                <AnimatePresence mode="wait" initial={false}>
                  <motion.img
                    key={images[index]}
                    src={images[index]}
                    alt={`${title} — screenshot ${index + 1}`}
                    className="h-auto max-h-[78vh] w-full select-none object-contain"
                    drag={count > 1 ? 'x' : false}
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={0.15}
                    onDragEnd={handleDragEnd}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  />
                </AnimatePresence>
              </Frame>
              {count > 1 && (
                <p className="mt-3 text-center font-mono text-xs text-white/60">
                  {index + 1} / {count}
                </p>
              )}
            </motion.div>

            {count > 1 && (
              <NavButton
                direction="next"
                dark
                onClick={(e) => {
                  e.stopPropagation();
                  go(1);
                }}
              />
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
