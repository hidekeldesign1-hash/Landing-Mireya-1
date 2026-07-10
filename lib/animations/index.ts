import type { Transition, Variants } from "framer-motion";

export const easeOut: Transition["ease"] = [0.22, 1, 0.36, 1];

export const defaultTransition: Transition = {
  duration: 0.6,
  ease: easeOut,
};

export const viewportOnce = {
  once: true,
  amount: 0.2,
} as const;

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: defaultTransition,
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: defaultTransition,
  },
};

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: defaultTransition,
  },
};

export const panelTransition: Transition = {
  duration: 0.35,
  ease: easeOut,
};

export const panelVariants: Variants = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0, transition: panelTransition },
  exit: { opacity: 0, y: -8, transition: { duration: 0.2, ease: easeOut } },
};

export const scaleHover = {
  scale: 1.02,
  transition: { duration: 0.25, ease: easeOut },
};
