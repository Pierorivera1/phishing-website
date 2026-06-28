"use client";

import { usePathname } from "next/navigation";
import { useScrollProgress } from "@/hooks/use-scroll-progress";

/**
 * ReadingProgressBar
 * Renders a thin colored bar at the bottom of the fixed navbar
 * that fills left-to-right as the user scrolls through the page.
 * Only visible on /aprender/* routes.
 * Respects prefers-reduced-motion by disabling the CSS transition.
 */
export function ReadingProgressBar() {
  const pathname = usePathname();
  const progress = useScrollProgress();

  // Only show on /aprender/* content pages
  if (!pathname.startsWith("/aprender")) return null;

  return (
    <div
      aria-hidden="true"
      className="absolute bottom-0 left-0 right-0 h-[3px] bg-border/40"
    >
      <div
        role="progressbar"
        aria-valuenow={Math.round(progress)}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label="Progreso de lectura"
        className="h-full bg-primary motion-safe:transition-[width] motion-safe:duration-100 motion-safe:ease-linear"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
