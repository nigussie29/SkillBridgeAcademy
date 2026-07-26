const lesson02 = {
  id: "la-m01-l02",
  courseId: "linear-algebra-foundations-to-ai",
  moduleId: "module-01",

  moduleNumber: 1,
  lessonNumber: 2,

  slug: "scalars-and-vectors",

  title: "Scalars and Vectors",

  subtitle:
    "Distinguishing quantities that have magnitude only from quantities that also include direction.",

  status: "Available",

  duration: "75–90 minutes",

  level: "Foundation",

  essentialQuestion:
    "How can we determine whether a real-world quantity should be represented by a scalar or a vector?",

  bigIdea:
    "A scalar describes magnitude only, while a vector can describe both magnitude and direction or several related components.",

  problemFirst: {
    title: "Speed or Velocity?",

    scenario:
      "Two cars are both traveling at 60 miles per hour. One car is moving east, and the other is moving west. Their speeds are equal, but their motions are not identical.",

    questions: [
      "What information does 60 miles per hour provide?",
      "What important information is missing?",
      "How can we distinguish the two cars mathematically?",
      "Is speed a scalar or a vector?",
      "Is velocity a scalar or a vector?",
    ],

    expectedInsight:
      "Speed contains magnitude only. Velocity includes both magnitude and direction.",
  },

  learningObjectives: [
    "Define scalar and vector quantities.",
    "Distinguish scalars from vectors in real-world situations.",
    "Explain the difference between speed and velocity.",
    "Explain the difference between distance and displacement.",
    "Represent directional quantities using vectors.",
    "Identify the magnitude and direction of a vector.",
    "Connect scalar and vector quantities to physics, data science, robotics, and AI.",
  ],

  prerequisiteKnowledge: [
    "Positive and negative numbers",
    "Coordinate plane",
    "Basic measurement",
    "Introduction to vectors",
  ],

  vocabulary: [
    {
      term: "Scalar",
      definition:
        "A quantity described by one number and an appropriate unit.",
      examples: [
        "Mass",
        "Time",
        "Temperature",
        "Energy",
        "Speed",
      ],
    },
    {
      term: "Vector",
      definition:
        "A quantity described by magnitude and direction or by ordered components.",
      examples: [
        "Velocity",
        "Acceleration",
        "Force",
        "Displacement",
        "Position",
      ],
    },
    {
      term: "Magnitude",
      definition:
        "The size or amount of a scalar or vector quantity.",
    },
    {
      term: "Direction",
      definition:
        "The orientation in which a vector points.",
    },
    {
      term: "Speed",
      definition:
        "A scalar that measures how quickly distance is traveled.",
    },
    {
      term: "Velocity",
      definition:
        "A vector that measures the rate and direction of displacement.",
    },
    {
      term: "Distance",
      definition:
        "The total length of a path traveled.",
    },
    {
      term: "Displacement",
      definition:
        "The change in position from the starting point to the ending point.",
    },
  ],

  scalarExamples: [
    {
      quantity: "Mass",
      example: "A package has a mass of 10 kilograms.",
      explanation:
        "Mass has size but does not point in a direction.",
    },
    {
      quantity: "Temperature",
      example: "The temperature is 25 degrees Celsius.",
      explanation:
        "Temperature is represented by one numerical value.",
    },
    {
      quantity: "Time",
      example: "The activity lasted 45 minutes.",
      explanation:
        "Duration has magnitude but no spatial direction.",
    },
    {
      quantity: "Speed",
      example: "A vehicle travels at 60 miles per hour.",
      explanation:
        "Speed tells how fast but not where the vehicle is going.",
    },
  ],

  vectorExamples: [
    {
      quantity: "Velocity",
      example: "A vehicle travels 60 miles per hour east.",
      vectorRepresentation: "[60, 0]",
      explanation:
        "Velocity includes both speed and direction.",
    },
    {
      quantity: "Force",
      example: "A force acts 8 newtons upward.",
      vectorRepresentation: "[0, 8]",
      explanation:
        "Force requires magnitude and direction.",
    },
    {
      quantity: "Displacement",
      example: "A person moves 3 meters west and 4 meters north.",
      vectorRepresentation: "[-3, 4]",
      explanation:
        "Displacement describes the net change in position.",
    },
    {
      quantity: "Acceleration",
      example: "An object accelerates downward at 9.8 meters per second squared.",
      vectorRepresentation: "[0, -9.8]",
      explanation:
        "Acceleration describes the direction in which velocity changes.",
    },
  ],

  conceptComparison: [
    {
      scalar: "Distance",
      vector: "Displacement",
      difference:
        "Distance measures total path length. Displacement measures the net change from start to finish.",
    },
    {
      scalar: "Speed",
      vector: "Velocity",
      difference:
        "Speed measures how fast. Velocity measures how fast and in what direction.",
    },
    {
      scalar: "Mass",
      vector: "Weight or gravitational force",
      difference:
        "Mass is an amount of matter. Weight is a force with a direction toward the gravitational source.",
    },
  ],

  formalDefinitions: {
    scalar:
      "A scalar is a mathematical quantity completely described by one numerical magnitude.",

    vector:
      "A vector is a mathematical quantity described by ordered components or by magnitude and direction.",

    vectorNotation:
      "v = [v1, v2, ..., vn]",

    interpretation:
      "The components of a vector must be interpreted according to the coordinate system or feature order being used.",
  },

  signConvention: {
    title: "Using Signs to Represent Direction",

    conventions: [
      {
        direction: "Right or east",
        sign: "Positive horizontal",
      },
      {
        direction: "Left or west",
        sign: "Negative horizontal",
      },
      {
        direction: "Up or north",
        sign: "Positive vertical",
      },
      {
        direction: "Down or south",
        sign: "Negative vertical",
      },
    ],

    note:
      "The chosen convention must be stated and used consistently.",
  },

  workedExamples: [
    {
      id: "example-02-01",

      title: "Classifying Quantities",

      problem:
        "Classify each quantity as a scalar or vector: 12 seconds, 5 meters north, 20 kilograms, and 45 miles per hour west.",

      solutionSteps: [
        "12 seconds has magnitude only, so it is a scalar.",
        "5 meters north contains magnitude and direction, so it is a vector.",
        "20 kilograms has magnitude only, so it is a scalar.",
        "45 miles per hour west contains magnitude and direction, so it is a vector.",
      ],

      answer: {
        scalars: [
          "12 seconds",
          "20 kilograms",
        ],
        vectors: [
          "5 meters north",
          "45 miles per hour west",
        ],
      },
    },

    {
      id: "example-02-02",

      title: "Distance and Displacement",

      problem:
        "A learner walks 5 meters east and then 5 meters west. Find the distance and displacement.",

      solutionSteps: [
        "The total path is 5 + 5 = 10 meters.",
        "The learner returns to the starting position.",
        "The net horizontal change is 5 + (-5) = 0.",
      ],

      answer: {
        distance: "10 meters",
        displacement: "[0, 0]",
      },

      interpretation:
        "The learner traveled a nonzero distance but had zero displacement.",
    },

    {
      id: "example-02-03",

      title: "Speed and Velocity",

      problem:
        "A car travels at 40 miles per hour south. Identify its speed and velocity.",

      solutionSteps: [
        "Speed is the magnitude of motion.",
        "The speed is 40 miles per hour.",
        "Velocity includes the southward direction.",
        "Using north as positive, south is negative.",
      ],

      answer: {
        speed: "40 miles per hour",
        velocity: "[0, -40]",
      },
    },

    {
      id: "example-02-04",

      title: "Net Displacement",

      problem:
        "A robot moves 7 meters east and then 3 meters west. Find its total distance and net displacement.",

      solutionSteps: [
        "Distance equals the total path: 7 + 3 = 10 meters.",
        "Represent east as positive and west as negative.",
        "Net displacement is 7 + (-3) = 4 meters east.",
      ],

      answer: {
        distance: "10 meters",
        displacement: "[4, 0]",
      },
    },
  ],

  realWorldApplications: [
    {
      field: "Physics",
      scalars: [
        "Mass",
        "Time",
        "Temperature",
        "Energy",
      ],
      vectors: [
        "Velocity",
        "Acceleration",
        "Force",
        "Momentum",
      ],
    },
    {
      field: "Robotics",
      scalars: [
        "Battery level",
        "Elapsed time",
        "Sensor temperature",
      ],
      vectors: [
        "Position",
        "Movement",
        "Velocity",
        "Force",
      ],
    },
    {
      field: "Computer Graphics",
      scalars: [
        "Brightness",
        "Opacity",
        "Object scale",
      ],
      vectors: [
        "Position",
        "Camera direction",
        "Surface normal",
        "Color channels",
      ],
    },
    {
      field: "Data Science",
      scalars: [
        "One income value",
        "One age value",
        "One test score",
      ],
      vectors: [
        "A complete customer record",
        "A student feature record",
        "An image represented by pixels",
      ],
    },
  ],

  aiConnection: {
    title: "Scalars and Vectors in Machine Learning",

    explanation:
      "Machine-learning systems use both scalars and vectors. A learning rate is a scalar. A customer record is a feature vector. A neural-network weight may be part of a vector or matrix. A prediction can be a scalar or a vector depending on the problem.",

    examples: [
      {
        item: "Learning rate",
        type: "Scalar",
        reason:
          "It is one numerical value controlling update size.",
      },
      {
        item: "Customer features",
        type: "Vector",
        reason:
          "Several related measurements describe one customer.",
      },
      {
        item: "Image brightness",
        type: "Scalar",
        reason:
          "It may be represented by one intensity value.",
      },
      {
        item: "Image embedding",
        type: "Vector",
        reason:
          "Many components represent the image in a learned feature space.",
      },
    ],
  },

  pythonLab: {
    title: "Classifying and Representing Quantities",

    objective:
      "Use Python variables for scalars and NumPy arrays for vectors.",

    code: `import numpy as np

temperature = 25
elapsed_time = 45

velocity = np.array([60, 0])
displacement = np.array([-3, 4])

print("Temperature:", temperature)
print("Elapsed time:", elapsed_time)
print("Velocity:", velocity)
print("Displacement:", displacement)

print("Velocity shape:", velocity.shape)
print("Displacement shape:", displacement.shape)`,

    questions: [
      "Why is temperature stored as one number?",
      "Why is velocity stored as an array?",
      "What does the first component of velocity represent?",
      "What does the negative component of displacement represent?",
      "Could temperature ever be represented as a vector?",
    ],

    extension:
      "Create a dictionary containing at least three scalars and three vectors from a robotics or data-science example.",
  },

  guidedPractice: [
    {
      id: "guided-02-01",
      question:
        "Classify 15 kilograms as a scalar or vector.",
      answer: "Scalar",
      explanation:
        "Mass has magnitude but no direction.",
    },
    {
      id: "guided-02-02",
      question:
        "Classify 25 meters per second east as a scalar or vector.",
      answer: "Vector",
      explanation:
        "The quantity includes magnitude and direction.",
    },
    {
      id: "guided-02-03",
      question:
        "A person walks 4 meters east and 4 meters west. Find distance and displacement.",
      answer: {
        distance: "8 meters",
        displacement: "[0, 0]",
      },
    },
    {
      id: "guided-02-04",
      question:
        "Represent a downward force of 12 newtons.",
      answer: "[0, -12]",
    },
  ],

  independentPractice: [
    {
      id: "practice-02-01",
      difficulty: "Foundation",
      question:
        "Classify the quantity 30 degrees Celsius.",
      answer: "Scalar",
    },
    {
      id: "practice-02-02",
      difficulty: "Foundation",
      question:
        "Classify the quantity 8 meters north.",
      answer: "Vector",
    },
    {
      id: "practice-02-03",
      difficulty: "Developing",
      question:
        "Explain why distance can be positive even when displacement is zero.",
      answer:
        "Distance measures the complete path, while displacement measures only the net change in position.",
    },
    {
      id: "practice-02-04",
      difficulty: "Developing",
      question:
        "A drone moves 9 meters north and then 4 meters south. Find distance and displacement.",
      answer: {
        distance: "13 meters",
        displacement: "[0, 5]",
      },
    },
    {
      id: "practice-02-05",
      difficulty: "Challenge",
      question:
        "Can a scalar be negative? Explain using an example.",
      sampleAnswer:
        "Yes. A scalar such as temperature can be negative because the sign may indicate position relative to a reference value rather than spatial direction.",
    },
    {
      id: "practice-02-06",
      difficulty: "Challenge",
      question:
        "Explain why a color such as [255, 100, 20] may be represented as a vector even though it does not describe movement.",
      sampleAnswer:
        "The ordered components represent red, green, and blue intensity. Vectors can represent ordered features, not only physical direction.",
    },
  ],

  commonMistakes: [
    {
      mistake:
        "Assuming every quantity with a negative value is a vector.",

      correction:
        "A scalar can be negative. Direction is determined by meaning, not only by the sign.",
    },
    {
      mistake:
        "Thinking speed and velocity are identical.",

      correction:
        "Speed is scalar. Velocity contains both speed and direction.",
    },
    {
      mistake:
        "Thinking distance and displacement are always equal.",

      correction:
        "They are equal only in special cases, such as straight motion without reversing direction.",
    },
    {
      mistake:
        "Assuming all vectors must describe physical movement.",

      correction:
        "Vectors can represent features, measurements, colors, words, images, and many other ordered data objects.",
    },
  ],

  discussionQuestions: [
    "Can a scalar be represented as a one-component vector?",
    "Why is direction essential when describing velocity?",
    "When are distance and displacement equal?",
    "How might a vector representation oversimplify a person or real-world object?",
    "Why must vector component order remain consistent?",
  ],

  formativeAssessment: {
    totalPoints: 10,

    passingScore: 8,

    questions: [
      {
        id: "check-02-01",
        type: "multiple-choice",
        points: 2,
        prompt:
          "Which quantity is a scalar?",
        options: [
          "Force",
          "Velocity",
          "Temperature",
          "Displacement",
        ],
        answer: "Temperature",
      },
      {
        id: "check-02-02",
        type: "multiple-choice",
        points: 2,
        prompt:
          "Which quantity includes both magnitude and direction?",
        options: [
          "Speed",
          "Time",
          "Mass",
          "Velocity",
        ],
        answer: "Velocity",
      },
      {
        id: "check-02-03",
        type: "calculation",
        points: 3,
        prompt:
          "A person walks 6 meters east and then 2 meters west. Find the distance and displacement.",
        answer: {
          distance: "8 meters",
          displacement: "[4, 0]",
        },
      },
      {
        id: "check-02-04",
        type: "explanation",
        points: 3,
        prompt:
          "Explain why an image can be represented as a vector.",
        sampleAnswer:
          "The image can be converted into an ordered collection of pixel or feature values.",
      },
    ],
  },

  researchExtension: {
    title: "Scalars and Vectors in a Selected Career",

    researchQuestion:
      "How does one profession use scalar and vector quantities?",

    careerOptions: [
      "Robotics Engineer",
      "Data Scientist",
      "Physics Researcher",
      "Computer Graphics Developer",
      "AI Engineer",
    ],

    task:
      "Select one career and identify at least three scalar quantities and three vector quantities used in that field.",

    requiredEvidence: [
      "Career description",
      "Three scalar examples",
      "Three vector examples",
      "Explanation of why each classification is correct",
      "One credible source",
    ],
  },

  portfolioArtifact: {
    title: "Scalar and Vector Comparison Guide",

    description:
      "Create a visual guide comparing scalars and vectors across several real-world fields.",

    requiredSections: [
      "Definitions",
      "Physics examples",
      "Robotics examples",
      "Data-science examples",
      "AI examples",
      "Distance versus displacement",
      "Speed versus velocity",
    ],

    requiredEvidence: [
      "At least eight classified quantities",
      "Two vector diagrams",
      "Clear explanations",
      "Reflection",
    ],
  },

  reflection: [
    "What is the most important difference between a scalar and a vector?",
    "Why can a vector represent data even without physical direction?",
    "Which scalar-vector pair was easiest to understand?",
    "Which distinction remains confusing?",
    "How might this lesson help when studying AI?",
  ],

  summary: [
    "A scalar has magnitude only.",
    "A vector has magnitude and direction or ordered components.",
    "Speed is scalar, while velocity is vector.",
    "Distance measures total path, while displacement measures net change.",
    "Signs can help represent opposite directions.",
    "Vectors also represent multidimensional data in computing and AI.",
  ],

  previousLesson: {
    id: "la-m01-l01",
    slug: "why-do-we-need-vectors",
    title: "Why Do We Need Vectors?",
  },

  nextLesson: {
    id: "la-m01-l03",
    slug: "vector-components",
    title: "Vector Components and Coordinate Representation",
  },

  lumineryGuidance: {
    message:
      "Ask whether one number completely describes the quantity. When direction or several ordered features are necessary, use a vector.",

    prompt:
      "For every quantity, state what information is included and what information would be lost by using only one number.",
  },
};

export default lesson02;