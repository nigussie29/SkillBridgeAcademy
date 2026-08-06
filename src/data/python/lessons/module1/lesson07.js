const lesson07 = {
  id: "python-module-01-lesson-07",

  slug: "expressions-and-operators",

  courseId: "python-foundations",
  courseTitle: "Python Foundations",

  moduleNumber: 1,
  moduleTitle: "Python Basics and Programming Foundations",

  lessonNumber: 7,

  title: "Expressions and Operators",

  subtitle:
    "Learn how Python combines values and operators to perform calculations and make comparisons.",

  duration: "55–70 minutes",

  level: "Beginner",

  status: "Available",

  essentialQuestion:
    "How does Python use operators to calculate, compare, and transform information?",

  bigIdea:
    "An expression combines values, variables, and operators to produce a new value.",

  learningObjectives: [
    "Explain what a Python expression is.",
    "Use arithmetic operators.",
    "Use comparison operators.",
    "Use variables inside expressions.",
    "Predict the result of simple expressions.",
    "Apply the correct order of operations.",
  ],

  warmUp: {
    title: "Turning Information Into Results",

    prompts: [
      "What operations can you perform with two numbers?",
      "How can you compare two values?",
      "What does a calculator do when you enter an expression?",
      "Why must operations follow a consistent order?",
    ],
  },

  conceptExplanation: {
    title: "Understanding Expressions and Operators",

    summary:
      "Python expressions combine values, variables, and operators. Python evaluates the expression and produces a result.",

    teachingNotes: [
      "Arithmetic operators perform calculations.",
      "Comparison operators compare values and return True or False.",
      "Variables can be used inside expressions.",
      "Python follows the standard order of operations.",
      "Parentheses can change the order in which operations are evaluated.",
    ],
  },

  examples: [
    {
      title: "Addition and Subtraction",

      code: `a = 10
b = 4

print(a + b)
print(a - b)`,

      explanation:
        "The + operator adds values, while the - operator subtracts them.",
    },

    {
      title: "Multiplication and Division",

      code: `a = 12
b = 3

print(a * b)
print(a / b)`,

      explanation:
        "The * operator multiplies values, while the / operator divides them.",
    },

    {
      title: "Exponent and Remainder",

      code: `print(2 ** 3)
print(10 % 3)`,

      explanation:
        "The ** operator raises a value to a power. The % operator returns the remainder.",
    },

    {
      title: "Comparison Operators",

      code: `age = 16

print(age > 12)
print(age == 16)
print(age != 18)`,

      explanation:
        "Comparison operators produce Boolean values: True or False.",
    },

    {
      title: "Order of Operations",

      code: `result = 3 + 4 * 2
print(result)

result_with_parentheses = (3 + 4) * 2
print(result_with_parentheses)`,

      explanation:
        "Multiplication is evaluated before addition unless parentheses change the order.",
    },

    {
      title: "Expression With User Input",

      code: `first_number = int(input("Enter a number: "))
second_number = int(input("Enter another number: "))

total = first_number + second_number

print("The total is", total)`,

      explanation:
        "The int() function converts text input into whole numbers before addition.",
    },
  ],

  practice: [
    {
      prompt:
        "Create two number variables and display their sum, difference, product, and quotient.",
    },

    {
      prompt:
        "Write three comparison expressions that return True or False.",
    },

    {
      prompt:
        "Predict the result of 5 + 3 * 2, then test it in Python.",
    },

    {
      prompt:
        "Use parentheses to change the result of an arithmetic expression.",
    },

    {
      prompt:
        "Write a program that asks for two numbers and displays their total.",
    },
  ],

  reflection:
    "How do expressions help a program transform input into useful results?",

  nextLesson: {
    title: "Mini Project: Personal Introduction Program",
    slug: "personal-introduction-project",
  },
};

export default lesson07;