const lesson05 = {
  id: "algebra-two-module-03-lesson-05",
  slug: "nature-of-the-roots",

  courseId: "algebra-2",
  courseTitle: "Algebra II",

  moduleNumber: 3,
  moduleTitle: "Quadratic Functions and Equations",
  lessonNumber: 5,

  title: "Nature of the Roots",

  subtitle:
    "Use the discriminant to classify quadratic roots as rational, irrational, repeated, or nonreal complex, and connect each algebraic case to the graph.",

  duration: "90-105 minutes",
  level: "Intermediate",
  status: "Available",

  essentialQuestion:
    "How can the discriminant tell us not only how many real roots a quadratic has, but also what kind of numbers those roots are?",

  bigIdea:
    "The discriminant D = b² - 4ac reveals more than the number of real roots. For quadratic equations with integer coefficients, a positive perfect-square discriminant gives two distinct rational roots, a positive non-perfect-square discriminant gives two distinct irrational roots, zero gives one repeated rational root, and a negative discriminant gives two nonreal complex conjugate roots.",

  problemFirst: {
    title: "Four Equations, Four Root Types",
    scenario:
      "Consider these equations: x² - 5x + 6 = 0, x² - 2x - 2 = 0, x² - 6x + 9 = 0, and x² + 2x + 5 = 0. Compute the discriminant of each before solving. Then decide whether the roots should be rational, irrational, repeated, or nonreal complex.",
    questions: [
      "What are a, b, and c for each equation?",
      "Which discriminants are positive, zero, or negative?",
      "Which positive discriminants are perfect squares?",
      "How does a perfect-square discriminant affect √D?",
      "Which equations should have rational roots?",
      "Which equation should have irrational roots?",
      "Which equation should have a repeated root?",
      "Which equation should have complex roots?",
    ],
  },

  definitionTable: {
    title: "Definitions for the Nature of Roots",
    description:
      "These terms classify the values produced by the quadratic formula.",
    columns: [
      { key: "term", label: "Term" },
      { key: "definition", label: "Definition" },
      { key: "example", label: "Example / Meaning" },
    ],
    rows: [
      {
        term: "Rational root",
        definition:
          "A solution that can be written as a ratio of integers p/q with q ≠ 0.",
        example: "2, -3/2, and 0.75 are rational numbers.",
      },
      {
        term: "Irrational root",
        definition:
          "A real solution that cannot be written as a ratio of integers.",
        example: "1 + √3 and 1 - √3 are irrational.",
      },
      {
        term: "Repeated root",
        definition:
          "A real root that occurs twice because both branches of the quadratic formula produce the same value.",
        example: "x = 3 for (x - 3)² = 0.",
      },
      {
        term: "Complex root",
        definition:
          "A solution involving the imaginary unit i, where i² = -1.",
        example: "-1 + 2i and -1 - 2i.",
      },
      {
        term: "Complex conjugates",
        definition:
          "A pair of complex numbers with the same real part and opposite imaginary parts.",
        example: "a + bi and a - bi.",
      },
      {
        term: "Perfect square",
        definition:
          "A nonnegative integer that is the square of an integer.",
        example: "0, 1, 4, 9, 16, 25, ...",
      },
      {
        term: "Nature of the roots",
        definition:
          "A classification describing whether roots are rational, irrational, repeated, or nonreal complex.",
        example: "D = 12 gives two distinct irrational real roots.",
      },
    ],
  },

  mainConceptTable: {
    title: "Classifying the Nature of Roots",
    description:
      "For quadratics with integer coefficients, the sign of D tells whether roots are real, while the perfect-square status of a positive D tells whether the real roots are rational or irrational.",
    columns: [
      { key: "case", label: "Discriminant Case" },
      { key: "roots", label: "Nature of the Roots" },
      { key: "graph", label: "Graph Behavior" },
    ],
    rows: [
      {
        case: "D > 0 and D is a perfect square",
        roots: "Two distinct rational real roots",
        graph: "The parabola crosses the x-axis at two rational x-values.",
      },
      {
        case: "D > 0 and D is not a perfect square",
        roots: "Two distinct irrational real roots",
        graph: "The parabola crosses the x-axis twice, but the exact x-values contain radicals.",
      },
      {
        case: "D = 0",
        roots: "One repeated rational real root",
        graph: "The parabola touches the x-axis at the vertex.",
      },
      {
        case: "D < 0",
        roots: "Two nonreal complex conjugate roots",
        graph: "The real graph has no x-intercepts.",
      },
    ],
  },

  tikzGraphs: [
    {
      id: "nature-rational-vs-irrational",
      title: "Rational Roots vs. Irrational Roots",
      equation: "Compare y = x² - 5x + 6 and y = x² - 2x - 2",
      src: "/graphs/algebra-2/module-3/lesson-05/nature-rational-vs-irrational.svg",
      alt:
        "Two parabolas comparing rational roots at x equals 2 and 3 with irrational roots at x equals 1 minus square root 3 and 1 plus square root 3.",
      caption:
        "Both quadratics have D > 0, so both cross the x-axis twice. For x² - 5x + 6, D = 1 is a perfect square, producing rational roots 2 and 3. For x² - 2x - 2, D = 12 is not a perfect square, producing irrational roots 1 ± √3.",
      sourceNote:
        "Graph design source: TikZ + PGFPlots. Browser display: SVG companion asset.",
    },
    {
      id: "nature-complex-roots",
      title: "Complex Roots Have No Real x-Intercepts",
      equation: "y = x² + 2x + 5",
      src: "/graphs/algebra-2/module-3/lesson-05/nature-complex-roots.svg",
      alt:
        "Parabola y equals x squared plus 2x plus 5 with vertex negative 1 comma 4, entirely above the x-axis, showing no real x-intercepts.",
      caption:
        "For x² + 2x + 5 = 0, D = -16 < 0. The quadratic formula gives x = -1 ± 2i. These complex roots are valid algebraic solutions, but they do not appear as x-intercepts on the real coordinate plane.",
      sourceNote:
        "Graph design source: TikZ + PGFPlots. Browser display: SVG companion asset.",
    },
  ],

  learningObjectives: [
    "Define rational, irrational, repeated, and complex roots.",
    "Calculate the discriminant accurately from standard form.",
    "Use the sign of D to determine whether roots are real or nonreal complex.",
    "Use perfect-square status to distinguish rational and irrational real roots.",
    "Explain why D = 0 produces a repeated root.",
    "Explain why D < 0 produces complex conjugate roots.",
    "Connect root classifications to x-intercepts on a graph.",
    "Verify root classifications with the quadratic formula.",
    "Use exact radical and complex-number notation correctly.",
  ],

  prerequisiteKnowledge: [
    "Quadratic standard form",
    "The discriminant",
    "Quadratic formula",
    "Perfect squares",
    "Square roots and radicals",
    "Rational and irrational numbers",
    "Imaginary unit i",
    "x-intercepts of parabolas",
  ],

  formulas: [
    {
      name: "Discriminant",
      formula: "D = b² - 4ac",
      meaning:
        "The sign and perfect-square status of D classify the roots.",
    },
    {
      name: "Quadratic Formula",
      formula: "x = (-b ± √D) / (2a)",
      meaning:
        "The nature of √D determines the nature of the roots.",
    },
    {
      name: "Rational Case",
      formula: "D > 0 and D is a perfect square",
      meaning:
        "For integer coefficients, √D is an integer, so the two real roots are rational.",
    },
    {
      name: "Irrational Case",
      formula: "D > 0 and D is not a perfect square",
      meaning:
        "√D is irrational, so the two distinct real roots are irrational.",
    },
    {
      name: "Repeated Case",
      formula: "D = 0",
      meaning:
        "Both ± branches collapse to x = -b/(2a), giving one repeated real root.",
    },
    {
      name: "Complex Case",
      formula: "D < 0",
      meaning:
        "√D contains i, producing two nonreal complex conjugates.",
    },
  ],

  workedExamples: [
    {
      id: "example-1",
      title: "Two Rational Roots",
      problem:
        "Classify the roots of 2x² + x - 3 = 0, then verify with the quadratic formula.",
      plan:
        "Compute D, check whether it is a perfect square, classify the roots, then solve to verify.",
      solutionSteps: [
        "Identify a = 2, b = 1, c = -3.",
        "Compute D = 1² - 4(2)(-3) = 1 + 24 = 25.",
        "Since D = 25 > 0, there are two distinct real roots.",
        "Because 25 is a perfect square, the roots are rational.",
        "Use the quadratic formula: x = (-1 ± √25)/4.",
        "Simplify: x = (-1 ± 5)/4.",
        "Therefore x = 1 or x = -3/2.",
      ],
      answer: "Two distinct rational roots: x = 1 and x = -3/2.",
      interpretation:
        "The related parabola crosses the x-axis at two rational x-values.",
    },
    {
      id: "example-2",
      title: "Two Irrational Roots",
      problem:
        "Classify the roots of x² - 2x - 2 = 0 and write them exactly.",
      plan:
        "Compute D, decide whether it is a perfect square, then use the quadratic formula.",
      solutionSteps: [
        "Identify a = 1, b = -2, c = -2.",
        "Compute D = (-2)² - 4(1)(-2) = 4 + 8 = 12.",
        "Since D = 12 > 0, there are two distinct real roots.",
        "Because 12 is not a perfect square, √12 is irrational.",
        "Use the quadratic formula: x = (2 ± √12)/2.",
        "Simplify √12 = 2√3.",
        "Therefore x = 1 ± √3.",
      ],
      answer: "Two distinct irrational roots: x = 1 ± √3.",
      interpretation:
        "The graph crosses the x-axis twice at approximately x ≈ -0.732 and x ≈ 2.732.",
    },
    {
      id: "example-3",
      title: "One Repeated Root",
      problem:
        "Classify the roots of x² - 6x + 9 = 0.",
      plan:
        "Compute D and explain what happens to the ± term when D = 0.",
      solutionSteps: [
        "Identify a = 1, b = -6, c = 9.",
        "Compute D = (-6)² - 4(1)(9) = 36 - 36 = 0.",
        "Since D = 0, both branches of the quadratic formula give the same value.",
        "Compute x = -(-6)/(2·1) = 6/2 = 3.",
        "The factorization (x - 3)² = 0 confirms the repeated root.",
      ],
      answer: "One repeated rational root: x = 3.",
      interpretation:
        "The parabola touches the x-axis at the vertex (3, 0) instead of crossing it.",
    },
    {
      id: "example-4",
      title: "Two Complex Conjugate Roots",
      problem:
        "Classify and solve x² + 2x + 5 = 0.",
      plan:
        "Compute D. When D is negative, rewrite the square root using i and simplify.",
      solutionSteps: [
        "Identify a = 1, b = 2, c = 5.",
        "Compute D = 2² - 4(1)(5) = 4 - 20 = -16.",
        "Since D < 0, the equation has two nonreal complex roots.",
        "Use the quadratic formula: x = (-2 ± √(-16))/2.",
        "Rewrite √(-16) = 4i.",
        "Simplify: x = (-2 ± 4i)/2.",
        "Therefore x = -1 ± 2i.",
      ],
      answer: "Two nonreal complex conjugate roots: x = -1 ± 2i.",
      interpretation:
        "The real graph has no x-intercepts, but the equation still has two complex solutions.",
    },
  ],

  realWorldApplications: [
    {
      id: "engineering-intersections",
      field: "Engineering",
      title: "Classifying Design Intersections",
      application:
        "A quadratic model can tell an engineer whether two modeled objects meet at rational coordinates, irrational coordinates, touch at one repeated point, or have no real intersection.",
      model: "ax² + bx + c = 0",
      question:
        "Why could the difference between rational and irrational intersection coordinates matter when measurements must be approximated?",
    },
    {
      id: "projectile-target",
      field: "Physics",
      title: "Projectile and Target Height",
      application:
        "A target-height equation may produce two times, one tangent time, or no real time. Irrational times are often approximated, while a negative discriminant means the target height is never reached in the real motion model.",
      model: "-16t² + vt + h₀ = H",
      question:
        "What physical interpretation would you give to D = 0 in a target-height problem?",
    },
    {
      id: "signal-analysis",
      field: "Technology",
      title: "Threshold Intersections",
      application:
        "Quadratic approximations can model when a signal crosses a threshold. The root type indicates whether exact rational times exist, irrational approximations are required, or no real crossing occurs.",
      model: "S(t) - T = 0",
      question:
        "Why might an irrational root still be perfectly useful in an engineering system?",
    },
    {
      id: "robotics-path",
      field: "Robotics",
      title: "Robot Path and Boundary",
      application:
        "A robot's simplified parabolic path can be compared with a boundary. The discriminant predicts whether the path crosses twice, touches once, or misses the boundary in real space.",
      model: "ax² + bx + c = 0",
      question:
        "If D < 0, what should a path-planning system conclude about real boundary intersections?",
    },
  ],

  pythonLab: {
    title: "Python Lab — Classify the Nature of Quadratic Roots",
    objective:
      "Write a Python function that classifies roots using the discriminant and tests whether a positive discriminant is a perfect square.",
    connection:
      "The program mirrors the mathematical decision process: calculate D, inspect its sign, then test whether √D is an integer when D > 0.",
    code: `import math

def classify_roots(a, b, c):
    d = b**2 - 4*a*c

    if d < 0:
        return d, "two nonreal complex conjugate roots"

    if d == 0:
        return d, "one repeated rational root"

    root_d = math.isqrt(d)

    if root_d * root_d == d:
        return d, "two distinct rational roots"

    return d, "two distinct irrational roots"

examples = [
    (2, 1, -3),
    (1, -2, -2),
    (1, -6, 9),
    (1, 2, 5),
]

for coefficients in examples:
    print(coefficients, classify_roots(*coefficients))`,
    questions: [
      "Why does the code check d < 0 before using math.isqrt(d)?",
      "How does root_d * root_d == d test whether d is a perfect square?",
      "What classification should (2, 1, -3) produce?",
      "What classification should (1, -2, -2) produce?",
      "How could you extend the program to return the exact roots as well as their type?",
    ],
    extension:
      "Create at least eight quadratic equations covering all four root types. Predict each type by hand, then use the Python function to verify your classifications.",
  },

  lumineryGuidance: {
    title: "Luminery AI — Nature of Roots Coach",
    message:
      "Luminery should adapt its next question to the learner's reasoning. It should first determine whether the learner can identify a, b, c and compute D. Then it should guide the learner to inspect the sign of D and, when D > 0, decide whether D is a perfect square. It should not reveal the final classification before the learner reasons through those steps.",
    prompt:
      "I am classifying the nature of the roots of a quadratic. Do not give me the final classification first. Ask me one question at a time. Check whether I identified a, b, c correctly, then help me compute D, decide whether it is positive, zero, or negative, and if D > 0 ask whether it is a perfect square. Adapt your next hint to any mistake I make, then ask me to connect the classification to the graph.",
    coachingQuestions: [
      "Is the equation written in standard form ax² + bx + c = 0?",
      "What are a, b, and c, including their signs?",
      "What is D = b² - 4ac?",
      "Is D positive, zero, or negative?",
      "If D > 0, is D a perfect square?",
      "What does that tell you about rational versus irrational roots?",
      "If D = 0, why do the + and - branches collapse to the same root?",
      "If D < 0, how does √D introduce the imaginary unit i?",
      "What should the related real graph do at the x-axis?",
      "Can you verify your classification with the quadratic formula without changing it?",
    ],
    masteryCheck:
      "A learner demonstrates mastery when they can classify root nature from D, justify the classification, distinguish rational from irrational roots when D > 0, recognize complex conjugates when D < 0, and connect every case to the graph.",
  },

  independentPractice: [
    {
      question: "Classify the roots of x² - 7x + 12 = 0.",
      answer: "D = 49 - 48 = 1; two distinct rational roots.",
      difficulty: "Foundation",
    },
    {
      question: "Classify the roots of x² - 4x + 1 = 0.",
      answer: "D = 16 - 4 = 12; two distinct irrational roots.",
      difficulty: "Foundation",
    },
    {
      question: "Classify the roots of x² + 10x + 25 = 0.",
      answer: "D = 100 - 100 = 0; one repeated rational root.",
      difficulty: "Foundation",
    },
    {
      question: "Classify the roots of x² + 4x + 8 = 0.",
      answer: "D = 16 - 32 = -16; two nonreal complex conjugate roots.",
      difficulty: "Foundation",
    },
    {
      question: "Classify the roots of 2x² - 5x + 2 = 0.",
      answer: "D = 25 - 16 = 9; two distinct rational roots.",
      difficulty: "Intermediate",
    },
    {
      question: "Classify the roots of 3x² + 2x - 1 = 0.",
      answer: "D = 4 + 12 = 16; two distinct rational roots.",
      difficulty: "Intermediate",
    },
    {
      question: "Classify the roots of 2x² + 4x - 1 = 0.",
      answer: "D = 16 + 8 = 24; two distinct irrational roots.",
      difficulty: "Intermediate",
    },
    {
      question:
        "A student says D = 8 means there are two rational roots because D > 0. Explain the error.",
      answer:
        "D > 0 guarantees two distinct real roots, but 8 is not a perfect square, so for integer coefficients the roots are irrational.",
      difficulty: "Error Analysis",
    },
    {
      question:
        "A parabola touches the x-axis exactly once. Classify the nature of its roots.",
      answer:
        "D = 0, so there is one repeated real root; with integer coefficients it is rational.",
      difficulty: "Graph Connection",
    },
    {
      question:
        "Create one quadratic with each of the four root types and show the discriminant evidence.",
      answer:
        "Answers vary. Each example must correctly produce: positive perfect-square D, positive non-square D, zero D, and negative D.",
      difficulty: "Creation",
    },
  ],

  groupWork: [
    {
      question:
        "Sort these discriminants into root types: 36, 20, 0, -9, 49, 7, -1, 64.",
      sampleAnswer:
        "36, 49, 64 → two rational roots; 20, 7 → two irrational roots; 0 → one repeated root; -9, -1 → two nonreal complex roots.",
    },
    {
      question:
        "Compare D = 25 and D = 24. Both are positive. Why do they produce different kinds of real roots?",
      sampleAnswer:
        "√25 = 5 is rational, while √24 = 2√6 is irrational. The perfect-square status changes the number type.",
    },
    {
      question:
        "Explain why x² - 6x + 9 = 0 has a repeated root using both the discriminant and factorization.",
      sampleAnswer:
        "D = 0, so the quadratic formula gives one repeated value; factorization gives (x-3)²=0, confirming x=3 twice.",
    },
    {
      question:
        "Solve x² - 2x - 2 = 0 and show why the graph's two x-intercepts are irrational.",
      sampleAnswer:
        "D=12, so x=1±√3. These are irrational and are the two x-intercepts.",
    },
    {
      question:
        "For x² + 2x + 5 = 0, explain why the graph has no x-intercepts even though the equation has two roots.",
      sampleAnswer:
        "D=-16, so the roots are -1±2i. Complex roots are not real x-coordinates, so they do not appear as real x-intercepts.",
    },
    {
      question:
        "A classmate claims every quadratic has two x-intercepts because every quadratic has two roots counting multiplicity over the complex numbers. Correct the statement.",
      sampleAnswer:
        "Every quadratic has two complex roots counting multiplicity, but only real roots correspond to x-intercepts on a real graph.",
    },
    {
      question:
        "Find a value of k so x² - 4x + k = 0 has a repeated root. Explain with D.",
      sampleAnswer:
        "D=16-4k. Set D=0: 16-4k=0, so k=4.",
    },
    {
      question:
        "Find integer values of k that make x² - 4x + k = 0 have no real roots.",
      sampleAnswer:
        "D=16-4k<0, so k>4. Any integer k≥5 works.",
    },
    {
      question:
        "Create a decision tree beginning with D = b² - 4ac and ending with the four root classifications.",
      sampleAnswer:
        "First test D<0, D=0, or D>0. If D>0, test whether D is a perfect square to distinguish rational from irrational roots.",
    },
    {
      question:
        "Explain the connection among discriminant, square roots, number systems, and graph intersections in one paragraph.",
      sampleAnswer:
        "The discriminant controls the radical in the quadratic formula. Its sign determines whether the radical is real, and its perfect-square status determines whether real roots are rational or irrational. Real roots appear as x-intercepts; complex roots do not.",
    },
  ],

  quiz: [
    {
      question: "For integer coefficients, what does D = 81 tell you about the roots?",
      answer: "Two distinct rational real roots.",
    },
    {
      question: "Classify the roots of x² - 2x - 4 = 0.",
      answer: "D = 4 + 16 = 20; two distinct irrational real roots.",
    },
    {
      question: "What root type occurs when D = 0?",
      answer: "One repeated real root; for integer coefficients it is rational.",
    },
    {
      question: "Classify the roots of 3x² + 2x + 2 = 0.",
      answer: "D = 4 - 24 = -20; two nonreal complex conjugate roots.",
    },
    {
      question:
        "Why does a positive discriminant not automatically mean rational roots?",
      answer:
        "Because √D is rational only when D is a perfect square for integer coefficients.",
    },
  ],

  homework: [
    {
      question: "Classify the roots of x² - 9x + 20 = 0.",
      answer: "D = 81 - 80 = 1; two distinct rational roots.",
      difficulty: "Foundation",
    },
    {
      question: "Classify the roots of x² - 6x + 7 = 0.",
      answer: "D = 36 - 28 = 8; two distinct irrational roots.",
      difficulty: "Foundation",
    },
    {
      question: "Classify the roots of 4x² + 12x + 9 = 0.",
      answer: "D = 144 - 144 = 0; one repeated rational root.",
      difficulty: "Foundation",
    },
    {
      question: "Classify the roots of 2x² + 2x + 5 = 0.",
      answer: "D = 4 - 40 = -36; two nonreal complex conjugate roots.",
      difficulty: "Foundation",
    },
    {
      question: "Classify and solve 2x² - x - 3 = 0.",
      answer: "D = 25; rational roots x = 3/2 and x = -1.",
      difficulty: "Intermediate",
    },
    {
      question: "Classify and solve x² + 4x + 1 = 0.",
      answer: "D = 12; irrational roots x = -2 ± √3.",
      difficulty: "Intermediate",
    },
    {
      question: "Classify and solve x² - 8x + 16 = 0.",
      answer: "D = 0; repeated root x = 4.",
      difficulty: "Intermediate",
    },
    {
      question: "Classify and solve x² - 4x + 8 = 0.",
      answer: "D = -16; complex conjugate roots x = 2 ± 2i.",
      difficulty: "Intermediate",
    },
    {
      question:
        "Find all integer values of k from 0 through 6 for which x² - 4x + k = 0 has two distinct real roots. Then classify each as rational or irrational.",
      answer:
        "D=16-4k. Two distinct real roots require k<4: k=0,1,2,3. D values 16,12,8,4. k=0 and 3 give rational roots; k=1 and 2 give irrational roots.",
      difficulty: "Advanced",
    },
    {
      question:
        "Create a quadratic with integer coefficients whose roots are 2 ± √5. Expand it to standard form, calculate D, and show that your root classification agrees.",
      sampleAnswer:
        "One answer: (x-2)²=5 → x²-4x-1=0. D=16+4=20, positive and not a perfect square, so the two roots are irrational.",
      difficulty: "Application / Creation",
    },
  ],

  commonMistakes: [
    {
      mistake:
        "Stopping after deciding that D > 0 means two real roots.",
      correction:
        "For integer coefficients, also check whether D is a perfect square to distinguish rational from irrational roots.",
    },
    {
      mistake:
        "Calling every positive discriminant a perfect square.",
      correction:
        "Numbers such as 8, 12, 20, and 24 are positive but not perfect squares.",
    },
    {
      mistake:
        "Saying D < 0 means the quadratic has no solutions.",
      correction:
        "It has no real solutions, but it has two nonreal complex conjugate roots.",
    },
    {
      mistake:
        "Thinking complex roots should appear as x-intercepts on the real graph.",
      correction:
        "Only real roots correspond to real x-intercepts.",
    },
    {
      mistake:
        "Forgetting that a repeated root counts twice algebraically.",
      correction:
        "When D = 0, there is one distinct real value with multiplicity 2.",
    },
    {
      mistake:
        "Approximating irrational roots too early.",
      correction:
        "Keep exact radical form such as 1 ± √3 until a decimal approximation is needed.",
    },
  ],

  summary: [
    "The discriminant is D = b² - 4ac.",
    "The sign of D determines whether the roots are real or nonreal complex.",
    "For integer coefficients, D > 0 and a perfect-square D gives two distinct rational roots.",
    "For integer coefficients, D > 0 and a non-perfect-square D gives two distinct irrational roots.",
    "D = 0 gives one repeated real root.",
    "D < 0 gives two nonreal complex conjugate roots.",
    "Rational and irrational real roots appear as x-intercepts on the real graph.",
    "Complex roots do not appear as x-intercepts on the real coordinate plane.",
    "The quadratic formula verifies every root classification.",
  ],
};

export default lesson05;
