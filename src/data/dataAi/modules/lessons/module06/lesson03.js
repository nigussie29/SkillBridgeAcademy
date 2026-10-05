const lesson03 = {
  id: "data-ai-m06-l03",
  courseId: "data-ai-foundations",
  moduleId: "data-ai-foundations-module-06",
  moduleNumber: 6,
  lessonNumber: 3,
  slug: "power-bi-star-schema-semantic-modeling",
  title: "Power BI Star-Schema Semantic Modeling",
  shortTitle: "Star-Schema Semantic Modeling",
  subtitle:
    "Turn operational records into a trustworthy Power BI semantic model by defining grain, separating facts from dimensions, enforcing one-to-many relationships, controlling filter paths, and validating every key and measure before reporting.",
  status: "available",
  duration: "5–6 hours",
  level: "Beginner to Professional",

  essentialQuestion:
    "How do we design a Power BI semantic model so every filter, total, drill path, and AI-generated answer preserves the intended business meaning?",
  bigIdea:
    "A star schema is a contract: dimensions describe who, what, where, and when; a fact table records one declared event grain and its measurable values; one-to-many relationships carry filters from unique dimensions into many fact rows. Clear grain and validated keys make measures predictable, reusable, and auditable.",

  whyThisLessonExists: {
    title: "A Beautiful Report Cannot Repair a Broken Model",
    introduction:
      "Power BI visuals depend on the semantic model beneath them. A single flat export may appear convenient, but duplicated descriptions, mixed grains, ambiguous filter paths, and implicit totals can quietly produce different answers for the same question.",
    centralProblem:
      "A maintenance report joins work orders, sensor alerts, technicians, plants, and monthly targets into one wide table. Asset attributes repeat thousands of times, plant totals double-count after a many-to-many join, one date slicer filters opened dates but not closed dates, and no one can explain why the executive total differs from finance.",
    purpose:
      "This lesson teaches a production-ready modeling workflow: begin with a decision and business process, declare the fact grain, design conformed dimensions, choose stable keys, validate referential integrity, create active one-to-many single-direction relationships, add an explicit date table and measures, test filter behavior, document exceptions, and publish only after reconciliation.",
  },

  problemFirst: {
    title: "Opening Investigation: Why Did the Total Double?",
    scenario:
      "FactMaintenanceEvent contains 8,420 maintenance events. A technician bridge contains multiple technicians per event. After a direct many-to-many relationship is enabled and both-direction filtering is turned on, Total Repair Cost rises from $1.24M to $1.91M for the same year. The report still looks plausible.",
    questions: [
      "What exactly does one row of the maintenance fact table represent?",
      "Which table owns the repair-cost value, and at what grain?",
      "Which columns should filter and group, and which should summarize?",
      "Are dimension keys unique on the one side of every relationship?",
      "Does every fact foreign key match one dimension row?",
      "How can a bridge preserve multi-technician participation without multiplying cost?",
      "Which relationship paths are active, inactive, single direction, or ambiguous?",
      "What reconciliation proves the semantic model preserves the source total?",
    ],
    expectedInsight:
      "The failure is structural, not visual. The team must declare grain, control relationship paths, and test additive measures at the correct level before trusting any report total.",
  },

  starSchemaDiagram: {
    title: "Maintenance Analytics Star Schema",
    description:
      "Each green dimension has one unique row per key and filters the amber fact table. The fact table stores repeated foreign keys plus numeric measures at one stable event grain.",
    accessibleDescription:
      "Star schema with FactMaintenanceEvent in the center. DimDate, DimAsset, DimPlant, DimTechnician, and DimFailure surround it. Each dimension has a one-to-many, single-direction relationship into the fact table.",
    grain: "One row per completed maintenance event",
    note:
      "DateKey, AssetKey, PlantKey, TechnicianKey, and FailureKey are foreign keys in the fact table. If an event can have several technicians, model participation in a separate bridge and keep event-level cost in the event fact; never duplicate the cost across bridge rows.",
    fact: {
      name: "FactMaintenanceEvent",
      fields: [
        { name: "EventKey", key: "PK" },
        { name: "DateKey", key: "FK" },
        { name: "AssetKey", key: "FK" },
        { name: "PlantKey", key: "FK" },
        { name: "TechnicianKey", key: "FK" },
        { name: "FailureKey", key: "FK" },
        { name: "DowntimeMinutes" },
        { name: "RepairCost" },
      ],
    },
    dimensions: [
      {
        name: "DimDate",
        fields: [
          { name: "DateKey", key: "PK" },
          { name: "Date" },
          { name: "Month" },
          { name: "Quarter" },
          { name: "Year" },
        ],
      },
      {
        name: "DimAsset",
        fields: [
          { name: "AssetKey", key: "PK" },
          { name: "AssetID" },
          { name: "AssetType" },
          { name: "Model" },
          { name: "CommissionDate" },
        ],
      },
      {
        name: "DimPlant",
        fields: [
          { name: "PlantKey", key: "PK" },
          { name: "PlantID" },
          { name: "PlantName" },
          { name: "Region" },
          { name: "CapacityBand" },
        ],
      },
      {
        name: "DimTechnician",
        fields: [
          { name: "TechnicianKey", key: "PK" },
          { name: "TechnicianID" },
          { name: "Team" },
          { name: "Certification" },
          { name: "Shift" },
        ],
      },
      {
        name: "DimFailure",
        fields: [
          { name: "FailureKey", key: "PK" },
          { name: "FailureCode" },
          { name: "Category" },
          { name: "Severity" },
          { name: "IsSafetyRelated" },
        ],
      },
    ],
  },

  visualModels: [
    {
      id: "semantic-model-build-gates",
      type: "lifecycle",
      title: "The Semantic-Model Build Gates",
      description:
        "Move from business meaning to a tested Power BI model. A failed gate sends the model back for repair.",
      stages: [
        { label: "1. Decision", detail: "Name the user, decision, questions, time range, and required drill paths." },
        { label: "2. Process", detail: "Choose the business process: maintenance event, sensor reading, work order, or inventory snapshot." },
        { label: "3. Grain", detail: "Complete the sentence: one fact row represents exactly one ____." },
        { label: "4. Dimensions", detail: "Create descriptive entities with one stable row per relationship key." },
        { label: "5. Relationships", detail: "Connect dimensions 1→* to the fact with active, single-direction paths." },
        { label: "6. Measures", detail: "Define explicit DAX measures with units, aggregation behavior, and blank handling." },
        { label: "7. Validation", detail: "Test uniqueness, orphan keys, row preservation, totals, filters, and edge cases." },
        { label: "8. Publish", detail: "Document lineage, ownership, refresh, security, definitions, and monitoring." },
      ],
      feedback:
        "If the team cannot state the fact grain in one sentence, relationships and totals are not ready for publication.",
      interpretation:
        "Semantic modeling is evidence engineering: every visible answer inherits the strengths and defects of these earlier design decisions.",
    },
    {
      id: "filter-context-route",
      type: "lifecycle",
      title: "How a Slicer Becomes a Number",
      description:
        "Trace a filter from a report selection to the evaluated measure.",
      stages: [
        { label: "Selection", detail: "The user selects Plant C and 2026 Q2." },
        { label: "Dimension filters", detail: "DimPlant and DimDate retain the matching unique rows." },
        { label: "Relationship propagation", detail: "Active single-direction relationships restrict matching fact foreign keys." },
        { label: "Fact subset", detail: "Only maintenance events for Plant C in 2026 Q2 remain in filter context." },
        { label: "Measure evaluation", detail: "SUM, COUNTROWS, DIVIDE, or another explicit measure evaluates over that subset." },
        { label: "Visual result", detail: "The chart displays the result with current scope, unit, and filter context." },
      ],
      feedback:
        "A total is not stored truth; it is a measure evaluated under a specific filter context.",
      interpretation:
        "When a result is wrong, trace the selection, dimension rows, relationship path, fact rows, and measure definition in that order.",
    },
  ],

  learningObjectives: [
    "Explain the role of a Power BI semantic model between prepared data and report visuals.",
    "Differentiate operational, normalized, flat, snowflake, and star-schema designs.",
    "Declare a fact-table grain before selecting columns or relationships.",
    "Classify tables as facts, dimensions, bridges, or factless facts.",
    "Separate descriptive attributes from measurable events and observations.",
    "Choose durable business keys and model-friendly surrogate keys.",
    "Validate uniqueness on the one side and referential integrity on the many side.",
    "Create active one-to-many relationships with intentional cross-filter direction.",
    "Explain filter context propagation from dimensions to a fact table.",
    "Design a marked date dimension and handle multiple business dates with role-playing dimensions or inactive relationships.",
    "Distinguish additive, semi-additive, and non-additive measures.",
    "Write explicit base measures and derived measures with safe denominator handling.",
    "Recognize when a bridge table is required and prevent double counting.",
    "Reduce ambiguity, circular paths, unnecessary bidirectional filters, and accidental many-to-many relationships.",
    "Validate semantic totals against source-controlled reconciliations.",
    "Document grain, keys, relationships, measures, refresh, lineage, and ownership.",
    "Build and audit a maintenance star schema in pandas before reproducing it in Power BI.",
  ],

  prerequisiteKnowledge: [
    "Module 4 data preparation: types, missing values, deduplication, joins, and data-quality rules",
    "Module 6 Lessons 1–2: chart purpose, visual hierarchy, accessibility, and honest communication",
    "Basic relational concepts: table, row, column, primary key, and foreign key",
    "Basic aggregation: count, sum, average, minimum, maximum, and rate",
    "Python with pandas, pathlib, and JSON for the lab",
  ],

  vocabulary: [
    { term: "Semantic model", definition: "A governed analytical layer containing tables, relationships, hierarchies, measures, formats, metadata, and security rules." },
    { term: "Star schema", definition: "A dimensional model with a central fact table connected directly to denormalized dimension tables." },
    { term: "Fact table", definition: "A table recording events, transactions, observations, balances, or other measurable business-process rows at a declared grain." },
    { term: "Dimension table", definition: "A table of descriptive entities used to filter, group, label, and navigate facts." },
    { term: "Grain", definition: "The precise real-world meaning of one row in a table." },
    { term: "Business process", definition: "The activity or phenomenon measured by a fact table, such as a maintenance event or sensor reading." },
    { term: "Measure", definition: "A reusable calculation evaluated in the current filter context, usually written in DAX." },
    { term: "Explicit measure", definition: "A named model calculation created deliberately rather than an automatic aggregation of a column." },
    { term: "Additive fact", definition: "A numeric fact that can be summed across all relevant dimensions, such as repair cost by event." },
    { term: "Semi-additive fact", definition: "A fact that can be summed across some dimensions but not across time, such as an inventory balance." },
    { term: "Non-additive fact", definition: "A fact such as a ratio or percentage that should be recomputed from components rather than summed." },
    { term: "Primary key", definition: "A column or column set that uniquely identifies a row in its table." },
    { term: "Foreign key", definition: "A fact-table column whose value references a key in a related dimension." },
    { term: "Business key", definition: "An identifier from the operational domain, such as AssetID, whose lifecycle is controlled outside the model." },
    { term: "Surrogate key", definition: "A model-controlled identifier used to distinguish dimension rows and support history or integration." },
    { term: "Cardinality", definition: "The count relationship between keys in connected tables, such as one-to-many or many-to-many." },
    { term: "One-to-many relationship", definition: "A relationship where one dimension key value can match many fact rows." },
    { term: "Cross-filter direction", definition: "The permitted direction in which filters propagate through a relationship." },
    { term: "Active relationship", definition: "The default relationship path Power BI uses to propagate filters between two tables." },
    { term: "Inactive relationship", definition: "An alternative relationship stored in the model and activated within a measure when needed." },
    { term: "Filter context", definition: "The set of filters applied when a DAX measure is evaluated." },
    { term: "Role-playing dimension", definition: "One dimension used in several business roles, such as opened date, closed date, and due date." },
    { term: "Date dimension", definition: "A continuous calendar table containing one row per date and approved time attributes." },
    { term: "Conformed dimension", definition: "A shared dimension with consistent keys and definitions used across multiple fact tables." },
    { term: "Degenerate dimension", definition: "A transactional identifier kept in the fact table without a separate dimension table, such as WorkOrderNumber." },
    { term: "Bridge table", definition: "An intermediate table representing a legitimate many-to-many association without directly joining two many sides." },
    { term: "Factless fact", definition: "A fact table that records that an event or relationship occurred even when it has no numeric measure." },
    { term: "Slowly changing dimension", definition: "A dimension design that defines how attribute changes are overwritten or historically preserved." },
    { term: "Unknown member", definition: "A controlled dimension row used when a fact key is missing, late, or unmatched." },
    { term: "Orphan key", definition: "A foreign-key value in a fact table with no matching dimension key." },
    { term: "Referential integrity", definition: "The condition that every non-null foreign key matches an allowed dimension row." },
    { term: "Ambiguous path", definition: "Multiple active filter routes between tables that can produce unclear or conflicting propagation." },
    { term: "Bidirectional filtering", definition: "Relationship behavior that allows filters to travel both ways and can introduce ambiguity or unintended results." },
    { term: "Snowflake schema", definition: "A dimensional design where a dimension is further normalized into related subdimension tables." },
    { term: "Denormalization", definition: "Combining descriptive attributes into a dimension to simplify navigation and reduce relationship chains." },
    { term: "Composite model", definition: "A Power BI model that combines tables from different storage modes or source groups." },
    { term: "Lineage", definition: "Traceable information showing where model data and calculations originated and how they were transformed." },
    { term: "Reconciliation", definition: "A documented comparison proving model row counts and totals agree with an approved source at defined scopes." },
  ],

  formulas: [
    { id: "grain", name: "Fact grain declaration", formula: "1 fact row = 1 completed maintenance event", meaning: "Defines the atomic unit stored in the fact table.", requirement: "Every fact column must describe or measure that same row-level event." },
    { id: "cardinality", name: "Dimension-to-fact cardinality", formula: "Dim[Key] 1 → * Fact[Key]", meaning: "One unique dimension row can match many fact rows.", requirement: "Dim[Key] must be unique and fact keys must be validated." },
    { id: "downtime", name: "Total Downtime", formula: "Total Downtime := SUM(FactMaintenanceEvent[DowntimeMinutes])", meaning: "Adds event-level downtime in the current filter context.", requirement: "DowntimeMinutes must be additive at event grain and use one documented unit." },
    { id: "events", name: "Maintenance Events", formula: "Maintenance Events := COUNTROWS(FactMaintenanceEvent)", meaning: "Counts fact rows after current filters propagate.", requirement: "One row must represent one event; otherwise use a distinct event key." },
    { id: "average", name: "Average Downtime per Event", formula: "Avg Downtime/Event := DIVIDE([Total Downtime], [Maintenance Events])", meaning: "Recomputes a ratio from base measures.", requirement: "Use DIVIDE for safe blank or zero-denominator handling." },
    { id: "rate", name: "Failure Rate", formula: "Failure Rate := DIVIDE([Failed Events], [Operating Hours]) × 1000", meaning: "Normalizes failure burden by exposure.", requirement: "Numerator and denominator must share compatible plant, asset, and time scope." },
    { id: "orphans", name: "Orphan-key count", formula: "orphans = count(Fact FK values not found in Dim PK)", meaning: "Tests referential integrity for a relationship.", requirement: "Resolve, quarantine, or map every orphan to a documented unknown member." },
    { id: "reconciliation", name: "Reconciliation difference", formula: "difference = semantic-model total − approved-source total", meaning: "Detects lost, duplicated, or reclassified values.", requirement: "The acceptable tolerance and comparison scope must be declared before testing." },
  ],

  workedExamples: [
    {
      id: "example-06-03-01",
      title: "Declare the fact grain before choosing measures",
      problem: "A source includes WorkOrderID, AssetID, TechnicianID, PartID, DowntimeMinutes, and RepairCost; one work order can use several parts and technicians.",
      solutionSteps: [
        "Choose the business process: completed maintenance event.",
        "Declare the event fact as one row per completed maintenance event.",
        "Keep event-level downtime and cost in that fact only once.",
        "Model parts and multi-technician participation in separate line or bridge facts at their own grains.",
      ],
      answer: "Do not flatten all three grains into one fact; doing so multiplies event measures.",
      interpretation: "Grain determines which joins and aggregations are valid.",
    },
    {
      id: "example-06-03-02",
      title: "Classify columns into facts and dimensions",
      problem: "Place PlantName, FailureCategory, RepairCost, DowntimeMinutes, AssetModel, and CompletedDate.",
      solutionSteps: [
        "Place RepairCost and DowntimeMinutes in the maintenance-event fact.",
        "Place PlantName in DimPlant, FailureCategory in DimFailure, and AssetModel in DimAsset.",
        "Connect CompletedDate through DateKey to DimDate.",
        "Expose descriptive attributes from dimensions and aggregate numeric facts through measures.",
      ],
      answer: "Dimensions filter and group; the fact stores event keys and numeric observations.",
      interpretation: "Clear table roles make the model easier to use and harder to misuse.",
    },
    {
      id: "example-06-03-03",
      title: "Validate the one side",
      problem: "DimAsset contains AssetKey 104 twice with different AssetType values.",
      solutionSteps: [
        "Fail the uniqueness test for DimAsset[AssetKey].",
        "Determine whether the duplicate is a data defect or valid history.",
        "If history is required, assign different surrogate keys and effective date ranges.",
        "Do not force a many-to-many relationship to hide an unresolved dimension design.",
      ],
      answer: "Repair the dimension so each relationship key identifies exactly one modeled row.",
      interpretation: "Cardinality is a consequence of data meaning, not a setting chosen to make an error disappear.",
    },
    {
      id: "example-06-03-04",
      title: "Model two date roles",
      problem: "Users must analyze work orders by OpenedDate and ClosedDate.",
      solutionSteps: [
        "Create one continuous DimDate with a unique DateKey.",
        "Use an active relationship for the default reporting date, such as ClosedDateKey.",
        "Use an inactive OpenedDateKey relationship activated in a dedicated measure, or duplicate the date dimension into clearly named roles.",
        "Label measures and slicers so the active business date is unambiguous.",
      ],
      answer: "Use explicit date roles; never let one unlabeled date slicer imply both meanings.",
      interpretation: "Multiple dates are a semantic question before they are a DAX question.",
    },
    {
      id: "example-06-03-05",
      title: "Prevent ratio aggregation errors",
      problem: "Plant A has 10 failures in 1,000 hours and Plant B has 20 failures in 4,000 hours. A report averages their rates.",
      solutionSteps: [
        "Calculate combined failures: 10 + 20 = 30.",
        "Calculate combined exposure: 1,000 + 4,000 = 5,000 hours.",
        "Compute 30 ÷ 5,000 × 1,000 = 6 failures per 1,000 hours.",
        "Do not average 10 and 5 to obtain 7.5 because the exposures differ.",
      ],
      answer: "The correct combined rate is 6 failures per 1,000 operating hours.",
      interpretation: "Ratios are non-additive and should be recomputed from additive components in filter context.",
    },
    {
      id: "example-06-03-06",
      title: "Use a bridge without duplicating event cost",
      problem: "Event E10 has two technicians and a repair cost of $900.",
      solutionSteps: [
        "Store one $900 row for E10 in FactMaintenanceEvent.",
        "Store E10–T1 and E10–T2 participation rows in BridgeEventTechnician.",
        "Use bridge-aware measures for technician attribution.",
        "If allocating cost, define and validate weights that sum to 1 per event.",
      ],
      answer: "Event total remains $900; technician attribution requires a separate rule, not duplicated cost.",
      interpretation: "A bridge records association; it does not automatically define allocation.",
    },
  ],

  interactiveExploration: {
    title: "Model View Audit: Trace the Answer",
    description:
      "Sketch the provided maintenance model in Power BI Model view or on paper, then trace how Plant C and 2026 Q2 should filter Total Downtime.",
    instructions: [
      "Write the grain above every table.",
      "Mark PK and FK columns and circle duplicate keys on any intended one side.",
      "Label each relationship with cardinality, active state, and filter direction.",
      "Trace the Plant C and 2026 Q2 filter paths into the event fact.",
      "List the remaining fact rows and recompute Total Downtime manually.",
      "Introduce one orphan AssetKey and record how the result changes.",
      "Introduce an unnecessary bidirectional path and identify the ambiguity risk.",
      "Repair the model and complete a reconciliation checklist.",
    ],
    investigationQuestions: [
      "Which tables are safe to place in slicers?",
      "Can two active paths connect the same tables?",
      "Which total changes if a dimension key is duplicated?",
      "What should happen to missing or late-arriving dimension keys?",
      "Which relationship is technically valid but semantically wrong?",
      "What evidence would allow another analyst to reproduce the result?",
    ],
    expectedDiscovery:
      "Reliable totals emerge from a chain of evidence: unique dimension keys, valid fact foreign keys, one declared fact grain, intentional filter paths, correct measure logic, and reconciliation to an approved source.",
  },

  realWorldApplications: [
    { field: "Manufacturing and Robotics", application: "Model maintenance events, sensor readings, assets, plants, failure modes, and technicians without mixing event and reading grains." },
    { field: "Education", application: "Connect enrollment, attendance, assessment, learner, course, instructor, and calendar tables using shared definitions and protected learner keys." },
    { field: "Retail", application: "Analyze sales-line facts by date, store, product, promotion, and customer while recomputing margin and rates from base measures." },
    { field: "Healthcare", application: "Separate encounters, procedures, claims, patients, providers, facilities, and dates while enforcing privacy, lineage, and metric governance." },
    { field: "Finance", application: "Model journal entries, accounts, entities, cost centers, scenarios, and periods with reconciled balances and time-aware calculations." },
    { field: "Energy", application: "Keep interval readings, outages, assets, sites, tariffs, and weather at compatible grains for consumption and reliability reporting." },
  ],

  aiConnection: {
    title: "AI Needs Semantic Grounding",
    explanation:
      "Natural-language questions, generated narratives, anomaly explanations, and report copilots are safer when business entities, relationships, measures, descriptions, synonyms, and units are governed in the semantic model. The model supplies meaning; the AI does not remove the need for reconciled data and explicit definitions.",
    examples: [
      "A governed Total Repair Cost measure prevents an assistant from inventing a different aggregation for every prompt.",
      "Clear dimension names and descriptions help map 'factory' to Plant and 'machine' to Asset.",
      "Certified measures expose units and denominator rules for generated summaries.",
      "A documented date role prevents 'last quarter' from silently switching between opened and completed dates.",
      "Row-level security and access controls must still be enforced below the conversational layer.",
    ],
    caution:
      "AI can draft DAX, descriptions, or model suggestions, but it can also recommend ambiguous relationships, use the wrong grain, or produce a plausible total. Validate generated work against keys, relationship paths, source totals, security rules, and known test cases.",
    reflectionQuestion:
      "If an AI assistant answers 'Which plant has the highest failure rate?', which semantic definitions, relationships, measures, filters, security rules, and citations must be correct first?",
  },

  pythonLab: {
    title: "Python Lab — Build and Audit a Maintenance Star Schema",
    objective:
      "Create five dimensions and one event fact, validate uniqueness and referential integrity, join with many-to-one safeguards, reconcile totals, calculate governed KPIs, and export a semantic-model manifest that can guide a Power BI implementation.",
    code: `from pathlib import Path
import json
import pandas as pd

output_dir = Path("star_schema_output")
output_dir.mkdir(exist_ok=True)

dim_date = pd.DataFrame({
    "DateKey": [20260105, 20260110, 20260202, 20260418, 20260501],
    "Date": pd.to_datetime(["2026-01-05", "2026-01-10", "2026-02-02", "2026-04-18", "2026-05-01"]),
})
dim_date["Year"] = dim_date["Date"].dt.year
dim_date["Quarter"] = "Q" + dim_date["Date"].dt.quarter.astype(str)
dim_date["Month"] = dim_date["Date"].dt.month_name()

dim_asset = pd.DataFrame({
    "AssetKey": [101, 102, 103, 104],
    "AssetID": ["MX-01", "MX-02", "RB-01", "RB-02"],
    "AssetType": ["Mixer", "Mixer", "Robot", "Robot"],
    "Model": ["M200", "M200", "R7", "R7"],
})

dim_plant = pd.DataFrame({
    "PlantKey": [1, 2, 3],
    "PlantName": ["Plant A", "Plant B", "Plant C"],
    "Region": ["North", "Central", "South"],
})

dim_technician = pd.DataFrame({
    "TechnicianKey": [11, 12, 13, 14],
    "TechnicianID": ["T-11", "T-12", "T-13", "T-14"],
    "Team": ["Alpha", "Alpha", "Beta", "Gamma"],
    "Certification": ["Electrical", "Mechanical", "Robotics", "Robotics"],
})

dim_failure = pd.DataFrame({
    "FailureKey": [21, 22, 23],
    "FailureCode": ["F-BRG", "F-SNS", "F-MTR"],
    "Category": ["Bearing", "Sensor", "Motor"],
    "Severity": ["High", "Medium", "Critical"],
})

fact_event = pd.DataFrame({
    "EventKey": [1001, 1002, 1003, 1004, 1005, 1006, 1007, 1008],
    "DateKey": [20260105, 20260110, 20260202, 20260418, 20260418, 20260501, 20260501, 20260501],
    "AssetKey": [101, 102, 103, 104, 101, 102, 103, 104],
    "PlantKey": [1, 1, 2, 3, 1, 2, 2, 3],
    "TechnicianKey": [11, 12, 13, 14, 11, 13, 13, 14],
    "FailureKey": [21, 22, 23, 21, 22, 23, 22, 23],
    "DowntimeMinutes": [35, 18, 74, 52, 12, 63, 24, 91],
    "RepairCost": [420.0, 180.0, 1250.0, 760.0, 95.0, 980.0, 240.0, 1420.0],
})

dimensions = {
    "DimDate": (dim_date, "DateKey"),
    "DimAsset": (dim_asset, "AssetKey"),
    "DimPlant": (dim_plant, "PlantKey"),
    "DimTechnician": (dim_technician, "TechnicianKey"),
    "DimFailure": (dim_failure, "FailureKey"),
}

tests = []
for name, (table, key) in dimensions.items():
    duplicate_count = int(table[key].duplicated().sum())
    null_count = int(table[key].isna().sum())
    tests.append({
        "test": f"{name}.{key} is unique and non-null",
        "status": "PASS" if duplicate_count == 0 and null_count == 0 else "FAIL",
        "observed": f"duplicates={duplicate_count}; nulls={null_count}",
    })

assert fact_event["EventKey"].is_unique
assert fact_event["EventKey"].notna().all()
assert (fact_event[["DowntimeMinutes", "RepairCost"]] >= 0).all().all()

for name, (table, key) in dimensions.items():
    orphan_values = sorted(set(fact_event[key].dropna()) - set(table[key].dropna()))
    tests.append({
        "test": f"FactMaintenanceEvent.{key} has no orphans",
        "status": "PASS" if not orphan_values else "FAIL",
        "observed": str(orphan_values),
    })
    assert not orphan_values, f"Orphan keys for {name}: {orphan_values}"

source_rows = len(fact_event)
source_downtime = fact_event["DowntimeMinutes"].sum()
source_cost = fact_event["RepairCost"].sum()

model_view = fact_event.copy()
for name, (table, key) in dimensions.items():
    model_view = model_view.merge(
        table,
        on=key,
        how="left",
        validate="many_to_one",
        suffixes=("", f"_{name}"),
    )

assert len(model_view) == source_rows
assert model_view["DowntimeMinutes"].sum() == source_downtime
assert model_view["RepairCost"].sum() == source_cost

kpis = pd.DataFrame({
    "measure": ["Maintenance Events", "Total Downtime", "Total Repair Cost", "Avg Downtime/Event"],
    "value": [source_rows, source_downtime, source_cost, source_downtime / source_rows],
    "unit": ["events", "minutes", "USD", "minutes/event"],
})

plant_summary = (
    model_view.groupby(["PlantKey", "PlantName"], as_index=False)
    .agg(
        MaintenanceEvents=("EventKey", "count"),
        TotalDowntime=("DowntimeMinutes", "sum"),
        TotalRepairCost=("RepairCost", "sum"),
    )
)
plant_summary["AvgDowntimePerEvent"] = (
    plant_summary["TotalDowntime"] / plant_summary["MaintenanceEvents"]
)

tests.extend([
    {"test": "Fact row count preserved after joins", "status": "PASS", "observed": source_rows},
    {"test": "Downtime reconciles after joins", "status": "PASS", "observed": int(source_downtime)},
    {"test": "Repair cost reconciles after joins", "status": "PASS", "observed": float(source_cost)},
])

relationships = [
    {
        "from": f"{name}[{key}]",
        "to": f"FactMaintenanceEvent[{key}]",
        "cardinality": "one-to-many",
        "filterDirection": "single: dimension to fact",
        "active": True,
    }
    for name, (_, key) in dimensions.items()
]

manifest = {
    "model": "Maintenance Analytics",
    "factGrain": "One row per completed maintenance event",
    "factTable": "FactMaintenanceEvent",
    "dimensions": list(dimensions.keys()),
    "relationships": relationships,
    "baseMeasures": {
        "Maintenance Events": "COUNTROWS(FactMaintenanceEvent)",
        "Total Downtime": "SUM(FactMaintenanceEvent[DowntimeMinutes])",
        "Total Repair Cost": "SUM(FactMaintenanceEvent[RepairCost])",
        "Avg Downtime/Event": "DIVIDE([Total Downtime], [Maintenance Events])",
    },
}

pd.DataFrame(tests).to_csv(output_dir / "relationship_tests.csv", index=False)
kpis.to_csv(output_dir / "fact_kpis.csv", index=False)
plant_summary.to_csv(output_dir / "plant_summary.csv", index=False)
with (output_dir / "semantic_model_manifest.json").open("w", encoding="utf-8") as file:
    json.dump(manifest, file, indent=2)

print(pd.DataFrame(tests).to_string(index=False))
print("\\nGoverned KPIs:\\n", kpis.round(2).to_string(index=False))
print("\\nPlant filter result:\\n", plant_summary.round(2).to_string(index=False))
print("\\nArtifacts:", sorted(path.name for path in output_dir.iterdir()))`,
    questions: [
      "Why does merge(validate='many_to_one') protect the dimension-to-fact contract?",
      "Which assertions would fail if DimAsset contained a duplicate AssetKey?",
      "Why do row count, downtime, and cost all need reconciliation after joins?",
      "Which columns belong in Power BI slicers and which should be hidden from report authors?",
      "How would you extend the model for separate OpenedDateKey and ClosedDateKey roles?",
      "How would you represent several technicians per event without duplicating RepairCost?",
    ],
    reflectionQuestions: [
      "Which validation provides the strongest evidence that your model preserves meaning?",
      "What model defect could still pass these tests, and what additional test would detect it?",
      "Which measures require a documented denominator or non-additive rule?",
      "What metadata would help Luminery AI answer maintenance questions safely?",
    ],
    extension:
      "Add BridgeEventTechnician with allocation weights, prove that weights sum to 1 per EventKey, calculate allocated repair cost by technician, and reconcile the allocated total to the event-fact total.",
  },

  guidedPractice: [
    { id: "gp-06-03-01", question: "State the grain for a fact table where each row is one sensor reading from one device at one timestamp.", answer: "One row per device per reading timestamp." },
    { id: "gp-06-03-02", question: "DimPlant[PlantKey] is unique and FactEvent[PlantKey] repeats. What cardinality and filter direction should you begin with?", answer: "One-to-many from DimPlant to FactEvent with single-direction filtering from dimension to fact." },
    { id: "gp-06-03-03", question: "Why should PlantName normally come from DimPlant rather than a repeated fact column?", answer: "It centralizes the description, reduces repetition, supports governed grouping, and prevents inconsistent labels." },
    { id: "gp-06-03-04", question: "A rate column is 10% for one row and 20% for another. May the report sum them to 30%?", answer: "No. Recompute the rate from compatible numerator and denominator measures in filter context." },
    { id: "gp-06-03-05", question: "What does an orphan AssetKey prove?", answer: "Referential integrity has failed: a fact row cannot resolve to an approved asset dimension row." },
    { id: "gp-06-03-06", question: "When might an inactive relationship be appropriate?", answer: "For an alternate role such as OpenedDate when ClosedDate is the active default relationship." },
  ],

  independentPractice: [
    { id: "ip-06-03-01", question: "Design a star schema for course completions. Declare the fact grain and at least four dimensions.", answer: "Example: one row per learner-course completion attempt; DimLearner, DimCourse, DimInstructor, DimDate, and DimProgram." },
    { id: "ip-06-03-02", question: "Explain why directly relating two fact tables is usually weaker than filtering both through conformed dimensions.", answer: "Facts normally contain repeated keys at different grains. Shared dimensions provide consistent, controlled filter paths without fact-to-fact ambiguity." },
    { id: "ip-06-03-03", question: "Create three tests for a Plant dimension relationship.", answer: "PlantKey unique and non-null in DimPlant; no orphan PlantKey values in the fact; a plant-filtered reconciled total matches the source." },
    { id: "ip-06-03-04", question: "Classify daily ending inventory as additive, semi-additive, or non-additive.", answer: "Semi-additive: it can be summed across products or sites at one date but usually not across dates." },
    { id: "ip-06-03-05", question: "Describe one valid use of a bridge table and the measure risk it creates.", answer: "A bridge can represent events with several technicians; event-level measures can double count unless attribution or allocation logic is explicit." },
    { id: "ip-06-03-06", question: "Write a reconciliation requirement for Total Repair Cost.", answer: "For the same included events, currency, status rules, and date scope, model Total Repair Cost minus approved-source Total Repair Cost must equal zero or a predeclared tolerance." },
  ],

  commonMistakes: [
    { mistake: "Building visuals before declaring fact grain", correction: "Write and approve the one-row statement first; reject columns that belong to another grain." },
    { mistake: "Using one wide flat table for every business process", correction: "Separate facts by process and grain, then connect them through conformed dimensions." },
    { mistake: "Allowing duplicate keys on the one side", correction: "Repair the dimension or model historical rows with valid surrogate keys; do not mask the issue with many-to-many." },
    { mistake: "Turning on bidirectional filtering to make a visual work", correction: "Trace the intended business filter path and use the narrowest deliberate design." },
    { mistake: "Using direct many-to-many relationships by default", correction: "Understand the association and consider a bridge with explicit attribution and reconciliation." },
    { mistake: "Averaging percentages or summing ratios", correction: "Calculate numerator and denominator base measures, then recompute the ratio in context." },
    { mistake: "Using fact columns as slicers when a dimension exists", correction: "Expose governed dimension attributes and hide technical fact keys from report authors." },
    { mistake: "Ignoring unknown or late-arriving keys", correction: "Define an unknown-member and remediation policy, then monitor orphan counts." },
    { mistake: "Leaving date roles unnamed", correction: "Label active and alternate business dates and create role-specific measures or dimensions." },
    { mistake: "Trusting automatic relationship detection", correction: "Inspect cardinality, active state, filter direction, and meaning for every relationship." },
    { mistake: "Publishing without reconciliation", correction: "Compare counts and totals at overall and sliced scopes against an approved source." },
    { mistake: "Treating AI-generated DAX as validated", correction: "Test the measure under known filters, edge cases, security roles, and source reconciliations." },
  ],

  discussionQuestions: [
    "When is a snowflake dimension justified, and what usability cost does it create?",
    "Should an unknown dimension member be visible to report users? Why?",
    "When is bidirectional filtering necessary, and what evidence should justify it?",
    "How should a team choose between inactive date relationships and separate role-playing date tables?",
    "Who owns the semantic definition of a business measure: engineering, analytics, finance, or operations?",
    "How can model metadata improve both human self-service and AI-assisted analysis?",
    "Which tests belong in a deployment pipeline rather than a manual checklist?",
    "How should row-level security influence relationship design and model testing?",
  ],

  formativeAssessment: {
    totalPoints: 50,
    passingScore: 40,
    questions: [
      { id: "fa-06-03-01", points: 5, prompt: "Define fact-table grain and explain why it must be declared before measures.", sampleAnswer: "Grain is the real-world meaning of one fact row. Measures can only aggregate correctly when every row and numeric column share that meaning." },
      { id: "fa-06-03-02", points: 5, prompt: "Identify the one side and many side in DimAsset[AssetKey] → FactEvent[AssetKey].", answer: "DimAsset is the one side with unique AssetKey values; FactEvent is the many side with repeated AssetKey values." },
      { id: "fa-06-03-03", points: 5, prompt: "What is the safest initial cross-filter direction for a standard star relationship?", answer: "Single direction from the dimension one side to the fact many side." },
      { id: "fa-06-03-04", points: 5, prompt: "Explain why repair cost can double when an event is joined to several technician rows.", answer: "The same event-level cost repeats once per technician association, so summing the flattened rows multiplies the cost." },
      { id: "fa-06-03-05", points: 5, prompt: "Write DAX for average downtime per event from two base measures.", answer: "Avg Downtime/Event := DIVIDE([Total Downtime], [Maintenance Events])" },
      { id: "fa-06-03-06", points: 5, prompt: "Name three relationship validation tests.", answer: "Dimension key uniqueness/non-null, fact foreign-key orphan check, and filtered total reconciliation; relationship path and row-preservation tests are also valid." },
      { id: "fa-06-03-07", points: 5, prompt: "How should a model handle opened and closed dates?", sampleAnswer: "Use a shared date dimension with one active and one inactive relationship plus role-specific measures, or clearly named role-playing date dimensions." },
      { id: "fa-06-03-08", points: 5, prompt: "Why is daily ending inventory semi-additive?", answer: "It can be summed across assets or sites at the same date but summing snapshots across time would overstate inventory." },
      { id: "fa-06-03-09", points: 5, prompt: "What does a bridge table represent, and what does it not automatically define?", answer: "It represents a legitimate many-to-many association; it does not automatically define how event-level measures should be allocated." },
      { id: "fa-06-03-10", points: 5, prompt: "State the publication rule for a model that fails reconciliation.", answer: "Do not publish. Identify whether rows were lost, duplicated, filtered, converted, or reclassified; repair and rerun all tests with documented evidence." },
    ],
  },

  researchExtension: {
    title: "Research Extension — Compare Competing Semantic Designs",
    description:
      "Investigate how model structure changes correctness, usability, performance, governance, and AI interpretation.",
    researchQuestion:
      "For one real analytical domain, when does a star schema provide stronger evidence and usability than a flat export, snowflake schema, or direct many-to-many model?",
    applicationOptions: ["Manufacturing maintenance", "Learner progress", "Retail sales", "Healthcare operations", "Energy reliability", "Financial planning"],
    task:
      "Design at least two competing models for the same question. Declare each grain, keys, relationships, filter directions, date roles, measures, and security assumptions. Use test data to compare totals, filtered totals, ambiguity, author experience, and explainability. Make a recommendation with limitations.",
    requiredEvidence: [
      "Business question, stakeholder, decision, and success criterion",
      "Source inventory and grain statement for every table",
      "Diagram for each candidate model",
      "Key uniqueness and referential-integrity results",
      "At least three reconciled measures at overall and filtered scopes",
      "Analysis of ambiguity, many-to-many, date roles, and security",
      "Usability test with another report author",
      "Recommendation, rejected alternatives, risks, and monitoring plan",
    ],
  },

  portfolioArtifact: {
    title: "Portfolio Artifact — Production-Ready Semantic Model Blueprint",
    description:
      "Create an employer-ready blueprint showing that you can translate a business process into a governed, testable Power BI semantic model.",
    requiredSections: [
      "Executive decision and analytical questions",
      "Source-to-model lineage and table-grain register",
      "Star-schema diagram with PK, FK, cardinality, active state, and filter direction",
      "Dimension dictionary and unknown-member policy",
      "Fact dictionary with additive behavior and units",
      "Explicit measure catalog with DAX, format, owner, and definition",
      "Date roles, bridge design, and slowly changing dimension decisions",
      "Validation matrix for uniqueness, orphans, joins, filters, and reconciliation",
      "Security, privacy, refresh, accessibility, and operational ownership",
      "Reader and report-author test results",
    ],
    requiredEvidence: [
      "One unambiguous grain statement for each fact",
      "Unique non-null keys on every one side",
      "Zero unexplained orphan foreign keys",
      "No accidental bidirectional, circular, or many-to-many paths",
      "At least five explicit measures tested under known filters",
      "Overall and sliced totals reconciled to approved sources",
      "Power BI Model view screenshot and data dictionary",
      "Version, reviewer, approval, refresh, and monitoring record",
    ],
  },

  growthIndicators: [
    { title: "Grain Architect", description: "You declare stable row meaning before selecting keys, joins, or measures." },
    { title: "Relationship Auditor", description: "You validate uniqueness, cardinality, filter direction, active paths, and referential integrity." },
    { title: "Measure Engineer", description: "You build explicit reusable calculations with correct additive behavior and denominators." },
    { title: "Semantic Governor", description: "You reconcile, document, secure, review, and monitor the analytical contract." },
  ],

  reflection: [
    "Can I state the grain of every fact table without naming columns?",
    "Which dimension key could change in the source, and how will the model preserve identity?",
    "Which relationship exists only because a visual failed, rather than because the business meaning requires it?",
    "What happens when a fact key arrives before its dimension row?",
    "Which measure is additive, semi-additive, or non-additive, and why?",
    "Which date role does each measure use?",
    "Could any bridge or join multiply a fact value?",
    "Which filters can reach the fact through more than one path?",
    "Which technical keys and raw columns should be hidden from report authors?",
    "What reconciliation would expose a plausible but wrong total?",
    "Can another analyst reproduce the model from my documentation?",
    "What semantic metadata would help an AI system answer without guessing?",
  ],

  summary: [
    "A semantic model turns prepared data into governed analytical meaning.",
    "A star schema separates dimension tables for filtering and grouping from fact tables for summarization.",
    "Declare the fact grain before choosing columns, joins, or measures.",
    "Keep each fact table focused on one business process and one stable row meaning.",
    "Use dimensions for descriptive attributes and facts for repeated foreign keys plus observations or measures.",
    "Validate unique, non-null dimension keys and resolve every orphan fact key.",
    "Begin with one-to-many, active, single-direction relationships from dimensions to facts.",
    "Use bidirectional and many-to-many relationships only for justified, tested designs.",
    "A bridge records association; allocation requires separate measure logic.",
    "Use a continuous date dimension and make each business date role explicit.",
    "Build explicit base measures and recompute ratios from compatible components.",
    "Classify facts as additive, semi-additive, or non-additive before aggregating them.",
    "Trace a result through selection, dimension filter, relationship path, fact subset, and measure evaluation.",
    "Reconcile row counts and totals overall and under representative filters.",
    "Document grain, lineage, keys, measures, relationships, security, refresh, ownership, and tests.",
    "AI-assisted analysis is only as trustworthy as the semantic definitions and controls grounding it.",
  ],

  previousLesson: {
    id: "data-ai-m06-l02",
    moduleNumber: 6,
    slug: "visual-hierarchy-accessibility-and-honest-communication",
    title: "Visual Hierarchy, Accessibility, and Honest Communication",
  },
  nextLesson: {
    id: "data-ai-m06-l04",
    moduleNumber: 6,
    slug: "measures-filter-context-row-context-and-calculate",
    title: "Measures, Filter Context, Row Context, and CALCULATE",
  },

  lumineryGuidance: {
    message:
      "Define one row, one key path, and one governed measure at a time. If the model cannot explain and reconcile a number, the report is not finished.",
    prompt:
      "Act as my senior Power BI semantic-model architect, dimensional-modeling educator, DAX reviewer, data-quality engineer, and governance mentor. Help me complete Module 6 Lesson 3 one verified gate at a time. Require a stakeholder decision, business process, one-row grain statement, fact and dimension classification, key strategy, one-to-many relationship design, intentional filter direction, date roles, additive behavior, explicit measures, bridge logic, orphan handling, reconciliation, security, lineage, ownership, and deployment tests. Do not approve duplicate dimension keys, unexplained orphans, mixed fact grains, accidental many-to-many relationships, unnecessary bidirectional filters, hidden denominator changes, averaged percentages, duplicated bridge measures, unlabeled date roles, unreconciled totals, or AI-generated DAX without test evidence.",
    coachingQuestions: [
      "What exactly does one row represent?",
      "Which business process owns this fact?",
      "Is every one-side key unique and non-null?",
      "Can every foreign key resolve to one approved dimension row?",
      "Which direction should filters travel, and why?",
      "Could two active paths reach the same fact?",
      "Is the measure additive across every selected dimension?",
      "Which date role is being evaluated?",
      "Could a bridge or join multiply the measure?",
      "What source total and filtered test case prove the answer?",
    ],
  },
};

export default lesson03;
