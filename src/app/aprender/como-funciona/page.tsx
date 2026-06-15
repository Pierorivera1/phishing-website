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

export default function AprenderComoFuncionaPage() {
  return (
    <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-neutral-200 sm:p-10">
      <header className="mb-8 border-b border-neutral-100 pb-8">
        <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary-50 text-primary-600 ring-1 ring-primary-100">
          <Zap size={24} />
        </div>
        <h1 className="text-3xl font-extrabold tracking-tight text-neutral-900 sm:text-4xl">
          ¿Cómo funciona un ataque?
        </h1>
        <p className="mt-4 text-lg text-neutral-500">
          De acuerdo con las investigaciones sobre ciberseguridad, un ataque
          típico sigue un proceso metódico de 6 pasos (Abdulla et al., 2023).
        </p>
      </header>

      {/* Línea de tiempo — 6 pasos */}
      <div className="mt-8 rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm sm:p-10">
        <PhishingStep
          stepNumber={1}
          icon={<Crosshair size={24} />}
          title="Eligen a quién engañar"
          description="El ataque puede ser masivo (miles de correos genéricos) o dirigido a una persona específica, lo que se conoce como spear phishing. En el segundo caso, el atacante investiga tu nombre, carrera o actividad reciente para personalizar el engaño (Abdulla et al., 2023)."
        />

        <PhishingStep
          stepNumber={2}
          icon={<Drama size={24} />}
          title="Crean una mentira creíble"
          description="Usando ingeniería social, construyen un pretexto convincente: un correo de tu universidad pidiendo que actualices tu contraseña, una alerta bancaria urgente o una oferta irresistible. Explotan emociones como el miedo, la urgencia o la curiosidad (Carreño Ardila et al., 2024)."
        />

        <PhishingStep
          stepNumber={3}
          icon={<Send size={24} />}
          title='Lanzan el "anzuelo"'
          description="Envían el mensaje por el canal más efectivo: correo electrónico, SMS (smishing), llamada telefónica (vishing) o incluso redes sociales. El 57.3% de los estudiantes haría clic en un enlace de correo que suplanta a una institución (Abdulla et al., 2023)."
        />

        <PhishingStep
          stepNumber={4}
          icon={<Globe size={24} />}
          title="Ponen la trampa técnica"
          description="Si haces clic, se abre una página web clonada que imita perfectamente a la institución legítima: mismos colores, logo y estructura. Alternativamente, descargas un archivo adjunto que instala software malicioso en tu dispositivo."
        />

        <PhishingStep
          stepNumber={5}
          icon={<UserX size={24} />}
          title="Tú caes en el engaño"
          description="Ingresas tu usuario y contraseña creyendo que es el sitio real. El error no es técnico sino humano: la urgencia del mensaje te impide verificar. Según Molina Hernández y Olivas Doña (2025), el 36.9% de los universitarios cayó en un ataque simulado."
        />

        <PhishingStep
          stepNumber={6}
          icon={<DatabaseZap size={24} />}
          title="Te roban la información"
          description="El atacante captura tus credenciales en tiempo real. A partir de ese momento, puede acceder a tu correo institucional, cuentas bancarias, redes sociales o incluso tomar control remoto de tu dispositivo. El daño puede ir desde el robo de identidad hasta pérdidas económicas."
          isLast={true}
        />
      </div>

      {/* Rol de la Ingeniería Social */}
      <div className="mt-12 rounded-2xl border border-primary-200 bg-gradient-to-br from-primary-50 to-white p-6 shadow-sm sm:p-10">
        <div className="mb-6 flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-600 text-white shadow-md">
            <BrainCircuit size={24} />
          </div>
          <h2 className="text-2xl font-bold text-primary-900">
            El rol de la Ingeniería Social: El &quot;hackeo&quot; humano
          </h2>
        </div>

        <div className="space-y-4 text-primary-800">
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
        </div>
      </div>

      <div className="mt-12 flex justify-end border-t border-neutral-100 pt-8">
        <Link
          href="/galeria/correos"
          className="inline-flex items-center gap-2 rounded-xl bg-primary-600 px-6 py-3 text-sm font-semibold text-white shadow-md transition-all hover:bg-primary-700 active:scale-95"
        >
          Siguiente módulo
          <ArrowRight size={18} />
        </Link>
      </div>
    </div>
  );
}
