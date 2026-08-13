const lesson05 = {
  id: "probability-m02-l05",
  courseId: "probability-foundations",
  moduleId: "module-02",

  moduleNumber: 2,
  lessonNumber: 5,

  slug: "repeated-choices-and-restrictions",

  title: "Repeated Choices and Restrictions",

  shortTitle: "Choices & Restrictions",

  subtitle:
    "Extend counting techniques to situations involving repetition, required conditions, and restricted choices.",

  status: "Available",

  duration: "60–75 minutes",

  level: "AP Statistics Foundation",

  essentialQuestion:
    "How do repetition and restrictions change the number of possible outcomes in a counting problem?",

  bigIdea:
    "Counting problems must reflect the actual rules of the situation. When choices may repeat, the number of available options may stay constant. When restrictions are introduced, the number of choices may change from one stage to another.",

  whyThisLessonExists: {
    title: "Why This Lesson Exists",

    introduction:
      "The Fundamental Counting Principle, factorials, permutations, and combinations work well when the structure of a problem is clear. Real situations often introduce additional rules: digits may repeat, the first digit may not be zero, certain people may not sit together, or one particular object may be required.",

    centralProblem:
      "How can we modify our counting strategy when repetition is allowed or when certain outcomes are restricted?",

    purpose:
      "This lesson develops flexible counting reasoning. Instead of choosing a formula automatically, students learn to analyze each stage, identify the number of legal choices, and build a correct counting model from the rules of the problem.",
  },

  problemFirst: {
    title: "How Many Four-Digit Security Codes Are Possible?",

    scenario:
      "A security system uses a four-digit code. Each position may contain any digit from 0 through 9, and digits may repeat.",

    questions: [
      "How many choices are available for the first digit?",
      "After choosing the first digit, how many choices remain for the second digit?",
      "Does using a digit once prevent it from being used again?",
      "How many choices exist for each of the four positions?",
      "How can the Fundamental Counting Principle be applied?",
      "How would the answer change if repeated digits were not allowed?",
      "How would the answer change if the first digit could not be zero?",
    ],

    expectedInsight:
      "Because repetition is allowed, each of the four positions has 10 choices. Therefore the total number of codes is 10 × 10 × 10 × 10 = 10,000. Restrictions change the number of legal choices at one or more stages.",
  },

  learningObjectives: [
    "Recognize when repetition is allowed in a counting problem.",
    "Recognize when repetition is prohibited.",
    "Apply the Fundamental Counting Principle when the number of choices remains constant.",
    "Apply the Fundamental Counting Principle when restrictions cause the number of choices to vary.",
    "Distinguish repeated-choice situations from permutations.",
    "Count outcomes involving required or prohibited conditions.",
    "Use complement-style counting when it simplifies a restricted problem.",
    "Explain how restrictions alter the size of a sample space.",
    "Use Python to verify repeated-choice and restricted-counting results.",
    "Communicate counting assumptions clearly in context.",
  ],

  prerequisiteKnowledge: [
    "Fundamental Counting Principle",
    "Factorials",
    "Permutations",
    "Combinations",
    "Ordered selections",
    "Unordered selections",
    "Basic probability sample spaces",
  ],

  vocabulary: [
    {
      term: "Repetition",
      definition:
        "The reuse of the same choice more than once within a sequence or selection.",
    },
    {
      term: "Restriction",
      definition:
        "A rule that prevents certain outcomes or limits which choices are allowed.",
    },
    {
      term: "With Replacement",
      definition:
        "A process in which a selected object becomes available again for later selections.",
    },
    {
      term: "Without Replacement",
      definition:
        "A process in which a selected object cannot be selected again.",
    },
    {
      term: "Required Condition",
      definition:
        "A rule stating that a particular object, property, or event must occur.",
    },
    {
      term: "Forbidden Condition",
      definition:
        "A rule stating that a particular object, arrangement, or event is not allowed.",
    },
    {
      term: "Complement Counting",
      definition:
        "Counting all possible outcomes and subtracting those that violate a condition.",
    },
  ],

  formulas: [
    {
      id: "repeated-choice-rule",

      name: "Repeated Choices",

      formula:
        "total outcomes = m^r",

      meaning:
        "If each of r positions has the same m available choices and repetition is allowed, there are m^r possible outcomes.",
    },

    {
      id: "restricted-fcp",

      name: "Restricted Fundamental Counting Principle",

      formula:
        "total outcomes = c1 × c2 × c3 × ... × cr",

      meaning:
        "When different stages have different numbers of legal choices, multiply the number of allowed choices at each stage.",
    },

    {
      id: "complement-counting",

      name: "Counting by Complement",

      formula:
        "valid outcomes = total outcomes - invalid outcomes",

      meaning:
        "Sometimes it is easier to count every outcome and subtract those that violate the restriction.",
    },
  ],

  workedExamples: [
    {
      id: "example-05-01",

      title: "Four-Digit Code with Repetition",

      problem:
        "A four-digit security code uses digits 0 through 9. Digits may repeat. How many codes are possible?",

      solutionSteps: [
        "Each position has 10 possible digits.",
        "Using one digit does not remove it from future positions.",
        "There are 10 choices for each of 4 positions.",
        "Apply the Fundamental Counting Principle.",
        "10 × 10 × 10 × 10 = 10^4.",
      ],

      answer:
        "10,000 possible codes",

      interpretation:
        "Allowing repetition keeps the number of choices constant at every position.",
    },

    {
      id: "example-05-02",

      title: "Four-Digit Code Without Repetition",

      problem:
        "A four-digit code uses digits 0 through 9, but no digit may appear more than once. How many codes are possible?",

      solutionSteps: [
        "The first position has 10 choices.",
        "After one digit is used, only 9 choices remain.",
        "The third position has 8 choices.",
        "The fourth position has 7 choices.",
        "Multiply: 10 × 9 × 8 × 7.",
      ],

      answer:
        "5,040 possible codes",

      interpretation:
        "Without repetition, the number of available choices decreases after each selection.",
    },

    {
      id: "example-05-03",

      title: "First Digit Cannot Be Zero",

      problem:
        "A four-digit identification number uses digits 0 through 9. Repetition is allowed, but the first digit cannot be zero. How many valid numbers are possible?",

      solutionSteps: [
        "The first digit may be 1 through 9, giving 9 choices.",
        "Each remaining position may use any digit from 0 through 9.",
        "Therefore the last three positions each have 10 choices.",
        "Multiply: 9 × 10 × 10 × 10.",
      ],

      answer:
        "9,000 valid identification numbers",

      interpretation:
        "A restriction on one position changes only the number of choices for that stage.",
    },

    {
      id: "example-05-04",

      title: "License Plates with Letters and Digits",

      problem:
        "A license plate consists of 3 letters followed by 3 digits. Repetition is allowed. Assume 26 letters and 10 digits are available. How many plates are possible?",

      solutionSteps: [
        "Each letter position has 26 choices.",
        "Each digit position has 10 choices.",
        "There are three letter positions and three digit positions.",
        "Multiply: 26 × 26 × 26 × 10 × 10 × 10.",
        "Write this as 26^3 × 10^3.",
      ],

      answer:
        "17,576,000 possible plates",

      interpretation:
        "Different stages may have different sets of repeated choices.",
    },

    {
      id: "example-05-05",

      title: "At Least One Specific Outcome",

      problem:
        "A three-digit code uses digits 0 through 9 with repetition allowed. How many codes contain at least one 7?",

      solutionSteps: [
        "First count all three-digit codes: 10^3 = 1,000.",
        "Now count codes containing no 7.",
        "If 7 is excluded, each position has 9 choices.",
        "Codes with no 7: 9^3 = 729.",
        "Subtract invalid outcomes from the total.",
        "1,000 - 729 = 271.",
      ],

      answer:
        "271 codes contain at least one 7",

      interpretation:
        "Counting the complement can be easier than separately counting codes with exactly one, two, or three occurrences of 7.",
    },
  ],

  interactiveExploration: {
    title: "Change One Rule, Change the Count",

    instructions: [
      "Start with a three-character code using the letters A, B, C, and D.",
      "First allow repetition and calculate the number of codes.",
      "Then prohibit repetition and calculate again.",
      "Next require that the first character be A.",
      "Then prohibit the letter A from appearing anywhere.",
      "Compare the counts.",
      "Describe exactly which rule changed the number of choices at each position.",
    ],

    investigationQuestions: [
      "What happens to the count when repetition is allowed?",
      "Why do available choices decrease when repetition is prohibited?",
      "How does fixing one position affect the total?",
      "How does forbidding one choice affect every position?",
      "Which problems are easiest to solve by direct multiplication?",
      "Which problems might be easier using complement counting?",
    ],

    expectedDiscovery:
      "Counting is controlled by the rules governing each stage. A small change in the conditions can produce a large change in the total number of outcomes.",
  },

  realWorldApplications: [
    {
      field: "Cybersecurity",
      application:
        "Password and PIN spaces depend on character choices, repetition rules, minimum lengths, and required character types.",
    },
    {
      field: "Transportation",
      application:
        "License plate systems use combinations of letters, digits, repeated symbols, and positional restrictions.",
    },
    {
      field: "Computer Science",
      application:
        "Search spaces are shaped by legal states, forbidden states, repetition rules, and constraints.",
    },
    {
      field: "Scheduling",
      application:
        "Some tasks may occur more than once, while others must occur before or after specific tasks.",
    },
    {
      field: "Genetics",
      application:
        "Sequences can be modeled using repeated choices from a fixed set of possible symbols.",
    },
    {
      field: "Artificial Intelligence",
      application:
        "Constraint-based AI systems eliminate illegal possibilities rather than exploring every theoretical outcome.",
    },
  ],

  aiConnection: {
    title: "Constraints Reduce AI Search Spaces",

    explanation:
      "AI planning and search often begin with a large number of possible actions. Constraints remove choices that are impossible, unsafe, inefficient, or inconsistent with the goal.",

    example:
      "Suppose an AI system plans a sequence of 6 actions and each step initially offers 8 choices. Without restrictions, the search space contains 8^6 = 262,144 possible action sequences. Constraints can remove many of those sequences before the system evaluates them fully.",

    caution:
      "A smaller search space does not automatically guarantee a correct solution. Constraints must accurately represent the real problem or valid solutions may be excluded.",

    reflectionQuestion:
      "Why can carefully designed restrictions make an AI search problem easier to solve?",
  },

  pythonLab: {
    title: "Python Lab: Repetition and Restrictions",

    objective:
      "Use Python to compare counts when repetition is allowed, prohibited, or restricted.",

    code: `digits = 10
positions = 4

with_repetition = digits ** positions

without_repetition = (
    10 * 9 * 8 * 7
)

first_digit_not_zero = (
    9 * 10 * 10 * 10
)

print(
    "With repetition:",
    with_repetition
)

print(
    "Without repetition:",
    without_repetition
)

print(
    "First digit cannot be zero:",
    first_digit_not_zero
)


total_three_digit_codes = 10 ** 3

codes_without_seven = 9 ** 3

codes_with_at_least_one_seven = (
    total_three_digit_codes
    - codes_without_seven
)

print(
    "Codes with at least one 7:",
    codes_with_at_least_one_seven
)`,
    
    questions: [
      "Why is 10 ** 4 appropriate when repetition is allowed?",
      "Why does the no-repetition calculation use 10 × 9 × 8 × 7?",
      "Why are there only 9 choices for the first digit when zero is prohibited?",
      "Why does subtracting 9^3 from 10^3 count codes containing at least one 7?",
      "How could you modify the program for five-character codes?",
    ],

    extension:
      "Write a function that accepts the number of available symbols, number of positions, and whether repetition is allowed. Return the number of possible sequences.",
  },

  guidedPractice: [
    {
      id: "guided-05-01",

      question:
        "A 3-digit PIN uses digits 0 through 9 and allows repetition. How many PINs are possible?",

      answer:
        "10^3 = 1,000",
    },

    {
      id: "guided-05-02",

      question:
        "A 3-digit code uses digits 0 through 9 without repetition. How many codes are possible?",

      answer:
        "10 × 9 × 8 = 720",
    },

    {
      id: "guided-05-03",

      question:
        "A 5-character code uses only A, B, and C, and repetition is allowed. How many codes are possible?",

      answer:
        "3^5 = 243",
    },

    {
      id: "guided-05-04",

      question:
        "A four-digit number cannot begin with zero, but repetition is allowed. How many possibilities exist?",

      answer:
        "9 × 10 × 10 × 10 = 9,000",
    },

    {
      id: "guided-05-05",

      question:
        "Why is a repeated-choice problem not automatically a permutation?",

      answer:
        "Standard permutations select distinct objects without replacement. When choices may repeat, each position may continue to have the same available options.",
    },
  ],

  independentPractice: [
    {
      id: "practice-05-01",

      difficulty: "Foundation",

      question:
        "A password contains 4 letters chosen from 26 letters. Repetition is allowed. How many passwords are possible?",

      answer:
        "26^4 = 456,976",
    },

    {
      id: "practice-05-02",

      difficulty: "Foundation",

      question:
        "A code contains 3 different digits selected from 0 through 9. No repetition is allowed. How many codes are possible?",

      answer:
        "10 × 9 × 8 = 720",
    },

    {
      id: "practice-05-03",

      difficulty: "Developing",

      question:
        "A license code has two letters followed by two digits. Repetition is allowed. How many codes are possible?",

      answer:
        "26^2 × 10^2 = 67,600",
    },

    {
      id: "practice-05-04",

      difficulty: "Developing",

      question:
        "A four-character code uses A, B, C, D, and E without repetition. How many codes are possible?",

      answer:
        "5 × 4 × 3 × 2 = 120",
    },

    {
      id: "practice-05-05",

      difficulty: "Challenge",

      question:
        "A five-digit code uses digits 0 through 9 with repetition allowed, but the first digit must be odd. How many codes are possible?",

      sampleAnswer:
        "The first position has 5 choices: 1, 3, 5, 7, or 9. Each remaining position has 10 choices. Therefore 5 × 10^4 = 50,000.",
    },

    {
      id: "practice-05-06",

      difficulty: "AP Reasoning",

      question:
        "A four-digit code is generated using digits 0 through 9 with repetition allowed. What is the probability that the code contains at least one zero?",

      sampleAnswer:
        "There are 10^4 = 10,000 total codes. Codes with no zero have 9 choices per position, giving 9^4 = 6,561. Therefore 10,000 - 6,561 = 3,439 codes contain at least one zero. The probability is 3,439/10,000 = 0.3439.",
    },
  ],

  commonMistakes: [
    {
      mistake:
        "Automatically decreasing the number of choices after every selection.",

      correction:
        "Choices decrease only when repetition is prohibited or another restriction removes options.",
    },

    {
      mistake:
        "Using nPr when repetition is allowed.",

      correction:
        "Standard permutation formulas assume objects are selected without replacement. Repeated-choice problems often require direct use of the Fundamental Counting Principle.",
    },

    {
      mistake:
        "Ignoring a restriction on the first position.",

      correction:
        "Analyze each position separately. A restriction may affect only one stage of the counting process.",
    },

    {
      mistake:
        "Counting 'at least one' cases one at a time when complement counting is simpler.",

      correction:
        "It is often easier to calculate all outcomes and subtract the outcomes containing none of the required item.",
    },

    {
      mistake:
        "Applying a formula before identifying the rules.",

      correction:
        "First determine whether repetition is allowed, whether order matters, and what choices are restricted.",
    },
  ],

  discussionQuestions: [
    "How does allowing repetition change a counting problem?",
    "Why do some restrictions affect only one position while others affect every position?",
    "When is complement counting more efficient than direct counting?",
    "Why is it important to state whether replacement is allowed?",
    "How can restrictions reduce a computational search space?",
    "Where do repeated choices appear in technology and daily life?",
  ],

  formativeAssessment: {
    totalPoints: 15,

    passingScore: 12,

    questions: [
      {
        id: "check-05-01",

        type: "calculation",

        points: 3,

        prompt:
          "A three-character code uses four possible symbols with repetition allowed. How many codes are possible?",

        answer:
          "4^3 = 64",
      },

      {
        id: "check-05-02",

        type: "concept",

        points: 3,

        prompt:
          "Explain how repetition changes the number of available choices from one position to the next.",

        sampleAnswer:
          "When repetition is allowed, using a choice does not remove it, so the same number of options may remain available at later positions.",
      },

      {
        id: "check-05-03",

        type: "application",

        points: 3,

        prompt:
          "A four-digit number cannot begin with zero, but repetition is allowed. How many numbers are possible?",

        answer:
          "9 × 10 × 10 × 10 = 9,000",
      },

      {
        id: "check-05-04",

        type: "reasoning",

        points: 3,

        prompt:
          "Explain why 10^4 and 10P4 represent different counting situations.",

        sampleAnswer:
          "10^4 allows the same digit to be used repeatedly in four positions. 10P4 selects four distinct digits without replacement, so the available choices decrease.",
      },

      {
        id: "check-05-05",

        type: "probability",

        points: 3,

        prompt:
          "A two-digit code uses digits 0 through 9 with repetition allowed. What is the probability that at least one digit is 5?",

        sampleAnswer:
          "There are 10^2 = 100 total codes. Codes with no 5 have 9^2 = 81 possibilities. Therefore 19 codes contain at least one 5, so the probability is 19/100.",
      },
    ],
  },

  researchExtension: {
    title: "Rules That Shape Search Spaces",

    researchQuestion:
      "How do repetition rules and restrictions affect the size of real-world search spaces?",

    applicationOptions: [
      "Passwords",
      "PIN systems",
      "License plates",
      "Genetic sequences",
      "Scheduling",
      "Artificial intelligence search",
    ],

    task:
      "Choose one real system involving sequences or selections. Identify the available choices, determine whether repetition is allowed, describe at least one restriction, and calculate how that restriction changes the total number of possible outcomes.",

    requiredEvidence: [
      "Description of the real system",
      "Number of choices at each stage",
      "Explanation of repetition rules",
      "Identification of at least one restriction",
      "Calculation before the restriction",
      "Calculation after the restriction",
      "Interpretation of the difference",
      "One credible source",
    ],
  },

  portfolioArtifact: {
    title: "How Rules Change the Count",

    description:
      "Create a one-page visual showing how repetition and restrictions change the number of outcomes in the same basic counting situation.",

    requiredSections: [
      "Original counting problem",
      "Version with repetition",
      "Version without repetition",
      "Version with a restriction",
      "Fundamental Counting Principle calculations",
      "Comparison of results",
      "One probability connection",
      "Reflection",
    ],

    requiredEvidence: [
      "At least three correct counts",
      "Clear identification of legal choices",
      "Explanation of repetition",
      "Explanation of restrictions",
      "One visual comparison",
      "One contextual interpretation",
    ],
  },

  growthIndicators: [
    "Conceptual Understanding",
    "Counting Reasoning",
    "Mathematical Communication",
    "Probability Modeling",
    "Computational Thinking",
    "Constraint Analysis",
  ],

  reflection: [
    "How do you determine whether repetition is allowed?",
    "Why can one restriction dramatically change the total number of possibilities?",
    "When is direct multiplication better than using a memorized formula?",
    "Why is complement counting useful for 'at least one' problems?",
    "How can repeated-choice counting help us construct probability sample spaces?",
  ],

  summary: [
    "Repeated-choice problems allow previously used options to appear again.",
    "When each of r positions has m choices and repetition is allowed, the total is m^r.",
    "Without repetition, the number of available choices generally decreases.",
    "Restrictions change the number of legal choices at one or more stages.",
    "The Fundamental Counting Principle remains the central tool for restricted counting.",
    "Complement counting can simplify problems involving conditions such as 'at least one.'",
    "Standard permutations generally assume no repetition.",
    "Careful interpretation of the rules is more important than selecting a formula immediately.",
    "Restrictions are important in probability, cybersecurity, computer science, and artificial intelligence.",
    "The next lesson will use these counting techniques to construct and analyze probability sample spaces.",
  ],

  previousLesson: {
    id: "probability-m02-l04",
    slug: "combinations",
    title: "Combinations",
  },

  nextLesson: null,

  lumineryGuidance: {
    message:
      "Before multiplying anything, identify the legal choices at every stage. The rules determine the mathematics.",

    prompt:
      "Write the number of available choices above each position before choosing a formula or multiplying.",

    coachingQuestions: [
      "Is repetition allowed?",
      "Can a selected item be used again?",
      "Does order matter?",
      "Is any position restricted?",
      "Is any choice required or forbidden?",
      "How many legal choices exist at each stage?",
      "Would counting the complement make the problem easier?",
    ],
  },
};

export default lesson05;