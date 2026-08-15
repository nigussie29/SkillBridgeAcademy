const lesson02 = {
  id: "algebra-one-module-02-lesson-02",
  slug: "solving-one-step-equations",

  courseId: "algebra-1",
  courseTitle: "Algebra I",

  moduleNumber: 2,
  moduleTitle: "Solving Linear Equations",
  lessonNumber: 2,

  title: "Solving One-Step Equations",

  subtitle:
    "Use inverse operations and the balance principle to isolate a variable and justify each solving step.",

  duration: "55–70 minutes",
  level: "Foundation",
  status: "Available",

  essentialQuestion:
    "How can inverse operations help us isolate an unknown quantity while preserving equality?",

  bigIdea:
    "A one-step equation can be solved by applying an inverse operation to both sides. The goal is not simply to move numbers; the goal is to create an equivalent equation in which the variable is isolated.",

  learningObjectives: [
    "Identify the operation affecting a variable in a one-step equation.",
    "Select the correct inverse operation.",
    "Apply the same operation to both sides of an equation.",
    "Solve one-step addition equations.",
    "Solve one-step subtraction equations.",
    "Solve one-step multiplication equations.",
    "Solve one-step division equations.",
    "Check a solution using substitution.",
    "Explain why each solving step preserves equality.",
  ],

  warmUp: {
    title: "Undo the Operation",

    prompts: [
      "What operation undoes adding 8?",
      "What operation undoes subtracting 5?",
      "What operation undoes multiplying by 4?",
      "What operation undoes dividing by 3?",
      "If x + 7 = 15, what operation is currently affecting x?",
      "What inverse operation could isolate x?",
    ],

    teacherGuidance: [
      "Focus on identifying the operation before solving.",
      "Connect inverse operations to the balance principle from Lesson 1.",
      "Encourage students to explain each operation verbally.",
    ],

    expectedOutcome:
      "Students recognize addition/subtraction and multiplication/division as inverse-operation pairs.",
  },

  vocabulary: [
    {
      term: "Inverse Operations",
      definition:
        "Operations that undo the effect of one another.",
      example:
        "Addition and subtraction are inverse operations.",
    },

    {
      term: "Isolate",
      definition:
        "To get the variable alone on one side of an equation.",
      example:
        "x = 8 has x isolated.",
    },

    {
      term: "Equivalent Equation",
      definition:
        "An equation that has the same solution as another equation.",
      example:
        "x + 3 = 10 and x = 7 are equivalent equations.",
    },

    {
      term: "Solution",
      definition:
        "A value that makes an equation true.",
      example:
        "7 is the solution of x + 3 = 10.",
    },

    {
      term: "Substitution",
      definition:
        "Replacing a variable with a known or proposed value.",
      example:
        "Replace x with 7 to check x + 3 = 10.",
    },
  ],

  conceptExplanation: {
    title: "Solving by Undoing",

    summary:
      "To solve a one-step equation, identify the operation currently being performed on the variable, use its inverse operation, and perform that operation on both sides of the equation.",

    teachingNotes: [
      "Begin every problem by identifying what operation is affecting the variable.",
      "Do not teach students to move numbers across the equal sign.",
      "Use language such as 'subtract 5 from both sides' rather than 'move the 5.'",
      "Connect each solving step to the balance principle.",
      "Require students to check solutions by substitution.",
      "Discuss why division by a coefficient isolates a variable.",
    ],

    mathematicalConnections: [
      "Inverse operations connect arithmetic to algebra.",
      "Equivalent equations preserve solution sets.",
      "The balance principle guarantees that valid operations preserve equality.",
      "Substitution provides evidence that a solution is correct.",
    ],

    commonMisconceptions: [
      "Numbers move across the equal sign and change signs automatically.",
      "Only the side containing the variable needs to be changed.",
      "The inverse of multiplication is subtraction.",
      "Checking a solution is optional.",
    ],

    essentialTakeaway:
      "Identify the operation, apply its inverse to both sides, simplify, and check.",
  },

  workedExamples: [
    {
      title: "Addition Equation",

      problem:
        "Solve x + 6 = 14.",

      solutionSteps: [
        "The variable x has 6 added to it.",
        "The inverse of adding 6 is subtracting 6.",
        "Subtract 6 from both sides.",
        "x + 6 - 6 = 14 - 6.",
        "Simplify.",
        "x = 8.",
      ],

      answer: "x = 8",
    },

    {
      title: "Subtraction Equation",

      problem:
        "Solve x - 9 = 4.",

      solutionSteps: [
        "The variable x has 9 subtracted from it.",
        "The inverse of subtracting 9 is adding 9.",
        "Add 9 to both sides.",
        "x - 9 + 9 = 4 + 9.",
        "Simplify.",
        "x = 13.",
      ],

      answer: "x = 13",
    },

    {
      title: "Multiplication Equation",

      problem:
        "Solve 5x = 35.",

      solutionSteps: [
        "The variable x is multiplied by 5.",
        "The inverse operation is division by 5.",
        "Divide both sides by 5.",
        "5x / 5 = 35 / 5.",
        "Simplify.",
        "x = 7.",
      ],

      answer: "x = 7",
    },

    {
      title: "Division Equation",

      problem:
        "Solve x / 4 = 6.",

      solutionSteps: [
        "The variable x is divided by 4.",
        "The inverse operation is multiplication by 4.",
        "Multiply both sides by 4.",
        "4(x / 4) = 4(6).",
        "Simplify.",
        "x = 24.",
      ],

      answer: "x = 24",
    },

    {
      title: "Negative Number",

      problem:
        "Solve x + 11 = 3.",

      solutionSteps: [
        "Subtract 11 from both sides.",
        "x + 11 - 11 = 3 - 11.",
        "Simplify.",
        "x = -8.",
        "Check: -8 + 11 = 3.",
      ],

      answer: "x = -8",
    },

    {
      title: "Negative Coefficient",

      problem:
        "Solve -3x = 18.",

      solutionSteps: [
        "x is multiplied by -3.",
        "Divide both sides by -3.",
        "-3x / -3 = 18 / -3.",
        "Simplify.",
        "x = -6.",
        "Check: -3(-6) = 18.",
      ],

      answer: "x = -6",
    },

    {
      title: "Check the Solution",

      problem:
        "A student says x = 9 solves x - 4 = 5. Verify the solution.",

      solutionSteps: [
        "Substitute 9 for x.",
        "9 - 4 = 5.",
        "Simplify the left side.",
        "5 = 5.",
        "The equation is true.",
      ],

      answer:
        "Yes. x = 9 is the correct solution.",
    },
  ],

  guidedPractice: [
    {
      question:
        "Solve x + 5 = 12.",
      answer: "x = 7",
      hint:
        "Subtract 5 from both sides.",
    },

    {
      question:
        "Solve x - 8 = 6.",
      answer: "x = 14",
      hint:
        "Add 8 to both sides.",
    },

    {
      question:
        "Solve 4x = 28.",
      answer: "x = 7",
      hint:
        "Divide both sides by 4.",
    },

    {
      question:
        "Solve x / 6 = 3.",
      answer: "x = 18",
      hint:
        "Multiply both sides by 6.",
    },

    {
      question:
        "Solve x + 9 = 4.",
      answer: "x = -5",
      hint:
        "Subtract 9 from both sides.",
    },

    {
      question:
        "Solve -2x = 16.",
      answer: "x = -8",
      hint:
        "Divide both sides by -2.",
    },
  ],

  independentPractice: [
    {
      question:
        "Solve x + 12 = 20.",
      answer: "x = 8",
    },

    {
      question:
        "Solve x - 15 = 7.",
      answer: "x = 22",
    },

    {
      question:
        "Solve 8x = 64.",
      answer: "x = 8",
    },

    {
      question:
        "Solve x / 5 = 11.",
      answer: "x = 55",
    },

    {
      question:
        "Solve x + 14 = 6.",
      answer: "x = -8",
    },

    {
      question:
        "Solve -7x = 42.",
      answer: "x = -6",
    },

    {
      question:
        "Solve x / -4 = 5.",
      answer: "x = -20",
    },

    {
      question:
        "Explain why subtracting 7 from both sides of x + 7 = 18 creates an equivalent equation.",
      answer:
        "Both equal quantities are changed by the same amount, so equality is preserved.",
    },
  ],

  commonMistakes: [
    {
      mistake:
        "Writing x + 6 = 14 and then immediately writing x = 14 - 6 without explaining the operation.",
      correction:
        "Show that 6 is subtracted from both sides to preserve equality.",
    },

    {
      mistake:
        "Using subtraction to undo multiplication.",
      correction:
        "Division is the inverse of multiplication.",
    },

    {
      mistake:
        "Changing only the side containing the variable.",
      correction:
        "Apply the same operation to both sides.",
    },

    {
      mistake:
        "Forgetting negative signs.",
      correction:
        "Treat negative numbers and negative coefficients carefully during arithmetic.",
    },

    {
      mistake:
        "Stopping after obtaining a value without checking it.",
      correction:
        "Substitute the solution into the original equation.",
    },
  ],

  technologyActivity: {
    title: "Visualize One-Step Equations with Desmos",

    tool: "Desmos",

    objective:
      "Connect algebraic solutions with graphical intersections.",

    instructions: [
      "Open Desmos.",
      "Graph y = x + 6.",
      "Graph y = 14.",
      "Locate the intersection.",
      "Record its x-coordinate.",
      "Compare the x-coordinate with the solution of x + 6 = 14.",
      "Repeat the process for 5x = 35 using y = 5x and y = 35.",
      "Explain why the intersection represents the equation's solution.",
    ],

    reflectionQuestions: [
      "Why does the intersection correspond to equal values?",
      "How does the graphical solution compare with the algebraic solution?",
      "What happens when the constant on the right side changes?",
    ],
  },

  pythonLab: {
    title: "Solve and Check One-Step Equations with Python",

    objective:
      "Use Python calculations to verify solutions to simple equations.",

    code: `# Equation: x + 6 = 14

x = 14 - 6

left_side = x + 6
right_side = 14

print("x =", x)
print("Left side =", left_side)
print("Right side =", right_side)
print("Solution verified:", left_side == right_side)`,

    expectedOutput: `x = 8
Left side = 14
Right side = 14
Solution verified: True`,

    investigation: [
      "Change the equation to x + 9 = 20.",
      "Modify the code to calculate x.",
      "Verify the solution.",
      "Create a multiplication example such as 4x = 36.",
      "Use Python to calculate and check x.",
    ],

    reflectionQuestions: [
      "How is checking with Python similar to substitution by hand?",
      "What Boolean result confirms that the solution is correct?",
      "Why should the original equation be used when checking?",
    ],
  },

  realWorldConnection: {
    title: "Saving for a Goal",

    scenario:
      "A student has already saved $45 and wants a total of $120. Let x represent the additional amount the student must save.",

    model:
      "45 + x = 120",

    prompts: [
      "What does 45 represent?",
      "What does x represent?",
      "What does 120 represent?",
      "Which operation is affecting x?",
      "Which inverse operation will isolate x?",
      "Solve the equation.",
      "Check whether the answer is reasonable.",
    ],

    solution: [
      "Start with 45 + x = 120.",
      "Subtract 45 from both sides.",
      "x = 75.",
      "Check: 45 + 75 = 120.",
    ],

    answer:
      "The student must save an additional $75.",

    connection:
      "One-step equations can model savings, distance, temperature, pricing, measurements, and many other real-world unknowns.",
  },

  formativeAssessment: {
    passingScore: 5,

    questions: [
      {
        type: "short-response",
        prompt:
          "Solve x + 8 = 19.",
        answer: "x = 11",
      },

      {
        type: "short-response",
        prompt:
          "Solve x - 13 = 5.",
        answer: "x = 18",
      },

      {
        type: "short-response",
        prompt:
          "Solve 6x = 54.",
        answer: "x = 9",
      },

      {
        type: "short-response",
        prompt:
          "Solve x / 7 = 4.",
        answer: "x = 28",
      },

      {
        type: "explanation",
        prompt:
          "Why must the same operation be performed on both sides of an equation?",
        sampleAnswer:
          "Because both sides represent equal quantities, and changing them in the same way preserves equality.",
      },

      {
        type: "verification",
        prompt:
          "Check whether x = -4 solves x + 9 = 5.",
        answer:
          "Yes, because -4 + 9 = 5.",
      },
    ],
  },

  creatorChallenge: {
    title: "Create a One-Step Equation Story",

    description:
      "Design a realistic situation that can be modeled and solved with a one-step linear equation.",

    requirements: [
      "Create a realistic scenario.",
      "Define the variable clearly.",
      "Write a one-step equation.",
      "Identify the operation affecting the variable.",
      "Identify the inverse operation.",
      "Solve the equation step by step.",
      "Explain why both sides receive the same operation.",
      "Check the solution.",
      "Interpret the answer in context.",
    ],

    tools: [
      "Paper and pencil",
      "Desmos",
      "Python",
      "Google Slides",
    ],

    deliverables: [
      "Scenario",
      "Variable definition",
      "Equation",
      "Solution steps",
      "Solution verification",
      "Written explanation",
    ],
  },

  lumineryGuidance: {
    message:
      "Successful equation solving begins by recognizing structure. Before doing any arithmetic, identify the operation affecting the variable.",

    recommendation:
      "Use the pattern: identify → inverse → both sides → simplify → check.",

    prompt:
      "Can you explain why your inverse operation isolates the variable and preserves equality?",

    confidence: 82,
  },

  portfolioEvidence: {
    title: "One-Step Equation Reasoning",

    artifact:
      "A worked real-world equation showing the original model, inverse operation, balance reasoning, solution, and verification.",

    include: [
      "Real-world context",
      "Variable definition",
      "Equation",
      "Inverse operation",
      "Balanced solving steps",
      "Solution",
      "Substitution check",
      "Interpretation",
    ],
  },

  summary: [
    "One-step equations can be solved using inverse operations.",
    "Addition is undone by subtraction.",
    "Subtraction is undone by addition.",
    "Multiplication is undone by division.",
    "Division is undone by multiplication.",
    "The same operation must be performed on both sides.",
    "A valid solving step creates an equivalent equation.",
    "Solutions should be checked by substitution.",
  ],

  reflection: [
    "Which type of one-step equation is easiest for you?",
    "Which inverse-operation pair do you need to practice most?",
    "Why is saying 'move the number' less accurate than describing the operation performed on both sides?",
    "How does the balance principle help you avoid mistakes?",
    "How can you prove that your solution is correct?",
  ],

  previousLesson: {
    moduleNumber: 2,
    lessonNumber: 1,
    slug: "equations-and-balance-principle",
    title: "Equations and the Balance Principle",
  },

  nextLesson: {
    moduleNumber: 2,
    lessonNumber: 3,
    slug: "solving-two-step-equations",
    title: "Solving Two-Step Equations",
  },
};

export default lesson02;