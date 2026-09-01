const lesson06 = {
  id: "algebra-one-module-04-lesson-06",
  slug: "rate-of-change-and-comparing-relationships",

  courseId: "algebra-1",
  courseTitle: "Algebra I",

  moduleNumber: 4,
  moduleTitle: "Functions and Relations",
  lessonNumber: 6,

  title:
    "Rate of Change and Comparing Relationships",

  subtitle:
    "Measure how outputs change relative to inputs, interpret rates with units, compare functions represented in different forms, and use rate of change to make real-world decisions.",

  duration: "80–95 minutes",
  level: "Foundation",
  status: "Available",

  essentialQuestion:
    "How can we measure and compare how quickly one quantity changes relative to another?",

  bigIdea:
    "Rate of change compares the change in output to the change in input. It describes how quickly a relationship changes and gives meaning to quantities such as dollars per hour, miles per minute, points per game, or degrees per hour.",

  whyThisLessonExists: {
    title:
      "Relationships Do More Than Produce Outputs",

    introduction:
      "Knowing that two quantities are related is important, but often we need to know how rapidly one changes compared with the other. Businesses compare cost per unit, drivers compare distance per hour, scientists compare temperature change over time, and analysts compare growth rates.",

    centralProblem:
      "How can we measure change consistently and use that measurement to compare two different relationships?",

    purpose:
      "Students develop rate-of-change reasoning from tables, ordered pairs, equations, graphs, and real-world situations. Emphasis is placed on interpretation rather than memorizing a formula.",
  },

  problemFirst: {
    title:
      "Two Coding Camps",

    scenario:
      "Two organizations offer summer coding camps. Camp A charges $120 for 3 days and $200 for 5 days. Camp B charges $150 for 2 days and $270 for 6 days. Both camps provide laptops, Camp A uses blue notebooks, and Camp B begins each morning at 8:30 a.m.",

    questions: [
      "Which quantities are related?",
      "Which quantity should be the input?",
      "Which quantity should be the output?",
      "Which details are irrelevant?",
      "For Camp A, how much does cost change from 3 days to 5 days?",
      "How much does time change?",
      "What is the cost change per additional day?",
      "For Camp B, how much does cost change from 2 days to 6 days?",
      "How much does time change?",
      "What is Camp B's cost change per day?",
      "Which camp's cost grows faster?",
      "What units belong to each rate?",
      "Does the larger total cost automatically mean the larger rate of change?",
      "How could a student use these rates to compare the two camps?",
    ],

    expectedInsight:
      "Camp A changes by $80 over 2 days, giving $40 per day. Camp B changes by $120 over 4 days, giving $30 per day. Camp A's cost increases faster even though individual listed totals alone do not reveal that directly.",
  },

  visualModels: [
    {
      id: "rate-change-structure",
      type: "comparison",

      title:
        "Rate of Change Has Two Changes",

      description:
        "Rate of change compares what happens to the output with what happens to the input.",

      items: [
        {
          label: "Input Change",
          symbol: "Δx = x₂ - x₁",
          meaning:
            "Measure how much the input changes.",
        },

        {
          label: "Output Change",
          symbol: "Δy = y₂ - y₁",
          meaning:
            "Measure how much the output changes.",
        },

        {
          label: "Rate",
          symbol: "Δy / Δx",
          meaning:
            "Compare output change per unit of input change.",
        },
      ],
    },

    {
      id: "camp-comparison",
      type: "comparison",

      title:
        "Comparing the Coding Camps",

      description:
        "Two relationships can be compared by calculating the rate of change for each.",

      items: [
        {
          label: "Camp A",
          symbol: "$80 ÷ 2 days",
          meaning:
            "$40 per additional day.",
        },

        {
          label: "Camp B",
          symbol: "$120 ÷ 4 days",
          meaning:
            "$30 per additional day.",
        },
      ],
    },

    {
      id: "positive-negative-zero",
      type: "comparison",

      title:
        "Direction of Change",

      description:
        "The sign of a rate tells us how the output behaves as the input increases.",

      items: [
        {
          label: "Positive Rate",
          symbol: "+",
          meaning:
            "Output increases as input increases.",
        },

        {
          label: "Negative Rate",
          symbol: "−",
          meaning:
            "Output decreases as input increases.",
        },

        {
          label: "Zero Rate",
          symbol: "0",
          meaning:
            "Output remains unchanged as input increases.",
        },
      ],
    },

    {
      id: "same-rate-different-start",
      type: "comparison",

      title:
        "Same Rate, Different Starting Values",

      description:
        "Two functions may change at the same rate even when their outputs are different.",

      items: [
        {
          label: "Function A",
          symbol: "A(x) = 4x + 5",
          meaning:
            "Output increases by 4 for every increase of 1 in x.",
        },

        {
          label: "Function B",
          symbol: "B(x) = 4x + 20",
          meaning:
            "Output also increases by 4 per input unit, but begins at a different value.",
        },
      ],
    },

    {
      id: "units-matter",
      type: "comparison",

      title:
        "A Rate Without Units Is Incomplete",

      description:
        "Units explain what the numerical rate means in the original situation.",

      items: [
        {
          label: "Number Only",
          symbol: "45",
          meaning:
            "The number alone does not identify the relationship.",
        },

        {
          label: "Meaningful Rate",
          symbol: "45 miles/hour",
          meaning:
            "The output distance increases by 45 miles for each hour.",
        },
      ],
    },
  ],

  learningObjectives: [
    "Explain rate of change conceptually.",
    "Identify input and output changes.",
    "Calculate change in input.",
    "Calculate change in output.",
    "Calculate rate of change from two ordered pairs.",
    "Calculate rate of change from tables.",
    "Interpret positive rates.",
    "Interpret negative rates.",
    "Interpret zero rates.",
    "Attach meaningful units to rates.",
    "Recognize rate of change in linear equations.",
    "Compare functions represented in different forms.",
    "Distinguish total amount from rate of change.",
    "Use Python to calculate and compare rates.",
    "Create an original rate-of-change model.",
  ],

  prerequisiteKnowledge: [
    "Functions",
    "Ordered pairs",
    "Tables",
    "Function notation",
    "Evaluating functions",
    "Graph coordinates",
    "Integer operations",
    "Fractions",
    "Division",
    "Real-world units",
  ],

  vocabulary: [
    {
      term: "Rate of Change",
      definition:
        "The amount an output changes for each unit of change in the input.",
    },

    {
      term: "Change in Input",
      definition:
        "The difference between two input values.",
    },

    {
      term: "Change in Output",
      definition:
        "The difference between the corresponding output values.",
    },

    {
      term: "Positive Rate",
      definition:
        "A rate showing that output increases as input increases.",
    },

    {
      term: "Negative Rate",
      definition:
        "A rate showing that output decreases as input increases.",
    },

    {
      term: "Zero Rate",
      definition:
        "A rate showing that the output remains constant.",
    },

    {
      term: "Constant Rate of Change",
      definition:
        "A relationship in which the output changes by the same amount per input unit throughout.",
    },

    {
      term: "Unit Rate",
      definition:
        "A rate expressed per one unit of the input quantity.",
    },
  ],

  formulas: [
    {
      name: "Rate of Change",
      formula:
        "Rate of change = change in output / change in input",
      meaning:
        "Compare how much y changes with how much x changes.",
    },

    {
      name: "Coordinate Form",
      formula:
        "(y₂ - y₁) / (x₂ - x₁)",
      meaning:
        "Calculate rate of change using two ordered pairs.",
    },

    {
      name: "Linear Function Form",
      formula:
        "f(x) = mx + b",
      meaning:
        "For a linear function, m represents the constant rate of change.",
    },

    {
      name: "Reasoning Process",
      formula:
        "Two points → Δinput → Δoutput → divide → units → interpret",
      meaning:
        "A complete rate calculation includes interpretation.",
    },
  ],

  workedExamples: [
    {
      title:
        "Rate of Change from Two Points",

      problem:
        "Find the rate of change between (2, 10) and (5, 22).",

      solutionSteps: [
        "Identify input change: 5 - 2 = 3.",
        "Identify output change: 22 - 10 = 12.",
        "Divide output change by input change.",
        "12 / 3 = 4.",
      ],

      answer:
        "Rate of change = 4.",

      interpretation:
        "The output increases by 4 units for each increase of 1 in the input.",
    },

    {
      title:
        "Rate of Change from a Table",

      problem:
        "A table contains (1, 8), (2, 13), (3, 18), and (4, 23). Find the rate of change.",

      solutionSteps: [
        "Compare consecutive inputs: each increases by 1.",
        "Compare consecutive outputs: each increases by 5.",
        "Rate = 5 / 1.",
      ],

      answer:
        "Rate of change = 5.",

      interpretation:
        "The output increases by 5 for every additional input unit.",
    },

    {
      title:
        "Input Changes by More Than One",

      problem:
        "A table contains (2, 12), (5, 24), and (8, 36).",

      solutionSteps: [
        "From x = 2 to x = 5, input change is 3.",
        "Output change is 24 - 12 = 12.",
        "Rate = 12 / 3 = 4.",
        "Check the next interval.",
        "From 5 to 8, input change is 3.",
        "Output change is 36 - 24 = 12.",
        "Rate is again 4.",
      ],

      answer:
        "Constant rate of change = 4.",
    },

    {
      title:
        "Negative Rate of Change",

      problem:
        "A water tank contains 500 gallons at hour 0 and 380 gallons at hour 4. Find the average rate of change.",

      solutionSteps: [
        "Input change: 4 - 0 = 4 hours.",
        "Output change: 380 - 500 = -120 gallons.",
        "Rate = -120 / 4.",
      ],

      answer:
        "-30 gallons per hour.",

      interpretation:
        "The amount of water decreases by 30 gallons each hour on average over the interval.",
    },

    {
      title:
        "Zero Rate of Change",

      problem:
        "A storage fee remains $50 from month 2 through month 6. Find the rate of change.",

      solutionSteps: [
        "Output change = 50 - 50 = 0.",
        "Input change = 6 - 2 = 4.",
        "Rate = 0 / 4.",
      ],

      answer:
        "0 dollars per month.",

      interpretation:
        "The fee does not change over this interval.",
    },

    {
      title:
        "Read Rate from an Equation",

      problem:
        "For C(x) = 7x + 25, identify and interpret the rate of change if x represents items and C represents cost in dollars.",

      solutionSteps: [
        "The coefficient multiplying x is 7.",
        "In a linear function, this coefficient is the constant rate of change.",
        "Attach contextual units.",
      ],

      answer:
        "$7 per item.",

      interpretation:
        "Each additional item increases total cost by $7.",
    },

    {
      title:
        "Compare Two Equations",

      problem:
        "Compare A(x) = 4x + 10 and B(x) = 6x + 2.",

      solutionSteps: [
        "Function A has rate 4.",
        "Function B has rate 6.",
        "Compare the rates.",
      ],

      answer:
        "B changes faster because 6 > 4.",

      interpretation:
        "For each additional input unit, B's output increases by 6 while A's increases by 4.",
    },

    {
      title:
        "Compare an Equation and a Table",

      problem:
        "Company A has cost function A(x) = 12x + 40. Company B's table contains (1,65), (3,105), and (5,145). Which company's cost changes faster?",

      solutionSteps: [
        "Company A's rate is 12 dollars per unit.",
        "For Company B, compare (1,65) and (3,105).",
        "Output change = 105 - 65 = 40.",
        "Input change = 3 - 1 = 2.",
        "Company B's rate = 40 / 2 = 20.",
        "Compare 12 and 20.",
      ],

      answer:
        "Company B changes faster at $20 per unit.",

      interpretation:
        "Representation does not affect the ability to compare rates.",
    },

    {
      title:
        "Do Not Confuse Starting Value with Rate",

      problem:
        "A(x) = 3x + 100 and B(x) = 7x + 10. Which function has the greater rate of change?",

      solutionSteps: [
        "A begins at 100 but changes by 3 per input unit.",
        "B begins at 10 but changes by 7 per input unit.",
        "Compare rates rather than initial outputs.",
      ],

      answer:
        "Function B has the greater rate of change.",

      interpretation:
        "A larger starting value does not imply a larger rate.",
    },

    {
      title:
        "Real Transportation Rate",

      problem:
        "A vehicle travels from 30 miles at hour 1 to 150 miles at hour 4. Find the average rate of change in distance.",

      solutionSteps: [
        "Distance change = 150 - 30 = 120 miles.",
        "Time change = 4 - 1 = 3 hours.",
        "Rate = 120 / 3.",
      ],

      answer:
        "40 miles per hour.",

      interpretation:
        "Distance increases by an average of 40 miles for every hour over the interval.",
    },
  ],

  interactiveExploration: {
    title:
      "Rate Detective",

    description:
      "Compare several relationships without relying on appearance or starting values.",

    instructions: [
      "Create Function A with values (0,10), (1,14), (2,18), and (3,22).",
      "Calculate its rate of change.",
      "Create Function B with values (0,50), (2,56), (4,62), and (6,68).",
      "Calculate its rate of change.",
      "Decide which relationship changes faster.",
      "Explain why the larger starting output does not determine the answer.",
      "Create Function C with a negative rate.",
      "Create Function D with zero rate.",
      "Write an equation for at least one of your functions.",
      "Describe what the rate would mean in a real context.",
    ],

    questions: [
      "Which two changes must be calculated?",
      "Why do we divide rather than compare output changes alone?",
      "Why must units be attached?",
      "Can two functions have different starting values but the same rate?",
      "What does a negative rate look like in a table?",
      "What does zero rate look like?",
      "How can a table reveal whether the rate is constant?",
    ],

    expectedDiscovery:
      "A meaningful comparison requires output change relative to input change. Starting values and total outputs alone do not determine how quickly a relationship changes.",
  },

  realWorldApplications: [
    {
      field: "Transportation",
      application:
        "Distance per unit time describes speed.",
    },

    {
      field: "Business",
      application:
        "Cost per item, revenue growth, and production change can be compared using rates.",
    },

    {
      field: "Finance",
      application:
        "Account balances, expenses, and income may increase or decrease at measurable rates.",
    },

    {
      field: "Science",
      application:
        "Scientists measure temperature change, population change, reaction rates, and other changing quantities.",
    },

    {
      field: "Education",
      application:
        "Progress can be examined by comparing changes in performance over time.",
    },

    {
      field: "Data Analytics",
      application:
        "Analysts compare trends by examining how metrics change relative to time or another variable.",
    },
  ],

  aiConnection: {
    title:
      "Rate of Change in Data and AI",

    explanation:
      "Data systems often track how quickly measurements change. Rapid changes can indicate growth, decline, instability, unusual behavior, or events that require attention.",

    example:
      "A monitoring system might track transactions per hour. If the rate suddenly increases far beyond its normal pattern, the system may flag the activity for investigation.",

    uses: [
      "Trend detection",
      "Fraud monitoring",
      "Sensor monitoring",
      "Demand forecasting",
      "Performance analytics",
      "Anomaly detection",
    ],

    caution:
      "A large rate of change is not automatically good or bad. Interpretation depends on the meaning of the quantity and the context.",

    reflectionQuestion:
      "Why might an AI monitoring system care about sudden changes rather than only the current value?",
  },

  pythonLab: {
    title:
      "Calculate and Compare Rates with Python",

    objective:
      "Use Python to calculate rate of change between pairs of points.",

    code: `def rate_of_change(x1, y1, x2, y2):
    change_x = x2 - x1
    change_y = y2 - y1

    return change_y / change_x


camp_a = rate_of_change(
    3, 120,
    5, 200
)

camp_b = rate_of_change(
    2, 150,
    6, 270
)

print("Camp A:", camp_a, "dollars per day")
print("Camp B:", camp_b, "dollars per day")

if camp_a > camp_b:
    print("Camp A changes faster.")
elif camp_b > camp_a:
    print("Camp B changes faster.")
else:
    print("The rates are equal.")`,

    questions: [
      "What values represent Camp A's two points?",
      "What is Camp A's rate?",
      "What is Camp B's rate?",
      "Which relationship changes faster?",
      "Why does the function calculate change_y before dividing by change_x?",
      "What would happen if x1 and x2 were equal?",
      "Why are units printed with the result?",
    ],

    reflectionQuestions: [
      "How does the Python function follow exactly the same reasoning as the algebraic formula?",
      "Why should a program check for zero change in x before dividing?",
    ],

    extension:
      "Add a condition that prevents division by zero when x1 == x2.",
  },

  guidedPractice: [
    {
      question:
        "Find the rate of change between (1,5) and (4,17).",
      answer:
        "(17 - 5) / (4 - 1) = 12 / 3 = 4.",
      difficulty: "Foundation",
    },

    {
      question:
        "Find the rate of change between (2,20) and (6,8).",
      answer:
        "(8 - 20) / (6 - 2) = -12 / 4 = -3.",
      difficulty: "Negative rate",
    },

    {
      question:
        "A table contains (0,3), (2,13), and (4,23). Find the rate.",
      answer:
        "5.",
      difficulty: "Table",
    },

    {
      question:
        "Identify the rate of change in f(x) = 9x + 7.",
      answer:
        "9.",
      difficulty: "Equation",
    },

    {
      question:
        "A taxi cost increases from $20 at 4 miles to $32 at 8 miles. Find and interpret the rate.",
      answer:
        "$3 per mile.",
      difficulty: "Application",
    },

    {
      question:
        "Function A has rate 5. Function B has rate 8. Which increases faster?",
      answer:
        "Function B.",
      difficulty: "Comparison",
    },
  ],

  independentPractice: [
    {
      question:
        "Find the rate of change between (3,8) and (7,24).",
      answer:
        "4.",
    },

    {
      question:
        "Find the rate of change between (-2,10) and (2,18).",
      answer:
        "2.",
    },

    {
      question:
        "Find the rate of change between (1,15) and (5,3).",
      answer:
        "-3.",
    },

    {
      question:
        "A table contains (0,7), (3,16), (6,25). Find the constant rate of change.",
      answer:
        "3.",
    },

    {
      question:
        "Identify the rate in C(x) = 14x + 80.",
      answer:
        "14.",
    },

    {
      question:
        "Interpret the 14 in C(x) = 14x + 80 if x is number of tickets and C is total cost.",
      answer:
        "Total cost increases by $14 per ticket.",
    },

    {
      question:
        "Compare A(x) = 5x + 40 and B(x) = 8x + 5. Which changes faster?",
      answer:
        "B(x).",
    },

    {
      question:
        "A temperature falls from 72°F at 2 p.m. to 60°F at 8 p.m. Find the average rate of change.",
      answer:
        "-2°F per hour.",
    },

    {
      question:
        "Create a real situation with a positive rate of change.",
      answer:
        "Answers will vary.",
    },

    {
      question:
        "Create a real situation with a negative rate of change.",
      answer:
        "Answers will vary.",
    },
  ],

  commonMistakes: [
    {
      mistake:
        "Dividing change in input by change in output.",
      correction:
        "Rate of change is output change divided by input change.",
    },

    {
      mistake:
        "Subtracting coordinates in inconsistent orders.",
      correction:
        "If you calculate y₂ - y₁, also calculate x₂ - x₁ in the same point order.",
    },

    {
      mistake:
        "Comparing only output differences.",
      correction:
        "Output change must be considered relative to input change.",
    },

    {
      mistake:
        "Choosing the function with the larger starting value as having the larger rate.",
      correction:
        "Starting value and rate of change measure different features.",
    },

    {
      mistake:
        "Dropping the negative sign.",
      correction:
        "A negative rate communicates decreasing output and must be interpreted.",
    },

    {
      mistake:
        "Reporting a rate without units.",
      correction:
        "State output units per input unit whenever the context provides units.",
    },

    {
      mistake:
        "Assuming every function has a constant rate of change.",
      correction:
        "Constant rate of change is a special property of linear relationships.",
    },

    {
      mistake:
        "Dividing by zero when two points have the same input.",
      correction:
        "If x₂ - x₁ = 0, this rate calculation is undefined.",
    },
  ],

  discussionQuestions: [
    "Why do we compare output change to input change?",
    "What does a positive rate tell us?",
    "What does a negative rate tell us?",
    "What does a zero rate tell us?",
    "Why can two functions with very different starting values have the same rate?",
    "Why does a larger output not necessarily mean a faster-changing function?",
    "How can rate of change be identified from a table?",
    "How can it be identified from an equation?",
    "Why are units important?",
    "Where do you encounter rates in everyday life?",
    "How might rate of change help detect unusual data behavior?",
  ],

  formativeAssessment: {
    passingScore: 8,

    questions: [
      {
        type: "definition",
        prompt:
          "What does rate of change measure?",
        answer:
          "The change in output per unit of change in input.",
      },

      {
        type: "calculation",
        prompt:
          "Find the rate of change between (2,5) and (6,17).",
        answer:
          "3.",
      },

      {
        type: "negative",
        prompt:
          "Find the rate between (1,12) and (5,4).",
        answer:
          "-2.",
      },

      {
        type: "table",
        prompt:
          "A table contains (0,6), (2,14), and (4,22). Find the rate.",
        answer:
          "4.",
      },

      {
        type: "equation",
        prompt:
          "Identify the rate of change in f(x) = 7x - 3.",
        answer:
          "7.",
      },

      {
        type: "interpretation",
        prompt:
          "A cost function has rate 12 where input is items and output is dollars. Interpret the rate.",
        answer:
          "Cost increases by $12 per item.",
      },

      {
        type: "comparison",
        prompt:
          "A(x) = 4x + 100 and B(x) = 6x + 10. Which has the greater rate?",
        answer:
          "B.",
      },

      {
        type: "reasoning",
        prompt:
          "Why does a larger starting value not imply a larger rate of change?",
        sampleAnswer:
          "Starting value describes where the function begins, while rate describes how quickly its output changes.",
      },

      {
        type: "units",
        prompt:
          "Distance changes by 150 miles over 3 hours. State the rate with units.",
        answer:
          "50 miles per hour.",
      },

      {
        type: "creation",
        prompt:
          "Create two relationships and explain which has the larger rate of change.",
        sampleAnswer:
          "Answers will vary.",
      },
    ],
  },

  researchExtension: {
    title:
      "Investigate a Real Rate of Change",

    description:
      "Find a real dataset or situation where one quantity changes relative to another.",

    researchQuestion:
      "What can rate of change reveal that individual data values cannot?",

    applicationOptions: [
      "Fuel prices over time",
      "Population growth",
      "Temperature change",
      "Travel distance",
      "Business revenue",
      "Sports performance",
      "Electricity use",
      "Water consumption",
      "Website traffic",
    ],

    task:
      "Choose a real relationship. Identify two or more input-output points, calculate rate of change, state units, determine whether the relationship is increasing or decreasing, and explain what the rate means.",

    requiredEvidence: [
      "Real-world context",
      "Input quantity",
      "Output quantity",
      "At least two data points",
      "Change in input",
      "Change in output",
      "Rate calculation",
      "Units",
      "Written interpretation",
    ],
  },

  portfolioArtifact: {
    title:
      "Rate-of-Change Comparison Studio",

    description:
      "Design or investigate two real-world functions and compare how rapidly they change.",

    requiredSections: [
      "Two real-world relationships",
      "Input definitions",
      "Output definitions",
      "Units",
      "At least three points for each relationship",
      "Tables",
      "Rate calculations",
      "Positive, negative, or zero classification",
      "Comparison of rates",
      "Equation if appropriate",
      "Graph or graph description",
      "Python verification",
      "Decision or recommendation",
    ],

    requiredEvidence: [
      "Accurate rates",
      "Correct units",
      "Multiple representations",
      "Meaningful comparison",
      "Python connection",
      "Written interpretation",
    ],
  },

  growthIndicators: [
    "Identifies input and output quantities.",
    "Calculates changes accurately.",
    "Computes rate of change from points.",
    "Computes rate from tables.",
    "Identifies rate in linear equations.",
    "Interprets positive rates.",
    "Interprets negative rates.",
    "Interprets zero rates.",
    "Uses appropriate units.",
    "Distinguishes starting value from rate.",
    "Compares relationships across representations.",
    "Uses Python to calculate rates.",
    "Creates original rate-of-change models.",
  ],

  lumineryGuidance: {
    message:
      "Do not compare outputs alone. Ask how much the output changed compared with how much the input changed.",

    recommendation:
      "Identify quantities → choose two points → Δoutput → Δinput → divide → attach units → interpret → compare.",

    prompt:
      "For every one unit of input change, how much does the output change?",

    coachingQuestions: [
      "What is the input quantity?",
      "What is the output quantity?",
      "Which two points are you comparing?",
      "How much did the input change?",
      "How much did the output change?",
      "Are you subtracting in a consistent order?",
      "What happens when you divide the two changes?",
      "What units should the result have?",
      "Is the rate positive, negative, or zero?",
      "What does that sign mean?",
      "Is the rate constant across the table?",
      "Are you confusing starting value with rate?",
      "Which of two relationships changes faster?",
      "What does that comparison mean in the real situation?",
    ],
  },

  summary: [
    "Rate of change measures output change relative to input change.",
    "The formula is change in output divided by change in input.",
    "Two ordered pairs can be used to calculate a rate.",
    "Tables can reveal constant rates of change.",
    "Positive rates indicate increasing outputs.",
    "Negative rates indicate decreasing outputs.",
    "Zero rates indicate constant outputs.",
    "Units explain what a rate means.",
    "In a linear equation f(x) = mx + b, m is the constant rate of change.",
    "Starting value and rate of change describe different properties.",
    "Functions represented in different forms can still be compared by their rates.",
    "Python can automate rate calculations and comparisons.",
  ],

  reflection: [
    "How would you explain rate of change without using a formula?",
    "Why is output change divided by input change?",
    "What does a negative rate tell you?",
    "Why are units essential?",
    "How is starting value different from rate?",
    "How can a table reveal whether a rate is constant?",
    "How can two functions with different starting values have the same rate?",
    "Which real-world rate is most meaningful to you?",
    "How could rate of change help a business make a decision?",
    "How might an AI monitoring system use changes over time?",
  ],

  previousLesson: {
    moduleNumber: 4,
    lessonNumber: 5,
    slug: "representing-functions-multiple-ways",
    title:
      "Representing Functions with Tables, Graphs, Equations, and Mappings",
  },

  nextLesson: {
    moduleNumber: 4,
    lessonNumber: 7,
    slug: "real-world-function-modeling",
    title:
      "Real-World Function Modeling",
  },
};

export default lesson06;