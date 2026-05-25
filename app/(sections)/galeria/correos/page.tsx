"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Mail,
  AlertTriangle,
  Link2,
  UserX,
  PenLine,
  ShieldCheck,
  ShieldAlert,
  Eye,
  ArrowRight,
  ChevronRight,
} from "lucide-react";

/* ── Interfaces ────────────────────────────────────────────────── */

interface PhishingEmail {
  id: string;
  src: string;
  alt: string;
  title: string;
  badge: "fraude" | "legitimo";
  tipo: string;
  indicators: string[];
  explanation: string;
}

/* ── Data ──────────────────────────────────────────────────────── */

const emails: PhishingEmail[] = [
  {
    id: "correo-banco",
    src: "/images/correos/correo1.png",
    alt: "Correo fraudulento suplantando a un banco",
    title: "Alerta bancaria falsa",
    badge: "fraude",
    tipo: "Suplantación de banco",
    indicators: [
      "Remitente con dominio sospechoso",
      "Asunto alarmante de urgencia",
      "Errores gramaticales y ortográficos",
      "Enlace acortado sospechoso",
    ],
    explanation:
      "Este correo simula ser de un banco para robar tus credenciales. Los bancos nunca piden que ingreses tu contraseña por correo electrónico.",
  },
  {
    id: "correo-universidad",
    src: "/images/correos/correo2.png",
    alt: "Correo fraudulento suplantando una universidad",
    title: "Beca internacional falsa",
    badge: "fraude",
    tipo: "Suplantación de universidad",
    indicators: [
      "Dominio de email extraño (no oficial)",
      "Oferta demasiado buena para ser verdad",
      "Solicitud de datos personales",
      "Sentido de urgencia artificial",
    ],
    explanation:
      "Usa el pretexto de una beca para obtener información personal. Las becas reales se comunican por canales oficiales de la universidad.",
  },
  {
    id: "correo-premio",
    src: "/images/correos/correo3.png",
    alt: "Correo fraudulento de premio falso",
    title: "Premio ficticio (Baiting)",
    badge: "fraude",
    tipo: "Ataque tipo Baiting",
    indicators: [
      "Saludo genérico (sin personalización)",
      "Promesa no realista de premio",
      "Dominio del remitente sospechoso",
      "Enlace que no corresponde a la marca",
    ],
    explanation:
      "Explota la curiosidad ofreciendo algo que deseas. Si no participaste en ningún concurso, es un fraude. El 57.3% de estudiantes haría clic en un enlace así (Abdulla et al., 2023).",
  },
  {
    id: "correo-sms",
    src: "/images/correos/correo4.png",
    alt: "Ejemplo de smishing (phishing por SMS)",
    title: "Smishing — Alerta por SMS",
    badge: "fraude",
    tipo: "Smishing (SMS)",
    indicators: [
      "Tono de urgencia para generar pánico",
      "No especifica el nombre del banco",
      "Enlace acortado y sospechoso",
      "Solicitud directa de hacer clic",
    ],
    explanation:
      "El smishing usa mensajes de texto para presionarte a actuar rápido. Los bancos reales no envían enlaces por SMS para gestionar tu cuenta.",
  },
  {
    id: "correo-red-social",
    src: "/images/correos/correo5.png",
    alt: "Correo suplantando a Instagram",
    title: "Alerta de seguridad falsa",
    badge: "fraude",
    tipo: "Suplantación de red social",
    indicators: [
      "Remitente de dominio no oficial",
      "Saludo genérico impersonal",
      "Lenguaje urgente para asustar",
      "Botón que enlaza a sitio fraudulento",
    ],
    explanation:
      "Los atacantes imitan alertas de seguridad de redes sociales para que ingreses tus credenciales en un sitio falso.",
  },
  {
    id: "correo-delivery",
    src: "/images/correos/correo6.png",
    alt: "Correo suplantando un servicio de envíos",
    title: "Paquete no entregado (Delivery)",
    badge: "fraude",
    tipo: "Suplantación de servicio de envíos",
    indicators: [
      "Dominio del remitente falso",
      "Solicitud de pago de una tasa pequeña",
      "Número de seguimiento inventado",
      "URL que no corresponde a la empresa",
    ],
    explanation:
      "Explotan la expectativa de un paquete para pedir datos de tarjeta de crédito. Un servicio real no cobra cargos extra de este modo.",
  },
  {
    id: "correo-legitimo",
    src: "/images/correos/correo_no_fraudulento.png",
    alt: "Correo legítimo de la UNFV",
    title: "Correo legítimo — UNFV",
    badge: "legitimo",
    tipo: "Correo verificado",
    indicators: [
      "Dominio oficial (@unfv.edu.pe)",
      "Saludo personalizado con tu nombre",
      "Redacción profesional sin errores",
      "Enlace al dominio oficial",
    ],
    explanation:
      "Este correo cumple con todas las señales de legitimidad: dominio oficial, saludo personalizado, redacción profesional y enlaces verificables.",
  },
];

