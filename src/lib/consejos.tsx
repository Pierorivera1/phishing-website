/**
 * Datos de consejos de prevención (HU-09 / HU-10).
 *
 * Se separan de la página para mantener la presentación limpia y para
 * organizar cada consejo según la situación cotidiana del estudiante en la
 * que aplica (PI-136).
 */

import {
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
} from "lucide-react";

export interface Consejo {
  icon: React.ReactNode;
  /** Situación cotidiana en la que aplica el consejo (PI-136). */
  situacion: string;
  title: string;
  description: string;
  stat?: string;
  source: string;
}

/* ── Identificación de phishing (HU-09) ─────────────────────────── */

export const consejosIdentificacion: Consejo[] = [
  {
    icon: <Mail size={24} />,
    situacion: "Al revisar tu correo",
    title: "Verifica el remitente antes de abrir",
    description:
      "Revisa la dirección de correo completa, no solo el nombre visible. Los atacantes usan dominios similares (ej: @unfv-soporte.com en vez de @unfv.edu.pe).",
    stat: "62.9% detecta phishing por remitente inusual",
    source: "Shahbazi et al., 2025",
  },
  {
    icon: <Link2Off size={24} />,
    situacion: "Antes de hacer clic",
    title: "No hagas clic en links sospechosos",
    description:
      "Pasa el cursor sobre el enlace para ver la URL real antes de hacer clic. Si la dirección no coincide con el sitio oficial, no lo abras.",
    stat: "75% identifica phishing por enlaces sospechosos",
    source: "Shahbazi et al., 2025",
  },
  {
    icon: <AlertTriangle size={24} />,
    situacion: "Cuando te presionan",
    title: "Desconfía de mensajes con urgencia extrema",
    description:
      'Los atacantes usan frases como "Tu cuenta será bloqueada en 24 horas" o "Acción inmediata requerida" para que actúes sin pensar.',
    stat: "48.6% reconoce presión psicológica como señal",
    source: "Shahbazi et al., 2025; Yoro et al., 2023",
  },
  {
    icon: <Search size={24} />,
    situacion: "Al leer el mensaje",
    title: "Busca errores ortográficos y de diseño",
    description:
      "Los correos de phishing suelen contener errores gramaticales, logos de baja calidad o formatos inconsistentes. Las instituciones reales cuidan su comunicación.",
    stat: "40% se fija en calidad de redacción",
    source: "Shahbazi et al., 2025",
  },
  {
    icon: <Flag size={24} />,
    situacion: "Tras detectar la amenaza",
    title: 'Usa la función "Reportar phishing"',
    description:
      "Todos los servicios de correo tienen un botón para reportar correos sospechosos. Úsalo: protege a otros usuarios y entrena al filtro de spam.",
    stat: "80% desconoce esta función",
    source: "Okokpujie et al., 2025",
  },
  {
    icon: <FileWarning size={24} />,
    situacion: "Con archivos adjuntos",
    title: "No abras archivos adjuntos inesperados",
    description:
      "Los archivos .exe, .zip o incluso .docx pueden contener malware. Si no esperabas el archivo, contacta al remitente por otro medio para confirmar.",
    source: "Ruiz Contreras & Solis Castillo, 2024",
  },
];

/* ── Protección de cuentas (HU-10) ──────────────────────────────── */

export const recomendacionesProteccion: Consejo[] = [
  {
    icon: <KeyRound size={24} />,
    situacion: "Al crear tus claves",
    title: "Usa contraseñas únicas y seguras",
    description:
      "Cada cuenta debe tener una contraseña diferente de al menos 12 caracteres, combinando mayúsculas, minúsculas, números y símbolos.",
    stat: "53.6% reutiliza credenciales entre cuentas",
    source: "Abdulla et al., 2023; Guo & Tinmaz, 2023",
  },
  {
    icon: <Smartphone size={24} />,
    situacion: "Al iniciar sesión",
    title: "Activa la verificación en dos pasos (2FA)",
    description:
      "Con 2FA activado, aunque un atacante obtenga tu contraseña, necesitará el código de tu teléfono para acceder a tu cuenta.",
    source: "Abdulla et al., 2023",
  },
  {
    icon: <Lock size={24} />,
    situacion: "Para gestionar tus claves",
    title: "Usa un gestor de contraseñas",
    description:
      "Herramientas como Bitwarden o Google Password Manager generan y almacenan contraseñas únicas. Solo necesitas recordar una contraseña maestra.",
    source: "Guo & Tinmaz, 2023",
  },
  {
    icon: <Wifi size={24} />,
    situacion: "En redes públicas",
    title: "Evita WiFi público para cuentas importantes",
    description:
      "Las redes WiFi abiertas permiten que terceros intercepten tu tráfico. Usa datos móviles o VPN para acceder a tu correo o banca online.",
    stat: "52.1% usa WiFi público para acceder a cuentas",
    source: "Abdulla et al., 2023",
  },
  {
    icon: <RefreshCw size={24} />,
    situacion: "En tu día a día",
    title: "Mantén tu software actualizado",
    description:
      "Las actualizaciones corrigen vulnerabilidades de seguridad. Activa las actualizaciones automáticas en tu sistema operativo y navegador.",
    source: "Carreño Ardila et al., 2024",
  },
];
