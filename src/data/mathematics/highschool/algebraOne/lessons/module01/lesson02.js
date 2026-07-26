const lesson02 = {
  id: "algebra-one-module-01-lesson-02",
  slug: "order-of-operations",
  courseId: "algebra-1",
  courseTitle: "Algebra I",
  moduleNumber: 1,
  moduleTitle: "Foundations of Algebra",
  lessonNumber: 2,

  title: "Order of Operations",
  subtitle: "Evaluate numerical and algebraic expressions accurately.",
  duration: "55–70 minutes",
  level: "Foundation",
  status: "Available",

  essentialQuestion: "Why must operations be completed in a consistent order?",
  bigIdea: "The order of operations ensures that everyone evaluates an expression in the same way.",

 learningObjectives: [
  "Explain why mathematicians use a standard order of operations and how it eliminates ambiguity in mathematical expressions.",
  "Evaluate numerical expressions involving grouping symbols, exponents, multiplication, division, addition, and subtraction using the correct order of operations.",
  "Apply the left-to-right rule when performing multiplication and division, and when performing addition and subtraction.",
  "Evaluate algebraic expressions by substituting given values for variables and simplifying accurately.",
  "Analyze and identify common errors in evaluating expressions, then explain how to correct them.",
  "Justify each step of a solution using precise mathematical vocabulary and logical reasoning.",
  "Create and evaluate original expressions that demonstrate a correct understanding of the order of operations.",
],

warmUp: {
  title: "Who Is Correct?",

  scenario:
    "Two students evaluate the same mathematical expression but arrive at different answers. Their disagreement raises an important question: Can one mathematical expression have two correct answers?",

  problem: "3 + 4 × 2",

  prompts: [
    "Student A says the answer is 14 because 3 + 4 = 7, then 7 × 2 = 14.",
    "Student B says the answer is 11 because 4 × 2 = 8, then 3 + 8 = 11.",
    "Work through each student's reasoning step by step.",
    "Which student followed a consistent mathematical procedure?",
    "Why can't the same expression have two accepted answers?",
    "What mathematical rule ensures everyone reaches the same result?"
  ],

  teacherGuidance: [
    "Allow students to defend both answers before introducing the order of operations.",
    "Encourage mathematical discussion rather than immediately revealing the correct answer.",
    "Guide students to recognize the need for a universal mathematical convention.",
    "Connect the discussion to the lesson's Big Idea."
  ],

  expectedOutcome:
    "Students recognize that mathematics requires a consistent order of operations so that every expression has one correct interpretation.",
},
vocabulary: [
  {
    term: "Order of Operations",
    definition:
      "A universal set of rules that determines the sequence in which mathematical operations are performed so that every expression has one correct value.",
    example: "3 + 4 × 2 = 11 because multiplication is performed before addition.",
    misconception:
      "The operations are performed strictly from left to right.",
  },

  {
    term: "Grouping Symbols",
    definition:
      "Symbols such as parentheses ( ), brackets [ ], and braces { } that tell us which operations must be completed first.",
    example: "(3 + 4) × 2 = 14",
    misconception:
      "Grouping symbols are optional and do not affect the answer.",
  },

  {
    term: "Exponent",
    definition:
      "A number that tells how many times a base is multiplied by itself.",
    example: "2³ = 2 × 2 × 2 = 8",
    misconception:
      "2³ means 2 × 3.",
  },

  {
    term: "Expression",
    definition:
      "A mathematical phrase made of numbers, variables, and operations without an equal sign.",
    example: "5x + 3",
    misconception:
      "Every mathematical expression is an equation.",
  },

  {
    term: "Equivalent Expressions",
    definition:
      "Expressions that have the same value even though they may look different.",
    example: "2(x + 3) and 2x + 6",
    misconception:
      "Equivalent expressions must always look the same.",
  },

  {
    term: "Justify",
    definition:
      "To explain why each mathematical step is correct using definitions, properties, or mathematical reasoning.",
    example:
      "Multiplication is completed before addition according to the order of operations.",
    misconception:
      "Giving only the final answer is enough.",
  },
],

 conceptExplanation: {
  title: "Order of Operations",

  summary:
    "The order of operations is a universal mathematical convention that ensures every expression has one correct interpretation. Without this agreement, the same expression could produce different answers, making mathematics unreliable for science, engineering, technology, and everyday problem solving.",

  bigIdea:
    "Mathematics is a language. Just as every language follows rules of grammar, mathematics follows an agreed order of operations so that everyone interprets an expression in the same way.",

  explanation: [
    "An expression is a sequence of numbers, variables, and operations that tells us what calculations to perform. The order of operations determines the sequence in which those calculations are completed.",
    "Without a standard order, the expression 3 + 4 × 2 could produce different answers depending on which operation a person chooses to perform first. A universal convention eliminates this ambiguity.",
    "The order of operations is: (1) Grouping Symbols, (2) Exponents, (3) Multiplication and Division from left to right, and (4) Addition and Subtraction from left to right.",
    "Multiplication and division have the same level of priority. Likewise, addition and subtraction share the same priority. When operations have equal priority, evaluate them from left to right.",
    "Grouping symbols change the meaning of an expression by indicating which operations must be completed first. They allow mathematicians to communicate ideas precisely."
  ],

  teachingNotes: [
    "Begin with the warm-up discussion before introducing the formal rule.",
    "Use color-coding or underlining to identify the next operation to perform.",
    "Model each step carefully and explain why it is performed.",
    "Require students to justify each step rather than simply giving an answer.",
    "Compare expressions with and without parentheses to demonstrate how grouping symbols change meaning."
  ],

  mathematicalConnections: [
    "Programming languages such as Python use the same order of operations.",
    "Scientific formulas depend on the correct order of calculations.",
    "Financial calculations, spreadsheets, and calculators follow these conventions to ensure accurate results."
  ],

  commonMisconceptions: [
    "Thinking multiplication always comes before division.",
    "Thinking addition always comes before subtraction.",
    "Ignoring grouping symbols.",
    "Working strictly from left to right regardless of operation priority."
  ],

  essentialTakeaway:
    "The purpose of the order of operations is not to make mathematics harder—it is to ensure that every mathematical expression has one clear and consistent meaning.",
},
workedExamples: [
  {
    title: "Example 1: Numerical Expression",

    thinkFirst:
      "Before solving, identify which operation should be completed first and explain why.",

    problem: "Evaluate 3 + 4 × 2.",

    solutionSteps: [
      "Identify the operations: addition and multiplication.",
      "Multiplication has higher priority than addition.",
      "Calculate 4 × 2 = 8.",
      "Add 3 + 8 = 11."
    ],

    answer: "11",

    mathematicalReasoning:
      "The order of operations ensures everyone evaluates the expression in the same way.",

    commonMistake:
      "Adding first to obtain (3 + 4) × 2 = 14.",

    reflection:
      "Why is multiplication completed before addition?"
  },

  {
    title: "Example 2: Grouping Symbols",

    thinkFirst:
      "How do parentheses change the meaning of an expression?",

    problem: "Evaluate (3 + 4) × 2.",

    solutionSteps: [
      "Evaluate the expression inside the parentheses: 3 + 4 = 7.",
      "Multiply 7 × 2 = 14."
    ],

    answer: "14",

    mathematicalReasoning:
      "Grouping symbols tell us which calculations must be completed first.",

    commonMistake:
      "Ignoring the parentheses and multiplying first.",

    reflection:
      "Compare this answer with Example 1. Why are they different?"
  },

  {
    title: "Example 3: Exponents",

    thinkFirst:
      "What does the exponent tell us to do?",

    problem: "Evaluate 2³ + 5.",

    solutionSteps: [
      "Evaluate the exponent: 2³ = 2 × 2 × 2 = 8.",
      "Add 8 + 5 = 13."
    ],

    answer: "13",

    mathematicalReasoning:
      "Exponents are evaluated before multiplication, division, addition, and subtraction.",

    commonMistake:
      "Thinking 2³ means 2 × 3.",

    reflection:
      "How is an exponent different from multiplication?"
  },

  {
    title: "Example 4: Algebraic Expression",

    thinkFirst:
      "What should you do before applying the order of operations when variables are involved?",

    problem: "Evaluate 2x² + 3 when x = 4.",

    solutionSteps: [
      "Substitute x = 4 into the expression.",
      "Evaluate the exponent: 4² = 16.",
      "Multiply: 2 × 16 = 32.",
      "Add: 32 + 3 = 35."
    ],

    answer: "35",

    mathematicalReasoning:
      "Always substitute the variable first, then follow the order of operations.",

    commonMistake:
      "Multiplying before evaluating the exponent.",

    reflection:
      "Why is substitution completed before simplifying the expression?"
  }
],
  guidedPractice: [
  {
    level: "Foundation",
    question: "Evaluate 18 ÷ 3 × 2 - 4.",
    hint:
      "Multiplication and division have equal priority, so work from left to right.",
    solutionSteps: [
      "Divide from left to right: 18 ÷ 3 = 6.",
      "Multiply: 6 × 2 = 12.",
      "Subtract: 12 - 4 = 8.",
    ],
    answer: "8",
  },

  {
    level: "Foundation",
    question: "Evaluate (7 - 2)² + 3 × 4.",
    hint:
      "Complete the grouping symbol first, followed by the exponent.",
    solutionSteps: [
      "Evaluate inside the parentheses: 7 - 2 = 5.",
      "Evaluate the exponent: 5² = 25.",
      "Multiply: 3 × 4 = 12.",
      "Add: 25 + 12 = 37.",
    ],
    answer: "37",
  },

  {
    level: "Developing",
    question:
      "A student evaluates 10 - 2 × 3 + 1 by subtracting 10 - 2 first. Identify the error and evaluate the expression correctly.",
    hint:
      "Multiplication must be completed before addition or subtraction.",
    solutionSteps: [
      "The student incorrectly performed subtraction before multiplication.",
      "Multiply first: 2 × 3 = 6.",
      "Rewrite the expression as 10 - 6 + 1.",
      "Work from left to right: 10 - 6 = 4.",
      "Then calculate 4 + 1 = 5.",
    ],
    answer:
      "5; the error was performing subtraction before multiplication.",
  },

  {
    level: "Developing",
    question:
      "Evaluate 16 ÷ 4 ÷ 2 and explain why the expression is not ambiguous.",
    hint:
      "Repeated operations of equal priority are performed from left to right.",
    solutionSteps: [
      "Begin with the leftmost division: 16 ÷ 4 = 4.",
      "Continue from left to right: 4 ÷ 2 = 2.",
      "The left-to-right convention gives the expression one accepted value.",
    ],
    answer: "2",
  },

  {
    level: "Proficient",
    question:
      "Insert grouping symbols into 4 + 6 × 2 - 1 so that the expression evaluates to 19.",
    hint:
      "Which addition must be completed before multiplication?",
    solutionSteps: [
      "Group the first addition: (4 + 6) × 2 - 1.",
      "Evaluate the parentheses: 4 + 6 = 10.",
      "Multiply: 10 × 2 = 20.",
      "Subtract: 20 - 1 = 19.",
    ],
    answer: "(4 + 6) × 2 - 1 = 19",
  },

  {
    level: "Proficient",
    question: "Evaluate 3² + 2 × (5 - 1)² ÷ 4.",
    hint:
      "Resolve both exponents before multiplication and division.",
    solutionSteps: [
      "Evaluate the grouping symbol: 5 - 1 = 4.",
      "Evaluate the exponents: 3² = 9 and 4² = 16.",
      "Rewrite the expression as 9 + 2 × 16 ÷ 4.",
      "Work from left to right: 2 × 16 = 32.",
      "Then calculate 32 ÷ 4 = 8.",
      "Add: 9 + 8 = 17.",
    ],
    answer: "17",
  },

  {
    level: "Application",
    question:
      "A cell-phone bill is modeled by B = 30 + 0.05(m - 500) for customers who use more than 500 minutes. Evaluate B when m = 620.",
    hint:
      "Substitute 620 for m before simplifying.",
    solutionSteps: [
      "Substitute m = 620: B = 30 + 0.05(620 - 500).",
      "Evaluate the grouping symbol: 620 - 500 = 120.",
      "Multiply: 0.05 × 120 = 6.",
      "Add the base charge: 30 + 6 = 36.",
    ],
    answer: "$36",
  },

  {
    level: "Reasoning",
    question:
      "Explain why 2 + 3 × 4 and (2 + 3) × 4 are not equivalent expressions.",
    hint:
      "Describe how the parentheses change which operation is completed first.",
    solutionSteps: [
      "In 2 + 3 × 4, multiplication occurs first, producing 2 + 12 = 14.",
      "In (2 + 3) × 4, the parentheses force addition first, producing 5 × 4 = 20.",
      "The expressions are not equivalent because their structures produce different values.",
    ],
    answer:
      "They are not equivalent because the parentheses change the priority of the operations; their values are 14 and 20.",
  },

  {
    level: "Advanced",
    question: "Evaluate (5 + 3²) ÷ (2 × 7 - 10).",
    hint:
      "Treat the numerator and denominator as separate grouped expressions.",
    solutionSteps: [
      "Evaluate the numerator: 5 + 3² = 5 + 9 = 14.",
      "Evaluate the denominator: 2 × 7 - 10 = 14 - 10 = 4.",
      "Divide: 14 ÷ 4 = 3.5.",
    ],
    answer: "3.5",
  },

  {
    level: "Honors",
    question:
      "A student claims that multiplication always happens before division. Write and evaluate a counterexample that disproves the claim.",
    hint:
      "Choose an expression in which division appears to the left of multiplication.",
    solutionSteps: [
      "Consider 12 ÷ 3 × 2.",
      "Multiplication and division share equal priority.",
      "Work from left to right: 12 ÷ 3 = 4.",
      "Then calculate 4 × 2 = 8.",
      "Doing multiplication first would incorrectly produce 2.",
    ],
    answer:
      "Example: 12 ÷ 3 × 2 = 8. Division occurs first because it appears first from left to right.",
  },
],

independentPractice: [
  {
    level: "Foundation",
    question: "Evaluate 9 + 6 ÷ 3 - 2.",
    answer: "9",
  },

  {
    level: "Foundation",
    question: "Evaluate 5 × 2³ - 4.",
    answer: "36",
  },

  {
    level: "Developing",
    question: "Evaluate 2 × [10 - (3 + 1)] ÷ 3.",
    answer: "4",
  },

  {
    level: "Developing",
    question: "Evaluate [(4 + 2) × 3 - 5]² ÷ 2.",
    answer: "84.5",
  },

  {
    level: "Error Analysis",
    question:
      "A student evaluates 20 - 4 × 2² by subtracting first and applying the exponent to the entire result. Identify every error and evaluate the original expression correctly.",
    answer:
      "4; evaluate 2² = 4 first, then 4 × 4 = 16, and finally 20 - 16 = 4.",
  },

  {
    level: "Error Analysis",
    question:
      "Evaluate 8 ÷ 2 × (2 + 2). Explain how explicit multiplication and the left-to-right rule remove ambiguity.",
    answer:
      "16; first evaluate (2 + 2) = 4, then calculate 8 ÷ 2 × 4 from left to right.",
  },

  {
    level: "Algebraic Substitution",
    question:
      "Evaluate 4x² - 3(x + 2) when x = -1. Predict the sign before calculating.",
    answer: "1",
  },

  {
    level: "Algebraic Substitution",
    question: "Evaluate (2a + b²) ÷ (a - 1) when a = 3 and b = 4.",
    answer: "11",
  },

  {
    level: "Writing Expressions",
    question:
      "Write an expression for: double the sum of a number and five, then subtract the square of three. Use n for the number.",
    answer: "2(n + 5) - 3²",
  },

  {
    level: "Writing Expressions",
    question:
      "Create an expression using at least three different numbers and one grouping symbol that evaluates to exactly 0.",
    sampleAnswer: "(8 + 4) - 12 = 0",
    answer: "Answers will vary.",
  },

  {
    level: "Modeling",
    question:
      "A shipping company uses C = 5 + 2(w - 10) for packages weighing more than 10 pounds. Evaluate C when w = 25 and explain what (w - 10) represents.",
    answer:
      "$35; the quantity (w - 10) represents the number of pounds above 10.",
  },

  {
    level: "Modeling",
    question:
      "Evaluate (78 + 85 + 91) ÷ 3. Explain why the grouping symbols are necessary when calculating the average.",
    answer:
      "84⅔, or approximately 84.67; the parentheses ensure the three scores are added before division.",
  },

  {
    level: "Open-Ended",
    question:
      "Create a real-world situation in which changing the order of two operations changes the practical result. Write both the correct expression and an incorrectly grouped version.",
    answer: "Answers will vary.",
  },

  {
    level: "Investigation",
    question:
      "Can incorrectly placed grouping symbols sometimes produce the same value as an expression without them? Provide an example and explain.",
    sampleAnswer:
      "Yes. For example, 2 + 3 - 3 = 2 and 2 + (3 - 3) = 2. The equal results occur by coincidence and do not mean grouping symbols never matter.",
    answer: "Answers will vary.",
  },

  {
    level: "Honors Challenge",
    question:
      "Design an expression containing at least four operations and two levels of nested grouping that evaluates to exactly 100. Show every step.",
    sampleAnswer:
      "5 × [24 - (6 ÷ 3) - 2] = 5 × [24 - 2 - 2] = 5 × 20 = 100",
    answer: "Answers will vary.",
  },
],

commonMistakes: [
  {
    mistake:
      "Performing addition or subtraction before multiplication or division.",
    correction:
      "Always complete multiplication and division before addition and subtraction unless grouping symbols change the order.",
    example: "3 + 4 × 2 = 11, not 14.",
  },

  {
    mistake:
      "Ignoring grouping symbols such as parentheses.",
    correction:
      "Expressions inside grouping symbols must always be evaluated before moving to the rest of the expression.",
    example: "(3 + 4) × 2 = 14, not 11.",
  },

  {
    mistake:
      "Thinking multiplication always comes before division.",
    correction:
      "Multiplication and division have equal priority. Evaluate them from left to right.",
    example: "12 ÷ 3 × 2 = 8, not 2.",
  },

  {
    mistake:
      "Thinking addition always comes before subtraction.",
    correction:
      "Addition and subtraction also have equal priority and are evaluated from left to right.",
    example: "10 - 6 + 2 = 6.",
  },

  {
    mistake:
      "Evaluating multiplication before exponents.",
    correction:
      "Exponents must always be evaluated before multiplication and division.",
    example: "2 × 3² = 2 × 9 = 18, not 36.",
  },

  {
    mistake:
      "Substituting a variable incorrectly or forgetting to substitute every occurrence.",
    correction:
      "Replace every occurrence of the variable before applying the order of operations.",
    example: "If x = 4, then 2x² + 3 = 2(4²) + 3 = 35.",
  },

  {
    mistake:
      "Skipping intermediate steps and making arithmetic errors.",
    correction:
      "Write each step clearly and simplify one operation at a time to reduce mistakes.",
    example: "Rewrite the expression after every completed operation.",
  },

  {
    mistake:
      "Giving only the final answer without explaining the reasoning.",
    correction:
      "Justify each step using mathematical vocabulary and the rules of the order of operations.",
    example: "State why an operation is performed before moving to the next step.",
  },
],

  technologyActivity: {
  title: "Digital Exploration: Discovering the Order of Operations",

  tool: "Desmos Scientific Calculator",

  objective:
    "Use a digital calculator to investigate how grouping symbols and the order of operations affect the value of mathematical expressions.",

  instructions: [
    "Open the Desmos Scientific Calculator.",
    "Enter the expression: 3 + 4 × 2 and record the result.",
    "Now enter: (3 + 4) × 2 and compare the two answers.",
    "Evaluate 2^3 + 5 and explain why the exponent is evaluated before addition.",
    "Substitute x = 4 into the expression 2x² + 3 and verify your answer using Desmos.",
    "Create your own expression that includes parentheses, an exponent, multiplication, and addition. Predict the answer before checking it with Desmos.",
    "Compare your prediction with the calculator's result and explain any differences."
  ],

  reflectionQuestions: [
    "Which operation had the greatest impact on the final answer?",
    "How did parentheses change the meaning of an expression?",
    "Did the calculator follow the same order of operations that you used by hand?",
    "Why is it important to understand the mathematics instead of relying only on technology?"
  ],

  extension:
    "Challenge a classmate by creating a new expression that evaluates to exactly 25. Exchange expressions and verify each other's solutions using Desmos.",

  teacherTip:
    "Encourage students to predict every answer before using the calculator. Technology should be used to verify mathematical reasoning, not replace it.",
},

  pythonLab: {
  title: "Python Lab: Does Code Follow the Same Mathematics?",

  objective:
    "Use Python to evaluate numerical and algebraic expressions and investigate how programming languages apply the order of operations.",

  code:
`# Order of Operations in Python

expression1 = 3 + 4 * 2
expression2 = (3 + 4) * 2

print("3 + 4 * 2 =", expression1)
print("(3 + 4) * 2 =", expression2)

# Evaluate an algebraic expression
x = 4
result = 2 * x**2 + 3

print("When x = 4, 2x^2 + 3 =", result)
`,

  expectedOutput:
`3 + 4 * 2 = 11
(3 + 4) * 2 = 14
When x = 4, 2x^2 + 3 = 35`,

  investigation: [
    "Predict each output before running the program.",
    "Run the code and compare Python's answers with your predictions.",
    "Change x from 4 to -3. Predict the new result before running the program.",
    "Change the location of the parentheses in one expression and observe what happens.",
    "Create an expression containing parentheses, an exponent, multiplication, division, addition, and subtraction.",
    "Evaluate your expression by hand before asking Python to verify it.",
  ],

  reflectionQuestions: [
    "What does * represent in Python?",
    "What does ** represent in Python?",
    "How do parentheses affect Python calculations?",
    "How does Python's evaluation of these expressions compare with the mathematical order of operations?",
    "Why should a programmer understand order of operations even when a computer performs the calculation?",
  ],

  challenge:
    "Write two Python expressions containing the same numbers and operations but different grouping symbols so that they produce different results. Explain mathematically why the outputs differ.",
},

realWorldConnection: {
  title: "Real-World Modeling: When Order Changes the Result",

  scenario:
    "A delivery company charges a $12 base fee plus $2.50 for each mile beyond the first 5 miles. A delivery travels 17 miles.",

  model: "C = 12 + 2.50(d - 5)",

  prompts: [
    "Identify the variable and explain what it represents.",
    "What does the quantity d - 5 represent?",
    "Substitute d = 17 into the model.",
    "Which calculation must be performed first? Explain why.",
    "Calculate the total delivery cost.",
    "A student calculates 12 + 2.50(17) - 5. What did the student misunderstand?",
    "Explain why the grouping symbols are part of the meaning of the model, not merely decoration.",
  ],

  solution: [
    "Substitute d = 17: C = 12 + 2.50(17 - 5).",
    "Evaluate the grouping symbol: 17 - 5 = 12.",
    "Multiply: 2.50 × 12 = 30.",
    "Add the base fee: 12 + 30 = 42.",
  ],

  answer: "$42",

  connection:
    "The same principle appears in spreadsheets, computer programs, scientific formulas, engineering calculations, financial models, and data analysis. Correct notation determines how a mathematical model is interpreted.",
},

formativeAssessment: {
  passingScore: 5,

  questions: [
    {
      type: "short-response",
      prompt: "Evaluate 18 - 3 × 4 + 2.",
      answer: "8",
    },

    {
      type: "short-response",
      prompt: "Evaluate (18 - 3) × 4 + 2.",
      answer: "62",
    },

    {
      type: "short-response",
      prompt: "Evaluate 2³ + 24 ÷ 6 × 3.",
      answer: "20",
    },

    {
      type: "algebraic-substitution",
      prompt: "Evaluate 3x² - 2(x + 1) when x = -2.",
      answer: "14",
    },

    {
      type: "error-analysis",
      prompt:
        "A student claims 24 ÷ 6 × 2 = 2 because multiplication should always be completed before division. Explain the error and give the correct value.",
      answer:
        "8. Multiplication and division have equal priority, so they are evaluated from left to right: 24 ÷ 6 = 4, then 4 × 2 = 8.",
    },

    {
      type: "explanation",
      prompt:
        "Why is the order of operations a mathematical convention rather than simply a memorization rule?",
      sampleAnswer:
        "It gives mathematical expressions a consistent interpretation. Without an agreed convention, the same notation could be evaluated differently by different people.",
    },

    {
      type: "creation",
      prompt:
        "Write an expression containing parentheses, an exponent, multiplication, and addition that evaluates to 50. Show enough work to justify your answer.",
      sampleAnswer:
        "2(3 + 2)² = 2(5²) = 2(25) = 50.",
      answer: "Answers will vary.",
    },
  ],
},

creatorChallenge: {
  title: "Build Challenge: The Expression Architect",

  description:
    "Design an original order-of-operations challenge that would make another Algebra I student stop, reason, and justify every step.",

  requirements: [
    "Create an original expression containing at least five operations.",
    "Include at least one exponent.",
    "Include at least two levels of grouping symbols.",
    "Include operations of equal priority that require left-to-right reasoning.",
    "Predict the final value before using technology.",
    "Show a complete step-by-step solution.",
    "Explain why each operation is performed when it is.",
    "Create one believable incorrect solution and identify the exact misconception.",
    "Verify the correct solution using Desmos, Python, or another approved tool.",
    "Include a visual, expression tree, flowchart, table, or code output showing the structure of the expression.",
    "Write a short reflection explaining what your challenge teaches about mathematical communication.",
  ],

  honorsExtension:
    "Create two expressions using the same numbers and operations but different grouping structures. Make the expressions produce different values, then explain precisely how the structure changes the meaning.",

  portfolioEvidence:
    "Submit the challenge, complete solution, error analysis, verification evidence, and reflection as a portfolio artifact.",
},

lumineryGuidance: {
  message:
    "Do not begin by asking, 'What do I calculate?' Begin by asking, 'What is the structure of this expression?'",

  prompt:
    "Identify the grouping symbols, exponents, equal-priority operations, and final operation. Then explain the order you would use before performing any arithmetic.",

  recommendation:
    "If you make an error, locate the first step where your work differs from the expression's structure. Correct that step instead of restarting without understanding the mistake.",

  confidence: 85,
},

summary: [
  "The order of operations is a shared mathematical convention that gives expressions a consistent meaning.",
  "Evaluate grouping symbols first, beginning with the innermost grouping when expressions are nested.",
  "Evaluate exponents before multiplication, division, addition, and subtraction.",
  "Multiplication and division have equal priority and are evaluated from left to right.",
  "Addition and subtraction have equal priority and are evaluated from left to right.",
  "Grouping symbols can change the structure, meaning, and value of an expression.",
  "When variables are given values, substitute carefully and then evaluate using the same order of operations.",
  "Strong mathematical work includes reasoning and justification, not only a final answer.",
  "Calculators, Desmos, Python, and spreadsheets follow defined evaluation rules, but technology should verify reasoning rather than replace it.",
],

reflection: [
  "Why does mathematics need a standard order of operations?",
  "What is the difference between saying 'multiplication comes before division' and saying 'multiplication and division have equal priority and are evaluated from left to right'?",
  "How can grouping symbols change the meaning of an expression?",
  "Which type of order-of-operations problem is most likely to cause you an error, and why?",
  "Describe one mistake you made or could have made during this lesson and explain how you would detect it.",
  "How does evaluating an algebraic expression differ from evaluating a purely numerical expression?",
  "Where might an incorrect order of operations create a serious problem outside mathematics class?",
  "Create one question about order of operations that you could use to test whether another student truly understands the concept.",
],

previousLesson: {
  moduleNumber: 1,
  lessonNumber: 1,
  slug: "variables-and-expressions",
  title: "Variables and Expressions",
},

nextLesson: {
  moduleNumber: 1,
  lessonNumber: 3,
  slug: "properties-of-real-numbers",
  title: "Properties of Real Numbers",
},
};

export default lesson02;