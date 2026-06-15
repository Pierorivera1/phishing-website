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
  Smartphone,
  Phone,
  Video,
  MoreVertical,
  Check,
  CheckCheck,
  Info,
  XCircle,
  ZoomIn,
} from "lucide-react";

/* ─────────────────────────────────────────────────────────────────── */
/* ── INTERFACES                                                   ── */
/* ─────────────────────────────────────────────────────────────────── */

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

interface ChatBubble {
  from: "them" | "me";
  text: string;
  time: string;
  read?: boolean;
  /** índice de hotspot (1-based) que esta burbuja dispara */
  hotspot?: number;
}

interface MobileConversation {
  id: string;
  canal: "whatsapp" | "sms";
  contactName: string;
  contactSub: string;
  /** Emoji o inicial para el avatar */
  avatarEmoji: string;
  /** Color del avatar */
  avatarColor: string;
  title: string;
  bubbles: ChatBubble[];
  /** Hotspots numerados (1-based) con label y descripción */
  hotspots: { label: string; description: string }[];
  explanation: string;
}

/* ─────────────────────────────────────────────────────────────────── */
/* ── DATA: CORREOS                                                ── */
/* ─────────────────────────────────────────────────────────────────── */

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

/* ─────────────────────────────────────────────────────────────────── */
/* ── DATA: CONVERSACIONES MÓVILES                                 ── */
/* ─────────────────────────────────────────────────────────────────── */

