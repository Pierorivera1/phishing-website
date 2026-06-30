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
import { Button } from "@/components/ui/8bit/button";
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
      <section 
        className="relative overflow-hidden border-b-4 border-border py-16 sm:py-24 bg-cover bg-center bg-no-repeat crt-flicker"
        style={{
          backgroundImage: "url('/images/pythonbannerbackground.png')",
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

        <div className="relative mx-auto max-w-6xl px-4 py-10 text-center sm:px-6 lg:px-8">
          <div className="animate-fade-in-up mx-auto mb-5 inline-flex h-14 w-14 items-center justify-center rounded-none border-2 border-border bg-primary/10 text-primary shadow-[2px_2px_0px_0px_rgba(0,0,0,0.5)]">
            <Globe className="h-7 w-7" />
          </div>
          <h1
            className="animate-fade-in-up text-3xl font-bold text-white sm:text-4xl"
            style={{ 
              fontFamily: "'Pixelify Sans', system-ui, sans-serif", 
              animationDelay: "100ms",
              textShadow: "3px 3px 0px #000000"
            }}
          >
            Sitios Web Fraudulentos
          </h1>
          <p
            className="animate-fade-in-up mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white sm:text-lg font-medium drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]"
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
            <h2 
              className="text-2xl font-bold text-foreground sm:text-3xl"
              style={{ fontFamily: "'Pixelify Sans', system-ui, sans-serif" }}
            >
              Comparador: Real vs. Falso
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
              Observa las diferencias entre un sitio web bancario legítimo y su
              copia fraudulenta.
            </p>
          </div>

          {/* Full comparison image */}
          <Card className="overflow-hidden rounded-none border-4 border-border bg-card shadow-[8px_8px_0px_0px_var(--secondary)]">
            <CardContent className="p-0 relative aspect-[16/10] w-full bg-muted sm:aspect-[16/9]">
              {/* Threat bar — simulates browser/antivirus phishing detection */}
              <div 
                className="threat-bar absolute top-0 left-0 right-0 z-10 flex items-center gap-2 bg-destructive px-3 py-1.5 text-destructive-foreground"
                aria-label="Alerta de seguridad: sitio de phishing detectado"
              >
                <ShieldAlert className="h-3.5 w-3.5 shrink-0 animate-pulse" />
                <span className="text-[10px] font-bold uppercase tracking-wider font-mono">
                  ⚠ Phishing Detectado — Sitio No Seguro
                </span>
                <span className="ml-auto text-[9px] font-mono opacity-70 hidden sm:inline">
                  unfv-scanner v1.0
                </span>
              </div>
              <Image
                src="/images/sitios/comparacion_banco.webp"
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
                      "group relative flex gap-3 p-5 text-left cursor-pointer transition-all duration-300 rounded-none border-4 border-border bg-card shadow-[4px_4px_0px_0px_var(--secondary)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_var(--secondary)]",
                      isActive
                        ? "alert-card-active border-destructive/60 bg-destructive/5 shadow-none"
                        : ""
                    )}
                    role="button"
                    tabIndex={0}
                    aria-expanded={isActive}
                  >
                    {/* Scan sweep line — re-mounts on each activation via key */}
                    {isActive && <div key={`sweep-${point.id}-${Date.now()}`} className="scan-sweep-line" />}

                    <div
                      className={cn(
                        "flex h-8 w-8 shrink-0 items-center justify-center rounded-none border-2 border-border text-sm font-bold text-white transition-colors",
                        isActive ? "bg-destructive hotspot" : "bg-neutral-800 dark:bg-neutral-700"
                      )}
                    >
                      {point.id}
                    </div>
                    <div>
                      <p 
                        className="text-sm font-bold text-foreground"
                        style={{ fontFamily: "'Pixelify Sans', system-ui, sans-serif" }}
                      >
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
      <section className="border-y-4 border-border bg-muted/20 py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h3 
            className="mb-8 text-center text-xl font-bold text-foreground sm:text-2xl"
            style={{ fontFamily: "'Pixelify Sans', system-ui, sans-serif" }}
          >
            Checklist de verificación rápida
          </h3>

          <Card className="overflow-hidden rounded-none border-4 border-border bg-card shadow-[6px_6px_0px_0px_var(--secondary)]">
            <CardContent className="p-0">
              {/* Header row */}
              <div className="grid grid-cols-3 border-b-2 border-border bg-muted/50 text-center">
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
            <Badge variant="outline" className="mb-3 inline-flex items-center gap-1.5 rounded-none border-2 border-primary/20 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
              <FileWarning className="h-3.5 w-3.5" />
              Guía rápida
            </Badge>
            <h2 
              className="text-2xl font-bold text-foreground sm:text-3xl"
              style={{ fontFamily: "'Pixelify Sans', system-ui, sans-serif" }}
            >
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
                className="group flex gap-4 rounded-none border-4 border-border bg-card p-6 shadow-[4px_4px_0px_0px_var(--secondary)] transition-all duration-300 hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_var(--secondary)] sm:p-8"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-none border-2 border-border bg-primary/10 text-primary ring-1 ring-primary/20 transition-transform duration-300">
                  {tip.icon}
                </div>
                <div>
                  <h3 
                    className="text-base font-bold text-foreground sm:text-lg"
                    style={{ fontFamily: "'Pixelify Sans', system-ui, sans-serif" }}
                  >
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
      <section className="border-t-4 border-border bg-card py-6">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-4 py-8 sm:flex-row sm:px-6 lg:px-8">
          <div>
            <h3 
              className="text-lg font-bold text-foreground"
              style={{ fontFamily: "'Pixelify Sans', system-ui, sans-serif" }}
            >
              ¿Quieres aprender a protegerte?
            </h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Descubre consejos prácticos y recomendaciones de seguridad
              digital.
            </p>
          </div>
          <div className="flex gap-3 w-full sm:w-auto">
            <Button 
              asChild 
              font="normal"
              className="px-6 py-5 text-sm bg-primary text-primary-foreground hover:bg-primary/95 active:scale-[0.97] flex-1 sm:flex-none"
              style={{ fontFamily: "'Pixelify Sans', system-ui, sans-serif" }}
            >
              <Link href="/consejos">
                Ver consejos
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button 
              asChild 
              variant="outline" 
              font="normal"
              className="px-6 py-5 text-sm border-2 border-border bg-card hover:bg-muted active:scale-[0.97] flex-1 sm:flex-none"
              style={{ fontFamily: "'Pixelify Sans', system-ui, sans-serif" }}
            >
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
