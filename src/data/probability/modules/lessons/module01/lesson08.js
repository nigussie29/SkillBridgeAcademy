const lesson08 = {
  id: "probability-m01-l08",
  courseId: "probability-foundations",
  moduleId: "module-01",

  moduleNumber: 1,
  lessonNumber: 8,

  slug: "module-1-probability-synthesis",

  title: "Module 1 Probability Synthesis",

  shortTitle: "Probability Synthesis",

  subtitle:
    "Connect the major ideas of Module 1 through modeling, simulation, interpretation, AP-style reasoning, and a cumulative probability investigation.",

  status: "Available",

  duration: "70–90 minutes",

  level: "AP Statistics Foundation",

  essentialQuestion:
    "How do sample spaces, events, probability models, simulation, long-run behavior, and statistical interpretation work together to explain uncertainty?",

  bigIdea:
    "Probability is a complete reasoning system: we define a random process, describe possible outcomes, identify events, construct a model, investigate long-run behavior, use simulation when appropriate, and interpret conclusions within context.",

  whyThisLessonExists: {
    title: "Why This Lesson Exists",

    introduction:
      "Throughout Module 1, you have developed several probability ideas separately. Real statistical problems, however, rarely tell you which concept to use. You must decide how the ideas connect.",

    centralProblem:
      "Can you take an unfamiliar uncertain situation and build a complete probability argument from beginning to end?",

    purpose:
      "This synthesis lesson brings together the full Module 1 framework. Students will model uncertainty, work with events, compare theoretical and experimental probability, use simulation, interpret results, and communicate conclusions using AP Statistics–appropriate reasoning.",
  },

  problemFirst: {
    title: "Should We Trust the Game?",

    scenario:
      "A digital game generates an integer from 1 through 10. The company claims that every number is equally likely. Players win whenever the result is 8, 9, or 10. During 100 observed plays, players win 39 times.",

    questions: [
      "What is the sample space?",
      "What event represents a win?",
      "What is the theoretical probability of winning if the company's model is correct?",
      "What is the observed relative frequency of winning?",
      "How does the observed result compare with the model?",
      "Does 39 wins prove that the game is unfair?",
      "How could simulation help investigate the result?",
      "What assumptions are required before trusting the theoretical model?",
      "What conclusion would be statistically responsible?",
    ],

    expectedInsight:
      "The theoretical winning probability is 3/10 = 0.30, while the observed relative frequency is 39/100 = 0.39. The difference may be caused by random variation or may indicate a problem with the model. Simulation can help determine how unusual 39 or more wins would be under the claimed probability model.",
  },

  learningObjectives: [
    "Identify random processes, outcomes, and sample spaces.",
    "Define events using appropriate mathematical notation.",
    "Construct theoretical probability models.",
    "Calculate probabilities for equally likely outcomes.",
    "Interpret probability through long-run relative frequency.",
    "Distinguish theoretical probability from experimental probability.",
    "Design valid simulations of random processes.",
    "Compare observed results with theoretical expectations.",
    "Evaluate probability claims using statistical reasoning.",
    "Interpret probability within real-world context.",
    "Communicate uncertainty without overstating conclusions.",
    "Integrate multiple probability concepts in an AP-style investigation.",
  ],

  prerequisiteKnowledge: [
    "Probability as a model of uncertainty",
    "Random processes and outcomes",
    "Sample spaces",
    "Events and set notation",
    "Union, intersection, and complements",
    "Long-run relative frequency",
    "Theoretical probability models",
    "Simulation",
    "Interpreting probability in context",
    "AP-style probability investigations",
  ],

  vocabulary: [
    {
      term: "Random Process",
      definition:
        "A process whose individual outcome cannot be predicted with certainty.",
    },
    {
      term: "Sample Space",
      definition:
        "The set of all possible outcomes of a random process.",
    },
    {
      term: "Event",
      definition:
        "A collection of outcomes from the sample space.",
    },
    {
      term: "Theoretical Probability",
      definition:
        "Probability determined from a mathematical model of the random process.",
    },
    {
      term: "Experimental Probability",
      definition:
        "A probability estimate based on observed relative frequency.",
    },
    {
      term: "Simulation",
      definition:
        "A method for imitating a random process using a valid random mechanism.",
    },
    {
      term: "Long-Run Relative Frequency",
      definition:
        "The proportion of trials producing an event as the number of repetitions becomes large.",
    },
    {
      term: "Random Variation",
      definition:
        "Natural differences between results produced by repeated random trials.",
    },
    {
      term: "Statistical Evidence",
      definition:
        "Observed or simulated information used to evaluate a claim or model.",
    },
    {
      term: "Statistical Conclusion",
      definition:
        "A conclusion that connects evidence to the original context while acknowledging uncertainty.",
    },
  ],

  formulas: [
    {
      id: "module1-theoretical-probability",

      name: "Theoretical Probability",

      formula:
        "P(A) = favorable outcomes ÷ total equally likely outcomes",

      meaning:
        "Used when the outcomes in the sample space are equally likely.",
    },

    {
      id: "module1-relative-frequency",

      name: "Relative Frequency",

      formula:
        "relative frequency = number of times A occurs ÷ total trials",

      meaning:
        "Describes how frequently an event occurs experimentally.",
    },

    {
      id: "module1-complement",

      name: "Complement Rule",

      formula:
        "P(Aᶜ) = 1 - P(A)",

      meaning:
        "The probability that event A does not occur is one minus the probability that it occurs.",
    },

    {
      id: "module1-expected-count",

      name: "Expected Count",

      formula:
        "expected count = number of trials × probability",

      meaning:
        "Represents the average number of occurrences predicted over repeated experiments.",
    },

    {
      id: "module1-model-difference",

      name: "Observed Difference",

      formula:
        "difference = observed relative frequency - theoretical probability",

      meaning:
        "Measures how far an observed result is from the theoretical model.",
    },
  ],

  probabilityScale: [
    {
      value: 0,
      label: "Impossible",
      example:
        "The event cannot occur within the stated model.",
    },
    {
      value: 0.25,
      label: "Unlikely",
      example:
        "The event is possible but occurs relatively infrequently.",
    },
    {
      value: 0.5,
      label: "Equally Likely",
      example:
        "Occurrence and nonoccurrence have equal probability.",
    },
    {
      value: 0.75,
      label: "Likely",
      example:
        "The event is expected more often than not.",
    },
    {
      value: 1,
      label: "Certain",
      example:
        "The event must occur within the stated model.",
    },
  ],

  workedExamples: [
    {
      id: "example-08-01",

      title: "Build the Sample Space",

      problem:
        "A digital game produces one integer from 1 through 10. Write the sample space.",

      solutionSteps: [
        "Identify every possible outcome.",
        "Represent the collection using set notation.",
      ],

      answer:
        "S = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10}",

      interpretation:
        "The sample space defines the complete universe of outcomes for the probability model.",
    },

    {
      id: "example-08-02",

      title: "Define the Winning Event",

      problem:
        "A player wins on 8, 9, or 10. Define event W.",

      solutionSteps: [
        "Identify all outcomes satisfying the winning condition.",
        "Write those outcomes as a subset of the sample space.",
      ],

      answer:
        "W = {8, 9, 10}",

      interpretation:
        "The winning event contains three possible outcomes from the sample space.",
    },

    {
      id: "example-08-03",

      title: "Calculate Theoretical Probability",

      problem:
        "Assuming all ten outcomes are equally likely, find P(W).",

      solutionSteps: [
        "There are 3 winning outcomes.",
        "There are 10 equally likely outcomes.",
        "Calculate 3 ÷ 10.",
      ],

      answer:
        "P(W) = 3/10 = 0.30",

      interpretation:
        "If the model is correct, players should win about 30% of plays in the long run.",
    },

    {
      id: "example-08-04",

      title: "Compare Observed Results",

      problem:
        "Players win 39 times in 100 observed plays.",

      solutionSteps: [
        "Calculate observed relative frequency: 39 ÷ 100.",
        "Observed relative frequency = 0.39.",
        "Compare 0.39 with theoretical probability 0.30.",
        "Calculate the difference: 0.39 - 0.30.",
      ],

      answer:
        "Observed frequency = 0.39; difference from the model = 0.09.",

      interpretation:
        "The observed winning rate is nine percentage points higher than predicted, but this difference alone does not establish that the model is incorrect.",
    },

    {
      id: "example-08-05",

      title: "Calculate Expected Wins",

      problem:
        "How many wins would be expected on average in 100 plays if P(W) = 0.30?",

      solutionSteps: [
        "Use expected count = number of trials × probability.",
        "Calculate 100 × 0.30.",
      ],

      answer:
        "Expected wins = 30.",

      interpretation:
        "Thirty wins is the long-run average predicted for sets of 100 plays. It is not a requirement that every set contain exactly 30 wins.",
    },

    {
      id: "example-08-06",

      title: "Interpret Simulation Evidence",

      problem:
        "Suppose only a small percentage of fair-model simulations produce 39 or more wins in 100 plays. What would this suggest?",

      solutionSteps: [
        "The simulation assumes the company's probability model is correct.",
        "Repeated simulations show the range of results expected from random variation.",
        "If 39 or more wins rarely occurs, the observed result is unusual under the model.",
      ],

      answer:
        "The result would provide evidence that the company's claimed probability model may not adequately explain the observed data.",

      interpretation:
        "The evidence can cause us to question the model, but it does not create absolute proof.",
    },
  ],

  interactiveExploration: {
    title: "The Probability Reasoning Chain",

    description:
      "Use one investigation to connect every major concept from Module 1.",

    instructions: [
      "Identify the random process.",
      "Write the sample space.",
      "Define the event of interest.",
      "State the assumptions of the model.",
      "Calculate theoretical probability.",
      "Record or calculate experimental relative frequency.",
      "Compare observed and theoretical results.",
      "Determine the expected count.",
      "Design a simulation.",
      "Use simulated results to evaluate random variation.",
      "Interpret the evidence in context.",
      "Write a statistically responsible conclusion.",
    ],

    investigationQuestions: [
      "What exactly is random?",
      "What outcomes are possible?",
      "What event are we studying?",
      "Why should the outcomes be considered equally likely?",
      "What does the model predict?",
      "What actually happened?",
      "Could random variation reasonably explain the difference?",
      "How can simulation help?",
      "What conclusion is supported?",
      "What conclusion would be too strong?",
    ],

    expectedDiscovery:
      "Probability reasoning is a connected process rather than a collection of isolated formulas. Each stage—from defining the sample space to interpreting evidence—supports the validity of the final conclusion.",
  },

  realWorldApplications: [
    {
      field: "Medicine",
      application:
        "Probability models help researchers evaluate treatment success, complications, diagnosis, and population-level health risks.",
    },
    {
      field: "Finance",
      application:
        "Probability supports credit-risk models, portfolio analysis, default estimation, and simulations of possible financial outcomes.",
    },
    {
      field: "Engineering",
      application:
        "Engineers use probability to model reliability, system failures, safety risks, and uncertain operating conditions.",
    },
    {
      field: "Insurance",
      application:
        "Insurers use probability and long-run data to estimate expected claims and financial risk.",
    },
    {
      field: "Artificial Intelligence",
      application:
        "AI systems use probability-like outputs to classify observations, estimate uncertainty, evaluate performance, and support decisions.",
    },
    {
      field: "Scientific Research",
      application:
        "Researchers use probability to distinguish systematic evidence from variation produced naturally by random processes.",
    },
  ],

  aiConnection: {
    title: "Probability as a Foundation of AI",

    explanation:
      "Artificial intelligence frequently operates under uncertainty. Models estimate probabilities, compare possible outcomes, classify observations, and make decisions without knowing the future with certainty.",

    example:
      "A machine-learning system may estimate a 0.78 probability that a customer will default, a 0.91 probability that an image contains a particular object, or a 0.64 probability that a transaction is fraudulent.",

    caution:
      "AI probability estimates depend on the data, assumptions, model structure, calibration, and environment in which the system operates.",

    reflectionQuestion:
      "Why should a probability produced by an AI system be treated as evidence rather than absolute truth?",
  },

  pythonLab: {
    title: "Python Lab: Evaluate the Digital Game",

    objective:
      "Simulate the claimed game model and estimate how often 39 or more wins occur in 100 plays.",

    code: `import random

def simulate_one_experiment(number_of_plays=100):
    wins = 0

    for _ in range(number_of_plays):
        outcome = random.randint(1, 10)

        if outcome in [8, 9, 10]:
            wins += 1

    return wins


simulations = 10000
count_39_or_more = 0
all_results = []

for _ in range(simulations):
    wins = simulate_one_experiment()

    all_results.append(wins)

    if wins >= 39:
        count_39_or_more += 1


estimated_probability = (
    count_39_or_more / simulations
)

average_wins = sum(all_results) / len(all_results)

print(
    "Number of simulations:",
    simulations
)

print(
    "Average wins per 100 plays:",
    round(average_wins, 2)
)

print(
    "Estimated probability of 39 or more wins:",
    round(estimated_probability, 4)
)`,

    questions: [
      "Why should the average number of wins be near 30?",
      "Why does each simulated experiment produce a different number of wins?",
      "What does count_39_or_more measure?",
      "What would a very small estimated probability suggest?",
      "Does a small probability prove the company is dishonest?",
      "How would increasing the number of simulations improve the estimate?",
    ],

    extension:
      "Modify the program so the user can enter any observed number of wins and estimate how often that result or a more extreme result occurs under the model.",
  },

  guidedPractice: [
    {
      id: "guided-08-01",
      question:
        "A spinner has 5 equally sized sections numbered 1 through 5. Write the sample space.",
      answer:
        "S = {1, 2, 3, 4, 5}.",
    },
    {
      id: "guided-08-02",
      question:
        "Let A be the event of spinning an even number. Write event A.",
      answer:
        "A = {2, 4}.",
    },
    {
      id: "guided-08-03",
      question:
        "Find P(A).",
      answer:
        "P(A) = 2/5 = 0.40.",
    },
    {
      id: "guided-08-04",
      question:
        "Event A occurs 46 times in 100 spins. Find the observed relative frequency.",
      answer:
        "46/100 = 0.46.",
    },
    {
      id: "guided-08-05",
      question:
        "If P(A) = 0.40, how many occurrences are expected on average in 100 spins?",
      answer:
        "100 × 0.40 = 40.",
    },
  ],

  independentPractice: [
    {
      id: "practice-08-01",

      difficulty: "Foundation",

      question:
        "A fair die is rolled. Define event A as rolling a number greater than 4 and calculate P(A).",

      answer:
        "A = {5, 6}, so P(A) = 2/6 = 1/3.",
    },

    {
      id: "practice-08-02",

      difficulty: "Foundation",

      question:
        "An event occurs 61 times in 200 trials. Calculate its experimental relative frequency.",

      answer:
        "61/200 = 0.305.",
    },

    {
      id: "practice-08-03",

      difficulty: "Developing",

      question:
        "A model predicts probability 0.30. In 200 trials, what number of successes is expected on average?",

      answer:
        "200 × 0.30 = 60.",
    },

    {
      id: "practice-08-04",

      difficulty: "Developing",

      question:
        "A model predicts probability 0.50, but an event occurs 56 times in 100 trials. Explain why this does not automatically contradict the model.",

      sampleAnswer:
        "Random variation causes observed counts to differ from expected values. The result must be evaluated relative to the range of outcomes that commonly occur under the model.",
    },

    {
      id: "practice-08-05",

      difficulty: "AP Reasoning",

      question:
        "Simulation shows that an observed result or something more extreme occurs in fewer than 1% of trials under a proposed probability model. Interpret this evidence.",

      sampleAnswer:
        "The observed result would be unusual if the model were correct, providing evidence that the proposed model may not adequately describe the random process.",
    },

    {
      id: "practice-08-06",

      difficulty: "AP Reasoning",

      question:
        "Explain why a complete probability argument should discuss assumptions before presenting a conclusion.",

      sampleAnswer:
        "Probability calculations and simulations are valid only when the assumptions accurately represent the process being studied. If the assumptions are inappropriate, a mathematically correct calculation can still produce a misleading conclusion.",
    },
  ],

    commonMistakes: [
    {
      mistake:
        "Beginning calculations before defining the event.",

      correction:
        "First identify the random process, sample space, and event.",
    },

    {
      mistake:
        "Assuming theoretical and experimental probability must be identical.",

      correction:
        "Experimental relative frequencies naturally vary from theoretical probabilities because of random variation.",
    },

    {
      mistake:
        "Treating the expected count as the exact number that must occur.",

      correction:
        "Expected count describes a long-run average. Individual experiments may produce values above or below it.",
    },

    {
      mistake:
        "Concluding that one unusual result automatically proves the probability model is wrong.",

      correction:
        "An unusual result may provide evidence against a model, but statistical conclusions should acknowledge uncertainty.",
    },

    {
      mistake:
        "Designing a simulation that does not preserve the probabilities of the original process.",

      correction:
        "A valid simulation must reproduce the probability structure and assumptions of the model being investigated.",
    },

    {
      mistake:
        "Ignoring assumptions when interpreting probability results.",

      correction:
        "Probability conclusions are meaningful only when the assumptions of the model reasonably represent the real process.",
    },

    {
      mistake:
        "Reporting a probability without explaining what it means in context.",

      correction:
        "Connect probability values to the event, population or system, conditions, and uncertainty involved.",
    },
  ],

  discussionQuestions: [
    "How do sample spaces and events provide the foundation for probability reasoning?",
    "Why can experimental probability differ from theoretical probability?",
    "What does long-run relative frequency tell us about a random process?",
    "Why is simulation useful when studying probability models?",
    "What makes an observed result statistically unusual?",
    "Why should assumptions be evaluated before trusting a probability model?",
    "What is the difference between evidence against a model and proof that the model is false?",
    "How can poor interpretation of probability lead to poor decisions?",
    "How are probability, simulation, and uncertainty connected to artificial intelligence?",
    "Which idea from Module 1 do you think is most important for future statistics work, and why?",
  ],

  formativeAssessment: {
    totalPoints: 20,

    passingScore: 16,

    questions: [
      {
        id: "check-08-01",

        type: "sample-space",

        points: 4,

        prompt:
          "A fair spinner has six equally sized sections labeled A, B, C, D, E, and F. Write the sample space and define event M as landing on A, C, or E.",

        answer:
          "S = {A, B, C, D, E, F} and M = {A, C, E}.",
      },

      {
        id: "check-08-02",

        type: "probability",

        points: 4,

        prompt:
          "Using the spinner above, calculate P(M).",

        answer:
          "P(M) = 3/6 = 1/2 = 0.50.",
      },

      {
        id: "check-08-03",

        type: "relative-frequency",

        points: 4,

        prompt:
          "Event M occurs 57 times in 100 spins. Calculate the experimental relative frequency and compare it with the theoretical probability.",

        sampleAnswer:
          "The relative frequency is 57/100 = 0.57. This is 0.07 above the theoretical probability of 0.50.",
      },

      {
        id: "check-08-04",

        type: "simulation-reasoning",

        points: 4,

        prompt:
          "Explain why repeatedly simulating 100 spins can help determine whether 57 occurrences of event M is unusual.",

        sampleAnswer:
          "Repeated simulations show the range of results that naturally occur under the theoretical model. We can then see how often results of 57 or more occur because of random variation.",
      },

      {
        id: "check-08-05",

        type: "ap-reasoning",

        points: 4,

        prompt:
          "Suppose results of 57 or more occur frequently in simulations under the fair-spinner model. Write an appropriate conclusion.",

        sampleAnswer:
          "Because results of 57 or more occur reasonably often under the fair-spinner model, the observed result is consistent with ordinary random variation and does not provide strong evidence against the model.",
      },
    ],
  },

  researchExtension: {
    title: "Probability Model Investigation",

    researchQuestion:
      "Can a probability model reasonably explain the behavior of a real or simulated random process?",

    investigationOptions: [
      "Coin tosses",
      "Dice rolls",
      "Card draws",
      "Sports outcomes",
      "Weather forecasts",
      "Manufacturing defects",
      "Credit default",
      "AI classification",
    ],

    task:
      "Choose one uncertain process and conduct a complete probability investigation. Define the process, construct or identify a probability model, gather or simulate results, compare observations with expectations, and evaluate whether the evidence is reasonably consistent with the model.",

    requiredEvidence: [
      "Clearly stated research question",
      "Description of the random process",
      "Sample space or possible outcomes",
      "Event of interest",
      "Model assumptions",
      "Theoretical probability",
      "Observed or simulated data",
      "Relative frequency",
      "Expected result",
      "Simulation evidence",
      "Interpretation in context",
      "Limitations",
      "Statistically responsible conclusion",
      "At least one credible source when using a real-world application",
    ],
  },

  portfolioArtifact: {
    title: "Module 1 Probability Capstone",

    description:
      "Create a complete probability investigation that demonstrates your ability to model uncertainty, analyze evidence, use simulation, and communicate a statistical conclusion.",

    requiredSections: [
      "Investigation title",
      "Research question",
      "Context",
      "Random process",
      "Sample space",
      "Event definition",
      "Probability model",
      "Model assumptions",
      "Theoretical probability",
      "Observed or simulated data",
      "Experimental relative frequency",
      "Expected count",
      "Simulation design",
      "Simulation results",
      "Comparison with the model",
      "Interpretation",
      "Final statistical conclusion",
      "Limitations",
      "Reflection",
    ],

    requiredEvidence: [
      "Correct mathematical notation",
      "Correct probability calculations",
      "Valid simulation design",
      "At least 1,000 repeated simulations when appropriate",
      "One graph, table, or visual summary",
      "Clear comparison of theoretical and experimental results",
      "Explanation of random variation",
      "AP Statistics–appropriate conclusion",
      "Discussion of assumptions and limitations",
    ],
  },

  growthIndicators: [
    "Conceptual Understanding",
    "Probability Modeling",
    "Set and Event Reasoning",
    "Long-Run Reasoning",
    "Simulation Design",
    "Statistical Interpretation",
    "AP-Style Communication",
    "Computational Thinking",
    "Evidence Evaluation",
    "Research Thinking",
    "Responsible Decision-Making",
  ],

  reflection: [
    "How has your understanding of probability changed since Lesson 1?",
    "Why is probability more than simply calculating fractions?",
    "How do sample spaces and events help organize uncertain situations?",
    "Why do observed results differ from theoretical probability?",
    "How does long-run relative frequency help explain probability?",
    "When is simulation especially useful?",
    "Why must assumptions be evaluated before accepting a probability conclusion?",
    "What makes a statistical conclusion responsible?",
    "How does probability support artificial intelligence, finance, science, and engineering?",
    "Which Module 1 skill do you still want to strengthen before moving to Module 2?",
  ],

  summary: [
    "Probability provides a mathematical framework for reasoning about uncertainty.",
    "A random process has outcomes that cannot be predicted with certainty before they occur.",
    "The sample space contains all possible outcomes of the random process.",
    "An event is a collection of outcomes from the sample space.",
    "Set notation helps describe unions, intersections, and complements of events.",
    "Theoretical probability comes from a mathematical probability model.",
    "Experimental probability is estimated using observed relative frequency.",
    "Short-run results may vary substantially even when the probability model is correct.",
    "Long-run relative frequencies tend to stabilize near the probabilities predicted by the model.",
    "Expected counts describe long-run averages rather than guaranteed results.",
    "Simulation imitates random processes and helps investigate expected variation.",
    "A valid simulation must preserve the probability structure of the original process.",
    "Observed results should be compared with the range of results expected under the model.",
    "Unusual observations may provide evidence that a probability model should be questioned.",
    "Statistical evidence does not normally provide absolute proof.",
    "Probability must be interpreted within the context of the event, population, system, and assumptions.",
    "Responsible probability reasoning combines mathematics, simulation, evidence, interpretation, and communication.",
    "Probability is foundational to statistics, finance, medicine, engineering, scientific research, and artificial intelligence.",
  ],

  previousLesson: {
    id: "probability-m01-l07",
    slug: "ap-probability-investigation",
    title: "AP-Style Probability Investigation",
  },

  nextLesson: null,

  lumineryGuidance: {
    message:
      "You have completed the first probability reasoning cycle. The goal is not to memorize isolated formulas—it is to understand how uncertainty can be modeled, tested, interpreted, and communicated.",

    prompt:
      "When facing a new probability problem, move through the full reasoning chain: define the process, identify the sample space, define the event, build the model, compare evidence, investigate variation, and interpret the conclusion in context.",

    coachingQuestions: [
      "What is random in this situation?",
      "What are all possible outcomes?",
      "What event are you studying?",
      "What assumptions does your probability model require?",
      "Are the outcomes equally likely?",
      "What does the theoretical model predict?",
      "What was actually observed?",
      "What is the experimental relative frequency?",
      "What would you expect in the long run?",
      "Could random variation explain the observed difference?",
      "Would simulation help answer the question?",
      "What evidence supports your conclusion?",
      "What assumptions or limitations remain?",
      "How can you communicate the conclusion without overstating certainty?",
    ],

    masteryMessage:
      "If you can move confidently through this reasoning chain, you are ready to continue from introductory probability modeling into counting techniques and more advanced probability structures.",
  },
};

export default lesson08;