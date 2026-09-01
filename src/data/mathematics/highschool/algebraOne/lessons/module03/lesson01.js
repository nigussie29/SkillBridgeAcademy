const lesson01 = {
  id: "algebra-one-module-03-lesson-01",
  slug: "understanding-inequalities-as-real-world-constraints",

  courseId: "algebra-1",
  courseTitle: "Algebra I",

  moduleNumber: 3,
  moduleTitle: "Linear Inequalities",
  lessonNumber: 1,

  title:
    "Understanding Inequalities as Real-World Constraints",

  subtitle:
    "Translate real-world limits, requirements, ranges, and comparisons into inequalities and interpret their solution sets visually and contextually.",

  duration: "65–80 minutes",
  level: "Foundation",
  status: "Available",

  essentialQuestion:
    "How do inequalities help us describe situations where many values may be possible rather than only one exact value?",

  bigIdea:
    "An equation often describes exact equality, while an inequality describes a range of acceptable possibilities. Words such as at most, at least, more than, less than, maximum, and minimum communicate boundaries that can be represented mathematically.",

  whyThisLessonExists: {
    title:
      "Real Life Is Often About Limits, Not Exact Answers",

    introduction:
      "Many real-world decisions do not involve one exact value. A family may have a maximum budget. A student may need at least a certain score. A vehicle may not exceed a speed limit. A package may need to weigh less than a shipping limit. Inequalities allow mathematics to represent all values that satisfy these kinds of constraints.",

    centralProblem:
      "How can we determine which inequality symbol correctly represents a real-world limit or requirement?",

    purpose:
      "Understanding inequalities prepares students to model budgets, eligibility requirements, capacity limits, engineering tolerances, schedules, resource constraints, optimization problems, and decision rules.",
  },

  problemFirst: {
    title:
      "The Robotics Team Budget",

    scenario:
      "A robotics team has a maximum equipment budget of $780. The team has already spent $180 on a controller, and each sensor package costs $50. The competition will be held on Saturday, 16 students are on the team, and the storage boxes are blue. How many sensor packages can the team purchase without exceeding the budget?",

    questions: [
      "What is the mathematical question?",
      "Which information is relevant?",
      "Which information is irrelevant?",
      "What quantity is unknown?",
      "Define a variable for the number of sensor packages.",
      "What does the phrase 'maximum budget' tell us?",
      "Should the team be allowed to spend exactly $780?",
      "Which inequality symbol represents 'does not exceed'?",
      "Write a mathematical model for the situation.",
      "Would buying 10 packages satisfy the constraint?",
      "Would buying 12 packages satisfy the constraint?",
      "Would buying 13 packages satisfy the constraint?",
      "What does the solution mean in the original situation?",
    ],

    expectedInsight:
      "Let s represent the number of sensor packages. The budget constraint is 180 + 50s ≤ 780. The symbol ≤ is appropriate because spending exactly $780 is allowed. Solving later gives s ≤ 12, meaning the team can purchase at most 12 sensor packages.",
  },

  visualModels: [
    {
      id: "inequality-symbol-comparison",
      type: "comparison",

      title:
        "Four Ways to Describe a Boundary",

      description:
        "The inequality symbol depends on whether values are above or below a boundary and whether the boundary itself is included.",

      items: [
        {
          label: "Less Than",
          symbol: "<",
          meaning:
            "Values below the boundary. The boundary itself is not included.",
        },

        {
          label: "Less Than or Equal To",
          symbol: "≤",
          meaning:
            "Values below the boundary, including the boundary itself. Common language: at most, no more than, maximum.",
        },

        {
          label: "Greater Than",
          symbol: ">",
          meaning:
            "Values above the boundary. The boundary itself is not included.",
        },

        {
          label: "Greater Than or Equal To",
          symbol: "≥",
          meaning:
            "Values above the boundary, including the boundary itself. Common language: at least, minimum, no less than.",
        },
      ],
    },

    {
      id: "budget-number-line",
      type: "numberLine",

      title:
        "Visualizing 'At Most 12'",

      description:
        "If the robotics team can purchase at most 12 sensor packages, every whole-number value from 0 through 12 is acceptable.",

      min: 0,
      max: 16,
      boundary: 12,
      operator: "<=",

      leftLabel: "fewer packages",
      rightLabel: "more packages",

      interpretation:
        "The filled boundary point means 12 is included. Values to the left are acceptable because the team may purchase fewer than 12 packages.",
    },

    {
      id: "minimum-number-line",
      type: "numberLine",

      title:
        "Visualizing 'At Least 5'",

      description:
        "Suppose a student must complete at least 5 practice problems. Five is allowed, and every greater value also satisfies the requirement.",

      min: 0,
      max: 10,
      boundary: 5,
      operator: ">=",

      leftLabel: "fewer problems",
      rightLabel: "more problems",

      interpretation:
        "The filled point at 5 shows that 5 is included. The solution continues to the right because values larger than 5 also satisfy the requirement.",
    },
    {
  id: "between-two-boundaries",
  type: "compoundNumberLine",

  title:
    "Between Two Boundaries: 3 < x < 10",

  description:
    "This compound inequality means x must be greater than 3 and less than 10 at the same time.",

  min: 0,
  max: 12,

  lowerBoundary: 3,
  upperBoundary: 10,

  lowerInclusive: false,
  upperInclusive: false,

  variable: "x",

  interpretation:
    "The solution is every value between 3 and 10. The open circles show that 3 and 10 themselves are not included. Values such as 4, 5.5, and 9.9 satisfy the inequality, while 3, 10, 2, and 11 do not.",
},
  ],

  learningObjectives: [
    "Explain the difference between an equation and an inequality.",
    "Interpret <, >, ≤, and ≥ in words.",
    "Recognize inequalities as representations of ranges or constraints.",
    "Translate phrases such as at most, at least, more than, and less than into mathematical symbols.",
    "Distinguish strict inequalities from inclusive inequalities.",
    "Identify relevant and irrelevant information in multi-sentence situations.",
    "Define variables with appropriate units.",
    "Construct inequalities from real-world constraints.",
    "Use test values to determine whether a constraint is satisfied.",
    "Interpret inequality solutions visually using number lines.",
    "Create original real-world inequality situations.",
  ],

  prerequisiteKnowledge: [
    "Variables",
    "Expressions",
    "Equations",
    "Number lines",
    "Comparison of numbers",
    "Word-to-math translation",
    "Substitution",
    "Real-world modeling",
  ],

  vocabulary: [
    {
      term: "Inequality",
      definition:
        "A mathematical statement comparing quantities that may not be equal.",
      example:
        "x ≤ 12",
    },

    {
      term: "Constraint",
      definition:
        "A restriction or requirement limiting which values are acceptable.",
      example:
        "A budget cannot exceed $780.",
    },

    {
      term: "Solution Set",
      definition:
        "All values that make an inequality true.",
      example:
        "For x ≤ 12, values such as 0, 5, 10, and 12 belong to the solution set.",
    },

    {
      term: "Boundary",
      definition:
        "The value separating solutions from non-solutions.",
      example:
        "12 is the boundary in x ≤ 12.",
    },

    {
      term: "Strict Inequality",
      definition:
        "An inequality using < or >, where the boundary is not included.",
      example:
        "x < 10",
    },

    {
      term: "Inclusive Inequality",
      definition:
        "An inequality using ≤ or ≥, where the boundary is included.",
      example:
        "x ≥ 5",
    },

    {
      term: "Maximum",
      definition:
        "The greatest allowed value.",
      example:
        "A maximum of 30 students means s ≤ 30.",
    },

    {
      term: "Minimum",
      definition:
        "The least allowed value.",
      example:
        "A minimum age of 16 means a ≥ 16.",
    },
  ],

  formulas: [
    {
      name: "Less Than",
      formula: "x < a",
      meaning:
        "x can be any value below a, but a itself is excluded.",
    },

    {
      name: "Less Than or Equal To",
      formula: "x ≤ a",
      meaning:
        "x can be any value below a, including a.",
    },

    {
      name: "Greater Than",
      formula: "x > a",
      meaning:
        "x can be any value above a, but a itself is excluded.",
    },

    {
      name: "Greater Than or Equal To",
      formula: "x ≥ a",
      meaning:
        "x can be any value above a, including a.",
    },
  ],

  workedExamples: [
    {
      title:
        "School Bus Capacity",

      problem:
        "A school bus can carry no more than 48 passengers. There are 3 adult supervisors on the trip, the bus is yellow, and the trip begins at 8:00 a.m. Let s represent the number of students who may ride the bus. Construct an inequality representing the capacity.",

      solutionSteps: [
        "Identify the mathematical constraint: total passengers cannot exceed 48.",
        "Bus color and departure time are irrelevant.",
        "There are 3 supervisors plus s students.",
        "Total passengers are represented by s + 3.",
        "The phrase 'no more than 48' means ≤ 48.",
        "Construct the inequality: s + 3 ≤ 48.",
        "The equality case is allowed because exactly 48 passengers fits the capacity.",
      ],

      answer:
        "s + 3 ≤ 48",
    },

    {
      title:
        "Minimum Exam Score",

      problem:
        "A certification program requires a score of at least 70 points to pass. The examination contains 40 questions and is administered on Friday. Let p represent a student's score. Write the inequality describing passing scores.",

      solutionSteps: [
        "The number of questions and test day do not determine the passing inequality.",
        "The boundary is 70 points.",
        "The phrase 'at least 70' means 70 is included.",
        "Values greater than 70 also pass.",
        "Therefore p ≥ 70.",
      ],

      answer:
        "p ≥ 70",
    },

    {
      title:
        "Shipping Weight Limit",

      problem:
        "A shipping service accepts standard packages weighing less than 50 pounds. A customer uses a brown box and prints the label at home. Let w represent package weight. Construct the correct inequality.",

      solutionSteps: [
        "Color and label-printing method are irrelevant.",
        "The boundary is 50 pounds.",
        "The language says 'less than,' not 'at most.'",
        "Therefore 50 pounds itself is excluded.",
        "Write w < 50.",
      ],

      answer:
        "w < 50",
    },

    {
      title:
        "Driving Age Requirement",

      problem:
        "A program allows participants older than 16 years to enroll in an advanced driving activity. The program uses six vehicles and begins in June. Let a represent age. Construct and interpret the inequality.",

      solutionSteps: [
        "Vehicle count and month are irrelevant.",
        "The phrase 'older than 16' means strictly greater than 16.",
        "Age 16 itself does not satisfy the wording.",
        "The model is a > 16.",
      ],

      answer:
        "a > 16",
    },

    {
      title:
        "Testing a Value Against a Constraint",

      problem:
        "A theater allows at most 120 people in a room. Determine whether attendance values of 118, 120, and 124 satisfy the constraint.",

      solutionSteps: [
        "Represent the constraint as p ≤ 120.",
        "118 ≤ 120 is true.",
        "120 ≤ 120 is true.",
        "124 ≤ 120 is false.",
        "Therefore 118 and 120 are allowed, but 124 exceeds capacity.",
      ],

      answer:
        "118 and 120 satisfy the constraint; 124 does not.",
    },

    {
      title:
        "Critique the Symbol",

      problem:
        "A student reads 'You must earn at least 80 points' and writes p > 80. Explain the mistake.",

      solutionSteps: [
        "'At least 80' includes exactly 80.",
        "The symbol > excludes 80.",
        "The correct symbol must include equality.",
        "Therefore the correct inequality is p ≥ 80.",
      ],

      answer:
        "The correct model is p ≥ 80.",
    },
  ],

  interactiveExploration: {
    title:
      "Boundary Included or Excluded?",

    description:
      "Investigate how small changes in language change the mathematical model.",

    instructions: [
      "Write x < 10 and x ≤ 10.",
      "List three values that satisfy both inequalities.",
      "Identify one value that satisfies only x ≤ 10.",
      "Compare x > 5 and x ≥ 5.",
      "Identify the boundary in each inequality.",
      "Decide whether the boundary is included or excluded.",
      "Create number-line sketches for all four inequalities.",
      "Write a real-world sentence corresponding to each graph.",
    ],

    questions: [
      "What changes mathematically when the words 'or equal to' are added?",
      "Why does the boundary matter?",
      "How can a single word such as 'at least' change a decision?",
      "What visual feature distinguishes an included boundary from an excluded boundary?",
    ],

    expectedDiscovery:
      "Strict inequalities exclude the boundary, while inclusive inequalities include it. Real-world language determines which form is appropriate.",
  },

  realWorldApplications: [
    {
      field: "Finance",
      application:
        "Budgets frequently impose maximum spending constraints.",
    },

    {
      field: "Education",
      application:
        "Minimum grades, attendance requirements, and eligibility rules are naturally represented by inequalities.",
    },

    {
      field: "Engineering",
      application:
        "Design systems must remain within limits involving weight, temperature, pressure, or dimensions.",
    },

    {
      field: "Transportation",
      application:
        "Speed limits, passenger capacity, and cargo restrictions are inequality constraints.",
    },

    {
      field: "Business",
      application:
        "Companies use minimum production requirements and maximum resource limits.",
    },

    {
      field: "Computer Science",
      application:
        "Programs use comparison operators to make decisions based on boundaries and conditions.",
    },
  ],

  aiConnection: {
    title:
      "Constraints and Decision Rules in AI",

    explanation:
      "Artificial intelligence and optimization systems frequently operate under constraints. A model may require cost to stay below a budget, accuracy to remain above a threshold, or resource use to remain within capacity.",

    example:
      "An automated system might accept a prediction only when confidence is at least a required threshold.",

    uses: [
      "Constraint satisfaction",
      "Optimization",
      "Classification thresholds",
      "Resource allocation",
      "Decision rules",
      "Safety limits",
    ],

    caution:
      "A mathematical threshold should reflect the real requirement accurately. Confusing 'greater than' with 'greater than or equal to' can change whether a boundary case is accepted.",

    reflectionQuestion:
      "Why might including or excluding one boundary value matter in an automated decision system?",
  },

  pythonLab: {
    title:
      "Test Constraints with Python",

    objective:
      "Use Python comparison operators to test whether values satisfy an inequality.",

    code: `budget = 780
already_spent = 180
package_cost = 50

for packages in [10, 12, 13]:
    total = already_spent + package_cost * packages
    allowed = total <= budget

    print(
        "Packages:", packages,
        "Total:", total,
        "Allowed:", allowed
    )`,

    questions: [
      "Why does Python use <= instead of the symbol ≤?",
      "Which package quantities return True?",
      "Why does 12 return True?",
      "Why does 13 return False?",
      "How is the Boolean value True connected to satisfying an inequality?",
    ],

    reflectionQuestions: [
      "How is a computer comparison similar to mathematical inequality reasoning?",
      "Why must the mathematical model be correct before we trust the program's result?",
    ],

    extension:
      "Change the budget and package cost, predict the maximum number of packages, and test your prediction with Python.",
  },

  guidedPractice: [
    {
      question:
        "A science laboratory can safely hold at most 32 students. There are already 2 teachers in the room. The walls are white and the class meets before lunch. Let s represent the number of students. Construct the capacity inequality.",
      answer:
        "Wall color and class time are irrelevant. s + 2 ≤ 32.",
      difficulty: "Foundation",
    },

    {
      question:
        "A scholarship requires students to earn at least 85 points on an evaluation. Let p represent the score. Write and interpret the inequality.",
      answer:
        "p ≥ 85. A score of 85 or any larger score satisfies the requirement.",
      difficulty: "Foundation",
    },

    {
      question:
        "A hiking trail is restricted to groups smaller than 20 people. Let g represent group size. Is g ≤ 20 correct? Explain.",
      answer:
        "No. 'Smaller than 20' excludes 20, so g < 20.",
      difficulty: "Reasoning",
    },

    {
      question:
        "A competition requires participants to be older than 13. A student claims that age 13 qualifies because 13 is the boundary. Critique the claim.",
      answer:
        "The requirement is a > 13, so exactly 13 does not qualify.",
      difficulty: "Reasoning",
    },
  ],

  independentPractice: [
    {
      question:
        "A family has a maximum entertainment budget of $240. They have already spent $60, and each event ticket costs $30. Write an inequality representing the number t of additional tickets they can purchase.",
      answer:
        "60 + 30t ≤ 240.",
    },

    {
      question:
        "A school requires at least 180 instructional days in a year. Let d represent instructional days. Write the inequality.",
      answer:
        "d ≥ 180.",
    },

    {
      question:
        "A machine must operate below 95 degrees Celsius to remain in its normal range. Let T represent temperature. Write the inequality.",
      answer:
        "T < 95.",
    },

    {
      question:
        "A college program accepts applicants whose score is greater than 500. Does a score of exactly 500 satisfy the requirement? Explain mathematically.",
      answer:
        "No. The model is s > 500, so the boundary is excluded.",
    },

    {
      question:
        "A concert venue can hold no more than 2,000 people. The staff includes 75 employees who count toward building occupancy. Let a represent attendees. Construct the inequality.",
      answer:
        "a + 75 ≤ 2000.",
    },

    {
      question:
        "Create a three-sentence real-world situation represented by x ≥ 25. Include one irrelevant detail and explain why the boundary is included.",
      answer:
        "Answers will vary.",
    },

    {
      question:
        "Create another situation represented by x < 25 and explain how its meaning differs from x ≤ 25.",
      answer:
        "Answers will vary.",
    },
  ],

  commonMistakes: [
    {
      mistake:
        "Assuming 'at least' means ≤.",
      correction:
        "'At least' means the value must be greater than or equal to the boundary.",
      example:
        "At least 10 → x ≥ 10.",
    },

    {
      mistake:
        "Assuming 'at most' means ≥.",
      correction:
        "'At most' means the value cannot exceed the boundary.",
      example:
        "At most 10 → x ≤ 10.",
    },

    {
      mistake:
        "Ignoring whether the boundary is included.",
      correction:
        "Look for words such as exactly allowed, minimum, maximum, at least, or at most.",
    },

    {
      mistake:
        "Using every number in a word problem.",
      correction:
        "Only quantities that affect the constraint belong in the mathematical model.",
    },

    {
      mistake:
        "Writing an equation when the situation describes a range.",
      correction:
        "Ask whether one exact value or many acceptable values are possible.",
    },
  ],

  discussionQuestions: [
    "Why do inequalities often describe real life better than equations?",
    "How is a maximum different from a minimum?",
    "Why does 'at most' include the boundary?",
    "Why does 'less than' exclude the boundary?",
    "How can a number line communicate information that an inequality symbol alone may not show immediately?",
    "Where do you encounter constraints in everyday life?",
    "Can two different situations be represented by the same inequality?",
    "How could using the wrong inequality symbol produce a bad decision?",
  ],

  formativeAssessment: {
    passingScore: 6,

    questions: [
      {
        type: "translation",
        prompt:
          "Translate 'at most 18' into an inequality using x.",
        answer:
          "x ≤ 18",
      },

      {
        type: "translation",
        prompt:
          "Translate 'at least 18' into an inequality using x.",
        answer:
          "x ≥ 18",
      },

      {
        type: "translation",
        prompt:
          "Translate 'fewer than 18' into an inequality.",
        answer:
          "x < 18",
      },

      {
        type: "translation",
        prompt:
          "Translate 'more than 18' into an inequality.",
        answer:
          "x > 18",
      },

      {
        type: "modeling",
        prompt:
          "A truck can carry no more than 5,000 pounds. It already carries 1,200 pounds, and each container weighs 400 pounds. Let c represent additional containers. Construct the inequality.",
        answer:
          "1200 + 400c ≤ 5000.",
      },

      {
        type: "reasoning",
        prompt:
          "Explain why exactly 18 satisfies x ≤ 18 but does not satisfy x < 18.",
        sampleAnswer:
          "The ≤ symbol includes equality, while < excludes the boundary.",
      },

      {
        type: "verification",
        prompt:
          "Determine whether x = 7 satisfies x ≥ 7 and x > 7.",
        answer:
          "7 satisfies x ≥ 7 but not x > 7.",
      },

      {
        type: "creation",
        prompt:
          "Create a real-world situation represented by x ≤ 50.",
        sampleAnswer:
          "Answers will vary.",
      },
    ],
  },

  researchExtension: {
    title:
      "Find Inequalities in the Real World",

    description:
      "Investigate a real policy, rule, specification, or limit that can be modeled with an inequality.",

    researchQuestion:
      "How do organizations use numerical limits to define acceptable and unacceptable conditions?",

    applicationOptions: [
      "Transportation",
      "School rules",
      "Sports",
      "Engineering",
      "Personal finance",
      "Health and safety",
      "Technology",
      "Environmental limits",
    ],

    task:
      "Find three examples of real-world numerical constraints. For each one, identify the boundary, determine whether it is included, define a variable, write an inequality, and explain the meaning.",

    requiredEvidence: [
      "Real-world context",
      "Boundary value",
      "Variable definition",
      "Inequality",
      "Boundary inclusion reasoning",
      "Written interpretation",
    ],
  },

  portfolioArtifact: {
    title:
      "Real-World Constraint Gallery",

    description:
      "Create a visual collection of four original inequality situations representing <, ≤, >, and ≥.",

    requiredSections: [
      "Four multi-sentence situations",
      "Variable definitions",
      "Relevant information",
      "Irrelevant information",
      "Correct inequality symbols",
      "Number-line representations",
      "Boundary explanations",
      "Context interpretations",
    ],

    requiredEvidence: [
      "One example of each inequality symbol",
      "Visual number lines",
      "Written reasoning",
      "Original student-created contexts",
    ],
  },

  growthIndicators: [
    "Recognizes situations involving limits and requirements.",
    "Distinguishes exact equality from ranges of possibilities.",
    "Identifies boundaries correctly.",
    "Determines whether boundaries are included.",
    "Translates real-world language into inequality symbols.",
    "Filters irrelevant information.",
    "Defines variables clearly.",
    "Uses visual representations to interpret solution sets.",
    "Checks whether specific values satisfy constraints.",
    "Creates original inequality situations.",
  ],

  lumineryGuidance: {
    message:
      "Before choosing an inequality symbol, decide what the boundary means in the real situation.",

    recommendation:
      "Use the sequence: Understand → Find the boundary → Decide direction → Decide inclusion → Define variable → Model → Test → Visualize → Interpret.",

    prompt:
      "Is the boundary value allowed, and should acceptable values lie above it or below it?",

    coachingQuestions: [
      "What is being limited or required?",
      "What is the boundary value?",
      "Are values below or above the boundary acceptable?",
      "Is the boundary itself allowed?",
      "Which words tell you that?",
      "What variable represents the changing quantity?",
      "Which information is irrelevant?",
      "Can you test one value that should work?",
      "Can you test one value that should fail?",
      "How would you represent the solution visually?",
    ],

    confidence: 94,
  },

  summary: [
    "Inequalities describe ranges of possible values.",
    "Constraints establish boundaries for acceptable values.",
    "The symbols < and > exclude the boundary.",
    "The symbols ≤ and ≥ include the boundary.",
    "'At most' usually translates to ≤.",
    "'At least' usually translates to ≥.",
    "'Less than' translates to <.",
    "'Greater than' translates to >.",
    "Real-world details must be filtered before constructing the model.",
    "Number lines help visualize solution sets.",
    "Test values can verify whether a proposed value satisfies a constraint.",
  ],

  reflection: [
    "What is the most important difference between an equation and an inequality?",
    "Why is boundary inclusion important?",
    "Which phrases for inequalities are easiest for you to confuse?",
    "How did the number-line visuals help your understanding?",
    "Where have you seen inequality constraints outside mathematics class?",
    "Create one original situation where exactly the boundary value should be included.",
    "Create another where the boundary should be excluded.",
  ],

  previousLesson: {
    moduleNumber: 2,
    lessonNumber: 8,
    slug: "module-2-equation-modeling-synthesis",
    title:
      "Module 2 Equation Modeling Synthesis",
  },

  nextLesson: {
    moduleNumber: 3,
    lessonNumber: 2,
    slug: "solving-one-step-inequalities",
    title:
      "Solving One-Step Inequalities",
  },
};

export default lesson01;