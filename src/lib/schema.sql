-- Esquema de base de datos — Plataforma Anti-Phishing UNFV
-- Tabla de respuestas del postest

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
  p8_utilidad_plataforma INTEGER,        -- percepción de utilidad
  comentarios TEXT,
  fecha TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
