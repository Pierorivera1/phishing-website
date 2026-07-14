import {
  Shield,
  AlertTriangle,
  ChevronRight,
  ArrowDown,
  BookOpen,
} from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";
import { Button } from "@/components/ui/8bit/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Callout from "@/components/callout";
import PixelHero from "@/components/pixel-hero";
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
  const accentBg = isIdentify ? "bg-destructive/10" : "bg-primary/10";
  const accentText = isIdentify ? "text-destructive" : "text-primary";
  const accentBorder = isIdentify ? "border-destructive/20" : "border-primary/20";

  return (
    <Card
      id={`consejo-${variant}-${index}`}
      className={`animate-fade-in-up group relative overflow-hidden rounded-none border-4 ${accentBorder} bg-card p-6 shadow-[4px_4px_0px_0px_var(--secondary)] transition-all duration-300 hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_var(--secondary)] sm:p-8`}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Number badge */}
      <div className="absolute top-0 right-0 flex h-8 w-8 items-center justify-center rounded-none border-b-2 border-l-2 border-border bg-neutral-900 text-xs font-bold text-white">
        {index + 1}
      </div>

      {/* Icon */}
      <CardHeader className="p-0 mb-5">
        <div
          className={`inline-flex h-12 w-12 items-center justify-center rounded-none border-2 border-border ${accentBg} ${accentText}`}
        >
          {consejo.icon}
        </div>
      </CardHeader>

      {/* Content */}
      <CardContent className="p-0">
        <p
          className={`mb-1 text-xs font-semibold uppercase tracking-wider ${accentText}`}
        >
          {consejo.situacion}
        </p>
        <h3 
          className="text-lg font-bold text-foreground sm:text-xl"
          style={{ fontFamily: "'Pixelify Sans', system-ui, sans-serif" }}
        >
          {consejo.title}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
          {consejo.description}
        </p>

        {/* Stat badge */}
        {consejo.stat && (
          <div className="mt-4">
            <Badge variant="outline" className={`inline-flex items-center gap-1.5 rounded-none border-2 border-border ${accentBg} px-3 py-1.5 text-xs font-semibold ${accentText}`}>
              <BookOpen className="h-3.5 w-3.5" />
              {consejo.stat}
            </Badge>
          </div>
        )}

        {/* Source */}
        <p className="mt-3 text-xs text-muted-foreground/60">{consejo.source}</p>
      </CardContent>
    </Card>
  );
}

/* ── Página principal ───────────────────────────────────────────── */

