"use client";

import { motion, useReducedMotion } from "framer-motion";
import { type ReactNode } from "react";

type Direction = "left" | "right" | "up" | "down";

interface SlideInProps {
  children: ReactNode;
  direction?: Direction;
  delay?: number;
  duration?: number;
  distance?: number;
  className?: string;
}

const axisMap: Record<Direction, "x" | "y"> = {
  left: "x",
  right: "x",
  up: "y",
  down: "y",
};

const signMap: Record<Direction, 1 | -1> = {
  left: -1,
  right: 1,
  up: -1,
  down: 1,
};

/**
 * SlideIn
 * Slides children in from a given direction when they enter the viewport.
 * Respects prefers-reduced-motion.
 */
export function SlideIn({
  children,
  direction = "left",
  delay = 0,
  duration = 0.55,
  distance = 40,
  className,
}: SlideInProps) {
  const shouldReduce = useReducedMotion();
  const axis = axisMap[direction];
  const sign = signMap[direction];

  return (
    <motion.div
      className={className}
      initial={{
        opacity: 0,
        [axis]: shouldReduce ? 0 : sign * distance,
      }}
      whileInView={{ opacity: 1, [axis]: 0 }}
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
