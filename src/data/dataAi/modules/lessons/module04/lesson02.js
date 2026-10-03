const lesson02 = {
  id: "data-ai-m04-l02",
  courseId: "data-ai-foundations",
  moduleId: "data-ai-foundations-module-04",
  moduleNumber: 4,
  lessonNumber: 2,
  slug: "filtering-sorting-grouping-and-aggregation",
  title: "Filtering, Sorting, Grouping, and Aggregation",
  shortTitle: "Filtering, Sorting, Grouping, and Aggregation",
  subtitle:
    "Turn row-level relational data into trustworthy analytical evidence with precise filters, deterministic ordering, governed groups, null-aware aggregates, and reconciled SQL results.",
  status: "available",
  duration: "4–5 hours",
  level: "Beginner to Professional",

  essentialQuestion:
    "How can we use SQL to select the right population, organize its records, summarize it at the intended grain, and prove that the result answers the business question accurately?",
  bigIdea:
    "Every SQL summary is a claim about population and grain. WHERE defines which rows are eligible, GROUP BY defines what one output row represents, aggregates define the evidence, HAVING filters completed groups, and ORDER BY controls presentation—not meaning.",

  whyThisLessonExists: {
    title: "A Correct Number Requires a Correct Population",
    introduction:
      "SQL makes it easy to return a number and surprisingly easy to return the wrong number. A missing parenthesis, an incorrect null comparison, an incomplete date boundary, an unstable top-N sort, or an extra grouping column can change the analytical population without producing a syntax error.",
    centralProblem:
      "A maintenance manager asks for plants with severe September downtime. One analyst filters before grouping, another filters after grouping, a third excludes rows with null severity unintentionally, and a fourth ranks plants without a tie-breaker. All queries run, but they do not answer the same question.",
    purpose:
      "This lesson builds a disciplined query workflow. You will define the decision, state the input and output grains, write null-aware predicates, control Boolean precedence, sort deterministically, choose appropriate aggregates, distinguish row filters from group filters, use conditional aggregation, and reconcile every result to its eligible source rows.",
  },

  problemFirst: {
    title: "Opening Investigation: Four Queries, Four Different Answers",
    scenario:
      "A robotics company needs September work orders from Plants A or B that are either critical or caused more than 60 minutes of downtime. The approved population contains five work orders. A query without parentheses returns an October critical event, a query using severity = NULL drops unknown values silently, and a top-three query without a secondary sort changes order after refresh.",
    questions: [
      "What is the exact eligible population, including date boundaries, plants, quality status, and null policy?",
      "How do AND and OR precedence change the result when parentheses are omitted?",
      "Why does column = NULL never behave like a normal equality test?",
      "Which filter belongs in WHERE, and which threshold belongs in HAVING?",
      "What does one row represent after GROUP BY plant and month?",
      "Which additional ORDER BY column makes ranking deterministic when values tie?",
      "Which row counts and totals must reconcile before the query is published?",
    ],
    expectedInsight:
      "SQL syntax is only the last step. First define population, grain, null treatment, measure, and expected controls; then write the query in stages and verify each stage against the business definition.",
  },

  learningObjectives: [
    "Explain SQL's logical query-processing order and use it to reason about aliases, filters, groups, and results.",
    "Select required columns deliberately and preserve the input table's row grain until grouping is intended.",
    "Build precise WHERE predicates with comparison operators, AND, OR, NOT, parentheses, IN, BETWEEN, LIKE, and date boundaries.",
    "Apply SQL's three-valued logic and handle NULL using IS NULL, IS NOT NULL, and documented COALESCE rules.",
    "Sort results with ORDER BY, multiple sort keys, explicit direction, and deterministic tie-breakers.",
    "Use LIMIT, TOP, or FETCH responsibly and distinguish database dialect syntax.",
    "Calculate COUNT, COUNT DISTINCT, SUM, AVG, MIN, and MAX with correct null and grain interpretation.",
    "Define output grain with GROUP BY and reject non-grouped columns that would make the result ambiguous.",
    "Distinguish row-level WHERE filters from group-level HAVING filters.",
    "Use CASE-based conditional aggregation to build reconciled measures in one grouped query.",
    "Parameterize values and avoid unsafe string-built SQL.",
    "Validate analytical SQL using row counts, distinct keys, component totals, group reconciliation, and edge cases.",
  ],

  prerequisiteKnowledge: [
    "Lesson 1: relational tables, row grain, primary and foreign keys, cardinality, and integrity",
    "Module 2: counts, means, rates, denominators, distributions, and unusual observations",
    "Module 3: filtering, PivotTables, conditional aggregation, validation, and reconciliation",
    "Basic familiarity with numbers, text, dates, categories, and missing values",
    "The computational lab uses Python and SQLite, but its SQL can be studied independently",
  ],

  visualModels: [
    {
      id: "logical-query-processing-order",
      type: "lifecycle",
      title: "Logical SQL Query-Processing Order",
      description:
        "SQL is written beginning with SELECT, but it is reasoned about in a different logical order.",
      stages: [
        { label: "1. FROM", detail: "Identify source tables and relationships. Confirm the starting grain, keys, row count, and expected fanout before filtering." },
        { label: "2. WHERE", detail: "Keep eligible input rows. Row-level predicates operate before aggregation and therefore change every later count, total, and group." },
        { label: "3. GROUP BY", detail: "Partition eligible rows and define the output grain. One result row is produced per distinct grouping combination." },
        { label: "4. HAVING", detail: "Keep or remove completed groups using aggregate conditions such as SUM(downtime_min) > 120." },
        { label: "5. SELECT", detail: "Return grouping columns, calculated aggregates, conditional measures, and aliases allowed at the output grain." },
        { label: "6. ORDER and LIMIT", detail: "Sort the completed result and optionally keep a governed top set using explicit tie-breakers." },
      ],
      feedback:
        "If a result looks wrong, inspect the earliest stage that could have changed the eligible rows or grain instead of only editing the final SELECT list.",
      interpretation:
        "Logical order explains why aggregate filters belong in HAVING, why SELECT aliases may be unavailable in WHERE, and why ORDER BY does not change the analytical population.",
    },
  ],

  vocabulary: [
    { term: "Query", definition: "A structured request to read, transform, summarize, or manage data in a database." },
    { term: "SELECT", definition: "The clause that defines the columns and expressions returned in the final result." },
    { term: "Projection", definition: "The relational operation of choosing which columns or calculated expressions appear in a result." },
    { term: "WHERE", definition: "The clause that filters individual input rows before grouping and aggregation." },
    { term: "Predicate", definition: "A condition evaluated as TRUE, FALSE, or UNKNOWN for each applicable row or group." },
    { term: "Comparison operator", definition: "An operator such as =, <>, <, <=, >, or >= used to compare values." },
    { term: "Boolean logic", definition: "The combination of conditions using AND, OR, and NOT." },
    { term: "Operator precedence", definition: "The rule controlling evaluation order; NOT is evaluated before AND, and AND before OR unless parentheses override it." },
    { term: "NULL", definition: "A marker for missing, unknown, or not-applicable information; it is not zero, an empty string, or a normal value." },
    { term: "Three-valued logic", definition: "SQL logic in which predicates can evaluate to TRUE, FALSE, or UNKNOWN because of NULL." },
    { term: "IS NULL", definition: "The predicate used to identify null values; equality to NULL does not work as ordinary equality." },
    { term: "COALESCE", definition: "A function returning the first non-null expression in its argument list." },
    { term: "IN", definition: "A membership predicate testing whether a value matches one of several listed or queried values." },
    { term: "BETWEEN", definition: "An inclusive range predicate equivalent to value >= lower AND value <= upper." },
    { term: "LIKE", definition: "A pattern-matching predicate whose exact case behavior depends on the database and collation." },
    { term: "Wildcard", definition: "A pattern character such as % for any sequence or _ for one character in SQL LIKE patterns." },
    { term: "Sargable predicate", definition: "A filter form the database can often use efficiently with an index instead of transforming every stored value." },
    { term: "ORDER BY", definition: "The clause that sorts the final result using one or more expressions." },
    { term: "Sort key", definition: "A column or expression used to determine result order." },
    { term: "Deterministic ordering", definition: "An ordering specification that produces a stable sequence by resolving ties with unique or sufficiently detailed keys." },
    { term: "LIMIT, TOP, or FETCH", definition: "Dialect-specific syntax for returning only a requested number or range of ordered rows." },
    { term: "Aggregate function", definition: "A function combining multiple eligible values into one result, such as COUNT, SUM, AVG, MIN, or MAX." },
    { term: "COUNT(*)", definition: "A count of eligible rows, including rows whose individual columns contain NULL." },
    { term: "COUNT(column)", definition: "A count of eligible rows in which the specified column is non-null." },
    { term: "COUNT(DISTINCT column)", definition: "A count of unique non-null values in the specified column." },
    { term: "GROUP BY", definition: "The clause that partitions eligible rows by distinct values and defines one output row per grouping combination." },
    { term: "Group grain", definition: "The meaning of one result row after grouping, determined by the complete GROUP BY column list." },
    { term: "HAVING", definition: "The clause that filters completed groups, often using aggregate conditions." },
    { term: "Conditional aggregation", definition: "An aggregate applied to CASE logic so selected rows contribute to a measure without removing other rows from the group." },
    { term: "Alias", definition: "A temporary name assigned to a returned table, column, expression, or aggregate for clarity and reuse where supported." },
    { term: "Parameter", definition: "A value supplied separately from the SQL text so filters are safer, reusable, and protected from injection." },
    { term: "Reconciliation", definition: "A comparison proving that grouped or filtered outputs equal authoritative component counts and totals under the same rules." },
  ],

  formulas: [
    { id: "row-count", name: "Eligible row count", formula: "eligible_rows = COUNT(*) after FROM and WHERE", meaning: "Counts every row in the defined analytical population.", requirement: "State the source grain and every eligibility rule; COUNT(*) is not a distinct-entity count unless one row already equals one entity." },
    { id: "field-completeness", name: "Field completeness", formula: "completeness = COUNT(required_column) / COUNT(*)", meaning: "Compares non-null required values with all eligible rows.", requirement: "Do not COALESCE missing values before measuring completeness, or the defect will be hidden." },
    { id: "group-total", name: "Grouped additive total", formula: "group_total = SUM(measure) for each GROUP BY combination", meaning: "Adds an additive measure within each output group.", requirement: "Confirm the measure is stored once at the input grain and has not been multiplied by a relationship." },
    { id: "arithmetic-mean", name: "Null-aware arithmetic mean", formula: "AVG(x) = SUM(non-null x) / COUNT(non-null x)", meaning: "SQL AVG normally ignores NULL values in both numerator and denominator.", requirement: "Report the contributing count and do not replace unknown values with zero unless the business definition authorizes it." },
    { id: "weighted-mean", name: "Weighted mean", formula: "weighted mean = SUM(value × weight) / NULLIF(SUM(weight), 0)", meaning: "Combines subgroup values according to exposure, quantity, or another governed weight.", requirement: "Use aligned eligible populations and protect the zero-weight denominator using dialect-appropriate logic." },
    { id: "conditional-rate", name: "Conditional event rate", formula: "rate = SUM(CASE WHEN event_rule THEN 1 ELSE 0 END) / COUNT(*)", meaning: "Calculates the share of eligible rows meeting a defined event rule.", requirement: "Use decimal division and decide whether unknown event status belongs in the denominator, numerator, or a separate quality measure." },
    { id: "group-reconciliation", name: "Group reconciliation", formula: "SUM(group totals) = total over the same eligible source rows", meaning: "Proves that grouping has neither lost nor duplicated an additive measure.", requirement: "Use the same WHERE rules, units, null policy, and measure grain on both sides." },
  ],

  workedExamples: [
    {
      id: "example-04-02-01",
      title: "Control AND and OR with parentheses",
      problem: "Return September PASS work orders from Plants A or B whose severity is Critical or downtime exceeds 60 minutes.",
      solutionSteps: [
        "Filter the date with a half-open interval: opened_at >= '2026-09-01' AND opened_at < '2026-10-01'.",
        "Filter quality_status = 'PASS' and plant IN ('A', 'B').",
        "Wrap the alternative risk conditions together: (severity = 'Critical' OR downtime_min > 60).",
        "Count and inspect returned work_order_id values before aggregating.",
      ],
      answer: "WHERE opened_at >= '2026-09-01' AND opened_at < '2026-10-01' AND quality_status = 'PASS' AND plant IN ('A','B') AND (severity = 'Critical' OR downtime_min > 60)",
      interpretation: "Without parentheses, the OR branch can admit rows that fail the date, quality, or plant rules because AND is evaluated before OR.",
    },
    {
      id: "example-04-02-02",
      title: "Interpret COUNT with missing values",
      problem: "A filtered set has 10 rows, 8 non-null severity values, and 3 distinct non-null severities. What do the count expressions return?",
      solutionSteps: [
        "COUNT(*) counts all 10 eligible rows.",
        "COUNT(severity) counts 8 rows because two severity values are NULL.",
        "COUNT(DISTINCT severity) counts the 3 unique known categories.",
        "Calculate completeness as 8 / 10 = 80% and report two unknown values separately.",
      ],
      answer: "COUNT(*) = 10; COUNT(severity) = 8; COUNT(DISTINCT severity) = 3; severity completeness = 80%.",
      interpretation: "Different COUNT forms answer different questions; none should be labeled simply 'count' in a governed report.",
    },
    {
      id: "example-04-02-03",
      title: "Create a deterministic top-five list",
      problem: "Return the five work orders with the greatest downtime, but several records tie at 90 minutes.",
      solutionSteps: [
        "Sort downtime_min DESC so the largest values appear first.",
        "Add opened_at ASC to prioritize the earliest event when downtime ties.",
        "Add work_order_id ASC as a stable unique tie-breaker.",
        "Apply the dialect's row limiter only after defining the complete order.",
      ],
      answer: "ORDER BY downtime_min DESC, opened_at ASC, work_order_id ASC LIMIT 5",
      interpretation: "LIMIT without deterministic ordering returns an arbitrary subset, while incomplete ordering allows tied rows to change sequence after refresh.",
    },
    {
      id: "example-04-02-04",
      title: "State the grain created by GROUP BY",
      problem: "A query groups by plant and substr(opened_at, 1, 7) and calculates COUNT(*) and SUM(downtime_min). What does one output row represent?",
      solutionSteps: [
        "List every grouping expression: plant and calendar month.",
        "State the output grain: one plant-month among the eligible work orders.",
        "Interpret COUNT(*) as eligible work orders per plant-month because the input grain is one work order.",
        "Interpret SUM(downtime_min) only after confirming downtime is stored once per work order.",
      ],
      answer: "One output row represents one plant during one calendar month for the filtered work-order population.",
      interpretation: "Adding severity to GROUP BY would change the result to plant-month-severity grain and create more rows, not merely more detail on the same row.",
    },
    {
      id: "example-04-02-05",
      title: "Separate WHERE from HAVING",
      problem: "Find September plant groups with at least three PASS work orders and more than 120 total downtime minutes.",
      solutionSteps: [
        "Use WHERE for September and quality_status = 'PASS' because these conditions select input rows.",
        "GROUP BY plant to create one output row per plant.",
        "Use HAVING COUNT(*) >= 3 AND SUM(downtime_min) > 120 because these conditions evaluate completed groups.",
        "Return the count and total beside each selected plant so the threshold is auditable.",
      ],
      answer: "WHERE defines eligible work orders; HAVING keeps only plant groups whose completed aggregates meet both thresholds.",
      interpretation: "Moving a row-level rule into HAVING may be invalid, inefficient, or semantically different; moving an aggregate condition into WHERE is logically impossible before groups exist.",
    },
    {
      id: "example-04-02-06",
      title: "Build reconciled conditional measures",
      problem: "For each plant, calculate total work orders, critical work orders, known-severity rows, downtime, and critical rate without losing noncritical rows.",
      solutionSteps: [
        "Keep the full eligible population in WHERE rather than filtering severity to Critical.",
        "Use SUM(CASE WHEN severity = 'Critical' THEN 1 ELSE 0 END) for the numerator.",
        "Use COUNT(severity) to expose the known-severity denominator and COUNT(*) to expose all rows.",
        "Reconcile critical + noncritical known + unknown severity to total work orders.",
      ],
      answer: "Conditional aggregation measures several categories from the same group while retaining a visible denominator and quality count.",
      interpretation: "A WHERE severity = 'Critical' filter would remove the comparison population and make the result unable to calculate an honest rate over all eligible rows.",
    },
  ],

  interactiveExploration: {
    title: "SQL Query Ladder: From Rows to Decision Evidence",
    description:
      "Build one maintenance analysis incrementally and verify the population after every logical stage.",
    instructions: [
      "Write the decision question and define input grain, eligible period, plants, statuses, severity policy, and expected output grain.",
      "Run a baseline SELECT with work_order_id and the columns needed to verify inclusion manually.",
      "Add one WHERE predicate at a time and record row count, distinct work orders, null counts, and downtime total after each addition.",
      "Test the intended Boolean expression and one deliberately unparenthesized version; compare the extra identifiers.",
      "Sort by downtime DESC with and without a unique tie-breaker and inspect tied records.",
      "Group by plant, then plant-month, and write a fresh grain statement for each result.",
      "Add COUNT(*), COUNT(severity), COUNT(DISTINCT robot_id), SUM, AVG, MIN, and MAX with clear aliases.",
      "Add conditional critical, breach, and unknown-severity counts and reconcile their components.",
      "Use HAVING to retain high-impact groups and explain why the same condition cannot belong in WHERE.",
      "Create one parameterized query and record its values separately from the SQL text.",
    ],
    questions: [
      "Which predicate caused the largest population change, and was that change expected?",
      "What unknown values entered SQL's third logical state?",
      "Which count represents rows, non-null measurements, distinct robots, and groups?",
      "How did each GROUP BY list change the output grain?",
      "Which ordering columns are required to make top-N results stable?",
      "Which component reconciliation would reveal an omitted category?",
    ],
    expectedDiscovery:
      "Trust grows when a query is constructed as a transparent sequence of population and grain decisions with controls at every stage, rather than as one large statement accepted because it runs.",
  },

  realWorldApplications: [
    { field: "Manufacturing and Robotics", application: "Filter valid maintenance events, rank high-impact work orders, summarize downtime and repair performance by plant and month, and identify groups exceeding controlled thresholds." },
    { field: "Finance", application: "Select governed transaction populations, detect large or unusual activity, aggregate balances by account and period, and retain groups that meet review rules." },
    { field: "Education", application: "Filter eligible enrollments, summarize attendance and mastery by course or subgroup, expose missing evidence, and identify support groups using privacy-aware minimum counts." },
    { field: "Healthcare Operations", application: "Summarize encounters, wait time, throughput, and service quality by facility and period while preserving approved populations and null meaning." },
    { field: "Retail and Supply Chain", application: "Group orders by product, supplier, warehouse, and period; rank delays; calculate fill rates; and isolate categories exceeding risk thresholds." },
    { field: "AI and Machine Learning", application: "Aggregate predictions, labels, errors, drift signals, and review outcomes by model version, time window, threshold, and governed subgroup." },
  ],

  aiConnection: {
    title: "Monitoring Metrics Are SQL Population Definitions",
    explanation:
      "Model accuracy, drift, subgroup error rates, and alert volumes depend on SQL filters and groups. A model can appear better when delayed labels are excluded silently, prediction retries are double counted, unknown outcomes are treated as correct, or low-volume groups are ranked without denominators.",
    example:
      "A model-monitoring query filters completed predictions within an observation window, groups by model_version and plant, counts distinct scoring_event_id, exposes labeled and unlabeled counts, calculates false-negative rate only over known outcomes, and applies a minimum-sample HAVING rule before comparisons are published.",
    uses: [
      "Define evaluation cohorts and observation windows",
      "Aggregate errors by model version and subgroup",
      "Track missing or delayed labels separately",
      "Rank alerts using stable severity and time rules",
      "Reconcile predictions, decisions, outcomes, and reviews",
    ],
    caution:
      "Filtering after observing outcomes can create selection bias. Every monitoring query should document eligibility, time boundaries, null policy, denominator, group grain, minimum sample rule, and excluded-record count.",
    reflectionQuestion:
      "How could a WHERE outcome IS NOT NULL filter make a model look safer than it is?",
  },

  pythonLab: {
    title: "Build and Audit a Maintenance Summary Query Pack",
    objective:
      "Create a small SQLite work-order table, run parameterized filters and governed grouped summaries, and prove the results with independent assertions and reconciliation controls.",
    code: `import sqlite3
import pandas as pd

connection = sqlite3.connect(":memory:")
connection.execute("""
CREATE TABLE work_orders (
    work_order_id TEXT PRIMARY KEY,
    plant TEXT NOT NULL,
    robot_id TEXT NOT NULL,
    opened_at TEXT NOT NULL,
    severity TEXT,
    downtime_min INTEGER NOT NULL CHECK (downtime_min >= 0),
    sla_breach INTEGER NOT NULL CHECK (sla_breach IN (0, 1)),
    quality_status TEXT NOT NULL CHECK (quality_status IN ('PASS', 'REVIEW'))
)
""")

rows = [
    ("WO-001", "A", "R-101", "2026-09-01 08:10", "Critical", 90, 1, "PASS"),
    ("WO-002", "A", "R-102", "2026-09-03 10:20", "High",     55, 0, "PASS"),
    ("WO-003", "A", "R-101", "2026-09-08 14:00", None,       20, 0, "PASS"),
    ("WO-004", "A", "R-103", "2026-09-15 09:30", "Critical", 75, 1, "PASS"),
    ("WO-005", "B", "R-201", "2026-09-02 07:45", "Medium",   35, 0, "PASS"),
    ("WO-006", "B", "R-202", "2026-09-05 16:10", "Critical", 65, 1, "PASS"),
    ("WO-007", "B", "R-201", "2026-09-12 11:25", "High",     80, 1, "PASS"),
    ("WO-008", "B", "R-203", "2026-09-21 13:40", "Low",      15, 0, "PASS"),
    ("WO-009", "C", "R-301", "2026-09-04 12:00", "Critical", 95, 1, "PASS"),
    ("WO-010", "C", "R-302", "2026-09-18 15:15", "High",     45, 0, "REVIEW"),
    ("WO-011", "A", "R-101", "2026-10-01 08:00", "Critical", 70, 1, "PASS"),
    ("WO-012", "B", "R-202", "2026-10-02 09:00", None,       25, 0, "PASS"),
]
connection.executemany(
    "INSERT INTO work_orders VALUES (?, ?, ?, ?, ?, ?, ?, ?)", rows
)

start_date = "2026-09-01"
end_date = "2026-10-01"

# Baseline eligible population: September PASS work orders.
eligible_sql = """
SELECT *
FROM work_orders
WHERE opened_at >= ?
  AND opened_at < ?
  AND quality_status = 'PASS'
ORDER BY opened_at, work_order_id
"""
eligible = pd.read_sql_query(
    eligible_sql, connection, params=(start_date, end_date)
)

# Deterministic top five.
top_five = pd.read_sql_query("""
SELECT work_order_id, plant, opened_at, downtime_min
FROM work_orders
WHERE opened_at >= ? AND opened_at < ? AND quality_status = 'PASS'
ORDER BY downtime_min DESC, opened_at ASC, work_order_id ASC
LIMIT 5
""", connection, params=(start_date, end_date))

# One row per plant for the same eligible population.
plant_summary = pd.read_sql_query("""
SELECT
    plant,
    COUNT(*) AS work_orders,
    COUNT(severity) AS known_severity,
    COUNT(DISTINCT robot_id) AS affected_robots,
    SUM(downtime_min) AS downtime_min,
    ROUND(AVG(downtime_min), 2) AS avg_downtime_min,
    SUM(CASE WHEN severity = 'Critical' THEN 1 ELSE 0 END) AS critical_orders,
    SUM(CASE WHEN severity IS NULL THEN 1 ELSE 0 END) AS unknown_severity,
    SUM(CASE WHEN sla_breach = 1 THEN 1 ELSE 0 END) AS sla_breaches
FROM work_orders
WHERE opened_at >= ?
  AND opened_at < ?
  AND quality_status = 'PASS'
GROUP BY plant
HAVING SUM(downtime_min) >= 90
ORDER BY downtime_min DESC, plant ASC
""", connection, params=(start_date, end_date))

# Controls calculated from the ungrouped eligible rows.
assert len(eligible) == 9
assert eligible["work_order_id"].is_unique
assert int(eligible["downtime_min"].sum()) == 530
assert top_five["work_order_id"].tolist() == [
    "WO-009", "WO-001", "WO-007", "WO-004", "WO-006"
]

# HAVING >= 90 retains A, B, and C; grouped totals must reconcile.
assert plant_summary["plant"].tolist() == ["A", "B", "C"]
assert int(plant_summary["work_orders"].sum()) == len(eligible)
assert int(plant_summary["downtime_min"].sum()) == int(eligible["downtime_min"].sum())
assert int(plant_summary["known_severity"].sum()) + int(
    plant_summary["unknown_severity"].sum()
) == len(eligible)
assert int(plant_summary["critical_orders"].sum()) == 4
assert int(plant_summary["sla_breaches"].sum()) == 5

print("Eligible September PASS rows:", len(eligible))
print("Eligible downtime:", int(eligible["downtime_min"].sum()))
print("Top five work orders:", top_five["work_order_id"].tolist())
print("Plant summary:\\n", plant_summary.to_string(index=False))
print("All filter, ordering, grouping, and reconciliation tests passed.")`,
    questions: [
      "Why does the eligible query use a half-open date interval rather than BETWEEN with an end-of-month timestamp?",
      "Which values are supplied as parameters instead of being concatenated into SQL text?",
      "Why does the top-five query require opened_at and work_order_id after downtime_min?",
      "What is the input grain and output grain of plant_summary?",
      "How do COUNT(*), COUNT(severity), and COUNT(DISTINCT robot_id) differ?",
      "Which assertions reconcile known and unknown severity to the eligible population?",
      "What would change if the HAVING threshold were 150 minutes?",
    ],
    reflectionQuestions: [
      "Which control would catch an accidental October row?",
      "Which metric would change if missing severity were replaced with 'Low'?",
      "How would you adapt the query for SQL Server TOP or ANSI FETCH syntax?",
    ],
    extension:
      "Add fault_code and repair_cost, create plant-month-fault summaries, calculate critical and breach rates with decimal division, add a minimum group size, and export a query-audit table containing SQL name, parameters, expected grain, row count, totals, and pass/fail status.",
  },

  guidedPractice: [
    { id: "gp-04-02-01", question: "What is the logical order of the six main query stages in this lesson?", answer: "FROM, WHERE, GROUP BY, HAVING, SELECT, then ORDER BY and the row limiter." },
    { id: "gp-04-02-02", question: "How should a query test whether severity is missing?", answer: "Use severity IS NULL or IS NOT NULL, not severity = NULL or severity <> NULL." },
    { id: "gp-04-02-03", question: "Why use a half-open monthly date interval?", answer: "opened_at >= month_start AND opened_at < next_month_start includes every timestamp in the month without guessing the final time precision." },
    { id: "gp-04-02-04", question: "What defines the grain of a grouped result?", answer: "The complete list of GROUP BY expressions together with the already-filtered population." },
    { id: "gp-04-02-05", question: "When should HAVING be used?", answer: "When a completed group's aggregate value or group-level condition determines whether the group remains in the result." },
    { id: "gp-04-02-06", question: "What makes a top-N query trustworthy?", answer: "A defined population, meaningful ordering, deterministic tie-breakers, documented dialect syntax, and validation of the boundary rows." },
  ],

  independentPractice: [
    { id: "ip-04-02-01", difficulty: "Foundational", question: "Write a WHERE clause for PASS rows from Plants A, B, or C opened during September 2026 with non-null downtime.", sampleAnswer: "WHERE quality_status = 'PASS' AND plant IN ('A','B','C') AND opened_at >= '2026-09-01' AND opened_at < '2026-10-01' AND downtime_min IS NOT NULL." },
    { id: "ip-04-02-02", difficulty: "Foundational", question: "Explain the difference among COUNT(*), COUNT(fault_code), and COUNT(DISTINCT fault_code).", sampleAnswer: "They count eligible rows, non-null fault-code values, and unique non-null fault-code values respectively." },
    { id: "ip-04-02-03", difficulty: "Applied", question: "Write a deterministic query for the ten newest critical events.", sampleAnswer: "Filter critical events, then ORDER BY event_timestamp DESC, event_id DESC and apply LIMIT 10 or the database's equivalent." },
    { id: "ip-04-02-04", difficulty: "Applied", question: "Create one row per plant-month with work-order count, distinct robots, total downtime, and average downtime.", sampleAnswer: "Group by plant and a governed month expression; return COUNT(*), COUNT(DISTINCT robot_id), SUM(downtime_min), and AVG(downtime_min) with explicit aliases." },
    { id: "ip-04-02-05", difficulty: "Analytical", question: "Identify the error in WHERE plant = 'A' OR plant = 'B' AND quality_status = 'PASS'.", sampleAnswer: "AND is evaluated first, so all Plant A rows enter regardless of quality; use WHERE plant IN ('A','B') AND quality_status = 'PASS'." },
    { id: "ip-04-02-06", difficulty: "Advanced", question: "Design conditional aggregates for PASS, REVIEW, null severity, critical severity, and SLA breach counts and state a reconciliation.", sampleAnswer: "Use SUM(CASE...) for each category; require PASS + REVIEW = total when statuses are exhaustive and known severity + null severity = total." },
    { id: "ip-04-02-07", difficulty: "Professional", question: "Create a SQL summary QA checklist for publication.", sampleAnswer: "Verify business question, source and output grain, parameters, date boundaries, Boolean precedence, null policy, distinct rules, aggregation, WHERE/HAVING placement, deterministic order, dialect, injection protection, component reconciliation, edge cases, and reviewed exclusions." },
  ],

  commonMistakes: [
    { mistake: "Writing WHERE severity = NULL.", correction: "Use IS NULL or IS NOT NULL and document whether missing severity is unknown, not applicable, or invalid." },
    { mistake: "Mixing AND and OR without parentheses.", correction: "Group each business rule explicitly and test the returned identifiers against a small known dataset." },
    { mistake: "Using BETWEEN for timestamp periods without checking inclusivity and precision.", correction: "Prefer a half-open interval from the period start through, but not including, the next period start." },
    { mistake: "Using SELECT * in analytical outputs.", correction: "Return only governed columns, state their meaning, and protect downstream consumers from schema drift and accidental sensitive fields." },
    { mistake: "Using LIMIT or TOP without ORDER BY and a tie-breaker.", correction: "Define complete deterministic ordering before selecting a ranked subset." },
    { mistake: "Treating COUNT(*) as a distinct customer, robot, or work-order count after joins.", correction: "Restate the input grain and use a validated distinct key only when the business question requires distinct entities." },
    { mistake: "Replacing NULL with zero before deciding its meaning.", correction: "Preserve and measure unknown values; COALESCE only when the governed business definition makes zero equivalent." },
    { mistake: "Selecting columns that are neither grouped nor aggregated.", correction: "Every returned value must be functionally determined by the group grain or explicitly aggregated." },
    { mistake: "Using WHERE for aggregate thresholds or HAVING for ordinary row eligibility.", correction: "Filter input rows in WHERE and completed groups in HAVING." },
    { mistake: "Publishing grouped results without reconciliation.", correction: "Compare grouped counts, category components, and additive totals to the same eligible ungrouped population." },
  ],

  discussionQuestions: [
    "Should unknown severity rows remain in a safety-event denominator, and what evidence should decide?",
    "When does a top-ten report support action, and when does it hide the broader distribution?",
    "Should small groups be suppressed, combined, or displayed with uncertainty warnings?",
    "How can an analyst prove that a monthly date filter is complete across time zones and timestamp precision?",
    "Which reconciliation controls should be mandatory before an AI-monitoring query is trusted?",
  ],

  formativeAssessment: {
    totalPoints: 40,
    passingScore: 32,
    questions: [
      { id: "check-04-02-01", type: "logic", points: 5, prompt: "State the logical query-processing order and explain one consequence.", sampleAnswer: "FROM, WHERE, GROUP BY, HAVING, SELECT, ORDER BY/limiter; for example, aggregate filters cannot run in WHERE because groups do not exist yet." },
      { id: "check-04-02-02", type: "filter", points: 5, prompt: "Write a null-aware, parenthesized predicate for a two-plant high-risk September population.", sampleAnswer: "Use a half-open date interval, plant IN (...), approved quality rule, and a parenthesized severity/downtime condition; use IS NULL when missingness is part of the rule." },
      { id: "check-04-02-03", type: "null", points: 5, prompt: "Explain SQL three-valued logic and why column = NULL fails.", sampleAnswer: "Comparisons with NULL return UNKNOWN, and WHERE retains only TRUE; IS NULL and IS NOT NULL test missingness explicitly." },
      { id: "check-04-02-04", type: "count", points: 5, prompt: "Distinguish COUNT(*), COUNT(column), and COUNT(DISTINCT column).", sampleAnswer: "They count eligible rows, eligible non-null column values, and unique eligible non-null values respectively." },
      { id: "check-04-02-05", type: "grain", points: 5, prompt: "Define the output grain of GROUP BY plant, month, severity and explain what happens if severity is removed.", sampleAnswer: "One row per plant-month-severity; removing severity produces one row per plant-month and aggregates all eligible severities together." },
      { id: "check-04-02-06", type: "having", points: 5, prompt: "Distinguish WHERE and HAVING with one example of each.", sampleAnswer: "WHERE quality_status = 'PASS' filters rows before grouping; HAVING SUM(downtime_min) > 120 filters completed groups." },
      { id: "check-04-02-07", type: "ranking", points: 5, prompt: "Design a deterministic top-five downtime query.", sampleAnswer: "Define the eligible population, order by downtime DESC and stable timestamp/key tie-breakers, then apply the database's row limiter." },
      { id: "check-04-02-08", type: "control", points: 5, prompt: "Give four reconciliation checks for a plant summary.", sampleAnswer: "Grouped row counts to eligible rows, grouped downtime to eligible downtime, known plus null severity to total, category components to total, and distinct-key checks; any four earn full credit." },
    ],
  },

  researchExtension: {
    title: "SQL Population and Aggregation Reliability Study",
    researchQuestion:
      "How often do common predicate, null, grouping, and ordering choices change operational conclusions even when every query executes successfully?",
    applicationOptions: [
      "Robot maintenance",
      "Financial exception monitoring",
      "Student support",
      "Healthcare operations",
      "Supply-chain service levels",
      "AI model monitoring",
    ],
    task:
      "Create one approved query and at least four plausible but defective variants: missing parentheses, incorrect null handling, incomplete date boundary, wrong group grain, or unstable top-N order. Compare their populations, metrics, rankings, and resulting decisions, then design automated controls that identify each defect.",
    requiredEvidence: [
      "Approved population and output-grain specification",
      "Reference dataset with known edge cases",
      "Correct parameterized query",
      "At least four controlled defective variants",
      "Row-level difference or anti-join evidence",
      "Metric, ranking, and decision comparison",
      "Automated assertions and reconciliation checks",
      "Conclusion, limitations, and governance recommendation",
    ],
  },

  portfolioArtifact: {
    title: "Lesson 2 Portfolio Evidence: Audited SQL Summary Pack",
    description:
      "Extend the maintenance database with a professional collection of parameterized detail, ranking, grouped-summary, quality, and reconciliation queries.",
    requiredSections: [
      "Decision questions, users, actions, and approved population definitions",
      "Input and output grain statement for every query",
      "Parameter dictionary covering periods, plants, thresholds, and quality status",
      "Row-level detail filters with Boolean, date, pattern, and null tests",
      "Deterministic ranking queries with documented tie-breakers",
      "Grouped summaries using counts, distinct counts, totals, averages, conditional measures, and HAVING",
      "Query QA matrix with expected rows, counts, totals, edge cases, and dialect notes",
      "README and decision brief explaining results, exclusions, limitations, and next questions",
    ],
    requiredEvidence: [
      "At least eight named SQL queries",
      "At least two parameterized queries",
      "One half-open date filter and one explicit null-policy example",
      "One deterministic top-N query",
      "Two output grains with written definitions",
      "One conditional aggregation and component reconciliation",
      "One WHERE/HAVING comparison and one deliberate defect test",
      "Executable script or notebook with passing assertions and captured results",
    ],
  },

  growthIndicators: [
    { title: "Population Definer", description: "You translate business eligibility into precise, testable row-level predicates." },
    { title: "Aggregation Designer", description: "You define output grain, choose meaningful aggregates, and expose denominators and missingness." },
    { title: "SQL Reliability Reviewer", description: "You test Boolean logic, null behavior, date boundaries, group filters, ordering, and dialect differences." },
    { title: "Evidence Reconciler", description: "You prove that detail rows, category components, group totals, and published metrics agree." },
  ],

  reflection: [
    "Which filter in your current work is least clearly tied to a business eligibility rule?",
    "Where could NULL be silently changing a count, average, or denominator?",
    "Which grouped report lacks a precise one-row grain statement?",
    "Which top-N result could change because its ordering does not resolve ties?",
    "What row-level evidence should accompany an aggregate alert?",
    "Which reconciliation assertion would prevent your most likely SQL error?",
  ],

  summary: [
    "A trustworthy SQL result begins with a written population and output-grain definition.",
    "Reason in logical order: FROM, WHERE, GROUP BY, HAVING, SELECT, then ORDER BY and the row limiter.",
    "WHERE filters input rows before aggregation; HAVING filters completed groups.",
    "Use parentheses to make Boolean intent explicit, especially when AND and OR appear together.",
    "Use half-open timestamp intervals to express complete periods safely.",
    "NULL creates UNKNOWN comparisons; use IS NULL, IS NOT NULL, and governed COALESCE logic.",
    "COUNT(*), COUNT(column), and COUNT(DISTINCT column) answer different questions.",
    "GROUP BY defines one output row per distinct grouping combination.",
    "Every selected nonaggregate expression must agree with the group grain.",
    "ORDER BY controls presentation, and top-N results require deterministic tie-breakers.",
    "Conditional aggregation measures categories without removing the comparison population.",
    "Parameters improve safety, reuse, testing, and separation of query logic from filter values.",
    "Reconcile grouped counts, category components, and additive totals to the same eligible detail rows.",
    "SQL that executes successfully is not necessarily SQL that answers the intended decision question.",
  ],

  previousLesson: {
    id: "data-ai-m04-l01",
    moduleNumber: 4,
    slug: "tables-row-grain-keys-and-relationships",
    title: "Tables, Row Grain, Keys, and Relationships",
  },
  nextLesson: {
    id: "data-ai-m04-l03",
    moduleNumber: 4,
    slug: "safe-joins-unmatched-records-and-double-counting",
    title: "Safe Joins, Unmatched Records, and Double Counting",
  },

  lumineryGuidance: {
    message:
      "Define the population and output grain before writing aggregates. Build the query one logical stage at a time, inspect identifiers, and reconcile every published total.",
    prompt:
      "Act as my senior SQL analyst and query-quality reviewer. Help me complete Module 4 Lesson 2 one verified stage at a time. Require me to state the business question, source grain, eligible population, parameters, date boundaries, null policy, Boolean logic, output grain, aggregates, HAVING rules, ordering, tie-breakers, and reconciliation controls. Review my SQL for three-valued logic, unsafe concatenation, dialect differences, distinct-count misuse, mixed grains, and misleading top-N results. Do not let me publish a summary until detail rows, grouped counts, category components, and additive totals reconcile.",
    coachingQuestions: [
      "Which exact rows are eligible, and which rule excludes each other row?",
      "Could AND/OR precedence change the population?",
      "What does NULL mean in every filtered or aggregated column?",
      "What does one output row represent after GROUP BY?",
      "Does each aggregate match the input and output grains?",
      "What tie-breaker makes the order deterministic?",
      "Which independent count and total prove the result?",
    ],
  },
};

export default lesson02;
