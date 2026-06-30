import type { ReactNode } from "react";
import { Info, AlertTriangle } from "lucide-react";

/**
 * Recuadro destacado para resaltar ideas clave y facilitar la lectura
 * del contenido educativo (PI-138).
 */
export default function Callout({
  children,
  title,
  variant = "info",
}: {
  children: ReactNode;
  title?: string;
  variant?: "info" | "warning";
}) {
  const isWarning = variant === "warning";
  const styles = isWarning
    ? "border-danger-200 bg-danger-50"
    : "border-primary-200 bg-primary-50";
  const iconColor = isWarning ? "text-danger-600" : "text-primary-600";

  return (
    <div
      role="note"
      className={`flex items-start gap-3 rounded-2xl border p-5 ${styles}`}
    >
      <span className={`mt-0.5 shrink-0 ${iconColor}`}>
        {isWarning ? <AlertTriangle size={20} /> : <Info size={20} />}
      </span>
      <div className="text-sm leading-relaxed text-neutral-700">
        {title && (
          <p className="mb-1 font-bold text-neutral-900">{title}</p>
        )}
        {children}
      </div>
    </div>
  );
}
