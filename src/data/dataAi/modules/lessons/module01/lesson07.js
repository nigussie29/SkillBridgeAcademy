const lesson07 = {
  id: "data-ai-m01-l07",
  courseId: "data-ai-foundations",
  moduleId: "data-ai-foundations-module-01",
  moduleNumber: 1,
  lessonNumber: 7,
  slug: "portfolio-project-one-page-data-and-ai-project-charter",
  title: "Portfolio Project: One-Page Data and AI Project Charter",
  shortTitle: "One-Page Data and AI Project Charter",
  subtitle:
    "Synthesize the complete foundation module into a decision-centered, evidence-ready charter that leaders, builders, reviewers, and affected people can understand and challenge.",
  status: "available",
  duration: "120-180 minutes",
  level: "Beginner to Professional",

  essentialQuestion:
    "Can one concise project charter prove that a proposed data or AI project is valuable, measurable, feasible, responsible, and ready for its next approved stage?",
  bigIdea:
    "A professional charter is a compact decision system. It connects the problem, people, data, analytical frame, success measures, risks, lifecycle, ownership, and evidence so a team can decide to proceed, revise, pilot, or stop.",

  whyThisLessonExists: {
    title: "Turn Six Lessons into One Defensible Project",
    introduction:
      "Teams often collect good ideas in separate documents: a business problem in one slide, data notes in a spreadsheet, model plans in a notebook, and risks in someone's memory. Decision-makers cannot reliably evaluate a project when its logic is fragmented.",
    centralProblem:
      "A charter can look polished while hiding an undefined decision, weak evidence, missing owners, impossible operational capacity, unacceptable risk, or no measurable definition of done.",
    purpose:
      "This capstone guides learners to compress the strongest evidence from Lessons 1-6 into a one-page executive charter supported by an evidence appendix, traceability map, readiness audit, and clear recommendation.",
  },

  problemFirst: {
    title: "Opening Investigation: Should the Factory Fund the Robot Project?",
    scenario:
      "A factory team requests funding for an AI system that predicts mobile-robot failure. Its presentation promises less downtime, but the proposal does not define the decision deadline, eligible robot-shifts, target timing, data authority, technician capacity, baseline, safety guardrails, approval gates, rollback owner, or evidence required for a pilot.",
    questions: [
      "What exact decision will the system support, and who owns that decision?",
      "Who benefits, who performs the action, and who could be harmed?",
      "Which data is authorized, timely, representative, and traceable enough for the intended use?",
      "What are the unit of analysis, prediction time, target window, features, output, and action?",
      "What baseline, KPI, constraints, guardrails, and acceptance criteria define success?",
      "Which lifecycle stage is being requested now, and what evidence must pass before the next stage?",
      "Should leaders approve discovery, approve a limited pilot, require revision, or stop the proposal?",
    ],
    expectedInsight:
      "The proposal is not ready for production funding. A strong charter would expose the missing definitions, distinguish assumptions from evidence, request only the next justified stage, and define the conditions for proceeding or stopping.",
  },

  learningObjectives: [
    "Synthesize decision, stakeholder, data, modeling, measurement, governance, and lifecycle plans into one coherent charter.",
    "Write a precise project objective that names the decision, owner, population, action, outcome, and deadline.",
    "Distinguish verified evidence, assumptions, open questions, dependencies, constraints, and risks.",
    "Create source-to-outcome traceability across data, transformations, analysis, system output, human action, and measurable result.",
    "Calculate charter completeness, traceability, capacity, and readiness measures without hiding critical failures in an average.",
    "Use stage gates and guardrails to recommend proceed, revise, pilot, pause, or stop.",
    "Communicate technical and responsible-use decisions in concise language for mixed audiences.",
    "Produce a portfolio-ready one-page charter and evidence appendix that another reviewer can audit.",
  ],

  prerequisiteKnowledge: [
    "Lesson 1: distinguish data, information, analytics, machine learning, and AI",
    "Lesson 2: frame an organizational question as a measurable decision",
    "Lesson 3: evaluate data forms, schemas, metadata, quality, and lineage",
    "Lesson 4: define units, features, targets, prediction time, outputs, and actions",
    "Lesson 5: specify KPIs, baselines, constraints, guardrails, and definitions of done",
    "Lesson 6: design lifecycle stages, ownership, gates, monitoring, rollback, and retirement",
  ],

  visualModels: [
    {
      id: "one-page-charter-blueprint",
      type: "lifecycle",
      title: "One-Page Data and AI Project Charter Blueprint",
      description:
        "The six charter blocks correspond to Lessons 1-6. Every block must connect to the same decision, population, action, outcome, and accountable owner.",
      stages: [
        { label: "1. Purpose", detail: "Problem, decision, people, value, boundaries" },
        { label: "2. Decision", detail: "Owner, action, timing, outcome, evidence cutoff" },
        { label: "3. Data", detail: "Sources, authority, schema, quality, lineage" },
        { label: "4. Analytical Frame", detail: "Unit, features, target, output, intervention" },
        { label: "5. Success Contract", detail: "Baseline, KPI, target, guardrails, done" },
        { label: "6. Lifecycle", detail: "Gates, release, monitoring, rollback, retirement" },
      ],
      feedback:
        "Coherence loop: changing one block requires rechecking every connected definition, measure, risk, owner, and lifecycle gate.",
      interpretation:
        "The charter is ready only when the complete chain is traceable and every critical requirement has evidence, ownership, and a safe fallback.",
    },
  ],

  vocabulary: [
    { term: "Project charter", definition: "A concise agreement that defines why a project should exist, what it will deliver, how success will be judged, who is accountable, and what boundaries govern the work." },
    { term: "Project sponsor", definition: "The leader accountable for strategic support, resources, escalation, and authorization of major stage decisions." },
    { term: "Decision owner", definition: "The person or role accountable for the operational decision and the consequences of acting or not acting." },
    { term: "Scope", definition: "The explicitly included population, decisions, data, deliverables, environments, locations, and time period." },
    { term: "Out of scope", definition: "A named use, population, action, data source, or deliverable the project is not authorized or expected to address." },
    { term: "Assumption", definition: "A statement temporarily treated as true for planning but still requiring validation." },
    { term: "Dependency", definition: "A condition, team, system, approval, resource, or event the project relies on but does not fully control." },
    { term: "Risk", definition: "An uncertain event or condition that could reduce value, delay delivery, violate a constraint, or cause harm." },
    { term: "Mitigation", definition: "A planned control or action that reduces the likelihood or impact of a risk." },
    { term: "Deliverable", definition: "A reviewable output the project must produce, such as a dataset, analysis, model, dashboard, runbook, or decision brief." },
    { term: "Milestone", definition: "A meaningful checkpoint marking completion of an approved phase, evidence package, or decision." },
    { term: "Evidence artifact", definition: "A retained document, dataset, test result, calculation, approval, log, or versioned output that supports a claim." },
    { term: "Traceability", definition: "The ability to connect every requirement and decision to its source, implementation, test, owner, and outcome." },
    { term: "Readiness", definition: "The demonstrated ability to begin the next lifecycle stage with required evidence, resources, controls, and approvals." },
    { term: "Critical criterion", definition: "A non-negotiable requirement whose failure blocks approval regardless of performance elsewhere." },
    { term: "RACI", definition: "A responsibility model identifying who is Responsible, Accountable, Consulted, and Informed for a task or decision." },
    { term: "Evidence appendix", definition: "A supporting package containing the detailed definitions, calculations, diagrams, tests, sources, and approvals summarized by the one-page charter." },
    { term: "Decision recommendation", definition: "A justified request to proceed, revise, pilot, pause, stop, or retire based on current evidence and risk." },
  ],

  formulas: [
    {
      id: "charter-completeness",
      name: "Charter completeness",
      formula: "Completeness = Required fields with acceptable evidence / Total required fields",
      meaning: "Shows how much of the required charter has defensible supporting evidence.",
      requirement: "Do not count blank, vague, duplicated, or assumption-only entries as acceptable evidence.",
    },
    {
      id: "traceability-coverage",
      name: "Traceability coverage",
      formula: "Traceability = Requirements linked to owner, evidence, test, and outcome / Total requirements",
      meaning: "Measures whether project claims can be followed through implementation and verification.",
      requirement: "A link must be specific enough for another reviewer to locate and test it.",
    },
    {
      id: "capacity-coverage",
      name: "Action-capacity coverage",
      formula: "Capacity coverage = Available action capacity / Expected cases requiring action",
      meaning: "Tests whether the organization can act on the system's output within the decision window.",
      requirement: "Define escalation and a safe fallback when coverage is below 100%.",
    },
    {
      id: "estimated-net-value",
      name: "Estimated net value",
      formula: "Net value = Expected benefit − Build cost − Operating cost − Intervention cost − Expected harm cost",
      meaning: "Provides a transparent planning estimate of value after full delivery and consequence costs.",
      requirement: "Report ranges, assumptions, nonfinancial effects, and values that should not be reduced to money.",
    },
    {
      id: "critical-gate-rule",
      name: "Critical gate rule",
      formula: "Gate passes = All required evidence present AND every critical criterion passes",
      meaning: "Prevents a high average score from compensating for a failed safety, privacy, legal, or operational requirement.",
      requirement: "Name the approver, decision date, evidence version, expiration date, and fallback for every critical gate.",
    },
  ],

  workedExamples: [
    {
      id: "example-07-01",
      title: "Rewrite a vague proposal as a decision objective",
      problem: "Rewrite: 'Use AI to improve robot maintenance.'",
      solutionSteps: [
        "Name the operational decision: which robot-shifts receive inspection before the next shift.",
        "Name the owner: maintenance operations manager.",
        "Name the population: approved mobile robots at Plant A during normal production.",
        "Name the action: prioritized technician inspection before the next shift.",
        "Name the outcome and deadline: reduce unplanned downtime during a 12-week pilot without violating safety or capacity guardrails.",
      ],
      answer: "During a 12-week Plant A pilot, help the maintenance operations manager prioritize eligible robot-shifts for pre-shift inspection so unplanned downtime per 1,000 operating hours decreases from the approved baseline while critical-failure misses, false inspections, latency, and technician workload remain within agreed limits.",
      interpretation: "A useful objective defines a decision and measurable consequence, not merely a technology to build.",
    },
    {
      id: "example-07-02",
      title: "Calculate charter completeness without overstating readiness",
      problem: "A charter has 24 required fields. Eighteen have verified evidence, four contain untested assumptions, and two are blank. Calculate evidence-based completeness.",
      solutionSteps: [
        "Count only fields with acceptable evidence: 18.",
        "Divide by all required fields: 18 / 24 = 0.75.",
        "Convert to a percentage: 75%.",
        "List the six unresolved fields and identify which are critical blockers.",
      ],
      answer: "Evidence-based charter completeness is 75%, not 91.7%; assumptions are not verified evidence.",
      interpretation: "A completeness percentage helps organize work but cannot override a single failed critical criterion.",
    },
    {
      id: "example-07-03",
      title: "Test action capacity before requesting a pilot",
      problem: "The proposed system is expected to flag 30 robot-shifts per day, while technicians can complete 18 inspections. Calculate coverage and state the charter implication.",
      solutionSteps: [
        "Available capacity is 18 inspections per day.",
        "Expected cases requiring action are 30 per day.",
        "Coverage = 18 / 30 = 0.60 or 60%.",
        "Define prioritization, additional staffing, a narrower population, or a lower alert volume before approval.",
      ],
      answer: "Capacity coverage is 60%; the pilot is not operationally ready without an approved response to the 40% shortfall.",
      interpretation: "Outputs that cannot become timely actions do not create the promised value and may increase risk.",
    },
    {
      id: "example-07-04",
      title: "Create end-to-end requirement traceability",
      problem: "Trace the requirement 'critical robot alerts must be reviewed within 15 minutes.'",
      solutionSteps: [
        "Source: safety and operations policy with named owner and version.",
        "Implementation: timestamped alert queue, escalation routing, and on-call coverage.",
        "Test: 95th-percentile review latency at or below 15 minutes in the production-like pilot.",
        "Evidence: alert and acknowledgment logs linked to release version.",
        "Outcome and fallback: pause automated prioritization and use the approved manual safety process if the threshold fails.",
      ],
      answer: "The requirement is traceable from policy to implementation, test, evidence, owner, consequence, and safe fallback.",
      interpretation: "Traceability turns a promise into an auditable control.",
    },
    {
      id: "example-07-05",
      title: "Write a stage-limited recommendation",
      problem: "Data access is approved, the baseline is documented, and a prototype works, but representative evaluation and rollback testing are incomplete. What should the charter recommend?",
      solutionSteps: [
        "Separate completed evidence from open requirements.",
        "Identify the next reversible stage rather than asking for production approval.",
        "Define the limited population, duration, human review, monitoring, and stop conditions.",
        "Name the evidence required before any broader release.",
      ],
      answer: "Recommend a controlled evaluation or shadow pilot only, with no unreviewed operational action, until representative performance, guardrails, capacity, incident response, and rollback tests pass.",
      interpretation: "A mature charter requests only the authority supported by current evidence.",
    },
  ],

  interactiveExploration: {
    title: "Build and Red-Team the One-Page Charter",
    description:
      "Draft the charter, then review it from the perspectives of the decision owner, data steward, affected person, engineer, operator, security reviewer, and executive sponsor.",
    instructions: [
      "Write the project decision, accountable owner, affected population, action, expected outcome, and time horizon in one paragraph.",
      "List included and excluded uses so the project cannot silently expand beyond authorization.",
      "Create the source-to-outcome chain: source, ingestion, validation, transformation, analysis or model, output, human action, and outcome.",
      "Add the unit of analysis, prediction time, feature cutoff, target window, output format, action deadline, and leakage controls.",
      "Define the baseline, primary KPI, target, process measures, guardrails, constraints, and evidence-based definition of done.",
      "Assign sponsor, decision owner, data owner, technical owner, operational owner, risk reviewer, and affected-stakeholder consultation.",
      "Specify discovery, development, validation, pilot, production, monitoring, rollback, retraining, and retirement gates.",
      "Label each statement as verified evidence, assumption, open question, dependency, or risk.",
      "Calculate completeness, traceability, and capacity coverage; then apply the critical gate rule.",
      "Write a recommendation that asks for only the next justified stage.",
    ],
    investigationQuestions: [
      "Could two reviewers interpret the decision, population, target, or KPI differently?",
      "Which claim has no source, owner, test, or retained evidence?",
      "Whose workload, rights, safety, access, or opportunities could change?",
      "What happens when data is late, the model is unavailable, or action capacity is exhausted?",
      "Which assumption would invalidate the project if false?",
      "What evidence would make a responsible reviewer say stop?",
    ],
    expectedDiscovery:
      "The one-page limit improves discipline, but the charter remains defensible only when every concise claim links to detailed evidence and a named owner in the appendix.",
  },

  realWorldApplications: [
    { field: "Manufacturing and Robotics", application: "Charter a predictive-maintenance pilot that links sensor evidence to technician action, safety guardrails, capacity, downtime outcomes, monitoring, and rollback." },
    { field: "Education", application: "Define a student-support project with legitimate evidence, educator ownership, privacy protections, equitable access, human review, and learning-centered outcomes." },
    { field: "Finance", application: "Document the decision authority, customer impact, data lineage, compliance, review capacity, model-risk controls, adverse-action process, and audit evidence." },
    { field: "Healthcare", application: "Specify clinical ownership, intended use, patient population, data authority, representative validation, professional oversight, surveillance, and safe fallback." },
    { field: "Microsoft Fabric", application: "Map sources, Lakehouse layers, pipelines, notebooks, semantic models, reports, deployment stages, workspace roles, refresh monitoring, lineage, and business ownership." },
    { field: "Generative AI", application: "Define approved knowledge sources, retrieval and prompt versions, tools, user groups, evaluation sets, groundedness, safety controls, cost limits, escalation, and rollback." },
  ],

  aiConnection: {
    title: "AI Can Challenge a Charter, but People Own the Decision",
    explanation:
      "An AI assistant can detect vague language, missing fields, contradictions, unlinked requirements, unsupported thresholds, or absent failure plans. It can generate questions and compare versions, but it cannot supply legitimate authority, stakeholder consent, accountable judgment, or evidence that does not exist.",
    example:
      "A charter-review assistant flags that 'all robots' conflicts with a dataset containing only one robot model and that the promised 10-minute response exceeds technician capacity. The team must resolve the scope and resource decisions.",
    uses: ["Requirement review", "Contradiction detection", "Traceability checks", "Risk brainstorming", "Evidence indexing", "Version comparison"],
    caution:
      "Do not let generative AI invent citations, owners, approvals, policies, data rights, performance evidence, or stakeholder agreement. Every material claim must be verified by an accountable person.",
    reflectionQuestion:
      "Which charter statements require human authority or direct evidence even when an AI assistant sounds confident?",
  },

  pythonLab: {
    title: "Audit Charter Readiness with Python",
    objective:
      "Represent charter requirements as structured evidence, calculate coverage, expose critical blockers, and produce a stage recommendation without averaging away unacceptable failures.",
    code: `import pandas as pd

requirements = pd.DataFrame([
    {"requirement": "decision_owner", "critical": True, "evidence": True, "traceable": True},
    {"requirement": "approved_data_authority", "critical": True, "evidence": True, "traceable": True},
    {"requirement": "representative_evaluation", "critical": True, "evidence": False, "traceable": True},
    {"requirement": "baseline_and_kpi", "critical": False, "evidence": True, "traceable": True},
    {"requirement": "capacity_plan", "critical": True, "evidence": False, "traceable": False},
    {"requirement": "rollback_test", "critical": True, "evidence": False, "traceable": True},
    {"requirement": "monitoring_owner", "critical": False, "evidence": True, "traceable": True},
    {"requirement": "retirement_rule", "critical": False, "evidence": True, "traceable": False},
])

completeness = requirements["evidence"].mean()
traceability = requirements["traceable"].mean()
critical_blockers = requirements.loc[
    requirements["critical"] & ~requirements["evidence"],
    "requirement"
].tolist()

gate_passed = (
    requirements["evidence"].all()
    and requirements["traceable"].all()
    and len(critical_blockers) == 0
)

print("Evidence completeness:", f"{completeness:.1%}")
print("Traceability coverage:", f"{traceability:.1%}")
print("Critical blockers:", critical_blockers)
print("PROCEED" if gate_passed else "REVISE BEFORE NEXT STAGE")

assert requirements["requirement"].is_unique
assert requirements[["critical", "evidence", "traceable"]].notna().all().all()`,
    questions: [
      "What are the evidence-completeness and traceability percentages?",
      "Which critical blockers prevent the gate from passing?",
      "Why is a readiness recommendation not based only on the average completeness score?",
      "What columns would connect each requirement to owner, source, test, artifact, version, approver, and expiration date?",
      "How should assumption, open-question, and dependency status be represented?",
    ],
    reflectionQuestions: [
      "Which requirement in your project is currently supported only by confidence rather than evidence?",
      "What is the smallest reversible next stage your evidence supports?",
      "Who must accept each critical risk before the project proceeds?",
    ],
    extension:
      "Add owner, artifact_uri, source_version, test_result, approved_by, reviewed_at, expires_at, risk_level, and next_action columns. Generate separate executive and technical readiness reports.",
  },

  guidedPractice: [
    { id: "gp-07-01", question: "What is the difference between a project sponsor and a decision owner?", answer: "The sponsor provides strategic authority, resources, and escalation; the decision owner is accountable for the operational decision and its consequences. One person may hold both roles, but the responsibilities must be explicit." },
    { id: "gp-07-02", question: "A charter has 20 required fields and 16 have acceptable evidence. What is completeness?", answer: "16 / 20 = 0.80, so evidence-based completeness is 80%." },
    { id: "gp-07-03", question: "Why must out-of-scope uses be written explicitly?", answer: "They prevent silent expansion into unsupported populations, decisions, data, or actions and help reviewers identify when new approval is required." },
    { id: "gp-07-04", question: "Name the links in a source-to-outcome traceability chain.", answer: "Source event, authorized collection, ingestion, validation, transformation, feature or metric, model or analysis, output, human or system action, and measured outcome." },
    { id: "gp-07-05", question: "A project is 95% complete but lacks approved data authority. Should its gate pass?", answer: "No. Data authority is a critical criterion; a high average cannot compensate for a missing legal or governance requirement." },
    { id: "gp-07-06", question: "When is 'revise before pilot' stronger than an unconditional approval?", answer: "When it clearly identifies missing evidence, owners, tests, and completion conditions while preserving a safe and reversible path forward." },
  ],

  independentPractice: [
    { id: "ip-07-01", difficulty: "Foundational", question: "Classify each as evidence, assumption, dependency, or risk: signed data agreement; expected 30% reduction; vendor API availability; possible technician overload.", sampleAnswer: "Signed agreement: evidence. Expected reduction: assumption until validated. Vendor API availability: dependency. Technician overload: risk." },
    { id: "ip-07-02", difficulty: "Foundational", question: "Rewrite 'build a useful dashboard' as a decision-centered objective.", sampleAnswer: "Name the user, decision, population, information deadline, action, outcome, baseline, target, and guardrails rather than the interface alone." },
    { id: "ip-07-03", difficulty: "Applied", question: "Create a RACI assignment for data approval, pipeline construction, model validation, operational action, and rollback.", sampleAnswer: "Assign one accountable owner to each decision, responsible implementers, consulted specialists and affected stakeholders, and informed recipients; avoid multiple uncoordinated accountable owners." },
    { id: "ip-07-04", difficulty: "Applied", question: "Build a five-row requirement traceability table for a student-support project.", sampleAnswer: "Include requirement, source, owner, implementation, test, evidence artifact, outcome, current status, and fallback for each row." },
    { id: "ip-07-05", difficulty: "Analytical", question: "Explain how a charter can be complete yet incoherent.", sampleAnswer: "Every field may contain text while definitions conflict—for example, the KPI population differs from the modeled unit, the action occurs after the decision deadline, or the data cannot support the claimed target." },
    { id: "ip-07-06", difficulty: "Advanced", question: "Write proceed, revise, pause, and stop criteria for a limited predictive-maintenance pilot.", sampleAnswer: "Tie each decision to verified evidence, critical guardrails, capacity, stakeholder approval, incident severity, recoverability, and the evidence required for any later restart or expansion." },
    { id: "ip-07-07", difficulty: "Professional", question: "Produce a one-page charter and a two-page evidence appendix for your chosen portfolio project.", sampleAnswer: "The charter should be concise and decision-ready; the appendix should contain definitions, sources, calculations, lineage, responsibility, tests, risks, stage gates, and versioned evidence supporting every material claim." },
  ],

  commonMistakes: [
    { mistake: "Starting the charter with a preferred technology.", correction: "Begin with the decision, people, current process, outcome, and evidence; select technology only after the need and constraints are clear." },
    { mistake: "Writing paragraphs that sound complete but cannot be tested.", correction: "Replace words such as better, fast, accurate, fair, secure, and scalable with defined measures, populations, thresholds, windows, tests, and owners." },
    { mistake: "Counting assumptions as evidence.", correction: "Label assumptions explicitly, assign validation actions and deadlines, and prevent critical unverified assumptions from passing a gate." },
    { mistake: "Using a completion score to average away a critical failure.", correction: "Apply the critical gate rule after calculating coverage; safety, legal, privacy, authority, and fallback failures remain blockers." },
    { mistake: "Creating a one-page charter with no evidence appendix.", correction: "Keep the page concise but link every material claim to definitions, calculations, artifacts, versions, tests, and approvals." },
    { mistake: "Assigning the data team responsibility for business outcomes it cannot control.", correction: "Separate technical delivery from decision ownership, operational action, resource authority, and outcome accountability." },
    { mistake: "Requesting production approval when evidence supports only discovery or pilot work.", correction: "Recommend the smallest reversible next stage with explicit limits, monitoring, stop conditions, and evidence requirements." },
  ],

  discussionQuestions: [
    "Can a project charter remain genuinely one page without oversimplifying important risk?",
    "Who should have authority to reject a high-value project because a critical guardrail is unresolved?",
    "How should affected people participate when they are not the project sponsor or system user?",
    "When should an assumption be acceptable for discovery but unacceptable for a pilot?",
    "What evidence distinguishes a responsible innovation proposal from technology enthusiasm?",
  ],

  formativeAssessment: {
    totalPoints: 25,
    passingScore: 20,
    questions: [
      { id: "check-07-01", type: "synthesis", points: 5, prompt: "State the six connected blocks of the one-page Data and AI Project Charter.", sampleAnswer: "Purpose; measurable decision; governed data; analytical or modeling frame; KPI and definition-of-done success contract; and lifecycle, operations, governance, and monitoring." },
      { id: "check-07-02", type: "calculation", points: 5, prompt: "A charter has 30 required fields, 24 with evidence. Twenty-one of the 30 link to owner, test, artifact, and outcome. Calculate completeness and traceability.", sampleAnswer: "Completeness = 24 / 30 = 80%. Traceability = 21 / 30 = 70%." },
      { id: "check-07-03", type: "reasoning", points: 5, prompt: "Explain why 100% field completion does not guarantee readiness.", sampleAnswer: "Fields may be vague, contradictory, unsupported, expired, or owned by no one, and a critical safety, privacy, authority, capacity, or rollback criterion may still fail." },
      { id: "check-07-04", type: "design", points: 5, prompt: "Write one complete requirement with source, owner, implementation, test, evidence, outcome, and fallback.", sampleAnswer: "A complete answer should connect an authoritative requirement through a testable implementation to retained evidence, an accountable owner, decision consequence, and safe failure response." },
      { id: "check-07-05", type: "recommendation", points: 5, prompt: "A prototype works, but representative testing and rollback evidence are missing. Write the appropriate next-stage recommendation.", sampleAnswer: "Revise or authorize only a controlled non-production evaluation or shadow pilot with human review; block broader release until representative validation, guardrails, incident response, and rollback tests pass." },
    ],
  },

  researchExtension: {
    title: "Audit a Public Data or AI Project Charter",
    researchQuestion:
      "Does a public project description provide enough traceable evidence for an informed proceed, revise, pilot, or stop decision?",
    applicationOptions: ["Predictive maintenance", "Microsoft Fabric analytics", "Education support", "Fraud detection", "Healthcare AI", "Generative-AI assistant"],
    task:
      "Choose a well-documented public data or AI initiative. Reconstruct its one-page charter from primary sources, label missing information, calculate evidence and traceability coverage, identify critical blockers, and issue a stage-limited recommendation. Separate documented fact from your inference.",
    requiredEvidence: [
      "Primary technical, organizational, policy, or research sources",
      "One-page reconstructed charter",
      "Evidence-versus-assumption table",
      "Requirement traceability sample",
      "Stakeholder, risk, and responsible-use analysis",
      "Readiness calculations and critical-gate review",
      "Proceed, revise, pilot, pause, or stop recommendation",
    ],
  },

  portfolioArtifact: {
    title: "Final Module 1 Portfolio: Decision-Ready Data and AI Project Charter",
    description:
      "Submit one executive page plus a concise evidence appendix. The final artifact must allow an independent reviewer to understand the proposed decision, challenge the evidence, see who is accountable, and determine the safest justified next stage.",
    requiredSections: [
      "Project name, version, date, sponsor, decision owner, and requested decision",
      "Problem, current process, affected people, intended value, scope, and out-of-scope uses",
      "Measurable decision, action, timing, evidence cutoff, outcome, and feedback",
      "Data sources, authority, schema, quality, representativeness, retention, and lineage",
      "Unit of analysis, features, target, leakage controls, output, threshold, and intervention",
      "Baseline, KPI, target, process measures, constraints, guardrails, capacity, and definition of done",
      "Lifecycle stages, deliverables, milestones, stage gates, monitoring, incidents, rollback, change, and retirement",
      "RACI ownership, stakeholder engagement, dependencies, assumptions, risks, and mitigations",
      "Evidence-based recommendation and next-stage approval request",
    ],
    requiredEvidence: [
      "One-page executive charter",
      "One source-to-outcome lifecycle figure",
      "One data and decision lineage table",
      "One KPI dictionary and baseline calculation",
      "One requirement traceability table",
      "One stakeholder and RACI table",
      "One risk, guardrail, and mitigation register",
      "One stage-gate and readiness audit",
      "One monitoring, incident, rollback, and retirement plan",
      "Peer-review responses and final version history",
    ],
  },

  growthIndicators: [
    { title: "Decision Architect", description: "You connect a real organizational choice to measurable evidence, timely action, and accountable ownership." },
    { title: "Evidence Synthesizer", description: "You compress complex technical work without losing definitions, uncertainty, lineage, or traceability." },
    { title: "Responsible Reviewer", description: "You identify affected people, critical risks, non-negotiable guardrails, and safe fallbacks before approval." },
    { title: "Portfolio Communicator", description: "You present a concise executive case supported by artifacts another professional can inspect and reproduce." },
  ],

  reflection: [
    "Which charter claim is strongest, and what evidence makes it defensible?",
    "Which field currently contains an assumption that could invalidate the project?",
    "Can an independent reviewer trace every critical requirement to owner, test, artifact, and outcome?",
    "Whose perspective is missing from the charter and how could that absence change the design?",
    "What is the smallest reversible next stage supported by the evidence today?",
    "What would responsibly cause the project to pause, roll back, or stop?",
  ],

  summary: [
    "A project charter begins with a decision and human outcome, not a preferred tool.",
    "The one-page charter summarizes the project; the evidence appendix supports and audits its claims.",
    "Scope and out-of-scope statements prevent unsupported expansion.",
    "Evidence, assumptions, dependencies, open questions, and risks must be labeled differently.",
    "The data, analytical frame, KPI population, operational action, and lifecycle plan must describe the same system.",
    "Completeness and traceability reveal gaps but cannot compensate for a failed critical criterion.",
    "Capacity testing determines whether system outputs can become timely real-world actions.",
    "RACI clarifies responsibility, but every consequential decision still needs one accountable owner.",
    "Professional recommendations request only the smallest justified and reversible next stage.",
    "A portfolio-ready charter is concise, evidence-linked, versioned, reviewable, and honest about uncertainty.",
  ],

  previousLesson: {
    id: "data-ai-m01-l06",
    slug: "the-end-to-end-data-and-ai-lifecycle",
    title: "The End-to-End Data and AI Lifecycle",
  },
  nextLesson: {
    id: "data-ai-m02-l01",
    moduleNumber: 2,
    slug: "center-spread-shape-and-unusual-observations",
    title: "Center, Spread, Shape, and Unusual Observations",
  },

  lumineryGuidance: {
    message:
      "If a reviewer cannot trace a charter claim to evidence, ownership, a test, and a consequence, the claim is not yet decision-ready.",
    prompt:
      "Act as a cross-functional review board for my one-page Data and AI Project Charter. Challenge the decision, affected people, scope, data authority, unit, prediction time, target, leakage, action, baseline, KPIs, capacity, constraints, guardrails, ownership, lifecycle, monitoring, rollback, and retirement. Separate evidence from assumptions, identify contradictions and critical blockers, and recommend the smallest justified next stage.",
    coachingQuestions: [
      "What exact decision is being requested now?",
      "Who owns the outcome and who experiences the consequences?",
      "Which material claim lacks direct evidence?",
      "Do the data, unit, target, KPI, and action refer to the same population and time window?",
      "Which failed criterion must block approval?",
      "Can operations act on the expected output volume within the deadline?",
      "What safe process runs when the system or evidence fails?",
      "What is the smallest reversible next stage?",
    ],
  },
};

export default lesson07;
