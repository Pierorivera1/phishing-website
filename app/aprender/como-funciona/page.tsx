import PhishingStep from "@/components/phishing-step";
import { Zap, Mail, LayoutTemplate, Database, BrainCircuit, ArrowRight } from "lucide-react";

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
          De acuerdo con las investigaciones sobre ciberseguridad, un ataque típico sigue un proceso metódico de 3 pasos (Abdulla et al., 2023).
        </p>
      </header>

      {/* Línea de tiempo */}
      <div className="mt-8 rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm sm:p-10">
        <PhishingStep
          stepNumber={1}
          icon={<Mail size={24} />}
          title="El envío del 'anzuelo'"
          description="El atacante envía un correo electrónico o un mensaje que contiene un enlace o un archivo adjunto. Este mensaje suele parecer importante o urgente para llamar tu atención rápidamente."
        />
        
        <PhishingStep
          stepNumber={2}
          icon={<LayoutTemplate size={24} />}
          title="La creación del engaño"
          description="Si haces clic en el enlace, se abre una página web diseñada para imitar perfectamente a una institución legítima (como tu universidad o un banco). El objetivo es que te sientas en un entorno seguro y conocido."
        />

        <PhishingStep
          stepNumber={3}
          icon={<Database size={24} />}
          title="El robo de datos"
          description="Al ingresar tus datos en esa página falsa, el atacante captura tu información de forma inmediata. A partir de ese momento, tienen acceso no autorizado a tu cuenta o a tus archivos personales."
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
        <button
          disabled
          className="inline-flex cursor-not-allowed items-center gap-2 rounded-xl bg-primary-600 px-6 py-3 text-sm font-semibold text-white opacity-50 shadow-md transition-all"
          title="Próximamente"
        >
          Siguiente módulo
          <ArrowRight size={18} />
        </button>
      </div>
    </div>
  );
}
