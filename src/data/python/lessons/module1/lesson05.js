const lesson05 = {
  id: "python-module-01-lesson-05",

  slug: "input-and-output",

  courseId: "python-foundations",
  courseTitle: "Python Foundations",

  moduleNumber: 1,
  moduleTitle: "Python Basics and Programming Foundations",

  lessonNumber: 5,

  title: "Input and Output",

  subtitle:
    "Learn how Python communicates with users by receiving input and displaying output.",

  duration: "50–65 minutes",

  level: "Beginner",

  status: "Available",

  essentialQuestion:
    "How can a computer receive information from a user and respond with useful output?",

  bigIdea:
    "Programs become interactive when they accept input, process it, and produce meaningful output.",

  learningObjectives: [
    "Explain the difference between input and output.",
    "Use the input() function.",
    "Use the print() function to display results.",
    "Store user input inside variables.",
    "Create a simple interactive Python program."
  ],

  warmUp: {
    title: "Talking With Computers",

    prompts: [
      "How do you communicate with another person?",
      "How do you give information to a computer?",
      "What kinds of information do computers ask users for?",
      "What should happen after a computer receives your answer?"
    ]
  },

  conceptExplanation: {
    title: "Input and Output",

    summary:
      "Python programs become interactive by asking the user for information with input() and displaying results with print().",

    teachingNotes: [
      "Input means receiving information.",
      "Output means displaying information.",
      "The input() function always returns text.",
      "Store user input inside variables.",
      "Combine input with print() to build interactive programs."
    ]
  },

  examples: [
    {
      title: "Display Output",

      code: `print("Welcome to SkillBridge Academy!")`,

      explanation:
        "The print() function displays information on the screen."
    },

    {
      title: "Ask for a Name",

      code: `name = input("What is your name? ")

print(name)`,

      explanation:
        "The user's response is stored inside the variable name."
    },

    {
      title: "Greeting Program",

      code: `name = input("Enter your name: ")

print("Hello,", name)`,

      explanation:
        "Python combines text with the user's input."
    },

    {
      title: "Favorite Color",

      code: `color = input("What is your favorite color? ")

print("Your favorite color is", color)`,

      explanation:
        "Programs can remember information entered by the user."
    }
  ],

  practice: [
    {
      prompt:
        "Write a program that asks for your first name and prints a greeting."
    },

    {
      prompt:
        "Write a program that asks for your favorite subject."
    },

    {
      prompt:
        "Explain the difference between input() and print()."
    },

    {
      prompt:
        "Why do we store user input inside variables?"
    },

    {
      prompt:
        "Design a short conversation between a user and a Python program."
    }
  ],

  reflection:
    "How does input and output make a computer program more useful?",

  nextLesson: {
    title: "Data Types",

    slug: "data-types"
  }
};

export default lesson05;