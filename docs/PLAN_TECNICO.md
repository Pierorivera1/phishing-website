# PLAN TÉCNICO — Plataforma Web Anti-Phishing UNFV

## Información del Proyecto

| Campo | Detalle |
|---|---|
| **Título** | Desarrollo de una Plataforma Web para la Concientización y Prevención del Phishing y Fraudes Digitales en Estudiantes |
| **Institución** | Universidad Nacional Federico Villarreal — Facultad de Ingeniería Electrónica e Informática |
| **Público objetivo** | Estudiantes de la Facultad de Ciencias Sociales, UNFV |
| **Metodología** | Scrum (3 Sprints) |
| **Rol del usuario** | Desarrollador Frontend Principal (Piero Raúl Rivera Estrada) |

---

## Stack Tecnológico

| Tecnología | Versión | Uso |
|---|---|---|
| **Next.js** | 15.x | Framework React con App Router, SSR/SSG |
| **TypeScript** | 5.x | Tipado estático |
| **Tailwind CSS** | 4.x | Estilos utilitarios, diseño responsive |
| **SQLite** | 3.x | Base de datos local para respaldo de evaluaciones |
| **better-sqlite3** | Última | Driver SQLite síncrono para Node.js |
| **Lucide React** | Última | Iconografía |
| **shadcn/ui** | Última | Componentes UI accesibles (opcional) |

---

## Arquitectura de Carpetas

