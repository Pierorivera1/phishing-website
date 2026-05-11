import Link from "next/link";
import {
  Shield,
  AlertTriangle,
  TrendingUp,
  GraduationCap,
  ArrowRight,
  ChevronRight,
} from "lucide-react";

/* ── Stat cards data ───────────────────────────────────────────────── */

interface Stat {
  icon: React.ReactNode;
  value: string;
  label: string;
  color: string;
  bgColor: string;
}

const stats: Stat[] = [
  {
    icon: <AlertTriangle size={28} />,
    value: "36.9%",
    label: "de estudiantes cae en ataques de phishing",
    color: "text-danger-600",
    bgColor: "bg-danger-50",
  },
  {
    icon: <TrendingUp size={28} />,
    value: "68.88%",
    label: "de delitos informáticos en Perú son fraude digital",
    color: "text-primary-600",
    bgColor: "bg-primary-50",
  },
  {
    icon: <GraduationCap size={28} />,
    value: "0",
    label: "capacitaciones formales en ciberseguridad en la UNFV",
    color: "text-amber-600",
    bgColor: "bg-amber-50",
  },
];

/* ── Page component ────────────────────────────────────────────────── */

export default function HomePage() {
  return (
    <>
      {/* ── Hero Section ──────────────────────────────────────────── */}
      <section
        id="hero"
        className="relative overflow-hidden"
      >
        {/* Background gradient */}
        <div
          className="absolute inset-0 -z-10"
          style={{
            background:
              "linear-gradient(135deg, var(--neutral-50) 0%, var(--primary-50) 40%, var(--primary-100) 100%)",
          }}
        />

        {/* Decorative blobs */}
        <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-primary-200 opacity-30 blur-3xl" />
        <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-primary-300 opacity-20 blur-3xl" />

        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-36">
          <div className="mx-auto max-w-3xl text-center">


            {/* Main heading */}
            <h1 className="animate-fade-in-up text-4xl font-extrabold leading-tight tracking-tight text-neutral-900 sm:text-5xl lg:text-6xl"
                style={{ animationDelay: "100ms" }}
            >
              Aprende a protegerte del{" "}
              <span className="gradient-text">Phishing</span>
            </h1>

            {/* Subtitle */}
            <p
              className="animate-fade-in-up mx-auto mt-6 max-w-2xl text-base leading-relaxed text-neutral-600 sm:text-lg"
              style={{ animationDelay: "200ms" }}
            >
              Plataforma educativa para la concientización y prevención de
              fraudes digitales, diseñada para estudiantes de la Facultad de
              Ciencias Sociales de la UNFV.
            </p>

            {/* CTA buttons */}
            <div
              className="animate-fade-in-up mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
              style={{ animationDelay: "300ms" }}
            >
              <Link
                href="/que-es"
                id="cta-comenzar"
                className="animate-pulse-glow inline-flex items-center gap-2 rounded-xl bg-primary-600 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-primary-600/25 transition-all duration-200 hover:bg-primary-700 hover:shadow-xl hover:shadow-primary-700/30 active:scale-[0.97]"
              >
                Comenzar
                <ArrowRight size={18} />
              </Link>
              <Link
                href="/evaluacion"
                id="cta-evaluacion"
                className="inline-flex items-center gap-2 rounded-xl border border-neutral-300 bg-white px-7 py-3.5 text-sm font-semibold text-neutral-700 shadow-sm transition-all duration-200 hover:border-primary-300 hover:bg-primary-50 hover:text-primary-700 active:scale-[0.97]"
              >
                Ir a la evaluación
                <ChevronRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats Section ─────────────────────────────────────────── */}
      <section id="estadisticas" className="section-padding bg-white">
        <div className="mx-auto max-w-6xl">
          {/* Section heading */}
          <div className="mb-12 text-center">
            <h2 className="text-2xl font-bold text-neutral-900 sm:text-3xl">
              ¿Por qué es importante?
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-neutral-500">
              Datos clave sobre la amenaza del phishing en el entorno
              universitario peruano.
            </p>
          </div>

          {/* Stat cards */}
          <div className="stagger grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {stats.map((stat, i) => (
              <article
                key={i}
                id={`stat-card-${i}`}
                className="animate-fade-in-up group relative overflow-hidden rounded-2xl border border-neutral-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                {/* Icon */}
                <div
                  className={`mb-5 inline-flex rounded-xl p-3 ${stat.bgColor} ${stat.color}`}
                >
                  {stat.icon}
                </div>

                {/* Value */}
                <p className="text-4xl font-extrabold tracking-tight text-neutral-900">
                  {stat.value}
                </p>

                {/* Label */}
                <p className="mt-2 text-sm leading-snug text-neutral-500">
                  {stat.label}
                </p>

                {/* Decorative gradient on hover */}
                <div className="absolute -bottom-12 -right-12 h-32 w-32 rounded-full bg-primary-100 opacity-0 transition-opacity duration-500 group-hover:opacity-50" />
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Final Section ─────────────────────────────────────── */}
      <section
        id="cta-final"
        className="relative overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, var(--primary-900) 0%, var(--primary-600) 50%, var(--primary-500) 100%)",
        }}
      >
        {/* Decorative */}
        <div className="absolute top-0 left-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/10 blur-3xl" />

        <div className="relative mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 sm:py-20 lg:px-8">
          <h2 className="text-2xl font-bold text-white sm:text-3xl lg:text-4xl">
            ¿Listo para poner a prueba tus conocimientos?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-primary-100 sm:text-base">
            Completa nuestra evaluación y descubre qué tanto sabes sobre
            ciberseguridad y prevención de fraudes digitales.
          </p>
          <Link
            href="/evaluacion"
            id="cta-evaluacion-final"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-8 py-4 text-sm font-semibold text-primary-700 shadow-lg transition-all duration-200 hover:bg-primary-50 hover:shadow-xl active:scale-[0.97]"
          >
            Realizar evaluación
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
