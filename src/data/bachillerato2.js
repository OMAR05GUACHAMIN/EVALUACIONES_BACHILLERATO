// src/data/bachillerato2.js
export const bachillerato2Data = [
  {
    id: "b2_t1",
    nombre: "Operaciones con Polinomios",
    concepto: "$$ Las operaciones algebraicas con polinomios (suma, resta, multiplicación y división) siguen las reglas del álgebra con coeficientes fraccionarios, la reducción de términos semejantes y la propiedad distributiva.",
    preguntas: [
      {
        id: 1,
        tema: "Suma de Polinomios",
        enunciado: "Dados los polinomios $f(x)$ y $g(x)$, halla la suma $f(x) + g(x)$:",
        formula: "\\begin{aligned} f(x) &= \\frac{5}{7}x^4 - \\frac{4}{9}x^3 - \\frac{1}{5}x + \\frac{6}{11} \\\\ g(x) &= -\\frac{2}{3}x^4 + \\frac{7}{8}x^3 - \\frac{4}{5}x^2 - \\frac{8}{11}x - 3 \\end{aligned}",
          opciones: [
          { texto: "\\frac{1}{21}x^4 + \\frac{31}{72}x^3 - \\frac{4}{5}x^2 - \\frac{51}{55}x - \\frac{27}{11}", esCorrecta: true },
          { texto: "\\frac{3}{21}x^4 - \\frac{11}{72}x^3 - \\frac{4}{5}x^2 - \\frac{9}{55}x - \\frac{21}{11}", esCorrecta: false },
          { texto: "-\\frac{1}{21}x^4 + \\frac{31}{72}x^3 + \\frac{4}{5}x^2 - \\frac{51}{55}x + \\frac{27}{11}", esCorrecta: false },
          { texto: "\\frac{1}{21}x^4 + \\frac{1}{8}x^3 - \\frac{4}{5}x^2 - \\frac{1}{5}x - 3", esCorrecta: false }
        ],
        solucion: "Paso 1: Agrupamos los términos semejantes por grado. \\n\\nPaso 2: Sumamos las fracciones correspondientes a cada coeficiente. \\n\\nResultado final: \\frac{1}{21}x^4 + \\frac{31}{72}x^3 - \\frac{4}{5}x^2 - \\frac{51}{55}x - \\frac{27}{11}"
      },
      {
        id: 2,
        tema: "Resta de Polinomios",
        enunciado: "Dados los polinomios $f(x)$ y $g(x)$, encuentra el resultado de la resta $f(x) - g(x)$:",
        formula: "\\begin{aligned} f(x) = -\\frac{8}{3}x^3 + \\frac{1}{7}x^2 - \\frac{4}{9}x + \\frac{3}{4} \\\\ g(x) = -\\frac{12}{5}x^3 - \\frac{14}{3}x^2 - \\frac{13}{2}x - \\frac{5}{12} \\end{aligned}",
        opciones: [
          { texto: "-\\frac{4}{15}x^3 + \\frac{101}{21}x^2 + \\frac{109}{18}x + \\frac{7}{6}", esCorrecta: true },
          { texto: "-\\frac{76}{15}x^3 - \\frac{95}{21}x^2 - \\frac{125}{18}x + \\frac{1}{3}", esCorrecta: false },
          { texto: "\\frac{4}{15}x^3 + \\frac{101}{21}x^2 - \\frac{109}{18}x - \\frac{7}{6}", esCorrecta: false },
          { texto: "-\\frac{4}{15}x^3 - \\frac{101}{21}x^2 + \\frac{109}{18}x + \\frac{1}{6}", esCorrecta: false }
        ],
        solucion: "Paso 1: Aplicamos el signo negativo a todos los términos de g(x). \\n\\nPaso 2: Sumamos y restamos los coeficientes semejantes. \\n\\nResultado final: -\\frac{4}{15}x^3 + \\frac{101}{21}x^2 + \\frac{109}{18}x + \\frac{7}{6}"
      },
      {
        id: 3,
        tema: "Multiplicación de Polinomios Racionales",
        enunciado: "Sean las funciones $f(x)$ y $g(x)$, halla el producto $f(x) \\cdot g(x)$:",
        formula: "\\begin{aligned} f(x) = \\frac{9x + 4}{5x - 3} \\\\ g(x) = \\frac{7x - 6}{8x - 12} \\end{aligned}",
        opciones: [
          { texto: "\\frac{63x^2 - 26x - 24}{40x^2 - 84x + 36}", esCorrecta: true },
          { texto: "\\frac{63x^2 + 54x - 24}{40x^2 - 60x + 36}", esCorrecta: false },
          { texto: "\\frac{16x - 2}{13x - 15}", esCorrecta: false },
          { texto: "\\frac{63x^2 - 26x + 24}{40x^2 + 84x - 36}", esCorrecta: false }
        ],
        solucion: "Paso 1: Multiplicamos (9x+4)(7x-6) para el numerador. \\n\\nPaso 2: Multiplicamos (5x-3)(8x-12) para el denominador. \\n\\nResultado final: \\frac{63x^2 - 26x - 24}{40x^2 - 84x + 36}"
      },
      {
        id: 4,
        tema: "División de Polinomios - Ejercicio 1",
        enunciado: "Realiza la división de polinomios y determina el cociente $Q(x)$ y el residuo $R(x)$:",
        formula: "\\begin{aligned} \\left(\\frac{3}{4}x^4 - \\frac{5}{6}x^3 + \\frac{1}{2}x^2 - \\frac{2}{3}x + \\frac{1}{4}\\right) \\\\ \\div \\left(\\frac{1}{2}x^2 - \\frac{1}{3}x + \\frac{1}{2}\\right) \\end{aligned}",
        opciones: [
          { texto: "Q(x) = \\frac{3}{2}x^2 - \\frac{2}{3}x - \\frac{17}{18}, \\quad R(x) = -\\frac{35}{54}x + \\frac{13}{18}", esCorrecta: true },
          { texto: "Q(x) = \\frac{3}{4}x^2 + \\frac{1}{3}x - \\frac{1}{2}, \\quad R(x) = \\frac{5}{6}x + \\frac{1}{4}", esCorrecta: false },
          { texto: "Q(x) = \\frac{3}{2}x^2 + \\frac{2}{3}x + \\frac{17}{18}, \\quad R(x) = \\frac{35}{54}x - \\frac{13}{18}", esCorrecta: false },
          { texto: "Q(x) = 2x^2 - 3x + 1, \\quad R(x) = -x + 2", esCorrecta: false }
        ],
        solucion: "Paso 1: Dividimos el primer término del dividendo entre el del divisor. \\n\\nPaso 2: Restamos y repetimos para cada término. \\n\\nResultado final: Q(x) = \\frac{3}{2}x^2 - \\frac{2}{3}x - \\frac{17}{18}, \\quad R(x) = -\\frac{35}{54}x + \\frac{13}{18}"
      },
      {
        id: 5,
        tema: "División de Polinomios - Ejercicio 2",
        enunciado: "$$ Realiza la división de polinomios con coeficientes fraccionarios:",
        formula: "\\begin{aligned} \\left(\\frac{2}{3}x^5 + \\frac{3}{4}x^4 - \\frac{5}{6}x^3 + \\frac{1}{2}x^2 - \\frac{1}{3}x + \\frac{1}{4}\\right) \\\\ \\div \\left(\\frac{1}{4}x^2 + \\frac{1}{2}x - \\frac{1}{3}\\right) \\end{aligned}",
        opciones: [
          { texto: "Q(x) = \\frac{8}{3}x^3 - \\frac{7}{3}x^2 + \\frac{44}{9}x - \\frac{98}{9}, \\quad R(x) = \\frac{182}{27}x - \\frac{365}{108}", esCorrecta: true },
          { texto: "Q(x) = \\frac{2}{3}x^3 + \\frac{3}{4}x^2 - \\frac{5}{6}x + 1, \\quad R(x) = \\frac{1}{3}x - \\frac{1}{4}", esCorrecta: false },
          { texto: "Q(x) = \\frac{8}{3}x^3 + \\frac{7}{3}x^2 - \\frac{44}{9}x + \\frac{98}{9}, \\quad R(x) = -\\frac{182}{27}x + \\frac{365}{108}", esCorrecta: false },
          { texto: "Q(x) = 4x^3 - 3x^2 + 2x - 1, \\quad R(x) = 5x - 2", esCorrecta: false }
        ],
        solucion: "Paso 1: Realizamos la división algebraica paso a paso reduciendo coeficientes fraccionarios. \\n\\nResultado final: Q(x) = \\frac{8}{3}x^3 - \\frac{7}{3}x^2 + \\frac{44}{9}x - \\frac{98}{9}, \\quad R(x) = \\frac{182}{27}x - \\frac{365}{108}"
      }
    ]
  },
  {
    id: "b2_t2",
    nombre: "Funciones Racionales y sus Asíntotas",
    concepto: "Una función racional es del tipo $f(x) = \\frac{P(x)}{Q(x)}$, donde $P(x)$ y $Q(x)$ son polinomios. Las **asíntotas verticales** ocurren donde el denominador se hace cero (Q(x) = 0). Las **asíntotas horizontales** dependen de los grados de los polinomios. Para hallar la **imagen** o el valor de y, basta con evaluar la función reemplazando el valor dado de x.",
    preguntas: [
      {
        id: 1,
        tema: "Asíntota Vertical",
        enunciado: "$$ Encuentra la asíntota vertical de la siguiente función racional:",
        formula: "f(x) = \\frac{3x + 1}{x - 4}",
        opciones: [
          { texto: "x = 4", esCorrecta: true },
          { texto: "x = -4", esCorrecta: false },
          { texto: "y = 3", esCorrecta: false },
          { texto: "x = -\\frac{1}{3}", esCorrecta: false }
        ],
        solucion: "Paso 1: Igualamos el denominador a cero para encontrar las restricciones del dominio: x - 4 = 0. \\n\\nPaso 2: Despejamos x: x = 4. \\n\\nResultado final: La asíntota vertical se encuentra en la recta vertical x = 4."
      },
      {
        id: 2,
        tema: "Asíntota Horizontal (Grados Iguales)",
        enunciado: "$$ Determina la asíntota horizontal de la función:",
        formula: "f(x) = \\frac{6x^2 - 5}{2x^2 + 1}",
        opciones: [
          { texto: "y = 3", esCorrecta: true },
          { texto: "y = 6", esCorrecta: false },
          { texto: "x = 3", esCorrecta: false },
          { texto: "$$ No tiene asíntota horizontal", esCorrecta: false }
        ],
        solucion: "Paso 1: Identificamos el grado del numerador y del denominador. Ambos son de grado 2. \\n\\nPaso 2: Cuando los grados son iguales, la asíntota horizontal es el cociente de los coeficientes principales: y = \\frac{6}{2}. \\n\\nResultado final: y = 3."
      },
      {
        id: 3,
        tema: "Evaluación de Puntos (Hallar la imagen y)",
        enunciado: "Dada la función $f(x) = \\frac{2x + 4}{x + 3}$, calcula la imagen cuando x = 1:",
        formula: "f(1) = ?",
        opciones: [
          { texto: "y = \\frac{3}{2}", esCorrecta: true },
          { texto: "y = 6", esCorrecta: false },
          { texto: "y = 2", esCorrecta: false },
          { texto: "y = \\frac{4}{3}", esCorrecta: false }
        ],
        solucion: "Paso 1: Sustituimos x = 1 en la función racional: f(1) = \\frac{2(1) + 4}{(1) + 3}. \\n\\nPaso 2: Resolvemos el numerador y denominador: f(1) = \\frac{2 + 4}{4} = \\frac{6}{4}. \\n\\nResultado final: Simplificando la fracción obtenemos y = \\frac{3}{2}."
      },
      {
        id: 4,
        tema: "Asíntota Vertical con Cuadráticos",
        enunciado: "$$ Halla las asíntotas verticales de la función:",
        formula: "f(x) = \\frac{x + 2}{x^2 - 9}",
        opciones: [
          { texto: "x = 3 \\quad \\text{y} \\quad x = -3", esCorrecta: true },
          { texto: "x = 9 \\quad \\text{y} \\quad x = -9", esCorrecta: false },
          { texto: "x = -2", esCorrecta: false },
          { texto: "y = 0", esCorrecta: false }
        ],
        solucion: "Paso 1: Igualamos el denominador a cero: x^2 - 9 = 0. \\n\\nPaso 2: Factorizamos la diferencia de cuadrados: (x - 3)(x + 3) = 0. \\n\\nResultado final: Despejando cada factor obtenemos las dos asíntotas verticales en x = 3 y x = -3."
      },
      {
        id: 5,
        tema: "Asíntota Horizontal (Grado Menor arriba)",
        enunciado: "$$ Encuentra la asíntota horizontal de la siguiente función:",
        formula: "f(x) = \\frac{5x + 2}{x^2 - 4}",
        opciones: [
          { texto: "y = 0", esCorrecta: true },
          { texto: "y = 5", esCorrecta: false },
          { texto: "x = 2", esCorrecta: false },
          { texto: "$$ No tiene asíntota horizontal", esCorrecta: false }
        ],
        solucion: "Paso 1: Comparamos los grados: el grado del numerador es 1 y el del denominador es 2. \\n\\nPaso 2: Cuando el grado del numerador es menor que el del denominador, la asíntota horizontal siempre es el eje x. \\n\\nResultado final: y = 0."
      },
      {
        id: 6,
        tema: "Evaluación de Puntos con Signo Negativo",
        enunciado: "Si $f(x) = \\frac{x^2 - 1}{x - 2}$, encuentra el valor de la imagen $y$ para $x = -3$:",
        formula: "f(-3) = ?",
        opciones: [
          { texto: "y = -\\frac{8}{5}", esCorrecta: true },
          { texto: "y = \\frac{8}{5}", esCorrecta: false },
          { texto: "y = -2", esCorrecta: false },
          { texto: "y = 8", esCorrecta: false }
        ],
        solucion: "Paso 1: Reemplazamos x = -3 respetando los paréntesis: f(-3) = \\frac{(-3)^2 - 1}{(-3) - 2}. \\n\\nPaso 2: Operamos: \\frac{9 - 1}{-5} = \\frac{8}{-5}. \\n\\nResultado final: y = -\\frac{8}{5}."
      },
      {
        id: 7,
        tema: "Asíntota Vertical con Simplificación",
        enunciado: "$$ Halla la asíntota vertical de la función:",
        formula: "f(x) = \\frac{2x - 8}{x - 4}",
        opciones: [
          { texto: "$$ No tiene asíntota vertical", esCorrecta: true },
          { texto: "x = 4", esCorrecta: false },
          { texto: "y = 2", esCorrecta: false },
          { texto: "x = -4", esCorrecta: false }
        ],
        solucion: "Paso 1: Factorizamos el numerador: 2(x - 4). \\n\\nPaso 2: La función simplificada es f(x) = 2 para x \\neq 4. Como el factor (x - 4) se simplifica, no genera una asíntota, sino un hueco en la gráfica. \\n\\nResultado final: No tiene asíntota vertical."
      },
      {
        id: 8,
        tema: "Asíntota Horizontal (Grado Mayor arriba)",
        enunciado: "$$ Identifica la asíntota horizontal de la función:",
        formula: "f(x) = \\frac{x^3 + 2}{x^2 - 1}",
        opciones: [
          { texto: "$$ No tiene asíntota horizontal", esCorrecta: true },
          { texto: "y = 0", esCorrecta: false },
          { texto: "y = 1", esCorrecta: false },
          { texto: "x = 1", esCorrecta: false }
        ],  
        solucion: "Paso 1: El grado del numerador (3) es mayor que el del denominador (2). \\n\\nPaso 2: Cuando el numerador tiene un grado mayor, la función crece sin límite y no tiene asíntota horizontal (en su lugar presenta una asíntota oblicua). \\n\\nResultado final: No tiene asíntota horizontal."
      },
      {
        id: 9,
        tema: "Evaluación de Punto Cero",
        enunciado: "Calcula el corte con el eje y $(evaluando f(0))$ de la función:",
        formula: "f(x) = \\frac{4x - 12}{3x + 2}",
        opciones: [
          { texto: "y = -6", esCorrecta: true },
          { texto: "y = -12", esCorrecta: false },
          { texto: "y = 3", esCorrecta: false },
          { texto: "y = 0", esCorrecta: false }
        ],
        solucion: "Paso 1: Sustituimos x = 0 en la expresión: f(0) = \\frac{4(0) - 12}{3(0) + 2}. \\n\\nPaso 2: Simplificamos los términos: f(0) = \\frac{-12}{2} = -6. \\n\\nResultado final: y = -6."
      },
      {
        id: 10,
        tema: "Asíntota Horizontal y Vertical Completa",
        enunciado: "Para la función $f(x) = \\frac{5x - 10}{2x + 6}$, determina el par de asíntotas (Vertical, Horizontal):",
        formula: "f(x) = \\frac{5x - 10}{2x + 6}",
        opciones: [
          { texto: "x = -3 \\quad \\text{y} \\quad y = \\frac{5}{2}", esCorrecta: true },
          { texto: "x = 3 \\quad \\text{y} \\quad y = -\\frac{5}{2}", esCorrecta: false },
          { texto: "x = -3 \\quad \\text{y} \\quad y = 0", esCorrecta: false },
          { texto: "x = 2 \\quad \\text{y} \\quad y = \\frac{5}{2}", esCorrecta: false }
        ],
        solucion: "Paso 1: Para la asíntota vertical, igualamos el denominador a 0: 2x + 6 = 0 \\rightarrow 2x = -6 \\rightarrow x = -3. \\n\\nPaso 2: Para la asíntota horizontal, como los grados son iguales, dividimos coeficientes: y = \\frac{5}{2}. \\n\\nResultado final: x = -3 e y = \\frac{5}{2}."
      }
    ]
  }
];