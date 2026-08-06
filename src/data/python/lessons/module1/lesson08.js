const lesson08 = {
  id: "python-module-01-lesson-08",
  slug: "personal-introduction-project",

  courseId: "python-foundations",
  courseTitle: "Python Foundations",

  moduleNumber: 1,
  moduleTitle: "Python Basics and Programming Foundations",
  lessonNumber: 8,

  title: "Mini Project: Personal Introduction Program",

  subtitle:
    "Combine variables, input, output, data types, and expressions to build your first complete Python program.",

  duration: "60–90 minutes",
  level: "Beginner",
  status: "Available",

  essentialQuestion:
    "How can several basic Python skills work together to create a useful interactive program?",

  bigIdea:
    "A complete program combines input, variables, expressions, and output to solve a clear problem for a user.",

  learningObjectives: [
    "Plan a small Python program before writing code.",
    "Use input() to collect user information.",
    "Store information in meaningful variables.",
    "Use print() to display personalized output.",
    "Use a simple expression to calculate a result.",
    "Test and improve a complete beginner program.",
  ],

  warmUp: {
    title: "Plan Before You Code",

    prompts: [
      "What information should a personal introduction program ask the user for?",
      "Which answers should be stored as text?",
      "Which answers might need to be converted into numbers?",
      "What should the final output look like?",
      "Why is planning helpful before writing code?",
    ],
  },

  conceptExplanation: {
    title: "Building a Complete Beginner Program",

    summary:
      "This project combines the main ideas from Module 1. You will ask the user questions, store the answers in variables, perform a simple calculation, and display a personalized introduction.",

    teachingNotes: [
      "Begin by listing the inputs the program needs.",
      "Use meaningful variable names.",
      "Convert numeric input before performing calculations.",
      "Build and test the program one small section at a time.",
      "Read error messages carefully.",
      "Improve the output so it is clear and friendly.",
    ],
  },

  examples: [
    {
      title: "Project Starter",

      code: `name = input("What is your name? ")
age = int(input("How old are you? "))
favorite_subject = input("What is your favorite subject? ")

next_year_age = age + 1

print()
print("Hello,", name)
print("Your favorite subject is", favorite_subject)
print("Next year, you will be", next_year_age, "years old.")`,

      explanation:
        "This program collects text and number input, stores values in variables, performs a calculation, and displays personalized output.",
    },

    {
      title: "Add More Information",

      code: `city = input("What city do you live in? ")
career_goal = input("What career interests you? ")

print(name, "lives in", city)
print(name, "is interested in becoming a", career_goal)`,

      explanation:
        "You can extend the program by collecting and displaying additional information.",
    },
  ],

  practice: [
    {
      prompt:
        "Write a plan listing the inputs, variables, calculation, and outputs for your program.",
    },

    {
      prompt:
        "Create a program that asks for the user's name, age, city, favorite subject, and career goal.",
    },

    {
      prompt:
        "Calculate and display how old the user will be next year.",
    },

    {
      prompt:
        "Add at least one original question to make the program your own.",
    },

    {
      prompt:
        "Test the program with at least three different sets of input and correct any errors.",
    },
  ],

  reflection:
    "Which part of this project was easiest, which part was most challenging, and what would you improve next?",

  project: {
    title: "Personal Introduction Program",

    requirements: [
      "Ask the user at least five questions.",
      "Store each response in a meaningful variable.",
      "Use at least one integer value.",
      "Perform at least one calculation.",
      "Display a clear personalized introduction.",
      "Use readable formatting and meaningful variable names.",
      "Test the program with multiple users.",
    ],

    extensionIdeas: [
      "Calculate the user's age five years from now.",
      "Ask for two favorite subjects.",
      "Create a short career-goal summary.",
      "Use formatted strings to improve the output.",
      "Add comments explaining each section of the program.",
    ],
  },

  moduleComplete: true,

  nextLesson: null,
};

export default lesson08;