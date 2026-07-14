# Proceso de Desarrollo de la Plataforma Web Educativa Anti-Phishing UNFV

**Proyecto:** Plataforma Web Educativa para la Prevención y Detección del Phishing  
**Institución:** Universidad Nacional Federico Villarreal  
**Responsable de Desarrollo:** Rivera Estrada, Piero Raúl  
**Fecha:** Junio 2026

---

## Contexto y Punto de Partida

El desarrollo de esta plataforma web nace de un hallazgo crítico: el 68.7% de los estudiantes de la Facultad de Ciencias Sociales de la UNFV encuestados declaró no haber escuchado nunca el término *phishing*. El 59.7% se consideró "poco informado" y el 20.9% "nada informado" sobre fraudes digitales. Esta brecha no es menor: a nivel nacional, las denuncias por delitos informáticos pasaron de 18,424 en 2021 a más de 42,000 en 2024, con un promedio de 100 casos diarios. El problema existe y es urgente, y la plataforma fue concebida como una respuesta directa a esa realidad.

Cada decisión técnica tomada durante el desarrollo —desde el framework elegido hasta el formato de las imágenes— tuvo como norte esos datos: una audiencia que en su gran mayoría (67.2%) accedería desde su celular, con niveles de familiaridad técnica bajos, y que necesita contenido claro, visual y accesible.

---

## Elección del Stack Tecnológico

La selección de tecnologías no fue arbitraria. Se eligió **Next.js 16** con App Router como framework principal porque resuelve de forma nativa varios de los requerimientos no funcionales del proyecto. Su sistema de enrutamiento basado en el sistema de archivos permite definir *layouts* compartidos para grupos de páginas sin duplicar código. El archivo `loading.tsx` por ruta permite implementar estados de carga específicos para cada sección sin configuración adicional. Y la optimización automática de imágenes del framework reduce el peso de los recursos multimedia sin intervención manual, respondiendo directamente al requerimiento de carga rápida en conexiones móviles (RNF-02).

**React 19** y **TypeScript** conforman la base del stack. El tipado estático de TypeScript fue una decisión de calidad: previene errores en tiempo de desarrollo y documenta implícitamente las interfaces de cada componente, lo cual es especialmente valioso cuando el proyecto debe ser mantenible por otros miembros del equipo. **Tailwind CSS v4** fue la elección para los estilos porque permite implementar el diseño Mobile-First de forma nativa mediante breakpoints utilitarios, sin necesidad de escribir CSS personalizado en archivos separados. Sobre esa base se integró **shadcn/ui**, una librería de componentes construida sobre **Radix UI**, cuyos primitivos accesibles garantizan el cumplimiento de estándares ARIA desde el inicio del desarrollo.

Finalmente, **Framer Motion** se incorporó en una iteración posterior para las animaciones de entrada, eligiéndola específicamente porque respeta la preferencia del sistema `prefers-reduced-motion`: si el usuario tiene desactivadas las animaciones a nivel del sistema operativo, la plataforma se renderiza de forma estática de inmediato, sin afectar la experiencia de personas con sensibilidad al movimiento.

---

## Arquitectura del Proyecto

La estructura de directorios fue diseñada deliberadamente para que la organización del código refleje la organización del contenido educativo. Las rutas de los módulos de aprendizaje (`/aprender/*`) se agrupan bajo un *layout* compartido que incluye el sidebar de navegación lateral. Las secciones interactivas de la galería y los consejos se agrupan bajo `(sections)/`, un patrón de Route Groups de Next.js que organiza el código sin afectar la URL final que ve el usuario.

Esta separación tiene una razón de ser concreta: los módulos de aprendizaje requieren el sidebar, mientras que la galería y los consejos no. Al colocarlos en grupos de rutas distintos, cada grupo puede tener su propio layout sin interferir con el otro. El resultado es que el código de cada sección solo contiene lo que le corresponde, sin condiciones ni comprobaciones de ruta.

---

## Página de Inicio y Primer Contacto con el Usuario (HU-01)

La página de inicio es el primer contacto del estudiante con la plataforma, y por eso fue la primera en desarrollarse. El requerimiento de HU-01 era claro: una página de inicio atractiva que comunicara de inmediato el propósito de la plataforma y funcionara correctamente en dispositivos móviles.

