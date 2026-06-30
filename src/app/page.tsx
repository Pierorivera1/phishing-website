"use client";

import Link from "next/link";
import {
  Shield,
  AlertTriangle,
  TrendingUp,
  GraduationCap,
  ArrowRight,
  ExternalLink,
} from "lucide-react";
import { Button } from "@/components/ui/8bit/button";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { FadeIn } from "@/components/animations/fade-in";
import { StaggerContainer, StaggerItem } from "@/components/animations/stagger-container";
import { SlideIn } from "@/components/animations/slide-in";

const GOOGLE_FORMS_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLScyB-HegC1TqEaUqX6r_LszwN83f7Wj8nO9f-HjW_LhB5f80Q/viewform";

/* ── Stat cards data ───────────────────────────────────────────────── */

interface Stat {
  icon: React.ReactNode;
  value: string;
  label: string;
  color: string;
  bgColor: string;
}

const stats: Stat[] = [
  {
    icon: <AlertTriangle className="h-6 w-6" />,
    value: "36.9%",
    label: "de estudiantes cae en ataques de phishing",
    color: "text-destructive",
    bgColor: "bg-destructive/10",
  },
  {
    icon: <TrendingUp className="h-6 w-6" />,
    value: "68.88%",
    label: "de delitos informáticos en Perú son fraude digital",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    icon: <GraduationCap className="h-6 w-6" />,
    value: "0",
    label: "capacitaciones formales en ciberseguridad en la UNFV",
    color: "text-accent",
    bgColor: "bg-accent/10",
  },
];

