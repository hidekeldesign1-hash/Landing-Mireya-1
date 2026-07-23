"use client";

import { motion, useReducedMotion, type HTMLMotionProps } from "framer-motion";
import {
  fadeInUp,
  staggerContainer,
  staggerItem,
  scaleHover,
  scaleTap,
  viewportOnce,
} from "@/lib/animations";
import { useExperienceReady } from "@/components/ExperienceGate";

type MotionSectionProps = HTMLMotionProps<"div"> & {
  children: React.ReactNode;
  className?: string;
  stagger?: boolean;
};

export function MotionSection({
  children,
  className,
  stagger = false,
  ...props
}: MotionSectionProps) {
  const reduceMotion = useReducedMotion();
  const ready = useExperienceReady();

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  // Hold in `hidden` until splash reveals; then whileInView runs entrance motions
  if (!ready) {
    return (
      <motion.div
        className={className}
        initial="hidden"
        animate="hidden"
        variants={stagger ? staggerContainer : fadeInUp}
        {...props}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={stagger ? staggerContainer : fadeInUp}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function MotionItem({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div className={className} variants={staggerItem}>
      {children}
    </motion.div>
  );
}

/** Interactive card / tile — GPU hover lift */
export function MotionCard({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      variants={staggerItem}
      whileHover={scaleHover}
      whileTap={scaleTap}
      style={{ willChange: "transform" }}
    >
      {children}
    </motion.div>
  );
}
