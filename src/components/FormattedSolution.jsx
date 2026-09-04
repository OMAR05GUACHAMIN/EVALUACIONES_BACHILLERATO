import React from 'react';
import MathRenderer from './MathRenderer';

export default function FormattedSolution({ solucion }) {
  if (!solucion) return null;

  const solucionLimpia = solucion.replace(/\\n/g, '\n');
  const parrafos = solucionLimpia.split('\n').filter(p => p.trim() !== '');

  const procesarParrafo = (texto) => {
    const partes = texto.split('$');
    return partes.map((parte, index) => {
      const esFormula = index % 2 !== 0;
      if (esFormula) {
        return (
          <span key={index} className="mx-1 inline-block align-middle py-0.5 px-1.5 bg-sky-50 rounded text-slate-900 border border-sky-100 font-mono">
            <MathRenderer formula={parte} block={false} />
          </span>
        );
      }
      return <span key={index}>{parte}</span>;
    });
  };

  return (
    <div className="space-y-4">
      {parrafos.map((parrafo, idx) => {
        const esResultadoFinal = parrafo.toLowerCase().startsWith('resultado final');
        return (
          <div 
            key={idx} 
            className={`p-4 rounded-xl border leading-relaxed text-sm ${
              esResultadoFinal 
                ? 'bg-emerald-50/80 border-emerald-200 text-emerald-950 font-semibold shadow-xs' 
                : 'bg-white border-slate-100 text-slate-600 shadow-xs'
            }`}
          >
            {procesarParrafo(parrafo)}
          </div>
        );
      })}
    </div>
  );
}