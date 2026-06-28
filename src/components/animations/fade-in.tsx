"use client";

import { motion, useReducedMotion } from "framer-motion";
import { type ReactNode } from "react";

interface FadeInProps {
  children: ReactNode;
  /** Delay in seconds before the animation starts */
  delay?: number;
  /** Duration in seconds */
  duration?: number;
  /** Vertical offset to start from (px) */
  yOffset?: number;
  className?: string;
}

/**
 * FadeIn
 * Animates children from opacity 0 + y offset to fully visible
 * when they enter the viewport. Respects prefers-reduced-motion.
 */
export function FadeIn({
  children,
  delay = 0,
  duration = 0.5,
  yOffset = 24,
  className,
}: FadeInProps) {
  const shouldReduce = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: shouldReduce ? 0 : yOffset }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: shouldReduce ? 0 : duration,
        delay: shouldReduce ? 0 : delay,
        ease: "easeOut",
      }}
    >
      {children}
    </motion.div>
  );
}
