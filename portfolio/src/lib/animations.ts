import type { Variants } from 'framer-motion';

// Container variant for staggering children
export const staggerContainer = (delay = 0): Variants => ({
  hidden: {},
  visible: {
    transition: {
      delayChildren: delay, // 👈 add per-section control
      staggerChildren: 0.4,
    },
  },
});

// Child item fade-up animation
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};