import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Comparador de Sitios Web Fraudulentos",
  description:
    "Compara sitios web reales con sus copias fraudulentas y aprende a detectar las diferencias clave: URL, HTTPS, diseño y más.",
};

export default function GaleriaSitiosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
