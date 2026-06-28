import Link from "next/link";
import { Layers, AlertCircle, Smartphone, Phone, Gift, Users, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/8bit/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const tipos = [
  {
    id: "spear-phishing",
    title: "1. Spear Phishing (Ataque dirigido)",
    icon: <Users className="text-primary h-6 w-6" />,
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
    icon: <Smartphone className="text-primary h-6 w-6" />,
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
    icon: <Phone className="text-primary h-6 w-6" />,
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
    icon: <Gift className="text-primary h-6 w-6" />,
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
    icon: <AlertCircle className="text-primary h-6 w-6" />,
    description:
      "El atacante te ofrece un servicio o beneficio técnico a cambio de que tú le des acceso a tu información (Abdulla et al., 2023).",
    example: {
      type: "Chat / Foro estudiantil",
      body: 'Estás teniendo problemas con una tarea y alguien se ofrece a pasarte un "programa gratuito" que hace el trabajo por ti. A cambio, solo te pide que le permitas acceso remoto a tu computadora o que le des tus credenciales para "configurar" el software (Abdulla et al., 2023).',
    },
  },
];

export default function AprenderTiposPage() {
  return (
    <Card className="rounded-none border-4 border-border bg-card shadow-[6px_6px_0px_0px_var(--secondary)] p-6 sm:p-10">
      <CardHeader className="p-0 mb-8 border-b border-border pb-8">
        <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-none border-2 border-border p-2 bg-primary/10 text-primary">
          <Layers className="h-6 w-6" />
        </div>
        <CardTitle 
          className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl"
          style={{ fontFamily: "'Pixelify Sans', system-ui, sans-serif" }}
        >
          Tipos de Phishing
        </CardTitle>
        <p className="mt-4 text-base text-muted-foreground">
          Conoce las diferentes estrategias que usan los atacantes para engañarte.
        </p>
      </CardHeader>

      <CardContent className="p-0 mt-8 flex flex-col gap-10">
        {tipos.map((tipo) => (
          <Card
            key={tipo.id}
            className="rounded-none border-4 border-border bg-card shadow-[6px_6px_0px_0px_var(--secondary)] overflow-hidden"
          >
            {/* Cabecera / Teoría */}
            <div className="flex gap-4 p-6 sm:p-8">
              <div className="mt-1 shrink-0 rounded-none border-2 border-border p-2 bg-primary/10 flex items-center justify-center h-11 w-11">
                {tipo.icon}
              </div>
              <div>
                <h2 
                  className="text-lg font-bold text-foreground sm:text-xl"
                  style={{ fontFamily: "'Pixelify Sans', system-ui, sans-serif" }}
                >
                  {tipo.title}
                </h2>
                <p className="mt-2 text-base leading-relaxed text-muted-foreground">
                  {tipo.description}
                </p>
              </div>
            </div>

            {/* Simulación / Ejemplo */}
            <div className="border-t border-border bg-muted/20 p-6 sm:px-8 sm:py-6">
              <div className="relative rounded-none border-l-4 border-l-destructive border-t-2 border-r-2 border-b-2 border-border bg-card p-5 shadow-none">
                <div className="mb-2 flex items-center justify-between border-b border-border pb-2">
                  <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider">
                    Ejemplo de {tipo.example.type}
                  </span>
                  <Badge variant="outline" className="rounded-none border-2 text-destructive border-destructive/20 bg-destructive/5 gap-1">
                    <AlertCircle className="h-3 w-3" /> Fraude
                  </Badge>
                </div>
                
                {tipo.example.subject && (
                  <div className="mb-2 text-sm">
                    <span className="font-semibold text-muted-foreground">Asunto: </span>
                    <strong className="text-foreground">{tipo.example.subject}</strong>
                  </div>
                )}
                <p className="text-sm leading-relaxed text-muted-foreground italic">
                  &quot;{tipo.example.body}&quot;
                </p>
              </div>
            </div>
          </Card>
        ))}
      </CardContent>

      <div className="mt-12 flex justify-end border-t border-border pt-8">
        <Button
          asChild
          size="lg"
          font="normal"
          className="px-8 py-6 text-sm bg-primary text-primary-foreground hover:bg-primary/95 active:scale-[0.97]"
          style={{ fontFamily: "'Pixelify Sans', system-ui, sans-serif" }}
        >
          <Link href="/aprender/como-funciona">
            Siguiente módulo
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </Card>
  );
}
