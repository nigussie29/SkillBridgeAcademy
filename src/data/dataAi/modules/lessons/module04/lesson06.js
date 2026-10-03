const lesson06 = {
  id: "data-ai-m04-l06",
  courseId: "data-ai-foundations",
  moduleId: "data-ai-foundations-module-04",
  moduleNumber: 4,
  lessonNumber: 6,
  slug: "normalization-facts-dimensions-and-star-schemas",
  title: "Normalization, Facts, Dimensions, and Star Schemas",
  shortTitle: "Normalization, Facts, Dimensions, and Star Schemas",
  subtitle:
    "Transform repeated operational data into reliable relational structures, then design fact and dimension tables that make analytical questions accurate, understandable, and fast.",
  status: "available",
  duration: "4–5 hours",
  level: "Beginner to Professional",

  essentialQuestion:
    "How can we organize operational data to prevent update anomalies while also building dimensional models that preserve historical truth and answer analytical questions safely?",
  bigIdea:
    "Normalization protects operational truth by separating entities and dependencies. Dimensional modeling reorganizes governed data around a business process, a declared fact-table grain, measurable facts, and descriptive dimensions so people can analyze it consistently.",

  whyThisLessonExists: {
    title: "Operational Integrity and Analytical Clarity Need Different Shapes",
    introduction:
      "A single wide table can look convenient while repeating plant, robot, technician, and part attributes thousands of times. Repetition creates update, insert, and delete anomalies. Yet a deeply normalized transaction system can also be difficult for analysts to query. Reliable systems therefore distinguish the normalized operational model from the dimensional analytical model.",
    centralProblem:
      "A maintenance spreadsheet repeats robot model and plant region on every work order, stores several technicians in one cell, mixes work-order and part-line measures, and overwrites a robot's plant when the robot moves. Reports double-count downtime, historical plant totals change, and AI features inherit inconsistent categories.",
    purpose:
      "This lesson develops a complete modeling workflow: identify functional dependencies, normalize operational entities, resolve many-to-many relationships, select a business process, declare one fact grain, separate facts from dimensions, preserve history with surrogate keys and slowly changing dimensions, and reconcile the star schema to authoritative source totals.",
  },

  problemFirst: {
    title: "Opening Investigation: One Spreadsheet, Four Grains",
    scenario:
      "A maintenance export contains one apparent row per work order, but part names are comma-separated, technicians repeat, current robot attributes overwrite history, and part cost is multiplied when analysts join technician assignments. The September source has six work orders and 210 downtime minutes, yet different reports return 210, 270, or 420 minutes.",
    questions: [
      "What does one source row actually represent?",
      "Which attributes describe plants, robots, work orders, technicians, and parts?",
      "Which columns depend on the whole key rather than only part of a composite key?",
      "Where do repeating groups violate atomic-value expectations?",
      "Which many-to-many relationships need junction tables?",
      "What exact event should one fact-table row represent?",
      "Which measures can be summed across time, robot, and plant?",
      "How should a robot's plant movement remain historically correct?",
      "Which controls prove the dimensional model preserves six orders and 210 downtime minutes?",
    ],
    expectedInsight:
      "Modeling begins with meaning and grain, not table names. Normalize each operational dependency, then build each fact table around one measurable business process and one explicit row definition.",
  },

  learningObjectives: [
    "Explain update, insert, and delete anomalies caused by repeated data.",
    "Apply first, second, and third normal form to a practical operational dataset.",
    "Identify functional, partial, and transitive dependencies.",
    "Use primary, foreign, candidate, natural, composite, and surrogate keys appropriately.",
    "Resolve many-to-many relationships with junction tables at a declared grain.",
    "Distinguish OLTP normalization from OLAP dimensional modeling.",
    "Select a business process and write an exact fact-table grain declaration.",
    "Separate measurable facts from descriptive dimensions and degenerate dimensions.",
    "Classify additive, semi-additive, and non-additive measures.",
    "Design a star schema with conformed, role-playing, and slowly changing dimensions.",
    "Use Type 1 and Type 2 dimension changes according to historical requirements.",
    "Handle unknown members, late-arriving dimensions, and unmatched business keys explicitly.",
    "Validate dimensional loads with row, key, relationship, historical, and measure reconciliation tests.",
  ],

  prerequisiteKnowledge: [
    "Lesson 1: row grain, primary keys, foreign keys, and relationships",
    "Lesson 2: filtering, grouping, aggregation, null handling, and reconciliation",
    "Lesson 3: join cardinality, fanout, unmatched rows, and double counting",
    "Lesson 4: staged query logic and reusable CTEs",
    "Lesson 5: analytical windows and deterministic historical sequences",
    "The computational lab uses Python, pandas, and SQLite, but the SQL can be studied independently",
  ],

  visualModels: [
    {
      id: "source-to-star-modeling-cycle",
      type: "lifecycle",
      title: "From Operational Source to Governed Star Schema",
      description:
        "Protect source-system integrity first, then reshape one governed business process for analysis without losing grain or history.",
      stages: [
        { label: "1. Discover", detail: "Profile entities, keys, repeating groups, dependencies, relationships, dates, measures, history, and authoritative totals." },
        { label: "2. Normalize", detail: "Separate entities, remove partial and transitive dependencies, and resolve many-to-many relationships with junction tables." },
        { label: "3. Choose process", detail: "Select one measurable business process such as one maintenance work order, sensor reading, shipment, or assessment." },
        { label: "4. Declare grain", detail: "Write the exact meaning of one fact row before choosing dimensions, facts, joins, or aggregates." },
        { label: "5. Build star", detail: "Create surrogate-keyed dimensions, load fact foreign keys and measures, and preserve history required by the decision." },
        { label: "6. Validate", detail: "Reconcile row counts, unique keys, foreign keys, history intervals, additive measures, and representative analytical queries." },
      ],
      feedback:
        "If a measure duplicates, inspect fact grain and many-to-many joins. If past results change after a dimension update, inspect effective dating and surrogate-key assignment.",
      interpretation:
        "A normalized source and a star schema are complementary models: one protects operational changes; the other communicates governed analytical meaning.",
    },
  ],

  vocabulary: [
    { term: "Normalization", definition: "Organizing relational data to reduce unnecessary repetition and make dependencies, keys, and updates consistent." },
    { term: "Data anomaly", definition: "An unintended inconsistency caused by an insert, update, or delete in a poorly structured table." },
    { term: "First normal form (1NF)", definition: "A relation design in which each field holds one atomic value for the modeled domain and repeating groups are removed." },
    { term: "Second normal form (2NF)", definition: "A 1NF relation in which every non-key attribute depends on the whole candidate key, not only part of a composite key." },
    { term: "Third normal form (3NF)", definition: "A 2NF relation in which non-key attributes do not depend transitively on other non-key attributes." },
    { term: "Functional dependency", definition: "A rule written X → Y stating that a value of X determines one value of Y in the modeled relation." },
    { term: "Partial dependency", definition: "A dependency in which a non-key attribute depends on only part of a composite candidate key." },
    { term: "Transitive dependency", definition: "A dependency in which a non-key attribute depends on another non-key attribute rather than directly on the key." },
    { term: "Determinant", definition: "The attribute or attribute set on the left side of a functional dependency." },
    { term: "Candidate key", definition: "A minimal attribute set that can uniquely identify a row." },
    { term: "Natural key", definition: "A meaningful source or business identifier such as robot_id or product_code." },
    { term: "Surrogate key", definition: "A system-generated identifier with no business meaning, commonly used as a dimension primary key." },
    { term: "Composite key", definition: "A key formed from two or more attributes that together identify one row." },
    { term: "Referential integrity", definition: "The rule that each non-null foreign key must reference an existing parent key." },
    { term: "Junction table", definition: "A relation that resolves a many-to-many relationship by storing one row per association." },
    { term: "OLTP", definition: "Online transaction processing optimized for frequent, reliable operational inserts, updates, and deletes." },
    { term: "OLAP", definition: "Online analytical processing optimized for consistent historical analysis, aggregation, and decision support." },
    { term: "Dimensional modeling", definition: "An analytical modeling approach that organizes one business process into fact and dimension tables." },
    { term: "Business process", definition: "A measurable organizational activity such as an order, shipment, maintenance event, or assessment." },
    { term: "Grain declaration", definition: "A precise sentence stating what one fact-table row represents." },
    { term: "Fact table", definition: "A table storing measurements and foreign keys at one declared business-process grain." },
    { term: "Dimension table", definition: "A table storing descriptive context used to filter, group, label, and interpret facts." },
    { term: "Degenerate dimension", definition: "A business identifier kept in the fact table without a separate dimension, such as an order number." },
    { term: "Conformed dimension", definition: "A dimension with shared meaning and keys across multiple fact tables or analytical processes." },
    { term: "Role-playing dimension", definition: "One physical dimension used in several logical roles, such as opened date and closed date." },
    { term: "Slowly changing dimension (SCD)", definition: "A method for managing dimension attribute changes over time." },
    { term: "SCD Type 1", definition: "A change strategy that overwrites an attribute and does not preserve prior values." },
    { term: "SCD Type 2", definition: "A change strategy that adds a new dimension row with a new surrogate key and effective dates to preserve history." },
    { term: "Transaction fact", definition: "A fact table with one row per event or transaction at its lowest captured grain." },
    { term: "Periodic snapshot", definition: "A fact table with one row per entity for each regular time period, such as daily inventory." },
    { term: "Accumulating snapshot", definition: "A fact table whose row is updated as defined milestones in a process are completed." },
    { term: "Factless fact", definition: "A fact table recording that an event or relationship occurred even when no numeric measure is stored." },
    { term: "Additive fact", definition: "A measure that can be summed across all relevant dimensions, such as event-level downtime." },
    { term: "Semi-additive fact", definition: "A measure additive across some dimensions but not across others, often not across time, such as account balance." },
    { term: "Non-additive fact", definition: "A measure such as a percentage or ratio that should not be summed and usually must be recomputed from components." },
    { term: "Star schema", definition: "A dimensional model with a central fact table connected directly to denormalized dimensions." },
    { term: "Snowflake schema", definition: "A dimensional model in which some dimension attributes are further normalized into related tables." },
    { term: "Unknown member", definition: "A controlled dimension row used when a fact's descriptive member is missing, invalid, or not yet available." },
    { term: "Late-arriving dimension", definition: "Dimension information that becomes available after the related fact has already arrived." },
    { term: "Bridge table", definition: "A controlled table used to represent a multivalued or many-to-many analytical relationship without uncontrolled fanout." },
  ],

  formulas: [
    { id: "functional-dependency", name: "Functional dependency", formula: "X → Y", meaning: "Each value of X determines one value of Y in the modeled relation.", requirement: "Validate the dependency against business rules and representative data; repeated observations alone do not prove a permanent rule." },
    { id: "referential-integrity", name: "Referential integrity", formula: "FK_child ∈ PK_parent or FK_child is an approved NULL", meaning: "Every relationship points to an existing governed parent or follows an explicit optionality rule.", requirement: "Test orphan counts after every load and never silently discard unmatched records." },
    { id: "fact-grain", name: "Fact-table grain", formula: "one fact row = one occurrence of the declared business process", meaning: "Every fact, foreign key, and uniqueness rule must be valid at the same row meaning.", requirement: "State the grain in words before adding measures or joining dimensions." },
    { id: "composite-uniqueness", name: "Composite grain key", formula: "COUNT(rows) = COUNT(DISTINCT grain_key)", meaning: "The declared grain key uniquely identifies every fact row.", requirement: "Use all columns needed by the true grain; do not assume a convenient source identifier is unique." },
    { id: "additive-reconciliation", name: "Additive fact reconciliation", formula: "Σ source measure at source grain = Σ fact measure at fact grain", meaning: "The dimensional load preserves an authoritative additive total.", requirement: "Compare the same eligible population, units, period, and null policy before accepting a zero difference." },
    { id: "ratio-of-sums", name: "Governed rate", formula: "rate = Σ numerator / Σ denominator", meaning: "A ratio is recomputed from additive components rather than summed or averaged from row percentages.", requirement: "Protect zero denominators and expose numerator and denominator with the published rate." },
    { id: "scd2-date-match", name: "Type 2 historical lookup", formula: "business_key matches and effective_from ≤ event_time < effective_to", meaning: "Each fact receives the dimension version that was valid when the event occurred.", requirement: "Use non-overlapping intervals, one current row, deterministic boundary rules, and an unknown-member policy." },
  ],

  workedExamples: [
    {
      id: "example-04-06-01",
      title: "Remove a repeating technician group",
      problem: "A work-order row stores technician_ids as 'T01,T04,T07'.",
      solutionSteps: [
        "Keep one work-order row in work_orders.",
        "Keep one technician row in technicians.",
        "Create work_order_technician with one row per work-order–technician assignment.",
        "Use a composite key or unique constraint on work_order_id and technician_id.",
      ],
      answer: "The junction table restores atomic assignments and represents the many-to-many relationship explicitly.",
      interpretation: "Do not divide downtime automatically across technicians unless the business defines an allocation rule; relationship rows and measures may have different grains.",
    },
    {
      id: "example-04-06-02",
      title: "Remove a partial dependency",
      problem: "A part-usage table has key (work_order_id, part_id) but also repeats part_name and unit_cost determined only by part_id.",
      solutionSteps: [
        "Declare one usage row per work-order–part combination.",
        "Keep quantity_used on the junction because it depends on the full composite key.",
        "Move part_name and governed catalog attributes to parts.",
        "Decide whether historical unit price belongs on the usage event rather than in the current part master.",
      ],
      answer: "work_order_part(work_order_id, part_id, quantity_used, transaction_unit_cost) references part(part_id, part_name, current_catalog_attributes).",
      interpretation: "Normalization follows dependencies, while historical facts must remain at the event grain where their values were recorded.",
    },
    {
      id: "example-04-06-03",
      title: "Remove a transitive plant dependency",
      problem: "A robot table stores plant_id, plant_name, and plant_region, where plant_id determines the name and region.",
      solutionSteps: [
        "Keep robot attributes determined directly by robot_id in robots.",
        "Create plants with one row per plant_id.",
        "Reference plant_id from the appropriate robot assignment or history table.",
        "Test the foreign key and historical movement requirements.",
      ],
      answer: "Plant name and region belong in plants because robot_id → plant_id and plant_id → plant_name, plant_region.",
      interpretation: "Removing the transitive dependency prevents one plant from acquiring contradictory names or regions across robot rows.",
    },
    {
      id: "example-04-06-04",
      title: "Declare a maintenance fact grain",
      problem: "The team wants downtime, work-order count, parts, and technicians in one fact table.",
      solutionSteps: [
        "Choose maintenance work order as the first business process.",
        "Declare one fact row per approved work order.",
        "Store order_count = 1 and work-order-level downtime at that grain.",
        "Model part usage at one row per work-order–part and technician assignments as a factless or bridged relationship.",
      ],
      answer: "Do not combine work-order, part-line, and technician-assignment grains in one ungoverned fact table.",
      interpretation: "A star schema may require several fact tables sharing conformed dimensions rather than one giant fact table.",
    },
    {
      id: "example-04-06-05",
      title: "Choose additive and non-additive measures",
      problem: "A report stores downtime minutes, end-of-day open-order balance, and percentage of critical orders.",
      solutionSteps: [
        "Treat event downtime as additive across work orders, robots, plants, and dates when the population is compatible.",
        "Treat a point-in-time balance as semi-additive because summing it across dates double-counts stock.",
        "Treat the percentage as non-additive.",
        "Store or expose critical_order_count and total_order_count, then calculate ratio of sums.",
      ],
      answer: "Sum downtime; aggregate balances according to snapshot semantics; recompute rates from additive components.",
      interpretation: "Measure behavior is part of the semantic contract, not merely a display setting.",
    },
    {
      id: "example-04-06-06",
      title: "Preserve a robot movement with SCD Type 2",
      problem: "Robot R-101 moves from Plant A to Plant B on October 1, but September reports must remain attributed to Plant A.",
      solutionSteps: [
        "Expire the Plant A dimension version at the agreed boundary.",
        "Insert a new R-101 dimension row with a new surrogate key and Plant B attributes.",
        "Match each maintenance fact using robot business key and event-time validity.",
        "Test that September and October facts receive different robot surrogate keys and correct plant keys.",
      ],
      answer: "Type 2 history preserves both versions and assigns each event to the version valid at its event date.",
      interpretation: "A Type 1 overwrite would make past reports change; Type 2 is required when the prior attribute state affects historical analysis.",
    },
  ],

  interactiveExploration: {
    title: "Normalization-to-Star Modeling Studio",
    description:
      "Begin with a deliberately repeated maintenance table, normalize it, then build several candidate stars and compare correctness.",
    instructions: [
      "Write the operational business rules and identify every candidate entity and relationship.",
      "List functional dependencies and mark partial and transitive dependencies.",
      "Convert comma-separated technicians and parts into governed association rows.",
      "Build a 3NF operational model and test all primary and foreign keys.",
      "Choose one analytical business process and write the fact grain in one sentence.",
      "Classify each candidate column as fact, dimension attribute, degenerate dimension, audit field, or out of scope.",
      "Separate work-order, part-usage, and technician-assignment grains.",
      "Create a star schema with date, robot, plant, and severity dimensions.",
      "Simulate a robot movement using Type 1 and Type 2 changes and compare historical results.",
      "Reconcile source and fact rows, keys, downtime, order counts, unknown members, and representative queries.",
    ],
    questions: [
      "Which dependency caused the most repeated data?",
      "Which normalization step changed table count but not business meaning?",
      "Which candidate measure was unsafe to sum?",
      "Where would a many-to-many join multiply work-order facts?",
      "Which dimension attributes require history and which can be overwritten?",
      "Which conformed dimensions could be shared with sensor or parts facts?",
    ],
    expectedDiscovery:
      "Normalization and dimensional modeling solve different problems. Correct analytics comes from a controlled handoff between them, with explicit grain, history, and reconciliation at every boundary.",
  },

  realWorldApplications: [
    { field: "Manufacturing and Robotics", application: "Normalize assets, maintenance orders, technicians, parts, and sensor sources; build conformed robot, plant, and date dimensions across maintenance and sensor facts." },
    { field: "Finance", application: "Protect account and transaction integrity operationally, then analyze transaction facts, daily balance snapshots, customer dimensions, and historical product assignments." },
    { field: "Education", application: "Separate students, courses, enrollments, assessments, and interventions, then build assessment and attendance stars with shared student and date dimensions." },
    { field: "Healthcare Operations", application: "Normalize patients, encounters, providers, procedures, and locations, then create privacy-governed encounter and capacity stars." },
    { field: "Retail and Supply Chain", application: "Separate orders, order lines, products, suppliers, and shipments, then build sales, inventory snapshot, and fulfillment stars without mixing grains." },
    { field: "AI and Machine Learning", application: "Create reproducible observation-grain feature tables from conformed historical dimensions and facts while preventing mutable attributes and future state from rewriting training history." },
  ],

  aiConnection: {
    title: "Data Models Define the Evidence an AI System Can Learn",
    explanation:
      "AI quality depends on stable entity identity, correct observation grain, historical attributes, and reproducible joins. A model trained from a denormalized export may learn duplicate events, current-state attributes applied to the past, inconsistent categories, or outcomes accidentally repeated across child records.",
    example:
      "A predictive-maintenance dataset uses one row per robot-day observation, conformed robot and plant dimensions, prior-only sensor aggregates, and a future failure label. Type 2 dimension keys preserve the plant and robot configuration known at observation time.",
    uses: [
      "Create stable entity and observation keys",
      "Build point-in-time-correct feature datasets",
      "Share conformed dimensions across training and monitoring facts",
      "Prevent duplicate child relationships from weighting outcomes",
      "Document feature lineage from normalized sources through dimensional marts",
    ],
    caution:
      "A star schema does not automatically prevent leakage. Feature joins must use event and availability time, Type 2 validity intervals, the correct observation grain, and tests that exclude future facts and overwritten attributes.",
    reflectionQuestion:
      "Which mutable dimension attribute in your model could rewrite historical training examples if it were handled as Type 1 instead of Type 2?",
  },

  pythonLab: {
    title: "Build and Audit a Maintenance Star Schema",
    objective:
      "Create normalized maintenance source tables, load a Type 2 robot dimension and a one-work-order fact table, then prove row, measure, foreign-key, grain, and historical accuracy.",
    code: `import sqlite3
import pandas as pd

connection = sqlite3.connect(":memory:")
connection.execute("PRAGMA foreign_keys = ON")

connection.executescript("""
CREATE TABLE plants (
    plant_id TEXT PRIMARY KEY,
    plant_name TEXT NOT NULL,
    region TEXT NOT NULL
);

CREATE TABLE robots (
    robot_id TEXT PRIMARY KEY,
    model TEXT NOT NULL
);

CREATE TABLE robot_plant_history (
    robot_id TEXT NOT NULL REFERENCES robots(robot_id),
    plant_id TEXT NOT NULL REFERENCES plants(plant_id),
    valid_from TEXT NOT NULL,
    valid_to TEXT NOT NULL,
    PRIMARY KEY (robot_id, valid_from),
    CHECK (valid_from < valid_to)
);

CREATE TABLE maintenance_orders (
    order_id TEXT PRIMARY KEY,
    robot_id TEXT NOT NULL REFERENCES robots(robot_id),
    opened_date TEXT NOT NULL,
    severity TEXT NOT NULL,
    downtime_min INTEGER NOT NULL CHECK (downtime_min >= 0)
);
""")

connection.executemany("INSERT INTO plants VALUES (?, ?, ?)", [
    ("A", "Assembly North", "East"),
    ("B", "Assembly South", "East"),
    ("C", "Packaging", "West"),
])
connection.executemany("INSERT INTO robots VALUES (?, ?)", [
    ("R-101", "RX-1"),
    ("R-201", "QZ-2"),
    ("R-301", "MX-3"),
])
connection.executemany("INSERT INTO robot_plant_history VALUES (?, ?, ?, ?)", [
    ("R-101", "A", "2026-01-01", "2026-10-01"),
    ("R-101", "B", "2026-10-01", "9999-12-31"),
    ("R-201", "B", "2026-01-01", "9999-12-31"),
    ("R-301", "C", "2026-01-01", "9999-12-31"),
])
connection.executemany("INSERT INTO maintenance_orders VALUES (?, ?, ?, ?, ?)", [
    ("WO-001", "R-101", "2026-09-02", "Critical", 30),
    ("WO-002", "R-101", "2026-10-05", "High", 40),
    ("WO-003", "R-201", "2026-09-03", "Medium", 20),
    ("WO-004", "R-201", "2026-09-12", "Critical", 60),
    ("WO-005", "R-301", "2026-09-07", "Low", 25),
    ("WO-006", "R-301", "2026-09-20", "High", 35),
])

source_profile = pd.read_sql_query("""
SELECT COUNT(*) AS orders, SUM(downtime_min) AS downtime
FROM maintenance_orders
""", connection)

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

CREATE TABLE fact_maintenance (
    maintenance_key INTEGER PRIMARY KEY,
    order_id TEXT NOT NULL UNIQUE,
    opened_date_key INTEGER NOT NULL REFERENCES dim_date(date_key),
    robot_key INTEGER NOT NULL REFERENCES dim_robot(robot_key),
    plant_key INTEGER NOT NULL REFERENCES dim_plant(plant_key),
    severity TEXT NOT NULL,
    order_count INTEGER NOT NULL CHECK (order_count = 1),
    downtime_min INTEGER NOT NULL CHECK (downtime_min >= 0)
);
""")

connection.executemany("INSERT INTO dim_date VALUES (?, ?, ?, ?)", [
    (20260902, "2026-09-02", "September", 2026),
    (20260903, "2026-09-03", "September", 2026),
    (20260907, "2026-09-07", "September", 2026),
    (20260912, "2026-09-12", "September", 2026),
    (20260920, "2026-09-20", "September", 2026),
    (20261005, "2026-10-05", "October", 2026),
])
connection.executemany("INSERT INTO dim_plant VALUES (?, ?, ?, ?)", [
    (1, "A", "Assembly North", "East"),
    (2, "B", "Assembly South", "East"),
    (3, "C", "Packaging", "West"),
])
connection.executemany("INSERT INTO dim_robot VALUES (?, ?, ?, ?, ?, ?, ?)", [
    (1011, "R-101", "RX-1", 1, "2026-01-01", "2026-10-01", 0),
    (1012, "R-101", "RX-1", 2, "2026-10-01", "9999-12-31", 1),
    (2011, "R-201", "QZ-2", 2, "2026-01-01", "9999-12-31", 1),
    (3011, "R-301", "MX-3", 3, "2026-01-01", "9999-12-31", 1),
])

connection.execute("""
INSERT INTO fact_maintenance (
    order_id, opened_date_key, robot_key, plant_key,
    severity, order_count, downtime_min
)
SELECT
    o.order_id,
    d.date_key,
    r.robot_key,
    r.plant_key,
    o.severity,
    1,
    o.downtime_min
FROM maintenance_orders AS o
JOIN dim_date AS d
  ON d.full_date = o.opened_date
JOIN dim_robot AS r
  ON r.robot_id = o.robot_id
 AND o.opened_date >= r.effective_from
 AND o.opened_date < r.effective_to
""")

fact = pd.read_sql_query("""
SELECT
    f.order_id,
    d.full_date,
    r.robot_id,
    r.robot_key,
    p.plant_id,
    f.order_count,
    f.downtime_min
FROM fact_maintenance AS f
JOIN dim_date AS d ON d.date_key = f.opened_date_key
JOIN dim_robot AS r ON r.robot_key = f.robot_key
JOIN dim_plant AS p ON p.plant_key = f.plant_key
ORDER BY f.order_id
""", connection)

plant_summary = pd.read_sql_query("""
SELECT
    p.plant_id,
    SUM(f.order_count) AS orders,
    SUM(f.downtime_min) AS downtime
FROM fact_maintenance AS f
JOIN dim_plant AS p ON p.plant_key = f.plant_key
GROUP BY p.plant_id
ORDER BY p.plant_id
""", connection)

orphan_counts = pd.read_sql_query("""
SELECT
  SUM(CASE WHEN d.date_key IS NULL THEN 1 ELSE 0 END) AS date_orphans,
  SUM(CASE WHEN r.robot_key IS NULL THEN 1 ELSE 0 END) AS robot_orphans,
  SUM(CASE WHEN p.plant_key IS NULL THEN 1 ELSE 0 END) AS plant_orphans
FROM fact_maintenance AS f
LEFT JOIN dim_date AS d ON d.date_key = f.opened_date_key
LEFT JOIN dim_robot AS r ON r.robot_key = f.robot_key
LEFT JOIN dim_plant AS p ON p.plant_key = f.plant_key
""", connection)

assert int(source_profile.loc[0, "orders"]) == 6
assert int(source_profile.loc[0, "downtime"]) == 210
assert len(fact) == 6
assert fact["order_id"].is_unique
assert int(fact["order_count"].sum()) == 6
assert int(fact["downtime_min"].sum()) == 210

r101 = fact.loc[fact["robot_id"] == "R-101"]
assert r101["robot_key"].tolist() == [1011, 1012]
assert r101["plant_id"].tolist() == ["A", "B"]

assert plant_summary.set_index("plant_id")["downtime"].to_dict() == {
    "A": 30, "B": 120, "C": 60
}
assert orphan_counts.fillna(0).astype(int).iloc[0].sum() == 0

current_versions = pd.read_sql_query("""
SELECT robot_id, SUM(is_current) AS current_rows
FROM dim_robot
GROUP BY robot_id
""", connection)
assert (current_versions["current_rows"] == 1).all()

print("Source orders and downtime:", 6, 210)
print("Fact rows and downtime:", len(fact), int(fact["downtime_min"].sum()))
print("R-101 historical versions:", r101[["full_date", "robot_key", "plant_id"]].to_dict("records"))
print("Plant summary:", plant_summary.to_dict("records"))
print("Orphans:", orphan_counts.fillna(0).astype(int).iloc[0].to_dict())
print("All normalization, grain, SCD Type 2, and reconciliation tests passed.")`,
    questions: [
      "Which source tables are normalized entities, and which table records a time-varying relationship?",
      "What exact sentence defines the fact_maintenance grain?",
      "Why is order_id a degenerate dimension in the fact table?",
      "Which measures are additive in this model?",
      "Why does R-101 require two robot surrogate keys?",
      "How does the half-open effective-date rule handle October 1 without overlap?",
      "Which assertions prove the dimensional load preserved the source population?",
      "Which test would fail if a dimension lookup produced no match?",
    ],
    reflectionQuestions: [
      "Should severity become a separate dimension or remain a controlled low-cardinality attribute?",
      "What new fact table would you create for parts usage without duplicating work-order downtime?",
      "Which robot attributes require Type 2 history for predictive-maintenance features?",
    ],
    extension:
      "Add technicians, parts, work_order_technician, and work_order_part tables; create a part-usage fact at one row per order-part; add unknown members and a late-arriving robot case; then prove that work-order downtime remains 210 under cross-process analysis.",
  },

  guidedPractice: [
    { id: "gp-04-06-01", question: "What problem does normalization primarily solve?", answer: "It reduces unnecessary repetition, makes dependencies explicit, and prevents update, insert, and delete anomalies in operational data." },
    { id: "gp-04-06-02", question: "What is the difference between 2NF and 3NF?", answer: "2NF removes partial dependencies on part of a composite key; 3NF removes transitive dependencies among non-key attributes." },
    { id: "gp-04-06-03", question: "What must be decided before choosing fact columns?", answer: "The business process and the exact grain—what one fact row represents." },
    { id: "gp-04-06-04", question: "Why use surrogate keys in dimensions?", answer: "They separate warehouse identity from mutable business keys and allow several historical versions of one business member." },
    { id: "gp-04-06-05", question: "Why should percentages not be summed?", answer: "They are non-additive; calculate a ratio of governed summed components at the reporting context." },
    { id: "gp-04-06-06", question: "When is SCD Type 2 appropriate?", answer: "When historical analysis must preserve the attribute values that were valid when each fact occurred." },
  ],

  independentPractice: [
    { id: "ip-04-06-01", difficulty: "Foundational", question: "Normalize a customer table that repeats city_name and region for every customer when city_id determines both.", sampleAnswer: "Create city(city_id, city_name, region) and keep city_id as a foreign key in customer, subject to the real business dependency." },
    { id: "ip-04-06-02", difficulty: "Foundational", question: "Design a junction table for students enrolled in many courses.", sampleAnswer: "enrollment(student_id, course_id, enrollment_date, status) with a composite or surrogate key that matches the declared enrollment grain." },
    { id: "ip-04-06-03", difficulty: "Applied", question: "Declare the grain for an order-line fact.", sampleAnswer: "One row per governed order-line identifier representing one product line on one order; document how repeated products and line revisions are handled." },
    { id: "ip-04-06-04", difficulty: "Applied", question: "Classify sales_amount, end-of-day balance, and profit_margin by additivity.", sampleAnswer: "Sales amount is generally additive, balance is semi-additive across time, and profit margin is non-additive and should be calculated from summed components." },
    { id: "ip-04-06-05", difficulty: "Analytical", question: "Explain why joining an order fact directly to a multivalued promotion bridge can duplicate sales.", sampleAnswer: "One fact can match several bridge rows; aggregate through governed allocation weights or distinct fact identifiers according to the intended question." },
    { id: "ip-04-06-06", difficulty: "Advanced", question: "Design effective-date rules and tests for a Type 2 customer dimension.", sampleAnswer: "Use non-overlapping half-open intervals, one current row, new surrogate keys, deterministic event-time lookup, and tests for gaps, overlaps, boundary dates, and unmatched facts." },
    { id: "ip-04-06-07", difficulty: "Professional", question: "Create a dimensional-model production-readiness checklist.", sampleAnswer: "Include process, grain, keys, dimensions, history, additivity, unknown members, late arrivals, relationship cardinality, source-to-target lineage, row/measure reconciliation, query tests, security, and performance." },
  ],

  commonMistakes: [
    { mistake: "Treating comma-separated values as one normal attribute.", correction: "Model each repeated relationship as its own governed row at an explicit association grain." },
    { mistake: "Normalizing from sample values without confirming business dependencies.", correction: "Validate functional dependencies with domain owners and rules, not only the current dataset." },
    { mistake: "Creating one giant fact table for several business processes.", correction: "Use separate fact tables at separate grains and connect them through conformed dimensions." },
    { mistake: "Choosing dimensions before declaring fact grain.", correction: "Write the one-row fact meaning first; then select dimensions and measures valid at that grain." },
    { mistake: "Storing averages and percentages as additive facts.", correction: "Store additive components and calculate governed ratios in the required filter context." },
    { mistake: "Using natural keys as historical dimension keys.", correction: "Use stable surrogate keys so one business member can have several controlled versions." },
    { mistake: "Overwriting history with Type 1 when prior state matters.", correction: "Use Type 2 effective dating for attributes required in historical reporting or point-in-time features." },
    { mistake: "Allowing overlapping Type 2 intervals.", correction: "Enforce one valid version at a time with boundary, overlap, current-row, and lookup tests." },
    { mistake: "Dropping unmatched facts during inner joins.", correction: "Use governed unknown members, exception queues, and orphan monitoring rather than silent loss." },
    { mistake: "Calling every denormalized table a star schema.", correction: "A star requires a declared business process, one fact grain, controlled measures, dimensions, keys, history, and validation." },
  ],

  discussionQuestions: [
    "When is additional normalization worth the extra joins in an operational system?",
    "Which attributes should be Type 1 versus Type 2 in a robot dimension, and who decides?",
    "Should plant be embedded in the robot dimension, connected directly to facts, or both?",
    "How should an organization govern conformed dimensions shared by several teams?",
    "What evidence proves that an AI feature table is point-in-time correct rather than merely reproducible?",
  ],

  formativeAssessment: {
    totalPoints: 40,
    passingScore: 32,
    questions: [
      { id: "check-04-06-01", type: "normalization", points: 5, prompt: "Explain 1NF, 2NF, and 3NF using one example each.", sampleAnswer: "1NF removes repeating groups, 2NF removes dependencies on part of a composite key, and 3NF removes transitive non-key dependencies." },
      { id: "check-04-06-02", type: "dependency", points: 5, prompt: "Identify a partial and a transitive dependency in a maintenance dataset.", sampleAnswer: "Part name depending only on part_id within an order-part key is partial; plant region depending on plant_id stored beside robot_id is transitive when robot determines plant and plant determines region." },
      { id: "check-04-06-03", type: "grain", points: 5, prompt: "Write a precise grain declaration for a maintenance fact.", sampleAnswer: "One row per approved maintenance work order after deduplication and quality eligibility, identified by governed order_id." },
      { id: "check-04-06-04", type: "model", points: 5, prompt: "Distinguish a fact from a dimension and a degenerate dimension.", sampleAnswer: "Facts are measurements at process grain, dimensions provide descriptive context, and a degenerate dimension is a business identifier retained in the fact without a separate table." },
      { id: "check-04-06-05", type: "measure", points: 5, prompt: "Compare additive, semi-additive, and non-additive facts.", sampleAnswer: "Additive facts sum across dimensions, semi-additive facts have restricted summation such as across time, and non-additive facts such as ratios must be recomputed." },
      { id: "check-04-06-06", type: "history", points: 5, prompt: "Explain how SCD Type 2 preserves a robot's plant movement.", sampleAnswer: "It expires the prior dimension version, inserts a new surrogate-keyed version, and assigns facts using business key plus event-time validity." },
      { id: "check-04-06-07", type: "integrity", points: 5, prompt: "Explain unknown-member and late-arriving-dimension controls.", sampleAnswer: "Load the fact to a controlled unknown key, record the exception, later create the true member and restate or update according to governed policy." },
      { id: "check-04-06-08", type: "validation", points: 5, prompt: "Give five tests required before publishing a star schema.", sampleAnswer: "Grain uniqueness, fact row reconciliation, additive measure reconciliation, foreign-key/orphan checks, Type 2 interval checks, unknown-member counts, representative query tests, and source lineage; any five earn full credit." },
    ],
  },

  researchExtension: {
    title: "Normalized Source and Dimensional Mart Reliability Study",
    researchQuestion:
      "How do operational normalization, fact grain, dimension history, and many-to-many handling affect analytical correctness, usability, performance, and AI feature reliability?",
    applicationOptions: [
      "Robot maintenance and sensor operations",
      "Financial transactions and daily balances",
      "Student assessment and intervention",
      "Healthcare encounters and capacity",
      "Retail orders, inventory, and fulfillment",
      "AI observation and feature marts",
    ],
    task:
      "Model one domain first as normalized operational relations and then as at least two dimensional fact processes. Test Type 1 versus Type 2 history, an unmatched member, a many-to-many relationship, and one non-additive metric; compare correctness, query clarity, and measured performance only after semantic equivalence is established.",
    requiredEvidence: [
      "Business rules, entities, relationships, and functional dependencies",
      "Normalized schema through 3NF with key and anomaly explanation",
      "Fact process matrix and written grain for every fact table",
      "Dimensions, conformance, roles, SCD policy, and unknown-member policy",
      "Additivity classification and ratio-of-sums design",
      "Source-to-target lineage and controlled load logic",
      "Row, key, relationship, history, orphan, and measure tests",
      "Conclusion, limitations, governance ownership, and performance evidence",
    ],
  },

  portfolioArtifact: {
    title: "Lesson 6 Portfolio Evidence: Maintenance Data Warehouse Blueprint",
    description:
      "Design a normalized maintenance source and a governed analytical warehouse with multiple fact grains, conformed dimensions, historical accuracy, and automated quality tests.",
    requiredSections: [
      "Business questions, source inventory, users, decisions, and authoritative totals",
      "Entity-relationship model with cardinality, optionality, and key definitions",
      "Functional-dependency catalog and 1NF-to-3NF transformation",
      "Business-process matrix and grain declaration for each fact table",
      "Star schema with date, robot, plant, technician, part, and status dimensions as appropriate",
      "Fact additivity matrix and governed calculated measures",
      "Type 1/Type 2, unknown-member, late-arrival, and restatement policies",
      "Source-to-target mapping and repeatable load sequence",
      "README and decision brief explaining risks, controls, and analytical use",
    ],
    requiredEvidence: [
      "At least six normalized tables with enforced keys",
      "At least two fact tables at distinct declared grains",
      "At least four dimensions including one conformed dimension",
      "One working Type 2 historical change",
      "One many-to-many or multivalued relationship handled safely",
      "One additive, one semi-additive, and one non-additive measure design",
      "Automated row, uniqueness, orphan, interval, and measure reconciliation tests",
      "Executable SQL or Python build with captured passing output",
    ],
  },

  growthIndicators: [
    { title: "Dependency Modeler", description: "You identify entities and functional dependencies and normalize without losing business meaning." },
    { title: "Grain Guardian", description: "You declare one exact fact grain and prevent measures from crossing incompatible row meanings." },
    { title: "Historical Model Designer", description: "You use surrogate keys and Type 2 intervals to preserve the context valid at event time." },
    { title: "Analytical Warehouse Reviewer", description: "You reconcile normalized sources, dimensional loads, measures, relationships, and representative decisions before publication." },
  ],

  reflection: [
    "Which current spreadsheet repeats descriptive attributes that should have one authoritative owner?",
    "Which operational table mixes several grains?",
    "Which published measure is being summed even though it is non-additive?",
    "Which business identifier is incorrectly treated as a permanent warehouse key?",
    "Which historical attribute is currently overwritten?",
    "Which unmatched records are silently lost during dimension lookup?",
  ],

  summary: [
    "Normalization reduces unnecessary repetition and prevents update, insert, and delete anomalies.",
    "1NF removes repeating groups, 2NF removes partial dependencies, and 3NF removes transitive dependencies.",
    "Functional dependencies must reflect business rules, not only patterns observed in a small sample.",
    "Junction tables resolve many-to-many relationships at an explicit association grain.",
    "Normalized OLTP models and dimensional OLAP models serve complementary purposes.",
    "Every fact table represents one measurable business process at one declared grain.",
    "Facts store measurements and foreign keys; dimensions provide descriptive filtering and grouping context.",
    "Separate work-order, part-line, sensor, and technician-assignment grains into appropriate fact structures.",
    "Additive facts can be summed broadly, semi-additive facts require dimension restrictions, and non-additive facts must be recomputed.",
    "Surrogate dimension keys support stable warehouse identity and historical versions.",
    "Type 1 overwrites prior values; Type 2 preserves history with new rows and effective intervals.",
    "Conformed dimensions make separate fact processes comparable across the organization.",
    "Unknown members and late-arriving dimensions require explicit exception and restatement policies.",
    "Point-in-time-correct AI features require the correct observation grain, event time, availability time, and historical dimension lookup.",
    "A star schema is publishable only after grain, key, orphan, history, row, and measure reconciliation tests pass.",
  ],

  previousLesson: {
    id: "data-ai-m04-l05",
    moduleNumber: 4,
    slug: "window-functions-for-analytical-questions",
    title: "Window Functions for Analytical Questions",
  },
  nextLesson: {
    id: "data-ai-m04-l07",
    moduleNumber: 4,
    slug: "portfolio-project-analytical-sql-database-and-query-pack",
    title: "Portfolio Project: Analytical SQL Database and Query Pack",
  },

  lumineryGuidance: {
    message:
      "Normalize operational dependencies, declare the analytical grain in one sentence, preserve required history, and reconcile every fact measure before publication.",
    prompt:
      "Act as my senior data modeler and analytics-warehouse reviewer. Help me complete Module 4 Lesson 6 one verified step at a time. Require business rules, entities, functional dependencies, candidate keys, 1NF-to-3NF decisions, cardinality, optionality, fact process, written grain, dimension roles, surrogate keys, additivity classification, Type 1/Type 2 history, unknown members, late arrivals, source-to-target lineage, and automated reconciliation. Do not let me combine work-order, part, technician, or sensor grains or publish a star schema until row, key, orphan, interval, historical, and measure tests pass.",
    coachingQuestions: [
      "What business rule determines this dependency?",
      "What exactly does one row represent here?",
      "Does every non-key attribute depend on the key, the whole key, and nothing but the key?",
      "Which measurable business process does this fact table represent?",
      "Can this measure be summed across every dimension?",
      "Which attributes require historical versions?",
      "How will unmatched and late-arriving members be handled?",
      "Which reconciliation proves the dimensional result preserves source truth?",
    ],
  },
};

export default lesson06;
