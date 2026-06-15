**UNIVERSIDAD NACIONAL FEDERICO VILLARREAL**

**Facultad de Ingeniería Electrónica e Informática**

**![][image1]**

**DESARROLLO DE UNA PLATAFORMA WEB PARA LA CONCIENTIZACIÓN Y PREVENCIÓN DEL PHISHING Y FRAUDES DIGITALES**  
**EN ESTUDIANTES DE LA FACULTAD DE CIENCIAS SOCIALES DE LA UNFV**

**INTEGRANTES:**

Condori Quispe Tito  
Herrera Ccari Robert Eloy  
Nina Anchapuri Brens Fabrizio Leandro  
Rivera Estrada Piero Raúl  
Fernández Reluz Erick Arian   
Parraga Vela Jafet Onán

**DOCENTE:**

Ing. Flores Masias Edward

# **ABSTRACT**

Phishing and digital fraud currently represent some of the main cybersecurity threats, especially affecting young users and university students who frequently use digital technologies. This project aims to develop an educational web platform to raise awareness among students of the Faculty of Social Sciences at the Federico Villarreal National University about the risks of phishing and digital fraud, providing them with practical tools to identify and prevent such threats. A literature review of seven articles on phishing and digital fraud in educational institutions was conducted to identify the needs and findings related to these issues. Based on this analysis, an interactive web page was designed and implemented, including educational information, an image gallery with real-life examples, and an assessment questionnaire through Google Forms. Finally, the change in the level of knowledge after using the platform will be measured, allowing conclusions to be drawn regarding the effectiveness of digital educational tools in the prevention of cybercrime.

# **KEYWORDS**

Phishing, fraudes digitales, plataforma web, concientización, ciberseguridad, estudiantes universitarios, ingeniería social, delitos informáticos.

# **INTRODUCCIÓN**

En las últimas décadas, el mundo ha experimentado una transformación digital sin precedentes. El acceso a internet, el uso de dispositivos móviles y la digitalización de servicios financieros, educativos y administrativos han facilitado la vida de millones de personas, pero también han abierto nuevas puertas para los ciberdelincuentes. Hoy en día, el phishing se ha convertido en una de las modalidades de fraude más comunes y peligrosas, afectando tanto a personas como a instituciones a nivel mundial.

El término phishing proviene de la palabra inglesa *fishing* (pescar), ya que los ciberdelincuentes lanzan miles de correos electrónicos, mensajes de texto y enlaces fraudulentos esperando que algún usuario caiga en la trampa. Esta técnica consiste en el envío masivo de correos electrónicos que contienen enlaces o archivos con virus troyanos, los cuales redirigen a páginas web falsas diseñadas para suplantar entidades bancarias o empresas legítimas. A través de estas páginas, los delincuentes solicitan información confidencial como números de tarjeta, claves de internet, DNI y códigos de seguridad, permitiéndoles acceder a las cuentas personales de sus víctimas y beneficiarse económicamente \[1\].

A nivel internacional, la magnitud del problema es alarmante. Según datos del FBI, entre 2014 y 2019 se registraron más de 2,100 millones de dólares en pérdidas por compromisos de correo empresarial (business email compromise), y durante la pandemia de COVID-19 los delitos cibernéticos relacionados con phishing aumentaron significativamente \[2\]. Por su parte, la empresa Comparitech reportó que entre 2019 y 2022 se registraron más de 300,000 ataques de phishing, los cuales se han triplicado en número \[1\].

En el contexto nacional, Perú no es ajeno a esta problemática. Según el Boletín Estadístico de la Fiscalía Especializada en Ciberdelincuencia, entre enero y septiembre de 2025 se presentaron 31,028 denuncias por delitos informáticos, de las cuales el 68.88% (21,371 casos) corresponden a fraude informático, incluyendo el phishing, el SIM swapping y el uso de deepfakes para suplantar identidades \[3\]. La mayoría de estos casos se concentran en Lima, siendo la capital el epicentro de los delitos cibernéticos en el país.  
En el ámbito educativo, los estudiantes universitarios representan una población particularmente vulnerable.

En un estudio realizado en la Universidad de Panamá, reveló que a pesar de que la mayoría de los estudiantes reconoce los riesgos del phishing, existe una brecha crítica entre la conciencia teórica y la aplicación práctica de medidas de seguridad. Por ejemplo, más de la mitad de los encuestados consideró que el spam solo es molesto y nunca peligroso, demostrando una percepción errónea que puede derivar en actitudes complacientes frente a amenazas reales \[4\].

En el Perú, validaron una escala de conciencia sobre ciberdelito aplicada a 372 estudiantes universitarios de tres universidades, encontrando cuatro factores principales: conciencia sobre phishing, conciencia sobre spamming, eficacia del software antivirus y Bullying en la web. El estudio demostró que los estudiantes de ingeniería tenían mayor conciencia que los de otras facultades, lo que sugiere que las humanidades y ciencias sociales pueden tener brechas de conocimiento que deben ser atendidas \[5\].

Por otro lado, en otro estudio demostraron que el comportamiento humano influye directamente en la probabilidad de caer víctimas de phishing. Su estudio encontró que las mujeres tienen mayor probabilidad de hacer clic en enlaces fraudulentos. Esto confirma que la prevención del phishing no solo depende de soluciones tecnológicas, sino también de la educación y concientización de los usuarios \[6\].

Teniendo en cuenta los artículos donde se obtuvieron las problemáticas tanto a nivel global como a nivel nacional y local, nuestro proyecto surge ante la necesidad de concientizar y ayudar a la vulnerabilidad de los estudiantes universitarios frente al phishing y los fraudes digitales. La Facultad de Ciencias Sociales de la Universidad Nacional Federico Villarreal, ubicada en la ciudad de Lima, es una comunidad académica que utiliza intensivamente las tecnologías de información para sus actividades académicas, comunicación y gestión administrativa. Sin embargo, no existe una herramienta educativa específica orientada a esta población que les permita aprender de forma interactiva cómo identificar y prevenir estos riesgos.

