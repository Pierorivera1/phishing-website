"use client";

/**
 * Evaluación — Quiz interactivo de autoevaluación (HU PI-18 / PI-19).
 *
 * Cubre las tareas del Sprint 3:
 *  - PI-139  Preguntas y estructura del quiz
 *  - PI-140  Sección de evaluación dentro de la plataforma
 *  - PI-141  Acceso al quiz (los CTA /evaluacion ahora resuelven aquí)
 *  - PI-143  Escala de evaluación y niveles de desempeño
 *  - PI-144  Retroalimentación por respuesta
 *  - PI-145  Información orientativa sobre resultados
 *  - PI-148  Visualización de puntaje y retroalimentación
 */

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import {
  GraduationCap,
  CheckCircle2,
  XCircle,
  RotateCcw,
  ChevronRight,
  Trophy,
} from "lucide-react";
import PixelHero from "@/components/pixel-hero";

/* ── Datos del quiz (PI-139) ─────────────────────────────────────── */

interface Pregunta {
  enunciado: string;
  opciones: string[];
  correcta: number;
  /** Retroalimentación mostrada tras responder (PI-144). */
  explicacion: string;
}

const PREGUNTAS: Pregunta[] = [
  {
    enunciado: "¿Qué es el phishing?",
    opciones: [
      "Un virus que daña el hardware de tu computadora",
      "Un engaño donde el atacante se hace pasar por una entidad confiable para robar datos",
      "Una técnica para acelerar tu conexión a internet",
      "Un tipo de respaldo automático de archivos",
    ],
    correcta: 1,
    explicacion:
      "El phishing es ingeniería social: el atacante suplanta a una entidad confiable (banco, universidad) para que entregues tus datos voluntariamente.",
  },
  {
    enunciado:
      "Recibes un correo de «soporte@unfv-seguridad.com» pidiendo tu contraseña. ¿Qué señal de alerta destaca?",
    opciones: [
      "El correo usa un dominio falso parecido al oficial",
      "Las instituciones legítimas nunca piden tu contraseña por correo",
      "Genera urgencia para que actúes sin pensar",
      "Todas las anteriores",
    ],
    correcta: 3,
    explicacion:
      "Dominio falso, solicitud de credenciales y urgencia son las tres banderas rojas clásicas. El dominio oficial es @unfv.edu.pe.",
  },
  {
    enunciado: "Antes de hacer clic en un enlace de un correo, lo más seguro es:",
    opciones: [
      "Hacer clic rápido para que no caduque la oferta",
      "Pasar el cursor sobre el enlace y verificar la URL real",
      "Reenviarlo a tus contactos para preguntar",
      "Responder al correo pidiendo más información",
    ],
    correcta: 1,
    explicacion:
      "Al pasar el cursor (hover) ves la URL de destino real. Si no coincide con el sitio oficial, no hagas clic.",
  },
  {
    enunciado: "¿Cuál es la mejor práctica para proteger tus cuentas?",
    opciones: [
      "Usar la misma contraseña en todas para no olvidarla",
      "Activar la verificación en dos pasos (2FA)",
      "Anotar las contraseñas en un papel sobre el escritorio",
      "Cambiar de cuenta cada mes",
    ],
    correcta: 1,
    explicacion:
      "El 2FA añade un segundo factor: aunque roben tu contraseña, no podrán entrar sin el código de tu teléfono.",
  },
  {
    enunciado:
      "El «smishing» y el «vishing» son variantes de phishing que usan respectivamente:",
    opciones: [
      "Mensajes SMS y llamadas de voz",
      "Redes sociales y videojuegos",
      "Códigos QR y correos masivos",
      "Memorias USB y discos externos",
    ],
    correcta: 0,
    explicacion:
      "Smishing = phishing por SMS; vishing = phishing por voz (llamadas). Ambos buscan que entregues datos o instales algo.",
  },
  {
    enunciado: "Una técnica de ingeniería social muy común es:",
    opciones: [
      "Explotar vulnerabilidades del procesador",
      "Crear sensación de urgencia o miedo para que actúes sin pensar",
      "Cifrar el disco duro con una clave aleatoria",
      "Saturar la red con tráfico falso",
    ],
    correcta: 1,
    explicacion:
      "La ingeniería social manipula emociones (urgencia, miedo, curiosidad) en lugar de atacar la tecnología.",
  },
  {
    enunciado:
      "¿Cuál de estas NO es una forma confiable de verificar una página de inicio de sesión?",
    opciones: [
      "Revisar que la URL sea el dominio oficial exacto",
      "Confiar solo en que aparezca el candado (HTTPS)",
      "Escribir tú mismo la dirección en el navegador",
      "Acceder desde un marcador guardado previamente",
    ],
    correcta: 1,
    explicacion:
      "El candado HTTPS solo indica conexión cifrada, no legitimidad. Muchos sitios falsos también usan HTTPS.",
  },
  {
    enunciado:
      "Si ingresaste tu clave bancaria en una web falsa, lo PRIMERO que debes hacer es:",
    opciones: [
      "Esperar a ver si ocurre algo sospechoso",
      "Apagar la computadora y no volver a usarla",
      "Llamar a tu banco para bloquear tarjetas y cambiar tu contraseña",
      "Publicarlo en redes sociales para advertir a otros",
    ],
    correcta: 2,
    explicacion:
      "Actúa rápido: bloquea tus tarjetas llamando al banco y cambia de inmediato la contraseña comprometida.",
  },
];

