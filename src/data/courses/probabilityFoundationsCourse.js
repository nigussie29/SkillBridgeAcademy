export const probabilityFoundationsCourse = {
  id: "probability-foundations",
  slug: "probability-foundations",

  title: "Probability Foundations",

  category: "School of Mathematics",

 description:
  "Develop a rigorous, visual, and applied understanding of probability through formal reasoning, simulation, mathematical modeling, AP Statistics investigations, real-world applications, and introductory Python experiments.",

level: "AP Statistics / College Preparatory",

  duration: "10–12 weeks",

  progress: 0,

  backPath: "/library/mathematics",

  backLabel: "Back to School of Mathematics",

  startPath:
    "/library/mathematics/probability-foundations/module/1",

  outcomes: [
    "Describe experiments, outcomes, events, and sample spaces.",
    "Calculate theoretical and experimental probabilities.",
    "Represent probability using fractions, decimals, and percentages.",
    "Use tables, tree diagrams, lists, and simulations.",
    "Compare theoretical probability with experimental results.",
    "Apply probability to real-world decisions.",
    "Use counting techniques to solve probability problems.",
    "Explain independent, dependent, and conditional events.",
    "Create probability simulations using Python.",
    "Complete a portfolio-ready probability investigation.",
  ],

  modules: [
    {
      id: 1,
      title: "Introduction to Probability",

      description:
        "Explore experiments, outcomes, events, sample spaces, theoretical probability, experimental probability, and visual simulations.",

      level: "Foundation",

      duration: "8–10 hours",

      lessonCount: 8,

      status: "available",

      path:
        "/library/mathematics/probability-foundations/module/1",
    },

    {
      id: 2,
      title: "Counting Techniques",

      description:
        "Use organized lists, tree diagrams, the Fundamental Counting Principle, permutations, and combinations.",

      level: "Foundation",

      duration: "10–12 hours",

      lessonCount: 8,

      status: "planned",
    },

    {
      id: 3,
      title: "Compound and Conditional Probability",

      description:
        "Study unions, intersections, independent events, dependent events, conditional probability, and Bayes' reasoning.",

      level: "Intermediate",

      duration: "12–14 hours",

      lessonCount: 8,

      status: "planned",
    },

    {
      id: 4,
      title: "Random Variables and Expected Value",

      description:
        "Model uncertain quantities using random variables, distributions, and expected value.",

      level: "Intermediate",

      duration: "10–12 hours",

      lessonCount: 8,

      status: "planned",
    },

    {
      id: 5,
      title: "Binomial Probability",

      description:
        "Explore repeated independent trials, binomial distributions, expected outcomes, and applications.",

      level: "Intermediate",

      duration: "10–12 hours",

      lessonCount: 8,

      status: "planned",
    },

    {
      id: 6,
      title: "Probability Through Simulation",

      description:
        "Design coin, dice, card, spinner, and random-process simulations using technology and Python.",

      level: "Intermediate",

      duration: "10–12 hours",

      lessonCount: 8,

      status: "planned",
    },

    {
      id: 7,
      title: "Probability in Data, Finance, and AI",

      description:
        "Apply probability to risk, prediction, classification, data analysis, finance, and artificial intelligence.",

      level: "Advanced",

      duration: "12–14 hours",

      lessonCount: 8,

      status: "planned",
    },

    {
      id: 8,
      title: "Probability Research Project",

      description:
        "Plan, conduct, analyze, and communicate an original probability experiment or simulation.",

      level: "Capstone",

      duration: "12–16 hours",

      lessonCount: 8,

      status: "planned",
    },
  ],

 lessons: Array.from({ length: 64 }),

  finalProject: {
    title: "Probability Experiment and Simulation",

    description:
      "Design a probability question, predict the theoretical result, conduct or simulate repeated trials, analyze the evidence, and communicate your findings.",

    path: null,
  },

  certificateRequirement:
    "Complete all modules, mastery checks, simulations, and the final project.",
};