Por lo tanto, este proyecto propone el desarrollo de una plataforma web accesible, interactiva y educativa, diseñada especialmente para los estudiantes de la Facultad de Ciencias Sociales de la UNFV. La plataforma incluirá información clara sobre los tipos de phishing y fraudes digitales, una galería de imágenes con ejemplos reales para identificar intentos de engaño, y un formulario de Google Forms que permitirá evaluar el conocimiento antes y después del uso de la herramienta. Con ello, se espera obtener datos concretos que permitan medir la efectividad de la plataforma y contribuir a la formación de una comunidad universitaria más segura y consciente de los riesgos cibernéticos.

## **Problemática Internacional**

El phishing es una amenaza cibernética global que afecta a millones de usuarios cada año. Los ataques de phishing son considerados uno de los riesgos más significativos en materia de ciberseguridad a nivel mundial. Durante la pandemia de COVID-19, los delitos cibernéticos relacionados con phishing se incrementaron drásticamente, aprovechándose de la vulnerabilidad emocional y económica de las personas. El FBI estimó pérdidas superiores a los 2,100 millones de dólares por compromisos de correo empresarial entre 2014 y 2019\. A su vez, la empresa Comparitech reportó un récord histórico de más de 300,000 ataques de phishing entre 2019 y 2022, cifra que se ha triplicado en los últimos años \[2\]. Estos datos evidencian que el phishing no es un problema limitado a una región, sino una preocupación global que requiere estrategias de prevención integral.

## **Problemática Nacional (Perú)** 

En el Perú, el fraude informático lidera las denuncias de delitos cibernéticos. Entre enero y septiembre de 2025 se registraron 31,028 denuncias por delitos informáticos ante la Fiscalía Especializada en Ciberdelincuencia. De ese total, el 68.88% (21,371 casos) corresponden a fraude informático, y el 24.2% (7,508 casos) a delitos informáticos contra la fe pública, que incluyen desde phishing hasta deepfakes. La mayoría de estos casos se concentran en Lima Centro, con 10,544 delitos denunciados. Los delincuentes utilizan técnicas como phishing (correos falsos), SIM swapping (duplicación de chips) e inteligencia artificial para crear deepfakes que suplantan identidades y engañan a las víctimas. Desde la creación de la Unidad Fiscal Especializada en Ciberdelincuencia (UFEC) en 2021, las denuncias se han más que duplicado, pasando de 18,424 casos en 2021 a 42,161 en 2024, con un promedio de 100 casos diarios a nivel nacional \[3\].

## **Problemática Local (Lima \- UNFV)**

En el contexto local de la Universidad Nacional Federico Villarreal, específicamente en la Facultad de Ciencias Sociales, los estudiantes utilizan diariamente correos electrónicos, redes sociales, plataformas educativas y servicios de banca en línea para diversas actividades académicas y personales. Sin embargo, no se cuenta con programas formales de capacitación en ciberseguridad ni herramientas educativas específicas que les permitan reconocer y prevenir los intentos de phishing y fraude digital.  
Los estudiantes universitarios peruanos presentan niveles variados de conciencia sobre ciberdelitos, siendo las facultades de Humanidades y Ciencias Sociales las que históricamente muestran menor preparación en temas de seguridad digital. La falta de formación en estas áreas hace que los estudiantes sean blancos fáciles para los ciberdelincuentes, quienes aprovechan el desconocimiento y la confianza de los usuarios para obtener información confidencial y realizar fraudes económicos \[5\].

# **PLANTEAMIENTO DEL PROBLEMA**

## **Problema General**

Qué tan preparados están los estudiantes de la Facultad de Ciencias Sociales de la Universidad Nacional Federico Villarreal para reconocer y prevenir el phishing y los fraudes digitales?

## **Problemas Específicos**

1\. ¿Qué nivel de conocimiento tienen los estudiantes sobre phishing y fraudes digitales?

2\. ¿Qué tipos de amenazas digitales tienen mayor dificultad para reconocer?

3\. ¿Cómo puede una plataforma web educativa mejorar la concienciación sobre   
ciberseguridad en los estudiantes?

4\. ¿Qué cambios existen en el nivel de conocimiento después de usar la plataforma web?

# **OBJETIVOS**

## **Objetivo General**

Desarrollar una plataforma web para enseñar a los estudiantes de la Facultad de Ciencias Sociales de la Universidad Nacional Federico Villarreal a reconocer y prevenir el phishing y los fraudes digitales.

## **Objetivos Específicos**

1\. Determinar el nivel de conocimiento de los estudiantes sobre phishing y fraudes digitales.  
2\. Identificar las amenazas digitales que presentan mayor dificultad para los estudiantes.  
3\. Diseñar e implementar una plataforma web educativa sobre prevención de fraudes digitales.  
4\. Evaluar el nivel de conocimiento de los estudiantes después del uso de la plataforma web.

**MARCO DE TRABAJO SCRUM** 

El cliente y usuario final de este proyecto es la comunidad estudiantil de la Facultad de Ciencias Sociales de la Universidad Nacional Federico Villarreal (UNFV). Esta población utiliza constantemente herramientas digitales para sus actividades académicas y administrativas, pero carece de capacitación técnica en seguridad informática.

Para identificar sus problemas visitamos los salones de clase y aplicamos una encuesta que diagnóstica los problemas y necesidades de los estudiantes. Esta investigación de campo nos permitió recopilar datos exactos sobre sus experiencias con estafas digitales, sus canales de riesgo más comunes y su nivel de conocimiento actual sobre ciberseguridad.

La información obtenida constituye la materia prima y el punto de partida oficial para iniciar el marco de trabajo Scrum.

