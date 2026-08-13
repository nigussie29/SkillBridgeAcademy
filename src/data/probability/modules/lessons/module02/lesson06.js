const lesson06 = {
  id: "probability-m02-l06",
  courseId: "probability-foundations",
  moduleId: "module-02",

  moduleNumber: 2,
  lessonNumber: 6,

  slug: "counting-sample-spaces-for-probability",

  title: "Counting Sample Spaces for Probability",

  shortTitle: "Counting Sample Spaces",

  subtitle:
    "Use counting techniques to determine the size of probability sample spaces efficiently.",

  status: "Available",

  duration: "60–75 minutes",

  level: "AP Statistics Foundation",

  essentialQuestion:
    "How can counting techniques help us determine probabilities when a sample space is too large to list?",

  bigIdea:
    "Probability often depends on comparing favorable outcomes with all possible outcomes. Counting techniques allow us to determine the size of large sample spaces without listing every individual outcome.",

  whyThisLessonExists: {
    title: "Why This Lesson Exists",

    introduction:
      "In simple probability problems, we can often list every possible outcome. But real sample spaces can become very large. Passwords, card selections, rankings, schedules, committees, and multi-stage experiments may contain hundreds, thousands, or millions of possible outcomes.",

    centralProblem:
      "How can we calculate probability accurately when listing every outcome is impractical?",

    purpose:
      "This lesson connects the counting techniques developed throughout Module 2 directly to probability. Students will determine total and favorable outcomes using the Fundamental Counting Principle, factorials, permutations, combinations, repeated choices, and restrictions.",
  },

  problemFirst: {
    title: "What Is the Probability of Winning the Code Game?",

    scenario:
      "A game randomly generates a three-digit code using the digits 0 through 9. Digits may repeat. A player wins if all three digits are different.",

    questions: [
      "How many total three-digit codes are possible?",
      "How many choices are available for each digit when repetition is allowed?",
      "How many winning codes contain three different digits?",
      "Which counting technique should be used for the favorable outcomes?",
      "How can probability be calculated from the two counts?",
      "Why would listing every possible code be inefficient?",
    ],

    expectedInsight:
      "There are 10^3 = 1,000 total codes. For a winning code, the first digit has 10 choices, the second has 9, and the third has 8, giving 10 × 9 × 8 = 720 favorable outcomes. Therefore the probability of winning is 720/1,000 = 0.72.",
  },

  learningObjectives: [
    "Define a sample space in a counting context.",
    "Determine sample-space size using the Fundamental Counting Principle.",
    "Use factorials to count complete ordered sample spaces.",
    "Use permutations when favorable outcomes depend on ordered selections.",
    "Use combinations when favorable outcomes depend on unordered selections.",
    "Count sample spaces involving repetition or restrictions.",
    "Calculate probability using favorable outcomes divided by total equally likely outcomes.",
    "Choose an appropriate counting strategy from contextual clues.",
    "Use Python to verify large sample-space counts.",
    "Communicate probability reasoning clearly and in context.",
  ],

  prerequisiteKnowledge: [
    "Sample spaces",
    "Events",
    "Theoretical probability",
    "Fundamental Counting Principle",
    "Factorials",
    "Permutations",
    "Combinations",
    "Repeated choices",
    "Restrictions",
  ],

  vocabulary: [
    {
      term: "Sample Space",
      definition:
        "The set of all possible outcomes of a random process.",
    },
    {
      term: "Sample-Space Size",
      definition:
        "The total number of outcomes contained in a sample space.",
    },
    {
      term: "Favorable Outcome",
      definition:
        "An outcome belonging to the event whose probability is being calculated.",
    },
    {
      term: "Equally Likely Outcomes",
      definition:
        "Outcomes that have the same probability of occurring under the probability model.",
    },
    {
      term: "Event",
      definition:
        "A subset of outcomes from the sample space.",
    },
    {
      term: "Counting Strategy",
      definition:
        "A mathematical method used to determine the number of possible outcomes without necessarily listing them.",
    },
    {
      term: "Outcome Structure",
      definition:
        "The rules describing how an outcome is constructed, including order, repetition, and restrictions.",
    },
  ],

  formulas: [
    {
      id: "classical-probability-counting",

      name: "Probability from Equally Likely Outcomes",

      formula:
        "P(A) = number of favorable outcomes / total number of equally likely outcomes",

      meaning:
        "When every outcome in the sample space is equally likely, probability can be calculated by comparing the number of outcomes in event A with the total sample-space size.",
    },

    {
      id: "sample-space-fcp",

      name: "Sample Space from Multiple Stages",

      formula:
        "|S| = c1 × c2 × ... × ck",

      meaning:
        "If an outcome is created through several stages, multiply the number of legal choices available at each stage.",
    },

    {
      id: "event-probability-counts",

      name: "Event Probability Using Counts",

      formula:
        "P(A) = |A| / |S|",

      meaning:
        "|A| represents the number of outcomes in event A and |S| represents the total number of equally likely outcomes.",
    },
  ],

  workedExamples: [
    {
      id: "example-06-01",

      title: "Two Dice",

      problem:
        "Two fair six-sided dice are rolled. What is the probability that the sum is 7?",

      solutionSteps: [
        "Each die has 6 possible outcomes.",
        "The total sample-space size is 6 × 6 = 36.",
        "The outcomes producing a sum of 7 are (1,6), (2,5), (3,4), (4,3), (5,2), and (6,1).",
        "There are 6 favorable outcomes.",
        "Calculate 6/36.",
      ],

      answer:
        "P(sum of 7) = 1/6",

      interpretation:
        "The Fundamental Counting Principle determines the total sample-space size efficiently.",
    },

    {
      id: "example-06-02",

      title: "Random Three-Digit Code",

      problem:
        "A three-digit code is generated using digits 0 through 9 with repetition allowed. What is the probability that all three digits are different?",

      solutionSteps: [
        "Total codes: 10 × 10 × 10 = 1,000.",
        "For all digits different, there are 10 choices for the first digit.",
        "There are 9 choices for the second digit.",
        "There are 8 choices for the third digit.",
        "Favorable outcomes: 10 × 9 × 8 = 720.",
        "Calculate 720/1,000.",
      ],

      answer:
        "P(all digits different) = 0.72",

      interpretation:
        "The denominator allows repetition while the numerator includes the restriction that all digits must be distinct.",
    },

    {
      id: "example-06-03",

      title: "Choosing a Committee",

      problem:
        "A committee of 3 students is selected randomly from 10 students. What is the probability that Maya is selected?",

      solutionSteps: [
        "The total number of committees is 10C3 = 120.",
        "For Maya to be selected, Maya occupies one of the three committee positions conceptually, leaving two members to choose.",
        "Choose the remaining 2 members from the other 9 students.",
        "Favorable groups: 9C2 = 36.",
        "Calculate 36/120.",
      ],

      answer:
        "P(Maya selected) = 3/10",

      interpretation:
        "Combinations are appropriate because committee membership has no ordering.",
    },

    {
      id: "example-06-04",

      title: "Race Finishing Order",

      problem:
        "Six runners are equally likely to finish in any order. What is the probability that Ana finishes first and Ben finishes second?",

      solutionSteps: [
        "The total number of complete finishing orders is 6! = 720.",
        "Fix Ana in first place.",
        "Fix Ben in second place.",
        "The remaining four runners may be arranged in 4! = 24 ways.",
        "Calculate 24/720.",
      ],

      answer:
        "P(Ana first and Ben second) = 1/30",

      interpretation:
        "Factorials count the complete ordered sample space, while restrictions identify the favorable outcomes.",
    },

    {
      id: "example-06-05",

      title: "At Least One Zero",

      problem:
        "A four-digit code is generated using digits 0 through 9 with repetition allowed. What is the probability that the code contains at least one zero?",

      solutionSteps: [
        "Total codes: 10^4 = 10,000.",
        "Instead of counting codes with one, two, three, or four zeros separately, count the complement.",
        "A code with no zero has 9 choices for each position.",
        "Codes with no zero: 9^4 = 6,561.",
        "Codes with at least one zero: 10,000 - 6,561 = 3,439.",
        "Calculate 3,439/10,000.",
      ],

      answer:
        "P(at least one zero) = 0.3439",

      interpretation:
        "Complement counting can simplify a large event-counting problem.",
    },
  ],

  interactiveExploration: {
    title: "Build the Sample Space Without Listing It",

    instructions: [
      "Choose a random process with three stages.",
      "Record the number of possible choices at each stage.",
      "Use the Fundamental Counting Principle to calculate the sample-space size.",
      "Define one event within that sample space.",
      "Count the favorable outcomes using an appropriate technique.",
      "Calculate the event probability.",
      "Explain why listing every outcome would or would not be practical.",
    ],

    investigationQuestions: [
      "What determines the denominator of a probability calculation?",
      "What determines the numerator?",
      "Do the numerator and denominator always use the same counting technique?",
      "How can restrictions affect only the favorable outcomes?",
      "When might combinations be more appropriate than permutations?",
      "When might complement counting be useful?",
    ],

    expectedDiscovery:
      "The total sample space and the favorable event may require different counting strategies. Correct probability reasoning depends on modeling both counts accurately.",
  },

  realWorldApplications: [
    {
      field: "Statistics",
      application:
        "Counting sample spaces supports theoretical probability calculations used throughout statistical inference.",
    },
    {
      field: "Quality Control",
      application:
        "Manufacturers may calculate probabilities associated with selecting groups of products containing defective items.",
    },
    {
      field: "Cybersecurity",
      application:
        "Security analysis compares total password spaces with subsets satisfying or violating particular conditions.",
    },
    {
      field: "Genetics",
      application:
        "Possible genetic combinations can create large sample spaces for probability models.",
    },
    {
      field: "Finance",
      application:
        "Scenario models often consider combinations of possible market or portfolio outcomes.",
    },
    {
      field: "Artificial Intelligence",
      application:
        "AI systems often reason over large sets of possible states, actions, sequences, or configurations.",
    },
  ],

  aiConnection: {
    title: "Sample Spaces and AI Decision Search",

    explanation:
      "An AI system may face many possible actions or sequences. Counting the size of that possibility space helps researchers understand the difficulty of the search problem.",

    example:
      "Suppose an AI agent can choose among 5 actions at each of 8 stages. If repetition is allowed, there are 5^8 = 390,625 possible action sequences before restrictions are applied.",

    caution:
      "A mathematically possible state is not always equally likely or equally useful. In real AI systems, probability models may assign very different probabilities to different outcomes.",

    reflectionQuestion:
      "Why is knowing the size of a search space useful even when an AI system does not examine every possible outcome?",
  },

  pythonLab: {
    title: "Python Lab: Counting Probability Sample Spaces",

    objective:
      "Use Python to calculate sample-space sizes, favorable outcome counts, and theoretical probabilities.",

    code: `import math

# Example 1:
# Three-digit code with repetition allowed

total_codes = 10 ** 3

all_different = (
    10 * 9 * 8
)

probability_all_different = (
    all_different / total_codes
)

print("Total codes:", total_codes)

print(
    "Codes with all different digits:",
    all_different
)

print(
    "Probability:",
    probability_all_different
)


# Example 2:
# Committee selection

total_committees = math.comb(10, 3)

committees_with_maya = math.comb(9, 2)

probability_maya = (
    committees_with_maya
    / total_committees
)

print()
print(
    "Total committees:",
    total_committees
)

print(
    "Committees containing Maya:",
    committees_with_maya
)

print(
    "Probability Maya is selected:",
    probability_maya
)`,
    
    questions: [
      "Why is 10^3 used for the total code sample space?",
      "Why is 10 × 9 × 8 used for the favorable code outcomes?",
      "Why does the committee problem use combinations?",
      "What does the numerator represent in each probability?",
      "What does the denominator represent?",
    ],

    extension:
      "Create a Python program for a four-digit code that calculates the probability of containing at least one repeated digit.",
  },

  guidedPractice: [
    {
      id: "guided-06-01",

      question:
        "Two fair coins are tossed. How many outcomes are in the sample space?",

      answer:
        "2 × 2 = 4 outcomes",
    },

    {
      id: "guided-06-02",

      question:
        "Three fair six-sided dice are rolled. How many ordered outcomes are possible?",

      answer:
        "6^3 = 216 outcomes",
    },

    {
      id: "guided-06-03",

      question:
        "Five runners finish a race with no ties. How many complete finishing orders are possible?",

      answer:
        "5! = 120",
    },

    {
      id: "guided-06-04",

      question:
        "A committee of 2 students is selected from 7 students. How many possible committees exist?",

      answer:
        "7C2 = 21",
    },

    {
      id: "guided-06-05",

      question:
        "Why must favorable and total outcomes be counted using the same definition of an outcome?",

      answer:
        "The numerator must represent a subset of the denominator's sample space. Otherwise the probability ratio is not logically consistent.",
    },
  ],

  independentPractice: [
    {
      id: "practice-06-01",

      difficulty: "Foundation",

      question:
        "A spinner has 4 equally likely outcomes and is spun twice. How many ordered outcomes are possible?",

      answer:
        "4 × 4 = 16",
    },

    {
      id: "practice-06-02",

      difficulty: "Foundation",

      question:
        "A three-letter code uses 26 letters with repetition allowed. How many codes are possible?",

      answer:
        "26^3 = 17,576",
    },

    {
      id: "practice-06-03",

      difficulty: "Developing",

      question:
        "A group of 4 students is chosen from 9 students. How many different groups can be formed?",

      answer:
        "9C4 = 126",
    },

    {
      id: "practice-06-04",

      difficulty: "Developing",

      question:
        "Seven runners compete for first, second, and third place. How many medal outcomes are possible?",

      answer:
        "7P3 = 7 × 6 × 5 = 210",
    },

    {
      id: "practice-06-05",

      difficulty: "Challenge",

      question:
        "A three-digit code is generated using digits 0 through 9 with repetition allowed. What is the probability that no digit repeats?",

      sampleAnswer:
        "There are 10^3 = 1,000 total codes. Codes with no repeated digit total 10 × 9 × 8 = 720. Therefore the probability is 720/1,000 = 0.72.",
    },

    {
      id: "practice-06-06",

      difficulty: "AP Reasoning",

      question:
        "Four students are selected randomly from 12 students. What is the probability that two particular students are both selected?",

      sampleAnswer:
        "There are 12C4 = 495 total groups. If the two particular students must be included, choose the remaining two from the other 10 students: 10C2 = 45. Therefore the probability is 45/495 = 1/11.",
    },
  ],

  commonMistakes: [
    {
      mistake:
        "Listing outcomes when a counting method would be more efficient.",

      correction:
        "Use counting principles to determine large sample-space sizes without listing every outcome.",
    },

    {
      mistake:
        "Using permutations when order does not matter.",

      correction:
        "First define what counts as a unique outcome. If changing order does not create a new outcome, use combinations.",
    },

    {
      mistake:
        "Using different outcome definitions in the numerator and denominator.",

      correction:
        "Favorable outcomes must be a subset of the total sample space using the same outcome structure.",
    },

    {
      mistake:
        "Assuming every mathematically possible outcome is equally likely.",

      correction:
        "The favorable-over-total formula requires equally likely outcomes. Verify the probability model before using it.",
    },

    {
      mistake:
        "Ignoring restrictions while counting the sample space.",

      correction:
        "Every count must reflect the actual rules of the random process.",
    },
  ],

  discussionQuestions: [
    "Why is defining the sample space essential before calculating probability?",
    "Can the numerator and denominator use different counting techniques?",
    "Why must the outcomes be equally likely for simple counting probability?",
    "How can counting avoid enormous outcome lists?",
    "When is complement counting especially useful?",
    "How does sample-space size relate to computational complexity?",
  ],

  formativeAssessment: {
    totalPoints: 15,

    passingScore: 12,

    questions: [
      {
        id: "check-06-01",

        type: "calculation",

        points: 3,

        prompt:
          "Three fair coins are tossed. Determine the number of outcomes in the sample space.",

        answer:
          "2^3 = 8 outcomes",
      },

      {
        id: "check-06-02",

        type: "concept",

        points: 3,

        prompt:
          "Explain the relationship between an event and a sample space.",

        sampleAnswer:
          "The sample space contains all possible outcomes, while an event contains the outcomes satisfying a particular condition.",
      },

      {
        id: "check-06-03",

        type: "application",

        points: 3,

        prompt:
          "A committee of 3 is selected from 8 students. How many total committees are possible?",

        answer:
          "8C3 = 56",
      },

      {
        id: "check-06-04",

        type: "reasoning",

        points: 3,

        prompt:
          "Explain why permutations are appropriate for medal placements but combinations are appropriate for committees.",

        sampleAnswer:
          "Medal positions are distinct, so changing order changes the outcome. Committee members have no ranked positions, so changing order does not create a new group.",
      },

      {
        id: "check-06-05",

        type: "probability",

        points: 3,

        prompt:
          "A two-digit code uses digits 0 through 9 with repetition allowed. What is the probability that both digits are different?",

        sampleAnswer:
          "There are 10^2 = 100 total codes. There are 10 × 9 = 90 codes with different digits. Therefore the probability is 90/100 = 0.90.",
      },
    ],
  },

  researchExtension: {
    title: "Counting a Real Probability Space",

    researchQuestion:
      "How can counting techniques be used to analyze the probability structure of a real system?",

    applicationOptions: [
      "Lottery selections",
      "Card games",
      "Password systems",
      "Sports rankings",
      "Random sampling",
      "AI action spaces",
    ],

    task:
      "Choose one real system involving random or uncertain outcomes. Define the sample space, identify an event, determine the total and favorable outcome counts, and calculate a theoretical probability when the equally likely assumption is reasonable.",

    requiredEvidence: [
      "Description of the random process",
      "Definition of one outcome",
      "Sample-space counting method",
      "Definition of an event",
      "Favorable-outcome counting method",
      "Probability calculation",
      "Interpretation in context",
      "One credible source",
    ],
  },

  portfolioArtifact: {
    title: "From Counting to Probability",

    description:
      "Create a one-page visual showing how a large sample space can be counted efficiently and converted into a probability model.",

    requiredSections: [
      "Random process",
      "Definition of an outcome",
      "Total sample-space count",
      "Event definition",
      "Favorable-outcome count",
      "Probability calculation",
      "Counting strategy explanation",
      "Contextual interpretation",
      "Reflection",
    ],

    requiredEvidence: [
      "One correct sample-space calculation",
      "One correct event count",
      "One probability ratio",
      "Correct counting notation",
      "One visual model",
      "One interpretation in context",
    ],
  },

  growthIndicators: [
    "Conceptual Understanding",
    "Counting Reasoning",
    "Probability Modeling",
    "Mathematical Communication",
    "Computational Thinking",
    "AP Statistics Reasoning",
  ],

  reflection: [
    "How do counting techniques make probability problems easier?",
    "Why must you define an outcome before counting the sample space?",
    "How do you decide whether to use the Fundamental Counting Principle, factorials, permutations, or combinations?",
    "Why must favorable outcomes come from the same sample space as the denominator?",
    "What happens if the outcomes in the sample space are not equally likely?",
  ],

  summary: [
    "A sample space contains all possible outcomes of a random process.",
    "Counting techniques allow large sample spaces to be measured without listing every outcome.",
    "The Fundamental Counting Principle handles multi-stage processes.",
    "Factorials count complete ordered arrangements.",
    "Permutations count ordered selections.",
    "Combinations count unordered selections.",
    "Repeated-choice rules and restrictions must be incorporated into the sample-space model.",
    "For equally likely outcomes, probability can be calculated as favorable outcomes divided by total outcomes.",
    "The numerator and denominator must use consistent definitions of an outcome.",
    "Correct counting is a foundation for advanced probability reasoning.",
  ],

  previousLesson: {
    id: "probability-m02-l05",
    slug: "repeated-choices-and-restrictions",
    title: "Repeated Choices and Restrictions",
  },

  nextLesson: null,

  lumineryGuidance: {
    message:
      "Before calculating probability, build the sample space correctly. A correct fraction cannot come from incorrect counts.",

    prompt:
      "Define one outcome first, then count the total sample space and the favorable event using that same definition.",

    coachingQuestions: [
      "What exactly counts as one outcome?",
      "Are the outcomes equally likely?",
      "What is the total sample space?",
      "What event are you trying to measure?",
      "How many favorable outcomes are there?",
      "Which counting technique fits the total outcomes?",
      "Which counting technique fits the favorable outcomes?",
      "Are the favorable outcomes truly a subset of the sample space?",
    ],
  },
};

export default lesson06;