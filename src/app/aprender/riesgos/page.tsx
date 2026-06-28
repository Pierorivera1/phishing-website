import Link from "next/link";
import { AlertTriangle, ShieldAlert, ArrowRight, Lock, UserCheck, Coins, EyeOff, Globe, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/8bit/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

const paisesAtacados = [
  { rank: 1, pais: "Perú", porcentaje: "17.46%" },
  { rank: 2, pais: "Bangladés", porcentaje: "16.98%" },
  { rank: 3, pais: "Malaui", porcentaje: "16.65%" },
  { rank: 4, pais: "Túnez", porcentaje: "16.19%" },
  { rank: 5, pais: "Colombia", porcentaje: "15.67%" },
  { rank: 6, pais: "Brasil", porcentaje: "15.48%" },
  { rank: 7, pais: "Ecuador", porcentaje: "15.27%" },
  { rank: 8, pais: "Madagascar", porcentaje: "15.23%" },
  { rank: 9, pais: "Kenia", porcentaje: "15.23%" },
  { rank: 10, pais: "Vietnam", porcentaje: "15.05%" },
];

const consecuencias = [
  {
    icon: <Lock className="h-6 w-6 text-primary" />,
    title: "Robo de cuentas",
    description: "Los atacantes pueden obtener acceso a tus correos electrónicos, redes sociales y plataformas académicas utilizando las credenciales robadas.",
    color: "border-primary shadow-[4px_4px_0px_0px_rgba(255,55,0,0.2)]",
  },
  {
    icon: <UserCheck className="h-6 w-6 text-primary" />,
    title: "Robo de identidad",
    description: "Los ciberdelincuentes pueden utilizar tus datos personales para hacerse pasar por ti y cometer fraudes.",
    color: "border-primary shadow-[4px_4px_0px_0px_rgba(255,55,0,0.2)]",
  },
  {
    icon: <Coins className="h-6 w-6 text-primary" />,
    title: "Pérdidas económicas",
    description: "Las credenciales bancarias robadas pueden ser utilizadas para realizar compras o transferencias no autorizadas.",
    color: "border-primary shadow-[4px_4px_0px_0px_rgba(255,55,0,0.2)]",
  },
  {
    icon: <EyeOff className="h-6 w-6 text-primary" />,
    title: "Exposición de información privada",
    description: "Fotografías, documentos, historiales médicos y otros datos personales pueden quedar expuestos.",
    color: "border-primary shadow-[4px_4px_0px_0px_rgba(255,55,0,0.2)]",
  },
];

const casosReales = [
  {
    title: "Universidad de California (2023)",
    description: "A finales de 2023, una red de ciberdelincuentes utilizó correos electrónicos de phishing suplantando a UCPath (el sistema centralizado de nóminas de los empleados de la universidad) para robar credenciales y desviar los pagos de salarios de los trabajadores universitarios.",
    badge: "Sector Educativo",
  },
  {
    title: "Empresa Air-e (Colombia, 2024)",
    description: "El 2 de septiembre de 2024, la empresa comercializadora de energía Air-e en Colombia sufrió un sofisticado ataque cibernético de tipo ransomware 'día cero'. El incidente vulneró sus sistemas de seguridad, provocando una prolongada caída de sus plataformas comerciales, como Open Smartflex, y afectando el sistema de atención y gestión de reclamos.",
    badge: "Infraestructura Crítica",
  },
  {
    title: "Comité Nacional Demócrata (EE.UU., 2016)",
    description: "El hackeo al Comité Nacional Demócrata (DNC) en 2016 se ejecutó principalmente mediante ataques de spear-phishing (correos electrónicos dirigidos a objetivos específicos). Estos mensajes lograron robar credenciales de alto nivel y expusieron miles de correos y documentos internos del Partido Demócrata en EE. UU.",
    badge: "Ámbito Político",
  },
];

export default function AprenderRiesgosPage() {
  return (
    <Card className="rounded-none border-4 border-border bg-card shadow-[6px_6px_0px_0px_var(--secondary)] p-6 sm:p-10">
      <CardHeader className="p-0 mb-8 border-b border-border pb-8">
        <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-none border-2 border-border p-2 bg-primary/10 text-primary">
          <AlertTriangle className="h-6 w-6" />
        </div>
        <CardTitle
          className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl"
          style={{ fontFamily: "'Pixelify Sans', system-ui, sans-serif" }}
        >
          Riesgos del Phishing
        </CardTitle>
        <p className="mt-4 text-base text-muted-foreground">
          Un solo clic puede comprometer tus cuentas, tu dinero y tu información personal.
        </p>
      </CardHeader>

      <CardContent className="p-0 space-y-10 text-base leading-relaxed text-muted-foreground sm:text-lg sm:leading-loose">
        {/* Introducción */}
        <section className="space-y-4">
          <p>
            La transformación digital ha cambiado la forma en que estudiamos, trabajamos y nos comunicamos. Cada vez más personas utilizan internet para realizar actividades cotidianas, como acceder a redes sociales, realizar pagos en línea o gestionar información académica. Sin embargo, este crecimiento también ha incrementado los riesgos asociados a los delitos informáticos.
          </p>
          <p>
            Dentro de estos delitos, el phishing se ha convertido en una de las técnicas más utilizadas por los ciberdelincuentes. A través de correos electrónicos, mensajes de texto, redes sociales o sitios web falsificados, los atacantes buscan engañar a los usuarios para obtener información sensible.
          </p>
        </section>

        {/* Estadísticas Perú */}
        <section className="space-y-6 pt-6 border-t border-border">
          <h3
            className="text-xl font-bold text-foreground"
            style={{ fontFamily: "'Pixelify Sans', system-ui, sans-serif" }}
          >
            Aumento del Ciberdelito en el Perú
          </h3>
          <p>
            En el Perú, los ciberdelitos han experimentado un crecimiento significativo durante los últimos años. Según datos del Ministerio Público, las denuncias por delitos informáticos pasaron de <strong className="text-foreground">4,304 casos en 2018</strong> a más de <strong className="text-foreground">42,000 casos en 2024</strong>, evidenciando un incremento alarmante de estas amenazas digitales.
          </p>
          
          <div className="flex flex-col items-center justify-center gap-4 py-4">
            <div className="border-4 border-border p-2 bg-card shadow-[4px_4px_0px_0px_var(--secondary)] max-w-2xl w-full">
              <img
                src="/images/Denuncia_de_delitos_informaticos2018-2024.jpeg"
                alt="Gráfico de Denuncia de delitos informáticos en el Perú 2018-2024"
                className="w-full h-auto object-contain"
                style={{ imageRendering: "auto" }}
              />
              <p className="text-center text-xs mt-2 text-muted-foreground italic">
                Evolución de las denuncias de delitos informáticos ante el Ministerio Público del Perú (2018-2024).
              </p>
            </div>
          </div>
        </section>

        {/* Kaspersky Report */}
        <section className="space-y-6 pt-6 border-t border-border">
          <h3
            className="text-xl font-bold text-foreground"
            style={{ fontFamily: "'Pixelify Sans', system-ui, sans-serif" }}
          >
            Ranking Mundial: Perú en la Mira
          </h3>
          <p>
            A nivel mundial, el informe de <strong className="text-foreground">Kaspersky (2025)</strong> revela un dato sumamente preocupante: el país con el mayor porcentaje de usuarios que sufrieron ataques de phishing sigue siendo el <strong className="text-primary">Perú con un 17.46%</strong> de los ataques dirigidos en la región y el mundo.
          </p>

          <div className="flex flex-col lg:flex-row gap-6 items-start justify-between py-4">
            {/* Tabla comparativa */}
            <div className="w-full lg:w-1/2 border-4 border-border bg-card p-4 shadow-[4px_4px_0px_0px_var(--secondary)]">
              <h4 
                className="text-sm font-bold text-foreground mb-4 uppercase tracking-wider"
                style={{ fontFamily: "'Pixelify Sans', system-ui, sans-serif" }}
              >
                Top 10 Países con más Ataques de Phishing
              </h4>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs sm:text-sm font-mono">
                  <thead>
                    <tr className="border-b-2 border-border text-foreground font-bold">
                      <th className="pb-2">Nº</th>
                      <th className="pb-2">País / Territorio</th>
                      <th className="pb-2 text-right">Porcentaje de usuarios atacados</th>
                    </tr>
                  </thead>
                  <tbody>
                    {paisesAtacados.map((item) => (
                      <tr 
                        key={item.rank} 
                        className={`border-b border-border/40 hover:bg-primary/5 ${item.pais === "Perú" ? "bg-primary/10 text-primary font-bold" : ""}`}
                      >
                        <td className="py-2">{item.rank}</td>
                        <td className="py-2">{item.pais}</td>
                        <td className="py-2 text-right">{item.porcentaje}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Imagen Kaspersky */}
            <div className="w-full lg:w-1/2 border-4 border-border p-2 bg-card shadow-[4px_4px_0px_0px_var(--secondary)]">
              <img
                src="/images/Informe_Kaspersky.jpeg"
                alt="Gráfico de Informe de Kaspersky 2025"
                className="w-full h-auto object-contain"
                style={{ imageRendering: "auto" }}
              />
              <p className="text-center text-xs mt-2 text-muted-foreground italic">
                Distribución mundial de ataques de phishing - Reporte Kaspersky 2025.
              </p>
            </div>
          </div>
        </section>

        {/* Consecuencias */}
        <section className="space-y-6 pt-6 border-t border-border">
          <h3
            className="text-xl font-bold text-foreground"
            style={{ fontFamily: "'Pixelify Sans', system-ui, sans-serif" }}
          >
            Consecuencias Críticas
          </h3>
          <p>
            Un ataque de phishing exitoso no solo afecta tu bandeja de entrada; tiene repercusiones reales y devastadoras en tu vida personal, académica y financiera.
          </p>

          <div className="grid gap-6 sm:grid-cols-2">
            {consecuencias.map((c, i) => (
              <div 
                key={i} 
                className={`border-4 p-5 bg-card flex flex-col gap-3 transition-transform hover:-translate-y-1 ${c.color}`}
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 border-2 border-border bg-primary/10">
                    {c.icon}
                  </div>
                  <h4 
                    className="text-base font-bold text-foreground"
                    style={{ fontFamily: "'Pixelify Sans', system-ui, sans-serif" }}
                  >
                    {c.title}
                  </h4>
                </div>
                <p className="text-sm text-muted-foreground sm:leading-relaxed">
                  {c.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Casos Reales */}
        <section className="space-y-6 pt-6 border-t border-border">
          <h3
            className="text-xl font-bold text-foreground"
            style={{ fontFamily: "'Pixelify Sans', system-ui, sans-serif" }}
          >
            Casos Reales Documentados
          </h3>
          <p>
            Para comprender el alcance del peligro, observa cómo organizaciones e instituciones de gran escala han sido vulneradas:
          </p>

          <div className="space-y-6">
            {casosReales.map((caso, i) => (
              <Card key={i} className="rounded-none border-2 border-border bg-muted/20 p-5 shadow-none">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border pb-3 mb-3">
                  <h4 
                    className="text-base font-bold text-foreground"
                    style={{ fontFamily: "'Pixelify Sans', system-ui, sans-serif" }}
                  >
                    {caso.title}
                  </h4>
                  <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 border border-border bg-card text-muted-foreground font-mono">
                    {caso.badge}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground sm:leading-relaxed">
                  {caso.description}
                </p>
              </Card>
            ))}
          </div>
        </section>
      </CardContent>

      <div className="mt-12 flex justify-between border-t border-border pt-8">
        <Button
          asChild
          size="lg"
          variant="outline"
          font="normal"
          className="px-8 py-6 text-sm border-2 border-border bg-card hover:bg-muted active:scale-[0.97]"
          style={{ fontFamily: "'Pixelify Sans', system-ui, sans-serif" }}
        >
          <Link href="/aprender">
            Módulo anterior
          </Link>
        </Button>
        <Button
          asChild
          size="lg"
          font="normal"
          className="px-8 py-6 text-sm bg-primary text-primary-foreground hover:bg-primary/95 active:scale-[0.97]"
          style={{ fontFamily: "'Pixelify Sans', system-ui, sans-serif" }}
        >
          <Link href="/aprender/tipos">
            Siguiente módulo
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </Card>
  );
}
