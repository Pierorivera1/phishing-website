import {
  Shield,
  Mail,
  Link2Off,
  AlertTriangle,
  Search,
  Flag,
  FileWarning,
  KeyRound,
  Smartphone,
  Lock,
  Wifi,
  RefreshCw,
  ChevronRight,
  BookOpen,
} from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Consejos de Prevención",
  description:
    "Aprende a identificar correos de phishing y proteger tus cuentas digitales con consejos prácticos basados en investigación científica.",
};

/* ── Datos: Consejos de identificación (HU-09) ──────────────────── */

interface Consejo {
  icon: React.ReactNode;
  title: string;
  description: string;
  stat?: string;
  source: string;
}

const consejosIdentificacion: Consejo[] = [
  {
    icon: <Mail size={24} />,
    title: "Verifica el remitente antes de abrir",
    description:
      "Revisa la dirección de correo completa, no solo el nombre visible. Los atacantes usan dominios similares (ej: @unfv-soporte.com en vez de @unfv.edu.pe).",
    stat: "62.9% detecta phishing por remitente inusual",
    source: "Shahbazi et al., 2025",
  },
  {
    icon: <Link2Off size={24} />,
    title: "No hagas clic en links sospechosos",
    description:
      "Pasa el cursor sobre el enlace para ver la URL real antes de hacer clic. Si la dirección no coincide con el sitio oficial, no lo abras.",
    stat: "75% identifica phishing por enlaces sospechosos",
    source: "Shahbazi et al., 2025",
  },
  {
    icon: <AlertTriangle size={24} />,
    title: "Desconfía de mensajes con urgencia extrema",
    description:
      'Los atacantes usan frases como "Tu cuenta será bloqueada en 24 horas" o "Acción inmediata requerida" para que actúes sin pensar.',
    stat: "48.6% reconoce presión psicológica como señal",
    source: "Shahbazi et al., 2025; Yoro et al., 2023",
  },
  {
    icon: <Search size={24} />,
    title: "Busca errores ortográficos y de diseño",
    description:
      "Los correos de phishing suelen contener errores gramaticales, logos de baja calidad o formatos inconsistentes. Las instituciones reales cuidan su comunicación.",
    stat: "40% se fija en calidad de redacción",
    source: "Shahbazi et al., 2025",
  },
  {
    icon: <Flag size={24} />,
    title: 'Usa la función "Reportar phishing"',
    description:
      "Todos los servicios de correo tienen un botón para reportar correos sospechosos. Úsalo: protege a otros usuarios y entrena al filtro de spam.",
    stat: "80% desconoce esta función",
    source: "Okokpujie et al., 2025",
  },
  {
    icon: <FileWarning size={24} />,
    title: "No abras archivos adjuntos inesperados",
    description:
      "Los archivos .exe, .zip o incluso .docx pueden contener malware. Si no esperabas el archivo, contacta al remitente por otro medio para confirmar.",
    source: "Ruiz Contreras & Solis Castillo, 2024",
  },
];

/* ── Datos: Recomendaciones de protección (HU-10) ───────────────── */

const recomendacionesProteccion: Consejo[] = [
  {
    icon: <KeyRound size={24} />,
    title: "Usa contraseñas únicas y seguras",
    description:
      "Cada cuenta debe tener una contraseña diferente de al menos 12 caracteres, combinando mayúsculas, minúsculas, números y símbolos.",
    stat: "53.6% reutiliza credenciales entre cuentas",
    source: "Abdulla et al., 2023; Guo & Tinmaz, 2023",
  },
  {
    icon: <Smartphone size={24} />,
    title: "Activa la verificación en dos pasos (2FA)",
    description:
      "Con 2FA activado, aunque un atacante obtenga tu contraseña, necesitará el código de tu teléfono para acceder a tu cuenta.",
    source: "Abdulla et al., 2023",
  },
  {
    icon: <Lock size={24} />,
    title: "Usa un gestor de contraseñas",
    description:
      "Herramientas como Bitwarden o Google Password Manager generan y almacenan contraseñas únicas. Solo necesitas recordar una contraseña maestra.",
    source: "Guo & Tinmaz, 2023",
  },
  {
    icon: <Wifi size={24} />,
    title: "Evita WiFi público para cuentas importantes",
    description:
      "Las redes WiFi abiertas permiten que terceros intercepten tu tráfico. Usa datos móviles o VPN para acceder a tu correo o banca online.",
    stat: "52.1% usa WiFi público para acceder a cuentas",
    source: "Abdulla et al., 2023",
  },
  {
    icon: <RefreshCw size={24} />,
    title: "Mantén tu software actualizado",
    description:
      "Las actualizaciones corrigen vulnerabilidades de seguridad. Activa las actualizaciones automáticas en tu sistema operativo y navegador.",
    source: "Carreño Ardila et al., 2024",
  },
];

/* ── Componente de tarjeta ──────────────────────────────────────── */

