const lesson03 = {
  id: "algebra-one-module-03-lesson-03",
  slug: "solving-multi-step-inequalities",

  courseId: "algebra-1",
  courseTitle: "Algebra I",

  moduleNumber: 3,
  moduleTitle: "Linear Inequalities",
  lessonNumber: 3,

  title:
    "Solving Multi-Step Inequalities Through Real-World Modeling",

  subtitle:
    "Translate complex situations into inequalities, simplify expressions, solve multi-step constraints, visualize solution sets, verify results, and interpret decisions in context.",

  duration: "75–90 minutes",
  level: "Foundation",
  status: "Available",

  essentialQuestion:
    "How can we transform a complex real-world constraint into a mathematical inequality and use it to make a justified decision?",

  bigIdea:
    "A multi-step inequality is not just a longer calculation. It is a model of a constraint. Strong problem solving requires identifying relevant information, defining a variable, constructing the inequality, simplifying carefully, solving, visualizing, testing, and interpreting the result.",

  whyThisLessonExists: {
    title:
      "Real Problems Rarely Arrive as Ready-Made Inequalities",

    introduction:
      "Outside mathematics class, people are rarely handed an expression such as 3x + 12 ≤ 60 and told to solve it. Instead, they encounter budgets, limits, requirements, capacities, schedules, and competing conditions described in words. The difficult part is often deciding what mathematics to write before solving anything.",

    centralProblem:
      "How can we separate useful information from distracting details and construct a correct inequality from a multi-step situation?",

    purpose:
      "This lesson strengthens mathematical modeling. Students learn to move from words to quantities, from quantities to relationships, and from relationships to inequalities that support real decisions.",
  },

  problemFirst: {
    title:
      "Planning the Robotics Competition Trip",

    scenario:
      "A robotics club has no more than $1,260 available for a competition trip. The club must first pay $300 for registration and $180 for equipment transportation. Each student attending the trip costs $65 for meals and transportation. The competition is held in Raleigh, the team shirts are navy blue, and the bus leaves at 6:30 a.m. How many students can attend without exceeding the budget?",

    questions: [
      "What decision must the club make?",
      "Which quantities directly affect the budget?",
      "Which details are irrelevant to the mathematical model?",
      "What should the variable represent?",
      "What fixed costs must be paid before student costs are considered?",
      "What expression represents the total cost?",
      "Which phrase tells us the direction of the inequality?",
      "Should exactly $1,260 be allowed?",
      "Write the complete inequality.",
      "What should be simplified first?",
      "How can the variable be isolated?",
      "What whole-number values make sense in this context?",
      "How can we verify the greatest acceptable number of students?",
    ],

    expectedInsight:
      "Let s represent the number of students. The relevant fixed costs are $300 and $180, while each student costs $65. The model is 300 + 180 + 65s ≤ 1260. Combining fixed costs gives 480 + 65s ≤ 1260. Subtracting 480 gives 65s ≤ 780, and dividing by 65 gives s ≤ 12. Therefore at most 12 students can attend.",
  },

  visualModels: [
    {
      id: "multi-step-budget-solution",
      type: "numberLine",

      title:
        "Visualizing the Final Decision: s ≤ 12",

      description:
        "After solving the robotics trip inequality, the mathematical solution contains every value at or below 12. In context, the number of students must also be a nonnegative whole number.",

      min: 0,
      max: 16,
      boundary: 12,
      operator: "<=",

      leftLabel: "fewer students",
      rightLabel: "too many students",

      interpretation:
        "The filled point shows that 12 students are allowed. Values larger than 12 exceed the budget.",
    },

    {
      id: "strict-multi-step-solution",
      type: "numberLine",

      title:
        "A Strict Boundary: x < 7",

      description:
        "When the original constraint excludes the boundary, the final graph must also exclude it.",

      min: 0,
      max: 12,
      boundary: 7,
      operator: "<",

      leftLabel: "solutions",
      rightLabel: "non-solutions",

      interpretation:
        "The open point at 7 means 7 itself is not a solution. Every value less than 7 satisfies the inequality.",
    },

    {
      id: "modeling-process",
      type: "comparison",

      title:
        "From Situation to Decision",

      description:
        "Solving is only one part of inequality modeling. Students must first build the mathematics and later return to the real situation.",

      items: [
        {
          label: "Before Solving",
          symbol: "Words → Model",
          meaning:
            "Identify relevant quantities, define the variable, determine the boundary, and construct the inequality.",
        },

        {
          label: "After Solving",
          symbol: "Solution → Decision",
          meaning:
            "Graph the solution, test values, consider realistic restrictions, and explain what the result means.",
        },
      ],
    },
  ],

  learningObjectives: [
    "Identify relevant and irrelevant information in multi-sentence inequality problems.",
    "Define variables with appropriate units.",
    "Construct multi-step inequalities from real-world constraints.",
    "Simplify numerical expressions before isolating the variable.",
    "Use the distributive property when solving inequalities.",
    "Combine like terms correctly.",
    "Use inverse operations to isolate the variable.",
    "Represent final solution sets on number lines.",
    "Test boundary and nearby values.",
    "Apply contextual restrictions such as whole-number solutions.",
    "Interpret mathematical solutions as real-world decisions.",
    "Explain and justify each stage of an inequality model.",
  ],

  prerequisiteKnowledge: [
    "Inequality symbols",
    "One-step inequalities",
    "Inverse operations",
    "Distributive property",
    "Combining like terms",
    "Variables and expressions",
    "Number-line graphs",
    "Word-to-math translation",
  ],

  vocabulary: [
    {
      term: "Multi-Step Inequality",
      definition:
        "An inequality requiring more than one algebraic transformation to isolate the variable.",
    },

    {
      term: "Fixed Cost",
      definition:
        "A cost that remains the same regardless of the value of the variable.",
    },

    {
      term: "Variable Cost",
      definition:
        "A cost that changes according to the quantity represented by the variable.",
    },

    {
      term: "Constraint",
      definition:
        "A requirement or limitation that determines which values are acceptable.",
    },

    {
      term: "Feasible Solution",
      definition:
        "A solution that satisfies both the mathematical inequality and the restrictions of the real situation.",
    },

    {
      term: "Verification",
      definition:
        "Checking a proposed value in the original model to determine whether it satisfies the constraint.",
    },
  ],

  formulas: [
    {
      name: "Typical Budget Model",
      formula: "fixed cost + variable cost ≤ maximum budget",
      meaning:
        "Many real-world inequality problems combine a fixed amount with a changing amount.",
    },

    {
      name: "Distributive Property",
      formula: "a(b + c) = ab + ac",
      meaning:
        "Distribution may be necessary before like terms can be combined and the variable isolated.",
    },

    {
      name: "Modeling Sequence",
      formula:
        "Understand → Filter → Define → Relate → Model → Simplify → Solve → Visualize → Verify → Interpret",
      meaning:
        "A complete solution includes both mathematical operations and reasoning about the real situation.",
    },
  ],

  workedExamples: [
    {
      title:
        "Technology Club Equipment Budget",

      problem:
        "A technology club has at most $950 to spend. It pays a fixed $230 software fee and then buys sensor kits for $45 each. The club meets on Wednesdays and has 24 members. Let k represent the number of sensor kits. How many kits can be purchased?",

      solutionSteps: [
        "Identify relevant quantities: $950 budget, $230 fixed fee, and $45 per kit.",
        "Meeting day and total club membership are not needed unless every member must receive a kit.",
        "Define k = number of sensor kits.",
        "Construct the model: 230 + 45k ≤ 950.",
        "Subtract 230 from both sides: 45k ≤ 720.",
        "Divide both sides by 45: k ≤ 16.",
        "Check the boundary: 230 + 45(16) = 950.",
        "The boundary satisfies the budget exactly.",
      ],

      answer:
        "k ≤ 16",

      interpretation:
        "The club can purchase at most 16 sensor kits.",
    },

    {
      title:
        "A Constraint Requiring Distribution",

      problem:
        "A recreation center charges $12 for each participant plus a $4 equipment fee per participant. A group has less than $160 available for these costs. Let p represent the number of participants. Construct and solve the inequality.",

      solutionSteps: [
        "Each participant creates two costs: $12 and $4.",
        "Represent the total as p(12 + 4) < 160.",
        "Simplify inside the parentheses: 16p < 160.",
        "Divide both sides by 16.",
        "p < 10.",
        "Because the boundary is strict, exactly 10 participants are not allowed by this model.",
      ],

      answer:
        "p < 10",

      interpretation:
        "The group must have fewer than 10 participants.",
    },

    {
      title:
        "Distribution and a Fixed Charge",

      problem:
        "A school purchases three identical classroom supply bundles. Each bundle contains materials costing x dollars plus a $20 preparation charge. The school wants the total cost to be no more than $360. Solve 3(x + 20) ≤ 360 and interpret the result.",

      solutionSteps: [
        "Start with 3(x + 20) ≤ 360.",
        "Distribute: 3x + 60 ≤ 360.",
        "Subtract 60 from both sides: 3x ≤ 300.",
        "Divide both sides by 3: x ≤ 100.",
        "Test the boundary: 3(100 + 20) = 360.",
      ],

      answer:
        "x ≤ 100",

      interpretation:
        "The material portion of each bundle may cost at most $100.",
    },

    {
      title:
        "Combining Like Terms",

      problem:
        "A student saves $8 each week from one job and $12 each week from another source. The student already has $40 and wants total savings of at least $240. Let w represent the number of weeks. How many weeks are required?",

      solutionSteps: [
        "Weekly savings are 8w + 12w.",
        "Construct the inequality: 40 + 8w + 12w ≥ 240.",
        "Combine like terms: 40 + 20w ≥ 240.",
        "Subtract 40: 20w ≥ 200.",
        "Divide by 20: w ≥ 10.",
        "Check: 40 + 20(10) = 240.",
      ],

      answer:
        "w ≥ 10",

      interpretation:
        "The student needs at least 10 weeks of saving.",
    },

    {
      title:
        "Rejecting Irrelevant Information",

      problem:
        "A school van can transport no more than 1,500 pounds of equipment. It already carries 420 pounds. Each robotics crate weighs 90 pounds. The van is white, travels 42 miles, and has eight seats. Let c represent the number of crates. Build and solve the correct model.",

      solutionSteps: [
        "The color, travel distance, and number of seats do not affect the weight constraint.",
        "Relevant information: 1,500-pound maximum, 420 pounds already loaded, and 90 pounds per crate.",
        "Model: 420 + 90c ≤ 1500.",
        "Subtract 420: 90c ≤ 1080.",
        "Divide by 90: c ≤ 12.",
        "Check: 420 + 90(12) = 1500.",
      ],

      answer:
        "c ≤ 12",

      interpretation:
        "The van can carry at most 12 additional robotics crates.",
    },

    {
      title:
        "Mathematical Solution Versus Realistic Solution",

      problem:
        "A theater budget produces the inequality 75 + 28t ≤ 300, where t is the number of tickets. Solve the inequality and determine the greatest realistic number of tickets.",

      solutionSteps: [
        "Subtract 75: 28t ≤ 225.",
        "Divide by 28: t ≤ 8.0357...",
        "The algebraic inequality allows real values up to approximately 8.04.",
        "Tickets must be whole numbers.",
        "Therefore the greatest realistic value is 8.",
        "Check 8 tickets: 75 + 28(8) = 299.",
        "Check 9 tickets: 75 + 28(9) = 327, which exceeds the budget.",
      ],

      answer:
        "t ≤ 8.0357... mathematically; at most 8 tickets realistically.",

      interpretation:
        "Context determines which mathematical solutions are feasible.",
    },
  ],

  interactiveExploration: {
    title:
      "Build, Solve, Test, and Interpret",

    description:
      "Investigate how each stage of modeling contributes to a trustworthy conclusion.",

    instructions: [
      "Start with 40 + 20x ≤ 180.",
      "Predict whether the final boundary will be greater than or less than 10.",
      "Subtract 40 from both sides.",
      "Divide by 20.",
      "Graph the resulting solution.",
      "Test the boundary value.",
      "Test one value inside the solution region.",
      "Test one value outside the solution region.",
      "Now create a real-world situation that could be modeled by the original inequality.",
    ],

    questions: [
      "Why is testing a value outside the solution region useful?",
      "What information does the graph communicate immediately?",
      "Why might a mathematically correct decimal answer be unrealistic in some contexts?",
      "What part of the process requires the most reasoning: constructing the inequality or solving it?",
    ],

    expectedDiscovery:
      "Correct algebra is necessary but not sufficient. A trustworthy inequality solution must also match the original constraint and the realistic values allowed by the context.",
  },

  realWorldApplications: [
    {
      field: "Finance",
      application:
        "Multi-step inequalities model budgets containing fixed fees and variable expenses.",
    },

    {
      field: "Transportation",
      application:
        "Capacity, cargo weight, fuel limits, and travel costs often involve several quantities.",
    },

    {
      field: "Engineering",
      application:
        "Design constraints may combine fixed dimensions, variable components, and maximum tolerances.",
    },

    {
      field: "Education",
      application:
        "Grade requirements may combine completed points with future assignments or assessments.",
    },

    {
      field: "Business",
      application:
        "Companies model fixed operating expenses together with variable production costs.",
    },

    {
      field: "Computer Science",
      application:
        "Software systems evaluate multi-condition resource and performance constraints.",
    },
  ],

  aiConnection: {
    title:
      "Optimization Begins with Constraints",

    explanation:
      "Many AI and operations-research systems choose the best action while respecting multiple constraints. Before a system can optimize a decision, the constraints must be modeled correctly.",

    example:
      "A delivery-planning system might maximize the number of packages while keeping total weight, fuel cost, and travel time within limits.",

    formula:
      "fixed resources + variable resources ≤ available capacity",

    uses: [
      "Resource allocation",
      "Scheduling",
      "Transportation planning",
      "Budget optimization",
      "Model constraints",
      "Automated decision systems",
    ],

    caution:
      "An optimization system can produce a mathematically correct answer to the wrong model. Incorrect constraints lead to incorrect decisions.",

    reflectionQuestion:
      "Why should humans verify the meaning of constraints before allowing an automated system to optimize them?",
  },

  pythonLab: {
    title:
      "Verify a Multi-Step Budget Model",

    objective:
      "Use Python to test which student counts satisfy the robotics competition budget.",

    code: `budget = 1260
registration = 300
equipment_transport = 180
cost_per_student = 65

for students in range(8, 15):
    total = (
        registration
        + equipment_transport
        + cost_per_student * students
    )

    allowed = total <= budget

    print(
        students,
        total,
        allowed
    )`,

    questions: [
      "Which student counts return True?",
      "What total cost occurs when 12 students attend?",
      "Why does 13 students return False?",
      "How does the program verify the algebraic conclusion s ≤ 12?",
      "Why should the algebraic model be built before writing the code?",
    ],

    reflectionQuestions: [
      "Can code correct a poorly constructed mathematical model?",
      "What advantage does computational testing provide when many possible values must be checked?",
    ],

    extension:
      "Change the total budget or cost per student. Predict the new maximum student count algebraically before running the modified program.",
  },

  guidedPractice: [
    {
      question:
        "A school club has at most $600. It has already spent $150 and pays $30 for each additional activity. Let a represent the number of activities. Construct, solve, graph, and interpret the inequality.",
      answer:
        "150 + 30a ≤ 600; 30a ≤ 450; a ≤ 15. The club can fund at most 15 additional activities.",
      difficulty: "Foundation",
    },

    {
      question:
        "Solve 4(x + 5) ≤ 60. Graph the solution and test the boundary.",
      answer:
        "4x + 20 ≤ 60; 4x ≤ 40; x ≤ 10. Boundary check: 4(10 + 5) = 60.",
      difficulty: "Foundation",
    },

    {
      question:
        "A student currently has 55 points and earns 15 points on each completed project. At least 160 points are required. Let p represent additional projects. Construct and solve the inequality.",
      answer:
        "55 + 15p ≥ 160; 15p ≥ 105; p ≥ 7. The student needs at least 7 additional projects.",
      difficulty: "Modeling",
    },

    {
      question:
        "A company pays a fixed $250 setup cost plus $18 per item. It must keep total production cost below $700. Let n represent items. Construct and solve the inequality, then determine the greatest realistic whole-number value.",
      answer:
        "250 + 18n < 700; 18n < 450; n < 25. Therefore the greatest whole-number value is 24.",
      difficulty: "Reasoning",
    },
  ],

  independentPractice: [
    {
      question:
        "Solve 5x + 20 ≤ 95 and graph the solution.",
      answer:
        "5x ≤ 75, so x ≤ 15.",
    },

    {
      question:
        "Solve 3(x + 4) < 33.",
      answer:
        "3x + 12 < 33; 3x < 21; x < 7.",
    },

    {
      question:
        "Solve 25 + 7x + 3x ≥ 125.",
      answer:
        "25 + 10x ≥ 125; 10x ≥ 100; x ≥ 10.",
    },

    {
      question:
        "A family has a $500 weekend budget. Lodging costs $220, and each activity costs $35. Let a represent activities. Write and solve the inequality.",
      answer:
        "220 + 35a ≤ 500; 35a ≤ 280; a ≤ 8.",
    },

    {
      question:
        "A shipping container may hold no more than 2,400 pounds. It already contains 600 pounds, and each crate weighs 125 pounds. Determine the greatest whole number of additional crates.",
      answer:
        "600 + 125c ≤ 2400; c ≤ 14.4. Therefore at most 14 whole crates may be added.",
    },

    {
      question:
        "Create a three-sentence real-world problem represented by 120 + 40x ≤ 600. Include at least one irrelevant detail. Solve and interpret your model.",
      answer:
        "Answers will vary. Algebraically, x ≤ 12.",
    },

    {
      question:
        "Create a situation represented by 4(x + 10) < 100. Explain what the open boundary means in your context.",
      answer:
        "Answers will vary. Algebraically, x < 15.",
    },
  ],

  commonMistakes: [
    {
      mistake:
        "Beginning algebra before deciding what the variable represents.",
      correction:
        "Define the unknown quantity and its units before constructing the model.",
    },

    {
      mistake:
        "Using every number from the word problem.",
      correction:
        "Include only quantities that affect the constraint.",
    },

    {
      mistake:
        "Forgetting to distribute to every term.",
      correction:
        "Apply the outside factor to each term inside the parentheses.",
      example:
        "3(x + 20) becomes 3x + 60.",
    },

    {
      mistake:
        "Failing to combine like terms before solving.",
      correction:
        "Simplify the expression so the structure of the inequality becomes clear.",
    },

    {
      mistake:
        "Stopping at a decimal that is impossible in context.",
      correction:
        "Determine whether the variable represents a continuous quantity or a count requiring whole numbers.",
    },

    {
      mistake:
        "Reporting only the algebraic inequality without interpretation.",
      correction:
        "State what the solution means using the original quantity and units.",
    },
  ],

  discussionQuestions: [
    "Why is constructing the inequality often harder than solving it?",
    "How can irrelevant information make a word problem more challenging?",
    "Why should the variable be defined before writing the inequality?",
    "When should a decimal solution be converted into a whole-number decision?",
    "Why is it useful to test the boundary and a nearby non-solution?",
    "How does a number-line graph strengthen an explanation?",
    "Can two different real-world situations produce the same inequality?",
    "Why might a computer produce a bad decision even if its arithmetic is correct?",
  ],

  formativeAssessment: {
    passingScore: 6,

    questions: [
      {
        type: "solving",
        prompt:
          "Solve 4x + 12 ≤ 44.",
        answer:
          "4x ≤ 32, so x ≤ 8.",
      },

      {
        type: "distribution",
        prompt:
          "Solve 3(x + 2) < 24.",
        answer:
          "3x + 6 < 24; 3x < 18; x < 6.",
      },

      {
        type: "combining",
        prompt:
          "Solve 20 + 5x + 3x ≥ 100.",
        answer:
          "20 + 8x ≥ 100; 8x ≥ 80; x ≥ 10.",
      },

      {
        type: "modeling",
        prompt:
          "A club has $720. It pays a $180 registration fee and $45 per participant. Let p represent participants. Write and solve an inequality for the maximum number of participants.",
        answer:
          "180 + 45p ≤ 720; 45p ≤ 540; p ≤ 12.",
      },

      {
        type: "verification",
        prompt:
          "For 100 + 25x ≤ 300, determine whether x = 8 and x = 9 satisfy the constraint.",
        answer:
          "x = 8 gives 300 and satisfies the inequality. x = 9 gives 325 and does not.",
      },

      {
        type: "interpretation",
        prompt:
          "A calculation produces t ≤ 7.6, where t is the number of whole tables that can fit in a room. What is the greatest feasible value?",
        answer:
          "7 tables.",
      },

      {
        type: "reasoning",
        prompt:
          "Explain why solving a word problem is not complete after isolating the variable.",
        sampleAnswer:
          "The result must still be verified, connected to realistic restrictions, and interpreted in the original context.",
      },

      {
        type: "creation",
        prompt:
          "Create a real-world multi-step inequality involving a fixed cost and a variable cost.",
        sampleAnswer:
          "Answers will vary.",
      },
    ],
  },

  researchExtension: {
    title:
      "Investigate a Real Constraint System",

    description:
      "Find a real situation involving a fixed quantity, a variable quantity, and a maximum or minimum requirement.",

    researchQuestion:
      "How can a real organizational decision be represented with a multi-step inequality?",

    applicationOptions: [
      "Event planning",
      "Transportation",
      "School budgeting",
      "Small business",
      "Engineering",
      "Sports",
      "Community programs",
      "Technology",
    ],

    task:
      "Identify the relevant quantities, define a variable, construct a multi-step inequality, solve it, graph the result, test the boundary, and explain the final decision.",

    requiredEvidence: [
      "Real-world context",
      "Relevant and irrelevant information",
      "Variable definition",
      "Constraint language",
      "Inequality model",
      "Algebraic solution",
      "Visual representation",
      "Verification",
      "Context interpretation",
    ],
  },

  portfolioArtifact: {
    title:
      "Multi-Step Constraint Decision Brief",

    description:
      "Design an original real-world constraint problem and present the complete reasoning from situation to decision.",

    requiredSections: [
      "Three-or-more-sentence scenario",
      "Relevant information",
      "At least one irrelevant detail",
      "Variable definition",
      "Multi-step inequality",
      "Simplification",
      "Solution steps",
      "Number-line visualization",
      "Boundary test",
      "Non-solution test",
      "Realistic restrictions",
      "Final recommendation",
    ],

    requiredEvidence: [
      "Original context",
      "Correct mathematics",
      "Visual explanation",
      "Written reasoning",
      "Verified conclusion",
    ],
  },

  growthIndicators: [
    "Filters relevant and irrelevant information.",
    "Defines variables with units.",
    "Constructs multi-step inequality models.",
    "Uses distribution correctly.",
    "Combines like terms accurately.",
    "Uses inverse operations logically.",
    "Graphs solution sets.",
    "Tests boundary values.",
    "Recognizes realistic restrictions.",
    "Interprets mathematical results as decisions.",
    "Explains reasoning rather than reporting only an answer.",
  ],

  lumineryGuidance: {
    message:
      "Do not rush to calculate. First make sure the inequality actually represents the situation.",

    recommendation:
      "Understand → Filter → Define → Relate → Model → Simplify → Solve → Visualize → Verify → Interpret.",

    prompt:
      "If someone saw only your inequality, would it accurately represent the important relationships in the original situation?",

    coachingQuestions: [
      "What decision is being made?",
      "Which quantities actually affect that decision?",
      "Which details can be ignored?",
      "What does your variable represent?",
      "What is fixed?",
      "What changes with the variable?",
      "What phrase establishes the boundary?",
      "Is the boundary included?",
      "Can the expression be simplified before solving?",
      "Does the boundary satisfy the original model?",
      "What nearby value should fail?",
      "Does the variable require whole numbers?",
      "What does your final answer mean in context?",
    ],
  },

  summary: [
    "Multi-step inequalities often model realistic constraints involving several quantities.",
    "The mathematical process begins before algebra: understand, filter, and define.",
    "Fixed and variable quantities must be represented correctly.",
    "Distribution and combining like terms may be required before isolating the variable.",
    "The final inequality represents a solution set rather than only one value.",
    "Number lines make the solution region visible.",
    "Boundary tests and non-solution tests strengthen verification.",
    "Context may restrict solutions to nonnegative or whole-number values.",
    "A complete solution ends with a meaningful real-world interpretation.",
  ],

  reflection: [
    "Which part of multi-step inequality modeling was most challenging?",
    "How did irrelevant information affect your reasoning?",
    "Why should we define the variable before solving?",
    "How does visualization help you check whether a solution makes sense?",
    "Why can a decimal answer be mathematically correct but contextually impossible?",
    "How does testing one solution and one non-solution strengthen your confidence?",
    "Create one situation in your own life that could be represented by a multi-step inequality.",
  ],

  previousLesson: {
    moduleNumber: 3,
    lessonNumber: 2,
    slug: "solving-one-step-inequalities",
    title:
      "Solving One-Step Inequalities",
  },

  nextLesson: {
    moduleNumber: 3,
    lessonNumber: 4,
    slug: "reversing-the-inequality-sign",
    title:
      "Why the Inequality Sign Reverses",
  },
};

export default lesson03;