const lesson01 = {
  id: "algebra-two-module-03-lesson-01",
  slug: "solving-quadratic-equations-by-factoring",

  courseId: "algebra-2",
  courseTitle: "Algebra II",

  moduleNumber: 3,
  moduleTitle: "Quadratic Functions and Equations",
  lessonNumber: 1,

  title: "Solving Quadratic Equations by Factoring",

  subtitle:
    "Use structure, the zero-product property, and graphing to connect factors, roots, zeros, and x-intercepts.",

  duration: "80-95 minutes",
  level: "Intermediate",
  status: "Available",

  essentialQuestion:
    "How can factoring reveal the roots of a quadratic equation, and how do those roots appear on its graph?",

  bigIdea:
    "Factoring rewrites a quadratic equation as a product of simpler expressions. When that product equals zero, the zero-product property lets us solve each factor separately. The resulting roots are exactly the x-values where the related parabola meets the x-axis.",

  problemFirst: {
    title: "Where Does the Parabola Cross the Ground?",
    scenario:
      "A quadratic model is y = x^2 - 5x + 6. Before doing any algebra, study the graph and predict the x-values where y = 0. Then factor the equation x^2 - 5x + 6 = 0 and decide whether the algebra and graph tell the same story.",
    questions: [
      "Where does the graph cross the x-axis?",
      "What does y = 0 mean on a coordinate graph?",
      "Can x^2 - 5x + 6 be written as a product of two binomials?",
      "How are the factors connected to the graph's x-intercepts?",
      "How could substitution verify each proposed root?",
    ],
  },

  definitionTable: {
    title: "Definitions You Need Before Factoring",
    description:
      "These terms connect the algebraic equation to the graph of the related quadratic function.",
    columns: [
      { key: "term", label: "Term" },
      { key: "definition", label: "Definition" },
      { key: "example", label: "Example / Meaning" },
    ],
    rows: [
      {
        term: "Quadratic equation",
        definition: "An equation that can be written as ax^2 + bx + c = 0, where a is not 0.",
        example: "x^2 - 5x + 6 = 0",
      },
      {
        term: "Standard form",
        definition: "The form ax^2 + bx + c = 0 with all terms on one side.",
        example: "2x^2 + 7x + 3 = 0",
      },
      {
        term: "Factor",
        definition: "An expression multiplied by another expression to form a product.",
        example: "(x - 2) and (x - 3) are factors of x^2 - 5x + 6.",
      },
      {
        term: "Root / solution",
        definition: "A value of x that makes the quadratic equation true.",
        example: "x = 2 and x = 3 solve x^2 - 5x + 6 = 0.",
      },
      {
        term: "Zero",
        definition: "An input x for which the related function has output 0.",
        example: "f(2) = 0 and f(3) = 0.",
      },
      {
        term: "x-intercept",
        definition: "A point where a graph meets the x-axis, so y = 0.",
        example: "(2, 0) and (3, 0)",
      },
      {
        term: "Zero-product property",
        definition: "If a product equals zero, then at least one factor must equal zero.",
        example: "AB = 0 implies A = 0 or B = 0.",
      },
    ],
  },

  mainConceptTable: {
    title: "Main Concepts for Solving by Factoring",
    description:
      "Factoring is not just an algebra trick. Each step preserves meaning and connects directly to the graph.",
    columns: [
      { key: "concept", label: "Main Concept" },
      { key: "rule", label: "Mathematical Rule" },
      { key: "meaning", label: "What You Should Understand" },
    ],
    rows: [
      {
        concept: "Standard form first",
        rule: "ax^2 + bx + c = 0",
        meaning: "Move all terms to one side before applying the zero-product property.",
      },
      {
        concept: "Factor completely",
        rule: "ax^2 + bx + c = (px + q)(rx + s)",
        meaning: "Rewrite the quadratic as a product without changing its value.",
      },
      {
        concept: "Use the zero-product property",
        rule: "AB = 0 => A = 0 or B = 0",
        meaning: "A product can equal zero only if at least one factor equals zero.",
      },
      {
        concept: "Solve each linear factor",
        rule: "px + q = 0",
        meaning: "Each factor produces a candidate root.",
      },
      {
        concept: "Connect roots to the graph",
        rule: "f(r) = 0",
        meaning: "A real root r appears as the x-intercept (r, 0).",
      },
      {
        concept: "Verify",
        rule: "Substitute each root into the original equation",
        meaning: "Verification confirms the solution really satisfies the equation.",
      },
    ],
  },

  tikzGraphs: [
    {
      id: "factoring-roots-graph",
      title: "Factors, Roots, and x-Intercepts",
      equation: "y = x^2 - 5x + 6",
      src: "/graphs/algebra-2/module-3/lesson-01/factoring-roots.svg",
      alt:
        "Parabola y equals x squared minus 5x plus 6 crossing the x-axis at x equals 2 and x equals 3, with vertex at 2.5 negative 0.25.",
      caption:
        "Because x^2 - 5x + 6 = (x - 2)(x - 3), the equation equals zero at x = 2 and x = 3. Those algebraic roots appear on the graph as the x-intercepts (2, 0) and (3, 0).",
      sourceNote:
        "Graph design source: TikZ + PGFPlots. Browser display: SVG companion asset.",
    },
  ],

  learningObjectives: [
    "Write a quadratic equation in standard form before factoring.",
    "Factor monic quadratic trinomials.",
    "Factor quadratic expressions with a leading coefficient greater than 1.",
    "Factor out a greatest common factor before using the zero-product property.",
    "Apply the zero-product property correctly.",
    "Solve each resulting linear equation.",
    "Connect roots to zeros and x-intercepts on a graph.",
    "Verify roots by substitution into the original equation.",
    "Explain why the zero-product property requires the product to equal zero.",
  ],

  prerequisiteKnowledge: [
    "Multiplying binomials",
    "Factoring common factors",
    "Factoring simple trinomials",
    "Solving linear equations",
    "Coordinate plane",
    "x-intercepts",
  ],

  formulas: [
    {
      name: "Quadratic Standard Form",
      formula: "ax^2 + bx + c = 0, a != 0",
      meaning:
        "Factoring methods are easiest to apply after the quadratic equation is written with zero on one side.",
    },
    {
      name: "Zero-Product Property",
      formula: "AB = 0 => A = 0 or B = 0",
      meaning:
        "After factoring, set each factor equal to zero and solve.",
    },
    {
      name: "Root-Graph Connection",
      formula: "f(r) = 0 <=> (r, 0) is an x-intercept",
      meaning:
        "Real algebraic roots are the horizontal-axis intersections of the related quadratic graph.",
    },
  ],

  workedExamples: [
    {
      id: "example-1",
      title: "Factor a Monic Quadratic",
      problem: "Solve x^2 - 5x + 6 = 0.",
      plan:
        "Find two numbers whose product is 6 and whose sum is -5, factor the trinomial, then apply the zero-product property.",
      solutionSteps: [
        "The equation is already in standard form: x^2 - 5x + 6 = 0.",
        "The numbers -2 and -3 multiply to 6 and add to -5.",
        "Factor: (x - 2)(x - 3) = 0.",
        "Set each factor equal to zero: x - 2 = 0 or x - 3 = 0.",
        "Solve: x = 2 or x = 3.",
        "Verify: 2^2 - 5(2) + 6 = 0 and 3^2 - 5(3) + 6 = 0.",
      ],
      answer: "x = 2 or x = 3",
      interpretation:
        "The graph y = x^2 - 5x + 6 crosses the x-axis at (2, 0) and (3, 0).",
    },
    {
      id: "example-2",
      title: "Factor When a > 1",
      problem: "Solve 2x^2 + 7x + 3 = 0.",
      plan:
        "Factor the trinomial into two binomials, then solve each factor.",
      solutionSteps: [
        "The equation is in standard form.",
        "Factor: 2x^2 + 7x + 3 = (2x + 1)(x + 3).",
        "Use the zero-product property: 2x + 1 = 0 or x + 3 = 0.",
        "Solve the first equation: 2x = -1, so x = -1/2.",
        "Solve the second equation: x = -3.",
        "Substitute both values into the original equation to verify.",
      ],
      answer: "x = -1/2 or x = -3",
      interpretation:
        "The related parabola has x-intercepts at (-1/2, 0) and (-3, 0).",
    },
    {
      id: "example-3",
      title: "Factor Out the Greatest Common Factor First",
      problem: "Solve 3x^2 - 12x = 0.",
      plan:
        "Factor out the greatest common factor before applying the zero-product property.",
      solutionSteps: [
        "Factor the greatest common factor 3x: 3x(x - 4) = 0.",
        "The factors are 3x and x - 4.",
        "Set each factor equal to zero: 3x = 0 or x - 4 = 0.",
        "Solve: x = 0 or x = 4.",
        "Verify both roots in 3x^2 - 12x = 0.",
      ],
      answer: "x = 0 or x = 4",
      interpretation:
        "One root is zero because x itself is a factor of the quadratic expression.",
    },
    {
      id: "example-4",
      title: "Rewrite First, Then Factor",
      problem: "Solve (3x - 2)(x + 4) = -11.",
      plan:
        "Expand, move every term to one side so the equation equals zero, factor the resulting quadratic, and solve.",
      solutionSteps: [
        "Expand the left side: 3x^2 + 10x - 8 = -11.",
        "Add 11 to both sides: 3x^2 + 10x + 3 = 0.",
        "Factor: (3x + 1)(x + 3) = 0.",
        "Set each factor equal to zero: 3x + 1 = 0 or x + 3 = 0.",
        "Solve: x = -1/3 or x = -3.",
        "Check both solutions in the original equation, not only the transformed equation.",
      ],
      answer: "x = -1/3 or x = -3",
      interpretation:
        "This example shows why an equation must equal zero before the zero-product property can be used.",
    },
  ],

  independentPractice: [
    {
      question: "Solve x^2 - 7x + 12 = 0 by factoring.",
      answer: "(x - 3)(x - 4) = 0, so x = 3 or x = 4.",
      difficulty: "Foundation",
    },
    {
      question: "Solve x^2 + 2x - 15 = 0 by factoring.",
      answer: "(x + 5)(x - 3) = 0, so x = -5 or x = 3.",
      difficulty: "Foundation",
    },
    {
      question: "Solve x^2 - 9 = 0 by factoring.",
      answer: "(x - 3)(x + 3) = 0, so x = -3 or x = 3.",
      difficulty: "Foundation",
    },
    {
      question: "Solve 2x^2 + 5x + 2 = 0.",
      answer: "(2x + 1)(x + 2) = 0, so x = -1/2 or x = -2.",
      difficulty: "Intermediate",
    },
    {
      question: "Solve 3x^2 - 15x = 0.",
      answer: "3x(x - 5) = 0, so x = 0 or x = 5.",
      difficulty: "Intermediate",
    },
    {
      question: "Solve 6x^2 + x - 2 = 0.",
      answer: "(3x + 2)(2x - 1) = 0, so x = -2/3 or x = 1/2.",
      difficulty: "Intermediate",
    },
    {
      question: "Solve x(x + 7) = 18.",
      answer: "x^2 + 7x - 18 = 0 = (x + 9)(x - 2), so x = -9 or x = 2.",
      difficulty: "Intermediate",
    },
    {
      question: "A student writes (x - 4)(x + 2) = 7 and immediately concludes x = 4 or x = -2. Explain the error.",
      answer: "The zero-product property applies only when the product equals 0, not 7.",
      difficulty: "Reasoning",
    },
    {
      question: "The graph of y = (x + 1)(x - 6) crosses the x-axis at which two points?",
      answer: "(-1, 0) and (6, 0).",
      difficulty: "Graph Connection",
    },
    {
      question: "Create a factorable quadratic equation whose roots are x = 2 and x = -5, then write it in standard form.",
      answer: "One answer: (x - 2)(x + 5) = 0, so x^2 + 3x - 10 = 0.",
      difficulty: "Creation",
    },
  ],

  groupWork: [
    {
      question: "Compare x^2 - 5x + 6 = 0 and x^2 - 7x + 12 = 0. Factor both and explain how the factors predict the graph's x-intercepts.",
      sampleAnswer: "First factors to (x - 2)(x - 3); second to (x - 3)(x - 4). Their roots are their graph x-intercepts.",
    },
    {
      question: "Error analysis: A student solves x(x - 5) = 0 by dividing both sides by x and gets only x = 5. What root was lost, and why?",
      sampleAnswer: "x = 0 was lost. Dividing by x assumes x is nonzero and removes the factor that generated the root 0.",
    },
    {
      question: "Match each equation to its root pair: x^2 - 9 = 0, x^2 - x - 6 = 0, x^2 + 5x + 6 = 0. Root pairs: {-3,3}, {-2,3}, {-3,-2}.",
      sampleAnswer: "x^2 - 9 -> {-3,3}; x^2 - x - 6 -> {-2,3}; x^2 + 5x + 6 -> {-3,-2}.",
    },
    {
      question: "Without graphing software, sketch y = (x - 1)(x - 5). Mark both roots and explain what factoring tells you before you draw the parabola.",
      sampleAnswer: "Roots are 1 and 5, so x-intercepts are (1,0) and (5,0). The sketch should pass through both.",
    },
    {
      question: "Write a quadratic equation with roots -4 and 2. Expand it, then have a partner recover the roots by factoring.",
      sampleAnswer: "One answer: (x + 4)(x - 2)=0 -> x^2 + 2x - 8=0.",
    },
    {
      question: "Explain why x^2 + 4x + 4 = 0 has only one distinct real root even though it contains two equal factors.",
      sampleAnswer: "It factors as (x + 2)^2=0. Both factors produce the same root x=-2.",
    },
    {
      question: "Solve 4x^2 - 12x = 0 in two ways: first by factoring the GCF, then by reasoning from the product 4x(x - 3)=0. Compare the methods.",
      sampleAnswer: "Both give x=0 or x=3. The second is simply the factored form made explicit.",
    },
    {
      question: "A rectangle has side lengths x + 2 and x + 5 and area 28. Build the quadratic equation, solve by factoring, and decide which solution is physically meaningful.",
      sampleAnswer: "(x+2)(x+5)=28 -> x^2+7x-18=0 -> (x+9)(x-2)=0. x=2 is meaningful; x=-9 gives negative lengths.",
    },
    {
      question: "Predict first: How many x-intercepts should y = (2x - 3)(x + 4) have? State them, then sketch a reasonable parabola through those points.",
      sampleAnswer: "Two x-intercepts: (3/2,0) and (-4,0).",
    },
    {
      question: "Create a mini-poster showing the chain Factor -> Root -> Zero -> x-Intercept using one original factorable quadratic example.",
      sampleAnswer: "Answers vary, but all four representations must describe the same two solution values.",
    },
  ],

  quiz: [
    {
      question: "Solve x^2 - 8x + 15 = 0 by factoring.",
      answer: "(x - 3)(x - 5)=0, so x=3 or x=5.",
    },
    {
      question: "Solve 2x^2 - 7x + 3 = 0.",
      answer: "(2x - 1)(x - 3)=0, so x=1/2 or x=3.",
    },
    {
      question: "Why must a quadratic equation be set equal to zero before using the zero-product property?",
      answer: "Because the property states that if a product equals zero, at least one factor must equal zero.",
    },
    {
      question: "The function y = (x + 2)(x - 4) has which x-intercepts?",
      answer: "(-2,0) and (4,0).",
    },
    {
      question: "Solve 5x^2 + 10x = 0 and verify both roots.",
      answer: "5x(x+2)=0, so x=0 or x=-2. Both make 5x^2+10x equal 0.",
    },
  ],

  homework: [
    {
      question: "Solve x^2 - 11x + 24 = 0.",
      answer: "(x - 3)(x - 8)=0, so x=3 or x=8.",
      difficulty: "Foundation",
    },
    {
      question: "Solve x^2 + 7x + 12 = 0.",
      answer: "(x + 3)(x + 4)=0, so x=-3 or x=-4.",
      difficulty: "Foundation",
    },
    {
      question: "Solve x^2 - 16 = 0.",
      answer: "(x - 4)(x + 4)=0, so x=-4 or x=4.",
      difficulty: "Foundation",
    },
    {
      question: "Solve 2x^2 + 9x + 4 = 0.",
      answer: "(2x + 1)(x + 4)=0, so x=-1/2 or x=-4.",
      difficulty: "Intermediate",
    },
    {
      question: "Solve 4x^2 - 20x = 0.",
      answer: "4x(x - 5)=0, so x=0 or x=5.",
      difficulty: "Intermediate",
    },
    {
      question: "Solve 3x^2 + 8x + 4 = 0.",
      answer: "(3x + 2)(x + 2)=0, so x=-2/3 or x=-2.",
      difficulty: "Intermediate",
    },
    {
      question: "Solve x(x - 3) = 10.",
      answer: "x^2 - 3x - 10=0=(x - 5)(x + 2), so x=5 or x=-2.",
      difficulty: "Intermediate",
    },
    {
      question: "Solve (2x + 1)(x - 4) = 5 by first rewriting the equation in standard form.",
      answer: "2x^2 - 7x - 4 = 5 -> 2x^2 - 7x - 9 = 0 = (2x - 9)(x + 1), so x=9/2 or x=-1.",
      difficulty: "Advanced",
    },
    {
      question: "A quadratic has roots 3 and -7. Write a factored equation and its expanded standard form.",
      answer: "(x - 3)(x + 7)=0, so x^2 + 4x - 21=0.",
      difficulty: "Advanced",
    },
    {
      question: "Create your own real-world situation that leads to a factorable quadratic equation. Define the variable, write the equation, solve it, reject any unrealistic solution if needed, and explain the meaning of the valid root or roots.",
      sampleAnswer: "Answers will vary. The model, factorization, roots, and interpretation must be mathematically consistent.",
      difficulty: "Application / Creation",
    },
  ],

  commonMistakes: [
    {
      mistake: "Using the zero-product property when the equation does not equal zero.",
      correction: "First rewrite the equation so one side is zero.",
    },
    {
      mistake: "Forgetting to factor out a greatest common factor.",
      correction: "Always check for a GCF before factoring the remaining quadratic expression.",
    },
    {
      mistake: "Setting only one factor equal to zero.",
      correction: "Each factor can produce a root, so solve every factor equation.",
    },
    {
      mistake: "Losing x = 0 by dividing an equation by x.",
      correction: "Factoring preserves the possibility that x itself equals zero; dividing by x can remove that solution.",
    },
    {
      mistake: "Reporting roots without checking the original equation.",
      correction: "Substitute each solution into the original equation to verify it.",
    },
  ],

  summary: [
    "Write the quadratic equation in standard form with zero on one side.",
    "Factor the quadratic expression completely.",
    "Use the zero-product property to set each factor equal to zero.",
    "Solve every resulting linear equation.",
    "Verify roots in the original equation.",
    "Real roots are zeros of the function and x-intercepts of its graph.",
    "Factoring is most efficient when the quadratic has a recognizable factor structure.",
  ],
};

export default lesson01;
