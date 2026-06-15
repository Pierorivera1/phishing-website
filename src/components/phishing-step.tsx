import React from "react";
import { cn } from "@/lib/utils";

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
          className="absolute top-14 left-6 h-full w-[2px] -translate-x-1/2 bg-neutral-200 sm:left-8"
          aria-hidden="true"
        />
      )}

      {/* Círculo indicador / Icono */}
      <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-4 border-white bg-primary-100 text-lg font-bold text-primary-700 shadow-sm ring-1 ring-neutral-200 sm:h-16 sm:w-16 sm:text-xl">
        {icon ? icon : stepNumber}
      </div>

      {/* Contenido del paso */}
      <div className="flex-1 pt-1 sm:pt-3">
        <h3 className="text-xl font-bold text-neutral-900 sm:text-2xl">
          {title}
        </h3>
        <p className="mt-2 text-base leading-relaxed text-neutral-600 sm:mt-3 sm:text-lg">
          {description}
        </p>
      </div>
    </div>
  );
}
