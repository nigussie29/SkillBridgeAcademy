const lesson01 = {
  id: "algebra-one-module-01-lesson-01",
  slug: "variables-and-expressions",
  courseId: "algebra-1",
  courseTitle: "Algebra I",
  moduleNumber: 1,
  moduleTitle: "Foundations of Algebra",
  lessonNumber: 1,

  title: "Variables and Expressions",
  subtitle: "Use symbols to represent unknown and changing quantities.",
  duration: "55–70 minutes",
  level: "Foundation",
  status: "Available",

  essentialQuestion:
    "How do variables and expressions describe real-life situations?",

  bigIdea:
    "A variable represents an unknown or changing quantity. An algebraic expression combines numbers, variables, and operations to represent a mathematical situation.",

  learningObjectives: [
    "Identify variables, constants, coefficients, and terms.",
    "Distinguish between expressions and equations.",
    "Translate verbal phrases into algebraic expressions.",
    "Interpret the meaning of an expression in a real-world context.",
  ],

  warmUp: {
    title: "The Mystery Number",
    prompts: [
      "Think of a number, but do not tell anyone what it is.",
      "Add 5 to your number. How could you represent this without knowing the original number?",
      "Suppose the unknown number is represented by x. Write an expression for the new value.",
      "Explain why a letter can be useful when a number is unknown.",
    ],
  },

  vocabulary: [
    {
      term: "Variable",
      definition:
        "A letter or symbol used to represent an unknown or changing quantity.",
      example: "In 4x + 7, x is the variable.",
    },
    {
      term: "Constant",
      definition:
        "A number whose value does not change within an expression.",
      example: "In 4x + 7, the constant is 7.",
    },
    {
      term: "Coefficient",
      definition:
        "A numerical factor multiplied by a variable.",
      example: "In 4x, the coefficient of x is 4.",
    },
    {
      term: "Term",
      definition:
        "A number, variable, or product of numbers and variables separated by addition or subtraction.",
      example: "The terms in 4x + 7 are 4x and 7.",
    },
    {
      term: "Expression",
      definition:
        "A mathematical phrase containing numbers, variables, and operations but no equality sign.",
      example: "3x + 10",
    },
    {
      term: "Equation",
      definition:
        "A mathematical statement showing that two expressions are equal.",
      example: "3x + 10 = 25",
    },
  ],

  conceptExplanation: {
    title: "Understanding Algebraic Language",
    summary:
      "Algebra uses symbols to describe quantities and relationships. Variables allow one expression to represent many possible situations.",
    teachingNotes: [
      "Begin with an unknown amount of money and represent it with a variable.",
      "Explain that multiplication is often written without the multiplication symbol: 5 × x becomes 5x.",
      "Show that terms are separated by addition or subtraction signs.",
      "Compare an expression such as 3x + 4 with an equation such as 3x + 4 = 19.",
      "Emphasize that expressions can be simplified or evaluated, while equations can be solved.",
      "Connect verbal phrases carefully to mathematical operations.",
    ],
  },

  workedExamples: [
    {
      title: "Identify the Parts of an Expression",
      problem:
        "Identify the variable, coefficient, constant, and terms in 5x + 8.",
      solutionSteps: [
        "The expression contains two terms: 5x and 8.",
        "The variable is x because it represents an unknown or changing quantity.",
        "The coefficient is 5 because it multiplies x.",
        "The constant is 8 because it has no variable.",
      ],
      answer:
        "Variable: x; coefficient: 5; constant: 8; terms: 5x and 8.",
    },
    {
      title: "Translate Words into Symbols",
      problem: "Write an expression for seven more than n.",
      solutionSteps: [
        "Start with the unknown quantity n.",
        "The phrase “more than” indicates addition.",
        "Add 7 to n.",
      ],
      answer: "n + 7",
    },
    {
      title: "Pay Attention to Word Order",
      problem: "Write an expression for five less than a number x.",
      solutionSteps: [
        "Begin with the number x.",
        "The phrase “five less than x” means subtract 5 from x.",
        "Do not write 5 - x because that reverses the quantities.",
      ],
      answer: "x - 5",
    },
    {
      title: "Model a Real-World Cost",
      problem:
        "A movie ticket costs $12. Write an expression for the total cost of t tickets.",
      solutionSteps: [
        "The number of tickets is represented by t.",
        "Each ticket costs $12.",
        "Multiply the price per ticket by the number of tickets.",
      ],
      answer: "12t",
    },
    {
      title: "Model a Fixed Fee and Changing Cost",
      problem:
        "A gym charges a $35 registration fee and $20 per month. Write an expression for the total cost after m months.",
      solutionSteps: [
        "The monthly cost after m months is 20m.",
        "The registration fee is a one-time constant of 35.",
        "Add the fixed fee to the monthly cost.",
      ],
      answer: "20m + 35",
    },
  ],

  guidedPractice: [
    {
      question:
        "Identify the variable, coefficient, constant, and terms in 6x + 11.",
      answer:
        "Variable: x; coefficient: 6; constant: 11; terms: 6x and 11.",
      hint: "Look for the number multiplying the variable.",
    },
    {
      question: "Write an expression for nine more than p.",
      answer: "p + 9",
      hint: "The phrase “more than” tells you to add.",
    },
    {
      question: "Write an expression for four less than y.",
      answer: "y - 4",
      hint: "Subtract 4 from y.",
    },
    {
      question:
        "A notebook costs $3. Write an expression for the cost of n notebooks.",
      answer: "3n",
      hint: "Multiply the cost of one notebook by the number purchased.",
    },
  ],

  independentPractice: [
    {
      question:
        "Identify the coefficient and constant in the expression 9a + 14.",
      answer: "Coefficient: 9; constant: 14.",
    },
    {
      question:
        "List all terms in the expression 4x + 3y - 10.",
      answer: "4x, 3y, and -10.",
    },
    {
      question: "Write an expression for twelve fewer than k.",
      answer: "k - 12",
    },
    {
      question: "Write an expression for three times a number n.",
      answer: "3n",
    },
    {
      question:
        "A taxi charges a starting fee of $4 and $2 for every mile traveled. Write an expression for the cost of traveling m miles.",
      answer: "2m + 4",
    },
    {
      question:
        "Explain the difference between the expression 5x + 2 and the equation 5x + 2 = 17.",
      answer:
        "The expression represents a quantity and has no equality sign. The equation states that two quantities are equal and can be solved for x.",
    },
  ],

  commonMistakes: [
    {
      mistake:
        "Reversing the order in phrases such as “five less than x.”",
      correction:
        "“Five less than x” means begin with x and subtract 5: x - 5.",
    },
    {
      mistake:
        "Calling every number in an expression a coefficient.",
      correction:
        "A coefficient multiplies a variable. A number without a variable is a constant.",
    },
    {
      mistake:
        "Treating an expression as if it were an equation.",
      correction:
        "An equation contains an equality sign. An expression does not.",
    },
    {
      mistake: "Writing 4 + x when the phrase says four times x.",
      correction:
        "The word “times” indicates multiplication, so the correct expression is 4x.",
    },
  ],

  technologyActivity: {
    title: "Explore Variables with Desmos",
    tool: "Desmos",
    instructions: [
      "Open the Desmos graphing calculator.",
      "Enter the expression y = 3x + 2.",
      "Create a table for the expression.",
      "Change the values of x and observe how y changes.",
      "Replace the coefficient 3 with 5 and describe what changes.",
      "Replace the constant 2 with 8 and describe what changes.",
      "Write two observations about the roles of the coefficient and constant.",
    ],
  },

  pythonLab: {
    title: "Represent an Expression with Python",
    objective:
      "Connect an algebraic variable and expression to a Python variable and calculation.",
    code: `x = 5
result = 3 * x + 2

print("The value of x is:", x)
print("The value of 3x + 2 is:", result)`,
    reflectionQuestions: [
      "Which Python name represents the algebraic variable?",
      "Why does Python require the multiplication symbol in 3 * x?",
      "What result appears when x = 5?",
      "Predict the result when x changes to 10, and then test your prediction.",
    ],
  },

  realWorldConnection: {
    title: "Design a Cellphone Cost Expression",
    scenario:
      "A cellphone company charges a $25 monthly service fee plus $8 for every gigabyte of data used.",
    prompts: [
      "Choose a variable to represent the number of gigabytes used.",
      "Identify the changing cost.",
      "Identify the fixed cost.",
      "Write an expression for the monthly bill.",
      "Explain what each term in your expression represents.",
      "Calculate the bill when 6 gigabytes are used.",
    ],
    sampleExpression: "8g + 25",
    sampleResult: "$73 when g = 6",
  },

  formativeAssessment: {
    passingScore: 4,
    questions: [
      {
        type: "short-response",
        prompt:
          "Identify the variable, coefficient, and constant in 7x + 13.",
        answer: "Variable: x; coefficient: 7; constant: 13.",
      },
      {
        type: "short-response",
        prompt: "Write an expression for six more than a number n.",
        answer: "n + 6",
      },
      {
        type: "short-response",
        prompt: "Write an expression for eight less than p.",
        answer: "p - 8",
      },
      {
        type: "short-response",
        prompt:
          "A book costs $15. Write an expression for the cost of b books.",
        answer: "15b",
      },
      {
        type: "explanation",
        prompt:
          "Explain the difference between an algebraic expression and an equation.",
        sampleAnswer:
          "An expression represents a mathematical quantity and does not contain an equality sign. An equation states that two expressions have equal values.",
      },
    ],
  },

  creatorChallenge: {
    title: "Create Your Own Algebraic Model",
    description:
      "Create a realistic situation that can be represented by an expression in the form ax + b.",
    requirements: [
      "Describe a real-world situation involving one changing quantity and one fixed quantity.",
      "Define the variable clearly.",
      "Write an expression in the form ax + b.",
      "Explain the meaning of the coefficient, variable, and constant.",
      "Evaluate the expression for at least two different values of x.",
      "Include a table, diagram, Desmos screenshot, or Python output.",
      "Write a short reflection explaining why your model is reasonable.",
    ],
  },

  lumineryGuidance: {
    message:
      "Mathematical symbols become powerful when you understand the quantities and relationships they represent.",
    prompt:
      "How can one algebraic expression represent many different real-world situations?",
  },

  portfolioEvidence: {
    title: "My First Algebraic Model",
    artifact:
      "A one-page explanation of a real-world situation represented by ax + b.",
    include: [
      "The real-world situation",
      "A definition of the variable",
      "The algebraic expression",
      "An explanation of every term",
      "Two evaluated examples",
      "A visual, table, graph, or code output",
      "A reflection",
    ],
  },

  summary: [
    "A variable represents an unknown or changing quantity.",
    "A coefficient multiplies a variable, while a constant has a fixed value.",
    "Terms are separated by addition or subtraction.",
    "An expression has no equality sign, while an equation states that two expressions are equal.",
    "Algebraic expressions can represent costs, distances, ages, and many other real-world quantities.",
  ],

  reflection: [
    "What is the difference between a variable and a constant?",
    "Which verbal phrase was most difficult to translate?",
    "What mistake should you avoid when translating “less than” phrases?",
    "Where might you use an algebraic expression outside mathematics class?",
    "How confident are you about identifying the parts of an expression?",
  ],

  previousLesson: null,

  nextLesson: {
    moduleNumber: 1,
    lessonNumber: 2,
    slug: "order-of-operations",
    title: "Order of Operations",
  },
};

export default lesson01;