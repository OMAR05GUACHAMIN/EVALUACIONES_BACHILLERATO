import React, { useState } from 'react';
import MathRenderer from './MathRenderer';
import FormattedSolution from './FormattedSolution';

export default function TemaVisor({ tema, alRegresar }) {
  const [respuestas, setRespuestas] = useState({});
  const [quizTerminado, setQuizTerminado] = useState(false);
  const [notaFinal, setNotaFinal] = useState(0);

  const seleccionarOpcion = (preguntaIdx, opcionIdx) => {
    if (quizTerminado) return;
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
    setQuizTerminado(true);
  };

  const reiniciarQuiz = () => {
    setRespuestas({});
    setQuizTerminado(false);
    setNotaFinal(0);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <button onClick={alRegresar} className="flex items-center gap-2 text-xs font-black text-blue-600 hover:text-blue-800 mb-8 cursor-pointer uppercase tracking-wider">
        ⬅️ Salir de este Tema
      </button>

      <header className="mb-8 border-b border-slate-200 pb-5">
        <span className="text-xs text-blue-600 font-extrabold uppercase tracking-wider">Unidad de Estudio</span>
        <h1 className="text-3xl font-black text-slate-900 mt-1">{tema.nombre}</h1>
      </header>

      {/* Concepto Teórico */}
      <section className="bg-white p-6 rounded-2xl shadow-xs border border-slate-150 mb-10">
        <h2 className="text-md font-extrabold text-slate-900 mb-3 flex items-center gap-2">📖 Recordatorio Conceptual</h2>
        <p className="text-slate-600 leading-relaxed bg-slate-50/50 p-5 rounded-xl border border-slate-100 text-sm">
          {/* Renderizado de teoría con KaTeX dinámico inline */}
          {tema.concepto.split('$').map((parte, idx) => (
            idx % 2 !== 0 ? <MathRenderer key={idx} formula={parte} /> : <span key={idx}>{parte}</span>
          ))}
        </p>
      </section>

      {/* Evaluación */}
      <section className="bg-white p-6 sm:p-8 rounded-2xl shadow-xs border border-slate-150">
        <h2 className="text-xl font-black text-slate-950 mb-1">📝 Prueba Diagnóstica</h2>
        <p className="text-xs text-slate-400 mb-8">Simplifica las expresiones paso a paso utilizando las propiedades revisadas.</p>

        <div className="space-y-12">
          {tema.preguntas.map((pregunta, qIdx) => (
            <div key={pregunta.id} className="p-6 border border-slate-150 rounded-2xl bg-slate-50/30">
              <div className="flex justify-between items-center mb-4">
                <span className="text-xs font-black text-blue-600 uppercase bg-blue-50 px-3 py-1 rounded-full">
                  Pregunta {qIdx + 1}
                </span>
                <span className="text-xs text-slate-400 font-bold">{pregunta.tema}</span>
              </div>

              <p className="font-bold text-slate-800 text-sm mb-4">{pregunta.enunciado}</p>

              <div className="bg-white p-6 rounded-xl border border-slate-100 flex justify-center items-center my-6 overflow-x-auto min-h-[100px]">
                <MathRenderer formula={pregunta.formula} block={true} />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
                {pregunta.opciones.map((opcion, oIdx) => {
                  const seleccionado = respuestas[qIdx] === oIdx;
                  let estiloBoton = "bg-white text-slate-700 border-slate-200 hover:bg-slate-50";

                  if (seleccionado) estiloBoton = "bg-blue-600 text-white border-blue-600 shadow-sm";

                  if (quizTerminado) {
                    if (opcion.esCorrecta) {
                      estiloBoton = "bg-emerald-500 text-white border-emerald-500";
                    } else if (seleccionado && !opcion.esCorrecta) {
                      estiloBoton = "bg-red-500 text-white border-red-500";
                    } else {
                      estiloBoton = "bg-white text-slate-300 border-slate-100 opacity-60 cursor-not-allowed";
                    }
                  }

                  return (
                    <button
                      key={oIdx}
                      disabled={quizTerminado}
                      onClick={() => seleccionarOpcion(qIdx, oIdx)}
                      className={`text-left p-4 rounded-xl text-sm font-semibold transition border cursor-pointer min-h-[60px] flex items-center justify-between gap-3 ${estiloBoton}`}
                    >
                      <span className="flex-1 overflow-x-auto">
                        <MathRenderer formula={opcion.texto} />
                      </span>
                    </button>
                  );
                })}
              </div>

              {quizTerminado && (
                <div className="mt-6 p-6 bg-sky-50/40 border border-sky-100 rounded-xl animate-fadeIn">
                  <h4 className="font-extrabold text-blue-950 text-xs uppercase tracking-wider mb-4 flex items-center gap-2">
                    💡 Explicación del Profe:
                  </h4>
                  <FormattedSolution solucion={pregunta.solucion} />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Acciones */}
        <div className="mt-12 pt-8 border-t border-slate-200 text-center">
          {!quizTerminado ? (
            <button
              onClick={evaluarQuiz}
              disabled={Object.keys(respuestas).length !== tema.preguntas.length}
              className="px-8 py-4 bg-sky-400 hover:bg-sky-500 disabled:bg-slate-100 disabled:text-slate-400 text-white font-black rounded-xl transition shadow-lg shadow-sky-300/20 disabled:cursor-not-allowed cursor-pointer text-sm"
            >
              Terminar y Evaluar
            </button>
          ) : (
            <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-8 inline-block w-full max-w-lg">
              <span className="text-xs text-emerald-800 font-black uppercase tracking-wider">Tu Calificación Final</span>
              <div className="text-4xl font-black text-emerald-700 my-2">Nota: {notaFinal} / 10.00</div>
              <button onClick={reiniciarQuiz} className="px-6 py-2.5 bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs rounded-lg transition cursor-pointer">
                Reintentar Prueba
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}