/* ── Indicadores principales ───────────────────────────────────── */

const mainIndicators = [
  {
    icon: <Link2 size={20} />,
    label: "Enlaces sospechosos",
    stat: "75%",
    color: "text-danger-600",
    bg: "bg-danger-50",
  },
  {
    icon: <UserX size={20} />,
    label: "Remitente inusual",
    stat: "62.9%",
    color: "text-primary-600",
    bg: "bg-primary-50",
  },
  {
    icon: <AlertTriangle size={20} />,
    label: "Presión psicológica",
    stat: "48.6%",
    color: "text-amber-600",
    bg: "bg-amber-50",
  },
  {
    icon: <PenLine size={20} />,
    label: "Mala redacción",
    stat: "40%",
    color: "text-emerald-600",
    bg: "bg-emerald-50",
  },
];

/* ── Page Component ────────────────────────────────────────────── */

export default function GaleriaCorreosPage() {
  const [activeCard, setActiveCard] = useState<string | null>(null);

  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-neutral-950">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-danger-500 blur-[120px]" />
          <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-amber-500 blur-[120px]" />
        </div>

        <div className="relative mx-auto max-w-6xl px-4 py-20 text-center sm:px-6 sm:py-28 lg:px-8">
          <div className="animate-fade-in-up mx-auto mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-danger-500/20 text-danger-400 ring-1 ring-danger-500/30">
            <Mail size={28} />
          </div>
          <h1
            className="animate-fade-in-up text-4xl font-extrabold tracking-tight text-white sm:text-5xl"
            style={{ animationDelay: "100ms" }}
          >
            Galería de Correos Fraudulentos
          </h1>
          <p
            className="animate-fade-in-up mx-auto mt-5 max-w-2xl text-base leading-relaxed text-neutral-300 sm:text-lg"
            style={{ animationDelay: "200ms" }}
          >
            Analiza ejemplos reales de correos de phishing y aprende a
            identificar las señales de fraude antes de hacer clic.
          </p>
        </div>
      </section>

      {/* ── Indicadores principales ───────────────────────────── */}
      <section className="border-b border-neutral-200 bg-white py-10">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-6 text-center text-sm font-bold uppercase tracking-wider text-neutral-400">
            Los 4 indicadores más detectados por estudiantes (Shahbazi et al.,
            2025)
          </h2>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {mainIndicators.map((ind, i) => (
              <div
                key={i}
                className="flex flex-col items-center gap-2 rounded-2xl border border-neutral-200 bg-white p-5 text-center shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
              >
                <div
                  className={`inline-flex h-10 w-10 items-center justify-center rounded-xl ${ind.bg} ${ind.color}`}
                >
                  {ind.icon}
                </div>
                <span className="text-2xl font-extrabold tracking-tight text-neutral-900">
                  {ind.stat}
                </span>
                <span className="text-xs font-medium text-neutral-500">
                  {ind.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Gallery Grid ─────────────────────────────────────── */}
      <section className="section-padding bg-neutral-50">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-bold text-neutral-900 sm:text-4xl">
              Ejemplos de correos
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-neutral-500">
              Haz clic o pasa el cursor sobre cada tarjeta para ver los
              indicadores de fraude.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {emails.map((email) => {
              const isFraude = email.badge === "fraude";
              const isActive = activeCard === email.id;

              return (
                <article
                  key={email.id}
                  id={`gallery-${email.id}`}
                  className="gallery-card group cursor-pointer border border-neutral-200 bg-white shadow-sm transition-shadow duration-300 hover:shadow-xl"
                  onClick={() =>
                    setActiveCard(isActive ? null : email.id)
                  }
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      setActiveCard(isActive ? null : email.id);
                    }
                  }}
                  tabIndex={0}
                  role="button"
                  aria-expanded={isActive}
                  aria-label={`Ver indicadores de: ${email.title}`}
                >
                  {/* Image */}
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-neutral-100">
                    <Image
                      src={email.src}
                      alt={email.alt}
                      fill
                      className="card-image object-cover object-top"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      loading={email.id === "correo-banco" ? "eager" : "lazy"}
                      priority={email.id === "correo-banco"}
                    />

                    {/* Badge */}
                    <div className="absolute top-3 left-3 z-10">
                      {isFraude ? (
                        <span className="inline-flex items-center gap-1 rounded-full bg-danger-600 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white shadow-lg">
                          <ShieldAlert size={12} />
                          Fraude
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 rounded-full bg-emerald-600 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white shadow-lg">
                          <ShieldCheck size={12} />
                          Legítimo
                        </span>
                      )}
                    </div>

                    {/* Hover overlay */}
                    <div
                      className={`card-overlay glass-overlay absolute inset-0 z-20 flex flex-col justify-end p-5 ${isActive ? "!opacity-100 !translate-y-0" : ""}`}
                    >
                      <div className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-neutral-300">
                        <Eye size={12} />
                        Indicadores de{" "}
                        {isFraude ? "fraude" : "legitimidad"}
                      </div>
                      <ul className="mt-3 space-y-1.5">
                        {email.indicators.map((ind, j) => (
                          <li
                            key={j}
                            className="flex items-start gap-2 text-sm text-white"
                          >
                            <span
                              className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[10px] font-bold ${isFraude ? "bg-danger-500" : "bg-emerald-500"}`}
                            >
                              {j + 1}
                            </span>
                            {ind}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Card info */}
                  <div className="p-4">
                    <p className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
                      {email.tipo}
                    </p>
                    <h3 className="mt-1 text-base font-bold text-neutral-900">
                      {email.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-neutral-500 line-clamp-2">
                      {email.explanation}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section className="border-t border-neutral-200 bg-white">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-4 py-12 sm:flex-row sm:px-6 lg:px-8">
          <div>
            <h3 className="text-xl font-bold text-neutral-900">
              ¿Puedes distinguir lo real de lo falso?
            </h3>
            <p className="mt-1 text-sm text-neutral-500">
              Ahora compara sitios web reales y fraudulentos en nuestra
              galería de sitios.
            </p>
          </div>
          <div className="flex gap-3">
            <Link
              href="/galeria/sitios"
              className="inline-flex items-center gap-2 rounded-xl bg-primary-600 px-6 py-3 text-sm font-semibold text-white shadow-md transition-all hover:bg-primary-700 active:scale-95"
            >
              Ver sitios web
              <ArrowRight size={18} />
            </Link>
            <Link
              href="/consejos"
              className="inline-flex items-center gap-2 rounded-xl border border-neutral-300 bg-white px-6 py-3 text-sm font-semibold text-neutral-700 shadow-sm transition-all hover:border-primary-300 hover:bg-primary-50 hover:text-primary-700 active:scale-95"
            >
              Consejos
              <ChevronRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
