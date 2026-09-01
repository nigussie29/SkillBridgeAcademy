const lesson01 = {
  id: "algebra-two-module-01-lesson-01",
  slug: "understanding-functions-in-algebra-ii",

  courseId: "algebra-2",
  courseTitle: "Algebra II",

  moduleNumber: 1,
  moduleTitle: "Functions and Transformations",
  lessonNumber: 1,

  title:
    "Understanding Functions in Algebra II",

  subtitle:
    "Strengthen function reasoning by connecting real situations, inputs and outputs, representations, notation, function tests, restrictions, interpretation, coding, and creation.",

  duration: "80–95 minutes",
  level: "Intermediate",
  status: "Available",

  essentialQuestion:
    "How can we determine whether a relationship is a function and use its structure to understand a real situation?",

  bigIdea:
    "A function is a rule or relationship that assigns exactly one output to every allowed input. In Algebra II, functions become tools for analyzing behavior, comparing relationships, transforming graphs, modeling real situations, making predictions, and building computational models.",

  whyThisLessonExists: {
    title:
      "Functions Are the Language of Algebra II",

    introduction:
      "In Algebra I, students learned the basic definition of a function. Algebra II requires deeper thinking. A function must be understood through its inputs, outputs, domain, representations, notation, behavior, and real-world meaning.",

    centralProblem:
      "How can we recognize the same function when it appears as words, ordered pairs, a table, a graph, an equation, or code?",

    purpose:
      "Students review function foundations while moving toward Algebra II reasoning: analyzing structure, validating relationships, interpreting models, and connecting mathematical functions to computational input-output systems.",
  },

  problemFirst: {
    title:
      "The Community Coding Program",

    scenario:
      "A community coding program charges each participant a $25 registration fee plus $12 for each workshop attended. Let w represent the number of workshops and C(w) represent the total cost. Participants may attend from 0 through 8 workshops. Workshops are counted as whole sessions. The instructor uses a silver laptop, meetings begin at 6:00 p.m., and students receive blue folders.",

    questions: [
      "Which details affect the mathematical relationship?",
      "Which details are irrelevant?",
      "What quantity should be the input?",
      "What quantity should be the output?",
      "What does w represent?",
      "What does C(w) represent?",
      "Write a rule connecting workshops to total cost.",
      "Find C(0).",
      "Find C(1).",
      "Find C(4).",
      "Find C(8).",
      "What does C(4) mean in the real situation?",
      "Does every allowed input produce exactly one output?",
      "Is this relationship a function?",
      "What inputs are realistically allowed?",
      "Why would w = 3.5 be inappropriate in this situation?",
      "How could this relationship be represented with a table?",
      "How could it be represented with ordered pairs?",
      "How could it be represented with a graph?",
      "How could Python represent the same relationship?",
    ],

    expectedInsight:
      "The model is C(w) = 25 + 12w. Each allowed workshop count produces exactly one total cost, so the relationship is a function. Because workshops are counted as whole sessions from 0 through 8, the contextual domain is {0,1,2,3,4,5,6,7,8}.",
  },

  visualModels: [
    {
      id: "function-core-rule",
      type: "comparison",

      title:
        "The Core Function Rule",

      description:
        "The defining feature of a function is determined by what happens to each input.",

      items: [
        {
          label: "Function",
          symbol: "one input → one output",
          meaning:
            "Every allowed input is paired with exactly one output.",
        },

        {
          label: "Not a Function",
          symbol: "one input → two outputs",
          meaning:
            "If one input is assigned two different outputs, the relationship is not a function.",
        },
      ],
    },

    {
      id: "repeated-output-rule",
      type: "comparison",

      title:
        "Repeated Outputs Are Allowed",

      description:
        "A function may send different inputs to the same output.",

      items: [
        {
          label: "Allowed",
          symbol: "1 → 5, 2 → 5",
          meaning:
            "Different inputs may share the same output.",
        },

        {
          label: "Not Allowed",
          symbol: "1 → 5 and 1 → 8",
          meaning:
            "The same input cannot have two different outputs.",
        },
      ],
    },

    {
      id: "multiple-representations",
      type: "comparison",

      title:
        "One Relationship, Many Representations",

      description:
        "A function is the relationship itself, not the form in which it is displayed.",

      items: [
        {
          label: "Equation",
          symbol: "C(w) = 25 + 12w",
          meaning:
            "Shows the general rule connecting input and output.",
        },

        {
          label: "Table",
          symbol: "w | C(w)",
          meaning:
            "Shows selected input-output values.",
        },

        {
          label: "Ordered Pair",
          symbol: "(4,73)",
          meaning:
            "Shows one input and its corresponding output.",
        },

        {
          label: "Graph",
          symbol: "(w, C(w))",
          meaning:
            "Shows the relationship visually on a coordinate plane.",
        },
      ],
    },

    {
      id: "notation-meaning",
      type: "comparison",

      title:
        "Reading Function Notation",

      description:
        "Function notation communicates input-output meaning.",

      items: [
        {
          label: "Input",
          symbol: "4",
          meaning:
            "The value sent into the function.",
        },

        {
          label: "Function",
          symbol: "C",
          meaning:
            "The rule being applied.",
        },

        {
          label: "Output",
          symbol: "C(4) = 73",
          meaning:
            "The output produced when the input is 4.",
        },
      ],
    },

    {
      id: "algebra-two-function-thinking",
      type: "comparison",

      title:
        "From Algebra I to Algebra II",

      description:
        "Algebra II asks deeper questions about functions.",

      items: [
        {
          label: "Foundation",
          symbol: "Is it a function?",
          meaning:
            "Identify whether each input has exactly one output.",
        },

        {
          label: "Behavior",
          symbol: "How does it change?",
          meaning:
            "Analyze increasing, decreasing, maximum, minimum, and other behaviors.",
        },

        {
          label: "Transformation",
          symbol: "How does it move?",
          meaning:
            "Study how equations change graphs.",
        },

        {
          label: "Modeling",
          symbol: "What does it mean?",
          meaning:
            "Use functions to represent and analyze real systems.",
        },
      ],
    },
  ],
representationModel: {
  title:
    "Table & Graph — the same rule, two more views",

  description:
    "The coding-program cost function C(w) = 25 + 12w is shown as a table and graph. Both representations describe the same input-output relationship.",

  equation:
    "C(w) = 25 + 12w",

  columns: [
    {
      key: "w",
      label: "Workshops, w",
    },
    {
      key: "cost",
      label: "Total Cost, C(w)",
    },
  ],

  rows: [
    { w: 0, cost: 25 },
    { w: 1, cost: 37 },
    { w: 2, cost: 49 },
    { w: 3, cost: 61 },
    { w: 4, cost: 73 },
    { w: 5, cost: 85 },
    { w: 6, cost: 97 },
    { w: 7, cost: 109 },
    { w: 8, cost: 121 },
  ],

  xKey: "w",
  yKey: "cost",

  xLabel:
    "Number of workshops, w",

  yLabel:
    "Total cost, C(w) ($)",

  highlightPoint: {
    x: 4,
    y: 73,
  },
},
  learningObjectives: [
    "Explain the definition of a function using input-output reasoning.",
    "Distinguish functions from non-functions.",
    "Explain why repeated outputs are allowed.",
    "Identify inputs and outputs in real contexts.",
    "Use function notation correctly.",
    "Evaluate functions for specified inputs.",
    "Interpret function values using context and units.",
    "Identify functions from ordered pairs.",
    "Identify functions from tables.",
    "Connect equations, tables, ordered pairs, graphs, and code.",
    "Identify contextual restrictions on inputs.",
    "Distinguish mathematically computable inputs from realistic inputs.",
    "Explain how functions will be used throughout Algebra II.",
    "Implement a simple function in Python.",
    "Create an original input-output model.",
  ],

  prerequisiteKnowledge: [
    "Variables",
    "Expressions",
    "Ordered pairs",
    "Coordinate plane",
    "Basic function notation",
    "Evaluating expressions",
    "Tables",
    "Linear relationships",
  ],

  vocabulary: [
    {
      term: "Relation",
      definition:
        "A collection of input-output pairs.",
    },

    {
      term: "Function",
      definition:
        "A relation in which every allowed input has exactly one output.",
    },

    {
      term: "Input",
      definition:
        "A value supplied to a function.",
    },

    {
      term: "Output",
      definition:
        "The value produced by a function from a given input.",
    },

    {
      term: "Domain",
      definition:
        "The set of allowed input values.",
    },

    {
      term: "Range",
      definition:
        "The set of outputs produced by the inputs.",
    },

    {
      term: "Function Notation",
      definition:
        "Notation such as f(x) used to identify a function, its input, and its output.",
    },

    {
      term: "Independent Variable",
      definition:
        "The input quantity whose value is selected or controlled.",
    },

    {
      term: "Dependent Variable",
      definition:
        "The output quantity whose value depends on the input.",
    },

    {
      term: "Representation",
      definition:
        "A way of communicating a relationship, such as words, a table, graph, equation, ordered pairs, mapping, or code.",
    },
  ],

  formulas: [
    {
      name: "Function Rule",
      formula:
        "input → rule → output",
      meaning:
        "A function transforms each allowed input into exactly one output.",
    },

    {
      name: "Function Notation",
      formula:
        "y = f(x)",
      meaning:
        "The output y is determined by applying function f to input x.",
    },

    {
      name: "Ordered Pair",
      formula:
        "(x, f(x))",
      meaning:
        "Every function value can be represented as a coordinate pair.",
    },

    {
      name: "Linear Example",
      formula:
        "f(x) = mx + b",
      meaning:
        "A common function family where m controls constant rate of change and b gives the output when x = 0.",
    },

    {
      name: "Function Test",
      formula:
        "each input → exactly one output",
      meaning:
        "Check inputs rather than simply looking for repeated values.",
    },
  ],

  workedExamples: [
    {
      title:
        "Identify a Function from Ordered Pairs",

      problem:
        "Determine whether {(1,4), (2,7), (3,10), (4,13)} represents a function.",

      solutionSteps: [
        "List the inputs: 1, 2, 3, 4.",
        "Check whether any input is paired with more than one output.",
        "Every input appears with exactly one output.",
      ],

      answer:
        "Yes, it is a function.",
    },

    {
      title:
        "Detect a Non-Function",

      problem:
        "Determine whether {(1,4), (2,7), (2,11), (4,13)} is a function.",

      solutionSteps: [
        "Input 2 is paired with 7.",
        "Input 2 is also paired with 11.",
        "One input has two different outputs.",
      ],

      answer:
        "No, it is not a function.",
    },

    {
      title:
        "Repeated Outputs Are Acceptable",

      problem:
        "Is {(1,5), (2,5), (3,5), (4,5)} a function?",

      solutionSteps: [
        "Inputs 1, 2, 3, and 4 are all different.",
        "Each input has exactly one output.",
        "The fact that output 5 repeats does not violate the definition.",
      ],

      answer:
        "Yes, it is a function.",

      interpretation:
        "Functions may be many-to-one.",
    },

    {
      title:
        "Evaluate Function Notation",

      problem:
        "If f(x) = 3x + 8, find f(5).",

      solutionSteps: [
        "Substitute 5 for x.",
        "f(5) = 3(5) + 8.",
        "f(5) = 15 + 8.",
      ],

      answer:
        "f(5) = 23.",
    },

    {
      title:
        "Evaluate a Negative Input",

      problem:
        "If g(x) = x² - 4x + 1, find g(-2).",

      solutionSteps: [
        "Substitute -2 using parentheses.",
        "g(-2) = (-2)² - 4(-2) + 1.",
        "g(-2) = 4 + 8 + 1.",
      ],

      answer:
        "g(-2) = 13.",
    },

    {
      title:
        "Interpret a Function Value",

      problem:
        "Suppose T(h) gives the temperature h hours after noon. What does T(4) = 78 mean?",

      solutionSteps: [
        "The input 4 represents four hours after noon.",
        "The output 78 represents temperature.",
        "Four hours after noon is 4:00 p.m.",
      ],

      answer:
        "At 4:00 p.m., the temperature is 78 degrees.",
    },

    {
      title:
        "Equation to Ordered Pair",

      problem:
        "For f(x) = 2x + 7, find the graph point corresponding to x = 6.",

      solutionSteps: [
        "Evaluate f(6).",
        "f(6) = 2(6) + 7.",
        "f(6) = 19.",
        "Write the input-output pair.",
      ],

      answer:
        "(6,19).",
    },

    {
      title:
        "Graph Point to Function Notation",

      problem:
        "A graph of function P contains the point (8,31). Write this information using function notation.",

      solutionSteps: [
        "The first coordinate is the input.",
        "The second coordinate is the output.",
      ],

      answer:
        "P(8) = 31.",
    },

    {
      title:
        "Real-World Function Model",

      problem:
        "A tutoring service charges $40 to register plus $25 per session. Let s represent the number of sessions.",

      solutionSteps: [
        "Define C(s) as total cost.",
        "The fixed starting amount is 40.",
        "Each session adds 25.",
      ],

      answer:
        "C(s) = 40 + 25s.",

      interpretation:
        "Each input value s determines exactly one total cost.",
    },

    {
      title:
        "Context Can Restrict Inputs",

      problem:
        "The tutoring service allows students to purchase from 1 through 10 whole sessions. Can C(4.5) be used as a realistic model input?",

      solutionSteps: [
        "The algebraic expression can calculate C(4.5).",
        "But sessions are sold only as whole sessions.",
        "4.5 is therefore outside the contextual domain.",
      ],

      answer:
        "No, not for the stated real-world model.",
    },
  ],

  deeperThinking: {
    title:
      "Function vs. Formula",

    explanation:
      "Students often think a function must be an equation. An equation can define a function, but functions can also be represented by tables, graphs, mappings, data, words, or computer code.",

    questions: [
      "Can a table represent a function without showing an equation?",
      "Can a graph represent a function without displaying a formula?",
      "Can computer code act as a function?",
      "What mathematical idea stays unchanged across all representations?",
    ],

    expectedInsight:
      "The essential structure is the input-output relationship, not the visual format used to communicate it.",
  },

  interactiveExploration: {
    title:
      "Function Detective",

    description:
      "Analyze several relationships and justify whether each one is a function.",

    cases: [
      {
        relation:
          "{(1,4), (2,7), (3,10)}",
        expected:
          "Function",
      },

      {
        relation:
          "{(1,4), (1,7), (3,10)}",
        expected:
          "Not a function",
      },

      {
        relation:
          "{(1,5), (2,5), (3,5)}",
        expected:
          "Function",
      },

      {
        relation:
          "Every student ID is connected to exactly one student record.",
        expected:
          "Function if each ID uniquely identifies one record.",
      },

      {
        relation:
          "A person is connected to all phone numbers they have ever used.",
        expected:
          "May not be a function because one person may correspond to several phone numbers.",
      },
    ],

    instructions: [
      "Identify the input.",
      "Identify the output.",
      "Check every input.",
      "Look for an input assigned to two different outputs.",
      "Do not reject a relation simply because outputs repeat.",
      "Explain the conclusion using the definition of a function.",
    ],

    questions: [
      "What should you inspect first: inputs or outputs?",
      "Why are repeated outputs allowed?",
      "What specific evidence proves a relation is not a function?",
      "Can the same real situation be represented several ways?",
    ],

    expectedDiscovery:
      "The function test is based on whether each input has exactly one output.",
  },

  realWorldApplications: [
    {
      field: "Business",
      application:
        "A pricing function may use quantity purchased as input and total cost as output.",
    },

    {
      field: "Finance",
      application:
        "A financial model can use time as input and account balance as output.",
    },

    {
      field: "Engineering",
      application:
        "A system may use voltage as input and measured response as output.",
    },

    {
      field: "Science",
      application:
        "Experiments often study how one measured quantity changes as another changes.",
    },

    {
      field: "Data Analytics",
      application:
        "Analysts study relationships between variables and represent them with tables, graphs, and mathematical models.",
    },

    {
      field: "Artificial Intelligence",
      application:
        "AI models receive inputs, apply learned transformations, and produce outputs such as classifications or predictions.",
    },
  ],

  aiConnection: {
    title:
      "Functions as a Foundation for AI Thinking",

    explanation:
      "A mathematical function accepts an input and produces an output. AI systems are much more complex, but the input-transformation-output idea remains foundational.",

    example:
      "A simple model might use study hours as input and estimate a practice score as output. A more advanced AI system could use many inputs simultaneously, such as attendance, assignment completion, previous scores, and study time.",

    connections: [
      "Inputs → features",
      "Function rule → model",
      "Outputs → predictions",
      "Domain → valid input conditions",
      "Evaluation → inference",
      "Testing → model evaluation",
    ],

    caution:
      "An AI system producing an output does not automatically mean the output is meaningful. Inputs, assumptions, data quality, and valid ranges still matter.",

    reflectionQuestion:
      "How is a mathematical function similar to an AI prediction system, and what important differences remain?",
  },

  pythonLab: {
    title:
      "Turn a Mathematical Function into Code",

    objective:
      "Represent the coding-program cost function using Python.",

    code: `def coding_program_cost(workshops):
    return 25 + 12 * workshops


inputs = [0, 1, 2, 4, 8]

for w in inputs:
    print(
        "Workshops:",
        w,
        "Cost:",
        coding_program_cost(w)
    )`,

    questions: [
      "What is the input of the Python function?",
      "What is the output?",
      "What does 25 represent?",
      "What does 12 represent?",
      "What mathematical equation does the code implement?",
      "What output is produced for 4 workshops?",
      "How does each printed row correspond to an ordered pair?",
      "Does the code currently prevent invalid values such as -3 or 2.5?",
    ],

    reflectionQuestions: [
      "How is a Python function similar to mathematical function notation?",
      "Why might a real application need input validation?",
    ],

    extension:
      "Modify the program so that it accepts only whole-number workshop counts from 0 through 8.",
  },

  guidedPractice: [
    {
      question:
        "Is {(1,6), (2,8), (3,10)} a function?",
      answer:
        "Yes.",
      difficulty:
        "Foundation",
    },

    {
      question:
        "Is {(1,6), (2,8), (2,12)} a function?",
      answer:
        "No. Input 2 has two outputs.",
      difficulty:
        "Foundation",
    },

    {
      question:
        "Is {(1,7), (2,7), (3,7)} a function?",
      answer:
        "Yes. Repeated outputs are allowed.",
      difficulty:
        "Conceptual",
    },

    {
      question:
        "If f(x) = 4x - 3, find f(5).",
      answer:
        "17.",
      difficulty:
        "Evaluation",
    },

    {
      question:
        "If g(x) = x² + 2, find g(-3).",
      answer:
        "11.",
      difficulty:
        "Evaluation",
    },

    {
      question:
        "If P(6) = 42, what ordered pair belongs to the graph?",
      answer:
        "(6,42).",
      difficulty:
        "Representation",
    },
  ],

  independentPractice: [
    {
      question:
        "Determine whether {(0,3), (1,5), (2,7), (3,9)} is a function.",
      answer:
        "Yes.",
    },

    {
      question:
        "Determine whether {(0,3), (1,5), (1,7), (3,9)} is a function.",
      answer:
        "No.",
    },

    {
      question:
        "Explain why {(1,4), (2,4), (3,4)} is still a function.",
      answer:
        "Different inputs may share the same output.",
    },

    {
      question:
        "If f(x) = 5x + 2, find f(7).",
      answer:
        "37.",
    },

    {
      question:
        "If h(x) = x² - 3x + 4, find h(-2).",
      answer:
        "14.",
    },

    {
      question:
        "A graph contains the point (5,17). Write this using function notation with function g.",
      answer:
        "g(5) = 17.",
    },

    {
      question:
        "If Q(9) = 31, what graph point corresponds to this statement?",
      answer:
        "(9,31).",
    },

    {
      question:
        "A music service charges $15 to join plus $6 per month. Build a cost function.",
      answer:
        "C(m) = 15 + 6m.",
    },

    {
      question:
        "Explain what C(5) means in the previous context.",
      answer:
        "The total cost after 5 months.",
    },

    {
      question:
        "Create your own real-world function and identify the input, output, rule, and realistic domain.",
      answer:
        "Answers will vary.",
    },
  ],

  commonMistakes: [
    {
      mistake:
        "Thinking repeated outputs mean a relation is not a function.",
      correction:
        "Repeated outputs are allowed. Only one input having two different outputs violates the function rule.",
    },

    {
      mistake:
        "Treating f(x) as multiplication.",
      correction:
        "f(x) means the output of function f at input x.",
    },

    {
      mistake:
        "Reversing input and output coordinates.",
      correction:
        "In (x,y), x is the input and y is the output.",
    },

    {
      mistake:
        "Ignoring parentheses when evaluating negative inputs.",
      correction:
        "Substitute negative inputs using parentheses.",
    },

    {
      mistake:
        "Assuming a function must be written as an equation.",
      correction:
        "Functions can be represented with words, tables, graphs, ordered pairs, mappings, equations, and code.",
    },

    {
      mistake:
        "Assuming every mathematically computable input is realistic.",
      correction:
        "Check the contextual domain.",
    },
  ],

  discussionQuestions: [
    "Why is the definition of a function based on inputs rather than outputs?",
    "Why are repeated outputs allowed?",
    "Can a real relationship be a function even if no equation is shown?",
    "How are tables, graphs, equations, and code connected?",
    "Why is function notation useful?",
    "How can context restrict a function's inputs?",
    "Why are functions so important in Algebra II?",
    "How is a mathematical function related to a computer function?",
    "How is function thinking useful in data science and AI?",
  ],

  formativeAssessment: {
    passingScore: 8,

    questions: [
      {
        type: "function-test",
        prompt:
          "Is {(1,3), (2,5), (3,7)} a function?",
        answer:
          "Yes.",
      },

      {
        type: "function-test",
        prompt:
          "Is {(1,3), (1,6), (3,7)} a function?",
        answer:
          "No.",
      },

      {
        type: "concept",
        prompt:
          "Can two different inputs have the same output in a function?",
        answer:
          "Yes.",
      },

      {
        type: "evaluation",
        prompt:
          "If f(x) = 2x + 9, find f(4).",
        answer:
          "17.",
      },

      {
        type: "evaluation",
        prompt:
          "If g(x) = x² + 1, find g(-3).",
        answer:
          "10.",
      },

      {
        type: "notation",
        prompt:
          "A graph contains point (7,20). Write this using function notation for h.",
        answer:
          "h(7) = 20.",
      },

      {
        type: "representation",
        prompt:
          "If P(5) = 18, what ordered pair belongs to the graph?",
        answer:
          "(5,18).",
      },

      {
        type: "modeling",
        prompt:
          "A service charges $50 plus $10 per hour. Write a function.",
        answer:
          "C(h) = 50 + 10h.",
      },

      {
        type: "reasoning",
        prompt:
          "Why might an equation calculate an input that should still be rejected in a real model?",
        sampleAnswer:
          "The input may violate contextual restrictions even though the algebraic operation is possible.",
      },

      {
        type: "creation",
        prompt:
          "Create a function and explain its input, output, rule, and one realistic restriction.",
        sampleAnswer:
          "Answers will vary.",
      },
    ],
  },

  researchExtension: {
    title:
      "Functions Outside the Mathematics Classroom",

    description:
      "Investigate a system where one quantity depends on another.",

    researchQuestion:
      "How are input-output relationships used to model real systems?",

    options: [
      "Transportation pricing",
      "Electricity bills",
      "Phone plans",
      "Temperature over time",
      "Business costs",
      "Sports statistics",
      "Population change",
      "Computer programs",
      "Data analytics",
      "Artificial intelligence",
    ],

    task:
      "Identify the input, output, relationship, units, realistic domain, and at least one representation used to describe the system.",

    requiredEvidence: [
      "Real-world context",
      "Input quantity",
      "Output quantity",
      "Units",
      "Function explanation",
      "Domain restriction",
      "Representation",
      "Interpretation",
    ],
  },

  portfolioArtifact: {
    title:
      "Input-Output Function Explorer",

    description:
      "Create an original real-world relationship and demonstrate whether it is a function.",

    requiredSections: [
      "Real-world scenario",
      "Relevant information",
      "Input quantity",
      "Output quantity",
      "Variable definitions",
      "Units",
      "Function rule",
      "Function notation",
      "Realistic domain",
      "At least five input-output values",
      "Ordered pairs",
      "Table",
      "Graph or graph description",
      "Function-test explanation",
      "At least two evaluations",
      "One invalid or unrealistic input",
      "Python implementation",
      "Written interpretation",
    ],

    requiredEvidence: [
      "Correct function reasoning",
      "Clear input-output definitions",
      "Multiple representations",
      "Correct notation",
      "Contextual reasoning",
      "Python connection",
      "Original creation",
    ],
  },

  growthIndicators: [
    "Explains the function definition.",
    "Identifies input and output quantities.",
    "Recognizes functions from ordered pairs.",
    "Recognizes non-functions.",
    "Understands repeated outputs.",
    "Evaluates function notation.",
    "Interprets outputs contextually.",
    "Connects graph points to function notation.",
    "Connects multiple representations.",
    "Recognizes contextual restrictions.",
    "Uses Python to represent a function.",
    "Creates an original input-output model.",
  ],

  lumineryGuidance: {
    message:
      "Do not begin by asking, 'What formula do I use?' First ask: What is the input, what is the output, and does each input determine exactly one output?",

    recommendation:
      "Situation → quantities → input/output → relation → function test → represent → evaluate → interpret → validate → create.",

    prompt:
      "What evidence proves that this relationship is—or is not—a function?",

    coachingQuestions: [
      "What is the input?",
      "What is the output?",
      "What does each quantity represent?",
      "What units belong to them?",
      "Does every input have exactly one output?",
      "Is any input paired with two different outputs?",
      "Are you incorrectly rejecting repeated outputs?",
      "How would you express the relationship using function notation?",
      "Can you create an ordered pair?",
      "Can you represent the same relationship with a table?",
      "What would the graph show?",
      "Which inputs actually make sense in context?",
      "Can the equation calculate an unrealistic input?",
      "What does the output mean in the real situation?",
      "How could Python represent the same function?",
      "What will Algebra II ask you to analyze beyond simply deciding whether something is a function?",
    ],

    finalMentorMessage:
      "A function is not merely a formula. It is a structured relationship between inputs and outputs that can be represented, analyzed, interpreted, transformed, modeled, and coded.",
  },

  summary: [
    "A relation connects inputs and outputs.",
    "A function assigns exactly one output to each allowed input.",
    "Different inputs may share the same output.",
    "One input cannot have two different outputs.",
    "Function notation identifies a rule, input, and output.",
    "A function value can be represented as an ordered pair.",
    "Functions may be represented with words, tables, graphs, equations, mappings, and code.",
    "Real-world context may restrict which inputs are valid.",
    "A mathematically computable input is not always contextually meaningful.",
    "Functions are central to Algebra II because they allow us to study behavior, transformations, composition, modeling, and change.",
  ],

  reflection: [
    "How would you explain a function without using the word equation?",
    "Why are repeated outputs allowed?",
    "What evidence proves that a relation is not a function?",
    "How does function notation connect to an ordered pair?",
    "Why can the same function look different in a table, graph, and equation?",
    "What is one example of a contextual input restriction?",
    "How is a Python function similar to a mathematical function?",
    "What new questions about functions do you expect Algebra II to explore?",
    "Create one real situation that can be modeled as a function and explain why.",
  ],

  completionMessage: {
    title:
      "Algebra II Function Foundations Complete",

    message:
      "You have reviewed the core structure of functions and strengthened the reasoning needed for Algebra II. Next, you will move beyond identifying functions and begin analyzing their domain, range, and behavior.",

    achievement:
      "Function Reasoner",
  },

  previousLesson: null,

  nextLesson: {
    moduleNumber: 1,
    lessonNumber: 2,
    slug: "domain-range-and-function-behavior",
    title:
      "Domain, Range, and Function Behavior",
  },
};

export default lesson01;