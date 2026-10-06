const lesson07 = {
  id: "data-ai-m06-l07",
  courseId: "data-ai-foundations",
  moduleId: "data-ai-foundations-module-06",
  moduleNumber: 6,
  lessonNumber: 7,
  slug: "portfolio-project-executive-power-bi-decision-system",
  title: "Portfolio Project: Executive Power BI Decision System",
  shortTitle: "Executive Power BI Capstone",
  subtitle:
    "Integrate visual design, semantic modeling, governed DAX, time intelligence, secure exploration, accessibility, validation, and lifecycle evidence into a professional three-page Power BI portfolio project.",
  status: "available",
  duration: "10–14 hours",
  level: "Professional Portfolio Project",

  essentialQuestion:
    "Can you build and defend an executive Power BI decision system whose data, model, measures, visuals, navigation, security, accessibility, performance, and release evidence are all independently verifiable?",
  bigIdea:
    "A professional dashboard is not a collection of attractive charts. It is a governed decision system that connects an executive question to trusted source records, a stable semantic model, reusable measures, accessible visual explanations, secured detail, validated interactions, controlled deployment, and measurable operational action.",

  whyThisLessonExists: {
    title: "The Portfolio Must Prove Judgment, Not Only Tool Familiarity",
    introduction:
      "Employers can find many dashboards with polished colors and copied formulas. Far fewer projects demonstrate that the author can define a decision, model data correctly, explain metric context, protect access, test edge cases, measure performance, manage defects, and communicate limitations.",
    centralProblem:
      "Manufacturing executives receive separate spreadsheets for downtime, failure events, repair costs, targets, and asset details. Totals disagree, date roles are unclear, percentages change unpredictably, managers can see plants they do not own, and no one can reproduce the report's release decision. Leadership needs one trustworthy system for action—not another static dashboard.",
    purpose:
      "This capstone integrates every Module 6 lesson into an employer-ready evidence product. Learners build a three-page maintenance decision system, document its architecture and measure contracts, implement time and security logic, validate the experience, publish through a controlled lifecycle, and present the work as a concise portfolio story.",
  },

  problemFirst: {
    title: "Executive Brief: Reduce Downtime Without Hiding Risk",
    scenario:
      "The Chief Operations Officer must decide which plant and asset group receives the next maintenance-improvement investment. The report must show current downtime, year-over-year change, target performance, failure burden, cost, availability, and supporting events. Plant managers should see only authorized facilities; executives may see all plants.",
    questions: [
      "What decision must the executive make after reviewing the report?",
      "Which five to seven KPIs are necessary, and which are merely interesting?",
      "What is the grain and authoritative source of every KPI input?",
      "Which page should answer status, trend, and investigation questions?",
      "Which target, comparison period, and favorable direction belong to each KPI?",
      "How will managers reach event-level evidence without breaking filter context or security?",
      "What exact tests and approvals must pass before release?",
      "How will the portfolio explain value, uncertainty, limitations, and the next operational action?",
    ],
    expectedInsight:
      "The report architecture should mirror the decision sequence: understand current performance, identify where and when it changed, inspect evidence, and assign action—all within governed data and security boundaries.",
  },

  starSchemaDiagram: {
    title: "Executive Maintenance Decision-System Star Schema",
    description:
      "A single completed-event fact is filtered by governed Date, Plant, Asset, Failure, and Technician dimensions. Targets remain at an explicit Plant-Month grain and are compared through controlled measures rather than duplicated into event rows.",
    accessibleDescription:
      "Star schema with FactMaintenanceEvent at the center and DimDate, DimPlant, DimAsset, DimFailure, and DimTechnician around it. Each dimension has a one-to-many, single-direction relationship into the completed maintenance-event fact.",
    grain: "One row per completed maintenance event",
    note:
      "Use CompletedDate as the active reporting role and an inactive OpenedDate relationship for approved alternate measures. Store monthly targets in a separate target fact keyed by PlantKey and MonthKey; never copy a monthly target onto every event row.",
    fact: {
      name: "FactMaintenanceEvent",
      fields: [
        { name: "EventKey", key: "PK" },
        { name: "CompletedDateKey", key: "FK" },
        { name: "OpenedDateKey", key: "FK" },
        { name: "PlantKey", key: "FK" },
        { name: "AssetKey", key: "FK" },
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
        name: "DimPlant",
        fields: [
          { name: "PlantKey", key: "PK" },
          { name: "PlantCode" },
          { name: "PlantName" },
          { name: "Region" },
          { name: "ManagerUPN" },
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
        name: "DimFailure",
        fields: [
          { name: "FailureKey", key: "PK" },
          { name: "FailureCode" },
          { name: "Category" },
          { name: "Severity" },
          { name: "SafetyRelated" },
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
    ],
  },

  visualModels: [
    {
      id: "capstone-evidence-architecture",
      type: "lifecycle",
      title: "Executive Decision-System Architecture",
      description:
        "Follow the evidence from governed source data to executive action and operational monitoring.",
      stages: [
        { label: "1. Sources", detail: "Maintenance events, assets, plants, failures, technicians, calendars, targets, operating hours, and access mappings." },
        { label: "2. Preparation", detail: "Profile, type, standardize, retain exceptions, document lineage, and reconcile staged outputs." },
        { label: "3. Semantic model", detail: "Create star-schema relationships, date roles, target grain, RLS path, hidden fields, and display folders." },
        { label: "4. Governed measures", detail: "Build base, ratio, PM/PY/YTD, rolling, target, reliability, tooltip, and security-aware measures." },
        { label: "5. Report pages", detail: "Design Executive Overview, Reliability Trends, and Event Investigation pages around decision questions." },
        { label: "6. Validation", detail: "Test data, measures, visuals, filters, drillthrough, accessibility, roles, exports, and performance." },
        { label: "7. Controlled release", detail: "Promote through Development, Test, and Production with approvals and environment rules." },
        { label: "8. Action and monitoring", detail: "Assign actions, monitor adoption, refresh, failures, latency, access, and KPI outcomes after release." },
      ],
      feedback:
        "Every executive number must trace backward to a governed measure, visible fact population, relationship path, prepared field, and approved source.",
      interpretation:
        "The dashboard is the visible layer of a larger evidence system; portfolio strength comes from proving the whole system.",
    },
    {
      id: "three-page-decision-path",
      type: "lifecycle",
      title: "Three-Page Executive Decision Path",
      description:
        "Each page has a distinct question and limited responsibility so the report remains focused and navigable.",
      stages: [
        { label: "Executive Overview", detail: "Are we on target, where is risk concentrated, and what action deserves attention now?" },
        { label: "KPI strip", detail: "Downtime, YoY change, failure events, repair cost, availability, and target status with visible units and freshness." },
        { label: "Plant comparison", detail: "Rank plant downtime with a zero baseline and an exposure or target context." },
        { label: "Reliability Trends", detail: "When did performance change, is the movement sustained, and which asset or failure group explains it?" },
        { label: "Time analysis", detail: "Monthly trend, PY comparison, rolling average, target line, YTD, seasonality, and annotated exceptions." },
        { label: "Event Investigation", detail: "Which authorized records support the signal, and who owns the next action?" },
        { label: "Context-preserving detail", detail: "Drillthrough filters, dynamic title, event table, tooltip context, empty state, export policy, and Back path." },
        { label: "Decision close", detail: "Document owner, action, due date, expected impact, monitoring measure, and review date." },
      ],
      feedback:
        "Do not repeat the same visuals on three pages. Move the user from status to explanation to evidence and action.",
      interpretation:
        "Page architecture is an analytical argument: current state, pattern and cause, supporting records, and accountable action.",
    },
    {
      id: "plant-downtime-comparison",
      type: "barChart",
      title: "Plant Downtime — Portfolio Graph Specification",
      description:
        "Use a horizontal bar graph with a zero baseline, descending sort, direct values, current-period subtitle, and an accessible text summary.",
      ariaLabel:
        "Horizontal bar graph showing Plant C with 135 downtime minutes, Plant A with 100 minutes, and Plant B with 86 minutes.",
      unit: "min",
      max: 150,
      items: [
        { label: "Plant C", value: 135, note: "Highest current-period downtime; investigate Robot-3 and Robot-4 critical events." },
        { label: "Plant A", value: 100, note: "Two critical events contribute 73 minutes." },
        { label: "Plant B", value: 86, note: "Lowest total, but one critical event still requires review." },
      ],
      interpretation:
        "Plant C has the largest downtime burden in the event-detail fixture. Ranking directs investigation; it does not prove causality or account for unequal operating exposure.",
    },
    {
      id: "dev-test-production",
      type: "lifecycle",
      title: "Development → Test → Production Release Path",
      description:
        "Treat deployment as a controlled evidence workflow rather than a direct publish action.",
      stages: [
        { label: "Plan", detail: "Approve scope, owner, architecture, data classification, environments, release criteria, and rollback strategy." },
        { label: "Develop", detail: "Build in the development workspace with sample roles, versioned changes, peer review, and automated evidence checks." },
        { label: "Developer validation", detail: "Resolve data, model, calculation, visual, accessibility, security, and performance defects." },
        { label: "Deploy to Test", detail: "Apply test environment rules, refresh, compare items, and record deployment evidence." },
        { label: "User acceptance", detail: "Business users execute decision scenarios and approve definitions, workflow, usability, and actions." },
        { label: "Release approval", detail: "Confirm zero blocking defects, correct permissions, current documentation, support owner, and communication plan." },
        { label: "Deploy to Production", detail: "Promote approved content, refresh, update the app, validate permissions, and execute smoke tests." },
        { label: "Monitor", detail: "Track refresh, failures, performance, usage, support issues, access changes, and KPI outcomes; rollback if needed." },
      ],
      feedback:
        "Production deployment is complete only after the app, refresh, permissions, RLS, smoke tests, monitoring, and support handoff are verified.",
      interpretation:
        "Controlled environments reduce release risk and make the portfolio resemble real enterprise BI delivery.",
    },
  ],

  representationModel: {
    title: "Six-Month Downtime Trend — Table and Line Graph",
    description:
      "The capstone trend page shows the recent decline in downtime while preserving the August-to-September increase as an annotated exception rather than smoothing it away.",
    equation: "Monthly completed-event downtime",
    columns: [
      { key: "month", label: "Month Index (Jul–Dec)" },
      { key: "downtime", label: "Downtime Hours" },
    ],
    rows: [
      { month: 7, downtime: 70 },
      { month: 8, downtime: 66 },
      { month: 9, downtime: 68 },
      { month: 10, downtime: 63 },
      { month: 11, downtime: 60 },
      { month: 12, downtime: 58 },
    ],
    xKey: "month",
    yKey: "downtime",
    xLabel: "Month number",
    yLabel: "Downtime hours",
    highlightPoint: { x: 12, y: 58 },
  },

  learningObjectives: [
    "Translate an executive decision into bounded report questions, users, actions, and acceptance criteria.",
    "Create an architecture diagram that traces source, preparation, model, measures, pages, security, deployment, and monitoring.",
    "Declare the maintenance-event fact grain and validate dimension keys, foreign keys, date roles, and target grain.",
    "Build a documented star-schema semantic model with intentional relationship directions and hidden technical fields.",
    "Create governed base, ratio, time-intelligence, target, reliability, tooltip, and security-aware measures.",
    "Design an Executive Overview page that communicates status, risk concentration, and immediate action.",
    "Design a Reliability Trends page that explains time movement, comparison, target, and contributing categories.",
    "Design an Event Investigation page with context-preserving drillthrough and accessible detail.",
    "Apply honest graph selection, zero baselines, chronological sorting, direct labels, uncertainty, and accessible summaries.",
    "Implement accessible visual hierarchy, contrast, typography, alt text, tab order, focus, and non-hover information access.",
    "Implement static or dynamic RLS with deny-by-default behavior and exact-key test evidence.",
    "Validate data, model, calculations, totals, time boundaries, visuals, interactions, accessibility, security, and exports.",
    "Measure performance with repeatable Performance Analyzer evidence and approved budgets.",
    "Create a defect register and require correction, retest, regression evidence, and approval before closure.",
    "Plan Development, Test, and Production environments with deployment, configuration, approval, monitoring, and rollback controls.",
    "Package the report, documentation, evidence, screenshots, README, and interview narrative as one portfolio product.",
    "Reproduce key semantic-model, KPI, security, and release checks in a tested Python evidence lab.",
    "Present findings as evidence, interpretation, recommendation, expected value, uncertainty, limitation, owner, and next action.",
  ],

  prerequisiteKnowledge: [
    "Module 6 Lesson 1: chart selection and visual integrity",
    "Module 6 Lesson 2: hierarchy, accessibility, annotation, and honest communication",
    "Module 6 Lesson 3: star-schema semantic modeling and relationship validation",
    "Module 6 Lesson 4: measures, context, CALCULATE, iterators, variables, and denominators",
    "Module 6 Lesson 5: date tables, time intelligence, targets, reliability, and performance measures",
    "Module 6 Lesson 6: drillthrough, tooltips, RLS, report validation, defects, and release evidence",
    "Power BI Desktop or equivalent access for implementation; Python and pandas for the evidence lab",
  ],

  vocabulary: [
    { term: "Decision system", definition: "A governed combination of data, metrics, visuals, interactions, controls, and workflows that supports repeatable action." },
    { term: "Executive brief", definition: "A concise statement of stakeholder, decision, questions, scope, success, risk, and required action." },
    { term: "Acceptance criterion", definition: "An observable pass condition proving that a requirement has been satisfied." },
    { term: "Architecture diagram", definition: "A visual map of solution components, dependencies, data flow, security, environments, and ownership." },
    { term: "Semantic model", definition: "The governed analytical layer containing tables, relationships, measures, metadata, hierarchies, formats, and security." },
    { term: "Fact grain", definition: "The exact real-world meaning represented by one row of a fact table." },
    { term: "Target fact", definition: "A fact-like table storing approved targets at a declared grain such as Plant-Month." },
    { term: "Measure catalog", definition: "A controlled record of measure name, purpose, formula, unit, aggregation, format, owner, and tests." },
    { term: "KPI contract", definition: "The definition of actual, population, period, baseline, target, direction, threshold, owner, and action for a KPI." },
    { term: "Metric tree", definition: "A hierarchy linking an executive outcome to contributing measures, drivers, and operational actions." },
    { term: "Executive Overview", definition: "The report page summarizing current status, major risk, comparison, target, and immediate action." },
    { term: "Reliability Trends", definition: "The report page explaining how maintenance performance changes across time, assets, plants, and failure groups." },
    { term: "Event Investigation", definition: "The secured detail page containing context-preserving event evidence and accountable action fields." },
    { term: "Information hierarchy", definition: "The visual ordering that makes the most important question and evidence easiest to find first." },
    { term: "Decision annotation", definition: "Text attached to evidence that identifies a meaningful change, cause hypothesis, caveat, or action." },
    { term: "Accessible summary", definition: "A text equivalent communicating the chart's purpose, principal pattern, values, and limitations." },
    { term: "Measure branching", definition: "Building derived measures from approved base measures rather than repeating raw aggregation logic." },
    { term: "Time intelligence", definition: "Calendar-aware calculations for current, prior, accumulated, rolling, and comparable periods." },
    { term: "Reliability KPI", definition: "A controlled operational measure such as failure rate, MTBF, MTTR, or availability." },
    { term: "Drillthrough contract", definition: "The documented source fields, transferred filters, destination behavior, security, empty state, and return path." },
    { term: "Row-level security", definition: "Model rules that restrict the fact population visible to a user." },
    { term: "Deny by default", definition: "A rule that provides no protected rows when an identity lacks an approved access mapping." },
    { term: "Development environment", definition: "The workspace where creators build and conduct early technical validation." },
    { term: "Test environment", definition: "The controlled workspace where integrated testing and user acceptance occur before production." },
    { term: "Production environment", definition: "The governed workspace and app serving approved content to intended consumers." },
    { term: "Deployment pipeline", definition: "A lifecycle tool and process for comparing and promoting supported Fabric or Power BI content across environments." },
    { term: "Deployment rule", definition: "An environment-specific configuration applied during promotion, such as data-source or parameter settings." },
    { term: "Smoke test", definition: "A focused post-deployment test confirming that critical refresh, access, navigation, KPI, and interaction paths work." },
    { term: "Rollback", definition: "A controlled process for restoring an earlier safe state when production release criteria fail." },
    { term: "User acceptance testing", definition: "Formal validation by representative business users that the solution supports approved decisions and workflows." },
    { term: "Release manager", definition: "The person coordinating deployment readiness, approvals, timing, communication, and post-release checks." },
    { term: "Release gate", definition: "A mandatory condition whose failure blocks promotion or production use." },
    { term: "Defect register", definition: "The governed record of failures, severity, owner, status, evidence, correction, retest, and release impact." },
    { term: "Performance budget", definition: "The maximum approved duration or resource use for a visual, page, refresh, or interaction." },
    { term: "Lineage", definition: "Traceable origin and transformation history from source fields through model and measures to reported results." },
    { term: "Data classification", definition: "A label describing the sensitivity and handling requirements of data or content." },
    { term: "Monitoring plan", definition: "The post-release schedule, metrics, owners, thresholds, and response actions for solution health." },
    { term: "Adoption metric", definition: "A measure of meaningful solution use, such as active viewers, repeat use, decision completion, or supported action." },
    { term: "Portfolio evidence pack", definition: "The report and supporting artifacts proving architecture, calculations, validation, security, accessibility, performance, and business communication." },
    { term: "Interview narrative", definition: "A concise explanation of problem, role, method, controls, insight, impact, limitation, and learning." },
  ],

  formulas: [
    { id: "total-downtime", name: "Total downtime", formula: "Total Downtime := SUM(FactMaintenanceEvent[DowntimeMinutes])", meaning: "Sums visible completed-event downtime at governed event grain.", requirement: "Reconcile to source totals and label units consistently." },
    { id: "failure-events", name: "Failure events", formula: "Failure Events := DISTINCTCOUNT(FactMaintenanceEvent[EventKey])", meaning: "Counts distinct visible maintenance events.", requirement: "Use COUNTROWS only when exactly one fact row exists per event." },
    { id: "repair-cost", name: "Repair cost", formula: "Total Repair Cost := SUM(FactMaintenanceEvent[RepairCost])", meaning: "Sums visible event-level repair cost.", requirement: "Keep event cost out of many-to-many bridge rows to prevent multiplication." },
    { id: "availability", name: "Availability", formula: "Availability % := DIVIDE([Scheduled Minutes] - [Total Downtime], [Scheduled Minutes])", meaning: "Measures available scheduled time under the current population and period.", requirement: "Align scheduled exposure and downtime population; define planned downtime policy." },
    { id: "prior-year", name: "Prior-year downtime", formula: "Downtime PY := CALCULATE([Total Downtime], SAMEPERIODLASTYEAR(DimDate[Date]))", meaning: "Evaluates downtime over the comparable date set one year earlier.", requirement: "Validate date table, date role, period completeness, and leap or fiscal boundaries." },
    { id: "yoy", name: "Year-over-year change", formula: "Downtime YoY % := DIVIDE([Total Downtime] - [Downtime PY], [Downtime PY])", meaning: "Scales current-period change by prior-year downtime.", requirement: "Declare blank and zero-baseline behavior and lower-is-better direction." },
    { id: "rolling", name: "Rolling three-month downtime", formula: "Downtime R3M := CALCULATE([Total Downtime], DATESINPERIOD(DimDate[Date], MAX(DimDate[Date]), -3, MONTH))", meaning: "Evaluates a three-month interval ending at the current maximum date.", requirement: "State whether the window contains full completed months or raw days." },
    { id: "target-gap", name: "Downtime target gap", formula: "Downtime vs Target := [Total Downtime] - [Downtime Target]", meaning: "Shows actual downtime relative to the approved target.", requirement: "Align target grain and interpret a negative gap as favorable for lower-is-better downtime." },
    { id: "plant-share", name: "Plant share", formula: "Plant Downtime Share := DIVIDE([Total Downtime], CALCULATE([Total Downtime], REMOVEFILTERS(DimPlant)))", meaning: "Calculates plant contribution within preserved report scope.", requirement: "Verify REMOVEFILTERS does not and cannot bypass RLS authorization." },
    { id: "dynamic-title", name: "Executive context title", formula: "Report Context := \"Maintenance Performance — \" & COALESCE(SELECTEDVALUE(DimDate[Year]), \"Multiple Years\")", meaning: "Makes selected time context visible in report headings.", requirement: "Handle zero, one, and multiple selections and include freshness separately." },
  ],

  workedExamples: [
    {
      id: "example-06-07-01",
      title: "Convert the executive request into acceptance criteria",
      problem: "Leadership asks for a dashboard that shows where maintenance performance is getting worse.",
      solutionSteps: [
        "Name the decision: prioritize one plant and asset group for intervention.",
        "Define worse using downtime, failures, cost, availability, prior year, target, and a completed-period rule.",
        "Require plant, asset, failure, and event drill paths within authorized data.",
        "Create observable criteria for correct KPIs, context, accessibility, security, performance, and action ownership.",
      ],
      answer: "The vague request becomes a decision contract with measurable pass conditions.",
      interpretation: "A dashboard cannot be validated until success is observable.",
    },
    {
      id: "example-06-07-02",
      title: "Protect target grain",
      problem: "The monthly downtime target is copied onto every maintenance event and then summed.",
      solutionSteps: [
        "Declare target grain as one row per Plant-Month.",
        "Store targets in a separate target fact or governed measure source.",
        "Relate or map target keys without duplicating target amounts at event grain.",
        "Test one plant-month with no events, one event, and several events.",
      ],
      answer: "A monthly target must remain at Plant-Month grain and be compared through measures.",
      interpretation: "Grain mismatch is a modeling defect, not a visualization problem.",
    },
    {
      id: "example-06-07-03",
      title: "Choose the executive visual set",
      problem: "The first draft contains twelve KPI cards, three pies, two maps, a gauge, and a table.",
      solutionSteps: [
        "Retain only KPIs necessary for status and action: downtime, YoY, events, cost, availability, and target status.",
        "Use a sorted bar graph for plant comparison and a line graph for trend.",
        "Use a compact failure-category view only when it changes prioritization.",
        "Move event records and supplemental definitions to secured detail and tooltip paths.",
      ],
      answer: "The overview becomes a focused decision page rather than a visual inventory.",
      interpretation: "Executive design is the discipline of removing information that does not change the decision.",
    },
    {
      id: "example-06-07-04",
      title: "Interpret the plant bar graph",
      problem: "Plant C has 135 downtime minutes, Plant A 100, and Plant B 86.",
      solutionSteps: [
        "Sort descending and begin the quantitative bar scale at zero.",
        "Label current period, unit, data freshness, and active filters.",
        "State that Plant C has the highest observed burden in this population.",
        "Check operating exposure and asset mix before claiming Plant C is less reliable.",
      ],
      answer: "Plant C is the first investigation priority, not a proven cause or normalized worst performer.",
      interpretation: "A graph ranks observed evidence; causal and exposure conclusions require additional analysis.",
    },
    {
      id: "example-06-07-05",
      title: "Write the time-intelligence story",
      problem: "Downtime falls from 70 hours in July to 58 in December but rises from 66 to 68 in September.",
      solutionSteps: [
        "Display monthly values in chronological order with an honest continuous scale.",
        "Add prior year, target, and rolling context when available.",
        "Annotate the September increase and connect it to authorized event investigation.",
        "Report the broad decline without implying every month improved.",
      ],
      answer: "The six-month direction is favorable, with a September interruption requiring explanation.",
      interpretation: "Trust grows when the report preserves exceptions rather than smoothing them away.",
    },
    {
      id: "example-06-07-06",
      title: "Design a security acceptance test",
      problem: "The executive sees 12 events; Plant A, B, and C managers should see 4, 3, and 5; an unmapped user should see none.",
      solutionSteps: [
        "Document the exact expected event keys for every identity.",
        "Test summary, trend, tooltip, drillthrough, export, copied-link, and service paths.",
        "Compare counts, exact keys, additive totals, and denied populations.",
        "Block release for any unexpected row or identity mapping.",
      ],
      answer: "The role matrix passes only when every approved inclusion and unauthorized exclusion matches exactly.",
      interpretation: "Security evidence is part of the portfolio's analytical credibility.",
    },
    {
      id: "example-06-07-07",
      title: "Decide whether the report can release",
      problem: "All KPI tests pass, but one critical RLS defect and two accessibility defects remain open.",
      solutionSteps: [
        "Apply severity rules before considering total rubric points.",
        "Block production for the critical overexposure defect.",
        "Correct and retest accessibility defects required for intended users.",
        "Run adjacent regression tests and obtain reviewer and business-owner approval.",
      ],
      answer: "The report cannot release while blocking security or accessibility defects remain.",
      interpretation: "Critical controls are gates; they cannot be averaged away by strong visual design scores.",
    },
    {
      id: "example-06-07-08",
      title: "Present the project in an interview",
      problem: "You have ninety seconds to explain the capstone to a hiring manager.",
      solutionSteps: [
        "Problem: fragmented maintenance evidence prevented confident investment decisions.",
        "Method: built a validated star model, governed DAX, three-page accessible report, time intelligence, and RLS.",
        "Controls: reconciled totals, exact-key security tests, accessibility checks, Performance Analyzer, and release gates.",
        "Insight and value: identified the current risk concentration and created a repeatable action workflow.",
        "Limitation: exposure-normalized reliability and production telemetry require operational source data beyond the fixture.",
      ],
      answer: "The narrative demonstrates business judgment, technical depth, controls, value, and intellectual honesty.",
      interpretation: "A portfolio earns attention when the author can defend decisions, not merely demonstrate clicks.",
    },
  ],

  interactiveExploration: {
    title: "Capstone Build Studio: Seven Verified Gates",
    description:
      "Complete one gate at a time. A failed critical control sends the project back for repair before new features are added.",
    instructions: [
      "Gate 1 — Approve the executive brief, users, decisions, questions, risks, deliverables, and acceptance criteria.",
      "Gate 2 — Profile sources, declare population and grain, prepare dimensions and facts, retain exceptions, and reconcile rows and amounts.",
      "Gate 3 — Build the star schema, date roles, target fact, access bridge, relationships, metadata, and hidden technical fields.",
      "Gate 4 — Build and test base, derived, time, target, reliability, tooltip, title, and security-aware measures.",
      "Gate 5 — Build the Executive Overview, Reliability Trends, and Event Investigation pages with accessibility and mobile review.",
      "Gate 6 — Execute developer validation, RLS tests, UAT, Performance Analyzer, defect correction, regression, and clean evidence export.",
      "Gate 7 — Prepare Development–Test–Production deployment, app audiences, permissions, refresh, smoke tests, monitoring, rollback, README, and interview narrative.",
    ],
    investigationQuestions: [
      "Which artifact proves each acceptance criterion?",
      "Can every KPI be traced to exact source fields and visible fact rows?",
      "Does each page answer a distinct question without redundant visuals?",
      "Can keyboard, touch, color-blind, and screen-reader users reach the required evidence?",
      "Can any role or alternate interaction reveal unauthorized rows?",
      "Which visual or query is the measured performance bottleneck?",
      "Are all critical and high defects closed with regression evidence?",
      "Can a reviewer reproduce the build, tests, release decision, and key findings?",
    ],
    expectedDiscovery:
      "A finished portfolio project is a chain of passed evidence gates. New visual polish never substitutes for unresolved data, security, accessibility, or validation failures.",
  },

  realWorldApplications: [
    { field: "Manufacturing and Robotics", application: "Prioritize maintenance investment using downtime, failures, cost, availability, time trends, secured event detail, and accountable actions." },
    { field: "Education", application: "Adapt the three-page structure to executive outcomes, cohort trends, and protected learner intervention evidence." },
    { field: "Retail", application: "Adapt status, trend, and investigation pages to revenue, margin, returns, inventory, store operations, and secured transaction detail." },
    { field: "Healthcare", application: "Adapt the system to capacity, wait time, utilization, quality, and privacy-controlled encounter investigation." },
    { field: "Finance", application: "Adapt the architecture to actual versus budget, rolling performance, account variance, and secured transaction support." },
    { field: "AI Operations", application: "Adapt KPI, trend, and investigation pages to model quality, drift, latency, cost, review outcomes, and protected prediction records." },
  ],

  aiConnection: {
    title: "Use AI as a Reviewed Accelerator, Not the Project Owner",
    explanation:
      "AI can help draft DAX, test cases, documentation, alt text, narratives, and code, but it cannot independently approve metric meaning, source authority, access rights, target ownership, legal handling, release risk, or the truth of a business conclusion.",
    examples: [
      "Ask AI to generate alternative visual specifications, then select using audience, purpose, perception, and accessibility evidence.",
      "Ask AI to review a star schema for grain, key, relationship, target, and bridge risks.",
      "Require AI-generated DAX to include context assumptions, denominator scope, variables, blanks, and known-result tests.",
      "Ask AI to generate negative RLS, drillthrough, export, accessibility, and time-boundary tests.",
      "Use AI to draft the README and interview narrative only after verified artifacts and findings exist.",
    ],
    caution:
      "Do not publish generated formulas, narratives, or recommendations without source reconciliation, role testing, accessibility review, performance evidence, and accountable human approval. Record where AI assisted and how output was verified.",
    reflectionQuestion:
      "Which capstone decisions require your professional judgment even when an AI assistant can generate a plausible implementation?",
  },

  pythonLab: {
    title: "Python Lab — Build the Capstone Evidence Manifest",
    objective:
      "Validate event grain, dimension keys, foreign keys, plant KPIs, time comparisons, role populations, release gates, and required portfolio artifacts, then export an auditable manifest that independently supports the Power BI project.",
    code: `from pathlib import Path
import hashlib
import json
import pandas as pd

output_dir = Path("power_bi_capstone_output")
output_dir.mkdir(exist_ok=True)

plants = pd.DataFrame({
    "PlantKey": [1, 2, 3],
    "PlantCode": ["A", "B", "C"],
    "PlantName": ["Plant A", "Plant B", "Plant C"],
})

events = pd.DataFrame({
    "EventKey": list(range(1001, 1013)),
    "PlantKey": [1, 1, 1, 1, 2, 2, 2, 3, 3, 3, 3, 3],
    "Asset": ["Mixer-1", "Robot-1", "Mixer-2", "Pump-1", "Robot-2", "Mixer-3", "Pump-2", "Robot-3", "Mixer-4", "Pump-3", "Robot-4", "Mixer-5"],
    "Severity": ["High", "Critical", "Medium", "Critical", "High", "Critical", "Medium", "High", "Critical", "Medium", "Critical", "Low"],
    "CompletedMonth": ["2026-12"] * 12,
    "DowntimeMinutes": [18, 42, 9, 31, 26, 42, 18, 24, 55, 12, 38, 6],
    "RepairCost": [210, 950, 90, 610, 330, 880, 140, 290, 1200, 110, 760, 60],
})

monthly = pd.DataFrame({
    "Month": pd.period_range("2025-01", "2026-12", freq="M"),
    "DowntimeHours": [
        120, 110, 105, 98, 102, 95, 90, 88, 93, 85, 82, 80,
        96, 90, 84, 79, 76, 72, 70, 66, 68, 63, 60, 58,
    ],
    "ScheduledHours": [1440] * 24,
    "DowntimeTarget": [90] * 24,
})

access = {
    "executive@example.com": {1, 2, 3},
    "manager.a@example.com": {1},
    "manager.b@example.com": {2},
    "manager.c@example.com": {3},
    "unmapped@example.com": set(),
}

expected_event_keys = {
    "executive@example.com": set(range(1001, 1013)),
    "manager.a@example.com": {1001, 1002, 1003, 1004},
    "manager.b@example.com": {1005, 1006, 1007},
    "manager.c@example.com": {1008, 1009, 1010, 1011, 1012},
    "unmapped@example.com": set(),
}

def visible_events(user_upn):
    allowed = access.get(user_upn.strip().lower(), set())
    return events.loc[events["PlantKey"].isin(allowed)].copy()

def file_sha256(path):
    return hashlib.sha256(path.read_bytes()).hexdigest()

# Model-quality gates.
assert plants["PlantKey"].is_unique
assert events["EventKey"].is_unique
assert set(events["PlantKey"]).issubset(set(plants["PlantKey"]))
assert events["DowntimeMinutes"].ge(0).all()
assert events["RepairCost"].ge(0).all()
assert len(events) == 12

plant_kpis = (
    events.groupby("PlantKey", as_index=False)
    .agg(
        EventCount=("EventKey", "nunique"),
        DowntimeMinutes=("DowntimeMinutes", "sum"),
        RepairCost=("RepairCost", "sum"),
    )
    .merge(plants, on="PlantKey", validate="one_to_one")
    .sort_values("DowntimeMinutes", ascending=False)
)

assert dict(zip(plant_kpis["PlantCode"], plant_kpis["DowntimeMinutes"])) == {
    "C": 135, "A": 100, "B": 86
}
assert plant_kpis["EventCount"].sum() == 12
assert plant_kpis["DowntimeMinutes"].sum() == events["DowntimeMinutes"].sum() == 321
assert plant_kpis["RepairCost"].sum() == events["RepairCost"].sum() == 5630

# Time-intelligence and KPI gates for December 2026.
monthly = monthly.set_index("Month", drop=False)
current = float(monthly.loc[pd.Period("2026-12"), "DowntimeHours"])
prior_month = float(monthly.loc[pd.Period("2026-11"), "DowntimeHours"])
prior_year = float(monthly.loc[pd.Period("2025-12"), "DowntimeHours"])
target = float(monthly.loc[pd.Period("2026-12"), "DowntimeTarget"])
scheduled = float(monthly.loc[pd.Period("2026-12"), "ScheduledHours"])
ytd_2026 = float(monthly.loc[monthly["Month"].dt.year == 2026, "DowntimeHours"].sum())
rolling_3m = float(monthly.loc[pd.period_range("2026-10", "2026-12", freq="M"), "DowntimeHours"].sum())

kpi_snapshot = {
    "current_downtime_hours": current,
    "prior_month_hours": prior_month,
    "prior_year_hours": prior_year,
    "yoy_change_hours": current - prior_year,
    "yoy_change_percent": (current - prior_year) / prior_year,
    "target_gap_hours": current - target,
    "ytd_2026_hours": ytd_2026,
    "rolling_3m_hours": rolling_3m,
    "availability": (scheduled - current) / scheduled,
}

assert current == 58
assert prior_month == 60
assert prior_year == 80
assert round(kpi_snapshot["yoy_change_percent"], 4) == -0.275
assert kpi_snapshot["target_gap_hours"] == -32
assert ytd_2026 == 882
assert rolling_3m == 181
assert round(kpi_snapshot["availability"], 6) == round((1440 - 58) / 1440, 6)

# Exact-key security gates.
security_rows = []
for user_upn, expected in expected_event_keys.items():
    actual = set(visible_events(user_upn)["EventKey"])
    assert actual == expected
    security_rows.append({
        "UserUPN": user_upn,
        "ExpectedRows": len(expected),
        "ActualRows": len(actual),
        "Passed": actual == expected,
    })

security_matrix = pd.DataFrame(security_rows)
assert security_matrix["Passed"].all()
assert len(visible_events("unmapped@example.com")) == 0

# Portfolio release gates.
release_gates = {
    "decision_brief_approved": True,
    "model_quality_passed": True,
    "kpi_known_results_passed": True,
    "time_boundaries_passed": True,
    "accessibility_review_passed": True,
    "rls_exact_keys_passed": bool(security_matrix["Passed"].all()),
    "zero_critical_defects": True,
    "performance_budget_passed": True,
    "uat_approved": True,
    "deployment_smoke_tests_passed": True,
}
assert all(release_gates.values())

plant_path = output_dir / "plant_kpis.csv"
security_path = output_dir / "security_test_matrix.csv"
kpi_path = output_dir / "executive_kpi_snapshot.json"
gates_path = output_dir / "release_gates.json"

plant_kpis.to_csv(plant_path, index=False)
security_matrix.to_csv(security_path, index=False)
kpi_path.write_text(json.dumps(kpi_snapshot, indent=2), encoding="utf-8")
gates_path.write_text(json.dumps(release_gates, indent=2), encoding="utf-8")

expected_files = [plant_path, security_path, kpi_path, gates_path]
manifest = {
    "project": "Executive Power BI Decision System",
    "status": "PASS",
    "fact_grain": "one row per completed maintenance event",
    "event_rows": int(len(events)),
    "event_downtime_minutes": int(events["DowntimeMinutes"].sum()),
    "event_repair_cost": float(events["RepairCost"].sum()),
    "release_gates": release_gates,
    "artifacts": [
        {"name": path.name, "sha256": file_sha256(path)}
        for path in expected_files
    ],
}

manifest_path = output_dir / "portfolio_manifest.json"
manifest_path.write_text(json.dumps(manifest, indent=2), encoding="utf-8")

assert manifest["status"] == "PASS"
assert len(manifest["artifacts"]) == 4
assert all(len(item["sha256"]) == 64 for item in manifest["artifacts"])

print(plant_kpis[["PlantCode", "EventCount", "DowntimeMinutes", "RepairCost"]].to_string(index=False))
print("\\nExecutive KPI snapshot:", json.dumps(kpi_snapshot, indent=2))
print("Security tests passed:", int(security_matrix["Passed"].sum()), "of", len(security_matrix))
print("Release gates passed:", sum(release_gates.values()), "of", len(release_gates))
print("Manifest status:", manifest["status"])
print("Artifacts:", sorted(path.name for path in output_dir.iterdir()))
print("All model, KPI, time, security, release, and manifest tests passed.")`,
    questions: [
      "Which assertions prove the event fact and plant dimension preserve their declared keys and relationship?",
      "Why are the plant bar graph totals reconciled back to the event fact?",
      "Which tests prove the December KPI card values and six-month trend use approved values?",
      "Why does the security test compare exact event keys rather than only row counts?",
      "Which release gates should never be converted into optional rubric points?",
      "How do SHA-256 checksums help a reviewer detect changed evidence artifacts?",
      "What additional evidence would come from a real PBIX or PBIP project, Power BI service, and Performance Analyzer?",
      "How would you extend monitoring to include refresh failures, usage, latency, access changes, and KPI outcomes?",
    ],
    expectedOutcome:
      "A reproducible evidence directory and PASS manifest that validate the capstone's model, KPI results, time comparisons, RLS populations, release gates, artifact presence, and checksums before the Power BI portfolio is presented.",
  },

  guidedPractice: [
    { id: "gp-06-07-01", question: "Write the one-sentence fact grain for this capstone.", answer: "One row of FactMaintenanceEvent represents one completed maintenance event." },
    { id: "gp-06-07-02", question: "Name the distinct purpose of each report page.", answer: "Executive Overview communicates status and priority; Reliability Trends explains time and contributing patterns; Event Investigation provides secured supporting records and accountable action." },
    { id: "gp-06-07-03", question: "Why should the monthly target not be copied to each event?", answer: "The target has Plant-Month grain; copying it to events multiplies the target when a month has several events." },
    { id: "gp-06-07-04", question: "What is the correct December 2026 downtime YoY change from 80 to 58 hours?", answer: "58 − 80 = −22 hours; −22 ÷ 80 = −27.5%, normally favorable because lower downtime is better." },
    { id: "gp-06-07-05", question: "What must pass before production release?", answer: "Approved brief, data and model controls, KPI and boundary tests, accessibility, exact-key RLS, zero blocking defects, performance budget, UAT, permissions, deployment, refresh, and smoke tests." },
    { id: "gp-06-07-06", question: "Give the six-part interview narrative.", answer: "Problem, method, controls, insight, value or action, and limitation or learning." },
  ],

  independentPractice: [
    "Write the complete executive brief, scope, stakeholder matrix, decisions, risks, and acceptance criteria.",
    "Create the star-schema and deployment architecture diagrams with grain, relationships, environments, security, and ownership.",
    "Build a measure catalog containing at least fifteen base, derived, time, target, reliability, and interaction measures.",
    "Create wireframes and final specifications for all three pages, including titles, filters, interactions, accessibility, mobile behavior, and empty states.",
    "Build exact-known-result tests for plant totals, December KPIs, YTD, rolling periods, targets, availability, subtotals, and no-data cases.",
    "Create a five-identity RLS matrix with exact allowed and denied keys, copied-link tests, exports, and overlapping-role analysis.",
    "Create a release test plan, defect register, performance record, UAT script, smoke tests, monitoring plan, and rollback decision tree.",
    "Write the README, data and privacy statement, executive summary, limitations, portfolio case study, and ninety-second interview narrative.",
  ],

  commonMistakes: [
    { mistake: "Starting with visuals instead of the decision", correction: "Approve the executive brief, questions, users, actions, and acceptance criteria first." },
    { mistake: "Mixing event, target, and snapshot grains", correction: "Keep each fact at its declared grain and compare through tested measures." },
    { mistake: "Building one flat table for convenience", correction: "Use a documented star schema with controlled dimensions, relationships, and date roles." },
    { mistake: "Using implicit measures or duplicated DAX", correction: "Create approved base measures and branch reusable derived calculations." },
    { mistake: "Filling the overview with every available KPI", correction: "Keep only measures that change executive prioritization or immediate action." },
    { mistake: "Using decorative graphs without a decision purpose", correction: "Choose each graph by comparison, trend, composition, distribution, or relationship question." },
    { mistake: "Claiming improvement from unequal or incomplete periods", correction: "Use approved date roles, comparable periods, as-of rules, and visible caveats." },
    { mistake: "Treating drillthrough or hidden pages as security", correction: "Enforce and test RLS or OLS plus service permissions independently of navigation." },
    { mistake: "Publishing hover-only definitions", correction: "Keep essential evidence visible and provide accessible text or data alternatives." },
    { mistake: "Testing only totals and the report-author identity", correction: "Test boundaries, exact event keys, representative roles, negative paths, subtotals, and no-data cases." },
    { mistake: "Deploying directly from Desktop to production", correction: "Use controlled environments, approvals, deployment evidence, app updates, smoke tests, monitoring, and rollback." },
    { mistake: "Presenting screenshots without verification artifacts", correction: "Include model, measure catalog, test matrix, defects, performance, security, manifest, README, and limitations." },
  ],

  discussionQuestions: [
    "Which executive decision is important enough to justify this report?",
    "What evidence belongs on the overview, and what belongs in trend or detail pages?",
    "Which KPI could cause the wrong action if its denominator, target, or direction is misunderstood?",
    "What would change if plants have unequal operating hours or different asset populations?",
    "Which accessibility requirement most strongly affects the page design?",
    "Which security failure would create the greatest business harm?",
    "What is the smallest release process that still protects production trust?",
    "Which artifact best demonstrates your professional judgment to an employer?",
  ],

  formativeAssessment: {
    title: "Capstone Evaluation — 100 Points",
    instructions:
      "Score each category from the submitted evidence. Each category is worth 10 points. Any unresolved critical defect in data integrity, security, privacy, accessibility for required users, or reproducibility blocks portfolio completion regardless of total points.",
    items: [
      { id: "check-06-07-01", type: "project", points: 10, prompt: "Decision brief and acceptance criteria", sampleAnswer: "Full credit requires named stakeholders, decision, questions, users, actions, scope, risks, deliverables, and observable acceptance criteria." },
      { id: "check-06-07-02", type: "model", points: 10, prompt: "Data preparation and semantic model", sampleAnswer: "Full credit requires grain, keys, exceptions, reconciliation, star schema, relationship tests, date roles, target grain, metadata, and lineage." },
      { id: "check-06-07-03", type: "dax", points: 10, prompt: "Governed measure system", sampleAnswer: "Full credit requires reusable base and derived measures, time intelligence, targets, reliability, variables, formats, blanks, denominators, and known-result tests." },
      { id: "check-06-07-04", type: "visual", points: 10, prompt: "Executive Overview page", sampleAnswer: "Full credit requires focused KPIs, comparison, target, plant ranking, freshness, accessible hierarchy, honest scales, and a clear action signal." },
      { id: "check-06-07-05", type: "visual", points: 10, prompt: "Reliability Trends page", sampleAnswer: "Full credit requires chronological trend, PY or baseline, rolling context, target, contributing breakdown, annotations, filters, and cautious interpretation." },
      { id: "check-06-07-06", type: "interaction", points: 10, prompt: "Event Investigation and report experience", sampleAnswer: "Full credit requires context-preserving drillthrough, dynamic title, supporting detail, supplemental tooltips, empty states, Back and reset paths, and mobile review." },
      { id: "check-06-07-07", type: "accessibility", points: 10, prompt: "Accessibility and honest communication", sampleAnswer: "Full credit requires titles, alt text, contrast, non-color meaning, keyboard order, visible focus, Show Data, zoom, non-hover evidence, uncertainty, and reader testing." },
      { id: "check-06-07-08", type: "security", points: 10, prompt: "Security and permissions", sampleAnswer: "Full credit requires owned RLS or OLS design, deny by default, exact-key identity tests, alternate-path tests, workspace or app permissions, export policy, and service validation." },
      { id: "check-06-07-09", type: "quality", points: 10, prompt: "Validation, performance, and release", sampleAnswer: "Full credit requires test matrix, defect register, retests, regression, Performance Analyzer evidence, performance budget, UAT, deployment, smoke tests, monitoring, and rollback." },
      { id: "check-06-07-10", type: "portfolio", points: 10, prompt: "Portfolio communication and reproducibility", sampleAnswer: "Full credit requires README, architecture, data dictionary, measure catalog, screenshots, findings, actions, limitations, AI disclosure, evidence manifest, and interview narrative." },
    ],
  },

  researchExtension: {
    title: "Research Extension — Compare Executive Decision-System Designs",
    prompt:
      "Evaluate two alternative designs for the same executive maintenance decision and determine which better supports accurate, accessible, secure, and timely action.",
    choices: [
      "One dense dashboard versus a three-page decision path",
      "Calendar-month reporting versus operational 4-4-5 reporting",
      "Static RLS groups versus dynamic identity-to-plant mapping",
      "Import semantic model versus DirectQuery or Direct Lake architecture",
      "Direct production publication versus controlled Development–Test–Production lifecycle",
    ],
    requirements: [
      "Hold the stakeholder decision and metric contracts constant",
      "Define evaluation criteria before comparing designs",
      "Include correctness, usability, accessibility, security, performance, maintainability, and deployment risk",
      "Create at least one diagram and two quantitative comparison tables or graphs",
      "Test representative user scenarios and edge cases",
      "State assumptions, evidence limits, and unresolved risks",
      "Recommend one design and identify conditions that would reverse the recommendation",
    ],
  },

  portfolioArtifact: {
    title: "Final Portfolio Submission — Executive Power BI Decision System",
    purpose:
      "Submit one coherent evidence product demonstrating that you can design, build, validate, secure, release, explain, and defend a professional Power BI solution.",
    requiredSections: [
      "Executive brief, stakeholder matrix, scope, risks, and acceptance criteria",
      "Architecture, lineage, star-schema, page-flow, security, and deployment diagrams",
      "Data dictionary, preparation log, exceptions, reconciliation, and privacy statement",
      "Measure catalog with formulas, formats, owners, denominators, targets, directions, blanks, and tests",
      "Executive Overview, Reliability Trends, and Event Investigation pages",
      "Accessibility, mobile, drillthrough, tooltip, RLS, export, and interaction evidence",
      "Known-result, boundary, subtotal, no-data, role, regression, and performance tests",
      "Defect register, UAT approval, release record, smoke tests, monitoring, support, and rollback plan",
      "README, executive summary, finding-to-action table, limitations, AI-assistance disclosure, and evidence manifest",
      "Two-minute demonstration plan and ninety-second interview narrative",
    ],
    evidenceChecklist: [
      "Every source row reaches an approved fact, dimension, exception, or exclusion outcome",
      "Every executive KPI reconciles to a controlled source total and known-result test",
      "Every percentage identifies numerator, denominator, period, target, and favorable direction",
      "Every graph has a question, correct encoding, scale, sort, label, accessible summary, and limitation",
      "Every page has a distinct purpose and tested navigation path",
      "Every protected identity matches exact authorized and denied key sets",
      "Every blocking defect is corrected, retested, reviewed, and closed",
      "Every required visual meets the measured performance budget",
      "Every production step has an owner, approval, smoke test, monitoring rule, and rollback response",
      "A clean evidence run regenerates all validation artifacts and a PASS manifest",
    ],
  },

  growthIndicators: [
    { title: "BI Product Thinker", description: "You begin with a decision and build a focused analytical workflow around action and value." },
    { title: "Semantic-Model Architect", description: "You control grain, relationships, targets, measures, date roles, security, and lineage." },
    { title: "Report Experience Designer", description: "You create accessible status, trend, and investigation pages with honest graphs and purposeful interactions." },
    { title: "Release-Ready Analyst", description: "You validate evidence, close defects, measure performance, manage deployment, and communicate limitations." },
  ],

  reflection: [
    "Can an executive identify the required decision and action within thirty seconds?",
    "Can every visible number be traced to source rows, a model path, and a measure contract?",
    "Does the report distinguish observed evidence from causal explanation?",
    "Which KPI conclusion changes after accounting for operating exposure?",
    "Can required evidence be reached without color, hover, or a mouse?",
    "Can any identity or alternate pathway reveal unauthorized records?",
    "Which boundary, subtotal, or no-data case is most likely to fail?",
    "What measured performance result changed after optimization?",
    "What would block deployment today?",
    "What monitoring signal should trigger investigation or rollback?",
    "What limitation must be stated before leadership acts?",
    "Can you defend your decisions confidently without overselling the result?",
  ],

  summary: [
    "A portfolio dashboard is a governed decision system, not a gallery of visuals.",
    "Begin with an executive decision, bounded questions, users, actions, risks, deliverables, and observable acceptance criteria.",
    "Preserve fact grain, dimension uniqueness, foreign-key integrity, target grain, date roles, and reconciled totals.",
    "Build derived DAX from approved base measures and document context, denominator, target, direction, format, blank behavior, and tests.",
    "Use an Executive Overview for status and priority, Reliability Trends for explanation, and Event Investigation for secured evidence and action.",
    "Choose graphs by analytical purpose and preserve honest scales, chronological order, direct labels, context, uncertainty, and accessible summaries.",
    "Apply time intelligence only after date-table, date-role, comparable-period, and completeness rules are approved.",
    "Make drillthrough context visible and keep essential information out of hover-only tooltips.",
    "Enforce security in the semantic model and service; never rely on hidden pages or navigation.",
    "Test exact authorized and denied key sets for representative, overlapping, and unmapped identities.",
    "Validate data, model, calculations, visuals, interactions, accessibility, security, performance, and user acceptance.",
    "Critical failures are release gates and cannot be averaged away by high rubric scores.",
    "Use Development, Test, and Production environments with approvals, configuration, deployment evidence, smoke tests, monitoring, and rollback.",
    "Package the report with architecture, dictionary, measure catalog, tests, defects, performance, security, limitations, README, and manifest.",
    "Use AI as a reviewed accelerator and disclose how generated output was independently verified.",
    "Present the capstone as problem, method, controls, insight, business value, limitation, and next action.",
    "Completion means another reviewer can reproduce the evidence, release decision, and principal findings.",
  ],

  previousLesson: {
    id: "data-ai-m06-l06",
    moduleNumber: 6,
    slug: "drillthrough-tooltips-security-and-report-validation",
    title: "Drillthrough, Tooltips, Security, and Report Validation",
  },
  nextLesson: null,

  lumineryGuidance: {
    message:
      "Finish the capstone as a governed product: one decision, three purposeful pages, verified data, secure evidence, controlled release, and a story you can defend.",
    prompt:
      "Act as my senior Power BI portfolio mentor, BI product owner, semantic-model architect, DAX reviewer, accessibility specialist, security engineer, quality lead, release manager, and interview coach. Help me complete Module 6 Lesson 7 one verified gate at a time. Require an executive brief, acceptance criteria, source and privacy inventory, fact grain, dimensions, target grain, date roles, relationship tests, reconciliation, measure catalog, page questions, graph specifications, accessibility, mobile review, drillthrough contract, tooltip classification, RLS and permissions, exact-key tests, boundary and subtotal tests, Performance Analyzer evidence, defect closure, UAT, Development–Test–Production deployment, app audiences, refresh, smoke tests, monitoring, rollback, README, manifest, limitations, AI disclosure, and interview narrative. Do not approve visual-first building, mixed grains, unreconciled totals, duplicated DAX, KPI overload, decorative charts, incomplete-period claims, hover-only evidence, hidden-page security, count-only RLS tests, unresolved blocking defects, direct production publication, subjective performance claims, or a portfolio without reproducible evidence.",
    coachingQuestions: [
      "What decision and action define the project?",
      "What exact population, grain, date role, and target grain support each KPI?",
      "Which page answers status, explanation, and evidence questions?",
      "What graph specification best answers each analytical purpose?",
      "Can every required user reach the evidence accessibly?",
      "What are each identity's exact allowed and denied keys?",
      "Which known result, boundary, and regression test proves this measure?",
      "What defect or performance result blocks release?",
      "What happens immediately after production deployment?",
      "Can you explain the project as problem, method, control, insight, value, and limitation?",
    ],
  },
};

export default lesson07;
