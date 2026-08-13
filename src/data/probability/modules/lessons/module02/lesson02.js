const lesson02 = {
  id: "probability-m02-l02",
  courseId: "probability-foundations",
  moduleId: "module-02",

  moduleNumber: 2,
  lessonNumber: 2,

  slug: "factorials-and-ordered-arrangements",

  title: "Factorials and Ordered Arrangements",

  shortTitle: "Factorials",

  subtitle:
    "Develop factorial notation as an efficient way to count ordered arrangements of distinct objects.",

  status: "Available",

  duration: "55–70 minutes",

  level: "AP Statistics Foundation",

  essentialQuestion:
    "How can factorial notation help us count ordered arrangements without listing every possible arrangement?",

  bigIdea:
    "When all distinct objects are arranged in order, the number of possible arrangements follows a decreasing multiplication pattern: n × (n - 1) × (n - 2) × ... × 1. Factorial notation provides a compact way to represent this count.",

  whyThisLessonExists: {
    title: "Why This Lesson Exists",

    introduction:
      "Many probability problems require us to count possible arrangements before we can calculate a probability. When only a few objects are involved, we may be able to list every possibility. As the number of objects increases, however, listing becomes inefficient and error-prone.",

    centralProblem:
      "How can we count every possible ordering of several distinct objects without writing every arrangement individually?",

    purpose:
      "Factorial notation transforms repeated multiplication into a compact mathematical tool. It prepares students to reason efficiently about ordered sample spaces and creates the foundation for permutations in the next lesson.",
  },

  problemFirst: {
    title: "How Many Ways Can Five Students Present?",

    scenario:
      "Five students—Amina, Daniel, Sofia, Marcus, and Hana—must give presentations. Every student presents exactly once, and the order of the presentations matters. The teacher wants to know how many different presentation schedules are possible.",

    questions: [
      "How many choices are available for the first presentation position?",
      "After the first student is selected, how many choices remain for the second position?",
      "How many choices remain for the third, fourth, and fifth positions?",
      "How can the Fundamental Counting Principle be used?",
      "What multiplication expression represents all possible schedules?",
      "Can the multiplication expression be written more efficiently?",
      "Why does the number of available choices decrease at every position?",
    ],

    expectedInsight:
      "There are 5 choices for the first position, then 4, then 3, then 2, then 1. By the Fundamental Counting Principle, the number of schedules is 5 × 4 × 3 × 2 × 1 = 120. This product is written compactly as 5!, read as 'five factorial.'",
  },

  learningObjectives: [
    "Explain the meaning of factorial notation.",
    "Evaluate factorial expressions accurately.",
    "Explain why 0! is defined as 1.",
    "Use the Fundamental Counting Principle to derive factorial counting patterns.",
    "Count arrangements of distinct objects when every object is used.",
    "Distinguish an arrangement problem from a simple multi-stage choice problem.",
    "Connect factorials with sample-space size in probability problems.",
    "Use Python to calculate and verify factorial values.",
    "Communicate counting reasoning clearly using AP Statistics–appropriate mathematical language.",
  ],

  prerequisiteKnowledge: [
    "Fundamental Counting Principle",
    "Multiplication of whole numbers",
    "Sample spaces",
    "Multi-stage counting",
    "Basic probability language",
    "Recognizing when order matters",
  ],

  vocabulary: [
    {
      term: "Factorial",
      definition:
        "The product of a positive integer and every positive integer below it. For example, 5! = 5 × 4 × 3 × 2 × 1.",
    },
    {
      term: "Factorial Notation",
      definition:
        "A compact notation using an exclamation mark to represent a descending product of positive integers.",
    },
    {
      term: "Arrangement",
      definition:
        "An ordering of objects in which position may affect the outcome.",
    },
    {
      term: "Distinct Objects",
      definition:
        "Objects that can be distinguished from one another and treated as different items.",
    },
    {
      term: "Order Matters",
      definition:
        "A condition in which changing the position of objects creates a different outcome.",
    },
    {
      term: "Position",
      definition:
        "A specific location within an ordered arrangement, such as first, second, or third.",
    },
    {
      term: "Sample-Space Size",
      definition:
        "The total number of possible outcomes in a random process.",
    },
  ],

  formulas: [
    {
      id: "factorial-definition",

      name: "Factorial",

      formula:
        "n! = n × (n - 1) × (n - 2) × ... × 3 × 2 × 1",

      meaning:
        "For a positive integer n, n! is the product of all positive integers from n down to 1.",
    },
    {
      id: "zero-factorial",

      name: "Zero Factorial",

      formula: "0! = 1",

      meaning:
        "Zero factorial is defined as 1 so that important counting formulas remain mathematically consistent.",
    },
    {
      id: "all-distinct-arrangements",

      name: "Arrangements of All Distinct Objects",

      formula: "number of arrangements = n!",

      meaning:
        "If n distinct objects are all placed into n ordered positions, there are n! possible arrangements.",
    },
  ],

  workedExamples: [
    {
      id: "example-02-01",

      title: "Evaluating a Factorial",

      problem:
        "Evaluate 6!.",

      solutionSteps: [
        "Write the factorial as a descending product.",
        "6! = 6 × 5 × 4 × 3 × 2 × 1.",
        "Calculate 6 × 5 = 30.",
        "Calculate 30 × 4 = 120.",
        "Calculate 120 × 3 = 360.",
        "Calculate 360 × 2 = 720.",
      ],

      answer: "6! = 720",

      interpretation:
        "Six distinct objects can be arranged into six positions in 720 different ways.",
    },

    {
      id: "example-02-02",

      title: "Arranging Books on a Shelf",

      problem:
        "Four different mathematics books are placed on a shelf. How many different orders are possible?",

      solutionSteps: [
        "There are 4 choices for the first position.",
        "After one book is placed, 3 choices remain.",
        "Then 2 choices remain.",
        "The final position has 1 choice.",
        "Apply the Fundamental Counting Principle: 4 × 3 × 2 × 1.",
        "Recognize the product as 4!.",
      ],

      answer:
        "4! = 24 different arrangements",

      interpretation:
        "Because all four books are distinct and every book is used, each different ordering is a separate arrangement.",
    },

    {
      id: "example-02-03",

      title: "Students Standing in a Line",

      problem:
        "Seven students must stand in a line for a photograph. How many different lineups are possible?",

      solutionSteps: [
        "The first position can be filled by any of 7 students.",
        "The second position has 6 remaining choices.",
        "Continue with 5, 4, 3, 2, and 1 choices.",
        "Multiply the numbers of choices.",
        "7 × 6 × 5 × 4 × 3 × 2 × 1 = 7!.",
      ],

      answer:
        "7! = 5,040 possible lineups",

      interpretation:
        "A change in the students' order produces a different photograph lineup, so order matters.",
    },

    {
      id: "example-02-04",

      title: "Creating an Ordered Sample Space",

      problem:
        "Three distinct cards labeled A, B, and C are shuffled. How many possible complete orders can occur?",

      solutionSteps: [
        "There are 3 choices for the first card.",
        "There are 2 remaining choices for the second card.",
        "There is 1 remaining choice for the third card.",
        "Multiply: 3 × 2 × 1 = 6.",
        "Write the result as 3! = 6.",
      ],

      answer:
        "There are 6 possible orders.",

      interpretation:
        "The sample space is {ABC, ACB, BAC, BCA, CAB, CBA}. Factorial counting gives the same result without requiring us to list the outcomes.",
    },

    {
      id: "example-02-05",

      title: "Factorials Inside a Probability Problem",

      problem:
        "Four runners are equally likely to finish a race in any order, with no ties. What is the probability that Maya finishes first and Liam finishes second?",

      solutionSteps: [
        "The total number of finishing orders is 4! = 24.",
        "Fix Maya in first place.",
        "Fix Liam in second place.",
        "The remaining two runners can occupy the final two positions in 2! ways.",
        "Therefore there are 2 favorable outcomes.",
        "Calculate probability: 2 ÷ 24 = 1/12.",
      ],

      answer:
        "P(Maya first and Liam second) = 1/12",

      interpretation:
        "Factorials help count both the complete sample space and the outcomes satisfying a specified condition.",
    },
  ],

  interactiveExploration: {
    title: "Build the Arrangement Pattern",

    instructions: [
      "Begin with two distinct cards labeled A and B.",
      "List every possible order and count them.",
      "Add a third card labeled C and list every possible order.",
      "Compare your result with 3!.",
      "Add a fourth card labeled D.",
      "Instead of listing all outcomes, predict the total using factorial notation.",
      "Explain why adding one new object multiplies the previous number of arrangements by the new number of positions.",
    ],

    investigationQuestions: [
      "How many arrangements exist for 2 objects?",
      "How many exist for 3 objects?",
      "How many exist for 4 objects?",
      "What numerical pattern do you observe?",
      "Why does the number of arrangements grow so quickly?",
      "At what point does listing every outcome become inefficient?",
    ],

    expectedDiscovery:
      "The number of arrangements follows the factorial pattern: 2! = 2, 3! = 6, 4! = 24, 5! = 120, and so on. Each additional distinct object creates multiple new arrangements because it can occupy every possible position.",
  },

  realWorldApplications: [
    {
      field: "Scheduling",
      application:
        "Factorials count possible schedules when several distinct tasks or people must be placed into an ordered sequence.",
    },
    {
      field: "Sports",
      application:
        "Possible finishing orders, rankings, and tournament positions often involve ordered counting.",
    },
    {
      field: "Computer Science",
      application:
        "Algorithms may examine possible orderings of tasks, data, routes, or operations.",
    },
    {
      field: "Operations Research",
      application:
        "Businesses analyze possible sequences for deliveries, manufacturing steps, and resource assignments.",
    },
    {
      field: "Cryptography",
      application:
        "Large numbers of possible arrangements can contribute to the size of a search space.",
    },
    {
      field: "Artificial Intelligence",
      application:
        "Search and optimization problems may involve enormous spaces of possible orderings that cannot be checked one by one.",
    },
  ],

  aiConnection: {
    title: "Why Factorials Matter in AI Search Problems",

    explanation:
      "Artificial intelligence frequently searches among many possible decisions or arrangements. Factorial growth demonstrates why exhaustive search becomes computationally difficult very quickly.",

    example:
      "If an AI system must consider every possible order for 10 distinct tasks, there are 10! = 3,628,800 possible orders. With 15 tasks, the number becomes more than one trillion.",

    caution:
      "Because factorial growth is extremely rapid, practical AI systems often use heuristics, optimization algorithms, pruning strategies, or mathematical structure instead of checking every arrangement.",

    reflectionQuestion:
      "Why might an AI system need a smarter strategy than testing every possible arrangement when the number of objects becomes large?",
  },

  pythonLab: {
    title: "Python Lab: Exploring Factorial Growth",

    objective:
      "Use Python to calculate factorials and observe how quickly the number of ordered arrangements increases.",

    code: `import math

for n in range(1, 11):
    arrangements = math.factorial(n)

    print(
        f"{n} objects -> "
        f"{n}! = {arrangements:,} arrangements"
    )


number_of_objects = 7

total_arrangements = math.factorial(
    number_of_objects
)

print()
print(
    f"Arrangements of {number_of_objects} "
    f"distinct objects:"
)

print(total_arrangements)`,
    
    questions: [
      "What is the value of 5!?",
      "What is the value of 7!?",
      "How much larger is 10! than 9!?",
      "What pattern explains the change from n! to (n + 1)!?",
      "Why might factorial growth create problems for exhaustive-search algorithms?",
    ],

    extension:
      "Modify the program so the user can enter a positive integer and the program reports the number of possible arrangements. Add input validation so negative integers are rejected.",
  },

  guidedPractice: [
    {
      id: "guided-02-01",

      question:
        "Evaluate 4!.",

      answer:
        "4! = 4 × 3 × 2 × 1 = 24",
    },

    {
      id: "guided-02-02",

      question:
        "Evaluate 5!.",

      answer:
        "5! = 5 × 4 × 3 × 2 × 1 = 120",
    },

    {
      id: "guided-02-03",

      question:
        "Six different paintings are placed in a row. How many different arrangements are possible?",

      answer:
        "6! = 720 arrangements",
    },

    {
      id: "guided-02-04",

      question:
        "Why is arranging A-B-C different from arranging B-A-C?",

      answer:
        "The objects occupy different positions, so the order has changed and the two arrangements represent different outcomes.",
    },

    {
      id: "guided-02-05",

      question:
        "Three runners finish a race with no ties. How many possible finishing orders exist?",

      answer:
        "3! = 6 possible finishing orders",
    },
  ],

  independentPractice: [
    {
      id: "practice-02-01",

      difficulty: "Foundation",

      question:
        "Evaluate 3!.",

      answer:
        "3! = 6",
    },

    {
      id: "practice-02-02",

      difficulty: "Foundation",

      question:
        "Evaluate 8!.",

      answer:
        "8! = 40,320",
    },

    {
      id: "practice-02-03",

      difficulty: "Developing",

      question:
        "Five distinct trophies are arranged on a shelf. How many different arrangements are possible?",

      answer:
        "5! = 120 arrangements",
    },

    {
      id: "practice-02-04",

      difficulty: "Developing",

      question:
        "Eight students are placed into eight seats in a row. How many different seating arrangements are possible?",

      answer:
        "8! = 40,320 arrangements",
    },

    {
      id: "practice-02-05",

      difficulty: "Challenge",

      question:
        "Six different people stand in a line. If Maria must be first, how many possible arrangements remain?",

      sampleAnswer:
        "Maria's position is fixed. The remaining five people can be arranged in 5! = 120 ways.",
    },

    {
      id: "practice-02-06",

      difficulty: "AP Reasoning",

      question:
        "Five runners are equally likely to finish a race in any order. What is the probability that Jordan finishes first?",

      sampleAnswer:
        "There are 5! = 120 total finishing orders. With Jordan fixed first, the remaining four runners can finish in 4! = 24 orders. Therefore P(Jordan first) = 24/120 = 1/5.",
    },
  ],

  commonMistakes: [
    {
      mistake:
        "Using n! whenever several choices appear in a problem.",

      correction:
        "Factorial counting applies naturally when distinct objects are being arranged and the available choices decrease by one after each object is used.",
    },

    {
      mistake:
        "Writing 5! as 5 × 5 × 5 × 5 × 5.",

      correction:
        "Factorial uses decreasing integers: 5! = 5 × 4 × 3 × 2 × 1.",
    },

    {
      mistake:
        "Treating different orders as the same outcome.",

      correction:
        "When order matters, changing positions creates a different arrangement.",
    },

    {
      mistake:
        "Forgetting that 0! = 1.",

      correction:
        "By mathematical definition, 0! equals 1.",
    },

    {
      mistake:
        "Listing hundreds of arrangements instead of recognizing a factorial pattern.",

      correction:
        "Use the Fundamental Counting Principle and factorial notation to count efficiently.",
    },
  ],

  discussionQuestions: [
    "Why does factorial growth occur so quickly?",
    "When is listing outcomes useful, and when does it become impractical?",
    "Why must the objects be distinct when using n! for straightforward arrangements?",
    "How does the Fundamental Counting Principle explain factorial notation?",
    "Where might ordered arrangements appear in everyday decision-making?",
    "Why is factorial growth important in computer science and artificial intelligence?",
  ],

  formativeAssessment: {
    totalPoints: 15,

    passingScore: 12,

    questions: [
      {
        id: "check-02-01",

        type: "calculation",

        points: 3,

        prompt:
          "Evaluate 6!.",

        answer:
          "6! = 720",
      },

      {
        id: "check-02-02",

        type: "concept",

        points: 3,

        prompt:
          "Explain what n! represents when n distinct objects are arranged.",

        sampleAnswer:
          "n! represents the number of possible complete orderings of n distinct objects.",
      },

      {
        id: "check-02-03",

        type: "application",

        points: 3,

        prompt:
          "Four different speakers must present one after another. How many possible presentation orders are there?",

        answer:
          "4! = 24 orders",
      },

      {
        id: "check-02-04",

        type: "reasoning",

        points: 3,

        prompt:
          "Explain why the multiplication pattern for five objects is 5 × 4 × 3 × 2 × 1 rather than 5 × 5 × 5 × 5 × 5.",

        sampleAnswer:
          "Once an object is placed, it cannot be used again. Therefore the number of available choices decreases by one for each new position.",
      },

      {
        id: "check-02-05",

        type: "probability",

        points: 3,

        prompt:
          "Four runners finish in a random order with no ties. What is the probability that Ana finishes first?",

        sampleAnswer:
          "There are 4! = 24 total orders. With Ana first, the remaining three runners can be arranged in 3! = 6 ways. Therefore the probability is 6/24 = 1/4.",
      },
    ],
  },

  researchExtension: {
    title: "Investigating Factorial Growth",

    researchQuestion:
      "How does factorial growth affect real computational and optimization problems?",

    applicationOptions: [
      "Delivery-route ordering",
      "Task scheduling",
      "Sports rankings",
      "Computer-search algorithms",
      "Manufacturing sequences",
      "Artificial intelligence optimization",
    ],

    task:
      "Choose one real-world situation involving ordered arrangements. Determine how the number of possibilities changes as the number of objects increases and explain why checking every possibility may eventually become impractical.",

    requiredEvidence: [
      "Description of the real-world problem",
      "Identification of the objects being arranged",
      "At least four factorial calculations",
      "Comparison of growth as n increases",
      "Explanation of computational difficulty",
      "One credible source",
    ],
  },

  portfolioArtifact: {
    title: "The Explosion of Possibilities",

    description:
      "Create a one-page visual showing how factorial growth changes the number of possible arrangements as the number of objects increases.",

    requiredSections: [
      "Definition of factorial",
      "Connection to the Fundamental Counting Principle",
      "Factorial values from 1! through at least 10!",
      "One ordered-arrangement example",
      "One probability application",
      "One technology or AI connection",
      "Reflection",
    ],

    requiredEvidence: [
      "Correct factorial notation",
      "At least five verified calculations",
      "One visual representation of factorial growth",
      "One contextual interpretation",
      "One explanation of why exhaustive search becomes difficult",
    ],
  },

  growthIndicators: [
    "Conceptual Understanding",
    "Counting Reasoning",
    "Mathematical Communication",
    "Probability Modeling",
    "Computational Thinking",
    "Problem Solving",
  ],

  reflection: [
    "How is factorial notation connected to the Fundamental Counting Principle?",
    "Why does each position have fewer choices than the previous position?",
    "Why is order important in an arrangement problem?",
    "What surprised you about the speed of factorial growth?",
    "How could factorial counting help when constructing a probability sample space?",
  ],

  summary: [
    "Factorial notation represents a descending product of positive integers.",
    "For a positive integer n, n! = n × (n - 1) × ... × 2 × 1.",
    "By definition, 0! = 1.",
    "The number of complete arrangements of n distinct objects is n!.",
    "Factorial counting follows directly from the Fundamental Counting Principle.",
    "Factorials are useful when order matters and each distinct object is used once.",
    "Factorials can help determine the size of probability sample spaces.",
    "Factorial values grow extremely quickly as n increases.",
    "Factorial growth is important in probability, computer science, optimization, and artificial intelligence.",
    "Factorials provide the foundation for studying permutations.",
  ],

  previousLesson: {
    id: "probability-m02-l01",
    slug: "fundamental-counting-principle",
    title: "Fundamental Counting Principle",
  },

  nextLesson: null,

  lumineryGuidance: {
    message:
      "Do not memorize factorial notation as an isolated rule. See the decreasing choices that create it.",

    prompt:
      "Before writing n!, identify the ordered positions and explain why the number of available choices decreases after each object is placed.",

    coachingQuestions: [
      "Does order matter in this problem?",
      "Are the objects distinct?",
      "Are all objects being used?",
      "How many choices exist for the first position?",
      "Why does the next position have one fewer choice?",
      "Can the multiplication pattern be represented using factorial notation?",
      "How does this count help construct the probability sample space?",
    ],
  },
};

export default lesson02;