| ID | Hallazgo Clave de la Encuesta | Necesidad del Usuario / Negocio (Materia Prima) |
| ----- | ----- | ----- |
| N01 | El 68.7% de estudiantes afirma no haber escuchado nunca el término "Phishing" (p. 2). | El estudiante necesita un espacio introductorio con conceptos claros, sencillos y contextualizados para entender qué es el phishing sin tecnicismos complejos (p. 2). |
| N02 | El 59.7% se considera "Poco informado" y el 20.9% "Nada informado" sobre fraudes (p. 2). | La facultad requiere una centralización de información actualizada sobre las nuevas modalidades de estafa para mitigar el desconocimiento general de los alumnos (pp. 2, 7). |
| N03 | Las plataformas reportadas como más peligrosas son SMS (59.7%) y WhatsApp (52.2%) (p. 5). | El usuario necesita aprender a identificar los patrones específicos de engaño que ocurren en canales móviles, como ofertas de empleo falsas o suplantación de familiares (pp. 3-5). |
| N04 | El 41.8% admite haber hecho clic en un enlace sospechoso por error (p. 4). | El estudiante necesita herramientas visuales prácticas para inspeccionar de manera segura la estructura de los enlaces (URLs) antes de interactuar con ellos (pp. 4, 6-7). |
| N05 | Los alumnos señalan que los fraudes se camuflan imitando páginas y entidades reconocidas (ej. Topitop, bancos, redes sociales) (pp. 4, 6-7). | El sistema interactivo debe proveer una galería comparativa de casos reales (páginas clonadas vs. oficiales) para entrenar la capacidad de detección visual del alumno (pp. 4-5, 7). |
| N06 | El 67.2% de los encuestados afirma que usará la plataforma educativa desde su teléfono celular (p. 6). | La plataforma web tiene la necesidad técnica de ser completamente adaptativa (Mobile-First), garantizando una navegación fluida en dispositivos móviles de gama media o baja (p. 6). |
| N07 | El 79.1% considera importante contar con la plataforma web educativa (p. 5). | El proyecto requiere un entorno web de libre acceso que centralice recursos multimedia (consejos, imágenes, infografías) adaptados al interés estudiantil (p. 5). |
| N08 | El proyecto busca obtener datos concretos que permitan medir la efectividad pedagógica de la herramienta. | El sistema necesita integrar una evaluación Post-Test que registre las métricas de aprendizaje del estudiante después de navegar en la web. |

**REQUERIMIENTOS FUNCIONALES**

| Código ID | Requerimiento Funcional |
| ----- | ----- |
| RF01 | El sistema debe contar con una página de inicio y presentación atractiva que introduzca el propósito del sitio para universitarios de la UNFV y público general. |
| RF02 | La plataforma debe incluir un apartado educativo que explique conceptualmente qué es el phishing y cómo funciona su mecánica de engaño en lenguaje sencillo. |
| RF03 | El sistema debe desglosar las diferentes modalidades de fraude actuales, haciendo especial énfasis en los ataques dirigidos a dispositivos móviles (SMS y WhatsApp). |
| RF04 | La página debe incluir una galería con capturas de imágenes de casos reales (páginas web clonadas y mensajes falsos) estructurada para aprender a identificarlos. |
| RF05 | El sistema debe proveer una sección con recomendaciones clave sobre cómo sobrellevar un fraude digital si ya fueron víctimas y cómo proteger contraseñas. |
| RF06 | La plataforma debe incorporar un botón visible y directo que redireccione al usuario a un formulario de Google Forms para la evaluación final del conocimiento (Post-Test). |

**REQUERIMIENTOS NO FUNCIONALES**

| Código ID | Requerimiento No Funcional |
| ----- | ----- |
| RNF 01 | La interfaz del sitio debe estar diseñada y optimizada bajo el enfoque *Mobile-First*, garantizando que sea completamente responsiva en teléfonos celulares. |
| RNF 02 | El sitio web debe contar con una velocidad de carga rápida en conexiones móviles, optimizando y comprimiendo el peso de los archivos multimedia de la galería. |
| RNF 03 | La estructura y el menú de navegación de la página deben ser simples e intuitivos para permitir que cualquier usuario navegue por las secciones sin frustración. |
| RNF 04 | El sistema debe garantizar el anonimato total del flujo, absteniéndose de solicitar, recopilar o almacenar credenciales o datos personales de los estudiantes. |

**DESARROLLO DE LAS ÉPICAS:**

| Épica | Feature | Historia de Usuario |
| :---: | ----- | ----- |
|  Plataforma web educativa para la prevención y detección del phishing |  introducción al phishing | Como estudiante universitario, quiero visualizar una página de inicio atractiva para comprender el propósito y utilidad de la plataforma. |
|  |  | Como estudiante, quiero acceder a información sobre qué es el phishing para entender cómo operan estas amenazas. |
|  |  | Como estudiante, quiero conocer por qué el phishing representa un riesgo para mi vida digital para tomar conciencia sobre su impacto. |
|  |  Identificación de modalidades de fraude digital  | Como estudiante, quiero conocer las principales modalidades actuales de phishing para identificar situaciones de riesgo. |
|  |  | Como usuario estudiante, quiero visualizar ejemplos de estafas por WhatsApp para reconocer señales de alerta. |
|  |  | Como usuario de telefonía móvil, quiero aprender a identificar fraudes por SMS para evitar interactuar con mensajes sospechosos. |
|  |  | Como estudiante, quiero comparar páginas oficiales con páginas falsas para fortalecer mi capacidad de detección visual. |
|  |  | Como estudiante, quiero examinar capturas de mensajes fraudulentos reales para reconocer patrones comunes de engaño. |
|  |  | Como usuario, quiero identificar elementos sospechosos dentro de enlaces y sitios web para navegar de forma más segura. |
|  |  Prevención y respuesta ante fraudes digitales | Como usuario, quiero recibir recomendaciones para proteger mis contraseñas y cuentas para reducir el riesgo de sufrir ataques. |
|  |  | Como estudiante, quiero conocer qué acciones debo realizar después de un incidente para minimizar sus consecuencias. |
|  |  | Como estudiante, quiero acceder a consejos prácticos de seguridad digital para adoptar hábitos preventivos en mi vida diaria. |
|  |  Evaluación del aprendizaje y medición pedagógica | Como estudiante, quiero acceder fácilmente al cuestionario final para evaluar cuánto he aprendido después de utilizar la plataforma. |
|  |  | Como equipo de desarrollo, queremos visualizar los resultados del cuestionario para medir la efectividad de la herramienta educativa. |

