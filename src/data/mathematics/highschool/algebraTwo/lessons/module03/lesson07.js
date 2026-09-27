const lesson07 = {
  id: "algebra-two-module-03-lesson-07",
  slug: "roots-graphs-and-verification",

  courseId: "algebra-2",
  courseTitle: "Algebra II",

  moduleNumber: 3,
  moduleTitle: "Quadratic Functions and Equations",
  lessonNumber: 7,

  title: "Roots, Graphs, and Verification",

  subtitle:
    "Connect algebraic solutions to x-intercepts, verify roots by substitution and graphing, and use multiple representations to confirm that a solution is mathematically consistent.",

  duration: "90-105 minutes",
  level: "Intermediate",
  status: "Available",

  essentialQuestion:
    "How can we use algebra, graphs, and substitution together to verify that the roots of a quadratic equation are correct?",

  bigIdea:
    "A real root of f(x) = 0 is the same x-value where the graph y = f(x) meets the x-axis. Correct roots should agree across algebraic solving, substitution, and graphing. Verification is not an extra step added after mathematics; it is part of reliable mathematical reasoning.",

  problemFirst: {
    title: "Three Representations, One Mathematical Truth",
    scenario:
      "Suppose a student claims that the roots of x² - 5x + 6 = 0 are x = 2 and x = 3. Before accepting the answer, verify the claim in three ways: factor the equation, substitute each root into the original expression, and compare the results with the graph y = x² - 5x + 6.",
    questions: [
      "What does it mean algebraically for x = 2 to be a root?",
      "What should f(2) equal if x = 2 is correct?",
      "What graph point corresponds to the root x = 2?",
      "How does factoring reveal the same two roots?",
      "What would a disagreement between algebra and the graph suggest?",
      "Why is an approximate graph not enough to replace exact algebra?",
      "How can verification expose a sign or arithmetic error?",
    ],
  },

  definitionTable: {
    title: "Definitions for Roots and Verification",
    description:
      "These ideas connect equations, functions, coordinates, and solution checking.",
    columns: [
      { key: "term", label: "Term" },
      { key: "definition", label: "Definition" },
      { key: "example", label: "Example / Meaning" },
    ],
    rows: [
      {
        term: "Root",
        definition: "A value r that makes a quadratic equation equal zero.",
        example: "If f(2)=0, then x=2 is a root.",
      },
      {
        term: "Zero",
        definition: "An input value where a function output equals zero.",
        example: "f(r)=0.",
      },
      {
        term: "x-intercept",
        definition: "A point where a graph crosses or touches the x-axis.",
        example: "A real root r corresponds to the point (r,0).",
      },
      {
        term: "Verification by substitution",
        definition: "Replace x with a proposed solution and confirm the original equation becomes true.",
        example: "For x=3 in x²-5x+6, 9-15+6=0.",
      },
      {
        term: "Graphical verification",
        definition: "Compare real algebraic roots with the graph's x-intercepts.",
        example: "Roots 2 and 3 should appear at (2,0) and (3,0).",
      },
      {
        term: "Exact solution",
        definition: "A mathematically exact value, possibly containing radicals.",
        example: "x=1±√2.",
      },
      {
        term: "Approximate solution",
        definition: "A rounded numerical value used for estimation or graph location.",
        example: "1+√2≈2.414.",
      },
    ],
  },

  mainConceptTable: {
    title: "How to Verify Quadratic Roots",
    description:
      "Reliable solutions should agree across representations whenever those representations apply.",
    columns: [
      { key: "method", label: "Verification Method" },
      { key: "action", label: "What You Do" },
      { key: "evidence", label: "What Counts as Evidence" },
    ],
    rows: [
      {
        method: "Substitution",
        action: "Insert each proposed root into the original equation.",
        evidence: "The expression evaluates to exactly 0, or approximately 0 when using rounded decimals.",
      },
      {
        method: "Factoring check",
        action: "Rewrite the quadratic as factors when possible.",
        evidence: "Each factor gives the same root set.",
      },
      {
        method: "Graph check",
        action: "Compare real roots with x-intercepts.",
        evidence: "The graph crosses or touches the x-axis at the same x-values.",
      },
      {
        method: "Discriminant check",
        action: "Compute D=b²-4ac.",
        evidence: "The number and type of roots agree with the proposed answer.",
      },
      {
        method: "Representation check",
        action: "Compare standard, factored, and vertex forms.",
        evidence: "All forms describe the same quadratic and imply consistent features.",
      },
    ],
  },

  tikzGraphs: [
    {
      id: "roots-graph-verification-two-roots",
      title: "Two Roots: Algebra and Graph Agree",
      equation: "y = x² - 5x + 6",
      src: "/graphs/algebra-2/module-3/lesson-07/roots-graph-verification-two-roots.svg",
      alt:
        "Parabola y equals x squared minus 5x plus 6 with x-intercepts at 2 and 3 and vertex at 2.5 comma negative 0.25.",
      caption:
        "Factoring gives (x - 2)(x - 3) = 0, so the roots are x = 2 and x = 3. Substitution confirms f(2)=0 and f(3)=0, while the graph crosses the x-axis exactly at (2,0) and (3,0).",
      sourceNote:
        "Graph design source: TikZ + PGFPlots. Browser display: mathematically sampled SVG companion asset.",
    },
    {
      id: "roots-graph-verification-repeated-root",
      title: "Repeated Root: The Graph Touches the x-Axis",
      equation: "y = x² - 6x + 9 = (x - 3)²",
      src: "/graphs/algebra-2/module-3/lesson-07/roots-graph-verification-repeated-root.svg",
      alt:
        "Parabola y equals x squared minus 6x plus 9 touching the x-axis at the vertex 3 comma 0.",
      caption:
        "The equation has the repeated root x = 3. Algebra gives (x - 3)² = 0, substitution gives f(3)=0, the discriminant is D=0, and the graph touches the x-axis once at the vertex (3,0).",
      sourceNote:
        "Graph design source: TikZ + PGFPlots. Browser display: mathematically sampled SVG companion asset.",
    },
  ],

  learningObjectives: [
    "Explain why a real root corresponds to an x-intercept.",
    "Verify roots by substitution into the original equation.",
    "Use a graph to confirm real roots visually.",
    "Distinguish exact roots from decimal approximations.",
    "Use the discriminant to check whether a proposed root pattern is plausible.",
    "Recognize the graph of a repeated root.",
    "Compare algebraic and graphical evidence.",
    "Identify inconsistencies that may indicate an error.",
    "Verify roots produced by factoring, completing the square, or the quadratic formula.",
  ],

  prerequisiteKnowledge: [
    "Factoring",
    "Completing the square",
    "Quadratic formula",
    "Discriminant",
    "Function notation",
    "x-intercepts",
    "Vertex and axis of symmetry",
  ],

  formulas: [
    {
      name: "Root Test",
      formula: "f(r) = 0",
      meaning:
        "A number r is a root exactly when substituting it into the quadratic gives zero.",
    },
    {
      name: "Root-Graph Connection",
      formula: "f(r)=0 ⇔ (r,0) is an x-intercept",
      meaning:
        "Every real root corresponds to an x-intercept of the graph.",
    },
    {
      name: "Discriminant",
      formula: "D = b² - 4ac",
      meaning:
        "Use D to check whether the expected number and type of roots are reasonable.",
    },
    {
      name: "Repeated Root Condition",
      formula: "D = 0",
      meaning:
        "A repeated root occurs where the parabola touches the x-axis at the vertex.",
    },
  ],

  workedExamples: [
    {
      id: "example-1",
      title: "Verify Two Integer Roots",
      problem: "Verify that x = 2 and x = 3 solve x² - 5x + 6 = 0.",
      plan:
        "Use factoring, substitution, and the graph.",
      solutionSteps: [
        "Factor: x² - 5x + 6 = (x - 2)(x - 3).",
        "So the algebraic roots are x = 2 and x = 3.",
        "Substitute x=2: 2² - 5(2) + 6 = 4 - 10 + 6 = 0.",
        "Substitute x=3: 3² - 5(3) + 6 = 9 - 15 + 6 = 0.",
        "On the graph, the x-intercepts are (2,0) and (3,0).",
        "All three forms of evidence agree.",
      ],
      answer: "The roots x = 2 and x = 3 are verified.",
      interpretation:
        "A solution is stronger when independent representations agree.",
    },
    {
      id: "example-2",
      title: "Verify Irrational Roots",
      problem: "Verify the roots x = 1 ± √2 for x² - 2x - 1 = 0.",
      plan:
        "Use exact substitution structure and compare with approximate graph locations.",
      solutionSteps: [
        "The exact roots are x = 1 ± √2.",
        "Approximate values are x ≈ -0.414 and x ≈ 2.414.",
        "Substituting either exact root into x² - 2x - 1 simplifies to 0.",
        "The graph crosses the x-axis near -0.414 and 2.414.",
        "The graph provides decimal confirmation; the algebra preserves exact values.",
      ],
      answer: "x = 1 ± √2 are verified exact roots.",
      interpretation:
        "Exact algebra and approximate graphing describe the same solutions at different levels of precision.",
    },
    {
      id: "example-3",
      title: "Verify a Repeated Root",
      problem: "Verify that x = 3 is a repeated root of x² - 6x + 9 = 0.",
      plan:
        "Check factorization, substitution, discriminant, and graph shape.",
      solutionSteps: [
        "Factor: x² - 6x + 9 = (x - 3)².",
        "Thus x = 3 is a root with multiplicity 2.",
        "Substitute x=3: 9 - 18 + 9 = 0.",
        "Compute D = (-6)² - 4(1)(9) = 36 - 36 = 0.",
        "The graph touches the x-axis at (3,0) and turns around there.",
      ],
      answer: "x = 3 is a verified repeated root.",
      interpretation:
        "A repeated root appears once as a distinct x-value but counts twice algebraically.",
    },
    {
      id: "example-4",
      title: "Detect an Incorrect Proposed Root",
      problem: "A student claims x = 4 is a root of x² - 5x + 6 = 0. Verify the claim.",
      plan:
        "Substitute first, then compare with the graph.",
      solutionSteps: [
        "Substitute x=4: 4² - 5(4) + 6 = 16 - 20 + 6 = 2.",
        "Because the result is 2, not 0, x=4 is not a root.",
        "The graph confirms this because x=4 is not an x-intercept.",
        "The actual roots are x=2 and x=3.",
      ],
      answer: "x = 4 is not a root.",
      interpretation:
        "Verification catches errors quickly before they become part of later work.",
    },
  ],

  realWorldApplications: [
    {
      id: "projectile-verification",
      field: "Physics",
      title: "Verifying Ground-Impact Times",
      application:
        "When a height model is set equal to zero, the real roots represent times when the object is at ground level. Substitution verifies the height really is zero at the reported time.",
      model: "h(t) = -16t² + v₀t + h₀",
      question:
        "Why should a negative time root often be rejected even if it is mathematically valid?",
    },
    {
      id: "business-verification",
      field: "Business",
      title: "Checking Break-Even Points",
      application:
        "If profit roots represent break-even production levels, substituting them into the profit model should return zero profit.",
      model: "P(x) = ax² + bx + c",
      question:
        "What would it mean if a supposed break-even quantity produced P(x) ≠ 0?",
    },
    {
      id: "engineering-verification",
      field: "Engineering",
      title: "Checking Design Intersections",
      application:
        "A calculated intersection should satisfy the original design equation and appear at the expected location on a graph or simulation.",
      model: "design difference = 0",
      question:
        "Why is verification especially important before using a mathematical solution in a physical design?",
    },
    {
      id: "robotics-verification",
      field: "Robotics",
      title: "Validating Path Crossings",
      application:
        "A computed root can represent where a robot path crosses a boundary. A software system can substitute the root back into the model to confirm the residual is near zero.",
      model: "path(x) - boundary(x) = 0",
      question:
        "Why might a computer use a small tolerance instead of requiring exactly zero with decimal calculations?",
    },
  ],

  pythonLab: {
    title: "Python Lab — Verify Roots Computationally",
    objective:
      "Use Python to evaluate a quadratic at proposed roots and measure how close the result is to zero.",
    connection:
      "Substitution is the core verification method. Python can automate repeated checks and illustrate the difference between exact mathematics and floating-point approximation.",
    code: `def f(x):
    return x**2 - 5*x + 6

roots = [2, 3, 4]

for r in roots:
    value = f(r)
    print("x =", r, "f(x) =", value, "verified =", abs(value) < 1e-10)

# Approximate irrational roots
import math

def g(x):
    return x**2 - 2*x - 1

irrational_roots = [1 - math.sqrt(2), 1 + math.sqrt(2)]

for r in irrational_roots:
    print("x =", r, "g(x) =", g(r))`,
    questions: [
      "Why does f(2)=0 verify x=2 as a root?",
      "Why does f(4)=2 reject x=4 as a root?",
      "Why might g(r) display a very small number instead of exactly 0?",
      "What does abs(value) < 1e-10 mean?",
      "How could you generalize the code to verify roots for any a, b, and c?",
    ],
    extension:
      "Write a function verify_root(a,b,c,r,tolerance) that returns the residual ar²+br+c and whether the proposed root passes the tolerance test.",
  },

  lumineryGuidance: {
    title: "Luminery AI — Verification Coach",
    message:
      "Luminery should ask the learner to produce evidence for a proposed root rather than simply saying correct or incorrect. It should guide the learner through substitution, graph interpretation, and consistency checking.",
    prompt:
      "I have proposed roots for a quadratic equation. Do not tell me immediately whether they are correct. Ask me one question at a time so I substitute each root into the original equation, interpret the result, compare real roots with graph x-intercepts, check the discriminant if useful, and explain whether all representations agree.",
    coachingQuestions: [
      "What is the original equation?",
      "What value are you testing as a root?",
      "What do you get when you substitute it into the original expression?",
      "Should a verified root produce zero?",
      "Where should that root appear on the graph?",
      "Does the graph cross or touch the x-axis there?",
      "Does the discriminant support the number of real roots you found?",
      "Are you comparing exact roots with approximate graph locations appropriately?",
      "If there is disagreement, which earlier step should you inspect?",
    ],
    masteryCheck:
      "A learner demonstrates mastery when they can verify roots independently using substitution and graph evidence, explain the root–x-intercept connection, and identify inconsistencies without relying on Luminery for the conclusion.",
  },

  independentPractice: [
    {
      question: "Verify x=1 and x=4 for x²-5x+4=0.",
      answer: "f(1)=0 and f(4)=0, so both are verified roots.",
      difficulty: "Foundation",
    },
    {
      question: "Test whether x=3 is a root of x²-4x+3=0.",
      answer: "9-12+3=0, so yes.",
      difficulty: "Foundation",
    },
    {
      question: "Test whether x=2 is a root of x²-3x+5=0.",
      answer: "4-6+5=3, so no.",
      difficulty: "Foundation",
    },
    {
      question: "For x²-8x+16=0, verify the repeated root.",
      answer: "(x-4)²=0, so x=4; substitution gives 0 and the graph touches at (4,0).",
      difficulty: "Intermediate",
    },
    {
      question: "For x²-2x-1=0, explain how the graph verifies x=1±√2 approximately.",
      answer: "The graph crosses near x≈-0.414 and x≈2.414, matching the decimal forms of 1±√2.",
      difficulty: "Graph Connection",
    },
    {
      question: "A graph appears to cross near x=1.7. Why is that not enough to claim the exact root is 1.7?",
      answer: "Graphs provide approximations; exact algebra is required to identify an exact irrational or rational value.",
      difficulty: "Reasoning",
    },
    {
      question: "Use D to check whether a quadratic with D<0 should have real x-intercepts.",
      answer: "No. D<0 means no real roots, so the real graph has no x-intercepts.",
      difficulty: "Discriminant Connection",
    },
    {
      question: "Explain why a root with multiplicity 2 may appear as only one x-intercept.",
      answer: "Both algebraic solution branches give the same x-value; the graph touches the axis at that one point.",
      difficulty: "Reasoning",
    },
    {
      question: "A student finds roots 2 and 5 but the graph crosses at 1 and 5. What should the student conclude?",
      answer: "At least one algebraic or graphing step is wrong; the representations are inconsistent and the work should be checked.",
      difficulty: "Error Analysis",
    },
    {
      question: "Create a quadratic with roots -2 and 3, then verify both roots by substitution.",
      answer: "One answer: (x+2)(x-3)=x²-x-6. Substituting -2 or 3 gives 0.",
      difficulty: "Creation",
    },
  ],

  groupWork: [
    {
      question: "Explain the statement: root, zero, and x-intercept are three views of the same real solution.",
      sampleAnswer: "A root or zero r satisfies f(r)=0, and that produces the graph point (r,0), an x-intercept.",
    },
    {
      question: "Verify x=2 and x=6 for x²-8x+12=0 using factoring and substitution.",
      sampleAnswer: "(x-2)(x-6)=0; substitution of 2 and 6 both gives 0.",
    },
    {
      question: "Compare exact root x=2+√3 with decimal x≈3.732. Which is better for algebra and which is better for graph location?",
      sampleAnswer: "2+√3 is exact and preferred algebraically; 3.732 is useful for approximate graph placement.",
    },
    {
      question: "A calculator gives a residual of 0.0000000002 after substitution. Discuss whether the root may still be correct.",
      sampleAnswer: "Yes. Floating-point rounding can produce tiny residuals; use a reasonable tolerance.",
    },
    {
      question: "Use the graph of y=(x-3)² to explain multiplicity 2 visually.",
      sampleAnswer: "The graph touches the x-axis at x=3 and turns around, corresponding to the repeated factor (x-3)².",
    },
    {
      question: "Design a three-step verification checklist for any real quadratic root.",
      sampleAnswer: "Substitute into the original equation, compare with graph intercepts, and check discriminant/root pattern.",
    },
    {
      question: "Why should verification use the original equation rather than only a later transformed equation?",
      sampleAnswer: "The original equation confirms that no error in transformation changed or lost the intended solution set.",
    },
    {
      question: "For x²+4x+5=0, explain why a graph cannot visually verify the complex roots -2±i.",
      sampleAnswer: "Complex roots are not real x-coordinates, so they do not appear as x-intercepts on a real graph.",
    },
    {
      question: "Create an incorrect root intentionally, then show how substitution exposes the error.",
      sampleAnswer: "Answers vary; the substituted expression should evaluate to a nonzero value.",
    },
    {
      question: "Explain why verification is part of mathematical reasoning rather than merely checking arithmetic.",
      sampleAnswer: "It tests consistency across representations and strengthens confidence that the solution fits the original problem.",
    },
  ],

  quiz: [
    {
      question: "What value must f(r) equal if r is a root?",
      answer: "0.",
    },
    {
      question: "What graph point corresponds to the real root x=5?",
      answer: "(5,0).",
    },
    {
      question: "Verify whether x=2 is a root of x²-6x+8=0.",
      answer: "4-12+8=0, so yes.",
    },
    {
      question: "What does D=0 imply about the graph and roots?",
      answer: "One repeated real root; the parabola touches the x-axis once at the vertex.",
    },
    {
      question: "Why can graphing confirm an irrational root only approximately?",
      answer: "A graph displays numerical position with limited precision, while algebra can preserve the exact radical form.",
    },
  ],

  homework: [
    {
      question: "Verify x=2 and x=5 for x²-7x+10=0.",
      answer: "Both substitutions equal 0; the graph crosses at x=2 and x=5.",
      difficulty: "Foundation",
    },
    {
      question: "Test whether x=-1 is a root of x²+3x+2=0.",
      answer: "1-3+2=0, so yes.",
      difficulty: "Foundation",
    },
    {
      question: "Test whether x=4 is a root of x²-4x+1=0.",
      answer: "16-16+1=1, so no.",
      difficulty: "Foundation",
    },
    {
      question: "Verify the repeated root of x²+10x+25=0.",
      answer: "(x+5)²=0, so x=-5; substitution gives 0 and the graph touches at (-5,0).",
      difficulty: "Intermediate",
    },
    {
      question: "For x²-4x-1=0, state the exact roots and approximate graph locations.",
      answer: "x=2±√5≈-0.236 and 4.236.",
      difficulty: "Intermediate",
    },
    {
      question: "Explain why D<0 prevents real graphical verification by x-intercepts.",
      answer: "There are no real roots, so the graph never meets the real x-axis.",
      difficulty: "Reasoning",
    },
    {
      question: "A student solves a quadratic and gets one root, but D>0. What should they suspect?",
      answer: "A positive discriminant predicts two distinct real roots, so a branch or sign may have been missed.",
      difficulty: "Error Analysis",
    },
    {
      question: "Why should rounded decimal roots be checked with a tolerance rather than exact equality in software?",
      answer: "Floating-point rounding can make a correct approximate root produce a tiny nonzero residual.",
      difficulty: "Coding Connection",
    },
    {
      question: "Create a quadratic with a repeated root at x=6 and verify it algebraically and graphically.",
      answer: "One answer: (x-6)²=x²-12x+36. Substitution gives 0; the graph touches at (6,0).",
      difficulty: "Creation",
    },
    {
      question: "Write a short explanation of how algebra, graphing, and substitution support one another when solving quadratics.",
      sampleAnswer: "Algebra finds exact roots, substitution tests whether they satisfy the original equation, and graphing gives visual confirmation for real roots.",
      difficulty: "Synthesis",
    },
  ],

  commonMistakes: [
    {
      mistake: "Checking a root only in a transformed equation and never in the original.",
      correction:
        "Verify proposed roots in the original equation, especially after several algebraic transformations.",
    },
    {
      mistake: "Assuming a graph gives exact irrational roots.",
      correction:
        "Use graphs for estimation and verification; use algebra for exact values.",
    },
    {
      mistake: "Rejecting a correct decimal root because substitution gives a tiny nonzero residual.",
      correction:
        "Rounded decimals and floating-point arithmetic may require a tolerance.",
    },
    {
      mistake: "Thinking a repeated root should create two separate x-intercepts.",
      correction:
        "A repeated root is one distinct x-value with multiplicity 2, so the graph touches the axis once.",
    },
    {
      mistake: "Expecting complex roots to appear on the real x-axis.",
      correction:
        "Only real roots correspond to x-intercepts on a real coordinate graph.",
    },
  ],

  summary: [
    "A real root r satisfies f(r)=0.",
    "A real root r corresponds to the x-intercept (r,0).",
    "Substitution is a direct way to verify a proposed root.",
    "Graphs provide visual confirmation of real roots and repeated roots.",
    "Exact algebraic roots may appear only approximately on a graph.",
    "The discriminant helps check whether the number and type of roots are plausible.",
    "A repeated root occurs when D=0 and the parabola touches the x-axis at the vertex.",
    "Complex roots do not appear as x-intercepts on the real graph.",
    "Verification is an essential part of reliable mathematical reasoning.",
  ],
};

export default lesson07;
