"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  Home,
  ImageIcon as ImageIconIcon,
  Lightbulb,
  ExternalLink,
  GraduationCap,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { ReadingProgressBar } from "@/components/reading-progress-bar";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

/* ── Navigation items ──────────────────────────────────────────────── */

interface NavItem {
  label: string;
  href: string;
  icon: React.ReactNode;
}

const navItems: NavItem[] = [
  { label: "Inicio", href: "/", icon: <Home className="h-4 w-4" /> },
  { label: "Aprender", href: "/aprender", icon: <GraduationCap className="h-4 w-4" /> },
  { label: "Galería", href: "/galeria/correos", icon: <ImageIconIcon className="h-4 w-4" /> },
  { label: "Consejos", href: "/consejos", icon: <Lightbulb className="h-4 w-4" /> },
];

const GOOGLE_FORMS_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLScyB-HegC1TqEaUqX6r_LszwN83f7Wj8nO9f-HjW_LhB5f80Q/viewform";

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
          "glass fixed top-0 left-0 right-0 z-50 border-b border-border transition-shadow duration-300",
          scrolled && "shadow-lg shadow-black/5"
        )}
        style={{ height: "var(--nav-height)" }}
      >
        <div className="mx-auto flex h-full max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Logo / Brand */}
          <Link
            href="/"
            className="flex items-center gap-2 text-xl md:text-2xl font-semibold text-primary transition-colors hover:opacity-90 font-pixel"
            style={{ fontFamily: "'Pixelify Sans', system-ui, sans-serif" }}
            aria-label="Inicio — Anti-Phishing UNFV"
          >
            <Image
              src="/anti_pishing_unfv_logo.webp"
              alt="Logo UNFV"
              width={32}
              height={32}
              className="shrink-0 object-contain"
            />
            <span className="hidden sm:inline" style={{ fontFamily: "'Pixelify Sans', system-ui, sans-serif" }}>
              Anti-Phishing UNFV
            </span>
            <span className="sm:hidden" style={{ fontFamily: "'Pixelify Sans', system-ui, sans-serif" }}>
              UNFV
            </span>
          </Link>

          {/* Desktop links */}
          <nav className="hidden h-full items-stretch md:flex" aria-label="Menú principal">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive(item.href) ? "page" : undefined}
                className={cn(
                  "relative flex h-full items-center gap-1.5 px-4 text-sm font-medium transition-colors duration-200 outline-none",
                  isActive(item.href)
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {item.icon}
                <span>{item.label}</span>
                {isActive(item.href) && (
                  <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-primary animate-fade-in" />
                )}
              </Link>
            ))}
            {/* Evaluación → Google Forms (externo) */}
            <a
              href={GOOGLE_FORMS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="relative flex h-full items-center gap-1.5 px-4 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200 outline-none"
            >
              <span>Evaluación</span>
            </a>
          </nav>

          {/* Mobile hamburger - Sheet component */}
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
                aria-label="Abrir menú"
              >
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="flex w-72 flex-col p-0">
              <SheetHeader className="border-b border-border px-5 py-4 flex flex-row items-center justify-between">
                <SheetTitle className="flex items-center gap-2 text-lg font-bold text-primary">
                  <Image
                    src="/anti_pishing_unfv_logo.webp"
                    alt="Logo UNFV"
                    width={24}
                    height={24}
                    className="shrink-0 object-contain"
                  />
                  Menú
                </SheetTitle>
              </SheetHeader>

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
                            ? "bg-primary/10 text-primary font-semibold"
                            : "text-muted-foreground hover:bg-muted hover:text-foreground"
                        )}
                        aria-current={isActive(item.href) ? "page" : undefined}
                      >
                        {item.icon}
                        {item.label}
                      </Link>
                    </li>
                  ))}
                  <li>
                    <a
                      href={GOOGLE_FORMS_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={closeMobile}
                      className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-muted-foreground transition-all duration-200 hover:bg-muted hover:text-foreground"
                    >
                      Evaluación
                    </a>
                  </li>
                </ul>
              </nav>

              {/* Panel footer */}
              <div className="border-t border-border px-5 py-4 text-xs text-muted-foreground">
                UNFV — Facultad de Ingeniería
              </div>
            </SheetContent>
          </Sheet>
        </div>

        {/* Reading progress bar — visible only on /aprender/* */}
        <ReadingProgressBar />
      </header>
    </>
  );
}
