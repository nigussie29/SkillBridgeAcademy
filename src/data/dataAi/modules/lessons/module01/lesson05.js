const lesson05 = {
  id: "data-ai-m01-l05",
  courseId: "data-ai-foundations",
  moduleId: "data-ai-foundations-module-01",
  moduleNumber: 1,
  lessonNumber: 5,
  slug: "kpis-baselines-constraints-and-definitions-of-done",
  title: "KPIs, Baselines, Constraints, and Definitions of Done",
  shortTitle: "KPIs, Baselines, Constraints, and Done",
  subtitle:
    "Define success before building by comparing meaningful outcomes with a credible baseline, protecting guardrails, respecting constraints, and writing testable completion criteria.",
  status: "available",
  duration: "105-120 minutes",
  level: "Beginner to Professional",

  essentialQuestion:
    "How can a team prove that a data or AI solution improves a real decision without sacrificing safety, fairness, capacity, cost, or trust?",
  bigIdea:
    "A project is successful only when agreed measures improve beyond a credible baseline, required guardrails remain acceptable, operational constraints are respected, and every acceptance criterion can be verified with evidence.",

  whyThisLessonExists: {
    title: "Success Must Be Designed Before It Is Measured",
    introduction:
      "Data and AI projects often begin with exciting technology and end with disagreement about whether anything improved. Accuracy, dashboards, data volume, or model complexity can look impressive while the original decision remains slow, costly, unsafe, or ineffective.",
    centralProblem:
      "Without a baseline, denominator, target, time window, guardrail, and decision owner, a KPI can reward the wrong behavior. Without a definition of done, teams can keep building indefinitely or declare success without deployable evidence.",
    purpose:
      "This lesson teaches you to create a balanced success contract: define outcome and process KPIs, calculate baselines, set targets, document constraints, protect counter-metrics, and specify testable acceptance criteria before implementation begins.",
  },

  problemFirst: {
    title: "Opening Investigation: Is the Robot Warning System Successful?",
    scenario:
      "A factory pilots an AI warning system for mobile robots. The model flags 28 robot-shifts for inspection, technicians can inspect only 12, confirmed failures fall from 10 to 7, false alarms interrupt production, and managers report that the dashboard loads slowly. The vendor says the model is 92% accurate and calls the pilot successful.",
    questions: [
      "What decision and outcome was the pilot supposed to improve?",
      "Which historical period and operating conditions form a credible baseline?",
      "Is 92% accuracy meaningful when failures are rare?",
      "How should missed failures, false alarms, downtime, cost, safety, and technician capacity be measured?",
      "Which measures are primary KPIs and which are guardrails or diagnostic metrics?",
      "What exact evidence must exist before the pilot can be called done?",
    ],
    expectedInsight:
      "The pilot cannot be judged from one model metric. Success requires a defined population and period, comparison with normal operations, outcome improvement, acceptable safety and fairness guardrails, feasible workload, reliable delivery, and signed acceptance criteria.",
  },

  learningObjectives: [
    "Distinguish a KPI from a general metric, diagnostic measure, target, and guardrail.",
    "Define every KPI with a numerator, denominator, population, time window, owner, source, and direction of improvement.",
    "Select a credible historical, policy, random, or simple-model baseline.",
    "Calculate absolute change, percentage change, rates, and capacity coverage correctly.",
    "Separate leading indicators from lagging outcome measures.",
    "Identify technical, operational, legal, ethical, financial, and data constraints.",
    "Balance a primary objective with counter-metrics that reveal harmful trade-offs.",
    "Write a testable definition of done with acceptance evidence and accountable sign-off.",
  ],

  prerequisiteKnowledge: [
    "Lesson 2: measurable decisions, outcomes, and evidence cutoffs",
    "Lesson 3: trustworthy sources, schemas, metadata, and lineage",
    "Lesson 4: units of analysis, features, targets, and actions",
    "Rates, percentages, averages, populations, and time windows",
  ],

  vocabulary: [
    { term: "Metric", definition: "A quantified measure used to describe, monitor, compare, or diagnose some aspect of a process, system, or outcome." },
    { term: "Key performance indicator (KPI)", definition: "A decision-relevant metric selected to show progress toward a defined objective and owned by an accountable person or team." },
    { term: "Outcome KPI", definition: "A measure of the result people ultimately value, such as reduced downtime, improved retention, or fewer safety incidents." },
    { term: "Process KPI", definition: "A measure of how reliably or efficiently work is performed, such as response time, completion rate, or data freshness." },
    { term: "Leading indicator", definition: "An earlier measure expected to signal future performance and provide time to intervene." },
    { term: "Lagging indicator", definition: "A measure observed after the final outcome occurs, often useful for confirmation but not early action." },
    { term: "Baseline", definition: "The reference performance expected without the proposed change, estimated from a relevant historical period, current policy, control group, or simple model." },
    { term: "Benchmark", definition: "An external or internal comparison point used for context; it may not represent what would happen without the intervention." },
    { term: "Target", definition: "A desired future value for a measure, including a deadline and acceptable uncertainty or tolerance." },
    { term: "Denominator", definition: "The eligible population or opportunity count used to interpret a rate and prevent misleading comparisons." },
    { term: "Cohort", definition: "A defined group that shares an eligibility rule, entry time, or other characteristic used for fair comparison." },
    { term: "Guardrail metric", definition: "A measure that must remain within an acceptable boundary while the primary KPI is optimized." },
    { term: "Constraint", definition: "A non-negotiable or limited condition such as safety, privacy, law, latency, budget, staffing, or infrastructure." },
    { term: "Threshold", definition: "A predefined boundary that triggers an action, escalation, pass, fail, or review decision." },
    { term: "Acceptance criterion", definition: "A specific, testable condition that a deliverable must satisfy before stakeholders accept it." },
    { term: "Definition of done", definition: "The complete set of verified requirements, evidence, controls, documentation, and approvals required to close a piece of work." },
    { term: "Trade-off", definition: "A situation in which improving one measure can worsen another, requiring explicit priorities and limits." },
    { term: "Metric gaming", definition: "Changing behavior to improve the recorded measure without improving, and sometimes while damaging, the intended outcome." },
  ],

  formulas: [
    {
      id: "absolute-change",
      name: "Absolute change",
      formula: "Absolute change = New value − Baseline value",
      meaning: "Shows the change in the original unit, such as 3 fewer failures or 18 fewer downtime hours.",
      requirement: "Use comparable populations, definitions, and time windows.",
    },
    {
      id: "percentage-change",
      name: "Percentage change from baseline",
      formula: "% change = ((New − Baseline) / |Baseline|) × 100%",
      meaning: "Expresses improvement or decline relative to the magnitude of the baseline.",
      requirement: "Do not use percentage change when the baseline is zero; report absolute change or another justified measure.",
    },
    {
      id: "event-rate",
      name: "Outcome or event rate",
      formula: "Rate = Events / Eligible opportunities",
      meaning: "Connects a count to the population that could have produced it.",
      requirement: "Define eligibility, exclusions, duplicate handling, and observation window before calculating the denominator.",
    },
    {
      id: "capacity-coverage",
      name: "Capacity coverage",
      formula: "Coverage = Available action capacity / Cases requiring action",
      meaning: "Shows whether the organization can act on the system's recommendations.",
      requirement: "If coverage is below 100%, define prioritization, escalation, and the consequences of unserved cases.",
    },
    {
      id: "net-value",
      name: "Estimated net operational value",
      formula: "Net value = Avoided loss + Added benefit − Intervention cost − System cost − Harm cost",
      meaning: "Combines business benefit with the full cost of action, operation, error, and harm.",
      requirement: "Document assumptions, uncertainty, nonfinancial impacts, and which costs cannot responsibly be reduced to money.",
    },
  ],

  workedExamples: [
    {
      id: "example-05-01",
      title: "Calculate robot-failure improvement",
      problem: "Confirmed next-shift failures fall from a baseline of 10 to 7 during comparable pilot periods. Calculate absolute and percentage change.",
      solutionSteps: [
        "Absolute change = 7 − 10 = −3 failures.",
        "Percentage change = (7 − 10) / 10 × 100% = −30%.",
        "Interpret the negative sign as a reduction, not automatically as proof that the warning system caused the change.",
        "Check production hours, robot mix, maintenance schedules, and other changes before attributing impact.",
      ],
      answer: "The pilot recorded 3 fewer failures, a 30% reduction from baseline.",
      interpretation: "A favorable change is evidence of association. Causal attribution requires a credible comparison design and enough observations.",
    },
    {
      id: "example-05-02",
      title: "Repair a misleading denominator",
      problem: "Plant A reports 8 failures and Plant B reports 12. Plant A operated 400 robot-shifts while Plant B operated 1,200. Which plant has the higher failure rate?",
      solutionSteps: [
        "Plant A rate = 8 / 400 = 0.020 or 2.0%.",
        "Plant B rate = 12 / 1,200 = 0.010 or 1.0%.",
        "Although Plant B has more failures, it also has three times as many opportunities.",
        "Compare rates only after confirming the same failure definition and comparable exposure.",
      ],
      answer: "Plant A has the higher failure rate: 2.0% versus 1.0%.",
      interpretation: "Counts without exposure can reverse the apparent conclusion.",
    },
    {
      id: "example-05-03",
      title: "Test capacity before deployment",
      problem: "The system flags 28 robot-shifts, but technicians can inspect 12. Calculate capacity coverage and propose a response.",
      solutionSteps: [
        "Coverage = 12 / 28 = 0.4286 or approximately 42.9%.",
        "The action queue exceeds capacity by 16 inspections.",
        "Evaluate a threshold or ranking policy using safety consequences, not workload convenience alone.",
        "Consider adding capacity, narrowing the eligible population, or pausing deployment if high-risk cases cannot be served.",
      ],
      answer: "Capacity covers only about 42.9% of flagged cases.",
      interpretation: "A model can be technically useful but operationally unusable when the action system cannot absorb its output.",
    },
    {
      id: "example-05-04",
      title: "Build a balanced KPI scorecard",
      problem: "Choose measures for a robot-maintenance pilot whose objective is to reduce unplanned downtime without unsafe misses or excessive inspections.",
      solutionSteps: [
        "Primary outcome KPI: unplanned downtime hours per 1,000 robot operating hours.",
        "Leading indicator: percentage of high-risk alerts reviewed before the next shift.",
        "Guardrails: missed critical-failure rate, false-inspection rate, safety incidents, and technician workload.",
        "Reliability measures: data freshness, alert-delivery success, and dashboard response time.",
        "Segment all measures by robot type, site, shift, and relevant operating conditions.",
      ],
      answer: "Use one primary outcome, a small number of leading and reliability measures, and explicit safety and workload guardrails.",
      interpretation: "A balanced scorecard makes trade-offs visible instead of hiding them behind one favorable number.",
    },
    {
      id: "example-05-05",
      title: "Write a testable definition of done",
      problem: "Rewrite 'the predictive-maintenance dashboard works well' as acceptance criteria.",
      solutionSteps: [
        "State the eligible population and a comparable baseline period.",
        "Require a defined downtime-rate improvement with a confidence range or minimum evidence threshold.",
        "Set maximum missed-critical-failure and false-inspection guardrails.",
        "Require alert delivery within the operational deadline and capacity coverage under an approved action policy.",
        "Require reproducible code, data lineage, tests, monitoring, runbook, user training, owner approval, and rollback procedure.",
      ],
      answer: "Done means every measurable acceptance criterion passes, evidence is attached, guardrails pass, owners sign off, and the system can be operated and reversed safely.",
      interpretation: "Completion is a verified state, not a feeling, presentation, or amount of effort spent.",
    },
  ],

  interactiveExploration: {
    title: "Create a KPI and Definition-of-Done Contract",
    description: "Transform one project objective into a measurement system that a decision owner, data team, and operations team can evaluate consistently.",
    instructions: [
      "Write the objective as an outcome for a named population, decision owner, and deadline.",
      "Choose one primary outcome KPI and explain why it represents real value.",
      "Define numerator, denominator, unit, population, exclusions, source, frequency, owner, and direction of improvement.",
      "Select the most credible baseline and document why it is comparable.",
      "Add one leading indicator, one operational reliability measure, and at least two guardrails.",
      "List data, capacity, latency, budget, safety, privacy, fairness, and legal constraints.",
      "Set target and guardrail thresholds with evidence, not aspiration alone.",
      "Convert every requirement into a pass/fail acceptance criterion with an evidence artifact and approver.",
    ],
    investigationQuestions: [
      "Could the KPI improve while the real outcome worsens?",
      "Who is excluded from the denominator, and could that choice hide failure?",
      "Has the baseline period changed in volume, population, policy, season, or measurement method?",
      "What behavior might people adopt if rewarded only for this KPI?",
      "Which failed guardrail should stop or roll back the project even when the primary KPI improves?",
    ],
    expectedDiscovery:
      "A strong success contract links objective, population, KPI definition, baseline, target, constraints, guardrails, evidence, and accountable sign-off. Ambiguity in any link creates room for accidental or deliberate misinterpretation.",
  },

  realWorldApplications: [
    { field: "Manufacturing and Robotics", application: "Compare downtime and confirmed failures per operating hour against baseline while protecting safety, inspection workload, latency, and false-alarm guardrails." },
    { field: "Education", application: "Measure timely completion or learning growth while monitoring unequal access, unnecessary interventions, student privacy, and advisor capacity." },
    { field: "Finance", application: "Track prevented loss or decision quality with approval, fraud-loss, customer-impact, fairness, compliance, and review-capacity constraints." },
    { field: "Healthcare", application: "Evaluate clinical outcomes and workflow efficiency while treating safety, privacy, calibration, subgroup performance, and professional oversight as required guardrails." },
    { field: "Supply Chain", application: "Measure service level, stockouts, lead time, and forecast value while controlling inventory cost, waste, supplier risk, and replenishment capacity." },
    { field: "Generative AI", application: "Measure task success and groundedness while constraining unsupported claims, harmful output, privacy exposure, latency, cost, and escalation failure." },
  ],

  aiConnection: {
    title: "AI Optimizes What People Choose to Measure",
    explanation:
      "An AI system does not know the organization's true purpose. It learns or is tuned against targets, rewards, and evaluation measures selected by people. If a measure is incomplete, the system can improve the score while harming the real objective.",
    example:
      "A support chatbot optimized only for shorter conversations may end chats quickly without resolving problems. Resolution quality and safe escalation must act as outcome and guardrail measures.",
    uses: ["Model selection", "Threshold tuning", "A/B testing", "Monitoring", "Service-level management", "Human-AI workflow design"],
    caution:
      "Do not collapse safety, fairness, dignity, rights, or serious harms into one weighted score that allows unacceptable failure to be offset by convenience or profit.",
    reflectionQuestion:
      "If teams receive bonuses for one KPI, how could they improve the number without improving the intended outcome?",
  },

  pythonLab: {
    title: "Evaluate a Robot-Maintenance Pilot",
    objective:
      "Use Python to calculate outcome, workload, and guardrail measures against a baseline, then produce an evidence-based readiness recommendation.",
    code: `import pandas as pd

# One row represents a comparable four-week operating period.
periods = pd.DataFrame([
    {
        "period": "baseline",
        "robot_shifts": 1000,
        "confirmed_failures": 10,
        "downtime_hours": 82,
        "flagged_cases": 0,
        "completed_inspections": 0,
        "missed_critical_failures": 4,
        "false_inspections": 0,
    },
    {
        "period": "pilot",
        "robot_shifts": 1040,
        "confirmed_failures": 7,
        "downtime_hours": 57,
        "flagged_cases": 28,
        "completed_inspections": 12,
        "missed_critical_failures": 1,
        "false_inspections": 5,
    },
]).set_index("period")

periods["failure_rate"] = (
    periods["confirmed_failures"] / periods["robot_shifts"]
)
periods["downtime_per_1000_shifts"] = (
    periods["downtime_hours"] / periods["robot_shifts"] * 1000
)

baseline = periods.loc["baseline"]
pilot = periods.loc["pilot"]

downtime_change_pct = (
    (pilot["downtime_per_1000_shifts"]
     - baseline["downtime_per_1000_shifts"])
    / baseline["downtime_per_1000_shifts"]
    * 100
)

capacity_coverage = (
    pilot["completed_inspections"] / pilot["flagged_cases"]
)
false_inspection_rate = (
    pilot["false_inspections"] / pilot["completed_inspections"]
)

criteria = {
    "downtime_reduction_at_least_20_percent": downtime_change_pct <= -20,
    "missed_critical_failures_at_most_1": pilot["missed_critical_failures"] <= 1,
    "capacity_coverage_at_least_80_percent": capacity_coverage >= 0.80,
    "false_inspection_rate_at_most_25_percent": false_inspection_rate <= 0.25,
}

print(periods.round(4))
print("Downtime change:", round(downtime_change_pct, 1), "%")
print("Capacity coverage:", round(capacity_coverage * 100, 1), "%")
print("False-inspection rate:", round(false_inspection_rate * 100, 1), "%")
print("Acceptance criteria:", criteria)
print("READY" if all(criteria.values()) else "REVISE BEFORE DEPLOYMENT")`,
    questions: [
      "Why does the code compare downtime per 1,000 shifts instead of raw downtime hours?",
      "Which acceptance criteria pass, and which fail?",
      "Why should one failed guardrail prevent a READY recommendation?",
      "What additional uncertainty or segmentation should be examined before attributing improvement to the pilot?",
      "How would you make the criteria table auditable for a stakeholder review?",
    ],
    reflectionQuestions: [
      "Is the baseline period truly comparable with the pilot period?",
      "Which threshold is supported by policy, evidence, or operational capacity, and which is merely assumed?",
      "What action should follow the REVISE BEFORE DEPLOYMENT result?",
    ],
    extension:
      "Add robot type and shift columns, calculate the scorecard by segment, attach an evidence source to every criterion, and test sensitivity under several threshold choices.",
  },

  guidedPractice: [
    { id: "gp-05-01", question: "A dashboard has 60 measures. Are all of them KPIs? Explain.", answer: "No. A KPI is a small, decision-relevant measure tied to an objective and owner. Other measures may be diagnostic, operational, explanatory, or informational." },
    { id: "gp-05-02", question: "Sales increase from $200,000 to $230,000. Find absolute and percentage change.", answer: "Absolute change is $30,000. Percentage change is 30,000 / 200,000 × 100% = 15%." },
    { id: "gp-05-03", question: "A service has 30 complaints. What information is missing before calculating a complaint rate?", answer: "The eligible denominator and period, such as complaints per completed order or per active customer during a defined month." },
    { id: "gp-05-04", question: "Give one KPI and two guardrails for an AI student-support system.", answer: "KPI: improvement in timely assignment completion among eligible students. Guardrails: unequal outreach rate across relevant groups and advisor caseload above approved capacity." },
    { id: "gp-05-05", question: "What is wrong with using the project target as the baseline?", answer: "A target is desired future performance; a baseline estimates expected performance without the change. Confusing them prevents meaningful improvement measurement." },
    { id: "gp-05-06", question: "Complete this acceptance criterion: 'The report is fast.'", answer: "Example: the report's 95th-percentile page load time is at most 3 seconds for the approved test workload, measured in the production-like environment and recorded in a performance report." },
  ],

  independentPractice: [
    { id: "ip-05-01", difficulty: "Foundational", question: "Classify each as KPI, diagnostic metric, guardrail, or constraint: downtime rate, average sensor value, maximum missed critical failures, and technician hours available.", sampleAnswer: "Downtime rate can be a KPI; average sensor value is usually diagnostic; maximum missed critical failures is a guardrail; technician hours available is an operational constraint." },
    { id: "ip-05-02", difficulty: "Foundational", question: "A defect rate decreases from 4% to 3%. Explain absolute percentage-point change and relative percentage change.", sampleAnswer: "The absolute change is −1 percentage point. The relative change is (3% − 4%) / 4% = −25%, a 25% reduction." },
    { id: "ip-05-03", difficulty: "Applied", question: "Design a KPI dictionary entry for on-time delivery.", sampleAnswer: "Define objective, numerator, denominator, eligible orders, exclusions, promised-time version, event timestamp, data source, refresh schedule, owner, baseline, target, segments, and guardrails." },
    { id: "ip-05-04", difficulty: "Applied", question: "Choose and justify a baseline for a weekly student-support pilot.", sampleAnswer: "Use comparable prior weeks or a concurrent matched/control group, adjusting for term timing, course mix, eligibility, holidays, policy changes, and measurement definitions." },
    { id: "ip-05-05", difficulty: "Analytical", question: "Describe how optimizing average call-handling time could harm customers and propose counter-metrics.", sampleAnswer: "Agents may rush or terminate calls. Protect first-contact resolution, repeat-contact rate, customer-reported resolution, complaints, accessibility, and safe escalation." },
    { id: "ip-05-06", difficulty: "Advanced", question: "Create a go, revise, or stop rule for a predictive-maintenance pilot.", sampleAnswer: "Go only if outcome improvement exceeds the agreed minimum and every safety, workload, reliability, fairness, and cost guardrail passes with documented evidence; revise for correctable failures; stop for unacceptable harm or infeasible operations." },
    { id: "ip-05-07", difficulty: "Professional", question: "Write a definition of done for one portfolio project, including evidence and approvers.", sampleAnswer: "Include reproducible data and code, data-quality tests, KPI-versus-baseline results, passed guardrails, performance and security checks, documentation, runbook, monitoring, rollback, accessibility, user validation, and named sign-off." },
  ],

  commonMistakes: [
    { mistake: "Calling every available measure a KPI.", correction: "Select a small set that directly reflects objectives and decisions; keep diagnostic measures available without promoting them all." },
    { mistake: "Setting a target without measuring a baseline.", correction: "Estimate current or no-change performance first, then justify an achievable and valuable target." },
    { mistake: "Comparing counts from different exposure levels.", correction: "Use a meaningful denominator and verify equivalent eligibility, definitions, and observation windows." },
    { mistake: "Optimizing one KPI without counter-metrics.", correction: "Add guardrails for safety, quality, fairness, capacity, cost, and unintended behavior." },
    { mistake: "Using an incomparable historical period.", correction: "Check population, season, volume, policy, data collection, and external conditions; use a stronger comparison design when necessary." },
    { mistake: "Treating constraints as details to solve after modeling.", correction: "Document non-negotiable limits before design so the solution is deployable, lawful, safe, and affordable." },
    { mistake: "Writing vague completion statements such as 'works well.'", correction: "Use observable pass/fail criteria, evidence artifacts, environments, thresholds, owners, and approvals." },
  ],

  discussionQuestions: [
    "Who should choose KPIs and guardrails when different stakeholders value different outcomes?",
    "When is an external industry benchmark less useful than an internal baseline?",
    "Should a project proceed if its primary KPI improves but one subgroup experiences worse outcomes?",
    "How can a definition of done protect teams from pressure to launch prematurely?",
    "Which important values should be protected as constraints rather than traded inside a single score?",
  ],

  formativeAssessment: {
    totalPoints: 25,
    passingScore: 20,
    questions: [
      { id: "check-05-01", type: "concept", points: 5, prompt: "Distinguish metric, KPI, target, baseline, benchmark, and guardrail.", sampleAnswer: "A metric is any quantified measure; a KPI is a key objective-linked metric; a target is the desired future value; a baseline is expected no-change performance; a benchmark provides comparison context; a guardrail is a boundary that must remain acceptable." },
      { id: "check-05-02", type: "calculation", points: 5, prompt: "Downtime decreases from 80 to 56 hours for comparable exposure. Calculate absolute and percentage change.", sampleAnswer: "Absolute change = 56 − 80 = −24 hours. Percentage change = −24 / 80 × 100% = −30%, a 30% reduction." },
      { id: "check-05-03", type: "design", points: 5, prompt: "Create a primary KPI, leading indicator, and two guardrails for a next-shift robot warning system.", sampleAnswer: "Primary KPI: unplanned downtime per 1,000 operating hours. Leading indicator: high-risk alerts reviewed before shift. Guardrails: missed critical-failure rate and false-inspection or technician-overload rate." },
      { id: "check-05-04", type: "reasoning", points: 5, prompt: "Explain why a favorable KPI change may not prove that an AI system caused the improvement.", sampleAnswer: "The periods may differ in population, exposure, season, policy, maintenance, or external conditions. Causal attribution needs a credible comparison design, adequate sample, uncertainty analysis, and consistent measurement." },
      { id: "check-05-05", type: "application", points: 5, prompt: "Write five testable categories that belong in a professional definition of done.", sampleAnswer: "Examples: business KPI and guardrails, data and model quality tests, operational performance and capacity, governance/security/accessibility, and documentation/monitoring/rollback with stakeholder approval." },
    ],
  },

  researchExtension: {
    title: "Audit the Success Claims of a Data or AI System",
    researchQuestion:
      "Does a published project define success with comparable baselines, meaningful outcomes, visible trade-offs, and reproducible evidence?",
    applicationOptions: ["Predictive maintenance", "Education analytics", "Fraud detection", "Clinical AI", "Recommendation system", "Generative-AI assistant"],
    task:
      "Choose a documented system, case study, or research paper. Reconstruct its objective, KPI definitions, denominators, baseline, benchmark, target, time window, constraints, guardrails, uncertainty, and acceptance decision. Separate reported evidence from your inference and recommend accept, revise, or reject the success claim.",
    requiredEvidence: [
      "Primary documentation or research source",
      "KPI dictionary with numerator, denominator, population, and time window",
      "Baseline-comparability audit",
      "Trade-off and guardrail analysis",
      "Evidence-supported acceptance recommendation",
    ],
  },

  portfolioArtifact: {
    title: "Project Charter, Part 5: KPI Scorecard and Definition of Done",
    description:
      "Extend the decision and modeling frame from Lessons 1-4 with a complete success contract that determines whether the project should proceed, be revised, or stop.",
    requiredSections: [
      "Objective, decision owner, eligible population, and evaluation period",
      "Primary outcome KPI and its full measurement definition",
      "Baseline source, period, value, comparability, and limitations",
      "Target value, deadline, tolerance, and evidence supporting the threshold",
      "Leading, process, reliability, and diagnostic measures",
      "Safety, fairness, privacy, quality, cost, and capacity guardrails",
      "Technical, operational, legal, ethical, data, and financial constraints",
      "Segment and cohort reporting plan",
      "Go, revise, stop, and rollback decision rules",
      "Definition of done with evidence artifact and approver for every criterion",
    ],
    requiredEvidence: [
      "One completed KPI dictionary",
      "One baseline calculation with a named denominator",
      "One balanced scorecard with at least two guardrails",
      "One capacity calculation",
      "One explicit trade-off decision",
      "A signed or simulated acceptance checklist",
    ],
  },

  growthIndicators: [
    { title: "Metric Architect", description: "You define measures precisely enough that independent analysts can reproduce them." },
    { title: "Baseline Critic", description: "You challenge weak comparisons and distinguish improvement from causal proof." },
    { title: "Trade-off Guardian", description: "You protect safety, fairness, quality, and capacity while pursuing performance." },
    { title: "Evidence-Based Finisher", description: "You close work only when testable criteria pass and supporting evidence is attached." },
  ],

  reflection: [
    "Which single outcome best represents success for your project, and why?",
    "What makes your selected baseline credible or weak?",
    "Which denominator choice could change the story told by your KPI?",
    "What guardrail would cause you to stop deployment even if the main KPI improved?",
    "Which acceptance criterion is currently too vague to verify?",
  ],

  summary: [
    "A metric describes performance; a KPI is a selected, objective-linked measure with an owner and decision use.",
    "Every KPI needs a precise definition, population, numerator, denominator, time window, source, frequency, and direction of improvement.",
    "A baseline estimates expected performance without the proposed change; a benchmark provides comparison context.",
    "Counts are often misleading without exposure, eligibility, and time denominators.",
    "Absolute change and relative percentage change answer different questions and should be labeled clearly.",
    "Leading indicators support early action, while lagging indicators confirm final outcomes.",
    "Guardrails reveal harms and trade-offs that a primary KPI can hide.",
    "Constraints belong in the design before modeling, not after deployment.",
    "Capacity coverage determines whether recommendations can become actions.",
    "A professional definition of done uses pass/fail criteria, evidence, ownership, approval, monitoring, and rollback readiness.",
  ],

  previousLesson: {
    id: "data-ai-m01-l04",
    slug: "units-of-analysis-features-targets-and-actions",
    title: "Units of Analysis, Features, Targets, and Actions",
  },
  nextLesson: {
    id: "data-ai-m01-l06",
    slug: "the-end-to-end-data-and-ai-lifecycle",
    title: "The End-to-End Data and AI Lifecycle",
  },

  lumineryGuidance: {
    message:
      "Before building, complete this sentence: success means ___ improves from ___ to ___ by ___, while ___ and ___ remain within agreed limits.",
    prompt:
      "Help me design a KPI scorecard and definition of done. Challenge the objective, population, numerator, denominator, baseline, target, time window, constraints, guardrails, capacity, evidence, and approval. Reject vague measures and unsupported thresholds.",
    coachingQuestions: [
      "What real outcome should improve?",
      "What would happen without the project?",
      "Who is included in the denominator?",
      "Which harmful trade-off could the primary KPI hide?",
      "Can operations act on every recommendation within capacity?",
      "What exact evidence proves the project is done?",
    ],
  },
};

export default lesson05;
