const lesson07 = {
  id: "probability-m01-l07",
  courseId: "probability-foundations",
  moduleId: "module-01",

  moduleNumber: 1,
  lessonNumber: 7,

  slug: "ap-probability-investigation",

  title: "AP-Style Probability Investigation",

  shortTitle: "Probability Investigation",

  subtitle:
    "Bring together probability models, simulation, long-run behavior, events, and statistical communication through an AP Statistics–style investigation.",

  status: "Available",

  duration: "60–80 minutes",

  level: "AP Statistics Foundation",

  essentialQuestion:
    "How can we design and communicate a complete probability investigation using mathematical reasoning, simulation, and evidence?",

  bigIdea:
    "Strong probability reasoning requires more than calculating a number. We must define the random process, identify events, justify the probability model, analyze evidence, interpret results in context, and communicate conclusions carefully.",

  whyThisLessonExists: {
    title: "Why This Lesson Exists",

    introduction:
      "AP Statistics problems often require students to combine several ideas instead of applying one formula. A complete probability investigation may involve defining a sample space, identifying an event, constructing a probability model, running a simulation, comparing experimental and theoretical results, and explaining what the results mean in context.",

    centralProblem:
      "Can you move from a real-world question to a complete statistical investigation instead of solving only an isolated calculation?",

    purpose:
      "This lesson gives students a structured AP-style investigation that integrates the major ideas developed throughout Module 1. The goal is to reason mathematically, justify choices, analyze evidence, and communicate a defensible conclusion.",
  },

  problemFirst: {
    title: "Is the Carnival Game Fair?",

    scenario:
      "A school carnival offers a game using a fair six-sided die. A player pays $2 to play. If the die shows 5 or 6, the player wins a prize. The game operator claims, 'You have a good chance of winning.' A group of students plays 30 times and records 13 wins.",

    questions: [
      "What is the theoretical probability of winning one play?",
      "What event represents a win?",
      "Is 13 wins in 30 trials surprising?",
      "How does the experimental relative frequency compare with the theoretical probability?",
      "Would 30 trials be enough to decide whether the die or game is unfair?",
      "How could simulation help investigate the claim?",
      "What does the phrase 'good chance' mean mathematically?",
      "What conclusion would be statistically responsible?",
    ],

    expectedInsight:
      "The theoretical probability of winning is 2/6 = 1/3. The observed relative frequency is 13/30, which differs from 1/3, but random variation is expected in a small number of trials. Simulation can help determine whether results like 13 or more wins are unusual under the fair-die model.",
  },

  learningObjectives: [
    "Formulate a probability investigation from a real-world scenario.",
    "Identify a random process, sample space, and event of interest.",
    "Construct and justify a theoretical probability model.",
    "Calculate theoretical probability correctly.",
    "Use relative frequency to summarize observed results.",
    "Design a valid simulation that represents the probability model.",
    "Compare simulated, experimental, and theoretical probabilities.",
    "Interpret random variation appropriately.",
    "Evaluate whether observed results are consistent with a probability model.",
    "Communicate a complete AP Statistics–style conclusion in context.",
  ],

  prerequisiteKnowledge: [
    "Random processes",
    "Outcomes and sample spaces",
    "Events and set notation",
    "Theoretical probability",
    "Relative frequency",
    "Long-run behavior",
    "Simulation",
    "Probability interpretation in context",
  ],

  vocabulary: [
    {
      term: "Statistical Investigation",
      definition:
        "A structured process of asking a question, collecting or generating data, analyzing evidence, and drawing a conclusion.",
    },
    {
      term: "Observed Result",
      definition:
        "The outcome or numerical result actually obtained from an experiment or data collection process.",
    },
    {
      term: "Expected Result",
      definition:
        "A result predicted by a probability model over repeated trials.",
    },
    {
      term: "Model Consistency",
      definition:
        "The degree to which observed data appear reasonably compatible with the assumed probability model.",
    },
    {
      term: "Random Variation",
      definition:
        "Natural differences that occur from one set of random trials to another.",
    },
    {
      term: "Evidence",
      definition:
        "Observed or simulated results used to evaluate a statistical claim.",
    },
    {
      term: "Statistical Conclusion",
      definition:
        "A conclusion based on probability reasoning, evidence, and appropriate acknowledgment of uncertainty.",
    },
    {
      term: "Simulation Distribution",
      definition:
        "The collection of results produced by repeating a simulation many times under the same probability model.",
    },
  ],

  formulas: [
    {
      id: "theoretical-probability",

      name: "Theoretical Probability",

      formula:
        "P(A) = favorable outcomes ÷ total equally likely outcomes",

      meaning:
        "For equally likely outcomes, theoretical probability is calculated from the structure of the probability model.",
    },

    {
      id: "observed-relative-frequency",

      name: "Observed Relative Frequency",

      formula:
        "relative frequency = observed successes ÷ total trials",

      meaning:
        "Observed relative frequency summarizes how often the event occurred in the actual experiment.",
    },

    {
      id: "expected-count",

      name: "Expected Count",

      formula:
        "expected number of successes = number of trials × probability of success",

      meaning:
        "This gives the long-run average number of successes predicted by the probability model.",
    },

    {
      id: "difference-from-model",

      name: "Difference from Model",

      formula:
        "difference = observed relative frequency - theoretical probability",

      meaning:
        "The difference helps compare experimental results with the theoretical model.",
    },
  ],

  probabilityScale: [],

  workedExamples: [
    {
      id: "example-07-01",

      title: "Step 1: Define the Probability Model",

      problem:
        "A player wins when a fair die shows 5 or 6. Determine the probability model for winning.",

      solutionSteps: [
        "Write the sample space: S = {1, 2, 3, 4, 5, 6}.",
        "Define the winning event: W = {5, 6}.",
        "There are 2 favorable outcomes.",
        "There are 6 equally likely outcomes.",
        "Calculate P(W) = 2/6.",
      ],

      answer:
        "P(W) = 2/6 = 1/3 ≈ 0.333.",

      interpretation:
        "Under a fair-die model, the player wins about one-third of plays in the long run.",
    },

    {
      id: "example-07-02",

      title: "Step 2: Analyze the Observed Results",

      problem:
        "Students win 13 times in 30 plays. Calculate and interpret the observed relative frequency.",

      solutionSteps: [
        "Observed wins = 13.",
        "Total trials = 30.",
        "Calculate 13 ÷ 30.",
        "13 ÷ 30 ≈ 0.433.",
        "Compare 0.433 with the theoretical value 0.333.",
      ],

      answer:
        "Observed relative frequency ≈ 0.433.",

      interpretation:
        "The students won about 43.3% of the observed plays, which is higher than the theoretical probability of about 33.3%. The difference alone does not prove the model is incorrect.",
    },

    {
      id: "example-07-03",

      title: "Step 3: Calculate the Expected Number of Wins",

      problem:
        "Under the fair-die model, how many wins would be expected in 30 plays?",

      solutionSteps: [
        "Number of trials = 30.",
        "Probability of winning = 1/3.",
        "Multiply 30 × 1/3.",
      ],

      answer:
        "Expected wins = 10.",

      interpretation:
        "The model predicts an average of 10 wins across repeated sets of 30 plays. It does not require exactly 10 wins every time.",
    },

    {
      id: "example-07-04",

      title: "Step 4: Design the Simulation",

      problem:
        "Describe a valid computer simulation for 30 plays of the carnival game.",

      solutionSteps: [
        "Generate a random integer from 1 through 6.",
        "Treat 5 or 6 as a win.",
        "Treat 1, 2, 3, or 4 as a loss.",
        "Repeat this process 30 times.",
        "Count the number of wins.",
        "Repeat the entire 30-play simulation many times.",
      ],

      answer:
        "Each simulated set represents one possible set of 30 plays under the fair-die model.",

      interpretation:
        "Repeating the full simulation allows us to study how much the number of wins naturally varies.",
    },

    {
      id: "example-07-05",

      title: "Step 5: Write the Conclusion",

      problem:
        "Suppose simulation shows that 13 or more wins occurs reasonably often under the fair model. What conclusion should be written?",

      solutionSteps: [
        "Identify the claim being evaluated.",
        "Refer to the observed result of 13 wins.",
        "Use the simulation as evidence.",
        "Recognize that results this large can occur from random variation.",
        "Avoid saying the fair model has been proven.",
      ],

      answer:
        "The observed result does not provide strong evidence against the fair-die probability model because results of 13 or more wins can occur through ordinary random variation.",

      interpretation:
        "AP Statistics conclusions should connect evidence directly to the original context and acknowledge uncertainty.",
    },
  ],

  interactiveExploration: {
    title: "Build the Investigation",

    description:
      "Work through a complete probability investigation using the carnival-game scenario.",

    instructions: [
      "Define the random process.",
      "Write the sample space.",
      "Define the event of interest.",
      "Calculate the theoretical probability.",
      "Calculate the observed relative frequency.",
      "Calculate the expected number of successes.",
      "Design a valid simulation.",
      "Run or imagine many repeated simulations.",
      "Compare the observed result with simulated results.",
      "Write a conclusion in context.",
    ],

    investigationQuestions: [
      "What assumptions are required for the theoretical probability model?",
      "Why is the observed result not expected to equal the theoretical probability exactly?",
      "Why should the entire set of 30 plays be simulated repeatedly?",
      "What would make an observed result look unusual?",
      "Can one unusual result prove that the model is wrong?",
      "How should uncertainty appear in the final conclusion?",
    ],

    expectedDiscovery:
      "A complete probability investigation connects a model to evidence. The goal is not simply to calculate probability, but to determine whether observed results are reasonably consistent with what the probability model predicts.",
  },

  realWorldApplications: [
    {
      field: "Quality Control",

      application:
        "Manufacturers compare observed defect rates with expected probabilities to investigate whether production processes are operating normally.",
    },

    {
      field: "Medicine",

      application:
        "Researchers compare observed treatment outcomes with probability models to determine whether results may reflect real effects or ordinary random variation.",
    },

    {
      field: "Finance",

      application:
        "Analysts compare realized losses or defaults with expected risk models to evaluate model performance.",
    },

    {
      field: "Sports Analytics",

      application:
        "Analysts compare actual performance with probability-based expectations to understand whether streaks or unusual results may be explained by variation.",
    },

    {
      field: "Engineering",

      application:
        "Engineers compare observed system failures with reliability models to identify possible problems.",
    },

    {
      field: "Artificial Intelligence",

      application:
        "AI researchers repeatedly evaluate models on test data and simulations to determine whether performance differences are meaningful or simply random variation.",
    },
  ],

  aiConnection: {
    title: "Probability Investigations in AI",

    explanation:
      "AI systems are evaluated through repeated experiments. Researchers compare observed model performance with expected or baseline behavior and ask whether differences are meaningful.",

    example:
      "Suppose two AI classifiers have accuracies of 91% and 92%. A one-percentage-point difference may appear important, but researchers must determine whether it is consistent across many examples and repeated tests rather than relying on one result.",

    caution:
      "A model can appear better simply because of random variation, a favorable test sample, biased data, or an inappropriate evaluation method.",

    reflectionQuestion:
      "Why should an AI researcher repeat an experiment rather than trusting one unusually strong result?",
  },

  pythonLab: {
    title: "Python Lab: Simulate the Carnival Game",

    objective:
      "Use Python to simulate many sets of 30 carnival-game plays and investigate how often 13 or more wins occur under the fair-die model.",

    code: `import random

def simulate_game_set(number_of_plays=30):
    wins = 0

    for _ in range(number_of_plays):
        roll = random.randint(1, 6)

        if roll in [5, 6]:
            wins += 1

    return wins


number_of_simulations = 10000
count_13_or_more = 0
results = []

for _ in range(number_of_simulations):
    wins = simulate_game_set(30)

    results.append(wins)

    if wins >= 13:
        count_13_or_more += 1


estimated_probability = (
    count_13_or_more / number_of_simulations
)

print(
    "Simulations:",
    number_of_simulations
)

print(
    "Estimated probability of 13 or more wins:",
    round(estimated_probability, 4)
)

print(
    "Average wins per 30 plays:",
    round(sum(results) / len(results), 2)
)`,

    questions: [
      "Why does each simulation contain exactly 30 plays?",
      "What does the variable count_13_or_more measure?",
      "Why do we repeat the simulation 10,000 times?",
      "What should the average number of wins be near?",
      "How would you interpret a large estimated probability of 13 or more wins?",
      "How would you interpret a very small estimated probability?",
    ],

    extension:
      "Modify the program to investigate the probability of getting 15 or more wins in 30 plays. Compare that result with the probability of getting 13 or more wins.",
  },

  guidedPractice: [
    {
      id: "guided-07-01",

      question:
        "A fair die game wins on outcomes {1, 2}. Find the theoretical probability of winning.",

      answer:
        "P(win) = 2/6 = 1/3.",
    },

    {
      id: "guided-07-02",

      question:
        "A player wins 18 times in 50 plays. Find the observed relative frequency.",

      answer:
        "18 ÷ 50 = 0.36.",
    },

    {
      id: "guided-07-03",

      question:
        "If the probability of success is 0.40, how many successes are expected on average in 100 trials?",

      answer:
        "100 × 0.40 = 40 successes.",
    },

    {
      id: "guided-07-04",

      question:
        "Why is an observed count different from the expected count not automatically evidence that a model is wrong?",

      answer:
        "Random processes naturally vary. The expected count represents a long-run average, not a requirement for every experiment.",
    },

    {
      id: "guided-07-05",

      question:
        "Why should an AP Statistics conclusion include context?",

      answer:
        "A statistical conclusion must state what the evidence means for the actual event, process, or claim being investigated.",
    },
  ],

  independentPractice: [
    {
      id: "practice-07-01",

      difficulty: "Foundation",

      question:
        "A fair spinner has 8 equal sections, 3 of which are blue. Find P(blue).",

      answer:
        "P(blue) = 3/8 = 0.375.",
    },

    {
      id: "practice-07-02",

      difficulty: "Foundation",

      question:
        "Blue occurs 42 times in 100 simulated spins. Find the simulated relative frequency.",

      answer:
        "42 ÷ 100 = 0.42.",
    },

    {
      id: "practice-07-03",

      difficulty: "Developing",

      question:
        "The theoretical probability of an event is 0.25. In 40 trials, the event occurs 14 times. Compare the observed result with the expected number.",

      sampleAnswer:
        "The expected number is 40 × 0.25 = 10. The observed number is 14, which is 4 higher than expected. Additional investigation is needed to determine whether this difference is unusual.",
    },

    {
      id: "practice-07-04",

      difficulty: "Developing",

      question:
        "Explain how you would simulate an event with probability 0.60 using random digits 0 through 9.",

      sampleAnswer:
        "Assign six digits, such as 0 through 5, to success and the remaining four digits to failure. Generate one random digit for each trial.",
    },

    {
      id: "practice-07-05",

      difficulty: "AP Reasoning",

      question:
        "A simulation shows that an observed result or something more extreme occurs in only about 2% of simulations under the proposed probability model. What does this suggest?",

      sampleAnswer:
        "The observed result appears unusual under the proposed model. This provides evidence that the model may not adequately explain the observed data, although it does not prove the model is false.",
    },

    {
      id: "practice-07-06",

      difficulty: "AP Reasoning",

      question:
        "A student says, 'My simulation matched the observed result, so I proved the model is correct.' Explain the error.",

      sampleAnswer:
        "Simulation shows what outcomes can occur under a model. Matching one observed result does not prove that the assumptions or probabilities of the model correctly describe the real process.",
    },
  ],

  commonMistakes: [
    {
      mistake:
        "Reporting only a numerical probability without explaining the context.",

      correction:
        "Connect every major probability result to the event and real-world question being investigated.",
    },

    {
      mistake:
        "Assuming observed results must equal expected results.",

      correction:
        "Random variation causes observed counts and relative frequencies to vary.",
    },

    {
      mistake:
        "Using a simulation that does not match the theoretical model.",

      correction:
        "The simulation mechanism must preserve the probability structure of the original process.",
    },

    {
      mistake:
        "Using one simulation run as strong evidence.",

      correction:
        "Repeat the complete simulation many times to understand the distribution of possible results.",
    },

    {
      mistake:
        "Writing that evidence proves a probability model is correct or incorrect.",

      correction:
        "Use language such as 'provides evidence,' 'is consistent with,' or 'appears unusual under the model.'",
    },
  ],

  discussionQuestions: [
    "What makes a probability investigation complete?",
    "Why do AP Statistics problems emphasize interpretation?",
    "How does simulation provide evidence about whether an observed result is unusual?",
    "What is the difference between an expected result and a guaranteed result?",
    "Why should conclusions acknowledge uncertainty?",
    "When might an unusual result cause us to question a probability model?",
    "How is this investigation process similar to scientific research?",
  ],

  formativeAssessment: {
    totalPoints: 15,

    passingScore: 12,

    questions: [
      {
        id: "check-07-01",

        type: "model",

        points: 3,

        prompt:
          "A fair die is rolled and success means rolling 4, 5, or 6. State the theoretical probability of success.",

        answer:
          "P(success) = 3/6 = 1/2 = 0.5.",
      },

      {
        id: "check-07-02",

        type: "calculation",

        points: 3,

        prompt:
          "An event occurs 27 times in 60 trials. Calculate the observed relative frequency.",

        answer:
          "27 ÷ 60 = 0.45.",
      },

      {
        id: "check-07-03",

        type: "reasoning",

        points: 3,

        prompt:
          "The probability of success is 0.50, but only 42 successes occur in 100 trials. Does this automatically mean the model is wrong? Explain.",

        sampleAnswer:
          "No. Random variation can produce counts above or below the expected value of 50. The result should be evaluated relative to the range of results commonly produced under the model.",
      },

      {
        id: "check-07-04",

        type: "simulation",

        points: 3,

        prompt:
          "Explain why a probability investigation may repeat the same simulation thousands of times.",

        sampleAnswer:
          "Repeated simulations show the range and frequency of outcomes expected under the probability model, allowing the observed result to be compared with ordinary random variation.",
      },

      {
        id: "check-07-05",

        type: "communication",

        points: 3,

        prompt:
          "Write one sentence that appropriately communicates evidence against a probability model without claiming absolute proof.",

        sampleAnswer:
          "Because the observed result occurred very rarely in simulations under the proposed model, the data provide evidence that the model may not accurately describe the process.",
      },
    ],
  },

  researchExtension: {
    title: "Design Your Own Probability Investigation",

    researchQuestion:
      "Can observed results from a real or simulated random process be reasonably explained by a proposed probability model?",

    investigationOptions: [
      "Coin tosses",
      "Dice",
      "Card draws",
      "Sports outcomes",
      "Manufacturing defects",
      "Online response rates",
      "AI classification accuracy",
    ],

    task:
      "Choose a random process and formulate a probability question. Build a theoretical model, collect or generate observations, design a simulation, compare the observed result with simulated results, and write a statistical conclusion.",

    requiredEvidence: [
      "Research question",
      "Random process",
      "Sample space",
      "Event of interest",
      "Theoretical probability",
      "Observed results",
      "Relative frequency",
      "Simulation method",
      "At least 1,000 repeated simulations",
      "Evidence-based conclusion",
    ],
  },

  portfolioArtifact: {
    title: "AP Probability Investigation Report",

    description:
      "Create a complete probability investigation demonstrating mathematical reasoning, simulation, interpretation, and statistical communication.",

    requiredSections: [
      "Investigation question",
      "Context",
      "Random process",
      "Sample space",
      "Event definition",
      "Probability model",
      "Theoretical probability",
      "Observed data",
      "Relative frequency",
      "Expected result",
      "Simulation design",
      "Simulation evidence",
      "Interpretation",
      "Final conclusion",
      "Limitations",
    ],

    requiredEvidence: [
      "Correct probability calculation",
      "Clearly justified model",
      "Valid simulation",
      "Comparison of observed and theoretical results",
      "Contextual interpretation",
      "Responsible conclusion",
      "One visual such as a table, graph, or simulation summary",
    ],
  },

  growthIndicators: [
    "Probability Modeling",
    "Statistical Reasoning",
    "Simulation Design",
    "AP-Style Communication",
    "Mathematical Argumentation",
    "Evidence Evaluation",
    "Computational Thinking",
    "Research Thinking",
  ],

  reflection: [
    "What is the difference between calculating a probability and conducting a probability investigation?",
    "Why are observed results allowed to differ from expected values?",
    "How does simulation help evaluate unusual outcomes?",
    "Why should conclusions be connected to evidence rather than intuition?",
    "What language should be avoided when communicating statistical conclusions?",
    "Which part of this investigation required the most reasoning?",
  ],

  summary: [
    "A complete probability investigation begins with a clearly defined question.",
    "The random process, sample space, and event must be identified.",
    "A theoretical probability model describes expected long-run behavior.",
    "Observed relative frequency summarizes experimental evidence.",
    "Expected counts describe long-run averages rather than guaranteed outcomes.",
    "Random variation causes repeated experiments to produce different results.",
    "Simulation helps determine whether an observed result is ordinary or unusual under a probability model.",
    "Evidence that is unusual under a model may cause us to question the model.",
    "Statistical conclusions should acknowledge uncertainty and avoid claims of absolute proof.",
    "AP Statistics reasoning requires calculation, interpretation, justification, and communication in context.",
  ],

  previousLesson: {
    id: "probability-m01-l06",
    slug: "interpreting-probability-in-context",
    title: "Interpreting Probability in Context",
  },

  nextLesson: {
    id: "probability-m01-l08",
    slug: "module-1-probability-synthesis",
    title: "Module 1 Probability Synthesis",
  },

  lumineryGuidance: {
    message:
      "Do not rush from a probability calculation to a conclusion. Build the entire chain of reasoning.",

    prompt:
      "For every investigation, move through five questions: What is the random process? What does the model predict? What was observed? What does simulation show? What conclusion is supported by the evidence?",

    coachingQuestions: [
      "What is your probability question?",
      "What is the sample space?",
      "What event are you studying?",
      "What assumptions justify your probability model?",
      "What does the theoretical model predict?",
      "What actually happened?",
      "How far is the observed result from the expected result?",
      "What does your simulation reveal?",
      "Is the observed result common or unusual under the model?",
      "What conclusion can the evidence support?",
    ],
  },
};

export default lesson07;