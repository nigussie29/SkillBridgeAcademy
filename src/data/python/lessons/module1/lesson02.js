const lesson02 = {
  id: "python-module-01-lesson-02",

  slug: "setting-up-python",

  courseId: "python-foundations",

  courseTitle: "Python Foundations",

  moduleNumber: 1,

  moduleTitle: "Python Basics and Programming Foundations",

  lessonNumber: 2,

  title: "Setting Up Python",

  subtitle:
    "Prepare your computer for programming by installing Python and choosing an editor.",

  duration: "45–60 minutes",

  level: "Beginner",

  status: "Available",

  essentialQuestion:
    "Why do programmers need both Python and a code editor?",

  bigIdea:
    "Programming begins with a working development environment where Python can execute code and an editor can help you write it.",

  learningObjectives: [
    "Explain the purpose of the Python interpreter.",
    "Identify different code editors.",
    "Install Python successfully.",
    "Verify that Python is working.",
  ],

  warmUp: {
    title: "Preparing Your Workspace",

    prompts: [
      "Can you drive a car without having a car?",
      "Can you build a house without tools?",
      "What tools do programmers need before writing code?",
      "Why is preparation important before learning?",
    ],
  },

  conceptExplanation: {
    title: "Installing Python",

    summary:
      "Before writing programs, your computer must have Python installed. A code editor helps you write, organize, and run your programs.",

    teachingNotes: [
      "Python Interpreter executes Python code.",
      "VS Code is one of the most popular editors.",
      "Python can also be used in Jupyter Notebook.",
      "Always verify the installation before programming.",
    ],
  },

  examples: [
    {
      title: "Check Python Version",

      code: `python --version`,

      explanation:
        "This command checks whether Python is installed correctly.",
    },

    {
      title: "Open Python",

      code: `python`,

      explanation:
        "This starts the interactive Python interpreter.",
    },
  ],

  practice: [
    {
      prompt:
        "Explain the difference between Python and VS Code.",
    },

    {
      prompt:
        "How can you verify that Python is installed correctly?",
    },

    {
      prompt:
        "List two editors that can be used with Python.",
    },
  ],

  reflection:
    "Why is having the correct programming environment important before solving problems?",

  nextLesson: {
    title: "Writing Your First Python Program",

    slug: "writing-your-first-program",
  },
};

export default lesson02;