const lesson04 = {
  id: "data-ai-m07-l04",
  courseId: "data-ai-foundations",
  moduleId: "data-ai-foundations-module-07",
  moduleNumber: 7,
  lessonNumber: 4,
  slug: "fabric-pipelines-dataflows-gen2-notebooks-and-spark",
  title: "Fabric Pipelines, Dataflows Gen2, Notebooks, and Spark",
  shortTitle: "Pipelines, Dataflows Gen2, Notebooks, and Spark",
  subtitle:
    "Select the right Microsoft Fabric workload for movement, low-code transformation, code-first engineering, distributed processing, orchestration, validation, recovery, and production operations.",
  status: "available",
  duration: "6–8 hours",
  level: "Beginner to Professional",

  essentialQuestion:
    "How should a data engineer divide responsibilities among Fabric pipelines, Dataflow Gen2, notebooks, and Apache Spark so the complete workflow remains simple, reliable, testable, observable, and cost-aware?",
  bigIdea:
    "Fabric workloads are complementary. Pipelines coordinate activities and state, Dataflow Gen2 expresses accessible low-code transformations, notebooks develop and document code-first logic, and Spark executes scalable distributed work. The strongest architecture assigns one clear responsibility to each component and proves the interfaces between them.",

  whyThisLessonExists: {
    title: "A Platform Becomes Complex When Every Tool Tries to Do Everything",
    introduction:
      "Teams often place business logic inside pipeline expressions, use notebooks for simple copies, build giant dataflows that hide expensive operations, or launch Spark for data that fits comfortably in a smaller engine. The workflow may run, but it becomes difficult to test, deploy, recover, and explain.",
    centralProblem:
      "A manufacturing company must ingest work orders, standardize asset reference data, validate keys, process high-volume telemetry, create Gold reliability tables, and publish evidence by 6:00 a.m. The team needs to assign each responsibility to a Fabric workload and design parameters, dependencies, retries, quality gates, monitoring, and recovery.",
    purpose:
      "This lesson teaches workload selection, pipeline activities and control flow, Dataflow Gen2 and Power Query, notebook engineering, managed Spark execution, parameterization, environments, dependencies, retries, testing, performance, cost, CI/CD awareness, monitoring, and a tested workflow-evidence lab.",
  },

  problemFirst: {
    title: "Opening Investigation: One Workflow, Four Workloads",
    scenario:
      "Daily ERP tables require a simple copy, asset reference data needs accessible low-code standardization, maintenance rules require tested Python, and billions of telemetry rows require distributed joins and aggregation. All trusted outputs must wait for validation and publish atomically.",
    questions: [
      "Which steps move data without changing business meaning?",
      "Which transformations should a Power Query developer maintain?",
      "Which logic requires reusable Python, SQL, Scala, or R code?",
      "Which workload is large or parallel enough to justify Spark?",
      "Which activities can run concurrently and which have dependencies?",
      "What parameters change by environment or run window?",
      "Which failures are retryable and which should block immediately?",
      "What run evidence proves quality, recovery, duration, cost, and publication status?",
    ],
    expectedInsight:
      "Choose tools by responsibility, scale, skill, governance, testability, and operations. Then use a pipeline to coordinate the smallest clear components through explicit contracts.",
  },

  visualModels: [
    {
      id: "fabric-workload-comparison",
      type: "comparison",
      title: "Four Fabric Workloads, Four Primary Responsibilities",
      description:
        "Start with the job to be done, then choose the simplest workload that meets the engineering contract.",
      items: [
        { label: "Pipeline", symbol: "Activities + dependencies + state", meaning: "Orchestrates movement, dataflows, notebooks, scripts, conditions, loops, parameters, schedules, retries, validation, publication, notifications, and run history." },
        { label: "Dataflow Gen2", symbol: "Power Query + destinations", meaning: "Provides low-code ingestion and transformation for analysts and engineers who need visible steps, reusable queries, connectors, shaping, destinations, and managed execution." },
        { label: "Notebook", symbol: "Code + Markdown + interactive results", meaning: "Develops, tests, explains, and operationalizes Python, PySpark, Spark SQL, Scala, R, data science, and engineering logic with lakehouse context." },
        { label: "Apache Spark", symbol: "Distributed data + parallel compute", meaning: "Executes scalable transformations, joins, aggregations, machine learning, and file operations across partitions using managed starter or custom pools." },
      ],
    },
    {
      id: "pipeline-control-path",
      type: "lifecycle",
      title: "Production Pipeline Control Path",
      description:
        "Keep orchestration state visible while transformation logic remains modular and testable.",
      stages: [
        { label: "1. Trigger", detail: "Start from an approved schedule, event, parent workflow, manual action, or API request." },
        { label: "2. Resolve parameters", detail: "Set environment, workspace, source, target, run window, watermark, batch ID, version, and rerun mode." },
        { label: "3. Execute branches", detail: "Run independent copies, dataflows, notebooks, or Spark work in parallel within source and capacity limits." },
        { label: "4. Join dependencies", detail: "Wait for required upstream activities and expose success, failure, skip, timeout, or cancel states." },
        { label: "5. Validate", detail: "Apply schema, count, key, reconciliation, freshness, privacy, performance, and cost gates." },
        { label: "6. Publish or recover", detail: "Publish atomically on success; otherwise quarantine, retry eligible failures, preserve evidence, and stop dependent work." },
        { label: "7. Record and alert", detail: "Store activity timing, attempts, parameters, versions, counts, checksums, errors, cost signals, and owner actions." },
      ],
      feedback:
        "Pipeline success is not data success. Publication depends on quality gates and reconciled outputs, not merely green activity icons.",
      interpretation:
        "The pipeline coordinates work and evidence; it should not become the only place where business logic can be understood.",
    },
    {
      id: "dataflow-design-path",
      type: "lifecycle",
      title: "Dataflow Gen2 — Low-Code Transformation Contract",
      description:
        "Treat every visible Power Query step as production logic requiring ownership, typing, testing, and destination behavior.",
      stages: [
        { label: "1. Connect", detail: "Use approved credentials, gateway, connector, privacy, and source ownership." },
        { label: "2. Profile", detail: "Inspect columns, types, nulls, values, errors, distribution, and source behavior before shaping." },
        { label: "3. Transform", detail: "Filter, type, split, merge, pivot, group, derive, standardize, and validate through named Power Query steps." },
        { label: "4. Optimize", detail: "Preserve query folding where supported, filter early, remove unused columns, control staging, and avoid repeated expensive evaluation." },
        { label: "5. Load", detail: "Choose Lakehouse Files or Tables, Warehouse, or another supported destination with explicit create, replace, append, or update behavior." },
        { label: "6. Test and operate", detail: "Validate known results, refresh behavior, schema change, credentials, destination writes, duration, failures, and deployment variables." },
      ],
      feedback:
        "Low-code is still code: unnamed steps, automatic type guesses, and unclear destination settings create production risk.",
      interpretation:
        "Dataflow Gen2 is strongest when transformations remain understandable to their owners and the data volume and complexity fit the engine.",
    },
    {
      id: "notebook-spark-path",
      type: "lifecycle",
      title: "Notebook to Spark Job — Development and Execution Lifecycle",
      description:
        "Separate interactive discovery from deterministic production execution.",
      stages: [
        { label: "1. Develop", detail: "Use Markdown, small samples, assertions, reusable functions, and named sections to explain intent and test logic." },
        { label: "2. Configure", detail: "Attach the correct Lakehouse, environment, runtime, libraries, secrets, pool, parameters, and resource profile." },
        { label: "3. Plan", detail: "Inspect data size, partitions, joins, shuffles, skew, caching, input pruning, file layout, and expected output grain." },
        { label: "4. Execute", detail: "Run with managed Spark sessions or jobs, deterministic inputs, bounded resources, and observable stages and tasks." },
        { label: "5. Validate", detail: "Assert schema, keys, quality, counts, totals, partitions, files, performance, and idempotent output." },
        { label: "6. Operationalize", detail: "Parameterize through a pipeline, version code, preserve snapshots and logs, define retries, alerts, recovery, and service objectives." },
      ],
      feedback:
        "A notebook that runs interactively is not automatically production-ready; hidden state, out-of-order cells, local variables, and unpinned libraries must be removed.",
      interpretation:
        "The notebook explains and packages logic; Spark supplies distributed execution when the workload justifies it.",
    },
    {
      id: "activity-duration-chart",
      type: "barChart",
      title: "Illustrative Fabric Run — Activity Duration",
      description:
        "Use measured duration and dependency position to optimize the actual critical path. Values are illustrative, not service benchmarks.",
      ariaLabel:
        "Horizontal bar graph showing Copy work orders four minutes, Dataflow assets five minutes, Notebook validation six minutes, Spark transform nine minutes, Gold quality gate three minutes, and Publish two minutes.",
      unit: "min",
      max: 9,
      items: [
        { label: "Copy work orders", value: 4, note: "Runs in parallel with asset standardization." },
        { label: "Dataflow assets", value: 5, note: "The longer of two parallel starting branches." },
        { label: "Notebook validation", value: 6, note: "Begins only after both source branches succeed." },
        { label: "Spark transform", value: 9, note: "Largest sequential stage and first measured optimization candidate." },
        { label: "Gold quality gate", value: 3, note: "Required control, not removable overhead." },
        { label: "Publish", value: 2, note: "Atomic promotion and run-state commit." },
      ],
      interpretation:
        "Because the first two activities run in parallel, the critical path is 5 + 6 + 9 + 3 + 2 = 25 minutes, not the 29-minute sum of all bars.",
    },
  ],

  representationModel: {
    title: "Illustrative Spark Workload Scaling — Table and Line Graph",
    description:
      "Measure each real workload under controlled conditions; distributed processing includes startup, scheduling, shuffle, and write overhead, so elapsed time does not scale perfectly with input size.",
    equation: "effective throughput = processed GB ÷ elapsed minutes",
    columns: [
      { key: "volume", label: "Input Volume (GB)" },
      { key: "minutes", label: "Elapsed Time (min)" },
    ],
    rows: [
      { volume: 1, minutes: 2 },
      { volume: 5, minutes: 4 },
      { volume: 10, minutes: 6 },
      { volume: 25, minutes: 11 },
      { volume: 50, minutes: 18 },
    ],
    xKey: "volume",
    yKey: "minutes",
    xLabel: "Input volume (GB)",
    yLabel: "Elapsed time (min)",
    highlightPoint: { x: 50, y: 18 },
  },

  learningObjectives: [
    "Differentiate orchestration, movement, low-code transformation, code development, and distributed execution.",
    "Explain pipelines as logical groups of activities deployed and scheduled as a workflow.",
    "Design sequential, parallel, conditional, looping, and failure-handling pipeline paths.",
    "Parameterize environment, source, target, run window, watermark, batch, version, and rerun behavior.",
    "Choose pipeline Copy activity, Copy job, or another ingestion method from workflow requirements.",
    "Explain Dataflow Gen2 as Power Query-based low-code ingestion and transformation.",
    "Design explicit Dataflow Gen2 destination and refresh behavior.",
    "Apply folding, early filtering, column pruning, staging, and reusable-query performance practices.",
    "Use notebooks for interactive code, Markdown documentation, visualization, tests, and reusable functions.",
    "Remove hidden state and make notebooks deterministic and parameter-driven for production.",
    "Explain Fabric Runtime and managed Apache Spark compute.",
    "Choose starter or custom Spark pools from startup, control, scale, isolation, and cost requirements.",
    "Recognize partitions, stages, tasks, shuffles, skew, broadcast joins, caching, and small-file risks.",
    "Calculate critical path, success rate, utilization, throughput, retry cost, and freshness.",
    "Design retry, timeout, failure classification, quarantine, recovery, and atomic publication.",
    "Monitor run history, Spark diagnostics, capacity, duration, quality, freshness, cost, and downstream impact.",
    "Build and test a Python simulation of a multi-workload Fabric orchestration contract.",
    "Produce an employer-ready workflow architecture, runbook, evidence pack, and interview narrative.",
  ],

  prerequisiteKnowledge: [
    "Module 4: ingestion, Power Query concepts, typing, validation, cleaning, and reconciliation",
    "Module 5: Python, pandas, files, functions, exceptions, modularity, testing, and reproducibility",
    "Module 6: Power BI, semantic models, deployment, security, validation, and performance",
    "Module 7 Lessons 1–3: orchestration, OneLake, Lakehouse, Warehouse, Delta, and medallion contracts",
    "Basic familiarity with SQL, cloud connections, Git concepts, and distributed-processing motivation",
  ],

  vocabulary: [
    { term: "Fabric Data Factory", definition: "The Microsoft Fabric experience for connecting, moving, transforming, and orchestrating data workflows." },
    { term: "Pipeline", definition: "A logical grouping of activities coordinated, deployed, scheduled, monitored, and recovered as one workflow." },
    { term: "Activity", definition: "A pipeline building block that performs movement, execution, metadata, control-flow, validation, or notification work." },
    { term: "Copy activity", definition: "A pipeline activity that moves data between supported sources and destinations inside a wider orchestration." },
    { term: "Copy job", definition: "A standalone managed Fabric item for simple or recurring data movement without constructing a full pipeline graph." },
    { term: "Dependency", definition: "A declared relationship controlling whether an activity begins after another succeeds, fails, completes, skips, or times out." },
    { term: "Directed acyclic graph", definition: "A directed dependency graph with no circular execution path." },
    { term: "Trigger", definition: "An approved schedule, event, parent workflow, API, or manual condition that starts a run." },
    { term: "Parameter", definition: "A named run-time input controlling reusable workflow behavior without changing the item definition." },
    { term: "Variable", definition: "A value stored or changed during workflow execution under explicit scope and concurrency rules." },
    { term: "Expression", definition: "A dynamic formula used to derive parameter, path, condition, date, or activity-output values." },
    { term: "Control flow", definition: "Logic governing sequence, branching, iteration, waiting, failure paths, and dependency outcomes." },
    { term: "Retry policy", definition: "Rules defining eligible failure classes, attempt limits, delay, backoff, jitter, timeout, and final response." },
    { term: "Run history", definition: "Operational records of pipeline and activity status, timing, parameters, outputs, attempts, and errors." },
    { term: "Dataflow Gen2", definition: "A Fabric low-code data-ingestion and transformation item built on the Power Query experience." },
    { term: "Power Query", definition: "A declarative data connection and transformation experience whose logic is represented through M expressions and named steps." },
    { term: "M language", definition: "The functional language underlying Power Query transformations." },
    { term: "Query folding", definition: "Pushing supported transformation work back to a source or execution engine instead of processing it locally." },
    { term: "Staging", definition: "Temporarily materializing intermediate data so later transformation or loading can use Fabric compute efficiently." },
    { term: "Data destination", definition: "The approved target to which a Dataflow Gen2 query writes files or tables under declared update behavior." },
    { term: "Refresh", definition: "One execution that reads sources, evaluates transformations, and writes configured outputs." },
    { term: "Notebook", definition: "An interactive document combining executable code, Markdown, equations, visualizations, parameters, and results." },
    { term: "Cell", definition: "A notebook unit containing code or explanatory Markdown executed or displayed as part of the document." },
    { term: "Notebook session", definition: "The active execution context containing runtime, Spark application, variables, attached data, and libraries." },
    { term: "Hidden state", definition: "Undocumented session values or out-of-order execution that make results impossible to reproduce from a clean run." },
    { term: "Environment", definition: "A managed definition of runtime, libraries, resources, and settings used by Fabric code workloads." },
    { term: "Fabric Runtime", definition: "The managed Apache Spark-based platform supporting Fabric data engineering and data science execution." },
    { term: "Apache Spark", definition: "A distributed processing engine that executes work across partitions using coordinated drivers and executors." },
    { term: "Starter pool", definition: "A preconfigured Fabric Spark pool designed for fast session startup and low setup effort." },
    { term: "Custom pool", definition: "A Spark pool whose node size, scaling, and related settings are tuned for controlled workload needs." },
    { term: "Driver", definition: "The Spark process that builds execution plans, schedules tasks, and coordinates executors." },
    { term: "Executor", definition: "A Spark process that performs tasks and stores distributed data for an application." },
    { term: "Partition", definition: "A distributed slice of data processed by a Spark task." },
    { term: "Stage", definition: "A group of Spark tasks separated from other groups by shuffle or execution boundaries." },
    { term: "Task", definition: "The smallest scheduled Spark work unit, normally operating on one partition." },
    { term: "Shuffle", definition: "Redistribution of data between executors for operations such as joins, grouping, sorting, or repartitioning." },
    { term: "Data skew", definition: "Uneven distribution that causes a small number of partitions or tasks to process disproportionate data." },
    { term: "Broadcast join", definition: "A join strategy that sends a sufficiently small table to executors to avoid a large shuffle." },
    { term: "Cache", definition: "Persisted intermediate data reused across operations to avoid repeated computation when benefits exceed memory and invalidation costs." },
    { term: "Lazy evaluation", definition: "Deferring distributed computation until an action requires a result." },
    { term: "Spark job definition", definition: "A Fabric item for defining and running a repeatable Spark application outside an interactive notebook workflow." },
    { term: "Critical path", definition: "The longest-duration dependency path that determines the earliest possible workflow completion time." },
    { term: "Observability", definition: "The ability to understand workflow health from logs, metrics, diagnostics, lineage, quality, freshness, capacity, and cost." },
    { term: "CI/CD", definition: "Controlled integration and deployment practices that version, validate, promote, and release changes across environments." },
  ],

  formulas: [
    { id: "critical-path", name: "Pipeline critical path", formula: "Tcritical = max(sum of activity durations on each dependency path)", meaning: "Determines the earliest possible workflow completion under current dependencies and durations.", requirement: "Do not sum activities that run in parallel." },
    { id: "throughput", name: "Processing throughput", formula: "throughput = successfully processed records or bytes ÷ elapsed processing time", meaning: "Measures effective processing capacity.", requirement: "Report scale, engine, configuration, file layout, transformations, and rejected rows." },
    { id: "utilization", name: "Executor utilization", formula: "utilization = active executor time ÷ allocated executor time × 100%", meaning: "Shows whether allocated distributed compute performs useful work.", requirement: "Low utilization may reflect startup, skew, I/O, serial code, waiting, or over-allocation." },
    { id: "parallel-efficiency", name: "Parallel efficiency", formula: "efficiency = single-worker time ÷ (workers × parallel time)", meaning: "Measures how well added workers reduce elapsed time.", requirement: "Use comparable work and include coordination, shuffle, and startup overhead." },
    { id: "success-rate", name: "Workflow success rate", formula: "success rate = successful eligible runs ÷ executed eligible runs × 100%", meaning: "Measures reliability under declared completion criteria.", requirement: "Do not count partial publication or failed quality gates as success." },
    { id: "retry-rate", name: "Retry rate", formula: "retry rate = retried activities ÷ executed activities × 100%", meaning: "Shows how often activities require additional attempts.", requirement: "Break down by activity, error class, source, environment, and final outcome." },
    { id: "retry-cost", name: "Retry compute cost", formula: "retry cost = Σ(retry duration × allocated compute rate)", meaning: "Estimates resources consumed by repeated execution.", requirement: "Include repeated reads, writes, egress, source pressure, and downstream effects." },
    { id: "freshness", name: "Trusted freshness lag", formula: "freshness lag = trusted publication time − latest included source event time", meaning: "Measures how long source data waits before trusted availability.", requirement: "Separate source lateness, pipeline delay, validation time, and publication delay." },
    { id: "dataflow-reduction", name: "Early data reduction", formula: "reduction % = (source bytes − transformed bytes) ÷ source bytes × 100%", meaning: "Shows how early filters and column pruning reduce later processing.", requirement: "Confirm eliminated data is outside the approved consumer contract." },
    { id: "cost-per-output", name: "Cost per trusted output", formula: "unit cost = total movement + transform + compute + storage + operations cost ÷ trusted output units", meaning: "Relates platform cost to delivered business value.", requirement: "Use current capacity and contractual prices, and include failed and retried work." },
  ],

  workedExamples: [
    { id: "example-07-04-01", title: "Use a pipeline for orchestration", problem: "Two independent ingestions must finish before a validation notebook and Gold publication.", solutionSteps: ["Create parallel source branches.", "Join them through success dependencies before validation.", "Run transformation and quality gates sequentially.", "Publish only after all required checks pass."], answer: "Use a Fabric pipeline to coordinate the dependency graph, parameters, failure paths, and run evidence.", interpretation: "Orchestration coordinates components; it should not hide their business logic." },
    { id: "example-07-04-02", title: "Use Dataflow Gen2 for accessible transformation", problem: "Business analysts own a plant-code mapping and standardization process using Power Query skills.", solutionSteps: ["Connect through approved credentials.", "Name and document typing, trimming, mapping, and validation steps.", "Preserve folding and filter early where supported.", "Load to an explicit Silver destination and test refresh outcomes."], answer: "Use Dataflow Gen2 because low-code maintainability and visible Power Query steps match the owners and complexity.", interpretation: "Tool choice includes the operating team's skill and support model." },
    { id: "example-07-04-03", title: "Use a notebook for tested code-first rules", problem: "Maintenance validation requires reusable Python functions, assertions, statistical profiling, and detailed documentation.", solutionSteps: ["Develop pure functions and small known-result fixtures.", "Document inputs, outputs, assumptions, and failure behavior in Markdown.", "Run from a clean session with parameters.", "Return explicit metrics and status to the pipeline."], answer: "Use a notebook as the code and documentation surface, then operationalize it through a pipeline.", interpretation: "A notebook becomes production-ready through deterministic execution and explicit interfaces." },
    { id: "example-07-04-04", title: "Use Spark for distributed telemetry", problem: "Billions of sensor events require partition pruning, joins, windows, and aggregations across many files.", solutionSteps: ["Estimate data size and filter required partitions early.", "Broadcast sufficiently small dimensions where appropriate.", "Inspect shuffles, skew, task duration, and file output.", "Validate totals, partitions, performance, and cost."], answer: "Use Fabric Spark because the work benefits from distributed processing and parallel I/O.", interpretation: "Spark is justified by workload scale and operations, not by fashion." },
    { id: "example-07-04-05", title: "Calculate a parallel critical path", problem: "Copy takes 4 minutes and Dataflow takes 5 in parallel; validation takes 6, Spark 9, gate 3, and publish 2 sequentially afterward.", solutionSteps: ["The initial parallel branch contributes max(4, 5) = 5 minutes.", "Add dependent stages: 6 + 9 + 3 + 2.", "Calculate 5 + 6 + 9 + 3 + 2.", "Identify Spark as the longest sequential stage."], answer: "Critical-path duration is 25 minutes.", interpretation: "Optimizing the four-minute copy below five minutes does not reduce total duration unless it becomes the longer starting branch." },
    { id: "example-07-04-06", title: "Classify a retry", problem: "A Spark activity fails once from temporary capacity throttling, while another run fails from an invalid schema.", solutionSteps: ["Classify throttling as potentially transient.", "Retry with bounded backoff, jitter, and attempt limits.", "Classify invalid schema as deterministic.", "Stop, preserve evidence, quarantine or escalate, and correct the contract."], answer: "Retry the eligible transient capacity error; do not repeat an unchanged invalid-schema failure.", interpretation: "Retry policy depends on failure class, not tool or convenience." },
    { id: "example-07-04-07", title: "Fix an inefficient dataflow", problem: "A dataflow imports every column and row before filtering to one month and five fields.", solutionSteps: ["Apply the date filter as early as possible.", "Select only required columns.", "Confirm supported steps fold to the source.", "Measure source bytes, transformed bytes, refresh time, staging, and destination result."], answer: "Use folding, early filtering, and column pruning to reduce movement and processing.", interpretation: "Visible transformation order affects cost and performance." },
    { id: "example-07-04-08", title: "Remove notebook hidden state", problem: "A notebook succeeds only after cells 7, 3, and 5 are run manually in that order.", solutionSteps: ["Restart the session and run from the first cell.", "Move configuration and imports to explicit initialization.", "Convert shared logic into functions or versioned libraries.", "Parameterize inputs and assert outputs in a clean scheduled run."], answer: "Refactor until Run All succeeds deterministically from a new session.", interpretation: "Interactive success without clean-run reproducibility is not production evidence." },
  ],

  interactiveExploration: {
    title: "Fabric Workflow Studio: Assign, Connect, Test, and Recover",
    purpose:
      "Design a manufacturing workflow using the four workloads and justify every boundary with operational evidence.",
    instructions: [
      "List each workflow step by movement, transformation, validation, serving, or control responsibility.",
      "Choose Copy job, pipeline activity, Dataflow Gen2, notebook, Spark job, SQL, or another justified workload.",
      "Draw success, failure, completion, retry, timeout, parallel, and conditional dependencies.",
      "Define parameters, variables, secrets, environment values, and code or item versions.",
      "Specify source, destination, schema, grain, keys, write behavior, and idempotence for every interface.",
      "Create unit, known-result, schema, quality, reconciliation, performance, failure, and rerun tests.",
      "Define logs, metrics, Spark diagnostics, alerts, capacity, cost, ownership, and service objectives.",
      "Simulate a transient failure and a deterministic failure, then prove the correct recovery behavior.",
    ],
    investigationQuestions: [
      "Which component owns business transformation logic?",
      "Could a simpler workload satisfy the same requirement?",
      "Which activities can run in parallel without violating source or capacity limits?",
      "Which parameter or secret must change across development, test, and production?",
      "What information must a notebook return to its parent pipeline?",
      "Which Spark operation is causing shuffle or skew?",
      "What evidence proves a retry did not duplicate the destination?",
      "Can an operator recover the workflow without opening every component manually?",
    ],
    expectedDiscovery:
      "A reliable Fabric workflow is a set of small, purpose-specific components connected by explicit data, parameter, status, and recovery contracts.",
  },

  realWorldApplications: [
    { field: "Manufacturing and Robotics", application: "Use pipelines to orchestrate work orders and sensors, Dataflow Gen2 for reference mappings, notebooks for quality rules, and Spark for large telemetry transformations." },
    { field: "Education", application: "Coordinate enrollment loads, low-code course mappings, Python validation, and large learning-event processing with privacy and intervention service levels." },
    { field: "Retail", application: "Combine scheduled copies, Power Query cleansing, notebook reconciliation, and Spark-scale clickstream processing for inventory and customer decisions." },
    { field: "Healthcare", application: "Orchestrate governed clinical ingestion, accessible reference transformation, code-based privacy tests, and distributed device-event analysis." },
    { field: "Finance", application: "Coordinate controlled movement, transparent reference transformations, code-first reconciliation, and scalable risk calculations with strict evidence." },
    { field: "AI Systems", application: "Orchestrate document ingestion, low-code metadata shaping, notebook evaluation, and Spark-scale feature or model-monitoring pipelines." },
  ],

  aiConnection: {
    title: "AI Can Draft Activities and Code, but It Cannot Own Production State",
    explanation:
      "AI can propose pipeline graphs, Power Query steps, notebook functions, Spark transformations, tests, or diagnostic hypotheses. It cannot independently authorize credentials, know source limits, approve retry side effects, define business truth, or accept production cost and reliability risk.",
    uses: [
      "Draft alternative workload assignments from an approved responsibility inventory.",
      "Generate Power Query, Python, PySpark, Spark SQL, parameter, and validation examples for review.",
      "Summarize pipeline run history and Spark diagnostics to identify likely bottlenecks.",
      "Create failure-injection and idempotent-rerun test cases from verified contracts.",
      "Draft runbooks and architecture documentation from measured evidence and owner decisions.",
    ],
    caution:
      "Never let AI insert secrets, change production permissions, trigger destructive writes, scale compute, retry non-idempotent activities, publish failed data, or optimize from invented metrics without review and tested boundaries.",
    reflectionQuestion:
      "Which workload decisions can be automated from measurements, and which require accountable architecture, security, finance, source-owner, and business approval?",
  },

  pythonLab: {
    title: "Python Lab — Simulate a Multi-Workload Fabric Pipeline and Evidence Pack",
    description:
      "Model parallel Copy and Dataflow branches, notebook validation, a Spark-style aggregate, a Gold gate, publication, a bounded transient retry, critical-path scheduling, reconciliation, checksums, and reproducible run artifacts.",
    code: `from pathlib import Path
import hashlib
import json
import pandas as pd

output_dir = Path("fabric_workloads_lesson_output")
output_dir.mkdir(exist_ok=True)

activities = pd.DataFrame([
    {"activity": "Copy_WorkOrders", "workload": "Pipeline Copy", "duration_min": 4, "dependencies": []},
    {"activity": "Dataflow_Assets", "workload": "Dataflow Gen2", "duration_min": 5, "dependencies": []},
    {"activity": "Notebook_Validate", "workload": "Notebook", "duration_min": 6, "dependencies": ["Copy_WorkOrders", "Dataflow_Assets"]},
    {"activity": "Spark_Transform", "workload": "Apache Spark", "duration_min": 9, "dependencies": ["Notebook_Validate"]},
    {"activity": "Gold_Quality_Gate", "workload": "Pipeline validation", "duration_min": 3, "dependencies": ["Spark_Transform"]},
    {"activity": "Publish", "workload": "Pipeline control", "duration_min": 2, "dependencies": ["Gold_Quality_Gate"]},
])

schedule = {}
for row in activities.itertuples(index=False):
    earliest_start = max([schedule[d]["finish"] for d in row.dependencies], default=0)
    schedule[row.activity] = {
        "start": earliest_start,
        "finish": earliest_start + row.duration_min,
    }

activities["start_min"] = activities["activity"].map(lambda name: schedule[name]["start"])
activities["finish_min"] = activities["activity"].map(lambda name: schedule[name]["finish"])
critical_path_min = int(activities["finish_min"].max())
assert critical_path_min == 25
assert schedule["Copy_WorkOrders"]["start"] == 0
assert schedule["Dataflow_Assets"]["start"] == 0
assert schedule["Notebook_Validate"]["start"] == 5

work_orders = pd.DataFrame([
    {"work_order_id": "WO-101", "asset_id": "RB-01", "plant_code": "01", "downtime_min": 12},
    {"work_order_id": "WO-102", "asset_id": "RB-02", "plant_code": "01", "downtime_min": 8},
    {"work_order_id": "WO-103", "asset_id": "RB-07", "plant_code": "02", "downtime_min": 20},
    {"work_order_id": "WO-104", "asset_id": "RB-11", "plant_code": "03", "downtime_min": 6},
])

# Simulated Dataflow Gen2 output: standardized asset reference.
assets = pd.DataFrame([
    {"asset_id": "RB-01", "plant_code": "01", "plant": "A", "asset_type": "ROBOT"},
    {"asset_id": "RB-02", "plant_code": "01", "plant": "A", "asset_type": "ROBOT"},
    {"asset_id": "RB-07", "plant_code": "02", "plant": "B", "asset_type": "ROBOT"},
    {"asset_id": "RB-11", "plant_code": "03", "plant": "C", "asset_type": "ROBOT"},
])

# Simulated notebook validation.
assert work_orders["work_order_id"].is_unique
assert assets["asset_id"].is_unique
assert work_orders["downtime_min"].ge(0).all()
assert set(work_orders["asset_id"]).issubset(set(assets["asset_id"]))

trusted = work_orders.merge(
    assets[["asset_id", "plant", "asset_type"]],
    on="asset_id",
    how="left",
    validate="many_to_one",
)
assert trusted["plant"].notna().all()

# Simulated Spark distributed aggregate.
gold = (
    trusted.groupby("plant", as_index=False)
    .agg(work_orders=("work_order_id", "nunique"), downtime_min=("downtime_min", "sum"))
    .sort_values("plant")
    .reset_index(drop=True)
)
assert int(gold["work_orders"].sum()) == 4
assert int(gold["downtime_min"].sum()) == 46
assert dict(zip(gold["plant"], gold["downtime_min"])) == {"A": 20, "B": 20, "C": 6}

run_log = pd.DataFrame([
    {"activity": "Copy_WorkOrders", "attempt": 1, "status": "SUCCEEDED", "error_class": None},
    {"activity": "Dataflow_Assets", "attempt": 1, "status": "SUCCEEDED", "error_class": None},
    {"activity": "Notebook_Validate", "attempt": 1, "status": "SUCCEEDED", "error_class": None},
    {"activity": "Spark_Transform", "attempt": 1, "status": "FAILED", "error_class": "TRANSIENT_CAPACITY"},
    {"activity": "Spark_Transform", "attempt": 2, "status": "SUCCEEDED", "error_class": None},
    {"activity": "Gold_Quality_Gate", "attempt": 1, "status": "SUCCEEDED", "error_class": None},
    {"activity": "Publish", "attempt": 1, "status": "SUCCEEDED", "error_class": None},
])
assert int((run_log["status"] == "FAILED").sum()) == 1
assert int(run_log.loc[run_log["activity"] == "Spark_Transform", "attempt"].max()) == 2
assert run_log.iloc[-1]["status"] == "SUCCEEDED"

quality = pd.DataFrame([
    {"check": "work_order_key_unique", "status": "PASS", "observed": int(work_orders["work_order_id"].nunique()), "expected": 4},
    {"check": "asset_reference_complete", "status": "PASS", "observed": int(trusted["plant"].notna().sum()), "expected": 4},
    {"check": "downtime_reconciled", "status": "PASS", "observed": int(gold["downtime_min"].sum()), "expected": int(trusted["downtime_min"].sum())},
    {"check": "critical_path", "status": "PASS", "observed": critical_path_min, "expected": 25},
])
assert (quality["status"] == "PASS").all()
assert (quality["observed"] == quality["expected"]).all()

def frame_checksum(frame, sort_columns):
    stable = frame.sort_values(sort_columns).to_csv(index=False)
    return hashlib.sha256(stable.encode("utf-8")).hexdigest()

activity_path = output_dir / "activity_schedule.csv"
run_path = output_dir / "pipeline_run_log.csv"
trusted_path = output_dir / "trusted_work_orders.csv"
gold_path = output_dir / "gold_plant_summary.csv"
quality_path = output_dir / "quality_results.csv"
manifest_path = output_dir / "workflow_manifest.json"

activities.to_csv(activity_path, index=False)
run_log.to_csv(run_path, index=False)
trusted.to_csv(trusted_path, index=False)
gold.to_csv(gold_path, index=False)
quality.to_csv(quality_path, index=False)

manifest = {
    "workflow": "manufacturing_fabric_multi_workload",
    "status": "PASS",
    "critical_path_min": critical_path_min,
    "activities": int(len(activities)),
    "activity_attempts": int(len(run_log)),
    "transient_retries": 1,
    "trusted_rows": int(len(trusted)),
    "gold_rows": int(len(gold)),
    "gold_downtime_min": int(gold["downtime_min"].sum()),
    "quality_checks_passed": int((quality["status"] == "PASS").sum()),
    "trusted_sha256": frame_checksum(trusted, ["work_order_id"]),
    "gold_sha256": frame_checksum(gold, ["plant"]),
    "artifacts": [activity_path.name, run_path.name, trusted_path.name, gold_path.name, quality_path.name],
}
manifest_path.write_text(json.dumps(manifest, indent=2), encoding="utf-8")

assert manifest["status"] == "PASS"
assert manifest["critical_path_min"] == 25
assert manifest["quality_checks_passed"] == 4
assert len(manifest["trusted_sha256"]) == 64
assert len(manifest["gold_sha256"]) == 64

print("Activity schedule:\\n", activities[["activity", "workload", "start_min", "finish_min"]].to_string(index=False))
print("\\nCritical path:", critical_path_min, "minutes")
print("\\nRun attempts:\\n", run_log.to_string(index=False))
print("\\nGold result:\\n", gold.to_string(index=False))
print("\\nQuality results:\\n", quality.to_string(index=False))
print("\\nManifest status:", manifest["status"])
print("Artifacts:", sorted(path.name for path in output_dir.iterdir()))`,
    questions: [
      "Why do Copy_WorkOrders and Dataflow_Assets both start at minute zero?",
      "Why does Notebook_Validate begin at minute five rather than minute four?",
      "How does the schedule prove a 25-minute critical path?",
      "Which responsibilities are simulated for the pipeline, Dataflow, notebook, and Spark workloads?",
      "Why is the first Spark failure eligible for a bounded retry?",
      "What change would make the retry unsafe without an idempotent write?",
      "How do the quality table and checksums support atomic publication evidence?",
      "What Fabric run-history, Spark diagnostic, capacity, and cost fields would you add in production?",
    ],
    expectedOutcome:
      "A six-file evidence pack showing a six-activity workflow, parallel starting branches, a 25-minute critical path, one controlled transient Spark retry, four trusted work orders, three Gold plant rows totaling 46 downtime minutes, four passing quality checks, SHA-256 evidence, and a PASS manifest.",
  },

  guidedPractice: [
    { id: "gp-07-04-01", question: "Which workload coordinates dependencies and schedules?", answer: "A Fabric pipeline." },
    { id: "gp-07-04-02", question: "Which workload provides low-code Power Query transformation?", answer: "Dataflow Gen2." },
    { id: "gp-07-04-03", question: "Which item combines code, Markdown, visualizations, and interactive execution?", answer: "A Fabric notebook." },
    { id: "gp-07-04-04", question: "Which engine fits large distributed joins and aggregations?", answer: "Apache Spark when measured scale and complexity justify distributed execution." },
    { id: "gp-07-04-05", question: "Two parallel activities take four and seven minutes. What duration do they add to the critical path before their join?", answer: "Seven minutes, assuming both start together and the join waits for both." },
    { id: "gp-07-04-06", question: "Should an invalid schema failure be retried unchanged?", answer: "No. It is deterministic and requires contract, source, or transformation correction." },
  ],

  independentPractice: [
    { id: "ip-07-04-01", difficulty: "Select", question: "Choose a Fabric workload for eight movement, low-code, code-first, distributed, and orchestration scenarios and justify each." },
    { id: "ip-07-04-02", difficulty: "Design", question: "Draw a pipeline DAG with two parallel ingestions, a dataflow, two notebooks, one Spark transformation, quality gates, publication, and failure notification." },
    { id: "ip-07-04-03", difficulty: "Dataflow", question: "Design a Dataflow Gen2 with explicit types, folding-aware steps, staging decision, destination settings, refresh tests, and deployment variables." },
    { id: "ip-07-04-04", difficulty: "Notebook", question: "Refactor an exploratory notebook into deterministic initialization, parameters, functions, assertions, outputs, and a clean Run All test." },
    { id: "ip-07-04-05", difficulty: "Spark", question: "Diagnose a slow join using partition counts, shuffle size, skew, broadcast eligibility, task duration, input pruning, and output files." },
    { id: "ip-07-04-06", difficulty: "Calculate", question: "Calculate critical path, throughput, retry rate, parallel efficiency, freshness lag, and cost per trusted output for a sample run." },
    { id: "ip-07-04-07", difficulty: "Recover", question: "Design failure tests for timeout, throttling, schema drift, missing credentials, quality failure, partial write, retry, and rollback." },
    { id: "ip-07-04-08", difficulty: "Operate", question: "Create a runbook covering parameters, versions, secrets, monitoring, alerts, Spark diagnostics, capacity, cost, retries, recovery, and owner escalation." },
  ],

  commonMistakes: [
    { mistake: "Putting transformation logic inside pipeline expressions", correction: "Keep orchestration readable and place reusable business transformations in dataflows, notebooks, Spark code, or SQL." },
    { mistake: "Using a notebook for every copy", correction: "Use managed movement tools when no code-first transformation or special control is required." },
    { mistake: "Launching Spark for small simple data", correction: "Choose the simplest engine that meets volume, complexity, latency, skill, and operational requirements." },
    { mistake: "Assuming low-code requires no testing", correction: "Version and test Dataflow steps, types, folding, destinations, schema changes, refreshes, credentials, and results." },
    { mistake: "Keeping automatic destination behavior unexplained", correction: "Document create, replace, append, update, mapping, staging, and schema behavior explicitly." },
    { mistake: "Running notebook cells out of order", correction: "Require a clean-session Run All with explicit initialization, parameters, dependencies, and assertions." },
    { mistake: "Hardcoding workspace IDs, paths, and secrets", correction: "Use parameters, variable libraries, approved secret handling, and environment-specific configuration." },
    { mistake: "Adding parallelism without capacity or source limits", correction: "Measure concurrency, queueing, throttling, source load, and capacity before increasing parallel branches." },
    { mistake: "Retrying every failure", correction: "Retry bounded transient errors; stop for deterministic schema, data-quality, credential, authorization, or code failures." },
    { mistake: "Optimizing activities outside the critical path", correction: "Measure dependency paths and improve work that changes total completion time or another service objective." },
    { mistake: "Ignoring Spark shuffles and skew", correction: "Inspect plans, partitions, task distributions, joins, pruning, caching, and file layout with diagnostics." },
    { mistake: "Calling a green pipeline successful", correction: "Require trusted data, reconciliation, freshness, security, cost, and atomic publication gates." },
  ],

  discussionQuestions: [
    "When should a low-code transformation become a notebook or Spark job?",
    "Who should maintain Dataflow Gen2 logic in a mixed analyst-engineer team?",
    "How much control flow belongs in a pipeline before it becomes difficult to understand?",
    "Should exploratory notebooks ever run directly in production?",
    "When does a custom Spark pool provide enough value to justify additional configuration?",
    "Which workload should own data-quality rules shared across several pipelines?",
    "How should teams test a workflow whose components deploy at different times?",
    "What evidence proves an optimization reduced total business latency and cost?",
  ],

  formativeAssessment: {
    totalPoints: 100,
    passingScore: 80,
    questions: [
      { id: "check-07-04-01", points: 10, prompt: "Differentiate pipelines, Dataflow Gen2, notebooks, and Spark.", sampleAnswer: "Pipelines orchestrate activities; Dataflow Gen2 provides low-code Power Query transformation; notebooks develop and document code-first logic; Spark executes distributed processing." },
      { id: "check-07-04-02", points: 10, prompt: "Design a dependency graph with parallel ingestion and controlled publication.", sampleAnswer: "Run independent sources in parallel, join their success paths, transform, validate, branch failures, publish atomically, and record run evidence." },
      { id: "check-07-04-03", points: 10, prompt: "Specify production pipeline parameters.", sampleAnswer: "Include environment, source, target, run window, watermark, batch ID, code or item version, write mode, rerun mode, and approved feature flags." },
      { id: "check-07-04-04", points: 10, prompt: "Design a maintainable Dataflow Gen2 transformation.", sampleAnswer: "Use approved connection, explicit types, named steps, early filters, column pruning, folding checks, controlled staging, destination behavior, tests, variables, and ownership." },
      { id: "check-07-04-05", points: 10, prompt: "Explain how to productionize a notebook.", sampleAnswer: "Remove hidden state, parameterize inputs, pin environment and dependencies, modularize code, add assertions, return explicit outputs, run cleanly, version, monitor, and recover through orchestration." },
      { id: "check-07-04-06", points: 10, prompt: "Diagnose a skewed Spark job.", sampleAnswer: "Inspect plans, partition and task size distributions, shuffle, key frequencies, join strategy, pruning, caching, spills, executor utilization, and output layout." },
      { id: "check-07-04-07", points: 10, prompt: "Calculate the critical path when two parallel starts take 4 and 5 minutes, followed by 6, 9, 3, and 2 minutes.", sampleAnswer: "max(4,5) + 6 + 9 + 3 + 2 = 25 minutes." },
      { id: "check-07-04-08", points: 10, prompt: "Classify retryable and nonretryable failures.", sampleAnswer: "Timeouts, throttling, and temporary capacity may be retryable; invalid schema, failed quality, bad code, invalid credentials, and unauthorized access require correction or escalation." },
      { id: "check-07-04-09", points: 10, prompt: "Define the evidence required before publishing a Gold output.", sampleAnswer: "Require parameters, versions, status, counts, keys, checksums, reconciliation, freshness, privacy, quality, performance, security, attempts, cost, and owner approval." },
      { id: "check-07-04-10", points: 10, prompt: "Create an operational monitoring plan for all four workloads.", sampleAnswer: "Monitor pipeline runs and dependencies, dataflow refreshes and folding or destination behavior, notebook outputs and versions, Spark stages and tasks, capacity, quality, freshness, cost, alerts, lineage, and downstream impact." },
    ],
  },

  researchExtension: {
    title: "Research Extension — Compare Fabric Transformation Workloads",
    description:
      "Implement or specify the same approved transformation using Dataflow Gen2, a notebook, and Spark, with one pipeline coordinating the experiment.",
    researchQuestion:
      "Which implementation best balances correctness, transparency, developer skill, scale, performance, deployment, recovery, monitoring, and total cost?",
    applicationOptions: ["Asset master standardization", "Maintenance event validation", "Telemetry aggregation", "Student intervention features", "Retail product and inventory conformance"],
    task:
      "Define known results and decision criteria first, use current official documentation, test each implementation under comparable inputs and failures, measure evidence, and recommend one with reversal conditions.",
    requiredEvidence: [
      "Requirements, workload decision matrix, and architecture diagram",
      "Equivalent transformation contract and known-result fixtures",
      "Pipeline, Dataflow, notebook, Spark, and destination configuration",
      "Correctness, schema, quality, performance, failure, retry, and rerun results",
      "Duration, throughput, capacity, storage, operations, and estimated cost",
      "Maintainability, deployment, security, limitations, owners, and review date",
    ],
  },

  portfolioArtifact: {
    title: "Portfolio Artifact — Production Fabric Multi-Workload Workflow",
    description:
      "Create an employer-ready workflow that assigns clear responsibilities to pipeline, Dataflow Gen2, notebook, and Spark components and proves its quality and recovery behavior.",
    requiredSections: [
      "Business decision, consumers, sources, outputs, latency, reliability, security, and cost objectives",
      "Workload responsibility and selection matrix",
      "Pipeline dependency, parameter, failure, retry, validation, publication, and notification design",
      "Dataflow Gen2 connections, named transformations, folding, staging, destination, tests, and variables",
      "Notebook parameters, environment, functions, documentation, assertions, outputs, and clean-run evidence",
      "Spark partitions, joins, shuffles, skew, pool, runtime, diagnostics, file layout, and performance evidence",
      "Interface contracts with schema, grain, keys, versions, write behavior, and idempotence",
      "Quality, reconciliation, freshness, privacy, security, failure-injection, retry, recovery, and rerun tests",
      "Monitoring, alerts, capacity, cost, service objectives, ownership, escalation, and runbook",
      "Python lab artifacts, checksums, PASS manifest, limitations, README, and interview narrative",
    ],
  },

  growthIndicators: [
    { title: "Fabric Workload Architect", description: "You assign movement, transformation, code, scale, and control responsibilities to appropriate components." },
    { title: "Orchestration Engineer", description: "You design parameters, dependencies, quality gates, failure paths, retries, and atomic publication." },
    { title: "Spark Performance Analyst", description: "You reason from partitions, shuffles, skew, utilization, diagnostics, and measured critical paths." },
    { title: "DataOps Operator", description: "You connect deployment, monitoring, recovery, cost, ownership, and service evidence." },
  ],

  reflection: [
    "What is the smallest workload that meets this responsibility?",
    "Where does business transformation logic live and how is it tested?",
    "Which parameters and secrets vary by environment?",
    "Which activities can run in parallel safely?",
    "What is the measured critical path?",
    "Does the Dataflow preserve folding and explicit destination behavior?",
    "Can the notebook Run All from a clean session?",
    "Does Spark scale because of useful parallelism or merely consume more capacity?",
    "Which failures are safe to retry automatically?",
    "What proves a retry or rerun did not duplicate the destination?",
    "Which quality gate blocks publication?",
    "Can another engineer diagnose and recover the workflow from its evidence pack?",
  ],

  summary: [
    "Fabric pipelines orchestrate and automate logical groups of activities as one deployable, schedulable workflow.",
    "Pipeline activities should coordinate movement, transformation, validation, branching, retries, publication, and evidence without hiding business logic.",
    "Dataflow Gen2 provides low-code Power Query ingestion and transformation with supported destinations and managed execution.",
    "Low-code transformations still require explicit types, named steps, tests, ownership, refresh, destination, and deployment behavior.",
    "Query folding, early filtering, column pruning, and controlled staging can reduce Dataflow processing and movement.",
    "Fabric notebooks combine executable code, Markdown, visualization, lakehouse access, parameters, and interactive development.",
    "Production notebooks require clean-session execution, deterministic initialization, modular functions, pinned environments, assertions, and explicit outputs.",
    "Fabric Data Engineering and Data Science use managed Apache Spark compute through starter or custom pools.",
    "Spark distributes work across partitions, stages, tasks, drivers, and executors.",
    "Shuffles, skew, poor joins, repeated scans, unnecessary caching, and small files can dominate Spark performance.",
    "Choose Spark only when workload scale and complexity benefit from distributed execution.",
    "The critical path is the longest dependency path, not the sum of all activity durations.",
    "Retry only bounded transient failures; deterministic data, schema, code, credential, and authorization failures require correction.",
    "Parameterize environment-specific configuration and protect secrets through approved mechanisms.",
    "A green activity graph does not prove trusted data; quality, reconciliation, freshness, privacy, security, and publication gates remain mandatory.",
    "Monitor runs, dataflow refreshes, notebook outputs, Spark diagnostics, capacity, duration, retries, quality, cost, lineage, and consumer impact.",
    "The strongest Fabric architecture uses small components with clear responsibilities and testable interfaces.",
  ],

  previousLesson: {
    id: "data-ai-m07-l03",
    moduleNumber: 7,
    slug: "bronze-silver-and-gold-medallion-architecture",
    title: "Bronze, Silver, and Gold Medallion Architecture",
  },
  nextLesson: {
    id: "data-ai-m07-l05",
    moduleNumber: 7,
    slug: "delta-tables-partitioning-idempotence-and-reruns",
    title: "Delta Tables, Partitioning, Idempotence, and Reruns",
  },

  lumineryGuidance: {
    message:
      "Use pipelines to coordinate, Dataflow Gen2 to make suitable transformations accessible, notebooks to make code explainable, and Spark only when distributed execution earns its complexity.",
    prompt:
      "Act as my senior Microsoft Fabric Data Factory architect, Power Query engineer, notebook developer, Spark performance engineer, DataOps operator, security reviewer, and portfolio mentor. Help me complete Module 7 Lesson 4 one verified gate at a time. Require business decision, responsibilities, workload selection, pipeline graph, parameters, variables, environments, secrets, activity dependencies, Dataflow steps and folding, destinations, notebook clean-run behavior, reusable functions, Spark partitions, joins, shuffles, skew, runtime, pool, quality gates, retries, idempotence, atomic publication, diagnostics, monitoring, capacity, cost, deployment, recovery, documentation, and interview narrative. Do not approve tool-first design, business logic hidden in pipeline expressions, untested low-code steps, automatic destinations without review, out-of-order notebook state, hardcoded credentials, Spark without scale evidence, unlimited parallelism, retrying deterministic failures, optimizing outside the critical path, or publication without trusted data evidence.",
    coachingQuestions: [
      "What responsibility does each Fabric component own?",
      "Why is pipeline, Dataflow Gen2, notebook, Spark, SQL, or Copy job the simplest correct choice?",
      "Which parameters, variables, versions, and secrets define a reproducible run?",
      "Which branches can execute concurrently and what is the critical path?",
      "Does the Dataflow fold, filter early, prune columns, and load with explicit behavior?",
      "Can the notebook execute deterministically from a clean session?",
      "What do Spark partitions, shuffles, skew, task duration, and utilization show?",
      "Which errors are transient, deterministic, or unsafe to retry?",
      "What quality and reconciliation gates control atomic publication?",
      "Can another engineer diagnose, recover, and rerun the workflow from preserved evidence?",
    ],
  },
};

export default lesson04;