/* ── Page component ────────────────────────────────────────────────── */

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground select-none">
      {/* ── Hero Section ──────────────────────────────────────────── */}
      <section
        id="hero"
        className="relative overflow-hidden border-b-4 border-border py-16 sm:py-24 bg-cover bg-center bg-no-repeat crt-flicker"
        style={{
          backgroundImage: "url('/images/python-animated.gif')",
        }}
      >
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-[#030708]/40 pointer-events-none" />

        {/* Pixel grid overlay effect */}
        <div 
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(var(--foreground) 1px, transparent 0)",
            backgroundSize: "8px 8px"
          }}
        />

        {/* CRT Scanlines overlay */}
        <div className="crt-scanlines" aria-hidden="true" />

        {/* CRT Vignette overlay */}
        <div className="crt-vignette" aria-hidden="true" />

        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">


            {/* Main heading */}
            <FadeIn delay={0.1} duration={0.5} yOffset={28}>
              <h1 
                className="text-lg sm:text-2xl lg:text-3xl leading-relaxed tracking-wider text-white font-bold"
                style={{ 
                  fontFamily: "'Press Start 2P', system-ui, sans-serif",
                  textShadow: "4px 4px 0px #000000"
                }}
              >
                Aprende a protegerte del{" "}
                <span className="text-primary block sm:inline mt-2 sm:mt-0" style={{ textShadow: "4px 4px 0px #000000" }}>Phishing</span>
              </h1>
            </FadeIn>

            {/* Subtitle */}
            <FadeIn delay={0.2} duration={0.5}>
              <p className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-white sm:text-lg font-medium drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                Plataforma educativa para la concientización y prevención de
                fraudes digitales, diseñada para estudiantes de la Facultad de
                Ciencias Sociales de la UNFV.
              </p>
            </FadeIn>

            {/* CTA buttons */}
            <FadeIn delay={0.35} duration={0.5}>
              <div className="mt-10 flex flex-col items-center justify-center gap-6 sm:flex-row">
                <Button
                  asChild
                  size="lg"
                  font="retro"
                  className="w-full sm:w-auto px-8 py-6 text-xs bg-primary text-primary-foreground hover:bg-primary/95 active:scale-[0.97]"
                >
                  <Link href="/aprender" id="cta-comenzar">
                    Comenzar
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  font="retro"
                  className="w-full sm:w-auto px-8 py-6 text-xs border-2 border-border bg-card hover:bg-muted active:scale-[0.97]"
                >
                  <a
                    href={GOOGLE_FORMS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    id="cta-evaluacion"
                  >
                    Evaluación
                    <ExternalLink className="ml-2 h-3.5 w-3.5" />
                  </a>
                </Button>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── Mini Summary Section ────────────────────────────────────────── */}
      <section id="mini-summary" className="px-4 py-12 sm:px-6 lg:px-8">
        <FadeIn yOffset={32}>
          <Card className="mx-auto max-w-4xl border-4 border-primary bg-card p-6 sm:p-10 shadow-[6px_6px_0px_0px_rgba(255,55,0,0.2)]">
            <div className="flex flex-col items-center text-center">
              <div className="mb-6 flex h-14 w-14 items-center justify-center border-2 border-primary bg-primary/10 text-primary">
                <Shield className="h-7 w-7" />
              </div>
              <h2 
                className="inline-flex items-center gap-3 text-sm sm:text-lg font-bold text-foreground tracking-wide"
                style={{ fontFamily: "'Press Start 2P', system-ui, sans-serif" }}
              >
                <svg width="20" height="20" viewBox="0 0 49 49" fill="none" className="shrink-0">
                  <circle cx="24.5" cy="24.5" r="22" stroke="#334155" strokeWidth="0" fill="#A3E635" />
                </svg>
                <span>¿Qué es el Phishing?</span>
              </h2>
              <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                Es un método de <strong className="text-foreground font-bold">engaño digital</strong> donde los atacantes se hacen pasar por instituciones confiables para robar tu información personal o contraseñas. No hackean tu computadora, <em className="text-primary font-bold not-italic">hackean tu mente</em> mediante la manipulación.
              </p>
            </div>
          </Card>
        </FadeIn>
      </section>

      {/* ── Stats Section ─────────────────────────────────────────── */}
      <section id="estadisticas" className="bg-background py-12 border-t-4 border-border">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          {/* Section heading */}
          <FadeIn>
            <div className="mb-12 text-center">
              <h2 
                className="inline-flex items-center gap-3 text-sm sm:text-lg font-bold text-foreground"
                style={{ fontFamily: "'Press Start 2P', system-ui, sans-serif" }}
              >
                <svg width="20" height="20" viewBox="0 0 49 49" fill="none" className="shrink-0">
                  <circle cx="24.5" cy="24.5" r="22" stroke="#334155" strokeWidth="0" fill="#A3E635" />
                </svg>
                <span>¿Por qué es importante?</span>
              </h2>
              <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
                Datos clave sobre la amenaza del phishing en el entorno
                universitario peruano.
              </p>
            </div>
          </FadeIn>

          {/* Stat cards — staggered cascade */}
          <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {stats.map((stat, i) => (
              <StaggerItem key={i}>
                <Card
                  id={`stat-card-${i}`}
                  className="border-4 border-border bg-card p-8 min-h-[260px] overflow-visible flex flex-col shadow-[6px_6px_0px_0px_var(--secondary)] transition-transform hover:-translate-y-1"
                >
                  <CardHeader className="p-0 mb-6">
                    {/* Icon with retro borders */}
                    <div className={`w-fit inline-flex border-2 border-current p-2.5 ${stat.color} ${stat.bgColor}`}>
                      {stat.icon}
                    </div>
                  </CardHeader>

                  <CardContent className="p-0 flex-1">
                    {/* Value in pixelated font */}
                    <p 
                      className="text-base sm:text-lg font-bold tracking-tight text-foreground"
                      style={{ fontFamily: "'Press Start 2P', system-ui, sans-serif" }}
                    >
                      {stat.value}
                    </p>

                    {/* Label */}
                    <p className="mt-4 text-base leading-snug text-muted-foreground">
                      {stat.label}
                    </p>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ── CTA Final Section ─────────────────────────────────────── */}
      <section
        id="cta-final"
        className="relative overflow-hidden bg-background border-t-4 border-border py-16"
      >
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-6 justify-center">
            {/* Avatar on the left — slides in from left */}
            <SlideIn direction="left" delay={0.1} className="shrink-0 flex items-center justify-center">
              <img 
                src="/images/pixel-avatar.png" 
                alt="Pixel Art Avatar" 
                className="w-16 h-16 md:w-20 md:h-20 object-contain"
                style={{ imageRendering: "pixelated" }}
              />
            </SlideIn>

            {/* Chat bubble — slides in from right */}
            <SlideIn direction="right" delay={0.2} className="relative flex-1 w-full">
              <div className="bg-card border border-border rounded-2xl p-5 md:p-6 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
                {/* Triangle pointer (visible on desktop) */}
                <div className="absolute left-[-8px] top-1/2 -translate-y-1/2 w-0 h-0 border-t-8 border-t-transparent border-b-8 border-b-transparent border-r-8 border-r-border hidden md:block" />
                <div className="absolute left-[-7px] top-1/2 -translate-y-1/2 w-0 h-0 border-t-8 border-t-transparent border-b-8 border-b-transparent border-r-8 border-r-card hidden md:block" />

                {/* Text */}
                <div className="text-center md:text-left">
                  <h2 
                    className="text-[9px] md:text-[10px] font-bold text-foreground leading-relaxed"
                    style={{ fontFamily: "'Press Start 2P', system-ui, sans-serif" }}
                  >
                    ¿Listo para poner a prueba tus conocimientos?
                  </h2>
                  <p className="mt-2 text-xs md:text-sm text-muted-foreground leading-relaxed">
                    Completa nuestra evaluación y descubre qué tanto sabes sobre ciberseguridad y prevención de fraudes.
                  </p>
                </div>

                {/* Button on the right */}
                <div className="shrink-0 w-full md:w-auto">
                  <Button
                    className="w-full md:w-auto bg-primary hover:bg-primary/85 text-primary-foreground font-semibold border-2 border-black rounded-lg px-6 py-5 shadow-[0px_4px_0px_0px_var(--ring)] active:translate-y-[2px] active:shadow-[0px_2px_0px_0px_var(--ring)] transition-all flex items-center justify-center gap-2 outline-none border-0"
                    asChild
                  >
                    <a
                      href={GOOGLE_FORMS_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      id="cta-evaluacion-final"
                    >
                      <span>Realizar evaluación</span>
                    </a>
                  </Button>
                </div>
              </div>
            </SlideIn>
          </div>
        </div>
      </section>
    </div>
  );
}
