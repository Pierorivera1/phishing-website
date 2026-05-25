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
| **SQLite (better-sqlite3)** | Base de datos local ligera y síncrona para almacenamiento seguro de postests académicos. |
| **Lucide React** | Iconografía vectorizada, moderna e intuitiva. |

---

## 🛠️ Avance y Funcionalidades Desarrolladas

La plataforma se encuentra en constante iteración técnica y pedagógica. A la fecha, se han completado los siguientes hitos de desarrollo:

### 📖 Módulo 1: Educación Fundamental (Sprint 1) — *¡Completado!*
*   **Conceptos Clave:** Definición clara de qué es el phishing, su impacto psicológico y estadísticas de delitos informáticos en Perú en la página principal y rutas específicas (`/que-es`).
*   **Tipos de Phishing:** Lecciones y explicaciones detalladas en `/aprender/tipos` para identificar variantes como *Spear Phishing*, *Smishing*, *Vishing*, y clonación web.
*   **Proceso de un Ataque (Línea de Tiempo):** En `/aprender/como-funciona` se implementó una línea de tiempo interactiva de 6 pasos respaldada científicamente (Abdulla et al., 2023) que expone el flujo metodológico del fraude, complementado con una sección interactiva sobre el rol de la **Ingeniería Social (El hackeo humano)**.

### 🖼️ Módulo 2: Prevención Visual y Práctica (Sprint 2) — *¡Completado!*
*   **Galería de Correos Fraudulentos (`/galeria/correos`):** Repositorio visual con múltiples plantillas reales e interactivas de correos fraudulentos (bancos, universidad, premios). Cuenta con un diseño dinámico (glassmorphic overlays) que resalta en tiempo real los 4 indicadores clave de sospecha: remitente inusual, enlaces de dudosa procedencia, urgencia extrema y errores ortográficos.
*   **Comparador de Sitios Web (`/galeria/sitios`):** Interfaz interactiva ("Sitio Real" vs "Sitio Falso") equipada con puntos de alerta interactivos que guían de forma guiada al estudiante a reconocer dominios clonados, formularios sospechosos e inconsistencias técnicas.
*   **Consejos de Prevención y Protección Digital (`/consejos`):** Compilación interactiva de las mejores prácticas de ciberseguridad:
    1.  *Identificación activa:* 6 consejos estratégicos de detección (por ej. uso de la función "Reportar phishing", validación de links).
    2.  *Protección digital:* 5 pautas técnicas avanzadas (autenticación multifactor o 2FA, uso de gestores de contraseñas seguros y riesgos de redes WiFi públicas).

### 📊 Módulo 3: Evaluación Académica (Sprint 3) — *En Desarrollo/Preparación*
*   **Postest Académico (`/evaluacion`):** Integración con formularios evaluativos de rendimiento.
*   **Sistema de Respaldo Local:** Backend API (`/api/evaluacion`) que almacena de forma íntegra las evaluaciones de los estudiantes en una base de datos SQLite persistente para estadísticas locales e informes de impacto educativo.

---

## 📂 Estructura Técnica del Proyecto

```text
phishing-unfv/
├── app/                      # Rutas y vistas de la aplicación (Next.js App Router)
│   ├── (sections)/           # Secciones interactivas principales
│   │   ├── consejos/         # Página interactiva de consejos y seguridad digital
│   │   ├── evaluacion/       # Módulo para el postest académico
│   │   ├── que-es/           # Conceptos iniciales y fundamentales
│   │   └── galeria/          
│   │       ├── correos/      # Galería de correos fraudulentos con hotspots
│   │       └── sitios/       # Comparador interactivo de sitios web reales y falsos
│   ├── aprender/             # Lecciones conceptuales del primer sprint
│   │   ├── como-funciona/    # Proceso en 6 pasos del phishing y hackeo humano
│   │   └── tipos/            # Clasificación interactiva de técnicas de ataque
│   ├── api/                  # Endpoints REST (ej. registro en base de datos de evaluación)
│   ├── globals.css           # Estilos globales y tokens visuales con UNFV Branding
│   └── page.tsx              # Landing page principal (Estadísticas e introducción)
├── components/               # Componentes reutilizables (Sidebar, Navbar, Footer, Timeline)
├── lib/                      # Lógica de datos (Conexión SQLite, esquemas y utilidades)
├── public/                   # Recursos estáticos e imágenes reales de phishing
├── data/                     # Base de datos SQLite local (phishing.db)
└── implementation_plan.md    # Plan de implementación detallado del 2do Sprint
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

3.  **Configurar base de datos local:**
    El sistema inicializa automáticamente la base de datos SQLite en `data/phishing.db` al arrancar el servidor por primera vez, ejecutando el script estructural de `lib/schema.sql`.

4.  **Iniciar el entorno de desarrollo:**
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
