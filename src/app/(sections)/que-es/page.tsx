import SectionWrapper from "@/components/section-wrapper";
import { HelpCircle, AlertTriangle, ShieldAlert } from "lucide-react";

export default function QueEsPage() {
  return (
    <SectionWrapper
      title="¿Qué es el Phishing?"
      subtitle="Entendiendo la anatomía del fraude digital en el entorno universitario."
      icon={<HelpCircle size={24} />}
    >
      <div className="space-y-8">
        <p>
          El phishing es una forma de <strong>engaño digital</strong> en la que,
          de acuerdo con Molina Hernández y Olivas Doña (2025), personas mal
          intencionadas intentan robar información privada o credenciales
          haciéndose pasar por una institución confiable. Según explican Carreño
          Ardila et al. (2024), este método es conocido popularmente como una
          &quot;pesca digital&quot; en la que se envían mensajes electrónicos con
          enlaces a sitios web falsos para obtener datos de los usuarios.
        </p>

        <div className="my-8 rounded-2xl border border-primary-200 bg-primary-50 p-6 sm:p-8">
          <div className="mb-4 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-primary-600 shadow-sm">
              <ShieldAlert size={20} />
            </div>
            <h3 className="text-xl font-bold text-primary-900">
              No hackean tu computadora, hackean tu mente
            </h3>
          </div>
          <p className="text-primary-800">
            A diferencia de otros ataques cibernéticos, el phishing no busca
            romper la seguridad de una computadora, sino que utiliza la{" "}
            <strong>ingeniería social</strong>. Tal como señalan Carreño Ardila
            et al. (2024), esta técnica consiste en engañar a personas que no
            están capacitadas en seguridad digital mediante el uso de la
            manipulación.
            <br />
            <br />
            Por su parte, Molina Hernández y Olivas Doña (2025) destacan que es
            un <em>truco psicológico</em> que explota la confianza o la urgencia
            del usuario para que este realice acciones que lo perjudiquen sin
            darse cuenta.
          </p>
        </div>

        <p>
          En el ámbito estudiantil, la vulnerabilidad es alta debido al uso
          masivo de plataformas digitales. Factores como la confianza excesiva y
          el desconocimiento sobre cómo verificar la legitimidad de un mensaje
          facilitan que los estudiantes se conviertan en objetivos fáciles.
        </p>

        {/* Dato clave */}
        <aside className="my-8 flex gap-4 rounded-xl border-l-4 border-amber-500 bg-white p-6 shadow-sm ring-1 ring-neutral-200">
          <AlertTriangle
            className="shrink-0 text-amber-500"
            size={24}
            aria-hidden="true"
          />
          <div>
            <h4 className="text-sm font-bold tracking-wider text-amber-800 uppercase">
              Dato Crítico
            </h4>
            <p className="mt-1 font-medium text-neutral-800">
              Una investigación realizada por Molina Hernández y Olivas Doña
              (2025) demostró que un{" "}
              <strong className="text-amber-600">
                36,9% de los estudiantes universitarios
              </strong>{" "}
              analizados resultaron vulnerables ante ataques simulados por
              correo electrónico.
            </p>
          </div>
        </aside>

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
