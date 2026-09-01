const lesson02 = {
  id: "algebra-two-module-01-lesson-02",

  slug: "domain-range-and-function-behavior",

  courseId: "algebra-2",
  courseTitle: "Algebra II",

  moduleNumber: 1,
  moduleTitle: "Functions and Transformations",

  lessonNumber: 2,

  title: "Domain, Range, and Function Behavior",

  subtitle:
    "Understand which inputs and outputs are possible, how a function changes, and why context matters.",

  duration: "80–95 minutes",

  level: "Intermediate",

  status: "Available",

  essentialQuestion:
    "How can domain, range, and function behavior help us understand what a mathematical model can and cannot represent?",

  bigIdea:
    "Domain tells us which inputs are allowed, range tells us which outputs are possible, and function behavior describes how the outputs change as the inputs change.",

  whyThisLessonExists: {
    title: "Why Domain and Range Matter",

    introduction:
      "A function is more than an equation. In real situations, not every mathematical input makes sense, and not every output is possible. Understanding domain, range, and behavior helps us decide where a model is meaningful and how it changes.",

    centralProblem:
      "An equation may allow many mathematical values, but a real situation may allow only some of them.",

    purpose:
      "This lesson develops the habit of asking three important questions: What inputs are possible? What outputs can occur? How does the relationship change across those inputs?",
  },

  problemFirst: {
    title: "The Community Garden Water Tank",

    scenario:
      "A community garden begins the morning with 240 gallons of water in an irrigation tank. The irrigation system releases water at a constant rate of 30 gallons per hour. The tank is used until it becomes empty. The tank is blue, the garden has 12 planting beds, and volunteers arrive at 8:00 a.m. The amount of water remaining after t hours can be modeled by V(t) = 240 - 30t.",

    questions: [
      "Which information in the situation is mathematically important, and which information is irrelevant?",
      "What does the input t represent?",
      "Can t = -3 make sense in this situation? Explain.",
      "Can t = 12 make sense if the tank becomes empty before then?",
      "What is the greatest possible amount of water in the tank?",
      "What is the least possible amount of water?",
      "As time increases, what happens to the amount of water?",
    ],

    expectedInsight:
      "The equation alone can produce many values, but the real situation restricts the meaningful inputs. Here time begins at 0 and ends when the tank reaches 0 gallons. Therefore the context determines the useful domain and range.",
  },

  visualModels: [
    {
      id: "domain-range-behavior-core",

      type: "comparison",

      title: "Three Questions About Every Function",

      description:
        "Domain, range, and behavior describe different parts of the same relationship.",

      items: [
        {
          label: "Domain",
          symbol: "Allowed inputs",
          meaning:
            "The set of input values for which the function is defined or meaningful.",
        },
        {
          label: "Range",
          symbol: "Possible outputs",
          meaning:
            "The set of output values produced by the allowed inputs.",
        },
        {
          label: "Behavior",
          symbol: "How f(x) changes",
          meaning:
            "Whether outputs increase, decrease, remain constant, reach maximum or minimum values, or change direction.",
        },
        {
          label: "Context",
          symbol: "What makes sense?",
          meaning:
            "A real situation can restrict a mathematical domain or range even when the equation itself accepts more values.",
        },
      ],
    },

    {
      id: "continuous-versus-discrete-domain",

      type: "comparison",

      title: "Continuous and Discrete Domains",

      description:
        "The type of quantity being modeled affects which input values are reasonable.",

      items: [
        {
          label: "Continuous",
          symbol: "0 ≤ t ≤ 8",
          meaning:
            "Time can take values such as 2, 2.5, 2.73, or any other value in the interval.",
        },
        {
          label: "Discrete",
          symbol: "n = 0, 1, 2, 3, ...",
          meaning:
            "Counts such as students, tickets, cars, or computers usually use whole-number inputs.",
        },
        {
          label: "Maximum",
          symbol: "largest output",
          meaning:
            "The greatest value produced by the function over the domain being studied.",
        },
        {
          label: "Minimum",
          symbol: "smallest output",
          meaning:
            "The least value produced by the function over the domain being studied.",
        },
      ],
    },
  ],

  representationModel: {
    title:
      "Table & Graph — One Water-Tank Relationship",

    description:
      "The table and graph show selected values from V(t) = 240 - 30t. The input is time in hours and the output is gallons of water remaining.",

    equation:
      "V(t) = 240 - 30t, 0 ≤ t ≤ 8",

    columns: [
      {
        key: "time",
        label: "Time, t (hours)",
      },
      {
        key: "volume",
        label: "Water, V(t) (gallons)",
      },
    ],

    rows: [
      { time: 0, volume: 240 },
      { time: 1, volume: 210 },
      { time: 2, volume: 180 },
      { time: 3, volume: 150 },
      { time: 4, volume: 120 },
      { time: 5, volume: 90 },
      { time: 6, volume: 60 },
      { time: 7, volume: 30 },
      { time: 8, volume: 0 },
    ],

    xKey: "time",
    yKey: "volume",

    xLabel: "Time, t (hours)",

    yLabel: "Water remaining, V(t) (gallons)",

    highlightPoint: {
      x: 4,
      y: 120,
    },
  },

  learningObjectives: [
    "Identify the domain of a function from an equation, table, graph, or real-world situation.",
    "Identify the range of a function from multiple representations.",
    "Distinguish between continuous and discrete domains.",
    "Describe where a function is increasing, decreasing, or constant.",
    "Identify maximum and minimum values when they exist.",
    "Explain how real-world context can restrict domain and range.",
    "Connect an equation, table, ordered pair, graph, and verbal interpretation.",
  ],

  prerequisiteKnowledge: [
    "Function notation",
    "Input and output",
    "Ordered pairs",
    "Reading tables",
    "Reading coordinate graphs",
    "Solving simple linear equations",
    "Interpreting variables in context",
  ],

  vocabulary: [
    {
      term: "Domain",
      definition:
        "The set of all allowed input values of a function.",
    },
    {
      term: "Range",
      definition:
        "The set of all possible output values of a function.",
    },
    {
      term: "Continuous Domain",
      definition:
        "A domain containing every real value within an interval.",
    },
    {
      term: "Discrete Domain",
      definition:
        "A domain consisting of separated values, often whole-number counts.",
    },
    {
      term: "Increasing Function",
      definition:
        "A function whose outputs increase as the inputs increase over a specified interval.",
    },
    {
      term: "Decreasing Function",
      definition:
        "A function whose outputs decrease as the inputs increase over a specified interval.",
    },
    {
      term: "Constant Function",
      definition:
        "A function whose output remains unchanged as the input changes over an interval.",
    },
    {
      term: "Maximum",
      definition:
        "The greatest output value of a function on the domain being considered.",
    },
    {
      term: "Minimum",
      definition:
        "The least output value of a function on the domain being considered.",
    },
  ],

  formulas: [
    {
      name: "Function Model",

      formula:
        "output = f(input)",

      meaning:
        "A function assigns exactly one output to every allowed input.",

      requirement:
        "The input must belong to the function's domain.",
    },

    {
      name: "Water-Tank Model",

      formula:
        "V(t) = 240 - 30t",

      meaning:
        "The tank starts with 240 gallons and loses 30 gallons for every hour of irrigation.",

      requirement:
        "For this situation, 0 ≤ t ≤ 8.",
    },

    {
      name: "Average Rate of Change",

      formula:
        "[f(b) - f(a)] / [b - a]",

      meaning:
        "Measures how much the output changes on average for each unit change in the input.",

      requirement:
        "a and b must be different domain values.",
    },
  ],

  workedExamples: [
    {
      id: "worked-example-1",

      title: "Domain and Range From Context",

      problem:
        "The amount of water remaining in a tank is V(t) = 240 - 30t. The tank is used from the moment irrigation begins until it becomes empty. Determine the meaningful domain and range.",

      solutionSteps: [
        "At the beginning, t = 0 and V(0) = 240.",
        "Find when the tank becomes empty by setting V(t) = 0.",
        "Solve 240 - 30t = 0.",
        "30t = 240, so t = 8.",
        "Therefore time ranges continuously from 0 through 8 hours.",
        "During that time, the water volume decreases from 240 gallons to 0 gallons.",
      ],

      answer:
        "Domain: 0 ≤ t ≤ 8. Range: 0 ≤ V(t) ≤ 240.",

      interpretation:
        "Only times between the start of irrigation and the empty tank are meaningful. The tank can contain any amount from 240 gallons down to 0 gallons during that interval.",
    },

    {
      id: "worked-example-2",

      title: "A Discrete Domain",

      problem:
        "A school event sells tickets for $15 each. The room holds at most 120 people. Let R(n) = 15n represent revenue from n tickets. Determine the meaningful domain and range.",

      solutionSteps: [
        "n represents the number of tickets sold.",
        "A ticket count cannot be negative.",
        "A ticket count cannot contain fractions such as 3.7 tickets.",
        "The room capacity limits the maximum to 120 tickets.",
        "Therefore n can be any whole number from 0 through 120.",
        "Revenue increases by $15 for each ticket.",
        "The maximum revenue is R(120) = 15(120) = 1800.",
      ],

      answer:
        "Domain: {0, 1, 2, ..., 120}. Range: {0, 15, 30, ..., 1800}.",

      interpretation:
        "This domain is discrete because tickets are counted in whole numbers.",
    },

    {
      id: "worked-example-3",

      title: "Describe Function Behavior",

      problem:
        "Suppose a function has the values f(-2) = 9, f(-1) = 4, f(0) = 1, f(1) = 0, f(2) = 1, f(3) = 4, and f(4) = 9. Describe its behavior.",

      solutionSteps: [
        "Read the outputs from left to right as the inputs increase.",
        "The outputs move 9, 4, 1, 0 from x = -2 to x = 1.",
        "Therefore the function is decreasing over that portion of the domain.",
        "After x = 1, the outputs move 0, 1, 4, 9.",
        "Therefore the function is increasing after x = 1.",
        "The smallest output is 0 at x = 1.",
      ],

      answer:
        "The function decreases until x = 1, reaches a minimum value of 0, and then increases.",

      interpretation:
        "Function behavior describes more than individual points. It describes the overall direction in which outputs change.",
    },
  ],

  interactiveExploration: {
    title: "Change the Starting Amount and Drain Rate",

    description:
      "Investigate how the model V(t) = A - rt changes when the starting amount A or drain rate r changes.",

    instructions: [
      "Begin with A = 240 and r = 30.",
      "Predict the time when the tank becomes empty before calculating it.",
      "Increase A while keeping r fixed and describe what happens to the domain.",
      "Increase r while keeping A fixed and describe what happens to the domain.",
      "Create a small table for each model.",
      "Compare the maximum value, minimum value, domain, range, and rate of change.",
    ],

    questions: [
      "Which parameter controls the starting output?",
      "Which parameter controls how quickly the function decreases?",
      "Does changing the drain rate change the maximum amount of water?",
      "How can you predict the emptying time from A and r?",
      "Why should negative water values be excluded even though the equation could calculate them?",
    ],

    expectedDiscovery:
      "The starting amount determines the maximum output, while the drain rate determines how quickly the output decreases and therefore how long the meaningful domain lasts.",
  },

  realWorldApplications: [
    {
      field: "Transportation",

      application:
        "A vehicle's remaining fuel can be modeled as a function of distance. The physical context prevents negative fuel values and may restrict the meaningful domain to the distance the vehicle can actually travel.",
    },

    {
      field: "Business",

      application:
        "A business may model revenue as a function of units sold. Inventory or seating capacity can create a maximum allowed input.",
    },

    {
      field: "Engineering",

      application:
        "Engineers use operating ranges to identify safe inputs and acceptable outputs for machines, sensors, and control systems.",
    },

    {
      field: "Data Analytics",

      application:
        "Analysts examine valid input ranges and unusual outputs to detect data-quality problems, impossible values, or model limitations.",
    },
  ],

  aiConnection: {
    title:
      "AI Models Also Have Meaningful Input Ranges",

    explanation:
      "Machine-learning systems learn relationships between inputs and outputs from data. A model may technically accept a numerical input outside the range represented in its training data, but its prediction may become unreliable. This is similar to distinguishing a mathematical equation's possible inputs from a model's meaningful domain.",

    example:
      "If a model was trained using temperatures from 20°F to 100°F, asking it to predict behavior at 5,000°F may produce a numerical answer, but the prediction is outside the meaningful range of the training experience.",

    formula:
      "input features → model → predicted output",

    examples: [
      "Age ranges in risk models",
      "Sensor measurement limits",
      "Image pixel ranges",
      "Historical price ranges",
    ],

    uses: [
      "Data validation",
      "Model monitoring",
      "Outlier detection",
      "Safe operating limits",
    ],

    caution:
      "A computer producing an answer does not guarantee that the answer is meaningful. Inputs must be interpreted in context.",

    reflectionQuestion:
      "How is an AI model receiving an unfamiliar input similar to using a mathematical function outside the meaningful domain of a real-world problem?",
  },

  pythonLab: {
    title: "Explore Domain and Range With Python",

    objective:
      "Use Python to generate input-output values for the water-tank function and observe its decreasing behavior.",

    code: `def water_remaining(t):
    return 240 - 30 * t

for t in range(0, 9):
    volume = water_remaining(t)
    print(
        "Time:",
        t,
        "hours | Water:",
        volume,
        "gallons"
    )`,

    questions: [
      "What is the output when t = 0?",
      "What is the output when t = 4?",
      "What is the output when t = 8?",
      "What pattern do you see in the outputs?",
      "What would Python calculate for t = 9, and why should that value be rejected in this real-world model?",
    ],

    reflectionQuestions: [
      "Does Python automatically know the meaningful domain of the problem?",
      "Who is responsible for deciding whether a computed value makes sense?",
      "How could you modify the function so that it rejects times outside 0 ≤ t ≤ 8?",
    ],

    extension:
      "Change the starting amount from 240 to 360 gallons and the drain rate from 30 to 45 gallons per hour. Predict the new meaningful domain before running the program.",
  },

  guidedPractice: [
    {
      id: "guided-1",
      difficulty: "Foundational",

      question:
        "For V(t) = 240 - 30t in the garden situation, what does the domain represent?",

      answer:
        "The domain represents the possible times during which the tank contains water: 0 ≤ t ≤ 8 hours.",
    },

    {
      id: "guided-2",
      difficulty: "Foundational",

      question:
        "For the same model, what does the range represent?",

      answer:
        "The range represents all possible amounts of water remaining, from 0 through 240 gallons.",
    },

    {
      id: "guided-3",
      difficulty: "Intermediate",

      question:
        "Is the water-tank function increasing, decreasing, or constant over its meaningful domain?",

      answer:
        "Decreasing, because the amount of water becomes smaller as time increases.",
    },

    {
      id: "guided-4",
      difficulty: "Intermediate",

      question:
        "Explain the meaning of the ordered pair (4, 120).",

      answer:
        "After 4 hours of irrigation, 120 gallons of water remain in the tank.",
    },

    {
      id: "guided-5",
      difficulty: "Reasoning",

      question:
        "Why is the domain continuous even though the displayed table lists only whole-number times?",

      answer:
        "Time can take any real value between 0 and 8, such as 2.5 or 6.25 hours. The table shows selected samples, not every possible input.",
    },
  ],

  independentPractice: [
    {
      id: "independent-1",

      difficulty: "Foundational",

      question:
        "A parking garage contains floors numbered 1 through 7. If f(n) gives the number of available spaces on floor n, is the domain continuous or discrete?",

      answer:
        "Discrete. The floor numbers are 1, 2, 3, 4, 5, 6, and 7.",
    },

    {
      id: "independent-2",

      difficulty: "Intermediate",

      question:
        "A candle begins 18 cm tall and burns 2 cm per hour. Write a function for its height h after t hours and determine the meaningful domain.",

      answer:
        "h(t) = 18 - 2t. The candle reaches height 0 after 9 hours, so the meaningful domain is 0 ≤ t ≤ 9.",
    },

    {
      id: "independent-3",

      difficulty: "Intermediate",

      question:
        "For the candle model h(t) = 18 - 2t with 0 ≤ t ≤ 9, determine the range.",

      answer:
        "0 ≤ h(t) ≤ 18.",
    },

    {
      id: "independent-4",

      difficulty: "Reasoning",

      question:
        "A student says the domain of V(t) = 240 - 30t is all real numbers because any real number can be substituted into the equation. Explain the error.",

      answer:
        "The student is describing the algebraic domain of the expression without considering the real-world model. In the tank situation, only times from 0 through 8 hours are meaningful.",
    },

    {
      id: "independent-5",

      difficulty: "Representation",

      question:
        "A function has points (0, 5), (1, 8), (2, 11), and (3, 14). State the displayed domain and range.",

      answer:
        "Displayed domain: {0, 1, 2, 3}. Displayed range: {5, 8, 11, 14}.",
    },

    {
      id: "independent-6",

      difficulty: "Higher Order",

      question:
        "Can two functions have the same equation but different meaningful domains? Give an explanation.",

      answer:
        "Yes. Different contexts can restrict the same equation differently. For example, a linear equation might model time for one situation and a count of products for another, producing continuous versus discrete domains.",
    },
  ],

  commonMistakes: [
    {
      mistake:
        "Thinking domain means the y-values.",

      correction:
        "Domain refers to inputs, usually represented by x-values or another independent variable.",

      example:
        "In V(t), t is the input, so time belongs to the domain.",
    },

    {
      mistake:
        "Thinking range means every value an equation could theoretically produce.",

      correction:
        "For real-world models, the meaningful domain determines which outputs belong to the meaningful range.",

      example:
        "V(10) = -60 is mathematically computable but physically impossible for water remaining.",
    },

    {
      mistake:
        "Assuming a table contains the entire domain.",

      correction:
        "A table may show only selected sample values from a continuous function.",

      example:
        "The tank table lists t = 2 and t = 3, but t = 2.5 is also valid.",
    },

    {
      mistake:
        "Calling a function increasing because the x-values increase.",

      correction:
        "Increasing and decreasing describe what happens to the outputs as inputs increase.",

      example:
        "In V(t) = 240 - 30t, time increases while volume decreases.",
    },
  ],

  discussionQuestions: [
    "Why should mathematical models have meaningful boundaries?",
    "Can an equation be mathematically correct but inappropriate for a particular situation?",
    "How can a graph help you identify domain, range, maximum, minimum, and behavior more quickly than an equation alone?",
    "When is a discrete domain more realistic than a continuous domain?",
    "Who should decide whether the output of a computer model makes sense: the computer or the human using it? Explain.",
  ],

  formativeAssessment: {
    totalPoints: 10,

    passingScore: 8,

    questions: [
      {
        id: "assessment-1",
        points: 2,

        prompt:
          "Define domain in your own words.",

        answer:
          "The domain is the set of allowed or meaningful input values for a function.",
      },

      {
        id: "assessment-2",
        points: 2,

        prompt:
          "For V(t) = 240 - 30t in the water-tank context, give the meaningful domain.",

        answer:
          "0 ≤ t ≤ 8.",
      },

      {
        id: "assessment-3",
        points: 2,

        prompt:
          "Give the meaningful range for the same model.",

        answer:
          "0 ≤ V(t) ≤ 240.",
      },

      {
        id: "assessment-4",
        points: 2,

        prompt:
          "Describe the behavior of V(t) over its domain.",

        answer:
          "It is decreasing over the entire meaningful domain.",
      },

      {
        id: "assessment-5",
        points: 2,

        prompt:
          "Explain why t = 9 should be rejected even though the equation can calculate V(9).",

        answer:
          "The tank is already empty at t = 8. At t = 9 the equation gives a negative volume, which is impossible in the physical situation.",
      },
    ],
  },

  researchExtension: {
    title: "When Should a Model Stop?",

    description:
      "Investigate a real system in which a mathematical rule is useful only over a limited range.",

    researchQuestion:
      "How do real-world constraints determine the useful domain and range of a mathematical model?",

    applicationOptions: [
      "Battery charge",
      "Fuel consumption",
      "Water storage",
      "Ticket sales",
      "Temperature",
      "Inventory",
      "Sensor measurements",
    ],

    task:
      "Choose one application. Define the input and output, identify realistic boundaries, build or locate a simple mathematical relationship, and explain where the model should no longer be trusted.",

    requiredEvidence: [
      "Definition of input and output",
      "Equation or mathematical relationship",
      "Domain with explanation",
      "Range with explanation",
      "Table or graph",
      "At least one unrealistic input",
      "Conclusion explaining why context matters",
    ],
  },

  portfolioArtifact: {
    title: "Function Boundary Investigator",

    description:
      "Create a mini modeling project that demonstrates how domain, range, and behavior describe a real relationship.",

    requiredSections: [
      "Real-world situation",
      "Definition of variables",
      "Function rule",
      "Meaningful domain",
      "Meaningful range",
      "Table of values",
      "Graph",
      "Function behavior",
      "Interpretation of one ordered pair",
      "Model limitation",
    ],

    requiredEvidence: [
      "At least one mathematical representation",
      "At least one visual representation",
      "Correct domain and range",
      "Explanation of increasing, decreasing, or constant behavior",
      "One statement explaining when the model should not be used",
    ],
  },

  growthIndicators: [
    {
      title: "Mathematical Reasoning",

      description:
        "Distinguishes values that are algebraically possible from values that are meaningful in context.",
    },

    {
      title: "Representation",

      description:
        "Connects equation, table, ordered pair, graph, domain, and range.",
    },

    {
      title: "Modeling",

      description:
        "Uses real-world constraints to determine appropriate mathematical boundaries.",
    },

    {
      title: "Interpretation",

      description:
        "Explains outputs using units and the original situation.",
    },

    {
      title: "Computational Thinking",

      description:
        "Recognizes that computer output must still be validated using mathematical and contextual reasoning.",
    },

    {
      title: "Communication",

      description:
        "Explains why a domain or range is reasonable instead of simply stating an interval.",
    },
  ],

  reflection: [
    "What is the difference between an equation's possible inputs and a real-world model's meaningful inputs?",
    "Which representation helped you understand domain and range most clearly?",
    "How can you tell whether a function is increasing or decreasing?",
    "Why can a computer calculate a value that should still be rejected?",
    "Where might you use domain restrictions outside mathematics class?",
  ],

  summary: [
    "Domain describes the allowed inputs of a function.",
    "Range describes the outputs produced by the allowed inputs.",
    "Context can restrict domain and range.",
    "Continuous domains contain every value in an interval.",
    "Discrete domains contain separated values such as whole-number counts.",
    "Function behavior describes how outputs change as inputs increase.",
    "A meaningful mathematical answer must fit both the mathematics and the real situation.",
  ],

  lumineryGuidance: {
    message:
      "Do not begin by calculating. First decide what values are actually possible.",

    prompt:
      "Before you state a domain or range, explain what the input and output represent and what the real situation allows.",

    coachingQuestions: [
      "What quantity is the input?",
      "What values can that quantity realistically take?",
      "What outputs result from those allowed inputs?",
      "As the input increases, what happens to the output?",
      "Is the domain continuous or discrete? Why?",
      "What mathematical result would be impossible in the original situation?",
    ],
  },

  previousLesson: {
    lessonNumber: 1,
    title: "Understanding Functions in Algebra II",
    slug: "understanding-functions-in-algebra-ii",
  },

  nextLesson: {
    lessonNumber: 3,
    title: "Parent Functions and Function Families",
    slug: "parent-functions-and-function-families",
  },
};

export default lesson02;