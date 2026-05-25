# Plan de Implementación — 2do Sprint · Anti-Phishing UNFV

> Basado en `paper_actualizado.docx` y `contenido_segundo_sprint.md`.

---

## Contexto del Paper

El proyecto integrador cita **7 artículos científicos** que justifican cada necesidad de la plataforma. Las más relevantes para el Sprint 2:

| ID | Artículo clave | Hallazgo que justifica Sprint 2 |
|---|---|---|
| [7] | Molina Hernández & Olivas Doña, 2025 | 36.9% de universitarios cayó en phishing simulado; carreras humanísticas (Psicología 41.9%, Derecho 33.3%) son las más vulnerables |
| [8] | Abdulla et al., 2023 | 57.3% haría clic en enlace de correo suplantando una institución; solo 22.8% identifica spam |
| [9] | Okokpujie et al., 2025 | 39.8% abrió el correo falso; 80% desconoce la función "reportar phishing" |
| [11] | Yoro et al., 2023 | Los correos con urgencia/miedo (Mailbox Full, Semester Result) son los más efectivos |
| [13] | Shahbazi et al., 2025 | El 75% identifica phishing por enlaces sospechosos; el 40% por calidad de redacción |

---

## Historias de Usuario del Sprint 2

| ID | Historia | Estimación | Criterios de validación |
|---|---|---|---|
| **HU-07** | Galería de correos fraudulentos | 7 h | ≥3 ejemplos visuales; señalar indicadores de fraude [11][13]; imágenes correctamente renderizadas |
| **HU-08** | Comparación de sitios web fraudulentos | 8 h | Comparaciones real vs. falso; diferencias resaltadas; imágenes etiquetadas [12][13] |
| **HU-09** | Consejos para identificar phishing | 8 h | ≥5 consejos prácticos; lenguaje claro; respaldado en [9][10][13] |
| **HU-10** | Recomendaciones de protección digital | 5 h | Recomendaciones de seguridad; contraseñas + 2FA; basado en [8][9][10][12] |
| **HU-03** | Adaptación responsive | 6 h | Funciona en móvil (61.3% usa smartphone [10]) |

---

## Propuestas de Cambio

---

### 1. Sección "Cómo Funciona" (Expansión a 6 Pasos)

**Justificación**: HU-06 · Necesidades N1.1, N1.2, N3.2

La página `app/aprender/como-funciona/page.tsx` actualmente tiene 3 pasos genéricos. El contenido del segundo sprint define un flujo pedagógico de **6 pasos** basado en Abdulla et al. (2023) que integra términos clave como *spear phishing* y *smishing*.

#### [MODIFY] [page.tsx](file:///home/pierooo/Projects/Proyecto_Integrador_v0/phishing-unfv/app/aprender/como-funciona/page.tsx)

Sustituir el contenido del timeline con estos 6 pasos:

| # | Título | Contenido clave |
|---|---|---|
| 1 | Eligen a quién engañar | Masivo o dirigido (spear phishing) |
| 2 | Crean una mentira creíble | Ingeniería social y pretexto |
| 3 | Lanzan el "anzuelo" | Correo o SMS (smishing) |
| 4 | Ponen la trampa técnica | Página clonada o archivo adjunto |
| 5 | Tú caes en el engaño | Error humano por urgencia; 36.9% de universitarios caería [7] |
| 6 | Te roban la información | Captura de credenciales o control remoto |

La sección *"El rol de la Ingeniería Social"* se mantiene sin cambios.

---

### 2. Galería de Correos Fraudulentos (HU-07)

**Justificación**: Necesidades N1.3, N7.1, N7.4 · Criterios: ≥3 ejemplos, señalar indicadores [11][13]

#### [NEW] [page.tsx](file:///home/pierooo/Projects/Proyecto_Integrador_v0/phishing-unfv/app/(sections)/galeria/correos/page.tsx)

**Imágenes disponibles** (en `public/images/correos/`):
- `correo1.png` — correo fraudulento #1
- `correo2.png` — correo fraudulento #2
- `correo3.png` — correo fraudulento #3
- `correo4.png` — correo fraudulento #4
- `correo5.png` — correo fraudulento #5
- `correo_no_fraudulento.png` — correo **legítimo** (caso comparativo)

**Diseño propuesto**:
- Grid responsivo de 2-3 columnas con tarjetas de imagen (`<Image />` de Next.js)
- Al hacer hover (desktop) / tap (mobile): aparece un **overlay glassmorphism** con:
  - Título y tipo de ataque
  - Lista de indicadores de fraude visuales (remitente, urgencia, URL, ortografía)
  - Badge de "FRAUDE" o "LEGÍTIMO" según corresponda
- Sección introductoria con los **4 principales indicadores** (N7.4): enlaces sospechosos, remitente inusual, urgencia extrema, errores gramaticales
- Los 4 indicadores son los más reportados: 75% detecta por links [13], 62.9% por remitente [13], 48.6% por presión psicológica [13], 40% por redacción [13]

