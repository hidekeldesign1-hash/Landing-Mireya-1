import type { Transition, Variants } from "framer-motion";

/** Editorial / Awwwards-style custom bezier — GPU-friendly transforms only */
export const PREMIUM_EASE: Transition["ease"] = [0.16, 1, 0.3, 1];

export const premiumTransition: Transition = {
  duration: 0.6,
  ease: PREMIUM_EASE,
};

export const premiumTransitionFast: Transition = {
  duration: 0.45,
  ease: PREMIUM_EASE,
};

/** Scroll reveal — once, with early trigger (-80px) for funnel cards */
export const viewportOnce = {
  once: true,
  amount: 0.15,
  margin: "-80px",
} as const;

export const viewportHero = {
  once: true,
  amount: 0.05,
} as const;

/**
 * Primary entrance — opacity + translateY (transform only)
 */
export const fadeInUp: Variants = {
  initial: { opacity: 0, y: 24 },
  animate: {
    opacity: 1,
    y: 0,
    transition: premiumTransition,
  },
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: premiumTransition,
  },
};

export const fadeUp = fadeInUp;

export const fadeIn: Variants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: premiumTransition,
  },
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: premiumTransition,
  },
};

export const fadeInScale: Variants = {
  initial: { opacity: 0, scale: 0.96 },
  animate: {
    opacity: 1,
    scale: 1,
    transition: premiumTransition,
  },
  hidden: { opacity: 0, scale: 0.96 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: premiumTransition,
  },
};

export const staggerContainer: Variants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.08,
    },
  },
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.08,
    },
  },
};

export const staggerItem: Variants = {
  initial: { opacity: 0, y: 24 },
  animate: {
    opacity: 1,
    y: 0,
    transition: premiumTransition,
  },
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: premiumTransition,
  },
};

export const fadeInUpSoft: Variants = {
  initial: { opacity: 0, y: 16 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: PREMIUM_EASE },
  },
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: PREMIUM_EASE },
  },
};

/** Funnel / symptom detail swaps */
export const panelTransition: Transition = {
  duration: 0.45,
  ease: PREMIUM_EASE,
};

export const panelVariants: Variants = {
  initial: { opacity: 0, y: 15 },
  animate: { opacity: 1, y: 0, transition: panelTransition },
  exit: { opacity: 0, y: -15, transition: { duration: 0.28, ease: PREMIUM_EASE } },
};

/** Direct props helper for motion blocks */
export const revealProps = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" as const },
  transition: { duration: 0.6, ease: PREMIUM_EASE },
};

export const scaleHover = {
  scale: 1.03,
  transition: { duration: 0.35, ease: PREMIUM_EASE },
};

export const scaleTap = {
  scale: 0.98,
  transition: { duration: 0.15, ease: PREMIUM_EASE },
};

export const liftHover = {
  y: -4,
  transition: { duration: 0.35, ease: PREMIUM_EASE },
};

export const easeOut = PREMIUM_EASE;
export const defaultTransition = premiumTransition;
