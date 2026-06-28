import React from "react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

interface PhishingStepProps {
  stepNumber: number;
  title: string;
  description: string;
  isLast?: boolean;
  icon?: React.ReactNode;
}

/**
 * PhishingStep
 * Un nodo en la línea de tiempo vertical para explicar el flujo de un ataque.
 */
export default function PhishingStep({
  stepNumber,
  title,
  description,
  isLast = false,
  icon,
}: PhishingStepProps) {
  return (
    <div className="relative flex gap-6 pb-12 sm:gap-8">
      {/* Línea vertical conectora */}
      {!isLast && (
        <div
          className="absolute top-14 left-6 h-[calc(100%-24px)] w-[4px] -translate-x-1/2 bg-border sm:left-8"
          aria-hidden="true"
        />
      )}

      {/* Círculo indicador / Icono */}
      <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-none border-4 border-border bg-[#0c0e21] text-lg font-bold text-primary shadow-[3px_3px_0px_0px_var(--secondary)] sm:h-16 sm:w-16 sm:text-xl">
        {icon ? icon : stepNumber}
      </div>

      {/* Contenido del paso */}
      <div className="flex-1 pt-1 sm:pt-4">
        <div className="flex flex-col gap-1.5 sm:flex-row sm:items-center sm:gap-3">
          <Badge variant="outline" className="w-fit px-2 py-0.5 text-xs text-primary border-2 border-primary/30 bg-primary/5 rounded-none">
            Paso {stepNumber}
          </Badge>
          <h3 
            className="text-lg font-semibold text-foreground sm:text-xl font-pixel"
            style={{ fontFamily: "'Pixelify Sans', system-ui, sans-serif" }}
          >
            {title}
          </h3>
        </div>
        <p className="mt-2 text-base leading-relaxed text-muted-foreground sm:mt-3 sm:text-lg">
          {description}
        </p>
      </div>
    </div>
  );
}