function ConsejoCard({
  consejo,
  index,
  variant = "identify",
}: {
  consejo: Consejo;
  index: number;
  variant?: "identify" | "protect";
}) {
  const isIdentify = variant === "identify";
  const accentBg = isIdentify ? "bg-danger-50" : "bg-primary-50";
  const accentText = isIdentify ? "text-danger-600" : "text-primary-600";
  const accentBorder = isIdentify ? "border-danger-200" : "border-primary-200";
  const statBg = isIdentify ? "bg-danger-50" : "bg-primary-50";
  const statText = isIdentify ? "text-danger-700" : "text-primary-700";

  return (
    <article
      id={`consejo-${variant}-${index}`}
      className={`animate-fade-in-up group relative overflow-hidden rounded-2xl border ${accentBorder} bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-8`}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Number badge */}
      <div className="absolute -top-1 -right-1 flex h-8 w-8 items-center justify-center rounded-bl-xl rounded-tr-2xl bg-neutral-900 text-xs font-bold text-white">
        {index + 1}
      </div>

      {/* Icon */}
      <div
        className={`mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl ${accentBg} ${accentText} ring-1 ring-black/5 transition-transform duration-300 group-hover:scale-110`}
      >
        {consejo.icon}
      </div>

      {/* Content */}
      <h3 className="text-lg font-bold text-neutral-900 sm:text-xl">
        {consejo.title}
      </h3>
      <p className="mt-3 text-sm leading-relaxed text-neutral-600 sm:text-base">
        {consejo.description}
      </p>

      {/* Stat badge */}
      {consejo.stat && (
        <div
          className={`mt-4 inline-flex items-center gap-1.5 rounded-lg ${statBg} px-3 py-1.5 text-xs font-semibold ${statText}`}
        >
          <BookOpen size={12} />
          {consejo.stat}
        </div>
      )}

      {/* Source */}
      <p className="mt-3 text-xs text-neutral-400">{consejo.source}</p>

      {/* Decorative corner glow */}
      <div
        className={`absolute -bottom-10 -right-10 h-28 w-28 rounded-full ${accentBg} opacity-0 transition-opacity duration-500 group-hover:opacity-60`}
      />
    </article>
  );
}

/* ── Página principal ───────────────────────────────────────────── */

export default function ConsejosPage() {
  return (
    <>
      {/* ── Hero ────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-neutral-950">
        {/* Decorative elements */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-1/4 h-96 w-96 rounded-full bg-danger-500 blur-[120px]" />
          <div className="absolute bottom-0 right-1/4 h-96 w-96 rounded-full bg-primary-500 blur-[120px]" />
        </div>

        <div className="relative mx-auto max-w-6xl px-4 py-20 text-center sm:px-6 sm:py-28 lg:px-8">
          <div className="animate-fade-in-up mx-auto mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-white ring-1 ring-white/20">
            <Shield size={28} />
          </div>
          <h1
            className="animate-fade-in-up text-4xl font-extrabold tracking-tight text-white sm:text-5xl"
            style={{ animationDelay: "100ms" }}
          >
            Consejos de Prevención
          </h1>
          <p
            className="animate-fade-in-up mx-auto mt-5 max-w-2xl text-base leading-relaxed text-neutral-300 sm:text-lg"
            style={{ animationDelay: "200ms" }}
          >
            Aprende a identificar ataques de phishing y a proteger tus cuentas
            digitales con recomendaciones respaldadas por investigación
            científica.
          </p>
        </div>
      </section>

      {/* ── Sección 1: Identificar Phishing (HU-09) ────────────── */}
      <section className="section-padding bg-white">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <span className="mb-3 inline-flex items-center gap-1.5 rounded-full bg-danger-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-danger-700">
              <AlertTriangle size={14} />
              Señales de alerta
            </span>
            <h2 className="text-3xl font-bold text-neutral-900 sm:text-4xl">
              ¿Cómo identificar un intento de phishing?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-neutral-500">
              Estas son las 6 señales clave que debes buscar antes de confiar en
              cualquier mensaje o correo electrónico.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {consejosIdentificacion.map((consejo, i) => (
              <ConsejoCard
                key={i}
                consejo={consejo}
                index={i}
                variant="identify"
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── Divider ────────────────────────────────────────────── */}
      <div className="mx-auto max-w-6xl px-4">
        <hr className="border-neutral-200" />
      </div>

      {/* ── Sección 2: Protección Digital (HU-10) ──────────────── */}
      <section className="section-padding bg-neutral-50">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <span className="mb-3 inline-flex items-center gap-1.5 rounded-full bg-primary-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary-700">
              <Shield size={14} />
              Protección digital
            </span>
            <h2 className="text-3xl font-bold text-neutral-900 sm:text-4xl">
              Recomendaciones de seguridad
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-neutral-500">
              Medidas concretas para proteger tus cuentas y datos personales
              contra ataques de ingeniería social.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {recomendacionesProteccion.map((rec, i) => (
              <ConsejoCard
                key={i}
                consejo={rec}
                index={i}
                variant="protect"
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA → Evaluación ────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-primary-600">
        <div className="absolute top-0 left-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/10 blur-3xl" />
        <div className="relative mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 sm:py-20 lg:px-8">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            ¿Podrías detectar un ataque real?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-primary-100 sm:text-base">
            Pon a prueba tus conocimientos completando nuestra evaluación sobre
            prevención de phishing y seguridad digital.
          </p>
          <Link
            href="/evaluacion"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-8 py-4 text-sm font-semibold text-primary-700 shadow-lg transition-all duration-200 hover:bg-primary-50 hover:shadow-xl active:scale-[0.97]"
          >
            Realizar evaluación
            <ChevronRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
