import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';
import path from 'path';

// Cargar variables de entorno del archivo .env.local
dotenv.config({ path: path.resolve(process.cwd(), '.env.local') });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  console.error('Error: Faltan variables de entorno de Supabase en .env.local');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseAnonKey);

const PREGUNTAS_INFO = [
  { id: 'p1', correcta: 'B', opciones: ['A', 'B', 'C', 'D'] },
  { id: 'p2', correcta: 'D', opciones: ['A', 'B', 'C', 'D'] },
  { id: 'p3', correcta: 'B', opciones: ['A', 'B', 'C', 'D'] },
  { id: 'p4', correcta: 'B', opciones: ['A', 'B', 'C', 'D'] },
  { id: 'p5', correcta: 'A', opciones: ['A', 'B', 'C', 'D'] },
  { id: 'p6', correcta: 'B', opciones: ['A', 'B', 'C', 'D'] },
  { id: 'p7', correcta: 'B', opciones: ['A', 'B', 'C', 'D'] },
  { id: 'p8', correcta: 'C', opciones: ['A', 'B', 'C', 'D'] },
];

const NOMBRES = [
  'Juan Carlos', 'Maria Fernanda', 'Luis Alberto', 'Ana Cecilia', 'Jose Luis',
  'Claudia Patricia', 'Carlos Eduardo', 'Diana Marcela', 'Jorge Ignacio', 'Laura Vanessa',
  'Miguel Angel', 'Gabriela Sofia', 'Pedro Antonio', 'Andrea Carolina', 'David Alejandro',
  'Sofia Elizabeth', 'Manuel Francisco', 'Camila Alejandra', 'Victor Hugo', 'Valeria Nicole',
  'Christian Omar', 'Natalia Belen', 'Raul Ernesto', 'Lucia Fernanda', 'Daniel Felipe',
  'Daniela Alexandra', 'Oscar Mauricio', 'Isabella Maria', 'Hector Fabio', 'Juliana Gomez',
  'Kevin Alexis', 'Paola Andrea', 'Diego Fernando', 'Monica Patricia', 'Santiago Jose',
  'Alejandra Maria', 'Andres Felipe', 'Silvia Elena', 'Javier Humberto', 'Tatiana Lizeth',
  'Ricardo Andres', 'Adriana Maria', 'Felipe Antonio', 'Camila Andrea', 'Gustavo Adolfo',
  'Patricia Elena', 'Fernando Jose', 'Angela Maria', 'Mauricio Andres', 'Carolina Gomez',
  'Roberto Carlos', 'Sandra Milena', 'Edgar Ramiro', 'Liliana Patricia', 'Guillermo Leon',
  'Clara Ines', 'Alvaro Jose', 'Martha Cecilia', 'Fabio Nelson', 'Gloria Isabel',
  'Ivan Dario', 'Beatriz Elena', 'Cesar Augusto', 'Elizabeth Gomez', 'Ruben Dario'
];

const APELLIDOS = [
  'Perez', 'Gomez', 'Rodriguez', 'Sanchez', 'Martinez', 'Garcia', 'Lopez', 'Diaz', 'Ramirez', 'Torres',
  'Gonzales', 'Flores', 'Quispe', 'Mamani', 'Ramos', 'Chavez', 'Vargas', 'Romero', 'Guzman', 'Benitez',
  'Ruiz', 'Mendoza', 'Aguilar', 'Silva', 'Medina', 'Ortiz', 'Castro', 'Munoz', 'Herrera', 'Gutierrez',
  'Rios', 'Salarzar', 'Acosta', 'Valenzuela', 'Miranda', 'Suarez', 'Ochoa', 'Villanueva', 'Cardenas', 'Rojas'
];

function generarEmail(nombre: string, apellido: string): string {
  const limpio = `${nombre.split(' ')[0].toLowerCase()}.${apellido.toLowerCase().replace(/\s+/g, '')}`;
  // Dominio de la Universidad Nacional Federico Villarreal
  return `${limpio}@unfv.edu.pe`;
}

