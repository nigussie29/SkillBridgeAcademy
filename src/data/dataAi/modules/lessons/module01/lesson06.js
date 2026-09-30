const lesson06 = {
  id: "data-ai-m01-l06",
  courseId: "data-ai-foundations",
  moduleId: "data-ai-foundations-module-01",
  moduleNumber: 1,
  lessonNumber: 6,
  slug: "the-end-to-end-data-and-ai-lifecycle",
  title: "The End-to-End Data and AI Lifecycle",
  shortTitle: "The Data and AI Lifecycle",
  subtitle:
    "Connect problem framing, governed data, analysis, modeling, deployment, monitoring, improvement, and retirement into one traceable operating system.",
  status: "available",
  duration: "110-125 minutes",
  level: "Beginner to Professional",

  essentialQuestion:
    "How does a data or AI project move responsibly from a real decision need to a monitored system that remains useful, safe, reproducible, and accountable over time?",
  bigIdea:
    "A data and AI system is not a one-time model or dashboard. It is a governed lifecycle of connected decisions, evidence, transformations, tests, releases, human actions, monitoring, learning, and eventual retirement.",

  whyThisLessonExists: {
    title: "The Product Is the Whole Lifecycle",
    introduction:
      "A strong notebook can fail in production. A high-performing model can receive stale data, send alerts too late, exceed review capacity, create unequal harm, or continue operating after the world changes. Real value depends on every stage working together.",
    centralProblem:
      "Teams often treat framing, engineering, analysis, modeling, deployment, governance, and operations as separate handoffs. Missing ownership and evidence between stages create silent failure, irreproducible results, and systems no one can safely maintain.",
    purpose:
      "This lesson provides an end-to-end lifecycle with explicit stage gates, artifacts, owners, feedback loops, monitoring, rollback, and retirement. Learners will design a system that can be audited from original decision to operational outcome.",
  },

  problemFirst: {
    title: "Opening Investigation: From Robot Sensor to Safe Action",
    scenario:
      "A factory wants to move its robot-maintenance idea from a successful notebook demonstration into daily operations. Sensor readings arrive continuously, repairs are recorded later, technicians have limited capacity, software releases can fail, robot behavior changes after maintenance, and safety officers require clear authority to stop the system.",
    questions: [
      "What must be decided before any data is collected or model is trained?",
      "How will raw sensor evidence become validated robot-shift features and labels?",
      "Which tests must pass before the system moves from development to pilot and production?",
      "Who owns data quality, model approval, alert review, incident response, and rollback?",
      "What should be monitored after launch besides prediction accuracy?",
      "When should the team retrain, revise, pause, roll back, or retire the system?",
    ],
    expectedInsight:
      "The operational product includes decision design, data contracts, reproducible transformations, evaluation, release controls, human workflow, observability, feedback, incident response, and retirement—not only the prediction model.",
  },

  learningObjectives: [
    "Explain the major stages of an end-to-end data and AI lifecycle and the evidence produced at each stage.",
    "Distinguish linear project plans from iterative lifecycle feedback loops.",
    "Assign accountable owners, inputs, outputs, risks, and stage-gate criteria.",
    "Trace data lineage from source event through transformation, model, decision, action, and outcome.",
    "Separate offline development evaluation from online operational monitoring.",
    "Design versioning and reproducibility controls for data, code, configuration, models, and environments.",
    "Create deployment, rollback, incident-response, retraining, and retirement rules.",
    "Build a complete lifecycle map for a portfolio project.",
  ],

  prerequisiteKnowledge: [
    "Lesson 1: data, information, analytics, machine learning, and AI",
    "Lesson 2: measurable decisions and accountable actions",
    "Lesson 3: data forms, schemas, metadata, quality, and lineage",
    "Lesson 4: units, features, targets, prediction time, and actions",
    "Lesson 5: KPIs, baselines, constraints, guardrails, and definitions of done",
  ],

  visualModels: [
    {
      id: "data-ai-lifecycle-map",
      type: "lifecycle",
      title: "The End-to-End Data and AI Lifecycle",
      description:
        "Each stage produces evidence for the next stage. Monitoring, outcomes, incidents, and user feedback can send the team back to any earlier stage.",
      stages: [
        { label: "1. Frame", detail: "Decision, people, action, KPI, constraints" },
        { label: "2. Acquire", detail: "Sources, authority, contracts, ingestion" },
        { label: "3. Prepare", detail: "Validate, transform, document lineage" },
        { label: "4. Analyze & Build", detail: "Explore, baseline, engineer, model" },
        { label: "5. Validate", detail: "Test, compare, review risk, approve" },
        { label: "6. Deploy", detail: "Release, integrate, secure, enable users" },
        { label: "7. Operate & Monitor", detail: "Observe data, service, decisions, outcomes" },
        { label: "8. Improve or Retire", detail: "Respond, roll back, retrain, redesign, retire" },
      ],
      feedback:
        "Feedback loop: production evidence changes requirements, data, design, evaluation, and operations.",
      interpretation:
        "The lifecycle is iterative. A failed gate blocks release, and a monitoring signal triggers investigation before change.",
    },
  ],

  vocabulary: [
    { term: "Lifecycle", definition: "The connected stages through which a data or AI system is conceived, built, validated, operated, improved, and retired." },
    { term: "Requirement", definition: "A documented condition the system, process, or evidence must satisfy for an approved use." },
    { term: "Stage gate", definition: "A review point with explicit evidence and approval criteria before work proceeds to the next lifecycle stage." },
    { term: "Ingestion", definition: "The controlled movement of source data into a platform for storage and processing." },
    { term: "Transformation", definition: "A reproducible operation that cleans, validates, combines, aggregates, or represents data for later use." },
    { term: "Data contract", definition: "An agreement defining a data product's schema, meaning, quality, ownership, delivery, and change rules." },
    { term: "Lineage", definition: "The traceable record of where data and outputs originated, how they changed, and where they were used." },
    { term: "Reproducibility", definition: "The ability to recreate an output from recorded data, code, configuration, dependencies, and environment." },
    { term: "Versioning", definition: "Assigning identifiable states to data, code, configuration, features, models, prompts, and documentation." },
    { term: "Experiment tracking", definition: "Recording inputs, parameters, metrics, artifacts, and results for each analytical or modeling run." },
    { term: "Deployment", definition: "Releasing an approved data or AI capability into an environment where intended users or systems can use it." },
    { term: "Inference", definition: "Using a trained model or configured AI system to generate an output for new input." },
    { term: "Observability", definition: "The ability to understand internal system condition from logs, metrics, traces, data checks, and alerts." },
    { term: "Monitoring", definition: "Continuous or scheduled evaluation of technical health, data quality, model behavior, outcomes, and harms." },
    { term: "Drift", definition: "A meaningful change in input data, relationships, outcomes, user behavior, or operating context after development." },
    { term: "Incident", definition: "An event that threatens reliability, security, privacy, safety, compliance, fairness, or expected service." },
    { term: "Rollback", definition: "Restoring a previously approved system version or safe process after a failed or harmful release." },
    { term: "Retirement", definition: "The controlled removal of a system when it is no longer needed, safe, valid, supported, or lawful." },
  ],

  formulas: [
    {
      id: "pipeline-success-rate",
      name: "Pipeline success rate",
      formula: "Success rate = Successful scheduled runs / Total scheduled runs",
      meaning: "Measures whether required data processing completed as expected.",
      requirement: "Define what counts as successful, including timeliness, completeness, quality, and downstream availability—not merely a zero exit code.",
    },
    {
      id: "freshness-lag",
      name: "Data freshness lag",
      formula: "Freshness lag = Available time − Source event time",
      meaning: "Shows how long evidence takes to become usable for a decision.",
      requirement: "Measure the distribution and high percentiles because an average can hide severe late-arriving records.",
    },
    {
      id: "quality-pass-rate",
      name: "Data-quality pass rate",
      formula: "Pass rate = Records passing required checks / Eligible records evaluated",
      meaning: "Summarizes conformance to decision-specific validity rules.",
      requirement: "Preserve failed records with reason codes and report checks separately so one percentage does not hide systematic failure.",
    },
    {
      id: "end-to-end-reliability",
      name: "Approximate end-to-end reliability",
      formula: "Rₑ₂ₑ ≈ R₁ × R₂ × … × Rₙ",
      meaning: "When stages must all succeed, overall reliability can be lower than the reliability of any single stage.",
      requirement: "Use as a planning approximation; stage failures may not be independent and shared causes require separate analysis.",
    },
    {
      id: "relative-performance-change",
      name: "Relative performance change",
      formula: "% change = ((Current metric − Reference metric) / |Reference metric|) × 100%",
      meaning: "Tracks whether a monitored measure has changed from an approved reference period or model version.",
      requirement: "Use consistent definitions and investigate seasonality, population change, uncertainty, and operational causes before declaring drift.",
    },
  ],

  workedExamples: [
    {
      id: "example-06-01",
      title: "Map the robot-maintenance lifecycle",
      problem: "Describe the path from maintenance need to monitored production action.",
      solutionSteps: [
        "Frame the decision, owner, action, unit, outcome, KPI, baseline, constraints, and guardrails.",
        "Inventory sensor, device, work-order, and repair sources; establish authority, contracts, and retention.",
        "Ingest immutable raw records, validate schema and timestamps, and preserve lineage.",
        "Transform readings into leakage-safe robot-shift features and confirmed future labels.",
        "Explore the data, build a simple baseline, train candidates, and evaluate by time and robot segment.",
        "Approve a pilot with human review, monitoring, incident response, rollback, and capacity controls.",
        "Measure operational outcomes, collect feedback, retrain only under governed rules, and retire when no longer justified.",
      ],
      answer: "The lifecycle connects business decision, governed evidence, reproducible development, controlled release, operations, outcomes, and feedback.",
      interpretation: "No stage can be removed merely because another team owns it; every handoff needs an artifact and accountable acceptance.",
    },
    {
      id: "example-06-02",
      title: "Calculate end-to-end reliability",
      problem: "A four-stage alert path has approximate stage reliabilities of 99%, 98%, 97%, and 96%. Estimate the probability that all stages succeed.",
      solutionSteps: [
        "Convert percentages to decimals: 0.99, 0.98, 0.97, and 0.96.",
        "Multiply: 0.99 × 0.98 × 0.97 × 0.96 ≈ 0.9035.",
        "Convert to a percentage: approximately 90.35%.",
        "Investigate shared dependencies because the multiplication assumes independent stage failures.",
      ],
      answer: "Approximate end-to-end reliability is 90.35%.",
      interpretation: "Several individually strong stages can produce a much weaker user experience when all must work.",
    },
    {
      id: "example-06-03",
      title: "Design a development-to-production gate",
      problem: "A model performs well offline. What evidence is required before production?",
      solutionSteps: [
        "Verify reproducible training, approved data lineage, leakage checks, segment evaluation, and baseline comparison.",
        "Test the complete serving path, latency, capacity, authentication, permissions, failure behavior, and audit logging.",
        "Run shadow or limited pilot operation with human review and no unapproved autonomous action.",
        "Approve monitoring thresholds, escalation owners, rollback version, runbook, and communication plan.",
        "Require business, technical, operations, security, and responsible-use sign-off appropriate to risk.",
      ],
      answer: "Offline model performance is one gate input; production approval requires end-to-end evidence and operational readiness.",
      interpretation: "A safe deployment decision evaluates the system around the model, not only the model artifact.",
    },
    {
      id: "example-06-04",
      title: "Diagnose a monitored failure",
      problem: "Alert volume falls 60%, model scores look stable, and no code was released. What should the team investigate?",
      solutionSteps: [
        "Check source volume, late or missing device messages, schema changes, and ingestion failures.",
        "Compare eligible robot-shifts and feature-null rates with the reference period.",
        "Inspect transformation, filtering, joins, feature generation, and serving logs.",
        "Verify that dashboards and alerts are reporting the same production version.",
        "Follow the incident runbook, communicate impact, and switch to the approved safe process if decision coverage is compromised.",
      ],
      answer: "Treat the event first as an end-to-end data or service incident, not automatically as model drift.",
      interpretation: "Stable model metrics cannot prove that current production inputs and outputs are complete or timely.",
    },
    {
      id: "example-06-05",
      title: "Choose retrain, roll back, revise, or retire",
      problem: "A system's input distribution changes after robots receive new motors, while outcome labels will not mature for two weeks.",
      solutionSteps: [
        "Determine whether the current system remains inside its approved operating conditions.",
        "Do not retrain automatically on incomplete or unverified outcomes.",
        "Use safety policy to continue with closer review, narrow the eligible population, pause, or roll back.",
        "Collect representative post-change evidence and repeat validation against the baseline and guardrails.",
        "Retire or redesign the system if the original decision, data, action, or benefit is no longer valid.",
      ],
      answer: "Use the approved change policy and safe fallback until sufficient trustworthy evidence supports a new release.",
      interpretation: "Retraining is a governed lifecycle decision, not a universal response to every monitoring alert.",
    },
  ],

  interactiveExploration: {
    title: "Build a Lifecycle Evidence Map",
    description:
      "Create one map that shows how your project moves from question to evidence, system, action, outcome, monitoring, and learning.",
    instructions: [
      "Place the decision owner, affected people, objective, action, KPI, constraints, and definition of done at the beginning.",
      "Add source systems, data owners, contracts, ingestion, raw storage, validation, and retention.",
      "Add transformation, feature or metric logic, analysis, baselines, and reproducible environments.",
      "Add candidate development, offline evaluation, error analysis, responsible-use review, and approval gates.",
      "Add registry or release artifact, deployment environment, inference or report delivery, and human workflow.",
      "Add technical, data, model, outcome, fairness, cost, and capacity monitoring with thresholds and owners.",
      "Add incident response, rollback, feedback collection, change approval, retraining, revalidation, and retirement.",
      "For every arrow, name the artifact, owner, test, version identifier, and evidence retained.",
    ],
    investigationQuestions: [
      "Where can a silent failure pass through without an alert?",
      "Which stage depends on an undocumented manual step?",
      "Can every production output be traced to data, code, configuration, and model or prompt version?",
      "What happens when labels are delayed or never arrive?",
      "Who has authority to pause, roll back, and retire the system?",
    ],
    expectedDiscovery:
      "Lifecycle reliability comes from visible connections, not isolated excellence. Every stage needs an owner, evidence, test, version, gate, and feedback path.",
  },

  realWorldApplications: [
    { field: "Manufacturing and Robotics", application: "Connect device telemetry, work orders, predictive models, technician review, safety response, maintenance outcomes, fleet changes, and controlled retraining." },
    { field: "Education", application: "Link approved student evidence to advisor workflows, measure support outcomes, protect privacy and fairness, and retire tools that no longer serve learning goals." },
    { field: "Finance", application: "Maintain lineage, validation, approval, monitoring, audit logs, adverse-action controls, incident response, and model-risk governance throughout the lifecycle." },
    { field: "Healthcare", application: "Require clinical ownership, representative validation, safe integration, human authority, post-deployment surveillance, and controlled decommissioning." },
    { field: "Microsoft Fabric", application: "Use pipelines, Lakehouse layers, notebooks, semantic models, deployment stages, lineage, refresh monitoring, and governed access as connected lifecycle components." },
    { field: "Generative AI", application: "Version prompts, retrieval data, embeddings, models, tools, policies, evaluations, releases, user feedback, incidents, and safety fallbacks." },
  ],

  aiConnection: {
    title: "MLOps and LLMOps Operationalize the Lifecycle",
    explanation:
      "Machine-learning and generative-AI operations apply software, data, model, evaluation, governance, and monitoring practices so systems can be reproduced, released, observed, and changed safely.",
    example:
      "A retrieval assistant release records document snapshot, chunking code, embedding model, index version, prompt, language model, tool permissions, evaluation set, latency, cost, groundedness, and rollback target.",
    uses: ["DataOps", "MLOps", "LLMOps", "Continuous integration", "Continuous delivery", "Model registry", "Observability"],
    caution:
      "Automation should enforce approved controls, not remove accountability. Automatic retraining or deployment can rapidly reproduce corrupt data, harmful objectives, security failures, or unreviewed behavior.",
    reflectionQuestion:
      "Which lifecycle decisions can be automated safely, and which require explicit human authority because consequences are difficult to reverse?",
  },

  pythonLab: {
    title: "Create a Lifecycle Stage-Gate Report",
    objective:
      "Represent lifecycle evidence as testable stage gates and block release when required evidence is missing or a critical guardrail fails.",
    code: `import pandas as pd

gates = pd.DataFrame([
    {
        "stage": "frame",
        "owner": "operations_manager",
        "required_evidence": 6,
        "evidence_present": 6,
        "critical_guardrail_passed": True,
    },
    {
        "stage": "data",
        "owner": "data_engineer",
        "required_evidence": 7,
        "evidence_present": 7,
        "critical_guardrail_passed": True,
    },
    {
        "stage": "validate",
        "owner": "model_risk_reviewer",
        "required_evidence": 8,
        "evidence_present": 7,
        "critical_guardrail_passed": True,
    },
    {
        "stage": "operate",
        "owner": "service_owner",
        "required_evidence": 9,
        "evidence_present": 9,
        "critical_guardrail_passed": False,
    },
])

gates["evidence_completeness"] = (
    gates["evidence_present"] / gates["required_evidence"]
)
gates["gate_passed"] = (
    (gates["evidence_completeness"] == 1.0)
    & gates["critical_guardrail_passed"]
)

blocked = gates.loc[~gates["gate_passed"], [
    "stage",
    "owner",
    "evidence_completeness",
    "critical_guardrail_passed",
]]

print(gates)
print("\nBlocked stages:")
print(blocked)
print("\nRELEASE APPROVED" if gates["gate_passed"].all()
      else "RELEASE BLOCKED")

assert gates["stage"].is_unique
assert gates["owner"].notna().all()`,
    questions: [
      "Which two stages block release and for different reasons?",
      "Why is evidence completeness insufficient when a critical guardrail fails?",
      "What additional columns would connect every gate to an artifact, test result, version, approver, and timestamp?",
      "Why does the code require one unique row per stage?",
      "How would you preserve the report as auditable release evidence?",
    ],
    reflectionQuestions: [
      "Which gate in your own project has the weakest evidence?",
      "Who should be independent of the development team for high-risk approval?",
      "What safe action occurs automatically when a release is blocked?",
    ],
    extension:
      "Add artifact_uri, test_run_id, version, reviewed_at, expires_at, risk_level, and decision columns. Reject expired evidence and generate a signed release-readiness summary.",
  },

  guidedPractice: [
    { id: "gp-06-01", question: "Why is a trained model not the complete AI product?", answer: "Value and safety also depend on framing, data, transformations, interfaces, action workflow, governance, monitoring, incident response, feedback, and retirement." },
    { id: "gp-06-02", question: "Four required stages are each 95% reliable. Estimate end-to-end reliability under the independence approximation.", answer: "0.95⁴ ≈ 0.8145, or about 81.45%." },
    { id: "gp-06-03", question: "An event occurs at 9:00 AM and becomes usable at 9:18 AM. What is freshness lag?", answer: "18 minutes." },
    { id: "gp-06-04", question: "Name one artifact for framing, data, validation, deployment, and monitoring.", answer: "Examples: project charter, data contract, evaluation report, release record, and monitoring dashboard with runbook." },
    { id: "gp-06-05", question: "What is the difference between monitoring and observability?", answer: "Monitoring checks defined conditions and thresholds; observability provides logs, metrics, traces, and context needed to understand unexpected internal behavior." },
    { id: "gp-06-06", question: "When should rollback be preferred over immediate retraining?", answer: "When a release causes operational harm or uncertainty and a previously approved version or safe manual process can restore service faster and more safely." },
  ],

  independentPractice: [
    { id: "ip-06-01", difficulty: "Foundational", question: "Put these in a defensible lifecycle order: deploy, frame, monitor, validate, ingest, transform, retire.", sampleAnswer: "Frame, ingest, transform, validate, deploy, monitor, and eventually retire, with feedback loops returning to earlier stages." },
    { id: "ip-06-02", difficulty: "Foundational", question: "Explain why the lifecycle is iterative rather than a one-way pipeline.", sampleAnswer: "Monitoring, user feedback, outcomes, incidents, and environmental change reveal new requirements and send work back to framing, data, design, or validation." },
    { id: "ip-06-03", difficulty: "Applied", question: "Create three stage-gate criteria for moving a dashboard from testing to production.", sampleAnswer: "Examples: reconciled metric definitions and totals, approved access and row-level security tests, and refresh/performance monitoring with owner and rollback plan." },
    { id: "ip-06-04", difficulty: "Applied", question: "Design lineage for one robot alert from source event to maintenance outcome.", sampleAnswer: "Record device and timestamp, ingestion batch, raw object, validation result, transformation and feature version, model version and score, rule and action, technician decision, work order, and confirmed outcome." },
    { id: "ip-06-05", difficulty: "Analytical", question: "A model metric declines while business outcomes improve. Give three possible explanations and next checks.", sampleAnswer: "The action policy may be effective, population or labels may have changed, or the offline metric may poorly represent value. Verify data and labels, segment results, review interventions, and compare against baseline and guardrails." },
    { id: "ip-06-06", difficulty: "Advanced", question: "Write a response plan for a production data-schema change that breaks required features.", sampleAnswer: "Alert owner, stop unsafe scoring, switch to approved fallback, quarantine incompatible data, assess affected decisions, communicate incident, repair or version the contract, revalidate, approve release, and document root cause." },
    { id: "ip-06-07", difficulty: "Professional", question: "Create retraining and retirement criteria for a high-impact AI system.", sampleAnswer: "Define evidence maturity, drift significance, outcome deterioration, recurring incident, regulation or purpose change, data loss, supportability, benefit-versus-harm, required approval, fallback, record retention, and stakeholder communication." },
  ],

  commonMistakes: [
    { mistake: "Treating the lifecycle as a one-way waterfall.", correction: "Add explicit feedback loops from monitoring, outcomes, users, and incidents to framing, data, design, and validation." },
    { mistake: "Declaring success when the notebook or model is complete.", correction: "Evaluate the full operational system, action workflow, outcome, support, monitoring, and rollback readiness." },
    { mistake: "Handing work between teams without acceptance evidence.", correction: "Use stage gates with named owners, artifacts, tests, versions, deadlines, and sign-off." },
    { mistake: "Monitoring only infrastructure uptime or model accuracy.", correction: "Monitor data, technical service, outputs, human actions, capacity, outcomes, fairness, cost, and incidents." },
    { mistake: "Automatically retraining whenever drift appears.", correction: "Diagnose cause, wait for trustworthy labels, assess risk, validate candidates, and require approved change control." },
    { mistake: "Deploying without a tested fallback.", correction: "Maintain a rollback version or safe manual process, clear authority, rehearsed runbook, and communication plan." },
    { mistake: "Keeping systems indefinitely because they still run.", correction: "Review ongoing purpose, benefit, harm, validity, cost, support, and legal authority; retire through a controlled process when justification ends." },
  ],

  discussionQuestions: [
    "Who owns the outcome when data, model, software, and operations belong to different teams?",
    "Which lifecycle stages require independent review for high-impact systems?",
    "Can continuous deployment be appropriate for all AI changes? Why or why not?",
    "How should delayed outcomes affect monitoring and retraining decisions?",
    "What obligations remain after an AI system is retired?",
  ],

  formativeAssessment: {
    totalPoints: 25,
    passingScore: 20,
    questions: [
      { id: "check-06-01", type: "concept", points: 5, prompt: "Describe the end-to-end data and AI lifecycle in a connected sequence with feedback loops.", sampleAnswer: "Frame, acquire and govern data, ingest and validate, transform and analyze, build and evaluate, approve and deploy, operate and monitor, respond and improve, and retire, with evidence and feedback linking every stage." },
      { id: "check-06-02", type: "calculation", points: 5, prompt: "Three required stages have reliability 98%, 97%, and 96%. Estimate end-to-end reliability.", sampleAnswer: "0.98 × 0.97 × 0.96 ≈ 0.9126, or about 91.26%, under an independence approximation." },
      { id: "check-06-03", type: "design", points: 5, prompt: "Create one stage gate with owner, evidence, tests, decision, and fallback.", sampleAnswer: "Full credit requires a named stage and approver, required artifacts and versions, measurable pass/fail tests, approve/revise/stop decision, and safe fallback or rollback." },
      { id: "check-06-04", type: "reasoning", points: 5, prompt: "Explain the difference between offline evaluation and production monitoring.", sampleAnswer: "Offline evaluation estimates performance on controlled historical or test evidence before release; production monitoring observes live data, services, outputs, actions, outcomes, harms, and context after release." },
      { id: "check-06-05", type: "application", points: 5, prompt: "Give four conditions that could trigger pause, rollback, retraining, or retirement.", sampleAnswer: "Examples include critical incident, broken or stale data, guardrail breach, sustained performance or outcome deterioration, unapproved context change, loss of legal authority, infeasible cost, or obsolete purpose." },
    ],
  },

  researchExtension: {
    title: "Reconstruct the Lifecycle of a Real Data or AI System",
    researchQuestion:
      "Does a documented system provide enough evidence to understand how it is built, released, monitored, changed, governed, and retired?",
    applicationOptions: ["Predictive maintenance", "Microsoft Fabric analytics", "Clinical decision support", "Fraud system", "Recommendation service", "Generative-AI application"],
    task:
      "Choose one well-documented system or technical case study. Reconstruct its lifecycle stages, artifacts, owners, data and model versions, evaluation, deployment method, monitoring, incidents, feedback, change controls, rollback, and retirement plan. Identify missing evidence and recommend lifecycle improvements.",
    requiredEvidence: [
      "Primary technical or governance documentation",
      "End-to-end lifecycle diagram",
      "Artifact and ownership table",
      "Stage-gate and monitoring analysis",
      "Incident, rollback, and retirement critique",
      "Proceed, revise, or stop recommendation",
    ],
  },

  portfolioArtifact: {
    title: "Project Charter, Part 6: Lifecycle, Release, and Operations Plan",
    description:
      "Extend the project charter from Lessons 1-5 into a complete operating plan that connects decision, data, development, deployment, monitoring, improvement, and retirement.",
    requiredSections: [
      "Lifecycle stages with objective, inputs, activities, outputs, owner, and affected stakeholders",
      "Source-to-decision lineage and version identifiers",
      "Data contracts, ingestion, validation, transformation, and quality controls",
      "Reproducible analysis or training environment and experiment records",
      "Offline evaluation, baseline comparison, error analysis, and responsible-use review",
      "Development, test, pilot, production, and approval gates",
      "Deployment architecture, access, latency, capacity, and human workflow",
      "Technical, data, model, outcome, fairness, security, and cost monitoring",
      "Alert thresholds, owners, escalation, incident response, fallback, and rollback",
      "Feedback, change approval, retraining, revalidation, communication, and retirement",
    ],
    requiredEvidence: [
      "One end-to-end lifecycle map",
      "One stage-gate table",
      "One source-to-outcome lineage example",
      "One monitoring and alert matrix",
      "One incident and rollback runbook",
      "One retraining and retirement decision rule",
    ],
  },

  growthIndicators: [
    { title: "Lifecycle Architect", description: "You connect decision, data, system, action, outcome, and feedback as one operating design." },
    { title: "Evidence Gatekeeper", description: "You require versioned artifacts and passing tests before work advances." },
    { title: "Operational Investigator", description: "You diagnose failures across data, service, model, workflow, and outcome layers." },
    { title: "Responsible Steward", description: "You plan safe change, rollback, incident response, and retirement throughout the system's life." },
  ],

  reflection: [
    "Which lifecycle stage in your project currently has the least ownership or evidence?",
    "Can you reproduce a result from the exact data, code, configuration, and environment used?",
    "Which production failure would remain invisible under your current monitoring?",
    "Who can pause or roll back the system, and how quickly can the safe fallback operate?",
    "What evidence would show that the system should be retired rather than improved?",
  ],

  summary: [
    "The data and AI product is the complete lifecycle, not only a dashboard, notebook, prompt, or model.",
    "Framing defines the decision, people, outcome, action, KPI, baseline, constraints, and completion evidence.",
    "Governed acquisition, ingestion, validation, transformation, and lineage make evidence trustworthy and reproducible.",
    "Development must compare with baselines, prevent leakage, analyze errors, and evaluate affected segments.",
    "Stage gates require named owners, versioned artifacts, tests, approvals, and safe alternatives.",
    "Production readiness includes integration, access, latency, capacity, human workflow, observability, and rollback.",
    "Monitoring covers technical health, data quality, outputs, actions, outcomes, fairness, security, cost, and changing context.",
    "Drift is a signal for investigation, not an automatic command to retrain.",
    "Incidents require clear authority, communication, containment, root-cause analysis, recovery, and learning.",
    "Responsible stewardship continues through change control, revalidation, record retention, and retirement.",
  ],

  previousLesson: {
    id: "data-ai-m01-l05",
    slug: "kpis-baselines-constraints-and-definitions-of-done",
    title: "KPIs, Baselines, Constraints, and Definitions of Done",
  },
  nextLesson: {
    id: "data-ai-m01-l07",
    slug: "portfolio-project-one-page-data-and-ai-project-charter",
    title: "Portfolio Project: One-Page Data and AI Project Charter",
  },

  lumineryGuidance: {
    message:
      "For every lifecycle stage, name the owner, required evidence, passing test, approved version, next decision, and safe fallback.",
    prompt:
      "Help me audit my end-to-end data and AI lifecycle. Trace the decision, sources, ingestion, validation, transformation, analysis, model or rule, evaluation, release, action workflow, monitoring, incidents, feedback, retraining, rollback, and retirement. Identify missing owners, artifacts, gates, and failure signals.",
    coachingQuestions: [
      "What must be true before this stage begins?",
      "Which versioned artifact proves the work was completed?",
      "Who approves movement to the next stage?",
      "How will silent failure become visible?",
      "What safe process runs when this stage fails?",
      "When should the system be changed, paused, rolled back, or retired?",
    ],
  },
};

export default lesson06;
