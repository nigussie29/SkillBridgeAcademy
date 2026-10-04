const lesson07 = {
  id: "data-ai-m05-l07",
  courseId: "data-ai-foundations",
  moduleId: "data-ai-foundations-module-05",
  moduleNumber: 5,
  lessonNumber: 7,
  slug: "portfolio-project-audited-data-analysis-notebook",
  title: "Portfolio Project: Audited Data-Analysis Notebook",
  shortTitle: "Audited Data-Analysis Notebook",
  subtitle:
    "Deliver a professional Python analysis whose population, cleaning rules, joins, statistics, figures, findings, exceptions, and outputs are fully traceable and reproducible.",
  status: "available",
  duration: "8–12 hours",
  level: "Applied Capstone",

  essentialQuestion:
    "What evidence proves that a data-analysis notebook is correct, decision-relevant, reproducible, and strong enough for a professional portfolio?",
  bigIdea:
    "A portfolio project is not complete because the code runs once. It is complete when a reviewer can understand the decision, trace every source row, verify every transformation, reproduce every table and figure, challenge the limitations, and rerun the project from a clean environment.",

  whyThisLessonExists: {
    title: "Your Portfolio Must Show How You Know—not Only What You Found",
    introduction:
      "Employers and research collaborators need more than attractive charts. They need evidence that you can define a problem, protect data meaning, build reliable transformations, validate outputs, communicate limitations, and deliver reusable analytical work.",
    centralProblem:
      "A notebook can appear polished while hiding invalid rows, duplicate events, orphan reference keys, unexplained filters, data leakage, hard-coded paths, hidden execution state, and figures that cannot be regenerated. Such work is difficult to trust and difficult to maintain.",
    purpose:
      "This capstone integrates the entire Python for Data Analysis module. Learners will build an audited maintenance analysis with raw preservation, typed parsing, exception routing, duplicate control, a validated many-to-one join, grouped KPIs, robust EDA, accessible visualization, sensitivity analysis, output manifests, automated assertions, and a portfolio narrative.",
  },

  problemFirst: {
    title: "Capstone Challenge: Produce Evidence a Maintenance Director Can Trust",
    scenario:
      "Ten incident records arrive with one negative downtime value, one replayed event, and one asset key missing from the approved asset dimension. Seven records form the final matched analysis population. The director needs plant downtime and repair-cost evidence, a review of the 58-minute event, and clear next actions.",
    questions: [
      "What decision will the analysis support, and what will it not answer?",
      "What does one row represent in every input and output table?",
      "Which validation failures block analysis, and which become warnings?",
      "Which fields define an event duplicate and its survivor?",
      "How will unmatched asset keys be preserved and corrected?",
      "Which statistics and charts answer the decision question without overstating evidence?",
      "What sensitivity analysis is required for the 58-minute incident?",
      "Which automated tests and files prove the complete project can be reproduced?",
    ],
    expectedInsight:
      "The capstone is an evidence system: every claim must connect to a governed population, validated transformation, reproducible output, and stated limitation.",
  },

  visualModels: [
    {
      id: "capstone-delivery-cycle",
      type: "lifecycle",
      title: "The Audited Notebook Delivery Cycle",
      description:
        "Complete each gate before treating the analysis as portfolio-ready.",
      stages: [
        { label: "1. Frame", detail: "Define the stakeholder, decision, questions, population, grain, time, measures, and acceptance criteria." },
        { label: "2. Audit", detail: "Preserve raw evidence and profile schema, keys, dtypes, missingness, ranges, duplicates, and lineage." },
        { label: "3. Transform", detail: "Parse, validate, clean, join, reshape, and engineer features through named, testable functions." },
        { label: "4. Analyze", detail: "Produce reconciled KPIs, robust profiles, group comparisons, relationships, and sensitivity evidence." },
        { label: "5. Communicate", detail: "Write findings, accessible figures, recommendations, uncertainty, and limitations for the stakeholder." },
        { label: "6. Reproduce", detail: "Restart, run all, validate the manifest, and deliver code, environment, outputs, and instructions." },
      ],
      feedback:
        "A failed gate returns the project to the earliest responsible step; formatting cannot compensate for a broken population, key, or reconciliation control.",
      interpretation:
        "Professional analysis is a verified chain from decision to source evidence to reproducible action.",
    },
    {
      id: "portfolio-evidence-chain",
      type: "lifecycle",
      title: "Portfolio Evidence Chain",
      description:
        "Every executive claim should be traceable through these connected artifacts.",
      stages: [
        { label: "Claim", detail: "A concise decision-relevant statement with scope, unit, population, and time period." },
        { label: "Figure/Table", detail: "An accessible display that exposes counts, denominators, comparison, and unusual records." },
        { label: "Metric", detail: "A documented calculation with grain, eligibility, aggregation, and missing-value policy." },
        { label: "Transformation", detail: "Versioned code with explicit types, keys, rules, joins, and exceptions." },
        { label: "Source", detail: "Immutable identifiers, data version, lineage, and controlled raw evidence." },
      ],
      feedback:
        "If a reviewer cannot move backward from a recommendation to exact records and forward from raw data to the published result, the evidence chain is incomplete.",
      interpretation:
        "Traceability turns a notebook from a demonstration into a defensible analytical product.",
    },
  ],

  learningObjectives: [
    "Translate a stakeholder need into a bounded analytical question and acceptance criteria.",
    "Declare population, grain, business keys, time window, units, eligibility, and exclusions.",
    "Design a reproducible notebook or notebook-plus-module project structure.",
    "Preserve raw source identifiers and create a data dictionary and lineage record.",
    "Parse intentional dtypes and validate schema, requiredness, categories, ranges, keys, and relationships.",
    "Separate clean, duplicate, orphan, and invalid records with controlled reason codes.",
    "Validate merge cardinality and reconcile rows and additive measures.",
    "Create named group summaries and robust numerical profiles.",
    "Investigate unusual observations through exact IDs and sensitivity analysis.",
    "Create accessible distribution, comparison, relationship, and quality visuals.",
    "Write findings that separate evidence, interpretation, recommendation, uncertainty, and limitation.",
    "Build automated assertions for populations, keys, metrics, exceptions, outputs, and file manifests.",
    "Capture data version, environment, parameters, seeds, and deterministic execution steps.",
    "Perform restart-and-run-all and independent review checks.",
    "Present the project as professional evidence of Python, pandas, analytical, and communication skill.",
  ],

  prerequisiteKnowledge: [
    "Module 5 Lessons 1–6 completed",
    "Python functions, exceptions, assertions, modules, and import-safe execution",
    "NumPy arrays, vectorized conditions, broadcasting, aggregation, and numerical validation",
    "pandas construction, indexing, filtering, missing data, dtypes, duplicates, groupby, merge, and reshape",
    "Descriptive statistics, IQR screening, chart selection, accessibility, and reproducibility",
  ],

  vocabulary: [
    { term: "Analysis notebook", definition: "An executable document combining code, outputs, explanation, and evidence in a reproducible order." },
    { term: "Project brief", definition: "A concise agreement describing stakeholder, decision, scope, questions, deliverables, constraints, and success criteria." },
    { term: "Stakeholder", definition: "A person or group who uses, governs, supplies, or is affected by the analytical result." },
    { term: "Decision question", definition: "A bounded question whose answer can change a specific action or choice." },
    { term: "Acceptance criteria", definition: "Observable conditions that must pass before a deliverable is considered complete." },
    { term: "Analytical contract", definition: "The declared population, grain, keys, time, units, eligibility, metric definitions, and exclusions." },
    { term: "Raw zone", definition: "An immutable or append-only representation of source data retained for audit and reprocessing." },
    { term: "Clean zone", definition: "Typed and validated records prepared under explicit rules while preserving lineage to raw data." },
    { term: "Semantic layer", definition: "Governed business definitions for measures, dimensions, relationships, and reporting meaning." },
    { term: "Lineage", definition: "Evidence connecting outputs and transformations to source records, versions, and processing steps." },
    { term: "Audit trail", definition: "A chronological record of validations, changes, exceptions, decisions, and produced artifacts." },
    { term: "Parameter", definition: "A named value controlling analysis behavior, such as date range, threshold, path, or seed." },
    { term: "Configuration", definition: "A centralized set of parameters separated from transformation logic." },
    { term: "Data dictionary", definition: "Documentation of fields, meanings, dtypes, units, allowed values, keys, and null rules." },
    { term: "Schema", definition: "The expected table structure, including fields, dtypes, order policy, and constraints." },
    { term: "Grain", definition: "The precise real-world meaning represented by one row in a table." },
    { term: "Business key", definition: "A field or combination expected to uniquely identify a business observation." },
    { term: "Validation test", definition: "An executable check comparing actual data or output with a declared requirement." },
    { term: "Assertion", definition: "A code statement that fails when a required invariant is false." },
    { term: "Exception table", definition: "A retained dataset of rejected or unmatched records with source IDs and reason codes." },
    { term: "Reconciliation", definition: "Proof that source counts and important amounts equal explained output populations and totals." },
    { term: "Metric definition", definition: "A specification of calculation, grain, population, denominator, time, units, and missing-value treatment." },
    { term: "Evidence table", definition: "A validated table supporting a finding with exact rows, groups, and measures." },
    { term: "Executive summary", definition: "A concise account of the decision, evidence, findings, recommended actions, uncertainty, and limitations." },
    { term: "Finding", definition: "A factual pattern supported by a declared population and reproducible calculation." },
    { term: "Interpretation", definition: "A reasoned explanation of what a finding may mean in context." },
    { term: "Recommendation", definition: "A proposed action connected to evidence, ownership, expected benefit, and monitoring." },
    { term: "Limitation", definition: "A condition restricting data quality, scope, inference, generalization, or decision confidence." },
    { term: "Reproducibility", definition: "The ability to regenerate outputs from recorded data, code, parameters, environment, and steps." },
    { term: "Determinism", definition: "The property that the same controlled inputs and environment produce the same outputs." },
    { term: "Environment lock", definition: "A versioned specification of language and package dependencies needed to rerun the project." },
    { term: "Dependency", definition: "An external package, service, file, or system required by the project." },
    { term: "Random seed", definition: "A recorded initializer supporting repeatable pseudo-random operations." },
    { term: "Artifact", definition: "A generated deliverable such as a table, figure, report, model input, log, or manifest." },
    { term: "Manifest", definition: "A machine-readable inventory of expected outputs, versions, metrics, and validation status." },
    { term: "Checksum", definition: "A content-derived identifier used to detect file changes and verify data versions." },
    { term: "Relative path", definition: "A file location expressed from the project root so the project can run on another machine." },
    { term: "Restart-and-run-all", definition: "Executing a notebook from a fresh kernel in order to expose hidden state and ordering dependencies." },
    { term: "Version control", definition: "A system recording changes to code and documentation so work can be reviewed, compared, and restored." },
    { term: "Peer review", definition: "Independent evaluation of code, assumptions, evidence, usability, and conclusions." },
  ],

  formulas: [
    { id: "capstone-row-balance", name: "Portfolio population balance", formula: "received = analysis + orphan + duplicate + invalid", meaning: "Every source row reaches one mutually exclusive final population.", requirement: "Publish exact IDs and reason codes for all non-analysis outcomes." },
    { id: "capstone-amount-balance", name: "Amount reconciliation", formula: "source amount = analysis + orphan + duplicate + invalid amounts", meaning: "Protects additive source measures from silent loss or multiplication.", requirement: "Label raw invalid amounts clearly and never treat reconciliation as approval of invalid values." },
    { id: "completeness-rate", name: "Required-field completeness", formula: "complete required cells ÷ expected required cells", meaning: "Measures presence across the declared required-field scope.", requirement: "Present but invalid values remain complete and must be measured separately." },
    { id: "validity-rate", name: "Row validity rate", formula: "field-valid rows ÷ received rows", meaning: "Reports records passing the full field-level contract before duplicate and join rules.", requirement: "Publish failed-rule counts and overlapping defects where applicable." },
    { id: "duplicate-rate", name: "Duplicate replay rate", formula: "duplicate rows beyond survivor ÷ field-valid rows", meaning: "Quantifies records quarantined by the approved event-key survivor rule.", requirement: "State the key, order, and conflict policy." },
    { id: "match-rate", name: "Reference match rate", formula: "matched unique-valid rows ÷ unique-valid rows", meaning: "Measures referential coverage after quality and duplicate controls.", requirement: "Retain orphan IDs and avoid using an inner join to hide them." },
    { id: "capstone-iqr", name: "IQR screening", formula: "IQR = Q3 − Q1; upper = Q3 + 1.5·IQR", meaning: "Flags unusually high numerical observations for investigation.", requirement: "Keep the primary full-data population and label all sensitivity alternatives." },
    { id: "review-score", name: "Portfolio rubric score", formula: "score = Σ category points; pass when score ≥ 80 and every critical control passes", meaning: "Combines evaluated project dimensions without allowing critical failures to be averaged away.", requirement: "Critical failures include unreconciled rows, broken keys, hidden exceptions, irreproducible execution, or unsupported claims." },
  ],

  workedExamples: [
    {
      id: "example-05-07-01",
      title: "Turn a topic into a decision question",
      problem: "Replace the topic 'analyze maintenance data' with a portfolio-ready question.",
      solutionSteps: [
        "Name the stakeholder: maintenance director.",
        "Name the action: prioritize investigation and quality remediation.",
        "Define the population and period: validated September incidents from Plants A and B.",
        "Define evidence: downtime burden, repair cost, unusual events, and data exceptions.",
      ],
      answer: "Which plant and incidents should the maintenance director prioritize, and which data-quality failures must be corrected before ongoing KPI reporting?",
      interpretation: "A decision question determines required populations, measures, comparisons, and deliverables.",
    },
    {
      id: "example-05-07-02",
      title: "Design the project folder and execution order",
      problem: "Make the notebook portable and resistant to hidden state.",
      solutionSteps: [
        "Use project-relative data, notebooks, source, tests, outputs, and documentation folders.",
        "Put parameters and paths in one configuration section.",
        "Move reusable parsing, validation, and analysis logic into focused functions or modules.",
        "Generate outputs from one ordered entry point and validate an output manifest.",
      ],
      answer: "A reviewer should be able to clone, create the environment, run one command or restart-and-run-all, and obtain the same validated artifacts.",
      interpretation: "Project structure is part of analytical quality because it controls repeatability and reviewability.",
    },
    {
      id: "example-05-07-03",
      title: "Publish exceptions instead of hiding them",
      problem: "One row has negative downtime, one is a replay, and one has an unknown asset key.",
      solutionSteps: [
        "Route the negative row to INVALID with a field-level reason.",
        "Apply the declared event-key survivor rule and route the replay to DUPLICATE.",
        "Use a validated left join and route the unmatched key to ORPHAN.",
        "Publish source IDs, reasons, source values, and suggested owner action.",
      ],
      answer: "The final analysis includes seven rows; the exception table includes I-008, I-009, and I-010 with distinct reason codes.",
      interpretation: "Exceptions are deliverables because they support correction, governance, and population transparency.",
    },
    {
      id: "example-05-07-04",
      title: "Write a traceable finding",
      problem: "Plant B has higher total downtime than Plant A and contains the 58-minute incident.",
      solutionSteps: [
        "State the governed population and period.",
        "Report Plant A and Plant B counts and totals with units.",
        "Identify the exact high-impact incident and its sensitivity effect.",
        "Separate the finding from causal interpretation and recommended investigation.",
      ],
      answer: "Among seven matched valid incidents, Plant B accounts for 98 of 133 downtime minutes; incident I-004 contributes 58 minutes and should be source-verified before causal conclusions.",
      interpretation: "A strong finding contains population, evidence, unit, identifier, and limitation.",
    },
    {
      id: "example-05-07-05",
      title: "Build acceptance tests before polishing",
      problem: "Define pass/fail evidence for the capstone.",
      solutionSteps: [
        "Require exact population IDs and 10 = 7 + 1 + 1 + 1 row reconciliation.",
        "Require repair-cost and raw downtime amount balances.",
        "Require unique analysis keys, validated join cardinality, and exact exception reasons.",
        "Require nonempty tables, figure, manifest, and environment evidence from a clean run.",
      ],
      answer: "The project cannot pass when any critical reconciliation, key, lineage, or reproducibility test fails.",
      interpretation: "Acceptance criteria convert quality from an opinion into observable evidence.",
    },
    {
      id: "example-05-07-06",
      title: "Present the portfolio story in an interview",
      problem: "Explain the project in approximately two minutes.",
      solutionSteps: [
        "Problem: maintenance leaders needed governed plant and incident priorities.",
        "Method: built a typed, tested pandas pipeline with duplicate and join controls.",
        "Evidence: reconciled ten rows to seven analysis records and three reason-coded exceptions.",
        "Insight: Plant B carried most downtime, driven partly by one 58-minute incident.",
        "Value: delivered rerunnable outputs, quality actions, and limitations rather than a one-time chart.",
      ],
      answer: "Use problem–method–control–insight–action–limitation as the interview narrative.",
      interpretation: "The technical depth is strongest when connected to a real decision and verifiable result.",
    },
  ],

  interactiveExploration: {
    title: "Capstone Review Simulation",
    description:
      "Act as analyst, stakeholder, data steward, and peer reviewer. At each gate, attempt to challenge the project with one failure case.",
    steps: [
      "Change the project question and identify which metrics or populations become irrelevant.",
      "Insert a missing field, negative value, duplicate event, and orphan asset key.",
      "Duplicate one asset dimension key and confirm the join fails cardinality validation.",
      "Remove the 58-minute incident only in a labeled sensitivity analysis and compare findings.",
      "Change the working directory and verify relative paths still work.",
      "Delete one expected artifact and confirm manifest validation fails.",
      "Restart and rerun the entire project with no manual correction.",
    ],
    questions: [
      "Which failure was detected earliest?",
      "Which record-level evidence made debugging possible?",
      "Which recommendation changed under sensitivity analysis?",
      "Which output depended on hidden state or path assumptions?",
      "Could an independent reviewer reproduce every executive claim?",
    ],
    expectedDiscovery:
      "A portfolio project becomes convincing when deliberate failure cases are detected, explained, retained, and repaired through the same governed pipeline.",
  },

  realWorldApplications: [
    { field: "Manufacturing and Robotics", application: "Create an audited maintenance evidence system with incident quality, asset enrichment, plant KPIs, unusual-event review, and operational recommendations." },
    { field: "Business Intelligence", application: "Prototype controlled fact and dimension logic, metric definitions, and evidence tables before publishing semantic models and dashboards." },
    { field: "Finance", application: "Deliver reconciled transaction analysis with precise amounts, exception controls, and defensible decision reporting." },
    { field: "Education", application: "Analyze learner evidence while preserving score meanings, eligibility, missingness, subgroup context, and reproducible intervention criteria." },
    { field: "Healthcare Operations", application: "Build privacy-aware operational analysis with encounter keys, quality rules, uncertainty, and reviewable outputs." },
    { field: "AI and Machine Learning", application: "Create trustworthy feature and evaluation evidence, prevent leakage, document data limitations, and support model-monitoring baselines." },
  ],

  aiConnection: {
    title: "The Audited Notebook Becomes the Evidence Layer for AI",
    explanation:
      "An AI project needs the same foundations: population definition, point-in-time-valid features, reason-coded exclusions, reproducible transformations, independent evaluation, subgroup analysis, and an artifact trail. The capstone notebook can become the baseline data report and validation harness for a later model.",
    example:
      "The maintenance notebook identifies valid matched incidents and creates prior-only asset history. A future failure model should reuse the same contracts, split by asset or time, fit preprocessing on training data only, and compare production distributions with the notebook's governed baseline.",
    uses: [
      "Model-ready population and feature contracts",
      "Training data quality and leakage review",
      "Baseline distributions and drift thresholds",
      "Subgroup and exclusion analysis",
      "Reproducible evaluation artifacts",
      "Human-readable model governance evidence",
    ],
    caution:
      "Do not convert an exploratory notebook directly into a deployed model pipeline without modular functions, tests, point-in-time controls, monitored data contracts, and production security review.",
    reflectionQuestion:
      "Which parts of your notebook can become tested reusable pipeline functions, and which exploratory steps should remain research-only?",
  },

  pythonLab: {
    title: "Complete Audited Maintenance Analysis and Artifact Package",
    objective:
      "Run an end-to-end portfolio pipeline that validates ten incidents, quarantines invalid and duplicate rows, audits a many-to-one asset join, produces seven-row analysis evidence, investigates a 58-minute event, saves tables and an accessible figure, and verifies a machine-readable manifest.",
    code: `from pathlib import Path
import json
import platform

import matplotlib
import matplotlib.pyplot as plt
import numpy as np
import pandas as pd

OUTPUT_DIR = Path("outputs")
OUTPUT_DIR.mkdir(parents=True, exist_ok=True)

incidents = pd.DataFrame({
    "incident_id": pd.Series([f"I-{i:03d}" for i in range(1, 11)], dtype="string"),
    "asset_id": pd.Series(["R-101", "R-102", "R-101", "R-201", "R-202", "R-102", "R-203", "R-999", "R-201", "R-101"], dtype="string"),
    "event_time": pd.to_datetime([
        "2026-09-01 08:00", "2026-09-01 09:00", "2026-09-02 08:30", "2026-09-01 10:00", "2026-09-01 11:00",
        "2026-09-02 09:30", "2026-09-02 12:00", "2026-09-02 13:00", "2026-09-03 10:00", "2026-09-01 08:00",
    ], utc=True),
    "downtime_min": pd.Series([10, 20, 5, 58, 15, 0, 25, 12, -4, 10], dtype="Int64"),
    "repair_cost_cents": pd.Series([10000, 15000, 5000, 40000, 12000, 0, 18000, 8000, 4000, 10000], dtype="Int64"),
    "severity": pd.Series(["low", "medium", "low", "high", "medium", "low", "high", "medium", "low", "low"], dtype="string"),
})

assets = pd.DataFrame({
    "asset_id": pd.Series(["R-101", "R-102", "R-201", "R-202", "R-203"], dtype="string"),
    "plant": pd.Series(["A", "A", "B", "B", "B"], dtype="string"),
    "asset_type": pd.Series(["press", "welder", "press", "conveyor", "robot"], dtype="string"),
})

# 1. Structural and field-level validation.
assert incidents.shape == (10, 6)
assert incidents["incident_id"].notna().all() and incidents["incident_id"].is_unique
assert assets["asset_id"].notna().all() and assets["asset_id"].is_unique

field_valid = (
    incidents[["asset_id", "event_time", "downtime_min", "repair_cost_cents", "severity"]].notna().all(axis=1)
    & incidents["downtime_min"].ge(0)
    & incidents["repair_cost_cents"].ge(0)
    & incidents["severity"].isin({"low", "medium", "high"})
)

event_key = ["asset_id", "event_time", "downtime_min", "repair_cost_cents", "severity"]
duplicate_mask = field_valid & incidents.duplicated(subset=event_key, keep="first")
unique_valid_mask = field_valid & ~duplicate_mask
invalid_mask = ~field_valid

invalid = incidents.loc[invalid_mask].copy()
invalid["reason_code"] = "NEGATIVE_DOWNTIME"
duplicates = incidents.loc[duplicate_mask].copy()
duplicates["reason_code"] = "DUPLICATE_EVENT"
unique_valid = incidents.loc[unique_valid_mask].copy()

# 2. Validated many-to-one asset enrichment with orphan retention.
joined = unique_valid.merge(
    assets,
    on="asset_id",
    how="left",
    validate="many_to_one",
    indicator=True,
)
analysis = joined.loc[joined["_merge"].eq("both")].copy()
orphans = joined.loc[joined["_merge"].eq("left_only")].copy()
orphans["reason_code"] = "ASSET_KEY_NOT_FOUND"

exceptions = pd.concat([
    orphans[incidents.columns.tolist() + ["reason_code"]],
    invalid[incidents.columns.tolist() + ["reason_code"]],
    duplicates[incidents.columns.tolist() + ["reason_code"]],
], ignore_index=True).sort_values("incident_id", kind="stable").reset_index(drop=True)

# 3. Population and amount reconciliation.
received = len(incidents)
assert received == len(analysis) + len(orphans) + len(duplicates) + len(invalid)
assert (len(analysis), len(orphans), len(duplicates), len(invalid)) == (7, 1, 1, 1)
assert analysis["incident_id"].tolist() == ["I-001", "I-002", "I-003", "I-004", "I-005", "I-006", "I-007"]
assert exceptions["incident_id"].tolist() == ["I-008", "I-009", "I-010"]
assert exceptions["reason_code"].tolist() == ["ASSET_KEY_NOT_FOUND", "NEGATIVE_DOWNTIME", "DUPLICATE_EVENT"]

source_downtime = int(incidents["downtime_min"].sum())
source_cost = int(incidents["repair_cost_cents"].sum())
classified_downtime = sum(int(frame["downtime_min"].sum()) for frame in [analysis, orphans, duplicates, invalid])
classified_cost = sum(int(frame["repair_cost_cents"].sum()) for frame in [analysis, orphans, duplicates, invalid])
assert source_downtime == classified_downtime == 151
assert source_cost == classified_cost == 122000

# 4. Analysis, unusual-event evidence, and sensitivity.
plant_kpis = (
    analysis.groupby("plant")
    .agg(
        incident_count=("incident_id", "count"),
        distinct_assets=("asset_id", "nunique"),
        downtime_total=("downtime_min", "sum"),
        downtime_mean=("downtime_min", "mean"),
        downtime_median=("downtime_min", "median"),
        repair_cost_usd=("repair_cost_cents", lambda s: s.sum() / 100),
    )
    .sort_index()
)

q1 = float(analysis["downtime_min"].quantile(0.25))
q3 = float(analysis["downtime_min"].quantile(0.75))
iqr = q3 - q1
upper_fence = q3 + 1.5 * iqr
analysis["iqr_flag"] = analysis["downtime_min"].gt(upper_fence).astype("boolean")
flagged = analysis.loc[analysis["iqr_flag"]].copy()
sensitivity = analysis.loc[~analysis["iqr_flag"]].copy()

assert int(analysis["downtime_min"].sum()) == 133
assert int(plant_kpis.loc["A", "downtime_total"]) == 35
assert int(plant_kpis.loc["B", "downtime_total"]) == 98
assert flagged["incident_id"].tolist() == ["I-004"]
assert flagged["downtime_min"].tolist() == [58]
assert np.isclose(analysis["downtime_min"].mean(), 19.0)
assert np.isclose(sensitivity["downtime_min"].mean(), 12.5)

# 5. Accessible portfolio figure.
fig, axes = plt.subplots(1, 3, figsize=(13, 4), constrained_layout=True)
axes[0].bar(plant_kpis.index, plant_kpis["downtime_total"], color=["#2563EB", "#F59E0B"])
axes[0].set(title="Downtime burden by plant", xlabel="Plant", ylabel="Downtime (minutes)")
for i, value in enumerate(plant_kpis["downtime_total"]):
    axes[0].text(i, value + 2, str(int(value)), ha="center")

axes[1].boxplot(
    [analysis.loc[analysis["plant"].eq(p), "downtime_min"].astype(float) for p in ["A", "B"]],
    tick_labels=["Plant A", "Plant B"],
)
axes[1].set(title="Incident downtime distribution", ylabel="Downtime (minutes)")

for plant, marker, color in [("A", "o", "#2563EB"), ("B", "s", "#F59E0B")]:
    subset = analysis.loc[analysis["plant"].eq(plant)]
    axes[2].scatter(subset["downtime_min"], subset["repair_cost_cents"] / 100, label=f"Plant {plant}", marker=marker, color=color)
axes[2].set(title="Repair cost and downtime", xlabel="Downtime (minutes)", ylabel="Repair cost (USD)")
axes[2].legend()

figure_path = OUTPUT_DIR / "maintenance_evidence.png"
fig.suptitle("Audited maintenance analysis — September 2026")
fig.savefig(figure_path, dpi=150, bbox_inches="tight")
plt.close(fig)

# 6. Export evidence and a machine-readable manifest.
analysis_path = OUTPUT_DIR / "analysis_population.csv"
exceptions_path = OUTPUT_DIR / "exceptions.csv"
kpis_path = OUTPUT_DIR / "plant_kpis.csv"
quality_path = OUTPUT_DIR / "quality_metrics.csv"
manifest_path = OUTPUT_DIR / "manifest.json"

quality_metrics = pd.DataFrame({
    "metric": ["received_rows", "analysis_rows", "orphan_rows", "duplicate_rows", "invalid_rows", "source_downtime", "source_repair_cost_cents"],
    "value": [received, len(analysis), len(orphans), len(duplicates), len(invalid), source_downtime, source_cost],
})

analysis.to_csv(analysis_path, index=False)
exceptions.to_csv(exceptions_path, index=False)
plant_kpis.reset_index().to_csv(kpis_path, index=False)
quality_metrics.to_csv(quality_path, index=False)

manifest = {
    "status": "PASS",
    "population_balance": {"received": 10, "analysis": 7, "orphan": 1, "duplicate": 1, "invalid": 1},
    "flagged_incidents": ["I-004"],
    "environment": {
        "python": platform.python_version(),
        "pandas": pd.__version__,
        "numpy": np.__version__,
        "matplotlib": matplotlib.__version__,
    },
    "artifacts": [p.name for p in [analysis_path, exceptions_path, kpis_path, quality_path, figure_path]],
}
manifest_path.write_text(json.dumps(manifest, indent=2), encoding="utf-8")

for path in [analysis_path, exceptions_path, kpis_path, quality_path, figure_path, manifest_path]:
    assert path.exists() and path.stat().st_size > 0
assert len(pd.read_csv(analysis_path)) == 7
assert len(pd.read_csv(exceptions_path)) == 3
assert json.loads(manifest_path.read_text(encoding="utf-8"))["status"] == "PASS"

print("Population balance: 10 = 7 analysis + 1 orphan + 1 duplicate + 1 invalid")
print("Amount balances:", source_downtime, "downtime minutes;", source_cost, "repair-cost cents")
print("Exceptions:", exceptions[["incident_id", "reason_code"]].to_dict("records"))
print("Plant KPIs:")
print(plant_kpis.round(2))
print("Flagged incident:", flagged[["incident_id", "downtime_min"]].to_dict("records"))
print("Mean full / sensitivity:", round(float(analysis["downtime_min"].mean()), 2), round(float(sensitivity["downtime_min"].mean()), 2))
print("Artifacts:", manifest["artifacts"] + [manifest_path.name])
print("All capstone quality, integration, analysis, artifact, and reproducibility tests passed.")`,
    questions: [
      "What is the decision question and final analysis grain?",
      "Why are negative, duplicate, and orphan records different exception types?",
      "Which fields define the duplicate event and survivor rule?",
      "Why must asset_id be unique in the asset dimension?",
      "How does 10 = 7 + 1 + 1 + 1 prove complete population classification?",
      "Why are raw downtime and repair-cost amounts reconciled even for rejected rows?",
      "What finding is supported by the Plant B total of 98 minutes?",
      "Why is I-004 retained in the primary result and removed only in sensitivity analysis?",
      "Which visual accessibility choices appear in the three-panel figure?",
      "How does the manifest prove artifact completeness and environment context?",
    ],
    reflectionQuestions: [
      "Which exception owner should correct R-999, negative downtime, and replayed events?",
      "Would the recommendation remain stable across a longer period or more assets?",
      "Which project functions should become production pipeline components before live deployment?",
    ],
    extension:
      "Replace the embedded fixtures with versioned CSV inputs, move logic into tested modules, add schema validation and checksums, parameterize date ranges, render an HTML report, create continuous integration, and connect the evidence tables to Power BI or Microsoft Fabric.",
  },

  guidedPractice: [
    { id: "gp-05-07-01", question: "What six elements turn a broad topic into an analytical contract?", answer: "Stakeholder decision, population, grain and keys, time window, measures and units, and eligibility or exclusion rules." },
    { id: "gp-05-07-02", question: "Why should raw values remain unchanged?", answer: "They preserve source evidence, enable reprocessing, support lineage, and make corrections and disputes auditable." },
    { id: "gp-05-07-03", question: "What is the final row-balance equation in the project lab?", answer: "10 received = 7 analysis + 1 orphan + 1 duplicate + 1 invalid." },
    { id: "gp-05-07-04", question: "What belongs in an exception table?", answer: "Source ID, failed field or key, original value, reason code, rule, severity, owner or action, and processing context." },
    { id: "gp-05-07-05", question: "What makes a finding traceable?", answer: "It states population, measure, units, time, exact supporting table or figure, code-generated metric, source lineage, and limitation." },
    { id: "gp-05-07-06", question: "What proves the notebook is reproducible?", answer: "A clean restart or one-command run regenerates all validated artifacts under the recorded data, configuration, seed, and environment." },
  ],

  independentPractice: [
    { id: "ip-05-07-01", difficulty: "Planning", question: "Write a one-page project brief with stakeholder, decision, scope, questions, deliverables, risks, and acceptance criteria.", sampleAnswer: "Use specific bounded language and connect every requested artifact to a decision or control." },
    { id: "ip-05-07-02", difficulty: "Data", question: "Create a data dictionary and contract for the incident and asset tables.", sampleAnswer: "Document grain, keys, fields, meanings, dtypes, units, categories, null rules, ranges, relationships, freshness, and owners." },
    { id: "ip-05-07-03", difficulty: "Engineering", question: "Refactor parsing, validation, integration, analysis, and export into testable functions.", sampleAnswer: "Use focused inputs and returns, avoid hidden global state, and test normal, boundary, invalid, duplicate, orphan, and empty cases." },
    { id: "ip-05-07-04", difficulty: "Analysis", question: "Produce an executive evidence table with plant counts, assets, downtime, cost, median, flagged incidents, and exception rates.", sampleAnswer: "Use governed denominators, units, exact populations, robust summaries, and row and amount reconciliation." },
    { id: "ip-05-07-05", difficulty: "Communication", question: "Create four accessible charts and write one evidence-based sentence for each.", sampleAnswer: "Match charts to distribution, comparison, relationship, and quality questions; include labels, units, counts, annotations, and limitations." },
    { id: "ip-05-07-06", difficulty: "Reproducibility", question: "Run the project in a new directory or clean environment and validate the output manifest.", sampleAnswer: "Use relative paths, locked dependencies, controlled parameters, restart-and-run-all, and assertions for every required artifact." },
    { id: "ip-05-07-07", difficulty: "Professional", question: "Conduct a peer review and record every defect, response, change, and remaining risk.", sampleAnswer: "Review decision fit, data contracts, code, tests, visuals, claims, accessibility, security, reproducibility, and maintainability." },
  ],

  commonMistakes: [
    { mistake: "Starting with code instead of a stakeholder decision.", correction: "Approve the project brief and analytical contract before implementation." },
    { mistake: "Using a polished notebook as the only artifact.", correction: "Deliver data dictionary, code, tests, outputs, manifest, environment, README, and limitations." },
    { mistake: "Editing raw values directly in the analysis table.", correction: "Preserve raw evidence and create typed standardized fields plus correction logs." },
    { mistake: "Dropping invalid, duplicate, or unmatched records silently.", correction: "Publish mutually exclusive exception populations with source IDs and reason codes." },
    { mistake: "Validating only final row count.", correction: "Test exact IDs, key uniqueness, amounts, summaries, flagged records, artifacts, and output schemas." },
    { mistake: "Using one giant notebook cell for the entire pipeline.", correction: "Use small named functions and clear gates for audit, transform, analysis, and export." },
    { mistake: "Hard-coding absolute local paths.", correction: "Use project-relative paths and centralized configuration." },
    { mistake: "Letting notebook cell order hide state.", correction: "Restart and run all; automated execution must pass without manual intervention." },
    { mistake: "Reporting a recommendation without a traceable metric.", correction: "Connect each claim to a validated table, figure, calculation, source, and limitation." },
    { mistake: "Deleting an outlier to improve the story.", correction: "Retain the primary result and publish exact-ID sensitivity evidence separately." },
    { mistake: "Adding many decorative charts without decision value.", correction: "Every figure must answer a named analytical question and support an action or limitation." },
    { mistake: "Hiding package and data versions.", correction: "Lock the environment and record the input data version or checksum in the manifest." },
    { mistake: "Including confidential data in a public portfolio.", correction: "Use synthetic, public, de-identified, or explicitly authorized data and document provenance." },
    { mistake: "Claiming production readiness from an exploratory notebook.", correction: "Separate research evidence from production requirements such as orchestration, security, monitoring, and service-level controls." },
    { mistake: "Treating rubric points as permission to ignore a critical failure.", correction: "Require all critical population, key, reconciliation, privacy, and reproducibility controls to pass." },
  ],

  discussionQuestions: [
    "What makes an analytics portfolio project more persuasive than a collection of charts?",
    "Which controls should block publication even when the overall rubric score is high?",
    "How much technical detail belongs in the executive summary versus the README and notebook?",
    "How should a learner document synthetic data so reviewers understand both realism and limitations?",
    "When should notebook logic be moved into modules, pipelines, or production services?",
    "Which ethical, privacy, or security risks must be checked before publishing portfolio data?",
  ],

  formativeAssessment: {
    totalPoints: 50,
    passingScore: 40,
    questions: [
      { id: "check-05-07-01", type: "brief", points: 5, prompt: "Define a complete capstone project brief.", sampleAnswer: "Stakeholder, decision, questions, scope, population, time, data, deliverables, constraints, risks, acceptance criteria, and exclusions." },
      { id: "check-05-07-02", type: "contract", points: 5, prompt: "List the core elements of an analytical contract.", sampleAnswer: "Grain, keys, fields, dtypes, units, population, time, eligibility, missingness, duplicates, relationships, metric definitions, and lineage." },
      { id: "check-05-07-03", type: "exceptions", points: 5, prompt: "Why are exception tables portfolio deliverables?", sampleAnswer: "They prove records were retained and explained, support correction and governance, expose quality risk, and complete reconciliation." },
      { id: "check-05-07-04", type: "reconciliation", points: 5, prompt: "State the project row balance and why masks must be exclusive.", sampleAnswer: "10 = 7 analysis + 1 orphan + 1 duplicate + 1 invalid; exclusivity prevents loss and double counting." },
      { id: "check-05-07-05", type: "finding", points: 5, prompt: "What makes a finding professionally defensible?", sampleAnswer: "Declared population, metric, units, time, exact evidence, reproducible calculation, cautious interpretation, uncertainty, and limitation." },
      { id: "check-05-07-06", type: "visual", points: 5, prompt: "Give five requirements for a portfolio-quality figure.", sampleAnswer: "Decision relevance, honest encoding, title, labels and units, accessible color/shape, counts or denominators, annotation, source, and text summary; any five earn full credit." },
      { id: "check-05-07-07", type: "testing", points: 5, prompt: "List six automated acceptance tests for the notebook.", sampleAnswer: "Schema, dtype, key uniqueness, exact populations, cardinality, row balance, amount balance, expected metrics, flagged IDs, artifact existence, and manifest status; any six earn full credit." },
      { id: "check-05-07-08", type: "reproducibility", points: 5, prompt: "What must a reproducibility manifest contain?", sampleAnswer: "Status, data identity, configuration, environment versions, seeds, population counts, key metrics, artifacts, timestamps or version, and validation outcomes." },
      { id: "check-05-07-09", type: "portfolio", points: 5, prompt: "Give the six-part interview story for this project.", sampleAnswer: "Problem, method, controls, insight, action or value, and limitation." },
      { id: "check-05-07-10", type: "governance", points: 5, prompt: "Name four reasons a technically correct notebook should not be published publicly.", sampleAnswer: "Confidential or personal data, unclear license, security secrets, misleading claims, reidentification risk, uncontrolled production data, or missing authorization; any four earn full credit." },
    ],
  },

  researchExtension: {
    title: "Notebook Reliability and Analytical Trust Study",
    researchQuestion:
      "Which project controls most improve reviewer trust, defect detection, reproducibility, and maintainability in professional data-analysis notebooks?",
    applicationOptions: [
      "Manufacturing maintenance",
      "Financial performance",
      "Student-support analysis",
      "Healthcare operations",
      "Customer experience",
      "AI dataset and model monitoring",
    ],
    task:
      "Create two versions of the same analysis: an uncontrolled exploratory notebook and an audited project with contracts, functions, tests, manifests, and clean execution. Ask reviewers to identify defects, reproduce outputs, and rate decision confidence.",
    requiredEvidence: [
      "Identical decision question and source fixtures for both versions",
      "Injected field, duplicate, orphan, outlier, path, and hidden-state failures",
      "Reviewer defect-detection accuracy and time",
      "Reproduction success from a fresh environment",
      "Traceability from claims to exact records",
      "Maintainability and usability review",
      "Ethics, privacy, licensing, and security checklist",
      "Evidence-based recommendation for a minimum notebook quality standard",
    ],
  },

  portfolioArtifact: {
    title: "Module 5 Capstone Submission: Audited Data-Analysis Notebook",
    description:
      "Submit a complete professional repository or project folder demonstrating reliable Python and pandas analysis from source evidence to decision-ready outputs.",
    requiredSections: [
      "README with stakeholder, decision, project structure, setup, one-command run, outputs, findings, limitations, and next steps",
      "Project brief, analytical contract, data dictionary, source provenance, and privacy or license statement",
      "Raw-preservation, parsing, validation, duplicate, join, analysis, figure, and export code",
      "Notebook narrative with executive summary, methods, quality results, EDA, findings, recommendations, and limitations",
      "Clean, exception, KPI, evidence, figure, quality, and manifest artifacts",
      "Automated tests and documented restart-and-run-all or clean execution result",
      "Environment lock and reproducible data or synthetic-data generation instructions",
      "Two-minute interview narrative and portfolio screenshots free of confidential information",
    ],
    requiredEvidence: [
      "At least two source tables and one validated many-to-one join",
      "At least four intentional exception categories with exact IDs",
      "At least six KPIs with grains, denominators, units, and checks",
      "At least four accessible figures answering different analytical purposes",
      "At least one full-versus-sensitivity comparison",
      "Row and at least one additive-amount reconciliation",
      "At least fifteen automated assertions or equivalent tests",
      "PASS manifest generated from a clean reproducible run",
    ],
  },

  growthIndicators: [
    { title: "Analytical Product Owner", description: "You connect stakeholder decisions, scope, acceptance criteria, evidence, and next actions." },
    { title: "Data Quality Engineer", description: "You preserve raw data, enforce contracts, retain exceptions, and reconcile populations and totals." },
    { title: "Reproducible Analyst", description: "You deliver modular code, deterministic outputs, environment evidence, manifests, and clean execution." },
    { title: "Portfolio Communicator", description: "You present traceable findings, accessible figures, recommendations, uncertainty, and limitations with confidence." },
  ],

  reflection: [
    "Can a reviewer identify the exact decision your project supports in thirty seconds?",
    "Can every executive number be traced to a governed population and exact source records?",
    "Which source rows are not in the analysis table, and are all reasons visible?",
    "Which critical control would fail if a dimension key were duplicated?",
    "Which finding changes when the 58-minute incident is examined separately?",
    "Can every figure be understood by a color-blind reader and through a text summary?",
    "Does the project run from a fresh directory without editing paths?",
    "Does the manifest prove all expected artifacts and tests passed?",
    "Does the repository contain any private data, credentials, or unclear-license material?",
    "Can you explain the project as problem, method, control, insight, value, and limitation?",
  ],

  summary: [
    "A portfolio analysis is an evidence product, not merely a notebook containing code and charts.",
    "Begin with a stakeholder decision, bounded questions, deliverables, risks, and observable acceptance criteria.",
    "Declare population, grain, keys, time, units, eligibility, exclusions, and metric definitions before transformation.",
    "Preserve raw identifiers and values while producing typed clean, duplicate, orphan, and invalid populations.",
    "Use explicit reason codes and publish exception tables as first-class governance outputs.",
    "Validate join cardinality and reconcile both row counts and additive measures.",
    "Use named, testable functions for parsing, validation, integration, analysis, and export.",
    "Report robust statistics, group KPIs, exact unusual records, and sensitivity evidence.",
    "Choose accessible figures based on analytical purpose and connect every chart to a decision-relevant sentence.",
    "Separate finding, interpretation, recommendation, uncertainty, and limitation.",
    "Use relative paths, centralized configuration, locked dependencies, seeds, data versions, and output manifests.",
    "Restart-and-run-all or one-command execution must regenerate every validated artifact without manual intervention.",
    "Critical failures in population balance, keys, reconciliation, privacy, or reproducibility cannot be averaged away by rubric points.",
    "A strong interview narrative explains problem, method, controls, insight, value, and limitation.",
    "The audited notebook provides a trustworthy foundation for later Power BI, Microsoft Fabric, data engineering, or AI work.",
  ],

  previousLesson: {
    id: "data-ai-m05-l06",
    moduleNumber: 5,
    slug: "exploratory-analysis-visualization-and-reproducibility",
    title: "Exploratory Analysis, Visualization, and Reproducibility",
  },
  nextLesson: null,

  lumineryGuidance: {
    message:
      "Build the capstone as a verified evidence system: frame the decision, preserve every record, test every transformation, and regenerate every artifact.",
    prompt:
      "Act as my senior analytics portfolio reviewer, data-quality engineer, and research mentor. Help me complete Module 5 Lesson 7 one verified gate at a time. Require a project brief, analytical contract, data dictionary, privacy and provenance statement, raw preservation, intentional dtypes, exact validation and exception IDs, duplicate survivor logic, validated join cardinality, row and amount reconciliation, robust EDA, accessible figures, sensitivity analysis, traceable findings, cautious recommendations, limitations, modular code, automated tests, environment lock, output manifest, clean rerun, README, and interview narrative. Do not let me hide rejected rows, polish before controls pass, delete unusual values to improve the story, publish confidential data, depend on hidden notebook state, or claim completion until every critical acceptance test passes.",
    coachingQuestions: [
      "What decision and stakeholder define success?",
      "What is the grain, key, population, and time contract?",
      "Which source rows reach analysis and each exception outcome?",
      "Which row and amount equations prove reconciliation?",
      "Which finding is supported by which exact table and figure?",
      "Which result changes under sensitivity analysis?",
      "What uncertainty or limitation constrains the recommendation?",
      "Can a clean run regenerate every artifact and PASS manifest?",
      "Can you present the project as problem, method, control, insight, value, and limitation?",
    ],
  },
};

export default lesson07;
