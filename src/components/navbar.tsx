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
            className="flex items-center gap-2 text-lg font-bold text-primary transition-colors hover:opacity-90"
            aria-label="Inicio — Anti-Phishing UNFV"
          >
            <Image
              src="/anti_pishing_unfv_logo.png"
              alt="Logo UNFV"
              width={32}
              height={32}
              className="shrink-0 object-contain"
            />
            <span className="hidden sm:inline">Anti-Phishing UNFV</span>
            <span className="sm:hidden">UNFV</span>
          </Link>

          {/* Desktop links */}
          <nav className="hidden items-center gap-1 md:flex" aria-label="Menú principal">
            {navItems.map((item) => (
              <Button
                key={item.href}
                asChild
                variant={isActive(item.href) ? "secondary" : "ghost"}
                size="sm"
                className={cn(
                  "flex items-center gap-1.5 font-medium transition-all duration-200",
                  isActive(item.href)
                    ? "bg-primary/10 text-primary hover:bg-primary/20"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                <Link href={item.href} aria-current={isActive(item.href) ? "page" : undefined}>
                  {item.icon}
                  {item.label}
                </Link>
              </Button>
            ))}
            {/* Evaluación → Google Forms (externo) */}
            <Button
              asChild
              variant="ghost"
              size="sm"
              className="flex items-center gap-1.5 font-medium text-muted-foreground hover:text-foreground"
            >
              <a href={GOOGLE_FORMS_URL} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4" />
                Evaluación
              </a>
            </Button>
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
                    src="/anti_pishing_unfv_logo.png"
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
                      <ExternalLink className="h-4 w-4" />
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
      </header>
    </>
  );
}