**TARJETAS DETALLADAS DE CADA HISTORIA DE USUARIO:**

**HU-01 Página de inicio de la plataforma**

| Campo | Detalle |
| ----- | ----- |
| ID | HU-01 |
| Título | Página de inicio de la plataforma |
| Descripción | Como estudiante universitario, quiero visualizar una página de inicio atractiva para comprender el propósito y utilidad de la plataforma. |
| Criterios de validación | 1\. Debe mostrar el nombre de la plataforma.2. Debe incluir una introducción breve.3. Debe mostrar el menú principal.4. Debe visualizarse correctamente en dispositivos móviles. |
| Valor | Alto |
| Prioridad | Alta |
| Estimación | 8 horas |

**HU-02 Explicación sobre phishing**

| Campo | Detalle |
| ----- | ----- |
| ID | HU-02 |
| Título | Explicación sobre phishing |
| Descripción | Como estudiante, quiero acceder a información sobre qué es el phishing para entender cómo operan estas amenazas. |
| Criterios de validación | 1\. Debe definir qué es phishing.2. Debe usar lenguaje sencillo.3. Debe incluir ejemplos básicos.4. Debe estar organizada en una sección específica. |
| Valor | Alto |
| Prioridad | Alta |
| Estimación | 8 horas |

# **HU-03 Concientización sobre los riesgos del phishing**

| Campo | Detalle |
| ----- | ----- |
| ID | HU-03 |
| Título | Concientización sobre los riesgos del phishing |
| Descripción | Como estudiante, quiero conocer por qué el phishing representa un riesgo para mi vida digital para tomar conciencia sobre su impacto. |
| Criterios de validación | 1\. Debe describir las consecuencias del phishing.2. Debe mostrar casos representativos.3. Debe incluir recomendaciones iniciales.4. Debe ser comprensible para usuarios sin conocimientos técnicos. |
| Valor | Medio |
| Prioridad | Media |
| Estimación | 4 horas |

**HU-04 Modalidades actuales de phishing**

| Campo | Detalle |
| ----- | ----- |
| ID | HU-04 |
| Título | Modalidades actuales de phishing |
| Descripción | Como estudiante, quiero conocer las principales modalidades actuales de phishing para identificar situaciones de riesgo. |
| Criterios de validación | 1\. Debe mostrar diferentes modalidades.2. Cada modalidad debe incluir una explicación breve.3. Deben diferenciarse claramente.4. El contenido debe ser fácil de comprender. |
| Valor | Alto |
| Prioridad | Alta |
| Estimación | 8 horas |

**HU-05 Identificación de fraudes por WhatsApp**

| Campo | Detalle |
| ----- | ----- |
| ID | HU-05 |
| Título | Identificación de fraudes por WhatsApp |
| Descripción | Como usuario estudiante, quiero visualizar ejemplos de estafas por WhatsApp para reconocer señales de alerta. |
| Criterios de validación | 1\. Deben mostrarse ejemplos reales o simulados.2. Deben destacarse las señales sospechosas.3. Debe explicarse cómo actuar ante estos casos.4. Debe visualizarse correctamente en móviles. |
| Valor | Alto |
| Prioridad | Media |
| Estimación | 8 horas |

**HU-06 Identificación de fraudes por SMS**

| Campo | Detalle |
| ----- | ----- |
| ID | HU-06 |
| Título | Identificación de fraudes por SMS |
| Descripción | Como usuario de telefonía móvil, quiero aprender a identificar fraudes por SMS para evitar interactuar con mensajes sospechosos. |
| Criterios de validación | 1\. Deben mostrarse ejemplos de SMS fraudulentos.2. Deben resaltarse características sospechosas.3. Deben incluir recomendaciones de actuación.4. El contenido debe ser claro y sencillo. |
| Valor | Alto |
| Prioridad | Media |
| Estimación | 8 horas |

**HU-07 Comparación entre páginas oficiales y falsas**

| Campo | Detalle |
| ----- | ----- |
| ID | HU-07 |
| Título | Comparación entre páginas oficiales y falsas |
| Descripción | Como estudiante, quiero comparar páginas oficiales con páginas falsas para fortalecer mi capacidad de detección visual. |
| Criterios de validación | 1\. Deben mostrarse imágenes comparativas.2. Deben resaltarse las diferencias principales.3. El usuario debe poder identificar elementos sospechosos.4. Las imágenes deben visualizarse correctamente. |
| Valor | Alto |
| Prioridad | Media |
| Estimación | 12 horas |

**HU-08 Análisis de mensajes fraudulentos reales**

| Campo | Detalle |
| ----- | ----- |
| ID | HU-08 |
| Título | Análisis de mensajes fraudulentos reales |
| Descripción | Como estudiante, quiero examinar capturas de mensajes fraudulentos reales para reconocer patrones comunes de engaño. |
| Criterios de validación | 1\. Deben mostrarse capturas de mensajes fraudulentos reales o simulados.2. Deben destacarse las señales de alerta presentes en cada caso.3. Debe explicarse por qué el mensaje es considerado fraudulento.4. El contenido debe visualizarse correctamente en dispositivos móviles. |
| Valor | Alto |
| Prioridad | Media |
| Estimación | 8 horas |

**HU-09 Identificación de enlaces y sitios sospechosos**

| Campo | Detalle |
| ----- | ----- |
| ID | HU-09 |
| Título | Identificación de enlaces y sitios sospechosos |
| Descripción | Como usuario, quiero identificar elementos sospechosos dentro de enlaces y sitios web para navegar de forma más segura. |
| Criterios de validación | 1\. Deben mostrarse ejemplos de URLs legítimas y sospechosas.2. Deben resaltarse los elementos que indican riesgo.3. Debe explicarse cómo inspeccionar una URL antes de hacer clic.4. El usuario debe poder diferenciar enlaces seguros de inseguros. |
| Valor | Alto |
| Prioridad | Media |
| Estimación | 12 horas |

