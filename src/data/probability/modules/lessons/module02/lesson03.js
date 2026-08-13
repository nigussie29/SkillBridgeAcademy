const lesson03 = {
  id: "probability-m02-l03",
  courseId: "probability-foundations",
  moduleId: "module-02",

  moduleNumber: 2,
  lessonNumber: 3,

  slug: "permutations",

  title: "Permutations",

  shortTitle: "Permutations",

  subtitle:
    "Count ordered selections when only part of a larger set is arranged.",

  status: "Available",

  duration: "60–75 minutes",

  level: "AP Statistics Foundation",

  essentialQuestion:
    "How can we efficiently count ordered selections when we choose only some objects from a larger group?",

  bigIdea:
    "A permutation counts selections in which order matters. When r objects are selected and arranged from n distinct objects, the number of possibilities can be determined using the Fundamental Counting Principle or the permutation formula.",

  whyThisLessonExists: {
    title: "Why This Lesson Exists",

    introduction:
      "Factorials count arrangements when every available object is used. Many real problems, however, use only part of a larger group. A race awards first, second, and third place from ten runners. A company selects a president, vice president, and secretary from several candidates. Because the positions are different, order matters.",

    centralProblem:
      "How can we count ordered selections without listing every possible outcome?",

    purpose:
      "Permutations extend factorial reasoning to situations in which only some objects are selected from a larger collection. This provides an essential counting tool for probability sample spaces and prepares students to distinguish permutations from combinations.",
  },

  problemFirst: {
    title: "Who Wins Gold, Silver, and Bronze?",

    scenario:
      "Eight runners compete in a race. Assume there are no ties. The top three runners receive gold, silver, and bronze medals. How many different medal outcomes are possible?",

    questions: [
      "How many choices are possible for the gold medal?",
      "After the gold medal is awarded, how many runners remain for silver?",
      "After gold and silver are awarded, how many choices remain for bronze?",
      "Does the order of the three selected runners matter?",
      "Why is A-B-C different from B-A-C?",
      "How can the Fundamental Counting Principle solve the problem?",
      "How could factorial notation represent the same calculation?",
    ],

    expectedInsight:
      "There are 8 choices for gold, 7 remaining choices for silver, and 6 choices for bronze. Therefore there are 8 × 7 × 6 = 336 possible medal outcomes. Because gold, silver, and bronze represent different positions, order matters.",
  },

  learningObjectives: [
    "Explain what makes a counting situation a permutation.",
    "Recognize when order matters.",
    "Use the Fundamental Counting Principle to calculate permutations.",
    "Use factorial notation to simplify permutation calculations.",
    "Apply the permutation formula nPr = n! / (n-r)!.",
    "Interpret n and r correctly in contextual problems.",
    "Distinguish arranging all objects from arranging only part of a set.",
    "Use permutations to determine sample-space size in probability problems.",
    "Verify permutation calculations using Python.",
    "Communicate permutation reasoning clearly in context.",
  ],

  prerequisiteKnowledge: [
    "Fundamental Counting Principle",
    "Factorial notation",
    "Ordered arrangements",
    "Sample spaces",
    "Basic probability",
    "Multiplication and division of whole numbers",
  ],

  vocabulary: [
    {
      term: "Permutation",
      definition:
        "An ordered selection or arrangement in which changing the order creates a different outcome.",
    },
    {
      term: "Order Matters",
      definition:
        "A condition in which two selections containing the same objects are considered different when their positions are different.",
    },
    {
      term: "n",
      definition:
        "The total number of distinct objects available for selection.",
    },
    {
      term: "r",
      definition:
        "The number of objects selected and arranged from the original set.",
    },
    {
      term: "Ordered Selection",
      definition:
        "A selection in which each chosen object's position is important.",
    },
    {
      term: "Without Replacement",
      definition:
        "Once an object is selected, it cannot be selected again during the same arrangement.",
    },
    {
      term: "Sample Space",
      definition:
        "The set of all possible outcomes of a random process.",
    },
  ],

  formulas: [
    {
      id: "permutation-formula",

      name: "Permutation Formula",

      formula: "nPr = n! / (n - r)!",

      meaning:
        "The number of ordered arrangements of r distinct objects selected from n distinct objects.",
    },

    {
      id: "permutation-product",

      name: "Permutation as a Product",

      formula:
        "nPr = n × (n - 1) × (n - 2) × ... for r factors",

      meaning:
        "Multiply the number of available choices for each ordered position.",
    },

    {
      id: "all-object-permutation",

      name: "Arranging All Objects",

      formula: "nPn = n!",

      meaning:
        "If every available object is selected and arranged, the permutation becomes an ordinary factorial.",
    },
  ],

  workedExamples: [
    {
      id: "example-03-01",

      title: "Awarding Three Medals",

      problem:
        "Eight runners compete for gold, silver, and bronze. How many different medal outcomes are possible?",

      solutionSteps: [
        "There are 8 total runners, so n = 8.",
        "Three medal positions are filled, so r = 3.",
        "Because gold, silver, and bronze are different positions, order matters.",
        "Use 8P3 = 8! / (8 - 3)!.",
        "Simplify: 8! / 5! = 8 × 7 × 6.",
        "Calculate 8 × 7 × 6 = 336.",
      ],

      answer:
        "8P3 = 336 possible medal outcomes",

      interpretation:
        "The same three runners in a different medal order represent a different outcome.",
    },

    {
      id: "example-03-02",

      title: "Student Leadership Positions",

      problem:
        "A club has 10 students. It must choose a president, vice president, and secretary. How many different leadership teams are possible?",

      solutionSteps: [
        "There are 10 students available.",
        "Three distinct positions must be filled.",
        "Order matters because president, vice president, and secretary are different roles.",
        "Use 10P3.",
        "Calculate 10 × 9 × 8.",
      ],

      answer:
        "10P3 = 720 leadership arrangements",

      interpretation:
        "Assigning the same students to different offices produces a different leadership arrangement.",
    },

    {
      id: "example-03-03",

      title: "Creating a Four-Digit Code Without Repetition",

      problem:
        "A code uses four different digits selected from the digits 0 through 9. No digit may repeat. How many different four-digit codes are possible if leading zero is allowed?",

      solutionSteps: [
        "There are 10 available digits.",
        "Four positions must be filled.",
        "Order matters because 1234 and 4321 are different codes.",
        "No digit can be reused.",
        "Use 10P4.",
        "Calculate 10 × 9 × 8 × 7.",
      ],

      answer:
        "10P4 = 5,040 codes",

      interpretation:
        "The problem is a permutation because position changes the identity of the code.",
    },

    {
      id: "example-03-04",

      title: "Selecting Finalists in Ranked Order",

      problem:
        "Twelve students enter a competition. Judges rank the top five students from first through fifth. How many rankings are possible?",

      solutionSteps: [
        "There are 12 students available.",
        "Five ranked positions are filled.",
        "Order matters because first place differs from second place.",
        "Use 12P5.",
        "Calculate 12 × 11 × 10 × 9 × 8.",
      ],

      answer:
        "12P5 = 95,040 rankings",

      interpretation:
        "A ranking is an ordered selection, so permutation reasoning is appropriate.",
    },

    {
      id: "example-03-05",

      title: "Permutation in Probability",

      problem:
        "Five runners are equally likely to finish in any order. What is the probability that Ana finishes first and Ben finishes second?",

      solutionSteps: [
        "The total number of complete finishing orders is 5! = 120.",
        "Fix Ana in first place.",
        "Fix Ben in second place.",
        "The remaining three runners can be arranged in 3! = 6 ways.",
        "There are 6 favorable outcomes.",
        "Calculate 6 / 120.",
      ],

      answer:
        "P(Ana first and Ben second) = 1/20",

      interpretation:
        "Permutation reasoning helps count both the total sample space and the outcomes satisfying an ordered condition.",
    },
  ],

  interactiveExploration: {
    title: "When Does Order Change the Outcome?",

    instructions: [
      "Choose three letters from A, B, C, and D.",
      "Write the selection A-B-C.",
      "Rearrange the same letters as B-A-C.",
      "Decide whether the two results should count as different outcomes.",
      "Repeat using three students assigned to president, vice president, and secretary.",
      "Compare the situation with choosing three students for an unranked committee.",
      "Explain when order creates a new outcome.",
    ],

    investigationQuestions: [
      "Does ABC represent the same ordered arrangement as BAC?",
      "Why are leadership positions ordered?",
      "Would the same reasoning apply to an unranked committee?",
      "What feature of the context tells you whether order matters?",
      "How does this distinction affect the number of outcomes?",
    ],

    expectedDiscovery:
      "Permutation problems count different orders separately. The critical question is not simply how many objects are selected, but whether changing their positions creates a different outcome.",
  },

  realWorldApplications: [
    {
      field: "Sports",
      application:
        "Permutations count possible finishing orders, rankings, and medal assignments.",
    },
    {
      field: "Business",
      application:
        "Organizations use ordered selection when assigning people to distinct leadership positions.",
    },
    {
      field: "Cybersecurity",
      application:
        "Codes and authentication systems may involve ordered sequences of symbols.",
    },
    {
      field: "Operations Research",
      application:
        "Scheduling and routing problems often depend on the order in which tasks are completed.",
    },
    {
      field: "Computer Science",
      application:
        "Algorithms frequently examine or optimize ordered sequences of data or actions.",
    },
    {
      field: "Artificial Intelligence",
      application:
        "Planning systems may evaluate different sequences of actions because changing action order can produce different results.",
    },
  ],

  aiConnection: {
    title: "Permutations and AI Planning",

    explanation:
      "Artificial intelligence systems often make a sequence of decisions rather than a single decision. When the same actions can be performed in different orders, the number of possible plans may grow rapidly.",

    example:
      "If a robot must choose and order 5 tasks from 10 available tasks, there are 10P5 possible ordered plans. That is 30,240 different possibilities before considering additional constraints.",

    caution:
      "Real AI systems generally cannot evaluate every possible ordering when the search space becomes very large. They use optimization, heuristics, constraints, and search algorithms to reduce the possibilities.",

    reflectionQuestion:
      "Why can changing the order of actions matter when an AI system plans a sequence of tasks?",
  },

  pythonLab: {
    title: "Python Lab: Calculating Permutations",

    objective:
      "Calculate permutations with Python and compare the formula with direct multiplication.",

    code: `import math

n = 8
r = 3

permutations = math.perm(n, r)

print(
    f"{n}P{r} = {permutations}"
)


def permutation(n, r):
    if r < 0 or n < 0 or r > n:
        raise ValueError(
            "Require 0 <= r <= n."
        )

    return (
        math.factorial(n)
        // math.factorial(n - r)
    )


print(
    "Using factorial formula:",
    permutation(8, 3)
)


for r in range(1, 6):
    print(
        f"10P{r} =",
        permutation(10, r)
    )`,

    questions: [
      "What does math.perm(n, r) calculate?",
      "Why must r be less than or equal to n?",
      "What is 8P3?",
      "How does 10P5 compare with 10P2?",
      "Why does the number of ordered selections increase rapidly as r increases?",
    ],

    extension:
      "Modify the program so the user enters n and r. Validate the input and explain in words what the resulting permutation count represents.",
  },

  guidedPractice: [
    {
      id: "guided-03-01",

      question:
        "Calculate 5P2.",

      answer:
        "5P2 = 5 × 4 = 20",
    },

    {
      id: "guided-03-02",

      question:
        "Calculate 7P3.",

      answer:
        "7P3 = 7 × 6 × 5 = 210",
    },

    {
      id: "guided-03-03",

      question:
        "Nine students compete for first and second place. How many ordered outcomes are possible?",

      answer:
        "9P2 = 9 × 8 = 72",
    },

    {
      id: "guided-03-04",

      question:
        "Why is choosing a president and vice president an ordered selection?",

      answer:
        "The roles are different. Switching the two selected people creates a different outcome.",
    },

    {
      id: "guided-03-05",

      question:
        "Six distinct books are available, but only three will be placed in three labeled display positions. How many arrangements are possible?",

      answer:
        "6P3 = 6 × 5 × 4 = 120",
    },
  ],

  independentPractice: [
    {
      id: "practice-03-01",

      difficulty: "Foundation",

      question:
        "Evaluate 6P2.",

      answer:
        "6P2 = 30",
    },

    {
      id: "practice-03-02",

      difficulty: "Foundation",

      question:
        "Evaluate 8P3.",

      answer:
        "8P3 = 336",
    },

    {
      id: "practice-03-03",

      difficulty: "Developing",

      question:
        "Eleven runners compete for first, second, and third place. How many medal outcomes are possible?",

      answer:
        "11P3 = 11 × 10 × 9 = 990",
    },

    {
      id: "practice-03-04",

      difficulty: "Developing",

      question:
        "Seven students are available for president, vice president, secretary, and treasurer. How many different officer assignments are possible?",

      answer:
        "7P4 = 7 × 6 × 5 × 4 = 840",
    },

    {
      id: "practice-03-05",

      difficulty: "Challenge",

      question:
        "Ten books are available. Four different books will be placed from left to right on a display shelf. How many arrangements are possible?",

      sampleAnswer:
        "Order matters because the positions are different. Therefore 10P4 = 10 × 9 × 8 × 7 = 5,040.",
    },

    {
      id: "practice-03-06",

      difficulty: "AP Reasoning",

      question:
        "Six runners finish a race in random order. What is the probability that Maya finishes first and Noah finishes second?",

      sampleAnswer:
        "There are 6! = 720 total finishing orders. With Maya first and Noah second, the remaining four runners can be arranged in 4! = 24 ways. Therefore the probability is 24/720 = 1/30.",
    },
  ],

  commonMistakes: [
    {
      mistake:
        "Using a permutation whenever objects are selected.",

      correction:
        "A permutation is appropriate only when changing the order creates a different outcome.",
    },

    {
      mistake:
        "Using n! when only r objects are selected.",

      correction:
        "When only part of the group is selected and arranged, use nPr rather than automatically using n!.",
    },

    {
      mistake:
        "Confusing n and r.",

      correction:
        "n represents the total number available, while r represents the number selected and ordered.",
    },

    {
      mistake:
        "Using replacement when the problem does not allow repetition.",

      correction:
        "Standard permutations assume selected objects are not reused unless the context explicitly allows repetition.",
    },

    {
      mistake:
        "Ignoring the context of the positions.",

      correction:
        "Ask whether switching two selected objects would create a different outcome. If yes, order matters.",
    },
  ],

  discussionQuestions: [
    "What is the most important clue that a problem requires permutations?",
    "How are permutations connected to the Fundamental Counting Principle?",
    "Why is nPn equal to n!?",
    "How is selecting medal winners different from selecting committee members?",
    "Where do ordered selections occur in everyday life?",
    "Why can permutation growth become challenging for computer and AI systems?",
  ],

  formativeAssessment: {
    totalPoints: 15,

    passingScore: 12,

    questions: [
      {
        id: "check-03-01",

        type: "calculation",

        points: 3,

        prompt:
          "Calculate 7P2.",

        answer:
          "7P2 = 7 × 6 = 42",
      },

      {
        id: "check-03-02",

        type: "concept",

        points: 3,

        prompt:
          "Explain what makes a selection a permutation.",

        sampleAnswer:
          "A selection is a permutation when order matters, meaning a different arrangement of the same selected objects represents a different outcome.",
      },

      {
        id: "check-03-03",

        type: "application",

        points: 3,

        prompt:
          "Ten runners compete for gold, silver, and bronze. How many medal outcomes are possible?",

        answer:
          "10P3 = 10 × 9 × 8 = 720",
      },

      {
        id: "check-03-04",

        type: "reasoning",

        points: 3,

        prompt:
          "Explain why selecting a president and vice president from six people is different from simply choosing two people.",

        sampleAnswer:
          "The two offices are distinct. Assigning A as president and B as vice president is different from assigning B as president and A as vice president.",
      },

      {
        id: "check-03-05",

        type: "probability",

        points: 3,

        prompt:
          "Five students are randomly assigned first and second place. What is the probability that Ana is first and Ben is second?",

        sampleAnswer:
          "There are 5P2 = 20 equally likely ordered outcomes and exactly one has Ana first and Ben second. Therefore the probability is 1/20.",
      },
    ],
  },

  researchExtension: {
    title: "Ordered Decisions in the Real World",

    researchQuestion:
      "Where do permutations appear in real systems involving rankings, schedules, routes, codes, or decision sequences?",

    applicationOptions: [
      "Sports rankings",
      "Leadership assignments",
      "Delivery routing",
      "Task scheduling",
      "Security codes",
      "AI planning",
    ],

    task:
      "Choose one real-world ordered-selection problem. Identify n and r, explain why order matters, calculate the number of possible arrangements, and discuss why efficient counting is more useful than listing every outcome.",

    requiredEvidence: [
      "Description of the context",
      "Identification of n",
      "Identification of r",
      "Explanation of why order matters",
      "Correct permutation calculation",
      "Interpretation of the result",
      "One credible source",
    ],
  },

  portfolioArtifact: {
    title: "Does Order Matter?",

    description:
      "Create a one-page visual explanation of permutations using a real ordered-selection problem.",

    requiredSections: [
      "Definition of permutation",
      "Explanation of n and r",
      "Permutation formula",
      "Fundamental Counting Principle connection",
      "One worked example",
      "One probability connection",
      "One real-world or AI application",
      "Reflection",
    ],

    requiredEvidence: [
      "Correct use of nPr",
      "Correct calculation",
      "Clear explanation of why order matters",
      "One visual representation",
      "One contextual interpretation",
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
    "How do you decide whether order matters?",
    "How are factorials and permutations connected?",
    "Why does the permutation formula stop after r factors?",
    "How can permutations help determine the size of a probability sample space?",
    "What real-world problem could become difficult because there are too many possible ordered arrangements?",
  ],

  summary: [
    "A permutation is an ordered selection.",
    "Changing the order creates a different outcome when order matters.",
    "n represents the total number of available objects.",
    "r represents the number of objects selected and arranged.",
    "The permutation formula is nPr = n! / (n - r)!.",
    "Permutations can also be calculated using the Fundamental Counting Principle.",
    "When r = n, nPn = n!.",
    "Permutations help count sample spaces in probability problems.",
    "Permutations appear in rankings, schedules, codes, routes, and planning.",
    "The next major question is what happens when order does not matter.",
  ],

  previousLesson: {
    id: "probability-m02-l02",
    slug: "factorials-and-ordered-arrangements",
    title: "Factorials and Ordered Arrangements",
  },

  nextLesson: null,

  lumineryGuidance: {
    message:
      "Before reaching for a formula, determine whether changing the order changes the outcome.",

    prompt:
      "Identify the total number available, the number selected, and the meaning of each ordered position before calculating a permutation.",

    coachingQuestions: [
      "Does order matter?",
      "What is n?",
      "What is r?",
      "Are the selected objects distinct?",
      "Can an object be selected more than once?",
      "Could the Fundamental Counting Principle solve the problem directly?",
      "How does the permutation count connect to the probability sample space?",
    ],
  },
};

export default lesson03;