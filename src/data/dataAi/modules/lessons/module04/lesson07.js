const lesson07 = {
  id: "data-ai-m04-l07",
  courseId: "data-ai-foundations",
  moduleId: "data-ai-foundations-module-04",
  moduleNumber: 4,
  lessonNumber: 7,
  slug: "portfolio-project-analytical-sql-database-and-query-pack",
  title: "Portfolio Project: Analytical SQL Database and Query Pack",
  shortTitle: "Analytical SQL Database and Query Pack",
  subtitle:
    "Integrate relational modeling, safe joins, reusable SQL, window functions, dimensional design, data-quality controls, and decision communication into one professional portfolio project.",
  status: "available",
  duration: "8–10 hours",
  level: "Beginner to Professional",

  essentialQuestion:
    "Can another analyst build the database from scripts, load a changed dataset, run the query pack, inspect every exception, reproduce the results, and make a responsible maintenance decision without your help?",
  bigIdea:
    "A portfolio-quality SQL project is an analytical product, not a folder of unrelated queries. It connects a clear decision to governed source contracts, normalized operational tables, dimensional facts and dimensions, reusable query stages, automated controls, documented results, and a reproducible handoff.",

  whyThisLessonExists: {
    title: "Your SQL Portfolio Should Demonstrate an Entire Decision System",
    introduction:
      "Employers and stakeholders need more than proof that you know SELECT, JOIN, or GROUP BY. They need evidence that you can translate an ambiguous problem into a maintainable database and analytical workflow that preserves row grain, protects history, handles imperfect records, answers useful questions, and explains what should happen next.",
    centralProblem:
      "Many SQL portfolios contain copied tutorial queries, one perfect dataset, undocumented table meaning, unsafe joins, no exception handling, and screenshots that cannot be reproduced. They may display technical syntax while providing little evidence of data modeling, analytical reasoning, validation, or professional communication.",
    purpose:
      "This capstone integrates all six Module 4 lessons. You will define a project charter and source contract, build normalized maintenance tables, route invalid records to exceptions, create a star schema with historical dimensions, write a governed analytical query pack, test grain and totals, interpret the evidence, and package the result for technical and executive review.",
  },

  problemFirst: {
    title: "Capstone Brief: Build the Maintenance Intelligence SQL Portfolio",
    scenario:
      "A manufacturer operates robots across Plants A, B, and C. Work orders, technician assignments, parts usage, fault definitions, and robot movements arrive from different operational sources. Leadership wants a trustworthy database and query pack that identifies maintenance concentration, preserves historical plant assignment, separates invalid records, and supports action without double-counting downtime.",
    questions: [
      "Who will use the project, what decision will it support, and what actions can they take?",
      "What does one row represent in every source, normalized, exception, dimension, fact, and output table?",
      "Which keys, types, categories, dates, and relationships form the source contract?",
      "Which records should be published, reviewed, rejected, or mapped to an unknown member?",
      "Which business processes require separate fact tables?",
      "Which historical attributes require Type 2 dimension handling?",
      "Which analytical queries answer ranking, comparison, trend, exception, and contribution questions?",
      "Which tests prove that source rows, facts, relationships, and measures reconcile?",
      "What evidence should a portfolio reviewer see within five minutes?",
    ],
    expectedInsight:
      "A strong SQL portfolio makes decisions, grain, lineage, exceptions, history, measures, controls, and reproducibility visible. Technical complexity matters only when it improves correctness, clarity, or actionability.",
  },

  learningObjectives: [
    "Translate an operational request into a project charter, decision requirement, source contract, scope, and acceptance criteria.",
    "Design an entity-relationship model with declared grain, primary keys, foreign keys, cardinality, optionality, and history rules.",
    "Create repeatable DDL, seed, load, transformation, query, test, and teardown or reset scripts.",
    "Normalize operational entities through 3NF and resolve many-to-many relationships with junction tables.",
    "Create a dimensional model with fact tables, conformed dimensions, surrogate keys, additivity rules, and Type 2 history.",
    "Route invalid, unmatched, duplicated, and review-required records to reason-coded exception outputs.",
    "Write parameterized analytical SQL using safe joins, CTEs, subqueries, aggregates, and window functions.",
    "Produce comparison, ranking, contribution, exception, historical, and reconciliation queries with deterministic results.",
    "Build automated tests for row balance, grain uniqueness, foreign keys, fanout, history intervals, totals, and expected query membership.",
    "Review indexes and execution plans only after semantic correctness is proven.",
    "Write a technical README, data dictionary, query catalog, decision brief, limitations statement, and portfolio narrative.",
    "Present the project using a concise problem-model-method-evidence-decision demonstration.",
  ],

  prerequisiteKnowledge: [
    "Lesson 1: tables, row grain, keys, relationships, constraints, and integrity",
    "Lesson 2: filtering, grouping, aggregation, parameters, nulls, and reconciliation",
    "Lesson 3: safe joins, unmatched records, cardinality, fanout, and double counting",
    "Lesson 4: subqueries, EXISTS, CTEs, reusable stages, and equivalence testing",
    "Lesson 5: analytical window functions, ranking, offsets, frames, and deterministic ordering",
    "Lesson 6: normalization, facts, dimensions, star schemas, additivity, and Type 2 history",
    "The computational lab uses Python, pandas, and SQLite, but the SQL design applies across relational databases",
  ],

  visualModels: [
    {
      id: "analytical-sql-portfolio-delivery-cycle",
      type: "lifecycle",
      title: "The Analytical SQL Portfolio Delivery Cycle",
      description:
        "Move from a decision need to a database and query product that another person can build, test, inspect, and reuse.",
      stages: [
        { label: "1. Frame", detail: "Define audience, decision, actions, scope, business rules, source contract, success measures, risks, and acceptance tests." },
        { label: "2. Model", detail: "Declare every grain, identify dependencies and relationships, normalize operations, design facts and dimensions, and document history rules." },
        { label: "3. Build", detail: "Create versioned DDL, constraints, seed data, load stages, exception routes, dimensions, facts, views, and reusable parameters." },
        { label: "4. Analyze", detail: "Write governed queries for profiles, comparisons, rankings, contributions, trends, exceptions, history, and decisions." },
        { label: "5. Verify", detail: "Run row, key, relationship, fanout, history, measure, membership, regression, and performance tests with captured evidence." },
        { label: "6. Publish", detail: "Package README, ERD, dictionary, query catalog, test report, decision brief, limitations, screenshots, and demonstration steps." },
      ],
      feedback:
        "New files, schema changes, reviewer findings, and changed business rules return to the source contract, model, load logic, and regression tests before a new release.",
      interpretation:
        "The project is finished when its results are reproducible, its exceptions are explainable, its controls pass, and a reviewer can connect every conclusion to governed data and SQL.",
    },
  ],

  vocabulary: [
    { term: "Capstone project", definition: "An integrated project demonstrating knowledge, judgment, implementation, testing, and communication across an entire learning module." },
    { term: "Analytical product", definition: "A maintained combination of data, logic, controls, outputs, documentation, and workflow serving a recurring decision." },
    { term: "Project charter", definition: "A concise agreement defining the problem, audience, decision, scope, deliverables, roles, risks, schedule, and success criteria." },
    { term: "Decision requirement", definition: "The specific choice, prioritization, escalation, investigation, or action the analysis must support." },
    { term: "User story", definition: "A short statement describing who needs a capability, what they need, and why it matters." },
    { term: "Acceptance criterion", definition: "A measurable condition that must pass before a deliverable is accepted." },
    { term: "Definition of done", definition: "The complete set of functionality, quality, testing, documentation, and delivery conditions required for completion." },
    { term: "Source contract", definition: "The governed expectation for source files, schema, grain, keys, types, categories, timing, ownership, and delivery." },
    { term: "Entity-relationship diagram (ERD)", definition: "A visual model of entities, attributes, keys, relationships, cardinality, and optionality." },
    { term: "Data dictionary", definition: "A table defining fields, meanings, types, units, allowed values, sources, null rules, and ownership." },
    { term: "DDL", definition: "Data definition language used to create or alter database structures such as tables, constraints, views, and indexes." },
    { term: "DML", definition: "Data manipulation language used to insert, update, delete, and query data." },
    { term: "Migration script", definition: "A versioned script that moves a database from one known schema state to another." },
    { term: "Seed data", definition: "A small controlled dataset used to initialize reference values and support predictable demonstrations or tests." },
    { term: "Idempotent script", definition: "A script designed so repeated execution produces the same intended state without unintended duplication." },
    { term: "Parameterized query", definition: "A query that binds external values separately from SQL text for safety, reuse, and consistent execution." },
    { term: "Query pack", definition: "A named, documented collection of SQL queries organized around analytical, quality, operational, and decision needs." },
    { term: "Query catalog", definition: "An index describing each query's purpose, inputs, output grain, users, controls, and expected result." },
    { term: "Control query", definition: "A query designed to verify counts, keys, relationships, totals, ranges, or other expected properties." },
    { term: "Exception query", definition: "A query returning records that violate a rule or require review, with identifiers and reason codes." },
    { term: "Reconciliation query", definition: "A query comparing authoritative values across stages to reveal loss, duplication, or unintended transformation." },
    { term: "Reason code", definition: "A standardized label explaining why a row was accepted, reviewed, rejected, or excluded." },
    { term: "Publication gate", definition: "A rule that blocks or qualifies release when a critical quality, reconciliation, or completeness condition fails." },
    { term: "Regression test", definition: "A repeated test confirming that a change did not break previously correct behavior." },
    { term: "Unit test", definition: "A focused test of one function, query, rule, or transformation using controlled inputs and expected outputs." },
    { term: "Integration test", definition: "A test verifying that several database components work correctly together from load through output." },
    { term: "Test fixture", definition: "A controlled set of records containing normal, boundary, invalid, and adversarial cases for repeatable testing." },
    { term: "Execution plan", definition: "The database optimizer's physical strategy for accessing, joining, filtering, sorting, and aggregating data." },
    { term: "Index", definition: "A data structure that can accelerate selected lookups or ordering at the cost of storage and write overhead." },
    { term: "View", definition: "A named query definition that exposes governed logic through a reusable relational interface." },
    { term: "Data lineage", definition: "The trace from a result through columns, transformations, rules, and authoritative sources." },
    { term: "Audit trail", definition: "A retained record of versions, loads, exceptions, tests, decisions, approvals, and changes." },
    { term: "Reproducibility", definition: "The ability to rebuild the database and obtain the same results from the same governed inputs and code." },
    { term: "Release candidate", definition: "A version that has completed implementation and is undergoing final verification before publication." },
    { term: "README", definition: "The starting document explaining purpose, setup, files, execution order, outputs, tests, limitations, and review steps." },
    { term: "Decision brief", definition: "A concise statement of context, evidence, interpretation, limitations, recommended action, owner, and follow-up measure." },
    { term: "Portfolio narrative", definition: "A clear explanation of the problem, method, challenges, evidence, decisions, results, and transferable skills demonstrated." },
    { term: "Handoff", definition: "The transfer of code, data instructions, documentation, access, ownership, known issues, and operating steps to another person." },
    { term: "SQL injection", definition: "A vulnerability in which untrusted input changes intended SQL structure; parameter binding is a primary defense." },
    { term: "Least privilege", definition: "Granting users and processes only the database permissions required for their responsibilities." },
  ],

  formulas: [
    { id: "row-balance", name: "Pipeline row balance", formula: "source rows = published rows + exception rows + documented exclusions", meaning: "Proves every source record reaches one explained outcome.", requirement: "Outcomes must be mutually exclusive, collectively exhaustive, and tested at the same source-row grain." },
    { id: "grain-uniqueness", name: "Fact grain uniqueness", formula: "duplicate grain rows = row count − distinct grain-key count", meaning: "Detects repeated rows at the declared fact grain.", requirement: "A valid release requires zero unexpected duplicates and record-level evidence for any approved repetition." },
    { id: "orphan-rate", name: "Foreign-key orphan rate", formula: "orphan rate = unmatched required foreign keys / eligible child rows", meaning: "Measures referential-integrity failure in a load or analytical relationship.", requirement: "Report counts and keys, distinguish approved unknown members, and never hide orphans with an inner join." },
    { id: "measure-delta", name: "Measure reconciliation delta", formula: "delta = published additive total − authoritative eligible source total", meaning: "Shows whether a load or query lost, duplicated, or altered an additive measure.", requirement: "Expected delta is zero only when population, grain, units, period, and null rules are aligned." },
    { id: "critical-share", name: "Critical-order share", formula: "critical share = critical published orders / all published orders", meaning: "Calculates the proportion of published work orders classified as critical.", requirement: "Expose both counts, protect zero denominators, and calculate a ratio of sums under the same filter context." },
    { id: "concentration-share", name: "Top-N contribution share", formula: "top-N share = Σ measure for top N entities / Σ measure for all eligible entities", meaning: "Measures how concentrated impact is among the leading ranked entities.", requirement: "Define N, tie policy, denominator, period, measure, and deterministic ordering." },
    { id: "weighted-part-cost", name: "Part usage cost", formula: "part cost = Σ(quantity_used × transaction_unit_cost)", meaning: "Calculates historical parts expense at one order-part usage grain.", requirement: "Use event-time unit cost, validate quantity and currency, and never multiply work-order downtime through the part grain." },
  ],

  workedExamples: [
    {
      id: "example-04-07-01",
      title: "Convert the request into acceptance criteria",
      problem: "Leadership asks for 'a SQL database that shows the worst robots.' Write measurable acceptance criteria.",
      solutionSteps: [
        "Build: one documented command sequence creates schema, loads fixture data, builds the star, runs queries, and executes tests.",
        "Trust: all source rows reach published or reason-coded exception outcomes with zero unexplained difference.",
        "Correctness: work-order grain is unique, foreign keys resolve, historical plant assignment is correct, and downtime reconciles.",
        "Analysis: robot ranking uses a governed metric, deterministic tie policy, and visible counts and totals.",
        "Handoff: README, ERD, dictionary, query catalog, test report, and decision brief let another analyst reproduce the result.",
      ],
      answer: "Replace the vague request with testable build, trust, correctness, analysis, and handoff requirements.",
      interpretation: "Acceptance criteria prevent a polished screenshot from being mistaken for a reliable analytical product.",
    },
    {
      id: "example-04-07-02",
      title: "Design the repository structure",
      problem: "How should SQL, tests, documentation, and outputs be organized?",
      solutionSteps: [
        "README.md and docs/ contain purpose, setup, ERD, dictionary, query catalog, decisions, and limitations.",
        "sql/01_schema, 02_seed, 03_load, 04_dimensions, 05_facts, 06_views, 07_queries, and 08_tests establish execution order.",
        "data/ contains synthetic or instructions-only inputs with no private production data.",
        "outputs/ contains small reproducible tables, test summaries, and screenshots rather than uncontrolled exports.",
      ],
      answer: "Organize by build order and reviewer task, with clear boundaries among code, data instructions, evidence, and documentation.",
      interpretation: "A reviewer should understand where to start and which script produces each result without reverse-engineering filenames.",
    },
    {
      id: "example-04-07-03",
      title: "Route an unmatched robot without losing the source row",
      problem: "Work order WO-009 references robot R-999, which is absent from the robot master.",
      solutionSteps: [
        "Retain the raw source row and source identifier.",
        "Use a left anti-join or NOT EXISTS check against the robot master.",
        "Route the record to exceptions with reason code UNMATCHED_ROBOT.",
        "Exclude it from the governed fact until corrected or apply a documented unknown-member policy.",
        "Include it in row-balance and exception-count controls.",
      ],
      answer: "The row remains visible and explainable but does not silently enter or disappear from published facts.",
      interpretation: "Inner joining away invalid rows makes a clean-looking result by hiding the exact evidence that needs attention.",
    },
    {
      id: "example-04-07-04",
      title: "Prevent downtime duplication across technician assignments",
      problem: "WO-004 has two assigned technicians, and a direct join doubles its 60 downtime minutes.",
      solutionSteps: [
        "Keep downtime in the one-row-per-work-order fact.",
        "Keep assignments in a junction or factless fact at one row per work-order–technician.",
        "Use EXISTS or DISTINCT work-order identifiers for qualification questions.",
        "Use an approved allocation weight only when downtime must be attributed across technicians.",
        "Reconcile the final work-order downtime to 260 minutes.",
      ],
      answer: "Do not sum work-order measures after crossing into a multivalued assignment grain without allocation or re-aggregation controls.",
      interpretation: "Separate fact grains can share dimensions, but their measures cannot be mixed casually.",
    },
    {
      id: "example-04-07-05",
      title: "Build a deterministic robot ranking",
      problem: "Rank robots by published downtime and return exactly the top two.",
      solutionSteps: [
        "Aggregate fact_maintenance to one row per robot.",
        "Use ROW_NUMBER ordered by total_downtime DESC, order_count DESC, then robot_id ASC.",
        "Filter row_number <= 2 in an outer CTE.",
        "Publish total downtime, order count, ranking rule, period, and quality scope.",
      ],
      answer: "The deterministic ranking selects the same two robot business keys whenever the governed inputs are unchanged.",
      interpretation: "Exact capacity and shared-rank inclusion are different requirements; document which one the decision uses.",
    },
    {
      id: "example-04-07-06",
      title: "Write the release decision",
      problem: "The project builds and the queries run. Is it ready to publish?",
      solutionSteps: [
        "Confirm all automated tests pass and capture versions, commands, and results.",
        "Review exceptions, unknown members, limitations, and unresolved assumptions.",
        "Confirm representative decisions trace to query outputs and source evidence.",
        "Run a clean-environment rebuild or reviewer walkthrough.",
        "Publish only when acceptance criteria and definition of done are satisfied.",
      ],
      answer: "Successful execution is necessary but not sufficient; release requires correctness, evidence, documentation, and reproducibility.",
      interpretation: "A professional portfolio demonstrates how you know the answer is trustworthy, not only how you produced it.",
    },
  ],

  interactiveExploration: {
    title: "Portfolio Red-Team Review",
    description:
      "Challenge the project with changed, invalid, duplicated, and historically difficult inputs before presenting it.",
    instructions: [
      "Add a duplicate work-order identifier and confirm the load or test blocks it.",
      "Add an unmatched robot and verify a reason-coded exception plus row balance.",
      "Add a new fault category and observe whether reference handling is controlled.",
      "Assign two technicians to one work order and prove downtime remains unchanged.",
      "Add two parts to one work order and prove part cost grows without multiplying work-order facts.",
      "Move a robot between plants on a boundary date and test Type 2 lookup behavior.",
      "Create tied robot totals and verify the documented ranking policy.",
      "Change the reporting period through parameters rather than editing query text.",
      "Run every reconciliation and inspect failed-record identifiers, not only counts.",
      "Give the repository to another person or fresh environment and record rebuild friction.",
    ],
    questions: [
      "Which test caught the most consequential failure?",
      "Which business rule remained ambiguous after reading the README?",
      "Which query changed membership under the new fixture?",
      "Where could sensitive or proprietary data leak into the portfolio?",
      "Which performance change preserved semantics and which risked changing them?",
      "What would a hiring manager understand within five minutes?",
    ],
    expectedDiscovery:
      "Portfolio strength comes from visible failure handling, reproducible evidence, and decision clarity. Controlled adverse cases demonstrate more skill than a perfect sample that never challenges the design.",
  },

  realWorldApplications: [
    { field: "Manufacturing and Robotics", application: "Prioritize maintenance using normalized work orders, technician and part relationships, Type 2 robot history, fact tables, rankings, and exception controls." },
    { field: "Finance", application: "Create transaction, account, customer, and balance models with reconciliation, anomaly queries, historical product assignments, and least-privilege reporting views." },
    { field: "Education", application: "Model students, courses, enrollments, assessments, and interventions, then publish cohort, mastery, and support-priority query packs." },
    { field: "Healthcare Operations", application: "Build privacy-aware encounter, provider, procedure, and capacity models with reason-coded exceptions and reproducible operational measures." },
    { field: "Retail and Supply Chain", application: "Separate order, line, shipment, supplier, and inventory processes, then publish fulfillment, delay, concentration, and stock queries without mixed-grain errors." },
    { field: "AI and Machine Learning", application: "Build point-in-time-correct observation and feature datasets with stable keys, historical dimensions, prior-only features, leakage tests, and monitoring facts." },
  ],

  aiConnection: {
    title: "Your SQL Project Can Become the Evidence Layer for AI",
    explanation:
      "Production AI depends on the same disciplines demonstrated by this capstone: stable entity identity, correct observation grain, point-in-time joins, reproducible cohorts, historical dimensions, exception handling, and automated tests. A model cannot repair duplicated outcomes, rewritten history, or invisible exclusions created upstream.",
    example:
      "Extend the maintenance star with one robot-day observation table. Build prior-only failure counts, downtime totals, part-cost totals, and recency features using event availability times; define a future failure label; then test that no source row after the scoring timestamp contributes to a feature.",
    uses: [
      "Create governed training and scoring cohorts",
      "Build reusable feature and label queries",
      "Preserve point-in-time dimension context",
      "Detect training-serving skew through shared SQL definitions",
      "Monitor data quality, feature drift, and model outcomes in conformed facts",
    ],
    caution:
      "Do not present a predictive result unless the dataset has one tested-unique observation row, a defensible label window, availability-aware feature logic, protected entity separation, and explicit leakage tests.",
    reflectionQuestion:
      "Which capstone table should become the authoritative observation population if you later build a predictive-maintenance model, and what must be added first?",
  },

  pythonLab: {
    title: "Build, Query, and Test the Maintenance Intelligence Database",
    objective:
      "Create a normalized maintenance source, route invalid rows, load a historical star schema, run a decision query pack, and prove row balance, grain, referential integrity, history, and measure reconciliation.",
    code: `import sqlite3
import pandas as pd

connection = sqlite3.connect(":memory:")
connection.execute("PRAGMA foreign_keys = ON")

# 1. Raw landing and governed operational reference tables.
connection.executescript("""
CREATE TABLE source_work_orders (
    source_row_id INTEGER PRIMARY KEY,
    order_id TEXT NOT NULL,
    robot_id TEXT NOT NULL,
    opened_date TEXT NOT NULL,
    fault_code TEXT NOT NULL,
    severity TEXT NOT NULL,
    downtime_min INTEGER NOT NULL,
    quality_status TEXT NOT NULL
);

CREATE TABLE plant (
    plant_id TEXT PRIMARY KEY,
    plant_name TEXT NOT NULL,
    region TEXT NOT NULL
);

CREATE TABLE robot (
    robot_id TEXT PRIMARY KEY,
    model TEXT NOT NULL
);

CREATE TABLE robot_plant_history (
    robot_id TEXT NOT NULL REFERENCES robot(robot_id),
    plant_id TEXT NOT NULL REFERENCES plant(plant_id),
    valid_from TEXT NOT NULL,
    valid_to TEXT NOT NULL,
    PRIMARY KEY (robot_id, valid_from),
    CHECK (valid_from < valid_to)
);

CREATE TABLE fault (
    fault_code TEXT PRIMARY KEY,
    fault_name TEXT NOT NULL,
    fault_family TEXT NOT NULL
);

CREATE TABLE technician (
    technician_id TEXT PRIMARY KEY,
    technician_name TEXT NOT NULL
);

CREATE TABLE part (
    part_id TEXT PRIMARY KEY,
    part_name TEXT NOT NULL
);

CREATE TABLE work_order (
    order_id TEXT PRIMARY KEY,
    robot_id TEXT NOT NULL REFERENCES robot(robot_id),
    opened_date TEXT NOT NULL,
    fault_code TEXT NOT NULL REFERENCES fault(fault_code),
    severity TEXT NOT NULL,
    downtime_min INTEGER NOT NULL CHECK (downtime_min >= 0)
);

CREATE TABLE work_order_technician (
    order_id TEXT NOT NULL REFERENCES work_order(order_id),
    technician_id TEXT NOT NULL REFERENCES technician(technician_id),
    PRIMARY KEY (order_id, technician_id)
);

CREATE TABLE work_order_part (
    order_id TEXT NOT NULL REFERENCES work_order(order_id),
    part_id TEXT NOT NULL REFERENCES part(part_id),
    quantity_used INTEGER NOT NULL CHECK (quantity_used > 0),
    transaction_unit_cost REAL NOT NULL CHECK (transaction_unit_cost >= 0),
    PRIMARY KEY (order_id, part_id)
);

CREATE TABLE load_exception (
    source_row_id INTEGER PRIMARY KEY REFERENCES source_work_orders(source_row_id),
    order_id TEXT NOT NULL,
    reason_code TEXT NOT NULL,
    reason_detail TEXT NOT NULL
);
""")

connection.executemany("INSERT INTO plant VALUES (?, ?, ?)", [
    ("A", "Assembly North", "East"),
    ("B", "Assembly South", "East"),
    ("C", "Packaging", "West"),
])
connection.executemany("INSERT INTO robot VALUES (?, ?)", [
    ("R-101", "RX-1"), ("R-201", "QZ-2"), ("R-301", "MX-3")
])
connection.executemany("INSERT INTO robot_plant_history VALUES (?, ?, ?, ?)", [
    ("R-101", "A", "2026-01-01", "2026-10-01"),
    ("R-101", "B", "2026-10-01", "9999-12-31"),
    ("R-201", "B", "2026-01-01", "9999-12-31"),
    ("R-301", "C", "2026-01-01", "9999-12-31"),
])
connection.executemany("INSERT INTO fault VALUES (?, ?, ?)", [
    ("F01", "Motor Overheat", "Mechanical"),
    ("F02", "Sensor Drift", "Controls"),
    ("F03", "Conveyor Jam", "Mechanical"),
])
connection.executemany("INSERT INTO technician VALUES (?, ?)", [
    ("T01", "Amina"), ("T02", "Daniel"), ("T03", "Sofia")
])
connection.executemany("INSERT INTO part VALUES (?, ?)", [
    ("P01", "Bearing"), ("P02", "Sensor Module"), ("P03", "Drive Belt")
])
connection.executemany("INSERT INTO source_work_orders VALUES (?, ?, ?, ?, ?, ?, ?, ?)", [
    (1, "WO-001", "R-101", "2026-09-02", "F01", "Critical", 30, "PASS"),
    (2, "WO-002", "R-101", "2026-09-10", "F02", "High", 50, "PASS"),
    (3, "WO-003", "R-201", "2026-09-03", "F01", "Medium", 20, "PASS"),
    (4, "WO-004", "R-201", "2026-09-12", "F03", "Critical", 60, "PASS"),
    (5, "WO-005", "R-301", "2026-09-07", "F02", "Low", 25, "PASS"),
    (6, "WO-006", "R-301", "2026-09-20", "F03", "High", 35, "PASS"),
    (7, "WO-007", "R-101", "2026-10-05", "F01", "Critical", 40, "PASS"),
    (8, "WO-008", "R-201", "2026-09-21", "F01", "High", 90, "REVIEW"),
    (9, "WO-009", "R-999", "2026-09-22", "F01", "High", 75, "PASS")
])

# 2. Publish valid operational rows and retain reason-coded exceptions.
connection.execute("""
INSERT INTO work_order
SELECT s.order_id, s.robot_id, s.opened_date, s.fault_code,
       s.severity, s.downtime_min
FROM source_work_orders AS s
JOIN robot AS r ON r.robot_id = s.robot_id
JOIN fault AS f ON f.fault_code = s.fault_code
WHERE s.quality_status = 'PASS'
""")

connection.execute("""
INSERT INTO load_exception
SELECT
    s.source_row_id,
    s.order_id,
    CASE
      WHEN s.quality_status <> 'PASS' THEN 'QUALITY_REVIEW'
      WHEN r.robot_id IS NULL THEN 'UNMATCHED_ROBOT'
      WHEN f.fault_code IS NULL THEN 'UNMATCHED_FAULT'
      ELSE 'UNCLASSIFIED'
    END,
    CASE
      WHEN s.quality_status <> 'PASS' THEN 'Source quality status requires review'
      WHEN r.robot_id IS NULL THEN 'Robot business key is absent from robot master'
      WHEN f.fault_code IS NULL THEN 'Fault code is absent from fault master'
      ELSE 'Record failed publication for an unclassified reason'
    END
FROM source_work_orders AS s
LEFT JOIN robot AS r ON r.robot_id = s.robot_id
LEFT JOIN fault AS f ON f.fault_code = s.fault_code
WHERE s.quality_status <> 'PASS'
   OR r.robot_id IS NULL
   OR f.fault_code IS NULL
""")

connection.executemany("INSERT INTO work_order_technician VALUES (?, ?)", [
    ("WO-001", "T01"), ("WO-002", "T01"),
    ("WO-004", "T02"), ("WO-004", "T03"),
    ("WO-005", "T02"), ("WO-007", "T03")
])
connection.executemany("INSERT INTO work_order_part VALUES (?, ?, ?, ?)", [
    ("WO-001", "P01", 2, 12.50),
    ("WO-002", "P02", 1, 80.00),
    ("WO-004", "P01", 3, 12.50),
    ("WO-007", "P03", 2, 25.00)
])

# 3. Dimensional model: one fact row per published work order.
connection.executescript("""
CREATE TABLE dim_date (
    date_key INTEGER PRIMARY KEY,
    full_date TEXT NOT NULL UNIQUE,
    month_name TEXT NOT NULL,
    year_number INTEGER NOT NULL
);

CREATE TABLE dim_plant (
    plant_key INTEGER PRIMARY KEY,
    plant_id TEXT NOT NULL UNIQUE,
    plant_name TEXT NOT NULL,
    region TEXT NOT NULL
);

CREATE TABLE dim_robot (
    robot_key INTEGER PRIMARY KEY,
    robot_id TEXT NOT NULL,
    model TEXT NOT NULL,
    plant_key INTEGER NOT NULL REFERENCES dim_plant(plant_key),
    effective_from TEXT NOT NULL,
    effective_to TEXT NOT NULL,
    is_current INTEGER NOT NULL CHECK (is_current IN (0, 1)),
    UNIQUE (robot_id, effective_from),
    CHECK (effective_from < effective_to)
);

CREATE TABLE dim_fault (
    fault_key INTEGER PRIMARY KEY,
    fault_code TEXT NOT NULL UNIQUE,
    fault_name TEXT NOT NULL,
    fault_family TEXT NOT NULL
);

CREATE TABLE fact_maintenance (
    maintenance_key INTEGER PRIMARY KEY,
    order_id TEXT NOT NULL UNIQUE,
    opened_date_key INTEGER NOT NULL REFERENCES dim_date(date_key),
    robot_key INTEGER NOT NULL REFERENCES dim_robot(robot_key),
    plant_key INTEGER NOT NULL REFERENCES dim_plant(plant_key),
    fault_key INTEGER NOT NULL REFERENCES dim_fault(fault_key),
    severity TEXT NOT NULL,
    order_count INTEGER NOT NULL CHECK (order_count = 1),
    downtime_min INTEGER NOT NULL CHECK (downtime_min >= 0)
);
""")

connection.executemany("INSERT INTO dim_date VALUES (?, ?, ?, ?)", [
    (20260902, "2026-09-02", "September", 2026),
    (20260903, "2026-09-03", "September", 2026),
    (20260907, "2026-09-07", "September", 2026),
    (20260910, "2026-09-10", "September", 2026),
    (20260912, "2026-09-12", "September", 2026),
    (20260920, "2026-09-20", "September", 2026),
    (20261005, "2026-10-05", "October", 2026)
])
connection.executemany("INSERT INTO dim_plant VALUES (?, ?, ?, ?)", [
    (1, "A", "Assembly North", "East"),
    (2, "B", "Assembly South", "East"),
    (3, "C", "Packaging", "West")
])
connection.executemany("INSERT INTO dim_robot VALUES (?, ?, ?, ?, ?, ?, ?)", [
    (1011, "R-101", "RX-1", 1, "2026-01-01", "2026-10-01", 0),
    (1012, "R-101", "RX-1", 2, "2026-10-01", "9999-12-31", 1),
    (2011, "R-201", "QZ-2", 2, "2026-01-01", "9999-12-31", 1),
    (3011, "R-301", "MX-3", 3, "2026-01-01", "9999-12-31", 1)
])
connection.executemany("INSERT INTO dim_fault VALUES (?, ?, ?, ?)", [
    (1, "F01", "Motor Overheat", "Mechanical"),
    (2, "F02", "Sensor Drift", "Controls"),
    (3, "F03", "Conveyor Jam", "Mechanical")
])

connection.execute("""
INSERT INTO fact_maintenance (
    order_id, opened_date_key, robot_key, plant_key, fault_key,
    severity, order_count, downtime_min
)
SELECT
    w.order_id,
    d.date_key,
    r.robot_key,
    r.plant_key,
    f.fault_key,
    w.severity,
    1,
    w.downtime_min
FROM work_order AS w
JOIN dim_date AS d ON d.full_date = w.opened_date
JOIN dim_robot AS r
  ON r.robot_id = w.robot_id
 AND w.opened_date >= r.effective_from
 AND w.opened_date < r.effective_to
JOIN dim_fault AS f ON f.fault_code = w.fault_code
""")

# 4. Governed analytical query pack.
plant_performance = pd.read_sql_query("""
SELECT
    p.plant_id,
    SUM(f.order_count) AS orders,
    SUM(f.downtime_min) AS downtime,
    ROUND(AVG(f.downtime_min), 2) AS avg_downtime
FROM fact_maintenance AS f
JOIN dim_plant AS p ON p.plant_key = f.plant_key
GROUP BY p.plant_id
ORDER BY downtime DESC, p.plant_id
""", connection)

robot_ranking = pd.read_sql_query("""
WITH robot_totals AS (
    SELECT r.robot_id,
           SUM(f.order_count) AS orders,
           SUM(f.downtime_min) AS downtime
    FROM fact_maintenance AS f
    JOIN dim_robot AS r ON r.robot_key = f.robot_key
    GROUP BY r.robot_id
), ranked AS (
    SELECT *, ROW_NUMBER() OVER (
        ORDER BY downtime DESC, orders DESC, robot_id
    ) AS priority_rank
    FROM robot_totals
)
SELECT * FROM ranked
ORDER BY priority_rank
""", connection)

fault_performance = pd.read_sql_query("""
SELECT df.fault_code, df.fault_name,
       SUM(f.order_count) AS orders,
       SUM(f.downtime_min) AS downtime
FROM fact_maintenance AS f
JOIN dim_fault AS df ON df.fault_key = f.fault_key
GROUP BY df.fault_code, df.fault_name
ORDER BY downtime DESC, df.fault_code
""", connection)

part_usage = pd.read_sql_query("""
SELECT p.part_id, p.part_name,
       SUM(wp.quantity_used) AS quantity,
       ROUND(SUM(wp.quantity_used * wp.transaction_unit_cost), 2) AS part_cost
FROM work_order_part AS wp
JOIN part AS p ON p.part_id = wp.part_id
GROUP BY p.part_id, p.part_name
ORDER BY part_cost DESC, p.part_id
""", connection)

technician_activity = pd.read_sql_query("""
SELECT t.technician_id, t.technician_name,
       COUNT(*) AS assignments,
       COUNT(DISTINCT wt.order_id) AS distinct_orders
FROM work_order_technician AS wt
JOIN technician AS t ON t.technician_id = wt.technician_id
GROUP BY t.technician_id, t.technician_name
ORDER BY distinct_orders DESC, t.technician_id
""", connection)

exceptions = pd.read_sql_query("""
SELECT order_id, reason_code, reason_detail
FROM load_exception
ORDER BY source_row_id
""", connection)

history_check = pd.read_sql_query("""
SELECT f.order_id, d.full_date, r.robot_id, r.robot_key, p.plant_id
FROM fact_maintenance AS f
JOIN dim_date AS d ON d.date_key = f.opened_date_key
JOIN dim_robot AS r ON r.robot_key = f.robot_key
JOIN dim_plant AS p ON p.plant_key = f.plant_key
WHERE r.robot_id = 'R-101'
ORDER BY d.full_date
""", connection)

# 5. Automated publication controls.
source_count = connection.execute("SELECT COUNT(*) FROM source_work_orders").fetchone()[0]
published_count = connection.execute("SELECT COUNT(*) FROM work_order").fetchone()[0]
exception_count = connection.execute("SELECT COUNT(*) FROM load_exception").fetchone()[0]
source_published_downtime = connection.execute("SELECT SUM(downtime_min) FROM work_order").fetchone()[0]
fact_downtime = connection.execute("SELECT SUM(downtime_min) FROM fact_maintenance").fetchone()[0]
fact_orders = connection.execute("SELECT SUM(order_count) FROM fact_maintenance").fetchone()[0]
distinct_fact_orders = connection.execute("SELECT COUNT(DISTINCT order_id) FROM fact_maintenance").fetchone()[0]

orphan_total = connection.execute("""
SELECT
  SUM(CASE WHEN d.date_key IS NULL THEN 1 ELSE 0 END) +
  SUM(CASE WHEN r.robot_key IS NULL THEN 1 ELSE 0 END) +
  SUM(CASE WHEN p.plant_key IS NULL THEN 1 ELSE 0 END) +
  SUM(CASE WHEN df.fault_key IS NULL THEN 1 ELSE 0 END)
FROM fact_maintenance AS f
LEFT JOIN dim_date AS d ON d.date_key = f.opened_date_key
LEFT JOIN dim_robot AS r ON r.robot_key = f.robot_key
LEFT JOIN dim_plant AS p ON p.plant_key = f.plant_key
LEFT JOIN dim_fault AS df ON df.fault_key = f.fault_key
""").fetchone()[0]

assert source_count == 9
assert published_count == 7
assert exception_count == 2
assert source_count == published_count + exception_count
assert exceptions["reason_code"].tolist() == ["QUALITY_REVIEW", "UNMATCHED_ROBOT"]

assert source_published_downtime == 260
assert fact_downtime == 260
assert fact_orders == 7
assert len(robot_ranking) == 3
assert distinct_fact_orders == published_count
assert orphan_total == 0

assert plant_performance["plant_id"].tolist() == ["B", "A", "C"]
assert plant_performance["downtime"].tolist() == [120, 80, 60]
assert robot_ranking["robot_id"].tolist() == ["R-101", "R-201", "R-301"]
assert robot_ranking["downtime"].tolist() == [120, 80, 60]
assert fault_performance.set_index("fault_code")["downtime"].to_dict() == {
    "F01": 90, "F02": 75, "F03": 95
}
assert round(float(part_usage["part_cost"].sum()), 2) == 192.50
assert history_check["robot_key"].tolist() == [1011, 1011, 1012]
assert history_check["plant_id"].tolist() == ["A", "A", "B"]

print("Row balance:", source_count, "=", published_count, "+", exception_count)
print("Published orders and downtime:", fact_orders, fact_downtime)
print("Exceptions:", exceptions[["order_id", "reason_code"]].to_dict("records"))
print("Plant performance:", plant_performance.to_dict("records"))
print("Robot ranking:", robot_ranking.to_dict("records"))
print("Fault performance:", fault_performance.to_dict("records"))
print("Part cost:", round(float(part_usage["part_cost"].sum()), 2))
print("R-101 history:", history_check.to_dict("records"))
print("All capstone row, grain, relationship, history, measure, and query tests passed.")`,
    questions: [
      "What does one row represent in source_work_orders, work_order, work_order_technician, work_order_part, and fact_maintenance?",
      "Why are WO-008 and WO-009 excluded for different reasons?",
      "Which test proves that no source row disappeared?",
      "Why is downtime stored only at work-order fact grain?",
      "How does the Type 2 lookup preserve R-101's September and October plant assignments?",
      "Why does the ranking use ROW_NUMBER rather than RANK?",
      "Which query calculates part cost without multiplying downtime?",
      "What additional test is required before using this project for AI training data?",
    ],
    reflectionQuestions: [
      "Which part of the project best demonstrates your judgment rather than syntax?",
      "Which control would you make a blocking publication gate in production?",
      "Which database-specific changes would be required for PostgreSQL, SQL Server, or Microsoft Fabric Warehouse?",
    ],
    extension:
      "Move the project into a real repository with ordered SQL scripts, add pytest or database-native tests, parameterize the reporting period, create a part-usage fact table and technician factless fact, add indexes after reviewing execution plans, and publish a two-minute demonstration with captured test evidence.",
  },

  guidedPractice: [
    { id: "gp-04-07-01", question: "What must the project charter define before database design begins?", answer: "Problem, audience, decision, actions, scope, deliverables, business rules, owners, risks, success criteria, and acceptance tests." },
    { id: "gp-04-07-02", question: "Why should the query pack state output grain?", answer: "Reviewers need to know what each row represents so they can interpret counts, joins, uniqueness, and measures safely." },
    { id: "gp-04-07-03", question: "What proves that invalid source records were not silently lost?", answer: "A record-level row balance from source to published, exceptions, and documented exclusions, plus mutually exclusive reason codes." },
    { id: "gp-04-07-04", question: "Why are work orders, technician assignments, and part usage separate grains?", answer: "One work order can have several technicians and parts, so combining them would create fanout and duplicate work-order measures." },
    { id: "gp-04-07-05", question: "When should execution plans and indexes be reviewed?", answer: "After semantic correctness, grain, relationship, and reconciliation tests pass on representative data." },
    { id: "gp-04-07-06", question: "What makes the final project reproducible?", answer: "Governed inputs, versioned scripts, fixed execution order, environment notes, automated tests, documented parameters, and captured expected outputs." },
  ],

  independentPractice: [
    { id: "ip-04-07-01", difficulty: "Foundational", question: "Write a one-paragraph project charter for the maintenance intelligence database.", sampleAnswer: "Name the users, recurring maintenance decision, required actions, source systems, in/out scope, deliverables, owners, risks, success criteria, and release date." },
    { id: "ip-04-07-02", difficulty: "Foundational", question: "Create a query-catalog entry for the plant performance query.", sampleAnswer: "Document purpose, user, parameters, source tables, output grain, measures, filters, ordering, controls, and expected edge cases." },
    { id: "ip-04-07-03", difficulty: "Applied", question: "Write a reconciliation query that returns missing source identifiers and duplicated published identifiers.", sampleAnswer: "Use a left anti-join or EXCEPT for missing identifiers and GROUP BY HAVING COUNT(*) > 1 for duplicates, preserving record-level evidence." },
    { id: "ip-04-07-04", difficulty: "Applied", question: "Design a view for governed published maintenance events.", sampleAnswer: "Expose declared columns, historical dimension labels, eligible statuses, lineage identifiers, and no ungoverned SELECT *; document the view grain and owner." },
    { id: "ip-04-07-05", difficulty: "Analytical", question: "Explain why a fast query can still be unsafe.", sampleAnswer: "Performance does not prove correct population, grain, cardinality, null semantics, history, measure behavior, or deterministic membership." },
    { id: "ip-04-07-06", difficulty: "Advanced", question: "Design a regression-test fixture for Type 2 dimension boundaries.", sampleAnswer: "Include events immediately before, at, and after each boundary; overlapping and missing intervals; two current rows; unmatched keys; and expected surrogate-key assignments." },
    { id: "ip-04-07-07", difficulty: "Professional", question: "Write a two-minute portfolio demonstration script.", sampleAnswer: "Present the decision, model, one failure case, build/test command, key query result, recommended action, limitation, and link to reproducible evidence." },
  ],

  commonMistakes: [
    { mistake: "Starting with SQL before defining the decision and row grains.", correction: "Write the charter, source contract, and grain declarations before implementation." },
    { mistake: "Using real confidential data in a public portfolio.", correction: "Use synthetic, anonymized, or legally shareable data and document privacy and licensing limits." },
    { mistake: "Putting every query in one file without execution order or purpose.", correction: "Organize scripts by build stage and maintain a query catalog with dependencies and output grain." },
    { mistake: "Showing only successful rows and hiding exceptions.", correction: "Publish reason-coded exception evidence, row balance, ownership, and resolution status." },
    { mistake: "Combining work-order, technician, and part measures in one query without grain controls.", correction: "Aggregate each process at its governed grain before comparison or use controlled bridges and allocation rules." },
    { mistake: "Hard-coding parameters through string concatenation.", correction: "Use parameter binding and validated configuration values to reduce injection risk and improve reuse." },
    { mistake: "Adding indexes before proving correctness.", correction: "Establish correct semantics and representative tests, then measure plans and performance before and after each index." },
    { mistake: "Treating one successful run as reproducibility.", correction: "Rebuild in a clean environment or reviewer walkthrough using documented commands and versioned inputs." },
    { mistake: "Writing a README that lists files but not decisions or limitations.", correction: "Explain purpose, setup, architecture, execution, controls, results, actions, risks, and known gaps." },
    { mistake: "Publishing screenshots without machine-checkable evidence.", correction: "Retain SQL, tests, logs, expected outputs, and source-to-result lineage beside visual evidence." },
  ],

  discussionQuestions: [
    "Which artifact most strongly distinguishes this project from a tutorial clone?",
    "How much synthetic complexity is enough to demonstrate skill without making the portfolio confusing?",
    "Which data-quality failures should block publication versus permit a qualified release?",
    "How should a public portfolio discuss performance without claiming unrealistic production scale?",
    "Which parts of this SQL project transfer directly to Microsoft Fabric, Power BI, and AI engineering work?",
  ],

  formativeAssessment: {
    totalPoints: 50,
    passingScore: 40,
    questions: [
      { id: "check-04-07-01", type: "charter", points: 5, prompt: "Define the decision, audience, action, and acceptance criteria for the project.", sampleAnswer: "A complete answer names who prioritizes maintenance, what evidence they compare, which actions they can take, and measurable build, quality, analytical, and handoff conditions." },
      { id: "check-04-07-02", type: "model", points: 5, prompt: "Explain the normalized operational model and its many-to-many relationships.", sampleAnswer: "Plants, robots, faults, technicians, parts, and work orders are separate entities; work-order–technician and work-order–part junctions preserve distinct association grains." },
      { id: "check-04-07-03", type: "dimensional", points: 5, prompt: "Declare the maintenance fact grain and identify its dimensions and measures.", sampleAnswer: "One row per published work order with date, robot, plant, fault, and severity context plus order_count and downtime_min." },
      { id: "check-04-07-04", type: "quality", points: 5, prompt: "Explain how exceptions and row balance protect source evidence.", sampleAnswer: "Every source row reaches one published or reason-coded exception outcome, allowing counts and identifiers to reconcile without silent loss." },
      { id: "check-04-07-05", type: "join", points: 5, prompt: "Explain how the project prevents technician or part fanout from duplicating downtime.", sampleAnswer: "It stores associations at separate grains and does not sum work-order facts after joining multivalued relationships unless controlled allocation or re-aggregation is applied." },
      { id: "check-04-07-06", type: "window", points: 5, prompt: "Design a deterministic exact top-two robot query.", sampleAnswer: "Aggregate one row per robot, apply ROW_NUMBER ordered by governed metric plus stable tie-breakers, and filter <= 2 in an outer stage." },
      { id: "check-04-07-07", type: "history", points: 5, prompt: "Explain the Type 2 history test for R-101.", sampleAnswer: "September facts must use the Plant A robot surrogate key, the October boundary fact must use the Plant B version, and intervals must not overlap or leave unintended gaps." },
      { id: "check-04-07-08", type: "testing", points: 5, prompt: "List six blocking tests for the release candidate.", sampleAnswer: "Row balance, grain uniqueness, foreign-key orphans, Type 2 interval validity, additive measure reconciliation, deterministic query membership, exception classification, and clean rebuild; any six earn full credit." },
      { id: "check-04-07-09", type: "security", points: 5, prompt: "Give three controls for safe public portfolio delivery.", sampleAnswer: "Use synthetic or approved data, parameter binding, no embedded secrets, least privilege, license notes, and a privacy review; any three earn full credit." },
      { id: "check-04-07-10", type: "communication", points: 5, prompt: "Describe the final reviewer handoff package.", sampleAnswer: "README, ERD, dictionary, source contract, query catalog, ordered scripts, test report, exception evidence, decision brief, limitations, outputs, and demonstration instructions." },
    ],
  },

  researchExtension: {
    title: "Cross-Database SQL Reliability and Performance Study",
    researchQuestion:
      "How does the same governed maintenance model and analytical query pack differ across SQLite, PostgreSQL, SQL Server, and Microsoft Fabric Warehouse while preserving identical business semantics?",
    applicationOptions: [
      "Window-function dialect and frame behavior",
      "Type 2 load patterns and merge semantics",
      "Constraint and index support",
      "Execution-plan and performance comparison",
      "Parameterization and security",
      "Warehouse distribution and dimensional design",
    ],
    task:
      "Port the project to a second database, document every syntax and behavior difference, prove set and measure equivalence on the same fixture, compare execution plans and measured timing on scaled synthetic data, and recommend database-specific production controls.",
    requiredEvidence: [
      "Identical business definitions, grains, fixtures, and expected outputs",
      "Database-specific DDL, load, window, date, and parameter differences",
      "Two-way set comparisons and measure reconciliation",
      "Constraint, history, exception, and null-semantics tests",
      "Representative execution plans and repeatable timing method",
      "Index or distribution experiments performed after correctness",
      "Security and least-privilege comparison",
      "Conclusion, limitations, migration risks, and recommendation",
    ],
  },

  portfolioArtifact: {
    title: "Module 4 Capstone: Maintenance Intelligence SQL Portfolio",
    description:
      "Deliver a complete, reproducible repository that builds the maintenance database, validates source records, loads the analytical star, runs a governed query pack, proves correctness, and communicates a decision.",
    requiredSections: [
      "README with problem, users, decision, setup, execution order, outputs, tests, limitations, and demonstration",
      "Project charter, source contract, acceptance criteria, and definition of done",
      "ERD, data dictionary, relationship matrix, fact process matrix, and grain declarations",
      "Ordered schema, seed, load, dimension, fact, view, query, control, and test scripts",
      "Reason-coded exception pipeline and row-balance report",
      "Analytical query pack for profiles, comparisons, rankings, history, parts, technicians, and decisions",
      "Automated test report with normal, boundary, invalid, duplicate, unmatched, and historical cases",
      "Decision brief with evidence, action, owner, follow-up measure, caveats, and next analysis",
      "Portfolio narrative and two-minute demonstration script",
    ],
    requiredEvidence: [
      "At least eight normalized operational tables or governed relationships",
      "At least one transaction fact and one second fact or factless relationship at a different grain",
      "At least four dimensions including date and a working Type 2 dimension",
      "At least twelve named analytical, exception, and control queries",
      "Parameterized date or scope filtering",
      "Safe many-to-many handling without measure duplication",
      "Row, key, foreign-key, fanout, history, measure, membership, and regression tests",
      "Clean rebuild with captured passing output and no embedded secrets or private data",
    ],
  },

  growthIndicators: [
    { title: "SQL Product Builder", description: "You connect stakeholder decisions to a reproducible database, query pack, controls, and documentation." },
    { title: "Data Model Reviewer", description: "You protect grain, dependencies, relationships, measures, and history across normalized and dimensional models." },
    { title: "Quality Gate Designer", description: "You turn assumptions into automated row, key, relationship, history, measure, and regression tests." },
    { title: "Portfolio Communicator", description: "You present technical evidence as a concise, honest decision narrative with limitations and next actions." },
  ],

  reflection: [
    "Which artifact most clearly proves that you can solve a business problem rather than only write SQL?",
    "Which failure case changed your database or query design?",
    "Which grain declaration was hardest to make precise?",
    "Which result would be misleading without its exception or denominator evidence?",
    "Which part of the repository would another analyst struggle to maintain?",
    "What will you improve before placing this project on your resume or GitHub profile?",
  ],

  summary: [
    "A professional SQL portfolio connects a real decision to governed data, tested logic, and reproducible evidence.",
    "The project charter, source contract, acceptance criteria, and definition of done make success observable.",
    "Every table and query output requires a declared row grain and expected key.",
    "Normalized operational models protect dependencies and updates; dimensional models support historical analytical use.",
    "Separate work-order, technician, part, sensor, and snapshot processes when their row meanings differ.",
    "Reason-coded exceptions and row balance prevent invalid records from disappearing silently.",
    "Safe joins require explicit cardinality, unmatched-row policy, fanout tests, and compatible measure grain.",
    "CTEs, subqueries, views, and parameterized queries should make business stages understandable and reusable.",
    "Window functions require deterministic order, documented tie policy, explicit frames, and post-window filtering.",
    "Type 2 dimensions preserve the descriptive context valid when each fact occurred.",
    "Automated tests should cover rows, uniqueness, foreign keys, history, measures, membership, edge cases, and regression.",
    "Performance tuning begins only after semantic correctness is proven on representative data.",
    "Public portfolios must use approved data, exclude secrets, bind parameters, document licensing, and respect least privilege.",
    "The README, ERD, dictionary, query catalog, test report, decision brief, and demo script form the reviewer handoff.",
    "The capstone is complete when another person can rebuild it, inspect its failures, verify its results, and understand the recommended action.",
  ],

  previousLesson: {
    id: "data-ai-m04-l06",
    moduleNumber: 4,
    slug: "normalization-facts-dimensions-and-star-schemas",
    title: "Normalization, Facts, Dimensions, and Star Schemas",
  },
  nextLesson: {
    id: "data-ai-m05-l01",
    moduleNumber: 5,
    slug: "python-types-control-flow-functions-and-modules",
    title: "Python Types, Control Flow, Functions, and Modules",
  },

  lumineryGuidance: {
    message:
      "Build the portfolio for a skeptical reviewer: define the decision, protect every grain, retain every exception, automate every critical control, and make the result reproducible from a clean start.",
    prompt:
      "Act as my senior SQL engineer, data modeler, analytics reviewer, and portfolio coach. Help me complete the Module 4 capstone one verified gate at a time. Require a project charter, source contract, ERD, data dictionary, normalized model, fact process matrix, grain declarations, dimensional history, safe joins, exception pipeline, parameterized query pack, row and measure reconciliation, automated tests, execution evidence, README, decision brief, limitations, privacy review, and two-minute demonstration. Do not let me optimize before correctness, hide exceptions, mix grains, embed secrets, or call the project complete until another person can rebuild and verify it.",
    coachingQuestions: [
      "Who makes what decision from this project?",
      "What does one row represent in every table and query output?",
      "Which source rows are published, reviewed, rejected, or unmatched?",
      "Where can a relationship multiply a measure?",
      "Which dimension state was valid when each fact occurred?",
      "Which query result drives the recommended action?",
      "Which automated test would stop an unsafe release?",
      "Can a reviewer rebuild the project from the README without your help?",
    ],
  },
};

export default lesson07;
