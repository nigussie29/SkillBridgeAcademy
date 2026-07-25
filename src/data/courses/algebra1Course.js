export const algebra1Course = {
  id: "advanced-algebra-1",
  title: "Advanced Algebra I",
  category: "School of Mathematics",
  description:
    "Develop strong algebraic reasoning through patterns, equations, functions, modeling, investigations, projects, and real-world problem solving.",
  level: "Advanced",
  duration: "36 weeks",
  progress: 0,

  outcomes: [
    "Represent mathematical ideas using variables, expressions, equations, tables, graphs, and words",
    "Solve and justify solutions to linear equations and inequalities",
    "Analyze functions using multiple representations",
    "Model real-world relationships with linear, exponential, and quadratic expressions",
    "Solve systems of equations using graphical, algebraic, and technological methods",
    "Apply exponent rules, radicals, and polynomial operations",
    "Use algebra to investigate data, patterns, and mathematical models",
    "Create portfolio projects that demonstrate mathematical reasoning and communication",
  ],

  lessons: [
    {
      id: "variables-and-expressions",
      title: "Variables and Expressions",
      description:
        "Explore how variables represent changing quantities and how expressions communicate mathematical relationships.",
      status: "current",
      path: "/lesson-engine/variables-and-expressions",
    },
    {
      id: "properties-of-real-numbers",
      title: "Properties of Real Numbers",
      description:
        "Use number properties to explain, simplify, and justify algebraic reasoning.",
      status: "locked",
      path: "/lesson-engine/properties-of-real-numbers",
    },
    {
      id: "order-of-operations",
      title: "Order of Operations and Structure",
      description:
        "Analyze the structure of expressions and evaluate them accurately.",
      status: "locked",
      path: "/lesson-engine/order-of-operations",
    },
    {
      id: "combining-like-terms",
      title: "Combining Like Terms",
      description:
        "Recognize equivalent terms and simplify expressions using mathematical structure.",
      status: "locked",
      path: "/lesson-engine/combining-like-terms",
    },
    {
      id: "distributive-property",
      title: "The Distributive Property",
      description:
        "Use area models, algebra tiles, and symbolic reasoning to understand distribution.",
      status: "locked",
      path: "/lesson-engine/distributive-property",
    },
    {
      id: "evaluating-expressions",
      title: "Evaluating Expressions",
      description:
        "Substitute values, interpret results, and connect expressions to real situations.",
      status: "locked",
      path: "/lesson-engine/evaluating-expressions",
    },
    {
      id: "translating-verbal-expressions",
      title: "Translating Verbal Expressions",
      description:
        "Translate relationships between words, symbols, tables, and diagrams.",
      status: "locked",
      path: "/lesson-engine/translating-verbal-expressions",
    },
    {
      id: "foundations-project",
      title: "Foundations of Algebra Project",
      description:
        "Create a mathematical model that uses variables and expressions to explain a real-world relationship.",
      status: "locked",
      path: "/projects/algebra-foundations",
    },
  ],

  finalProject: {
    title: "Algebra in the Real World",
    description:
      "Design and present a mathematical model that uses algebra to analyze a meaningful real-world problem. Explain your variables, assumptions, equations, representations, and conclusions.",
    path: "/projects/algebra-in-the-real-world",
  },

  certificateRequirement:
    "Complete all course modules, required investigations, portfolio artifacts, assessments, and capstone projects",
};