import Link from "next/link";
import {
  Shield,
  AlertTriangle,
  TrendingUp,
  GraduationCap,
  ArrowRight,
  ExternalLink,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent } from "@/components/ui/card";

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
    icon: <AlertTriangle className="h-7 w-7" />,
    value: "36.9%",
    label: "de estudiantes cae en ataques de phishing",
    color: "text-destructive",
    bgColor: "bg-destructive/10",
  },
  {
    icon: <TrendingUp className="h-7 w-7" />,
    value: "68.88%",
    label: "de delitos informáticos en Perú son fraude digital",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    icon: <GraduationCap className="h-7 w-7" />,
    value: "0",
    label: "capacitaciones formales en ciberseguridad en la UNFV",
    color: "text-amber-600 dark:text-amber-500",
    bgColor: "bg-amber-100/50 dark:bg-amber-950/30",
  },
];

/* ── Page component ────────────────────────────────────────────────── */

export default function HomePage() {
  return (
    <>
      {/* ── Hero Section ──────────────────────────────────────────── */}
      <section
        id="hero"
        className="relative overflow-hidden"
      >
        {/* Background gradient */}
        <div
          className="absolute inset-0 -z-10 bg-primary/5"
        />

        {/* Decorative blobs */}
        <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-primary/10 opacity-30 blur-3xl" />
        <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-primary/20 opacity-20 blur-3xl" />

        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-36">
          <div className="mx-auto max-w-3xl text-center">
            {/* Main heading */}
            <h1 className="animate-fade-in-up text-4xl font-extrabold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl"
                style={{ animationDelay: "100ms" }}
            >
              Aprende a protegerte del{" "}
              <span className="text-primary font-extrabold">Phishing</span>
            </h1>

            {/* Subtitle */}
            <p
              className="animate-fade-in-up mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg"
              style={{ animationDelay: "200ms" }}
            >
              Plataforma educativa para la concientización y prevención de
              fraudes digitales, diseñada para estudiantes de la Facultad de
              Ciencias Sociales de la UNFV.
            </p>

            {/* CTA buttons */}
            <div
              className="animate-fade-in-up mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
              style={{ animationDelay: "300ms" }}
            >
              <Button
                asChild
                size="lg"
                className="animate-pulse-glow w-full sm:w-auto rounded-xl px-7 py-6 text-sm font-semibold shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 active:scale-[0.97]"
              >
                <Link href="/aprender" id="cta-comenzar">
                  Comenzar
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="w-full sm:w-auto rounded-xl border-border bg-card px-7 py-6 text-sm font-semibold hover:bg-primary/5 hover:text-primary active:scale-[0.97]"
              >
                <a
                  href={GOOGLE_FORMS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="cta-evaluacion"
                >
                  Ir a la evaluación
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ── Mini Summary Section ────────────────────────────────────────── */}
      <section id="mini-summary" className="bg-background px-4 py-12 sm:px-6 lg:px-8">
        <Card className="mx-auto max-w-4xl relative overflow-hidden p-8 text-center shadow-lg shadow-neutral-200/30 dark:shadow-none border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/10 hover:ring-1 hover:ring-primary/30 sm:p-10">
          <div className="absolute top-0 left-0 w-full h-1.5 bg-primary" />
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary ring-1 ring-primary/20">
            <Shield className="h-6 w-6" />
          </div>
          <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
            ¿Qué es el Phishing?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Es un método de <strong className="text-foreground">engaño digital</strong> donde los atacantes se hacen pasar por instituciones confiables para robar tu información personal o contraseñas. No hackean tu computadora, <em className="text-primary font-medium not-italic">hackean tu mente</em> mediante la manipulación.
          </p>
        </Card>
      </section>

      {/* ── Stats Section ─────────────────────────────────────────── */}
      <section id="estadisticas" className="section-padding bg-background py-16">
        <div className="mx-auto max-w-6xl">
          {/* Section heading */}
          <div className="mb-12 text-center">
            <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
              ¿Por qué es importante?
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
              Datos clave sobre la amenaza del phishing en el entorno
              universitario peruano.
            </p>
          </div>

          {/* Stat cards */}
          <div className="stagger grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {stats.map((stat, i) => (
              <Card
                key={i}
                id={`stat-card-${i}`}
                className="animate-fade-in-up group relative overflow-hidden border-border bg-card p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <CardHeader className="p-0 mb-5">
                  {/* Icon */}
                  <div
                    className={`inline-flex rounded-xl p-3 ${stat.bgColor} ${stat.color}`}
                  >
                    {stat.icon}
                  </div>
                </CardHeader>

                <CardContent className="p-0">
                  {/* Value */}
                  <p className="text-4xl font-extrabold tracking-tight text-foreground">
                    {stat.value}
                  </p>

                  {/* Label */}
                  <p className="mt-2 text-sm leading-snug text-muted-foreground">
                    {stat.label}
                  </p>
                </CardContent>

                {/* Decorative gradient on hover */}
                <div className="absolute -bottom-12 -right-12 h-32 w-32 rounded-full bg-primary/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Final Section ─────────────────────────────────────── */}
      <section
        id="cta-final"
        className="relative overflow-hidden bg-primary"
      >
        {/* Decorative */}
        <div className="absolute top-0 left-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/10 blur-3xl" />

        <div className="relative mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 sm:py-20 lg:px-8">
          <h2 className="text-2xl font-bold text-primary-foreground sm:text-3xl lg:text-4xl">
            ¿Listo para poner a prueba tus conocimientos?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-primary-foreground/85 sm:text-base">
            Completa nuestra evaluación y descubre qué tanto sabes sobre
            ciberseguridad y prevención de fraudes digitales.
          </p>
          <Button
            asChild
            size="lg"
            variant="secondary"
            className="mt-8 bg-white hover:bg-neutral-100 text-primary hover:text-primary-600 rounded-xl px-8 py-6 text-sm font-semibold shadow-lg transition-all duration-200 active:scale-[0.97]"
          >
            <a
              href={GOOGLE_FORMS_URL}
              target="_blank"
              rel="noopener noreferrer"
              id="cta-evaluacion-final"
            >
              Realizar evaluación
              <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </section>
    </>
  );
}
