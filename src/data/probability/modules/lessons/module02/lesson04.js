const lesson04 = {
  id: "probability-m02-l04",
  courseId: "probability-foundations",
  moduleId: "module-02",

  moduleNumber: 2,
  lessonNumber: 4,

  slug: "combinations",

  title: "Combinations",

  shortTitle: "Combinations",

  subtitle:
    "Count selections when order does not matter.",

  status: "Available",

  duration: "60–75 minutes",

  level: "AP Statistics Foundation",

  essentialQuestion:
    "How can we count selections efficiently when changing the order does not create a new outcome?",

  bigIdea:
    "A combination counts selections in which order does not matter. When r objects are selected from n distinct objects, arrangements containing the same selected objects are treated as one outcome.",

  whyThisLessonExists: {
    title: "Why This Lesson Exists",

    introduction:
      "Permutations count situations in which order matters. But many real-world selections do not depend on order. Choosing three students for a committee, selecting five cards from a deck, or choosing two pizza toppings creates the same group regardless of the order in which the choices are made.",

    centralProblem:
      "How can we count groups without counting different orders of the same group multiple times?",

    purpose:
      "Combinations remove the overcounting created by permutations when order does not matter. This idea is essential for constructing probability sample spaces involving committees, samples, card hands, selections, and many AP Statistics probability problems.",
  },

  problemFirst: {
    title: "Choosing a Student Committee",

    scenario:
      "A class has 8 students who volunteered for a school project. The teacher must choose 3 students to serve on a committee. There are no special positions on the committee.",

    questions: [
      "Does selecting Amina, Daniel, and Sofia differ from selecting Sofia, Amina, and Daniel?",
      "Does the order in which the students are chosen matter?",
      "How many ordered selections would 8P3 count?",
      "How many times would the same three-person committee appear among those ordered selections?",
      "How can factorials help remove the repeated orderings?",
      "What counting method should be used when the final group has no ranked positions?",
    ],

    expectedInsight:
      "The order does not matter because the committee contains the same three students regardless of selection order. The permutation count 8P3 counts each three-person committee 3! times. Dividing by 3! removes those repeated arrangements, giving 8C3 = 56 committees.",
  },

  learningObjectives: [
    "Explain what makes a counting situation a combination.",
    "Recognize when order does not matter.",
    "Distinguish combinations from permutations.",
    "Use the combination formula nCr = n! / [r!(n-r)!].",
    "Interpret n and r correctly in contextual problems.",
    "Explain why dividing by r! removes repeated arrangements.",
    "Use combinations to count probability sample spaces.",
    "Apply combinations in AP Statistics–style probability problems.",
    "Verify combination calculations using Python.",
    "Communicate counting reasoning clearly in context.",
  ],

  prerequisiteKnowledge: [
    "Fundamental Counting Principle",
    "Factorial notation",
    "Permutations",
    "Ordered arrangements",
    "Sample spaces",
    "Basic probability",
  ],

  vocabulary: [
    {
      term: "Combination",
      definition:
        "A selection of objects in which order does not matter.",
    },
    {
      term: "Order Does Not Matter",
      definition:
        "A condition in which changing the order of selected objects does not create a new outcome.",
    },
    {
      term: "n",
      definition:
        "The total number of distinct objects available for selection.",
    },
    {
      term: "r",
      definition:
        "The number of objects selected from the larger set.",
    },
    {
      term: "Unordered Selection",
      definition:
        "A selection in which only membership in the group matters, not position.",
    },
    {
      term: "Overcounting",
      definition:
        "Counting the same underlying outcome more than once because different orders are incorrectly treated as different outcomes.",
    },
    {
      term: "Committee",
      definition:
        "A common combination context in which selected members have no distinct ranked positions.",
    },
  ],

  formulas: [
    {
      id: "combination-formula",

      name: "Combination Formula",

      formula:
        "nCr = n! / [r!(n - r)!]",

      meaning:
        "The number of ways to choose r objects from n distinct objects when order does not matter.",
    },

    {
      id: "combination-from-permutation",

      name: "Combination from a Permutation",

      formula:
        "nCr = nPr / r!",

      meaning:
        "A permutation counts every ordering of the selected r objects. Dividing by r! removes those repeated orderings.",
    },

    {
      id: "combination-symmetry",

      name: "Combination Symmetry",

      formula:
        "nCr = nC(n - r)",

      meaning:
        "Choosing r objects to include is equivalent to choosing the remaining n - r objects to exclude.",
    },
  ],

  workedExamples: [
    {
      id: "example-04-01",

      title: "Choosing a Committee",

      problem:
        "Eight students are available. How many different three-person committees can be formed?",

      solutionSteps: [
        "There are 8 students, so n = 8.",
        "Three students are selected, so r = 3.",
        "There are no ranked positions, so order does not matter.",
        "Use 8C3 = 8! / [3!5!].",
        "Simplify to (8 × 7 × 6) / (3 × 2 × 1).",
        "Calculate 336 / 6 = 56.",
      ],

      answer:
        "8C3 = 56 committees",

      interpretation:
        "A committee containing the same three students is counted only once regardless of selection order.",
    },

    {
      id: "example-04-02",

      title: "Choosing Pizza Toppings",

      problem:
        "A restaurant offers 10 toppings. A customer chooses 2 different toppings. How many topping combinations are possible?",

      solutionSteps: [
        "There are 10 available toppings.",
        "Two toppings are selected.",
        "Pepperoni and mushrooms is the same selection as mushrooms and pepperoni.",
        "Therefore order does not matter.",
        "Use 10C2.",
        "Calculate 10! / [2!8!] = (10 × 9) / 2 = 45.",
      ],

      answer:
        "10C2 = 45 topping combinations",

      interpretation:
        "Changing the order in which toppings are named does not create a new pizza selection.",
    },

    {
      id: "example-04-03",

      title: "Selecting Books",

      problem:
        "A student chooses 4 books from a collection of 9 different books. How many selections are possible?",

      solutionSteps: [
        "There are 9 books available.",
        "Four books are selected.",
        "The final group of books has no ranked order.",
        "Use 9C4.",
        "Calculate 9! / [4!5!].",
        "Simplify to 126.",
      ],

      answer:
        "9C4 = 126 selections",

      interpretation:
        "The same four books represent one selection regardless of the order in which they are chosen.",
    },

    {
      id: "example-04-04",

      title: "Combination or Permutation?",

      problem:
        "Six students are available. Compare selecting two students for a committee with selecting a president and vice president.",

      solutionSteps: [
        "For the committee, the two students have equal roles.",
        "Therefore order does not matter: use 6C2.",
        "6C2 = 15.",
        "For president and vice president, the roles are different.",
        "Therefore order matters: use 6P2.",
        "6P2 = 30.",
      ],

      answer:
        "Committee: 15 selections. President and vice president: 30 assignments.",

      interpretation:
        "The same people can produce different counts depending on whether the positions are distinguishable.",
    },

    {
      id: "example-04-05",

      title: "Combination in Probability",

      problem:
        "Five students are selected randomly from a group of 12 students. What is the probability that two particular students, Maya and Noah, are both selected?",

      solutionSteps: [
        "The total number of five-student groups is 12C5.",
        "For favorable groups, Maya and Noah are already included.",
        "Choose the remaining 3 students from the other 10 students.",
        "The number of favorable groups is 10C3.",
        "Calculate 10C3 = 120.",
        "Calculate 12C5 = 792.",
        "Probability = 120 / 792.",
        "Simplify to 5/33.",
      ],

      answer:
        "P(Maya and Noah both selected) = 5/33",

      interpretation:
        "Because groups are being selected rather than ranked, combinations provide the appropriate sample-space counts.",
    },
  ],

  interactiveExploration: {
    title: "Same Group or Different Outcome?",

    instructions: [
      "Write the three-person selection A-B-C.",
      "Rearrange the same students as B-C-A.",
      "Ask whether the committee membership changed.",
      "Now assign the students to president, vice president, and secretary.",
      "Rearrange the positions.",
      "Compare how the meaning changes.",
      "Explain why combinations count fewer outcomes than permutations.",
    ],

    investigationQuestions: [
      "Is ABC the same committee as BAC?",
      "Would ABC and BAC represent the same officer assignment?",
      "Why does order matter in one situation but not the other?",
      "How many different orders can three selected objects have?",
      "Why does dividing a permutation count by 3! remove overcounting?",
    ],

    expectedDiscovery:
      "When no positions are assigned, every ordering of the same selected objects represents one group. Dividing the permutation count by r! collapses those repeated orderings into a single combination.",
  },

  realWorldApplications: [
    {
      field: "Statistics",
      application:
        "Combinations count possible samples selected from a population when the order of selection is irrelevant.",
    },
    {
      field: "Card Games",
      application:
        "Poker hands and other card selections are combinations because the order in which cards are received does not usually change the hand.",
    },
    {
      field: "Business",
      application:
        "Organizations use combinations when choosing committees, project teams, or groups of candidates.",
    },
    {
      field: "Medicine",
      application:
        "Researchers may analyze combinations of treatments, variables, or selected study participants.",
    },
    {
      field: "Data Science",
      application:
        "Feature selection may involve choosing subsets of variables from a larger collection.",
    },
    {
      field: "Artificial Intelligence",
      application:
        "Machine-learning systems may evaluate subsets of features, tools, examples, or candidate options when order is irrelevant.",
    },
  ],

  aiConnection: {
    title: "Combinations in AI and Feature Selection",

    explanation:
      "Machine-learning models may begin with many possible input features. Researchers sometimes study different subsets of those features to determine which group produces useful predictions.",

    example:
      "If a dataset contains 20 possible features and a researcher wants to investigate every possible group of 5 features, there are 20C5 = 15,504 different feature subsets.",

    caution:
      "Even combination counts can become extremely large. Real AI systems often use feature-selection algorithms, regularization, domain knowledge, or search strategies rather than evaluating every possible subset.",

    reflectionQuestion:
      "Why does feature selection use combinations rather than permutations when only the selected variables matter?",
  },

  pythonLab: {
    title: "Python Lab: Calculating Combinations",

    objective:
      "Use Python to calculate combinations and compare them with permutation counts.",

    code: `import math

n = 8
r = 3

combinations = math.comb(n, r)
permutations = math.perm(n, r)

print(f"{n}C{r} = {combinations}")
print(f"{n}P{r} = {permutations}")

print()
print(
    "Permutation count divided by r!:",
    permutations // math.factorial(r)
)


def combination(n, r):
    if n < 0 or r < 0 or r > n:
        raise ValueError(
            "Require 0 <= r <= n."
        )

    return (
        math.factorial(n)
        // (
            math.factorial(r)
            * math.factorial(n - r)
        )
    )


print()
print("10C4 =", combination(10, 4))

for r in range(0, 6):
    print(
        f"10C{r} =",
        combination(10, r)
    )`,

    questions: [
      "What does math.comb(n, r) calculate?",
      "How does 8C3 compare with 8P3?",
      "Why is the permutation count larger?",
      "What is 10C0?",
      "What relationship do you notice between 10C2 and 10C8?",
    ],

    extension:
      "Modify the program so the user enters n and r. Display both nPr and nCr, then explain why the two results may differ.",
  },

  guidedPractice: [
    {
      id: "guided-04-01",

      question:
        "Calculate 5C2.",

      answer:
        "5C2 = 10",
    },

    {
      id: "guided-04-02",

      question:
        "Calculate 7C3.",

      answer:
        "7C3 = 35",
    },

    {
      id: "guided-04-03",

      question:
        "Nine students are available for a three-person committee. How many committees are possible?",

      answer:
        "9C3 = 84 committees",
    },

    {
      id: "guided-04-04",

      question:
        "Why is choosing three committee members a combination rather than a permutation?",

      answer:
        "The selected students do not occupy different ranked positions, so changing their order does not create a new committee.",
    },

    {
      id: "guided-04-05",

      question:
        "A student chooses 2 electives from 6 available courses. How many selections are possible?",

      answer:
        "6C2 = 15 selections",
    },
  ],

  independentPractice: [
    {
      id: "practice-04-01",

      difficulty: "Foundation",

      question:
        "Evaluate 6C2.",

      answer:
        "6C2 = 15",
    },

    {
      id: "practice-04-02",

      difficulty: "Foundation",

      question:
        "Evaluate 8C3.",

      answer:
        "8C3 = 56",
    },

    {
      id: "practice-04-03",

      difficulty: "Developing",

      question:
        "Ten students are available for a four-person committee. How many committees can be formed?",

      answer:
        "10C4 = 210",
    },

    {
      id: "practice-04-04",

      difficulty: "Developing",

      question:
        "A customer chooses 3 different toppings from 8 available toppings. How many topping combinations are possible?",

      answer:
        "8C3 = 56",
    },

    {
      id: "practice-04-05",

      difficulty: "Challenge",

      question:
        "A teacher selects 5 students from a class of 14 to attend a conference. How many possible groups are there?",

      sampleAnswer:
        "Order does not matter, so use 14C5 = 2,002 groups.",
    },

    {
      id: "practice-04-06",

      difficulty: "AP Reasoning",

      question:
        "Four students are selected randomly from 10 students. What is the probability that a particular student, Maya, is selected?",

      sampleAnswer:
        "There are 10C4 = 210 total groups. If Maya must be included, choose the remaining 3 students from the other 9: 9C3 = 84. Therefore the probability is 84/210 = 2/5.",
    },
  ],

  commonMistakes: [
    {
      mistake:
        "Using combinations whenever objects are selected.",

      correction:
        "First determine whether changing the order creates a different outcome. If order matters, use permutations instead.",
    },

    {
      mistake:
        "Using nPr when selecting an unranked group.",

      correction:
        "A permutation counts different orders separately. An unranked group should be counted with nCr.",
    },

    {
      mistake:
        "Confusing n and r.",

      correction:
        "n is the total number available; r is the number selected.",
    },

    {
      mistake:
        "Forgetting the r! in the denominator.",

      correction:
        "Dividing by r! removes the repeated orderings of the same selected group.",
    },

    {
      mistake:
        "Assuming a committee has an order just because members were selected one at a time.",

      correction:
        "The counting method depends on the final outcome, not the physical order in which the choices happened.",
    },
  ],

  discussionQuestions: [
    "What is the simplest test for deciding between a permutation and a combination?",
    "Why does dividing by r! remove overcounting?",
    "Why is choosing a committee different from assigning officers?",
    "How are combinations useful in probability?",
    "Where do unordered selections appear in everyday life?",
    "Why can combination counts become computationally challenging?",
  ],

  formativeAssessment: {
    totalPoints: 15,

    passingScore: 12,

    questions: [
      {
        id: "check-04-01",

        type: "calculation",

        points: 3,

        prompt:
          "Calculate 7C2.",

        answer:
          "7C2 = 21",
      },

      {
        id: "check-04-02",

        type: "concept",

        points: 3,

        prompt:
          "Explain when a combination should be used.",

        sampleAnswer:
          "A combination should be used when selecting a group and changing the order of the selected objects does not create a different outcome.",
      },

      {
        id: "check-04-03",

        type: "application",

        points: 3,

        prompt:
          "Eight students are available for a four-person committee. How many committees can be formed?",

        answer:
          "8C4 = 70",
      },

      {
        id: "check-04-04",

        type: "reasoning",

        points: 3,

        prompt:
          "Explain why choosing Ana and Ben for a committee is the same as choosing Ben and Ana.",

        sampleAnswer:
          "Committee membership is unchanged. There are no different positions assigned to Ana and Ben, so the two selection orders represent the same outcome.",
      },

      {
        id: "check-04-05",

        type: "probability",

        points: 3,

        prompt:
          "Three students are randomly selected from 8 students. What is the probability that a particular student is selected?",

        sampleAnswer:
          "There are 8C3 = 56 total groups. If the particular student must be included, choose the remaining 2 from the other 7: 7C2 = 21. Therefore the probability is 21/56 = 3/8.",
      },
    ],
  },

  researchExtension: {
    title: "Combinations in Real Decisions",

    researchQuestion:
      "Where do unordered selections appear in statistics, science, technology, business, or everyday decision-making?",

    applicationOptions: [
      "Committee selection",
      "Survey samples",
      "Card hands",
      "Product bundles",
      "Feature selection",
      "Research teams",
    ],

    task:
      "Choose one real-world situation involving an unordered selection. Identify n and r, explain why order does not matter, calculate the number of possible combinations, and interpret the result.",

    requiredEvidence: [
      "Description of the context",
      "Identification of n",
      "Identification of r",
      "Explanation of why order does not matter",
      "Correct combination calculation",
      "Interpretation of the result",
      "One credible source",
    ],
  },

  portfolioArtifact: {
    title: "Permutation or Combination?",

    description:
      "Create a one-page visual comparison showing how order determines whether a problem requires permutations or combinations.",

    requiredSections: [
      "Definition of permutation",
      "Definition of combination",
      "Order-matters decision rule",
      "Permutation formula",
      "Combination formula",
      "One permutation example",
      "One combination example",
      "One probability application",
      "Reflection",
    ],

    requiredEvidence: [
      "Correct notation",
      "Correct calculations",
      "Clear comparison of order",
      "One visual decision guide",
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
    "How do you decide whether a problem requires a permutation or combination?",
    "Why does a combination count fewer outcomes than a corresponding permutation?",
    "What does dividing by r! accomplish?",
    "How can combinations help construct probability sample spaces?",
    "Where might you encounter unordered selections in real life?",
  ],

  summary: [
    "A combination is an unordered selection.",
    "Use combinations when changing the order does not create a new outcome.",
    "n represents the total number of available objects.",
    "r represents the number selected.",
    "The combination formula is nCr = n! / [r!(n-r)!].",
    "Combinations can also be understood as permutations divided by r!.",
    "Dividing by r! removes repeated orderings of the same group.",
    "Permutations are used when order matters; combinations are used when order does not matter.",
    "Combinations are important for constructing probability sample spaces.",
    "Combinations appear in sampling, committees, card games, data science, and artificial intelligence.",
  ],

  previousLesson: {
    id: "probability-m02-l03",
    slug: "permutations",
    title: "Permutations",
  },

  nextLesson: null,

  lumineryGuidance: {
    message:
      "The most important question is not which formula you remember. Ask whether changing the order changes the outcome.",

    prompt:
      "Before calculating, describe the final outcome in words and decide whether different orders of the same selected objects should count separately.",

    coachingQuestions: [
      "Does order matter?",
      "What is n?",
      "What is r?",
      "Are you creating positions or simply selecting a group?",
      "Would reversing the selection create a different result?",
      "Are permutations overcounting the same group?",
      "How can the combination count help define the probability sample space?",
    ],
  },
};

export default lesson04;