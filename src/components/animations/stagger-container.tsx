"use client";

import { motion, useReducedMotion } from "framer-motion";
import { type ReactNode } from "react";

interface StaggerContainerProps {
  children: ReactNode;
  /** Delay between each child animation (seconds) */
  staggerDelay?: number;
  /** Initial delay before the first child animates (seconds) */
  initialDelay?: number;
  className?: string;
}

const containerVariants = (staggerDelay: number, initialDelay: number) => ({
  hidden: {},
  visible: {
    transition: {
      delayChildren: initialDelay,
      staggerChildren: staggerDelay,
    },
  },
});

const itemVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const itemVariantsReduced = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0 } },
};

/**
 * StaggerContainer
 * Wraps children so they animate in one after another (cascade effect).
 * Each direct child should be wrapped with <StaggerItem>.
 * Respects prefers-reduced-motion.
 */
export function StaggerContainer({
  children,
  staggerDelay = 0.12,
  initialDelay = 0,
  className,
}: StaggerContainerProps) {
  const shouldReduce = useReducedMotion();

  return (
    <motion.div
      className={className}
      variants={containerVariants(
        shouldReduce ? 0 : staggerDelay,
        shouldReduce ? 0 : initialDelay
      )}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
    >
      {children}
    </motion.div>
  );
}

/**
 * StaggerItem
 * Individual item inside a StaggerContainer.
 * Inherits the stagger animation from its parent.
 */
export function StaggerItem({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const shouldReduce = useReducedMotion();

  return (
    <motion.div
      className={className}
      variants={shouldReduce ? itemVariantsReduced : itemVariants}
    >
      {children}
    </motion.div>
  );
}
