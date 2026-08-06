const lesson01 = {
  id: "python-module-01-lesson-01",
  slug: "what-is-python",
  courseId: "python-foundations",
  courseTitle: "Python Foundations",
  moduleNumber: 1,
  moduleTitle: "Python Basics and Programming Foundations",
  lessonNumber: 1,

  title: "What Is Python?",
  subtitle:
    "Discover what Python is, why it is popular, and how programmers use it.",
  duration: "45–60 minutes",
  level: "Beginner",
  status: "Available",

  essentialQuestion:
    "How can a programming language help us communicate instructions to a computer?",

  bigIdea:
    "Python is a programming language that allows people to write clear instructions that computers can execute.",

  learningObjectives: [
    "Explain what a programming language is.",
    "Describe what Python is used for.",
    "Identify several real-world applications of Python.",
    "Explain why Python is a good language for beginners.",
  ],

  warmUp: {
    title: "Giving Clear Instructions",
    prompts: [
      "Imagine explaining to someone how to make a sandwich.",
      "What could go wrong if your instructions are unclear?",
      "Why must computer instructions be precise?",
      "How is a programming language similar to giving step-by-step directions?",
    ],
  },

  conceptExplanation: {
    title: "Understanding Python",
    summary:
      "Python is a high-level programming language designed to be readable, flexible, and useful in many fields.",
    teachingNotes: [
      "Introduce programming as communication between humans and computers.",
      "Explain that Python code is written using rules called syntax.",
      "Connect Python to websites, automation, data analysis, artificial intelligence, and robotics.",
      "Emphasize that beginners can read Python more easily than many other programming languages.",
    ],
  },

  examples: [
    {
      title: "A Simple Python Instruction",
      code: `print("Hello, SkillBridge!")`,
      explanation:
        "The print function tells Python to display a message on the screen.",
    },
  ],

  practice: [
    {
      prompt:
        "Explain Python in your own words.",
    },
    {
      prompt:
        "List three things people can build or do with Python.",
    },
    {
      prompt:
        "Why is clear syntax important in programming?",
    },
  ],

  reflection:
    "Which Python application interests you most, and why?",

  nextLesson: {
    title: "Setting Up Python",
    slug: "setting-up-python",
  },
};

export default lesson01;