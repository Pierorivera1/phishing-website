import React from "react";
import { cn } from "@/lib/utils";

interface SectionWrapperProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  title: string;
  subtitle?: string;
  icon?: React.ReactNode;
}

/**
 * SectionWrapper
 * Proporciona un contenedor centralizado y estandarizado tipo "Guía de estudio".
 */
export default function SectionWrapper({
  children,
  title,
  subtitle,
  icon,
  className,
  ...props
}: SectionWrapperProps) {
  return (
    <article
      className={cn(
        "mx-auto w-full max-w-4xl px-4 py-12 sm:px-6 md:py-20 lg:px-8",
        className
      )}
      {...props}
    >
      {/* Cabecera de la sección */}
      <header className="mb-10 text-center sm:mb-14">
        {icon && (
          <div className="mx-auto mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary-50 text-primary-600 ring-1 ring-primary-100">
            {icon}
          </div>
        )}
        <h1 className="text-3xl font-extrabold tracking-tight text-neutral-900 sm:text-4xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-neutral-500 sm:text-lg">
            {subtitle}
          </p>
        )}
      </header>

      {/* Contenido principal */}
      <div className="flex flex-col gap-6 text-base leading-relaxed text-neutral-600 sm:text-lg sm:leading-loose">
        {children}
      </div>
    </article>
  );
}
