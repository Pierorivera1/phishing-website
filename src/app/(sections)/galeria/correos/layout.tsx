import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Galería de Correos Fraudulentos",
  description:
    "Analiza ejemplos visuales de correos de phishing y aprende a identificar remitentes falsos, enlaces sospechosos y tácticas de urgencia.",
};

export default function GaleriaCorreosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
