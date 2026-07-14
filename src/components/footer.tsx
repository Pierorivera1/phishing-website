import Link from "next/link";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      id="site-footer"
      className="bg-muted/10"
      role="contentinfo"
    >
      <Separator />
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
          {/* Brand */}
          <div className="flex items-center gap-2 text-muted-foreground">
            <Image
              src="/anti_pishing_unfv_logo.webp"
              alt="Logo UNFV"
              width={24}
              height={24}
              className="shrink-0 object-contain"
            />
            <span 
              className="text-sm font-semibold text-foreground font-pixel"
              style={{ fontFamily: "'Pixelify Sans', system-ui, sans-serif" }}
            >
              Anti-Phishing UNFV
            </span>
          </div>

          {/* Quick links */}
          <nav aria-label="Enlaces del pie de página" className="flex flex-wrap justify-center gap-2 text-sm">
            <Button asChild variant="link" size="sm" className="text-muted-foreground hover:text-primary h-auto p-0">
              <Link href="/consejos">
                Consejos
              </Link>
            </Button>
            <span className="text-muted-foreground/30 self-center px-1">•</span>
            <Button asChild variant="link" size="sm" className="text-muted-foreground hover:text-primary h-auto p-0">
              <Link href="/evaluacion">
                Evaluación
              </Link>
            </Button>
          </nav>

          {/* Meta */}
          <div className="flex items-center gap-3 text-xs text-muted-foreground">
            <Button asChild variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-foreground">
              <a
                href="https://web.unfv.edu.pe/facultades/fiei/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Página oficial de la FIEI UNFV"
              >
                <ExternalLink className="h-4 w-4" />
              </a>
            </Button>
            <span>© {currentYear} FIIEI — UNFV</span>
          </div>
        </div>

        {/* Attribution */}
        <p className="mt-6 text-center text-xs text-muted-foreground">
          Proyecto Integrador — Facultad de Ingeniería Electrónica e Informática
        </p>
      </div>
    </footer>
  );
}
