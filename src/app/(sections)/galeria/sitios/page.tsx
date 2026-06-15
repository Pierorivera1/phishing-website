"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Globe,
  ShieldCheck,
  ShieldAlert,
  Lock,
  LockOpen,
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
    icon: <Lock size={20} />,
    title: "Verifica el candado HTTPS",
    description:
      "Haz clic en el candado del navegador para confirmar que el certificado de seguridad pertenece a la empresa real.",
  },
  {
    icon: <Link2 size={20} />,
    title: "Lee la URL completa",
    description:
      "Los atacantes usan dominios parecidos. Compara letra por letra con el sitio oficial antes de ingresar datos.",
  },
  {
    icon: <Eye size={20} />,
    title: "Busca errores visuales",
    description:
      "Logos borrosos, colores incorrectos, textos desalineados o enlaces rotos son señales de una copia.",
  },
  {
    icon: <Scale size={20} />,
    title: "Compara con el sitio oficial",
    description:
      "Abre el sitio real en otra pestaña y compara los detalles: diseño, URLs de enlaces internos y pie de página.",
  },
];

/* ── Page Component ────────────────────────────────────────────── */

export default function GaleriaSitiosPage() {
  const [activeTab, setActiveTab] = useState<"real" | "falso">("falso");
  const [activeAlert, setActiveAlert] = useState<number | null>(null);

  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-neutral-950">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-1/3 h-96 w-96 rounded-full bg-primary-500 blur-[120px]" />
          <div className="absolute bottom-0 right-1/3 h-96 w-96 rounded-full bg-danger-500 blur-[120px]" />
        </div>

        <div className="relative mx-auto max-w-6xl px-4 py-20 text-center sm:px-6 sm:py-28 lg:px-8">
          <div className="animate-fade-in-up mx-auto mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-500/20 text-primary-400 ring-1 ring-primary-500/30">
            <Globe size={28} />
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
      <section className="section-padding bg-white">
        <div className="mx-auto max-w-5xl">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-bold text-neutral-900 sm:text-4xl">
              Comparador: Real vs. Falso
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-neutral-500">
              Observa las diferencias entre un sitio web bancario legítimo y su
              copia fraudulenta.
            </p>
          </div>

          {/* Full comparison image */}
          <div className="overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-lg">
            <div className="relative aspect-[16/10] w-full bg-neutral-100 sm:aspect-[16/9]">
              <Image
                src="/images/sitios/comparacion_banco.png"
                alt="Comparación lado a lado entre un sitio web bancario real y su copia fraudulenta, mostrando 5 diferencias clave"
                fill
                className="object-contain"
                sizes="(max-width: 1024px) 100vw, 960px"
                priority
              />
            </div>
          </div>

          {/* Alert points grid */}
          <div className="mt-10">
            <h3 className="mb-6 text-center text-sm font-bold uppercase tracking-wider text-neutral-400">
              5 diferencias clave entre un sitio real y uno falso
            </h3>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {alertPoints.map((point) => (
                <button
                  key={point.id}
                  id={`alert-point-${point.id}`}
                  className={`group flex gap-3 rounded-2xl border p-5 text-left transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md ${
                    activeAlert === point.id
                      ? "border-danger-300 bg-danger-50 shadow-md"
                      : "border-neutral-200 bg-white shadow-sm"
                  }`}
                  onClick={() =>
                    setActiveAlert(
                      activeAlert === point.id ? null : point.id
                    )
                  }
                  aria-expanded={activeAlert === point.id}
                >
                  <div
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-bold text-white ${
                      activeAlert === point.id
                        ? "bg-danger-600"
                        : "bg-neutral-800"
                    } hotspot transition-colors`}
                    style={{
                      animationPlayState:
                        activeAlert === point.id ? "running" : "paused",
                    }}
                  >
                    {point.id}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-neutral-900">
                      {point.label}
                    </p>
                    <p
                      className={`mt-1 text-xs leading-relaxed text-neutral-500 transition-all duration-300 ${
                        activeAlert === point.id
                          ? "max-h-40 opacity-100"
                          : "max-h-0 overflow-hidden opacity-0 sm:max-h-40 sm:opacity-100"
                      }`}
                    >
                      {point.description}
                    </p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Checklist comparativa ─────────────────────────────── */}
      <section className="border-y border-neutral-200 bg-neutral-50 py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h3 className="mb-8 text-center text-2xl font-bold text-neutral-900">
            Checklist de verificación rápida
          </h3>

          <div className="overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm">
            {/* Header row */}
            <div className="grid grid-cols-3 border-b border-neutral-200 bg-neutral-50 text-center">
              <div className="p-4 text-sm font-bold text-neutral-700">
                Característica
              </div>
              <div className="flex items-center justify-center gap-1.5 border-l border-neutral-200 p-4 text-sm font-bold text-emerald-700">
                <ShieldCheck size={16} />
                Sitio Real
              </div>
              <div className="flex items-center justify-center gap-1.5 border-l border-neutral-200 p-4 text-sm font-bold text-danger-700">
                <ShieldAlert size={16} />
                Sitio Falso
              </div>
            </div>

            {/* Rows */}
            {realVsFakeChecks.map((check, i) => (
              <div
                key={i}
                className="grid grid-cols-3 border-b border-neutral-100 last:border-b-0 transition-colors hover:bg-neutral-50"
              >
                <div className="flex items-center p-4 text-sm text-neutral-700">
                  {check.label}
                </div>
                <div className="flex items-center justify-center border-l border-neutral-100 p-4">
                  {check.real ? (
                    <CheckCircle2
                      size={20}
                      className="text-emerald-500"
                    />
                  ) : (
                    <XCircle size={20} className="text-danger-400" />
                  )}
                </div>
                <div className="flex items-center justify-center border-l border-neutral-100 p-4">
                  {check.fake ? (
                    <CheckCircle2
                      size={20}
                      className="text-danger-500"
                    />
                  ) : (
                    <XCircle size={20} className="text-neutral-300" />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Consejos para reconocer webs falsas ──────────────── */}
      <section className="section-padding bg-white">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 text-center">
            <span className="mb-3 inline-flex items-center gap-1.5 rounded-full bg-primary-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary-700">
              <FileWarning size={14} />
              Guía rápida
            </span>
            <h2 className="text-3xl font-bold text-neutral-900">
              ¿Cómo reconocer una página web falsa?
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-neutral-500">
              Basado en recomendaciones de ESET y Kaspersky para identificar
              sitios clonados.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {websiteTips.map((tip, i) => (
              <div
                key={i}
                className="group flex gap-4 rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md sm:p-8"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary-50 text-primary-600 ring-1 ring-primary-100 transition-transform duration-300 group-hover:scale-110">
                  {tip.icon}
                </div>
                <div>
                  <h3 className="text-base font-bold text-neutral-900 sm:text-lg">
                    {tip.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-neutral-500">
                    {tip.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Navigation CTA ───────────────────────────────────── */}
      <section className="border-t border-neutral-200 bg-white">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-4 py-12 sm:flex-row sm:px-6 lg:px-8">
          <div>
            <h3 className="text-xl font-bold text-neutral-900">
              ¿Quieres aprender a protegerte?
            </h3>
            <p className="mt-1 text-sm text-neutral-500">
              Descubre consejos prácticos y recomendaciones de seguridad
              digital.
            </p>
          </div>
          <div className="flex gap-3">
            <Link
              href="/consejos"
              className="inline-flex items-center gap-2 rounded-xl bg-primary-600 px-6 py-3 text-sm font-semibold text-white shadow-md transition-all hover:bg-primary-700 active:scale-95"
            >
              Ver consejos
              <ArrowRight size={18} />
            </Link>
            <Link
              href="/galeria/correos"
              className="inline-flex items-center gap-2 rounded-xl border border-neutral-300 bg-white px-6 py-3 text-sm font-semibold text-neutral-700 shadow-sm transition-all hover:border-primary-300 hover:bg-primary-50 hover:text-primary-700 active:scale-95"
            >
              Correos
              <ChevronRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
