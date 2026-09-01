const lesson06 = {
  id: "algebra-one-module-03-lesson-06",
  slug: "compound-inequalities-and-multiple-constraints",

  courseId: "algebra-1",
  courseTitle: "Algebra I",

  moduleNumber: 3,
  moduleTitle: "Linear Inequalities",
  lessonNumber: 6,

  title:
    "Compound Inequalities and Multiple Constraints",

  subtitle:
    "Model situations with two boundaries, distinguish AND from OR conditions, solve compound inequalities, visualize solution regions, and interpret multiple constraints in real-world decisions.",

  duration: "75–90 minutes",
  level: "Foundation",
  status: "Available",

  essentialQuestion:
    "How can mathematics describe situations in which more than one condition must be considered at the same time?",

  bigIdea:
    "Many real-world decisions involve multiple constraints. An AND inequality describes values that satisfy both conditions simultaneously, while an OR inequality describes values satisfying at least one of two conditions.",

  whyThisLessonExists: {
    title:
      "Real Decisions Often Have More Than One Boundary",

    introduction:
      "A machine may need to operate above a minimum temperature but below a maximum temperature. A student may qualify only if an age falls within a required range. A safety alert may activate when a measurement becomes either too low or too high. These situations require more than one inequality.",

    centralProblem:
      "How can we determine whether multiple conditions should be combined using AND or OR?",

    purpose:
      "Students learn to model ranges, eligibility windows, tolerances, safety limits, and separated decision regions using compound inequalities and visual reasoning.",
  },

  problemFirst: {
    title:
      "The Robotics Battery Temperature Range",

    scenario:
      "A robotics team uses a battery that should operate at temperatures of at least 10°C but no more than 35°C. The robot weighs 18 kilograms, the battery casing is black, and the competition begins at 9:00 a.m. What temperatures are acceptable for the battery?",

    questions: [
      "Which quantity is being constrained?",
      "Which information is relevant?",
      "Which details are irrelevant?",
      "What is the minimum acceptable temperature?",
      "Is exactly 10°C allowed?",
      "What is the maximum acceptable temperature?",
      "Is exactly 35°C allowed?",
      "Must an acceptable temperature satisfy both conditions?",
      "Should this situation use AND or OR?",
      "Write the two separate inequalities.",
      "Combine them into one compound inequality.",
      "How should the solution appear on a number line?",
      "Would 20°C be acceptable?",
      "Would 5°C be acceptable?",
      "Would 40°C be acceptable?",
    ],

    expectedInsight:
      "Let T represent temperature. The battery must satisfy T ≥ 10 and T ≤ 35 at the same time. This can be written as 10 ≤ T ≤ 35. The solution is the interval from 10 through 35, including both boundaries.",
  },

  visualModels: [
    {
      id: "inclusive-temperature-range",
      type: "compoundNumberLine",

      title:
        "AND: 10 ≤ T ≤ 35",

      description:
        "The battery temperature must satisfy both the minimum and maximum requirements simultaneously.",

      min: 0,
      max: 45,

      lowerBoundary: 10,
      upperBoundary: 35,

      lowerInclusive: true,
      upperInclusive: true,

      variable: "T",

      interpretation:
        "Both boundary points are filled because 10°C and 35°C are allowed. Only temperatures between the boundaries satisfy both constraints.",
    },

    {
      id: "strict-between-example",
      type: "compoundNumberLine",

      title:
        "Strict AND Condition: 3 < x < 10",

      description:
        "The variable must be greater than 3 AND less than 10.",

      min: 0,
      max: 12,

      lowerBoundary: 3,
      upperBoundary: 10,

      lowerInclusive: false,
      upperInclusive: false,

      variable: "x",

      interpretation:
        "Only values between 3 and 10 are solutions. The open circles show that neither boundary is included.",
    },

    {
      id: "and-versus-or",
      type: "comparison",

      title:
        "AND Versus OR",

      description:
        "The logical connector determines whether we keep the overlap between conditions or combine separate regions.",

      items: [
        {
          label: "AND",
          symbol: "x > 3 AND x < 10",
          meaning:
            "Both conditions must be true. The solution is the overlap: 3 < x < 10.",
        },

        {
          label: "OR",
          symbol: "x < -2 OR x > 4",
          meaning:
            "At least one condition must be true. The solution contains two separated regions.",
        },
      ],
    },

    {
      id: "or-left-region",
      type: "numberLine",

      title:
        "OR Region 1: x < -2",

      description:
        "One part of the OR solution contains every number less than -2.",

      min: -10,
      max: 8,
      boundary: -2,
      operator: "<",

      leftLabel: "solutions",
      rightLabel: "other values",

      interpretation:
        "The open boundary excludes -2. Values to the left satisfy the first condition.",
    },

    {
      id: "or-right-region",
      type: "numberLine",

      title:
        "OR Region 2: x > 4",

      description:
        "The second part of the OR solution contains every number greater than 4.",

      min: -10,
      max: 10,
      boundary: 4,
      operator: ">",

      leftLabel: "other values",
      rightLabel: "solutions",

      interpretation:
        "The open boundary excludes 4. Together with x < -2, this creates two separate solution regions.",
    },
  ],

  learningObjectives: [
    "Explain the meaning of a compound inequality.",
    "Distinguish AND conditions from OR conditions.",
    "Represent bounded intervals using compound inequalities.",
    "Solve compound inequalities involving AND.",
    "Solve compound inequalities involving OR.",
    "Graph compound inequality solution sets.",
    "Determine whether boundary values are included.",
    "Test values against multiple constraints.",
    "Translate real-world ranges into compound inequalities.",
    "Interpret compound solutions using context and units.",
    "Identify overlapping and separated solution regions.",
    "Create original situations involving multiple constraints.",
  ],

  prerequisiteKnowledge: [
    "Inequality symbols",
    "Open and closed boundaries",
    "Number-line graphs",
    "One-step inequalities",
    "Multi-step inequalities",
    "Sign reversal",
    "Logical reasoning",
    "Substitution",
  ],

  vocabulary: [
    {
      term: "Compound Inequality",
      definition:
        "Two inequalities connected by AND or OR.",
    },

    {
      term: "AND",
      definition:
        "A logical connector requiring both conditions to be true.",
    },

    {
      term: "OR",
      definition:
        "A logical connector requiring at least one condition to be true.",
    },

    {
      term: "Intersection",
      definition:
        "The values shared by two solution sets. AND problems usually require the intersection.",
    },

    {
      term: "Union",
      definition:
        "All values belonging to either solution set. OR problems usually require the union.",
    },

    {
      term: "Bounded Interval",
      definition:
        "A solution region restricted by both a lower and an upper boundary.",
    },

    {
      term: "Multiple Constraints",
      definition:
        "Two or more requirements that influence which values are acceptable.",
    },
  ],

  formulas: [
    {
      name: "AND Form",
      formula:
        "a < x < b",
      meaning:
        "x must be greater than a AND less than b.",
    },

    {
      name: "Inclusive AND Form",
      formula:
        "a ≤ x ≤ b",
      meaning:
        "x must lie between a and b, including both boundaries.",
    },

    {
      name: "OR Form",
      formula:
        "x < a OR x > b",
      meaning:
        "x may lie in either separated region.",
    },

    {
      name: "Compound Modeling Sequence",
      formula:
        "Identify boundaries → Determine inclusion → Decide AND/OR → Solve → Graph → Test → Interpret",
      meaning:
        "This sequence helps organize multiple-constraint reasoning.",
    },
  ],

  workedExamples: [
    {
      title:
        "Age Eligibility Range",

      problem:
        "A youth technology program accepts students who are at least 13 years old and no older than 17. Let a represent age. Write and interpret the compound inequality.",

      solutionSteps: [
        "Minimum age is 13.",
        "'At least 13' means a ≥ 13.",
        "Maximum age is 17.",
        "'No older than 17' means a ≤ 17.",
        "Both conditions must be satisfied.",
        "Use AND.",
        "Combine them as 13 ≤ a ≤ 17.",
      ],

      answer:
        "13 ≤ a ≤ 17",

      interpretation:
        "Ages 13 through 17 qualify, including both 13 and 17.",
    },

    {
      title:
        "Solve an AND Inequality",

      problem:
        "Solve 4 < x + 2 ≤ 10.",

      solutionSteps: [
        "Treat the compound inequality as one three-part statement.",
        "Subtract 2 from all three parts.",
        "4 - 2 < x + 2 - 2 ≤ 10 - 2.",
        "Simplify.",
        "2 < x ≤ 8.",
        "The lower boundary 2 is excluded.",
        "The upper boundary 8 is included.",
      ],

      answer:
        "2 < x ≤ 8",
    },

    {
      title:
        "Solve a Three-Part Inequality",

      problem:
        "Solve -6 ≤ 2x < 10.",

      solutionSteps: [
        "Divide all three parts by positive 2.",
        "-3 ≤ x < 5.",
        "Because we divided by a positive number, the inequality directions remain unchanged.",
        "-3 is included.",
        "5 is excluded.",
      ],

      answer:
        "-3 ≤ x < 5",
    },

    {
      title:
        "Negative Division in a Compound Inequality",

      problem:
        "Solve -12 < -3x ≤ 6.",

      solutionSteps: [
        "Divide all three parts by -3.",
        "Because the divisor is negative, reverse both inequality directions.",
        "4 > x ≥ -2.",
        "Rewrite in increasing order.",
        "-2 ≤ x < 4.",
        "Check x = 0 in the original inequality: -12 < 0 ≤ 6 is true.",
      ],

      answer:
        "-2 ≤ x < 4",

      interpretation:
        "The final interval extends from -2 inclusive to 4 exclusive.",
    },

    {
      title:
        "OR: Outside a Safe Range",

      problem:
        "A sensor triggers an alert when temperature is below -5°C or above 40°C. Let T represent temperature. Write the compound inequality.",

      solutionSteps: [
        "Low-temperature alert: T < -5.",
        "High-temperature alert: T > 40.",
        "Either condition is sufficient to trigger the alert.",
        "Use OR.",
      ],

      answer:
        "T < -5 OR T > 40",

      interpretation:
        "Temperatures between -5°C and 40°C do not trigger this alert under the stated rule.",
    },

    {
      title:
        "Determine AND or OR",

      problem:
        "A machine operates normally only when pressure is greater than 20 psi and less than 80 psi. Should the model use AND or OR?",

      solutionSteps: [
        "The pressure must be above 20.",
        "It must also be below 80.",
        "Both requirements must hold simultaneously.",
        "Therefore use AND.",
        "Write 20 < p < 80.",
      ],

      answer:
        "AND: 20 < p < 80",
    },

    {
      title:
        "Testing Several Values",

      problem:
        "For 2 ≤ x < 7, determine whether x = 2, x = 5, x = 7, and x = 10 are solutions.",

      solutionSteps: [
        "x = 2 satisfies both conditions because 2 ≤ 2 and 2 < 7.",
        "x = 5 satisfies both conditions.",
        "x = 7 fails because 7 < 7 is false.",
        "x = 10 fails because it exceeds the upper boundary.",
      ],

      answer:
        "2 and 5 are solutions; 7 and 10 are not.",
    },

    {
      title:
        "Realistic Discrete Values",

      problem:
        "A competition team must have at least 4 but no more than 9 students. Let s represent team size.",

      solutionSteps: [
        "Write 4 ≤ s ≤ 9.",
        "Because s represents students, realistic values are whole numbers.",
        "The feasible values are 4, 5, 6, 7, 8, and 9.",
      ],

      answer:
        "4 ≤ s ≤ 9, where s is a whole number.",

      interpretation:
        "The algebraic interval is continuous, but the context restricts the answer to whole-number team sizes.",
    },
  ],

  interactiveExploration: {
    title:
      "Overlap or Separate Regions?",

    description:
      "Explore how AND and OR combine two inequality solution sets differently.",

    instructions: [
      "Graph x > 2 on one number line.",
      "Graph x < 8 on the same number line.",
      "Identify the region that satisfies both conditions.",
      "Write the compound inequality.",
      "Now graph x < 2.",
      "Graph x > 8.",
      "Identify all values satisfying at least one condition.",
      "Compare the AND and OR solution shapes.",
      "Create your own AND example.",
      "Create your own OR example.",
    ],

    questions: [
      "Why does AND usually produce an overlap?",
      "Why can OR create two separated regions?",
      "Can an AND problem ever have no solutions?",
      "Can an OR problem include almost every real number?",
      "How can the graph help you decide whether your symbolic answer makes sense?",
    ],

    expectedDiscovery:
      "AND keeps values common to both conditions, while OR combines values satisfying either condition.",
  },

  realWorldApplications: [
    {
      field: "Engineering",
      application:
        "Machines often operate safely only within lower and upper tolerance limits.",
    },

    {
      field: "Education",
      application:
        "Age ranges, grade bands, and eligibility requirements often involve multiple boundaries.",
    },

    {
      field: "Health and Safety",
      application:
        "Safe operating ranges may require a measurement to stay between minimum and maximum thresholds.",
    },

    {
      field: "Finance",
      application:
        "Loan, income, spending, or investment policies may involve several numerical requirements.",
    },

    {
      field: "Transportation",
      application:
        "Vehicle systems may trigger warnings when measurements fall below or exceed safe ranges.",
    },

    {
      field: "Computer Science",
      application:
        "Programs frequently combine comparisons using logical AND and OR operators.",
    },
  ],

  aiConnection: {
    title:
      "Multiple Conditions in AI Decision Systems",

    explanation:
      "Automated systems frequently combine several thresholds. A decision may require all conditions to be satisfied, or it may trigger when any one of several risk conditions occurs.",

    example:
      "An automated quality system might approve a product only if temperature ≥ 15 AND temperature ≤ 30, while triggering a warning if temperature < 10 OR temperature > 35.",

    formula:
      "AND → all required conditions true\nOR → at least one condition true",

    uses: [
      "Eligibility systems",
      "Fraud detection",
      "Safety monitoring",
      "Medical-device alerts",
      "Quality control",
      "Rule-based AI",
    ],

    caution:
      "Replacing AND with OR can completely change a decision rule. Logic must match the real requirement.",

    reflectionQuestion:
      "Why could confusing AND and OR create a serious error in an automated safety system?",
  },

  pythonLab: {
    title:
      "Test AND and OR Conditions",

    objective:
      "Use Python logical operators to evaluate compound constraints.",

    code: `temperatures = [5, 10, 20, 35, 40]

print("NORMAL OPERATING RANGE")
for T in temperatures:
    normal = T >= 10 and T <= 35
    print(T, normal)

print("\\nALERT CONDITION")
for T in temperatures:
    alert = T < 10 or T > 35
    print(T, alert)`,

    questions: [
      "Which temperatures satisfy the AND condition?",
      "Why do 10 and 35 return True for the normal range?",
      "Which temperatures trigger the OR alert?",
      "How does Python's 'and' correspond to mathematical intersection?",
      "How does Python's 'or' correspond to combining separate regions?",
    ],

    reflectionQuestions: [
      "What would happen if 'and' were accidentally replaced by 'or' in the normal-range rule?",
      "Why should mathematical logic be designed before writing code?",
    ],

    extension:
      "Create your own acceptable range and alert range. Predict the Boolean results before running the code.",
  },

  guidedPractice: [
    {
      question:
        "Write the compound inequality for values greater than 2 and less than or equal to 9.",
      answer:
        "2 < x ≤ 9.",
      difficulty: "Foundation",
    },

    {
      question:
        "Solve 5 ≤ x + 3 < 12.",
      answer:
        "Subtract 3 from all parts: 2 ≤ x < 9.",
      difficulty: "Foundation",
    },

    {
      question:
        "Solve -8 < 2x ≤ 12.",
      answer:
        "Divide by 2: -4 < x ≤ 6.",
      difficulty: "Foundation",
    },

    {
      question:
        "A machine operates only from 15°C through 30°C inclusive. Write the compound inequality.",
      answer:
        "15 ≤ T ≤ 30.",
      difficulty: "Modeling",
    },

    {
      question:
        "A warning activates below 5 units or above 90 units. Write the compound inequality.",
      answer:
        "x < 5 OR x > 90.",
      difficulty: "Modeling",
    },

    {
      question:
        "Determine whether x = 6 satisfies 3 < x ≤ 6.",
      answer:
        "Yes. 6 is greater than 3 and the upper boundary is inclusive.",
      difficulty: "Reasoning",
    },
  ],

  independentPractice: [
    {
      question:
        "Solve 1 < x - 2 < 8.",
      answer:
        "3 < x < 10.",
    },

    {
      question:
        "Solve -10 ≤ 2x ≤ 14.",
      answer:
        "-5 ≤ x ≤ 7.",
    },

    {
      question:
        "Solve -15 < -3x ≤ 9.",
      answer:
        "Divide by -3 and reverse both signs: 5 > x ≥ -3, or -3 ≤ x < 5.",
    },

    {
      question:
        "A scholarship program accepts applicants ages 16 through 21 inclusive. Write the compound inequality.",
      answer:
        "16 ≤ a ≤ 21.",
    },

    {
      question:
        "A sensor is considered unsafe below -10 or above 50. Write the OR inequality.",
      answer:
        "T < -10 OR T > 50.",
    },

    {
      question:
        "For -2 < x ≤ 4, determine whether -2, 0, 4, and 5 are solutions.",
      answer:
        "0 and 4 are solutions. -2 and 5 are not.",
    },

    {
      question:
        "Create a real-world AND situation represented by 20 ≤ x ≤ 80.",
      answer:
        "Answers will vary.",
    },

    {
      question:
        "Create a real-world OR situation represented by x < 10 OR x > 30.",
      answer:
        "Answers will vary.",
    },
  ],

  commonMistakes: [
    {
      mistake:
        "Using OR when both conditions must be satisfied.",
      correction:
        "If both requirements must hold simultaneously, use AND.",
    },

    {
      mistake:
        "Using AND when either condition can trigger the result.",
      correction:
        "If either condition is enough, use OR.",
    },

    {
      mistake:
        "Forgetting to perform an operation on all three parts of an AND inequality.",
      correction:
        "In a statement such as 2 < x + 3 ≤ 10, apply the operation to the left, middle, and right expressions.",
    },

    {
      mistake:
        "Reversing only one inequality sign when dividing a three-part inequality by a negative.",
      correction:
        "Negative multiplication or division reverses both inequality relationships.",
    },

    {
      mistake:
        "Ignoring boundary inclusion.",
      correction:
        "Check each boundary independently for <, >, ≤, or ≥.",
    },

    {
      mistake:
        "Treating a count variable as though every decimal value were realistic.",
      correction:
        "Use the context to determine whether only whole-number values are feasible.",
    },
  ],

  discussionQuestions: [
    "How is AND related to overlap?",
    "How is OR related to combining regions?",
    "Why does 10 ≤ T ≤ 35 communicate more efficiently than writing two separate inequalities?",
    "Why can an OR solution appear as two disconnected regions?",
    "What is the difference between 3 < x < 10 and 3 ≤ x ≤ 10?",
    "How do compound inequalities appear in safety rules?",
    "Why should computers distinguish carefully between AND and OR?",
    "Can you think of a real rule involving three or more constraints?",
  ],

  formativeAssessment: {
    passingScore: 7,

    questions: [
      {
        type: "translation",
        prompt:
          "Write 'x is greater than 4 and less than 12' as a compound inequality.",
        answer:
          "4 < x < 12.",
      },

      {
        type: "translation",
        prompt:
          "Write 'x is at least 3 and at most 9' as a compound inequality.",
        answer:
          "3 ≤ x ≤ 9.",
      },

      {
        type: "solving",
        prompt:
          "Solve 2 < x + 5 ≤ 11.",
        answer:
          "-3 < x ≤ 6.",
      },

      {
        type: "solving",
        prompt:
          "Solve -12 ≤ 3x < 15.",
        answer:
          "-4 ≤ x < 5.",
      },

      {
        type: "negative-division",
        prompt:
          "Solve -8 < -2x ≤ 6.",
        answer:
          "4 > x ≥ -3, or -3 ≤ x < 4.",
      },

      {
        type: "logic",
        prompt:
          "A warning occurs when pressure is below 20 OR above 80. Write the inequality.",
        answer:
          "p < 20 OR p > 80.",
      },

      {
        type: "verification",
        prompt:
          "Does x = 5 satisfy 2 ≤ x < 5?",
        answer:
          "No. The upper boundary uses <, so 5 is excluded.",
      },

      {
        type: "modeling",
        prompt:
          "A program accepts ages from 12 through 18 inclusive. Write and interpret the inequality.",
        answer:
          "12 ≤ a ≤ 18. Ages 12 through 18 qualify.",
      },

      {
        type: "creation",
        prompt:
          "Create one AND situation and one OR situation from real life.",
        sampleAnswer:
          "Answers will vary.",
      },
    ],
  },

  researchExtension: {
    title:
      "Investigate a Real Acceptable Range",

    description:
      "Find a real system that uses both a lower and upper numerical limit.",

    researchQuestion:
      "How do organizations define acceptable, warning, and unacceptable numerical regions?",

    applicationOptions: [
      "Temperature control",
      "Engineering tolerance",
      "Age eligibility",
      "Manufacturing",
      "Sports",
      "Health and safety",
      "Environmental monitoring",
      "Computer systems",
    ],

    task:
      "Identify a real acceptable range. Define a variable, write the compound inequality, graph it, identify whether the conditions use AND or OR, test values, and explain what happens outside the range.",

    requiredEvidence: [
      "Real-world context",
      "Lower boundary",
      "Upper boundary",
      "Boundary inclusion",
      "AND or OR reasoning",
      "Compound inequality",
      "Visual representation",
      "Test values",
      "Written interpretation",
    ],
  },

  portfolioArtifact: {
    title:
      "Multiple-Constraint System Designer",

    description:
      "Design a real-world system containing both an acceptable AND range and an OR alert condition.",

    requiredSections: [
      "Real-world system",
      "Variable definition",
      "Minimum boundary",
      "Maximum boundary",
      "Acceptable AND condition",
      "Alert OR condition",
      "Number-line visuals",
      "Boundary explanations",
      "Test values",
      "Decision interpretation",
    ],

    requiredEvidence: [
      "Correct compound inequalities",
      "At least two visual models",
      "AND reasoning",
      "OR reasoning",
      "Original context",
      "Verified examples",
    ],
  },

  growthIndicators: [
    "Recognizes multiple constraints.",
    "Distinguishes AND from OR.",
    "Constructs bounded intervals.",
    "Solves three-part inequalities.",
    "Reverses both signs correctly when dividing by a negative.",
    "Graphs inclusive and strict boundaries.",
    "Interprets separated OR regions.",
    "Tests values against multiple conditions.",
    "Applies contextual restrictions.",
    "Creates original compound-inequality situations.",
  ],

  lumineryGuidance: {
    message:
      "Before solving a compound inequality, decide whether the conditions must work together or whether either condition is enough.",

    recommendation:
      "Boundaries → inclusion → AND/OR → solve → visualize → test → interpret.",

    prompt:
      "Does a valid value need to satisfy both conditions, or is satisfying either condition enough?",

    coachingQuestions: [
      "What are the two boundaries?",
      "Is each boundary included?",
      "Must both conditions be true?",
      "Is either condition enough?",
      "Where do the solution regions overlap?",
      "Are the solution regions separated?",
      "What value should definitely satisfy the compound inequality?",
      "What value should definitely fail?",
      "Does your graph match your symbolic answer?",
      "What does the solution mean in the real situation?",
    ],
  },

  summary: [
    "Compound inequalities combine multiple conditions.",
    "AND requires both conditions to be true.",
    "OR requires at least one condition to be true.",
    "AND often produces a bounded interval or overlap.",
    "OR can produce separated solution regions.",
    "Each boundary must be checked for inclusion independently.",
    "Three-part inequalities require operations on all three parts.",
    "Negative division reverses both inequality directions.",
    "Graphs make multiple constraints easier to interpret.",
    "Real-world context determines whether values must be continuous or discrete.",
  ],

  reflection: [
    "How would you explain AND and OR without using mathematical vocabulary?",
    "Why does AND usually create a region between boundaries?",
    "Why can OR create two separate regions?",
    "Which is easier for you to understand: symbols, words, or graphs?",
    "How can testing values help distinguish AND from OR?",
    "Create a real-world acceptable range.",
    "Create a real-world alert condition outside that range.",
    "Where might multiple constraints appear in an AI or automated system?",
  ],

  previousLesson: {
    moduleNumber: 3,
    lessonNumber: 5,
    slug: "graphing-and-interpreting-inequality-solutions",
    title:
      "Graphing and Interpreting Inequality Solutions",
  },

  nextLesson: {
    moduleNumber: 3,
    lessonNumber: 7,
    slug: "absolute-value-inequalities",
    title:
      "Absolute-Value Inequalities as Distance and Tolerance",
  },
};

export default lesson06;