const lesson05 = {
  id: "data-ai-m07-l05",
  courseId: "data-ai-foundations",
  moduleId: "data-ai-foundations-module-07",
  moduleNumber: 7,
  lessonNumber: 5,
  slug: "delta-tables-partitioning-idempotence-and-reruns",
  title: "Delta Tables, Partitioning, Idempotence, and Reruns",
  shortTitle: "Delta Tables, Partitioning, and Safe Reruns",
  subtitle:
    "Build reliable Fabric Lakehouse tables with transactional Delta logs, deliberate data layout, deterministic merges, atomic commits, safe retries, maintenance, and evidence that repeated execution preserves the trusted result.",
  status: "available",
  duration: "6–8 hours",
  level: "Beginner to Professional",

  essentialQuestion:
    "How can a data engineer design Delta tables and incremental pipelines so updates remain consistent, queries remain efficient, failures are recoverable, and rerunning the same input never corrupts or duplicates trusted data?",
  bigIdea:
    "A reliable Delta pipeline separates physical layout from logical correctness. The transaction log protects atomic table versions; deterministic keys and merge rules protect business meaning; carefully selected clustering or partitions support access and concurrency; and idempotent reruns prove that recovery does not change an already-correct result.",

  whyThisLessonExists: {
    title: "A Successful First Run Is Not Proof of a Reliable Pipeline",
    introduction:
      "Production data workflows are retried after timeouts, capacity interruptions, late data, schema changes, and downstream failures. If the write contract is only append, the same input can be counted twice. If partitions are too granular, thousands of tiny files can make a small query expensive. If VACUUM is used carelessly, recovery evidence can disappear.",
    centralProblem:
      "A manufacturing company loads work orders and robot events into a Fabric Lakehouse. A network interruption occurs after files are prepared but before publication. The operator must rerun the batch, update corrected work orders, insert new events, avoid duplicate downtime, preserve an auditable table version, and maintain an efficient layout for Power BI and engineering queries.",
    purpose:
      "This lesson develops Delta table structure, ACID transactions, snapshots, optimistic concurrency, schema enforcement and evolution, MERGE, partitioning, liquid clustering, file skipping, compaction, V-Order, VACUUM, time travel, checkpoints, watermarks, deterministic deduplication, idempotence, atomic publication, failure recovery, and a tested Python simulation of safe incremental reruns.",
  },

  problemFirst: {
    title: "Opening Investigation: The Batch Ran Twice—Did Downtime Double?",
    scenario:
      "Batch B-204 contains six work-order records. The pipeline writes its prepared output, then fails before updating the control table. Operations reruns the same batch. One record is a correction to an existing work order, two are new, one is an older version, and two are transport duplicates. The target must contain the latest approved state exactly once.",
    questions: [
      "Which key uniquely identifies one business work order?",
      "Which version or event ordering determines the winning record?",
      "Should the target append, overwrite, update, or merge?",
      "What does the Delta transaction log commit atomically?",
      "What state must remain unchanged after an identical rerun?",
      "Which failure point can be retried safely and which needs investigation?",
      "Should the table use partitions, liquid clustering, or neither?",
      "What evidence proves row, key, measure, version, and checksum stability?",
    ],
    expectedInsight:
      "Safe recovery requires deterministic input boundaries, keys, version rules, transactional publication, and a rerun test—not confidence that a pipeline probably will not fail.",
  },

  visualModels: [
    {
      id: "delta-table-anatomy",
      type: "lifecycle",
      title: "Delta Table Anatomy — Log, Snapshot, and Parquet Files",
      description:
        "A Delta table is more than a folder of Parquet files. Readers reconstruct a valid snapshot from committed log actions and then read only the files referenced by that snapshot.",
      stages: [
        { label: "1. Business operation", detail: "Append, update, delete, merge, optimize, or schema operation begins from a known table snapshot." },
        { label: "2. Prepare files", detail: "The engine writes new Parquet files without changing the visible table state." },
        { label: "3. Validate commit", detail: "Delta checks protocol, metadata, constraints, and optimistic-concurrency conflicts." },
        { label: "4. Commit log version", detail: "A new atomic transaction-log version records added files, removed files, metadata, and operation evidence." },
        { label: "5. Expose snapshot", detail: "Readers see the complete new version or the complete prior version—never a partially committed table." },
        { label: "6. Read and audit", detail: "Spark and compatible Fabric engines resolve the snapshot, apply pruning or skipping, and retain history within the supported retention boundary." },
      ],
      feedback:
        "Uncommitted or obsolete Parquet files are not the table truth; the Delta log defines which files belong to each committed version.",
      interpretation:
        "Atomic commit separates file preparation from table visibility, making failure recovery safer than manually replacing file folders.",
    },
    {
      id: "layout-decision",
      type: "comparison",
      title: "Choose Data Layout by Evidence, Not Habit",
      description:
        "The best layout depends on table size, filters, write concurrency, cardinality, file sizes, runtime, and measured query behavior.",
      items: [
        { label: "Unpartitioned", symbol: "One logical table area", meaning: "Prefer for small or moderate tables when maintenance and file skipping provide adequate performance and concurrent writers do not need isolation." },
        { label: "Hive partitioning", symbol: "column=value/ directories", meaning: "Use mainly when low-to-moderate-cardinality values isolate concurrent writers; target substantial data per partition and avoid high-cardinality explosion." },
        { label: "Liquid clustering", symbol: "CLUSTER BY keys", meaning: "Preferred for most read-performance workloads in Fabric Runtime 2.0 because clustering can evolve and avoids rigid high-cardinality directory partitions." },
        { label: "Z-Order", symbol: "OPTIMIZE ... ZORDER BY", meaning: "Co-locates related column values during optimization for file skipping; reapply when new data requires it and compare with liquid clustering guidance." },
        { label: "V-Order", symbol: "Parquet file layout", meaning: "Optimizes Parquet layout for read-heavy Fabric consumption while preserving open Parquet compatibility; evaluate additional write cost." },
      ],
    },
    {
      id: "idempotent-rerun-flow",
      type: "lifecycle",
      title: "Idempotent Incremental Load and Rerun Flow",
      description:
        "Every retry returns through the same bounded input and deterministic transformation contract.",
      stages: [
        { label: "1. Bound input", detail: "Read a stable batch ID, event range, source version, or committed watermark window." },
        { label: "2. Stage evidence", detail: "Preserve source identity, payload, arrival, batch, checksum, and schema version before target mutation." },
        { label: "3. Deduplicate", detail: "Select one winner with explicit business key, source version, event time, and deterministic tie-breaker." },
        { label: "4. Validate", detail: "Reject or quarantine invalid schema, keys, versions, values, security classifications, and reconciliation differences." },
        { label: "5. Merge atomically", detail: "Update newer matches, insert new keys, ignore stale or unchanged matches, and commit one Delta version." },
        { label: "6. Verify", detail: "Compare expected inserts, updates, unchanged rows, totals, keys, checksums, and table-version evidence." },
        { label: "7. Commit progress", detail: "Advance watermark or batch status only after the trusted target and all mandatory gates succeed." },
      ],
      feedback:
        "If publication succeeds but the progress update fails, rerunning the same bounded input must produce zero trusted-state change.",
      interpretation:
        "Idempotence is designed through keys, versions, conditions, and atomic progress—not added later as a retry checkbox.",
    },
    {
      id: "delta-maintenance-cycle",
      type: "lifecycle",
      title: "Delta Maintenance Cycle — Measure Before You Modify",
      description:
        "Maintenance solves different physical problems and must respect active writers, history, recovery, and consumer service objectives.",
      stages: [
        { label: "1. Observe", detail: "Measure table size, file count, file-size distribution, query scans, update frequency, history use, and writer windows." },
        { label: "2. Compact", detail: "Use optimize-write, auto compaction, or OPTIMIZE when small-file evidence justifies rewriting files." },
        { label: "3. Improve layout", detail: "Apply liquid clustering, Z-Order, or V-Order only for measured access patterns and supported runtimes." },
        { label: "4. Validate", detail: "Recheck counts, keys, measures, query plans, latency, write cost, compatibility, and downstream behavior." },
        { label: "5. Retain history", detail: "Choose a retention threshold covering long readers, incident recovery, audit, replay, and rollback needs." },
        { label: "6. Vacuum safely", detail: "Remove unreferenced files older than the approved threshold during a controlled low-activity window." },
        { label: "7. Schedule and review", detail: "Automate appropriate maintenance, monitor outcomes, and revise when workload or runtime behavior changes." },
      ],
      feedback:
        "OPTIMIZE rewrites file layout; VACUUM permanently removes old unreferenced files. They solve different problems.",
      interpretation:
        "Maintenance is an evidence-based operating process, not a command run on every table every night.",
    },
    {
      id: "file-scan-chart",
      type: "barChart",
      title: "Illustrative Query File Scans by Layout",
      description:
        "Compare physical layouts with the same query and data under controlled conditions. Values are instructional, not Fabric benchmarks.",
      ariaLabel:
        "Horizontal bar graph showing 120 files scanned for fragmented layout, 36 after compaction, 18 with useful pruning, and 8 with measured clustering and skipping.",
      unit: "files",
      max: 120,
      items: [
        { label: "Fragmented small files", value: 120, note: "Many tiny files increase metadata and scan overhead." },
        { label: "After compaction", value: 36, note: "Fewer appropriately sized files reduce file-open work." },
        { label: "Useful partition pruning", value: 18, note: "A selective filter skips irrelevant partition directories." },
        { label: "Measured clustering + skipping", value: 8, note: "Related values are colocated so file statistics exclude more files." },
      ],
      interpretation:
        "A layout is valuable only when representative queries scan less data without creating unacceptable write, maintenance, or concurrency cost.",
    },
  ],

  representationModel: {
    title: "Idempotent Reruns — Table and Line Graph",
    description:
      "The same bounded batch is executed three times. After the first successful merge, repeated executions preserve the six-row trusted state and identical checksum.",
    equation: "idempotent rerun delta = trusted state after rerun − trusted state before rerun = 0",
    columns: [
      { key: "run", label: "Run Number" },
      { key: "rows", label: "Trusted Rows" },
    ],
    rows: [
      { run: 1, rows: 6 },
      { run: 2, rows: 6 },
      { run: 3, rows: 6 },
    ],
    xKey: "run",
    yKey: "rows",
    xLabel: "Repeated execution of the same batch",
    yLabel: "Trusted target rows",
    highlightPoint: { x: 3, y: 6 },
  },

  learningObjectives: [
    "Explain a Delta table as Parquet data files governed by a transaction log and protocol.",
    "Describe ACID transactions, snapshots, atomic commits, and optimistic concurrency control.",
    "Distinguish table truth from physical files that are uncommitted, removed, compacted, or obsolete.",
    "Use schema enforcement, controlled evolution, constraints, and downstream impact review.",
    "Choose append, overwrite, update, delete, and MERGE from the business change contract.",
    "Design deterministic business keys, version ordering, tie-breakers, and deduplication.",
    "Implement an idempotent incremental load whose identical rerun produces zero trusted-state delta.",
    "Commit watermarks and batch status only after trusted atomic publication.",
    "Differentiate retry, restart, replay, backfill, correction, and rollback.",
    "Choose unpartitioned layout, Hive partitioning, liquid clustering, Z-Order, or V-Order from evidence.",
    "Explain why current Fabric guidance uses partitioning primarily for concurrent-write isolation.",
    "Detect high-cardinality partitions, partition skew, small files, and over-partitioning.",
    "Use file compaction, OPTIMIZE, V-Order, and VACUUM for their distinct purposes.",
    "Protect time travel, long-running readers, audit, and recovery through an approved retention policy.",
    "Manage concurrent writers with disjoint write regions, append-and-merge, scheduling, and bounded retries.",
    "Validate counts, keys, measures, versions, checksums, table history, layout, performance, and cost.",
    "Build and test a Python simulation of an atomic, idempotent Delta-style merge and rerun.",
    "Create a portfolio-ready table contract, load design, maintenance plan, test pack, runbook, and interview narrative.",
  ],

  prerequisiteKnowledge: [
    "Module 3: primary keys, joins, constraints, transactions, facts, dimensions, and grain",
    "Module 4: incremental ingestion, schema, validation, deduplication, quality, and reconciliation",
    "Module 5: Python, pandas, functions, files, exceptions, testing, and checksums",
    "Module 6: Power BI semantic models, Direct Lake awareness, validation, and performance",
    "Module 7 Lessons 1–4: ETL/ELT, OneLake, Lakehouse, medallion layers, pipelines, notebooks, and Spark",
  ],

  vocabulary: [
    { term: "Delta Lake", definition: "An open table format that adds transactions, schema controls, history, and scalable metadata to Parquet data." },
    { term: "Delta table", definition: "A logical table whose committed state is defined by Delta log actions referencing Parquet files and table metadata." },
    { term: "Parquet", definition: "An open columnar file format used for efficient analytical storage and scans." },
    { term: "Transaction log", definition: "The ordered record of committed Delta actions, table metadata, protocol changes, added files, and removed files." },
    { term: "Commit", definition: "The atomic publication of one valid new table version after conflict and contract checks pass." },
    { term: "Table version", definition: "A monotonically advancing committed state recorded in the Delta transaction history." },
    { term: "Snapshot", definition: "The complete logical table state resolved for one committed version." },
    { term: "ACID", definition: "Atomicity, consistency, isolation, and durability guarantees applied to table transactions." },
    { term: "Atomicity", definition: "A transaction becomes fully visible or remains invisible; readers do not observe partial results." },
    { term: "Consistency", definition: "A successful transaction preserves declared table protocol, schema, constraints, and invariants." },
    { term: "Isolation", definition: "Concurrent operations behave according to the table's transaction rules rather than corrupting each other's state." },
    { term: "Durability", definition: "A committed table version persists as recorded storage and log state." },
    { term: "Optimistic concurrency control", definition: "Writers prepare changes from a snapshot, then validate that no conflicting commit occurred before publication." },
    { term: "Schema enforcement", definition: "Rejecting writes that do not satisfy the target table's expected schema and protocol." },
    { term: "Schema evolution", definition: "A controlled and compatible change to columns or types with testing and downstream communication." },
    { term: "MERGE", definition: "A transactional operation that conditionally updates, inserts, or deletes target rows matched to a source." },
    { term: "Upsert", definition: "Updating an existing business key or inserting it when it does not yet exist." },
    { term: "Business key", definition: "The domain identifier used to recognize the same real-world entity or event across runs." },
    { term: "Version column", definition: "A source sequence, effective timestamp, or revision used to determine which change is newer." },
    { term: "Tie-breaker", definition: "A deterministic final ordering value used when primary version fields are equal." },
    { term: "Idempotence", definition: "The property that repeating the same valid input and logic leaves the trusted target in the same state." },
    { term: "Rerun", definition: "Repeating a workflow execution, commonly after failure or uncertainty, using the same or a declared input boundary." },
    { term: "Retry", definition: "Repeating a failed operation under bounded policy, normally for a classified transient error." },
    { term: "Replay", definition: "Reprocessing preserved historical source evidence through a declared logic version." },
    { term: "Backfill", definition: "Processing an earlier time range or missing population that was not previously completed." },
    { term: "Rollback", definition: "Restoring or republishing a previously approved state under controlled recovery procedures." },
    { term: "Watermark", definition: "A committed source-progress boundary used to determine the next incremental input range." },
    { term: "Checkpoint", definition: "Durable processing state used to resume a batch or streaming computation safely." },
    { term: "Batch ID", definition: "A stable identifier connecting source evidence, processing, validation, target version, and operational status." },
    { term: "Partition", definition: "A physical directory subdivision created from partition-column values in Hive-style partitioning." },
    { term: "Partition pruning", definition: "Skipping complete partition directories when filters constrain partition columns." },
    { term: "Cardinality", definition: "The number of distinct values in a column or key." },
    { term: "Partition skew", definition: "Uneven data distribution that produces disproportionately large or small partitions." },
    { term: "Liquid clustering", definition: "A flexible Delta data-layout strategy that clusters records by selected keys without rigid Hive partition directories." },
    { term: "File skipping", definition: "Avoiding files whose stored statistics prove they cannot contain rows matching the query predicates." },
    { term: "Z-Order", definition: "A multidimensional data-layout technique that colocates related values to improve file skipping for selected columns." },
    { term: "V-Order", definition: "A Fabric write-time Parquet layout optimization intended to improve read efficiency across Fabric engines." },
    { term: "Small-file problem", definition: "Excessive tiny files that increase metadata, scheduling, file-open, and maintenance overhead." },
    { term: "Compaction", definition: "Rewriting many smaller files into fewer appropriately sized files without changing logical table rows." },
    { term: "OPTIMIZE", definition: "A Delta maintenance operation that compacts files and can apply supported layout optimizations." },
    { term: "VACUUM", definition: "A maintenance command that permanently removes unreferenced files older than an approved retention threshold." },
    { term: "Time travel", definition: "Reading a prior Delta table version or timestamp while its required log and data files remain available." },
    { term: "Retention threshold", definition: "The minimum age obsolete files must reach before they are eligible for permanent removal." },
    { term: "Write amplification", definition: "The ratio of physical bytes rewritten to the logical bytes changed by an operation." },
    { term: "Change data feed", definition: "A Delta feature that records row-level inserts, updates, and deletes for incremental downstream processing when enabled." },
  ],

  formulas: [
    { id: "idempotent-delta", name: "Idempotent rerun delta", formula: "Δtrusted = state(after identical rerun) − state(before rerun) = 0", meaning: "Expresses that repeated execution does not change correct trusted results.", requirement: "Compare rows, keys, measures, versions, and checksums—not row count alone." },
    { id: "partition-average", name: "Average partition size", formula: "average partition size = total table bytes ÷ distinct partition values", meaning: "Estimates whether a proposed partition column creates useful substantial regions.", requirement: "Also inspect minimum, maximum, skew, growth, and write patterns; an average can hide tiny partitions." },
    { id: "small-file-ratio", name: "Small-file ratio", formula: "small-file ratio = files below approved size threshold ÷ total active files × 100%", meaning: "Measures physical fragmentation under a declared threshold.", requirement: "Choose the threshold from engine, workload, and measured scan behavior rather than a universal number." },
    { id: "pruning-rate", name: "Pruning or skipping rate", formula: "skip rate = (candidate files − scanned files) ÷ candidate files × 100%", meaning: "Shows how much physical data the engine avoids for a representative query.", requirement: "Record the query predicate, snapshot, cache state, and layout version." },
    { id: "merge-change-rate", name: "Merge change rate", formula: "change rate = (inserted + updated + deleted) ÷ staged valid rows × 100%", meaning: "Shows how much of the staged batch changes target state.", requirement: "Report stale, duplicate, unchanged, and quarantined rows separately." },
    { id: "duplicate-rate", name: "Batch duplicate rate", formula: "duplicate rate = duplicate staged rows ÷ staged rows × 100%", meaning: "Measures repeated source representations under the declared key and version rule.", requirement: "Distinguish exact duplicates, stale versions, corrections, and legitimate repeat events." },
    { id: "write-amplification", name: "Write amplification", formula: "write amplification = physical bytes written ÷ logical bytes changed", meaning: "Quantifies the storage work required to apply logical changes.", requirement: "Compare merge, compaction, clustering, and file-size strategies using comparable runs." },
    { id: "commit-success", name: "Commit success rate", formula: "commit success rate = successful commits ÷ attempted eligible transactions × 100%", meaning: "Measures transactional reliability for a defined operation class.", requirement: "Separate transient concurrency conflicts, data-contract failures, capacity faults, and code defects." },
    { id: "freshness-after-rerun", name: "Recovery freshness", formula: "recovery lag = trusted publication time − latest included source event time", meaning: "Measures business delay after failure and rerun.", requirement: "Do not improve freshness by bypassing required quality, reconciliation, or security gates." },
    { id: "retention-horizon", name: "Safe retention horizon", formula: "retention ≥ max(longest reader, recovery window, audit need, replay need, policy minimum)", meaning: "Protects required history before obsolete files become eligible for deletion.", requirement: "VACUUM is irreversible for removed files; approve and document the retention decision." },
  ],

  workedExamples: [
    { id: "example-07-05-01", title: "Explain a Delta commit", problem: "A merge prepares three new Parquet files and marks two old files for removal.", solutionSteps: ["Read the starting snapshot.", "Prepare new data files privately.", "Validate schema, protocol, and concurrency.", "Atomically commit add and remove actions as one new log version."], answer: "Readers see either the complete old snapshot or the complete new snapshot, never an intermediate mixture.", interpretation: "The transaction log—not file creation time—defines visible table truth." },
    { id: "example-07-05-02", title: "Choose MERGE instead of append", problem: "A daily batch contains new work orders and corrections to existing work_order_id values.", solutionSteps: ["Declare work_order_id as business key.", "Use source_version to identify newer corrections.", "Update only when the source version is newer.", "Insert only unmatched valid keys."], answer: "Use a deterministic MERGE; append would duplicate corrected business entities.", interpretation: "The write mode must match how the business record changes." },
    { id: "example-07-05-03", title: "Prove an identical rerun", problem: "The same staged batch is merged twice after the first run's control-table update failed.", solutionSteps: ["Use the same batch boundary and staged evidence.", "Reapply identical key and version conditions.", "Calculate inserted, updated, and deleted counts.", "Compare target checksum and approved measures before and after."], answer: "The rerun passes when all trusted-state deltas are zero and the batch status can be reconciled to the existing commit.", interpretation: "A rerun can execute successfully while making no data changes—that is the desired outcome." },
    { id: "example-07-05-04", title: "Reject a stale version", problem: "Target WO-301 is version 4, but the replay includes version 3.", solutionSteps: ["Match on work_order_id.", "Compare version 3 with target version 4.", "Classify the source as stale.", "Preserve evidence but do not update the target."], answer: "WO-301 remains at version 4.", interpretation: "Last arrival is not necessarily latest business state; ordering rules must be explicit." },
    { id: "example-07-05-05", title: "Choose a modern layout", problem: "A read-heavy telemetry table is filtered by asset and event time, but there are thousands of asset IDs and no concurrent update requirement by asset.", solutionSteps: ["Reject asset Hive partitioning because cardinality is high.", "Measure current file skipping and sizes.", "Evaluate liquid clustering on selective access keys.", "Benchmark reads, writes, maintenance, and compatibility."], answer: "Begin with liquid clustering evaluation rather than thousands of asset partitions.", interpretation: "Current Fabric layout guidance separates read optimization from concurrent-writer isolation." },
    { id: "example-07-05-06", title: "Use partitions for concurrent writers", problem: "Four regional pipelines merge independently into one table and frequently conflict.", solutionSteps: ["Verify region has low stable cardinality.", "Confirm every writer naturally targets one disjoint region.", "Include region in merge predicates.", "Measure partition sizes and conflict reduction."], answer: "Region partitioning can isolate writer files if each partition remains substantial and operations stay disjoint.", interpretation: "Partitioning is strongest when it aligns with write concurrency, not merely a familiar query filter." },
    { id: "example-07-05-07", title: "Separate OPTIMIZE from VACUUM", problem: "A table has 900 tiny active files and many old unreferenced files.", solutionSteps: ["Use OPTIMIZE or approved compaction to rewrite active files.", "Validate logical equality and query behavior.", "Confirm recovery and history retention requirements.", "Run VACUUM only on eligible unreferenced files older than the threshold."], answer: "Compaction improves active file layout; VACUUM reclaims obsolete storage.", interpretation: "VACUUM does not compact the current table and compaction does not automatically erase historical files." },
    { id: "example-07-05-08", title: "Recover from a concurrency conflict", problem: "Two jobs attempt overlapping merges against the same target snapshot.", solutionSteps: ["Allow Delta to reject the conflicting transaction rather than corrupt data.", "Classify whether the conflict is transient or a design problem.", "Reread the latest snapshot and restage deterministically.", "Retry with bounded backoff or serialize through append-and-merge."], answer: "Retry only after refreshing state and confirming idempotent conditions; redesign repeated logical overlap.", interpretation: "Conflict exceptions are safety signals, not reasons to disable validation." },
  ],

  interactiveExploration: {
    title: "Delta Reliability Studio: Design, Break, Rerun, and Prove",
    purpose:
      "Create a manufacturing Delta table contract and demonstrate that its layout, merge, failure, maintenance, and recovery behaviors are measurable.",
    instructions: [
      "Declare table grain, business key, version field, event time, schema, invariants, consumers, and service objectives.",
      "Create a staged batch containing inserts, corrections, unchanged matches, duplicates, stale versions, and invalid rows.",
      "Write deterministic winner, validation, quarantine, and MERGE conditions.",
      "Inject a failure before commit and verify the visible target remains unchanged.",
      "Commit successfully, rerun the same batch, and prove zero trusted-state delta.",
      "Compare unpartitioned, partitioned, and clustered layout candidates using current Fabric guidance and representative filters.",
      "Measure active file count, size distribution, scanned files, write duration, conflict behavior, maintenance cost, and query latency.",
      "Create an OPTIMIZE and VACUUM schedule with explicit history, audit, long-reader, and recovery boundaries.",
      "Document monitoring, alerts, ownership, rollback, replay, backfill, and incident evidence.",
    ],
    investigationQuestions: [
      "What exact event or entity does one row represent?",
      "Can two source rows claim the same key and version?",
      "Which rule selects a winner without depending on arrival order?",
      "What happens if publication succeeds but the watermark write fails?",
      "Which filter actually eliminates physical files in measured queries?",
      "Does the proposed partition column isolate writers or create tiny directories?",
      "How long must prior versions remain recoverable?",
      "Which proof would convince another engineer that the third run is safe?",
    ],
    expectedDiscovery:
      "Reliable incremental engineering combines transactional storage with explicit business semantics; neither Delta nor MERGE can invent the correct key, version, retention, or rerun contract for you.",
  },

  realWorldApplications: [
    { field: "Manufacturing and Robotics", application: "Merge corrected work orders and sensor summaries exactly once, isolate approved concurrent writers, and preserve table versions for failure investigation." },
    { field: "Education", application: "Upsert enrollment and intervention records by stable keys while preserving late corrections, privacy controls, and reproducible reporting states." },
    { field: "Retail", application: "Merge orders, inventory, and product changes incrementally without doubling sales after retries or producing high-cardinality store-item partitions." },
    { field: "Healthcare", application: "Apply controlled corrections to encounter and device data with transactional history, strict schema review, and retention aligned to policy." },
    { field: "Finance", application: "Maintain auditable account and transaction states through deterministic versions, reconciliation, atomic commits, and carefully governed history cleanup." },
    { field: "AI Systems", application: "Version feature, label, evaluation, and monitoring tables so training and model decisions can be reproduced from committed snapshots." },
  ],

  aiConnection: {
    title: "AI Can Suggest Layout and Merge Logic, but It Cannot Define Table Truth",
    explanation:
      "AI can draft Spark SQL, PySpark MERGE conditions, maintenance jobs, diagnostics, and test cases. It cannot independently decide which record is authoritative, how long evidence must be retained, whether two identities match, or whether a destructive cleanup is acceptable.",
    uses: [
      "Draft candidate key, version, deduplication, and MERGE rules from an approved contract.",
      "Summarize Delta history, file-size distributions, query plans, conflicts, and maintenance outcomes.",
      "Generate failure-injection, duplicate, stale-version, schema, concurrency, and rerun test cases.",
      "Compare layout alternatives using measured workload evidence and current official guidance.",
      "Draft operator runbooks and incident narratives from verified logs, versions, checksums, and owner decisions.",
    ],
    caution:
      "Never allow AI to run VACUUM with shortened retention, overwrite a production schema, invent merge keys, resolve ambiguous identities, delete history, retry non-idempotent side effects, or promote data without deterministic tests and accountable approval.",
    reflectionQuestion:
      "Which Delta operations can be safely automated from explicit policy, and which require data-owner, security, compliance, finance, or platform approval?",
  },

  pythonLab: {
    title: "Python Lab — Simulate an Atomic Delta Merge and Prove Safe Reruns",
    description:
      "Use pandas and JSON to model deterministic staging, merge decisions, atomic commit versions, partition evidence, a failure before publication, checksums, and two identical reruns without requiring a live Fabric workspace.",
    code: `from pathlib import Path
import hashlib
import json
import pandas as pd

output_dir = Path("delta_rerun_lesson_output")
output_dir.mkdir(exist_ok=True)

target_v0 = pd.DataFrame([
    {"work_order_id": "WO-201", "plant": "A", "event_date": "2026-10-06", "source_version": 1, "downtime_min": 10},
    {"work_order_id": "WO-202", "plant": "A", "event_date": "2026-10-06", "source_version": 1, "downtime_min": 8},
    {"work_order_id": "WO-203", "plant": "B", "event_date": "2026-10-07", "source_version": 2, "downtime_min": 14},
    {"work_order_id": "WO-204", "plant": "C", "event_date": "2026-10-07", "source_version": 1, "downtime_min": 6},
])

staged = pd.DataFrame([
    {"source_row_id": "R-01", "work_order_id": "WO-201", "plant": "A", "event_date": "2026-10-06", "source_version": 2, "downtime_min": 12, "source_sequence": 10},
    {"source_row_id": "R-02", "work_order_id": "WO-201", "plant": "A", "event_date": "2026-10-06", "source_version": 2, "downtime_min": 12, "source_sequence": 10},
    {"source_row_id": "R-03", "work_order_id": "WO-203", "plant": "B", "event_date": "2026-10-07", "source_version": 1, "downtime_min": 13, "source_sequence": 8},
    {"source_row_id": "R-04", "work_order_id": "WO-205", "plant": "B", "event_date": "2026-10-08", "source_version": 1, "downtime_min": 11, "source_sequence": 11},
    {"source_row_id": "R-05", "work_order_id": "WO-206", "plant": "C", "event_date": "2026-10-08", "source_version": 1, "downtime_min": 9, "source_sequence": 12},
    {"source_row_id": "R-06", "work_order_id": "WO-206", "plant": "C", "event_date": "2026-10-08", "source_version": 1, "downtime_min": 9, "source_sequence": 12},
])

business_columns = ["work_order_id", "plant", "event_date", "source_version", "downtime_min"]

def stable_checksum(frame):
    stable = frame[business_columns].sort_values("work_order_id").to_csv(index=False)
    return hashlib.sha256(stable.encode("utf-8")).hexdigest()

def prepare_batch(frame):
    ordered = frame.sort_values(
        ["work_order_id", "source_version", "source_sequence", "source_row_id"],
        ascending=[True, False, False, False],
    )
    winners = ordered.drop_duplicates("work_order_id", keep="first").copy()
    duplicates = ordered.loc[~ordered.index.isin(winners.index)].copy()
    return winners, duplicates

def merge_latest(target, source):
    current = target.set_index("work_order_id").copy()
    inserted = updated = stale = unchanged = 0
    decisions = []

    for row in source.sort_values("work_order_id").itertuples(index=False):
        key = row.work_order_id
        incoming = {column: getattr(row, column) for column in business_columns if column != "work_order_id"}

        if key not in current.index:
            current.loc[key] = incoming
            action = "INSERT"
            inserted += 1
        else:
            target_version = int(current.loc[key, "source_version"])
            if row.source_version > target_version:
                for column, value in incoming.items():
                    current.loc[key, column] = value
                action = "UPDATE_NEWER_VERSION"
                updated += 1
            elif row.source_version < target_version:
                action = "IGNORE_STALE_VERSION"
                stale += 1
            else:
                same_payload = all(current.loc[key, column] == value for column, value in incoming.items())
                if not same_payload:
                    raise ValueError(f"Conflicting payload for {key} version {row.source_version}")
                action = "NO_CHANGE"
                unchanged += 1

        decisions.append({"work_order_id": key, "action": action})

    result = current.reset_index()[business_columns].sort_values("work_order_id").reset_index(drop=True)
    metrics = {"inserted": inserted, "updated": updated, "stale": stale, "unchanged": unchanged}
    return result, pd.DataFrame(decisions), metrics

winners, duplicates = prepare_batch(staged)
assert len(winners) == 4
assert len(duplicates) == 2

# Failure before atomic publication: prepared result exists, visible target does not change.
prepared_target, first_decisions, first_metrics = merge_latest(target_v0, winners)
visible_after_simulated_failure = target_v0.copy()
assert stable_checksum(visible_after_simulated_failure) == stable_checksum(target_v0)

# Commit version 1 atomically.
target_v1 = prepared_target.copy()
history = [{
    "table_version": 1,
    "batch_id": "B-204",
    "operation": "MERGE",
    "input_rows": int(len(staged)),
    "winner_rows": int(len(winners)),
    "duplicate_rows": int(len(duplicates)),
    **first_metrics,
    "target_rows": int(len(target_v1)),
    "target_checksum": stable_checksum(target_v1),
}]

assert first_metrics == {"inserted": 2, "updated": 1, "stale": 1, "unchanged": 0}
assert len(target_v1) == 6
assert target_v1["work_order_id"].is_unique
assert int(target_v1["downtime_min"].sum()) == 60

# Identical rerun: all winners are stale or unchanged; trusted state must not change.
target_v2, rerun_decisions, rerun_metrics = merge_latest(target_v1, winners)
assert rerun_metrics == {"inserted": 0, "updated": 0, "stale": 1, "unchanged": 3}
assert stable_checksum(target_v2) == stable_checksum(target_v1)
pd.testing.assert_frame_equal(target_v2, target_v1)

# Third identical run proves stability again.
target_v3, third_decisions, third_metrics = merge_latest(target_v2, winners)
assert third_metrics == rerun_metrics
assert stable_checksum(target_v3) == stable_checksum(target_v1)

partition_profile = (
    target_v1.groupby("event_date", as_index=False)
    .agg(rows=("work_order_id", "count"), downtime_min=("downtime_min", "sum"))
    .sort_values("event_date")
)
assert int(partition_profile["rows"].sum()) == len(target_v1)

target_path = output_dir / "trusted_work_orders.csv"
staged_path = output_dir / "staged_batch.csv"
duplicates_path = output_dir / "duplicate_rows.csv"
decisions_path = output_dir / "first_merge_decisions.csv"
rerun_path = output_dir / "rerun_decisions.csv"
partition_path = output_dir / "date_layout_profile.csv"
history_path = output_dir / "transaction_history.json"
manifest_path = output_dir / "delta_rerun_manifest.json"

target_v1.to_csv(target_path, index=False)
staged.to_csv(staged_path, index=False)
duplicates.to_csv(duplicates_path, index=False)
first_decisions.to_csv(decisions_path, index=False)
rerun_decisions.to_csv(rerun_path, index=False)
partition_profile.to_csv(partition_path, index=False)
history_path.write_text(json.dumps(history, indent=2), encoding="utf-8")

manifest = {
    "status": "PASS",
    "table": "manufacturing_work_orders",
    "batch_id": "B-204",
    "committed_version": 1,
    "source_rows": int(len(staged)),
    "winner_rows": int(len(winners)),
    "duplicate_rows": int(len(duplicates)),
    "target_rows": int(len(target_v1)),
    "target_downtime_min": int(target_v1["downtime_min"].sum()),
    "first_merge": first_metrics,
    "identical_rerun": rerun_metrics,
    "failure_before_commit_preserved_target": True,
    "idempotent_rerun_passed": stable_checksum(target_v3) == stable_checksum(target_v1),
    "target_sha256": stable_checksum(target_v1),
    "artifacts": [
        target_path.name, staged_path.name, duplicates_path.name,
        decisions_path.name, rerun_path.name, partition_path.name, history_path.name,
    ],
}
manifest_path.write_text(json.dumps(manifest, indent=2), encoding="utf-8")

assert manifest["status"] == "PASS"
assert manifest["failure_before_commit_preserved_target"] is True
assert manifest["idempotent_rerun_passed"] is True

print("First merge:", first_metrics)
print("Identical rerun:", rerun_metrics)
print("Trusted rows:", len(target_v1))
print("Trusted downtime minutes:", int(target_v1["downtime_min"].sum()))
print("Checksum stable across three runs:", manifest["idempotent_rerun_passed"])
print("Manifest status:", manifest["status"])
print("Artifacts:", sorted(path.name for path in output_dir.iterdir()))`,
    questions: [
      "Why are work_order_id and source_version both needed?",
      "How does source_row_id make exact duplicate selection deterministic?",
      "Why is WO-203 ignored even though it appears in the current batch?",
      "What proves that failure before commit did not change the visible target?",
      "Why does the first merge insert two, update one, and ignore one stale record?",
      "Why does the identical rerun report three unchanged and one stale record?",
      "Why must checksum, keys, versions, and measures be tested in addition to row count?",
      "Why is the tiny event_date profile educational evidence rather than a recommendation to partition this small table?",
      "How would you replace the pandas merge with a Fabric Spark Delta MERGE?",
      "Where should the committed watermark and table version be recorded in a production design?",
    ],
  },

  guidedPractice: [
    { id: "gp-07-05-01", prompt: "What defines the visible state of a Delta table?", hint: "Think beyond the Parquet folder.", answer: "The committed Delta transaction log and referenced active files define the snapshot." },
    { id: "gp-07-05-02", prompt: "What must an identical rerun change in a correct target?", hint: "Use the idempotence equation.", answer: "Nothing: row, key, measure, version, and checksum deltas should be zero." },
    { id: "gp-07-05-03", prompt: "When is Hive partitioning most justified in current Fabric guidance?", hint: "Focus on writers, not only readers.", answer: "When low-to-moderate-cardinality partitions naturally isolate concurrent writers into disjoint file regions." },
    { id: "gp-07-05-04", prompt: "What is the difference between OPTIMIZE and VACUUM?", hint: "Active files versus obsolete files.", answer: "OPTIMIZE rewrites active layout, while VACUUM permanently removes eligible unreferenced old files." },
    { id: "gp-07-05-05", prompt: "Why should a watermark update occur after target validation?", hint: "Imagine target publication fails.", answer: "Advancing early can skip uncommitted source data; progress should commit only after trusted publication succeeds." },
    { id: "gp-07-05-06", prompt: "What happens when concurrent Delta writes truly conflict?", hint: "Safety before convenience.", answer: "The conflicting transaction fails rather than partially corrupting the table; the application can refresh state and retry safely if its logic is idempotent." },
  ],

  independentPractice: [
    { id: "ip-07-05-01", type: "Contract", prompt: "Write a Delta contract for robot maintenance work orders, including grain, key, version, schema, constraints, consumers, and retention." },
    { id: "ip-07-05-02", type: "Merge", prompt: "Design MERGE conditions for inserts, newer corrections, identical matches, stale versions, deletes, and conflicts." },
    { id: "ip-07-05-03", type: "Rerun", prompt: "Create a failure matrix for errors before staging, before commit, after commit, before watermark, and after notification." },
    { id: "ip-07-05-04", type: "Layout", prompt: "Compare unpartitioned, region-partitioned, date-partitioned, and liquid-clustered designs using cardinality, writer isolation, file size, and query evidence." },
    { id: "ip-07-05-05", type: "Maintenance", prompt: "Design OPTIMIZE and VACUUM policies with workload windows, retention approvals, validation, history use, and cost evidence." },
    { id: "ip-07-05-06", type: "Concurrency", prompt: "Design append-and-merge staging for eight parallel ingestion jobs targeting one trusted table." },
    { id: "ip-07-05-07", type: "Test", prompt: "Create known-result tests for duplicate keys, equal-version conflicts, schema drift, stale updates, identical reruns, and rollback." },
    { id: "ip-07-05-08", type: "Portfolio", prompt: "Produce an architecture diagram, table contract, PySpark merge, history evidence, maintenance plan, runbook, and interview explanation." },
  ],

  commonMistakes: [
    { mistake: "Treating a Delta table as only Parquet files", correction: "Use the transaction log and committed snapshot as table truth; never infer state from file presence alone." },
    { mistake: "Appending corrections and retries", correction: "Use stable keys, source versions, deterministic deduplication, and MERGE conditions that distinguish insert, update, stale, conflict, and no-change outcomes." },
    { mistake: "Calling a pipeline idempotent because it did not error", correction: "Rerun identical input and prove zero row, key, measure, version, and checksum delta." },
    { mistake: "Using ingestion time as the only winner rule", correction: "Prefer authoritative source version or event ordering and add a deterministic tie-breaker." },
    { mistake: "Advancing the watermark before publication", correction: "Commit progress after target transaction and required validation succeed." },
    { mistake: "Partitioning every table by date", correction: "Use current runtime guidance, cardinality, partition size, writer isolation, and measured access patterns; evaluate liquid clustering for read optimization." },
    { mistake: "Partitioning by a high-cardinality ID", correction: "Avoid thousands or millions of tiny directories; consider liquid clustering or file skipping on selective keys." },
    { mistake: "Confusing Spark partitions with Hive table partitions", correction: "Spark execution partitions distribute tasks; Hive-style table partitions create persistent physical directories." },
    { mistake: "Running OPTIMIZE as an unmeasured ritual", correction: "Measure file fragmentation and representative scans, then validate benefit against rewrite cost." },
    { mistake: "Using VACUUM to improve query speed", correction: "VACUUM primarily removes eligible obsolete files; use compaction and data layout for query-performance problems." },
    { mistake: "Shortening VACUUM retention to save space quickly", correction: "Protect long readers, time travel, incident recovery, audit, replay, and policy requirements before permanent deletion." },
    { mistake: "Retrying concurrent writes blindly", correction: "Refresh the snapshot, classify the conflict, use bounded backoff, and redesign chronic overlapping writers." },
    { mistake: "Enabling schema evolution globally", correction: "Approve additive or widening changes explicitly and test every downstream consumer." },
    { mistake: "Validating only row counts", correction: "Also test keys, versions, values, measures, schema, constraints, partitions, files, checksums, and history." },
  ],

  discussionQuestions: [
    "When is append-only safer than MERGE, and when is it insufficient?",
    "Who owns the source-version and delete semantics for a shared table?",
    "Should a correction create a new business event or replace entity state?",
    "When should concurrent writers be partition-isolated versus serialized through staging?",
    "Which workloads still justify Hive partitioning under current Fabric guidance?",
    "How much time-travel history is enough for your organization?",
    "Should an identical rerun create a new Delta version if logical data is unchanged?",
    "Which maintenance decisions belong to platform teams and which to data-product owners?",
  ],

  formativeAssessment: {
    totalPoints: 100,
    passingScore: 80,
    questions: [
      { id: "check-07-05-01", points: 10, prompt: "Explain how the Delta log and Parquet files form one table.", sampleAnswer: "The log records committed metadata and add/remove actions; a snapshot references the active Parquet files for one version." },
      { id: "check-07-05-02", points: 10, prompt: "Design a deterministic work-order MERGE.", sampleAnswer: "Match by business key, update only on newer authoritative version, insert unmatched valid keys, ignore stale and identical matches, and fail equal-version conflicts." },
      { id: "check-07-05-03", points: 10, prompt: "Define and test idempotence.", sampleAnswer: "Identical input and logic must produce the same trusted state; compare rows, keys, versions, measures, and checksum before and after rerun." },
      { id: "check-07-05-04", points: 10, prompt: "Explain why a watermark must not advance early.", sampleAnswer: "If publication fails after progress advances, the next run can skip data that never reached the trusted target." },
      { id: "check-07-05-05", points: 10, prompt: "Choose between partitioning and liquid clustering.", sampleAnswer: "Use partitioning mainly to isolate low-cardinality concurrent writers; evaluate liquid clustering for flexible read performance in Runtime 2.0 workloads." },
      { id: "check-07-05-06", points: 10, prompt: "Diagnose high-cardinality over-partitioning.", sampleAnswer: "Look for many tiny directories and files, metadata overhead, skew, poor scan behavior, slow writes, and frequent maintenance." },
      { id: "check-07-05-07", points: 10, prompt: "Differentiate OPTIMIZE, V-Order, and VACUUM.", sampleAnswer: "OPTIMIZE compacts active files, V-Order changes Parquet layout for reads, and VACUUM deletes eligible unreferenced old files." },
      { id: "check-07-05-08", points: 10, prompt: "Design concurrency recovery for overlapping MERGE jobs.", sampleAnswer: "Let OCC reject conflicts, refresh the snapshot, retry idempotently with limits, and use append staging plus one serialized merge for chronic overlap." },
      { id: "check-07-05-09", points: 10, prompt: "Create a safe retention decision.", sampleAnswer: "Set retention at least as long as the maximum long reader, recovery, audit, replay, and policy requirement, then approve before VACUUM." },
      { id: "check-07-05-10", points: 10, prompt: "Specify a complete rerun evidence pack.", sampleAnswer: "Include input boundary, batch, versions, code, schema, decisions, counts, keys, measures, checksums, history, quality, failures, retries, watermark, and publication status." },
    ],
  },

  researchExtension: {
    title: "Research Extension — Partitioning vs Liquid Clustering in Fabric Runtime 2.0",
    description:
      "Test the same growing manufacturing table under unpartitioned, Hive-partitioned, and liquid-clustered layouts using representative reads and controlled concurrent writes.",
    researchQuestion:
      "Which layout best balances read pruning, writer conflicts, file health, maintenance, flexibility, cost, and compatibility for the declared workload?",
    applicationOptions: ["Robot telemetry", "Maintenance work orders", "Retail transactions", "Learning events", "AI feature history"],
    task:
      "Use current official documentation, define hypotheses and reversal conditions, build equivalent data, execute repeatable tests, preserve plans and metrics, and recommend one layout with limitations.",
    requiredEvidence: [
      "Table contract, workload profile, data volume, growth, cardinality, filters, and writer topology",
      "Equivalent unpartitioned, partitioned, and clustered definitions",
      "Read plans, scanned files or bytes, latency, throughput, and cache controls",
      "Concurrent append, update, delete, and merge conflict results",
      "File counts, file-size distributions, skew, compaction, and maintenance evidence",
      "Write amplification, capacity, storage, operations, compatibility, limitations, and review date",
    ],
  },

  portfolioArtifact: {
    title: "Portfolio Artifact — Reliable Fabric Delta Incremental Pipeline",
    description:
      "Create an employer-ready Fabric design that ingests imperfect incremental manufacturing data, merges it into trusted Delta tables, survives failures, and proves safe reruns and maintenance.",
    requiredSections: [
      "Business decision, consumers, actions, latency, reliability, history, security, and cost objectives",
      "Source and target grain, keys, versions, schema, constraints, deletes, late data, and ownership",
      "Delta log, snapshot, commit, staging, MERGE, watermark, checkpoint, and publication architecture",
      "Deterministic deduplication and insert, update, unchanged, stale, conflict, delete, and quarantine rules",
      "Unpartitioned, partitioned, liquid-clustered, Z-Order, and V-Order decision matrix",
      "Small-file, compaction, OPTIMIZE, VACUUM, history, retention, and maintenance plan",
      "Concurrency, retry, append-and-merge, failure injection, rollback, replay, and backfill procedures",
      "Schema, quality, reconciliation, key, measure, checksum, history, performance, security, and rerun tests",
      "Fabric notebook or Spark SQL implementation with pipeline orchestration and monitored evidence",
      "Python lab artifacts, PASS manifest, README, architecture diagram, runbook, limitations, and interview narrative",
    ],
  },

  growthIndicators: [
    { title: "Delta Reliability Engineer", description: "You connect table transactions, business keys, versions, atomic publication, and safe recovery." },
    { title: "Data Layout Analyst", description: "You select partitions or clustering from measured reads, writes, concurrency, cardinality, and file health." },
    { title: "Idempotence Tester", description: "You prove repeated execution preserves rows, keys, measures, versions, and checksums." },
    { title: "Lakehouse Operator", description: "You manage conflicts, history, retention, maintenance, recovery, cost, and service evidence." },
  ],

  reflection: [
    "What does one target row mean?",
    "Which business key survives across runs and systems?",
    "Which source version or event order is authoritative?",
    "What happens when key and version match but payload differs?",
    "Can a failure expose partially published target data?",
    "What exact state must remain unchanged after an identical rerun?",
    "Does the watermark advance only after trusted publication?",
    "Is partitioning solving concurrent writes or merely following habit?",
    "Would liquid clustering better support evolving read filters?",
    "Do file sizes and scans justify compaction or layout change?",
    "Which recovery, audit, or reader need determines retention?",
    "Can another engineer diagnose a conflict and rerun safely from the evidence pack?",
  ],

  summary: [
    "A Delta table combines Parquet data files with an ordered transaction log, protocol, metadata, and committed snapshots.",
    "Atomic commits expose either the complete prior version or the complete new version, not partial table state.",
    "Optimistic concurrency control rejects conflicting commits instead of silently corrupting data.",
    "Schema enforcement protects the table contract; schema evolution must be deliberate, compatible, tested, and communicated.",
    "MERGE supports inserts, updates, and deletes, but engineers must define the correct business key, version, and conditions.",
    "Deterministic deduplication uses stable ordering and tie-breakers rather than accidental file or arrival order.",
    "An idempotent rerun of identical input produces zero trusted-state difference.",
    "Watermarks and batch completion should advance only after target publication and mandatory validation succeed.",
    "Retries address classified transient failures; replay, backfill, rollback, and correction are distinct recovery operations.",
    "Current Fabric guidance recommends liquid clustering for most Runtime 2.0 read-performance workloads.",
    "Hive partitioning is primarily valuable when low-to-moderate-cardinality values isolate concurrent writers into disjoint files.",
    "High-cardinality partitioning can create tiny directories, small files, skew, metadata overhead, and expensive maintenance.",
    "File skipping avoids files from statistics; partition pruning avoids entire Hive partition directories.",
    "OPTIMIZE compacts active files, V-Order improves Parquet read layout, and VACUUM removes eligible obsolete files.",
    "VACUUM must respect history, long readers, incident recovery, audit, replay, and organizational policy because deletion is permanent.",
    "Append staging followed by one controlled MERGE can reduce conflict-prone concurrent target mutations.",
    "Professional proof includes counts, keys, measures, versions, checksums, history, layout, performance, cost, and repeatable rerun evidence.",
  ],

  previousLesson: {
    id: "data-ai-m07-l04",
    moduleNumber: 7,
    slug: "fabric-pipelines-dataflows-gen2-notebooks-and-spark",
    title: "Fabric Pipelines, Dataflows Gen2, Notebooks, and Spark",
  },
  nextLesson: null,

  lumineryGuidance: {
    message:
      "Make the table transaction safe, the business merge deterministic, the physical layout evidence-based, and the rerun provably harmless.",
    prompt:
      "Act as my senior Microsoft Fabric Delta Lake engineer, Spark developer, data-modeling architect, performance analyst, DataOps operator, security reviewer, and portfolio mentor. Help me complete Module 7 Lesson 5 one verified gate at a time. Require grain, keys, versions, schema, constraints, transaction log, snapshot, commit behavior, staging, deduplication, MERGE conditions, watermarks, checkpoints, idempotence, failure injection, retries, concurrency, partitions, liquid clustering, file skipping, small-file evidence, OPTIMIZE, V-Order, VACUUM, retention, history, replay, backfill, rollback, quality, reconciliation, checksums, performance, cost, monitoring, runbook, and interview narrative. Do not approve append-only corrections, arrival-order winners, early watermarks, blind retries, high-cardinality partitioning, partitioning by habit, unmeasured compaction, short-retention VACUUM, uncontrolled schema evolution, row-count-only validation, or a rerun without zero-delta proof.",
    coachingQuestions: [
      "What does one target row mean, and which key uniquely identifies it?",
      "Which version and tie-breaker choose the authoritative source row?",
      "What does the Delta log commit atomically?",
      "What happens after failure before commit, after commit, and before watermark advancement?",
      "Which exact deltas must be zero after an identical rerun?",
      "Does partitioning isolate writers, or would liquid clustering better serve reads?",
      "What do active file count, size, skipping, skew, and write amplification show?",
      "Which operation needs OPTIMIZE, V-Order, or VACUUM, and why?",
      "How long must history remain available for readers, recovery, audit, and replay?",
      "Can another engineer recover the table using only the contract, history, artifacts, and runbook?",
    ],
  },
};

export default lesson05;
