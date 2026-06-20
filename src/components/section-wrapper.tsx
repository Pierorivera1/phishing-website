import React from "react";
import { cn } from "@/lib/utils";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

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
    <Card
      className={cn(
        "mx-auto w-full max-w-4xl border-border bg-card p-6 sm:p-10 shadow-sm",
        className
      )}
      {...props}
    >
      {/* Cabecera de la sección */}
      <CardHeader className="p-0 mb-8 text-center sm:mb-12">
        {icon && (
          <div className="mx-auto mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/20">
            {icon}
          </div>
        )}
        <CardTitle className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
          {title}
        </CardTitle>
        {subtitle && (
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            {subtitle}
          </p>
        )}
      </CardHeader>

      {/* Contenido principal */}
      <CardContent className="p-0 flex flex-col gap-6 text-base leading-relaxed text-muted-foreground sm:text-lg sm:leading-loose">
        {children}
      </CardContent>
    </Card>
  );
}
