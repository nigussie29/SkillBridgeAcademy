const lesson01 = {
  id: "probability-m01-l01",
  courseId: "probability-foundations",
  moduleId: "module-01",

  moduleNumber: 1,
  lessonNumber: 1,

  slug: "probability-as-a-model-of-uncertainty",

  title: "Probability as a Mathematical Model of Uncertainty",

  shortTitle: "What Is Probability?",

  subtitle:
    "Discover how mathematics helps us reason carefully when individual outcomes cannot be predicted with certainty.",

  status: "Available",

  duration: "55–70 minutes",

  level: "AP Statistics Foundation",

  essentialQuestion:
    "How can mathematics describe uncertainty without predicting exactly what will happen next?",

  bigIdea:
    "Probability measures long-run patterns in uncertain processes. Individual outcomes may be unpredictable, while repeated outcomes can display stable and measurable behavior.",

  whyThisLessonExists: {
    title: "Why This Lesson Exists",

    introduction:
      "People make decisions every day without knowing exactly what will happen. Weather forecasters predict rain, doctors interpret medical tests, businesses evaluate risk, and artificial intelligence systems assign probabilities to possible outcomes.",

    centralProblem:
      "How can we make responsible decisions when certainty is impossible?",

    purpose:
      "Probability gives us a mathematical language for describing uncertainty, comparing possibilities, building models, and evaluating evidence.",
  },

  problemFirst: {
    title: "What Does an 80% Chance of Rain Mean?",

    scenario:
      "Tomorrow's weather forecast reports an 80% chance of rain. A student concludes that it will rain during exactly 80% of the day. Another student concludes that rain is guaranteed. A third student says the forecast is meaningless because no one can know the future.",

    questions: [
      "Which interpretation seems most reasonable?",
      "Does an 80% probability guarantee that rain will occur?",
      "Could it remain completely dry even when the probability is 80%?",
      "What evidence might a forecasting model use?",
      "How should probability influence a decision about carrying an umbrella?",
    ],

    expectedInsight:
      
  "A probability describes the long-run proportion of times an outcome would occur when a random process is repeated under similar conditions. It does not guarantee what will happen in one individual trial.",
  },

  learningObjectives: [
    "Explain probability as a mathematical model of uncertainty.",
    "Distinguish an uncertain event from an impossible or certain event.",
    "Interpret probability values between 0 and 1.",
    "Represent probability using fractions, decimals, and percentages.",
    "Explain why probability does not guarantee an individual outcome.",
    "Connect probability with long-run relative frequency.",
    "Interpret probability statements accurately in context.",
    "Identify applications of probability in statistics, science, finance, medicine, and artificial intelligence.",
  ],

  prerequisiteKnowledge: [
    "Fractions",
    "Decimals",
    "Percentages",
    "Ratios",
    "Basic interpretation of data",
  ],

  vocabulary: [
    {
      term: "Uncertainty",
      definition:
        "A condition in which the exact outcome is not known in advance.",
    },
    {
      term: "Probability",
      definition:
        "A numerical measure describing how likely an event is to occur.",
    },
    {
      term: "Random Process",
      definition:
        "A repeatable process whose individual outcome cannot be predicted with certainty.",
    },
    {
      term: "Outcome",
      definition:
        "One possible result of a random process.",
    },
    {
      term: "Event",
      definition:
        "A specified outcome or collection of outcomes from a random process.",
    },
    {
      term: "Long-Run Relative Frequency",
      definition:
        "The proportion of trials in which an event occurs after a large number of repetitions.",
    },
    {
      term: "Probability Model",
      definition:
        "A mathematical description of possible outcomes and their associated probabilities.",
    },
  ],

  formulas: [
    {
      id: "probability-range",

      name: "Probability Range",

      formula: "0 ≤ P(A) ≤ 1",

      meaning:
        "The probability of an event A must be between 0 and 1, inclusive.",
    },
    {
      id: "relative-frequency",

      name: "Experimental Relative Frequency",

      formula:
        "relative frequency of A = number of times A occurs ÷ total number of trials",

      meaning:
        "Relative frequency measures how often an event occurred during an experiment.",
    },
    {
      id: "percent-conversion",

      name: "Probability as a Percentage",

      formula: "percentage probability = decimal probability × 100%",

      meaning:
        "The same probability can be represented as a fraction, decimal, or percentage.",
    },
  ],

  probabilityScale: [
    {
      value: 0,
      label: "Impossible",
      example: "Rolling a 7 on a standard six-sided die.",
    },
    {
      value: 0.25,
      label: "Unlikely",
      example: "An event that occurs about one-fourth of the time.",
    },
    {
      value: 0.5,
      label: "Equally likely",
      example: "Getting heads on a fair coin toss.",
    },
    {
      value: 0.75,
      label: "Likely",
      example: "An event that occurs about three-fourths of the time.",
    },
    {
      value: 1,
      label: "Certain",
      example: "Rolling a number from 1 through 6 on a standard die.",
    },
  ],

  workedExamples: [
    {
      id: "example-01-01",

      title: "Interpreting a Weather Probability",

      problem:
        "A weather service reports a 70% probability of rain. Does this mean rain is guaranteed?",

      solutionSteps: [
        "Convert 70% to a decimal: 0.70.",
        "Recognize that 0.70 is less than 1.",
        "A probability below 1 does not represent certainty.",
        "The forecast indicates that rain is considered likely, but a dry outcome remains possible.",
      ],

      answer:
        "No. Rain is likely according to the model, but it is not guaranteed.",

      interpretation:
        "Probability communicates uncertainty. A high probability can still be followed by an outcome that does not occur.",
    },

    {
      id: "example-01-02",

      title: "Locating an Event on the Probability Scale",

      problem:
        "A fair coin is tossed. The probability of heads is 0.5. How should this probability be interpreted?",

      solutionSteps: [
        "The value 0.5 lies halfway between 0 and 1.",
        "Heads and tails have equal probability in the fair-coin model.",
        "This does not mean every two tosses must contain exactly one head.",
      ],

      answer:
        "Heads and tails are equally likely on each toss.",

      interpretation:
        "Over many tosses, the proportion of heads should tend to move toward 0.5, even though short sequences may be uneven.",
    },

    {
      id: "example-01-03",

      title: "Impossible and Certain Events",

      problem:
        "Classify each event for a standard six-sided die: rolling an 8 and rolling a number less than 7.",

      solutionSteps: [
        "The possible die values are 1, 2, 3, 4, 5, and 6.",
        "Rolling an 8 is outside the possible outcomes.",
        "Every possible result is less than 7.",
      ],

      answer:
        "Rolling an 8 is impossible, with probability 0. Rolling a number less than 7 is certain, with probability 1.",
    },

    {
      id: "example-01-04",

      title: "Experimental Probability",

      problem:
        "A coin is tossed 50 times and lands heads 29 times. What is the observed relative frequency of heads?",

      solutionSteps: [
        "Use heads divided by total tosses.",
        "Calculate 29 ÷ 50 = 0.58.",
        "Convert the decimal to a percentage: 58%.",
      ],

      answer: "0.58, or 58%",

      interpretation:
        "The experimental result differs from 0.5. This difference is reasonable in a finite number of trials.",
    },
  ],

  interactiveExploration: {
    title: "Predict, Toss, and Observe",

    instructions: [
      "Predict how many heads will occur in 10 coin tosses.",
      "Toss a coin 10 times and record the outcomes.",
      "Calculate the relative frequency of heads.",
      "Continue until you have 50 total tosses.",
      "Recalculate the relative frequency.",
      "Compare the results after 10 tosses and 50 tosses.",
    ],

    investigationQuestions: [
      "Did your experimental result match your prediction?",
      "Was the relative frequency exactly 0.5?",
      "Did the relative frequency become more stable as the number of trials increased?",
      "Can the next individual toss be predicted with certainty?",
      "What long-run pattern do you expect?",
    ],

    expectedDiscovery:
      "Short sequences can vary substantially. As the number of trials increases, relative frequencies often become more stable and move closer to the probability predicted by the model.",
  },

  realWorldApplications: [
    {
      field: "Weather Forecasting",
      application:
        "Forecasting models estimate the probability of rain, storms, extreme temperatures, and other conditions.",
    },
    {
      field: "Medicine",
      application:
        "Probability helps interpret screening tests, treatment outcomes, disease risks, and clinical evidence.",
    },
    {
      field: "Finance",
      application:
        "Investors and financial institutions use probability to model uncertainty, loss, default, and market risk.",
    },
    {
      field: "Insurance",
      application:
        "Insurance companies estimate the likelihood and expected cost of uncertain events.",
    },
    {
      field: "Engineering",
      application:
        "Engineers evaluate failure probabilities, reliability, and safety.",
    },
    {
      field: "Artificial Intelligence",
      application:
        "AI systems assign probabilities to predictions such as spam detection, image classification, and language generation.",
    },
  ],

  aiConnection: {
    title: "How Artificial Intelligence Uses Probability",

    explanation:
      "Many AI systems do not simply return yes or no. They calculate scores or probabilities for several possible outcomes and select or rank predictions using those values.",

    example:
      "An email classifier may assign a 0.96 probability to spam and a 0.04 probability to legitimate email.",

    caution:
      "A high predicted probability does not prove that a prediction is correct. The result depends on the data, model assumptions, training process, and quality of evidence.",

    reflectionQuestion:
      "Should an AI system be allowed to make an important decision using probability alone? Explain what additional evidence or human oversight may be needed.",
  },

  pythonLab: {
    title: "Simulating Coin Tosses with Python",

    objective:
      "Observe how experimental relative frequency changes as the number of trials increases.",

    code: `import random

def simulate_coin_tosses(number_of_tosses):
    if number_of_tosses <= 0:
        raise ValueError("The number of tosses must be positive.")

    heads_count = 0

    for _ in range(number_of_tosses):
        outcome = random.choice(["Heads", "Tails"])

        if outcome == "Heads":
            heads_count += 1

    relative_frequency = heads_count / number_of_tosses

    return heads_count, relative_frequency


trial_sizes = [10, 50, 100, 1000]

for trial_size in trial_sizes:
    heads, frequency = simulate_coin_tosses(trial_size)

    print(
        f"{trial_size} tosses: "
        f"{heads} heads, "
        f"relative frequency = {frequency:.3f}"
    )`,

    questions: [
      "Why does the program produce different results when it runs again?",
      "Which trial size usually produces the most stable relative frequency?",
      "Does a simulation prove that the probability of heads is exactly 0.5?",
      "How could you modify the simulation to represent an unfair coin?",
    ],

    extension:
      "Repeat the 100-toss simulation 20 times. Record the relative frequency from each simulation and describe the variation.",
  },

  guidedPractice: [
    {
      id: "guided-01-01",

      question:
        "Write 35% as a decimal probability.",

      answer: "0.35",
    },
    {
      id: "guided-01-02",

      question:
        "Write 0.72 as a percentage probability.",

      answer: "72%",
    },
    {
      id: "guided-01-03",

      question:
        "Classify a probability of 0 as impossible, unlikely, likely, or certain.",

      answer: "Impossible",
    },
    {
      id: "guided-01-04",

      question:
        "A basketball player has a 0.90 estimated probability of making a free throw. Is a successful shot guaranteed?",

      answer:
        "No. The shot is considered highly likely, but failure remains possible.",
    },
    {
      id: "guided-01-05",

      question:
        "An event occurred 42 times in 60 trials. Find its experimental relative frequency.",

      answer: "42 ÷ 60 = 0.70, or 70%",
    },
  ],

  independentPractice: [
    {
      id: "practice-01-01",

      difficulty: "Foundation",

      question:
        "Represent the probability 3/4 as a decimal and percentage.",

      answer: "0.75 and 75%",
    },
    {
      id: "practice-01-02",

      difficulty: "Foundation",

      question:
        "Give one example of an impossible event involving a standard deck of playing cards.",

      sampleAnswer:
        "Drawing a card numbered 15 is impossible in a standard deck.",
    },
    {
      id: "practice-01-03",

      difficulty: "Developing",

      question:
        "A spinner is used 80 times and lands on blue 18 times. Calculate the experimental relative frequency of blue.",

      answer: "18 ÷ 80 = 0.225, or 22.5%",
    },
    {
      id: "practice-01-04",

      difficulty: "Developing",

      question:
        "Explain why a probability of 0.95 does not mean an event must occur.",

      sampleAnswer:
        "A probability of 0.95 indicates a very likely event, but any probability below 1 still permits the event not to occur.",
    },
    {
      id: "practice-01-05",

      difficulty: "Challenge",

      question:
        "A fair coin produces tails six times in a row. Is heads now guaranteed on the seventh toss? Explain.",

      sampleAnswer:
        "No. For independent fair-coin tosses, the probability of heads remains 0.5. Previous outcomes do not guarantee the next result.",
    },
    {
      id: "practice-01-06",

      difficulty: "AP Reasoning",

      question:
        "A company states that a system is correct 98% of the time. Explain why this statement is incomplete without additional context.",

      sampleAnswer:
        "The statement does not identify the population, testing conditions, sample size, type of errors, or whether the data represent future cases.",
    },
  ],

  commonMistakes: [
    {
      mistake:
        "Believing that a high probability guarantees an outcome.",

      correction:
        "Only a probability of 1 represents certainty within the stated probability model.",
    },
    {
      mistake:
        "Believing that probability predicts the exact next outcome.",

      correction:
        "Probability describes uncertainty and long-run behavior, not the guaranteed result of one trial.",
    },
    {
      mistake:
        "Assuming that a probability of 0.5 requires outcomes to alternate perfectly.",

      correction:
        "A fair process can produce streaks and uneven short-term results.",
    },
    {
      mistake:
        "Confusing theoretical probability with experimental relative frequency.",

      correction:
        "Theoretical probability comes from a model. Experimental relative frequency comes from observed trials.",
    },
    {
      mistake:
        "Using probabilities below 0 or above 1.",

      correction:
        "Every valid probability must satisfy 0 ≤ P(A) ≤ 1.",
    },
  ],

  discussionQuestions: [
    "Can an unlikely event still occur?",
    "Can a likely event fail to occur?",
    "Why do people sometimes misunderstand weather probabilities?",
    "What is the difference between uncertainty and complete ignorance?",
    "When should probability influence a real-world decision?",
    "What responsibilities should accompany probability-based AI predictions?",
  ],

  formativeAssessment: {
    totalPoints: 15,

    passingScore: 12,

    questions: [
      {
        id: "check-01-01",

        type: "concept",

        points: 3,

        prompt:
          "State the possible range of values for a probability.",

        answer: "A probability must be between 0 and 1, inclusive.",
      },
      {
        id: "check-01-02",

        type: "interpretation",

        points: 3,

        prompt:
          "A model assigns an event a probability of 0.82. Explain the meaning without claiming certainty.",

        sampleAnswer:
          "The event is considered likely according to the model, but it is not guaranteed to occur.",
      },
      {
        id: "check-01-03",

        type: "calculation",

        points: 3,

        prompt:
          "An event occurs 36 times in 45 trials. Calculate its experimental relative frequency.",

        answer: "36 ÷ 45 = 0.80, or 80%",
      },
      {
        id: "check-01-04",

        type: "reasoning",

        points: 3,

        prompt:
          "Explain why ten coin tosses may not contain exactly five heads, even for a fair coin.",

        sampleAnswer:
          "Probability describes long-run behavior. Random variation can produce an uneven result in a small number of tosses.",
      },
      {
        id: "check-01-05",

        type: "application",

        points: 3,

        prompt:
          "Give one example of how probability supports decision-making in medicine, finance, engineering, weather, or AI.",

        sampleAnswer:
          "A doctor may use disease prevalence and test accuracy to evaluate how strongly a test result supports a diagnosis.",
      },
    ],
  },

  researchExtension: {
    title: "Investigating a Probability Statement",

    researchQuestion:
      "How is probability communicated in a real-world forecast, prediction, risk estimate, or scientific claim?",

    applicationOptions: [
      "Weather forecast",
      "Medical screening result",
      "Sports prediction",
      "Insurance risk",
      "Financial default risk",
      "Artificial intelligence classification",
    ],

    task:
      "Select one real probability statement. Explain what it means, identify what it does not guarantee, describe the evidence that may support it, and identify one possible source of error.",

    requiredEvidence: [
      "The original probability statement",
      "Context and population",
      "Interpretation",
      "Limitations",
      "Decision that might use the probability",
      "One credible source",
    ],
  },

  portfolioArtifact: {
    title: "Probability in the Real World",

    description:
      "Create a one-page visual explanation of a real probability statement and how it should be interpreted.",

    requiredSections: [
      "Real-world context",
      "Probability statement",
      "Decimal, fraction, or percentage representation",
      "Correct interpretation",
      "What the statement does not guarantee",
      "Decision-making implication",
      "Reflection",
    ],

    requiredEvidence: [
      "One probability value",
      "One visual probability scale",
      "One clear contextual interpretation",
      "One identified limitation",
      "One source",
    ],
  },

  growthIndicators: [
    "Conceptual Understanding",
    "Mathematical Reasoning",
    "Statistical Communication",
    "Interpretation in Context",
    "Curiosity and Reflection",
  ],

  reflection: [
    "How would you explain probability to someone who has never studied it?",
    "Why is probability different from certainty?",
    "What did the coin experiment teach you about short-run variation?",
    "Where do you encounter probability in everyday life?",
    "How can probability support a decision without making the decision for us?",
  ],

  summary: [
    "Probability is a mathematical measure of uncertainty.",
    "Every probability lies between 0 and 1, inclusive.",
    "A probability of 0 represents an impossible event within the model.",
    "A probability of 1 represents a certain event within the model.",
    "Probabilities between 0 and 1 represent different degrees of likelihood.",
    "High probability does not guarantee an individual outcome.",
    "Random processes may be unpredictable in the short run.",
    "Long-run relative frequencies often become more stable as trials increase.",
    "Probability supports decision-making in statistics, science, medicine, finance, engineering, and AI.",
  ],

  previousLesson: null,

  nextLesson: {
    id: "probability-m01-l02",
    slug: "random-processes-outcomes-and-sample-spaces",
    title: "Random Processes, Outcomes, and Sample Spaces",
  },

  lumineryGuidance: {
    message:
      "Probability does not remove uncertainty. It gives you a disciplined way to reason within uncertainty.",

    prompt:
      "Before interpreting a probability, identify the event, the context, the model or evidence, and what the probability does not guarantee.",

    coachingQuestions: [
      "What exactly is the uncertain event?",
      "What would probability 0 mean in this context?",
      "What would probability 1 mean?",
      "Are you describing one outcome or long-run behavior?",
      "What evidence supports the probability value?",
    ],
  },
};

export default lesson01;