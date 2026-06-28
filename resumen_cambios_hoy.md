# Resumen de Cambios — Proyecto Anti-Phishing UNFV

**Fecha:** 28 de junio de 2026

Hoy hemos trabajado en importantes mejoras de diseño, rendimiento, interactividad y contenido para la plataforma de concientización sobre Phishing de la UNFV. A continuación se detallan todas las modificaciones y adiciones organizadas por área.

---

## ⚡ 1. Nuevas Páginas y Contenidos

### Módulo: "Riesgos del Phishing"
- **Nueva página:** [src/app/aprender/riesgos/page.tsx](file:///home/pierooo/Projects/Proyecto_Integrador_v0/phishing-unfv/src/app/aprender/riesgos/page.tsx)
  - Se implementó un módulo educativo centrado en los peligros y el impacto del phishing en el ámbito personal, financiero y académico.
  - **Estadísticas de Ciberdelitos en Perú (2018-2024):** Incorporación de datos oficiales del Ministerio Público que muestran la evolución del ciberdelito en el país, acompañados de un gráfico interactivo (`Denuncia_de_delitos_informaticos2018-2024.jpeg`).
  - **Ranking de Phishing Kaspersky (2025):** Exposición del informe de Kaspersky donde Perú lidera a nivel mundial con un 17.46% de usuarios atacados. Incluye una tabla comparativa y el gráfico oficial de Kaspersky (`Informe_Kaspersky.jpeg`).
  - **Consecuencias críticas:** Explicación detallada de riesgos como robo de cuentas, robo de identidad, pérdidas económicas y exposición de información privada.
  - **Casos reales documentados:** Universidad de California (2023), Empresa Air-e (2024), y Comité Nacional Demócrata (2016).
- **Integración en Navegación:**
  - Se actualizó el sidebar educativo ([src/components/course-sidebar.tsx](file:///home/pierooo/Projects/Proyecto_Integrador_v0/phishing-unfv/src/components/course-sidebar.tsx)) para incluir el enlace al nuevo módulo y permitir la navegación secuencial fluida.

---

## 🎨 2. Mejoras Visuales, Interactividad y UX (Framer Motion & Skeletons)

### Animaciones de Entrada (Framer Motion)
Se instaló `framer-motion` y se configuraron transiciones fluidas que se activan al entrar en el viewport:
- **Componentes de Animación:**
  - [fade-in.tsx](file:///home/pierooo/Projects/Proyecto_Integrador_v0/phishing-unfv/src/components/animations/fade-in.tsx): Controla animaciones suaves de opacidad y desplazamiento vertical leve.
  - [slide-in.tsx](file:///home/pierooo/Projects/Proyecto_Integrador_v0/phishing-unfv/src/components/animations/slide-in.tsx): Añade un efecto de deslizamiento horizontal a elementos concretos (avatar y globo de chat del CTA final).
  - [stagger-container.tsx](file:///home/pierooo/Projects/Proyecto_Integrador_v0/phishing-unfv/src/components/animations/stagger-container.tsx): Genera un efecto de cascada en la carga de listas y grillas de tarjetas.
- **Integración:**
  - Se convirtió la página de inicio ([src/app/page.tsx](file:///home/pierooo/Projects/Proyecto_Integrador_v0/phishing-unfv/src/app/page.tsx)) a componente de cliente para animar de forma nativa sus secciones principales.
  - Se animó el contenedor principal de los cursos ([src/components/section-wrapper.tsx](file:///home/pierooo/Projects/Proyecto_Integrador_v0/phishing-unfv/src/components/section-wrapper.tsx)).

### Barra de Progreso de Lectura
- **Hook `useScrollProgress`:** Creado en [use-scroll-progress.ts](file:///home/pierooo/Projects/Proyecto_Integrador_v0/phishing-unfv/src/hooks/use-scroll-progress.ts) para calcular reactivamente la distancia de scroll.
- **Componente `ReadingProgressBar`:** Creado en [reading-progress-bar.tsx](file:///home/pierooo/Projects/Proyecto_Integrador_v0/phishing-unfv/src/components/reading-progress-bar.tsx) e integrado en la base del navbar fijo ([src/components/navbar.tsx](file:///home/pierooo/Projects/Proyecto_Integrador_v0/phishing-unfv/src/components/navbar.tsx)). Es visible únicamente en las rutas educativas (`/aprender/*`).

### Pantallas de Carga Inteligentes (Skeleton Loading)
Se crearon placeholders visuales que respetan la distribución física de los componentes finales durante las transiciones de ruta:
- **Componente `Skeleton`:** Creado en [skeleton.tsx](file:///home/pierooo/Projects/Proyecto_Integrador_v0/phishing-unfv/src/components/ui/skeleton.tsx) con la estética retro-pixelada del sitio (`rounded-none`).
- **Implementación de Rutas (`loading.tsx`):**
  - **Módulos de Aprendizaje:** [loading.tsx](file:///home/pierooo/Projects/Proyecto_Integrador_v0/phishing-unfv/src/app/aprender/loading.tsx)
  - **Galería de Casos:** [loading.tsx](file:///home/pierooo/Projects/Proyecto_Integrador_v0/phishing-unfv/src/app/(sections)/galeria/loading.tsx)
  - **Sección de Consejos:** [loading.tsx](file:///home/pierooo/Projects/Proyecto_Integrador_v0/phishing-unfv/src/app/(sections)/consejos/loading.tsx)

### Accesibilidad y Movimiento Reducido
- Se integró la directiva `prefers-reduced-motion` a través de Framer Motion (`useReducedMotion`) y CSS (`motion-safe:`). Si el usuario tiene desactivadas las animaciones a nivel de sistema, el sitio se comportará estático de inmediato.

---

## 🚀 3. Optimización de Rendimiento e Imágenes

- **Migración de PNG a WebP:**
  - Se convirtieron todas las imágenes pesadas de correos simulados, capturas de pantalla de comparación bancaria y el logo institucional a formato `.webp` de alta eficiencia.
  - Esto reduce el tamaño de descarga del cliente final y mejora los tiempos de carga y el *Largest Contentful Paint (LCP)*.
  - Se actualizaron las referencias en las páginas correspondientes:
    - [page.tsx](file:///home/pierooo/Projects/Proyecto_Integrador_v0/phishing-unfv/src/app/page.tsx)
    - [navbar.tsx](file:///home/pierooo/Projects/Proyecto_Integrador_v0/phishing-unfv/src/components/navbar.tsx)
    - [footer.tsx](file:///home/pierooo/Projects/Proyecto_Integrador_v0/phishing-unfv/src/components/footer.tsx)
    - [que-es/page.tsx](file:///home/pierooo/Projects/Proyecto_Integrador_v0/phishing-unfv/src/app/(sections)/que-es/page.tsx)
    - [galeria/correos/page.tsx](file:///home/pierooo/Projects/Proyecto_Integrador_v0/phishing-unfv/src/app/(sections)/galeria/correos/page.tsx)
    - [galeria/sitios/page.tsx](file:///home/pierooo/Projects/Proyecto_Integrador_v0/phishing-unfv/src/app/(sections)/galeria/sitios/page.tsx)

---

## ☁️ 4. Planes y Propuestas de Arquitectura

Para planificar los siguientes pasos técnicos de la plataforma, creamos dos documentos descriptivos:
1. **Sugerencias de Proyecto (`sugerencias_proyecto.md`):**
   - Análisis de arquitectura, bases de datos (SQLite local vs Supabase/PostgreSQL) y opciones de infraestructura.
   - Mejoras de DevOps y validación de seguridad (Zod, rate limiting, hCaptcha).
2. **Plan de Integración en la Nube con Azure (`azure_plan.md`):**
   - Propuesta para alojar el proyecto usando la cuenta Azure for Students ($100/mes de crédito).
   - Arquitectura basada en **Azure Static Web Apps** (frontend), **Azure Functions** (backend serverless) y **Azure Database for PostgreSQL** para el almacenamiento de los postests y formularios de contacto.

---

## 🧹 5. Limpieza y Reestructuración de Código

- **Remoción de archivos obsoletos:**
  - Se eliminó [schema.sql](file:///home/pierooo/Projects/Proyecto_Integrador_v0/phishing-unfv/src/lib/schema.sql) debido a que la persistencia se replanificará hacia la nube.
  - Se retiraron las dependencias locales directas de SQLite (`better-sqlite3`) del `package.json` para limpiar dependencias que no están en uso activo.
- **Actualización de Estructuras:**
  - Se actualizó el archivo [README.md](file:///home/pierooo/Projects/Proyecto_Integrador_v0/phishing-unfv/README.md) para documentar el uso de `shadcn/ui` y la nueva estructura basada en el directorio `src/`.

---

## 📂 Estructura de Archivos Afectados

```text
Nuevos Archivos (Adicionados):
├── CONTENIDO DE LA PAGINA WEB PHISHING.md
├── public/anti_pishing_unfv_logo.webp
├── public/images/Denuncia_de_delitos_informaticos2018-2024.jpeg
├── public/images/Informe_Kaspersky.jpeg
├── public/images/correos/correo[1-6].webp
├── public/images/correos/correo_no_fraudulento.webp
├── public/images/sitios/comparacion_banco.webp
├── src/app/(sections)/consejos/loading.tsx
├── src/app/(sections)/galeria/loading.tsx
├── src/app/aprender/loading.tsx
├── src/app/aprender/riesgos/page.tsx
├── src/components/animations/fade-in.tsx
├── src/components/animations/stagger-container.tsx
├── src/components/animations/slide-in.tsx
├── src/components/reading-progress-bar.tsx
├── src/components/ui/skeleton.tsx
└── src/hooks/use-scroll-progress.ts

Archivos Eliminados:
├── public/anti_pishing_unfv_logo.png
├── public/images/correos/correo[1-6].png
├── public/images/correos/correo_no_fraudulento.png
├── public/images/sitios/comparacion_banco.png
├── public/images/sitios/download.png
└── src/lib/schema.sql

Archivos Modificados:
├── README.md
├── package.json
├── package-lock.json
├── src/app/(sections)/consejos/page.tsx
├── src/app/(sections)/galeria/correos/page.tsx
├── src/app/(sections)/galeria/sitios/page.tsx
├── src/app/(sections)/que-es/page.tsx
├── src/app/aprender/page.tsx
├── src/app/page.tsx
├── src/components/course-sidebar.tsx
├── src/components/footer.tsx
├── src/components/navbar.tsx
└── src/components/section-wrapper.tsx
```
