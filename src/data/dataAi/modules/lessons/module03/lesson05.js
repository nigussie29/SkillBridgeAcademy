const lesson05 = {
  id: "data-ai-m03-l05",
  courseId: "data-ai-foundations",
  moduleId: "data-ai-foundations-module-03",
  moduleNumber: 3,
  lessonNumber: 5,
  slug: "repeatable-data-cleaning-with-power-query",
  title: "Repeatable Data Cleaning with Power Query",
  shortTitle: "Data Cleaning with Power Query",
  subtitle:
    "Turn raw files into a documented, refreshable, and testable preparation pipeline that protects row grain, data types, business rules, and analytical meaning.",
  status: "available",
  duration: "4–5 hours",
  level: "Beginner to Professional",

  essentialQuestion:
    "How can Power Query convert changing raw data into analysis-ready tables without relying on fragile, undocumented manual cleanup?",
  bigIdea:
    "A trustworthy cleaning workflow is a sequence of named transformations with explicit inputs, types, rules, exceptions, reconciliation controls, and a repeatable refresh path.",

  whyThisLessonExists: {
    title: "Cleaning Must Be Repeatable, Not Heroic",
    introduction:
      "Analysts often receive workbooks, CSV exports, folders, and database tables containing inconsistent text, mixed types, missing values, duplicated records, wide layouts, and changing columns. Manual edits may repair today's file but cannot prove what changed or reproduce the result next month.",
    centralProblem:
      "A workbook can look clean while its process remains unsafe. Copy-and-paste steps disappear, type conversions depend on locale, new files are omitted, joins multiply rows, errors are silently replaced, and refreshes introduce unexpected categories or schema changes.",
    purpose:
      "This lesson teaches you to connect to data, profile before transforming, preserve source evidence, apply typed and named steps, normalize values, reshape tables, merge and append safely, manage errors and nulls, parameterize inputs, reconcile outputs, and publish a refreshable table with an exception trail.",
  },

  problemFirst: {
    title: "Opening Investigation: Can This Monthly Maintenance Report Be Refreshed Safely?",
    scenario:
      "Three plants send monthly maintenance files. Plant A writes priorities as High, HIGH, and H; Plant B stores dates as month/day/year text; Plant C adds a new sensor column. Some work orders repeat after export, blank robot IDs appear, and a lookup table contains two active rows for the same fault code. Leadership wants one clean table and expects next month's files to refresh with one command.",
    questions: [
      "What does one raw row represent, and what should one published row represent?",
      "Which source columns, types, keys, and allowed values are required?",
      "Which changes are deterministic transformations and which require human review?",
      "How should null, blank, error, unknown, and not-applicable values differ?",
      "Can Append or Merge change the expected row count or grain?",
      "What happens when a file, column, category, or locale changes?",
      "Which controls prove that every source row reached a published, review, or rejected outcome?",
    ],
    expectedInsight:
      "The solution is a layered pipeline: preserve raw inputs, stage and profile them, standardize schema and values, validate rules, separate exceptions, integrate reference data with relationship tests, publish a typed table, and reconcile every row and total after refresh.",
  },

  learningObjectives: [
    "Explain how Power Query separates source data from repeatable transformation logic.",
    "Connect to Excel Tables, text files, folders, and structured sources without editing raw evidence.",
    "Profile column quality, distribution, types, blanks, errors, uniqueness, and unexpected categories before cleaning.",
    "Apply explicit data types with correct locale and distinguish null, blank text, zero, error, unknown, and not applicable.",
    "Normalize text, parse dates and numbers, split and combine columns, and create conditional or custom columns.",
    "Remove duplicates only after defining the business key, duplicate rule, and retained record.",
    "Reshape wide data with Unpivot and combine compatible tables with Append.",
    "Merge lookup data while protecting relationship cardinality, row grain, and unmatched-record evidence.",
    "Use parameters, staging queries, references, dependencies, and named Applied Steps to create maintainable pipelines.",
    "Design exception tables, row-balance controls, refresh tests, and documentation for production-ready outputs.",
  ],

  prerequisiteKnowledge: [
    "Lesson 1: tidy data, source grain, Excel Tables, and workbook architecture",
    "Lesson 2: data types, validation rules, quality flags, and publication gates",
    "Lesson 3: lookup logic, keys, conditional measures, and reconciliation",
    "Lesson 4: PivotTables, filter context, analytical summaries, and refresh verification",
    "Basic Excel Tables, files, folders, and formulas",
  ],

  visualModels: [
    {
      id: "power-query-governed-pipeline",
      type: "lifecycle",
      title: "The Governed Power Query Pipeline",
      description:
        "Each layer has one responsibility so raw evidence remains intact and published data can be traced, tested, and refreshed.",
      stages: [
        {
          label: "1. Land",
          detail:
            "Connect to immutable files, tables, folders, or databases; record source, period, file name, load time, and expected schema.",
        },
        {
          label: "2. Profile",
          detail:
            "Confirm grain, keys, types, completeness, distinctness, ranges, categories, errors, and schema differences before changing values.",
        },
        {
          label: "3. Transform",
          detail:
            "Standardize types and text, reshape tables, derive fields, append compatible rows, and merge governed reference data.",
        },
        {
          label: "4. Validate",
          detail:
            "Apply quality rules, retain exception reason codes, test join cardinality, and separate PASS, REVIEW, and REJECT records.",
        },
        {
          label: "5. Publish and Refresh",
          detail:
            "Load analysis-ready tables, reconcile rows and totals, test changed files and schemas, and retain refresh evidence.",
        },
      ],
      feedback:
        "If a transformation cannot be explained, tested, and reproduced on a new file, it is not ready for an operational refresh.",
      interpretation:
        "Power Query is most valuable when its query structure communicates provenance, business rules, exceptions, and controls—not merely when it shortens a list of manual clicks.",
    },
  ],

  vocabulary: [
    { term: "Power Query", definition: "Excel and Power BI technology for connecting, transforming, combining, and refreshing data through recorded steps." },
    { term: "Query", definition: "A named sequence that reads data, applies transformations, and returns a table, value, function, or connection." },
    { term: "M language", definition: "The case-sensitive functional language used to express Power Query transformations." },
    { term: "Applied Step", definition: "A named transformation in a query whose output becomes the input to the next step." },
    { term: "Source step", definition: "The first connection to a file, table, folder, database, or other input." },
    { term: "Staging query", definition: "A query that preserves and standardizes a source before downstream business transformations." },
    { term: "Reference", definition: "A new query that starts from another query's result and continues with additional steps." },
    { term: "Duplicate", definition: "A row or entity repeated according to a declared business key and comparison rule." },
    { term: "Business key", definition: "One or more fields that identify the real-world record or entity for a defined purpose." },
    { term: "Null", definition: "Power Query's explicit representation of a missing value; it is different from empty text and zero." },
    { term: "Error value", definition: "A cell-level failure produced when a transformation cannot return a valid result." },
    { term: "Locale", definition: "Regional rules used to interpret dates, decimal separators, currencies, and text formats." },
    { term: "Data profiling", definition: "Inspection of column quality, distribution, uniqueness, statistics, errors, blanks, and categories." },
    { term: "Schema", definition: "The expected columns, names, types, order, and structural rules of a dataset." },
    { term: "Schema drift", definition: "An unplanned change to a source structure, such as an added, removed, renamed, or retyped column." },
    { term: "Append", definition: "Combining compatible tables vertically by adding rows and aligning columns by name." },
    { term: "Merge", definition: "Joining tables horizontally by matching selected key columns." },
    { term: "Cardinality", definition: "The expected relationship pattern between keys, such as one-to-one, many-to-one, or many-to-many." },
    { term: "Anti-join", definition: "A join that returns records from one side that have no matching key on the other side." },
    { term: "Pivot", definition: "Turning category values into columns while aggregating another field." },
    { term: "Unpivot", definition: "Turning repeated measurement columns into attribute-value rows to create tidy data." },
    { term: "Parameter", definition: "A named input controlling values such as folder path, reporting period, threshold, or environment." },
    { term: "Query folding", definition: "Power Query's ability to translate transformations into operations executed by the source system." },
    { term: "Refresh", definition: "Re-executing the query steps against current source data." },
    { term: "Load destination", definition: "Where query output is stored, such as a worksheet table, Data Model, or connection only." },
    { term: "Exception table", definition: "A retained output containing records that fail or require review, together with reason codes." },
    { term: "Lineage", definition: "The trace from published values back through transformations to the original source." },
    { term: "Reconciliation", definition: "Evidence that source records and additive totals are completely and correctly accounted for in outputs." },
  ],

  formulas: [
    {
      id: "completeness-rate",
      name: "Completeness rate",
      formula: "Completeness = nonblank eligible values / eligible rows",
      meaning: "Measures whether a required field is populated for the population where it should exist.",
      requirement: "Define eligible rows and treat null, empty text, whitespace, and not-applicable values intentionally.",
    },
    {
      id: "validity-rate",
      name: "Validity rate",
      formula: "Validity = values passing rule / values tested",
      meaning: "Measures agreement with a type, range, pattern, reference, or business rule.",
      requirement: "Name the rule, tested population, treatment of missing values, and effective date.",
    },
    {
      id: "uniqueness-rate",
      name: "Key uniqueness rate",
      formula: "Uniqueness = distinct valid keys / nonblank key rows",
      meaning: "Shows whether a field expected to identify records is actually unique.",
      requirement: "Use the complete business key and investigate duplicate clusters rather than deleting blindly.",
    },
    {
      id: "error-rate",
      name: "Transformation error rate",
      formula: "Error rate = rows containing a transformation error / rows processed",
      meaning: "Quantifies how often parsing or transformation logic fails.",
      requirement: "Retain error detail and do not replace errors with null until the cause is classified.",
    },
    {
      id: "match-rate",
      name: "Lookup match rate",
      formula: "Match rate = eligible left rows with valid match / eligible left rows",
      meaning: "Measures reference-data coverage after a Merge.",
      requirement: "Also test duplicate right-side keys because a high match rate does not prevent row multiplication.",
    },
    {
      id: "row-balance",
      name: "Pipeline row balance",
      formula: "Source rows = published rows + review rows + rejected rows + documented exclusions",
      meaning: "Proves that all input records have an explained outcome.",
      requirement: "Categories must be mutually exclusive and collectively exhaustive at the same row grain.",
    },
    {
      id: "duration-minutes",
      name: "Duration in minutes",
      formula: "Duration minutes = Duration.TotalMinutes(closed_at − opened_at)",
      meaning: "Creates a numeric duration after both timestamps are parsed and logically ordered.",
      requirement: "Return an exception when either value is missing, invalid, or closed_at precedes opened_at.",
    },
  ],

  workedExamples: [
    {
      id: "example-03-05-01",
      title: "Profile before cleaning",
      problem: "A 12,000-row maintenance export contains mixed dates, blank robot IDs, and unexpected priority labels. What should happen before replacements?",
      solutionSteps: [
        "Declare one row per work order and work_order_id as the candidate key.",
        "Enable column quality, distribution, and profile over the entire dataset rather than only the preview.",
        "Record row count, distinct keys, duplicate clusters, nulls, errors, min/max dates, and priority categories.",
        "Save the baseline so later steps can prove what changed.",
      ],
      answer: "Create a source-profile control table before transformation; do not start by replacing visible values.",
      interpretation: "Profiling turns cleanup from guesswork into a response to measured defects.",
    },
    {
      id: "example-03-05-02",
      title: "Convert dates with an explicit locale",
      problem: "The text 03/04/2026 means March 4 in one source but April 3 under another regional setting.",
      solutionSteps: [
        "Confirm the source's documented date convention.",
        "Use Change Type Using Locale and select Date with the correct locale.",
        "Retain parsing errors in an exception query.",
        "Test boundary dates whose day and month are both 12 or below.",
      ],
      answer: "Type conversion must include the source locale; a successful conversion is not proof that the interpretation is correct.",
      interpretation: "Silent day/month reversal can produce believable but false trends.",
    },
    {
      id: "example-03-05-03",
      title: "Normalize text without destroying evidence",
      problem: "Priority contains High, HIGH, high with spaces, and H. How should it be standardized?",
      solutionSteps: [
        "Preserve priority_raw or retain the raw staging query.",
        "Apply Text.Clean, Text.Trim, and a consistent case to remove technical variation.",
        "Map approved aliases such as H to HIGH through a small governed mapping table.",
        "Send unrecognized values to REVIEW instead of guessing.",
      ],
      answer: "Technical normalization handles case and whitespace; a governed mapping handles business synonyms.",
      interpretation: "Keeping raw and standardized values makes corrections auditable.",
    },
    {
      id: "example-03-05-04",
      title: "Unpivot monthly sensor columns",
      problem: "A table stores robot_id plus Jan_Temp, Feb_Temp, and Mar_Temp. New months create new columns and break analysis.",
      solutionSteps: [
        "Select robot_id and choose Unpivot Other Columns.",
        "Rename Attribute to month and Value to temperature_c.",
        "Parse the month field into a real date or governed period key.",
        "Validate one row per robot-month and test duplicates.",
      ],
      answer: "Transform repeated month columns into robot_id, month, and temperature_c rows.",
      interpretation: "Unpivot creates tidy structure and allows future months to flow through the same analytical design.",
    },
    {
      id: "example-03-05-05",
      title: "Protect row grain during a Merge",
      problem: "1,000 work orders become 1,080 rows after merging a fault-code lookup.",
      solutionSteps: [
        "Test fault_code uniqueness on the lookup side before the Merge.",
        "Identify duplicate lookup keys and their effective-date or status differences.",
        "Resolve the lookup to one approved record per matching key or expand the business key deliberately.",
        "Use a left anti-join to retain unmatched work orders and recheck row count after expansion.",
      ],
      answer: "The lookup violated the expected many-to-one relationship; fix cardinality before publishing.",
      interpretation: "A Merge that adds descriptive columns can still multiply facts and inflate every downstream total.",
    },
    {
      id: "example-03-05-06",
      title: "Reconcile pipeline outcomes",
      problem: "A source has 2,400 rows; 2,310 publish, 55 require review, 20 are rejected, and 10 are intentionally excluded.",
      solutionSteps: [
        "Calculate explained outcomes: 2,310 + 55 + 20 + 10 = 2,395.",
        "Compare with the 2,400 source rows.",
        "Locate the five unaccounted rows by joining source keys against the union of all outcome keys.",
        "Block publication until the missing outcomes are classified.",
      ],
      answer: "Five rows are unaccounted for, so the pipeline fails reconciliation.",
      interpretation: "A clean-looking output is incomplete when source records disappear without an explicit outcome.",
    },
  ],

  interactiveExploration: {
    title: "Power Query Pipeline Design Studio",
    description:
      "Convert three imperfect monthly maintenance files and two reference tables into one governed, refreshable analytical table.",
    instructions: [
      "Document source grain, expected schema, business key, required fields, types, and allowed categories.",
      "Create connection-only staging queries that preserve file name and source-row identifiers.",
      "Profile each source and record defects before adding cleaning steps.",
      "Standardize text and types, using explicit locale and retained raw fields where interpretation matters.",
      "Append monthly files, unpivot repeated sensor columns, and derive duration only from valid timestamps.",
      "Validate lookup key uniqueness, Merge descriptions, and create anti-join exception queries.",
      "Separate PASS, REVIEW, and REJECT outputs with reason codes.",
      "Add a new monthly file, refresh, and compare schema, counts, totals, categories, and exceptions.",
    ],
    questions: [
      "Which step first changes row count, column count, or row grain?",
      "Which transformations are technical cleanup and which encode business policy?",
      "Where could a locale or type inference silently change meaning?",
      "Can each exception be traced to source file and source row?",
      "Does each Merge preserve expected cardinality and unmatched evidence?",
      "What changes when a new file or new column arrives?",
    ],
    expectedDiscovery:
      "The safest query is layered, explicit, and testable: every transformation has a reason, every exception has a destination, and every refresh must pass the same reconciliation controls.",
  },

  realWorldApplications: [
    { field: "Manufacturing and Robotics", application: "Combine plant files, normalize device IDs and fault codes, reshape sensor exports, enrich work orders, and retain maintenance exceptions." },
    { field: "Finance", application: "Standardize account extracts, parse regional dates and currency, reconcile transactions, and preserve rejected records for review." },
    { field: "Education", application: "Combine assessment and attendance files, normalize student and course identifiers, unpivot test domains, and flag missing enrollment matches." },
    { field: "Healthcare Operations", application: "Standardize operational feeds, validate timestamps and service codes, de-identify governed fields, and retain secure quality exceptions." },
    { field: "Retail and Supply Chain", application: "Combine store files, standardize SKUs, merge supplier and product dimensions, and monitor missing or duplicated keys." },
    { field: "AI and Machine Learning", application: "Create reproducible training and scoring datasets with typed features, consistent categories, exception logs, lineage, and refresh controls." },
  ],

  aiConnection: {
    title: "Power Query Creates Governed Inputs for AI",
    explanation:
      "Models learn from the data delivered to training and scoring. Reproducible preparation prevents manual cleanup differences from becoming hidden model-version differences and supports lineage from a prediction back to source evidence.",
    example:
      "A predictive-maintenance pipeline combines monthly work orders, normalizes robot and fault identifiers, calculates validated duration, joins robot metadata, and exports both model-ready rows and an exception table. The same rules run when new plant files arrive.",
    uses: [
      "Standardize categorical values before encoding",
      "Build consistent training and inference schemas",
      "Detect missing fields and schema drift before scoring",
      "Retain data-quality indicators as monitoring evidence",
      "Document feature lineage and refresh versions",
    ],
    caution:
      "Power Query can make a process repeatable without making its assumptions correct. Imputation, exclusions, deduplication, and category mappings can introduce bias or leakage and require business and model-governance review.",
    reflectionQuestion:
      "Which cleaning rule could change a model's target, subgroup representation, or apparent accuracy without producing a technical error?",
  },

  pythonLab: {
    title: "Build a Refreshable Maintenance Pipeline in Power Query M",
    objective:
      "Create a typed, normalized, quality-controlled maintenance table while preserving source evidence and producing PASS, REVIEW, and REJECT outcomes.",
    code: `let
    Source = Excel.CurrentWorkbook(){[Name="tblMaintenanceRaw"]}[Content],

    // Preserve source evidence before business transformations.
    AddSourceRow = Table.AddIndexColumn(Source, "source_row", 1, 1, Int64.Type),

    // Apply types explicitly and use the documented source locale.
    Typed = Table.TransformColumnTypes(
        AddSourceRow,
        {
            {"work_order_id", type text},
            {"robot_id", type text},
            {"plant", type text},
            {"priority", type text},
            {"opened_at", type datetime},
            {"closed_at", type datetime},
            {"fault_code", type text}
        },
        "en-US"
    ),

    // Normalize technical text variation; retain raw input in the staging query.
    CleanText = Table.TransformColumns(
        Typed,
        {
            {"work_order_id", each if _ is null then null else Text.Upper(Text.Trim(Text.Clean(_))), type text},
            {"robot_id", each if _ is null then null else Text.Upper(Text.Trim(Text.Clean(_))), type text},
            {"plant", each if _ is null then null else Text.Upper(Text.Trim(Text.Clean(_))), type text},
            {"priority", each if _ is null then null else Text.Upper(Text.Trim(Text.Clean(_))), type text},
            {"fault_code", each if _ is null then null else Text.Upper(Text.Trim(Text.Clean(_))), type text}
        }
    ),

    // Approved aliases; unknown values remain visible for REVIEW.
    NormalizePriority = Table.TransformColumns(
        CleanText,
        {{"priority", each if _ = "H" then "HIGH" else if _ = "C" then "CRITICAL" else _, type text}}
    ),

    // A safe derived measure returns null when timestamps are incomplete or reversed.
    AddDuration = Table.AddColumn(
        NormalizePriority,
        "downtime_min",
        each if [opened_at] = null or [closed_at] = null or [closed_at] < [opened_at]
             then null
             else Duration.TotalMinutes([closed_at] - [opened_at]),
        type number
    ),

    AddQualityReason = Table.AddColumn(
        AddDuration,
        "quality_reason",
        each if [work_order_id] = null or [work_order_id] = "" then "MISSING_WORK_ORDER_ID"
             else if [robot_id] = null or [robot_id] = "" then "MISSING_ROBOT_ID"
             else if not List.Contains({"A", "B", "C"}, [plant]) then "UNKNOWN_PLANT"
             else if not List.Contains({"STANDARD", "HIGH", "CRITICAL"}, [priority]) then "UNKNOWN_PRIORITY"
             else if [opened_at] = null or [closed_at] = null then "MISSING_TIMESTAMP"
             else if [closed_at] < [opened_at] then "NEGATIVE_DURATION"
             else null,
        type text
    ),

    AddRowStatus = Table.AddColumn(
        AddQualityReason,
        "row_status",
        each if [quality_reason] = null then "PASS"
             else if List.Contains({"UNKNOWN_PLANT", "UNKNOWN_PRIORITY"}, [quality_reason]) then "REVIEW"
             else "REJECT",
        type text
    ),

    Reordered = Table.ReorderColumns(
        AddRowStatus,
        {"source_row", "work_order_id", "robot_id", "plant", "priority", "fault_code",
         "opened_at", "closed_at", "downtime_min", "row_status", "quality_reason"}
    )
in
    Reordered`,
    questions: [
      "Why is source_row added before other transformations?",
      "Which step depends on locale, and how would you test it?",
      "Why are unknown categories retained instead of replaced with a default?",
      "What is the difference between quality_reason and row_status?",
      "How would you create separate PASS, REVIEW, and REJECT reference queries?",
      "Which controls are still required before this query can be published?",
    ],
    reflectionQuestions: [
      "Which rules belong in the staging layer and which belong in a governed business layer?",
      "How will the pipeline respond to a new plant, column, priority, or file naming convention?",
      "What source-to-output evidence would allow another analyst to audit one record?",
    ],
    extension:
      "Create a fault-code reference query, verify its key uniqueness, left-merge it into the cleaned maintenance table, produce a left anti-join for unmatched codes, then add row-count and downtime-total reconciliation controls.",
  },

  guidedPractice: [
    { id: "gp-03-05-01", question: "Why should raw source values remain available?", answer: "They provide evidence, support correction and audit, and prevent standardized values from erasing what the source actually supplied." },
    { id: "gp-03-05-02", question: "What is the difference between null and empty text?", answer: "Null represents no value; empty text is a present text value of length zero. They can behave differently in filters, rules, and joins." },
    { id: "gp-03-05-03", question: "When should Unpivot be used?", answer: "When repeated measurement, period, or category columns should become attribute-value rows in a tidy table." },
    { id: "gp-03-05-04", question: "What must be tested before a many-to-one Merge?", answer: "The right-side lookup key must be unique for the intended relationship and period." },
    { id: "gp-03-05-05", question: "Why create an anti-join query?", answer: "It retains unmatched records so missing reference coverage is measured and corrected rather than silently discarded." },
    { id: "gp-03-05-06", question: "What does a successful refresh prove?", answer: "Only that the query executed; quality, schema, counts, totals, categories, exceptions, and business meaning still require validation." },
  ],

  independentPractice: [
    { id: "ip-03-05-01", difficulty: "Foundational", question: "List the minimum source contract for monthly maintenance files.", sampleAnswer: "File pattern, reporting period, row grain, required columns, names, types, business key, allowed categories, and ownership." },
    { id: "ip-03-05-02", difficulty: "Foundational", question: "Design steps to standardize plant and priority text.", sampleAnswer: "Preserve raw, Clean, Trim, normalize case, map approved aliases, retain unknown values, and validate allowed categories." },
    { id: "ip-03-05-03", difficulty: "Applied", question: "Explain how to combine identically structured monthly files from a folder.", sampleAnswer: "Filter intended files, define a sample-file transformation, preserve file metadata, combine, apply schema checks, and reconcile file and row counts." },
    { id: "ip-03-05-04", difficulty: "Applied", question: "Design an Unpivot for Jan–Dec energy columns.", sampleAnswer: "Keep equipment ID and stable descriptors, unpivot month columns, rename Attribute and Value, parse month, type energy, and test one equipment-month row." },
    { id: "ip-03-05-05", difficulty: "Analytical", question: "A Merge raises row count from 800 to 920. Diagnose it.", sampleAnswer: "Profile keys on both sides, identify duplicated right-side keys, confirm cardinality, resolve version/effective-date logic, repeat Merge, and recheck unmatched and row counts." },
    { id: "ip-03-05-06", difficulty: "Advanced", question: "Design PASS, REVIEW, and REJECT logic for maintenance records.", sampleAnswer: "Use explicit severity-ranked reason codes, mutually exclusive publication outcomes, retained source keys, exception ownership, and row-balance controls." },
    { id: "ip-03-05-07", difficulty: "Professional", question: "Write a production refresh checklist for a folder-based pipeline.", sampleAnswer: "Confirm expected files, schema, credentials, parameters, types, categories, duplicates, joins, exceptions, row balance, additive totals, output refresh time, and reviewer sign-off." },
  ],

  commonMistakes: [
    { mistake: "Cleaning the raw worksheet before importing it.", correction: "Preserve immutable source evidence and express repeatable transformations in staging and business queries." },
    { mistake: "Trusting automatic type detection.", correction: "Set types explicitly, use the correct locale, retain parsing errors, and test ambiguous values." },
    { mistake: "Replacing nulls and errors with zero.", correction: "Distinguish missing, not applicable, invalid, and true zero; preserve reason codes and review business impact." },
    { mistake: "Removing duplicates without a declared key.", correction: "Define the business key, order and survivorship rule, retain duplicate evidence, and verify the retained record." },
    { mistake: "Merging before testing lookup uniqueness.", correction: "Profile right-side keys and prove expected cardinality before expanding joined columns." },
    { mistake: "Filtering out unmatched or invalid rows silently.", correction: "Create exception and anti-join outputs with source keys, reason codes, counts, and ownership." },
    { mistake: "Treating refresh success as data-quality success.", correction: "After refresh, rerun schema, quality, category, row-balance, total, and downstream output checks." },
    { mistake: "Using unnamed or opaque steps such as Changed Type2.", correction: "Give important steps purpose-driven names and document policy choices, parameters, and expected effects." },
  ],

  discussionQuestions: [
    "When should a cleaning rule automatically correct a value, and when should it send the record to review?",
    "Which Power Query transformations belong in Excel, and which should move upstream into SQL or a governed data platform?",
    "How should teams manage a new valid category without teaching the pipeline to accept every unexpected value?",
    "Is it ever appropriate to delete duplicate rows automatically? What evidence and survivorship rule are required?",
    "How can a refreshable workflow remain understandable to a reviewer who does not know M language?",
  ],

  formativeAssessment: {
    totalPoints: 40,
    passingScore: 32,
    questions: [
      { id: "check-03-05-01", type: "architecture", points: 5, prompt: "Describe a five-layer Power Query pipeline.", sampleAnswer: "Land, profile, transform, validate, and publish/refresh, with raw evidence and exception outputs retained." },
      { id: "check-03-05-02", type: "types", points: 5, prompt: "Explain why explicit type and locale are required.", sampleAnswer: "Automatic inference may misread dates, decimals, and currency; locale makes parsing rules reproducible and testable." },
      { id: "check-03-05-03", type: "missingness", points: 5, prompt: "Distinguish null, blank text, zero, error, and not applicable.", sampleAnswer: "They represent absent value, empty string, valid numeric zero, failed computation/parsing, and a field outside the row's meaning; they require different rules." },
      { id: "check-03-05-04", type: "reshape", points: 5, prompt: "Explain why and how to unpivot monthly measurement columns.", sampleAnswer: "Unpivot converts repeated month columns into month-value rows, producing tidy structure that scales across periods." },
      { id: "check-03-05-05", type: "integration", points: 5, prompt: "List four controls for a safe Merge.", sampleAnswer: "Normalize key types/values, test right-key uniqueness, declare cardinality, retain unmatched rows with anti-join, and reconcile row count; any four earn full credit." },
      { id: "check-03-05-06", type: "exceptions", points: 5, prompt: "Design an exception table.", sampleAnswer: "Retain source ID/file/row, raw values, rule ID, reason, severity, status, owner, timestamps, and resolution while preserving row grain." },
      { id: "check-03-05-07", type: "reconciliation", points: 5, prompt: "State and apply the row-balance formula.", sampleAnswer: "Source = published + review + rejected + documented exclusions; all categories share the same grain and do not overlap." },
      { id: "check-03-05-08", type: "refresh", points: 5, prompt: "List six post-refresh validation checks.", sampleAnswer: "Files, schema, row count, key uniqueness, types/errors, categories, join matches, exceptions, additive totals, and downstream outputs; any six earn full credit." },
    ],
  },

  researchExtension: {
    title: "Manual Cleaning versus Governed Refresh Study",
    researchQuestion:
      "How do accuracy, traceability, effort, and defect detection differ between manual spreadsheet cleaning and a governed Power Query pipeline across repeated monthly files?",
    applicationOptions: [
      "Maintenance work orders",
      "Financial transactions",
      "Student attendance",
      "Healthcare operations",
      "Supply-chain orders",
      "AI training-data preparation",
    ],
    task:
      "Process the same three imperfect files manually and through Power Query. Add a fourth file containing schema drift, new categories, duplicated keys, and parsing errors; compare outcomes and recommend a controlled production method.",
    requiredEvidence: [
      "Source contract and declared grain",
      "Baseline data profile and defect inventory",
      "Manual procedure and measured time",
      "Power Query dependency design and named steps",
      "Exception, anti-join, and duplicate evidence",
      "Row and additive-total reconciliation",
      "Refresh stress test with changed file",
      "Accuracy, auditability, maintainability, and limitation analysis",
    ],
  },

  portfolioArtifact: {
    title: "Lesson 5 Portfolio Evidence: Governed Power Query Pipeline",
    description:
      "Extend the Module 3 workbook with a refreshable, documented preparation pipeline that transforms raw maintenance files into analytical and exception outputs.",
    requiredSections: [
      "Business purpose, source owner, grain, business key, and source contract",
      "Raw, staging, reference, business-rule, exception, and published query architecture",
      "Before-cleaning profile and defect inventory",
      "Type, locale, normalization, reshape, Append, and Merge decisions",
      "Quality rules, reason codes, and PASS/REVIEW/REJECT publication policy",
      "Parameters, dependencies, load destinations, and refresh instructions",
      "Schema-drift, duplicate, anti-join, and error controls",
      "Row-count, key, and additive-total reconciliation",
    ],
    requiredEvidence: [
      "At least three raw monthly inputs",
      "Connection-only staging queries",
      "One Append and one Unpivot transformation",
      "One validated many-to-one Merge",
      "One anti-join exception output",
      "A quality-reason and row-status field",
      "A refresh test using a changed or new file",
      "A control sheet showing source and outcome balances",
    ],
  },

  growthIndicators: [
    { title: "Query Builder", description: "You convert manual edits into named, typed, repeatable transformations." },
    { title: "Schema Guardian", description: "You detect source, type, category, key, and structure changes before they reach reports." },
    { title: "Integration Auditor", description: "You protect grain during Append and Merge and retain unmatched and duplicated-key evidence." },
    { title: "Refresh Engineer", description: "You parameterize sources, manage dependencies, reconcile outputs, and test changed inputs." },
  ],

  reflection: [
    "Which recurring manual cleanup should become a Power Query step first?",
    "Where could automatic type detection or locale silently change meaning?",
    "Which raw value must remain available after standardization?",
    "What Merge in your workbook needs a cardinality test?",
    "Which filtered-out records need an exception table instead?",
    "What change to a future source file is most likely to break the pipeline?",
  ],

  summary: [
    "Power Query records a repeatable transformation pipeline; it does not justify the business rules by itself.",
    "Preserve raw evidence and separate source, staging, validation, exception, and published responsibilities.",
    "Profile grain, keys, types, blanks, errors, categories, ranges, and schema before cleaning.",
    "Set types explicitly and use the source's documented locale.",
    "Null, blank text, zero, error, unknown, and not applicable have different meanings.",
    "Normalize technical variation first; apply governed mappings for business synonyms and retain unknowns for review.",
    "Unpivot repeated measurement columns to create tidy, scalable data.",
    "Append adds rows; Merge adds columns, but either operation can expose schema or grain problems.",
    "Test lookup-key uniqueness and relationship cardinality before expanding Merge results.",
    "Use anti-joins and exception tables so unmatched or invalid records never disappear silently.",
    "Parameters, references, named steps, and clear dependencies improve maintainability.",
    "A successful refresh is complete only after schema, quality, reconciliation, and downstream checks pass.",
  ],

  previousLesson: {
    id: "data-ai-m03-l04",
    moduleNumber: 3,
    slug: "pivottables-pivotcharts-and-analytical-summaries",
    title: "PivotTables, PivotCharts, and Analytical Summaries",
  },
  nextLesson: null,

  lumineryGuidance: {
    message:
      "Build a pipeline another analyst can refresh, inspect, and challenge. Preserve raw evidence, name every rule, retain exceptions, and reconcile every outcome.",
    prompt:
      "Act as my senior Power Query and data-quality reviewer. Help me define source grain, business key, schema, types, locale, allowed values, duplicate policy, missing-value policy, and publication rules. Design raw, staging, reference, transform, exception, and published queries; plan Append, Unpivot, and Merge steps; test lookup cardinality and unmatched records; add parameters, lineage, refresh controls, reason codes, row balance, and additive-total reconciliation. Then review the workflow for schema drift, bias, leakage, maintainability, and production readiness.",
    coachingQuestions: [
      "What does one source row mean, and what should one output row mean?",
      "Which step first changes the schema, row count, or row grain?",
      "Which transformations are technical cleanup and which encode business policy?",
      "What evidence is retained for nulls, errors, duplicates, unmatched keys, and exclusions?",
      "Does every Merge preserve expected cardinality?",
      "What new file, column, category, or locale would break this refresh?",
      "Do all source rows and additive totals reconcile to explained outcomes?",
    ],
  },
};

export default lesson05;