**HU-10 Recomendaciones para proteger cuentas y contraseñas**

| Campo | Detalle |
| ----- | ----- |
| ID | HU-10 |
| Título | Recomendaciones para proteger cuentas y contraseñas |
| Descripción | Como usuario, quiero recibir recomendaciones para proteger mis contraseñas y cuentas para reducir el riesgo de sufrir ataques. |
| Criterios de validación | 1\. Deben presentarse recomendaciones claras y prácticas.2. Deben incluirse buenas prácticas para la creación de contraseñas seguras.3. Debe recomendarse el uso de medidas adicionales de seguridad.4. El contenido debe ser comprensible para cualquier usuario. |
| Valor | Alto |
| Prioridad | Baja |
| Estimación | 4 horas |

**HU-11 Acciones posteriores a un fraude digital**

| Campo | Detalle |
| ----- | ----- |
| ID | HU-11 |
| Título | Acciones posteriores a un fraude digital |
| Descripción | Como estudiante, quiero conocer qué acciones debo realizar después de un incidente para minimizar sus consecuencias. |
| Criterios de validación | 1\. Deben indicarse los pasos a seguir después de ser víctima de fraude.2. Deben recomendarse acciones inmediatas para proteger las cuentas.3. Debe sugerirse la denuncia ante las entidades correspondientes.4. La información debe presentarse de forma ordenada. |
| Valor | Alto |
| Prioridad | Baja |
| Estimación | 4 horas |

**HU-12 Consejos prácticos de seguridad digital**

| Campo | Detalle |
| ----- | ----- |
| ID | HU-12 |
| Título | Consejos prácticos de seguridad digital |
| Descripción | Como estudiante, quiero acceder a consejos prácticos de seguridad digital para adoptar hábitos preventivos en mi vida diaria. |
| Criterios de validación | 1\. Deben mostrarse consejos de fácil aplicación.2. Deben estar organizados de manera clara.3. Deben orientarse a la prevención del phishing.4. El contenido debe poder consultarse desde dispositivos móviles. |
| Valor | Medio |
| Prioridad | Baja |
| Estimación | 4 horas |

**HU-13 Acceso al cuestionario final (Post-Test)**

| Campo | Detalle |
| ----- | ----- |
| ID | HU-13 |
| Título | Acceso al cuestionario final (Post-Test) |
| Descripción | Como estudiante, quiero acceder fácilmente al cuestionario final para evaluar cuánto he aprendido después de utilizar la plataforma. |
| Criterios de validación | 1\. Debe existir un botón visible para acceder al cuestionario.2. El botón debe redirigir correctamente al formulario de Google Forms.3. El acceso debe funcionar desde computadoras y teléfonos móviles.4. El enlace debe abrirse sin errores. |
| Valor | Alto |
| Prioridad | Baja |
| Estimación | 4 horas |

**HU-14 Visualización de resultados del cuestionario**

| Campo | Detalle |
| ----- | ----- |
| ID | HU-14 |
| Título | Visualización de resultados del cuestionario |
| Descripción | Como equipo de desarrollo, queremos visualizar los resultados del cuestionario para medir la efectividad de la herramienta educativa. |
| Criterios de validación | 1\. Deben poder consultarse los resultados obtenidos del cuestionario.2. Debe facilitarse la comparación entre las respuestas registradas.3. La información debe servir para evaluar el aprendizaje alcanzado.4. Los datos deben analizarse sin comprometer la identidad de los participantes. |
| Valor | Alto |
| Prioridad | Baja |
| Estimación | 8 horas |

**PRODUCT BACKLOG:**

| ID HU | Historia de Usuario | Prioridad | Horas Estimadas |
| ----- | ----- | ----- | ----- |
| HU-01 | Como estudiante universitario, quiero visualizar una página de inicio atractiva para comprender el propósito y utilidad de la plataforma. | Alta | 8 h |
| HU-02 | Como estudiante, quiero acceder a información sobre qué es el phishing para entender cómo operan estas amenazas. | Alta | 8 h |
| HU-03 | Como estudiante, quiero conocer por qué el phishing representa un riesgo para mi vida digital para tomar conciencia sobre su impacto. | Alta | 4 h |
| HU-04 | Como estudiante, quiero conocer las principales modalidades actuales de phishing para identificar situaciones de riesgo. | Alta | 8 h |
| HU-05 | Como usuario estudiante, quiero visualizar ejemplos de estafas por WhatsApp para reconocer señales de alerta. | Media | 8 h |
| HU-06 | Como usuario de telefonía móvil, quiero aprender a identificar fraudes por SMS para evitar interactuar con mensajes sospechosos. | Media | 8 h |
| HU-07 | Como estudiante, quiero comparar páginas oficiales con páginas falsas para fortalecer mi capacidad de detección visual. | Media | 12 h |
| HU-08 | Como estudiante, quiero examinar capturas de mensajes fraudulentos reales para reconocer patrones comunes de engaño. | Media | 8 h |
| HU-09 | Como usuario, quiero identificar elementos sospechosos dentro de enlaces y sitios web para navegar de forma más segura. | Media | 12 h |
| HU-10 | Como usuario, quiero recibir recomendaciones para proteger mis contraseñas y cuentas para reducir el riesgo de sufrir ataques. | Baja | 4 h |
| HU-11 | Como estudiante, quiero conocer qué acciones debo realizar después de un incidente para minimizar sus consecuencias. | Baja | 4 h |
| HU-12 | Como estudiante, quiero acceder a consejos prácticos de seguridad digital para adoptar hábitos preventivos en mi vida diaria. | Baja | 4 h |
| HU-13 | Como estudiante, quiero acceder fácilmente al cuestionario final para evaluar cuánto he aprendido después de utilizar la plataforma. | Baja | 4 h |
| HU-14 | Como investigador del proyecto, quiero visualizar los resultados del cuestionario para medir la efectividad de la herramienta educativa. | Baja | 8 h |
| TOTAL |  |  | 100 h |

**SCRUM TEAM:**

