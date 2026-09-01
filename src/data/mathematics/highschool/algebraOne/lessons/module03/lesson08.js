const lesson08 = {
  id: "algebra-one-module-03-lesson-08",
  slug: "module-3-constraint-modeling-synthesis",

  courseId: "algebra-1",
  courseTitle: "Algebra I",

  moduleNumber: 3,
  moduleTitle: "Linear Inequalities",
  lessonNumber: 8,

  title:
    "Module 3 Constraint Modeling Synthesis",

  subtitle:
    "Synthesize inequalities, graphs, multiple constraints, absolute-value tolerances, verification, interpretation, and real-world decision making in a final creator project.",

  duration: "90–110 minutes",
  level: "Synthesis",
  status: "Available",

  essentialQuestion:
    "How can inequalities help us design, analyze, and defend decisions when real systems have limits and constraints?",

  bigIdea:
    "Inequalities are decision-making models. A strong mathematical model identifies the quantity being constrained, represents its boundaries correctly, solves logically, communicates the solution visually, tests the result, and interprets what the solution means in the original situation.",

  whyThisLessonExists: {
    title:
      "From Solving Inequalities to Designing Systems",

    introduction:
      "Throughout this module, you have learned that inequalities are more than symbols such as <, >, ≤, and ≥. They describe budgets, safety limits, eligibility rules, operating ranges, tolerances, capacity restrictions, and decision boundaries.",

    centralProblem:
      "Can you take a complex real-world situation, determine the important constraints, build the mathematics, verify the solution, and explain what decision should be made?",

    purpose:
      "This final lesson brings the entire module together. Students move from solving teacher-created inequalities to designing and defending their own constraint-based mathematical systems.",
  },

  problemFirst: {
    title:
      "Designing a Community Technology Camp",

    scenario:
      "A community organization is planning a one-day technology camp. The organization has a total budget of $2,400. The facility costs $600, equipment rental costs $300, and lunch costs $25 per student. The room can safely hold no more than 48 students. The organization wants at least 30 students to participate so that the event reaches enough families. Each student should be between 12 and 17 years old, inclusive. The camp shirts are blue, the event begins at 8:30 a.m., and the organization has used the facility twice before.",

    questions: [
      "Which quantities are constrained?",
      "Which details are relevant to the mathematical model?",
      "Which details are irrelevant?",
      "Choose variables for the unknown quantities.",
      "Write the budget inequality.",
      "Solve the budget inequality.",
      "Write the room-capacity inequality.",
      "Write the minimum-participation inequality.",
      "Combine the participation constraints.",
      "What is the maximum number of students allowed by the budget?",
      "What is the maximum number allowed by the room?",
      "Which constraint is more restrictive?",
      "Write the age eligibility constraint.",
      "Graph the feasible student-count interval.",
      "Test whether 35 students are feasible.",
      "Test whether 50 students are feasible.",
      "What final recommendation would you give the organizers?",
    ],

    expectedInsight:
      "Let s represent the number of students. The budget is 600 + 300 + 25s ≤ 2400, so 25s ≤ 1500 and s ≤ 60. Room capacity gives s ≤ 48, and the participation goal gives s ≥ 30. Therefore the actual feasible range is 30 ≤ s ≤ 48, with whole-number values only. The room capacity is more restrictive than the budget. Student age must satisfy 12 ≤ a ≤ 17.",
  },

  visualModels: [
    {
      id: "constraint-funnel",
      type: "comparison",

      title:
        "One Situation, Multiple Constraints",

      description:
        "A real system may contain several mathematical rules at the same time. The feasible solution must satisfy all required constraints.",

      items: [
        {
          label: "Budget Constraint",
          symbol: "900 + 25s ≤ 2400",
          meaning:
            "The total event cost cannot exceed the available budget.",
        },

        {
          label: "Participation Constraint",
          symbol: "30 ≤ s ≤ 48",
          meaning:
            "The event needs at least 30 students while room capacity limits attendance to 48.",
        },
      ],
    },

    {
      id: "feasible-student-range",
      type: "compoundNumberLine",

      title:
        "Feasible Attendance: 30 ≤ s ≤ 48",

      description:
        "After considering the minimum participation requirement and maximum capacity, valid attendance lies inside this interval.",

      min: 20,
      max: 60,

      lowerBoundary: 30,
      upperBoundary: 48,

      lowerInclusive: true,
      upperInclusive: true,

      variable: "s",

      interpretation:
        "The endpoints are included. Because s represents students, realistic solutions are whole numbers from 30 through 48.",
    },

    {
      id: "age-eligibility-range",
      type: "compoundNumberLine",

      title:
        "Age Eligibility: 12 ≤ a ≤ 17",

      description:
        "Participants must fall within an inclusive age range.",

      min: 8,
      max: 21,

      lowerBoundary: 12,
      upperBoundary: 17,

      lowerInclusive: true,
      upperInclusive: true,

      variable: "a",

      interpretation:
        "Students ages 12, 13, 14, 15, 16, and 17 satisfy the eligibility requirement.",
    },

    {
      id: "one-sided-constraint-review",
      type: "numberLine",

      title:
        "Maximum Constraint: x ≤ 48",

      description:
        "A maximum creates a boundary and all acceptable values lie on one side.",

      min: 20,
      max: 60,
      boundary: 48,
      operator: "<=",

      leftLabel: "within capacity",
      rightLabel: "over capacity",

      interpretation:
        "48 is included because the room can hold exactly 48 students, but values above 48 violate the safety constraint.",
    },

    {
      id: "module-concept-map",
      type: "comparison",

      title:
        "Module 3 Reasoning Map",

      description:
        "Different inequality structures answer different kinds of constraint questions.",

      items: [
        {
          label: "Single Boundary",
          symbol: "x ≤ a",
          meaning:
            "Use when there is one maximum or minimum.",
        },

        {
          label: "Two Boundaries",
          symbol: "a ≤ x ≤ b",
          meaning:
            "Use when acceptable values must remain inside a range.",
        },

        {
          label: "Outside a Range",
          symbol: "x < a OR x > b",
          meaning:
            "Use when either extreme produces a warning or unacceptable condition.",
        },

        {
          label: "Tolerance",
          symbol: "|x - c| ≤ d",
          meaning:
            "Use when values must stay within a fixed distance of a target.",
        },
      ],
    },
  ],

  learningObjectives: [
    "Identify mathematical constraints in complex real-world situations.",
    "Distinguish relevant information from irrelevant information.",
    "Define variables clearly with units.",
    "Translate verbal restrictions into inequalities.",
    "Solve one-step and multi-step inequalities.",
    "Reverse inequality signs correctly when multiplying or dividing by negative values.",
    "Graph one-variable inequality solutions.",
    "Interpret open and closed boundaries.",
    "Combine multiple constraints using AND and OR.",
    "Solve and interpret compound inequalities.",
    "Use absolute-value inequalities to represent tolerances.",
    "Test candidate values against original constraints.",
    "Identify the most restrictive constraint in a system.",
    "Distinguish continuous mathematical solutions from realistic discrete solutions.",
    "Explain decisions using mathematical evidence.",
    "Create an original constraint-modeling project.",
  ],

  prerequisiteKnowledge: [
    "Inequality symbols",
    "Variables and expressions",
    "Solving equations",
    "One-step inequalities",
    "Multi-step inequalities",
    "Sign reversal",
    "Number-line graphs",
    "Compound inequalities",
    "AND and OR logic",
    "Absolute value as distance",
    "Tolerance modeling",
    "Substitution and verification",
  ],

  vocabulary: [
    {
      term: "Constraint",
      definition:
        "A mathematical restriction that limits which values are possible or acceptable.",
    },

    {
      term: "Feasible Solution",
      definition:
        "A value satisfying all required constraints of a problem.",
    },

    {
      term: "Feasible Region",
      definition:
        "The set of all values that satisfy the required constraints.",
    },

    {
      term: "Restrictive Constraint",
      definition:
        "A condition that limits the solution set more strongly than another condition.",
    },

    {
      term: "Decision Boundary",
      definition:
        "A value separating acceptable outcomes from unacceptable outcomes.",
    },

    {
      term: "Verification",
      definition:
        "Testing a proposed solution in the original conditions.",
    },

    {
      term: "Discrete Quantity",
      definition:
        "A quantity that can take separate countable values, such as the number of students.",
    },

    {
      term: "Continuous Quantity",
      definition:
        "A quantity that may take any value in an interval, such as temperature or length.",
    },
  ],

  formulas: [
    {
      name: "Single Constraint",
      formula:
        "expression ≤ maximum",
      meaning:
        "Use when a quantity cannot exceed a limit.",
    },

    {
      name: "Minimum Constraint",
      formula:
        "expression ≥ minimum",
      meaning:
        "Use when a quantity must reach or exceed a required level.",
    },

    {
      name: "Bounded Feasible Range",
      formula:
        "minimum ≤ x ≤ maximum",
      meaning:
        "Use when both lower and upper requirements must hold.",
    },

    {
      name: "Outside Alert Region",
      formula:
        "x < a OR x > b",
      meaning:
        "Use when either extreme violates a desired range.",
    },

    {
      name: "Tolerance Constraint",
      formula:
        "|x - target| ≤ tolerance",
      meaning:
        "Use when measurements must remain close to a target.",
    },

    {
      name: "Constraint Modeling Process",
      formula:
        "Context → Variable → Constraints → Solve → Graph → Test → Interpret → Decide",
      meaning:
        "A complete inequality model connects algebra to an actionable conclusion.",
    },
  ],

  workedExamples: [
    {
      title:
        "Budget and Capacity Together",

      problem:
        "A school club has $1,500 for a trip. Transportation costs $500 plus $40 per student. The vehicle can carry at most 28 students. What student counts are possible if at least 15 students must attend?",

      solutionSteps: [
        "Let s represent the number of students.",
        "Budget model: 500 + 40s ≤ 1500.",
        "Subtract 500: 40s ≤ 1000.",
        "Divide by 40: s ≤ 25.",
        "Vehicle constraint: s ≤ 28.",
        "Minimum attendance: s ≥ 15.",
        "The budget limit of 25 is more restrictive than the vehicle limit of 28.",
        "Combine the effective conditions: 15 ≤ s ≤ 25.",
        "Because students are counted, s must be a whole number.",
      ],

      answer:
        "15 ≤ s ≤ 25, where s is a whole number.",

      interpretation:
        "The club can take between 15 and 25 students.",
    },

    {
      title:
        "Compare Two Maximum Constraints",

      problem:
        "A workshop budget allows no more than 60 participants, but the fire-code limit is 45 participants. Which constraint determines the maximum attendance?",

      solutionSteps: [
        "Budget constraint: p ≤ 60.",
        "Safety constraint: p ≤ 45.",
        "Both must be satisfied.",
        "A value satisfying p ≤ 45 automatically satisfies p ≤ 60.",
        "Therefore the safety constraint is more restrictive.",
      ],

      answer:
        "p ≤ 45",

      interpretation:
        "The actual maximum attendance is 45.",
    },

    {
      title:
        "Multi-Step Constraint",

      problem:
        "A business can spend no more than $3,000 on advertising. A design fee costs $750, and each advertising package costs $125. How many packages can be purchased?",

      solutionSteps: [
        "Let p represent packages.",
        "Write 750 + 125p ≤ 3000.",
        "Subtract 750: 125p ≤ 2250.",
        "Divide by 125: p ≤ 18.",
        "Because packages are counted, p must be a nonnegative whole number.",
      ],

      answer:
        "At most 18 packages.",
    },

    {
      title:
        "Review Sign Reversal",

      problem:
        "Solve 12 - 4x > 28.",

      solutionSteps: [
        "Subtract 12: -4x > 16.",
        "Divide by -4.",
        "Reverse the inequality because division is by a negative number.",
        "x < -4.",
        "Test x = -5: 12 - 4(-5) = 32, and 32 > 28 is true.",
        "Test x = 0: 12 > 28 is false.",
      ],

      answer:
        "x < -4",
    },

    {
      title:
        "Operating Range",

      problem:
        "A machine works properly only when temperature is at least 15°C but below 40°C.",

      solutionSteps: [
        "Let T represent temperature.",
        "Minimum condition: T ≥ 15.",
        "Maximum condition: T < 40.",
        "Both conditions must be true.",
        "Combine as 15 ≤ T < 40.",
      ],

      answer:
        "15 ≤ T < 40",

      interpretation:
        "15°C is allowed, but 40°C is not.",
    },

    {
      title:
        "Outside a Safe Range",

      problem:
        "A warning system activates if pressure drops below 20 psi or rises above 80 psi.",

      solutionSteps: [
        "Low-pressure condition: p < 20.",
        "High-pressure condition: p > 80.",
        "Either condition triggers the warning.",
        "Use OR.",
      ],

      answer:
        "p < 20 OR p > 80",
    },

    {
      title:
        "Tolerance Model",

      problem:
        "A component should measure 100 mm with an allowed tolerance of 1.5 mm.",

      solutionSteps: [
        "Target value: 100.",
        "Tolerance: 1.5.",
        "Absolute-value model: |x - 100| ≤ 1.5.",
        "Lower boundary: 98.5.",
        "Upper boundary: 101.5.",
      ],

      answer:
        "|x - 100| ≤ 1.5, equivalent to 98.5 ≤ x ≤ 101.5.",

      interpretation:
        "Measurements from 98.5 mm through 101.5 mm are acceptable.",
    },

    {
      title:
        "Check a Candidate Decision",

      problem:
        "A project requires 20 ≤ n ≤ 35 participants. The coordinator proposes 38 participants. Is the proposal feasible?",

      solutionSteps: [
        "Check the lower condition: 38 ≥ 20 is true.",
        "Check the upper condition: 38 ≤ 35 is false.",
        "An AND constraint requires both conditions to be true.",
      ],

      answer:
        "No.",

      interpretation:
        "38 violates the maximum capacity even though it satisfies the minimum.",
    },

    {
      title:
        "Continuous vs Discrete Solutions",

      problem:
        "Solving a budget inequality produces s ≤ 12.6, where s is the number of students. What is the realistic maximum?",

      solutionSteps: [
        "The algebraic boundary is 12.6.",
        "Students cannot be counted as fractional people.",
        "13 students would exceed the calculated maximum.",
        "Therefore the largest feasible whole number is 12.",
      ],

      answer:
        "12 students.",

      interpretation:
        "Context determines how the algebraic result must be interpreted.",
    },
  ],

  interactiveExploration: {
    title:
      "Constraint Detective",

    description:
      "Analyze a system one constraint at a time and determine how each new restriction changes the feasible solution set.",

    instructions: [
      "Start with all nonnegative values of x.",
      "Add the constraint x ≥ 10.",
      "Draw or describe the new feasible region.",
      "Add x ≤ 50.",
      "Describe how the feasible region changes.",
      "Add x ≤ 40.",
      "Identify which maximum constraint is now more restrictive.",
      "Add the condition that x must be a whole number.",
      "List several feasible values.",
      "Test x = 9, 10, 25, 40, 41, and 50.",
      "Create another constraint that would reduce the feasible region again.",
    ],

    questions: [
      "What happens to a feasible region as more AND constraints are added?",
      "Can a new constraint make an earlier constraint irrelevant?",
      "Can several individually reasonable constraints produce no feasible solutions?",
      "Why must a modeler test the combined system rather than each rule separately?",
      "How does a graph help reveal the final feasible range?",
    ],

    expectedDiscovery:
      "Each required constraint can reduce the set of feasible values. The final solution must satisfy every required condition simultaneously.",
  },

  realWorldApplications: [
    {
      field: "Business",
      application:
        "Companies balance budgets, staffing minimums, production limits, delivery times, and capacity constraints.",
    },

    {
      field: "Engineering",
      application:
        "Engineers design systems that must remain within safety, temperature, pressure, size, and tolerance limits.",
    },

    {
      field: "Transportation",
      application:
        "Vehicles and routes have passenger, weight, speed, distance, and fuel constraints.",
    },

    {
      field: "Education",
      application:
        "Programs use age ranges, score requirements, enrollment capacities, attendance requirements, and budgets.",
    },

    {
      field: "Finance",
      application:
        "Financial decisions involve credit limits, spending constraints, risk thresholds, income requirements, and acceptable ranges.",
    },

    {
      field: "Data Science",
      application:
        "Analysts use thresholds and acceptable ranges to classify observations and detect unusual values.",
    },

    {
      field: "Artificial Intelligence",
      application:
        "Rule-based and optimization systems make decisions subject to multiple constraints and thresholds.",
    },
  ],

  aiConnection: {
    title:
      "Constraint-Based Decision Making in AI",

    explanation:
      "AI and automated systems often operate under constraints. A system may recommend an action only when several conditions are satisfied simultaneously.",

    example:
      "Imagine a delivery-planning system. A route may be accepted only if total distance ≤ 120 miles, total driving time ≤ 4 hours, vehicle weight ≤ its safety limit, and delivery arrival time falls inside the customer's required window.",

    formula:
      "Feasible decision = satisfies Constraint 1 AND Constraint 2 AND Constraint 3 ...",

    uses: [
      "Scheduling",
      "Routing",
      "Risk management",
      "Resource allocation",
      "Fraud monitoring",
      "Manufacturing",
      "Optimization",
      "Eligibility systems",
    ],

    caution:
      "An automated decision can be mathematically correct for the rules it was given but still produce a poor result if the rules themselves are incomplete or poorly designed.",

    reflectionQuestion:
      "Why should humans inspect both the mathematical solution and the assumptions used to create an automated decision rule?",
  },

  pythonLab: {
    title:
      "Build a Constraint Checker",

    objective:
      "Use Python to test whether candidate values satisfy several conditions simultaneously.",

    code: `budget = 2400
fixed_cost = 900
cost_per_student = 25
room_capacity = 48
minimum_students = 30

candidates = [25, 30, 35, 48, 50, 60]

for students in candidates:
    total_cost = fixed_cost + cost_per_student * students

    budget_ok = total_cost <= budget
    minimum_ok = students >= minimum_students
    capacity_ok = students <= room_capacity

    feasible = (
        budget_ok
        and minimum_ok
        and capacity_ok
    )

    print(
        "Students:", students,
        "Cost:", total_cost,
        "Feasible:", feasible
    )`,

    questions: [
      "Which candidate attendance values are feasible?",
      "Why does 25 fail?",
      "Why does 30 pass?",
      "Why does 48 pass?",
      "Why does 50 fail?",
      "Which constraints are being connected with AND?",
      "What is the maximum feasible student count?",
      "How does the code correspond to the algebraic model?",
    ],

    reflectionQuestions: [
      "Why is it useful to keep each constraint in a separate Boolean variable?",
      "How could this program be expanded to include an age restriction or equipment limit?",
      "Why should the mathematical model be designed before writing the program?",
    ],

    extension:
      "Add a fourth constraint requiring at least 2 instructors for every 15 students. Decide how you would represent and test that requirement.",
  },

  guidedPractice: [
    {
      question:
        "A room requires at least 10 participants but allows at most 35. Write the compound inequality.",
      answer:
        "10 ≤ p ≤ 35.",
      difficulty: "Foundation",
    },

    {
      question:
        "A company has $5,000. Fixed costs are $1,000 and each unit costs $200. Write and solve the maximum-production inequality.",
      answer:
        "1000 + 200u ≤ 5000; 200u ≤ 4000; u ≤ 20.",
      difficulty: "Modeling",
    },

    {
      question:
        "Solve -5x ≥ 25.",
      answer:
        "x ≤ -5.",
      difficulty: "Sign reversal",
    },

    {
      question:
        "A sensor works properly from 20 through 70 inclusive. Write the compound inequality.",
      answer:
        "20 ≤ s ≤ 70.",
      difficulty: "Compound inequality",
    },

    {
      question:
        "An alert activates below 20 or above 70. Write the OR condition.",
      answer:
        "s < 20 OR s > 70.",
      difficulty: "Logic",
    },

    {
      question:
        "A manufactured item targets 40 grams with tolerance ±2 grams. Write the absolute-value and compound forms.",
      answer:
        "|w - 40| ≤ 2; 38 ≤ w ≤ 42.",
      difficulty: "Tolerance",
    },
  ],

  independentPractice: [
    {
      question:
        "A fundraiser has $2,000. Venue cost is $500 and meals cost $30 per guest. Write and solve the inequality for the maximum number of guests.",
      answer:
        "500 + 30g ≤ 2000; 30g ≤ 1500; g ≤ 50.",
    },

    {
      question:
        "If the room in the previous problem holds only 42 guests, what becomes the true maximum?",
      answer:
        "42 guests because the room constraint is more restrictive.",
    },

    {
      question:
        "Solve 7 - 3x ≥ 25.",
      answer:
        "-3x ≥ 18; x ≤ -6.",
    },

    {
      question:
        "Solve -4 < 2x + 6 ≤ 18.",
      answer:
        "Subtract 6: -10 < 2x ≤ 12. Divide by 2: -5 < x ≤ 6.",
    },

    {
      question:
        "Write an inequality for a temperature that must be above -10°C but no more than 25°C.",
      answer:
        "-10 < T ≤ 25.",
    },

    {
      question:
        "Write an OR inequality describing temperatures outside the range -10 ≤ T ≤ 25.",
      answer:
        "T < -10 OR T > 25.",
    },

    {
      question:
        "Solve |x - 50| ≤ 4.",
      answer:
        "46 ≤ x ≤ 54.",
    },

    {
      question:
        "Solve |x - 50| > 4.",
      answer:
        "x < 46 OR x > 54.",
    },

    {
      question:
        "A solution gives n ≤ 18.7, where n represents buses. What is the largest possible whole-number value?",
      answer:
        "18 buses.",
    },

    {
      question:
        "Create a real-world system involving at least three constraints and identify its feasible solution set.",
      answer:
        "Answers will vary.",
    },
  ],

  commonMistakes: [
    {
      mistake:
        "Solving only one constraint in a multi-constraint problem.",
      correction:
        "The final feasible solution must satisfy every required condition.",
    },

    {
      mistake:
        "Using every number mentioned in the problem.",
      correction:
        "Identify which information actually affects the quantity being modeled.",
    },

    {
      mistake:
        "Choosing a variable without defining its meaning or units.",
      correction:
        "State clearly what the variable represents before constructing equations or inequalities.",
    },

    {
      mistake:
        "Forgetting to reverse the inequality when dividing by a negative number.",
      correction:
        "Negative multiplication or division reverses order.",
    },

    {
      mistake:
        "Graphing before isolating the variable.",
      correction:
        "Solve first, then graph the final solution.",
    },

    {
      mistake:
        "Ignoring whether boundaries are included.",
      correction:
        "Use context and the inequality symbol to determine open or closed boundaries.",
    },

    {
      mistake:
        "Treating AND and OR as interchangeable.",
      correction:
        "AND requires all listed conditions; OR requires at least one.",
    },

    {
      mistake:
        "Reporting fractional people, vehicles, or packages.",
      correction:
        "Apply contextual restrictions after solving the algebraic inequality.",
    },

    {
      mistake:
        "Giving a numerical answer without interpretation.",
      correction:
        "Explain what the solution means in the original situation and what decision follows.",
    },

    {
      mistake:
        "Failing to verify the final recommendation.",
      correction:
        "Test important boundary and candidate values in the original constraints.",
    },
  ],

  discussionQuestions: [
    "Why are inequalities better than equations for many real decision problems?",
    "How does adding a constraint affect the feasible solution set?",
    "What does it mean for one constraint to be more restrictive than another?",
    "Why should irrelevant information be ignored rather than forced into a model?",
    "Why is a mathematically valid decimal answer sometimes unrealistic?",
    "What is the difference between solving a model and making a decision from the model?",
    "How can graphs reveal whether two constraints overlap?",
    "Where do absolute-value tolerances appear in real systems?",
    "How are AND and OR used in automated decisions?",
    "What makes a mathematical model trustworthy?",
  ],

  formativeAssessment: {
    passingScore: 8,

    questions: [
      {
        type: "modeling",
        prompt:
          "A theater holds no more than 300 people. Write the inequality.",
        answer:
          "p ≤ 300.",
      },

      {
        type: "modeling",
        prompt:
          "A program requires at least 18 participants.",
        answer:
          "p ≥ 18.",
      },

      {
        type: "compound",
        prompt:
          "Combine the conditions p ≥ 18 and p ≤ 40.",
        answer:
          "18 ≤ p ≤ 40.",
      },

      {
        type: "solving",
        prompt:
          "Solve 400 + 50x ≤ 1400.",
        answer:
          "50x ≤ 1000, so x ≤ 20.",
      },

      {
        type: "sign-reversal",
        prompt:
          "Solve -6x > 30.",
        answer:
          "x < -5.",
      },

      {
        type: "graphing",
        prompt:
          "Describe the graph of x ≥ 7.",
        answer:
          "Closed point at 7 and shading right.",
      },

      {
        type: "logic",
        prompt:
          "A warning occurs below 5 OR above 25. Write the inequality.",
        answer:
          "x < 5 OR x > 25.",
      },

      {
        type: "absolute-value",
        prompt:
          "Write and solve an inequality meaning within 3 units of 20.",
        answer:
          "|x - 20| ≤ 3; 17 ≤ x ≤ 23.",
      },

      {
        type: "verification",
        prompt:
          "Does x = 10 satisfy 6 ≤ x < 10?",
        answer:
          "No. The upper boundary excludes 10.",
      },

      {
        type: "interpretation",
        prompt:
          "Solving a capacity problem gives n ≤ 14.8 where n is the number of teams. What is the realistic maximum?",
        answer:
          "14 teams.",
      },

      {
        type: "synthesis",
        prompt:
          "Explain the complete process for solving a real-world constraint problem.",
        sampleAnswer:
          "Define the variable, identify relevant constraints, build inequalities, solve, graph if useful, test values, apply contextual restrictions, interpret the result, and make a decision.",
      },
    ],
  },

  researchExtension: {
    title:
      "Constraint Systems in the Real World",

    description:
      "Investigate a real organization, technology, machine, business process, or public system that operates under several numerical restrictions.",

    researchQuestion:
      "How do multiple mathematical constraints influence real decisions?",

    applicationOptions: [
      "Airline baggage limits",
      "Manufacturing tolerances",
      "School enrollment",
      "Event planning",
      "Transportation systems",
      "Business budgeting",
      "Environmental monitoring",
      "Warehouse operations",
      "Data-center temperature control",
      "AI decision systems",
    ],

    task:
      "Identify at least three real constraints. Define variables, represent each condition mathematically, identify the feasible solution region, test several values, and explain which constraint is most restrictive.",

    requiredEvidence: [
      "Source or context description",
      "Clearly defined variables",
      "At least three constraints",
      "Correct inequalities",
      "Graph or visual representation",
      "Feasible solution set",
      "Boundary analysis",
      "Test values",
      "Most restrictive constraint",
      "Final interpretation",
    ],
  },

  portfolioArtifact: {
    title:
      "Module 3 Creator Project: Design a Constraint-Based Decision System",

    description:
      "Design an original real-world system in which mathematics must determine which choices are feasible, acceptable, safe, or eligible.",

    requiredSections: [
      "Project title",
      "Real-world scenario",
      "Decision that must be made",
      "Variable definitions",
      "Relevant information",
      "At least one piece of intentionally irrelevant information",
      "At least three mathematical constraints",
      "At least one multi-step inequality",
      "At least one number-line visualization",
      "At least one compound inequality",
      "At least one AND or OR decision",
      "At least one boundary-inclusion explanation",
      "Verification using test values",
      "Realistic contextual restrictions",
      "Feasible solution set",
      "Final recommendation",
      "Reflection on model limitations",
    ],

    challengeOptions: [
      "Include an absolute-value tolerance.",
      "Implement the constraints in Python.",
      "Compare two competing plans.",
      "Identify which constraint becomes binding first.",
      "Create an interactive calculator.",
      "Build a small dashboard showing feasible and infeasible decisions.",
    ],

    suggestedContexts: [
      "Community event",
      "School program",
      "Robotics competition",
      "Business startup",
      "Transportation system",
      "Farm operation",
      "Manufacturing process",
      "Sports tournament",
      "AI monitoring system",
      "Environmental project",
    ],

    requiredEvidence: [
      "Original context",
      "Mathematical reasoning",
      "Correct inequality models",
      "Visual representation",
      "Verification",
      "Written interpretation",
      "Decision supported by evidence",
      "Creator reflection",
    ],
  },

  growthIndicators: [
    "Identifies constraints independently.",
    "Separates relevant and irrelevant information.",
    "Defines variables precisely.",
    "Builds inequalities from words.",
    "Solves multi-step inequalities accurately.",
    "Uses sign reversal correctly.",
    "Graphs solution sets correctly.",
    "Distinguishes strict and inclusive boundaries.",
    "Uses AND and OR correctly.",
    "Interprets compound inequalities.",
    "Uses absolute value as distance.",
    "Models tolerances.",
    "Finds feasible solution regions.",
    "Identifies restrictive constraints.",
    "Distinguishes discrete and continuous quantities.",
    "Tests candidate solutions.",
    "Explains decisions using mathematical evidence.",
    "Creates original constraint systems.",
  ],

  lumineryGuidance: {
    message:
      "A strong model does not begin by manipulating symbols. It begins by understanding the decision and the constraints.",

    recommendation:
      "Situation → quantity → variable → constraint → inequality → solve → visualize → verify → interpret → decide.",

    prompt:
      "What must be true for a solution to be acceptable in the real situation?",

    coachingQuestions: [
      "What decision are you trying to make?",
      "What quantity is unknown?",
      "What should the variable represent?",
      "What information actually affects the decision?",
      "What information can be ignored?",
      "What are the minimum and maximum boundaries?",
      "Are the boundaries included?",
      "Are the conditions connected by AND or OR?",
      "Which constraint is most restrictive?",
      "Does the context require whole-number solutions?",
      "Can you test a value inside the feasible region?",
      "Can you test a value outside the feasible region?",
      "Does your graph agree with your algebra?",
      "What does the final solution mean?",
      "What recommendation follows from the mathematics?",
    ],
  },

  summary: [
    "Inequalities model limits, requirements, ranges, and constraints.",
    "Real-world modeling begins by identifying the decision and defining variables.",
    "Relevant information should be separated from irrelevant details.",
    "One-sided inequalities represent minimums and maximums.",
    "Multiplication or division by a negative reverses inequality direction.",
    "Number-line graphs communicate boundaries and solution regions.",
    "AND constraints require simultaneous satisfaction.",
    "OR constraints allow either solution region.",
    "Compound inequalities model ranges between boundaries.",
    "Absolute-value inequalities model distance and tolerance.",
    "The feasible solution must satisfy every required constraint.",
    "Context determines whether solutions are continuous or discrete.",
    "Boundary and test values should be used to verify solutions.",
    "A mathematical answer is incomplete until it is interpreted.",
    "The final goal of constraint modeling is informed decision making.",
  ],

  reflection: [
    "Which Module 3 concept changed your understanding of inequalities the most?",
    "How are inequalities different from equations as modeling tools?",
    "Why is graphing useful even after an inequality has been solved algebraically?",
    "What is the most common error you now know how to avoid?",
    "How do AND and OR change a solution set?",
    "Why does absolute value naturally represent tolerance?",
    "How can two individually correct constraints compete with each other?",
    "What does 'feasible' mean in your own words?",
    "How can Python help verify a mathematical constraint system?",
    "What real problem would you now feel confident modeling with inequalities?",
    "How could you improve the creator project if you had more data?",
    "What assumptions in your model might need to be reconsidered in the real world?",
  ],

  previousLesson: {
    moduleNumber: 3,
    lessonNumber: 7,
    slug: "absolute-value-inequalities",
    title:
      "Absolute-Value Inequalities as Distance and Tolerance",
  },

  nextLesson: null,
};

export default lesson08;