const lesson03 = {
  id: "data-ai-m07-l03",
  courseId: "data-ai-foundations",
  moduleId: "data-ai-foundations-module-07",
  moduleNumber: 7,
  lessonNumber: 3,
  slug: "bronze-silver-and-gold-medallion-architecture",
  title: "Bronze, Silver, and Gold Medallion Architecture",
  shortTitle: "Bronze, Silver, and Gold Medallion Architecture",
  subtitle:
    "Turn source-aligned data into reusable, certified analytical products through explicit layer contracts, quality gates, quarantine, reconciliation, lineage, and safe reruns in Microsoft Fabric.",
  status: "available",
  duration: "6–8 hours",
  level: "Beginner to Professional",

  essentialQuestion:
    "How can data move from raw source evidence to trusted business decisions without losing meaning, lineage, recoverability, or accountability?",
  bigIdea:
    "Medallion architecture is a sequence of trust contracts: Bronze preserves source evidence, Silver creates clean and conformed reusable entities, and Gold publishes certified decision-ready products. A layer is defined by its guarantees and consumers—not by its color, folder name, or number of transformations.",

  whyThisLessonExists: {
    title: "Quality Must Increase Deliberately, Not Accidentally",
    introduction:
      "Raw data usually contains duplicates, missing values, inconsistent types, late records, invalid codes, sensitive fields, and source-specific meanings. Sending it directly to dashboards or AI models spreads those defects into every decision.",
    centralProblem:
      "A manufacturing company receives maintenance CSV files, robot telemetry, asset master data, and finance costs. Different teams clean the same inputs differently, producing conflicting downtime totals. Failed records disappear, corrected records cannot be replayed, and executives cannot trace Gold measures back to their source evidence.",
    purpose:
      "This lesson establishes Bronze, Silver, and Gold contracts; source preservation; conformance; deduplication; quarantine; slowly changing dimensions; late-data handling; dimensional serving; validation; reconciliation; lineage; security; cost; and a tested Python medallion pipeline.",
  },

  problemFirst: {
    title: "Opening Investigation: Three Answers to One Downtime Question",
    scenario:
      "Operations reports 52 downtime minutes, Finance reports 47, and a data scientist reports 57. The same source file contains a duplicate work order, a negative duration, one missing asset, and a corrected record that arrived the next day. No team preserved a shared raw copy or rejection log.",
    questions: [
      "What exact source population should Bronze preserve?",
      "Which technical metadata makes every record traceable?",
      "Which defects should Silver correct, reject, quarantine, or escalate?",
      "How should duplicate and corrected versions be resolved?",
      "Which Silver entities should be reusable across BI and AI?",
      "What business grain, dimensions, measures, and certification belong in Gold?",
      "How will Bronze, Silver, quarantine, and Gold row counts reconcile?",
      "What evidence proves that a rerun produces the same trusted result?",
    ],
    expectedInsight:
      "Medallion architecture separates evidence, reusable truth, and business serving so quality decisions are visible, testable, recoverable, and owned.",
  },

  visualModels: [
    {
      id: "medallion-trust-flow",
      type: "lifecycle",
      title: "Medallion Trust Flow — Evidence to Decision",
      description:
        "Each transition raises trust through declared transformations and tests while preserving lineage to the source.",
      stages: [
        { label: "1. Sources", detail: "Databases, APIs, files, devices, images, and events remain authoritative under source-owner contracts." },
        { label: "2. Bronze", detail: "Preserve source-aligned records and files with ingestion metadata, immutable evidence, classification, access, and retention." },
        { label: "3. Silver", detail: "Type, standardize, validate, deduplicate, conform, resolve versions, protect sensitive fields, and quarantine exceptions." },
        { label: "4. Gold", detail: "Publish certified facts, dimensions, aggregates, features, and business rules at a declared consumer grain." },
        { label: "5. Serve", detail: "Support semantic models, reports, alerts, APIs, data science, and AI from approved Gold or reusable Silver products." },
        { label: "6. Observe", detail: "Monitor lineage, counts, quality, freshness, latency, failures, drift, cost, usage, and downstream impact." },
      ],
      feedback:
        "Do not erase Bronze after Silver succeeds unless an approved retention rule permits it; replay and audit depend on preserved source evidence.",
      interpretation:
        "Trust grows through explicit gates, while traceability flows backward from every decision to its source.",
    },
    {
      id: "layer-contracts",
      type: "comparison",
      title: "Bronze, Silver, and Gold Layer Contracts",
      description:
        "Name each layer by the guarantee it provides and the consumer it serves.",
      items: [
        { label: "Bronze — Raw", symbol: "Source fidelity + ingestion metadata", meaning: "Preserves what arrived, when, from where, under which batch or event identity. It supports replay, audit, profiling, and source comparison; it is not certified for business reporting." },
        { label: "Silver — Enriched", symbol: "Clean + typed + conformed", meaning: "Provides reusable entities and events with stable keys, standardized meaning, duplicate and version rules, quality evidence, protected fields, and known exceptions." },
        { label: "Gold — Curated", symbol: "Business grain + certified logic", meaning: "Provides decision-ready facts, dimensions, aggregates, semantic inputs, and features with named owners, consumers, service levels, reconciliation, and change control." },
        { label: "Quarantine — Exception", symbol: "Rejected row + reason + owner", meaning: "Preserves invalid or ambiguous records outside trusted outputs so they can be investigated, corrected, replayed, measured, and reconciled rather than silently deleted." },
      ],
    },
    {
      id: "quality-gate-flow",
      type: "lifecycle",
      title: "Silver Quality Gate and Quarantine Workflow",
      description:
        "Quality rules classify outcomes instead of hiding failure inside a cleaning script.",
      stages: [
        { label: "1. Profile Bronze", detail: "Measure schema, nulls, ranges, codes, duplicates, versions, timestamps, volumes, and drift before changing records." },
        { label: "2. Validate", detail: "Apply declared schema, required-field, key, range, referential, privacy, and timeliness rules." },
        { label: "3. Classify", detail: "Separate valid, correctable, duplicate, late, suspicious, and invalid records with stable reason codes." },
        { label: "4. Conform Silver", detail: "Standardize valid records and apply deterministic keys, versions, units, time zones, codes, and entity matching." },
        { label: "5. Quarantine", detail: "Preserve rejected source identity, payload, rule, reason, batch, severity, owner, and correction status." },
        { label: "6. Correct and replay", detail: "Repair source or approved mappings, replay the same evidence, and prove downstream reconciliation without duplication." },
      ],
      feedback:
        "A failed record is still part of the source population; reconciliation must account for it even when it is excluded from Silver.",
      interpretation:
        "Quarantine converts silent loss into measurable operational work.",
    },
    {
      id: "gold-serving-flow",
      type: "lifecycle",
      title: "Gold Product — From Conformed Events to Business Action",
      description:
        "Gold begins with a decision and consumer, then defines grain, dimensions, measures, certification, and serving behavior.",
      stages: [
        { label: "1. Decision", detail: "Name the business question, consumer, action, latency, and consequence of error." },
        { label: "2. Grain", detail: "Declare exactly what one Gold row represents before choosing measures or joins." },
        { label: "3. Model", detail: "Build facts, dimensions, aggregates, or features from reusable Silver contracts." },
        { label: "4. Calculate", detail: "Centralize approved definitions for downtime, reliability, cost, quality, utilization, and targets." },
        { label: "5. Certify", detail: "Pass reconciliation, quality, privacy, freshness, performance, security, and owner approval gates." },
        { label: "6. Serve and monitor", detail: "Expose the product to approved engines and monitor usage, drift, latency, failures, and decision impact." },
      ],
      feedback:
        "Gold is not simply an aggregate table; it is a supported business product with a stable contract.",
      interpretation:
        "A Gold product is successful when consumers can act correctly and trace the result back to governed evidence.",
    },
    {
      id: "layer-row-reconciliation",
      type: "barChart",
      title: "Illustrative Medallion Run — Row Disposition",
      description:
        "A valid run explains every Bronze record through accepted, duplicate, or quarantined outcomes. These values are instructional, not performance benchmarks.",
      ariaLabel:
        "Horizontal bar graph showing eight Bronze rows, five Silver accepted rows, one duplicate row, two quarantine rows, and three Gold plant summaries.",
      unit: "rows",
      max: 8,
      items: [
        { label: "Bronze received", value: 8, note: "Complete source population preserved with ingestion identity." },
        { label: "Silver accepted", value: 5, note: "Valid, typed, unique, and conformed work orders." },
        { label: "Duplicate", value: 1, note: "Accounted for by a deterministic duplicate rule." },
        { label: "Quarantine", value: 2, note: "Negative downtime and missing asset require correction." },
        { label: "Gold plant summaries", value: 3, note: "One certified aggregate row per plant represented in Silver." },
      ],
      interpretation:
        "The Bronze population reconciles because 8 received = 5 accepted + 1 duplicate + 2 quarantined. Gold has a different grain, so its three rows reconcile through measures rather than row equality.",
    },
  ],

  representationModel: {
    title: "Trust Score by Medallion Layer — Table and Line Graph",
    description:
      "An illustrative composite score shows increasing usability as schema, quality, conformity, certification, and documentation controls are added. Organizations must define and validate their own score.",
    equation: "trust score = weighted completeness + validity + uniqueness + conformity + certification",
    columns: [
      { key: "stage", label: "Layer Number" },
      { key: "score", label: "Illustrative Trust Score" },
    ],
    rows: [
      { stage: 1, score: 42 },
      { stage: 2, score: 86 },
      { stage: 3, score: 98 },
    ],
    xKey: "stage",
    yKey: "score",
    xLabel: "1 Bronze · 2 Silver · 3 Gold",
    yLabel: "Trust score",
    highlightPoint: { x: 3, y: 98 },
  },

  learningObjectives: [
    "Explain medallion architecture as progressive quality and trust contracts.",
    "Define Bronze, Silver, Gold, and quarantine responsibilities precisely.",
    "Preserve source fidelity while adding ingestion metadata and security in Bronze.",
    "Distinguish immutable evidence from corrected or standardized analytical data.",
    "Profile Bronze data before transformation and record baseline quality evidence.",
    "Create deterministic Silver typing, validation, deduplication, version, and conformance rules.",
    "Design quarantine with reason codes, ownership, correction, replay, and reconciliation.",
    "Handle late-arriving facts, corrected records, deletions, and schema drift.",
    "Create stable business and surrogate keys for reusable Silver entities.",
    "Design Gold facts, dimensions, aggregates, features, and semantic inputs from declared grain.",
    "Separate reusable Silver truth from consumer-specific Gold business logic.",
    "Reconcile rows, keys, amounts, and measures across every layer transition.",
    "Apply idempotent writes, watermarks, checkpoints, atomic publication, and rerun tests.",
    "Design layer-specific security, privacy, retention, and access controls.",
    "Measure acceptance, rejection, duplicate, completeness, freshness, and reconciliation rates.",
    "Implement medallion layers in Fabric using Lakehouse, Warehouse, or a justified hybrid.",
    "Build and test a Python Bronze-to-Silver-to-Gold evidence pipeline.",
    "Create a portfolio-ready architecture, contract set, runbook, and validation pack.",
  ],

  prerequisiteKnowledge: [
    "Module 3: relational tables, keys, joins, constraints, dimensional models, and transactions",
    "Module 4: ingestion, schema, profiling, cleaning, missingness, outliers, validation, and reconciliation",
    "Module 5: Python, pandas, functions, files, exceptions, testing, and reproducibility",
    "Module 6: semantic models, measures, security, report validation, and executive decision systems",
    "Module 7 Lessons 1–2: ETL/ELT, orchestration, Lakehouse, Warehouse, OneLake, Delta tables, and shortcuts",
  ],

  vocabulary: [
    { term: "Medallion architecture", definition: "A design pattern that progressively improves data structure, quality, and trust through Bronze, Silver, and Gold layers." },
    { term: "Bronze layer", definition: "The source-aligned layer preserving raw records or files plus technical ingestion metadata for replay, audit, and profiling." },
    { term: "Silver layer", definition: "The validated, typed, standardized, deduplicated, conformed, and reusable layer for trusted entities and events." },
    { term: "Gold layer", definition: "The certified, business-ready layer containing facts, dimensions, aggregates, features, or semantic inputs for declared consumers." },
    { term: "Quarantine", definition: "A governed exception location preserving rejected records, rule failures, reasons, owners, and correction status." },
    { term: "Source fidelity", definition: "The degree to which Bronze preserves the content and context delivered by the source without silent business alteration." },
    { term: "Immutable", definition: "Not changed in place after publication; corrections arrive as new evidence or versions under controlled rules." },
    { term: "Ingestion metadata", definition: "Technical context such as source, file path, batch ID, event ID, arrival time, checksum, schema version, and pipeline version." },
    { term: "Schema", definition: "The expected fields, types, structure, nullability, constraints, and meaning of a dataset." },
    { term: "Schema drift", definition: "A source change to fields, types, nesting, or constraints that differs from the approved contract." },
    { term: "Schema evolution", definition: "A controlled and versioned process for accepting, mapping, communicating, and testing a schema change." },
    { term: "Data profiling", definition: "Measuring distributions, nulls, types, codes, ranges, keys, duplicates, patterns, and anomalies before transformation." },
    { term: "Quality rule", definition: "A measurable condition that classifies data as valid, correctable, duplicate, suspicious, late, or invalid." },
    { term: "Reason code", definition: "A stable identifier explaining why a record was corrected, excluded, quarantined, or otherwise classified." },
    { term: "Conformance", definition: "Standardizing shared entities, units, codes, time zones, keys, and meanings across sources." },
    { term: "Canonical model", definition: "A consistent reusable representation into which source-specific records are mapped." },
    { term: "Business key", definition: "A source or domain identifier that uniquely represents a real-world entity under declared rules." },
    { term: "Surrogate key", definition: "A generated stable identifier used by analytical models independently of changing source identifiers." },
    { term: "Deduplication", definition: "Deterministically resolving repeated representations of the same business event or entity." },
    { term: "Record version", definition: "A source or derived ordering value used to select the correct state of an entity or event." },
    { term: "Late-arriving data", definition: "A record whose business time belongs to an earlier period but arrives after the expected processing window." },
    { term: "Late-arriving dimension", definition: "A fact that arrives before the corresponding dimension record needed for analytical interpretation." },
    { term: "Slowly changing dimension", definition: "A method for preserving or updating changes to descriptive entity attributes across time." },
    { term: "Type 1 dimension", definition: "A dimension strategy that overwrites an earlier attribute value without preserving history." },
    { term: "Type 2 dimension", definition: "A dimension strategy that creates dated versions so historical attribute values remain available." },
    { term: "Fact table", definition: "A table of measurable events at a declared grain, linked to descriptive dimensions." },
    { term: "Dimension table", definition: "A table of descriptive attributes used to filter, group, and interpret facts." },
    { term: "Grain", definition: "The precise business meaning of one row in a table." },
    { term: "Aggregate", definition: "A summarized measure computed at a higher-level grain for performance or a defined decision." },
    { term: "Data product", definition: "An owned, discoverable, documented, tested, supported data output designed for named consumers and actions." },
    { term: "Data contract", definition: "An agreement covering schema, grain, keys, meaning, quality, freshness, change, access, ownership, and support." },
    { term: "Quality gate", definition: "A pass/fail control that blocks promotion when declared data requirements are not met." },
    { term: "Reconciliation", definition: "Accounting for source population, exclusions, transformations, counts, keys, and amounts across layers." },
    { term: "Lineage", definition: "Traceable relationships from sources through transformations, layers, versions, and consumers." },
    { term: "Idempotence", definition: "The property that rerunning the same inputs and rules produces the same trusted target state." },
    { term: "Watermark", definition: "A committed source progress value used to bound incremental processing." },
    { term: "Checkpoint", definition: "Durable processing state used to resume safely after interruption." },
    { term: "Atomic publication", definition: "Making a complete validated target version visible as one controlled outcome rather than exposing partial writes." },
    { term: "Replay", definition: "Reprocessing preserved source evidence through a declared version of transformation logic." },
    { term: "Certification", definition: "Owner-approved confirmation that a data product meets quality, security, freshness, reconciliation, and support requirements." },
    { term: "Materialized lake view", definition: "A Fabric-managed Delta result defined by a transformation query and refreshed from its lineage dependencies." },
    { term: "Data quality constraint", definition: "A declared condition used to identify or prevent data that violates an expected rule." },
    { term: "Promotion", definition: "Controlled movement or publication of data from one trust contract to the next after required gates pass." },
    { term: "Data observability", definition: "Understanding data health through metrics, logs, lineage, quality, freshness, volume, schema, and consumer impact." },
  ],

  formulas: [
    { id: "acceptance-rate", name: "Silver acceptance rate", formula: "acceptance rate = accepted Silver records ÷ Bronze received records × 100%", meaning: "Measures the share of the source population promoted to Silver.", requirement: "Report duplicates and quarantined records separately; do not hide them in the denominator." },
    { id: "rejection-rate", name: "Quarantine rate", formula: "quarantine rate = quarantined records ÷ Bronze received records × 100%", meaning: "Measures the share requiring correction or investigation.", requirement: "Break the rate down by rule, source, severity, owner, and time." },
    { id: "duplicate-rate", name: "Duplicate rate", formula: "duplicate rate = duplicate records ÷ Bronze received records × 100%", meaning: "Quantifies repeated records under a declared business key and version rule.", requirement: "Distinguish exact transport repeats from legitimate new versions." },
    { id: "population-reconciliation", name: "Population reconciliation", formula: "Bronze received = Silver accepted + duplicates + quarantined + approved exclusions", meaning: "Accounts for every source record disposition.", requirement: "Any unexplained difference blocks promotion." },
    { id: "measure-reconciliation", name: "Measure reconciliation variance", formula: "variance = Gold measure − approved Silver-derived measure", meaning: "Tests whether Gold business logic preserves the expected quantity.", requirement: "Define rounding, currency, unit, timing, and exclusion rules before comparing." },
    { id: "completeness", name: "Required-field completeness", formula: "completeness = records with all required fields ÷ eligible records × 100%", meaning: "Measures population readiness for a declared contract.", requirement: "Required fields depend on the table grain and consumer purpose." },
    { id: "uniqueness", name: "Key uniqueness rate", formula: "uniqueness = distinct valid keys ÷ accepted records × 100%", meaning: "Shows whether the target key uniquely identifies accepted rows.", requirement: "A 100% result is expected only when the grain requires one row per key." },
    { id: "freshness", name: "Layer freshness lag", formula: "freshness lag = current time − maximum trusted business timestamp", meaning: "Measures how far a layer trails the latest trusted source event.", requirement: "Track Bronze arrival, Silver trust, and Gold publication separately." },
    { id: "quality-score", name: "Composite quality score", formula: "score = Σ(weightᵢ × normalized metricᵢ)", meaning: "Combines approved quality dimensions for monitoring or comparison.", requirement: "Publish weights, thresholds, metric definitions, and limitations; never let a high average hide a critical failure." },
    { id: "rerun-delta", name: "Idempotent rerun delta", formula: "rerun delta = trusted state after rerun − trusted state before rerun", meaning: "Tests whether replaying unchanged inputs changes the trusted result.", requirement: "For an idempotent no-change rerun, row, key, measure, and checksum deltas should be zero." },
  ],

  workedExamples: [
    {
      id: "example-07-03-01",
      title: "Design a Bronze contract",
      problem: "Maintenance CSV files can be resent, renamed, or corrected after delivery.",
      solutionSteps: ["Preserve the delivered file or source-aligned rows.", "Add source system, path, checksum, batch ID, ingestion time, schema version, and pipeline version.", "Restrict access and set retention by classification.", "Treat corrections as new evidence rather than silent overwrites."],
      answer: "Bronze preserves source fidelity and technical identity so any downstream state can be replayed and audited.",
      interpretation: "Bronze is controlled evidence, not an unowned dumping ground.",
    },
    {
      id: "example-07-03-02",
      title: "Create deterministic Silver deduplication",
      problem: "Work order WO-103 appears twice with the same version and payload.",
      solutionSteps: ["Define work_order_id plus source version as the logical identity.", "Order repeated transport records by stable ingestion metadata.", "Keep one canonical record and classify the other as an exact duplicate.", "Reconcile the duplicate count to Bronze."],
      answer: "Promote one WO-103 record to Silver and record one duplicate disposition.",
      interpretation: "Deduplication must be explainable and repeatable, not dependent on arbitrary row order.",
    },
    {
      id: "example-07-03-03",
      title: "Quarantine an invalid measure",
      problem: "A closed work order contains downtime_min = -5.",
      solutionSteps: ["Fail the nonnegative-duration rule.", "Preserve the source payload, key, batch, rule ID, reason code, and severity.", "Exclude it from trusted Silver measures.", "Assign correction ownership and replay after the source or approved mapping is fixed."],
      answer: "Quarantine the record as NEGATIVE_DOWNTIME; do not replace it with zero without an approved business rule.",
      interpretation: "Automatic correction can invent facts; ambiguous values require accountable resolution.",
    },
    {
      id: "example-07-03-04",
      title: "Conform two plant-code systems",
      problem: "ERP uses plant 01 while maintenance uses A for the same facility.",
      solutionSteps: ["Create an owned reference mapping with effective dates.", "Map both source codes to one canonical plant key.", "Quarantine unmapped or overlapping effective-date cases.", "Version and test the mapping as shared Silver logic."],
      answer: "Publish one conformed plant entity and retain original source codes for lineage.",
      interpretation: "Silver removes source-specific ambiguity so teams stop rebuilding conflicting mappings.",
    },
    {
      id: "example-07-03-05",
      title: "Handle a late-arriving dimension",
      problem: "A work order references a new robot before the asset master record arrives.",
      solutionSteps: ["Preserve the fact and missing reference evidence.", "Use an approved unknown-member or suspense rule if the consumer permits provisional loading.", "Update the fact relationship when the dimension arrives.", "Recompute affected Gold products and record the correction."],
      answer: "Use an explicit late-dimension policy rather than dropping the fact or inventing asset attributes.",
      interpretation: "Temporal incompleteness is an operating condition, not an excuse for silent data loss.",
    },
    {
      id: "example-07-03-06",
      title: "Define a Gold grain",
      problem: "Executives need downtime by plant and day, while engineers need individual work orders.",
      solutionSteps: ["Keep reusable work-order events in Silver.", "Define Gold row grain as one plant per calendar date.", "Aggregate approved downtime and work-order counts.", "Link certified date and plant dimensions and publish measure definitions."],
      answer: "Create a Gold daily_plant_reliability fact at plant-date grain while retaining detailed Silver events.",
      interpretation: "Gold can change grain for a decision; Silver protects reusable detail.",
    },
    {
      id: "example-07-03-07",
      title: "Reconcile layer populations and measures",
      problem: "Bronze has 8 rows; Silver has 5; Gold has 3, and stakeholders suspect data loss.",
      solutionSteps: ["Prove 8 = 5 accepted + 1 duplicate + 2 quarantined.", "Recognize Gold uses plant-summary grain, so row counts should differ.", "Recompute Gold total downtime directly from accepted Silver rows.", "Require zero measure variance before certification."],
      answer: "Population reconciliation explains Silver disposition; measure reconciliation proves Gold totals.",
      interpretation: "Reconciliation follows the contract and grain, not a simplistic expectation that every layer has equal rows.",
    },
    {
      id: "example-07-03-08",
      title: "Prove an idempotent medallion rerun",
      problem: "The pipeline is rerun after a notification failure, but Bronze inputs and transformation versions are unchanged.",
      solutionSteps: ["Read the same bounded Bronze population.", "Use deterministic keys, versions, transformations, and upserts.", "Compare Silver and Gold row counts, keys, totals, and checksums before and after.", "Commit no new watermark or publication version when nothing changed."],
      answer: "The rerun passes when trusted-state deltas are zero and the operational log explains the no-change outcome.",
      interpretation: "Safe reruns are a designed property of every layer transition.",
    },
  ],

  interactiveExploration: {
    title: "Medallion Design Studio: Define Every Trust Boundary",
    purpose:
      "Create Bronze, Silver, Gold, and quarantine contracts for the manufacturing scenario, then prove promotion and replay behavior.",
    instructions: [
      "Name the business decision, consumers, actions, latency, and consequences of error.",
      "Inventory sources by grain, keys, schema, versions, deletions, lateness, privacy, owner, and expected volume.",
      "Define Bronze fidelity, technical metadata, immutability, access, partitioning, and retention.",
      "Profile a representative Bronze population and establish baseline quality metrics.",
      "Define Silver schema, keys, conformance, deduplication, correction, late-data, and sensitive-field rules.",
      "Design quarantine reason codes, severities, owners, service levels, correction evidence, and replay.",
      "Define Gold consumer, grain, facts, dimensions, aggregates, measures, certification, and serving mode.",
      "Write population, key, amount, privacy, freshness, lineage, performance, and rerun tests.",
      "Create operational evidence for counts, checksums, rule results, versions, publication, alerts, and rollback.",
    ],
    investigationQuestions: [
      "Which Bronze fields are source facts and which are ingestion metadata?",
      "Which correction rules are deterministic and which require human ownership?",
      "How are deletes, versions, late facts, and late dimensions represented?",
      "What Silver entities should be shared across BI, data science, and AI?",
      "What does one Gold row mean, and which action uses it?",
      "Which failed gate blocks promotion immediately?",
      "How will every Bronze record be accounted for after the run?",
      "What proves replay did not duplicate or corrupt trusted outputs?",
    ],
    expectedDiscovery:
      "Medallion architecture creates value when every layer has a measurable contract, not when teams merely rename folders Bronze, Silver, and Gold.",
  },

  realWorldApplications: [
    { field: "Manufacturing and Robotics", application: "Preserve telemetry and work orders in Bronze, conform assets and events in Silver, and publish certified plant reliability, quality, and maintenance-cost products in Gold." },
    { field: "Education", application: "Preserve enrollment and learning events, conform students and courses under privacy controls, and publish intervention or program-effectiveness products." },
    { field: "Retail", application: "Preserve transactions and clickstream, conform customers and products, and publish inventory, margin, promotion, and customer-performance products." },
    { field: "Healthcare", application: "Preserve clinical and device evidence, validate and conform patients and encounters, and publish tightly governed care-quality products." },
    { field: "Finance", application: "Preserve ledger and transaction evidence, reconcile and conform accounts, and publish certified risk, regulatory, and profitability outputs." },
    { field: "AI Systems", application: "Preserve prompts, documents, labels, outputs, and telemetry; create validated reusable training or evaluation sets; publish certified features and model-monitoring products." },
  ],

  aiConnection: {
    title: "AI Can Suggest Transformations, but It Cannot Certify Truth",
    explanation:
      "AI can profile data, propose mappings, draft validation rules, classify exceptions, generate transformation code, and summarize quality trends. Accountable owners must approve meaning, corrections, privacy, materiality, certification, and downstream use.",
    uses: [
      "Draft Bronze metadata schemas and source inventory documentation.",
      "Suggest Silver type, standardization, duplicate, and conformance rules from approved examples.",
      "Cluster quarantine reasons to identify recurring source defects for human review.",
      "Generate Gold dimensional-model alternatives from an approved decision and grain.",
      "Draft reconciliation and idempotence tests from verified contracts and known results.",
    ],
    caution:
      "Never permit AI to silently impute ambiguous business facts, merge identities, remove exceptions, expose sensitive Bronze data, change certification thresholds, or promote a layer without deterministic tests and accountable approval.",
    reflectionQuestion:
      "Which transformations can be automated safely, and which require source owners, data stewards, privacy reviewers, finance, or business consumers to approve the meaning?",
  },

  pythonLab: {
    title: "Python Lab — Build and Prove a Bronze-to-Silver-to-Gold Pipeline",
    description:
      "Preserve eight source-aligned Bronze work orders, classify duplicates and invalid records, create five trusted Silver events, publish three Gold plant summaries, reconcile every row and measure, and generate checksummed evidence artifacts.",
    code: `from pathlib import Path
import hashlib
import json
import pandas as pd

output_dir = Path("medallion_architecture_lesson_output")
output_dir.mkdir(exist_ok=True)

bronze = pd.DataFrame([
    {"source_row_id": "R-001", "work_order_id": "WO-101", "plant": "A", "asset_id": "RB-01", "downtime_min": 12, "status": "Closed", "source_version": 1},
    {"source_row_id": "R-002", "work_order_id": "WO-102", "plant": "A", "asset_id": "RB-02", "downtime_min": 8, "status": "Open", "source_version": 1},
    {"source_row_id": "R-003", "work_order_id": "WO-103", "plant": "B", "asset_id": "RB-07", "downtime_min": 20, "status": "Closed", "source_version": 1},
    {"source_row_id": "R-004", "work_order_id": "WO-103", "plant": "B", "asset_id": "RB-07", "downtime_min": 20, "status": "Closed", "source_version": 1},
    {"source_row_id": "R-005", "work_order_id": "WO-104", "plant": "C", "asset_id": "RB-09", "downtime_min": -5, "status": "Closed", "source_version": 1},
    {"source_row_id": "R-006", "work_order_id": "WO-105", "plant": "C", "asset_id": None, "downtime_min": 4, "status": "Closed", "source_version": 1},
    {"source_row_id": "R-007", "work_order_id": "WO-106", "plant": "C", "asset_id": "RB-11", "downtime_min": 6, "status": "Closed", "source_version": 1},
    {"source_row_id": "R-008", "work_order_id": "WO-107", "plant": "A", "asset_id": "RB-03", "downtime_min": 14, "status": "Closed", "source_version": 1},
])
bronze["source_system"] = "maintenance_csv"
bronze["batch_id"] = "BATCH-2026-10-08"
bronze["ingested_at_utc"] = "2026-10-08T14:00:00Z"

assert len(bronze) == 8
assert bronze["source_row_id"].is_unique
assert bronze[["source_system", "batch_id", "ingested_at_utc"]].notna().all().all()

duplicate_mask = bronze.duplicated(
    subset=["work_order_id", "source_version"], keep="first"
)
duplicates = bronze.loc[duplicate_mask].copy()
duplicates["disposition"] = "DUPLICATE"
duplicates["reason_code"] = "REPEATED_KEY_VERSION"

candidates = bronze.loc[~duplicate_mask].copy()
invalid_downtime = candidates["downtime_min"].lt(0)
missing_asset = candidates["asset_id"].isna()
invalid_mask = invalid_downtime | missing_asset

quarantine = candidates.loc[invalid_mask].copy()
quarantine["disposition"] = "QUARANTINE"
quarantine["reason_code"] = ""
quarantine.loc[invalid_downtime, "reason_code"] = "NEGATIVE_DOWNTIME"
quarantine.loc[missing_asset, "reason_code"] = "MISSING_ASSET"

silver = candidates.loc[~invalid_mask].copy()
silver["downtime_min"] = silver["downtime_min"].astype("int64")
silver["status"] = silver["status"].str.upper()
silver["silver_key"] = silver["work_order_id"] + "-V" + silver["source_version"].astype(str)

assert len(duplicates) == 1
assert len(quarantine) == 2
assert len(silver) == 5
assert silver["silver_key"].is_unique
assert silver["asset_id"].notna().all()
assert silver["downtime_min"].ge(0).all()
assert set(quarantine["reason_code"]) == {"NEGATIVE_DOWNTIME", "MISSING_ASSET"}

assert len(bronze) == len(silver) + len(duplicates) + len(quarantine)

gold = (
    silver.groupby("plant", as_index=False)
    .agg(
        work_orders=("work_order_id", "nunique"),
        downtime_min=("downtime_min", "sum"),
        closed_work_orders=("status", lambda s: int((s == "CLOSED").sum())),
    )
    .sort_values("plant")
    .reset_index(drop=True)
)
gold["avg_downtime_min"] = (gold["downtime_min"] / gold["work_orders"]).round(2)

assert len(gold) == 3
assert int(gold["work_orders"].sum()) == 5
assert int(gold["downtime_min"].sum()) == int(silver["downtime_min"].sum()) == 60
assert dict(zip(gold["plant"], gold["downtime_min"])) == {"A": 34, "B": 20, "C": 6}

def frame_checksum(frame, sort_columns):
    stable = frame.sort_values(sort_columns).to_csv(index=False)
    return hashlib.sha256(stable.encode("utf-8")).hexdigest()

silver_checksum_before = frame_checksum(silver, ["silver_key"])
gold_checksum_before = frame_checksum(gold, ["plant"])

# Deterministic rerun of the same Bronze population.
rerun_candidates = bronze.loc[~bronze.duplicated(subset=["work_order_id", "source_version"], keep="first")].copy()
rerun_valid = rerun_candidates.loc[
    rerun_candidates["downtime_min"].ge(0) & rerun_candidates["asset_id"].notna()
].copy()
rerun_valid["downtime_min"] = rerun_valid["downtime_min"].astype("int64")
rerun_valid["status"] = rerun_valid["status"].str.upper()
rerun_valid["silver_key"] = rerun_valid["work_order_id"] + "-V" + rerun_valid["source_version"].astype(str)
rerun_gold = (
    rerun_valid.groupby("plant", as_index=False)
    .agg(
        work_orders=("work_order_id", "nunique"),
        downtime_min=("downtime_min", "sum"),
        closed_work_orders=("status", lambda s: int((s == "CLOSED").sum())),
    )
    .sort_values("plant")
    .reset_index(drop=True)
)
rerun_gold["avg_downtime_min"] = (rerun_gold["downtime_min"] / rerun_gold["work_orders"]).round(2)

assert frame_checksum(rerun_valid, ["silver_key"]) == silver_checksum_before
assert frame_checksum(rerun_gold, ["plant"]) == gold_checksum_before

bronze_path = output_dir / "bronze_work_orders.csv"
silver_path = output_dir / "silver_work_orders.csv"
quarantine_path = output_dir / "quarantine_records.csv"
duplicates_path = output_dir / "duplicate_records.csv"
gold_path = output_dir / "gold_plant_reliability.csv"
manifest_path = output_dir / "medallion_manifest.json"

bronze.to_csv(bronze_path, index=False)
silver.to_csv(silver_path, index=False)
quarantine.to_csv(quarantine_path, index=False)
duplicates.to_csv(duplicates_path, index=False)
gold.to_csv(gold_path, index=False)

manifest = {
    "pipeline": "manufacturing_medallion_pipeline",
    "status": "PASS",
    "batch_id": "BATCH-2026-10-08",
    "bronze_rows": int(len(bronze)),
    "silver_rows": int(len(silver)),
    "duplicate_rows": int(len(duplicates)),
    "quarantine_rows": int(len(quarantine)),
    "gold_rows": int(len(gold)),
    "silver_downtime_min": int(silver["downtime_min"].sum()),
    "gold_downtime_min": int(gold["downtime_min"].sum()),
    "population_reconciled": len(bronze) == len(silver) + len(duplicates) + len(quarantine),
    "measure_reconciled": int(silver["downtime_min"].sum()) == int(gold["downtime_min"].sum()),
    "idempotent_rerun_passed": True,
    "silver_sha256": silver_checksum_before,
    "gold_sha256": gold_checksum_before,
    "artifacts": [bronze_path.name, silver_path.name, quarantine_path.name, duplicates_path.name, gold_path.name],
}
manifest_path.write_text(json.dumps(manifest, indent=2), encoding="utf-8")

assert manifest["status"] == "PASS"
assert manifest["population_reconciled"] is True
assert manifest["measure_reconciled"] is True
assert manifest["idempotent_rerun_passed"] is True

print("Layer counts:", {key: manifest[key] for key in ["bronze_rows", "silver_rows", "duplicate_rows", "quarantine_rows", "gold_rows"]})
print("\\nQuarantine:\\n", quarantine[["source_row_id", "work_order_id", "reason_code"]].to_string(index=False))
print("\\nGold plant reliability:\\n", gold.to_string(index=False))
print("\\nPopulation reconciled:", manifest["population_reconciled"])
print("Measure reconciled:", manifest["measure_reconciled"])
print("Idempotent rerun passed:", manifest["idempotent_rerun_passed"])
print("Manifest status:", manifest["status"])
print("Artifacts:", sorted(path.name for path in output_dir.iterdir()))`,
    questions: [
      "Which columns belong to source evidence and which are Bronze ingestion metadata?",
      "Why is R-004 classified as a duplicate rather than a new version?",
      "Why are negative downtime and missing asset quarantined instead of silently corrected?",
      "How does 8 = 5 + 1 + 2 prove population reconciliation?",
      "Why does Gold contain three rows while Silver contains five?",
      "What proves Gold's 60 downtime minutes match the approved Silver population?",
      "How do stable keys, ordering, checksums, and deterministic rules prove the rerun is idempotent?",
      "How would you extend this lab for corrected versions, deletes, late facts, and Type 2 dimensions?",
    ],
    expectedOutcome:
      "A six-file evidence pack preserving eight Bronze records, five trusted Silver work orders, one duplicate, two quarantined exceptions, three Gold plant summaries totaling 60 downtime minutes, population and measure reconciliation, deterministic rerun checksums, and a PASS manifest.",
  },

  guidedPractice: [
    { id: "gp-07-03-01", question: "What is the primary Bronze responsibility?", answer: "Preserve source-aligned evidence plus ingestion metadata for replay, audit, profiling, security, and retention." },
    { id: "gp-07-03-02", question: "What is the primary Silver responsibility?", answer: "Create validated, typed, standardized, deduplicated, conformed, protected, and reusable entities and events." },
    { id: "gp-07-03-03", question: "What is the primary Gold responsibility?", answer: "Publish certified business-ready facts, dimensions, aggregates, features, and semantic inputs for declared consumers and actions." },
    { id: "gp-07-03-04", question: "Where should an ambiguous invalid record go?", answer: "To governed quarantine with the source identity, payload, failed rule, reason, severity, owner, and correction workflow." },
    { id: "gp-07-03-05", question: "How do eight Bronze rows reconcile to five Silver rows?", answer: "Explain every disposition, for example 8 = 5 accepted + 1 duplicate + 2 quarantined." },
    { id: "gp-07-03-06", question: "Why can Gold row count differ from Silver?", answer: "Gold may use a different grain; reconcile approved measures and keys rather than assuming equal row counts." },
  ],

  independentPractice: [
    { id: "ip-07-03-01", difficulty: "Contract", question: "Write a Bronze contract for robot telemetry including fidelity, metadata, immutability, access, partitions, retention, and replay." },
    { id: "ip-07-03-02", difficulty: "Profile", question: "Create a Bronze profiling plan covering schema, nulls, keys, ranges, codes, versions, duplicates, lateness, volume, and drift." },
    { id: "ip-07-03-03", difficulty: "Engineer", question: "Design Silver rules for typing, units, time zones, codes, duplicate versions, corrections, deletes, late arrivals, and sensitive fields." },
    { id: "ip-07-03-04", difficulty: "Operate", question: "Create a quarantine taxonomy with reason codes, severities, owners, correction service levels, replay, and aging metrics." },
    { id: "ip-07-03-05", difficulty: "Model", question: "Design a Gold star schema for plant reliability and state the grain of every fact and dimension." },
    { id: "ip-07-03-06", difficulty: "Validate", question: "Write population, key, measure, freshness, privacy, performance, lineage, and rerun tests for each promotion." },
    { id: "ip-07-03-07", difficulty: "Fabric", question: "Compare separate lakehouses, schemas in one lakehouse, and a Lakehouse-to-Warehouse hybrid for Bronze, Silver, and Gold." },
    { id: "ip-07-03-08", difficulty: "Portfolio", question: "Create a medallion runbook explaining failure recovery, checkpoint behavior, atomic publication, rollback, replay, and owner escalation." },
  ],

  commonMistakes: [
    { mistake: "Renaming folders Bronze, Silver, and Gold without contracts", correction: "Define guarantees, consumers, owners, tests, access, retention, and promotion criteria for every layer." },
    { mistake: "Cleaning Bronze in place", correction: "Preserve source-aligned evidence and write corrected or standardized outputs to controlled downstream versions." },
    { mistake: "Allowing analysts to report directly from Bronze", correction: "Restrict Bronze to approved engineering, audit, and replay use; certify decision products in Gold." },
    { mistake: "Silently dropping invalid rows", correction: "Quarantine and reconcile them with reason, severity, source identity, owner, and correction status." },
    { mistake: "Treating every duplicate as identical", correction: "Differentiate exact transport repeats, corrected versions, legitimate repeated events, and conflicting records." },
    { mistake: "Performing consumer-specific aggregation in Silver", correction: "Keep Silver reusable and place decision-specific grain and business logic in Gold." },
    { mistake: "Building Gold before declaring grain", correction: "State exactly what one row means before joins, dimensions, measures, and aggregation." },
    { mistake: "Expecting equal row counts across layers", correction: "Reconcile dispositions and measures according to each layer's grain and contract." },
    { mistake: "Advancing the watermark before Gold certification", correction: "Commit progress only after required Silver and Gold validation and publication succeed." },
    { mistake: "Rerunning with append-only writes", correction: "Use deterministic keys, versions, idempotent merges, checkpoints, atomic publication, and checksums." },
    { mistake: "Using one access policy for every layer", correction: "Bronze often requires stricter access and retention; test permissions for each layer, item, engine, and persona." },
    { mistake: "Measuring only pipeline success", correction: "Monitor population, quality, quarantine, duplicates, freshness, lineage, performance, cost, and consumer impact." },
  ],

  discussionQuestions: [
    "Should Bronze ever be directly accessible to a business analyst?",
    "Which corrections are safe to automate, and which require a data steward?",
    "When should Bronze preserve files versus source-aligned Delta tables?",
    "Should Silver contain historical versions or only current entity state?",
    "How many Gold products are justified from one shared Silver domain?",
    "Can a Warehouse serve as Gold while Lakehouses serve Bronze and Silver?",
    "Who owns a quarantined record when the source system and business process disagree?",
    "What evidence is necessary before a Gold product receives a certified label?",
  ],

  formativeAssessment: {
    totalPoints: 100,
    passingScore: 80,
    questions: [
      { id: "check-07-03-01", points: 10, prompt: "Define Bronze, Silver, Gold, and quarantine by their contracts.", sampleAnswer: "Bronze preserves source evidence, Silver provides validated and conformed reusable truth, Gold publishes certified business products, and quarantine preserves rejected exceptions with reasons and ownership." },
      { id: "check-07-03-02", points: 10, prompt: "Design a Bronze metadata schema for a file-based source.", sampleAnswer: "Include source, path, checksum, size, modified time, batch, ingestion time, schema version, pipeline version, classification, and replay identity." },
      { id: "check-07-03-03", points: 10, prompt: "Design deterministic Silver duplicate and version rules.", sampleAnswer: "Declare the business key, event identity, source version, tie-break order, exact-repeat rule, correction rule, conflict rule, and preserved lineage." },
      { id: "check-07-03-04", points: 10, prompt: "Specify a professional quarantine contract.", sampleAnswer: "Preserve payload, source identity, batch, failed rule, reason code, severity, owner, status, correction evidence, timestamps, replay history, and service level." },
      { id: "check-07-03-05", points: 10, prompt: "Explain how to handle a late-arriving dimension.", sampleAnswer: "Preserve the fact, apply an approved unknown or suspense policy, load the dimension when available, repair the relationship, recompute affected Gold products, and record the correction." },
      { id: "check-07-03-06", points: 10, prompt: "Define a Gold product for plant reliability.", sampleAnswer: "Name the consumer and action, declare plant-date grain, dimensions, downtime and work-order measures, certification tests, freshness, security, owner, and serving mode." },
      { id: "check-07-03-07", points: 10, prompt: "Reconcile 1,000 Bronze rows, 930 Silver rows, 20 duplicates, and 45 quarantined rows.", sampleAnswer: "Five rows remain unexplained because 930 + 20 + 45 = 995. Promotion must stop until the missing disposition is identified." },
      { id: "check-07-03-08", points: 10, prompt: "Explain why Gold and Silver row counts can differ without data loss.", sampleAnswer: "They may use different grains. Prove source dispositions, key coverage, and measure reconciliation under approved aggregation rules." },
      { id: "check-07-03-09", points: 10, prompt: "Design an idempotent replay test across all layers.", sampleAnswer: "Replay the same bounded Bronze inputs and code versions, then prove unchanged Silver and Gold keys, rows, measures, checksums, watermarks, and publication state." },
      { id: "check-07-03-10", points: 10, prompt: "Select a Fabric implementation for a Spark-first transformation and SQL-first Gold serving workload.", sampleAnswer: "Use Lakehouse Bronze and Silver with Delta and Spark, then a Warehouse or justified Gold serving item for T-SQL and dimensional analytics, coordinated with explicit lineage and reconciliation." },
    ],
  },

  researchExtension: {
    title: "Research Extension — Compare Medallion Deployment Models",
    description:
      "Compare three Fabric implementations for the same manufacturing data product: separate Lakehouses, one Lakehouse with schemas, and a Lakehouse-to-Warehouse hybrid.",
    researchQuestion:
      "Which deployment model best balances isolation, reuse, Spark and SQL development, security, deployment, lineage, performance, operations, and total cost?",
    applicationOptions: [
      "Robot telemetry and maintenance reliability",
      "Inspection images and quality defects",
      "Supply chain, inventory, and finance",
      "Education learning events and intervention",
      "AI training, evaluation, and monitoring data",
    ],
    task:
      "Define criteria first, implement or specify each model, use current official documentation, test quality and security boundaries, measure representative workloads, and recommend one design with conditions that would reverse the decision.",
    requiredEvidence: [
      "Requirements, decision matrix, and architectural alternatives",
      "Bronze, Silver, Gold, quarantine, lineage, and trust-boundary diagrams",
      "Layer contracts, schemas, keys, grains, rules, ownership, and service levels",
      "Population, measure, quality, privacy, freshness, failure, and rerun tests",
      "Measured storage, file layout, latency, concurrency, maintenance, and cost",
      "Limitations, product-status date, operational runbook, and review conditions",
    ],
  },

  portfolioArtifact: {
    title: "Portfolio Artifact — Certified Fabric Medallion Pipeline Design",
    description:
      "Create an employer-ready design and evidence pack showing how imperfect source data becomes a certified Gold decision product without losing raw evidence or exceptions.",
    requiredSections: [
      "Business decision, consumers, actions, latency, materiality, and consequences of error",
      "Source inventory with grain, keys, versions, deletes, lateness, schema, privacy, owner, and volume",
      "Bronze contract with fidelity, metadata, immutability, partitions, access, retention, and replay",
      "Bronze profile and baseline quality evidence",
      "Silver canonical schemas, keys, typing, conformance, duplicate, version, correction, and late-data rules",
      "Quarantine reason codes, severity, ownership, service levels, correction, and replay workflow",
      "Gold facts, dimensions, grain, measures, semantic inputs, certification, and service objectives",
      "End-to-end architecture, lineage, trust boundaries, dependencies, and publication flow",
      "Population, key, amount, freshness, privacy, performance, failure, and idempotent rerun evidence",
      "Python lab artifacts, checksums, PASS manifest, runbook, limitations, and interview narrative",
    ],
  },

  growthIndicators: [
    { title: "Medallion Architect", description: "You turn raw inputs into explicit, progressive trust contracts." },
    { title: "Data Quality Engineer", description: "You classify, quarantine, reconcile, correct, and replay exceptions without hiding them." },
    { title: "Gold Product Designer", description: "You build decision-ready facts and dimensions from declared grain and certified logic." },
    { title: "DataOps Communicator", description: "You document lineage, tests, failures, recovery, ownership, cost, and consumer impact clearly." },
  ],

  reflection: [
    "Can Bronze reproduce exactly what the source delivered?",
    "Which ingestion metadata proves identity and lineage?",
    "Which Silver rule changes business meaning?",
    "Are duplicate and correction rules deterministic?",
    "Can every rejected record be found, explained, assigned, and replayed?",
    "Which reusable Silver entities prevent teams from repeating logic?",
    "What exactly does one Gold row represent?",
    "Which business action depends on the Gold product?",
    "Do population and measure reconciliations both pass?",
    "What happens after a late fact, deletion, or schema change?",
    "Can unchanged inputs be rerun with zero trusted-state difference?",
    "Could another engineer recover and operate the design from its evidence pack?",
  ],

  summary: [
    "Medallion architecture progressively improves structure, quality, and trust through Bronze, Silver, and Gold contracts.",
    "Bronze preserves source-aligned evidence and ingestion metadata for replay, profiling, audit, and comparison.",
    "Bronze is governed evidence, not an unrestricted data swamp or a certified reporting source.",
    "Silver creates typed, validated, standardized, deduplicated, conformed, protected, and reusable entities and events.",
    "Duplicate handling must distinguish exact repeats, legitimate events, corrected versions, and conflicts.",
    "Quarantine preserves invalid records, reasons, owners, correction evidence, and replay history instead of silently deleting them.",
    "Late facts, late dimensions, corrections, deletes, and schema changes require explicit temporal policies.",
    "Gold publishes certified decision-ready facts, dimensions, aggregates, features, and semantic inputs.",
    "Gold design begins with the consumer, action, and row grain—not with an aggregation function.",
    "Silver protects reusable domain truth; Gold contains consumer-oriented business logic and serving structures.",
    "Population reconciliation accounts for every Bronze record disposition.",
    "Measure reconciliation proves Gold results match the approved Silver population under declared rules.",
    "Idempotent writes, committed watermarks, checkpoints, atomic publication, and checksums make replay safe.",
    "Layer security should reflect purpose; Bronze commonly needs stricter access than Silver or Gold products.",
    "Fabric can implement medallion layers with Lakehouses, Warehouses, schemas, separate items, or a justified hybrid.",
    "A professional implementation monitors quality, quarantine, duplicates, schema, freshness, lineage, performance, cost, and consumer impact.",
    "The architecture is complete only when its evidence lets another engineer explain, recover, replay, and support it.",
  ],

  previousLesson: {
    id: "data-ai-m07-l02",
    moduleNumber: 7,
    slug: "data-lakes-warehouses-lakehouses-and-onelake",
    title: "Data Lakes, Warehouses, Lakehouses, and OneLake",
  },
  nextLesson: {
    id: "data-ai-m07-l04",
    moduleNumber: 7,
    slug: "fabric-pipelines-dataflows-gen2-notebooks-and-spark",
    title: "Fabric Pipelines, Dataflows Gen2, Notebooks, and Spark",
  },

  lumineryGuidance: {
    message:
      "Preserve evidence in Bronze, create reusable truth in Silver, certify decisions in Gold, and make every rejected record and transformation explainable.",
    prompt:
      "Act as my senior Microsoft Fabric medallion architect, data engineer, data-quality lead, dimensional modeler, security reviewer, DataOps engineer, and portfolio mentor. Help me complete Module 7 Lesson 3 one verified gate at a time. Require business decision, consumers, source contracts, Bronze fidelity and metadata, profiling, Silver schemas and conformance, stable keys, versions, duplicate rules, late data, deletions, privacy, quarantine, correction, replay, Gold grain, facts, dimensions, measures, certification, population reconciliation, measure reconciliation, lineage, idempotence, watermarks, atomic publication, security, monitoring, cost, documentation, and interview narrative. Do not approve color-named folders without contracts, in-place Bronze cleaning, silent rejection, arbitrary deduplication, consumer-specific Silver logic, Gold without grain, equal-row-count assumptions, watermark advancement before certification, append-on-rerun duplication, untested access, or promotion without reproducible evidence.",
    coachingQuestions: [
      "What source evidence and ingestion metadata must Bronze preserve?",
      "Which Silver rules are deterministic, versioned, and reusable?",
      "How do you distinguish duplicates, corrections, conflicts, and legitimate repeats?",
      "Can every quarantined record be explained, owned, corrected, and replayed?",
      "What does one Gold row mean, and which action uses it?",
      "Which facts, dimensions, measures, and certification gates belong in Gold?",
      "Does every Bronze row have a reconciled disposition?",
      "Do Gold measures reconcile to the approved Silver population?",
      "What proves the pipeline is idempotent after an unchanged replay?",
      "Can another engineer recover the run using only the contracts, logs, artifacts, and runbook?",
    ],
  },
};

export default lesson03;
