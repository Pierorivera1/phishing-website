"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BookOpen, AlertTriangle, HelpCircle, Layers, Zap, ShieldAlert } from "lucide-react";
import { cn } from "@/lib/utils";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const modules = [
  {
    href: "/aprender",
    label: "¿Qué es el phishing?",
    icon: HelpCircle,
    activeCheck: (pathname: string) => pathname === "/aprender",
  },
  {
    href: "/aprender/riesgos",
    label: "Riesgos del phishing",
    icon: ShieldAlert,
    activeCheck: (pathname: string) => pathname === "/aprender/riesgos",
  },
  {
    href: "/aprender/tipos",
    label: "Tipos de phishing",
    icon: Layers,
    activeCheck: (pathname: string) => pathname === "/aprender/tipos",
  },
  {
    href: "/aprender/como-funciona",
    label: "Cómo funciona",
    icon: Zap,
    activeCheck: (pathname: string) => pathname === "/aprender/como-funciona",
  },
  {
    href: "#",
    label: "Señales de alerta",
    icon: AlertTriangle,
    activeCheck: () => false,
    disabled: true,
  },
];

export default function CourseSidebar() {
  const pathname = usePathname();

  return (
    <Card className="sticky top-24 border-4 border-border bg-card shadow-[4px_4px_0px_0px_var(--secondary)] rounded-none">
      <CardHeader className="p-5 pb-3">
        <CardTitle 
          className="flex items-center gap-2 text-base md:text-lg font-semibold text-foreground font-pixel"
          style={{ fontFamily: "'Pixelify Sans', system-ui, sans-serif" }}
        >
          <BookOpen className="text-primary h-5 w-5" />
          Módulos del Curso
        </CardTitle>
      </CardHeader>
      <CardContent className="p-5 pt-0">
        <nav className="flex flex-col gap-1.5" aria-label="Menú del curso">
          {modules.map((mod) => {
            const isActive = mod.activeCheck(pathname);
            const Icon = mod.icon;

            if (mod.disabled) {
              return (
                <div
                  key={mod.label}
                  className="flex items-center justify-between rounded-none border-l-4 border-transparent pl-3 px-4 py-2.5 text-sm font-medium text-muted-foreground opacity-60 cursor-not-allowed select-none"
                >
                  <div className="flex items-center gap-3">
                    <Icon className="h-4.5 w-4.5" />
                    <span>{mod.label}</span>
                  </div>
                  <Badge variant="outline" className="text-[9px] px-1.5 py-0 rounded-none border-border">Pronto</Badge>
                </div>
              );
            }

            return (
              <Button
                key={mod.href}
                asChild
                variant="ghost"
                className={cn(
                  "justify-start gap-3 rounded-none px-4 py-2.5 text-sm font-medium transition-all duration-200 border-l-4",
                  isActive
                    ? "bg-primary/10 text-primary border-primary hover:bg-primary/20 hover:text-primary font-semibold pl-3"
                    : "text-muted-foreground border-transparent hover:text-foreground hover:border-border pl-3"
                )}
              >
                <Link href={mod.href}>
                  <Icon className="h-4.5 w-4.5 shrink-0" />
                  <span>{mod.label}</span>
                </Link>
              </Button>
            );
          })}
        </nav>
      </CardContent>
    </Card>
  );
}
