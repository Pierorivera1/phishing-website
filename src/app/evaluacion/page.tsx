"use client";

/**
 * Evaluación — Quiz interactivo de autoevaluación (HU PI-18 / PI-19).
 *
 * Cubre las tareas del Sprint 3:
 *  - PI-139  Preguntas y estructura del quiz
 *  - PI-140  Sección de evaluación dentro de la plataforma
 *  - PI-141  Acceso al quiz (los CTA /evaluacion ahora resuelven aquí)
 *  - PI-142  Redirección a la plataforma de evaluación (post-test en Google Forms)
 *  - PI-143  Escala de evaluación y niveles de desempeño
 *  - PI-144  Retroalimentación por respuesta
 *  - PI-145  Información orientativa sobre resultados
 *  - PI-148  Visualización de puntaje y retroalimentación
 */

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  GraduationCap,
  CheckCircle2,
  XCircle,
  RotateCcw,
  ExternalLink,
  ChevronRight,
  Trophy,
} from "lucide-react";

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
    color: "text-success-600",
  },
  {
    min: 70,
    titulo: "Usuario avanzado",
    mensaje:
      "Tienes buenos reflejos de seguridad. Repasa los consejos para cubrir los puntos que fallaste.",
    color: "text-primary-600",
  },
  {
    min: 50,
    titulo: "Nivel intermedio",
    mensaje:
      "Vas por buen camino, pero aún hay riesgos que podrían sorprenderte. Revisa la sección de consejos.",
    color: "text-amber-600",
  },
  {
    min: 0,
    titulo: "Principiante",
    mensaje:
      "Tu cuenta está en riesgo. Te recomendamos repasar todo el contenido educativo antes de volver a intentarlo.",
    color: "text-danger-600",
  },
];

/**
 * Devuelve el nivel de desempeño según el porcentaje obtenido.
 * NIVELES está ordenado de mayor a menor `min`, así que el primer match gana.
 */
function nivelPorPorcentaje(pct: number): Nivel {
  return NIVELES.find((n) => pct >= n.min) ?? NIVELES[NIVELES.length - 1];
}

const GOOGLE_FORMS_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLScyB-HegC1TqEaUqX6r_LszwN83f7Wj8nO9f-HjW_LhB5f80Q/viewform";

/* ── Página ──────────────────────────────────────────────────────── */

