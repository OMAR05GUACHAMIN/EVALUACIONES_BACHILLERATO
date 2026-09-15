import React, { useEffect, useRef } from 'react';
import katex from 'katex';

export default function MathRenderer({ formula = '', inline = false, block = false }) {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current || !formula) return;

    // Si formula contiene notación inline con '$' (ej: "Resuelve $2x + 4 = 10$")
    if (typeof formula === 'string' && formula.includes('$')) {
      const partes = formula.split('$');
      containerRef.current.innerHTML = ''; // Limpiar contenedor

      partes.forEach((parte, index) => {
        if (index % 2 === 1) {
          // Las partes impares son expresiones LaTeX entre signos $
          const span = document.createElement('span');
          try {
            katex.render(parte, span, {
              displayMode: false,
              throwOnError: false
            });
          } catch (err) {
            console.error("Error al renderizar KaTeX:", err);
            span.textContent = parte;
          }
          containerRef.current.appendChild(span);
        } else {
          // Las partes pares son texto normal
          if (parte) {
            const node = document.createTextNode(parte);
            containerRef.current.appendChild(node);
          }
        }
      });
    } else {
      // Si es una expresión LaTeX pura (ej: "\\frac{1}{2}x^4")
      try {
        katex.render(formula, containerRef.current, {
          displayMode: block && !inline,
          throwOnError: false
        });
      } catch (err) {
        console.error("Error al renderizar KaTeX: ", err);
      }
    }
  }, [formula, block, inline]);

  const Componente = block ? 'div' : 'span';

  return <Componente ref={containerRef} className="select-all" />;
}