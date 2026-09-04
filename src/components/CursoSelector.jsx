import React from 'react';

export default function CursoSelector({ alSeleccionarCurso }) {
  const cursos = [
    { 
      id: '1', 
      nivel: '1.º', 
      titulo: 'Primero de Bachillerato', 
      subtitulo: 'Álgebra y Fundamentos',
      desc: 'Potenciación, radicales, expresiones algebraicas, ecuaciones lineales y física clásica.', 
      temasCount: '12 Temas',
      icono: '📐',
      badge: 'Disponible',
      headerBg: 'bg-gradient-to-r from-blue-600 to-cyan-500',
      badgeColor: 'bg-blue-50 text-blue-600 border-blue-200',
      btnBg: 'bg-blue-600 hover:bg-blue-700'
    },
    { 
      id: '2', 
      nivel: '2.º', 
      titulo: 'Segundo de Bachillerato', 
      subtitulo: 'Geometría y Funciones',
      desc: 'Ecuaciones cuadráticas, función parabólica, trigonometría, vectores y geometría analítica.', 
      temasCount: '10 Temas',
      icono: '📈',
      badge: 'Disponible',
      headerBg: 'bg-gradient-to-r from-indigo-600 to-purple-600',
      badgeColor: 'bg-indigo-50 text-indigo-600 border-indigo-200',
      btnBg: 'bg-indigo-600 hover:bg-indigo-700'
    },
    { 
      id: '3', 
      nivel: '3.º', 
      titulo: 'Tercero de Bachillerato', 
      subtitulo: 'Cálculo Superior',
      desc: 'Límites, derivadas, integrales, cálculo diferencial y preparación universitaria.', 
      temasCount: '8 Temas',
      icono: '🚀',
      badge: 'Próximamente',
      headerBg: 'bg-gradient-to-r from-slate-600 to-slate-800',
      badgeColor: 'bg-slate-100 text-slate-500 border-slate-200',
      btnBg: 'bg-slate-400 cursor-not-allowed'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-blue-500 selection:text-white flex flex-col justify-between">
      
      {/* NAVBAR */}
      <nav className="bg-white border-b border-slate-200 sticky top-0 z-50 shadow-xs">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-blue-600 to-cyan-500 flex items-center justify-center text-white text-xl font-black shadow-md shadow-blue-500/20">
              ∑
            </div>
            <div>
              <span className="font-extrabold text-lg text-slate-900 tracking-tight">
                AulaVirtual<span className="text-blue-600">.Math</span>
              </span>
              <span className="block text-[10px] text-slate-400 font-bold uppercase tracking-widest -mt-1">
                Ecuador • Bachillerato
              </span>
              <span className="block text-[10px] text-slate-400 font-bold uppercase tracking-widest -mt-1">
                OMAR GUACHAMIN
              </span>
            </div>
          </div>

          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-extrabold">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            Plataforma Activa
          </span>
        </div>
      </nav>

      {/* HERO SECTION */}
      <div className="py-12 px-6 text-center max-w-4xl mx-auto space-y-4">
        <span className="inline-block px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-600 text-xs font-black uppercase tracking-wider">
          ⚡ Pruebas Diagnósticas & Soluciones Detalladas
        </span>
        <h1 className="text-4xl sm:text-5xl font-black text-slate-900 leading-tight">
          Aprende Matemáticas de Forma <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">Sencilla e Interactiva</span>
        </h1>
        <p className="text-slate-600 text-base max-w-2xl mx-auto">
          Selecciona tu curso para acceder al material didáctico, realizar tus evaluaciones y revisar las explicaciones paso a paso.
        </p>
      </div>

      {/* TARJETAS DE CURSOS */}
      <main className="max-w-6xl mx-auto px-6 pb-16 w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cursos.map((curso) => {
            const esDisponible = curso.badge === 'Disponible';

            return (
              <div
                key={curso.id}
                onClick={() => esDisponible && alSeleccionarCurso(curso.id)}
                className={`group bg-white rounded-3xl border border-slate-200 transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-sm ${
                  esDisponible 
                    ? 'cursor-pointer hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/10 hover:border-blue-400' 
                    : 'opacity-70 cursor-not-allowed'
                }`}
              >
                {/* Cabecera con degradado vivo */}
                <div className={`${curso.headerBg} p-6 text-white relative`}>
                  <div className="flex items-center justify-between">
                    <span className="text-3xl">{curso.icono}</span>
                    <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase border bg-white/90 text-slate-800`}>
                      {curso.badge}
                    </span>
                  </div>
                  <div className="mt-4">
                    <span className="text-xs uppercase tracking-widest opacity-80 font-bold">Nivel {curso.nivel}</span>
                    <h3 className="text-xl font-black mt-0.5">{curso.titulo}</h3>
                  </div>
                </div>

                {/* Cuerpo */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">{curso.subtitulo}</p>
                    <p className="text-slate-600 text-xs mt-2 leading-relaxed">{curso.desc}</p>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-500">{curso.temasCount}</span>
                    {esDisponible ? (
                      <span className="text-xs font-black text-blue-600 group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                        Ingresar ➔
                      </span>
                    ) : (
                      <span className="text-xs text-slate-400 italic">En desarrollo</span>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-slate-200 bg-white py-6 text-center text-xs text-slate-500">
        <p>© 2026 AulaVirtual.Math • Plataforma Educativa</p>
      </footer>
    </div>
  );
}