La decisión de mostrar datos estadísticos reales en el *hero* de la página —42,161 denuncias en 2024, Perú en el primer lugar mundial de ataques de phishing según Kaspersky 2025— responde a una necesidad pedagógica: el usuario que llega sin saber qué es el phishing necesita primero entender por qué le debería importar. Los números hacen ese trabajo mejor que cualquier descripción.

La identidad visual adoptó una estética **retro-pixelada**, con la tipografía *Pixelify Sans* de Google Fonts, bordes gruesos y una paleta de alto contraste. Esta elección tiene una razón estratégica: una plataforma académica convencional puede ser ignorada o percibida como obligación. Una plataforma visualmente diferenciada y con carácter propio genera apropiación voluntaria, que es exactamente lo que necesita una herramienta educativa cuyo uso depende de la motivación del estudiante.

La *Landing Page* fue convertida a Client Component porque Framer Motion, utilizado para las animaciones de entrada de las tarjetas de estadísticas, requiere acceso al API del navegador. Las tarjetas de estadísticas se animan con un efecto de cascada (`StaggerContainer`) para orientar la atención del usuario de forma secuencial, en lugar de mostrar todo el contenido al mismo tiempo.

---

## Módulos Educativos: Estructura y Decisiones (HU-02, HU-03, HU-04)

El layout de los módulos de aprendizaje incluye un sidebar de navegación lateral que permanece visible en todo momento, indicando siempre en qué punto del recorrido educativo se encuentra el estudiante. Esta decisión implementa directamente el requerimiento RNF-03 de navegación simple e intuitiva. El módulo activo se resalta visualmente mediante el hook `usePathname()` de Next.js. En móviles, el sidebar desaparece para maximizar el área de lectura, ya que en pantallas pequeñas la prioridad es el contenido.

**HU-02** se implementó distribuyendo el contenido en tres páginas complementarias. La primera define el concepto con lenguaje accesible —respondiendo al 68.7% que nunca había escuchado el término—. La segunda presenta el mapa de aprendizaje. La tercera desglosa el proceso de un ataque de phishing en pasos secuenciales numerados con íconos, usando el componente `PhishingStep`. Esta representación visual responde al hallazgo de que el 41.8% de los estudiantes hizo clic en un enlace sospechoso por error: entender el mecanismo del engaño es la primera defensa contra él.

Para esta y todas las páginas educativas se creó el componente `SectionWrapper`, que encapsula el contenedor visual, la cabecera con ícono y título, y la animación `FadeIn`. Este patrón de abstracción garantiza que cada nueva página herede automáticamente la identidad visual y las animaciones sin código duplicado.

**HU-03** (riesgos del phishing) fue implementada con un énfasis especial en los datos visuales. Se integraron el gráfico oficial del Ministerio Público (evolución de denuncias 2018–2024) y la tabla del informe Kaspersky 2025, acompañados de tarjetas interactivas para cuatro categorías de consecuencias y tres casos reales documentados. La decisión de usar casos reales (Universidad de California 2023, empresa Air-e Colombia 2024, DNC EE.UU. 2016) en lugar de ejemplos hipotéticos responde al criterio de validación de HU-03: el contenido debe ser comprensible para usuarios sin conocimientos técnicos, y nada contextualiza mejor el riesgo que una situación verificable y conocida.

**HU-04** (modalidades de phishing) se implementó usando el componente `Tabs` de shadcn/ui para presentar las diferentes modalidades en grupos temáticos sin sobrecargar al usuario con todo el contenido simultáneamente. Cada *tab* actúa como un capítulo independiente, cumpliendo el criterio de que las modalidades "deben diferenciarse claramente".

---

## Galería Interactiva de Casos Reales (HU-05, HU-06, HU-07, HU-08)

La encuesta identificó que SMS (59.7%) y WhatsApp (52.2%) son los canales más peligrosos para los estudiantes, y que el 41.8% hizo clic en un enlace sospechoso por error. Estos hallazgos justifican que la galería sea uno de los componentes pedagógicos más importantes de toda la plataforma.