```
phishing-unfv/
├── app/                          # App Router Next.js 15
│   ├── (sections)/               # Grupo de rutas sin segmento URL
│   │   ├── que-es/               # /que-es
│   │   │   └── page.tsx
│   │   ├── tipos/                # /tipos
│   │   │   └── page.tsx
│   │   ├── como-funciona/        # /como-funciona
│   │   │   └── page.tsx
│   │   ├── galeria/              # /galeria
│   │   │   ├── correos/          # /galeria/correos
│   │   │   │   └── page.tsx
│   │   │   └── sitios/           # /galeria/sitios
│   │   │       └── page.tsx
│   │   ├── consejos/             # /consejos
│   │   │   └── page.tsx
│   │   └── evaluacion/           # /evaluacion
│   │       └── page.tsx
│   ├── api/                      # API Routes
│   │   └── evaluacion/
│   │       └── route.ts          # POST/GET respuestas postest
│   ├── layout.tsx                # Root layout + Navbar + Footer
│   ├── page.tsx                  # Home (Página de Inicio)
│   └── globals.css               # Tailwind + estilos globales
├── components/                   # Componentes reutilizables
│   ├── ui/                       # Componentes base (Button, Card, Badge)
│   ├── navbar.tsx                # Menú de navegación funcional
│   ├── footer.tsx                # Pie de página
│   ├── mobile-menu.tsx           # Menú hamburger móvil
│   ├── section-wrapper.tsx       # Wrapper consistente para secciones
│   ├── hero-section.tsx          # Hero de la homepage
│   ├── phishing-step.tsx         # Paso de ataque (timeline)
│   ├── gallery-card.tsx          # Card de galería con overlay
│   ├── site-comparator.tsx       # Comparador real vs falso
│   └── postest-form.tsx          # Formulario de evaluación
├── lib/                          # Utilidades y configuración
│   ├── db.ts                     # Conexión y queries SQLite
│   ├── schema.sql                # Esquema de base de datos
│   └── utils.ts                  # Helpers (cn, formatters)
├── public/
│   └── images/                   # Capturas de phishing, sitios falsos
│       ├── correos/
│       └── sitios/
├── docs/                         # Documentación del proyecto
│   └── PLAN_TECNICO.md           # Este archivo
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

---

## Historias de Usuario Asignadas (Rol: Piero)

| ID | Feature | Historia | Sprint | Horas | Estado |
|---|---|---|---|---|---|
| HU-01 | F-01 | Página de inicio con presentación del proyecto | Sprint 1 | 12h | Por hacer |
| HU-02 | F-02 | Menú de navegación funcional | Sprint 1 | 10h | Por hacer |
| HU-03 | F-03 | Diseño responsivo adaptable | Sprint 2 | 6h | Por hacer |
| HU-07 | F-07 | Galería: ejemplos de correos electrónicos falsos | Sprint 2 | 7h | Por hacer |
| HU-08 | F-08 | Galería: ejemplos de sitios web fraudulentos | Sprint 2 | 8h | Por hacer |
| HU-09 | F-09 | Consejos para identificar phishing | Sprint 2 | 8h | Por hacer |
| HU-10 | F-10 | Recomendaciones de protección digital | Sprint 2 | 5h | Por hacer |
| HU-11 | F-11 | Formulario postest (Google Forms + SQLite) | Sprint 3 | 5h | Por hacer |
| HU-12 | F-12 | Instrucciones del postest | Sprint 3 | 2h | Por hacer |
| HU-13 | F-13 | Pruebas de navegación y compatibilidad | Sprint 3 | 8h | Por hacer |

**Total horas asignadas: 71 horas**

---

## Especificaciones Técnicas por Componente

### 1. Navbar (`components/navbar.tsx`)

**Requisitos funcionales:**
- Sticky en top:0 con backdrop-blur
- Links a todas las secciones: Inicio, ¿Qué es?, Tipos, Cómo funciona, Galería, Consejos, Evaluación
- Menú hamburger en móvil (< 768px)
- Scrollspy: resalta sección activa durante scroll
- Accesible: aria-label, roles, navegación por teclado

**Breakpoints Tailwind:**
```
sm: 640px   → Ajustes menores
md: 768px   → Navbar desktop visible
lg: 1024px  → Layout expandido
xl: 1280px  → Máximo ancho de contenido
```

### 2. Homepage (`app/page.tsx`)

**Secciones obligatorias:**
1. **Hero**: Título del proyecto, breve descripción (2-3 líneas), botón CTA "Comenzar" → /que-es
2. **Estadísticas rápidas**: 3 cards con datos clave del paper (ej: "36.9% de estudiantes cae en phishing", "68.88% de delitos informáticos son fraude", "0 capacitaciones formales en la UNFV")
3. **CTA final**: Enlace directo a /evaluacion

### 3. Galería de Correos Falsos (`app/(sections)/galeria/correos/page.tsx`)

**Requisitos:**
- Mínimo 3 imágenes de correos de phishing
- Cada imagen con overlay interactivo al hover
- Overlay muestra indicadores visuales de fraude:
  - Remitente sospechoso
  - Urgencia/extorsión emocional
  - Enlaces acortados/sospechosos
  - Errores ortográficos
  - Solicitud de datos personales

**Estructura de datos:**
```typescript
interface PhishingEmail {
  id: string;
  src: string;
  alt: string;
  title: string;
  type: 'banco' | 'universidad' | 'red-social' | 'delivery';
  indicators: string[];
  explanation: string;
}
```

### 4. Comparador de Sitios (`app/(sections)/galeria/sitios/page.tsx`)

**Requisitos:**
- Mínimo 2 comparaciones (Sitio Real vs. Sitio Falso)
- Split-screen o toggle entre versiones
- Etiquetas que señalan diferencias clave:
  - URL (https vs. http, dominio similar)
  - Candado de seguridad
  - Calidad del diseño
  - Errores ortográficos
  - Formularios que piden datos sensibles

### 5. Consejos de Identificación (`app/(sections)/consejos/page.tsx`)

**Requisitos:**
- Mínimo 5 consejos prácticos
- Formato visual: cards con íconos o acordeón
- Lenguaje sencillo, no técnico
- Referencias a artículos científicos del paper

**Consejos sugeridos (basados en necesidades N1-N7):**
1. Verificar el remitente del correo
2. No hacer clic en enlaces de correos sospechosos
3. Revisar la URL antes de ingresar datos
4. Desconfiar de mensajes con urgencia extrema
5. Buscar errores ortográficos y de diseño

### 6. Recomendaciones de Protección (`app/(sections)/consejos/proteccion/page.tsx` o sección dentro de consejos)

**Requisitos:**
- Mínimo 5 recomendaciones
- Incluir herramientas concretas:
  - Contraseñas fuertes y únicas
  - Verificación en dos pasos (2FA)
  - Uso de gestores de contraseñas
  - No usar WiFi público para cuentas importantes
  - Actualizar software regularmente

### 7. Evaluación / Postest (`app/(sections)/evaluacion/page.tsx`)

**Requisitos:**
- Instrucciones claras antes del formulario
- Integración de Google Forms (embed iframe)
- Sistema de respaldo con SQLite
- Mínimo 8 preguntas sobre comprensión y percepción de utilidad

**Esquema SQLite:**
```sql
CREATE TABLE IF NOT EXISTS respuestas_postest (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  nombre TEXT NOT NULL,
  carrera TEXT,
  correo TEXT,
  p1_conocimiento_phishing INTEGER,      -- 1-5 escala Likert
  p2_identificar_tipos INTEGER,
  p3_reconocer_correos INTEGER,
  p4_verificar_enlaces INTEGER,
  p5_proteger_cuentas INTEGER,
  p6_ingenieria_social INTEGER,
  p7_smishing_vishing INTEGER,
  p8_utilidad_plataforma INTEGER,          -- percepción de utilidad
  comentarios TEXT,
  fecha TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

---

## Diseño Responsive (HU-03)

**Breakpoints a soportar:**
- **360px**: Mínimo móvil (Galaxy S8, iPhone SE)
- **768px**: Tablet / cambio a desktop
- **1024px**: Desktop estándar
- **1440px**: Desktop grande

**Reglas Tailwind clave:**
```
max-w-6xl mx-auto px-4 sm:px-6 lg:px-8   → Contenedor centrado
grid-cols-1 md:grid-cols-2 lg:grid-cols-3 → Grids responsive
text-sm md:text-base lg:text-lg           → Tipografía escalable
hidden md:flex / flex md:hidden           → Toggle elementos
```

---

## Instalación y Configuración Inicial

```bash
# 1. Crear proyecto Next.js
npx create-next-app@latest phishing-unfv   --typescript   --tailwind   --eslint   --app   --src-dir=false

cd phishing-unfv

# 2. Instalar dependencias
npm install better-sqlite3 lucide-react
npm install -D @types/better-sqlite3

# 3. Inicializar shadcn/ui (opcional)
npx shadcn@latest init

# 4. Componentes útiles de shadcn
npx shadcn add button card accordion badge sheet

# 5. Crear estructura de carpetas
mkdir -p app/(sections)/{que-es,tipos,como-funciona,galeria/{correos,sitios},consejos,evaluacion}
mkdir -p app/api/evaluacion
mkdir -p components/ui
mkdir -p lib
mkdir -p public/images/{correos,sitios}
mkdir -p docs

# 6. Crear archivo de base de datos
mkdir -p data
touch data/phishing.db
```

---

## Configuración de Tailwind (`tailwind.config.ts`)

```typescript
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#eff6ff",
          100: "#dbeafe",
          500: "#3b82f6",
          600: "#2563eb",
          700: "#1d4ed8",
          900: "#1e3a8a",
        },
        danger: {
          50: "#fef2f2",
          100: "#fee2e2",
          500: "#ef4444",
          600: "#dc2626",
          700: "#b91c1c",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
```

---

## Checklist de Entrega por Sprint

### Sprint 1 — Estructura Base y Contenido Educativo Fundamental

- [ ] Proyecto Next.js inicializado y corriendo
- [ ] Tailwind configurado con colores institucionales
- [ ] `layout.tsx` con Navbar sticky y Footer
- [ ] `page.tsx` (Home) con Hero, estadísticas y CTA
- [ ] `app/(sections)/que-es/page.tsx` — Sección educativa
- [ ] `app/(sections)/tipos/page.tsx` — Tipos de phishing
- [ ] `app/(sections)/como-funciona/page.tsx` — Proceso de ataque
- [ ] Navbar funcional con links a todas las secciones
- [ ] Menú hamburger funcional en móvil
- [ ] Diseño responsive verificado en 360px y 1440px

### Sprint 2 — Contenido Visual y Prevención

- [ ] `app/(sections)/galeria/correos/page.tsx` — ≥3 correos falsos con overlay
- [ ] `app/(sections)/galeria/sitios/page.tsx` — ≥2 comparaciones real vs falso
- [ ] `app/(sections)/consejos/page.tsx` — ≥5 consejos de identificación
- [ ] Sección de recomendaciones de protección — ≥5 recomendaciones
- [ ] Todas las imágenes optimizadas con `<Image />` de Next.js
- [ ] Overlay interactivo funcional en galería
- [ ] Comparador con toggle real/falso funcional

### Sprint 3 — Evaluación, Calidad y Cierre

- [ ] `app/(sections)/evaluacion/page.tsx` — Instrucciones + Google Forms embed
- [ ] `app/api/evaluacion/route.ts` — API para guardar respuestas en SQLite
- [ ] `lib/db.ts` — Conexión SQLite funcional
- [ ] `lib/schema.sql` — Esquema de base de datos ejecutado
- [ ] Formulario SQLite funcional como respaldo
- [ ] Pruebas en Chrome y Firefox
- [ ] Todos los enlaces del menú funcionando
- [ ] Imágenes de galería cargando correctamente
- [ ] Enlace a postest funcional sin errores
- [ ] Revisión de ortografía y redacción
- [ ] Build de producción exitoso (`next build`)

---

## Prompts para IA (Kimi Code / Cursor / Copilot)

### Prompt inicial de contexto:
```
Estoy desarrollando una plataforma web educativa sobre prevención de phishing 
para estudiantes universitarios de la UNFV. El stack es Next.js 15 (App Router), 
Tailwind CSS, y SQLite. Mi rol es Desarrollador Frontend Principal.

La planificación técnica completa está en docs/PLAN_TECNICO.md.

Por favor, genera el código para [COMPONENTE_ESPECÍFICO] siguiendo:
- Buenas prácticas de Next.js 15
- Diseño mobile-first con Tailwind
- Componentes reutilizables
- Accesibilidad WCAG 2.1 AA
- TypeScript estricto
```

### Prompt para generar componente:
```
Genera el componente components/navbar.tsx con las siguientes características:
- Sticky top-0 con backdrop-blur-md
- Links: Inicio, ¿Qué es?, Tipos, Cómo funciona, Galería, Consejos, Evaluación
- Menú hamburger para móvil usando Sheet de shadcn/ui
- Scrollspy que resalta la sección activa
- Responsive: hidden en móvil, flex en desktop
- Usa Lucide icons para los iconos de menú
```

---

## Referencias del Paper

| ID | Artículo | Necesidad relacionada |
|---|---|---|
| [1] | Ruiz Contreras & Solis Castillo (2024) | Fraude informático en Lima |
| [7] | Molina Hernández & Olivas Doña (2025) | Vulnerabilidad de estudiantes universitarios |
| [8] | Abdulla et al. (2023) | Social Engineering Awareness |
| [9] | Okokpujie et al. (2025) | Vulnerabilidad en instituciones educativas |
| [10] | Guo & Tinmaz (2023) | Cybersecurity awareness en China |
| [11] | Yoro et al. (2023) | Personality traits y phishing |
| [12] | Carreño Ardila et al. (2024) | Factores victimógenos |
| [13] | Shahbazi et al. (2025) | AI-Based Phishing Detection |

---

## Notas para el Desarrollador

1. **Contenido educativo**: No redactar desde cero. Usar el material ya preparado por Herrera Ccari Robert Eloy (Líder de Contenido). Tu trabajo es implementar la estructura y el diseño.

2. **Imágenes de galería**: Solicitar al Diseñador de Producto (Integrante 4) las capturas de correos falsos y sitios fraudulentos. Mientras tanto, usar placeholders de placeholder.com o capturas de ejemplo.

3. **Google Forms**: Coordinar con Integrante 5 (Responsable de Evaluación) para obtener el link de embed del formulario postest.

4. **Pruebas**: Documentar cada prueba de navegación en el Daily Scrum. Reportar bugs encontrados durante HU-13.

5. **Responsive**: El 61.3% de estudiantes usa smartphone como dispositivo principal (Artículo [10]). Priorizar la experiencia móvil.

---

*Documento generado para el proyecto integrador con Scrum — UNFV 2026*
*Última actualización: Mayo 2026*
