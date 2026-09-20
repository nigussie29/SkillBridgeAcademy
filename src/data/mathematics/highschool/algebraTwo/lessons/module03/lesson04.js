const lesson04 = {
  id: "algebra-two-module-03-lesson-04",
  slug: "the-discriminant",

  courseId: "algebra-2",
  courseTitle: "Algebra II",

  moduleNumber: 3,
  moduleTitle: "Quadratic Functions and Equations",
  lessonNumber: 4,

  title: "The Discriminant",

  subtitle:
    "Calculate b² - 4ac, use it to anticipate solution behavior, and connect algebraic evidence to the graph of a quadratic.",

  duration: "80-95 minutes",
  level: "Intermediate",
  status: "Available",

  essentialQuestion:
    "What can the discriminant tell us about a quadratic equation before we fully solve it?",

  bigIdea:
    "The discriminant, D = b² - 4ac, is the quantity under the square root in the quadratic formula. Its value gives advance information about the real-solution behavior of a quadratic equation. Computing it correctly requires standard form, careful coefficient signs, and disciplined arithmetic.",

  problemFirst: {
    title: "Predict Before Solving",
    scenario:
      "Three quadratic equations look similar: x² - 4x + 3 = 0, x² - 4x + 4 = 0, and x² - 4x + 5 = 0. Their graphs behave differently at the x-axis. Before solving any of them, calculate b² - 4ac for each and look for a connection between that number and the graph.",
    questions: [
      "What are a, b, and c for each equation?",
      "What is b² - 4ac for each equation?",
      "Which graph crosses the x-axis twice?",
      "Which graph touches the x-axis once?",
      "Which graph does not meet the x-axis?",
      "How might the sign of b² - 4ac help us predict graph behavior before solving?",
    ],
  },

  definitionTable: {
    title: "Definitions for the Discriminant",
    description:
      "These terms connect the expression b² - 4ac to the quadratic formula and to graph behavior.",
    columns: [
      { key: "term", label: "Term" },
      { key: "definition", label: "Definition" },
      { key: "example", label: "Example / Meaning" },
    ],
    rows: [
      {
        term: "Discriminant",
        definition:
          "The quantity b² - 4ac in the quadratic formula.",
        example: "D = b² - 4ac",
      },
      {
        term: "Standard form",
        definition:
          "The form ax² + bx + c = 0 used to identify a, b, and c.",
        example: "2x² - 3x - 5 = 0",
      },
      {
        term: "Radicand",
        definition:
          "The expression inside a square-root symbol.",
        example: "In √(b² - 4ac), the discriminant is the radicand.",
      },
      {
        term: "Positive discriminant",
        definition:
          "A discriminant greater than zero.",
        example: "D = 9 > 0",
      },
      {
        term: "Zero discriminant",
        definition:
          "A discriminant equal to zero.",
        example: "D = 0",
      },
      {
        term: "Negative discriminant",
        definition:
          "A discriminant less than zero.",
        example: "D = -4 < 0",
      },
      {
        term: "Prediction",
        definition:
          "A conclusion made before fully solving the equation, based on the discriminant.",
        example: "D > 0 indicates two distinct real roots.",
      },
    ],
  },

  mainConceptTable: {
    title: "Main Concepts for the Discriminant",
    description:
      "The discriminant is small in appearance but powerful in meaning. It depends completely on correct coefficient identification and arithmetic.",
    columns: [
      { key: "concept", label: "Main Concept" },
      { key: "rule", label: "Mathematical Rule" },
      { key: "meaning", label: "What You Should Understand" },
    ],
    rows: [
      {
        concept: "Standard form first",
        rule: "ax² + bx + c = 0",
        meaning:
          "The values a, b, and c must come from standard form.",
      },
      {
        concept: "Discriminant formula",
        rule: "D = b² - 4ac",
        meaning:
          "This is exactly the expression under the square root in the quadratic formula.",
      },
      {
        concept: "Keep coefficient signs",
        rule: "Substitute signed a, b, c",
        meaning:
          "A negative b or c must be placed in parentheses during substitution.",
      },
      {
        concept: "Positive D",
        rule: "D > 0",
        meaning:
          "The square root is a positive real number, so the quadratic formula produces two distinct real solutions.",
      },
      {
        concept: "Zero D",
        rule: "D = 0",
        meaning:
          "The ± term contributes zero, so both branches collapse to one repeated real solution.",
      },
      {
        concept: "Negative D",
        rule: "D < 0",
        meaning:
          "The square root is not real, so there are no real x-intercepts.",
      },
      {
        concept: "Predict before solving",
        rule: "Compute D first",
        meaning:
          "The discriminant can tell you the type of real-solution behavior before you finish the quadratic formula.",
      },
    ],
  },

  tikzGraphs: [
    {
      id: "discriminant-three-cases",
      title: "How the Discriminant Controls the Graph",
      equation: "y = x² - 4x + c",
      src: "/graphs/algebra-2/module-3/lesson-04/discriminant-three-cases.svg",
      alt:
        "Three parabolas y equals x squared minus 4x plus 3, plus 4, and plus 5 showing two x-intercepts, one tangent point, and no x-intercepts.",
      caption:
        "For y = x² - 4x + c, the discriminant is D = 16 - 4c. When c = 3, D = 4 > 0 and the parabola crosses the x-axis at (1, 0) and (3, 0). When c = 4, D = 0 and the parabola touches the x-axis once at (2, 0). When c = 5, D = -4 < 0 and the parabola stays above the x-axis, so there are no real roots. All three graphs share the axis of symmetry x = 2.",
      sourceNote:
        "Graph design source: TikZ + PGFPlots. Browser display: SVG companion asset.",
    },
    {
      id: "discriminant-repeated-root",
      title: "A Zero Discriminant Produces a Repeated Root",
      equation: "y = x² - 6x + 9 = (x - 3)²",
      src: "/graphs/algebra-2/module-3/lesson-04/discriminant-repeated-root.svg",
      alt:
        "Parabola y equals x squared minus 6x plus 9 touching the x-axis at x equals 3 with vertex 3 comma 0.",
      caption:
        "For x² - 6x + 9 = 0, D = 36 - 36 = 0. The graph touches the x-axis at the single repeated root x = 3.",
      sourceNote:
        "Graph design source: TikZ + PGFPlots. Browser display: SVG companion asset.",
    },
  ],

  learningObjectives: [
    "Define the discriminant as b² - 4ac.",
    "Write a quadratic equation in standard form before calculating the discriminant.",
    "Identify a, b, and c including their signs.",
    "Calculate the discriminant accurately.",
    "Use parentheses to avoid sign errors.",
    "Use the discriminant to predict real-solution behavior.",
    "Connect discriminant values to x-intercepts on quadratic graphs.",
    "Explain why the discriminant appears inside the quadratic formula.",
    "Verify predictions by solving or graphing selected examples.",
  ],

  prerequisiteKnowledge: [
    "Quadratic standard form",
    "Quadratic formula",
    "Signed-number arithmetic",
    "Square roots",
    "x-intercepts",
    "Graphing parabolas",
  ],

  formulas: [
    {
      name: "Discriminant",
      formula: "D = b² - 4ac",
      meaning:
        "This quantity determines what kind of real-root behavior the quadratic formula can produce.",
    },
    {
      name: "Quadratic Formula Connection",
      formula: "x = (-b ± √D) / (2a)",
      meaning:
        "The discriminant is the radicand in the quadratic formula.",
    },
    {
      name: "Positive Case",
      formula: "D > 0",
      meaning:
        "The equation has two distinct real roots.",
    },
    {
      name: "Zero Case",
      formula: "D = 0",
      meaning:
        "The equation has one repeated real root.",
    },
    {
      name: "Negative Case",
      formula: "D < 0",
      meaning:
        "The equation has no real roots.",
    },
  ],

  workedExamples: [
    {
      id: "example-1",
      title: "Positive Discriminant",
      problem: "Find the discriminant of x² - 5x + 6 = 0 and predict the real-root behavior.",
      plan:
        "Identify a = 1, b = -5, c = 6, then compute D = b² - 4ac.",
      solutionSteps: [
        "Write the coefficients: a = 1, b = -5, c = 6.",
        "Substitute: D = (-5)² - 4(1)(6).",
        "Compute: D = 25 - 24 = 1.",
        "Because D > 0, predict two distinct real roots.",
        "Verification: the equation factors as (x - 2)(x - 3) = 0, giving x = 2 and x = 3.",
      ],
      answer: "D = 1; two distinct real roots.",
      interpretation:
        "The related parabola crosses the x-axis at two different points.",
    },
    {
      id: "example-2",
      title: "Zero Discriminant",
      problem: "Find the discriminant of x² - 6x + 9 = 0.",
      plan:
        "Calculate D and interpret what D = 0 means before solving.",
      solutionSteps: [
        "Identify a = 1, b = -6, c = 9.",
        "Substitute: D = (-6)² - 4(1)(9).",
        "Compute: D = 36 - 36 = 0.",
        "Because D = 0, predict one repeated real root.",
        "Verification: (x - 3)² = 0, so x = 3.",
      ],
      answer: "D = 0; one repeated real root x = 3.",
      interpretation:
        "The graph touches the x-axis at the vertex (3, 0).",
    },
    {
      id: "example-3",
      title: "Negative Discriminant",
      problem: "Find the discriminant of x² + 2x + 5 = 0.",
      plan:
        "Calculate D first and use its sign to decide whether real x-intercepts are possible.",
      solutionSteps: [
        "Identify a = 1, b = 2, c = 5.",
        "Substitute: D = 2² - 4(1)(5).",
        "Compute: D = 4 - 20 = -16.",
        "Because D < 0, predict no real roots.",
        "Graphically, the parabola does not meet the x-axis.",
      ],
      answer: "D = -16; no real roots.",
      interpretation:
        "The quadratic can still have complex solutions, but its graph has no real x-intercepts.",
    },
    {
      id: "example-4",
      title: "Engineering Design Check",
      problem:
        "An arch model leads to the equation -x² + 8x - 12 = 0 for ground-level intersections. Use the discriminant to predict how many real ground intersections exist.",
      plan:
        "Identify signed coefficients, compute D, then interpret the result as physical intersection points.",
      solutionSteps: [
        "Identify a = -1, b = 8, c = -12.",
        "Substitute: D = 8² - 4(-1)(-12).",
        "Compute: D = 64 - 48 = 16.",
        "Because D > 0, predict two distinct real intersections.",
        "If needed, solving confirms x = 2 and x = 6.",
      ],
      answer: "D = 16; the arch intersects ground level at two real x-values.",
      interpretation:
        "The discriminant gives a structural answer before the full root calculation is completed.",
    },
  ],

  realWorldApplications: [
    {
      id: "engineering",
      field: "Engineering",
      title: "Will a Design Intersect a Boundary?",
      application:
        "Before calculating exact intersection coordinates, an engineer can use the discriminant to determine whether a parabolic design crosses, touches, or misses a reference level.",
      model: "-x² + 8x - 12 = 0",
      question:
        "Why might knowing the number of intersections be useful before calculating their exact locations?",
    },
    {
      id: "physics",
      field: "Physics",
      title: "Will a Projectile Reach a Target Height?",
      application:
        "Setting a projectile height model equal to a target height creates a quadratic equation. The discriminant can reveal whether the target height is reached twice, once, or not at all.",
      model: "-16t² + 64t + 80 = H",
      question:
        "What physical meaning could D = 0 have for a target height?",
    },
    {
      id: "business",
      field: "Business",
      title: "Break-Even Feasibility",
      application:
        "A profit model set equal to zero forms a quadratic equation. The discriminant can indicate whether real break-even production levels exist.",
      model: "P(x) = ax² + bx + c = 0",
      question:
        "What might it mean if a profit model has D < 0?",
    },
    {
      id: "robotics",
      field: "Robotics",
      title: "Path and Boundary Intersection",
      application:
        "A simplified parabolic path and a boundary equation can produce a quadratic intersection problem. The discriminant tells whether the path meets the boundary in real coordinates.",
      model: "ax² + bx + c = 0",
      question:
        "How could a robot use the sign of D as a fast preliminary decision before computing exact intersection points?",
    },
  ],

  pythonLab: {
    title: "Python Lab — Build a Discriminant Checker",
    objective:
      "Translate D = b² - 4ac into Python and use conditional logic to classify the real-root behavior of quadratic equations.",
    connection:
      "The code follows the mathematics exactly: identify a, b, c; compute D; then use the sign of D to classify the predicted root behavior.",
    code: `def discriminant(a, b, c):
    return b**2 - 4*a*c

def classify_roots(a, b, c):
    d = discriminant(a, b, c)

    if d > 0:
        return d, "two distinct real roots"
    elif d == 0:
        return d, "one repeated real root"
    else:
        return d, "no real roots"

print(classify_roots(1, -5, 6))
print(classify_roots(1, -6, 9))
print(classify_roots(1, 2, 5))`,
    questions: [
      "Which line of code represents b² - 4ac?",
      "Why is b**2 used instead of b^2 in Python?",
      "How do the if, elif, and else branches correspond to D > 0, D = 0, and D < 0?",
      "What output should the three sample equations produce?",
      "How could you extend the code to calculate the actual roots when D ≥ 0?",
    ],
    extension:
      "Create a table of at least six quadratic equations, calculate D by hand, then use your Python function to verify every classification.",
  },

  lumineryGuidance: {
    title: "Luminery AI — Discriminant Coach",
    message:
      "Luminery should help students reason from equation structure to a discriminant prediction before they fully solve. It should focus on coefficient signs, substitution accuracy, interpretation, and graph evidence.",
    prompt:
      "I am analyzing a quadratic with the discriminant. Do not solve the whole quadratic for me first. Ask me one question at a time so I put the equation in standard form, identify a, b, c with signs, compute D = b² - 4ac, interpret its sign, and connect the prediction to the graph.",
    coachingQuestions: [
      "Is the equation in standard form ax² + bx + c = 0?",
      "What are a, b, and c, including their signs?",
      "What is b² after using the correct signed value of b?",
      "What is 4ac?",
      "What is D = b² - 4ac?",
      "Is D positive, zero, or negative?",
      "What does that predict about real roots?",
      "What should the parabola do at the x-axis?",
      "How could factoring, the quadratic formula, or a graph verify your prediction?",
    ],
    masteryCheck:
      "A learner demonstrates mastery when they can calculate D without sign errors, predict real-root behavior before solving, explain the graph connection, and verify selected predictions independently.",
  },

  independentPractice: [
    {
      question: "Find D for x² - 7x + 10 = 0 and predict the real-root behavior.",
      answer: "D = 49 - 40 = 9; two distinct real roots.",
      difficulty: "Foundation",
    },
    {
      question: "Find D for x² + 6x + 9 = 0.",
      answer: "D = 36 - 36 = 0; one repeated real root.",
      difficulty: "Foundation",
    },
    {
      question: "Find D for x² + 4x + 8 = 0.",
      answer: "D = 16 - 32 = -16; no real roots.",
      difficulty: "Foundation",
    },
    {
      question: "Find D for 2x² - 3x - 5 = 0.",
      answer: "D = 9 + 40 = 49; two distinct real roots.",
      difficulty: "Intermediate",
    },
    {
      question: "Find D for 3x² + 12x + 12 = 0.",
      answer: "D = 144 - 144 = 0; one repeated real root.",
      difficulty: "Intermediate",
    },
    {
      question: "Find D for 4x² + 4x + 5 = 0.",
      answer: "D = 16 - 80 = -64; no real roots.",
      difficulty: "Intermediate",
    },
    {
      question: "Why must c = -5 be substituted as (-5) in D = b² - 4ac?",
      answer:
        "The sign is part of the coefficient. Losing it changes 4ac and therefore changes the discriminant.",
      difficulty: "Reasoning",
    },
    {
      question:
        "A graph crosses the x-axis twice. What sign should you expect for the discriminant? Explain.",
      answer:
        "D > 0, because two distinct real roots correspond to two x-intercepts.",
      difficulty: "Graph Connection",
    },
    {
      question:
        "A student computes D for x² - 4x + 5 = 0 as 16 + 20 = 36. Identify the error.",
      answer:
        "They changed subtraction to addition. D = 16 - 20 = -4.",
      difficulty: "Error Analysis",
    },
    {
      question:
        "Create one quadratic with D > 0, one with D = 0, and one with D < 0. Show each calculation.",
      answer:
        "Answers vary; each equation must be in standard form and the three discriminants must have the required signs.",
      difficulty: "Creation",
    },
  ],

  groupWork: [
    {
      question:
        "Compare x² - 4x + 3, x² - 4x + 4, and x² - 4x + 5. Compute D for each and describe how changing only c changes the graph at the x-axis.",
      sampleAnswer:
        "D values are 4, 0, and -4, corresponding to two crossings, one touch, and no crossing.",
    },
    {
      question:
        "Error analysis: A student identifies b = 5 in x² - 5x + 6 = 0. Explain what coefficient should be used and why.",
      sampleAnswer:
        "b = -5 because the sign belongs to the coefficient.",
    },
    {
      question:
        "Without fully solving, classify the real-root behavior of 5x² + 2x + 7 = 0.",
      sampleAnswer:
        "D = 4 - 140 = -136, so no real roots.",
    },
    {
      question:
        "Sketch one parabola for each case D > 0, D = 0, and D < 0. Mark the x-axis behavior clearly.",
      sampleAnswer:
        "D > 0 crosses twice; D = 0 touches once; D < 0 does not meet the x-axis.",
    },
    {
      question:
        "Explain why D = 0 causes the + and - branches of the quadratic formula to produce the same root.",
      sampleAnswer:
        "Because √0 = 0, adding or subtracting zero gives the same numerator.",
    },
    {
      question:
        "A projectile target-height equation has D < 0. What does that tell you before you solve? Discuss the physical meaning.",
      sampleAnswer:
        "There is no real time at which the projectile reaches that target height.",
    },
    {
      question:
        "Write a quadratic with a repeated root at x = 4. Expand it and verify that its discriminant is zero.",
      sampleAnswer:
        "(x-4)² = x² - 8x + 16; D = 64 - 64 = 0.",
    },
    {
      question:
        "Build a Python or calculator table for y = x² - 4x + c using c = 2, 3, 4, 5, 6. Compute D and note the graph behavior for each value.",
      sampleAnswer:
        "D = 16 - 4c; as c increases through 4, D changes from positive to zero to negative.",
    },
    {
      question:
        "Why is the discriminant useful even when you plan to solve using another method such as factoring?",
      sampleAnswer:
        "It predicts the kind of roots and provides a check against the final result.",
    },
    {
      question:
        "Create a group poster connecting Coefficients → D = b² - 4ac → Sign of D → Root Behavior → Graph Behavior.",
      sampleAnswer:
        "The poster should correctly map positive, zero, and negative D to the three real-graph cases.",
    },
  ],

  quiz: [
    {
      question: "State the discriminant formula.",
      answer: "D = b² - 4ac.",
    },
    {
      question: "Find D for 2x² + 5x - 3 = 0.",
      answer: "D = 25 + 24 = 49.",
    },
    {
      question: "What does D = 0 predict?",
      answer: "One repeated real root; the parabola touches the x-axis once.",
    },
    {
      question: "Find D for x² + 2x + 6 = 0 and interpret it.",
      answer: "D = 4 - 24 = -20; no real roots.",
    },
    {
      question:
        "A parabola has two distinct x-intercepts. What must be true about its discriminant?",
      answer: "The discriminant must be positive.",
    },
  ],

  homework: [
    {
      question: "Find D for x² - 9x + 20 = 0.",
      answer: "D = 81 - 80 = 1; two distinct real roots.",
      difficulty: "Foundation",
    },
    {
      question: "Find D for x² + 10x + 25 = 0.",
      answer: "D = 100 - 100 = 0; one repeated real root.",
      difficulty: "Foundation",
    },
    {
      question: "Find D for x² + 2x + 10 = 0.",
      answer: "D = 4 - 40 = -36; no real roots.",
      difficulty: "Foundation",
    },
    {
      question: "Find D for 3x² - 7x - 6 = 0.",
      answer: "D = 49 + 72 = 121; two distinct real roots.",
      difficulty: "Intermediate",
    },
    {
      question: "Find D for 4x² + 12x + 9 = 0.",
      answer: "D = 144 - 144 = 0; one repeated real root.",
      difficulty: "Intermediate",
    },
    {
      question: "Find D for 5x² + 4x + 3 = 0.",
      answer: "D = 16 - 60 = -44; no real roots.",
      difficulty: "Intermediate",
    },
    {
      question:
        "Explain why the discriminant is a useful check after factoring a quadratic.",
      answer:
        "The factorization's root count should agree with the sign of D, so disagreement can reveal an algebra error.",
      difficulty: "Intermediate",
    },
    {
      question:
        "An engineering model produces 2x² - 12x + 18 = 0. Find D and explain the geometric meaning.",
      answer:
        "D = 144 - 144 = 0; the model meets the reference level at one repeated position.",
      difficulty: "Advanced",
    },
    {
      question:
        "A business break-even equation is -x² + 10x - 30 = 0. Find D and interpret the result in terms of real break-even points.",
      answer:
        "D = 100 - 120 = -20; the model has no real break-even points.",
      difficulty: "Advanced",
    },
    {
      question:
        "Create a real-world quadratic model and use only the discriminant to make a meaningful prediction before calculating exact roots. Explain what the prediction means in context.",
      sampleAnswer:
        "Answers vary. The equation, coefficient identification, D calculation, prediction, and contextual interpretation must be consistent.",
      difficulty: "Application / Creation",
    },
  ],

  commonMistakes: [
    {
      mistake: "Calculating D before writing standard form.",
      correction:
        "Rewrite the equation as ax² + bx + c = 0 first.",
    },
    {
      mistake: "Dropping a negative sign from b or c.",
      correction:
        "Use parentheses around negative coefficients during substitution.",
    },
    {
      mistake: "Using b² + 4ac instead of b² - 4ac.",
      correction:
        "The discriminant is always b² - 4ac.",
    },
    {
      mistake: "Thinking D itself is a root.",
      correction:
        "D predicts root behavior; it is not generally one of the solutions.",
    },
    {
      mistake: "Saying D < 0 means the equation has no solutions at all.",
      correction:
        "It means there are no real solutions; complex solutions may still exist.",
    },
    {
      mistake: "Ignoring graph evidence.",
      correction:
        "Use the graph as a visual check: two crossings, one touch, or no real x-intercepts should agree with D.",
    },
  ],

  summary: [
    "The discriminant is D = b² - 4ac.",
    "It is the radicand in the quadratic formula.",
    "Write the equation in standard form before identifying a, b, and c.",
    "Keep every coefficient sign during substitution.",
    "D > 0 predicts two distinct real roots, so the parabola crosses the x-axis twice.",
    "D = 0 predicts one repeated real root, so the parabola touches the x-axis once.",
    "D < 0 predicts no real roots, so the parabola does not intersect the x-axis.",
    "The discriminant connects symbolic algebra to graph x-axis behavior.",
    "Use the discriminant as both a prediction tool and a verification tool.",
  ],
};

export default lesson04;
