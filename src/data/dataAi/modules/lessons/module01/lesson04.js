const lesson04 = {
  id: "data-ai-m01-l04",
  courseId: "data-ai-foundations",
  moduleId: "data-ai-foundations-module-01",
  moduleNumber: 1,
  lessonNumber: 4,
  slug: "units-of-analysis-features-targets-and-actions",
  title: "Units of Analysis, Features, Targets, and Actions",
  shortTitle: "Units, Features, Targets, and Actions",
  subtitle:
    "Design the analytical table correctly by deciding what each row represents, what evidence is available, what outcome is learned, and what action follows.",
  status: "available",
  duration: "105-120 minutes",
  level: "Beginner to Professional",

  essentialQuestion:
    "How do we translate a real decision into the correct unit of analysis, trustworthy features, a meaningful target, and an actionable output?",
  bigIdea:
    "Every analytical or machine-learning system makes a claim about a specific unit at a specific time. The row grain, feature cutoff, target window, and available action must agree; otherwise even an accurate model can answer the wrong question or leak future information.",

  whyThisLessonExists: {
    title: "The Row Is the First Model",
    introduction:
      "Before choosing an algorithm, a data team chooses what one row means. A row might represent one customer per month, one machine per hour, one transaction, one student per week, or one image. That choice determines which features can be computed, which outcome can be assigned, and which action is possible.",
    centralProblem:
      "Teams often combine data at incompatible grains, include information recorded after the decision, choose a convenient but misleading target, or produce a prediction that no one can act on.",
    purpose:
      "This lesson gives you a precise modeling-frame method: define the unit, prediction time, feature window, target window, target rule, available actions, and evaluation population before building a training table.",
  },

  problemFirst: {
    title: "Opening Investigation: Predictive Maintenance for a Robot",
    scenario:
      "A factory uses mobile robots. Sensor readings arrive every second, maintenance notes are written after inspections, and failures are recorded as repair events. The operations manager wants an early warning that identifies robots needing inspection during the next shift.",
    questions: [
      "Should one row represent a sensor reading, robot-second, robot-hour, robot-shift, or repair event?",
      "At what exact time must the inspection decision be made?",
      "Which temperature, current, vibration, battery, and distance measurements are available before that time?",
      "What event counts as the target: any warning, an inspection, a confirmed fault, or a repair?",
      "How far into the future should the target window extend?",
      "What action can the manager actually take, and how many robots can be inspected?",
    ],
    expectedInsight:
      "A useful design could use one robot-shift as the unit, features from the previous shift, a target of confirmed inspection-worthy failure during the next shift, and actions such as continue, inspect, or stop. The exact design must match the operational workflow and evidence timing.",
  },

  learningObjectives: [
    "Define the unit of analysis and row grain for an analytical table.",
    "Distinguish entity, event, measurement, time-window, and media units.",
    "Separate raw variables, engineered features, identifiers, targets, predictions, and actions.",
    "Specify a prediction time, feature window, evidence cutoff, and target window.",
    "Recognize target leakage, label leakage, duplicate units, and grain mismatch.",
    "Design classification, regression, ranking, and forecasting targets appropriately.",
    "Connect a model output to feasible actions, capacity, costs, and human oversight.",
    "Create a reproducible modeling-frame specification for a portfolio project.",
  ],

  prerequisiteKnowledge: [
    "Lesson 2: measurable decisions and evidence cutoffs",
    "Lesson 3: data forms, schema, grain, parsing, and lineage",
    "Rows, columns, timestamps, identifiers, and basic aggregation",
    "Rates, averages, and time-window reasoning",
  ],

  vocabulary: [
    { term: "Unit of analysis", definition: "The entity, event, measurement, document, or time-bounded case about which an analysis makes one claim." },
    { term: "Row grain", definition: "The exact meaning represented by one row, including entity and time scope." },
    { term: "Observation", definition: "One recorded instance of the unit of analysis." },
    { term: "Feature", definition: "A variable available at decision time and used as input to an analysis or model." },
    { term: "Feature engineering", definition: "Transforming available raw evidence into useful, reproducible inputs such as counts, rates, trends, and categories." },
    { term: "Identifier", definition: "A field used to distinguish or join records; it is not automatically a meaningful predictive feature." },
    { term: "Target", definition: "The outcome a supervised model is trained to estimate, defined by an explicit rule and observation window." },
    { term: "Label", definition: "The recorded value assigned to the target for a training observation." },
    { term: "Prediction time", definition: "The moment when features are frozen and a score must be produced for action." },
    { term: "Feature window", definition: "The historical period used to calculate input features before prediction time." },
    { term: "Target window", definition: "The future period after prediction time during which the outcome is observed." },
    { term: "Data leakage", definition: "Information unavailable at real prediction time enters training and creates unrealistically strong performance." },
    { term: "Proxy target", definition: "An indirect outcome used when the true outcome is unavailable or delayed." },
    { term: "Prediction", definition: "A model-generated estimate such as a probability, class, amount, rank, or future value." },
    { term: "Action", definition: "An operational choice made by an authorized person or system after considering the model output and other evidence." },
    { term: "Actionability", definition: "The degree to which an output arrives in time and supports a feasible, beneficial response." },
  ],

  formulas: [
    {
      id: "feature-vector",
      name: "Feature vector",
      formula: "xᵢ = [xᵢ₁, xᵢ₂, …, xᵢₚ]",
      meaning: "Observation i is represented by p feature values available at its prediction time.",
      requirement: "Every feature needs a definition, source, calculation, time window, and availability rule.",
    },
    {
      id: "supervised-map",
      name: "Supervised-learning map",
      formula: "ŷᵢ = f(xᵢ)",
      meaning: "The model maps available features to an estimated target for the same analytical unit.",
      requirement: "The feature vector and target must refer to the same unit, with features measured before the target outcome.",
    },
    {
      id: "binary-target",
      name: "Binary target rule",
      formula: "yᵢ = 1 if outcome occurs in target window; otherwise 0",
      meaning: "A classification label requires exact eligibility, outcome, and timing rules.",
      requirement: "Handle incomplete follow-up separately instead of automatically labeling it zero.",
    },
    {
      id: "window-feature",
      name: "Windowed average feature",
      formula: "x̄ᵢ = (1/n) Σ xᵢt for t in the feature window",
      meaning: "Multiple historical measurements are summarized into one feature for each analytical unit.",
      requirement: "Use only measurements timestamped before the evidence cutoff.",
    },
    {
      id: "action-rule",
      name: "Capacity-aware action rule",
      formula: "Act if score ≥ threshold and capacity is available",
      meaning: "A prediction becomes operational only through an explicit rule, constraint, and accountable decision owner.",
      requirement: "Evaluate benefits, false positives, false negatives, delay, fairness, and review capacity.",
    },
  ],

  workedExamples: [
    {
      id: "example-04-01",
      title: "Define a robot-maintenance modeling frame",
      problem: "Design the unit, features, target, and action for a next-shift equipment warning.",
      solutionSteps: [
        "Unit: one active robot at the start of each work shift.",
        "Prediction time: shift start; evidence cutoff: five minutes before shift start.",
        "Feature window: previous shift, using maximum temperature, mean and change in current, vibration RMS, battery decline, obstacle count, and missing-reading rate.",
        "Target: confirmed inspection-worthy mechanical or electrical fault during the next shift.",
        "Action: continue monitoring, schedule inspection, or stop for immediate safety review.",
        "Guardrails: inspection capacity, safety rules, false-negative cost, model confidence, and technician override.",
      ],
      answer: "One row represents one robot-shift decision opportunity, not one raw sensor reading.",
      interpretation: "Second-level readings are source evidence. Aggregation creates features at the operational decision grain.",
    },
    {
      id: "example-04-02",
      title: "Prevent leakage in student-support prediction",
      problem: "A weekly model predicts whether a student will fail the current course. The table includes final_grade and end_of_term_status. Identify the problem.",
      solutionSteps: [
        "Set prediction time to Monday morning and freeze evidence available by Sunday night.",
        "Final grade and end-of-term status occur after prediction time and directly reveal the target.",
        "Remove them and any fields derived from later intervention or outcome data.",
        "Use prior attendance, submitted work, earlier assessments, course context, and support history only when permitted and available.",
        "Create a time-based validation split that reproduces real deployment.",
      ],
      answer: "The two fields cause target leakage and must not be features.",
      interpretation: "Leakage allows the model to remember the future rather than learn a deployable relationship.",
    },
    {
      id: "example-04-03",
      title: "Resolve incompatible grains in an order analysis",
      problem: "An orders table has one row per order, while order_items has several rows per order. How can item data become order-level features?",
      solutionSteps: [
        "Declare the modeling unit as one order at checkout.",
        "Aggregate items by order_id before joining: item count, total quantity, distinct categories, weight, and calculated value.",
        "Verify one output row per order after the join.",
        "Exclude fulfillment events that occur after checkout if predicting late delivery at checkout.",
      ],
      answer: "Aggregate the many-side table to order grain before joining it to the one-row-per-order table.",
      interpretation: "A technically valid join can still duplicate units and corrupt training weights or measures.",
    },
    {
      id: "example-04-04",
      title: "Choose a useful fraud target",
      problem: "A bank proposes using 'transaction reviewed' as the fraud target. Why may this be a harmful proxy?",
      solutionSteps: [
        "Review is an action influenced by earlier rules, staffing, and historical suspicion.",
        "Using it as truth teaches the model to reproduce previous review patterns rather than confirmed fraud.",
        "Prefer a governed confirmed-fraud outcome, while documenting delay, disputed cases, and incomplete labels.",
        "Measure performance across relevant transaction and customer groups.",
      ],
      answer: "The proposed label reflects prior decisions and selection bias, not necessarily the real outcome.",
      interpretation: "Targets encode institutional history. Convenient labels can reproduce past blind spots and unequal scrutiny.",
    },
    {
      id: "example-04-05",
      title: "Connect a churn score to action",
      problem: "A model assigns a 0.82 cancellation probability. What else is required before contacting the customer?",
      solutionSteps: [
        "Confirm the customer is eligible, contactable, and within the campaign population.",
        "Compare the score with a validated threshold and available contact capacity.",
        "Determine whether an approved intervention fits the customer's situation.",
        "Respect consent, contact-frequency, fairness, and cost rules.",
        "Measure incremental retention, not only whether high-risk customers were contacted.",
      ],
      answer: "A score needs an action policy, eligibility rules, capacity, oversight, and outcome evaluation.",
      interpretation: "Prediction is evidence for a decision; it is not the decision itself.",
    },
  ],

  interactiveExploration: {
    title: "Build the Modeling-Frame Timeline",
    description: "Use one horizontal timeline to make the information boundary visible before creating a dataset.",
    instructions: [
      "Name the decision owner, action, eligible population, and decision frequency.",
      "Write the unit as: one [entity or event] per [time or decision opportunity].",
      "Mark prediction time and evidence cutoff.",
      "Draw the feature window to the left and list only evidence available there.",
      "Draw the target window to the right and define the outcome rule.",
      "List identifiers, raw fields, engineered features, target, prediction, and action separately.",
      "Challenge every field: when is it created, updated, corrected, and visible in production?",
      "Test uniqueness, follow-up completeness, and whether action capacity matches scoring volume.",
    ],
    investigationQuestions: [
      "Could two rows describe the same decision opportunity?",
      "Does every unit have enough future observation time to receive a reliable label?",
      "Which features may be consequences of an intervention rather than predictors available beforehand?",
      "Would the design still work if a record arrived late or was corrected?",
      "What action occurs for a high score, and who may override it?",
    ],
    expectedDiscovery: "Most modeling errors can be seen on a timeline before code is written. Temporal boundaries make leakage, label delay, duplicate units, and unactionable outputs easier to detect.",
  },

  realWorldApplications: [
    { field: "Manufacturing and Robotics", application: "Use one machine-shift as the unit, prior sensor summaries as features, a confirmed next-shift fault as target, and inspection or stop decisions as actions." },
    { field: "Education", application: "Use one student-week decision opportunity, evidence available before advising, a meaningful support outcome, and capacity-aware human outreach." },
    { field: "Finance", application: "Score one transaction at authorization time using prior evidence, then approve, decline, or route for review under regulatory and fairness controls." },
    { field: "Healthcare", application: "Define one patient encounter or clinical decision point, prevent post-outcome leakage, and keep qualified professionals responsible for high-stakes actions." },
    { field: "Supply Chain", application: "Forecast one item-location-period using historical demand and known future drivers, then connect forecasts to replenishment constraints." },
    { field: "Cybersecurity", application: "Represent one session, account-day, or event sequence and route suspicious cases to bounded investigation workflows." },
  ],

  aiConnection: {
    title: "AI Learns the Problem Definition You Encode",
    explanation: "Algorithms do not discover the correct unit, target, or action automatically. They optimize relationships in the training table people construct. A flawed table can produce excellent validation metrics for the wrong operational claim.",
    example: "A robot-failure model trained on individual sensor seconds may appear to have millions of examples, although adjacent rows come from the same few robots and failures. Splitting those rows randomly leaks machine-specific patterns across training and testing.",
    uses: ["Classification", "Regression", "Forecasting", "Ranking", "Anomaly detection", "Predictive maintenance"],
    caution: "Do not use protected characteristics or sensitive proxies merely because they improve prediction. Feature inclusion requires purpose, authority, necessity, quality, and impact review.",
    reflectionQuestion: "If a model predicts an outcome accurately but no safe or beneficial action can change that outcome, should the system be deployed?",
  },

  pythonLab: {
    title: "Create a Leakage-Safe Robot-Shift Table",
    objective: "Aggregate second-level sensor readings into one row per robot-shift using only evidence before the prediction time.",
    code: `import pandas as pd

# sensor_readings.csv can come from the Lesson 3 robot collector.
df = pd.read_csv("sensor_readings.csv", parse_dates=["timestamp_utc"])
df = df.sort_values(["robot_id", "timestamp_utc"])

# Example: four-hour shift decision opportunities.
df["shift_start"] = df["timestamp_utc"].dt.floor("4h")

features = (
    df.groupby(["robot_id", "shift_start"], as_index=False)
      .agg(
          temperature_max=("motor_temperature_c", "max"),
          current_mean=("motor_current_a", "mean"),
          current_max=("motor_current_a", "max"),
          vibration_mean=("vibration_rms_g", "mean"),
          battery_min=("battery_voltage_v", "min"),
          obstacle_count=("fault_type", lambda s: (s == "obstacle_detected").sum()),
          invalid_rate=("valid", lambda s: 1 - s.astype(bool).mean()),
      )
)

# Labels must come from a separate, later outcome table.
repairs = pd.read_csv("confirmed_repairs.csv", parse_dates=["repair_time"])
repairs["shift_start"] = repairs["repair_time"].dt.floor("4h") - pd.Timedelta(hours=4)
repairs["fault_next_shift"] = 1

model_table = features.merge(
    repairs[["robot_id", "shift_start", "fault_next_shift"]],
    on=["robot_id", "shift_start"],
    how="left",
)
model_table["fault_next_shift"] = model_table["fault_next_shift"].fillna(0).astype(int)

assert not model_table.duplicated(["robot_id", "shift_start"]).any()
print(model_table.head())`,
    questions: [
      "What does one row in model_table represent?",
      "Why should confirmed repairs come from a separate later outcome table?",
      "Which line checks unit uniqueness?",
      "When would filling a missing label with zero be incorrect?",
      "How would you split the table for realistic time-based evaluation?",
    ],
    reflectionQuestions: [
      "Are four-hour shifts the real decision frequency in your setting?",
      "Which feature could be distorted by missing sensor readings?",
      "What metadata is needed to reproduce this table later?",
    ],
    extension: "Add feature-window start, evidence cutoff, label-window end, and source-version columns. Then create a chronological training, validation, and test split by shift_start.",
  },

  guidedPractice: [
    { id: "gp-04-01", question: "Write the grain for a model that predicts next-month cancellation for active subscribers on the first day of each month.", answer: "One active subscriber per monthly prediction date." },
    { id: "gp-04-02", question: "Is customer_id normally an identifier, feature, target, or action?", answer: "It is primarily an identifier used to distinguish or join customer records; using it as a feature requires strong justification and often causes memorization." },
    { id: "gp-04-03", question: "A loan model includes loan_status recorded six months after application. What error is present?", answer: "Target leakage, because the field reveals the later outcome and is unavailable at application decision time." },
    { id: "gp-04-04", question: "For one machine-shift unit, give two raw measurements and two engineered features.", answer: "Raw: current and temperature readings. Engineered: maximum temperature and mean current during the prior shift." },
    { id: "gp-04-05", question: "Why is 'received an inspection' a weak failure target?", answer: "Inspection is an action shaped by existing policy and capacity; it does not necessarily mean a confirmed fault occurred." },
    { id: "gp-04-06", question: "Name the four parts that connect a training row to operations.", answer: "Unit, features available by the cutoff, target observed afterward, and feasible action based on the output." },
  ],

  independentPractice: [
    { id: "ip-04-01", difficulty: "Foundational", question: "Define unit, feature, target, and action for predicting late shipment at order checkout.", sampleAnswer: "Unit: one order at checkout. Features: item count, destination zone, promised service, warehouse load known at checkout. Target: delivered late relative to original promise. Action: adjust fulfillment plan or promise with human-approved rules." },
    { id: "ip-04-02", difficulty: "Foundational", question: "Explain the difference between a raw variable and an engineered feature.", sampleAnswer: "A raw variable is recorded directly; an engineered feature is reproducibly derived from available evidence, such as a seven-day count or change from baseline." },
    { id: "ip-04-03", difficulty: "Applied", question: "Design feature and target windows for weekly student-support decisions.", sampleAnswer: "Use evidence through Sunday night, summarize an approved prior period such as four weeks, predict a defined outcome during the following week or grading period, and preserve enough follow-up time for labels." },
    { id: "ip-04-04", difficulty: "Applied", question: "A join creates 2.6 rows per customer-month. Diagnose and correct the error.", sampleAnswer: "A many-side source was joined without aggregation. Group it to one record per customer-month or use a separately modeled event table, then verify uniqueness." },
    { id: "ip-04-05", difficulty: "Analytical", question: "Explain how interventions can contaminate later training labels and features.", sampleAnswer: "People selected for intervention receive actions that change outcomes and generate new fields. Without recording policy and treatment, the model may learn consequences of prior decisions rather than untreated risk." },
    { id: "ip-04-06", difficulty: "Advanced", question: "Design a unit and split strategy for robot readings collected every second from ten robots.", sampleAnswer: "Aggregate to the real decision opportunity, such as robot-shift; split chronologically and consider holding out robots to test generalization. Never randomly split adjacent seconds from the same episodes." },
    { id: "ip-04-07", difficulty: "Professional", question: "Audit one planned feature for purpose, availability, quality, privacy, fairness, stability, and action relevance.", sampleAnswer: "A complete answer documents each dimension, names evidence, identifies risk, and recommends include, revise, monitor, or exclude." },
  ],

  commonMistakes: [
    { mistake: "Starting with available columns instead of the decision unit.", correction: "Define one row, prediction time, and action first; then select minimum necessary evidence." },
    { mistake: "Confusing an identifier with a useful feature.", correction: "Use identifiers for lineage and joins unless their predictive role is legitimate, stable, necessary, and validated." },
    { mistake: "Joining tables at different grains without aggregation.", correction: "Declare each source grain, aggregate deliberately, and test uniqueness after every join." },
    { mistake: "Using future or corrected information during training.", correction: "Reconstruct what was truly available at the historical prediction time, including data delays and versions." },
    { mistake: "Treating missing follow-up as a negative label.", correction: "Confirm the full target window has elapsed and distinguish unknown outcomes from true negatives." },
    { mistake: "Choosing a target because it is easy to obtain.", correction: "Validate that the target represents the valued outcome and does not merely repeat earlier decisions or bias." },
    { mistake: "Deploying scores without an action policy.", correction: "Define eligibility, threshold, capacity, human authority, alternatives, documentation, and outcome monitoring." },
  ],

  discussionQuestions: [
    "Who should approve the unit of analysis and target for a high-impact AI system?",
    "Can the same raw data support several valid units of analysis? Give examples.",
    "When does feature engineering improve meaning, and when can it hide harmful assumptions?",
    "Should a model be built when the available action cannot help the people at highest predicted risk?",
    "How should teams document uncertainty or disagreement in target labels?",
  ],

  formativeAssessment: {
    totalPoints: 25,
    passingScore: 20,
    questions: [
      { id: "check-04-01", type: "concept", points: 5, prompt: "Define unit of analysis, feature, target, prediction, and action using one connected example.", sampleAnswer: "For robot maintenance: unit is one robot-shift; features summarize prior sensor evidence; target is confirmed next-shift fault; prediction is estimated fault probability; action is continue, inspect, or stop under policy." },
      { id: "check-04-02", type: "timeline", points: 5, prompt: "Explain feature window, prediction time, evidence cutoff, and target window.", sampleAnswer: "The feature window contains historical evidence; the cutoff is the last allowed timestamp; prediction time is when the score is produced; the target window is the later period in which the outcome is observed." },
      { id: "check-04-03", type: "diagnosis", points: 5, prompt: "Give three forms of leakage and one prevention method for each.", sampleAnswer: "Future outcome fields: enforce cutoff. Aggregates containing future events: use time-bounded computation. Randomly split repeated entities or episodes: use chronological or grouped splits." },
      { id: "check-04-04", type: "application", points: 5, prompt: "Create a complete modeling frame for one real decision.", sampleAnswer: "Full credit requires owner, action, unit, population, prediction time, cutoff, feature window, features, target rule, target window, constraints, and evaluation plan." },
      { id: "check-04-05", type: "reasoning", points: 5, prompt: "Why is model accuracy insufficient without an action design?", sampleAnswer: "Value depends on whether outputs arrive in time, change feasible actions, improve outcomes over a baseline, fit capacity, and avoid unacceptable error, harm, or unequal impact." },
    ],
  },

  researchExtension: {
    title: "Reconstruct a Published Modeling Frame",
    researchQuestion: "Does a published predictive system clearly define what one prediction means and when its information was available?",
    applicationOptions: ["Predictive maintenance", "Student-support system", "Medical risk score", "Fraud detection", "Demand forecast", "Recommendation system"],
    task: "Choose one documented system or research paper. Reconstruct its unit, prediction time, feature window, features, target definition, target window, split method, output, action, and oversight. Identify missing details and evaluate whether the reported evidence supports deployment claims.",
    requiredEvidence: ["Primary documentation or research source", "Modeling-frame timeline", "Feature and target dictionary", "Leakage and proxy-target audit", "Actionability and capacity analysis", "Proceed, revise, or stop recommendation"],
  },

  portfolioArtifact: {
    title: "Project Charter, Part 4: Modeling-Frame Specification",
    description: "Add a testable data-to-action specification to the project charter developed in Lessons 1-3.",
    requiredSections: [
      "Decision owner, action, eligible population, and decision frequency",
      "Unit of analysis and exact row-grain statement",
      "Prediction time, evidence cutoff, feature window, and target window",
      "Identifier, raw-field, feature, target, prediction, and action dictionary",
      "Feature availability and leakage audit",
      "Target rule, incomplete-follow-up handling, and proxy justification",
      "Join and aggregation plan with uniqueness tests",
      "Baseline, validation split, error costs, capacity, and human oversight",
    ],
    requiredEvidence: [
      "One modeling-frame timeline",
      "One example training row with sources and timestamps",
      "At least five candidate features with calculation rules",
      "One rejected feature and one rejected target with reasons",
      "One unit-grain validation test",
      "A proceed, revise, or stop readiness decision",
    ],
  },

  growthIndicators: [
    { title: "Grain Architect", description: "You define one row precisely and preserve it across joins and aggregations." },
    { title: "Temporal Reasoner", description: "You separate past evidence, prediction time, and future outcome without leakage." },
    { title: "Target Critic", description: "You challenge convenient labels, proxies, incomplete follow-up, and inherited bias." },
    { title: "Action Designer", description: "You connect outputs to feasible, capacity-aware, human-governed decisions." },
  ],

  reflection: [
    "What exactly does one row in your project represent?",
    "Which planned feature is most vulnerable to future-information leakage?",
    "Does your target measure the real outcome or an organizational proxy?",
    "What happens operationally after a high score is produced?",
    "Which design decision would another analyst need clarified before reproducing your table?",
  ],

  summary: [
    "The unit of analysis defines what one analytical claim and one row represent.",
    "Row grain must include entity, event, and time scope.",
    "Features must be available by the evidence cutoff at real prediction time.",
    "The target requires an explicit outcome rule, eligible population, and observation window.",
    "Identifiers, features, targets, predictions, and actions have different roles.",
    "Joining incompatible grains without controlled aggregation duplicates units and corrupts results.",
    "Leakage occurs whenever training uses information unavailable in the real workflow.",
    "Missing follow-up is not automatically a negative outcome.",
    "A prediction is evidence; an accountable action policy determines what happens next.",
    "A strong modeling frame makes the proposed claim testable before complex AI is built.",
  ],

  previousLesson: {
    id: "data-ai-m01-l03",
    slug: "structured-semi-structured-and-unstructured-data",
    title: "Structured, Semi-Structured, and Unstructured Data",
  },
  nextLesson: null,

  lumineryGuidance: {
    message: "Before selecting features, complete this sentence: one row represents one ___ at the moment ___, using only evidence available by ___.",
    prompt: "Help me audit my modeling frame. Ask about the decision, unit, grain, prediction time, evidence cutoff, feature window, target rule, target window, incomplete labels, leakage, action, capacity, and oversight. Challenge every ambiguous timestamp.",
    coachingQuestions: [
      "What does one row represent?",
      "When must the prediction be available?",
      "Could every feature truly be known then?",
      "What future event creates the label?",
      "Does the target represent the outcome people value?",
      "What feasible action follows the output?",
    ],
  },
};

export default lesson04;
