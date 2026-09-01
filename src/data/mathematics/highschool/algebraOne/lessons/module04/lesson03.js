const lesson03 = {
  id: "algebra-one-module-04-lesson-03",
  slug: "function-notation-and-evaluating-functions",

  courseId: "algebra-1",
  courseTitle: "Algebra I",

  moduleNumber: 4,
  moduleTitle: "Functions and Relations",
  lessonNumber: 3,

  title:
    "Function Notation and Evaluating Functions",

  subtitle:
    "Interpret function notation as an input-output instruction, evaluate functions accurately, connect outputs to real situations, compare functions, and use code to automate evaluation.",

  duration: "75–90 minutes",
  level: "Foundation",
  status: "Available",

  essentialQuestion:
    "What does function notation tell us about the relationship between an input, a rule, and an output?",

  bigIdea:
    "Function notation is a compact language for describing input-output relationships. The expression f(x) means the output produced by function f when the input is x. To evaluate a function, substitute the given input everywhere the variable appears, simplify carefully, and interpret the result in context.",

  whyThisLessonExists: {
    title:
      "Function Notation Is a Language, Not a New Operation",

    introduction:
      "Students often see f(x) and assume that it means f multiplied by x. It does not. Function notation is a naming system. The letter f identifies a function, while the value inside parentheses identifies the input.",

    centralProblem:
      "How can we read, evaluate, and interpret expressions such as f(3), g(-2), and C(n) without treating function notation as multiplication?",

    purpose:
      "This lesson builds fluency with function notation while preserving meaning. Students connect symbolic notation to input-output thinking, tables, equations, real-world models, and computational functions.",
  },

  problemFirst: {
    title:
      "The Technology Rental Company",

    scenario:
      "A technology rental company charges a $25 setup fee plus $18 for each hour equipment is rented. The total cost can be represented by C(h) = 25 + 18h, where h is the number of rental hours. The equipment cases are black, the company has 12 employees, and the office closes at 6:00 p.m.",

    questions: [
      "What quantity is the input?",
      "What quantity is the output?",
      "What does the letter C represent?",
      "What does C(h) represent?",
      "What does C(3) mean in words?",
      "Which information in the situation is irrelevant?",
      "Evaluate C(3).",
      "What units should the answer have?",
      "Evaluate C(0).",
      "What does C(0) mean in this situation?",
      "If C(5) = 115, what does that statement mean?",
      "Why does C(3) not mean C multiplied by 3?",
    ],

    expectedInsight:
      "C(h) represents total rental cost for h hours. C(3) means the total cost when the input h is 3. Substituting gives C(3) = 25 + 18(3) = 79, so a 3-hour rental costs $79.",
  },

  visualModels: [
    {
      id: "function-notation-language",
      type: "comparison",

      title:
        "How to Read Function Notation",

      description:
        "Function notation separates the name of the rule from the input being evaluated.",

      items: [
        {
          label: "Function Name",
          symbol: "f",
          meaning:
            "The letter f names the function or input-output rule.",
        },

        {
          label: "Input",
          symbol: "x",
          meaning:
            "The value inside the parentheses identifies the input.",
        },

        {
          label: "Output",
          symbol: "f(x)",
          meaning:
            "The complete expression means the output produced by function f for input x.",
        },
      ],
    },

    {
      id: "not-multiplication",
      type: "comparison",

      title:
        "f(x) Is Not Multiplication",

      description:
        "Parentheses in function notation have a different purpose from ordinary multiplication notation.",

      items: [
        {
          label: "Function Notation",
          symbol: "f(4)",
          meaning:
            "Evaluate function f using input 4.",
        },

        {
          label: "Multiplication",
          symbol: "4(5)",
          meaning:
            "This means 4 multiplied by 5.",
        },
      ],
    },

    {
      id: "evaluation-process",
      type: "comparison",

      title:
        "Function Evaluation Process",

      description:
        "Evaluation means replacing the input variable with the given value and simplifying.",

      items: [
        {
          label: "Rule",
          symbol: "f(x) = 3x + 2",
          meaning:
            "The function transforms every input using the rule 3x + 2.",
        },

        {
          label: "Input",
          symbol: "f(4)",
          meaning:
            "Replace x with 4.",
        },

        {
          label: "Output",
          symbol: "f(4) = 14",
          meaning:
            "The input 4 produces output 14.",
        },
      ],
    },

    {
      id: "notation-vs-context",
      type: "comparison",

      title:
        "Symbols Must Return to Meaning",

      description:
        "An evaluated function value is not complete until its meaning and units are interpreted.",

      items: [
        {
          label: "Symbolic Answer",
          symbol: "C(3) = 79",
          meaning:
            "The function output is numerically 79.",
        },

        {
          label: "Contextual Meaning",
          symbol: "$79",
          meaning:
            "A 3-hour equipment rental costs $79.",
        },
      ],
    },
  ],

  learningObjectives: [
    "Explain the meaning of function notation.",
    "Distinguish f(x) from multiplication.",
    "Identify the function name, input, and output.",
    "Evaluate functions for positive inputs.",
    "Evaluate functions for zero.",
    "Evaluate functions for negative inputs.",
    "Use parentheses correctly during substitution.",
    "Evaluate functions involving exponents.",
    "Interpret function values using context and units.",
    "Evaluate more than one function at the same input.",
    "Compare outputs of different functions.",
    "Find an input when an output is given in simple cases.",
    "Use Python functions to model mathematical functions.",
    "Create an original function model.",
  ],

  prerequisiteKnowledge: [
    "Relations",
    "Functions versus non-functions",
    "Variables",
    "Substitution",
    "Order of operations",
    "Integer operations",
    "Exponents",
    "Solving basic equations",
    "Input-output relationships",
  ],

  vocabulary: [
    {
      term: "Function Notation",
      definition:
        "A notation such as f(x) used to name a function and identify its input.",
    },

    {
      term: "Function Name",
      definition:
        "The symbol, often a letter such as f, g, or C, used to identify a function.",
    },

    {
      term: "Argument",
      definition:
        "The input value written inside the parentheses of function notation.",
    },

    {
      term: "Evaluate",
      definition:
        "To determine the output of a function for a specified input.",
    },

    {
      term: "Substitution",
      definition:
        "Replacing a variable with a specific value or expression.",
    },

    {
      term: "Output",
      definition:
        "The value produced after a function rule is applied to an input.",
    },

    {
      term: "Function Value",
      definition:
        "The output corresponding to a particular input.",
    },
  ],

  formulas: [
    {
      name: "Function Meaning",
      formula: "f(a)",
      meaning:
        "The output of function f when the input is a.",
    },

    {
      name: "Evaluation",
      formula:
        "If f(x) = expression, then f(a) = expression with x replaced by a.",
      meaning:
        "Substitute the input everywhere x appears.",
    },

    {
      name: "Input-Output Statement",
      formula: "f(a) = b",
      meaning:
        "Input a produces output b.",
    },

    {
      name: "Evaluation Process",
      formula:
        "Read → Substitute → Parentheses → Simplify → Interpret",
      meaning:
        "A reliable sequence for evaluating function values.",
    },
  ],

  workedExamples: [
    {
      title:
        "Evaluate a Linear Function",

      problem:
        "Given f(x) = 3x + 5, find f(4).",

      solutionSteps: [
        "The requested input is 4.",
        "Replace every x in the rule with 4.",
        "f(4) = 3(4) + 5.",
        "Multiply first: 3(4) = 12.",
        "Add 5.",
        "f(4) = 17.",
      ],

      answer:
        "f(4) = 17",

      interpretation:
        "Input 4 produces output 17.",
    },

    {
      title:
        "Evaluate at Zero",

      problem:
        "Given g(x) = 7x - 9, find g(0).",

      solutionSteps: [
        "Replace x with 0.",
        "g(0) = 7(0) - 9.",
        "7(0) = 0.",
        "g(0) = -9.",
      ],

      answer:
        "g(0) = -9",

      interpretation:
        "Input 0 produces output -9.",
    },

    {
      title:
        "Evaluate a Negative Input Carefully",

      problem:
        "Given h(x) = x² + 2x - 3, find h(-4).",

      solutionSteps: [
        "The input is -4.",
        "Use parentheses when substituting the negative input.",
        "h(-4) = (-4)² + 2(-4) - 3.",
        "Evaluate the exponent: (-4)² = 16.",
        "Evaluate 2(-4) = -8.",
        "Compute 16 - 8 - 3.",
        "h(-4) = 5.",
      ],

      answer:
        "h(-4) = 5",

      interpretation:
        "Input -4 produces output 5.",
    },

    {
      title:
        "Real-World Cost Function",

      problem:
        "A delivery service uses C(p) = 12 + 4p, where p is the number of packages. Find and interpret C(8).",

      solutionSteps: [
        "The input p represents packages.",
        "Replace p with 8.",
        "C(8) = 12 + 4(8).",
        "C(8) = 12 + 32.",
        "C(8) = 44.",
      ],

      answer:
        "C(8) = 44",

      interpretation:
        "The total cost for 8 packages is $44.",
    },

    {
      title:
        "Read a Function Statement",

      problem:
        "Suppose T(6) = 72, where T(h) represents temperature after h hours. Interpret the statement.",

      solutionSteps: [
        "The function name is T.",
        "The input is h = 6 hours.",
        "The output is 72.",
        "Use the context to attach units.",
      ],

      answer:
        "After 6 hours, the temperature is 72 degrees.",
    },

    {
      title:
        "Compare Two Functions",

      problem:
        "Given f(x) = 2x + 10 and g(x) = 5x - 2, compare f(4) and g(4).",

      solutionSteps: [
        "Evaluate f(4): 2(4) + 10 = 18.",
        "Evaluate g(4): 5(4) - 2 = 18.",
        "Compare the outputs.",
      ],

      answer:
        "f(4) = g(4) = 18",

      interpretation:
        "The two functions produce the same output at input 4.",
    },

    {
      title:
        "Find the Input from an Output",

      problem:
        "Given f(x) = 4x + 3 and f(x) = 27, determine the input.",

      solutionSteps: [
        "The output is 27.",
        "Set the function rule equal to 27.",
        "4x + 3 = 27.",
        "Subtract 3: 4x = 24.",
        "Divide by 4: x = 6.",
      ],

      answer:
        "The input is 6.",

      interpretation:
        "f(6) = 27.",
    },

    {
      title:
        "Function Notation with a Fractional Input",

      problem:
        "Given f(x) = 6x + 1, find f(1/2).",

      solutionSteps: [
        "Replace x with 1/2.",
        "f(1/2) = 6(1/2) + 1.",
        "6(1/2) = 3.",
        "3 + 1 = 4.",
      ],

      answer:
        "f(1/2) = 4",
    },

    {
      title:
        "Expression as an Input",

      problem:
        "Given f(x) = 2x + 7, evaluate f(a).",

      solutionSteps: [
        "The input does not have to be a number.",
        "Replace x with a.",
        "f(a) = 2a + 7.",
      ],

      answer:
        "f(a) = 2a + 7",

      interpretation:
        "Function notation can accept numerical or algebraic inputs.",
    },

    {
      title:
        "Expression Input Extension",

      problem:
        "Given f(x) = 2x + 7, evaluate f(t + 1).",

      solutionSteps: [
        "Replace every x with the entire expression t + 1.",
        "Use parentheses: f(t + 1) = 2(t + 1) + 7.",
        "Distribute: 2t + 2 + 7.",
        "Combine constants.",
      ],

      answer:
        "f(t + 1) = 2t + 9",
    },
  ],

  interactiveExploration: {
    title:
      "Function Machine",

    description:
      "Treat a function as a machine that accepts an input, applies a rule, and produces an output.",

    instructions: [
      "Choose the function f(x) = 2x + 3.",
      "Send input 0 through the function.",
      "Record the output.",
      "Repeat for inputs 1, 2, 5, and -3.",
      "Write each result using function notation.",
      "Create an input-output table.",
      "Explain what operation the function performs.",
      "Change the rule to g(x) = x² - 1.",
      "Predict g(-2), g(0), and g(3) before calculating.",
      "Check your predictions.",
      "Create your own function rule.",
      "Challenge another student to evaluate it.",
    ],

    questions: [
      "What stays the same every time you evaluate a function?",
      "What changes?",
      "Why should negative inputs be placed in parentheses?",
      "Can two different inputs produce the same output?",
      "Can one input produce two outputs if the rule is truly a function?",
      "What information does f(5) communicate that the number 5 alone does not?",
    ],

    expectedDiscovery:
      "Function notation identifies both the rule being used and the input being supplied. Evaluation follows the same rule consistently for every allowed input.",
  },

  realWorldApplications: [
    {
      field: "Business",
      application:
        "Cost, revenue, and profit functions evaluate financial outcomes for specific quantities.",
    },

    {
      field: "Transportation",
      application:
        "Distance functions can determine location after a specified amount of time.",
    },

    {
      field: "Science",
      application:
        "Scientists evaluate formulas to predict temperature, pressure, velocity, or other quantities.",
    },

    {
      field: "Finance",
      application:
        "Account-balance functions can estimate balances at particular times.",
    },

    {
      field: "Engineering",
      application:
        "Engineers evaluate models at specific operating conditions.",
    },

    {
      field: "Computer Science",
      application:
        "Programs call functions with arguments and receive returned values.",
    },
  ],

  aiConnection: {
    title:
      "Evaluating a Model",

    explanation:
      "A machine-learning model can be viewed conceptually as a complicated function. Data are supplied as inputs, the model applies learned relationships, and an output is produced.",

    example:
      "A simple student-support model might conceptually be written as risk(studentData), where the input contains student information and the output is a risk score.",

    uses: [
      "Prediction",
      "Classification",
      "Risk scoring",
      "Recommendation",
      "Forecasting",
      "Automated decision support",
    ],

    caution:
      "Real AI models may use many inputs simultaneously and may output probabilities or multiple values. Algebraic function notation provides a simplified foundation for understanding this idea.",

    reflectionQuestion:
      "How is evaluating f(5) conceptually similar to supplying data to a predictive model?",
  },

  pythonLab: {
    title:
      "Mathematical Functions in Python",

    objective:
      "Connect mathematical function notation to Python function definitions and calls.",

    code: `def f(x):
    return 3 * x + 5

inputs = [0, 2, 4, -3]

for x in inputs:
    print(
        "Input:", x,
        "Output:", f(x)
    )`,

    questions: [
      "What mathematical rule does the Python function represent?",
      "What is f(0)?",
      "What is f(2)?",
      "What is f(4)?",
      "What is f(-3)?",
      "Where is the input supplied in the Python code?",
      "Where is the output returned?",
      "How is f(4) in Python similar to f(4) in algebra?",
    ],

    reflectionQuestions: [
      "Why is mathematical function notation useful preparation for programming?",
      "What would happen if you changed the rule inside the function?",
    ],

    extension:
      "Create a second function g(x) = x**2 - 4. Evaluate both f(x) and g(x) for the same set of inputs and compare their outputs.",
  },

  guidedPractice: [
    {
      question:
        "Given f(x) = 5x + 2, find f(3).",
      answer:
        "f(3) = 5(3) + 2 = 17.",
      difficulty: "Foundation",
    },

    {
      question:
        "Given g(x) = 4x - 7, find g(0).",
      answer:
        "g(0) = -7.",
      difficulty: "Foundation",
    },

    {
      question:
        "Given h(x) = x² + 1, find h(-3).",
      answer:
        "h(-3) = (-3)² + 1 = 10.",
      difficulty: "Substitution",
    },

    {
      question:
        "If C(n) = 20 + 6n, find C(5).",
      answer:
        "C(5) = 20 + 30 = 50.",
      difficulty: "Application",
    },

    {
      question:
        "If P(4) = 72 and P(n) represents price for n items, interpret P(4) = 72.",
      answer:
        "Four items cost $72.",
      difficulty: "Interpretation",
    },

    {
      question:
        "Given f(x) = 3x + 1, solve f(x) = 16.",
      answer:
        "3x + 1 = 16, so x = 5.",
      difficulty: "Reverse reasoning",
    },
  ],

  independentPractice: [
    {
      question:
        "Given f(x) = 2x + 9, find f(7).",
      answer:
        "23.",
    },

    {
      question:
        "Given g(x) = 6x - 4, find g(-2).",
      answer:
        "-16.",
    },

    {
      question:
        "Given h(x) = x² - 5x + 2, find h(3).",
      answer:
        "9 - 15 + 2 = -4.",
    },

    {
      question:
        "Given p(x) = x² + 4, find p(-5).",
      answer:
        "29.",
    },

    {
      question:
        "A taxi cost function is C(m) = 5 + 2.5m, where m is miles traveled. Find and interpret C(8).",
      answer:
        "C(8) = 25. An 8-mile trip costs $25.",
    },

    {
      question:
        "If B(t) = 500 + 40t represents an account balance, find B(6).",
      answer:
        "B(6) = 740.",
    },

    {
      question:
        "Given f(x) = 4x - 1, solve f(x) = 31.",
      answer:
        "x = 8.",
    },

    {
      question:
        "Given f(x) = 2x + 3 and g(x) = 5x - 6, compare f(4) and g(4).",
      answer:
        "f(4) = 11 and g(4) = 14, so g(4) > f(4).",
    },

    {
      question:
        "Create your own function and evaluate it for three inputs.",
      answer:
        "Answers will vary.",
    },

    {
      question:
        "Create a real-world interpretation of f(10) = 85.",
      answer:
        "Answers will vary.",
    },
  ],

  commonMistakes: [
    {
      mistake:
        "Reading f(x) as f multiplied by x.",
      correction:
        "The letter f names the function. f(x) means the output of f for input x.",
    },

    {
      mistake:
        "Replacing only one occurrence of x.",
      correction:
        "Substitute the given input everywhere the variable appears.",
    },

    {
      mistake:
        "Failing to use parentheses for negative inputs.",
      correction:
        "Write negative substitutions with parentheses, especially when exponents are present.",
      example:
        "For f(x) = x², f(-3) = (-3)² = 9.",
    },

    {
      mistake:
        "Confusing input with output.",
      correction:
        "The number inside the parentheses is the input. The evaluated result is the output.",
    },

    {
      mistake:
        "Stopping after substitution.",
      correction:
        "After substituting, use order of operations to simplify fully.",
    },

    {
      mistake:
        "Giving a number without units in a real-world problem.",
      correction:
        "Interpret the function value using the original quantities and units.",
    },

    {
      mistake:
        "Thinking function letters must always be f.",
      correction:
        "Functions may be named f, g, h, C, P, T, or another meaningful symbol.",
    },
  ],

  discussionQuestions: [
    "Why does f(x) not mean multiplication?",
    "What information is communicated by the letter f?",
    "What information is communicated by the value inside the parentheses?",
    "Why are parentheses especially important for negative inputs?",
    "How is evaluating a function different from solving an equation?",
    "How can one function be evaluated at many different inputs?",
    "Why might a business use C(q) instead of y = 5q + 20?",
    "How is a Python function call similar to algebraic function notation?",
    "Why is interpreting an output important after calculating it?",
  ],

  formativeAssessment: {
    passingScore: 8,

    questions: [
      {
        type: "meaning",
        prompt:
          "What does f(6) mean?",
        answer:
          "The output of function f when the input is 6.",
      },

      {
        type: "misconception",
        prompt:
          "Does f(x) mean f multiplied by x?",
        answer:
          "No. f names the function and x identifies the input.",
      },

      {
        type: "evaluation",
        prompt:
          "If f(x) = 3x + 4, find f(5).",
        answer:
          "19.",
      },

      {
        type: "zero-input",
        prompt:
          "If g(x) = 8x - 3, find g(0).",
        answer:
          "-3.",
      },

      {
        type: "negative-input",
        prompt:
          "If h(x) = x² + 2, find h(-4).",
        answer:
          "18.",
      },

      {
        type: "interpretation",
        prompt:
          "If C(7) = 63 and C(n) represents cost for n tickets, interpret the statement.",
        answer:
          "Seven tickets cost $63.",
      },

      {
        type: "comparison",
        prompt:
          "If f(x) = 2x + 1 and g(x) = 3x - 2, compare f(5) and g(5).",
        answer:
          "f(5) = 11 and g(5) = 13, so g(5) is greater.",
      },

      {
        type: "reverse-reasoning",
        prompt:
          "If f(x) = 5x + 2 and f(x) = 27, find x.",
        answer:
          "x = 5.",
      },

      {
        type: "context",
        prompt:
          "Why should units be included when interpreting a real-world function value?",
        sampleAnswer:
          "Units explain what the numerical output represents in the original situation.",
      },

      {
        type: "creation",
        prompt:
          "Create a function and evaluate it for an input of your choice.",
        sampleAnswer:
          "Answers will vary.",
      },
    ],
  },

  researchExtension: {
    title:
      "Find a Function Used in the Real World",

    description:
      "Investigate a formula or rule that converts an input into an output.",

    researchQuestion:
      "How do professionals use functions to predict or calculate real quantities?",

    applicationOptions: [
      "Temperature conversion",
      "Taxi pricing",
      "Shipping cost",
      "Interest calculation",
      "Distance and time",
      "Manufacturing cost",
      "Energy consumption",
      "Population models",
    ],

    task:
      "Choose a real formula. Define its input and output, explain its variables and units, evaluate the function at three meaningful inputs, interpret each output, and explain why function notation is useful.",

    requiredEvidence: [
      "Real-world formula",
      "Function name",
      "Input definition",
      "Output definition",
      "Units",
      "Three evaluations",
      "Substitution work",
      "Interpretations",
      "Source or context description",
    ],
  },

  portfolioArtifact: {
    title:
      "Function Evaluation Studio",

    description:
      "Design an original real-world function and demonstrate how it transforms inputs into meaningful outputs.",

    requiredSections: [
      "Real-world scenario",
      "Function name",
      "Variable definitions",
      "Function equation",
      "Meaning of the notation",
      "At least five inputs",
      "Evaluated outputs",
      "Input-output table",
      "One negative or zero input if meaningful",
      "One reverse question using a known output",
      "Python implementation",
      "Written interpretation",
    ],

    requiredEvidence: [
      "Correct function notation",
      "Accurate substitution",
      "Correct calculations",
      "Units",
      "Contextual interpretation",
      "Python connection",
      "Original modeling",
    ],
  },

  growthIndicators: [
    "Reads function notation correctly.",
    "Distinguishes function notation from multiplication.",
    "Identifies function names and inputs.",
    "Substitutes inputs correctly.",
    "Uses parentheses for negative values.",
    "Applies order of operations.",
    "Evaluates linear and simple nonlinear functions.",
    "Interprets outputs in context.",
    "Compares function values.",
    "Uses reverse reasoning to find inputs.",
    "Connects mathematical functions to Python functions.",
    "Creates original function models.",
  ],

  lumineryGuidance: {
    message:
      "When you see f(a), do not ask, 'What do I multiply?' Ask, 'What input am I sending into the function?'",

    recommendation:
      "Read → identify input → substitute everywhere → simplify → attach meaning.",

    prompt:
      "What is the function's rule, what input are you giving it, and what does the resulting output mean?",

    coachingQuestions: [
      "What is the function's name?",
      "What is the input?",
      "Where should that input replace the variable?",
      "Does the variable appear more than once?",
      "Should you use parentheses around the input?",
      "What operation should be completed first?",
      "What output did you obtain?",
      "What units belong to the output?",
      "What does the function value mean in context?",
      "Can you verify the result another way?",
      "Could Python evaluate the same function?",
    ],
  },

  summary: [
    "Function notation names a function and identifies its input.",
    "f(x) does not mean f multiplied by x.",
    "f(a) means the output of function f for input a.",
    "Function evaluation requires substitution.",
    "The input must replace every occurrence of the variable.",
    "Negative inputs should be placed in parentheses.",
    "Order of operations must be followed after substitution.",
    "Function outputs should be interpreted with appropriate units.",
    "Different functions may produce different outputs for the same input.",
    "A known output can sometimes be used to find the corresponding input.",
    "Python functions closely mirror mathematical input-output thinking.",
  ],

  reflection: [
    "How would you explain f(5) to someone who has never studied functions?",
    "Why is f(x) not multiplication?",
    "Why are parentheses important when evaluating negative inputs?",
    "What is the difference between evaluating f(4) and solving f(x) = 4?",
    "How does function notation make real-world models easier to communicate?",
    "What similarities do you see between mathematical functions and Python functions?",
    "Create a meaningful function name for a real-world quantity instead of using f.",
    "What should you always do after calculating a real-world function output?",
  ],

  previousLesson: {
    moduleNumber: 4,
    lessonNumber: 2,
    slug: "functions-vs-non-functions",
    title: "Functions vs. Non-Functions",
  },

  nextLesson: {
    moduleNumber: 4,
    lessonNumber: 4,
    slug: "domain-and-range",
    title: "Domain and Range",
  },
};

export default lesson03;