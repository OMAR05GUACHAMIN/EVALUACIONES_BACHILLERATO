// src/data/bachillerato1.js
export const bachillerato1Data = [
  {
    id: "b1_t1",
    nombre: "Potenciación y Leyes de Exponentes",
    concepto: "La potenciación es una operación matemática entre dos términos denominados: base (a) y exponente (n). Nos indica cuántas veces se debe multiplicar la base por sí misma. Cuando trabajamos con exponentes fraccionarios, la expresión se puede transformar en un radical utilizando la propiedad fundamental: $a^{\\frac{m}{n}} = \\sqrt[n]{a^m}$. Recuerda que para simplificar expresiones algebraicas complejas, primero debes aplicar las propiedades en los paréntesis internos y luego reducir las bases comunes agrupándolas en el numerador y denominador.",
    preguntas: [
      {
        id: 1,
        tema: "Leyes de Exponentes Fraccionarios",
        enunciado: "Simplifica la siguiente expresión algebraica paso a paso:",
        formula: "\\frac{x^{\\frac{2}{3}}\\,y^{-\\frac{4}{7}}\\,x^{\\frac{11}{5}}}{\\left(x^{-\\frac{8}{7}}\\,y^{\\frac{9}{4}}\\right)^{\\frac{1}{3}}}",
        opciones: [
          { texto: "\\frac{x^{\\frac{341}{105}}}{y^{\\frac{37}{28}}}", esCorrecta: true },
          { texto: "x^{\\frac{341}{105}} \\cdot y^{\\frac{37}{28}}", esCorrecta: false },
          { texto: "\\frac{x^{\\frac{43}{15}}}{y^{\\frac{4}{7}}}", esCorrecta: false },
          { texto: "\\frac{x^{\\frac{8}{21}}}{y^{\\frac{3}{4}}}", esCorrecta: false }
        ],
        solucion: "Paso 1: Aplicamos el exponente externo en el denominador: $\\left(x^{-\\frac{8}{7}}y^{\\frac{9}{4}}\\right)^{\\frac{1}{3}} = x^{-\\frac{8}{21}}y^{\\frac{3}{4}}$. Queda: $\\frac{x^{\\frac{2}{3}}y^{-\\frac{4}{7}}x^{\\frac{11}{5}}}{x^{-\\frac{8}{21}}y^{\\frac{3}{4}}}$. \\n\\nPaso 2: Sumamos los exponentes de $x$ en el numerador: $\\frac{2}{3} + \\frac{11}{5} = \\frac{43}{15}$. Obtenemos: $\\frac{x^{\\frac{43}{15}}y^{-\\frac{4}{7}}}{x^{-\\frac{8}{21}}y^{\\frac{3}{4}}}$. \\n\\nPaso 3: Restamos los exponentes del numerador menos el denominador: Para $x$: $\\frac{43}{15} - (-\\frac{8}{21}) = \\frac{341}{105}$. Para $y$: $-\\frac{4}{7} - \\frac{3}{4} = -\\frac{37}{28}$. \\n\\nResultado final: Como el exponente de $y$ es negativo, pasa al denominador: $\\frac{x^{\\frac{341}{105}}}{y^{\\frac{37}{28}}}$."
      },
      {
        id: 2,
        tema: "Exponentes Enteros Grandes",
        enunciado: "Simplifica la siguiente expresión numérica utilizando las leyes de potencias:",
        formula: "\\frac{\\left(3^{8}\\cdot3^{11}\\cdot5^{9}\\cdot5^{20}\\right)^3}{\\left(3^{-13}\\cdot3^{19}\\cdot5^{14}\\right)^{-4}}",
        opciones: [
          { texto: "3^{81} \\cdot 5^{143}", esCorrecta: true },
          { texto: "3^{33} \\cdot 5^{31}", esCorrecta: false },
          { texto: "3^{57} \\cdot 5^{87}", esCorrecta: false },
          { texto: "\\frac{3^{57}}{5^{-56}}", esCorrecta: false }
        ],
        solucion: "Paso 1: Sumamos los exponentes de bases iguales dentro de los paréntesis: $\\frac{(3^{19} \\cdot 5^{29})^3}{(3^6 \\cdot 5^{14})^{-4}}$. \\n\\nPaso 2: Multiplicamos los exponentes internos por los externos: $\\frac{3^{57} \\cdot 5^{87}}{3^{-24} \\cdot 5^{-56}}$. \\n\\nResultado final: Restamos los exponentes del denominador: $57 - (-24) = 81$ y $87 - (-56) = 143$. Obtenemos: $3^{81} \\cdot 5^{143}$."
      },
      {
        id: 3,
        tema: "Simplificación con Tres Variables (p, a, m)",
        enunciado: "Simplifica la expresión fraccionaria con exponentes de diferente base:",
        formula: "\\frac{p^{-\\frac{4}{5}}a^{\\frac{1}{7}}m^{-\\frac{3}{5}}\\left(p^{-\\frac{7}{4}}m^{\\frac{6}{7}}\\right)^{\\frac{2}{3}}}{\\left(p^{-\\frac{6}{5}}m^{\\frac{3}{4}}\\right)^{\\frac{1}{3}}a^{-\\frac{4}{7}}}",
        opciones: [
          { texto: "\\frac{a^{\\frac{5}{7}}}{p^{\\frac{47}{30}}m^{\\frac{39}{140}}}", esCorrecta: true },
          { texto: "\\frac{a^{\\frac{3}{7}}}{p^{\\frac{2}{5}}m^{\\frac{1}{4}}}", esCorrecta: false },
          { texto: "\\frac{a^{\\frac{5}{7}}p^{\\frac{47}{30}}}{m^{\\frac{39}{140}}}", esCorrecta: false },
          { texto: "p^{-\\frac{59}{30}} a^{\\frac{1}{7}} m^{-\\frac{1}{35}}", esCorrecta: false }
        ],
        solucion: "Paso 1: Aplicamos los exponentes externos de los paréntesis: $\\frac{p^{-\\frac{4}{5}} a^{\\frac{1}{7}} m^{-\\frac{3}{5}} p^{-\\frac{7}{6}} m^{\\frac{4}{7}}}{p^{-\\frac{2}{5}} m^{\\frac{1}{4}} a^{-\\frac{4}{7}}}$. \\n\\nPaso 2: Agrupamos términos semejantes en el numerador sumando sus exponentes: Para $p$: $-\\frac{4}{5} - \\frac{7}{6} = -\\frac{59}{30}$. Para $m$: $-\\frac{3}{5} + \\frac{4}{7} = -\\frac{1}{35}$. Queda: $\\frac{p^{-\\frac{59}{30}} a^{\\frac{1}{7}} m^{-\\frac{1}{35}}}{p^{-\\frac{2}{5}} m^{\\frac{1}{4}} a^{-\\frac{4}{7}}}$. \\n\\nResultado final: Restamos los exponentes del denominador: Para $a$: $\\frac{1}{7} - (-\\frac{4}{7}) = \\frac{5}{7}$. Para $p$: $-\\frac{59}{30} - (-\\frac{2}{5}) = -\\frac{47}{30}$. Para $m$: $-\\frac{1}{35} - \\frac{1}{4} = -\\frac{39}{140}$. Pasamos los exponentes negativos abajo: $\\frac{a^{\\frac{5}{7}}}{p^{\\frac{47}{30}}m^{\\frac{39}{140}}}$."
      },
      {
        id: 4,
        tema: "Leyes de Exponentes con Variables (e, a)",
        enunciado: "Reduce la siguiente expresión a su forma más simple:",
        formula: "\\frac{\\left(e^{-17}a^{-14}e^{19}a^{-11}\\right)^{-3}}{\\left(e^{-23}e^{10}a^{4}\\right)^{-4}}",
        opciones: [
          { texto: "\\frac{a^{91}}{e^{58}}", esCorrecta: true },
          { texto: "\\frac{e^{58}}{a^{91}}", esCorrecta: false },
          { texto: "\\frac{e^{-6}a^{75}}{e^{52}a^{-16}}", esCorrecta: false },
          { texto: "e^{-58} a^{91}", esCorrecta: false }
        ],
        solucion: "Paso 1: Reducimos los términos semejantes dentro de cada paréntesis: $\\frac{(e^2 \\cdot a^{-25})^{-3}}{(e^{-13} \\cdot a^4)^{-4}}$. \\n\\nPaso 2: Multiplicamos por los exponentes exteriores: $\\frac{e^{-6} \\cdot a^{75}}{e^{52} \\cdot a^{-16}}$. \\n\\nResultado final: Restamos los exponentes (numerador menos denominador): Para $e$: $-6 - 52 = -58$ (pasa al denominador como $e^{58}$). Para $a$: $75 - (-16) = 91$. Obtenemos: $\\frac{a^{91}}{e^{58}}$."
      },
      {
        id: 5,
        tema: "Simplificación Fraccionaria Básica",
        enunciado: "Simplifica la expresión cancelando y agrupando bases comunes:",
        formula: "\\frac{p^{-\\frac{1}{2}}q^{\\frac{5}{6}}p^{\\frac{8}{5}}}{p^{-\\frac{1}{2}}q^{\\frac{5}{6}}q^{\\frac{5}{6}}}",
        opciones: [
          { texto: "\\frac{p^{\\frac{8}{5}}}{q^{\\frac{5}{6}}}", esCorrecta: true },
          { texto: "\\frac{p^{\\frac{11}{10}}}{q^{\\frac{5}{3}}}", esCorrecta: false },
          { texto: "p^{\\frac{8}{5}} \\cdot q^{\\frac{5}{6}}", esCorrecta: false },
          { texto: "p^{\\frac{11}{10}} \\cdot q^{-\\frac{5}{6}}", esCorrecta: false }
        ],
        solucion: "Paso 1: Agrupamos exponentes en el numerador y denominador. En el numerador para $p$: $-\\frac{1}{2} + \\frac{8}{5} = \\frac{11}{10}$. En el denominador para $q$: $\\frac{5}{6} + \\frac{5}{6} = \\frac{5}{3}$. Queda: $\\frac{p^{\\frac{11}{10}}q^{\\frac{5}{6}}}{p^{-\\frac{1}{2}}q^{\\frac{5}{3}}}$. \\n\\nResultado final: Restamos exponentes (arriba menos abajo): Para $p$: $\\frac{11}{10} - (-\\frac{1}{2}) = \\frac{16}{10} = \\frac{8}{5}$. Para $q$: $\\frac{5}{6} - \\frac{5}{3} = -\\frac{5}{6}$ (va al denominador). Nos queda: $\\frac{p^{\\frac{8}{5}}}{q^{\\frac{5}{6}}}$."
      }
    ]
  },
  {
    id: "b1_t2",
    nombre: "Productos Notables y Factorización",
    concepto: "Los **Productos Notables** son multiplicaciones algebraicas cuyos resultados se pueden escribir por simple inspección, sin necesidad de verificar la multiplicación paso a paso (ej. binomio al cuadrado: $(a+b)^2 = a^2 + 2ab + b^2$). La **Factorización** es el proceso inverso, que consiste en transformar una suma o resta de términos algebraicos en un producto de factores.",
    preguntas: [
      {
        id: 1,
        tema: "Binomio al Cuadrado",
        enunciado: "Desarrolla el siguiente binomio al cuadrado:",
        formula: "(2x + 3)^2",
        opciones: [
          { texto: "4x^2 + 12x + 9", esCorrecta: true },
          { texto: "4x^2 + 9", esCorrecta: false },
          { texto: "4x^2 + 6x + 9", esCorrecta: false },
          { texto: "2x^2 + 12x + 9", esCorrecta: false }
        ],
        solucion: "Paso 1: Aplicamos la regla $(a + b)^2 = a^2 + 2ab + b^2$, donde $a = 2x$ y $b = 3$. \\n\\nPaso 2: $(2x)^2 + 2(2x)(3) + (3)^2 = 4x^2 + 12x + 9$."
      },
      {
        id: 2,
        tema: "Diferencia de Cuadrados",
        enunciado: "Factoriza la siguiente diferencia de cuadrados:",
        formula: "25x^2 - 36",
        opciones: [
          { texto: "(5x - 6)(5x + 6)", esCorrecta: true },
          { texto: "(5x - 6)^2", esCorrecta: false },
          { texto: "(25x - 1)(x + 36)", esCorrecta: false },
          { texto: "(5x + 18)(5x - 2)", esCorrecta: false }
        ],
        solucion: "Paso 1: La raíz de $25x^2$ es $5x$ y la raíz de $36$ es $6$. \\n\\nPaso 2: Aplicamos $a^2 - b^2 = (a - b)(a + b) \\rightarrow (5x - 6)(5x + 6)$."
      },
      {
        id: 3,
        tema: "Binomio al Cubo",
        enunciado: "Desarrolla el binomio al cubo:",
        formula: "(x - 2)^3",
        opciones: [
          { texto: "x^3 - 6x^2 + 12x - 8", esCorrecta: true },
          { texto: "x^3 - 8", esCorrecta: false },
          { texto: "x^3 + 6x^2 - 12x + 8", esCorrecta: false },
          { texto: "x^3 - 2x^2 + 4x - 8", esCorrecta: false }
        ],
        solucion: "Paso 1: Usamos la norma $(a - b)^3 = a^3 - 3a^2b + 3ab^2 - b^3$. \\n\\nPaso 2: Sustitución: $x^3 - 3(x)^2(2) + 3(x)(2)^2 - 2^3 = x^3 - 6x^2 + 12x - 8$."
      },
      {
        id: 4,
        tema: "Trinomio Cuadrado Perfecto",
        enunciado: "Factoriza el siguiente trinomio:",
        formula: "x^2 + 10x + 25",
        opciones: [
          { texto: "(x + 5)^2", esCorrecta: true },
          { texto: "(x - 5)^2", esCorrecta: false },
          { texto: "(x + 10)(x + 2.5)", esCorrecta: false },
          { texto: "(x + 25)(x + 1)", esCorrecta: false }
        ],
        solucion: "Paso 1: Las raíces cuadradas de los extremos son $\\sqrt{x^2} = x$ y $\\sqrt{25} = 5$. El término central cumple $2(x)(5) = 10x$. \\n\\nPaso 2: Por lo tanto, la factorización es $(x + 5)^2$."
      },
      {
        id: 5,
        tema: "Trinomio de la forma x² + bx + c",
        enunciado: "Encuentra los factores del trinomio:",
        formula: "x^2 - 7x + 12",
        opciones: [
          { texto: "(x - 4)(x - 3)", esCorrecta: true },
          { texto: "(x + 4)(x + 3)", esCorrecta: false },
          { texto: "(x - 6)(x - 2)", esCorrecta: false },
          { texto: "(x - 12)(x + 1)", esCorrecta: false }
        ],
        solucion: "Paso 1: Buscamos dos números que multiplicados den $+12$ y sumados den $-7$. \\n\\nPaso 2: Los números son $-4$ y $-3$, ya que $(-4)(-3) = 12$ y $(-4) + (-3) = -7$. La factorización es $(x - 4)(x - 3)$."
      },
      {
        id: 6,
        tema: "Factor Común Monomio",
        enunciado: "Obtén el factor común de la expresión:",
        formula: "12x^3y^2 - 18x^2y^3",
        opciones: [
          { texto: "6x^2y^2(2x - 3y)", esCorrecta: true },
          { texto: "6xy(2x^2 - 3y^2)", esCorrecta: false },
          { texto: "3x^2y^2(4x - 6y)", esCorrecta: false },
          { texto: "12x^2y^2(x - y)", esCorrecta: false }
        ],
        solucion: "Paso 1: El MCD de $12$ y $18$ es $6$. De las variables tomamos la de menor exponente: $x^2$ e $y^2$. \\n\\nPaso 2: El factor común es $6x^2y^2$. Al dividir cada término obtenemos: $6x^2y^2(2x - 3y)$."
      },
      {
        id: 7,
        tema: "Suma de Cubos",
        enunciado: "Factoriza la siguiente suma de cubos:",
        formula: "x^3 + 27",
        opciones: [
          { texto: "(x + 3)(x^2 - 3x + 9)", esCorrecta: true },
          { texto: "(x + 3)(x^2 + 3x + 9)", esCorrecta: false },
          { texto: "(x - 3)(x^2 + 3x + 9)", esCorrecta: false },
          { texto: "(x + 3)^3", esCorrecta: false }
        ],
        solucion: "Paso 1: Utilizamos la regla $a^3 + b^3 = (a + b)(a^2 - ab + b^2)$. \\n\\nPaso 2: Sustituir $a=x$ y $b=3$: $(x + 3)(x^2 - (x)(3) + 3^2) = (x + 3)(x^2 - 3x + 9)$."
      },
      {
        id: 8,
        tema: "Producto de Binomios con Término Común",
        enunciado: "Resuelve por simple inspección:",
        formula: "(x + 8)(x - 5)",
        opciones: [
          { texto: "x^2 + 3x - 40", esCorrecta: true },
          { texto: "x^2 - 3x - 40", esCorrecta: false },
          { texto: "x^2 + 13x - 40", esCorrecta: false },
          { texto: "x^2 - 40", esCorrecta: false }
        ],
        solucion: "Paso 1: Regla del término común: $(x + a)(x + b) = x^2 + (a+b)x + ab$. \\n\\nPaso 2: Suma de términos independientes: $8 + (-5) = 3$. Producto: $8 \\cdot (-5) = -40$. Resultado: $x^2 + 3x - 40$."
      },
      {
        id: 9,
        tema: "Trinomio de la forma ax² + bx + c",
        enunciado: "Factoriza el siguiente trinomio:",
        formula: "2x^2 + 5x + 3",
        opciones: [
          { texto: "(2x + 3)(x + 1)", esCorrecta: true },
          { texto: "(2x + 1)(x + 3)", esCorrecta: false },
          { texto: "(2x - 3)(x - 1)", esCorrecta: false },
          { texto: "(x + 5)(2x + 3)", esCorrecta: false }
        ],
        solucion: "Paso 1: Descomponemos $2x^2$ en $(2x)(x)$ y $3$ en $(3)(1)$. \\n\\nPaso 2: Multiplicamos cruzado: $2x(1) + x(3) = 2x + 3x = 5x$ (coincide con el término central). Factores: $(2x + 3)(x + 1)$."
      },
      {
        id: 10,
        tema: "Factorización por Agrupación de Términos",
        enunciado: "Factoriza la siguiente expresión agrupando términos:",
        formula: "ax + bx + ay + by",
        opciones: [
          { texto: "(a + b)(x + y)", esCorrecta: true },
          { texto: "(a - b)(x - y)", esCorrecta: false },
          { texto: "(ax + by)(a + b)", esCorrecta: false },
          { texto: "ab(x + y)", esCorrecta: false }
        ],
        solucion: "Paso 1: Agrupamos los dos primeros y los dos últimos: $(ax + bx) + (ay + by)$. \\n\\nPaso 2: Extraemos $x$ del primer grupo y $y$ del segundo: $x(a + b) + y(a + b)$. \\n\\nPaso 3: El factor común es $(a + b)$, lo que nos da como resultado $(a + b)(x + y)$."
      }
    ]
  }
];