const conversations: MobileConversation[] = [
  /* ── WhatsApp 1: Oferta de trabajo fraudulenta ───────────────── */
  {
    id: "wa-trabajo",
    canal: "whatsapp",
    contactName: "+51 987 654 321",
    contactSub: "Desconocido · No en tu agenda",
    avatarEmoji: "💼",
    avatarColor: "#25d366",
    title: "Oferta de trabajo — \"Google Maps\"",
    bubbles: [
      {
        from: "them",
        text: "¡Hola! ¿Cómo estás? 😊",
        time: "10:18",
        hotspot: 1,
      },
      {
        from: "them",
        text: "Soy reclutador de Google Maps. Buscamos personal a tiempo parcial en tu zona.",
        time: "10:19",
        hotspot: 2,
      },
      {
        from: "them",
        text: "Puedes ganar entre S/. 100 a S/. 500 diarios calificando hoteles y restaurantes 📍",
        time: "10:19",
        hotspot: 3,
      },
      {
        from: "them",
        text: "Solo necesitas 2h al día desde tu celular. ¿Te interesa? Solo quedan 3 plazas 🔥",
        time: "10:20",
        hotspot: 4,
      },
      {
        from: "me",
        text: "¿Cómo funciona exactamente?",
        time: "10:21",
        read: true,
      },
      {
        from: "them",
        text: "Te registras aquí: http://bit.ly/gmap-trabajo-pe y primero harás tareas de prueba. Los primeros pagos son pequeños para que confíes 🙂",
        time: "10:22",
        hotspot: 3,
      },
    ],
    hotspots: [
      {
        label: "Número desconocido",
        description:
          "El mensaje viene de un número que no está en tu agenda. Los reclutadores legítimos de empresas grandes no te contactan por WhatsApp personal.",
      },
      {
        label: "Suplantación de marca",
        description:
          "Google no contrata calificadores por WhatsApp. Este tipo de suplantación de empresas reconocidas (Google, Amazon, etc.) es un patrón clásico de fraude.",
      },
      {
        label: "Ingreso fácil y desproporcionado",
        description:
          "S/. 100 a S/. 500 diarios por calificar hoteles es imposible. Esta promesa está diseñada para explotar la necesidad económica. Después te pedirán un depósito para 'desbloquear' tus ganancias.",
      },
      {
        label: "Urgencia artificial",
        description:
          "\"Solo quedan 3 plazas\" es una táctica de escasez falsa para que tomes decisiones sin pensar. No dejes que la urgencia controle tu razonamiento.",
      },
    ],
    explanation:
      "Estafa piramidal de tareas. Los atacantes hacen pequeños pagos iniciales para generar confianza, luego exigen depósitos de dinero real para 'desbloquear' niveles con más ganancias. El dinero jamás regresa.",
  },

  /* ── WhatsApp 2: Familiar en apuros ─────────────────────────── */
  {
    id: "wa-familiar",
    canal: "whatsapp",
    contactName: "Mamá 👩‍👧",
    contactSub: "Número nuevo · No verificado",
    avatarEmoji: "👩",
    avatarColor: "#128C7E",
    title: "Familiar en apuros — Suplantación",
    bubbles: [
      {
        from: "them",
        text: "Hijito, soy tu mamá. Me cambié de número, guárdalo ❤️",
        time: "15:02",
        hotspot: 1,
      },
      {
        from: "me",
        text: "Hola mami, ¿qué pasó con tu número?",
        time: "15:03",
        read: true,
      },
      {
        from: "them",
        text: "Larga historia, luego te cuento. Estoy en una situación de emergencia 😰",
        time: "15:04",
        hotspot: 2,
      },
      {
        from: "them",
        text: "Mi tarjeta se bloqueó y necesito pagar una medicina URGENTE. ¿Me puedes hacer una transferencia de S/. 350?",
        time: "15:04",
        hotspot: 3,
      },
      {
        from: "me",
        text: "¿A qué cuenta te mando?",
        time: "15:05",
        read: true,
      },
      {
        from: "them",
        text: "A esta cuenta de un amigo que me está ayudando: BCP 194-XXXX-XX. No llames a mi número anterior está apagado 🙏",
        time: "15:06",
        hotspot: 4,
      },
    ],
    hotspots: [
      {
        label: "Cambio de número sospechoso",
        description:
          "El primer mensaje de un 'familiar' desde un número nuevo es la primera señal de alarma. Siempre verifica llamando al número anterior o a otro familiar.",
      },
      {
        label: "Creación de pánico emocional",
        description:
          "El atacante usa palabras como 'emergencia', 'urgente' y 'medicina' para activar tu respuesta emocional y desactivar tu pensamiento crítico.",
      },
      {
        label: "Solicitud de transferencia inusual",
        description:
          "Un monto exacto pedido de improviso es una señal de fraude. Tu familia real tiene otras formas de contactarte y resolver emergencias.",
      },
      {
        label: "Cuenta de un tercero + bloqueo de llamadas",
        description:
          "Pedir transferencia a cuenta de un 'amigo' e impedir que llames al número original son las señales definitivas de fraude. LLAMA a un familiar de confianza ANTES de transferir.",
      },
    ],
    explanation:
      "Suplantación de familiar por cuenta de WhatsApp robada o número nuevo. Nunca transfieras dinero sin antes hablar por voz o video con la persona, usando su número original.",
  },

  /* ── SMS 1: Alerta bancaria ──────────────────────────────────── */
  {
    id: "sms-banco",
    canal: "sms",
    contactName: "AlertaBancoMX",
    contactSub: "Mensaje de texto",
    avatarEmoji: "🏦",
    avatarColor: "#1a56db",
    title: "Alerta bancaria — Smishing",
    bubbles: [
      {
        from: "them",
        text: "BANCO DIGITAL: Se detectó un acceso no autorizado desde Lima - Miraflores.",
        time: "08:12",
        hotspot: 1,
      },
      {
        from: "them",
        text: "Tu cuenta ha sido SUSPENDIDA preventivamente por seguridad.",
        time: "08:12",
        hotspot: 2,
      },
      {
        from: "them",
        text: "Para reactivar tu acceso en las próximas 2 horas ingresa en: https://bcp-banco-seguridad.com/reactivar",
        time: "08:13",
        hotspot: 3,
      },
      {
        from: "them",
        text: "Si no verificas, tu cuenta será CANCELADA definitivamente. — Área de Seguridad",
        time: "08:13",
        hotspot: 4,
      },
    ],
    hotspots: [
      {
        label: "Remitente genérico o falso",
        description:
          "Los SMS de bancos reales usan nombres registrados específicos (ej: 'BCP', 'BBVA'). 'AlertaBancoMX' es un nombre inventado. Además, el BCP Perú nunca usaría 'MX'.",
      },
      {
        label: "Suspensión de cuenta como amenaza",
        description:
          "Anunciar la suspensión de tu cuenta por SMS es una táctica de miedo. Los bancos reales nunca suspenden cuentas sin notificación previa por canales oficiales.",
      },
      {
        label: "URL fraudulenta",
        description:
          "El dominio 'bcp-banco-seguridad.com' no es el dominio oficial del BCP (viabcp.com). Observa el guión y la palabra 'seguridad' agregada artificialmente para parecer legítimo.",
      },
      {
        label: "Límite de tiempo falso",
        description:
          "\"2 horas\" y \"cancelada definitivamente\" son presiones psicológicas. Siempre llama directamente a la línea de tu banco (impresa en tu tarjeta) antes de hacer clic en cualquier enlace.",
      },
    ],
    explanation:
      "Smishing bancario clásico. Los bancos nunca envían enlaces por SMS para reactivar cuentas. Si recibes un mensaje así, llama directamente al número oficial de tu banco, que está impreso en el reverso de tu tarjeta.",
  },

  /* ── SMS 2: Entrega de paquete ───────────────────────────────── */
  {
    id: "sms-delivery",
    canal: "sms",
    contactName: "SerpostInfo",
    contactSub: "Mensaje de texto",
    avatarEmoji: "📦",
    avatarColor: "#e3aa09",
    title: "Paquete retenido — Falsa aduana",
    bubbles: [
      {
        from: "them",
        text: "SERPOST PERÚ: Su paquete con N° de seguimiento PE-74938201-X llegó a Lima.",
        time: "13:40",
        hotspot: 1,
      },
      {
        from: "them",
        text: "No pudo ser entregado: error en código postal. Está retenido en almacén.",
        time: "13:40",
        hotspot: 2,
      },
      {
        from: "them",
        text: "Pague la tasa de reenvío de S/. 4.50 antes de las 23:59 de hoy o será devuelto al remitente:",
        time: "13:41",
        hotspot: 3,
      },
      {
        from: "them",
        text: "👉 https://serpost-aduana-pago.com/PE74938201",
        time: "13:41",
        hotspot: 4,
      },
    ],
    hotspots: [
      {
        label: "Número de seguimiento inventado",
        description:
          "El código 'PE-74938201-X' parece oficial pero es inventado. Siempre verifica en el sitio oficial de Serpost (serpost.com.pe) usando el número que te dio el remitente real de tu paquete.",
      },
      {
        label: "Problema inesperado como gancho",
        description:
          "Si no esperabas ningún paquete, esta situación nunca puede ser real. Si esperas uno, verifica directamente en el sitio oficial, no por el enlace del SMS.",
      },
      {
        label: "Cobro de monto pequeño como trampa",
        description:
          "S/. 4.50 parece insignificante, pero el objetivo real es capturar los datos completos de tu tarjeta de crédito o débito, que vale mucho más.",
      },
      {
        label: "URL claramente falsa",
        description:
          "El dominio oficial de Serpost es 'serpost.com.pe'. El enlace 'serpost-aduana-pago.com' es fraudulento: usan guiones y palabras adicionales para parecer legítimo a primera vista.",
      },
    ],
    explanation:
      "Estafa de delivery. El cobro mínimo es una trampa para robar los datos completos de tu tarjeta. Nunca pagues tasas de entrega por SMS. Verifica siempre en serpost.com.pe con el código que te dio el vendedor original.",
  },
];

