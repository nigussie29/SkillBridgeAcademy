const lesson06 = {
  id: "probability-m01-l06",
  courseId: "probability-foundations",
  moduleId: "module-01",

  moduleNumber: 1,
  lessonNumber: 6,

  slug: "interpreting-probability-in-context",

  title: "Interpreting Probability in Context",

  shortTitle: "Probability in Context",

  subtitle:
    "Learn how to translate probability values into accurate real-world statements without overstating what the numbers guarantee.",

  status: "Available",

  duration: "55–70 minutes",

  level: "AP Statistics Foundation",

  essentialQuestion:
    "How can we interpret a probability statement accurately without confusing likelihood with certainty?",

  bigIdea:
    "A probability value only becomes meaningful when it is interpreted within the context of a clearly defined event, population, model, and time frame.",

  whyThisLessonExists: {
    title: "Why This Lesson Exists",

    introduction:
      "Probabilities appear everywhere: weather forecasts, medical tests, credit-risk models, insurance decisions, election forecasts, sports predictions, engineering reliability reports, and artificial intelligence systems. A number such as 0.80 may look simple, but interpreting it incorrectly can lead to poor decisions.",

    centralProblem:
      "What does a probability actually tell us about a real-world situation, and what does it not tell us?",

    purpose:
      "This lesson develops the statistical language needed to interpret probability statements precisely. Students learn to identify the event being measured, distinguish probability from certainty, recognize the importance of context, and evaluate claims made from probability models.",
  },

  problemFirst: {
    title: "What Does an 80% Chance of Rain Really Mean?",

    scenario:
      "A weather forecast reports an 80% probability of rain tomorrow. One student says it means rain will fall for 80% of the day. Another says it means 80% of the city will receive rain. A third says rain is guaranteed because 80% is very high.",

    questions: [
      "Which interpretation, if any, is correct?",
      "What event is the weather service assigning probability to?",
      "Does 80% guarantee rain tomorrow?",
      "Could tomorrow remain completely dry?",
      "What information about the forecasting model or geographic area would help interpret the statement correctly?",
      "Why can the same number mean different things in different contexts?",
    ],

    expectedInsight:
      "A probability must be interpreted in relation to a clearly defined event and model. An 80% probability indicates that the event is considered likely under the forecasting model, but it does not mean rain is guaranteed, nor does it automatically describe duration or geographic coverage.",
  },

  learningObjectives: [
    "Interpret probability values using precise contextual language.",
    "Identify the event associated with a probability statement.",
    "Distinguish probability from certainty.",
    "Explain why high probability does not guarantee an individual outcome.",
    "Explain why low probability does not make an outcome impossible.",
    "Recognize when a probability statement lacks sufficient context.",
    "Evaluate misleading or incomplete probability claims.",
    "Interpret probability statements involving risk, forecasts, classification, and reliability.",
    "Communicate probability conclusions using AP Statistics–appropriate language.",
    "Explain how model assumptions affect interpretation.",
  ],

  prerequisiteKnowledge: [
    "Probability values between 0 and 1",
    "Events and sample spaces",
    "Relative frequency",
    "Long-run probability",
    "Theoretical models",
    "Simulation",
    "Lesson 5: Theoretical Models and Simulation",
  ],

  vocabulary: [
    {
      term: "Context",
      definition:
        "The real-world setting, population, time frame, conditions, and event associated with a probability statement.",
    },
    {
      term: "Risk",
      definition:
        "The probability of an undesirable or harmful event occurring within a defined context.",
    },
    {
      term: "Forecast",
      definition:
        "A prediction about a future event based on data, models, and assumptions.",
    },
    {
      term: "Probability Statement",
      definition:
        "A statement assigning a numerical likelihood to a clearly defined event.",
    },
    {
      term: "Model Assumption",
      definition:
        "A condition accepted when constructing or applying a probability model.",
    },
    {
      term: "Uncertainty",
      definition:
        "The condition in which the exact future outcome is not known with certainty.",
    },
    {
      term: "Calibration",
      definition:
        "The degree to which predicted probabilities agree with observed long-run frequencies.",
    },
    {
      term: "Conditional Interpretation",
      definition:
        "An interpretation that recognizes that a probability may apply only under particular conditions or given information.",
    },
  ],

  formulas: [
    {
      id: "probability-range",

      name: "Probability Range",

      formula: "0 ≤ P(A) ≤ 1",

      meaning:
        "Every valid probability lies between 0 and 1, inclusive.",
    },

    {
      id: "percentage-conversion",

      name: "Probability as a Percentage",

      formula: "percentage = probability × 100%",

      meaning:
        "A probability such as 0.72 can also be expressed as 72%.",
    },

    {
      id: "complement-rule",

      name: "Complement Interpretation",

      formula: "P(Aᶜ) = 1 - P(A)",

      meaning:
        "The probability that event A does not occur equals one minus the probability that it occurs.",
    },

    {
      id: "odds-not-guarantee",

      name: "Probability Is Not Certainty",

      formula: "P(A) < 1 ⇒ A is not guaranteed",

      meaning:
        "Any probability less than 1 leaves some possibility that the event will not occur.",
    },
  ],

  probabilityScale: [
    {
      value: 0,
      label: "Impossible",
      example:
        "An event assigned probability 0 within the stated model.",
    },
    {
      value: 0.25,
      label: "Unlikely",
      example:
        "An event that occurs about one-fourth of the time under similar conditions.",
    },
    {
      value: 0.5,
      label: "Equally likely",
      example:
        "An event with the same modeled probability of occurring as not occurring.",
    },
    {
      value: 0.75,
      label: "Likely",
      example:
        "An event expected to occur more often than not under similar conditions.",
    },
    {
      value: 1,
      label: "Certain",
      example:
        "An event that must occur within the stated probability model.",
    },
  ],

  workedExamples: [
    {
      id: "example-06-01",

      title: "Interpreting a Weather Forecast",

      problem:
        "A weather model assigns a 0.70 probability of rain tomorrow. Write a statistically responsible interpretation.",

      solutionSteps: [
        "Identify the event: rain occurring tomorrow under the forecast definition.",
        "Convert 0.70 to 70% if desired.",
        "Recognize that 0.70 is less than 1.",
        "Avoid language implying certainty.",
      ],

      answer:
        "According to the forecasting model, rain is considered likely tomorrow, with an estimated probability of 70%, but rain is not guaranteed.",

      interpretation:
        "The probability expresses modeled uncertainty about the event. It does not automatically describe how long it will rain or how much rain will fall.",
    },

    {
      id: "example-06-02",

      title: "Interpreting Medical Risk",

      problem:
        "A study reports that a patient group has a 0.08 probability of developing a particular condition within five years. Interpret the statement.",

      solutionSteps: [
        "Identify the population: the patient group described by the study.",
        "Identify the event: developing the condition.",
        "Identify the time frame: five years.",
        "Convert 0.08 to 8%.",
        "Avoid interpreting the value as a prediction about one specific person without additional information.",
      ],

      answer:
        "For people represented by the study population, the estimated probability of developing the condition within five years is 8%.",

      interpretation:
        "The probability describes risk for the modeled population and conditions. It does not guarantee what will happen to any individual person.",
    },

    {
      id: "example-06-03",

      title: "Credit Default Probability",

      problem:
        "A financial model assigns a borrower a predicted default probability of 0.12. What does this number mean?",

      solutionSteps: [
        "Identify the event: default under the model's definition.",
        "Convert 0.12 to 12%.",
        "Recognize that 12% is neither certainty nor impossibility.",
        "Remember that the prediction depends on the model and available data.",
      ],

      answer:
        "The model estimates a 12% probability that the borrower will default under the conditions represented by the model.",

      interpretation:
        "The borrower could still repay or default. The probability summarizes modeled uncertainty rather than determining the outcome.",
    },

    {
      id: "example-06-04",

      title: "Engineering Reliability",

      problem:
        "An engineered component has a stated reliability of 0.995 for one year. Interpret this probability and its complement.",

      solutionSteps: [
        "Reliability 0.995 means probability of successful operation is 99.5%.",
        "Calculate the complement: 1 - 0.995 = 0.005.",
        "Convert 0.005 to 0.5%.",
      ],

      answer:
        "The model assigns a 99.5% probability that the component operates successfully for one year and a 0.5% probability of failure during that period.",

      interpretation:
        "High reliability does not mean failure is impossible.",
    },

    {
      id: "example-06-05",

      title: "AI Classification Probability",

      problem:
        "An AI image classifier assigns probabilities cat = 0.82, dog = 0.13, and bird = 0.05. Interpret the result.",

      solutionSteps: [
        "Identify the classes considered by the model.",
        "Recognize that cat has the highest assigned probability.",
        "Do not interpret 0.82 as proof that the image is a cat.",
        "Consider the limitations of the model and available categories.",
      ],

      answer:
        "The model considers 'cat' the most likely of the listed classes, assigning it probability 0.82, but the classification is not certain.",

      interpretation:
        "The probability represents the model's prediction under its training, assumptions, and available classes.",
    },
  ],

  interactiveExploration: {
    title: "Interpret the Probability Statement",

    description:
      "Examine several probability claims and decide whether each interpretation is responsible, incomplete, or misleading.",

    instructions: [
      "Read each probability statement carefully.",
      "Identify the event being assigned probability.",
      "Identify the population or system involved.",
      "Identify any stated time period.",
      "Decide what the probability does imply.",
      "Decide what it does not imply.",
      "Rewrite any misleading interpretation using precise statistical language.",
    ],

    investigationQuestions: [
      "Is the event clearly defined?",
      "Is the population clearly identified?",
      "Is a time frame included when needed?",
      "Does the statement confuse high probability with certainty?",
      "Does it confuse low probability with impossibility?",
      "Does it depend on a probability model?",
      "What assumptions might influence the probability?",
    ],

    expectedDiscovery:
      "Probability values cannot be interpreted correctly without context. Responsible interpretation identifies the event, relevant conditions, population or system, and uncertainty while avoiding claims of certainty that the probability does not support.",
  },

  realWorldApplications: [
    {
      field: "Weather Forecasting",

      application:
        "Meteorologists communicate probabilities of rain, storms, snow, heat, and other events while preserving uncertainty.",
    },

    {
      field: "Medicine",

      application:
        "Doctors and researchers interpret probabilities involving disease risk, treatment effectiveness, complications, and diagnostic evidence.",
    },

    {
      field: "Finance",

      application:
        "Financial institutions interpret probabilities of default, market loss, fraud, and other uncertain outcomes.",
    },

    {
      field: "Insurance",

      application:
        "Insurers use probability estimates to evaluate accident, illness, property, and liability risks.",
    },

    {
      field: "Engineering",

      application:
        "Reliability probabilities communicate the likelihood of successful operation or system failure.",
    },

    {
      field: "Artificial Intelligence",

      application:
        "AI systems frequently output prediction probabilities that must be interpreted carefully before decisions are made.",
    },
  ],

  aiConnection: {
    title: "How Should We Interpret AI Probabilities?",

    explanation:
      "Modern artificial intelligence systems often produce probability-like scores for possible outcomes. These values can support decisions, but they should not automatically be treated as certainty, truth, or complete knowledge.",

    example:
      "A fraud-detection model may assign a transaction a 0.91 probability of fraud. That does not prove fraud occurred. It indicates that, according to the model and its inputs, the transaction strongly resembles cases associated with fraud.",

    caution:
      "AI probabilities depend on training data, model design, calibration, thresholds, and whether future cases resemble the data used to develop the system.",

    reflectionQuestion:
      "Should an AI model be allowed to deny a loan, reject a job applicant, or make a medical decision based only on a probability score? Explain.",
  },

  pythonLab: {
    title: "Python Lab: Interpreting Prediction Probabilities",

    objective:
      "Use Python to classify probability values into broad likelihood descriptions while recognizing that the labels do not remove uncertainty.",

    code: `def interpret_probability(probability):
    if probability < 0 or probability > 1:
        return "Invalid probability"

    if probability == 0:
        return "Impossible within the model"

    if probability < 0.25:
        return "Very unlikely"

    if probability < 0.5:
        return "Unlikely"

    if probability == 0.5:
        return "Equally likely"

    if probability < 0.75:
        return "Likely"

    if probability < 1:
        return "Very likely"

    return "Certain within the model"


probabilities = [0, 0.08, 0.35, 0.50, 0.72, 0.91, 1]

for probability in probabilities:
    print(
        probability,
        "->",
        interpret_probability(probability)
    )`,

    questions: [
      "Why does the function reject probabilities below 0 or above 1?",
      "Why does a probability of 0.91 still not mean certainty?",
      "How are the descriptive labels partly subjective?",
      "Would the same probability have the same practical meaning in weather, medicine, and finance?",
      "Why is context still necessary even after the program assigns a likelihood category?",
    ],

    extension:
      "Modify the program so that it prints both the probability of the event and the probability of its complement.",
  },

  guidedPractice: [
    {
      id: "guided-06-01",

      question:
        "A forecast reports a 0.65 probability of snow. Is snow guaranteed?",

      answer:
        "No. A probability of 0.65 means snow is considered more likely than not under the model, but it is not guaranteed.",
    },

    {
      id: "guided-06-02",

      question:
        "A machine has probability 0.02 of failure during a particular operating period. Find the probability that it does not fail.",

      answer:
        "1 - 0.02 = 0.98.",
    },

    {
      id: "guided-06-03",

      question:
        "A medical claim states, 'You have a 10% risk.' What important contextual information might be missing?",

      answer:
        "The event, time frame, population, conditions, and basis of the estimate may all be needed for correct interpretation.",
    },

    {
      id: "guided-06-04",

      question:
        "An AI system gives a prediction probability of 0.97. Explain why the output should not automatically be described as proven correct.",

      answer:
        "A high model probability still contains uncertainty and depends on model quality, data, assumptions, and calibration.",
    },

    {
      id: "guided-06-05",

      question:
        "An event has probability 0.04. Is the event impossible?",

      answer:
        "No. A probability of 0.04 represents an unlikely event, but the event can still occur.",
    },
  ],

  independentPractice: [
    {
      id: "practice-06-01",

      difficulty: "Foundation",

      question:
        "Write 0.73 as a percentage and describe it without claiming certainty.",

      answer:
        "73%. The event is considered likely under the probability model, but it is not certain.",
    },

    {
      id: "practice-06-02",

      difficulty: "Foundation",

      question:
        "An event has probability 0.18. Find the probability that the event does not occur.",

      answer:
        "1 - 0.18 = 0.82.",
    },

    {
      id: "practice-06-03",

      difficulty: "Developing",

      question:
        "A company reports that a product has a 95% probability of operating successfully for one year. Explain what the statement does and does not imply.",

      sampleAnswer:
        "The statement indicates that successful one-year operation is highly likely under the company's probability model. It does not guarantee that any individual product will operate successfully.",
    },

    {
      id: "practice-06-04",

      difficulty: "Developing",

      question:
        "A sports model gives Team A a 70% probability of winning. Team A loses. Does the loss prove the model was wrong? Explain.",

      sampleAnswer:
        "No. A 70% probability still allows a 30% probability of losing. One result alone does not determine whether the model is well calibrated.",
    },

    {
      id: "practice-06-05",

      difficulty: "AP Reasoning",

      question:
        "A hospital website states that a treatment has a 90% success rate. Identify at least three questions you would ask before interpreting the probability.",

      sampleAnswer:
        "Questions could include: What counts as success? Which patients were studied? Over what time period? How large was the sample? Were there important differences between the study patients and the current patient?",
    },

    {
      id: "practice-06-06",

      difficulty: "AP Reasoning",

      question:
        "A credit model assigns Applicant A a default probability of 0.08 and Applicant B a probability of 0.12. Explain why this information alone may be insufficient for an important lending decision.",

      sampleAnswer:
        "The model may have limitations, uncertainty, bias, calibration problems, missing information, or assumptions that do not apply equally to both applicants. Probability scores should be interpreted within a broader decision process.",
    },
  ],

  commonMistakes: [
    {
      mistake:
        "Treating a high probability as a guarantee.",

      correction:
        "Any probability below 1 leaves some modeled possibility that the event will not occur.",
    },

    {
      mistake:
        "Treating a low probability as impossible.",

      correction:
        "An event with probability greater than 0 may still occur.",
    },

    {
      mistake:
        "Interpreting a probability without identifying the event.",

      correction:
        "Always state exactly what event the probability refers to.",
    },

    {
      mistake:
        "Ignoring the population or time frame.",

      correction:
        "Many probability statements apply only to a particular population, situation, or period.",
    },

    {
      mistake:
        "Assuming a model-generated probability is objective truth.",

      correction:
        "Probability estimates depend on data, assumptions, modeling choices, and uncertainty.",
    },
  ],

  discussionQuestions: [
    "Why is context necessary for interpreting probability?",
    "Can an event with probability 0.95 fail to occur?",
    "Can an event with probability 0.01 occur?",
    "What makes a probability statement misleading?",
    "Why should risk always include a time frame when appropriate?",
    "How can poorly communicated probabilities affect medical or financial decisions?",
    "What responsibilities should organizations have when communicating AI-generated probabilities?",
  ],

  formativeAssessment: {
    totalPoints: 15,

    passingScore: 12,

    questions: [
      {
        id: "check-06-01",

        type: "concept",

        points: 3,

        prompt:
          "Explain why a probability of 0.85 does not guarantee that an event will occur.",

        answer:
          "Because 0.85 is less than 1. The event is considered likely, but there remains probability 0.15 that it will not occur.",
      },

      {
        id: "check-06-02",

        type: "calculation",

        points: 3,

        prompt:
          "An event has probability 0.37. Find the probability of its complement.",

        answer:
          "1 - 0.37 = 0.63.",
      },

      {
        id: "check-06-03",

        type: "interpretation",

        points: 3,

        prompt:
          "A model predicts a 20% probability of equipment failure within one year. Write a responsible interpretation.",

        sampleAnswer:
          "According to the model, the estimated probability that the equipment fails within one year is 20%, so failure is possible but not expected in most comparable cases.",
      },

      {
        id: "check-06-04",

        type: "critique",

        points: 3,

        prompt:
          "Explain what is incomplete about the statement, 'Your risk is 30%.'",

        sampleAnswer:
          "The statement does not identify the event, population, time frame, conditions, or basis for the probability estimate.",
      },

      {
        id: "check-06-05",

        type: "application",

        points: 3,

        prompt:
          "An AI system assigns a 0.94 probability that an email is spam. Explain what the value means and one reason the classification could still be wrong.",

        sampleAnswer:
          "The model considers spam highly likely based on its data and algorithm, but the email could still be legitimate because probability is not certainty and the model may make errors.",
      },
    ],
  },

  researchExtension: {
    title: "Investigating Probability Communication",

    researchQuestion:
      "How is probability communicated to the public in a real forecast, risk estimate, or prediction system?",

    applicationOptions: [
      "Weather forecast",
      "Medical risk",
      "Insurance",
      "Sports prediction",
      "Credit risk",
      "Engineering reliability",
      "Artificial intelligence",
    ],

    task:
      "Find a real probability statement. Identify the event, population or system, time frame, probability value, source of the estimate, and any important limitations. Evaluate whether the probability is communicated responsibly.",

    requiredEvidence: [
      "Original probability statement",
      "Clearly identified event",
      "Population or system",
      "Time frame when relevant",
      "Probability interpretation",
      "One limitation or assumption",
      "One credible source",
    ],
  },

  portfolioArtifact: {
    title: "Probability Communication Audit",

    description:
      "Create a one-page analysis of a real-world probability statement and evaluate whether it communicates uncertainty clearly and responsibly.",

    requiredSections: [
      "Original probability claim",
      "Context",
      "Event",
      "Population or system",
      "Time frame",
      "Correct interpretation",
      "What the claim does not guarantee",
      "Model assumptions or limitations",
      "Improved rewritten statement",
    ],

    requiredEvidence: [
      "One real probability value",
      "One credible source",
      "Correct contextual interpretation",
      "One identified limitation",
      "One rewritten probability statement",
    ],
  },

  growthIndicators: [
    "Conceptual Understanding",
    "Statistical Communication",
    "Interpretation in Context",
    "Risk Reasoning",
    "Model Awareness",
    "Critical Thinking",
    "Mathematical Communication",
    "Responsible Decision-Making",
  ],

  reflection: [
    "Why is a probability value meaningless without knowing what event it describes?",
    "How is likelihood different from certainty?",
    "Why can an unlikely event still occur?",
    "What information should accompany a medical or financial risk probability?",
    "Why should AI probability scores be interpreted carefully?",
    "How can better probability communication improve decision-making?",
  ],

  summary: [
    "Probability must always be interpreted in context.",
    "A probability statement should clearly identify the event being measured.",
    "Population, conditions, and time frame may be essential to interpretation.",
    "High probability does not guarantee an event.",
    "Low probability does not make an event impossible.",
    "The complement rule helps interpret the probability that an event does not occur.",
    "Probability estimates depend on models, data, and assumptions.",
    "Responsible statistical communication explains both what a probability means and what it does not guarantee.",
    "Probability interpretation is important in weather, medicine, finance, engineering, insurance, and artificial intelligence.",
  ],

  previousLesson: {
    id: "probability-m01-l05",
    slug: "theoretical-models-and-simulation",
    title: "Theoretical Models and Simulation",
  },

  nextLesson: {
    id: "probability-m01-l07",
    slug: "ap-probability-investigation",
    title: "AP-Style Probability Investigation",
  },

  lumineryGuidance: {
    message:
      "Never interpret a probability as a number alone. Ask what event, population, conditions, and model the number belongs to.",

    prompt:
      "Before accepting a probability claim, identify the event, the relevant context, the time frame, the evidence or model behind the value, and what the probability does not guarantee.",

    coachingQuestions: [
      "What exactly is the event?",
      "Who or what does the probability apply to?",
      "What time period is involved?",
      "Is the probability theoretical, experimental, simulated, or model-generated?",
      "Does the statement incorrectly imply certainty?",
      "What assumptions support the probability?",
      "What important information may be missing?",
      "How would you rewrite the statement more responsibly?",
    ],
  },
};

export default lesson06;