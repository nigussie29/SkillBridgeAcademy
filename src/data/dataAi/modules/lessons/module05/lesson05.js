const lesson05 = {
  id: "data-ai-m05-l05",
  courseId: "data-ai-foundations",
  moduleId: "data-ai-foundations-module-05",
  moduleNumber: 5,
  lessonNumber: 5,
  slug: "groupby-merge-reshape-and-feature-creation",
  title: "GroupBy, Merge, Reshape, and Feature Creation",
  shortTitle: "GroupBy, Merge, Reshape, and Feature Creation",
  subtitle:
    "Aggregate at the correct grain, join tables with declared cardinality, reshape without losing meaning, and create time-valid analytical features with complete reconciliation.",
  status: "available",
  duration: "4–5 hours",
  level: "Beginner to Professional",

  essentialQuestion:
    "How can multiple tables and repeated observations be transformed into trustworthy summaries and model-ready features without duplicating, losing, or leaking information?",
  bigIdea:
    "Every group, join, reshape, and feature changes the analytical grain. Correct pandas work declares the grain before and after the operation, validates key cardinality, preserves unmatched records, and reconciles row counts and important totals.",

  whyThisLessonExists: {
    title: "The Most Dangerous pandas Error Often Looks Like a Successful Join",
    introduction:
      "Operational analysis rarely lives in one table. Incidents must be connected to assets, customers to transactions, students to courses, and observations to time-aware reference data. pandas makes these operations concise, but a many-to-many join can multiply rows while producing no error unless cardinality is validated.",
    centralProblem:
      "A maintenance analyst joins incident records to an asset table, summarizes downtime by plant, pivots severity counts, and creates rolling features. One asset key is missing from the reference table, a duplicate dimension key could multiply facts, and a feature based on future incidents could leak outcome information. Without controls, the results still look reasonable.",
    purpose:
      "This lesson teaches split-apply-combine, named aggregation, transform, group filtering, joins and cardinality, referential integrity, unmatched-row evidence, concatenation, long and wide reshaping, pivot validation, crosstabs, feature engineering, lags, rolling windows, event-time cutoffs, and row-and-amount reconciliation.",
  },

  problemFirst: {
    title: "Opening Investigation: Can These Incident and Asset Tables Be Combined Safely?",
    scenario:
      "Eight incident rows should connect to an asset dimension containing one row per asset. Seven incidents match; one references unknown asset R-999. Leadership wants plant KPIs, a severity matrix, asset histories, and predictive-maintenance features.",
    questions: [
      "What is the grain and key of the incident table?",
      "What is the grain and key of the asset table?",
      "Should the join be one-to-one, many-to-one, one-to-many, or many-to-many?",
      "Which join preserves all incidents for reconciliation?",
      "How will unmatched asset keys be retained and corrected?",
      "Which group statistics reduce rows and which preserve row count?",
      "When does a pivot require unique key combinations, and when should pivot_table aggregate?",
      "Which features are available before each incident rather than after it?",
    ],
    expectedInsight:
      "Aggregation, integration, reshaping, and feature creation are grain transformations. Each requires explicit keys, populations, time rules, and validation evidence.",
  },

  visualModels: [
    {
      id: "grain-transformation-cycle",
      type: "lifecycle",
      title: "The Grain-Safe Transformation Cycle",
      description:
        "Declare the input and output grain before every aggregation, join, reshape, or feature operation.",
      stages: [
        { label: "1. Declare", detail: "Name the input grain, business key, eligible population, units, and event time." },
        { label: "2. Predict", detail: "Write the expected output grain, row-count behavior, columns, and cardinality." },
        { label: "3. Transform", detail: "Group, merge, concatenate, reshape, or engineer features with explicit parameters." },
        { label: "4. Diagnose", detail: "Inspect join indicators, duplicate keys, unmatched records, nulls, and altered dtypes." },
        { label: "5. Reconcile", detail: "Prove row and amount balances, expected groups, exact IDs, and deterministic order." },
        { label: "6. Interpret", detail: "Translate the output back to business entities, periods, metrics, and decisions." },
      ],
      feedback:
        "If row count increases unexpectedly, inspect key uniqueness on both sides before changing join type or deleting duplicates.",
      interpretation:
        "A transformation is trustworthy when its grain change is intentional, measurable, and reversible through lineage evidence.",
    },
    {
      id: "join-cardinality-map",
      type: "lifecycle",
      title: "Join Cardinality and Control Map",
      description:
        "Treat cardinality as a testable contract rather than an assumption.",
      stages: [
        { label: "Left keys", detail: "Profile nulls, distinct counts, frequencies, and duplicates in the fact or driving table." },
        { label: "Right keys", detail: "Prove uniqueness when the reference table is expected to contribute one row per key." },
        { label: "Cardinality", detail: "Declare one-to-one, one-to-many, many-to-one, or many-to-many before merging." },
        { label: "Coverage", detail: "Use a join indicator to separate matched, left-only, and right-only records." },
        { label: "Balance", detail: "Reconcile source rows and additive amounts to matched and unmatched outcomes." },
      ],
      feedback:
        "Use validate in pandas.merge to make cardinality violations fail immediately instead of silently multiplying records.",
      interpretation:
        "A left join preserves the driving population, but it does not guarantee match quality or prevent duplicate multiplication.",
    },
  ],

  learningObjectives: [
    "Declare input and output grain for aggregation, joins, reshaping, and feature creation.",
    "Use groupby with single and multiple grouping keys.",
    "Create named aggregations for count, sum, mean, median, minimum, maximum, and distinct count.",
    "Distinguish aggregation, transform, filter, and apply by output shape and purpose.",
    "Calculate group rates and weighted summaries with correct denominators.",
    "Choose inner, left, right, outer, and cross joins according to the required population.",
    "Validate one-to-one, many-to-one, one-to-many, and many-to-many join cardinality.",
    "Detect null, duplicate, unmatched, and conflicting join keys.",
    "Use merge indicators and suffixes to retain integration evidence.",
    "Concatenate compatible tables while retaining source lineage and avoiding accidental duplicate indexes.",
    "Reshape between long and wide forms using melt, pivot, pivot_table, stack, and unstack.",
    "Create crosstabs and contingency tables with meaningful margins and denominators.",
    "Engineer ratios, flags, counts, lags, cumulative, and rolling features safely.",
    "Prevent target, temporal, and entity leakage during feature creation.",
    "Build and test an audited incident-to-asset analytical pipeline.",
  ],

  prerequisiteKnowledge: [
    "Module 5 Lessons 1–4: Python, NumPy, DataFrames, filtering, missingness, dtypes, duplicates, and validation",
    "Module 4: relational keys, joins, normalization, facts, dimensions, and star schemas",
    "Basic descriptive statistics, proportions, weighted means, and chronological ordering",
    "Understanding that one table can contain repeated observations for the same entity over time",
    "Python with pandas and NumPy installed",
  ],

  vocabulary: [
    { term: "GroupBy", definition: "A pandas object that organizes rows into groups for aggregation, transformation, filtering, or custom operations." },
    { term: "Split-apply-combine", definition: "The pattern of splitting observations by keys, applying group logic, and combining outputs." },
    { term: "Grouping key", definition: "One or more columns whose values determine group membership." },
    { term: "Aggregation", definition: "A reduction producing one or more summary values per group." },
    { term: "Named aggregation", definition: "A groupby syntax that explicitly names output columns and their source column and function." },
    { term: "Transform", definition: "A group operation returning one value per original row, aligned to the original index." },
    { term: "Group filter", definition: "A rule that retains or removes whole groups according to group-level evidence." },
    { term: "Apply", definition: "A flexible group operation for custom functions; it can be slower and less predictable than specialized methods." },
    { term: "observed", definition: "A groupby option controlling whether unused categorical combinations appear in results." },
    { term: "Merge", definition: "Combining tables by one or more key columns using relational join semantics." },
    { term: "Join key", definition: "The field or field combination used to match records across tables." },
    { term: "Cardinality", definition: "The number relationship between matching keys on each side of a join." },
    { term: "One-to-one", definition: "Each join key appears at most once on both sides." },
    { term: "Many-to-one", definition: "The left table may repeat a key while the right table must contain at most one matching row." },
    { term: "One-to-many", definition: "The left table must have unique keys while the right table may repeat them." },
    { term: "Many-to-many", definition: "Both tables repeat join keys, potentially multiplying every matching combination." },
    { term: "Inner join", definition: "A join retaining only keys matched on both sides." },
    { term: "Left join", definition: "A join retaining every left row and adding matching right values when available." },
    { term: "Right join", definition: "A join retaining every right row and adding matching left values when available." },
    { term: "Outer join", definition: "A join retaining matched and unmatched keys from both sides." },
    { term: "Cross join", definition: "A Cartesian product pairing every row on one side with every row on the other." },
    { term: "Merge indicator", definition: "A column identifying each merged row as left-only, right-only, or matched on both sides." },
    { term: "validate", definition: "A merge parameter that raises an error when actual key cardinality violates the declared relationship." },
    { term: "Referential integrity", definition: "The rule that each foreign key either matches an approved parent key or follows an explicit null policy." },
    { term: "Orphan key", definition: "A foreign-key value with no matching reference record." },
    { term: "Suffix", definition: "A label added to overlapping non-key column names so their source remains distinguishable after merging." },
    { term: "Concatenation", definition: "Appending or aligning objects along rows or columns without relational key matching." },
    { term: "Long format", definition: "A tidy representation with repeated observations across rows and variable names stored in a column." },
    { term: "Wide format", definition: "A representation with repeated variable or category values spread across separate columns." },
    { term: "melt", definition: "A pandas operation converting selected wide columns into variable and value rows." },
    { term: "pivot", definition: "A strict long-to-wide reshape requiring unique index-column combinations." },
    { term: "pivot_table", definition: "A long-to-wide operation that can aggregate repeated index-column combinations." },
    { term: "stack", definition: "An operation moving column levels into the row index." },
    { term: "unstack", definition: "An operation moving row-index levels into columns." },
    { term: "Crosstab", definition: "A frequency or normalized contingency table across categorical variables." },
    { term: "Feature engineering", definition: "Creating model or analysis variables from raw and integrated evidence under a defined time and population contract." },
    { term: "Lag feature", definition: "A prior observation's value aligned to the current row within an entity and chronological order." },
    { term: "Rolling window", definition: "A summary computed over a moving set of current or prior observations." },
    { term: "Data leakage", definition: "Information unavailable at prediction time or reserved for evaluation entering model features or training decisions." },
    { term: "Grain", definition: "The exact real-world meaning of one output row before and after a transformation." },
  ],

  formulas: [
    { id: "group-total", name: "Group total", formula: "Tg = Σᵢ∈g xᵢ", meaning: "Adds an additive measure for observations belonging to group g.", requirement: "Confirm the measure is additive and every row belongs to the intended eligible population." },
    { id: "group-mean", name: "Group mean", formula: "x̄g = Σᵢ∈g xᵢ ÷ ng", meaning: "Averages eligible observations within group g.", requirement: "Report ng, missingness treatment, and whether rows or entities form the denominator." },
    { id: "weighted-mean", name: "Weighted mean", formula: "x̄w = Σᵢ wᵢxᵢ ÷ Σᵢ wᵢ", meaning: "Combines values according to meaningful exposure or frequency weights.", requirement: "Weights must be nonnegative when required, aligned, and use documented units." },
    { id: "group-rate", name: "Group rate", formula: "rateg = qualifying observationsg ÷ eligible observationsg", meaning: "Compares an event or status share within each group.", requirement: "Define eligibility before counting the numerator." },
    { id: "join-balance", name: "Left-join row balance", formula: "left rows = matched left rows + unmatched left rows", meaning: "Proves each driving record reaches one join-coverage outcome under many-to-one cardinality.", requirement: "A right-side duplicate can violate this balance through row multiplication; validate cardinality first." },
    { id: "amount-balance", name: "Join amount reconciliation", formula: "source amount = matched amount + unmatched amount", meaning: "Protects additive measures during integration.", requirement: "Use source-row lineage so duplicated facts cannot be counted more than once." },
    { id: "guarded-ratio", name: "Guarded ratio feature", formula: "rᵢ = aᵢ ÷ bᵢ only when bᵢ > 0", meaning: "Creates a per-unit feature without infinite or misleading division results.", requirement: "Define zero, missing, and invalid denominator behavior explicitly." },
    { id: "prior-feature", name: "Prior-only cumulative feature", formula: "Pᵢ = Σⱼ<i xⱼ within the same entity", meaning: "Summarizes history available before the current event.", requirement: "Sort by entity and event time, resolve ties, exclude the current row, and enforce the prediction cutoff." },
  ],

  workedExamples: [
    {
      id: "example-05-05-01",
      title: "Create named group summaries",
      problem: "Summarize incidents by plant with row count, distinct assets, total downtime, and median downtime.",
      solutionSteps: [
        "Group only the eligible incident population by plant.",
        "Use named aggregation so output column meaning is explicit.",
        "Calculate incident_count with count, distinct_assets with nunique, downtime_total with sum, and downtime_median with median.",
        "Verify the group totals reconcile to the eligible source total.",
      ],
      answer: "df.groupby(\"plant\").agg(incident_count=(\"incident_id\", \"count\"), distinct_assets=(\"asset_id\", \"nunique\"), downtime_total=(\"downtime_min\", \"sum\"), downtime_median=(\"downtime_min\", \"median\")).",
      interpretation: "Named aggregation makes grain and measure definitions visible in the output schema.",
    },
    {
      id: "example-05-05-02",
      title: "Use transform when the result must remain row-aligned",
      problem: "Add each incident's share of its plant's total downtime without reducing rows.",
      solutionSteps: [
        "Compute plant_total = df.groupby(\"plant\")[\"downtime_min\"].transform(\"sum\").",
        "Divide downtime by the aligned plant_total with a guarded zero policy.",
        "Confirm the feature has the same index and row count as df.",
        "Within each nonzero plant total, verify shares sum approximately to one.",
      ],
      answer: "transform broadcasts one group result back to every source row in that group.",
      interpretation: "agg changes grain; transform preserves the original observation grain.",
    },
    {
      id: "example-05-05-03",
      title: "Validate a many-to-one asset join",
      problem: "Many incidents reference one asset row; combine them without multiplying incidents.",
      solutionSteps: [
        "Assert asset_id is nonmissing and unique in the asset dimension.",
        "Use a left merge from incidents to assets on asset_id.",
        "Set validate=\"many_to_one\" and indicator=True.",
        "Separate both matches from left-only orphan incidents and reconcile rows and amounts.",
      ],
      answer: "incidents.merge(assets, on=\"asset_id\", how=\"left\", validate=\"many_to_one\", indicator=True).",
      interpretation: "A left join protects incident coverage; validate protects against dimension-key multiplication.",
    },
    {
      id: "example-05-05-04",
      title: "Diagnose a many-to-many multiplication",
      problem: "Key K appears three times on the left and twice on the right. How many matched rows result?",
      solutionSteps: [
        "For one repeated key, the join produces every matching pair.",
        "Multiply left frequency 3 by right frequency 2.",
        "Investigate whether either table violates its intended grain before merging.",
      ],
      answer: "The key produces 3 × 2 = 6 joined rows.",
      interpretation: "Many-to-many joins can be legitimate, but they require a declared bridge-like grain and cannot be treated as ordinary fact enrichment.",
    },
    {
      id: "example-05-05-05",
      title: "Choose pivot or pivot_table",
      problem: "Create one row per plant and one column per severity from incident data.",
      solutionSteps: [
        "If plant-severity pairs repeat, pivot cannot choose one value without aggregation.",
        "Use pd.crosstab for counts or pivot_table with aggfunc=\"size\".",
        "Reindex severity columns to the controlled category order and fill absent combinations with zero.",
        "Verify the matrix total equals the eligible incident count.",
      ],
      answer: "A crosstab or pivot_table is appropriate because multiple incidents can share a plant-severity combination.",
      interpretation: "pivot enforces uniqueness; pivot_table resolves repetition through an explicit aggregation.",
    },
    {
      id: "example-05-05-06",
      title: "Create a prior-only asset feature",
      problem: "For every incident, calculate cumulative downtime from earlier incidents on the same asset.",
      solutionSteps: [
        "Sort by asset_id, event_time, and a deterministic event key.",
        "Within each asset, calculate cumulative downtime and subtract the current value, or shift before cumulative calculation.",
        "Verify the first event for each asset has prior downtime zero.",
        "Test exact results for assets with multiple events.",
      ],
      answer: "prior = ordered.groupby(\"asset_id\")[\"downtime_min\"].cumsum() - ordered[\"downtime_min\"].",
      interpretation: "Excluding the current and future rows is essential when the feature will support prediction at event time.",
    },
  ],

  interactiveExploration: {
    title: "Predict Grain, Cardinality, Rows, and Totals",
    description:
      "Before running each transformation, write its input grain, output grain, expected row-count behavior, and amount-balance rule.",
    steps: [
      "Compare groupby.agg, groupby.transform, groupby.filter, and groupby.apply on the same incident table.",
      "Insert a duplicate asset key and rerun merge with and without validate.",
      "Compare inner, left, and outer join populations using the merge indicator.",
      "Melt a wide KPI table to long form, then reconstruct it with pivot.",
      "Introduce a repeated pivot key and compare pivot failure with pivot_table aggregation.",
      "Create current-inclusive and prior-only cumulative features, then identify leakage.",
    ],
    questions: [
      "Which operation changed row grain?",
      "Which join dropped or created rows?",
      "Which amount stopped reconciling?",
      "Which unmatched key requires reference-data correction?",
      "Which feature used current or future information?",
    ],
    expectedDiscovery:
      "The safest pandas workflow predicts structural consequences first and makes violations fail through explicit validation.",
  },

  realWorldApplications: [
    { field: "Manufacturing and Robotics", application: "Enrich incidents with asset attributes, aggregate downtime by plant, reshape KPI matrices, and create time-valid maintenance-history features." },
    { field: "Business Intelligence", application: "Prepare fact and dimension extracts, validate many-to-one relationships, and produce governed summary tables for semantic models." },
    { field: "Finance", application: "Aggregate transactions by account and period, join controlled reference data, and reconcile unmatched keys and amounts." },
    { field: "Education", application: "Combine attempts with student and course dimensions, summarize outcomes, and construct prior-performance features without using future assessments." },
    { field: "Healthcare Operations", application: "Aggregate encounters, connect approved dimensions, reshape measures, and enforce patient and event-time controls." },
    { field: "AI and Machine Learning", application: "Create entity-history, rate, lag, rolling, interaction, and reference features while preventing temporal and target leakage." },
  ],

  aiConnection: {
    title: "Feature Engineering Is a Time-Aware Join and Aggregation Problem",
    explanation:
      "Many high-value model features summarize prior behavior: earlier incidents, recent spending, past assessments, or historical device signals. They require entity keys, event ordering, cutoff time, and frozen reference data. A correct numerical formula can still leak future information through an unrestricted join or current-inclusive window.",
    example:
      "To predict whether an asset will fail tomorrow, a seven-day downtime feature may use only incidents recorded before the prediction timestamp. Backfilled records, future maintenance outcomes, and reference attributes effective after the cutoff must be excluded or joined using effective-time logic.",
    uses: [
      "Entity-level historical counts and totals",
      "Lag and rolling-window features",
      "Reference and category enrichment",
      "Interaction and normalized ratio features",
      "Training-serving feature parity",
      "Point-in-time-correct feature tables",
    ],
    caution:
      "Random row splits do not protect against repeated-entity or temporal leakage. Validate feature availability, entity separation, cutoff time, and production recomputability.",
    reflectionQuestion:
      "For each feature in your project, what is the latest source timestamp permitted at prediction time?",
  },

  pythonLab: {
    title: "Audited Incident-to-Asset Integration, KPI Reshaping, and Feature Pipeline",
    objective:
      "Validate an asset dimension, perform a many-to-one left join, quarantine one orphan incident, reconcile rows and amounts, create plant KPIs and a severity matrix, and engineer guarded and prior-only features.",
    code: `import numpy as np
import pandas as pd

incidents = pd.DataFrame({
    "incident_id": ["I-001", "I-002", "I-003", "I-004", "I-005", "I-006", "I-007", "I-008"],
    "asset_id": ["R-101", "R-102", "R-101", "R-201", "R-202", "R-102", "R-203", "R-999"],
    "event_time": pd.to_datetime([
        "2026-09-01 08:00", "2026-09-01 09:00", "2026-09-02 08:30", "2026-09-01 10:00",
        "2026-09-01 11:00", "2026-09-02 09:30", "2026-09-02 12:00", "2026-09-02 13:00",
    ], utc=True),
    "downtime_min": pd.Series([10, 20, 5, 40, 15, 0, 25, 12], dtype="Int64"),
    "repair_cost_cents": pd.Series([10000, 15000, 5000, 30000, 12000, 0, 18000, 8000], dtype="Int64"),
    "severity": pd.Categorical(
        ["low", "medium", "low", "high", "medium", "low", "high", "medium"],
        categories=["low", "medium", "high"], ordered=True,
    ),
})

assets = pd.DataFrame({
    "asset_id": pd.Series(["R-101", "R-102", "R-201", "R-202", "R-203", "R-204"], dtype="string"),
    "plant": pd.Series(["A", "A", "B", "B", "B", "B"], dtype="string"),
    "asset_type": pd.Series(["press", "welder", "press", "conveyor", "robot", "cutter"], dtype="string"),
    "production_line": pd.Series(["L1", "L1", "L2", "L2", "L2", "L3"], dtype="string"),
})

incidents["incident_id"] = incidents["incident_id"].astype("string")
incidents["asset_id"] = incidents["asset_id"].astype("string")

assert incidents["incident_id"].notna().all() and incidents["incident_id"].is_unique
assert assets["asset_id"].notna().all() and assets["asset_id"].is_unique

source_rows = len(incidents)
source_downtime = int(incidents["downtime_min"].sum())
source_cost = int(incidents["repair_cost_cents"].sum())

joined = incidents.merge(
    assets,
    on="asset_id",
    how="left",
    validate="many_to_one",
    indicator=True,
)

matched_mask = joined["_merge"].eq("both")
orphan_mask = joined["_merge"].eq("left_only")
enriched = joined.loc[matched_mask].copy()
join_exceptions = joined.loc[orphan_mask].copy()
join_exceptions["reason_code"] = "ASSET_KEY_NOT_FOUND"

# Row and additive-amount reconciliation.
assert len(joined) == source_rows
assert source_rows == len(enriched) + len(join_exceptions)
assert source_downtime == int(enriched["downtime_min"].sum()) + int(join_exceptions["downtime_min"].sum())
assert source_cost == int(enriched["repair_cost_cents"].sum()) + int(join_exceptions["repair_cost_cents"].sum())

# Aggregate to one row per plant.
plant_kpis = (
    enriched.groupby("plant", observed=True)
    .agg(
        incident_count=("incident_id", "count"),
        distinct_assets=("asset_id", "nunique"),
        downtime_total=("downtime_min", "sum"),
        downtime_mean=("downtime_min", "mean"),
        repair_cost_cents_total=("repair_cost_cents", "sum"),
    )
    .sort_index()
)

# Reshape to a plant-by-severity count matrix.
severity_matrix = pd.crosstab(enriched["plant"], enriched["severity"])
severity_matrix = severity_matrix.reindex(
    index=["A", "B"], columns=["low", "medium", "high"], fill_value=0
)

# Create row-level features after deterministic chronological sorting.
enriched = enriched.sort_values(
    ["asset_id", "event_time", "incident_id"], kind="stable"
).reset_index(drop=True)
enriched["event_date"] = enriched["event_time"].dt.date
enriched["high_priority"] = (
    enriched["severity"].eq("high") | enriched["downtime_min"].ge(30)
).astype("boolean")
enriched["cost_per_downtime_min"] = pd.Series(
    np.where(
        enriched["downtime_min"].gt(0),
        enriched["repair_cost_cents"] / enriched["downtime_min"],
        np.nan,
    ),
    dtype="Float64",
)
enriched["asset_incident_number"] = (
    enriched.groupby("asset_id", observed=True).cumcount() + 1
).astype("Int64")
enriched["prior_asset_downtime"] = (
    enriched.groupby("asset_id", observed=True)["downtime_min"].cumsum()
    - enriched["downtime_min"]
).astype("Int64")

# Exact expected results.
assert joined["_merge"].value_counts().to_dict() == {
    "both": 7, "left_only": 1, "right_only": 0
}
assert join_exceptions["incident_id"].tolist() == ["I-008"]
assert join_exceptions["asset_id"].tolist() == ["R-999"]
assert source_downtime == 127
assert source_cost == 98000
assert int(enriched["downtime_min"].sum()) == 115
assert int(join_exceptions["downtime_min"].sum()) == 12
assert plant_kpis.loc["A", "incident_count"] == 4
assert plant_kpis.loc["B", "incident_count"] == 3
assert int(plant_kpis.loc["A", "downtime_total"]) == 35
assert int(plant_kpis.loc["B", "downtime_total"]) == 80
assert severity_matrix.to_dict() == {
    "low": {"A": 3, "B": 0},
    "medium": {"A": 1, "B": 1},
    "high": {"A": 0, "B": 2},
}
assert enriched.loc[enriched["incident_id"].eq("I-003"), "prior_asset_downtime"].item() == 10
assert enriched.loc[enriched["incident_id"].eq("I-006"), "prior_asset_downtime"].item() == 20
assert enriched.loc[enriched["incident_id"].eq("I-006"), "cost_per_downtime_min"].isna().item()
assert enriched.loc[enriched["high_priority"], "incident_id"].tolist() == ["I-004", "I-007"]

print("Source = enriched + join exceptions:", source_rows, "=", len(enriched), "+", len(join_exceptions))
print("Downtime balance:", source_downtime, "=", int(enriched["downtime_min"].sum()), "+", int(join_exceptions["downtime_min"].sum()))
print("Repair-cost balance:", source_cost, "=", int(enriched["repair_cost_cents"].sum()), "+", int(join_exceptions["repair_cost_cents"].sum()))
print("Join exception:", join_exceptions[["incident_id", "asset_id", "reason_code"]].to_dict("records"))
print("Plant KPIs:")
print(plant_kpis.round(2))
print("Severity matrix:")
print(severity_matrix)
print("All groupby, merge, reshape, feature, and reconciliation tests passed.")`,
    questions: [
      "What does one row represent in incidents, assets, joined, plant_kpis, and severity_matrix?",
      "Why must asset_id be unique in assets before the many-to-one merge?",
      "Why is a left join used instead of an inner join?",
      "What evidence does the merge indicator provide?",
      "Which equations reconcile rows, downtime, and repair cost?",
      "Why does groupby.agg reduce rows while groupby.cumcount preserves them?",
      "Why is crosstab appropriate for the severity matrix?",
      "How is division by zero handled in cost_per_downtime_min?",
      "Why must the data be sorted before prior_asset_downtime is created?",
      "Which assertions prove the prior feature excludes the current incident?",
    ],
    reflectionQuestions: [
      "Should the unmatched R-999 incident remain in operational totals while asset-based breakdowns exclude it? How should both populations be labeled?",
      "How would slowly changing asset attributes require an effective-dated or as-of join?",
      "Which feature definitions must be reproduced exactly during live model inference?",
    ],
    extension:
      "Add effective-dated asset ownership, daily incident panels, seven-day prior-only rolling features, multiple source files with lineage, and a point-in-time feature cutoff. Validate cardinality, unmatched rates, row and amount balances, feature freshness, and training-serving equivalence.",
  },

  guidedPractice: [
    { id: "gp-05-05-01", question: "What is the output grain of groupby(\"plant\").agg(total=(\"downtime\", \"sum\"))?", answer: "One row per observed plant, with total downtime for the eligible rows in that plant." },
    { id: "gp-05-05-02", question: "When should transform be used instead of agg?", answer: "Use transform when the group result must return to every original row with the same index and row count." },
    { id: "gp-05-05-03", question: "What does validate=\"many_to_one\" require?", answer: "The left table may repeat join keys, but the right table must have at most one row per key." },
    { id: "gp-05-05-04", question: "Why can an inner join damage reconciliation?", answer: "It removes unmatched rows from both sides, so orphan source records disappear unless separately identified and retained." },
    { id: "gp-05-05-05", question: "When does pivot fail but pivot_table succeed?", answer: "pivot fails when index-column combinations are repeated; pivot_table succeeds by applying an explicitly chosen aggregation." },
    { id: "gp-05-05-06", question: "Why should a lag or rolling feature be grouped by entity and ordered by time?", answer: "Without both controls, history can cross entities or use future observations, creating meaningless features or leakage." },
  ],

  independentPractice: [
    { id: "ip-05-05-01", difficulty: "Foundational", question: "Create plant summaries with count, nunique, sum, mean, median, min, and max using named aggregation.", sampleAnswer: "Use groupby(...).agg with explicit output names, then reconcile group counts and additive totals to the eligible source." },
    { id: "ip-05-05-02", difficulty: "Foundational", question: "Add each incident's share of plant downtime with transform and verify group shares.", sampleAnswer: "Transform the plant sum back to rows, divide with a zero policy, and assert nonzero groups sum approximately to one." },
    { id: "ip-05-05-03", difficulty: "Applied", question: "Perform and diagnose a many-to-one left join with one orphan key.", sampleAnswer: "Validate right-key uniqueness, merge with validate and indicator, quarantine left_only rows, and reconcile counts and amounts." },
    { id: "ip-05-05-04", difficulty: "Applied", question: "Convert a wide monthly KPI table to long format and reconstruct it.", sampleAnswer: "Use melt with stable identifier columns, assert expected long rows, then pivot only after proving each identifier-variable combination is unique." },
    { id: "ip-05-05-05", difficulty: "Analytical", question: "Explain a legitimate many-to-many relationship and how you would model it.", sampleAnswer: "Use a bridge or association table with its own declared grain and allocation logic rather than directly multiplying two fact-like tables." },
    { id: "ip-05-05-06", difficulty: "Advanced", question: "Create prior-only counts, sums, lags, and seven-day rolling features for each asset.", sampleAnswer: "Sort by asset and time, shift before rolling or use closed-left windows, test first events, ties, boundaries, and cutoff-time availability." },
    { id: "ip-05-05-07", difficulty: "Professional", question: "Design an integration test suite for facts, dimensions, summary tables, and model features.", sampleAnswer: "Test schemas, grain, keys, cardinality, orphans, row and amount balances, group totals, pivot uniqueness, feature time cutoffs, nulls, dtypes, and expected exact IDs." },
  ],

  commonMistakes: [
    { mistake: "Aggregating without stating input and output grain.", correction: "Name the observation population and one-row meaning before and after groupby." },
    { mistake: "Using count when the requirement is distinct entities.", correction: "Choose count, size, or nunique according to the metric denominator." },
    { mistake: "Averaging group averages without weights.", correction: "Recompute from row-level evidence or use a weighted mean with documented denominators." },
    { mistake: "Using apply for operations supported by agg or transform.", correction: "Prefer specialized vectorized methods for clearer shapes, performance, and behavior." },
    { mistake: "Merging before profiling key duplicates and nulls.", correction: "Test both key sets and declare cardinality first." },
    { mistake: "Assuming a left join cannot multiply rows.", correction: "A repeated right key multiplies left facts; enforce many-to-one validation." },
    { mistake: "Using an inner join and ignoring orphan records.", correction: "Preserve the driving population, diagnose coverage, and route unmatched keys." },
    { mistake: "Treating many-to-many multiplication as deduplication noise.", correction: "Revisit the data model, grain, and need for a bridge or allocation rule." },
    { mistake: "Merging overlapping columns without source clarity.", correction: "Use meaningful suffixes and reconcile conflicts explicitly." },
    { mistake: "Concatenating files without source lineage or index handling.", correction: "Add source identifiers, align schemas, use ignore_index deliberately, and test duplicate business keys." },
    { mistake: "Using pivot when key combinations are not unique.", correction: "Investigate repetition or use pivot_table with an explicit justified aggregation." },
    { mistake: "Filling absent pivot combinations with zero when zero is not the domain meaning.", correction: "Distinguish no observation, not applicable, missing, and measured zero." },
    { mistake: "Creating ratios without a denominator policy.", correction: "Handle zero, missing, invalid, and unit compatibility explicitly." },
    { mistake: "Creating current-inclusive or future-aware history features.", correction: "Use prior-only windows and enforce point-in-time cutoffs." },
    { mistake: "Splitting repeated entities randomly after feature creation.", correction: "Use entity-aware or time-aware partitions and fit transformations only on training data." },
  ],

  discussionQuestions: [
    "When should unmatched reference keys block a report rather than appear as an explicit unknown category?",
    "Which measures are additive across rows, plants, assets, and time—and which are not?",
    "When is a many-to-many join legitimate, and what allocation evidence does it require?",
    "Should absent category combinations appear as zero, missing, or not applicable in a pivot table?",
    "How should slowly changing attributes be joined to historical facts?",
    "What evidence proves a model feature can be reproduced at prediction time?",
  ],

  formativeAssessment: {
    totalPoints: 50,
    passingScore: 40,
    questions: [
      { id: "check-05-05-01", type: "grain", points: 5, prompt: "Explain why grain must be stated before and after groupby.", sampleAnswer: "Groupby changes observations into group summaries; without explicit grain, counts, denominators, joins, and interpretations can mix rows, entities, and periods." },
      { id: "check-05-05-02", type: "groupby", points: 5, prompt: "Compare agg, transform, filter, and apply.", sampleAnswer: "agg reduces to group summaries, transform returns aligned row-level values, filter retains or removes whole groups, and apply supports custom shapes but needs extra caution." },
      { id: "check-05-05-03", type: "cardinality", points: 5, prompt: "Define the four principal join cardinalities.", sampleAnswer: "One-to-one has unique keys on both sides; many-to-one repeats only left; one-to-many repeats only right; many-to-many repeats both." },
      { id: "check-05-05-04", type: "merge", points: 5, prompt: "Describe a controlled many-to-one left merge.", sampleAnswer: "Profile keys, prove right uniqueness, merge with validate and indicator, inspect orphans, test row count, and reconcile additive measures." },
      { id: "check-05-05-05", type: "multiplication", points: 5, prompt: "A key occurs four times left and three times right. How many joined pairs result?", sampleAnswer: "Twelve matched rows for that key, because a many-to-many join creates 4 × 3 combinations." },
      { id: "check-05-05-06", type: "reshape", points: 5, prompt: "Compare melt, pivot, and pivot_table.", sampleAnswer: "melt converts wide columns to long rows; pivot reshapes unique long keys to wide; pivot_table also aggregates repeated combinations." },
      { id: "check-05-05-07", type: "features", points: 5, prompt: "Give four controls for a prior-only rolling feature.", sampleAnswer: "Group by entity, sort by event time and tie key, exclude current/future observations, and enforce the prediction cutoff; also test boundaries and training-serving parity." },
      { id: "check-05-05-08", type: "ratio", points: 5, prompt: "Explain the controls required for a ratio feature.", sampleAnswer: "Compatible units, a valid nonzero denominator, missing and zero policy, outlier review, and clear interpretation." },
      { id: "check-05-05-09", type: "reconciliation", points: 5, prompt: "State row and amount controls for a many-to-one left join.", sampleAnswer: "Left rows equal matched plus unmatched left rows, and each additive source amount equals its matched plus unmatched amounts, with no multiplication." },
      { id: "check-05-05-10", type: "validation", points: 5, prompt: "Give eight tests required before publishing an integrated feature table.", sampleAnswer: "Test schemas, input/output grain, key nulls, key uniqueness, cardinality, match coverage, exact orphans, row balance, amount balance, pivot uniqueness, feature dtypes, time cutoffs, prior-only behavior, and deterministic order; any eight earn full credit." },
    ],
  },

  researchExtension: {
    title: "Join Cardinality, Reshape Semantics, and Feature Leakage Study",
    researchQuestion:
      "How do join type, key cardinality, unmatched-key policy, reshape aggregation, and feature time windows change analytical and predictive results?",
    applicationOptions: [
      "Maintenance incidents and assets",
      "Sales facts and product dimensions",
      "Student attempts and course dimensions",
      "Transactions and customer histories",
      "Healthcare encounters and provider references",
      "Point-in-time machine-learning feature tables",
    ],
    task:
      "Build controlled fact and dimension tables containing orphan keys, duplicate dimension keys, legitimate one-to-many relations, repeated pivot combinations, and timestamped entity histories. Compare safe and unsafe transformations while keeping exact lineage.",
    requiredEvidence: [
      "Input and output grain maps with business and foreign keys",
      "Key frequency and null profiles on both sides of every join",
      "Cardinality declarations and validate failures for deliberately broken fixtures",
      "Matched, left-only, and right-only evidence with exact IDs",
      "Row and amount reconciliation under alternative join types",
      "Long-to-wide and wide-to-long round-trip tests",
      "Current-inclusive versus prior-only feature comparison",
      "Reproducible code, timings, versions, limitations, and governance recommendation",
    ],
  },

  portfolioArtifact: {
    title: "Lesson 5 Portfolio Evidence: Audited Analytical Integration and Feature Pipeline",
    description:
      "Create a reusable pandas workflow that integrates a fact table with governed dimensions, publishes summaries and reshaped KPIs, and produces point-in-time-correct model features.",
    requiredSections: [
      "README with decisions, source grains, keys, cardinalities, units, cutoffs, outputs, and limitations",
      "Input schema, key-frequency, null, and referential-integrity profiles",
      "Validated joins with indicators, explicit suffixes, and orphan quarantine",
      "Named group summaries with denominator and additive-measure definitions",
      "Long and wide reshaping with uniqueness and round-trip controls",
      "Guarded ratios plus lag, cumulative, and rolling prior-only features",
      "Row, amount, group-total, and feature-lineage reconciliation",
      "Automated tests for cardinality failures, orphans, zero denominators, ties, empty groups, and cutoff boundaries",
    ],
    requiredEvidence: [
      "At least one aggregation and one row-aligned transform",
      "At least two join types with a documented reason for each",
      "One deliberate many-to-many failure caught by validation or pre-checks",
      "One melt and one pivot or pivot_table operation",
      "At least six transparent features including one prior-only history feature",
      "Exact expected matched and orphan IDs",
      "Source-to-output row and amount reconciliation",
      "Reproducible environment and no private or uncontrolled production data",
    ],
  },

  growthIndicators: [
    { title: "Aggregation Designer", description: "You define group grain, denominators, additive measures, and row-preserving versus row-reducing operations." },
    { title: "Join Cardinality Auditor", description: "You profile keys, enforce relationships, retain orphans, and reconcile facts and amounts." },
    { title: "Reshape Modeler", description: "You move between long and wide forms without hiding duplicate combinations or missing semantics." },
    { title: "Leakage-Safe Feature Engineer", description: "You create interpretable, point-in-time-correct features reproducible during inference." },
  ],

  reflection: [
    "What is the grain of every table before and after your current transformation?",
    "Which group metric uses rows when the decision requires distinct entities?",
    "Which average of averages ignores unequal group sizes?",
    "Which join assumes right-key uniqueness without testing it?",
    "Which unmatched keys disappear through an inner join?",
    "Which amount could be multiplied by duplicate dimension rows?",
    "Which pivot aggregates repeated combinations without an approved rule?",
    "Which ratio lacks a zero-denominator policy?",
    "Which history feature includes the current or future observation?",
    "Which tests prove training and production features use the same definitions?",
  ],

  summary: [
    "Every aggregation, join, reshape, and feature operation changes or preserves grain in a specific way that must be declared.",
    "groupby follows split-apply-combine; named aggregation produces explicit group-level outputs.",
    "agg reduces rows, transform returns aligned row-level values, filter retains whole qualifying groups, and apply supports custom logic with greater risk.",
    "Counts, distinct counts, means, rates, and weighted means require explicit eligible populations and denominators.",
    "Profile null and repeated keys on both sides before merging and declare expected cardinality.",
    "Use merge validate to make one-to-one, many-to-one, or one-to-many violations fail immediately.",
    "A left join retains the driving population but can still multiply rows if the right key is duplicated.",
    "Use merge indicators to retain matched, left-only, and right-only coverage evidence.",
    "Reconcile both rows and additive amounts after integration.",
    "Concatenation appends or aligns tables; it does not replace relational key matching and requires source lineage.",
    "Long format stores repeated measurements in rows; wide format spreads categories or variables across columns.",
    "pivot requires unique key combinations, while pivot_table aggregates repetition under an explicit rule.",
    "Guard ratio features against zero, missing, invalid, and incompatible denominators.",
    "Lag, cumulative, and rolling features must be grouped by entity, chronologically ordered, and restricted to prior information.",
    "Feature engineering for AI requires point-in-time correctness, leakage prevention, entity-aware evaluation, and training-serving parity.",
    "Exact IDs, key coverage, group totals, row counts, amounts, and feature fixtures turn transformations into auditable evidence.",
  ],

  previousLesson: {
    id: "data-ai-m05-l04",
    moduleNumber: 5,
    slug: "missing-data-data-types-duplicates-and-validation",
    title: "Missing Data, Data Types, Duplicates, and Validation",
  },
  nextLesson: null,

  lumineryGuidance: {
    message:
      "Declare the grain, validate every key relationship, retain unmatched evidence, and create features using only information available at the decision time.",
    prompt:
      "Act as my senior pandas integration engineer, analytical modeler, and AI feature-governance coach. Help me complete Module 5 Lesson 5 one verified gate at a time. Require input and output grain, business and foreign keys, group denominators, additive-measure rules, key-frequency profiles, declared join cardinality, merge validation, indicator evidence, exact orphan IDs, row and amount reconciliation, reshape uniqueness, guarded ratios, deterministic chronological order, prior-only windows, point-in-time cutoffs, and training-serving parity. Do not let me average averages blindly, merge unprofiled keys, hide unmatched records, accept many-to-many multiplication, aggregate pivot collisions without a rule, divide by uncontrolled denominators, or create features from current or future information.",
    coachingQuestions: [
      "What does one row mean before and after this operation?",
      "Which key defines each table and is it unique where required?",
      "What cardinality should the join enforce?",
      "Which records are matched, left-only, or right-only?",
      "Which row and amount balances must hold?",
      "Does this reshape require unique combinations or an aggregation?",
      "What is the denominator and zero policy for this feature?",
      "Was every historical value available before the current event?",
      "Which exact tests prove the final feature table is correct?",
    ],
  },
};

export default lesson05;
