const lesson04 = {
  id: "algebra-one-module-04-lesson-04",
  slug: "domain-and-range",

  courseId: "algebra-1",
  courseTitle: "Algebra I",

  moduleNumber: 4,
  moduleTitle: "Functions and Relations",
  lessonNumber: 4,

  title: "Domain and Range",

  subtitle:
    "Identify allowable inputs and possible outputs from real situations, ordered pairs, tables, equations, and graphs while distinguishing mathematical possibilities from realistic constraints.",

  duration: "75–90 minutes",
  level: "Foundation",
  status: "Available",

  essentialQuestion:
    "How do domain and range describe which inputs are allowed and which outputs a relationship can produce?",

  bigIdea:
    "The domain is the set of allowed input values. The range is the set of output values produced by those inputs. In real-world models, mathematical possibilities must also be checked against contextual restrictions such as time, capacity, age, whole-number counts, and physical limits.",

  whyThisLessonExists: {
    title:
      "Not Every Input Makes Sense",

    introduction:
      "A function rule may look as though any number can be substituted, but real situations often restrict the inputs. A concert cannot sell -5 tickets. A classroom cannot contain 18.7 students. A rental business may operate only from 1 to 8 hours. Understanding domain and range helps us determine which inputs and outputs are meaningful.",

    centralProblem:
      "How can we determine which values belong to the domain and which values belong to the range—and explain why?",

    purpose:
      "Students learn to identify domain and range from multiple representations while emphasizing interpretation, restrictions, units, and realistic modeling.",
  },

  problemFirst: {
    title:
      "The Robotics Workshop",

    scenario:
      "A robotics workshop can accept at most 24 students. Each registered student pays $30. The workshop must have at least 6 students to operate. Registration is counted in whole students. The instructor drives a blue car, the workshop begins at 9:00 a.m., and students receive notebooks.",

    questions: [
      "What quantity should be the input?",
      "What quantity should be the output?",
      "Which details affect the mathematical relationship?",
      "Which details are irrelevant?",
      "What is the smallest possible number of students?",
      "What is the largest possible number of students?",
      "Can 10.5 students register?",
      "Can -3 students register?",
      "What values belong to the realistic domain?",
      "If revenue is R(s) = 30s, what revenue corresponds to 6 students?",
      "What revenue corresponds to 24 students?",
      "What values belong to the range?",
      "Is the range continuous or discrete in this situation?",
      "Why is identifying only the equation R(s) = 30s not enough to describe the complete model?",
    ],

    expectedInsight:
      "Let s represent the number of students. Because the workshop requires at least 6 students, allows at most 24 students, and students are counted in whole numbers, the domain is s ∈ {6, 7, 8, ..., 24}. Since R(s) = 30s, the corresponding range is {180, 210, 240, ..., 720}.",
  },

  visualModels: [
    {
      id: "domain-range-meaning",
      type: "comparison",

      title:
        "Domain and Range",

      description:
        "Domain and range describe two different parts of an input-output relationship.",

      items: [
        {
          label: "Domain",
          symbol: "allowed inputs",
          meaning:
            "The set of input values that may be used in the relation or function.",
        },

        {
          label: "Range",
          symbol: "possible outputs",
          meaning:
            "The set of output values produced by the allowed inputs.",
        },
      ],
    },

    {
      id: "robotics-domain",
      type: "compoundNumberLine",

      title:
        "Mathematical Attendance Boundary: 6 ≤ s ≤ 24",

      description:
        "The workshop requires at least 6 students and permits no more than 24.",

      min: 0,
      max: 30,

      lowerBoundary: 6,
      upperBoundary: 24,

      lowerInclusive: true,
      upperInclusive: true,

      variable: "s",

      interpretation:
        "The interval shows the minimum and maximum attendance boundaries. Because s counts students, the realistic domain contains only whole-number values inside this interval.",
    },

    {
      id: "continuous-vs-discrete",
      type: "comparison",

      title:
        "Continuous vs. Discrete Domains",

      description:
        "Context determines whether every value in an interval is meaningful.",

      items: [
        {
          label: "Continuous",
          symbol: "0 ≤ t ≤ 5",
          meaning:
            "Time can usually take decimal values such as 2.4 hours.",
        },

        {
          label: "Discrete",
          symbol: "s = 6, 7, 8, ...",
          meaning:
            "Student counts use whole numbers because fractional students are not realistic.",
        },
      ],
    },

    {
      id: "math-vs-context",
      type: "comparison",

      title:
        "Mathematical Domain vs. Contextual Domain",

      description:
        "A formula may accept more inputs algebraically than the real situation allows.",

      items: [
        {
          label: "Mathematical Rule",
          symbol: "C(h) = 20 + 15h",
          meaning:
            "The algebraic expression can be evaluated for many real numbers.",
        },

        {
          label: "Real Rental Situation",
          symbol: "1 ≤ h ≤ 8",
          meaning:
            "If equipment can only be rented from 1 to 8 hours, the practical domain is restricted.",
        },
      ],
    },

    {
      id: "input-output-restrictions",
      type: "comparison",

      title:
        "Restriction Reasoning",

      description:
        "A good model explains not only what values are included, but why other values are excluded.",

      items: [
        {
          label: "Allowed",
          symbol: "12 students",
          meaning:
            "12 is a whole number and lies between the minimum and maximum attendance limits.",
        },

        {
          label: "Not Allowed",
          symbol: "12.5 students",
          meaning:
            "Although 12.5 lies numerically between 6 and 24, it is not realistic for a student count.",
        },
      ],
    },
  ],

  learningObjectives: [
    "Define domain as the set of allowed inputs.",
    "Define range as the set of possible outputs.",
    "Identify domain and range from ordered pairs.",
    "Identify domain and range from tables.",
    "Determine domain restrictions from real-world situations.",
    "Distinguish mathematical domain from contextual domain.",
    "Distinguish discrete and continuous domains.",
    "Use function rules to generate corresponding ranges.",
    "Interpret domain and range using units.",
    "Determine whether boundary values are included.",
    "Explain why certain inputs are unrealistic or invalid.",
    "Use Python to generate domain-range pairs.",
    "Create an original domain-and-range model.",
  ],

  prerequisiteKnowledge: [
    "Relations",
    "Inputs and outputs",
    "Functions",
    "Function notation",
    "Evaluating functions",
    "Ordered pairs",
    "Tables",
    "Inequalities",
    "Number lines",
    "Whole numbers and real numbers",
  ],

  vocabulary: [
    {
      term: "Domain",
      definition:
        "The set of all allowable input values of a relation or function.",
    },

    {
      term: "Range",
      definition:
        "The set of output values produced by the inputs in the domain.",
    },

    {
      term: "Discrete",
      definition:
        "A set of separate countable values rather than every value in an interval.",
    },

    {
      term: "Continuous",
      definition:
        "A set that may include every real value throughout an interval.",
    },

    {
      term: "Restriction",
      definition:
        "A condition limiting which inputs or outputs are allowable.",
    },

    {
      term: "Contextual Domain",
      definition:
        "The input values that make sense within the real-world situation being modeled.",
    },

    {
      term: "Boundary",
      definition:
        "A value marking the beginning or end of an allowed interval.",
    },
  ],

  formulas: [
    {
      name: "Domain",
      formula: "Domain = allowed inputs",
      meaning:
        "Ask which input values can actually be used.",
    },

    {
      name: "Range",
      formula: "Range = resulting outputs",
      meaning:
        "Evaluate the function over the domain to determine possible outputs.",
    },

    {
      name: "Ordered-Pair Rule",
      formula: "(x, y)",
      meaning:
        "Domain values come from the first coordinates; range values come from the second coordinates.",
    },

    {
      name: "Modeling Process",
      formula:
        "Context → input → restrictions → domain → function → outputs → range → interpretation",
      meaning:
        "Domain and range should be connected to the meaning of the model.",
    },
  ],

  workedExamples: [
    {
      title:
        "Domain and Range from Ordered Pairs",

      problem:
        "Find the domain and range of {(1, 4), (2, 6), (3, 8), (4, 10)}.",

      solutionSteps: [
        "The first coordinate of each ordered pair is an input.",
        "Collect the inputs: 1, 2, 3, 4.",
        "The second coordinate of each ordered pair is an output.",
        "Collect the outputs: 4, 6, 8, 10.",
      ],

      answer:
        "Domain = {1, 2, 3, 4}; Range = {4, 6, 8, 10}.",
    },

    {
      title:
        "Repeated Values in Domain and Range",

      problem:
        "Find the domain and range of {(1, 5), (2, 5), (3, 7), (4, 7)}.",

      solutionSteps: [
        "List all first coordinates.",
        "Domain = {1, 2, 3, 4}.",
        "List the output values.",
        "Outputs 5 and 7 repeat.",
        "Sets normally list repeated values only once.",
      ],

      answer:
        "Domain = {1, 2, 3, 4}; Range = {5, 7}.",

      interpretation:
        "Several inputs may share the same output.",
    },

    {
      title:
        "Domain and Range from a Table",

      problem:
        "A table contains input values -2, 0, 3, 5 and output values 7, 1, 4, 9.",

      solutionSteps: [
        "Inputs form the domain.",
        "Outputs form the range.",
      ],

      answer:
        "Domain = {-2, 0, 3, 5}; Range = {7, 1, 4, 9}.",
    },

    {
      title:
        "Discrete Real-World Domain",

      problem:
        "A van can carry from 1 through 8 passengers. Let p represent the number of passengers.",

      solutionSteps: [
        "The minimum passenger count is 1.",
        "The maximum is 8.",
        "Passengers are counted in whole numbers.",
        "Values such as 3.5 are not realistic.",
      ],

      answer:
        "Domain = {1, 2, 3, 4, 5, 6, 7, 8}.",

      interpretation:
        "The domain is discrete.",
    },

    {
      title:
        "Continuous Real-World Domain",

      problem:
        "A pump operates for any amount of time from 0 through 6 hours. Let t represent operating time.",

      solutionSteps: [
        "Minimum time is 0 hours.",
        "Maximum time is 6 hours.",
        "Time may include decimal values.",
        "Examples include 1.5, 2.73, and 5.9.",
      ],

      answer:
        "0 ≤ t ≤ 6",

      interpretation:
        "The domain is continuous.",
    },

    {
      title:
        "Generate the Range from a Function",

      problem:
        "The domain is {0, 1, 2, 3, 4} and f(x) = 2x + 1. Find the range.",

      solutionSteps: [
        "Evaluate f(0) = 1.",
        "Evaluate f(1) = 3.",
        "Evaluate f(2) = 5.",
        "Evaluate f(3) = 7.",
        "Evaluate f(4) = 9.",
        "Collect the outputs.",
      ],

      answer:
        "Range = {1, 3, 5, 7, 9}.",
    },

    {
      title:
        "Ticket Revenue",

      problem:
        "A theater can sell from 0 through 100 tickets at $12 each. Let t represent tickets sold and R(t) = 12t.",

      solutionSteps: [
        "Ticket count cannot be negative.",
        "The theater capacity is 100.",
        "Tickets are counted in whole numbers.",
        "Domain = {0, 1, 2, ..., 100}.",
        "Minimum revenue: R(0) = 0.",
        "Maximum revenue: R(100) = 1200.",
        "Revenue increases by $12 for each additional ticket.",
      ],

      answer:
        "Domain = whole numbers from 0 to 100. Range = {0, 12, 24, ..., 1200}.",
    },

    {
      title:
        "Mathematical vs. Practical Domain",

      problem:
        "A taxi model is C(m) = 4 + 2.5m, where m is miles traveled. Algebraically the formula can accept negative values. Should negative mileage belong to the practical domain?",

      solutionSteps: [
        "The equation can be evaluated at negative values mathematically.",
        "But negative travel distance is not meaningful in this pricing context.",
        "Therefore the context restricts the domain.",
      ],

      answer:
        "No. For this context, m should be nonnegative.",

      interpretation:
        "Real-world meaning can impose restrictions beyond algebraic computation.",
    },

    {
      title:
        "Age Eligibility",

      problem:
        "A youth program accepts participants from age 12 through age 17 inclusive.",

      solutionSteps: [
        "Minimum age is 12.",
        "Maximum age is 17.",
        "Both boundaries are included.",
        "If age is recorded only as whole years for the program, possible values are 12, 13, 14, 15, 16, and 17.",
      ],

      answer:
        "Domain = {12, 13, 14, 15, 16, 17} under the stated whole-year interpretation.",
    },

    {
      title:
        "Find a Range with Repeated Outputs",

      problem:
        "For domain {-2, -1, 0, 1, 2}, find the range of f(x) = x².",

      solutionSteps: [
        "f(-2) = 4.",
        "f(-1) = 1.",
        "f(0) = 0.",
        "f(1) = 1.",
        "f(2) = 4.",
        "Remove repeated values when listing the range as a set.",
      ],

      answer:
        "Range = {0, 1, 4}.",

      interpretation:
        "Different inputs can produce the same output.",
    },
  ],

  interactiveExploration: {
    title:
      "Domain Detective",

    description:
      "Analyze whether possible inputs are mathematically allowed, contextually realistic, or both.",

    instructions: [
      "Begin with the rule C(n) = 8n.",
      "Suppose n represents the number of notebooks purchased.",
      "Evaluate C(0), C(1), C(2), and C(5).",
      "Now consider n = -3.",
      "Explain whether the calculation is algebraically possible.",
      "Explain whether -3 notebooks makes sense contextually.",
      "Consider n = 2.5.",
      "Decide whether fractional notebooks are allowed if notebooks must be purchased individually.",
      "Create a realistic domain.",
      "Generate the corresponding range.",
      "Change the context so that the input becomes continuous rather than discrete.",
    ],

    questions: [
      "What makes an input mathematically valid?",
      "What makes an input contextually meaningful?",
      "Can an equation accept a value that the real situation rejects?",
      "Why does the meaning of the variable matter?",
      "How does restricting the domain change the range?",
    ],

    expectedDiscovery:
      "Domain is not determined by symbols alone. Real-world meaning often restricts which mathematically possible values should actually be included.",
  },

  realWorldApplications: [
    {
      field: "Business",
      application:
        "Businesses restrict domains according to capacity, inventory, operating hours, budgets, and realistic sales quantities.",
    },

    {
      field: "Transportation",
      application:
        "Travel models may restrict time, distance, passenger count, or vehicle capacity.",
    },

    {
      field: "Engineering",
      application:
        "Machines operate only within specified input ranges such as temperature, pressure, or voltage.",
    },

    {
      field: "Education",
      application:
        "Student counts, grade levels, ages, and assessment scales all introduce domain and range restrictions.",
    },

    {
      field: "Science",
      application:
        "Scientific models often apply only within experimentally meaningful input ranges.",
    },

    {
      field: "Computer Science",
      application:
        "Programs validate allowed inputs before processing them.",
    },
  ],

  aiConnection: {
    title:
      "Valid Inputs for AI Systems",

    explanation:
      "AI models also operate on defined input spaces. A system trained to process certain types of data may not behave meaningfully when given inputs outside the conditions it was designed for.",

    example:
      "A model trained to predict student performance from values such as attendance percentage between 0 and 100 should not receive attendance = 145% or attendance = -20% without validation.",

    uses: [
      "Input validation",
      "Data cleaning",
      "Model boundaries",
      "Feature constraints",
      "Quality assurance",
      "Anomaly detection",
    ],

    caution:
      "A computer may accept a numerical input even when the value is impossible or meaningless in the real world. Good systems validate domain assumptions.",

    reflectionQuestion:
      "Why should an AI system check whether inputs fall inside meaningful ranges before making a prediction?",
  },

  pythonLab: {
    title:
      "Generate a Domain and Range",

    objective:
      "Use Python to generate outputs for a restricted set of inputs.",

    code: `def revenue(students):
    return 30 * students

domain = list(range(6, 25))
range_values = []

for students in domain:
    output = revenue(students)
    range_values.append(output)

print("Domain:", domain)
print("Range:", range_values)`,

    questions: [
      "Why does range(6, 25) begin at 6?",
      "Why does it stop before 25?",
      "What is the smallest output?",
      "What is the largest output?",
      "Why are only whole-number inputs generated?",
      "How does the Python domain match the robotics workshop context?",
      "What would change if the domain were continuous?",
    ],

    reflectionQuestions: [
      "Why should code reflect contextual restrictions rather than blindly evaluating every possible input?",
      "How could the program reject invalid inputs such as 3 or 30 students?",
    ],

    extension:
      "Add validation that prints 'Invalid attendance' whenever the number of students is below 6 or above 24.",
  },

  guidedPractice: [
    {
      question:
        "Find the domain and range of {(2, 5), (4, 7), (6, 9)}.",
      answer:
        "Domain = {2, 4, 6}; Range = {5, 7, 9}.",
      difficulty: "Foundation",
    },

    {
      question:
        "Find the domain and range of {(1, 8), (2, 8), (3, 10)}.",
      answer:
        "Domain = {1, 2, 3}; Range = {8, 10}.",
      difficulty: "Foundation",
    },

    {
      question:
        "A bus holds from 0 through 50 passengers. Describe a realistic domain.",
      answer:
        "Whole numbers from 0 through 50.",
      difficulty: "Application",
    },

    {
      question:
        "A machine can operate continuously from 2 through 10 hours. Describe the domain.",
      answer:
        "2 ≤ t ≤ 10.",
      difficulty: "Continuous domain",
    },

    {
      question:
        "If domain = {0, 1, 2, 3} and f(x) = 5x, find the range.",
      answer:
        "{0, 5, 10, 15}.",
      difficulty: "Evaluation",
    },

    {
      question:
        "Why should -4 not belong to the domain if x represents the number of customers?",
      answer:
        "A number of customers cannot be negative.",
      difficulty: "Reasoning",
    },
  ],

  independentPractice: [
    {
      question:
        "Find the domain and range of {(0, 4), (2, 8), (4, 12), (6, 16)}.",
      answer:
        "Domain = {0, 2, 4, 6}; Range = {4, 8, 12, 16}.",
    },

    {
      question:
        "Find the domain and range of {(1, 3), (2, 3), (3, 5), (4, 5)}.",
      answer:
        "Domain = {1, 2, 3, 4}; Range = {3, 5}.",
    },

    {
      question:
        "The domain is {-2, -1, 0, 1, 2}. Find the range of f(x) = x + 4.",
      answer:
        "{2, 3, 4, 5, 6}.",
    },

    {
      question:
        "The domain is {-3, -2, -1, 0, 1, 2, 3}. Find the range of f(x) = x².",
      answer:
        "{0, 1, 4, 9}.",
    },

    {
      question:
        "A restaurant can seat no more than 80 customers. Give a reasonable domain for customer count.",
      answer:
        "Whole numbers from 0 through 80.",
    },

    {
      question:
        "A runner records time continuously from 0 to 60 minutes. Give the domain.",
      answer:
        "0 ≤ t ≤ 60.",
    },

    {
      question:
        "Explain why 4.5 might be reasonable if x represents hours but unreasonable if x represents buses.",
      answer:
        "Time can be continuous, but buses are counted in whole numbers.",
    },

    {
      question:
        "Create a function whose real-world domain is restricted even though the algebraic rule can accept more values.",
      answer:
        "Answers will vary.",
    },

    {
      question:
        "Create a discrete domain and generate the corresponding range for your own function.",
      answer:
        "Answers will vary.",
    },
  ],

  commonMistakes: [
    {
      mistake:
        "Reversing domain and range.",
      correction:
        "Domain refers to inputs; range refers to outputs.",
    },

    {
      mistake:
        "Reading the second coordinate as the domain.",
      correction:
        "In (x, y), the x-values form the domain and the y-values form the range.",
    },

    {
      mistake:
        "Listing repeated range values multiple times in set notation.",
      correction:
        "A set lists each distinct value once.",
    },

    {
      mistake:
        "Assuming every real number belongs to the domain because the equation can evaluate it.",
      correction:
        "Check whether the context restricts inputs.",
    },

    {
      mistake:
        "Including decimal values for counted objects.",
      correction:
        "Counts such as students, buses, and tickets generally use whole-number values.",
    },

    {
      mistake:
        "Forgetting units.",
      correction:
        "Domain and range should be interpreted using the quantities and units of the situation.",
    },

    {
      mistake:
        "Assuming the range is automatically every value between its minimum and maximum.",
      correction:
        "A discrete domain may produce a discrete range with gaps.",
    },
  ],

  discussionQuestions: [
    "Why is domain more than simply 'the x-values'?",
    "How can context restrict a mathematical function?",
    "Why are student counts discrete but time often continuous?",
    "How does changing the domain affect the range?",
    "Can two different inputs produce the same range value?",
    "Why should a programmer validate inputs?",
    "What could happen if an AI system receives values outside its intended domain?",
    "Where do you encounter restricted domains in everyday life?",
  ],

  formativeAssessment: {
    passingScore: 8,

    questions: [
      {
        type: "definition",
        prompt:
          "What is the domain of a relation?",
        answer:
          "The set of allowable input values.",
      },

      {
        type: "definition",
        prompt:
          "What is the range of a relation?",
        answer:
          "The set of output values produced by the inputs.",
      },

      {
        type: "ordered-pairs",
        prompt:
          "Find the domain of {(1, 4), (2, 6), (5, 9)}.",
        answer:
          "{1, 2, 5}.",
      },

      {
        type: "ordered-pairs",
        prompt:
          "Find the range of {(1, 4), (2, 4), (5, 9)}.",
        answer:
          "{4, 9}.",
      },

      {
        type: "evaluation",
        prompt:
          "If domain = {0, 1, 2} and f(x) = 3x + 1, find the range.",
        answer:
          "{1, 4, 7}.",
      },

      {
        type: "discrete",
        prompt:
          "Why is the number of students usually modeled with a discrete domain?",
        answer:
          "Students are counted in whole numbers.",
      },

      {
        type: "continuous",
        prompt:
          "Give an example of a quantity that may use a continuous domain.",
        sampleAnswer:
          "Time, temperature, distance, or mass.",
      },

      {
        type: "context",
        prompt:
          "A formula accepts x = -5 algebraically, but x represents the number of tickets sold. Should -5 belong to the practical domain?",
        answer:
          "No.",
      },

      {
        type: "reasoning",
        prompt:
          "Explain the difference between mathematical domain and contextual domain.",
        sampleAnswer:
          "The mathematical domain contains values allowed by the expression, while the contextual domain contains values meaningful in the real situation.",
      },

      {
        type: "creation",
        prompt:
          "Create a real-world function with a restricted domain.",
        sampleAnswer:
          "Answers will vary.",
      },
    ],
  },

  researchExtension: {
    title:
      "Investigate a Real Restricted Domain",

    description:
      "Find a real system where inputs are only valid within certain limits.",

    researchQuestion:
      "Why do real systems restrict which input values are accepted?",

    applicationOptions: [
      "Theme park height requirements",
      "Vehicle capacity",
      "Machine temperature ranges",
      "Loan eligibility",
      "School enrollment",
      "Shipping weight limits",
      "Manufacturing tolerances",
      "Software input validation",
    ],

    task:
      "Choose a real system. Define the input and output quantities, identify the domain restrictions, determine whether the domain is discrete or continuous, describe the range, and explain what happens when an invalid input is supplied.",

    requiredEvidence: [
      "Real-world context",
      "Input definition",
      "Output definition",
      "Domain",
      "Range",
      "Boundary explanation",
      "Discrete or continuous classification",
      "Invalid-input example",
      "Written interpretation",
    ],
  },

  portfolioArtifact: {
    title:
      "Domain and Range Model Designer",

    description:
      "Create an original real-world function where the meaning of the situation restricts the domain.",

    requiredSections: [
      "Real-world scenario",
      "Input quantity",
      "Output quantity",
      "Units",
      "Function rule",
      "Mathematical domain",
      "Contextual domain",
      "Explanation of restrictions",
      "Discrete or continuous classification",
      "At least five input-output pairs",
      "Range",
      "One invalid input",
      "Explanation of why it is invalid",
      "Python implementation",
    ],

    requiredEvidence: [
      "Correct domain",
      "Correct range",
      "Realistic restrictions",
      "Multiple representations",
      "Python connection",
      "Written interpretation",
      "Original modeling",
    ],
  },

  growthIndicators: [
    "Defines domain correctly.",
    "Defines range correctly.",
    "Identifies domain from ordered pairs.",
    "Identifies range from ordered pairs.",
    "Interprets tables correctly.",
    "Generates ranges from function rules.",
    "Recognizes discrete domains.",
    "Recognizes continuous domains.",
    "Applies contextual restrictions.",
    "Uses units appropriately.",
    "Distinguishes mathematical and realistic possibilities.",
    "Explains invalid inputs.",
    "Uses Python to generate domain-range pairs.",
    "Creates original restricted-domain models.",
  ],

  lumineryGuidance: {
    message:
      "Do not ask only, 'What x-values are shown?' Ask, 'What inputs are actually allowed, and why?'",

    recommendation:
      "Context → input → restrictions → domain → function → outputs → range → interpretation.",

    prompt:
      "Which inputs make sense in this situation, and what outputs do those inputs produce?",

    coachingQuestions: [
      "What does the input represent?",
      "What does the output represent?",
      "What units belong to each?",
      "What is the smallest allowed input?",
      "What is the largest allowed input?",
      "Are the boundaries included?",
      "Can the input be negative?",
      "Can the input be fractional?",
      "Is the domain discrete or continuous?",
      "What outputs result from the allowed inputs?",
      "Does the range contain repeated values?",
      "What input would be mathematically computable but unrealistic?",
      "How does the context change the domain?",
      "How could Python validate the allowed inputs?",
    ],
  },

  summary: [
    "Domain is the set of allowed inputs.",
    "Range is the set of resulting outputs.",
    "In ordered pairs, first coordinates form the domain.",
    "Second coordinates form the range.",
    "Repeated values are listed once when writing sets.",
    "A function's real-world domain may be smaller than the algebraic domain.",
    "Context can restrict negative, fractional, minimum, or maximum inputs.",
    "Discrete domains contain separate allowable values.",
    "Continuous domains may contain every real value throughout an interval.",
    "Changing the domain can change the range.",
    "Units and real-world meaning are essential when interpreting domain and range.",
    "Computer systems should validate whether inputs belong to an acceptable domain.",
  ],

  reflection: [
    "How would you explain domain without using the phrase 'x-values'?",
    "How would you explain range without using the phrase 'y-values'?",
    "Why can an equation accept an input that a real situation rejects?",
    "What is the difference between a discrete and continuous domain?",
    "How does restricting the domain affect possible outputs?",
    "Which real-world example in this lesson made domain easiest to understand?",
    "Why is input validation important in software and AI systems?",
    "Create one input that is mathematically possible but contextually impossible and explain why.",
  ],

  previousLesson: {
    moduleNumber: 4,
    lessonNumber: 3,
    slug: "function-notation-and-evaluating-functions",
    title:
      "Function Notation and Evaluating Functions",
  },

  nextLesson: {
    moduleNumber: 4,
    lessonNumber: 5,
    slug: "representing-functions-multiple-ways",
    title:
      "Representing Functions with Tables, Graphs, Equations, and Mappings",
  },
};

export default lesson04;