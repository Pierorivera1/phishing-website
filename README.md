# 🛡️ Plataforma Web Anti-Phishing UNFV

> Desarrollo de una Plataforma Web para la Concientización y Prevención del Phishing y Fraudes Digitales en Estudiantes Universitarios.

Este proyecto ha sido desarrollado como parte del **Proyecto Integrador** para la **Universidad Nacional Federico Villarreal (UNFV)** — Facultad de Ingeniería Electrónica e Informática. La plataforma busca reducir la vulnerabilidad de los estudiantes ante ataques de ingeniería social mediante el aprendizaje interactivo y práctico, fundamentándose en datos empíricos locales e investigaciones académicas.

---

## 🚀 Tecnologías Utilizadas

| Tecnología | Propósito |
|---|---|
| **Next.js 15 (App Router)** | Framework principal con arquitectura basada en rutas dinámicas para alta performance y optimización SEO. |
| **TypeScript** | Desarrollo con tipado estático estricto para asegurar la escalabilidad del sistema. |
| **Tailwind CSS 4.x** | Estilos visuales adaptativos y modernos con variables nativas de CSS. |
| **shadcn/ui & Radix UI** | Componentes accesibles y personalizables para una interfaz de usuario moderna, con integración de estilos retro 8-bit. |
| **Framer Motion** | Animaciones fluidas, barra de progreso de lectura y transiciones accesibles de UX. |
| **Lucide React** | Iconografía vectorizada, moderna e intuitiva. |

---

## 🛠️ Avance y Funcionalidades Desarrolladas

La plataforma se encuentra en constante iteración técnica y pedagógica. A la fecha, se han completado los siguientes hitos de desarrollo:

### 📖 Módulo 1: Educación Fundamental (Sprint 1) — *¡Completado!*
*   **Conceptos Clave:** Definición clara de qué es el phishing, su impacto psicológico y estadísticas de delitos informáticos en Perú en la página principal y rutas específicas (`/que-es`).
*   **Riesgos del Phishing:** Nuevo módulo (`/aprender/riesgos`) con datos oficiales sobre cibercrimen en Perú (2018-2024) e informes de Kaspersky, destacando el impacto real.
*   **Tipos de Phishing:** Lecciones y explicaciones detalladas en `/aprender/tipos` para identificar variantes como *Spear Phishing*, *Smishing*, *Vishing*, y clonación web.
*   **Proceso de un Ataque:** Línea de tiempo interactiva de 6 pasos respaldada científicamente que expone el flujo del fraude y el rol de la **Ingeniería Social (El hackeo humano)**.

### 🖼️ Módulo 2: Prevención Visual y Práctica (Sprint 2) — *¡Completado!*
*   **Galería de Correos Fraudulentos (`/galeria/correos`):** Repositorio visual con múltiples plantillas reales e interactivas de correos fraudulentos, optimizadas en formato **WebP**. Cuenta con un diseño dinámico (glassmorphic overlays) que resalta indicadores clave de sospecha.
*   **Comparador de Sitios Web (`/galeria/sitios`):** Interfaz interactiva ("Sitio Real" vs "Sitio Falso") con puntos de alerta que guían al estudiante a reconocer dominios clonados e inconsistencias técnicas.
*   **Consejos de Prevención (`/consejos`):** Compilación de mejores prácticas de ciberseguridad, identificación activa y protección digital avanzada.

### ✨ Mejoras de Interfaz de Usuario y Rendimiento
*   **Temática Hacker Console & Retro/8-bit:** Migración de componentes visuales clave (botones, avatares) hacia un diseño nostálgico de consola de hacker. Integra una paleta de color en negro y verde cibernético, simulando una pantalla CRT retro con efectos de escaneo (*scanlines*), parpadeo (*flicker*), viñeta (*vignette*) y animaciones de radar/barrido para alertas de amenazas.
*   **Animaciones y Skeletons:** Integración de transiciones fluidas de entrada (`fade-in`, `slide-in`), barra de progreso de lectura, y placeholders inteligentes (`Skeleton Loading`) para mejorar la UX durante la navegación de rutas.

### 📊 Módulo 3: Evaluación y Migración a la Nube (Sprint 3) — *En Planificación*
*   **Arquitectura Cloud (Azure):** Se eliminó la dependencia de bases de datos locales (SQLite) para preparar una migración a la nube utilizando Azure Static Web Apps, Azure Functions y PostgreSQL (documentado en `azure_plan.md` y `sugerencias_proyecto.md`).

---

## 📂 Estructura Técnica del Proyecto

```text
phishing-unfv/
├── src/
│   ├── app/                  # Rutas y vistas de la aplicación (Next.js App Router)
│   │   ├── (sections)/       # Secciones interactivas principales
│   │   │   ├── consejos/     # Página de consejos y seguridad digital
│   │   │   ├── que-es/       # Conceptos iniciales y fundamentales
│   │   │   └── galeria/      # Correos fraudulentos y comparador de sitios
│   │   ├── aprender/         # Lecciones conceptuales del primer sprint
│   │   │   ├── como-funciona/# Proceso en 6 pasos del phishing
│   │   │   ├── riesgos/      # Consecuencias e impacto estadístico
│   │   │   └── tipos/        # Clasificación de técnicas de ataque
│   │   ├── globals.css       # Estilos globales y tokens visuales retro/UNFV y efectos CRT
│   │   └── page.tsx          # Landing page principal
│   ├── components/           # Componentes UI (Sidebar, Navbar, animaciones, shadcn 8-bit)
│   │   ├── animations/       # Componentes de Framer Motion
│   │   └── ui/               # Botones retro y Skeletons
│   ├── hooks/                # Hooks personalizados (ej. useScrollProgress)
│   └── lib/                  # Utilidades y configuración compartida (ej. utils.ts para shadcn)
├── public/                   # Recursos estáticos optimizados (.webp) e imágenes/GIFs
├── sugerencias_proyecto.md   # Análisis arquitectónico y de seguridad
├── azure_plan.md             # Propuesta de infraestructura Cloud (Azure)
└── PROCESO_DE_DESARROLLO_WEB.md # Bitácora detallada del proceso de desarrollo y decisiones de diseño
```

---

## 💻 Instalación y Ejecución Local

1.  **Clonar el repositorio:**
    ```bash
    git clone https://github.com/tu-usuario/phishing-unfv.git
    cd phishing-unfv
    ```

2.  **Instalar dependencias del entorno:**
    ```bash
    npm install
    ```

3.  **Iniciar el entorno de desarrollo:**
    ```bash
    npm run dev
    ```
    Navegar en el navegador a: `http://localhost:3000`

---

## ✒️ Autores y Créditos Académicos

*   **Piero Raúl Rivera Estrada** 
*   **Condori Quispe Tito**
*   **Herrera Ccari Robert Eloy**
*   **Nina Anchapuri Brens Fabrizio Leandro**
*   **Fernández Reluz Erick Arian**
*   **Parraga Vela Jafet Onán**

*Facultad de Ingeniería Electrónica e Informática — Universidad Nacional Federico Villarreal.*

---

## 📄 Licencia

Este proyecto ha sido desarrollado exclusivamente bajo fines académicos y de concientización tecnológica para la Universidad Nacional Federico Villarreal.
