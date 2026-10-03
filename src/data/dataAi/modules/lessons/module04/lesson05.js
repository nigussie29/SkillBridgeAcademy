const lesson05 = {
  id: "data-ai-m04-l05",
  courseId: "data-ai-foundations",
  moduleId: "data-ai-foundations-module-04",
  moduleNumber: 4,
  lessonNumber: 5,
  slug: "window-functions-for-analytical-questions",
  title: "Window Functions for Analytical Questions",
  shortTitle: "Window Functions for Analytical Questions",
  subtitle:
    "Add rankings, comparisons, cumulative measures, rolling statistics, and contextual benchmarks to row-level data without collapsing the rows that decision-makers still need to inspect.",
  status: "available",
  duration: "4–5 hours",
  level: "Beginner to Professional",

  essentialQuestion:
    "How can window functions calculate group context, sequence, change, ranking, and rolling evidence while preserving the original analytical grain and producing deterministic, auditable results?",
  bigIdea:
    "A window function looks across related rows but returns a value for each current row. PARTITION BY defines the comparison group, ORDER BY defines sequence and peers, the frame defines which neighboring rows contribute, and reconciliation proves that analytical context did not change the governed population.",

  whyThisLessonExists: {
    title: "Many Analytical Questions Need Context Without Collapse",
    introduction:
      "GROUP BY is powerful when one summary row per group is the desired result. It cannot, by itself, keep every event while also showing its rank, previous value, running total, moving average, or share of a group. Window functions provide that context without forcing analysts to join summaries back to detail rows repeatedly.",
    centralProblem:
      "A robotics manager wants every maintenance event displayed with its rank inside the robot, difference from the prior event, cumulative downtime, three-event moving average, and plant share. One query uses GROUP BY and loses event detail; another omits a tie-breaker and changes the top-two list after refresh; a third accepts a default frame that combines peer rows unexpectedly.",
    purpose:
      "This lesson develops a safe window-function workflow: define the preserved row grain, choose partitions, create deterministic order, specify frames explicitly, apply ranking and offset functions correctly, filter windowed results in a later query stage, and reconcile the enriched output to the authoritative base population.",
  },

  problemFirst: {
    title: "Opening Investigation: Keep Every Event, Add Every Comparison",
    scenario:
      "Twelve approved September maintenance events contain 490 downtime minutes. The team needs one row per event plus each event's within-robot position, downtime rank, prior-event change, running downtime, and three-event moving average. A grouped query returns only three robot rows, while an unstable ranking query selects different tied events on different runs.",
    questions: [
      "What must one output row continue to represent?",
      "Which rows belong in the same comparison partition?",
      "Which ordering column represents analytical sequence rather than display preference?",
      "What stable key resolves equal timestamps or equal downtime values?",
      "Should tied events share a rank, consume rank positions, or be forced into unique positions?",
      "Which rows belong in a running-total or moving-average frame?",
      "Why can a window result not normally be filtered in WHERE at the same query level?",
      "Which counts, keys, and totals prove that the enriched result preserved all 12 events?",
    ],
    expectedInsight:
      "Window calculations are defined by four separate decisions: preserved grain, partition, order, and frame. The function name alone never fully defines the result.",
  },

  learningObjectives: [
    "Distinguish window functions from grouped aggregates and explain how row grain is preserved.",
    "Write the OVER clause and assign responsibilities to PARTITION BY, ORDER BY, and the frame specification.",
    "Use ROW_NUMBER for deterministic unique sequence and exact top-N selection.",
    "Use RANK and DENSE_RANK with an explicit, documented tie policy.",
    "Use NTILE, PERCENT_RANK, and CUME_DIST to describe relative position while respecting small-group limitations.",
    "Use LAG and LEAD to compare current rows with prior or next observations in a governed sequence.",
    "Calculate running totals and rolling averages with explicit ROWS frames.",
    "Use windowed SUM, AVG, COUNT, MIN, and MAX to add group context without collapsing rows.",
    "Calculate shares of group or overall totals with protected denominators and controlled rounding.",
    "Use FIRST_VALUE and LAST_VALUE with frames that match the intended boundary semantics.",
    "Filter windowed results through a CTE, derived table, or supported QUALIFY clause without changing the base cohort prematurely.",
    "Validate window results using preserved row counts, unique keys, partition totals, ranking invariants, frame spot checks, and deterministic ordering.",
  ],

  prerequisiteKnowledge: [
    "Lesson 1: row grain, keys, and relationship cardinality",
    "Lesson 2: filtering, sorting, grouping, aggregation, null handling, and reconciliation",
    "Lesson 3: fanout, double counting, and safe grain preservation",
    "Lesson 4: CTEs, reusable stages, scope, benchmarks, and equivalence testing",
    "The computational lab uses Python, pandas, and SQLite, but the SQL can be studied independently",
  ],

  visualModels: [
    {
      id: "window-function-design-cycle",
      type: "lifecycle",
      title: "Window Function Design Cycle",
      description:
        "Design every analytical window from the preserved population outward, then test the result at both row and partition levels.",
      stages: [
        { label: "1. Preserve grain", detail: "State what one output row represents and build the approved base population before adding any window calculation." },
        { label: "2. Partition", detail: "Choose the comparison group, such as robot, plant, customer, student, or model version; omit PARTITION BY only for a deliberate whole-result window." },
        { label: "3. Order", detail: "Choose the analytical sequence and add stable tie-breakers so ranking, offsets, and cumulative results are deterministic." },
        { label: "4. Frame", detail: "For frame-sensitive functions, define exactly which rows around the current row contribute using ROWS, RANGE, or database-supported GROUPS semantics." },
        { label: "5. Calculate", detail: "Apply ranking, offset, aggregate, value, or distribution functions and keep the evidence required to interpret them." },
        { label: "6. Validate", detail: "Reconcile rows, keys, totals, partition boundaries, ties, first and last rows, and controlled frame examples before filtering or publishing." },
      ],
      feedback:
        "If a result changes across runs, inspect ordering and ties first. If a cumulative value includes unexpected peers, inspect the frame rather than changing the aggregate.",
      interpretation:
        "The same function can answer different questions under different partitions, orders, and frames. A governed window specification is part of the metric definition.",
    },
  ],

  vocabulary: [
    { term: "Window function", definition: "A function that calculates across related rows while returning a result for each current row." },
    { term: "OVER clause", definition: "The clause that defines the partition, ordering, and optional frame used by a window function." },
    { term: "Window", definition: "The set of rows available to a window function for the current calculation." },
    { term: "PARTITION BY", definition: "The optional clause that divides eligible rows into independent analytical groups." },
    { term: "Window ORDER BY", definition: "The ordering inside OVER that defines sequence, peer groups, and cumulative direction; it is distinct from final display ordering." },
    { term: "Window frame", definition: "The subset of ordered partition rows used for the current frame-sensitive calculation." },
    { term: "ROWS frame", definition: "A frame based on physical row positions relative to the current row." },
    { term: "RANGE frame", definition: "A value- or peer-based frame whose exact supported forms and behavior depend on the database." },
    { term: "GROUPS frame", definition: "A frame measured in peer groups where supported by the database." },
    { term: "Current row", definition: "The row receiving the current window-function result." },
    { term: "UNBOUNDED PRECEDING", definition: "A frame boundary beginning at the first row of the current partition." },
    { term: "UNBOUNDED FOLLOWING", definition: "A frame boundary ending at the last row of the current partition." },
    { term: "Peer rows", definition: "Rows with equal values under the window ORDER BY expressions used for peer-sensitive functions or frames." },
    { term: "ROW_NUMBER", definition: "A ranking function assigning a unique sequential integer to every ordered row within a partition." },
    { term: "RANK", definition: "A ranking function giving peers the same rank and leaving gaps after ties." },
    { term: "DENSE_RANK", definition: "A ranking function giving peers the same rank without leaving gaps after ties." },
    { term: "NTILE", definition: "A function distributing ordered rows into a requested number of numbered buckets as evenly as possible." },
    { term: "LAG", definition: "A function returning a value from a previous row at a specified offset within the partition order." },
    { term: "LEAD", definition: "A function returning a value from a following row at a specified offset within the partition order." },
    { term: "FIRST_VALUE", definition: "A value function returning the first value in the applicable window frame." },
    { term: "LAST_VALUE", definition: "A value function returning the last value in the applicable window frame, often requiring an explicit full-partition frame." },
    { term: "Running total", definition: "A cumulative sum from the beginning of a partition through the current row." },
    { term: "Moving average", definition: "An average calculated over a rolling frame of recent, current, or surrounding rows." },
    { term: "PERCENT_RANK", definition: "A relative rank generally calculated as (rank - 1) divided by (partition rows - 1)." },
    { term: "CUME_DIST", definition: "The fraction of partition rows whose ordered value is less than or equal to the current row's value." },
    { term: "Top-N per group", definition: "Selecting the first N governed rows independently within each partition." },
    { term: "Tie policy", definition: "The documented rule for whether equal values share positions, create gaps, or are resolved by deterministic secondary keys." },
    { term: "Deterministic ordering", definition: "An ordering specification detailed enough to produce stable row positions across executions." },
    { term: "Windowed aggregate", definition: "An aggregate such as SUM or AVG used with OVER so detail rows remain present." },
    { term: "Named window", definition: "A reusable window specification declared by name where supported, reducing repeated partition and order text." },
    { term: "QUALIFY", definition: "A dialect-specific clause that filters after window functions; databases without it use a CTE or derived table." },
    { term: "Reconciliation", definition: "Proof that window enrichment preserved the approved rows and totals and produced correct partition, order, frame, and tie behavior." },
  ],

  formulas: [
    { id: "row-number", name: "Deterministic row number", formula: "ROW_NUMBER() OVER (PARTITION BY group ORDER BY metric DESC, unique_key)", meaning: "Assigns one stable position to every row within a group.", requirement: "Include a tie-breaker that produces a total order when exact row selection matters." },
    { id: "rank-dense-rank", name: "Rank tie behavior", formula: "RANK leaves gaps after peers; DENSE_RANK does not", meaning: "Controls how tied ordered values share positions.", requirement: "Choose the function from the business tie policy; do not add a unique key to the rank ordering if ties are supposed to remain peers." },
    { id: "lag-change", name: "Change from prior row", formula: "change_t = value_t - LAG(value_t) OVER (PARTITION BY group ORDER BY time, key)", meaning: "Measures sequential change within each governed group.", requirement: "Define first-row null behavior, time ordering, duplicate-time tie-breakers, and interval meaning." },
    { id: "running-total", name: "Running total", formula: "SUM(x) OVER (PARTITION BY group ORDER BY time, key ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW)", meaning: "Adds values from the start of the partition through the current ordered row.", requirement: "Specify ROWS explicitly when each physical row should enter one at a time." },
    { id: "moving-average", name: "k-row moving average", formula: "moving average = SUM(values in frame) / COUNT(non-null values in frame)", meaning: "Smooths recent observations using a rolling row frame.", requirement: "State k, direction, minimum observations, null treatment, and whether row-based spacing is appropriate." },
    { id: "share-of-total", name: "Share of total", formula: "share = row or group measure / SUM(measure) OVER (partition)", meaning: "Expresses a contribution relative to a governed partition or whole-result total.", requirement: "Protect zero denominators, align the numerator grain, and reconcile unrounded shares to 1 before presentation rounding." },
    { id: "percent-rank", name: "Percent rank", formula: "PERCENT_RANK = (RANK - 1) / (partition row count - 1)", meaning: "Places an ordered row between 0 and 1 using rank position.", requirement: "Handle one-row partitions and explain that percent rank is not the percentage of values below the current row." },
  ],

  workedExamples: [
    {
      id: "example-04-05-01",
      title: "Preserve event rows while adding a robot total",
      problem: "Show every maintenance event with its robot's total downtime without grouping away the individual event.",
      solutionSteps: [
        "Build the approved one-event population first.",
        "Use SUM(downtime_min) OVER (PARTITION BY robot_id).",
        "Keep event_id and event-level downtime in the SELECT list.",
        "Reconcile one repeated robot total per partition with an independent GROUP BY summary.",
      ],
      answer: "The windowed SUM returns a robot total on every event row while the output remains one row per maintenance event.",
      interpretation: "GROUP BY changes the output to one row per robot; a windowed aggregate adds robot context without collapsing event detail.",
    },
    {
      id: "example-04-05-02",
      title: "Select an exact top two per robot",
      problem: "Return exactly two highest-downtime events for each robot, including a stable rule when downtime ties.",
      solutionSteps: [
        "Assign ROW_NUMBER within robot_id partitions.",
        "Order by downtime_min DESC, event_time ASC, then event_id ASC.",
        "Place the window calculation in a CTE or derived table.",
        "Filter row_number <= 2 in the outer query and test every partition count.",
      ],
      answer: "ROW_NUMBER provides exactly two deterministic rows per robot when each partition contains at least two events.",
      interpretation: "RANK <= 2 could return more than two rows when ties share a rank; exact N and top ranks are different business questions.",
    },
    {
      id: "example-04-05-03",
      title: "Choose RANK or DENSE_RANK for ties",
      problem: "A robot has downtimes 50, 50, 30, and 20. Compare RANK and DENSE_RANK.",
      solutionSteps: [
        "Order only by downtime DESC so equal downtime values remain peers.",
        "RANK assigns 1, 1, 3, 4 because two rows occupy the first two positions.",
        "DENSE_RANK assigns 1, 1, 2, 3 because rank labels remain consecutive.",
        "Choose based on whether the business wants competition-style gaps or distinct-value levels.",
      ],
      answer: "RANK: 1, 1, 3, 4; DENSE_RANK: 1, 1, 2, 3.",
      interpretation: "Adding event_id to the RANK order would break the peer group and eliminate the intended tie; use a separate ROW_NUMBER when deterministic row selection is also required.",
    },
    {
      id: "example-04-05-04",
      title: "Measure change from the prior event",
      problem: "For each robot, calculate downtime change from the immediately previous approved event.",
      solutionSteps: [
        "Partition by robot_id so sequences restart for each robot.",
        "Order by event_time and event_id to create a stable chronology.",
        "Use LAG(downtime_min) to expose the prior value.",
        "Subtract prior downtime from current downtime and leave the first-row change null or label it explicitly.",
      ],
      answer: "downtime_min - LAG(downtime_min) OVER (PARTITION BY robot_id ORDER BY event_time, event_id)",
      interpretation: "LAG compares adjacent rows, not equal time intervals. Irregular event spacing should be reported or converted into a time-based design where supported.",
    },
    {
      id: "example-04-05-05",
      title: "Control a running-total frame",
      problem: "Calculate cumulative downtime after each event and ensure equal ordered values enter one physical row at a time.",
      solutionSteps: [
        "Partition by robot_id and order chronologically with a unique tie-breaker.",
        "Use SUM(downtime_min) as a windowed aggregate.",
        "Specify ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW explicitly.",
        "Check the last running total in each partition against a grouped robot total.",
      ],
      answer: "SUM(downtime_min) OVER (PARTITION BY robot_id ORDER BY event_time, event_id ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW)",
      interpretation: "An implicit default frame may treat peers together in some databases. Explicit ROWS semantics make the cumulative business rule reviewable.",
    },
    {
      id: "example-04-05-06",
      title: "Calculate a three-event moving average and plant share",
      problem: "Add recent-event smoothing to each event and calculate each plant's contribution to total downtime.",
      solutionSteps: [
        "For event smoothing, use AVG over ROWS BETWEEN 2 PRECEDING AND CURRENT ROW within each robot chronology.",
        "Expose the frame count so early rows with fewer than three observations are visible.",
        "Aggregate to one row per plant in a CTE before calculating plant share.",
        "Divide plant downtime by SUM(plant downtime) OVER () and reconcile unrounded shares to 100%.",
      ],
      answer: "Use a three-row rolling frame for event averages and a windowed total over the plant-summary stage for contribution share.",
      interpretation: "Moving averages and shares answer different grain questions. Both require a documented denominator or frame and should not be mixed into one unexplained metric.",
    },
  ],

  interactiveExploration: {
    title: "Window Specification Laboratory",
    description:
      "Hold the base data constant and change one window decision at a time to observe how partition, order, frame, and tie policy alter results.",
    instructions: [
      "Write the approved population and one-row output grain before adding any window expression.",
      "Calculate ROW_NUMBER over the entire dataset, then partition by plant and robot; describe which sequence restarts.",
      "Rank a controlled tied dataset with ROW_NUMBER, RANK, and DENSE_RANK and compare membership under <= 2.",
      "Remove the unique tie-breaker from ROW_NUMBER and explain why selected rows may become unstable.",
      "Use LAG under chronological order and then under downtime order; identify which analytical question each version answers.",
      "Compare an implicit cumulative frame with an explicit ROWS frame on tied ordering values.",
      "Change a three-row moving average to one preceding and one following; explain why future information now enters the current result.",
      "Calculate plant shares before and after rounding and reconcile the unrounded values.",
      "Filter top-N rows in an outer CTE and compare with filtering source rows before the window calculation.",
      "Create row-level and partition-level assertions for the approved design.",
    ],
    questions: [
      "Which change altered only presentation, and which changed analytical meaning?",
      "Which tie policy matches an exact staffing capacity versus award-style ranking?",
      "Where did the first-row LAG value become null, and how should it be communicated?",
      "Which frame accidentally used future rows?",
      "Why can rounded percentages sum to 99.99% or 100.01%?",
      "Which invariant should fail if a windowed stage loses an event?",
    ],
    expectedDiscovery:
      "Window correctness depends more on the full specification than on the function name. Small changes in partition, order, frame, or filter stage can answer entirely different business questions.",
  },

  realWorldApplications: [
    { field: "Manufacturing and Robotics", application: "Rank failures per robot, compare consecutive events, track cumulative downtime, smooth recent incidents, and identify top maintenance priorities without losing event detail." },
    { field: "Finance", application: "Sequence transactions, compute running balances, rank exposures, detect changes, and calculate customer or portfolio shares with governed ordering." },
    { field: "Education", application: "Track mastery growth, compare consecutive assessments, rank within appropriate cohorts, and calculate rolling attendance or performance evidence." },
    { field: "Healthcare Operations", application: "Sequence encounters, measure wait-time change, calculate cumulative service exposure, and rank facility or pathway performance with privacy controls." },
    { field: "Retail and Supply Chain", application: "Calculate running inventory, supplier rankings, rolling demand, shipment intervals, and product contribution shares." },
    { field: "AI and Machine Learning", application: "Create time-ordered features, prior-event deltas, rolling statistics, model-version rankings, and drift contributions while preventing future-data leakage." },
  ],

  aiConnection: {
    title: "Window Functions Build Powerful Features—and Can Leak the Future",
    explanation:
      "Window functions are widely used to create lagged signals, rolling averages, cumulative behavior, recency, and within-group ranks for machine learning. The same convenience can introduce target leakage when frames include the current outcome, following rows, or timestamps after the prediction moment.",
    example:
      "A predictive-maintenance feature table calculates prior three-event average vibration with a frame ending at 1 PRECEDING, prior failure count, and time since the last event for each robot. Every feature is computed only from records available before the scoring timestamp.",
    uses: [
      "Create lagged and rolling sensor features",
      "Calculate recency and change features",
      "Rank risk within plants or operational queues",
      "Compare model versions and subgroup performance",
      "Measure cumulative alert or intervention history",
    ],
    caution:
      "A frame ending at CURRENT ROW can include information created at the prediction moment, and FOLLOWING rows explicitly use the future. Feature windows require event-time ordering, unique tie-breakers, availability timestamps, and leakage tests.",
    reflectionQuestion:
      "Should a rolling feature include the current event, end at 1 PRECEDING, or use an availability timestamp—and what prediction decision determines the answer?",
  },

  pythonLab: {
    title: "Build and Audit a Windowed Maintenance Analysis",
    objective:
      "Create an approved maintenance-event population, add deterministic ranks, prior-event changes, running totals, moving averages, and plant shares, then prove the enriched output preserves rows, keys, and downtime.",
    code: `import sqlite3
import pandas as pd

connection = sqlite3.connect(":memory:")

connection.execute("""
CREATE TABLE maintenance_events (
    event_id TEXT PRIMARY KEY,
    robot_id TEXT NOT NULL,
    plant TEXT NOT NULL,
    event_time TEXT NOT NULL,
    downtime_min INTEGER NOT NULL CHECK (downtime_min >= 0),
    quality_status TEXT NOT NULL CHECK (quality_status IN ('PASS', 'REVIEW'))
)
""")

rows = [
    ("E-001", "R-101", "A", "2026-09-01 08:00", 30, "PASS"),
    ("E-002", "R-101", "A", "2026-09-04 08:00", 50, "PASS"),
    ("E-003", "R-101", "A", "2026-09-10 08:00", 50, "PASS"),
    ("E-004", "R-101", "A", "2026-09-15 08:00", 20, "PASS"),
    ("E-005", "R-201", "B", "2026-09-02 09:00", 40, "PASS"),
    ("E-006", "R-201", "B", "2026-09-06 09:00", 60, "PASS"),
    ("E-007", "R-201", "B", "2026-09-12 09:00", 10, "PASS"),
    ("E-008", "R-201", "B", "2026-09-18 09:00", 70, "PASS"),
    ("E-009", "R-301", "C", "2026-09-03 10:00", 25, "PASS"),
    ("E-010", "R-301", "C", "2026-09-09 10:00", 35, "PASS"),
    ("E-011", "R-301", "C", "2026-09-16 10:00", 45, "PASS"),
    ("E-012", "R-301", "C", "2026-09-22 10:00", 55, "PASS"),
    ("E-013", "R-101", "A", "2026-10-01 08:00", 100, "PASS"),
    ("E-014", "R-201", "B", "2026-09-20 09:00", 90, "REVIEW"),
]
connection.executemany("INSERT INTO maintenance_events VALUES (?, ?, ?, ?, ?, ?)", rows)

start_date = "2026-09-01"
end_date = "2026-10-01"

eligible = pd.read_sql_query("""
SELECT *
FROM maintenance_events
WHERE event_time >= ?
  AND event_time < ?
  AND quality_status = 'PASS'
ORDER BY event_id
""", connection, params=(start_date, end_date))

windowed = pd.read_sql_query("""
WITH eligible_events AS (
    SELECT *
    FROM maintenance_events
    WHERE event_time >= ?
      AND event_time < ?
      AND quality_status = 'PASS'
)
SELECT
    event_id,
    robot_id,
    plant,
    event_time,
    downtime_min,
    ROW_NUMBER() OVER (
        PARTITION BY robot_id
        ORDER BY downtime_min DESC, event_time ASC, event_id ASC
    ) AS row_number_in_robot,
    RANK() OVER (
        PARTITION BY robot_id
        ORDER BY downtime_min DESC
    ) AS downtime_rank,
    DENSE_RANK() OVER (
        PARTITION BY robot_id
        ORDER BY downtime_min DESC
    ) AS downtime_dense_rank,
    LAG(downtime_min) OVER (
        PARTITION BY robot_id
        ORDER BY event_time, event_id
    ) AS prior_downtime,
    downtime_min - LAG(downtime_min) OVER (
        PARTITION BY robot_id
        ORDER BY event_time, event_id
    ) AS downtime_change,
    SUM(downtime_min) OVER (
        PARTITION BY robot_id
        ORDER BY event_time, event_id
        ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW
    ) AS running_downtime,
    ROUND(AVG(downtime_min) OVER (
        PARTITION BY robot_id
        ORDER BY event_time, event_id
        ROWS BETWEEN 2 PRECEDING AND CURRENT ROW
    ), 2) AS moving_avg_3,
    COUNT(*) OVER (
        PARTITION BY robot_id
        ORDER BY event_time, event_id
        ROWS BETWEEN 2 PRECEDING AND CURRENT ROW
    ) AS moving_count_3,
    SUM(downtime_min) OVER (PARTITION BY robot_id) AS robot_total_downtime
FROM eligible_events
ORDER BY robot_id, event_time, event_id
""", connection, params=(start_date, end_date))

top_two = pd.read_sql_query("""
WITH eligible_events AS (
    SELECT *
    FROM maintenance_events
    WHERE event_time >= ? AND event_time < ? AND quality_status = 'PASS'
),
ranked AS (
    SELECT
        event_id,
        robot_id,
        downtime_min,
        ROW_NUMBER() OVER (
            PARTITION BY robot_id
            ORDER BY downtime_min DESC, event_time ASC, event_id ASC
        ) AS row_number_in_robot
    FROM eligible_events
)
SELECT *
FROM ranked
WHERE row_number_in_robot <= 2
ORDER BY robot_id, row_number_in_robot
""", connection, params=(start_date, end_date))

plant_share = pd.read_sql_query("""
WITH eligible_events AS (
    SELECT *
    FROM maintenance_events
    WHERE event_time >= ? AND event_time < ? AND quality_status = 'PASS'
),
plant_totals AS (
    SELECT plant, SUM(downtime_min) AS plant_downtime
    FROM eligible_events
    GROUP BY plant
)
SELECT
    plant,
    plant_downtime,
    100.0 * plant_downtime / SUM(plant_downtime) OVER () AS share_pct
FROM plant_totals
ORDER BY plant_downtime DESC, plant
""", connection, params=(start_date, end_date))

assert len(eligible) == 12
assert eligible["event_id"].is_unique
assert int(eligible["downtime_min"].sum()) == 490

assert len(windowed) == len(eligible)
assert windowed["event_id"].is_unique
assert int(windowed["downtime_min"].sum()) == 490

r101 = windowed.set_index("event_id").loc[["E-001", "E-002", "E-003", "E-004"]]
assert r101["row_number_in_robot"].tolist() == [3, 1, 2, 4]
assert r101["downtime_rank"].tolist() == [3, 1, 1, 4]
assert r101["downtime_dense_rank"].tolist() == [2, 1, 1, 3]
assert pd.isna(r101.loc["E-001", "prior_downtime"])
assert r101.loc["E-002", "downtime_change"] == 20
assert r101.loc["E-003", "downtime_change"] == 0
assert r101.loc["E-004", "running_downtime"] == 150
assert r101["moving_avg_3"].tolist() == [30.0, 40.0, 43.33, 40.0]
assert r101["moving_count_3"].tolist() == [1, 2, 3, 3]
assert r101["robot_total_downtime"].nunique() == 1
assert int(r101["robot_total_downtime"].iloc[0]) == 150

assert top_two["event_id"].tolist() == [
    "E-002", "E-003", "E-008", "E-006", "E-012", "E-011"
]
assert plant_share["plant"].tolist() == ["B", "C", "A"]
assert plant_share["plant_downtime"].tolist() == [180, 160, 150]
assert abs(float(plant_share["share_pct"].sum()) - 100.0) < 1e-9

final_running = windowed.groupby("robot_id").tail(1).set_index("robot_id")
robot_totals = windowed.groupby("robot_id")["downtime_min"].sum()
assert final_running["running_downtime"].to_dict() == robot_totals.to_dict()

print("Eligible rows and downtime:", len(eligible), int(eligible["downtime_min"].sum()))
print("Top two per robot:", top_two["event_id"].tolist())
print("Plant shares:", plant_share.round(2).to_dict("records"))
print("R-101 moving averages:", r101["moving_avg_3"].tolist())
print("Final running totals:", final_running["running_downtime"].to_dict())
print("All ranking, offset, frame, share, and reconciliation tests passed.")`,
    questions: [
      "Why do ROW_NUMBER, RANK, and DENSE_RANK use different ORDER BY lists in the lab?",
      "Why are E-002 and E-003 peers for RANK but uniquely ordered for ROW_NUMBER?",
      "What does the first null prior_downtime mean for each robot?",
      "Why does the moving average use ROWS BETWEEN 2 PRECEDING AND CURRENT ROW?",
      "How does moving_count_3 help interpret early-partition averages?",
      "Why must top-two filtering occur outside the ranked CTE in SQLite?",
      "Which assertion proves the final running total equals the robot total?",
      "Why should unrounded plant shares reconcile before display rounding?",
    ],
    reflectionQuestions: [
      "Which ranking function matches an exact two-person maintenance queue?",
      "Could the current moving-average frame introduce leakage in a predictive model?",
      "Which database-specific frame defaults must be reviewed before production use?",
    ],
    extension:
      "Add event availability timestamps, create prior-only rolling features ending at 1 PRECEDING, calculate days or hours since the previous event, add PERCENT_RANK and CUME_DIST, and write tests proving no feature uses a record unavailable at the scoring time.",
  },

  guidedPractice: [
    { id: "gp-04-05-01", question: "How does a windowed SUM differ from GROUP BY SUM?", answer: "A grouped SUM returns one row per group, while a windowed SUM repeats the contextual group result on each preserved detail row." },
    { id: "gp-04-05-02", question: "Which three choices inside OVER define most window behavior?", answer: "PARTITION BY defines groups, ORDER BY defines sequence and peers, and the frame defines which ordered rows contribute." },
    { id: "gp-04-05-03", question: "Which ranking function should select exactly N rows per group?", answer: "ROW_NUMBER with deterministic ordering, unless the business explicitly requires all ties even when more than N rows result." },
    { id: "gp-04-05-04", question: "Why does the first LAG result in each partition return NULL by default?", answer: "There is no prior row inside that partition's governed order." },
    { id: "gp-04-05-05", question: "What does ROWS BETWEEN 2 PRECEDING AND CURRENT ROW mean?", answer: "Use the current row and up to two prior physical rows in the ordered partition." },
    { id: "gp-04-05-06", question: "How should a database without QUALIFY filter a window result?", answer: "Calculate the window function in a CTE or derived table, then apply the filter in the outer query." },
  ],

  independentPractice: [
    { id: "ip-04-05-01", difficulty: "Foundational", question: "Write a window expression that counts eligible orders per customer while preserving one row per order.", sampleAnswer: "COUNT(*) OVER (PARTITION BY customer_id), after defining the eligible one-order population." },
    { id: "ip-04-05-02", difficulty: "Foundational", question: "Explain the output ranks for values 100, 100, 80, 70 under RANK and DENSE_RANK.", sampleAnswer: "RANK gives 1, 1, 3, 4; DENSE_RANK gives 1, 1, 2, 3." },
    { id: "ip-04-05-03", difficulty: "Applied", question: "Design a deterministic top-three products-per-category query.", sampleAnswer: "Use ROW_NUMBER partitioned by category and ordered by governed metric DESC plus stable tie-breakers, then filter row_number <= 3 outside the window stage." },
    { id: "ip-04-05-04", difficulty: "Applied", question: "Calculate current balance using transaction amounts in chronological order.", sampleAnswer: "Use SUM(amount) OVER (PARTITION BY account_id ORDER BY transaction_time, transaction_id ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW)." },
    { id: "ip-04-05-05", difficulty: "Analytical", question: "Explain why a three-row moving average may be misleading for irregularly spaced events.", sampleAnswer: "It gives equal row-based history regardless of elapsed time; a time-based frame, resampling strategy, or explicit interval features may better match the question." },
    { id: "ip-04-05-06", difficulty: "Advanced", question: "Design a prior-only feature window that avoids using the current outcome.", sampleAnswer: "Order by event availability time and unique key, use a frame ending at 1 PRECEDING, and assert every contributing timestamp precedes the scoring timestamp." },
    { id: "ip-04-05-07", difficulty: "Professional", question: "Create a production window-function QA checklist.", sampleAnswer: "Include population, preserved grain/key, partition, analytical order, tie-breaker, tie policy, frame, null/default behavior, filter stage, dialect, edge partitions, leakage risk, row and total reconciliation, and performance evidence." },
  ],

  commonMistakes: [
    { mistake: "Using GROUP BY when event detail must remain.", correction: "Use a windowed aggregate or join a validated summary only when one output row must remain per event." },
    { mistake: "Using ROW_NUMBER without a stable tie-breaker.", correction: "Add ordered columns that create a total order whenever exact row membership matters." },
    { mistake: "Using RANK <= N when exactly N rows are required.", correction: "Use ROW_NUMBER for exact capacity; use RANK when all rows tied at a qualifying rank should remain." },
    { mistake: "Adding a unique key to RANK and unintentionally breaking ties.", correction: "Keep business peer columns in RANK and calculate a separate deterministic ROW_NUMBER if exact selection is also needed." },
    { mistake: "Accepting the database's default frame without review.", correction: "Specify an explicit ROWS or other intended frame for cumulative and rolling measures." },
    { mistake: "Treating LAG as a fixed time interval.", correction: "It moves by ordered rows; inspect event spacing or use a time-aware design for interval questions." },
    { mistake: "Using LAST_VALUE with a frame ending at CURRENT ROW.", correction: "Use a full-partition frame through UNBOUNDED FOLLOWING when the true final partition value is intended." },
    { mistake: "Filtering source rows before computing a benchmark unintentionally.", correction: "Separate the approved cohort, window calculation, and post-window qualification into named stages." },
    { mistake: "Rounding shares before reconciliation.", correction: "Reconcile unrounded values to the total, then round only for presentation and explain residuals." },
    { mistake: "Using FOLLOWING rows in model features.", correction: "Align frames to information availability and prove that every contributing row was known at prediction time." },
  ],

  discussionQuestions: [
    "Should a top-three report include every tie at third place or exactly three rows, and who decides?",
    "When is row-based history more appropriate than time-based history?",
    "How should first-row LAG values be displayed in operational reports?",
    "Which window specifications should be standardized in a semantic layer rather than rewritten by analysts?",
    "What evidence proves that rolling AI features do not include current or future outcome information?",
  ],

  formativeAssessment: {
    totalPoints: 40,
    passingScore: 32,
    questions: [
      { id: "check-04-05-01", type: "concept", points: 5, prompt: "Distinguish a grouped aggregate from a windowed aggregate.", sampleAnswer: "GROUP BY collapses rows to group grain; an aggregate with OVER adds group context while preserving one result per current detail row." },
      { id: "check-04-05-02", type: "specification", points: 5, prompt: "Explain PARTITION BY, window ORDER BY, and the frame.", sampleAnswer: "They define the independent group, analytical sequence and peers, and contributing subset of ordered rows respectively." },
      { id: "check-04-05-03", type: "ranking", points: 5, prompt: "Compare ROW_NUMBER, RANK, and DENSE_RANK under ties.", sampleAnswer: "ROW_NUMBER is unique, RANK shares peer ranks and leaves gaps, and DENSE_RANK shares peer ranks without gaps." },
      { id: "check-04-05-04", type: "top-n", points: 5, prompt: "Design an exact top-two-per-robot calculation.", sampleAnswer: "Use deterministic ROW_NUMBER partitioned by robot and ordered by metric plus tie-breakers, then filter <= 2 in an outer stage." },
      { id: "check-04-05-05", type: "offset", points: 5, prompt: "Explain LAG, first-row behavior, and one required ordering control.", sampleAnswer: "LAG retrieves a previous ordered row, returns a default or NULL when absent, and requires meaningful sequence plus stable tie-breakers." },
      { id: "check-04-05-06", type: "frame", points: 5, prompt: "Write and interpret a running-total ROWS frame.", sampleAnswer: "ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW accumulates physical rows from the partition start through the current ordered row." },
      { id: "check-04-05-07", type: "leakage", points: 5, prompt: "Explain how a rolling feature can leak future information.", sampleAnswer: "The frame may include CURRENT ROW outcomes, FOLLOWING rows, or records unavailable at scoring time; use availability-aware prior-only frames and tests." },
      { id: "check-04-05-08", type: "validation", points: 5, prompt: "Give five controls for a windowed analytical dataset.", sampleAnswer: "Preserved row count and keys, source total, partition totals, ranking invariants, deterministic ties, first/last rows, frame spot checks, share reconciliation, and leakage tests; any five earn full credit." },
    ],
  },

  researchExtension: {
    title: "Window Specification Reliability Study",
    researchQuestion:
      "How do partition, order, tie policy, frame type, and filter stage alter rankings, trends, rolling measures, and decisions on the same governed population?",
    applicationOptions: [
      "Robot maintenance prioritization",
      "Financial transaction sequencing",
      "Student growth and support",
      "Healthcare throughput trends",
      "Supply-chain ranking and demand",
      "AI time-window feature engineering",
    ],
    task:
      "Implement one approved window analysis and at least five controlled variants that change one specification element at a time. Compare row membership, rank labels, cumulative values, rolling measures, shares, and downstream decisions, then propose automated controls that identify unsafe changes.",
    requiredEvidence: [
      "Approved population and preserved row grain",
      "Partition, analytical order, tie-breaker, tie policy, and frame contract",
      "ROW_NUMBER, RANK, DENSE_RANK, LAG or LEAD, and frame-sensitive aggregate examples",
      "At least five controlled specification variants",
      "Row-level difference and partition-level reconciliation",
      "Edge cases for ties, first rows, small partitions, nulls, and zero denominators",
      "Execution-plan or timing evidence after correctness is proven",
      "Conclusion, limitations, leakage review, and governance recommendation",
    ],
  },

  portfolioArtifact: {
    title: "Lesson 5 Portfolio Evidence: Windowed Maintenance Intelligence Pack",
    description:
      "Extend the maintenance database with governed rankings, event comparisons, cumulative evidence, rolling measures, contribution analysis, and automated window-specification tests.",
    requiredSections: [
      "Decision questions, approved population, preserved grain, and expected keys",
      "Window contract table for partition, order, tie-breaker, frame, nulls, and filter stage",
      "ROW_NUMBER, RANK, and DENSE_RANK comparison with documented tie policy",
      "LAG and LEAD event-change analysis",
      "Running total and rolling-average analyses with explicit frames",
      "Top-N-per-group query with exact membership controls",
      "Share-of-total analysis with unrounded reconciliation",
      "Prior-only AI feature example with leakage tests",
      "README and decision brief explaining results, edge cases, and limitations",
    ],
    requiredEvidence: [
      "At least eight named SQL queries",
      "One preserved-detail windowed aggregate",
      "Three ranking functions on the same tied data",
      "One deterministic exact top-N query",
      "One LAG or LEAD comparison",
      "Two explicit frame specifications",
      "Row, key, total, partition, tie, frame, and share assertions",
      "Executable script or notebook with passing tests and captured output",
    ],
  },

  growthIndicators: [
    { title: "Window Specification Designer", description: "You define preserved grain, partition, analytical order, frame, and tie policy as one governed metric contract." },
    { title: "Sequence Analyst", description: "You use LAG, LEAD, cumulative evidence, and moving frames to interpret change without confusing row sequence with time intervals." },
    { title: "Ranking Policy Reviewer", description: "You distinguish exact capacity from shared-rank inclusion and make tie behavior deterministic and transparent." },
    { title: "Leakage-Aware Feature Engineer", description: "You align window frames with information availability and test that current or future outcomes cannot enter predictive features." },
  ],

  reflection: [
    "Which current report collapses rows that users still need to inspect?",
    "Which top-N result lacks a written tie policy?",
    "Where could an incomplete ORDER BY make row positions unstable?",
    "Which cumulative metric relies on an unreviewed default frame?",
    "Which rolling average ignores irregular time spacing?",
    "Which feature window could include information unavailable at prediction time?",
  ],

  summary: [
    "Window functions add group and sequence context while preserving a result for each current row.",
    "PARTITION BY defines independent groups; window ORDER BY defines sequence and peers; the frame defines contributing rows.",
    "Window ORDER BY and final result ORDER BY serve different purposes and may both be required.",
    "ROW_NUMBER assigns unique positions and is appropriate for exact deterministic top-N selection.",
    "RANK shares peer ranks and leaves gaps; DENSE_RANK shares ranks without gaps.",
    "A business tie policy must determine whether tied rows share rank, create gaps, or receive unique positions.",
    "LAG and LEAD compare ordered neighboring rows and require meaningful sequence plus stable tie-breakers.",
    "Running totals should use an explicit frame such as ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW.",
    "Moving averages require a stated frame size, direction, minimum observations, null policy, and spacing interpretation.",
    "FIRST_VALUE and LAST_VALUE are frame-sensitive; LAST_VALUE often needs a frame through UNBOUNDED FOLLOWING.",
    "Top-N filtering normally occurs after window calculation in a CTE, derived table, or dialect-specific QUALIFY stage.",
    "Windowed shares require aligned numerator grain, protected denominators, and reconciliation before rounding.",
    "Percentile-style functions need careful interpretation in small partitions and tied data.",
    "Time-ordered AI features must exclude unavailable current or future information to prevent leakage.",
    "Reconcile rows, keys, source totals, partition totals, rankings, frames, shares, and edge cases before publication.",
  ],

  previousLesson: {
    id: "data-ai-m04-l04",
    moduleNumber: 4,
    slug: "subqueries-ctes-and-reusable-query-logic",
    title: "Subqueries, CTEs, and Reusable Query Logic",
  },
  nextLesson: null,

  lumineryGuidance: {
    message:
      "Define the preserved row, partition, analytical order, tie policy, and frame before choosing a window function; then reconcile the enriched output to the base population.",
    prompt:
      "Act as my senior SQL analytics and window-function reviewer. Help me complete Module 4 Lesson 5 one verified step at a time. Require an approved base population, preserved grain and key, partition definition, analytical order, deterministic tie-breakers, documented tie policy, explicit frames, null and default behavior, correct post-window filtering, share denominators, dialect notes, and leakage review. Make me compare ROW_NUMBER, RANK, and DENSE_RANK, spot-check LAG and moving frames, and reconcile rows, keys, totals, partition endpoints, shares, and exact top-N membership before publication.",
    coachingQuestions: [
      "What does one output row still represent?",
      "Which rows belong in the same partition?",
      "What sequence answers the analytical question?",
      "Which stable key resolves remaining ties?",
      "Should ties share rank or be forced into exact positions?",
      "Which physical rows or peer groups belong in the frame?",
      "Could the frame use information unavailable at the decision time?",
      "Which invariant proves the window result preserved the base population?",
    ],
  },
};

export default lesson05;