| Integrante | Rol | Responsabilidades |
| :---: | :---: | ----- |
| Herrera Ccari Robert Eloy |  Product Owner | Recopilar necesidades, definir y priorizar el Product Backlog, elaborar Historias de Usuario y validar que el producto cumpla los objetivos del proyecto. |
| Condori Quispe Tito | Desarrollador Frontend | Implementar las interfaces de usuario, la página de inicio y asegurar el diseño responsivo. |
| Nina Anchapuri Brens Fabrizio Leandro | Desarrollador Frontend / Contenido Multimedia | Integrar galerías, imágenes comparativas y contenido educativo dentro de la plataforma. |
| Rivera Estrada Piero Raúl | Desarrollador Backend e Integraciones | Configurar la integración con Google Forms y brindar soporte técnico a la lógica del sistema. |
| Fernández Reluz Erick Arian |  Diseñador UX/UI | Diseñar la experiencia de usuario, estructura de navegación y organización visual de la plataforma. |
| Parraga Vela Jafet Onán | Responsable de Calidad y Pruebas (QA Tester) | Verificar criterios de aceptación, realizar pruebas funcionales y validar que la plataforma cumpla los requerimientos. |

**SPRINT BACKLOG:**

## **Sprint 1 \- Estructura Base y Contenido Educativo Fundamental**

Desarrollar los contenidos fundamentales que permitan al estudiante comprender qué es el phishing, sus riesgos y las principales modalidades de fraude digital. 

### **Sprint Backlog**

| ID HU | Historia de Usuario | Horas |
| ----- | ----- | ----- |
| HU-01 | Como estudiante universitario, quiero visualizar una página de inicio atractiva para comprender el propósito y utilidad de la plataforma. | 8 h |
| HU-02 | Como estudiante, quiero acceder a información sobre qué es el phishing para entender cómo operan estas amenazas. | 8 h |
| HU-03 | Como estudiante, quiero conocer por qué el phishing representa un riesgo para mi vida digital para tomar conciencia sobre su impacto. | 4 h |
| HU-04 | Como estudiante, quiero conocer las principales modalidades actuales de phishing para identificar situaciones de riesgo. | 8 h |
| Total Sprint 1 |  | 28 h |

## **HU-01: Página de inicio de la plataforma (8 h)**

| Tarea | Horas |
| ----- | ----- |
| Diseñar el wireframe de la página de inicio en función de la navegación definida. | 2 h |
| Crear el componente Home utilizando Next.js App Router. | 2 h |
| Implementar el menú principal de navegación con enlaces a las secciones de la plataforma. | 2 h |
| Aplicar estilos responsivos con Tailwind CSS para dispositivos móviles. | 2 h |
| **Total HU-01** | **8 h** |

## **HU-02: Explicación sobre phishing (8 h)**

| Tarea | Horas |
| ----- | ----- |
| Investigar información confiable sobre el concepto y funcionamiento del phishing. | 2 h |
| Redactar el contenido educativo en lenguaje sencillo. | 2 h |
| Implementar la sección "¿Qué es el phishing?" dentro de la plataforma. | 2 h |
| Incorporar iconografía de apoyo mediante Lucide React para reforzar la comprensión visual. | 2 h |
| **Total HU-02** | **8 h** |

## **HU-03: Concientización sobre los riesgos del phishing (4 h)**

| Tarea | Horas |
| ----- | ----- |
| Recopilar ejemplos de consecuencias derivadas de ataques de phishing. | 1 h |
| Redactar mensajes de concientización dirigidos a estudiantes. | 1 h |
| Implementar la sección de riesgos dentro de la plataforma. | 1 h |
| Diseñar elementos visuales de apoyo para destacar el impacto del phishing. | 1 h |
| **Total HU-03** | **4 h** |

## **HU-04: Modalidades actuales de phishing (8 h)**

| Tarea | Horas |
| ----- | ----- |
| Investigar las modalidades actuales de phishing relevantes para estudiantes universitarios. | 2 h |
| Elaborar el contenido descriptivo de cada modalidad identificada. | 2 h |
| Desarrollar la sección informativa sobre modalidades de fraude en Next.js. | 2 h |
| Incorporar recursos visuales e iconos para diferenciar cada modalidad. | 2 h |
| **Total HU-04** | **8 h** |

![][image2]

## **Sprint 2 \- Contenido Visual y Prevención**

Implementar herramientas educativas e interactivas que ayuden al estudiante a reconocer fraudes digitales mediante ejemplos reales. 

| ID HU | Historia de Usuario | Horas |
| ----- | ----- | ----- |
| HU-05 | Como usuario estudiante, quiero visualizar ejemplos de estafas por WhatsApp para reconocer señales de alerta. | 8 h |
| HU-06 | Como usuario de telefonía móvil, quiero aprender a identificar fraudes por SMS para evitar interactuar con mensajes sospechosos. | 8 h |
| HU-07 | Como estudiante, quiero comparar páginas oficiales con páginas falsas para fortalecer mi capacidad de detección visual. | 12 h |
| HU-08 | Como estudiante, quiero examinar capturas de mensajes fraudulentos reales para reconocer patrones comunes de engaño. | 8 h |
| HU-09 | Como usuario, quiero identificar elementos sospechosos dentro de enlaces y sitios web para navegar de forma más segura. | 12 h |
| Total Sprint 2 |  | 48 h |

# **HU-05: Identificación de fraudes por WhatsApp (8 h)**

| Tarea | Horas |
| ----- | ----- |
| **Investigar casos representativos de estafas por WhatsApp dirigidas a estudiantes.** | **2 h** |
| **Seleccionar y adaptar capturas o ejemplos simulados para uso educativo.** | **2 h** |
| **Desarrollar la sección de ejemplos de WhatsApp en Next.js.** | **2 h** |
| **Diseñar tarjetas visuales destacando señales de alerta.** | **2 h** |
| **Total HU-05** | **8 h** |

## ---

# **HU-06: Identificación de fraudes por SMS (8 h)**

