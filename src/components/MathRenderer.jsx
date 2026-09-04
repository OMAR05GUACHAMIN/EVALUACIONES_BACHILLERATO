import React, { useEffect, useRef } from 'react';
import katex from 'katex';

export default function MathRenderer({ formula, block = false }) {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      try {
        katex.render(formula, containerRef.current, {
          displayMode: block,
          throwOnError: false
        });
      } catch (err) {
        console.error("Error al renderizar KaTeX: ", err);
      }
    }
  }, [formula, block]);

  return <span ref={containerRef} className="select-all" />;
}