const lesson05 = {
  id: "algebra-one-module-02-lesson-05",
  slug: "variables-on-both-sides",

  courseId: "algebra-1",
  courseTitle: "Algebra I",

  moduleNumber: 2,
  moduleTitle: "Solving Linear Equations",
  lessonNumber: 5,

  title:
    "Variables on Both Sides Through Comparison Modeling",

  subtitle:
    "Translate competing real-world situations into equations with variables on both sides, simplify strategically, and determine when the two situations are equal.",

  duration: "70–90 minutes",
  level: "Foundation",
  status: "Available",

  essentialQuestion:
    "How can we determine when two changing real-world situations become equal?",

  bigIdea:
    "Equations with variables on both sides often arise when two quantities change at different rates. Strong problem solvers model both situations, compare them, simplify each side, collect variable terms strategically, solve, verify, and interpret the point where the situations are equal.",

  whyThisLessonExists: {
    title: "Why Compare Two Changing Situations?",

    introduction:
      "Many important decisions involve comparing two options that both change. Two companies may charge different starting fees and different rates. Two savings plans may begin with different balances and grow by different amounts. Algebra allows us to determine exactly when the two situations become equal.",

    centralProblem:
      "How can we translate two changing situations into expressions and determine the value that makes those expressions equal?",

    purpose:
      "This reasoning is used in budgeting, transportation, business planning, engineering, data analysis, break-even analysis, and algorithm comparison.",
  },

  problemFirst: {
    title: "Two Transportation Plans",

    scenario:
      "Transportation Company A charges a $12 booking fee plus $4 for every mile traveled. Company B charges a $30 booking fee plus $2 for every mile. Both companies serve the same city, Company A uses blue vehicles, and Company B opened three years earlier. For what trip distance will the total cost of the two companies be the same?",

    questions: [
      "What is the unknown quantity?",
      "Which information is relevant to comparing cost?",
      "Which information is irrelevant?",
      "Define a variable for the unknown.",
      "Write an expression for Company A.",
      "Write an expression for Company B.",
      "Why should the two expressions be connected with an equal sign?",
      "Construct the equation independently.",
      "Which side has the larger variable term?",
      "How can variable terms be collected onto one side?",
      "How can constants be collected onto the other side?",
      "Solve the equation and justify every transformation.",
      "Verify the result using both original cost expressions.",
      "Interpret the answer in the context of the transportation companies.",
    ],

    expectedInsight:
      "Let m represent miles traveled. Company A costs 4m + 12 and Company B costs 2m + 30. Setting the costs equal gives 4m + 12 = 2m + 30. Solving gives m = 9, so both companies cost the same for a 9-mile trip.",
  },

  learningObjectives: [
    "Identify two quantities that change in a real-world comparison.",
    "Determine relevant and irrelevant information in multi-sentence problems.",
    "Define an appropriate variable with units.",
    "Write an algebraic expression for each changing situation.",
    "Construct equations containing variables on both sides.",
    "Simplify each side using distribution and combining like terms when necessary.",
    "Collect variable terms strategically on one side.",
    "Collect constants on the other side.",
    "Justify each algebraic transformation using equality properties.",
    "Solve equations with variables on both sides.",
    "Verify solutions using both original expressions.",
    "Interpret the solution as a point of equality or comparison.",
    "Create original comparison problems.",
  ],

  prerequisiteKnowledge: [
    "Variables and expressions",
    "Combining like terms",
    "Distributive property",
    "Balance principle",
    "One-step equations",
    "Two-step equations",
    "Multi-step equations",
    "Substitution",
    "Word-to-math modeling",
  ],

  vocabulary: [
    {
      term: "Variable on Both Sides",
      definition:
        "An equation in which the same variable appears on both sides of the equal sign.",
      example:
        "4x + 12 = 2x + 30",
    },

    {
      term: "Comparison Model",
      definition:
        "A mathematical model used to compare two changing quantities.",
      example:
        "4m + 12 = 2m + 30 compares two transportation costs.",
    },

    {
      term: "Break-Even Point",
      definition:
        "A value at which two costs, revenues, or quantities are equal.",
      example:
        "Two pricing plans may cost the same after a certain number of units.",
    },

    {
      term: "Rate",
      definition:
        "The amount a quantity changes for each unit.",
      example:
        "$4 per mile gives the term 4m.",
    },

    {
      term: "Initial Value",
      definition:
        "A starting or fixed quantity before repeated change occurs.",
      example:
        "A $12 booking fee is an initial cost.",
    },

    {
      term: "Equivalent Equation",
      definition:
        "An equation that has the same solution as another equation.",
      example:
        "4x + 12 = 2x + 30 and 2x = 18 have the same solution.",
    },
  ],

  formulas: [
    {
      name: "Comparison Equation",
      formula:
        "first changing quantity = second changing quantity",
      meaning:
        "When the question asks when two situations are equal, represent each situation and set the expressions equal.",
    },

    {
      name: "Variables on Both Sides",
      formula:
        "ax + b = cx + d",
      meaning:
        "Each side may represent a different changing situation.",
    },

    {
      name: "Collect Variable Terms",
      formula:
        "ax - cx + b = d",
      meaning:
        "Subtract the same variable term from both sides to preserve equality.",
    },
  ],

  problemSolvingFramework: {
    title: "SkillBridge 7-Step Comparison Framework",

    steps: [
      {
        number: 1,
        title: "Simplify Before Solving",
        description:
          "Distribute and combine like terms on each side before attempting to isolate the variable.",
      },

      {
        number: 2,
        title: "Use Structure Carefully",
        description:
          "Recognize grouped quantities, repeated quantities, rates, starting values, and totals.",
      },

      {
        number: 3,
        title: "Identify Irrelevant Information",
        description:
          "Separate useful mathematical facts from realistic details that do not affect the comparison.",
      },

      {
        number: 4,
        title: "Choose the Correct Variable",
        description:
          "Define the quantity both situations depend on, including its units.",
      },

      {
        number: 5,
        title: "Construct Both Expressions Independently",
        description:
          "Model each situation separately before connecting them with an equal sign.",
      },

      {
        number: 6,
        title: "Justify Each Transformation",
        description:
          "Explain why variable terms or constants are added, subtracted, multiplied, divided, distributed, or combined.",
      },

      {
        number: 7,
        title: "Interpret and Verify the Equality Point",
        description:
          "Evaluate both original expressions using the solution and confirm that they produce the same value.",
      },
    ],
  },

  workedExamples: [
    {
      title: "Competing Transportation Companies",

      problem:
        "Company A charges a $12 booking fee plus $4 per mile. Company B charges a $30 booking fee plus $2 per mile. Company A has 40 drivers, while Company B uses green vehicles. For what trip distance will both companies charge the same amount?",

      solutionSteps: [
        "Identify irrelevant information: number of drivers and vehicle color do not affect the cost equations.",
        "Let m represent the number of miles traveled.",
        "Company A: 4m + 12.",
        "Company B: 2m + 30.",
        "Set the expressions equal because we want the distance at which the costs match: 4m + 12 = 2m + 30.",
        "Subtract 2m from both sides to collect variable terms: 2m + 12 = 30.",
        "Subtract 12 from both sides: 2m = 18.",
        "Divide both sides by 2: m = 9.",
        "Verify Company A: 4(9) + 12 = 48.",
        "Verify Company B: 2(9) + 30 = 48.",
        "Interpret: both companies charge $48 for a 9-mile trip.",
      ],

      answer:
        "The companies charge the same amount for a 9-mile trip.",
    },

    {
      title: "Two Savings Plans",

      problem:
        "Ava begins a savings challenge with $25 already in her account and adds $8 each week. Marcus begins with $55 and adds $3 each week. Ava's account is at one bank and Marcus uses another bank with a different logo. After how many weeks will their savings balances be equal?",

      solutionSteps: [
        "The bank names and logos are irrelevant.",
        "Let w represent the number of weeks.",
        "Ava's balance is 8w + 25.",
        "Marcus's balance is 3w + 55.",
        "Set them equal: 8w + 25 = 3w + 55.",
        "Subtract 3w from both sides: 5w + 25 = 55.",
        "Subtract 25: 5w = 30.",
        "Divide by 5: w = 6.",
        "Verify Ava: 8(6) + 25 = 73.",
        "Verify Marcus: 3(6) + 55 = 73.",
      ],

      answer:
        "Their balances are equal after 6 weeks, when each has $73.",
    },

    {
      title: "Two Fitness Memberships",

      problem:
        "Fitness Center A charges a $40 registration fee plus $15 each month. Fitness Center B charges a $10 registration fee plus $20 each month. Center A has a swimming pool, while Center B opened last summer. After how many months will the total cost of the two memberships be equal?",

      solutionSteps: [
        "The swimming pool and opening date are irrelevant to the cost calculation.",
        "Let m represent months of membership.",
        "Center A: 15m + 40.",
        "Center B: 20m + 10.",
        "Construct: 15m + 40 = 20m + 10.",
        "Subtract 15m from both sides: 40 = 5m + 10.",
        "Subtract 10 from both sides: 30 = 5m.",
        "Divide by 5: m = 6.",
        "Verify A: 15(6) + 40 = 130.",
        "Verify B: 20(6) + 10 = 130.",
      ],

      answer:
        "The memberships cost the same after 6 months.",
    },

    {
      title: "Two School Fundraising Strategies",

      problem:
        "Class A already has $90 from previous fundraising and earns $12 for every package it sells. Class B begins with $30 and earns $18 per package. Class A meets on Tuesdays, and Class B has 24 students. How many packages must each class sell for their fundraising totals to be equal?",

      solutionSteps: [
        "Tuesday and the number of students are irrelevant.",
        "Let p represent packages sold.",
        "Class A: 12p + 90.",
        "Class B: 18p + 30.",
        "Set equal: 12p + 90 = 18p + 30.",
        "Subtract 12p: 90 = 6p + 30.",
        "Subtract 30: 60 = 6p.",
        "Divide by 6: p = 10.",
        "Verify A: 12(10) + 90 = 210.",
        "Verify B: 18(10) + 30 = 210.",
      ],

      answer:
        "The classes have equal fundraising totals after selling 10 packages each.",
    },

    {
      title: "Distribution on Both Sides",

      problem:
        "Two school event companies prepare packages for student celebrations. Company A charges $3 for each of x students plus a $5 service item for every student group of 2. Company B charges $2 for each of x students plus a $9 service item for every student group of 2. A teacher models the comparison as 2(3x + 5) = 2(2x + 9). Determine the value of x and justify each algebraic step.",

      solutionSteps: [
        "Start with 2(3x + 5) = 2(2x + 9).",
        "Distribute on both sides: 6x + 10 = 4x + 18.",
        "Subtract 4x from both sides: 2x + 10 = 18.",
        "Subtract 10 from both sides: 2x = 8.",
        "Divide by 2: x = 4.",
        "Verify left: 2(3(4) + 5) = 34.",
        "Verify right: 2(2(4) + 9) = 34.",
      ],

      answer:
        "x = 4.",
    },

    {
      title: "Critique an Incorrect Comparison Model",

      problem:
        "Plan A charges $10 initially and $6 per month. Plan B charges $34 initially and $3 per month. A student writes 10x + 6 = 34x + 3 to determine when the plans cost the same. Explain the student's error and construct the correct equation.",

      solutionSteps: [
        "Define x as the number of months.",
        "The monthly rates should multiply x.",
        "The initial charges are constants.",
        "Plan A should be represented by 6x + 10.",
        "Plan B should be represented by 3x + 34.",
        "The correct equation is 6x + 10 = 3x + 34.",
        "Subtract 3x: 3x + 10 = 34.",
        "Subtract 10: 3x = 24.",
        "Divide by 3: x = 8.",
        "Verify both plans cost $58 after 8 months.",
      ],

      answer:
        "The student incorrectly attached the variable to the starting fees. The plans become equal after 8 months.",
    },
  ],

  interactiveExploration: {
    title: "Graph Two Competing Plans",

    description:
      "Use Desmos to see how equations with variables on both sides represent the intersection of two changing quantities.",

    instructions: [
      "Graph y = 4x + 12.",
      "Graph y = 2x + 30.",
      "Find the intersection point.",
      "Identify its x-coordinate and y-coordinate.",
      "Solve 4x + 12 = 2x + 30 algebraically.",
      "Compare your algebraic solution with the graph.",
      "Change one starting fee.",
      "Observe how the intersection changes.",
      "Change one rate.",
      "Explain how different rates affect when the plans become equal.",
    ],

    questions: [
      "What does the x-coordinate of the intersection represent?",
      "What does the y-coordinate represent?",
      "Why is the intersection equivalent to solving the equation?",
      "Which plan grows faster?",
      "How does a larger starting value affect the equality point?",
    ],

    expectedDiscovery:
      "Solving an equation with variables on both sides can represent finding the intersection point of two changing relationships.",
  },

  realWorldApplications: [
    {
      field: "Business",
      application:
        "Companies compare costs and revenues to determine break-even points.",
    },

    {
      field: "Personal Finance",
      application:
        "Different savings plans may begin with different balances and grow at different rates.",
    },

    {
      field: "Transportation",
      application:
        "Two transportation services may have different starting fees and mileage rates.",
    },

    {
      field: "Subscriptions",
      application:
        "Two membership plans can be compared to determine when their total costs become equal.",
    },

    {
      field: "Engineering",
      application:
        "Engineers compare changing quantities to identify operating conditions where systems produce equal outputs.",
    },

    {
      field: "Data Science",
      application:
        "Comparing linear models can reveal when predictions from two models intersect.",
    },
  ],

  aiConnection: {
    title: "Comparing Models in AI",

    explanation:
      "Artificial intelligence systems frequently compare alternative models, strategies, or predicted outcomes. Algebraic comparison develops the same reasoning: represent each option mathematically, identify when their outputs are equal, and interpret the point of intersection.",

    example:
      "If one computational strategy has a large startup cost but grows slowly while another starts cheaply but grows faster, equations can approximate when one becomes more efficient than the other.",

    uses: [
      "Model comparison",
      "Optimization",
      "Algorithm analysis",
      "Cost modeling",
      "Prediction comparison",
      "Decision systems",
    ],

    caution:
      "The point where two mathematical models are equal does not automatically mean the two choices are equally desirable; real decisions may require additional factors.",

    reflectionQuestion:
      "How is finding where two algebraic models are equal similar to comparing two competing strategies?",
  },

  pythonLab: {
    title: "Find the Equality Point with Python",

    objective:
      "Use Python to verify when two changing costs become equal.",

    code: `# Company A: $12 starting fee + $4 per mile
# Company B: $30 starting fee + $2 per mile

miles = 9

company_a = 4 * miles + 12
company_b = 2 * miles + 30

print("Company A:", company_a)
print("Company B:", company_b)
print("Equal costs:", company_a == company_b)`,

    expectedOutput: `Company A: 48
Company B: 48
Equal costs: True`,

    investigation: [
      "Change miles from 9 to 5 and compare the costs.",
      "Change miles to 12 and compare again.",
      "Determine which company is cheaper before the equality point.",
      "Determine which company is cheaper after the equality point.",
      "Create two new pricing plans.",
      "Solve algebraically for the equality point.",
      "Verify your result with Python.",
    ],

    reflectionQuestions: [
      "What does True mean in the final Python statement?",
      "How does Python verification relate to substitution?",
      "Why is algebra more efficient than testing every possible number?",
    ],
  },

  guidedPractice: [
    {
      question:
        "Streaming Plan A charges a $24 setup fee plus $5 each month. Plan B charges a $48 setup fee plus $3 each month. Plan A includes sports channels, and Plan B uses a red logo. After how many months will the total costs be equal? Identify irrelevant information, define the variable, build the equation, solve, verify, and interpret.",
      answer:
        "Sports channels and logo color are irrelevant. Let m be months. 5m + 24 = 3m + 48. Subtract 3m: 2m + 24 = 48. Subtract 24: 2m = 24. m = 12. Both cost $84 after 12 months.",
      hint:
        "Write a separate cost expression for each plan first.",
    },

    {
      question:
        "Savings Account A begins with $20 and receives $9 every week. Savings Account B begins with $50 and receives $4 each week. One account belongs to Maya and the other is at a bank near her school. After how many weeks will the balances be equal?",
      answer:
        "The bank location is irrelevant. Let w be weeks. 9w + 20 = 4w + 50. Then 5w = 30, so w = 6. Each account has $74.",
      hint:
        "The starting balances are constants.",
    },

    {
      question:
        "Gym A charges $35 initially plus $12 per month. Gym B charges $15 initially plus $16 per month. Gym A has 14 treadmills. Determine when the total membership costs are equal.",
      answer:
        "Treadmills are irrelevant. Let m be months. 12m + 35 = 16m + 15. Subtract 12m: 35 = 4m + 15. Subtract 15: 20 = 4m. m = 5.",
      hint:
        "Either side can contain the variable after simplification.",
    },
  ],

  independentPractice: [
    {
      question:
        "Delivery Service A charges a $14 service fee and $7 per mile. Service B charges a $38 service fee and $3 per mile. Service B has been operating for 10 years. Determine the mileage at which the two services cost the same. Show the complete SkillBridge reasoning process.",
      answer:
        "Operating history is irrelevant. Let m be miles. 7m + 14 = 3m + 38. Then 4m = 24, so m = 6. Both cost $56.",
    },

    {
      question:
        "Student A already has 45 community-service points and earns 6 points each week. Student B has 15 points and earns 11 each week. Student B wears jersey number 8. After how many weeks will the students have the same number of points?",
      answer:
        "Jersey number is irrelevant. Let w be weeks. 6w + 45 = 11w + 15. Then 30 = 5w, so w = 6. Each has 81 points.",
    },

    {
      question:
        "Rental Plan A charges $50 plus $8 per hour. Rental Plan B charges $20 plus $13 per hour. One company has 35 bicycles. Determine when the rental costs become equal.",
      answer:
        "Number of bicycles is irrelevant. Let h be hours. 8h + 50 = 13h + 20. Then 30 = 5h, h = 6.",
    },

    {
      question:
        "A student compares two plans by writing 20x + 4 = 50x + 2. The story says Plan A starts at $20 and increases $4 per week, while Plan B starts at $50 and increases $2 per week. Identify and correct the modeling error.",
      answer:
        "The starting values should not multiply x. The correct equation is 4x + 20 = 2x + 50.",
    },

    {
      question:
        "Create a three- or four-sentence situation that produces an equation with variables on both sides. Include one irrelevant detail. Define your variable, construct both expressions, solve the equation, verify both sides, and interpret the equality point.",
      answer:
        "Answers will vary.",
    },
  ],

  commonMistakes: [
    {
      mistake:
        "Moving a variable term across the equal sign without describing the operation.",
      correction:
        "State that the same variable term is subtracted from both sides.",
    },

    {
      mistake:
        "Attaching the variable to the fixed starting value.",
      correction:
        "Determine which quantity changes with the variable and which value remains fixed.",
    },

    {
      mistake:
        "Building only one expression before solving.",
      correction:
        "Represent both situations independently before setting them equal.",
    },

    {
      mistake:
        "Using every detail in the story.",
      correction:
        "Use only quantities that affect the requested comparison.",
    },

    {
      mistake:
        "Stopping after finding x.",
      correction:
        "Evaluate both original expressions and interpret what equality means.",
    },

    {
      mistake:
        "Assuming the larger starting value always produces the larger final result.",
      correction:
        "A greater rate can eventually overcome a smaller starting value.",
    },
  ],

  discussionQuestions: [
    "Why do equations with variables on both sides naturally appear in comparison problems?",
    "What does the solution represent when two pricing plans are compared?",
    "How can one option begin more expensive but eventually become cheaper?",
    "Why should each situation be modeled separately before writing an equation?",
    "Why is verification especially useful in comparison problems?",
    "How does an intersection on a graph connect to equality?",
    "Where might break-even reasoning be useful in real life?",
    "Can two different real-world stories produce the same equation?",
  ],

  formativeAssessment: {
    passingScore: 5,

    questions: [
      {
        type: "model-and-solve",
        prompt:
          "Plan A begins at $18 and increases $7 each month. Plan B begins at $42 and increases $4 each month. Determine when their totals become equal.",
        answer:
          "7m + 18 = 4m + 42. Then 3m = 24, so m = 8.",
      },

      {
        type: "model-and-solve",
        prompt:
          "Runner A has already completed 12 miles and adds 5 miles daily. Runner B has completed 30 miles and adds 2 miles daily. Runner A wears blue shoes. After how many days will their totals be equal?",
        answer:
          "Shoe color is irrelevant. 5d + 12 = 2d + 30. Then 3d = 18, so d = 6.",
      },

      {
        type: "model-critique",
        prompt:
          "A phone plan begins with a $30 activation fee and costs $5 per month. A student represents it as 30m + 5. Explain the error.",
        answer:
          "The monthly rate should multiply m. The correct expression is 5m + 30.",
      },

      {
        type: "reasoning",
        prompt:
          "Why do we set two expressions equal in a comparison problem?",
        sampleAnswer:
          "Because we are looking for the input value at which the two changing quantities have the same output.",
      },

      {
        type: "verification",
        prompt:
          "For 6x + 15 = 3x + 33, a student obtains x = 6. Verify the solution.",
        answer:
          "Left: 6(6) + 15 = 51. Right: 3(6) + 33 = 51. The solution is correct.",
      },

      {
        type: "creation",
        prompt:
          "Create a realistic multi-sentence problem represented by 8x + 20 = 5x + 50. Include an irrelevant detail and explain what x represents.",
        sampleAnswer:
          "Answers will vary.",
      },
    ],
  },

  researchExtension: {
    title: "Break-Even Analysis",

    description:
      "Investigate two real or realistic pricing plans that contain different starting costs and different rates.",

    researchQuestion:
      "At what point do two changing financial models become equal, and what happens before and after that point?",

    applicationOptions: [
      "Cellphone plans",
      "Transportation services",
      "Gym memberships",
      "Streaming subscriptions",
      "Rental services",
      "Business cost plans",
      "Savings strategies",
    ],

    task:
      "Create two linear models, determine their equality point algebraically and graphically, and explain which option is better before and after the intersection.",

    requiredEvidence: [
      "Two real-world descriptions",
      "Relevant quantities",
      "Variable definition",
      "Two expressions",
      "Comparison equation",
      "Algebraic solution",
      "Graph",
      "Verification",
      "Interpretation before and after the equality point",
    ],
  },

  portfolioArtifact: {
    title: "Comparison and Break-Even Modeling Project",

    description:
      "Create a polished comparison between two real-world options whose costs or quantities change at different rates.",

    requiredSections: [
      "Multi-sentence situation",
      "Relevant information",
      "Irrelevant information",
      "Variable definition",
      "Expression for Option A",
      "Expression for Option B",
      "Equation with variables on both sides",
      "Step-by-step solution with justification",
      "Verification",
      "Graphical evidence",
      "Interpretation",
    ],

    requiredEvidence: [
      "Written reasoning",
      "Algebraic model",
      "Units",
      "Desmos graph or Python verification",
      "Comparison before equality",
      "Comparison after equality",
    ],
  },

  growthIndicators: [
    "Recognizes comparison situations involving two changing quantities.",
    "Separates initial values from rates.",
    "Defines comparison variables accurately.",
    "Constructs two expressions independently.",
    "Creates equations with variables on both sides.",
    "Collects variable terms strategically.",
    "Justifies each transformation.",
    "Verifies both original expressions.",
    "Interprets equality as an intersection or break-even point.",
    "Creates original comparison models.",
  ],

  lumineryGuidance: {
    message:
      "When a problem compares two changing situations, do not begin by moving variables. First build one mathematical model for each situation.",

    recommendation:
      "Use the sequence: Understand → Filter → Define → Model A → Model B → Set Equal → Simplify → Solve → Verify → Compare.",

    prompt:
      "Can you explain what each side of your equation represents before you solve it?",

    coachingQuestions: [
      "What two situations are being compared?",
      "Which facts are relevant?",
      "What does the variable represent?",
      "What is the starting value for each situation?",
      "What is the rate for each situation?",
      "What expression represents Option A?",
      "What expression represents Option B?",
      "Why should the expressions be equal?",
      "Which variable term should you eliminate first?",
      "Do both original expressions produce the same result after substitution?",
      "What does the equality point mean in context?",
    ],

    confidence: 90,
  },

  summary: [
    "Variables on both sides often arise when two changing situations are compared.",
    "Model each situation independently before writing the comparison equation.",
    "Rates multiply the variable while initial values remain constants.",
    "Irrelevant information should not enter the mathematical model.",
    "Set the two expressions equal when the question asks when they have the same value.",
    "Simplify both sides before collecting variable terms.",
    "Use equality-preserving operations to move variable terms to one side.",
    "Verification should evaluate both original expressions.",
    "The solution often represents an intersection or break-even point.",
    "Comparison modeling supports real-world decision-making.",
  ],

  reflection: [
    "Why is it useful to model each option separately before setting them equal?",
    "How can you distinguish a rate from a starting value in a word problem?",
    "What does the solution of an equation with variables on both sides represent in a comparison situation?",
    "Why should you evaluate both original expressions when verifying?",
    "How is an algebraic equality point related to a graphical intersection?",
    "Create two pricing plans that become equal after 5 units.",
  ],

  previousLesson: {
    moduleNumber: 2,
    lessonNumber: 4,
    slug: "solving-multi-step-equations",
    title:
      "Solving Multi-Step Equations Through Complex Real-World Situations",
  },

  nextLesson: {
    moduleNumber: 2,
    lessonNumber: 6,
    slug: "solution-types",
    title:
      "One Solution, No Solution, or Infinitely Many Solutions",
  },
};

export default lesson05;