La galería de correos y mensajes fraudulentos (HU-05, HU-06) presenta capturas reales de mensajes de correo electrónico, SMS y WhatsApp con anotaciones visuales que señalan los elementos de alerta y una explicación breve sobre por qué el mensaje es sospechoso y cómo actuar. La decisión de usar capturas reales en lugar de ejemplos construidos artificialmente maximiza la utilidad del recurso: el estudiante reconoce los patrones que ya ha visto en su propia experiencia.

Todas las imágenes de la galería se almacenan en formato **WebP**, que ofrece una compresión entre 30 y 40% superior al JPEG con la misma calidad visual. Esta conversión implementa directamente el requerimiento RNF-02 y es crítica dado que el 67.2% de los usuarios accede desde dispositivos móviles, donde el ancho de banda es el factor limitante más común.

El comparador de sitios web (HU-07, HU-08) presenta un análisis lado a lado de sitios oficiales y sus clones fraudulentos, con anotaciones que señalan las diferencias. Se incluyó además una guía de inspección de URLs con ejemplos de enlaces legítimos vs. sospechosos, enseñando al usuario a interpretar la estructura de un enlace antes de hacer clic.

---

## Consejos y Evaluación Final (HU-09, HU-10, HU-11, HU-12, HU-13)

La sección de consejos agrupa tres historias de usuario (HU-09, HU-10, HU-11) en una única página estructurada con el componente `Accordion` de shadcn/ui. El acordeón fue elegido porque muestra un bloque de contenido a la vez, reduciendo la sobrecarga cognitiva ante una lista larga de recomendaciones, y porque es un patrón de interacción nativo y familiar en dispositivos táctiles.

El quiz de evaluación (HU-12, HU-13) se implementó como un componente propio en React, sin depender de ninguna plataforma externa. Esta decisión responde directamente al requerimiento no funcional RNF-04: el sistema debe garantizar el anonimato total y abstenerse de recopilar datos personales. Al ejecutarse íntegramente en el cliente (sin envío de respuestas a un servidor ni almacenamiento en base de datos), el quiz no recopila ni conserva ningún dato del estudiante — el resultado es solo para su propia autoevaluación. La retroalimentación de puntaje (HU-13) se calcula en el propio componente: muestra el puntaje, el nivel de desempeño y una explicación por cada pregunta respondida.

El botón de acceso al quiz se posicionó con alta visibilidad tanto en la sección CTA de la Landing Page como al final de cada módulo educativo, cumpliendo el criterio de que el acceso debe ser evidente en cualquier punto del recorrido.

---

## Mejoras de Experiencia de Usuario: Barra de Progreso de Lectura

Tras completar el contenido base, se implementó una barra de progreso horizontal de 3px posicionada en la base del Navbar fijo para indicar cuánto contenido ha consumido el usuario en la página actual. La lógica de cálculo del scroll fue abstraída en un Custom Hook (`useScrollProgress`) para separar la lógica de negocio del componente visual, siguiendo el principio de separación de responsabilidades.

La visibilidad de la barra está restringida exclusivamente a las rutas `/aprender/*` mediante `usePathname()`. Esta restricción fue deliberada: la barra de progreso tiene sentido semántico solo en páginas de lectura lineal. En la Landing Page o en la galería, donde el usuario no sigue un recorrido de lectura secuencial, la barra no aporta información útil y podría confundir.

---

## Decisiones de Calidad y Accesibilidad

A lo largo del desarrollo se tomaron decisiones consistentes para garantizar que la plataforma fuera accesible y de calidad técnica sólida. Se ejecutó `npm run build` al completar cada sprint para verificar que no existieran errores de TypeScript ni dependencias faltantes. La responsividad fue verificada en breakpoints de 375px, 390px, 768px y 1280px. La compilación exitosa fue el criterio de "hecho" para cada conjunto de funcionalidades.

En cuanto al anonimato (RNF-04), las dependencias de `better-sqlite3` y el archivo `schema.sql` que existían en versiones anteriores del repositorio fueron eliminados por completo, removiendo cualquier infraestructura de recopilación de datos que pudiera comprometer el principio de anonimato del flujo.
