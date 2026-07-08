import { motion } from 'framer-motion';

// Pair with <StaggerItem> children. The group triggers once per element as it
// enters the viewport, then hands out a small, staggered delay to each child
// so a row of icons/chips/cards animates in like a light cascade rather than
// popping in all at once.
export function StaggerGroup({
  children,
  as = 'div',
  className = '',
  once = true,
  amount = 0.2,
  stagger = 0.07,
  delayChildren = 0,
}) {
  const MotionTag = motion[as] || motion.div;
  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount }}
      variants={{
        hidden: {},
        show: {
          transition: { staggerChildren: stagger, delayChildren },
        },
      }}
    >
      {children}
    </MotionTag>
  );
}

export function StaggerItem({
  children,
  as = 'div',
  className = '',
  y = 18,
  duration = 0.6,
}) {
  const MotionTag = motion[as] || motion.div;
  return (
    <MotionTag
      className={className}
      variants={{
        hidden: { opacity: 0, y },
        show: {
          opacity: 1,
          y: 0,
          transition: { duration, ease: [0.16, 1, 0.3, 1] },
        },
      }}
    >
      {children}
    </MotionTag>
  );
}
