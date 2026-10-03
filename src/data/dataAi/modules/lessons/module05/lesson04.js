const lesson04 = {
  id: "data-ai-m05-l04",
  courseId: "data-ai-foundations",
  moduleId: "data-ai-foundations-module-05",
  moduleNumber: 5,
  lessonNumber: 4,
  slug: "missing-data-data-types-duplicates-and-validation",
  title: "Missing Data, Data Types, Duplicates, and Validation",
  shortTitle: "Missing Data, Types, Duplicates, and Validation",
  subtitle:
    "Turn imperfect records into governed analytical data by profiling missingness, enforcing types and constraints, resolving duplicates, preserving exceptions, and proving population reconciliation.",
  status: "available",
  duration: "4–5 hours",
  level: "Beginner to Professional",

  essentialQuestion:
    "How can we clean imperfect data without silently inventing values, deleting evidence, or changing the analytical population?",
  bigIdea:
    "Data cleaning is a controlled decision process. Every conversion, imputation, correction, duplicate rule, exclusion, and retained value must be justified by meaning, recorded in evidence, and tested against a declared data contract.",

  whyThisLessonExists: {
    title: "Clean Data Must Still Tell the Truth About Its Defects",
    introduction:
      "Real data arrives with blanks, mixed types, impossible values, duplicate keys, inconsistent categories, and timestamps that cannot be parsed. pandas can change these values quickly, but speed does not make the decisions correct.",
    centralProblem:
      "A maintenance report contains twelve source records. One downtime value is missing, several fields violate their contracts, and one work order appears twice. If an analyst drops missing rows, coerces text to zero, and calls drop_duplicates without a documented key or survivor rule, the final report looks tidy but cannot be defended or reconciled.",
    purpose:
      "This lesson teaches missingness mechanisms, null profiling, nullable dtypes, safe parsing, type conversion, schema and domain validation, uniqueness tests, duplicate diagnosis, deterministic survivor rules, correction logs, exception tables, data-quality metrics, and automated assertions. The practical lab produces clean, duplicate, invalid, and reconciliation outputs from one controlled pipeline.",
  },

  problemFirst: {
    title: "Opening Investigation: Which Work Orders Are Valid, Duplicated, or Unusable?",
    scenario:
      "Twelve maintenance records should represent one row per work order. Required fields include source record ID, work-order ID, plant, asset, event timestamp, downtime, repair cost, status, and technician. Five rows contain distinct validity defects, and two valid rows describe the same work order.",
    questions: [
      "Which fields are required, conditionally required, or optional?",
      "Does a blank mean not measured, not applicable, unknown, suppressed, or corrupted?",
      "Which text values can be parsed safely, and which must remain exceptions?",
      "What are the allowed ranges, categories, formats, and cross-field rules?",
      "Which key defines a duplicate: record ID, work-order ID, or a composite event key?",
      "Are the duplicate rows exact copies, conflicting versions, or legitimate repeated events?",
      "Which survivor rule is deterministic and supported by source-system meaning?",
      "How will received, clean, duplicate, and invalid counts reconcile exactly?",
    ],
    expectedInsight:
      "A cleaning rule must distinguish absence from invalidity, syntax from semantics, and duplicate detection from duplicate resolution. Every source row must remain traceable to its final outcome.",
  },

  visualModels: [
    {
      id: "data-quality-gate-cycle",
      type: "lifecycle",
      title: "The Audited Data-Quality Gate",
      description:
        "Move records through explicit gates while preserving both source evidence and transformation evidence.",
      stages: [
        { label: "1. Preserve", detail: "Retain immutable source identifiers, source values, ingestion order, origin, and acquisition time." },
        { label: "2. Profile", detail: "Measure row counts, nulls, patterns, ranges, categories, key frequency, and conversion success." },
        { label: "3. Parse", detail: "Convert strings into intentional nullable numeric, Boolean, categorical, and datetime types." },
        { label: "4. Validate", detail: "Apply schema, domain, format, range, uniqueness, and cross-field business rules." },
        { label: "5. Resolve", detail: "Route invalid records, investigate duplicates, and apply documented correction or survivor rules." },
        { label: "6. Reconcile", detail: "Prove every received row reaches one outcome and publish metrics, exceptions, and tests." },
      ],
      feedback:
        "When a cleaning step reduces rows or changes values, capture the affected source IDs, old values, new values, rule ID, reason, and resulting population count.",
      interpretation:
        "Cleaning is reliable when no record or change disappears from the evidence trail.",
    },
    {
      id: "missing-data-decision-cycle",
      type: "lifecycle",
      title: "Missing-Data Decision Path",
      description:
        "Treat missingness according to meaning, risk, and decision use—not one universal fill rule.",
      stages: [
        { label: "Meaning", detail: "Determine whether the value is unknown, not collected, not applicable, suppressed, delayed, or structurally absent." },
        { label: "Mechanism", detail: "Investigate whether missingness is unrelated, conditionally related, or connected to the missing value itself." },
        { label: "Impact", detail: "Compare missing rates by source, time, asset, group, target, and outcome to detect bias or drift." },
        { label: "Treatment", detail: "Retain, flag, recover, impute, model, exclude, or route to correction according to the approved rule." },
        { label: "Evidence", detail: "Store an indicator, method, parameters, affected rows, sensitivity analysis, and post-treatment metrics." },
      ],
      feedback:
        "Never convert missing measurements to zero unless zero is the verified domain meaning for that exact field and context.",
      interpretation:
        "Missingness can contain information; hiding it can change statistics, decisions, and model fairness.",
    },
  ],

  learningObjectives: [
    "Distinguish missing, invalid, zero, empty, unknown, not applicable, suppressed, and delayed values.",
    "Profile null counts, rates, patterns, group differences, and time trends before treatment.",
    "Explain MCAR, MAR, and MNAR as investigation frameworks rather than labels proven from observed data alone.",
    "Use pandas nullable string, integer, floating, Boolean, categorical, and datetime dtypes intentionally.",
    "Parse numeric, Boolean, categorical, and timestamp text with explicit error handling.",
    "Separate syntactic validity from semantic and cross-field business validity.",
    "Define and test required fields, allowed categories, ranges, formats, uniqueness, and referential rules.",
    "Identify exact-row, business-key, composite-key, and near duplicates.",
    "Investigate duplicates before choosing a deterministic survivor or consolidation rule.",
    "Retain correction logs, duplicate quarantine, and invalid-record exception tables.",
    "Calculate completeness, validity, uniqueness, duplicate, and conversion-success measures with stated denominators.",
    "Reconcile received rows to clean, duplicate, and invalid outcomes.",
    "Write automated assertions for schema, dtypes, keys, categories, ranges, null policies, outputs, and row balance.",
    "Prevent data leakage when imputation or correction parameters are estimated for machine learning.",
    "Build and test an audited pandas work-order cleaning pipeline.",
  ],

  prerequisiteKnowledge: [
    "Module 5 Lesson 1: Python types, functions, exceptions, and assertions",
    "Module 5 Lesson 2: NumPy dtypes, Boolean masks, missing numerical values, and vectorized validation",
    "Module 5 Lesson 3: DataFrames, Series, indexes, filtering, safe assignment, sorting, and row reconciliation",
    "Module 4: primary keys, constraints, data contracts, duplicate diagnosis, and exception handling",
    "Basic proportions, averages, conditional reasoning, and the difference between identifiers and quantities",
  ],

  vocabulary: [
    { term: "Missing value", definition: "A field whose expected value is absent or unavailable; its reason and meaning must be investigated." },
    { term: "Null", definition: "A general database and analytical representation of absence rather than a numerical value or empty text." },
    { term: "NaN", definition: "A floating-point not-a-number value commonly used to represent missing or invalid numerical results." },
    { term: "pd.NA", definition: "pandas' scalar missing marker designed for nullable extension dtypes and three-valued logic." },
    { term: "NaT", definition: "The missing marker for datetime and timedelta values." },
    { term: "Empty string", definition: "A string containing no characters; it may encode missingness but is not automatically equivalent to null." },
    { term: "Sentinel value", definition: "A special code such as -999 or UNKNOWN used to represent a state; it must be decoded before analysis." },
    { term: "Structural missingness", definition: "Absence caused because a field does not apply to that record by design." },
    { term: "MCAR", definition: "Missing completely at random: missingness is unrelated to observed or unobserved values under strong assumptions." },
    { term: "MAR", definition: "Missing at random: after conditioning on observed information, missingness does not depend on the missing value itself." },
    { term: "MNAR", definition: "Missing not at random: missingness may depend on the unseen value even after observed information is considered." },
    { term: "Imputation", definition: "Replacing missing values with estimated or rule-based values while retaining an indicator and method record." },
    { term: "Complete-case analysis", definition: "Analyzing only rows complete for required variables; it can change population and introduce bias." },
    { term: "Missingness indicator", definition: "A Boolean field recording whether the original value was missing before any treatment." },
    { term: "Nullable dtype", definition: "A pandas dtype such as Int64, Float64, boolean, or string that supports pd.NA." },
    { term: "Type inference", definition: "Automatic guessing of a column dtype from observed values, which can be wrong or unstable across files." },
    { term: "Type coercion", definition: "Conversion of values to another dtype, sometimes producing missing markers when parsing fails." },
    { term: "Parsing", definition: "Interpreting boundary text according to an expected numeric, Boolean, categorical, or datetime representation." },
    { term: "Conversion failure", definition: "A source value that cannot be represented in the intended target type under the parsing rule." },
    { term: "Syntactic validity", definition: "Whether a value conforms to the required representation or format." },
    { term: "Semantic validity", definition: "Whether a parsed value is meaningful and allowed in its business domain." },
    { term: "Cross-field validation", definition: "A rule whose truth depends on two or more fields, such as closed time occurring after opened time." },
    { term: "Data contract", definition: "A documented agreement covering fields, meanings, dtypes, units, keys, constraints, freshness, and failure handling." },
    { term: "Schema validation", definition: "Checking required columns, names, order policy, dtypes, and structural expectations." },
    { term: "Domain constraint", definition: "An allowed set, pattern, range, unit, or relationship defined by real-world meaning." },
    { term: "Uniqueness", definition: "The requirement that a candidate key identify no more than one observation." },
    { term: "Exact duplicate", definition: "A row whose compared fields are identical to another row." },
    { term: "Business-key duplicate", definition: "Two or more rows sharing a key expected to identify one business observation." },
    { term: "Composite key", definition: "A key formed from multiple columns whose combination should be unique." },
    { term: "Near duplicate", definition: "Records that likely describe the same entity or event but differ in spelling, formatting, time, or other fields." },
    { term: "Duplicate cluster", definition: "A group of records believed to refer to the same entity or event." },
    { term: "Survivor rule", definition: "A deterministic policy selecting or constructing the canonical record from a duplicate cluster." },
    { term: "Canonical record", definition: "The approved representative retained for one entity or event after duplicate resolution." },
    { term: "Quarantine", definition: "A retained dataset of records withheld from normal analysis pending correction or review." },
    { term: "Reason code", definition: "A controlled label explaining why a record or value was rejected, changed, or routed." },
    { term: "Correction log", definition: "Evidence containing record ID, field, old value, new value, rule, reason, actor or process, and time." },
    { term: "Completeness", definition: "The share of expected values or records that are present under a stated scope and denominator." },
    { term: "Validity rate", definition: "The share of tested values or rows satisfying declared constraints." },
    { term: "Duplicate rate", definition: "The share of records classified as duplicate under a declared key and survivor rule." },
    { term: "Reconciliation", definition: "Proof that source counts and amounts equal the sum of mutually exclusive explained outcomes." },
  ],

  formulas: [
    { id: "missing-rate", name: "Missing rate", formula: "missing rate = missing values ÷ expected values", meaning: "Measures absence for a declared field and population.", requirement: "State whether structurally inapplicable values belong in the denominator." },
    { id: "completeness", name: "Completeness", formula: "completeness = nonmissing required values ÷ expected required values", meaning: "Measures how much required information is present.", requirement: "A present but invalid value is complete yet not valid; report the measures separately." },
    { id: "conversion-success", name: "Conversion success rate", formula: "successfully parsed nonblank values ÷ attempted nonblank values", meaning: "Measures whether boundary text can be converted to the intended dtype.", requirement: "Do not count original blanks as parsing failures unless the contract defines them that way." },
    { id: "validity-rate", name: "Row validity rate", formula: "valid rows ÷ received rows", meaning: "Reports the share of source records passing all required rules.", requirement: "Publish failed rule counts and overlapping failures, not only the final percentage." },
    { id: "uniqueness-rate", name: "Key uniqueness rate", formula: "distinct nonnull keys ÷ nonnull key rows", meaning: "Quantifies key duplication under the selected key definition.", requirement: "Test null keys separately and investigate duplicate clusters before resolution." },
    { id: "duplicate-rate", name: "Duplicate quarantine rate", formula: "duplicate rows beyond survivors ÷ valid pre-deduplication rows", meaning: "Measures rows withheld by the approved duplicate rule.", requirement: "State the key, time window, ordering, and survivor rule." },
    { id: "weighted-quality", name: "Weighted quality score", formula: "Q = Σⱼ wⱼqⱼ, where Σⱼwⱼ = 1", meaning: "Combines dimension scores such as completeness, validity, uniqueness, and timeliness.", requirement: "Never let a composite score hide a critical failed control; publish every component and threshold." },
    { id: "quality-reconciliation", name: "Cleaning reconciliation", formula: "received = clean + duplicate quarantine + invalid quarantine", meaning: "Every source row reaches one mutually exclusive cleaning outcome.", requirement: "Also reconcile important totals where invalid values do not make the total meaningless." },
  ],

  workedExamples: [
    {
      id: "example-05-04-01",
      title: "Profile missingness before filling anything",
      problem: "A downtime column contains 1,000 rows, including 80 nulls and 20 not-applicable records.",
      solutionSteps: [
        "Separate structurally not-applicable records from expected measurements.",
        "For the 980 expected values, 80 are missing and 900 are present.",
        "Calculate missing rate as 80 ÷ 980, not 80 ÷ 1,000.",
        "Compare the rate by plant, asset type, source system, and month.",
      ],
      answer: "Expected-value missing rate = 8.16%; completeness = 91.84%.",
      interpretation: "A denominator is part of the data-quality definition, not a formatting detail.",
    },
    {
      id: "example-05-04-02",
      title: "Parse without converting defects to zero",
      problem: "Convert [\"12\", \"\", \"unknown\", \"-4\"] to numerical downtime.",
      solutionSteps: [
        "Normalize intentional blank codes separately from invalid text codes.",
        "Use pd.to_numeric(series, errors=\"coerce\") to create parsed values and a conversion-failure mask.",
        "Treat blank as missing, unknown as invalid text, and -4 as parsed but semantically invalid.",
        "Do not fill any of them with zero unless a source-approved rule proves zero is the intended value.",
      ],
      answer: "Parsing yields 12, missing, missing, and -4; reason codes distinguish blank, conversion failure, and negative range violation.",
      interpretation: "Parsing answers whether text can become a number; validation answers whether that number is allowed.",
    },
    {
      id: "example-05-04-03",
      title: "Choose nullable dtypes intentionally",
      problem: "A count column contains integers and missing values, while a passed flag contains True, False, and missing.",
      solutionSteps: [
        "Use Int64 rather than float64 when the domain is integer and missingness must be preserved.",
        "Use boolean rather than object for the three-state flag.",
        "Use string for identifiers and text rather than mixed object values.",
        "Verify dtype after file ingestion and after transformations.",
      ],
      answer: "Int64 and boolean preserve domain intent while supporting pd.NA.",
      interpretation: "dtype is part of the contract because it controls operations, missingness, memory, and interoperability.",
    },
    {
      id: "example-05-04-04",
      title: "Separate exact and business-key duplicates",
      problem: "Two rows share work_order_id WO-1007 but have different record IDs and ingestion times; all business fields match.",
      solutionSteps: [
        "Confirm record_id is a source-row identifier and work_order_id is the business key.",
        "Compare all governed business fields to determine whether versions conflict.",
        "Apply the approved rule: retain the earliest successfully ingested valid version and quarantine later identical replays.",
        "Store both source record IDs and the survivor ID in duplicate evidence.",
      ],
      answer: "Retain the first valid WO-1007 record as canonical and quarantine the later replay as DUPLICATE_WORK_ORDER.",
      interpretation: "drop_duplicates is an implementation; the key, comparison fields, ordering, and survivor policy are the actual business rule.",
    },
    {
      id: "example-05-04-05",
      title: "Validate a cross-field rule",
      problem: "A closed work order must have closed_at at or after opened_at and nonmissing repair cost.",
      solutionSteps: [
        "Create closed_rows = status.eq(\"closed\").",
        "Test time order only for rows with both timestamps present.",
        "Require repair cost only for closed rows according to the contract.",
        "Assign separate reason codes for missing close time, reversed time, and missing cost.",
      ],
      answer: "The rule is conditional: open work orders do not fail merely because closed_at or final repair cost is absent.",
      interpretation: "Global null rules often misclassify legitimate structural missingness.",
    },
    {
      id: "example-05-04-06",
      title: "Reconcile cleaning outcomes",
      problem: "Twelve records produce six clean survivors, one valid duplicate replay, and five invalid records.",
      solutionSteps: [
        "Create mutually exclusive clean, duplicate, and invalid masks aligned to source rows.",
        "Assert no pairwise overlaps and assert their union covers every row.",
        "Compare exact record IDs in each output to expected fixtures.",
        "Verify 12 = 6 + 1 + 5 and publish reason counts.",
      ],
      answer: "The population reconciles with no unexplained disappearance or double counting.",
      interpretation: "A clean-table row count is not sufficient evidence without the duplicate and invalid populations.",
    },
  ],

  interactiveExploration: {
    title: "Change One Cleaning Rule and Trace Every Consequence",
    description:
      "Use a small DataFrame containing nulls, invalid text, boundary values, duplicate keys, and conflicting duplicates. Change one rule at a time and trace populations, summaries, and evidence.",
    steps: [
      "Compare isna, empty-string detection, and sentinel-code detection.",
      "Parse with errors=\"raise\" and errors=\"coerce\", then identify exactly which values changed.",
      "Compare float64 with Int64 and object with string or boolean.",
      "Run duplicated under all columns, one business key, and a composite key.",
      "Compare keep=\"first\", keep=\"last\", and keep=False without treating them as justified survivor policies.",
      "Change an inclusive range boundary and record affected IDs.",
      "Recalculate completeness, validity, duplicate rate, clean totals, and reconciliation after each change.",
    ],
    questions: [
      "Which records changed outcome and why?",
      "Which metric denominator changed?",
      "Which conversion created a new missing value?",
      "Which duplicate definition merged legitimate distinct events?",
      "Which rule change altered a published total or group comparison?",
    ],
    expectedDiscovery:
      "Cleaning decisions are analytical assumptions with downstream effects; versioned rules and exact record-level tests make those effects visible.",
  },

  realWorldApplications: [
    { field: "Manufacturing and Robotics", application: "Validate sensor and work-order records, preserve failed measurements, distinguish replay duplicates from repeated events, and publish clean and exception feeds." },
    { field: "Finance", application: "Control transaction identifiers, currency precision, null reasons, posting dates, duplicate payments, and reconciliation totals." },
    { field: "Education", application: "Separate absent, exempt, not submitted, and invalid scores rather than converting every missing mark to zero." },
    { field: "Healthcare Operations", application: "Respect structural missingness, code sets, temporal rules, privacy suppression, and encounter-level duplicate logic." },
    { field: "Customer Analytics", application: "Resolve entity duplicates carefully, retain consent and source lineage, and measure missingness or exclusions across groups." },
    { field: "AI and Machine Learning", application: "Fit imputers on training data only, retain missingness indicators, prevent duplicated entities across splits, and monitor production data contracts." },
  ],

  aiConnection: {
    title: "Data Cleaning Can Create or Prevent Model Leakage and Bias",
    explanation:
      "Machine-learning models inherit every cleaning choice. Full-dataset imputation leaks validation and test information. Duplicate entities across splits inflate measured performance. Missingness correlated with access, device failure, geography, or outcome can create unequal errors when hidden by one global fill value.",
    example:
      "In predictive maintenance, calculate imputation statistics only from the training period, retain a missingness flag, transform validation and test data with the frozen training parameters, and split by asset or time when repeated records from one machine would otherwise appear in multiple partitions.",
    uses: [
      "Training-only imputation fitting",
      "Missingness indicators and sensitivity analysis",
      "Entity-aware and time-aware deduplication",
      "Schema and range checks before inference",
      "Data-drift and conversion-failure monitoring",
      "Fairness analysis of exclusions and missing rates",
    ],
    caution:
      "An imputed value is an estimate, not an observation. Preserve its indicator and method, validate performance under alternative treatments, and never overwrite raw evidence.",
    reflectionQuestion:
      "Which cleaning parameter in your AI pipeline was estimated using data that should have remained held out?",
  },

  pythonLab: {
    title: "Audited Work-Order Cleaning, Duplicate Resolution, and Reconciliation",
    objective:
      "Parse and validate twelve work-order records, preserve five invalid rows, quarantine one duplicate replay, retain six canonical clean rows, and prove exact record-level and population-level reconciliation.",
    code: `import numpy as np
import pandas as pd

raw_records = [
    {"record_id": "REC-001", "work_order_id": "WO-1001", "plant": "A", "asset_id": "R-101", "event_time": "2026-09-01 08:00", "downtime_min": "12", "repair_cost_usd": "120.50", "status": "CLOSED", "technician": "Maya"},
    {"record_id": "REC-002", "work_order_id": "WO-1002", "plant": "A", "asset_id": "R-102", "event_time": "2026-09-01 09:00", "downtime_min": "", "repair_cost_usd": "75.00", "status": "CLOSED", "technician": "Eli"},
    {"record_id": "REC-003", "work_order_id": "WO-1003", "plant": "B", "asset_id": "R-201", "event_time": "2026-09-01 10:00", "downtime_min": "-4", "repair_cost_usd": "40.00", "status": "CLOSED", "technician": "Ava"},
    {"record_id": "REC-004", "work_order_id": "WO-1004", "plant": "B", "asset_id": "R-202", "event_time": "not-a-date", "downtime_min": "15", "repair_cost_usd": "85.00", "status": "CLOSED", "technician": "Noah"},
    {"record_id": "REC-005", "work_order_id": "WO-1005", "plant": "A", "asset_id": "R-103", "event_time": "2026-09-01 11:00", "downtime_min": "30", "repair_cost_usd": "unknown", "status": "CLOSED", "technician": "Maya"},
    {"record_id": "REC-006", "work_order_id": "WO-1006", "plant": "B", "asset_id": "R-203", "event_time": "2026-09-01 12:00", "downtime_min": "8", "repair_cost_usd": "90.00", "status": "DONE", "technician": "Eli"},
    {"record_id": "REC-007", "work_order_id": "WO-1007", "plant": "A", "asset_id": "R-104", "event_time": "2026-09-01 13:00", "downtime_min": "18", "repair_cost_usd": "150.00", "status": "CLOSED", "technician": "Ava"},
    {"record_id": "REC-008", "work_order_id": "WO-1008", "plant": "B", "asset_id": "R-204", "event_time": "2026-09-01 14:00", "downtime_min": "22", "repair_cost_usd": "110.00", "status": "OPEN", "technician": "Noah"},
    {"record_id": "REC-009", "work_order_id": "WO-1009", "plant": "A", "asset_id": "R-105", "event_time": "2026-09-01 15:00", "downtime_min": "5", "repair_cost_usd": "45.00", "status": "CLOSED", "technician": "Maya"},
    {"record_id": "REC-010", "work_order_id": "WO-1010", "plant": "B", "asset_id": "R-205", "event_time": "2026-09-01 16:00", "downtime_min": "60", "repair_cost_usd": "300.00", "status": "CLOSED", "technician": "Eli"},
    {"record_id": "REC-011", "work_order_id": "WO-1007", "plant": "A", "asset_id": "R-104", "event_time": "2026-09-01 13:00", "downtime_min": "18", "repair_cost_usd": "150.00", "status": "CLOSED", "technician": "Ava"},
    {"record_id": "REC-012", "work_order_id": "WO-1011", "plant": "A", "asset_id": "R-106", "event_time": "2026-09-01 17:00", "downtime_min": "0", "repair_cost_usd": "0.00", "status": "CLOSED", "technician": "Noah"},
]

df = pd.DataFrame.from_records(raw_records)
received = len(df)
raw_downtime_blank = df["downtime_min"].astype("string").str.strip().eq("")
raw_cost_nonblank = df["repair_cost_usd"].astype("string").str.strip().ne("")

# Parse source text while retaining immutable source record IDs.
df = df.assign(
    record_id=df["record_id"].astype("string").str.strip(),
    work_order_id=df["work_order_id"].astype("string").str.strip(),
    plant=df["plant"].astype("string").str.strip().str.upper(),
    asset_id=df["asset_id"].astype("string").str.strip(),
    event_time=pd.to_datetime(df["event_time"], errors="coerce", utc=True),
    downtime_min=pd.to_numeric(df["downtime_min"], errors="coerce").astype("Int64"),
    repair_cost_usd=pd.to_numeric(df["repair_cost_usd"], errors="coerce").astype("Float64"),
    status=df["status"].astype("string").str.strip().str.lower(),
    technician=df["technician"].astype("string").str.strip(),
    ingestion_order=pd.Series(range(1, received + 1), dtype="Int64"),
)

assert df.shape == (12, 10)
assert df["record_id"].notna().all() and df["record_id"].is_unique

required_text_ok = (
    df[["record_id", "work_order_id", "plant", "asset_id", "technician"]]
    .notna()
    .all(axis=1)
)
plant_ok = df["plant"].isin({"A", "B"})
time_ok = df["event_time"].notna()
downtime_present = df["downtime_min"].notna()
downtime_ok = df["downtime_min"].ge(0).fillna(False)
cost_present = df["repair_cost_usd"].notna()
cost_ok = df["repair_cost_usd"].ge(0).fillna(False)
status_ok = df["status"].isin({"open", "closed"})

valid_fields_mask = (
    required_text_ok
    & plant_ok
    & time_ok
    & downtime_present
    & downtime_ok
    & cost_present
    & cost_ok
    & status_ok
)

df["reason_code"] = pd.Series("VALID", index=df.index, dtype="string")
df.loc[raw_downtime_blank, "reason_code"] = "MISSING_DOWNTIME"
df.loc[downtime_present & ~downtime_ok, "reason_code"] = "NEGATIVE_DOWNTIME"
df.loc[~time_ok, "reason_code"] = "INVALID_EVENT_TIME"
df.loc[raw_cost_nonblank & ~cost_present, "reason_code"] = "INVALID_REPAIR_COST"
df.loc[~status_ok, "reason_code"] = "INVALID_STATUS"

# Duplicate policy: among valid rows, retain the earliest ingestion for each work order.
duplicate_mask = valid_fields_mask & df.duplicated(
    subset=["work_order_id"], keep="first"
)
clean_mask = valid_fields_mask & ~duplicate_mask
invalid_mask = ~valid_fields_mask
df.loc[duplicate_mask, "reason_code"] = "DUPLICATE_WORK_ORDER"

df["quality_outcome"] = pd.Series("INVALID", index=df.index, dtype="string")
df.loc[duplicate_mask, "quality_outcome"] = "DUPLICATE"
df.loc[clean_mask, "quality_outcome"] = "CLEAN"

# Convert approved monetary values to integer cents for exact controlled totals.
df["repair_cost_cents"] = pd.Series(pd.NA, index=df.index, dtype="Int64")
df.loc[cost_present, "repair_cost_cents"] = (
    df.loc[cost_present, "repair_cost_usd"].mul(100).round().astype("Int64")
)

clean = df.loc[clean_mask].copy()
duplicates = df.loc[duplicate_mask].copy()
invalid = df.loc[invalid_mask].copy()

plant_profile = (
    clean.groupby("plant", observed=True)
    .agg(
        work_orders=("work_order_id", "count"),
        downtime_total=("downtime_min", "sum"),
        repair_cost_cents_total=("repair_cost_cents", "sum"),
    )
    .sort_index()
)

clean_count = int(clean_mask.sum())
duplicate_count = int(duplicate_mask.sum())
invalid_count = int(invalid_mask.sum())

# Mutually exclusive, collectively exhaustive population controls.
assert not (clean_mask & duplicate_mask).any()
assert not (clean_mask & invalid_mask).any()
assert not (duplicate_mask & invalid_mask).any()
assert (clean_mask | duplicate_mask | invalid_mask).all()
assert received == clean_count + duplicate_count + invalid_count

# Exact fixture expectations.
assert (clean_count, duplicate_count, invalid_count) == (6, 1, 5)
assert clean["record_id"].tolist() == [
    "REC-001", "REC-007", "REC-008", "REC-009", "REC-010", "REC-012"
]
assert duplicates["record_id"].tolist() == ["REC-011"]
assert invalid["record_id"].tolist() == [
    "REC-002", "REC-003", "REC-004", "REC-005", "REC-006"
]
assert invalid["reason_code"].tolist() == [
    "MISSING_DOWNTIME",
    "NEGATIVE_DOWNTIME",
    "INVALID_EVENT_TIME",
    "INVALID_REPAIR_COST",
    "INVALID_STATUS",
]
assert clean["work_order_id"].is_unique
assert int(clean["downtime_min"].sum()) == 117
assert int(clean["repair_cost_cents"].sum()) == 72550
assert int(plant_profile.loc["A", "downtime_total"]) == 35
assert int(plant_profile.loc["B", "downtime_total"]) == 82

print("Shape:", df.shape)
print("Received = clean + duplicate + invalid:", received, "=", clean_count, "+", duplicate_count, "+", invalid_count)
print("Clean records:", clean["record_id"].tolist())
print("Duplicate quarantine:", duplicates[["record_id", "work_order_id"]].to_dict("records"))
print("Invalid exceptions:", list(zip(
    invalid["record_id"].tolist(), invalid["reason_code"].tolist()
)))
print("Clean downtime total:", int(clean["downtime_min"].sum()))
print("Clean repair cost cents:", int(clean["repair_cost_cents"].sum()))
print("Plant profile:")
print(plant_profile)
print("All missingness, dtype, duplicate, validation, and reconciliation tests passed.")`,
    questions: [
      "Why are raw blank indicators captured before numeric parsing?",
      "Which parsing failures become missing markers, and how are their reasons retained?",
      "Why does negative downtime pass numeric parsing but fail semantic validation?",
      "Why are downtime values stored as nullable Int64?",
      "What makes work_order_id the duplicate key rather than record_id?",
      "Why is duplicate detection restricted to rows that first passed field validation?",
      "Which rule selects the canonical WO-1007 record?",
      "Why is repair cost converted to integer cents for controlled totals?",
      "Which assertions prove outcome masks are mutually exclusive and exhaustive?",
      "Which exact IDs and totals prove the implementation matches the data-quality contract?",
    ],
    reflectionQuestions: [
      "Should an invalid cost reject the full row or only cost-based conclusions? Which downstream decision determines the answer?",
      "What additional evidence is needed before declaring two similar work orders duplicates rather than repeated maintenance events?",
      "How would late-arriving corrected versions change the earliest-ingestion survivor rule?",
    ],
    extension:
      "Add a correction table, multiple failure reasons per row, conflicting duplicate versions, conditional required fields, reference-data validation, and a time-aware survivor rule. Produce raw-to-clean lineage, quality metrics by plant and month, failed-rule counts, exact reconciliation, and versioned exports.",
  },

  guidedPractice: [
    { id: "gp-05-04-01", question: "A field is present in 920 of 1,000 applicable rows. What are completeness and missing rate?", answer: "Completeness is 920 ÷ 1,000 = 92%; missing rate is 80 ÷ 1,000 = 8%." },
    { id: "gp-05-04-02", question: "Why is an empty string different from zero and from pd.NA?", answer: "An empty string is present text with length zero, zero is a valid numerical value in many domains, and pd.NA represents missingness. Normalize only under an explicit source rule." },
    { id: "gp-05-04-03", question: "What is the difference between parsing and validation for the value -4?", answer: "-4 parses successfully as a number but can fail a semantic rule requiring downtime to be nonnegative." },
    { id: "gp-05-04-04", question: "What does duplicated(subset=[\"work_order_id\"], keep=False) identify?", answer: "It marks every row in each repeated work-order key cluster; it does not determine whether the repetition is erroneous or choose a justified survivor." },
    { id: "gp-05-04-05", question: "Why keep a missingness indicator after imputation?", answer: "It preserves evidence that the value was estimated, enables bias and performance analysis, and can capture informative missingness." },
    { id: "gp-05-04-06", question: "What three counts must reconcile in the lesson lab?", answer: "received = clean + duplicate quarantine + invalid quarantine, with the outcome masks mutually exclusive and collectively exhaustive." },
  ],

  independentPractice: [
    { id: "ip-05-04-01", difficulty: "Foundational", question: "Profile null counts and rates for each DataFrame column using an explicitly stated row denominator.", sampleAnswer: "Use isna().sum() and isna().mean(), then annotate fields whose denominator should exclude structurally inapplicable rows." },
    { id: "ip-05-04-02", difficulty: "Foundational", question: "Convert identifier, count, amount, flag, category, and timestamp fields to intentional pandas dtypes.", sampleAnswer: "Use string, Int64, Float64 or controlled cents, boolean, CategoricalDtype, and timezone-aware datetime; assert each dtype afterward." },
    { id: "ip-05-04-03", difficulty: "Applied", question: "Create separate masks for blank values, numeric conversion failures, and out-of-range parsed values.", sampleAnswer: "Capture source blank state, parse with coercion, define conversion_failure = source_nonblank & parsed.isna(), and define range failure only among parsed values." },
    { id: "ip-05-04-04", difficulty: "Applied", question: "Compare duplicate results using all columns, one business key, and a composite key.", sampleAnswer: "Report duplicate clusters and affected IDs for each definition, then explain which definition matches the declared row grain." },
    { id: "ip-05-04-05", difficulty: "Analytical", question: "Design a survivor policy for conflicting duplicate versions.", sampleAnswer: "Use trusted source priority, event/version time, completeness, validity, and deterministic tie keys; never silently combine conflicting values." },
    { id: "ip-05-04-06", difficulty: "Advanced", question: "Compare complete-case analysis, median imputation, and group-based imputation with sensitivity evidence.", sampleAnswer: "Fit parameters on training or approved reference data, retain indicators, compare populations and conclusions, and state assumptions and uncertainty." },
    { id: "ip-05-04-07", difficulty: "Professional", question: "Create a data-quality test suite and reconciliation report for an incoming monthly file.", sampleAnswer: "Test schema, dtypes, keys, null policy, categories, ranges, dates, cross-field rules, duplicates, exact exceptions, totals, thresholds, and source-to-output row balance." },
  ],

  commonMistakes: [
    { mistake: "Treating every blank, empty string, sentinel, and null as the same state.", correction: "Map source encodings to documented semantic states before analysis." },
    { mistake: "Filling all missing numeric values with zero.", correction: "Use zero only when it is the verified domain value; otherwise retain, recover, estimate with evidence, or route." },
    { mistake: "Dropping rows with any missing field.", correction: "Define required fields by decision and recognize structural or optional missingness." },
    { mistake: "Claiming MCAR, MAR, or MNAR from a simple null count.", correction: "Treat mechanisms as assumptions requiring domain reasoning, observed comparisons, and sensitivity analysis." },
    { mistake: "Using object dtype as proof that a field is valid text.", correction: "Inspect mixed values and convert to intentional string, numeric, Boolean, category, or datetime dtypes." },
    { mistake: "Using errors=\"coerce\" without recording failed source values.", correction: "Create conversion-failure masks and exception evidence before parsed defects disappear into nulls." },
    { mistake: "Confusing parse success with valid meaning.", correction: "Apply format, range, category, uniqueness, and cross-field rules after parsing." },
    { mistake: "Calling drop_duplicates without declaring a key.", correction: "State the row grain and choose exact, business, composite, or near-duplicate logic accordingly." },
    { mistake: "Assuming repeated keys are erroneous duplicates.", correction: "Investigate whether the grain permits repeated events, versions, or legitimate transactions." },
    { mistake: "Keeping the first duplicate because it appears first in an uncontrolled file.", correction: "Use trusted ordering, version, source, or event semantics plus a deterministic tie-breaker." },
    { mistake: "Overwriting raw values during correction.", correction: "Preserve the source field and write standardized values plus correction evidence." },
    { mistake: "Using one composite quality score to hide critical failures.", correction: "Publish component metrics and hard-stop controls alongside any weighted score." },
    { mistake: "Testing only the final clean row count.", correction: "Test exact IDs, reason codes, duplicate clusters, survivor mapping, totals, boundaries, and reconciliation." },
    { mistake: "Fitting imputation values before train-test separation.", correction: "Fit imputation parameters on training data only and freeze them for validation, test, and production." },
    { mistake: "Deduplicating before train-test split without entity and time reasoning.", correction: "Prevent the same entity or event from leaking across partitions using group-aware or time-aware design." },
  ],

  discussionQuestions: [
    "When should missingness remain a valid analytical category rather than be imputed?",
    "Which data-quality failures require hard rejection, warning, correction, or downstream field-level limitation?",
    "Who has authority to define a duplicate and approve a canonical record?",
    "When can an automated correction be safer than a manual correction?",
    "How should quality thresholds differ between exploration, financial reporting, safety monitoring, and model inference?",
    "Which exclusion and imputation metrics should be compared across relevant groups to detect unfair impact?",
  ],

  formativeAssessment: {
    totalPoints: 50,
    passingScore: 40,
    questions: [
      { id: "check-05-04-01", type: "missingness", points: 5, prompt: "Distinguish null, empty string, zero, sentinel, and structural missingness.", sampleAnswer: "Null represents absence, empty string is text of length zero, zero can be a real quantity, a sentinel is a coded state, and structural missingness means the field does not apply." },
      { id: "check-05-04-02", type: "mechanism", points: 5, prompt: "Explain MCAR, MAR, and MNAR and one limitation of using these labels.", sampleAnswer: "They describe assumptions about what drives missingness; observed data alone usually cannot prove the mechanism, so domain evidence and sensitivity analysis are required." },
      { id: "check-05-04-03", type: "dtype", points: 5, prompt: "Choose pandas dtypes for an ID, nullable count, nullable flag, ordered severity, and event time.", sampleAnswer: "Use string, Int64, boolean, ordered CategoricalDtype, and timezone-aware datetime respectively." },
      { id: "check-05-04-04", type: "parsing", points: 5, prompt: "Explain how to distinguish blanks, conversion failures, and range failures.", sampleAnswer: "Capture source blanks, parse nonblank text, flag nonblank-to-null conversions, then apply range rules only to successfully parsed values." },
      { id: "check-05-04-05", type: "duplicates", points: 5, prompt: "Compare exact, business-key, composite-key, and near duplicates.", sampleAnswer: "They match all compared fields, one domain key, a key combination, or approximate entity/event evidence respectively; each requires a different investigation and resolution policy." },
      { id: "check-05-04-06", type: "survivor", points: 5, prompt: "List the elements of a defensible duplicate survivor rule.", sampleAnswer: "Declared cluster key, trusted source priority, version or event time, completeness and validity criteria, deterministic tie-breaker, conflict handling, and retained lineage." },
      { id: "check-05-04-07", type: "metrics", points: 5, prompt: "Why can completeness be high while validity is low?", sampleAnswer: "Completeness measures presence; present values may still have invalid format, category, range, uniqueness, or cross-field relationships." },
      { id: "check-05-04-08", type: "ai", points: 5, prompt: "Explain how imputation can leak held-out information.", sampleAnswer: "If imputation parameters are computed using validation or test values, training transformations contain information from data intended to remain unseen." },
      { id: "check-05-04-09", type: "reconciliation", points: 5, prompt: "State and explain the cleaning row-balance equation.", sampleAnswer: "received = clean + duplicate quarantine + invalid quarantine; masks must be aligned, mutually exclusive, exhaustive, and supported by exact IDs." },
      { id: "check-05-04-10", type: "validation", points: 5, prompt: "Give eight tests required before publishing a cleaned work-order table.", sampleAnswer: "Test schema, dtypes, key nonnullness, key uniqueness, null policy, conversion failures, categories, ranges, cross-field rules, duplicate survivor mapping, exact exception IDs, totals, and row reconciliation; any eight earn full credit." },
    ],
  },

  researchExtension: {
    title: "Missingness, Duplicate Resolution, and Decision Sensitivity Study",
    researchQuestion:
      "How do alternative missing-data treatments and duplicate survivor policies change analytical conclusions, model performance, group impact, and auditability?",
    applicationOptions: [
      "Manufacturing work orders",
      "Financial transactions",
      "Student outcomes",
      "Healthcare operations",
      "Customer entity records",
      "Predictive-maintenance training data",
    ],
    task:
      "Create one controlled dataset with multiple missingness patterns, invalid values, exact duplicates, conflicting key duplicates, and legitimate repeated events. Compare at least three missing-data treatments and three duplicate policies while holding the declared business question constant.",
    requiredEvidence: [
      "Data contract, row grain, keys, units, requiredness, null meanings, and rule ownership",
      "Missingness profiles by variable, time, source, and at least one relevant group",
      "Conversion, semantic, and cross-field failure evidence",
      "Duplicate clusters with comparison fields and conflict descriptions",
      "Alternative treatments with exact affected IDs and frozen parameters",
      "Population, summary, model, or decision changes under each alternative",
      "Group-level exclusion or error comparison and ethical limitations",
      "Reproducible code, versions, tests, correction log, and reconciliation tables",
    ],
  },

  portfolioArtifact: {
    title: "Lesson 4 Portfolio Evidence: Audited Data-Quality Pipeline",
    description:
      "Build a reusable pandas pipeline that profiles raw records, parses intentional dtypes, validates contracts, resolves duplicates, publishes clean and quarantine outputs, and reconciles every source row.",
    requiredSections: [
      "README with decision, grain, keys, schema, null meanings, units, thresholds, ownership, setup, and limitations",
      "Immutable raw snapshot and source-to-output lineage identifiers",
      "Missingness, conversion, category, range, key, duplicate, and cross-field profiles",
      "Typed parsing functions that preserve original values and failure reasons",
      "Versioned validation rules with hard-error and warning severity",
      "Deterministic duplicate clustering, survivor mapping, and conflict quarantine",
      "Clean, invalid, duplicate, correction-log, metrics, and reconciliation outputs",
      "Automated tests for normal, boundary, missing, invalid, duplicate, conflict, and empty inputs",
    ],
    requiredEvidence: [
      "At least six intentional pandas dtypes including nullable and datetime types",
      "At least eight validation rules across schema, domain, key, and relationship dimensions",
      "At least two missingness treatments compared with sensitivity results",
      "Exact and business-key duplicate demonstrations",
      "Record-level old/new/reason evidence for every correction",
      "Exact expected clean, duplicate, and invalid IDs",
      "Row and important-amount reconciliation with quality thresholds",
      "Reproducible environment and no private or uncontrolled production data",
    ],
  },

  growthIndicators: [
    { title: "Missingness Investigator", description: "You distinguish absence states, examine mechanisms and group patterns, and document treatment assumptions." },
    { title: "Type and Contract Engineer", description: "You parse boundary text into intentional dtypes and validate format, meaning, ranges, categories, and relationships." },
    { title: "Duplicate Resolution Steward", description: "You define defensible keys, investigate clusters, apply deterministic survivor rules, and retain lineage." },
    { title: "Quality Evidence Publisher", description: "You deliver clean and quarantine data with component metrics, exact tests, correction logs, and reconciliation." },
  ],

  reflection: [
    "Which blank code in your current data has not been mapped to a clear meaning?",
    "Which zero may actually represent missing or failed conversion?",
    "Which object column contains mixed types or uncontrolled categories?",
    "Which parsing operation creates nulls without recording the source values?",
    "Which rule checks syntax but not business meaning?",
    "Which duplicate definition conflicts with the declared row grain?",
    "Which survivor rule depends on uncontrolled file order?",
    "Which correction overwrites raw evidence rather than preserving lineage?",
    "Which quality score hides a critical failed dimension?",
    "Which imputation or deduplication choice may leak information into an AI evaluation?",
  ],

  summary: [
    "Missing, invalid, zero, empty, unknown, suppressed, and not applicable are distinct states with different analytical meanings.",
    "Profile missingness by field, source, time, and relevant group before selecting a treatment.",
    "MCAR, MAR, and MNAR are assumption frameworks; observed data alone rarely proves the mechanism.",
    "Preserve raw values and use nullable, string, numeric, Boolean, categorical, and timezone-aware datetime dtypes intentionally.",
    "Capture original blank state and conversion failures before coercion hides them as missing values.",
    "Parsing tests representation; semantic validation tests whether parsed values are allowed and meaningful.",
    "Data contracts should define requiredness, dtypes, units, keys, formats, categories, ranges, relationships, freshness, and failure handling.",
    "Completeness and validity measure different dimensions: a present value can still be invalid.",
    "Exact, business-key, composite-key, and near duplicates require different evidence and policies.",
    "A repeated key is not automatically erroneous when the declared grain permits multiple events or versions.",
    "Duplicate resolution requires a deterministic survivor rule, conflict handling, and source-to-canonical lineage.",
    "Never overwrite raw evidence; publish standardized values and correction logs separately.",
    "Composite quality scores should never hide critical rule failures or component metrics.",
    "Test exact clean, duplicate, and invalid IDs—not only final counts.",
    "Reconcile received rows to mutually exclusive clean, duplicate-quarantine, and invalid-quarantine outcomes.",
    "For AI, fit imputation on training data only, prevent duplicate entities across splits, retain missingness indicators, and monitor production contracts.",
  ],

  previousLesson: {
    id: "data-ai-m05-l03",
    moduleNumber: 5,
    slug: "dataframes-series-indexing-and-filtering",
    title: "DataFrames, Series, Indexing, and Filtering",
  },
  nextLesson: null,

  lumineryGuidance: {
    message:
      "Preserve the raw evidence, name every missing and invalid state, resolve duplicates by governed meaning, and reconcile every record.",
    prompt:
      "Act as my senior data-quality engineer, pandas reviewer, and AI governance coach. Help me complete Module 5 Lesson 4 one verified gate at a time. Require row grain, source IDs, business keys, null meanings, intentional dtypes, original-value preservation, conversion-failure masks, semantic and cross-field constraints, duplicate-cluster evidence, deterministic survivor rules, correction logs, clean and quarantine outputs, component quality metrics, exact identifier tests, amount and row reconciliation, training-only imputation, and leakage prevention. Do not let me fill missing values with zero by convenience, hide coercion failures, treat parse success as validity, drop duplicates without a key, keep the first uncontrolled row, overwrite raw data, or approve a pipeline with unexplained record loss.",
    coachingQuestions: [
      "What does this missing state mean?",
      "Was the source value blank, invalid text, or a parsed value outside the domain?",
      "Which dtype best preserves this field's meaning?",
      "Which rule owns this failure and what is its reason code?",
      "What declared key makes these records duplicates?",
      "Are they exact replays, conflicting versions, or legitimate repeated events?",
      "Why is this survivor preferred, and is the rule deterministic?",
      "Which raw value and lineage evidence remain after correction?",
      "Which exact IDs and totals prove complete reconciliation?",
    ],
  },
};

export default lesson04;
