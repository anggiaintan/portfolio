import { ImageIcon } from 'lucide-react';
import { motion } from 'framer-motion';

export default function FigmaFrame({ initials = 'A', photoSrc, name = 'anggia.png', dimensions = '480 × 600', className = '' }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.94, y: 10 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
      className={`relative w-full max-w-[280px] ${className}`}
    >
      {/* layer name tag, Figma-style */}
      <div className="absolute -top-8 left-0 flex items-center gap-1.5 rounded-md bg-accent px-2 py-1 font-mono text-[10px] text-white shadow-sm">
        <ImageIcon size={10} />
        {name}
      </div>

      {/* selection frame */}
      <div className="relative rounded-2xl border-2 border-accent p-0.5">
        {/* corner handles */}
        <span className="absolute -left-[5px] -top-[5px] h-2.5 w-2.5 rounded-[2px] border-2 border-accent bg-white" />
        <span className="absolute -right-[5px] -top-[5px] h-2.5 w-2.5 rounded-[2px] border-2 border-accent bg-white" />
        <span className="absolute -left-[5px] -bottom-[5px] h-2.5 w-2.5 rounded-[2px] border-2 border-accent bg-white" />
        <span className="absolute -right-[5px] -bottom-[5px] h-2.5 w-2.5 rounded-[2px] border-2 border-accent bg-white" />

        <div className="aspect-[4/5] w-full overflow-hidden rounded-[14px] bg-gradient-to-br from-accent-tint via-paper to-paper dark:from-void-raised dark:via-void-surface dark:to-void-surface">
          {photoSrc ? (
            <img src={photoSrc} alt="Anggia" className="h-full w-full object-cover" />
          ) : (
            <div className="flex h-full w-full items-center justify-center">
              <span className="select-none font-display text-8xl font-medium text-accent/25">{initials}</span>
            </div>
          )}
        </div>
      </div>

      {/* dimension annotation, like a Figma inspector readout */}
      <div className="mt-2 flex items-center justify-between font-mono text-[10px] text-ink-faint dark:text-fog-soft">
        <span>{dimensions}</span>
        <span>PNG</span>
      </div>
    </motion.div>
  );
}
