const lesson06 = {
  id: "python-module-01-lesson-06",

  slug: "data-types",

  courseId: "python-foundations",
  courseTitle: "Python Foundations",

  moduleNumber: 1,
  moduleTitle: "Python Basics and Programming Foundations",

  lessonNumber: 6,

  title: "Python Data Types",

  subtitle:
    "Understand the different kinds of information Python can store and process.",

  duration: "55–70 minutes",

  level: "Beginner",

  status: "Available",

  essentialQuestion:
    "Why must Python know what type of data it is working with?",

  bigIdea:
    "Every value in Python has a data type. Data types determine how information is stored and what operations can be performed on it.",

  learningObjectives: [
    "Identify common Python data types.",
    "Differentiate integers, floats, strings, and booleans.",
    "Use the type() function.",
    "Choose the correct data type for different situations.",
    "Explain why data types are important."
  ],

  warmUp: {
    title: "Different Kinds of Information",

    prompts: [
      "Is your age the same type of information as your name?",
      "Is '25' the same as 25?",
      "Can Yes/No answers be represented by numbers?",
      "Why should computers distinguish between different kinds of data?"
    ]
  },

  conceptExplanation: {
    title: "Understanding Data Types",

    summary:
      "Python stores different kinds of information using different data types such as integers, floating-point numbers, strings, and Boolean values.",

    teachingNotes: [
      "Integers represent whole numbers.",
      "Floats represent decimal numbers.",
      "Strings represent text.",
      "Booleans represent True or False.",
      "Use type() to inspect a value."
    ]
  },

  examples: [
    {
      title: "Integer",

      code: `age = 15
print(type(age))`,

      explanation:
        "age is an integer."
    },

    {
      title: "Float",

      code: `height = 5.8
print(type(height))`,

      explanation:
        "height is a floating-point number."
    },

    {
      title: "String",

      code: `name = "Joseph"
print(type(name))`,

      explanation:
        "Text is stored as a string."
    },

    {
      title: "Boolean",

      code: `passed = True
print(type(passed))`,

      explanation:
        "Boolean values are either True or False."
    }
  ],

  practice: [
    {
      prompt:
        "Create one variable for each major Python data type."
    },

    {
      prompt:
        "Explain the difference between 25 and '25'."
    },

    {
      prompt:
        "Use type() to inspect three variables."
    },

    {
      prompt:
        "When would you use a Boolean variable?"
    }
  ],

  reflection:
    "Why do programmers need to understand data types before writing larger programs?",

  nextLesson: {
    title: "Expressions and Operators",

    slug: "expressions-and-operators"
  }
};

export default lesson06;