const lesson03 = {
  id: "probability-m01-l03",
  courseId: "probability-foundations",
  moduleId: "module-01",

  moduleNumber: 1,
  lessonNumber: 3,

  slug: "events-and-set-notation",

  title: "Events and Set Notation",

  shortTitle: "Events and Sets",

  subtitle:
    "Use events, subsets, and set notation to describe meaningful collections of outcomes within a sample space.",

  status: "Available",

  duration: "55–70 minutes",

  level: "AP Statistics Foundation",

  essentialQuestion:
    "How can we describe groups of outcomes precisely when a probability question involves more than one possible result?",

  bigIdea:
    "An event is a collection of outcomes from a sample space. Set notation gives us a precise mathematical language for describing events, combining events, and reasoning about probability.",

  whyThisLessonExists: {
    title: "Why This Lesson Exists",

    introduction:
      "Probability questions rarely ask about only one individual outcome. We may want to know the probability that a student passes an exam, a machine produces a defective item, a die shows an even number, or an AI system classifies an image correctly. Each of these situations may involve one or more possible outcomes.",

    centralProblem:
      "How can we describe exactly which outcomes belong to the event we care about?",

    purpose:
      "Events and set notation allow us to organize outcomes into meaningful groups. This language becomes essential when we later study unions, intersections, complements, conditional probability, independence, and more advanced statistical reasoning.",
  },

  problemFirst: {
    title: "What Does 'Rolling an Even Number' Actually Mean?",

    scenario:
      "A standard six-sided die is rolled. The sample space is S = {1, 2, 3, 4, 5, 6}. A student is asked to describe the event 'roll an even number.' The student writes A = {2, 4, 6}. Another student writes A = {even}. Which representation is mathematically more useful for probability reasoning?",

    questions: [
      "What is the complete sample space?",
      "Which outcomes satisfy the condition 'even'?",
      "Why is {2, 4, 6} more precise than simply writing {even}?",
      "Is an event one outcome, several outcomes, or either?",
      "How is an event related to the sample space?",
    ],

    expectedInsight:
      "An event is a subset of the sample space. The event 'roll an even number' contains the outcomes 2, 4, and 6, so it can be written precisely as A = {2, 4, 6}.",
  },

  learningObjectives: [
    "Define an event as a subset of a sample space.",
    "Distinguish between an outcome, an event, and a sample space.",
    "Represent events using braces and set notation.",
    "Determine whether an outcome belongs to an event.",
    "Represent simple and compound events.",
    "Use union notation to describe outcomes belonging to at least one of two events.",
    "Use intersection notation to describe outcomes belonging to both events.",
    "Use complement notation to describe outcomes not belonging to an event.",
    "Interpret event notation in probability contexts.",
    "Connect event notation to AP Statistics probability reasoning.",
  ],

  prerequisiteKnowledge: [
    "Random processes",
    "Trials",
    "Outcomes",
    "Sample spaces",
    "Basic set notation",
    "Lesson 2: Random Processes, Outcomes, and Sample Spaces",
  ],

  vocabulary: [
    {
      term: "Event",
      definition:
        "A collection of one or more outcomes from a sample space.",
    },
    {
      term: "Simple Event",
      definition:
        "An event containing exactly one outcome.",
    },
    {
      term: "Compound Event",
      definition:
        "An event containing more than one outcome.",
    },
    {
      term: "Subset",
      definition:
        "A set whose elements are all contained within another set.",
    },
    {
      term: "Union",
      definition:
        "The event containing outcomes that belong to event A, event B, or both.",
    },
    {
      term: "Intersection",
      definition:
        "The event containing outcomes that belong to both event A and event B.",
    },
    {
      term: "Complement",
      definition:
        "The event containing all outcomes in the sample space that are not in a specified event.",
    },
    {
      term: "Empty Event",
      definition:
        "An event containing no outcomes.",
    },
  ],

  formulas: [
    {
      id: "event-subset",

      name: "Event as a Subset",

      formula: "A ⊆ S",

      meaning:
        "Every outcome belonging to event A must also belong to the sample space S.",
    },
    {
      id: "union",

      name: "Union of Events",

      formula: "A ∪ B",

      meaning:
        "The union contains outcomes that are in A, in B, or in both.",
    },
    {
      id: "intersection",

      name: "Intersection of Events",

      formula: "A ∩ B",

      meaning:
        "The intersection contains outcomes that belong to both A and B.",
    },
    {
      id: "complement",

      name: "Complement of an Event",

      formula: "Aᶜ",

      meaning:
        "The complement contains all outcomes in the sample space that are not in event A.",
    },
    {
      id: "complement-probability",

      name: "Complement Rule",

      formula: "P(Aᶜ) = 1 - P(A)",

      meaning:
        "The probability that event A does not occur equals one minus the probability that A occurs.",
    },
  ],

  probabilityScale: [],

  workedExamples: [
    {
      id: "example-03-01",

      title: "Even Numbers on a Die",

      problem:
        "A standard six-sided die is rolled. Let A represent the event that an even number occurs.",

      solutionSteps: [
        "Write the sample space: S = {1, 2, 3, 4, 5, 6}.",
        "Identify outcomes satisfying the condition 'even.'",
        "The even outcomes are 2, 4, and 6.",
        "Write the event using set notation.",
      ],

      answer:
        "A = {2, 4, 6}",

      interpretation:
        "Event A is a subset of the sample space because every element of A also belongs to S.",
    },

    {
      id: "example-03-02",

      title: "Union of Two Events",

      problem:
        "For a six-sided die, let A = {2, 4, 6} represent even outcomes and B = {4, 5, 6} represent outcomes greater than 3. Find A ∪ B.",

      solutionSteps: [
        "List the outcomes in A: {2, 4, 6}.",
        "List the outcomes in B: {4, 5, 6}.",
        "Include every outcome that appears in A, B, or both.",
        "Do not repeat outcomes.",
      ],

      answer:
        "A ∪ B = {2, 4, 5, 6}",

      interpretation:
        "The union represents rolling an even number OR rolling a number greater than 3, including outcomes satisfying both conditions.",
    },

    {
      id: "example-03-03",

      title: "Intersection of Two Events",

      problem:
        "Using A = {2, 4, 6} and B = {4, 5, 6}, find A ∩ B.",

      solutionSteps: [
        "Compare the outcomes in A and B.",
        "Identify outcomes appearing in both sets.",
        "The outcomes 4 and 6 appear in both.",
      ],

      answer:
        "A ∩ B = {4, 6}",

      interpretation:
        "The intersection represents an outcome that is both even AND greater than 3.",
    },

    {
      id: "example-03-04",

      title: "Complement of an Event",

      problem:
        "A standard die is rolled. Let A = {2, 4, 6}, the event of rolling an even number. Find Aᶜ.",

      solutionSteps: [
        "Write the entire sample space: {1, 2, 3, 4, 5, 6}.",
        "Remove the outcomes belonging to A.",
        "The remaining outcomes are 1, 3, and 5.",
      ],

      answer:
        "Aᶜ = {1, 3, 5}",

      interpretation:
        "Aᶜ represents the event that an even number does not occur, which is equivalent to rolling an odd number.",
    },

    {
      id: "example-03-05",

      title: "Events from Two Coin Tosses",

      problem:
        "Two coins are tossed. Let A be the event of getting at least one head.",

      solutionSteps: [
        "Write the sample space: S = {HH, HT, TH, TT}.",
        "Identify outcomes containing at least one H.",
        "HH contains two heads.",
        "HT and TH each contain one head.",
        "TT contains no heads.",
      ],

      answer:
        "A = {HH, HT, TH}",

      interpretation:
        "A compound event may contain several outcomes that satisfy the same condition.",
    },
  ],

  interactiveExploration: {
    title: "Build Events from a Sample Space",

    description:
      "Use the sample space of a six-sided die to construct and compare several events.",

    instructions: [
      "Write S = {1, 2, 3, 4, 5, 6}.",
      "Define A as the event 'roll an even number.'",
      "Define B as the event 'roll a number greater than 3.'",
      "Write A and B explicitly.",
      "Find A ∪ B.",
      "Find A ∩ B.",
      "Find Aᶜ.",
      "Draw a simple Venn diagram showing A and B inside the sample space.",
    ],

    investigationQuestions: [
      "Which outcomes belong only to A?",
      "Which outcomes belong only to B?",
      "Which outcomes belong to both events?",
      "Which outcomes belong to neither event?",
      "How does a Venn diagram represent union?",
      "How does it represent intersection?",
      "How does it represent complement?",
    ],

    expectedDiscovery:
      "Set notation and Venn diagrams describe the same event relationships in different ways. Union means at least one condition is satisfied, intersection means both conditions are satisfied, and complement means the original event does not occur.",
  },
vennDiagram: {
  id: "venn-events-a-b",

  title: "Union, Intersection, and Complement of Events A and B",

  sampleSpace: {
    label: "S",
    outcomes: [1, 2, 3, 4, 5, 6],
  },

  setA: {
    label: "A (even numbers)",
    outcomes: [2, 4, 6],
  },

  setB: {
    label: "B (numbers greater than 3)",
    outcomes: [4, 5, 6],
  },

  regions: {
    onlyA: [2],
    onlyB: [5],
    intersection: [4, 6],
    outsideBoth: [1, 3],
  },

  derivedSets: {
    union: [2, 4, 5, 6],
    intersection: [4, 6],
    complementA: [1, 3, 5],
    complementB: [1, 2, 3],
  },

  purpose:
    "Give students a visual anchor for A ∪ B, A ∩ B, and complements using the same die outcomes from the worked examples.",
},
  realWorldApplications: [
    {
      field: "Medicine",

      application:
        "Events can represent patients who test positive, have a disease, receive treatment, or satisfy combinations of medical conditions.",
    },
    {
      field: "Finance",

      application:
        "Events may represent customers who default, miss payments, have high debt, or satisfy multiple risk conditions.",
    },
    {
      field: "Insurance",

      application:
        "Insurance analysts use events to describe claims, accidents, property damage, and combinations of risk factors.",
    },
    {
      field: "Engineering",

      application:
        "Engineers may define events for component failure, overheating, sensor error, or simultaneous system failures.",
    },
    {
      field: "Cybersecurity",

      application:
        "Security systems may define events such as failed login attempts, suspicious locations, unusual device activity, or combinations of warning signals.",
    },
    {
      field: "Artificial Intelligence",

      application:
        "AI systems often combine classification conditions and probability events when deciding whether an observation satisfies one or more prediction criteria.",
    },
  ],

  aiConnection: {
    title: "Events as Decision Conditions in AI",

    explanation:
      "AI systems often evaluate whether observations satisfy defined conditions. These conditions can be represented as events. Combining events allows a system to reason about cases satisfying one condition, multiple conditions, or the absence of a condition.",

    example:
      "Suppose A represents transactions classified as high-value and B represents transactions classified as unusual-location. The intersection A ∩ B represents transactions that are both high-value and from unusual locations.",

    caution:
      "An event definition can strongly influence an AI system's decisions. Poorly chosen thresholds or incomplete conditions can cause important cases to be excluded or incorrectly included.",

    reflectionQuestion:
      "Why must the definition of an event be clear before an AI system uses it to make a decision?",
  },

  pythonLab: {
    title: "Exploring Events with Python Sets",

    objective:
      "Use Python sets to represent a sample space, events, unions, intersections, and complements.",

    code: `sample_space = {1, 2, 3, 4, 5, 6}

A = {2, 4, 6}
B = {4, 5, 6}

union = A | B
intersection = A & B
complement_A = sample_space - A

print("Sample Space:", sample_space)
print("Event A:", A)
print("Event B:", B)
print("A union B:", union)
print("A intersection B:", intersection)
print("Complement of A:", complement_A)`,

    questions: [
      "Which Python operator represents union?",
      "Which Python operator represents intersection?",
      "Why does sample_space - A produce the complement of A?",
      "How does the Python output compare with your hand calculations?",
      "What event would Bᶜ represent?",
    ],

    extension:
      "Create event C = {1, 2, 3}. Use Python to find A ∪ C, A ∩ C, and Cᶜ.",
  },

  guidedPractice: [
    {
      id: "guided-03-01",

      question:
        "A die is rolled. Let A represent rolling a number greater than 4. Write event A.",

      answer:
        "A = {5, 6}",
    },
    {
      id: "guided-03-02",

      question:
        "For S = {1, 2, 3, 4, 5, 6}, let A = {2, 4, 6}. Find Aᶜ.",

      answer:
        "Aᶜ = {1, 3, 5}",
    },
    {
      id: "guided-03-03",

      question:
        "Let A = {1, 2, 3} and B = {3, 4, 5}. Find A ∪ B.",

      answer:
        "A ∪ B = {1, 2, 3, 4, 5}",
    },
    {
      id: "guided-03-04",

      question:
        "Let A = {1, 2, 3} and B = {3, 4, 5}. Find A ∩ B.",

      answer:
        "A ∩ B = {3}",
    },
    {
      id: "guided-03-05",

      question:
        "Two coins are tossed. Let A represent getting exactly one head. Write event A.",

      answer:
        "A = {HT, TH}",
    },
  ],

  independentPractice: [
    {
      id: "practice-03-01",

      difficulty: "Foundation",

      question:
        "A standard die is rolled. Write the event A = 'roll an odd number.'",

      answer:
        "A = {1, 3, 5}",
    },
    {
      id: "practice-03-02",

      difficulty: "Foundation",

      question:
        "For S = {1, 2, 3, 4, 5, 6}, let B = {1, 2}. Find Bᶜ.",

      answer:
        "Bᶜ = {3, 4, 5, 6}",
    },
    {
      id: "practice-03-03",

      difficulty: "Developing",

      question:
        "Let A = {2, 4, 6} and B = {1, 2, 3}. Find A ∪ B and A ∩ B.",

      answer:
        "A ∪ B = {1, 2, 3, 4, 6}; A ∩ B = {2}.",
    },
    {
      id: "practice-03-04",

      difficulty: "Developing",

      question:
        "Two coins are tossed. Let A represent at least one head and B represent exactly one head. Write A and B.",

      answer:
        "A = {HH, HT, TH}; B = {HT, TH}.",
    },
    {
      id: "practice-03-05",

      difficulty: "AP Reasoning",

      question:
        "Explain the difference between the statements 'A or B occurs' and 'A and B occurs' in probability notation.",

      sampleAnswer:
        "'A or B' corresponds to A ∪ B and includes outcomes belonging to A, B, or both. 'A and B' corresponds to A ∩ B and includes only outcomes belonging to both events.",
    },
    {
      id: "practice-03-06",

      difficulty: "AP Reasoning",

      question:
        "A survey classifies students by whether they participate in sports and whether they participate in music. Let A represent sports participation and B represent music participation. Interpret A ∩ B and Aᶜ.",

      sampleAnswer:
        "A ∩ B represents students who participate in both sports and music. Aᶜ represents students who do not participate in sports.",
    },
  ],

  commonMistakes: [
    {
      mistake:
        "Confusing an outcome with an event.",

      correction:
        "An outcome is one possible result. An event may contain one outcome or several outcomes.",

      example:
        "Rolling 4 is an outcome. Rolling an even number is the event {2, 4, 6}.",
    },
    {
      mistake:
        "Interpreting union as requiring both conditions.",

      correction:
        "Union means A or B or both.",

      example:
        "A ∪ B includes outcomes satisfying either condition.",
    },
    {
      mistake:
        "Interpreting intersection as either condition.",

      correction:
        "Intersection requires both conditions simultaneously.",

      example:
        "A ∩ B contains only outcomes common to both sets.",
    },
    {
      mistake:
        "Finding a complement without using the entire sample space.",

      correction:
        "The complement of A contains every outcome in S that is not in A.",

      example:
        "If S = {1,2,3,4,5,6} and A = {2,4,6}, then Aᶜ = {1,3,5}.",
    },
    {
      mistake:
        "Including outcomes that are not part of the sample space.",

      correction:
        "Every event must be a subset of the sample space.",
    },
  ],

  discussionQuestions: [
    "Why is an event considered a subset of a sample space?",
    "Can an event contain only one outcome?",
    "Can an event contain every outcome in the sample space?",
    "What does an empty event represent?",
    "Why does the word 'or' have a precise meaning in probability?",
    "How are Venn diagrams useful for understanding event relationships?",
    "Where might union and intersection appear in an AI decision system?",
  ],

  formativeAssessment: {
    totalPoints: 15,

    passingScore: 12,

    questions: [
      {
        id: "check-03-01",

        type: "concept",

        points: 3,

        prompt:
          "Define an event in probability.",

        answer:
          "An event is a collection of one or more outcomes from a sample space.",
      },
      {
        id: "check-03-02",

        type: "representation",

        points: 3,

        prompt:
          "A standard die is rolled. Write the event A = 'roll a number less than 4.'",

        answer:
          "A = {1, 2, 3}",
      },
      {
        id: "check-03-03",

        type: "set-operation",

        points: 3,

        prompt:
          "Let A = {1, 2, 3} and B = {3, 4, 5}. Find A ∩ B.",

        answer:
          "A ∩ B = {3}",
      },
      {
        id: "check-03-04",

        type: "set-operation",

        points: 3,

        prompt:
          "For S = {1,2,3,4,5,6}, let A = {2,4,6}. Find Aᶜ.",

        answer:
          "Aᶜ = {1,3,5}",
      },
      {
        id: "check-03-05",

        type: "reasoning",

        points: 3,

        prompt:
          "Explain the difference between A ∪ B and A ∩ B.",

        sampleAnswer:
          "A ∪ B contains outcomes in A, B, or both. A ∩ B contains only outcomes that belong to both A and B.",
      },
    ],
  },

  researchExtension: {
    title: "Events in a Real Decision System",

    researchQuestion:
      "How are multiple conditions combined when a real system classifies risk, eligibility, diagnosis, or prediction outcomes?",

    applicationOptions: [
      "Medical screening",
      "Credit risk",
      "Fraud detection",
      "Insurance",
      "Weather alerts",
      "Cybersecurity",
      "Artificial intelligence",
    ],

    task:
      "Choose one real-world decision system. Define at least two events and explain what their union, intersection, and complement would mean in context.",

    requiredEvidence: [
      "Description of the real-world system",
      "Definition of event A",
      "Definition of event B",
      "Interpretation of A ∪ B",
      "Interpretation of A ∩ B",
      "Interpretation of at least one complement",
      "One credible source",
    ],
  },

  portfolioArtifact: {
    title: "Event Relationship Map",

    description:
      "Create a one-page visual explanation of two probability events and their relationships.",

    requiredSections: [
      "Sample space",
      "Event A",
      "Event B",
      "Union",
      "Intersection",
      "Complement",
      "Venn diagram",
      "Real-world interpretation",
    ],

    requiredEvidence: [
      "Correct set notation",
      "Complete sample space",
      "Correct event definitions",
      "Accurate Venn diagram",
      "Written interpretation",
    ],
  },

  growthIndicators: [
    "Conceptual Understanding",
    "Mathematical Reasoning",
    "Set Representation",
    "Statistical Communication",
    "Visual Reasoning",
    "Computational Thinking",
    "Interpretation in Context",
  ],

  reflection: [
    "How is an event different from an individual outcome?",
    "Why is set notation useful in probability?",
    "What does union mean in your own words?",
    "What does intersection mean in your own words?",
    "How does complement help describe the opposite of an event?",
    "Where could event relationships appear in a real decision system?",
  ],

  summary: [
    "An event is a subset of a sample space.",
    "An event may contain one outcome or many outcomes.",
    "A simple event contains exactly one outcome.",
    "A compound event contains multiple outcomes.",
    "A ∪ B represents outcomes in A, B, or both.",
    "A ∩ B represents outcomes belonging to both A and B.",
    "Aᶜ represents outcomes in the sample space that are not in A.",
    "The complement rule is P(Aᶜ) = 1 - P(A).",
    "Venn diagrams provide a visual representation of relationships between events.",
    "Event notation provides the foundation for compound and conditional probability.",
  ],

  previousLesson: {
    id: "probability-m01-l02",
    slug: "random-processes-outcomes-and-sample-spaces",
    title: "Random Processes, Outcomes, and Sample Spaces",
  },

  nextLesson: {
    id: "probability-m01-l04",
    slug: "long-run-relative-frequency",
    title: "Long-Run Relative Frequency",
  },

  lumineryGuidance: {
    message:
      "Do not begin by calculating. First identify exactly which outcomes belong to the event.",

    prompt:
      "Start with the complete sample space. Define each event as a subset of that space, then examine how the events overlap, combine, or exclude outcomes.",

    coachingQuestions: [
      "What is the complete sample space?",
      "Which outcomes belong to event A?",
      "Which outcomes belong to event B?",
      "Are you describing 'or' or 'and'?",
      "Which outcomes belong to both events?",
      "Which outcomes belong to neither event?",
      "What does the complement mean in context?",
      "Can you represent the same relationship with a Venn diagram?",
    ],
  },
};

export default lesson03;