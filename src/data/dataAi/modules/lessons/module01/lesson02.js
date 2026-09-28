const lesson02 = {
  id: "data-ai-m01-l02",
  courseId: "data-ai-foundations",
  moduleId: "data-ai-module-01",
  moduleNumber: 1,
  lessonNumber: 2,
  slug: "from-organizational-question-to-measurable-decision",
  title: "From Organizational Question to Measurable Decision",
  shortTitle: "Frame the Decision",
  subtitle:
    "Transform a broad request into a precise, testable decision that data and AI can support responsibly.",
  status: "Published",
  duration: "75-90 minutes",
  level: "Foundations",

  essentialQuestion:
    "How can we convert a vague organizational concern into a measurable decision problem with a clear owner, action, success measure, and definition of done?",

  bigIdea:
    "A strong data project begins with the decision—not the dataset, dashboard, or model. Precise framing determines what evidence is needed, which method is appropriate, and whether the work creates value.",

  whyThisLessonExists: {
    title: "Good framing prevents expensive failure",
    introduction:
      "Many data and AI projects fail before any code is written. A request such as ‘improve sales,’ ‘reduce risk,’ or ‘predict student success’ sounds important but does not specify who must decide what, when the decision occurs, which actions are possible, or how improvement will be measured. Without those details, teams can deliver technically impressive work that nobody can use.",
    centralProblem:
      "A broad organizational goal is not yet an analytical question, and an analytical question is not yet an operational decision.",
    purpose:
      "This lesson teaches a repeatable framing process that connects organizational value to measurable evidence. You will learn to define the decision owner, action, population, timing, outcome, constraints, baseline, and acceptance criteria before choosing tools.",
  },

  problemFirst: {
    title: "Opening Investigation: ‘Improve customer retention’",
    scenario:
      "A subscription company tells its data team, ‘Build an AI system to improve customer retention.’ Marketing wants a list of customers to contact, finance wants lower incentive costs, customer support wants fewer complaints, and legal is concerned about using sensitive customer information. The team has six months of activity, billing, support, and cancellation data.",
    questions: [
      "What exactly must be decided, and who owns that decision?",
      "When must the decision be made for an intervention to be useful?",
      "Which customers are eligible for action, and what actions are actually available?",
      "How will the organization define and measure retention?",
      "What simple baseline should a new approach beat?",
      "Which constraints—budget, capacity, privacy, fairness, or time—shape the solution?",
      "What evidence would prove that the intervention caused an improvement rather than merely identifying high-risk customers?",
    ],
    expectedInsight:
      "The request must be separated into two connected problems: prediction may identify customers likely to cancel, while an experiment or causal evaluation is needed to learn which intervention actually improves retention. The decision must be framed before selecting AI.",
  },

  learningObjectives: [
    "Distinguish an organizational goal, decision, analytical question, and technical task.",
    "Write a decision statement that names the owner, choice, population, and decision time.",
    "Convert a broad request into descriptive, diagnostic, predictive, or prescriptive questions.",
    "Define an outcome measure with a population, calculation rule, time window, and threshold.",
    "Identify available actions, operational constraints, error costs, and affected stakeholders.",
    "Establish a current-process baseline and measurable acceptance criteria.",
    "Recognize ambiguity, proxy targets, leakage, causal overreach, and conflicting objectives during framing.",
    "Produce a decision brief that is ready for data-feasibility review.",
  ],

  prerequisiteKnowledge: [
    "Lesson 1: The Data-to-Decision Chain",
    "Difference between data and information",
    "Four types of analytics",
    "Basic percentage and rate interpretation",
  ],

  vocabulary: [
    {
      term: "Organizational Goal",
      definition:
        "A broad desired outcome such as improving retention, reducing delays, increasing access, or lowering risk. It provides direction but is not yet a complete decision problem.",
    },
    {
      term: "Decision Owner",
      definition:
        "The person or role accountable for choosing an action and accepting the consequences of that choice.",
    },
    {
      term: "Decision Statement",
      definition:
        "A precise sentence that identifies who must choose which action, for which population, and by what time.",
    },
    {
      term: "Analytical Question",
      definition:
        "A question answerable with evidence, such as what happened, why patterns changed, what is likely to happen, or which action best satisfies an objective.",
    },
    {
      term: "Outcome",
      definition:
        "The real-world result the organization ultimately wants to change or protect, measured over a defined period.",
    },
    {
      term: "Proxy Measure",
      definition:
        "An indirect measure used when the true outcome is difficult or slow to observe. A proxy is useful only when its relationship to the real outcome is justified and monitored.",
    },
    {
      term: "Constraint",
      definition:
        "A condition the solution must respect, such as budget, staffing capacity, response time, privacy, policy, safety, or fairness requirements.",
    },
    {
      term: "Acceptance Criterion",
      definition:
        "A testable condition that must be satisfied for a project output to be considered useful, safe, and ready for its intended purpose.",
    },
    {
      term: "Baseline",
      definition:
        "The current process or simple reference method against which a proposed solution is evaluated.",
    },
    {
      term: "False Positive",
      definition:
        "A case incorrectly flagged as meeting a condition, such as labeling a customer high-risk when the customer would not cancel.",
    },
    {
      term: "False Negative",
      definition:
        "A case incorrectly missed by a system, such as failing to identify a student who later needs urgent support.",
    },
    {
      term: "Stakeholder",
      definition:
        "A person or group that makes, uses, is affected by, governs, or can challenge the decision and its supporting system.",
    },
  ],

  formulas: [
    {
      id: "decision-statement",
      name: "Decision Statement Template",
      formula:
        "[Owner] must choose [action] for [eligible population] at [decision time] using evidence available by [cutoff].",
      meaning:
        "This format forces the team to identify the user, choice, scope, timing, and information boundary before defining a model or dashboard.",
      requirement:
        "The owner must have authority, the action must be feasible, and the evidence must exist before the decision is made.",
    },
    {
      id: "problem-frame",
      name: "Complete Decision Frame",
      formula:
        "Goal + owner + population + decision + actions + timing + evidence + outcome + baseline + constraints + safeguards",
      meaning:
        "A project is ready for technical discovery only when these elements are explicit enough to test with stakeholders.",
    },
    {
      id: "outcome-rate",
      name: "Outcome Rate",
      formula:
        "Outcome rate = eligible cases with the defined outcome ÷ all eligible cases in the same time window",
      meaning:
        "The numerator, denominator, eligibility rules, exclusions, and observation window must be documented so the measure is reproducible.",
    },
    {
      id: "project-value",
      name: "Decision Value Test",
      formula:
        "Expected value = benefit of improved actions − implementation, error, delay, and harm costs",
      meaning:
        "A more accurate output is not automatically more valuable. The result must change actions enough to justify total operational and human costs.",
    },
  ],

  workedExamples: [
    {
      id: "example-02-01",
      title: "From ‘Increase sales’ to a measurable decision",
      problem:
        "A regional retailer asks the analytics team to ‘use data to increase sales.’ Convert the request into a decision-ready statement.",
      solutionSteps: [
        "Clarify the goal: increase profitable repeat purchases, not merely gross sales.",
        "Name the decision owner: the regional marketing manager.",
        "Identify the decision: which eligible customers should receive one of three approved offers next week.",
        "Define the population: active loyalty members with at least one purchase in the previous 90 days who have not opted out of marketing.",
        "Set the evidence cutoff: only transactions and engagement available by Sunday at 11:59 p.m.",
        "Define the outcome: an incremental profitable purchase within 21 days, compared with a no-offer control group.",
        "State constraints: campaign budget, contact limits, inventory, privacy permissions, and offer fairness.",
      ],
      answer:
        "Each Monday, the regional marketing manager must choose which eligible loyalty members receive each approved offer, using data available by Sunday night, to increase incremental 21-day contribution margin within budget and contact constraints.",
      interpretation:
        "The revised statement prevents the team from optimizing a misleading target such as clicks, total revenue, or predicted purchase without measuring incremental profit.",
    },
    {
      id: "example-02-02",
      title: "Separate prediction from intervention",
      problem:
        "A college wants to predict which students will not return next semester and offer them advising. Does an accurate risk model prove that advising improves retention?",
      solutionSteps: [
        "Prediction question: which currently enrolled students are likely not to return next semester?",
        "Decision question: which students should receive which form of support, given adviser capacity and student needs?",
        "Outcome question: does the offered support increase re-enrollment or improve another meaningful student outcome?",
        "A model can rank risk using historical examples, but historical correlation does not prove the effect of advising.",
        "Use a fair evaluation design—such as a phased rollout or randomized eligible group when appropriate—to estimate intervention impact.",
      ],
      answer:
        "No. Prediction identifies risk; intervention evaluation estimates whether the action changes the outcome. The project needs both questions and different evidence for each.",
      interpretation:
        "Targeting only the highest-risk students may also be ineffective if their barriers cannot be addressed by the available intervention. Actionability belongs in the frame.",
    },
    {
      id: "example-02-03",
      title: "Define a reproducible on-time delivery KPI",
      problem:
        "Operations reports an ‘on-time rate’ of 94%, while customer service reports 87%. Both teams believe their calculation is correct.",
      solutionSteps: [
        "Define the population: domestic standard orders delivered during the reporting week.",
        "Define exclusions: customer-requested holds and canceled orders, with a documented reason code.",
        "Define the promised time: the timestamp communicated at checkout, preserved even if later operational estimates change.",
        "Define the actual time: first verified delivery scan at the destination.",
        "Define on-time: actual delivery timestamp is less than or equal to the original promised timestamp.",
        "Define the rate and threshold: eligible on-time deliveries divided by all eligible deliveries; investigate when the weekly rate falls below 95%.",
      ],
      answer:
        "The disagreement came from different populations, exclusions, and timestamps. A shared data contract and KPI definition must precede dashboard or AI work.",
      interpretation:
        "A metric name is not a definition. Reproducibility requires exact eligibility, numerator, denominator, time window, data source, and ownership.",
    },
    {
      id: "example-02-04",
      title: "Choose acceptance criteria for a fraud-review system",
      problem:
        "A payments team wants a system that flags suspicious transactions. Reviewers can investigate only 500 cases per day. What should define success?",
      solutionSteps: [
        "Operational capacity requires the system to return no more than 500 prioritized cases daily.",
        "Compare against the current rule-based process, including value of prevented loss and review cost.",
        "Measure precision among reviewed cases so limited capacity is not consumed by excessive false positives.",
        "Measure recall or missed-loss value to understand false negatives.",
        "Set latency and reliability requirements because late risk scores cannot prevent payment.",
        "Evaluate performance across relevant transaction and customer groups, document overrides, and monitor drift.",
      ],
      answer:
        "Success requires more than model accuracy: capacity-aware ranking, measurable loss reduction versus the baseline, acceptable false-positive and false-negative costs, timely scoring, subgroup review, auditability, and monitoring.",
      interpretation:
        "Acceptance criteria should describe the whole decision system under real constraints, not an isolated model metric in a laboratory.",
    },
  ],

  interactiveExploration: {
    title: "The Decision Frame Canvas",
    description:
      "Use one sheet of paper or a digital document. Complete the canvas in order, then ask a partner to challenge every ambiguous term.",
    instructions: [
      "Write the organizational goal in one sentence without naming a technology.",
      "Name the decision owner and the people affected by the decision.",
      "Complete: ‘The owner must choose ___ for ___ by ___.’",
      "List the actions the owner can realistically take, including ‘take no action.’",
      "Define the eligible population and unit of analysis.",
      "Set the decision time, evidence cutoff, and outcome observation window.",
      "Write one descriptive, one diagnostic, one predictive, and one prescriptive question related to the goal.",
      "Define the primary outcome measure and one guardrail measure that should not worsen.",
      "Document the current baseline, constraints, error costs, and minimum acceptance criteria.",
      "Identify assumptions that must be tested before technical work begins.",
    ],
    investigationQuestions: [
      "Can the owner actually take the proposed action?",
      "Would the required evidence exist before the decision deadline?",
      "Does the measured target represent the real outcome or only a convenient proxy?",
      "Could improving the primary metric harm another important outcome?",
      "Who pays the cost of false positives and false negatives?",
      "What result would cause the organization to stop or redesign the project?",
    ],
    expectedDiscovery:
      "Framing is an iterative stakeholder process. A technically answerable question is not enough; the result must be timely, actionable, measurable, feasible, and responsible within the real workflow.",
  },

  realWorldApplications: [
    {
      field: "Education",
      application:
        "Replace ‘predict failing students’ with a time-bounded support decision, an actionable intervention, a clear outcome, adviser capacity, and protections against harmful labeling.",
    },
    {
      field: "Health Care",
      application:
        "Define who receives an alert, who reviews it, how quickly action is required, the cost of missed cases and false alarms, and when clinical judgment overrides the system.",
    },
    {
      field: "Supply Chain",
      application:
        "Turn ‘reduce stockouts’ into replenishment decisions by item and location under lead-time, cash, storage, service-level, and supplier constraints.",
    },
    {
      field: "Banking",
      application:
        "Frame credit or fraud decisions with eligibility, legal requirements, review capacity, adverse-action explanations, error costs, and monitoring for unequal impact.",
    },
    {
      field: "Human Resources",
      application:
        "Use workforce data to support resource planning or retention while avoiding unsupported causal claims, invasive surveillance, and automated high-impact employment decisions.",
    },
    {
      field: "Public Sector",
      application:
        "Define service-allocation decisions transparently, include community stakeholders, document policy constraints, and provide a process to correct data or appeal outcomes.",
    },
  ],

  aiConnection: {
    title: "AI does not define the objective for you",
    explanation:
      "Models optimize the targets and feedback signals people provide. If the target is poorly defined, the system may become very effective at producing the wrong result. Objective design, stakeholder judgment, and governance remain human responsibilities.",
    example:
      "A support chatbot optimized only for shorter conversations may end chats quickly without resolving problems. Adding resolution quality, safety escalation, user satisfaction, and human-review measures creates a more faithful decision objective.",
    uses: [
      "Clarify information needs",
      "Generate alternative questions",
      "Summarize stakeholder interviews",
      "Draft metric definitions",
      "Identify assumptions",
      "Prototype workflows",
    ],
    caution:
      "Generative AI can help brainstorm a frame, but it cannot verify organizational authority, hidden constraints, legal obligations, data availability, or affected people's lived experience. Stakeholders must validate every assumption.",
    reflectionQuestion:
      "If a model perfectly optimizes the stated target but the organization chose the wrong target, who is responsible for the outcome and what governance could have prevented it?",
  },

  guidedPractice: [
    {
      id: "guided-02-01",
      question:
        "Is ‘reduce emergency-room wait time’ an organizational goal, decision statement, analytical question, or technical task?",
      answer:
        "It is an organizational goal. It does not yet identify the decision owner, available action, population, timing, or measurement rule.",
    },
    {
      id: "guided-02-02",
      question:
        "Improve this statement: ‘The model will predict late orders.’",
      answer:
        "Two hours before dispatch, the logistics coordinator must decide which active orders receive expedited handling, using data available at that time, to reduce missed promised-delivery windows within daily capacity and cost limits.",
    },
    {
      id: "guided-02-03",
      question:
        "A school measures success using the number of students contacted. Is that an outcome measure or an activity measure?",
      answer:
        "It is an activity measure. A meaningful outcome might be improved attendance, timely assignment submission, persistence, or student-reported support, with appropriate guardrails.",
    },
    {
      id: "guided-02-04",
      question:
        "Why must a predictive project specify an evidence cutoff?",
      answer:
        "The cutoff ensures that every feature would truly be available at decision time. Without it, future information can leak into development and create unrealistically strong results.",
    },
    {
      id: "guided-02-05",
      question:
        "A review team can act on 100 cases per week. Name one acceptance criterion created by that constraint.",
      answer:
        "The output must provide no more than 100 prioritized, reviewable cases per week—or clearly support a threshold that fits that capacity—while demonstrating useful precision within the selected cases.",
    },
  ],

  independentPractice: [
    {
      id: "practice-02-01",
      difficulty: "Foundation",
      question:
        "Separate this request into a goal and a decision: ‘Use AI to reduce employee turnover.’",
      sampleAnswer:
        "Goal: improve voluntary retention and employee well-being. Decision: each month, an authorized HR partner decides which organizational conditions or voluntary support programs require action for eligible teams, using aggregated evidence and respecting employment, privacy, and fairness rules.",
    },
    {
      id: "practice-02-02",
      difficulty: "Foundation",
      question:
        "Write one descriptive and one predictive question for a hospital appointment no-show problem.",
      sampleAnswer:
        "Descriptive: What percentage of eligible appointments were missed last quarter by clinic, lead time, and appointment type? Predictive: Which currently scheduled appointments are at elevated risk of being missed, using information available 48 hours before the appointment?",
    },
    {
      id: "practice-02-03",
      difficulty: "Developing",
      question:
        "Define a complete weekly customer-retention rate. Include population, numerator, denominator, time window, and exclusions.",
      sampleAnswer:
        "Among paying customers active at the beginning of a week and eligible to renew during the following 30 days, the retention rate is the number still active at day 30 divided by all eligible customers, excluding approved test, fraud, and duplicate accounts under documented rules.",
    },
    {
      id: "practice-02-04",
      difficulty: "Developing",
      question:
        "For a loan-review system, compare the cost of a false positive and a false negative from at least two stakeholder perspectives.",
      sampleAnswer:
        "A false positive may delay or deny an eligible applicant and create lost business, compliance, and fairness costs. A false negative may expose the lender to loss and the borrower to unaffordable debt. The frame must account for both institutional and applicant consequences.",
    },
    {
      id: "practice-02-05",
      difficulty: "Challenge",
      question:
        "A warehouse wants to minimize picking time. Identify one possible proxy failure and one guardrail metric.",
      sampleAnswer:
        "Workers might rush, increasing mistakes or injuries while measured time improves. Guardrails could include order accuracy, safety incidents, worker-reported strain, and rework rate.",
    },
    {
      id: "practice-02-06",
      difficulty: "Professional reasoning",
      question:
        "Write four acceptance criteria for an executive sales forecast used for monthly inventory purchasing.",
      sampleAnswer:
        "Possible criteria: outperform the seasonal-naive baseline on agreed weighted error; deliver forecasts before the purchasing deadline; provide item-location uncertainty ranges; remain within system latency and reliability limits; document overrides; meet subgroup or product-segment performance thresholds; and trigger monitoring when data or error distributions change.",
    },
  ],

  commonMistakes: [
    {
      mistake: "Treating a broad goal as a complete problem statement.",
      correction:
        "Add the owner, choice, population, timing, evidence cutoff, available actions, outcome, baseline, constraints, and safeguards.",
    },
    {
      mistake: "Defining success as delivering a dashboard or model.",
      correction:
        "Delivery is an output. Success should describe improved decision quality or outcomes without unacceptable harm, cost, or delay.",
    },
    {
      mistake: "Using a convenient proxy without validating it.",
      correction:
        "Explain why the proxy represents the real outcome, test the relationship, and add guardrails against gaming or unintended consequences.",
    },
    {
      mistake: "Ignoring the current process.",
      correction:
        "Document how decisions are made today and establish a simple baseline. A new method must demonstrate meaningful improvement.",
    },
    {
      mistake: "Assuming prediction proves what action will work.",
      correction:
        "Prediction estimates risk or outcome. Intervention impact requires causal evidence or a suitable evaluation design.",
    },
    {
      mistake: "Optimizing one metric without guardrails.",
      correction:
        "Pair the primary objective with quality, safety, fairness, cost, or experience measures that must not deteriorate.",
    },
  ],

  discussionQuestions: [
    "Who should have authority to define the target of a high-impact AI system?",
    "Can a decision problem be measurable but still be unethical or inappropriate to automate? Explain.",
    "When should a team reject a project because no helpful action follows the prediction?",
    "How do budget and staff capacity change which metric or threshold is useful?",
    "What happens when different stakeholders define success differently?",
  ],

  formativeAssessment: {
    totalPoints: 20,
    passingScore: 16,
    questions: [
      {
        id: "check-02-01",
        type: "concept",
        points: 4,
        prompt:
          "Distinguish an organizational goal, analytical question, decision, and technical task using one connected example.",
        sampleAnswer:
          "Goal: reduce delivery delays. Analytical question: which active orders are likely to miss their promised time? Decision: the dispatch manager chooses which orders receive expedited handling two hours before dispatch. Technical task: build and validate a risk-ranking pipeline using evidence available by that cutoff.",
      },
      {
        id: "check-02-02",
        type: "application",
        points: 4,
        prompt:
          "Write a complete decision statement using owner, action, eligible population, decision time, and evidence cutoff.",
        sampleAnswer:
          "Each Friday, the advising director must choose which eligible first-year students receive one of the available support options the following week, using enrollment, attendance, and coursework data verified by Thursday at 6 p.m.",
      },
      {
        id: "check-02-03",
        type: "measurement",
        points: 4,
        prompt:
          "Explain why ‘number of alerts sent’ is not enough to measure the success of a safety system. Propose an outcome and guardrail.",
        sampleAnswer:
          "Alert count measures system activity, not improved safety. An outcome could be preventable incidents per 1,000 eligible events; guardrails could include false-alarm burden, response time, missed critical cases, and subgroup error rates.",
      },
      {
        id: "check-02-04",
        type: "reasoning",
        points: 4,
        prompt:
          "Why should a project compare against a baseline and evaluate error costs under operational capacity?",
        sampleAnswer:
          "The baseline shows whether added complexity improves on the current process or a simple rule. Error costs and capacity determine which mistakes matter and how many cases can actually receive action, so they shape the useful threshold and metric.",
      },
      {
        id: "check-02-05",
        type: "risk",
        points: 4,
        prompt:
          "Name four reasons a measurable decision frame might still require revision before technical development.",
        sampleAnswer:
          "The action may be infeasible; required evidence may be unavailable before the decision; the target may be a harmful proxy; stakeholders may disagree; legal or privacy constraints may block use; error costs may be unacceptable; the baseline may already meet the need; or success may require causal evidence not yet available.",
      },
    ],
  },

  researchExtension: {
    title: "Audit a real decision system",
    researchQuestion:
      "Does a public data or AI system clearly connect its claimed purpose to an operational decision and measurable outcome?",
    applicationOptions: [
      "Credit or insurance decision",
      "School early-warning system",
      "Clinical risk alert",
      "Fraud review workflow",
      "Hiring or workforce tool",
      "Recommendation or ranking system",
    ],
    task:
      "Choose one documented system. Reconstruct its goal, decision owner, population, action, timing, input boundary, target, baseline, constraints, error costs, and outcome measure. Mark every missing element and explain how the omission limits evaluation.",
    requiredEvidence: [
      "At least two credible sources",
      "One complete or reconstructed decision statement",
      "Primary outcome and proxy analysis",
      "False-positive and false-negative consequences",
      "Operational capacity or timing constraint",
      "A justified recommendation: proceed, revise, or stop",
    ],
  },

  portfolioArtifact: {
    title: "Project Charter, Part 2: Measurable Decision Brief",
    description:
      "Expand the project charter you began in Lesson 1. Replace every broad or ambiguous statement with a decision-ready definition that a stakeholder and technical team can test.",
    requiredSections: [
      "Organizational goal and non-goals",
      "Decision owner and affected stakeholders",
      "Complete decision statement",
      "Eligible population and unit of analysis",
      "Available actions, including no action",
      "Decision time, evidence cutoff, and outcome window",
      "Primary outcome, proxy justification, and guardrails",
      "Current-process baseline and minimum acceptance criteria",
      "Operational, legal, privacy, fairness, safety, and budget constraints",
      "Open assumptions and stakeholder validation questions",
    ],
    requiredEvidence: [
      "One descriptive, diagnostic, predictive, and prescriptive question",
      "One reproducible KPI definition",
      "False-positive and false-negative cost analysis",
      "One baseline comparison plan",
      "A proceed, revise, or stop readiness decision",
    ],
  },

  growthIndicators: [
    {
      title: "Strategic Translation",
      description:
        "You can translate a broad goal into a precise decision without prematurely choosing technology.",
    },
    {
      title: "Measurement Discipline",
      description:
        "You define outcomes, populations, time windows, calculations, baselines, and guardrails reproducibly.",
    },
    {
      title: "Operational Judgment",
      description:
        "You connect analysis to feasible actions, timing, capacity, and real workflow constraints.",
    },
    {
      title: "Stakeholder Responsibility",
      description:
        "You surface conflicting objectives, affected people, error costs, oversight, and reasons to stop.",
    },
  ],

  reflection: [
    "Which part of the Decision Frame Canvas was hardest to define, and why?",
    "How did naming the decision owner change your understanding of the project?",
    "Which proxy in your project could be gamed or become disconnected from the real outcome?",
    "What simple baseline should your proposed method beat?",
    "What evidence would make you recommend stopping rather than continuing the project?",
  ],

  summary: [
    "An organizational goal provides direction but does not specify a complete decision.",
    "A decision statement names the owner, action, eligible population, decision time, and evidence cutoff.",
    "Analytical questions should be separated into descriptive, diagnostic, predictive, and prescriptive needs.",
    "Outcomes and KPIs require exact populations, calculations, time windows, exclusions, and ownership.",
    "A convenient proxy must be justified against the real outcome and protected with guardrail measures.",
    "The current process and a simple method provide the baseline that a new solution must beat.",
    "Capacity, cost, latency, privacy, policy, fairness, and safety constraints shape useful methods and thresholds.",
    "False positives and false negatives have different consequences for different stakeholders.",
    "Prediction estimates what may happen; it does not prove why it happens or which intervention will help.",
    "A project is ready for technical discovery only when the decision is actionable, measurable, feasible, and responsibly governed.",
  ],

  previousLesson: {
    id: "data-ai-m01-l01",
    slug: "data-information-analytics-machine-learning-and-ai",
    title: "Data, Information, Analytics, Machine Learning, and AI",
  },
  nextLesson: null,

  lumineryGuidance: {
    message:
      "A precise problem statement is not paperwork—it is the first working model of the decision system.",
    prompt:
      "Before requesting data or selecting technology, ask the decision owner to confirm the action, timing, outcome, constraints, and acceptable error tradeoffs in plain language.",
    coachingQuestions: [
      "What choice will change because of this work?",
      "Who has authority and accountability for that choice?",
      "What evidence truly exists before the decision?",
      "Does the target represent the outcome people actually value?",
      "What current process and simple baseline must be beaten?",
      "Who benefits, who bears risk, and who can challenge the result?",
    ],
  },
};

export default lesson02;
