const lesson05 = {
  id: "algebra-one-module-04-lesson-05",
  slug: "representing-functions-multiple-ways",

  courseId: "algebra-1",
  courseTitle: "Algebra I",

  moduleNumber: 4,
  moduleTitle: "Functions and Relations",
  lessonNumber: 5,

  title:
    "Representing Functions with Tables, Graphs, Equations, and Mappings",

  subtitle:
    "Translate one function among words, tables, ordered pairs, mappings, graphs, equations, and function notation while explaining what remains mathematically unchanged.",

  duration: "80–95 minutes",
  level: "Foundation",
  status: "Available",

  essentialQuestion:
    "How can the same function be represented in different ways without changing the relationship it describes?",

  bigIdea:
    "A function is a relationship, not a particular picture or equation. Tables, graphs, ordered pairs, mappings, equations, function notation, words, and code are different representations of the same underlying input-output structure.",

  whyThisLessonExists: {
    title:
      "Representation Is Mathematical Communication",

    introduction:
      "Students sometimes think of a table, graph, equation, and mapping as separate topics. But these are different languages for communicating the same mathematical relationship. Strong mathematical thinkers can move between representations and explain what each representation reveals.",

    centralProblem:
      "How can we recognize the same function when its appearance changes from words to a table, graph, mapping, or equation?",

    purpose:
      "Students learn to translate among representations, verify that representations describe the same function, identify advantages of each form, and choose representations strategically.",
  },

  problemFirst: {
    title:
      "The School Technology Club",

    scenario:
      "A school technology club charges a one-time registration fee of $20 plus $8 for each workshop attended. Let w represent the number of workshops and C(w) represent total cost. A student says the relationship can be understood only from the equation C(w) = 20 + 8w. Another student says a table would be clearer. A third student wants a graph. The club shirts are purple, meetings are held on Tuesdays, and the adviser has taught for 11 years.",

    questions: [
      "Which information determines the mathematical relationship?",
      "Which details are irrelevant?",
      "What is the input quantity?",
      "What is the output quantity?",
      "What does C(w) = 20 + 8w mean?",
      "What is C(0)?",
      "What is C(1)?",
      "What is C(2)?",
      "Create at least five input-output pairs.",
      "How could those pairs be organized in a table?",
      "How would each table row become an ordered pair?",
      "How could a mapping connect each workshop count to its cost?",
      "Where would the ordered pairs appear on a graph?",
      "What information does the equation reveal immediately?",
      "What information does the table reveal immediately?",
      "What information might the graph reveal more clearly?",
      "Which representation is best?",
      "Could more than one answer to the previous question be reasonable?",
    ],

    expectedInsight:
      "The function remains C(w) = 20 + 8w regardless of representation. For example, the table values (0,20), (1,28), (2,36), (3,44), and (4,52) describe the same relationship as the equation. Different representations emphasize different features.",
  },

  visualModels: [
    {
      id: "representation-language",
      type: "comparison",

      title:
        "One Function, Many Mathematical Languages",

      description:
        "Changing the representation does not change the underlying input-output relationship.",

      items: [
        {
          label: "Words",
          symbol: "$20 + $8 per workshop",
          meaning:
            "Communicates the relationship using everyday language.",
        },

        {
          label: "Equation",
          symbol: "C(w) = 20 + 8w",
          meaning:
            "Communicates the complete rule compactly.",
        },

        {
          label: "Ordered Pairs",
          symbol: "(0,20), (1,28), (2,36)",
          meaning:
            "Shows specific inputs paired with their corresponding outputs.",
        },

        {
          label: "Table",
          symbol: "w → C(w)",
          meaning:
            "Organizes several input-output values so patterns are easy to compare.",
        },
      ],
    },

    {
      id: "mapping-thinking",
      type: "comparison",

      title:
        "Mapping: Follow the Input to Its Output",

      description:
        "A mapping emphasizes which output belongs to each input.",

      items: [
        {
          label: "Input",
          symbol: "2 workshops",
          meaning:
            "Begin with the selected input value.",
        },

        {
          label: "Rule",
          symbol: "20 + 8(2)",
          meaning:
            "Apply the same function rule.",
        },

        {
          label: "Output",
          symbol: "$36",
          meaning:
            "The input 2 maps to the output 36.",
        },
      ],
    },

    {
      id: "graph-equation-thinking",
      type: "comparison",

      title:
        "What Different Representations Reveal",

      description:
        "Representations are mathematically equivalent, but some make particular features easier to notice.",

      items: [
        {
          label: "Table",
          symbol: "specific values",
          meaning:
            "Useful when exact input-output pairs need to be read quickly.",
        },

        {
          label: "Graph",
          symbol: "visual pattern",
          meaning:
            "Useful for seeing overall shape, change, comparisons, and trends.",
        },

        {
          label: "Equation",
          symbol: "general rule",
          meaning:
            "Useful for calculating outputs for many different inputs.",
        },

        {
          label: "Mapping",
          symbol: "input → output",
          meaning:
            "Useful for checking how each input is connected to an output.",
        },
      ],
    },

    {
      id: "representation-consistency",
      type: "comparison",

      title:
        "Consistency Check",

      description:
        "Representations describe the same function only when corresponding inputs produce identical outputs.",

      items: [
        {
          label: "Equation",
          symbol: "f(x) = 3x + 2",
          meaning:
            "For x = 4, the equation produces f(4) = 14.",
        },

        {
          label: "Table / Graph",
          symbol: "(4,14)",
          meaning:
            "A matching representation must also contain the point corresponding to input 4 and output 14.",
        },
      ],
    },
  ],

  learningObjectives: [
    "Explain why a function can have multiple representations.",
    "Translate a verbal relationship into a table.",
    "Translate a table into ordered pairs.",
    "Interpret a mapping as input-output connections.",
    "Plot ordered pairs conceptually on a coordinate plane.",
    "Connect table values to graph points.",
    "Connect equations to tables.",
    "Connect function notation to equations.",
    "Determine whether two representations describe the same function.",
    "Identify advantages and limitations of different representations.",
    "Choose a representation appropriate for a mathematical task.",
    "Interpret representations using real-world units.",
    "Use Python to generate tables of function values.",
    "Create a multi-representation function model.",
  ],

  prerequisiteKnowledge: [
    "Relations",
    "Functions",
    "Function versus non-function",
    "Function notation",
    "Evaluating functions",
    "Domain and range",
    "Ordered pairs",
    "Tables",
    "Coordinate plane",
    "Variables and equations",
  ],

  vocabulary: [
    {
      term: "Representation",
      definition:
        "A way of communicating a mathematical relationship, such as words, a table, ordered pairs, a mapping, a graph, an equation, or code.",
    },

    {
      term: "Table",
      definition:
        "An organized display pairing input values with corresponding output values.",
    },

    {
      term: "Mapping",
      definition:
        "A representation showing connections from each input to its corresponding output.",
    },

    {
      term: "Graph",
      definition:
        "A visual representation in which ordered pairs are shown as points in a coordinate system.",
    },

    {
      term: "Equation",
      definition:
        "A symbolic statement describing the rule connecting inputs and outputs.",
    },

    {
      term: "Equivalent Representations",
      definition:
        "Different forms that describe the same mathematical relationship.",
    },

    {
      term: "Coordinate",
      definition:
        "A number indicating the position of a point along an axis.",
    },
  ],

  formulas: [
    {
      name: "Ordered Pair",
      formula: "(input, output)",
      meaning:
        "Each row of an input-output table can be written as an ordered pair.",
    },

    {
      name: "Function Rule",
      formula: "y = f(x)",
      meaning:
        "The output y is determined by applying function f to input x.",
    },

    {
      name: "Representation Translation",
      formula:
        "Words ↔ Table ↔ Ordered Pairs ↔ Mapping ↔ Graph ↔ Equation",
      meaning:
        "Students should be able to move in both directions among representations.",
    },

    {
      name: "Consistency Test",
      formula:
        "same input → same output",
      meaning:
        "Equivalent representations must agree on corresponding input-output values.",
    },
  ],

  workedExamples: [
    {
      title:
        "Equation to Table",

      problem:
        "Create a table for f(x) = 2x + 3 using x = 0, 1, 2, 3, and 4.",

      solutionSteps: [
        "Evaluate f(0) = 2(0) + 3 = 3.",
        "Evaluate f(1) = 2(1) + 3 = 5.",
        "Evaluate f(2) = 2(2) + 3 = 7.",
        "Evaluate f(3) = 2(3) + 3 = 9.",
        "Evaluate f(4) = 2(4) + 3 = 11.",
        "Organize the inputs and outputs into rows.",
      ],

      answer:
        "Pairs: (0,3), (1,5), (2,7), (3,9), (4,11).",

      interpretation:
        "Every increase of 1 in the input increases the output by 2.",
    },

    {
      title:
        "Table to Ordered Pairs",

      problem:
        "A table has inputs 1, 2, 3, 4 and outputs 6, 9, 12, 15. Write the relation as ordered pairs.",

      solutionSteps: [
        "Pair the first input with the first output.",
        "Continue row by row.",
        "Preserve the input-output order.",
      ],

      answer:
        "{(1,6), (2,9), (3,12), (4,15)}.",
    },

    {
      title:
        "Ordered Pairs to Graph",

      problem:
        "Describe how to graph {(0,2), (1,5), (2,8), (3,11)}.",

      solutionSteps: [
        "Use the first coordinate as the horizontal x-position.",
        "Use the second coordinate as the vertical y-position.",
        "Plot (0,2).",
        "Plot (1,5).",
        "Plot (2,8).",
        "Plot (3,11).",
        "Observe the pattern of the points.",
      ],

      answer:
        "The graph contains the four points and shows outputs increasing by 3 for each increase of 1 in x.",

      interpretation:
        "The graph visually reveals a consistent upward pattern.",
    },

    {
      title:
        "Table to Equation",

      problem:
        "A table contains (0,5), (1,9), (2,13), and (3,17). Find a possible equation.",

      solutionSteps: [
        "Observe the output change.",
        "The output increases by 4 whenever x increases by 1.",
        "This suggests a rule containing 4x.",
        "When x = 0, y = 5.",
        "Therefore the starting value is 5.",
      ],

      answer:
        "y = 4x + 5.",

      interpretation:
        "The coefficient 4 represents the consistent output change per input unit, while 5 is the output when x = 0.",
    },

    {
      title:
        "Words to Equation",

      problem:
        "A bicycle rental costs $10 to begin plus $6 for every hour used. Write a function.",

      solutionSteps: [
        "Let h represent rental hours.",
        "Let C(h) represent cost.",
        "The initial cost is $10.",
        "Each hour adds $6.",
      ],

      answer:
        "C(h) = 10 + 6h.",
    },

    {
      title:
        "Words to Table",

      problem:
        "Using C(h) = 10 + 6h, construct values for h = 0, 1, 2, 3, and 4.",

      solutionSteps: [
        "C(0) = 10.",
        "C(1) = 16.",
        "C(2) = 22.",
        "C(3) = 28.",
        "C(4) = 34.",
      ],

      answer:
        "{(0,10), (1,16), (2,22), (3,28), (4,34)}.",

      interpretation:
        "The same rental relationship can now be communicated using both an equation and a table.",
    },

    {
      title:
        "Determine Whether Representations Match",

      problem:
        "Function A is f(x) = 3x + 1. A table shows (0,1), (1,4), (2,7), and (3,10). Does the table represent Function A?",

      solutionSteps: [
        "Check x = 0: f(0) = 1.",
        "Check x = 1: f(1) = 4.",
        "Check x = 2: f(2) = 7.",
        "Check x = 3: f(3) = 10.",
        "Every listed input produces the table's corresponding output.",
      ],

      answer:
        "Yes, the representations agree for every displayed input.",
    },

    {
      title:
        "Detect a Mismatch",

      problem:
        "The equation is g(x) = 5x - 2. A table contains (1,3), (2,8), and (3,14). Does the table match?",

      solutionSteps: [
        "g(1) = 5(1) - 2 = 3, which matches.",
        "g(2) = 5(2) - 2 = 8, which matches.",
        "g(3) = 5(3) - 2 = 13.",
        "The table shows 14.",
        "One inconsistent pair is enough to show the displayed table is not an exact representation of the rule.",
      ],

      answer:
        "No. The pair (3,14) should be (3,13).",
    },

    {
      title:
        "Function Notation to Graph Point",

      problem:
        "If f(6) = 19, what point must appear on the graph of f?",

      solutionSteps: [
        "The input is 6.",
        "The output is 19.",
        "Graph points are written as (input, output).",
      ],

      answer:
        "(6,19).",
    },

    {
      title:
        "Graph Point to Function Notation",

      problem:
        "A graph of function P contains the point (8,42). Write this information using function notation.",

      solutionSteps: [
        "The x-coordinate 8 is the input.",
        "The y-coordinate 42 is the output.",
        "Write the function value.",
      ],

      answer:
        "P(8) = 42.",
    },
  ],

  interactiveExploration: {
    title:
      "Representation Relay",

    description:
      "Start with one representation and repeatedly translate it without changing the underlying function.",

    instructions: [
      "Begin with the rule f(x) = 3x + 2.",
      "Choose five input values.",
      "Create an input-output table.",
      "Convert each row to an ordered pair.",
      "Describe how each input maps to its output.",
      "Plot the ordered pairs on paper or in a graphing tool.",
      "Describe the visible pattern.",
      "Write the function in words.",
      "Return to the original equation.",
      "Check whether any mathematical information was lost.",
      "Change one table value intentionally.",
      "Determine how the error affects consistency among the representations.",
    ],

    questions: [
      "What information stays the same across all representations?",
      "Which representation makes exact values easiest to read?",
      "Which representation makes the overall pattern easiest to see?",
      "Which representation makes new outputs easiest to calculate?",
      "How can one incorrect point reveal that two representations do not match?",
      "Which representation would you choose to explain the function to another student?",
    ],

    expectedDiscovery:
      "The mathematical relationship remains unchanged even when its visual or symbolic form changes. Representations differ mainly in what information they make easiest to see.",
  },

  realWorldApplications: [
    {
      field: "Business",
      application:
        "A company may communicate sales relationships with tables for reports, graphs for executives, and equations for forecasting.",
    },

    {
      field: "Science",
      application:
        "Scientists organize measurements in tables, graph patterns, and develop equations representing observed relationships.",
    },

    {
      field: "Finance",
      application:
        "Financial information may appear as account tables, trend graphs, formulas, and computational models.",
    },

    {
      field: "Engineering",
      application:
        "Engineers move among specifications, data tables, graphs, equations, and simulation code.",
    },

    {
      field: "Data Analytics",
      application:
        "Analysts transform raw tables into visualizations and mathematical models to explain patterns.",
    },

    {
      field: "Computer Science",
      application:
        "Code represents the same input-output rules that may also be expressed mathematically.",
    },
  ],

  aiConnection: {
    title:
      "Representations of Data and Models in AI",

    explanation:
      "AI projects also move among representations. Data may begin in a table, be visualized in a graph, transformed into numerical inputs, processed by mathematical models, and implemented as code.",

    example:
      "A student-performance project might begin with a table containing study hours and scores. A scatter plot visually displays the relationship, while a mathematical model can estimate an output from an input.",

    uses: [
      "Data tables",
      "Visualization",
      "Feature engineering",
      "Predictive equations",
      "Model evaluation",
      "Software implementation",
    ],

    caution:
      "Different representations can highlight different features and hide others. A graph may reveal patterns quickly, while a table may preserve exact values. Responsible analysis often uses several representations together.",

    reflectionQuestion:
      "Why might a data scientist examine both a table and a graph before building a predictive model?",
  },

  pythonLab: {
    title:
      "Generate a Function Table with Python",

    objective:
      "Use Python to generate input-output pairs from a function rule and connect the output to a mathematical table.",

    code: `def cost(workshops):
    return 20 + 8 * workshops

inputs = [0, 1, 2, 3, 4, 5]

print("Workshops | Cost")

for w in inputs:
    output = cost(w)

    print(
        w,
        "|",
        output
    )`,

    questions: [
      "What mathematical function does the code represent?",
      "What is C(0)?",
      "What is C(3)?",
      "What ordered pair corresponds to input 5?",
      "How is each printed row related to an ordered pair?",
      "How could the printed values be plotted on a graph?",
      "What pattern would the graph show?",
    ],

    reflectionQuestions: [
      "Why is Python useful when a table contains hundreds or thousands of inputs?",
      "Does Python change the function, or simply provide another way to represent and evaluate it?",
    ],

    extension:
      "Change the function to cost(workshops) = 35 + 12 * workshops. Predict the new table before running the program.",
  },

  guidedPractice: [
    {
      question:
        "For f(x) = 2x + 1, create ordered pairs for x = 0, 1, 2.",
      answer:
        "(0,1), (1,3), (2,5).",
      difficulty: "Foundation",
    },

    {
      question:
        "A table contains (0,4), (1,7), (2,10), (3,13). Describe the output pattern.",
      answer:
        "The output increases by 3 whenever the input increases by 1.",
      difficulty: "Pattern recognition",
    },

    {
      question:
        "Find a possible equation for the previous table.",
      answer:
        "y = 3x + 4.",
      difficulty: "Modeling",
    },

    {
      question:
        "If f(5) = 17, what point belongs to the graph of f?",
      answer:
        "(5,17).",
      difficulty: "Translation",
    },

    {
      question:
        "A graph contains point (7,21). Write this information as function notation using g.",
      answer:
        "g(7) = 21.",
      difficulty: "Translation",
    },

    {
      question:
        "A gym charges $25 to join plus $10 per month. Write a function and generate the first three monthly values starting with month 0.",
      answer:
        "C(m) = 25 + 10m; (0,25), (1,35), (2,45).",
      difficulty: "Application",
    },
  ],

  independentPractice: [
    {
      question:
        "Create a table for f(x) = 4x + 2 using x = 0, 1, 2, 3.",
      answer:
        "(0,2), (1,6), (2,10), (3,14).",
    },

    {
      question:
        "Write the ordered pairs from a table with inputs 2, 4, 6 and outputs 5, 9, 13.",
      answer:
        "(2,5), (4,9), (6,13).",
    },

    {
      question:
        "A relation has points (0,6), (1,10), (2,14), (3,18). Find a possible equation.",
      answer:
        "y = 4x + 6.",
    },

    {
      question:
        "If h(9) = 27, what graph point does this represent?",
      answer:
        "(9,27).",
    },

    {
      question:
        "A graph contains the point (12,50) on function C. Write the corresponding function statement.",
      answer:
        "C(12) = 50.",
    },

    {
      question:
        "Determine whether the table {(0,2), (1,5), (2,8)} matches f(x) = 3x + 2.",
      answer:
        "Yes.",
    },

    {
      question:
        "Determine whether {(0,4), (1,7), (2,11)} matches g(x) = 3x + 4.",
      answer:
        "No. g(2) = 10, not 11.",
    },

    {
      question:
        "Create one real-world function and represent it using words, an equation, and at least four ordered pairs.",
      answer:
        "Answers will vary.",
    },

    {
      question:
        "Explain which representation of your function is easiest to understand and why.",
      answer:
        "Answers will vary.",
    },
  ],

  commonMistakes: [
    {
      mistake:
        "Thinking the table, graph, and equation are different functions.",
      correction:
        "They may be different representations of the same underlying relationship.",
    },

    {
      mistake:
        "Reversing coordinates when graphing.",
      correction:
        "Use (input, output), so the input is plotted horizontally and the output vertically.",
    },

    {
      mistake:
        "Writing function notation backward from a graph point.",
      correction:
        "Point (a,b) means f(a) = b.",
    },

    {
      mistake:
        "Guessing an equation from only one data pair.",
      correction:
        "Use several pairs to verify that a proposed rule matches the relationship.",
    },

    {
      mistake:
        "Assuming a visually attractive graph proves a model is correct.",
      correction:
        "Check actual input-output values against the equation or data.",
    },

    {
      mistake:
        "Choosing one representation for every task.",
      correction:
        "Select the representation that best supports the question you are trying to answer.",
    },
  ],

  discussionQuestions: [
    "Why can several different representations describe the same function?",
    "Which representation makes exact values easiest to see?",
    "Which representation makes trends easiest to see?",
    "Why might an equation be more powerful than a short table?",
    "Why might a graph communicate something faster than an equation?",
    "How does function notation connect to graph coordinates?",
    "How can we verify that a table and equation represent the same function?",
    "Why do scientists and data analysts often use multiple representations?",
    "How does Python become another representation of a mathematical rule?",
  ],

  formativeAssessment: {
    passingScore: 8,

    questions: [
      {
        type: "translation",
        prompt:
          "If f(4) = 11, what point belongs to the graph?",
        answer:
          "(4,11).",
      },

      {
        type: "translation",
        prompt:
          "The graph of g contains point (6,20). Write this using function notation.",
        answer:
          "g(6) = 20.",
      },

      {
        type: "evaluation",
        prompt:
          "For f(x) = 3x + 2, find the ordered pair when x = 5.",
        answer:
          "(5,17).",
      },

      {
        type: "table",
        prompt:
          "Create outputs for y = 2x + 4 when x = 0, 1, and 2.",
        answer:
          "4, 6, 8.",
      },

      {
        type: "equation",
        prompt:
          "A table contains (0,3), (1,7), (2,11). Give a possible rule.",
        answer:
          "y = 4x + 3.",
      },

      {
        type: "consistency",
        prompt:
          "Does {(0,1), (1,4), (2,7)} match f(x) = 3x + 1?",
        answer:
          "Yes.",
      },

      {
        type: "consistency",
        prompt:
          "Does {(0,2), (1,5), (2,9)} match g(x) = 3x + 2?",
        answer:
          "No. g(2) should equal 8.",
      },

      {
        type: "reasoning",
        prompt:
          "Why might a graph be preferred over a table when examining overall behavior?",
        sampleAnswer:
          "A graph makes patterns, direction, and changes easier to see visually.",
      },

      {
        type: "reasoning",
        prompt:
          "Why might an equation be preferred when calculating an output for an input not already shown in a table?",
        sampleAnswer:
          "The equation gives a general rule that can be evaluated for new inputs.",
      },

      {
        type: "creation",
        prompt:
          "Create a function and represent it in at least three different ways.",
        sampleAnswer:
          "Answers will vary.",
      },
    ],
  },

  researchExtension: {
    title:
      "How Professionals Represent the Same Data",

    description:
      "Investigate a real example where the same relationship is communicated with more than one representation.",

    researchQuestion:
      "Why do professionals use tables, graphs, equations, and written explanations together?",

    applicationOptions: [
      "Weather",
      "Stock-market data",
      "Population growth",
      "Business revenue",
      "Transportation",
      "Energy consumption",
      "Sports statistics",
      "Scientific experiments",
    ],

    task:
      "Choose a real relationship. Identify at least two representations used to communicate it. Explain what each representation makes easier to understand and identify any information that is less obvious in each form.",

    requiredEvidence: [
      "Real-world relationship",
      "Input quantity",
      "Output quantity",
      "At least two representations",
      "Comparison of representations",
      "Units",
      "Interpretation",
      "Source or context description",
    ],
  },

  portfolioArtifact: {
    title:
      "Multi-Representation Function Studio",

    description:
      "Design one original real-world function and communicate it through multiple mathematical representations.",

    requiredSections: [
      "Real-world scenario",
      "Input quantity",
      "Output quantity",
      "Units",
      "Function equation",
      "Function notation",
      "Input-output table",
      "At least five ordered pairs",
      "Mapping description",
      "Graph or graph description",
      "Domain",
      "Range",
      "Python implementation",
      "Comparison of representations",
      "Explanation of which representation is most useful for the chosen problem",
    ],

    requiredEvidence: [
      "One consistent function across all representations",
      "Correct evaluations",
      "Correct ordered pairs",
      "Correct interpretation",
      "Representation comparison",
      "Python connection",
      "Original context",
    ],
  },

  growthIndicators: [
    "Recognizes equivalent function representations.",
    "Translates equations into tables.",
    "Translates tables into ordered pairs.",
    "Connects ordered pairs to graph points.",
    "Connects graph points to function notation.",
    "Recognizes mapping relationships.",
    "Builds equations from simple tables.",
    "Checks consistency across representations.",
    "Chooses representations strategically.",
    "Uses real-world units.",
    "Uses Python to generate function values.",
    "Creates original multi-representation models.",
  ],

  lumineryGuidance: {
    message:
      "Do not ask only, 'What form is this function written in?' Ask, 'What relationship is this representation trying to communicate?'",

    recommendation:
      "Identify quantities → identify input/output → read one representation → translate → verify → interpret.",

    prompt:
      "If the representation changes, what mathematical information must remain unchanged?",

    coachingQuestions: [
      "What is the input quantity?",
      "What is the output quantity?",
      "What ordered pairs are represented?",
      "Can you organize them into a table?",
      "What would those pairs look like on a graph?",
      "What rule connects the inputs and outputs?",
      "Can you express that rule with function notation?",
      "Does every representation produce the same output for the same input?",
      "Which representation makes the pattern easiest to notice?",
      "Which representation makes exact values easiest to read?",
      "Which representation makes prediction easiest?",
      "What units belong to the values?",
      "How could Python represent the same function?",
      "Can you explain the relationship without using symbols?",
    ],
  },

  summary: [
    "A function is a relationship, not a particular representation.",
    "The same function may be shown using words, tables, ordered pairs, mappings, graphs, equations, function notation, and code.",
    "Each table row can be interpreted as an ordered pair.",
    "Each ordered pair corresponds to a graph point.",
    "A graph point (a,b) can be written as f(a) = b.",
    "Equations provide general rules for generating outputs.",
    "Tables make specific values easy to compare.",
    "Graphs make overall patterns easier to visualize.",
    "Mappings emphasize input-output connections.",
    "Equivalent representations must agree for the same inputs.",
    "Different representations are useful for different purposes.",
    "Python provides another way to generate and explore function relationships.",
  ],

  reflection: [
    "Which representation helps you understand functions most easily?",
    "Which representation is best for calculating new outputs?",
    "Which representation is best for noticing patterns?",
    "How can you determine whether a table and equation describe the same function?",
    "How does point (a,b) connect to the statement f(a) = b?",
    "Why should students learn more than one representation?",
    "How does translating representations strengthen mathematical understanding?",
    "How could a data analyst use tables, graphs, equations, and code together?",
    "Create a function and explain it without using an equation.",
  ],

  previousLesson: {
    moduleNumber: 4,
    lessonNumber: 4,
    slug: "domain-and-range",
    title: "Domain and Range",
  },

  nextLesson: {
    moduleNumber: 4,
    lessonNumber: 6,
    slug: "rate-of-change-and-comparing-relationships",
    title:
      "Rate of Change and Comparing Relationships",
  },
};

export default lesson05;