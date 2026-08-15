const lesson03 = {
  id: "algebra-one-module-02-lesson-03",
  slug: "solving-two-step-equations",

  courseId: "algebra-1",
  courseTitle: "Algebra I",

  moduleNumber: 2,
  moduleTitle: "Solving Linear Equations",
  lessonNumber: 3,

  title: "Solving Two-Step Equations Through Real-World Modeling",

  subtitle:
    "Translate multi-sentence situations into equations, solve them logically, and explain what the solution means.",

  duration: "65–80 minutes",
  level: "Foundation",
  status: "Available",

  essentialQuestion:
    "How can we turn a real-world situation written in words into a mathematical equation that we can solve?",

  bigIdea:
    "Algebra begins before an equation is written. Strong problem solvers identify quantities, define variables, discover relationships, build equations, solve them, and interpret the result in context.",

  whyThisLessonExists: {
    title: "Why Word-to-Math Reasoning Matters",

    introduction:
      "Students are often able to solve an equation once it is written for them but struggle to create the equation from a real situation. Mathematics becomes more powerful when students can translate language, quantities, and relationships into symbolic models.",

    centralProblem:
      "How can we determine which words represent the unknown, the rate, the fixed quantity, and the total?",

    purpose:
      "Learning to build equations prepares students for science, business, engineering, finance, data analysis, programming, artificial intelligence, and everyday decision-making.",
  },

  problemFirst: {
    title: "The Robotics Kit Challenge",

    scenario:
      "Maya already has $18 saved for a robotics kit. She plans to save the same amount each week for the next 4 weeks, and she wants to have exactly $70 by the end of that time.",

    questions: [
      "What quantity is unknown?",
      "What quantity stays fixed?",
      "What quantity repeats 4 times?",
      "What total amount is Maya trying to reach?",
      "Choose a variable for Maya's weekly savings.",
      "Translate the story into an equation.",
      "Which operation should be undone first?",
      "Solve the equation.",
      "Check the result using the original story.",
      "Explain the answer in a complete sentence.",
    ],

    expectedInsight:
      "If w represents Maya's weekly savings, the situation becomes 4w + 18 = 70. Solving gives w = 13, so Maya must save $13 each week.",
  },

  learningObjectives: [
    "Identify known and unknown quantities in a multi-sentence situation.",
    "Define a variable clearly before constructing an equation.",
    "Distinguish between a rate, repeated quantity, fixed quantity, and total.",
    "Translate verbal relationships into two-step linear equations.",
    "Solve two-step equations using inverse operations.",
    "Preserve equality throughout the solving process.",
    "Check solutions using the original situation.",
    "Interpret solutions using units and context.",
    "Create an original word problem represented by a two-step equation.",
  ],

  prerequisiteKnowledge: [
    "Variables and expressions",
    "Meaning of equality",
    "Balance principle",
    "Inverse operations",
    "One-step equations",
    "Integer arithmetic",
    "Substitution",
  ],

  vocabulary: [
    {
      term: "Variable",
      definition:
        "A symbol representing an unknown or changing quantity.",
      example:
        "Let m represent the number of miles traveled.",
    },
    {
      term: "Rate",
      definition:
        "A quantity describing how much something changes for each unit.",
      example:
        "$3 per mile means the changing cost is 3m.",
    },
    {
      term: "Fixed Quantity",
      definition:
        "An amount that does not change in the situation.",
      example:
        "A $5 starting fee remains $5 regardless of the number of miles.",
    },
    {
      term: "Total",
      definition:
        "The final combined amount described by the situation.",
      example:
        "If the ride costs $26 altogether, 26 is the total.",
    },
    {
      term: "Mathematical Model",
      definition:
        "A mathematical representation of a real situation.",
      example:
        "3m + 5 = 26 models a taxi ride.",
    },
    {
      term: "Interpretation",
      definition:
        "An explanation of what a mathematical solution means in the original situation.",
      example:
        "m = 7 means the passenger traveled 7 miles.",
    },
  ],

  formulas: [
    {
      name: "Common Two-Step Model",
      formula: "rate × unknown + fixed amount = total",
      meaning:
        "Many real-world two-step equations contain a changing amount, a fixed amount, and a total.",
    },
    {
      name: "Symbolic Form",
      formula: "ax + b = c",
      meaning:
        "a is often a rate, x is the unknown, b is a fixed quantity, and c is the total.",
      requirement:
        "a ≠ 0",
    },
  ],

  workedExamples: [
    {
      title: "Rideshare Fare",

      problem:
        "A rideshare company charges a $4 booking fee before the trip begins. The passenger then pays the same amount for each mile, and a 7-mile trip costs $25 altogether. What is the cost per mile?",

      solutionSteps: [
        "Identify the unknown: the cost per mile.",
        "Let x represent the cost per mile.",
        "Seven miles at x dollars per mile gives 7x.",
        "The fixed booking fee is 4.",
        "The total fare is 25.",
        "Build the equation: 7x + 4 = 25.",
        "Subtract 4 from both sides: 7x = 21.",
        "Divide both sides by 7: x = 3.",
        "Check: 7(3) + 4 = 25.",
        "Interpret: the rideshare company charges $3 per mile.",
      ],

      answer:
        "$3 per mile.",
    },

    {
      title: "School Club Membership",

      problem:
        "A school technology club charges each student the same monthly fee. Every student also pays a one-time $12 registration fee, and after 3 months one student's total payment is $57. What is the monthly membership fee?",

      solutionSteps: [
        "Let m represent the monthly membership fee.",
        "Three months cost 3m.",
        "The registration fee is the fixed amount 12.",
        "The total is 57.",
        "Build the equation: 3m + 12 = 57.",
        "Subtract 12: 3m = 45.",
        "Divide by 3: m = 15.",
        "Check: 3(15) + 12 = 57.",
        "Interpret: the monthly fee is $15.",
      ],

      answer:
        "$15 per month.",
    },

    {
      title: "Fundraising Goal",

      problem:
        "A student organization already has $35 in its fundraising account. The students sell 8 identical fundraising packages and finish with $155 altogether. How much money did each package contribute?",

      solutionSteps: [
        "Let p represent the amount earned from one package.",
        "Eight packages contribute 8p.",
        "The organization already had $35.",
        "The final amount is $155.",
        "Build the equation: 8p + 35 = 155.",
        "Subtract 35: 8p = 120.",
        "Divide by 8: p = 15.",
        "Check: 8(15) + 35 = 155.",
      ],

      answer:
        "Each package contributed $15.",
    },

    {
      title: "Temperature Investigation",

      problem:
        "A laboratory experiment begins at a temperature of 6 degrees. The temperature then increases by the same amount during each of 4 testing intervals and reaches 34 degrees. How much did the temperature increase during each interval?",

      solutionSteps: [
        "Let t represent the increase during one interval.",
        "Four intervals contribute 4t.",
        "The initial temperature is 6.",
        "The final temperature is 34.",
        "Build the equation: 4t + 6 = 34.",
        "Subtract 6: 4t = 28.",
        "Divide by 4: t = 7.",
        "Interpret: the temperature increased 7 degrees per interval.",
      ],

      answer:
        "7 degrees per interval.",
    },

    {
      title: "Notebook Purchase",

      problem:
        "Jordan buys 5 identical notebooks for a class project. Jordan also purchases a $6 folder, and the entire purchase costs $31. What is the price of one notebook?",

      solutionSteps: [
        "Let n represent the price of one notebook.",
        "Five notebooks cost 5n.",
        "The folder contributes a fixed $6.",
        "The total is $31.",
        "Build the equation: 5n + 6 = 31.",
        "Subtract 6: 5n = 25.",
        "Divide by 5: n = 5.",
        "Check: 5(5) + 6 = 31.",
      ],

      answer:
        "One notebook costs $5.",
    },

    {
      title: "Internet Data Plan",

      problem:
        "An internet provider charges a $22 monthly service fee. A customer also pays the same amount for each extra gigabyte of data, and 6 extra gigabytes produce a total bill of $52. What is the cost of each extra gigabyte?",

      solutionSteps: [
        "Let g represent the cost of one extra gigabyte.",
        "Six extra gigabytes cost 6g.",
        "The fixed monthly fee is 22.",
        "The total bill is 52.",
        "Build the equation: 6g + 22 = 52.",
        "Subtract 22: 6g = 30.",
        "Divide by 6: g = 5.",
        "Interpret the result.",
      ],

      answer:
        "Each extra gigabyte costs $5.",
    },
  ],

  interactiveExploration: {
    title: "Story → Equation → Graph",

    description:
      "Use Desmos to connect a verbal situation, its algebraic equation, and its graphical solution.",

    instructions: [
      "Choose the rideshare example from the lesson.",
      "Identify the variable, rate, fixed amount, and total.",
      "Write the equation 7x + 4 = 25.",
      "Graph y = 7x + 4.",
      "Graph y = 25.",
      "Locate their intersection.",
      "Compare its x-coordinate with your algebraic solution.",
      "Change the trip from 7 miles to 5 miles and create a new equation.",
      "Explain how the story, equation, and graph represent the same relationship.",
    ],

    questions: [
      "Which part of the graph represents the fixed fee?",
      "Where does the rate appear in the equation?",
      "Why does the intersection represent a solution?",
      "How would the equation change if the booking fee increased?",
      "How would the equation change if the trip were longer?",
    ],

    expectedDiscovery:
      "A verbal situation, equation, table, and graph can describe the same mathematical relationship in different forms.",
  },

  realWorldApplications: [
    {
      field: "Personal Finance",
      application:
        "A bank account may contain an initial balance plus equal weekly deposits. Students can model the relationship to determine the required deposit.",
    },
    {
      field: "Transportation",
      application:
        "Taxi and rideshare prices frequently combine a fixed starting fee with a rate based on distance.",
    },
    {
      field: "Business",
      application:
        "Businesses model total cost using fixed expenses plus variable cost per product.",
    },
    {
      field: "Engineering",
      application:
        "Engineers translate physical relationships written in words into mathematical equations before calculating unknown quantities.",
    },
    {
      field: "Data Science",
      application:
        "Analysts must identify variables and relationships before constructing mathematical or statistical models.",
    },
    {
      field: "Artificial Intelligence",
      application:
        "AI systems that solve quantitative word problems must identify entities, quantities, operations, and relationships before producing equations.",
    },
  ],

  aiConnection: {
    title: "How AI Converts Language into Mathematics",

    explanation:
      "When an AI system receives a mathematical word problem, it must identify quantities, determine relationships, decide which information matters, and represent those relationships mathematically. Students practice the same reasoning process when translating words into equations.",

    example:
      "The sentence 'A service costs $10 plus $4 for each hour and the total is $34' contains a fixed value, a rate, an unknown number of hours, and a total. These become 4h + 10 = 34.",

    uses: [
      "Natural language understanding",
      "Mathematical reasoning",
      "Information extraction",
      "Problem decomposition",
      "Symbolic modeling",
    ],

    caution:
      "Correct arithmetic cannot fix an incorrect mathematical model. The equation must represent the original situation accurately.",

    reflectionQuestion:
      "Which is more important in a word problem: solving the equation quickly or constructing the correct equation first? Explain.",
  },

  pythonLab: {
    title: "Translate and Verify a Real Situation with Python",

    objective:
      "Represent a word problem with variables and use Python to verify the resulting solution.",

    code: `# Situation:
# A rideshare trip has a $4 booking fee.
# A 7-mile trip costs $25 total.

miles = 7
booking_fee = 4
total = 25

cost_per_mile = (total - booking_fee) / miles

check_total = miles * cost_per_mile + booking_fee

print("Cost per mile:", cost_per_mile)
print("Check total:", check_total)
print("Model verified:", check_total == total)`,

    expectedOutput: `Cost per mile: 3.0
Check total: 25.0
Model verified: True`,

    investigation: [
      "Explain which Python variable represents each quantity in the story.",
      "Change the trip distance to 9 miles and create a reasonable new total.",
      "Predict the cost per mile before running the program.",
      "Modify the program.",
      "Create your own two-sentence pricing story and represent it in Python.",
    ],

    reflectionQuestions: [
      "How does defining Python variables resemble identifying quantities in a word problem?",
      "Why must the mathematical model be correct before Python can help?",
      "What does the verification step tell you?",
    ],
  },

  guidedPractice: [
    {
      question:
        "A movie theater charges a $3 online reservation fee in addition to the same price for every ticket. A family buys 4 tickets and pays $51 altogether. Define a variable, write an equation, solve it, and explain what the answer means.",
      answer:
        "Let t be the ticket price. 4t + 3 = 51, so 4t = 48 and t = 12. Each ticket costs $12.",
      hint:
        "Separate the repeating ticket cost from the fixed reservation fee.",
    },

    {
      question:
        "A student already has 14 volunteer hours recorded. The student volunteers the same number of hours during each of the next 3 weekends and reaches 29 hours total. How many hours did the student volunteer each weekend?",
      answer:
        "Let h be weekend hours. 3h + 14 = 29, so 3h = 15 and h = 5. The student volunteered 5 hours each weekend.",
      hint:
        "Identify what repeats three times.",
    },

    {
      question:
        "A delivery company charges a $7 service fee plus the same amount for every mile driven. A 6-mile delivery costs $31. What is the cost per mile?",
      answer:
        "Let m be the price per mile. 6m + 7 = 31, so 6m = 24 and m = 4. The cost is $4 per mile.",
      hint:
        "The service fee is fixed.",
    },

    {
      question:
        "A science experiment starts with 10 milliliters of a solution. The researcher adds the same amount during 5 rounds, producing 45 milliliters in total. How much solution was added during each round?",
      answer:
        "Let x be the amount added each round. 5x + 10 = 45, so 5x = 35 and x = 7. Seven milliliters were added each round.",
      hint:
        "Translate 'same amount during 5 rounds' into multiplication.",
    },
  ],

  independentPractice: [
    {
      question:
        "An after-school coding program charges a $25 registration fee. A student attends 6 identical weekly sessions and the complete program costs $145. Determine the cost of one weekly session and show how the story becomes an equation.",
      answer:
        "Let s be the session cost. 6s + 25 = 145, so 6s = 120 and s = 20. Each session costs $20.",
    },

    {
      question:
        "A family's water tank already contains 40 gallons. A pump adds the same number of gallons during each of 8 cycles, and the tank reaches 200 gallons. Determine how many gallons the pump adds per cycle.",
      answer:
        "Let g be gallons per cycle. 8g + 40 = 200, so 8g = 160 and g = 20. The pump adds 20 gallons per cycle.",
    },

    {
      question:
        "A student has $16 on a lunch account. The parent makes 5 equal deposits, after which the account contains $76. Determine the value of each deposit and verify your answer.",
      answer:
        "Let d be one deposit. 5d + 16 = 76, so d = 12. Check: 5(12) + 16 = 76.",
    },

    {
      question:
        "A bicycle rental shop charges a fixed $9 equipment fee. A customer rents a bicycle for 4 hours and pays $45 in total. Determine the hourly rental rate.",
      answer:
        "Let r be the hourly rate. 4r + 9 = 45, so r = 9. The rental rate is $9 per hour.",
    },

    {
      question:
        "A school garden already contains 24 plants. Students add the same number of plants to each of 7 new sections, bringing the garden total to 94 plants. How many plants are placed in each new section?",
      answer:
        "Let p be plants per section. 7p + 24 = 94, so 7p = 70 and p = 10.",
    },

    {
      question:
        "A streaming service has a base monthly charge of $11. A customer rents the same number of premium movies at $4 each and receives a total bill of $35. Determine how many premium movies were rented.",
      answer:
        "Let m be the number of movies. 4m + 11 = 35, so 4m = 24 and m = 6. Six movies were rented.",
    },
  ],

  commonMistakes: [
    {
      mistake:
        "Looking for keywords without understanding the complete situation.",
      correction:
        "Identify the quantities and their relationships before choosing operations.",
    },
    {
      mistake:
        "Using the total as the variable.",
      correction:
        "The variable should represent the quantity that is unknown.",
    },
    {
      mistake:
        "Adding a repeated quantity instead of multiplying it.",
      correction:
        "If the same quantity occurs several times, multiplication usually represents that repetition.",
    },
    {
      mistake:
        "Ignoring units.",
      correction:
        "Attach meaning such as dollars, miles, hours, gallons, or items to quantities.",
    },
    {
      mistake:
        "Solving correctly from an incorrect equation.",
      correction:
        "Return to the original story and verify that every term in the equation has a meaning.",
    },
    {
      mistake:
        "Giving only x = 5 as the final answer.",
      correction:
        "Interpret the solution in context, such as 'Each ticket costs $5.'",
    },
  ],

  discussionQuestions: [
    "Why can a student be good at solving equations but still struggle with word problems?",
    "What information should be identified before writing an equation?",
    "Why is defining the variable important?",
    "How can units help us decide whether an equation makes sense?",
    "Why should a solution be interpreted in words after solving?",
    "Can two different stories produce the same equation? Give an example.",
    "Can you create two different real situations represented by 4x + 10 = 50?",
  ],

  formativeAssessment: {
    passingScore: 5,

    questions: [
      {
        type: "model-and-solve",
        prompt:
          "A school robotics team already has $60 available. Four sponsors contribute the same amount, and afterward the team has $260. Define a variable, construct an equation, solve it, and interpret the answer.",
        answer:
          "Let s be one sponsor's contribution. 4s + 60 = 260, so s = 50. Each sponsor contributed $50.",
      },

      {
        type: "model-and-solve",
        prompt:
          "A phone plan charges a fixed $18 monthly fee. A customer uses 7 units of an additional service and receives a total bill of $53. Determine the price of one additional service unit.",
        answer:
          "Let u be the price per unit. 7u + 18 = 53, so u = 5. Each unit costs $5.",
      },

      {
        type: "model-and-solve",
        prompt:
          "A runner has already completed 6 miles toward a weekly goal. The runner completes the same distance on each of the next 4 days and reaches 30 miles total. Determine the distance run each day.",
        answer:
          "Let d be miles per day. 4d + 6 = 30, so d = 6. The runner completes 6 miles per day.",
      },

      {
        type: "analysis",
        prompt:
          "A student models a $5 booking fee plus 8 miles at an unknown rate with the equation 5x + 8 = 29. Explain why the equation does not correctly represent the situation and write a better model.",
        answer:
          "The 5 is the fixed booking fee and should not multiply the variable. If x represents the price per mile, the correct equation is 8x + 5 = 29.",
      },

      {
        type: "explanation",
        prompt:
          "Explain why constructing the correct equation is more important than performing the algebra quickly.",
        sampleAnswer:
          "The equation represents the situation. If the model is wrong, correct algebra will still produce an answer that does not solve the original problem.",
      },

      {
        type: "creation",
        prompt:
          "Create a realistic situation that can be represented by 5x + 20 = 95. Define x and explain what every number represents.",
        sampleAnswer:
          "Answers will vary. For example, a gym charges a $20 registration fee plus the same fee for five training sessions, with a total cost of $95.",
      },
    ],
  },

  researchExtension: {
    title: "Find Algebra in the Real World",

    description:
      "Investigate a real pricing, savings, transportation, subscription, or measurement situation containing a fixed quantity and a variable rate.",

    researchQuestion:
      "How can a real system be represented by an equation of the form ax + b = c?",

    applicationOptions: [
      "Transportation pricing",
      "Phone plans",
      "Membership fees",
      "Savings goals",
      "Utility bills",
      "Online subscriptions",
      "Fundraising",
    ],

    task:
      "Find or invent realistic values, explain each quantity, construct the equation, solve for an unknown quantity, and evaluate whether the model is reasonable.",

    requiredEvidence: [
      "Source or description of situation",
      "Known quantities",
      "Unknown quantity",
      "Variable definition",
      "Equation",
      "Solution",
      "Verification",
      "Interpretation",
    ],
  },

  portfolioArtifact: {
    title: "Words-to-Mathematics Modeling Portfolio",

    description:
      "Create a polished example demonstrating how a multi-sentence real-world situation becomes a mathematical model.",

    requiredSections: [
      "Original multi-sentence situation",
      "Known quantities",
      "Unknown quantity",
      "Variable definition",
      "Relationship analysis",
      "Equation",
      "Step-by-step solution",
      "Substitution check",
      "Final interpretation",
    ],

    requiredEvidence: [
      "Written reasoning",
      "Equation",
      "Units",
      "Solution",
      "Desmos graph, diagram, table, or Python verification",
    ],
  },

  growthIndicators: [
    "Reads a situation for meaning instead of searching only for keywords.",
    "Identifies known and unknown quantities.",
    "Defines variables clearly.",
    "Recognizes fixed and changing quantities.",
    "Constructs equations independently.",
    "Preserves equality while solving.",
    "Uses units to interpret results.",
    "Checks whether an answer makes sense in context.",
    "Creates original mathematical situations.",
  ],

  lumineryGuidance: {
    message:
      "Do not ask, 'What equation should I use?' first. Ask, 'What is happening, what do I know, what do I not know, and how are these quantities related?'",

    recommendation:
      "Use the SkillBridge modeling sequence: Understand → Identify → Define → Relate → Model → Solve → Check → Interpret → Create.",

    prompt:
      "Can you explain where every number and variable in your equation came from in the original story?",

    coachingQuestions: [
      "What is the story actually describing?",
      "Which quantity is unknown?",
      "What should your variable represent?",
      "Which quantity repeats?",
      "Which quantity stays fixed?",
      "What is the total?",
      "How are these quantities connected?",
      "Does every term in your equation have a meaning?",
      "Does your answer make sense with its units?",
    ],

    confidence: 86,
  },

  summary: [
    "Word problems require translation before calculation.",
    "Begin by understanding the situation rather than searching for keywords.",
    "Identify known quantities and the unknown quantity.",
    "Define the variable explicitly.",
    "Determine which quantities are fixed and which repeat or change.",
    "Represent the relationship with an equation.",
    "Solve using inverse operations and the balance principle.",
    "Check the solution in the original situation.",
    "Include units when interpreting the solution.",
    "Strong mathematical thinkers can create models, not merely solve models created by someone else.",
  ],

  reflection: [
    "Which part is more difficult for you: building the equation or solving it?",
    "How does defining the variable make a word problem easier?",
    "Why can keyword-only strategies sometimes produce incorrect equations?",
    "How do units help you understand a problem?",
    "How can you tell whether your equation really represents the story?",
    "Create a two-sentence situation represented by 3x + 10 = 40.",
  ],

  previousLesson: {
    moduleNumber: 2,
    lessonNumber: 2,
    slug: "solving-one-step-equations",
    title: "Solving One-Step Equations",
  },

  nextLesson: {
    moduleNumber: 2,
    lessonNumber: 4,
    slug: "solving-multi-step-equations",
    title: "Solving Multi-Step Equations",
  },
};

export default lesson03;