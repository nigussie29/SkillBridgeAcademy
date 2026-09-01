const algebraTwoModules = [
  {
    moduleNumber: 1,
    title: "Functions and Transformations",

    description:
      "Develop deeper function reasoning through domain and range, parent functions, transformations, composition, piecewise functions, modeling, coding, and creation.",

    level: "Intermediate",
    estimatedTime: "10–12 hours",
    lessonCount: 8,

    status: "Planned",

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
      "Analyze quadratic relationships through graphs, equations, multiple forms, solving methods, transformations, modeling, coding, and creator projects.",

    level: "Intermediate",
    estimatedTime: "12–14 hours",
    lessonCount: 8,

   status: "Available",

    theme:
      "from-violet-950 via-purple-900 to-slate-950",

    topics: [
      "Quadratic relationships",
      "Parabolas",
      "Vertex and axis of symmetry",
      "Standard form",
      "Vertex form",
      "Factoring",
      "Completing the square",
      "Quadratic formula",
      "Quadratic modeling",
    ],

    learningPathway:
      "Situation → Pattern → Quadratic Model → Represent → Analyze → Solve → Verify → Interpret → Code → Create",
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