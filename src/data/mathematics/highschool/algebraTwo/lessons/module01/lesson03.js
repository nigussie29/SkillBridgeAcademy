const lesson03 = {
  id: "algebra-two-module-01-lesson-03",

  slug: "parent-functions-and-function-families",

  courseId: "algebra-2",
  courseTitle: "Algebra II",

  moduleNumber: 1,
  moduleTitle: "Functions and Transformations",

  lessonNumber: 3,

  title: "Parent Functions and Function Families",

  subtitle:
    "Recognize the basic shapes and behaviors that organize many Algebra II functions into families.",

  duration: "80–95 minutes",

  level: "Intermediate",

  status: "Available",

  essentialQuestion:
    "How can recognizing a parent function help us predict the shape, domain, range, and behavior of a more complicated function?",

  bigIdea:
    "Many functions belong to families. A parent function is the simplest function in a family, and its basic shape and features help us understand transformed versions of that function.",

  whyThisLessonExists: {
    title: "Why Function Families Matter",

    introduction:
      "Algebra II contains many different-looking equations, but they are not random. Functions can be organized into families that share common shapes, patterns, domains, ranges, and behaviors.",

    centralProblem:
      "If every new equation is treated as completely new, students must memorize many disconnected rules. Recognizing function families allows us to reason from structure instead.",

    purpose:
      "This lesson develops pattern recognition. Students learn to identify a function family from its equation, table, graph, and behavior before later studying how transformations move and reshape parent functions.",
  },

  problemFirst: {
    title: "Which Models Belong Together?",

    scenario:
      "A student technology team is examining five different data patterns. One model grows at a constant rate, another forms a U-shaped path, another creates a V-shaped distance pattern, another begins at an endpoint and increases gradually, and another changes from negative values through zero to positive values with an S-shaped pattern. The team wants to organize these models into mathematical families before analyzing them.",

    questions: [
      "What features could you use to classify functions into families?",
      "Would equations alone be enough, or should you also examine tables and graphs?",
      "What type of function would you expect to produce a straight line?",
      "Which family might create a U-shaped graph?",
      "Which family might create a V-shaped graph?",
      "Why might recognizing a familiar shape help you understand a new function?",
    ],

    expectedInsight:
      "Functions can be grouped by shared structural features. The equation, graph, table, domain, range, and behavior can all provide clues about the function family.",
  },

  visualModels: [
    {
      id: "parent-function-family-overview",

      type: "comparison",

      title: "Five Important Parent Function Families",

      description:
        "Each family begins with a simple parent function whose shape and behavior become a reference point for more complicated functions.",

      items: [
        {
          label: "Linear",
          symbol: "f(x) = x",
          meaning:
            "A straight line with constant rate of change. Domain: all real numbers. Range: all real numbers.",
        },

        {
          label: "Quadratic",
          symbol: "f(x) = x²",
          meaning:
            "A U-shaped parabola with a minimum at (0, 0). Domain: all real numbers. Range: y ≥ 0.",
        },

        {
          label: "Absolute Value",
          symbol: "f(x) = |x|",
          meaning:
            "A V-shaped graph with a minimum at (0, 0). Domain: all real numbers. Range: y ≥ 0.",
        },

        {
          label: "Square Root",
          symbol: "f(x) = √x",
          meaning:
            "Begins at (0, 0) and extends to the right. Domain: x ≥ 0. Range: y ≥ 0.",
        },

        {
          label: "Cubic",
          symbol: "f(x) = x³",
          meaning:
            "An S-shaped graph passing through the origin. Domain and range are all real numbers.",
        },
      ],
    },

    {
      id: "family-recognition-clues",

      type: "comparison",

      title: "How to Recognize a Function Family",

      description:
        "Do not depend on only one representation. Strong mathematical reasoning connects several clues.",

      items: [
        {
          label: "Equation",
          symbol: "Look at structure",
          meaning:
            "Powers, absolute-value symbols, radicals, and other structures often reveal the family.",
        },

        {
          label: "Graph",
          symbol: "Look at shape",
          meaning:
            "Straight line, U-shape, V-shape, endpoint curve, and S-shape are important visual clues.",
        },

        {
          label: "Table",
          symbol: "Look at change",
          meaning:
            "Constant first differences suggest linear behavior, while changing differences can signal nonlinear behavior.",
        },

        {
          label: "Domain & Range",
          symbol: "Look at restrictions",
          meaning:
            "Some families accept all real inputs while others naturally restrict inputs or outputs.",
        },
      ],
    },

    {
      id: "similar-shape-different-family",

      type: "comparison",

      title: "Quadratic vs. Absolute Value",

      description:
        "Two functions can share some features while still belonging to different families.",

      items: [
        {
          label: "Quadratic",
          symbol: "f(x) = x²",
          meaning:
            "Smooth U-shaped curve. Its rate of change changes continuously.",
        },

        {
          label: "Absolute Value",
          symbol: "f(x) = |x|",
          meaning:
            "V-shaped graph made from two straight pieces that meet at a sharp corner.",
        },

        {
          label: "Shared Feature",
          symbol: "Minimum at (0, 0)",
          meaning:
            "Both parent functions have domain all real numbers and range y ≥ 0.",
        },

        {
          label: "Key Difference",
          symbol: "Curve vs. corner",
          meaning:
            "Shape and rate-of-change behavior help distinguish the two families.",
        },
      ],
    },
  ],

  representationModel: {
    title:
      "Quadratic Parent Function — Table & Graph",

    description:
      "The parent quadratic function f(x) = x² shows how negative and positive inputs can produce the same output. The table and graph describe the same relationship.",

    equation:
      "f(x) = x²",

    columns: [
      {
        key: "x",
        label: "Input, x",
      },
      {
        key: "y",
        label: "Output, f(x)",
      },
    ],

    rows: [
      { x: -3, y: 9 },
      { x: -2, y: 4 },
      { x: -1, y: 1 },
      { x: 0, y: 0 },
      { x: 1, y: 1 },
      { x: 2, y: 4 },
      { x: 3, y: 9 },
    ],

    xKey: "x",
    yKey: "y",

    xLabel: "Input, x",

    yLabel: "Output, f(x)",

    highlightPoint: {
      x: 2,
      y: 4,
    },
  },

  learningObjectives: [
    "Define a parent function and function family.",
    "Recognize linear, quadratic, absolute-value, square-root, and cubic parent functions.",
    "Match equations with characteristic graph shapes.",
    "Compare the domains and ranges of common parent functions.",
    "Use tables, equations, and graphs together to identify function families.",
    "Describe important features such as minimum values, endpoints, symmetry, and increasing or decreasing behavior.",
    "Explain why recognizing parent functions helps analyze transformed functions.",
  ],

  prerequisiteKnowledge: [
    "Function notation",
    "Domain and range",
    "Input and output",
    "Ordered pairs",
    "Coordinate-plane graphs",
    "Increasing and decreasing behavior",
    "Exponents",
    "Square roots",
    "Absolute value",
  ],

  vocabulary: [
    {
      term: "Parent Function",
      definition:
        "The simplest basic function that represents the main shape and behavior of a function family.",
    },

    {
      term: "Function Family",
      definition:
        "A group of functions that share a common mathematical structure and characteristic graph shape.",
    },

    {
      term: "Linear Function",
      definition:
        "A function with a constant rate of change whose graph is a straight line.",
    },

    {
      term: "Quadratic Function",
      definition:
        "A polynomial function whose highest exponent is 2 and whose graph is a parabola.",
    },

    {
      term: "Absolute-Value Function",
      definition:
        "A function involving absolute value whose parent graph has a V shape.",
    },

    {
      term: "Square-Root Function",
      definition:
        "A function involving a square root whose parent graph begins at an endpoint and extends to the right.",
    },

    {
      term: "Cubic Function",
      definition:
        "A polynomial function whose highest exponent is 3; the parent cubic has an S-shaped graph.",
    },

    {
      term: "Symmetry",
      definition:
        "A property in which parts of a graph correspond to one another according to a reflection or rotation.",
    },
  ],

  formulas: [
    {
      name: "Linear Parent Function",

      formula:
        "f(x) = x",

      meaning:
        "The simplest linear relationship. Its graph has slope 1 and passes through the origin.",

      requirement:
        "Domain and range are all real numbers.",
    },

    {
      name: "Quadratic Parent Function",

      formula:
        "f(x) = x²",

      meaning:
        "The simplest quadratic relationship. Its graph is an upward-opening parabola.",

      requirement:
        "Domain: all real numbers. Range: f(x) ≥ 0.",
    },

    {
      name: "Absolute-Value Parent Function",

      formula:
        "f(x) = |x|",

      meaning:
        "Measures distance from zero, producing nonnegative outputs.",

      requirement:
        "Domain: all real numbers. Range: f(x) ≥ 0.",
    },

    {
      name: "Square-Root Parent Function",

      formula:
        "f(x) = √x",

      meaning:
        "Produces the nonnegative square root of the input.",

      requirement:
        "For real-number outputs, x ≥ 0.",
    },

    {
      name: "Cubic Parent Function",

      formula:
        "f(x) = x³",

      meaning:
        "The simplest cubic function and an example of an odd-power relationship.",

      requirement:
        "Domain and range are all real numbers.",
    },
  ],

  workedExamples: [
    {
      id: "worked-example-1",

      title: "Identify a Family From an Equation",

      problem:
        "Identify the parent-function family associated with g(x) = x².",

      solutionSteps: [
        "Examine the structure of the equation.",
        "The variable x is raised to the second power.",
        "The parent quadratic function is f(x) = x².",
        "Therefore the function belongs to the quadratic family.",
        "Its parent graph has a U-shaped parabola.",
      ],

      answer:
        "Quadratic family.",

      interpretation:
        "Recognizing the exponent immediately provides information about the graph shape and basic behavior.",
    },

    {
      id: "worked-example-2",

      title: "Identify a Family From a Table",

      problem:
        "A function has the values (-3, 3), (-2, 2), (-1, 1), (0, 0), (1, 1), (2, 2), and (3, 3). Which parent function does this table represent?",

      solutionSteps: [
        "Compare each input with its output.",
        "Negative inputs produce their positive distance from zero.",
        "For example, -3 produces 3 and -2 produces 2.",
        "Positive inputs remain unchanged.",
        "This matches the rule f(x) = |x|.",
      ],

      answer:
        "The absolute-value parent function f(x) = |x|.",

      interpretation:
        "The table reveals the V-shaped absolute-value relationship even before the graph is drawn.",
    },

    {
      id: "worked-example-3",

      title: "Compare Quadratic and Absolute Value",

      problem:
        "The functions f(x) = x² and g(x) = |x| both have minimum value 0. Explain why they are still different function families.",

      solutionSteps: [
        "Both functions have domain all real numbers.",
        "Both produce only nonnegative outputs.",
        "Both have a minimum value of 0 at x = 0.",
        "However, f(x) = x² creates a smooth curved parabola.",
        "The function g(x) = |x| creates two straight pieces meeting at a sharp corner.",
        "Their output growth is also different. For x = 3, x² = 9 while |x| = 3.",
      ],

      answer:
        "They share some features but differ in equation structure, graph shape, and rate of output growth.",

      interpretation:
        "Function families are identified using multiple characteristics, not just one shared feature.",
    },

    {
      id: "worked-example-4",

      title: "Identify a Family From Domain and Shape",

      problem:
        "A graph begins at (0, 0), exists only for x ≥ 0, has outputs y ≥ 0, and increases while gradually flattening. Which parent function best matches these features?",

      solutionSteps: [
        "The graph has an endpoint at the origin.",
        "Negative x-values are excluded from the real-number domain.",
        "The graph increases to the right.",
        "These are characteristic features of f(x) = √x.",
      ],

      answer:
        "Square-root family.",

      interpretation:
        "Domain, range, and behavior can reveal a function family even when the equation is not shown.",
    },
  ],

  interactiveExploration: {
    title: "Function Family Detective",

    description:
      "Compare parent functions using equations, tables, and graphs. Predict each family before checking your conclusion.",

    instructions: [
      "Create or sketch f(x) = x, f(x) = x², f(x) = |x|, f(x) = √x, and f(x) = x³.",
      "Before graphing, predict the shape of each function.",
      "Create a small table of values for each parent function.",
      "Compare domain and range.",
      "Identify whether each graph has a minimum, maximum, endpoint, corner, or symmetry.",
      "Record at least one feature that uniquely helps you recognize each family.",
    ],

    questions: [
      "Which functions accept every real number as an input?",
      "Which parent function naturally restricts negative inputs?",
      "Which functions have a minimum value of 0?",
      "Which two functions might initially appear similar because both have nonnegative ranges?",
      "How can you distinguish a quadratic graph from an absolute-value graph?",
      "Which family has an S-shaped parent graph?",
    ],

    expectedDiscovery:
      "Each function family has a recognizable combination of equation structure, graph shape, domain, range, and behavior. No single feature should always be used by itself.",
  },

  realWorldApplications: [
    {
      field: "Linear Models",

      application:
        "Constant-rate situations such as hourly wages, steady travel, and fixed-rate pricing often begin with linear relationships.",
    },

    {
      field: "Quadratic Models",

      application:
        "Projectile motion, area relationships, and optimization problems frequently involve quadratic functions.",
    },

    {
      field: "Absolute Value",

      application:
        "Distance from a target value, measurement error, and deviation from a reference point can be modeled using absolute value.",
    },

    {
      field: "Square Root",

      application:
        "Geometric relationships, physical formulas, and problems involving reversing a squared quantity often produce square-root functions.",
    },

    {
      field: "Cubic Models",

      application:
        "Volume relationships and some changing-rate systems can involve cubic functions.",
    },
  ],

  aiConnection: {
    title:
      "AI Also Learns Patterns and Function Shapes",

    explanation:
      "Machine-learning systems search for patterns that relate inputs to outputs. Recognizing mathematical function families develops a similar habit: instead of treating every data pattern as unrelated, we look for structure that explains how quantities behave.",

    example:
      "If data points appear close to a straight line, a linear model may be reasonable. If the pattern curves and changes direction, a nonlinear model may fit better.",

    formula:
      "input data → recognize pattern → choose model → evaluate predictions",

    examples: [
      "Linear regression",
      "Polynomial regression",
      "Curve fitting",
      "Feature relationships",
    ],

    uses: [
      "Model selection",
      "Pattern recognition",
      "Prediction",
      "Data analysis",
    ],

    caution:
      "A graph resembling a familiar function does not prove that the function is the correct model. Data, assumptions, and context must also be examined.",

    reflectionQuestion:
      "Why would choosing a function family before understanding the data potentially lead to a poor prediction model?",
  },

  pythonLab: {
    title: "Compare Parent Functions With Python",

    objective:
      "Generate values from several parent functions and compare their numerical patterns.",

    code: `def linear(x):
    return x

def quadratic(x):
    return x ** 2

def absolute_value(x):
    return abs(x)

def cubic(x):
    return x ** 3

inputs = [-3, -2, -1, 0, 1, 2, 3]

for x in inputs:
    print(
        "x =", x,
        "| linear =", linear(x),
        "| quadratic =", quadratic(x),
        "| absolute =", absolute_value(x),
        "| cubic =", cubic(x)
    )`,

    questions: [
      "Which functions produce negative outputs for some of these inputs?",
      "Which two functions produce the same values for x = 0 and x = 1 but become different afterward?",
      "Compare quadratic(3) with absolute_value(3). What do you notice?",
      "What symmetry do you observe in the outputs of the quadratic and absolute-value functions?",
      "What pattern do you observe in the cubic outputs?",
    ],

    reflectionQuestions: [
      "Which function family is easiest to identify from its table? Why?",
      "Can two different functions share several points?",
      "Why should you compare the entire pattern rather than only one ordered pair?",
    ],

    extension:
      "Add a square_root function using Python's math.sqrt(). Only use nonnegative inputs. Explain why the input list must be restricted.",
  },

  guidedPractice: [
    {
      id: "guided-1",
      difficulty: "Foundational",

      question:
        "Identify the parent-function family: f(x) = |x|.",

      answer:
        "Absolute-value family.",
    },

    {
      id: "guided-2",
      difficulty: "Foundational",

      question:
        "Which parent function has a U-shaped graph?",

      answer:
        "The quadratic parent function f(x) = x².",
    },

    {
      id: "guided-3",
      difficulty: "Intermediate",

      question:
        "State the domain and range of f(x) = √x.",

      answer:
        "Domain: x ≥ 0. Range: f(x) ≥ 0.",
    },

    {
      id: "guided-4",
      difficulty: "Intermediate",

      question:
        "Both f(x) = x² and g(x) = |x| have range y ≥ 0. Give one visual feature that distinguishes them.",

      answer:
        "The quadratic graph is a smooth U-shaped curve, while the absolute-value graph is V-shaped with a sharp corner.",
    },

    {
      id: "guided-5",
      difficulty: "Reasoning",

      question:
        "A function has domain and range all real numbers and an S-shaped graph through the origin. Which parent family is most likely?",

      answer:
        "The cubic family, represented by f(x) = x³.",
    },
  ],

  independentPractice: [
    {
      id: "independent-1",
      difficulty: "Foundational",

      question:
        "Identify the family of f(x) = x³.",

      answer:
        "Cubic.",
    },

    {
      id: "independent-2",
      difficulty: "Foundational",

      question:
        "Which parent function has a straight-line graph?",

      answer:
        "f(x) = x, the linear parent function.",
    },

    {
      id: "independent-3",
      difficulty: "Intermediate",

      question:
        "State the domain and range of f(x) = x².",

      answer:
        "Domain: all real numbers. Range: y ≥ 0.",
    },

    {
      id: "independent-4",
      difficulty: "Intermediate",

      question:
        "A table contains (-2, 2), (-1, 1), (0, 0), (1, 1), and (2, 2). Identify the parent function.",

      answer:
        "f(x) = |x|.",
    },

    {
      id: "independent-5",
      difficulty: "Error Analysis",

      question:
        "A student claims that f(x) = x² and g(x) = |x| are the same function because both have minimum value 0 and range y ≥ 0. Explain the mistake.",

      answer:
        "Sharing some features does not make the functions identical. Their equations, graph shapes, rates of change, and many output values are different.",
    },

    {
      id: "independent-6",
      difficulty: "Representation",

      question:
        "A graph begins at the origin and exists only to the right of the y-axis. It increases while becoming less steep. Identify the most likely parent family.",

      answer:
        "Square-root family.",
    },

    {
      id: "independent-7",
      difficulty: "Higher Order",

      question:
        "Why is recognizing a parent function useful even if the actual equation is more complicated than the parent equation?",

      answer:
        "The parent function provides a reference shape and basic behavior. More complicated functions in the family can often be understood as modifications or transformations of that parent.",
    },
  ],

  commonMistakes: [
    {
      mistake:
        "Identifying a family using only one point.",

      correction:
        "Many different functions can pass through the same point. Examine equation structure and the overall pattern.",

      example:
        "f(x) = x, f(x) = x², and f(x) = x³ all contain the point (1, 1).",
    },

    {
      mistake:
        "Confusing quadratic and absolute-value graphs because both can have minimum value 0.",

      correction:
        "Look at shape. Quadratic graphs curve smoothly while absolute-value graphs have a sharp vertex.",

      example:
        "Compare y = x² with y = |x| near x = 0.",
    },

    {
      mistake:
        "Assuming every parent function has domain all real numbers.",

      correction:
        "Some parent functions have natural restrictions.",

      example:
        "For the real-number square-root function f(x) = √x, x must satisfy x ≥ 0.",
    },

    {
      mistake:
        "Memorizing shapes without connecting them to equations.",

      correction:
        "Connect equation, table, graph, domain, range, and behavior.",

      example:
        "The square in x² explains why positive and negative inputs produce equal nonnegative outputs.",
    },
  ],

  discussionQuestions: [
    "Why is a parent function useful as a mathematical reference?",
    "Which two parent functions are easiest to confuse visually, and how would you distinguish them?",
    "Can two different function families have the same domain? Give an example.",
    "Can two different function families have the same range? Give an example.",
    "Which representation—equation, table, or graph—helps you recognize function families most quickly? Defend your answer.",
  ],

  formativeAssessment: {
    totalPoints: 10,

    passingScore: 8,

    questions: [
      {
        id: "assessment-1",
        points: 2,

        prompt:
          "What is a parent function?",

        answer:
          "The simplest basic function that represents the characteristic structure, shape, and behavior of a function family.",
      },

      {
        id: "assessment-2",
        points: 2,

        prompt:
          "Identify the parent function with a V-shaped graph.",

        answer:
          "f(x) = |x|.",
      },

      {
        id: "assessment-3",
        points: 2,

        prompt:
          "State the domain of f(x) = √x over the real numbers.",

        answer:
          "x ≥ 0.",
      },

      {
        id: "assessment-4",
        points: 2,

        prompt:
          "Which parent function is represented by f(x) = x³, and what is its general graph shape?",

        answer:
          "The cubic parent function; its graph has an S-shaped form passing through the origin.",
      },

      {
        id: "assessment-5",
        points: 2,

        prompt:
          "Give one important difference between f(x) = x² and f(x) = |x|.",

        answer:
          "The quadratic graph is a smooth parabola, while the absolute-value graph is V-shaped with a sharp corner.",
      },
    ],
  },

  researchExtension: {
    title: "Function Families in Real Data",

    description:
      "Investigate a real relationship and determine which function family might reasonably describe its pattern.",

    researchQuestion:
      "How can the shape of real data help us select a mathematical function family?",

    applicationOptions: [
      "Projectile height",
      "Distance from a location",
      "Area and dimensions",
      "Volume",
      "Travel cost",
      "Population data",
      "Sensor measurements",
    ],

    task:
      "Choose one real or simulated dataset. Create a table and graph, identify its major pattern, select a possible function family, and defend your choice using mathematical evidence.",

    requiredEvidence: [
      "Description of the variables",
      "Table of data",
      "Graph",
      "Proposed function family",
      "At least three mathematical reasons supporting the classification",
      "One limitation or uncertainty in the model",
    ],
  },

  portfolioArtifact: {
    title: "Parent Function Family Atlas",

    description:
      "Create a visual reference that demonstrates your understanding of major Algebra II parent functions.",

    requiredSections: [
      "Linear parent function",
      "Quadratic parent function",
      "Absolute-value parent function",
      "Square-root parent function",
      "Cubic parent function",
    ],

    requiredEvidence: [
      "Equation for each parent function",
      "Small table of values",
      "Graph or accurate sketch",
      "Domain",
      "Range",
      "Important graph features",
      "One possible real-world connection",
      "One comparison between two families",
    ],
  },

  growthIndicators: [
    {
      title: "Pattern Recognition",

      description:
        "Recognizes mathematical structure across equations, tables, and graphs.",
    },

    {
      title: "Representation",

      description:
        "Connects symbolic, numerical, graphical, and verbal descriptions of functions.",
    },

    {
      title: "Classification",

      description:
        "Uses multiple mathematical features to organize functions into families.",
    },

    {
      title: "Reasoning",

      description:
        "Explains why a function belongs to a particular family instead of relying only on memorization.",
    },

    {
      title: "Computational Thinking",

      description:
        "Uses generated input-output values to compare the behavior of different function rules.",
    },

    {
      title: "Modeling",

      description:
        "Connects function families with patterns that appear in real situations and data.",
    },
  ],

  reflection: [
    "Which parent function is easiest for you to recognize and why?",
    "Which two function families require the most careful comparison?",
    "How does domain help identify a function family?",
    "How does the equation explain the shape of a graph?",
    "Why might recognizing a parent function make future Algebra II problems easier?",
  ],

  summary: [
    "A parent function is the simplest representative of a function family.",
    "Linear, quadratic, absolute-value, square-root, and cubic functions have characteristic shapes.",
    "Equation structure provides clues about function family.",
    "Graphs provide visual clues through shape, symmetry, endpoints, corners, and turning behavior.",
    "Domain and range help distinguish function families.",
    "Tables reveal numerical patterns in function behavior.",
    "Recognizing parent functions prepares us to understand function transformations.",
  ],

  lumineryGuidance: {
    message:
      "Do not ask only, 'What formula is this?' Ask, 'What mathematical family does this relationship belong to?'",

    prompt:
      "Use at least two pieces of evidence before deciding which parent-function family matches a relationship.",

    coachingQuestions: [
      "What structure do you notice in the equation?",
      "What shape would you expect from that structure?",
      "What does the domain tell you?",
      "What does the range tell you?",
      "What pattern appears in the table?",
      "Which other family looks similar, and what feature distinguishes them?",
    ],
  },

  previousLesson: {
    lessonNumber: 2,
    title: "Domain, Range, and Function Behavior",
    slug: "domain-range-and-function-behavior",
  },

  nextLesson: {
    lessonNumber: 4,
    title: "Translations: Moving Functions",
    slug: "translations-moving-functions",
  },
};

export default lesson03;