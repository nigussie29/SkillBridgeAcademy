const lesson02 = {
  id: "probability-m01-l02",
  courseId: "probability-foundations",
  moduleId: "module-01",

  moduleNumber: 1,
  lessonNumber: 2,

  slug: "random-processes-outcomes-and-sample-spaces",

  title: "Random Processes, Outcomes, and Sample Spaces",

  shortTitle: "Sample Spaces",

  subtitle:
    "Describe uncertain processes precisely by identifying outcomes and constructing complete sample spaces.",

  status: "Available",

  duration: "55–70 minutes",

  level: "AP Statistics Foundation",

  essentialQuestion:
    "How can we describe every possible result of an uncertain process without knowing which result will actually occur?",

  bigIdea:
    "Probability reasoning begins by defining the random process and identifying all possible outcomes. The complete collection of possible outcomes is called the sample space.",

  whyThisLessonExists: {
    title: "Why This Lesson Exists",

    introduction:
      "Before we can calculate probability, we must know exactly what can happen. Weather forecasting, medical testing, financial risk, scientific experiments, games, and artificial intelligence all begin by identifying possible outcomes.",

    centralProblem:
      "How can we build a trustworthy probability model if we have not clearly identified every possible outcome?",

    purpose:
      "This lesson develops the language and representations needed to describe random processes precisely. Students will learn to identify outcomes, construct sample spaces, recognize when order matters, and avoid assuming that outcomes are equally likely without justification.",
  },

  problemFirst: {
    title: "What Can Actually Happen?",

    scenario:
      "Suppose two fair coins are tossed. One student says there are three possible results: two heads, one head, or zero heads. Another student says there are four possible outcomes: HH, HT, TH, and TT. Which student is correct?",

    questions: [
      "What information is each student recording?",
      "Are HT and TH different outcomes?",
      "What happens if we record only the number of heads?",
      "Can two different sample spaces describe the same experiment?",
      "Why must we define what is being recorded before constructing a sample space?",
    ],

    expectedInsight:
      "Both descriptions can be useful, but they represent different levels of information. If the exact sequence is recorded, the sample space is {HH, HT, TH, TT}. If only the number of heads is recorded, the possible values are {0, 1, 2}. A sample space depends on how the random process and recorded outcome are defined.",
  },

  learningObjectives: [
    "Define a random process using precise probability language.",
    "Explain the meaning of a trial in a random process.",
    "Distinguish a random process from an individual outcome.",
    "Define a sample space as the set of all possible outcomes.",
    "Construct complete sample spaces using organized lists.",
    "Represent sample spaces using tables and tree diagrams.",
    "Determine whether order matters when describing outcomes.",
    "Evaluate whether a proposed sample space is complete.",
    "Explain why possible outcomes are not automatically equally likely.",
    "Connect sample spaces to probability models used in statistics and artificial intelligence.",
  ],

  prerequisiteKnowledge: [
    "Probability as a measure of uncertainty",
    "Fractions",
    "Decimals",
    "Percentages",
    "Basic set notation",
    "Logical organization of information",
  ],

  vocabulary: [
    {
      term: "Random Process",
      definition:
        "A repeatable process whose individual result cannot be predicted with certainty before it occurs.",
    },
    {
      term: "Trial",
      definition:
        "One performance or repetition of a random process.",
    },
    {
      term: "Outcome",
      definition:
        "One possible result of a random process.",
    },
    {
      term: "Sample Space",
      definition:
        "The set of all possible outcomes of a random process.",
    },
    {
      term: "Ordered Outcome",
      definition:
        "An outcome for which the order in which results occur is part of the recorded information.",
    },
    {
      term: "Equally Likely Outcomes",
      definition:
        "Outcomes that have the same probability of occurring under a particular probability model.",
    },
    {
      term: "Probability Model",
      definition:
        "A mathematical description of a random process that identifies possible outcomes and assigns probabilities to them.",
    },
  ],

  formulas: [
    {
      id: "sample-space-notation",

      name: "Sample Space Notation",

      formula: "S = {all possible outcomes}",

      meaning:
        "The symbol S is commonly used to represent the sample space.",
    },
    {
      id: "outcome-membership",

      name: "Outcome Membership",

      formula: "x ∈ S",

      meaning:
        "This notation means that outcome x belongs to the sample space S.",
    },
    {
      id: "sample-space-probability",

      name: "Probability of the Sample Space",

      formula: "P(S) = 1",

      meaning:
        "Because the sample space contains every possible outcome, some outcome in the sample space must occur.",
    },
  ],

  probabilityScale: [],

  workedExamples: [
    {
      id: "example-02-01",

      title: "One Fair Coin Toss",

      problem:
        "A fair coin is tossed once. Identify the random process, possible outcomes, and sample space.",

      solutionSteps: [
        "The random process is tossing the coin.",
        "One trial consists of one coin toss.",
        "The coin can land heads or tails.",
        "Write all possible outcomes inside braces.",
      ],

      answer:
        "S = {H, T}",

      interpretation:
        "The sample space describes what can happen. It does not tell us which outcome will occur on the next toss.",
    },

    {
      id: "example-02-02",

      title: "Rolling One Standard Die",

      problem:
        "A standard six-sided die is rolled once. Construct the sample space.",

      solutionSteps: [
        "Identify the possible face values.",
        "A standard die contains the numbers 1 through 6.",
        "Each roll produces exactly one of these values.",
        "List every possible outcome exactly once.",
      ],

      answer:
        "S = {1, 2, 3, 4, 5, 6}",

      interpretation:
        "If the die is fair, these six outcomes are equally likely. Equal likelihood comes from the assumption that the die is fair, not simply because six outcomes exist.",
    },

    {
      id: "example-02-03",

      title: "Two Coin Tosses",

      problem:
        "A coin is tossed twice and the order of the results is recorded. Construct the complete sample space.",

      solutionSteps: [
        "The first toss can produce H or T.",
        "For each first-toss result, the second toss can also produce H or T.",
        "Record the first result followed by the second result.",
        "Check that every possible sequence has been included.",
      ],

      answer:
        "S = {HH, HT, TH, TT}",

      interpretation:
        "HT and TH are different ordered outcomes because the position of heads and tails is different.",
    },

    {
      id: "example-02-04",

      title: "Transportation to School",

      problem:
        "A school records how a randomly selected student arrived that morning. The categories are car, school bus, walking, bicycle, or other. Construct a sample space.",

      solutionSteps: [
        "Identify the variable being recorded: transportation method.",
        "List each allowed category.",
        "Verify that every student can be placed into one of the categories.",
      ],

      answer:
        "S = {car, bus, walk, bicycle, other}",

      interpretation:
        "Outcomes do not need to be numbers. A sample space may contain categories as long as the categories describe every possible recorded outcome.",
    },

    {
      id: "example-02-05",

      title: "Coin and Die Experiment",

      problem:
        "A coin is tossed and a six-sided die is rolled. Construct the complete ordered sample space.",

      solutionSteps: [
        "The coin has 2 possible outcomes: H and T.",
        "The die has 6 possible outcomes: 1 through 6.",
        "Pair each coin outcome with every die outcome.",
        "Check that there are 2 × 6 = 12 outcomes.",
      ],

      answer:
        "S = {(H,1), (H,2), (H,3), (H,4), (H,5), (H,6), (T,1), (T,2), (T,3), (T,4), (T,5), (T,6)}",

      interpretation:
        "Organized representations become increasingly important as random processes contain more stages.",
    },
  ],

  interactiveExploration: {
    title: "Build a Sample Space",

    description:
      "Explore the random process of tossing one coin and rolling one six-sided die.",

    instructions: [
      "Write the possible coin outcomes: H and T.",
      "Write the possible die outcomes: 1, 2, 3, 4, 5, and 6.",
      "Pair H with every possible die value.",
      "Pair T with every possible die value.",
      "Count the total number of ordered outcomes.",
      "Represent the outcomes using an organized list.",
      "Represent the same sample space using a table.",
      "Sketch a tree diagram representing the same experiment.",
    ],

    investigationQuestions: [
      "How many outcomes are in the complete sample space?",
      "How do you know none are missing?",
      "How do you know none are repeated?",
      "Which representation makes completeness easiest to verify?",
      "Why are (H,3) and (T,3) different outcomes?",
      "What would change if the die had eight sides?",
    ],

    expectedDiscovery:
      "One coin toss has 2 possible outcomes and one six-sided die roll has 6 possible outcomes. Combining the two stages produces 2 × 6 = 12 ordered outcomes. Organized lists, tables, and tree diagrams reveal the structure of the sample space.",
  },

  realWorldApplications: [
    {
      field: "Weather Forecasting",

      application:
        "Forecasting systems define possible future weather states before assigning probabilities to those states.",
    },
    {
      field: "Medicine",

      application:
        "Diagnostic studies may consider combinations such as disease present or absent and test positive or negative.",
    },
    {
      field: "Finance",

      application:
        "Financial models define possible outcomes such as repayment, late payment, or default before estimating risk.",
    },
    {
      field: "Insurance",

      application:
        "Insurance models define possible claim outcomes before estimating expected losses.",
    },
    {
      field: "Engineering",

      application:
        "Reliability models may classify components as operating normally, degraded, or failed.",
    },
    {
      field: "Artificial Intelligence",

      application:
        "Classification models begin with a defined collection of possible output classes.",
    },
  ],

  aiConnection: {
    title: "Sample Spaces and Artificial Intelligence",

    explanation:
      "Many AI classification systems operate using an idea closely related to a sample space. The model begins with a collection of possible classes and estimates how strongly the available data support each possibility.",

    example:
      "An image classifier might use the classes {cat, dog, bird}. After analyzing an image, it could assign probabilities such as cat = 0.08, dog = 0.87, and bird = 0.05.",

    caution:
      "The set of possible outcomes matters. If the correct category is missing from the model's available classes, the system may be forced to choose an incorrect category even when its calculations are internally consistent.",

    reflectionQuestion:
      "What could happen if an AI system is required to choose from a sample space that does not contain the true outcome?",
  },

  pythonLab: {
    title: "Generating a Sample Space with Python",

    objective:
      "Use Python to generate every ordered outcome for one coin toss and one six-sided die roll.",

    code: `coin = ["H", "T"]
die = [1, 2, 3, 4, 5, 6]

sample_space = []

for coin_result in coin:
    for die_result in die:
        sample_space.append((coin_result, die_result))

print("Sample space:")
print(sample_space)

print("Number of outcomes:")
print(len(sample_space))`,

    questions: [
      "How many outcomes does the program generate?",
      "Why does the nested loop generate every possible pair?",
      "How does the output compare with your hand-generated sample space?",
      "What would change if the die had eight sides?",
      "How could you modify the program for two coin tosses?",
    ],

    extension:
      "Modify the program to generate all possible outcomes for two coin tosses and one six-sided die roll.",
  },

  guidedPractice: [
    {
      id: "guided-02-01",

      question:
        "A spinner contains four labeled sections: A, B, C, and D. Write the sample space.",

      answer:
        "S = {A, B, C, D}",
    },
    {
      id: "guided-02-02",

      question:
        "A standard six-sided die is rolled. Is 8 an outcome in the sample space?",

      answer:
        "No. The sample space is {1, 2, 3, 4, 5, 6}.",
    },
    {
      id: "guided-02-03",

      question:
        "Two coins are tossed in order. A student writes S = {HH, HT, TT}. Explain the error.",

      answer:
        "The outcome TH is missing. The complete sample space is {HH, HT, TH, TT}.",
    },
    {
      id: "guided-02-04",

      question:
        "A coin is tossed and a spinner labeled 1, 2, and 3 is spun. How many ordered outcomes are possible?",

      answer:
        "There are 2 × 3 = 6 possible ordered outcomes.",
    },
    {
      id: "guided-02-05",

      question:
        "A sample space contains four outcomes. Does this automatically mean each outcome has probability 0.25?",

      answer:
        "No. The outcomes must be known to be equally likely before assigning probability 0.25 to each one.",
    },
  ],

  independentPractice: [
    {
      id: "practice-02-01",

      difficulty: "Foundation",

      question:
        "A weather station classifies tomorrow's temperature as below normal, normal, or above normal. Write the sample space.",

      answer:
        "S = {below normal, normal, above normal}",
    },
    {
      id: "practice-02-02",

      difficulty: "Foundation",

      question:
        "A coin is tossed and a spinner labeled 1, 2, and 3 is spun. Construct the complete ordered sample space.",

      answer:
        "S = {(H,1), (H,2), (H,3), (T,1), (T,2), (T,3)}",
    },
    {
      id: "practice-02-03",

      difficulty: "Developing",

      question:
        "Three coins are tossed. How many ordered outcomes are possible? List them.",

      answer:
        "There are 8 outcomes: {HHH, HHT, HTH, HTT, THH, THT, TTH, TTT}.",
    },
    {
      id: "practice-02-04",

      difficulty: "Developing",

      question:
        "Explain the difference between recording the exact sequence of two coin tosses and recording only the number of heads.",

      sampleAnswer:
        "When exact sequence is recorded, the outcomes are {HH, HT, TH, TT}. When only the number of heads is recorded, the possible values are {0, 1, 2}. The second description combines several ordered outcomes into the same numerical value.",
    },
    {
      id: "practice-02-05",

      difficulty: "AP Reasoning",

      question:
        "A machine produces items classified as acceptable, repairable, or defective. A student assigns probability 1/3 to every category. Explain why that conclusion is not justified from the information provided.",

      sampleAnswer:
        "The three categories describe possible outcomes, but there is no evidence that the outcomes occur with equal probability.",
    },
    {
      id: "practice-02-06",

      difficulty: "AP Reasoning",

      question:
        "Two fair six-sided dice are rolled. A student says the sample space for the sum is {2,3,4,5,6,7,8,9,10,11,12}, so every sum has probability 1/11. Explain the mistake.",

      sampleAnswer:
        "The possible sums are not equally likely. Different sums correspond to different numbers of ordered die outcomes. For example, a sum of 7 can occur in six ordered ways, while a sum of 2 can occur only as (1,1).",
    },
  ],

  commonMistakes: [
    {
      mistake:
        "Confusing the random process with an outcome.",

      correction:
        "The random process is the action being performed. An outcome is one possible result.",

      example:
        "Rolling a die is the random process. Rolling a 4 is an outcome.",
    },
    {
      mistake:
        "Leaving possible outcomes out of the sample space.",

      correction:
        "Use an organized list, table, or tree diagram to verify completeness.",

      example:
        "{HH, HT, TT} is incomplete for two ordered coin tosses because TH is missing.",
    },
    {
      mistake:
        "Assuming all possible outcomes are equally likely.",

      correction:
        "Equal likelihood must be justified by the probability model.",

      example:
        "A spinner can have four possible colors even if the colored regions have different sizes.",
    },
    {
      mistake:
        "Ignoring whether order matters.",

      correction:
        "Determine exactly what information is being recorded before constructing the sample space.",

      example:
        "HT and TH are different when the order of coin tosses is recorded.",
    },
    {
      mistake:
        "Believing randomness means there is no structure.",

      correction:
        "Individual outcomes may be unpredictable while the complete set of possible outcomes can still be precisely described.",
    },
  ],

  discussionQuestions: [
    "Why must a probability model begin by defining what can happen?",
    "Can two different sample spaces describe the same physical experiment?",
    "How does the information we choose to record affect the sample space?",
    "Why is completeness important when constructing a sample space?",
    "Why should equally likely outcomes never be assumed without justification?",
    "How could an incomplete set of outcomes create problems in an AI system?",
  ],

  formativeAssessment: {
    totalPoints: 15,

    passingScore: 12,

    questions: [
      {
        id: "check-02-01",

        type: "concept",

        points: 3,

        prompt:
          "Define a sample space.",

        answer:
          "A sample space is the set of all possible outcomes of a random process.",
      },
      {
        id: "check-02-02",

        type: "concept",

        points: 3,

        prompt:
          "Explain the difference between a random process and an outcome.",

        answer:
          "A random process is the action or procedure involving uncertainty. An outcome is one possible result of that process.",
      },
      {
        id: "check-02-03",

        type: "representation",

        points: 3,

        prompt:
          "A coin is tossed twice. Write the complete ordered sample space.",

        answer:
          "S = {HH, HT, TH, TT}",
      },
      {
        id: "check-02-04",

        type: "reasoning",

        points: 3,

        prompt:
          "A bag can produce red, blue, or green when one object is selected. Explain why these three possible colors do not automatically have probability 1/3.",

        sampleAnswer:
          "The colors are possible outcomes, but their probabilities depend on how many objects of each color are in the bag or another justified probability model.",
      },
      {
        id: "check-02-05",

        type: "application",

        points: 3,

        prompt:
          "A coin is tossed and one six-sided die is rolled. How many ordered outcomes are in the sample space? Explain.",

        answer:
          "There are 12 outcomes because each of the 2 possible coin results can be paired with each of the 6 possible die results: 2 × 6 = 12.",
      },
    ],
  },

  researchExtension: {
    title: "How Real Systems Define Possible Outcomes",

    researchQuestion:
      "How does a real-world probability or prediction system define the outcomes it is attempting to predict?",

    applicationOptions: [
      "Weather forecasting",
      "Medical testing",
      "Credit risk",
      "Insurance",
      "Sports prediction",
      "Fraud detection",
      "Artificial intelligence classification",
    ],

    task:
      "Choose one real-world prediction system. Identify the uncertain process, describe the possible outcomes, construct or describe its sample space, and evaluate whether important possibilities might be missing.",

    requiredEvidence: [
      "Description of the uncertain process",
      "Definition of one outcome",
      "Proposed sample space",
      "Explanation of whether the sample space is complete",
      "Discussion of whether the outcomes are equally likely",
      "One modeling limitation",
      "One credible source",
    ],
  },

  portfolioArtifact: {
    title: "Sample Space Design Challenge",

    description:
      "Create a one-page visual representation of a random process and its complete sample space.",

    requiredSections: [
      "Random process",
      "Definition of one trial",
      "Possible outcomes",
      "Complete sample space",
      "Visual representation",
      "Explanation of whether order matters",
      "Explanation of whether outcomes are equally likely",
      "Real-world interpretation",
    ],

    requiredEvidence: [
      "Correct sample-space notation",
      "Complete outcome representation",
      "Organized list, table, or tree diagram",
      "Clear mathematical reasoning",
      "One real-world connection",
    ],
  },

  growthIndicators: [
    "Conceptual Understanding",
    "Mathematical Organization",
    "Statistical Communication",
    "Model Definition",
    "Computational Thinking",
    "Interpretation in Context",
    "Curiosity and Reflection",
  ],

  reflection: [
    "What is the difference between uncertainty and lack of structure?",
    "Why must possible outcomes be defined before probabilities are assigned?",
    "How can an organized representation prevent mistakes?",
    "When might two people reasonably construct different sample spaces for the same physical experiment?",
    "Why is it dangerous to assume that all outcomes are equally likely?",
    "How does the idea of a sample space connect to artificial intelligence classification?",
  ],

  summary: [
    "A random process is a repeatable process whose individual outcome cannot be predicted with certainty.",
    "A trial is one performance of a random process.",
    "An outcome is one possible result.",
    "A sample space contains all possible outcomes.",
    "The sample space depends on what information is being recorded.",
    "Order may matter when describing outcomes.",
    "Organized lists, tables, and tree diagrams help construct complete sample spaces.",
    "Possible outcomes are not automatically equally likely.",
    "A complete sample space is necessary before a trustworthy probability model can be constructed.",
    "Sample-space reasoning is used in statistics, science, medicine, finance, engineering, and artificial intelligence.",
  ],

  previousLesson: {
    id: "probability-m01-l01",
    slug: "probability-as-a-model-of-uncertainty",
    title: "Probability as a Mathematical Model of Uncertainty",
  },

  nextLesson: {
    id: "probability-m01-l03",
    slug: "events-and-set-notation",
    title: "Events and Set Notation",
  },

  lumineryGuidance: {
    message:
      "Before asking how likely something is, first ask what can happen.",

    prompt:
      "Define the random process carefully, identify what counts as one outcome, construct the complete sample space, and only then begin reasoning about probability.",

    coachingQuestions: [
      "What exactly is the random process?",
      "What counts as one trial?",
      "What information is being recorded?",
      "What are all possible outcomes?",
      "Have you included every possible outcome?",
      "Does order matter?",
      "Are you assuming the outcomes are equally likely?",
      "What evidence would justify equal likelihood?",
    ],
  },
};

export default lesson02;