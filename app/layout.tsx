import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

/* ── Google Font: Inter ────────────────────────────────────────────── */
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

/* ── SEO Metadata ──────────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: {
    default:
      "Anti-Phishing UNFV — Plataforma de Concientización y Prevención",
    template: "%s | Anti-Phishing UNFV",
  },
  description:
    "Plataforma web educativa para la concientización y prevención del phishing y fraudes digitales, dirigida a estudiantes de la Universidad Nacional Federico Villarreal.",
  keywords: [
    "phishing",
    "ciberseguridad",
    "UNFV",
    "seguridad digital",
    "fraude digital",
    "concientización",
  ],
  authors: [{ name: "FIIEI — UNFV" }],
  openGraph: {
    type: "website",
    locale: "es_PE",
    siteName: "Anti-Phishing UNFV",
    title:
      "Anti-Phishing UNFV — Plataforma de Concientización y Prevención",
    description:
      "Aprende a identificar y prevenir ataques de phishing y fraudes digitales.",
  },
};

/* ── Root Layout ───────────────────────────────────────────────────── */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${inter.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col font-sans">
        {/* Sticky navbar */}
        <Navbar />

        {/* Main content — offset by nav height */}
        <main
          id="main-content"
          className="flex-1"
          style={{ paddingTop: "var(--nav-height)" }}
        >
          {children}
        </main>

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
