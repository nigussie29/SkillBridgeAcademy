const lesson03 = {
  id: "data-ai-m01-l03",
  courseId: "data-ai-foundations",
  moduleId: "data-ai-foundations-module-01",
  moduleNumber: 1,
  lessonNumber: 3,
  slug: "structured-semi-structured-and-unstructured-data",
  title: "Structured, Semi-Structured, and Unstructured Data",
  shortTitle: "Forms of Data",
  subtitle:
    "Recognize how information is organized, validate its meaning, and choose a responsible path from raw evidence to analysis-ready data.",
  status: "available",
  duration: "105-120 minutes",
  level: "Beginner to Professional",

  essentialQuestion:
    "How does the structure of data affect the way we collect, store, validate, analyze, and use it in trustworthy AI systems?",
  bigIdea:
    "Structured, semi-structured, and unstructured data differ in how explicitly they express organization. Structure is not the same as quality: every form still needs context, metadata, validation, governance, and a clear connection to the decision it supports.",

  whyThisLessonExists: {
    title: "Why Data Form Matters",
    introduction:
      "Real projects rarely begin with one perfect table. A single decision may depend on database rows, JSON events, PDF policies, email messages, images, audio, and human notes. Each form carries useful evidence, but each requires different tools and controls.",
    centralProblem:
      "If a team treats every source as if it were a clean table, it may lose meaning, misread fields, expose sensitive information, duplicate records, or build an AI system from evidence that cannot be reliably reproduced.",
    purpose:
      "You will learn to classify data by its organization, inspect its schema and metadata, identify quality risks, and design a practical transformation path that preserves meaning from source to decision.",
  },

  problemFirst: {
    title: "Opening Investigation: One Student, Five Sources",
    scenario:
      "A school wants to decide which students should receive an academic-support check-in next week. Evidence arrives from a student-information database, a learning-platform JSON event stream, teacher email, scanned attendance forms, and recorded tutoring sessions.",
    questions: [
      "Which sources are structured, semi-structured, or unstructured, and what evidence supports each classification?",
      "What is the unit represented by one row, event, document, image, or recording?",
      "Which fields or meanings are explicit, and which must be inferred or extracted?",
      "What could be lost if all five sources were forced immediately into one flat table?",
      "Which sources are necessary for the decision, and which may create more privacy risk than decision value?",
    ],
    expectedInsight:
      "A responsible pipeline does not begin by collecting everything. It begins with the decision, selects the minimum necessary evidence, identifies each source's structure and grain, preserves lineage, and validates every transformation.",
  },

  learningObjectives: [
    "Define structured, semi-structured, and unstructured data in precise language.",
    "Classify common sources by examining schema, records, fields, metadata, and modality.",
    "Explain why structure, format, storage system, and data quality are different concepts.",
    "Identify row grain or unit of analysis before combining sources.",
    "Compare schema-on-write and schema-on-read approaches and their tradeoffs.",
    "Design a transformation path from a raw source to an analysis-ready table.",
    "Evaluate completeness, validity, parsing success, privacy, and lineage risks.",
    "Extend a decision-centered project charter with a governed data-source inventory.",
  ],

  prerequisiteKnowledge: [
    "Lesson 1: the data-to-decision chain",
    "Lesson 2: decision owner, action, timing, outcome, and evidence cutoff",
    "Basic familiarity with rows, columns, files, folders, and web applications",
    "Ability to distinguish an observation from an interpretation",
  ],

  vocabulary: [
    {
      term: "Structured data",
      definition:
        "Data organized according to an explicit, stable schema, commonly represented as rows and typed columns in a relational table.",
    },
    {
      term: "Semi-structured data",
      definition:
        "Data that uses tags, keys, nesting, or delimiters to express organization without requiring every record to share one rigid tabular shape.",
    },
    {
      term: "Unstructured data",
      definition:
        "Data whose primary meaning is not expressed through a predefined row-and-column schema, such as natural-language text, images, audio, and video.",
    },
    {
      term: "Schema",
      definition:
        "A formal description of fields, names, data types, relationships, required values, and other rules that define valid data.",
    },
    {
      term: "Record",
      definition:
        "One stored instance of an entity, event, measurement, or document representation.",
    },
    {
      term: "Field",
      definition:
        "A named attribute within a record, such as customer_id, event_time, or temperature_celsius.",
    },
    {
      term: "Metadata",
      definition:
        "Information that describes data, including source, owner, timestamp, format, units, permissions, version, and transformation history.",
    },
    {
      term: "Modality",
      definition:
        "The form through which information is represented, such as text, image, audio, video, numerical measurement, or spatial data.",
    },
    {
      term: "Parsing",
      definition:
        "Reading a representation according to rules so that its components can be interpreted and processed.",
    },
    {
      term: "Serialization",
      definition:
        "Encoding data into a storable or transferable representation such as JSON, XML, CSV, or Parquet.",
    },
    {
      term: "Schema-on-write",
      definition:
        "Validating and organizing data against a defined schema before it is stored for use.",
    },
    {
      term: "Schema-on-read",
      definition:
        "Storing data in a flexible form and applying an interpretation when it is read for a particular use.",
    },
    {
      term: "Data lineage",
      definition:
        "The traceable history of where data originated, how it changed, and where it was used.",
    },
    {
      term: "Data grain",
      definition:
        "The exact meaning of one record or row, such as one transaction, one student per week, or one sensor reading per second.",
    },
    {
      term: "Data contract",
      definition:
        "An agreed specification for a data product's schema, meaning, ownership, quality expectations, and change process.",
    },
    {
      term: "Extraction",
      definition:
        "Converting selected information from a source into fields or representations that downstream tools can use.",
    },
  ],

  formulas: [
    {
      id: "data-completeness",
      name: "Required-field completeness",
      formula: "Completeness = non-missing required values / expected required values",
      meaning:
        "Measures whether the required fields needed for a specific use are present. A dataset can be large and still be incomplete for the decision.",
      requirement:
        "Define required fields and the eligible population before calculating the rate.",
    },
    {
      id: "parse-success",
      name: "Parse success rate",
      formula: "Parse success rate = successfully parsed records / attempted records",
      meaning:
        "Shows how much semi-structured input could be interpreted according to the expected rules.",
      requirement:
        "Quarantine and investigate failures; never silently discard them.",
    },
    {
      id: "schema-conformance",
      name: "Schema conformance rate",
      formula: "Conformance = valid records / evaluated records",
      meaning:
        "Summarizes whether records satisfy required types, fields, ranges, and structural rules.",
      requirement:
        "Version the schema so results can be reproduced after changes.",
    },
    {
      id: "storage-estimate",
      name: "Approximate data volume",
      formula: "Volume ≈ record count × average record size",
      meaning:
        "Provides a planning estimate for storage, transfer, and processing. Compression and file overhead affect actual volume.",
      requirement:
        "Measure representative records and state whether values are compressed or uncompressed.",
    },
  ],

  workedExamples: [
    {
      id: "example-03-01",
      title: "Classify a mixed school-data collection",
      problem:
        "Classify a relational attendance table, a JSON learning event, a teacher narrative, and a classroom video. State why each classification is useful.",
      solutionSteps: [
        "The attendance table has defined columns, types, keys, and one record per attendance event; classify it as structured.",
        "The JSON event has named keys and nested objects, but different event types may contain different fields; classify it as semi-structured.",
        "The teacher narrative expresses meaning primarily through natural language rather than fixed fields; classify it as unstructured text.",
        "The video contains visual and audio modalities whose meaning must be interpreted or extracted; classify it as unstructured multimedia.",
        "Record the schema, source, grain, owner, sensitivity, and intended use for every source.",
      ],
      answer:
        "Structured: attendance table. Semi-structured: JSON event. Unstructured: narrative and video. The labels guide ingestion and validation, but do not determine quality or permission to use the data.",
      interpretation:
        "Classification is a starting point for engineering decisions. It does not prove that a source is accurate, ethical, representative, or useful.",
    },
    {
      id: "example-03-02",
      title: "Flatten nested JSON without losing grain",
      problem:
        "An order JSON document contains one order, one customer object, and an items array with three products. A team flattens it into three rows. What is the new grain and what risk appears?",
      solutionSteps: [
        "Identify the original document grain: one order document.",
        "Expanding the items array creates one row per order item, not one row per order.",
        "Order-level values such as order_total repeat across the three rows.",
        "Summing the repeated order_total would triple count revenue.",
        "Separate an orders table from an order_items table and join them through order_id when needed.",
      ],
      answer:
        "The flattened table has one row per order item. Repeated order-level measures can cause double counting unless grain is documented and aggregation is controlled.",
      interpretation:
        "Transforming structure changes analytical meaning. Grain must be declared before metrics are calculated.",
    },
    {
      id: "example-03-03",
      title: "Turn documents into governed analytical evidence",
      problem:
        "A company wants to analyze 4,000 support emails. Design a responsible path from raw text to a decision-ready summary.",
      solutionSteps: [
        "Confirm the decision, minimum necessary fields, retention rules, and authorized users.",
        "Preserve the original message identifier and source timestamp for lineage.",
        "Remove signatures, quoted history, secrets, and unnecessary personal information according to policy.",
        "Extract or label controlled fields such as issue category, channel, resolution status, and review confidence.",
        "Validate a representative sample with trained human reviewers and report disagreement.",
        "Aggregate only after confirming unit, field definitions, missingness, and extraction quality.",
      ],
      answer:
        "The output is a governed analytical table linked to authorized source records, documented extraction rules, quality evidence, and a decision-specific use.",
      interpretation:
        "Text does not become trustworthy merely because an AI model converted it into columns. The extraction process itself must be evaluated.",
    },
    {
      id: "example-03-04",
      title: "Choose schema-on-write or schema-on-read",
      problem:
        "Compare a regulated payment transaction feed with exploratory device logs. Which schema strategy is more appropriate for each?",
      solutionSteps: [
        "Payment fields have strict operational meanings, legal controls, and downstream dependencies.",
        "Validate the transaction feed before acceptance using a versioned schema-on-write contract.",
        "Device logs may evolve rapidly and contain event-specific attributes useful for later investigation.",
        "Retain the raw log representation and apply a documented schema-on-read for each approved analysis.",
        "Add minimum ingestion controls to both approaches, including source identity, timestamps, access, and lineage.",
      ],
      answer:
        "Use stronger schema-on-write controls for the payment feed and a governed schema-on-read approach for evolving exploratory logs.",
      interpretation:
        "The choice is not absolute. Many modern platforms keep immutable raw data while publishing validated structured products for dependable use.",
    },
    {
      id: "example-03-05",
      title: "Calculate data-quality indicators",
      problem:
        "A pipeline attempts to parse 2,000 events. It parses 1,940; 1,900 satisfy the required schema; and 1,824 contain every required decision field. Calculate three rates.",
      solutionSteps: [
        "Parse success = 1,940 / 2,000 = 0.97 or 97%.",
        "Schema conformance among parsed records = 1,900 / 1,940 ≈ 97.94%.",
        "Decision-field completeness among conforming records = 1,824 / 1,900 = 96%.",
        "Keep the denominators explicit because each rate answers a different question.",
      ],
      answer:
        "Parse success: 97%. Schema conformance: approximately 97.94%. Required-field completeness: 96%.",
      interpretation:
        "A single quality percentage can hide where failure occurs. Report the pipeline stages separately and investigate rejected records.",
    },
  ],

  interactiveExploration: {
    title: "Data-Source Structure Audit",
    description:
      "Inspect a small collection of familiar sources: a spreadsheet, a CSV file, a JSON response, a web page, a PDF, an image, and an audio clip. The goal is to discover how structure is expressed—not simply to assign labels.",
    instructions: [
      "Create one inventory row for each source and record its owner, format, approximate size, sensitivity, and intended decision use.",
      "Describe what one record or unit means. If no natural record exists, describe the document or media unit.",
      "List explicit structure such as columns, keys, tags, headings, timestamps, or file metadata.",
      "Classify the source and justify the classification using observable evidence.",
      "Identify the parser, extraction process, or human interpretation needed to use it.",
      "Name at least two validation checks and one risk for each source.",
      "Decide whether the source is necessary, optional, or inappropriate for the chosen decision.",
    ],
    investigationQuestions: [
      "Can the same information be stored in more than one structural form?",
      "Which sources preserve context well, and which become ambiguous when separated from metadata?",
      "Where could an automated extraction invent, omit, or misclassify information?",
      "Which source has the greatest privacy risk relative to its decision value?",
      "What must be retained so another analyst can reproduce the transformation?",
    ],
    expectedDiscovery:
      "Formats are containers, while structure describes how organization and meaning are represented. The same source can combine forms, and the useful classification depends on the unit being analyzed and the intended use.",
  },

  realWorldApplications: [
    {
      field: "Education",
      application:
        "Combine enrollment tables, learning-platform events, and carefully governed student work to support timely instruction without treating sensitive narratives as unrestricted data.",
    },
    {
      field: "Healthcare",
      application:
        "Connect coded clinical records with physician notes and medical images while preserving patient consent, access controls, provenance, and qualified review.",
    },
    {
      field: "Finance",
      application:
        "Validate structured transactions, parse semi-structured messages, and inspect supporting documents for fraud or compliance workflows with auditable decisions.",
    },
    {
      field: "Retail and Supply Chain",
      application:
        "Integrate product tables, event logs, invoices, supplier documents, and images to improve inventory decisions and trace operational exceptions.",
    },
    {
      field: "Manufacturing and Robotics",
      application:
        "Use typed sensor measurements, nested device messages, maintenance notes, images, and video to monitor equipment and investigate failures.",
    },
    {
      field: "Public Service",
      application:
        "Publish structured open data while processing forms and public comments with transparent rules, accessibility, privacy protection, and appeal pathways.",
    },
  ],

  aiConnection: {
    title: "How AI Works Across Data Modalities",
    explanation:
      "Machine-learning systems require numerical representations even when the source is text, image, audio, or video. A complete AI pipeline therefore includes ingestion, parsing, labeling or representation learning, quality evaluation, model development, decision integration, and monitoring.",
    example:
      "A retrieval-augmented assistant may ingest PDF policies, extract text and metadata, split the text into passages, create vector embeddings, retrieve relevant passages, and generate an answer with citations. Failure at any structural step can produce a confident but unsupported answer.",
    uses: [
      "Natural-language processing",
      "Computer vision",
      "Speech recognition",
      "Multimodal AI",
      "Document intelligence",
      "Retrieval-augmented generation",
    ],
    caution:
      "Converting unstructured data into embeddings or model outputs does not remove privacy, copyright, bias, consent, or retention obligations. Derived representations can still expose sensitive information and must remain governed.",
    reflectionQuestion:
      "If an AI model extracts a field from a document with 92% accuracy, what additional evidence and controls are required before that field can influence a high-stakes decision?",
  },

  pythonLab: {
    title: "Inspect Three Data Forms with Python",
    objective:
      "Represent a table, a nested JSON event, and a text document; inspect their organization; then create a small validated summary without confusing extraction with truth.",
    code: `import json
import pandas as pd

# Structured: one row per student-week
weekly = pd.DataFrame([
    {"student_id": "S101", "week": "2026-W39", "attendance_rate": 0.92},
    {"student_id": "S102", "week": "2026-W39", "attendance_rate": None},
])

# Semi-structured: fields may be nested
event_text = '''{
  "event_id": "E9001",
  "event_type": "assignment_submitted",
  "student": {"id": "S101"},
  "occurred_at": "2026-09-27T19:42:00Z",
  "details": {"assignment_id": "A14", "attempt": 2}
}'''
event = json.loads(event_text)

# Unstructured: meaning is expressed through natural language
note = "Student asked for help understanding the assignment instructions."

print("Table schema:")
print(weekly.dtypes)
print("Required-field completeness:", weekly["attendance_rate"].notna().mean())

print("\\nJSON keys:", list(event.keys()))
print("Nested student id:", event["student"]["id"])

print("\\nText length:", len(note))
print("Contains help keyword:", "help" in note.lower())`,
    questions: [
      "What is the grain of the DataFrame, and where is that meaning documented?",
      "Why is the JSON event semi-structured even though Python can access its fields directly?",
      "Does the keyword check prove what support the student needs? Why or why not?",
      "What validation should occur before combining the event with the weekly table?",
      "Which identifiers or text should be protected in a real environment?",
    ],
    reflectionQuestions: [
      "What assumptions did the code make about field names and nesting?",
      "How would you record rejected JSON events instead of silently losing them?",
      "What would a human reviewer need to validate an AI-generated category from the note?",
    ],
    extension:
      "Add a second JSON event with a different event_type and missing details. Write a validation function that returns accepted and quarantined records with a reason for every rejection.",
  },

  guidedPractice: [
    {
      id: "gp-03-01",
      question:
        "A CSV file has columns but mixes dates, names, and comments in one field. Is it structured and high quality?",
      answer:
        "It is structurally tabular, but it is not necessarily high quality. Structure describes organization; quality depends on meaning, validity, consistency, completeness, and fitness for use.",
    },
    {
      id: "gp-03-02",
      question:
        "Classify an API response containing nested JSON objects and optional arrays. State one validation check.",
      answer:
        "It is semi-structured. Validate required keys, accepted types, schema version, array grain, and timestamp format before use.",
    },
    {
      id: "gp-03-03",
      question:
        "A document-extraction service places invoice_total into a database column. Is the value now structured and trustworthy?",
      answer:
        "The output is structured, but trust depends on extraction accuracy, document quality, field definition, currency, duplicate control, lineage, and review of uncertain cases.",
    },
    {
      id: "gp-03-04",
      question:
        "An orders table contains 500 rows and an items table contains 1,400 rows. State the grain of each table.",
      answer:
        "Orders: one row per order. Items: one row per item line within an order. The different grains must be respected when joining and aggregating.",
    },
    {
      id: "gp-03-05",
      question:
        "A parser accepts 855 of 900 log events. Calculate the parse success rate and describe the next action.",
      answer:
        "855 / 900 = 95%. Quarantine the 45 failures, record reasons, inspect patterns, and decide whether the schema or source must be corrected.",
    },
    {
      id: "gp-03-06",
      question:
        "Give one reason not to use all available audio recordings in a customer-service model.",
      answer:
        "The recordings may lack appropriate consent, contain unnecessary sensitive information, create retention risk, or add little decision value relative to safer sources.",
    },
  ],

  independentPractice: [
    {
      id: "ip-03-01",
      difficulty: "Foundational",
      question:
        "Classify each source and justify your answer: SQL customer table, XML configuration file, free-response survey comment, security-camera video.",
      sampleAnswer:
        "Structured: SQL table. Semi-structured: XML. Unstructured text: survey comment. Unstructured multimedia: video. The justification should identify explicit schema, tags, or modality.",
    },
    {
      id: "ip-03-02",
      difficulty: "Foundational",
      question:
        "Explain why JSON is not automatically better than a relational table.",
      sampleAnswer:
        "JSON supports flexible nesting and exchange, while relational tables support explicit types, constraints, relationships, and dependable querying. The better representation depends on meaning, change rate, access patterns, and governance needs.",
    },
    {
      id: "ip-03-03",
      difficulty: "Applied",
      question:
        "Design a minimum metadata record for a collection of scanned forms.",
      sampleAnswer:
        "Include source identifier, form type, owner, creation and ingestion time, page count, language, sensitivity, consent or legal basis, retention rule, file hash, extraction version, review status, and lineage link.",
    },
    {
      id: "ip-03-04",
      difficulty: "Applied",
      question:
        "Describe a safe transformation from nested web events to a daily user-level table.",
      sampleAnswer:
        "Validate and version events, preserve raw records, declare event grain, deduplicate by event_id, normalize timestamps, expand approved fields, aggregate only events available before the cutoff, test counts, and publish lineage and quality metrics.",
    },
    {
      id: "ip-03-05",
      difficulty: "Analytical",
      question:
        "A source is 99% complete but systematically misses records from rural locations. Explain why the completeness rate is insufficient.",
      sampleAnswer:
        "Overall completeness hides subgroup coverage. The missing 1% is not random and may distort decisions for rural communities. Evaluate representation and missingness by relevant groups and source processes.",
    },
    {
      id: "ip-03-06",
      difficulty: "Advanced",
      question:
        "Compare schema-on-write and schema-on-read for an enterprise lakehouse. Recommend a hybrid design.",
      sampleAnswer:
        "Retain immutable, access-controlled raw inputs for lineage and reprocessing; validate and standardize trusted silver products; publish decision-ready gold tables under explicit contracts. Apply minimum ingestion rules even in the raw layer.",
    },
    {
      id: "ip-03-07",
      difficulty: "Advanced",
      question:
        "Propose an evaluation plan for an AI model that extracts diagnosis codes from clinical notes.",
      sampleAnswer:
        "Use authorized representative data; clinician-defined labels; train-validation-test separation; field-level precision and recall; subgroup and document-quality analysis; uncertainty thresholds; human review; privacy controls; error logging; and prospective monitoring before decision use.",
    },
  ],

  commonMistakes: [
    {
      mistake: "Calling every spreadsheet structured and therefore trustworthy.",
      correction:
        "Inspect schema consistency, field meaning, grain, formulas, merged cells, missingness, and change history. Tabular appearance is not a quality guarantee.",
    },
    {
      mistake: "Treating file format and data structure as identical.",
      correction:
        "A PDF can contain a table, narrative, image, and metadata. Classify the information unit and intended use, not only the filename extension.",
    },
    {
      mistake: "Flattening nested data without documenting the new grain.",
      correction:
        "State what one output row represents and test whether parent-level values repeat after arrays are expanded.",
    },
    {
      mistake: "Dropping malformed records silently.",
      correction:
        "Quarantine failures with reason codes, source identifiers, timestamps, and counts so the loss is visible and correctable.",
    },
    {
      mistake: "Assuming AI-extracted fields are facts.",
      correction:
        "Measure extraction performance, retain provenance and confidence, review uncertain cases, and validate decision impact.",
    },
    {
      mistake: "Collecting unstructured data simply because storage is inexpensive.",
      correction:
        "Apply data minimization. Collect only evidence with a defined purpose, authority, retention rule, and risk control.",
    },
    {
      mistake: "Ignoring schema evolution.",
      correction:
        "Version schemas and contracts, test compatibility, communicate changes, and monitor unexpected fields or missing required fields.",
    },
  ],

  discussionQuestions: [
    "Is any real-world data completely unstructured, or does context always supply some structure?",
    "When should a team preserve a rich original source instead of immediately converting it into columns?",
    "Who should be responsible when an automated extraction error harms a decision?",
    "How can data minimization improve both privacy and model quality?",
    "What evidence would justify using sensitive unstructured data instead of a safer structured source?",
  ],

  formativeAssessment: {
    totalPoints: 25,
    passingScore: 20,
    questions: [
      {
        id: "check-03-01",
        type: "classification",
        points: 5,
        prompt:
          "Define the three forms of data and give one original example of each.",
        sampleAnswer:
          "Structured data follows an explicit stable schema, such as a typed transactions table. Semi-structured data expresses organization through keys or tags, such as nested JSON events. Unstructured data expresses primary meaning outside a fixed row-column schema, such as recorded interviews.",
      },
      {
        id: "check-03-02",
        type: "reasoning",
        points: 5,
        prompt:
          "Explain why a structured dataset may be less useful than an unstructured source for a particular decision.",
        sampleAnswer:
          "The structured dataset may omit the relevant evidence, use the wrong grain, contain biased coverage, or measure a weak proxy. A governed narrative or image may contain information more directly related to the decision, although it requires careful extraction and evaluation.",
      },
      {
        id: "check-03-03",
        type: "calculation",
        points: 5,
        prompt:
          "A system parses 4,750 of 5,000 documents, and 4,560 parsed documents conform to the expected schema. Calculate parse success and conformance among parsed documents.",
        answer:
          "Parse success = 4,750 / 5,000 = 95%. Conformance among parsed documents = 4,560 / 4,750 = 96%.",
      },
      {
        id: "check-03-04",
        type: "application",
        points: 5,
        prompt:
          "List five controls for converting customer emails into an issue-category table.",
        sampleAnswer:
          "Purpose and access approval; data minimization and redaction; source identifiers and lineage; documented extraction rules or model version; representative accuracy review; uncertainty thresholds; error quarantine; retention limits; and ongoing monitoring. Any five well-justified controls earn full credit.",
      },
      {
        id: "check-03-05",
        type: "synthesis",
        points: 5,
        prompt:
          "Design a three-layer path from raw mixed data to a decision-ready product and state the purpose of each layer.",
        sampleAnswer:
          "Raw layer: preserve authorized source evidence and lineage. Validated layer: parse, standardize, deduplicate, type, and quality-check reusable data. Decision layer: publish documented measures and features at the required grain for the approved decision, with access and monitoring controls.",
      },
    ],
  },

  researchExtension: {
    title: "Audit a Public Multimodal Dataset",
    researchQuestion:
      "Does a public dataset provide enough structural, ethical, and quality documentation for another team to use it responsibly?",
    applicationOptions: [
      "Government open-data portal",
      "Public machine-learning benchmark",
      "Satellite or geographic dataset",
      "Document or text corpus",
      "Image, audio, or video collection",
    ],
    task:
      "Choose one public dataset. Analyze its modalities, files, schemas, grain, labels, metadata, collection process, population, license, consent or legal basis, missingness, known limitations, and intended uses. Separate documented facts from your inferences and recommend proceed, revise, or do not use for one specific decision.",
    requiredEvidence: [
      "Links to the dataset and its official documentation",
      "A source inventory with classification and grain",
      "At least three reproducible quality checks",
      "A discussion of representation, privacy, licensing, and misuse risk",
      "A justified readiness recommendation",
    ],
  },

  portfolioArtifact: {
    title: "Data-Source Inventory and Readiness Map",
    description:
      "Extend the project charter from Lessons 1 and 2 by documenting the minimum evidence required for your decision and how each source will become trustworthy, analysis-ready data.",
    requiredSections: [
      "Decision statement and evidence cutoff",
      "Source name, owner, access authority, and business meaning",
      "Data form, file or system format, modality, and grain",
      "Schema, required fields, identifiers, units, and relationships",
      "Parsing or extraction method with version and lineage",
      "Quality checks, rejection handling, and acceptance thresholds",
      "Privacy, security, retention, fairness, and licensing controls",
      "Required transformation from raw source to decision-ready product",
      "Proceed, revise, exclude, or investigate recommendation for each source",
    ],
    requiredEvidence: [
      "At least three differently structured sources",
      "One worked grain or nested-data example",
      "One calculated quality indicator with a named denominator",
      "One source excluded or limited because risk exceeds decision value",
      "A simple lineage diagram from source to decision",
    ],
  },

  growthIndicators: [
    {
      title: "Structure Interpreter",
      description:
        "You classify sources by observable organization and explain what the classification changes operationally.",
    },
    {
      title: "Grain Guardian",
      description:
        "You state what one record represents and prevent duplicate counting when structures are transformed.",
    },
    {
      title: "Quality Investigator",
      description:
        "You separate parsing, schema conformance, completeness, representation, and fitness for use.",
    },
    {
      title: "Responsible Data Designer",
      description:
        "You preserve lineage, minimize sensitive collection, and require evidence before extracted fields influence decisions.",
    },
  ],

  reflection: [
    "Which data form did you previously misunderstand, and what is your more precise definition now?",
    "Where could changing the grain create a convincing but wrong result?",
    "What unstructured source would you exclude from your project, and why?",
    "Which quality indicator is most important for your decision and what denominator will you use?",
    "How will another analyst reproduce your transformation six months from now?",
  ],

  summary: [
    "Structured data uses an explicit schema; semi-structured data expresses flexible organization through keys, tags, nesting, or delimiters; unstructured data expresses meaning outside a fixed tabular schema.",
    "Structure, file format, storage technology, data quality, and fitness for use are different concepts.",
    "One source can contain several data forms and modalities.",
    "Data grain must be declared before joining, flattening, or aggregating records.",
    "Schema-on-write emphasizes early control, while schema-on-read emphasizes flexible interpretation; governed systems often combine both.",
    "Metadata and lineage preserve context, ownership, meaning, and reproducibility.",
    "Parsing or AI extraction creates representations—not guaranteed truth.",
    "Quality should be measured at each stage with explicit denominators and visible rejected records.",
    "Data minimization reduces privacy, security, legal, and analytical risk.",
    "The right source is the minimum trustworthy evidence needed for the defined decision.",
  ],

  previousLesson: {
    id: "data-ai-m01-l02",
    slug: "from-organizational-question-to-measurable-decision",
    title: "From organizational question to measurable decision",
  },
  nextLesson: null,

  lumineryGuidance: {
    message:
      "Do not classify from the filename alone. Ask what one unit means, where the organization is expressed, which context could be lost, and what must be validated before the evidence supports a decision.",
    prompt:
      "Help me audit this data source. Ask me about the decision, source owner, structure, grain, schema, metadata, sensitive content, extraction steps, quality checks, lineage, and rejection process. Do not assume the source is appropriate merely because it is available.",
    coachingQuestions: [
      "What does one record, event, document, image, or recording represent?",
      "Which structure is explicit and which meaning must be inferred?",
      "What evidence would be lost during flattening or extraction?",
      "Which records fail, and how will failures remain visible?",
      "Is this the minimum necessary evidence for the decision?",
    ],
  },
};

export default lesson03;
