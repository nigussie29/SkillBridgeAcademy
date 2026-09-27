const lesson06 = {
  id: "algebra-two-module-03-lesson-06",
  slug: "choosing-an-efficient-solution-method",

  courseId: "algebra-2",
  courseTitle: "Algebra II",

  moduleNumber: 3,
  moduleTitle: "Quadratic Functions and Equations",
  lessonNumber: 6,

  title: "Choosing an Efficient Solution Method",

  subtitle:
    "Read the structure of a quadratic first, then choose factoring, the square-root property, completing the square, or the quadratic formula strategically.",

  duration: "90-105 minutes",
  level: "Intermediate",
  status: "Available",

  essentialQuestion:
    "How can the structure of a quadratic equation help us choose the most efficient solving method before we begin calculating?",

  bigIdea:
    "Strong algebra is not only about knowing several methods. It is also about recognizing structure. Factoring is efficient when factors are visible, the square-root property is efficient when a squared expression is isolated, completing the square is useful when we want vertex structure or when the middle term is convenient, and the quadratic formula is the universal method when other approaches are not efficient. The discriminant and graph can help us predict what kind of answers to expect and verify the result.",

  problemFirst: {
    title: "Do Not Solve Yet — Choose the Method First",
    scenario:
      "Study these equations without solving them immediately: x² - 7x + 12 = 0, (x - 3)² = 20, x² + 6x + 1 = 0, and 2x² + 3x - 7 = 0. For each equation, identify the visible structure and decide which method would likely require the least unnecessary work.",
    questions: [
      "Which equation shows factors or factorable integer structure?",
      "Which equation already has a squared expression isolated?",
      "Which equation is especially convenient for completing the square?",
      "Which equation has no obvious simple factoring pattern?",
      "When is the quadratic formula the safest universal choice?",
      "How can the discriminant help you predict whether factoring over integers is likely?",
      "Why can two correct methods still differ greatly in efficiency?",
    ],
  },

  definitionTable: {
    title: "Definitions for Strategic Quadratic Solving",
    description:
      "Efficient solving begins with recognizing the mathematical structure before selecting an algorithm.",
    columns: [
      { key: "term", label: "Term" },
      { key: "definition", label: "Example / Signal" },
      { key: "use", label: "Why It Matters" },
    ],
    rows: [
      {
        term: "Factoring",
        definition:
          "Rewrite a quadratic as a product of factors and use the zero-product property.",
        use: "Best when factors are obvious or can be found quickly.",
      },
      {
        term: "Square-root property",
        definition:
          "If u² = k, then u = ±√k.",
        use: "Best when the squared expression is already isolated or can be isolated immediately.",
      },
      {
        term: "Completing the square",
        definition:
          "Create a perfect-square trinomial so the equation becomes a squared binomial.",
        use: "Useful for revealing vertex form, deriving exact roots, or exploiting a convenient middle coefficient.",
      },
      {
        term: "Quadratic formula",
        definition:
          "x = (-b ± √(b² - 4ac)) / (2a).",
        use: "Works for every quadratic equation and is especially efficient when factoring is not obvious.",
      },
      {
        term: "Efficient method",
        definition:
          "A correct method that reaches the solution with minimal unnecessary algebra while preserving clarity.",
        use: "The best method depends on the equation's structure, not personal habit.",
      },
      {
        term: "Verification",
        definition:
          "Check solutions by substitution, graph, or an equivalent method.",
        use: "A fast method is valuable only when the result is correct.",
      },
    ],
  },

  mainConceptTable: {
    title: "Quadratic Method-Selection Guide",
    description:
      "There is no single method that is always shortest. Read the equation first and look for structural clues.",
    columns: [
      { key: "structure", label: "What You Notice" },
      { key: "method", label: "Usually Efficient Method" },
      { key: "reason", label: "Why" },
    ],
    rows: [
      {
        structure: "A common factor, difference of squares, perfect-square trinomial, or easy integer factors",
        method: "Factoring",
        reason: "The zero-product property can produce the roots with very little work.",
      },
      {
        structure: "A squared expression is isolated: (x - h)² = k or x² = k",
        method: "Square-root property",
        reason: "Taking ±√k immediately gives the solution branches.",
      },
      {
        structure: "Leading coefficient is 1 and the x-coefficient is convenient; vertex form is useful",
        method: "Completing the square",
        reason: "It exposes the perfect-square structure and connects directly to the vertex.",
      },
      {
        structure: "No easy factoring pattern; coefficients are awkward; irrational or complex roots are expected",
        method: "Quadratic formula",
        reason: "It is universal and avoids guessing factors.",
      },
      {
        structure: "You want to predict root type before solving",
        method: "Discriminant first",
        reason: "D = b² - 4ac predicts two real, one repeated, or complex roots and helps set expectations.",
      },
      {
        structure: "You want to estimate or verify real solutions visually",
        method: "Graph as a check",
        reason: "x-intercepts confirm real roots, but graphing alone may not give exact values.",
      },
    ],
  },

  tikzGraphs: [
    {
      id: "method-choice-same-parabola",
      title: "One Quadratic, Several Useful Forms",
      equation: "y = x² - 6x + 5 = (x - 1)(x - 5) = (x - 3)² - 4",
      src: "/graphs/algebra-2/module-3/lesson-06/method-choice-same-parabola.svg",
      alt:
        "Parabola y equals x squared minus 6x plus 5 with roots one and five, vertex three negative four, showing factoring form and completed-square form for the same graph.",
      caption:
        "The graph is one mathematical object, but different algebraic forms highlight different information. Factored form reveals roots x = 1 and x = 5 quickly. Vertex form reveals the vertex (3, -4) and makes the square-root property available after setting y = 0. Efficient method choice depends on which structure is easiest to see.",
      sourceNote:
        "Graph design source: TikZ + PGFPlots. Browser display: SVG companion asset.",
    },
    {
      id: "method-choice-irrational-roots",
      title: "When Factoring Is Not the Efficient First Choice",
      equation: "y = x² - 2x - 1",
      src: "/graphs/algebra-2/module-3/lesson-06/method-choice-irrational-roots.svg",
      alt:
        "Parabola y equals x squared minus 2x minus 1 with irrational x-intercepts at one minus square root two and one plus square root two.",
      caption:
        "For x² - 2x - 1 = 0, the discriminant is D = 8, which is positive but not a perfect square. The roots are irrational: x = 1 ± √2. Integer factoring is not efficient, so the quadratic formula or completing the square is a better choice.",
      sourceNote:
        "Graph design source: TikZ + PGFPlots. Browser display: SVG companion asset.",
    },
  ],

  learningObjectives: [
    "Recognize structural clues that suggest an efficient quadratic-solving method.",
    "Choose among factoring, the square-root property, completing the square, and the quadratic formula.",
    "Explain why a method is efficient for a particular equation.",
    "Use the discriminant to predict root type before fully solving.",
    "Distinguish exact solving methods from graphical estimation.",
    "Solve the same quadratic with more than one method and compare efficiency.",
    "Connect standard, factored, and vertex forms of the same quadratic.",
    "Verify solutions by substitution and graph.",
    "Avoid using a familiar method automatically when a shorter method is available.",
  ],

  prerequisiteKnowledge: [
    "Factoring quadratic expressions",
    "Zero-product property",
    "Square-root property",
    "Completing the square",
    "Quadratic formula",
    "Discriminant",
    "Vertex form",
    "Roots and x-intercepts",
  ],

  formulas: [
    {
      name: "Factoring Pattern",
      formula: "uv = 0 → u = 0 or v = 0",
      meaning:
        "After factoring, use the zero-product property to solve each factor.",
    },
    {
      name: "Square-Root Property",
      formula: "u² = k → u = ±√k",
      meaning:
        "Use this when a squared expression is isolated.",
    },
    {
      name: "Completing-the-Square Number",
      formula: "For x² + bx, add (b/2)²",
      meaning:
        "This creates a perfect-square trinomial and leads naturally to vertex form.",
    },
    {
      name: "Quadratic Formula",
      formula: "x = (-b ± √(b² - 4ac)) / (2a)",
      meaning:
        "This universal method works even when factoring is difficult or roots are irrational or complex.",
    },
    {
      name: "Discriminant",
      formula: "D = b² - 4ac",
      meaning:
        "Use D to predict the nature of roots before completing the full solution.",
    },
  ],

  workedExamples: [
    {
      id: "example-1",
      title: "Choose Factoring When the Factors Are Visible",
      problem: "Solve x² - 7x + 12 = 0 using the most efficient method.",
      plan:
        "Look for two integers whose product is 12 and whose sum is -7.",
      solutionSteps: [
        "Recognize that the equation is already in standard form.",
        "The numbers -3 and -4 multiply to 12 and add to -7.",
        "Factor: x² - 7x + 12 = (x - 3)(x - 4).",
        "Use the zero-product property: x - 3 = 0 or x - 4 = 0.",
        "Solve: x = 3 or x = 4.",
        "Factoring is more efficient here than substituting three coefficients into the quadratic formula.",
      ],
      answer: "x = 3 or x = 4",
      interpretation:
        "The graph crosses the x-axis at x = 3 and x = 4. The visible factor pattern made factoring the fastest exact method.",
    },
    {
      id: "example-2",
      title: "Choose the Square-Root Property When a Square Is Isolated",
      problem: "Solve (x - 3)² = 20 using the most efficient method.",
      plan:
        "The squared binomial is already isolated, so use ±√20 directly.",
      solutionSteps: [
        "Take both square roots: x - 3 = ±√20.",
        "Simplify: √20 = 2√5.",
        "Therefore x - 3 = ±2√5.",
        "Add 3: x = 3 ± 2√5.",
        "Expanding first would create extra work with no benefit.",
      ],
      answer: "x = 3 ± 2√5",
      interpretation:
        "The equation is already in the ideal form for the square-root property, so expanding or using the full quadratic formula would be inefficient.",
    },
    {
      id: "example-3",
      title: "Choose Completing the Square When Structure Is Convenient",
      problem: "Solve x² + 6x + 1 = 0 efficiently and connect the solution to the vertex.",
      plan:
        "The leading coefficient is 1 and b = 6 is even, so completing the square is especially clean.",
      solutionSteps: [
        "Move the constant: x² + 6x = -1.",
        "Add (6/2)² = 9 to both sides.",
        "Obtain x² + 6x + 9 = 8.",
        "Factor: (x + 3)² = 8.",
        "Use the square-root property: x + 3 = ±√8 = ±2√2.",
        "Solve: x = -3 ± 2√2.",
        "The related function is y = (x + 3)² - 8, so the vertex is (-3, -8).",
      ],
      answer: "x = -3 ± 2√2",
      interpretation:
        "Completing the square solves the equation and reveals the vertex at the same time.",
    },
    {
      id: "example-4",
      title: "Choose the Quadratic Formula When Factoring Is Not Obvious",
      problem: "Solve 2x² + 3x - 7 = 0 efficiently.",
      plan:
        "No simple integer factor pair produces the middle term, so the quadratic formula avoids unproductive guessing.",
      solutionSteps: [
        "Identify a = 2, b = 3, c = -7.",
        "Compute D = 3² - 4(2)(-7) = 9 + 56 = 65.",
        "Because 65 is positive but not a perfect square, expect two irrational real roots.",
        "Use the formula: x = (-3 ± √65) / 4.",
        "Keep the exact radical form unless decimals are required.",
        "Approximate if needed: x ≈ 1.266 or x ≈ -2.766.",
      ],
      answer: "x = (-3 ± √65) / 4",
      interpretation:
        "The discriminant predicted irrational roots, so continued integer-factor searching would have been inefficient.",
    },
  ],

  realWorldApplications: [
    {
      id: "projectile-method-choice",
      field: "Physics",
      title: "Choosing a Method in Projectile Problems",
      application:
        "If a height equation simplifies to a factored form, factoring may be fastest. If it becomes (t-h)² = k, the square-root property is usually better. Otherwise, the quadratic formula provides a reliable general method.",
      model: "h(t) = -16t² + v₀t + h₀",
      question:
        "Why should the algebraic form after setting h(t) equal to the target height influence the method you choose?",
    },
    {
      id: "business-method-choice",
      field: "Business",
      title: "Break-Even Analysis",
      application:
        "A profit equation may factor cleanly into two break-even points or require the quadratic formula. Efficient method choice reduces calculation while preserving exact answers.",
      model: "P(x) = ax² + bx + c",
      question:
        "How could the discriminant help a manager know whether real break-even points exist before solving fully?",
    },
    {
      id: "engineering-method-choice",
      field: "Engineering",
      title: "Parabolic Design Constraints",
      application:
        "Vertex form is often valuable in engineering because it exposes maximum or minimum geometry, while standard form may be more convenient for the quadratic formula.",
      model: "y = a(x - h)² + k",
      question:
        "If an equation is already in vertex form, why might expanding it before solving be unnecessary?",
    },
    {
      id: "robotics-method-choice",
      field: "Robotics",
      title: "Path Intersections",
      application:
        "A path-planning calculation may need exact intersection locations. The equation's structure can determine whether factoring, square roots, or the quadratic formula is computationally simplest.",
      model: "path(x) - boundary(x) = 0",
      question:
        "Why is choosing a stable, direct method important when the same calculation must be repeated many times?",
    },
  ],

  pythonLab: {
    title: "Python Lab — Recommend a Quadratic Solving Method",
    objective:
      "Build a simple rule-based Python helper that examines a quadratic and recommends a reasonable first method without pretending that method selection can always be automated perfectly.",
    connection:
      "The code uses visible mathematical clues: whether b = 0, whether the discriminant is a perfect square, and whether the equation may have irrational or complex roots. Students then compare the program's recommendation with their own mathematical judgment.",
    code: `import math

def recommend_method(a, b, c):
    d = b**2 - 4*a*c

    if b == 0:
        return "Consider the square-root property"

    if d >= 0:
        root_d = math.isqrt(d)
        if root_d * root_d == d:
            return "Try factoring first; quadratic formula is a backup"

    return "Quadratic formula is a strong first choice"

examples = [
    (1, -7, 12),
    (1, 0, -20),
    (1, 6, 1),
    (2, 3, -7),
]

for a, b, c in examples:
    print((a, b, c), recommend_method(a, b, c))`,
    questions: [
      "Why does b = 0 often suggest the square-root property after moving the constant?",
      "Why does a perfect-square discriminant make rational roots possible?",
      "Why does the program say 'try factoring' rather than guarantee factoring is easiest?",
      "What mathematical information is missing when the code sees only a, b, and c?",
      "How would you improve the program to recognize perfect-square trinomials or common factors?",
    ],
    extension:
      "Create a decision-support function that reports the discriminant, predicted root type, and two possible methods. Then explain why human mathematical judgment is still needed.",
  },

  lumineryGuidance: {
    title: "Luminery AI — Method Selection Coach",
    message:
      "Luminery should not immediately solve the equation. It should first help the learner inspect structure, compare possible methods, justify a choice, and then carry out the selected method. If the learner chooses an inefficient but correct method, Luminery should ask whether a shorter structure is visible rather than simply rejecting the choice.",
    prompt:
      "I need to solve a quadratic equation. Do not solve it for me first. Ask me one question at a time so I identify its form, look for factoring patterns, check whether a square is already isolated, consider completing the square, use the discriminant if helpful, and justify which method is most efficient. After I choose a method, guide me through it and help me verify the roots.",
    coachingQuestions: [
      "Is the equation in standard form, factored form, or vertex/squared form?",
      "Is there a common factor or an obvious factoring pattern?",
      "Is a squared expression already isolated or easy to isolate?",
      "Would completing the square be especially clean here?",
      "What is the discriminant, and what kind of roots should you expect?",
      "Does the expected root type make integer factoring unlikely?",
      "Which method uses the fewest transformations while remaining clear?",
      "Can another correct method be used to verify the result?",
      "Do the real roots agree with the graph's x-intercepts?",
    ],
    masteryCheck:
      "A learner demonstrates mastery when they can choose and justify an efficient method, solve correctly, explain why another method may be longer, and verify the result independently.",
  },

  independentPractice: [
    {
      question: "Choose the most efficient method for x² - 9x + 20 = 0, then solve.",
      answer: "Factoring: (x - 4)(x - 5) = 0, so x = 4 or 5.",
      difficulty: "Foundation",
    },
    {
      question: "Choose the most efficient method for (x + 2)² = 15, then solve.",
      answer: "Square-root property: x = -2 ± √15.",
      difficulty: "Foundation",
    },
    {
      question: "Choose an efficient method for x² + 8x + 3 = 0 and explain why.",
      answer: "Completing the square is clean because a = 1 and b = 8 is even; x = -4 ± √13. Quadratic formula is also valid.",
      difficulty: "Intermediate",
    },
    {
      question: "Choose an efficient method for 3x² + 2x - 5 = 0, then solve.",
      answer: "Factoring is efficient: (3x + 5)(x - 1) = 0, so x = 1 or -5/3.",
      difficulty: "Intermediate",
    },
    {
      question: "Choose an efficient method for 2x² + x - 4 = 0.",
      answer: "Quadratic formula: D = 33, so x = (-1 ± √33)/4.",
      difficulty: "Intermediate",
    },
    {
      question: "Why is expanding (x - 5)² = 7 before solving usually inefficient?",
      answer: "The square is already isolated, so the square-root property gives x = 5 ± √7 immediately.",
      difficulty: "Reasoning",
    },
    {
      question: "For x² - 10x + 25 = 0, compare factoring and the quadratic formula.",
      answer: "Factoring is shorter: (x - 5)² = 0 gives x = 5. The quadratic formula works but requires more steps.",
      difficulty: "Reasoning",
    },
    {
      question: "For x² - 4x - 1 = 0, use the discriminant to help choose a method.",
      answer: "D = 20 is not a perfect square, so integer factoring is not useful; quadratic formula or completing the square is efficient. Roots are x = 2 ± √5.",
      difficulty: "Discriminant Connection",
    },
    {
      question: "A student always uses the quadratic formula. Is that mathematically wrong? Explain.",
      answer: "No. The formula is universal, but it may be inefficient when factoring or the square-root property is much shorter.",
      difficulty: "Reasoning",
    },
    {
      question: "Create four quadratic equations, one best suited to each main method, and justify each choice.",
      answer: "Answers vary; each equation should visibly support factoring, square-root property, completing the square, or quadratic formula.",
      difficulty: "Creation",
    },
  ],

  groupWork: [
    {
      question:
        "Sort these equations by likely first method: x²-5x+6=0, (x-4)²=11, x²+10x+7=0, 2x²+3x-8=0.",
      sampleAnswer:
        "Factoring; square-root property; completing the square; quadratic formula.",
    },
    {
      question:
        "Solve x² - 6x + 5 = 0 by factoring and by completing the square. Which is shorter and what extra information does completing the square reveal?",
      sampleAnswer:
        "Factoring gives x=1,5 quickly. Completing the square gives (x-3)²=4 and also reveals vertex (3,-4).",
    },
    {
      question:
        "Solve x² - 2x - 1 = 0 by completing the square and by the quadratic formula. Compare the number of steps.",
      sampleAnswer:
        "Both give x=1±√2. Either is reasonable; the formula is systematic, while completing the square is also short because a=1.",
    },
    {
      question:
        "A student tries to factor 2x² + 3x - 7 = 0 for five minutes. Use the discriminant to explain why switching methods is sensible.",
      sampleAnswer:
        "D=65 is not a perfect square, so rational/integer factorization will not produce the roots. The quadratic formula is more efficient.",
    },
    {
      question:
        "Explain why graphing is excellent for verification but may be poor for obtaining exact irrational roots.",
      sampleAnswer:
        "A graph can estimate intercepts, but exact values such as 1±√2 require algebraic methods.",
    },
    {
      question:
        "Find two different efficient methods for x² + 6x + 5 = 0. Defend your preferred method.",
      sampleAnswer:
        "Factoring gives (x+1)(x+5)=0 immediately; completing the square also works but is longer. Factoring is preferred for speed.",
    },
    {
      question:
        "When might completing the square be preferred even if a quadratic can be factored?",
      sampleAnswer:
        "When the vertex, axis of symmetry, maximum/minimum, or vertex form is also needed.",
    },
    {
      question:
        "Design a classroom decision tree for selecting a quadratic method. Include a warning that the tree is guidance, not an absolute rule.",
      sampleAnswer:
        "Check easy factoring; then isolated square; then whether completing the square is convenient; otherwise use the quadratic formula. The formula always remains a valid backup.",
    },
    {
      question:
        "Compare the goals 'find roots quickly' and 'understand the graph deeply.' How can those goals lead to different method choices?",
      sampleAnswer:
        "Factoring may find roots fastest, while completing the square may better reveal vertex structure and symmetry.",
    },
    {
      question:
        "Create a mini-poster titled 'Read the Structure Before You Calculate' with one original example for each method.",
      sampleAnswer:
        "Answers vary; examples and method justifications must be mathematically consistent.",
    },
  ],

  quiz: [
    {
      question: "Which method is usually most efficient for (x - 7)² = 18?",
      answer: "Square-root property.",
    },
    {
      question: "Which method is usually most efficient for x² - 11x + 30 = 0?",
      answer: "Factoring: (x - 5)(x - 6) = 0.",
    },
    {
      question: "Why is the quadratic formula a strong choice for x² - 3x - 1 = 0?",
      answer: "The equation does not factor easily over integers; D = 13 is not a perfect square.",
    },
    {
      question: "When might completing the square be strategically useful beyond just finding roots?",
      answer: "When vertex form, vertex, axis of symmetry, or maximum/minimum information is also desired.",
    },
    {
      question: "True or false: if factoring is possible, the quadratic formula is incorrect. Explain.",
      answer: "False. The quadratic formula remains correct; factoring may simply be more efficient.",
    },
  ],

  homework: [
    {
      question: "Choose the most efficient method for x² - 13x + 40 = 0 and solve.",
      answer: "Factoring: (x - 5)(x - 8)=0, so x=5 or 8.",
      difficulty: "Foundation",
    },
    {
      question: "Choose the most efficient method for (2x + 1)² = 27 and solve.",
      answer: "Square-root property: 2x+1=±3√3, so x=(-1±3√3)/2.",
      difficulty: "Foundation",
    },
    {
      question: "Choose an efficient method for x² + 4x - 7 = 0 and solve exactly.",
      answer: "Completing the square: (x+2)²=11, so x=-2±√11. Quadratic formula is also efficient.",
      difficulty: "Intermediate",
    },
    {
      question: "Choose the most efficient method for 2x² - 7x + 3 = 0 and solve.",
      answer: "Factoring: (2x-1)(x-3)=0, so x=1/2 or 3.",
      difficulty: "Intermediate",
    },
    {
      question: "Choose an efficient method for 3x² + 5x - 2 = 0 and solve.",
      answer: "Factoring: (3x-1)(x+2)=0, so x=1/3 or -2.",
      difficulty: "Intermediate",
    },
    {
      question: "Choose an efficient method for 2x² + 4x + 7 = 0 and classify the roots.",
      answer: "Quadratic formula; D=16-56=-40, so roots are nonreal complex: x=-1±(√10/2)i.",
      difficulty: "Advanced",
    },
    {
      question: "Explain why the discriminant can save time before attempting long factor searches.",
      answer: "If D is not a perfect square for an integer-coefficient quadratic, rational roots are not expected, so integer factoring is unlikely to be useful.",
      difficulty: "Reasoning",
    },
    {
      question: "Solve x² - 8x + 7 = 0 using two different methods and compare efficiency.",
      answer: "Factoring gives (x-1)(x-7)=0 immediately; completing the square gives (x-4)²=9. Both give x=1,7, but factoring is shorter.",
      difficulty: "Comparison",
    },
    {
      question:
        "A projectile equation simplifies to (t - 2)² = 6. Which method should you choose and why?",
      answer:
        "Use the square-root property because the squared expression is already isolated: t=2±√6, then interpret the physically valid time(s).",
      difficulty: "Application",
    },
    {
      question:
        "Create an original quadratic equation for which the quadratic formula is clearly more efficient than integer factoring. Compute D and solve it exactly.",
      sampleAnswer:
        "Answers vary. Example: x²+x-1=0 has D=5, so x=(-1±√5)/2.",
      difficulty: "Creation",
    },
  ],

  commonMistakes: [
    {
      mistake: "Choosing a method from habit without reading the equation first.",
      correction:
        "Pause before calculating. Look for factors, isolated squares, convenient completing-square structure, and discriminant clues.",
    },
    {
      mistake: "Assuming factoring is always the easiest method.",
      correction:
        "Factoring is excellent when structure is visible, but it becomes inefficient when roots are irrational or complex.",
    },
    {
      mistake: "Expanding an isolated square before using the square-root property.",
      correction:
        "If (x-h)²=k is already available, use ±√k directly unless expansion serves another purpose.",
    },
    {
      mistake: "Thinking the quadratic formula should be avoided.",
      correction:
        "The quadratic formula is universal and often the best choice when other patterns are not clear.",
    },
    {
      mistake: "Using graphing as an exact algebraic method for irrational roots.",
      correction:
        "Use graphs to estimate and verify. Use algebraic methods for exact radical or complex solutions.",
    },
    {
      mistake: "Calling one method the only correct method.",
      correction:
        "Several methods can be correct. Efficiency depends on structure, purpose, and clarity.",
    },
  ],

  summary: [
    "Efficient quadratic solving begins by reading the equation's structure before calculating.",
    "Use factoring when factors are visible and quick to obtain.",
    "Use the square-root property when a squared expression is isolated.",
    "Use completing the square when it is structurally convenient or when vertex information is valuable.",
    "Use the quadratic formula as a universal method, especially when factoring is not obvious.",
    "Use the discriminant to predict root type and avoid unproductive method choices.",
    "Use graphs to estimate and verify real roots, not as a substitute for exact algebra when exact answers are required.",
    "Multiple methods can be correct; a strong student can explain why one is more efficient for a particular equation.",
  ],
};

export default lesson06;
