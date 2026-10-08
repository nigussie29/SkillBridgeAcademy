export const dataAiFoundationsCourse = {
  id: "data-ai-foundations",
  slug: "data-ai-foundations",
  title: "Data and Artificial Intelligence",
  subtitle: "Foundations to Production",
  description:
    "Build a complete data and AI skill set through decision-centered analysis, reliable data engineering, machine learning, generative AI, deployment, and responsible system design.",
  level: "Beginner to Professional",
  duration: "20-24 weeks",
  guidedHours: "180+ hours",
  lessonCount: 70,
  moduleCount: 10,
  projectCount: 10,
  workbookPages: 100,
  progress: 0,
  outcomes: [
    "Translate real organizational problems into measurable data and AI decisions.",
    "Analyze and validate data with Excel, SQL, Python, statistics, and visualization.",
    "Build decision-ready semantic models and Power BI reports with DAX.",
    "Engineer reliable Lakehouse pipelines with Microsoft Fabric and medallion architecture.",
    "Train, evaluate, interpret, and monitor machine-learning models without data leakage.",
    "Build grounded generative-AI and retrieval-augmented generation applications.",
    "Deploy tested AI services with FastAPI, Docker, MLflow, and responsible-AI controls.",
    "Present a professional portfolio with reproducible evidence of capability.",
  ],
  phases: [
    {
      id: "understand",
      title: "Understand",
      description: "Frame decisions, data, measurement, probability, and uncertainty.",
      modules: "Modules 1-2",
    },
    {
      id: "analyze",
      title: "Analyze",
      description: "Use Excel, SQL, Python, Power BI, and DAX to create trustworthy evidence.",
      modules: "Modules 3-6",
    },
    {
      id: "engineer",
      title: "Engineer and Predict",
      description: "Build Microsoft Fabric pipelines and validated machine-learning systems.",
      modules: "Modules 7-8",
    },
    {
      id: "operate",
      title: "Build and Operate AI",
      description: "Create generative-AI applications and deploy monitored, responsible systems.",
      modules: "Modules 9-10",
    },
  ],
  modules: [
    {
      id: 1,
      title: "Data and AI Foundations",
      phase: "understand",
      duration: "1-2 weeks",
      description:
        "Begin with the decision, define trustworthy success, and understand how data, analytics, machine learning, and AI work together.",
      skills: ["Problem framing", "KPIs", "Data types", "AI lifecycle", "Governance"],
      lessons: [
        {
          title: "Data, information, analytics, machine learning, and AI",
          slug: "data-information-analytics-machine-learning-and-ai",
          status: "available",
        },
        {
          title: "From organizational question to measurable decision",
          slug: "from-organizational-question-to-measurable-decision",
          status: "available",
        },
        {
          title: "Structured, semi-structured, and unstructured data",
          slug: "structured-semi-structured-and-unstructured-data",
          status: "available",
        },
        {
          title: "Units of analysis, features, targets, and actions",
          slug: "units-of-analysis-features-targets-and-actions",
          status: "available",
        },
        {
          title: "KPIs, baselines, constraints, and definitions of done",
          slug: "kpis-baselines-constraints-and-definitions-of-done",
          status: "available",
        },
        {
          title: "The end-to-end data and AI lifecycle",
          slug: "the-end-to-end-data-and-ai-lifecycle",
          status: "available",
        },
        {
          title: "Portfolio Project: One-page data and AI project charter",
          slug: "portfolio-project-one-page-data-and-ai-project-charter",
          status: "available",
        },
      ],
      project: "Decision-centered project charter",
    },
    {
      id: 2,
      title: "Mathematics, Probability, and Statistics",
      phase: "understand",
      duration: "2 weeks",
      description:
        "Use descriptive statistics, probability, inference, and causal caution to reason clearly under uncertainty.",
      skills: ["Distributions", "Probability", "Bayes", "Inference", "Experimentation"],
      lessons: [
        {
          title: "Center, spread, shape, and unusual observations",
          slug: "center-spread-shape-and-unusual-observations",
          status: "available",
        },
        {
          title: "Probability, conditional probability, and Bayes reasoning",
          slug: "probability-conditional-probability-and-bayes-reasoning",
          status: "available",
        },
        {
          title: "Sampling, bias, and representative evidence",
          slug: "sampling-bias-and-representative-evidence",
          status: "available",
        },
        {
          title: "Correlation, confounding, and causal claims",
          slug: "correlation-confounding-and-causal-claims",
          status: "available",
        },
        {
          title: "Confidence intervals, hypothesis tests, and effect size",
          slug: "confidence-intervals-hypothesis-tests-and-effect-size",
          status: "available",
        },
        {
          title: "Statistical visualization and interpretation lab",
          slug: "statistical-visualization-and-interpretation-lab",
          status: "available",
        },
        {
          title: "Portfolio Project: Reproducible statistical investigation",
          slug: "portfolio-project-reproducible-statistical-investigation",
          status: "available",
        },
      ],
      project: "Statistical investigation and findings brief",
    },
    {
      id: 3,
      title: "Excel and Power Query",
      phase: "analyze",
      duration: "2 weeks",
      description:
        "Create tidy, auditable analysis with Excel tables, validation, formulas, PivotTables, and repeatable Power Query transformations.",
      skills: ["Excel Tables", "XLOOKUP", "SUMIFS", "PivotTables", "Power Query"],
      lessons: [
        {
          title: "Tidy data and reliable workbook architecture",
          slug: "tidy-data-and-reliable-workbook-architecture",
          status: "available",
        },
        {
          title: "Validation, data types, and quality flags",
          slug: "validation-data-types-and-quality-flags",
          status: "available",
        },
        {
          title: "Logical, lookup, and conditional aggregation formulas",
          slug: "logical-lookup-and-conditional-aggregation-formulas",
          status: "available",
        },
        {
          title: "PivotTables, PivotCharts, and analytical summaries",
          slug: "pivottables-pivotcharts-and-analytical-summaries",
          status: "available",
        },
        {
          title: "Repeatable data cleaning with Power Query",
          slug: "repeatable-data-cleaning-with-power-query",
          status: "available",
        },
        {
          title: "Decision-focused Excel dashboard design",
          slug: "decision-focused-excel-dashboard-design",
          status: "available",
        },
        {
          title: "Portfolio Project: Refreshable business analysis workbook",
          slug: "portfolio-project-refreshable-business-analysis-workbook",
          status: "available",
        },
      ],
      project: "Refreshable Excel business dashboard",
    },
    {
      id: 4,
      title: "SQL and Data Modeling",
      phase: "analyze",
      duration: "2-3 weeks",
      description:
        "Query relational data precisely, protect row grain, use analytical SQL, and design normalized and dimensional models.",
      skills: ["SQL", "Joins", "CTEs", "Window functions", "Star schema"],
      lessons: [
        {
          title: "Tables, row grain, keys, and relationships",
          slug: "tables-row-grain-keys-and-relationships",
          status: "available",
        },
        {
          title: "Filtering, sorting, grouping, and aggregation",
          slug: "filtering-sorting-grouping-and-aggregation",
          status: "available",
        },
        {
          title: "Safe joins, unmatched records, and double counting",
          slug: "safe-joins-unmatched-records-and-double-counting",
          status: "available",
        },
        {
          title: "Subqueries, CTEs, and reusable query logic",
          slug: "subqueries-ctes-and-reusable-query-logic",
          status: "available",
        },
        {
          title: "Window functions for analytical questions",
          slug: "window-functions-for-analytical-questions",
          status: "available",
        },
        {
          title: "Normalization, facts, dimensions, and star schemas",
          slug: "normalization-facts-dimensions-and-star-schemas",
          status: "available",
        },
        {
          title: "Portfolio Project: Analytical SQL database and query pack",
          slug: "portfolio-project-analytical-sql-database-and-query-pack",
          status: "available",
        },
      ],
      project: "Star-schema database with analytical query portfolio",
    },
    {
      id: 5,
      title: "Python for Data Analysis",
      phase: "analyze",
      duration: "2-3 weeks",
      description:
        "Use Python and pandas for reproducible profiling, cleaning, transformation, analysis, visualization, and export.",
      skills: ["Python", "pandas", "NumPy", "Data cleaning", "Testing"],
      lessons: [
        {
          title: "Python types, control flow, functions, and modules",
          slug: "python-types-control-flow-functions-and-modules",
          status: "available",
        },
        {
          title: "NumPy arrays and vectorized computation",
          slug: "numpy-arrays-and-vectorized-computation",
          status: "available",
        },
        {
          title: "DataFrames, Series, indexing, and filtering",
          slug: "dataframes-series-indexing-and-filtering",
          status: "available",
        },
        {
          title: "Missing data, data types, duplicates, and validation",
          slug: "missing-data-data-types-duplicates-and-validation",
          status: "available",
        },
        {
          title: "Groupby, merge, reshape, and feature creation",
          slug: "groupby-merge-reshape-and-feature-creation",
          status: "available",
        },
        {
          title: "Exploratory analysis, visualization, and reproducibility",
          slug: "exploratory-analysis-visualization-and-reproducibility",
          status: "available",
        },
        {
          title: "Portfolio Project: Audited data-analysis notebook",
          slug: "portfolio-project-audited-data-analysis-notebook",
          status: "available",
        },
      ],
      project: "Reproducible Python data-analysis notebook",
    },
    {
      id: 6,
      title: "Visualization, Power BI, and DAX",
      phase: "analyze",
      duration: "2-3 weeks",
      description:
        "Build accessible decision intelligence with strong visual encoding, star-schema semantic models, DAX, and governed Power BI reports.",
      skills: ["Visualization", "Power BI", "DAX", "Semantic models", "RLS"],
      lessons: [
        {
          title: "Choosing charts by analytical purpose",
          slug: "choosing-charts-by-analytical-purpose",
          status: "available",
        },
        {
          title: "Visual hierarchy, accessibility, and honest communication",
          slug: "visual-hierarchy-accessibility-and-honest-communication",
          status: "available",
        },
        {
          title: "Power BI Star-Schema Semantic Modeling",
          slug: "power-bi-star-schema-semantic-modeling",
          status: "available",
        },
        {
          title: "Measures, Filter Context, Row Context, and CALCULATE",
          slug: "measures-filter-context-row-context-and-calculate",
          status: "available",
        },
        {
          title: "Time Intelligence and Performance Measures",
          slug: "time-intelligence-and-performance-measures",
          status: "available",
        },
        {
          title: "Drillthrough, Tooltips, Security, and Report Validation",
          slug: "drillthrough-tooltips-security-and-report-validation",
          status: "available",
        },
        {
          title: "Portfolio Project: Executive Power BI Decision System",
          slug: "portfolio-project-executive-power-bi-decision-system",
          status: "available",
        },
      ],
      project: "Three-page Power BI executive report",
    },
    {
      id: 7,
      title: "Data Engineering and Microsoft Fabric",
      phase: "engineer",
      duration: "2-3 weeks",
      description:
        "Design governed ingestion, transformation, Lakehouse, and serving workflows using Microsoft Fabric and medallion architecture.",
      skills: ["ETL/ELT", "Fabric", "Lakehouse", "Spark", "Data quality"],
      lessons: [
        {
          title: "ETL, ELT, Batch, Streaming, and Orchestration",
          slug: "etl-elt-batch-streaming-and-orchestration",
          status: "available",
        },
        {
          title: "Data Lakes, Warehouses, Lakehouses, and OneLake",
          slug: "data-lakes-warehouses-lakehouses-and-onelake",
          status: "available",
        },
        {
          title: "Bronze, Silver, and Gold Medallion Architecture",
          slug: "bronze-silver-and-gold-medallion-architecture",
          status: "available",
        },
        {
          title: "Fabric Pipelines, Dataflows Gen2, Notebooks, and Spark",
          slug: "fabric-pipelines-dataflows-gen2-notebooks-and-spark",
          status: "available",
        },
        "Delta tables, partitioning, idempotence, and reruns",
        "Quality contracts, lineage, monitoring, and cost",
        "Portfolio Project: End-to-end Fabric Lakehouse pipeline",
      ],
      project: "Governed Microsoft Fabric data pipeline",
    },
    {
      id: 8,
      title: "Machine Learning",
      phase: "engineer",
      duration: "3 weeks",
      description:
        "Frame predictive problems, build leakage-free pipelines, compare baselines and models, and choose thresholds from real decision costs.",
      skills: ["scikit-learn", "Regression", "Classification", "Evaluation", "Explainability"],
      lessons: [
        "Features, labels, baselines, and problem framing",
        "Training, validation, test sets, and cross-validation",
        "Preprocessing pipelines and leakage prevention",
        "Regression, logistic regression, and regularization",
        "Decision trees, random forests, and gradient boosting",
        "Metrics, calibration, thresholds, and error analysis",
        "Portfolio Project: Credit default or student-support model",
      ],
      project: "Evaluated machine-learning decision model",
    },
    {
      id: 9,
      title: "Deep Learning and Generative AI",
      phase: "operate",
      duration: "2-3 weeks",
      description:
        "Understand neural networks and transformers, then build a grounded retrieval-augmented generation application with citations and evaluation.",
      skills: ["Neural networks", "Transformers", "Embeddings", "RAG", "AI evaluation"],
      lessons: [
        "Neural networks, activations, loss, and gradient learning",
        "Deep learning, regularization, vision, and language",
        "Tokens, embeddings, attention, and transformers",
        "Prompt design, tools, context, and structured outputs",
        "RAG ingestion, chunking, retrieval, reranking, and citations",
        "Faithfulness, safety, latency, cost, and adversarial evaluation",
        "Portfolio Project: Grounded mathematics teaching assistant",
      ],
      project: "Cited retrieval-augmented generation assistant",
    },
    {
      id: 10,
      title: "Deployment, MLOps, and Responsible AI",
      phase: "operate",
      duration: "2-3 weeks",
      description:
        "Turn models into tested services, automate safe releases, monitor system behavior, and govern privacy, fairness, security, and human oversight.",
      skills: ["FastAPI", "Docker", "MLflow", "Monitoring", "Responsible AI"],
      lessons: [
        "Prediction APIs, typed contracts, and validation",
        "Docker, environments, secrets, and reproducible packaging",
        "MLflow experiments, model registry, and versioning",
        "Automated tests, CI/CD, staged release, and rollback",
        "Service, data, model, business, and fairness monitoring",
        "Privacy, security, explainability, human review, and incident response",
        "Portfolio Project: Production-ready monitored AI service",
      ],
      project: "Deployed, monitored, and documented AI service",
    },
  ],
  capstone: {
    title: "Credit Default Risk Decision System",
    description:
      "Integrate Excel or source files, SQL or a Fabric Lakehouse, Python feature engineering, logistic regression and boosting, MLflow, FastAPI, Docker, Power BI monitoring, and responsible human review.",
    milestones: [
      "Project charter, decision workflow, risk assessment, and architecture",
      "Validated Bronze, Silver, and Gold data pipeline with a documented star schema",
      "Exploratory analysis and a Power BI decision-and-monitoring dashboard",
      "Leakage-free baseline and model comparison with calibrated probabilities",
      "Capacity-aware threshold, subgroup evaluation, and model card",
      "Tested FastAPI and Docker service with staged release and rollback plan",
      "Portfolio presentation with reproducible evidence and limitations",
    ],
  },
  completionRequirements: [
    "Complete all 10 modules and mastery checks.",
    "Submit the 10 chapter portfolio projects.",
    "Pass the final assessment with at least 80%.",
    "Complete and present the integrated capstone.",
    "Document limitations, responsible-use controls, and next steps.",
  ],
};

export default dataAiFoundationsCourse;
