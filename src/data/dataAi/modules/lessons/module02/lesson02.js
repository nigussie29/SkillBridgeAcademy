const lesson02 = {
  id: "data-ai-m02-l02",
  courseId: "data-ai-foundations",
  moduleId: "data-ai-foundations-module-02",
  moduleNumber: 2,
  lessonNumber: 2,
  slug: "probability-conditional-probability-and-bayes-reasoning",
  title: "Probability, Conditional Probability, and Bayes Reasoning",
  shortTitle: "Probability and Bayes Reasoning",
  subtitle:
    "Quantify uncertainty, distinguish joint and conditional events, and update risk responsibly when new evidence arrives.",
  status: "available",
  duration: "120–140 minutes",
  level: "Beginner to Professional",

  essentialQuestion:
    "How can we use probability and Bayes reasoning to turn uncertain evidence into a transparent, decision-ready estimate of risk?",
  bigIdea:
    "Probability describes uncertainty before and after evidence. Conditional probability changes the reference group, and Bayes reasoning combines the base rate with the reliability of evidence to produce an updated probability—not a certainty.",

  whyThisLessonExists: {
    title: "An Alert Is Evidence, Not a Diagnosis",
    introduction:
      "Data and AI systems constantly produce probabilities: a machine may fail, a transaction may be fraudulent, a student may need support, or a patient may have a condition. These probabilities are useful only when the event, population, time horizon, and evidence are defined clearly.",
    centralProblem:
      "People often reverse conditional probabilities, ignore rare-event base rates, assume independence without evidence, or treat a model score as certainty. A highly sensitive test can still produce many false alarms when the target event is rare.",
    purpose:
      "This lesson develops a disciplined probability workflow: define the experiment and events, calculate simple and compound probabilities, interpret conditional probability, assess independence, update beliefs with Bayes reasoning, and connect the posterior probability to costs, capacity, and action thresholds.",
  },

  problemFirst: {
    title: "Opening Investigation: Does a Robot Alert Mean Failure Is Likely?",
    scenario:
      "A factory monitors 1,000 robot-shifts. Historically, 2% contain a true bearing fault. The alert system detects 90% of real faults but also alerts on 10% of healthy shifts. A supervisor sees an alert and says there is a 90% chance the robot has a fault.",
    questions: [
      "What exactly is the event: any fault, a bearing fault, or failure within a defined time window?",
      "What is the prior probability of a fault before observing the alert?",
      "What does 90% sensitivity mean, and why is it not P(fault | alert)?",
      "How many true alerts and false alerts should we expect among 1,000 shifts?",
      "What proportion of all alerts correspond to real faults?",
      "How would the answer change if the base fault rate increased?",
      "What action is justified by the updated risk: continue, inspect, slow, or stop?",
    ],
    expectedInsight:
      "Among 1,000 shifts, about 20 have faults and 18 of those alert. Of 980 healthy shifts, about 98 also alert. Therefore only 18 of 116 alerts indicate real faults: about 15.5%, not 90%. The alert raises risk sharply from 2%, but the operational response still depends on consequences, capacity, and policy.",
  },

  learningObjectives: [
    "Define a random experiment, outcome, sample space, and event in a decision context.",
    "Calculate probabilities using complements, unions, intersections, and counting logic.",
    "Distinguish mutually exclusive events from independent events.",
    "Calculate and interpret joint, marginal, and conditional probabilities from tables and event descriptions.",
    "Use the multiplication rule and total probability rule for multi-stage situations.",
    "Apply Bayes' theorem using formulas, frequency trees, and confusion-matrix counts.",
    "Explain how base rates, sensitivity, specificity, and false-positive rates affect posterior probability.",
    "Translate probability estimates into decision thresholds without treating uncertainty as certainty.",
  ],

  prerequisiteKnowledge: [
    "Fractions, ratios, percentages, decimals, and basic algebra",
    "Reading two-way tables and tree diagrams",
    "Module 2 Lesson 1: distributions, unusual observations, and careful interpretation",
    "Module 1: target definitions, baselines, KPIs, actions, constraints, and guardrails",
    "Basic Python and pandas are helpful for the computational practice",
  ],

  visualModels: [
    {
      id: "bayes-update-cycle",
      type: "lifecycle",
      title: "Bayes Update: From Base Rate to Posterior Risk",
      description:
        "A trustworthy update begins with the population base rate, evaluates how likely the evidence is under competing states, and ends with a probability conditioned on the observed evidence.",
      stages: [
        { label: "1. Prior", detail: "Start with P(Fault): the probability before the new alert." },
        { label: "2. Evidence Model", detail: "Use sensitivity and false-positive behavior: P(Alert | Fault) and P(Alert | No Fault)." },
        { label: "3. Observe Evidence", detail: "Confirm that an alert occurred and that its definition, timing, and data quality are valid." },
        { label: "4. Posterior", detail: "Calculate P(Fault | Alert), then compare it with an action threshold and operational consequences." },
      ],
      feedback:
        "When new verified evidence arrives, the current posterior can become the prior for the next transparent update.",
      interpretation:
        "Bayes reasoning changes probability, not truth. A posterior risk must still be calibrated, monitored, and connected to a proportionate human or automated action.",
    },
  ],

  vocabulary: [
    { term: "Random experiment", definition: "A repeatable process with an uncertain outcome, such as observing whether a robot faults during the next shift." },
    { term: "Outcome", definition: "One possible result of a random experiment." },
    { term: "Sample space", definition: "The complete set of possible outcomes for the defined experiment." },
    { term: "Event", definition: "A set of one or more outcomes that answers a probability question." },
    { term: "Probability", definition: "A number from 0 to 1 that quantifies uncertainty under stated assumptions and a defined reference population." },
    { term: "Complement", definition: "The event that A does not occur, written Aᶜ; together A and Aᶜ cover the sample space." },
    { term: "Union", definition: "The event A or B, including outcomes in A, in B, or in both." },
    { term: "Intersection", definition: "The event A and B, containing outcomes shared by both events." },
    { term: "Mutually exclusive", definition: "Events that cannot occur together, so their intersection has probability zero." },
    { term: "Joint probability", definition: "The probability that two or more events occur together, such as P(Fault ∩ Alert)." },
    { term: "Marginal probability", definition: "The probability of one event regardless of the status of another event, often read from a table margin." },
    { term: "Conditional probability", definition: "The probability of A within the restricted reference group where B is known to have occurred, written P(A | B)." },
    { term: "Independent events", definition: "Events for which knowing one occurred does not change the probability of the other." },
    { term: "Prior probability", definition: "The probability assigned before considering the current evidence, often informed by a validated base rate." },
    { term: "Base rate", definition: "The prevalence or historical frequency of the target event in a defined relevant population and time window." },
    { term: "Likelihood", definition: "How probable the observed evidence is under a particular state or hypothesis, such as P(Alert | Fault)." },
    { term: "Posterior probability", definition: "The updated probability after conditioning on observed evidence, such as P(Fault | Alert)." },
    { term: "Sensitivity", definition: "The proportion of actual positive cases correctly identified: P(Alert | Fault), also called the true-positive rate." },
    { term: "Specificity", definition: "The proportion of actual negative cases correctly identified: P(No Alert | No Fault), or the true-negative rate." },
    { term: "False-positive rate", definition: "The proportion of actual negative cases incorrectly alerted: P(Alert | No Fault) = 1 − specificity." },
    { term: "Positive predictive value", definition: "The proportion of positive alerts that are truly positive: P(Fault | Alert); it depends strongly on the base rate." },
    { term: "Calibration", definition: "Agreement between predicted probabilities and observed long-run frequencies among comparable cases." },
  ],

  formulas: [
    {
      id: "complement-rule",
      name: "Complement rule",
      formula: "P(Aᶜ) = 1 − P(A)",
      meaning: "Finds the probability that event A does not occur.",
      requirement: "Confirm that A and Aᶜ are exhaustive and mutually exclusive under the same experiment and time window.",
    },
    {
      id: "addition-rule",
      name: "General addition rule",
      formula: "P(A ∪ B) = P(A) + P(B) − P(A ∩ B)",
      meaning: "Finds the probability that A or B occurs while subtracting the overlap counted twice.",
      requirement: "Do not omit the intersection unless A and B are verified to be mutually exclusive.",
    },
    {
      id: "conditional-probability",
      name: "Conditional probability",
      formula: "P(A | B) = P(A ∩ B) / P(B), where P(B) > 0",
      meaning: "Restricts the reference group to cases where B occurred and measures the share that also satisfy A.",
      requirement: "Read the direction carefully: P(A | B) usually differs from P(B | A).",
    },
    {
      id: "multiplication-rule",
      name: "Multiplication rule",
      formula: "P(A ∩ B) = P(A | B)P(B) = P(B | A)P(A)",
      meaning: "Calculates a joint probability by following one event and then a conditional branch.",
      requirement: "Use P(A)P(B) only when independence is justified; otherwise retain the conditional term.",
    },
    {
      id: "independence-rule",
      name: "Independence test",
      formula: "A and B are independent when P(A | B) = P(A)",
      meaning: "Checks whether knowledge of B leaves the probability of A unchanged.",
      requirement: "Independence is not the same as mutual exclusivity; nonempty mutually exclusive events are dependent.",
    },
    {
      id: "total-probability",
      name: "Total probability for two states",
      formula: "P(E) = P(E | A)P(A) + P(E | Aᶜ)P(Aᶜ)",
      meaning: "Combines the probability of evidence across an exhaustive set of possible states.",
      requirement: "The states must partition the relevant population and use aligned definitions and time windows.",
    },
    {
      id: "bayes-theorem",
      name: "Bayes' theorem",
      formula: "P(A | E) = P(E | A)P(A) / P(E)",
      meaning: "Updates the prior probability of A after observing evidence E.",
      requirement: "Use a credible base rate and validated evidence behavior; communicate assumptions, uncertainty, and the action threshold.",
    },
  ],

  workedExamples: [
    {
      id: "example-02-02-01",
      title: "Define a sample space and use a complement",
      problem: "A robot inspection produces one of three mutually exclusive results: pass, inspect, or stop. If P(pass) = 0.82 and P(inspect) = 0.13, find P(stop).",
      solutionSteps: [
        "Define the sample space S = {pass, inspect, stop}.",
        "The three outcomes are exhaustive, so their probabilities sum to 1.",
        "P(stop) = 1 − P(pass) − P(inspect).",
        "P(stop) = 1 − 0.82 − 0.13 = 0.05.",
      ],
      answer: "P(stop) = 0.05, or 5%.",
      interpretation: "The answer applies only to the stated inspection process, classification rules, population, and time period.",
    },
    {
      id: "example-02-02-02",
      title: "Use the addition rule with overlapping events",
      problem: "During one month, 12% of robot-shifts have a vibration alert, 8% have a temperature alert, and 3% have both. Find the probability of at least one alert.",
      solutionSteps: [
        "Let V be a vibration alert and T be a temperature alert.",
        "Use P(V ∪ T) = P(V) + P(T) − P(V ∩ T).",
        "Substitute: 0.12 + 0.08 − 0.03 = 0.17.",
        "Subtract the overlap because it was included once in each marginal probability.",
      ],
      answer: "P(V or T) = 0.17, or 17%.",
      interpretation: "Adding 12% and 8% without subtracting the 3% overlap would double-count shifts with both alerts.",
    },
    {
      id: "example-02-02-03",
      title: "Calculate conditional probability from counts",
      problem: "Of 200 robot-shifts, 40 occurred on the night shift and 12 of those had a communication fault. Find P(fault | night).",
      solutionSteps: [
        "Restrict the reference group to the 40 night-shift observations.",
        "Within that group, 12 had the fault.",
        "P(fault | night) = 12 / 40 = 0.30.",
        "Do not divide by all 200 shifts because the condition after the bar defines the denominator.",
      ],
      answer: "P(fault | night) = 0.30, or 30%.",
      interpretation: "This does not show that night shift causes faults. Equipment mix, workload, staffing, or measurement differences may confound the association.",
    },
    {
      id: "example-02-02-04",
      title: "Check whether two events are independent",
      problem: "Suppose P(overheat) = 0.10 and P(overheat | high load) = 0.25. Are overheat and high load independent?",
      solutionSteps: [
        "For independence, conditioning on high load must not change the overheat probability.",
        "Compare P(overheat | high load) = 0.25 with P(overheat) = 0.10.",
        "The values are not equal.",
        "Therefore the events are associated and not independent in this population.",
      ],
      answer: "No. Overheat and high load are not independent.",
      interpretation: "Dependence is evidence of association, not automatically causation. The data-generating process still requires investigation.",
    },
    {
      id: "example-02-02-05",
      title: "Update a rare fault probability with Bayes reasoning",
      problem: "The bearing-fault rate is 2%. An alert has 90% sensitivity and a 10% false-positive rate. Find P(fault | alert).",
      solutionSteps: [
        "Imagine 1,000 robot-shifts: 20 have faults and 980 do not.",
        "True alerts: 0.90 × 20 = 18.",
        "False alerts: 0.10 × 980 = 98.",
        "Total alerts: 18 + 98 = 116.",
        "P(fault | alert) = 18 / 116 ≈ 0.155.",
      ],
      answer: "P(fault | alert) ≈ 15.5%.",
      interpretation: "The alert raises risk from 2% to about 15.5%, which may justify inspection, but it does not imply a 90% chance of fault.",
    },
    {
      id: "example-02-02-06",
      title: "Use the multiplication rule for a sequence",
      problem: "A verified fault has a 60% chance of requiring inspection, and an inspected fault has a 25% chance of requiring shutdown. Find the probability that a verified fault follows both steps.",
      solutionSteps: [
        "Let I be inspection and S be shutdown.",
        "Use P(I ∩ S | fault) = P(I | fault)P(S | I and fault).",
        "Multiply 0.60 × 0.25 = 0.15.",
        "The second probability is conditional on reaching the inspection branch.",
      ],
      answer: "The probability is 0.15, or 15% of verified faults.",
      interpretation: "Multiplying marginal probabilities without the correct conditional path can misstate the probability of a sequence.",
    },
  ],

  interactiveExploration: {
    title: "Build and Stress-Test a Bayes Frequency Tree",
    description:
      "Use natural counts to make every branch visible, then vary the base rate and evidence quality to see which factor changes posterior risk most.",
    instructions: [
      "Define the unit, target event, evidence event, eligible population, and prediction time.",
      "Choose a natural population of 1,000 or 10,000 cases.",
      "Split the population into target-positive and target-negative cases using the base rate.",
      "Apply sensitivity to the positive branch and the false-positive rate to the negative branch.",
      "Create four counts: true positives, false negatives, false positives, and true negatives.",
      "Calculate P(target | positive evidence) and P(target | negative evidence).",
      "Repeat using a lower and higher base rate while holding test behavior constant.",
      "Repeat using better specificity while holding the base rate constant.",
      "Compare posterior probability with the cost and capacity of the proposed action.",
      "Document every assumption and identify which estimates require validation.",
    ],
    investigationQuestions: [
      "Why can false positives outnumber true positives for a rare event?",
      "Which matters more in this scenario: sensitivity, specificity, or base rate?",
      "How does changing the reference population change the prior?",
      "What threshold balances missed faults against unnecessary inspections?",
      "How would dataset shift make the posterior probability unreliable?",
      "What evidence would justify an automatic shutdown rather than human inspection?",
    ],
    expectedDiscovery:
      "Posterior probability is not a fixed property of a test or model. It changes with the base rate, evidence quality, population, and time. Natural frequencies reveal this more clearly than isolated percentages.",
  },

  realWorldApplications: [
    { field: "Manufacturing and Robotics", application: "Combine fault prevalence with sensor sensitivity and false-alert behavior to prioritize inspections without confusing alerts with confirmed failures." },
    { field: "Healthcare", application: "Interpret screening results using disease prevalence, sensitivity, specificity, patient context, and confirmatory testing." },
    { field: "Finance and Fraud", application: "Update transaction risk from a base fraud rate and multiple signals while managing the cost of blocked legitimate transactions." },
    { field: "Education", application: "Use attendance, assessment, and engagement evidence to update support risk without labeling students as certain failures." },
    { field: "Cybersecurity", application: "Prioritize alerts by combining threat prevalence, detector behavior, asset criticality, and corroborating evidence." },
    { field: "Machine Learning and AI", application: "Interpret classifier outputs, confusion matrices, precision, recall, calibration, and threshold tradeoffs under changing prevalence." },
  ],

  aiConnection: {
    title: "A Model Score Is a Conditional Probability Claim",
    explanation:
      "Classification models estimate a class, score, or probability from evidence. Their usefulness depends on the target definition, training population, prevalence, calibration, threshold, and the action connected to the output. Precision can fall when deployment prevalence differs from evaluation prevalence, even if sensitivity and specificity appear stable.",
    example:
      "A model detects 90% of future failures in a balanced test dataset. In production, failures occur in only 2% of shifts. Without adjusting for the real base rate and monitoring calibration, users may assume that every alert is highly reliable and overload the maintenance team.",
    uses: ["Risk scoring", "Anomaly triage", "Fraud detection", "Predictive maintenance", "Medical screening", "Model calibration", "Threshold selection"],
    caution:
      "Bayes' theorem cannot repair a poorly defined target, biased sample, leaked feature, unstable sensor, or invalid likelihood estimate. Mathematical correctness does not guarantee evidentiary validity.",
    reflectionQuestion:
      "If the same model is deployed in two plants with different fault prevalence, should the same score threshold trigger the same action? Why or why not?",
  },

  pythonLab: {
    title: "Analyze Robot Alerts with pandas and Bayes Reasoning",
    objective:
      "Construct a confusion matrix from operational counts, calculate conditional probabilities, verify Bayes' theorem, and stress-test how the base rate changes positive predictive value.",
    code: `import pandas as pd

# One row summarizes each actual-state and alert combination.
counts = pd.DataFrame({
    "fault": [True, True, False, False],
    "alert": [True, False, True, False],
    "count": [18, 2, 98, 882],
})

total = counts["count"].sum()
fault_total = counts.loc[counts["fault"], "count"].sum()
healthy_total = counts.loc[~counts["fault"], "count"].sum()
alert_total = counts.loc[counts["alert"], "count"].sum()

true_positive = counts.loc[
    counts["fault"] & counts["alert"], "count"
].sum()
false_positive = counts.loc[
    ~counts["fault"] & counts["alert"], "count"
].sum()
true_negative = counts.loc[
    ~counts["fault"] & ~counts["alert"], "count"
].sum()

prior_fault = fault_total / total
sensitivity = true_positive / fault_total
specificity = true_negative / healthy_total
false_positive_rate = false_positive / healthy_total
posterior_fault_given_alert = true_positive / alert_total

evidence_probability = (
    sensitivity * prior_fault
    + false_positive_rate * (1 - prior_fault)
)
bayes_posterior = sensitivity * prior_fault / evidence_probability

metrics = pd.Series({
    "prior_fault": prior_fault,
    "sensitivity": sensitivity,
    "specificity": specificity,
    "false_positive_rate": false_positive_rate,
    "p_fault_given_alert": posterior_fault_given_alert,
    "bayes_posterior": bayes_posterior,
})

print("Confusion-matrix counts:\\n", counts)
print("\\nProbability metrics:\\n", metrics.round(4))

# Stress-test PPV under different deployment base rates.
base_rates = pd.Series([0.01, 0.02, 0.05, 0.10], name="base_rate")
ppv = (
    sensitivity * base_rates
    / (
        sensitivity * base_rates
        + false_positive_rate * (1 - base_rates)
    )
)

stress_test = pd.DataFrame({
    "base_rate": base_rates,
    "p_fault_given_alert": ppv,
})

print("\\nBase-rate stress test:\\n", stress_test.round(4))

assert total == 1000
assert abs(posterior_fault_given_alert - bayes_posterior) < 1e-12
assert metrics.between(0, 1).all()`,
    questions: [
      "What are the prior fault probability and posterior fault probability after an alert?",
      "Why do the direct count calculation and Bayes formula produce the same result?",
      "How many false alerts occur for every true alert?",
      "How does positive predictive value change as the base rate rises?",
      "Which metric would improve most if false positives were reduced?",
      "What operational fields should be added to validate performance by plant, robot type, shift, and time?",
    ],
    reflectionQuestions: [
      "Is a 15.5% posterior risk high enough to justify inspection?",
      "Which error is more costly: a missed bearing fault or an unnecessary inspection?",
      "What monitoring rule would reveal that calibration or prevalence has changed?",
    ],
    extension:
      "Add plant and robot-type segments, calculate sensitivity, specificity, and positive predictive value for each group, attach confidence intervals, and recommend group-aware thresholds only when the evidence and governance justify them.",
  },

  guidedPractice: [
    { id: "gp-02-02-01", question: "If P(fault) = 0.07, find P(no fault).", answer: "P(no fault) = 1 − 0.07 = 0.93." },
    { id: "gp-02-02-02", question: "If P(A) = 0.30, P(B) = 0.25, and P(A ∩ B) = 0.10, find P(A ∪ B).", answer: "0.30 + 0.25 − 0.10 = 0.45." },
    { id: "gp-02-02-03", question: "Among 50 alerted shifts, 8 have confirmed faults. Find P(fault | alert).", answer: "8 / 50 = 0.16, or 16%. The alerted shifts are the denominator." },
    { id: "gp-02-02-04", question: "If P(A) = 0.40 and P(A | B) = 0.40, what relationship is suggested?", answer: "A and B are consistent with independence, assuming the probabilities are valid and P(B) > 0." },
    { id: "gp-02-02-05", question: "Explain the difference between P(alert | fault) and P(fault | alert).", answer: "The first is sensitivity: the alert rate among faults. The second is positive predictive value: the fault rate among alerts. They reverse the condition and denominator." },
    { id: "gp-02-02-06", question: "Why does a rare target often produce a low positive predictive value?", answer: "The large negative population can produce many false positives even when the false-positive rate is modest, so false alerts may outnumber true alerts." },
  ],

  independentPractice: [
    { id: "ip-02-02-01", difficulty: "Foundational", question: "A quality check passes 94% of units. Find the probability a unit does not pass.", sampleAnswer: "1 − 0.94 = 0.06, or 6%." },
    { id: "ip-02-02-02", difficulty: "Foundational", question: "Explain why mutually exclusive events with positive probability are not independent.", sampleAnswer: "If one occurs, the other becomes impossible, so conditioning changes its probability to zero." },
    { id: "ip-02-02-03", difficulty: "Applied", question: "Create a two-way table for 500 transactions using a 4% fraud rate, 80% sensitivity, and 5% false-positive rate.", sampleAnswer: "Fraud: 20, with 16 alerts and 4 misses. Legitimate: 480, with 24 false alerts and 456 correct negatives. Total alerts = 40; P(fraud | alert) = 16/40 = 40%." },
    { id: "ip-02-02-04", difficulty: "Applied", question: "A model's alert rate is higher on night shift. List explanations that do not assume night shift causes risk.", sampleAnswer: "Different equipment, workloads, products, operators, maintenance schedules, sensor quality, missingness, or thresholds could explain the association." },
    { id: "ip-02-02-05", difficulty: "Analytical", question: "Compare two detectors with equal sensitivity but different specificity for a rare event.", sampleAnswer: "The detector with higher specificity produces fewer false positives and generally higher positive predictive value, especially when the event is rare." },
    { id: "ip-02-02-06", difficulty: "Advanced", question: "Design a threshold policy with continue, inspect, slow, and stop actions.", sampleAnswer: "Map calibrated risk bands to consequences, costs, capacity, evidence requirements, human authority, override rules, monitoring, and rollback." },
    { id: "ip-02-02-07", difficulty: "Professional", question: "Audit a probability score shown on an executive dashboard.", sampleAnswer: "Verify target, unit, time horizon, population, base rate, sample design, calibration, discrimination, threshold, subgroup performance, uncertainty, action, ownership, and drift monitoring." },
  ],

  commonMistakes: [
    { mistake: "Reversing conditional probabilities.", correction: "Name the numerator and restricted denominator in words before calculating P(A | B); do not substitute P(B | A)." },
    { mistake: "Ignoring the base rate.", correction: "Begin with a relevant prevalence for the deployment population and time window before interpreting evidence." },
    { mistake: "Treating mutually exclusive events as independent.", correction: "Mutually exclusive events cannot occur together; independent events do not change one another's probabilities." },
    { mistake: "Adding overlapping probabilities without subtracting the intersection.", correction: "Use the general addition rule unless the events are verified to be mutually exclusive." },
    { mistake: "Multiplying probabilities as though every event were independent.", correction: "Use the conditional multiplication rule and justify any independence assumption." },
    { mistake: "Treating a posterior probability as certainty.", correction: "Communicate the residual uncertainty, evidence limits, decision threshold, and consequences of errors." },
    { mistake: "Using test-set precision as a permanent production property.", correction: "Monitor prevalence, calibration, data quality, and performance by relevant group and time because deployment conditions change." },
  ],

  discussionQuestions: [
    "When should a low-probability event still trigger an expensive preventive action?",
    "How should decision-makers choose between improving sensitivity and improving specificity?",
    "Can two people reasonably choose different actions from the same posterior probability?",
    "What makes a prior probability credible, fair, and relevant?",
    "How should an AI system explain a probability update to someone affected by the decision?",
  ],

  formativeAssessment: {
    totalPoints: 30,
    passingScore: 24,
    questions: [
      { id: "check-02-02-01", type: "calculation", points: 5, prompt: "If P(A) = 0.65, calculate P(Aᶜ).", sampleAnswer: "P(Aᶜ) = 1 − 0.65 = 0.35." },
      { id: "check-02-02-02", type: "calculation", points: 5, prompt: "If P(A) = 0.40, P(B) = 0.35, and P(A ∩ B) = 0.15, calculate P(A ∪ B).", sampleAnswer: "0.40 + 0.35 − 0.15 = 0.60." },
      { id: "check-02-02-03", type: "interpretation", points: 5, prompt: "Interpret P(fault | alert) = 0.20 in words.", sampleAnswer: "Among cases that produced an alert in the defined population and period, 20% have the defined fault." },
      { id: "check-02-02-04", type: "reasoning", points: 5, prompt: "Explain why 90% sensitivity does not mean a positive alert is 90% correct.", sampleAnswer: "Sensitivity conditions on actual positives, while alert correctness conditions on alerts and also depends on prevalence and false positives." },
      { id: "check-02-02-05", type: "calculation", points: 5, prompt: "In 1,000 cases with 2% prevalence, 90% sensitivity, and 10% false-positive rate, calculate true and false alerts.", sampleAnswer: "20 positives produce 18 true alerts; 980 negatives produce 98 false alerts." },
      { id: "check-02-02-06", type: "decision", points: 5, prompt: "List what must be considered before converting a posterior probability into an automatic action.", sampleAnswer: "Calibration, uncertainty, costs of both errors, capacity, guardrails, affected people, human authority, threshold evidence, monitoring, appeal, and rollback." },
    ],
  },

  researchExtension: {
    title: "Investigate the Base-Rate Effect in a Real Decision System",
    researchQuestion:
      "How does changing prevalence alter the meaning and operational value of the same test, detector, or AI model?",
    applicationOptions: ["Predictive maintenance", "Medical screening", "Fraud detection", "Cybersecurity alerts", "Student-support flags", "Quality inspection"],
    task:
      "Choose one system, document its target and evidence, identify or construct defensible sensitivity and specificity estimates, and compare posterior probabilities across at least three plausible base rates. Recommend actions and monitoring rules for each scenario.",
    requiredEvidence: [
      "Clear unit, target, evidence, population, and time horizon",
      "Credible sources or transparent simulated assumptions",
      "Natural-frequency tables or trees",
      "Bayes calculations for at least three base rates",
      "Sensitivity analysis for evidence quality",
      "Error-cost and capacity discussion",
      "Limitations, fairness concerns, and monitoring recommendation",
    ],
  },

  portfolioArtifact: {
    title: "Statistical Investigation, Part 2: Probability and Bayes Brief",
    description:
      "Extend your Module 2 investigation by defining one uncertain event and one evidence signal, then produce a reproducible Bayes update and decision recommendation.",
    requiredSections: [
      "Decision question, unit, target event, evidence event, population, and time horizon",
      "Sample space and event definitions",
      "Prior or base-rate estimate with source and limitations",
      "Joint, marginal, and conditional probability table",
      "Sensitivity, specificity, and false-positive-rate interpretation",
      "Natural-frequency tree or confusion matrix",
      "Bayes posterior calculation and independent verification",
      "Base-rate and evidence-quality sensitivity analysis",
      "Decision thresholds, costs, capacity, guardrails, and human authority",
      "Monitoring plan for prevalence, calibration, drift, and subgroup performance",
    ],
    requiredEvidence: [
      "Reproducible Python, spreadsheet, or SQL calculation",
      "One labeled probability tree or flow figure",
      "One confusion matrix or two-way count table",
      "One base-rate stress-test table or chart",
      "One error-cost comparison",
      "One decision recommendation with uncertainty and limitations",
    ],
  },

  growthIndicators: [
    { title: "Probability Framer", description: "You define the experiment, reference population, events, and time horizon before calculating." },
    { title: "Conditional Thinker", description: "You identify the correct restricted denominator and avoid reversing conditional probabilities." },
    { title: "Bayes Reasoner", description: "You combine base rates and evidence behavior using formulas, counts, and transparent assumptions." },
    { title: "Risk Decision Designer", description: "You connect calibrated uncertainty to proportionate actions, guardrails, capacity, and monitoring." },
  ],

  reflection: [
    "Which probability in your project is currently being treated as if it were certain?",
    "What is the most defensible base rate for your target population and time window?",
    "Which conditional probability are stakeholders most likely to reverse?",
    "How would a lower base rate change the meaning of a positive model alert?",
    "Which error is more harmful, and who experiences that harm?",
    "What new evidence should trigger another probability update?",
  ],

  summary: [
    "Probability quantifies uncertainty for a defined experiment, population, and set of events.",
    "Complements, unions, and intersections must preserve the logic of the sample space.",
    "Conditional probability changes the denominator to the group satisfying the condition after the bar.",
    "P(A | B) and P(B | A) answer different questions and are usually not equal.",
    "Mutually exclusive events cannot occur together, while independent events do not change one another's probabilities.",
    "The multiplication rule uses a conditional branch unless independence is justified.",
    "Bayes' theorem combines a prior probability with the likelihood of observed evidence.",
    "Sensitivity is P(alert | fault); positive predictive value is P(fault | alert).",
    "For rare events, false positives can outnumber true positives even when a detector appears accurate.",
    "Posterior probabilities depend on prevalence, evidence quality, population, time, and calibration.",
    "A probability becomes decision-ready only when connected to error costs, capacity, thresholds, guardrails, and monitoring.",
  ],

  previousLesson: {
    id: "data-ai-m02-l01",
    moduleNumber: 2,
    slug: "center-spread-shape-and-unusual-observations",
    title: "Center, Spread, Shape, and Unusual Observations",
  },
  nextLesson: null,

  lumineryGuidance: {
    message:
      "Never interpret a positive signal without the base rate, the signal's error behavior, and the decision consequences.",
    prompt:
      "Help me analyze an uncertain decision using probability and Bayes reasoning. First define the unit, target event, evidence, sample space, population, and time horizon. Then identify the prior, calculate joint and conditional probabilities, verify sensitivity and false-positive behavior, build a natural-frequency table, calculate the posterior, stress-test assumptions, and recommend a proportionate action with guardrails and monitoring.",
    coachingQuestions: [
      "What is the exact event and reference population?",
      "What probability applies before the new evidence?",
      "How likely is this evidence when the target is present and absent?",
      "Are any conditional probabilities being reversed?",
      "What do natural counts show among 1,000 comparable cases?",
      "How sensitive is the posterior to prevalence or model drift?",
      "Which action threshold balances harm, cost, capacity, and uncertainty?",
    ],
  },
};

export default lesson02;
