const lesson04 = {
  id: "data-ai-m06-l04",
  courseId: "data-ai-foundations",
  moduleId: "data-ai-foundations-module-06",
  moduleNumber: 6,
  lessonNumber: 4,
  slug: "measures-filter-context-row-context-and-calculate",
  title: "Measures, Filter Context, Row Context, and CALCULATE",
  shortTitle: "Measures and DAX Context",
  subtitle:
    "Understand why the same DAX measure returns different correct values across a report, distinguish dynamic measures from stored columns, trace row and filter context, and use CALCULATE to modify context intentionally and safely.",
  status: "available",
  duration: "5–6 hours",
  level: "Beginner to Professional",

  essentialQuestion:
    "How does Power BI decide which rows a DAX expression can see, and how can CALCULATE change that context without changing the underlying data?",
  bigIdea:
    "DAX answers depend on context. A measure evaluates dynamically over the rows allowed by the current filter context; row context identifies a current row for calculated columns and iterators; CALCULATE evaluates an expression after adding, replacing, removing, or redirecting filters—and can transform row context into filter context.",

  whyThisLessonExists: {
    title: "A Formula Can Be Correct and Still Answer the Wrong Question",
    introduction:
      "Many Power BI errors are not arithmetic errors. They are context errors: the expression is valid, but it sees the wrong rows, uses a stored column where a dynamic measure is needed, overwrites a filter unintentionally, or removes more context than the decision allows.",
    centralProblem:
      "A maintenance matrix shows correct plant totals, but every row displays 100% of total. A critical-event measure ignores the user's severity selection. A calculated percentage column does not change when slicers change. Another measure uses FILTER over the entire fact table and becomes slow. The formulas all look reasonable, yet the report tells conflicting stories.",
    purpose:
      "This lesson builds a mental model for evaluation context, teaches reusable base and derived measures, compares measures with calculated columns, explains iterators and context transition, and develops a disciplined CALCULATE workflow using Boolean filters, KEEPFILTERS, REMOVEFILTERS, ALL, USERELATIONSHIP, and variables.",
  },

  problemFirst: {
    title: "Opening Investigation: Why Is Every Plant 100%?",
    scenario:
      "A table lists Plant A, Plant B, and Plant C. [Total Downtime] is correct for each row. The author defines [% of Total] as DIVIDE([Total Downtime], [Total Downtime]), so every plant returns 100%. Replacing the denominator with a calculated column still does not respond correctly to slicers.",
    questions: [
      "Which filters are active on each plant row?",
      "Why do the numerator and denominator currently evaluate over the same rows?",
      "Which filter must be removed from the denominator while all other report filters remain?",
      "Why is a measure more appropriate than a calculated percentage column?",
      "What result should the grand total display?",
      "How would a year, asset-type, or failure-category slicer affect the calculation?",
      "What test cases would prove the repaired measure behaves correctly?",
    ],
    expectedInsight:
      "The denominator needs a modified filter context, not different arithmetic. CALCULATE with REMOVEFILTERS(DimPlant) can remove only the plant filter while preserving the rest of the report context.",
  },

  visualModels: [
    {
      id: "dax-evaluation-path",
      type: "lifecycle",
      title: "The DAX Evaluation Path",
      description:
        "Trace a measure from the visible report state to the final scalar result.",
      stages: [
        { label: "1. Visual cell", detail: "Identify the current matrix row, chart category, card, subtotal, or tooltip cell." },
        { label: "2. Direct filters", detail: "Collect slicers, page filters, visual filters, and the row or column headers." },
        { label: "3. Propagated filters", detail: "Follow active model relationships from dimensions into fact tables." },
        { label: "4. CALCULATE", detail: "Add, replace, intersect, remove, or redirect filters specified by the measure." },
        { label: "5. Visible rows", detail: "Determine the fact rows remaining in the resulting filter context." },
        { label: "6. Expression", detail: "Evaluate SUM, COUNTROWS, DISTINCTCOUNT, DIVIDE, SUMX, or another expression." },
        { label: "7. Result", detail: "Return one value with the correct unit, format, blank behavior, and meaning." },
        { label: "8. Validation", detail: "Compare with a hand-calculated test case, subtotal, alternate filter, and source control." },
      ],
      feedback:
        "Never debug a DAX result by staring only at the formula; write down the context seen by that specific visual cell.",
      interpretation:
        "The same measure can return different correct values because each visual cell supplies a different filter context.",
    },
    {
      id: "calculate-context-workflow",
      type: "lifecycle",
      title: "How CALCULATE Changes the Question",
      description:
        "Treat CALCULATE as a controlled context transformation, not a magic aggregation function.",
      stages: [
        { label: "Start context", detail: "Record the filters already active before CALCULATE." },
        { label: "Read filter arguments", detail: "Classify each as Boolean, table, or filter-modifier expression." },
        { label: "Resolve same-column behavior", detail: "Default behavior replaces an existing filter; KEEPFILTERS intersects it." },
        { label: "Apply modifiers", detail: "REMOVEFILTERS or ALL can clear scope; USERELATIONSHIP can activate an alternate path." },
        { label: "Context transition", detail: "When required, convert current-row values into equivalent filters." },
        { label: "Evaluate expression", detail: "Calculate the expression once in the modified filter context." },
        { label: "Restore caller context", detail: "The surrounding visual continues with its original context for other cells." },
        { label: "Test intent", detail: "Verify filters preserved, filters removed, totals, blanks, and security behavior." },
      ],
      feedback:
        "If you cannot say which filter changes and which filters remain, the CALCULATE expression is not ready for production.",
      interpretation:
        "CALCULATE changes the evaluation context temporarily; it does not rewrite source rows or permanently change the model.",
    },
    {
      id: "measure-column-iterator-choice",
      type: "lifecycle",
      title: "Choose the Right Calculation Location",
      description:
        "Decide where a calculation belongs before writing DAX.",
      stages: [
        { label: "Source or Power Query", detail: "Prefer upstream transformations for stable row attributes, reusable cleaning, and foldable logic." },
        { label: "Calculated column", detail: "Use for a row-level value needed as a category, relationship key, sort key, or slicer field." },
        { label: "Measure", detail: "Use for a result that must react to slicers, visual cells, relationships, and report filters." },
        { label: "Iterator", detail: "Use X-functions when an expression must be evaluated row by row and then aggregated." },
        { label: "Visual calculation", detail: "Use only when the calculation intentionally belongs to one visual rather than the reusable semantic model." },
        { label: "Validation", detail: "Check storage, refresh behavior, interaction response, reuse, performance, and business ownership." },
      ],
      feedback:
        "Do not create a calculated column merely because its row-level formula feels familiar from Excel.",
      interpretation:
        "Calculation placement is an architectural decision affecting model size, reuse, interaction, and governance.",
    },
  ],

  learningObjectives: [
    "Explain why measures are dynamically evaluated in the filter context of each visual cell.",
    "Distinguish measures, calculated columns, Power Query custom columns, and visual calculations.",
    "Identify direct filters from slicers, pages, visuals, and row or column headers.",
    "Trace propagated filters through active star-schema relationships.",
    "Explain row context as the current row used by calculated columns and iterator functions.",
    "Distinguish row context from filter context without treating one as automatically filtering the other.",
    "Write explicit base measures with SUM, COUNTROWS, DISTINCTCOUNT, MIN, MAX, and DIVIDE.",
    "Use derived measures instead of duplicating business logic.",
    "Use SUMX and other iterators when the row expression must be evaluated before aggregation.",
    "Use CALCULATE to evaluate an expression in modified filter context.",
    "Predict when CALCULATE adds a new filter or overwrites an existing same-column filter.",
    "Use KEEPFILTERS to intersect a filter with existing context.",
    "Use REMOVEFILTERS or ALL deliberately for denominators and comparison baselines.",
    "Explain context transition and when a model-measure reference performs it automatically.",
    "Use USERELATIONSHIP for an approved alternate date role.",
    "Use variables to improve readability, reuse, debugging, and efficiency.",
    "Validate totals, subtotals, blank behavior, filter combinations, and edge cases.",
    "Reproduce DAX-style context behavior in a tested pandas lab.",
  ],

  prerequisiteKnowledge: [
    "Module 6 Lesson 3: fact grain, dimensions, one-to-many relationships, filter propagation, and explicit measures",
    "Basic arithmetic, percentages, ratios, and safe division",
    "Power BI report concepts: slicer, visual, table, matrix, card, row, subtotal, and grand total",
    "Basic DAX syntax: measure name, equals sign, functions, table references, column references, and comments",
    "Python with pandas, pathlib, and JSON for the computational lab",
  ],

  vocabulary: [
    { term: "DAX", definition: "Data Analysis Expressions, the formula language used for semantic-model calculations in Power BI and related tabular technologies." },
    { term: "Measure", definition: "A named scalar expression evaluated dynamically in the filter context of a query or visual cell." },
    { term: "Base measure", definition: "A simple governed measure such as total cost or event count reused by more complex measures." },
    { term: "Derived measure", definition: "A measure built from other measures to preserve consistent definitions and reduce repeated logic." },
    { term: "Calculated column", definition: "A row-level model column produced from a DAX expression and available for grouping, filtering, sorting, or relationships." },
    { term: "Power Query custom column", definition: "A column created during data preparation before data enters the semantic model." },
    { term: "Visual calculation", definition: "A calculation authored for and evaluated within one report visual rather than as a reusable model measure." },
    { term: "Evaluation context", definition: "The combination of filter, row, and applicable visual context under which an expression is evaluated." },
    { term: "Filter context", definition: "The filters directly applied to model columns and those propagated through relationships when a measure evaluates." },
    { term: "Direct filter", definition: "A filter applied explicitly by a slicer, page, visual, matrix header, DAX expression, or query." },
    { term: "Propagated filter", definition: "A filter transmitted from one table to another through an active model relationship." },
    { term: "Row context", definition: "The current row available to a calculated-column formula or iterator expression." },
    { term: "Context transition", definition: "The conversion of current-row values into filters, performed by CALCULATE or automatically when a model measure is evaluated in row context." },
    { term: "CALCULATE", definition: "A DAX function that evaluates a scalar expression in a modified filter context." },
    { term: "CALCULATETABLE", definition: "A DAX function that evaluates a table expression in a modified filter context." },
    { term: "Boolean filter expression", definition: "A CALCULATE filter argument that evaluates a true-or-false condition over one table's columns." },
    { term: "Table filter expression", definition: "A table-valued CALCULATE argument whose returned rows become a filter." },
    { term: "Filter modifier", definition: "A function that changes filter behavior, such as REMOVEFILTERS, ALL, KEEPFILTERS, USERELATIONSHIP, or CROSSFILTER." },
    { term: "Filter replacement", definition: "CALCULATE's default behavior when a new filter targets a column already filtered in the incoming context." },
    { term: "Filter intersection", definition: "The overlap between existing and new filters, commonly requested through KEEPFILTERS." },
    { term: "KEEPFILTERS", definition: "A function that makes a CALCULATE filter intersect with an existing same-column filter instead of replacing it." },
    { term: "REMOVEFILTERS", definition: "A filter modifier that clears filters from specified tables or columns without returning a table for other uses." },
    { term: "ALL", definition: "A function that can remove filters and, in applicable expressions, return all rows or values of a table or column." },
    { term: "ALLEXCEPT", definition: "A function that removes filters from a table except filters on specified columns." },
    { term: "USERELATIONSHIP", definition: "A CALCULATE modifier that activates an existing relationship for the duration of the calculation." },
    { term: "CROSSFILTER", definition: "A CALCULATE modifier that changes or disables relationship filter direction for one calculation." },
    { term: "Iterator", definition: "A function that evaluates an expression for each row of a table and then aggregates or combines the results." },
    { term: "SUMX", definition: "An iterator that evaluates a numeric expression for each row of a table and sums the row results." },
    { term: "FILTER", definition: "A table iterator that returns only rows for which its Boolean expression is true." },
    { term: "DIVIDE", definition: "A safe division function that handles zero or blank denominators using defined blank or alternate-result behavior." },
    { term: "Variable", definition: "A named value stored with VAR and used later in a RETURN expression." },
    { term: "Scalar", definition: "A single value such as a number, text value, date, Boolean value, or blank." },
    { term: "Table expression", definition: "A DAX expression returning a virtual or physical table used by iterators or filtering functions." },
    { term: "Implicit measure", definition: "An automatic aggregation created when a numeric column is dropped into a visual without a governed explicit measure." },
    { term: "Blank", definition: "DAX's absence-of-value result, which is not always equivalent to zero or an empty string." },
    { term: "Subtotal context", definition: "The filter context of an aggregated hierarchy level that may differ from the sum of displayed child results." },
    { term: "Denominator context", definition: "The intentionally defined filter scope used to compute a ratio's comparison total." },
    { term: "Measure branching", definition: "Building derived measures from approved base measures instead of repeating raw-column aggregation logic." },
  ],

  formulas: [
    { id: "total-downtime", name: "Base measure", formula: "Total Downtime := SUM(FactMaintenanceEvent[DowntimeMinutes])", meaning: "Sums visible event downtime under current filter context.", requirement: "Use a consistent unit and validated additive event grain." },
    { id: "event-count", name: "Event count", formula: "Maintenance Events := COUNTROWS(FactMaintenanceEvent)", meaning: "Counts visible fact rows.", requirement: "Use DISTINCTCOUNT(EventKey) instead if the table can contain multiple rows per business event." },
    { id: "safe-average", name: "Derived ratio", formula: "Avg Downtime/Event := DIVIDE([Total Downtime], [Maintenance Events])", meaning: "Recomputes the ratio under each visual cell's context.", requirement: "Do not store or average row-level percentage columns for a dynamic ratio." },
    { id: "critical", name: "CALCULATE with Boolean filter", formula: "Critical Downtime := CALCULATE([Total Downtime], DimFailure[Severity] = \"Critical\")", meaning: "Evaluates total downtime after applying Critical severity.", requirement: "This replaces an existing severity filter unless KEEPFILTERS is used." },
    { id: "keepfilters", name: "Intersect existing severity", formula: "Selected Critical Downtime := CALCULATE([Total Downtime], KEEPFILTERS(DimFailure[Severity] = \"Critical\"))", meaning: "Returns the overlap between the incoming selection and Critical.", requirement: "Expect blank or zero when Critical is outside the incoming severity selection." },
    { id: "share", name: "Percent of visible total", formula: "Plant Share := DIVIDE([Total Downtime], CALCULATE([Total Downtime], REMOVEFILTERS(DimPlant)))", meaning: "Removes plant context from the denominator while preserving other filters.", requirement: "Declare whether the denominator means all plants, selected plants, or the entire model." },
    { id: "iterator", name: "Row-by-row extension", formula: "Extended Cost := SUMX(FactPartUsage, FactPartUsage[Quantity] × FactPartUsage[UnitCost])", meaning: "Evaluates quantity times unit cost for each visible row, then sums.", requirement: "Use SUMX because no stored ExtendedCost column is being summed." },
    { id: "alternate-date", name: "Alternate relationship", formula: "Opened Events := CALCULATE([Maintenance Events], USERELATIONSHIP(DimDate[DateKey], FactMaintenanceEvent[OpenedDateKey]))", meaning: "Evaluates event count by the alternate opened-date relationship.", requirement: "The relationship must already exist and the measure name must identify its date role." },
  ],

  workedExamples: [
    {
      id: "example-06-04-01",
      title: "Evaluate one measure in four visual contexts",
      problem: "[Total Downtime] equals 369 overall. Plant A has 65, B has 161, and C has 143 minutes.",
      solutionSteps: [
        "On a card with no plant filter, all visible fact rows sum to 369.",
        "On Plant A's matrix row, DimPlant filters the fact to A and returns 65.",
        "On Plant B's row, the same measure sees B rows and returns 161.",
        "At the grand total, the plant-row filter is absent, so the measure evaluates again and returns 369.",
      ],
      answer: "One measure returns 369, 65, 161, or 143 because the filter context changes—not because the formula changes.",
      interpretation: "A measure result belongs to a context-specific query cell.",
    },
    {
      id: "example-06-04-02",
      title: "Choose a measure instead of a calculated column",
      problem: "The report needs repair-cost share that responds to year, plant, asset, and severity slicers.",
      solutionSteps: [
        "A calculated column would produce one row-level stored value during refresh or model evaluation.",
        "The requested share depends on changing visual and slicer filters.",
        "Create base measure [Total Repair Cost].",
        "Create a derived measure with a denominator whose intended filter scope is explicit.",
      ],
      answer: "Use a measure because the value must be evaluated dynamically in report context.",
      interpretation: "Interactivity is a semantic requirement, not a formatting preference.",
    },
    {
      id: "example-06-04-03",
      title: "Predict CALCULATE filter replacement",
      problem: "A visual is filtered to Severity = Medium, and [Critical Downtime] applies Severity = Critical inside CALCULATE.",
      solutionSteps: [
        "Record the incoming Medium filter on DimFailure[Severity].",
        "The CALCULATE filter targets that same column.",
        "Without KEEPFILTERS, the new Critical filter replaces Medium.",
        "The measure returns Critical downtime, not the overlap of Medium and Critical.",
      ],
      answer: "The result uses Critical severity because same-column filters are replaced by default.",
      interpretation: "CALCULATE can intentionally answer a question different from the visible selection, so names and documentation matter.",
    },
    {
      id: "example-06-04-04",
      title: "Use KEEPFILTERS for intersection",
      problem: "The visual is filtered to Medium severity, and the measure applies KEEPFILTERS(Severity = Critical).",
      solutionSteps: [
        "Retain the incoming Medium set.",
        "Intersect it with the new Critical set.",
        "The intersection is empty because one row cannot have both labels in this single-value dimension.",
        "The measure returns blank or zero according to downstream handling.",
      ],
      answer: "KEEPFILTERS preserves the incoming filter and applies set intersection rather than replacement.",
      interpretation: "Use intersection only when that behavior matches the business question.",
    },
    {
      id: "example-06-04-05",
      title: "Repair percent of total",
      problem: "Plant A has 65 downtime minutes out of 369 in the current year and selected failure categories.",
      solutionSteps: [
        "The numerator [Total Downtime] retains Plant A and returns 65.",
        "The denominator uses CALCULATE([Total Downtime], REMOVEFILTERS(DimPlant)).",
        "Only the plant filter is removed; year and failure selections remain.",
        "Calculate 65 ÷ 369 ≈ 17.62%.",
      ],
      answer: "Plant A's share is approximately 17.62% for the preserved report scope.",
      interpretation: "A percent-of-total measure is defined primarily by its denominator context.",
    },
    {
      id: "example-06-04-06",
      title: "Recognize row context in SUMX",
      problem: "Part-usage rows contain Quantity and UnitCost but no ExtendedCost column.",
      solutionSteps: [
        "SUMX receives the currently filtered PartUsage table.",
        "For each visible row, row context supplies current Quantity and UnitCost.",
        "Evaluate Quantity × UnitCost for that row.",
        "Sum the row results to return one scalar extended cost.",
      ],
      answer: "SUMX performs row-level multiplication followed by aggregation.",
      interpretation: "Use an iterator when aggregation must occur after a row expression is evaluated.",
    },
    {
      id: "example-06-04-07",
      title: "Explain context transition",
      problem: "An iterator evaluates a model measure [Total Repair Cost] for each asset row.",
      solutionSteps: [
        "The iterator creates row context for the current asset row.",
        "A model-measure reference performs context transition automatically.",
        "Current asset values become filters that propagate to the fact table.",
        "[Total Repair Cost] evaluates for that asset rather than for all assets.",
      ],
      answer: "Context transition converts the current asset row into filter context for the measure.",
      interpretation: "Row context alone is not the same as a model filter; transition creates the filter behavior.",
    },
    {
      id: "example-06-04-08",
      title: "Use variables to make intent testable",
      problem: "A measure repeats the same prior-period expression three times.",
      solutionSteps: [
        "Store current result in VAR CurrentValue.",
        "Store comparison result in VAR PriorValue.",
        "Define VAR Change = CurrentValue - PriorValue.",
        "RETURN DIVIDE(Change, PriorValue), then temporarily return each variable while debugging.",
      ],
      answer: "Variables reduce repeated logic and allow each intermediate value to be inspected.",
      interpretation: "Readable DAX is easier to review, optimize, govern, and repair.",
    },
  ],

  interactiveExploration: {
    title: "Context Laboratory: Predict Before You Run",
    description:
      "Use a Power BI matrix with Plant on rows, Severity on columns, and [Total Downtime], [Critical Downtime], [Selected Critical Downtime], and [Plant Share] as values.",
    instructions: [
      "Write the incoming filter context for one detail cell, one subtotal, and the grand total.",
      "Predict each measure result before viewing Power BI's result.",
      "Select Medium severity and compare replacement with KEEPFILTERS intersection.",
      "Add a year slicer and confirm REMOVEFILTERS(DimPlant) preserves year.",
      "Replace REMOVEFILTERS(DimPlant) with REMOVEFILTERS() and document the changed denominator.",
      "Add an asset-type slicer and trace relationship propagation.",
      "Test no data, one plant, several plants, and all plants.",
      "Record any result that differs from the prediction and identify the missing context rule.",
    ],
    investigationQuestions: [
      "Which filters originate in the visual cell?",
      "Which filters arrive through relationships?",
      "Which filter does each CALCULATE argument replace, intersect, or remove?",
      "Why can a subtotal differ from the sum of visible non-additive child values?",
      "Which measure name communicates denominator scope most clearly?",
      "Which result should be blank instead of zero?",
    ],
    expectedDiscovery:
      "DAX becomes predictable when each cell is treated as a set problem: determine the incoming rows, apply the measure's context modifications, then evaluate the expression over the remaining rows.",
  },

  realWorldApplications: [
    { field: "Manufacturing and Robotics", application: "Calculate downtime, failure rate, critical-event burden, cost share, and alternate opened-versus-completed date measures under plant and asset filters." },
    { field: "Education", application: "Compute completion, attendance, mastery, and intervention rates that respond correctly to learner, course, term, and subgroup context." },
    { field: "Retail", application: "Evaluate revenue, margin, basket size, promotion lift, and percent of category totals without averaging row percentages." },
    { field: "Healthcare", application: "Measure wait time, readmission, utilization, and capacity with governed denominators, date roles, privacy filters, and subtotal behavior." },
    { field: "Finance", application: "Build actual, budget, variance, contribution, balance, and time-comparison measures whose context and additive behavior are controlled." },
    { field: "AI Operations", application: "Track predictions, reviewed cases, precision, recall, alert share, cost, and drift under model-version, cohort, threshold, and time filters." },
  ],

  aiConnection: {
    title: "AI-Generated DAX Must Explain Its Context",
    explanation:
      "An AI assistant can generate syntactically valid DAX that answers the wrong semantic question. Safe assistance requires the model grain, relationships, date roles, base-measure definitions, denominator scope, blank policy, filter-replacement behavior, security context, and expected test cases.",
    examples: [
      "Ask the assistant to list incoming filters and intended CALCULATE changes before proposing code.",
      "Require base measures instead of repeated SUM expressions.",
      "Require a denominator sentence for every percentage measure.",
      "Ask for detail-cell, subtotal, grand-total, no-data, and conflicting-filter test cases.",
      "Compare generated output with reconciled hand calculations and Performance Analyzer evidence.",
    ],
    caution:
      "Never approve DAX because it returns a plausible number in one visual. Test the same measure under multiple filter contexts, totals, alternate date roles, row-level security roles, and known source-controlled examples.",
    reflectionQuestion:
      "What context contract should Luminery AI be required to produce alongside every generated DAX measure?",
  },

  pythonLab: {
    title: "Python Lab — Simulate DAX Filter Context and CALCULATE",
    objective:
      "Build a small maintenance model, evaluate reusable measures under changing filter contexts, simulate CALCULATE replacement, KEEPFILTERS intersection, REMOVEFILTERS denominators, and SUMX row iteration, then export a context-test matrix.",
    code: `from pathlib import Path
import json
import pandas as pd

output_dir = Path("dax_context_output")
output_dir.mkdir(exist_ok=True)

events = pd.DataFrame({
    "EventKey": [1001, 1002, 1003, 1004, 1005, 1006, 1007, 1008],
    "Plant": ["A", "A", "B", "C", "A", "B", "B", "C"],
    "Severity": ["High", "Medium", "Critical", "High", "Medium", "Critical", "Medium", "Critical"],
    "AssetType": ["Mixer", "Mixer", "Robot", "Robot", "Mixer", "Mixer", "Robot", "Robot"],
    "Year": [2026] * 8,
    "DowntimeMinutes": [35, 18, 74, 52, 12, 63, 24, 91],
    "RepairCost": [420.0, 180.0, 1250.0, 760.0, 95.0, 980.0, 240.0, 1420.0],
})

part_usage = pd.DataFrame({
    "Plant": ["A", "A", "B", "B", "C"],
    "Part": ["Bearing", "Sensor", "Motor", "Sensor", "Motor"],
    "Quantity": [2, 3, 1, 4, 2],
    "UnitCost": [75.0, 40.0, 550.0, 40.0, 550.0],
})

def apply_context(table, context):
    visible = table.copy()
    for column, allowed_values in context.items():
        allowed = set(allowed_values)
        visible = visible.loc[visible[column].isin(allowed)]
    return visible

def calculate_context(base_context, replacements=None, keepfilters=None, remove=None):
    result = {column: set(values) for column, values in base_context.items()}

    for column in remove or []:
        result.pop(column, None)

    for column, values in (replacements or {}).items():
        result[column] = set(values)

    for column, values in (keepfilters or {}).items():
        incoming = result.get(column, set(events[column].dropna().unique()))
        result[column] = incoming.intersection(set(values))

    return result

def total_downtime(context):
    return float(apply_context(events, context)["DowntimeMinutes"].sum())

def maintenance_events(context):
    return int(len(apply_context(events, context)))

def total_repair_cost(context):
    return float(apply_context(events, context)["RepairCost"].sum())

def average_downtime(context):
    count = maintenance_events(context)
    return total_downtime(context) / count if count else None

def critical_downtime_replace(context):
    modified = calculate_context(context, replacements={"Severity": {"Critical"}})
    return total_downtime(modified)

def critical_downtime_keep(context):
    modified = calculate_context(context, keepfilters={"Severity": {"Critical"}})
    return total_downtime(modified)

def plant_share(context):
    numerator = total_downtime(context)
    denominator_context = calculate_context(context, remove=["Plant"])
    denominator = total_downtime(denominator_context)
    return numerator / denominator if denominator else None

def extended_part_cost(context):
    visible = apply_context(part_usage, context)
    row_values = visible["Quantity"] * visible["UnitCost"]
    return float(row_values.sum())

test_contexts = [
    {"case": "Grand total", "context": {}},
    {"case": "Plant A", "context": {"Plant": {"A"}}},
    {"case": "Plant B", "context": {"Plant": {"B"}}},
    {"case": "Plant C", "context": {"Plant": {"C"}}},
    {"case": "Medium selected", "context": {"Severity": {"Medium"}}},
    {"case": "Plant B + Critical", "context": {"Plant": {"B"}, "Severity": {"Critical"}}},
    {"case": "Robots only", "context": {"AssetType": {"Robot"}}},
]

rows = []
for test in test_contexts:
    context = test["context"]
    rows.append({
        "case": test["case"],
        "context": json.dumps({k: sorted(v) for k, v in context.items()}),
        "events": maintenance_events(context),
        "downtime": total_downtime(context),
        "repair_cost": total_repair_cost(context),
        "avg_downtime": average_downtime(context),
        "critical_replace": critical_downtime_replace(context),
        "critical_keep": critical_downtime_keep(context),
        "plant_share": plant_share(context),
    })

context_matrix = pd.DataFrame(rows)

# Known-result validation: base measures and visual contexts.
assert total_downtime({}) == 369
assert total_repair_cost({}) == 5345
assert maintenance_events({}) == 8
assert total_downtime({"Plant": {"A"}}) == 65
assert total_downtime({"Plant": {"B"}}) == 161
assert total_downtime({"Plant": {"C"}}) == 143

# CALCULATE replacement versus KEEPFILTERS intersection.
medium_context = {"Severity": {"Medium"}}
assert critical_downtime_replace(medium_context) == 228
assert critical_downtime_keep(medium_context) == 0

# REMOVEFILTERS(Plant) preserves other filters in the denominator.
plant_b_critical = {"Plant": {"B"}, "Severity": {"Critical"}}
assert total_downtime(plant_b_critical) == 137
assert total_downtime(calculate_context(plant_b_critical, remove=["Plant"])) == 228
assert round(plant_share(plant_b_critical), 6) == round(137 / 228, 6)

# SUMX-style row context: Quantity * UnitCost for every visible row, then sum.
assert extended_part_cost({}) == 2080
assert extended_part_cost({"Plant": {"A"}}) == 270

context_matrix.to_csv(output_dir / "context_test_matrix.csv", index=False)
with (output_dir / "measure_contracts.json").open("w", encoding="utf-8") as file:
    json.dump({
        "Total Downtime": "SUM visible DowntimeMinutes",
        "Critical Downtime Replace": "Replace incoming Severity with Critical",
        "Critical Downtime Keep": "Intersect incoming Severity with Critical",
        "Plant Share": "Remove only Plant from denominator context",
        "Extended Part Cost": "SUMX visible rows: Quantity * UnitCost",
    }, file, indent=2)

print(context_matrix.round(4).to_string(index=False))
print("\\nExtended part cost — all plants:", extended_part_cost({}))
print("Extended part cost — Plant A:", extended_part_cost({"Plant": {"A"}}))
print("Artifacts:", sorted(path.name for path in output_dir.iterdir()))
print("All context, replacement, intersection, denominator, and iterator tests passed.")`,
    questions: [
      "Why does total_downtime return different values without changing its function definition?",
      "Why does critical_downtime_replace return 228 when Medium is selected?",
      "Why does critical_downtime_keep return 0 for the same incoming selection?",
      "Which filters remain in the Plant B + Critical denominator?",
      "Why is the Plant B + Critical share 137 ÷ 228 rather than 137 ÷ 369?",
      "How does extended_part_cost simulate SUMX row context?",
      "Which additional test would validate multi-select plant behavior?",
      "How would you represent blank rather than zero when no rows are visible?",
    ],
    reflectionQuestions: [
      "Which context behavior was hardest to predict before running the lab?",
      "What measure name would make replacement versus intersection behavior obvious to a report author?",
      "Which calculation should move upstream, remain a calculated column, or remain a measure?",
      "What evidence should accompany an AI-generated version of these measures?",
    ],
    extension:
      "Add OpenedYear and CompletedYear, simulate USERELATIONSHIP by selecting the requested date column, and prove that an 'Opened Events' measure and 'Completed Events' measure return different but reconciled totals under the same calendar selection.",
  },

  guidedPractice: [
    { id: "gp-06-04-01", question: "A card and a plant matrix use the same [Total Cost] measure. Why can their results differ?", answer: "Each visual cell supplies a different filter context; the measure evaluates over the rows visible to that context." },
    { id: "gp-06-04-02", question: "Where is row context normally created?", answer: "In a calculated column or by an iterator such as SUMX or FILTER." },
    { id: "gp-06-04-03", question: "What does CALCULATE do when its filter targets a column already filtered?", answer: "By default it replaces the existing same-column filter; KEEPFILTERS requests intersection instead." },
    { id: "gp-06-04-04", question: "Why use REMOVEFILTERS(DimPlant) instead of REMOVEFILTERS() in a plant-share denominator?", answer: "It removes only plant while preserving other decision-relevant filters such as year, asset type, and severity." },
    { id: "gp-06-04-05", question: "Why does SUMX create row context?", answer: "It evaluates its expression separately for each row of the input table before aggregating the row results." },
    { id: "gp-06-04-06", question: "What is context transition?", answer: "It converts current-row values into filter context so an aggregation can evaluate for that row's entity." },
  ],

  independentPractice: [
    { id: "ip-06-04-01", difficulty: "Foundational", question: "Write a base measure for Total Repair Cost.", answer: "Total Repair Cost := SUM(FactMaintenanceEvent[RepairCost])" },
    { id: "ip-06-04-02", difficulty: "Foundational", question: "Explain why a calculated percentage column does not respond like a measure to slicers.", answer: "The column is evaluated at row level and stored or materialized according to the model mode; the measure is reevaluated under interactive filter context." },
    { id: "ip-06-04-03", difficulty: "Applied", question: "Write a measure for Critical Repair Cost that replaces the incoming severity filter.", answer: "Critical Repair Cost := CALCULATE([Total Repair Cost], DimFailure[Severity] = \"Critical\")" },
    { id: "ip-06-04-04", difficulty: "Applied", question: "Rewrite the measure so Critical is intersected with an existing severity selection.", answer: "Selected Critical Repair Cost := CALCULATE([Total Repair Cost], KEEPFILTERS(DimFailure[Severity] = \"Critical\"))" },
    { id: "ip-06-04-05", difficulty: "Analytical", question: "Design a percent-of-total measure that removes plant but preserves time, asset, and failure filters.", answer: "Plant Cost Share := DIVIDE([Total Repair Cost], CALCULATE([Total Repair Cost], REMOVEFILTERS(DimPlant)))" },
    { id: "ip-06-04-06", difficulty: "Analytical", question: "Explain why a subtotal for an average should be recalculated rather than summed from child averages.", answer: "An average is non-additive; the subtotal must recompute total numerator divided by total denominator in subtotal context." },
    { id: "ip-06-04-07", difficulty: "Advanced", question: "Write an iterator measure for total labor cost from Hours and HourlyRate.", answer: "Total Labor Cost := SUMX(FactLabor, FactLabor[Hours] * FactLabor[HourlyRate])" },
    { id: "ip-06-04-08", difficulty: "Professional", question: "Create a validation matrix for a new CALCULATE measure.", sampleAnswer: "Include detail rows, grand total, no filter, one filter, multi-select, conflicting same-column filter, removed filter, preserved filter, no data, alternate date, and security role." },
  ],

  commonMistakes: [
    { mistake: "Treating a measure as a stored column", correction: "Remember that a measure is evaluated for each query or visual cell under current filter context." },
    { mistake: "Using a calculated column for a dynamic percentage", correction: "Build numerator and denominator measures and recompute the ratio in context." },
    { mistake: "Assuming row context automatically filters related facts", correction: "Use context transition through CALCULATE or a model-measure reference when the business logic requires it." },
    { mistake: "Ignoring CALCULATE's same-column replacement behavior", correction: "Decide explicitly whether the measure should replace or intersect an incoming filter." },
    { mistake: "Using REMOVEFILTERS() without declaring scope", correction: "Remove only the dimension or column required by the denominator question." },
    { mistake: "Averaging row percentages or child averages", correction: "Recompute non-additive results from compatible base measures at each context level." },
    { mistake: "Using SUM when the required expression is Quantity × UnitCost", correction: "Use SUMX or create an approved upstream row value before aggregation." },
    { mistake: "Using FILTER as every CALCULATE argument", correction: "Prefer a valid Boolean filter when possible; use FILTER when genuinely row-wise table logic is required." },
    { mistake: "Repeating raw aggregation logic inside every measure", correction: "Create governed base measures and branch derived measures from them." },
    { mistake: "Confusing blank with zero", correction: "Define no-data, zero-activity, missing-denominator, and suppressed-data behavior separately." },
    { mistake: "Testing only a grand total", correction: "Test detail cells, subtotals, conflicting filters, multi-select, no data, and preserved context." },
    { mistake: "Accepting AI-generated DAX after one plausible result", correction: "Require context explanation, source reconciliation, edge cases, performance review, and security-role testing." },
  ],

  discussionQuestions: [
    "When should a calculation be created upstream instead of in DAX?",
    "Should a measure override a user's slicer selection without making that behavior visible?",
    "How should a percent-of-total measure define 'total' when several dimensions are filtered?",
    "When is KEEPFILTERS necessary, and when does it create an empty intersection that confuses users?",
    "Why can a correct grand total differ from the sum of displayed row percentages?",
    "How should teams document blank and zero behavior?",
    "What context evidence should be required in DAX code review?",
    "How can AI help debug DAX without becoming a source of unverified semantic changes?",
  ],

  formativeAssessment: {
    totalPoints: 50,
    passingScore: 40,
    questions: [
      { id: "fa-06-04-01", points: 5, prompt: "Define filter context and name four sources of it.", sampleAnswer: "Filter context is the set of active model-column filters during measure evaluation. Sources include slicers, page filters, visual filters, row/column headers, DAX filters, and propagated relationships." },
      { id: "fa-06-04-02", points: 5, prompt: "Define row context and name two places it occurs.", answer: "Row context identifies the current row. It occurs in calculated columns and iterator expressions such as SUMX or FILTER." },
      { id: "fa-06-04-03", points: 5, prompt: "What is the difference between a measure and calculated column?", sampleAnswer: "A measure returns a scalar dynamically in filter context; a calculated column produces a row-level model field used for grouping, filtering, sorting, or relationships and does not respond like a measure to report interactions." },
      { id: "fa-06-04-04", points: 5, prompt: "Explain CALCULATE in one precise sentence.", answer: "CALCULATE evaluates a scalar expression in a modified filter context." },
      { id: "fa-06-04-05", points: 5, prompt: "What happens when CALCULATE applies Critical to an already Medium-filtered Severity column?", answer: "Critical replaces Medium by default; with KEEPFILTERS, the result is the intersection." },
      { id: "fa-06-04-06", points: 5, prompt: "Write a plant-share denominator that preserves all filters except plant.", answer: "CALCULATE([Total Downtime], REMOVEFILTERS(DimPlant))" },
      { id: "fa-06-04-07", points: 5, prompt: "Why does SUMX create row context?", answer: "It evaluates its expression once per input-table row before summing the row results." },
      { id: "fa-06-04-08", points: 5, prompt: "Define context transition.", answer: "It converts values from the current row into filters so an expression can evaluate under filter context for that row." },
      { id: "fa-06-04-09", points: 5, prompt: "Why are DAX variables recommended?", answer: "They can improve readability, reuse, debugging, efficiency, reliability, and reduce repeated expression complexity." },
      { id: "fa-06-04-10", points: 5, prompt: "Name five contexts or edge cases required for measure validation.", sampleAnswer: "Detail cell, subtotal, grand total, no filter, single selection, multi-select, conflicting filter, removed-filter denominator, no data, blank denominator, alternate date, and security role; any five earn full credit." },
    ],
  },

  researchExtension: {
    title: "Research Extension — DAX Context Correctness Study",
    description:
      "Compare mathematically plausible measures that differ only in filter-context design.",
    researchQuestion:
      "How do filter replacement, intersection, and selective filter removal change business conclusions across detail, subtotal, and grand-total contexts?",
    applicationOptions: ["Maintenance cost", "Learner intervention", "Retail margin", "Healthcare utilization", "Financial variance", "AI alert quality"],
    task:
      "Select one decision metric and create at least three competing DAX definitions. State the denominator and filter contract for each, generate a controlled test model, evaluate the measures under at least twelve contexts, and conduct a reader test to determine which definition users interpret correctly.",
    requiredEvidence: [
      "Business question, user, decision, and action threshold",
      "Fact grain, relationships, date role, and base-measure definitions",
      "Filter contract for every candidate measure",
      "Detail, subtotal, total, multi-select, conflict, no-data, and security tests",
      "Hand-calculated expected values",
      "Performance and readability comparison",
      "Reader interpretation results",
      "Recommendation, rejected definitions, risks, and monitoring plan",
    ],
  },

  portfolioArtifact: {
    title: "Portfolio Artifact — Governed DAX Measure Catalog",
    description:
      "Create a professional measure catalog and context-validation workbook for the maintenance semantic model from Lesson 3.",
    requiredSections: [
      "Stakeholder decisions and metric questions",
      "Base-measure layer",
      "Derived ratios, shares, and conditional measures",
      "CALCULATE filter contracts",
      "Iterator and context-transition examples",
      "Date-role measures",
      "Blank, zero, error, and format policies",
      "Test matrix with expected and actual results",
      "Performance, security, accessibility, lineage, owner, and reviewer records",
      "AI-generation review protocol",
    ],
    requiredEvidence: [
      "At least fifteen explicit measures organized in display folders",
      "Every percentage has a numerator and denominator definition",
      "Every CALCULATE measure identifies replaced, intersected, removed, and preserved filters",
      "At least two SUMX or iterator measures",
      "At least one alternate-date measure using USERELATIONSHIP",
      "Detail, subtotal, grand-total, conflicting-filter, and no-data tests",
      "Reconciliation to approved source totals",
      "Peer review with defects, corrections, and retest evidence",
    ],
  },

  growthIndicators: [
    { title: "Context Reasoner", description: "You predict a measure result by tracing direct, propagated, modified, and removed filters." },
    { title: "Measure Architect", description: "You create reusable base measures and governed derived calculations with explicit denominator scope." },
    { title: "DAX Debugger", description: "You isolate context, variables, subtotals, blanks, and alternate paths using controlled tests." },
    { title: "Evidence Reviewer", description: "You reconcile measures, document intent, test security, and reject plausible but unverified output." },
  ],

  reflection: [
    "What filter context does this exact visual cell create?",
    "Which filters reach the fact through relationships?",
    "Does CALCULATE replace, intersect, remove, or redirect each filter?",
    "What does 'total' mean in this denominator?",
    "Should the calculation react to report interaction or remain a stable row attribute?",
    "Does the formula require row context, filter context, or both?",
    "Could SUMX be replaced by a simpler aggregation or an upstream column?",
    "Should no visible rows produce blank or zero?",
    "Why might a subtotal differ from the sum of child results?",
    "Which variables expose useful intermediate values?",
    "What test would reveal an unintended filter removal?",
    "Can another analyst explain the measure without reading the implementation?",
  ],

  summary: [
    "A measure is evaluated dynamically for each query or visual cell; it is not a stored result.",
    "Filter context comes from report selections, visual structure, DAX filters, and relationship propagation.",
    "Row context identifies the current row in calculated columns and iterators.",
    "Row context and filter context are different; context transition connects them when required.",
    "CALCULATE evaluates a scalar expression in modified filter context.",
    "A new same-column CALCULATE filter replaces the incoming filter by default.",
    "KEEPFILTERS requests intersection instead of replacement.",
    "REMOVEFILTERS and ALL can clear context, so their scope must match the denominator question.",
    "Use explicit base measures and branch derived measures from governed definitions.",
    "Use DIVIDE for safe ratios and document blank or alternate-result behavior.",
    "Use SUMX when a row expression must be evaluated before aggregation.",
    "Model-measure references in row context perform context transition automatically.",
    "USERELATIONSHIP supports a named alternate relationship such as an opened-date role.",
    "Variables improve readability, reduce repeated logic, and support debugging.",
    "Non-additive values must be recalculated at subtotal and total context.",
    "Validate every measure across detail, subtotal, grand total, filter conflicts, multi-select, no-data, date, and security cases.",
    "AI-generated DAX remains untrusted until its context contract and results are independently verified.",
  ],

  previousLesson: {
    id: "data-ai-m06-l03",
    moduleNumber: 6,
    slug: "power-bi-star-schema-semantic-modeling",
    title: "Power BI Star-Schema Semantic Modeling",
  },
  nextLesson: {
    id: "data-ai-m06-l05",
    moduleNumber: 6,
    slug: "time-intelligence-and-performance-measures",
    title: "Time Intelligence and Performance Measures",
  },

  lumineryGuidance: {
    message:
      "Write the context before the code. A trustworthy measure names the question, controls only the intended filters, and proves its behavior across detail and total contexts.",
    prompt:
      "Act as my senior Power BI DAX educator, semantic-model architect, measure reviewer, performance analyst, and evidence mentor. Help me complete Module 6 Lesson 4 one verified gate at a time. Require a business question, fact grain, visual cell, incoming filter context, relationship propagation, base measures, CALCULATE filter contract, replacement-versus-intersection decision, denominator scope, row-context need, context-transition explanation, variable plan, blank policy, formatting, reconciliation, totals, edge cases, security, and peer review. Do not approve dynamic business metrics as calculated columns, implicit measures, averaged percentages, unexplained REMOVEFILTERS(), unnecessary FILTER expressions, accidental same-column replacement, hidden date roles, repeated raw aggregation logic, plausible subtotals without validation, or AI-generated DAX tested in only one context.",
    coachingQuestions: [
      "What exact visual cell are we evaluating?",
      "Which direct and propagated filters are active?",
      "Which filters should CALCULATE add, replace, intersect, remove, or redirect?",
      "What does the denominator include and exclude?",
      "Does this require a dynamic measure or a stable row attribute?",
      "Where is row context created?",
      "Is context transition occurring?",
      "Could a base measure or variable simplify the expression?",
      "What should happen for subtotal, no data, zero denominator, and multi-select?",
      "Which hand-calculated case proves the measure is correct?",
    ],
  },
};

export default lesson04;