/* ─────────────────────────────────────────────────────────────────── */
/* ── SUBCOMPONENTE: Indicadores principales                       ── */
/* ─────────────────────────────────────────────────────────────────── */

const mainIndicators = [
  {
    icon: <Link2 size={20} />,
    label: "Identifican phishing por enlaces",
    stat: "75%",
    color: "text-danger-600",
    bg: "bg-danger-50",
  },
  {
    icon: <UserX size={20} />,
    label: "Lo detectan por remitente inusual",
    stat: "62.9%",
    color: "text-primary-600",
    bg: "bg-primary-50",
  },
  {
    icon: <AlertTriangle size={20} />,
    label: "Reconocen la presión psicológica",
    stat: "48.6%",
    color: "text-amber-600",
    bg: "bg-amber-50",
  },
  {
    icon: <PenLine size={20} />,
    label: "Se fijan en la calidad de redacción",
    stat: "40%",
    color: "text-emerald-600",
    bg: "bg-emerald-50",
  },
];

/* ─────────────────────────────────────────────────────────────────── */
/* ── SUBCOMPONENTE: PhoneSimulator                                ── */
/* ─────────────────────────────────────────────────────────────────── */

function PhoneSimulator({ conv }: { conv: MobileConversation }) {
  const [activeHotspot, setActiveHotspot] = useState<number | null>(null);
  const isWA = conv.canal === "whatsapp";

  return (
    <article
      id={`sim-${conv.id}`}
      className="flex flex-col gap-6 rounded-3xl border border-neutral-200 bg-white p-6 shadow-lg transition-shadow duration-300 hover:shadow-xl sm:p-8 lg:flex-row lg:items-start"
    >
      {/* ── Left: Phone Mockup ────────────────────────────────── */}
      <div className="flex w-full shrink-0 flex-col items-center gap-3 lg:w-[260px]">
        {/* Canal badge */}
        <span
          className={`rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wider text-white ${
            isWA ? "bg-[#25d366]" : "bg-primary-600"
          }`}
        >
          {isWA ? "WhatsApp" : "SMS"} · Fraude
        </span>

        {/* Phone frame */}
        <div
          className="relative w-full max-w-[220px] overflow-hidden rounded-[32px] border-[8px] border-neutral-900 bg-neutral-950 shadow-[0_20px_60px_rgba(0,0,0,0.4)]"
          style={{ minHeight: 400 }}
        >
          {/* Status bar */}
          <div className="flex items-center justify-between bg-neutral-900 px-4 py-1.5">
            <span className="text-[9px] font-bold text-white">9:41</span>
            <div className="flex items-center gap-1">
              <div className="h-1.5 w-3 rounded-sm bg-emerald-400" />
              <div className="h-1.5 w-0.5 rounded-sm bg-neutral-400" />
              <div className="text-[8px] text-neutral-300">●●●</div>
            </div>
          </div>

          {/* Chat header */}
          {isWA ? (
            <div className="flex items-center gap-2.5 bg-[#075e54] px-3 py-2.5">
              <button className="text-white opacity-70 hover:opacity-100">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" />
                </svg>
              </button>
              <div
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-base"
                style={{ backgroundColor: conv.avatarColor + "33" }}
              >
                {conv.avatarEmoji}
              </div>
              <div className="min-w-0 flex-1">
                <p className="truncate text-[11px] font-bold leading-tight text-white">
                  {conv.contactName}
                </p>
                <p className="text-[8px] text-[#b2dfdb]">en línea</p>
              </div>
              <div className="flex items-center gap-2.5 text-white opacity-70">
                <Video size={14} />
                <Phone size={14} />
                <MoreVertical size={14} />
              </div>
            </div>
          ) : (
            <div className="flex items-center gap-2 bg-neutral-100 px-3 py-2.5">
              <button className="text-neutral-600">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" />
                </svg>
              </button>
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-neutral-200 text-base">
                {conv.avatarEmoji}
              </div>
              <div className="min-w-0 flex-1">
                <p className="truncate text-[11px] font-bold text-neutral-900">
                  {conv.contactName}
                </p>
                <p className="text-[8px] text-neutral-500">Mensaje de texto</p>
              </div>
            </div>
          )}

          {/* Chat body */}
          <div
            className={`flex flex-col gap-2 overflow-y-auto p-3 ${
              isWA ? "bg-[#e5ddd5]" : "bg-neutral-50"
            }`}
            style={{ minHeight: 280 }}
          >
            {conv.bubbles.map((bubble, bi) => {
              const isMe = bubble.from === "me";
              const hs = bubble.hotspot;
              const isHighlighted = hs !== undefined && activeHotspot === hs;
              const hasHotspot = hs !== undefined;

              return (
                <div
                  key={bi}
                  className={`flex ${isMe ? "justify-end" : "justify-start"}`}
                >
                  {/* Hotspot wrapper */}
                  <div className="relative">
                    {hasHotspot && (
                      <button
                        onClick={() =>
                          setActiveHotspot(activeHotspot === hs ? null : hs!)
                        }
                        aria-label={`Ver señal ${hs}`}
                        className={`absolute -top-1.5 -right-1.5 z-20 flex h-4 w-4 items-center justify-center rounded-full text-[8px] font-extrabold text-white shadow-md transition-all duration-200 ${
                          isHighlighted
                            ? "scale-125 bg-danger-600 ring-2 ring-danger-300"
                            : "bg-danger-500 hover:scale-110"
                        }`}
                      >
                        {hs}
                      </button>
                    )}

                    <div
                      className={`max-w-[180px] rounded-xl px-2.5 py-1.5 shadow-sm transition-all duration-200 ${
                        isMe
                          ? isWA
                            ? "rounded-tr-none bg-[#dcf8c6]"
                            : "rounded-tr-none bg-primary-100"
                          : isWA
                          ? "rounded-tl-none bg-white"
                          : "rounded-tl-none bg-neutral-200"
                      } ${
                        isHighlighted
                          ? "ring-2 ring-danger-400"
                          : ""
                      }`}
                    >
                      <p
                        className={`break-words text-[10px] leading-relaxed ${
                          isMe ? "text-neutral-800" : "text-neutral-900"
                        }`}
                      >
                        {bubble.text}
                      </p>
                      <div className="mt-0.5 flex items-center justify-end gap-1">
                        <span className="text-[7px] text-neutral-400">
                          {bubble.time}
                        </span>
                        {isMe &&
                          (bubble.read ? (
                            <CheckCheck size={8} className="text-[#53bdeb]" />
                          ) : (
                            <Check size={8} className="text-neutral-400" />
                          ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Chat input bar */}
          <div
            className={`flex items-center gap-2 px-3 py-2 ${
              isWA ? "bg-[#f0f0f0]" : "bg-white border-t border-neutral-200"
            }`}
          >
            <div className="flex-1 rounded-full bg-white px-3 py-1 text-[9px] text-neutral-400 shadow-inner ring-1 ring-neutral-200">
              Escribe un mensaje...
            </div>
            <div
              className="flex h-6 w-6 items-center justify-center rounded-full text-white"
              style={{ backgroundColor: conv.avatarColor }}
            >
              <svg
                width="10"
                height="10"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Hint */}
        <p className="text-center text-[10px] text-neutral-400">
          Toca los{" "}
          <span className="rounded-full bg-danger-500 px-1.5 py-0.5 font-bold text-white">
            números rojos
          </span>{" "}
          para ver las señales
        </p>
      </div>

      {/* ── Right: Explanation Panel ──────────────────────────── */}
      <div className="flex-1">
        <h3 className="text-xl font-extrabold tracking-tight text-neutral-900 sm:text-2xl">
          {conv.title}
        </h3>
        <p className="mt-1 text-xs text-neutral-500">{conv.contactSub}</p>

        <p className="mt-4 text-sm leading-relaxed text-neutral-600">
          {conv.explanation}
        </p>

        {/* Hotspots list */}
        <div className="mt-6 space-y-3">
          <p className="text-xs font-bold uppercase tracking-wider text-neutral-400">
            Señales de fraude en esta conversación:
          </p>
          {conv.hotspots.map((hs, i) => {
            const num = i + 1;
            const isActive = activeHotspot === num;
            return (
              <button
                key={i}
                onClick={() =>
                  setActiveHotspot(isActive ? null : num)
                }
                aria-expanded={isActive}
                className={`w-full rounded-2xl border p-4 text-left transition-all duration-200 ${
                  isActive
                    ? "border-danger-300 bg-danger-50 shadow-md"
                    : "border-neutral-200 bg-white hover:border-neutral-300 hover:bg-neutral-50"
                }`}
              >
                <div className="flex items-center gap-3">
                  <span
                    className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-extrabold text-white transition-colors ${
                      isActive ? "bg-danger-600" : "bg-neutral-700"
                    }`}
                  >
                    {num}
                  </span>
                  <span
                    className={`text-sm font-bold ${
                      isActive ? "text-danger-800" : "text-neutral-800"
                    }`}
                  >
                    {hs.label}
                  </span>
                  {isActive ? (
                    <XCircle size={14} className="ml-auto text-danger-400" />
                  ) : (
                    <ZoomIn size={14} className="ml-auto text-neutral-300" />
                  )}
                </div>

                {/* Expandable description */}
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isActive
                      ? "max-h-40 opacity-100 pt-3"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="border-t border-danger-200 pt-3 text-xs leading-relaxed text-danger-700">
                    {hs.description}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Warning callout */}
        <div className="mt-6 flex gap-3 rounded-xl border border-amber-200 bg-amber-50 p-4">
          <Info size={16} className="mt-0.5 shrink-0 text-amber-600" />
          <p className="text-xs leading-relaxed text-amber-800">
            <strong>¿Cómo actuar?</strong> No respondas, no hagas clic en ningún enlace y bloquea el número. Si mencionan una cuenta bancaria o transferencia, llama directamente a tu familiar o banco.
          </p>
        </div>
      </div>
    </article>
  );
}

/* ─────────────────────────────────────────────────────────────────── */
/* ── PAGE COMPONENT                                               ── */
/* ─────────────────────────────────────────────────────────────────── */

export default function GaleriaCorreosPage() {
  const [activeTab, setActiveTab] = useState<"emails" | "celular">("emails");
  const [activeCard, setActiveCard] = useState<string | null>(null);

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────── */}
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
            Galería de Mensajes Fraudulentos
          </h1>
          <p
            className="animate-fade-in-up mx-auto mt-5 max-w-2xl text-base leading-relaxed text-neutral-300 sm:text-lg"
            style={{ animationDelay: "200ms" }}
          >
            Analiza ejemplos reales de correos, SMS y WhatsApp de phishing.
            Aprende a identificar las señales de fraude antes de que sea tarde.
          </p>
        </div>
      </section>

      {/* ── Indicadores estadísticos ──────────────────────────── */}
      <section className="border-b border-neutral-200 bg-white py-10">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-6 text-center text-xs font-bold uppercase tracking-widest text-neutral-400">
            ¿Cómo detectan el phishing los estudiantes? — Shahbazi et al., 2025
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

      {/* ── Tabs ─────────────────────────────────────────────── */}
      <nav
        className="sticky top-0 z-30 flex justify-center border-b border-neutral-200 bg-white/95 py-4 backdrop-blur-md"
        aria-label="Tipo de canal"
      >
        <div className="flex rounded-xl bg-neutral-100 p-1 ring-1 ring-neutral-200">
          <button
            onClick={() => setActiveTab("emails")}
            className={`flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-bold transition-all ${
              activeTab === "emails"
                ? "bg-white text-primary-600 shadow-sm"
                : "text-neutral-500 hover:text-neutral-800"
            }`}
          >
            <Mail size={16} />
            Correos Electrónicos
          </button>
          <button
            onClick={() => setActiveTab("celular")}
            className={`flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-bold transition-all ${
              activeTab === "celular"
                ? "bg-white text-primary-600 shadow-sm"
                : "text-neutral-500 hover:text-neutral-800"
            }`}
          >
            <Smartphone size={16} />
            WhatsApp & SMS
          </button>
        </div>
      </nav>

      {/* ── Gallery Content ───────────────────────────────────── */}
      <section className="section-padding bg-neutral-50">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-bold text-neutral-900 sm:text-4xl">
              {activeTab === "emails"
                ? "Correos de Phishing"
                : "Conversaciones Fraudulentas"}
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm text-neutral-500">
              {activeTab === "emails"
                ? "Pasa el cursor o toca cada tarjeta para ver los indicadores de fraude."
                : "Toca los números rojos sobre las burbujas del chat para identificar cada señal de peligro."}
            </p>
          </div>

          {activeTab === "emails" ? (
            /* ── Email Grid ───────────────────────────────────── */
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
                    <div className="relative aspect-[4/3] w-full overflow-hidden bg-neutral-100">
                      <Image
                        src={email.src}
                        alt={email.alt}
                        fill
                        className="card-image object-cover object-top"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        loading={
                          email.id === "correo-banco" ? "eager" : "lazy"
                        }
                        priority={email.id === "correo-banco"}
                      />

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

                      <div
                        className={`card-overlay glass-overlay absolute inset-0 z-20 flex flex-col justify-end p-5 ${
                          isActive ? "!opacity-100 !translate-y-0" : ""
                        }`}
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
                                className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[10px] font-bold ${
                                  isFraude
                                    ? "bg-danger-500"
                                    : "bg-emerald-500"
                                }`}
                              >
                                {j + 1}
                              </span>
                              {ind}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

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
          ) : (
            /* ── Phone Simulators ─────────────────────────────── */
            <div className="flex flex-col gap-8">
              {conversations.map((conv) => (
                <PhoneSimulator key={conv.id} conv={conv} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section className="border-t border-neutral-200 bg-white">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-4 py-12 sm:flex-row sm:px-6 lg:px-8">
          <div>
            <h3 className="text-xl font-bold text-neutral-900">
              ¿Puedes distinguir un sitio real de uno falso?
            </h3>
            <p className="mt-1 text-sm text-neutral-500">
              Compara sitios web clonados y aprende a detectar páginas fraudulentas.
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
