const lesson05 = {
  id: "algebra-one-module-03-lesson-05",
  slug: "graphing-and-interpreting-inequality-solutions",

  courseId: "algebra-1",
  courseTitle: "Algebra I",

  moduleNumber: 3,
  moduleTitle: "Linear Inequalities",
  lessonNumber: 5,

  title:
    "Graphing and Interpreting Inequality Solutions",

  subtitle:
    "Connect inequality symbols, boundary points, number-line shading, test values, and real-world meaning so that a graph becomes a mathematical story rather than just a picture.",

  duration: "70–85 minutes",
  level: "Foundation",
  status: "Available",

  essentialQuestion:
    "How can a number-line graph communicate an entire set of inequality solutions?",

  bigIdea:
    "An inequality graph communicates three important ideas at once: the boundary, whether the boundary is included, and the direction of all acceptable values. Strong students can move fluently among words, symbols, graphs, test values, and real-world interpretations.",

  whyThisLessonExists: {
    title:
      "A Graph Should Communicate Meaning",

    introduction:
      "Students sometimes learn to draw an open or closed circle and shade one direction without understanding what those choices mean. But a number-line graph is a visual model of an entire solution set. Every feature of the graph communicates mathematical information.",

    centralProblem:
      "How can we look at a number-line graph and determine exactly which values are solutions and what those values mean in context?",

    purpose:
      "This lesson develops visual reasoning. Students learn to translate inequalities into graphs, graphs back into inequalities, and both representations into real-world explanations.",
  },

  problemFirst: {
    title:
      "Who Can Ride the Adventure Attraction?",

    scenario:
      "An adventure attraction requires riders to be at least 48 inches tall. A student says the graph should have an open circle at 48 because riders must be taller than 48 inches. Another student says 48 should be included. The attraction closes at 8:00 p.m., tickets cost $12, and the entrance sign is red. Which graph correctly represents the height requirement?",

    questions: [
      "Which information affects the height requirement?",
      "Which information is irrelevant?",
      "What quantity should the variable represent?",
      "What does 'at least 48 inches' mean?",
      "Can a rider exactly 48 inches tall participate?",
      "Should the point at 48 be open or closed?",
      "Should the graph extend left or right?",
      "Write the inequality.",
      "Name three values that satisfy the requirement.",
      "Name one value that does not satisfy the requirement.",
      "How would the graph change if the rule said 'taller than 48 inches'?",
    ],

    expectedInsight:
      "Let h represent height in inches. 'At least 48' means h ≥ 48. The boundary 48 is included, so the graph uses a closed point at 48 and extends to the right.",
  },

  visualModels: [
    {
      id: "strict-less-than",
      type: "numberLine",

      title:
        "Less Than: x < 4",

      description:
        "The solution contains all values smaller than 4, but not 4 itself.",

      min: -2,
      max: 10,
      boundary: 4,
      operator: "<",

      leftLabel: "smaller values",
      rightLabel: "larger values",

      interpretation:
        "The open point means 4 is excluded. Shading left means every value less than 4 is included.",
    },

    {
      id: "inclusive-less-than",
      type: "numberLine",

      title:
        "Less Than or Equal To: x ≤ 4",

      description:
        "This solution includes 4 and every value smaller than 4.",

      min: -2,
      max: 10,
      boundary: 4,
      operator: "<=",

      leftLabel: "smaller values",
      rightLabel: "larger values",

      interpretation:
        "The filled point means 4 is included. The shading continues left because smaller values satisfy the inequality.",
    },

    {
      id: "strict-greater-than",
      type: "numberLine",

      title:
        "Greater Than: x > 4",

      description:
        "The solution contains every value larger than 4, but not 4 itself.",

      min: -2,
      max: 10,
      boundary: 4,
      operator: ">",

      leftLabel: "smaller values",
      rightLabel: "larger values",

      interpretation:
        "The open point excludes 4. Shading to the right represents all values greater than 4.",
    },

    {
      id: "inclusive-greater-than",
      type: "numberLine",

      title:
        "Greater Than or Equal To: x ≥ 4",

      description:
        "This solution includes the boundary 4 and every value greater than it.",

      min: -2,
      max: 10,
      boundary: 4,
      operator: ">=",

      leftLabel: "smaller values",
      rightLabel: "larger values",

      interpretation:
        "The filled point includes 4, and the rightward shading represents every value greater than 4.",
    },

    {
      id: "open-vs-closed",
      type: "comparison",

      title:
        "Open Circle or Closed Circle?",

      description:
        "The boundary symbol tells us whether the exact boundary value belongs to the solution set.",

      items: [
        {
          label: "Boundary Excluded",
          symbol: "< or >",
          meaning:
            "Use an open circle because equality is not allowed.",
        },

        {
          label: "Boundary Included",
          symbol: "≤ or ≥",
          meaning:
            "Use a closed circle because equality is allowed.",
        },
      ],
    },

    {
      id: "between-boundaries-review",
      type: "compoundNumberLine",

      title:
        "Between Two Boundaries: 3 < x < 10",

      description:
        "A compound inequality can restrict values to an interval between two boundaries.",

      min: 0,
      max: 12,

      lowerBoundary: 3,
      upperBoundary: 10,

      lowerInclusive: false,
      upperInclusive: false,

      variable: "x",

      interpretation:
        "Both circles are open because neither boundary is included. Only values greater than 3 and less than 10 are solutions.",
    },

    {
      id: "inclusive-interval",
      type: "compoundNumberLine",

      title:
        "Inclusive Interval: 2 ≤ x ≤ 8",

      description:
        "Both boundaries are included in this solution interval.",

      min: 0,
      max: 10,

      lowerBoundary: 2,
      upperBoundary: 8,

      lowerInclusive: true,
      upperInclusive: true,

      variable: "x",

      interpretation:
        "Values from 2 through 8 are solutions, including both 2 and 8.",
    },
  ],

  learningObjectives: [
    "Identify the boundary value of an inequality.",
    "Determine whether a boundary should be open or closed.",
    "Determine whether a solution graph should extend left or right.",
    "Graph inequalities using <, ≤, >, and ≥.",
    "Write inequalities from number-line graphs.",
    "Interpret number-line graphs using words.",
    "Use test values to confirm graph direction.",
    "Distinguish strict and inclusive inequalities visually.",
    "Interpret compound inequality graphs.",
    "Connect graphs to real-world constraints.",
    "Identify and correct incorrect inequality graphs.",
    "Create original visual inequality models.",
  ],

  prerequisiteKnowledge: [
    "Inequality symbols",
    "Number lines",
    "Positive and negative numbers",
    "Boundary values",
    "One-step inequalities",
    "Multi-step inequalities",
    "Sign reversal",
    "Substitution",
  ],

  vocabulary: [
    {
      term: "Boundary",
      definition:
        "The value separating solutions from non-solutions on a number line.",
    },

    {
      term: "Open Circle",
      definition:
        "A visual symbol showing that the boundary value is not included.",
    },

    {
      term: "Closed Circle",
      definition:
        "A visual symbol showing that the boundary value is included.",
    },

    {
      term: "Solution Region",
      definition:
        "The shaded portion of a number line representing all values satisfying an inequality.",
    },

    {
      term: "Interval",
      definition:
        "A continuous set of values between or beyond one or more boundaries.",
    },

    {
      term: "Test Value",
      definition:
        "A selected value substituted into an inequality to determine whether it belongs to the solution set.",
    },
  ],

  formulas: [
    {
      name: "Strict Less Than",
      formula: "x < a",
      meaning:
        "Open boundary at a; shade left.",
    },

    {
      name: "Inclusive Less Than",
      formula: "x ≤ a",
      meaning:
        "Closed boundary at a; shade left.",
    },

    {
      name: "Strict Greater Than",
      formula: "x > a",
      meaning:
        "Open boundary at a; shade right.",
    },

    {
      name: "Inclusive Greater Than",
      formula: "x ≥ a",
      meaning:
        "Closed boundary at a; shade right.",
    },

    {
      name: "Visual Reasoning Sequence",
      formula:
        "Boundary → Inclusion → Direction → Test → Interpret",
      meaning:
        "A reliable graph can be built and checked using these five decisions.",
    },
  ],

  workedExamples: [
    {
      title:
        "Graph x < 6",

      problem:
        "Represent x < 6 on a number line and explain every visual choice.",

      solutionSteps: [
        "Identify the boundary: 6.",
        "The symbol < does not include equality.",
        "Use an open circle at 6.",
        "The phrase 'less than' means values smaller than 6.",
        "Smaller values lie to the left.",
        "Shade left from 6.",
        "Test x = 5: 5 < 6 is true.",
        "Test x = 7: 7 < 6 is false.",
      ],

      answer:
        "Open circle at 6; shade left.",

      interpretation:
        "Every number smaller than 6 is a solution, while 6 itself is excluded.",
    },

    {
      title:
        "Graph x ≥ -2",

      problem:
        "Represent x ≥ -2 on a number line.",

      solutionSteps: [
        "The boundary is -2.",
        "The symbol ≥ includes equality.",
        "Use a closed circle at -2.",
        "Greater values lie to the right.",
        "Shade right.",
        "Test x = -2: -2 ≥ -2 is true.",
        "Test x = 0: 0 ≥ -2 is true.",
        "Test x = -5: -5 ≥ -2 is false.",
      ],

      answer:
        "Closed circle at -2; shade right.",
    },

    {
      title:
        "Write an Inequality from a Graph",

      problem:
        "A graph has an open circle at 7 and shading to the right. Write the inequality.",

      solutionSteps: [
        "The boundary is 7.",
        "The open circle means equality is excluded.",
        "Shading right means values greater than 7.",
        "Use the symbol >.",
      ],

      answer:
        "x > 7",
    },

    {
      title:
        "Another Graph-to-Symbol Translation",

      problem:
        "A graph has a closed point at -4 and shading to the left. Write and interpret the inequality.",

      solutionSteps: [
        "The boundary is -4.",
        "A closed point means -4 is included.",
        "Shading left represents smaller values.",
        "Therefore x ≤ -4.",
      ],

      answer:
        "x ≤ -4",

      interpretation:
        "The solution includes -4 and every number less than -4.",
    },

    {
      title:
        "Real-World Height Requirement",

      problem:
        "A ride requires passengers to be at least 54 inches tall. Let h represent height in inches. Write and graph the inequality.",

      solutionSteps: [
        "'At least' means greater than or equal to.",
        "Write h ≥ 54.",
        "54 is included.",
        "Use a closed point at 54.",
        "Taller heights are greater values.",
        "Shade to the right.",
      ],

      answer:
        "h ≥ 54; closed point at 54 with shading right.",

      interpretation:
        "A rider exactly 54 inches tall qualifies.",
    },

    {
      title:
        "Temperature Safety Limit",

      problem:
        "A chemical must remain below 40°C. Let T represent temperature. Write and graph the constraint.",

      solutionSteps: [
        "'Below 40' means T < 40.",
        "The boundary 40 is excluded.",
        "Use an open circle at 40.",
        "Lower temperatures lie to the left.",
        "Shade left.",
      ],

      answer:
        "T < 40",

      interpretation:
        "40°C itself does not satisfy the requirement.",
    },

    {
      title:
        "Detect the Incorrect Graph",

      problem:
        "A student graphs x ≤ 5 using an open circle at 5 and shading left. What is wrong?",

      solutionSteps: [
        "The shading direction is correct because values less than 5 belong to the solution.",
        "However, ≤ includes equality.",
        "Therefore x = 5 must be included.",
        "Replace the open circle with a closed circle.",
      ],

      answer:
        "Use a closed circle at 5 and keep the shading to the left.",
    },

    {
      title:
        "Graph After Solving",

      problem:
        "Solve 3x + 6 < 18 and represent the solution graphically.",

      solutionSteps: [
        "Subtract 6: 3x < 12.",
        "Divide by 3: x < 4.",
        "The boundary is 4.",
        "Use an open circle because < excludes 4.",
        "Shade to the left.",
        "Test x = 3: 3(3) + 6 = 15 < 18, true.",
      ],

      answer:
        "x < 4; open circle at 4 with shading left.",
    },
  ],

  interactiveExploration: {
    title:
      "Read the Graph Before Reading the Symbol",

    description:
      "Practice interpreting visual information independently of algebraic notation.",

    instructions: [
      "Draw a number line with an open point at 3 and shading left.",
      "Describe the graph using words before writing any symbol.",
      "Write the corresponding inequality.",
      "Change the point at 3 from open to closed.",
      "Explain exactly what changed in the solution set.",
      "Move the shading from left to right.",
      "Write the new inequality.",
      "Create another graph using a negative boundary.",
      "Ask a partner to translate your graph into symbols and words.",
    ],

    questions: [
      "What information does the circle communicate?",
      "What information does the direction communicate?",
      "Can two graphs have the same boundary but different solution sets?",
      "How many things must change to transform x < 3 into x ≥ 3?",
      "Why is testing one shaded value and one unshaded value useful?",
    ],

    expectedDiscovery:
      "Boundary location, boundary inclusion, and shading direction are independent pieces of information. Together they completely describe a one-variable inequality solution set.",
  },

  realWorldApplications: [
    {
      field: "Transportation",
      application:
        "Speed limits, weight limits, and age requirements can be represented visually with number lines.",
    },

    {
      field: "Education",
      application:
        "Minimum scores, maximum absences, and eligibility requirements form inequality solution regions.",
    },

    {
      field: "Engineering",
      application:
        "Acceptable operating ranges can be represented as bounded or unbounded intervals.",
    },

    {
      field: "Finance",
      application:
        "Budgets and savings requirements create maximum and minimum boundaries.",
    },

    {
      field: "Health and Safety",
      application:
        "Safe temperatures, exposure limits, and operating thresholds often define acceptable ranges.",
    },

    {
      field: "Computer Science",
      application:
        "Conditional statements classify values according to numerical boundaries.",
    },
  ],

  aiConnection: {
    title:
      "Visualizing Decision Regions in AI",

    explanation:
      "Many AI systems classify inputs according to thresholds or regions. An inequality number line is a simple one-dimensional example of a decision region.",

    example:
      "Suppose an automated system sends an alert when riskScore ≥ 0.80. The acceptable and alert regions can be visualized as two regions separated by the boundary 0.80.",

    uses: [
      "Decision thresholds",
      "Classification",
      "Risk scoring",
      "Quality control",
      "Anomaly detection",
      "Optimization constraints",
    ],

    caution:
      "Whether the boundary is included can matter. A rule using riskScore > 0.80 behaves differently at exactly 0.80 than a rule using riskScore ≥ 0.80.",

    reflectionQuestion:
      "Why should designers carefully document whether threshold boundaries are included or excluded?",
  },

  pythonLab: {
    title:
      "Generate Solution Values",

    objective:
      "Use Python to classify values as solutions or non-solutions and compare the result with a number-line graph.",

    code: `values = [-2, 0, 2, 4, 5, 7, 10]

for x in values:
    satisfies = x <= 4

    if satisfies:
        region = "solution"
    else:
        region = "not a solution"

    print(x, region)`,

    questions: [
      "Which values belong to the solution set?",
      "Why does x = 4 belong to the set?",
      "What number-line graph represents the Python condition x <= 4?",
      "What would change if the code used x < 4?",
      "How does Python's True/False classification correspond to shaded and unshaded regions?",
    ],

    reflectionQuestions: [
      "Does the computer need to draw the graph in order to evaluate the inequality?",
      "Why can visualization still help humans understand the rule?",
    ],

    extension:
      "Change the comparison to x > 4, x >= 4, and x < 4. Predict each solution region before running the program.",
  },

  guidedPractice: [
    {
      question:
        "Graph x > 2. Identify the boundary type and shading direction.",
      answer:
        "Open circle at 2; shade right.",
      difficulty: "Foundation",
    },

    {
      question:
        "Graph x ≤ -3.",
      answer:
        "Closed circle at -3; shade left.",
      difficulty: "Foundation",
    },

    {
      question:
        "A graph has an open point at -1 and shading right. Write the inequality.",
      answer:
        "x > -1.",
      difficulty: "Visual reasoning",
    },

    {
      question:
        "A graph has a closed point at 8 and shading left. Write the inequality.",
      answer:
        "x ≤ 8.",
      difficulty: "Visual reasoning",
    },

    {
      question:
        "A school requires students to earn at least 70 points. Write and describe the graph.",
      answer:
        "p ≥ 70; closed point at 70 and shade right.",
      difficulty: "Modeling",
    },

    {
      question:
        "A package must weigh less than 50 pounds. Write and describe the graph.",
      answer:
        "w < 50; open point at 50 and shade left.",
      difficulty: "Modeling",
    },
  ],

  independentPractice: [
    {
      question:
        "Graph x < -5.",
      answer:
        "Open circle at -5; shade left.",
    },

    {
      question:
        "Graph x ≥ 6.",
      answer:
        "Closed circle at 6; shade right.",
    },

    {
      question:
        "Write the inequality represented by a closed point at 3 with shading right.",
      answer:
        "x ≥ 3.",
    },

    {
      question:
        "Write the inequality represented by an open point at 10 with shading left.",
      answer:
        "x < 10.",
    },

    {
      question:
        "Solve 2x + 4 ≤ 16, then describe its graph.",
      answer:
        "2x ≤ 12, so x ≤ 6. Closed point at 6; shade left.",
    },

    {
      question:
        "Solve -3x > 12, then describe its graph.",
      answer:
        "Divide by -3 and reverse: x < -4. Open point at -4; shade left.",
    },

    {
      question:
        "Create a real-world situation represented by x ≥ 25. Include a description of its graph.",
      answer:
        "Answers will vary.",
    },

    {
      question:
        "Create a graph first, then write a real-world situation that matches it.",
      answer:
        "Answers will vary.",
    },
  ],

  commonMistakes: [
    {
      mistake:
        "Using a closed circle for every boundary.",
      correction:
        "Use a closed circle only when equality is included: ≤ or ≥.",
    },

    {
      mistake:
        "Using an open circle for ≤ or ≥.",
      correction:
        "The equality bar means the boundary itself belongs to the solution set.",
    },

    {
      mistake:
        "Always shading toward the larger-looking side of the page.",
      correction:
        "Determine whether the solutions are less than or greater than the boundary.",
    },

    {
      mistake:
        "Thinking negative numbers reverse the visual direction automatically.",
      correction:
        "The symbol determines the direction. For example, x > -5 still shades right.",
    },

    {
      mistake:
        "Graphing the original inequality before completing the algebra.",
      correction:
        "First isolate the variable, then graph the final solution.",
    },

    {
      mistake:
        "Drawing the graph without interpreting it.",
      correction:
        "State which values are included and what they mean in the original context.",
    },
  ],

  discussionQuestions: [
    "What does an open circle communicate that shading alone cannot?",
    "What does shading communicate that the boundary point alone cannot?",
    "Why does x > -5 shade right even though -5 is negative?",
    "How can you check a graph without solving the entire problem again?",
    "What is the visual difference between x < 4 and x ≤ 4?",
    "What is the visual difference between x < 4 and x > 4?",
    "Why might a visual model communicate a solution more quickly than a sentence?",
    "Where might bounded intervals appear in real life?",
  ],

  formativeAssessment: {
    passingScore: 7,

    questions: [
      {
        type: "graphing",
        prompt:
          "Describe the graph of x < 7.",
        answer:
          "Open circle at 7; shade left.",
      },

      {
        type: "graphing",
        prompt:
          "Describe the graph of x ≥ -2.",
        answer:
          "Closed circle at -2; shade right.",
      },

      {
        type: "translation",
        prompt:
          "A graph has an open circle at 5 and shading right. Write the inequality.",
        answer:
          "x > 5.",
      },

      {
        type: "translation",
        prompt:
          "A graph has a closed circle at -4 and shading left. Write the inequality.",
        answer:
          "x ≤ -4.",
      },

      {
        type: "reasoning",
        prompt:
          "Why must x = 8 be included in the graph of x ≤ 8?",
        sampleAnswer:
          "Because the equality part of ≤ means 8 itself satisfies the inequality.",
      },

      {
        type: "verification",
        prompt:
          "For x > 3, test x = 3, x = 4, and x = 0.",
        answer:
          "3 does not satisfy it; 4 does; 0 does not.",
      },

      {
        type: "solving-and-graphing",
        prompt:
          "Solve 4x + 4 ≤ 20 and describe the graph.",
        answer:
          "4x ≤ 16, so x ≤ 4. Closed point at 4 and shade left.",
      },

      {
        type: "sign-reversal-review",
        prompt:
          "Solve -2x < 10 and describe the graph.",
        answer:
          "x > -5. Open point at -5 and shade right.",
      },

      {
        type: "creation",
        prompt:
          "Create an inequality whose graph has a closed boundary and shades right.",
        sampleAnswer:
          "Answers will vary. Example: x ≥ 6.",
      },
    ],
  },

  researchExtension: {
    title:
      "Visualize a Real Safety Range",

    description:
      "Investigate a real situation involving a numerical minimum, maximum, or acceptable range.",

    researchQuestion:
      "How can a number-line graph communicate acceptable and unacceptable values in a real system?",

    applicationOptions: [
      "Temperature",
      "Engineering tolerance",
      "Age requirement",
      "Weight restriction",
      "Test score",
      "Budget",
      "Speed limit",
      "Technology threshold",
    ],

    task:
      "Find a real numerical requirement. Define a variable, write the inequality, draw or describe the number-line graph, identify the boundary, test values, and explain the meaning of the solution region.",

    requiredEvidence: [
      "Real-world requirement",
      "Variable definition",
      "Correct inequality",
      "Boundary value",
      "Boundary inclusion reasoning",
      "Number-line graph",
      "Solution test",
      "Non-solution test",
      "Written interpretation",
    ],
  },

  portfolioArtifact: {
    title:
      "Inequality Visual Communication Gallery",

    description:
      "Create a visual teaching gallery showing how different inequality symbols produce different solution graphs.",

    requiredSections: [
      "Example of x < a",
      "Example of x ≤ a",
      "Example of x > a",
      "Example of x ≥ a",
      "One compound inequality",
      "Boundary explanation for each",
      "Shading-direction explanation",
      "Test value for each graph",
      "At least two real-world contexts",
    ],

    requiredEvidence: [
      "Correct number lines",
      "Correct symbols",
      "Written interpretations",
      "Original examples",
      "Visual comparison",
    ],
  },

  growthIndicators: [
    "Identifies boundaries accurately.",
    "Distinguishes open and closed boundaries.",
    "Chooses shading direction correctly.",
    "Translates symbols into graphs.",
    "Translates graphs into symbols.",
    "Uses test values to verify visual models.",
    "Handles negative boundaries correctly.",
    "Interprets compound intervals.",
    "Connects visual models to real-world meaning.",
    "Explains visual choices mathematically.",
  ],

  lumineryGuidance: {
    message:
      "Read a number-line graph as a mathematical sentence.",

    recommendation:
      "Boundary → Included or excluded? → Direction → Test → Interpret.",

    prompt:
      "What does each visual feature tell you about the values that are allowed?",

    coachingQuestions: [
      "Where is the boundary?",
      "Is the boundary included?",
      "How do you know?",
      "Which side contains the solutions?",
      "What inequality symbol matches the graph?",
      "Can you choose one shaded value and verify it?",
      "Can you choose one unshaded value and show why it fails?",
      "What does the graph mean in words?",
      "What could the graph mean in a real-world situation?",
    ],
  },

  summary: [
    "A number-line graph represents an entire inequality solution set.",
    "Open circles exclude boundary values.",
    "Closed circles include boundary values.",
    "Less-than inequalities shade left.",
    "Greater-than inequalities shade right.",
    "Negative boundary values follow the same visual rules as positive boundaries.",
    "Graphs can be translated into symbols and symbols into graphs.",
    "Test values help verify shading direction.",
    "Compound inequalities can represent values between two boundaries.",
    "Visual interpretation should connect back to real-world meaning.",
  ],

  reflection: [
    "What information does the boundary point communicate?",
    "What information does the shading communicate?",
    "Which is easier for you to understand: an inequality symbol or its graph? Why?",
    "How do open and closed circles help prevent misunderstanding?",
    "Why does x > -3 still shade to the right?",
    "How can test values help you verify a graph?",
    "Create one inequality graph that might appear in a real-world safety rule.",
    "How would you explain inequality graphs to a visual learner?",
  ],

  previousLesson: {
    moduleNumber: 3,
    lessonNumber: 4,
    slug: "reversing-the-inequality-sign",
    title:
      "Why the Inequality Sign Reverses",
  },

  nextLesson: {
    moduleNumber: 3,
    lessonNumber: 6,
    slug: "compound-inequalities-and-multiple-constraints",
    title:
      "Compound Inequalities and Multiple Constraints",
  },
};

export default lesson05;