const lesson01 = {
  id: "probability-m02-l01",
  courseId: "probability-foundations",
  moduleId: "module-02",

  moduleNumber: 2,
  lessonNumber: 1,

  slug: "fundamental-counting-principle",

  title: "Fundamental Counting Principle",

  shortTitle: "Counting Principle",

  subtitle:
    "Learn how to count the number of possible outcomes in multi-step situations without listing every possibility.",

  status: "Available",

  duration: "55–70 minutes",

  level: "AP Statistics Foundation",

  essentialQuestion:
    "How can we determine the number of possible outcomes in a multi-step process without listing every outcome individually?",

  bigIdea:
    "When a process consists of several stages, the total number of possible outcomes can often be found by multiplying the number of choices available at each stage.",

  whyThisLessonExists: {
    title: "Why This Lesson Exists",

    introduction:
      "Probability problems often become difficult because the number of possible outcomes grows very quickly. Before calculating a probability, we frequently need to know how many outcomes are possible.",

    centralProblem:
      "How can we count a large number of possibilities efficiently without writing every outcome one by one?",

    purpose:
      "The Fundamental Counting Principle provides a systematic way to count outcomes in multi-stage processes. It becomes an important foundation for probability, permutations, combinations, simulations, computer science, and data analysis.",
  },

  problemFirst: {
    title: "How Many Different Outfits Are Possible?",

    scenario:
      "A student has 4 shirts, 3 pairs of pants, and 2 pairs of shoes. The student chooses exactly one shirt, one pair of pants, and one pair of shoes each morning.",

    questions: [
      "How many choices are available for the shirt?",
      "For each shirt, how many pants choices are possible?",
      "For each shirt-and-pants combination, how many shoe choices are possible?",
      "Could you list every possible outfit?",
      "Is there a faster mathematical method?",
      "What operation appears naturally when combining the stages?",
    ],

    expectedInsight:
      "There are 4 × 3 × 2 = 24 possible outfits. Instead of listing all 24 possibilities, we multiply the number of choices available at each independent stage of the selection process.",
  },

  learningObjectives: [
    "Explain the Fundamental Counting Principle in words.",
    "Identify the stages of a multi-step counting process.",
    "Determine the number of choices available at each stage.",
    "Use multiplication to calculate the total number of possible outcomes.",
    "Represent counting situations using tree diagrams and organized reasoning.",
    "Distinguish between adding possibilities and multiplying stages.",
    "Apply counting principles to probability sample spaces.",
    "Use computational tools to verify counting results.",
    "Interpret counting results within real-world contexts.",
  ],

  prerequisiteKnowledge: [
    "Basic multiplication",
    "Sample spaces",
    "Events",
    "Probability models",
    "Basic set reasoning",
    "Reading simple tables and diagrams",
  ],

  vocabulary: [
    {
      term: "Counting Principle",
      definition:
        "A mathematical rule used to determine the total number of outcomes in a multi-stage process.",
    },
    {
      term: "Fundamental Counting Principle",
      definition:
        "If one stage can occur in m ways and another stage can occur in n ways, then the two-stage process can occur in m × n ways.",
    },
    {
      term: "Stage",
      definition:
        "One step or decision within a multi-step process.",
    },
    {
      term: "Outcome",
      definition:
        "One complete possible result of a process.",
    },
    {
      term: "Sample Space",
      definition:
        "The collection of all possible outcomes of a random process.",
    },
    {
      term: "Tree Diagram",
      definition:
        "A branching diagram used to organize and display outcomes from a sequence of choices or events.",
    },
    {
      term: "Combination of Choices",
      definition:
        "A complete selection formed by choosing one option from each required stage.",
    },
  ],

  formulas: [
    {
      id: "fundamental-counting-principle",

      name: "Fundamental Counting Principle",

      formula: "N = n₁ × n₂ × n₃ × ... × nₖ",

      meaning:
        "If a process has k stages and stage i has nᵢ possible choices, multiply the numbers of choices to find the total number N of complete outcomes.",
    },
    {
      id: "two-stage-counting",

      name: "Two-Stage Counting",

      formula: "N = m × n",

      meaning:
        "If the first stage has m possibilities and the second stage has n possibilities for each first-stage choice, there are m × n total outcomes.",
    },
    {
      id: "probability-after-counting",

      name: "Probability with Equally Likely Outcomes",

      formula:
        "P(A) = number of favorable outcomes ÷ total number of possible outcomes",

      meaning:
        "Counting techniques can determine the numerator and denominator needed for probability calculations when outcomes are equally likely.",
    },
  ],

  workedExamples: [
    {
      id: "example-02-01",

      title: "Choosing an Outfit",

      problem:
        "A student has 5 shirts and 3 pairs of pants. How many different shirt-and-pants outfits can be created?",

      solutionSteps: [
        "Identify the first stage: choose a shirt.",
        "There are 5 possible shirt choices.",
        "Identify the second stage: choose a pair of pants.",
        "There are 3 possible pants choices for every shirt.",
        "Multiply the numbers of choices: 5 × 3 = 15.",
      ],

      answer: "15 different outfits",

      interpretation:
        "Every shirt can be paired with each of the three pairs of pants.",
    },

    {
      id: "example-02-02",

      title: "Building a Meal",

      problem:
        "A restaurant offers 3 appetizers, 5 main dishes, and 4 desserts. If a customer selects one item from each category, how many different meals are possible?",

      solutionSteps: [
        "There are 3 appetizer choices.",
        "For each appetizer, there are 5 main-dish choices.",
        "For each appetizer-main-dish pair, there are 4 dessert choices.",
        "Apply the Fundamental Counting Principle.",
        "Calculate 3 × 5 × 4 = 60.",
      ],

      answer: "60 different meals",

      interpretation:
        "The number of possibilities grows multiplicatively because every choice at one stage can be paired with every available choice at the next stage.",
    },

    {
      id: "example-02-03",

      title: "Creating an Identification Code",

      problem:
        "A code contains one letter followed by two digits. The letter can be A, B, C, or D. Each digit can be any integer from 0 through 9. Repetition is allowed. How many codes are possible?",

      solutionSteps: [
        "The first position has 4 possibilities.",
        "The second position has 10 possibilities.",
        "The third position also has 10 possibilities because repetition is allowed.",
        "Multiply: 4 × 10 × 10.",
      ],

      answer: "400 possible codes",

      interpretation:
        "The counting principle works for more than physical choices. It also counts sequences, passwords, codes, and digital configurations.",
    },

    {
      id: "example-02-04",

      title: "Counting a Sample Space",

      problem:
        "A fair coin is tossed and then a standard six-sided die is rolled. How many outcomes are in the complete sample space?",

      solutionSteps: [
        "The coin has 2 possible outcomes: H or T.",
        "For each coin outcome, the die has 6 possible outcomes.",
        "Multiply 2 × 6.",
      ],

      answer: "12 possible outcomes",

      interpretation:
        "The Fundamental Counting Principle allows us to determine the size of a sample space without writing all twelve ordered outcomes.",
    },

    {
      id: "example-02-05",

      title: "Using Counting to Find Probability",

      problem:
        "A fair coin is tossed and a fair six-sided die is rolled. What is the probability of obtaining heads and an even number?",

      solutionSteps: [
        "The complete experiment has 2 × 6 = 12 equally likely outcomes.",
        "For heads, there is 1 acceptable coin outcome.",
        "There are 3 even die outcomes: 2, 4, and 6.",
        "The favorable event contains 1 × 3 = 3 outcomes.",
        "Calculate P(A) = 3 ÷ 12.",
        "Simplify to 1/4.",
      ],

      answer: "1/4 = 0.25",

      interpretation:
        "Counting techniques help determine both the total number of outcomes and the number that satisfy an event.",
    },
  ],

  interactiveExploration: {
    title: "Build a Tree Diagram",

    instructions: [
      "Suppose a café offers two drink sizes: small and large.",
      "The café offers three flavors: vanilla, chocolate, and caramel.",
      "A customer may choose whipped cream or no whipped cream.",
      "Draw a branch for each drink-size choice.",
      "From each size, branch to the three flavor choices.",
      "From each flavor, branch to the two topping choices.",
      "Count the complete paths through your tree diagram.",
      "Compare the result with 2 × 3 × 2.",
    ],

    investigationQuestions: [
      "How many stages are in the process?",
      "How many choices are available at each stage?",
      "How many complete paths appear in the tree diagram?",
      "Why does multiplication give the same result?",
      "What would happen if another topping option were added?",
    ],

    expectedDiscovery:
      "The tree diagram contains 12 complete paths, matching 2 × 3 × 2 = 12. Each path represents one complete outcome.",
  },

  realWorldApplications: [
    {
      field: "Computer Science",

      application:
        "Counting principles help determine the number of possible passwords, configurations, search paths, and system states.",
    },
    {
      field: "Cybersecurity",

      application:
        "Password security depends partly on the size of the possible password space.",
    },
    {
      field: "Genetics",

      application:
        "Possible genetic outcomes can be counted by considering combinations of inherited traits.",
    },
    {
      field: "Manufacturing",

      application:
        "Companies count possible product configurations involving colors, sizes, materials, and optional features.",
    },
    {
      field: "Business",

      application:
        "Businesses analyze possible combinations of products, pricing options, marketing strategies, and customer choices.",
    },
    {
      field: "Statistics",

      application:
        "Counting techniques help construct sample spaces and determine probabilities of events.",
    },
    {
      field: "Artificial Intelligence",

      application:
        "AI systems often operate within enormous spaces of possible feature combinations, actions, states, and model configurations.",
    },
  ],

  aiConnection: {
    title: "Why Counting Matters in Artificial Intelligence",

    explanation:
      "Artificial intelligence frequently deals with very large spaces of possibilities. Even a small number of choices across many variables can produce millions or billions of possible configurations.",

    example:
      "Suppose an AI experiment tests 4 learning rates, 3 model architectures, 5 batch sizes, and 2 optimization methods. The experiment contains 4 × 3 × 5 × 2 = 120 possible configurations.",

    caution:
      "Large possibility spaces can become computationally expensive. AI engineers often use intelligent search, optimization, random sampling, and experimental design instead of testing every possible configuration.",

    reflectionQuestion:
      "Why might an AI engineer need to know the size of a search space before deciding how to train or optimize a model?",
  },

  pythonLab: {
    title: "Verify the Counting Principle with Python",

    objective:
      "Generate every outcome of a multi-stage process and compare the number of generated outcomes with the Fundamental Counting Principle.",

    code: `from itertools import product

shirts = ["Blue", "White", "Black"]
pants = ["Jeans", "Khaki"]
shoes = ["Sneakers", "Boots"]

outfits = list(product(shirts, pants, shoes))

print("Possible outfits:")

for outfit in outfits:
    print(outfit)

count_from_python = len(outfits)
count_from_principle = len(shirts) * len(pants) * len(shoes)

print("\\nPython count:", count_from_python)
print("Counting Principle:", count_from_principle)`,
    
    questions: [
      "How many outfits does Python generate?",
      "What calculation represents the Fundamental Counting Principle?",
      "Why do the two counts agree?",
      "What happens if another shirt is added?",
      "How could this program be adapted to count meal choices?",
    ],

    extension:
      "Add a fourth category called accessories with three options. Predict the new number of outcomes before running the program, then verify your prediction with Python.",
  },

  guidedPractice: [
    {
      id: "guided-02-01",

      question:
        "A student has 4 shirts and 2 pairs of pants. How many outfits are possible?",

      answer: "4 × 2 = 8 outfits",
    },
    {
      id: "guided-02-02",

      question:
        "A restaurant offers 3 drinks and 6 sandwiches. How many drink-and-sandwich meals are possible?",

      answer: "3 × 6 = 18 meals",
    },
    {
      id: "guided-02-03",

      question:
        "A spinner has 4 possible outcomes and a die has 6 possible outcomes. How many outcomes are possible when both are used?",

      answer: "4 × 6 = 24 outcomes",
    },
    {
      id: "guided-02-04",

      question:
        "A code contains one of 5 letters followed by one of 10 digits. How many codes are possible?",

      answer: "5 × 10 = 50 codes",
    },
    {
      id: "guided-02-05",

      question:
        "A process has 3 stages with 2, 5, and 4 choices respectively. How many complete outcomes are possible?",

      answer: "2 × 5 × 4 = 40 outcomes",
    },
  ],

  independentPractice: [
    {
      id: "practice-02-01",

      difficulty: "Foundation",

      question:
        "A store sells a shoe in 5 colors and 6 sizes. How many color-size combinations are possible?",

      answer: "5 × 6 = 30",
    },
    {
      id: "practice-02-02",

      difficulty: "Foundation",

      question:
        "A lunch includes one of 4 sandwiches, one of 3 drinks, and one of 2 desserts. How many lunches are possible?",

      answer: "4 × 3 × 2 = 24",
    },
    {
      id: "practice-02-03",

      difficulty: "Developing",

      question:
        "A password contains one of 26 lowercase letters followed by two digits. Repetition is allowed. How many passwords are possible?",

      answer: "26 × 10 × 10 = 2,600",
    },
    {
      id: "practice-02-04",

      difficulty: "Developing",

      question:
        "Two six-sided dice are rolled. Use the Fundamental Counting Principle to determine the size of the sample space.",

      answer: "6 × 6 = 36 outcomes",
    },
    {
      id: "practice-02-05",

      difficulty: "Challenge",

      question:
        "A car can be ordered in 6 colors, 3 engine types, 2 transmission types, and 4 interior styles. Determine the number of possible configurations.",

      answer: "6 × 3 × 2 × 4 = 144 configurations",
    },
    {
      id: "practice-02-06",

      difficulty: "AP Reasoning",

      question:
        "A fair coin is tossed twice and a standard die is rolled once. Determine the total number of equally likely outcomes and explain your reasoning.",

      sampleAnswer:
        "Each coin toss has 2 possible outcomes and the die has 6 possible outcomes. Therefore, the complete experiment has 2 × 2 × 6 = 24 equally likely outcomes.",
    },
    {
      id: "practice-02-07",

      difficulty: "AP Reasoning",

      question:
        "A school randomly selects one student from each of three groups containing 8, 10, and 12 students. How many different three-student selections are possible if one student must come from each group?",

      answer: "8 × 10 × 12 = 960 selections",
    },
  ],

  commonMistakes: [
    {
      mistake:
        "Adding the number of choices when the process requires one choice from each stage.",

      correction:
        "For consecutive stages where every stage must occur, multiply the numbers of choices.",
    },
    {
      mistake:
        "Multiplying choices that represent alternatives rather than stages.",

      correction:
        "First determine whether the situation represents separate stages or mutually exclusive alternatives.",
    },
    {
      mistake:
        "Forgetting a stage in the process.",

      correction:
        "Identify and write every required decision before multiplying.",
    },
    {
      mistake:
        "Assuming choices remain the same when repetition is not allowed.",

      correction:
        "If an option cannot be used again, the number of available choices may decrease at later stages.",
    },
    {
      mistake:
        "Using the counting result as a probability.",

      correction:
        "A count tells how many outcomes exist. Probability requires comparing favorable outcomes with the total outcome space.",
    },
  ],

  discussionQuestions: [
    "Why is multiplication appropriate for a sequence of choices?",
    "When would listing outcomes become inefficient?",
    "How does a tree diagram represent the counting principle visually?",
    "How does counting help us construct probability models?",
    "Why can possibility spaces become enormous in computer science and AI?",
    "What changes when repetition is not allowed?",
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
          "State the Fundamental Counting Principle in your own words.",

        sampleAnswer:
          "When a process contains multiple stages, multiply the number of choices available at each stage to determine the total number of complete outcomes.",
      },
      {
        id: "check-02-02",

        type: "calculation",

        points: 3,

        prompt:
          "A restaurant has 4 entrées, 3 drinks, and 2 desserts. How many complete meals are possible?",

        answer: "4 × 3 × 2 = 24 meals",
      },
      {
        id: "check-02-03",

        type: "application",

        points: 3,

        prompt:
          "A coin is tossed and an eight-section spinner is spun. Determine the total number of possible outcomes.",

        answer: "2 × 8 = 16 outcomes",
      },
      {
        id: "check-02-04",

        type: "reasoning",

        points: 3,

        prompt:
          "Explain why 3 shirt choices and 4 pants choices produce 12 outfits rather than 7 outfits.",

        sampleAnswer:
          "Each of the three shirts can be paired with each of the four pants, producing 4 outfits per shirt. Therefore there are 3 × 4 = 12 complete combinations.",
      },
      {
        id: "check-02-05",

        type: "AP Reasoning",

        points: 3,

        prompt:
          "A random experiment consists of selecting one of 3 cards and then rolling a six-sided die. An event contains 6 of the possible outcomes. Assuming all complete outcomes are equally likely, find the probability of the event.",

        answer:
          "There are 3 × 6 = 18 total outcomes. Therefore P(A) = 6/18 = 1/3.",
      },
    ],
  },

  researchExtension: {
    title: "How Large Is a Password Space?",

    researchQuestion:
      "How does increasing password length or the number of allowed characters affect the number of possible passwords?",

    applicationOptions: [
      "Numeric PIN",
      "Lowercase password",
      "Letters and numbers",
      "Case-sensitive password",
      "Cybersecurity authentication",
      "Device access code",
    ],

    task:
      "Choose a password system and determine the number of possible passwords. Explain how the Fundamental Counting Principle is used and discuss why a larger possibility space can improve security.",

    requiredEvidence: [
      "Number of positions",
      "Choices available at each position",
      "Counting calculation",
      "Total number of possible passwords",
      "Interpretation of the result",
      "One credible cybersecurity source",
    ],
  },

  portfolioArtifact: {
    title: "Counting the Possibility Space",

    description:
      "Create a one-page visual analysis of a real multi-stage decision or system and calculate the total number of possible outcomes.",

    requiredSections: [
      "Real-world situation",
      "Stages of the process",
      "Choices at each stage",
      "Counting Principle calculation",
      "Total outcome count",
      "Visual representation",
      "Interpretation",
      "Reflection",
    ],

    requiredEvidence: [
      "At least three stages",
      "Correct multiplication model",
      "Correct total count",
      "Tree diagram, table, or other visual",
      "Real-world interpretation",
    ],
  },

  growthIndicators: [
    "Conceptual Understanding",
    "Mathematical Reasoning",
    "Statistical Communication",
    "Problem Decomposition",
    "Computational Thinking",
    "Interpretation in Context",
  ],

  reflection: [
    "How would you explain the Fundamental Counting Principle to another student?",
    "Why is multiplication used instead of addition in a multi-stage selection process?",
    "How does a tree diagram connect to the counting formula?",
    "How can counting techniques help with probability?",
    "Where might large possibility spaces appear in technology or artificial intelligence?",
  ],

  summary: [
    "Counting is an important foundation for probability.",
    "A multi-stage process can often be analyzed one stage at a time.",
    "The Fundamental Counting Principle multiplies the number of choices at each stage.",
    "For stages with n₁, n₂, ..., nₖ choices, the total number of outcomes is n₁ × n₂ × ... × nₖ.",
    "Tree diagrams provide a visual representation of multi-stage outcomes.",
    "Counting techniques can determine the size of a sample space.",
    "Probability calculations often depend on accurate counting.",
    "Counting principles are widely used in statistics, computer science, cybersecurity, business, and artificial intelligence.",
  ],

  previousLesson: {
    id: "probability-m01-l08",
    slug: "module-1-probability-synthesis",
    title: "Module 1 Probability Synthesis",
  },

  nextLesson: null,

  lumineryGuidance: {
    message:
      "Do not begin by multiplying numbers automatically. First identify the stages, then determine how many choices are available at each stage.",

    prompt:
      "Break the problem into decisions. Ask: What happens first? What happens next? How many choices are available at each step?",

    coachingQuestions: [
      "What are the stages of this process?",
      "How many choices exist at the first stage?",
      "How many choices exist at each later stage?",
      "Does every complete outcome require one choice from every stage?",
      "Should the choices be multiplied or added?",
      "Can you verify your answer with a tree diagram or small example?",
    ],
  },
};

export default lesson01;