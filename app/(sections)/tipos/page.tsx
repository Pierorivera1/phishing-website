import SectionWrapper from "@/components/section-wrapper";
import { Layers, AlertCircle, Smartphone, Phone, Gift, Users } from "lucide-react";

const tipos = [
  {
    id: "spear-phishing",
    title: "1. Spear Phishing (Ataque dirigido)",
    icon: <Users className="text-primary-600" size={24} />,
    description:
      "Es un ataque personalizado. El estafador investiga tu nombre o tu carrera para que el mensaje parezca real y legítimo (Abdulla et al., 2023).",
    example: {
      type: "Correo Electrónico",
      subject: "Invitación exclusiva a la conferencia de Innovación Tecnológica 2025",
      body: "El mensaje dice que fuiste seleccionado por tu excelente promedio y te pide entrar a www.eventos-tec-inscripcion.com para confirmar tus datos (Molina Hernández y Olivas Doña, 2025).",
    },
  },
  {
    id: "smishing",
    title: "2. Smishing (Phishing por SMS)",
    icon: <Smartphone className="text-primary-600" size={24} />,
    description:
      "Es el engaño que llega a través de mensajes de texto a tu celular. Los atacantes buscan que actúes rápido y sin pensar (Molina Hernández y Olivas Doña, 2025).",
    example: {
      type: "Mensaje de Texto (SMS)",
      body: 'Tu línea será suspendida en 1 hora por falta de datos. Actualiza tu información aquí: [enlace falso] (Abdulla et al., 2023). Al abrirlo, te piden tu número de cédula y tarjeta para "validar" la cuenta.',
    },
  },
  {
    id: "vishing",
    title: "3. Vishing (Phishing por voz)",
    icon: <Phone className="text-primary-600" size={24} />,
    description:
      "Ocurre mediante llamadas telefónicas donde el estafador usa un lenguaje persuasivo para generar miedo o urgencia (Carreño Ardila et al., 2024).",
    example: {
      type: "Llamada Telefónica",
      body: 'Alguien dice ser del soporte técnico de la universidad. Te advierte que intentaron hackear tu correo institucional y que, para "ayudarte" a protegerlo, debes dictarle el código de seguridad que te acaba de llegar al móvil (Collado, 2024; Molina Hernández y Olivas Doña, 2025).',
    },
  },
  {
    id: "baiting",
    title: "4. Baiting (El anzuelo o cebo)",
    icon: <Gift className="text-primary-600" size={24} />,
    description:
      "Este tipo de ataque juega con tu curiosidad o con ofrecerte algo gratuito que te interesa mucho (Abdulla et al., 2023).",
    example: {
      type: "Correo / Anuncio",
      subject: "¡Felicidades! Ganaste un bono de $50 por participar en nuestra encuesta universitaria",
      body: "Para reclamar el dinero debes ingresar tu usuario y contraseña de estudiante en una página que imita perfectamente a la de la universidad (Molina Hernández y Olivas Doña, 2025).",
    },
  },
  {
    id: "quid-pro-quo",
    title: "5. Quid Pro Quo (Algo a cambio de algo)",
    icon: <AlertCircle className="text-primary-600" size={24} />,
    description:
      "El atacante te ofrece un servicio o beneficio técnico a cambio de que tú le des acceso a tu información (Abdulla et al., 2023).",
    example: {
      type: "Chat / Foro estudiantil",
      body: 'Estás teniendo problemas con una tarea y alguien se ofrece a pasarte un "programa gratuito" que hace el trabajo por ti. A cambio, solo te pide que le permitas acceso remoto a tu computadora o que le des tus credenciales para "configurar" el software (Abdulla et al., 2023).',
    },
  },
];

export default function TiposPage() {
  return (
    <SectionWrapper
      title="Tipos de Phishing"
      subtitle="Conoce las diferentes estrategias que usan los atacantes para engañarte."
      icon={<Layers size={24} />}
    >
      <div className="mt-8 flex flex-col gap-10">
        {tipos.map((tipo) => (
          <div
            key={tipo.id}
            className="overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm transition-shadow hover:shadow-md"
          >
            {/* Cabecera / Teoría */}
            <div className="flex gap-4 p-6 sm:p-8">
              <div className="mt-1 shrink-0 rounded-xl bg-primary-50 p-2.5">
                {tipo.icon}
              </div>
              <div>
                <h2 className="text-xl font-bold text-neutral-900 sm:text-2xl">
                  {tipo.title}
                </h2>
                <p className="mt-2 text-base leading-relaxed text-neutral-600">
                  {tipo.description}
                </p>
              </div>
            </div>

            {/* Simulación / Ejemplo */}
            <div className="border-t border-neutral-100 bg-neutral-50 p-6 sm:px-8 sm:py-6">
              <div className="relative rounded-xl border-l-4 border-danger-500 bg-white p-5 shadow-sm ring-1 ring-neutral-200/60">
                <div className="mb-2 flex items-center justify-between border-b border-neutral-100 pb-2">
                  <span className="text-xs font-bold text-neutral-400 uppercase tracking-wider">
                    Ejemplo de {tipo.example.type}
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-full bg-danger-50 px-2.5 py-0.5 text-xs font-medium text-danger-700">
                    <AlertCircle size={12} /> Fraude
                  </span>
                </div>
                
                {tipo.example.subject && (
                  <div className="mb-2">
                    <span className="text-sm font-semibold text-neutral-500">Asunto: </span>
                    <strong className="text-sm text-neutral-900">{tipo.example.subject}</strong>
                  </div>
                )}
                <p className="text-sm leading-relaxed text-neutral-700 italic">
                  &quot;{tipo.example.body}&quot;
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
