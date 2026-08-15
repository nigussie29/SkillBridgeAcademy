const lesson01 = {
  id: "algebra-one-module-02-lesson-01",
  slug: "equations-and-balance-principle",

  courseId: "algebra-1",
  courseTitle: "Algebra I",

  moduleNumber: 2,
  moduleTitle: "Solving Linear Equations",
  lessonNumber: 1,

  title: "Equations and the Balance Principle",
  subtitle:
    "Understand equations as balanced mathematical statements and preserve equality when transforming them.",

  duration: "55–70 minutes",
  level: "Foundation",
  status: "Available",

  essentialQuestion:
    "Why must every operation performed on one side of an equation also be performed on the other side?",

  bigIdea:
    "An equation states that two expressions have the same value. Solving an equation means finding the value that makes the statement true while preserving equality at every step.",

  learningObjectives: [
    "Explain what an equation communicates mathematically.",
    "Identify the left side and right side of an equation.",
    "Describe equality using the idea of balance.",
    "Determine whether a given value is a solution to an equation.",
    "Use equivalent operations to preserve equality.",
    "Explain why the same operation must be performed on both sides of an equation.",
    "Connect equations to real-world situations.",
  ],

  warmUp: {
    title: "Keep the Scale Balanced",

    prompts: [
      "Imagine a perfectly balanced scale with equal weight on both sides.",
      "What happens if you add 3 pounds to only the left side?",
      "What must you do to the right side to restore balance?",
      "Suppose x + 4 = 10. What does the equal sign tell you about the two sides?",
      "If you subtract 4 from the left side, what must happen to the right side?",
      "Explain how a balanced scale can represent an equation.",
    ],

    teacherGuidance: [
      "Focus first on equality, not memorized solving procedures.",
      "Encourage students to explain why an operation preserves balance.",
      "Connect the physical idea of balance to equivalent equations.",
    ],

    expectedOutcome:
      "Students recognize that equality must be preserved by treating both sides of an equation consistently.",
  },

  vocabulary: [
    {
      term: "Equation",
      definition:
        "A mathematical statement showing that two expressions have equal value.",
      example: "x + 4 = 10",
    },
    {
      term: "Equal Sign",
      definition:
        "A symbol indicating that the expression on the left has the same value as the expression on the right.",
      example: "7 + 3 = 10",
    },
    {
      term: "Solution",
      definition:
        "A value that makes an equation true when substituted for the variable.",
      example: "x = 6 is a solution of x + 4 = 10.",
    },
    {
      term: "Equivalent Equations",
      definition:
        "Equations that have exactly the same solution or solution set.",
      example: "x + 4 = 10 and x = 6 are equivalent equations.",
    },
    {
      term: "Inverse Operations",
      definition:
        "Operations that undo one another.",
      example:
        "Addition and subtraction are inverse operations; multiplication and division are inverse operations.",
    },
    {
      term: "Balance Principle",
      definition:
        "If the same valid operation is performed on both sides of an equation, equality is preserved.",
      example:
        "If x + 5 = 12, subtracting 5 from both sides preserves equality.",
    },
  ],

  conceptExplanation: {
    title: "Understanding Equality Before Solving",

    summary:
      "An equation is not simply a problem containing an equal sign. It is a statement claiming that two mathematical expressions represent the same value. Every solving step must preserve that relationship.",

    teachingNotes: [
      "Interpret the equal sign as 'has the same value as,' not as 'the answer comes next.'",
      "Use a balance-scale model to show why changing only one side destroys equality.",
      "Emphasize that solving creates a sequence of equivalent equations.",
      "Show that substitution can verify whether a proposed solution is correct.",
      "Connect inverse operations to undoing mathematical actions.",
      "Require students to justify why each transformation preserves equality.",
    ],

    mathematicalConnections: [
      "Equality is a relationship between two quantities.",
      "Equivalent equations express the same solution relationship in different forms.",
      "Inverse operations allow us to isolate unknown quantities.",
      "The balance principle prepares students for solving equations, inequalities, formulas, and systems.",
    ],

    commonMisconceptions: [
      "The equal sign means 'write the answer.'",
      "Operations can be performed on only one side of an equation.",
      "A solution is simply the number appearing on the right side.",
      "Checking a solution is unnecessary once algebraic steps are completed.",
    ],

    essentialTakeaway:
      "Every valid solving step must preserve equality.",
  },

  workedExamples: [
    {
      title: "Recognize Equality",

      problem:
        "Explain what the equation 3 + 7 = 5 + 5 communicates.",

      solutionSteps: [
        "Evaluate the left expression: 3 + 7 = 10.",
        "Evaluate the right expression: 5 + 5 = 10.",
        "Both expressions have the same value.",
        "Therefore, the equation is true.",
      ],

      answer:
        "The equal sign states that both expressions have the same value: 10.",
    },

    {
      title: "Test a Possible Solution",

      problem:
        "Determine whether x = 6 is a solution of x + 4 = 10.",

      solutionSteps: [
        "Replace x with 6.",
        "The equation becomes 6 + 4 = 10.",
        "Evaluate the left side: 10.",
        "The right side is also 10.",
        "Because both sides are equal, the statement is true.",
      ],

      answer:
        "Yes. x = 6 is a solution because 6 + 4 = 10.",
    },

    {
      title: "Reject an Incorrect Solution",

      problem:
        "Determine whether x = 7 is a solution of x + 4 = 10.",

      solutionSteps: [
        "Replace x with 7.",
        "The equation becomes 7 + 4 = 10.",
        "The left side equals 11.",
        "The right side equals 10.",
        "Since 11 is not equal to 10, the equation is false.",
      ],

      answer:
        "No. x = 7 is not a solution.",
    },

    {
      title: "Preserve Balance",

      problem:
        "Given x + 5 = 12, explain what happens when 5 is subtracted from both sides.",

      solutionSteps: [
        "Start with x + 5 = 12.",
        "Subtract 5 from the left side.",
        "To preserve equality, subtract 5 from the right side also.",
        "The left side becomes x.",
        "The right side becomes 7.",
        "The resulting equivalent equation is x = 7.",
      ],

      answer: "x = 7",
    },

    {
      title: "Why One-Sided Changes Fail",

      problem:
        "A student changes x + 4 = 11 into x = 11 by subtracting 4 only from the left side. Explain the error.",

      solutionSteps: [
        "The original equation states that both sides have equal value.",
        "Subtracting 4 from only one side changes only one quantity.",
        "The equality relationship is no longer preserved.",
        "The student must subtract 4 from both sides.",
        "Then x = 7.",
      ],

      answer:
        "The same operation must be performed on both sides to preserve equality.",
    },
  ],

  guidedPractice: [
    {
      question:
        "Is 5 a solution of x + 3 = 8? Explain how you know.",
      answer:
        "Yes. Substituting 5 gives 5 + 3 = 8, which is true.",
      hint:
        "Substitute the proposed value for x.",
    },
    {
      question:
        "Is 4 a solution of 2x = 10?",
      answer:
        "No. Substituting 4 gives 2(4) = 8, not 10.",
      hint:
        "Check whether both sides have equal values.",
    },
    {
      question:
        "If a = b, what happens if 7 is added to both sides?",
      answer:
        "a + 7 = b + 7. Equality is preserved.",
      hint:
        "Think about adding equal amounts to a balanced scale.",
    },
    {
      question:
        "Why can we subtract 9 from both sides of x + 9 = 20?",
      answer:
        "Because performing the same operation on both sides preserves equality.",
      hint:
        "Use the balance principle.",
    },
    {
      question:
        "What operation would undo adding 6?",
      answer: "Subtracting 6.",
      hint:
        "Think about inverse operations.",
    },
  ],

  independentPractice: [
    {
      question:
        "Determine whether x = 8 is a solution of x - 3 = 5.",
      answer: "Yes.",
    },
    {
      question:
        "Determine whether y = 6 is a solution of 3y = 21.",
      answer: "No. 3(6) = 18.",
    },
    {
      question:
        "Write what should be done to both sides of x + 12 = 20 to isolate x.",
      answer: "Subtract 12 from both sides.",
    },
    {
      question:
        "Explain why adding the same number to both sides of a true equation produces another true equation.",
      answer:
        "Both equal quantities are changed by the same amount, so their values remain equal.",
    },
    {
      question:
        "If 4x = 28, what inverse operation could be used to isolate x?",
      answer:
        "Divide both sides by 4.",
    },
  ],

  commonMistakes: [
    {
      mistake:
        "Performing an operation on only one side of an equation.",
      correction:
        "Apply the same valid operation to both sides.",
    },
    {
      mistake:
        "Interpreting the equal sign as meaning 'the answer is.'",
      correction:
        "Read the equal sign as 'has the same value as.'",
    },
    {
      mistake:
        "Assuming a proposed solution is correct without checking it.",
      correction:
        "Substitute the value into the original equation and verify that both sides are equal.",
    },
    {
      mistake:
        "Using the same operation instead of the inverse operation.",
      correction:
        "Use an operation that undoes the operation currently affecting the variable.",
    },
  ],

  technologyActivity: {
    title: "Explore Equality with Desmos",
    tool: "Desmos",

    objective:
      "Visualize when two expressions have equal values.",

    instructions: [
      "Open the Desmos graphing calculator.",
      "Enter y = x + 4.",
      "Enter y = 10.",
      "Observe where the two graphs intersect.",
      "Identify the x-coordinate of the intersection.",
      "Explain why that x-value solves x + 4 = 10.",
      "Change 10 to another constant and observe how the solution changes.",
    ],

    reflectionQuestions: [
      "What does the intersection point represent?",
      "Why does the x-coordinate provide the solution?",
      "How does changing the constant affect the solution?",
    ],
  },

  pythonLab: {
    title: "Check an Equation with Python",

    objective:
      "Use Python to test whether a value satisfies an equation.",

    code: `x = 6

left_side = x + 4
right_side = 10

print("Left side:", left_side)
print("Right side:", right_side)
print("Equation is true:", left_side == right_side)`,

    expectedOutput: `Left side: 10
Right side: 10
Equation is true: True`,

    investigation: [
      "Change x from 6 to 7.",
      "Run the program again.",
      "Observe how the Boolean result changes.",
      "Test several values and identify which value makes the equation true.",
    ],

    reflectionQuestions: [
      "What does == mean in Python?",
      "How is Python's == related to mathematical equality?",
      "What output tells you that a proposed value is a solution?",
    ],
  },

  realWorldConnection: {
    title: "Model a Savings Goal",

    scenario:
      "A student already has $35 and wants to have $80. The student plans to save an additional amount x.",

    model: "35 + x = 80",

    prompts: [
      "What does 35 represent?",
      "What does x represent?",
      "What does 80 represent?",
      "Why is an equation appropriate for this situation?",
      "What operation would isolate x?",
      "Explain why that operation must be performed on both sides.",
    ],

    solution: [
      "Start with 35 + x = 80.",
      "Subtract 35 from both sides.",
      "x = 45.",
    ],

    answer:
      "The student must save an additional $45.",

    connection:
      "Equations allow unknown quantities in financial, scientific, and everyday situations to be determined logically.",
  },

  formativeAssessment: {
    passingScore: 4,

    questions: [
      {
        type: "short-response",
        prompt:
          "What does the equal sign communicate in an equation?",
        answer:
          "It states that the expressions on both sides have the same value.",
      },
      {
        type: "short-response",
        prompt:
          "Is x = 9 a solution of x + 2 = 11? Explain.",
        answer:
          "Yes, because 9 + 2 = 11.",
      },
      {
        type: "short-response",
        prompt:
          "What must be done to both sides of x + 7 = 15 to isolate x?",
        answer:
          "Subtract 7 from both sides.",
      },
      {
        type: "explanation",
        prompt:
          "Explain why subtracting 5 from only one side of an equation is invalid.",
        sampleAnswer:
          "It changes only one of two equal quantities and therefore does not preserve equality.",
      },
      {
        type: "application",
        prompt:
          "A fee of $20 plus an unknown amount x totals $55. Write an equation and determine x.",
        answer:
          "20 + x = 55, so x = 35.",
      },
    ],
  },

  creatorChallenge: {
    title: "Design a Balance Equation",

    description:
      "Create a real-world situation that can be represented by a one-variable equation and explain how the balance principle can be used to solve it.",

    requirements: [
      "Create a realistic scenario involving an unknown quantity.",
      "Define the variable.",
      "Write an equation representing the situation.",
      "Explain what each side of the equation represents.",
      "Use a balance model, diagram, or written explanation.",
      "Show each transformation performed on both sides.",
      "Check the solution by substitution.",
      "Explain why the final value is reasonable in context.",
    ],

    tools: [
      "Paper and pencil",
      "Desmos",
      "Google Slides",
      "Python",
    ],

    deliverables: [
      "Real-world scenario",
      "Equation",
      "Step-by-step reasoning",
      "Solution check",
      "Visual or computational evidence",
      "Short reflection",
    ],
  },

  lumineryGuidance: {
    message:
      "Do not begin by asking which rule to memorize. Begin by asking what relationship the equation is claiming and what operation will preserve that relationship.",

    recommendation:
      "Before every transformation, explain why the same operation must be applied to both sides.",

    prompt:
      "How can you prove that each step in solving an equation preserves equality?",

    confidence: 80,
  },

  portfolioEvidence: {
    title: "Balance Principle Explanation",

    artifact:
      "A one-page visual explanation showing how an equation behaves like a balanced relationship.",

    include: [
      "A real-world equation",
      "Variable definition",
      "Balance representation",
      "Equivalent equation steps",
      "Solution verification",
      "Written explanation of the balance principle",
    ],
  },

  summary: [
    "An equation states that two expressions have the same value.",
    "A solution is a value that makes an equation true.",
    "Substitution can be used to check a proposed solution.",
    "Equivalent equations have the same solution.",
    "Inverse operations undo one another.",
    "The same valid operation must be performed on both sides to preserve equality.",
    "Solving an equation is a logical process of creating simpler equivalent equations.",
  ],

  reflection: [
    "How has your understanding of the equal sign changed?",
    "Why is the balance principle more important than memorizing a solving rule?",
    "How can substitution prove that a solution is correct?",
    "What is one mistake that can destroy equality?",
    "Where might equations appear in everyday life?",
  ],

  previousLesson: {
    moduleNumber: 1,
    lessonNumber: 8,
    slug: "module-review-assessment-project",
    title: "Module Review, Assessment, and Creator Project",
  },

  nextLesson: {
    moduleNumber: 2,
    lessonNumber: 2,
    slug: "solving-one-step-equations",
    title: "Solving One-Step Equations",
  },
};

export default lesson01;