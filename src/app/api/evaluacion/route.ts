import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

interface RespuestaItem {
  pregunta_id: string;
  alternativa: string;
  es_correcta: boolean;
}

interface EvaluacionRequestBody {
  puntaje: number;
  puntaje_max: number;
  porcentaje: number;
  respuestas: RespuestaItem[];
}

export async function POST(request: Request) {
  try {
    const body: EvaluacionRequestBody = await request.json();

    const { puntaje, puntaje_max, porcentaje, respuestas } = body;

    // 1. Guardar la evaluación principal (anónima por diseño de base de datos)
    const { data: evaluacion, error: dbError } = await supabase
      .from('evaluaciones')
      .insert([
        {
          puntaje,
          puntaje_max,
          porcentaje,
        },
      ])
      .select('id')
      .single();

    if (dbError) {
      console.error('Error al guardar evaluación:', dbError);
      return NextResponse.json(
        { error: dbError.message || 'Error al registrar la evaluación en la base de datos' },
        { status: 500 }
      );
    }

    const evaluacionId = evaluacion.id;

    // 2. Si hay respuestas detalladas, guardarlas en lote
    if (respuestas && respuestas.length > 0) {
      const respuestasFormatted = respuestas.map((r) => ({
        evaluacion_id: evaluacionId,
        pregunta_id: r.pregunta_id,
        alternativa: r.alternativa,
        es_correcta: r.es_correcta,
      }));

      const { error: respuestasError } = await supabase
        .from('respuestas')
        .insert(respuestasFormatted);

      if (respuestasError) {
        console.error('Error al guardar detalle de respuestas:', respuestasError);
        // Aunque falle el detalle, el registro principal ya se guardó. 
        // Reportamos advertencia pero no fallamos toda la petición si ya avanzó.
      }
    }

    return NextResponse.json({ success: true, id: evaluacionId }, { status: 201 });
  } catch (error: unknown) {
    console.error('API Error:', error);
    const msg = error instanceof Error ? error.message : 'Error interno del servidor';
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}

export async function GET() {
  try {
    // Retorna estadísticas sencillas agregadas directo de PostgreSQL
    const { data: stats, error: statsError } = await supabase
      .from('evaluaciones')
      .select('puntaje, porcentaje');

    if (statsError) {
      return NextResponse.json({ error: statsError.message }, { status: 500 });
    }

    const total = stats.length;
    if (total === 0) {
      return NextResponse.json({
        totalEvaluaciones: 0,
        promedioPuntaje: 0,
        promedioPorcentaje: 0,
      });
    }

    const sumaPuntajes = stats.reduce((acc, curr) => acc + curr.puntaje, 0);
    const sumaPorcentajes = stats.reduce((acc, curr) => acc + Number(curr.porcentaje), 0);

    return NextResponse.json({
      totalEvaluaciones: total,
      promedioPuntaje: Number((sumaPuntajes / total).toFixed(2)),
      promedioPorcentaje: Number((sumaPorcentajes / total).toFixed(2)),
    });
  } catch (error) {
    console.error('GET API Error:', error);
    return NextResponse.json({ error: 'Error interno del servidor' }, { status: 500 });
  }
}
