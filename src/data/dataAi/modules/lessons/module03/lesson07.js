const lesson07 = {
  id: "data-ai-m03-l07",
  courseId: "data-ai-foundations",
  moduleId: "data-ai-foundations-module-03",
  moduleNumber: 3,
  lessonNumber: 7,
  slug: "portfolio-project-refreshable-business-analysis-workbook",
  title: "Portfolio Project: Refreshable Business Analysis Workbook",
  shortTitle: "Refreshable Business Analysis Workbook",
  subtitle:
    "Integrate governed Excel Tables, validation, formulas, PivotTables, Power Query, dashboard design, quality controls, and decision communication into one professional portfolio project.",
  status: "available",
  duration: "6–8 hours",
  level: "Beginner to Professional",

  essentialQuestion:
    "Can another analyst add a new monthly file, refresh the workbook, verify its controls, understand every KPI, and make a responsible decision without rebuilding the analysis?",
  bigIdea:
    "A portfolio-quality workbook is a small analytical product: it has a clear decision, governed inputs, repeatable transformations, tested measures, visible context, exception handling, documentation, and evidence that the result survives refresh and review.",

  whyThisLessonExists: {
    title: "Your Workbook Should Demonstrate a Complete Analytical System",
    introduction:
      "Employers and stakeholders need more than isolated formulas or attractive screenshots. They need evidence that you can translate an ambiguous business request into a maintainable workflow that protects source data, applies defensible rules, produces useful analysis, survives changed inputs, and communicates an accountable next action.",
    centralProblem:
      "Many portfolio workbooks depend on copied data, hidden formulas, manual filters, undocumented cleaning, disconnected charts, and a single perfect sample file. They may look impressive but fail when a new month, category, missing key, duplicate record, or changed schema arrives.",
    purpose:
      "This capstone integrates all six Module 3 lessons. You will design a source contract, build a layered workbook, profile and validate records, create a refreshable Power Query pipeline, calculate governed measures, build PivotTables and a decision dashboard, retain exceptions, reconcile outcomes, test a changed input, and package the work for technical and executive review.",
  },

  problemFirst: {
    title: "Capstone Brief: Build the Maintenance Reliability Command Workbook",
    scenario:
      "A manufacturer operates robots across Plants A, B, and C. Each plant exports monthly work orders, while separate tables define robot attributes, fault categories, service targets, and operating exposure. Leadership wants a refreshable Excel workbook that identifies reliability deterioration, compares normalized performance, reveals concentrated faults, tracks data quality, and assigns corrective actions. The next file may contain new categories, missing keys, duplicate work orders, mixed types, or an incomplete period.",
    questions: [
      "Who will use the workbook, what recurring decision will they make, and what actions are available?",
      "What does one row represent in each source, staging, exception, and published table?",
      "Which files, columns, types, keys, categories, and periods form the source contract?",
      "Which defects can be corrected automatically and which require REVIEW or REJECT outcomes?",
      "Which measures need exposure, distinct counts, targets, period comparisons, or guardrails?",
      "How will Append, Merge, formulas, PivotTables, and dashboard filters preserve meaning?",
      "What evidence proves that source rows, exceptions, additive totals, and dashboard KPIs reconcile?",
      "How will the portfolio package explain the result, limitations, and refresh process to a reviewer?",
    ],
    expectedInsight:
      "The strongest project is not the one with the most charts. It is the one that makes its decision logic, grain, transformations, exceptions, measures, filter context, refresh behavior, limitations, and action trail easy to inspect and reproduce.",
  },

  learningObjectives: [
    "Translate a stakeholder request into a dashboard brief, source contract, KPI dictionary, acceptance criteria, and delivery plan.",
    "Design a layered Excel architecture separating instructions, parameters, raw inputs, staging, validation, exceptions, analysis, dashboard, controls, and documentation.",
    "Create refreshable Power Query workflows that Append files, standardize types and categories, Unpivot repeated fields, Merge governed lookups, and preserve lineage.",
    "Apply row-level quality flags, reason codes, duplicate detection, referential-integrity checks, date logic, and publication gates.",
    "Build reusable formulas and PivotTables that respect grain, period, denominator, filter context, and edge cases.",
    "Create a one-page decision dashboard with governed KPI cards, comparison, trend, diagnostic, quality, filter, and action elements.",
    "Reconcile source, pipeline, analytical, and dashboard outputs under multiple filter states.",
    "Run refresh, schema-drift, edge-case, interaction, accessibility, performance, and usability tests.",
    "Write technical documentation, an executive decision brief, a limitations statement, and a professional portfolio README.",
    "Present the project using a clear problem-method-evidence-decision narrative and a reproducible demonstration.",
  ],

  prerequisiteKnowledge: [
    "Lesson 1: tidy data, Excel Tables, workbook architecture, grain, keys, and lineage",
    "Lesson 2: validation, physical types, quality rules, reason codes, and publication gates",
    "Lesson 3: logical, lookup, conditional aggregation, period, and reconciliation formulas",
    "Lesson 4: PivotTables, PivotCharts, distinct counts, filter context, drill-down, and refresh",
    "Lesson 5: Power Query profiling, transformation, Append, Merge, Unpivot, parameters, and exceptions",
    "Lesson 6: dashboard briefs, KPI governance, visual integrity, accessibility, QA, and action design",
  ],

  visualModels: [
    {
      id: "portfolio-workbook-delivery-cycle",
      type: "lifecycle",
      title: "The Portfolio Workbook Delivery Cycle",
      description:
        "The capstone moves from an ambiguous operational need to a tested, refreshable, documented analytical product.",
      stages: [
        {
          label: "1. Specify",
          detail:
            "Define audience, decision, actions, source contract, grain, business keys, KPI dictionary, quality rules, thresholds, scope, and acceptance tests.",
        },
        {
          label: "2. Engineer",
          detail:
            "Build raw, staging, reference, validation, exception, and published queries with parameters, types, lineage fields, and controlled load destinations.",
        },
        {
          label: "3. Analyze",
          detail:
            "Create governed formulas, PivotTables, rates, comparisons, trends, concentrations, distinct counts, drill-down evidence, and independent cross-checks.",
        },
        {
          label: "4. Communicate",
          detail:
            "Design a one-page dashboard, context header, KPI cards, diagnostic views, action register, decision brief, README, and limitations statement.",
        },
        {
          label: "5. Test and Release",
          detail:
            "Refresh changed inputs, validate schema and quality, reconcile rows and totals, test interactions and accessibility, obtain review, and retain a release record.",
        },
      ],
      feedback:
        "Reviewer findings and new source files return to the specification and tests; production readiness is maintained, not declared once.",
      interpretation:
        "The workbook is complete when a reviewer can reproduce the workflow, inspect its exceptions, verify its measures, and use it for the stated decision.",
    },
  ],

  vocabulary: [
    { term: "Analytical product", definition: "A maintained combination of data, logic, interface, controls, documentation, and workflow serving a recurring decision." },
    { term: "Project charter", definition: "A short agreement defining problem, audience, decision, scope, deliverables, roles, schedule, risks, and success criteria." },
    { term: "Stakeholder", definition: "A person or group affected by, responsible for, or able to act on the project's results." },
    { term: "Decision requirement", definition: "The specific choice, prioritization, approval, escalation, or investigation the analysis must support." },
    { term: "Source contract", definition: "The expected files, schema, grain, keys, types, categories, timing, ownership, and delivery rules for input data." },
    { term: "Acceptance criterion", definition: "A measurable condition that must pass before the workbook is considered complete or publishable." },
    { term: "Definition of done", definition: "The full set of functional, quality, documentation, testing, and delivery conditions required for completion." },
    { term: "Workbook architecture", definition: "The intentional separation and relationship of source, query, model, analysis, report, control, and documentation layers." },
    { term: "Data lineage", definition: "The trace from a published value through fields, rules, transformations, and sources." },
    { term: "Audit trail", definition: "A retained record of versions, refreshes, exceptions, decisions, approvals, and changes." },
    { term: "Parameter", definition: "A controlled input such as folder path, period, threshold, environment, or target that changes behavior without rewriting logic." },
    { term: "Publication gate", definition: "A rule that blocks or qualifies release when critical quality, reconciliation, or completeness conditions fail." },
    { term: "Exception register", definition: "A tracked list of invalid, unmatched, duplicated, or review-required records with reasons, ownership, and resolution status." },
    { term: "KPI dictionary", definition: "A governed table defining each measure's purpose, grain, formula, population, period, target, direction, owner, source, and limitations." },
    { term: "Control total", definition: "A trusted count or additive amount compared across pipeline stages to detect loss, duplication, or unintended filtering." },
    { term: "Row balance", definition: "A proof that every source row reaches one explained output or documented exclusion." },
    { term: "Referential integrity", definition: "The condition that every required foreign key matches an approved record in its reference table." },
    { term: "Schema drift", definition: "A change in source columns, names, types, order, or structure that may affect refresh behavior." },
    { term: "Regression test", definition: "A repeated test confirming that a change did not break previously correct behavior." },
    { term: "Edge case", definition: "An uncommon but valid or consequential condition such as zero exposure, no activity, new category, missing target, or incomplete period." },
    { term: "Test matrix", definition: "A structured list of scenarios, inputs, expected results, actual results, evidence, status, and owner." },
    { term: "User acceptance testing", definition: "Validation by intended users that the product supports required tasks accurately and understandably." },
    { term: "Release candidate", definition: "A version that has completed implementation and is undergoing final verification before publication." },
    { term: "Decision brief", definition: "A concise statement of context, evidence, interpretation, limitation, recommended action, owner, and follow-up measure." },
    { term: "README", definition: "The project's starting document describing purpose, structure, setup, refresh, outputs, controls, limitations, and review steps." },
    { term: "Data dictionary", definition: "A table defining fields, types, units, allowed values, source, rules, and missing-value meaning." },
    { term: "Portfolio narrative", definition: "A clear explanation of the problem, method, evidence, decisions, challenges, results, and transferable skills demonstrated." },
    { term: "Reproducibility", definition: "The ability to obtain the same outputs using the same governed inputs, logic, parameters, and refresh steps." },
    { term: "Maintainability", definition: "The ease with which another analyst can understand, update, test, and extend the product safely." },
    { term: "Handoff", definition: "The transfer of files, documentation, ownership, access, known issues, and operating instructions to the next responsible person." },
  ],

  formulas: [
    {
      id: "downtime-rate",
      name: "Normalized downtime rate",
      formula: "Downtime rate = validated downtime minutes / eligible operating hours × 1,000",
      meaning: "Compares maintenance impact across plants or robots with different exposure.",
      requirement: "Align numerator and denominator by plant, robot, period, quality status, and eligibility; show both components.",
    },
    {
      id: "mttr",
      name: "Mean time to repair",
      formula: "MTTR = total validated repair duration / completed repair events",
      meaning: "Summarizes the average time required to restore equipment after qualifying repair events.",
      requirement: "Define repair start, repair completion, pauses, partial repairs, repeated work orders, and completed status.",
    },
    {
      id: "sla-breach-rate",
      name: "Service-level breach rate",
      formula: "Breach rate = validated breached work orders / validated eligible work orders",
      meaning: "Measures how often response or resolution exceeds an approved service limit.",
      requirement: "Use the same eligibility, period, and rule version in numerator and denominator and retain the underlying counts.",
    },
    {
      id: "repeat-fault-rate",
      name: "Repeat fault rate",
      formula: "Repeat rate = qualifying repeated faults within window / eligible resolved faults",
      meaning: "Measures recurrence after a completed repair within a defined robot-fault-time window.",
      requirement: "Specify fault identity, resolution event, time window, multiple repeats, and observation completeness.",
    },
    {
      id: "critical-event-rate",
      name: "Critical-event rate",
      formula: "Critical-event rate = validated critical events / eligible operating hours × scale",
      meaning: "Normalizes severe-event frequency by operational exposure.",
      requirement: "Retain the absolute count because rare severe events can remain important even when the rate is unstable.",
    },
    {
      id: "data-completeness",
      name: "Required-field completeness",
      formula: "Completeness = populated required values / expected required values",
      meaning: "Measures whether the fields needed for the published analysis are present.",
      requirement: "Define eligible rows and distinguish null, blank, not applicable, unknown, and invalid values.",
    },
    {
      id: "row-balance",
      name: "Pipeline row balance",
      formula: "Source rows = published rows + review rows + rejected rows + documented exclusions",
      meaning: "Proves that no source records disappeared or were counted in more than one outcome.",
      requirement: "Use mutually exclusive and collectively exhaustive outcomes at the same row grain and retain record-level evidence.",
    },
  ],

  workedExamples: [
    {
      id: "example-03-07-01",
      title: "Convert the request into acceptance criteria",
      problem: "Leadership asks for a dashboard that 'updates automatically and shows the worst plant.' Write measurable acceptance criteria.",
      solutionSteps: [
        "Refresh: adding a conforming monthly file and choosing Refresh All updates published tables and dashboard without manual copying.",
        "Trust: source rows balance to PASS, REVIEW, REJECT, and documented exclusions with zero unexplained difference.",
        "Comparison: plant ranking uses validated downtime per 1,000 operating hours and shows raw downtime and exposure.",
        "Context: selected period, plants, quality status, target version, and refresh time are visible.",
        "Action: the worst qualifying plant links to diagnostic evidence and an assigned action record.",
      ],
      answer: "Replace vague goals with testable refresh, reconciliation, KPI, context, interaction, and action conditions.",
      interpretation: "Acceptance criteria make completion observable and protect the project from cosmetic success.",
    },
    {
      id: "example-03-07-02",
      title: "Design the workbook architecture",
      problem: "Which sheets and query groups should the portfolio workbook contain?",
      solutionSteps: [
        "Start_Here: purpose, reviewer instructions, refresh steps, version, and navigation.",
        "Parameters and Dictionary: controlled inputs, source contract, field definitions, and KPI definitions.",
        "Raw/Staging and References: connection-only queries preserving source file, row, and types.",
        "Exceptions and Controls: reason-coded records, row balance, unmatched keys, duplicates, and totals.",
        "Analysis and Dashboard: PivotTables, charts, KPI cards, filter context, decision notes, and actions.",
      ],
      answer: "Use separate instruction, configuration, staging, reference, exception, control, analysis, dashboard, and documentation responsibilities.",
      interpretation: "A layered workbook is easier to review, test, refresh, and hand off than a single crowded sheet.",
    },
    {
      id: "example-03-07-03",
      title: "Resolve a duplicated reference key before Merge",
      problem: "Fault code F03 has two active descriptions, and merging it increases 500 work-order rows to 536.",
      solutionSteps: [
        "Confirm the intended relationship is many work orders to one active fault record.",
        "Profile duplicate F03 rows and inspect effective dates, status, source authority, and ownership.",
        "Resolve the reference to one approved current record or expand the key to include effective period.",
        "Repeat the Merge, confirm 500 rows remain, and retain an anti-join for unmatched fault codes.",
      ],
      answer: "Block the analytical output until reference cardinality is restored and the row count reconciles.",
      interpretation: "A descriptive lookup can multiply fact rows and inflate every downstream KPI when uniqueness is assumed rather than tested.",
    },
    {
      id: "example-03-07-04",
      title: "Calculate a normalized plant comparison",
      problem: "Plant A has 600 downtime minutes across 2,000 operating hours; Plant B has 520 across 1,200. Which is worse by normalized rate?",
      solutionSteps: [
        "Plant A rate = 600 / 2,000 × 1,000 = 300 minutes per 1,000 hours.",
        "Plant B rate = 520 / 1,200 × 1,000 ≈ 433.3 minutes per 1,000 hours.",
        "Show both the normalized rate and absolute minutes.",
        "Investigate fault mix, severity, completeness, and exposure definitions before explaining the difference.",
      ],
      answer: "Plant B has the worse normalized rate, while Plant A has the larger absolute downtime total.",
      interpretation: "The operational action may require both comparative rate and total impact rather than a single ranking.",
    },
    {
      id: "example-03-07-05",
      title: "Reconcile all pipeline outcomes",
      problem: "The folder contains 1,250 source rows. Outputs show 1,180 PASS, 38 REVIEW, 22 REJECT, and 7 documented exclusions.",
      solutionSteps: [
        "Sum outcomes: 1,180 + 38 + 22 + 7 = 1,247.",
        "Calculate unexplained difference: 1,250 − 1,247 = 3 rows.",
        "Use source keys against the union of outcome keys to locate missing records.",
        "Confirm no record appears in multiple outcomes and no Merge has duplicated rows.",
      ],
      answer: "The release candidate fails because three source rows lack an explained outcome.",
      interpretation: "Dashboard accuracy does not compensate for incomplete lineage or unexplained record loss.",
    },
    {
      id: "example-03-07-06",
      title: "Write a portfolio decision brief",
      problem: "Plant B's downtime rate is 28% above target and repeat electrical faults contribute 46% of its downtime. What should the brief say?",
      solutionSteps: [
        "State the governed signal, period, exposure, comparison, filter context, and quality status.",
        "Describe concentration as diagnostic evidence, not proven root cause.",
        "Recommend a bounded electrical-system investigation and review of recent repair records.",
        "Assign owner and due date; name safety and overdue-critical-work guardrails.",
        "Define follow-up using downtime rate, repeat-fault rate, and completion of corrective actions.",
      ],
      answer: "Investigate Plant B electrical repeat faults before reallocating maintenance capacity; retain current safety coverage and review results after the next complete month.",
      interpretation: "A professional brief separates observed evidence, interpretation, uncertainty, action, ownership, and evaluation.",
    },
  ],

  interactiveExploration: {
    title: "Capstone Build Plan: From Raw Files to Portfolio Demonstration",
    description:
      "Complete the project in seven controlled phases. Close the acceptance tests for each phase before adding the next layer.",
    instructions: [
      "Phase 1 — Charter: define audience, decision, actions, scope, risks, KPI roles, project files, and acceptance criteria.",
      "Phase 2 — Contracts: document every source table's grain, business key, columns, types, categories, owner, period, and delivery rule.",
      "Phase 3 — Pipeline: create parameters and raw, staging, reference, Append, Merge, validation, exception, and published queries.",
      "Phase 4 — Measures: build a KPI dictionary and independently tested formulas for downtime rate, MTTR, breach rate, repeat faults, critical events, quality, targets, and changes.",
      "Phase 5 — Analysis: create PivotTables for plant comparison, monthly trend, fault concentration, priority mix, distinct robots, exceptions, and drill-down evidence.",
      "Phase 6 — Dashboard: construct the context header, three-to-six KPI cards, trend, comparison, diagnostic view, filters, quality status, notes, and action register.",
      "Phase 7 — Release: add a changed monthly file, refresh, run the complete test matrix, reconcile with Python, obtain user feedback, fix defects, and package documentation.",
    ],
    questions: [
      "Which acceptance test must pass before you begin visual design?",
      "Can every published value be traced to source file, source row, field, transformation, formula, filter, and refresh?",
      "Which quality failures block publication and which permit qualified release?",
      "What happens when a source has a new column, missing column, new category, duplicate key, or incomplete period?",
      "Do Excel, PivotTable, Power Query, and Python implementations agree under identical context?",
      "Can a reviewer reproduce the decision demonstration using only the delivered package?",
    ],
    expectedDiscovery:
      "A portfolio project becomes credible when requirements, architecture, controls, tests, documentation, and decision use are as visible as the dashboard itself.",
  },

  realWorldApplications: [
    { field: "Manufacturing and Robotics", application: "Build the primary reliability command workbook for downtime, repair, recurrence, critical events, quality, faults, and actions." },
    { field: "Finance", application: "Adapt the architecture to transactions, revenue, expense variance, account exceptions, reconciliations, controls, and monthly management reporting." },
    { field: "Education", application: "Use the same pattern for attendance, assessment, intervention, distinct students, equity guardrails, privacy, and support actions." },
    { field: "Healthcare Operations", application: "Create governed operational monitoring for access, wait time, throughput, quality events, staffing exposure, privacy, and escalation." },
    { field: "Retail and Supply Chain", application: "Combine order, inventory, supplier, product, and target data into service-level, late-order, return, risk, and action reporting." },
    { field: "AI and Machine Learning", application: "Extend the workbook into a model-monitoring prototype covering volume, performance, subgroup results, drift, data quality, incidents, and review actions." },
  ],

  aiConnection: {
    title: "This Workbook Is a Foundation for Production AI Monitoring",
    explanation:
      "The capstone's source contracts, feature-quality checks, refresh pipeline, KPI definitions, exceptions, lineage, monitoring dashboard, and action register mirror the governance needed around an AI system. The workbook can become a transparent prototype before moving the workflow into SQL, Microsoft Fabric, Power BI, or automated model-monitoring services.",
    example:
      "After the maintenance workbook is stable, a predicted_failure_risk field can be added. The project can then monitor scoring coverage, score distribution, actual failures, false negatives, subgroup error rates, model version, label delay, and review outcomes without discarding the existing governance structure.",
    uses: [
      "Prototype feature and label quality rules",
      "Establish baseline operational and model-monitoring KPIs",
      "Document lineage from source record to decision signal",
      "Retain exceptions and human review outcomes",
      "Define evidence required before threshold or model changes",
    ],
    caution:
      "Adding a prediction does not make the workbook an autonomous decision system. Model validity, fairness, privacy, security, drift, feedback loops, human oversight, and deployment controls require additional evidence and governance.",
    reflectionQuestion:
      "Which workbook controls could be reused unchanged when a predictive model is added, and which new model-specific controls would be required?",
  },

  pythonLab: {
    title: "Generate and Independently Audit the Capstone Dataset",
    objective:
      "Create reproducible maintenance, robot, fault, and target source files containing realistic quality defects, then build an independent quality and KPI cross-check for the Excel workbook.",
    code: `from pathlib import Path
import numpy as np
import pandas as pd

rng = np.random.default_rng(42)
out = Path("capstone_data")
out.mkdir(exist_ok=True)

robots = pd.DataFrame({
    "robot_id": [f"R{i:03d}" for i in range(1, 16)],
    "plant": ["A"] * 5 + ["B"] * 5 + ["C"] * 5,
    "robot_model": ["MX-1", "MX-1", "MX-2", "MX-2", "MX-3"] * 3,
    "commissioned_date": pd.date_range("2020-01-01", periods=15, freq="120D"),
})

faults = pd.DataFrame({
    "fault_code": ["F01", "F02", "F03", "F04", "F05"],
    "fault_family": ["Drive", "Sensor", "Power", "Network", "Safety"],
    "critical_default": [0, 0, 1, 0, 1],
})

targets = pd.DataFrame({
    "plant": ["A", "B", "C"],
    "downtime_rate_target": [250.0, 250.0, 250.0],
    "mttr_target_min": [90.0, 90.0, 90.0],
    "effective_date": pd.to_datetime(["2026-01-01"] * 3),
})

months = pd.date_range("2026-05-01", periods=5, freq="MS")
rows = []
for i in range(120):
    robot = robots.iloc[int(rng.integers(0, len(robots)))]
    month = months[int(rng.integers(0, len(months)))]
    opened = month + pd.Timedelta(days=int(rng.integers(0, 27)), hours=int(rng.integers(0, 24)))
    duration = max(8, int(rng.gamma(shape=2.2, scale=38)))
    fault = faults.iloc[int(rng.integers(0, len(faults)))]
    priority = rng.choice(["STANDARD", "HIGH", "CRITICAL"], p=[0.55, 0.32, 0.13])
    sla_limit = {"STANDARD": 240, "HIGH": 150, "CRITICAL": 90}[priority]
    rows.append({
        "work_order_id": f"WO-{i + 1:04d}",
        "robot_id": robot["robot_id"],
        "plant": robot["plant"],
        "opened_at": opened,
        "closed_at": opened + pd.Timedelta(minutes=duration),
        "priority": priority,
        "fault_code": fault["fault_code"],
        "downtime_min": duration,
        "sla_limit_min": sla_limit,
        "critical_event": int(priority == "CRITICAL" or fault["critical_default"] == 1),
        "repair_cost": round(float(rng.uniform(120, 2800)), 2),
    })

work_orders = pd.DataFrame(rows)

# Intentional defects for the learner's quality and exception pipeline.
work_orders["downtime_min"] = work_orders["downtime_min"].astype("object")
work_orders = pd.concat([work_orders, work_orders.iloc[[4]]], ignore_index=True)
work_orders.loc[11, "robot_id"] = None
work_orders.loc[19, "priority"] = "H"
work_orders.loc[26, "fault_code"] = "F99"
work_orders.loc[34, "closed_at"] = work_orders.loc[34, "opened_at"] - pd.Timedelta(minutes=25)
work_orders.loc[43, "downtime_min"] = "not recorded"

# Monthly exposure is the denominator for normalized downtime and critical-event rates.
exposure_rows = []
for _, robot in robots.iterrows():
    for month in months:
        exposure_rows.append({
            "robot_id": robot["robot_id"],
            "plant": robot["plant"],
            "month": month,
            "operating_hours": int(rng.integers(560, 730)),
        })
exposure = pd.DataFrame(exposure_rows)

robots.to_csv(out / "robot_master.csv", index=False)
faults.to_csv(out / "fault_master.csv", index=False)
targets.to_csv(out / "plant_targets.csv", index=False)
exposure.to_csv(out / "operating_exposure.csv", index=False)

work_orders["month"] = pd.to_datetime(work_orders["opened_at"], errors="coerce").dt.to_period("M").astype("string")
for month, frame in work_orders.groupby("month", dropna=False):
    label = "unknown" if pd.isna(month) else str(month)
    frame.drop(columns="month").to_csv(out / f"work_orders_{label}.csv", index=False)

# Independent audit logic: this must agree with the completed Excel project.
audit = work_orders.drop(columns="month").copy()
audit["priority_clean"] = audit["priority"].astype("string").str.strip().str.upper().replace({"H": "HIGH"})
audit["opened_clean"] = pd.to_datetime(audit["opened_at"], errors="coerce")
audit["closed_clean"] = pd.to_datetime(audit["closed_at"], errors="coerce")
audit["downtime_clean"] = pd.to_numeric(audit["downtime_min"], errors="coerce")

duplicate_key = audit["work_order_id"].duplicated(keep=False)
valid_robot = audit["robot_id"].isin(robots["robot_id"])
valid_plant = audit["plant"].isin(["A", "B", "C"])
valid_priority = audit["priority_clean"].isin(["STANDARD", "HIGH", "CRITICAL"])
valid_fault = audit["fault_code"].isin(faults["fault_code"])
valid_time = (
    audit["opened_clean"].notna()
    & audit["closed_clean"].notna()
    & audit["closed_clean"].ge(audit["opened_clean"])
)
valid_downtime = audit["downtime_clean"].ge(0)

checks = pd.DataFrame({
    "DUPLICATE_WORK_ORDER": duplicate_key,
    "INVALID_ROBOT": ~valid_robot,
    "INVALID_PLANT": ~valid_plant,
    "INVALID_PRIORITY": ~valid_priority,
    "INVALID_FAULT": ~valid_fault,
    "INVALID_TIMESTAMP": ~valid_time,
    "INVALID_DOWNTIME": ~valid_downtime,
})

audit["quality_reason"] = checks.apply(
    lambda row: "|".join(row.index[row].tolist()) if row.any() else "",
    axis=1,
)
audit["row_status"] = np.where(audit["quality_reason"].eq(""), "PASS", "REVIEW")
audit.to_csv(out / "expected_quality_audit.csv", index=False)

published = audit.loc[audit["row_status"].eq("PASS")].copy()
published["month"] = published["opened_clean"].dt.to_period("M").dt.to_timestamp()

monthly_downtime = published.groupby(["plant", "month"], as_index=False).agg(
    work_orders=("work_order_id", "nunique"),
    downtime_min=("downtime_clean", "sum"),
    mttr_min=("downtime_clean", "mean"),
    sla_breaches=("downtime_clean", lambda x: 0),
    critical_events=("critical_event", "sum"),
)

# Recalculate SLA breaches from aligned row-level values.
breaches = (
    published.assign(sla_breach=published["downtime_clean"].gt(published["sla_limit_min"]))
    .groupby(["plant", "month"], as_index=False)["sla_breach"]
    .sum()
)
monthly_downtime = monthly_downtime.drop(columns="sla_breaches").merge(
    breaches, on=["plant", "month"], how="left", validate="one_to_one"
)

monthly = monthly_downtime.merge(
    exposure,
    on=["plant", "month"],
    how="left",
    validate="one_to_many",
)
monthly = monthly.groupby(["plant", "month"], as_index=False).agg(
    work_orders=("work_orders", "first"),
    downtime_min=("downtime_min", "first"),
    mttr_min=("mttr_min", "first"),
    sla_breach=("sla_breach", "first"),
    critical_events=("critical_events", "first"),
    operating_hours=("operating_hours", "sum"),
)
monthly["downtime_rate"] = monthly["downtime_min"] / monthly["operating_hours"] * 1000
monthly["sla_breach_rate"] = monthly["sla_breach"] / monthly["work_orders"]
monthly["critical_event_rate"] = monthly["critical_events"] / monthly["operating_hours"] * 1000
monthly.to_csv(out / "expected_monthly_kpis.csv", index=False)

# Release controls.
assert len(audit) == len(published) + int(audit["row_status"].eq("REVIEW").sum())
assert not published["work_order_id"].duplicated().any()
assert published["robot_id"].isin(robots["robot_id"]).all()
assert published["fault_code"].isin(faults["fault_code"]).all()
assert monthly["operating_hours"].gt(0).all()

print("Created source and answer-key files in", out.resolve())
print("Source rows:", len(audit))
print("PASS rows:", len(published))
print("REVIEW rows:", int(audit["row_status"].eq("REVIEW").sum()))
print("Monthly KPI rows:", len(monthly))
print("Quality reasons:\\n", audit.loc[audit["row_status"].eq("REVIEW"), ["work_order_id", "quality_reason"]].to_string(index=False))`,
    questions: [
      "Which intentional defects should Power Query correct automatically, and which should remain in the exception register?",
      "Why is work_order_id counted with nunique after duplicates are identified?",
      "How does the operating-exposure table change the plant comparison?",
      "Which joins use a declared validation rule, and what relationship do they expect?",
      "Which assertions represent publication gates?",
      "How will you prove Excel and expected_monthly_kpis.csv use identical filters and definitions?",
    ],
    reflectionQuestions: [
      "Which defect was easiest to detect but hardest to resolve responsibly?",
      "What would happen if the next file added Plant D or removed sla_limit_min?",
      "Which part of the project best demonstrates your analytical judgment to an employer?",
    ],
    extension:
      "Add a sixth month containing a new robot model, one missing column, one renamed column, and one valid new fault category. Update the source contract and pipeline so approved changes refresh while unauthorized schema drift blocks publication.",
  },

  guidedPractice: [
    { id: "gp-03-07-01", question: "What makes an acceptance criterion testable?", answer: "It specifies an observable condition, input or context, expected result, evidence, and pass/fail threshold." },
    { id: "gp-03-07-02", question: "Why separate REVIEW from REJECT?", answer: "REVIEW retains ambiguous or resolvable records for human decision, while REJECT identifies records that cannot enter the published analysis under current rules." },
    { id: "gp-03-07-03", question: "What does row balance prove?", answer: "Every source row has one explained outcome and no row disappeared or entered multiple outcomes." },
    { id: "gp-03-07-04", question: "Why include exposure beside downtime?", answer: "Exposure supports fair normalized comparison, while downtime preserves total operational impact." },
    { id: "gp-03-07-05", question: "What should a portfolio README let a reviewer do?", answer: "Understand the problem and architecture, locate files, refresh the workbook, run checks, interpret outputs, review limitations, and reproduce the demonstration." },
    { id: "gp-03-07-06", question: "What is the final release test?", answer: "A changed input refreshes through the governed pipeline, all controls pass or exceptions are disclosed, KPIs reconcile, interactions work, and a user completes the decision task correctly." },
  ],

  independentPractice: [
    { id: "ip-03-07-01", difficulty: "Foundational", question: "Write ten acceptance criteria for the maintenance workbook.", sampleAnswer: "Cover source files, schema, row balance, keys, types, exceptions, KPI definitions, dashboard context, interactions, refresh, reconciliation, accessibility, documentation, and action use." },
    { id: "ip-03-07-02", difficulty: "Foundational", question: "Create a workbook sheet map and explain each sheet's responsibility.", sampleAnswer: "Include Start_Here, Parameters, Dictionary, Raw/Connections, Exceptions, Controls, Analysis, Dashboard, Actions, and Change_Log with no unnecessary duplication." },
    { id: "ip-03-07-03", difficulty: "Applied", question: "Design the Power Query dependency structure.", sampleAnswer: "Use source-specific staging queries, governed reference queries, monthly Append, standardization, validation, exception references, published facts, and connection-only intermediate loads." },
    { id: "ip-03-07-04", difficulty: "Applied", question: "Write a KPI dictionary row for downtime rate.", sampleAnswer: "Include decision purpose, lower-is-better direction, formula, scale, grain, numerator, denominator, period, eligible population, target, owner, source, filters, format, refresh cadence, and limitations." },
    { id: "ip-03-07-05", difficulty: "Analytical", question: "Design a test for a new valid fault category and an invalid fault code.", sampleAnswer: "The governed new category should enter after approved reference update; the invalid code should remain unmatched in REVIEW, raise the quality count, and block or qualify publication according to policy." },
    { id: "ip-03-07-06", difficulty: "Advanced", question: "Create a three-state reconciliation test plan.", sampleAnswer: "Compare Excel formulas, PivotTables, and Python under full population, one plant-month, and one exception-heavy filter; verify counts, distinct counts, additive totals, rates, target variance, and dashboard titles." },
    { id: "ip-03-07-07", difficulty: "Professional", question: "Prepare a five-minute portfolio demonstration.", sampleAnswer: "Explain problem and decision, show architecture and raw evidence, refresh a new file, inspect exceptions and controls, demonstrate dashboard interaction, state insight and action, disclose limitations, and show README and cross-check." },
  ],

  commonMistakes: [
    { mistake: "Beginning the capstone with dashboard formatting.", correction: "Complete the charter, source contract, architecture, quality rules, and acceptance criteria before visual design." },
    { mistake: "Using one clean file that never changes.", correction: "Test multiple periods and inject schema, category, key, missingness, and completeness changes." },
    { mistake: "Hiding invalid rows to make the dashboard look complete.", correction: "Retain reason-coded REVIEW and REJECT outputs, ownership, resolution status, and visible quality indicators." },
    { mistake: "Calculating rates without governed exposure.", correction: "Align numerator and denominator by grain, population, period, quality, and eligibility and show their underlying values." },
    { mistake: "Treating successful refresh as successful release.", correction: "Run schema, data-quality, row-balance, reconciliation, interaction, accessibility, and user-task tests after refresh." },
    { mistake: "Duplicating business logic across worksheet formulas and queries.", correction: "Assign each rule to an authoritative layer, document it, and use independent implementations only as explicit cross-checks." },
    { mistake: "Delivering only the workbook file.", correction: "Include README, source instructions, dictionaries, test evidence, decision brief, limitations, screenshots, and version history." },
    { mistake: "Claiming the dashboard explains root cause.", correction: "Separate monitored signal, diagnostic pattern, investigation hypothesis, causal evidence, and approved action." },
  ],

  discussionQuestions: [
    "Which workbook defect would most damage trust if a reviewer discovered it after the presentation?",
    "Should a project be published when all calculations are correct but 4% of source records remain unresolved?",
    "How much technical detail belongs in the workbook versus the README and appendix?",
    "What is the strongest evidence that a portfolio dashboard will survive real monthly refreshes?",
    "How should an analyst communicate a useful recommendation when the dataset cannot support causal conclusions?",
  ],

  formativeAssessment: {
    totalPoints: 40,
    passingScore: 32,
    questions: [
      { id: "check-03-07-01", type: "requirements", points: 5, prompt: "Write five testable acceptance criteria for the capstone.", sampleAnswer: "Criteria should cover refresh, schema, quality outcomes, reconciliation, KPI correctness, context, interaction, documentation, or action and each must have observable pass/fail evidence." },
      { id: "check-03-07-02", type: "architecture", points: 5, prompt: "Explain the responsibility of five workbook layers.", sampleAnswer: "Instructions/configuration, raw/staging, validation/exceptions, model/analysis, dashboard/action, and controls/documentation are valid layers when their responsibilities are separated." },
      { id: "check-03-07-03", type: "pipeline", points: 5, prompt: "Describe a safe folder-based refresh process.", sampleAnswer: "Validate file pattern and schema, stage with lineage, Append, standardize, validate, separate outcomes, Merge unique references, publish, refresh analyses, and rerun controls." },
      { id: "check-03-07-04", type: "kpi", points: 5, prompt: "Define the normalized downtime-rate KPI completely.", sampleAnswer: "Validated downtime minutes divided by eligible operating hours times 1,000 for aligned plant/robot/period, with target, direction, counts, owner, quality rule, and source lineage." },
      { id: "check-03-07-05", type: "quality", points: 5, prompt: "Design a row-outcome policy for PASS, REVIEW, and REJECT.", sampleAnswer: "Define mutually exclusive rules, severity, reason codes, publication effect, owner, correction path, timestamps, and row-balance evidence." },
      { id: "check-03-07-06", type: "testing", points: 5, prompt: "List six required release tests.", sampleAnswer: "Schema, type, key, category, exception, row balance, additive totals, KPI cross-check, slicer interaction, edge cases, accessibility, performance, refresh, and user acceptance; any six earn full credit." },
      { id: "check-03-07-07", type: "documentation", points: 5, prompt: "List eight README sections.", sampleAnswer: "Problem, audience, decision, data, architecture, files, setup, refresh, KPI definitions, controls, dashboard use, tests, results, limitations, versions, and contact; any eight earn full credit." },
      { id: "check-03-07-08", type: "communication", points: 5, prompt: "Write the structure of a professional decision brief.", sampleAnswer: "Context, signal, magnitude, population, evidence, uncertainty, limitation, recommendation, owner, due date, guardrails, and follow-up measure." },
    ],
  },

  researchExtension: {
    title: "Portfolio Reliability and Usability Evaluation",
    researchQuestion:
      "Can independent users refresh, verify, interpret, and act from the workbook accurately without help from its creator?",
    applicationOptions: [
      "Manufacturing reliability",
      "Financial controls",
      "Student support",
      "Healthcare operations",
      "Supply-chain performance",
      "AI model monitoring",
    ],
    task:
      "Give the release candidate, README, and a changed input file to at least two reviewers. Ask them to refresh, locate one quality defect, verify one KPI, interpret one dashboard signal, and record one action. Measure success, time, errors, confidence, and questions; improve the package and repeat the test.",
    requiredEvidence: [
      "Participant role and relevant experience",
      "Standardized refresh and decision tasks",
      "Expected answers and scoring rubric",
      "Completion time, errors, help requests, and confidence",
      "Observed documentation and interface problems",
      "Before-and-after workbook or README changes",
      "Regression-test results after revision",
      "Final usability conclusion and remaining risks",
    ],
  },

  portfolioArtifact: {
    title: "Module 3 Capstone Portfolio Package",
    description:
      "Deliver a complete, refreshable business analysis workbook and the evidence required for an employer, stakeholder, or reviewer to understand, operate, verify, and evaluate it.",
    requiredSections: [
      "Project charter, audience, decision, actions, scope, risks, and acceptance criteria",
      "Source contract, data dictionary, workbook architecture, and lineage map",
      "Power Query design with parameters, staging, Append, Merge, validation, exceptions, and published outputs",
      "KPI dictionary, formula tests, PivotTables, independent Python cross-check, and reconciliation controls",
      "One-page dashboard with context, KPI cards, trend, comparison, diagnosis, filters, quality, and action register",
      "Release test matrix covering refresh, schema drift, edge cases, interactions, accessibility, performance, and user acceptance",
      "Executive decision brief, technical notes, limitations, change log, and reviewer feedback",
      "README and five-minute portfolio demonstration script",
    ],
    requiredEvidence: [
      "Final .xlsx workbook with Refresh All workflow",
      "At least three monthly source files plus reference and exposure tables",
      "PASS, REVIEW, and REJECT or documented exclusion evidence",
      "Source-to-output row balance and additive-total reconciliation",
      "Three to six governed KPIs and at least three decision-focused visuals",
      "One changed-input refresh test and one schema-drift test",
      "Excel-to-Python cross-check under at least three filter states",
      "Dashboard screenshot, decision brief, README, data dictionary, KPI dictionary, test matrix, and limitations statement",
    ],
  },

  growthIndicators: [
    { title: "Analytics Product Builder", description: "You integrate requirements, data engineering, analysis, interface, controls, and documentation into one working product." },
    { title: "Quality and Control Owner", description: "You define publication gates, retain exceptions, reconcile records and totals, and test changed inputs." },
    { title: "Decision Communicator", description: "You separate evidence, interpretation, limitation, recommendation, ownership, and follow-up." },
    { title: "Portfolio Professional", description: "You package, demonstrate, and hand off work so another analyst can reproduce and maintain it." },
  ],

  reflection: [
    "Which capstone component best proves that you can solve a real business problem rather than complete a tutorial?",
    "Where does the workbook still depend on undocumented personal knowledge?",
    "Which defect or edge case most changed your design?",
    "Which KPI or chart did you remove because it did not improve the decision?",
    "What limitation must remain visible during your portfolio presentation?",
    "What would you migrate first to SQL, Microsoft Fabric, or Power BI if the workbook became operational?",
  ],

  summary: [
    "A portfolio-quality workbook is a maintainable analytical product, not a collection of screenshots.",
    "Start with a charter, source contract, KPI dictionary, architecture, and measurable acceptance criteria.",
    "Separate instructions, parameters, staging, references, validation, exceptions, analysis, dashboard, controls, and documentation.",
    "Preserve raw evidence, lineage, physical types, grain, business keys, quality reasons, and publication outcomes.",
    "Append and Merge only after validating schema and relationship cardinality.",
    "Use normalized rates and governed denominators while retaining absolute counts and impact.",
    "Every source row needs an explained outcome and every decision-critical total needs reconciliation.",
    "A dashboard must expose filters, period, target, quality, refresh, limitations, and action—not only charts.",
    "Refresh success is not release success; schema, quality, regression, interaction, accessibility, and user tests must pass.",
    "Independent Python calculations strengthen confidence when definitions and filter context are identical.",
    "The portfolio package needs README, dictionaries, test evidence, decision brief, limitations, change history, and demonstration steps.",
    "The strongest demonstration shows the workbook receiving a changed file, retaining exceptions, reconciling outputs, and supporting a responsible action.",
  ],

  previousLesson: {
    id: "data-ai-m03-l06",
    moduleNumber: 3,
    slug: "decision-focused-excel-dashboard-design",
    title: "Decision-Focused Excel Dashboard Design",
  },
  nextLesson: {
    id: "data-ai-m04-l01",
    moduleNumber: 4,
    slug: "tables-row-grain-keys-and-relationships",
    title: "Tables, Row Grain, Keys, and Relationships",
  },

  lumineryGuidance: {
    message:
      "Build the capstone as a product another analyst can operate and challenge. Close each acceptance test before adding new features, and make every exception, measure, filter, and action traceable.",
    prompt:
      "Act as my senior Excel analytics, Power Query, BI, QA, and portfolio reviewer. Help me deliver the Refreshable Business Analysis Workbook one completed phase at a time. Review my charter, stakeholders, decision, actions, scope, source contract, grains, keys, schema, quality rules, publication gates, workbook architecture, Power Query dependencies, Append and Merge cardinality, exception register, KPI dictionary, formulas, PivotTables, dashboard hierarchy, filters, accessibility, action register, reconciliation, Python cross-check, changed-input refresh, schema-drift test, user acceptance, README, decision brief, limitations, change log, and demonstration script. Do not allow me to move to the next phase until the current phase has observable pass/fail evidence.",
    coachingQuestions: [
      "What decision and action make this workbook worth maintaining?",
      "What must be true of every source and output row?",
      "Which defect blocks publication, and where is its evidence retained?",
      "Can every KPI be independently recalculated from its governed definition?",
      "What changed input proves the refresh workflow is real?",
      "Can a reviewer reproduce the demonstration using only the delivered package?",
      "Which test is still failing, and why should the project stop there before adding features?",
    ],
  },
};

export default lesson07;
