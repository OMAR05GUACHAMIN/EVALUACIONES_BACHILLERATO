import React, { useState } from 'react';
import MathRenderer from './MathRenderer';
import FormattedSolution from './FormattedSolution';

export default function TemaVisor({ tema, alRegresar }) {
  // Estados para el alumno y la lección
  const [nombreEstudiante, setNombreEstudiante] = useState('');
  const [cursoEstudiante, setCursoEstudiante] = useState('1.º de Bachillerato');
  const [pantallaActual, setPantallaActual] = useState('registro'); // 'registro' | 'leccion' | 'resultados'

  const [respuestas, setRespuestas] = useState({});
  const [notaFinal, setNotaFinal] = useState(0);

  // Manejador del formulario de registro
  const alIniciarLeccion = (e) => {
    e.preventDefault();
    if (nombreEstudiante.trim() !== '') {
      setPantallaActual('leccion');
    }
  };

  const seleccionarOpcion = (preguntaIdx, opcionIdx) => {
    if (pantallaActual === 'resultados') return;
    setRespuestas({ ...respuestas, [preguntaIdx]: opcionIdx });
  };

  const evaluarQuiz = () => {
    let aciertos = 0;
    tema.preguntas.forEach((pregunta, idx) => {
      const opcionSeleccionada = respuestas[idx];
      if (opcionSeleccionada !== undefined && pregunta.opciones[opcionSeleccionada].esCorrecta) {
        aciertos++;
      }
    });
    const nota = (aciertos / tema.preguntas.length) * 10;
    setNotaFinal(nota.toFixed(2));
    setPantallaActual('resultados');
  };

  const reiniciarQuiz = () => {
    setRespuestas({});
    setNotaFinal(0);
    setPantallaActual('registro');
    setNombreEstudiante('');
  };

  // ---------------------------------------------------------------------------
  // PANTALLA 1: FORMULARIO DE REGISTRO DEL ESTUDIANTE
  // ---------------------------------------------------------------------------
  if (pantallaActual === 'registro') {
    return (
      <div className="min-h-screen bg-slate-100 font-sans flex flex-col justify-between selection:bg-blue-500 selection:text-white">
        {/* Barra Superior */}
        <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
          <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
            <button 
              onClick={alRegresar} 
              className="inline-flex items-center gap-2 text-xs font-bold text-slate-600 hover:text-blue-600 bg-slate-100 hover:bg-blue-50 px-4 py-2 rounded-xl border border-slate-200 transition cursor-pointer"
            >
              ⬅️ Cambiar de Tema
            </button>
            <span className="text-xs font-extrabold text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
              {tema.nombre}
            </span>
          </div>
        </header>

        {/* Tarjeta de Registro */}
        <main className="max-w-md mx-auto px-6 py-12 w-full my-auto">
          <div className="bg-white rounded-3xl border border-slate-200 shadow-xl p-8 space-y-6">
            <div className="text-center space-y-2">
              <div className="w-14 h-14 bg-gradient-to-tr from-blue-600 to-cyan-500 rounded-2xl mx-auto flex items-center justify-center text-2xl text-white shadow-lg shadow-blue-500/20">
                📝
              </div>
              <h2 className="text-2xl font-black text-slate-900">Ficha del Estudiante</h2>
              <p className="text-slate-500 text-xs">
                Ingresa tus datos para iniciar la prueba diagnóstica de <strong>{tema.nombre}</strong>.
              </p>
            </div>

            <form onSubmit={alIniciarLeccion} className="space-y-4">
              <div>
                <label className="block text-xs font-black text-slate-700 uppercase tracking-wider mb-2">
                  Nombres y Apellidos *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ej. Juan Pérez"
                  value={nombreEstudiante}
                  onChange={(e) => setNombreEstudiante(e.target.value)}
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 text-sm focus:outline-none focus:border-blue-500 focus:bg-white transition"
                />
              </div>

              <div>
                <label className="block text-xs font-black text-slate-700 uppercase tracking-wider mb-2">
                  Curso / Paralelo *
                </label>
                <select
                  value={cursoEstudiante}
                  onChange={(e) => setCursoEstudiante(e.target.value)}
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 text-sm focus:outline-none focus:border-blue-500 focus:bg-white transition"
                >
                  <option value="1.º de Bachillerato Agropecuaria">1.º de Bachillerato "Agropecuaria"</option>
                  <option value="1.º de Bachillerato Gestión Financiera contable">1.º de Bachillerato "Gestión Financiera contable"</option>
                  <option value="1.º de Bachillerato Mecánica">1.º de Bachillerato "Mecánica"</option>
                  <option value="2.º de Bachillerato Agropecuaria">2.º de Bachillerato "Agropecuaria"</option>
                  <option value="2.º de Bachillerato Gestión Financiera contable">2.º de Bachillerato "Gestión Financiera contable"</option>
                  <option value="2.º de Bachillerato Mecánica">2.º de Bachillerato "Mecánica"</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-black text-xs uppercase tracking-wider rounded-xl transition shadow-lg shadow-blue-500/20 cursor-pointer"
              >
                Comenzar Evaluación 🚀
              </button>
            </form>
          </div>
        </main>

        <footer className="border-t border-slate-200 bg-white py-4 text-center text-xs text-slate-400">
          AulaVirtual.Math • Evaluación Diagnóstica
        </footer>
      </div>
    );
  }

  // ---------------------------------------------------------------------------
  // PANTALLA 2 Y 3: LECCIÓN INTERACTIVA Y RESULTADOS
  // ---------------------------------------------------------------------------
  return (
    <div className="min-h-screen bg-slate-100 font-sans text-slate-800 selection:bg-blue-500 selection:text-white flex flex-col justify-between">
      <div>
        {/* BARRA SUPERIOR CON DATOS DEL ESTUDIANTE */}
        <header className="bg-white border-b border-slate-200 sticky top-0 z-50 shadow-xs">
          <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
            <button 
              onClick={alRegresar} 
              className="inline-flex items-center gap-2 text-xs font-bold text-slate-600 hover:text-blue-600 bg-slate-100 hover:bg-blue-50 px-4 py-2 rounded-xl border border-slate-200 transition cursor-pointer"
            >
              ⬅️ Salir
            </button>

            {/* Ficha rápida en el header */}
            <div className="flex items-center gap-3">
              <div className="text-right hidden sm:block">
                <span className="block text-xs font-black text-slate-900">{nombreEstudiante}</span>
                <span className="block text-[10px] font-bold text-blue-600 uppercase">{cursoEstudiante}</span>
              </div>
              <div className="w-9 h-9 rounded-full bg-blue-600 text-white font-black text-xs flex items-center justify-center uppercase shadow-md shadow-blue-500/20">
                {nombreEstudiante.charAt(0)}
              </div>
            </div>
          </div>
        </header>

        <main className="max-w-4xl mx-auto px-6 py-10 space-y-8">
          
          {/* BANNER DE RESULTADO PERSONALIZADO (Aparece al terminar) */}
          {pantallaActual === 'resultados' && (
            <div className="bg-gradient-to-r from-emerald-600 to-teal-500 rounded-3xl p-8 text-white shadow-xl shadow-emerald-500/20 animate-fadeIn space-y-4">
              <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4 border-b border-white/20 pb-6">
                <div>
                  <span className="inline-block px-3 py-1 rounded-full bg-white/20 text-white text-xs font-black uppercase tracking-wider mb-2">
                    🎓 Reporte de Calificación
                  </span>
                  <h2 className="text-2xl font-black">{nombreEstudiante}</h2>
                  <p className="text-emerald-100 text-xs font-medium">{cursoEstudiante} • {tema.nombre}</p>
                </div>

                <div className="bg-white text-slate-900 rounded-2xl p-4 text-center sm:text-right shadow-lg shrink-0">
                  <span className="text-[10px] font-black text-slate-400 uppercase block">Nota Obtenida</span>
                  <span className="text-4xl font-black text-emerald-600">{notaFinal} <span className="text-lg text-slate-400">/ 10</span></span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-2">
                <p className="text-xs text-emerald-100">
                  💡 Abajo puedes revisar el solucionario paso a paso de cada ejercicio.
                </p>
                <button
                  onClick={reiniciarQuiz}
                  className="px-5 py-2.5 bg-white hover:bg-emerald-50 text-emerald-800 text-xs font-black rounded-xl transition cursor-pointer shadow-sm shrink-0"
                >
                  Realizar otra prueba
                </button>
              </div>
            </div>
          )}

          {/* TEORÍA CONCEPTO */}
          <section className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-xs space-y-4">
            <h2 className="text-md font-extrabold text-slate-900 flex items-center gap-2">
              📖 Recordatorio Conceptual
            </h2>
            <div className="text-slate-600 leading-relaxed bg-slate-50 p-5 rounded-2xl border border-slate-150 text-sm">
              {tema.concepto.split('$').map((parte, idx) => (
                idx % 2 !== 0 ? <MathRenderer key={idx} formula={parte} /> : <span key={idx}>{parte}</span>
              ))}
            </div>
          </section>

          {/* EVALUACIÓN */}
          <section className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-xs space-y-8">
            <div className="border-b border-slate-150 pb-4">
              <h2 className="text-xl font-black text-slate-900">📝 Reactivos Diagnósticos</h2>
              <p className="text-xs text-slate-500 mt-0.5">Resuelve las preguntas seleccionando la alternativa correcta.</p>
            </div>

            <div className="space-y-10">
              {tema.preguntas.map((pregunta, qIdx) => (
                <div key={pregunta.id} className="p-6 border border-slate-200 rounded-2xl bg-slate-50/50 space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-black text-blue-600 uppercase bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                      Pregunta {qIdx + 1}
                    </span>
                    <span className="text-xs text-slate-400 font-bold">{pregunta.tema}</span>
                  </div>

                  <p className="font-bold text-slate-800 text-sm">{pregunta.enunciado}</p>

                  <div className="bg-white p-6 rounded-xl border border-slate-200 flex justify-center items-center my-4 overflow-x-auto min-h-[90px]">
                    <MathRenderer formula={pregunta.formula} block={true} />
                  </div>

                  {/* Opciones de respuesta */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {pregunta.opciones.map((opcion, oIdx) => {
                      const seleccionado = respuestas[qIdx] === oIdx;
                      let estiloBoton = "bg-white text-slate-700 border-slate-200 hover:bg-slate-100";

                      if (seleccionado) {
                        estiloBoton = "bg-blue-600 text-white border-blue-600 shadow-md shadow-blue-500/20";
                      }

                      if (pantallaActual === 'resultados') {
                        if (opcion.esCorrecta) {
                          estiloBoton = "bg-emerald-500 text-white border-emerald-500";
                        } else if (seleccionado && !opcion.esCorrecta) {
                          estiloBoton = "bg-red-500 text-white border-red-500";
                        } else {
                          estiloBoton = "bg-white text-slate-300 border-slate-100 opacity-50 cursor-not-allowed";
                        }
                      }

                      return (
                        <button
                          key={oIdx}
                          disabled={pantallaActual === 'resultados'}
                          onClick={() => seleccionarOpcion(qIdx, oIdx)}
                          className={`text-left p-4 rounded-xl text-sm font-semibold transition border cursor-pointer min-h-[55px] flex items-center justify-between gap-3 ${estiloBoton}`}
                        >
                          <span className="flex-1 overflow-x-auto">
                            <MathRenderer formula={opcion.texto} />
                          </span>
                        </button>
                      );
                    })}
                  </div>

                  {/* Solucionario paso a paso si ya terminó */}
                  {pantallaActual === 'resultados' && (
                    <div className="mt-6 p-5 bg-sky-50/60 border border-sky-100 rounded-xl space-y-3">
                      <h4 className="font-extrabold text-blue-950 text-xs uppercase tracking-wider flex items-center gap-2">
                        💡 Explicación del Profe:
                      </h4>
                      <FormattedSolution solucion={pregunta.solucion} />
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Botón de envío */}
            {pantallaActual === 'leccion' && (
              <div className="pt-6 border-t border-slate-200 text-center">
                <button
                  onClick={evaluarQuiz}
                  disabled={Object.keys(respuestas).length !== tema.preguntas.length}
                  className="px-8 py-4 bg-emerald-600 hover:bg-emerald-700 disabled:bg-slate-200 disabled:text-slate-400 text-white font-black rounded-xl transition shadow-lg shadow-emerald-600/20 disabled:cursor-not-allowed cursor-pointer text-xs uppercase tracking-wider"
                >
                  Finalizar y Entregar Evaluación 📥
                </button>
              </div>
            )}
          </section>
        </main>
      </div>

      <footer className="border-t border-slate-200 bg-white py-6 text-center text-xs text-slate-500">
        <p>© 2026 AulaVirtual.Math • Evaluación de {nombreEstudiante} ({cursoEstudiante})</p>
      </footer>
    </div>
  );
}