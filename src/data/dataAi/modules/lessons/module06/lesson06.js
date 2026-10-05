const lesson06 = {
  id: "data-ai-m06-l06",
  courseId: "data-ai-foundations",
  moduleId: "data-ai-foundations-module-06",
  moduleNumber: 6,
  lessonNumber: 6,
  slug: "drillthrough-tooltips-security-and-report-validation",
  title: "Drillthrough, Tooltips, Security, and Report Validation",
  shortTitle: "Navigation, Security, and Validation",
  subtitle:
    "Design trustworthy summary-to-detail exploration, build accessible contextual tooltips, enforce row-level security, and validate correctness, usability, performance, and release readiness before publishing a Power BI report.",
  status: "available",
  duration: "5–6 hours",
  level: "Beginner to Professional",

  essentialQuestion:
    "How can a Power BI report let each user move from summary to detail while preserving context, protecting restricted data, and proving every page is correct, accessible, and ready for release?",
  bigIdea:
    "A production report is an interactive decision system. Drillthrough and tooltips must preserve intended context; security must be enforced in the semantic model rather than implied by navigation; and publication requires evidence across data, calculations, roles, interactions, accessibility, performance, and user acceptance.",

  whyThisLessonExists: {
    title: "A Correct Dashboard Can Still Be Unsafe or Unusable",
    introduction:
      "A report may contain accurate measures but still fail when users cannot reach the supporting records, when tooltip-only evidence is inaccessible, when drillthrough loses important filters, or when row-level security exposes another manager's plant.",
    centralProblem:
      "A plant manager opens an executive dashboard, drills from a critical-event bar to a detail page, and sees events from every plant. A tooltip contains the only explanation of the KPI, keyboard users cannot reach the information, and the page takes several seconds to respond. The measures are correct, but the report is not production-ready.",
    purpose:
      "This lesson connects report navigation, contextual explanation, security architecture, test design, performance evidence, and release governance. Learners create an explicit exploration path, implement and test static and dynamic RLS, validate drillthrough and tooltip behavior, close defects, and assemble a release evidence pack.",
  },

  problemFirst: {
    title: "Opening Investigation: Why Did the Detail Page Show Too Much?",
    scenario:
      "The summary page is filtered to Plant A, Critical severity, and December 2026. The user drills through on one asset, but the detail page shows all severities and all months. A second user with Plant B access can open the same detail page through a copied link.",
    questions: [
      "Which filters should drillthrough carry to the destination?",
      "Which filters belong in the drillthrough field well?",
      "Should Keep all filters be enabled for this investigation?",
      "Why is page navigation not a security boundary?",
      "Where must Plant B access be restricted?",
      "What should an unmapped user see?",
      "Which tests prove that copied links, exports, and alternate navigation cannot bypass security?",
      "What information must remain visible without hover?",
    ],
    expectedInsight:
      "Drillthrough manages report context; RLS manages data authorization. Both must be tested independently and together. Hidden pages, buttons, bookmarks, and URL patterns do not replace semantic-model security.",
  },

  visualModels: [
    {
      id: "summary-detail-navigation",
      type: "lifecycle",
      title: "Summary-to-Detail Navigation Path",
      description:
        "Trace the user's analytical question from a high-level signal to supporting records and back again.",
      stages: [
        { label: "1. Summary signal", detail: "A KPI, bar, trend point, or matrix cell identifies an exception requiring explanation." },
        { label: "2. Selected context", detail: "Capture entity, time, category, metric, and every approved filter relevant to the question." },
        { label: "3. Drill action", detail: "Expose a discoverable right-click, button, or drillthrough action with a meaningful destination name." },
        { label: "4. Context transfer", detail: "Pass drillthrough fields and, when appropriate, Keep all filters to the destination page." },
        { label: "5. Security enforcement", detail: "Apply RLS independently so only authorized fact rows can reach any destination visual." },
        { label: "6. Detail evidence", detail: "Show records, dates, categories, measures, definitions, freshness, and a clear current-context summary." },
        { label: "7. Accessible return", detail: "Provide a labeled Back action and ensure keyboard, focus order, titles, and data-table access work." },
        { label: "8. Validation", detail: "Test entry paths, filters, roles, totals, empty states, exports, reset behavior, and performance." },
      ],
      feedback:
        "If users cannot state which filters arrived at the destination, the drillthrough design is not ready.",
      interpretation:
        "Good drillthrough narrows investigation without changing the metric's definition or the user's authorized data boundary.",
    },
    {
      id: "rls-authorization-path",
      type: "lifecycle",
      title: "Row-Level Security Authorization Path",
      description:
        "Separate identity, role mapping, model filtering, and report interaction so security can be tested at every boundary.",
      stages: [
        { label: "1. Identity", detail: "Power BI receives the authenticated user's Microsoft Entra identity." },
        { label: "2. Role membership", detail: "Static groups or dynamic rules map that identity to approved model roles." },
        { label: "3. Access table", detail: "A governed user-to-entity mapping identifies plants, regions, schools, or accounts the user may see." },
        { label: "4. RLS predicate", detail: "A DAX filter limits dimension rows using approved columns and identity functions." },
        { label: "5. Relationship path", detail: "The secured dimension filter propagates through active relationships to facts." },
        { label: "6. Measure evaluation", detail: "Every visual, tooltip, drillthrough, export, and query evaluates only over visible rows." },
        { label: "7. Deny by default", detail: "Unmapped, invalid, or unexpected identities receive no protected rows unless explicitly approved." },
        { label: "8. Role test evidence", detail: "Test representative users, overlapping roles, totals, copied links, exports, and service behavior." },
      ],
      feedback:
        "Security is successful only when unauthorized rows remain inaccessible through every report path—not merely hidden on the landing page.",
      interpretation:
        "RLS filters model rows; workspace permissions, sharing, Build permission, and object-level security control different parts of the security system.",
    },
    {
      id: "rls-visible-row-counts",
      type: "barChart",
      title: "RLS Role Test — Expected Visible Event Rows",
      description:
        "The same twelve-event semantic model must return a different authorized row population for each test identity.",
      ariaLabel:
        "Horizontal bar graph showing Executive 12 rows, Plant A Manager 4 rows, Plant B Manager 3 rows, Plant C Manager 5 rows, and Unmapped User 0 rows.",
      unit: "rows",
      max: 12,
      items: [
        { label: "Executive", value: 12, note: "Approved enterprise-wide access." },
        { label: "Plant A Manager", value: 4, note: "Only Plant A events." },
        { label: "Plant B Manager", value: 3, note: "Only Plant B events." },
        { label: "Plant C Manager", value: 5, note: "Only Plant C events." },
        { label: "Unmapped User", value: 0, note: "Deny-by-default security result." },
      ],
      interpretation:
        "A role test needs expected keys and totals, not only a screenshot that appears filtered. The unmapped-user zero-row case is a required security control.",
    },
    {
      id: "release-validation-gate",
      type: "lifecycle",
      title: "The Report Release Validation Gate",
      description:
        "A report advances only when every evidence category passes or an approved exception is documented.",
      stages: [
        { label: "1. Data", detail: "Validate refresh, freshness, row counts, keys, nulls, ranges, and source reconciliation." },
        { label: "2. Model", detail: "Validate grain, relationships, date roles, measure definitions, formats, and hidden fields." },
        { label: "3. Visuals", detail: "Validate chart choice, axes, sorting, labels, totals, conditional formatting, and empty states." },
        { label: "4. Interactions", detail: "Validate slicers, cross-filtering, drillthrough, tooltips, bookmarks, buttons, reset, and mobile paths." },
        { label: "5. Security", detail: "Validate RLS identities, memberships, allowed keys, denied keys, exports, and shared-service behavior." },
        { label: "6. Accessibility", detail: "Validate titles, alt text, contrast, keyboard order, focus, Show Data, zoom, and non-hover access." },
        { label: "7. Performance", detail: "Record visual durations, inspect slow queries, reduce unnecessary interactions, and retest." },
        { label: "8. Acceptance", detail: "Close critical defects, obtain owner sign-off, document release notes, and preserve evidence." },
      ],
      feedback:
        "A release date is not evidence. A completed, reviewed, and signed test record is evidence.",
      interpretation:
        "Production readiness is the intersection of correctness, protection, usability, performance, ownership, and reproducibility.",
    },
  ],

  representationModel: {
    title: "Validation Defect Burn-Down — Table and Line Graph",
    description:
      "Track open report defects after each controlled test-and-repair cycle. Release requires zero unresolved critical or high-severity defects.",
    equation: "Open defects after cycle n",
    columns: [
      { key: "cycle", label: "Test Cycle" },
      { key: "defects", label: "Open Defects" },
    ],
    rows: [
      { cycle: 1, defects: 14 },
      { cycle: 2, defects: 8 },
      { cycle: 3, defects: 3 },
      { cycle: 4, defects: 0 },
    ],
    xKey: "cycle",
    yKey: "defects",
    xLabel: "Test cycle",
    yLabel: "Open defects",
    highlightPoint: { x: 4, y: 0 },
  },

  learningObjectives: [
    "Explain the difference between drilldown, drillthrough, cross-filtering, page navigation, and bookmarks.",
    "Design a summary-to-detail pathway that preserves the analytical question and approved filter context.",
    "Configure drillthrough fields, Keep all filters, destination titles, empty states, and Back navigation.",
    "Create visual, report-page, and help tooltips for supplemental context.",
    "Keep essential evidence available without hover or pointer-only interaction.",
    "Explain why hidden pages, bookmarks, and navigation do not enforce data security.",
    "Distinguish RLS, object-level security, workspace roles, sharing permissions, and Build permission.",
    "Design static RLS with approved groups and dynamic RLS with a governed user-access table.",
    "Use USERPRINCIPALNAME or USERNAME only within an approved identity-mapping design.",
    "Implement deny-by-default behavior for unmapped users.",
    "Trace an RLS filter from user identity through dimensions and relationships to fact rows.",
    "Create expected-key and expected-total tests for representative security roles.",
    "Validate copied links, exports, alternate pages, drillthrough, tooltips, and service behavior under RLS.",
    "Build a report test plan covering data, model, calculations, visuals, interactions, accessibility, security, and performance.",
    "Classify defects by severity, owner, status, evidence, retest, and release impact.",
    "Use Performance Analyzer and DAX Query View to investigate slow visuals and unexpected results.",
    "Reproduce role filtering, drillthrough context, tooltip aggregates, and defect closure in a tested Python lab.",
    "Create a release evidence pack with sign-off, limitations, monitoring, and rollback guidance.",
  ],

  prerequisiteKnowledge: [
    "Module 6 Lessons 1–2: visual purpose, hierarchy, accessibility, and honest communication",
    "Module 6 Lesson 3: star-schema relationships and filter propagation",
    "Module 6 Lesson 4: filter context, CALCULATE, denominators, variables, and security-aware measures",
    "Module 6 Lesson 5: date roles, time intelligence, KPIs, validation, and Performance Analyzer",
    "Power BI Desktop and service concepts: pages, visuals, filters, semantic models, workspaces, apps, and identities",
    "Python with pandas, pathlib, JSON, joins, filtering, grouping, and assertions",
  ],

  vocabulary: [
    { term: "Drillthrough", definition: "Navigation from a selected data point to a destination page filtered by one or more fields from that context." },
    { term: "Drilldown", definition: "Movement to a lower level inside a hierarchy within the same visual." },
    { term: "Cross-filtering", definition: "An interaction in which selecting data in one visual filters data displayed by another visual." },
    { term: "Cross-highlighting", definition: "An interaction that emphasizes a selected subset while retaining the full comparison in another visual." },
    { term: "Page navigation", definition: "Movement between report pages without automatically representing a selected data context." },
    { term: "Bookmark", definition: "A saved report state that can capture page, filters, slicers, visibility, spotlight, and other display properties." },
    { term: "Drillthrough field", definition: "A field placed in the destination page's drillthrough well to define eligible source context." },
    { term: "Keep all filters", definition: "A drillthrough option that passes additional source filters beyond the explicit drillthrough fields." },
    { term: "Back button", definition: "A report button configured to return a drillthrough user to the originating report state." },
    { term: "Visual tooltip", definition: "Contextual values displayed when a user points to a data mark, based on visual and tooltip fields." },
    { term: "Report-page tooltip", definition: "A specially configured report page displayed as richer contextual hover content for supported visuals." },
    { term: "Help tooltip", definition: "Guidance displayed from a visual-header help icon to explain meaning or interaction." },
    { term: "Hover dependency", definition: "A design defect in which essential information is available only through pointer hover." },
    { term: "Security boundary", definition: "The enforced control that prevents unauthorized access, independent of visual hiding or navigation." },
    { term: "Row-level security", definition: "Semantic-model rules that restrict which table rows a user can query." },
    { term: "Object-level security", definition: "Security that hides specified model tables or columns from unauthorized users." },
    { term: "Static RLS", definition: "A model role with fixed filter rules, commonly mapped to approved groups." },
    { term: "Dynamic RLS", definition: "A security design that filters data according to the current user's identity and an access mapping." },
    { term: "Security role", definition: "A named collection of model filter rules assigned to approved users or groups." },
    { term: "Identity provider", definition: "The trusted system supplying authenticated user identity, commonly Microsoft Entra ID." },
    { term: "USERPRINCIPALNAME", definition: "A DAX function returning the current user's principal name in supported Power BI contexts." },
    { term: "Access bridge", definition: "A mapping table connecting authorized identities with one or more secured business entities." },
    { term: "Deny by default", definition: "A security policy in which unmatched identities receive no protected data unless access is explicitly granted." },
    { term: "Workspace role", definition: "A permission level controlling workspace management and content capabilities, separate from row filtering." },
    { term: "Build permission", definition: "Permission to create new content or query a semantic model beyond consuming an existing report." },
    { term: "Test as role", definition: "A Power BI feature used to evaluate report behavior under a selected RLS role or representative identity." },
    { term: "Data exfiltration", definition: "Unauthorized disclosure or extraction of protected information through reports, exports, queries, sharing, or other paths." },
    { term: "Validation", definition: "Evidence that a report satisfies approved business, data, security, usability, accessibility, and performance requirements." },
    { term: "Test case", definition: "A repeatable precondition, action, expected result, actual result, and evidence record." },
    { term: "Expected key set", definition: "The exact business identifiers an authorized test identity should be able to see." },
    { term: "Regression test", definition: "A repeated test proving that a change has not broken previously accepted behavior." },
    { term: "Defect", definition: "A verified difference between expected and actual report behavior." },
    { term: "Severity", definition: "The business impact classification of a defect, such as critical, high, medium, or low." },
    { term: "Retest", definition: "Execution of the original failed test after correction to prove the defect is closed." },
    { term: "User acceptance testing", definition: "Business-owner validation that the report supports approved decisions and workflows." },
    { term: "Release gate", definition: "A required condition that must pass before a report advances to production." },
    { term: "Performance budget", definition: "An approved maximum duration or resource threshold for a report element or interaction." },
    { term: "Performance Analyzer", definition: "A Power BI tool that records the durations of visual display, DAX query, and other report operations." },
    { term: "DAX Query View", definition: "A Power BI environment for running, inspecting, and refining DAX queries against the semantic model." },
    { term: "Release evidence pack", definition: "The preserved collection of requirements, tests, defects, retests, sign-offs, limitations, and deployment records." },
  ],

  formulas: [
    { id: "static-rls", name: "Static plant RLS", formula: "DimPlant[PlantCode] = \"A\"", meaning: "Allows only Plant A dimension rows for a fixed role.", requirement: "Assign approved security groups and avoid role proliferation when a governed dynamic design is more maintainable." },
    { id: "dynamic-rls", name: "Dynamic identity filter", formula: "UserPlantAccess[UserUPN] = USERPRINCIPALNAME()", meaning: "Filters the access table to rows assigned to the current identity.", requirement: "Normalize and govern identity values and verify relationship propagation to secured dimensions and facts." },
    { id: "context-title", name: "Drillthrough context title", formula: "Detail Title := \"Event Detail — \" & COALESCE(SELECTEDVALUE(DimPlant[PlantName]), \"Multiple Plants\")", meaning: "Displays selected drillthrough context in the destination title.", requirement: "Handle zero, one, and multiple selections without implying a false single context." },
    { id: "context-summary", name: "Visible context summary", formula: "Context Summary := CONCATENATEX(VALUES(DimSeverity[Severity]), DimSeverity[Severity], \", \")", meaning: "Creates a textual summary of visible severity values.", requirement: "Limit length and provide a clear fallback when all or many values are selected." },
    { id: "tooltip-count", name: "Tooltip event count", formula: "Tooltip Events := [Maintenance Events]", meaning: "Reuses the governed event-count measure in the hovered point's filter context.", requirement: "Do not create a competing definition solely for a tooltip." },
    { id: "tooltip-share", name: "Tooltip share", formula: "Tooltip Downtime Share := DIVIDE([Total Downtime], CALCULATE([Total Downtime], REMOVEFILTERS(DimAsset)))", meaning: "Shows an asset's share of downtime in the preserved report scope.", requirement: "Document denominator scope and verify RLS remains active." },
    { id: "qa-pass", name: "Validation pass rate", formula: "Pass Rate := DIVIDE([Passed Tests], [Executed Tests])", meaning: "Returns the share of executed tests that passed.", requirement: "Do not count blocked or unexecuted tests as passes." },
    { id: "defect-closure", name: "Defect closure rate", formula: "Closure Rate := DIVIDE([Closed Defects], [Opened Defects])", meaning: "Measures closed defects relative to confirmed opened defects for the release.", requirement: "Report open critical and high defects separately; 100% closure does not prove complete test coverage." },
    { id: "performance-budget", name: "Performance budget result", formula: "Performance Status := IF([Visual Duration ms] <= [Budget ms], \"Pass\", \"Fail\")", meaning: "Classifies a measured visual duration against its approved budget.", requirement: "Use repeatable test conditions and record the individual DAX, visual-display, and other durations." },
    { id: "security-count", name: "Authorized event count", formula: "Authorized Events := COUNTROWS(FactMaintenanceEvent)", meaning: "Counts events visible after model relationships and RLS rules are applied.", requirement: "Compare the result with the exact expected event-key set for each representative identity." },
  ],

  workedExamples: [
    {
      id: "example-06-06-01",
      title: "Design a drillthrough destination",
      problem: "An executive selects Plant A's Critical downtime bar and needs event-level evidence.",
      solutionSteps: [
        "Create an Event Detail page with Plant and Severity in the drillthrough field well.",
        "Enable Keep all filters only if year, asset type, and approved slicer context must follow the user.",
        "Add a dynamic title summarizing plant, severity, and period.",
        "Show event key, asset, dates, downtime, cost, owner, and status with a labeled Back button.",
        "Test single, multiple, blank, and no-record contexts under each security role.",
      ],
      answer: "The destination preserves the investigation context, displays supporting records, and provides an accessible route back.",
      interpretation: "Drillthrough is useful when it answers a predictable next question rather than merely exposing more columns.",
    },
    {
      id: "example-06-06-02",
      title: "Distinguish drilldown from drillthrough",
      problem: "A monthly trend contains Year, Quarter, Month, and Day. Users also need the maintenance records behind one month.",
      solutionSteps: [
        "Use drilldown to move within the time hierarchy on the same chart.",
        "Use drillthrough to open a separate detail page filtered to the selected month and other approved context.",
        "Label each interaction clearly and test keyboard discoverability.",
        "Ensure both paths remain subject to the same RLS model filters.",
      ],
      answer: "Drilldown changes hierarchy level inside a visual; drillthrough changes page while transferring selected context.",
      interpretation: "Similar names represent different user tasks and require different validation cases.",
    },
    {
      id: "example-06-06-03",
      title: "Use a tooltip without hiding essential evidence",
      problem: "A bar chart needs event count, downtime share, target, freshness, and a brief definition.",
      solutionSteps: [
        "Keep the primary value, unit, and decision message visible in the chart title, label, or nearby text.",
        "Place supplemental event count, share, target, freshness, and definition on a report-page tooltip.",
        "Ensure tooltip measures inherit the hovered point's context and RLS filters.",
        "Provide important supporting information through visible content or an accessible data path, not hover alone.",
      ],
      answer: "The tooltip adds context but does not become the only source of essential meaning.",
      interpretation: "Tooltips reduce clutter only when they remain supplemental and accessible alternatives exist.",
    },
    {
      id: "example-06-06-04",
      title: "Implement dynamic RLS",
      problem: "Plant managers should see one or more approved plants without creating a separate model role for every manager.",
      solutionSteps: [
        "Create UserPlantAccess with one row per approved UserUPN–PlantKey pair.",
        "Filter the access table by USERPRINCIPALNAME().",
        "Create an intentional relationship path from access rows to DimPlant and then to facts.",
        "Return zero rows for unmatched identities.",
        "Test representative users with exact expected plant and event keys in Desktop and the service.",
      ],
      answer: "A governed access bridge supports maintainable many-user, many-entity authorization with deny-by-default behavior.",
      interpretation: "Dynamic RLS moves role membership complexity into controlled access data, which itself needs ownership and auditability.",
    },
    {
      id: "example-06-06-05",
      title: "Test role results with exact keys",
      problem: "Plant A Manager should see event keys 1001, 1002, 1003, and 1004 only.",
      solutionSteps: [
        "Run the report or model query as the Plant A representative identity.",
        "Export or query the visible event keys under controlled test conditions.",
        "Compare the actual key set with the approved four-key expectation.",
        "Fail the test for any missing key, unexpected key, duplicate, or incorrect aggregate total.",
      ],
      answer: "A matching count is insufficient; exact key-set equality proves both inclusion and exclusion.",
      interpretation: "Security testing must search for overexposure, not only confirm that some expected rows appear.",
    },
    {
      id: "example-06-06-06",
      title: "Validate a copied drillthrough link",
      problem: "A Plant A manager copies a detail-page URL and sends it to a Plant B manager.",
      solutionSteps: [
        "Open the link as the Plant B test identity.",
        "Confirm that model RLS re-evaluates for Plant B rather than preserving Plant A authorization.",
        "Verify the destination either shows authorized Plant B context or a clear empty state.",
        "Repeat for export, tooltip, Analyze in Excel or Build pathways when those capabilities are allowed.",
      ],
      answer: "The URL may preserve report filters, but it cannot grant access beyond the receiving user's model authorization.",
      interpretation: "Navigation state and authorization state are separate systems.",
    },
    {
      id: "example-06-06-07",
      title: "Close a report defect correctly",
      problem: "A tooltip shows total enterprise downtime to Plant A managers because its denominator removes the secured plant filter.",
      solutionSteps: [
        "Classify the issue as a critical security defect and block release.",
        "Reproduce it under the representative Plant A identity and preserve evidence.",
        "Repair the measure or model so denominator logic never bypasses the RLS filter.",
        "Rerun the original test plus adjacent tooltip, drillthrough, total, and export regression tests.",
        "Close only after the actual results and reviewer approval are recorded.",
      ],
      answer: "A security defect closes after correction, original-case retest, adjacent regression testing, and evidence review.",
      interpretation: "Changing the formula is progress; verified closure is completion.",
    },
    {
      id: "example-06-06-08",
      title: "Use Performance Analyzer evidence",
      problem: "The detail page feels slow, but the team does not know which visual is responsible.",
      solutionSteps: [
        "Set a repeatable page, role, filter state, cache condition, and interaction.",
        "Start Performance Analyzer, clear the recording, and refresh the visuals.",
        "Sort or inspect durations and identify the slowest visual and DAX query.",
        "Run the query in DAX Query View when deeper measure investigation is needed.",
        "Apply one controlled change and repeat the same test conditions.",
      ],
      answer: "Optimize the measured bottleneck and preserve before-and-after evidence instead of guessing from page complexity.",
      interpretation: "Performance is an empirical quality requirement, not a subjective impression.",
    },
  ],

  interactiveExploration: {
    title: "Report Quality Laboratory: Follow One Question Across Every Boundary",
    description:
      "Start with a critical-downtime summary, navigate to detail, inspect supplemental context, switch security identities, and execute the release test matrix.",
    instructions: [
      "Select Plant A, Critical severity, and December 2026 on the summary page.",
      "Record the current filter context and expected event keys before drilling through.",
      "Open the detail page and verify title, filters, records, totals, empty state, and Back behavior.",
      "Inspect visual and report-page tooltips and identify any essential information available only on hover.",
      "Repeat as Executive, Plant A Manager, Plant B Manager, Plant C Manager, and an unmapped identity.",
      "Attempt copied-link, alternate-page, bookmark, tooltip, and export paths under each role.",
      "Run accessibility tests using keyboard order, visible focus, titles, alt text, contrast, zoom, and Show Data.",
      "Record Performance Analyzer timings, identify the slowest visual, apply one repair, and retest.",
      "Log every defect with severity, owner, evidence, correction, retest, and release status.",
    ],
    investigationQuestions: [
      "Which report context is transferred and which is reconstructed?",
      "Which model filters come from RLS rather than the report page?",
      "Can any interaction reveal rows outside the expected key set?",
      "Can the user understand the key conclusion without hovering?",
      "What happens when a valid role has no rows in the selected period?",
      "Which defect blocks release even if all measures are arithmetically correct?",
      "Which visual exceeds the performance budget and why?",
      "What evidence would allow an independent reviewer to reproduce the release decision?",
    ],
    expectedDiscovery:
      "Trustworthy reporting requires the same decision meaning, authorized population, accessible explanation, and validated result across every navigation and interaction path.",
  },

  realWorldApplications: [
    { field: "Manufacturing and Robotics", application: "Let managers drill from plant KPIs to asset failures while RLS limits authorized facilities and validation proves event keys, downtime totals, accessibility, and query performance." },
    { field: "Education", application: "Navigate from school or course outcomes to learner interventions while protecting student records by authorized school, class, and role." },
    { field: "Retail", application: "Move from regional sales signals to store and transaction detail while securing assigned territories and validating promotion, return, and margin context." },
    { field: "Healthcare", application: "Investigate capacity or wait-time signals while enforcing facility and role access, avoiding hover-only clinical evidence, and auditing export pathways." },
    { field: "Finance", application: "Drill from account variances to journal or transaction support while separating report navigation from legal-entity and account security." },
    { field: "AI Operations", application: "Navigate from model quality or drift alerts to reviewed predictions while restricting sensitive cases and preserving model version, cohort, threshold, and time context." },
  ],

  aiConnection: {
    title: "AI Can Suggest Interactions, but It Cannot Approve Security",
    explanation:
      "An AI assistant can draft RLS DAX, tooltip measures, or a test plan, but it does not know the organization's authoritative identity source, access ownership, workspace permissions, export policy, legal restrictions, expected key sets, or accepted performance budget unless those are supplied.",
    examples: [
      "Ask the assistant to separate navigation requirements from authorization requirements.",
      "Require exact allowed and denied entity keys for every proposed security test.",
      "Ask for negative tests involving unmapped users, copied links, exports, alternate pages, and overlapping roles.",
      "Require accessibility checks so generated tooltip designs do not hide essential evidence behind hover.",
      "Require a defect and regression matrix rather than a general statement that the report was tested.",
    ],
    caution:
      "Never publish AI-generated RLS or security-sensitive measures after testing only as an administrator or model author. Validate representative consumer identities in the Power BI service and preserve evidence.",
    reflectionQuestion:
      "Which security facts and expected results must Luminery AI request before it reviews or generates an RLS design?",
  },

  pythonLab: {
    title: "Python Lab — Simulate RLS, Drillthrough Context, and Release Validation",
    objective:
      "Create a maintenance-event model and access bridge, enforce deny-by-default row filtering, validate exact role key sets, simulate drillthrough and tooltip context, test performance budgets, and export release evidence.",
    code: `from pathlib import Path
import json
import pandas as pd

output_dir = Path("report_validation_output")
output_dir.mkdir(exist_ok=True)

events = pd.DataFrame({
    "EventKey": list(range(1001, 1013)),
    "Plant": ["A", "A", "A", "A", "B", "B", "B", "C", "C", "C", "C", "C"],
    "Asset": ["Mixer-1", "Robot-1", "Mixer-2", "Pump-1", "Robot-2", "Mixer-3", "Pump-2", "Robot-3", "Mixer-4", "Pump-3", "Robot-4", "Mixer-5"],
    "Severity": ["High", "Critical", "Medium", "Critical", "High", "Critical", "Medium", "High", "Critical", "Medium", "Critical", "Low"],
    "Month": ["2026-12"] * 12,
    "DowntimeMinutes": [18, 42, 9, 31, 26, 42, 18, 24, 55, 12, 38, 6],
    "RepairCost": [210, 950, 90, 610, 330, 880, 140, 290, 1200, 110, 760, 60],
})

access = pd.DataFrame({
    "UserUPN": [
        "executive@example.com", "executive@example.com", "executive@example.com",
        "manager.a@example.com", "manager.b@example.com", "manager.c@example.com",
    ],
    "Plant": ["A", "B", "C", "A", "B", "C"],
})

expected_keys = {
    "executive@example.com": set(range(1001, 1013)),
    "manager.a@example.com": {1001, 1002, 1003, 1004},
    "manager.b@example.com": {1005, 1006, 1007},
    "manager.c@example.com": {1008, 1009, 1010, 1011, 1012},
    "unmapped@example.com": set(),
}

def visible_events(user_upn):
    normalized = user_upn.strip().lower()
    allowed = set(
        access.loc[access["UserUPN"].str.lower() == normalized, "Plant"]
    )
    if not allowed:
        return events.iloc[0:0].copy()
    return events.loc[events["Plant"].isin(allowed)].copy()

def drillthrough(user_upn, context):
    visible = visible_events(user_upn)
    for column, allowed_values in context.items():
        visible = visible.loc[visible[column].isin(set(allowed_values))]
    return visible.sort_values("EventKey").reset_index(drop=True)

def tooltip_summary(user_upn, context):
    detail = drillthrough(user_upn, context)
    return {
        "events": int(len(detail)),
        "downtime_minutes": int(detail["DowntimeMinutes"].sum()),
        "repair_cost": float(detail["RepairCost"].sum()),
    }

# Exact-key RLS tests prove authorized inclusion and unauthorized exclusion.
rls_rows = []
for user_upn, expected in expected_keys.items():
    actual = set(visible_events(user_upn)["EventKey"])
    assert actual == expected, f"RLS mismatch for {user_upn}: {actual} != {expected}"
    rls_rows.append({
        "user_upn": user_upn,
        "expected_rows": len(expected),
        "actual_rows": len(actual),
        "passed": actual == expected,
    })

# Drillthrough carries context but can never expand the RLS population.
plant_a_critical = drillthrough(
    "manager.a@example.com",
    {"Plant": {"A"}, "Severity": {"Critical"}, "Month": {"2026-12"}},
)
assert set(plant_a_critical["EventKey"]) == {1002, 1004}
assert set(plant_a_critical["Plant"]) == {"A"}

copied_link_result = drillthrough(
    "manager.b@example.com",
    {"Plant": {"A"}, "Severity": {"Critical"}, "Month": {"2026-12"}},
)
assert copied_link_result.empty

# Tooltip values reuse only the current user's visible drillthrough population.
tooltip_a = tooltip_summary(
    "manager.a@example.com",
    {"Plant": {"A"}, "Severity": {"Critical"}},
)
assert tooltip_a == {"events": 2, "downtime_minutes": 73, "repair_cost": 1560.0}

# Release validation: defects close to zero and all visuals meet the budget.
defect_burn_down = [14, 8, 3, 0]
assert all(current <= previous for previous, current in zip(defect_burn_down, defect_burn_down[1:]))
assert defect_burn_down[-1] == 0

visual_timings_ms = {
    "Executive KPIs": 420,
    "Downtime Trend": 610,
    "RLS-Safe Tooltip": 185,
    "Event Detail": 290,
}
performance_budget_ms = 750
assert all(duration <= performance_budget_ms for duration in visual_timings_ms.values())

rls_matrix = pd.DataFrame(rls_rows)
rls_matrix.to_csv(output_dir / "rls_test_matrix.csv", index=False)
plant_a_critical.to_csv(output_dir / "plant_a_critical_drillthrough.csv", index=False)

release_summary = {
    "rls_tests_passed": bool(rls_matrix["passed"].all()),
    "unmapped_user_rows": int(len(visible_events("unmapped@example.com"))),
    "copied_link_rows_for_manager_b": int(len(copied_link_result)),
    "plant_a_critical_tooltip": tooltip_a,
    "defect_burn_down": defect_burn_down,
    "open_defects_after_final_cycle": defect_burn_down[-1],
    "performance_budget_ms": performance_budget_ms,
    "visual_timings_ms": visual_timings_ms,
    "performance_passed": all(
        duration <= performance_budget_ms
        for duration in visual_timings_ms.values()
    ),
}

with (output_dir / "release_validation_summary.json").open("w", encoding="utf-8") as file:
    json.dump(release_summary, file, indent=2)

print(rls_matrix.to_string(index=False))
print("\\nPlant A critical drillthrough keys:", plant_a_critical["EventKey"].tolist())
print("Copied Plant A link rows for Plant B manager:", len(copied_link_result))
print("Plant A critical tooltip:", tooltip_a)
print("Defect burn-down:", defect_burn_down)
print("Artifacts:", sorted(path.name for path in output_dir.iterdir()))
print("All RLS, drillthrough, tooltip, defect, and performance tests passed.")`,
    questions: [
      "Why does exact key-set equality provide stronger RLS evidence than a row count alone?",
      "Why does the Plant B manager receive zero rows from a copied Plant A drillthrough context?",
      "How do the tooltip calculations inherit both report context and RLS restrictions?",
      "What risk would be created by returning all rows when a user is absent from the access table?",
      "Which additional tests are needed for users with access to two plants?",
      "How would overlapping model roles affect the effective visible population?",
      "Why must a zero-defect result still be paired with test-coverage evidence?",
      "How should performance budgets change for DirectQuery, mobile, or high-latency environments?",
    ],
    expectedOutcome:
      "A reproducible security and report-validation evidence pack proving exact role populations, deny-by-default behavior, context-preserving drillthrough, RLS-safe tooltips, defect closure, and measured performance budgets.",
  },

  guidedPractice: [
    { id: "gp-06-06-01", question: "Explain the difference between drilldown and drillthrough.", answer: "Drilldown changes hierarchy level inside the same visual; drillthrough opens a destination page filtered by selected context." },
    { id: "gp-06-06-02", question: "Why is a hidden report page not a security control?", answer: "Users may reach data through links, navigation, exports, queries, or other report paths. Security must be enforced by semantic-model and permission controls." },
    { id: "gp-06-06-03", question: "What should dynamic RLS return for an unmapped user?", answer: "No protected rows unless an explicit approved policy grants another result." },
    { id: "gp-06-06-04", question: "List four tooltip accessibility rules.", answer: "Keep essential information visible, avoid hover-only instructions, use accessible titles and labels, and provide Show Data or another accessible equivalent." },
    { id: "gp-06-06-05", question: "What evidence proves a Plant A role with four events?", answer: "The exact expected event-key set, correct aggregates, excluded Plant B/C keys, screenshots or query results, role identity, test conditions, and a passed record." },
    { id: "gp-06-06-06", question: "A visual records 840 ms against a 750 ms budget. What is the result?", answer: "Fail. Inspect its DAX query and visual overhead, repair the bottleneck, then retest under identical conditions." },
  ],

  independentPractice: [
    "Design a three-page executive, trend, and event-detail navigation map with entry, exit, and reset behavior.",
    "Create a drillthrough context contract listing explicit fields, preserved filters, ignored filters, empty state, and Back behavior.",
    "Design a report-page tooltip that adds context without containing essential hover-only evidence.",
    "Create a user-to-entity access bridge for five example identities, including one multi-entity and one unmapped user.",
    "Write a static RLS rule and a dynamic RLS rule, then explain which is more maintainable for the scenario.",
    "Build an exact-key security test matrix covering allowed, denied, overlapping, unmapped, and copied-link cases.",
    "Create a twenty-case report test plan spanning data, measures, visuals, interactions, accessibility, security, and performance.",
    "Define release criteria, defect severity rules, retest evidence, owner sign-off, monitoring, and rollback steps.",
  ],

  commonMistakes: [
    { mistake: "Treating page navigation as drillthrough", correction: "Use drillthrough fields when the destination must receive selected data context." },
    { mistake: "Putting every possible field in the drillthrough well", correction: "Pass only context needed to answer the destination question and test filter interactions." },
    { mistake: "Hiding the destination context", correction: "Use a visible dynamic title and filter summary so users know what they are investigating." },
    { mistake: "Placing essential definitions only in tooltips", correction: "Keep required meaning visible and use tooltips for supplemental context." },
    { mistake: "Assuming hidden pages protect data", correction: "Enforce security through the model and platform permissions." },
    { mistake: "Testing RLS only as the report author", correction: "Use representative identities and Test as role in Desktop and the service." },
    { mistake: "Checking counts without checking keys", correction: "Compare exact authorized and unauthorized key sets plus reconciled aggregates." },
    { mistake: "Granting all rows to unmapped users", correction: "Use deny-by-default behavior and a governed exception process." },
    { mistake: "Removing filters in a measure without considering RLS", correction: "Verify denominator logic never broadens protected model authorization." },
    { mistake: "Ignoring overlapping role behavior", correction: "Test users assigned to multiple roles and document the resulting access union or approved design." },
    { mistake: "Closing a defect when code changes", correction: "Require original-case retest, regression tests, evidence, and reviewer approval." },
    { mistake: "Optimizing without measurement", correction: "Use Performance Analyzer under repeatable conditions and compare before-and-after results." },
  ],

  discussionQuestions: [
    "Which filters should follow a user from an executive page to event detail?",
    "When does Keep all filters create helpful continuity, and when does it create confusing over-filtering?",
    "Which tooltip content is supplemental and which belongs visibly on the page?",
    "When is static RLS safer or simpler than dynamic RLS?",
    "Who should own and approve the user-access mapping table?",
    "How should a report communicate an authorized zero-row result without implying an error?",
    "Which defect categories must block production release?",
    "What evidence should be retained for audit, incident response, and future regression testing?",
  ],

  formativeAssessment: {
    title: "Formative Assessment — 50 Points",
    instructions:
      "Answer all ten questions. Show configuration logic, expected results, security reasoning, or validation evidence where requested. Each question is worth 5 points.",
    items: [
      { id: "check-06-06-01", type: "concept", points: 5, prompt: "Distinguish drilldown, drillthrough, and page navigation.", sampleAnswer: "Drilldown changes hierarchy level in one visual; drillthrough opens a context-filtered destination page; page navigation changes page without inherently transferring a selected data context." },
      { id: "check-06-06-02", type: "design", points: 5, prompt: "List five requirements for an effective drillthrough page.", sampleAnswer: "Purposeful drillthrough fields, visible context title, supporting detail, clear empty state, Back action, preserved metric definitions, accessibility, and role testing; any five." },
      { id: "check-06-06-03", type: "accessibility", points: 5, prompt: "Why should essential evidence not exist only in a tooltip?", sampleAnswer: "Hover may be unavailable or difficult for keyboard, touch, motor-impaired, and screen-reader users; essential meaning needs a visible or accessible alternative." },
      { id: "check-06-06-04", type: "security", points: 5, prompt: "Explain why hiding a page does not secure its data.", sampleAnswer: "Page visibility controls interface navigation, not model authorization. Data may remain accessible through links, other pages, exports, or queries unless model and platform security enforce restrictions." },
      { id: "check-06-06-05", type: "dax", points: 5, prompt: "Write the central predicate for dynamic RLS using a governed UserPlantAccess table.", sampleAnswer: "UserPlantAccess[UserUPN] = USERPRINCIPALNAME(), with approved relationships propagating authorized plants to facts." },
      { id: "check-06-06-06", type: "testing", points: 5, prompt: "Why is an exact expected key set stronger than a count in an RLS test?", sampleAnswer: "Two different populations can have the same count; exact keys prove both required inclusion and unauthorized exclusion." },
      { id: "check-06-06-07", type: "security", points: 5, prompt: "State the expected result for an unmapped identity and explain why.", sampleAnswer: "Zero protected rows under deny by default, preventing accidental broad access when identity mapping is missing or malformed." },
      { id: "check-06-06-08", type: "quality", points: 5, prompt: "Name eight report-validation categories.", sampleAnswer: "Data, refresh, model, measures, visuals, interactions, security, accessibility, performance, and user acceptance; any eight." },
      { id: "check-06-06-09", type: "defect", points: 5, prompt: "What evidence is required to close a critical defect?", sampleAnswer: "Reproduction, corrected implementation, original-case pass, adjacent regression passes, preserved evidence, owner or reviewer approval, and release-status update." },
      { id: "check-06-06-10", type: "performance", points: 5, prompt: "Describe a fair before-and-after Performance Analyzer test.", sampleAnswer: "Use the same page, role, filters, data, cache condition, device or capacity context, interaction, and repeated recording; compare component durations and generated DAX queries." },
    ],
  },

  researchExtension: {
    title: "Research Extension — Secure Report Exploration Study",
    prompt:
      "Investigate one summary-to-detail reporting workflow and determine whether navigation, contextual explanation, security, accessibility, and validation support a trustworthy decision.",
    choices: [
      "Manufacturing plant and asset failure investigation",
      "School, course, and learner intervention analysis",
      "Retail region, store, and transaction exploration",
      "Healthcare facility and encounter operations",
      "AI model, cohort, prediction, and review monitoring",
    ],
    requirements: [
      "State the stakeholder, decision, population, grain, and protected entities",
      "Map summary, tooltip, drillthrough, detail, and return paths",
      "Define identity source, static or dynamic RLS, and deny-by-default rule",
      "Create exact allowed and denied key sets for five identities",
      "Test copied links, bookmarks, exports, alternate pages, and tooltips",
      "Run keyboard, focus, title, alt-text, contrast, zoom, and Show Data tests",
      "Capture performance budgets and measured durations",
      "Log defects and show at least two repair-and-retest cycles",
      "Provide a release recommendation, residual risks, monitoring plan, and limitations",
    ],
  },

  portfolioArtifact: {
    title: "Portfolio Artifact — Secure Executive Power BI Validation Pack",
    purpose:
      "Create an employer-ready report experience and evidence pack proving secure exploration, accessible context, controlled performance, and disciplined release validation.",
    requiredSections: [
      "Decision brief and report audience matrix",
      "Page map and summary-to-detail navigation diagram",
      "Drillthrough field and filter-transfer contract",
      "Tooltip inventory with essential-versus-supplemental classification",
      "Security architecture with identity, roles, access bridge, relationships, RLS, OLS, and permissions",
      "Role-to-entity matrix with exact expected keys and totals",
      "Data, model, measure, visual, interaction, accessibility, security, and performance tests",
      "Defect register and burn-down graph",
      "Performance Analyzer before-and-after evidence",
      "Release decision, approvals, limitations, monitoring, and rollback plan",
    ],
    evidenceChecklist: [
      "Discoverable drillthrough from at least three relevant source visuals",
      "Visible dynamic destination context and accessible Back action",
      "No essential information available only through hover",
      "Static or dynamic RLS with governed identity ownership",
      "Unmapped user returns zero protected rows",
      "Exact-key tests for at least five identities",
      "Copied-link, alternate-page, bookmark, export, tooltip, and service tests",
      "Critical and high defects reduced to zero before release",
      "All required visuals meet measured performance budgets",
      "Independent reviewer can reproduce every release-gate result",
    ],
  },

  growthIndicators: [
    { title: "Experience Architect", description: "You connect summaries, tooltips, drillthrough, detail, reset, and return paths to real analytical questions." },
    { title: "Security Modeler", description: "You separate navigation from authorization and test static or dynamic RLS with exact expected populations." },
    { title: "Quality Engineer", description: "You design repeatable tests, classify defects, preserve evidence, and require verified closure." },
    { title: "Release Steward", description: "You balance correctness, accessibility, performance, ownership, monitoring, and residual risk before publication." },
  ],

  reflection: [
    "What question should the user answer after drilling through?",
    "Which filters must transfer, and which should not?",
    "Can the user see and understand the destination context?",
    "Is any essential meaning available only on hover?",
    "What security boundary actually protects the data?",
    "What exact keys should this identity see and never see?",
    "What happens when the user is unmapped or assigned to overlapping roles?",
    "Can copied links, bookmarks, alternate pages, tooltips, or exports expand access?",
    "Which tests cover data, calculations, visuals, interactions, accessibility, security, and performance?",
    "Which open defect would block release?",
    "What measured evidence supports the performance claim?",
    "Can an independent reviewer reproduce the release decision?",
  ],

  summary: [
    "Drilldown changes hierarchy level; drillthrough opens a destination page with selected context; page navigation changes pages without inherently transferring data context.",
    "Drillthrough pages need purposeful fields, visible context, useful evidence, clear empty states, accessible return, and role-aware validation.",
    "Visual, report-page, and help tooltips provide supplemental context but must not hide essential information behind hover.",
    "Report navigation and page visibility are not security boundaries.",
    "RLS restricts model rows; OLS, workspace roles, sharing, and Build permission protect different capabilities.",
    "Dynamic RLS requires a governed identity-to-entity mapping and an intentional relationship path.",
    "Deny-by-default behavior protects against missing or malformed identity mappings.",
    "Security tests must compare exact allowed and denied key sets, not only counts or screenshots.",
    "Test representative users in Desktop and the Power BI service, including overlapping roles and unmapped identities.",
    "Copied links, alternate pages, bookmarks, tooltips, exports, and queries must never expand authorized data.",
    "A complete test plan covers data, refresh, model, measures, visuals, interactions, accessibility, security, performance, and acceptance.",
    "Defects close only after correction, original-case retest, regression testing, evidence, and review.",
    "Critical and high security or correctness defects block release.",
    "Performance Analyzer and DAX Query View support measured diagnosis and before-and-after validation.",
    "A release evidence pack preserves requirements, tests, defects, approvals, limitations, monitoring, and rollback guidance.",
    "Graphs such as role-visible-row counts and defect burn-down make security expectations and release progress auditable.",
    "AI-generated navigation, tooltips, RLS, or test plans remain untrusted until identity, access, expected results, and negative tests are independently verified.",
  ],

  previousLesson: {
    id: "data-ai-m06-l05",
    moduleNumber: 6,
    slug: "time-intelligence-and-performance-measures",
    title: "Time Intelligence and Performance Measures",
  },
  nextLesson: null,

  lumineryGuidance: {
    message:
      "Treat every interaction as a testable path and every identity as a test case. Navigation explains; the semantic model protects; evidence decides release.",
    prompt:
      "Act as my senior Power BI report-experience architect, security engineer, accessibility reviewer, performance analyst, quality lead, and release mentor. Help me complete Module 6 Lesson 6 one verified gate at a time. Require stakeholder, decision, page map, drillthrough question, transferred filters, visible destination context, Back path, tooltip classification, keyboard alternative, identity source, role design, access bridge, deny-by-default behavior, relationship path, expected allowed and denied keys, copied-link and export tests, workspace and Build permissions, data and measure reconciliation, accessibility checks, Performance Analyzer evidence, defect severity, retest, owner sign-off, monitoring, and rollback. Do not approve hidden pages as security, essential hover-only evidence, unmapped full access, count-only RLS tests, testing only as administrator, unexplained overlapping roles, security-insensitive denominators, closed defects without retest, subjective performance claims, or release without reproducible evidence.",
    coachingQuestions: [
      "What exact next question does drillthrough answer?",
      "Which filters should arrive at the destination?",
      "Can users understand the page without hovering?",
      "Which control—not navigation—enforces authorization?",
      "What are this identity's exact allowed and denied keys?",
      "What happens for unmapped and overlapping-role users?",
      "Which alternate path could expose data if untested?",
      "What defect blocks release?",
      "What measured performance evidence do we have?",
      "Can another reviewer reproduce every pass result?",
    ],
  },
};

export default lesson06;
