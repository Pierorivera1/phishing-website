/**
 * SQLite database connection & query helpers.
 *
 * Uses better-sqlite3 for synchronous, server-side access.
 * The database file lives at <project-root>/data/phishing.db.
 */

import Database from "better-sqlite3";
import path from "path";
import fs from "fs";

// ── Singleton connection ────────────────────────────────────────────
const DB_DIR = path.join(process.cwd(), "data");
const DB_PATH = path.join(DB_DIR, "phishing.db");

// Ensure the data directory exists
if (!fs.existsSync(DB_DIR)) {
  fs.mkdirSync(DB_DIR, { recursive: true });
}

let _db: Database.Database | null = null;

/**
 * Return (or create) the singleton database connection.
 */
export function getDb(): Database.Database {
  if (!_db) {
    _db = new Database(DB_PATH);
    _db.pragma("journal_mode = WAL"); // better concurrent reads
    _db.pragma("foreign_keys = ON");
    initSchema(_db);
  }
  return _db;
}

/**
 * Run the schema.sql migration the first time.
 */
function initSchema(db: Database.Database): void {
  const schemaPath = path.join(process.cwd(), "lib", "schema.sql");
  if (fs.existsSync(schemaPath)) {
    const sql = fs.readFileSync(schemaPath, "utf-8");
    db.exec(sql);
  }
}

// ── Typed helpers ───────────────────────────────────────────────────

export interface PostestRow {
  id?: number;
  nombre: string;
  carrera?: string;
  correo?: string;
  p1_conocimiento_phishing?: number;
  p2_identificar_tipos?: number;
  p3_reconocer_correos?: number;
  p4_verificar_enlaces?: number;
  p5_proteger_cuentas?: number;
  p6_ingenieria_social?: number;
  p7_smishing_vishing?: number;
  p8_utilidad_plataforma?: number;
  comentarios?: string;
  fecha?: string;
}

/**
 * Insert a postest response and return the new row id.
 */
export function insertPostest(data: Omit<PostestRow, "id" | "fecha">): number {
  const db = getDb();

  const stmt = db.prepare(`
    INSERT INTO respuestas_postest (
      nombre, carrera, correo,
      p1_conocimiento_phishing, p2_identificar_tipos,
      p3_reconocer_correos,     p4_verificar_enlaces,
      p5_proteger_cuentas,      p6_ingenieria_social,
      p7_smishing_vishing,      p8_utilidad_plataforma,
      comentarios
    ) VALUES (
      @nombre, @carrera, @correo,
      @p1_conocimiento_phishing, @p2_identificar_tipos,
      @p3_reconocer_correos,     @p4_verificar_enlaces,
      @p5_proteger_cuentas,      @p6_ingenieria_social,
      @p7_smishing_vishing,      @p8_utilidad_plataforma,
      @comentarios
    )
  `);

  const info = stmt.run({
    nombre: data.nombre,
    carrera: data.carrera ?? null,
    correo: data.correo ?? null,
    p1_conocimiento_phishing: data.p1_conocimiento_phishing ?? null,
    p2_identificar_tipos: data.p2_identificar_tipos ?? null,
    p3_reconocer_correos: data.p3_reconocer_correos ?? null,
    p4_verificar_enlaces: data.p4_verificar_enlaces ?? null,
    p5_proteger_cuentas: data.p5_proteger_cuentas ?? null,
    p6_ingenieria_social: data.p6_ingenieria_social ?? null,
    p7_smishing_vishing: data.p7_smishing_vishing ?? null,
    p8_utilidad_plataforma: data.p8_utilidad_plataforma ?? null,
    comentarios: data.comentarios ?? null,
  });

  return Number(info.lastInsertRowid);
}

/**
 * Retrieve all postest responses, newest first.
 */
export function getAllPostest(): PostestRow[] {
  const db = getDb();
  return db
    .prepare("SELECT * FROM respuestas_postest ORDER BY fecha DESC")
    .all() as PostestRow[];
}

/**
 * Get a single postest response by id.
 */
export function getPostestById(id: number): PostestRow | undefined {
  const db = getDb();
  return db
    .prepare("SELECT * FROM respuestas_postest WHERE id = ?")
    .get(id) as PostestRow | undefined;
}
