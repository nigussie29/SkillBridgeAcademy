const lesson04 = {
  id: "data-ai-m04-l04",
  courseId: "data-ai-foundations",
  moduleId: "data-ai-foundations-module-04",
  moduleNumber: 4,
  lessonNumber: 4,
  slug: "subqueries-ctes-and-reusable-query-logic",
  title: "Subqueries, CTEs, and Reusable Query Logic",
  shortTitle: "Subqueries, CTEs, and Reusable Query Logic",
  subtitle:
    "Decompose complex analytical questions into named, testable SQL stages using scalar and correlated subqueries, EXISTS logic, derived tables, chained CTEs, and governed reusable patterns.",
  status: "available",
  duration: "4–5 hours",
  level: "Beginner to Professional",

  essentialQuestion:
    "How can we express complex analytical logic as understandable, reusable, and independently testable SQL stages without changing the intended population, grain, or totals?",
  bigIdea:
    "Reusable SQL is controlled reasoning. Subqueries answer focused questions inside a larger query, while CTEs give names and boundaries to intermediate populations and grains so each transformation can be inspected, tested, reconciled, and safely reused.",

  whyThisLessonExists: {
    title: "Complex Queries Need Visible Reasoning",
    introduction:
      "Real analytical questions rarely fit into one simple SELECT. They require an eligible population, entity summaries, comparisons with benchmarks, existence tests, exception rules, and final presentation. When all of that logic is compressed into one statement, errors become difficult to find and business definitions become difficult to review.",
    centralProblem:
      "A robotics analyst must identify machines with at least two September incidents and downtime above the fleet average. One version repeats the date and quality filter in four places, another compares row-level downtime with a robot-level benchmark, and a third uses NOT IN against a nullable key and returns no exceptions at all.",
    purpose:
      "This lesson shows how to select the correct subquery form, use EXISTS and NOT EXISTS safely, replace deeply nested logic with named CTE stages, control scope and grain, understand recursive CTE foundations, choose when a view or temporary table is more appropriate, and validate every intermediate result before trusting the final decision list.",
  },

  problemFirst: {
    title: "Opening Investigation: One Question, Four Hidden Grains",
    scenario:
      "The maintenance director asks: Which robots had at least two approved September work orders and more total downtime than the average robot? Answering this requires one-work-order grain, one-robot grain, a one-row fleet benchmark, and a final candidate set. A single dense query hides those grain changes and makes repeated filters easy to contradict.",
    questions: [
      "What exact rows belong in the approved September population?",
      "Which intermediate result should contain one row per work order, robot, and fleet?",
      "Should the fleet benchmark be calculated from raw work orders or robot-level totals?",
      "When is a scalar subquery appropriate, and when can it return too many rows?",
      "Why does EXISTS test relationships without multiplying rows?",
      "How can NOT IN produce UNKNOWN when the subquery contains NULL?",
      "Which CTE should own the repeated date and quality rules?",
      "What controls prove that the final candidate list is derived from the approved population?",
    ],
    expectedInsight:
      "First design the sequence of grains, then assign each stage one responsibility. The final SQL should make population, aggregation, comparison, and exception logic visible rather than forcing the reader to reverse-engineer them.",
  },

  learningObjectives: [
    "Explain the role of inner and outer queries and identify the grain returned by each.",
    "Use scalar subqueries only when zero or one value is logically guaranteed or safely handled.",
    "Use multi-row subqueries with IN, EXISTS, ANY, or ALL according to the intended comparison semantics.",
    "Distinguish correlated from uncorrelated subqueries and explain their evaluation relationship.",
    "Use EXISTS and NOT EXISTS for relationship and anti-relationship questions without creating join fanout.",
    "Avoid the NOT IN and NULL trap by choosing null-safe logic.",
    "Use derived tables to create a temporary relational input with a declared alias and grain.",
    "Build single and chained CTEs that separate eligibility, aggregation, benchmarking, and final selection.",
    "State the grain and key of every CTE and test each stage independently during development.",
    "Explain recursive CTE anchor, recursive member, termination, cycle, and depth-control concepts.",
    "Choose among a subquery, CTE, view, temporary table, and persisted transformation based on reuse, scope, governance, and performance needs.",
    "Validate reusable query logic with row counts, distinct keys, component totals, benchmark checks, and controlled equivalence tests.",
  ],

  prerequisiteKnowledge: [
    "Lesson 1: row grain, keys, cardinality, and relational integrity",
    "Lesson 2: filters, grouping, aggregation, null logic, parameters, and reconciliation",
    "Lesson 3: safe joins, unmatched records, fanout, pre-aggregation, and double-count prevention",
    "Basic SQL SELECT, FROM, WHERE, GROUP BY, HAVING, and ORDER BY syntax",
    "The computational lab uses Python, pandas, and SQLite, but the SQL can be studied independently",
  ],

  visualModels: [
    {
      id: "reusable-sql-reasoning-pipeline",
      type: "lifecycle",
      title: "Reusable SQL Reasoning Pipeline",
      description:
        "Each named stage has one purpose, one declared grain, and one set of controls before its result feeds the next stage.",
      stages: [
        { label: "1. Base population", detail: "Apply authoritative period, quality, scope, and null rules once. Preserve identifying columns for row-level inspection." },
        { label: "2. Entity summary", detail: "Aggregate the governed base to one row per decision entity, such as one robot, customer, student, or model version." },
        { label: "3. Benchmark", detail: "Calculate one-row or subgroup comparison values from the correct upstream grain, not from duplicated raw records." },
        { label: "4. Qualification", detail: "Apply thresholds, EXISTS rules, and benchmark comparisons while retaining the evidence used by each decision." },
        { label: "5. Final result", detail: "Return the governed columns, explanations, ordering, and exception flags required by the user or downstream process." },
        { label: "6. Reconciliation", detail: "Verify stage counts, unique keys, totals, benchmark values, and final membership against independent controls." },
      ],
      feedback:
        "If a final row is wrong, inspect the earliest named stage that could have changed its eligibility, grain, measure, or benchmark.",
      interpretation:
        "CTEs improve reliability when their boundaries represent real semantic stages. Naming a confusing expression without defining its grain does not make it reusable.",
    },
  ],

  vocabulary: [
    { term: "Subquery", definition: "A SELECT statement nested inside another SQL statement to produce a value, set, or relational input." },
    { term: "Nested query", definition: "Another name for a query placed within an outer query; nesting depth should remain understandable and testable." },
    { term: "Outer query", definition: "The query that consumes the result of a nested subquery or correlated expression." },
    { term: "Scalar subquery", definition: "A subquery expected to return zero or one column value for use in a scalar expression." },
    { term: "Multi-row subquery", definition: "A subquery returning several rows, typically consumed by IN, EXISTS, ANY, ALL, or a join." },
    { term: "Uncorrelated subquery", definition: "A subquery that can run independently because it does not reference columns from the outer query." },
    { term: "Correlated subquery", definition: "A subquery whose logic references the current row or group of the outer query." },
    { term: "Derived table", definition: "A subquery in the FROM clause that behaves like a temporary table and requires an alias." },
    { term: "Common table expression", definition: "A named query result declared with WITH and available within one SQL statement." },
    { term: "CTE", definition: "The standard abbreviation for common table expression." },
    { term: "WITH clause", definition: "The clause that declares one or more CTEs before the main statement." },
    { term: "Chained CTE", definition: "A sequence of CTEs in which later named stages reference earlier stages." },
    { term: "Recursive CTE", definition: "A CTE that references itself to traverse a hierarchy or generate repeated levels until termination." },
    { term: "Anchor member", definition: "The nonrecursive starting query of a recursive CTE." },
    { term: "Recursive member", definition: "The query that references the CTE and produces the next level from the previous level." },
    { term: "Termination condition", definition: "The rule that prevents recursive logic from continuing indefinitely." },
    { term: "Cycle", definition: "A relationship path that returns to an earlier node and can cause repeated or infinite recursive traversal." },
    { term: "EXISTS", definition: "A predicate that is true when its subquery returns at least one row; returned column values are irrelevant." },
    { term: "NOT EXISTS", definition: "A predicate that is true when its subquery returns no rows for the tested relationship." },
    { term: "IN", definition: "A membership predicate comparing a value with a set returned by a list or subquery." },
    { term: "NOT IN", definition: "A nonmembership predicate whose result can become UNKNOWN when its comparison set contains NULL." },
    { term: "NULL trap", definition: "Unexpected three-valued logic that makes a predicate UNKNOWN and can remove all rows from a result." },
    { term: "Query decomposition", definition: "Dividing one complex problem into smaller stages with clear responsibilities, grains, and controls." },
    { term: "Scope", definition: "The part of a statement or session in which a name, alias, CTE, or temporary object is available." },
    { term: "Column lineage", definition: "The traceable path from a returned column through transformations to its authoritative source." },
    { term: "Predicate pushdown", definition: "Applying eligible filters as early as semantically valid so later stages process only required rows." },
    { term: "Query optimizer", definition: "The database component that chooses an execution plan while preserving the query's defined result." },
    { term: "Materialization", definition: "Storing an intermediate result physically or temporarily rather than recomputing or inlining it." },
    { term: "View", definition: "A named database query definition reusable across statements and governed beyond one CTE scope." },
    { term: "Temporary table", definition: "A session- or transaction-scoped stored intermediate result that can be indexed, inspected, and reused." },
    { term: "Modularity", definition: "The design quality of separating logic into coherent units with explicit inputs, outputs, and responsibilities." },
    { term: "Reconciliation", definition: "Proof that decomposed stages preserve or intentionally transform approved populations, keys, and measures." },
  ],

  formulas: [
    { id: "scalar-benchmark-rule", name: "Scalar benchmark rule", formula: "qualify when row_value > (SELECT benchmark_value)", meaning: "Compares each eligible value with one governed scalar result.", requirement: "Prove the subquery returns at most one row and that its population and grain match the intended comparison." },
    { id: "existence-rule", name: "Existence rule", formula: "EXISTS = TRUE when the related subquery returns at least one row", meaning: "Tests whether a qualifying relationship exists without returning or multiplying child rows.", requirement: "Correlate on the complete relationship key and put child qualification inside the EXISTS subquery." },
    { id: "anti-existence-rule", name: "Anti-existence rule", formula: "NOT EXISTS = TRUE when the related subquery returns zero rows", meaning: "Returns entities lacking any qualifying related record.", requirement: "Prefer it to NOT IN when null values may occur in the comparison set." },
    { id: "entity-rate", name: "Entity event rate", formula: "event rate = qualifying events / eligible events", meaning: "Calculates a governed rate within each entity-level CTE.", requirement: "Expose numerator and denominator, use decimal division, and protect a zero denominator." },
    { id: "benchmark-gap", name: "Benchmark gap", formula: "benchmark gap = entity metric - benchmark metric", meaning: "Measures how far an entity is above or below a comparison value.", requirement: "Both metrics must use compatible units, periods, populations, and aggregation grains." },
    { id: "stage-reconciliation", name: "Stage reconciliation delta", formula: "delta = downstream controlled total - upstream authoritative total", meaning: "Shows whether a stage lost or added an additive measure unexpectedly.", requirement: "Expected delta is zero whenever a stage is intended to preserve the measure." },
    { id: "recursive-definition", name: "Recursive CTE structure", formula: "result = anchor rows UNION ALL next rows derived from prior level", meaning: "Builds a hierarchy or sequence one controlled level at a time.", requirement: "Define termination, maximum depth where supported, duplicate policy, and cycle protection." },
  ],

  workedExamples: [
    {
      id: "example-04-04-01",
      title: "Compare rows with one scalar benchmark",
      problem: "Return approved September work orders whose downtime exceeds the average downtime of the same approved September population.",
      solutionSteps: [
        "Define the approved period and quality rules for the outer work-order population.",
        "Repeat exactly the same eligibility inside a scalar subquery that returns AVG(downtime_min).",
        "Compare each eligible downtime_min with the one returned average.",
        "Expose the benchmark in testing output and reconcile the outer population before publishing.",
      ],
      answer: "Use downtime_min > (SELECT AVG(downtime_min) FROM work_orders WHERE approved_period_and_quality_rules).",
      interpretation: "The scalar subquery is valid because AVG without GROUP BY returns one value. Repeated eligibility rules are still a maintenance risk that a base CTE can remove.",
    },
    {
      id: "example-04-04-02",
      title: "Use EXISTS without creating fanout",
      problem: "Return assets that have at least one approved critical work order, but do not return one asset row per work order.",
      solutionSteps: [
        "Keep assets as the outer one-row-per-asset population.",
        "Use EXISTS with a correlated subquery on the complete asset key.",
        "Place severity, period, and quality rules inside the correlated subquery.",
        "Return each qualifying asset once without joining child rows into the output.",
      ],
      answer: "WHERE EXISTS (SELECT 1 FROM work_orders w WHERE w.robot_id = a.robot_id AND approved_critical_rules)",
      interpretation: "EXISTS answers a yes-or-no relationship question; SELECT 1 is conventional because the values returned by the subquery are not used.",
    },
    {
      id: "example-04-04-03",
      title: "Avoid the NOT IN and NULL trap",
      problem: "Find assets with no work orders when the work_orders.robot_id column may contain NULL.",
      solutionSteps: [
        "Recognize that a NOT IN comparison against a set containing NULL can evaluate to UNKNOWN.",
        "Use NOT EXISTS and correlate the child robot_id with the outer asset robot_id.",
        "Keep eligibility rules inside the anti-existence subquery.",
        "Test with a deliberate NULL child key to prove the result remains correct.",
      ],
      answer: "WHERE NOT EXISTS (SELECT 1 FROM work_orders w WHERE w.robot_id = a.robot_id)",
      interpretation: "NOT EXISTS expresses the intended anti-relationship directly and is normally safer than NOT IN for nullable data.",
    },
    {
      id: "example-04-04-04",
      title: "Use a correlated benchmark",
      problem: "Return each approved work order whose downtime exceeds the average for its own robot.",
      solutionSteps: [
        "Keep one approved work order in the outer query.",
        "Inside the subquery, filter approved comparison rows and correlate comparison.robot_id = outer.robot_id.",
        "Calculate AVG for that robot only.",
        "Test robots with one event, null keys, and different population rules.",
      ],
      answer: "Compare outer downtime_min with a correlated SELECT AVG(downtime_min) filtered to the same robot and approved cohort.",
      interpretation: "The subquery's result changes with the current outer robot. A grouped CTE plus join may be clearer and faster for large datasets, but both forms must return equivalent results.",
    },
    {
      id: "example-04-04-05",
      title: "Replace a derived table with a named CTE",
      problem: "A FROM subquery calculates one row per robot, but the outer query is difficult to read and the result grain is undocumented.",
      solutionSteps: [
        "Move the FROM subquery into WITH robot_metrics AS (...).",
        "Document that robot_metrics has one row per robot and robot_id is its expected key.",
        "Select from robot_metrics in the main query using meaningful aliases.",
        "Run robot_metrics independently during development and test row count, uniqueness, and totals.",
      ],
      answer: "A derived table and CTE can express equivalent relational logic; the CTE improves naming, stage testing, and review when the query is complex.",
      interpretation: "A CTE is not automatically faster. Its primary value here is semantic clarity and controlled decomposition; the optimizer decides the physical plan.",
    },
    {
      id: "example-04-04-06",
      title: "Build a chained decision pipeline",
      problem: "Identify robots with at least two approved work orders and total downtime above the average robot total.",
      solutionSteps: [
        "Create eligible_events at one-work-order grain with all population rules applied once.",
        "Create robot_metrics at one-robot grain with count, total downtime, and critical count.",
        "Create fleet_benchmark at one-row grain using AVG(total_downtime) from robot_metrics.",
        "Cross join the one-row benchmark to robot_metrics, apply both qualification rules, and reconcile the stages.",
      ],
      answer: "Use chained CTEs: eligible_events → robot_metrics → fleet_benchmark → candidates.",
      interpretation: "The benchmark must be calculated from robot totals because the question compares robots, not individual work orders. Naming each grain prevents an accidental weighted comparison.",
    },
  ],

  interactiveExploration: {
    title: "Rewrite Ladder: From Nested SQL to Auditable Stages",
    description:
      "Begin with one dense query and refactor it without changing the approved result.",
    instructions: [
      "Write the business question, eligible population, final grain, measures, benchmark, and expected candidate keys.",
      "Identify every nested query and label it scalar, multi-row, correlated, uncorrelated, or derived-table logic.",
      "Run each subquery independently where possible and record its grain, row count, key, nulls, and totals.",
      "Replace repeated eligibility logic with one base CTE and verify the same identifiers remain.",
      "Create one CTE for each genuine grain change and give it a noun-based name that describes its contents.",
      "Use EXISTS for relationship tests that should not add child rows to the output.",
      "Replace a nullable NOT IN test with NOT EXISTS and add a controlled NULL test case.",
      "Compare the original and refactored outputs with two-way EXCEPT queries or an equivalent set-difference test.",
      "Review the query plan only after semantic equivalence and reconciliation pass.",
      "Write a short contract for each reusable stage: purpose, grain, key, columns, filters, and controls.",
    ],
    questions: [
      "Which repeated rule was most likely to drift across query copies?",
      "Which CTE boundary represents a real change of grain?",
      "Which subquery can return more than one row unexpectedly?",
      "Where could NULL change IN or NOT IN behavior?",
      "Did the rewrite preserve both membership and ordering requirements?",
      "Which stage should become a governed view or persisted data product?",
    ],
    expectedDiscovery:
      "Good decomposition makes correctness observable. Refactoring is complete only when the rewritten result is set-equivalent, totals reconcile, and each named stage has a defensible contract.",
  },

  realWorldApplications: [
    { field: "Manufacturing and Robotics", application: "Create reusable eligibility, incident, robot-summary, fleet-benchmark, and maintenance-candidate stages without duplicating filters across operational reports." },
    { field: "Finance", application: "Use EXISTS for account activity, NOT EXISTS for missing controls, CTEs for governed cohorts, and benchmark stages for exposure and exception analysis." },
    { field: "Education", application: "Build consistent enrollment cohorts, mastery summaries, intervention existence tests, and support-priority lists with visible denominators." },
    { field: "Healthcare Operations", application: "Separate authorized encounters, patient-level measures, facility benchmarks, and follow-up exceptions while preserving privacy and population rules." },
    { field: "Retail and Supply Chain", application: "Reuse order eligibility, fulfillment summaries, supplier benchmarks, late-shipment existence tests, and unfulfilled-order anti-joins." },
    { field: "AI and Machine Learning", application: "Define feature cohorts, label-availability logic, evaluation summaries, benchmark comparisons, and monitoring exceptions through reproducible staged SQL." },
  ],

  aiConnection: {
    title: "Reusable SQL Becomes Part of the Model Definition",
    explanation:
      "An AI model is shaped by the SQL that defines training rows, feature windows, labels, exclusions, and evaluation cohorts. Repeated or hidden query logic can create inconsistent populations, target leakage, delayed-label bias, and training-serving skew even when the model code is unchanged.",
    example:
      "A predictive-maintenance pipeline uses an eligible_snapshots CTE, a prior_sensor_features CTE restricted to data available before each snapshot, a governed_outcomes CTE for the future label window, and a final_training_rows CTE with one tested-unique row per snapshot.",
    uses: [
      "Centralize cohort and observation-window definitions",
      "Build one-row-per-observation feature datasets",
      "Use EXISTS to flag prior evidence without multiplying rows",
      "Use NOT EXISTS to expose missing labels and controls",
      "Compare model versions with consistent benchmark stages",
    ],
    caution:
      "Readable CTEs do not automatically prevent leakage. Every stage still needs time-aware filters, declared grain, unique keys, controlled joins, and proof that future information cannot enter earlier observations.",
    reflectionQuestion:
      "Which stage of a model-training query should own the observation cutoff so every feature obeys the same time boundary?",
  },

  pythonLab: {
    title: "Build and Verify a Reusable Maintenance Query Pipeline",
    objective:
      "Create SQLite asset and work-order data, solve benchmark and existence questions with subqueries, refactor repeated logic into chained CTEs, and prove every stage with assertions.",
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
    opened_at TEXT NOT NULL,
    severity TEXT NOT NULL,
    downtime_min INTEGER NOT NULL CHECK (downtime_min >= 0),
    quality_status TEXT NOT NULL CHECK (quality_status IN ('PASS', 'REVIEW'))
);
""")

assets = [
    ("R-101", "A", "RX-1"),
    ("R-102", "A", "RX-1"),
    ("R-201", "B", "QZ-2"),
    ("R-202", "B", "QZ-2"),
    ("R-301", "C", "MX-3"),
    ("R-302", "C", "MX-3"),
    ("R-401", "D", "LAB-1"),
]

work_orders = [
    ("WO-001", "R-101", "2026-09-01 08:00", "Critical", 90, "PASS"),
    ("WO-002", "R-101", "2026-09-10 10:00", "High",     30, "PASS"),
    ("WO-003", "R-102", "2026-09-03 09:00", "Medium",   20, "PASS"),
    ("WO-004", "R-201", "2026-09-02 07:30", "High",     50, "PASS"),
    ("WO-005", "R-201", "2026-09-14 11:00", "Critical", 70, "PASS"),
    ("WO-006", "R-202", "2026-09-05 15:00", "Low",      10, "PASS"),
    ("WO-007", "R-301", "2026-09-07 12:00", "Critical", 80, "PASS"),
    ("WO-008", "R-301", "2026-09-20 16:00", "High",     40, "PASS"),
    ("WO-009", "R-302", "2026-09-09 13:00", "Medium",   25, "PASS"),
    ("WO-010", "R-302", "2026-09-18 14:00", "Critical", 65, "REVIEW"),
    ("WO-011", "R-101", "2026-10-01 08:00", "Critical", 55, "PASS"),
    ("WO-012", "R-999", "2026-09-12 10:00", "Critical", 75, "PASS"),
]

connection.executemany("INSERT INTO assets VALUES (?, ?, ?)", assets)
connection.executemany("INSERT INTO work_orders VALUES (?, ?, ?, ?, ?, ?)", work_orders)

start_date = "2026-09-01"
end_date = "2026-10-01"

eligible_sql = """
SELECT *
FROM work_orders
WHERE opened_at >= ?
  AND opened_at < ?
  AND quality_status = 'PASS'
ORDER BY work_order_id
"""
eligible = pd.read_sql_query(
    eligible_sql, connection, params=(start_date, end_date)
)

# Scalar subquery: compare each eligible work order with one cohort average.
above_fleet_event_average = pd.read_sql_query("""
SELECT work_order_id, robot_id, downtime_min
FROM work_orders
WHERE opened_at >= ?
  AND opened_at < ?
  AND quality_status = 'PASS'
  AND downtime_min > (
      SELECT AVG(downtime_min)
      FROM work_orders
      WHERE opened_at >= ?
        AND opened_at < ?
        AND quality_status = 'PASS'
  )
ORDER BY work_order_id
""", connection, params=(start_date, end_date, start_date, end_date))

# Correlated subquery: compare each event with its own robot's average.
above_robot_average = pd.read_sql_query("""
SELECT outer_w.work_order_id, outer_w.robot_id, outer_w.downtime_min
FROM work_orders AS outer_w
WHERE outer_w.opened_at >= ?
  AND outer_w.opened_at < ?
  AND outer_w.quality_status = 'PASS'
  AND outer_w.downtime_min > (
      SELECT AVG(inner_w.downtime_min)
      FROM work_orders AS inner_w
      WHERE inner_w.robot_id = outer_w.robot_id
        AND inner_w.opened_at >= ?
        AND inner_w.opened_at < ?
        AND inner_w.quality_status = 'PASS'
  )
ORDER BY outer_w.work_order_id
""", connection, params=(start_date, end_date, start_date, end_date))

# NOT EXISTS: preserve null-safe anti-relationship semantics.
assets_without_events = pd.read_sql_query("""
SELECT a.robot_id, a.plant
FROM assets AS a
WHERE NOT EXISTS (
    SELECT 1
    FROM work_orders AS w
    WHERE w.robot_id = a.robot_id
      AND w.opened_at >= ?
      AND w.opened_at < ?
      AND w.quality_status = 'PASS'
)
ORDER BY a.robot_id
""", connection, params=(start_date, end_date))

# Chained CTEs: one responsibility and one declared grain per stage.
pipeline = pd.read_sql_query("""
WITH eligible_events AS (
    SELECT work_order_id, robot_id, severity, downtime_min
    FROM work_orders
    WHERE opened_at >= ?
      AND opened_at < ?
      AND quality_status = 'PASS'
),
robot_metrics AS (
    SELECT
        robot_id,
        COUNT(*) AS work_orders,
        SUM(downtime_min) AS total_downtime,
        SUM(CASE WHEN severity = 'Critical' THEN 1 ELSE 0 END) AS critical_orders
    FROM eligible_events
    GROUP BY robot_id
),
fleet_benchmark AS (
    SELECT AVG(total_downtime * 1.0) AS avg_robot_downtime
    FROM robot_metrics
),
candidates AS (
    SELECT
        r.robot_id,
        r.work_orders,
        r.total_downtime,
        r.critical_orders,
        b.avg_robot_downtime,
        r.total_downtime - b.avg_robot_downtime AS downtime_gap
    FROM robot_metrics AS r
    CROSS JOIN fleet_benchmark AS b
    WHERE r.work_orders >= 2
      AND r.total_downtime > b.avg_robot_downtime
)
SELECT *
FROM candidates
ORDER BY total_downtime DESC, robot_id
""", connection, params=(start_date, end_date))

robot_metrics = pd.read_sql_query("""
WITH eligible_events AS (
    SELECT robot_id, severity, downtime_min
    FROM work_orders
    WHERE opened_at >= ? AND opened_at < ? AND quality_status = 'PASS'
)
SELECT
    robot_id,
    COUNT(*) AS work_orders,
    SUM(downtime_min) AS total_downtime,
    SUM(CASE WHEN severity = 'Critical' THEN 1 ELSE 0 END) AS critical_orders
FROM eligible_events
GROUP BY robot_id
ORDER BY robot_id
""", connection, params=(start_date, end_date))

assert len(eligible) == 10
assert eligible["work_order_id"].is_unique
assert int(eligible["downtime_min"].sum()) == 490
assert round(float(eligible["downtime_min"].mean()), 2) == 49.00

assert above_fleet_event_average["work_order_id"].tolist() == [
    "WO-001", "WO-004", "WO-005", "WO-007", "WO-012"
]
assert above_robot_average["work_order_id"].tolist() == [
    "WO-001", "WO-005", "WO-007"
]
assert assets_without_events["robot_id"].tolist() == ["R-401"]

assert len(robot_metrics) == 7
assert robot_metrics["robot_id"].is_unique
assert int(robot_metrics["work_orders"].sum()) == len(eligible)
assert int(robot_metrics["total_downtime"].sum()) == 490
assert round(float(robot_metrics["total_downtime"].mean()), 2) == 70.00

assert pipeline["robot_id"].tolist() == ["R-101", "R-201", "R-301"]
assert pipeline["work_orders"].tolist() == [2, 2, 2]
assert pipeline["total_downtime"].tolist() == [120, 120, 120]
assert pipeline["avg_robot_downtime"].round(2).tolist() == [70.0, 70.0, 70.0]

print("Eligible rows and downtime:", len(eligible), int(eligible["downtime_min"].sum()))
print("Above fleet event average:", above_fleet_event_average["work_order_id"].tolist())
print("Above own-robot average:", above_robot_average["work_order_id"].tolist())
print("Assets without eligible events:", assets_without_events["robot_id"].tolist())
print("Robot metrics:\\n", robot_metrics.to_string(index=False))
print("Qualified robots:\\n", pipeline.to_string(index=False))
print("All subquery, CTE, and reconciliation tests passed.")`,
    questions: [
      "Why does the scalar AVG subquery return exactly one value?",
      "Why must the scalar subquery use the same period and quality rules as the outer query?",
      "What outer column makes the robot-average subquery correlated?",
      "Why is NOT EXISTS safer than NOT IN when child keys may be null?",
      "What is the grain and tested key of eligible_events, robot_metrics, fleet_benchmark, and candidates?",
      "Why is the fleet benchmark calculated from robot_metrics instead of raw eligible_events?",
      "Which assertions reconcile the robot stage to the approved work-order stage?",
      "How would you prove that a derived-table version and the CTE version return the same candidate set?",
    ],
    reflectionQuestions: [
      "Which business rule should be centralized first if this query grows?",
      "Should robot_metrics remain a CTE, become a view, or become a persisted data product?",
      "Which execution-plan question should be investigated only after semantic tests pass?",
    ],
    extension:
      "Add an asset_hierarchy table with parent_robot_group and child_robot_group, write a recursive CTE that produces hierarchy paths and depth, add a deliberate cycle, and implement database-appropriate depth or visited-path controls that stop unsafe recursion.",
  },

  guidedPractice: [
    { id: "gp-04-04-01", question: "What is the defining requirement of a scalar subquery?", answer: "It must return at most one value for the expression using it; multiple rows cause an error or invalid logic depending on the context and database." },
    { id: "gp-04-04-02", question: "What makes a subquery correlated?", answer: "It references a column from the current row or group of its outer query." },
    { id: "gp-04-04-03", question: "Why can EXISTS prevent fanout?", answer: "It returns a Boolean relationship result and does not add every matching child row to the outer output." },
    { id: "gp-04-04-04", question: "Why can NOT IN fail when its subquery returns NULL?", answer: "Comparisons with NULL become UNKNOWN, so the nonmembership predicate may not evaluate TRUE for any row." },
    { id: "gp-04-04-05", question: "What should be documented for every CTE?", answer: "Purpose, source population, row grain, expected key, filters, returned columns, null policy, and validation controls." },
    { id: "gp-04-04-06", question: "When might a temporary table be better than a CTE?", answer: "When an intermediate result must be reused across statements, inspected repeatedly, indexed, or materialized deliberately for a tested performance reason." },
  ],

  independentPractice: [
    { id: "ip-04-04-01", difficulty: "Foundational", question: "Write a scalar subquery pattern that returns products priced above the approved product average.", sampleAnswer: "Filter the approved outer products and compare price > (SELECT AVG(price) FROM products WHERE the same approval rules)." },
    { id: "ip-04-04-02", difficulty: "Foundational", question: "Use EXISTS to return students with at least one eligible intervention.", sampleAnswer: "Select students in the outer query and correlate an EXISTS subquery on student_id with all intervention eligibility rules inside it." },
    { id: "ip-04-04-03", difficulty: "Applied", question: "Rewrite a nullable NOT IN anti-join using NOT EXISTS.", sampleAnswer: "Correlate the child key with the outer key inside NOT EXISTS; this directly tests absence and avoids the null comparison set." },
    { id: "ip-04-04-04", difficulty: "Applied", question: "Design CTE stages for orders above their customer's average order value.", sampleAnswer: "Create eligible_orders, customer_average, and final_above_average stages; state one-order and one-customer grains and join or correlate on customer_id." },
    { id: "ip-04-04-05", difficulty: "Analytical", question: "Explain why averaging subgroup averages can be wrong.", sampleAnswer: "An unweighted average of subgroup averages gives equal influence to groups of different sizes; use the grain required by the question or a correctly weighted calculation." },
    { id: "ip-04-04-06", difficulty: "Advanced", question: "Specify safety controls for a recursive organization hierarchy query.", sampleAnswer: "Define an anchor, parent-child key, termination condition, maximum depth, cycle detection, duplicate policy, expected roots, and row-count limits." },
    { id: "ip-04-04-07", difficulty: "Professional", question: "Create a review checklist for promoting a repeated CTE into a governed view.", sampleAnswer: "Review ownership, consumers, source and output grain, keys, permissions, population rules, column lineage, naming, nulls, tests, performance, change control, documentation, and backward compatibility." },
  ],

  commonMistakes: [
    { mistake: "Using a scalar subquery that can return several rows.", correction: "Prove one-row cardinality, aggregate deliberately, or use a multi-row operator that matches the business meaning." },
    { mistake: "Repeating cohort filters in several subqueries.", correction: "Centralize the authoritative population in one base CTE or governed view and reconcile it once." },
    { mistake: "Using NOT IN with a nullable subquery result.", correction: "Use NOT EXISTS or explicitly govern null semantics and test a deliberate NULL case." },
    { mistake: "Using correlated subqueries without testing scale or equivalence.", correction: "Validate semantics first, then compare with a grouped CTE or join and inspect the execution plan on representative data." },
    { mistake: "Creating CTEs that mix several grains.", correction: "Give each semantic stage one declared grain and validate its expected unique key." },
    { mistake: "Assuming a CTE is always materialized or always faster.", correction: "Treat physical behavior as database-specific; use plans and measurements rather than assumptions." },
    { mistake: "Naming stages step1, step2, or temp.", correction: "Use noun-based names such as eligible_events, robot_metrics, fleet_benchmark, and candidates." },
    { mistake: "Using SELECT * between reusable stages.", correction: "Select governed columns explicitly to protect lineage, meaning, security, and downstream stability." },
    { mistake: "Writing recursive logic without cycle or depth controls.", correction: "Define termination, visited-path or cycle handling, maximum depth, and expected hierarchy limits." },
    { mistake: "Refactoring without proving equivalence.", correction: "Compare both directions of set difference and reconcile counts, keys, measures, nulls, and ordering requirements." },
  ],

  discussionQuestions: [
    "When does a readable CTE become important enough to promote into a governed view?",
    "Should repeated business filters live in analyst SQL, a semantic layer, or a curated data product?",
    "When is a correlated subquery clearer than a join, even if both are semantically equivalent?",
    "Which recursive-query risks should be treated as data-quality defects versus query-design defects?",
    "What evidence proves that a model-training SQL rewrite did not change the training population?",
  ],

  formativeAssessment: {
    totalPoints: 40,
    passingScore: 32,
    questions: [
      { id: "check-04-04-01", type: "classification", points: 5, prompt: "Distinguish scalar, multi-row, correlated, and uncorrelated subqueries.", sampleAnswer: "Scalar returns at most one value; multi-row returns a set; correlated references the outer query; uncorrelated can run independently." },
      { id: "check-04-04-02", type: "existence", points: 5, prompt: "Explain why EXISTS is appropriate for a yes-or-no relationship question.", sampleAnswer: "It tests whether at least one qualifying child row exists without returning child columns or multiplying the outer rows." },
      { id: "check-04-04-03", type: "null", points: 5, prompt: "Explain the NOT IN NULL trap and give a safe alternative.", sampleAnswer: "A NULL in the comparison set can make nonmembership UNKNOWN; use a correctly correlated NOT EXISTS anti-join." },
      { id: "check-04-04-04", type: "grain", points: 5, prompt: "Define the grains in a work-order → robot-summary → fleet-benchmark pipeline.", sampleAnswer: "One eligible work order, one robot, and one fleet benchmark row respectively, followed by one row per qualifying robot." },
      { id: "check-04-04-05", type: "cte", points: 5, prompt: "Give four benefits of semantic CTE decomposition.", sampleAnswer: "Centralized rules, visible grain changes, independent stage testing, clearer lineage, reuse within the statement, and easier review; any four earn full credit." },
      { id: "check-04-04-06", type: "recursion", points: 5, prompt: "Describe the parts and safety controls of a recursive CTE.", sampleAnswer: "Anchor, recursive member, UNION policy, termination, relationship key, depth limit, cycle detection, and expected result controls." },
      { id: "check-04-04-07", type: "choice", points: 5, prompt: "Choose between a CTE, view, and temporary table for three different reuse needs.", sampleAnswer: "CTE for one statement, view for governed cross-query reuse, temporary table for session reuse or intentional indexed materialization; justify with scope and controls." },
      { id: "check-04-04-08", type: "validation", points: 5, prompt: "Give five tests required after refactoring nested SQL into CTEs.", sampleAnswer: "Two-way set difference, row count, unique keys, totals, nulls, benchmark values, exception membership, and ordering requirements; any five earn full credit." },
    ],
  },

  researchExtension: {
    title: "SQL Modularity, Reliability, and Performance Study",
    researchQuestion:
      "How do equivalent subquery, join, CTE, view, and temporary-table designs differ in readability, reliability, maintainability, and measured execution behavior?",
    applicationOptions: [
      "Predictive maintenance candidates",
      "Financial exception screening",
      "Student intervention eligibility",
      "Healthcare follow-up gaps",
      "Supply-chain delay analysis",
      "AI cohort and label construction",
    ],
    task:
      "Implement the same governed result using at least three SQL structures. Prove semantic equivalence first, then compare stage visibility, duplication of business rules, execution plans, timing on representative data, and change effort when one population rule is revised.",
    requiredEvidence: [
      "Approved business definition and target grain",
      "At least three equivalent query structures",
      "Stage contracts and column lineage",
      "Two-way set-equivalence tests",
      "Counts, keys, nulls, totals, and benchmark reconciliation",
      "Representative execution plans and repeated timing method",
      "Controlled business-rule change and maintenance comparison",
      "Recommendation with database-specific limitations",
    ],
  },

  portfolioArtifact: {
    title: "Lesson 4 Portfolio Evidence: Reusable SQL Decision Pipeline",
    description:
      "Extend the maintenance database with audited subqueries, semantic CTE stages, safe existence tests, reusable contracts, and automated equivalence controls.",
    requiredSections: [
      "Decision question, users, actions, population, target grain, and expected outputs",
      "Subquery catalog classifying scalar, multi-row, correlated, and uncorrelated logic",
      "EXISTS and NOT EXISTS relationship queries with null tests",
      "Chained CTE pipeline separating base, entity, benchmark, qualification, and final stages",
      "Stage contract table with purpose, grain, key, columns, rules, and controls",
      "Derived-table or nested version compared with the CTE version",
      "Performance evidence collected only after correctness is proven",
      "Governance recommendation for CTE, view, temporary table, or persisted data product",
      "README and decision brief explaining results, limitations, and change process",
    ],
    requiredEvidence: [
      "At least eight named SQL queries",
      "One scalar and one correlated subquery",
      "One EXISTS and one NOT EXISTS query",
      "One deliberate NOT IN NULL failure demonstration",
      "At least four chained CTE stages with declared grains",
      "Two-way result-equivalence tests",
      "Stage-level row, key, null, measure, and benchmark assertions",
      "Executable script or notebook with passing tests and captured output",
    ],
  },

  growthIndicators: [
    { title: "Query Decomposer", description: "You divide complex questions into semantic stages with explicit populations, grains, and responsibilities." },
    { title: "Existence-Logic Designer", description: "You use EXISTS and NOT EXISTS to answer relationship questions without fanout or null traps." },
    { title: "Reusable SQL Architect", description: "You choose CTEs, views, temporary tables, and persisted logic according to scope, ownership, and governance." },
    { title: "Equivalence Reviewer", description: "You prove that refactoring preserves membership, keys, measures, benchmarks, and decision outcomes." },
  ],

  reflection: [
    "Which repeated filter in your current SQL is most likely to drift?",
    "Which nested query hides a change of grain that should be named?",
    "Where could NOT IN be exposed to a nullable comparison set?",
    "Which correlated subquery should be compared with a grouped CTE design?",
    "Which CTE deserves a formal stage contract or promotion to a view?",
    "What equivalence test should block an unsafe refactor?",
  ],

  summary: [
    "Subqueries answer focused value, set, relationship, or relational-input questions inside a larger statement.",
    "A scalar subquery must return at most one value and use the correct comparison population.",
    "Correlated subqueries reference the current outer row or group; uncorrelated subqueries run independently.",
    "EXISTS and NOT EXISTS test relationship presence or absence without adding child rows to the output.",
    "NOT IN can fail semantically when its comparison set contains NULL; NOT EXISTS is usually the safer anti-relationship pattern.",
    "A derived table is a subquery in FROM; a CTE gives an intermediate result a clear name within one statement.",
    "Each semantic CTE should have one purpose, declared grain, expected key, governed columns, and validation controls.",
    "Chained CTEs can separate eligibility, entity aggregation, benchmark calculation, qualification, and presentation.",
    "Benchmarks must be calculated from the grain required by the question, not whichever rows are easiest to aggregate.",
    "Recursive CTEs require an anchor, recursive member, termination rule, cycle protection, depth control, and expected-result limits.",
    "CTEs improve clarity but do not guarantee materialization or better performance; database behavior must be measured.",
    "Views support governed cross-query reuse, while temporary tables support session reuse and deliberate materialization.",
    "SELECT * weakens lineage and stability between reusable stages; choose columns explicitly.",
    "Refactoring is complete only after two-way set comparison and reconciliation of counts, keys, nulls, measures, and benchmarks.",
    "Reusable SQL logic is foundational for trustworthy dashboards, data pipelines, research, and AI datasets.",
  ],

  previousLesson: {
    id: "data-ai-m04-l03",
    moduleNumber: 4,
    slug: "safe-joins-unmatched-records-and-double-counting",
    title: "Safe Joins, Unmatched Records, and Double Counting",
  },
  nextLesson: null,

  lumineryGuidance: {
    message:
      "Name the population once, give every grain change its own stage, and prove that a refactor preserves the same rows, keys, measures, and decisions.",
    prompt:
      "Act as my senior SQL architect and query-review coach. Help me complete Module 4 Lesson 4 one verified stage at a time. Require me to classify subqueries, prove scalar cardinality, use EXISTS and NOT EXISTS safely, test null behavior, centralize repeated population rules, declare every CTE's grain and key, separate aggregation from benchmarking, document lineage and scope, control recursive depth and cycles, compare CTEs with views and temporary tables, and prove refactoring equivalence using two-way set differences plus count, key, null, measure, and benchmark reconciliation. Do not let me call SQL reusable until its business contract and automated controls are explicit.",
    coachingQuestions: [
      "What focused question does this subquery answer?",
      "Can it return zero, one, or many rows?",
      "Does it depend on the current outer row?",
      "Could NULL change IN or NOT IN behavior?",
      "What is the grain and expected key of this CTE?",
      "Is the benchmark calculated from the correct stage?",
      "Should this logic remain statement-scoped or become governed reusable infrastructure?",
      "Which equivalence and reconciliation tests prove the rewrite?",
    ],
  },
};

export default lesson04;
