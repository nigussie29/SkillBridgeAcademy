const lesson01 = {
  id: "algebra-one-module-04-lesson-01",
  slug: "relations-connecting-inputs-and-outputs",

  courseId: "algebra-1",
  courseTitle: "Algebra I",

  moduleNumber: 4,
  moduleTitle: "Functions and Relations",
  lessonNumber: 1,

  title:
    "Relations: Connecting Inputs and Outputs",

  subtitle:
    "Explore how quantities are connected, identify inputs and outputs, represent relationships in multiple ways, and begin thinking like a function modeler.",

  duration: "70–85 minutes",
  level: "Foundation",
  status: "Available",

  essentialQuestion:
    "How can mathematics describe the relationship between one changing quantity and another?",

  bigIdea:
    "A relation connects inputs to outputs. Before students can understand functions, they must first learn to recognize quantities, determine how those quantities are related, and represent the relationship using words, ordered pairs, tables, diagrams, graphs, equations, and code.",

  whyThisLessonExists: {
    title:
      "Functions Begin with Relationships",

    introduction:
      "Students often meet functions as formulas such as f(x) = 2x + 3. But functions begin much earlier—with relationships between quantities. The number of hours worked affects earnings. The number of items purchased affects total cost. Time affects distance traveled. Temperature changes throughout a day.",

    centralProblem:
      "How can we identify two related quantities and describe what happens to one quantity when the other changes?",

    purpose:
      "This lesson establishes the conceptual foundation for Module 4. Students learn to identify inputs and outputs, organize paired values, describe relationships, move among representations, and explain what a relation means in a real situation.",
  },

  problemFirst: {
    title:
      "The Community Coding Workshop",

    scenario:
      "A community center offers a coding workshop. Each student pays a $15 registration fee. The organizer records the number of students who register and the total registration money collected. The workshop begins at 9:00 a.m., students receive blue folders, and four volunteers help during the event.",

    questions: [
      "Which quantities are mathematically related?",
      "Which details are irrelevant to the relationship?",
      "What quantity can we choose as the input?",
      "What quantity depends on that input?",
      "If 1 student registers, how much money is collected?",
      "If 2 students register, how much is collected?",
      "If 5 students register, how much is collected?",
      "How could we organize the input-output pairs?",
      "Can the relationship be represented using ordered pairs?",
      "Can the relationship be represented using a table?",
      "Can the relationship be represented with an equation?",
      "What happens to the output whenever the input increases by 1?",
      "What does the relationship mean in the original situation?",
    ],

    expectedInsight:
      "Let s represent the number of students and m represent money collected. The relation can be modeled by m = 15s. Example input-output pairs include (1, 15), (2, 30), and (5, 75).",
  },

  visualModels: [
    {
      id: "input-output-thinking",
      type: "comparison",

      title:
        "Input and Output",

      description:
        "A relation connects one quantity to another. Thinking about which quantity influences the other helps organize the relationship.",

      items: [
        {
          label: "Input",
          symbol: "students",
          meaning:
            "The number of students registered is the value we choose or observe first.",
        },

        {
          label: "Output",
          symbol: "money collected",
          meaning:
            "The total registration money depends on the number of students.",
        },
      ],
    },

    {
      id: "representation-comparison",
      type: "comparison",

      title:
        "One Relationship, Multiple Representations",

      description:
        "The same mathematical relationship can be communicated in several forms.",

      items: [
        {
          label: "Words",
          symbol: "$15 per student",
          meaning:
            "Each additional student increases the total money by $15.",
        },

        {
          label: "Ordered Pair",
          symbol: "(4, 60)",
          meaning:
            "Four students correspond to $60 collected.",
        },

        {
          label: "Equation",
          symbol: "m = 15s",
          meaning:
            "The output m is 15 times the input s.",
        },

        {
          label: "Table",
          symbol: "1→15, 2→30, 3→45",
          meaning:
            "Each row pairs an input with its corresponding output.",
        },
      ],
    },

    {
      id: "relation-vs-random-data",
      type: "comparison",

      title:
        "Related Quantities vs Unrelated Details",

      description:
        "Good modeling begins by deciding which information actually forms the mathematical relationship.",

      items: [
        {
          label: "Related",
          symbol: "students ↔ total money",
          meaning:
            "Changing the number of students changes the amount of registration money collected.",
        },

        {
          label: "Not Part of This Relation",
          symbol: "folder color",
          meaning:
            "The fact that folders are blue does not affect registration revenue.",
        },
      ],
    },
  ],

  learningObjectives: [
    "Explain what a mathematical relation is.",
    "Identify two quantities that are related.",
    "Distinguish input quantities from output quantities.",
    "Identify independent and dependent quantities informally.",
    "Represent relations using ordered pairs.",
    "Represent relations using tables.",
    "Interpret ordered pairs in context.",
    "Describe patterns in input-output values.",
    "Write simple equations representing relationships.",
    "Move between words, tables, ordered pairs, and equations.",
    "Separate relevant information from irrelevant information.",
    "Interpret relationships using units.",
    "Use Python to generate input-output pairs.",
    "Create an original real-world relation.",
  ],

  prerequisiteKnowledge: [
    "Variables",
    "Expressions",
    "Ordered pairs",
    "Basic arithmetic",
    "Multiplication",
    "Tables",
    "Coordinate-plane familiarity",
    "Real-world algebraic modeling",
  ],

  vocabulary: [
    {
      term: "Relation",
      definition:
        "A set of connections between input values and output values.",
    },

    {
      term: "Input",
      definition:
        "A value entered, chosen, or observed first in a relationship.",
    },

    {
      term: "Output",
      definition:
        "A value produced or associated with an input.",
    },

    {
      term: "Ordered Pair",
      definition:
        "A pair of values written as (x, y), where the first value represents an input and the second represents its corresponding output.",
    },

    {
      term: "Independent Quantity",
      definition:
        "A quantity whose value is selected or observed without being determined by the output quantity.",
    },

    {
      term: "Dependent Quantity",
      definition:
        "A quantity whose value depends on another quantity.",
    },

    {
      term: "Representation",
      definition:
        "A way of showing a mathematical idea, such as words, tables, ordered pairs, graphs, or equations.",
    },
  ],

  formulas: [
    {
      name: "Ordered Pair",
      formula: "(input, output)",
      meaning:
        "The first coordinate represents the input and the second represents the corresponding output.",
    },

    {
      name: "Simple Input-Output Rule",
      formula: "output = rule(input)",
      meaning:
        "A rule transforms or connects an input value to an output value.",
    },

    {
      name: "Coding Workshop Model",
      formula: "m = 15s",
      meaning:
        "Registration money m equals $15 times the number of students s.",
    },

    {
      name: "Relationship Reasoning",
      formula:
        "Quantity 1 → relationship → Quantity 2",
      meaning:
        "Identify the quantities first, then determine how they are connected.",
    },
  ],

  workedExamples: [
    {
      title:
        "From a Real Situation to a Relation",

      problem:
        "A parking garage charges $4 per hour. Let h represent hours parked and c represent total cost.",

      solutionSteps: [
        "Identify the input quantity: hours parked.",
        "Identify the output quantity: total cost.",
        "Each hour adds $4.",
        "For 1 hour, cost is $4.",
        "For 2 hours, cost is $8.",
        "For 3 hours, cost is $12.",
        "Write ordered pairs: (1, 4), (2, 8), (3, 12).",
        "Write the equation c = 4h.",
      ],

      answer:
        "Relation: {(1, 4), (2, 8), (3, 12), ...}; equation c = 4h.",

      interpretation:
        "Each input represents time parked, and each corresponding output represents total cost.",
    },

    {
      title:
        "Read Ordered Pairs in Context",

      problem:
        "A relation describing hours worked and earnings contains the ordered pair (6, 108). What does it mean?",

      solutionSteps: [
        "The first coordinate is the input.",
        "The input represents hours worked.",
        "The second coordinate is the output.",
        "The output represents earnings.",
      ],

      answer:
        "Working 6 hours corresponds to earning $108.",
    },

    {
      title:
        "Create a Table",

      problem:
        "A bicycle travels at a constant rate of 12 miles per hour. Create a table for 0, 1, 2, 3, and 4 hours.",

      solutionSteps: [
        "Let t represent time in hours.",
        "Let d represent distance in miles.",
        "Use d = 12t.",
        "At t = 0, d = 0.",
        "At t = 1, d = 12.",
        "At t = 2, d = 24.",
        "At t = 3, d = 36.",
        "At t = 4, d = 48.",
      ],

      answer:
        "Pairs: (0, 0), (1, 12), (2, 24), (3, 36), (4, 48).",

      interpretation:
        "Each hour corresponds to 12 additional miles traveled.",
    },

    {
      title:
        "Identify Input and Output",

      problem:
        "A student studies for different numbers of hours and records the score earned on a practice assessment.",

      solutionSteps: [
        "One quantity is study time.",
        "The second quantity is assessment score.",
        "Study time is naturally treated as the input.",
        "Assessment score is treated as the output.",
        "The relationship asks how score may change as study time changes.",
      ],

      answer:
        "Input: study hours. Output: assessment score.",
    },

    {
      title:
        "Relevant vs Irrelevant Information",

      problem:
        "A delivery service charges $8 per package. Packages are placed in green bins, drivers wear uniforms, and 25 packages are delivered. What information is needed to determine revenue?",

      solutionSteps: [
        "Revenue depends on the number of packages.",
        "Revenue also depends on the price per package.",
        "The green bins do not affect revenue.",
        "Uniforms do not affect the revenue calculation.",
        "Use r = 8p.",
        "For p = 25, r = 8(25) = 200.",
      ],

      answer:
        "$200 revenue.",

      interpretation:
        "The meaningful relation is package count → revenue.",
    },

    {
      title:
        "Find a Missing Output",

      problem:
        "The relation follows y = 3x + 2. Find the output when x = 5.",

      solutionSteps: [
        "Input is x = 5.",
        "Substitute 5 into the rule.",
        "y = 3(5) + 2.",
        "y = 15 + 2.",
        "y = 17.",
      ],

      answer:
        "(5, 17)",
    },

    {
      title:
        "Find a Missing Input",

      problem:
        "A relation follows c = 10n. If the output cost is $70, what input produced it?",

      solutionSteps: [
        "Set c = 70.",
        "Write 70 = 10n.",
        "Divide by 10.",
        "n = 7.",
      ],

      answer:
        "Input 7 produces output 70.",
    },

    {
      title:
        "Compare Two Relations",

      problem:
        "Relation A has pairs (1, 5), (2, 10), (3, 15). Relation B has pairs (1, 8), (2, 16), (3, 24). What pattern do you notice?",

      solutionSteps: [
        "In Relation A, each output is 5 times the input.",
        "In Relation B, each output is 8 times the input.",
        "Both relationships increase as the input increases.",
        "Relation B produces larger outputs for the same positive inputs.",
      ],

      answer:
        "Relation A follows y = 5x. Relation B follows y = 8x.",
    },
  ],

  interactiveExploration: {
    title:
      "Build the Relationship Before the Equation",

    description:
      "Start with quantities and observations rather than immediately writing a formula.",

    instructions: [
      "Choose a real situation involving two changing quantities.",
      "Name the first quantity.",
      "Name the second quantity.",
      "Decide which quantity should be treated as the input.",
      "Decide which quantity should be treated as the output.",
      "Create at least five input values.",
      "Determine or estimate the corresponding outputs.",
      "Write the values as ordered pairs.",
      "Organize the pairs in a table.",
      "Describe the relationship using words.",
      "If possible, write a rule or equation.",
    ],

    questions: [
      "Why did you choose that quantity as the input?",
      "Does the output change when the input changes?",
      "Is the relationship increasing, decreasing, or irregular?",
      "What units belong to the input?",
      "What units belong to the output?",
      "Can the same relationship be represented in more than one way?",
      "Which representation communicates the relationship most clearly?",
    ],

    expectedDiscovery:
      "A relation is not defined by one particular representation. The same relationship can be communicated using words, ordered pairs, tables, equations, and eventually graphs.",
  },

  realWorldApplications: [
    {
      field: "Business",
      application:
        "Businesses relate quantity sold to revenue, hours worked to labor cost, and advertising spending to customer response.",
    },

    {
      field: "Transportation",
      application:
        "Travel time can be related to distance, fuel use, or transportation cost.",
    },

    {
      field: "Education",
      application:
        "Study time, practice attempts, attendance, and assessment outcomes can be studied as related quantities.",
    },

    {
      field: "Science",
      application:
        "Scientists examine relationships between variables such as temperature and pressure or time and population.",
    },

    {
      field: "Finance",
      application:
        "Financial models relate investment amounts, interest rates, time, payments, and balances.",
    },

    {
      field: "Technology",
      application:
        "Computer programs accept inputs, process them according to rules, and produce outputs.",
    },
  ],

  aiConnection: {
    title:
      "Inputs and Outputs in Artificial Intelligence",

    explanation:
      "AI systems can also be understood in terms of inputs and outputs. A model receives information, processes patterns it learned from data, and produces a prediction, classification, recommendation, or generated response.",

    example:
      "A simple predictive model might use hours studied as an input and estimate an assessment score as an output. A more advanced system might use many inputs at the same time.",

    uses: [
      "Prediction",
      "Classification",
      "Recommendation systems",
      "Computer vision",
      "Language models",
      "Risk scoring",
    ],

    caution:
      "A relationship between two variables does not automatically prove that one causes the other. Later data-science courses must distinguish association from causation.",

    reflectionQuestion:
      "Why is understanding inputs and outputs important before learning how an AI model makes predictions?",
  },

  pythonLab: {
    title:
      "Generate Input-Output Pairs",

    objective:
      "Use Python to generate a relation from an algebraic rule.",

    code: `inputs = [0, 1, 2, 3, 4, 5]

for x in inputs:
    y = 3 * x + 2
    print("Input:", x, "Output:", y)`,

    questions: [
      "What output corresponds to input 0?",
      "What output corresponds to input 3?",
      "What ordered pairs does the program generate?",
      "What rule connects input x to output y?",
      "How much does the output increase when the input increases by 1?",
      "How is the Python program similar to an input-output table?",
    ],

    reflectionQuestions: [
      "Does Python create the relationship, or does it follow the mathematical rule we provide?",
      "Why is understanding the relationship important before writing the code?",
    ],

    extension:
      "Change the rule to y = 5x - 1. Predict the first six outputs before running the program.",
  },

  guidedPractice: [
    {
      question:
        "A movie ticket costs $12. Identify the input and output if we study the relationship between tickets purchased and total cost.",
      answer:
        "Input: number of tickets. Output: total cost.",
      difficulty: "Foundation",
    },

    {
      question:
        "Write three ordered pairs for c = 12t using t = 1, 2, and 3.",
      answer:
        "(1, 12), (2, 24), (3, 36).",
      difficulty: "Foundation",
    },

    {
      question:
        "What does the ordered pair (4, 48) mean in the ticket situation?",
      answer:
        "Four tickets cost $48.",
      difficulty: "Interpretation",
    },

    {
      question:
        "A table contains x-values 0, 1, 2, 3 and y-values 5, 7, 9, 11. Describe the pattern.",
      answer:
        "The output begins at 5 and increases by 2 whenever the input increases by 1.",
      difficulty: "Reasoning",
    },

    {
      question:
        "Write an equation matching the previous table.",
      answer:
        "y = 2x + 5.",
      difficulty: "Modeling",
    },

    {
      question:
        "In a situation relating rainfall amount to crop yield, which quantity could reasonably be treated as the input?",
      answer:
        "Rainfall amount.",
      difficulty: "Application",
    },
  ],

  independentPractice: [
    {
      question:
        "A streaming service charges $9 per month. Define an input, an output, and write a rule for total cost.",
      answer:
        "Input m = number of months; output c = total cost; c = 9m.",
    },

    {
      question:
        "Create four ordered pairs for y = 4x using x = 0, 1, 2, and 3.",
      answer:
        "(0, 0), (1, 4), (2, 8), (3, 12).",
    },

    {
      question:
        "What does the ordered pair (7, 84) mean if x is hours worked and y is earnings?",
      answer:
        "Seven hours of work correspond to $84 earned.",
    },

    {
      question:
        "A table gives inputs 1, 2, 3, 4 and outputs 10, 20, 30, 40. Write a rule.",
      answer:
        "y = 10x.",
    },

    {
      question:
        "Identify a possible input and output for a relationship involving distance traveled.",
      answer:
        "Example: input = time; output = distance.",
    },

    {
      question:
        "A plant is measured every week. Which could be the input and which could be the output?",
      answer:
        "Input = week number or time; output = plant height.",
    },

    {
      question:
        "Create a real-world relation containing at least five ordered pairs.",
      answer:
        "Answers will vary.",
    },

    {
      question:
        "Create one irrelevant detail that could be added to your relation problem without affecting the mathematics.",
      answer:
        "Answers will vary.",
    },
  ],

  commonMistakes: [
    {
      mistake:
        "Thinking the first number in an ordered pair is always smaller.",
      correction:
        "Position, not size, determines meaning. The first coordinate is the input and the second is the output.",
    },

    {
      mistake:
        "Using every number mentioned in a word problem.",
      correction:
        "Only include information that affects the relationship being modeled.",
    },

    {
      mistake:
        "Naming variables without defining what they represent.",
      correction:
        "Always connect each variable to a real quantity and include units when appropriate.",
    },

    {
      mistake:
        "Assuming that any two quantities must have a meaningful relationship.",
      correction:
        "Ask whether changes in one quantity are meaningfully associated with changes in the other.",
    },

    {
      mistake:
        "Writing an equation before understanding the quantities.",
      correction:
        "Identify input, output, units, and pattern before selecting an algebraic rule.",
    },

    {
      mistake:
        "Treating a relation as only an equation.",
      correction:
        "Relations may be represented using ordered pairs, tables, graphs, mappings, equations, or words.",
    },
  ],

  discussionQuestions: [
    "What makes two quantities meaningfully related?",
    "Why is identifying units important?",
    "Can the same relation be shown in several different ways?",
    "Why might a table be easier to understand than an equation in some situations?",
    "Why might an equation be more useful than a table in other situations?",
    "How are computer programs similar to input-output systems?",
    "Can two quantities be related without one causing the other?",
    "What real relationship would you like to investigate using data?",
  ],

  formativeAssessment: {
    passingScore: 7,

    questions: [
      {
        type: "definition",
        prompt:
          "What is a relation?",
        answer:
          "A set of connections between input values and output values.",
      },

      {
        type: "identification",
        prompt:
          "A taxi fare depends on miles traveled. Identify the input and output.",
        answer:
          "Input: miles traveled. Output: taxi fare.",
      },

      {
        type: "ordered-pair",
        prompt:
          "What does (3, 24) mean if x is number of items and y is total cost?",
        answer:
          "Three items cost $24.",
      },

      {
        type: "table",
        prompt:
          "For y = 5x, find the output when x = 4.",
        answer:
          "20.",
      },

      {
        type: "equation",
        prompt:
          "A service costs $7 per unit. Write an equation relating units u to cost c.",
        answer:
          "c = 7u.",
      },

      {
        type: "reasoning",
        prompt:
          "Why might folder color be irrelevant in a problem about number of students and registration revenue?",
        sampleAnswer:
          "Changing the folder color does not change the number of students or the amount paid.",
      },

      {
        type: "representation",
        prompt:
          "Name three ways a relation can be represented.",
        answer:
          "Examples include words, ordered pairs, tables, graphs, mappings, and equations.",
      },

      {
        type: "interpretation",
        prompt:
          "A relation contains (5, 75), where x is students and y is money collected. Interpret the pair.",
        answer:
          "Five students correspond to $75 collected.",
      },

      {
        type: "creation",
        prompt:
          "Create a real-world example of an input-output relationship.",
        sampleAnswer:
          "Answers will vary.",
      },
    ],
  },

  researchExtension: {
    title:
      "Find a Relationship in Real Data",

    description:
      "Investigate two quantities that may be related in a real dataset or real-world system.",

    researchQuestion:
      "How can paired data help us describe relationships between quantities?",

    applicationOptions: [
      "Temperature and electricity use",
      "Study time and assessment score",
      "Advertising and sales",
      "Time and distance",
      "Rainfall and crop yield",
      "Exercise time and calories burned",
      "Age and height",
      "Production volume and cost",
    ],

    task:
      "Choose two quantities, define the input and output, collect or construct at least five paired observations, organize the values in a table, write ordered pairs, describe the pattern, and explain what further questions the relationship raises.",

    requiredEvidence: [
      "Two clearly defined quantities",
      "Input identification",
      "Output identification",
      "At least five paired values",
      "Table",
      "Ordered pairs",
      "Pattern description",
      "Units",
      "Written interpretation",
    ],
  },

  portfolioArtifact: {
    title:
      "Input-Output Relationship Explorer",

    description:
      "Create an original mini-project showing one meaningful relationship through several representations.",

    requiredSections: [
      "Real-world situation",
      "Input quantity",
      "Output quantity",
      "Units",
      "At least five ordered pairs",
      "Input-output table",
      "Written description of the pattern",
      "Equation if appropriate",
      "Python-generated values",
      "Interpretation",
      "One irrelevant detail and explanation of why it is irrelevant",
    ],

    requiredEvidence: [
      "Original context",
      "Correct paired values",
      "Multiple representations",
      "Clear reasoning",
      "Python connection",
      "Real-world interpretation",
    ],
  },

  growthIndicators: [
    "Identifies related quantities.",
    "Distinguishes input from output.",
    "Interprets ordered pairs correctly.",
    "Creates input-output tables.",
    "Recognizes patterns in paired data.",
    "Writes simple relationship rules.",
    "Moves between representations.",
    "Uses units correctly.",
    "Separates relevant from irrelevant information.",
    "Explains relationships in context.",
    "Generates relations with Python.",
    "Creates original relation models.",
  ],

  lumineryGuidance: {
    message:
      "Before asking for an equation, first understand the relationship.",

    recommendation:
      "Situation → quantities → input → output → pairs → pattern → representation → interpretation.",

    prompt:
      "What two quantities are connected, and how does the output respond when the input changes?",

    coachingQuestions: [
      "What quantities are changing?",
      "Which quantity should be treated as the input?",
      "Which quantity should be treated as the output?",
      "What units belong to each quantity?",
      "What information is irrelevant?",
      "Can you create an ordered pair?",
      "What does that ordered pair mean?",
      "Can you organize several pairs in a table?",
      "What pattern do you notice?",
      "Can you describe the relationship using words?",
      "Can you represent the relationship with an equation?",
      "How could Python generate more values?",
      "What does the relationship mean in the real situation?",
    ],
  },

  summary: [
    "A relation connects inputs with outputs.",
    "Inputs and outputs represent real quantities.",
    "Ordered pairs can represent input-output connections.",
    "The first coordinate represents the input.",
    "The second coordinate represents the output.",
    "Relations can be shown using words, tables, ordered pairs, graphs, mappings, and equations.",
    "Units help give mathematical relationships meaning.",
    "Relevant information should be separated from irrelevant details.",
    "A relationship should be understood before choosing an equation.",
    "Python can generate and test input-output pairs.",
    "Understanding relations prepares students to study functions.",
  ],

  reflection: [
    "What is the difference between an input and an output?",
    "How does an ordered pair communicate a relationship?",
    "Which representation—words, table, ordered pairs, or equation—helps you understand relationships best?",
    "Why should we identify quantities before writing an equation?",
    "What real-world relationship do you see in your everyday life?",
    "How could Python help explore that relationship?",
    "What questions should we ask before deciding whether a relation is a function?",
  ],

  previousLesson: {
    moduleNumber: 3,
    lessonNumber: 8,
    slug: "module-3-constraint-modeling-synthesis",
    title:
      "Module 3 Constraint Modeling Synthesis",
  },

  nextLesson: {
    moduleNumber: 4,
    lessonNumber: 2,
    slug: "functions-vs-non-functions",
    title:
      "Functions vs. Non-Functions",
  },
};

export default lesson01;