/* ── Niveles de desempeño (PI-143 / PI-145) ──────────────────────── */

interface Nivel {
  min: number; // porcentaje mínimo (inclusive)
  titulo: string;
  mensaje: string;
  color: string; // clases tailwind para acento
}

const NIVELES: Nivel[] = [
  {
    min: 85,
    titulo: "Experto en ciberseguridad",
    mensaje:
      "Dominas las señales del phishing. Comparte lo que sabes con tus compañeros y mantente al día.",
    color: "text-emerald-400",
  },
  {
    min: 70,
    titulo: "Usuario avanzado",
    mensaje:
      "Tienes buenos reflejos de seguridad. Repasa los consejos para cubrir los puntos que fallaste.",
    color: "text-primary",
  },
  {
    min: 50,
    titulo: "Nivel intermedio",
    mensaje:
      "Vas por buen camino, pero aún hay riesgos que podrían sorprenderte. Revisa la sección de consejos.",
    color: "text-accent",
  },
  {
    min: 0,
    titulo: "Principiante",
    mensaje:
      "Tu cuenta está en riesgo. Te recomendamos repasar todo el contenido educativo antes de volver a intentarlo.",
    color: "text-destructive",
  },
];

/**
 * Devuelve el nivel de desempeño según el porcentaje obtenido.
 * NIVELES está ordenado de mayor a menor `min`, así que el primer match gana.
 */
function nivelPorPorcentaje(pct: number): Nivel {
  return NIVELES.find((n) => pct >= n.min) ?? NIVELES[NIVELES.length - 1];
}

/* ── Página ──────────────────────────────────────────────────────── */

