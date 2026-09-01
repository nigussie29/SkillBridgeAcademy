const lesson07 = {
  id: "algebra-one-module-04-lesson-07",
  slug: "real-world-function-modeling",

  courseId: "algebra-1",
  courseTitle: "Algebra I",

  moduleNumber: 4,
  moduleTitle: "Functions and Relations",
  lessonNumber: 7,

  title:
    "Real-World Function Modeling",

  subtitle:
    "Transform real situations into meaningful functions by identifying quantities, defining variables, choosing representations, setting realistic domains, interpreting rates of change, testing assumptions, and using models to make decisions.",

  duration: "85–100 minutes",
  level: "Intermediate",
  status: "Available",

  essentialQuestion:
    "How can we build a function that accurately represents a real-world relationship and use it to make meaningful decisions?",

  bigIdea:
    "A useful function model is more than an equation. It connects real quantities through clearly defined variables, realistic assumptions, an appropriate domain, meaningful outputs, multiple representations, and an interpretation that makes sense in context.",

  whyThisLessonExists: {
    title:
      "Mathematics Becomes Powerful When It Models Reality",

    introduction:
      "Students have already learned relations, functions, function notation, domain and range, multiple representations, and rate of change. Real modeling requires combining all of these ideas rather than treating them as separate skills.",

    centralProblem:
      "How can we decide what mathematics belongs in a real situation and determine whether our model is useful?",

    purpose:
      "Students learn a repeatable modeling process that begins with context, identifies quantities and assumptions, builds a function, tests it, interprets its features, and uses the model to support predictions and decisions.",
  },

  problemFirst: {
    title:
      "Community Technology Training Program",

    scenario:
      "A community organization plans a technology training program. The organization pays a fixed facility fee of $450 and spends $28 for materials for each participant. The room can hold no more than 40 participants. At least 12 participants are required for the program to operate. Participants are counted as whole people. The building has three entrances, the instructor prefers green markers, and lunch begins at 12:15 p.m.",

    questions: [
      "Which information affects the mathematical model?",
      "Which information is irrelevant?",
      "What quantities are changing?",
      "Which quantity should be the input?",
      "Which quantity should be the output?",
      "Define a variable for the number of participants.",
      "Define a function for total program cost.",
      "Which part of the cost is fixed?",
      "Which part changes with the number of participants?",
      "What is the rate of change?",
      "What units belong to the rate?",
      "What is the mathematical equation?",
      "What is the realistic domain?",
      "Why is the domain discrete?",
      "What is the smallest possible total cost?",
      "What is the largest possible total cost?",
      "What is the corresponding range?",
      "What does the model predict for 20 participants?",
      "Would an input of 8 participants be valid?",
      "Would an input of 22.5 participants be valid?",
      "How could the organization use this model when planning its budget?",
    ],

    expectedInsight:
      "Let p represent the number of participants and C(p) total cost. The model is C(p) = 450 + 28p. The realistic domain is whole numbers from 12 through 40. The rate of change is $28 per participant. C(12) = 786 and C(40) = 1570, so the range consists of the corresponding discrete cost values.",
  },

  visualModels: [
    {
      id: "model-building-process",
      type: "comparison",

      title:
        "From Situation to Function",

      description:
        "Real-world modeling requires several connected decisions.",

      items: [
        {
          label: "Context",
          symbol: "What is happening?",
          meaning:
            "Understand the real situation before using symbols.",
        },

        {
          label: "Quantities",
          symbol: "What changes?",
          meaning:
            "Identify measurable quantities and their units.",
        },

        {
          label: "Variables",
          symbol: "p, C(p)",
          meaning:
            "Assign symbols that clearly represent the quantities.",
        },

        {
          label: "Relationship",
          symbol: "C(p) = 450 + 28p",
          meaning:
            "Express how the output depends on the input.",
        },
      ],
    },

    {
      id: "fixed-vs-changing",
      type: "comparison",

      title:
        "Fixed Quantity vs. Changing Quantity",

      description:
        "Many real-world linear models combine a starting value with a rate of change.",

      items: [
        {
          label: "Fixed Cost",
          symbol: "$450",
          meaning:
            "This amount is paid regardless of the number of participants.",
        },

        {
          label: "Changing Cost",
          symbol: "$28 per participant",
          meaning:
            "This part grows as the number of participants increases.",
        },
      ],
    },

    {
      id: "equation-meaning",
      type: "comparison",

      title:
        "Reading the Model",

      description:
        "Every part of an equation should have a real-world meaning.",

      items: [
        {
          label: "450",
          symbol: "starting value",
          meaning:
            "Facility cost before participant materials are added.",
        },

        {
          label: "28",
          symbol: "rate of change",
          meaning:
            "Additional cost for each participant.",
        },

        {
          label: "p",
          symbol: "input",
          meaning:
            "Number of participants.",
        },

        {
          label: "C(p)",
          symbol: "output",
          meaning:
            "Total program cost.",
        },
      ],
    },

    {
      id: "valid-model-check",
      type: "comparison",

      title:
        "Mathematically Computable vs. Contextually Valid",

      description:
        "A formula can sometimes calculate values that do not belong in the real model.",

      items: [
        {
          label: "C(8)",
          symbol: "$674",
          meaning:
            "The arithmetic works, but 8 participants violates the minimum attendance requirement.",
        },

        {
          label: "C(20)",
          symbol: "$1,010",
          meaning:
            "20 is a valid whole-number attendance value inside the realistic domain.",
        },

        {
          label: "C(22.5)",
          symbol: "$1,080",
          meaning:
            "The calculation is possible, but 22.5 participants is unrealistic.",
        },
      ],
    },

    {
      id: "model-quality",
      type: "comparison",

      title:
        "A Strong Model Must Be More Than Correct Algebra",

      description:
        "Good modeling connects mathematics to meaning.",

      items: [
        {
          label: "Equation",
          symbol: "correct rule",
          meaning:
            "The mathematical relationship must be accurate.",
        },

        {
          label: "Domain",
          symbol: "valid inputs",
          meaning:
            "Inputs must satisfy real-world restrictions.",
        },

        {
          label: "Units",
          symbol: "$ / participant",
          meaning:
            "Units give meaning to quantities and rates.",
        },

        {
          label: "Interpretation",
          symbol: "decision",
          meaning:
            "The result must answer the original real-world question.",
        },
      ],
    },
  ],

  learningObjectives: [
    "Identify relevant and irrelevant information in a real situation.",
    "Identify input and output quantities.",
    "Define variables with meaningful units.",
    "Determine whether a relationship can be modeled as a function.",
    "Build a linear function from fixed and changing quantities.",
    "Interpret a starting value.",
    "Interpret rate of change in context.",
    "Determine realistic domain restrictions.",
    "Determine corresponding range values.",
    "Represent a model using equations, tables, ordered pairs, and graphs.",
    "Evaluate a model for specified inputs.",
    "Reject unrealistic inputs even when algebraically computable.",
    "Use a function model to make predictions.",
    "Use a function model to support decisions.",
    "Use Python to implement and test a real-world model.",
    "Create an original real-world function model.",
  ],

  prerequisiteKnowledge: [
    "Variables and expressions",
    "Linear equations",
    "Relations",
    "Functions",
    "Function notation",
    "Domain and range",
    "Tables and ordered pairs",
    "Graphs",
    "Rate of change",
    "Discrete and continuous quantities",
  ],

  vocabulary: [
    {
      term: "Mathematical Model",
      definition:
        "A mathematical representation used to describe, analyze, or predict a real situation.",
    },

    {
      term: "Input Variable",
      definition:
        "The quantity chosen as the input of the function.",
    },

    {
      term: "Output Variable",
      definition:
        "The quantity determined by the input.",
    },

    {
      term: "Assumption",
      definition:
        "A condition accepted when constructing or using a model.",
    },

    {
      term: "Constraint",
      definition:
        "A limitation or requirement that restricts possible inputs or outputs.",
    },

    {
      term: "Fixed Quantity",
      definition:
        "A value that does not change as the input changes.",
    },

    {
      term: "Rate of Change",
      definition:
        "The amount the output changes for each unit of input change.",
    },

    {
      term: "Prediction",
      definition:
        "An estimated output produced by applying a model to an input.",
    },

    {
      term: "Validation",
      definition:
        "Checking whether a model, input, output, or prediction is reasonable and consistent with the situation.",
    },
  ],

  formulas: [
    {
      name: "Linear Function Model",
      formula:
        "Output = starting value + rate(input)",
      meaning:
        "Many real situations contain a fixed starting quantity and a constant rate of change.",
    },

    {
      name: "Function Form",
      formula:
        "f(x) = mx + b",
      meaning:
        "m represents constant rate of change and b represents the output when x = 0.",
    },

    {
      name: "Modeling Cycle",
      formula:
        "Context → quantities → variables → relationship → domain → test → interpret → decide",
      meaning:
        "Modeling is a reasoning process, not merely writing an equation.",
    },

    {
      name: "Validation Question",
      formula:
        "Does the answer make sense in context?",
      meaning:
        "Every calculated result should be checked against the original situation.",
    },
  ],

  workedExamples: [
    {
      title:
        "Build a Cost Function",

      problem:
        "A tutoring company charges a $35 registration fee plus $22 per tutoring session. Write a cost function.",

      solutionSteps: [
        "Let s represent number of sessions.",
        "Let C(s) represent total cost.",
        "The fixed starting cost is $35.",
        "Each session adds $22.",
        "Combine the two quantities.",
      ],

      answer:
        "C(s) = 35 + 22s.",

      interpretation:
        "$35 is the fixed fee and $22 per session is the rate of change.",
    },

    {
      title:
        "Evaluate and Interpret",

      problem:
        "Using C(s) = 35 + 22s, find C(6).",

      solutionSteps: [
        "Substitute 6 for s.",
        "C(6) = 35 + 22(6).",
        "C(6) = 35 + 132.",
        "C(6) = 167.",
      ],

      answer:
        "$167.",

      interpretation:
        "Six tutoring sessions cost a total of $167.",
    },

    {
      title:
        "Identify a Realistic Domain",

      problem:
        "A small tutoring program permits from 1 through 12 sessions per student. Sessions must be whole numbers.",

      solutionSteps: [
        "The minimum input is 1.",
        "The maximum input is 12.",
        "Session counts are discrete.",
      ],

      answer:
        "Domain = {1, 2, 3, ..., 12}.",
    },

    {
      title:
        "Model Transportation Cost",

      problem:
        "A transportation company charges a $5 starting fee plus $2.50 per mile.",

      solutionSteps: [
        "Let m represent miles traveled.",
        "Let C(m) represent total cost.",
        "Starting value = 5.",
        "Rate = 2.50 dollars per mile.",
      ],

      answer:
        "C(m) = 5 + 2.5m.",

      interpretation:
        "Every additional mile adds $2.50 to the total fare.",
    },

    {
      title:
        "Continuous Domain",

      problem:
        "Using C(m) = 5 + 2.5m, suppose trips may range from 0 to 60 miles and fractional mileage is possible.",

      solutionSteps: [
        "Distance cannot be negative.",
        "Maximum modeled distance is 60 miles.",
        "Distance can take decimal values.",
      ],

      answer:
        "0 ≤ m ≤ 60.",

      interpretation:
        "The realistic domain is continuous.",
    },

    {
      title:
        "From Table to Model",

      problem:
        "A subscription service has values (0,15), (1,23), (2,31), and (3,39). Build a function.",

      solutionSteps: [
        "When input increases by 1, output increases by 8.",
        "Rate of change is 8.",
        "When x = 0, output is 15.",
        "Starting value is 15.",
      ],

      answer:
        "C(x) = 8x + 15.",
    },

    {
      title:
        "Compare Two Models",

      problem:
        "Plan A costs A(m) = 25 + 12m. Plan B costs B(m) = 55 + 7m. Which has the smaller starting cost? Which has the smaller rate?",

      solutionSteps: [
        "Plan A starting value = 25.",
        "Plan B starting value = 55.",
        "Plan A rate = 12.",
        "Plan B rate = 7.",
      ],

      answer:
        "Plan A has the smaller starting cost. Plan B has the smaller rate of change.",

      interpretation:
        "The cheaper plan may depend on the number of input units used.",
    },

    {
      title:
        "Find the Break-Even Input",

      problem:
        "Using A(m) = 25 + 12m and B(m) = 55 + 7m, determine when the plans cost the same.",

      solutionSteps: [
        "Set the outputs equal.",
        "25 + 12m = 55 + 7m.",
        "5m = 30.",
        "m = 6.",
        "Evaluate either function.",
        "A(6) = 97.",
      ],

      answer:
        "The plans cost the same at 6 units, when each costs $97.",

      interpretation:
        "Before and after the break-even point, different plans may be preferable.",
    },

    {
      title:
        "Reject an Invalid Prediction",

      problem:
        "A school van model uses p as the number of passengers, with domain 0 through 14 whole passengers. A student evaluates the function at p = 17.",

      solutionSteps: [
        "The formula may produce a numerical answer.",
        "But 17 lies outside the stated domain.",
        "The van capacity makes the prediction invalid for this model.",
      ],

      answer:
        "The numerical calculation should not be interpreted as a valid model prediction.",
    },

    {
      title:
        "Temperature Model",

      problem:
        "At 6 a.m. the temperature is 52°F and increases steadily by 3°F each hour for the next 5 hours. Let h be hours after 6 a.m.",

      solutionSteps: [
        "Starting temperature is 52.",
        "Rate of change is +3°F per hour.",
        "Write T(h) = 52 + 3h.",
        "The model is used from h = 0 through h = 5.",
      ],

      answer:
        "T(h) = 52 + 3h, with 0 ≤ h ≤ 5.",

      interpretation:
        "T(4) = 64 means the model predicts 64°F at 10 a.m.",
    },
  ],

  interactiveExploration: {
    title:
      "Model Builder Lab",

    description:
      "Construct a complete function model from a real situation rather than beginning with an equation.",

    scenario:
      "A school club buys equipment for a fixed setup cost of $180 and then spends $14 for each student participating.",

    instructions: [
      "Identify the two changing quantities.",
      "Choose an input.",
      "Choose an output.",
      "Define variables.",
      "Identify the fixed quantity.",
      "Identify the changing quantity.",
      "Write the function.",
      "Evaluate the model for 5, 10, and 20 students.",
      "Create three ordered pairs.",
      "Describe the corresponding table.",
      "State the rate of change with units.",
      "State the starting value and its meaning.",
      "Create a realistic domain if participation is limited to 30 students.",
      "Decide whether the domain should be discrete or continuous.",
      "Test one invalid input.",
      "Explain why it is invalid.",
      "Use the model to answer a budgeting question.",
    ],

    questions: [
      "Why did you choose that quantity as the input?",
      "What determines the output?",
      "What does each number in the equation mean?",
      "What values belong to the domain?",
      "Could the equation accept values outside the realistic domain?",
      "What does the rate tell the organization?",
      "What would happen if the fixed cost changed?",
      "What would happen if the per-student cost changed?",
    ],

    expectedDiscovery:
      "A mathematical model becomes meaningful only when the equation, variables, units, domain, and interpretation agree with the real context.",
  },

  realWorldApplications: [
    {
      field: "Business",
      application:
        "Businesses model fixed costs, variable costs, revenue, staffing, and production.",
    },

    {
      field: "Transportation",
      application:
        "Transportation systems model fares, time, distance, fuel use, and passenger capacity.",
    },

    {
      field: "Finance",
      application:
        "Financial models connect deposits, fees, rates, time, and balances.",
    },

    {
      field: "Engineering",
      application:
        "Engineers model how outputs respond to changing inputs within safe operating limits.",
    },

    {
      field: "Education",
      application:
        "Schools model enrollment, costs, student progress, scheduling, and resource use.",
    },

    {
      field: "Data Analytics",
      application:
        "Analysts build mathematical models to describe trends, compare alternatives, and support decisions.",
    },
  ],

  aiConnection: {
    title:
      "Function Modeling and AI",

    explanation:
      "AI systems also use models that transform inputs into outputs. Although advanced AI models may be much more complex than Algebra I functions, the foundational reasoning remains important: define inputs, understand outputs, identify restrictions, test the model, and interpret results.",

    example:
      "Suppose a simple student-support model uses study hours as an input and predicted practice score as an output. The model should not be trusted blindly for impossible inputs such as -4 study hours or values far outside the data used to build it.",

    uses: [
      "Prediction",
      "Input validation",
      "Feature interpretation",
      "Scenario analysis",
      "Model testing",
      "Decision support",
    ],

    caution:
      "A mathematical model is a simplified representation of reality. A calculated prediction is not automatically true. Assumptions, data quality, domain limitations, and context matter.",

    reflectionQuestion:
      "Why should an AI prediction be interpreted as the output of a model rather than treated automatically as a fact?",
  },

  pythonLab: {
    title:
      "Build and Validate a Real-World Function",

    objective:
      "Implement a real-world cost model in Python and reject inputs outside the contextual domain.",

    code: `def program_cost(participants):
    minimum = 12
    maximum = 40

    if participants < minimum or participants > maximum:
        return "Invalid attendance"

    if participants != int(participants):
        return "Participants must be whole people"

    return 450 + 28 * participants


test_values = [
    8,
    12,
    20,
    22.5,
    40,
    45,
]

for p in test_values:
    print(
        "Participants:",
        p,
        "Result:",
        program_cost(p)
    )`,

    questions: [
      "What function is represented in the program?",
      "Why does the code check the minimum and maximum?",
      "Why does it reject 22.5 participants?",
      "What does program_cost(20) return?",
      "What does the value 450 represent?",
      "What does the value 28 represent?",
      "What is the realistic domain?",
      "How does the code enforce the mathematical model's assumptions?",
    ],

    reflectionQuestions: [
      "Why is input validation part of good mathematical modeling?",
      "What could happen if software calculates outputs without checking whether the inputs make sense?",
    ],

    extension:
      "Modify the program so that it also calculates the average cost per participant for every valid attendance value.",
  },

  guidedPractice: [
    {
      question:
        "A gym charges $40 to join and $18 per month. Define a cost function.",
      answer:
        "C(m) = 40 + 18m.",
      difficulty: "Foundation",
    },

    {
      question:
        "Interpret the 18 in C(m) = 40 + 18m.",
      answer:
        "The total cost increases by $18 per month.",
      difficulty: "Interpretation",
    },

    {
      question:
        "Interpret the 40 in C(m) = 40 + 18m.",
      answer:
        "It is the fixed joining fee.",
      difficulty: "Interpretation",
    },

    {
      question:
        "Evaluate C(6).",
      answer:
        "$148.",
      difficulty: "Evaluation",
    },

    {
      question:
        "If membership may last from 1 to 24 whole months, describe the domain.",
      answer:
        "{1, 2, 3, ..., 24}.",
      difficulty: "Domain",
    },

    {
      question:
        "Why would m = -2 be invalid?",
      answer:
        "A negative number of membership months is not meaningful.",
      difficulty: "Reasoning",
    },
  ],

  independentPractice: [
    {
      question:
        "A delivery service charges $7 plus $3 per mile. Build a cost function.",
      answer:
        "C(m) = 7 + 3m.",
    },

    {
      question:
        "Interpret the rate of change in the delivery model.",
      answer:
        "$3 per mile.",
    },

    {
      question:
        "Find the cost for 10 miles.",
      answer:
        "$37.",
    },

    {
      question:
        "A program costs $600 to organize plus $25 per student. Write a function.",
      answer:
        "C(s) = 600 + 25s.",
    },

    {
      question:
        "If the program allows 10 through 50 whole students, state the realistic domain.",
      answer:
        "{10, 11, 12, ..., 50}.",
    },

    {
      question:
        "Explain why s = 18.5 is not part of that domain.",
      answer:
        "Students are counted in whole numbers.",
    },

    {
      question:
        "A function has values (0,20), (1,27), (2,34), and (3,41). Build a possible equation.",
      answer:
        "f(x) = 7x + 20.",
    },

    {
      question:
        "Interpret both 7 and 20 in a possible real-world context.",
      answer:
        "Answers will vary based on the context.",
    },

    {
      question:
        "Create a function model containing a fixed value, rate of change, domain restriction, and meaningful units.",
      answer:
        "Answers will vary.",
    },

    {
      question:
        "Give one input your model can calculate algebraically but should reject contextually.",
      answer:
        "Answers will vary.",
    },
  ],

  commonMistakes: [
    {
      mistake:
        "Writing an equation before identifying what the variables represent.",
      correction:
        "Define quantities and variables first so the equation has meaning.",
    },

    {
      mistake:
        "Including every number from the story in the equation.",
      correction:
        "Separate mathematically relevant information from irrelevant details.",
    },

    {
      mistake:
        "Confusing the fixed value with the rate of change.",
      correction:
        "The fixed value does not depend on input; the rate measures output change per input unit.",
    },

    {
      mistake:
        "Using all real numbers automatically as the domain.",
      correction:
        "Determine what input values make sense in the context.",
    },

    {
      mistake:
        "Accepting fractional values for counted objects.",
      correction:
        "Use discrete whole-number domains when the input represents individual people or objects.",
    },

    {
      mistake:
        "Reporting a numerical answer without interpretation.",
      correction:
        "State what the result means using quantities and units.",
    },

    {
      mistake:
        "Assuming the model is reality.",
      correction:
        "A model simplifies reality and depends on assumptions.",
    },

    {
      mistake:
        "Using a prediction outside the model's intended domain.",
      correction:
        "Check whether the input belongs to the valid domain before interpreting the output.",
    },
  ],

  discussionQuestions: [
    "Why should modeling begin with the situation instead of the equation?",
    "How do you decide which details are relevant?",
    "What makes one quantity a good input variable?",
    "How does the output depend on the input?",
    "Why must variables include meaning and units?",
    "How do domain restrictions improve a model?",
    "Why can an equation produce a numerical answer that should not be used?",
    "What does rate of change tell a decision-maker?",
    "How can multiple representations help test a model?",
    "Why are mathematical models simplifications of reality?",
    "How is an Algebra I function similar to an input-output AI model?",
  ],

  formativeAssessment: {
    passingScore: 8,

    questions: [
      {
        type: "modeling",
        prompt:
          "A service charges $30 plus $5 per hour. Write a cost function.",
        answer:
          "C(h) = 30 + 5h.",
      },

      {
        type: "interpretation",
        prompt:
          "What does 5 represent in C(h) = 30 + 5h?",
        answer:
          "$5 per hour, the rate of change.",
      },

      {
        type: "interpretation",
        prompt:
          "What does 30 represent?",
        answer:
          "The fixed starting cost.",
      },

      {
        type: "evaluation",
        prompt:
          "Find C(8).",
        answer:
          "$70.",
      },

      {
        type: "domain",
        prompt:
          "If service is available from 1 to 10 hours, state the domain if fractional hours are permitted.",
        answer:
          "1 ≤ h ≤ 10.",
      },

      {
        type: "reasoning",
        prompt:
          "Why might h = -3 be algebraically computable but contextually invalid?",
        answer:
          "Negative service time is not meaningful.",
      },

      {
        type: "modeling",
        prompt:
          "A table contains (0,12), (1,16), (2,20), and (3,24). Find a possible function.",
        answer:
          "f(x) = 4x + 12.",
      },

      {
        type: "rate",
        prompt:
          "Interpret the rate in f(x) = 4x + 12.",
        answer:
          "The output increases by 4 for every increase of 1 in the input.",
      },

      {
        type: "validation",
        prompt:
          "Why should a model's domain be checked before making a prediction?",
        sampleAnswer:
          "Because the equation may calculate inputs that are not meaningful or allowed in the real situation.",
      },

      {
        type: "creation",
        prompt:
          "Create a real-world function model and explain its input, output, starting value, rate, and domain.",
        sampleAnswer:
          "Answers will vary.",
      },
    ],
  },

  researchExtension: {
    title:
      "Investigate a Real Mathematical Model",

    description:
      "Find a real relationship that can be represented approximately or exactly using a function.",

    researchQuestion:
      "What assumptions and restrictions determine whether a mathematical model is useful?",

    applicationOptions: [
      "Transportation pricing",
      "Cell-phone plans",
      "Electricity cost",
      "Event budgeting",
      "Shipping charges",
      "School enrollment",
      "Sports statistics",
      "Temperature change",
      "Business revenue",
      "Production costs",
    ],

    task:
      "Identify a real relationship. Define the input and output, collect or create valid data, propose a function model, determine domain and range, interpret its rate of change, test at least two values, and explain limitations of the model.",

    requiredEvidence: [
      "Real-world context",
      "Input variable",
      "Output variable",
      "Units",
      "Function rule",
      "Table or data points",
      "Domain",
      "Range",
      "Rate interpretation",
      "Prediction",
      "Validation",
      "Model limitation",
    ],
  },

  portfolioArtifact: {
    title:
      "Real-World Function Modeling Challenge",

    description:
      "Build a complete mathematical model for an original real-world situation and defend why the model is reasonable.",

    requiredSections: [
      "Real-world scenario",
      "Relevant information",
      "Irrelevant information",
      "Input variable",
      "Output variable",
      "Units",
      "Assumptions",
      "Constraints",
      "Function equation",
      "Function notation",
      "Starting value",
      "Rate of change",
      "Domain",
      "Range",
      "Input-output table",
      "At least five ordered pairs",
      "Graph or graph description",
      "At least two model predictions",
      "One rejected invalid input",
      "Python implementation",
      "Decision or recommendation",
      "Model limitation",
      "Final interpretation",
    ],

    requiredEvidence: [
      "Accurate mathematical relationship",
      "Clear variable definitions",
      "Realistic domain",
      "Correct rate interpretation",
      "Multiple representations",
      "Validation",
      "Python connection",
      "Original reasoning",
      "Meaningful decision",
    ],
  },

  growthIndicators: [
    "Separates relevant from irrelevant information.",
    "Identifies input and output quantities.",
    "Defines meaningful variables.",
    "Builds appropriate function rules.",
    "Interprets fixed values.",
    "Interprets rates of change.",
    "Determines realistic domains.",
    "Determines corresponding ranges.",
    "Evaluates functions accurately.",
    "Uses multiple representations.",
    "Rejects invalid inputs.",
    "Tests model predictions.",
    "Uses Python to implement models.",
    "Explains model assumptions and limitations.",
    "Uses mathematics to support decisions.",
    "Creates original models.",
  ],

  lumineryGuidance: {
    message:
      "Do not begin by searching for an equation. Begin by asking what quantities exist, what changes, and how one quantity depends on another.",

    recommendation:
      "Context → quantities → input/output → variables → assumptions → function → domain → test → interpret → decide.",

    prompt:
      "What must be true about this real situation before your function can be trusted?",

    coachingQuestions: [
      "What is actually happening in the situation?",
      "Which details matter mathematically?",
      "Which details can be ignored?",
      "What quantities are changing?",
      "Which quantity should be the input?",
      "Which quantity should be the output?",
      "What units belong to each quantity?",
      "What should your variables represent?",
      "Is there a fixed starting quantity?",
      "Is there a constant rate of change?",
      "What does each number in your equation mean?",
      "What inputs are realistic?",
      "Is the domain discrete or continuous?",
      "What outputs are possible?",
      "Can your model calculate an unrealistic input?",
      "How will you test whether the model is reasonable?",
      "What prediction can the model make?",
      "What decision can the model support?",
      "What assumption might cause the model to fail?",
      "How could Python validate your model?",
    ],
  },

  summary: [
    "Real-world modeling begins with understanding the situation.",
    "Relevant quantities should be identified before writing equations.",
    "Inputs and outputs must be clearly defined.",
    "Variables should include meaning and units.",
    "A function describes how the output depends on the input.",
    "Many linear models contain a fixed starting value and a constant rate of change.",
    "Domain restrictions come from both mathematics and context.",
    "Discrete quantities such as people usually require whole-number inputs.",
    "Continuous quantities may allow fractional values.",
    "A model should be represented and tested in multiple ways.",
    "Calculated outputs must be interpreted in context.",
    "A model may calculate values that should not be treated as valid predictions.",
    "Mathematical models are simplified representations of reality.",
    "Python can implement models and validate inputs.",
    "Good models help people make predictions and decisions.",
  ],

  reflection: [
    "Why should a modeling problem begin with quantities instead of formulas?",
    "How do you determine which information in a word problem matters?",
    "How can you decide which quantity should be the input?",
    "What does the starting value mean in a real model?",
    "What does rate of change mean?",
    "Why is the domain part of the model rather than an extra detail?",
    "How can a numerical answer be mathematically correct but contextually wrong?",
    "What assumptions does your model make?",
    "How could your model be improved with real data?",
    "How does coding strengthen mathematical modeling?",
    "How could modeling help someone make a better decision?",
  ],

  previousLesson: {
    moduleNumber: 4,
    lessonNumber: 6,
    slug: "rate-of-change-and-comparing-relationships",
    title:
      "Rate of Change and Comparing Relationships",
  },

  nextLesson: {
    moduleNumber: 4,
    lessonNumber: 8,
    slug: "module-4-function-modeling-synthesis",
    title:
      "Module 4 Function Modeling Synthesis & Creator Project",
  },
};

export default lesson07;