export default function EvaluacionPage() {
  // -1 = sin responder; índice de la opción elegida en caso contrario.
  const [respuestas, setRespuestas] = useState<number[]>(
    () => Array(PREGUNTAS.length).fill(-1)
  );
  const [enviado, setEnviado] = useState(false);

  const aciertos = useMemo(
    () => respuestas.filter((r, i) => r === PREGUNTAS[i].correcta).length,
    [respuestas]
  );
  const pct = Math.round((aciertos / PREGUNTAS.length) * 100);
  const nivel = nivelPorPorcentaje(pct);
  const todasRespondidas = respuestas.every((r) => r !== -1);

  function elegir(pregunta: number, opcion: number) {
    if (enviado) return;
    setRespuestas((prev) => {
      const next = [...prev];
      next[pregunta] = opcion;
      return next;
    });
  }

  function reiniciar() {
    setRespuestas(Array(PREGUNTAS.length).fill(-1));
    setEnviado(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-neutral-950">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-1/4 h-96 w-96 rounded-full bg-primary-500 blur-[120px]" />
          <div className="absolute bottom-0 right-1/4 h-96 w-96 rounded-full bg-success-500 blur-[120px]" />
        </div>
        <div className="relative mx-auto max-w-4xl px-4 py-20 text-center sm:px-6 sm:py-24 lg:px-8">
          <div className="animate-fade-in-up mx-auto mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-white ring-1 ring-white/20">
            <GraduationCap size={28} />
          </div>
          <h1 className="animate-fade-in-up text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            Evaluación de conocimientos
          </h1>
          <p
            className="animate-fade-in-up mx-auto mt-5 max-w-2xl text-base leading-relaxed text-neutral-300 sm:text-lg"
            style={{ animationDelay: "100ms" }}
          >
            Responde estas {PREGUNTAS.length} preguntas para medir cuánto
            aprendiste sobre la prevención del phishing. Al terminar verás tu
            puntaje y la retroalimentación de cada respuesta.
          </p>
        </div>
      </section>

      {/* ── Panel de resultados (PI-145 / PI-148) ─────────────────── */}
      {enviado && (
        <section className="section-padding bg-neutral-50 !py-12">
          <div className="animate-fade-in-up mx-auto max-w-3xl rounded-3xl border border-neutral-200 bg-white p-8 text-center shadow-lg sm:p-10">
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary-50 text-primary-600 ring-1 ring-primary-100">
              <Trophy size={28} />
            </div>
            <p className="text-sm font-semibold uppercase tracking-wider text-neutral-500">
              Tu resultado
            </p>
            <p className="mt-2 text-5xl font-extrabold tracking-tight text-neutral-900">
              {aciertos}
              <span className="text-2xl font-bold text-neutral-400">
                {" "}
                / {PREGUNTAS.length}
              </span>
            </p>
            <p className={`mt-2 text-2xl font-bold ${nivel.color}`}>
              {pct}% — {nivel.titulo}
            </p>
            <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-neutral-600">
              {nivel.mensaje}
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <button
                type="button"
                onClick={reiniciar}
                className="inline-flex items-center gap-2 rounded-xl border border-neutral-300 bg-white px-6 py-3 text-sm font-semibold text-neutral-700 shadow-sm transition-all duration-200 hover:border-primary-300 hover:bg-primary-50 hover:text-primary-700 active:scale-[0.97]"
              >
                <RotateCcw size={16} />
                Reintentar
              </button>
              {/* PI-142 — redirección al post-test en la plataforma de evaluación */}
              <a
                href={GOOGLE_FORMS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-primary-600 px-6 py-3 text-sm font-semibold text-white shadow-lg transition-all duration-200 hover:bg-primary-700 active:scale-[0.97]"
              >
                Completar post-test oficial
                <ExternalLink size={16} />
              </a>
            </div>
            <p className="mt-4 text-xs text-neutral-400">
              El post-test es anónimo y nos ayuda a medir el impacto educativo de
              la plataforma.
            </p>
          </div>
        </section>
      )}

      {/* ── Cuestionario (PI-140) ─────────────────────────────────── */}
      <section className="section-padding bg-white !pt-12">
        <div className="mx-auto max-w-3xl space-y-6">
          {PREGUNTAS.map((p, qi) => {
            const elegida = respuestas[qi];
            return (
              <article
                key={qi}
                id={`pregunta-${qi}`}
                className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm sm:p-8"
              >
                <div className="flex items-start gap-3">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-neutral-900 text-xs font-bold text-white">
                    {qi + 1}
                  </span>
                  <h2 className="text-base font-bold text-neutral-900 sm:text-lg">
                    {p.enunciado}
                  </h2>
                </div>

                <div className="mt-5 space-y-2.5">
                  {p.opciones.map((opcion, oi) => {
                    const seleccionada = elegida === oi;
                    const esCorrecta = oi === p.correcta;

                    // Estado visual tras enviar (PI-144).
                    let estado =
                      "border-neutral-200 bg-white hover:border-primary-300 hover:bg-primary-50";
                    if (enviado) {
                      if (esCorrecta)
                        estado = "border-success-500 bg-success-500/10";
                      else if (seleccionada)
                        estado = "border-danger-500 bg-danger-500/10";
                      else estado = "border-neutral-200 bg-white opacity-60";
                    } else if (seleccionada) {
                      estado = "border-primary-500 bg-primary-50";
                    }

                    return (
                      <button
                        key={oi}
                        type="button"
                        disabled={enviado}
                        onClick={() => elegir(qi, oi)}
                        className={`flex w-full items-center gap-3 rounded-xl border px-4 py-3 text-left text-sm transition-all duration-150 ${estado} ${
                          enviado ? "cursor-default" : "cursor-pointer"
                        }`}
                        aria-pressed={seleccionada}
                      >
                        <span
                          className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full border text-[11px] font-bold ${
                            seleccionada
                              ? "border-current"
                              : "border-neutral-300 text-neutral-400"
                          }`}
                        >
                          {String.fromCharCode(65 + oi)}
                        </span>
                        <span className="flex-1 text-neutral-700">{opcion}</span>
                        {enviado && esCorrecta && (
                          <CheckCircle2
                            size={18}
                            className="shrink-0 text-success-600"
                          />
                        )}
                        {enviado && seleccionada && !esCorrecta && (
                          <XCircle
                            size={18}
                            className="shrink-0 text-danger-600"
                          />
                        )}
                      </button>
                    );
                  })}
                </div>

                {/* Retroalimentación por pregunta (PI-144) */}
                {enviado && (
                  <div
                    className={`mt-4 rounded-xl p-4 text-sm leading-relaxed ${
                      elegida === p.correcta
                        ? "bg-success-500/10 text-neutral-700"
                        : "bg-danger-500/10 text-neutral-700"
                    }`}
                  >
                    <span className="font-semibold">
                      {elegida === p.correcta ? "¡Correcto! " : "Incorrecto. "}
                    </span>
                    {p.explicacion}
                  </div>
                )}
              </article>
            );
          })}

          {/* ── Acciones ──────────────────────────────────────────── */}
          {!enviado && (
            <div className="flex flex-col items-center gap-3 pt-2">
              <button
                type="button"
                disabled={!todasRespondidas}
                onClick={() => {
                  setEnviado(true);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="inline-flex items-center gap-2 rounded-xl bg-primary-600 px-8 py-4 text-sm font-semibold text-white shadow-lg transition-all duration-200 hover:bg-primary-700 active:scale-[0.97] disabled:cursor-not-allowed disabled:bg-neutral-300 disabled:shadow-none"
              >
                Ver mi resultado
                <ChevronRight size={18} />
              </button>
              {!todasRespondidas && (
                <p className="text-xs text-neutral-400">
                  Responde las {PREGUNTAS.length} preguntas para continuar (
                  {respuestas.filter((r) => r !== -1).length}/{PREGUNTAS.length})
                </p>
              )}
            </div>
          )}

          {/* Enlace de vuelta a consejos */}
          <div className="pt-4 text-center">
            <Link
              href="/consejos"
              className="text-sm font-medium text-primary-600 hover:text-primary-700 hover:underline"
            >
              ← Repasar los consejos de prevención
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
