import React, { useState, useEffect } from 'react';
import CursoSelector from './components/CursoSelector';
import TemaVisor from './components/TemaVisor';

// Importamos los datos de cada curso
import { bachillerato1Data } from './data/bachillerato1';
import { bachillerato2Data } from './data/bachillerato2';

export default function App() {
  const [cursoSeleccionado, setCursoSeleccionado] = useState(null);
  const [temaSeleccionado, setTemaSeleccionado] = useState(null);

  // CONTROL DEL BOTÓN "ATRÁS" DEL NAVEGADOR Y MÓVIL
  useEffect(() => {
    const alCambiarHistorial = (event) => {
      if (event.state) {
        setCursoSeleccionado(event.state.curso);
        setTemaSeleccionado(event.state.tema);
      } else {
        setCursoSeleccionado(null);
        setTemaSeleccionado(null);
      }
    };

    window.addEventListener('popstate', alCambiarHistorial);
    return () => window.removeEventListener('popstate', alCambiarHistorial);
  }, []);

  // Funciones de navegación con registro en el historial
  const seleccionarCurso = (cursoId) => {
    setCursoSeleccionado(cursoId);
    setTemaSeleccionado(null);
    window.history.pushState({ curso: cursoId, tema: null }, '');
  };

  const seleccionarTema = (temaObj) => {
    setTemaSeleccionado(temaObj);
    window.history.pushState({ curso: cursoSeleccionado, tema: temaObj }, '');
  };

  const irAtras = () => {
    window.history.back();
  };

  const obtenerDatosCurso = () => {
    switch (cursoSeleccionado) {
      case '1': return bachillerato1Data;
      case '2': return bachillerato2Data;
      case '3': return [];
      default: return [];
    }
  };

  const datosCursoActual = obtenerDatosCurso();

  const nombresCursos = {
    '1': '1.º de Bachillerato',
    '2': '2.º de Bachillerato',
    '3': '3.º de Bachillerato'
  };

  // VISTA 1: Selector de Nivel (Inicio)
  if (!cursoSeleccionado) {
    return <CursoSelector alSeleccionarCurso={seleccionarCurso} />;
  }

  // VISTA 3: Lección Teórica + Quiz Interactivo
  if (temaSeleccionado) {
    return (
      <TemaVisor 
        tema={temaSeleccionado} 
        alRegresar={irAtras} 
      />
    );
  }

  // VISTA 2: Plan Curricular del Curso (Diseño Claro, Vivo y Llamativo)
  return (
    <div className="min-h-screen bg-slate-100 text-slate-800 font-sans flex flex-col justify-between selection:bg-blue-500 selection:text-white">
      <div>
        {/* BARRA SUPERIOR ILUMINADA */}
        <header className="bg-white border-b border-slate-200/80 shadow-xs sticky top-0 z-50">
          <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
            <button 
              onClick={irAtras} 
              className="inline-flex items-center gap-2 text-xs font-bold text-slate-600 hover:text-blue-600 bg-slate-100 hover:bg-blue-50 px-4 py-2 rounded-xl border border-slate-200 transition cursor-pointer"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Regresar al Menú
            </button>

            <span className="text-xs font-extrabold text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-100 hidden sm:inline-block">
              {nombresCursos[cursoSeleccionado]}
            </span>
          </div>
        </header>

        {/* CONTENIDO PRINCIPAL */}
        <main className="max-w-5xl mx-auto px-6 py-10">
          
          {/* ENCABEZADO CON DEGRADADO */}
          <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-sky-500 rounded-3xl p-8 sm:p-10 text-white shadow-xl shadow-blue-500/10 mb-10 relative overflow-hidden">
            <div className="relative z-10 space-y-2">
              <span className="inline-block px-3 py-1 rounded-full bg-white/20 text-white text-xs font-black uppercase tracking-wider backdrop-blur-md">
                📚 Unidades de Estudio
              </span>
              <h1 className="text-3xl sm:text-4xl font-black">
                {nombresCursos[cursoSeleccionado]}
              </h1>
              <p className="text-blue-100 text-sm max-w-xl font-medium">
                Selecciona la lección para revisar la explicación teórica y realizar la prueba evaluativa.
              </p>
            </div>

            {/* Círculo decorativo transparente */}
            <div className="absolute -right-10 -bottom-10 w-48 h-48 bg-white/10 rounded-full blur-2xl pointer-events-none"></div>
          </div>

          {/* LISTA DE TEMAS */}
          {datosCursoActual.length === 0 ? (
            <div className="bg-white p-12 rounded-3xl border border-slate-200 text-center shadow-xs space-y-3">
              <span className="text-4xl inline-block mb-2">⚙️</span>
              <h3 className="text-lg font-bold text-slate-800">Unidad en Construcción</h3>
              <p className="text-slate-500 text-xs max-w-sm mx-auto">
                Estamos redactando las lecciones y reactivos para este curso.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-5">
              {datosCursoActual.map((tema, index) => (
                <div 
                  key={tema.id}
                  className="group bg-white hover:bg-slate-50/80 p-6 sm:p-7 rounded-2xl border border-slate-200 hover:border-blue-400 transition-all duration-300 flex flex-col sm:flex-row justify-between sm:items-center gap-6 shadow-xs hover:shadow-xl hover:shadow-blue-500/5"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-blue-500 to-cyan-400 font-black text-white flex items-center justify-center text-md shadow-md shadow-blue-500/20 shrink-0 group-hover:scale-110 transition-transform">
                      0{index + 1}
                    </div>

                    <div className="space-y-1">
                      <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                        {tema.nombre}
                      </h3>
                      <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500">
                        <span className="inline-flex items-center gap-1 font-medium text-slate-600">
                          📖 Módulo Teórico
                        </span>
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300"></span>
                        <span className="inline-flex items-center gap-1 text-emerald-700 font-bold bg-emerald-50 px-2.5 py-0.5 rounded-md border border-emerald-200">
                          ⚡ {tema.preguntas.length} Reactivos
                        </span>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => seleccionarTema(tema)}
                    className="w-full sm:w-auto px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded-xl transition-all duration-200 cursor-pointer flex items-center justify-center gap-2 shadow-lg shadow-blue-500/20 group-hover:scale-102"
                  >
                    <span>Estudiar Tema</span>
                    <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>
                </div>
              ))}
            </div>
          )}
        </main>
      </div>

      <footer className="border-t border-slate-200 bg-white py-6 text-center text-xs text-slate-500">
        <p>© 2026 AulaVirtual.Math • Sistema de Evaluaciones Continuas</p>
      </footer>
    </div>
  );
}