/**
 * Utility helpers for the phishing-unfv platform.
 */

/**
 * Merge class names, filtering out falsy values.
 * Lightweight alternative to `clsx` / `cn`.
 */
export function cn(...classes: (string | false | null | undefined)[]): string {
  return classes.filter(Boolean).join(" ");
}

/**
 * Format a Date as "dd/mm/yyyy HH:MM".
 */
export function formatDate(date: Date): string {
  return date.toLocaleDateString("es-PE", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

/**
 * Clamp a value between min and max (Likert 1-5).
 */
export function clampLikert(value: number): number {
  return Math.min(5, Math.max(1, Math.round(value)));
}
