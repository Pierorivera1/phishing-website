/**
 * API Route — POST / GET  /api/evaluacion
 *
 * POST: Guarda una respuesta de postest en SQLite.
 * GET:  Devuelve todas las respuestas almacenadas.
 */

import { NextRequest, NextResponse } from "next/server";
import { insertPostest, getAllPostest, type PostestRow } from "@/lib/db";

/* ── POST — Guardar respuesta ──────────────────────────────────────── */
export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as Partial<PostestRow>;

    // Validate required field
    if (!body.nombre || typeof body.nombre !== "string" || body.nombre.trim() === "") {
      return NextResponse.json(
        { error: "El campo 'nombre' es obligatorio." },
        { status: 400 }
      );
    }

    const id = insertPostest({
      nombre: body.nombre.trim(),
      carrera: body.carrera?.trim(),
      correo: body.correo?.trim(),
      p1_conocimiento_phishing: body.p1_conocimiento_phishing,
      p2_identificar_tipos: body.p2_identificar_tipos,
      p3_reconocer_correos: body.p3_reconocer_correos,
      p4_verificar_enlaces: body.p4_verificar_enlaces,
      p5_proteger_cuentas: body.p5_proteger_cuentas,
      p6_ingenieria_social: body.p6_ingenieria_social,
      p7_smishing_vishing: body.p7_smishing_vishing,
      p8_utilidad_plataforma: body.p8_utilidad_plataforma,
      comentarios: body.comentarios?.trim(),
    });

    return NextResponse.json(
      { ok: true, id, message: "Respuesta guardada correctamente." },
      { status: 201 }
    );
  } catch (error) {
    console.error("[POST /api/evaluacion]", error);
    return NextResponse.json(
      { error: "Error interno al guardar la respuesta." },
      { status: 500 }
    );
  }
}

/* ── GET — Listar respuestas ───────────────────────────────────────── */
export async function GET() {
  try {
    const rows = getAllPostest();
    return NextResponse.json({ ok: true, count: rows.length, data: rows });
  } catch (error) {
    console.error("[GET /api/evaluacion]", error);
    return NextResponse.json(
      { error: "Error interno al obtener las respuestas." },
      { status: 500 }
    );
  }
}
