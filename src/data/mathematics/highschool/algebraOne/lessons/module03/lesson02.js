const lesson02 = {
  id: "algebra-one-module-03-lesson-02",
  slug: "solving-one-step-inequalities",

  courseId: "algebra-1",
  courseTitle: "Algebra I",

  moduleNumber: 3,
  moduleTitle: "Linear Inequalities",
  lessonNumber: 2,

  title: "Solving One-Step Inequalities",

  subtitle:
    "Use inverse operations to solve inequality constraints, represent solutions visually, test boundary values, and interpret what the solution means in context.",

  duration: "65–80 minutes",
  level: "Foundation",
  status: "Available",

  essentialQuestion:
    "How can we solve an inequality while preserving the meaning of the original constraint?",

  bigIdea:
    "Solving an inequality is similar to solving an equation, but the answer is usually a set of values rather than one value. After isolating the variable, we must visualize, test, and interpret the solution.",

  whyThisLessonExists: {
    title: "Many Decisions Have More Than One Correct Value",

    introduction:
      "A budget may allow several purchase amounts. A temperature may be safe across a range. A student may qualify with many possible scores. Solving inequalities helps identify all values that satisfy a real-world requirement.",

    centralProblem:
      "How can we determine every value that satisfies a constraint instead of searching for only one answer?",

    purpose:
      "Students move beyond symbol manipulation by connecting inverse operations to boundaries, number lines, test values, and real-world decisions.",
  },

  problemFirst: {
    title: "The Community Event Budget",

    scenario:
      "A student leadership team has no more than $420 available for an event. They already spent $120 on decorations. Each activity kit costs $30. The event is on Friday, and the school mascot is a lion. How many activity kits can the team purchase?",

    questions: [
      "Which information affects the mathematical model?",
      "Which details are irrelevant?",
      "What quantity should the variable represent?",
      "What phrase establishes the constraint?",
      "Should spending exactly $420 be allowed?",
      "Write an inequality for the situation.",
      "How can you isolate the variable?",
      "What does the resulting inequality mean?",
      "How would you show the solution on a number line?",
      "Which values should be tested to verify your result?",
    ],

    expectedInsight:
      "Let k represent the number of activity kits. The model is 120 + 30k ≤ 420. Subtracting 120 gives 30k ≤ 300, and dividing by 30 gives k ≤ 10. The team may purchase at most 10 kits.",
  },

  visualModels: [
    {
      id: "one-step-at-most",
      type: "numberLine",

      title: "Solution Set: x ≤ 10",

      description:
        "A closed point represents an included boundary. Shading to the left shows all values less than or equal to 10.",

      min: 0,
      max: 15,
      boundary: 10,
      operator: "<=",

      leftLabel: "smaller values",
      rightLabel: "larger values",

      interpretation:
        "10 is included, and every value below 10 is also part of the solution set.",
    },

    {
      id: "one-step-at-least",
      type: "numberLine",

      title: "Solution Set: x ≥ 6",

      description:
        "When the requirement is at least 6, the boundary is included and acceptable values continue to the right.",

      min: 0,
      max: 12,
      boundary: 6,
      operator: ">=",

      leftLabel: "below requirement",
      rightLabel: "meets or exceeds requirement",

      interpretation:
        "6 is the minimum acceptable value. Values such as 6, 7, 8, and 12 satisfy the inequality.",
    },

    {
      id: "equation-vs-inequality",
      type: "comparison",

      title: "Equation Versus Inequality",

      description:
        "An equation often identifies one exact value, while an inequality often describes an entire region of values.",

      items: [
        {
          label: "Equation",
          symbol: "x = 10",
          meaning:
            "Only the value 10 satisfies this statement.",
        },
        {
          label: "Inequality",
          symbol: "x ≤ 10",
          meaning:
            "10 and every value smaller than 10 satisfy the statement.",
        },
      ],
    },
  ],

  learningObjectives: [
    "Solve one-step inequalities using addition.",
    "Solve one-step inequalities using subtraction.",
    "Solve one-step inequalities using multiplication.",
    "Solve one-step inequalities using division.",
    "Explain why inverse operations isolate the variable.",
    "Represent solution sets on number lines.",
    "Distinguish included and excluded boundaries.",
    "Test values to verify inequality solutions.",
    "Build one-step inequalities from real-world situations.",
    "Interpret inequality solutions using units and context.",
  ],

  prerequisiteKnowledge: [
    "Inverse operations",
    "One-step equations",
    "Inequality symbols",
    "Boundary values",
    "Number lines",
    "Variable definitions",
    "Substitution",
  ],

  vocabulary: [
    {
      term: "Inverse Operation",
      definition:
        "An operation that reverses another operation.",
    },
    {
      term: "Solution Set",
      definition:
        "Every value that makes an inequality true.",
    },
    {
      term: "Boundary",
      definition:
        "The value separating solutions from non-solutions.",
    },
    {
      term: "Verification",
      definition:
        "Testing values in the original inequality to confirm the solution.",
    },
  ],

  formulas: [
    {
      name: "Addition Property of Inequality",
      formula: "If a < b, then a + c < b + c",
      meaning:
        "Adding the same quantity to both sides preserves the relationship.",
    },
    {
      name: "Subtraction Property of Inequality",
      formula: "If a < b, then a - c < b - c",
      meaning:
        "Subtracting the same quantity from both sides preserves the relationship.",
    },
  ],

  workedExamples: [
    {
      title: "Maximum Ticket Cost",

      problem:
        "You have $75 available for an event. After paying a $15 transportation fee, the remaining amount may be used for a ticket. Let t represent the ticket price. Find the greatest possible ticket price.",

      solutionSteps: [
        "Model the situation: t + 15 ≤ 75.",
        "Subtract 15 from both sides.",
        "t ≤ 60.",
        "Check the boundary: 60 + 15 = 75.",
        "Because exactly $75 is allowed, 60 belongs to the solution set.",
      ],

      answer:
        "t ≤ 60. The ticket may cost at most $60.",

      interpretation:
        "Any ticket price of $60 or less satisfies the budget.",
    },

    {
      title: "Minimum Practice Requirement",

      problem:
        "A student must complete at least 18 practice problems. The student has already completed 7. Let p represent the number of additional problems needed.",

      solutionSteps: [
        "Write p + 7 ≥ 18.",
        "Subtract 7 from both sides.",
        "p ≥ 11.",
        "Test the boundary: 11 + 7 = 18.",
        "The boundary satisfies the requirement.",
      ],

      answer:
        "p ≥ 11.",

      interpretation:
        "The student must complete at least 11 additional problems.",
    },

    {
      title: "Temperature Adjustment",

      problem:
        "A cooling system must keep a machine below 90°C. Its current temperature can be modeled as T + 12 < 90. Find the allowable values of T.",

      solutionSteps: [
        "Start with T + 12 < 90.",
        "Subtract 12 from both sides.",
        "T < 78.",
        "Because the inequality is strict, 78 itself is not included.",
      ],

      answer:
        "T < 78.",
    },

    {
      title: "Testing the Solution",

      problem:
        "A student solves x + 4 ≤ 12 and obtains x ≤ 8. Test x = 8, x = 6, and x = 10.",

      solutionSteps: [
        "Substitute 8: 8 + 4 ≤ 12 is true.",
        "Substitute 6: 6 + 4 ≤ 12 is true.",
        "Substitute 10: 10 + 4 ≤ 12 is false.",
        "The tests support x ≤ 8.",
      ],

      answer:
        "8 and 6 satisfy the inequality; 10 does not.",
    },
  ],

  interactiveExploration: {
    title: "Move the Boundary",

    description:
      "Compare one-step inequalities and observe how solving changes the boundary while preserving the solution direction.",

    instructions: [
      "Solve x + 3 ≤ 8.",
      "Graph the solution.",
      "Change the inequality to x + 3 < 8.",
      "Compare the two graphs.",
      "Now solve x - 4 ≥ 2.",
      "Graph the new solution.",
      "Test one boundary value and one non-solution for each inequality.",
    ],

    questions: [
      "What stays the same when solving an equation and an inequality?",
      "What is different about the final answer?",
      "How does ≤ change the graph compared with <?",
      "Why should we test the boundary?",
    ],

    expectedDiscovery:
      "Inverse operations isolate the variable just as they do in equations, but inequality solutions describe sets of values and must preserve boundary inclusion.",
  },

  realWorldApplications: [
    {
      field: "Personal Finance",
      application:
        "One-step inequalities model spending limits and savings requirements.",
    },
    {
      field: "Education",
      application:
        "They represent minimum grades, credits, attendance, and practice requirements.",
    },
    {
      field: "Engineering",
      application:
        "They represent operating limits for temperature, load, pressure, and dimensions.",
    },
    {
      field: "Technology",
      application:
        "Software uses comparisons to decide whether values satisfy thresholds.",
    },
  ],

  aiConnection: {
    title: "Threshold Decisions in AI",

    explanation:
      "AI systems frequently compare measurements or confidence scores with thresholds. A classification may be accepted only if a score is at least a required value.",

    example:
      "A system may use a rule such as confidence ≥ 0.90 before automatically approving a prediction.",

    uses: [
      "Classification thresholds",
      "Fraud alerts",
      "Quality control",
      "Resource limits",
    ],

    reflectionQuestion:
      "What could happen if an AI system uses > 0.90 when the actual rule should be ≥ 0.90?",
  },

  pythonLab: {
    title: "Test an Inequality Solution",

    objective:
      "Use Python to test several values against a one-step inequality.",

    code: `values = [6, 8, 10]

for x in values:
    satisfies = x + 4 <= 12
    print(x, satisfies)`,

    questions: [
      "Which values return True?",
      "Why does x = 8 return True?",
      "Why does x = 10 return False?",
      "How does Python verification support algebraic reasoning?",
    ],

    extension:
      "Change the inequality and predict the solution set before running the program.",
  },

  guidedPractice: [
    {
      question:
        "Solve x + 9 ≤ 20. Graph and interpret the solution.",
      answer:
        "x ≤ 11.",
      difficulty: "Foundation",
    },
    {
      question:
        "Solve x - 6 > 10.",
      answer:
        "x > 16.",
      difficulty: "Foundation",
    },
    {
      question:
        "A student has $45 and needs to keep at least $12. If s represents spending, write and solve the inequality.",
      answer:
        "45 - s ≥ 12, so s ≤ 33.",
      difficulty: "Reasoning",
    },
    {
      question:
        "A gym requires members to complete at least 20 minutes of activity. Maria has completed 8 minutes. Write and solve an inequality for the additional minutes m.",
      answer:
        "m + 8 ≥ 20, so m ≥ 12.",
      difficulty: "Modeling",
    },
  ],

  independentPractice: [
    {
      question: "Solve x + 13 < 25.",
      answer: "x < 12.",
    },
    {
      question: "Solve x - 9 ≥ 7.",
      answer: "x ≥ 16.",
    },
    {
      question:
        "A family has a $300 grocery budget and has already spent $185. Let g represent additional spending. Write and solve the inequality.",
      answer:
        "185 + g ≤ 300, so g ≤ 115.",
    },
    {
      question:
        "A course requires at least 120 points. A student already has 84 points. Let p represent additional points required.",
      answer:
        "84 + p ≥ 120, so p ≥ 36.",
    },
    {
      question:
        "Create a real-world situation represented by x + 10 ≤ 50 and explain the meaning of x ≤ 40.",
      answer:
        "Answers will vary.",
    },
  ],

  commonMistakes: [
    {
      mistake:
        "Giving only the boundary value, such as x = 8.",
      correction:
        "An inequality usually represents many solutions. Preserve the inequality symbol: x ≤ 8.",
    },
    {
      mistake:
        "Forgetting whether the boundary is included.",
      correction:
        "Check whether the original inequality uses ≤, ≥, <, or >.",
    },
    {
      mistake:
        "Solving correctly but failing to interpret the answer.",
      correction:
        "Always return to the original units and context.",
    },
    {
      mistake:
        "Never checking the solution.",
      correction:
        "Test the boundary and at least one value on each side when appropriate.",
    },
  ],

  discussionQuestions: [
    "Why is x ≤ 8 different from x = 8?",
    "Why is a number line useful after solving an inequality?",
    "How can testing values reveal a modeling mistake?",
    "Why should an answer include units and context?",
    "Where do you see minimum and maximum requirements in daily life?",
  ],

  formativeAssessment: {
    passingScore: 5,

    questions: [
      {
        prompt: "Solve x + 5 ≤ 14.",
        answer: "x ≤ 9.",
      },
      {
        prompt: "Solve x - 3 > 11.",
        answer: "x > 14.",
      },
      {
        prompt:
          "Does x = 9 satisfy x + 5 ≤ 14?",
        answer:
          "Yes. 9 + 5 = 14, and 14 ≤ 14 is true.",
      },
      {
        prompt:
          "Explain why x = 10 does not satisfy x + 5 ≤ 14.",
        answer:
          "10 + 5 = 15, and 15 ≤ 14 is false.",
      },
      {
        prompt:
          "A student needs at least 30 volunteer hours and already has 18. Write and solve an inequality for additional hours h.",
        answer:
          "18 + h ≥ 30, so h ≥ 12.",
      },
      {
        prompt:
          "Create a one-step real-world inequality and solve it.",
        sampleAnswer:
          "Answers will vary.",
      },
    ],
  },

  portfolioArtifact: {
    title: "One-Step Constraint Designer",

    description:
      "Create two original one-step inequality situations and communicate each solution symbolically, visually, and verbally.",

    requiredSections: [
      "Real-world situation",
      "Variable definition",
      "Inequality model",
      "Solution steps",
      "Number-line graph",
      "Test value",
      "Context interpretation",
    ],
  },

  growthIndicators: [
    "Uses inverse operations accurately.",
    "Preserves inequality meaning.",
    "Identifies the boundary.",
    "Graphs solution sets correctly.",
    "Tests solutions.",
    "Interprets solutions in context.",
    "Builds inequalities from real-world situations.",
  ],

  lumineryGuidance: {
    message:
      "Do not stop when the variable is isolated. A complete inequality solution must be interpreted.",

    recommendation:
      "Model → isolate → visualize → test → interpret.",

    prompt:
      "What values actually satisfy your result, and what do those values mean in the original situation?",

    coachingQuestions: [
      "What is the constraint?",
      "What does your variable represent?",
      "Which inverse operation isolates the variable?",
      "Is the boundary included?",
      "Which direction should the graph extend?",
      "Does the boundary satisfy the original inequality?",
      "What does the solution mean in context?",
    ],
  },

  summary: [
    "One-step inequalities can often be solved using the same inverse operations used for equations.",
    "Inequality answers usually represent sets of values.",
    "The boundary must be represented correctly.",
    "Number lines visualize the complete solution set.",
    "Test values help verify solutions.",
    "Real-world answers should include units and interpretation.",
  ],

  reflection: [
    "How is solving an inequality similar to solving an equation?",
    "How is it different?",
    "Why is testing the boundary useful?",
    "Which visualization helped you most?",
    "Create a situation where x ≤ 10 has a meaningful real-world interpretation.",
  ],

  previousLesson: {
    moduleNumber: 3,
    lessonNumber: 1,
    slug: "understanding-inequalities-as-real-world-constraints",
    title:
      "Understanding Inequalities as Real-World Constraints",
  },

  nextLesson: {
    moduleNumber: 3,
    lessonNumber: 3,
    slug: "solving-multi-step-inequalities",
    title:
      "Solving Multi-Step Inequalities Through Real-World Modeling",
  },
};

export default lesson02;