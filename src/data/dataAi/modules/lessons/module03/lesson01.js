const lesson01 = {
  id: "data-ai-m03-l01",
  courseId: "data-ai-foundations",
  moduleId: "data-ai-foundations-module-03",
  moduleNumber: 3,
  lessonNumber: 1,
  slug: "tidy-data-and-reliable-workbook-architecture",
  title: "Tidy Data and Reliable Workbook Architecture",
  shortTitle: "Tidy Data and Workbook Architecture",
  subtitle:
    "Design Excel workbooks that preserve source data, make every transformation traceable, and refresh without rebuilding the analysis.",
  status: "available",
  duration: "3–4 hours",
  level: "Beginner to Professional",

  essentialQuestion:
    "How can we organize spreadsheet data so every row, column, table, formula, and report has one clear purpose and remains trustworthy after refresh?",
  bigIdea:
    "A reliable workbook is a small data system. Tidy tables define the grain, architecture separates source data from transformation and presentation, and audit checks make errors visible before a decision is made.",

  whyThisLessonExists: {
    title: "A Spreadsheet Should Survive New Data, New Users, and New Questions",
    introduction:
      "Excel is often the first analytical tool used in an organization. It can be fast, transparent, and powerful, but only when the workbook is designed as a repeatable system instead of a decorated page of manually placed values.",
    centralProblem:
      "Many workbooks mix raw data, formulas, copied totals, notes, charts, and manual corrections on one sheet. Monthly columns expand sideways, merged cells hide structure, blank rows interrupt tables, and formulas silently miss new records. The result may look professional while remaining difficult to audit or refresh.",
    purpose:
      "This lesson teaches you to define row grain, organize tidy Excel Tables, separate source, staging, model, audit, and report layers, use stable keys and structured references, reconcile every transformation, and create a workbook blueprint that another analyst can understand and refresh.",
  },

  problemFirst: {
    title: "Opening Investigation: Repair the Robot Maintenance Workbook",
    scenario:
      "A plant manager sends a workbook called Robot_Maintenance_Final_v7.xlsx. The first worksheet contains a title in row 1, merged headers, one column for each month, technician names typed in several spellings, subtotals inside the data, colored cells used as fault codes, and formulas beside manually entered corrections. Leadership needs a monthly downtime report that can be refreshed from new work orders.",
    questions: [
      "What real-world event should one row represent?",
      "Which columns describe a work order, robot, technician, date, fault, duration, and status?",
      "Which information is data, which is metadata, and which is presentation?",
      "Why are January, February, and March columns harder to analyze than a single date or month column?",
      "Which values should be preserved exactly as received, and which should be standardized in a staging layer?",
      "How will the workbook prove that no work orders were lost or duplicated?",
      "What should happen when April data arrives?",
    ],
    expectedInsight:
      "The workbook needs one tidy work-order table at a declared grain, separate reference tables for reusable entities, immutable source data, repeatable transformations, reconciliation checks, and reports that depend on tables rather than hand-selected cell ranges.",
  },

  learningObjectives: [
    "Define the observation, row grain, variable, value, key, and table before building an analysis.",
    "Distinguish tidy transactional data from cross-tabs, reports, forms, and presentation layouts.",
    "Convert repeated monthly columns, embedded totals, and multi-value cells into analysis-ready rows and columns.",
    "Design a workbook with Source, Staging, Reference, Model, Audit, and Report layers.",
    "Use Excel Tables, structured references, stable identifiers, named calculations, and refresh-safe ranges.",
    "Separate facts, reusable descriptive attributes, calculations, parameters, and outputs.",
    "Create control totals and validation checks that reconcile row counts, unique keys, amounts, and missing values.",
    "Document lineage, refresh instructions, assumptions, and ownership for another analyst.",
    "Cross-check the tidy-data design with pandas and export auditable evidence.",
  ],

  prerequisiteKnowledge: [
    "Basic worksheet navigation, cells, rows, columns, and ranges",
    "Simple Excel formulas and relative versus absolute references",
    "Module 1 concepts: unit of analysis, features, targets, and decisions",
    "Module 2 concepts: data quality, distributions, bias, and reproducibility",
    "Basic Python and pandas are helpful for the optional cross-check lab",
  ],

  visualModels: [
    {
      id: "reliable-workbook-flow",
      type: "lifecycle",
      title: "The Reliable Workbook Architecture",
      description:
        "Each layer has one responsibility. Data moves forward through repeatable steps while audit evidence checks the movement.",
      stages: [
        {
          label: "1. Source",
          detail:
            "Preserve the received export or connection without manual edits. Record source, owner, extraction time, and file version.",
        },
        {
          label: "2. Staging",
          detail:
            "Standardize names and types, reshape wide data, split combined fields, remove structural clutter, and log every rule.",
        },
        {
          label: "3. Reference and Model",
          detail:
            "Relate tidy transaction tables to unique robot, technician, plant, calendar, and code tables using stable keys.",
        },
        {
          label: "4. Audit",
          detail:
            "Reconcile counts, unique keys, totals, missingness, unmatched records, and refresh dates before publishing results.",
        },
        {
          label: "5. Report",
          detail:
            "Build PivotTables, charts, KPIs, and decision notes from the governed model rather than from copied values.",
        },
      ],
      feedback:
        "When an audit check fails, return to the earliest affected layer, correct the transformation rule, refresh, and retain the evidence of the change.",
      interpretation:
        "A workbook is reliable when new source rows can enter the same pathway and produce reconciled outputs without manual reconstruction.",
    },
  ],

  vocabulary: [
    { term: "Tidy data", definition: "A structure in which each variable is a column, each observation is a row, and each type of observational unit has its own table." },
    { term: "Observation", definition: "One measured or recorded instance, such as one maintenance work order." },
    { term: "Variable", definition: "A characteristic recorded consistently across observations, such as downtime_minutes." },
    { term: "Value", definition: "The specific recorded entry at the intersection of an observation and a variable." },
    { term: "Row grain", definition: "The precise real-world meaning of one row in a table." },
    { term: "Primary key", definition: "A field or minimal field combination that uniquely identifies each row at the declared grain." },
    { term: "Foreign key", definition: "A field that links a row to the unique key of another table." },
    { term: "Transaction table", definition: "A table containing repeatable events or measurements, usually with many rows and numeric outcomes." },
    { term: "Reference table", definition: "A table containing one row per reusable entity or code, such as one row per robot or plant." },
    { term: "Wide data", definition: "A layout that repeats categories or time periods across columns, such as Jan, Feb, and Mar." },
    { term: "Long data", definition: "A layout that stores repeated categories or periods in rows with a category column and a value column." },
    { term: "Cross-tab", definition: "A summarized matrix with categories across rows and columns; useful for reports but usually not as source data." },
    { term: "Excel Table", definition: "A named, structured range that expands with new rows and supports headers, filters, totals, and structured references." },
    { term: "Structured reference", definition: "A formula reference that uses table and column names instead of fragile cell coordinates." },
    { term: "Source layer", definition: "The preserved data exactly as received or connected, with provenance and refresh details." },
    { term: "Staging layer", definition: "The controlled area where source data is cleaned, typed, reshaped, and standardized." },
    { term: "Model layer", definition: "The related tidy tables and calculations used to answer analytical questions." },
    { term: "Report layer", definition: "The decision-facing PivotTables, charts, KPIs, explanations, and controls." },
    { term: "Control total", definition: "A count or sum used to prove that records and amounts reconcile across steps." },
    { term: "Data lineage", definition: "The traceable path from source fields through transformations to calculations and reports." },
    { term: "Single source of truth", definition: "The governed location from which an important definition or value is consistently derived." },
    { term: "Hard-coded value", definition: "A manually typed constant embedded where a parameter, reference, or documented rule should be used." },
    { term: "Refresh", definition: "The repeatable process that reloads source data and applies the same transformations and calculations." },
    { term: "Workbook blueprint", definition: "A documented plan for sheets, tables, grain, keys, ownership, dependencies, checks, and outputs." },
  ],

  formulas: [
    {
      id: "row-count-reconciliation",
      name: "Row-count reconciliation",
      formula: "Row difference = Source rows − (Loaded rows + documented rejected rows)",
      meaning: "Tests whether every source record has an explained destination.",
      requirement: "The result should equal zero; investigate filters, duplicate removal, errors, and rejected records when it does not.",
    },
    {
      id: "key-uniqueness",
      name: "Key uniqueness test",
      formula: "Duplicate keys = Rows − Distinct keys",
      meaning: "Checks whether the proposed primary key is unique at the declared grain.",
      requirement: "A result above zero requires either correction of duplicate rows or a revised definition of the grain and key.",
    },
    {
      id: "completeness-rate",
      name: "Required-field completeness",
      formula: "Completeness = Nonblank required values / Expected required values",
      meaning: "Measures whether a required column is populated for the intended analysis set.",
      requirement: "Calculate by source, plant, time, and category so a strong overall rate does not hide concentrated gaps.",
    },
    {
      id: "amount-reconciliation",
      name: "Amount reconciliation",
      formula: "Amount difference = Source total − Published total − documented exclusions",
      meaning: "Proves that transformed totals preserve the relevant source amount.",
      requirement: "Define whether blanks, credits, reversals, cancellations, and duplicates belong in each total.",
    },
    {
      id: "excel-duplicate-check",
      name: "Excel duplicate-key flag",
      formula: '=IF(COUNTIF(tblWorkOrders[work_order_id],[@work_order_id])>1,"Duplicate","OK")',
      meaning: "Flags every row whose work-order identifier appears more than once in the Excel Table.",
      requirement: "Use a stable key column and investigate the business cause; do not simply delete flagged rows.",
    },
    {
      id: "excel-completeness-check",
      name: "Excel required-value flag",
      formula: '=IF(OR([@robot_id]="",[@opened_at]="",[@status]=""),"Review","OK")',
      meaning: "Identifies a row missing one or more fields required by the work-order process.",
      requirement: "Maintain the required-field list in documentation and distinguish true missingness from not-applicable values.",
    },
    {
      id: "refresh-readiness",
      name: "Refresh readiness",
      formula: "Ready = all critical audit checks passed AND source timestamp is current",
      meaning: "Creates a simple publication gate for decision-facing outputs.",
      requirement: "Never publish a green status based only on formatting; connect it to calculated tests and a recorded refresh time.",
    },
  ],

  workedExamples: [
    {
      id: "example-03-01-01",
      title: "Declare the row grain before entering formulas",
      problem:
        "A sheet has robot_id, technician, date, fault_code, and downtime_minutes. Robot R-12 appears four times. Is robot_id a valid primary key?",
      solutionSteps: [
        "Read the business process: each row records a separate maintenance work order.",
        "State the grain as one row per work order, not one row per robot.",
        "Use work_order_id as the primary key.",
        "Keep robot_id as a foreign key linking each work order to the robot reference table.",
      ],
      answer:
        "No. Repeated robot_id values are expected because one robot can have many work orders. The key must uniquely identify the work order.",
      interpretation:
        "Duplicate-looking values are not errors until the row grain and candidate key are defined.",
    },
    {
      id: "example-03-01-02",
      title: "Reshape monthly columns into tidy rows",
      problem:
        "A downtime sheet stores robot_id, Jan, Feb, and Mar. How should it be redesigned for repeated analysis?",
      solutionSteps: [
        "Preserve robot_id as an identifier column.",
        "Unpivot Jan, Feb, and Mar into a month column and a downtime_minutes column.",
        "Convert month text into a proper period-start date.",
        "Use the combined robot_id and month only if exactly one row should exist per robot-month.",
      ],
      answer:
        "Create columns robot_id, month_start, and downtime_minutes, with one row per robot-month.",
      interpretation:
        "April becomes a new row rather than a new formula range, which makes refresh and trend analysis safer.",
    },
    {
      id: "example-03-01-03",
      title: "Use an Excel Table instead of a fixed range",
      problem:
        "A total uses =SUM(H2:H250), but the refreshed export contains 286 rows. Repair the design.",
      solutionSteps: [
        "Convert the dataset to an Excel Table named tblWorkOrders.",
        "Name the numeric field downtime_minutes.",
        "Replace the fixed range with =SUM(tblWorkOrders[downtime_minutes]).",
        "Add an audit cell that reports =ROWS(tblWorkOrders[work_order_id]).",
      ],
      answer:
        "The structured reference expands automatically when valid new table rows are loaded.",
      interpretation:
        "A dynamic table reduces range omissions, but it still requires key, type, and reconciliation checks.",
    },
    {
      id: "example-03-01-04",
      title: "Separate source, transformation, and report logic",
      problem:
        "A user corrects plant names directly in the source sheet and overwrites a PivotTable total when it looks wrong.",
      solutionSteps: [
        "Restore the unchanged source export.",
        "Create a documented plant-name mapping in a reference table.",
        "Apply the mapping in Power Query or a staging formula.",
        "Refresh the model and PivotTable from the corrected staging result.",
        "Record the mismatch and mapping owner in the audit sheet.",
      ],
      answer:
        "Corrections belong in a repeatable transformation rule, never as silent edits to raw inputs or calculated outputs.",
      interpretation:
        "Layer separation preserves lineage and allows the same rule to work when the next source file arrives.",
    },
    {
      id: "example-03-01-05",
      title: "Move repeating descriptions into a reference table",
      problem:
        "Every work-order row repeats robot_model, installation_date, and plant_name. Some values disagree for the same robot.",
      solutionSteps: [
        "Create tblRobots with one row per robot_id.",
        "Store stable robot attributes in tblRobots.",
        "Keep work-order event fields in tblWorkOrders.",
        "Resolve conflicting robot attributes with an authoritative source and an issue log.",
        "Relate work orders to robots by robot_id.",
      ],
      answer:
        "Use a robot reference table for stable attributes and a work-order transaction table for repeated events.",
      interpretation:
        "This reduces inconsistent descriptions and gives each entity one governed definition.",
    },
    {
      id: "example-03-01-06",
      title: "Create a publication gate with control totals",
      problem:
        "The source has 1,240 work orders and 18,775 downtime minutes. Staging contains 1,237 rows and the report shows 18,690 minutes.",
      solutionSteps: [
        "Calculate the row difference: 1,240 − 1,237 = 3 unexplained rows.",
        "Calculate the amount difference: 18,775 − 18,690 = 85 unexplained minutes.",
        "Inspect rejected rows, filters, joins, duplicates, data-type errors, and cancellations.",
        "Block publication until all differences are explained and documented.",
      ],
      answer:
        "Refresh status = Not ready: three records and 85 downtime minutes are unreconciled.",
      interpretation:
        "A report should not be trusted because its numbers look reasonable; it must reconcile to its governed source.",
    },
  ],

  interactiveExploration: {
    title: "Workbook Architecture Studio",
    description:
      "Redesign a report-shaped maintenance worksheet before writing formulas or building charts.",
    instructions: [
      "List every real-world entity and event represented in the workbook.",
      "Write one precise grain statement for each proposed table.",
      "Mark columns as identifier, date/time, category, measure, free text, or derived field.",
      "Identify wide month columns, combined fields, embedded totals, blank separators, merged headers, and formatting-as-data.",
      "Sketch Source, Staging, Reference, Model, Audit, and Report worksheets.",
      "Assign a name, owner, refresh rule, key, and control total to every table.",
      "Trace one dashboard KPI backward to the source fields and transformations that create it.",
    ],
    questions: [
      "Could a new analyst determine what one row means without asking the original author?",
      "Does any column contain more than one variable or unit?",
      "Does any value depend only on color, position, indentation, or a comment?",
      "Can new rows enter without changing formulas or chart ranges?",
      "Which transformation rules should be owned in a mapping table rather than embedded in formulas?",
      "What exact evidence will turn the refresh status from Review to Ready?",
    ],
    expectedDiscovery:
      "The best workbook blueprint is usually simpler than the original file: fewer manual sheets, more clearly named tables, one declared grain per table, visible parameters, and audit checks that connect every published number to its source.",
  },

  realWorldApplications: [
    {
      field: "Manufacturing and Robotics",
      application:
        "Organize work orders, sensor summaries, fault codes, robots, plants, and technicians into refreshable tables for downtime and reliability analysis.",
    },
    {
      field: "Finance and Accounting",
      application:
        "Separate imported transactions, account mappings, adjustments, reconciliations, and financial summaries while preserving a complete audit trail.",
    },
    {
      field: "Education",
      application:
        "Store one row per student-course-assessment event and relate it to student, course, calendar, and standards reference tables.",
    },
    {
      field: "Healthcare Operations",
      application:
        "Keep encounters, patients, providers, procedures, and quality measures at explicit grains with privacy-aware identifiers and controlled transformations.",
    },
    {
      field: "Retail and Supply Chain",
      application:
        "Model sales lines, products, stores, suppliers, inventory snapshots, and calendars so new files refresh without expanding fixed ranges.",
    },
    {
      field: "Machine Learning and AI",
      application:
        "Create stable training rows and feature definitions so labels, observations, joins, time windows, and leakage controls remain explicit.",
    },
  ],

  aiConnection: {
    title: "Tidy Tables Are the Contract Between Business Data and AI",
    explanation:
      "Machine-learning systems require a defined observation, target, features, keys, and time boundary. A workbook that mixes grains or hides meaning in formatting can create duplicate labels, leakage, incorrect joins, and training-serving inconsistency before a model is ever fitted.",
    example:
      "For a robot-failure model, one training row might represent one robot-day. Work-order events must first be aggregated to robot-day using a documented window; robot attributes join by robot_id; future failures cannot be used as current features.",
    uses: [
      "Prepare governed labeled datasets for classification or regression",
      "Create reusable entity and code mappings shared by analysts and models",
      "Prevent duplicated observations caused by many-to-many joins",
      "Trace a model feature back to its source and transformation",
      "Build monitoring tables with the same grain and definitions as training data",
    ],
    caution:
      "A visually tidy worksheet is not automatically model-ready. Confirm time order, population, missingness, joins, label construction, privacy, and leakage separately.",
    reflectionQuestion:
      "If one row is not defined precisely, how could you know whether two rows are independent training examples or duplicate evidence?",
  },

  pythonLab: {
    title: "Cross-Check a Tidy Workbook Design with pandas",
    objective:
      "Transform a wide robot-month table into long form, build robot and work-order tables at explicit grains, test the keys, reconcile totals, and export separate workbook-ready sheets.",
    code: `import pandas as pd
from pathlib import Path

# A small wide table similar to a report-shaped worksheet.
wide = pd.DataFrame({
    "robot_id": ["R-101", "R-102", "R-103"],
    "plant": ["A", "A", "B"],
    "model": ["AX4", "AX4", "BZ2"],
    "Jan": [42, 18, 33],
    "Feb": [35, 21, 29],
    "Mar": [27, 24, 31],
})

# 1. Reference table: one row per robot.
robots = wide[["robot_id", "plant", "model"]].drop_duplicates()
assert robots["robot_id"].is_unique

# 2. Long transaction table: one row per robot-month.
downtime = wide.melt(
    id_vars=["robot_id"],
    value_vars=["Jan", "Feb", "Mar"],
    var_name="month",
    value_name="downtime_min",
)

month_number = {"Jan": 1, "Feb": 2, "Mar": 3}
downtime["month_start"] = pd.to_datetime(
    "2026-" + downtime["month"].map(month_number).astype(str) + "-01"
)
downtime = downtime.drop(columns="month")

# 3. Validate the declared grain and required values.
grain = ["robot_id", "month_start"]
assert not downtime.duplicated(grain).any()
assert downtime[grain + ["downtime_min"]].notna().all().all()
assert downtime["downtime_min"].ge(0).all()
assert downtime["robot_id"].isin(robots["robot_id"]).all()

# 4. Reconcile the reshape.
source_total = wide[["Jan", "Feb", "Mar"]].sum().sum()
tidy_total = downtime["downtime_min"].sum()
source_values = wide.shape[0] * 3
tidy_rows = len(downtime)

audit = pd.DataFrame({
    "check": ["value_count_difference", "downtime_total_difference"],
    "result": [source_values - tidy_rows, source_total - tidy_total],
    "status": [
        "PASS" if source_values == tidy_rows else "FAIL",
        "PASS" if source_total == tidy_total else "FAIL",
    ],
})

# 5. Create a report from the tidy table, not from copied values.
monthly_report = (
    downtime.groupby("month_start", as_index=False)["downtime_min"]
    .sum()
    .sort_values("month_start")
)

output = Path("robot_maintenance_tidy_workbook.xlsx")
with pd.ExcelWriter(output, engine="openpyxl") as writer:
    wide.to_excel(writer, sheet_name="Source", index=False)
    robots.to_excel(writer, sheet_name="Robots", index=False)
    downtime.to_excel(writer, sheet_name="Downtime", index=False)
    audit.to_excel(writer, sheet_name="Audit", index=False)
    monthly_report.to_excel(writer, sheet_name="Report_Data", index=False)

print("Robot grain:", len(robots), "unique robots")
print("Downtime grain:", len(downtime), "unique robot-month rows")
print("Source total:", source_total)
print("Tidy total:", tidy_total)
print(audit.to_string(index=False))
print("Created:", output.resolve())`,
    questions: [
      "What is the grain of robots and downtime?",
      "Why is robot_id unique in robots but expected to repeat in downtime?",
      "Which two checks prove that the reshape preserved the source evidence?",
      "What error would the duplicated(grain) assertion detect?",
      "Why should Report_Data be regenerated instead of manually edited?",
      "How would you add April without changing the intended tidy schema?",
    ],
    reflectionQuestions: [
      "Which layer in the Python workflow corresponds to each Excel workbook layer?",
      "What business rule is still missing before this small example could be used in production?",
      "Which assertions should become visible cells or Power Query checks in the Excel version?",
    ],
    extension:
      "Add a second source file with April data, append it through the same transformation, deliberately introduce a duplicate robot-month, and make the audit table block publication until the issue is resolved.",
  },

  guidedPractice: [
    {
      id: "gp-03-01-01",
      question: "State the three classic rules of tidy data.",
      answer: "Each variable is a column, each observation is a row, and each type of observational unit has its own table.",
    },
    {
      id: "gp-03-01-02",
      question: "Why is a title row above table headers unsafe for import and refresh?",
      answer: "It changes where the true headers begin and can cause tools to interpret metadata as field names or data rows.",
    },
    {
      id: "gp-03-01-03",
      question: "What is the difference between a primary key and a foreign key?",
      answer: "A primary key uniquely identifies a row in its own table; a foreign key links that row to the primary key of another table.",
    },
    {
      id: "gp-03-01-04",
      question: "Why should Source and Report be separate layers?",
      answer: "Source preserves evidence; Report presents derived decisions. Separating them prevents manual presentation changes from altering the evidence.",
    },
    {
      id: "gp-03-01-05",
      question: "What should a zero row-count difference mean?",
      answer: "Every source row is either loaded or explicitly documented as rejected; zero alone is not enough unless the rejection rules are valid.",
    },
    {
      id: "gp-03-01-06",
      question: "Why are structured references safer than H2:H250?",
      answer: "They use meaningful table and column names and expand with new table rows, reducing silent range omissions.",
    },
  ],

  independentPractice: [
    {
      id: "ip-03-01-01",
      difficulty: "Foundational",
      question: "Rewrite this layout as tidy columns: customer, Jan_sales, Feb_sales, Mar_sales.",
      sampleAnswer: "Use customer_id, month_start, and sales_amount, with one row per customer-month.",
    },
    {
      id: "ip-03-01-02",
      difficulty: "Foundational",
      question: "Write a grain statement and key for a table of invoice line items.",
      sampleAnswer: "One row per invoice line; key can be invoice_id plus line_number or a governed invoice_line_id.",
    },
    {
      id: "ip-03-01-03",
      difficulty: "Applied",
      question: "Design six worksheets for a refreshable inventory workbook and give each one responsibility.",
      sampleAnswer: "README, Source, Staging, Reference, Audit, and Report; add Model if calculations or relationships require it.",
    },
    {
      id: "ip-03-01-04",
      difficulty: "Applied",
      question: "Create five checks for a work-order table before a dashboard refresh.",
      sampleAnswer: "Unique work_order_id, required fields complete, dates in period, downtime nonnegative, robot keys matched, plus row and amount reconciliation.",
    },
    {
      id: "ip-03-01-05",
      difficulty: "Analytical",
      question: "Explain why a subtotal row inside transaction data violates tidy design.",
      sampleAnswer: "It is a derived summary mixed with event rows, changes the row grain, and can be counted again during aggregation.",
    },
    {
      id: "ip-03-01-06",
      difficulty: "Advanced",
      question: "Trace a KPI named Average Downtime from dashboard to source and list the lineage fields.",
      sampleAnswer: "Document dashboard visual, measure definition, included filters, model table, staging fields and rules, source fields, source file or connection, owner, refresh time, and checks.",
    },
    {
      id: "ip-03-01-07",
      difficulty: "Professional",
      question: "Create a workbook blueprint for one of your portfolio projects.",
      sampleAnswer: "Include purpose, audience, source inventory, sheet map, table names, grain, keys, field roles, relationships, parameters, refresh path, audit checks, outputs, owner, and version history.",
    },
  ],

  commonMistakes: [
    {
      mistake: "Designing the worksheet to look like the final report.",
      correction: "Store tidy facts first, then create PivotTables, charts, or formatted reports as separate outputs.",
    },
    {
      mistake: "Using merged cells, blank rows, indentation, or color to encode data.",
      correction: "Represent meaning in explicit, consistently named columns and documented category values.",
    },
    {
      mistake: "Treating a repeated foreign key as a duplicate record.",
      correction: "Define the grain and test the correct primary key before labeling rows as duplicates.",
    },
    {
      mistake: "Correcting source values manually.",
      correction: "Preserve the source and apply a documented transformation or authoritative mapping in staging.",
    },
    {
      mistake: "Hard-coding totals, thresholds, or rates inside many formulas.",
      correction: "Use named parameters, governed reference tables, and one documented definition for each important rule.",
    },
    {
      mistake: "Assuming an Excel Table removes the need for validation.",
      correction: "Tables expand ranges, but keys, types, missingness, relationships, and totals still require tests.",
    },
    {
      mistake: "Publishing after refresh without reconciliation.",
      correction: "Require current timestamps and passing critical audit checks before decision-facing outputs are marked ready.",
    },
  ],

  discussionQuestions: [
    "When is a spreadsheet an appropriate analytical system, and when should the process move to a database or governed platform?",
    "Who should own category mappings and correction rules: the analyst, source-system owner, or business process owner?",
    "Should rejected source records remain visible to report users? Why?",
    "How can a workbook remain easy for a business user while preserving professional controls?",
    "What is the most dangerous spreadsheet error that can still produce a believable number?",
  ],

  formativeAssessment: {
    totalPoints: 40,
    passingScore: 32,
    questions: [
      {
        id: "check-03-01-01",
        type: "concept",
        points: 5,
        prompt: "Define tidy data and give one violation.",
        sampleAnswer: "Each variable is a column, each observation a row, and each observational unit a table; Jan, Feb, and Mar as repeated value columns violate the variable structure.",
      },
      {
        id: "check-03-01-02",
        type: "grain",
        points: 5,
        prompt: "A robot appears in many maintenance rows. Explain whether this proves duplication.",
        sampleAnswer: "No. At one-row-per-work-order grain, robot_id is a repeating foreign key; test uniqueness of work_order_id instead.",
      },
      {
        id: "check-03-01-03",
        type: "architecture",
        points: 5,
        prompt: "Describe the responsibilities of Source, Staging, Model, Audit, and Report.",
        sampleAnswer: "Preserve, transform, relate/calculate, verify, and communicate, respectively.",
      },
      {
        id: "check-03-01-04",
        type: "excel",
        points: 5,
        prompt: "Why is =SUM(tblOrders[amount]) generally safer than =SUM(H2:H250)?",
        sampleAnswer: "It names the business field and expands with the table, while the fixed range can silently omit new rows.",
      },
      {
        id: "check-03-01-05",
        type: "modeling",
        points: 5,
        prompt: "Separate a work-order dataset into one transaction table and two reference tables.",
        sampleAnswer: "WorkOrders at work-order grain; Robots at robot grain; Technicians or FaultCodes at one-row-per-entity/code grain.",
      },
      {
        id: "check-03-01-06",
        type: "audit",
        points: 5,
        prompt: "Source has 800 rows, loaded has 793, and rejected has 5. Is the count reconciled?",
        sampleAnswer: "No. 800 − (793 + 5) = 2 unexplained rows, so publication should be blocked.",
      },
      {
        id: "check-03-01-07",
        type: "lineage",
        points: 5,
        prompt: "List six elements needed to trace a KPI to its origin.",
        sampleAnswer: "Visual, measure definition, filters, model fields, transformation rules, source fields/file, owner, refresh time, and checks; any six relevant elements earn full credit.",
      },
      {
        id: "check-03-01-08",
        type: "design",
        points: 5,
        prompt: "Write the minimum workbook blueprint required before building the report.",
        sampleAnswer: "Purpose, audience, source inventory, sheet map, table grain and keys, relationships, transformations, parameters, audit checks, refresh steps, outputs, owner, and version.",
      },
    ],
  },

  researchExtension: {
    title: "Spreadsheet Reliability Audit",
    researchQuestion:
      "Which workbook design choices most strongly predict refresh errors, hidden manual intervention, and difficulty reproducing a published result?",
    applicationOptions: [
      "Maintenance operations",
      "School performance reporting",
      "Small-business finance",
      "Healthcare operations",
      "Retail inventory",
      "Nonprofit program reporting",
    ],
    task:
      "Select an existing workbook you are authorized to review. Inventory its sources, grains, keys, formulas, manual steps, fixed ranges, hidden sheets, external links, controls, and refresh process. Redesign the architecture without exposing confidential data and compare the original and improved risk profiles.",
    requiredEvidence: [
      "Redacted workbook map and source inventory",
      "Grain and key statement for every data table",
      "List of structural and refresh risks with severity",
      "Proposed tidy schema and layer architecture",
      "At least five automated or calculated control checks",
      "Lineage trace for one decision-critical KPI",
      "Before-and-after refresh procedure",
      "Recommendation for Excel, database, Power BI, or Fabric ownership",
    ],
  },

  portfolioArtifact: {
    title: "Lesson 1 Portfolio Evidence: Reliable Workbook Blueprint",
    description:
      "Design a professional blueprint for a refreshable Excel analysis before building the complete workbook later in this module.",
    requiredSections: [
      "Business decision, audience, scope, owner, and refresh frequency",
      "Source inventory with provenance and access notes",
      "Worksheet and table architecture",
      "Grain, primary key, foreign keys, and field roles for every table",
      "Wide-to-long and other transformation rules",
      "Reference mappings and parameter ownership",
      "Control totals, validation checks, and publication gate",
      "Lineage example from one KPI to source",
      "Refresh instructions, version notes, assumptions, and known limitations",
    ],
    requiredEvidence: [
      "Workbook architecture diagram",
      "Data dictionary for at least two tables",
      "One tidy transaction-table sample",
      "One reference-table sample",
      "At least five audit checks with expected results",
      "Excel Table and structured-reference examples",
      "A README or Instructions sheet",
      "A cross-check script or documented manual reconciliation",
    ],
  },

  growthIndicators: [
    {
      title: "Grain Designer",
      description: "You define what one row means and choose keys before calculating or joining data.",
    },
    {
      title: "Workbook Architect",
      description: "You separate source, transformation, model, audit, and report responsibilities.",
    },
    {
      title: "Refresh Engineer",
      description: "You build tables and transformations that accept new valid data without manual reconstruction.",
    },
    {
      title: "Audit-Ready Analyst",
      description: "You reconcile records and totals, expose failures, and trace published outputs to governed evidence.",
    },
  ],

  reflection: [
    "What spreadsheet habit do you need to stop using after this lesson?",
    "Can you describe the grain of every data table in one sentence?",
    "Which current workbook mixes source evidence with presentation?",
    "What critical total would you reconcile before trusting its dashboard?",
    "Which transformation should become a repeatable rule instead of a manual edit?",
    "How will your blueprint make the next lesson on validation easier?",
  ],

  summary: [
    "Tidy data stores variables in columns, observations in rows, and observational units in separate tables.",
    "Row grain is the foundation of keys, duplicate checks, joins, totals, and interpretation.",
    "Wide reports and cross-tabs are useful outputs but are often poor analytical sources.",
    "Excel Tables and structured references create readable, expandable ranges.",
    "Source data should be preserved; corrections belong in documented staging rules.",
    "Transaction and reference tables separate repeated events from reusable entity descriptions.",
    "Source, Staging, Reference, Model, Audit, and Report layers give each worksheet one responsibility.",
    "Control totals reconcile counts and amounts across every consequential transformation.",
    "A refresh is not complete until current data and critical checks pass.",
    "Data lineage connects each published KPI to definitions, filters, calculations, transformations, and sources.",
    "Tidy workbook design also protects future Power BI, SQL, Python, Fabric, and AI work.",
    "The professional deliverable is not only a correct number but a repeatable, understandable system that produces it.",
  ],

  previousLesson: {
    id: "data-ai-m02-l07",
    moduleNumber: 2,
    slug: "portfolio-project-reproducible-statistical-investigation",
    title: "Portfolio Project: Reproducible Statistical Investigation",
  },
  nextLesson: null,

  lumineryGuidance: {
    message:
      "Begin with grain and architecture. Do not let formulas or formatting hide an unclear data model.",
    prompt:
      "Act as my senior Excel and data-quality reviewer. Help me define the decision, source systems, observation, table grains, primary and foreign keys, field roles, and refresh frequency. Identify wide data, merged headers, embedded totals, combined fields, manual corrections, hard-coded values, fixed ranges, inconsistent categories, hidden dependencies, and formatting-as-data. Then design Source, Staging, Reference, Model, Audit, and Report layers; propose Excel Table names, structured references, transformations, control totals, publication checks, lineage, refresh instructions, and a professional workbook blueprint.",
    coachingQuestions: [
      "What exactly does one row represent?",
      "Which field or field combination proves row uniqueness?",
      "Which values must remain unchanged from the source?",
      "Can a new valid file refresh without changing formulas or ranges?",
      "Where are mapping rules and business parameters governed?",
      "Which checks prove that every record and amount is accounted for?",
      "Can another analyst trace one report number back to its source?",
    ],
  },
};

export default lesson01;
