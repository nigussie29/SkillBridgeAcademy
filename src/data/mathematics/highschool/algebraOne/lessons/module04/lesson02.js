const lesson02 = {
  id: "algebra-one-module-04-lesson-02",
  slug: "functions-vs-non-functions",

  courseId: "algebra-1",
  courseTitle: "Algebra I",

  moduleNumber: 4,
  moduleTitle: "Functions and Relations",
  lessonNumber: 2,

  title: "Functions vs. Non-Functions",

  subtitle:
    "Determine whether a relation is a function by analyzing inputs and outputs in real situations, ordered pairs, tables, mappings, graphs, equations, and code.",

  duration: "75–90 minutes",
  level: "Foundation",
  status: "Available",

  essentialQuestion:
    "What makes one relation a function while another relation is not a function?",

  bigIdea:
    "A function is a relation in which each input is connected to exactly one output. Different inputs may share the same output, but one input cannot be assigned two different outputs.",

  whyThisLessonExists: {
    title: "Functions Are Predictable Input-Output Rules",

    introduction:
      "In Lesson 1, students learned that relations connect inputs and outputs. But not every relation behaves like a function. A function has an important consistency rule: once an input is chosen, the output must be determined uniquely.",

    centralProblem:
      "How can we examine different representations and decide whether each input has exactly one output?",

    purpose:
      "Students learn to distinguish functions from non-functions using real situations, ordered pairs, tables, mappings, graphs, equations, and computational logic.",
  },

  problemFirst: {
    title: "Student ID Numbers",

    scenario:
      "A school assigns every student one unique student ID number. Student ID 1042 belongs to Maya. Student ID 1081 belongs to Daniel. Student ID 1120 belongs to Sofia. A data-entry mistake records student ID 1042 once for Maya and again for another student named Jordan. The school mascot is an eagle, the building has three floors, and lunch begins at 11:45 a.m.",

    questions: [
      "What quantity should be treated as the input?",
      "What quantity should be treated as the output?",
      "Which details are irrelevant?",
      "Before the data-entry mistake, does each student ID identify exactly one student?",
      "What happens when student ID 1042 is connected to two different students?",
      "Can one input have two different outputs in a function?",
      "Would two different students being associated with the same grade level automatically violate the function rule?",
      "How could we represent this relation using ordered pairs?",
      "What evidence would prove that the relation is not a function?",
      "How should the school correct the data?",
    ],

    expectedInsight:
      "If student ID is the input, every ID must correspond to exactly one student. Once ID 1042 is associated with two different students, the relation is no longer a function.",
  },

  visualModels: [
    {
      id: "function-core-rule",
      type: "comparison",

      title: "The Function Rule",

      description:
        "The key question is not whether outputs repeat. The key question is whether one input is assigned more than one output.",

      items: [
        {
          label: "Function",
          symbol: "input → one output",
          meaning:
            "Every input has exactly one corresponding output.",
        },

        {
          label: "Not a Function",
          symbol: "one input → two outputs",
          meaning:
            "At least one input is connected to two different outputs.",
        },
      ],
    },

    {
      id: "repeated-output",
      type: "comparison",

      title: "Repeated Outputs Are Allowed",

      description:
        "Different inputs may produce the same output and the relation can still be a function.",

      items: [
        {
          label: "Allowed",
          symbol: "1 → 5, 2 → 5",
          meaning:
            "Inputs 1 and 2 both produce output 5. Each input still has only one output.",
        },

        {
          label: "Not Allowed",
          symbol: "1 → 5, 1 → 8",
          meaning:
            "Input 1 has two different outputs, so the relation is not a function.",
        },
      ],
    },

    {
      id: "ordered-pair-test",
      type: "comparison",

      title: "Ordered-Pair Test",

      description:
        "When a relation is written as ordered pairs, focus on repeated input values.",

      items: [
        {
          label: "Function",
          symbol: "{(1,4), (2,6), (3,8)}",
          meaning:
            "Each first coordinate appears with only one output.",
        },

        {
          label: "Not a Function",
          symbol: "{(1,4), (2,6), (1,9)}",
          meaning:
            "Input 1 appears with two different outputs: 4 and 9.",
        },
      ],
    },

    {
      id: "graph-test-introduction",
      type: "comparison",

      title: "Graph Thinking: One x, One y",

      description:
        "A graph represents a function when each input x corresponds to only one output y.",

      items: [
        {
          label: "Passes",
          symbol: "one x-position → one point",
          meaning:
            "A vertical line through the graph touches it at most once.",
        },

        {
          label: "Fails",
          symbol: "one x-position → two points",
          meaning:
            "A vertical line touches the graph more than once, showing one input has multiple outputs.",
        },
      ],
    },
  ],

  learningObjectives: [
    "Define a function as a special type of relation.",
    "Explain the one-input-one-output rule.",
    "Distinguish repeated inputs from repeated outputs.",
    "Determine whether ordered pairs represent a function.",
    "Determine whether a table represents a function.",
    "Analyze mapping-style input-output relationships.",
    "Use graphical reasoning to recognize functions.",
    "Explain the vertical line test conceptually.",
    "Interpret functions in real-world contexts.",
    "Identify data errors that violate a function rule.",
    "Use Python to check whether a relation is a function.",
    "Create original examples of functions and non-functions.",
  ],

  prerequisiteKnowledge: [
    "Relations",
    "Inputs and outputs",
    "Ordered pairs",
    "Tables",
    "Coordinate plane",
    "Variables",
    "Basic Python familiarity",
  ],

  vocabulary: [
    {
      term: "Function",
      definition:
        "A relation in which every input corresponds to exactly one output.",
    },

    {
      term: "Non-Function",
      definition:
        "A relation in which at least one input is paired with more than one different output.",
    },

    {
      term: "Input",
      definition:
        "The value entered into or used as the starting value of a relation.",
    },

    {
      term: "Output",
      definition:
        "The value associated with or produced by an input.",
    },

    {
      term: "Mapping",
      definition:
        "A representation showing how inputs are connected to outputs.",
    },

    {
      term: "Vertical Line Test",
      definition:
        "A graphical test stating that a graph represents a function if every vertical line intersects the graph at most once.",
    },

    {
      term: "Unique Output",
      definition:
        "The one specific output associated with a particular input.",
    },
  ],

  formulas: [
    {
      name: "Function Rule",
      formula: "each input → exactly one output",
      meaning:
        "No input may correspond to two different outputs.",
    },

    {
      name: "Ordered-Pair Test",
      formula: "(x, y₁) and (x, y₂)",
      meaning:
        "If the same x is paired with different y-values, the relation is not a function.",
    },

    {
      name: "Graph Test",
      formula: "one x-value → at most one graph point",
      meaning:
        "This idea becomes the vertical line test.",
    },

    {
      name: "Decision Process",
      formula:
        "Identify inputs → check repeated inputs → compare outputs → decide → justify",
      meaning:
        "A reliable procedure for determining whether a relation is a function.",
    },
  ],

  workedExamples: [
    {
      title: "Ordered Pairs That Form a Function",

      problem:
        "Determine whether {(1, 3), (2, 5), (3, 7), (4, 9)} is a function.",

      solutionSteps: [
        "Identify the inputs: 1, 2, 3, and 4.",
        "Each input appears once.",
        "Therefore each input has exactly one output.",
      ],

      answer: "Yes, the relation is a function.",

      interpretation:
        "Every input determines one output.",
    },

    {
      title: "Repeated Input with Different Outputs",

      problem:
        "Determine whether {(1, 4), (2, 6), (1, 8), (3, 10)} is a function.",

      solutionSteps: [
        "List the inputs: 1, 2, 1, 3.",
        "Input 1 appears more than once.",
        "Compare its outputs.",
        "Input 1 is paired with 4 and 8.",
        "One input has two different outputs.",
      ],

      answer: "No, the relation is not a function.",

      interpretation:
        "Input 1 violates the one-output-per-input rule.",
    },

    {
      title: "Repeated Outputs Do Not Break a Function",

      problem:
        "Determine whether {(1, 5), (2, 5), (3, 7), (4, 7)} is a function.",

      solutionSteps: [
        "Inputs are 1, 2, 3, and 4.",
        "Each input has exactly one output.",
        "Outputs 5 and 7 repeat.",
        "Repeated outputs are allowed.",
      ],

      answer: "Yes, it is a function.",

      interpretation:
        "Different inputs may share the same output.",
    },

    {
      title: "Analyze a Table",

      problem:
        "A table contains inputs 0, 1, 2, 3 and outputs 4, 6, 8, 10. Is the relation a function?",

      solutionSteps: [
        "Each input occurs once.",
        "Each input is paired with one output.",
        "No input has two different outputs.",
      ],

      answer: "Yes.",
    },

    {
      title: "A Table That Is Not a Function",

      problem:
        "A table contains rows (2, 5), (4, 8), (2, 9), and (6, 12).",

      solutionSteps: [
        "Input 2 occurs twice.",
        "Its outputs are 5 and 9.",
        "The same input produces two different outputs.",
      ],

      answer: "Not a function.",
    },

    {
      title: "Real-World Function: Temperature Conversion",

      problem:
        "For every Celsius temperature C, the Fahrenheit temperature is calculated using F = (9/5)C + 32. Is Fahrenheit temperature a function of Celsius temperature?",

      solutionSteps: [
        "Choose a Celsius temperature.",
        "The equation produces one Fahrenheit value.",
        "The same Celsius input cannot produce two different Fahrenheit outputs using the rule.",
      ],

      answer:
        "Yes, Fahrenheit temperature is a function of Celsius temperature.",
    },

    {
      title: "Real-World Non-Function",

      problem:
        "Suppose the input is student name and the output is phone number. Could this relation fail to be a function?",

      solutionSteps: [
        "A student might have more than one phone number.",
        "If one student-name input is paired with multiple phone-number outputs, the relation violates the function rule.",
        "The choice of input and output matters.",
      ],

      answer:
        "Yes, it may fail to be a function depending on how the data are defined.",

      interpretation:
        "Function status depends on the precise definition of the input-output relationship.",
    },

    {
      title: "Equation Reasoning",

      problem:
        "Is y = 2x + 3 a function of x?",

      solutionSteps: [
        "Choose any input x.",
        "Multiply it by 2.",
        "Add 3.",
        "This procedure gives exactly one y-value.",
      ],

      answer:
        "Yes, y = 2x + 3 defines y as a function of x.",
    },

    {
      title: "Graphical Reasoning",

      problem:
        "A graph contains two points with the same x-coordinate x = 3, one at y = 2 and another at y = 7. Does the graph represent a function?",

      solutionSteps: [
        "The input is x = 3.",
        "This single input corresponds to outputs 2 and 7.",
        "A vertical line at x = 3 would hit two points.",
      ],

      answer: "No.",

      interpretation:
        "The graph fails the vertical line test.",
    },
  ],

  interactiveExploration: {
    title: "Function Detective",

    description:
      "Classify relations by focusing on repeated inputs rather than repeated outputs.",

    instructions: [
      "Create four input values.",
      "Assign one output to each input.",
      "Confirm that your relation is a function.",
      "Repeat one output for two different inputs.",
      "Decide whether the relation is still a function.",
      "Now choose one input and give it a second, different output.",
      "Determine what changed.",
      "Write both relations as ordered pairs.",
      "Explain the difference using the function rule.",
      "Create a third example that is difficult for another student to classify.",
    ],

    questions: [
      "Why are repeated outputs allowed?",
      "Why are repeated inputs sometimes allowed?",
      "When does a repeated input actually create a problem?",
      "What evidence proves that a relation is not a function?",
      "Can one counterexample be enough to prove a relation is not a function?",
    ],

    expectedDiscovery:
      "Repeated inputs are only a problem when the same input is assigned two different outputs. Repeated outputs alone do not violate the function rule.",
  },

  realWorldApplications: [
    {
      field: "Identification Systems",
      application:
        "Unique account IDs, employee IDs, and product codes are often designed so each identifier points to one specific record.",
    },

    {
      field: "Business",
      application:
        "A pricing function assigns a total cost to each quantity purchased under a defined pricing rule.",
    },

    {
      field: "Science",
      application:
        "Formulas often assign one predicted measurement to each selected input.",
    },

    {
      field: "Computer Science",
      application:
        "Functions in programming accept inputs and return outputs according to defined instructions.",
    },

    {
      field: "Data Management",
      application:
        "Databases use keys and validation rules to prevent contradictory assignments.",
    },

    {
      field: "Artificial Intelligence",
      application:
        "A trained prediction system maps input data to a predicted output under a specific model state.",
    },
  ],

  aiConnection: {
    title: "Functions and Prediction Systems",

    explanation:
      "A predictive model can be viewed as a mapping from inputs to outputs. For a fixed model and fixed input, the system applies its learned rule to produce an output.",

    example:
      "A risk model might receive financial information as input and produce a risk score as output.",

    uses: [
      "Credit scoring",
      "Image classification",
      "Recommendation systems",
      "Forecasting",
      "Fraud detection",
      "Student-support prediction",
    ],

    caution:
      "Real AI systems can involve randomness, probabilities, multiple outputs, or changing model states. The Algebra I function idea is a simplified mathematical foundation for understanding more advanced mappings.",

    reflectionQuestion:
      "Why is input-output thinking useful when beginning to understand machine-learning models?",
  },

  pythonLab: {
    title: "Check Whether a Relation Is a Function",

    objective:
      "Use Python logic to determine whether any input is paired with multiple different outputs.",

    code: `relation = [
    (1, 4),
    (2, 6),
    (3, 8),
    (1, 9)
]

outputs_by_input = {}
is_function = True

for x, y in relation:
    if x not in outputs_by_input:
        outputs_by_input[x] = y
    elif outputs_by_input[x] != y:
        is_function = False

print("Relation:", relation)
print("Is function?", is_function)`,

    questions: [
      "Which input appears more than once?",
      "What outputs are associated with that input?",
      "Why does the program return False?",
      "What happens if (1, 9) is removed?",
      "What happens if two different inputs share output 6?",
      "How does the dictionary help keep track of previous outputs?",
    ],

    reflectionQuestions: [
      "How is the Python condition similar to the mathematical definition of a function?",
      "Why should we understand the definition before automating the test?",
    ],

    extension:
      "Create one relation that returns True and another that returns False. Explain your predictions before running the program.",
  },

  guidedPractice: [
    {
      question:
        "Is {(1, 2), (2, 4), (3, 6)} a function?",
      answer:
        "Yes. Each input has exactly one output.",
      difficulty: "Foundation",
    },

    {
      question:
        "Is {(1, 2), (1, 4), (3, 6)} a function?",
      answer:
        "No. Input 1 has outputs 2 and 4.",
      difficulty: "Foundation",
    },

    {
      question:
        "Is {(1, 5), (2, 5), (3, 5)} a function?",
      answer:
        "Yes. Repeated outputs are allowed.",
      difficulty: "Reasoning",
    },

    {
      question:
        "A table shows (4, 9), (5, 11), (4, 9). Is this automatically a non-function?",
      answer:
        "No. The repeated input 4 is paired with the same output 9 both times.",
      difficulty: "Reasoning",
    },

    {
      question:
        "A graph has two points vertically aligned at x = 5. What should you investigate?",
      answer:
        "Check whether x = 5 has two different y-values. If so, it is not a function.",
      difficulty: "Visual",
    },

    {
      question:
        "Is y = 7x - 2 a function of x?",
      answer:
        "Yes. Every x produces exactly one y.",
      difficulty: "Equation",
    },
  ],

  independentPractice: [
    {
      question:
        "Determine whether {(0, 2), (1, 3), (2, 4), (3, 5)} is a function.",
      answer:
        "Yes.",
    },

    {
      question:
        "Determine whether {(2, 7), (3, 8), (2, 10)} is a function.",
      answer:
        "No. Input 2 has outputs 7 and 10.",
    },

    {
      question:
        "Determine whether {(1, 4), (2, 4), (3, 4), (4, 4)} is a function.",
      answer:
        "Yes.",
    },

    {
      question:
        "A relation contains (5, 12), (7, 14), and (5, 12). Is it a function?",
      answer:
        "Yes. Input 5 repeats but keeps the same output.",
    },

    {
      question:
        "Explain why one input paired with two different outputs violates the definition of a function.",
      answer:
        "Because a function requires each input to determine exactly one output.",
    },

    {
      question:
        "Create four ordered pairs representing a function.",
      answer:
        "Answers will vary.",
    },

    {
      question:
        "Create four ordered pairs representing a non-function.",
      answer:
        "Answers will vary, but at least one input must have two different outputs.",
    },

    {
      question:
        "Create a real-world example where careful definition of the input is necessary to determine whether the relationship is a function.",
      answer:
        "Answers will vary.",
    },
  ],

  commonMistakes: [
    {
      mistake:
        "Thinking repeated outputs mean the relation is not a function.",
      correction:
        "Repeated outputs are allowed. The restriction is on inputs.",
    },

    {
      mistake:
        "Rejecting every relation containing a repeated input.",
      correction:
        "A repeated input only breaks the function rule if it has different outputs.",
    },

    {
      mistake:
        "Checking the second coordinate instead of the first coordinate.",
      correction:
        "In ordered pairs (x, y), inspect the x-values because they represent inputs.",
    },

    {
      mistake:
        "Memorizing the vertical line test without understanding why it works.",
      correction:
        "A vertical line fixes one x-value. More than one intersection means one input has multiple outputs.",
    },

    {
      mistake:
        "Ignoring how variables are defined in a real situation.",
      correction:
        "Function status depends on which quantity is chosen as the input and how the relation is defined.",
    },
  ],

  discussionQuestions: [
    "Why are repeated outputs allowed in a function?",
    "Can a repeated input ever be acceptable?",
    "Why does one counterexample prove that a relation is not a function?",
    "How does the vertical line test connect to the input-output definition?",
    "Why does the choice of input matter in a real-world relationship?",
    "How are programming functions similar to mathematical functions?",
    "How might database errors resemble non-function relationships?",
    "Why are functions useful for prediction?",
  ],

  formativeAssessment: {
    passingScore: 7,

    questions: [
      {
        type: "definition",
        prompt:
          "State the definition of a function.",
        answer:
          "A relation in which every input corresponds to exactly one output.",
      },

      {
        type: "classification",
        prompt:
          "Is {(1, 2), (2, 3), (3, 4)} a function?",
        answer: "Yes.",
      },

      {
        type: "classification",
        prompt:
          "Is {(1, 2), (1, 5), (3, 4)} a function?",
        answer:
          "No. Input 1 has two different outputs.",
      },

      {
        type: "reasoning",
        prompt:
          "Why does {(1, 5), (2, 5)} still represent a function?",
        answer:
          "Different inputs may share the same output.",
      },

      {
        type: "table",
        prompt:
          "A table contains (4, 8), (5, 10), (4, 12). Is it a function?",
        answer:
          "No. Input 4 has two different outputs.",
      },

      {
        type: "graph",
        prompt:
          "What does it mean if a vertical line intersects a graph twice?",
        answer:
          "One x-value corresponds to two y-values, so the graph does not represent a function.",
      },

      {
        type: "equation",
        prompt:
          "Does y = 3x + 1 define y as a function of x?",
        answer:
          "Yes.",
      },

      {
        type: "interpretation",
        prompt:
          "Explain why a unique employee ID should ideally function as an input identifying one employee record.",
        sampleAnswer:
          "Each ID should point to exactly one employee so that the identifier is unambiguous.",
      },

      {
        type: "creation",
        prompt:
          "Create one function and one non-function using ordered pairs.",
        sampleAnswer:
          "Answers will vary.",
      },
    ],
  },

  researchExtension: {
    title: "Functions in Information Systems",

    description:
      "Investigate a real system that relies on unique input-output relationships.",

    researchQuestion:
      "Why do organizations often require one identifier to correspond to one record?",

    applicationOptions: [
      "Student IDs",
      "Employee IDs",
      "Product barcodes",
      "Inventory systems",
      "Library catalog numbers",
      "Database primary keys",
      "Vehicle identification numbers",
    ],

    task:
      "Choose one identification system. Define the input and output, explain why uniqueness matters, describe what could happen if one input pointed to multiple conflicting outputs, and connect the system to the mathematical definition of a function.",

    requiredEvidence: [
      "System description",
      "Input definition",
      "Output definition",
      "Function-rule explanation",
      "Example valid mapping",
      "Example invalid mapping",
      "Real-world consequence",
      "Written interpretation",
    ],
  },

  portfolioArtifact: {
    title: "Function Classification Lab",

    description:
      "Create a collection of relations and teach another student how to classify them.",

    requiredSections: [
      "Function definition",
      "Two function examples",
      "Two non-function examples",
      "Ordered-pair representation",
      "Table representation",
      "Graph reasoning",
      "One real-world example",
      "One misleading example using repeated outputs",
      "Python function checker",
      "Written explanation of each classification",
    ],

    requiredEvidence: [
      "Correct classification",
      "Multiple representations",
      "Reasoning based on inputs",
      "Real-world interpretation",
      "Python connection",
      "Original examples",
    ],
  },

  growthIndicators: [
    "Defines functions correctly.",
    "Focuses on inputs rather than repeated outputs.",
    "Classifies ordered-pair relations.",
    "Classifies tables.",
    "Interprets mapping relationships.",
    "Explains the vertical line test conceptually.",
    "Analyzes real-world function relationships.",
    "Identifies data conflicts.",
    "Uses computational logic to test functions.",
    "Creates original function and non-function examples.",
  ],

  lumineryGuidance: {
    message:
      "Do not begin by asking whether outputs repeat. Begin by asking what happens to each input.",

    recommendation:
      "Identify inputs → inspect repeated inputs → compare their outputs → classify → justify.",

    prompt:
      "Can you find any input that is connected to two different outputs?",

    coachingQuestions: [
      "What are the inputs?",
      "What are the outputs?",
      "Does any input repeat?",
      "If an input repeats, does it have the same output or a different output?",
      "Are repeated outputs causing you confusion?",
      "Can you identify one input that violates the function rule?",
      "How would this relation look as a table?",
      "How would this relation appear on a graph?",
      "Would a vertical line hit the graph more than once?",
      "What does the classification mean in the real situation?",
    ],
  },

  summary: [
    "A function is a special type of relation.",
    "Every input in a function must correspond to exactly one output.",
    "Different inputs may share the same output.",
    "Repeated outputs do not violate the function rule.",
    "A repeated input is only a problem when it has different outputs.",
    "Ordered pairs can be classified by examining their first coordinates.",
    "Tables can be analyzed by checking repeated input values.",
    "The vertical line test is a graphical version of the one-input-one-output rule.",
    "Real-world function status depends on how inputs and outputs are defined.",
    "Python can automate function classification.",
  ],

  reflection: [
    "What is the most important question to ask when deciding whether a relation is a function?",
    "Why are repeated outputs allowed?",
    "Why does one input with two outputs create a problem?",
    "How does the vertical line test connect to the definition?",
    "Which representation helps you identify functions most easily?",
    "Where do you see unique input-output relationships in technology?",
    "How might incorrect data cause a relation to appear non-functional?",
    "Create a relation designed to trick someone who incorrectly focuses on repeated outputs.",
  ],

  previousLesson: {
    moduleNumber: 4,
    lessonNumber: 1,
    slug: "relations-connecting-inputs-and-outputs",
    title: "Relations: Connecting Inputs and Outputs",
  },

  nextLesson: {
    moduleNumber: 4,
    lessonNumber: 3,
    slug: "function-notation-and-evaluating-functions",
    title: "Function Notation and Evaluating Functions",
  },
};

export default lesson02;