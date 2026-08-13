const lesson07 = {
  id: "probability-m02-l07",
  courseId: "probability-foundations",
  moduleId: "module-02",

  moduleNumber: 2,
  lessonNumber: 7,

  slug: "ap-style-counting-investigation",

  title: "AP-Style Counting Investigation",

  shortTitle: "Counting Investigation",

  subtitle:
    "Integrate counting techniques to solve multi-step probability problems using AP Statistics–style reasoning.",

  status: "Available",

  duration: "70–90 minutes",

  level: "AP Statistics Foundation",

  essentialQuestion:
    "How can we decide which counting strategy to use in a complex probability problem and justify the choice clearly?",

  bigIdea:
    "Advanced counting problems are rarely solved by memorizing one formula. Strong probability reasoning begins by defining the outcome structure, identifying whether order matters, determining whether repetition is allowed, recognizing restrictions, and then choosing the most efficient counting method.",

  whyThisLessonExists: {
    title: "Why This Lesson Exists",

    introduction:
      "Real AP Statistics probability questions often combine several counting ideas in one problem. A student may need to count a large sample space, identify favorable outcomes, decide whether order matters, account for restrictions, and explain why the selected method is valid.",

    centralProblem:
      "Can you analyze an unfamiliar probability situation, select the correct counting strategy, and communicate the reasoning clearly enough that another person can verify it?",

    purpose:
      "This investigation develops flexible problem-solving rather than formula memorization. Students integrate the Fundamental Counting Principle, factorials, permutations, combinations, repetition, restrictions, complement counting, and probability into complete AP-style solutions.",
  },

  problemFirst: {
    title: "The Scholarship Selection Problem",

    scenario:
      "A school has 12 qualified students. Four students will be selected for a scholarship team. One of the four will serve as team leader. Two particular students, Maya and Daniel, cannot both be selected because they are already assigned to another program.",

    questions: [
      "What decisions are being made in this problem?",
      "Which part of the selection is unordered?",
      "Which part is ordered?",
      "How does the restriction involving Maya and Daniel affect the count?",
      "Would it be easier to count valid teams directly or subtract invalid teams from all possibilities?",
      "How many total valid scholarship teams are possible?",
      "How would you explain your counting strategy in a written AP-style response?",
    ],

    expectedInsight:
      "The problem contains both combination and ordering ideas. First select a valid group of four students while accounting for the restriction, then choose one of those four students as leader. A strong solution must explain both stages and justify why each counting method applies.",
  },

  learningObjectives: [
    "Analyze a multi-step counting problem before selecting a formula.",
    "Identify whether order matters in each stage of a problem.",
    "Determine whether repetition is allowed.",
    "Recognize and model restrictions.",
    "Choose between direct counting and complement counting.",
    "Combine permutations and combinations within the same problem.",
    "Construct large probability sample spaces efficiently.",
    "Calculate probabilities from favorable and total outcome counts.",
    "Write clear AP Statistics–style justifications for counting methods.",
    "Evaluate whether a counting argument is logically consistent.",
  ],

  prerequisiteKnowledge: [
    "Fundamental Counting Principle",
    "Factorials",
    "Permutations",
    "Combinations",
    "Repeated choices",
    "Restrictions",
    "Complement counting",
    "Sample spaces",
    "Theoretical probability",
  ],

  vocabulary: [
    {
      term: "Counting Strategy",
      definition:
        "A structured plan for determining the number of outcomes in a problem.",
    },
    {
      term: "Case",
      definition:
        "A separate situation that is counted independently as part of a larger problem.",
    },
    {
      term: "Direct Counting",
      definition:
        "Counting the desired outcomes explicitly from the conditions of the problem.",
    },
    {
      term: "Complement Counting",
      definition:
        "Counting all possible outcomes and subtracting outcomes that violate a condition.",
    },
    {
      term: "Constraint",
      definition:
        "A rule that limits which outcomes are allowed.",
    },
    {
      term: "Justification",
      definition:
        "A mathematical explanation showing why a selected method correctly models the problem.",
    },
    {
      term: "Outcome Structure",
      definition:
        "The arrangement of choices, positions, selections, repetitions, and restrictions that define one outcome.",
    },
  ],

  formulas: [
    {
      id: "investigation-fcp",

      name: "Fundamental Counting Principle",

      formula:
        "total outcomes = c1 × c2 × ... × ck",

      meaning:
        "Multiply the legal choices available at each stage of a multi-stage process.",
    },

    {
      id: "investigation-permutation",

      name: "Permutation",

      formula:
        "nPr = n! / (n - r)!",

      meaning:
        "Use when selecting and arranging r objects from n distinct objects and order matters.",
    },

    {
      id: "investigation-combination",

      name: "Combination",

      formula:
        "nCr = n! / [r!(n - r)!]",

      meaning:
        "Use when selecting r objects from n distinct objects and order does not matter.",
    },

    {
      id: "investigation-complement",

      name: "Complement Counting",

      formula:
        "valid outcomes = total outcomes - invalid outcomes",

      meaning:
        "Useful when the forbidden cases are easier to count than the valid cases directly.",
    },

    {
      id: "investigation-probability",

      name: "Probability from Equally Likely Outcomes",

      formula:
        "P(A) = |A| / |S|",

      meaning:
        "Compare favorable outcomes with the total number of equally likely outcomes.",
    },
  ],

  workedExamples: [
    {
      id: "example-07-01",

      title: "Committee with a Required Member",

      problem:
        "A committee of 4 is chosen from 10 students. Maya must be included. How many committees are possible?",

      solutionSteps: [
        "Maya is already fixed as one committee member.",
        "Three additional students must be selected.",
        "There are 9 students remaining.",
        "Order does not matter because the committee has no ranked positions.",
        "Use 9C3.",
      ],

      answer:
        "9C3 = 84 committees",

      interpretation:
        "A required member reduces the selection problem to choosing the remaining positions.",
    },

    {
      id: "example-07-02",

      title: "Committee with Two Students Who Cannot Both Serve",

      problem:
        "A committee of 4 is chosen from 10 students. Maya and Daniel cannot both serve. How many committees are possible?",

      solutionSteps: [
        "First count all four-person committees: 10C4 = 210.",
        "Now count committees containing both Maya and Daniel.",
        "If both are included, choose the remaining 2 members from the other 8 students.",
        "Invalid committees: 8C2 = 28.",
        "Subtract invalid committees from the total.",
      ],

      answer:
        "210 - 28 = 182 valid committees",

      interpretation:
        "Complement counting is efficient because the forbidden case is easy to describe and count.",
    },

    {
      id: "example-07-03",

      title: "Committee with a Leader",

      problem:
        "A group of 4 students is selected from 10 students, and one of the selected students is designated as leader. How many outcomes are possible?",

      solutionSteps: [
        "First choose the group of 4 students: 10C4.",
        "For each selected group, choose 1 of the 4 members as leader.",
        "Apply the Fundamental Counting Principle.",
        "10C4 × 4 = 210 × 4.",
      ],

      answer:
        "840 outcomes",

      interpretation:
        "The committee selection is unordered, but assigning the leader creates an additional ordered role.",
    },

    {
      id: "example-07-04",

      title: "Password with Required Conditions",

      problem:
        "A 5-character password uses uppercase letters A–Z and digits 0–9. Repetition is allowed. The password must begin with a letter and contain at least one digit. How many passwords are possible?",

      solutionSteps: [
        "The first character must be a letter: 26 choices.",
        "Each of the remaining four positions may contain any of 36 symbols.",
        "Total passwords beginning with a letter: 26 × 36^4.",
        "Now subtract passwords containing no digits.",
        "If no digit appears, all five positions must be letters.",
        "Passwords with letters only: 26^5.",
        "Subtract the invalid cases.",
      ],

      answer:
        "26 × 36^4 - 26^5 valid passwords",

      interpretation:
        "The problem combines positional restriction, repetition, and complement counting.",
    },

    {
      id: "example-07-05",

      title: "AP-Style Probability with Cards",

      problem:
        "Five cards are selected from a standard 52-card deck without replacement. What is the probability that exactly two of the cards are hearts?",

      solutionSteps: [
        "The total number of five-card hands is 52C5.",
        "To obtain exactly two hearts, choose 2 hearts from the 13 hearts.",
        "Choose the remaining 3 cards from the 39 non-hearts.",
        "Multiply the favorable counts: 13C2 × 39C3.",
        "Divide by the total number of five-card hands.",
      ],

      answer:
        "P(exactly two hearts) = [13C2 × 39C3] / 52C5",

      interpretation:
        "The favorable event is constructed from two independent selection requirements within the same hand.",
    },
  ],

  interactiveExploration: {
    title: "Choose the Strategy Before Calculating",

    instructions: [
      "Read each counting scenario without performing calculations immediately.",
      "Identify whether order matters.",
      "Identify whether repetition is allowed.",
      "Identify any required or forbidden conditions.",
      "Decide whether direct counting or complement counting is more efficient.",
      "Write the counting expression before evaluating it.",
      "Explain why the expression matches the outcome structure.",
    ],

    investigationQuestions: [
      "What clues indicate a permutation?",
      "What clues indicate a combination?",
      "When does the Fundamental Counting Principle connect multiple methods?",
      "When is complement counting more efficient?",
      "Can one problem require more than one counting technique?",
      "Why is writing an expression before calculating useful?",
    ],

    expectedDiscovery:
      "Complex counting problems become manageable when they are decomposed into stages. The correct strategy comes from the structure of the problem, not from keywords alone.",
  },

  realWorldApplications: [
    {
      field: "Statistics",
      application:
        "Complex sampling designs may require combinations, restrictions, and probability calculations.",
    },
    {
      field: "Cybersecurity",
      application:
        "Password policies combine character sets, repetition rules, positional restrictions, and required symbols.",
    },
    {
      field: "Operations Research",
      application:
        "Scheduling and assignment problems often combine ordering with constraints.",
    },
    {
      field: "Biology",
      application:
        "Researchers may count combinations of genes, traits, or experimental treatments under restrictions.",
    },
    {
      field: "Finance",
      application:
        "Portfolio construction can involve selecting assets under diversification and risk constraints.",
    },
    {
      field: "Artificial Intelligence",
      application:
        "AI search systems combine large choice spaces with constraints, ranking, and optimization.",
    },
  ],

  aiConnection: {
    title: "AI Reasoning Under Constraints",

    explanation:
      "Many AI planning problems resemble advanced counting investigations. The system must consider possible actions while respecting restrictions, goals, resource limits, and dependencies.",

    example:
      "An AI scheduling system may need to assign 8 tasks to available time slots while ensuring some tasks occur before others and some cannot occur simultaneously. The raw number of possible schedules may be huge, but constraints eliminate many invalid possibilities.",

    caution:
      "Counting the number of possible plans does not identify the best plan. Optimization requires evaluating quality, cost, risk, or performance in addition to feasibility.",

    reflectionQuestion:
      "How are mathematical counting strategies similar to the way an AI system reduces a large search problem?",
  },

  pythonLab: {
    title: "Python Lab: Comparing Counting Strategies",

    objective:
      "Use Python to evaluate combinations, restrictions, and probability expressions from multi-step counting problems.",

    code: `import math

# Example 1:
# Committee of 4 from 10 students
# Maya and Daniel cannot both serve

all_committees = math.comb(10, 4)

invalid_committees = math.comb(8, 2)

valid_committees = (
    all_committees
    - invalid_committees
)

print(
    "Valid committees:",
    valid_committees
)


# Example 2:
# Exactly 2 hearts in a 5-card hand

favorable = (
    math.comb(13, 2)
    * math.comb(39, 3)
)

total = math.comb(52, 5)

probability = favorable / total

print(
    "Probability of exactly 2 hearts:",
    probability
)


# Example 3:
# Committee of 4 with one leader

committee_with_leader = (
    math.comb(10, 4) * 4
)

print(
    "Committee + leader outcomes:",
    committee_with_leader
)`,
    
    questions: [
      "Why is math.comb(8, 2) used for the invalid committees?",
      "Why are the heart and non-heart counts multiplied?",
      "Why is 52C5 the denominator in the card problem?",
      "Why is the committee count multiplied by 4 when a leader is selected?",
      "Which example uses complement counting?",
    ],

    extension:
      "Create a function that calculates the probability of exactly k hearts in an n-card hand from a standard deck.",
  },

  guidedPractice: [
    {
      id: "guided-07-01",

      question:
        "A committee of 3 is chosen from 8 students. Maya must be included. How many committees are possible?",

      answer:
        "Choose the remaining 2 students from the other 7: 7C2 = 21.",
    },

    {
      id: "guided-07-02",

      question:
        "A committee of 3 is chosen from 8 students. Maya and Noah cannot both serve. How many valid committees are possible?",

      answer:
        "Total = 8C3 = 56. Invalid committees containing both Maya and Noah = 6C1 = 6. Valid = 56 - 6 = 50.",
    },

    {
      id: "guided-07-03",

      question:
        "A group of 3 is selected from 7 students, and one member becomes chairperson. How many outcomes are possible?",

      answer:
        "7C3 × 3 = 35 × 3 = 105.",
    },

    {
      id: "guided-07-04",

      question:
        "Why should you define the outcome before choosing a counting formula?",

      answer:
        "The definition determines whether order matters, whether repetition is possible, and whether different arrangements represent distinct outcomes.",
    },

    {
      id: "guided-07-05",

      question:
        "When is complement counting useful?",

      answer:
        "It is useful when the invalid or opposite cases are easier to count than the desired cases directly.",
    },
  ],

  independentPractice: [
    {
      id: "practice-07-01",

      difficulty: "Foundation",

      question:
        "A team of 4 is selected from 9 students. One particular student must be included. How many teams are possible?",

      answer:
        "8C3 = 56",
    },

    {
      id: "practice-07-02",

      difficulty: "Developing",

      question:
        "A committee of 4 is chosen from 11 people. Two particular people cannot both be selected. How many valid committees are possible?",

      answer:
        "11C4 - 9C2 = 330 - 36 = 294",
    },

    {
      id: "practice-07-03",

      difficulty: "Developing",

      question:
        "Five students are selected from 12 students, and one selected student becomes president. How many outcomes are possible?",

      answer:
        "12C5 × 5 = 792 × 5 = 3,960",
    },

    {
      id: "practice-07-04",

      difficulty: "Challenge",

      question:
        "A four-character code uses digits 0 through 9 with repetition allowed. The code must contain at least one 5. How many codes are possible?",

      sampleAnswer:
        "Total codes = 10^4 = 10,000. Codes with no 5 = 9^4 = 6,561. Therefore valid codes = 10,000 - 6,561 = 3,439.",
    },

    {
      id: "practice-07-05",

      difficulty: "Challenge",

      question:
        "A five-card hand is selected from a standard deck. How many hands contain exactly three aces?",

      sampleAnswer:
        "Choose 3 of the 4 aces and 2 of the 48 non-aces: 4C3 × 48C2.",
    },

    {
      id: "practice-07-06",

      difficulty: "AP Reasoning",

      question:
        "A random committee of 5 is selected from 14 students. What is the probability that two particular students are both selected?",

      sampleAnswer:
        "Total committees = 14C5. Favorable committees include the two specified students, so choose the remaining 3 from the other 12: 12C3. Therefore P = 12C3 / 14C5.",
    },
  ],

  commonMistakes: [
    {
      mistake:
        "Choosing a formula based only on a keyword.",

      correction:
        "Analyze the outcome structure first. Words like 'choose' or 'select' do not automatically imply combinations.",
    },

    {
      mistake:
        "Using one counting method for a problem with multiple stages.",

      correction:
        "Different stages may require different methods connected by the Fundamental Counting Principle.",
    },

    {
      mistake:
        "Ignoring a restriction until after calculating.",

      correction:
        "Restrictions are part of the sample-space definition and must be incorporated into the counting strategy.",
    },

    {
      mistake:
        "Using complement counting when the complement is more complicated than the desired event.",

      correction:
        "Choose the direction that produces the simpler count.",
    },

    {
      mistake:
        "Providing a numerical answer without justification.",

      correction:
        "AP-style reasoning should explain why the selected counting method matches the problem.",
    },
  ],

  discussionQuestions: [
    "Why is problem structure more important than memorizing formulas?",
    "Can one counting problem require both combinations and permutations?",
    "How do restrictions change a sample space?",
    "Why is complement counting sometimes more elegant than direct counting?",
    "What makes a counting explanation mathematically convincing?",
    "How are counting strategies related to computational problem solving?",
  ],

  formativeAssessment: {
    totalPoints: 20,

    passingScore: 16,

    questions: [
      {
        id: "check-07-01",

        type: "concept",

        points: 4,

        prompt:
          "Describe the decision process you should use before choosing a counting formula.",

        sampleAnswer:
          "Define the outcome, decide whether order matters, determine whether repetition is allowed, identify restrictions, and then select the counting strategy that matches those conditions.",
      },

      {
        id: "check-07-02",

        type: "calculation",

        points: 4,

        prompt:
          "A committee of 4 is chosen from 9 people. One specific person must be included. How many committees are possible?",

        answer:
          "8C3 = 56",
      },

      {
        id: "check-07-03",

        type: "restriction",

        points: 4,

        prompt:
          "A committee of 3 is selected from 8 students. Two particular students cannot both serve. Determine the number of valid committees.",

        answer:
          "8C3 - 6C1 = 56 - 6 = 50",
      },

      {
        id: "check-07-04",

        type: "reasoning",

        points: 4,

        prompt:
          "Explain why a problem involving a committee plus a president may require both combinations and the Fundamental Counting Principle.",

        sampleAnswer:
          "The committee itself is an unordered selection, so combinations count the groups. After the committee is chosen, one member is assigned a distinct role as president, creating another counting stage.",
      },

      {
        id: "check-07-05",

        type: "probability",

        points: 4,

        prompt:
          "Five cards are selected from a standard deck. Write an expression for the probability of selecting exactly one ace.",

        sampleAnswer:
          "P(exactly one ace) = [4C1 × 48C4] / 52C5.",
      },
    ],
  },

  researchExtension: {
    title: "Investigating a Complex Counting System",

    researchQuestion:
      "How do real systems combine multiple counting rules, constraints, and probability structures?",

    applicationOptions: [
      "Cybersecurity passwords",
      "Sports tournament design",
      "Random sampling",
      "Portfolio selection",
      "Scheduling systems",
      "Artificial intelligence planning",
    ],

    task:
      "Choose a real system involving at least two different counting ideas. Define the outcome structure, identify restrictions, calculate the number of possible outcomes, and explain why your counting strategy is valid.",

    requiredEvidence: [
      "Description of the real system",
      "Definition of one outcome",
      "At least two counting techniques",
      "Identification of restrictions",
      "Correct mathematical expressions",
      "Interpretation of the results",
      "Discussion of efficiency",
      "One credible source",
    ],
  },

  portfolioArtifact: {
    title: "Counting Strategy Decision Map",

    description:
      "Create a one-page decision guide that helps a learner determine which counting strategy to use in an unfamiliar problem.",

    requiredSections: [
      "Define the outcome",
      "Does order matter?",
      "Is repetition allowed?",
      "Are there restrictions?",
      "Permutation decision",
      "Combination decision",
      "Fundamental Counting Principle decision",
      "Complement counting decision",
      "One AP-style worked example",
      "Reflection",
    ],

    requiredEvidence: [
      "Correct decision logic",
      "At least four counting methods",
      "One visual flowchart or decision tree",
      "One complete worked example",
      "One written justification",
    ],
  },

  growthIndicators: [
    "Conceptual Understanding",
    "Strategic Problem Solving",
    "Counting Reasoning",
    "Probability Modeling",
    "AP Statistics Communication",
    "Computational Thinking",
  ],

  reflection: [
    "What questions should you ask before selecting a counting method?",
    "Which counting strategy do you find most difficult to recognize?",
    "Why can two different methods sometimes solve the same problem?",
    "How does explaining your method improve mathematical reasoning?",
    "How are counting constraints similar to constraints in computer science or AI?",
  ],

  summary: [
    "Complex counting problems should be analyzed before formulas are selected.",
    "Order, repetition, restrictions, and outcome definitions determine the appropriate method.",
    "The Fundamental Counting Principle connects multiple counting stages.",
    "Permutations apply when order matters.",
    "Combinations apply when order does not matter.",
    "Complement counting is useful when invalid cases are easier to count.",
    "A single problem may require several counting techniques.",
    "Probability requires consistent counting of favorable and total outcomes.",
    "AP-style responses should include clear mathematical justification.",
    "Strategic counting is a problem-solving skill, not simply a collection of formulas.",
  ],

  previousLesson: {
    id: "probability-m02-l06",
    slug: "counting-sample-spaces-for-probability",
    title: "Counting Sample Spaces for Probability",
  },

  nextLesson: null,

  lumineryGuidance: {
    message:
      "Do not ask, 'Which formula do I remember?' Ask, 'What exactly is one outcome, and what rules create it?'",

    prompt:
      "Before calculating, write a short strategy statement describing order, repetition, restrictions, and the counting method you intend to use.",

    coachingQuestions: [
      "What exactly counts as one outcome?",
      "Does order matter?",
      "Is repetition allowed?",
      "Are any outcomes required or forbidden?",
      "Can the problem be broken into stages?",
      "Would direct or complement counting be easier?",
      "Which counting method belongs to each stage?",
      "Can you justify your strategy before calculating?",
    ],
  },
};

export default lesson07;