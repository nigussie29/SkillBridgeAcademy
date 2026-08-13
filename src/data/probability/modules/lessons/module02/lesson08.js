const lesson08 = {
  id: "probability-m02-l08",
  courseId: "probability-foundations",
  moduleId: "module-02",

  moduleNumber: 2,
  lessonNumber: 8,

  slug: "module-2-counting-techniques-synthesis",

  title: "Module 2 Counting Techniques Synthesis",

  shortTitle: "Counting Synthesis",

  subtitle:
    "Integrate the Fundamental Counting Principle, factorials, permutations, combinations, repetition, restrictions, and sample-space reasoning in a cumulative investigation.",

  status: "Available",

  duration: "75–90 minutes",

  level: "AP Statistics Foundation",

  essentialQuestion:
    "How can we analyze an unfamiliar counting problem, choose an appropriate strategy, and use the result to support probability reasoning?",

  bigIdea:
    "Counting techniques form a connected reasoning system. The correct method depends on how an outcome is constructed: whether choices occur in stages, whether order matters, whether repetition is allowed, whether restrictions exist, and whether we are counting a complete sample space or a particular event.",

  whyThisLessonExists: {
    title: "Why This Lesson Exists",

    introduction:
      "Throughout Module 2, you have developed several counting techniques. Real probability problems rarely announce which technique should be used. Instead, you must interpret the structure of the situation and build the counting argument yourself.",

    centralProblem:
      "Can you move from an unfamiliar situation to a complete counting and probability model without relying on formula keywords?",

    purpose:
      "This synthesis lesson brings together the entire Module 2 toolkit. Students will compare counting methods, solve multi-stage problems, analyze restrictions, construct sample spaces, calculate probability, use computational verification, and communicate complete AP Statistics–style reasoning.",
  },

  problemFirst: {
    title: "Designing a Student Research Team",

    scenario:
      "A school has 14 qualified students. A research team of 5 students will be selected. One of the selected students will serve as team leader. Maya and Noah cannot both serve on the same team. After the team is selected, the leader will choose one of 4 research topics for the team.",

    questions: [
      "What counts as one complete outcome in this situation?",
      "Which part of the process is an unordered selection?",
      "Which part involves a distinct role?",
      "How should the Maya-Noah restriction be handled?",
      "How many valid five-person teams are possible?",
      "For each team, how many possible leaders are there?",
      "For each team and leader, how many topic choices are possible?",
      "Which counting principles must be combined?",
      "How would you justify your strategy in an AP-style written response?",
    ],

    expectedInsight:
      "The problem must be separated into stages. First count valid five-person teams using combinations and a restriction. Then choose one of the five selected students as leader. Finally choose one of four research topics. The Fundamental Counting Principle connects these stages into one complete outcome count.",
  },

  learningObjectives: [
    "Select an appropriate counting technique based on outcome structure.",
    "Apply the Fundamental Counting Principle to multi-stage processes.",
    "Use factorials to count complete arrangements.",
    "Use permutations when order matters.",
    "Use combinations when order does not matter.",
    "Analyze repeated-choice situations correctly.",
    "Incorporate required and forbidden conditions into counting models.",
    "Use complement counting when it simplifies a problem.",
    "Construct large probability sample spaces efficiently.",
    "Calculate probabilities using favorable and total equally likely outcomes.",
    "Combine multiple counting techniques within one investigation.",
    "Write complete AP Statistics–style explanations and justifications.",
  ],

  prerequisiteKnowledge: [
    "Fundamental Counting Principle",
    "Factorial notation",
    "Ordered arrangements",
    "Permutations",
    "Combinations",
    "Repeated choices",
    "Restrictions",
    "Complement counting",
    "Sample spaces",
    "Events",
    "Theoretical probability",
  ],

  vocabulary: [
    {
      term: "Fundamental Counting Principle",
      definition:
        "A rule stating that the number of outcomes in a multi-stage process is found by multiplying the number of choices available at each stage.",
    },
    {
      term: "Factorial",
      definition:
        "The product of a positive integer and all positive integers below it.",
    },
    {
      term: "Permutation",
      definition:
        "An ordered selection in which changing the order creates a different outcome.",
    },
    {
      term: "Combination",
      definition:
        "An unordered selection in which changing the order does not create a different outcome.",
    },
    {
      term: "Repetition",
      definition:
        "A condition in which the same choice may be used more than once.",
    },
    {
      term: "Restriction",
      definition:
        "A rule that limits the outcomes that are allowed.",
    },
    {
      term: "Complement Counting",
      definition:
        "Counting all outcomes and subtracting the outcomes that violate a condition.",
    },
    {
      term: "Sample Space",
      definition:
        "The set of all possible outcomes of a random process.",
    },
    {
      term: "Event",
      definition:
        "A subset of outcomes from the sample space.",
    },
    {
      term: "Counting Strategy",
      definition:
        "A reasoned plan for determining the number of outcomes in a problem.",
    },
  ],

  formulas: [
    {
      id: "synthesis-fcp",

      name: "Fundamental Counting Principle",

      formula:
        "total outcomes = c1 × c2 × ... × ck",

      meaning:
        "Multiply the number of legal choices available at each stage.",
    },

    {
      id: "synthesis-factorial",

      name: "Factorial",

      formula:
        "n! = n × (n - 1) × ... × 2 × 1",

      meaning:
        "Counts complete arrangements of n distinct objects.",
    },

    {
      id: "synthesis-permutation",

      name: "Permutation",

      formula:
        "nPr = n! / (n - r)!",

      meaning:
        "Counts ordered selections of r distinct objects from n available objects.",
    },

    {
      id: "synthesis-combination",

      name: "Combination",

      formula:
        "nCr = n! / [r!(n - r)!]",

      meaning:
        "Counts unordered selections of r objects from n available objects.",
    },

    {
      id: "synthesis-repetition",

      name: "Repeated Choices",

      formula:
        "total outcomes = m^r",

      meaning:
        "If each of r positions has m choices and repetition is allowed, there are m^r possible sequences.",
    },

    {
      id: "synthesis-complement",

      name: "Complement Counting",

      formula:
        "valid outcomes = total outcomes - invalid outcomes",

      meaning:
        "Useful when the invalid outcomes are easier to count than the valid outcomes directly.",
    },

    {
      id: "synthesis-probability",

      name: "Probability from Equally Likely Outcomes",

      formula:
        "P(A) = |A| / |S|",

      meaning:
        "Compare the number of favorable outcomes with the total number of equally likely outcomes.",
    },
  ],

  workedExamples: [
    {
      id: "example-08-01",

      title: "Complete Arrangement",

      problem:
        "Six different books are arranged on a shelf. How many different arrangements are possible?",

      solutionSteps: [
        "All 6 books are distinct.",
        "Every book is used.",
        "Order matters.",
        "Use 6!.",
        "Calculate 6 × 5 × 4 × 3 × 2 × 1.",
      ],

      answer:
        "6! = 720 arrangements",

      interpretation:
        "A factorial is appropriate because every distinct object is arranged.",
    },

    {
      id: "example-08-02",

      title: "Ordered Selection",

      problem:
        "Ten students compete for president, vice president, and secretary. How many officer assignments are possible?",

      solutionSteps: [
        "There are 10 available students.",
        "Three distinct positions are filled.",
        "Order matters because the offices are different.",
        "Use 10P3.",
        "Calculate 10 × 9 × 8.",
      ],

      answer:
        "10P3 = 720 assignments",

      interpretation:
        "A permutation is appropriate because only three students are selected and their roles are ordered.",
    },

    {
      id: "example-08-03",

      title: "Unordered Selection",

      problem:
        "Ten students are available for a three-person committee. How many committees can be formed?",

      solutionSteps: [
        "There are 10 students available.",
        "Three students are selected.",
        "There are no ranked positions.",
        "Order does not matter.",
        "Use 10C3.",
      ],

      answer:
        "10C3 = 120 committees",

      interpretation:
        "The same three students form one committee regardless of selection order.",
    },

    {
      id: "example-08-04",

      title: "Repeated Choices",

      problem:
        "A five-character code uses the symbols A, B, C, and D. Repetition is allowed. How many codes are possible?",

      solutionSteps: [
        "Each position has 4 choices.",
        "Using a symbol does not remove it.",
        "There are 5 positions.",
        "Use 4^5.",
      ],

      answer:
        "4^5 = 1,024 codes",

      interpretation:
        "The number of choices remains constant because repetition is allowed.",
    },

    {
      id: "example-08-05",

      title: "Restricted Committee",

      problem:
        "A committee of 4 is selected from 10 students. Maya and Noah cannot both serve. How many valid committees are possible?",

      solutionSteps: [
        "Count all committees: 10C4 = 210.",
        "Count committees containing both Maya and Noah.",
        "If both are included, choose the other 2 members from the remaining 8 students.",
        "Invalid committees: 8C2 = 28.",
        "Subtract invalid from total.",
      ],

      answer:
        "210 - 28 = 182 valid committees",

      interpretation:
        "Complement counting efficiently removes the forbidden cases.",
    },

    {
      id: "example-08-06",

      title: "Probability Using Combinations",

      problem:
        "Four students are selected randomly from a group of 12 students. What is the probability that Maya and Noah are both selected?",

      solutionSteps: [
        "Total groups: 12C4.",
        "If Maya and Noah must both be selected, two positions are already determined.",
        "Choose the remaining 2 students from the other 10.",
        "Favorable groups: 10C2.",
        "Calculate 10C2 / 12C4.",
        "10C2 = 45 and 12C4 = 495.",
        "Simplify 45/495.",
      ],

      answer:
        "P(Maya and Noah selected) = 1/11",

      interpretation:
        "The denominator and numerator both count unordered groups from the same sample space.",
    },

    {
      id: "example-08-07",

      title: "Multi-Stage Synthesis",

      problem:
        "A class chooses a committee of 4 from 9 students. One committee member becomes chairperson, and the committee chooses one of 3 project topics. How many complete outcomes are possible?",

      solutionSteps: [
        "Choose the committee: 9C4.",
        "For each committee, choose 1 of the 4 members as chairperson.",
        "For each committee-chair combination, choose 1 of 3 topics.",
        "Apply the Fundamental Counting Principle.",
        "Calculate 9C4 × 4 × 3.",
        "9C4 = 126.",
        "126 × 4 × 3 = 1,512.",
      ],

      answer:
        "1,512 complete outcomes",

      interpretation:
        "Complex problems can combine combinations, role assignment, and repeated stages through the Fundamental Counting Principle.",
    },
  ],

  interactiveExploration: {
    title: "Build Your Counting Decision System",

    instructions: [
      "Select five different counting scenarios.",
      "For each scenario, define what counts as one outcome.",
      "Decide whether order matters.",
      "Determine whether repetition is allowed.",
      "Identify any required or forbidden conditions.",
      "Choose the most appropriate counting strategy.",
      "Write the mathematical expression before evaluating it.",
      "Compare your strategy with an alternative method when possible.",
    ],

    investigationQuestions: [
      "Which problems require only the Fundamental Counting Principle?",
      "When does factorial notation provide the simplest solution?",
      "What distinguishes a permutation from a combination?",
      "How does repetition change the counting structure?",
      "When does a restriction suggest complement counting?",
      "Can different valid strategies produce the same result?",
      "How do counting methods support probability calculations?",
    ],

    expectedDiscovery:
      "The strongest counting strategy begins with the structure of the outcome. Formulas become useful only after the mathematical model has been defined.",
  },

  realWorldApplications: [
    {
      field: "Statistics",
      application:
        "Counting techniques support probability models, sampling, randomization, and statistical inference.",
    },
    {
      field: "Cybersecurity",
      application:
        "Password spaces depend on sequence length, available symbols, repetition, and restrictions.",
    },
    {
      field: "Operations Research",
      application:
        "Scheduling, routing, and assignment problems require structured counting and constraint analysis.",
    },
    {
      field: "Finance",
      application:
        "Portfolio construction may involve selecting subsets of assets under multiple restrictions.",
    },
    {
      field: "Biology",
      application:
        "Genetic and experimental designs often involve combinations of traits, treatments, or sequences.",
    },
    {
      field: "Artificial Intelligence",
      application:
        "AI systems operate in search spaces containing possible actions, sequences, configurations, and constrained decisions.",
    },
  ],

  aiConnection: {
    title: "Counting, Search Spaces, and Artificial Intelligence",

    explanation:
      "Counting techniques help describe the size and structure of an AI search space. Before an intelligent system can efficiently search for a solution, developers often need to understand how many possible states, sequences, or combinations exist.",

    example:
      "An AI agent that can choose among 6 actions at each of 10 stages has 6^10 possible unrestricted action sequences. That is more than 60 million possibilities. Constraints, heuristics, and optimization methods reduce the search burden.",

    caution:
      "A large count describes the number of possibilities but does not identify which possibilities are likely, useful, safe, or optimal. Counting is one part of the larger reasoning process.",

    reflectionQuestion:
      "How can understanding the structure of a search space help engineers design more efficient AI algorithms?",
  },

  pythonLab: {
    title: "Python Lab: Module 2 Counting Toolkit",

    objective:
      "Use Python to verify factorials, permutations, combinations, repeated-choice counts, restrictions, and probability calculations.",

    code: `import math

# Factorial
print("6! =", math.factorial(6))

# Permutation
print("10P3 =", math.perm(10, 3))

# Combination
print("10C3 =", math.comb(10, 3))

# Repeated choices
codes = 4 ** 5
print("4-symbol, 5-position codes =", codes)

# Restricted committee
all_committees = math.comb(10, 4)
invalid_committees = math.comb(8, 2)
valid_committees = (
    all_committees - invalid_committees
)

print(
    "Valid committees:",
    valid_committees
)

# Probability using combinations
total_groups = math.comb(12, 4)
favorable_groups = math.comb(10, 2)

probability = (
    favorable_groups / total_groups
)

print(
    "Probability Maya and Noah are selected:",
    probability
)

# Multi-stage problem
complete_outcomes = (
    math.comb(9, 4)
    * 4
    * 3
)

print(
    "Committee + chair + topic outcomes:",
    complete_outcomes
)`,
    
    questions: [
      "Which line calculates a factorial?",
      "Which calculation represents an ordered selection?",
      "Which calculation represents an unordered selection?",
      "Why is exponentiation used for repeated choices?",
      "Why are invalid committees subtracted?",
      "Why does the multi-stage problem multiply 9C4 by 4 and then by 3?",
      "How could you extend this toolkit to solve a new counting problem?",
    ],

    extension:
      "Create a menu-driven Python program that allows a learner to calculate factorials, permutations, combinations, repeated-choice counts, and simple counting-based probabilities.",
  },

  guidedPractice: [
    {
      id: "guided-08-01",

      question:
        "Evaluate 7!.",

      answer:
        "7! = 5,040",
    },

    {
      id: "guided-08-02",

      question:
        "Calculate 8P3.",

      answer:
        "8P3 = 8 × 7 × 6 = 336",
    },

    {
      id: "guided-08-03",

      question:
        "Calculate 8C3.",

      answer:
        "8C3 = 56",
    },

    {
      id: "guided-08-04",

      question:
        "A four-character code uses 5 symbols with repetition allowed. How many codes are possible?",

      answer:
        "5^4 = 625",
    },

    {
      id: "guided-08-05",

      question:
        "A committee of 3 is selected from 8 people. Two particular people cannot both serve. How many valid committees are possible?",

      answer:
        "8C3 - 6C1 = 56 - 6 = 50",
    },

    {
      id: "guided-08-06",

      question:
        "Why should you define one outcome before selecting a counting method?",

      answer:
        "The definition determines whether order matters, whether repetition is allowed, and which arrangements should be considered distinct.",
    },
  ],

  independentPractice: [
    {
      id: "practice-08-01",

      difficulty: "Foundation",

      question:
        "Five different objects are arranged in a row. How many arrangements are possible?",

      answer:
        "5! = 120",
    },

    {
      id: "practice-08-02",

      difficulty: "Foundation",

      question:
        "Seven students compete for first and second place. How many outcomes are possible?",

      answer:
        "7P2 = 42",
    },

    {
      id: "practice-08-03",

      difficulty: "Developing",

      question:
        "A committee of 4 is chosen from 11 students. How many committees are possible?",

      answer:
        "11C4 = 330",
    },

    {
      id: "practice-08-04",

      difficulty: "Developing",

      question:
        "A six-character code uses three possible symbols and allows repetition. How many codes are possible?",

      answer:
        "3^6 = 729",
    },

    {
      id: "practice-08-05",

      difficulty: "Challenge",

      question:
        "A committee of 5 is chosen from 12 students. One particular student must be included. How many committees are possible?",

      sampleAnswer:
        "Fix the required student, then choose the remaining 4 students from the other 11. Therefore 11C4 = 330.",
    },

    {
      id: "practice-08-06",

      difficulty: "Challenge",

      question:
        "A committee of 4 is chosen from 10 students. Maya and Noah cannot both serve. How many valid committees are possible?",

      sampleAnswer:
        "There are 10C4 = 210 total committees. Committees containing both Maya and Noah total 8C2 = 28. Therefore 210 - 28 = 182 valid committees.",
    },

    {
      id: "practice-08-07",

      difficulty: "AP Reasoning",

      question:
        "Five cards are selected from a standard 52-card deck. Write an expression for the probability of selecting exactly two kings.",

      sampleAnswer:
        "Choose 2 of the 4 kings and 3 of the 48 non-kings. Divide by all five-card hands: P(exactly two kings) = [4C2 × 48C3] / 52C5.",
    },

    {
      id: "practice-08-08",

      difficulty: "AP Reasoning",

      question:
        "A group of 4 students is selected from 10 students. One selected student becomes leader and one of 5 projects is assigned to the group. How many complete outcomes are possible?",

      sampleAnswer:
        "Choose the group using 10C4, choose one of the 4 members as leader, then choose one of 5 projects. Total = 10C4 × 4 × 5 = 4,200.",
    },
  ],

  commonMistakes: [
    {
      mistake:
        "Choosing a formula before defining the outcome.",

      correction:
        "First determine what counts as one distinct outcome and what rules generate it.",
    },

    {
      mistake:
        "Using permutations whenever a problem involves selecting people or objects.",

      correction:
        "Use permutations only when changing order or position creates a different outcome.",
    },

    {
      mistake:
        "Using combinations when positions or rankings are distinct.",

      correction:
        "If selected objects occupy different roles or positions, order matters.",
    },

    {
      mistake:
        "Decreasing choices when repetition is allowed.",

      correction:
        "When a choice may be reused, the number of options can remain constant from stage to stage.",
    },

    {
      mistake:
        "Ignoring restrictions.",

      correction:
        "Restrictions are part of the definition of the valid sample space and must be incorporated into the count.",
    },

    {
      mistake:
        "Using favorable-over-total probability when outcomes are not equally likely.",

      correction:
        "The simple counting probability formula requires an equally likely outcome model.",
    },

    {
      mistake:
        "Providing only a numerical answer.",

      correction:
        "Strong AP Statistics reasoning explains why the counting strategy matches the context.",
    },
  ],

  discussionQuestions: [
    "What is the first question you should ask in a counting problem?",
    "How are factorials connected to the Fundamental Counting Principle?",
    "What is the conceptual difference between permutations and combinations?",
    "How does allowing repetition change the structure of a problem?",
    "When is complement counting especially powerful?",
    "Why must probability numerator and denominator counts use consistent outcomes?",
    "How do counting techniques relate to computational search problems?",
    "Which Module 2 technique do you consider most useful and why?",
  ],

  formativeAssessment: {
    totalPoints: 24,

    passingScore: 19,

    questions: [
      {
        id: "check-08-01",

        type: "factorial",

        points: 3,

        prompt:
          "Evaluate 6!.",

        answer:
          "6! = 720",
      },

      {
        id: "check-08-02",

        type: "permutation",

        points: 3,

        prompt:
          "Eight runners compete for first, second, and third place. How many medal outcomes are possible?",

        answer:
          "8P3 = 336",
      },

      {
        id: "check-08-03",

        type: "combination",

        points: 3,

        prompt:
          "Eight students are available for a three-person committee. How many committees are possible?",

        answer:
          "8C3 = 56",
      },

      {
        id: "check-08-04",

        type: "repetition",

        points: 3,

        prompt:
          "A four-character code uses six possible symbols with repetition allowed. How many codes are possible?",

        answer:
          "6^4 = 1,296",
      },

      {
        id: "check-08-05",

        type: "restriction",

        points: 3,

        prompt:
          "A committee of 3 is chosen from 9 students. Two particular students cannot both serve. How many valid committees are possible?",

        answer:
          "9C3 - 7C1 = 84 - 7 = 77",
      },

      {
        id: "check-08-06",

        type: "probability",

        points: 3,

        prompt:
          "Four students are selected randomly from 10 students. What is the probability that one particular student is selected?",

        sampleAnswer:
          "Total groups = 10C4 = 210. Favorable groups include the specified student, so choose 3 from the remaining 9: 9C3 = 84. Probability = 84/210 = 2/5.",
      },

      {
        id: "check-08-07",

        type: "strategy",

        points: 3,

        prompt:
          "Explain the difference between a permutation problem and a combination problem.",

        sampleAnswer:
          "A permutation counts selections where order or position matters. A combination counts selections where only group membership matters.",
      },

      {
        id: "check-08-08",

        type: "synthesis",

        points: 3,

        prompt:
          "A committee of 3 is chosen from 8 students, one selected student becomes chairperson, and one of 4 topics is assigned. Write and evaluate an expression for the total number of complete outcomes.",

        sampleAnswer:
          "Choose the committee: 8C3 = 56. Choose the chairperson: 3 choices. Choose the topic: 4 choices. Total = 56 × 3 × 4 = 672.",
      },
    ],
  },

  researchExtension: {
    title: "Counting Systems in the Real World",

    researchQuestion:
      "How do real systems use multiple counting principles to describe large spaces of possible outcomes?",

    applicationOptions: [
      "Password security",
      "Sports tournament structures",
      "Random sampling",
      "Genetic combinations",
      "Portfolio selection",
      "Scheduling and routing",
      "Artificial intelligence search spaces",
    ],

    task:
      "Choose a real system that requires at least three Module 2 counting ideas. Define the outcome structure, identify restrictions, calculate relevant counts, and explain how the size of the outcome space affects decision-making or computational difficulty.",

    requiredEvidence: [
      "Description of the real system",
      "Definition of one outcome",
      "At least three counting techniques",
      "At least one restriction or condition",
      "Correct mathematical expressions",
      "Calculated results",
      "Interpretation in context",
      "Connection to probability or decision-making",
      "One credible source",
    ],
  },

  portfolioArtifact: {
    title: "Module 2 Counting Techniques Mastery Project",

    description:
      "Create a professional visual or digital artifact demonstrating how the major counting techniques connect and how they support probability reasoning.",

    requiredSections: [
      "Fundamental Counting Principle",
      "Factorials",
      "Permutations",
      "Combinations",
      "Repeated choices",
      "Restrictions",
      "Complement counting",
      "Counting sample spaces",
      "Probability connection",
      "One cumulative worked problem",
      "One Python verification",
      "Reflection",
    ],

    requiredEvidence: [
      "Correct definitions",
      "Correct formulas",
      "At least five worked calculations",
      "A permutation-versus-combination comparison",
      "One restricted counting problem",
      "One probability calculation",
      "One computational verification",
      "One visual decision framework",
      "One contextual interpretation",
    ],
  },

  growthIndicators: [
    "Conceptual Understanding",
    "Counting Strategy",
    "Probability Modeling",
    "Mathematical Communication",
    "AP Statistics Reasoning",
    "Computational Thinking",
    "Problem Solving",
  ],

  reflection: [
    "How has your approach to counting problems changed during Module 2?",
    "What question helps you distinguish permutations from combinations?",
    "Why is the Fundamental Counting Principle the foundation of many counting techniques?",
    "When is complement counting more efficient than direct counting?",
    "How do counting techniques help calculate probability?",
    "Which Module 2 idea was most challenging for you?",
    "How could these techniques support future work in statistics, data science, computer science, or AI?",
  ],

  summary: [
    "The Fundamental Counting Principle connects choices across multiple stages.",
    "Factorials count complete arrangements of distinct objects.",
    "Permutations count ordered selections.",
    "Combinations count unordered selections.",
    "Repeated choices may keep the number of available options constant.",
    "Restrictions change the number of legal outcomes.",
    "Complement counting can simplify difficult restrictions.",
    "Counting techniques allow large sample spaces to be analyzed without listing every outcome.",
    "For equally likely outcomes, probability can be calculated using favorable outcomes divided by total outcomes.",
    "Complex problems may require several counting techniques working together.",
    "Strong counting solutions begin with the structure of the problem rather than a memorized formula.",
    "Module 2 provides the counting foundation needed for more advanced probability reasoning.",
  ],

  previousLesson: {
    id: "probability-m02-l07",
    slug: "ap-style-counting-investigation",
    title: "AP-Style Counting Investigation",
  },

  nextLesson: null,

  lumineryGuidance: {
    message:
      "You now have a toolkit, not a collection of disconnected formulas. Start every new problem by understanding the structure of the outcome.",

    prompt:
      "For each counting problem, explain the outcome, order, repetition, restrictions, and strategy before performing any calculation.",

    coachingQuestions: [
      "What exactly counts as one outcome?",
      "Is this a single-stage or multi-stage process?",
      "Does order matter?",
      "Is repetition allowed?",
      "Are all objects being used?",
      "Are there required or forbidden conditions?",
      "Would complement counting simplify the problem?",
      "Should you use factorials, permutations, combinations, or direct multiplication?",
      "How does the count connect to the probability sample space?",
      "Can you justify your strategy clearly in words?",
    ],
  },
};

export default lesson08;