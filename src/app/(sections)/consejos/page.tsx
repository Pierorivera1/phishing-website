import {
  Shield,
  AlertTriangle,
  ChevronRight,
  ArrowDown,
  BookOpen,
} from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";
import Callout from "@/components/callout";
import {
  consejosIdentificacion,
  recomendacionesProteccion,
  type Consejo,
} from "@/lib/consejos";

export const metadata: Metadata = {
  title: "Consejos de Prevención",
  description:
    "Aprende a identificar correos de phishing y proteger tus cuentas digitales con consejos prácticos basados en investigación científica.",
};

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
      <p
        className={`mb-1 text-xs font-semibold uppercase tracking-wider ${accentText}`}
      >
        {consejo.situacion}
      </p>
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

          <div className="mx-auto mb-10 max-w-3xl">
            <Callout title="Regla de oro" variant="warning">
              Si un mensaje te genera urgencia, miedo o una oferta demasiado
              buena, detente y verifica por un canal oficial antes de hacer clic
              o entregar datos. La mayoría de los ataques fracasan cuando te
              tomas 10 segundos para dudar.
            </Callout>
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

      {/* ── Sección 3: Acciones Post-Incidente (HU-11) ──────────── */}
      <section className="section-padding bg-white">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <span className="mb-3 inline-flex items-center gap-1.5 rounded-full bg-danger-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-danger-700">
              <AlertTriangle size={14} />
              Protocolo de Emergencia
            </span>
            <h2 className="text-3xl font-bold text-neutral-900 sm:text-4xl">
              ¿Qué hacer si ya caíste en un fraude?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-neutral-500">
              Si ingresaste tus datos en un enlace sospechoso o fuiste estafado, sigue estos pasos inmediatamente para mitigar el daño.
            </p>
          </div>

          <div className="mx-auto max-w-4xl space-y-6">
            {/* Paso 1: Llamar al banco */}
            <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm sm:p-8">
              <div className="flex items-start gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-danger-600 font-bold text-white text-sm">
                  1
                </span>
                <div>
                  <h3 className="text-lg font-bold text-neutral-900">Bloquea tus tarjetas y cuentas bancarias</h3>
                  <p className="mt-2 text-sm text-neutral-500 leading-relaxed">
                    Llama de inmediato a la central de emergencias de tu banco en Perú para bloquear tus tarjetas y claves digitales. No uses la app si sospechas que el celular está comprometido.
                  </p>
                  
                  {/* Lista de Teléfonos Bancarios */}
                  <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                    <div className="rounded-xl bg-neutral-50 p-3 ring-1 ring-neutral-200">
                      <p className="text-xs font-bold text-neutral-800">BCP</p>
                      <p className="text-sm font-semibold text-primary-600 hover:underline">
                        <a href="tel:013119898">(01) 311-9898</a>
                      </p>
                    </div>
                    <div className="rounded-xl bg-neutral-50 p-3 ring-1 ring-neutral-200">
                      <p className="text-xs font-bold text-neutral-800">BBVA</p>
                      <p className="text-sm font-semibold text-primary-600 hover:underline">
                        <a href="tel:015950000">(01) 595-0000</a>
                      </p>
                    </div>
                    <div className="rounded-xl bg-neutral-50 p-3 ring-1 ring-neutral-200">
                      <p className="text-xs font-bold text-neutral-800">Interbank</p>
                      <p className="text-sm font-semibold text-primary-600 hover:underline">
                        <a href="tel:013119000">(01) 311-9000</a>
                      </p>
                    </div>
                    <div className="rounded-xl bg-neutral-50 p-3 ring-1 ring-neutral-200">
                      <p className="text-xs font-bold text-neutral-800">Banco de la Nación</p>
                      <p className="text-sm font-semibold text-primary-600 hover:underline">
                        <a href="tel:014405305">(01) 440-5305</a>
                      </p>
                    </div>
                    <div className="rounded-xl bg-neutral-50 p-3 ring-1 ring-neutral-200">
                      <p className="text-xs font-bold text-neutral-800">Scotiabank</p>
                      <p className="text-sm font-semibold text-primary-600 hover:underline">
                        <a href="tel:013116000">(01) 311-6000</a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Conector de flujo */}
            <div className="flex justify-center" aria-hidden="true">
              <ArrowDown size={18} className="text-neutral-300" />
            </div>

            {/* Paso 2: Cambiar claves */}
            <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm sm:p-8">
              <div className="flex items-start gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-neutral-800 font-bold text-white text-sm">
                  2
                </span>
                <div>
                  <h3 className="text-lg font-bold text-neutral-900">Cambia todas tus contraseñas</h3>
                  <p className="mt-2 text-sm text-neutral-500 leading-relaxed">
                    Si ingresaste tu clave en una web falsa, modifícala inmediatamente en el portal oficial. Si usas la misma clave en otras cuentas (como Gmail o redes sociales), cámbialas también. Recuerda usar gestores de contraseñas para evitar repetir credenciales (Guo & Tinmaz, 2023).
                  </p>
                </div>
              </div>
            </div>

            {/* Conector de flujo */}
            <div className="flex justify-center" aria-hidden="true">
              <ArrowDown size={18} className="text-neutral-300" />
            </div>

            {/* Paso 3: Reportar a la Universidad */}
            <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm sm:p-8">
              <div className="flex items-start gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-neutral-800 font-bold text-white text-sm">
                  3
                </span>
                <div>
                  <h3 className="text-lg font-bold text-neutral-900">Reporta al soporte TI de la UNFV</h3>
                  <p className="mt-2 text-sm text-neutral-500 leading-relaxed">
                    Si el ataque comprometió tu correo institucional (`@unfv.edu.pe`), avisa de inmediato a la Oficina de Tecnología de la Información para bloquear el correo temporalmente. Esto evita que los ciberdelincuentes usen tu cuenta para enviar spam o phishing masivo a tus compañeros de Ciencias Sociales.
                  </p>
                </div>
              </div>
            </div>

            {/* Conector de flujo */}
            <div className="flex justify-center" aria-hidden="true">
              <ArrowDown size={18} className="text-neutral-300" />
            </div>

            {/* Paso 4: Denunciar formalmente */}
            <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm sm:p-8">
              <div className="flex items-start gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-neutral-800 font-bold text-white text-sm">
                  4
                </span>
                <div>
                  <h3 className="text-lg font-bold text-neutral-900">Asienta una denuncia policial o fiscal</h3>
                  <p className="mt-2 text-sm text-neutral-500 leading-relaxed">
                    El fraude informático es un delito según la Ley de Delitos Informáticos en el Perú. Puedes asentar una denuncia formal en:
                  </p>
                  <ul className="mt-3 list-disc pl-5 space-y-2 text-xs text-neutral-600">
                    <li>
                      <strong>DIVINDAT (DIVISIÓN DE DELITOS DE ALTA TECNOLOGÍA):</strong> Ubicada en la Av. España 323, Cercado de Lima. Central de atención: <a href="tel:014318105" className="text-primary-600 font-semibold">(01) 431-8105</a>.
                    </li>
                    <li>
                      <strong>Ministerio Público (Fiscalía de la Nación):</strong> A través de la Mesa de Partes Virtual o acudiendo a la Fiscalía Corporativa en Ciberdelincuencia de Lima.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
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

