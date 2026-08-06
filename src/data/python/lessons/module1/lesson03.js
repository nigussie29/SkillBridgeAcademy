const lesson03 = {
  id: "python-module-01-lesson-03",

  slug: "writing-your-first-python-program",

  courseId: "python-foundations",
  courseTitle: "Python Foundations",

  moduleNumber: 1,
  moduleTitle: "Python Basics and Programming Foundations",

  lessonNumber: 3,

  title: "Writing Your First Python Program",

  subtitle:
    "Learn how to write, save, and run your first Python program.",

  duration: "45–60 minutes",

  level: "Beginner",

  status: "Available",

  essentialQuestion:
    "How does Python execute the instructions that we write?",

  bigIdea:
    "Programs are simply step-by-step instructions written in Python syntax.",

  learningObjectives: [
    "Write your first Python program.",
    "Use the print() function.",
    "Save a Python file.",
    "Run a Python program.",
  ],

  warmUp: {
    title: "Giving Instructions",

    prompts: [
      "What happens when you follow a recipe?",
      "Why must every step be in order?",
      "How is programming similar to following directions?",
      "What happens if one step is missing?"
    ]
  },

  conceptExplanation: {
    title: "Your First Program",

    summary:
      "The print() function tells Python to display information on the screen.",

    teachingNotes: [
      "Programs execute from top to bottom.",
      "Every character matters.",
      "Python is case-sensitive.",
      "Errors help programmers improve."
    ]
  },

  examples: [
    {
      title: "Hello World",

      code: `print("Hello, World!")`,

      explanation:
        "This displays text on the screen."
    },

    {
      title: "Print Your Name",

      code: `print("My name is John")`,

      explanation:
        "Strings are written inside quotation marks."
    }
  ],

  practice: [
    {
      prompt:
        "Write a program that prints your name."
    },

    {
      prompt:
        "Write a program that prints your favorite food."
    },

    {
      prompt:
        "Explain what the print() function does."
    }
  ],

  reflection:
    "How did writing your first program make you feel?",

  nextLesson: {
    title: "Variables",

    slug: "variables",
  },
};

export default lesson03;