import SectionWrapper from "@/components/section-wrapper";
import PhishingStep from "@/components/phishing-step";
import { Zap, Mail, LayoutTemplate, Database, BrainCircuit } from "lucide-react";

export default function ComoFuncionaPage() {
  return (
    <SectionWrapper
      title="¿Cómo funciona un ataque?"
      subtitle="De acuerdo con las investigaciones sobre ciberseguridad, un ataque típico sigue un proceso metódico de 3 pasos (Abdulla et al., 2023)."
      icon={<Zap size={24} />}
    >
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
    </SectionWrapper>
  );
}
