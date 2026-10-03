const lesson01 = {
  id: "data-ai-m04-l01",
  courseId: "data-ai-foundations",
  moduleId: "data-ai-foundations-module-04",
  moduleNumber: 4,
  lessonNumber: 1,
  slug: "tables-row-grain-keys-and-relationships",
  title: "Tables, Row Grain, Keys, and Relationships",
  shortTitle: "Tables, Grain, Keys, and Relationships",
  subtitle:
    "Build the relational foundation for trustworthy SQL by defining what one row means, choosing stable keys, enforcing valid relationships, and testing cardinality before analysis.",
  status: "available",
  duration: "4–5 hours",
  level: "Beginner to Professional",

  essentialQuestion:
    "How can we organize data so that every row has one clear meaning, every record has a stable identity, and every relationship preserves the truth of the analysis?",
  bigIdea:
    "SQL becomes reliable only after the data model is reliable. Grain defines meaning, keys define identity, and relationships define which records may connect without loss, duplication, or ambiguity.",

  whyThisLessonExists: {
    title: "Reliable Queries Begin Before SELECT",
    introduction:
      "Analysts often begin by writing a query, but many serious SQL errors originate in the table design. If a table mixes grains, uses unstable identifiers, allows duplicate keys, or connects tables through an invalid relationship, even perfectly written syntax can return misleading results.",
    centralProblem:
      "A maintenance database may store one row per robot, work order, fault event, repair action, inspection, or daily operating summary. Joining these tables without declaring their grain and cardinality can multiply rows, erase unmatched equipment, or attach the wrong descriptive attributes.",
    purpose:
      "This lesson teaches you to read and design relational data deliberately. You will write grain statements, distinguish key types, diagram relationships, test uniqueness and referential integrity, identify bridge-table needs, and build a small audited SQLite database that prepares you for filtering, grouping, joins, CTEs, window functions, and dimensional modeling.",
  },

  problemFirst: {
    title: "Opening Investigation: Why Did Downtime Triple?",
    scenario:
      "A robotics manufacturer reports 95 minutes of downtime for work order WO-104. After an analyst joins WorkOrders to RepairActions and PartsUsed, the dashboard reports 570 minutes. WO-104 has two repair actions and three part lines, so the join creates six combinations. The database did exactly what the relationship allowed, but the analysis violated the work-order grain.",
    questions: [
      "What does one row represent in WorkOrders, RepairActions, and PartsUsed?",
      "Which columns uniquely identify a row in each table?",
      "What is the cardinality between one work order and its repair actions or part lines?",
      "Why does joining two one-to-many child tables create a many-to-many multiplication?",
      "At which grain is downtime stored, and where may it safely be summed?",
      "Which pre-aggregation or redesign would preserve the intended result?",
    ],
    expectedInsight:
      "A query cannot protect a metric whose grain is unknown. Before joining, state the row meaning and relationship on both sides, then test whether the result preserves the intended row count and additive total.",
  },

  learningObjectives: [
    "Define a relational table and distinguish a row, column, domain, record, entity, and attribute.",
    "Write a precise grain statement for operational, event, transaction, snapshot, and reference tables.",
    "Distinguish natural, surrogate, candidate, alternate, composite, primary, and foreign keys.",
    "Evaluate whether a proposed key is unique, stable, minimal, non-null, and usable across systems.",
    "Identify one-to-one, one-to-many, and many-to-many relationships and state optionality on both sides.",
    "Use a bridge table to resolve a legitimate many-to-many business relationship.",
    "Test duplicate primary keys, null keys, orphan foreign keys, unexpected cardinality, and mixed grain.",
    "Explain entity integrity, referential integrity, domain integrity, and business-rule integrity.",
    "Predict how relationship errors cause row multiplication, double counting, missing records, and false conclusions.",
    "Create and audit a small SQLite database using primary keys, foreign keys, constraints, and diagnostic SQL.",
  ],

  prerequisiteKnowledge: [
    "Module 1: units of analysis, observations, features, targets, and actions",
    "Module 2: counts, rates, distributions, bias, and responsible interpretation",
    "Module 3: tidy data, row grain, validation, lookup logic, Power Query Merge, and reconciliation",
    "Basic spreadsheet familiarity with rows, columns, tables, and unique identifiers",
    "Basic Python familiarity is helpful for the computational lab but not required for the concepts",
  ],

  visualModels: [
    {
      id: "relational-design-chain",
      type: "lifecycle",
      title: "The Relational Design Chain",
      description:
        "Move from business meaning to enforceable structure before writing analytical SQL.",
      stages: [
        { label: "1. Entity", detail: "Name the real-world thing or event: Robot, Plant, Work Order, Technician, Fault, or Repair Action." },
        { label: "2. Grain", detail: "Complete the sentence: one row represents exactly one specific entity, event, relationship, or snapshot at a stated time." },
        { label: "3. Key", detail: "Choose the smallest stable identifier that is unique and non-null at that grain; use a surrogate when operational identity is unsuitable." },
        { label: "4. Relationship", detail: "State cardinality and optionality in both directions, then place the foreign key on the appropriate side or add a bridge table." },
        { label: "5. Constraint and Test", detail: "Enforce and audit uniqueness, foreign-key validity, domains, row counts, unmatched records, and metric reconciliation." },
      ],
      feedback:
        "Query results may reveal a modeling defect. Return to the entity, grain, key, and relationship definitions rather than patching every downstream query.",
      interpretation:
        "A trustworthy model connects business meaning to database rules and observable tests.",
    },
  ],

  vocabulary: [
    { term: "Relational database", definition: "A collection of tables connected through declared keys and relationships and queried using relational operations." },
    { term: "Table", definition: "A named relation whose rows follow one declared grain and whose columns have defined meanings and domains." },
    { term: "Row or record", definition: "One occurrence of the entity, event, relationship, or snapshot defined by the table grain." },
    { term: "Column or attribute", definition: "A named property recorded for every row, with a defined meaning, type, unit, and allowed domain." },
    { term: "Entity", definition: "A distinguishable real-world object or concept about which data is stored, such as a robot, plant, or technician." },
    { term: "Domain", definition: "The permitted type, format, unit, range, or category set for a column." },
    { term: "Row grain", definition: "The exact real-world meaning of one row, including entity or event, level of detail, and time when relevant." },
    { term: "Mixed grain", definition: "A table that combines rows representing different units or levels of detail, making aggregation ambiguous." },
    { term: "Key", definition: "One column or a combination of columns used to identify, connect, or constrain records." },
    { term: "Candidate key", definition: "A minimal set of columns capable of uniquely identifying every row." },
    { term: "Primary key", definition: "The candidate key selected as the official non-null identifier for rows in a table." },
    { term: "Alternate key", definition: "A candidate key that remains unique but was not selected as the primary key." },
    { term: "Natural key", definition: "A meaningful business identifier that exists outside the database, such as a VIN or work-order number." },
    { term: "Surrogate key", definition: "A database-generated identifier with no independent business meaning, often an integer or UUID." },
    { term: "Composite key", definition: "A key formed from two or more columns whose combined values identify a row." },
    { term: "Foreign key", definition: "A column or column set whose value must reference an approved key in another table or be null when optional." },
    { term: "Uniqueness", definition: "The condition that no two rows share the same candidate- or primary-key value." },
    { term: "Cardinality", definition: "The allowed number of related records between two entity sets: one-to-one, one-to-many, or many-to-many." },
    { term: "Optionality", definition: "Whether participation in a relationship is required or may be absent on either side." },
    { term: "One-to-one relationship", definition: "Each row on either side relates to at most one row on the other side." },
    { term: "One-to-many relationship", definition: "One parent may relate to many child rows, while each child references at most one parent." },
    { term: "Many-to-many relationship", definition: "Rows on both sides may relate to many rows on the other side and normally require an associative table." },
    { term: "Bridge table", definition: "A table representing a many-to-many relationship, with one row per valid association and foreign keys to both entities." },
    { term: "Entity integrity", definition: "The rule that every table row has a unique, non-null primary key." },
    { term: "Referential integrity", definition: "The rule that every non-null foreign key matches an existing approved parent key." },
    { term: "Orphan record", definition: "A child row whose required foreign-key value has no matching parent row." },
    { term: "Constraint", definition: "A database rule such as PRIMARY KEY, FOREIGN KEY, UNIQUE, NOT NULL, CHECK, or DEFAULT that limits invalid states." },
    { term: "Relationship fanout", definition: "The number of matching child rows produced for each parent row during a relationship or join." },
    { term: "Row multiplication", definition: "An increase in rows caused by multiple matches, often inflating measures stored at a higher grain." },
    { term: "Data dictionary", definition: "A governed reference defining each table, grain, key, relationship, column, type, domain, rule, and owner." },
  ],

  formulas: [
    { id: "key-uniqueness", name: "Key uniqueness test", formula: "duplicate_key_rows = COUNT(*) − COUNT(DISTINCT candidate_key)", meaning: "A valid single-column key has zero duplicate-key rows after null handling is defined.", requirement: "For composite keys, test the complete column combination rather than each column separately." },
    { id: "key-completeness", name: "Key completeness", formula: "key completeness = rows with non-null key / total rows", meaning: "Measures whether every row has the identifier required by its entity-integrity rule.", requirement: "A primary key requires 100% completeness; optional foreign keys may follow a documented lower expectation." },
    { id: "orphan-rate", name: "Foreign-key orphan rate", formula: "orphan rate = child rows with non-null unmatched FK / child rows requiring a parent", meaning: "Quantifies broken references between child and parent tables.", requirement: "Use an anti-join or NOT EXISTS test and distinguish permitted unknown members from true defects." },
    { id: "fanout", name: "Average relationship fanout", formula: "average fanout = matched child rows / matched parent rows", meaning: "Summarizes how many child records are associated with each matched parent.", requirement: "Inspect the maximum and distribution because an acceptable average can hide extreme multiplication." },
    { id: "join-balance", name: "Left-join row balance", formula: "left join output rows = parent rows + extra rows created by multiple matches", meaning: "A left join preserves every parent but may create extra rows when the right-side key is not unique.", requirement: "When a many-to-one lookup is intended, output rows must equal parent rows." },
    { id: "relationship-density", name: "Bridge relationship density", formula: "density = valid bridge rows / (left entity rows × right entity rows)", meaning: "Describes how sparse or dense a many-to-many association is.", requirement: "Use the distinct valid bridge grain and exclude duplicate associations." },
    { id: "reconciliation", name: "Additive-measure reconciliation", formula: "difference = post-relationship total − authoritative pre-relationship total", meaning: "Detects loss or inflation after relating tables.", requirement: "Compare at the measure's authoritative grain and require zero unexplained difference." },
  ],

  workedExamples: [
    {
      id: "example-04-01-01",
      title: "Write a precise grain statement",
      problem: "A table has robot_id, date, shift, operating_hours, and downtime_min. What is its grain?",
      solutionSteps: [
        "Identify the repeated identifiers: the same robot appears on multiple dates and shifts.",
        "Determine the time bucket and operating context represented by one record.",
        "Write the statement before naming a key: one row represents one robot during one calendar date and one production shift.",
        "Propose the composite candidate key (robot_id, date, shift) and test it for duplicates and nulls.",
      ],
      answer: "Grain: one robot × one date × one shift. Candidate key: (robot_id, date, shift).",
      interpretation: "Column names suggest grain, but uniqueness testing must confirm it and business owners must approve its meaning.",
    },
    {
      id: "example-04-01-02",
      title: "Choose between natural and surrogate keys",
      problem: "A robot has asset tag R-204, but tags can be reassigned after retirement. Should asset_tag be the primary key?",
      solutionSteps: [
        "Test uniqueness now: R-204 may be unique among active robots.",
        "Test stability over time: reassignment means the identifier can refer to different physical robots.",
        "Create an immutable robot_key as the primary key and retain asset_tag as a governed alternate identifier with effective dates.",
        "Reference robot_key from events so historical records remain attached to the correct physical asset.",
      ],
      answer: "Use an immutable surrogate robot_key as the primary key; manage asset_tag as a time-aware business identifier.",
      interpretation: "A meaningful identifier is not automatically a safe primary key when its business lifecycle permits reuse or change.",
    },
    {
      id: "example-04-01-03",
      title: "Place the foreign key in a one-to-many relationship",
      problem: "One plant contains many robots, and each robot belongs to exactly one plant at a time. Where should plant_id be stored?",
      solutionSteps: [
        "State both directions: a plant may have zero or many robots; each current robot must reference one plant.",
        "Place plant_id as a NOT NULL foreign key in Robots, the many side.",
        "Reference Plants(plant_id) and test every robot for a matching plant.",
        "If historical movement matters, replace the current-only field with a RobotPlantAssignment table containing effective dates.",
      ],
      answer: "For the current-state model, Robots.plant_id is a required foreign key to Plants.plant_id.",
      interpretation: "Time can change the model: a simple one-to-many current relationship may become a history table of assignments.",
    },
    {
      id: "example-04-01-04",
      title: "Resolve a many-to-many relationship",
      problem: "A technician may hold many certifications, and each certification may belong to many technicians.",
      solutionSteps: [
        "Do not place a comma-separated certification list in Technicians.",
        "Create TechnicianCertification with technician_id and certification_id as foreign keys.",
        "Use a composite primary key (technician_id, certification_id), or a surrogate key plus an equivalent UNIQUE constraint.",
        "Add earned_date, expiration_date, status, and evidence_uri because those attributes describe the association.",
      ],
      answer: "Use a bridge table with one row per technician-certification association.",
      interpretation: "The relationship itself can be a real business entity with dates, status, source, and evidence.",
    },
    {
      id: "example-04-01-05",
      title: "Diagnose join multiplication before writing the join",
      problem: "WorkOrders has 100 rows. RepairActions has 240 rows, and the analyst expects one output row per work order after combining them.",
      solutionSteps: [
        "The relationship is one work order to many repair actions, so a raw join cannot preserve one row per work order.",
        "Group RepairActions to work_order_id first, creating one row per work order with action_count and total_labor_min.",
        "Verify work_order_id is unique in the grouped result.",
        "Left join the grouped result to WorkOrders and reconcile output row count to 100.",
      ],
      answer: "Aggregate the child table to work-order grain before joining when the required output is one row per work order.",
      interpretation: "Pre-aggregation is not a workaround; it is an explicit transformation from child grain to the analytical grain.",
    },
    {
      id: "example-04-01-06",
      title: "Find duplicate keys and orphan foreign keys",
      problem: "Write diagnostic SQL for duplicate robot IDs and work orders whose robot_id has no matching robot.",
      solutionSteps: [
        "Group Robots by robot_id and retain groups with COUNT(*) greater than one.",
        "Left join WorkOrders to Robots on robot_id.",
        "Filter rows where WorkOrders.robot_id is non-null and Robots.robot_id is null.",
        "Record counts and offending identifiers before correcting or publishing data.",
      ],
      answer: "Duplicate test: GROUP BY robot_id HAVING COUNT(*) > 1. Orphan test: LEFT JOIN ... WHERE parent.robot_id IS NULL.",
      interpretation: "Constraints prevent new defects; diagnostic queries reveal defects already present or loaded with enforcement disabled.",
    },
  ],

  interactiveExploration: {
    title: "Relational Model Design Studio",
    description:
      "Design the first version of a maintenance database before writing analytical queries.",
    instructions: [
      "List six candidate entities: Plant, Robot, RobotModel, WorkOrder, Fault, and Technician.",
      "For each table, write a one-sentence grain statement that begins with 'One row represents'.",
      "Identify every candidate key and evaluate uniqueness, stability, minimality, nullability, and external meaning.",
      "Select the primary key and document alternate keys rather than discarding them.",
      "Draw each relationship with cardinality and optionality in both directions.",
      "Add TechnicianCertification as a bridge table and define its association attributes.",
      "Write expected uniqueness, null, orphan, fanout, and row-balance tests.",
      "Choose one analytical measure and identify the only grain at which it is safely additive.",
      "Peer-review the model by constructing one invalid row that each constraint should reject.",
    ],
    questions: [
      "Can two reasonable readers interpret any grain statement differently?",
      "Which natural key may change, be reused, or conflict across source systems?",
      "Which relationships are optional for business reasons and which are optional only because data is incomplete?",
      "Where could a join multiply a measure stored at a parent grain?",
      "Which relationship becomes different when history is required?",
      "What must be tested even if the database declares constraints?",
    ],
    expectedDiscovery:
      "The model is not merely a technical diagram. It is a set of business claims about identity, meaning, time, participation, and allowed states that must be documented and tested.",
  },

  realWorldApplications: [
    { field: "Manufacturing and Robotics", application: "Relate plants, robot assets, sensor devices, work orders, fault events, technicians, parts, and maintenance actions without duplicating downtime or losing asset history." },
    { field: "Finance", application: "Separate customers, accounts, transactions, merchants, and account holders; use an ownership bridge when multiple people share multiple accounts." },
    { field: "Education", application: "Model students, courses, sections, terms, enrollments, assessments, and submissions at distinct grains while protecting privacy and historical membership." },
    { field: "Healthcare Operations", application: "Distinguish patients, encounters, orders, procedures, diagnoses, clinicians, and facilities so counts are clinically and operationally meaningful." },
    { field: "Retail and Supply Chain", application: "Connect products, orders, order lines, shipments, warehouses, suppliers, and inventory snapshots at their correct transaction and time grains." },
    { field: "AI and Machine Learning", application: "Relate model versions, predictions, entities, feature snapshots, outcomes, reviewers, and incidents so training and monitoring evidence remains reproducible." },
  ],

  aiConnection: {
    title: "AI Systems Depend on Relational Identity",
    explanation:
      "Machine-learning labels, features, predictions, and monitoring events must join to the correct entity and point in time. A key collision, many-to-many fanout, or future attribute joined to a past prediction can create leakage, duplicate training examples, false performance, or incorrect actions.",
    example:
      "For predictive maintenance, one prediction row should identify robot_key, model_version, prediction_timestamp, horizon, and scoring event. Its eventual failure label must be attached using a governed time window rather than a current robot attribute or an unrestricted join to all fault events.",
    uses: [
      "Build point-in-time correct training datasets",
      "Prevent duplicate entities across source systems",
      "Connect predictions to outcomes and human reviews",
      "Track model, feature, threshold, and schema versions",
      "Audit subgroup performance at governed entity grains",
    ],
    caution:
      "A syntactically successful feature join may still leak future information or multiply examples. Validate entity identity, event time, relationship cardinality, and output grain before model training.",
    reflectionQuestion:
      "What false model conclusion could result if one failure event matches several duplicated asset records?",
  },

  pythonLab: {
    title: "Create and Audit a Relational Maintenance Database",
    objective:
      "Use Python's built-in SQLite engine to create constrained tables, load valid records, detect rejected relationships, and run grain, key, orphan, fanout, and reconciliation checks.",
    code: `import sqlite3
import pandas as pd

connection = sqlite3.connect(":memory:")
connection.execute("PRAGMA foreign_keys = ON;")

connection.executescript("""
CREATE TABLE plants (
    plant_id TEXT PRIMARY KEY,
    plant_name TEXT NOT NULL UNIQUE
);

CREATE TABLE robots (
    robot_id TEXT PRIMARY KEY,
    plant_id TEXT NOT NULL,
    model_name TEXT NOT NULL,
    install_date TEXT NOT NULL,
    FOREIGN KEY (plant_id) REFERENCES plants(plant_id)
);

CREATE TABLE work_orders (
    work_order_id TEXT PRIMARY KEY,
    robot_id TEXT NOT NULL,
    opened_at TEXT NOT NULL,
    downtime_min INTEGER NOT NULL CHECK (downtime_min >= 0),
    FOREIGN KEY (robot_id) REFERENCES robots(robot_id)
);

CREATE TABLE repair_actions (
    action_id TEXT PRIMARY KEY,
    work_order_id TEXT NOT NULL,
    action_type TEXT NOT NULL,
    labor_min INTEGER NOT NULL CHECK (labor_min >= 0),
    FOREIGN KEY (work_order_id) REFERENCES work_orders(work_order_id)
);
""")

connection.executemany(
    "INSERT INTO plants VALUES (?, ?)",
    [("P-A", "Assembly North"), ("P-B", "Assembly South")],
)
connection.executemany(
    "INSERT INTO robots VALUES (?, ?, ?, ?)",
    [
        ("R-101", "P-A", "AX-7", "2024-02-10"),
        ("R-102", "P-A", "AX-7", "2024-03-12"),
        ("R-201", "P-B", "BZ-4", "2025-01-08"),
    ],
)
connection.executemany(
    "INSERT INTO work_orders VALUES (?, ?, ?, ?)",
    [
        ("WO-101", "R-101", "2026-09-01 08:10", 30),
        ("WO-102", "R-101", "2026-09-03 11:20", 45),
        ("WO-103", "R-102", "2026-09-04 09:00", 20),
        ("WO-104", "R-201", "2026-09-05 14:30", 95),
    ],
)
connection.executemany(
    "INSERT INTO repair_actions VALUES (?, ?, ?, ?)",
    [
        ("A-1", "WO-101", "Reset", 15),
        ("A-2", "WO-102", "Replace sensor", 40),
        ("A-3", "WO-104", "Diagnose", 30),
        ("A-4", "WO-104", "Replace drive", 90),
    ],
)

# Grain and key audits.
duplicate_robot_keys = pd.read_sql_query("""
SELECT robot_id, COUNT(*) AS row_count
FROM robots
GROUP BY robot_id
HAVING COUNT(*) > 1;
""", connection)

orphan_work_orders = pd.read_sql_query("""
SELECT w.*
FROM work_orders AS w
LEFT JOIN robots AS r ON r.robot_id = w.robot_id
WHERE r.robot_id IS NULL;
""", connection)

# Aggregate the child table before joining to preserve work-order grain.
work_order_summary = pd.read_sql_query("""
WITH action_summary AS (
    SELECT work_order_id,
           COUNT(*) AS action_count,
           SUM(labor_min) AS total_labor_min
    FROM repair_actions
    GROUP BY work_order_id
)
SELECT w.work_order_id,
       w.robot_id,
       w.downtime_min,
       COALESCE(a.action_count, 0) AS action_count,
       COALESCE(a.total_labor_min, 0) AS total_labor_min
FROM work_orders AS w
LEFT JOIN action_summary AS a
  ON a.work_order_id = w.work_order_id
ORDER BY w.work_order_id;
""", connection)

source_total = pd.read_sql_query(
    "SELECT SUM(downtime_min) AS total FROM work_orders", connection
).loc[0, "total"]
published_total = work_order_summary["downtime_min"].sum()

assert duplicate_robot_keys.empty
assert orphan_work_orders.empty
assert len(work_order_summary) == 4
assert work_order_summary["work_order_id"].is_unique
assert source_total == published_total == 190

# Demonstrate constraint protection without changing the valid database.
try:
    connection.execute(
        "INSERT INTO work_orders VALUES (?, ?, ?, ?)",
        ("WO-999", "R-DOES-NOT-EXIST", "2026-09-30 10:00", 5),
    )
except sqlite3.IntegrityError as error:
    print("Rejected orphan record:", error)

print("Work-order grain preserved:")
print(work_order_summary.to_string(index=False))
print("Downtime reconciliation:", source_total, published_total)
print("All relational integrity tests passed.")
`,
    questions: [
      "Which constraints protect entity, referential, domain, and business-rule integrity?",
      "Why must PRAGMA foreign_keys be enabled for SQLite connections?",
      "What is the grain of each of the four tables?",
      "Why is repair_actions aggregated before it is joined to work_orders?",
      "Which assertions prove that work-order grain and downtime were preserved?",
      "What error should appear when WO-999 references a missing robot?",
    ],
    reflectionQuestions: [
      "Which defects are prevented by schema constraints and which still require analytical tests?",
      "How would the model change if a robot can move between plants over time?",
      "What additional table is needed to connect technicians to repair actions?",
    ],
    extension:
      "Add technicians, certifications, and a technician_certification bridge table; create valid and invalid inserts; then calculate relationship fanout, maximum actions per work order, and an anti-join report for every foreign key.",
  },

  guidedPractice: [
    { id: "gp-04-01-01", question: "What sentence should be written before choosing a primary key?", answer: "One row represents exactly one specified entity, event, relationship, or snapshot at a stated level and time." },
    { id: "gp-04-01-02", question: "What five qualities should a strong key have?", answer: "It should be unique, non-null, stable, minimal, and consistently available at the table grain." },
    { id: "gp-04-01-03", question: "Where is the foreign key normally stored in a one-to-many relationship?", answer: "On the many or child side, referencing a unique candidate or primary key on the one or parent side." },
    { id: "gp-04-01-04", question: "How is a legitimate many-to-many relationship implemented?", answer: "With a bridge or associative table containing foreign keys to both entities and one row per valid association." },
    { id: "gp-04-01-05", question: "What does an orphan test find?", answer: "Child rows with a required non-null foreign key that does not match an approved parent key." },
    { id: "gp-04-01-06", question: "Why can a one-to-many join inflate a parent-level measure?", answer: "The parent value repeats once for every matching child row and is counted multiple times if summed after the join." },
  ],

  independentPractice: [
    { id: "ip-04-01-01", difficulty: "Foundational", question: "Write the grain and candidate key for a daily inventory table with warehouse_id, product_id, snapshot_date, and quantity_on_hand.", sampleAnswer: "One row per warehouse-product-date snapshot; candidate composite key (warehouse_id, product_id, snapshot_date)." },
    { id: "ip-04-01-02", difficulty: "Foundational", question: "Classify employee_number, employee_key, department_id in Employees, and (student_id, course_section_id) in Enrollments by key type.", sampleAnswer: "employee_number may be a natural candidate/alternate key; employee_key a surrogate primary key; department_id a foreign key; the enrollment pair a composite candidate or primary key." },
    { id: "ip-04-01-03", difficulty: "Applied", question: "Model customers and phone numbers when a customer may have many phones and one household phone may be shared.", sampleAnswer: "Use Customer, Phone, and CustomerPhone bridge tables; place relationship attributes such as type, primary flag, consent, and effective dates on the bridge." },
    { id: "ip-04-01-04", difficulty: "Applied", question: "Write SQL logic to find duplicate order_line keys defined by order_id and line_number.", sampleAnswer: "GROUP BY order_id, line_number HAVING COUNT(*) > 1." },
    { id: "ip-04-01-05", difficulty: "Analytical", question: "Explain why COUNT(DISTINCT customer_id) may hide a defective orders-to-customer join.", sampleAnswer: "The distinct count can look correct while order rows and amounts are multiplied by duplicate customer keys; row counts, right-side uniqueness, fanout, and additive totals must also be tested." },
    { id: "ip-04-01-06", difficulty: "Advanced", question: "Redesign a current robot.plant_id relationship to preserve plant assignment history.", sampleAnswer: "Create RobotPlantAssignment with robot_id, plant_id, valid_from, valid_to, and constraints preventing overlapping periods; use point-in-time joins." },
    { id: "ip-04-01-07", difficulty: "Professional", question: "Create a relational-model QA checklist for a production analytics project.", sampleAnswer: "Document grains, keys, domains, cardinality, optionality, effective dates, constraint status, duplicate/null/orphan tests, fanout thresholds, anti-joins, row balances, metric reconciliation, ownership, and remediation." },
  ],

  commonMistakes: [
    { mistake: "Treating the spreadsheet row as the grain definition.", correction: "State the real-world meaning of one row, including time and level of detail, then test the proposed key." },
    { mistake: "Using a name, email, or asset label as a primary key without lifecycle review.", correction: "Evaluate uniqueness, stability, reuse, privacy, source-system scope, and change history; use a surrogate when needed." },
    { mistake: "Assuming a declared ID is unique because its column name ends in _id.", correction: "Profile duplicates and nulls before trusting or joining on any proposed key." },
    { mistake: "Storing lists such as 'C01,C04,C07' in one column.", correction: "Create a child or bridge table with one row per atomic relationship." },
    { mistake: "Joining two child tables directly at different grains.", correction: "Choose the required output grain and aggregate, filter, or bridge each source deliberately before combining." },
    { mistake: "Using INNER JOIN by default and silently dropping unmatched records.", correction: "Choose join preservation from the business question and always inspect anti-join results." },
    { mistake: "Allowing null or orphan foreign keys without distinguishing optionality from defects.", correction: "Document valid optional relationships, unknown-member policy, and publication treatment." },
    { mistake: "Checking row counts but not additive measures after a relationship.", correction: "Reconcile authoritative counts and totals at the correct grain under representative filters." },
  ],

  discussionQuestions: [
    "When should a meaningful natural key remain the primary key, and when is a surrogate safer?",
    "Is a missing foreign key always a data-quality defect, or can it represent legitimate optionality?",
    "How should historical relationships be modeled when the current state is also needed?",
    "Which is more dangerous: silently dropping unmatched rows or multiplying matched rows?",
    "What relational evidence should be required before a dataset is approved for machine learning?",
  ],

  formativeAssessment: {
    totalPoints: 40,
    passingScore: 32,
    questions: [
      { id: "check-04-01-01", type: "grain", points: 5, prompt: "Define row grain and write one precise example.", sampleAnswer: "Grain is the exact real-world meaning and level of detail of one row; for example, one row per robot per production shift per calendar date." },
      { id: "check-04-01-02", type: "keys", points: 5, prompt: "Distinguish candidate, primary, alternate, natural, surrogate, composite, and foreign keys.", sampleAnswer: "Candidate keys can uniquely identify; one becomes primary; remaining candidates are alternate; natural keys have business meaning; surrogate keys are generated; composite keys use multiple columns; foreign keys reference approved parent keys." },
      { id: "check-04-01-03", type: "quality", points: 5, prompt: "List five tests for a proposed primary key.", sampleAnswer: "Uniqueness, null completeness, stability, minimality, consistent formatting/availability, and lifecycle reuse; any five relevant tests earn full credit." },
      { id: "check-04-01-04", type: "relationships", points: 5, prompt: "Explain cardinality and optionality using Plants and Robots.", sampleAnswer: "One plant may have zero or many robots; each current robot must have exactly one plant, so plant participation is optional from Plant to Robot and required from Robot to Plant." },
      { id: "check-04-01-05", type: "bridge", points: 5, prompt: "Design a bridge between technicians and certifications.", sampleAnswer: "TechnicianCertification contains technician_id and certification_id foreign keys, a composite unique/primary key, and association fields such as earned, expiry, status, and evidence." },
      { id: "check-04-01-06", type: "integrity", points: 5, prompt: "Distinguish entity, referential, domain, and business-rule integrity.", sampleAnswer: "Entity protects row identity; referential protects valid relationships; domain protects allowed column values; business rules protect organization-specific valid states." },
      { id: "check-04-01-07", type: "diagnosis", points: 5, prompt: "A 100-row fact table becomes 125 rows after a supposed many-to-one lookup. Diagnose and respond.", sampleAnswer: "The lookup key is duplicated or the join predicate is incomplete; profile right-side duplicates, resolve cardinality, repeat the join, and require output row count and totals to reconcile." },
      { id: "check-04-01-08", type: "sql", points: 5, prompt: "Describe SQL patterns for duplicate-key and orphan-key tests.", sampleAnswer: "Duplicates use GROUP BY key HAVING COUNT(*) > 1; orphans use LEFT JOIN with parent key IS NULL or NOT EXISTS for required non-null child keys." },
    ],
  },

  researchExtension: {
    title: "Relational Model Reliability Study",
    researchQuestion:
      "How do explicit grain statements, enforced constraints, and automated relationship tests affect the accuracy of analytical results and the time required to diagnose defects?",
    applicationOptions: [
      "Manufacturing maintenance",
      "Banking transactions",
      "Student enrollment",
      "Healthcare encounters",
      "Retail orders",
      "AI prediction monitoring",
    ],
    task:
      "Build two small versions of the same model: one weak model with ambiguous grain and unenforced relationships, and one governed model with keys, constraints, and audit queries. Run identical analytical questions, inject duplicate and orphan defects, and compare accuracy, diagnosis time, and error visibility.",
    requiredEvidence: [
      "Entity list and business questions",
      "Table-by-table grain and key dictionary",
      "Relationship diagram with cardinality and optionality",
      "Weak and governed schemas",
      "Controlled duplicate, orphan, mixed-grain, and fanout defects",
      "Query outputs and reconciliation differences",
      "Diagnosis time and detection results",
      "Conclusion, limitations, and recommended controls",
    ],
  },

  portfolioArtifact: {
    title: "Lesson 1 Portfolio Evidence: Audited Relational Model",
    description:
      "Create a documented relational model and a working SQLite database that proves you can preserve grain, identity, and relationships before analysis.",
    requiredSections: [
      "Business scenario, users, decisions, and analytical questions",
      "Entity inventory and table-by-table grain statements",
      "Data dictionary with columns, types, domains, units, null rules, and owners",
      "Candidate-key evaluation and selected primary/alternate keys",
      "Relationship diagram with cardinality, optionality, and effective-time needs",
      "DDL with primary, foreign, unique, not-null, and check constraints",
      "Duplicate, null, orphan, fanout, anti-join, row-balance, and total-reconciliation tests",
      "README explaining setup, tests, known limits, and next analytical questions",
    ],
    requiredEvidence: [
      "At least five related tables and one bridge or history table",
      "One precise grain statement for every table",
      "At least one natural, surrogate, composite, primary, and foreign key example",
      "Valid sample data plus controlled invalid inserts rejected or quarantined",
      "SQL audit query pack with expected results",
      "One demonstrated fanout problem and corrected grain-preserving query",
      "One source-to-output metric reconciliation",
      "Model diagram, database file or creation script, and concise technical brief",
    ],
  },

  growthIndicators: [
    { title: "Relational Thinker", description: "You translate business meaning into explicit entities, grains, keys, and relationships." },
    { title: "Integrity Designer", description: "You use constraints and tests to prevent or expose invalid identities, domains, and references." },
    { title: "Join-Risk Reviewer", description: "You predict fanout, unmatched rows, mixed grain, and double counting before analytical SQL is published." },
    { title: "Data Model Communicator", description: "You document the model so analysts, engineers, domain experts, and reviewers share the same definitions." },
  ],

  reflection: [
    "Which table in your current work has the least precise grain statement?",
    "Which identifier looks unique today but may change or be reused later?",
    "Where could an optional relationship be confused with missing data?",
    "Which metric is most vulnerable to row multiplication?",
    "What constraint would prevent the most expensive defect?",
    "What audit query should run before every publication or model-training job?",
  ],

  summary: [
    "A relational table should contain rows at one declared grain.",
    "Write what one row represents before selecting columns, keys, joins, or measures.",
    "A strong key is unique, non-null, stable, minimal, and available at the table grain.",
    "Candidate keys identify; the primary key is selected; alternate keys remain governed; foreign keys connect.",
    "Natural keys carry business meaning, while surrogate keys provide stable database identity when business identifiers change or conflict.",
    "Composite keys represent identity that genuinely depends on more than one attribute.",
    "Cardinality states how many records may relate; optionality states whether participation is required.",
    "One-to-many relationships place the foreign key on the many side; many-to-many relationships require a bridge table.",
    "Entity, referential, domain, and business-rule integrity require both constraints and observable tests.",
    "Duplicate keys, orphan records, mixed grain, and incomplete join predicates produce false counts and totals.",
    "Aggregate child data to the required analytical grain before joining when parent-level output must be preserved.",
    "Reconcile output row counts and additive measures to authoritative pre-relationship values.",
    "Relational integrity is essential for SQL, BI, data engineering, machine learning, and responsible AI.",
  ],

  previousLesson: {
    id: "data-ai-m03-l07",
    moduleNumber: 3,
    slug: "portfolio-project-refreshable-business-analysis-workbook",
    title: "Portfolio Project: Refreshable Business Analysis Workbook",
  },
  nextLesson: {
    id: "data-ai-m04-l02",
    moduleNumber: 4,
    slug: "filtering-sorting-grouping-and-aggregation",
    title: "Filtering, Sorting, Grouping, and Aggregation",
  },

  lumineryGuidance: {
    message:
      "Do not begin with the join. Begin by proving the grain and key of every table, then state cardinality, test the relationship, and reconcile the result.",
    prompt:
      "Act as my senior SQL data modeler and quality reviewer. Help me complete Module 4 Lesson 1 one verified step at a time. Ask me to define entities, write one-row grain statements, identify candidate keys, test uniqueness and nulls, choose natural or surrogate primary keys, declare foreign keys, draw cardinality and optionality, model bridge and history tables, write constraints, run duplicate and orphan tests, inspect fanout, and reconcile row counts and measures. Do not let me write analytical joins until every source table has a defensible grain and key.",
    coachingQuestions: [
      "What exactly does one row represent?",
      "Which column combination proves that grain?",
      "Can the business identifier change, be reused, or collide across systems?",
      "How many records may relate in each direction, and is participation required?",
      "Which measure will repeat if this relationship fans out?",
      "What query proves there are no duplicate keys or orphan records?",
      "Which row count and total must reconcile before the result is trusted?",
    ],
  },
};

export default lesson01;