export default function EvaluacionPage() {
  // -1 = sin responder; índice de la opción elegida en caso contrario.
  const [respuestas, setRespuestas] = useState<number[]>(
    () => Array(PREGUNTAS.length).fill(-1)
  );
  const [enviado, setEnviado] = useState(false);
  const resultadoRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (enviado) {
      resultadoRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [enviado]);

  const aciertos = useMemo(
    () => respuestas.filter((r, i) => r === PREGUNTAS[i].correcta).length,
    [respuestas]
  );
  const pct = Math.round((aciertos / PREGUNTAS.length) * 100);
  const nivel = nivelPorPorcentaje(pct);
  const respondidas = respuestas.filter((r) => r !== -1).length;
  const todasRespondidas = respondidas === PREGUNTAS.length;

  function elegir(pregunta: number, opcion: number) {
    if (enviado) return;
    const esPrimeraRespuesta = respuestas[pregunta] === -1;
    setRespuestas((prev) => {
      const next = [...prev];
      next[pregunta] = opcion;
      return next;
    });
    // Al responder por primera vez, lleva suavemente a la siguiente pregunta.
    if (esPrimeraRespuesta && pregunta < PREGUNTAS.length - 1) {
      document
        .getElementById(`pregunta-${pregunta + 1}`)
        ?.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }

  function reiniciar() {
    setRespuestas(Array(PREGUNTAS.length).fill(-1));
    setEnviado(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <>
      {/* ── Hero compacto ─────────────────────────────────────────── */}
      <PixelHero
        icon={<GraduationCap size={24} />}
        title="Evaluación de Conocimientos"
      >
        {PREGUNTAS.length} preguntas sobre prevención del phishing. Al terminar
        verás tu puntaje y retroalimentación.
      </PixelHero>

      {/* ── Barra de progreso pegajosa (solo móvil) ───────────────── */}
      {!enviado && (
        <div className="sticky top-[var(--nav-height)] z-40 border-b-2 border-border bg-[#04120c]/95 px-4 py-2.5 backdrop-blur-sm lg:hidden">
          <div className="mb-1.5 flex items-center justify-between text-xs font-bold text-white/70">
            <span style={{ fontFamily: "'Pixelify Sans', system-ui, sans-serif" }}>
              Progreso
            </span>
            <span className="text-primary">
              {respondidas}/{PREGUNTAS.length}
            </span>
          </div>
          <div className="flex gap-1.5" role="progressbar" aria-valuemin={0} aria-valuemax={PREGUNTAS.length} aria-valuenow={respondidas}>
            {PREGUNTAS.map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Pregunta ${i + 1}`}
                onClick={() =>
                  document
                    .getElementById(`pregunta-${i}`)
                    ?.scrollIntoView({ behavior: "smooth", block: "center" })
                }
                className={`h-2.5 flex-1 cursor-pointer rounded-none border border-border transition-colors duration-300 ${
                  respuestas[i] !== -1 ? "bg-primary" : "bg-white/10"
                }`}
              />
            ))}
          </div>
        </div>
      )}

      {/* ── Riel de progreso vertical (escritorio) ────────────────── */}
      <nav
        aria-label="Progreso del quiz"
        className="fixed left-4 top-1/2 z-40 hidden -translate-y-1/2 flex-col items-center gap-2 lg:flex xl:left-8"
      >
        {PREGUNTAS.map((p, i) => {
          const contestada = respuestas[i] !== -1;
          // Tras enviar, el riel refleja aciertos y errores.
          let estilo = contestada
            ? "border-primary bg-primary/15 text-primary"
            : "border-border bg-card text-muted-foreground hover:border-primary/50";
          if (enviado) {
            estilo =
              respuestas[i] === p.correcta
                ? "border-emerald-500 bg-emerald-500/15 text-emerald-400"
                : "border-destructive bg-destructive/15 text-destructive";
          }
          return (
            <button
              key={i}
              type="button"
              title={`Pregunta ${i + 1}`}
              onClick={() =>
                document
                  .getElementById(`pregunta-${i}`)
                  ?.scrollIntoView({ behavior: "smooth", block: "center" })
              }
              className={`flex h-9 w-9 cursor-pointer items-center justify-center rounded-none border-2 text-xs font-bold shadow-[2px_2px_0px_0px_rgba(0,0,0,0.5)] transition-all active:translate-y-[1px] active:shadow-[1px_1px_0px_0px_rgba(0,0,0,0.5)] ${estilo}`}
              style={{ fontFamily: "'Pixelify Sans', system-ui, sans-serif" }}
            >
              {contestada && !enviado ? <CheckCircle2 size={16} /> : i + 1}
            </button>
          );
        })}
        <span
          className="mt-1 text-xs font-bold text-primary"
          style={{ fontFamily: "'Pixelify Sans', system-ui, sans-serif" }}
        >
          {respondidas}/{PREGUNTAS.length}
        </span>
      </nav>

      {/* ── Panel de resultados (PI-145 / PI-148) ─────────────────── */}
      {enviado && (
        <section
          ref={resultadoRef}
          className="section-padding bg-background py-12 border-b-4 border-border"
        >
          <div className="animate-fade-in-up mx-auto max-w-3xl rounded-none border-4 border-border bg-card p-8 text-center shadow-[6px_6px_0px_0px_var(--secondary)] sm:p-10">
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-none border-2 border-border bg-primary/10 text-primary">
              <Trophy size={28} />
            </div>
            <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
              Tu resultado
            </p>
            <p 
              className="mt-2 text-5xl font-extrabold tracking-tight text-foreground font-pixel"
              style={{ fontFamily: "'Pixelify Sans', system-ui, sans-serif" }}
            >
              {aciertos}
              <span className="text-2xl font-bold text-muted-foreground">
                {" "}
                / {PREGUNTAS.length}
              </span>
            </p>
            <p 
              className={`mt-2 text-xl font-bold font-pixel ${nivel.color}`}
              style={{ fontFamily: "'Pixelify Sans', system-ui, sans-serif" }}
            >
              {pct}% — {nivel.titulo}
            </p>
            <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground">
              {nivel.mensaje}
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <button
                type="button"
                onClick={reiniciar}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-none border-2 border-border bg-card px-6 py-3 text-xs font-bold text-foreground shadow-[3px_3px_0px_0px_var(--secondary)] transition-all hover:bg-secondary/40 active:translate-y-[2px] active:shadow-[1px_1px_0px_0px_var(--secondary)] cursor-pointer"
                style={{ fontFamily: "'Pixelify Sans', system-ui, sans-serif" }}
              >
                <RotateCcw size={16} />
                Reintentar
              </button>
              <Link
                href="/aprender"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-none border-2 border-border bg-card px-6 py-3 text-xs font-bold text-foreground shadow-[3px_3px_0px_0px_var(--secondary)] transition-all hover:bg-secondary/40 active:translate-y-[2px] active:shadow-[1px_1px_0px_0px_var(--secondary)] cursor-pointer"
                style={{ fontFamily: "'Pixelify Sans', system-ui, sans-serif" }}
              >
                Dale otro repaso
              </Link>
            </div>
            <p className="mt-4 text-xs text-muted-foreground/60">
              Este resultado es solo para ti: no se guarda ni se envía a ningún
              lado.
            </p>
          </div>
        </section>
      )}

      {/* ── Cuestionario (PI-140) ─────────────────────────────────── */}
      <section className="section-padding bg-background py-12">
        <div className="mx-auto max-w-3xl space-y-8">
          {PREGUNTAS.map((p, qi) => {
            const elegida = respuestas[qi];
            return (
              <article
                key={qi}
                id={`pregunta-${qi}`}
                className="rounded-none border-4 border-border bg-card p-6 shadow-[6px_6px_0px_0px_var(--secondary)] sm:p-8"
              >
                <div className="flex items-start gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-none border-2 border-border bg-neutral-900 text-xs font-bold text-white">
                    {qi + 1}
                  </span>
                  <h2 
                    className="text-base font-bold text-foreground sm:text-lg font-pixel"
                    style={{ fontFamily: "'Pixelify Sans', system-ui, sans-serif" }}
                  >
                    {p.enunciado}
                  </h2>
                </div>

                <div className="mt-5 space-y-3">
                  {p.opciones.map((opcion, oi) => {
                    const seleccionada = elegida === oi;
                    const esCorrecta = oi === p.correcta;

                    // Estado visual tras enviar (PI-144).
                    let estado =
                      "border-border bg-card hover:border-primary/50 text-foreground hover:bg-secondary/40";
                    if (enviado) {
                      if (esCorrecta)
                        estado = "border-emerald-500 bg-emerald-500/10 text-emerald-450";
                      else if (seleccionada)
                        estado = "border-destructive bg-destructive/10 text-destructive";
                      else estado = "border-border bg-card opacity-50";
                    } else if (seleccionada) {
                      estado = "border-primary bg-primary/10 text-primary";
                    }

                    return (
                      <button
                        key={oi}
                        type="button"
                        disabled={enviado}
                        onClick={() => elegir(qi, oi)}
                        className={`flex w-full items-center gap-3 rounded-none border-2 px-4 py-3 text-left text-sm transition-all duration-150 ${estado} ${
                          enviado ? "cursor-default" : "cursor-pointer"
                        }`}
                        aria-pressed={seleccionada}
                      >
                        <span
                          className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-none border text-[11px] font-bold ${
                            seleccionada
                              ? "border-current"
                              : "border-border text-muted-foreground"
                          }`}
                        >
                          {String.fromCharCode(65 + oi)}
                        </span>
                        <span className="flex-1">{opcion}</span>
                        {enviado && esCorrecta && (
                          <CheckCircle2
                            size={18}
                            className="shrink-0 text-emerald-400"
                          />
                        )}
                        {enviado && seleccionada && !esCorrecta && (
                          <XCircle
                            size={18}
                            className="shrink-0 text-destructive"
                          />
                        )}
                      </button>
                    );
                  })}
                </div>

                {/* Retroalimentación por pregunta (PI-144) */}
                {enviado && (
                  <div
                    className={`mt-4 rounded-none border-2 p-4 text-sm leading-relaxed ${
                      elegida === p.correcta
                        ? "bg-emerald-500/10 border-emerald-500/20 text-emerald-400"
                        : "bg-destructive/10 border-destructive/20 text-destructive"
                    }`}
                  >
                    <span className="font-bold">
                      {elegida === p.correcta ? "✔ ¡Correcto! " : "✘ Incorrecto. "}
                    </span>
                    {p.explicacion}
                  </div>
                )}
              </article>
            );
          })}

          {/* ── Acciones ──────────────────────────────────────────── */}
          {!enviado && (
            <div className="flex flex-col items-center gap-3 pt-4">
              <button
                type="button"
                disabled={!todasRespondidas}
                onClick={() => setEnviado(true)}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-none border-2 border-black bg-primary px-8 py-4 text-sm font-bold text-primary-foreground shadow-[4px_4px_0px_0px_var(--ring)] transition-all hover:bg-primary/95 active:translate-y-[2px] active:shadow-[2px_2px_0px_0px_var(--ring)] disabled:cursor-not-allowed disabled:bg-neutral-800 disabled:text-muted-foreground disabled:shadow-none disabled:border-border cursor-pointer"
                style={{ fontFamily: "'Pixelify Sans', system-ui, sans-serif" }}
              >
                Ver mi resultado
                <ChevronRight size={18} />
              </button>
              {!todasRespondidas && (
                <p className="text-xs text-muted-foreground/60">
                  Responde las {PREGUNTAS.length} preguntas para continuar (
                  {respondidas}/{PREGUNTAS.length})
                </p>
              )}
            </div>
          )}

          {/* Enlace de vuelta a consejos */}
          <div className="pt-4 text-center">
            <Link
              href="/consejos"
              className="text-sm font-medium text-primary hover:text-primary/90 hover:underline"
            >
              ← Repasar los consejos de prevención
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
