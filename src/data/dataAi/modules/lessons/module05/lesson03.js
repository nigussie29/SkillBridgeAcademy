const lesson03 = {
  id: "data-ai-m05-l03",
  courseId: "data-ai-foundations",
  moduleId: "data-ai-foundations-module-05",
  moduleNumber: 5,
  lessonNumber: 3,
  slug: "dataframes-series-indexing-and-filtering",
  title: "DataFrames, Series, Indexing, and Filtering",
  shortTitle: "DataFrames, Series, Indexing, and Filtering",
  subtitle:
    "Build trustworthy pandas tables with explicit grain, keys, labels, dtypes, selection rules, safe assignment, reproducible sorting, and reconciliation controls.",
  status: "available",
  duration: "4–5 hours",
  level: "Beginner to Professional",

  essentialQuestion:
    "How can pandas turn raw records into clearly indexed, correctly filtered, and auditable analytical evidence?",
  bigIdea:
    "A DataFrame is a labeled data model, not just a spreadsheet in Python. Reliable analysis begins by declaring what one row represents, protecting identifiers, choosing intentional dtypes, and proving that every selection preserves the correct population and alignment.",

  whyThisLessonExists: {
    title: "A Filter Changes the Population—and Therefore the Meaning",
    introduction:
      "pandas is the central Python library for working with tabular data. It combines NumPy-powered computation with row and column labels, missing-value support, rich dtypes, time-aware operations, and expressive selection tools.",
    centralProblem:
      "A manufacturing analyst receives incident records from two plants. Some rows have missing downtime, invalid negative values, or failed sensor-quality checks. A quick filter produces a clean-looking report, but invalid records disappear without explanation, identifiers are accidentally used as row positions, and an assignment modifies only a temporary subset. The resulting totals cannot be reconciled to the source.",
    purpose:
      "This lesson teaches Series and DataFrame construction, indexes, label and position selection, Boolean filtering, membership and range rules, string and datetime accessors, sorting, safe assignment, copies, method chaining, dtype inspection, key validation, exception retention, and row-balance controls. The goal is not merely to retrieve rows; it is to create evidence whose population and meaning can be explained.",
  },

  problemFirst: {
    title: "Opening Investigation: Which Incidents Belong in the Maintenance Queue?",
    scenario:
      "Ten work-order incidents arrive from Plants A and B. Each record should have one unique incident ID, one asset, a parseable event timestamp, nonnegative downtime, an allowed severity, and a passing sensor-quality flag. Leadership wants a plant comparison and a ranked review queue while retaining every rejected row with a reason.",
    questions: [
      "What does one row represent, and what uniquely identifies it?",
      "Which columns are labels, categories, quantities, Boolean controls, or timestamps?",
      "Should incident ID become the DataFrame index or remain an explicit column?",
      "How are .loc and .iloc different when an index label happens to look like a number?",
      "Which Boolean conditions define a valid record, and what happens at exact boundaries?",
      "How will invalid rows remain visible for correction and audit?",
      "Which columns must travel together when filtering and sorting?",
      "Which tests prove that the filtered report contains the intended population and no duplicated incident?",
    ],
    expectedInsight:
      "Filtering is a governed population decision. The analyst must preserve row identity, state every condition, retain exceptions, and reconcile all received rows to one terminal outcome.",
  },

  visualModels: [
    {
      id: "pandas-table-reasoning-cycle",
      type: "lifecycle",
      title: "The Governed DataFrame Reasoning Cycle",
      description:
        "Move from records to decisions while keeping grain, identifiers, types, and populations visible.",
      stages: [
        { label: "1. Declare", detail: "State the row grain, source, business key, units, and intended analytical population." },
        { label: "2. Construct", detail: "Create the DataFrame and parse identifiers, categories, numbers, Booleans, and timestamps intentionally." },
        { label: "3. Inspect", detail: "Review shape, columns, dtypes, key uniqueness, missingness, ranges, and representative rows." },
        { label: "4. Select", detail: "Choose rows and columns with explicit labels, positions, masks, membership, and boundary rules." },
        { label: "5. Transform", detail: "Assign derived fields safely, sort reproducibly, and keep identifiers aligned with values." },
        { label: "6. Validate", detail: "Test schema, populations, row balance, exceptions, expected records, and output order." },
      ],
      feedback:
        "When a report changes unexpectedly, inspect index labels, mask alignment, parentheses, null behavior, copy ownership, and the exact number of rows before and after each gate.",
      interpretation:
        "A trustworthy DataFrame is a documented set of labeled observations whose transformations can be traced and tested.",
    },
    {
      id: "pandas-selection-map",
      type: "lifecycle",
      title: "Selection Map: Label, Position, or Condition?",
      description:
        "Choose the selector according to meaning rather than convenience.",
      stages: [
        { label: "Labels", detail: "Use .loc[row_labels, column_labels] when names and index labels express the intended selection." },
        { label: "Positions", detail: "Use .iloc[row_positions, column_positions] when ordinal location is truly the requirement." },
        { label: "Conditions", detail: "Use an aligned Boolean Series for rule-based populations such as valid, Plant A, or downtime ≥ 30." },
        { label: "Scalars", detail: "Use .at or .iat for one labeled or positional value when scalar access is the clear intent." },
        { label: "Proof", detail: "Check selected IDs, columns, row counts, index alignment, and boundary cases—not only the printed values." },
      ],
      feedback:
        "Do not assume .loc stop labels behave like Python slice stops: label slices normally include the stop label, while .iloc position slices exclude the stop position.",
      interpretation:
        "Selection syntax encodes the population definition; choosing the wrong selector can return plausible but incorrect records.",
    },
  ],

  learningObjectives: [
    "Explain the relationship among pandas, NumPy, Series, DataFrame, Index, and column labels.",
    "Declare observation grain, business keys, units, source, and eligible population before analysis.",
    "Construct Series and DataFrames from dictionaries, records, and NumPy arrays without losing meaning.",
    "Inspect shape, columns, index, dtypes, memory, missingness, uniqueness, and representative values.",
    "Choose nullable integer, floating, Boolean, string, categorical, and datetime dtypes intentionally.",
    "Distinguish row labels from row positions and use .loc, .iloc, .at, and .iat correctly.",
    "Select columns as Series or DataFrames and predict the resulting dimensionality.",
    "Create aligned Boolean masks with comparisons, &, |, ~, isin, between, string methods, and datetime accessors.",
    "Handle missing Boolean conditions explicitly instead of silently changing the selected population.",
    "Filter rows while retaining identifiers and rejected records with reason codes.",
    "Sort by multiple columns with explicit ascending rules, missing-value placement, and stable tie behavior.",
    "Create derived columns with .loc or .assign without chained-indexing ambiguity.",
    "Explain index alignment and prevent accidental arithmetic or assignment misalignment.",
    "Write readable method chains with named checkpoints when validation is required.",
    "Build and test an audited maintenance-incident selection and prioritization pipeline.",
  ],

  prerequisiteKnowledge: [
    "Module 5 Lesson 1: Python values, collections, conditions, functions, exceptions, and assertions",
    "Module 5 Lesson 2: NumPy arrays, dtypes, shapes, Boolean masks, vectorization, and reductions",
    "Module 2: descriptive statistics and governed treatment of unusual observations",
    "Module 4: row grain, primary keys, typed fields, reason-coded exceptions, and reconciliation",
    "Python with pandas and NumPy installed; the computational lab uses import pandas as pd and import numpy as np",
  ],

  vocabulary: [
    { term: "pandas", definition: "The Python library for labeled tabular and time-series data analysis, built largely on NumPy." },
    { term: "Series", definition: "A one-dimensional labeled pandas object with an index, values, name, and dtype." },
    { term: "DataFrame", definition: "A two-dimensional labeled table whose columns may have different dtypes." },
    { term: "Index", definition: "The immutable sequence of row labels used for selection, alignment, and identification inside pandas operations." },
    { term: "RangeIndex", definition: "The common default integer index representing sequential row labels such as 0 through n − 1." },
    { term: "Row label", definition: "A value in the DataFrame index used by label-based selection; it is not necessarily a row position." },
    { term: "Column label", definition: "A column name used to identify a Series within a DataFrame." },
    { term: "Observation grain", definition: "The precise meaning of one row, such as one incident, one device-hour, or one student-assessment attempt." },
    { term: "Business key", definition: "One column or a combination of columns expected to uniquely identify an observation in the business domain." },
    { term: "Schema", definition: "The expected fields, names, dtypes, constraints, and relationships of a dataset." },
    { term: "dtype", definition: "A column's stored data type, which influences valid values, missingness, memory, and operations." },
    { term: "Nullable dtype", definition: "A pandas extension dtype such as Int64, boolean, or string that can represent pd.NA." },
    { term: "object dtype", definition: "A general Python-object storage dtype that can conceal mixed types and should be inspected carefully." },
    { term: "Categorical dtype", definition: "A compact dtype for a defined or repeated set of categories, optionally with meaningful order." },
    { term: "Timestamp", definition: "A pandas value representing a point in time, potentially with timezone information." },
    { term: "NaT", definition: "The missing-value marker for datetime-like data." },
    { term: "pd.NA", definition: "pandas' scalar missing marker used by nullable extension dtypes." },
    { term: "Index alignment", definition: "pandas behavior that matches Series and DataFrame values by labels during arithmetic, comparison, and assignment." },
    { term: "Label-based indexing", definition: "Selecting by index and column labels, primarily through .loc." },
    { term: "Position-based indexing", definition: "Selecting by zero-based ordinal positions, primarily through .iloc." },
    { term: ".loc", definition: "The label-based indexer for rows and columns; it also accepts aligned Boolean masks." },
    { term: ".iloc", definition: "The integer-position indexer for rows and columns, using Python-style exclusive slice stops." },
    { term: ".at", definition: "A label-based accessor optimized for one scalar value." },
    { term: ".iat", definition: "A position-based accessor optimized for one scalar value." },
    { term: "Boolean mask", definition: "A True/False Series aligned to rows and used to define a selected population." },
    { term: "Vectorized comparison", definition: "A comparison applied across a whole Series, returning one Boolean result per aligned element." },
    { term: "Membership filter", definition: "A condition built with .isin that tests whether values belong to an approved or requested set." },
    { term: "Range filter", definition: "A boundary condition often expressed with .between or explicit comparisons." },
    { term: "String accessor", definition: "The .str namespace for vectorized string operations that preserve Series alignment." },
    { term: "Datetime accessor", definition: "The .dt namespace for vectorized datetime components and properties." },
    { term: "query", definition: "A DataFrame method that filters rows using a readable expression evaluated against column names." },
    { term: "sort_values", definition: "A method that orders rows by one or more columns with explicit direction and missing-value placement." },
    { term: "Stable sort", definition: "A sort that preserves original order among tied values, useful for deterministic outputs." },
    { term: "Chained indexing", definition: "Sequential bracket selections such as df[mask][column] whose assignment behavior can be ambiguous or ineffective." },
    { term: "Copy", definition: "An independently owned DataFrame or Series used when later mutation must not depend on a parent selection." },
    { term: "Safe assignment", definition: "Writing values through a single explicit .loc selection or creating columns with .assign." },
    { term: "Method chaining", definition: "Passing a DataFrame through a readable sequence of methods, usually one transformation per line." },
    { term: "assign", definition: "A method that returns a DataFrame with new or replaced columns, supporting chain-friendly transformations." },
    { term: "pipe", definition: "A method that sends a pandas object into a named function, making reusable transformations readable in a chain." },
    { term: "Row reconciliation", definition: "A control proving that every received row is retained in exactly one explained outcome." },
  ],

  formulas: [
    { id: "dataframe-shape", name: "DataFrame shape", formula: "shape = (number of rows, number of columns)", meaning: "The first dimension counts observations and the second counts fields.", requirement: "State the observation grain before interpreting the row count." },
    { id: "filter-mask", name: "Filtered population", formula: "selected = df.loc[condition, columns]", meaning: "The condition defines eligible rows while columns define retained evidence.", requirement: "The Boolean condition must align to df.index and missing truth values need an explicit policy." },
    { id: "and-rule", name: "Combined AND rule", formula: "M = M₁ & M₂ & … & Mₖ", meaning: "A row is selected only when all required conditions are True.", requirement: "Parenthesize each comparison and test exact boundary values." },
    { id: "or-rule", name: "Combined OR rule", formula: "M = M₁ | M₂ | … | Mₖ", meaning: "A row is selected when at least one approved condition is True.", requirement: "Combine the rule with a valid-row gate when invalid data must never enter classification." },
    { id: "selection-rate", name: "Selection rate", formula: "selection rate = selected rows ÷ eligible rows", meaning: "Reports the share of the declared eligible population meeting a filter.", requirement: "Never use received rows as the denominator unless all received rows are eligible." },
    { id: "eligible-mean", name: "Eligible mean", formula: "x̄ = Σᵢ∈E xᵢ ÷ |E|", meaning: "The mean uses only rows in the documented eligible set E.", requirement: "Report exclusions and do not let default missing-value behavior define E silently." },
    { id: "key-uniqueness", name: "Key uniqueness", formula: "unique key count = row count", meaning: "A candidate business key identifies every row exactly once.", requirement: "Also test that key fields are nonmissing and valid—not only unique." },
    { id: "row-reconciliation", name: "Outcome reconciliation", formula: "received = valid + invalid = OK + REVIEW + INVALID", meaning: "Every source record reaches one mutually exclusive terminal outcome.", requirement: "Outcome masks must be aligned, collectively exhaustive, and pairwise nonoverlapping." },
  ],

  workedExamples: [
    {
      id: "example-05-03-01",
      title: "Construct a Series with meaningful labels",
      problem: "Create downtime values for incidents I-101, I-102, and I-103 without confusing values and identifiers.",
      solutionSteps: [
        "Create pd.Series([4, 12, 55], index=[\"I-101\", \"I-102\", \"I-103\"], name=\"downtime_min\", dtype=\"Int64\").",
        "Inspect index, name, dtype, and is_unique.",
        "Select I-102 by label with .loc and the second position with .iloc.",
      ],
      answer: ".loc[\"I-102\"] and .iloc[1] both return 12 in this specific Series, but they express different intentions.",
      interpretation: "Labels identify business observations; positions describe current physical ordering and can change after filtering or sorting.",
    },
    {
      id: "example-05-03-02",
      title: "Predict Series versus DataFrame output",
      problem: "Compare df[\"downtime_min\"] with df[[\"downtime_min\"]].",
      solutionSteps: [
        "Single brackets with one column label return a Series.",
        "Double brackets with a list of labels return a one-column DataFrame.",
        "Inspect ndim and shape before passing the result into downstream code.",
      ],
      answer: "The Series has shape (n,), while the one-column DataFrame has shape (n, 1).",
      interpretation: "The values may print similarly, but dimensionality affects merges, model inputs, methods, and validation.",
    },
    {
      id: "example-05-03-03",
      title: "Separate labels from positions",
      problem: "A DataFrame has incident IDs as its index. Select labels I-103 through I-105, then select positions 2 through 4.",
      solutionSteps: [
        "Use df.loc[\"I-103\":\"I-105\"] for the label slice.",
        "Use df.iloc[2:5] for positions 2, 3, and 4.",
        "Remember that a .loc label slice normally includes its stop label while .iloc excludes its stop position.",
      ],
      answer: "The two selections match only if the sorted index places those labels in positions 2–4.",
      interpretation: "Never substitute position logic for entity identity merely because the current order makes the outputs look equal.",
    },
    {
      id: "example-05-03-04",
      title: "Build a multi-condition maintenance filter",
      problem: "Select valid Plant A incidents with downtime at least 30 minutes or severity high.",
      solutionSteps: [
        "Create plant_a = df[\"plant\"].eq(\"A\").",
        "Create priority_rule = df[\"downtime_min\"].ge(30) | df[\"severity\"].eq(\"high\").",
        "Combine valid_row & plant_a & priority_rule with parentheses around comparisons.",
        "Select incident_id, asset_id, downtime_min, severity, and reason_code with .loc.",
      ],
      answer: "queue = df.loc[df[\"valid_row\"] & plant_a & priority_rule, required_columns].copy()",
      interpretation: "The valid-row gate prevents a high severity label from admitting a record that failed the data contract.",
    },
    {
      id: "example-05-03-05",
      title: "Assign without chained indexing",
      problem: "Set status to REVIEW for valid rows with downtime at least 30 minutes.",
      solutionSteps: [
        "Initialize df[\"status\"] = \"INVALID\".",
        "Set valid nonreview rows with df.loc[ok_mask, \"status\"] = \"OK\".",
        "Set review rows with df.loc[review_mask, \"status\"] = \"REVIEW\".",
        "Avoid df[df[\"valid_row\"]][\"status\"] = ... because it may target a temporary object.",
      ],
      answer: "One .loc operation specifies both the rows and the target column unambiguously.",
      interpretation: "Safe assignment is an ownership and auditability decision, not merely a warning-suppression technique.",
    },
    {
      id: "example-05-03-06",
      title: "Sort a queue reproducibly",
      problem: "Rank review incidents by severity, downtime descending, then incident ID ascending.",
      solutionSteps: [
        "Convert severity to an ordered categorical dtype or create an explicit numeric severity rank.",
        "Call sort_values with all columns and ascending directions stated.",
        "Use kind=\"stable\" so unresolved ties preserve prior order.",
        "Reset the display index only when the business identifier remains an explicit column.",
      ],
      answer: "priority = queue.sort_values([\"severity_rank\", \"downtime_min\", \"incident_id\"], ascending=[False, False, True], kind=\"stable\")",
      interpretation: "Deterministic tie rules make reports testable and prevent unexplained row movement between runs.",
    },
  ],

  interactiveExploration: {
    title: "Predict the Rows, Columns, Index, Shape, and Type",
    description:
      "Before running each expression, write the expected object type, index labels, column labels, shape, and included incident IDs.",
    steps: [
      "Create a five-row DataFrame whose index labels are [10, 20, 30, 40, 50].",
      "Compare df.loc[20], df.iloc[1], df.loc[20:40], and df.iloc[1:4].",
      "Compare df[\"severity\"] and df[[\"severity\"]].",
      "Build masks with eq, isin, between, isna, str.startswith, and dt.hour.",
      "Add one condition at a time and record how the selected row count changes.",
      "Sort the table, then compare selection by label and position again.",
      "Create a shuffled Boolean Series with the same labels and observe pandas index alignment.",
    ],
    questions: [
      "When did labels and positions produce different records?",
      "Which selection reduced dimensionality from two dimensions to one?",
      "Which mask introduced a missing Boolean result, and how should it be handled?",
      "Did the shuffled mask align by label or by current display order?",
      "Which filter boundary admitted an exact value of 30?",
    ],
    expectedDiscovery:
      "pandas operations preserve and align labels. This power is useful only when indexes are meaningful, unique where required, and explicitly tested.",
  },

  realWorldApplications: [
    { field: "Manufacturing and Robotics", application: "Filter incident, sensor, maintenance, and quality records by asset, time, validity, severity, and threshold while preserving exception evidence." },
    { field: "Business Intelligence", application: "Define report populations, prepare dimensions and facts, verify keys, and create reproducible extracts for Power BI." },
    { field: "Finance", application: "Select accounts, transactions, reporting periods, and risk categories while retaining stable identifiers and audit trails." },
    { field: "Education", application: "Filter student-level evidence by course, term, assessment status, and eligibility without confusing missing scores with zeros." },
    { field: "Healthcare Operations", application: "Select operational encounters by governed time windows and quality rules while protecting identifiers and privacy." },
    { field: "AI and Machine Learning", application: "Define training populations, select feature and target columns, exclude invalid examples, and preserve row identity through preprocessing." },
  ],

  aiConnection: {
    title: "Every AI Dataset Begins as a Population Selection",
    explanation:
      "Before model training, a team chooses which rows are eligible, which columns are inputs, which field is the target, and how missing or invalid records are handled. pandas commonly performs those choices. A small indexing or filtering error can create leakage, target contamination, duplicated entities, unfair exclusions, or train-serving mismatch.",
    example:
      "For predictive maintenance, the feature table should contain only measurements available before the prediction timestamp. Filtering incidents after failure, selecting a future status column, or retaining multiple rows from the same asset across random train-test splits can make model performance look better than deployment reality.",
    uses: [
      "Training-population eligibility",
      "Feature and target selection",
      "Entity and timestamp alignment",
      "Reason-coded exclusion analysis",
      "Cohort fairness comparison",
      "Reproducible train, validation, and test datasets",
    ],
    caution:
      "A DataFrame with the right number of rows can still be wrong. Verify entity keys, event time, feature availability, target definition, duplicated observations, label alignment, and exclusion rates by relevant groups.",
    reflectionQuestion:
      "Which exact pandas filter defines your model's training population, and what evidence proves that it uses only information available at prediction time?",
  },

  pythonLab: {
    title: "Audited Maintenance-Incident Selection and Priority Queue",
    objective:
      "Use pandas to type, validate, filter, classify, sort, summarize, and reconcile ten manufacturing incidents while retaining three invalid records with explicit reasons.",
    code: `import numpy as np
import pandas as pd

raw_incidents = [
    {"incident_id": "I-001", "plant": "A", "asset_id": "R-101", "occurred_at": "2026-09-01 08:00", "downtime_min": "4",  "severity": "LOW",    "sensor_valid": True},
    {"incident_id": "I-002", "plant": "A", "asset_id": "R-102", "occurred_at": "2026-09-01 09:15", "downtime_min": "12", "severity": "MEDIUM", "sensor_valid": True},
    {"incident_id": "I-003", "plant": "A", "asset_id": "R-103", "occurred_at": "2026-09-01 10:30", "downtime_min": "55", "severity": "HIGH",   "sensor_valid": True},
    {"incident_id": "I-004", "plant": "B", "asset_id": "R-201", "occurred_at": "2026-09-01 11:00", "downtime_min": "8",  "severity": "LOW",    "sensor_valid": True},
    {"incident_id": "I-005", "plant": "B", "asset_id": "R-202", "occurred_at": "2026-09-01 12:20", "downtime_min": "",   "severity": "MEDIUM", "sensor_valid": True},
    {"incident_id": "I-006", "plant": "A", "asset_id": "R-104", "occurred_at": "2026-09-01 13:10", "downtime_min": "18", "severity": "MEDIUM", "sensor_valid": False},
    {"incident_id": "I-007", "plant": "B", "asset_id": "R-203", "occurred_at": "2026-09-01 14:45", "downtime_min": "7",  "severity": "LOW",    "sensor_valid": True},
    {"incident_id": "I-008", "plant": "B", "asset_id": "R-204", "occurred_at": "2026-09-01 15:25", "downtime_min": "-3", "severity": "HIGH",   "sensor_valid": True},
    {"incident_id": "I-009", "plant": "A", "asset_id": "R-105", "occurred_at": "2026-09-01 16:05", "downtime_min": "35", "severity": "HIGH",   "sensor_valid": True},
    {"incident_id": "I-010", "plant": "B", "asset_id": "R-205", "occurred_at": "2026-09-01 17:40", "downtime_min": "10", "severity": "LOW",    "sensor_valid": True},
]

df = pd.DataFrame.from_records(raw_incidents)
received = len(df)

# Parse boundary data deliberately while preserving original identifiers.
df = df.assign(
    incident_id=df["incident_id"].astype("string").str.strip(),
    plant=df["plant"].astype("string").str.strip().str.upper(),
    asset_id=df["asset_id"].astype("string").str.strip(),
    occurred_at=pd.to_datetime(df["occurred_at"], errors="coerce", utc=True),
    downtime_min=pd.to_numeric(df["downtime_min"], errors="coerce").astype("Float64"),
    severity=df["severity"].astype("string").str.strip().str.lower(),
    sensor_valid=df["sensor_valid"].astype("boolean"),
)

assert df.shape == (10, 7)
assert df["incident_id"].notna().all()
assert df["incident_id"].is_unique

allowed_plants = {"A", "B"}
allowed_severities = {"low", "medium", "high"}

id_ok = df["incident_id"].notna() & df["incident_id"].ne("")
plant_ok = df["plant"].isin(allowed_plants)
asset_ok = df["asset_id"].notna() & df["asset_id"].ne("")
time_ok = df["occurred_at"].notna()
downtime_present = df["downtime_min"].notna()
downtime_nonnegative = df["downtime_min"].ge(0).fillna(False)
severity_ok = df["severity"].isin(allowed_severities)
sensor_ok = df["sensor_valid"].fillna(False)

valid_mask = (
    id_ok
    & plant_ok
    & asset_ok
    & time_ok
    & downtime_present
    & downtime_nonnegative
    & severity_ok
    & sensor_ok
)

df["valid_row"] = valid_mask.astype("boolean")
df["reason_code"] = pd.Series("VALID", index=df.index, dtype="string")
df.loc[~downtime_present, "reason_code"] = "MISSING_DOWNTIME"
df.loc[downtime_present & ~downtime_nonnegative, "reason_code"] = "NEGATIVE_DOWNTIME"
df.loc[~sensor_ok, "reason_code"] = "SENSOR_QUALITY_FAILED"

# Classify only governed valid rows.
review_mask = valid_mask & (
    df["downtime_min"].ge(30).fillna(False)
    | df["severity"].eq("high").fillna(False)
)
ok_mask = valid_mask & ~review_mask
invalid_mask = ~valid_mask

df["status"] = pd.Series("INVALID", index=df.index, dtype="string")
df.loc[ok_mask, "status"] = "OK"
df.loc[review_mask, "status"] = "REVIEW"

severity_dtype = pd.CategoricalDtype(
    categories=["low", "medium", "high"], ordered=True
)
df["severity"] = df["severity"].astype(severity_dtype)

report_columns = [
    "incident_id", "plant", "asset_id", "occurred_at",
    "downtime_min", "severity", "status", "reason_code",
]

valid = df.loc[valid_mask, report_columns].copy()
exceptions = df.loc[invalid_mask, report_columns].copy()
review_queue = (
    df.loc[review_mask, report_columns]
    .sort_values(
        ["severity", "downtime_min", "incident_id"],
        ascending=[False, False, True],
        kind="stable",
    )
    .reset_index(drop=True)
)

plant_profile = (
    valid.groupby("plant", observed=True)["downtime_min"]
    .agg(count="count", total="sum", mean="mean", median="median", maximum="max")
    .sort_index()
)

# Reconciliation and expected-result tests.
valid_count = int(valid_mask.sum())
invalid_count = int(invalid_mask.sum())
ok_count = int(ok_mask.sum())
review_count = int(review_mask.sum())

assert valid_count == 7
assert invalid_count == 3
assert ok_count == 5
assert review_count == 2
assert received == valid_count + invalid_count
assert received == ok_count + review_count + invalid_count
assert not (ok_mask & review_mask).any()
assert df.loc[review_mask, "incident_id"].tolist() == ["I-003", "I-009"]
assert exceptions["incident_id"].tolist() == ["I-005", "I-006", "I-008"]
assert exceptions["reason_code"].tolist() == [
    "MISSING_DOWNTIME",
    "SENSOR_QUALITY_FAILED",
    "NEGATIVE_DOWNTIME",
]
assert review_queue["incident_id"].tolist() == ["I-003", "I-009"]
assert np.isclose(valid["downtime_min"].mean(), 131 / 7)
assert np.isclose(plant_profile.loc["A", "mean"], 26.5)
assert np.isclose(plant_profile.loc["B", "mean"], 25 / 3)

print("Shape:", df.shape)
print("Received = valid + invalid:", received, "=", valid_count, "+", invalid_count)
print("Received = OK + REVIEW + INVALID:", received, "=", ok_count, "+", review_count, "+", invalid_count)
print("Review queue:", review_queue["incident_id"].tolist())
print("Exceptions:", list(zip(
    exceptions["incident_id"].tolist(),
    exceptions["reason_code"].tolist(),
)))
print("Plant profile:\\n", plant_profile.round(2))
print("All pandas schema, indexing, filtering, assignment, sorting, and reconciliation tests passed.")`,
    questions: [
      "What does one row represent, and which field is the business key?",
      "Why are incident IDs kept as strings even though they contain digits?",
      "Which dtype is assigned to downtime, sensor validity, timestamp, and severity?",
      "Why does downtime_nonnegative use fillna(False)?",
      "Why must review_mask include valid_mask?",
      "Which selection creates an independent copy for later analysis?",
      "How does the ordered categorical dtype affect severity sorting?",
      "Why does sort_values include incident_id after severity and downtime?",
      "Which assertions test exact membership rather than only counts?",
      "Which equation proves that every received incident reaches one terminal status?",
    ],
    reflectionQuestions: [
      "Should failed sensor quality invalidate the full incident or only sensor-derived fields? Who owns that policy?",
      "How should two simultaneous records with the same incident ID be investigated instead of automatically deduplicated?",
      "Which timestamps and timezones are required to prevent future information from entering a predictive-maintenance dataset?",
    ],
    extension:
      "Add 100 timestamped incidents, multiple reason codes per row, a governed analysis window, plant and asset eligibility tables, and a prior-only feature cutoff. Compare .loc, query, and method-chain implementations for identical selected IDs, then export valid, exception, and reconciliation tables.",
  },

  guidedPractice: [
    { id: "gp-05-03-01", question: "What is the output type and shape of df[\"downtime_min\"] when df has 10 rows?", answer: "It is a Series with shape (10,). Use df[[\"downtime_min\"]] for a one-column DataFrame with shape (10, 1)." },
    { id: "gp-05-03-02", question: "How do .loc[2:5] and .iloc[2:5] differ when the index uses integer labels?", answer: ".loc uses labels and normally includes label 5; .iloc uses positions and excludes position 5. The selected rows can therefore differ." },
    { id: "gp-05-03-03", question: "Write a filter for Plants A or C with downtime from 10 through 30 minutes, inclusive.", answer: "mask = df[\"plant\"].isin([\"A\", \"C\"]) & df[\"downtime_min\"].between(10, 30, inclusive=\"both\")." },
    { id: "gp-05-03-04", question: "Why is df[df[\"plant\"] == \"A\"][\"status\"] = \"OK\" unsafe?", answer: "It uses chained indexing and may assign to a temporary object. Use df.loc[df[\"plant\"].eq(\"A\"), \"status\"] = \"OK\"." },
    { id: "gp-05-03-05", question: "What does index alignment mean when assigning a Series to a DataFrame column?", answer: "pandas matches values by index label, not merely by current order. Missing or mismatched labels can create missing values or place values on unintended rows." },
    { id: "gp-05-03-06", question: "Why should a filtered report retain incident_id even when it is also the index?", answer: "An explicit identifier survives resets, exports, joins, and human review more clearly; retaining it avoids depending on index metadata alone." },
  ],

  independentPractice: [
    { id: "ip-05-03-01", difficulty: "Foundational", question: "Create a four-row DataFrame from records and report shape, columns, index, dtypes, missing counts, and key uniqueness.", sampleAnswer: "Use DataFrame.from_records, then inspect shape, columns.tolist(), index, dtypes, isna().sum(), and key.notna().all() & key.is_unique." },
    { id: "ip-05-03-02", difficulty: "Foundational", question: "Select rows 1 through 3 and columns 0 and 2 by position, then select the same business fields by label.", sampleAnswer: "Use df.iloc[1:4, [0, 2]] and df.loc[df.index[1:4], [first_column_name, third_column_name]], then verify identifiers." },
    { id: "ip-05-03-03", difficulty: "Applied", question: "Filter records from approved plants whose downtime is nonmissing and at least 15 minutes.", sampleAnswer: "approved = df[\"plant\"].isin(allowed); mask = approved & df[\"downtime_min\"].notna() & df[\"downtime_min\"].ge(15)." },
    { id: "ip-05-03-04", difficulty: "Applied", question: "Create morning_shift from a timezone-aware timestamp and assign it safely.", sampleAnswer: "df = df.assign(morning_shift=df[\"occurred_at\"].dt.hour.between(6, 13, inclusive=\"left\")); document timezone and boundary policy." },
    { id: "ip-05-03-05", difficulty: "Analytical", question: "Design a deterministic sort for a maintenance queue with severity, downtime, event time, and incident ID.", sampleAnswer: "Use an ordered severity category and sort by severity/downtime descending, then event time and incident ID ascending with a stable algorithm." },
    { id: "ip-05-03-06", difficulty: "Advanced", question: "Demonstrate index-alignment risk by assigning a shuffled Series, then repair it.", sampleAnswer: "Show label-based assignment, assert index equality or reindex explicitly, and never use to_numpy merely to silence a label mismatch without proving order." },
    { id: "ip-05-03-07", difficulty: "Professional", question: "Create automated tests for a training-population filter using entity IDs and event timestamps.", sampleAnswer: "Test schema, key uniqueness, cutoff inclusion, no future features, exact expected IDs, group exclusion rates, no target leakage, nonempty result, row reconciliation, and reproducibility." },
  ],

  commonMistakes: [
    { mistake: "Treating the default index as a permanent business identifier.", correction: "Preserve explicit source keys and define whether the DataFrame index has business meaning." },
    { mistake: "Confusing integer labels with integer positions.", correction: "Use .loc for labels and .iloc for positions; test selected identifiers after either operation." },
    { mistake: "Forgetting that a .loc label slice usually includes its stop label.", correction: "Write boundary examples and compare with .iloc's exclusive positional stop." },
    { mistake: "Expecting one-column and double-bracket selection to return the same object type.", correction: "Predict Series (n,) versus DataFrame (n, 1) and validate what downstream code requires." },
    { mistake: "Using Python and, or, or not with Series conditions.", correction: "Use parenthesized &, |, and ~ expressions or named Boolean masks." },
    { mistake: "Omitting parentheses around vectorized comparisons.", correction: "Parenthesize each comparison before combining conditions to make precedence explicit." },
    { mistake: "Letting pd.NA remain unresolved inside a selection rule.", correction: "Define whether missing truth means invalid, excluded, retained for review, or handled separately." },
    { mistake: "Dropping invalid rows before recording their identifiers and reasons.", correction: "Create an exception table first and reconcile it to the source population." },
    { mistake: "Using chained indexing for assignment.", correction: "Use one .loc[row_mask, column] assignment or .assign on an intentionally owned DataFrame." },
    { mistake: "Calling reset_index(drop=True) and losing the only record identifier.", correction: "Keep the business key as an explicit column before replacing display labels." },
    { mistake: "Assuming Series assignment follows display order.", correction: "pandas aligns by index label; assert index compatibility or reindex deliberately." },
    { mistake: "Using object dtype without inspecting mixed Python values.", correction: "Parse boundary values and choose explicit string, numeric, Boolean, category, or datetime dtypes." },
    { mistake: "Sorting by one field and leaving ties undefined.", correction: "Specify secondary keys, directions, missing placement, and stable tie behavior." },
    { mistake: "Testing only selected row counts.", correction: "Test exact IDs, excluded IDs with reasons, boundary membership, uniqueness, order, and row reconciliation." },
    { mistake: "Filtering model data using information created after the prediction time.", correction: "Enforce event-time cutoffs and prove every feature was available at the prediction timestamp." },
  ],

  discussionQuestions: [
    "When should a business key become the DataFrame index, and when should it remain only a column?",
    "Is position-based selection ever appropriate for a production analytical rule?",
    "How should a team decide whether missing Boolean conditions are False, invalid, or reviewable?",
    "When is a long method chain clearer than named intermediate DataFrames and validation checkpoints?",
    "Should an invalid sensor flag exclude the whole record or only sensor-dependent conclusions?",
    "Which group-level exclusion rates should be reported before an AI training dataset is approved?",
  ],

  formativeAssessment: {
    totalPoints: 50,
    passingScore: 40,
    questions: [
      { id: "check-05-03-01", type: "structure", points: 5, prompt: "Compare a Series, DataFrame, and Index.", sampleAnswer: "A Series is one-dimensional labeled values, a DataFrame is a two-dimensional collection of aligned columns, and an Index stores row labels used for selection and alignment." },
      { id: "check-05-03-02", type: "grain-key", points: 5, prompt: "State the controls required for a table whose grain is one incident.", sampleAnswer: "Declare the grain, require a nonmissing unique incident key, validate source and time fields, test duplicates, and reconcile all records to valid or reason-coded invalid outcomes." },
      { id: "check-05-03-03", type: "selection", points: 5, prompt: "Compare .loc, .iloc, .at, and .iat.", sampleAnswer: ".loc selects labels or aligned masks, .iloc positions, .at one scalar by labels, and .iat one scalar by positions." },
      { id: "check-05-03-04", type: "dimensionality", points: 5, prompt: "Explain why df[\"x\"] and df[[\"x\"]] are not interchangeable.", sampleAnswer: "The first returns a Series with one dimension; the second returns a DataFrame with two dimensions. Downstream APIs, shapes, and available methods may differ." },
      { id: "check-05-03-05", type: "filtering", points: 5, prompt: "Write and explain a filter for valid rows where plant is A or B and downtime is 30 or more.", sampleAnswer: "mask = valid & plant.isin([\"A\", \"B\"]) & downtime.ge(30). Each condition is aligned by index, the valid gate is explicit, and 30 is included." },
      { id: "check-05-03-06", type: "missingness", points: 5, prompt: "Explain why missing values inside a Boolean rule need a stated policy.", sampleAnswer: "A missing truth value is not automatically False in meaning; unresolved treatment can change eligibility and exclusion rates. Route it to an explicit outcome." },
      { id: "check-05-03-07", type: "assignment", points: 5, prompt: "Repair df[df.a > 0][\"flag\"] = True and explain the defect.", sampleAnswer: "Use df.loc[df[\"a\"].gt(0), \"flag\"] = True. Chained indexing may assign to a temporary selection rather than the intended DataFrame." },
      { id: "check-05-03-08", type: "alignment", points: 5, prompt: "Explain how Series index alignment can both protect and harm an analysis.", sampleAnswer: "It protects by matching entities by label, but stale, duplicated, or mismatched indexes can create missing or misplaced values. Assert or deliberately reindex before assignment." },
      { id: "check-05-03-09", type: "sorting", points: 5, prompt: "List the elements of a reproducible multi-column sort.", sampleAnswer: "Named sort columns, an ascending rule for each, category ordering, missing-value placement, stable tie behavior, and a final deterministic key such as unique ID." },
      { id: "check-05-03-10", type: "validation", points: 5, prompt: "Give eight tests required before publishing a filtered maintenance queue.", sampleAnswer: "Test schema, dtypes, grain, key nonmissingness, key uniqueness, mask index, boundary membership, exact included IDs, exception IDs/reasons, exclusivity, row balance, deterministic order, and expected summary values; any eight earn full credit." },
    ],
  },

  researchExtension: {
    title: "Index Design, Selection Semantics, and Analytical Reliability Study",
    researchQuestion:
      "How do index design, dtype choice, mask construction, copy behavior, and selection style affect correctness, performance, memory, and maintainability in pandas?",
    applicationOptions: [
      "Manufacturing incidents",
      "Financial transactions",
      "Student assessment records",
      "Healthcare operations",
      "Customer support tickets",
      "AI training-population construction",
    ],
    task:
      "Implement the same governed population selection using explicit masks with .loc, DataFrame.query, and a method-chain pipeline. Use both default and business-key indexes, verify identical selected and rejected identifiers, then compare readability, runtime, memory, error behavior, index-alignment risks, and ease of inserting validation checkpoints.",
    requiredEvidence: [
      "Declared row grain, source, business key, index policy, units, dtypes, and eligibility rules",
      "At least three selection implementations with identical contracts",
      "Normal, boundary, missing, duplicate-key, invalid-category, and empty-result fixtures",
      "Exact selected and excluded identifier comparisons—not row counts alone",
      "Chained-assignment and misaligned-Series demonstrations with repaired versions",
      "Repeated timing on representative sizes after correctness equivalence",
      "Memory and copy observations under the recorded pandas version and settings",
      "A recommendation separating readability, reliability, and performance conclusions",
    ],
  },

  portfolioArtifact: {
    title: "Lesson 3 Portfolio Evidence: Audited pandas Selection Engine",
    description:
      "Create a reusable pandas package or notebook section that converts raw operational records into typed valid data, reason-coded exceptions, a deterministic priority queue, and reconciled summary evidence.",
    requiredSections: [
      "README with decision, grain, business key, index policy, schema, units, boundaries, setup, outputs, and limitations",
      "DataFrame construction and boundary-parsing function with intentional pandas dtypes",
      "Schema, key, missingness, category, range, timestamp, and Boolean-quality validation",
      "Named mask functions for eligible, valid, review, OK, and invalid populations",
      "Safe derived-column assignment and deterministic multi-column sorting",
      "Valid, exception, review, and reconciliation outputs retaining source identifiers",
      "Automated tests for normal, boundary, missing, duplicate, empty, and index-misalignment cases",
    ],
    requiredEvidence: [
      "At least one Series and one DataFrame with explained index behavior",
      "Use of .loc, .iloc, .at or .iat, isin, between, str, dt, assign, and sort_values",
      "At least six intentional dtypes including one nullable dtype and one datetime dtype",
      "A chained-indexing defect demonstrated and repaired",
      "Exact expected selected and excluded IDs",
      "Received, valid, invalid, OK, and REVIEW counts that reconcile",
      "A saved data dictionary plus reproducible Python and pandas versions",
      "No private, confidential, or uncontrolled production data",
    ],
  },

  growthIndicators: [
    { title: "Table Modeler", description: "You define grain, keys, labels, dtypes, units, and index policy before selecting rows." },
    { title: "Selection Engineer", description: "You choose label, position, scalar, and Boolean selectors according to their exact meaning." },
    { title: "Population Auditor", description: "You retain reason-coded exclusions and prove exact membership, boundaries, and row reconciliation." },
    { title: "AI Dataset Gatekeeper", description: "You construct time-valid, entity-aligned model populations without leakage or unexplained exclusions." },
  ],

  reflection: [
    "Can you state exactly what one row represents in your current DataFrame?",
    "Which column or column combination uniquely identifies that row?",
    "Which current index is only a display convenience rather than a business key?",
    "Where could .loc and .iloc return different business records?",
    "Which filter has an untested inclusive or exclusive boundary?",
    "Which Boolean mask can contain pd.NA, and what policy should resolve it?",
    "Which assignment uses chained indexing or uncertain ownership?",
    "Which Series operation depends on index alignment that has not been tested?",
    "Which rejected rows currently disappear without reason codes?",
    "Which assertion proves exact selected IDs and complete source reconciliation?",
  ],

  summary: [
    "A Series is a one-dimensional labeled array; a DataFrame is a two-dimensional table of aligned Series; an Index stores row labels.",
    "Declare observation grain, business keys, units, source, time meaning, and eligibility before selecting data.",
    "Keep identifiers as identifiers—often strings—even when they contain digits.",
    "Inspect shape, columns, index, dtypes, missingness, uniqueness, ranges, and representative rows before analysis.",
    "Use explicit nullable, numeric, Boolean, string, categorical, and timezone-aware datetime dtypes when their semantics apply.",
    ".loc expresses label-based selection; .iloc expresses position-based selection; .at and .iat express scalar access.",
    "Label slices and position slices have different stop behavior and may select different business records.",
    "A single column label returns a Series, while a list of column labels returns a DataFrame.",
    "Build vectorized conditions with named masks, parentheses, &, |, ~, isin, between, string methods, and datetime accessors.",
    "Resolve missing Boolean values according to a documented rule rather than allowing silent population changes.",
    "Every filter defines a population; retain exact identifiers and reasons for excluded records.",
    "Use a valid-row gate before business classification so invalid values cannot trigger apparently legitimate decisions.",
    "Use one .loc operation or .assign for safe, explicit assignment instead of chained indexing.",
    "pandas aligns Series by index labels; verify indexes before arithmetic or assignment.",
    "Specify sort columns, directions, category order, missing placement, stable behavior, and a final deterministic key.",
    "Test exact membership, boundaries, schema, dtypes, alignment, uniqueness, order, summary values, and row reconciliation.",
    "In AI, pandas filters define training populations and must prevent future information, target leakage, duplication, and unfair unexplained exclusion.",
  ],

  previousLesson: {
    id: "data-ai-m05-l02",
    moduleNumber: 5,
    slug: "numpy-arrays-and-vectorized-computation",
    title: "NumPy Arrays and Vectorized Computation",
  },
  nextLesson: null,

  lumineryGuidance: {
    message:
      "State the row grain, protect the business key, select by explicit meaning, retain every exception, and prove the final population.",
    prompt:
      "Act as my senior pandas engineer, analytical reviewer, and AI dataset coach. Help me complete Module 5 Lesson 3 one verified gate at a time. Require observation grain, business keys, index policy, schema, intentional dtypes, missing-value policy, label-versus-position reasoning, mask alignment, exact boundary rules, safe assignment, deterministic sorting, reason-coded exceptions, exact identifier tests, outcome reconciliation, event-time validity, and leakage prevention. Do not let me treat the default index as a key, confuse .loc with .iloc, hide pd.NA behavior, use chained assignment, discard rejected rows, rely on counts without exact IDs, or approve a model population containing future information.",
    coachingQuestions: [
      "What does one row represent?",
      "Which field uniquely identifies it?",
      "Is this selector using labels, positions, or conditions?",
      "What are the exact inclusive and exclusive boundaries?",
      "Can this Boolean mask contain a missing value?",
      "Does this assignment target the intended DataFrame directly?",
      "Are these values aligned by labels or merely displayed in the same order?",
      "Which exact IDs were included and excluded?",
      "Which reconciliation proves that no source row disappeared?",
    ],
  },
};

export default lesson03;
