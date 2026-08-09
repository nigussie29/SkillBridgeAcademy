const lesson05 = {
  id: "probability-m01-l05",
  courseId: "probability-foundations",
  moduleId: "module-01",

  moduleNumber: 1,
  lessonNumber: 5,

  slug: "theoretical-models-and-simulation",

  title: "Theoretical Models and Simulation",

  shortTitle: "Models and Simulation",

  subtitle:
    "Compare mathematical probability models with simulations and learn how repeated random trials help test assumptions about uncertain processes.",

  status: "Available",

  duration: "55–70 minutes",

  level: "AP Statistics Foundation",

  essentialQuestion:
    "How can mathematical models and simulations work together to help us understand uncertain events?",

  bigIdea:
    "A theoretical probability model describes how a random process is expected to behave, while simulation allows us to imitate that process repeatedly and compare observed results with the model.",

  whyThisLessonExists: {
    title: "Why This Lesson Exists",

    introduction:
      "Many real-world probability problems are difficult, expensive, dangerous, or impossible to repeat directly. Scientists, engineers, financial analysts, medical researchers, and artificial intelligence developers often use mathematical models and computer simulations to investigate what might happen.",

    centralProblem:
      "How can we study an uncertain process when performing the real experiment thousands of times is impractical?",

    purpose:
      "This lesson develops the connection between theoretical probability and simulation. Students learn how to build a probability model, simulate random outcomes, compare experimental results with theoretical expectations, and evaluate whether the simulation reasonably represents the original process.",
  },

  problemFirst: {
    title: "Can a Computer Simulate a Fair Coin?",

    scenario:
      "Suppose a computer program generates either H or T with equal probability. The program is run 20 times and produces 14 heads and 6 tails. A student concludes that the simulation is broken because a fair coin should produce exactly 10 heads and 10 tails.",

    questions: [
      "Does a fair probability model require exactly half heads in every simulation?",
      "Could 14 heads occur naturally in only 20 trials?",
      "What would you expect to happen if the simulation were repeated 10,000 times?",
      "What assumptions must be true for the computer simulation to represent a fair coin?",
      "How could we compare the simulation results with the theoretical model?",
    ],

    expectedInsight:
      "A fair theoretical model assigns probability 0.5 to heads and 0.5 to tails, but finite simulations can vary. A good simulation should reproduce the random mechanism of the original process, and large numbers of simulated trials should usually produce relative frequencies close to the theoretical probabilities.",
  },

  learningObjectives: [
    "Define a theoretical probability model.",
    "Explain the purpose of simulation in probability.",
    "Distinguish theoretical probability from simulation results.",
    "Construct simple probability models for equally likely outcomes.",
    "Use random numbers or computer-generated outcomes to simulate random processes.",
    "Evaluate whether a simulation reasonably represents the original random process.",
    "Compare simulated relative frequencies with theoretical probabilities.",
    "Explain why simulation results vary between runs.",
    "Identify limitations and assumptions of probability simulations.",
    "Apply simulation reasoning to AP Statistics–level probability investigations.",
  ],

  prerequisiteKnowledge: [
    "Random processes",
    "Outcomes and sample spaces",
    "Events",
    "Relative frequency",
    "Theoretical probability",
    "Long-run relative frequency",
    "Basic fractions, decimals, and percentages",
  ],

  vocabulary: [
    {
      term: "Theoretical Probability Model",
      definition:
        "A mathematical description of a random process that specifies possible outcomes and their probabilities.",
    },
    {
      term: "Simulation",
      definition:
        "A method of imitating a random process using physical devices, random numbers, or computer-generated outcomes.",
    },
    {
      term: "Random Number Generator",
      definition:
        "A computational tool that produces values used to imitate random outcomes.",
    },
    {
      term: "Model Assumption",
      definition:
        "A condition accepted as true when constructing or using a probability model.",
    },
    {
      term: "Simulation Trial",
      definition:
        "One simulated repetition of the random process being studied.",
    },
    {
      term: "Experimental Probability",
      definition:
        "A probability estimate obtained from observed or simulated relative frequency.",
    },
    {
      term: "Model Validation",
      definition:
        "The process of checking whether a model or simulation reasonably represents the behavior of the real system.",
    },
  ],

  formulas: [
    {
      id: "equally-likely-model",

      name: "Equally Likely Probability Model",

      formula:
        "P(A) = number of outcomes in A ÷ total number of equally likely outcomes",

      meaning:
        "When every outcome in the sample space is equally likely, probability can be calculated by comparing favorable outcomes with the total number of outcomes.",
    },

    {
      id: "simulation-relative-frequency",

      name: "Simulation Relative Frequency",

      formula:
        "simulated relative frequency = simulated successes ÷ total simulated trials",

      meaning:
        "Simulation results estimate probability using the proportion of simulated trials in which the event occurs.",
    },

    {
      id: "comparison",

      name: "Model–Simulation Comparison",

      formula:
        "simulation error = simulated relative frequency - theoretical probability",

      meaning:
        "The difference between the simulated result and the theoretical value helps describe how closely a particular simulation matches the probability model.",
    },
  ],

  probabilityScale: [],

  workedExamples: [
    {
      id: "example-05-01",

      title: "Theoretical Probability of Rolling an Even Number",

      problem:
        "A fair six-sided die is rolled once. Find the theoretical probability of rolling an even number.",

      solutionSteps: [
        "Write the sample space: S = {1, 2, 3, 4, 5, 6}.",
        "Identify the even outcomes: {2, 4, 6}.",
        "There are 3 favorable outcomes.",
        "There are 6 equally likely outcomes total.",
        "Calculate 3 ÷ 6.",
      ],

      answer:
        "P(even) = 3/6 = 1/2 = 0.5",

      interpretation:
        "The theoretical model predicts that about half of a large number of fair die rolls should be even.",
    },

    {
      id: "example-05-02",

      title: "Comparing a Simulation with Theory",

      problem:
        "A computer simulates 500 fair die rolls. An even number occurs 257 times. Compare the simulation result with the theoretical probability.",

      solutionSteps: [
        "Calculate simulated relative frequency: 257 ÷ 500.",
        "257 ÷ 500 = 0.514.",
        "The theoretical probability is 0.5.",
        "Find the difference: 0.514 - 0.5 = 0.014.",
      ],

      answer:
        "Simulated probability = 0.514; theoretical probability = 0.500.",

      interpretation:
        "The simulated result is close to the theoretical model. A small difference is expected because simulation includes random variation.",
    },

    {
      id: "example-05-03",

      title: "Designing a Coin Simulation",

      problem:
        "Describe how the digits 0 through 9 could be used to simulate a fair coin toss.",

      solutionSteps: [
        "A fair coin requires two equally likely outcomes.",
        "The digits 0 through 9 contain 10 equally likely possibilities.",
        "Assign five digits to heads and five digits to tails.",
        "For example, 0–4 can represent heads and 5–9 can represent tails.",
      ],

      answer:
        "0–4 = Heads and 5–9 = Tails",

      interpretation:
        "The assignment works because exactly half of the equally likely random digits represent each coin outcome.",
    },

    {
      id: "example-05-04",

      title: "A Biased Probability Model",

      problem:
        "A machine produces defective items with probability 0.20. Design a random-digit simulation using digits 0 through 9.",

      solutionSteps: [
        "The model requires 20% defective outcomes.",
        "Twenty percent of 10 digits equals 2 digits.",
        "Assign 2 digits to defective and 8 digits to nondefective.",
        "For example, digits 0 and 1 can represent defective.",
      ],

      answer:
        "0–1 = defective; 2–9 = nondefective",

      interpretation:
        "The simulation must preserve the probability structure of the theoretical model.",
    },

    {
      id: "example-05-05",

      title: "When a Simulation Is Poorly Designed",

      problem:
        "A student simulates a fair six-sided die by generating random digits 1 through 9 and assigning each digit directly to a die result whenever possible. Explain the problem.",

      solutionSteps: [
        "A fair die has exactly six equally likely outcomes.",
        "Nine equally likely digits cannot be divided equally among six outcomes using one digit per outcome.",
        "Some die results would receive more random digits than others or some digits would need to be ignored.",
        "The simulation design must guarantee equal probabilities for all six die outcomes.",
      ],

      answer:
        "The simulation does not automatically preserve equal probability among the six die outcomes.",

      interpretation:
        "A simulation is useful only if its random mechanism correctly represents the probability model being studied.",
    },
  ],

  interactiveExploration: {
    title: "Theory vs. Simulation",

    description:
      "Compare the theoretical probability of rolling an even number on a fair die with results from repeated simulations.",

    instructions: [
      "State the theoretical probability of rolling an even number.",
      "Roll a fair die or use a random-number generator 20 times.",
      "Record whether each result is even or odd.",
      "Calculate the relative frequency of even outcomes.",
      "Repeat the experiment using 100 trials.",
      "Repeat again using 1,000 simulated trials.",
      "Compare each simulated relative frequency with 0.5.",
      "Record the absolute difference between each simulation result and the theoretical probability.",
    ],

    investigationQuestions: [
      "Which simulation result was farthest from 0.5?",
      "Which was closest?",
      "Did every simulation produce the same result?",
      "Why do simulations differ even when they use the same theoretical model?",
      "What happens to the typical size of the difference as the number of trials grows?",
      "Does one simulation prove that the theoretical model is correct?",
    ],

    expectedDiscovery:
      "Simulation results vary because of randomness. Larger simulations generally produce relative frequencies closer to theoretical probability, but no finite simulation is guaranteed to match the theoretical value exactly.",
  },

  realWorldApplications: [
    {
      field: "Medicine",

      application:
        "Researchers use simulation to study treatment outcomes, disease spread, diagnostic uncertainty, and clinical trial designs before or alongside real experiments.",
    },

    {
      field: "Finance",

      application:
        "Monte Carlo simulation is used to model investment returns, credit losses, portfolio risk, and possible future market scenarios.",
    },

    {
      field: "Engineering",

      application:
        "Engineers simulate component failures, structural loads, system reliability, and safety risks that would be expensive or dangerous to test repeatedly in real life.",
    },

    {
      field: "Insurance",

      application:
        "Insurance companies simulate large numbers of possible claims and losses to estimate financial risk.",
    },

    {
      field: "Weather",

      application:
        "Weather forecasting systems run many model simulations with slightly different starting conditions to estimate possible future atmospheric states.",
    },

    {
      field: "Artificial Intelligence",

      application:
        "AI researchers use repeated experiments, randomized training procedures, and simulation environments to evaluate model performance under uncertain conditions.",
    },
  ],

  aiConnection: {
    title: "Simulation in Artificial Intelligence",

    explanation:
      "Simulation is central to many areas of artificial intelligence. Reinforcement-learning agents can practice millions of simulated actions before interacting with real systems. Autonomous vehicles can be tested in virtual environments, and AI models can be evaluated across many generated scenarios.",

    example:
      "A self-driving system might be tested in simulated situations involving rain, pedestrians, traffic signals, construction zones, and unexpected vehicle behavior before being deployed on public roads.",

    caution:
      "A simulation can only represent the assumptions and scenarios built into it. If important real-world conditions are missing or unrealistic, strong simulation performance may not translate into strong real-world performance.",

    reflectionQuestion:
      "Why can a highly successful simulation still fail to guarantee successful performance in the real world?",
  },

  pythonLab: {
    title: "Python Lab: Theory vs. Simulation",

    objective:
      "Simulate repeated fair die rolls and compare experimental relative frequency with the theoretical probability of rolling an even number.",

    code: `import random

def simulate_die_rolls(number_of_rolls):
    even_count = 0

    for _ in range(number_of_rolls):
        roll = random.randint(1, 6)

        if roll % 2 == 0:
            even_count += 1

    relative_frequency = even_count / number_of_rolls

    return relative_frequency


theoretical_probability = 0.5

for trials in [20, 100, 1000, 10000]:
    simulated_probability = simulate_die_rolls(trials)

    difference = abs(
        simulated_probability - theoretical_probability
    )

    print(
        f"{trials} trials: "
        f"simulated = {simulated_probability:.4f}, "
        f"theoretical = {theoretical_probability:.4f}, "
        f"difference = {difference:.4f}"
    )`,

    questions: [
      "Why does the simulated probability change each time the program runs?",
      "Which trial size usually produces the largest difference from 0.5?",
      "Which trial size usually produces the most stable result?",
      "Does the 10,000-trial simulation always equal exactly 0.5?",
      "Why does the theoretical probability remain 0.5 even though simulation results vary?",
    ],

    extension:
      "Modify the program to estimate the probability of rolling a number greater than 4. Compare the simulation with the theoretical probability 2/6.",
  },

  guidedPractice: [
    {
      id: "guided-05-01",

      question:
        "A fair coin is tossed. State the theoretical probability of heads.",

      answer:
        "P(heads) = 1/2 = 0.5",
    },

    {
      id: "guided-05-02",

      question:
        "A fair die is rolled. Find the theoretical probability of rolling a number greater than 4.",

      answer:
        "The favorable outcomes are {5, 6}, so P(number > 4) = 2/6 = 1/3.",
    },

    {
      id: "guided-05-03",

      question:
        "A computer simulation produces 326 successes in 1,000 trials. Find the simulated relative frequency.",

      answer:
        "326 ÷ 1,000 = 0.326",
    },

    {
      id: "guided-05-04",

      question:
        "A theoretical model predicts probability 0.30. A simulation produces relative frequency 0.284. Find the difference.",

      answer:
        "0.284 - 0.30 = -0.016. The simulated value is 0.016 below the theoretical value.",
    },

    {
      id: "guided-05-05",

      question:
        "Why should a simulation of a fair coin assign equal probability to its two simulated outcomes?",

      answer:
        "The simulation must preserve the probability structure of the original random process. A fair coin gives heads and tails equal probability.",
    },
  ],

  independentPractice: [
    {
      id: "practice-05-01",

      difficulty: "Foundation",

      question:
        "A fair six-sided die is rolled. Find the theoretical probability of rolling an odd number.",

      answer:
        "The odd outcomes are {1, 3, 5}, so P(odd) = 3/6 = 0.5.",
    },

    {
      id: "practice-05-02",

      difficulty: "Foundation",

      question:
        "A simulation produces 78 successes in 200 trials. Calculate the simulated relative frequency.",

      answer:
        "78 ÷ 200 = 0.39.",
    },

    {
      id: "practice-05-03",

      difficulty: "Developing",

      question:
        "A theoretical probability is 0.40. One simulation of 50 trials produces relative frequency 0.52. Another simulation of 5,000 trials produces 0.397. Explain the difference.",

      sampleAnswer:
        "Small simulations can show substantial random variation. The larger simulation is generally more stable and therefore tends to fall closer to the theoretical probability.",
    },

    {
      id: "practice-05-04",

      difficulty: "Developing",

      question:
        "Design a random-digit simulation for an event with probability 0.30 using random digits 0 through 9.",

      sampleAnswer:
        "Assign three digits, such as 0, 1, and 2, to the event and the remaining seven digits to the event not occurring.",
    },

    {
      id: "practice-05-05",

      difficulty: "AP Reasoning",

      question:
        "A student performs a simulation of 10,000 trials and obtains a relative frequency extremely close to the theoretical probability. The student says this proves the probability model is correct. Explain why this conclusion is too strong.",

      sampleAnswer:
        "A simulation can show that results are consistent with the model, but it cannot prove that the model accurately represents the real-world process. The validity of the assumptions and simulation design must also be evaluated.",
    },

    {
      id: "practice-05-06",

      difficulty: "AP Reasoning",

      question:
        "Explain why a simulation that uses the wrong probabilities can produce precise but misleading results.",

      sampleAnswer:
        "A very large simulation faithfully reflects the probabilities built into the simulation. If those probabilities are wrong, the results may be very stable but still fail to represent the real process.",
    },
  ],

  commonMistakes: [
    {
      mistake:
        "Believing theoretical probability is calculated from simulation results.",

      correction:
        "Theoretical probability comes from the mathematical model. Simulation produces experimental estimates that can be compared with the model.",
    },

    {
      mistake:
        "Expecting a simulation to match theoretical probability exactly.",

      correction:
        "Finite simulations contain random variation and usually differ somewhat from the theoretical value.",
    },

    {
      mistake:
        "Assuming any random-number assignment creates a valid simulation.",

      correction:
        "The assignment must preserve the probabilities of the original process.",
    },

    {
      mistake:
        "Believing more simulation trials can fix an incorrect model.",

      correction:
        "More trials reduce simulation variability, but they do not correct incorrect assumptions or probabilities.",
    },

    {
      mistake:
        "Treating simulation as proof that a real-world model is correct.",

      correction:
        "Simulation can test consequences of a model, but the assumptions and real-world validity of the model must still be evaluated.",
    },
  ],

  discussionQuestions: [
    "Why might simulation be preferable to a real experiment?",
    "What makes a simulation valid?",
    "Why do two simulations of the same process produce different results?",
    "What does a large number of simulation trials improve?",
    "What can simulation not tell us?",
    "Why are model assumptions important?",
    "How could a biased simulation influence an AI or financial decision?",
  ],

  formativeAssessment: {
    totalPoints: 15,

    passingScore: 12,

    questions: [
      {
        id: "check-05-01",

        type: "concept",

        points: 3,

        prompt:
          "Explain the difference between theoretical probability and simulation.",

        sampleAnswer:
          "Theoretical probability comes from a mathematical probability model. Simulation imitates the random process repeatedly to produce experimental outcomes.",
      },

      {
        id: "check-05-02",

        type: "calculation",

        points: 3,

        prompt:
          "A fair six-sided die is rolled. Calculate the theoretical probability of rolling a number less than 3.",

        answer:
          "The favorable outcomes are {1, 2}. Therefore P(number < 3) = 2/6 = 1/3.",
      },

      {
        id: "check-05-03",

        type: "simulation",

        points: 3,

        prompt:
          "A simulation produces an event 412 times in 1,000 trials. Find the simulated relative frequency.",

        answer:
          "412 ÷ 1,000 = 0.412.",
      },

      {
        id: "check-05-04",

        type: "reasoning",

        points: 3,

        prompt:
          "Why does a simulation need to reproduce the probability structure of the original random process?",

        sampleAnswer:
          "If the simulated outcomes do not have the correct probabilities, the simulation will model a different random process and its conclusions may be misleading.",
      },

      {
        id: "check-05-05",

        type: "application",

        points: 3,

        prompt:
          "An AI system performs well in a simulated environment. Give one reason why that does not guarantee equally strong performance in the real world.",

        sampleAnswer:
          "The simulation may omit important real-world conditions or may rely on assumptions that do not accurately represent reality.",
      },
    ],
  },

  researchExtension: {
    title: "Investigating Simulation in a Real Field",

    researchQuestion:
      "How is simulation used to investigate uncertainty in a real scientific, technological, financial, or social system?",

    applicationOptions: [
      "Medical research",
      "Insurance",
      "Finance",
      "Weather forecasting",
      "Engineering reliability",
      "Autonomous vehicles",
      "Artificial intelligence",
    ],

    task:
      "Choose one field that uses simulation. Explain the uncertain process being modeled, identify important assumptions, describe how randomness is generated, and evaluate one strength and one limitation of the simulation.",

    requiredEvidence: [
      "Description of the real system",
      "Purpose of the simulation",
      "Random outcomes being modeled",
      "Important model assumptions",
      "One benefit of simulation",
      "One limitation",
      "One credible source",
    ],
  },

  portfolioArtifact: {
    title: "Build and Evaluate a Probability Simulation",

    description:
      "Design a simple simulation for a random process, run repeated trials, compare the results with theoretical probability, and evaluate the quality of the simulation.",

    requiredSections: [
      "Random process",
      "Sample space",
      "Event of interest",
      "Theoretical probability",
      "Simulation design",
      "Random mechanism",
      "Trial results",
      "Simulated relative frequency",
      "Comparison with theory",
      "Evaluation of assumptions and limitations",
    ],

    requiredEvidence: [
      "At least 100 simulated trials",
      "Correct theoretical probability",
      "Clearly described simulation rule",
      "Relative-frequency calculation",
      "Model–simulation comparison",
      "Written conclusion",
    ],
  },

  growthIndicators: [
    "Conceptual Understanding",
    "Probability Modeling",
    "Simulation Design",
    "Statistical Reasoning",
    "Computational Thinking",
    "Model Evaluation",
    "Mathematical Communication",
    "Interpretation in Context",
  ],

  reflection: [
    "How is a theoretical model different from a simulation?",
    "Why do simulation results change from one run to another?",
    "What makes a simulation trustworthy?",
    "Why can a very large simulation still produce a misleading conclusion?",
    "When would you prefer simulation instead of performing a real experiment?",
    "How does simulation support modern artificial intelligence and scientific research?",
  ],

  summary: [
    "A theoretical probability model specifies possible outcomes and their probabilities.",
    "Simulation imitates a random process using a designed random mechanism.",
    "Simulation results are experimental and vary from run to run.",
    "Larger simulations usually produce more stable relative frequencies.",
    "Simulation results can be compared with theoretical probabilities.",
    "A valid simulation must preserve the probability structure of the original process.",
    "Increasing the number of trials reduces simulation variability but does not fix incorrect assumptions.",
    "Simulation can support decision-making but cannot prove that a real-world probability model is correct.",
    "Computer simulation is widely used in science, finance, engineering, medicine, weather forecasting, and artificial intelligence.",
  ],

  previousLesson: {
    id: "probability-m01-l04",
    slug: "long-run-relative-frequency",
    title: "Long-Run Relative Frequency",
  },

  nextLesson: {
    id: "probability-m01-l06",
    slug: "interpreting-probability-in-context",
    title: "Interpreting Probability in Context",
  },

  lumineryGuidance: {
    message:
      "A simulation is only as trustworthy as the probability model and assumptions behind it.",

    prompt:
      "Before interpreting simulation results, identify the theoretical model, the random mechanism, the number of trials, and whether the simulation truly represents the original process.",

    coachingQuestions: [
      "What random process are you modeling?",
      "What is the theoretical probability?",
      "How does the simulation generate outcomes?",
      "Does the simulation preserve the correct probabilities?",
      "How many trials were performed?",
      "How close is the simulated relative frequency to the theoretical value?",
      "What assumptions does the simulation make?",
      "What real-world factors might the simulation be missing?",
    ],
  },
};

export default lesson05;