const lesson02 = {
  id: "data-ai-m07-l02",
  courseId: "data-ai-foundations",
  moduleId: "data-ai-foundations-module-07",
  moduleNumber: 7,
  lessonNumber: 2,
  slug: "data-lakes-warehouses-lakehouses-and-onelake",
  title: "Data Lakes, Warehouses, Lakehouses, and OneLake",
  shortTitle: "Lakes, Warehouses, Lakehouses, and OneLake",
  subtitle:
    "Choose the right analytical store, organize Microsoft Fabric OneLake, reduce unnecessary copies, and prove that data remains open, governed, reliable, and useful across BI, engineering, data science, and AI.",
  status: "available",
  duration: "6–8 hours",
  level: "Beginner to Professional",

  essentialQuestion:
    "How should an organization place files, tables, and analytical products so every workload gets the flexibility, transactions, performance, access, governance, and cost behavior it actually needs?",
  bigIdea:
    "A storage architecture is a business and engineering contract. A data lake preserves diverse data, a warehouse provides relational analytical control, a lakehouse combines open lake storage with reliable tables, and OneLake supplies Fabric's organization-wide logical lake so several engines can use governed data without unnecessary duplication.",

  whyThisLessonExists: {
    title: "One Copy Is Valuable Only When Its Meaning and Access Are Controlled",
    introduction:
      "Organizations often create a new copy for every team, dashboard, model, and tool. The result is conflicting totals, stale extracts, duplicated cost, unclear ownership, and security rules that drift apart.",
    centralProblem:
      "A manufacturing company stores robot JSON, inspection images, maintenance CSV files, ERP tables, finance marts, and AI features in separate platforms. Engineers want Spark and Python, analysts want governed SQL, executives want fast Power BI reports, and security leaders want one accountable access model. The team must decide what belongs in a lake, warehouse, or lakehouse and how OneLake should connect the result.",
    purpose:
      "This lesson develops store-selection judgment, OneLake namespace design, Lakehouse and Warehouse patterns, Delta-table reliability, shortcuts, duplication controls, file-layout performance, governance boundaries, cost evidence, and a tested Python architecture lab.",
  },

  problemFirst: {
    title: "Opening Investigation: Six Workloads, One Data Estate",
    scenario:
      "Plant sensors produce high-volume JSON, cameras produce images, ERP produces governed relational tables, finance requires multi-table transaction behavior, data scientists require raw history, and Power BI consumers require fast certified measures. Today each team copies the same data into its own storage account.",
    questions: [
      "Which data must remain in original file form, and for how long?",
      "Which consumers require relational constraints, SQL development, and multi-table transactions?",
      "Which workloads need Spark, notebooks, Python, or machine-learning access?",
      "Which tables can be shared in open Delta format?",
      "Where would a shortcut avoid a copy, and where is a durable copy still justified?",
      "What is the tenant, domain, workspace, item, table, and file ownership model?",
      "How will row, column, object, workspace, and source permissions interact?",
      "Which evidence proves storage growth, performance, freshness, quality, and cost remain acceptable?",
    ],
    expectedInsight:
      "The correct design is usually not lake versus warehouse. It is a governed combination in which each item has a purpose, owner, access boundary, open format, service expectation, lifecycle, and measurable reason to exist.",
  },

  visualModels: [
    {
      id: "store-comparison",
      type: "comparison",
      title: "Four Related Ideas, Four Different Responsibilities",
      description:
        "Separate the storage pattern, analytical item, and organization-wide logical namespace before selecting technology.",
      items: [
        { label: "Data lake", symbol: "Files + folders + object storage", meaning: "Preserves structured, semi-structured, and unstructured data at scale. Flexibility is high, but table reliability, discoverability, quality, and governance must be designed." },
        { label: "Warehouse", symbol: "Relational tables + SQL", meaning: "Optimizes governed structured analytics, dimensional models, T-SQL development, and controlled relational behavior for BI and reporting." },
        { label: "Lakehouse", symbol: "Lake files + reliable tables", meaning: "Combines diverse file storage with open Delta tables, Spark engineering, SQL access, data science, and BI from a shared foundation." },
        { label: "OneLake", symbol: "Tenant-wide logical lake", meaning: "Underpins Fabric items with a unified namespace, open storage, shared discovery, and cross-workload access. It is not one ungoverned folder." },
      ],
    },
    {
      id: "onelake-namespace",
      type: "lifecycle",
      title: "OneLake Logical Namespace and Accountability",
      description:
        "Move from organization scope to the exact file or table while preserving ownership and access boundaries.",
      stages: [
        { label: "1. Tenant", detail: "The organization-wide Fabric boundary automatically includes OneLake and establishes central administration and governance." },
        { label: "2. Domain", detail: "A business-oriented grouping such as Manufacturing, Finance, or Customer Operations supports discovery and delegated governance." },
        { label: "3. Workspace", detail: "A collaboration and security boundary with roles, capacity assignment, lifecycle, deployment, and accountable owners." },
        { label: "4. Data item", detail: "A Lakehouse, Warehouse, Eventhouse, or other Fabric item provisions and organizes storage in OneLake." },
        { label: "5. Files or tables", detail: "Use Files for raw or unstructured content and Tables for managed analytical tables with declared schema, grain, keys, and quality." },
        { label: "6. Data product", detail: "Publish a discoverable, owned, documented, tested output with consumers, service expectations, lineage, classification, and support." },
      ],
      feedback:
        "The hierarchy creates a logical path; it does not replace least privilege, item ownership, data contracts, or source-system authorization.",
      interpretation:
        "A useful OneLake design makes both discovery and accountability easier at every level.",
    },
    {
      id: "lakehouse-data-flow",
      type: "lifecycle",
      title: "From Diverse Sources to Governed Analytical Products",
      description:
        "Keep ingestion, table reliability, serving, and governance visible as separate responsibilities.",
      stages: [
        { label: "1. Source", detail: "Databases, APIs, files, images, events, documents, and external lakes remain authoritative under source-owner controls." },
        { label: "2. Land or link", detail: "Copy when persistence or transformation requires it; use a shortcut when governed zero-copy access is the better contract." },
        { label: "3. Preserve", detail: "Capture source path, checksum, format, ingestion time, schema version, classification, retention, and batch or event identity." },
        { label: "4. Convert", detail: "Create Delta tables with explicit types, grain, business keys, partitions, transaction log, and repeatable transformations." },
        { label: "5. Validate", detail: "Test schema, completeness, uniqueness, integrity, reconciliation, privacy, freshness, file layout, and transaction outcomes." },
        { label: "6. Serve", detail: "Expose governed Lakehouse tables, Warehouse models, SQL endpoints, semantic models, data-science features, or AI-ready content." },
        { label: "7. Operate", detail: "Monitor access, lineage, growth, scans, small files, compaction, freshness, query latency, failures, retention, and cost." },
      ],
      feedback:
        "Landing data is only the beginning; a professional design includes the reliable-table, serving, security, and operating contracts.",
      interpretation:
        "Data becomes valuable through controlled transitions from source evidence to consumer-ready products.",
    },
    {
      id: "shortcut-resolution",
      type: "lifecycle",
      title: "OneLake Shortcut — Reference Instead of Duplicate",
      description:
        "A shortcut is an independent OneLake object that points to an internal or external target path and appears like a folder to supported engines.",
      stages: [
        { label: "1. Target", detail: "Data remains in its authoritative OneLake or supported external storage location." },
        { label: "2. Connection", detail: "Approved credentials and cloud connection authorize access to the target under documented ownership." },
        { label: "3. Shortcut", detail: "The shortcut stores a reference at a logical path; it does not become the target data itself." },
        { label: "4. Consumer item", detail: "A Lakehouse or supported item presents the shortcut through its own logical namespace." },
        { label: "5. Analytical engine", detail: "Spark, SQL, Power BI, or another supported workload reads the referenced data according to applicable permissions and capabilities." },
        { label: "6. Monitor", detail: "Track broken targets, permission changes, source schema changes, latency, egress, caching, lineage, and consumer impact." },
      ],
      feedback:
        "Deleting a shortcut does not delete its target, but moving, renaming, or deleting the target can break the reference.",
      interpretation:
        "Shortcuts reduce copies and staging latency when ownership, security, availability, format, performance, and regional constraints are acceptable.",
    },
    {
      id: "illustrative-storage-footprint",
      type: "barChart",
      title: "Illustrative Data Estate — Physical Storage by Layer",
      description:
        "Use measured bytes and object counts to distinguish justified data products from uncontrolled duplication. These values are illustrative, not Fabric benchmarks.",
      ariaLabel:
        "Horizontal bar graph showing raw sensor files 240 gigabytes, curated Delta tables 85 gigabytes, warehouse marts 32 gigabytes, and semantic cache 8 gigabytes.",
      unit: "GB",
      max: 240,
      items: [
        { label: "Raw sensor files", value: 240, note: "Largest layer; retention and compression determine long-term growth." },
        { label: "Curated Delta tables", value: 85, note: "Typed, deduplicated, filtered, and reusable analytical tables." },
        { label: "Warehouse marts", value: 32, note: "Structured serving products justified by relational and SQL requirements." },
        { label: "Semantic cache", value: 8, note: "Consumer acceleration whose refresh and duplication purpose must be documented." },
      ],
      interpretation:
        "The 365 GB total is not automatically wasteful. The design is defensible only when every retained byte has purpose, owner, consumer, retention rule, and measured benefit.",
    },
  ],

  representationModel: {
    title: "Monthly OneLake Storage Growth — Table and Line Graph",
    description:
      "Track physical storage over time, annotate major loads or retention changes, and compare actual growth with the approved budget and forecast.",
    equation: "monthly growth rate = (current GB − previous GB) ÷ previous GB × 100%",
    columns: [
      { key: "month", label: "Month" },
      { key: "storage", label: "Physical Storage (GB)" },
    ],
    rows: [
      { month: 1, storage: 120 },
      { month: 2, storage: 150 },
      { month: 3, storage: 185 },
      { month: 4, storage: 225 },
      { month: 5, storage: 270 },
      { month: 6, storage: 320 },
    ],
    xKey: "month",
    yKey: "storage",
    xLabel: "Month",
    yLabel: "Physical storage (GB)",
    highlightPoint: { x: 6, y: 320 },
  },

  learningObjectives: [
    "Distinguish data lakes, warehouses, lakehouses, and OneLake without treating them as synonyms.",
    "Choose a store from data type, development language, transaction, latency, governance, and consumer requirements.",
    "Explain why a data lake can become a data swamp without metadata, quality, ownership, and lifecycle controls.",
    "Explain how a lakehouse combines diverse files with reliable open tables.",
    "Describe Fabric Lakehouse Files, Tables, and the SQL analytics endpoint.",
    "Describe Warehouse strengths for structured data, T-SQL, and multi-table transactional workloads.",
    "Explain OneLake as Fabric's tenant-wide unified logical data lake.",
    "Design tenant, domain, workspace, item, folder, table, and data-product boundaries.",
    "Compare physical copying, mirroring, and OneLake shortcuts.",
    "Identify when zero-copy access reduces duplication and when a durable copy remains justified.",
    "Explain Delta Parquet data files and the transaction log as distinct parts of a reliable table.",
    "Apply schema, grain, key, partition, compaction, retention, and optimization decisions.",
    "Detect small-file, overpartitioning, full-scan, stale-shortcut, and uncontrolled-growth risks.",
    "Calculate compression, duplication, scan efficiency, storage growth, and estimated storage cost.",
    "Design object, workspace, row, column, and source-access controls using least privilege.",
    "Define data-product ownership, classification, lineage, discovery, support, and service expectations.",
    "Build and validate a Python inventory that models physical objects, logical paths, and shortcuts.",
    "Produce an employer-ready OneLake architecture decision record and evidence pack.",
  ],

  prerequisiteKnowledge: [
    "Module 3: tables, keys, joins, normalization, transactions, SQL, and dimensional modeling",
    "Module 4: source files, schemas, types, validation, reconciliation, and cleaning",
    "Module 5: Python, pandas, files, functions, exceptions, testing, and reproducibility",
    "Module 6: semantic models, Power BI, security, validation, monitoring, and deployment",
    "Module 7 Lesson 1: ETL, ELT, batch, streaming, orchestration, idempotence, and run evidence",
  ],

  vocabulary: [
    { term: "Data lake", definition: "Scalable object storage for structured, semi-structured, and unstructured data in original or processed file forms." },
    { term: "Data warehouse", definition: "A governed relational analytical store optimized for structured data, SQL, modeling, and business intelligence." },
    { term: "Lakehouse", definition: "An architecture combining data-lake flexibility and scale with reliable open tables and warehouse-like analytical access." },
    { term: "OneLake", definition: "Microsoft Fabric's unified logical data lake for the whole organization and the storage foundation for Fabric workloads." },
    { term: "Tenant", definition: "The top organizational Fabric boundary within which OneLake is automatically available." },
    { term: "Domain", definition: "A business-oriented grouping that supports discoverability, delegated governance, and clear data ownership." },
    { term: "Workspace", definition: "A Fabric collaboration, access, capacity, and lifecycle boundary containing items and accountable members." },
    { term: "Item", definition: "A managed Fabric object such as a Lakehouse, Warehouse, Eventhouse, pipeline, notebook, or semantic model." },
    { term: "Files area", definition: "The Lakehouse location for raw, unstructured, or non-Delta content organized as files and folders." },
    { term: "Tables area", definition: "The Lakehouse location for managed Delta tables recognized by Fabric analytical engines." },
    { term: "SQL analytics endpoint", definition: "The SQL interface automatically provisioned for querying Lakehouse Delta tables with supported T-SQL capabilities." },
    { term: "Object storage", definition: "Storage that manages data as objects with paths and metadata rather than database pages or local file-system blocks." },
    { term: "Open format", definition: "A publicly specified data or table representation readable by multiple compatible tools rather than one proprietary engine." },
    { term: "Parquet", definition: "A columnar file format designed for efficient analytical storage and selective reading." },
    { term: "Delta Lake", definition: "An open table format that adds transaction logs, consistency, schema controls, and table operations to data-lake files." },
    { term: "Delta Parquet", definition: "Parquet data files governed as a Delta table through transaction-log metadata and committed actions." },
    { term: "Transaction log", definition: "Ordered metadata that records committed table actions and enables readers to identify a consistent table version." },
    { term: "ACID", definition: "Atomicity, consistency, isolation, and durability: properties used to reason about reliable transaction outcomes." },
    { term: "Schema-on-read", definition: "Applying or interpreting structure when data is read, offering flexibility but requiring controlled contracts." },
    { term: "Schema-on-write", definition: "Validating and organizing data against an expected structure before or during trusted publication." },
    { term: "Managed table", definition: "A table whose metadata and storage organization are managed through the platform's table lifecycle." },
    { term: "External data", definition: "Data whose physical storage remains outside the consuming item even when it is logically accessible." },
    { term: "Shortcut", definition: "An independent OneLake object that points to an internal or external target path and behaves like a symbolic link." },
    { term: "Shortcut path", definition: "The logical location where a shortcut appears to consumers." },
    { term: "Target path", definition: "The physical or logical storage location to which a shortcut points." },
    { term: "Zero-copy", definition: "Providing analytical access through a reference or shared storage rather than creating another full physical copy." },
    { term: "Mirroring", definition: "Making supported external operational or catalog data available in Fabric through managed replication or metadata integration." },
    { term: "Unified namespace", definition: "A consistent logical addressing model through which users and engines discover data across items and locations." },
    { term: "Data product", definition: "An owned, discoverable, documented, tested, supported data output designed for declared consumers and decisions." },
    { term: "Data contract", definition: "An agreement describing schema, grain, keys, meaning, quality, freshness, ownership, change, access, and support expectations." },
    { term: "Lineage", definition: "Recorded relationships showing how data moved and changed from sources through transformations to consumers." },
    { term: "Partition", definition: "A physical or logical subdivision intended to reduce reads, isolate maintenance, or organize time or another useful key." },
    { term: "Partition pruning", definition: "Skipping irrelevant partitions because filters align with partition metadata." },
    { term: "Small-file problem", definition: "Performance and management overhead caused by many files that are too small for efficient analytical processing." },
    { term: "Compaction", definition: "Combining many small files into fewer appropriately sized files while preserving the trusted table result." },
    { term: "Optimization", definition: "Measured maintenance or layout changes intended to improve scans, latency, cost, or reliability without changing business meaning." },
    { term: "Retention", definition: "A policy defining how long data and historical versions are kept and when they may be archived or deleted." },
    { term: "Hot data", definition: "Frequently accessed data requiring fast availability and active operational support." },
    { term: "Cold data", definition: "Infrequently accessed data retained under lower-cost or archival expectations." },
    { term: "Sensitivity label", definition: "Classification metadata communicating the handling requirements of supported information assets." },
    { term: "Least privilege", definition: "Granting only the minimum permissions required for an approved task and time period." },
    { term: "Data swamp", definition: "A data lake whose content lacks sufficient discoverability, ownership, quality, security, or lifecycle control to be trusted." },
    { term: "Direct Lake", definition: "A Power BI semantic-model storage mode that accesses supported OneLake data without a traditional imported copy." },
    { term: "OneLake catalog", definition: "The Fabric experience for discovering data, reviewing governance status, and navigating governed analytical assets." },
  ],

  formulas: [
    { id: "storage-growth", name: "Storage growth rate", formula: "growth % = (current bytes − previous bytes) ÷ previous bytes × 100", meaning: "Measures physical storage change between comparable periods.", requirement: "Separate new business data, history, temporary files, failed loads, caches, and uncontrolled copies." },
    { id: "compression", name: "Compression ratio", formula: "compression ratio = uncompressed bytes ÷ stored bytes", meaning: "Shows how effectively encoding and compression reduce physical storage.", requirement: "Compare the same logical population and record file format, codec, data types, and cardinality." },
    { id: "duplication", name: "Duplication factor", formula: "duplication factor = total physical bytes ÷ unique authoritative bytes", meaning: "Quantifies how many physical bytes are retained for each unique authoritative byte.", requirement: "Exclude deliberately independent backups only when they are governed and reported separately." },
    { id: "bytes-avoided", name: "Bytes avoided by shortcuts", formula: "bytes avoided = projected copied bytes − actual new physical bytes", meaning: "Estimates physical duplication avoided through references.", requirement: "Include caches, transformed outputs, egress, and any source-retention obligation." },
    { id: "scan-efficiency", name: "Scan efficiency", formula: "scan efficiency = useful bytes read ÷ total bytes scanned", meaning: "Measures whether file layout, filtering, and pruning avoid unnecessary reads.", requirement: "Use measured engine metrics for a representative workload." },
    { id: "partition-pruning", name: "Partition pruning rate", formula: "pruning % = skipped partitions ÷ total candidate partitions × 100", meaning: "Measures how effectively a filter excludes partitions.", requirement: "A high rate is useful only when partition count and file sizes remain healthy." },
    { id: "average-file-size", name: "Average file size", formula: "average file size = table physical bytes ÷ active data files", meaning: "A first diagnostic for small-file risk.", requirement: "Inspect the distribution, not only the mean, and compare with actual workload guidance." },
    { id: "storage-cost", name: "Estimated storage cost", formula: "monthly cost = average stored TB × price per TB-month + transactions + egress + cache", meaning: "Estimates the complete storage-related cost of a design.", requirement: "Use current contracted prices, region, capacity model, operation counts, and external-source charges." },
    { id: "freshness", name: "Trusted freshness lag", formula: "freshness lag = current time − latest trusted source event time", meaning: "Measures how far the usable product trails its source.", requirement: "A visible shortcut is not automatically fresh, validated, or certified." },
    { id: "availability", name: "Data-product availability", formula: "availability = time meeting declared service ÷ required service time", meaning: "Measures whether consumers can use the product under its approved service definition.", requirement: "Define source outages, broken shortcuts, stale data, denied access, and degraded performance states." },
  ],

  workedExamples: [
    {
      id: "example-07-02-01",
      title: "Choose a data lake for diverse raw evidence",
      problem: "Robot telemetry arrives as JSON, inspections as images, and vendor manuals as PDF files. Data scientists need reproducible source history.",
      solutionSteps: ["Preserve original formats and technical metadata in governed object storage.", "Classify content and restrict raw access.", "Apply retention, checksums, schema capture, and lineage.", "Create trusted tables only for defined analytical products."],
      answer: "Use a governed data-lake or Lakehouse Files landing area for diverse raw evidence, then publish tested tables separately.",
      interpretation: "Flexibility is valuable when metadata and access prevent the lake from becoming a swamp.",
    },
    {
      id: "example-07-02-02",
      title: "Choose a Warehouse for governed SQL analytics",
      problem: "Finance needs structured data, T-SQL development, views, stored procedures, and multi-table transactional behavior.",
      solutionSteps: ["Confirm data is structured and the development standard is T-SQL.", "Document transaction and concurrency requirements.", "Model governed relational tables and serving views.", "Validate reconciliation, security, performance, and recovery."],
      answer: "Choose Fabric Warehouse as the primary structured analytical item.",
      interpretation: "Warehouse is a development and transaction decision, not a claim that data cannot also be shared through OneLake.",
    },
    {
      id: "example-07-02-03",
      title: "Choose a Lakehouse for engineering, BI, and ML",
      problem: "The same maintenance history must support Spark transformations, SQL exploration, Power BI, and machine-learning features.",
      solutionSteps: ["Land source files with governed metadata.", "Create reliable Delta tables for shared entities and facts.", "Use Spark or notebooks for engineering and the SQL endpoint for supported queries.", "Publish certified semantic and ML products from the same governed tables."],
      answer: "Choose a Fabric Lakehouse because diverse files and open Delta tables must serve several analytical engines.",
      interpretation: "A lakehouse reduces architectural handoffs when the shared table contract is strong.",
    },
    {
      id: "example-07-02-04",
      title: "Design the OneLake hierarchy",
      problem: "Manufacturing, Finance, and Customer Operations need autonomy without losing enterprise discovery and control.",
      solutionSteps: ["Use the Fabric tenant as the organization boundary.", "Group discoverable assets by business domains.", "Create workspaces for accountable teams, environments, and access boundaries.", "Create purpose-specific items and publish owned data products."],
      answer: "Use tenant → domain → workspace → item → files or tables, with ownership and least privilege declared at each relevant boundary.",
      interpretation: "A clean namespace supports governance only when roles, lifecycle, and support responsibilities match it.",
    },
    {
      id: "example-07-02-05",
      title: "Choose a shortcut instead of a copy",
      problem: "A certified Delta table already exists in another approved workspace, and the consuming team only needs read access.",
      solutionSteps: ["Confirm target ownership, format, availability, region, and change policy.", "Confirm source and consumer permission behavior.", "Create a shortcut with a stable logical name.", "Monitor lineage, schema change, broken targets, latency, and consumer impact."],
      answer: "Use a OneLake shortcut when the shared authoritative data satisfies the consumer contract and an independent physical copy adds no justified value.",
      interpretation: "Zero-copy reduces duplication but preserves dependency on the target's service and governance.",
    },
    {
      id: "example-07-02-06",
      title: "Justify a durable copy",
      problem: "An external source has limited availability, unpredictable schema, expensive cross-region reads, and no historical snapshots.",
      solutionSteps: ["Measure availability, latency, egress, and schema risks.", "Define the required reproducible source population and retention.", "Ingest an approved immutable or versioned copy.", "Reconcile source and landed objects and record lineage."],
      answer: "Create a governed durable copy because reproducibility, resilience, predictable cost, and historical evidence outweigh duplication cost.",
      interpretation: "Avoiding every copy is as poor a rule as copying for every consumer.",
    },
    {
      id: "example-07-02-07",
      title: "Correct the small-file problem",
      problem: "A Delta table contains 120,000 tiny files, and queries spend more time opening files than scanning useful data.",
      solutionSteps: ["Measure file-count and size distribution by partition.", "Stop overly frequent writes or overpartitioning at the source.", "Compact files using an approved maintenance process.", "Rerun representative queries and verify cost, duration, freshness, and correctness."],
      answer: "Fix the write pattern and compact under controlled validation; compaction alone is temporary if tiny writes continue.",
      interpretation: "Table maintenance must address both existing layout and the process creating it.",
    },
    {
      id: "example-07-02-08",
      title: "Secure a shared analytical table",
      problem: "Plant managers may see their own plant rows, finance may see cost columns, and engineers may see sensor measures but not employee identifiers.",
      solutionSteps: ["Classify columns and map users to approved purposes.", "Separate workspace and item administration from data-reading rights.", "Apply supported row, column, object, and semantic controls at the correct layer.", "Test allowed and denied cases through every intended engine."],
      answer: "Use layered least privilege and engine-specific validation; never assume one permission automatically governs every access path.",
      interpretation: "Security is proven with identity-based tests, not inferred from where the file is stored.",
    },
  ],

  interactiveExploration: {
    title: "Architecture Studio: Place, Link, Govern, and Operate",
    purpose:
      "Design a Fabric storage architecture for manufacturing data and defend every item, copy, shortcut, access rule, and maintenance process.",
    instructions: [
      "Inventory sources by format, volume, growth, owner, location, sensitivity, change behavior, and availability.",
      "Map consumers to decisions, languages, engines, transaction needs, latency, concurrency, and service levels.",
      "Choose lake, Warehouse, Lakehouse, Eventhouse, or another justified store for each data product.",
      "Design tenant, domain, workspace, item, folder, table, and naming boundaries.",
      "Decide copy, mirror, or shortcut for each source and document the reversal conditions.",
      "Define Delta table grain, keys, schema, partition, write, optimization, retention, and recovery behavior.",
      "Create least-privilege access tests for every intended engine and persona.",
      "Estimate physical bytes, growth, duplication, scans, operations, egress, capacity, and maintenance cost.",
      "Define monitoring for freshness, availability, broken references, schema drift, file layout, performance, cost, and lineage.",
    ],
    investigationQuestions: [
      "Which copy is authoritative, and who can change its contract?",
      "Which requirement truly needs a Warehouse instead of a Lakehouse table?",
      "What happens to consumers if a shortcut target is moved or access is revoked?",
      "Could a partition choice create millions of small files?",
      "How is sensitive data protected through every engine and export path?",
      "Which cost grows fastest if data volume doubles every six months?",
      "What evidence allows another engineer to recreate the logical architecture?",
    ],
    expectedDiscovery:
      "Store selection is multi-dimensional. A professional decision balances open access, reliable transactions, development experience, consumer behavior, security, operations, resilience, and total cost.",
  },

  realWorldApplications: [
    { field: "Manufacturing and Robotics", application: "Keep sensor files and inspection images in a governed Lakehouse, publish reliable Delta tables, serve finance through Warehouse models, and use shortcuts for approved shared plant data." },
    { field: "Education", application: "Separate sensitive student records from broadly reusable learning-event tables while supporting SQL reporting, research files, and governed semantic models." },
    { field: "Retail", application: "Unify product, inventory, transaction, image, clickstream, and supplier data while preserving low-latency and governed financial serving needs." },
    { field: "Healthcare", application: "Combine clinical tables, medical images, device events, and research data under strict classification, least privilege, lineage, and retention controls." },
    { field: "Finance", application: "Use Warehouse transaction and T-SQL capabilities for controlled analytics while sharing open OneLake data products with governed engineering workloads." },
    { field: "AI Systems", application: "Store documents, images, features, evaluation sets, prompts, outputs, and telemetry with reproducible versions, access boundaries, and lineage." },
  ],

  aiConnection: {
    title: "AI Can Recommend a Store, but Evidence Must Approve the Architecture",
    explanation:
      "An AI assistant can summarize requirements, draft decision matrices, propose namespaces, generate validation code, or identify likely small-file and duplication risks. It cannot independently authorize data access, know contractual retention, guarantee current product support, or decide acceptable business risk.",
    uses: [
      "Turn an approved requirements inventory into alternative lake, Warehouse, and Lakehouse architectures.",
      "Draft Delta table contracts, folder conventions, shortcut registers, and permission-test cases.",
      "Analyze file inventories for growth, duplication, small-file patterns, stale data, and missing ownership.",
      "Generate cost scenarios whose assumptions remain visible and replaceable.",
      "Draft operational documentation from verified metadata, lineage, tests, and monitoring evidence.",
    ],
    caution:
      "Never let AI create production shortcuts, move targets, change permissions, delete versions, compact tables, or recommend a store from invented requirements. Review current documentation and test behavior in the intended environment.",
    reflectionQuestion:
      "Which store-selection facts can be measured automatically, and which require accountable decisions by source owners, security, legal, finance, platform teams, and consumers?",
  },

  pythonLab: {
    title: "Python Lab — Build a OneLake Logical Inventory and Duplication Evidence Pack",
    description:
      "Model physical objects, logical OneLake paths, shortcut references, storage growth, and a curated work-order contract. Prove unique paths, valid targets, reduced physical duplication, key quality, and reproducible output artifacts.",
    code: `from pathlib import Path
import hashlib
import json
import pandas as pd

output_dir = Path("onelake_architecture_lesson_output")
output_dir.mkdir(exist_ok=True)

objects = pd.DataFrame([
    {"object_id": "OBJ-001", "physical_location": "onelake://manufacturing/raw/sensor_2026_10.json", "format": "JSON", "physical_bytes": 240_000_000, "owner": "plant-data"},
    {"object_id": "OBJ-002", "physical_location": "onelake://manufacturing/curated/work_orders", "format": "DELTA", "physical_bytes": 85_000_000, "owner": "reliability-data"},
    {"object_id": "OBJ-003", "physical_location": "onelake://finance/warehouse/maintenance_cost", "format": "DELTA", "physical_bytes": 32_000_000, "owner": "finance-data"},
    {"object_id": "OBJ-004", "physical_location": "onelake://bi/cache/executive_model", "format": "CACHE", "physical_bytes": 8_000_000, "owner": "bi-platform"},
])

logical_paths = pd.DataFrame([
    {"logical_path": "/Manufacturing/RawLakehouse/Files/sensors", "object_id": "OBJ-001", "access_type": "PHYSICAL"},
    {"logical_path": "/Manufacturing/ReliabilityLakehouse/Tables/work_orders", "object_id": "OBJ-002", "access_type": "PHYSICAL"},
    {"logical_path": "/Finance/MaintenanceWarehouse/Tables/maintenance_cost", "object_id": "OBJ-003", "access_type": "PHYSICAL"},
    {"logical_path": "/Executive/OperationsModel/cache", "object_id": "OBJ-004", "access_type": "PHYSICAL"},
    {"logical_path": "/DataScience/FeatureLakehouse/Tables/work_orders", "object_id": "OBJ-002", "access_type": "SHORTCUT"},
    {"logical_path": "/Operations/SharedLakehouse/Tables/work_orders", "object_id": "OBJ-002", "access_type": "SHORTCUT"},
])

assert objects["object_id"].is_unique
assert objects["physical_location"].is_unique
assert objects["physical_bytes"].gt(0).all()
assert logical_paths["logical_path"].is_unique
assert set(logical_paths["object_id"]).issubset(set(objects["object_id"]))
assert set(logical_paths["access_type"]) == {"PHYSICAL", "SHORTCUT"}

inventory = logical_paths.merge(objects, on="object_id", how="left", validate="many_to_one")
assert inventory["physical_location"].notna().all()

physical_bytes = int(objects["physical_bytes"].sum())
shortcut_rows = inventory.loc[inventory["access_type"] == "SHORTCUT"]
naive_copy_bytes = physical_bytes + int(shortcut_rows["physical_bytes"].sum())
bytes_avoided = naive_copy_bytes - physical_bytes
duplication_factor_if_copied = naive_copy_bytes / physical_bytes

assert len(shortcut_rows) == 2
assert bytes_avoided == 170_000_000
assert round(duplication_factor_if_copied, 4) == 1.4658

work_orders = pd.DataFrame([
    {"work_order_id": "WO-101", "plant": "A", "asset_id": "R-01", "downtime_min": 15, "status": "Closed"},
    {"work_order_id": "WO-102", "plant": "A", "asset_id": "R-02", "downtime_min": 9, "status": "Open"},
    {"work_order_id": "WO-103", "plant": "B", "asset_id": "R-07", "downtime_min": 22, "status": "Closed"},
    {"work_order_id": "WO-104", "plant": "C", "asset_id": "R-11", "downtime_min": 6, "status": "Closed"},
])

assert work_orders["work_order_id"].is_unique
assert work_orders[["plant", "asset_id", "status"]].notna().all().all()
assert work_orders["downtime_min"].ge(0).all()
assert work_orders["status"].isin(["Open", "Closed"]).all()

plant_summary = (
    work_orders.groupby("plant", as_index=False)
    .agg(work_orders=("work_order_id", "nunique"), downtime_min=("downtime_min", "sum"))
    .sort_values("plant")
)
assert int(plant_summary["work_orders"].sum()) == 4
assert int(plant_summary["downtime_min"].sum()) == 52

growth = pd.DataFrame({
    "month": [1, 2, 3, 4, 5, 6],
    "storage_gb": [120, 150, 185, 225, 270, 320],
})
growth["growth_pct"] = growth["storage_gb"].pct_change().mul(100).round(2)
assert growth["storage_gb"].is_monotonic_increasing
assert int(growth.iloc[-1]["storage_gb"]) == 320

def file_sha256(path):
    return hashlib.sha256(path.read_bytes()).hexdigest()

inventory_path = output_dir / "onelake_inventory.csv"
shortcut_path = output_dir / "shortcut_register.csv"
summary_path = output_dir / "work_order_summary.csv"
growth_path = output_dir / "storage_growth.csv"
manifest_path = output_dir / "architecture_manifest.json"

inventory.to_csv(inventory_path, index=False)
shortcut_rows.to_csv(shortcut_path, index=False)
plant_summary.to_csv(summary_path, index=False)
growth.to_csv(growth_path, index=False)

manifest = {
    "architecture": "manufacturing_onelake_logical_inventory",
    "status": "PASS",
    "physical_objects": int(len(objects)),
    "logical_paths": int(len(logical_paths)),
    "shortcuts": int(len(shortcut_rows)),
    "physical_bytes": physical_bytes,
    "naive_copy_bytes": naive_copy_bytes,
    "bytes_avoided_by_shortcuts": bytes_avoided,
    "duplication_factor_if_copied": round(duplication_factor_if_copied, 4),
    "work_order_rows": int(len(work_orders)),
    "work_order_downtime_min": int(work_orders["downtime_min"].sum()),
    "artifacts": {},
}

for path in [inventory_path, shortcut_path, summary_path, growth_path]:
    manifest["artifacts"][path.name] = file_sha256(path)

manifest_path.write_text(json.dumps(manifest, indent=2), encoding="utf-8")

assert manifest["status"] == "PASS"
assert manifest["bytes_avoided_by_shortcuts"] == 170_000_000
assert all(len(value) == 64 for value in manifest["artifacts"].values())

print("OneLake logical inventory:\\n", inventory[["logical_path", "format", "access_type"]].to_string(index=False))
print("\\nStorage evidence:")
print("Physical bytes:", physical_bytes)
print("Naive copy bytes:", naive_copy_bytes)
print("Bytes avoided by shortcuts:", bytes_avoided)
print("Duplication factor if copied:", round(duplication_factor_if_copied, 4))
print("\\nPlant summary:\\n", plant_summary.to_string(index=False))
print("\\nStorage growth:\\n", growth.to_string(index=False))
print("\\nManifest status:", manifest["status"])
print("Artifacts:", sorted(path.name for path in output_dir.iterdir()))`,
    questions: [
      "Why can three logical paths reference OBJ-002 while its physical bytes are counted once?",
      "What assumption makes 170,000,000 bytes a valid avoided-copy estimate?",
      "Which shortcut risks are not represented by this local simulation?",
      "How would you record connection identity, target owner, region, sensitivity, and review date?",
      "Why do unique work-order keys and nonnegative downtime belong in a storage architecture lab?",
      "What additional evidence would prove a real Delta table's transaction behavior?",
      "How would caches, egress, external transactions, and retention change the cost model?",
      "Which alert should fire if storage growth exceeds the approved monthly forecast?",
    ],
    expectedOutcome:
      "A five-file evidence pack with four physical objects, six unique logical paths, two valid shortcuts, 170 MB of modeled avoided copies, a validated work-order summary totaling 52 downtime minutes, storage-growth history, SHA-256 checksums, and a PASS manifest.",
  },

  guidedPractice: [
    { id: "gp-07-02-01", question: "Which store best fits original JSON, images, and PDF files?", answer: "A governed data lake or the Files area of a Lakehouse, with metadata, classification, ownership, retention, and access controls." },
    { id: "gp-07-02-02", question: "Which Fabric item best fits structured T-SQL analytics with multi-table transactions?", answer: "Fabric Warehouse." },
    { id: "gp-07-02-03", question: "Which item supports diverse files, Spark engineering, Delta tables, and SQL access?", answer: "Fabric Lakehouse." },
    { id: "gp-07-02-04", question: "Does a shortcut copy its target data?", answer: "No. It is an independent reference object; caching or downstream transformation may still create physical bytes." },
    { id: "gp-07-02-05", question: "What happens when a shortcut is deleted?", answer: "The shortcut is removed while the target remains; deleting, moving, or renaming the target can break the shortcut." },
    { id: "gp-07-02-06", question: "Why is average file size only a first diagnostic?", answer: "The distribution, partition pattern, engine, workload, filters, concurrency, and measured scan behavior determine whether files are actually problematic." },
  ],

  independentPractice: [
    { id: "ip-07-02-01", difficulty: "Compare", question: "Create a decision matrix for a data lake, Warehouse, Lakehouse, and OneLake across data types, engines, transactions, consumers, governance, and operations." },
    { id: "ip-07-02-02", difficulty: "Design", question: "Design a tenant-domain-workspace-item hierarchy for Manufacturing, Finance, and Customer Operations with named owners and access boundaries." },
    { id: "ip-07-02-03", difficulty: "Engineer", question: "Specify a Delta maintenance contract covering writes, partitions, compaction, optimization, retention, validation, and rollback evidence." },
    { id: "ip-07-02-04", difficulty: "Decide", question: "Evaluate five sources and choose copy, mirror, or shortcut. Include conditions that would reverse each decision." },
    { id: "ip-07-02-05", difficulty: "Secure", question: "Create allowed and denied access tests for engineers, plant managers, finance analysts, data scientists, and external auditors." },
    { id: "ip-07-02-06", difficulty: "Measure", question: "Calculate storage growth, compression, duplication factor, scan efficiency, average file size, and estimated monthly cost from a sample inventory." },
    { id: "ip-07-02-07", difficulty: "Operate", question: "Define alerts for broken shortcuts, schema drift, stale tables, unusual growth, small files, full scans, denied access, and cost variance." },
    { id: "ip-07-02-08", difficulty: "Portfolio", question: "Produce a two-page architecture decision record with diagram, alternatives, evidence, risks, owners, and review date." },
  ],

  commonMistakes: [
    { mistake: "Calling OneLake a single physical folder", correction: "Treat it as an organization-wide logical lake with tenant, workspace, item, path, ownership, and security boundaries." },
    { mistake: "Using lake, Warehouse, and Lakehouse as synonyms", correction: "State the storage pattern, Fabric item, development engine, table behavior, and consumer contract precisely." },
    { mistake: "Landing everything without metadata", correction: "Capture source, owner, path, checksum, schema, time, classification, retention, batch, and lineage at ingestion." },
    { mistake: "Assuming open format means trusted data", correction: "Open files still require tested meaning, grain, keys, quality, ownership, and publication controls." },
    { mistake: "Copying data for every team", correction: "Prefer an authoritative product and governed sharing when independent copies add no measured value." },
    { mistake: "Using shortcuts for every source", correction: "Copy when reproducibility, resilience, transformation, performance, region, history, or cost evidence requires physical persistence." },
    { mistake: "Assuming shortcut deletion removes the source", correction: "A shortcut is independent of its target; validate both shortcut and target lifecycle procedures." },
    { mistake: "Partitioning by high-cardinality identifiers", correction: "Partition only when measured filters, volume, file size, and maintenance behavior justify it." },
    { mistake: "Compacting files without fixing tiny writes", correction: "Change the upstream write pattern and validate file distribution after maintenance." },
    { mistake: "Granting workspace roles as a complete security design", correction: "Test source, workspace, item, object, row, column, semantic, export, and shortcut access paths." },
    { mistake: "Ignoring physical bytes because storage is inexpensive", correction: "Track growth, copies, versions, temporary data, transactions, egress, capacity, operations, and carbon impact." },
    { mistake: "Selecting technology before consumers", correction: "Begin with decisions, users, data types, languages, transactions, latency, security, recovery, and cost." },
  ],

  discussionQuestions: [
    "When does a separate Warehouse add enough value to justify another serving item?",
    "Can a data lake remain useful without converting every file to a table?",
    "Who is accountable when a shortcut target changes and downstream reports fail?",
    "Should every domain control its own workspace design, or should the platform team enforce one standard?",
    "Which data must be physically copied for legal, operational, or reproducibility reasons?",
    "How should security be tested when the same table is accessible through several engines?",
    "What evidence proves that an optimization actually reduced total cost and not merely query duration?",
    "How does a unified logical lake change team ownership without eliminating domain responsibility?",
  ],

  formativeAssessment: {
    totalPoints: 100,
    passingScore: 80,
    questions: [
      { id: "check-07-02-01", points: 10, prompt: "Differentiate a data lake, Warehouse, Lakehouse, and OneLake.", sampleAnswer: "A lake stores diverse files, a Warehouse provides relational analytical control, a Lakehouse combines lake storage with reliable open tables, and OneLake is Fabric's unified logical lake underpinning organizational items." },
      { id: "check-07-02-02", points: 10, prompt: "Choose between Fabric Warehouse and Lakehouse for two contrasting scenarios.", sampleAnswer: "Use Warehouse for structured T-SQL and multi-table transactions; use Lakehouse for diverse data, Spark or Python engineering, Delta tables, and combined BI or ML workloads." },
      { id: "check-07-02-03", points: 10, prompt: "Design a OneLake namespace with accountable boundaries.", sampleAnswer: "Define tenant, domain, workspace, item, files or tables, data product, owners, roles, environments, lifecycle, and naming." },
      { id: "check-07-02-04", points: 10, prompt: "Explain a OneLake shortcut and two failure risks.", sampleAnswer: "A shortcut is a reference object pointing to a target path. Target movement, deletion, renamed paths, permission changes, source schema change, outages, region, or performance can break the consumer contract." },
      { id: "check-07-02-05", points: 10, prompt: "Give one reason to use a shortcut and one reason to create a durable copy.", sampleAnswer: "Use a shortcut to avoid unnecessary duplication of an authoritative source; copy for reproducibility, resilience, history, predictable performance, transformation, regional, or cost requirements." },
      { id: "check-07-02-06", points: 10, prompt: "Explain how Delta tables improve reliability over unmanaged Parquet files.", sampleAnswer: "Delta adds an ordered transaction log and committed table state, supporting consistent versions, integrity, schema controls, and reliable table operations." },
      { id: "check-07-02-07", points: 10, prompt: "Diagnose a small-file problem and propose a durable correction.", sampleAnswer: "Measure file distributions and partitions, correct tiny or overly frequent writes, compact appropriately, then prove query, cost, freshness, and correctness improvements." },
      { id: "check-07-02-08", points: 10, prompt: "Calculate duplication factor for 540 GB of physical storage representing 300 GB of unique authoritative data.", sampleAnswer: "540 ÷ 300 = 1.8 physical bytes per unique authoritative byte." },
      { id: "check-07-02-09", points: 10, prompt: "Design security tests for a shared table accessed through several engines.", sampleAnswer: "Test named identities for allowed and denied workspace, item, object, row, column, semantic, shortcut, source, export, and third-party access paths." },
      { id: "check-07-02-10", points: 10, prompt: "Specify an operational evidence pack for a OneLake data product.", sampleAnswer: "Include decision record, source and consumer contracts, namespace, owners, lineage, access tests, quality results, file inventory, growth, cost, query metrics, shortcut register, retention, alerts, recovery, and review date." },
    ],
  },

  researchExtension: {
    title: "Research Extension — Compare Warehouse, Lakehouse, and Hybrid Serving",
    description:
      "Hold one manufacturing decision and dataset constant, then compare a Warehouse-first, Lakehouse-first, and hybrid architecture.",
    researchQuestion:
      "Which design best balances T-SQL, Spark, transactions, open access, BI performance, security, duplication, operations, team skill, and total cost?",
    applicationOptions: [
      "Maintenance reliability and cost",
      "Factory quality and inspection images",
      "Supply-chain inventory and finance reconciliation",
      "Customer support text and service metrics",
      "AI feature, evaluation, and monitoring data",
    ],
    task:
      "Define decision criteria before prototyping, use current official documentation, test representative workloads and permissions, quantify storage and query behavior, and recommend one design with reversal conditions.",
    requiredEvidence: [
      "Requirements and weighted decision matrix",
      "Namespace, data-flow, security, and lineage diagrams",
      "Data contracts, table design, partitions, and shortcut register",
      "Known-result, transaction, permission, failure, freshness, and recovery tests",
      "Measured storage, file distribution, scans, latency, concurrency, and cost",
      "Risks, limitations, product-status date, owners, and decision-review date",
    ],
  },

  portfolioArtifact: {
    title: "Portfolio Artifact — OneLake Architecture Decision and Evidence Pack",
    description:
      "Create an employer-ready architecture for a multi-workload analytical estate that uses Fabric Lakehouse, Warehouse, OneLake, and shortcuts only where requirements justify them.",
    requiredSections: [
      "Business decisions, consumers, actions, languages, engines, latency, and service objectives",
      "Source inventory with format, volume, growth, region, sensitivity, owner, change, and availability",
      "Lake, Warehouse, Lakehouse, and OneLake decision matrix",
      "Tenant, domain, workspace, item, folder, table, and data-product namespace",
      "End-to-end architecture, lineage, trust boundaries, and data flows",
      "Copy, mirror, and shortcut decision record with dependency and reversal conditions",
      "Delta table schemas, grain, keys, partitions, file-layout, maintenance, retention, and recovery",
      "Least-privilege design and identity-based allowed and denied test evidence",
      "Storage growth, duplication, scan, latency, capacity, operations, egress, and cost evidence",
      "Python inventory artifacts, checksums, PASS manifest, README, limitations, and interview narrative",
    ],
  },

  growthIndicators: [
    { title: "Storage Architect", description: "You place data by workload evidence instead of defaulting to one technology." },
    { title: "OneLake Designer", description: "You create understandable namespaces, ownership boundaries, and sharing patterns across Fabric." },
    { title: "Reliability Engineer", description: "You design Delta tables, file layout, maintenance, validation, and recovery as operating contracts." },
    { title: "Governance Communicator", description: "You connect access, lineage, classification, cost, and service expectations to accountable owners." },
  ],

  reflection: [
    "Which store best matches the dominant development language and transaction requirement?",
    "Which files must remain in their original form?",
    "Where is the authoritative physical object?",
    "Which logical paths reference the same data?",
    "What business value justifies each physical copy?",
    "Which shortcut dependency could break the product?",
    "What proves a Delta table is complete, unique, consistent, and fresh?",
    "Does the partition design match measured filters and file sizes?",
    "Can every intended identity access exactly the approved rows and columns through every engine?",
    "How fast is physical storage growing, and why?",
    "Who owns schema changes, support, retention, and cost?",
    "Could another engineer recreate and operate the architecture from its evidence pack?",
  ],

  summary: [
    "A data lake stores diverse files at scale; governance determines whether it becomes a useful foundation or a data swamp.",
    "A Warehouse emphasizes structured relational analytics, T-SQL development, and controlled transaction behavior.",
    "A Lakehouse combines diverse files with reliable open Delta tables for engineering, SQL, BI, data science, and AI.",
    "OneLake is Fabric's unified logical data lake for an organization, not one unrestricted physical folder.",
    "Fabric items provision and organize storage in OneLake through accountable workspaces and paths.",
    "Lakehouse Files hold raw, unstructured, or non-Delta content; Tables hold managed Delta tables.",
    "Delta tables combine Parquet data files with a transaction log and committed table state.",
    "Warehouse and Lakehouse both use open Delta storage in OneLake but support different development and transaction experiences.",
    "Shortcuts reference internal or external targets and can reduce edge copies and staging latency.",
    "Deleting a shortcut does not delete its target; target changes can break the reference.",
    "Zero-copy is a decision, not a universal rule; resilience, history, region, performance, transformation, and cost can justify a copy.",
    "Partitioning must align with measured filtering and file-size behavior; high-cardinality overpartitioning creates overhead.",
    "Small-file correction requires both compaction and an improved upstream write pattern.",
    "Security must be tested across workspace, item, object, row, column, semantic, shortcut, source, export, and engine paths.",
    "Track storage growth, duplication, compression, file distribution, scan efficiency, freshness, latency, availability, and full cost.",
    "Every data product needs an owner, contract, lineage, classification, access policy, lifecycle, service expectation, and support path.",
    "The best architecture uses the fewest justified physical copies while meeting reliability, governance, performance, and consumer needs.",
  ],

  previousLesson: {
    id: "data-ai-m07-l01",
    moduleNumber: 7,
    slug: "etl-elt-batch-streaming-and-orchestration",
    title: "ETL, ELT, Batch, Streaming, and Orchestration",
  },
  nextLesson: null,

  lumineryGuidance: {
    message:
      "Do not ask where data can be stored; ask which authoritative physical object, logical path, table contract, access boundary, and operating evidence best serve the decision.",
    prompt:
      "Act as my senior Microsoft Fabric architect, OneLake designer, data engineer, Warehouse and Lakehouse reviewer, security lead, FinOps analyst, and portfolio mentor. Help me complete Module 7 Lesson 2 one verified gate at a time. Require business decisions, consumers, source inventory, data types, development languages, transaction needs, latency, authoritative copies, tenant and domain design, workspaces, items, files and tables, Delta contracts, shortcut decisions, least privilege, identity tests, lineage, retention, file layout, partitions, compaction, growth, duplication, scan efficiency, cost, monitoring, recovery, documentation, and interview narrative. Do not approve technology-first selection, unmanaged raw landing, duplicate copies without purpose, shortcuts without target ownership, high-cardinality partitions, compaction without write correction, workspace roles as the only security proof, stale documentation, invented product capabilities, or architecture without reproducible evidence.",
    coachingQuestions: [
      "Which decision, consumer, language, engine, and transaction requirement does this item serve?",
      "Where is the authoritative physical object and who owns its contract?",
      "Why is this a lake, Warehouse, Lakehouse, or hybrid design?",
      "What does OneLake unify here, and what boundaries remain separate?",
      "Why is this data copied, mirrored, or accessed through a shortcut?",
      "What happens when the target moves, schema changes, permission expires, or source is unavailable?",
      "What proves Delta-table quality, consistency, freshness, and recovery?",
      "What do file count, size distribution, partitions, scans, and query metrics show?",
      "Can every named identity access exactly the approved data through every intended engine?",
      "Can another engineer recreate and operate this architecture from the evidence pack?",
    ],
  },
};

export default lesson02;
