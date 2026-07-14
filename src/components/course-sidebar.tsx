"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BookOpen, HelpCircle, Layers, Zap, ShieldAlert } from "lucide-react";
import { cn } from "@/lib/utils";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

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
];

export default function CourseSidebar() {
  const pathname = usePathname();

  return (
    <Card className="border-4 border-border bg-card shadow-[4px_4px_0px_0px_var(--secondary)] rounded-none">
      <CardHeader className="p-3 pb-1.5">
        <CardTitle 
          className="flex items-center gap-2 text-sm font-semibold text-foreground font-pixel"
          style={{ fontFamily: "'Pixelify Sans', system-ui, sans-serif" }}
        >
          <BookOpen className="text-primary h-4 w-4" />
          Módulos del Curso
        </CardTitle>
      </CardHeader>
      <CardContent className="p-3 pt-0 pb-1.5">
        <nav className="flex flex-col gap-1" aria-label="Menú del curso">
          {modules.map((mod) => {
            const isActive = mod.activeCheck(pathname);
            const Icon = mod.icon;

            return (
              <Button
                key={mod.href}
                asChild
                variant="ghost"
                className={cn(
                  "justify-start gap-2 rounded-none px-2 py-1 text-xs font-medium transition-all duration-200 border-l-4 h-7",
                  isActive
                    ? "bg-primary/10 text-primary border-primary hover:bg-primary/20 hover:text-primary font-semibold pl-2"
                    : "text-muted-foreground border-transparent hover:text-foreground hover:border-border pl-2"
                )}
              >
                <Link href={mod.href}>
                  <Icon className="h-3.5 w-3.5 shrink-0" />
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
