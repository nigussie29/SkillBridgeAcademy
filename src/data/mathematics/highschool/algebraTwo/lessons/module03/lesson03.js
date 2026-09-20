const lesson03 = {
  id: "algebra-two-module-03-lesson-03",
  slug: "solving-quadratic-equations-with-the-quadratic-formula",

  courseId: "algebra-2",
  courseTitle: "Algebra II",

  moduleNumber: 3,
  moduleTitle: "Quadratic Functions and Equations",
  lessonNumber: 3,

  title: "Solving Quadratic Equations with the Quadratic Formula",

  subtitle:
    "Use a universal solving method, interpret exact radical solutions, verify roots, and connect the formula to the graph of a parabola.",

  duration: "90-105 minutes",
  level: "Intermediate",
  status: "Available",

  essentialQuestion:
    "How can the quadratic formula solve any quadratic equation, and how do its solutions connect to the graph?",

  bigIdea:
    "The quadratic formula is a universal method for solving ax² + bx + c = 0. It comes from completing the square, so it is not an isolated rule. Careful identification of a, b, and c, correct use of ±, exact radical simplification, and verification connect the symbolic formula to the actual x-intercepts of the related parabola.",

  problemFirst: {
    title: "When Factoring Is Not Obvious",
    scenario:
      "Consider x² - 2x - 1 = 0. No pair of integers multiplies to -1 and adds to -2, so ordinary integer factoring does not reveal the roots. Use the graph to estimate the x-intercepts first. Then use the quadratic formula to obtain exact solutions and compare the exact radicals with the graph.",
    questions: [
      "Why is integer factoring not an efficient first method here?",
      "Approximately where does the graph cross the x-axis?",
      "What are a, b, and c in x² - 2x - 1 = 0?",
      "Why must the sign of b be included when substituting into the formula?",
      "Why does the ± symbol create two possible solutions?",
      "How can an exact radical answer be compared with a graph that shows decimal coordinates?",
    ],
  },

  definitionTable: {
    title: "Definitions for the Quadratic Formula",
    description:
      "These terms help students use the formula accurately and connect symbolic solutions to graph behavior.",
    columns: [
      { key: "term", label: "Term" },
      { key: "definition", label: "Definition" },
      { key: "example", label: "Example / Meaning" },
    ],
    rows: [
      {
        term: "Quadratic formula",
        definition:
          "A formula that gives the solutions of ax² + bx + c = 0, where a ≠ 0.",
        example: "x = (-b ± √(b² - 4ac)) / (2a)",
      },
      {
        term: "Coefficient",
        definition:
          "A numerical multiplier of a variable term.",
        example: "In 2x² + 3x - 2 = 0, a = 2 and b = 3.",
      },
      {
        term: "Constant term",
        definition:
          "The term with no variable.",
        example: "In 2x² + 3x - 2 = 0, c = -2.",
      },
      {
        term: "Radicand",
        definition:
          "The quantity inside a square-root symbol.",
        example: "In √(b² - 4ac), the radicand is b² - 4ac.",
      },
      {
        term: "Exact solution",
        definition:
          "A solution written without rounding, often using radicals.",
        example: "x = (5 ± √21)/2",
      },
      {
        term: "Approximate solution",
        definition:
          "A rounded decimal representation of an exact solution.",
        example: "(5 + √21)/2 ≈ 4.79",
      },
      {
        term: "Root / zero",
        definition:
          "An x-value that makes the quadratic equal zero.",
        example: "A real root r corresponds to the graph point (r, 0).",
      },
    ],
  },

  mainConceptTable: {
    title: "Main Concepts for Using the Quadratic Formula",
    description:
      "Accuracy depends on structure: standard form, correct coefficients, parentheses, both ± branches, and verification.",
    columns: [
      { key: "concept", label: "Main Concept" },
      { key: "rule", label: "Mathematical Rule" },
      { key: "meaning", label: "What You Should Understand" },
    ],
    rows: [
      {
        concept: "Write standard form first",
        rule: "ax² + bx + c = 0",
        meaning:
          "The coefficients a, b, and c are identified only after the equation is written with zero on one side.",
      },
      {
        concept: "Preserve coefficient signs",
        rule: "a, b, and c include their signs",
        meaning:
          "If c = -2, substitute -2, not 2. Sign errors change the radicand and roots.",
      },
      {
        concept: "Use the whole numerator",
        rule: "-b ± √(b² - 4ac)",
        meaning:
          "The negative b and the radical are both in the numerator.",
      },
      {
        concept: "Use the whole denominator",
        rule: "2a",
        meaning:
          "The entire numerator is divided by 2a.",
      },
      {
        concept: "Evaluate both branches",
        rule: "± means + and -",
        meaning:
          "One calculation uses +√(...), and the other uses -√(...).",
      },
      {
        concept: "Keep exact form",
        rule: "Simplify radicals before rounding",
        meaning:
          "Exact radical answers preserve mathematical information and should be kept unless a decimal is requested.",
      },
      {
        concept: "Verify and interpret",
        rule: "Substitute roots and compare with the graph",
        meaning:
          "Correct real solutions make the original equation zero and match x-intercepts.",
      },
    ],
  },

  tikzGraphs: [
    {
      id: "quadratic-formula-rational-roots",
      title: "Quadratic Formula and Two Rational Roots",
      equation: "y = 2x² + 3x - 2",
      src: "/graphs/algebra-2/module-3/lesson-03/quadratic-formula-rational-roots.svg",
      alt:
        "Parabola y equals 2x squared plus 3x minus 2 crossing the x-axis at x equals negative 2 and x equals one half, with vertex at negative three fourths and negative three point one two five.",
      caption:
        "For 2x² + 3x - 2 = 0, the quadratic formula gives x = 1/2 and x = -2. Those two symbolic solutions appear exactly as the two x-intercepts of the graph.",
      sourceNote:
        "Graph design source: TikZ + PGFPlots. Browser display: SVG companion asset.",
    },
    {
      id: "quadratic-formula-irrational-roots",
      title: "Exact Radical Roots and Their Decimal Graph Locations",
      equation: "y = x² - 2x - 1",
      src: "/graphs/algebra-2/module-3/lesson-03/quadratic-formula-irrational-roots.svg",
      alt:
        "Parabola y equals x squared minus 2x minus 1 with exact roots 1 minus square root of 2 and 1 plus square root of 2, approximately negative 0.414 and 2.414.",
      caption:
        "The quadratic formula gives the exact roots x = 1 ± √2. The graph displays the same roots approximately at x ≈ -0.414 and x ≈ 2.414. Exact algebra and graphical estimation describe the same mathematical objects.",
      sourceNote:
        "Graph design source: TikZ + PGFPlots. Browser display: SVG companion asset.",
    },
  ],

  learningObjectives: [
    "State and correctly use the quadratic formula.",
    "Write a quadratic equation in standard form before identifying coefficients.",
    "Identify a, b, and c including their signs.",
    "Substitute coefficients using parentheses to prevent sign errors.",
    "Evaluate both the positive and negative branches of ±.",
    "Simplify radical expressions and preserve exact solutions.",
    "Approximate radical solutions when a context requires decimals.",
    "Connect real solutions to graph x-intercepts.",
    "Verify solutions in the original equation.",
    "Explain how the quadratic formula is connected to completing the square.",
  ],

  prerequisiteKnowledge: [
    "Standard form of a quadratic equation",
    "Completing the square",
    "Square roots and radicals",
    "Order of operations",
    "Substitution with signed numbers",
    "x-intercepts and roots",
  ],

  formulas: [
    {
      name: "Quadratic Formula",
      formula: "x = (-b ± √(b² - 4ac)) / (2a)",
      meaning:
        "For ax² + bx + c = 0 with a ≠ 0, this formula produces the quadratic equation's solutions.",
    },
    {
      name: "Coefficient Identification",
      formula: "ax² + bx + c = 0",
      meaning:
        "Read a, b, and c from standard form and keep every sign attached to its coefficient.",
    },
    {
      name: "Root-Graph Connection",
      formula: "f(r) = 0 ⇔ (r, 0) is an x-intercept",
      meaning:
        "Every real solution from the formula corresponds to an x-intercept of the related parabola.",
    },
    {
      name: "Exact-to-Approximate Connection",
      formula: "Exact radical → decimal approximation",
      meaning:
        "Keep exact form first; approximate only when graphing, measuring, or interpreting a real context.",
    },
  ],

  workedExamples: [
    {
      id: "example-1",
      title: "A Quadratic with Two Rational Roots",
      problem: "Solve 2x² + 3x - 2 = 0 using the quadratic formula.",
      plan:
        "Identify a = 2, b = 3, c = -2, substitute carefully, simplify the square root, and evaluate both ± branches.",
      solutionSteps: [
        "Identify the coefficients: a = 2, b = 3, c = -2.",
        "Substitute: x = [-3 ± √(3² - 4(2)(-2))] / [2(2)].",
        "Simplify the radicand: 9 + 16 = 25.",
        "So x = (-3 ± 5) / 4.",
        "Positive branch: x = (-3 + 5)/4 = 1/2.",
        "Negative branch: x = (-3 - 5)/4 = -2.",
        "Verify both values in the original equation.",
      ],
      answer: "x = 1/2 or x = -2",
      interpretation:
        "The graph y = 2x² + 3x - 2 crosses the x-axis at (1/2, 0) and (-2, 0).",
    },
    {
      id: "example-2",
      title: "A Quadratic with Irrational Roots",
      problem: "Solve x² - 5x + 1 = 0 exactly.",
      plan:
        "Use a = 1, b = -5, c = 1 and keep the radical exact.",
      solutionSteps: [
        "Identify a = 1, b = -5, c = 1.",
        "Substitute: x = [5 ± √((-5)² - 4(1)(1))] / 2.",
        "Simplify the radicand: 25 - 4 = 21.",
        "The exact solutions are x = (5 ± √21)/2.",
        "Approximate if needed: √21 ≈ 4.583.",
        "So x ≈ 4.79 or x ≈ 0.21.",
      ],
      answer: "x = (5 ± √21)/2",
      interpretation:
        "The exact radical form is preferred mathematically; decimal approximations are useful for locating the x-intercepts on a graph.",
    },
    {
      id: "example-3",
      title: "Avoiding a Sign Error",
      problem: "Solve 2x² + x - 4 = 0 using the quadratic formula.",
      plan:
        "Pay special attention to c = -4 and use parentheses during substitution.",
      solutionSteps: [
        "Identify a = 2, b = 1, c = -4.",
        "Substitute: x = [-1 ± √(1² - 4(2)(-4))] / 4.",
        "Simplify the radicand: 1 + 32 = 33.",
        "Therefore x = (-1 ± √33)/4.",
        "Approximate: √33 ≈ 5.745.",
        "So x ≈ 1.19 or x ≈ -1.69.",
        "Check each approximate value against the original equation or graph.",
      ],
      answer: "x = (-1 ± √33)/4",
      interpretation:
        "The negative constant makes -4ac positive. Parentheses during substitution prevent a common sign error.",
    },
    {
      id: "example-4",
      title: "Real-World Break-Even Model",
      problem:
        "A company's profit is modeled by P(x) = -2x² + 120x - 1000, where x is the number of units in hundreds. At what production levels is the profit zero?",
      plan:
        "Set P(x) = 0, apply the quadratic formula, then interpret the two roots as break-even production levels.",
      solutionSteps: [
        "Set profit equal to zero: -2x² + 120x - 1000 = 0.",
        "Identify a = -2, b = 120, c = -1000.",
        "Substitute: x = [-120 ± √(120² - 4(-2)(-1000))] / [2(-2)].",
        "Simplify the radicand: 14400 - 8000 = 6400.",
        "√6400 = 80, so x = (-120 ± 80)/(-4).",
        "One root is x = 10; the other is x = 50.",
        "Because x is measured in hundreds of units, the break-even levels are 1,000 units and 5,000 units.",
      ],
      answer: "Break-even occurs at 1,000 units and 5,000 units.",
      interpretation:
        "The two real roots divide the production range into regions of loss and profit. The formula produces mathematical roots; the business context gives them meaning.",
    },
  ],

  realWorldApplications: [
    {
      id: "projectile",
      field: "Physics",
      title: "Projectile Flight Time",
      application:
        "Height models often lead to quadratic equations. The quadratic formula can determine when an object reaches a particular height or returns to the ground.",
      model: "h(t) = -16t² + 64t + 80",
      question:
        "What does a negative time root mean physically, and when should it be rejected?",
    },
    {
      id: "business",
      field: "Business",
      title: "Break-Even Analysis",
      application:
        "A quadratic profit equation may cross zero at two production levels. Those roots represent break-even points.",
      model: "P(x) = -2x² + 120x - 1000",
      question:
        "How can two break-even points help a manager reason about profitable production ranges?",
    },
    {
      id: "engineering",
      field: "Engineering",
      title: "Parabolic Design Constraints",
      application:
        "Engineers can solve for positions where a parabolic arch reaches a required height by setting the model equal to that height and solving the resulting quadratic.",
      model: "y = -0.5(x - 6)² + 18",
      question:
        "Why might an engineer need both roots rather than only one?",
    },
    {
      id: "robotics",
      field: "Robotics",
      title: "Trajectory Intersections",
      application:
        "In simplified motion planning, a quadratic path can intersect a target height or boundary at two positions. Solving the quadratic locates those intersections.",
      model: "y = x² - 2x - 1",
      question:
        "How could exact roots and decimal approximations serve different purposes in a robotic system?",
    },
  ],

  pythonLab: {
    title: "Python Lab — Implement the Quadratic Formula",
    objective:
      "Translate the quadratic formula into Python, compute both roots, and compare exact mathematical reasoning with numerical output.",
    connection:
      "The code mirrors the algebraic structure: identify a, b, c; calculate b² - 4ac; take the square root; then evaluate the + and - branches separately.",
    code: `from math import sqrt

def quadratic_roots(a, b, c):
    radicand = b**2 - 4*a*c
    root1 = (-b + sqrt(radicand)) / (2*a)
    root2 = (-b - sqrt(radicand)) / (2*a)
    return root1, root2

print(quadratic_roots(2, 3, -2))
print(quadratic_roots(1, -2, -1))`,
    questions: [
      "Which Python expression represents b² - 4ac?",
      "Why are root1 and root2 calculated separately?",
      "Why must the denominator be written as (2*a)?",
      "For a = 2, b = 3, c = -2, how do the Python outputs compare with x = 1/2 and x = -2?",
      "Why does this version require the radicand to be nonnegative when using math.sqrt?",
    ],
    extension:
      "Modify the function so it also evaluates the original quadratic at each computed root and prints the verification error. Then investigate how floating-point rounding affects values that should theoretically equal zero.",
  },

  lumineryGuidance: {
    title: "Luminery AI — Quadratic Formula Coach",
    message:
      "Luminery should strengthen coefficient identification, substitution accuracy, sign reasoning, radical simplification, graph interpretation, and verification. It should not begin by handing the learner the completed formula substitution.",
    prompt:
      "I am solving a quadratic with the quadratic formula. Do not give me the final answer first. Ask me one question at a time so I write standard form, identify a, b, c with signs, substitute carefully, simplify the radicand, evaluate both ± branches, keep exact form, and verify the roots on the graph.",
    coachingQuestions: [
      "Is the equation already written as ax² + bx + c = 0?",
      "What are a, b, and c, including their signs?",
      "What does -b become after substitution?",
      "What is b² - 4ac for this equation?",
      "Have you placed the entire numerator over 2a?",
      "What are the two branches created by ±?",
      "Can the radical be simplified?",
      "Should the final answer remain exact, or does the context require a decimal?",
      "Where should the real roots appear on the graph?",
      "How can substitution verify each solution?",
    ],
    masteryCheck:
      "A learner demonstrates mastery when they can use the formula without sign or denominator errors, preserve exact solutions, explain the role of ±, connect real roots to x-intercepts, and verify results independently.",
  },

  independentPractice: [
    {
      question: "Solve x² + 3x - 4 = 0 using the quadratic formula.",
      answer: "x = 1 or x = -4.",
      difficulty: "Foundation",
    },
    {
      question: "Solve 2x² - 5x - 3 = 0 using the quadratic formula.",
      answer: "x = 3 or x = -1/2.",
      difficulty: "Foundation",
    },
    {
      question: "For 3x² + 7x - 6 = 0, identify a, b, and c.",
      answer: "a = 3, b = 7, c = -6.",
      difficulty: "Foundation",
    },
    {
      question: "Solve x² - 4x - 2 = 0 exactly.",
      answer: "x = 2 ± √6.",
      difficulty: "Intermediate",
    },
    {
      question: "Solve 2x² + x - 5 = 0 exactly.",
      answer: "x = (-1 ± √41)/4.",
      difficulty: "Intermediate",
    },
    {
      question: "Solve 3x² - 2x - 4 = 0 exactly.",
      answer: "x = (1 ± √13)/3.",
      difficulty: "Intermediate",
    },
    {
      question: "Explain why c = -7 must be substituted as (-7) in b² - 4ac.",
      answer:
        "The sign is part of the coefficient. Omitting it changes the radicand and therefore changes the solutions.",
      difficulty: "Reasoning",
    },
    {
      question: "Solve x² - 2x - 1 = 0 and approximate both roots to three decimals.",
      answer: "x = 1 ± √2 ≈ 2.414 and -0.414.",
      difficulty: "Graph Connection",
    },
    {
      question:
        "A student writes x = -b ± √(b² - 4ac) / 2a without grouping the numerator. Explain why this notation is dangerous.",
      answer:
        "It can be read as dividing only the radical by 2a. The entire numerator -b ± √(b² - 4ac) must be divided by 2a.",
      difficulty: "Error Analysis",
    },
    {
      question:
        "Create a quadratic equation with a = 2, b = -4, and c = -3. Use the quadratic formula to solve it exactly.",
      answer:
        "2x² - 4x - 3 = 0; x = 1 ± √10/2.",
      difficulty: "Creation",
    },
  ],

  groupWork: [
    {
      question:
        "Compare solving x² - 5x + 6 = 0 by factoring and by the quadratic formula. Which is more efficient here, and why?",
      sampleAnswer:
        "Both give x=2 and x=3. Factoring is more efficient because the factor structure is immediate.",
    },
    {
      question:
        "Derive the quadratic formula from ax² + bx + c = 0 by completing the square. Divide the derivation among group members and explain every algebraic move.",
      sampleAnswer:
        "The derivation should normalize by a, move c/a, complete the square with (b/2a)², take square roots, and isolate x.",
    },
    {
      question:
        "Error analysis: For 2x² + 3x - 2 = 0, a student uses c = 2. Predict how this changes the radicand and explain why the result is invalid.",
      sampleAnswer:
        "Using c=2 gives 9-16=-7 instead of 25. The sign of c was lost, so the substitution no longer represents the original equation.",
    },
    {
      question:
        "Graph y = x² - 2x - 1 and estimate the roots. Then calculate x = 1 ± √2 and compare the decimal values with the graph.",
      sampleAnswer:
        "The exact roots are approximately -0.414 and 2.414, matching the graph intersections.",
    },
    {
      question:
        "Solve 4x² + 4x - 3 = 0 with the quadratic formula. Then determine whether factoring would also have been efficient.",
      sampleAnswer:
        "x=1/2 or x=-3/2. It factors as (2x-1)(2x+3), so factoring is also efficient.",
    },
    {
      question:
        "Why should exact radical form usually be written before a decimal approximation? Give one mathematical and one practical reason.",
      sampleAnswer:
        "Exact form preserves full precision and structure; decimals are useful for measurement, graphing, or contextual estimates.",
    },
    {
      question:
        "A profit model has roots 10 and 50. Explain what these roots might mean and why the values between the roots could have different business meaning from values outside them.",
      sampleAnswer:
        "They can be break-even points. For a downward-opening profit parabola, values between the roots may correspond to positive profit while outside values correspond to loss.",
    },
    {
      question:
        "Design a quadratic with irrational real roots. Solve it exactly and sketch a graph showing approximate intercept locations.",
      sampleAnswer:
        "Answers vary. Example: x²-2x-1=0 has roots 1±√2.",
    },
    {
      question:
        "Translate the quadratic formula into pseudocode before writing Python. Identify every place where parentheses are essential.",
      sampleAnswer:
        "Pseudocode should separately compute the radicand, square root, two numerators, and division by 2a.",
    },
    {
      question:
        "Create a group poster connecting Standard Form → Coefficients → Quadratic Formula → Exact Roots → Decimal Roots → x-Intercepts → Verification.",
      sampleAnswer:
        "The poster should show one consistent example across all representations.",
    },
  ],

  quiz: [
    {
      question: "State the quadratic formula for ax² + bx + c = 0.",
      answer: "x = (-b ± √(b² - 4ac)) / (2a).",
    },
    {
      question: "Solve x² + 5x + 1 = 0 exactly.",
      answer: "x = (-5 ± √21)/2.",
    },
    {
      question: "Solve 3x² - x - 2 = 0.",
      answer: "x = 1 or x = -2/3.",
    },
    {
      question:
        "What is wrong if a student divides only √(b² - 4ac) by 2a?",
      answer:
        "The entire numerator -b ± √(b² - 4ac) must be divided by 2a.",
    },
    {
      question:
        "For x² - 2x - 1 = 0, give the exact roots and approximate x-intercepts.",
      answer:
        "x = 1 ± √2; approximately (-0.414,0) and (2.414,0).",
    },
  ],

  homework: [
    {
      question: "Solve x² - 7x + 10 = 0 using the quadratic formula.",
      answer: "x = 2 or x = 5.",
      difficulty: "Foundation",
    },
    {
      question: "Solve 2x² + 7x + 3 = 0 using the quadratic formula.",
      answer: "x = -1/2 or x = -3.",
      difficulty: "Foundation",
    },
    {
      question: "For 5x² - 4x - 9 = 0, identify a, b, and c.",
      answer: "a=5, b=-4, c=-9.",
      difficulty: "Foundation",
    },
    {
      question: "Solve x² + 4x - 1 = 0 exactly.",
      answer: "x = -2 ± √5.",
      difficulty: "Intermediate",
    },
    {
      question: "Solve 3x² + 2x - 7 = 0 exactly.",
      answer: "x = (-1 ± √22)/3.",
      difficulty: "Intermediate",
    },
    {
      question: "Solve 2x² - 6x + 1 = 0 exactly.",
      answer: "x = (3 ± √7)/2.",
      difficulty: "Intermediate",
    },
    {
      question:
        "Explain why using parentheses around a negative b during substitution is good mathematical practice.",
      answer:
        "It prevents sign errors when evaluating -b and b².",
      difficulty: "Intermediate",
    },
    {
      question:
        "A ball's height is h(t) = -16t² + 64t + 80. Use the quadratic formula to find when it reaches the ground and interpret both roots.",
      answer:
        "t=5 or t=-1. The physical time after launch is 5 seconds; -1 second is outside the model's post-launch domain.",
      difficulty: "Advanced",
    },
    {
      question:
        "A rectangular design condition leads to 2x² + 5x - 12 = 0. Solve exactly and decide which root could represent a positive length.",
      answer:
        "x = 3/2 or x = -4. A positive length would use x=3/2.",
      difficulty: "Advanced",
    },
    {
      question:
        "Create a real-world quadratic equation that is inconvenient to factor. Define the variables, solve it with the quadratic formula, keep the exact answer, approximate it, and explain which root or roots make sense in context.",
      sampleAnswer:
        "Answers vary. The model, coefficient identification, formula substitution, exact solution, approximation, and contextual interpretation must be consistent.",
      difficulty: "Application / Creation",
    },
  ],

  commonMistakes: [
    {
      mistake: "Using coefficients before rewriting the equation in standard form.",
      correction:
        "Move all terms to one side first so a, b, and c are read from ax² + bx + c = 0.",
    },
    {
      mistake: "Dropping the sign of b or c.",
      correction:
        "Signs are part of coefficients. Substitute negative coefficients using parentheses.",
    },
    {
      mistake: "Dividing only part of the numerator by 2a.",
      correction:
        "The entire expression -b ± √(b² - 4ac) is divided by 2a.",
    },
    {
      mistake: "Using only the + branch.",
      correction:
        "Evaluate both + and - branches unless they produce the same repeated root.",
    },
    {
      mistake: "Rounding too early.",
      correction:
        "Keep radicals exact through the algebra; approximate only at the end when needed.",
    },
    {
      mistake: "Trusting a calculator output without verification.",
      correction:
        "Check solutions in the original equation and compare real roots with graph x-intercepts.",
    },
  ],

  summary: [
    "The quadratic formula solves ax² + bx + c = 0 for any nonzero a.",
    "The formula is connected to completing the square, not separate from it.",
    "Write standard form first and preserve the signs of a, b, and c.",
    "Use parentheses carefully during substitution.",
    "The entire numerator is divided by 2a.",
    "The ± symbol represents two algebraic branches.",
    "Keep exact radical solutions before converting to decimals.",
    "Real roots correspond to x-intercepts of the parabola.",
    "Verification and contextual interpretation are part of solving, not optional extras.",
  ],
};

export default lesson03;
