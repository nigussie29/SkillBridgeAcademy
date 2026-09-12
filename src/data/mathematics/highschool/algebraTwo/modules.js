const algebraTwoModules = [
  {
    moduleNumber: 1,
    title: "Functions and Transformations",

    description:
      "Develop deeper function reasoning through domain and range, parent functions, transformations, composition, piecewise functions, modeling, coding, and creation.",

    level: "Intermediate",
    estimatedTime: "10–12 hours",
    lessonCount: 8,

    status: "Available",

    theme:
      "from-blue-950 via-indigo-900 to-slate-950",

    topics: [
      "Function behavior",
      "Domain and range",
      "Parent functions",
      "Translations",
      "Reflections",
      "Stretches and compressions",
      "Function composition",
      "Piecewise functions",
      "Real-world modeling",
    ],

    learningPathway:
      "Situation → Function → Behavior → Transform → Compare → Compose → Model → Code → Create",
  },

  {
    moduleNumber: 2,
    title: "Systems of Equations and Inequalities",

    description:
      "Solve, compare, and model systems using graphs, substitution, elimination, inequalities, nonlinear relationships, technology, and real-world decision-making.",

    level: "Intermediate",
    estimatedTime: "10–12 hours",
    lessonCount: 8,

    status: "Planned",

    theme:
      "from-emerald-950 via-teal-900 to-slate-950",

    topics: [
      "Systems as intersecting relationships",
      "Graphing systems",
      "Substitution",
      "Elimination",
      "Systems of inequalities",
      "Linear and nonlinear systems",
      "Real-world systems modeling",
      "Decision analysis",
    ],

    learningPathway:
      "Situation → Relationships → Represent → Solve → Verify → Compare → Interpret → Code → Decide",
  },

  {
    moduleNumber: 3,
    title: "Quadratic Functions and Equations",

    description:
      "Solve quadratic equations rigorously through factoring, completing the square, the quadratic formula, discriminant analysis, graph interpretation, method selection, verification, and solution preservation.",

    level: "Intermediate",
    estimatedTime: "12–14 hours",
    lessonCount: 8,

    status: "Available",

    theme:
      "from-violet-950 via-purple-900 to-slate-950",

    topics: [
      "Factoring quadratic equations",
      "Completing the square",
      "Quadratic formula",
      "The discriminant",
      "Nature of roots",
      "Choosing an efficient solution method",
      "Roots, graphs, and verification",
      "Losing and gaining roots",
    ],

    learningPathway:
      "Equation → Factor → Complete the Square → Formula → Discriminant → Predict Roots → Choose Method → Verify",
  },
];

export function getAlgebraTwoModuleByNumber(
  moduleNumber
) {
  return (
    algebraTwoModules.find(
      (module) =>
        module.moduleNumber ===
        Number(moduleNumber)
    ) || null
  );
}

export default algebraTwoModules;
