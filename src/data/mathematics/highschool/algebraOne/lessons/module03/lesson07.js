const lesson07 = {
  id: "algebra-one-module-03-lesson-07",
  slug: "absolute-value-inequalities",

  courseId: "algebra-1",
  courseTitle: "Algebra I",

  moduleNumber: 3,
  moduleTitle: "Linear Inequalities",
  lessonNumber: 7,

  title:
    "Absolute-Value Inequalities as Distance and Tolerance",

  subtitle:
    "Interpret absolute value as distance, model acceptable tolerances, translate absolute-value inequalities into compound inequalities, visualize solution regions, and make real-world decisions.",

  duration: "75–90 minutes",
  level: "Foundation",
  status: "Available",

  essentialQuestion:
    "How can absolute value describe how far a quantity may be from a target value?",

  bigIdea:
    "Absolute value measures distance. An inequality such as |x - 10| ≤ 3 means that x may be no more than 3 units away from 10. This creates an interval centered at 10, extending 3 units in each direction.",

  whyThisLessonExists: {
    title:
      "Many Real Systems Allow a Range Around a Target",

    introduction:
      "Manufactured parts rarely have exactly one perfect measurement. Temperatures fluctuate. Measurements contain error. Machines operate around target settings. In these situations, the important question is often not whether a value equals the target exactly, but whether it remains close enough to the target.",

    centralProblem:
      "How can we represent and analyze values that must stay within—or outside—a certain distance from a target?",

    purpose:
      "Absolute-value inequalities connect algebra to engineering tolerances, measurement error, quality control, temperature ranges, scientific data, and automated decision systems.",
  },

  problemFirst: {
    title:
      "Manufacturing a Precision Component",

    scenario:
      "A machine produces metal rods with a target length of 20 centimeters. A rod is accepted if its length differs from 20 centimeters by no more than 0.5 centimeter. The machine is silver, operates during the morning shift, and produces 400 rods per day. What lengths are acceptable?",

    questions: [
      "What is the target measurement?",
      "What does 'differs from 20' mean mathematically?",
      "What is the maximum allowed distance from the target?",
      "Which information is relevant?",
      "Which details are irrelevant?",
      "Should a rod measuring exactly 19.5 cm be accepted?",
      "Should a rod measuring exactly 20.5 cm be accepted?",
      "What about 19.4 cm?",
      "How can absolute value represent distance from 20?",
      "Write the absolute-value inequality.",
      "Translate it into a compound inequality.",
      "How should the acceptable range appear on a number line?",
    ],

    expectedInsight:
      "Let L represent rod length. The expression |L - 20| measures the distance between the actual length and the 20 cm target. 'No more than 0.5' means |L - 20| ≤ 0.5. Therefore 19.5 ≤ L ≤ 20.5.",
  },

  visualModels: [
    {
      id: "tolerance-around-target",
      type: "compoundNumberLine",

      title:
        "Tolerance Around 20: |x - 20| ≤ 0.5",

      description:
        "Values may be no more than 0.5 unit away from the target value 20.",

      min: 18,
      max: 22,

      lowerBoundary: 19.5,
      upperBoundary: 20.5,

      lowerInclusive: true,
      upperInclusive: true,

      variable: "x",

      interpretation:
        "The acceptable interval extends 0.5 unit below and 0.5 unit above 20. Both endpoints are included because the tolerance says 'no more than.'",
    },

    {
      id: "distance-three-from-ten",
      type: "compoundNumberLine",

      title:
        "Visualizing |x - 10| < 3",

      description:
        "The distance between x and 10 must be less than 3.",

      min: 4,
      max: 16,

      lowerBoundary: 7,
      upperBoundary: 13,

      lowerInclusive: false,
      upperInclusive: false,

      variable: "x",

      interpretation:
        "Values between 7 and 13 are less than 3 units away from 10. The endpoints are excluded because the inequality is strict.",
    },

    {
      id: "inside-versus-outside",
      type: "comparison",

      title:
        "Inside a Tolerance vs Outside a Tolerance",

      description:
        "The inequality symbol determines whether acceptable values lie between two boundaries or outside them.",

      items: [
        {
          label: "Within Distance",
          symbol: "|x - a| ≤ d",
          meaning:
            "x is no more than d units from a. This produces an AND interval: a - d ≤ x ≤ a + d.",
        },

        {
          label: "Beyond Distance",
          symbol: "|x - a| > d",
          meaning:
            "x is more than d units from a. This produces two OR regions: x < a - d OR x > a + d.",
        },
      ],
    },

    {
      id: "outside-left",
      type: "numberLine",

      title:
        "Outside the Tolerance: x < 7",

      description:
        "For |x - 10| > 3, one solution region lies more than 3 units below 10.",

      min: 2,
      max: 16,
      boundary: 7,
      operator: "<",

      leftLabel: "far below target",
      rightLabel: "toward target",

      interpretation:
        "Values below 7 are more than 3 units away from 10.",
    },

    {
      id: "outside-right",
      type: "numberLine",

      title:
        "Outside the Tolerance: x > 13",

      description:
        "The second solution region lies more than 3 units above 10.",

      min: 4,
      max: 18,
      boundary: 13,
      operator: ">",

      leftLabel: "toward target",
      rightLabel: "far above target",

      interpretation:
        "Together, x < 7 OR x > 13 represents all values more than 3 units from 10.",
    },
  ],

  learningObjectives: [
    "Interpret absolute value as distance on a number line.",
    "Identify the center of an absolute-value expression.",
    "Identify the allowed distance or tolerance.",
    "Translate |x - a| ≤ d into a compound AND inequality.",
    "Translate |x - a| < d into a strict interval.",
    "Translate |x - a| ≥ d into an OR inequality.",
    "Translate |x - a| > d into two separated solution regions.",
    "Graph absolute-value inequality solutions.",
    "Model real-world tolerance problems.",
    "Test values against a tolerance.",
    "Interpret boundaries using context and units.",
    "Create original absolute-value constraint situations.",
  ],

  prerequisiteKnowledge: [
    "Absolute value",
    "Distance on a number line",
    "Compound inequalities",
    "AND and OR",
    "Open and closed boundaries",
    "One-variable inequalities",
    "Number-line graphs",
    "Substitution",
  ],

  vocabulary: [
    {
      term: "Absolute Value",
      definition:
        "The distance of a number from zero, or more generally the distance between two quantities.",
    },

    {
      term: "Target Value",
      definition:
        "The central or desired value around which variation is measured.",
    },

    {
      term: "Tolerance",
      definition:
        "The maximum allowed difference from a target value.",
    },

    {
      term: "Deviation",
      definition:
        "The amount by which a measurement differs from its target.",
    },

    {
      term: "Center",
      definition:
        "The target value at the middle of an absolute-value interval.",
    },

    {
      term: "Acceptable Range",
      definition:
        "All values satisfying the stated tolerance or constraint.",
    },
  ],

  formulas: [
    {
      name: "Distance from a Target",
      formula: "|x - a|",
      meaning:
        "The distance between x and the target value a.",
    },

    {
      name: "Within a Distance",
      formula:
        "|x - a| ≤ d  ⇔  a - d ≤ x ≤ a + d",
      meaning:
        "x must remain within d units of a.",
    },

    {
      name: "Strictly Within a Distance",
      formula:
        "|x - a| < d  ⇔  a - d < x < a + d",
      meaning:
        "The endpoints are excluded.",
    },

    {
      name: "Outside a Distance",
      formula:
        "|x - a| > d  ⇔  x < a - d OR x > a + d",
      meaning:
        "x must lie farther than d units from the center.",
    },

    {
      name: "At Least a Distance",
      formula:
        "|x - a| ≥ d  ⇔  x ≤ a - d OR x ≥ a + d",
      meaning:
        "x lies at least d units away from the target.",
    },
  ],

  workedExamples: [
    {
      title:
        "Within 4 Units of 12",

      problem:
        "Solve |x - 12| ≤ 4 and interpret the result as distance.",

      solutionSteps: [
        "|x - 12| measures the distance between x and 12.",
        "The distance may be no more than 4.",
        "Move 4 units left from 12: 12 - 4 = 8.",
        "Move 4 units right from 12: 12 + 4 = 16.",
        "Both endpoints are included.",
        "Write 8 ≤ x ≤ 16.",
        "Test x = 12: distance is 0, so it works.",
        "Test x = 16: distance is 4, so it works.",
        "Test x = 17: distance is 5, so it fails.",
      ],

      answer:
        "8 ≤ x ≤ 16",

      interpretation:
        "Every value from 8 through 16 lies within 4 units of 12.",
    },

    {
      title:
        "Strict Distance from a Target",

      problem:
        "Solve |x - 5| < 2.",

      solutionSteps: [
        "The center is 5.",
        "The allowed distance is less than 2.",
        "Lower boundary: 5 - 2 = 3.",
        "Upper boundary: 5 + 2 = 7.",
        "Because the distance must be strictly less than 2, both boundaries are excluded.",
      ],

      answer:
        "3 < x < 7",
    },

    {
      title:
        "Manufacturing Tolerance",

      problem:
        "A part should weigh 50 grams with a permitted deviation of at most 2 grams. Let w represent actual weight.",

      solutionSteps: [
        "Target value: 50 grams.",
        "Maximum deviation: 2 grams.",
        "Model: |w - 50| ≤ 2.",
        "Lower boundary: 48.",
        "Upper boundary: 52.",
        "Translate to 48 ≤ w ≤ 52.",
      ],

      answer:
        "|w - 50| ≤ 2, equivalent to 48 ≤ w ≤ 52.",

      interpretation:
        "Parts weighing from 48 through 52 grams are acceptable.",
    },

    {
      title:
        "Outside the Acceptable Range",

      problem:
        "Solve |x - 10| > 3.",

      solutionSteps: [
        "The center is 10.",
        "The critical boundaries are 10 - 3 = 7 and 10 + 3 = 13.",
        "'Greater than 3 units away' means values outside the central interval.",
        "Values below 7 work.",
        "Values above 13 work.",
        "The endpoints do not work because the inequality is strict.",
      ],

      answer:
        "x < 7 OR x > 13",

      interpretation:
        "The solution contains two separated regions.",
    },

    {
      title:
        "At Least Five Units from Zero",

      problem:
        "Solve |x| ≥ 5.",

      solutionSteps: [
        "|x| represents the distance from zero.",
        "The distance must be at least 5.",
        "Values at -5 and 5 are included.",
        "Values farther left than -5 also qualify.",
        "Values farther right than 5 also qualify.",
      ],

      answer:
        "x ≤ -5 OR x ≥ 5",
    },

    {
      title:
        "Temperature Control",

      problem:
        "A laboratory freezer is designed to operate at -20°C with a tolerance of 3°C. Write and solve an inequality representing acceptable temperatures.",

      solutionSteps: [
        "Target temperature: -20°C.",
        "Tolerance: 3°C.",
        "Model distance from -20: |T - (-20)| ≤ 3.",
        "Rewrite as |T + 20| ≤ 3.",
        "Lower boundary: -23.",
        "Upper boundary: -17.",
      ],

      answer:
        "-23 ≤ T ≤ -17",

      interpretation:
        "Temperatures from -23°C through -17°C are acceptable.",
    },

    {
      title:
        "Detect the Modeling Error",

      problem:
        "A student says 'within 5 points of 80' means x ≥ 75. Explain why this is incomplete.",

      solutionSteps: [
        "The phrase describes distance from 80, not only a minimum.",
        "Five points below 80 gives 75.",
        "Five points above 80 gives 85.",
        "The acceptable values lie between both boundaries.",
        "Model: |x - 80| ≤ 5.",
        "Equivalent interval: 75 ≤ x ≤ 85.",
      ],

      answer:
        "75 ≤ x ≤ 85",
    },

    {
      title:
        "Realistic Measurement Interpretation",

      problem:
        "A machine accepts bottle volumes satisfying |v - 500| ≤ 5, where v is measured in milliliters. Determine whether 494, 495, 500, 505, and 506 are accepted.",

      solutionSteps: [
        "Equivalent interval: 495 ≤ v ≤ 505.",
        "494 is below the interval and fails.",
        "495 is on the boundary and passes.",
        "500 is at the target and passes.",
        "505 is on the boundary and passes.",
        "506 exceeds the interval and fails.",
      ],

      answer:
        "495, 500, and 505 are accepted; 494 and 506 are rejected.",
    },
  ],

  interactiveExploration: {
    title:
      "Build a Tolerance Around a Center",

    description:
      "Explore how changing the center and tolerance changes an absolute-value interval.",

    instructions: [
      "Start with target value 10.",
      "Choose tolerance 2.",
      "Mark 10 on a number line.",
      "Move 2 units left and identify the lower boundary.",
      "Move 2 units right and identify the upper boundary.",
      "Write the interval.",
      "Write the equivalent absolute-value inequality.",
      "Increase the tolerance from 2 to 4.",
      "Describe how the graph changes.",
      "Move the target from 10 to -3 while keeping tolerance 4.",
      "Predict the new interval before calculating.",
    ],

    questions: [
      "What does the center control?",
      "What does the tolerance control?",
      "What happens to the interval when tolerance increases?",
      "Why are the two boundaries equally far from the center?",
      "When does an absolute-value inequality produce an AND interval?",
      "When does it produce OR regions?",
    ],

    expectedDiscovery:
      "An absolute-value tolerance creates symmetry around a center. Smaller-than relationships produce values inside the boundaries, while greater-than relationships produce values outside them.",
  },

  realWorldApplications: [
    {
      field: "Manufacturing",
      application:
        "Parts are accepted when measurements remain within specified tolerances.",
    },

    {
      field: "Engineering",
      application:
        "Design specifications often allow controlled variation around a target.",
    },

    {
      field: "Science",
      application:
        "Measurement error and uncertainty can be represented using distance from an expected value.",
    },

    {
      field: "Temperature Control",
      application:
        "Heating and cooling systems maintain temperatures within acceptable bands.",
    },

    {
      field: "Quality Control",
      application:
        "Products outside a permitted tolerance can be flagged for inspection.",
    },

    {
      field: "Data Analytics",
      application:
        "Deviation from a baseline can be used to identify unusual observations.",
    },
  ],

  aiConnection: {
    title:
      "Tolerance and Anomaly Detection",

    explanation:
      "Automated systems often compare measurements with expected values. If the deviation becomes too large, the observation may be classified as unusual or unsafe.",

    example:
      "Suppose a sensor normally reads 100 with an allowed deviation of 5. The rule |reading - 100| ≤ 5 describes normal values, while |reading - 100| > 5 describes values that may require investigation.",

    formula:
      "|measurement - target| ≤ tolerance",

    uses: [
      "Anomaly detection",
      "Quality monitoring",
      "Sensor validation",
      "Manufacturing inspection",
      "Error detection",
      "Control systems",
    ],

    caution:
      "A tolerance chosen too narrowly may reject normal variation, while a tolerance chosen too broadly may fail to identify meaningful problems.",

    reflectionQuestion:
      "How might changing an acceptable tolerance affect the number of observations classified as abnormal?",
  },

  pythonLab: {
    title:
      "Automate a Tolerance Check",

    objective:
      "Use Python absolute value to classify measurements as acceptable or unacceptable.",

    code: `target = 20
tolerance = 0.5

measurements = [
    19.4,
    19.5,
    19.8,
    20.0,
    20.5,
    20.6
]

for value in measurements:
    deviation = abs(value - target)
    accepted = deviation <= tolerance

    print(
        "Measurement:", value,
        "Deviation:", deviation,
        "Accepted:", accepted
    )`,

    questions: [
      "Which measurements are accepted?",
      "Why is 19.5 accepted?",
      "Why is 20.5 accepted?",
      "Why is 19.4 rejected?",
      "How does abs(value - target) represent distance?",
      "What compound inequality is equivalent to the Python rule?",
    ],

    reflectionQuestions: [
      "How would increasing the tolerance change the results?",
      "Why is absolute value useful when deviations may occur above or below a target?",
    ],

    extension:
      "Change the target and tolerance. Predict the acceptable interval algebraically before running the code.",
  },

  guidedPractice: [
    {
      question:
        "Solve |x - 8| ≤ 3 and graph the solution.",
      answer:
        "5 ≤ x ≤ 11.",
      difficulty: "Foundation",
    },

    {
      question:
        "Solve |x - 4| < 6.",
      answer:
        "-2 < x < 10.",
      difficulty: "Foundation",
    },

    {
      question:
        "Solve |x| > 7.",
      answer:
        "x < -7 OR x > 7.",
      difficulty: "Foundation",
    },

    {
      question:
        "A machine targets 100 units with tolerance ±4 units. Write the absolute-value inequality and equivalent compound inequality.",
      answer:
        "|x - 100| ≤ 4; 96 ≤ x ≤ 104.",
      difficulty: "Modeling",
    },

    {
      question:
        "A temperature must remain within 2°C of 25°C. Determine whether 22°C, 23°C, 25°C, 27°C, and 28°C satisfy the condition.",
      answer:
        "23°C, 25°C, and 27°C satisfy it. 22°C and 28°C do not.",
      difficulty: "Reasoning",
    },
  ],

  independentPractice: [
    {
      question:
        "Solve |x - 6| ≤ 2.",
      answer:
        "4 ≤ x ≤ 8.",
    },

    {
      question:
        "Solve |x + 3| < 5.",
      answer:
        "-8 < x < 2.",
    },

    {
      question:
        "Solve |x - 12| > 4.",
      answer:
        "x < 8 OR x > 16.",
    },

    {
      question:
        "Solve |x| ≥ 9.",
      answer:
        "x ≤ -9 OR x ≥ 9.",
    },

    {
      question:
        "A package should weigh 25 pounds with a tolerance of no more than 1.5 pounds. Write and solve the inequality.",
      answer:
        "|w - 25| ≤ 1.5; 23.5 ≤ w ≤ 26.5.",
    },

    {
      question:
        "A thermostat is set to 72°F and should remain within 3°F of the target. What temperatures are acceptable?",
      answer:
        "|T - 72| ≤ 3; 69 ≤ T ≤ 75.",
    },

    {
      question:
        "Create a three-sentence manufacturing problem modeled by |x - 50| ≤ 2.",
      answer:
        "Answers will vary.",
    },

    {
      question:
        "Create a real-world alert condition modeled by |x - 100| > 10.",
      answer:
        "Answers will vary. Equivalent to x < 90 OR x > 110.",
    },
  ],

  commonMistakes: [
    {
      mistake:
        "Treating |x - 10| ≤ 3 as only x ≤ 13.",
      correction:
        "Absolute value measures distance in both directions. The complete solution is 7 ≤ x ≤ 13.",
    },

    {
      mistake:
        "Forgetting to identify the center.",
      correction:
        "In |x - a|, the center is a.",
      example:
        "|x - 8| has center 8; |x + 8| = |x - (-8)| has center -8.",
    },

    {
      mistake:
        "Using OR for a 'within' inequality.",
      correction:
        "Within a distance produces the interval between boundaries, so use AND.",
    },

    {
      mistake:
        "Using AND for 'more than a distance.'",
      correction:
        "Being farther than the tolerance produces two outside regions, so use OR.",
    },

    {
      mistake:
        "Ignoring whether the tolerance boundary is included.",
      correction:
        "Words such as 'at most' include the boundary; words such as 'less than' exclude it.",
    },

    {
      mistake:
        "Assuming absolute value means simply remove the negative sign.",
      correction:
        "Interpret absolute value as distance before manipulating symbols.",
    },
  ],

  discussionQuestions: [
    "Why is absolute value naturally connected to distance?",
    "Why does a tolerance create two boundaries?",
    "Why are the boundaries equally far from the target?",
    "Why does |x - a| ≤ d produce an AND interval?",
    "Why does |x - a| > d produce OR regions?",
    "How could a tolerance be too strict or too loose in manufacturing?",
    "Where do you encounter acceptable variation in everyday life?",
    "How could absolute-value inequalities help identify unusual data?",
  ],

  formativeAssessment: {
    passingScore: 7,

    questions: [
      {
        type: "distance",
        prompt:
          "What does |x - 15| represent?",
        answer:
          "The distance between x and 15.",
      },

      {
        type: "solving",
        prompt:
          "Solve |x - 10| ≤ 2.",
        answer:
          "8 ≤ x ≤ 12.",
      },

      {
        type: "solving",
        prompt:
          "Solve |x - 4| < 3.",
        answer:
          "1 < x < 7.",
      },

      {
        type: "outside-region",
        prompt:
          "Solve |x - 6| > 2.",
        answer:
          "x < 4 OR x > 8.",
      },

      {
        type: "center",
        prompt:
          "What is the center of |x + 5| ≤ 3?",
        answer:
          "-5.",
      },

      {
        type: "modeling",
        prompt:
          "A product should weigh 200 grams with tolerance ±5 grams. Write the absolute-value inequality.",
        answer:
          "|w - 200| ≤ 5.",
      },

      {
        type: "translation",
        prompt:
          "Translate |T - 70| ≤ 4 into a compound inequality.",
        answer:
          "66 ≤ T ≤ 74.",
      },

      {
        type: "verification",
        prompt:
          "Does x = 13 satisfy |x - 10| ≤ 3?",
        answer:
          "Yes. |13 - 10| = 3, and 3 ≤ 3.",
      },

      {
        type: "creation",
        prompt:
          "Create a real-world tolerance situation using absolute value.",
        sampleAnswer:
          "Answers will vary.",
      },
    ],
  },

  researchExtension: {
    title:
      "Investigate Real Engineering Tolerances",

    description:
      "Find an example where a real product, machine, scientific measurement, or system allows variation around a target.",

    researchQuestion:
      "How are tolerances used to decide whether a measurement is acceptable?",

    applicationOptions: [
      "Manufacturing",
      "Engineering",
      "Temperature systems",
      "Laboratory measurement",
      "Automotive systems",
      "Electronics",
      "Quality control",
      "Data monitoring",
    ],

    task:
      "Identify a target value and allowed tolerance. Represent the requirement with an absolute-value inequality, convert it to a compound inequality, graph the acceptable range, and analyze values inside and outside the tolerance.",

    requiredEvidence: [
      "Real-world target",
      "Tolerance",
      "Variable definition",
      "Absolute-value inequality",
      "Equivalent compound inequality",
      "Number-line visualization",
      "Accepted example",
      "Rejected example",
      "Written interpretation",
    ],
  },

  portfolioArtifact: {
    title:
      "Tolerance and Quality-Control Designer",

    description:
      "Design an original quality-control system using an absolute-value inequality.",

    requiredSections: [
      "Product or system description",
      "Target value",
      "Allowed tolerance",
      "Variable definition",
      "Absolute-value model",
      "Compound inequality",
      "Number-line graph",
      "Boundary reasoning",
      "Accepted measurements",
      "Rejected measurements",
      "Quality-control decision rule",
    ],

    requiredEvidence: [
      "Original real-world context",
      "Correct absolute-value mathematics",
      "Visual representation",
      "Verification examples",
      "Written interpretation",
    ],
  },

  growthIndicators: [
    "Interprets absolute value as distance.",
    "Identifies target values.",
    "Identifies tolerances.",
    "Constructs absolute-value inequalities.",
    "Converts absolute-value inequalities to compound inequalities.",
    "Distinguishes inside intervals from outside regions.",
    "Graphs tolerance ranges.",
    "Tests measurements against constraints.",
    "Interprets boundaries correctly.",
    "Connects mathematics to quality-control decisions.",
    "Creates original tolerance models.",
  ],

  lumineryGuidance: {
    message:
      "Before solving an absolute-value inequality, ask: distance from what, and how far?",

    recommendation:
      "Target → distance → tolerance → boundaries → AND/OR → graph → test → interpret.",

    prompt:
      "What value is at the center, and how far from that center are values allowed to move?",

    coachingQuestions: [
      "What is the target value?",
      "What expression measures distance from that target?",
      "What is the allowed tolerance?",
      "What are the two boundaries?",
      "Are the boundaries included?",
      "Do solutions lie inside the boundaries or outside them?",
      "Should the equivalent compound inequality use AND or OR?",
      "Can you test the target value?",
      "Can you test a boundary value?",
      "Can you test a value just outside the tolerance?",
      "What does the interval mean in the original context?",
    ],
  },

  summary: [
    "Absolute value can represent distance from a target.",
    "A tolerance creates equal-distance boundaries around a center.",
    "|x - a| ≤ d describes values within d units of a.",
    "Within-distance inequalities usually produce AND intervals.",
    "Greater-than absolute-value inequalities produce outside OR regions.",
    "Inclusive inequalities include tolerance boundaries.",
    "Strict inequalities exclude tolerance boundaries.",
    "Absolute-value inequalities model manufacturing tolerances, measurement error, and acceptable variation.",
    "Graphs make the symmetry around the target visible.",
    "Testing target, boundary, and outside values helps verify the model.",
  ],

  reflection: [
    "How does interpreting absolute value as distance change your understanding?",
    "Why does a tolerance produce two boundaries?",
    "How can you find the center of |x + 4|?",
    "Why does 'within 3 units' create an AND interval?",
    "Why does 'more than 3 units away' create two OR regions?",
    "Which visual model in this lesson helped you most?",
    "Where have you encountered tolerances outside mathematics class?",
    "Create your own target-and-tolerance system and explain how it would make decisions.",
  ],

  previousLesson: {
    moduleNumber: 3,
    lessonNumber: 6,
    slug: "compound-inequalities-and-multiple-constraints",
    title:
      "Compound Inequalities and Multiple Constraints",
  },

  nextLesson: {
    moduleNumber: 3,
    lessonNumber: 8,
    slug: "module-3-constraint-modeling-synthesis",
    title:
      "Module 3 Constraint Modeling Synthesis",
  },
};

export default lesson07;