"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BookOpen, AlertTriangle, HelpCircle, Layers, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

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
    <div className="sticky top-24 rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm">
      <h2 className="mb-4 flex items-center gap-2 text-lg font-bold text-neutral-900">
        <BookOpen className="text-primary-600" size={20} />
        Módulos del Curso
      </h2>
      <nav className="flex flex-col gap-2" aria-label="Menú del curso">
        {modules.map((mod) => {
          const isActive = mod.activeCheck(pathname);
          const Icon = mod.icon;

          if (mod.disabled) {
            return (
              <div
                key={mod.label}
                className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-neutral-400 opacity-70"
              >
                <Icon size={18} />
                {mod.label}
              </div>
            );
          }

          return (
            <Link
              key={mod.href}
              href={mod.href}
              className={cn(
                "flex items-center gap-3 rounded-xl px-4 py-3 text-sm transition-colors",
                isActive
                  ? "bg-primary-50 font-semibold text-primary-700"
                  : "font-medium text-neutral-600 hover:bg-neutral-50 hover:text-neutral-900"
              )}
            >
              <Icon size={18} />
              {mod.label}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
