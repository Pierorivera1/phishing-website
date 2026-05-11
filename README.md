# 🛡️ Plataforma Web Anti-Phishing UNFV

> Desarrollo de una Plataforma Web para la Concientización y Prevención del Phishing y Fraudes Digitales en Estudiantes Universitarios.

Este proyecto ha sido desarrollado como parte del **Proyecto Integrador** para la **Universidad Nacional Federico Villarreal (UNFV)** — Facultad de Ingeniería Electrónica e Informática. La plataforma busca reducir la vulnerabilidad de los estudiantes ante ataques de ingeniería social mediante el aprendizaje interactivo.

---

## 🚀 Tecnologías Utilizadas

| Tecnología | Propósito |
|---|---|
| **Next.js 15** | Framework principal con App Router para alto rendimiento y SEO. |
| **TypeScript** | Desarrollo robusto con tipado estático. |
| **Tailwind CSS 4.x** | Diseño responsivo moderno y estilizado. |
| **SQLite (better-sqlite3)** | Almacenamiento local síncrono para respaldo de evaluaciones. |
| **Lucide React** | Sistema de iconografía moderno y consistente. |

---

## 🛠️ Funcionalidades del Proyecto

El desarrollo se dividió en tres fases estratégicas (Sprints) para cubrir todas las necesidades del usuario:

### 📖 Módulo 1: Educación Fundamental (Sprint 1)
- **Conceptos Clave:** Definición clara de qué es el phishing y cómo impacta a la comunidad universitaria.
- **Tipos de Ataque:** Dossiers interactivos sobre Spear Phishing, Smishing, Vishing, etc.
- **Proceso de Ataque:** Línea de tiempo visual del flujo de un ataque (Anzuelo → Engaño → Robo).

### 🖼️ Módulo 2: Prevención Visual (Sprint 2)
- **Galería de Amenazas:** Repositorio de ejemplos reales de correos fraudulentos con puntos de inspección interactivos.
- **Comparador Real vs. Falso:** Interfaz de comparación directa para identificar irregularidades en URLs y diseño.
- **Guía de Recomendaciones:** 10 reglas de oro para la protección de identidad digital.

### 📊 Módulo 3: Evaluación y Respaldo (Sprint 3)
- **Postest Académico:** Evaluación integrada mediante Google Forms.
- **Sistema de Respaldo:** API interna que almacena los resultados de la evaluación en una base de datos SQLite para análisis posterior.

---

## 📂 Estructura del Proyecto

```text
phishing-unfv/
├── app/                  # Rutas y páginas (Next.js App Router)
├── components/           # Componentes UI reutilizables
├── lib/                  # Configuración de DB y utilidades
├── public/               # Activos estáticos (imágenes de phishing)
├── data/                 # Archivos de base de datos SQLite
└── docs/                 # Documentación técnica y contenido
```

---

## 💻 Instalación y Uso

1. **Clonar el repositorio:**
   ```bash
   git clone https://github.com/tu-usuario/phishing-unfv.git
   cd phishing-unfv
   ```

2. **Instalar dependencias:**
   ```bash
   npm install
   ```

3. **Configurar la base de datos:**
   El proyecto inicializa automáticamente el archivo `data/phishing.db` al correr el servidor por primera vez, basándose en el esquema definido en `lib/schema.sql`.

4. **Iniciar servidor de desarrollo:**
   ```bash
   npm run dev
   ```
   La aplicación estará disponible en: `http://localhost:3000`

---

## ✒️ Autores

* **Piero Raúl Rivera Estrada** - *Desarrollador Frontend Principal* - [GitHub](https://github.com/)
* Integrantes de la Facultad de Ingeniería Electrónica e Informática — UNFV.

---

## 📄 Licencia

Este proyecto es para fines académicos y educativos bajo la Universidad Nacional Federico Villarreal.