function obtenerAlternativaAleatoria(excluir: string): string {
  const filtradas = ['A', 'B', 'C', 'D'].filter(a => a !== excluir);
  return filtradas[Math.floor(Math.random() * filtradas.length)];
}

async function sembrarDatos() {
  console.log('Iniciando carga de seed de 65 estudiantes...');
  
  const estudiantesSembrados = [];

  for (let i = 0; i < 65; i++) {
    const nombreVal = NOMBRES[i % NOMBRES.length];
    const apellidoVal = APELLIDOS[Math.floor(Math.random() * APELLIDOS.length)];
    const nombreCompleto = `${nombreVal} ${apellidoVal}`;
    const email = generarEmail(nombreVal, apellidoVal);

    // Definir un nivel de desempeño aleatorio para este estudiante
    // 0: principiante (2-4 correctas), 1: intermedio (5-6 correctas), 2: avanzado (7-8 correctas)
    const tier = Math.random() < 0.25 ? 0 : Math.random() < 0.55 ? 1 : 2;
    let correctasMax = 0;
    if (tier === 0) correctasMax = 2 + Math.floor(Math.random() * 3); // 2, 3 o 4
    else if (tier === 1) correctasMax = 5 + Math.floor(Math.random() * 2); // 5 o 6
    else correctasMax = 7 + Math.floor(Math.random() * 2); // 7 o 8

    // Decidir cuáles preguntas serán correctas
    const indicesPreguntas = [0, 1, 2, 3, 4, 5, 6, 7].sort(() => Math.random() - 0.5);
    const correctasIndexSet = new Set(indicesPreguntas.slice(0, correctasMax));

    const respuestasEstudiante = [];
    let aciertos = 0;

    for (let j = 0; j < PREGUNTAS_INFO.length; j++) {
      const p = PREGUNTAS_INFO[j];
      const debeSerCorrecta = correctasIndexSet.has(j);
      
      let alternativaElegida = p.correcta;
      if (!debeSerCorrecta) {
        alternativaElegida = obtenerAlternativaAleatoria(p.correcta);
      } else {
        aciertos++;
      }

      respuestasEstudiante.push({
        pregunta_id: p.id,
        alternativa: alternativaElegida,
        es_correcta: debeSerCorrecta
      });
    }

    const porcentaje = Math.round((aciertos / 8) * 100);

    estudiantesSembrados.push({
      nombre: nombreCompleto,
      email: email,
      puntaje: aciertos,
      puntaje_max: 8,
      porcentaje,
      respuestas: respuestasEstudiante
    });
  }

  // Insertar cada uno en Supabase
  let exitos = 0;
  for (const estudiante of estudiantesSembrados) {
    const { data: evalData, error: evalError } = await supabase
      .from('evaluaciones')
      .insert([
        {
          nombre: estudiante.nombre,
          email: estudiante.email,
          puntaje: estudiante.puntaje,
          puntaje_max: estudiante.puntaje_max,
          porcentaje: estudiante.porcentaje,
        }
      ])
      .select('id')
      .single();

    if (evalError) {
      console.error(`Error al insertar evaluación para ${estudiante.nombre}:`, evalError.message);
      continue;
    }

    const evalId = evalData.id;
    const respuestasFormateadas = estudiante.respuestas.map(r => ({
      evaluacion_id: evalId,
      pregunta_id: r.pregunta_id,
      alternativa: r.alternativa,
      es_correcta: r.es_correcta
    }));

    const { error: respError } = await supabase
      .from('respuestas')
      .insert(respuestasFormateadas);

    if (respError) {
      console.error(`Error al insertar respuestas para ${estudiante.nombre}:`, respError.message);
    } else {
      exitos++;
    }
  }

  console.log(`\nProceso terminado. Se sembraron exitosamente ${exitos} de 65 estudiantes.`);
}

sembrarDatos().catch(err => {
  console.error('Error general durante la siembra de datos:', err);
});
