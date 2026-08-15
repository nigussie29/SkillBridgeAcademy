const lesson07 = {
  id: "algebra-one-module-02-lesson-07",
  slug: "literal-equations-and-formulas",

  courseId: "algebra-1",
  courseTitle: "Algebra I",

  moduleNumber: 2,
  moduleTitle: "Solving Linear Equations",
  lessonNumber: 7,

  title:
    "Literal Equations and Formulas Through Real-World Modeling",

  subtitle:
    "Interpret formulas, choose a target variable, rearrange relationships logically, and explain what the new form means in context.",

  duration: "70–90 minutes",
  level: "Foundation",
  status: "Available",

  essentialQuestion:
    "How can we rearrange a formula to answer a different question without changing the relationship it represents?",

  bigIdea:
    "A formula represents a relationship among several quantities. By identifying the quantity we want to find and using equality-preserving transformations, we can rewrite the same relationship in a form that is more useful for a particular problem.",

  whyThisLessonExists: {
    title: "Why Rearranging Formulas Matters",

    introduction:
      "Real mathematics is rarely limited to solving for x. Science, engineering, finance, technology, and data analysis use formulas containing several variables. Different situations require solving the same formula for different quantities.",

    centralProblem:
      "How can we determine which variable should be isolated and rearrange the formula without changing the relationship?",

    purpose:
      "This lesson prepares students to use algebra as a flexible modeling language rather than as a collection of fixed procedures.",
  },

  problemFirst: {
    title: "The Robotics Travel Investigation",

    scenario:
      "A robotics team is transporting equipment to a regional competition. The relationship among distance, rate, and time is represented by d = rt. The team knows the total distance and travel time but wants to determine the average driving rate. The van is blue and carries 14 students.",

    questions: [
      "Which information is mathematically relevant?",
      "Which information is irrelevant?",
      "What does each variable in d = rt represent?",
      "Which variable is the target variable?",
      "Why is substituting numbers immediately not the best first step?",
      "What operation is currently affecting r?",
      "What inverse operation will isolate r?",
      "Why must the same operation be applied to both sides?",
      "Rewrite the formula with r isolated.",
      "How can the new formula be checked?",
      "What does the rearranged formula tell us conceptually?",
    ],

    expectedInsight:
      "The color of the van and number of students are irrelevant. Since d = rt and r is multiplied by t, divide both sides by t to obtain r = d/t.",
  },

  learningObjectives: [
    "Interpret variables within real-world formulas.",
    "Identify relevant and irrelevant information.",
    "Determine which variable should be isolated.",
    "Rearrange literal equations using inverse operations.",
    "Use distribution and combining like terms when necessary.",
    "Justify each transformation using equality properties.",
    "Substitute values only after constructing an appropriate formula form.",
    "Check whether a rearranged formula is equivalent to the original.",
    "Interpret rearranged formulas in context.",
    "Create original situations requiring the same formula to be solved for different variables.",
  ],

  prerequisiteKnowledge: [
    "Variables and expressions",
    "Inverse operations",
    "Balance principle",
    "Distributive property",
    "Combining like terms",
    "Multi-step equations",
    "Fractions",
    "Substitution",
    "Word-to-math modeling",
  ],

  vocabulary: [
    {
      term: "Literal Equation",
      definition:
        "An equation containing two or more variables.",
      example:
        "d = rt",
    },

    {
      term: "Formula",
      definition:
        "An equation describing a relationship among quantities.",
      example:
        "P = 2L + 2W",
    },

    {
      term: "Target Variable",
      definition:
        "The variable we want to isolate.",
      example:
        "If we need the width, W is the target variable.",
    },

    {
      term: "Rearrange",
      definition:
        "To rewrite an equation into an equivalent form with a different variable isolated.",
      example:
        "d = rt can be rewritten as r = d/t.",
    },

    {
      term: "Equivalent Form",
      definition:
        "A different-looking equation that represents the same mathematical relationship.",
      example:
        "d = rt and r = d/t are equivalent when t ≠ 0.",
    },

    {
      term: "Substitution",
      definition:
        "Replacing variables with known values.",
      example:
        "Using d = 240 and t = 4 in r = d/t.",
    },
  ],

  formulas: [
    {
      name: "Distance Formula",
      formula: "d = rt",
      meaning:
        "Distance equals rate multiplied by time.",
    },

    {
      name: "Rectangle Perimeter",
      formula: "P = 2L + 2W",
      meaning:
        "The perimeter equals twice the length plus twice the width.",
    },

    {
      name: "Simple Interest",
      formula: "I = Prt",
      meaning:
        "Interest depends on principal, rate, and time.",
    },

    {
      name: "Triangle Area",
      formula: "A = (1/2)bh",
      meaning:
        "The area of a triangle equals one-half the product of base and height.",
    },

    {
      name: "Temperature Conversion",
      formula: "F = (9/5)C + 32",
      meaning:
        "Fahrenheit temperature can be calculated from Celsius temperature.",
    },
  ],

  problemSolvingFramework: {
    title: "SkillBridge Formula Reasoning Framework",

    steps: [
      {
        number: 1,
        title: "Understand the Situation",
        description:
          "Determine what the problem is asking before manipulating symbols.",
      },

      {
        number: 2,
        title: "Identify Relevant Information",
        description:
          "Separate mathematical quantities from details that do not affect the relationship.",
      },

      {
        number: 3,
        title: "Choose the Target Variable",
        description:
          "State exactly which quantity needs to be isolated and what it represents.",
      },

      {
        number: 4,
        title: "Write or Select the Correct Formula",
        description:
          "Connect the quantities in the situation to a known mathematical relationship.",
      },

      {
        number: 5,
        title: "Rearrange Before Substituting",
        description:
          "Use inverse operations, distribution, or combining like terms to isolate the target variable.",
      },

      {
        number: 6,
        title: "Justify Each Transformation",
        description:
          "Explain why each operation preserves equality and moves the target variable closer to isolation.",
      },

      {
        number: 7,
        title: "Substitute, Verify, and Interpret",
        description:
          "Use the rearranged formula, check the result, include units, and explain its meaning.",
      },
    ],
  },

  workedExamples: [
    {
      title: "Solve the Distance Formula for Rate",

      problem:
        "A delivery company records distance using the relationship d = rt. A driver knows the distance traveled and the total travel time but wants to calculate average rate. The delivery van carries six packages, but package count does not affect the rate formula. Rewrite the formula so rate can be calculated directly.",

      solutionSteps: [
        "Identify the target variable: r represents rate.",
        "The number of packages is irrelevant.",
        "Start with d = rt.",
        "r is multiplied by t.",
        "Divide both sides by t to preserve equality.",
        "d/t = rt/t.",
        "Simplify the right side.",
        "r = d/t.",
        "Check by multiplying both sides by t: rt = d.",
        "Interpret: rate equals distance divided by time.",
      ],

      answer:
        "r = d/t",
    },

    {
      title: "Solve the Distance Formula for Time",

      problem:
        "A research team knows the distance a drone must travel and the drone's average speed. The researchers want to determine how long the flight will take. The drone has four propellers and uses a camera, but those details are not needed for this calculation. Rewrite d = rt to isolate time.",

      solutionSteps: [
        "The target variable is t.",
        "Propeller count and camera information are irrelevant.",
        "Start with d = rt.",
        "t is multiplied by r.",
        "Divide both sides by r.",
        "d/r = rt/r.",
        "Simplify.",
        "t = d/r.",
        "Interpret: time equals distance divided by rate.",
      ],

      answer:
        "t = d/r",
    },

    {
      title: "Solve a Perimeter Formula for Width",

      problem:
        "A school is designing a rectangular robotics practice area. Engineers know its perimeter and length but need to determine the width before ordering flooring materials. The room will have blue walls and six tables. Use P = 2L + 2W and rewrite the formula for W.",

      solutionSteps: [
        "The target variable is W.",
        "Wall color and number of tables are irrelevant.",
        "Start with P = 2L + 2W.",
        "Subtract 2L from both sides.",
        "P - 2L = 2W.",
        "Divide both sides by 2.",
        "W = (P - 2L) / 2.",
        "Equivalent form: W = P/2 - L.",
        "Interpret: width is half the perimeter minus the length.",
      ],

      answer:
        "W = (P - 2L) / 2",
    },

    {
      title: "Solve the Simple Interest Formula for Principal",

      problem:
        "A student wants to determine how much money must initially be invested to earn a desired amount of simple interest. The relationship is I = Prt, where I is interest, P is principal, r is rate, and t is time. The bank building has three floors, but that information is irrelevant. Rearrange the formula for P.",

      solutionSteps: [
        "The target variable is P.",
        "Start with I = Prt.",
        "P is multiplied by r and t.",
        "Divide both sides by rt.",
        "I/(rt) = Prt/(rt).",
        "Simplify.",
        "P = I/(rt).",
        "Interpret: the required principal equals the desired interest divided by the product of rate and time.",
      ],

      answer:
        "P = I/(rt)",
    },

    {
      title: "Solve Triangle Area for Height",

      problem:
        "An engineering student knows the area and base of a triangular support but needs to calculate its height. The support is made of aluminum and weighs 14 pounds, but the formula uses only area, base, and height. Rewrite A = (1/2)bh to isolate h.",

      solutionSteps: [
        "The target variable is h.",
        "Material and weight are irrelevant.",
        "Start with A = (1/2)bh.",
        "Multiply both sides by 2.",
        "2A = bh.",
        "Divide both sides by b.",
        "h = 2A/b.",
        "Interpret the result.",
      ],

      answer:
        "h = 2A/b",
    },

    {
      title: "Solve Temperature Conversion for Celsius",

      problem:
        "A scientific sensor reports temperature in Fahrenheit using F = (9/5)C + 32. A researcher receives a Fahrenheit measurement but needs the equivalent Celsius value for a dataset. The sensor casing is black and its battery is 80 percent charged. Rearrange the formula to isolate C.",

      solutionSteps: [
        "Battery level and casing color are irrelevant.",
        "The target variable is C.",
        "Start with F = (9/5)C + 32.",
        "Subtract 32 from both sides.",
        "F - 32 = (9/5)C.",
        "Multiply both sides by 5/9.",
        "C = (5/9)(F - 32).",
        "Interpret: subtract 32 from the Fahrenheit value and multiply by 5/9.",
      ],

      answer:
        "C = (5/9)(F - 32)",
    },

    {
      title: "Critique an Incorrect Rearrangement",

      problem:
        "A student wants to solve P = 2L + 2W for W and writes W = P - 2L / 2. The student says only the 2L term should be divided by 2. Explain the error and produce the correct formula.",

      solutionSteps: [
        "Start with P = 2L + 2W.",
        "Subtract 2L from both sides: P - 2L = 2W.",
        "The complete left side equals 2W.",
        "Therefore the entire expression P - 2L must be divided by 2.",
        "W = (P - 2L)/2.",
        "The student's missing grouping changes the meaning of the expression.",
      ],

      answer:
        "W = (P - 2L)/2",
    },
  ],

  interactiveExploration: {
    title: "One Formula, Different Questions",

    description:
      "Explore how the same relationship can be rearranged to answer different questions.",

    instructions: [
      "Begin with d = rt.",
      "Rewrite it to isolate r.",
      "Rewrite it again to isolate t.",
      "Choose distance 240 miles and time 4 hours.",
      "Use r = d/t to calculate the rate.",
      "Use d = rt to verify the distance.",
      "Use t = d/r to recover the original time.",
      "Explain why all three formulas describe the same relationship.",
    ],

    questions: [
      "Why can the same formula be written in several useful forms?",
      "Which form is most useful when distance is unknown?",
      "Which form is most useful when rate is unknown?",
      "Which form is most useful when time is unknown?",
      "What remains unchanged when the equation is rearranged?",
    ],

    expectedDiscovery:
      "Rearranging an equation changes which variable is isolated but does not change the underlying mathematical relationship.",
  },

  realWorldApplications: [
    {
      field: "Physics",
      application:
        "Formulas are frequently rearranged to solve for distance, velocity, acceleration, force, time, and other quantities.",
    },

    {
      field: "Engineering",
      application:
        "Engineers rearrange design equations depending on which measurement is unknown.",
    },

    {
      field: "Finance",
      application:
        "Interest formulas can be rearranged to determine principal, rate, time, or interest.",
    },

    {
      field: "Geometry",
      application:
        "Area, perimeter, and volume formulas can be solved for different dimensions.",
    },

    {
      field: "Data Science",
      application:
        "Mathematical relationships may be transformed into more useful forms for analysis or computation.",
    },

    {
      field: "Artificial Intelligence",
      application:
        "Symbolic reasoning systems manipulate equations to isolate unknown quantities and derive new relationships.",
    },
  ],

  aiConnection: {
    title: "Symbolic Reasoning in Artificial Intelligence",

    explanation:
      "An AI system performing symbolic mathematics must understand that equivalent equations can represent the same relationship in different forms. Rearranging formulas requires maintaining logical equivalence while changing which variable is isolated.",

    example:
      "From d = rt, a symbolic system can derive r = d/t or t = d/r depending on which quantity is requested.",

    uses: [
      "Symbolic algebra",
      "Equation solving",
      "Scientific computing",
      "Automated reasoning",
      "Engineering systems",
      "Mathematical assistants",
    ],

    caution:
      "A rearranged formula is useful only if the transformation is mathematically valid and any restrictions, such as division by zero, are respected.",

    reflectionQuestion:
      "What must an AI system understand besides arithmetic in order to rearrange formulas correctly?",
  },

  pythonLab: {
    title: "Use Rearranged Formulas in Python",

    objective:
      "Represent several equivalent forms of the distance formula computationally.",

    code: `distance = 240
time = 4

rate = distance / time

print("Distance:", distance)
print("Time:", time)
print("Rate:", rate)

check_distance = rate * time

print("Check distance:", check_distance)
print("Verified:", check_distance == distance)`,

    expectedOutput: `Distance: 240
Time: 4
Rate: 60.0
Check distance: 240.0
Verified: True`,

    investigation: [
      "Change the distance and time values.",
      "Predict the new rate before running the program.",
      "Create a second calculation using t = d/r.",
      "Create a Python example using P = 2L + 2W solved for W.",
      "Explain why the algebraic rearrangement should happen before coding.",
    ],

    reflectionQuestions: [
      "What mathematical relationship does each Python assignment represent?",
      "Why is a rearranged formula useful in programming?",
      "How does verification help detect modeling or coding mistakes?",
    ],
  },

  guidedPractice: [
    {
      question:
        "A runner travels a known distance at a known average rate and wants to determine the travel time. The runner wears red shoes and carries a water bottle. Using d = rt, identify irrelevant information, choose the target variable, rearrange the formula, and explain each step.",
      answer:
        "Shoes and water bottle are irrelevant. Target variable t. Divide d = rt by r to obtain t = d/r.",
      hint:
        "Ask what operation is currently affecting t.",
    },

    {
      question:
        "A rectangular community garden has known perimeter P and width W, but its length is unknown. The garden contains roses and vegetables, but those details do not affect perimeter. Rearrange P = 2L + 2W for L.",
      answer:
        "P - 2W = 2L, so L = (P - 2W)/2.",
      hint:
        "Remove the width term before dividing by 2.",
    },

    {
      question:
        "A financial analyst knows simple interest I, principal P, and time t but wants to determine the interest rate r. The company logo is blue. Rearrange I = Prt for r.",
      answer:
        "r = I/(Pt).",
      hint:
        "r is multiplied by both P and t.",
    },

    {
      question:
        "A triangular sign has known area A and height h, but the designer needs to determine its base b. The sign will be painted yellow. Rearrange A = (1/2)bh for b.",
      answer:
        "Multiply by 2: 2A = bh. Divide by h: b = 2A/h.",
      hint:
        "Color is irrelevant.",
    },
  ],

  independentPractice: [
    {
      question:
        "A delivery drone travels according to d = rt. Engineers know distance and rate but must determine flight time before scheduling the battery cycle. The drone weighs 8 pounds and is white. Rearrange the formula for time and identify irrelevant information.",
      answer:
        "Weight and color are irrelevant to this formula. t = d/r.",
    },

    {
      question:
        "A rectangular sports field has perimeter P = 2L + 2W. The maintenance team knows P and L but needs W before ordering fencing. There are 20 players on the field. Rearrange the formula for W.",
      answer:
        "W = (P - 2L)/2.",
    },

    {
      question:
        "A bank uses I = Prt for simple interest. A customer knows I, r, and t but wants to determine the original principal. The account was opened on Monday. Rearrange for P.",
      answer:
        "P = I/(rt).",
    },

    {
      question:
        "A triangular solar panel has area A = (1/2)bh. Engineers know A and b but need the height. The panel contains 24 cells. Rearrange for h.",
      answer:
        "h = 2A/b.",
    },

    {
      question:
        "A weather application converts Celsius to Fahrenheit using F = (9/5)C + 32. The application receives F but needs C for a scientific database. Rearrange the formula for C and justify each transformation.",
      answer:
        "Subtract 32: F - 32 = (9/5)C. Multiply by 5/9: C = (5/9)(F - 32).",
    },

    {
      question:
        "A student claims that solving A = (1/2)bh for h gives h = A/(2b). Critique the student's work and derive the correct formula.",
      answer:
        "Multiplying both sides by 2 gives 2A = bh, then dividing by b gives h = 2A/b.",
    },

    {
      question:
        "Create a three-sentence real-world problem using d = rt in which the unknown is rate. Include one irrelevant detail, rearrange the formula, substitute reasonable values, and interpret the result.",
      answer:
        "Answers will vary.",
    },
  ],

  commonMistakes: [
    {
      mistake:
        "Substituting numbers before deciding which variable should be isolated.",
      correction:
        "Identify and isolate the target variable first when the goal is formula manipulation.",
    },

    {
      mistake:
        "Changing only one side of the equation.",
      correction:
        "Every transformation must preserve equality.",
    },

    {
      mistake:
        "Dividing only one term of a multi-term expression.",
      correction:
        "Use parentheses when an entire expression must be divided.",
    },

    {
      mistake:
        "Ignoring restrictions created by division.",
      correction:
        "A denominator cannot equal zero.",
    },

    {
      mistake:
        "Treating every variable as an unknown.",
      correction:
        "The problem determines which variable is the current target.",
    },

    {
      mistake:
        "Producing a formula without interpreting it.",
      correction:
        "Explain what the isolated variable depends on and include units when values are substituted.",
    },
  ],

  discussionQuestions: [
    "Why can the same formula answer several different questions?",
    "Why should the target variable be identified before manipulating the equation?",
    "What is preserved when a formula is rearranged?",
    "Why can grouping symbols become important during formula rearrangement?",
    "Why might an engineer prefer a formula solved for one variable instead of another?",
    "How is rearranging formulas similar to solving numerical equations?",
    "How is it different?",
    "Can you create a formula containing three variables and explain how it might be solved for each one?",
  ],

  formativeAssessment: {
    passingScore: 5,

    questions: [
      {
        type: "rearrange",
        prompt:
          "Solve d = rt for r.",
        answer:
          "r = d/t",
      },

      {
        type: "rearrange",
        prompt:
          "Solve P = 2L + 2W for W.",
        answer:
          "W = (P - 2L)/2",
      },

      {
        type: "rearrange",
        prompt:
          "Solve I = Prt for t.",
        answer:
          "t = I/(Pr)",
      },

      {
        type: "rearrange",
        prompt:
          "Solve A = (1/2)bh for b.",
        answer:
          "b = 2A/h",
      },

      {
        type: "reasoning",
        prompt:
          "Why is C = (5/9)(F - 32) equivalent to F = (9/5)C + 32?",
        sampleAnswer:
          "It is obtained by subtracting 32 from both sides and multiplying both sides by 5/9, so equality is preserved.",
      },

      {
        type: "modeling",
        prompt:
          "A vehicle travels 180 miles in t hours at 60 miles per hour. Use d = rt to select the useful form of the formula and determine t.",
        answer:
          "t = d/r = 180/60 = 3 hours.",
      },

      {
        type: "creation",
        prompt:
          "Create a real-world scenario requiring a formula to be rearranged before values are substituted.",
        sampleAnswer:
          "Answers will vary.",
      },
    ],
  },

  researchExtension: {
    title: "Formula Transformation Investigation",

    description:
      "Choose a formula from mathematics, science, finance, engineering, or technology and investigate how its usefulness changes when different variables are isolated.",

    researchQuestion:
      "How does rearranging a formula allow one mathematical relationship to answer different real-world questions?",

    applicationOptions: [
      "Physics",
      "Finance",
      "Geometry",
      "Engineering",
      "Chemistry",
      "Computer science",
      "Data analysis",
    ],

    task:
      "Choose a formula containing at least three variables. Explain every variable, create three different questions, rearrange the formula appropriately for each question, and test the formulas with realistic values.",

    requiredEvidence: [
      "Original formula",
      "Meaning of variables",
      "Three target variables or questions",
      "Rearranged forms",
      "Transformation justifications",
      "Numerical examples",
      "Verification",
      "Interpretation",
    ],
  },

  portfolioArtifact: {
    title: "One Formula, Multiple Questions",

    description:
      "Create a visual or digital artifact demonstrating how one formula can be transformed to answer several different real-world questions.",

    requiredSections: [
      "Real-world context",
      "Original formula",
      "Variable definitions",
      "Question 1 and target variable",
      "Rearrangement 1",
      "Question 2 and target variable",
      "Rearrangement 2",
      "Question 3 and target variable",
      "Verification",
      "Interpretation",
    ],

    requiredEvidence: [
      "Written reasoning",
      "Algebraic transformations",
      "Units",
      "Example calculations",
      "Diagram, Desmos representation, or Python verification",
    ],
  },

  growthIndicators: [
    "Identifies the target variable before calculating.",
    "Distinguishes relevant from irrelevant information.",
    "Understands formulas as relationships rather than memorized rules.",
    "Rearranges equations while preserving equality.",
    "Uses grouping symbols accurately.",
    "Justifies inverse operations.",
    "Checks equivalent forms.",
    "Interprets rearranged formulas in context.",
    "Creates questions from mathematical formulas.",
  ],

  lumineryGuidance: {
    message:
      "A formula is not a one-way instruction. It is a relationship that can be reorganized depending on the question you need to answer.",

    recommendation:
      "Use the sequence: Understand → Identify quantities → Choose target → Select formula → Rearrange → Justify → Substitute → Verify → Interpret.",

    prompt:
      "Before using numbers, can you explain which variable you need and why your rearranged formula isolates it correctly?",

    coachingQuestions: [
      "What does each variable represent?",
      "Which variable is the target?",
      "Which information is irrelevant?",
      "What operation is currently affecting the target variable?",
      "What inverse operation will undo it?",
      "Are there multiple terms that must be grouped?",
      "Did you perform the transformation on both sides?",
      "Can you reverse your steps to recover the original formula?",
      "What does the new formula mean in words?",
    ],

    confidence: 92,
  },

  summary: [
    "Literal equations contain multiple variables.",
    "A formula represents a relationship among quantities.",
    "Different questions may require the same formula to be solved for different variables.",
    "Identify the target variable before manipulating the equation.",
    "Relevant information determines the mathematical relationship.",
    "Inverse operations preserve equality when applied correctly.",
    "Grouping symbols are important when dividing or multiplying multi-term expressions.",
    "Rearranged formulas should be checked for equivalence.",
    "Numbers can be substituted after an appropriate form is obtained.",
    "Formula rearrangement is widely used in mathematics, science, finance, engineering, programming, and AI.",
  ],

  reflection: [
    "Why is it useful to think of formulas as relationships instead of rules to memorize?",
    "Which formula in this lesson was most challenging to rearrange?",
    "Why should you choose the target variable before substituting numbers?",
    "How can you verify that two formula forms are equivalent?",
    "Where might you use literal equations outside an Algebra I classroom?",
    "Create a three-variable formula and write two different questions that require different variables to be isolated.",
  ],

  previousLesson: {
    moduleNumber: 2,
    lessonNumber: 6,
    slug: "solution-types",
    title:
      "One Solution, No Solution, or Infinitely Many Solutions",
  },

  nextLesson: {
    moduleNumber: 2,
    lessonNumber: 8,
    slug: "module-2-equation-modeling-synthesis",
    title:
      "Module 2 Equation Modeling Synthesis",
  },
};

export default lesson07;