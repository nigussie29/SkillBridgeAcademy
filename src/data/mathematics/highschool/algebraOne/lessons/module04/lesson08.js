const lesson08 = {
  id: "algebra-one-module-04-lesson-08",
  slug: "module-4-function-modeling-synthesis",

  courseId: "algebra-1",
  courseTitle: "Algebra I",

  moduleNumber: 4,
  moduleTitle: "Functions and Relations",
  lessonNumber: 8,

  title:
    "Module 4 Function Modeling Synthesis & Creator Project",

  subtitle:
    "Synthesize relations, functions, notation, domain and range, multiple representations, rate of change, modeling, validation, coding, and interpretation through an original creator project.",

  duration: "100–120 minutes",
  level: "Intermediate",
  status: "Available",

  essentialQuestion:
    "Can I take a real situation and independently build, test, represent, interpret, code, and defend a complete function model?",

  bigIdea:
    "Understanding functions means more than recognizing equations. A student demonstrates mastery by identifying meaningful quantities, constructing a valid function, defining its domain and range, representing it in multiple ways, analyzing its rate of change, testing assumptions, coding the model, interpreting results, and using the model to support a real decision.",

  whyThisLessonExists: {
    title:
      "From Learning Functions to Creating with Functions",

    introduction:
      "Throughout Module 4, students studied individual pieces of function reasoning. This lesson brings those pieces together. Instead of solving isolated exercises, students must build and defend a complete mathematical model.",

    centralProblem:
      "How can we prove that we understand functions well enough to create a model rather than simply answer questions about one?",

    purpose:
      "Students complete a synthesis investigation and an original creator project demonstrating independent mathematical reasoning, communication, coding, validation, and interpretation.",
  },

  moduleSynthesis: {
    title:
      "What You Can Now Do",

    pathway: [
      "Recognize a relation.",
      "Determine whether a relation is a function.",
      "Identify inputs and outputs.",
      "Use function notation.",
      "Evaluate functions.",
      "Determine domain and range.",
      "Distinguish discrete and continuous domains.",
      "Translate among tables, ordered pairs, mappings, graphs, equations, and words.",
      "Calculate and interpret rate of change.",
      "Build real-world function models.",
      "Test contextual restrictions.",
      "Reject invalid inputs.",
      "Use models for prediction and decision-making.",
      "Implement function models in Python.",
      "Create original mathematical evidence for a portfolio.",
    ],
  },

  problemFirst: {
    title:
      "Which Transportation Plan Should the Youth Program Choose?",

    scenario:
      "A youth technology program needs transportation for field trips. Company A charges a $75 reservation fee plus $4 per mile. Company B charges a $30 reservation fee plus $5.50 per mile. Trips may range from 0 through 60 miles. Mileage can include decimal values. The program owns 14 laptops, the coordinator wears a red jacket, and trips usually begin before 9:00 a.m.",

    questions: [
      "Which details are mathematically relevant?",
      "Which details are irrelevant?",
      "What should the input represent?",
      "What should the outputs represent?",
      "Write a function for Company A.",
      "Write a function for Company B.",
      "What is each company's starting value?",
      "What is each company's rate of change?",
      "What units belong to each rate?",
      "What is the realistic domain?",
      "Is the domain discrete or continuous?",
      "Evaluate both functions at 0 miles.",
      "Evaluate both functions at 10 miles.",
      "Evaluate both functions at 30 miles.",
      "Create a table comparing the companies.",
      "At what mileage do the companies cost the same?",
      "Which company is less expensive before that point?",
      "Which company is less expensive after that point?",
      "How would the relationships appear on a graph?",
      "What decision should the program make for a 20-mile trip?",
      "What decision should it make for a 50-mile trip?",
      "Would a prediction for 75 miles be valid under this model?",
      "What assumptions does the model make?",
    ],

    expectedInsight:
      "Let m represent miles. A(m) = 75 + 4m and B(m) = 30 + 5.5m. Setting the functions equal gives 75 + 4m = 30 + 5.5m, so 45 = 1.5m and m = 30. Both cost $195 at 30 miles. Company B is cheaper below 30 miles; Company A is cheaper above 30 miles. The stated model domain is 0 ≤ m ≤ 60.",
  },

  visualModels: [
    {
      id: "module-four-architecture",
      type: "comparison",

      title:
        "The Function Modeling Architecture",

      description:
        "Each part of Module 4 contributes to a complete model.",

      items: [
        {
          label: "Relation",
          symbol: "input ↔ output",
          meaning:
            "Identify how quantities are connected.",
        },

        {
          label: "Function",
          symbol: "one input → one output",
          meaning:
            "Determine whether each allowed input has exactly one output.",
        },

        {
          label: "Domain / Range",
          symbol: "allowed → possible",
          meaning:
            "Determine valid inputs and resulting outputs.",
        },

        {
          label: "Representation",
          symbol: "table ↔ graph ↔ equation",
          meaning:
            "Communicate the same relationship in multiple mathematical languages.",
        },
      ],
    },

    {
      id: "function-analysis",
      type: "comparison",

      title:
        "Analyze More Than the Equation",

      description:
        "A complete function analysis includes structure, meaning, and context.",

      items: [
        {
          label: "Starting Value",
          symbol: "b",
          meaning:
            "The output associated with input 0 when that input is meaningful.",
        },

        {
          label: "Rate of Change",
          symbol: "m",
          meaning:
            "How much output changes for every unit of input change.",
        },

        {
          label: "Domain",
          symbol: "valid inputs",
          meaning:
            "Values for which the model is intended to be used.",
        },

        {
          label: "Interpretation",
          symbol: "What does it mean?",
          meaning:
            "Translate mathematical results back into the real situation.",
        },
      ],
    },

    {
      id: "model-validation",
      type: "comparison",

      title:
        "Calculation Is Not the End",

      description:
        "Every model result must be validated before it becomes a meaningful conclusion.",

      items: [
        {
          label: "Calculate",
          symbol: "f(a)",
          meaning:
            "Use the mathematical rule.",
        },

        {
          label: "Validate",
          symbol: "a ∈ domain?",
          meaning:
            "Check whether the input is allowed.",
        },

        {
          label: "Interpret",
          symbol: "units + context",
          meaning:
            "Explain the output in the real situation.",
        },

        {
          label: "Decide",
          symbol: "action",
          meaning:
            "Use the evidence to support a conclusion or recommendation.",
        },
      ],
    },

    {
      id: "learning-to-creation",
      type: "comparison",

      title:
        "From Learning to Creation",

      description:
        "SkillBridge mastery is demonstrated through creation, not only correct answers.",

      items: [
        {
          label: "Learn",
          symbol: "concepts",
          meaning:
            "Understand the mathematical ideas.",
        },

        {
          label: "Model",
          symbol: "represent reality",
          meaning:
            "Use mathematics to describe a real relationship.",
        },

        {
          label: "Code",
          symbol: "implement",
          meaning:
            "Turn the mathematical model into executable logic.",
        },

        {
          label: "Create",
          symbol: "portfolio evidence",
          meaning:
            "Build original work that demonstrates what you can do.",
        },
      ],
    },
  ],

  learningObjectives: [
    "Synthesize all major concepts from Module 4.",
    "Identify relevant information in a complex situation.",
    "Define meaningful input and output variables.",
    "Determine whether a relationship is a function.",
    "Use function notation correctly.",
    "Determine realistic domain and range.",
    "Distinguish discrete and continuous domains.",
    "Create tables and ordered pairs from function rules.",
    "Connect equations to graphs and mappings.",
    "Calculate and interpret rate of change.",
    "Interpret starting values.",
    "Compare two functions represented in different ways.",
    "Find and interpret a point where two functions have equal outputs.",
    "Validate inputs against contextual restrictions.",
    "Use Python to implement and compare functions.",
    "Evaluate assumptions and limitations.",
    "Make evidence-based decisions using models.",
    "Create a portfolio-quality original function model.",
  ],

  prerequisiteKnowledge: [
    "Module 4 Lesson 1: Relations",
    "Module 4 Lesson 2: Functions vs. Non-Functions",
    "Module 4 Lesson 3: Function Notation",
    "Module 4 Lesson 4: Domain and Range",
    "Module 4 Lesson 5: Multiple Representations",
    "Module 4 Lesson 6: Rate of Change",
    "Module 4 Lesson 7: Real-World Function Modeling",
  ],

  vocabulary: [
    {
      term: "Synthesis",
      definition:
        "Combining several mathematical ideas into one coherent solution or model.",
    },

    {
      term: "Model",
      definition:
        "A mathematical representation used to describe, analyze, or predict a situation.",
    },

    {
      term: "Function",
      definition:
        "A relation in which every allowed input has exactly one output.",
    },

    {
      term: "Domain",
      definition:
        "The set of allowed input values.",
    },

    {
      term: "Range",
      definition:
        "The set of outputs produced by the allowed inputs.",
    },

    {
      term: "Rate of Change",
      definition:
        "The change in output for each unit of change in input.",
    },

    {
      term: "Starting Value",
      definition:
        "The output value when the input is zero, when zero is meaningful in the model.",
    },

    {
      term: "Constraint",
      definition:
        "A condition limiting possible inputs or outputs.",
    },

    {
      term: "Validation",
      definition:
        "Checking whether the model and its predictions are mathematically and contextually reasonable.",
    },

    {
      term: "Limitation",
      definition:
        "A condition under which a model may no longer accurately represent reality.",
    },
  ],

  formulas: [
    {
      name: "Function Structure",
      formula:
        "Input → rule → output",
      meaning:
        "A function determines one output for each allowed input.",
    },

    {
      name: "Linear Function",
      formula:
        "f(x) = mx + b",
      meaning:
        "m represents constant rate of change and b represents starting value.",
    },

    {
      name: "Rate of Change",
      formula:
        "(y₂ - y₁) / (x₂ - x₁)",
      meaning:
        "Compare output change with input change.",
    },

    {
      name: "Break-Even / Equal Output",
      formula:
        "f(x) = g(x)",
      meaning:
        "Set two functions equal to determine when their outputs match.",
    },

    {
      name: "Complete Modeling Cycle",
      formula:
        "Context → quantities → variables → function → domain → representations → analyze → validate → interpret → decide → create",
      meaning:
        "The equation is one part of a larger modeling process.",
    },
  ],

  workedExamples: [
    {
      title:
        "Recognize a Function",

      problem:
        "A relation is {(1,5), (2,8), (3,11), (4,14)}. Is it a function?",

      solutionSteps: [
        "Identify the inputs.",
        "Inputs are 1, 2, 3, and 4.",
        "Check whether any input is assigned two different outputs.",
        "No input repeats with a different output.",
      ],

      answer:
        "Yes, the relation is a function.",
    },

    {
      title:
        "Detect a Non-Function",

      problem:
        "Is {(1,5), (2,8), (2,11), (4,14)} a function?",

      solutionSteps: [
        "Input 2 is paired with output 8.",
        "Input 2 is also paired with output 11.",
        "One input has two different outputs.",
      ],

      answer:
        "No.",
    },

    {
      title:
        "Evaluate Function Notation",

      problem:
        "If f(x) = 4x + 7, find f(6).",

      solutionSteps: [
        "Substitute 6 for x.",
        "f(6) = 4(6) + 7.",
        "f(6) = 24 + 7.",
      ],

      answer:
        "f(6) = 31.",
    },

    {
      title:
        "Domain and Range from a Model",

      problem:
        "A workshop accepts 5 through 20 whole students and charges C(s) = 15s.",

      solutionSteps: [
        "Students are counted in whole numbers.",
        "Domain = {5, 6, ..., 20}.",
        "Evaluate the outputs using C(s) = 15s.",
        "Minimum output = 75.",
        "Maximum output = 300.",
        "Outputs occur in increments of 15.",
      ],

      answer:
        "Domain = {5,6,...,20}; Range = {75,90,...,300}.",
    },

    {
      title:
        "Translate Equation to Table",

      problem:
        "Create values for f(x) = 3x + 2 when x = 0, 1, 2, and 3.",

      solutionSteps: [
        "f(0) = 2.",
        "f(1) = 5.",
        "f(2) = 8.",
        "f(3) = 11.",
      ],

      answer:
        "(0,2), (1,5), (2,8), (3,11).",
    },

    {
      title:
        "Rate of Change",

      problem:
        "Find the rate of change between (2,9) and (6,25).",

      solutionSteps: [
        "Output change = 25 - 9 = 16.",
        "Input change = 6 - 2 = 4.",
        "Rate = 16 / 4.",
      ],

      answer:
        "4 units of output per input unit.",
    },

    {
      title:
        "Build a Real-World Model",

      problem:
        "A video-editing service charges a $50 project setup fee plus $18 per hour.",

      solutionSteps: [
        "Let h = number of hours.",
        "Let C(h) = total cost.",
        "Fixed cost = 50.",
        "Rate = 18 dollars per hour.",
      ],

      answer:
        "C(h) = 50 + 18h.",
    },

    {
      title:
        "Compare Two Plans",

      problem:
        "Plan A: A(x) = 40 + 6x. Plan B: B(x) = 10 + 9x. When do they cost the same?",

      solutionSteps: [
        "Set A(x) = B(x).",
        "40 + 6x = 10 + 9x.",
        "30 = 3x.",
        "x = 10.",
        "Evaluate either function.",
        "A(10) = 100.",
      ],

      answer:
        "They are equal at x = 10, when both outputs are 100.",
    },

    {
      title:
        "Validate an Input",

      problem:
        "A function models a theater with domain 0 through 250 whole tickets sold. Should input x = 280 be used?",

      solutionSteps: [
        "280 may be mathematically substituted into the formula.",
        "But it exceeds the stated capacity of 250.",
      ],

      answer:
        "No. The input is outside the contextual domain.",
    },

    {
      title:
        "Use a Model to Make a Decision",

      problem:
        "Company A charges A(m) = 75 + 4m. Company B charges B(m) = 30 + 5.5m. Which is cheaper for a 50-mile trip?",

      solutionSteps: [
        "A(50) = 75 + 4(50) = 275.",
        "B(50) = 30 + 5.5(50) = 305.",
        "Compare the outputs.",
      ],

      answer:
        "Company A is cheaper by $30.",

      interpretation:
        "The model supports choosing Company A for a 50-mile trip, assuming all other relevant conditions are equal.",
    },
  ],

  synthesisChallenge: {
    title:
      "Function Modeling Investigation",

    scenario:
      "A student entrepreneurship club wants to sell custom mathematics notebooks. The printing company charges a one-time setup fee of $90 plus $6 per notebook. The club plans to order between 20 and 100 notebooks in whole-number quantities. Each notebook will be sold for $10.",

    tasks: [
      "Define the input variable.",
      "Define the total production cost function.",
      "Define the revenue function.",
      "Determine the realistic domain.",
      "Explain why the domain is discrete.",
      "Create a table for at least five order quantities.",
      "Write corresponding ordered pairs.",
      "State the rate of change for cost.",
      "State the rate of change for revenue.",
      "Interpret both rates using units.",
      "Find the cost of producing 40 notebooks.",
      "Find the revenue from selling 40 notebooks.",
      "Determine profit at 40 notebooks.",
      "Determine when revenue equals cost.",
      "Explain the meaning of that point.",
      "Determine when the club begins making a positive profit.",
      "Identify one invalid input and explain why it is invalid.",
      "Describe how the cost and revenue functions would appear on the same graph.",
      "Use Python to verify your calculations.",
      "Make a recommendation about whether the project appears financially reasonable.",
    ],

    expectedCoreModel: {
      cost:
        "C(n) = 90 + 6n",

      revenue:
        "R(n) = 10n",

      domain:
        "Whole numbers from 20 through 100",

      breakEven:
        "90 + 6n = 10n → 90 = 4n → n = 22.5",

      interpretation:
        "Because notebooks are discrete, exactly 22.5 notebooks cannot be sold. The club begins producing positive profit at 23 notebooks, assuming every ordered notebook is sold for $10.",
    },
  },

  interactiveExploration: {
    title:
      "Build, Break, and Repair a Model",

    description:
      "Students examine a function model, intentionally challenge its assumptions, and improve it.",

    instructions: [
      "Begin with C(x) = 50 + 12x.",
      "Invent a realistic meaning for x and C(x).",
      "Define units.",
      "Choose a realistic domain.",
      "Generate five valid input-output pairs.",
      "Choose one invalid input.",
      "Explain why the formula can calculate it but the context should reject it.",
      "Describe the starting value.",
      "Describe the rate of change.",
      "Create a second competing function.",
      "Find where the two functions have equal outputs.",
      "Determine which function is preferable below that point.",
      "Determine which is preferable above that point.",
      "Change one assumption.",
      "Explain how the model must change.",
    ],

    questions: [
      "Which parts of your model came from mathematics?",
      "Which parts came from context?",
      "What assumption controls the domain?",
      "What would make the model invalid?",
      "How can multiple representations expose an error?",
      "Why should a model be tested instead of trusted automatically?",
    ],

    expectedDiscovery:
      "Models depend on assumptions. Changing the context can require changing the function, domain, interpretation, or decision.",
  },

  realWorldApplications: [
    {
      field: "Business",
      application:
        "Functions model cost, revenue, profit, demand, production, and pricing decisions.",
    },

    {
      field: "Finance",
      application:
        "Functions connect deposits, fees, balances, time, and investment growth.",
    },

    {
      field: "Transportation",
      application:
        "Functions model fares, distance, travel time, fuel use, and capacity.",
    },

    {
      field: "Engineering",
      application:
        "Functions describe how system outputs respond to measurable inputs.",
    },

    {
      field: "Science",
      application:
        "Functions describe experimental relationships and changes in measured quantities.",
    },

    {
      field: "Education",
      application:
        "Functions can model enrollment, costs, progress, attendance, and resource needs.",
    },

    {
      field: "Data Analytics",
      application:
        "Analysts connect data, mathematical relationships, visualizations, and decision-making.",
    },

    {
      field: "AI",
      application:
        "AI systems receive inputs, transform them through models, and produce outputs that require validation and interpretation.",
    },
  ],

  aiConnection: {
    title:
      "From Algebraic Functions to AI Models",

    explanation:
      "An Algebra I function is much simpler than a modern AI model, but several foundational ideas are shared. Both involve inputs, transformations, outputs, valid input ranges, testing, interpretation, and model limitations.",

    example:
      "A simple function may use study hours to estimate a practice score. An AI model may use many inputs at once, such as study time, attendance, prior scores, and assignment completion. In both cases, the output should be interpreted within the model's intended conditions rather than treated automatically as truth.",

    connections: [
      "Inputs become features.",
      "Outputs may become predictions.",
      "Domains become valid input ranges.",
      "Testing becomes model evaluation.",
      "Contextual restrictions become validation rules.",
      "Interpretation becomes decision support.",
    ],

    caution:
      "A model output is evidence produced under assumptions. It is not automatically a fact, recommendation, or correct decision.",

    reflectionQuestion:
      "What habits from function modeling could help someone evaluate an AI prediction responsibly?",
  },

  pythonLab: {
    title:
      "Function Modeling Decision System",

    objective:
      "Implement two competing functions, validate the domain, compare outputs, and make a recommendation.",

    code: `def company_a(miles):
    return 75 + 4 * miles


def company_b(miles):
    return 30 + 5.5 * miles


def compare_companies(miles):
    if miles < 0 or miles > 60:
        return "Invalid mileage for this model"

    cost_a = company_a(miles)
    cost_b = company_b(miles)

    print("Miles:", miles)
    print("Company A:", cost_a)
    print("Company B:", cost_b)

    if cost_a < cost_b:
        return "Choose Company A"

    if cost_b < cost_a:
        return "Choose Company B"

    return "Both companies cost the same"


test_miles = [
    10,
    20,
    30,
    50,
    75,
]

for miles in test_miles:
    print(
        compare_companies(miles)
    )

    print("---")`,

    questions: [
      "What function represents Company A?",
      "What function represents Company B?",
      "What is the rate of change for each company?",
      "What is the starting value for each?",
      "Why does the program reject 75 miles?",
      "At which input should the program report equal cost?",
      "Which company should be selected for 10 miles?",
      "Which company should be selected for 50 miles?",
      "How does the code turn mathematical reasoning into a decision rule?",
    ],

    reflectionQuestions: [
      "What information does the computer calculate?",
      "What information still requires human interpretation?",
      "Why is domain validation important before comparing outputs?",
      "Could the cheapest transportation company still be the wrong choice for reasons not included in the mathematical model?",
    ],

    extension:
      "Add a third transportation company, calculate all three costs, and have Python recommend the least expensive valid option.",
  },

  creatorProject: {
    title:
      "Build Your Own Function-Based Decision Tool",

    mission:
      "Create an original real-world problem involving at least one function and use mathematics, representation, coding, and interpretation to produce a decision or recommendation.",

    projectOptions: [
      "Compare two phone plans.",
      "Compare transportation options.",
      "Model a small business.",
      "Compare event costs.",
      "Model tutoring or course pricing.",
      "Analyze a fundraiser.",
      "Compare delivery services.",
      "Model a school club budget.",
      "Analyze a fitness or training relationship.",
      "Design an original scenario.",
    ],

    requiredProcess: [
      "Describe the real situation.",
      "Identify relevant information.",
      "Include at least one irrelevant detail and correctly exclude it.",
      "Define input and output quantities.",
      "Define variables.",
      "Explain whether the relationship is a function.",
      "Write at least one function rule.",
      "Use function notation.",
      "Determine the contextual domain.",
      "Determine or describe the range.",
      "State whether the domain is discrete or continuous.",
      "Create an input-output table.",
      "Provide at least five ordered pairs.",
      "Describe a mapping.",
      "Create or describe a graph.",
      "Calculate rate of change.",
      "Interpret the rate with units.",
      "Interpret the starting value when applicable.",
      "Test at least two valid inputs.",
      "Test at least one invalid input.",
      "Explain why the invalid input should be rejected.",
      "Implement the model in Python.",
      "Use the model to make a prediction.",
      "Use the model to make a decision or recommendation.",
      "State at least one assumption.",
      "State at least one limitation.",
      "Reflect on how the model could be improved.",
    ],

    successStatement:
      "I can take a real situation, build a function model, represent it several ways, analyze it, validate it, code it, and explain what it means.",
  },

  guidedPractice: [
    {
      question:
        "Is {(1,4), (2,6), (3,8)} a function?",
      answer:
        "Yes.",
      difficulty: "Review",
    },

    {
      question:
        "Is {(1,4), (1,7), (3,8)} a function?",
      answer:
        "No, because input 1 has two outputs.",
      difficulty: "Review",
    },

    {
      question:
        "Evaluate f(4) if f(x) = 5x + 3.",
      answer:
        "23.",
      difficulty: "Review",
    },

    {
      question:
        "If f(6) = 20, what point lies on the graph?",
      answer:
        "(6,20).",
      difficulty: "Representation",
    },

    {
      question:
        "Find the rate between (2,7) and (5,19).",
      answer:
        "4.",
      difficulty: "Rate",
    },

    {
      question:
        "A business charges $25 plus $8 per item. Write a cost function.",
      answer:
        "C(x) = 25 + 8x.",
      difficulty: "Modeling",
    },

    {
      question:
        "If x represents whole items from 0 through 50, describe the domain.",
      answer:
        "{0,1,2,...,50}.",
      difficulty: "Domain",
    },

    {
      question:
        "Why should x = 51 be rejected?",
      answer:
        "It lies outside the stated contextual domain.",
      difficulty: "Validation",
    },
  ],

  independentPractice: [
    {
      question:
        "Find the domain and range of {(1,3), (2,5), (3,7), (4,9)}.",
      answer:
        "Domain = {1,2,3,4}; Range = {3,5,7,9}.",
    },

    {
      question:
        "Find a possible function rule for (0,4), (1,7), (2,10), (3,13).",
      answer:
        "f(x) = 3x + 4.",
    },

    {
      question:
        "What is the rate of change of f(x) = 8x + 20?",
      answer:
        "8.",
    },

    {
      question:
        "What is the starting value of f(x) = 8x + 20?",
      answer:
        "20.",
    },

    {
      question:
        "A service has C(h) = 45 + 12h. Find C(5).",
      answer:
        "$105.",
    },

    {
      question:
        "Interpret the 12 in the previous function.",
      answer:
        "Cost increases by $12 per hour.",
    },

    {
      question:
        "A competing service has D(h) = 75 + 7h. Set the two functions equal and determine when their costs match.",
      answer:
        "45 + 12h = 75 + 7h → 5h = 30 → h = 6.",
    },

    {
      question:
        "Which service changes more quickly?",
      answer:
        "C(h), because its rate is 12 compared with 7.",
    },

    {
      question:
        "Explain why the lower starting cost does not automatically mean the service is always cheaper.",
      answer:
        "The functions have different rates of change, so their costs can cross.",
    },

    {
      question:
        "Create an original real-world function with a restricted domain.",
      answer:
        "Answers will vary.",
    },
  ],

  commonMistakes: [
    {
      mistake:
        "Treating Module 4 concepts as unrelated topics.",
      correction:
        "Relations, functions, domain, representation, rate, and modeling are connected parts of one reasoning system.",
    },

    {
      mistake:
        "Starting with an equation before understanding the situation.",
      correction:
        "Identify quantities, variables, units, and assumptions first.",
    },

    {
      mistake:
        "Assuming any relation is a function.",
      correction:
        "Check whether every input has exactly one output.",
    },

    {
      mistake:
        "Using all real numbers as the domain automatically.",
      correction:
        "Use the context to determine valid inputs.",
    },

    {
      mistake:
        "Comparing function outputs without considering input values.",
      correction:
        "Compare functions at the same inputs or compare their rates appropriately.",
    },

    {
      mistake:
        "Confusing starting value and rate of change.",
      correction:
        "Starting value describes where the function begins; rate describes how rapidly it changes.",
    },

    {
      mistake:
        "Ignoring units.",
      correction:
        "Units are part of the interpretation.",
    },

    {
      mistake:
        "Accepting a model prediction outside its intended domain.",
      correction:
        "Validate the input before interpreting the result.",
    },

    {
      mistake:
        "Treating Python output as proof that a model is reasonable.",
      correction:
        "Code performs the rules it is given; humans must still evaluate assumptions and context.",
    },

    {
      mistake:
        "Finishing after calculating an answer.",
      correction:
        "Interpret, validate, communicate, and use the result to address the original problem.",
    },
  ],

  discussionQuestions: [
    "What makes a relation a function?",
    "Why does function notation help us communicate input-output relationships?",
    "Why is domain part of a model?",
    "How do domain restrictions affect range?",
    "Why should students understand several function representations?",
    "What does rate of change reveal?",
    "How is rate different from starting value?",
    "Why can two functions cross?",
    "What does an intersection mean in a real-world comparison?",
    "Why should model predictions be validated?",
    "How does coding strengthen mathematical modeling?",
    "What can a mathematical model leave out?",
    "What responsibilities remain with the human even after software produces an answer?",
  ],

  formativeAssessment: {
    passingScore: 10,

    questions: [
      {
        type: "function",
        prompt:
          "Is {(1,5), (2,7), (3,9)} a function?",
        answer:
          "Yes.",
      },

      {
        type: "non-function",
        prompt:
          "Is {(1,5), (1,8), (3,9)} a function?",
        answer:
          "No.",
      },

      {
        type: "notation",
        prompt:
          "If f(x) = 3x + 2, find f(4).",
        answer:
          "14.",
      },

      {
        type: "representation",
        prompt:
          "If f(5) = 18, what graph point corresponds to this statement?",
        answer:
          "(5,18).",
      },

      {
        type: "domain",
        prompt:
          "A bus can hold 0 through 48 passengers. State a realistic domain.",
        answer:
          "Whole numbers from 0 through 48.",
      },

      {
        type: "rate",
        prompt:
          "Find the rate between (2,6) and (6,18).",
        answer:
          "3.",
      },

      {
        type: "equation",
        prompt:
          "Identify the rate in f(x) = 7x + 40.",
        answer:
          "7.",
      },

      {
        type: "starting-value",
        prompt:
          "Identify the starting value in f(x) = 7x + 40.",
        answer:
          "40.",
      },

      {
        type: "modeling",
        prompt:
          "A service charges $20 plus $9 per hour. Write a function.",
        answer:
          "C(h) = 20 + 9h.",
      },

      {
        type: "comparison",
        prompt:
          "A(x) = 20 + 9x and B(x) = 50 + 4x. Which changes faster?",
        answer:
          "A(x).",
      },

      {
        type: "equal-output",
        prompt:
          "When are A(x) = 20 + 9x and B(x) = 50 + 4x equal?",
        answer:
          "x = 6.",
      },

      {
        type: "validation",
        prompt:
          "Why should a prediction outside the model's stated domain not automatically be trusted?",
        sampleAnswer:
          "Because the model was not intended to represent that input, even if the formula produces a number.",
      },

      {
        type: "creation",
        prompt:
          "Create a real-world function and explain its input, output, domain, rate, and starting value.",
        sampleAnswer:
          "Answers will vary.",
      },

      {
        type: "reflection",
        prompt:
          "Explain why a mathematical model is not identical to reality.",
        sampleAnswer:
          "A model simplifies reality and depends on assumptions, selected variables, and limited conditions.",
      },
    ],
  },

  moduleAssessment: {
    title:
      "Module 4 Mastery Check",

    masteryEvidence: [
      "Correct function reasoning",
      "Correct use of notation",
      "Correct domain and range",
      "Multiple representations",
      "Rate-of-change interpretation",
      "Real-world modeling",
      "Input validation",
      "Written interpretation",
      "Python implementation",
      "Original creation",
    ],

    masteryQuestion:
      "Can the student independently transform a real situation into a validated function model and communicate the reasoning in mathematical, visual, written, and computational forms?",
  },

  researchExtension: {
    title:
      "Functions in Professional Decision-Making",

    description:
      "Investigate how one profession uses relationships between input and output quantities to analyze or predict real outcomes.",

    options: [
      "Business",
      "Engineering",
      "Finance",
      "Transportation",
      "Public health",
      "Education",
      "Data analytics",
      "Artificial intelligence",
      "Environmental science",
      "Sports analytics",
    ],

    task:
      "Identify the real quantities involved, explain how inputs and outputs are connected, describe at least one mathematical representation, identify restrictions or assumptions, and explain how the model supports a decision.",

    requiredEvidence: [
      "Professional context",
      "Input quantity",
      "Output quantity",
      "Relationship",
      "Representation",
      "Domain or restrictions",
      "Interpretation",
      "Decision use",
      "Limitation",
    ],
  },

  portfolioArtifact: {
    title:
      "Module 4 Function Modeling Portfolio Project",

    description:
      "Produce a polished artifact demonstrating the complete SkillBridge function-modeling process.",

    requiredSections: [
      "Project title",
      "Real-world problem",
      "Why the problem matters",
      "Relevant information",
      "Irrelevant information",
      "Input quantity",
      "Output quantity",
      "Variable definitions",
      "Units",
      "Function determination",
      "Function equation",
      "Function notation",
      "Domain",
      "Range",
      "Discrete or continuous classification",
      "Input-output table",
      "Ordered pairs",
      "Mapping description",
      "Graph",
      "Starting-value interpretation",
      "Rate-of-change calculation",
      "Rate interpretation",
      "At least two valid evaluations",
      "At least one invalid input",
      "Validation explanation",
      "Python code",
      "Prediction",
      "Decision or recommendation",
      "Assumptions",
      "Limitations",
      "Reflection",
    ],

    rubric: [
      {
        category: "Mathematical Accuracy",
        points: 25,
        evidence:
          "Correct function, evaluations, domain, range, rate, and representations.",
      },

      {
        category: "Modeling Reasoning",
        points: 25,
        evidence:
          "Clear connection between real quantities, assumptions, constraints, and mathematical structure.",
      },

      {
        category: "Interpretation",
        points: 20,
        evidence:
          "Results are explained correctly using context and units.",
      },

      {
        category: "Coding and Validation",
        points: 15,
        evidence:
          "Python represents the model correctly and checks meaningful inputs.",
      },

      {
        category: "Communication and Creation",
        points: 15,
        evidence:
          "Original, organized, understandable, and portfolio-ready work.",
      },
    ],

    totalPoints: 100,
  },

  growthIndicators: [
    "Recognizes relations and functions.",
    "Uses the function rule correctly.",
    "Evaluates function notation.",
    "Determines domain and range.",
    "Distinguishes discrete and continuous inputs.",
    "Translates among multiple representations.",
    "Calculates and interprets rate of change.",
    "Interprets starting values.",
    "Builds real-world models.",
    "Compares functions.",
    "Finds equal-output points.",
    "Validates model inputs.",
    "Explains assumptions.",
    "Identifies limitations.",
    "Uses Python to implement models.",
    "Makes evidence-based decisions.",
    "Creates original portfolio evidence.",
  ],

  lumineryGuidance: {
    message:
      "Before asking whether your answer is correct, ask whether your entire model is coherent: Do the quantities, function, domain, representations, rate, units, and interpretation all tell the same story?",

    recommendation:
      "Understand → define → model → represent → analyze → validate → interpret → code → decide → create.",

    prompt:
      "What evidence can you show that your function model actually represents the situation you designed?",

    coachingQuestions: [
      "What real problem are you trying to understand?",
      "Which details matter mathematically?",
      "What is the input?",
      "What is the output?",
      "Does every input have exactly one output?",
      "What do your variables mean?",
      "What units belong to them?",
      "What is your function rule?",
      "What does each number in the rule mean?",
      "What is the realistic domain?",
      "Is the domain discrete or continuous?",
      "What outputs form the range?",
      "Does your table agree with your equation?",
      "Does your graph agree with your table?",
      "What is the rate of change?",
      "What does the rate mean in context?",
      "What does the starting value mean?",
      "Can you test your model using another input?",
      "What input should your model reject?",
      "What assumption are you making?",
      "What happens if that assumption changes?",
      "What decision can your model support?",
      "What can your model not tell you?",
      "How can Python test your reasoning?",
      "What evidence proves that this work is your own mathematical creation?",
    ],

    finalMentorMessage:
      "Your goal is not to show that you can follow a function procedure. Your goal is to show that you can use functions as tools for reasoning, modeling, coding, and making decisions.",
  },

  summary: [
    "A relation connects inputs and outputs.",
    "A function assigns exactly one output to each allowed input.",
    "Function notation communicates how an output depends on an input.",
    "Domain describes allowed inputs.",
    "Range describes resulting outputs.",
    "Context may restrict a mathematical domain.",
    "Functions can be represented using words, tables, ordered pairs, mappings, graphs, equations, and code.",
    "Equivalent representations must communicate the same input-output relationship.",
    "Rate of change measures output change relative to input change.",
    "Starting value and rate of change describe different features.",
    "Real-world models require variables, units, assumptions, and constraints.",
    "A calculation should be validated before it is interpreted.",
    "Models can support predictions and decisions.",
    "Python can implement and test function models.",
    "Models have limitations.",
    "Mastery is demonstrated by creating and defending an original model.",
  ],

  reflection: [
    "Which Module 4 concept changed your understanding of functions most?",
    "How would you define a function in your own words?",
    "Why is domain important in real-world modeling?",
    "Why should one function be represented in several ways?",
    "How does rate of change help compare relationships?",
    "What is the difference between calculating and modeling?",
    "Why can a correct equation still produce an inappropriate prediction?",
    "What did Python help you understand about functions?",
    "What assumption in your creator project is most important?",
    "What limitation does your model have?",
    "What decision can your model support?",
    "What would you improve if you continued the project?",
    "What portfolio evidence from this project demonstrates that you can think mathematically rather than only follow procedures?",
  ],

  completionMessage: {
    title:
      "Module 4 Complete",

    message:
      "You have moved from identifying relations to creating complete function models. You can now connect inputs and outputs, analyze functions, work with domain and range, move among representations, interpret rate of change, validate models, implement them in code, and use mathematics to support decisions.",

    achievement:
      "Function Modeler",

    nextStep:
      "Carry this modeling mindset into future Algebra I modules, where functions will become increasingly important for understanding linear relationships, graphs, systems, and more advanced mathematical models.",
  },

  previousLesson: {
    moduleNumber: 4,
    lessonNumber: 7,
    slug: "real-world-function-modeling",
    title:
      "Real-World Function Modeling",
  },

  nextLesson: null,
};

export default lesson08;