const lesson01 = {
  id: "data-ai-m07-l01",
  courseId: "data-ai-foundations",
  moduleId: "data-ai-foundations-module-07",
  moduleNumber: 7,
  lessonNumber: 1,
  slug: "etl-elt-batch-streaming-and-orchestration",
  title: "ETL, ELT, Batch, Streaming, and Orchestration",
  shortTitle: "ETL, ELT, Batch, Streaming, and Orchestration",
  subtitle:
    "Design reliable data movement by choosing the right transformation order, processing mode, orchestration controls, and Microsoft Fabric workload for each business decision.",
  status: "available",
  duration: "6–8 hours",
  level: "Beginner to Professional",

  essentialQuestion:
    "How do data engineers move raw data into trusted analytical products with the right freshness, quality, cost, security, and recovery behavior?",
  bigIdea:
    "A data pipeline is an operational contract. ETL or ELT determines where transformation occurs; batch or streaming determines when records are processed; orchestration determines how dependencies, retries, validation, monitoring, and recovery make the whole workflow dependable.",

  whyThisLessonExists: {
    title: "Reliable Analytics Begins Before the Dashboard",
    introduction:
      "Reports, machine-learning models, and AI systems cannot be more trustworthy than the pipelines feeding them. A technically successful copy can still deliver duplicate, late, incomplete, stale, or unauthorized data.",
    centralProblem:
      "A manufacturing company receives nightly ERP files, hourly maintenance work orders, and second-by-second robot sensor events. Leadership wants one trusted view by 6:00 a.m. and urgent alerts within two minutes. The existing script copies everything, transforms some records inconsistently, has no dependency graph, and cannot be safely rerun after failure.",
    purpose:
      "This lesson builds the conceptual and practical foundation for Module 7: ETL versus ELT, batch versus streaming, full versus incremental ingestion, orchestration as a dependency system, Microsoft Fabric tool selection, control tables, idempotence, observability, and recovery evidence.",
  },

  problemFirst: {
    title: "Opening Investigation: One Business, Three Data Clocks",
    scenario:
      "The COO needs yesterday's certified plant totals by 6:00 a.m., maintenance supervisors need new work orders within fifteen minutes, and safety engineers need critical robot-temperature events within two minutes. Source systems can resend records, arrive late, change schemas, or become temporarily unavailable.",
    questions: [
      "Which outputs require scheduled batch processing and which require streaming?",
      "What business action justifies each freshness requirement?",
      "Should sensitive records be transformed before loading or preserved raw under governed access?",
      "What field or log position supports incremental ingestion?",
      "How should duplicates, late records, and changed records be handled?",
      "Which tasks depend on successful completion of earlier tasks?",
      "What must happen when validation fails after data has already landed?",
      "Which evidence proves a rerun is safe and produces the same trusted result?",
    ],
    expectedInsight:
      "Pipeline design begins with decision latency, source behavior, data sensitivity, target capabilities, and failure recovery—not with a fashionable tool or an assumption that every workload should be real time.",
  },

  visualModels: [
    {
      id: "etl-control-path",
      type: "lifecycle",
      title: "ETL — Transform Before the Analytical Load",
      description:
        "Use ETL when data must be cleansed, standardized, masked, reduced, or validated before it enters the governed analytical destination.",
      stages: [
        { label: "1. Extract", detail: "Read a bounded source population with source timestamp, keys, schema, row count, and extraction watermark." },
        { label: "2. Stage", detail: "Land data in a controlled temporary area so extraction and transformation evidence remain separable." },
        { label: "3. Transform", detail: "Type, standardize, validate, deduplicate, mask, join, and quarantine exceptions before publication." },
        { label: "4. Validate", detail: "Compare expected and actual rows, keys, amounts, nulls, ranges, schema, and privacy rules." },
        { label: "5. Load", detail: "Write approved rows into the warehouse, Lakehouse table, or serving model using controlled keys and partitions." },
        { label: "6. Reconcile", detail: "Tie the target back to the approved source population and record exclusions or exceptions." },
        { label: "7. Publish", detail: "Expose the certified table only after quality, security, freshness, and ownership gates pass." },
        { label: "8. Monitor", detail: "Track duration, volume, freshness, failures, retries, cost, and downstream service-level objectives." },
      ],
      feedback:
        "Transformation before the final load reduces exposure of unusable or sensitive data, but the staging area still requires governance and recovery controls.",
      interpretation:
        "ETL places the main transformation responsibility between extraction and analytical publication.",
    },
    {
      id: "elt-control-path",
      type: "lifecycle",
      title: "ELT — Load Raw, Then Transform with Scalable Compute",
      description:
        "Use ELT when governed raw retention, replay, lineage, large-scale transformation, or several downstream products justify transforming inside the destination platform.",
      stages: [
        { label: "1. Extract", detail: "Capture source records and technical metadata without silently changing business meaning." },
        { label: "2. Load raw", detail: "Persist an immutable or append-oriented raw copy with access controls, source lineage, and ingestion timestamps." },
        { label: "3. Register", detail: "Record schema, partition, source version, batch identifier, watermark, and data classification." },
        { label: "4. Transform", detail: "Use SQL, Dataflow Gen2, notebooks, or Spark to clean and conform data inside Fabric." },
        { label: "5. Test", detail: "Apply contracts for uniqueness, completeness, referential integrity, ranges, timeliness, and reconciliation." },
        { label: "6. Curate", detail: "Create reusable conformed tables and business-ready serving products rather than one-off extracts." },
        { label: "7. Serve", detail: "Publish governed Warehouse, Lakehouse, semantic-model, data-science, or AI-ready outputs." },
        { label: "8. Replay", detail: "Reprocess preserved raw inputs deterministically when logic changes or a downstream defect is corrected." },
      ],
      feedback:
        "Loading raw first is not permission to create an unmanaged data swamp; access, retention, classification, quality, and cost controls begin at landing.",
      interpretation:
        "ELT separates durable ingestion from evolving transformation and uses platform compute near governed storage.",
    },
    {
      id: "batch-streaming-comparison",
      type: "comparison",
      title: "Batch and Streaming Are Service Choices",
      description:
        "Choose the slowest processing mode that still supports the required business action, then engineer its reliability explicitly.",
      items: [
        { label: "Batch", symbol: "Bounded data × scheduled run", meaning: "Processes a known set on a trigger or schedule. It is usually simpler to reconcile, rerun, audit, and cost-control when minute-level latency is unnecessary." },
        { label: "Streaming", symbol: "Unbounded events × continuous logic", meaning: "Processes events as they arrive or in short windows. It requires event-time, watermark, ordering, duplicate, state, checkpoint, and back-pressure decisions." },
        { label: "Micro-batch", symbol: "Small bounded intervals", meaning: "Groups recent events into frequent batches, balancing lower latency with simpler processing and checkpoint behavior." },
        { label: "Hybrid", symbol: "Stream now + batch reconcile", meaning: "Provides fast provisional insight from events and later certifies totals through a controlled batch reconciliation." },
      ],
    },
    {
      id: "fabric-orchestration-path",
      type: "lifecycle",
      title: "Microsoft Fabric Orchestration Control Path",
      description:
        "Separate data movement, transformation, dependency control, validation, and monitoring so every run can be understood and recovered.",
      stages: [
        { label: "Trigger", detail: "Start from schedule, event, manual request, parent pipeline, or another approved condition." },
        { label: "Parameters", detail: "Resolve environment, source, target, date range, watermark, batch ID, and rerun mode." },
        { label: "Ingest", detail: "Use Copy job, pipeline Copy activity, Dataflow Gen2, Eventstream, shortcut, mirroring, or approved connector." },
        { label: "Transform", detail: "Apply low-code Power Query, SQL, notebook, or Spark logic appropriate to volume and complexity." },
        { label: "Validate", detail: "Execute schema, count, key, range, reconciliation, privacy, and freshness gates." },
        { label: "Branch", detail: "On success, publish and notify; on failure, quarantine, preserve evidence, retry safely, or stop downstream work." },
        { label: "Record", detail: "Write run status, timing, watermarks, input/output counts, checksum, error class, and owner action." },
        { label: "Monitor", detail: "Review run history, alert on service-level breaches, and improve cost, reliability, and recovery time." },
      ],
      feedback:
        "A pipeline is not complete when data arrives; it is complete when the run is observable, validated, recoverable, and safe to consume.",
      interpretation:
        "Orchestration coordinates work and evidence. It should not hide business transformations inside an unreadable dependency canvas.",
    },
    {
      id: "pipeline-run-duration",
      type: "barChart",
      title: "Illustrative Batch Run — Duration by Activity",
      description:
        "Use measured activity duration to find the actual bottleneck before optimizing the pipeline.",
      ariaLabel:
        "Horizontal bar graph showing Extract 6 minutes, Copy to raw 12 minutes, Transform 18 minutes, Validate 4 minutes, and Publish 2 minutes.",
      unit: "min",
      max: 18,
      items: [
        { label: "Extract", value: 6, note: "Bounded source read and metadata capture." },
        { label: "Copy to raw", value: 12, note: "Largest movement stage; inspect throughput and source limits." },
        { label: "Transform", value: 18, note: "Measured bottleneck; inspect joins, shuffles, partitions, and repeated scans." },
        { label: "Validate", value: 4, note: "Do not remove quality gates merely to shorten the run." },
        { label: "Publish", value: 2, note: "Atomic promotion and control-table update." },
      ],
      interpretation:
        "The 18-minute transformation stage is the first measured optimization target. Total critical-path duration is 42 minutes only when the activities execute sequentially.",
    },
  ],

  representationModel: {
    title: "Incremental Pipeline Watermark — Table and Line Graph",
    description:
      "A successful incremental run advances the high-watermark only after validation and publication succeed; a failed run leaves the prior committed watermark unchanged.",
    equation: "Committed watermark after successful run n",
    columns: [
      { key: "run", label: "Run Number" },
      { key: "watermark", label: "Committed Source Sequence" },
    ],
    rows: [
      { run: 1, watermark: 1000 },
      { run: 2, watermark: 1240 },
      { run: 3, watermark: 1495 },
      { run: 4, watermark: 1495 },
      { run: 5, watermark: 1810 },
    ],
    xKey: "run",
    yKey: "watermark",
    xLabel: "Pipeline run",
    yLabel: "Committed sequence",
    highlightPoint: { x: 4, y: 1495 },
  },

  learningObjectives: [
    "Explain extraction, loading, transformation, serving, and orchestration as distinct responsibilities.",
    "Compare ETL, ELT, and hybrid transformation strategies.",
    "Choose batch, micro-batch, streaming, or hybrid processing from business latency and operational requirements.",
    "Distinguish event time, processing time, ingestion time, and publication time.",
    "Define a bounded batch and an unbounded event stream.",
    "Design full, incremental, change-data-capture, and append-only ingestion patterns.",
    "Use a watermark or source sequence without losing late or changed records.",
    "Explain idempotence and prove that a rerun does not duplicate the trusted target.",
    "Design a dependency graph with success, failure, retry, timeout, and conditional branches.",
    "Separate data movement, transformation, validation, and publication steps.",
    "Select among Fabric Copy job, pipeline Copy activity, Dataflow Gen2, Eventstream, SQL, notebooks, and Spark.",
    "Create run-control metadata for batch ID, status, counts, watermarks, timing, checksum, and error classification.",
    "Apply schema, completeness, uniqueness, referential, range, reconciliation, privacy, and freshness gates.",
    "Design quarantine and dead-letter handling without silently discarding rejected records.",
    "Explain at-most-once, at-least-once, and effectively-once outcomes.",
    "Monitor throughput, latency, backlog, failures, retries, cost, and service-level objectives.",
    "Simulate an incremental, idempotent pipeline and orchestration log with Python and pandas.",
    "Document a pipeline as a reproducible operational contract rather than a collection of activities.",
  ],

  prerequisiteKnowledge: [
    "Module 3: relational data, keys, joins, constraints, SQL transformations, and transactions",
    "Module 4: data ingestion, types, missingness, validation, reconciliation, and repeatable cleaning",
    "Module 5: Python, pandas, files, functions, exceptions, and reproducible analysis",
    "Module 6: semantic models, time context, validation, security, monitoring, and release evidence",
    "Basic familiarity with cloud storage, tables, APIs, CSV, JSON, and timestamps",
  ],

  vocabulary: [
    { term: "Data engineering", definition: "The discipline of designing, building, operating, and governing systems that make data reliable and usable." },
    { term: "Data integration", definition: "The controlled movement and combination of data from source systems into shared analytical products." },
    { term: "Pipeline", definition: "A repeatable sequence or graph of data movement, transformation, validation, and publication activities." },
    { term: "ETL", definition: "Extract, Transform, Load: data is transformed before it is loaded into the analytical destination." },
    { term: "ELT", definition: "Extract, Load, Transform: governed raw data is loaded first and transformed using destination-platform compute." },
    { term: "Hybrid ETL/ELT", definition: "A design that performs required controls before landing and scalable or reusable transformations after landing." },
    { term: "Extraction", definition: "Reading an identified population from a source while preserving keys, schema, timing, and lineage." },
    { term: "Transformation", definition: "Changing data structure or meaning through typing, cleaning, joining, standardizing, deriving, aggregating, or masking." },
    { term: "Load", definition: "Writing data into a destination under controlled schema, key, partition, transaction, and publication behavior." },
    { term: "Batch", definition: "A bounded collection processed together on a schedule, trigger, or request." },
    { term: "Streaming", definition: "Continuous or near-continuous processing of an unbounded sequence of events." },
    { term: "Micro-batch", definition: "Frequent processing of short bounded intervals from a continuing event source." },
    { term: "Event", definition: "An immutable observation that something occurred at a particular source or business time." },
    { term: "Event time", definition: "The time an event occurred in the source domain." },
    { term: "Processing time", definition: "The time the pipeline engine processed the event." },
    { term: "Ingestion time", definition: "The time the platform received or durably landed a record." },
    { term: "Latency", definition: "The elapsed time between a relevant source event and trusted availability for action." },
    { term: "Throughput", definition: "The amount of data processed per unit of time." },
    { term: "Backlog", definition: "Data waiting to be processed because arrival exceeds current processing capacity." },
    { term: "Full load", definition: "An ingestion that reads and replaces or rebuilds the complete approved source population." },
    { term: "Incremental load", definition: "An ingestion that processes only new or changed source records since an approved checkpoint." },
    { term: "Change data capture", definition: "A method for identifying source inserts, updates, and deletes from logs, timestamps, versions, or change tables." },
    { term: "Watermark", definition: "A committed value marking the source progress successfully processed and published." },
    { term: "Late-arriving data", definition: "Records whose event time belongs to an earlier period but arrive after the expected processing window." },
    { term: "Schema drift", definition: "An unplanned change to source fields, types, nesting, or constraints." },
    { term: "Idempotence", definition: "The property that repeating the same operation with the same inputs produces the same trusted state." },
    { term: "Upsert", definition: "A write that updates a matching target key or inserts the record when the key does not exist." },
    { term: "Append-only", definition: "A write pattern that adds records without modifying earlier records, often paired with version or event logic." },
    { term: "Checkpoint", definition: "Durable processing state used to resume safely after interruption." },
    { term: "Orchestration", definition: "Coordination of triggers, dependencies, parameters, retries, branching, monitoring, and recovery across tasks." },
    { term: "Directed acyclic graph", definition: "A dependency graph whose directed tasks contain no circular path." },
    { term: "Trigger", definition: "The approved condition that starts a pipeline run, such as a schedule, event, manual action, or parent workflow." },
    { term: "Retry", definition: "A controlled repeat of a failed activity under a declared policy for eligible error classes." },
    { term: "Exponential backoff", definition: "A retry strategy that increases waiting time between attempts to reduce pressure on a failing dependency." },
    { term: "Quarantine", definition: "A governed location for rejected records that preserves evidence without publishing them as trusted data." },
    { term: "Dead-letter destination", definition: "A controlled destination for events that cannot be processed after approved attempts." },
    { term: "Control table", definition: "A table recording pipeline configuration, watermarks, run state, counts, errors, and publication evidence." },
    { term: "Service-level objective", definition: "A measurable reliability or freshness target, such as 99% of certified batches published before 6:00 a.m." },
    { term: "Observability", definition: "The ability to understand pipeline behavior from logs, metrics, traces, lineage, and data-quality evidence." },
    { term: "At-least-once delivery", definition: "A delivery guarantee in which records are not intentionally lost but may be delivered more than once." },
    { term: "At-most-once delivery", definition: "A delivery guarantee in which duplicates are avoided but some records may be lost after failure." },
    { term: "Effectively-once result", definition: "A trusted outcome that remains unique through deterministic keys, idempotent writes, checkpoints, and reconciliation." },
    { term: "Fabric Data Factory", definition: "The Microsoft Fabric experience for connecting, moving, transforming, and orchestrating data workflows." },
    { term: "Dataflow Gen2", definition: "A Fabric low-code Power Query experience for ingesting and transforming data into supported destinations." },
    { term: "Copy activity", definition: "A pipeline activity that moves data between supported sources and destinations as part of a larger workflow." },
    { term: "Copy job", definition: "A simplified Fabric Data Factory item for managed data movement without creating a full pipeline." },
    { term: "Eventstream", definition: "A Fabric Real-Time Intelligence item for no-code ingestion, transformation, and routing of events in motion." },
  ],

  formulas: [
    { id: "latency", name: "End-to-end data latency", formula: "latency = trusted publication time − source event time", meaning: "Measures how long a business event waits before it becomes trusted and actionable.", requirement: "Use comparable clocks and distinguish provisional availability from certified publication." },
    { id: "throughput", name: "Pipeline throughput", formula: "throughput = successfully processed records ÷ elapsed processing time", meaning: "Measures processing capacity under declared conditions.", requirement: "Report record or byte units, workload mix, parallelism, and whether rejected rows are included." },
    { id: "success-rate", name: "Run success rate", formula: "success rate = successful eligible runs ÷ executed eligible runs", meaning: "Measures the share of attempted runs meeting completion criteria.", requirement: "Do not classify canceled, blocked, skipped, or partially published runs as successes without an approved rule." },
    { id: "freshness-lag", name: "Freshness lag", formula: "freshness lag = current time − maximum trusted source timestamp", meaning: "Measures how far the trusted product trails its source.", requirement: "Use the trusted source timestamp, not merely the latest file-arrival time." },
    { id: "completeness", name: "Row completeness", formula: "completeness = accepted expected rows ÷ expected source rows", meaning: "Compares published population with the approved source population.", requirement: "Account separately for legitimate exclusions, quarantined rows, source deletions, and duplicates." },
    { id: "duplicate-rate", name: "Duplicate rate", formula: "duplicate rate = duplicate business keys ÷ received rows", meaning: "Quantifies repeated key occurrences in a declared processing window.", requirement: "Define the business key, version rule, and whether retries can legitimately repeat transport records." },
    { id: "watermark-window", name: "Incremental extraction window", formula: "previous committed watermark < source position ≤ candidate watermark", meaning: "Defines the source positions eligible for the next incremental run.", requirement: "Advance the committed watermark only after successful validation and publication." },
    { id: "critical-path", name: "Critical-path duration", formula: "Tcritical = max(path duration through dependency graph)", meaning: "Measures the shortest possible workflow completion time under current task durations and dependencies.", requirement: "Do not sum parallel branches as though they were sequential." },
    { id: "availability", name: "Pipeline availability", formula: "availability = time meeting service ÷ total required service time", meaning: "Measures how often the data service satisfies its approved operating expectation.", requirement: "Define exclusions, maintenance windows, freshness thresholds, and degraded-but-available states." },
    { id: "retry-backoff", name: "Exponential retry delay", formula: "delayₖ = min(max_delay, base_delay × 2ᵏ)", meaning: "Increases waiting time after repeated transient failures.", requirement: "Add attempt limits, jitter, timeouts, and nonretryable error classification." },
  ],

  workedExamples: [
    {
      id: "example-07-01-01",
      title: "Choose ETL for a restricted analytical load",
      problem: "A source contains customer identifiers that the analytical warehouse is not permitted to retain.",
      solutionSteps: [
        "Classify the restricted fields and confirm the authorized analytical purpose.",
        "Extract into a secured temporary boundary with minimum required retention.",
        "Mask, tokenize, aggregate, or remove restricted fields before the analytical load.",
        "Validate privacy rules and reconcile permitted business totals.",
      ],
      answer: "Use ETL for the privacy-sensitive fields so unauthorized raw identifiers never enter the analytical destination.",
      interpretation: "Transformation order can be a security control, not only a performance choice.",
    },
    {
      id: "example-07-01-02",
      title: "Choose ELT for reusable governed raw data",
      problem: "Large maintenance JSON files support BI, reliability analysis, and future machine-learning use cases whose transformations will evolve.",
      solutionSteps: [
        "Land the raw files with source path, checksum, ingestion time, batch ID, schema version, and classification.",
        "Restrict raw-layer access and apply retention policy.",
        "Transform with Fabric notebooks, Spark, SQL, or Dataflow Gen2 into tested reusable tables.",
        "Preserve raw inputs so corrected logic can be replayed deterministically.",
      ],
      answer: "Use governed ELT: load a faithful raw copy, then build tested transformations inside Fabric.",
      interpretation: "ELT increases reuse and replay capability only when raw storage is actively governed.",
    },
    {
      id: "example-07-01-03",
      title: "Choose batch, streaming, or hybrid",
      problem: "Daily certified downtime totals are due at 6:00 a.m., while critical temperature events require a two-minute response.",
      solutionSteps: [
        "Map each data product to an action and maximum tolerable latency.",
        "Use scheduled batch processing for daily certified totals and reconciliation.",
        "Use Eventstream or another approved streaming path for critical events.",
        "Reconcile streamed provisional events with the authoritative batch population later.",
      ],
      answer: "Use a hybrid design: streaming for urgent intervention and batch for certified historical reporting.",
      interpretation: "One source can support several service levels without forcing every consumer into streaming complexity.",
    },
    {
      id: "example-07-01-04",
      title: "Prevent duplicate incremental loads",
      problem: "A pipeline fails after writing 300 records but before committing its watermark, so the next run receives those records again.",
      solutionSteps: [
        "Use stable business keys plus a source version or event identifier.",
        "Write through an idempotent merge, upsert, or replace-partition operation.",
        "Keep the old committed watermark until validation and publication complete.",
        "Rerun the same window and prove target keys and totals are unchanged.",
      ],
      answer: "At-least-once delivery becomes an effectively-once target result through deterministic keys and idempotent writes.",
      interpretation: "Retry safety is designed into the write contract; it is not created by hoping the task fails before writing.",
    },
    {
      id: "example-07-01-05",
      title: "Design a dependency graph",
      problem: "Plant, asset, work-order, and sensor data arrive separately, but the Gold reliability table requires all conformed dimensions first.",
      solutionSteps: [
        "Ingest independent sources in parallel where source limits allow.",
        "Validate each raw landing before transformation begins.",
        "Build shared dimensions before dependent fact transformations.",
        "Publish the Gold product only after all required validations pass.",
      ],
      answer: "Create a directed acyclic graph with parallel ingestion branches and explicit joins before dependent facts and publication.",
      interpretation: "Orchestration expresses required order; it should expose, not obscure, the business dependency.",
    },
    {
      id: "example-07-01-06",
      title: "Handle a late-arriving event",
      problem: "A maintenance event completed on December 31 arrives after the January 1 daily batch closed.",
      solutionSteps: [
        "Preserve both event time and ingestion time.",
        "Process a controlled lookback window or consume a change feed.",
        "Upsert the event by stable key and correct affected daily and monthly aggregates.",
        "Record the correction, rerun downstream products, and notify affected owners when material.",
      ],
      answer: "Reopen the affected event-time partition through an idempotent correction path rather than rewriting history silently.",
      interpretation: "Late data is a normal operating condition that must have an explicit business and technical policy.",
    },
    {
      id: "example-07-01-07",
      title: "Select a Fabric workload",
      problem: "A team needs simple incremental copying, a low-code cleansing flow, complex Spark joins, and real-time event routing.",
      solutionSteps: [
        "Use Copy job for straightforward managed movement when a full orchestration canvas is unnecessary.",
        "Use a pipeline Copy activity when movement participates in dependencies, branching, or wider orchestration.",
        "Use Dataflow Gen2 for Power Query-based low-code transformation.",
        "Use notebooks or Spark for code-intensive scalable transformation and Eventstream for events in motion.",
      ],
      answer: "Choose separate tools by responsibility and coordinate them through an observable workflow.",
      interpretation: "A platform is strongest when each workload uses the simplest tool that meets its engineering contract.",
    },
    {
      id: "example-07-01-08",
      title: "Classify failures before retrying",
      problem: "A pipeline retries every error five times, including invalid schemas and revoked credentials.",
      solutionSteps: [
        "Classify transient errors such as timeouts or throttling separately from deterministic data and configuration errors.",
        "Retry eligible transient failures with bounded exponential backoff and jitter.",
        "Stop immediately for incompatible schema, failed quality gates, invalid credentials, or unauthorized access.",
        "Route evidence and ownership to the correct operational response.",
      ],
      answer: "Retry only transient failures; deterministic failures require correction, not repetition.",
      interpretation: "Uncontrolled retries increase cost, source pressure, noise, and the risk of duplicated side effects.",
    },
  ],

  interactiveExploration: {
    title: "Pipeline Design Studio: From Decision to Recoverable Workflow",
    purpose:
      "Design one batch and one streaming path for the manufacturing scenario, then prove their service, quality, and recovery contracts.",
    instructions: [
      "Name the business decision, consumer, action, source, target, and maximum tolerable latency.",
      "Declare source grain, business key, change behavior, schema ownership, privacy class, and expected volume.",
      "Choose ETL, ELT, or hybrid and justify where each transformation occurs.",
      "Choose batch, micro-batch, streaming, or hybrid from the action latency—not from preference.",
      "Select Fabric ingestion and transformation workloads by movement, complexity, code, and latency needs.",
      "Draw the dependency graph with parameters, validations, branches, retries, quarantine, publication, and notifications.",
      "Define the incremental window, watermark commit rule, late-data policy, and idempotent write behavior.",
      "Create known-result, duplicate, schema-change, missing-file, late-event, partial-write, rerun, and recovery tests.",
      "Define run logs, metrics, alerts, service-level objectives, owner response, and rollback or replay procedure.",
    ],
    investigationQuestions: [
      "What would the business lose if this data arrived late?",
      "Which raw fields require masking or restricted access?",
      "Can the source update or delete earlier records?",
      "What proves a run processed the intended source population exactly once in the trusted result?",
      "Which tasks can run in parallel and which are on the critical path?",
      "What error classes are safe to retry automatically?",
      "What state must survive a workspace, compute, or network failure?",
      "What dashboard or alert lets an operator diagnose the failure quickly?",
    ],
    expectedDiscovery:
      "The strongest architecture is rarely all ETL, all ELT, all batch, or all streaming. It is a governed combination of processing modes and tools connected by explicit contracts and recovery evidence.",
  },

  realWorldApplications: [
    { field: "Manufacturing and Robotics", application: "Combine scheduled ERP and maintenance batches with real-time robot telemetry; reconcile urgent alerts against certified historical facts." },
    { field: "Education", application: "Load nightly enrollment and assessment data while streaming learning-platform events for timely support signals under student privacy controls." },
    { field: "Retail", application: "Process daily financial certification in batch while streaming inventory and checkout events to reduce stockouts and fraud risk." },
    { field: "Healthcare", application: "Separate governed clinical batch products from monitored device-event streams with strict privacy, lateness, and escalation rules." },
    { field: "Finance", application: "Use auditable batch reconciliation for ledgers and controlled event processing for suspicious transactions or market data." },
    { field: "AI Systems", application: "Build reproducible feature and document-ingestion pipelines while streaming inference telemetry for safety, drift, latency, and cost monitoring." },
  ],

  aiConnection: {
    title: "AI Can Draft a Pipeline, but It Cannot Own the Data Contract",
    explanation:
      "An AI assistant can suggest activities, SQL, Power Query, Spark code, tests, alert rules, or documentation. It cannot independently know source authority, privacy obligations, service-level commitments, safe retry behavior, expected totals, or acceptable data loss.",
    uses: [
      "Generate alternative ETL and ELT architectures from an approved source-and-target contract.",
      "Draft incremental extraction, merge, schema-validation, and reconciliation tests.",
      "Classify historical failures into transient, data-quality, schema, credential, capacity, and dependency categories for human review.",
      "Summarize run logs and propose likely root causes without automatically changing production state.",
      "Draft documentation from verified pipeline metadata, test evidence, and owner-approved operational procedures.",
    ],
    caution:
      "Never execute AI-generated deletion, overwrite, credential, schema-migration, or production-retry logic without controlled review, least privilege, backups or replay capability, and tested failure boundaries.",
    reflectionQuestion:
      "Which pipeline decisions require accountable source owners, security reviewers, data stewards, and business consumers even when AI produces plausible technical code?",
  },

  pythonLab: {
    title: "Python Lab — Build an Incremental, Idempotent Orchestration Evidence Pack",
    description:
      "Simulate three source batches, including a duplicate delivery, an updated record, and a late-arriving event. Apply watermark extraction, deterministic upsert logic, quality gates, run logging, checksum evidence, and a safe rerun test.",
    code: `from pathlib import Path
import hashlib
import json
import pandas as pd

output_dir = Path("fabric_pipeline_lesson_output")
output_dir.mkdir(exist_ok=True)

source = pd.DataFrame([
    {"source_seq": 101, "event_id": "E-001", "plant": "A", "event_time": "2026-10-01T08:00:00Z", "downtime_min": 12, "version": 1},
    {"source_seq": 102, "event_id": "E-002", "plant": "B", "event_time": "2026-10-01T08:05:00Z", "downtime_min": 7, "version": 1},
    {"source_seq": 103, "event_id": "E-003", "plant": "A", "event_time": "2026-10-01T08:10:00Z", "downtime_min": 18, "version": 1},
    {"source_seq": 104, "event_id": "E-002", "plant": "B", "event_time": "2026-10-01T08:05:00Z", "downtime_min": 9, "version": 2},
    {"source_seq": 105, "event_id": "E-004", "plant": "C", "event_time": "2026-09-30T23:58:00Z", "downtime_min": 25, "version": 1},
    {"source_seq": 106, "event_id": "E-005", "plant": "C", "event_time": "2026-10-01T08:20:00Z", "downtime_min": 5, "version": 1},
])
source["event_time"] = pd.to_datetime(source["event_time"], utc=True)

assert source["source_seq"].is_unique
assert source["source_seq"].is_monotonic_increasing
assert source["event_id"].notna().all()
assert source["downtime_min"].ge(0).all()
assert source["plant"].isin(["A", "B", "C"]).all()

committed_watermark = 100
target = source.iloc[0:0].copy()
run_log = []

def checksum(frame):
    stable = frame.sort_values(["event_id", "version"]).to_csv(index=False)
    return hashlib.sha256(stable.encode("utf-8")).hexdigest()

def upsert_latest(current, incoming):
    combined = pd.concat([current, incoming], ignore_index=True)
    latest = (
        combined.sort_values(["event_id", "version", "source_seq"])
        .drop_duplicates("event_id", keep="last")
        .sort_values("event_id")
        .reset_index(drop=True)
    )
    return latest

def run_incremental(run_id, candidate_watermark):
    global committed_watermark, target

    previous = committed_watermark
    extracted = source.loc[
        (source["source_seq"] > previous)
        & (source["source_seq"] <= candidate_watermark)
    ].copy()

    assert extracted["source_seq"].between(previous + 1, candidate_watermark).all()
    candidate_target = upsert_latest(target, extracted)
    assert candidate_target["event_id"].is_unique
    assert candidate_target["downtime_min"].ge(0).all()

    target = candidate_target
    committed_watermark = candidate_watermark
    run_log.append({
        "run_id": run_id,
        "status": "SUCCEEDED",
        "previous_watermark": previous,
        "candidate_watermark": candidate_watermark,
        "extracted_rows": int(len(extracted)),
        "target_rows": int(len(target)),
        "target_checksum": checksum(target),
    })

run_incremental("RUN-001", 103)
assert len(target) == 3
assert committed_watermark == 103

run_incremental("RUN-002", 106)
assert len(target) == 5
assert committed_watermark == 106
assert int(target.loc[target["event_id"] == "E-002", "downtime_min"].iloc[0]) == 9
assert int(target.loc[target["event_id"] == "E-002", "version"].iloc[0]) == 2

late_event = target.loc[target["event_id"] == "E-004"].iloc[0]
assert late_event["event_time"] < pd.Timestamp("2026-10-01T00:00:00Z")

checksum_before_rerun = checksum(target)
rows_before_rerun = len(target)

# Rerun the same committed window. No new source position is eligible.
run_incremental("RUN-003-RERUN", 106)
assert len(target) == rows_before_rerun
assert checksum(target) == checksum_before_rerun
assert run_log[-1]["extracted_rows"] == 0

plant_summary = (
    target.groupby("plant", as_index=False)
    .agg(events=("event_id", "nunique"), downtime_min=("downtime_min", "sum"))
    .sort_values("plant")
)
assert dict(zip(plant_summary["plant"], plant_summary["downtime_min"])) == {
    "A": 30, "B": 9, "C": 30
}
assert int(plant_summary["events"].sum()) == 5
assert int(plant_summary["downtime_min"].sum()) == 69

run_log_frame = pd.DataFrame(run_log)
assert (run_log_frame["status"] == "SUCCEEDED").all()
assert run_log_frame["candidate_watermark"].tolist() == [103, 106, 106]

target_path = output_dir / "trusted_events.csv"
summary_path = output_dir / "plant_summary.csv"
run_path = output_dir / "pipeline_run_log.csv"
manifest_path = output_dir / "pipeline_manifest.json"

target.to_csv(target_path, index=False)
plant_summary.to_csv(summary_path, index=False)
run_log_frame.to_csv(run_path, index=False)

manifest = {
    "pipeline": "maintenance_incremental_pipeline",
    "status": "PASS",
    "committed_watermark": committed_watermark,
    "source_rows": int(len(source)),
    "trusted_event_rows": int(len(target)),
    "trusted_downtime_minutes": int(target["downtime_min"].sum()),
    "late_event_ids": ["E-004"],
    "idempotent_rerun_passed": checksum(target) == checksum_before_rerun,
    "artifacts": [target_path.name, summary_path.name, run_path.name],
    "target_sha256": checksum(target),
}
manifest_path.write_text(json.dumps(manifest, indent=2), encoding="utf-8")

assert manifest["status"] == "PASS"
assert manifest["idempotent_rerun_passed"] is True
assert len(manifest["target_sha256"]) == 64

print("Trusted target:\\n", target[["event_id", "plant", "downtime_min", "version"]].to_string(index=False))
print("\\nPlant summary:\\n", plant_summary.to_string(index=False))
print("\\nRun log:\\n", run_log_frame[["run_id", "previous_watermark", "candidate_watermark", "extracted_rows", "target_rows"]].to_string(index=False))
print("\\nCommitted watermark:", committed_watermark)
print("Late event handled:", manifest["late_event_ids"])
print("Idempotent rerun passed:", manifest["idempotent_rerun_passed"])
print("Manifest status:", manifest["status"])
print("Artifacts:", sorted(path.name for path in output_dir.iterdir()))`,
    questions: [
      "Why does the committed watermark begin at 100 and advance only after the target passes validation?",
      "How does the upsert choose version 2 of event E-002 without duplicating the business event?",
      "Which timestamp proves that E-004 is late-arriving data?",
      "Why does RUN-003 extract zero rows, and what stronger rerun test would replay an earlier window intentionally?",
      "How do unique keys, stable ordering, and checksums support idempotence evidence?",
      "What additional transaction or atomic-publication control would be required in a real Fabric target?",
      "How would a source deletion be represented and tested?",
      "Which run-log fields would you add for duration, error class, retry count, cost, environment, code version, and owner?",
    ],
    expectedOutcome:
      "A four-file evidence pack showing a trusted five-event target, source-version correction, late-event handling, committed watermark, safe no-op rerun, plant reconciliation, checksums, and a PASS manifest.",
  },

  guidedPractice: [
    { id: "gp-07-01-01", question: "State the order of ETL and ELT.", answer: "ETL is Extract → Transform → Load. ELT is Extract → Load → Transform." },
    { id: "gp-07-01-02", question: "A certified report is required each morning. Which default processing mode fits?", answer: "Scheduled batch processing, unless a specific action requires lower latency." },
    { id: "gp-07-01-03", question: "A safety alert must arrive within two minutes. Which mode fits?", answer: "Streaming or controlled micro-batch processing with an end-to-end latency SLO below two minutes." },
    { id: "gp-07-01-04", question: "When should an incremental watermark advance?", answer: "Only after extraction, transformation, validation, target publication, and required evidence succeed." },
    { id: "gp-07-01-05", question: "What makes a pipeline rerun idempotent?", answer: "Stable keys, deterministic logic, controlled windows, idempotent writes, checkpoint discipline, and reconciliation produce the same trusted state." },
    { id: "gp-07-01-06", question: "Why should invalid schema errors not be retried automatically?", answer: "They are deterministic until the contract or source is corrected; repeated execution adds cost without changing the result." },
  ],

  independentPractice: [
    { id: "ip-07-01-01", difficulty: "Design", question: "Create an ETL design for a privacy-restricted customer source, including staging, masking, validation, and retention." },
    { id: "ip-07-01-02", difficulty: "Design", question: "Create an ELT design for reusable maintenance JSON, including raw metadata, access, transformation, tests, and replay." },
    { id: "ip-07-01-03", difficulty: "Compare", question: "Build a decision table comparing batch, micro-batch, streaming, and hybrid modes across latency, cost, complexity, auditability, and recovery." },
    { id: "ip-07-01-04", difficulty: "Engineer", question: "Design a watermark and lookback strategy for a source that can update records for seven days." },
    { id: "ip-07-01-05", difficulty: "Validate", question: "Write known-result tests for full load, incremental load, duplicate delivery, changed records, source deletion, and late arrival." },
    { id: "ip-07-01-06", difficulty: "Orchestrate", question: "Draw a DAG with two parallel sources, dimension dependencies, quality gates, quarantine, publication, and failure notification." },
    { id: "ip-07-01-07", difficulty: "Operate", question: "Define SLOs and alerts for freshness, success rate, duration, throughput, backlog, quality failures, retries, and cost." },
    { id: "ip-07-01-08", difficulty: "Fabric", question: "Select Copy job, pipeline, Dataflow Gen2, Eventstream, SQL, notebook, or Spark for six realistic workloads and defend each choice." },
  ],

  commonMistakes: [
    { mistake: "Choosing streaming because it sounds modern", correction: "Use the slowest architecture that still supports the business action and service objective." },
    { mistake: "Calling every movement process ETL", correction: "State whether and where transformation occurs; a simple copy is not automatically ETL." },
    { mistake: "Loading raw data without governance", correction: "Apply classification, access, encryption, retention, lineage, schema, quality, and cost controls at landing." },
    { mistake: "Using only a timestamp watermark", correction: "Account for equal timestamps, clock skew, late changes, deletions, and deterministic tie-breaking." },
    { mistake: "Advancing the watermark after extraction", correction: "Commit progress only after the trusted target and evidence are successfully published." },
    { mistake: "Appending every retry", correction: "Use stable keys, versions, idempotent merges, checkpoints, and reconciliation to prevent duplicate trusted results." },
    { mistake: "Retrying every error", correction: "Retry bounded transient failures; stop and escalate deterministic data, schema, credential, or authorization failures." },
    { mistake: "Deleting invalid records", correction: "Quarantine them with reason, source identity, evidence, owner, and correction workflow." },
    { mistake: "Treating pipeline success as data success", correction: "Require row, key, amount, schema, quality, privacy, and freshness gates before publication." },
    { mistake: "Mixing orchestration with undocumented business logic", correction: "Keep transformations modular, tested, versioned, and understandable outside the orchestration canvas." },
    { mistake: "Ignoring late and out-of-order events", correction: "Define event-time windows, watermarks, lateness tolerance, correction, and replay behavior." },
    { mistake: "Monitoring only failures", correction: "Monitor duration, freshness, volume, quality, backlog, retries, capacity, cost, lineage, and downstream impact." },
  ],

  discussionQuestions: [
    "When does ETL provide better control than ELT?",
    "When does raw retention create more risk than value?",
    "What business decisions genuinely require streaming latency?",
    "Should a streaming dashboard be labeled provisional until batch reconciliation?",
    "Who owns a watermark when the source system can revise history?",
    "Which delivery guarantee is required for financial, safety, or educational intervention data?",
    "How much orchestration logic should live in the pipeline versus reusable code or SQL?",
    "What evidence would let another engineer safely rerun yesterday's failed production pipeline?",
  ],

  formativeAssessment: {
    totalPoints: 100,
    passingScore: 80,
    questions: [
      { id: "check-07-01-01", points: 10, prompt: "Define ETL and ELT and give one justified use case for each.", sampleAnswer: "ETL transforms before the analytical load, useful for pre-load privacy or strict destination controls. ELT loads governed raw data first and transforms with destination compute, useful for scale, reuse, and replay." },
      { id: "check-07-01-02", points: 10, prompt: "Compare batch, micro-batch, streaming, and hybrid processing.", sampleAnswer: "Compare boundedness, latency, cost, complexity, state, recovery, reconciliation, and the business action supported." },
      { id: "check-07-01-03", points: 10, prompt: "Design an incremental extraction window using a committed watermark.", sampleAnswer: "Read positions greater than the prior committed watermark and up to a candidate watermark; commit the candidate only after validated atomic publication." },
      { id: "check-07-01-04", points: 10, prompt: "Explain how an at-least-once source can produce an effectively-once trusted table.", sampleAnswer: "Use stable event or business keys, source versions, deterministic transformations, idempotent merges, checkpoints, and reconciliation." },
      { id: "check-07-01-05", points: 10, prompt: "Design a DAG for two sources feeding one dependent Gold product.", sampleAnswer: "Parallelize independent ingestion and validation, join only after required dependencies pass, then transform, validate, publish, and record state." },
      { id: "check-07-01-06", points: 10, prompt: "Classify errors into retryable and nonretryable groups.", sampleAnswer: "Timeouts and throttling may be transient; incompatible schema, failed quality, invalid credentials, and unauthorized access require correction or escalation." },
      { id: "check-07-01-07", points: 10, prompt: "Select Fabric tools for copying, low-code transformation, complex transformation, and streaming.", sampleAnswer: "Use Copy job or pipeline Copy activity for movement, Dataflow Gen2 for Power Query transformations, notebooks or Spark for complex code workloads, and Eventstream for events in motion." },
      { id: "check-07-01-08", points: 10, prompt: "Define five quality gates before trusted publication.", sampleAnswer: "Schema, completeness, uniqueness, referential integrity, ranges, reconciliation, privacy, and freshness are valid gates; any five must have measurable pass conditions." },
      { id: "check-07-01-09", points: 10, prompt: "Specify an operational run log.", sampleAnswer: "Include pipeline and run IDs, environment, code version, trigger, start/end, status, watermarks, counts, checksums, error class, retries, cost, owner, and evidence links." },
      { id: "check-07-01-10", points: 10, prompt: "Create a recovery test proving that a partial failure and rerun do not corrupt the target.", sampleAnswer: "Inject failure after a controlled write, preserve the old committed watermark, rerun the same window, and prove unique keys, totals, versions, checksum, and downstream reconciliation match the expected result." },
    ],
  },

  researchExtension: {
    title: "Research Extension — Compare Fabric Ingestion Strategies",
    description:
      "Compare two Fabric architectures for the same manufacturing data product while holding the business decision, source behavior, quality rules, and service objectives constant.",
    researchQuestion:
      "Which architecture best balances latency, correctness, recovery, governance, developer skill, and cost for the chosen workload?",
    applicationOptions: [
      "Copy job versus pipeline Copy activity",
      "Dataflow Gen2 versus notebook or Spark transformation",
      "Scheduled batch versus Eventstream",
      "ETL privacy transformation versus governed ELT raw retention",
      "Streaming-only reporting versus stream plus batch reconciliation",
    ],
    task:
      "Define decision criteria first, prototype or specify both designs, test normal and failure scenarios, compare measurable results, and recommend one architecture with conditions that would reverse the recommendation.",
    requiredEvidence: [
      "Architecture and dependency diagrams",
      "Source, target, grain, key, schema, classification, and ownership contracts",
      "Latency, throughput, volume, duration, reliability, recovery, and cost comparison",
      "Known-result, duplicate, lateness, schema-change, partial-failure, and rerun tests",
      "Monitoring, alerting, quarantine, replay, and operational ownership plan",
      "Limitations, preview-feature status, assumptions, and decision-reversal conditions",
    ],
  },

  portfolioArtifact: {
    title: "Portfolio Artifact — Fabric Pipeline Architecture and Runbook",
    description:
      "Create an employer-ready design pack for one batch and one streaming or micro-batch data product, showing how raw data becomes trusted, monitored, and recoverable evidence.",
    requiredSections: [
      "Business decision, consumers, actions, latency, freshness, and reliability objectives",
      "Source inventory with grain, keys, changes, schema, volume, privacy, and ownership",
      "ETL, ELT, batch, streaming, and Fabric workload decision record",
      "End-to-end architecture and orchestration dependency diagrams",
      "Incremental, watermark, late-data, duplicate, deletion, and schema-drift policies",
      "Transformation specification, quality contract, quarantine, and reconciliation",
      "Idempotence, retry, timeout, checkpoint, recovery, replay, and rollback procedures",
      "Run-control table, observability dashboard, SLOs, alerts, and owner escalation",
      "Python evidence lab outputs with checksums and PASS manifest",
      "README, assumptions, limitations, security controls, cost notes, and interview narrative",
    ],
  },

  growthIndicators: [
    { title: "Pipeline Architect", description: "You translate business latency, source behavior, and target needs into a defensible data flow." },
    { title: "Reliability Engineer", description: "You design idempotence, retries, checkpoints, quality gates, recovery, and replay before production failure occurs." },
    { title: "Fabric Workload Designer", description: "You select movement, transformation, orchestration, and streaming tools by responsibility rather than popularity." },
    { title: "DataOps Communicator", description: "You document service objectives, run evidence, ownership, limitations, and operational response clearly." },
  ],

  reflection: [
    "What business action defines the required pipeline latency?",
    "Why is ETL or ELT the safer transformation order for this source?",
    "What raw data should not be retained, and why?",
    "What exact population does one pipeline run own?",
    "Can equal timestamps, deletions, or late changes bypass the watermark?",
    "What proves a rerun is idempotent?",
    "Which failure classes are safe to retry automatically?",
    "What remains durable if compute stops midway through the run?",
    "Which quality failure blocks publication?",
    "What is the workflow's measured critical path?",
    "Which monitoring signal should page an operator rather than create a low-priority ticket?",
    "Could another engineer recover the pipeline using only the runbook and evidence?",
  ],

  summary: [
    "ETL transforms before the analytical load; ELT loads governed raw data first and transforms with destination compute.",
    "Hybrid designs are common because privacy, scale, reuse, and serving needs differ across fields and stages.",
    "Batch handles bounded populations; streaming handles continuing events; micro-batch and hybrid patterns balance latency and complexity.",
    "Choose processing latency from the business action and service objective, not from fashion.",
    "Event time, ingestion time, processing time, and publication time answer different operational questions.",
    "Incremental ingestion requires stable keys, source-change semantics, deterministic windows, and a carefully committed watermark.",
    "Idempotence ensures safe reruns and converts repeated delivery into one trusted business result.",
    "Orchestration coordinates triggers, parameters, dependencies, branching, retries, validation, publication, and evidence.",
    "Retry transient failures with limits and backoff; deterministic failures require correction or escalation.",
    "Quarantine preserves rejected records and reasons; silent deletion destroys evidence.",
    "A successful activity does not prove successful data—quality, privacy, freshness, and reconciliation gates decide publication.",
    "Fabric provides Copy job and Copy activity for movement, Dataflow Gen2 for low-code transformation, notebooks and Spark for code-intensive processing, and Eventstream for data in motion.",
    "Run logs should preserve watermarks, counts, checksums, timings, versions, errors, retries, environment, and ownership.",
    "Monitor latency, throughput, backlog, freshness, quality, success, duration, retries, cost, and downstream impact.",
    "A professional pipeline is reproducible, observable, secure, testable, recoverable, and explainable.",
  ],

  previousLesson: {
    id: "data-ai-m06-l07",
    moduleNumber: 6,
    slug: "portfolio-project-executive-power-bi-decision-system",
    title: "Portfolio Project: Executive Power BI Decision System",
  },
  nextLesson: null,

  lumineryGuidance: {
    message:
      "Design the data service before selecting the tool: one decision, one source contract, one latency promise, one recovery path, and evidence for every trusted publication.",
    prompt:
      "Act as my senior Microsoft Fabric data engineer, pipeline architect, reliability engineer, data-quality lead, security reviewer, and portfolio mentor. Help me complete Module 7 Lesson 1 one verified gate at a time. Require business decision, action latency, source and target contracts, grain, keys, schema, privacy classification, ETL or ELT rationale, batch or streaming rationale, Fabric tool selection, dependency graph, incremental window, watermark commit, idempotent write, late-data and deletion rules, quality gates, quarantine, retry classification, checkpoint, recovery, run-control evidence, monitoring, service-level objectives, cost awareness, documentation, and interview narrative. Do not approve technology-first architecture, unmanaged raw landing, timestamp-only watermarks without tie-breaking, watermark advancement before publication, append-on-retry duplication, silent record deletion, unlimited retries, untested late data, success without reconciliation, streaming without event-time policy, or a pipeline without a reproducible recovery test.",
    coachingQuestions: [
      "What decision and latency promise does this pipeline serve?",
      "What are the source grain, keys, change behavior, schema owner, and privacy class?",
      "Why is ETL, ELT, or hybrid the correct transformation order?",
      "Why is batch, micro-batch, streaming, or hybrid the correct processing mode?",
      "Which Fabric workload owns movement, transformation, orchestration, and event routing?",
      "What exact source window does this run own?",
      "When does the watermark commit, and what happens on partial failure?",
      "What proves the target is idempotent after a rerun?",
      "Which validation failure blocks publication?",
      "Can another engineer diagnose and recover the pipeline from the preserved evidence?",
    ],
  },
};

export default lesson01;
