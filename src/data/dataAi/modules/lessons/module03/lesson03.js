const lesson03 = {
  id: "data-ai-m03-l03",
  courseId: "data-ai-foundations",
  moduleId: "data-ai-foundations-module-03",
  moduleNumber: 3,
  lessonNumber: 3,
  slug: "logical-lookup-and-conditional-aggregation-formulas",
  title: "Logical, Lookup, and Conditional Aggregation Formulas",
  shortTitle: "Logical, Lookup, and Aggregation Formulas",
  subtitle:
    "Translate business rules into readable Excel formulas, enrich transactions from governed reference tables, and calculate auditable measures with explicit criteria.",
  status: "available",
  duration: "4–5 hours",
  level: "Beginner to Professional",

  essentialQuestion:
    "How can Excel formulas convert validated rows into consistent classifications, trusted reference attributes, and decision-ready summaries without hiding business logic?",
  bigIdea:
    "A professional formula expresses one documented rule, operates at a known grain, returns an intentional result for every case, exposes exceptions, and can be reconciled independently.",

  whyThisLessonExists: {
    title: "Formulas Are Executable Business Rules",
    introduction:
      "After data are tidy and validated, formulas transform them into useful evidence. IF and IFS classify conditions, XLOOKUP retrieves governed attributes, and SUMIFS, COUNTIFS, and AVERAGEIFS answer focused business questions. Their value depends on more than returning a number.",
    centralProblem:
      "Spreadsheet formulas often grow into unreadable nested expressions, repeat hard-coded thresholds, silently convert missing lookups to zero, use inconsistent criteria, or calculate at the wrong grain. A plausible result may therefore depend on hidden logic that no reviewer can explain.",
    purpose:
      "This lesson teaches you to decompose rules, use structured references, govern thresholds and mapping tables, distinguish expected no-match cases from defects, aggregate with explicit criteria and denominators, and build formula audit checks that make every result traceable.",
  },

  problemFirst: {
    title: "Opening Investigation: Which Maintenance Work Orders Need Action?",
    scenario:
      "The maintenance workbook contains validated work orders and reference tables for robots, plants, technicians, and service-level targets. Leadership wants each work order classified as Critical, High, Standard, or Review; enriched with the correct plant and robot model; and summarized by plant, status, fault family, and month. Existing formulas contain four nested IFs, VLOOKUP with approximate matching, and SUM ranges that do not expand.",
    questions: [
      "What decision rule determines each priority and in what order should conditions be evaluated?",
      "Which thresholds belong in a parameter table instead of inside formulas?",
      "Which table owns plant, robot model, and service target?",
      "What should happen when robot_id has no unique reference match?",
      "Which criteria define each published count, sum, and average?",
      "How should blanks, zero results, errors, and no qualifying rows be distinguished?",
      "What independent checks prove that row classifications and totals are complete?",
    ],
    expectedInsight:
      "The solution requires small readable formula layers: governed parameters, reason-specific helper fields, exact reference joins, explicit aggregation criteria, exception flags, and control totals. One giant formula is not the goal; auditable logic is.",
  },

  learningObjectives: [
    "Translate a written business rule into ordered logical tests with complete outcomes.",
    "Use IF, IFS, AND, OR, NOT, and IFERROR deliberately with Excel Table structured references.",
    "Use XLOOKUP with exact matching, explicit not-found behavior, and validated lookup keys.",
    "Distinguish a legitimate no-match or no-rows result from a data-quality defect.",
    "Calculate conditional counts, sums, and averages with COUNTIFS, SUMIFS, and AVERAGEIFS.",
    "Construct safe date, text, wildcard, numeric, and cell-linked criteria.",
    "Use LET and helper columns to name intermediate logic and reduce repeated expressions.",
    "Reconcile mutually exclusive classifications and segmented totals to the validated source.",
    "Cross-check Excel formula results with pandas using the same keys, conditions, and grain.",
  ],

  prerequisiteKnowledge: [
    "Lesson 1: tidy tables, grain, keys, structured references, and workbook layers",
    "Lesson 2: data types, validation flags, reference integrity, and publication gates",
    "Basic arithmetic and comparison operators",
    "Excel Tables and named parameter cells",
    "Basic pandas filtering, merging, and groupby are helpful for the optional lab",
  ],

  visualModels: [
    {
      id: "formula-decision-pipeline",
      type: "lifecycle",
      title: "The Auditable Formula Pipeline",
      description:
        "Reliable formulas move from governed inputs to interpretable row logic and reconciled summaries.",
      stages: [
        {
          label: "1. Define the Rule",
          detail:
            "State the decision, row grain, conditions, evaluation order, thresholds, null behavior, and complete set of outcomes in plain language.",
        },
        {
          label: "2. Govern Inputs",
          detail:
            "Use validated typed columns, named parameters, unique lookup keys, controlled categories, and current reference tables.",
        },
        {
          label: "3. Calculate by Row",
          detail:
            "Apply readable logical tests, exact lookups, helper columns, and explicit exception outputs at the correct grain.",
        },
        {
          label: "4. Aggregate by Criteria",
          detail:
            "Use aligned SUMIFS, COUNTIFS, and AVERAGEIFS ranges with explicit group, date, status, and quality filters.",
        },
        {
          label: "5. Reconcile and Publish",
          detail:
            "Check outcome counts, lookup exceptions, segmented totals, denominators, edge cases, and independent calculations before reporting.",
        },
      ],
      feedback:
        "When a rule or threshold changes, update the governed definition, rerun examples and edge cases, refresh dependent outputs, and record the effective date.",
      interpretation:
        "A formula is trustworthy when a reviewer can explain its inputs, rule, grain, result, exceptions, and checks without reverse-engineering cell coordinates.",
    },
  ],

  vocabulary: [
    { term: "Logical test", definition: "An expression that evaluates to TRUE or FALSE, such as downtime exceeding a threshold." },
    { term: "Boolean", definition: "A two-state logical value, TRUE or FALSE, used to control decisions and filters." },
    { term: "Branch", definition: "One possible formula outcome selected by a logical condition." },
    { term: "Condition order", definition: "The sequence in which overlapping logical tests are evaluated; earlier matches may determine the result." },
    { term: "Mutually exclusive", definition: "Outcomes designed so one row cannot belong to more than one category at the same time." },
    { term: "Collectively exhaustive", definition: "Outcomes designed so every valid row receives exactly one intended result." },
    { term: "Nested formula", definition: "A formula placed inside another formula, useful in moderation but difficult to audit when deeply layered." },
    { term: "Helper column", definition: "A named intermediate calculation that makes logic reusable, visible, and easier to test." },
    { term: "Parameter", definition: "A governed value such as a target, threshold, or period boundary referenced by formulas rather than repeatedly hard-coded." },
    { term: "Exact match", definition: "A lookup behavior that returns a result only when the lookup key equals a reference key." },
    { term: "Lookup key", definition: "The value used to find a corresponding row in a reference table." },
    { term: "Return array", definition: "The lookup column from which the matched result is returned." },
    { term: "Not-found result", definition: "The intentional output produced when a lookup key has no match." },
    { term: "Cardinality", definition: "The expected number of matches between keys, such as many work orders to exactly one robot." },
    { term: "Conditional aggregation", definition: "A count, sum, or average calculated only for rows satisfying stated criteria." },
    { term: "Criteria range", definition: "The cells evaluated against a condition in an IFS aggregation." },
    { term: "Sum range", definition: "The numeric cells added when all SUMIFS criteria are satisfied." },
    { term: "Criterion", definition: "A condition such as Plant A, Closed, >=60, or a date boundary used to include rows." },
    { term: "Wildcard", definition: "A symbol such as * or ? used for flexible text matching, requiring careful escaping for literal use." },
    { term: "Denominator", definition: "The count or total against which a rate or average is interpreted." },
    { term: "Error handling", definition: "The deliberate treatment of expected calculation errors without hiding data or logic defects." },
    { term: "LET", definition: "An Excel function that names intermediate expressions inside a formula to improve readability and efficiency." },
    { term: "Formula lineage", definition: "The traceable path from source and parameter fields through row calculations to published measures." },
    { term: "Reconciliation", definition: "A control proving that classified counts and segmented totals account for the validated source without unexplained gaps or overlap." },
  ],

  formulas: [
    {
      id: "if",
      name: "IF decision",
      formula: '=IF(logical_test, value_if_true, value_if_false)',
      meaning: "Returns one of two explicit outcomes from a Boolean condition.",
      requirement: "Define behavior for blanks, errors, and boundary values before copying the formula down the table.",
    },
    {
      id: "ifs",
      name: "Ordered IFS classification",
      formula: '=IFS(test₁,result₁,test₂,result₂,TRUE,default_result)',
      meaning: "Evaluates tests in order and returns the result for the first TRUE test.",
      requirement: "Place the most restrictive or highest-priority valid rule first and include an intentional final outcome.",
    },
    {
      id: "and-or",
      name: "Combined logic",
      formula: '=IF(AND(condition₁,OR(condition₂,condition₃)),"Action","No action")',
      meaning: "AND requires all included conditions; OR requires at least one included condition.",
      requirement: "Use parentheses and helper flags so reviewers can see exactly which combinations activate the rule.",
    },
    {
      id: "xlookup",
      name: "Exact XLOOKUP",
      formula: '=XLOOKUP([@robot_id],tblRobots[robot_id],tblRobots[plant],"UNMATCHED",0)',
      meaning: "Returns the plant from the row whose robot key exactly matches the current transaction key.",
      requirement: "Validate uniqueness in tblRobots and count UNMATCHED results; never convert an unexpected missing key silently to blank or zero.",
    },
    {
      id: "sumifs",
      name: "Conditional sum",
      formula: '=SUMIFS(tblOrders[downtime_min],tblOrders[plant],$B2,tblOrders[status],C$1)',
      meaning: "Sums downtime for rows meeting both the selected plant and status criteria.",
      requirement: "All ranges must align at the same row grain and size; document quality, date, and exclusion filters.",
    },
    {
      id: "countifs",
      name: "Conditional count",
      formula: '=COUNTIFS(tblOrders[plant],$B2,tblOrders[priority],C$1,tblOrders[row_status],"PASS")',
      meaning: "Counts validated work orders for a selected plant and priority.",
      requirement: "Know whether you are counting rows, events, or distinct entities; COUNTIFS counts qualifying rows.",
    },
    {
      id: "averageifs-let",
      name: "Safe conditional average with LET",
      formula: '=LET(n,COUNTIFS(tblOrders[plant],B2),IF(n=0,"NO ROWS",AVERAGEIFS(tblOrders[downtime_min],tblOrders[plant],B2)))',
      meaning: "Names the denominator and distinguishes no qualifying rows from a true numeric average.",
      requirement: "Do not use IFERROR to hide invalid source values; handle only the specific expected condition you understand.",
    },
  ],

  workedExamples: [
    {
      id: "example-03-03-01",
      title: "Classify maintenance priority with ordered logic",
      problem: "Critical if safety_flag is TRUE; High if downtime is at least 120 or repeated_faults is at least 3; otherwise Standard. Write the rule safely.",
      solutionSteps: [
        "Evaluate the safety condition first because it overrides all other rules.",
        "Evaluate the High rule using OR for the two alternative triggers.",
        "Use Standard as the explicit final outcome.",
        "Reference named table columns rather than row coordinates.",
      ],
      answer: '=IFS([@safety_flag]=TRUE,"Critical",OR([@downtime_min]>=120,[@repeated_faults]>=3),"High",TRUE,"Standard")',
      interpretation: "Condition order preserves the higher-consequence safety classification when several rules are true.",
    },
    {
      id: "example-03-03-02",
      title: "Use AND for a service-level breach",
      problem: "Flag Breach only when a work order is Closed, validated, and downtime exceeds the plant target.",
      solutionSteps: [
        "Confirm status_standard, row_status, downtime_min, and target_min have compatible types.",
        "Require all three conditions with AND.",
        "Return Breach or Within target rather than blank.",
        "Test the exact boundary when downtime equals target.",
      ],
      answer: '=IF(AND([@status_standard]="Closed",[@row_status]="PASS",[@downtime_min]>[@target_min]),"Breach","Within target")',
      interpretation: "The strict greater-than operator means a value exactly equal to the target is not a breach; that boundary must match policy.",
    },
    {
      id: "example-03-03-03",
      title: "Enrich work orders with an exact lookup",
      problem: "Return plant for each robot_id and make missing references visible.",
      solutionSteps: [
        "Confirm tblRobots contains one unique row per robot_id.",
        "Use robot_id as lookup_value and the robot key column as lookup_array.",
        "Return tblRobots[plant].",
        "Use UNMATCHED as the explicit not-found output and exact match mode 0.",
      ],
      answer: '=XLOOKUP([@robot_id],tblRobots[robot_id],tblRobots[plant],"UNMATCHED",0)',
      interpretation: "UNMATCHED is an actionable exception. An empty string would make a relationship defect harder to find.",
    },
    {
      id: "example-03-03-04",
      title: "Sum validated downtime by plant and month",
      problem: "Calculate September downtime for Plant A using only rows whose row_status is PASS.",
      solutionSteps: [
        "Use downtime_min as the sum range.",
        "Require plant = A and row_status = PASS.",
        "Use opened_at >= the period start and opened_at < the next period start.",
        "Keep period boundaries in parameter cells rather than text inside the formula.",
      ],
      answer: '=SUMIFS(tblOrders[downtime_min],tblOrders[plant],"A",tblOrders[row_status],"PASS",tblOrders[opened_at],">="&PeriodStart,tblOrders[opened_at],"<"&PeriodEnd)',
      interpretation: "A half-open date interval includes every September time value while excluding October 1 exactly.",
    },
    {
      id: "example-03-03-05",
      title: "Count rows and calculate a rate with the correct denominator",
      problem: "Plant A has 18 High-priority work orders among 75 validated work orders. Calculate the High-priority rate.",
      solutionSteps: [
        "Numerator: COUNTIFS for Plant A, High priority, and PASS.",
        "Denominator: COUNTIFS for Plant A and PASS.",
        "Divide only when the denominator is greater than zero.",
        "Format the result as a percentage and display the count pair 18/75.",
      ],
      answer: "18 / 75 = 0.24, so the High-priority work-order rate is 24%.",
      interpretation: "The numerator and denominator must describe the same population, period, and quality filters.",
    },
    {
      id: "example-03-03-06",
      title: "Reconcile exclusive classifications",
      problem: "There are 240 validated work orders: 12 Critical, 48 High, 176 Standard, and 3 blank priorities. Is the classification complete?",
      solutionSteps: [
        "Sum classified outcomes: 12 + 48 + 176 = 236.",
        "Compare with 240 validated rows: four rows are unaccounted for.",
        "Three blanks explain only three rows; find the fourth gap or overlap.",
        "Block the priority summary until each validated row has exactly one category.",
      ],
      answer: "No. The classification is short by four rows, and the known blanks explain only three.",
      interpretation: "Reconciliation catches logic gaps that individual formulas may not reveal.",
    },
  ],

  interactiveExploration: {
    title: "Formula Design and Edge-Case Studio",
    description:
      "Design the logic in plain language and a truth table before entering the Excel formula.",
    instructions: [
      "Select one classification rule, one lookup, and one conditional measure from the maintenance scenario.",
      "Write the row grain, required inputs, source table, parameter owner, and expected output type.",
      "Create a truth table containing normal, boundary, blank, invalid, unmatched, and overlapping-condition cases.",
      "Order conditions by precedence and prove outcomes are mutually exclusive and collectively exhaustive.",
      "Design the lookup's cardinality, exact-match behavior, and not-found action.",
      "Write the aggregation numerator, denominator, criteria, date interval, and quality filter.",
      "Add reconciliation checks and an independent hand calculation for a small sample.",
    ],
    questions: [
      "Could changing condition order change the result?",
      "Which constant belongs in a governed parameter or mapping table?",
      "Does a lookup no-match mean not applicable or broken referential integrity?",
      "Are aggregation ranges aligned at the same grain and length?",
      "Could a blank, zero, error, and no qualifying rows be mistaken for one another?",
      "What check proves all validated rows and amounts are accounted for?",
    ],
    expectedDiscovery:
      "Formula quality comes from disciplined design: explicit precedence, governed inputs, visible exceptions, aligned criteria, correct denominators, edge-case tests, and reconciliation—not from making the expression as short as possible.",
  },

  realWorldApplications: [
    { field: "Manufacturing and Robotics", application: "Classify work-order urgency, retrieve robot and plant attributes, count repeated faults, and summarize validated downtime against service targets." },
    { field: "Finance", application: "Assign approval tiers, retrieve account mappings and rates, sum transactions by period and cost center, and count unresolved exceptions." },
    { field: "Education", application: "Classify support levels, look up course and student attributes, and aggregate attendance or performance by program and period." },
    { field: "Healthcare Operations", application: "Apply workflow rules, retrieve governed procedure attributes, and calculate operational counts and turnaround measures with privacy controls." },
    { field: "Retail and Supply Chain", application: "Classify inventory risk, retrieve product and supplier details, and aggregate demand, cost, fill rate, and late orders by controlled criteria." },
    { field: "Machine Learning and AI", application: "Create transparent rule-based baselines, join approved features, calculate group metrics, and compare model output with deterministic decision logic." },
  ],

  aiConnection: {
    title: "Excel Rules Create Transparent AI Baselines",
    explanation:
      "Before using machine learning, a governed logical rule can provide an understandable baseline. Lookup tables enrich features, while conditional aggregations create historical signals such as repeated faults in the previous 30 days. The same grain, time, and leakage controls still apply.",
    example:
      "A baseline marks a robot-day High risk when the prior-30-day fault count is at least three or validated downtime exceeds 120 minutes. A later model must outperform this rule on agreed costs and must not use future work orders in those features.",
    uses: [
      "Create interpretable baseline classifications before model training",
      "Generate governed categorical and aggregate features",
      "Reproduce subgroup evaluation metrics with explicit criteria",
      "Compare deterministic policies with predicted probabilities",
      "Expose business thresholds for monitoring and human review",
    ],
    caution:
      "Spreadsheet formulas can leak future information, double-count entities, or encode unfair policy just as code can. Audit time windows, populations, protected groups, and consequences.",
    reflectionQuestion:
      "If a complex model cannot outperform a transparent Excel rule on the real decision cost, should it be deployed?",
  },

  pythonLab: {
    title: "Cross-Check Logical, Lookup, and IFS Results with pandas",
    objective:
      "Reproduce Excel-style classification, exact lookup, and conditional aggregation logic in pandas and reconcile the outputs.",
    code: `import numpy as np
import pandas as pd

robots = pd.DataFrame({
    "robot_id": ["R-101", "R-102", "R-103", "R-104"],
    "plant": ["A", "A", "B", "B"],
    "model": ["AX4", "AX4", "BZ2", "BZ2"],
    "target_min": [90, 90, 120, 120],
})

orders = pd.DataFrame({
    "work_order_id": ["WO-201", "WO-202", "WO-203", "WO-204", "WO-205", "WO-206"],
    "robot_id": ["R-101", "R-102", "R-103", "R-104", "R-101", "R-999"],
    "opened_at": pd.to_datetime([
        "2026-09-02", "2026-09-07", "2026-09-10",
        "2026-09-18", "2026-10-01", "2026-09-22",
    ]),
    "status": ["Closed", "Closed", "Closed", "Open", "Closed", "Closed"],
    "row_status": ["PASS", "PASS", "PASS", "PASS", "PASS", "PASS"],
    "downtime_min": [45, 150, 130, 20, 95, 80],
    "repeated_faults": [0, 3, 1, 0, 2, 1],
    "safety_flag": [False, False, True, False, False, False],
})

# XLOOKUP equivalent with exact keys and visible no-match evidence.
assert robots["robot_id"].is_unique
data = orders.merge(robots, on="robot_id", how="left", validate="many_to_one", indicator=True)
data["lookup_status"] = np.where(data["_merge"].eq("both"), "MATCHED", "UNMATCHED")

# Ordered IFS equivalent.
conditions = [
    data["safety_flag"].eq(True),
    data["downtime_min"].ge(120) | data["repeated_faults"].ge(3),
]
data["priority"] = np.select(conditions, ["Critical", "High"], default="Standard")

# IF + AND equivalent. A missing target remains a visible review exception.
data["sla_result"] = np.select(
    [
        data["lookup_status"].eq("UNMATCHED"),
        data["status"].eq("Closed")
        & data["row_status"].eq("PASS")
        & data["downtime_min"].gt(data["target_min"]),
    ],
    ["REVIEW LOOKUP", "Breach"],
    default="Within target",
)

# SUMIFS/COUNTIFS-style September summary for matched, validated rows.
start = pd.Timestamp("2026-09-01")
end = pd.Timestamp("2026-10-01")
eligible = data.loc[
    data["lookup_status"].eq("MATCHED")
    & data["row_status"].eq("PASS")
    & data["opened_at"].ge(start)
    & data["opened_at"].lt(end)
].copy()

summary = eligible.groupby("plant", as_index=False).agg(
    validated_orders=("work_order_id", "count"),
    downtime_total=("downtime_min", "sum"),
    downtime_average=("downtime_min", "mean"),
    critical_orders=("priority", lambda s: int((s == "Critical").sum())),
    high_orders=("priority", lambda s: int((s == "High").sum())),
)

# Reconciliation controls.
priority_counts = data["priority"].value_counts()
assert int(priority_counts.sum()) == len(data)
assert data["priority"].notna().all()
assert eligible["downtime_min"].sum() == summary["downtime_total"].sum()
assert int((data["lookup_status"] == "UNMATCHED").sum()) == 1

print("Row-level results:\\n", data[[
    "work_order_id", "robot_id", "plant", "lookup_status",
    "priority", "sla_result",
]].to_string(index=False))
print("\\nSeptember summary:\\n", summary.to_string(index=False))
print("\\nPriority reconciliation:\\n", priority_counts.to_string())`,
    questions: [
      "Which pandas operation corresponds to exact XLOOKUP and how is many-to-one cardinality enforced?",
      "Why does safety_flag appear before the High-priority condition?",
      "Why is R-999 labeled REVIEW LOOKUP instead of Within target?",
      "Which filters define the September eligible population?",
      "How do the assertions reconcile classifications, lookup exceptions, and downtime totals?",
      "How would you prove the Excel and pandas outputs agree row by row?",
    ],
    reflectionQuestions: [
      "Which logic belongs in Excel, Power Query, a database, or a governed semantic model?",
      "What formula result could be technically correct but misleading because its denominator is wrong?",
      "How should threshold and mapping changes be versioned across both Excel and Python?",
    ],
    extension:
      "Create an Excel workbook containing the row results, a plant-priority matrix, a parameter table, and an audit sheet; then compare each published cell with the pandas output and record any differences.",
  },

  guidedPractice: [
    { id: "gp-03-03-01", question: "Why does condition order matter in IFS?", answer: "IFS returns the first TRUE result, so overlapping rules can produce different categories when their order changes." },
    { id: "gp-03-03-02", question: "When should you use AND versus OR?", answer: "Use AND when every condition must be true; use OR when any one of several alternatives is sufficient." },
    { id: "gp-03-03-03", question: "Why validate the lookup table key before XLOOKUP?", answer: "A lookup assumes the intended cardinality; duplicate reference keys make the returned match ambiguous even if Excel returns one value." },
    { id: "gp-03-03-04", question: "What does COUNTIFS count?", answer: "It counts rows whose aligned criteria ranges satisfy all specified conditions, not distinct entities unless each row is already at entity grain." },
    { id: "gp-03-03-05", question: "Why use >= PeriodStart and < PeriodEnd for date-time data?", answer: "The half-open interval includes every timestamp in the intended period without missing late times or including the next period boundary." },
    { id: "gp-03-03-06", question: "What should IFERROR not be used for?", answer: "It should not hide broken keys, invalid types, or logic defects with blank or zero; handle only expected, understood errors explicitly." },
  ],

  independentPractice: [
    { id: "ip-03-03-01", difficulty: "Foundational", question: "Write an IF formula that labels downtime above target as Breach and all other valid rows as Within target.", sampleAnswer: '=IF([@downtime_min]>[@target_min],"Breach","Within target")' },
    { id: "ip-03-03-02", difficulty: "Foundational", question: "Create an AND/OR truth table for a priority rule with three inputs.", sampleAnswer: "List every meaningful combination, expected Boolean result, category, boundary behavior, and invalid-input response." },
    { id: "ip-03-03-03", difficulty: "Applied", question: "Write an exact XLOOKUP that returns technician team and shows REVIEW when no key matches.", sampleAnswer: '=XLOOKUP([@technician_id],tblTechnicians[technician_id],tblTechnicians[team],"REVIEW",0)' },
    { id: "ip-03-03-04", difficulty: "Applied", question: "Write SUMIFS and COUNTIFS for closed Plant B work orders during one parameterized month.", sampleAnswer: "Use Plant B, Closed, >=PeriodStart, <PeriodEnd, and PASS criteria with aligned table columns; sum downtime and count rows separately." },
    { id: "ip-03-03-05", difficulty: "Analytical", question: "Explain why 0, blank, #N/A, and NO ROWS must not be treated as the same result.", sampleAnswer: "They mean measured zero, missing/empty output, calculation or lookup failure, and an empty qualifying population; each requires different interpretation and action." },
    { id: "ip-03-03-06", difficulty: "Advanced", question: "Refactor a deeply nested formula using helper columns, parameters, and LET.", sampleAnswer: "Name repeated tests, separate quality and lookup exceptions, retrieve thresholds once, classify in precedence order, and add an explicit default." },
    { id: "ip-03-03-07", difficulty: "Professional", question: "Create an audit pack for one formula-driven KPI.", sampleAnswer: "Include business definition, grain, source fields, parameters, formula, edge-case table, lookup exceptions, numerator, denominator, reconciliation, independent calculation, owner, and version." },
  ],

  commonMistakes: [
    { mistake: "Writing a large formula before defining the business rule.", correction: "Write plain-language logic, precedence, outcomes, and edge cases first." },
    { mistake: "Placing broader IFS conditions before specific high-priority conditions.", correction: "Order overlapping tests intentionally because the first TRUE result wins." },
    { mistake: "Hard-coding thresholds in many formulas.", correction: "Store governed values in named parameter or reference tables with owners and effective dates." },
    { mistake: "Using approximate lookup accidentally or accepting duplicate reference keys.", correction: "Use exact matching and validate unique reference keys plus visible no-match counts." },
    { mistake: "Using IFERROR to return zero or blank for every error.", correction: "Handle expected cases specifically and surface data, key, type, and logic defects for review." },
    { mistake: "Counting rows when the question asks for distinct entities.", correction: "Confirm grain and use a distinct-entity method when multiple rows per entity are possible." },
    { mistake: "Publishing segmented totals without reconciliation.", correction: "Prove categories are complete and nonoverlapping and that segment totals equal the validated source total." },
  ],

  discussionQuestions: [
    "When should complex spreadsheet logic be moved to Power Query, SQL, DAX, or application code?",
    "Who should approve classification thresholds and their effective dates?",
    "Is an unmatched lookup a data defect, a valid new entity, or both depending on process state?",
    "How can formula transparency improve fairness and accountability in automated decisions?",
    "What evidence is sufficient to prove two independent implementations calculate the same KPI?",
  ],

  formativeAssessment: {
    totalPoints: 40,
    passingScore: 32,
    questions: [
      { id: "check-03-03-01", type: "logic", points: 5, prompt: "Explain why IFS condition order can change a result.", sampleAnswer: "IFS stops at the first TRUE condition, so overlapping broader rules can capture rows before more specific rules unless precedence is designed correctly." },
      { id: "check-03-03-02", type: "logic", points: 5, prompt: "Write a formula requiring PASS quality and either high downtime or a safety flag.", sampleAnswer: '=IF(AND([@row_status]="PASS",OR([@downtime_min]>=120,[@safety_flag]=TRUE)),"Action","No action")' },
      { id: "check-03-03-03", type: "lookup", points: 5, prompt: "List four controls required for a trustworthy XLOOKUP.", sampleAnswer: "Correct grain, typed keys, unique reference key, exact match, explicit no-match result, current source, and exception count; any four relevant controls earn full credit." },
      { id: "check-03-03-04", type: "aggregation", points: 5, prompt: "State the difference between SUMIFS and COUNTIFS.", sampleAnswer: "SUMIFS adds a numeric sum range for matching rows; COUNTIFS counts matching rows." },
      { id: "check-03-03-05", type: "dates", points: 5, prompt: "Write the safest monthly date-time criteria.", sampleAnswer: 'Use >=PeriodStart and <NextPeriodStart so every time in the month is included and the next boundary is excluded.' },
      { id: "check-03-03-06", type: "interpretation", points: 5, prompt: "Why is NO ROWS different from an average of zero?", sampleAnswer: "NO ROWS has no denominator or observations; zero is a calculated mean from qualifying observed values." },
      { id: "check-03-03-07", type: "audit", points: 5, prompt: "Describe two classification and two aggregation reconciliation checks.", sampleAnswer: "Outcome counts equal validated rows; no row has blank/multiple category. Segment sums equal source total; numerator never exceeds its aligned denominator." },
      { id: "check-03-03-08", type: "design", points: 5, prompt: "Explain when helper columns and LET improve a formula.", sampleAnswer: "They name repeated intermediate logic, reduce duplication, improve testing, reveal lineage, and make maintenance safer." },
    ],
  },

  researchExtension: {
    title: "Formula Reliability and Independent Recalculation Study",
    researchQuestion:
      "Do the workbook's logical, lookup, and conditional aggregation results remain identical across refreshes, edge cases, and an independent implementation?",
    applicationOptions: [
      "Maintenance operations",
      "Financial approval workflow",
      "Student-support classification",
      "Healthcare operations",
      "Inventory risk",
      "AI rule baseline",
    ],
    task:
      "Select a decision-critical workbook calculation. Formalize its rule, create edge cases, document lookup cardinality and parameters, reproduce it independently in Python or SQL, compare outputs row by row and in aggregate, investigate every difference, and recommend the safest ownership layer.",
    requiredEvidence: [
      "Business definition, grain, and formula lineage",
      "Truth table and boundary cases",
      "Parameter and mapping inventory",
      "Lookup cardinality and no-match report",
      "Excel row-level and aggregated outputs",
      "Independent implementation",
      "Difference report and reconciliations",
      "Recommendation for Excel, Power Query, SQL, DAX, or code ownership",
    ],
  },

  portfolioArtifact: {
    title: "Lesson 3 Portfolio Evidence: Auditable Formula and Measure Pack",
    description:
      "Extend the Module 3 workbook with governed logical rules, exact lookups, conditional measures, edge-case tests, and reconciliations.",
    requiredSections: [
      "Plain-language business rules and precedence",
      "Truth tables, boundaries, blanks, errors, and exception behavior",
      "Parameter and mapping tables with owners",
      "IF, IFS, AND, OR, XLOOKUP, SUMIFS, COUNTIFS, AVERAGEIFS, and LET examples",
      "Lookup-key uniqueness and no-match controls",
      "Numerator, denominator, period, grain, and quality filters for measures",
      "Classification and total reconciliations",
      "Independent calculation and formula change log",
    ],
    requiredEvidence: [
      "At least three row-level logical formulas",
      "At least two exact lookups from governed reference tables",
      "At least six conditional measures",
      "One readable LET or helper-column refactor",
      "A no-match exception report",
      "An edge-case test table",
      "A complete reconciliation sheet",
      "A pandas, SQL, or independent Excel cross-check",
    ],
  },

  growthIndicators: [
    { title: "Rule Translator", description: "You convert policy into ordered, complete, testable logical conditions." },
    { title: "Lookup Modeler", description: "You enrich rows through validated keys, exact matches, governed attributes, and visible exceptions." },
    { title: "Measure Builder", description: "You calculate conditional results with explicit populations, periods, criteria, and denominators." },
    { title: "Formula Auditor", description: "You test boundaries, reconcile outputs, cross-check independently, and document change." },
  ],

  reflection: [
    "Which formula in your current work contains hidden business policy?",
    "Could its result change if conditions were reordered?",
    "Which hard-coded value should become a governed parameter?",
    "What lookup exception have you previously hidden with a blank or zero?",
    "Does each published rate name its numerator and denominator?",
    "Which formula should be independently reproduced before becoming portfolio evidence?",
  ],

  summary: [
    "Formulas are executable business rules and require definitions, owners, versions, and tests.",
    "IF selects between two outcomes; IFS evaluates ordered conditions and returns the first match.",
    "AND requires every condition; OR requires at least one condition.",
    "Rules should be mutually exclusive, collectively exhaustive, and explicit about blanks and boundaries.",
    "Helper columns and LET improve readability, reuse, performance, lineage, and testing.",
    "Thresholds and mappings belong in governed parameter and reference tables rather than repeated hard-coding.",
    "XLOOKUP should use exact matching, validated unique reference keys, and visible not-found behavior.",
    "SUMIFS, COUNTIFS, and AVERAGEIFS operate on aligned rows satisfying all stated criteria.",
    "A row count is not automatically a distinct-entity count; always confirm grain.",
    "Half-open date intervals safely handle date-time periods.",
    "Zero, blank, error, and no qualifying rows communicate different evidence.",
    "Classifications, lookup exceptions, segmented totals, and denominators must be reconciled and independently checked.",
  ],

  previousLesson: {
    id: "data-ai-m03-l02",
    moduleNumber: 3,
    slug: "validation-data-types-and-quality-flags",
    title: "Validation, Data Types, and Quality Flags",
  },
  nextLesson: null,

  lumineryGuidance: {
    message:
      "Make the rule readable before making the formula compact. Every branch, lookup, criterion, denominator, and exception should be explainable.",
    prompt:
      "Act as my senior Excel formula reviewer. Help me state the business decision, row grain, inputs, output, logical conditions, precedence, boundaries, blank behavior, parameters, lookup keys, cardinality, no-match action, aggregation population, criteria, numerator, denominator, and period. Refactor the solution with structured references, helper columns or LET, exact XLOOKUP, and appropriate IF, IFS, AND, OR, SUMIFS, COUNTIFS, or AVERAGEIFS formulas. Then create an edge-case table, exception report, reconciliation controls, independent cross-check, and change documentation.",
    coachingQuestions: [
      "What is the rule in plain language and which condition has precedence?",
      "Are all valid rows assigned exactly one intended outcome?",
      "Which threshold or mapping should be governed outside the formula?",
      "Is the lookup key unique, typed consistently, and expected to match exactly once?",
      "What do zero, blank, error, and no qualifying rows each mean?",
      "Do numerator and denominator describe the same population, period, and quality filter?",
      "What reconciliation and independent calculation prove the result?",
    ],
  },
};

export default lesson03;
