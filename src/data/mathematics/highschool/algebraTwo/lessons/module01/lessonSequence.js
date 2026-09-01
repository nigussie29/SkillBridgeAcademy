
const module01LessonSequence = [
  {
    lessonNumber: 1,
    title: "Understanding Functions in Algebra II",
    slug: "understanding-functions-in-algebra-ii",

    focus:
      "Strengthen function reasoning through inputs, outputs, representations, function tests, notation, and real-world relationships.",

    reasoningPathway:
      "Situation → quantities → input/output → relation → function? → represent → interpret",

    creatorDirection:
      "Build an original input-output model and explain why it is or is not a function.",
  },

  {
    lessonNumber: 2,
    title: "Domain, Range, and Function Behavior",
    slug: "domain-range-and-function-behavior",

    focus:
      "Analyze domains, ranges, intervals, increasing and decreasing behavior, extrema, and realistic restrictions.",

    reasoningPathway:
      "Function → valid inputs → possible outputs → behavior → restrictions → interpret",

    creatorDirection:
      "Analyze a real function and produce a domain-range and behavior report.",
  },

  {
    lessonNumber: 3,
    title: "Parent Functions and Function Families",
    slug: "parent-functions-and-function-families",

    focus:
      "Recognize major function families and connect equations, graphs, domains, ranges, and characteristic behavior.",

    reasoningPathway:
      "Pattern → family → parent function → graph → domain/range → behavior → compare",

    creatorDirection:
      "Create a function-family comparison guide using multiple representations.",
  },

  {
    lessonNumber: 4,
    title: "Translations: Moving Functions",
    slug: "translations-moving-functions",

    focus:
      "Understand horizontal and vertical translations by reasoning from changes in equations to changes in graphs.",

    reasoningPathway:
      "Parent function → equation change → predict movement → graph → verify → interpret",

    creatorDirection:
      "Design and explain translated functions from a chosen parent function.",
  },

  {
    lessonNumber: 5,
    title: "Reflections, Stretches, and Compressions",
    slug: "reflections-stretches-and-compressions",

    focus:
      "Analyze how coefficients and signs transform the shape, orientation, and scale of function graphs.",

    reasoningPathway:
      "Parent → transformation → predict → compare → verify → explain",

    creatorDirection:
      "Build a transformation studio comparing reflections, stretches, and compressions.",
  },

  {
    lessonNumber: 6,
    title: "Combining and Composing Functions",
    slug: "combining-and-composing-functions",

    focus:
      "Combine functions using operations and composition while interpreting how one function can feed its output into another.",

    reasoningPathway:
      "Function A + Function B → operate/compose → evaluate → domain → interpret → code",

    creatorDirection:
      "Create a two-stage real-world process represented by composed functions.",
  },

  {
    lessonNumber: 7,
    title: "Piecewise Functions and Real-World Modeling",
    slug: "piecewise-functions-and-real-world-modeling",

    focus:
      "Model situations where different rules apply under different conditions using piecewise functions.",

    reasoningPathway:
      "Situation → conditions → intervals → rules → piecewise model → test → interpret",

    creatorDirection:
      "Build a real-world pricing, tax, shipping, or service model with multiple rules.",
  },

  {
    lessonNumber: 8,
    title: "Module 1 Function Transformation Synthesis & Creator Project",
    slug: "module-1-function-transformation-synthesis",

    focus:
      "Synthesize function behavior, families, transformations, composition, piecewise functions, modeling, coding, and interpretation.",

    reasoningPathway:
      "Situation → function → analyze → transform → represent → compose/model → validate → code → create",

    creatorDirection:
      "Produce a portfolio-quality function investigation demonstrating complete Module 1 mastery.",
  },
];

export function getModule01LessonPlanByNumber(
  lessonNumber
) {
  return (
    module01LessonSequence.find(
      (lesson) =>
        lesson.lessonNumber ===
        Number(lessonNumber)
    ) || null
  );
}

export function getModule01LessonPlanBySlug(
  slug
) {
  return (
    module01LessonSequence.find(
      (lesson) =>
        lesson.slug === slug
    ) || null
  );
}

export default module01LessonSequence;