"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Shield,
  Menu,
  X,
  Home,
  HelpCircle,
  Layers,
  Zap,
  Image as ImageIcon,
  Lightbulb,
  ClipboardCheck,
} from "lucide-react";
import { cn } from "@/lib/utils";

/* ── Navigation items ──────────────────────────────────────────────── */

interface NavItem {
  label: string;
  href: string;
  icon: React.ReactNode;
}

const navItems: NavItem[] = [
  { label: "Inicio", href: "/", icon: <Home size={16} /> },
  { label: "¿Qué es?", href: "/que-es", icon: <HelpCircle size={16} /> },
  { label: "Tipos", href: "/tipos", icon: <Layers size={16} /> },
  { label: "Cómo funciona", href: "/como-funciona", icon: <Zap size={16} /> },
  { label: "Galería", href: "/galeria/correos", icon: <ImageIcon size={16} /> },
  { label: "Consejos", href: "/consejos", icon: <Lightbulb size={16} /> },
  {
    label: "Evaluación",
    href: "/evaluacion",
    icon: <ClipboardCheck size={16} />,
  },
];

/* ── Component ─────────────────────────────────────────────────────── */

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  /* Track scroll for shadow effect */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Lock body scroll when mobile menu is open */
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const closeMobile = useCallback(() => setMobileOpen(false), []);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <>
      {/* ── Desktop & Mobile Header Bar ─────────────────────────── */}
      <header
        id="main-navbar"
        role="navigation"
        aria-label="Navegación principal"
        className={cn(
          "glass fixed top-0 left-0 right-0 z-50 transition-shadow duration-300",
          scrolled && "shadow-lg shadow-black/5"
        )}
        style={{ height: "var(--nav-height)" }}
      >
        <div className="mx-auto flex h-full max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Logo / Brand */}
          <Link
            href="/"
            className="flex items-center gap-2 text-lg font-bold text-primary-600 transition-colors hover:text-primary-700"
            aria-label="Inicio — Anti-Phishing UNFV"
          >
            <Shield size={28} className="shrink-0" />
            <span className="hidden sm:inline">Anti-Phishing UNFV</span>
            <span className="sm:hidden">UNFV</span>
          </Link>

          {/* Desktop links */}
          <nav className="hidden items-center gap-1 md:flex" aria-label="Menú principal">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-medium transition-all duration-200",
                  isActive(item.href)
                    ? "bg-primary-50 text-primary-700"
                    : "text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900"
                )}
                aria-current={isActive(item.href) ? "page" : undefined}
              >
                {item.icon}
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Mobile hamburger */}
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-lg p-2 text-neutral-600 transition-colors hover:bg-neutral-100 hover:text-neutral-900 md:hidden"
            aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((prev) => !prev)}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* ── Mobile Slide-over Panel ─────────────────────────────── */}
      {/* Backdrop */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-black/40 transition-opacity duration-300 md:hidden",
          mobileOpen ? "opacity-100" : "pointer-events-none opacity-0"
        )}
        aria-hidden="true"
        onClick={closeMobile}
      />

      {/* Panel */}
      <aside
        className={cn(
          "fixed top-0 right-0 z-50 flex h-full w-72 flex-col bg-white shadow-2xl transition-transform duration-300 ease-in-out md:hidden",
          mobileOpen ? "translate-x-0" : "translate-x-full"
        )}
        role="dialog"
        aria-modal="true"
        aria-label="Menú de navegación"
      >
        {/* Panel header */}
        <div className="flex items-center justify-between border-b border-neutral-200 px-5 py-4">
          <span className="flex items-center gap-2 text-lg font-bold text-primary-600">
            <Shield size={22} />
            Menú
          </span>
          <button
            type="button"
            className="rounded-lg p-1.5 text-neutral-500 transition-colors hover:bg-neutral-100 hover:text-neutral-900"
            onClick={closeMobile}
            aria-label="Cerrar menú"
          >
            <X size={22} />
          </button>
        </div>

        {/* Panel links */}
        <nav className="flex-1 overflow-y-auto px-3 py-4" aria-label="Menú móvil">
          <ul className="space-y-1">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={closeMobile}
                  className={cn(
                    "flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-all duration-200",
                    isActive(item.href)
                      ? "bg-primary-50 text-primary-700 font-semibold"
                      : "text-neutral-600 hover:bg-neutral-50 hover:text-neutral-900"
                  )}
                  aria-current={isActive(item.href) ? "page" : undefined}
                >
                  {item.icon}
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Panel footer */}
        <div className="border-t border-neutral-200 px-5 py-4 text-xs text-neutral-400">
          UNFV — Facultad de Ingeniería
        </div>
      </aside>
    </>
  );
}
