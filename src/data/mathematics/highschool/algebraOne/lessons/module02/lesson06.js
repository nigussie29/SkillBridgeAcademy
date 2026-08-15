const lesson06 = {
  id: "algebra-one-module-02-lesson-06",
  slug: "solution-types",

  courseId: "algebra-1",
  courseTitle: "Algebra I",

  moduleNumber: 2,
  moduleTitle: "Solving Linear Equations",
  lessonNumber: 6,

  title:
    "One Solution, No Solution, or Infinitely Many Solutions",

  subtitle:
    "Model real situations, simplify both sides, and determine whether an equation has one solution, no solution, or infinitely many solutions.",

  duration: "70–90 minutes",
  level: "Foundation",
  status: "Available",

  essentialQuestion:
    "What can an equation tell us when the variable disappears during simplification?",

  bigIdea:
    "Solving an equation does not always end with x equal to a number. Sometimes simplification produces a true statement that is always true, a false statement that can never be true, or one specific value that makes the equation true.",

  whyThisLessonExists: {
    title: "Not Every Equation Has One Numerical Answer",

    introduction:
      "Students often expect every algebra problem to end with x equal to one number. Real mathematical models can behave differently. Two expressions may describe the same relationship for every input, may never become equal, or may become equal at exactly one value.",

    centralProblem:
      "How can we recognize what the final simplified statement tells us about the original situation?",

    purpose:
      "Understanding solution types prepares students for functions, systems of equations, graph intersections, modeling, optimization, and logical reasoning.",
  },

  problemFirst: {
    title: "Two School Fundraising Plans",

    scenario:
      "Class A begins a fundraiser with $20 and earns $5 for every package sold. Class B also begins with $20 and earns $5 for every package sold. Class A meets on Tuesday, while Class B has 26 students. For how many package sales will the two classes have the same amount of money?",

    questions: [
      "Which facts are relevant?",
      "Which facts are irrelevant?",
      "What should the variable represent?",
      "Write an expression for Class A.",
      "Write an expression for Class B.",
      "Construct the comparison equation.",
      "Simplify both sides.",
      "What happens to the variable terms?",
      "What statement remains?",
      "Is that statement always true, sometimes true, or never true?",
      "What does that mean in the original fundraising situation?",
    ],

    expectedInsight:
      "Let p represent packages sold. The equation is 5p + 20 = 5p + 20. Subtracting 5p from both sides gives 20 = 20, which is always true. Therefore the plans are equal for every possible number of packages, giving infinitely many solutions.",
  },

  learningObjectives: [
    "Translate multi-sentence comparison situations into equations.",
    "Identify relevant and irrelevant information.",
    "Define variables precisely.",
    "Simplify both sides using distribution and combining like terms.",
    "Recognize equations with exactly one solution.",
    "Recognize equations with no solution.",
    "Recognize equations with infinitely many solutions.",
    "Interpret true and false statements created during simplification.",
    "Verify conclusions using numerical examples or graphs.",
    "Explain solution types in real-world context.",
    "Create situations representing each solution type.",
  ],

  prerequisiteKnowledge: [
    "Distributive property",
    "Combining like terms",
    "Variables on both sides",
    "Balance principle",
    "Equivalent equations",
    "Comparison modeling",
    "Substitution",
  ],

  vocabulary: [
    {
      term: "One Solution",
      definition:
        "Exactly one value makes the equation true.",
      example:
        "3x + 5 = x + 13 has the solution x = 4.",
    },

    {
      term: "No Solution",
      definition:
        "There is no value of the variable that makes the equation true.",
      example:
        "4x + 3 = 4x + 9 simplifies to 3 = 9.",
    },

    {
      term: "Infinitely Many Solutions",
      definition:
        "Every value in the domain makes the equation true.",
      example:
        "2(x + 3) = 2x + 6 simplifies to 6 = 6.",
    },

    {
      term: "Identity",
      definition:
        "An equation that is true for every allowable value of the variable.",
      example:
        "3(x + 2) = 3x + 6",
    },

    {
      term: "Contradiction",
      definition:
        "A false mathematical statement produced during simplification.",
      example:
        "5 = 11",
    },
  ],

  formulas: [
    {
      name: "General Comparison",
      formula: "ax + b = cx + d",
      meaning:
        "After simplifying, the relationship between a and c and between b and d determines the solution type.",
    },

    {
      name: "Infinitely Many Solutions Pattern",
      formula: "ax + b = ax + b",
      meaning:
        "Both sides represent the same expression.",
    },

    {
      name: "No Solution Pattern",
      formula: "ax + b = ax + d, where b ≠ d",
      meaning:
        "The variable terms are identical but the constants conflict.",
    },
  ],

  problemSolvingFramework: {
    title: "SkillBridge 7-Step Solution-Type Framework",

    steps: [
      {
        number: 1,
        title: "Combine Like Terms Before Solving",
        description:
          "Simplify each side so the actual structure becomes visible.",
      },
      {
        number: 2,
        title: "Use the Distributive Property",
        description:
          "Remove grouping symbols correctly before comparing terms.",
      },
      {
        number: 3,
        title: "Identify Irrelevant Information",
        description:
          "Do not allow realistic but unnecessary details to enter the equation.",
      },
      {
        number: 4,
        title: "Choose the Correct Variable",
        description:
          "Define the common input or unknown being compared.",
      },
      {
        number: 5,
        title: "Construct the Equation Independently",
        description:
          "Model both relationships before setting them equal.",
      },
      {
        number: 6,
        title: "Justify Each Transformation",
        description:
          "Explain why distribution, combination, subtraction, or division preserves equality.",
      },
      {
        number: 7,
        title: "Interpret and Verify the Result",
        description:
          "Determine whether the result means one equality point, no equality point, or equality for all inputs.",
      },
    ],
  },

  workedExamples: [
    {
      title: "One Solution — Competing Savings Plans",

      problem:
        "Jordan already has $18 saved and adds $7 each week. Maya already has $38 and adds $3 each week. Jordan uses a green notebook, and Maya saves through an online bank. After how many weeks will their balances be equal?",

      solutionSteps: [
        "Notebook color and banking method are irrelevant.",
        "Let w represent weeks.",
        "Jordan: 7w + 18.",
        "Maya: 3w + 38.",
        "Construct: 7w + 18 = 3w + 38.",
        "Subtract 3w from both sides: 4w + 18 = 38.",
        "Subtract 18: 4w = 20.",
        "Divide by 4: w = 5.",
        "Verify Jordan: 7(5) + 18 = 53.",
        "Verify Maya: 3(5) + 38 = 53.",
        "The equation has one solution.",
      ],

      answer:
        "The balances are equal after 5 weeks.",
    },

    {
      title: "No Solution — Parallel Pricing Plans",

      problem:
        "Plan A charges a $15 registration fee plus $6 each month. Plan B charges a $25 registration fee plus the same $6 each month. Plan A has a blue membership card, while Plan B includes an app. Will the two plans ever have the same total cost?",

      solutionSteps: [
        "Card color and app availability are irrelevant.",
        "Let m represent months.",
        "Plan A: 6m + 15.",
        "Plan B: 6m + 25.",
        "Construct: 6m + 15 = 6m + 25.",
        "Subtract 6m from both sides.",
        "15 = 25 remains.",
        "This statement is false.",
        "Therefore no value of m can make the plans equal.",
      ],

      answer:
        "The plans never have the same total cost. There is no solution.",
    },

    {
      title: "Infinitely Many Solutions — Equivalent Plans",

      problem:
        "Program A charges a $10 setup fee plus $4 per session. Program B describes its cost as twice the quantity $2 per session plus a $5 setup amount. The programs use different logos. Determine when the costs are equal.",

      solutionSteps: [
        "Logo information is irrelevant.",
        "Let s represent sessions.",
        "Program A: 4s + 10.",
        "Program B: 2(2s + 5).",
        "Construct: 4s + 10 = 2(2s + 5).",
        "Distribute the right side: 4s + 10 = 4s + 10.",
        "Subtract 4s from both sides: 10 = 10.",
        "The remaining statement is always true.",
        "Therefore every allowable value of s works.",
      ],

      answer:
        "The costs are equal for every number of sessions. There are infinitely many solutions.",
    },

    {
      title: "No Solution After Distribution",

      problem:
        "A company models two production costs using 3(x + 4) and 3x + 20. The first factory has 40 workers, and the second operates in another city. Can the two expressions ever have equal value?",

      solutionSteps: [
        "Worker count and city are irrelevant.",
        "Construct: 3(x + 4) = 3x + 20.",
        "Distribute: 3x + 12 = 3x + 20.",
        "Subtract 3x from both sides.",
        "12 = 20.",
        "The statement is false.",
        "Therefore there is no solution.",
      ],

      answer:
        "The models never have equal outputs.",
    },

    {
      title: "Identity After Distribution",

      problem:
        "A student claims that 5(x + 2) and 5x + 10 describe different quantities because they look different. Determine whether the expressions can ever have different values.",

      solutionSteps: [
        "Set the expressions equal: 5(x + 2) = 5x + 10.",
        "Distribute: 5x + 10 = 5x + 10.",
        "Subtract 5x: 10 = 10.",
        "The statement is always true.",
        "The expressions are equivalent for all x.",
      ],

      answer:
        "They are equal for every allowable value of x.",
    },
  ],

  interactiveExploration: {
    title: "See the Three Solution Types with Graphs",

    description:
      "Use Desmos to connect algebraic solution types to intersections of lines.",

    instructions: [
      "Graph y = 7x + 18 and y = 3x + 38.",
      "Count their intersection points.",
      "Graph y = 6x + 15 and y = 6x + 25.",
      "Count their intersection points.",
      "Graph y = 4x + 10 and y = 2(2x + 5).",
      "Compare the two graphs.",
      "Connect each graphical situation to one solution, no solution, or infinitely many solutions.",
    ],

    questions: [
      "What does one intersection represent?",
      "What does no intersection represent?",
      "What does it mean when two graphs lie exactly on top of each other?",
      "How can algebra predict the same result without graphing?",
    ],

    expectedDiscovery:
      "One intersection corresponds to one solution, parallel distinct lines correspond to no solution, and the same line corresponds to infinitely many solutions.",
  },

  realWorldApplications: [
    {
      field: "Business",
      application:
        "Two cost models may intersect once, never intersect, or represent exactly the same pricing structure.",
    },
    {
      field: "Engineering",
      application:
        "System models may produce one operating point, incompatible constraints, or redundant equations.",
    },
    {
      field: "Data Science",
      application:
        "Equivalent models can produce identical outputs even when written in different forms.",
    },
    {
      field: "Artificial Intelligence",
      application:
        "Logical systems must distinguish consistent, inconsistent, and redundant constraints.",
    },
  ],

  aiConnection: {
    title: "Consistency and Constraints in AI",

    explanation:
      "AI and optimization systems often work with constraints. Some constraints identify exactly one condition, some conflict with one another, and some simply repeat the same information in another form.",

    example:
      "If two rules reduce to contradictory statements, the system has no feasible solution. If two rules are equivalent, one may be redundant.",

    uses: [
      "Constraint satisfaction",
      "Optimization",
      "Logical reasoning",
      "Model validation",
      "Redundancy detection",
    ],

    caution:
      "A computer can simplify equations quickly, but a human still needs to interpret what the result means in the original problem.",

    reflectionQuestion:
      "How is a contradiction in algebra similar to conflicting rules in a computer system?",
  },

  pythonLab: {
    title: "Test Solution Types with Python",

    objective:
      "Use Python to compare two expressions for several input values.",

    code: `def plan_a(x):
    return 6 * x + 15

def plan_b(x):
    return 6 * x + 25

for x in range(0, 6):
    print(
        x,
        plan_a(x),
        plan_b(x),
        plan_a(x) == plan_b(x)
    )`,

    expectedOutput:
      "For each tested value, the equality result is False because the two plans always differ by 10.",

    investigation: [
      "Change plan_b to 6*x + 15.",
      "Predict what will happen.",
      "Run the program.",
      "Create two expressions that are equal at exactly one tested value.",
      "Explain how Python evidence supports the algebraic conclusion.",
    ],

    reflectionQuestions: [
      "Can testing only a few values prove infinitely many solutions?",
      "Why is symbolic algebra stronger evidence for an identity?",
      "How can computation still help us investigate a pattern?",
    ],
  },

  guidedPractice: [
    {
      question:
        "Plan A costs $8 per month plus a $12 starting fee. Plan B costs $5 per month plus a $30 starting fee. Determine the solution type, solve if appropriate, verify, and interpret.",
      answer:
        "8m + 12 = 5m + 30 gives 3m = 18, so m = 6. One solution.",
    },

    {
      question:
        "Two delivery services both charge $4 per mile. Service A adds a $9 booking fee while Service B adds a $17 booking fee. Determine whether their costs can ever be equal.",
      answer:
        "4m + 9 = 4m + 17 simplifies to 9 = 17. No solution.",
    },

    {
      question:
        "Compare 3(x + 4) and 3x + 12. Determine the solution type and explain what your result means.",
      answer:
        "3(x + 4) = 3x + 12 simplifies to 3x + 12 = 3x + 12. Infinitely many solutions.",
    },
  ],

  independentPractice: [
    {
      question:
        "Savings Plan A begins with $25 and increases by $6 per week. Plan B begins with $45 and increases by $2 per week. Determine the solution type and interpret the result.",
      answer:
        "6w + 25 = 2w + 45 gives w = 5. One solution.",
    },

    {
      question:
        "Two phone plans each cost $7 per month, but one begins with a $10 activation fee and the other with a $22 activation fee. Will their total costs ever be equal?",
      answer:
        "7m + 10 = 7m + 22 simplifies to 10 = 22. No solution.",
    },

    {
      question:
        "Determine whether 4(x + 3) and 2(2x + 6) are ever different. Justify algebraically.",
      answer:
        "Both simplify to 4x + 12, so they are equal for all x. Infinitely many solutions.",
    },

    {
      question:
        "A student solves 5x + 8 = 5x + 8 and writes x = 0. Explain the error.",
      answer:
        "The equation becomes 8 = 8, which is true for every x. There are infinitely many solutions, not only x = 0.",
    },

    {
      question:
        "Create one multi-sentence real-world situation for each solution type: one solution, no solution, and infinitely many solutions.",
      answer:
        "Answers will vary.",
    },
  ],

  commonMistakes: [
    {
      mistake:
        "Assuming every equation must produce x = a number.",
      correction:
        "Inspect the final statement after simplifying.",
    },

    {
      mistake:
        "Interpreting 5 = 5 as x = 5.",
      correction:
        "A true statement after the variable disappears means every allowable x works.",
    },

    {
      mistake:
        "Interpreting 4 = 9 as x = 0.",
      correction:
        "A false statement means no value can satisfy the equation.",
    },

    {
      mistake:
        "Failing to interpret the result in context.",
      correction:
        "Explain what one, none, or infinitely many equality points means for the original situation.",
    },
  ],

  discussionQuestions: [
    "Why can the variable disappear during solving?",
    "What does a true statement such as 12 = 12 tell us?",
    "What does a false statement such as 12 = 20 tell us?",
    "How are solution types connected to graph intersections?",
    "How can two different-looking expressions represent exactly the same relationship?",
    "Where might contradictory constraints occur outside mathematics?",
  ],

  formativeAssessment: {
    passingScore: 5,

    questions: [
      {
        type: "classify-and-solve",
        prompt:
          "Determine the solution type of 6x + 10 = 2x + 30.",
        answer:
          "One solution: x = 5.",
      },

      {
        type: "classify",
        prompt:
          "Determine the solution type of 5x + 7 = 5x + 19.",
        answer:
          "No solution.",
      },

      {
        type: "classify",
        prompt:
          "Determine the solution type of 4(x + 2) = 4x + 8.",
        answer:
          "Infinitely many solutions.",
      },

      {
        type: "reasoning",
        prompt:
          "Explain why 7 = 7 after simplification represents infinitely many solutions.",
        sampleAnswer:
          "The equation reduces to a statement that is true regardless of the variable's value.",
      },

      {
        type: "modeling",
        prompt:
          "Create two pricing plans that will never have equal costs because they have equal rates but different starting fees.",
        sampleAnswer:
          "Examples will vary.",
      },

      {
        type: "creation",
        prompt:
          "Create two differently written expressions that are equivalent for every x.",
        sampleAnswer:
          "For example, 3(x + 5) and 3x + 15.",
      },
    ],
  },

  researchExtension: {
    title: "Investigating Solution Types",

    description:
      "Create and analyze three comparison models representing the three possible solution types.",

    researchQuestion:
      "How do rates and starting values determine whether two linear models intersect once, never, or everywhere?",

    task:
      "Construct three realistic scenarios, represent them algebraically and graphically, classify each solution type, and explain the relationship between the symbolic and graphical evidence.",

    requiredEvidence: [
      "Three scenarios",
      "Variable definitions",
      "Equations",
      "Algebraic simplification",
      "Graphs",
      "Solution classifications",
      "Contextual interpretations",
    ],
  },

  portfolioArtifact: {
    title: "Three Solution Types Investigation",

    description:
      "Build a visual comparison showing one solution, no solution, and infinitely many solutions.",

    requiredSections: [
      "One-solution model",
      "No-solution model",
      "Infinite-solutions model",
      "Word-to-equation reasoning",
      "Algebraic evidence",
      "Graphical evidence",
      "Interpretation",
    ],

    requiredEvidence: [
      "Equations",
      "Complete reasoning",
      "Desmos graphs or Python evidence",
      "Written explanation",
    ],
  },

  growthIndicators: [
    "Recognizes that equations can have different solution types.",
    "Interprets true and false statements correctly.",
    "Connects algebraic results to graph intersections.",
    "Constructs comparison models from language.",
    "Identifies irrelevant information.",
    "Verifies conclusions with multiple representations.",
    "Creates examples of each solution type.",
  ],

  lumineryGuidance: {
    message:
      "When the variable disappears, do not assume something went wrong. Examine the statement that remains.",

    recommendation:
      "Ask: Is the final statement true, false, or does the variable remain? That determines the solution type.",

    prompt:
      "What does your final simplified statement tell you about every possible value of the variable?",

    coachingQuestions: [
      "Did you simplify both sides completely?",
      "Did the variable remain?",
      "If not, what statement remains?",
      "Is that statement always true or always false?",
      "What does that mean in the original situation?",
      "How would the graphs behave?",
    ],

    confidence: 91,
  },

  summary: [
    "Linear equations may have one solution, no solution, or infinitely many solutions.",
    "One solution occurs when exactly one value satisfies the equation.",
    "No solution occurs when simplification produces a false statement.",
    "Infinitely many solutions occur when simplification produces an identity.",
    "Variables can disappear after equivalent terms are removed from both sides.",
    "Graphically, one solution means one intersection.",
    "No solution means distinct parallel lines.",
    "Infinitely many solutions means the same line.",
    "Real-world interpretation remains essential.",
  ],

  reflection: [
    "Why does the variable sometimes disappear?",
    "How do you distinguish no solution from infinitely many solutions?",
    "What does each solution type look like graphically?",
    "How can two real-world plans have infinitely many equality points?",
    "Create a two- or three-sentence scenario that has no solution.",
    "Create another scenario that has infinitely many solutions.",
  ],

  previousLesson: {
    moduleNumber: 2,
    lessonNumber: 5,
    slug: "variables-on-both-sides",
    title:
      "Variables on Both Sides Through Comparison Modeling",
  },

  nextLesson: {
    moduleNumber: 2,
    lessonNumber: 7,
    slug: "literal-equations-and-formulas",
    title:
      "Literal Equations and Formulas",
  },
};

export default lesson06;