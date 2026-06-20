"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Globe,
  ShieldCheck,
  ShieldAlert,
  Lock,
  Link2,
  FileWarning,
  AlertCircle,
  Scale,
  ArrowRight,
  ChevronRight,
  Eye,
  CheckCircle2,
  XCircle,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

/* ── Interfaces ────────────────────────────────────────────────── */

interface AlertPoint {
  id: number;
  label: string;
  description: string;
}

/* ── Data ──────────────────────────────────────────────────────── */

const alertPoints: AlertPoint[] = [
  {
    id: 1,
    label: "URL manipulada",
    description:
      "El dominio usa caracteres similares: 'banc0naci0nal-login.com' en vez de 'banconacional.com.pe'. Cambian letras por números (o→0) o agregan palabras extra.",
  },
  {
    id: 2,
    label: "Sin HTTPS / Sin candado",
    description:
      "Los sitios legítimos de bancos e instituciones siempre usan HTTPS (candado verde). Un sitio que muestra 'No seguro' nunca debe usarse para ingresar datos.",
  },
  {
    id: 3,
    label: "Logo de baja calidad",
    description:
      "El logo aparece pixelado, con colores ligeramente diferentes o con proporciones incorrectas. Los atacantes copian el diseño pero no siempre logran la misma calidad.",
  },
  {
    id: 4,
    label: "Formularios con campos extra",
    description:
      "Un banco real solo pide DNI y contraseña para iniciar sesión. Si el formulario pide número de tarjeta, CVV o fecha de expiración en la página de login, es fraude.",
  },
  {
    id: 5,
    label: "Sin información legal",
    description:
      "Los sitios legítimos incluyen Términos y Condiciones, Política de Privacidad y datos de contacto verificables. Los sitios falsos omiten esta información.",
  },
];

const realVsFakeChecks = [
  {
    label: "Certificado HTTPS válido",
    real: true,
    fake: false,
  },
  {
    label: "Dominio oficial (.com.pe / .edu.pe)",
    real: true,
    fake: false,
  },
  {
    label: "Logo de alta resolución",
    real: true,
    fake: false,
  },
  {
    label: "Solo pide usuario y contraseña",
    real: true,
    fake: false,
  },
  {
    label: "Información legal visible",
    real: true,
    fake: false,
  },
  {
    label: "Pide datos de tarjeta en login",
    real: false,
    fake: true,
  },
];

const websiteTips = [
  {
    icon: <Lock className="h-5 w-5" />,
    title: "Verifica el candado HTTPS",
    description:
      "Haz clic en el candado del navegador para confirmar que el certificado de seguridad pertenece a la empresa real.",
  },
  {
    icon: <Link2 className="h-5 w-5" />,
    title: "Lee la URL completa",
    description:
      "Los atacantes usan dominios parecidos. Compara letra por letra con el sitio oficial antes de ingresar datos.",
  },
  {
    icon: <Eye className="h-5 w-5" />,
    title: "Busca errores visuales",
    description:
      "Logos borrosos, colores incorrectos, textos desalineados o enlaces rotos son señales de una copia.",
  },
  {
    icon: <Scale className="h-5 w-5" />,
    title: "Compara con el sitio oficial",
    description:
      "Abre el sitio real en otra pestaña y compara los detalles: diseño, URLs de enlaces internos y pie de página.",
  },
];

/* ── Page Component ────────────────────────────────────────────── */