| Tarea | Horas |
| ----- | ----- |
| **Investigar ejemplos actuales de phishing mediante SMS.** | **2 h** |
| **Elaborar mensajes simulados resaltando patrones sospechosos.** | **2 h** |
| **Implementar la sección educativa sobre fraudes por SMS.** | **2 h** |
| **Diseñar la presentación visual de los mensajes tipo SMS.** | **2 h** |
| **Total HU-06** | **8 h** |

## ---

# **HU-07: Comparación entre páginas oficiales y falsas (12 h)**

| Tarea | Horas |
| ----- | ----- |
| **Recopilar ejemplos de páginas legítimas y páginas clonadas.** | **2 h** |
| **Preparar las imágenes comparativas para fines educativos.** | **2 h** |
| **Diseñar la interfaz de comparación visual lado a lado.** | **2 h** |
| **Implementar el componente comparativo utilizando Next.js y Tailwind CSS.** | **4 h** |
| **Incorporar indicadores visuales que destaquen diferencias críticas.** | **2 h** |
| **Total HU-07** | **12 h** |

## ---

# **HU-08: Análisis de mensajes fraudulentos reales (8 h)**

| Tarea | Horas |
| ----- | ----- |
| **Recopilar ejemplos de mensajes fraudulentos reales o simulados.** | **2 h** |
| **Identificar y documentar las señales de alerta presentes en cada caso.** | **2 h** |
| **Implementar la galería de mensajes fraudulentos en la plataforma.** | **2 h** |
| **Diseñar etiquetas visuales para resaltar patrones de engaño.** | **2 h** |
| **Total HU-08** | **8 h** |

## ---

# **HU-09: Identificación de enlaces y sitios sospechosos (12 h)**

| Tarea | Horas |
| ----- | ----- |
| **Recopilar ejemplos de URLs legítimas y sospechosas.** | **2 h** |
| **Elaborar el contenido explicativo sobre cómo inspeccionar enlaces.** | **2 h** |
| **Diseñar ejemplos visuales resaltando elementos de riesgo dentro de las URLs.** | **2 h** |
| **Implementar la sección interactiva de identificación de enlaces utilizando Next.js.** | **4 h** |
| **Integrar iconografía y recursos visuales de apoyo mediante Lucide React.** | **2 h** |
| **Total HU-09** | **12 h** |

## 

## **Sprint 3 \- Evaluación, Calidad y Cierre**

Incorporar recomendaciones preventivas y mecanismos de evaluación para medir el aprendizaje alcanzado por los estudiantes. 

| ID HU | Historia de Usuario | Horas |
| ----- | ----- | ----- |
| HU-10 | Como usuario, quiero recibir recomendaciones para proteger mis contraseñas y cuentas para reducir el riesgo de sufrir ataques. | 4 h |
| HU-11 | Como estudiante, quiero conocer qué acciones debo realizar después de un incidente para minimizar sus consecuencias. | 4 h |
| HU-12 | Como estudiante, quiero acceder a consejos prácticos de seguridad digital para adoptar hábitos preventivos en mi vida diaria. | 4 h |
| HU-13 | Como estudiante, quiero acceder fácilmente al cuestionario final para evaluar cuánto he aprendido después de utilizar la plataforma. | 4 h |
| HU-14 | Como investigador del proyecto, quiero visualizar los resultados del cuestionario para medir la efectividad de la herramienta educativa. | 8 h |
| Total Sprint 3 |  | 24 h |

**REFERENCIAS**

\[1\] Ruiz Contreras, P., & Solis Castillo , J. C. (2024). Fraude informático en la modalidad de phishing en Lima. Revista Escpogra PNP , 3(2), 143–155. https://doi.org/10.59956/escpograpnpv3n2.12  
   
\[2\] T. Sutter, A. S. Bozkir, B. Gehring and P. Berlich, "Avoiding the Hook: Influential Factors of Phishing Awareness Training on Click-Rates and a Data-Driven Approach to Predict Email Difficulty Perception," in IEEE Access, vol. 10, pp. 100540-100565, 2022, doi: 10.1109/ACCESS.2022.3207272. keywords: {Phishing;Training data;Human factors;Estimation ;Predictive models;Machine learning;Security;Human computer interaction;Difficulty estimation;human-centered;machine learning;phishing awareness;susceptibility;phishing attack simulations},  
   
