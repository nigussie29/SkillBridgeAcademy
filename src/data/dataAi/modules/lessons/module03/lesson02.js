const lesson02 = {
  id: "data-ai-m03-l02",
  courseId: "data-ai-foundations",
  moduleId: "data-ai-foundations-module-03",
  moduleNumber: 3,
  lessonNumber: 2,
  slug: "validation-data-types-and-quality-flags",
  title: "Validation, Data Types, and Quality Flags",
  shortTitle: "Validation and Quality Flags",
  subtitle:
    "Turn business rules into visible Excel controls that prevent bad input, identify exceptions, and protect every downstream calculation.",
  status: "available",
  duration: "3–4 hours",
  level: "Beginner to Professional",

  essentialQuestion:
    "How can a workbook detect invalid, incomplete, inconsistent, duplicated, or unmatched data before those problems become misleading results?",
  bigIdea:
    "Data quality becomes manageable when each field has an explicit type and rule, each row receives traceable flags, every exception has an owner and disposition, and critical failures block publication.",

  whyThisLessonExists: {
    title: "A Correct Formula Cannot Rescue Invalid Inputs",
    introduction:
      "A well-structured workbook can still fail if dates arrive as text, identifiers lose leading zeros, categories drift, required values are blank, numeric fields contain symbols, or records do not match reference tables. These problems often remain invisible until a decision is already made.",
    centralProblem:
      "Spreadsheet users frequently rely on visual inspection, cell color, or a few spot checks. Excel may display text and numbers similarly, accept impossible dates, treat blanks inconsistently, or calculate with partially invalid rows. A green dashboard can therefore summarize red-quality data.",
    purpose:
      "This lesson teaches you to define a data-quality contract, assign correct logical types, prevent invalid input with Data Validation, detect existing problems with formulas and Power Query logic, summarize quality by dimension, manage exceptions, and use an auditable readiness gate before refreshing reports.",
  },

  problemFirst: {
    title: "Opening Investigation: Can This Maintenance File Be Published?",
    scenario:
      "The robot-maintenance workbook now uses tidy Excel Tables, but the newest source file contains work order WO-104 twice, a robot ID that does not exist in the robot table, opened_at values stored as both dates and text, downtime values of -8 and 1,440 minutes, blank fault codes, status values Closed, closed, Complete, and C, and a record whose closed_at occurs before opened_at. The dashboard refreshed without displaying an error.",
    questions: [
      "Which problems are structural, semantic, referential, temporal, or business-rule violations?",
      "Which values should be prevented during entry and which must be flagged after import?",
      "What is the intended logical type of each field?",
      "Which blanks mean missing, not applicable, not yet known, or intentionally withheld?",
      "Should an unusual but possible 1,440-minute downtime be rejected automatically?",
      "Who decides whether an exception is corrected, accepted, or excluded?",
      "Which failures must block publication of the dashboard?",
    ],
    expectedInsight:
      "Validation needs layered rules. Some values are objectively invalid, some are incomplete, some violate relationships or time order, and some are merely unusual. The workbook should preserve source values, calculate separate reason-specific flags, route exceptions for review, and publish only when critical checks pass.",
  },

  learningObjectives: [
    "Create a data-quality contract containing field definitions, logical types, allowed values, null rules, uniqueness, relationships, ranges, and ownership.",
    "Distinguish text, whole number, decimal, date, date-time, Boolean, category, identifier, and free-text fields.",
    "Prevent invalid manual entry with Excel Data Validation lists, limits, dates, and custom formulas.",
    "Detect imported quality problems with structured-reference formulas and Power Query-compatible rules.",
    "Build separate completeness, validity, uniqueness, consistency, timeliness, and referential-integrity flags.",
    "Differentiate invalid values from unusual but potentially valid observations.",
    "Create row-level issue codes, severity, review status, owner, and resolution evidence.",
    "Summarize quality metrics by source, plant, period, and field without hiding concentrated defects.",
    "Implement a calculated publication gate and reproduce the validation logic in pandas.",
  ],

  prerequisiteKnowledge: [
    "Lesson 1: tidy data, row grain, keys, workbook layers, and reconciliation",
    "Excel Tables and structured references",
    "Basic IF, AND, OR, COUNTIF, COUNTIFS, and XLOOKUP concepts",
    "The difference between source, staging, audit, and report layers",
    "Basic pandas is helpful for the optional cross-check lab",
  ],

  visualModels: [
    {
      id: "data-quality-gate",
      type: "lifecycle",
      title: "The Data-Quality Gate",
      description:
        "Validation is a controlled flow from agreed rules to tested data, resolved exceptions, and a publication decision.",
      stages: [
        {
          label: "1. Define",
          detail:
            "Specify field meaning, logical type, format, unit, allowed values, required status, key role, relationships, range, and owner.",
        },
        {
          label: "2. Prevent",
          detail:
            "Use source-system controls and Excel Data Validation to reduce invalid manual entry without pretending prevention is perfect.",
        },
        {
          label: "3. Detect",
          detail:
            "Calculate reason-specific row flags for completeness, validity, uniqueness, consistency, timeliness, and reference matches.",
        },
        {
          label: "4. Resolve",
          detail:
            "Assign severity, owner, disposition, correction evidence, and approval while preserving the original source value.",
        },
        {
          label: "5. Publish and Monitor",
          detail:
            "Release reports only when critical checks pass; trend defect rates by field, source, group, and refresh cycle.",
        },
      ],
      feedback:
        "New defects should update the contract, prevention controls, detection rules, training, and source-system improvement plan.",
      interpretation:
        "A quality flag is useful only when it has a precise rule, an accountable response, and a defined effect on publication.",
    },
  ],

  vocabulary: [
    { term: "Data-quality contract", definition: "An agreed specification for field meaning, type, allowed values, nulls, keys, relationships, rules, thresholds, owners, and actions." },
    { term: "Logical data type", definition: "The business meaning of a field as text, number, date, Boolean, category, identifier, or another defined type." },
    { term: "Physical data type", definition: "The type actually stored by the software, which may not match the intended logical type." },
    { term: "Identifier", definition: "A code used to distinguish an entity or event; it is usually treated as text even when it contains only digits." },
    { term: "Categorical field", definition: "A field whose values belong to a controlled set of labels or codes." },
    { term: "Domain", definition: "The complete set of values allowed for a field under the business definition." },
    { term: "Constraint", definition: "A rule that restricts permitted data, such as required, unique, positive, or member of an approved list." },
    { term: "Data Validation", definition: "An Excel feature that limits or guides permitted manual input using lists, ranges, dates, numbers, or custom formulas." },
    { term: "Completeness", definition: "The degree to which required values are present for the intended use." },
    { term: "Validity", definition: "The degree to which values conform to their defined type, format, domain, range, and business rules." },
    { term: "Uniqueness", definition: "The degree to which records expected to be distinct have nonduplicated keys." },
    { term: "Consistency", definition: "The degree to which related values agree across fields, rows, tables, systems, or time." },
    { term: "Referential integrity", definition: "The requirement that each foreign key matches an existing approved key in its reference table, unless null is explicitly allowed." },
    { term: "Timeliness", definition: "The degree to which data are current and available within the decision's required time window." },
    { term: "Accuracy", definition: "The degree to which a value correctly represents the real-world fact; it usually requires authoritative comparison or verification." },
    { term: "Quality flag", definition: "A calculated indicator that records whether a specific rule passed, failed, or requires review." },
    { term: "Issue code", definition: "A stable label such as DQ_REQUIRED_01 that identifies the exact rule violated." },
    { term: "Severity", definition: "The defined consequence level of a defect, such as critical, high, medium, or informational." },
    { term: "Exception", definition: "A value or record that fails a rule or requires documented human judgment." },
    { term: "Disposition", definition: "The approved outcome of an exception: corrected, accepted, excluded, deferred, or escalated." },
    { term: "Quarantine", definition: "A controlled area for records that cannot enter trusted outputs until they are resolved." },
    { term: "Null", definition: "The absence of a value, which must not be confused with zero, empty text, false, unknown, or not applicable." },
    { term: "Outlier", definition: "An unusually distant observation that may be valid, erroneous, or decision-critical and therefore requires investigation." },
    { term: "Publication gate", definition: "A calculated rule that blocks or allows decision-facing outputs according to current critical quality checks." },
  ],

  formulas: [
    {
      id: "completeness-rate",
      name: "Completeness rate",
      formula: "Completeness = nonblank required values / expected required values",
      meaning: "Measures the presence of information required for a defined use.",
      requirement: "Define requiredness by process state; a field may be optional when opened but required when closed.",
    },
    {
      id: "validity-rate",
      name: "Validity rate",
      formula: "Validity = values passing rule / values tested",
      meaning: "Summarizes conformance to type, domain, format, range, or business rules.",
      requirement: "Publish the rule version and denominator; do not combine unrelated rules into one unexplained percentage.",
    },
    {
      id: "uniqueness-rate",
      name: "Key uniqueness rate",
      formula: "Uniqueness = distinct required keys / nonblank key rows",
      meaning: "Tests whether the proposed key identifies rows at the declared grain.",
      requirement: "Investigate every duplicate group; a high percentage can still hide a critical duplicated transaction.",
    },
    {
      id: "defect-rate",
      name: "Row defect rate",
      formula: "Defect rate = rows with at least one failed rule / rows tested",
      meaning: "Shows how widely quality problems affect records.",
      requirement: "Also report total defects and defects by rule because one row may fail several checks.",
    },
    {
      id: "excel-type-range-flag",
      name: "Excel numeric range flag",
      formula: '=IF(AND(ISNUMBER([@downtime_min]),[@downtime_min]>=0,[@downtime_min]<=1440),"PASS","FAIL")',
      meaning: "Checks that downtime is physically stored as a number within the approved daily range.",
      requirement: "A boundary of 1,440 may still be operationally unusual; use a separate review flag for plausible extremes.",
    },
    {
      id: "excel-reference-flag",
      name: "Excel reference-match flag",
      formula: '=IF(COUNTIF(tblRobots[robot_id],[@robot_id])=1,"PASS","UNMATCHED")',
      meaning: "Checks whether each work-order robot identifier exists exactly once in the governed robot table.",
      requirement: "Test the reference table's own key uniqueness first; otherwise a match count above one reveals a separate defect.",
    },
    {
      id: "publication-gate",
      name: "Critical publication gate",
      formula: '=IF(COUNTIFS(tblIssues[severity],"Critical",tblIssues[resolution_status],"<>Resolved")=0,"READY","BLOCKED")',
      meaning: "Prevents publication while any unresolved critical issue remains.",
      requirement: "Protect the rule, show the refresh timestamp, retain issue evidence, and require an authorized override process.",
    },
  ],

  workedExamples: [
    {
      id: "example-03-02-01",
      title: "Store an identifier as text",
      problem: "A plant code is 00417, but Excel displays 417 after import. Should the field be numeric?",
      solutionSteps: [
        "Ask whether arithmetic on the code has business meaning.",
        "Recognize that leading zeros are part of the identifier.",
        "Define the logical type as text with a five-character pattern.",
        "Preserve the source value and standardize only through an approved rule.",
      ],
      answer: "Store plant_code as text and validate the five-character domain or pattern.",
      interpretation: "Digits do not automatically make a field numeric; identifiers name things rather than measure quantities.",
    },
    {
      id: "example-03-02-02",
      title: "Distinguish blank, zero, and not applicable",
      problem: "A closed work order has blank downtime_min. Can it be converted to zero?",
      solutionSteps: [
        "Check the contract: downtime is required when status is Closed.",
        "A blank means the value is missing; zero means a measured absence of downtime.",
        "Flag the row as DQ_REQUIRED_DOWNTIME rather than silently imputing zero.",
        "Route the record to the process owner for verification.",
      ],
      answer: "No. Keep the source blank, flag it, and correct it only from authoritative evidence.",
      interpretation: "Replacing missing values with zero changes the meaning and biases totals and averages.",
    },
    {
      id: "example-03-02-03",
      title: "Create a conditional date rule",
      problem: "A row has opened_at = 2026-09-18 14:00 and closed_at = 2026-09-18 11:30.",
      solutionSteps: [
        "Confirm both fields were parsed as date-times rather than text.",
        "Apply the rule closed_at must be blank for open work or greater than or equal to opened_at for closed work.",
        "Set temporal_flag = FAIL and issue_code = DQ_TIME_ORDER_01.",
        "Do not swap the dates automatically without source evidence.",
      ],
      answer: "The record fails temporal consistency because the close time precedes the open time.",
      interpretation: "Fields can be individually valid dates while their relationship is impossible.",
    },
    {
      id: "example-03-02-04",
      title: "Normalize categories without erasing the source",
      problem: "Status contains Closed, closed, Complete, and C, all intended to mean the same approved status.",
      solutionSteps: [
        "Preserve status_raw exactly as received.",
        "Create a governed status mapping table with source_value, standard_value, owner, and effective date.",
        "Map recognized variants to Closed in staging.",
        "Flag any unmapped value as DQ_STATUS_DOMAIN_01.",
      ],
      answer: "Use an owned mapping table to create status_standard while retaining status_raw.",
      interpretation: "A repeatable mapping supports refresh, audit, and controlled changes better than nested ad hoc formulas.",
    },
    {
      id: "example-03-02-05",
      title: "Separate impossible values from unusual values",
      problem: "Most downtime is under 120 minutes. One record has -8 and another has 1,440.",
      solutionSteps: [
        "Downtime below zero violates the physical domain and receives a FAIL flag.",
        "A 1,440-minute shutdown is within the defined maximum but is operationally extreme.",
        "Keep 1,440 in the trusted data if confirmed, but assign REVIEW_EXTREME.",
        "Report both validity and review counts separately.",
      ],
      answer: "Reject or correct -8; investigate 1,440 without deleting it solely for being unusual.",
      interpretation: "Validation enforces definitions; anomaly review protects rare but valid and important events.",
    },
    {
      id: "example-03-02-06",
      title: "Calculate a quality gate",
      problem: "An audit finds 2 unresolved critical issues, 7 high issues, and 31 medium issues. The critical threshold is zero.",
      solutionSteps: [
        "Count unresolved issues by severity using the issue table.",
        "Compare the critical count with its threshold of zero.",
        "Return BLOCKED even if overall validity is 99.5%.",
        "Display affected rules, owners, age, and required action.",
      ],
      answer: "Publication status = BLOCKED until both critical issues are resolved or formally overridden.",
      interpretation: "Averages can hide high-consequence defects; severity-aware gates protect the decision.",
    },
  ],

  interactiveExploration: {
    title: "Design the Data-Quality Contract",
    description:
      "Translate the maintenance process into field-level rules before writing any validation formula.",
    instructions: [
      "Choose ten fields from the work-order and robot tables.",
      "For each field, document definition, logical type, storage type, format, unit, allowed null state, domain or range, and owner.",
      "Mark key, required, relationship, temporal, and cross-field rules.",
      "Assign a stable issue code and severity to every failed rule.",
      "Decide whether the control prevents entry, detects an imported problem, or both.",
      "Define the disposition options and evidence required to resolve an exception.",
      "Specify which unresolved conditions block the dashboard and which only create a warning.",
    ],
    questions: [
      "Does the rule test syntax, business meaning, or real-world accuracy?",
      "Could a value pass its field rule but fail a relationship or time-order rule?",
      "What is the correct denominator for the quality metric?",
      "Could a high overall pass rate conceal one failing plant or source file?",
      "Which rules can be automated and which require accountable human judgment?",
      "How will a rule change be versioned and communicated?",
    ],
    expectedDiscovery:
      "A quality contract is more than a list of Excel formulas. It connects business meaning, technical tests, severity, responsibility, resolution, measurement, and publication consequences.",
  },

  realWorldApplications: [
    { field: "Manufacturing and Robotics", application: "Validate robot identifiers, sensor ranges, fault domains, time order, maintenance status, parts usage, and work-order references before reliability reporting." },
    { field: "Finance", application: "Control account codes, transaction dates, currencies, signs, duplicate payments, approval status, and reconciliation exceptions before close." },
    { field: "Education", application: "Check student identifiers, course enrollment, score ranges, assessment dates, missing grades, duplicate submissions, and authorized code lists." },
    { field: "Healthcare Operations", application: "Validate encounter identifiers, procedure codes, date order, required documentation, provider references, and privacy-safe exception workflows." },
    { field: "Retail and Supply Chain", application: "Test SKU and supplier references, quantities, prices, units, delivery dates, inventory balances, and duplicate purchase lines." },
    { field: "Machine Learning and AI", application: "Validate feature types, target domains, entity keys, time windows, missingness, label consistency, and training-serving schema alignment." },
  ],

  aiConnection: {
    title: "Data Validation Is the First Model-Control Layer",
    explanation:
      "Models learn patterns from the values they receive, including defects. Mixed types can silently drop rows, category drift can create unknown encodings, unmatched keys can lose entities, duplicates can overweight cases, and impossible time order can create target leakage.",
    example:
      "A predictive-maintenance model expects downtime_min as a nonnegative decimal, plant as an approved category, robot_id as text, and one row per robot-day. A new source sends 'N/A' as text in downtime and duplicates robot-days. Schema and grain checks should stop scoring before predictions are published.",
    uses: [
      "Enforce consistent training, validation, scoring, and monitoring schemas",
      "Track missingness and category drift before model performance degrades",
      "Prevent duplicate entities from distorting training weights and metrics",
      "Block leakage-producing timestamps and future information",
      "Create machine-readable data contracts for pipelines and APIs",
    ],
    caution:
      "Passing validation proves conformance to written rules, not truth, fairness, representativeness, or fitness for every AI decision. Those require additional evidence.",
    reflectionQuestion:
      "Which model error could look like an algorithm problem but actually begin as an unvalidated data-type or key defect?",
  },

  pythonLab: {
    title: "Build a Reason-Specific Data-Quality Report",
    objective:
      "Validate a small maintenance dataset, preserve raw values, create separate flags and issue codes, summarize quality, and enforce a critical publication gate.",
    code: `import pandas as pd
from io import StringIO

csv = StringIO("""work_order_id,robot_id,opened_at,closed_at,status,downtime_min
WO-101,R-101,2026-09-18 08:00,2026-09-18 09:00,Closed,60
WO-102,R-102,2026-09-18 10:00,2026-09-18 11:30,closed,90
WO-103,R-999,2026-09-18 12:00,2026-09-18 13:00,Complete,60
WO-104,R-103,2026-09-18 14:00,2026-09-18 11:30,C,-8
WO-104,R-103,not-a-date,,Open,1440
WO-105,R-102,2026-09-19 08:00,2026-09-19 08:30,Closed,
""")

raw = pd.read_csv(csv, dtype="string")
data = raw.copy()

valid_robots = {"R-101", "R-102", "R-103"}
status_map = {
    "closed": "Closed",
    "complete": "Closed",
    "c": "Closed",
    "open": "Open",
}

# Parse into new typed columns; never overwrite the raw evidence.
data["opened_at_typed"] = pd.to_datetime(data["opened_at"], errors="coerce")
data["closed_at_typed"] = pd.to_datetime(data["closed_at"], errors="coerce")
data["downtime_min_typed"] = pd.to_numeric(data["downtime_min"], errors="coerce")
data["status_standard"] = data["status"].str.strip().str.lower().map(status_map)

# Reason-specific flags.
data["key_flag"] = data["work_order_id"].notna() & ~data["work_order_id"].duplicated(False)
data["robot_flag"] = data["robot_id"].isin(valid_robots)
data["opened_type_flag"] = data["opened_at_typed"].notna()
data["status_flag"] = data["status_standard"].notna()
data["downtime_required_flag"] = ~(
    data["status_standard"].eq("Closed") & data["downtime_min_typed"].isna()
)
data["downtime_range_flag"] = data["downtime_min_typed"].between(0, 1440, inclusive="both")
data["time_order_flag"] = (
    data["closed_at_typed"].isna()
    | data["opened_at_typed"].isna()
    | data["closed_at_typed"].ge(data["opened_at_typed"])
)
data["extreme_review_flag"] = data["downtime_min_typed"].gt(480)

critical_flags = [
    "key_flag",
    "robot_flag",
    "opened_type_flag",
    "status_flag",
    "downtime_required_flag",
    "downtime_range_flag",
    "time_order_flag",
]

data["critical_issue_count"] = (~data[critical_flags]).sum(axis=1)
data["row_status"] = data["critical_issue_count"].map(
    lambda n: "BLOCKED" if n > 0 else "PASS"
)

# Long issue register: one row per failed rule.
issue_codes = {
    "key_flag": "DQ_KEY_UNIQUE_01",
    "robot_flag": "DQ_ROBOT_REFERENCE_01",
    "opened_type_flag": "DQ_OPENED_TYPE_01",
    "status_flag": "DQ_STATUS_DOMAIN_01",
    "downtime_required_flag": "DQ_DOWNTIME_REQUIRED_01",
    "downtime_range_flag": "DQ_DOWNTIME_RANGE_01",
    "time_order_flag": "DQ_TIME_ORDER_01",
}

issues = []
for flag, code in issue_codes.items():
    failed = data.loc[~data[flag], ["work_order_id", "robot_id"]]
    for row in failed.itertuples(index=False):
        issues.append({
            "work_order_id": row.work_order_id,
            "robot_id": row.robot_id,
            "issue_code": code,
            "severity": "Critical",
            "resolution_status": "Open",
        })

issue_register = pd.DataFrame(issues)
quality_summary = pd.DataFrame({
    "rule": critical_flags,
    "tested_rows": len(data),
    "passed_rows": [int(data[col].sum()) for col in critical_flags],
})
quality_summary["pass_rate"] = (
    quality_summary["passed_rows"] / quality_summary["tested_rows"]
)

publication_status = (
    "READY" if issue_register.empty else "BLOCKED"
)

print("Publication status:", publication_status)
print("\\nQuality summary:\\n", quality_summary.to_string(index=False))
print("\\nIssue register:\\n", issue_register.to_string(index=False))
print("\\nRow status:\\n", data[["work_order_id", "row_status", "critical_issue_count"]].to_string(index=False))

assert publication_status == "BLOCKED"
assert len(issue_register) == int(data["critical_issue_count"].sum())
assert (quality_summary["pass_rate"].between(0, 1)).all()`,
    questions: [
      "Why are parsed values stored in new columns instead of overwriting the raw fields?",
      "Which rows fail uniqueness, reference, type, requiredness, range, and time-order rules?",
      "Why does duplicated(False) mark both copies of WO-104?",
      "Why is extreme_review_flag separate from downtime_range_flag?",
      "What is the difference between the wide row flags and the long issue register?",
      "Which conditions must change before publication_status becomes READY?",
    ],
    reflectionQuestions: [
      "Which rules could prevent bad input in Excel and which are mainly post-import detection controls?",
      "How would you assign owner, due date, correction evidence, and approval to each issue?",
      "How should quality results be compared across plants with different row counts?",
    ],
    extension:
      "Add source_system and plant fields, summarize pass rates and issue counts by both fields, create severity-specific thresholds, and export Raw, Validated, Issues, Quality_Summary, and Publication_Gate worksheets.",
  },

  guidedPractice: [
    { id: "gp-03-02-01", question: "Why should a numeric-looking ID be stored as text?", answer: "Arithmetic has no meaning for an identifier, and leading zeros or fixed patterns may be significant." },
    { id: "gp-03-02-02", question: "What is the difference between validity and accuracy?", answer: "Validity means conformance to rules; accuracy means correspondence to the real-world fact and usually needs authoritative verification." },
    { id: "gp-03-02-03", question: "Why should duplicate-key checks mark every row in a duplicate group?", answer: "Every copy participates in the unresolved ambiguity; keeping only the first as apparently valid can hide the problem." },
    { id: "gp-03-02-04", question: "When is a blank not equivalent to zero?", answer: "When the value is unknown, missing, not yet collected, not applicable, or withheld rather than a measured quantity of zero." },
    { id: "gp-03-02-05", question: "Why separate a range failure from an extreme-value review?", answer: "A range failure violates the contract; an extreme value may be valid and important but requires confirmation." },
    { id: "gp-03-02-06", question: "What makes a publication gate auditable?", answer: "Explicit rules and thresholds, current test results, timestamps, issue evidence, ownership, resolution records, and controlled overrides." },
  ],

  independentPractice: [
    { id: "ip-03-02-01", difficulty: "Foundational", question: "Assign logical types to order_id, order_date, quantity, unit_price, shipped, status, and notes.", sampleAnswer: "Text identifier, date, whole number, decimal/currency, Boolean, controlled category, and free text." },
    { id: "ip-03-02-02", difficulty: "Foundational", question: "Write Excel Data Validation rules for quantity and status.", sampleAnswer: "Quantity: whole number >= 0 within an approved maximum; status: list linked to a governed status table." },
    { id: "ip-03-02-03", difficulty: "Applied", question: "Create four quality flags for an invoice table.", sampleAnswer: "Unique invoice-line key, valid account reference, positive amount or approved credit logic, and invoice date within the open period." },
    { id: "ip-03-02-04", difficulty: "Applied", question: "Design an issue register with at least eight columns.", sampleAnswer: "Record key, issue code, rule version, field, raw value, severity, detected time, owner, status, disposition, evidence, and resolved time." },
    { id: "ip-03-02-05", difficulty: "Analytical", question: "Explain how a 99% pass rate could still require blocking publication.", sampleAnswer: "The failing 1% may contain critical duplicate payments, missing keys, or invalid dates that materially affect the decision." },
    { id: "ip-03-02-06", difficulty: "Advanced", question: "Design a quality scorecard that prevents large sources from hiding small-source failures.", sampleAnswer: "Show counts and rates by rule, field, source, group, and period; include severity, trends, thresholds, and minimum denominators." },
    { id: "ip-03-02-07", difficulty: "Professional", question: "Write a publication policy for a decision-critical workbook.", sampleAnswer: "Define critical rules, thresholds, refresh currency, approvers, override authority, evidence, expiry, communication, rollback, and post-publication monitoring." },
  ],

  commonMistakes: [
    { mistake: "Formatting a cell as Date and assuming its value is a real date.", correction: "Test or parse the physical value; formatting changes appearance, not necessarily storage type." },
    { mistake: "Using Data Validation as the only control.", correction: "Imported, pasted, legacy, and formula-generated values still require calculated detection checks." },
    { mistake: "Replacing every blank with zero or Unknown.", correction: "Preserve null meaning and use explicit reason codes or business-state rules." },
    { mistake: "Deleting duplicates without understanding their cause.", correction: "Define the grain, inspect the full duplicate group, and resolve using authoritative evidence." },
    { mistake: "Treating every outlier as invalid.", correction: "Separate impossible values from rare but plausible observations and retain confirmed severe events." },
    { mistake: "Combining all defects into one flag.", correction: "Keep reason-specific flags and issue codes so users can diagnose, own, and resolve each rule." },
    { mistake: "Reporting one overall quality percentage.", correction: "Break quality down by rule, severity, field, source, group, and period and apply publication thresholds." },
  ],

  discussionQuestions: [
    "Who has authority to define a valid value when business teams disagree?",
    "Should analysts ever correct source values, or only create governed standardized values?",
    "When should a quality issue block publication versus appear as a disclosed limitation?",
    "How can teams avoid punishing people or sources merely because transparent controls reveal more defects?",
    "What quality dimensions matter most for high-stakes AI decisions?",
  ],

  formativeAssessment: {
    totalPoints: 40,
    passingScore: 32,
    questions: [
      { id: "check-03-02-01", type: "types", points: 5, prompt: "Explain logical versus physical data type using a date example.", sampleAnswer: "The business meaning is date, but the stored value may be text; display formatting alone does not convert or validate it." },
      { id: "check-03-02-02", type: "nulls", points: 5, prompt: "Explain why blank, zero, false, unknown, and not applicable are different.", sampleAnswer: "They represent absence, measured zero, Boolean state, unavailable knowledge, and inapplicability; combining them changes analysis meaning." },
      { id: "check-03-02-03", type: "dimensions", points: 5, prompt: "Define completeness, validity, uniqueness, consistency, referential integrity, and timeliness.", sampleAnswer: "Presence, rule conformance, distinct required keys, agreement, valid foreign-key matches, and currency/availability." },
      { id: "check-03-02-04", type: "excel", points: 5, prompt: "Write a structured-reference rule for a nonnegative numeric quantity.", sampleAnswer: '=IF(AND(ISNUMBER([@quantity]),[@quantity]>=0),"PASS","FAIL")' },
      { id: "check-03-02-05", type: "relationships", points: 5, prompt: "Why test both foreign-key matches and reference-table key uniqueness?", sampleAnswer: "A match is trustworthy only when the reference key exists once; zero matches are unmatched and multiple matches are ambiguous." },
      { id: "check-03-02-06", type: "exceptions", points: 5, prompt: "List six fields required in an exception register.", sampleAnswer: "Record key, issue code, rule version, severity, owner, status, disposition, evidence, and timestamps; any six earn full credit." },
      { id: "check-03-02-07", type: "metrics", points: 5, prompt: "Why report both defect count and defect rate?", sampleAnswer: "Count shows operational workload and impact; rate supports fair comparison across differently sized groups." },
      { id: "check-03-02-08", type: "governance", points: 5, prompt: "Define a defensible publication gate.", sampleAnswer: "Current data plus explicit critical thresholds, calculated results, zero unresolved blockers, controlled overrides, evidence, owner, approver, and timestamp." },
    ],
  },

  researchExtension: {
    title: "Data-Quality Root-Cause Study",
    researchQuestion:
      "Which sources, process steps, fields, and rule types generate the most consequential and recurring data defects?",
    applicationOptions: [
      "Robot maintenance",
      "Financial transactions",
      "Student information",
      "Healthcare operations",
      "Supply-chain orders",
      "AI feature pipeline",
    ],
    task:
      "Collect or simulate multiple refresh cycles, run the same versioned quality rules, measure defects by source and time, investigate root causes, and propose prevention controls with owners and measurable improvement targets.",
    requiredEvidence: [
      "Versioned data-quality contract",
      "Rule catalog with issue codes and severity",
      "Defect counts and rates by field, source, group, and refresh",
      "Pareto analysis of recurring defects",
      "Root-cause evidence for at least two major issue types",
      "Prevention, detection, and resolution controls",
      "Before-and-after quality metrics",
      "Governance and monitoring recommendation",
    ],
  },

  portfolioArtifact: {
    title: "Lesson 2 Portfolio Evidence: Data-Quality Control Pack",
    description:
      "Extend the Lesson 1 workbook blueprint with preventive controls, calculated flags, an exception register, quality summaries, and a publication gate.",
    requiredSections: [
      "Field-level data-quality contract",
      "Logical and physical type decisions",
      "Requiredness, domain, range, uniqueness, relationship, and temporal rules",
      "Excel Data Validation setup for manual-entry fields",
      "Structured-reference quality flags",
      "Issue-code catalog with severity and owner",
      "Exception register and disposition workflow",
      "Quality scorecard by rule, source, group, and period",
      "Publication thresholds, override policy, and evidence",
    ],
    requiredEvidence: [
      "At least ten documented fields",
      "At least eight reason-specific validation rules",
      "A preserved raw-value and standardized-value example",
      "Duplicate, reference, date-order, requiredness, domain, and range checks",
      "Long-format issue register",
      "Counts and rates with explicit denominators",
      "Calculated READY/BLOCKED gate",
      "Python, Power Query, or independent formula cross-check",
    ],
  },

  growthIndicators: [
    { title: "Data Contract Designer", description: "You convert business meaning into explicit, testable, owned field rules." },
    { title: "Quality Engineer", description: "You prevent invalid entry, detect imported defects, preserve evidence, and automate repeatable checks." },
    { title: "Exception Manager", description: "You classify issues by cause and severity and require accountable resolution evidence." },
    { title: "Publication Guardian", description: "You block decision outputs when unresolved critical defects exceed governed thresholds." },
  ],

  reflection: [
    "Which field in your current work is most likely stored as the wrong physical type?",
    "Where have you confused a missing value with zero or not applicable?",
    "Which unusual observation deserves review rather than automatic removal?",
    "What critical defect could hide inside a strong overall quality percentage?",
    "Who should own and approve corrections in your workbook?",
    "Which quality flag will prepare your data for the next lesson on formulas?",
  ],

  summary: [
    "A data-quality contract connects field meaning, types, rules, severity, ownership, and action.",
    "Logical type describes business meaning; physical type describes actual storage.",
    "Identifiers should usually be text even when they contain digits.",
    "Blank, zero, false, unknown, and not applicable are different states.",
    "Excel Data Validation helps prevent bad manual input but does not replace post-import checks.",
    "Reason-specific flags diagnose completeness, validity, uniqueness, consistency, timeliness, and referential integrity.",
    "Cross-field and temporal rules detect problems that individual fields cannot reveal.",
    "Impossible values fail; unusual but plausible values should be reviewed and preserved when confirmed.",
    "Raw values should remain traceable while standardized values are created through governed rules.",
    "Exception registers require issue codes, severity, ownership, status, disposition, evidence, and time.",
    "Quality must be reported by rule, field, source, group, period, count, rate, and denominator.",
    "A severity-aware publication gate prevents a polished report from hiding unresolved critical defects.",
  ],

  previousLesson: {
    id: "data-ai-m03-l01",
    moduleNumber: 3,
    slug: "tidy-data-and-reliable-workbook-architecture",
    title: "Tidy Data and Reliable Workbook Architecture",
  },
  nextLesson: {
    id: "data-ai-m03-l03",
    moduleNumber: 3,
    slug: "logical-lookup-and-conditional-aggregation-formulas",
    title: "Logical, Lookup, and Conditional Aggregation Formulas",
  },

  lumineryGuidance: {
    message:
      "Make every quality rule explainable: what it protects, how it is calculated, who owns it, and what happens when it fails.",
    prompt:
      "Act as my senior Excel data-quality engineer. Review my table grain, keys, field definitions, logical and physical types, requiredness, null meanings, domains, ranges, patterns, relationships, time order, and refresh needs. Create a versioned data-quality contract, Excel Data Validation controls, structured-reference flags, issue codes, severity, exception workflow, quality scorecard, and READY/BLOCKED publication gate. Preserve raw values, separate invalid from unusual, show counts and rates by source and group, and identify which rules must be cross-checked in Power Query or Python.",
    coachingQuestions: [
      "What does this field mean, and what is its true logical type?",
      "Which values are allowed, required, unique, or related to another table?",
      "Does the control prevent bad entry, detect existing defects, or both?",
      "Is this value impossible, missing, inconsistent, or merely unusual?",
      "Which issue code, severity, owner, and disposition apply?",
      "Could the summary rate hide a concentrated or critical defect?",
      "What exact evidence must pass before publication?",
    ],
  },
};

export default lesson02;
