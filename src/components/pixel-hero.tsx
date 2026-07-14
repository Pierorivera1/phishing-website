import type { ReactNode } from "react";

/**
 * Hero compacto con temática de phishing: fondo verde oscuro con resplandor,
 * patrón de sobres/anzuelos en pixel-art y scanlines CRT. Deja el contenido
 * de la página visible al cargar.
 */
export default function PixelHero({
  icon,
  title,
  children,
  iconClassName = "bg-primary/10 text-primary",
  maxWidthClass = "max-w-3xl",
}: {
  icon: ReactNode;
  title: string;
  children: ReactNode;
  /** Clases de acento para la caja del ícono. */
  iconClassName?: string;
  /** Ancho del contenedor; debe coincidir con el contenido de la página. */
  maxWidthClass?: string;
}) {
  return (
    <section className="relative overflow-hidden border-b-4 border-border bg-[#04120c] py-8 sm:py-10">
      {/* Resplandor verde superior */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 90% 80% at 50% -10%, rgba(0,255,102,0.14), transparent 65%)",
        }}
      />

      {/* Patrón temático: sobres y anzuelos de phishing */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140'%3E%3Cg fill='none' stroke='%2300ff66' stroke-width='2'%3E%3Crect x='16' y='22' width='34' height='24'/%3E%3Cpath d='M16 22l17 13 17-13'/%3E%3Cpath d='M100 78v20a11 11 0 0 0 22 0m0 0l-7-5'/%3E%3Ccircle cx='100' cy='72' r='4'/%3E%3Cpath d='M58 104h14M65 97v14'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: "140px 140px",
        }}
      />

      {/* CRT Scanlines overlay */}
      <div className="crt-scanlines" aria-hidden="true" />

      <div className={`relative mx-auto ${maxWidthClass} px-4 sm:px-6 lg:px-8`}>
        <div className="animate-fade-in-up flex items-center gap-4">
          <div
            className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-none border-2 border-border shadow-[2px_2px_0px_0px_rgba(0,0,0,0.5)] ${iconClassName}`}
          >
            {icon}
          </div>
          <div>
            <h1
              className="text-2xl font-bold text-white sm:text-3xl"
              style={{
                fontFamily: "'Pixelify Sans', system-ui, sans-serif",
                textShadow: "2px 2px 0px #000000",
              }}
            >
              {title}
            </h1>
            <p className="mt-1 text-sm text-white/80 sm:text-base">{children}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