export default function GaleriaSitiosPage() {
  const [activeAlert, setActiveAlert] = useState<number | null>(null);

  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-neutral-950 py-16 sm:py-24">
        {/* Decorative background blobs */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-1/3 h-96 w-96 rounded-full bg-primary blur-[120px]" />
          <div className="absolute bottom-0 right-1/3 h-96 w-96 rounded-full bg-destructive blur-[120px]" />
        </div>

        <div className="relative mx-auto max-w-6xl px-4 py-10 text-center sm:px-6 lg:px-8">
          <div className="animate-fade-in-up mx-auto mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary ring-1 ring-primary/20">
            <Globe className="h-7 w-7" />
          </div>
          <h1
            className="animate-fade-in-up text-4xl font-extrabold tracking-tight text-white sm:text-5xl"
            style={{ animationDelay: "100ms" }}
          >
            Sitios Web Fraudulentos
          </h1>
          <p
            className="animate-fade-in-up mx-auto mt-5 max-w-2xl text-base leading-relaxed text-neutral-300 sm:text-lg"
            style={{ animationDelay: "200ms" }}
          >
            Aprende a distinguir un sitio web real de una copia fraudulenta
            comparando los detalles clave que los delatan.
          </p>
        </div>
      </section>

      {/* ── Comparador principal ──────────────────────────────── */}
      <section className="section-padding bg-background py-16">
        <div className="mx-auto max-w-5xl px-4">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
              Comparador: Real vs. Falso
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
              Observa las diferencias entre un sitio web bancario legítimo y su
              copia fraudulenta.
            </p>
          </div>

          {/* Full comparison image */}
          <Card className="overflow-hidden border-border bg-card shadow-lg">
            <CardContent className="p-0 relative aspect-[16/10] w-full bg-muted sm:aspect-[16/9]">
              <Image
                src="/images/sitios/comparacion_banco.png"
                alt="Comparación lado a lado entre un sitio web bancario real y su copia fraudulenta, mostrando 5 diferencias clave"
                fill
                className="object-contain"
                sizes="(max-width: 1024px) 100vw, 960px"
                priority
              />
            </CardContent>
          </Card>

          {/* Alert points grid */}
          <div className="mt-12">
            <h3 className="mb-6 text-center text-xs font-bold uppercase tracking-wider text-muted-foreground">
              5 diferencias clave entre un sitio real y uno falso
            </h3>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {alertPoints.map((point) => {
                const isActive = activeAlert === point.id;
                return (
                  <Card
                    key={point.id}
                    id={`alert-point-${point.id}`}
                    onClick={() =>
                      setActiveAlert(
                        activeAlert === point.id ? null : point.id
                      )
                    }
                    className={cn(
                      "group flex gap-3 p-5 text-left cursor-pointer transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md border-border bg-card",
                      isActive
                        ? "border-destructive/30 bg-destructive/5 shadow-md"
                        : "shadow-sm"
                    )}
                    role="button"
                    tabIndex={0}
                    aria-expanded={isActive}
                  >
                    <div
                      className={cn(
                        "flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-bold text-white transition-colors",
                        isActive ? "bg-destructive" : "bg-neutral-800 dark:bg-neutral-700"
                      )}
                    >
                      {point.id}
                    </div>
                    <div>
                      <p className="text-sm font-bold text-foreground">
                        {point.label}
                      </p>
                      <p
                        className={cn(
                          "mt-1 text-xs leading-relaxed text-muted-foreground transition-all duration-300",
                          isActive
                            ? "max-h-40 opacity-100 mt-2"
                            : "max-h-0 overflow-hidden opacity-0 sm:max-h-40 sm:opacity-100"
                        )}
                      >
                        {point.description}
                      </p>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── Checklist comparativa ─────────────────────────────── */}
      <section className="border-y border-border bg-muted/20 py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h3 className="mb-8 text-center text-2xl font-bold text-foreground">
            Checklist de verificación rápida
          </h3>

          <Card className="overflow-hidden border-border bg-card shadow-sm">
            <CardContent className="p-0">
              {/* Header row */}
              <div className="grid grid-cols-3 border-b border-border bg-muted/50 text-center">
                <div className="p-4 text-sm font-bold text-foreground">
                  Característica
                </div>
                <div className="flex items-center justify-center gap-1.5 border-l border-border p-4 text-sm font-bold text-emerald-600 dark:text-emerald-500">
                  <ShieldCheck className="h-4.5 w-4.5" />
                  Sitio Real
                </div>
                <div className="flex items-center justify-center gap-1.5 border-l border-border p-4 text-sm font-bold text-destructive">
                  <ShieldAlert className="h-4.5 w-4.5" />
                  Sitio Falso
                </div>
              </div>

              {/* Rows */}
              {realVsFakeChecks.map((check, i) => (
                <div
                  key={i}
                  className="grid grid-cols-3 border-b border-border last:border-b-0 transition-colors hover:bg-muted/10"
                >
                  <div className="flex items-center p-4 text-sm text-foreground">
                    {check.label}
                  </div>
                  <div className="flex items-center justify-center border-l border-border p-4">
                    {check.real ? (
                      <CheckCircle2
                        className="h-5 w-5 text-emerald-500"
                      />
                    ) : (
                      <XCircle className="h-5 w-5 text-destructive" />
                    )}
                  </div>
                  <div className="flex items-center justify-center border-l border-border p-4">
                    {check.fake ? (
                      <CheckCircle2
                        className="h-5 w-5 text-destructive"
                      />
                    ) : (
                      <XCircle className="h-5 w-5 text-muted-foreground/30" />
                    )}
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </section>

      {/* ── Consejos para reconocer webs falsas ──────────────── */}
      <section className="section-padding bg-background py-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mb-10 text-center">
            <Badge variant="outline" className="mb-3 inline-flex items-center gap-1.5 rounded-full bg-primary/10 border-primary/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
              <FileWarning className="h-3.5 w-3.5" />
              Guía rápida
            </Badge>
            <h2 className="text-3xl font-bold text-foreground">
              ¿Cómo reconocer una página web falsa?
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
              Basado en recomendaciones de ESET y Kaspersky para identificar
              sitios clonados.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {websiteTips.map((tip, i) => (
              <Card
                key={i}
                className="group flex gap-4 border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md sm:p-8"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/20 transition-transform duration-300 group-hover:scale-110">
                  {tip.icon}
                </div>
                <div>
                  <h3 className="text-base font-bold text-foreground sm:text-lg">
                    {tip.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {tip.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ── Navigation CTA ───────────────────────────────────── */}
      <section className="border-t border-border bg-card">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-4 py-12 sm:flex-row sm:px-6 lg:px-8">
          <div>
            <h3 className="text-xl font-bold text-foreground">
              ¿Quieres aprender a protegerte?
            </h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Descubre consejos prácticos y recomendaciones de seguridad
              digital.
            </p>
          </div>
          <div className="flex gap-3 w-full sm:w-auto">
            <Button asChild className="rounded-xl px-6 py-5 text-sm font-semibold flex-1 sm:flex-none">
              <Link href="/consejos">
                Ver consejos
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" className="rounded-xl px-6 py-5 text-sm font-semibold border-border flex-1 sm:flex-none">
              <Link href="/galeria/correos">
                Correos
                <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