export default function ConsejosPage() {
  return (
    <>
      {/* ── Hero ────────────────────────────────────────────────── */}
      <PixelHero
        icon={<Shield className="h-6 w-6" />}
        title="Consejos de Prevención"
        maxWidthClass="max-w-6xl"
      >
        Identifica ataques de phishing y protege tus cuentas digitales con
        recomendaciones respaldadas por investigación científica.
      </PixelHero>

      {/* ── Sección 1: Identificar Phishing (HU-09) ────────────── */}
      <section className="section-padding bg-background py-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mb-12 text-center">
            <Badge variant="outline" className="mb-3 inline-flex items-center gap-1.5 rounded-none border-2 border-destructive/20 bg-destructive/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-destructive">
              <AlertTriangle className="h-3.5 w-3.5" />
              Señales de alerta
            </Badge>
            <h2 
              className="text-2xl font-bold text-foreground sm:text-3xl"
              style={{ fontFamily: "'Pixelify Sans', system-ui, sans-serif" }}
            >
              ¿Cómo identificar un intento de phishing?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
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
        <hr className="border-border" />
      </div>

      {/* ── Sección 2: Protección Digital (HU-10) ──────────────── */}
      <section className="section-padding bg-muted/20 py-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mb-12 text-center">
            <Badge variant="outline" className="mb-3 inline-flex items-center gap-1.5 rounded-none border-2 border-primary/20 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
              <Shield className="h-3.5 w-3.5" />
              Protección digital
            </Badge>
            <h2 
              className="text-2xl font-bold text-foreground sm:text-3xl"
              style={{ fontFamily: "'Pixelify Sans', system-ui, sans-serif" }}
            >
              Recomendaciones de seguridad
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
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
      <section className="section-padding bg-background py-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mb-12 text-center">
            <Badge variant="outline" className="mb-3 inline-flex items-center gap-1.5 rounded-none border-2 border-destructive/20 bg-destructive/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-destructive">
              <AlertTriangle className="h-3.5 w-3.5" />
              Protocolo de Emergencia
            </Badge>
            <h2 
              className="text-2xl font-bold text-foreground sm:text-3xl"
              style={{ fontFamily: "'Pixelify Sans', system-ui, sans-serif" }}
            >
              ¿Qué hacer si ya caíste en un fraude?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
              Si ingresaste tus datos en un enlace sospechoso o fuiste estafado, sigue estos pasos inmediatamente para mitigar el daño.
            </p>
          </div>

          <div className="mx-auto max-w-4xl space-y-6">
            {/* Paso 1: Llamar al banco */}
            <Card className="rounded-none border-4 border-border bg-card p-6 shadow-[6px_6px_0px_0px_var(--secondary)] sm:p-8">
              <CardContent className="p-0">
                <div className="flex items-start gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-none border-2 border-border bg-destructive font-bold text-white text-sm">
                    1
                  </span>
                  <div className="flex-1">
                    <h3 
                      className="text-lg font-bold text-foreground"
                      style={{ fontFamily: "'Pixelify Sans', system-ui, sans-serif" }}
                    >
                      Bloquea tus tarjetas y cuentas bancarias
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                      Llama de inmediato a la central de emergencias de tu banco en Perú para bloquear tus tarjetas y claves digitales. No uses la app si sospechas que el celular está comprometido.
                    </p>
                    
                    {/* Lista de Teléfonos Bancarios */}
                    <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                      {[
                        { name: "BCP", phone: "(01) 311-9898", link: "tel:013119898" },
                        { name: "BBVA", phone: "(01) 595-0000", link: "tel:015950000" },
                        { name: "Interbank", phone: "(01) 311-9000", link: "tel:013119000" },
                        { name: "Banco de la Nación", phone: "(01) 440-5305", link: "tel:014405305" },
                        { name: "Scotiabank", phone: "(01) 311-6000", link: "tel:013116000" },
                      ].map((bank) => (
                        <Card key={bank.name} className="rounded-none border-2 border-border bg-muted/30 p-3 shadow-none">
                          <p 
                            className="text-xs font-bold text-foreground"
                            style={{ fontFamily: "'Pixelify Sans', system-ui, sans-serif" }}
                          >
                            {bank.name}
                          </p>
                          <a href={bank.link} className="text-sm font-semibold text-primary hover:underline block mt-1">
                            {bank.phone}
                          </a>
                        </Card>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Conector de flujo */}
            <div className="flex justify-center" aria-hidden="true">
              <ArrowDown size={18} className="text-neutral-300" />
            </div>

            {/* Paso 2: Cambiar claves */}
            <Card className="rounded-none border-4 border-border bg-card p-6 shadow-[6px_6px_0px_0px_var(--secondary)] sm:p-8">
              <CardContent className="p-0">
                <div className="flex items-start gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-none border-2 border-border bg-neutral-800 dark:bg-neutral-700 font-bold text-white text-sm">
                    2
                  </span>
                  <div>
                    <h3 
                      className="text-lg font-bold text-foreground"
                      style={{ fontFamily: "'Pixelify Sans', system-ui, sans-serif" }}
                    >
                      Cambia todas tus contraseñas
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                      Si ingresaste tu clave en una web falsa, modifícala inmediatamente en el portal oficial. Si usas la misma clave en otras cuentas (como Gmail o redes sociales), cámbialas también. Recuerda usar gestores de contraseñas para evitar repetir credenciales (Guo & Tinmaz, 2023).
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Conector de flujo */}
            <div className="flex justify-center" aria-hidden="true">
              <ArrowDown size={18} className="text-neutral-300" />
            </div>

            {/* Paso 3: Reportar a la Universidad */}
            <Card className="rounded-none border-4 border-border bg-card p-6 shadow-[6px_6px_0px_0px_var(--secondary)] sm:p-8">
              <CardContent className="p-0">
                <div className="flex items-start gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-none border-2 border-border bg-neutral-800 dark:bg-neutral-700 font-bold text-white text-sm">
                    3
                  </span>
                  <div>
                    <h3 
                      className="text-lg font-bold text-foreground"
                      style={{ fontFamily: "'Pixelify Sans', system-ui, sans-serif" }}
                    >
                      Reporta al soporte TI de la UNFV
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                      Si el ataque comprometió tu correo institucional (`@unfv.edu.pe`), avisa de inmediato a la Oficina de Tecnología de la Información para bloquear el correo temporalmente. Esto evita que los ciberdelincuentes usen tu cuenta para enviar spam o phishing masivo a tus compañeros de Ciencias Sociales.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Conector de flujo */}
            <div className="flex justify-center" aria-hidden="true">
              <ArrowDown size={18} className="text-neutral-300" />
            </div>

            {/* Paso 4: Denunciar formalmente */}
            <Card className="rounded-none border-4 border-border bg-card p-6 shadow-[6px_6px_0px_0px_var(--secondary)] sm:p-8">
              <CardContent className="p-0">
                <div className="flex items-start gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-none border-2 border-border bg-neutral-800 dark:bg-neutral-700 font-bold text-white text-sm">
                    4
                  </span>
                  <div className="flex-1">
                    <h3 
                      className="text-lg font-bold text-foreground"
                      style={{ fontFamily: "'Pixelify Sans', system-ui, sans-serif" }}
                    >
                      Asienta una denuncia policial o fiscal
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                      El fraude informático es un delito según la Ley de Delitos Informáticos en el Perú. Puedes asentar una denuncia formal en:
                    </p>
                    <ul className="mt-3 list-disc pl-5 space-y-2 text-xs text-muted-foreground leading-relaxed">
                      <li>
                        <strong>DIVINDAT (DIVISIÓN DE DELITOS DE ALTA TECNOLOGÍA):</strong> Ubicada en la Av. España 323, Cercado de Lima. Central de atención: <a href="tel:014318105" className="text-primary font-semibold hover:underline">(01) 431-8105</a>.
                      </li>
                      <li>
                        <strong>Ministerio Público (Fiscalía de la Nación):</strong> A través de la Mesa de Partes Virtual o acudiendo a la Fiscalía Corporativa en Ciberdelincuencia de Lima.
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* ── CTA → Evaluación (HU-11) ────────────────────────────── */}
      <section id="cta-final" className="relative overflow-hidden bg-background border-t-4 border-border py-16">
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-6 justify-center">
            {/* Avatar on the left */}
            <div className="shrink-0 flex items-center justify-center animate-fade-in">
              <img 
                src="/images/pixel-avatar.png" 
                alt="Pixel Art Avatar" 
                className="w-16 h-16 md:w-20 md:h-20 object-contain"
                style={{ imageRendering: "pixelated" }}
              />
            </div>

            {/* Chat bubble */}
            <div className="relative flex-1 w-full bg-card border-4 border-border rounded-none p-5 md:p-6 flex flex-col md:flex-row items-center justify-between gap-6 shadow-[6px_6px_0px_0px_rgba(0,255,102,0.2)] animate-fade-in-up">
              {/* Text */}
              <div className="text-center md:text-left">
                <h2 
                  className="text-sm font-bold text-foreground leading-relaxed"
                  style={{ fontFamily: "'Pixelify Sans', system-ui, sans-serif" }}
                >
                  ¿Podrías detectar un ataque real?
                </h2>
                <p className="mt-2 text-xs md:text-sm text-muted-foreground leading-relaxed">
                  Pon a prueba tus conocimientos completando nuestra evaluación sobre prevención de phishing y seguridad digital.
                </p>
              </div>

              {/* Button on the right */}
              <div className="shrink-0 w-full md:w-auto">
                <Button
                  className="w-full md:w-auto bg-primary hover:bg-primary/85 text-primary-foreground font-semibold rounded-none border-none px-6 py-5 shadow-[4px_4px_0px_0px_var(--ring)] active:translate-y-[2px] active:shadow-[2px_2px_0px_0px_var(--ring)] transition-all flex items-center justify-center gap-2 outline-none"
                  asChild
                  font="normal"
                  style={{ fontFamily: "'Pixelify Sans', system-ui, sans-serif" }}
                >
                  <Link href="/evaluacion">
                    <span>Realizar evaluación</span>
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
