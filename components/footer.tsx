import Link from "next/link";
import Image from "next/image";
import { Shield, ExternalLink } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      id="site-footer"
      className="border-t border-neutral-200 bg-neutral-50"
      role="contentinfo"
    >
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
          {/* Brand */}
          <div className="flex items-center gap-2 text-neutral-700">
            <Image src="/anti_pishing_unfv_logo.png" alt="Logo UNFV" width={24} height={24} className="shrink-0 object-contain" />
            <span className="text-sm font-semibold">
              Anti-Phishing UNFV
            </span>
          </div>

          {/* Quick links */}
          <nav aria-label="Enlaces del pie de página" className="flex flex-wrap justify-center gap-4 text-sm text-neutral-500">
            <Link href="/consejos" className="transition-colors hover:text-primary-600">
              Consejos
            </Link>
            <Link href="/evaluacion" className="transition-colors hover:text-primary-600">
              Evaluación
            </Link>
          </nav>

          {/* Meta */}
          <div className="flex items-center gap-3 text-xs text-neutral-400">
            <a
              href="https://web.unfv.edu.pe/facultades/fiei/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-neutral-600"
              aria-label="Página oficial de la FIEI UNFV"
            >
              <ExternalLink size={18} />
            </a>
            <span>© {currentYear} FIIEI — UNFV</span>
          </div>
        </div>

        {/* Attribution */}
        <p className="mt-6 text-center text-xs text-neutral-400">
          Proyecto Integrador — Facultad de Ingeniería Electrónica e Informática
        </p>
      </div>
    </footer>
  );
}
