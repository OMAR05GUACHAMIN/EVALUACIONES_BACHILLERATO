// src/data/bachillerato2.js
export const bachillerato2Data = [
  {
    id: "b2_t2",
    nombre: "Operaciones con Polinomios",
    concepto:
      "Las operaciones algebraicas con polinomios (suma, resta, multiplicación y división) siguen las reglas del álgebra con coeficientes fraccionarios, la reducción de términos semejantes y la propiedad distributiva.",
    preguntas: [
      {
        id: 3,
        tema: "Suma de Polinomios",
        enunciado: "Dados los polinomios f(x) y g(x), halla la suma f(x) + g(x):",
        formula:
          "f(x) = \\frac{5}{7}x^4 - \\frac{4}{9}x^3 - \\frac{1}{5}x + \\frac{6}{11}, \\quad g(x) = -\\frac{2}{3}x^4 + \\frac{7}{8}x^3 - \\frac{4}{5}x^2 - \\frac{8}{11}x - 3",
        opciones: [
          {
            texto:
              "\\frac{1}{21}x^4 + \\frac{31}{72}x^3 - \\frac{4}{5}x^2 - \\frac{51}{55}x - \\frac{27}{11}",
            esCorrecta: true,
          },
          {
            texto:
              "\\frac{3}{21}x^4 - \\frac{11}{72}x^3 - \\frac{4}{5}x^2 - \\frac{9}{55}x - \\frac{21}{11}",
            esCorrecta: false,
          },
          {
            texto:
              "-\\frac{1}{21}x^4 + \\frac{31}{72}x^3 + \\frac{4}{5}x^2 - \\frac{51}{55}x + \\frac{27}{11}",
            esCorrecta: false,
          },
          {
            texto:
              "\\frac{1}{21}x^4 + \\frac{1}{8}x^3 - \\frac{4}{5}x^2 - \\frac{1}{5}x - 3",
            esCorrecta: false,
          },
        ],
        solucion:
          "Paso 1: Agrupamos los términos semejantes por grado.\\n" +
          "Paso 2: Sumamos las fracciones correspondientes a cada coeficiente.\\n\\n" +
          "Resultado final: \\frac{1}{21}x^4 + \\frac{31}{72}x^3 - \\frac{4}{5}x^2 - \\frac{51}{55}x - \\frac{27}{11}",
      },
      {
        id: 4,
        tema: "Resta de Polinomios",
        enunciado: "Dados los polinomios f(x) y g(x), encuentra el resultado de la resta f(x) - g(x):",
        formula:
          "f(x) = -\\frac{8}{3}x^3 + \\frac{1}{7}x^2 - \\frac{4}{9}x + \\frac{3}{4}, \\quad g(x) = -\\frac{12}{5}x^3 - \\frac{14}{3}x^2 - \\frac{13}{2}x - \\frac{5}{12}",
        opciones: [
          {
            texto:
              "-\\frac{4}{15}x^3 + \\frac{101}{21}x^2 + \\frac{109}{18}x + \\frac{7}{6}",
            esCorrecta: true,
          },
          {
            texto:
              "-\\frac{76}{15}x^3 - \\frac{95}{21}x^2 - \\frac{125}{18}x + \\frac{1}{3}",
            esCorrecta: false,
          },
          {
            texto:
              "\\frac{4}{15}x^3 + \\frac{101}{21}x^2 - \\frac{109}{18}x - \\frac{7}{6}",
            esCorrecta: false,
          },
          {
            texto:
              "-\\frac{4}{15}x^3 - \\frac{101}{21}x^2 + \\frac{109}{18}x + \\frac{1}{6}",
            esCorrecta: false,
          },
        ],
        solucion:
          "Paso 1: Aplicamos el signo negativo a todos los términos de g(x).\\n" +
          "Paso 2: Sumamos y restamos los coeficientes semejantes.\\n\\n" +
          "Resultado final: -\\frac{4}{15}x^3 + \\frac{101}{21}x^2 + \\frac{109}{18}x + \\frac{7}{6}",
      },
      {
        id: 5,
        tema: "Multiplicación de Polinomios Racionales",
        enunciado: "Sean las funciones f(x) y g(x), halla el producto f(x) · g(x):",
        formula:
          "f(x) = \\frac{9x + 4}{5x - 3}, \\quad g(x) = \\frac{7x - 6}{8x - 12}",
        opciones: [
          {
            texto: "\\frac{63x^2 - 26x - 24}{40x^2 - 84x + 36}",
            esCorrecta: true,
          },
          {
            texto: "\\frac{63x^2 + 54x - 24}{40x^2 - 60x + 36}",
            esCorrecta: false,
          },
          {
            texto: "\\frac{16x - 2}{13x - 15}",
            esCorrecta: false,
          },
          {
            texto: "\\frac{63x^2 - 26x + 24}{40x^2 + 84x - 36}",
            esCorrecta: false,
          },
        ],
        solucion:
          "Paso 1: Multiplicamos (9x+4)(7x-6) para el numerador.\\n" +
          "Paso 2: Multiplicamos (5x-3)(8x-12) para el denominador.\\n\\n" +
          "Resultado final: \\frac{63x^2 - 26x - 24}{40x^2 - 84x + 36}",
      },
      {
        id: 6,
        tema: "División de Polinomios - Ejercicio 1",
        enunciado: "Realiza la división de polinomios y determina el cociente Q(x) y el residuo R(x):",
        formula:
          "\\left(\\frac{3}{4}x^4 - \\frac{5}{6}x^3 + \\frac{1}{2}x^2 - \\frac{2}{3}x + \\frac{1}{4}\\right) \\div \\left(\\frac{1}{2}x^2 - \\frac{1}{3}x + \\frac{1}{2}\\right)",
        opciones: [
          {
            texto:
              "Q(x) = \\frac{3}{2}x^2 - \\frac{2}{3}x - \\frac{17}{18}, \\quad R(x) = -\\frac{35}{54}x + \\frac{13}{18}",
            esCorrecta: true,
          },
          {
            texto:
              "Q(x) = \\frac{3}{4}x^2 + \\frac{1}{3}x - \\frac{1}{2}, \\quad R(x) = \\frac{5}{6}x + \\frac{1}{4}",
            esCorrecta: false,
          },
          {
            texto:
              "Q(x) = \\frac{3}{2}x^2 + \\frac{2}{3}x + \\frac{17}{18}, \\quad R(x) = \\frac{35}{54}x - \\frac{13}{18}",
            esCorrecta: false,
          },
          {
            texto:
              "Q(x) = 2x^2 - 3x + 1, \\quad R(x) = -x + 2",
            esCorrecta: false,
          },
        ],
        solucion:
          "Paso 1: Dividimos el primer término del dividendo entre el del divisor.\\n" +
          "Paso 2: Restamos y repetimos para cada término.\\n\\n" +
          "Resultado final: Q(x) = \\frac{3}{2}x^2 - \\frac{2}{3}x - \\frac{17}{18}, \\quad R(x) = -\\frac{35}{54}x + \\frac{13}{18}",
      },
      {
        id: 7,
        tema: "División de Polinomios - Ejercicio 2",
        enunciado: "Realiza la división de polinomios con coeficientes fraccionarios:",
        formula:
          "\\left(\\frac{2}{3}x^5 + \\frac{3}{4}x^4 - \\frac{5}{6}x^3 + \\frac{1}{2}x^2 - \\frac{1}{3}x + \\frac{1}{4}\\right) \\div \\left(\\frac{1}{4}x^2 + \\frac{1}{2}x - \\frac{1}{3}\\right)",
        opciones: [
          {
            texto:
              "Q(x) = \\frac{8}{3}x^3 - \\frac{7}{3}x^2 + \\frac{44}{9}x - \\frac{98}{9}, \\quad R(x) = \\frac{182}{27}x - \\frac{365}{108}",
            esCorrecta: true,
          },
          {
            texto:
              "Q(x) = \\frac{2}{3}x^3 + \\frac{3}{4}x^2 - \\frac{5}{6}x + 1, \\quad R(x) = \\frac{1}{3}x - \\frac{1}{4}",
            esCorrecta: false,
          },
          {
            texto:
              "Q(x) = \\frac{8}{3}x^3 + \\frac{7}{3}x^2 - \\frac{44}{9}x + \\frac{98}{9}, \\quad R(x) = -\\frac{182}{27}x + \\frac{365}{108}",
            esCorrecta: false,
          },
          {
            texto:
              "Q(x) = 4x^3 - 3x^2 + 2x - 1, \\quad R(x) = 5x - 2",
            esCorrecta: false,
          },
        ],
        solucion:
          "Paso 1: Realizamos la división algebraica paso a paso reduciendo coeficientes fraccionarios.\\n\\n" +
          "Resultado final: Q(x) = \\frac{8}{3}x^3 - \\frac{7}{3}x^2 + \\frac{44}{9}x - \\frac{98}{9}, \\quad R(x) = \\frac{182}{27}x - \\frac{365}{108}",
      },
    ],
  },
];