\[3\] Mendoza, M. (2026). El fraude informático lidera las denuncias del 2025\. eBIZ \- Confianza Digital para un Perú Seguro. [https://ebiz.pe/noticias/especial-confianza-digital-para-un-peru-seguro-fraude-informatico/](https://ebiz.pe/noticias/especial-confianza-digital-para-un-peru-seguro-fraude-informatico/)

\[4\] Candanedo Yau, R. M. (2025). Phishing y Spam: Un correo malintencionado. Seguridad digital de tu información ante el robo de datos . Acción Y Reflexión Educativa, (51), 235–254. [https://doi.org/10.48204/j.are.n51.a8862](https://doi.org/10.48204/j.are.n51.a8862)

\[5\] Ramírez-Asis, E. H., Norabuena-Figueroa, R. P. ., Toledo-Quiñones, R. E. . y Henostroza Márquez Mázmela, P. R. . (2022). Validación de una escala de concientización sobre ciberdelincuencia en estudiantes universitarios peruanos. Revista Científica General José María Córdova, 20(37), 209–224. [https://doi.org/10.21830/19006586.791](https://doi.org/10.21830/19006586.791)

\[6\] H. Abroshan, J. Devos, G. Poels and E. Laermans, "Phishing Happens Beyond Technology: The Effects of Human Behaviors and Demographics on Each Step of a Phishing Process," in IEEE Access, vol. 9, pp. 44928-44949, 2021, doi: 10.1109/ACCESS.2021.3066383. keywords: {Phishing;Electronic mail;Psychology;Decision making;Security;Internet;Computer crime;Cyber security;phishing;human behaviour;individual differences;online scams},

phishing-website  
Tecnologias Utilizadas

Tecnología

Next.js 15  
(App  
Router)

TypeScript

Tailwind  
CSS 4.x

SQLite  
(better-  
sqlite3)

Lucide  
React

Propósito

Framework principal con  
arquitectura basada en  
rutas dinámicas para alta  
performance y  
optimización SEO.

Desarrollo con tipado  
estático estricto para  
asegurar la escalabilidad  
del sistema.

Estilos visuales  
adaptativos y modernos  
con variables nativas de  
CSS.

Base de datos local ligera  
y sincrona para  
almacenamiento seguro de  
postests académicos.

Iconografía vectorizada,  
moderna e intuitiva.  


[image1]: <data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAUoAAAB/CAYAAACJ6YuvAABJ30lEQVR4Xu3dDbxtRVk/8HXuvaRpmtirpBCWqaVp4S3AvxF0vaL4UhliaZmihPmWYiloovlWmhmSgqaiqSCaCmKCKIIJGqJppZap3CsiSr5kIGKa7P/6zp5n3dlrr7XPPeeec0U/8/t85rP3XmvWzKxZs377eeZ55pmmKXDPFt/61reeOtlFXHfddf1DuxNP3bp16z3b29lc3ltFRUXFLmPTpk1bNmzYcE379do2TZaWllacXBepf24srSTvzqSNGzdee8Mb3vCa9vsZ5f1VVFRUrAW2tiQzeeYznzl53vOeN3nOc56zovTsZz87pec+97mTP//zP58559hQinNxXXl87Np+vf18vjdTsj6nf4MVFRUVu4qtrUSZdNf/+7//m1Gf/f72t7+dPkt87nOfm9zudreb3OEOd5h84xvfSNf4hGuvvXbyv//7vzP5lSGP5Hsck9exqMf3Y489dvKABzxgcsQRR6Rj3/zmN1P+aEPki3ICjpEsm0qUFRUV64CtCCaIrCQeQFQ3vvGNJz/6oz86ecc73pFI8O///u8nN7rRjSYHH3zw5MEPfnDKp4xf/uVf7q53XZQRnyW5KcfxK6+8crL//vtP9thjj/T7v/7rv5Jk+N///d+Txz72sd21t7jFLSY//MM/3JUzRJSuaypRVlRUrAPmJMogp6uuuqojoq985SuJnBDZcccdN7n00ksTMb3xjW/s8rzrXe9KUub973//RJSlpAjf+ta3ury+3/nOd558//d/f/ot7w1veMPJD/7gD6bfX/ziFyf3ve99U75jjjmmkyyhT+pxTHuaSpQVFRXrgCRRQkhpyIkqHWo3krrJTW6Sjv3QD/3Q5O1vf3uSIK+55ppEdPe5z31KzkoS6M///M9Pvu/7vm9yyimnpGNXX311Km/PPfec/OzP/mySPp///OfPqPWnnnpqqmPz5s2TH/iBH5j80z/90+TmN7/55J3vfOfkZje7Wde+aFufLJtKlBUVFeuEGaJEkkFet7rVrRJR7b333pOvf/3rkx//8R+fIay4BnE6L8Ef/MEfsEInifCoo45Kx5Cp31R4Euxee+01ee1rX5vOqe/f/u3fJr//+7/flWv+EkHf9KY3TYToNwmUCo6IP/vZz1airKio2G2YkyjhoIMOSqT5vve9LxESi/gHPvCBRGokwciLHM8+++zJfvvt1xHsBz/4wckv/uIvTp761KdOfud3fmeydevWJJHuu+++kze/+c2Tn/zJn0zzklGn66jcd7vb3br6wXEqOLJ+05velI596EMfSp+s3H00lSgrKirWCVvb1JFNSJWOSYwtPj/xiU+kOchb3vKWaX4SkCQSRXD/+Z//2ZUBv/d7vze58MILE1G6fsuWLYkska3fJSmff/75k6997WupXlJkzGUy8CBceP/73z+5wQ1ukIhTOdHOUqrMba5EWVFRseaYIcpw86EWhzEHObJS3/GOd5x85CMfmfzHf/xH8plEVKEiM+qYswwgUecf+MAHJgOPuU3GGtcjt5gHBRb0Jz3pSd21SPP1r399qv+MM86YvO1tb0vHSaHquOyyyya3ve1t07FKlBUVFbsDM0QZPpAIKazWElcgv9/73vdO/vZv/3bymc98JuVFdogSIYbF2lwkIw4ye9jDHjb5hV/4hSQFmpv893//98lv/MZvJCI0fxnqOuINNVy5H/7whyd3uctdJh//+Mcn//qv/zq5zW1u07UREGRpCQf30VSirKioWAfMqd5A4gtfx4B5y5/6qZ9KebZt2zZ52tOeNpP/n//5n5MzOnBIN6/4u7/7u5MHPehBkyc/+cmT173udZN3v/vdSf2mViNS6nlpxIHTTz998j//8z/p0/ykOhAy8o72lNbygPtoKlFWVFSsA2aIchG4+ADp8MQTT5xcccUVk7POOqs7jxARKeMOdfof/uEfurlOiQX7pJNOSmp2qPUMPS996UvTdyTIWPMv//IvyXeSZRu4E5U+mIizb/GGXE8lyoqKijXHIFEiInOFcOtb33pywAEHpO/77LNPkua+8IUvJBWadAjmJF/1qlclSfCud71rIkUrefpLEM1RIkHS6Atf+MJOAg285jWvmTzmMY9J5bz4xS9O/pSI8aEPfWhnKde2SpQVFRW7E4NEGUBSHL/DLQge9ahHJQv03/zN3ySV+C1veUungvO5fMMb3pD8KDmXW3bIKV3iA0nSRKLK+9M//dNk6AlcfPHF6fjjH//45CuJqEmx/CetDFJuEG8lyoqKit2JGaIs5/5KY8mP/diPpU8O4yzdVOHPf/7zaa23cwgvrkWeyjQHyVLuu9U2VHbJvGMA4b3iFa+Y/Oqv/mryuySNhpqN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>

[image2]: <data:image/png;base64,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>