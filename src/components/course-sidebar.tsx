"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BookOpen, AlertTriangle, HelpCircle, Layers, Zap } from "lucide-react";
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
    <Card className="sticky top-24 shadow-sm border-border bg-card">
      <CardHeader className="p-5 pb-3">
        <CardTitle className="flex items-center gap-2 text-lg font-bold text-foreground">
          <BookOpen className="text-primary h-5 w-5" />
          Módulos del Curso
        </CardTitle>
      </CardHeader>
      <CardContent className="p-5 pt-0">
        <nav className="flex flex-col gap-1" aria-label="Menú del curso">
          {modules.map((mod) => {
            const isActive = mod.activeCheck(pathname);
            const Icon = mod.icon;

            if (mod.disabled) {
              return (
                <div
                  key={mod.label}
                  className="flex items-center justify-between rounded-xl px-4 py-2 text-sm font-medium text-muted-foreground opacity-60 cursor-not-allowed select-none"
                >
                  <div className="flex items-center gap-3">
                    <Icon className="h-4.5 w-4.5" />
                    <span>{mod.label}</span>
                  </div>
                  <Badge variant="outline" className="text-[10px] px-1.5 py-0">Pronto</Badge>
                </div>
              );
            }

            return (
              <Button
                key={mod.href}
                asChild
                variant={isActive ? "secondary" : "ghost"}
                className={cn(
                  "justify-start gap-3 rounded-xl px-4 py-2 text-sm font-medium transition-all duration-200",
                  isActive
                    ? "bg-primary/10 text-primary hover:bg-primary/20 hover:text-primary font-semibold"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                <Link href={mod.href}>
                  <Icon className="h-4.5 w-4.5" />
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
