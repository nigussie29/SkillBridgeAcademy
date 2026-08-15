const lesson04 = {
  id: "algebra-one-module-02-lesson-04",
  slug: "solving-multi-step-equations",

  courseId: "algebra-1",
  courseTitle: "Algebra I",

  moduleNumber: 2,
  moduleTitle: "Solving Linear Equations",
  lessonNumber: 4,

  title:
    "Solving Multi-Step Equations Through Complex Real-World Situations",

  subtitle:
    "Translate complex situations into equations, simplify strategically, justify every transformation, and interpret solutions in context.",

  duration: "70–90 minutes",
  level: "Foundation",
  status: "Available",

  essentialQuestion:
    "How can we organize information from a complex situation, build the correct equation, and justify every step needed to solve it?",

  bigIdea:
    "Strong algebra students do more than manipulate symbols. They decide which information matters, define the unknown, construct a mathematical model, simplify its structure, solve logically, and verify that the result makes sense in the original situation.",

  whyThisLessonExists: {
    title: "From Equation Solvers to Mathematical Modelers",

    introduction:
      "Real problems rarely arrive as clean equations. They arrive as stories, data, measurements, prices, constraints, and sometimes information that is not needed. Mathematical thinkers must decide what matters before calculating.",

    centralProblem:
      "How can we turn a complicated multi-sentence situation into a correct mathematical model without being distracted by irrelevant information?",

    purpose:
      "This lesson develops reasoning used in engineering, business, computer science, finance, research, data analysis, and artificial intelligence.",
  },

  problemFirst: {
    title: "The Robotics Competition Supply Problem",

    scenario:
      "A robotics club is preparing supply kits for a regional competition. Each of 3 teams receives the same number of sensor packs plus 4 additional practice packs. The testing laboratory also reserves twice the number of sensor packs assigned to one team. Altogether, the club uses 37 packs. Eighteen students will attend the competition, which begins Saturday morning.",

    questions: [
      "Which information is necessary to determine the number of sensor packs?",
      "Which information is irrelevant?",
      "What quantity should the variable represent?",
      "How can the supplies for one team be represented?",
      "How can the supplies for all 3 teams be represented?",
      "How should the laboratory packs be represented?",
      "Construct one equation representing the entire situation.",
      "Where must the distributive property be used?",
      "Which terms can be combined?",
      "Solve the equation and justify every transformation.",
      "Verify the solution in the original model.",
      "Interpret the answer using a complete sentence.",
    ],

    expectedInsight:
      "Let x represent the number of sensor packs assigned to each team. The relevant model is 3(x + 4) + 2x = 37. The facts that 18 students attend and the competition begins Saturday are irrelevant. Distribution and combining like terms produce 5x + 12 = 37, so x = 5.",
  },

  learningObjectives: [
    "Extract relevant mathematical information from multi-sentence situations.",
    "Identify information that is irrelevant to the mathematical question.",
    "Choose and clearly define an appropriate variable.",
    "Construct multi-step linear equations independently.",
    "Use the distributive property when simplifying equations.",
    "Combine like terms before isolating a variable.",
    "Justify every algebraic transformation.",
    "Solve multi-step equations while preserving equality.",
    "Verify solutions using the original equation.",
    "Interpret solutions using appropriate units and context.",
    "Critique incorrect mathematical models.",
    "Create original multi-step word problems.",
  ],

  prerequisiteKnowledge: [
    "Variables and expressions",
    "Distributive property",
    "Combining like terms",
    "Order of operations",
    "Balance principle",
    "Inverse operations",
    "One-step equations",
    "Two-step equations",
    "Substitution",
  ],

  vocabulary: [
    {
      term: "Relevant Information",
      definition:
        "Information needed to answer the mathematical question.",
      example:
        "The number of teams and total number of packs are relevant to the robotics problem.",
    },

    {
      term: "Irrelevant Information",
      definition:
        "Information included in a situation that is not needed to solve the specific mathematical question.",
      example:
        "The day of the robotics competition does not affect the number of sensor packs.",
    },

    {
      term: "Distributive Property",
      definition:
        "A property used to multiply a factor by every term inside parentheses.",
      example:
        "3(x + 4) = 3x + 12",
    },

    {
      term: "Like Terms",
      definition:
        "Terms containing the same variable raised to the same power.",
      example:
        "3x and 2x are like terms.",
    },

    {
      term: "Mathematical Model",
      definition:
        "A mathematical representation of the important relationships in a real situation.",
      example:
        "3(x + 4) + 2x = 37",
    },

    {
      term: "Justification",
      definition:
        "An explanation of why a mathematical transformation is valid.",
      example:
        "Subtracting 12 from both sides preserves equality.",
    },

    {
      term: "Verification",
      definition:
        "Checking whether a proposed solution satisfies the original equation and context.",
      example:
        "Substitute x = 5 into 3(x + 4) + 2x = 37.",
    },
  ],

  formulas: [
    {
      name: "Distributive Property",
      formula: "a(b + c) = ab + ac",
      meaning:
        "Multiply the outside factor by every term inside the parentheses.",
    },

    {
      name: "Combining Like Terms",
      formula: "ax + bx = (a + b)x",
      meaning:
        "Terms representing the same variable quantity can be combined.",
    },

    {
      name: "Multi-Step Model",
      formula: "a(x + b) + cx = d",
      meaning:
        "Many complex situations may contain grouped quantities, repeated quantities, and totals.",
    },
  ],

  problemSolvingFramework: {
    title: "SkillBridge 7-Step Problem-Solving Framework",

    steps: [
      {
        number: 1,
        title: "Combine Like Terms Before Solving",
        description:
          "After translating and distributing, identify expressions representing the same type of quantity and simplify them.",
      },

      {
        number: 2,
        title: "Use the Distributive Property",
        description:
          "When a quantity outside parentheses applies to everything inside, distribute before continuing.",
      },

      {
        number: 3,
        title: "Identify Irrelevant Information",
        description:
          "Decide which facts actually affect the mathematical relationship and which facts are distractions.",
      },

      {
        number: 4,
        title: "Choose the Correct Variable",
        description:
          "State exactly what the unknown represents, including appropriate units.",
      },

      {
        number: 5,
        title: "Construct the Equation Independently",
        description:
          "Build the mathematical relationship from the words rather than waiting for an equation to be provided.",
      },

      {
        number: 6,
        title: "Justify Each Transformation",
        description:
          "Explain why distribution, combination, addition, subtraction, multiplication, or division is mathematically valid.",
      },

      {
        number: 7,
        title: "Interpret and Verify the Result",
        description:
          "Substitute into the original model and state what the answer means in the real situation.",
      },
    ],
  },

  workedExamples: [
    {
      title: "Robotics Supply Kits",

      problem:
        "A robotics club prepares equipment for 3 competition teams. Each team receives the same number of sensor packs plus 4 practice packs, while the laboratory receives twice the number of sensor packs assigned to one team. The club uses 37 packs altogether. The competition is 90 miles away, and 18 students plan to attend. How many sensor packs does each team receive?",

      solutionSteps: [
        "STEP 1 — Identify relevant information: 3 teams, x sensor packs per team, 4 practice packs per team, 2x laboratory packs, and 37 total packs.",
        "STEP 2 — Identify irrelevant information: the 90-mile distance and 18 students do not determine the number of packs.",
        "STEP 3 — Define the variable: let x represent the number of sensor packs each team receives.",
        "STEP 4 — Construct the equation: 3(x + 4) + 2x = 37.",
        "STEP 5 — Use the distributive property: 3x + 12 + 2x = 37.",
        "STEP 6 — Combine like terms: 5x + 12 = 37.",
        "STEP 7 — Subtract 12 from both sides because equality must be preserved: 5x = 25.",
        "Divide both sides by 5 to isolate x: x = 5.",
        "Verify: 3(5 + 4) + 2(5) = 27 + 10 = 37.",
        "Interpret: each team receives 5 sensor packs.",
      ],

      answer:
        "Each team receives 5 sensor packs.",
    },

    {
      title: "Community Garden Project",

      problem:
        "A community garden creates 4 identical planting areas. Each area contains the same number of vegetable plants plus 3 flower plants. The entrance section contains another 2 times the number of vegetable plants in one area. Altogether, 66 plants are used. The garden opens at 8:00 a.m. and has 12 volunteers. How many vegetable plants are placed in each planting area?",

      solutionSteps: [
        "Relevant information: 4 planting areas, x vegetable plants per area, 3 flowers per area, 2x entrance plants, and 66 plants total.",
        "Irrelevant information: opening time and number of volunteers.",
        "Let x represent vegetable plants in each planting area.",
        "Construct the model: 4(x + 3) + 2x = 66.",
        "Distribute: 4x + 12 + 2x = 66.",
        "Combine like terms: 6x + 12 = 66.",
        "Subtract 12 from both sides: 6x = 54.",
        "Divide by 6: x = 9.",
        "Verify: 4(9 + 3) + 2(9) = 48 + 18 = 66.",
      ],

      answer:
        "Each planting area contains 9 vegetable plants.",
    },

    {
      title: "School Fundraiser Packages",

      problem:
        "The student council prepares 5 identical fundraising packages. Each package contains the same number of coupon books plus 2 promotional items. Another table contains 3 times the number of coupon books found in one package. Altogether, 59 items are prepared. The event lasts two hours, and the school mascot will attend. How many coupon books are in each package?",

      solutionSteps: [
        "Ignore the event duration and mascot because they do not affect the item count.",
        "Let x represent coupon books in one package.",
        "Five packages contribute 5(x + 2).",
        "The additional table contributes 3x.",
        "Construct: 5(x + 2) + 3x = 59.",
        "Distribute: 5x + 10 + 3x = 59.",
        "Combine like terms: 8x + 10 = 59.",
        "Subtract 10: 8x = 49.",
        "This produces x = 49/8 = 6.125.",
        "Since coupon books must be whole objects, the result is unrealistic.",
        "Therefore either the data or model should be questioned.",
      ],

      answer:
        "The information produces an unrealistic result, demonstrating why students must evaluate whether a model makes sense instead of accepting every calculated answer.",
    },

    {
      title: "Training Program Costs",

      problem:
        "A professional training center enrolls 4 employees in identical programs. Each employee's cost includes the same training fee plus a $25 materials fee. The company also pays twice one employee's training fee for consulting services. The entire invoice is $700. The training takes place on Tuesday and includes lunch. What is the training fee for one employee?",

      solutionSteps: [
        "Relevant information: 4 employees, x training fee, $25 materials per employee, 2x consulting cost, $700 total.",
        "Irrelevant information: Tuesday and lunch.",
        "Let x represent one employee's training fee.",
        "Construct: 4(x + 25) + 2x = 700.",
        "Distribute: 4x + 100 + 2x = 700.",
        "Combine like terms: 6x + 100 = 700.",
        "Subtract 100 from both sides: 6x = 600.",
        "Divide by 6: x = 100.",
        "Verify: 4(100 + 25) + 2(100) = 500 + 200 = 700.",
      ],

      answer:
        "The training fee is $100 per employee.",
    },

    {
      title: "Critique an Incorrect Model",

      problem:
        "A theater sells 4 identical family packages. Each package contains the same number of tickets plus 2 meal vouchers. The theater also gives away twice the number of tickets contained in one package. There are 52 tickets and vouchers altogether. A student writes the equation 4x + 2 + 2x = 52. Is the student's model correct?",

      solutionSteps: [
        "Define x as the number of tickets in one family package.",
        "Each package contains x tickets plus 2 vouchers.",
        "Because there are 4 packages, the complete package expression must be multiplied by 4.",
        "The correct representation is 4(x + 2), not 4x + 2.",
        "The giveaway contributes 2x.",
        "The correct equation is 4(x + 2) + 2x = 52.",
        "Distribute: 4x + 8 + 2x = 52.",
        "Combine: 6x + 8 = 52.",
        "Subtract 8: 6x = 44.",
        "x = 22/3.",
        "The non-whole result suggests the scenario may need revised data.",
      ],

      answer:
        "The student's equation is incorrect because the 2 meal vouchers occur in every package and must also be multiplied by 4.",
    },
  ],

  interactiveExploration: {
    title: "Words → Equation → Simplification → Graph",

    description:
      "Use Desmos to compare the original multi-step model with its simplified equivalent equation.",

    instructions: [
      "Use the robotics model 3(x + 4) + 2x = 37.",
      "Simplify it by hand to 5x + 12 = 37.",
      "Graph y = 3(x + 4) + 2x.",
      "Graph y = 5x + 12.",
      "Observe the two graphs.",
      "Explain why they overlap.",
      "Graph y = 37.",
      "Locate the intersection.",
      "Compare the x-coordinate with the algebraic solution.",
      "Create another equivalent pair of expressions and test them graphically.",
    ],

    questions: [
      "Why do the original and simplified expressions produce the same graph?",
      "What does combining like terms preserve?",
      "How can a graph provide evidence that two expressions are equivalent?",
      "What does the intersection with y = 37 represent?",
    ],

    expectedDiscovery:
      "Distribution and combining like terms change the appearance of an expression without changing its value.",
  },

  realWorldApplications: [
    {
      field: "Engineering",
      application:
        "Engineering models often contain grouped quantities that must be expanded and simplified before unknown values can be calculated.",
    },

    {
      field: "Business",
      application:
        "Total cost models may contain several groups of fixed and variable expenses that must be combined.",
    },

    {
      field: "Construction",
      application:
        "Repeated sections of a structure can produce expressions involving distribution and combined measurements.",
    },

    {
      field: "Data Analytics",
      application:
        "Analysts must distinguish useful variables from information that does not contribute to a model.",
    },

    {
      field: "Artificial Intelligence",
      application:
        "AI reasoning systems must determine which details in a prompt are relevant before constructing a mathematical representation.",
    },
  ],

  aiConnection: {
    title: "Relevant Information and AI Reasoning",

    explanation:
      "A major challenge in artificial intelligence is determining which information in a prompt actually matters. Mathematical word problems require the same skill. A successful solver must extract quantities, ignore distractions, identify relationships, and construct an appropriate symbolic model.",

    example:
      "If a problem includes price, quantity, total cost, weather, and the color of a product, an AI system must recognize that weather and color may not affect the requested calculation.",

    uses: [
      "Natural language understanding",
      "Information extraction",
      "Feature selection",
      "Symbolic reasoning",
      "Problem decomposition",
      "Model validation",
    ],

    caution:
      "Using every number in a problem simply because it appears in the text can produce an incorrect model.",

    reflectionQuestion:
      "How is identifying irrelevant information in a word problem similar to selecting useful features in a data or AI model?",
  },

  pythonLab: {
    title: "Verify a Multi-Step Model with Python",

    objective:
      "Represent a complex situation computationally and verify the algebraic solution.",

    code: `# Robotics supply problem
# 3 teams each receive x sensor packs + 4 practice packs.
# The lab receives 2x sensor packs.
# Total = 37 packs.

x = 5

team_packs = 3 * (x + 4)
lab_packs = 2 * x
total = team_packs + lab_packs

print("Team packs:", team_packs)
print("Lab packs:", lab_packs)
print("Total packs:", total)
print("Model verified:", total == 37)`,

    expectedOutput: `Team packs: 27
Lab packs: 10
Total packs: 37
Model verified: True`,

    investigation: [
      "Explain what every Python variable represents.",
      "Change x to another value and observe the total.",
      "Modify the total target and determine a new value of x.",
      "Create your own 3-sentence multi-step situation.",
      "Represent your situation using Python variables.",
      "Verify your algebraic solution computationally.",
    ],

    reflectionQuestions: [
      "Why must the mathematical model be correct before writing code?",
      "How does Python help verify the solution?",
      "Which information from the original problem did not appear in the code, and why?",
    ],
  },

  guidedPractice: [
    {
      question:
        "A science club prepares 3 identical experiment kits. Each kit contains the same number of sensors plus 5 batteries. The demonstration table contains another 2 times the number of sensors in one kit. Altogether, 40 items are used. The experiment is scheduled for Friday afternoon. Determine the number of sensors in each kit using the SkillBridge 7-step framework.",
      answer:
        "Friday is irrelevant. Let x be sensors per kit. 3(x + 5) + 2x = 40. Distribute: 3x + 15 + 2x = 40. Combine: 5x + 15 = 40. Subtract 15: 5x = 25. Divide by 5: x = 5. Each kit contains 5 sensors.",
      hint:
        "Decide whether Friday affects the item count.",
    },

    {
      question:
        "A school buys 4 identical classroom supply boxes. Each box contains the same number of notebooks plus 6 pencils. An additional storage cabinet contains 2 times the number of notebooks in one box. There are 60 items altogether. The boxes are blue and were delivered at 9:00 a.m. Determine the number of notebooks per box.",
      answer:
        "Color and delivery time are irrelevant. Let n be notebooks per box. 4(n + 6) + 2n = 60. Then 4n + 24 + 2n = 60, 6n + 24 = 60, 6n = 36, n = 6.",
      hint:
        "The 6 pencils occur in every box.",
    },

    {
      question:
        "A fitness center has 5 identical training groups. Each group uses the same number of resistance bands plus 2 exercise mats. The instructor station uses 3 times the number of bands in one group. Altogether, 66 pieces of equipment are used. Twenty-five people registered for the program. Determine the number of bands in each group.",
      answer:
        "Registration count is irrelevant. Let b be bands per group. 5(b + 2) + 3b = 66. Then 5b + 10 + 3b = 66, 8b + 10 = 66, 8b = 56, b = 7.",
      hint:
        "Separate relevant equipment information from attendance information.",
    },
  ],

  independentPractice: [
    {
      question:
        "A robotics class builds 4 identical mobile robots. Each robot requires the same number of sensors plus 3 spare connectors. The teacher keeps another 2 times the number of sensors used by one robot for testing. Altogether, 42 components are counted. The robots are black and silver, and the class meets for 50 minutes. Determine how many sensors are used by each robot.",
      answer:
        "Color and class length are irrelevant. Let s be sensors per robot. 4(s + 3) + 2s = 42. Then 4s + 12 + 2s = 42, 6s + 12 = 42, 6s = 30, s = 5.",
    },

    {
      question:
        "A community center prepares 6 identical food packages. Each package contains the same number of meal containers plus 2 drinks. The staff table contains another 3 times the number of meal containers in one package. There are 75 items altogether. The event begins at noon and has music playing. Determine the number of meal containers per package.",
      answer:
        "Time and music are irrelevant. Let m be meal containers per package. 6(m + 2) + 3m = 75. Then 6m + 12 + 3m = 75, 9m + 12 = 75, 9m = 63, m = 7.",
    },

    {
      question:
        "A technology company prepares 3 identical employee kits. Each kit contains the same number of devices plus 8 accessories. The testing department keeps another 4 times the number of devices in one kit. Altogether, 80 items are distributed. The company has 200 employees. Determine the number of devices in each kit.",
      answer:
        "The total company employment is irrelevant. Let d be devices per kit. 3(d + 8) + 4d = 80. Then 3d + 24 + 4d = 80, 7d + 24 = 80, 7d = 56, d = 8.",
    },

    {
      question:
        "A student writes 4x + 3 + 2x = 45 for a situation involving 4 groups where every group contains x objects plus 3 extras. Explain the modeling error and construct the correct equation.",
      answer:
        "The 3 extras occur in each of the 4 groups. The correct grouped expression is 4(x + 3). If there are also 2x additional objects, the correct equation is 4(x + 3) + 2x = 45.",
    },

    {
      question:
        "Create your own three- or four-sentence situation represented by 3(x + 5) + 2x = 40. Include at least one irrelevant detail. Define x and explain every part of the equation.",
      answer:
        "Answers will vary but must correctly map the story to the equation.",
    },
  ],

  commonMistakes: [
    {
      mistake:
        "Using every number that appears in the story.",
      correction:
        "Use only information that contributes to the requested relationship.",
    },

    {
      mistake:
        "Failing to define the variable.",
      correction:
        "State exactly what the variable represents before constructing the equation.",
    },

    {
      mistake:
        "Writing 3x + 4 instead of 3(x + 4) when every group contains x + 4 items.",
      correction:
        "Use parentheses to represent the complete contents of one repeated group.",
    },

    {
      mistake:
        "Distributing only to the first term.",
      correction:
        "Multiply the outside factor by every term inside the parentheses.",
    },

    {
      mistake:
        "Combining unlike terms.",
      correction:
        "Only terms representing the same variable structure can be combined.",
    },

    {
      mistake:
        "Performing algebraic transformations without explaining why.",
      correction:
        "Connect each transformation to a mathematical property or the balance principle.",
    },

    {
      mistake:
        "Accepting an unrealistic decimal or fractional result without considering context.",
      correction:
        "Ask whether the solution makes sense for the objects or quantities being counted.",
    },
  ],

  discussionQuestions: [
    "Why might a real-world problem include information that is not needed?",
    "How can you decide whether a number is relevant?",
    "Why is defining the variable before writing the equation important?",
    "When do parentheses naturally appear in a word problem?",
    "Why must we distribute before combining certain terms?",
    "How can a mathematically correct calculation still produce a poor real-world answer?",
    "Why is model validation important in mathematics, science, and AI?",
    "How would you explain the difference between solving an equation and building an equation?",
  ],

  formativeAssessment: {
    passingScore: 5,

    questions: [
      {
        type: "model-and-solve",
        prompt:
          "A STEM program prepares 4 identical project boxes. Each box contains the same number of sensors plus 2 batteries. A demonstration table contains twice the number of sensors in one box. There are 38 items altogether. The program begins Monday and has 16 students. Determine the number of sensors in each box and identify irrelevant information.",
        answer:
          "Monday and 16 students are irrelevant. Let s be sensors per box. 4(s + 2) + 2s = 38. Then 4s + 8 + 2s = 38, 6s = 30, s = 5.",
      },

      {
        type: "model-and-solve",
        prompt:
          "A charity prepares 5 identical donation packages. Each package contains the same number of books plus 3 notebooks. A separate table contains 2 times the number of books in one package. Altogether there are 64 items. Determine the number of books in one package.",
        answer:
          "Let b be books per package. 5(b + 3) + 2b = 64. Then 5b + 15 + 2b = 64, 7b = 49, b = 7.",
      },

      {
        type: "model-critique",
        prompt:
          "A student models 3 groups containing x items plus 4 extras per group as 3x + 4. Explain the error.",
        answer:
          "The 4 extras occur in every group, so the correct expression is 3(x + 4), which distributes to 3x + 12.",
      },

      {
        type: "reasoning",
        prompt:
          "Why should irrelevant information be identified before building an equation?",
        sampleAnswer:
          "Including irrelevant quantities can distort the mathematical relationship and lead to an incorrect model.",
      },

      {
        type: "verification",
        prompt:
          "A model simplifies to 5x + 10 = 45. A student obtains x = 7. Verify the solution and explain what verification proves.",
        answer:
          "5(7) + 10 = 45, so the solution is correct for the equation. Verification confirms that the value satisfies the mathematical model.",
      },

      {
        type: "creation",
        prompt:
          "Create a realistic multi-sentence problem represented by 4(x + 2) + 3x = 50. Include one irrelevant fact and identify it.",
        sampleAnswer:
          "Answers will vary. The student must correctly explain every quantity and identify the irrelevant detail.",
      },
    ],
  },

  researchExtension: {
    title: "Complex Modeling in the Real World",

    description:
      "Investigate a real system containing repeated groups, fixed quantities, and additional quantities.",

    researchQuestion:
      "How can a complicated real-world description be simplified into a mathematical model containing only relevant information?",

    applicationOptions: [
      "Manufacturing",
      "Event planning",
      "Inventory management",
      "Transportation",
      "Subscription pricing",
      "Engineering",
      "School budgeting",
      "Agriculture",
    ],

    task:
      "Describe the system in at least four sentences, identify relevant and irrelevant information, define variables, construct an equation, simplify it, solve it, and evaluate the reasonableness of the result.",

    requiredEvidence: [
      "Original situation",
      "Relevant information",
      "Irrelevant information",
      "Variable definition",
      "Equation construction",
      "Distribution",
      "Combination of like terms",
      "Solving steps",
      "Verification",
      "Interpretation",
    ],
  },

  portfolioArtifact: {
    title: "Complex Word-to-Math Modeling Challenge",

    description:
      "Create a polished mathematical investigation demonstrating all seven stages of the SkillBridge problem-solving framework.",

    requiredSections: [
      "Multi-sentence original problem",
      "Relevant information",
      "Irrelevant information",
      "Variable definition",
      "Equation construction",
      "Distributive-property reasoning",
      "Combining-like-terms reasoning",
      "Equation-solving justification",
      "Verification",
      "Contextual interpretation",
    ],

    requiredEvidence: [
      "Written explanation",
      "Algebraic model",
      "Complete calculations",
      "Units",
      "Desmos, table, diagram, or Python verification",
      "Reflection",
    ],
  },

  growthIndicators: [
    "Separates relevant information from distractions.",
    "Defines the unknown precisely.",
    "Constructs equations without being given the model.",
    "Recognizes when parentheses are required.",
    "Uses the distributive property accurately.",
    "Combines like terms correctly.",
    "Justifies algebraic transformations.",
    "Checks solutions using original models.",
    "Evaluates whether answers are reasonable.",
    "Creates original mathematical situations.",
  ],

  lumineryGuidance: {
    message:
      "Complex problems become manageable when you organize the story before touching the algebra.",

    recommendation:
      "Use the seven-question check: What matters? What does not matter? What is unknown? How are the quantities grouped? What equation represents them? Why is each transformation valid? Does the final answer make sense?",

    prompt:
      "Can you explain where every term in your equation came from and why every other detail was either used or rejected?",

    coachingQuestions: [
      "Which facts directly affect the quantity you are trying to find?",
      "Which facts are distractions?",
      "What does your variable represent?",
      "Are any quantities repeated as complete groups?",
      "Do you need parentheses?",
      "Where should you distribute?",
      "Which terms are like terms?",
      "Why is your next equation transformation valid?",
      "How will you verify the result?",
      "Does your answer make sense in context?",
    ],

    confidence: 88,
  },

  summary: [
    "Complex word problems should be organized before calculations begin.",
    "Not every number in a problem is mathematically relevant.",
    "Variables should be defined clearly before equations are constructed.",
    "Repeated groups often require parentheses.",
    "The distributive property expands grouped expressions.",
    "Like terms should be combined before isolating the variable.",
    "Each algebraic transformation should be justified.",
    "Solutions should be verified in the original model.",
    "Answers should be interpreted with units and context.",
    "Mathematical modeling includes evaluating whether an answer is realistic.",
    "Creative mathematicians construct and critique models instead of merely solving provided equations.",
  ],

  reflection: [
    "Which of the seven problem-solving steps is most important to you and why?",
    "Why can irrelevant information make a word problem difficult?",
    "How do parentheses communicate structure in a real-world situation?",
    "Why should students explain transformations instead of simply writing algebraic steps?",
    "What can an unrealistic answer tell you about a mathematical model?",
    "Create a four-sentence problem that requires distribution and combining like terms.",
    "Include one irrelevant detail and explain why it is irrelevant.",
  ],

  previousLesson: {
    moduleNumber: 2,
    lessonNumber: 3,
    slug: "solving-two-step-equations",
    title:
      "Solving Two-Step Equations Through Real-World Modeling",
  },

  nextLesson: {
    moduleNumber: 2,
    lessonNumber: 5,
    slug: "variables-on-both-sides",
    title: "Variables on Both Sides",
  },
};

export default lesson04;