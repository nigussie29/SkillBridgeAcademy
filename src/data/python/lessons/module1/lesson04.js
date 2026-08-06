const lesson04 = {
  id: "python-module-01-lesson-04",
  slug: "variables",

  courseId: "python-foundations",
  courseTitle: "Python Foundations",

  moduleNumber: 1,
  moduleTitle: "Python Basics and Programming Foundations",
  lessonNumber: 4,

  title: "Variables",
  subtitle:
    "Learn how Python stores and uses information with variables.",

  duration: "50–65 minutes",
  level: "Beginner",
  status: "Available",

  essentialQuestion:
    "How can a program remember information and use it later?",

  bigIdea:
    "A variable gives a name to a value so a program can store, reuse, and update information.",

  learningObjectives: [
    "Explain what a variable is.",
    "Create variables using assignment statements.",
    "Follow Python variable naming rules.",
    "Use variables inside print statements.",
    "Update the value stored in a variable.",
  ],

  warmUp: {
    title: "Labeling Information",
    prompts: [
      "Imagine placing different objects into labeled boxes.",
      "How does a label help you remember what is inside each box?",
      "What information might a computer need to remember?",
      "How could a meaningful name help a programmer understand stored information?",
    ],
  },

  conceptExplanation: {
    title: "Understanding Variables",
    summary:
      "A Python variable is a name that refers to a value. The assignment operator places a value into a variable so the program can use it later.",
    teachingNotes: [
      "Use the assignment operator = to store a value.",
      "The variable name appears on the left side of the assignment operator.",
      "The value appears on the right side.",
      "Variable names should clearly describe the information they store.",
      "Python variable names are case-sensitive.",
      "A variable can be assigned a new value later in the program.",
    ],
  },

  examples: [
    {
      title: "Store a Name",
      code: `student_name = "Abigail"

print(student_name)`,
      explanation:
        "The variable student_name stores text. The print function displays the value stored in the variable.",
    },

    {
      title: "Store a Number",
      code: `age = 14

print(age)`,
      explanation:
        "The variable age stores the whole number 14.",
    },

    {
      title: "Use Multiple Variables",
      code: `name = "Joseph"
course = "Python Foundations"

print(name)
print(course)`,
      explanation:
        "Each variable stores a different piece of information.",
    },

    {
      title: "Update a Variable",
      code: `score = 5
print(score)

score = 10
print(score)`,
      explanation:
        "The variable score first stores 5 and is then updated to store 10.",
    },

    {
      title: "Combine Text and Variables",
      code: `name = "Joseph"

print("Welcome,", name)`,
      explanation:
        "Python can display text and the value of a variable in the same print statement.",
    },
  ],

  practice: [
    {
      prompt:
        "Create a variable called first_name and store your first name in it.",
    },
    {
      prompt:
        "Create a variable called favorite_number and store your favorite number.",
    },
    {
      prompt:
        "Write a print statement that displays both text and the value of a variable.",
    },
    {
      prompt:
        "Create a variable called points, assign it 10, then update it to 20.",
    },
    {
      prompt:
        "Explain why meaningful variable names are better than names such as x1 or abc.",
    },
  ],

  reflection:
    "How do variables help a program remember and organize information?",

  nextLesson: {
    title: "Input and Output",
    slug: "input-and-output",
  },
};

export default lesson04;