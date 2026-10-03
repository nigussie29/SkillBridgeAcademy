const lesson03 = {
  id: "data-ai-m04-l03",
  courseId: "data-ai-foundations",
  moduleId: "data-ai-foundations-module-04",
  moduleNumber: 4,
  lessonNumber: 3,
  slug: "safe-joins-unmatched-records-and-double-counting",
  title: "Safe Joins, Unmatched Records, and Double Counting",
  shortTitle: "Safe Joins and Double Counting",
  subtitle:
    "Combine relational tables without losing records, multiplying measures, or hiding data-quality defects by governing grain, cardinality, match rules, and reconciliation controls.",
  status: "available",
  duration: "4–5 hours",
  level: "Beginner to Professional",

  essentialQuestion:
    "How can we combine related tables while preserving the intended population and grain, exposing unmatched records, and proving that counts and additive measures were not lost or multiplied?",
  bigIdea:
    "A join is a controlled change of grain. The join type controls record preservation, the join condition controls matching, relationship cardinality controls fanout, and reconciliation proves whether the result remains fit for analysis.",

  whyThisLessonExists: {
    title: "A Join Can Be Valid SQL and Invalid Evidence",
    introduction:
      "Joining tables is central to analytics, data engineering, BI, and AI. It is also one of the fastest ways to create believable but incorrect results. An inner join can silently remove legitimate records, an incomplete condition can match unrelated rows, and a one-to-many join can repeat a parent measure across several child rows.",
    centralProblem:
      "A robotics team joins work orders to assets and part-usage records. The query runs and the dashboard looks complete, but one work order disappears because its robot is missing from the asset master, while downtime grows from 360 to 510 minutes because work orders with multiple parts are repeated.",
    purpose:
      "This lesson develops a repeatable safe-join method: declare each table's grain and key, state expected cardinality, choose the record-preservation rule, test both matched and unmatched records, measure fanout, pre-aggregate child data when required, and reconcile row counts and measures before publishing.",
  },

  problemFirst: {
    title: "Opening Investigation: Where Did 150 Extra Minutes Come From?",
    scenario:
      "Seven maintenance work orders contain 360 total downtime minutes. After joining asset details and part-usage lines, the report contains nine rows and 510 downtime minutes. An inner join to the asset master also returns only six work orders because robot R-404 is absent from the master table.",
    questions: [
      "What does one row represent in each source table?",
      "Which columns uniquely identify assets, work orders, and part-usage lines?",
      "Is each relationship one-to-one, one-to-many, or many-to-many?",
      "Which table defines the population that must be preserved?",
      "Why does an inner join remove the R-404 work order?",
      "Why are the downtime values for work orders with two parts repeated?",
      "Should parts be aggregated to one row per work order before the join?",
      "Which row counts, distinct keys, unmatched counts, and measure totals prove the corrected result?",
    ],
    expectedInsight:
      "The extra downtime is not a calculation mistake inside SUM; it is a grain mistake created before SUM. Diagnose the relationship and fanout first, then join tables at compatible grains and reconcile the result.",
  },

  learningObjectives: [
    "State the row grain, candidate key, and authoritative role of every table before joining.",
    "Explain one-to-one, one-to-many, many-to-one, and many-to-many relationships in both join directions.",
    "Select INNER, LEFT, RIGHT, FULL OUTER, or CROSS join behavior according to an explicit record-preservation requirement.",
    "Write complete join predicates using the full natural or composite relationship key.",
    "Distinguish matched, left-only, and right-only records and measure each population.",
    "Detect fanout using joined row counts, distinct driving keys, per-key multiplicity, and fanout factors.",
    "Explain why parent-level additive measures are repeated by one-to-many joins.",
    "Pre-aggregate child tables to the required analytical grain before joining.",
    "Use bridge tables for governed many-to-many relationships and avoid uncontrolled path duplication.",
    "Place filters in ON or WHERE deliberately so outer-join preservation is not changed accidentally.",
    "Reconcile rows, keys, measures, nulls, and unmatched records before publishing a joined dataset.",
    "Translate safe-join controls into tests for BI models, data pipelines, and AI training datasets.",
  ],

  prerequisiteKnowledge: [
    "Lesson 1: table grain, primary and foreign keys, cardinality, optionality, and integrity",
    "Lesson 2: WHERE, GROUP BY, aggregates, distinct counts, conditional measures, and reconciliation",
    "Module 2: denominators, rates, missingness, unusual values, and measurement quality",
    "Basic SQL SELECT syntax and the ability to inspect a small relational dataset",
    "The computational lab uses Python, pandas, and SQLite, but the SQL can be studied independently",
  ],

  visualModels: [
    {
      id: "safe-join-control-cycle",
      type: "lifecycle",
      title: "Safe Join Control Cycle",
      description:
        "A reliable join is designed and audited as a sequence of grain, relationship, preservation, and reconciliation decisions.",
      stages: [
        { label: "1. Declare grain", detail: "Write what one row represents in every table and identify the tested unique key at that grain." },
        { label: "2. Predict cardinality", detail: "State the expected relationship in the actual join direction and identify which side may repeat." },
        { label: "3. Choose preservation", detail: "Name the driving population and select a join type that preserves the records required by the decision." },
        { label: "4. Test matching", detail: "Use the complete relationship key and profile matched, left-only, right-only, null-key, and duplicate-key populations." },
        { label: "5. Control fanout", detail: "Measure rows per driving key and pre-aggregate or bridge child records when the target grain must remain unchanged." },
        { label: "6. Reconcile", detail: "Compare pre- and post-join rows, distinct keys, measures, nulls, and exclusions; publish only when every difference is explained." },
      ],
      feedback:
        "If row counts or totals change unexpectedly, return to the earliest stage whose assumption failed instead of adding DISTINCT to hide the symptom.",
      interpretation:
        "Safe joining is not one SQL clause. It is a controlled transformation with an expected population, target grain, measured match behavior, and explicit acceptance tests.",
    },
  ],

  vocabulary: [
    { term: "Join", definition: "A relational operation that combines rows from two inputs according to a matching condition." },
    { term: "Driving table", definition: "The input whose population and grain define the starting analytical set for a join." },
    { term: "Joined table", definition: "The input supplying related attributes or child records to the driving population." },
    { term: "Join key", definition: "The column or column combination used to determine whether two rows are related." },
    { term: "Composite join key", definition: "A relationship key containing multiple columns, all of which are required for a valid match." },
    { term: "Join predicate", definition: "The ON condition that expresses the complete relationship between joined inputs." },
    { term: "Equi-join", definition: "A join whose matching rule uses equality between relationship keys." },
    { term: "Non-equi join", definition: "A join using ranges or other inequalities, often for time validity or band assignment, requiring overlap controls." },
    { term: "INNER JOIN", definition: "A join returning only rows that satisfy the match condition on both sides." },
    { term: "LEFT JOIN", definition: "A join preserving every left-side row and supplying nulls when no right-side match exists." },
    { term: "RIGHT JOIN", definition: "A join preserving every right-side row and supplying nulls when no left-side match exists." },
    { term: "FULL OUTER JOIN", definition: "A join preserving matched rows plus unmatched rows from both inputs." },
    { term: "CROSS JOIN", definition: "A Cartesian combination returning every left row paired with every right row." },
    { term: "Matched record", definition: "A driving row with at least one related row satisfying the complete join predicate." },
    { term: "Unmatched record", definition: "A row with no related record on the opposite side under the approved join rule." },
    { term: "Orphan record", definition: "A child row whose foreign-key value has no valid parent record." },
    { term: "Anti-join", definition: "A pattern that returns rows from one input that have no match in another input." },
    { term: "Semi-join", definition: "A pattern that returns driving rows when at least one match exists without returning or multiplying child rows." },
    { term: "Cardinality", definition: "The allowed or observed number of related rows between entities, such as one-to-many." },
    { term: "Multiplicity", definition: "The observed number of matches produced for a particular key in a relationship." },
    { term: "Fanout", definition: "The increase in rows when one driving row matches multiple joined rows." },
    { term: "Fanout factor", definition: "The ratio of post-join rows to pre-join driving rows for a defined population." },
    { term: "Double counting", definition: "Overstating a count or additive measure because the same business event appears more than once at the result grain." },
    { term: "Measure inflation", definition: "The increase in an additive total caused by duplication, overlap, or incompatible grains." },
    { term: "Pre-aggregation", definition: "Summarizing a many-side table to the required target grain before joining it to another table." },
    { term: "Bridge table", definition: "A governed table resolving a many-to-many relationship through one row per valid association." },
    { term: "Degenerate duplicate", definition: "An unintended repeated key caused by source defects rather than legitimate business multiplicity." },
    { term: "Slowly changing dimension", definition: "A dimension that stores historical versions of entity attributes, often joined with key and effective-date rules." },
    { term: "Temporal join", definition: "A join that matches a record to the version or interval valid at a specific time." },
    { term: "Filter placement", definition: "The decision to apply a condition in ON, WHERE, a subquery, or a pre-aggregation stage, which can change preservation." },
    { term: "Join path", definition: "The sequence of relationships used to connect tables; multiple paths can create ambiguity or duplicate matches." },
    { term: "Reconciliation", definition: "Evidence that joined outputs preserve or intentionally change rows, keys, and measures according to approved rules." },
  ],

  formulas: [
    { id: "fanout-factor", name: "Fanout factor", formula: "fanout factor = post-join row count / pre-join driving row count", meaning: "Measures the average row expansion created by a join.", requirement: "Calculate for the same eligible driving population; a value above 1 requires a documented one-to-many purpose or correction." },
    { id: "match-rate", name: "Driving-key match rate", formula: "match rate = matched distinct driving keys / eligible distinct driving keys", meaning: "Shows the share of driving entities or events with at least one approved match.", requirement: "Use distinct driving keys so multiple child matches do not inflate the numerator." },
    { id: "unmatched-rate", name: "Unmatched rate", formula: "unmatched rate = unmatched distinct driving keys / eligible distinct driving keys", meaning: "Quantifies records preserved without a valid match.", requirement: "Match rate + unmatched rate should equal 1 for an exhaustive left-side audit." },
    { id: "key-multiplicity", name: "Per-key multiplicity", formula: "multiplicity(k) = COUNT(joined rows for driving key k)", meaning: "Reveals which keys create zero, one, or many matches.", requirement: "Inspect the full distribution and list keys above the expected maximum rather than relying only on an average." },
    { id: "measure-inflation", name: "Measure inflation ratio", formula: "inflation ratio = post-join additive total / authoritative pre-join total", meaning: "Measures how much an additive value changed after joining.", requirement: "Use a measure authoritative at the driving grain; a ratio other than 1 must be intentionally explained." },
    { id: "reconciliation-delta", name: "Measure reconciliation delta", formula: "reconciliation delta = post-join total - authoritative pre-join total", meaning: "Expresses the absolute amount lost or added by the join.", requirement: "Expected delta is zero when the target grain should preserve the driving measure." },
    { id: "many-side-preaggregation", name: "Safe many-side pre-aggregation", formula: "child summary per parent = GROUP BY parent_key before joining", meaning: "Produces at most one summarized child row for each parent key at the preserved target grain.", requirement: "Validate uniqueness of the summarized parent key and reconcile the child total before and after aggregation." },
  ],

  workedExamples: [
    {
      id: "example-04-03-01",
      title: "Choose a join type from the preservation rule",
      problem: "A maintenance report must include every September work order, even when the robot is missing from the asset master. Which join should be used?",
      solutionSteps: [
        "Name work_orders as the driving population because every eligible work order must remain visible.",
        "Join assets on the approved robot key.",
        "Use LEFT JOIN from work_orders to assets so unmatched work orders remain.",
        "Return a match-status flag and report missing asset attributes instead of filtering them away.",
      ],
      answer: "FROM work_orders w LEFT JOIN assets a ON w.robot_id = a.robot_id",
      interpretation: "An INNER JOIN would silently remove the orphan work order and understate downtime; a left join preserves the decision population and exposes the defect.",
    },
    {
      id: "example-04-03-02",
      title: "Audit matched and unmatched records",
      problem: "Seven work orders are left joined to assets. Six have a valid asset match and one does not. Calculate the match and unmatched rates.",
      solutionSteps: [
        "Count distinct eligible work_order_id values: 7.",
        "Count distinct work orders with a non-null matched asset key: 6.",
        "Calculate 6 / 7 = 85.71% match rate.",
        "Calculate 1 / 7 = 14.29% unmatched rate and verify the two rates sum to 100%.",
      ],
      answer: "Match rate = 85.71%; unmatched rate = 14.29%.",
      interpretation: "A preserved unmatched record is not a successful enrichment; it is visible quality evidence that needs ownership and resolution.",
    },
    {
      id: "example-04-03-03",
      title: "Detect fanout before calculating totals",
      problem: "Seven work orders become nine rows after a direct left join to part-usage lines. What does the fanout factor show?",
      solutionSteps: [
        "Record the seven-row work-order baseline.",
        "Count nine rows after the join and seven distinct work orders.",
        "Calculate 9 / 7 = 1.286.",
        "Group the joined result by work_order_id to identify the two work orders with two part lines each.",
      ],
      answer: "Fanout factor = 1.286, with two driving keys producing two joined rows.",
      interpretation: "The join may be structurally correct at work-order-part grain, but parent measures such as work-order downtime are unsafe to sum at that expanded grain.",
    },
    {
      id: "example-04-03-04",
      title: "Explain measure inflation",
      problem: "Downtime is 360 minutes before the part join and 510 minutes afterward. Quantify the distortion.",
      solutionSteps: [
        "Treat 360 as the authoritative work-order-grain total.",
        "Calculate the reconciliation delta: 510 - 360 = 150 minutes.",
        "Calculate the inflation ratio: 510 / 360 = 1.4167.",
        "Trace the 150 duplicated minutes to work orders that matched more than one part line.",
      ],
      answer: "The join added 150 minutes and inflated downtime by about 41.67%.",
      interpretation: "SUM is behaving correctly over the rows it receives; the analytical error is that the same work-order measure is repeated at a finer grain.",
    },
    {
      id: "example-04-03-05",
      title: "Pre-aggregate the many side",
      problem: "Create one row per work order containing downtime and total part spend without multiplying downtime.",
      solutionSteps: [
        "Aggregate parts_usage by work_order_id to one row containing SUM(quantity * unit_cost).",
        "Test that the summarized work_order_id is unique and its spend reconciles to raw part lines.",
        "Left join the one-row-per-work-order summary to work_orders.",
        "Recheck row count, distinct work orders, total downtime, part spend, and unmatched keys.",
      ],
      answer: "Use a CTE grouped by work_order_id, then left join that unique summary to the work-order table.",
      interpretation: "Pre-aggregation aligns grains: one work-order row joins to at most one child-summary row, preserving parent measures while adding a governed child measure.",
    },
    {
      id: "example-04-03-06",
      title: "Preserve an outer join when filtering",
      problem: "A left join must preserve work orders without part lines, but the query contains WHERE p.quantity > 0. What happens?",
      solutionSteps: [
        "Unmatched work orders receive NULL for p.quantity.",
        "The WHERE condition evaluates to UNKNOWN for those rows and removes them.",
        "Move the child eligibility rule into the ON clause or apply it inside a child subquery before the left join.",
        "Recount matched, unmatched, and total driving keys after the change.",
      ],
      answer: "WHERE p.quantity > 0 converts the preserved result into inner-join-like behavior for that condition; filter the child source or ON condition instead.",
      interpretation: "Join type alone does not guarantee preservation. Later predicates can change the effective population.",
    },
  ],

  interactiveExploration: {
    title: "Join Audit Matrix: Predict Before You Run",
    description:
      "Use two small tables to predict output rows, then compare the prediction with SQL and document every difference.",
    instructions: [
      "Write the grain and tested unique key for both tables.",
      "Create a key-frequency table for each side, including null keys and duplicates.",
      "Classify keys as matched, left-only, right-only, one-to-one, one-to-many, or many-to-many.",
      "Predict row counts for INNER, LEFT, and FULL OUTER joins before running them.",
      "Run each join and compare total rows, distinct keys, and unmatched counts with the prediction.",
      "Add a parent-level additive measure and observe how one-to-many matches repeat it.",
      "Calculate per-key multiplicity, fanout factor, inflation ratio, and reconciliation delta.",
      "Pre-aggregate the many side, rerun the join, and prove the target grain is restored.",
      "Place the same child filter first in WHERE and then in ON; explain the population change.",
      "Create a join-audit record containing expected and actual controls with pass/fail status.",
    ],
    questions: [
      "Which keys produced more rows than predicted?",
      "Were repeated matches legitimate business detail or source duplicates?",
      "Which unmatched records are data defects, timing differences, or valid optional relationships?",
      "Which measure can be summed safely at each observed grain?",
      "How did filter placement change the effective join type?",
      "Which controls should block publication automatically?",
    ],
    expectedDiscovery:
      "A safe join is predictable. When source key frequencies and cardinality are known, output rows, unmatched populations, and permissible measures can be forecast and tested before the result is trusted.",
  },

  realWorldApplications: [
    { field: "Manufacturing and Robotics", application: "Join work orders, asset masters, sensor events, technician activity, and part usage while preserving incidents and preventing downtime or repair-cost multiplication." },
    { field: "Finance", application: "Join accounts, customers, transactions, and ownership bridges without dropping unassigned records or duplicating balances across joint owners." },
    { field: "Education", application: "Join students, enrollments, attendance, assessments, and interventions at compatible grains while protecting privacy-aware subgroup counts." },
    { field: "Healthcare Operations", application: "Join encounters, patients, providers, procedures, and claims while preserving authorized populations and controlling one-to-many service lines." },
    { field: "Retail and Supply Chain", application: "Join orders, shipments, order lines, suppliers, and returns without multiplying order revenue or hiding orders that lack shipment matches." },
    { field: "AI and Machine Learning", application: "Join predictions, labels, reviews, feature snapshots, and model versions without duplicating scoring events or excluding delayed outcomes silently." },
  ],

  aiConnection: {
    title: "Training Data Quality Depends on Join Quality",
    explanation:
      "Machine-learning datasets often combine features, predictions, labels, and outcomes from different systems and time grains. A many-to-many join can give some entities extra weight, an inner join can remove difficult unlabeled cases, and an incorrect temporal join can attach future information to earlier predictions.",
    example:
      "A predictive-maintenance dataset begins with one row per failure-risk snapshot. Sensor features are aggregated only from timestamps available before the snapshot, work-order outcomes are reduced to one governed label per horizon, and all unmatched snapshots remain visible with label-availability flags.",
    uses: [
      "Construct one-row-per-observation training tables",
      "Prevent target leakage with temporal join boundaries",
      "Measure label coverage and delayed-outcome populations",
      "Avoid unintended sample weighting caused by fanout",
      "Reconcile model cohorts across training, validation, and monitoring",
    ],
    caution:
      "Do not use DISTINCT as a general repair. It may hide duplicated rows while leaving conflicting attributes, biased measures, temporal leakage, or missing populations unresolved.",
    reflectionQuestion:
      "How could a direct join between predictions and multiple review records bias model evaluation even when each review is valid?",
  },

  pythonLab: {
    title: "Build a Join Audit and Repair Fanout",
    objective:
      "Create related SQLite tables, expose record loss and measure inflation, repair the result with left joins and pre-aggregation, and prove correctness with executable assertions.",
    code: `import sqlite3
import pandas as pd

connection = sqlite3.connect(":memory:")

connection.executescript("""
CREATE TABLE assets (
    robot_id TEXT PRIMARY KEY,
    plant TEXT NOT NULL,
    model TEXT NOT NULL
);

CREATE TABLE work_orders (
    work_order_id TEXT PRIMARY KEY,
    robot_id TEXT NOT NULL,
    downtime_min INTEGER NOT NULL CHECK (downtime_min >= 0),
    labor_cost REAL NOT NULL CHECK (labor_cost >= 0)
);

CREATE TABLE parts_usage (
    usage_id TEXT PRIMARY KEY,
    work_order_id TEXT NOT NULL,
    part_id TEXT NOT NULL,
    quantity INTEGER NOT NULL CHECK (quantity > 0),
    unit_cost REAL NOT NULL CHECK (unit_cost >= 0)
);
""")

assets = [
    ("R-101", "A", "RX-1"),
    ("R-102", "A", "RX-1"),
    ("R-201", "B", "QZ-2"),
    ("R-202", "B", "QZ-2"),
    ("R-301", "C", "MX-3"),
    ("R-999", "D", "LAB-1"),
]

work_orders = [
    ("WO-001", "R-101", 90, 1200.0),
    ("WO-002", "R-101", 30, 400.0),
    ("WO-003", "R-102", 45, 600.0),
    ("WO-004", "R-201", 60, 900.0),
    ("WO-005", "R-202", 20, 250.0),
    ("WO-006", "R-404", 75, 1000.0),
    ("WO-007", "R-301", 40, 500.0),
]

parts_usage = [
    ("U-001", "WO-001", "P-A", 2, 200.0),
    ("U-002", "WO-001", "P-B", 1, 150.0),
    ("U-003", "WO-002", "P-A", 1, 200.0),
    ("U-004", "WO-004", "P-C", 3, 100.0),
    ("U-005", "WO-004", "P-D", 1, 250.0),
    ("U-006", "WO-005", "P-E", 1, 80.0),
    ("U-007", "WO-006", "P-C", 1, 100.0),
    ("U-008", "WO-007", "P-B", 2, 150.0),
]

connection.executemany("INSERT INTO assets VALUES (?, ?, ?)", assets)
connection.executemany("INSERT INTO work_orders VALUES (?, ?, ?, ?)", work_orders)
connection.executemany("INSERT INTO parts_usage VALUES (?, ?, ?, ?, ?)", parts_usage)

baseline = pd.read_sql_query("SELECT * FROM work_orders", connection)

# An inner join loses the work order for missing robot R-404.
inner_asset_join = pd.read_sql_query("""
SELECT w.*, a.plant, a.model
FROM work_orders AS w
INNER JOIN assets AS a
    ON w.robot_id = a.robot_id
ORDER BY w.work_order_id
""", connection)

# A left join preserves the driving work-order population and exposes the defect.
left_asset_join = pd.read_sql_query("""
SELECT
    w.*,
    a.plant,
    a.model,
    CASE WHEN a.robot_id IS NULL THEN 'UNMATCHED' ELSE 'MATCHED' END AS match_status
FROM work_orders AS w
LEFT JOIN assets AS a
    ON w.robot_id = a.robot_id
ORDER BY w.work_order_id
""", connection)

unmatched_work_orders = pd.read_sql_query("""
SELECT w.work_order_id, w.robot_id
FROM work_orders AS w
LEFT JOIN assets AS a
    ON w.robot_id = a.robot_id
WHERE a.robot_id IS NULL
ORDER BY w.work_order_id
""", connection)

assets_without_work_orders = pd.read_sql_query("""
SELECT a.robot_id, a.plant
FROM assets AS a
LEFT JOIN work_orders AS w
    ON a.robot_id = w.robot_id
WHERE w.work_order_id IS NULL
ORDER BY a.robot_id
""", connection)

# Unsafe: work-order downtime repeats for every matched part line.
unsafe_join = pd.read_sql_query("""
SELECT
    w.work_order_id,
    w.downtime_min,
    p.usage_id,
    p.quantity * p.unit_cost AS part_spend
FROM work_orders AS w
LEFT JOIN parts_usage AS p
    ON w.work_order_id = p.work_order_id
ORDER BY w.work_order_id, p.usage_id
""", connection)

# Safe at work-order grain: summarize the many side first.
safe_join = pd.read_sql_query("""
WITH part_totals AS (
    SELECT
        work_order_id,
        COUNT(*) AS part_lines,
        SUM(quantity) AS part_quantity,
        SUM(quantity * unit_cost) AS part_spend
    FROM parts_usage
    GROUP BY work_order_id
)
SELECT
    w.work_order_id,
    w.robot_id,
    a.plant,
    a.model,
    w.downtime_min,
    w.labor_cost,
    COALESCE(p.part_lines, 0) AS part_lines,
    COALESCE(p.part_quantity, 0) AS part_quantity,
    COALESCE(p.part_spend, 0) AS part_spend,
    CASE WHEN a.robot_id IS NULL THEN 'UNMATCHED' ELSE 'MATCHED' END AS asset_match
FROM work_orders AS w
LEFT JOIN assets AS a
    ON w.robot_id = a.robot_id
LEFT JOIN part_totals AS p
    ON w.work_order_id = p.work_order_id
ORDER BY w.work_order_id
""", connection)

baseline_downtime = int(baseline["downtime_min"].sum())
unsafe_downtime = int(unsafe_join["downtime_min"].sum())
safe_downtime = int(safe_join["downtime_min"].sum())
fanout_factor = len(unsafe_join) / len(baseline)
match_rate = (left_asset_join["match_status"] == "MATCHED").mean()

assert len(baseline) == 7
assert baseline["work_order_id"].is_unique
assert baseline_downtime == 360

assert len(inner_asset_join) == 6
assert int(inner_asset_join["downtime_min"].sum()) == 285
assert len(left_asset_join) == 7
assert int(left_asset_join["downtime_min"].sum()) == 360
assert unmatched_work_orders["work_order_id"].tolist() == ["WO-006"]
assert assets_without_work_orders["robot_id"].tolist() == ["R-999"]

assert len(unsafe_join) == 9
assert unsafe_join["work_order_id"].nunique() == 7
assert unsafe_downtime == 510
assert round(fanout_factor, 3) == 1.286

assert len(safe_join) == 7
assert safe_join["work_order_id"].is_unique
assert safe_downtime == 360
assert round(float(safe_join["part_spend"].sum()), 2) == 1780.00
assert round(match_rate, 4) == 0.8571

print("Baseline rows and downtime:", len(baseline), baseline_downtime)
print("Inner-join rows and downtime:", len(inner_asset_join), int(inner_asset_join["downtime_min"].sum()))
print("Unmatched work orders:", unmatched_work_orders.to_dict("records"))
print("Assets without work orders:", assets_without_work_orders.to_dict("records"))
print("Unsafe rows, downtime, fanout:", len(unsafe_join), unsafe_downtime, round(fanout_factor, 3))
print("Safe rows, downtime, part spend:", len(safe_join), safe_downtime, float(safe_join["part_spend"].sum()))
print("Match rate:", round(match_rate * 100, 2), "%")
print("All safe-join and reconciliation tests passed.")`,
    questions: [
      "What is the grain and key of each of the three tables?",
      "Why does the inner asset join return six instead of seven work orders?",
      "Which anti-join identifies the missing asset relationship?",
      "Why does the direct part join produce nine rows and 510 downtime minutes?",
      "Which work orders have multiplicity greater than one?",
      "How does the part_totals CTE restore one-row-per-work-order grain?",
      "Why is COALESCE appropriate for part spend on a work order with no part lines?",
      "Which assertions would fail if a duplicate asset key were admitted?",
    ],
    reflectionQuestions: [
      "Should WO-006 be excluded, enriched later, or retained with an unmatched flag for the intended decision?",
      "What process should own correction of missing asset R-404?",
      "Which tests should run automatically before every dashboard refresh or model-training build?",
    ],
    extension:
      "Add effective_start and effective_end columns to a versioned asset-history table, join each work order to the asset version valid when it opened, deliberately create an overlapping interval, and write assertions that every work order matches at most one valid history row.",
  },

  guidedPractice: [
    { id: "gp-04-03-01", question: "What four facts should be written before a join?", answer: "Each table's row grain, tested key, expected relationship cardinality, and required record-preservation rule." },
    { id: "gp-04-03-02", question: "When should a LEFT JOIN be preferred to an INNER JOIN?", answer: "When every eligible left-side record must remain visible even if its related right-side record is missing." },
    { id: "gp-04-03-03", question: "What does a fanout factor above 1 mean?", answer: "The join returned more rows than the driving population, so at least some driving records matched multiple rows." },
    { id: "gp-04-03-04", question: "How do you find left-side records with no match?", answer: "Use a left anti-join pattern: LEFT JOIN, then WHERE the matched right-side key IS NULL, or use NOT EXISTS." },
    { id: "gp-04-03-05", question: "Why can WHERE on a right-side column break a LEFT JOIN?", answer: "Unmatched rows contain NULL right-side values, so the WHERE predicate removes them and changes the effective preservation behavior." },
    { id: "gp-04-03-06", question: "What is the safest way to add child totals to a parent-grain report?", answer: "Aggregate the child table to one tested-unique row per parent key, reconcile it, and then join that summary to the parent." },
  ],

  independentPractice: [
    { id: "ip-04-03-01", difficulty: "Foundational", question: "Explain the population difference between INNER JOIN and LEFT JOIN from customers to orders.", sampleAnswer: "INNER JOIN keeps only customers with matching orders; LEFT JOIN preserves all eligible customers and returns null order fields for customers without orders." },
    { id: "ip-04-03-02", difficulty: "Foundational", question: "Write an anti-join that finds shipments whose order_id is absent from orders.", sampleAnswer: "SELECT s.* FROM shipments s LEFT JOIN orders o ON s.order_id = o.order_id WHERE o.order_id IS NULL; NOT EXISTS is also valid." },
    { id: "ip-04-03-03", difficulty: "Applied", question: "A 1,000-row parent table becomes 1,350 rows after joining. Calculate and interpret fanout.", sampleAnswer: "Fanout factor = 1,350 / 1,000 = 1.35; the join created 35% more rows, so some parent keys matched multiple records." },
    { id: "ip-04-03-04", difficulty: "Applied", question: "Repair a query that joins orders directly to order_lines and then sums order_total.", sampleAnswer: "Do not sum order_total at line grain; retain one order row or aggregate lines to one row per order before joining, then reconcile order_total to the order baseline." },
    { id: "ip-04-03-05", difficulty: "Analytical", question: "Why is SELECT DISTINCT not a reliable double-counting solution?", sampleAnswer: "It removes only fully identical output rows, can hide symptoms, and does not resolve conflicting attributes, repeated measures, wrong keys, or incorrect target grain." },
    { id: "ip-04-03-06", difficulty: "Advanced", question: "Design controls for a temporal join between events and dimension history.", sampleAnswer: "Validate nonoverlapping effective intervals per entity, join on entity key plus event time within the interval, require at most one match per event, quantify unmatched events, and reconcile event totals." },
    { id: "ip-04-03-07", difficulty: "Professional", question: "Create a production join-acceptance checklist.", sampleAnswer: "Include source and target grain, key uniqueness/nulls, cardinality, preservation, complete predicate, duplicate-key handling, match and unmatched rates, multiplicity distribution, fanout, measure reconciliation, filter placement, temporal validity, sample rows, thresholds, ownership, and pass/fail status." },
  ],

  commonMistakes: [
    { mistake: "Joining before stating the grain and key of each table.", correction: "Write one-row grain statements and test uniqueness and nulls before selecting a join condition." },
    { mistake: "Using an INNER JOIN by habit.", correction: "Choose the join type from the business preservation rule and report excluded records explicitly." },
    { mistake: "Joining on a partial composite key.", correction: "Use every column required to identify the relationship, such as plant plus local robot identifier." },
    { mistake: "Assuming declared cardinality matches observed data.", correction: "Profile key frequencies and fail the pipeline when observed multiplicity exceeds the approved maximum." },
    { mistake: "Summing parent measures after a one-to-many join.", correction: "Preserve the parent grain or pre-aggregate the many side before joining." },
    { mistake: "Using DISTINCT to hide duplicate rows.", correction: "Diagnose duplicate keys, fanout, and target grain; repair the relationship rather than masking the output." },
    { mistake: "Filtering a right-side column in WHERE after a LEFT JOIN.", correction: "Place child eligibility in ON or a child subquery when unmatched left rows must remain." },
    { mistake: "Counting COUNT(*) as parent entities after fanout.", correction: "Use the validated parent key and report both joined rows and distinct parents." },
    { mistake: "Treating every unmatched row as bad data.", correction: "Classify valid optionality, timing lag, scope differences, and true integrity defects, then assign an owner." },
    { mistake: "Publishing without pre/post controls.", correction: "Reconcile rows, distinct keys, unmatched populations, nulls, and authoritative additive measures before release." },
  ],

  discussionQuestions: [
    "When should an unmatched record block publication rather than remain visible with a warning?",
    "How should a team choose between repairing source keys, using a mapping table, and excluding records?",
    "When is one-to-many fanout the intended output grain rather than an error?",
    "Which risks arise when several valid join paths connect the same tables in a BI model?",
    "What evidence should accompany a training dataset to prove that its joins did not create target leakage or sample-weight bias?",
  ],

  formativeAssessment: {
    totalPoints: 40,
    passingScore: 32,
    questions: [
      { id: "check-04-03-01", type: "grain", points: 5, prompt: "Explain why a join should be described as a change of grain.", sampleAnswer: "The relationship can preserve, remove, or repeat source rows; the output row meaning depends on both input grains, key multiplicity, join type, and target grain." },
      { id: "check-04-03-02", type: "join-type", points: 5, prompt: "Choose and justify a join that preserves all work orders when asset details may be missing.", sampleAnswer: "Use work_orders LEFT JOIN assets because work orders define the required population; flag null matched asset keys." },
      { id: "check-04-03-03", type: "anti-join", points: 5, prompt: "Write or explain a query that finds unmatched foreign keys.", sampleAnswer: "Left join child to parent on the full key and filter where the parent's non-null key is null, or use NOT EXISTS." },
      { id: "check-04-03-04", type: "fanout", points: 5, prompt: "Calculate fanout when 400 driving rows become 620 joined rows and explain the risk.", sampleAnswer: "620 / 400 = 1.55; parent-level counts or measures may be repeated unless the expanded grain is intended." },
      { id: "check-04-03-05", type: "double-counting", points: 5, prompt: "Explain why a correct SUM can still produce an incorrect total after a join.", sampleAnswer: "SUM adds every result row correctly, but a one-to-many join may repeat the same parent measure across several child rows." },
      { id: "check-04-03-06", type: "repair", points: 5, prompt: "Describe a pre-aggregation repair for a parent-child relationship.", sampleAnswer: "Group the child table to one unique row per parent key with governed measures, reconcile the child total, then join that summary to the parent." },
      { id: "check-04-03-07", type: "filter", points: 5, prompt: "Explain how filter placement can change outer-join behavior.", sampleAnswer: "A WHERE predicate on nullable right-side fields removes unmatched rows; filtering the right source or ON clause can preserve left rows." },
      { id: "check-04-03-08", type: "control", points: 5, prompt: "Give five controls required before a joined dataset is published.", sampleAnswer: "Input and output grain, key uniqueness/nulls, row and distinct-key counts, match/unmatched rates, multiplicity/fanout, additive-measure reconciliation, and reviewed exclusions; any five earn full credit." },
    ],
  },

  researchExtension: {
    title: "Join Reliability and Decision Bias Study",
    researchQuestion:
      "How do join type, duplicate keys, fanout, temporal overlap, and unmatched-record policy change analytical conclusions or model behavior?",
    applicationOptions: [
      "Robot maintenance and spare parts",
      "Customer accounts and joint ownership",
      "Student enrollment and interventions",
      "Patient encounters and procedures",
      "Orders, shipments, and returns",
      "Predictions, reviews, and delayed labels",
    ],
    task:
      "Build one approved joined dataset and at least four controlled defective variants: an inner-join loss, partial-key match, duplicate dimension key, direct one-to-many measure join, or overlapping temporal join. Compare their populations, totals, rates, rankings, and decisions, then propose automated blocking controls.",
    requiredEvidence: [
      "Source and target grain statements",
      "Entity-relationship and cardinality description",
      "Key-frequency and null profile for every input",
      "Approved join with documented preservation rule",
      "Matched, left-only, and right-only evidence",
      "Multiplicity distribution and fanout factor",
      "Pre/post measure reconciliation",
      "At least four controlled defects with impact analysis",
      "Automated tests, acceptance thresholds, ownership, and limitations",
    ],
  },

  portfolioArtifact: {
    title: "Lesson 3 Portfolio Evidence: Safe Join Audit Pack",
    description:
      "Extend the maintenance database with documented relationship rules, audited joins, exception outputs, pre-aggregated measures, and automated reconciliation tests.",
    requiredSections: [
      "Decision question, users, actions, and required preserved population",
      "Table inventory with grain, key, authoritative measures, and update timing",
      "Relationship matrix with cardinality, optionality, and complete predicates",
      "INNER, LEFT, anti-join, and controlled child-summary queries",
      "Matched and unmatched exception reports with owners",
      "Multiplicity, fanout, and measure-inflation analysis",
      "Pre-aggregation or bridge-table repair with proof of unique target grain",
      "Automated join-acceptance table with expected, actual, delta, and pass/fail",
      "README and decision brief explaining exclusions, limitations, and remediation",
    ],
    requiredEvidence: [
      "At least four related tables and six named SQL queries",
      "A grain and key test for every table",
      "One preserved unmatched-record example and one anti-join",
      "One deliberate fanout defect with quantified inflation",
      "One pre-aggregation repair",
      "One filter-placement comparison",
      "Row, key, match, fanout, and additive-measure reconciliations",
      "Executable script or notebook with passing assertions and captured results",
    ],
  },

  growthIndicators: [
    { title: "Relationship Analyst", description: "You translate business relationships into explicit grain, key, cardinality, optionality, and preservation rules." },
    { title: "Join Auditor", description: "You measure matches, unmatched records, multiplicity, fanout, and record loss instead of trusting a successful query." },
    { title: "Double-Count Preventer", description: "You recognize incompatible grains and align them through pre-aggregation, bridges, or a changed target grain." },
    { title: "Data Product Gatekeeper", description: "You require reconciled rows, keys, measures, exceptions, thresholds, and ownership before publication." },
  ],

  reflection: [
    "Which current report uses an inner join without documenting excluded records?",
    "Which parent measure is most vulnerable to repetition across child rows?",
    "Where could a partial composite key create false matches?",
    "Which unmatched records represent optionality, timing lag, or a true integrity defect?",
    "Which outer join could be changed accidentally by a WHERE predicate?",
    "What join control should automatically stop your next refresh or training run?",
  ],

  summary: [
    "A join is a controlled transformation of population and grain, not merely a way to add columns.",
    "Declare each input's grain and tested key before writing the join.",
    "Predict relationship cardinality in the direction the join will execute.",
    "Choose join type from an explicit record-preservation requirement.",
    "INNER JOIN can hide unmatched records; LEFT JOIN preserves the driving population but still requires an exception audit.",
    "Use the complete natural or composite relationship key to prevent false matches.",
    "Anti-joins expose unmatched records; semi-joins test existence without multiplying child rows.",
    "Fanout is detected with post/pre row ratios, distinct driving keys, and per-key multiplicity.",
    "Parent measures repeat across one-to-many child rows and can create double counting.",
    "Pre-aggregate the many side to one tested-unique row per target key before joining when parent grain must remain.",
    "Bridge tables govern many-to-many relationships; DISTINCT does not repair an undefined relationship.",
    "Filter placement in ON, WHERE, or a child subquery can change outer-join preservation.",
    "Temporal joins require complete entity keys, time-validity predicates, and overlap tests.",
    "Reconcile rows, distinct keys, matches, unmatched populations, nulls, and additive measures before publishing.",
    "Safe joins protect dashboards, financial totals, operational decisions, and AI training and evaluation datasets.",
  ],

  previousLesson: {
    id: "data-ai-m04-l02",
    moduleNumber: 4,
    slug: "filtering-sorting-grouping-and-aggregation",
    title: "Filtering, Sorting, Grouping, and Aggregation",
  },
  nextLesson: null,

  lumineryGuidance: {
    message:
      "Before joining, declare both grains and keys, predict cardinality, choose the preserved population, and write the controls that must remain true afterward.",
    prompt:
      "Act as my senior SQL join auditor and data-quality reviewer. Help me complete Module 4 Lesson 3 one verified step at a time. Require grain statements, tested keys, expected cardinality, preservation rules, complete join predicates, matched and unmatched populations, key-frequency profiles, multiplicity distributions, fanout factors, filter-placement checks, pre-aggregation where needed, and pre/post reconciliation of rows, distinct keys, nulls, and additive measures. Reject DISTINCT as a repair unless exact duplicate removal is itself the governed business rule. Do not let me publish a joined dataset until every lost or repeated record and every measure delta is explained.",
    coachingQuestions: [
      "What does one row represent on each side before the join?",
      "Which complete key proves the relationship?",
      "How many matches should each driving key produce?",
      "Which population must remain even when no match exists?",
      "Which keys are matched, left-only, right-only, duplicated, or null?",
      "Which measure repeats when the relationship fans out?",
      "Should the many side be pre-aggregated to the target grain?",
      "Which assertions prove that the final result is safe?",
    ],
  },
};

export default lesson03;
