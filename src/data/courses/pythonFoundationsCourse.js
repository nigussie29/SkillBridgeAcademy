export const pythonFoundationsCourse = {
  id: "python-foundations",

  title: "Python Foundations",
   backPath: "/library/computer-science",
  backLabel: "Back to School of Computer Science",

  category: "School of Python and Software Development",

  description:
    "Learn Python from the ground up by building real applications. Master variables, functions, loops, data structures, and problem solving while preparing for AI, data science, automation, and software engineering.",

  level: "Beginner",

  duration: "8 weeks",

  progress: 0,
  startPath: "/library/python/python-foundations/module/1",
  modules: [
  {
    id: 1,
    title: "Python Basics and Programming Foundations",
    description:
      "Learn how Python works, write your first programs, and develop confident programming habits.",
    level: "Beginner",
    duration: "8–10 hours",
    lessonCount: 8,
    status: "available",
    path: "/library/python/python-foundations/module/1",
  },
  {
    id: 2,
    title: "Decisions and Program Logic",
    description:
      "Use conditions, comparisons, Boolean logic, and input validation to build intelligent programs.",
    level: "Beginner",
    duration: "8–10 hours",
    lessonCount: 8,
    status: "available",
    path: "/library/python/python-foundations/module/2",
  },
  {
    id: 3,
    title: "Loops and Repetition",
    description:
      "Automate repeated tasks using for loops, while loops, counters, accumulators, and nested loops.",
    level: "Beginner",
    duration: "10–12 hours",
    lessonCount: 8,
    status: "available",
    path: "/library/python/python-foundations/module/3",
  },
  {
    id: 4,
    title: "Functions and Reusable Code",
    description:
      "Organize programs using functions, parameters, return values, and scope.",
    level: "Beginner",
    duration: "10–12 hours",
    lessonCount: 8,
    status: "planned",
    path: null,
  },
  {
    id: 5,
    title: "Lists, Tuples, Dictionaries, and Sets",
    description:
      "Store, organize, search, and process collections of information.",
    level: "Beginner",
    duration: "12–14 hours",
    lessonCount: 8,
    status: "planned",
    path: null,
  },
  {
    id: 6,
    title: "Strings and Data Processing",
    description:
      "Work with text, formatting, validation, searching, splitting, and structured data.",
    level: "Beginner",
    duration: "8–10 hours",
    lessonCount: 8,
    status: "planned",
    path: null,
  },
  {
    id: 7,
    title: "Files, Errors, and Program Reliability",
    description:
      "Read and write files, handle exceptions, debug problems, and build dependable applications.",
    level: "Beginner",
    duration: "10–12 hours",
    lessonCount: 8,
    status: "planned",
    path: null,
  },
  {
    id: 8,
    title: "Python Foundations Capstone",
    description:
      "Combine the complete course into a Student Information Management System.",
    level: "Beginner",
    duration: "12–16 hours",
    lessonCount: 8,
    status: "planned",
    path: null,
  },
],

  outcomes: [
    "Write clean and readable Python programs",
    "Use variables and data types correctly",
    "Build reusable functions",
    "Solve problems using loops and conditionals",
    "Work with lists, dictionaries, and files",
    "Prepare for AI and Data Science with Python",
  ],

  lessons: [
    {
      id: "welcome-python",
      title: "Welcome to Python",
      description:
        "Discover why Python is one of the world's most popular programming languages and how programmers think.",

      status: "current",

      path: "/lesson-engine",
    },

    {
      id: "variables-data-types",

      title: "Variables and Data Types",

      description:
        "Learn how Python stores information using variables, numbers, strings, and Boolean values.",

      status: "locked",

      path: "/lesson-engine",
    },

    {
      id: "input-output",

      title: "Input and Output",

      description:
        "Build interactive programs using print(), input(), and formatted output.",

      status: "locked",

      path: "/lesson-engine",
    },

    {
      id: "conditionals",

      title: "Conditional Statements",

      description:
        "Teach Python to make decisions using if, elif, and else.",

      status: "locked",

      path: "/lesson-engine",
    },

    {
      id: "loops",

      title: "Loops",

      description:
        "Automate repetitive work using for and while loops.",

      status: "locked",

      path: "/lesson-engine",
    },

    {
      id: "functions",

      title: "Functions",

      description:
        "Organize code into reusable building blocks.",

      status: "locked",

      path: "/lesson-engine",
    },

    {
      id: "lists-dictionaries",

      title: "Lists and Dictionaries",

      description:
        "Manage collections of information efficiently.",

      status: "locked",

      path: "/lesson-engine",
    },

    {
      id: "foundation-project",

      title: "Python Foundations Project",

      description:
        "Combine everything you've learned into your first complete Python application.",

      status: "locked",

      path: "/lesson-engine",
    },
  ],

  finalProject: {
    title: "Student Information Management System",

    description:
      "Build a complete Python application that stores, updates, searches, and manages student records while demonstrating the core concepts learned throughout the course.",

    path: "/projects",
  },

  certificateRequirement:
    "Complete every lesson, pass the mastery assessment, and successfully finish the final project.",
};