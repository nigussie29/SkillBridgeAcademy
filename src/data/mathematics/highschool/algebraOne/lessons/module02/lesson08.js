const lesson08 = {
  id: "algebra-one-module-02-lesson-08",
  slug: "module-2-equation-modeling-synthesis",

  courseId: "algebra-1",
  courseTitle: "Algebra I",

  moduleNumber: 2,
  moduleTitle: "Solving Linear Equations",
  lessonNumber: 8,

  title:
    "Module 2 Equation Modeling Synthesis",

  subtitle:
    "Integrate word-to-mathematics translation, equation solving, comparison modeling, solution classification, formula reasoning, verification, and mathematical creation.",

  duration: "80–100 minutes",
  level: "Foundation",
  status: "Available",

  essentialQuestion:
    "How can we use algebra to transform an unfamiliar real-world situation into a mathematical model, solve it logically, and defend our conclusion?",

  bigIdea:
    "Algebraic mastery means more than solving equations. A strong mathematical thinker can understand a situation, identify relevant quantities, define variables, construct a model, choose an appropriate strategy, justify transformations, verify results, interpret conclusions, critique incorrect reasoning, and create new mathematical situations.",

  whyThisLessonExists: {
    title: "From Equation Solver to Mathematical Creator",

    introduction:
      "Throughout Module 2, students have learned how equality, inverse operations, multi-step reasoning, variables on both sides, solution types, and formulas work. The deeper goal is to combine these ideas so students can solve unfamiliar problems without being told exactly what equation or procedure to use.",

    centralProblem:
      "When a problem does not tell us which equation to write or which strategy to use, how can we decide what mathematics is appropriate?",

    purpose:
      "This synthesis develops independent reasoning needed for higher mathematics, science, engineering, finance, programming, data science, research, and artificial intelligence.",
  },

  problemFirst: {
    title: "The SkillBridge Robotics Challenge",

    scenario:
      "A school robotics team is comparing two equipment suppliers for a new competition project. Supplier A charges a $45 setup fee plus $12 for each sensor kit. Supplier B charges a $75 setup fee plus $9 for each sensor kit. The team has 24 students, meets every Thursday, and uses blue storage containers. The advisor wants to know how many sensor kits would make the two suppliers cost the same, what that common cost would be, and which supplier is less expensive before and after that point.",

    questions: [
      "What is the main mathematical question?",
      "Which information is relevant?",
      "Which information is irrelevant?",
      "What should the variable represent?",
      "Write a cost expression for Supplier A.",
      "Write a cost expression for Supplier B.",
      "Why should the two expressions be set equal?",
      "Construct the equation independently.",
      "Solve the equation while justifying every transformation.",
      "Verify the solution in both original expressions.",
      "Determine the common cost.",
      "Which supplier is cheaper before the equality point?",
      "Which supplier is cheaper after the equality point?",
      "How could a graph verify your conclusion?",
      "Explain the final result in complete sentences.",
    ],

    expectedInsight:
      "Let k represent the number of sensor kits. Supplier A is 12k + 45 and Supplier B is 9k + 75. Setting them equal gives 12k + 45 = 9k + 75. Solving gives k = 10. Both suppliers cost $165 at 10 kits. Supplier A is cheaper before 10 kits; Supplier B is cheaper after 10 kits.",
  },

  learningObjectives: [
    "Translate unfamiliar multi-sentence situations into algebraic models.",
    "Distinguish relevant information from irrelevant information.",
    "Define variables clearly using context and units.",
    "Determine whether a problem requires a one-step, two-step, multi-step, comparison, solution-type, or literal-equation strategy.",
    "Use distribution and combine like terms when necessary.",
    "Solve equations with variables on one or both sides.",
    "Classify equations as having one solution, no solution, or infinitely many solutions.",
    "Rearrange formulas for a requested target variable.",
    "Justify every important mathematical transformation.",
    "Verify results symbolically, numerically, graphically, or computationally.",
    "Interpret answers in context.",
    "Critique incorrect mathematical models.",
    "Create original mathematical problems and models.",
  ],

  prerequisiteKnowledge: [
    "Balance principle",
    "Inverse operations",
    "One-step equations",
    "Two-step equations",
    "Distributive property",
    "Combining like terms",
    "Multi-step equations",
    "Variables on both sides",
    "One, none, and infinitely many solutions",
    "Literal equations",
    "Substitution",
    "Word-to-mathematics modeling",
  ],

  vocabulary: [
    {
      term: "Mathematical Model",
      definition:
        "A mathematical representation of relationships in a real situation.",
      example:
        "12k + 45 = 9k + 75",
    },

    {
      term: "Relevant Information",
      definition:
        "Information necessary for answering the mathematical question.",
      example:
        "Setup fees and cost per kit are relevant when comparing supplier costs.",
    },

    {
      term: "Irrelevant Information",
      definition:
        "Information that may be realistic but does not affect the requested mathematical relationship.",
      example:
        "Storage-container color does not affect supplier cost.",
    },

    {
      term: "Variable",
      definition:
        "A symbol representing an unknown or changing quantity.",
      example:
        "k = number of sensor kits",
    },

    {
      term: "Transformation",
      definition:
        "A mathematically valid change from one equivalent equation to another.",
      example:
        "Subtracting 9k from both sides.",
    },

    {
      term: "Verification",
      definition:
        "Using evidence to determine whether a proposed answer satisfies the original model.",
      example:
        "Substituting k = 10 into both supplier expressions.",
    },

    {
      term: "Interpretation",
      definition:
        "Explaining what a mathematical result means in the original situation.",
      example:
        "At 10 kits both suppliers cost $165.",
    },
  ],

  formulas: [
    {
      name: "One-Step Model",
      formula: "x + a = b or ax = b",
      meaning:
        "One inverse operation isolates the unknown.",
    },

    {
      name: "Two-Step Model",
      formula: "ax + b = c",
      meaning:
        "A changing quantity and fixed amount combine to produce a total.",
    },

    {
      name: "Multi-Step Model",
      formula: "a(x + b) + cx = d",
      meaning:
        "Grouped and repeated quantities may require distribution and combining like terms.",
    },

    {
      name: "Comparison Model",
      formula: "ax + b = cx + d",
      meaning:
        "Two changing situations are equal at the solution value.",
    },

    {
      name: "Literal Equation",
      formula: "relationship among several variables",
      meaning:
        "A formula may be rearranged depending on the requested target variable.",
    },
  ],

  problemSolvingFramework: {
    title:
      "SkillBridge Creator Framework",

    steps: [
      {
        number: 1,
        title: "Understand",
        description:
          "Read for meaning before looking for operations.",
      },

      {
        number: 2,
        title: "Filter",
        description:
          "Separate relevant information from distracting details.",
      },

      {
        number: 3,
        title: "Define",
        description:
          "Choose the unknown and define the variable with units.",
      },

      {
        number: 4,
        title: "Relate",
        description:
          "Determine how the quantities depend on one another.",
      },

      {
        number: 5,
        title: "Model",
        description:
          "Construct the equation or formula independently.",
      },

      {
        number: 6,
        title: "Simplify and Solve",
        description:
          "Distribute, combine like terms, and use equality-preserving transformations.",
      },

      {
        number: 7,
        title: "Justify",
        description:
          "Explain why each important transformation is mathematically valid.",
      },

      {
        number: 8,
        title: "Verify",
        description:
          "Check the result using the original model, graph, table, or computation.",
      },

      {
        number: 9,
        title: "Interpret",
        description:
          "Explain the result using the original context and units.",
      },

      {
        number: 10,
        title: "Create",
        description:
          "Design a new situation that uses the same mathematical structure.",
      },
    ],
  },

  workedExamples: [
    {
      title:
        "Comparison and Break-Even Modeling",

      problem:
        "Supplier A charges a $45 setup fee plus $12 for each sensor kit. Supplier B charges a $75 setup fee plus $9 per sensor kit. Supplier A ships in blue containers, and Supplier B has been operating for seven years. Determine when the total costs are equal and explain which supplier is less expensive before and after that point.",

      solutionSteps: [
        "Irrelevant: container color and company age.",
        "Let k represent sensor kits.",
        "Supplier A: 12k + 45.",
        "Supplier B: 9k + 75.",
        "Set equal: 12k + 45 = 9k + 75.",
        "Subtract 9k from both sides: 3k + 45 = 75.",
        "Subtract 45: 3k = 30.",
        "Divide by 3: k = 10.",
        "Verify A: 12(10) + 45 = 165.",
        "Verify B: 9(10) + 75 = 165.",
        "At fewer than 10 kits, Supplier A is cheaper.",
        "At more than 10 kits, Supplier B is cheaper.",
      ],

      answer:
        "Both suppliers cost $165 at 10 kits.",
    },

    {
      title:
        "Multi-Step Modeling with Irrelevant Information",

      problem:
        "A science teacher prepares 4 identical experiment stations. Each station receives the same number of sensors plus 3 batteries. A testing table receives twice the number of sensors used at one station. Altogether, 42 components are used. The experiment begins at 10:30 a.m., and 19 students are present. Determine the number of sensors at each station.",

      solutionSteps: [
        "Time and student count are irrelevant.",
        "Let s represent sensors per station.",
        "Four stations: 4(s + 3).",
        "Testing table: 2s.",
        "Equation: 4(s + 3) + 2s = 42.",
        "Distribute: 4s + 12 + 2s = 42.",
        "Combine like terms: 6s + 12 = 42.",
        "Subtract 12: 6s = 30.",
        "Divide by 6: s = 5.",
        "Verify: 4(5 + 3) + 2(5) = 42.",
      ],

      answer:
        "Each station receives 5 sensors.",
    },

    {
      title:
        "Recognizing No Solution",

      problem:
        "Two delivery services each charge $5 per mile. Service A also charges a $12 booking fee while Service B charges a $20 booking fee. Service A uses electric vehicles and Service B has 50 drivers. Determine whether the total costs can ever be equal.",

      solutionSteps: [
        "Vehicle type and driver count are irrelevant.",
        "Let m represent miles.",
        "Service A: 5m + 12.",
        "Service B: 5m + 20.",
        "Set equal: 5m + 12 = 5m + 20.",
        "Subtract 5m from both sides.",
        "12 = 20.",
        "The final statement is false.",
        "Therefore there is no solution.",
      ],

      answer:
        "The services never have equal total costs.",
    },

    {
      title:
        "Recognizing Infinitely Many Solutions",

      problem:
        "Program A describes its fee as 4x + 16. Program B describes its fee as 4(x + 4). The programs have different logos and are advertised on different websites. Determine when their costs are equal.",

      solutionSteps: [
        "Logo and website information are irrelevant.",
        "Set the expressions equal: 4x + 16 = 4(x + 4).",
        "Distribute: 4x + 16 = 4x + 16.",
        "Subtract 4x from both sides.",
        "16 = 16.",
        "The statement is always true.",
        "The expressions represent the same relationship.",
      ],

      answer:
        "The costs are equal for every allowable value of x.",
    },

    {
      title:
        "Literal Equation Modeling",

      problem:
        "A drone travels according to d = rt. Engineers know the required travel distance and expected flight time but need the average rate. The drone has six propellers and carries a camera. Rewrite the formula to calculate rate directly.",

      solutionSteps: [
        "Propeller count and camera information are irrelevant.",
        "Target variable: r.",
        "Start with d = rt.",
        "Divide both sides by t.",
        "r = d/t.",
        "Verify by multiplying both sides by t.",
        "Interpret: average rate equals distance divided by travel time.",
      ],

      answer:
        "r = d/t",
    },

    {
      title:
        "Critique a Faulty Mathematical Model",

      problem:
        "A gym charges a $25 registration fee plus $8 per month. A student writes 25m + 8 to represent the total cost after m months. Explain why the model is incorrect and create the correct expression.",

      solutionSteps: [
        "Identify what changes with months.",
        "The $8 monthly charge repeats m times, giving 8m.",
        "The $25 registration fee occurs once.",
        "The correct expression is 8m + 25.",
        "The student's model incorrectly multiplied the fixed fee by the number of months.",
      ],

      answer:
        "The correct model is 8m + 25.",
    },

    {
      title:
        "Detect an Unrealistic Result",

      problem:
        "A school packages identical whole-number calculators into 5 classroom kits. Each kit also contains 2 notebooks. An additional table contains 3 times the number of calculators in one kit. The inventory report says there are 59 total items. Determine the number of calculators in each kit and evaluate the result.",

      solutionSteps: [
        "Let c represent calculators per kit.",
        "Construct: 5(c + 2) + 3c = 59.",
        "Distribute: 5c + 10 + 3c = 59.",
        "Combine: 8c + 10 = 59.",
        "Subtract 10: 8c = 49.",
        "Divide: c = 49/8 = 6.125.",
        "Calculators are whole objects.",
        "Therefore the mathematical result indicates that the inventory data or model is inconsistent with the real situation.",
      ],

      answer:
        "The calculated value is unrealistic, so the original data should be investigated.",
    },
  ],

  interactiveExploration: {
    title:
      "Algebra Through Multiple Representations",

    description:
      "Use equations, tables, and graphs to investigate a comparison model.",

    instructions: [
      "Use Supplier A: y = 12x + 45.",
      "Use Supplier B: y = 9x + 75.",
      "Create a table for x = 0 through x = 15.",
      "Identify where the outputs become equal.",
      "Graph both relationships in Desmos.",
      "Locate the intersection.",
      "Solve the equation algebraically.",
      "Compare the table, graph, and algebraic evidence.",
      "Explain what each representation contributes to your understanding.",
    ],

    questions: [
      "Which representation makes the equality point easiest to see?",
      "Which representation gives the most exact reasoning?",
      "What does the graph tell you before and after the intersection?",
      "Why is using several representations valuable?",
    ],

    expectedDiscovery:
      "Tables, graphs, equations, and contextual descriptions can represent the same relationship and provide different forms of evidence.",
  },

  realWorldApplications: [
    {
      field: "Business",
      application:
        "Equation models support pricing, break-even analysis, inventory, and cost comparisons.",
    },

    {
      field: "Engineering",
      application:
        "Engineers translate specifications and constraints into equations before calculating unknown quantities.",
    },

    {
      field: "Finance",
      application:
        "Savings, loans, fees, and investments require identifying rates, fixed quantities, and unknowns.",
    },

    {
      field: "Data Analytics",
      application:
        "Analysts filter irrelevant information, define variables, create models, and validate results.",
    },

    {
      field: "Computer Science",
      application:
        "Programming requires translating a real problem into variables, rules, conditions, and algorithms.",
    },

    {
      field: "Artificial Intelligence",
      application:
        "AI reasoning requires extracting relevant information, constructing representations, evaluating constraints, and checking outputs.",
    },
  ],

  aiConnection: {
    title:
      "From Word Problems to AI Reasoning",

    explanation:
      "Many AI reasoning tasks resemble algebraic modeling. The system receives language, identifies important entities and quantities, filters irrelevant details, constructs a symbolic or numerical representation, performs reasoning, and evaluates whether the result is consistent.",

    example:
      "A pricing comparison problem can be transformed from natural language into two linear models and then into an equality equation.",

    uses: [
      "Natural language understanding",
      "Information extraction",
      "Symbolic reasoning",
      "Constraint solving",
      "Model validation",
      "Decision support",
    ],

    caution:
      "Fast computation does not compensate for a poor model. If the original relationship is represented incorrectly, the final answer may be mathematically precise but practically wrong.",

    reflectionQuestion:
      "Which stages of the SkillBridge Creator Framework are also necessary for an AI system solving a mathematical word problem?",
  },

  pythonLab: {
    title:
      "Build a Small Equation Comparison Program",

    objective:
      "Use Python to evaluate two real-world models and verify their equality point.",

    code: `# Supplier comparison

def supplier_a(kits):
    return 12 * kits + 45

def supplier_b(kits):
    return 9 * kits + 75

for kits in range(0, 16):
    cost_a = supplier_a(kits)
    cost_b = supplier_b(kits)

    print(
        kits,
        cost_a,
        cost_b,
        cost_a == cost_b
    )`,

    expectedOutput:
      "The equality test becomes True when kits = 10 because both suppliers cost $165.",

    investigation: [
      "Predict the equality point algebraically before running the program.",
      "Run the program and compare the evidence.",
      "Determine which supplier is cheaper for 5 kits.",
      "Determine which supplier is cheaper for 15 kits.",
      "Change the rates and starting fees.",
      "Create your own two-plan comparison.",
      "Solve it algebraically and verify it with Python.",
    ],

    reflectionQuestions: [
      "Why is algebra more efficient than checking many values manually?",
      "How does Python help verify the model?",
      "What happens if the original cost expressions are incorrect?",
      "How can computation and mathematical reasoning support one another?",
    ],
  },

  guidedPractice: [
    {
      question:
        "A tutoring program charges a $30 enrollment fee plus $18 per session. Another program charges a $50 enrollment fee plus $14 per session. Program A has blue classrooms and Program B has 12 instructors. Determine when the programs cost the same and explain which details are irrelevant.",
      answer:
        "Classroom color and instructor count are irrelevant. Let s be sessions. 18s + 30 = 14s + 50. Then 4s = 20, so s = 5. Both cost $120.",
      hint:
        "Model each program independently.",
    },

    {
      question:
        "A school owns 4 identical equipment kits. Each kit contains the same number of devices plus 2 chargers. A technology lab contains another 2 times the number of devices in one kit. There are 36 total items. The school has 600 students. Determine the number of devices in each kit.",
      answer:
        "Student population is irrelevant. Let d be devices per kit. 4(d + 2) + 2d = 36. Then 6d + 8 = 36, so 6d = 28 and d = 14/3. Since devices must be whole objects, the result suggests inconsistent data.",
      hint:
        "Do not automatically accept a fractional answer for counted objects.",
    },

    {
      question:
        "Two plans are modeled by 7x + 20 and 7x + 35. Determine the solution type and explain what it means.",
      answer:
        "7x + 20 = 7x + 35 simplifies to 20 = 35. No solution. The plans never have equal values.",
      hint:
        "Observe what remains after equal variable terms are removed.",
    },

    {
      question:
        "A formula is given by A = (1/2)bh. A designer knows A and b but needs h. Rearrange the formula and explain the reasoning.",
      answer:
        "Multiply both sides by 2: 2A = bh. Divide by b: h = 2A/b.",
      hint:
        "Choose the target variable first.",
    },
  ],

  independentPractice: [
    {
      question:
        "A music service charges $16 initially and $7 each month. Another service charges $40 initially and $4 each month. One service uses a green logo, and the other was founded in 2015. Determine when their total costs are equal, verify both expressions, and interpret the result.",
      answer:
        "Logo and founding year are irrelevant. 7m + 16 = 4m + 40. Then 3m = 24, so m = 8. Both cost $72.",
    },

    {
      question:
        "Five identical science kits each contain x sensors plus 3 batteries. A laboratory table contains 2x additional sensors. There are 61 total components. The lab opens at 7:30 a.m. Construct the equation, solve it, and evaluate whether the result is reasonable.",
      answer:
        "Opening time is irrelevant. 5(x + 3) + 2x = 61. Then 7x + 15 = 61, 7x = 46, x = 46/7. This is not a whole number, so the data should be questioned.",
    },

    {
      question:
        "Determine whether 3(x + 5) and 3x + 15 represent different relationships. Use algebra and interpretation.",
      answer:
        "They are equivalent for all x; infinitely many solutions.",
    },

    {
      question:
        "A vehicle relationship is d = rt. Rearrange the equation for t, explain each transformation, and create a two-sentence application using your new formula.",
      answer:
        "t = d/r. Applications will vary.",
    },

    {
      question:
        "A student models a $25 fixed fee plus $6 for each item as 25x + 6. Explain the modeling error and write the correct model.",
      answer:
        "The variable belongs to the repeated $6 charge. The correct expression is 6x + 25.",
    },

    {
      question:
        "Create a four-sentence original word problem requiring a multi-step equation. Include one irrelevant fact, define the variable, construct the equation, solve, verify, and interpret.",
      answer:
        "Answers will vary.",
    },

    {
      question:
        "Create two real-world models that have no solution when set equal. Explain why no equality point exists.",
      answer:
        "Answers will vary; equal rates with different initial values are one valid structure.",
    },

    {
      question:
        "Create two differently written expressions that are equivalent for every value of the variable and explain why.",
      answer:
        "Answers will vary, such as 4(x + 3) and 4x + 12.",
    },
  ],

  commonMistakes: [
    {
      mistake:
        "Beginning calculations before understanding the situation.",
      correction:
        "Read for meaning and identify the question first.",
    },

    {
      mistake:
        "Using every number in the problem.",
      correction:
        "Decide whether each quantity affects the requested relationship.",
    },

    {
      mistake:
        "Failing to define the variable.",
      correction:
        "State the unknown and its units before constructing the equation.",
    },

    {
      mistake:
        "Choosing operations based only on keywords.",
      correction:
        "Model relationships rather than individual words.",
    },

    {
      mistake:
        "Solving an incorrect equation accurately.",
      correction:
        "Verify that every term in the equation corresponds to the original situation.",
    },

    {
      mistake:
        "Giving only a numerical answer.",
      correction:
        "Interpret the solution using context and units.",
    },

    {
      mistake:
        "Accepting an unrealistic answer.",
      correction:
        "Evaluate whether the result is reasonable for the quantities being modeled.",
    },

    {
      mistake:
        "Assuming every equation has exactly one solution.",
      correction:
        "Inspect the simplified statement and classify the solution type.",
    },
  ],

  discussionQuestions: [
    "What is the difference between solving an equation and building an equation?",
    "Why is irrelevant information included in many real-world problems?",
    "Why is variable definition important?",
    "How can you determine whether an answer is mathematically correct but contextually unreasonable?",
    "What forms of evidence can verify a mathematical model?",
    "Why is constructing a correct model more important than calculating quickly?",
    "How does algebraic modeling connect to programming and artificial intelligence?",
    "What does it mean to become a mathematical creator rather than only an equation solver?",
  ],

  formativeAssessment: {
    passingScore: 7,

    questions: [
      {
        type: "model-and-solve",
        prompt:
          "Plan A charges $22 plus $8 per month. Plan B charges $46 plus $5 per month. Determine when their total costs are equal and verify the result.",
        answer:
          "8m + 22 = 5m + 46. Then 3m = 24, so m = 8. Both cost $86.",
      },

      {
        type: "multi-step-model",
        prompt:
          "Four identical project boxes each contain x devices plus 3 cables. A testing station contains 2x devices. There are 42 total items. Construct and solve the equation.",
        answer:
          "4(x + 3) + 2x = 42. Then 6x + 12 = 42, so x = 5.",
      },

      {
        type: "solution-type",
        prompt:
          "Classify 5x + 11 = 5x + 17.",
        answer:
          "No solution.",
      },

      {
        type: "solution-type",
        prompt:
          "Classify 3(x + 4) = 3x + 12.",
        answer:
          "Infinitely many solutions.",
      },

      {
        type: "literal-equation",
        prompt:
          "Solve P = 2L + 2W for L.",
        answer:
          "L = (P - 2W)/2.",
      },

      {
        type: "model-critique",
        prompt:
          "A subscription has a $40 startup fee and costs $6 per month. A student writes 40m + 6. Explain and correct the model.",
        answer:
          "The correct model is 6m + 40.",
      },

      {
        type: "reasoning",
        prompt:
          "Why should a solution be checked in the original model rather than only the final simplified equation?",
        sampleAnswer:
          "The original model represents the actual situation and helps confirm that the solution still makes sense in context.",
      },

      {
        type: "creation",
        prompt:
          "Create a realistic three- or four-sentence problem represented by 4(x + 2) + 3x = 50. Include one irrelevant detail and explain every part of the equation.",
        sampleAnswer:
          "Answers will vary.",
      },

      {
        type: "reflection",
        prompt:
          "Explain the SkillBridge process you would use when facing a word problem you have never seen before.",
        sampleAnswer:
          "Understand, filter, define, relate, model, simplify, solve, justify, verify, interpret, and create.",
      },
    ],
  },

  researchExtension: {
    title:
      "Real-World Equation Modeling Investigation",

    description:
      "Investigate a real system containing changing quantities, fixed quantities, comparisons, formulas, or constraints.",

    researchQuestion:
      "How can algebra transform an authentic real-world situation into a model that supports explanation and decision-making?",

    applicationOptions: [
      "Transportation",
      "Business pricing",
      "Agriculture",
      "Energy use",
      "Education",
      "Engineering",
      "Personal finance",
      "Technology",
      "Sports",
      "Community projects",
    ],

    task:
      "Describe the system in at least four sentences, identify relevant and irrelevant information, define variables, construct an equation or formula, solve or analyze the model, verify the result using another representation, and communicate your conclusion.",

    requiredEvidence: [
      "Original situation",
      "Relevant information",
      "Irrelevant information",
      "Variable definitions",
      "Mathematical model",
      "Reasoning",
      "Verification",
      "Interpretation",
      "Limitations of the model",
    ],
  },

  portfolioArtifact: {
    title:
      "Module 2 Mathematical Modeling Mastery Project",

    description:
      "Create an original real-world investigation demonstrating that you can move independently from language to mathematics to evidence-based conclusions.",

    requiredSections: [
      "Original multi-sentence situation",
      "Question to investigate",
      "Relevant information",
      "Irrelevant information",
      "Variable definitions",
      "Relationship analysis",
      "Equation or formula construction",
      "Simplification",
      "Step-by-step solution",
      "Transformation justifications",
      "Verification",
      "Contextual interpretation",
      "Model limitations",
      "New problem created from the same mathematical structure",
    ],

    requiredEvidence: [
      "Written reasoning",
      "Algebraic work",
      "Correct units",
      "Table, graph, diagram, Desmos, or Python evidence",
      "Reflection on strategy",
    ],
  },

  growthIndicators: [
    "Reads unfamiliar problems for meaning.",
    "Distinguishes useful information from distractions.",
    "Defines variables independently.",
    "Constructs equations from relationships.",
    "Chooses appropriate solving strategies.",
    "Uses distribution and combines like terms correctly.",
    "Solves equations with variables on one or both sides.",
    "Recognizes different solution types.",
    "Rearranges formulas for target variables.",
    "Justifies algebraic transformations.",
    "Verifies conclusions using multiple forms of evidence.",
    "Interprets mathematical results in context.",
    "Critiques incorrect models.",
    "Creates original mathematical problems.",
  ],

  lumineryGuidance: {
    message:
      "The strongest mathematician is not the student who calculates fastest. It is the student who can understand an unfamiliar situation, construct a meaningful model, defend the reasoning, and use the mathematics to create something new.",

    recommendation:
      "When a problem feels unfamiliar, return to the Creator Framework instead of searching for a memorized formula.",

    prompt:
      "Can you explain how you moved from the original words to your mathematical model and why every quantity in your equation belongs there?",

    coachingQuestions: [
      "What is actually happening?",
      "What question are you trying to answer?",
      "Which information matters?",
      "Which information does not matter?",
      "What quantity is unknown?",
      "What should your variable represent?",
      "How are the quantities related?",
      "What model represents that relationship?",
      "Do you need distribution or combining like terms?",
      "What solution strategy fits the equation?",
      "Why is each transformation valid?",
      "How can you verify the conclusion?",
      "Does the answer make sense?",
      "Can you create another situation with the same mathematical structure?",
    ],

    confidence: 95,
  },

  summary: [
    "Algebra begins with understanding relationships, not manipulating symbols.",
    "Relevant information must be separated from irrelevant information.",
    "Variables should be defined clearly before models are constructed.",
    "Equations should represent relationships in the original situation.",
    "Distribution and combining like terms reveal equation structure.",
    "Equality-preserving transformations must be justified.",
    "Equations may have one solution, no solution, or infinitely many solutions.",
    "Literal equations can be rearranged for different target variables.",
    "Verification connects the mathematical result back to the original model.",
    "Interpretation gives mathematical answers real meaning.",
    "A mathematically correct result may still be unreasonable in context.",
    "Tables, graphs, algebra, and computation provide complementary evidence.",
    "Creative mathematical thinkers can critique and construct models.",
  ],

  reflection: [
    "How has your approach to word problems changed during Module 2?",
    "Which part of the Creator Framework is most challenging for you?",
    "Why is constructing an equation often harder than solving it?",
    "How can irrelevant information affect mathematical reasoning?",
    "Why should a mathematically correct answer still be evaluated for reasonableness?",
    "How are algebraic modeling and programming similar?",
    "How might the skills in this module be useful in AI or data science?",
    "Create one original problem that demonstrates your strongest Module 2 skill.",
  ],

  previousLesson: {
    moduleNumber: 2,
    lessonNumber: 7,
    slug: "literal-equations-and-formulas",
    title:
      "Literal Equations and Formulas Through Real-World Modeling",
  },

  nextLesson: null,
};

export default lesson08;