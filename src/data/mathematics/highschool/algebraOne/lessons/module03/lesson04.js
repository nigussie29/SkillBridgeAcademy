const lesson04 = {
  id: "algebra-one-module-03-lesson-04",
  slug: "reversing-the-inequality-sign",

  courseId: "algebra-1",
  courseTitle: "Algebra I",

  moduleNumber: 3,
  moduleTitle: "Linear Inequalities",
  lessonNumber: 4,

  title:
    "Why the Inequality Sign Reverses",

  subtitle:
    "Use number lines, order relationships, test values, and real-world reasoning to understand why multiplying or dividing an inequality by a negative number reverses its direction.",

  duration: "70–85 minutes",
  level: "Foundation",
  status: "Available",

  essentialQuestion:
    "Why must an inequality reverse direction when both sides are multiplied or divided by a negative number?",

  bigIdea:
    "Negative multiplication reverses order on the number line. If one number is to the left of another, multiplying both by a negative reflects both values across zero, reversing their positions. The inequality symbol must reverse to preserve the true relationship.",

  whyThisLessonExists: {
    title:
      "The Sign-Reversal Rule Should Make Sense",

    introduction:
      "Students are often told to 'flip the inequality sign' when multiplying or dividing by a negative number. Memorizing that rule may work temporarily, but strong mathematical understanding comes from seeing why the relationship changes.",

    centralProblem:
      "How can multiplying by the same number preserve equality but sometimes reverse an inequality?",

    purpose:
      "This lesson develops conceptual understanding through number lines, reflection across zero, test values, and algebraic reasoning. Students learn that reversing the inequality symbol is not an arbitrary rule—it preserves the correct order of numbers.",
  },

  problemFirst: {
    title:
      "A Rule That Seems Strange",

    scenario:
      "A student knows that 3 < 5. The student multiplies both sides by -1 and writes -3 < -5 because the same operation was performed on both sides. Another student says the inequality must become -3 > -5. Who is correct, and why?",

    questions: [
      "Which number is greater: -3 or -5?",
      "Where is -3 located compared with -5 on a number line?",
      "Was 3 originally to the left or right of 5?",
      "What happens to the positions of 3 and 5 after multiplication by -1?",
      "How does multiplication by -1 relate to reflection across zero?",
      "Which inequality correctly describes -3 and -5?",
      "Why must the symbol change direction?",
      "Would the same reversal happen if both sides were multiplied by +2?",
      "What general rule can we infer?",
    ],

    expectedInsight:
      "Since 3 < 5, multiplying both values by -1 gives -3 and -5. On the number line, -3 is to the right of -5, so -3 > -5. Multiplication by a negative reverses the order of numbers, so the inequality sign must reverse.",
  },

  visualModels: [
    {
      id: "positive-order",
      type: "compoundNumberLine",

      title:
        "Before Multiplying by -1",

      description:
        "The inequality 3 < x < 5 shows values between 3 and 5. More importantly, the number line shows that 3 is to the left of 5.",

      min: 0,
      max: 8,

      lowerBoundary: 3,
      upperBoundary: 5,

      lowerInclusive: false,
      upperInclusive: false,

      variable: "x",

      interpretation:
        "On the number line, 3 is less than 5 because it lies to the left.",
    },

    {
      id: "negative-order",
      type: "compoundNumberLine",

      title:
        "After Reflection Across Zero",

      description:
        "Multiplying 3 and 5 by -1 gives -3 and -5. Their positions reverse: -5 is now to the left of -3.",

      min: -8,
      max: 0,

      lowerBoundary: -5,
      upperBoundary: -3,

      lowerInclusive: false,
      upperInclusive: false,

      variable: "x",

      interpretation:
        "The reflected values satisfy -5 < -3, which is equivalent to -3 > -5.",
    },

    {
      id: "preserve-vs-reverse",
      type: "comparison",

      title:
        "Positive Multiplication vs Negative Multiplication",

      description:
        "Positive multiplication preserves order. Negative multiplication reverses order.",

      items: [
        {
          label: "Multiply by Positive",
          symbol: "3 < 5 → 6 < 10",
          meaning:
            "Multiplying by +2 keeps the numbers in the same order.",
        },

        {
          label: "Multiply by Negative",
          symbol: "3 < 5 → -3 > -5",
          meaning:
            "Multiplying by -1 reflects the numbers across zero and reverses their order.",
        },
      ],
    },

    {
      id: "solution-negative-coefficient",
      type: "numberLine",

      title:
        "Solution Example: -2x > 8",

      description:
        "Dividing both sides by -2 reverses the inequality: x < -4.",

      min: -10,
      max: 2,
      boundary: -4,
      operator: "<",

      leftLabel: "solutions",
      rightLabel: "non-solutions",

      interpretation:
        "The open point at -4 shows that -4 is not included, and every number less than -4 satisfies the original inequality.",
    },
  ],

  learningObjectives: [
    "Explain why multiplying an inequality by a negative number reverses order.",
    "Explain why dividing an inequality by a negative number reverses order.",
    "Use number lines to visualize order reversal.",
    "Connect multiplication by -1 to reflection across zero.",
    "Solve inequalities containing negative coefficients.",
    "Reverse inequality symbols correctly when required.",
    "Distinguish operations that preserve inequality direction from those that reverse it.",
    "Test values in the original inequality to verify solutions.",
    "Identify common sign-reversal errors.",
    "Explain the rule conceptually rather than only memorizing it.",
  ],

  prerequisiteKnowledge: [
    "Positive and negative numbers",
    "Number lines",
    "Integer multiplication",
    "Integer division",
    "One-step inequalities",
    "Multi-step inequalities",
    "Inverse operations",
    "Substitution",
  ],

  vocabulary: [
    {
      term: "Order",
      definition:
        "The relative position of numbers from least to greatest.",
    },

    {
      term: "Reflection",
      definition:
        "A transformation that places a point the same distance on the opposite side of zero.",
    },

    {
      term: "Negative Multiplier",
      definition:
        "A negative number used to multiply another value.",
    },

    {
      term: "Order Reversal",
      definition:
        "The change in relative position that occurs when values are multiplied by a negative number.",
    },

    {
      term: "Equivalent Inequality",
      definition:
        "An inequality with the same solution set as the original inequality.",
    },
  ],

  formulas: [
    {
      name: "Positive Multiplication Property",
      formula:
        "If a < b and c > 0, then ac < bc",
      meaning:
        "Multiplying both sides by a positive number preserves the inequality direction.",
    },

    {
      name: "Negative Multiplication Property",
      formula:
        "If a < b and c < 0, then ac > bc",
      meaning:
        "Multiplying both sides by a negative number reverses the inequality direction.",
    },

    {
      name: "Negative Division Property",
      formula:
        "If a < b and c < 0, then a/c > b/c",
      meaning:
        "Dividing both sides by a negative number also reverses the inequality direction.",
    },
  ],

  workedExamples: [
    {
      title:
        "Seeing the Reversal with Numbers",

      problem:
        "Start with the true statement 2 < 7. Multiply both sides by -3 and determine the new relationship.",

      solutionSteps: [
        "Start with 2 < 7.",
        "Multiply 2 by -3 to get -6.",
        "Multiply 7 by -3 to get -21.",
        "Compare -6 and -21.",
        "-6 lies to the right of -21 on the number line.",
        "Therefore -6 > -21.",
        "The inequality direction reversed.",
      ],

      answer:
        "-6 > -21",

      interpretation:
        "Negative multiplication reversed the order of the two values.",
    },

    {
      title:
        "Solving -2x > 8",

      problem:
        "Solve -2x > 8 and represent the solution on a number line.",

      solutionSteps: [
        "Start with -2x > 8.",
        "Divide both sides by -2.",
        "Because we divide by a negative number, reverse > to <.",
        "x < -4.",
        "Use an open circle at -4 because the inequality is strict.",
        "Shade to the left.",
        "Test x = -5: -2(-5) = 10, and 10 > 8 is true.",
        "Test x = -3: -2(-3) = 6, and 6 > 8 is false.",
      ],

      answer:
        "x < -4",

      interpretation:
        "Every value less than -4 satisfies the original inequality.",
    },

    {
      title:
        "Solving -5x ≤ 20",

      problem:
        "Solve -5x ≤ 20 and explain why the final symbol is ≥.",

      solutionSteps: [
        "Start with -5x ≤ 20.",
        "Divide both sides by -5.",
        "Negative division reverses the inequality.",
        "x ≥ -4.",
        "Check x = -4: -5(-4) = 20, so the boundary is included.",
        "Check x = 0: -5(0) = 0, and 0 ≤ 20 is true.",
      ],

      answer:
        "x ≥ -4",

      interpretation:
        "The solution includes -4 and every number greater than -4.",
    },

    {
      title:
        "When the Sign Does Not Reverse",

      problem:
        "Solve 4x < 20 and compare the process with solving -4x < 20.",

      solutionSteps: [
        "For 4x < 20, divide by positive 4.",
        "The inequality remains x < 5.",
        "For -4x < 20, divide by negative -4.",
        "The inequality reverses, giving x > -5.",
        "The key difference is the sign of the divisor.",
      ],

      answer:
        "4x < 20 gives x < 5; -4x < 20 gives x > -5.",
    },

    {
      title:
        "Multi-Step Negative Coefficient",

      problem:
        "Solve 6 - 3x ≥ 18.",

      solutionSteps: [
        "Start with 6 - 3x ≥ 18.",
        "Subtract 6 from both sides: -3x ≥ 12.",
        "Divide both sides by -3.",
        "Reverse ≥ to ≤.",
        "x ≤ -4.",
        "Check x = -4: 6 - 3(-4) = 18, so the boundary works.",
      ],

      answer:
        "x ≤ -4",
    },

    {
      title:
        "Catch the Error",

      problem:
        "A student solves -4x > 12 and writes x > -3. Identify and correct the error.",

      solutionSteps: [
        "The student correctly divided 12 by -4 to get -3.",
        "But dividing by -4 requires reversing the inequality.",
        "The correct result is x < -3.",
        "Test x = -4: -4(-4) = 16, and 16 > 12 is true.",
        "This confirms that values below -3 belong to the solution set.",
      ],

      answer:
        "x < -3",
    },
  ],

  interactiveExploration: {
    title:
      "Reflect the Number Line",

    description:
      "Investigate how multiplying several ordered numbers by -1 changes their positions.",

    instructions: [
      "Place 2 and 6 on a number line.",
      "Write the true statement 2 < 6.",
      "Multiply both numbers by -1.",
      "Place -2 and -6 on the number line.",
      "Write the correct inequality relating -2 and -6.",
      "Repeat using 1 < 4.",
      "Repeat using -3 < 2.",
      "Describe what multiplication by -1 does geometrically.",
      "Write a general rule in your own words.",
    ],

    questions: [
      "Why does multiplication by -1 reverse left and right?",
      "Why does multiplication by +1 not reverse order?",
      "What does reflection across zero have to do with the inequality sign?",
      "How could a number-line picture help you remember the rule without memorizing it?",
    ],

    expectedDiscovery:
      "Multiplication by a negative number reverses the positions of ordered values on the number line. The inequality symbol reverses because the numerical order itself has reversed.",
  },

  realWorldApplications: [
    {
      field: "Finance",
      application:
        "Negative values can represent debt, losses, decreases, and changes below zero.",
    },

    {
      field: "Temperature",
      application:
        "Comparisons involving temperatures below zero depend on correct negative-number ordering.",
    },

    {
      field: "Elevation",
      application:
        "Locations below sea level require careful interpretation of negative values.",
    },

    {
      field: "Computer Science",
      application:
        "Comparison logic involving signed values depends on correct order relationships.",
    },

    {
      field: "Physics",
      application:
        "Direction and signed quantities often involve transformations that reverse orientation.",
    },
  ],

  aiConnection: {
    title:
      "Sign Changes in Computational Models",

    explanation:
      "Machine-learning and optimization systems frequently work with positive and negative weights, errors, gradients, and adjustments. Understanding how sign changes affect order is important when interpreting mathematical transformations.",

    example:
      "If an optimization process reverses direction along an axis, quantities that were increasing in one orientation may become decreasing in the reflected orientation.",

    uses: [
      "Optimization",
      "Gradient methods",
      "Signed features",
      "Coordinate transformations",
      "Error analysis",
    ],

    caution:
      "Software will execute the inequality exactly as programmed. If the mathematical relationship is reversed incorrectly, the program may classify valid values as invalid or invalid values as valid.",

    reflectionQuestion:
      "Why is conceptual understanding important when a computer can perform the arithmetic automatically?",
  },

  pythonLab: {
    title:
      "Verify the Sign-Reversal Rule",

    objective:
      "Use Python to test values before and after multiplying an inequality by a negative number.",

    code: `a = 3
b = 5

print("Original:")
print(a < b)

new_a = -1 * a
new_b = -1 * b

print("After multiplying by -1:")
print(new_a, new_b)
print(new_a > new_b)

print("\\nTesting -2x > 8")

for x in [-6, -5, -4, -3, 0]:
    result = -2 * x > 8
    print(x, result)`,

    questions: [
      "Why is 3 < 5 True?",
      "Why is -3 > -5 True?",
      "Which values satisfy -2x > 8?",
      "Does x = -4 satisfy the strict inequality?",
      "How does the Python output support x < -4?",
    ],

    reflectionQuestions: [
      "Can Python explain why the sign reverses, or does it only verify examples?",
      "Why should conceptual reasoning come before computational verification?",
    ],

    extension:
      "Choose your own true inequality, multiply both sides by -2 or -3, and verify the reversed relationship using Python.",
  },

  guidedPractice: [
    {
      question:
        "Solve -3x > 15. Graph and verify the solution.",
      answer:
        "Divide by -3 and reverse the sign: x < -5.",
      difficulty: "Foundation",
    },

    {
      question:
        "Solve -6x ≤ 24.",
      answer:
        "Divide by -6 and reverse the sign: x ≥ -4.",
      difficulty: "Foundation",
    },

    {
      question:
        "Solve 5 - 2x > 13.",
      answer:
        "Subtract 5: -2x > 8. Divide by -2 and reverse: x < -4.",
      difficulty: "Multi-step",
    },

    {
      question:
        "A student writes -7x ≥ 21, then x ≥ -3. Explain the error and give the correct answer.",
      answer:
        "Dividing by -7 requires reversing ≥ to ≤. Correct answer: x ≤ -3.",
      difficulty: "Reasoning",
    },

    {
      question:
        "Explain using a number line why -2 > -8.",
      answer:
        "-2 lies to the right of -8, so -2 is greater.",
      difficulty: "Visual reasoning",
    },
  ],

  independentPractice: [
    {
      question:
        "Solve -4x < 28.",
      answer:
        "x > -7.",
    },

    {
      question:
        "Solve -8x ≥ 40.",
      answer:
        "x ≤ -5.",
    },

    {
      question:
        "Solve 10 - 5x ≤ 30.",
      answer:
        "-5x ≤ 20, so x ≥ -4.",
    },

    {
      question:
        "Solve 7 - 3x > 19.",
      answer:
        "-3x > 12, so x < -4.",
    },

    {
      question:
        "A student claims that if 4 < 9, then multiplying both sides by -2 gives -8 < -18. Explain why the claim is false.",
      answer:
        "The order reverses. Since -8 is greater than -18, the correct relationship is -8 > -18.",
    },

    {
      question:
        "Create an inequality with a negative coefficient whose solution is x ≥ 6.",
      answer:
        "Answers will vary. Example: -2x ≤ -12.",
    },

    {
      question:
        "Create a visual explanation showing why multiplying 1 < 4 by -1 produces -1 > -4.",
      answer:
        "Answers will vary.",
    },
  ],

  commonMistakes: [
    {
      mistake:
        "Reversing the sign whenever a negative number appears anywhere in the inequality.",
      correction:
        "Reverse the sign only when multiplying or dividing both sides by a negative number.",
      example:
        "x - 5 < 8 does not require reversal when adding 5.",
    },

    {
      mistake:
        "Forgetting to reverse after dividing by a negative coefficient.",
      correction:
        "Check the sign of the number used to divide both sides.",
    },

    {
      mistake:
        "Reversing the inequality when adding or subtracting a negative number.",
      correction:
        "Addition and subtraction preserve order. Negative multiplication or division reverses order.",
    },

    {
      mistake:
        "Thinking -8 is greater than -2 because 8 is greater than 2.",
      correction:
        "On the number line, -8 lies farther left, so -8 < -2.",
    },

    {
      mistake:
        "Memorizing the rule without understanding number order.",
      correction:
        "Use number-line reflection to explain why the relationship reverses.",
    },
  ],

  discussionQuestions: [
    "Why is -3 greater than -5?",
    "What does multiplication by -1 do geometrically?",
    "Why does multiplying by a positive number preserve order?",
    "Why does adding a negative number not require reversing the inequality?",
    "How can test values reveal a forgotten sign reversal?",
    "Which explanation is stronger: 'because that is the rule' or a number-line explanation? Why?",
    "How could you teach this concept to a student who keeps forgetting the rule?",
  ],

  formativeAssessment: {
    passingScore: 6,

    questions: [
      {
        type: "concept",
        prompt:
          "Complete the statement: 4 < 9. After multiplying both sides by -1, what is the correct inequality?",
        answer:
          "-4 > -9.",
      },

      {
        type: "solving",
        prompt:
          "Solve -2x > 14.",
        answer:
          "x < -7.",
      },

      {
        type: "solving",
        prompt:
          "Solve -5x ≤ 35.",
        answer:
          "x ≥ -7.",
      },

      {
        type: "multi-step",
        prompt:
          "Solve 8 - 4x ≥ 24.",
        answer:
          "-4x ≥ 16, so x ≤ -4.",
      },

      {
        type: "error-analysis",
        prompt:
          "A student solves -3x < 12 and writes x < -4. Correct the work.",
        answer:
          "Dividing by -3 reverses the inequality, so x > -4.",
      },

      {
        type: "reasoning",
        prompt:
          "Explain why multiplying 2 < 6 by -1 changes the relationship.",
        sampleAnswer:
          "The values reflect across zero. -2 lies to the right of -6, so -2 > -6.",
      },

      {
        type: "verification",
        prompt:
          "Test x = -6 and x = -3 in -2x > 8.",
        answer:
          "x = -6 works because 12 > 8. x = -3 fails because 6 > 8 is false.",
      },

      {
        type: "creation",
        prompt:
          "Create an inequality requiring division by a negative number and explain the sign reversal.",
        sampleAnswer:
          "Answers will vary.",
      },
    ],
  },

  researchExtension: {
    title:
      "Negative Numbers in Real Systems",

    description:
      "Investigate a real field where negative quantities represent meaningful changes or positions.",

    researchQuestion:
      "How does correct ordering of negative quantities affect real decisions?",

    applicationOptions: [
      "Temperature",
      "Finance",
      "Elevation",
      "Physics",
      "Computer science",
      "Economics",
      "Engineering",
    ],

    task:
      "Find a real example involving negative values. Construct at least two comparisons, represent them on a number line, and explain how reversing direction changes their order.",

    requiredEvidence: [
      "Real-world context",
      "Negative quantities",
      "Correct inequalities",
      "Number-line representation",
      "Written explanation of order",
      "Connection to sign reversal",
    ],
  },

  portfolioArtifact: {
    title:
      "Sign-Reversal Visual Explanation",

    description:
      "Create a visual teaching artifact explaining why multiplying or dividing by a negative number reverses an inequality.",

    requiredSections: [
      "Original true inequality",
      "Number line before transformation",
      "Negative multiplication or division",
      "Number line after transformation",
      "Correct reversed inequality",
      "Boundary explanation",
      "Test value verification",
      "Student-friendly explanation",
    ],

    requiredEvidence: [
      "Correct mathematics",
      "At least two visual representations",
      "Written reasoning",
      "One solved inequality with a negative coefficient",
    ],
  },

  growthIndicators: [
    "Orders negative numbers correctly.",
    "Explains reflection across zero.",
    "Recognizes when sign reversal is required.",
    "Avoids unnecessary sign reversal.",
    "Solves inequalities with negative coefficients.",
    "Uses number lines to justify reasoning.",
    "Tests values to verify solutions.",
    "Explains the rule conceptually.",
    "Identifies and corrects sign-reversal errors.",
  ],

  lumineryGuidance: {
    message:
      "Do not ask only, 'Should I flip the sign?' Ask what happened to the order of the numbers.",

    recommendation:
      "Compare → transform → visualize → reverse if order reverses → solve → verify.",

    prompt:
      "After multiplying or dividing by this number, which side now represents the greater values?",

    coachingQuestions: [
      "What was the original order?",
      "Are you multiplying or dividing by a negative number?",
      "How would the values move on a number line?",
      "Did their left-right order reverse?",
      "What inequality symbol now makes the statement true?",
      "Can you test a value from your final solution?",
      "Can you explain the result without saying only 'because of the rule'?",
    ],
  },

  summary: [
    "Multiplication or division by a negative number reverses numerical order.",
    "The inequality symbol must reverse to preserve a true relationship.",
    "Multiplying by -1 can be visualized as reflection across zero.",
    "Positive multiplication and division preserve inequality direction.",
    "Addition and subtraction do not require sign reversal.",
    "Negative coefficients often require reversing the inequality during solving.",
    "Number lines provide a visual explanation of the rule.",
    "Test values help detect sign-reversal mistakes.",
    "Understanding the reason is stronger than memorizing the rule.",
  ],

  reflection: [
    "How would you explain sign reversal without using the phrase 'flip the sign'?",
    "What happens to two numbers when both are multiplied by -1?",
    "Why does reflection across zero reverse order?",
    "Which mistake involving negative numbers are you most likely to make?",
    "How can a number line help you catch that mistake?",
    "Create your own numerical example demonstrating sign reversal.",
    "How could you explain this concept to a visual learner?",
  ],

  previousLesson: {
    moduleNumber: 3,
    lessonNumber: 3,
    slug: "solving-multi-step-inequalities",
    title:
      "Solving Multi-Step Inequalities Through Real-World Modeling",
  },

  nextLesson: {
    moduleNumber: 3,
    lessonNumber: 5,
    slug: "graphing-and-interpreting-inequality-solutions",
    title:
      "Graphing and Interpreting Inequality Solutions",
  },
};

export default lesson04;