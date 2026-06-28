import SectionWrapper from "@/components/section-wrapper";
import { HelpCircle, AlertTriangle, ShieldAlert } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";

export default function QueEsPage() {
  return (
    <SectionWrapper
      title="¿Qué es el Phishing?"
      subtitle="Entendiendo la anatomía del fraude digital en el entorno universitario."
      icon={<HelpCircle size={24} />}
    >
      <div className="space-y-8">
        <p>
          El phishing es una forma de <strong className="text-foreground">engaño digital</strong>{" "}en la que,
          de acuerdo con Molina Hernández y Olivas Doña (2025), personas mal
          intencionadas intentan robar información privada o credenciales
          haciéndose pasar por una institución confiable. Según explican Carreño
          Ardila et al. (2024), este método es conocido popularmente como una
          &quot;pesca digital&quot; en la que se envían mensajes electrónicos con
          enlaces a sitios web falsos para obtener datos de los usuarios.
        </p>

        <Card className="my-8 rounded-none border-4 border-primary/20 bg-primary/5 p-6 sm:p-8 shadow-none">
          <CardHeader className="p-0 mb-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-none bg-card text-primary border-2 border-border">
                <ShieldAlert className="h-5 w-5" />
              </div>
              <CardTitle 
                className="text-lg font-bold text-primary dark:text-primary-400"
                style={{ fontFamily: "'Pixelify Sans', system-ui, sans-serif" }}
              >
                No hackean tu computadora, hackean tu mente
              </CardTitle>
            </div>
          </CardHeader>
          <CardContent className="p-0">
            <p className="text-muted-foreground">
              A diferencia de otros ataques cibernéticos, el phishing no busca
              romper la seguridad de una computadora, sino que utiliza la{" "}
              <strong className="text-foreground">ingeniería social</strong>. Tal como señalan Carreño Ardila
              et al. (2024), esta técnica consiste en engañar a personas que no
              están capacitadas en seguridad digital mediante el uso de la
              manipulación.
              <br />
              <br />
              Por su parte, Molina Hernández y Olivas Doña (2025) destacan que es
              un <em className="text-foreground font-medium not-italic">truco psicológico</em> que explota la confianza o la urgencia
              del usuario para que este realice acciones que lo perjudiquen sin
              darse cuenta.
            </p>
          </CardContent>
        </Card>

        <p>
          En el ámbito estudiantil, la vulnerabilidad es alta debido al uso
          masivo de plataformas digitales. Factores como la confianza excesiva y
          el desconocimiento sobre cómo verificar la legitimidad de un mensaje
          facilitan que los estudiantes se conviertan en objetivos fáciles.
        </p>

        {/* Dato clave */}
        <Alert className="my-8 rounded-none border-4 border-l-amber-500 bg-amber-500/5 border-border">
          <AlertTriangle className="h-5 w-5 text-amber-500 shrink-0" />
          <AlertTitle 
            className="text-sm font-bold tracking-wider text-amber-850 dark:text-amber-500 ml-2"
            style={{ fontFamily: "'Pixelify Sans', system-ui, sans-serif" }}
          >
            Dato Crítico
          </AlertTitle>
          <AlertDescription className="mt-1 font-medium text-foreground ml-2">
            Una investigación realizada por Molina Hernández y Olivas Doña
            (2025) demostró que un{" "}
            <strong className="text-amber-600 dark:text-amber-500">
              36,9% de los estudiantes universitarios
            </strong>{" "}
            analizados resultaron vulnerables ante ataques simulados por
            correo electrónico.
          </AlertDescription>
        </Alert>

        <p>
          El objetivo final de estos ataques suele ser el robo de información
          sensible, como contraseñas, números de tarjetas de crédito o datos
          personales y académicos. Por ello, como recomiendan Carreño Ardila et
          al. (2024), es vital desarrollar una cultura de prevención y
          verificación constante antes de interactuar con cualquier
          comunicación digital inesperada.
        </p>
      </div>
    </SectionWrapper>
  );
}
