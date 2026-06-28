import Link from "next/link";
import PhishingStep from "@/components/phishing-step";
import {
  Zap,
  Crosshair,
  Drama,
  Send,
  Globe,
  UserX,
  DatabaseZap,
  BrainCircuit,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/8bit/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function AprenderComoFuncionaPage() {
  return (
    <Card className="rounded-none border-4 border-border bg-card shadow-[6px_6px_0px_0px_var(--secondary)] p-6 sm:p-10">
      <CardHeader className="p-0 mb-8 border-b border-border pb-8">
        <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-none border-2 border-border p-2 bg-primary/10 text-primary">
          <Zap className="h-6 w-6" />
        </div>
        <CardTitle 
          className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl"
          style={{ fontFamily: "'Pixelify Sans', system-ui, sans-serif" }}
        >
          ¿Cómo funciona un ataque?
        </CardTitle>
        <p className="mt-4 text-base text-muted-foreground">
          De acuerdo con las investigaciones sobre ciberseguridad, un ataque
          típico sigue un proceso metódico de 6 pasos (Abdulla et al., 2023).
        </p>
      </CardHeader>

      <CardContent className="p-0">
        {/* Línea de tiempo — 6 pasos */}
        <Card className="mt-8 rounded-none border-4 border-border bg-card p-6 shadow-none sm:p-10">
          <CardContent className="p-0">
            <PhishingStep
              stepNumber={1}
              icon={<Crosshair className="h-6 w-6" />}
              title="Eligen a quién engañar"
              description="El ataque puede ser masivo (miles de correos genéricos) o dirigido a una persona específica, lo que se conoce como spear phishing. En el segundo caso, el atacante investiga tu nombre, carrera o actividad reciente para personalizar el engaño (Abdulla et al., 2023)."
            />

            <PhishingStep
              stepNumber={2}
              icon={<Drama className="h-6 w-6" />}
              title="Crean una mentira creíble"
              description="Usando ingeniería social, construyen un pretexto convincente: un correo de tu universidad pidiendo que actualices tu contraseña, una alerta bancaria urgente o una oferta irresistible. Explotan emociones como el miedo, la urgencia o la curiosidad (Carreño Ardila et al., 2024)."
            />

            <PhishingStep
              stepNumber={3}
              icon={<Send className="h-6 w-6" />}
              title='Lanzan el "anzuelo"'
              description="Envían el mensaje por el canal más efectivo: correo electrónico, SMS (smishing), llamada telefónica (vishing) o incluso redes sociales. El 57.3% de los estudiantes haría clic en un enlace de correo que suplanta a una institución (Abdulla et al., 2023)."
            />

            <PhishingStep
              stepNumber={4}
              icon={<Globe className="h-6 w-6" />}
              title="Ponen la trampa técnica"
              description="Si haces clic, se abre una página web clonada que imita perfectamente a la institución legítima: mismos colores, logo y estructura. Alternativamente, descargas un archivo adjunto que instala software malicioso en tu dispositivo."
            />

            <PhishingStep
              stepNumber={5}
              icon={<UserX className="h-6 w-6" />}
              title="Tú cae en el engaño"
              description="Ingresas tu usuario y contraseña creyendo que es el sitio real. El error no es técnico sino humano: la urgencia del mensaje te impide verificar. Según Molina Hernández y Olivas Doña (2025), el 36.9% de los universitarios cayó en un ataque simulado."
            />

            <PhishingStep
              stepNumber={6}
              icon={<DatabaseZap className="h-6 w-6" />}
              title="Te roban la información"
              description="El atacante captura tus credenciales en tiempo real. A partir de ese momento, puede acceder a tu correo institucional, cuentas bancarias, redes sociales o incluso tomar control remoto de tu dispositivo. El daño puede ir desde el robo de identidad hasta pérdidas económicas."
              isLast={true}
            />
          </CardContent>
        </Card>

        {/* Rol de la Ingeniería Social */}
        <Card className="mt-12 rounded-none border-4 border-primary/20 bg-primary/5 p-6 sm:p-10 shadow-none">
          <CardHeader className="p-0 mb-6 flex flex-row items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-none border-2 border-border bg-primary text-primary-foreground">
              <BrainCircuit className="h-6 w-6" />
            </div>
            <CardTitle 
              className="text-xl font-bold text-foreground"
              style={{ fontFamily: "'Pixelify Sans', system-ui, sans-serif" }}
            >
              El rol de la Ingeniería Social: El &quot;hackeo&quot; humano
            </CardTitle>
          </CardHeader>

          <CardContent className="p-0 space-y-4 text-muted-foreground">
            <p>
              La ingeniería social es el motor que hace que el phishing funcione.
              Su rol principal es manipular el comportamiento humano en lugar de
              atacar la tecnología directamente (Abdulla et al., 2023).
            </p>
            <p>
              En lugar de intentar descifrar una contraseña mediante software, el
              atacante utiliza la ingeniería social para influir en tus emociones,
              ganar tu confianza o persuadirte mediante engaños (Abdulla et al.,
              2023).
            </p>
          </CardContent>
        </Card>
      </CardContent>

      <div className="mt-12 flex justify-end border-t border-border pt-8">
        <Button
          asChild
          size="lg"
          font="normal"
          className="px-8 py-6 text-sm bg-primary text-primary-foreground hover:bg-primary/95 active:scale-[0.97]"
          style={{ fontFamily: "'Pixelify Sans', system-ui, sans-serif" }}
        >
          <Link href="/galeria/correos">
            Siguiente módulo
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </Card>
  );
}
