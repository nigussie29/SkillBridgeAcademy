const lesson04 = {
  id: "probability-m01-l04",
  courseId: "probability-foundations",
  moduleId: "module-01",

  moduleNumber: 1,
  lessonNumber: 4,

  slug: "long-run-relative-frequency",

  title: "Long-Run Relative Frequency",

  shortTitle: "Long-Run Behavior",

  subtitle:
    "Explore how repeated random trials reveal stable probability patterns even when individual outcomes remain unpredictable.",

  status: "Available",

  duration: "55–70 minutes",

  level: "AP Statistics Foundation",

  essentialQuestion:
    "How can repeated random trials produce predictable long-run patterns when individual outcomes remain uncertain?",

  bigIdea:
    "Random processes may behave unpredictably in the short run, but as the number of trials increases, relative frequencies often stabilize near the probabilities predicted by a probability model.",

  whyThisLessonExists: {
    title: "Why This Lesson Exists",

    introduction:
      "Probability is not mainly about predicting one individual outcome. Its power comes from describing patterns that emerge when random processes are repeated many times. Casinos, insurance companies, medical researchers, engineers, scientists, and artificial intelligence systems all depend on long-run patterns rather than guarantees about individual cases.",

    centralProblem:
      "If we cannot predict the next outcome with certainty, how can probability still produce reliable mathematical information?",

    purpose:
      "This lesson develops the connection between theoretical probability and observed relative frequency. Students will investigate how short-run variation differs from long-run stability and why repeated trials are central to probability and statistics.",
  },

  problemFirst: {
    title: "Can 10 Coin Tosses Prove a Coin Is Unfair?",

    scenario:
      "A fair coin is tossed 10 times and lands heads 7 times. A student argues that the coin must be unfair because 70% of the tosses were heads instead of 50%. Another student says that 10 tosses are too few to make that conclusion.",

    questions: [
      "Is 7 heads out of 10 possible for a fair coin?",
      "Does a fair coin have to produce exactly 5 heads in every 10 tosses?",
      "What might happen if the coin were tossed 100 times?",
      "What might happen if it were tossed 10,000 times?",
      "Which matters more when evaluating long-run behavior: one short experiment or many repeated trials?",
    ],

    expectedInsight:
      "A fair probability model does not guarantee exact proportions in small samples. Short-run results may vary considerably. As the number of independent trials increases, the observed relative frequency often becomes more stable and tends to move closer to the theoretical probability.",
  },

  learningObjectives: [
    "Define relative frequency in the context of repeated random trials.",
    "Calculate the relative frequency of an event.",
    "Distinguish theoretical probability from experimental relative frequency.",
    "Explain why short-run random behavior may differ substantially from theoretical probability.",
    "Describe how relative frequency behaves as the number of trials increases.",
    "Interpret long-run probability without claiming that individual outcomes become predictable.",
    "Analyze simulations and experimental data for evidence of stabilization.",
    "Explain why large numbers of trials improve estimates of probability.",
    "Recognize common misconceptions about streaks and random variation.",
    "Connect long-run relative frequency to statistics, science, finance, and artificial intelligence.",
  ],

  prerequisiteKnowledge: [
    "Probability values between 0 and 1",
    "Random processes",
    "Outcomes and events",
    "Sample spaces",
    "Fractions, decimals, and percentages",
    "Lesson 1: Probability as a Mathematical Model of Uncertainty",
    "Lesson 2: Random Processes, Outcomes, and Sample Spaces",
  ],

  vocabulary: [
    {
      term: "Relative Frequency",
      definition:
        "The proportion of trials in which a particular event occurs.",
    },
    {
      term: "Experimental Probability",
      definition:
        "A probability estimate based on observed relative frequency from actual or simulated trials.",
    },
    {
      term: "Theoretical Probability",
      definition:
        "A probability determined from a mathematical model rather than observed trial results.",
    },
    {
      term: "Trial",
      definition:
        "One repetition of a random process.",
    },
    {
      term: "Long-Run Behavior",
      definition:
        "The pattern that becomes visible when a random process is repeated many times.",
    },
    {
      term: "Short-Run Variation",
      definition:
        "Natural fluctuation in observed outcomes when only a limited number of trials are performed.",
    },
    {
      term: "Stabilization",
      definition:
        "The tendency of relative frequency to fluctuate less dramatically as the number of trials grows.",
    },
    {
      term: "Law of Large Numbers",
      definition:
        "The principle that, under appropriate conditions, observed relative frequency tends to approach the theoretical probability as the number of trials becomes very large.",
    },
  ],

  formulas: [
    {
      id: "relative-frequency",

      name: "Relative Frequency",

      formula:
        "relative frequency of A = number of times A occurs ÷ total number of trials",

      meaning:
        "Relative frequency measures the observed proportion of trials in which event A occurred.",
    },

    {
      id: "relative-frequency-symbolic",

      name: "Relative Frequency Notation",

      formula: "f(A) = count(A) / n",

      meaning:
        "If event A occurs count(A) times in n trials, then its observed relative frequency is count(A) divided by n.",
    },

    {
      id: "long-run-relationship",

      name: "Long-Run Relationship",

      formula: "relative frequency of A → P(A) as trials become very large",

      meaning:
        "As the number of trials increases, relative frequency often becomes increasingly close to the theoretical probability.",
    },
  ],

  probabilityScale: [],

  workedExamples: [
    {
      id: "example-04-01",

      title: "Experimental Probability from Coin Tosses",

      problem:
        "A coin is tossed 50 times and lands heads 29 times. Find the relative frequency of heads.",

      solutionSteps: [
        "Identify the number of heads: 29.",
        "Identify the total number of trials: 50.",
        "Divide 29 by 50.",
        "Convert the decimal to a percentage if desired.",
      ],

      answer:
        "29 ÷ 50 = 0.58, or 58%",

      interpretation:
        "The observed relative frequency is 0.58. This does not mean the theoretical probability of heads is 0.58. It is the result observed in this particular experiment.",
    },

    {
      id: "example-04-02",

      title: "Comparing Short and Long Experiments",

      problem:
        "A fair coin produces 7 heads in 10 tosses and 506 heads in 1,000 tosses. Compare the two relative frequencies with the theoretical probability 0.5.",

      solutionSteps: [
        "For 10 tosses: 7 ÷ 10 = 0.70.",
        "For 1,000 tosses: 506 ÷ 1000 = 0.506.",
        "Compare each result with 0.5.",
        "Observe which experiment produced the closer relative frequency.",
      ],

      answer:
        "The 10-toss relative frequency is 0.70. The 1,000-toss relative frequency is 0.506.",

      interpretation:
        "The larger experiment produced a relative frequency much closer to the theoretical probability, illustrating long-run stabilization.",
    },

    {
      id: "example-04-03",

      title: "Rolling a Six-Sided Die",

      problem:
        "A fair die is rolled 600 times. The number 6 appears 94 times. Compare the experimental relative frequency with the theoretical probability.",

      solutionSteps: [
        "The theoretical probability of rolling a 6 is 1/6.",
        "Convert 1/6 to approximately 0.1667.",
        "Calculate the experimental relative frequency: 94 ÷ 600.",
        "Compare the two values.",
      ],

      answer:
        "94 ÷ 600 ≈ 0.1567, while 1/6 ≈ 0.1667.",

      interpretation:
        "The observed relative frequency is close to, but not exactly equal to, the theoretical probability. Random variation remains possible even in large experiments.",
    },

    {
      id: "example-04-04",

      title: "A Basketball Free-Throw Experiment",

      problem:
        "A player makes 81 of 100 free throws. In the next 900 attempts, the player makes 711. Find the overall relative frequency after 1,000 attempts.",

      solutionSteps: [
        "Add successful shots: 81 + 711 = 792.",
        "Add total attempts: 100 + 900 = 1,000.",
        "Calculate 792 ÷ 1,000.",
      ],

      answer:
        "0.792, or 79.2%",

      interpretation:
        "As more attempts are observed, the overall relative frequency gives a more stable description of the player's long-run performance than a small sample alone.",
    },

    {
      id: "example-04-05",

      title: "Does a Streak Change the Next Probability?",

      problem:
        "A fair coin lands tails six times in a row. A student says heads is now more likely on the seventh toss because the results need to balance out.",

      solutionSteps: [
        "Recognize that each fair coin toss is a new trial.",
        "Previous outcomes do not force future outcomes to compensate.",
        "The probability of heads remains 0.5 on the seventh toss.",
        "Long-run stabilization does not require short-run balancing.",
      ],

      answer:
        "The probability of heads remains 0.5.",

      interpretation:
        "The law of large numbers does not mean random processes correct themselves immediately after streaks.",
    },
  ],

  interactiveExploration: {
    title: "Watch Relative Frequency Stabilize",

    description:
      "Perform or simulate repeated coin tosses and observe how the relative frequency of heads changes as more trials are completed.",

    instructions: [
      "Predict the relative frequency of heads after 10 tosses.",
      "Toss a coin 10 times and record the number of heads.",
      "Calculate the relative frequency of heads.",
      "Continue until you have 25 total tosses.",
      "Calculate the new relative frequency.",
      "Continue to 50 tosses.",
      "Continue to 100 tosses.",
      "Record the relative frequency at each checkpoint.",
      "Graph number of trials on the horizontal axis and relative frequency on the vertical axis.",
      "Draw a horizontal reference line at 0.5.",
    ],

    investigationQuestions: [
      "Which checkpoint produced the greatest difference from 0.5?",
      "Did the relative frequency move toward 0.5 smoothly?",
      "Did it ever move away from 0.5 before moving closer again?",
      "How did the size of the fluctuations change as the number of trials increased?",
      "Can the graph tell you what the next toss will be?",
      "What does the graph reveal about long-run behavior?",
    ],

    expectedDiscovery:
      "Relative frequency may fluctuate dramatically when there are few trials. As more trials accumulate, the fluctuations often become smaller and the relative frequency tends to stabilize near the theoretical probability.",
  },

  realWorldApplications: [
    {
      field: "Insurance",

      application:
        "Insurance companies use large collections of historical claims to estimate long-run rates of accidents, illness, property loss, and other uncertain events.",
    },

    {
      field: "Medicine",

      application:
        "Clinical studies use repeated observations across many participants to estimate treatment success rates, side effects, and diagnostic performance.",
    },

    {
      field: "Finance",

      application:
        "Financial risk models use historical and simulated outcomes to estimate default rates, losses, and other long-run risk patterns.",
    },

    {
      field: "Manufacturing",

      application:
        "Quality-control systems monitor defect frequencies across large numbers of manufactured products.",
    },

    {
      field: "Sports",

      application:
        "Player performance percentages become more informative when based on many attempts rather than a very small sample.",
    },

    {
      field: "Artificial Intelligence",

      application:
        "AI systems are evaluated across many examples because performance on a few cases may not represent the model's long-run behavior.",
    },
  ],

  aiConnection: {
    title: "Why AI Models Need Many Observations",

    explanation:
      "An artificial intelligence model may perform extremely well or poorly on a small number of examples simply because of random variation. Evaluating a model across many observations produces more stable estimates of accuracy, error rates, false positives, and other performance measures.",

    example:
      "Suppose an image classifier correctly labels 9 of 10 images. Its observed accuracy is 90%. If it correctly labels 8,240 of 10,000 images, its observed accuracy is 82.4%. The larger evaluation gives much stronger evidence about the model's typical performance.",

    caution:
      "A large number of observations does not automatically guarantee a trustworthy conclusion. The observations must also represent the population and conditions in which the model will actually be used.",

    reflectionQuestion:
      "Why might an AI model's performance on 20 test examples give a misleading impression of its true performance?",
  },

  pythonLab: {
    title: "Simulating Long-Run Relative Frequency",

    objective:
      "Use Python to observe how the relative frequency of heads changes as the number of simulated coin tosses increases.",

    code: `import random

heads = 0

checkpoints = [10, 50, 100, 500, 1000, 5000]

for toss_number in range(1, 5001):
    outcome = random.choice(["H", "T"])

    if outcome == "H":
        heads += 1

    if toss_number in checkpoints:
        relative_frequency = heads / toss_number

        print(
            f"{toss_number} tosses: "
            f"{heads} heads, "
            f"relative frequency = {relative_frequency:.4f}"
        )`,

    questions: [
      "Why will the output change each time the program runs?",
      "Which checkpoint usually shows the greatest fluctuation?",
      "Does the relative frequency become exactly 0.5?",
      "How does the difference from 0.5 usually change as the trial count grows?",
      "Does stabilization allow you to predict the next individual toss?",
    ],

    extension:
      "Modify the program to simulate rolling a six-sided die and track the relative frequency of rolling a 6 over 10,000 trials.",
  },

  guidedPractice: [
    {
      id: "guided-04-01",

      question:
        "An event occurs 18 times in 30 trials. Find its relative frequency.",

      answer:
        "18 ÷ 30 = 0.60",
    },

    {
      id: "guided-04-02",

      question:
        "A spinner lands on blue 47 times in 200 spins. Find the experimental relative frequency of blue.",

      answer:
        "47 ÷ 200 = 0.235, or 23.5%",
    },

    {
      id: "guided-04-03",

      question:
        "A fair coin produces 8 heads in 10 tosses. Does this prove the coin is unfair?",

      answer:
        "No. Short-run random variation can produce results far from 0.5. More evidence would be needed.",
    },

    {
      id: "guided-04-04",

      question:
        "A probability model predicts P(A) = 0.30. After 5,000 trials, event A has occurred 1,487 times. Find the relative frequency.",

      answer:
        "1,487 ÷ 5,000 = 0.2974, which is close to 0.30.",
    },

    {
      id: "guided-04-05",

      question:
        "Explain why relative frequency does not have to become exactly equal to theoretical probability.",

      answer:
        "Random variation continues to occur. Long-run stabilization means relative frequency tends to stay near the theoretical probability, not that exact equality is guaranteed.",
    },
  ],

  independentPractice: [
    {
      id: "practice-04-01",

      difficulty: "Foundation",

      question:
        "A coin is tossed 40 times and produces 17 heads. Calculate the relative frequency of heads.",

      answer:
        "17 ÷ 40 = 0.425, or 42.5%.",
    },

    {
      id: "practice-04-02",

      difficulty: "Foundation",

      question:
        "A die is rolled 120 times and produces a 5 exactly 23 times. Find the relative frequency of rolling a 5.",

      answer:
        "23 ÷ 120 ≈ 0.1917, or about 19.2%.",
    },

    {
      id: "practice-04-03",

      difficulty: "Developing",

      question:
        "A fair coin produces a relative frequency of heads equal to 0.62 after 50 tosses and 0.508 after 2,000 tosses. Explain what the results illustrate.",

      sampleAnswer:
        "The small experiment shows substantial short-run variation, while the larger experiment produces a relative frequency much closer to the theoretical probability of 0.5.",
    },

    {
      id: "practice-04-04",

      difficulty: "Developing",

      question:
        "A simulation predicts an event with probability 0.20. After 10,000 trials the event occurs 1,963 times. Compare the experimental and theoretical values.",

      answer:
        "The experimental relative frequency is 1963 ÷ 10000 = 0.1963, which is close to the theoretical probability 0.20.",
    },

    {
      id: "practice-04-05",

      difficulty: "AP Reasoning",

      question:
        "A student says, 'If the relative frequency is below the theoretical probability, the next few trials must contain more successes so the results can catch up.' Explain why this reasoning is incorrect.",

      sampleAnswer:
        "Long-run stabilization does not force future trials to compensate for previous outcomes. Individual future outcomes remain random according to the probability model.",
    },

    {
      id: "practice-04-06",

      difficulty: "AP Reasoning",

      question:
        "Two studies estimate the same event probability. Study A uses 25 trials and obtains relative frequency 0.68. Study B uses 10,000 trials and obtains relative frequency 0.603. Which result would generally provide stronger evidence about the long-run probability, and why?",

      sampleAnswer:
        "Study B generally provides stronger evidence because its much larger number of trials reduces the influence of short-run random variation and produces a more stable relative frequency.",
    },
  ],

  commonMistakes: [
    {
      mistake:
        "Believing a fair coin must produce exactly 50% heads in every experiment.",

      correction:
        "A probability of 0.5 describes long-run behavior, not an exact requirement for every finite experiment.",
    },

    {
      mistake:
        "Thinking long-run stabilization happens smoothly.",

      correction:
        "Relative frequency can move toward and away from the theoretical probability many times before becoming more stable.",
    },

    {
      mistake:
        "Believing streaks must immediately be followed by opposite outcomes.",

      correction:
        "Random processes do not have to compensate for previous outcomes in the short run.",
    },

    {
      mistake:
        "Confusing theoretical probability with experimental probability.",

      correction:
        "Theoretical probability comes from a model. Experimental probability comes from observed relative frequency.",
    },

    {
      mistake:
        "Believing more trials make the next outcome predictable.",

      correction:
        "More trials improve our understanding of long-run proportions, but individual future outcomes may remain unpredictable.",
    },
  ],

  discussionQuestions: [
    "Why can a fair process produce an unfair-looking short sequence?",
    "What does it mean for relative frequency to stabilize?",
    "Why does stabilization not mean exact equality?",
    "Why do casinos care more about thousands of plays than one individual game?",
    "How does sample size affect our confidence in an observed relative frequency?",
    "What is wrong with saying that randomness must 'balance itself out' immediately?",
    "Why are large test sets important when evaluating artificial intelligence?",
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
          "An event occurs 36 times in 80 trials. Calculate its relative frequency.",

        answer:
          "36 ÷ 80 = 0.45, or 45%.",
      },

      {
        id: "check-04-02",

        type: "concept",

        points: 3,

        prompt:
          "Explain the difference between theoretical probability and experimental relative frequency.",

        sampleAnswer:
          "Theoretical probability comes from a mathematical model. Experimental relative frequency comes from observed outcomes during repeated trials.",
      },

      {
        id: "check-04-03",

        type: "interpretation",

        points: 3,

        prompt:
          "A fair coin produces 15 heads in 20 tosses. Explain why this does not automatically prove that the coin is unfair.",

        sampleAnswer:
          "Small samples can show substantial random variation. A result of 15 heads is possible even when the long-run probability of heads is 0.5.",
      },

      {
        id: "check-04-04",

        type: "reasoning",

        points: 3,

        prompt:
          "Describe what typically happens to relative frequency as the number of trials becomes very large.",

        sampleAnswer:
          "Relative frequency generally becomes more stable and tends to remain closer to the theoretical probability.",
      },

      {
        id: "check-04-05",

        type: "application",

        points: 3,

        prompt:
          "An AI classifier is correct on 19 of 20 test examples. Explain why this is weaker evidence of 95% long-run accuracy than being correct on 9,500 of 10,000 representative test examples.",

        sampleAnswer:
          "The 20-example test is highly affected by random variation. A large representative test set provides a more stable estimate of the model's long-run performance.",
      },
    ],
  },

  researchExtension: {
    title: "Long-Run Patterns in the Real World",

    researchQuestion:
      "How does a real organization use large numbers of observations to estimate the probability of an uncertain event?",

    applicationOptions: [
      "Insurance claims",
      "Medical treatment outcomes",
      "Manufacturing defects",
      "Sports performance",
      "Credit defaults",
      "Weather forecasting",
      "Artificial intelligence accuracy",
    ],

    task:
      "Choose one real-world setting. Identify an uncertain event, explain how its relative frequency could be measured, describe why many observations are important, and identify one limitation of using historical frequency to predict future behavior.",

    requiredEvidence: [
      "Definition of the event",
      "Description of the data or trials",
      "Relative-frequency interpretation",
      "Explanation of why sample size matters",
      "One limitation",
      "One credible source",
    ],
  },

  portfolioArtifact: {
    title: "Long-Run Probability Investigation",

    description:
      "Create a visual investigation showing how relative frequency changes as the number of random trials increases.",

    requiredSections: [
      "Random process",
      "Event being tracked",
      "Theoretical probability",
      "Trial checkpoints",
      "Relative frequency at each checkpoint",
      "Graph of relative frequency versus number of trials",
      "Interpretation of short-run variation",
      "Interpretation of long-run stabilization",
    ],

    requiredEvidence: [
      "At least four trial checkpoints",
      "Correct relative-frequency calculations",
      "One graph",
      "Comparison with theoretical probability",
      "Written conclusion",
    ],
  },

  growthIndicators: [
    "Conceptual Understanding",
    "Statistical Reasoning",
    "Experimental Design",
    "Data Interpretation",
    "Mathematical Communication",
    "Computational Thinking",
    "Long-Run Reasoning",
    "Curiosity and Reflection",
  ],

  reflection: [
    "What surprised you about the behavior of relative frequency?",
    "Why can short-run results differ greatly from theoretical probability?",
    "What does long-run stabilization mean in your own words?",
    "Why does a larger number of trials usually provide a better probability estimate?",
    "Why does long-run behavior not allow us to predict the next individual outcome?",
    "Where do you see long-run relative frequency being useful outside the classroom?",
  ],

  summary: [
    "Relative frequency measures the proportion of trials in which an event occurs.",
    "Experimental probability is based on observed relative frequency.",
    "Theoretical probability comes from a mathematical probability model.",
    "Short-run random results may differ substantially from theoretical probability.",
    "As the number of trials increases, relative frequency often becomes more stable.",
    "Long-run relative frequency tends to approach theoretical probability under appropriate conditions.",
    "Stabilization does not mean exact equality.",
    "Stabilization does not make individual future outcomes predictable.",
    "Random processes do not have to immediately compensate for streaks.",
    "Long-run probability reasoning supports statistics, insurance, medicine, finance, engineering, and artificial intelligence.",
  ],

  previousLesson: {
    id: "probability-m01-l03",
    slug: "events-and-set-notation",
    title: "Events and Set Notation",
  },

  nextLesson: {
    id: "probability-m01-l05",
    slug: "theoretical-models-and-simulation",
    title: "Theoretical Models and Simulation",
  },

  lumineryGuidance: {
    message:
      "Do not judge a random process by one short sequence. Look for the pattern that emerges across many trials.",

    prompt:
      "Compare the observed relative frequency with the theoretical probability, then ask how the difference changes as the number of trials grows.",

    coachingQuestions: [
      "How many trials were performed?",
      "What event are you tracking?",
      "What is the observed relative frequency?",
      "What probability does the theoretical model predict?",
      "Is the difference surprising for this sample size?",
      "What happens when more trials are added?",
      "Are you confusing long-run stabilization with short-run balancing?",
      "Can you predict the next outcome from the long-run pattern?",
    ],
  },
};

export default lesson04;