**Estructura de datos**:
```typescript
interface PhishingEmail {
  id: string;
  src: string;                  // path en /images/correos/
  alt: string;
  title: string;
  badge: 'fraude' | 'legitimo';
  tipo: string;                 // "Banco", "Universidad", "Becas", etc.
  indicators: string[];         // ["Remitente sospechoso", "Urgencia extrema", ...]
  explanation: string;          // Breve explicación pedagógica
}
```

---

### 3. Comparador de Sitios Web Fraudulentos (HU-08)

**Justificación**: Necesidades N1.3, N3.3 · Criterios: comparaciones real vs. falso, diferencias etiquetadas [12][13]

#### [NEW] [page.tsx](file:///home/pierooo/Projects/Proyecto_Integrador_v0/phishing-unfv/app/(sections)/galeria/sitios/page.tsx)

**Imágenes disponibles** (en `public/images/sitios/`):
- `download.png` — captura de sitio web fraudulento

**Diseño propuesto**:
- Toggle de dos pestañas: **"Sitio Real"** / **"Sitio Falso"** — switching instantáneo con animación suave
- El sitio real se mostrará con un placeholder ilustrativo o descripción de referencia (por falta de captura real)
- Sobre la imagen del sitio falso: **puntos de alerta numerados** con tooltips explicativos:
  1. Sin candado HTTPS / certificado inválido
  2. URL alterada (letras de más/menos, dominio diferente)
  3. Redacción descuidada o errores ortográficos
  4. Sin identificación legal del propietario
  5. Formularios que piden datos sensibles por HTTP

**Contenido educativo de la página** (del paper):
- Sección *"¿Cómo reconocer una página web falsa o clonada?"* (basado en ESET y Kaspersky)
- Sección *"¿Cómo evitar caer en una web falsa?"*

---

### 4. Consejos de Prevención (HU-09 + HU-10)

**Justificación**: Necesidades N2.1, N2.2, N4.2, N4.3, N7.2 · Criterios: ≥5 consejos [9][10][13]; ≥5 recomendaciones [8][9][10][12]

#### [NEW] [page.tsx](file:///home/pierooo/Projects/Proyecto_Integrador_v0/phishing-unfv/app/(sections)/consejos/page.tsx)

Esta página combina HU-09 y HU-10 en dos secciones dentro de la misma ruta:

**Sección 1 — Identificar Phishing (HU-09)**:

| Consejo | Justificación en el paper |
|---|---|
| 1. Verifica el remitente antes de abrir | 62.9% detecta phishing por remitente inusual [13] |
| 2. No hagas clic en links de correos sospechosos | 75% identifica enlaces sospechosos [13] |
| 3. Desconfía de mensajes con urgencia extrema | 48.6% reconoce presión psicológica [13]; ataques de tipo "Mailbox Full" son los más efectivos [11] |
| 4. Busca errores ortográficos y de diseño | 40% de estudiantes se fija en calidad de redacción [13] |
| 5. Usa la función "Reportar phishing" de tu correo | 80% desconoce esta función [9] |
| 6. No abras archivos adjuntos inesperados | Los archivos adjuntos son vector de malware [1] |

**Sección 2 — Protección Digital (HU-10)**:

| Recomendación | Justificación |
|---|---|
| 1. Usa contraseñas únicas y seguras | Media de 3.1/5 en prácticas de contraseñas [10]; 53.6% reutiliza credenciales [8] |
| 2. Activa la verificación en dos pasos (2FA) | Protección adicional ante robo de credenciales |
| 3. Usa un gestor de contraseñas | Facilita tener contraseñas únicas sin memorizarlas |
| 4. Evita WiFi público para cuentas importantes | 52.1% usa WiFi público para acceder a cuentas [8] |
| 5. Mantén tu software actualizado | Parches de seguridad cierran vulnerabilidades explotadas |

---

## Verification Plan

### Tests automáticos
```bash
# Verificar que el proyecto compila sin errores TypeScript
npm run build

# Verificar que las páginas de galería están correctamente registradas
# (las rutas deben responder con 200 en lugar de 404)
```

### Verificación Manual
- **Galería de correos**: Hover sobre cada tarjeta activa el overlay con indicadores visibles
- **Comparador de sitios**: El toggle Real/Falso cambia la imagen correctamente; los puntos de alerta son visibles y tienen tooltips
- **Consejos**: Las tarjetas/acordeón son legibles en móvil (360px) y desktop
- **Responsive**: Toda la galería es accesible vía tap en pantallas táctiles
- **Performance**: Las imágenes cargan con prioridad correcta usando `<Image />` de Next.js con `loading="lazy"` excepto la primera imagen `priority`

---

> [!NOTE]
> **Imágenes de sitios**: Actualmente solo hay `download.png` para sitios. Se puede usar la imagen del sitio falso y mostrar el sitio "real" con una representación gráfica/mockup o descripción.

> [!IMPORTANT]
> **Orden de implementación sugerido**: (1) `como-funciona/page.tsx` → (2) `consejos/page.tsx` → (3) `galeria/correos/page.tsx` → (4) `galeria/sitios/page.tsx`
