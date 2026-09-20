const lesson02 = {
  id: "algebra-two-module-03-lesson-02",
  slug: "solving-quadratic-equations-by-completing-the-square",

  courseId: "algebra-2",
  courseTitle: "Algebra II",

  moduleNumber: 3,
  moduleTitle: "Quadratic Functions and Equations",
  lessonNumber: 2,

  title: "Solving Quadratic Equations by Completing the Square",

  subtitle:
    "Create a perfect-square trinomial, use the square-root property, and connect standard form, vertex form, roots, symmetry, and graphs.",

  duration: "90-105 minutes",
  level: "Intermediate",
  status: "Available",

  essentialQuestion:
    "How can completing the square transform a quadratic equation into a form that reveals its structure and solutions?",

  bigIdea:
    "Completing the square turns part of a quadratic expression into a perfect square. This makes the equation easier to solve with square roots and also reveals the vertex and axis of symmetry of the related parabola. The same transformation connects algebraic solving to graph structure.",

  problemFirst: {
    title: "The Same Parabola in Two Forms",
    scenario:
      "Consider y = x² + 6x + 5. The same function can also be written as y = (x + 3)² - 4. Study the graph before solving. What does the second form reveal immediately that the first form hides? Then use completing the square to show why the two equations are equivalent.",
    questions: [
      "What is the vertex of y = (x + 3)² - 4?",
      "What is the axis of symmetry?",
      "Where does the graph cross the x-axis?",
      "How can x² + 6x become part of a perfect square?",
      "Why must the same value be added to both sides of an equation?",
      "How does the completed-square form help us solve the equation?",
    ],
  },

  definitionTable: {
    title: "Definitions for Completing the Square",
    description:
      "These ideas explain both the algebraic procedure and the geometry of the parabola.",
    columns: [
      { key: "term", label: "Term" },
      { key: "definition", label: "Definition" },
      { key: "example", label: "Example / Meaning" },
    ],
    rows: [
      {
        term: "Perfect-square trinomial",
        definition:
          "A trinomial that factors as the square of a binomial.",
        example: "x² + 6x + 9 = (x + 3)²",
      },
      {
        term: "Completing the square",
        definition:
          "A method that adds a carefully chosen value so a quadratic expression contains a perfect-square trinomial.",
        example: "x² + 6x becomes x² + 6x + 9.",
      },
      {
        term: "Square-root property",
        definition:
          "If u² = k with k ≥ 0, then u = ±√k.",
        example: "(x + 3)² = 4 gives x + 3 = ±2.",
      },
      {
        term: "Vertex form",
        definition:
          "A quadratic function written as y = a(x - h)² + k.",
        example: "y = (x + 3)² - 4 has vertex (-3, -4).",
      },
      {
        term: "Equivalent equations",
        definition:
          "Equations that have the same solution set.",
        example:
          "x² + 6x + 5 = 0 and (x + 3)² = 4 have the same roots.",
      },
      {
        term: "Plus-or-minus symbol",
        definition:
          "The symbol ± indicates both the positive and negative square roots.",
        example: "√4 gives +2 and -2, written ±2.",
      },
    ],
  },

  mainConceptTable: {
    title: "Main Concepts for Completing the Square",
    description:
      "The method is systematic. Each step preserves the equation while exposing the hidden square structure.",
    columns: [
      { key: "concept", label: "Main Concept" },
      { key: "rule", label: "Mathematical Rule" },
      { key: "meaning", label: "What You Should Understand" },
    ],
    rows: [
      {
        concept: "Normalize the x² coefficient",
        rule: "If a ≠ 1, divide by a first when possible.",
        meaning:
          "The basic completing-square rule is easiest when the coefficient of x² is 1.",
      },
      {
        concept: "Move the constant",
        rule: "x² + bx = -c",
        meaning:
          "Separate the x-terms from the constant before building the perfect square.",
      },
      {
        concept: "Half b, then square",
        rule: "Add (b/2)²",
        meaning:
          "The number that completes x² + bx is always the square of half the coefficient of x.",
      },
      {
        concept: "Keep the equation balanced",
        rule: "Add the same value to both sides",
        meaning:
          "Equivalent equations must preserve equality.",
      },
      {
        concept: "Factor the perfect square",
        rule: "x² + bx + (b/2)² = (x + b/2)²",
        meaning:
          "The trinomial collapses into one squared binomial.",
      },
      {
        concept: "Use both square roots",
        rule: "u² = k ⇒ u = ±√k",
        meaning:
          "The positive and negative square roots can generate two real solutions.",
      },
      {
        concept: "Connect to graph structure",
        rule: "y = a(x - h)² + k",
        meaning:
          "Completed-square form reveals the vertex, axis of symmetry, and often the roots visually.",
      },
    ],
  },

  tikzGraphs: [
    {
      id: "completing-square-equivalence",
      title: "Standard Form and Vertex Form Describe the Same Parabola",
      equation: "y = x² + 6x + 5 = (x + 3)² - 4",
      src: "/graphs/algebra-2/module-3/lesson-02/completing-square-equivalence.svg",
      alt:
        "Parabola showing y equals x squared plus 6x plus 5 and the equivalent vertex form y equals open parenthesis x plus 3 close parenthesis squared minus 4, with roots negative 5 and negative 1 and vertex negative 3 negative 4.",
      caption:
        "Completing the square changes the form, not the function. The vertex form immediately reveals the vertex (-3, -4) and symmetry line x = -3, while the graph confirms roots x = -5 and x = -1.",
      sourceNote:
        "Graph design source: TikZ + PGFPlots. Browser display: SVG companion asset.",
    },
    {
      id: "completing-square-plus-minus",
      title: "Why the ± Symbol Produces Two Solutions",
      equation: "(x + 3)² = 4",
      src: "/graphs/algebra-2/module-3/lesson-02/completing-square-plus-minus.svg",
      alt:
        "Graph of y equals open parenthesis x plus 3 close parenthesis squared and horizontal line y equals 4 intersecting at x equals negative 5 and x equals negative 1.",
      caption:
        "The equation (x + 3)² = 4 asks where the parabola y = (x + 3)² meets the horizontal line y = 4. There are two intersections, so x + 3 can be +2 or -2. That is the graphical meaning of ±.",
      sourceNote:
        "Graph design source: TikZ + PGFPlots. Browser display: SVG companion asset.",
    },
  ],

  learningObjectives: [
    "Recognize a perfect-square trinomial.",
    "Determine the value needed to complete a square using (b/2)².",
    "Solve quadratic equations by completing the square.",
    "Handle equations whose leading coefficient is not 1.",
    "Use the square-root property with the ± symbol correctly.",
    "Express irrational solutions exactly using radicals.",
    "Rewrite a quadratic from standard form into vertex form.",
    "Connect completed-square form to the vertex and axis of symmetry.",
    "Interpret roots graphically and verify solutions in the original equation.",
  ],

  prerequisiteKnowledge: [
    "Squaring binomials",
    "Perfect-square trinomials",
    "Solving linear equations",
    "Square roots and radicals",
    "Equivalent equations",
    "Vertex and axis of symmetry",
  ],

  formulas: [
    {
      name: "Completing-Square Number",
      formula: "For x² + bx, add (b/2)²",
      meaning:
        "Half the coefficient of x, then square it. This creates a perfect-square trinomial.",
    },
    {
      name: "Perfect-Square Identity",
      formula: "x² + bx + (b/2)² = (x + b/2)²",
      meaning:
        "This identity is the algebraic engine behind completing the square.",
    },
    {
      name: "Square-Root Property",
      formula: "u² = k ⇒ u = ±√k",
      meaning:
        "Taking a square root requires both signs when solving an equation.",
    },
    {
      name: "Vertex Form",
      formula: "y = a(x - h)² + k",
      meaning:
        "The vertex is (h, k), and x = h is the axis of symmetry.",
    },
  ],

  workedExamples: [
    {
      id: "example-1",
      title: "Complete the Square with Integer Roots",
      problem: "Solve x² + 6x + 5 = 0 by completing the square.",
      plan:
        "Move the constant, add (6/2)² to both sides, factor the perfect square, then use the square-root property.",
      solutionSteps: [
        "Move the constant: x² + 6x = -5.",
        "Half the x coefficient: 6/2 = 3.",
        "Square it: 3² = 9.",
        "Add 9 to both sides: x² + 6x + 9 = 4.",
        "Factor the left side: (x + 3)² = 4.",
        "Take both square roots: x + 3 = ±2.",
        "Solve: x = -3 + 2 = -1 or x = -3 - 2 = -5.",
        "Verify both roots in x² + 6x + 5 = 0.",
      ],
      answer: "x = -1 or x = -5",
      interpretation:
        "The same quadratic is y = (x + 3)² - 4, so its vertex is (-3, -4) and its x-intercepts are (-5, 0) and (-1, 0).",
    },
    {
      id: "example-2",
      title: "Complete the Square with a Positive Constant",
      problem: "Solve x² - 8x + 7 = 0.",
      plan:
        "Move 7, create the perfect square using (-8/2)², then solve with square roots.",
      solutionSteps: [
        "Move the constant: x² - 8x = -7.",
        "Half -8: -8/2 = -4.",
        "Square it: (-4)² = 16.",
        "Add 16 to both sides: x² - 8x + 16 = 9.",
        "Factor: (x - 4)² = 9.",
        "Take square roots: x - 4 = ±3.",
        "Solve: x = 7 or x = 1.",
      ],
      answer: "x = 1 or x = 7",
      interpretation:
        "The completed form y = (x - 4)² - 9 shows symmetry around x = 4, so the two roots are equally spaced from 4.",
    },
    {
      id: "example-3",
      title: "When the Leading Coefficient Is Not 1",
      problem: "Solve 2x² + 12x + 10 = 0 by completing the square.",
      plan:
        "Divide every term by 2 first, then complete the square on the normalized equation.",
      solutionSteps: [
        "Divide by 2: x² + 6x + 5 = 0.",
        "Move the constant: x² + 6x = -5.",
        "Add (6/2)² = 9 to both sides.",
        "Obtain x² + 6x + 9 = 4.",
        "Factor: (x + 3)² = 4.",
        "Take square roots: x + 3 = ±2.",
        "Solve: x = -1 or x = -5.",
      ],
      answer: "x = -1 or x = -5",
      interpretation:
        "Dividing by the nonzero leading coefficient preserves the solution set and makes the completing-square pattern visible.",
    },
    {
      id: "example-4",
      title: "Real-World Model with Irrational Solutions",
      problem:
        "A ball's height is modeled by h(t) = -5t² + 20t + 15, where t is time in seconds. When does the ball reach the ground?",
      plan:
        "Set h(t) = 0, normalize the equation, complete the square, then interpret the two algebraic solutions in context.",
      solutionSteps: [
        "Set height to zero: -5t² + 20t + 15 = 0.",
        "Divide by -5: t² - 4t - 3 = 0.",
        "Move the constant: t² - 4t = 3.",
        "Add (-4/2)² = 4 to both sides: t² - 4t + 4 = 7.",
        "Factor: (t - 2)² = 7.",
        "Take square roots: t - 2 = ±√7.",
        "Solve: t = 2 ± √7.",
        "The negative solution 2 - √7 is about -0.65 seconds and is outside the physical time domain. The valid time is 2 + √7 ≈ 4.65 seconds.",
      ],
      answer: "The ball reaches the ground at t = 2 + √7 ≈ 4.65 seconds.",
      interpretation:
        "Algebra may produce mathematically valid roots that must still be interpreted against the real-world domain.",
    },
  ],

  realWorldApplications: [
    {
      id: "projectile-motion",
      field: "Physics",
      title: "Projectile Motion",
      application:
        "Completing the square rewrites a height model into vertex form so the maximum height and time of the peak become visible immediately.",
      model: "h(t) = -5t² + 20t + 15 = -5(t - 2)² + 35",
      question:
        "What does the vertex (2, 35) mean in the motion of the ball?",
    },
    {
      id: "bridge-arch",
      field: "Engineering",
      title: "Bridge and Arch Design",
      application:
        "A parabolic arch can be modeled in standard form and then rewritten in vertex form to locate its highest point and line of symmetry.",
      model: "y = -0.5x² + 6x = -0.5(x - 6)² + 18",
      question:
        "How does the vertex help an engineer identify the center and maximum height of the arch?",
    },
    {
      id: "business-profit",
      field: "Business",
      title: "Profit Optimization",
      application:
        "Quadratic profit models can be rewritten by completing the square to reveal the production level associated with maximum profit.",
      model: "P(x) = -2x² + 80x - 500 = -2(x - 20)² + 300",
      question:
        "What do x = 20 and P(20) = 300 mean for a business decision?",
    },
    {
      id: "robot-path",
      field: "Robotics",
      title: "Trajectory and Path Planning",
      application:
        "Quadratic paths appear in simplified trajectory planning. Vertex form makes the turning point of a parabolic path easy to identify and communicate.",
      model: "y = (x - 4)² + 2",
      question:
        "If this equation models a robot's path in a coordinate system, what geometric information does the vertex provide?",
    },
  ],

  pythonLab: {
    title: "Python Lab — Verify Completing the Square",
    objective:
      "Use Python to compare standard form and vertex form numerically and verify that both expressions produce the same output.",
    connection:
      "The mathematics transforms x² + 6x + 5 into (x + 3)² - 4. The code evaluates both forms for the same inputs so students can verify computationally that the transformation preserves the function.",
    code: `def standard_form(x):
    return x**2 + 6*x + 5

def vertex_form(x):
    return (x + 3)**2 - 4

for x in range(-7, 2):
    y1 = standard_form(x)
    y2 = vertex_form(x)
    print(x, y1, y2, y1 == y2)

# Roots from the completed-square equation:
# (x + 3)^2 = 4
roots = [-3 + 2, -3 - 2]
print("roots:", roots)`,
    questions: [
      "Why should standard_form(x) and vertex_form(x) return the same value for every x?",
      "What Python operator represents squaring?",
      "What do the Boolean values True or False tell us in the printed output?",
      "How does the list roots = [-3 + 2, -3 - 2] represent the ± step?",
      "How could you modify the code to test x² - 8x + 7 = (x - 4)² - 9?",
    ],
    extension:
      "Create a Python function that accepts b and c for x² + bx + c and reports the completing-square number (b/2)², the vertex x-coordinate, and the completed-square constant.",
  },

  lumineryGuidance: {
    title: "Luminery AI — Completing the Square Coach",
    message:
      "Luminery should guide the learner's reasoning without immediately giving the finished solution. The learner should identify the structure, choose the completing-square number, explain why balance must be preserved, and connect the result to the graph.",
    prompt:
      "I am solving a quadratic by completing the square. Do not give me the final answer first. Ask me one question at a time so I can identify b, calculate (b/2)², balance the equation, factor the perfect square, use ± correctly, and interpret the result on the graph.",
    coachingQuestions: [
      "What is the coefficient of x after the x² coefficient has been normalized to 1?",
      "What is half of that coefficient?",
      "What happens when you square that half-value?",
      "Why must that number be added to both sides of the equation?",
      "What perfect-square binomial does the left side become?",
      "After taking square roots, have you included both signs?",
      "What does your completed-square form reveal about the vertex and axis of symmetry?",
      "How can the graph verify your algebraic solutions?",
    ],
    masteryCheck:
      "A learner demonstrates mastery when they can complete the square, explain why every transformation is valid, use ± correctly, connect the completed form to the graph, and verify the solutions without depending on Luminery for the final steps.",
  },

  independentPractice: [
    {
      question: "Solve x² + 4x - 5 = 0 by completing the square.",
      answer: "x² + 4x = 5; add 4: (x + 2)² = 9; x = 1 or x = -5.",
      difficulty: "Foundation",
    },
    {
      question: "Solve x² - 10x + 9 = 0 by completing the square.",
      answer: "x² - 10x = -9; add 25: (x - 5)² = 16; x = 1 or x = 9.",
      difficulty: "Foundation",
    },
    {
      question: "What number completes the square in x² + 14x + __?",
      answer: "49, because (14/2)² = 7² = 49.",
      difficulty: "Foundation",
    },
    {
      question: "Rewrite y = x² + 8x + 3 in vertex form by completing the square.",
      answer: "y = (x + 4)² - 13.",
      difficulty: "Intermediate",
    },
    {
      question: "Solve x² + 2x - 7 = 0 exactly.",
      answer: "(x + 1)² = 8, so x = -1 ± 2√2.",
      difficulty: "Intermediate",
    },
    {
      question: "Solve 3x² + 12x - 15 = 0 by completing the square.",
      answer: "Divide by 3: x² + 4x - 5 = 0; (x + 2)² = 9; x = 1 or x = -5.",
      difficulty: "Intermediate",
    },
    {
      question: "Why is ± required when solving (x - 4)² = 25?",
      answer: "Because both 5 and -5 square to 25, so x - 4 = 5 or x - 4 = -5.",
      difficulty: "Reasoning",
    },
    {
      question: "The equation (x + 2)² = 3 has what two exact solutions?",
      answer: "x = -2 ± √3.",
      difficulty: "Radicals",
    },
    {
      question: "For y = x² - 6x + 2, use completing the square to identify the vertex and axis of symmetry.",
      answer: "y = (x - 3)² - 7; vertex (3, -7); axis x = 3.",
      difficulty: "Graph Connection",
    },
    {
      question: "Create a quadratic equation that becomes (x - 5)² = 12 after completing the square. Write your equation in standard form.",
      answer: "One answer: x² - 10x + 13 = 0, because x² - 10x = -13 and adding 25 gives (x - 5)² = 12.",
      difficulty: "Creation",
    },
  ],

  groupWork: [
    {
      question:
        "Explain why adding (b/2)² completes x² + bx. Use expansion of (x + b/2)² as evidence.",
      sampleAnswer:
        "Expanding gives x² + bx + b²/4, and b²/4 = (b/2)², so that exact term creates the square.",
    },
    {
      question:
        "Compare x² + 6x + 5 and (x + 3)² - 4. What information is easier to see in each form?",
      sampleAnswer:
        "Standard form makes the y-intercept 5 immediate; vertex form makes vertex (-3,-4) and axis x=-3 immediate.",
    },
    {
      question:
        "A student solves (x + 3)² = 16 and writes only x = 1. Find the missing solution and explain the mistake.",
      sampleAnswer:
        "The missing solution is x=-7. The student used only +4 instead of ±4.",
    },
    {
      question:
        "Sketch y = (x - 2)² - 9. Use the graph to predict the roots, then confirm them algebraically.",
      sampleAnswer:
        "Set (x-2)²=9, so x=2±3, giving x=-1 and x=5; the graph should cross at (-1,0) and (5,0).",
    },
    {
      question:
        "Complete the square for y = x² - 12x + 20 and identify the vertex, axis, and minimum value.",
      sampleAnswer:
        "y=(x-6)²-16; vertex (6,-16), axis x=6, minimum -16.",
    },
    {
      question:
        "Solve 2x² - 8x - 6 = 0 by completing the square. Compare your result with a partner who uses factoring or the quadratic formula if possible.",
      sampleAnswer:
        "Divide by 2: x²-4x-3=0; (x-2)²=7; x=2±√7.",
    },
    {
      question:
        "Why does completing the square reveal the axis of symmetry automatically? Explain using y = a(x - h)² + k.",
      sampleAnswer:
        "The squared term is smallest or largest when x=h, so the graph is symmetric around x=h.",
    },
    {
      question:
        "A rectangle has width x and length x+4 with area 21. Build the quadratic equation and solve it by completing the square. Which root is physically meaningful?",
      sampleAnswer:
        "x(x+4)=21 -> x²+4x-21=0 -> (x+2)²=25 -> x=3 or -7. Width must be positive, so x=3.",
    },
    {
      question:
        "Draw the graphs y=(x+1)² and y=9 on the same axes. Explain how the intersection points solve (x+1)²=9.",
      sampleAnswer:
        "Intersections occur where x+1=±3, so x=2 and x=-4.",
    },
    {
      question:
        "Create a visual poster titled 'Half It, Square It, Balance It, Solve It' with one original example and a graph showing the roots.",
      sampleAnswer:
        "Answers vary; the poster should correctly apply (b/2)², preserve equality, use ±, and connect roots to graph intersections.",
    },
  ],

  quiz: [
    {
      question: "What value completes x² + 10x + __ as a perfect-square trinomial?",
      answer: "25.",
    },
    {
      question: "Solve x² + 8x + 7 = 0 by completing the square.",
      answer: "(x+4)²=9, so x=-1 or x=-7.",
    },
    {
      question: "Rewrite y = x² - 4x + 1 in vertex form.",
      answer: "y=(x-2)²-3.",
    },
    {
      question: "Explain the error: from (x - 5)² = 9, a student concludes x = 8 only.",
      answer: "They omitted the negative square root. x-5=±3, so x=8 or x=2.",
    },
    {
      question: "Solve 2x² + 8x - 6 = 0 exactly by completing the square.",
      answer: "Divide by 2: x²+4x-3=0; (x+2)²=7; x=-2±√7.",
    },
  ],

  homework: [
    {
      question: "Solve x² + 2x - 8 = 0 by completing the square.",
      answer: "(x+1)²=9, so x=2 or x=-4.",
      difficulty: "Foundation",
    },
    {
      question: "Solve x² - 6x + 5 = 0 by completing the square.",
      answer: "(x-3)²=4, so x=1 or x=5.",
      difficulty: "Foundation",
    },
    {
      question: "What value completes x² - 16x + __?",
      answer: "64, because (-16/2)² = 64.",
      difficulty: "Foundation",
    },
    {
      question: "Rewrite y = x² + 10x + 7 in vertex form.",
      answer: "y=(x+5)²-18.",
      difficulty: "Intermediate",
    },
    {
      question: "Solve x² - 4x - 2 = 0 exactly.",
      answer: "(x-2)²=6, so x=2±√6.",
      difficulty: "Intermediate",
    },
    {
      question: "Solve 4x² + 16x - 20 = 0 by completing the square.",
      answer: "Divide by 4: x²+4x-5=0; (x+2)²=9; x=1 or x=-5.",
      difficulty: "Intermediate",
    },
    {
      question: "For y = x² + 12x + 20, find the vertex and axis of symmetry by completing the square.",
      answer: "y=(x+6)²-16; vertex (-6,-16), axis x=-6.",
      difficulty: "Intermediate",
    },
    {
      question: "Solve 3x² - 6x - 12 = 0 exactly by completing the square.",
      answer: "Divide by 3: x²-2x-4=0; (x-1)²=5; x=1±√5.",
      difficulty: "Advanced",
    },
    {
      question:
        "A projectile has height h(t) = -4t² + 16t + 20. Find when it reaches the ground by completing the square and interpret the solutions.",
      answer:
        "Set h=0; divide by -4: t²-4t-5=0; (t-2)²=9; t=5 or -1. The physical time is 5 seconds.",
      difficulty: "Advanced",
    },
    {
      question:
        "Create your own quadratic equation that does not factor easily over the integers. Solve it by completing the square, write the related function in vertex form, identify the vertex and axis of symmetry, and sketch or describe its graph.",
      sampleAnswer:
        "Answers vary. The algebra, radical solutions, vertex form, graph features, and verification must be consistent.",
      difficulty: "Application / Creation",
    },
  ],

  commonMistakes: [
    {
      mistake: "Adding (b/2) instead of (b/2)².",
      correction:
        "Half the coefficient of x and then square that result before adding it.",
    },
    {
      mistake: "Adding the completing-square number to only one side of the equation.",
      correction:
        "Add the same value to both sides to preserve equality.",
    },
    {
      mistake: "Forgetting to divide by the leading coefficient when a ≠ 1.",
      correction:
        "Normalize the x² coefficient first, or factor a carefully before completing the square.",
    },
    {
      mistake: "Forgetting ± after taking square roots.",
      correction:
        "If u²=k with k>0, both +√k and -√k must be considered.",
    },
    {
      mistake: "Misreading (x + 3)² as a vertex x-coordinate of +3.",
      correction:
        "Vertex form uses (x-h)². Therefore (x+3)²=(x-(-3))², so h=-3.",
    },
    {
      mistake: "Rejecting an irrational root simply because it is not a whole number.",
      correction:
        "Irrational roots can be exact, valid solutions. Keep radical form unless a decimal approximation is requested.",
    },
  ],

  summary: [
    "Completing the square creates a perfect-square trinomial using (b/2)².",
    "The same value must be added to both sides of an equation.",
    "If the coefficient of x² is not 1, normalize the equation before using the basic pattern.",
    "After factoring the perfect square, use the square-root property and include ±.",
    "Completing the square can produce exact irrational solutions.",
    "The completed-square form connects directly to vertex form and reveals the vertex and axis of symmetry.",
    "Graphs explain why some completed-square equations have two, one, or no real intersections at a given height.",
    "Real-world solutions must be checked against the context and domain.",
  ],
};

export default lesson02;
