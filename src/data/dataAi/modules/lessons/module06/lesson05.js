const lesson05 = {
  id: "data-ai-m06-l05",
  courseId: "data-ai-foundations",
  moduleId: "data-ai-foundations-module-06",
  moduleNumber: 6,
  lessonNumber: 5,
  slug: "time-intelligence-and-performance-measures",
  title: "Time Intelligence and Performance Measures",
  shortTitle: "Time Intelligence and KPIs",
  subtitle:
    "Build a governed calendar, compare current performance with prior periods and targets, calculate YTD and rolling measures, and validate operational KPIs before publishing them in Power BI.",
  status: "available",
  duration: "5–6 hours",
  level: "Beginner to Professional",

  essentialQuestion:
    "How can a Power BI model compare performance across time without mixing calendars, incomplete periods, incorrect denominators, or misleading KPI directions?",
  bigIdea:
    "Time intelligence is a model-and-measure system, not a single DAX function. Trustworthy comparisons require a continuous date dimension, intentional date relationships, reusable base measures, clearly defined comparison periods, honest targets, and tests that prove every value at daily, monthly, year-to-date, rolling, and total levels.",

  whyThisLessonExists: {
    title: "A Trend Is Only as Trustworthy as Its Calendar and Comparison Contract",
    introduction:
      "A report can display a polished year-over-year arrow while comparing different numbers of days, an incomplete current month with a complete prior month, or events by the wrong date role. These errors often survive visual review because the results look plausible.",
    centralProblem:
      "A maintenance dashboard reports that downtime improved 28% year over year. The current year contains only nine months, the previous year contains twelve, the fact table has missing dates, and the same report alternates between event-opened and event-completed dates. The arithmetic is valid, but the comparison is not decision-ready.",
    purpose:
      "This lesson develops a controlled time-intelligence workflow: build and test the date dimension, name date roles, branch measures from governed bases, create prior-period and accumulation measures, define target and direction logic, handle incomplete periods, calculate maintenance performance indicators, and verify both correctness and query performance.",
  },

  problemFirst: {
    title: "Opening Investigation: Did Downtime Really Improve?",
    scenario:
      "December 2026 downtime is 58 minutes. November 2026 is 60 minutes, December 2025 is 80 minutes, and the monthly target is 90 minutes. A dashboard shows three green indicators without explaining which baseline each indicator uses.",
    questions: [
      "What question does the previous-month comparison answer?",
      "What different question does the previous-year comparison answer?",
      "Should lower downtime be treated as favorable while higher availability is favorable?",
      "How should the dashboard label a 58-minute actual against a 90-minute maximum target?",
      "What should happen if the selected month is incomplete?",
      "Which date role—opened, completed, inspected, or posted—controls the measure?",
      "What hand-calculated values would prove the measures are correct?",
    ],
    expectedInsight:
      "One actual value can support several valid comparisons, but each needs a named baseline, aligned period, direction rule, and independent test. A green arrow without that contract is ambiguous evidence.",
  },

  visualModels: [
    {
      id: "time-intelligence-foundation",
      type: "lifecycle",
      title: "The Time-Intelligence Foundation",
      description:
        "Move from calendar design to a validated time-based result. A failed gate sends the measure back for repair.",
      stages: [
        { label: "1. Business calendar", detail: "Define calendar or fiscal year, week rules, holidays, time zone, and reporting cutoff." },
        { label: "2. Date dimension", detail: "Create one continuous, unique date row with stable year, quarter, month, week, and sort attributes." },
        { label: "3. Date role", detail: "Relate the calendar to the approved fact date such as CompletedDate; name alternate roles explicitly." },
        { label: "4. Base measure", detail: "Start with a reconciled measure such as Total Downtime, Events, Cost, or Operating Hours." },
        { label: "5. Period set", detail: "Define current, prior, year-to-date, rolling, or comparable completed periods." },
        { label: "6. Comparison", detail: "Calculate absolute change, percent change, target variance, attainment, or reliability ratio." },
        { label: "7. Display contract", detail: "Apply unit, format, blank policy, favorable direction, label, and incomplete-period warning." },
        { label: "8. Validation", detail: "Reconcile dates and totals, hand-check boundary periods, test filters, and measure query performance." },
      ],
      feedback:
        "Do not write SAMEPERIODLASTYEAR until the date table, active date role, current-period definition, and expected comparison are approved.",
      interpretation:
        "Time intelligence begins with calendar semantics and ends with evidence; DAX sits in the middle.",
    },
    {
      id: "kpi-comparison-contract",
      type: "lifecycle",
      title: "The KPI Comparison Contract",
      description:
        "Every KPI card should disclose what is measured, what it is compared with, and how performance is judged.",
      stages: [
        { label: "Actual", detail: "Name the governed measure, population, unit, date role, and current period." },
        { label: "Baseline", detail: "Choose prior month, prior year, rolling average, budget, service level, or approved benchmark." },
        { label: "Alignment", detail: "Compare equal completed durations, equivalent seasons, and the same population whenever required." },
        { label: "Variance", detail: "Calculate Actual − Baseline and define which sign is favorable." },
        { label: "Rate", detail: "Use DIVIDE for percent variance or attainment and declare the denominator and zero policy." },
        { label: "Status", detail: "Apply approved thresholds, tolerance bands, and higher-is-better or lower-is-better logic." },
        { label: "Explanation", detail: "Show the selected period, baseline value, target, unit, freshness, and important caveats." },
        { label: "Action", detail: "Connect each status to an owner, investigation question, or operational response." },
      ],
      feedback:
        "A KPI without a denominator, direction rule, and period label is decoration—not management evidence.",
      interpretation:
        "The visual color is the final encoding of a documented decision rule, never the definition of the rule itself.",
    },
    {
      id: "time-measure-validation",
      type: "lifecycle",
      title: "Validate Time Measures Before Publication",
      description:
        "Use known-result tests and boundary cases instead of trusting a plausible line chart.",
      stages: [
        { label: "Calendar tests", detail: "Prove date uniqueness, continuity, range coverage, attributes, and chronological sort columns." },
        { label: "Relationship tests", detail: "Confirm the active role, alternate roles, cardinality, blank keys, and filter propagation." },
        { label: "Known month", detail: "Hand-calculate one current month, previous month, previous year, and target variance." },
        { label: "Boundary tests", detail: "Test January, year end, leap day, fiscal boundary, missing fact dates, and no prior period." },
        { label: "Accumulation tests", detail: "Confirm YTD resets at the approved year start and rolling windows contain the intended periods." },
        { label: "Filter tests", detail: "Repeat by plant, asset, severity, geography, and row-level security role." },
        { label: "Reconciliation", detail: "Tie monthly values to the base measure and source-controlled totals." },
        { label: "Performance", detail: "Use Performance Analyzer and DAX Query View to capture slow visuals and inspect generated queries." },
      ],
      feedback:
        "A passed grand total does not prove a time calculation; period boundaries and filter combinations reveal most defects.",
      interpretation:
        "Correctness, meaning, and performance are separate publication gates, and all three must pass.",
    },
  ],

  learningObjectives: [
    "Explain why time intelligence depends on a governed date dimension and semantic-model relationships.",
    "Create a continuous date table with unique dates and correctly sorted calendar attributes.",
    "Distinguish calendar, fiscal, ISO-week, 4-4-5, and operational reporting periods.",
    "Identify the active fact-date role and use alternate date roles intentionally.",
    "Build current-period measures from reconciled base measures.",
    "Use DATEADD, SAMEPERIODLASTYEAR, PREVIOUSMONTH, DATESYTD, and DATESINPERIOD appropriately.",
    "Calculate previous-period, previous-year, YTD, rolling, and moving-average measures.",
    "Calculate absolute variance, percent variance, target attainment, and gap-to-target safely.",
    "Define favorable direction separately for higher-is-better and lower-is-better measures.",
    "Calculate maintenance event rate, mean downtime, MTBF, MTTR, and availability from approved inputs.",
    "Explain why percentages, rates, and ratios must be recalculated at totals rather than summed or averaged blindly.",
    "Detect partial-period and unequal-duration comparisons.",
    "Handle missing prior periods, zero denominators, future dates, and blank results intentionally.",
    "Use variables and measure branching to make time calculations readable and reusable.",
    "Validate calendar coverage, period boundaries, totals, slicers, and alternate date roles.",
    "Use Performance Analyzer and DAX Query View as evidence for performance review.",
    "Reproduce time-intelligence logic in a tested pandas workflow.",
    "Create a governed KPI catalog with formulas, owners, thresholds, tests, and interpretation guidance.",
  ],

  prerequisiteKnowledge: [
    "Module 6 Lesson 3: date dimensions, star schemas, relationships, and date roles",
    "Module 6 Lesson 4: measures, filter context, CALCULATE, variables, DIVIDE, and USERELATIONSHIP",
    "Basic calendar arithmetic, rates, percentages, averages, and operational targets",
    "Power BI visuals, slicers, matrices, cards, and drill interactions",
    "Python with pandas, pathlib, JSON, periods, grouping, and assertions",
  ],

  vocabulary: [
    { term: "Time intelligence", definition: "Calculations that evaluate and compare measures across defined time periods." },
    { term: "Date dimension", definition: "A table with one row per date and attributes used to filter, group, sort, and compare facts over time." },
    { term: "Continuous calendar", definition: "A date sequence with no missing dates between its approved minimum and maximum." },
    { term: "Date key", definition: "The unique value used to identify a date row and relate facts to the date dimension." },
    { term: "Date role", definition: "The business meaning of a date relationship, such as opened, completed, shipped, posted, or inspected date." },
    { term: "Active relationship", definition: "The model relationship used automatically for filter propagation between the date dimension and fact table." },
    { term: "Inactive relationship", definition: "An existing alternate relationship that must be activated for a calculation, commonly with USERELATIONSHIP." },
    { term: "Calendar year", definition: "A twelve-month year running from January 1 through December 31." },
    { term: "Fiscal year", definition: "An organization-defined twelve-month accounting or reporting year that may not begin in January." },
    { term: "ISO week", definition: "A week-numbering system in which weeks begin Monday and week 1 follows the ISO first-week rule." },
    { term: "4-4-5 calendar", definition: "A retail calendar dividing each quarter into periods of four, four, and five weeks." },
    { term: "Current period", definition: "The date set represented by the present visual or filter context." },
    { term: "Previous period", definition: "The immediately preceding period at the approved comparison grain." },
    { term: "Prior year", definition: "The comparable period shifted one year earlier under the model's calendar rules." },
    { term: "Year to date", definition: "The accumulation from the start of the approved year through the current context's last included date." },
    { term: "Month to date", definition: "The accumulation from the beginning of the month through the current included date." },
    { term: "Quarter to date", definition: "The accumulation from the beginning of the quarter through the current included date." },
    { term: "Rolling window", definition: "A moving set of a fixed number of days or periods ending at an anchor date." },
    { term: "Moving average", definition: "The mean of a measure over a rolling window, used to reduce short-term variation." },
    { term: "Trailing twelve months", definition: "A rolling accumulation over the latest twelve completed or selected months." },
    { term: "DATEADD", definition: "A DAX function returning dates shifted by a specified number of intervals." },
    { term: "SAMEPERIODLASTYEAR", definition: "A DAX function returning a date set shifted one year earlier for comparison." },
    { term: "DATESYTD", definition: "A DAX function returning year-to-date dates for the current context and approved year end." },
    { term: "DATESINPERIOD", definition: "A DAX function returning a date interval anchored at a specified date for rolling calculations." },
    { term: "Comparable period", definition: "A baseline period aligned to the current period's duration, season, population, and cutoff rules." },
    { term: "Partial period", definition: "A month, quarter, or year whose data is not complete through its normal end date." },
    { term: "As-of date", definition: "The latest date through which the report's data is considered complete and approved." },
    { term: "Snapshot fact", definition: "A fact table capturing a state or balance at defined points in time rather than recording additive transactions." },
    { term: "Semi-additive measure", definition: "A measure that can be aggregated across some dimensions but not summed across time, such as inventory balance." },
    { term: "KPI", definition: "A governed performance measure tied to a decision, target, interpretation, owner, and action." },
    { term: "Target", definition: "An approved desired, maximum, minimum, or range value used to judge performance." },
    { term: "Variance", definition: "The signed difference between actual performance and a baseline or target." },
    { term: "Variance percent", definition: "Variance divided by the approved comparison value, with a declared zero and blank policy." },
    { term: "Attainment", definition: "Progress toward a target expressed as a ratio or percentage under an approved direction rule." },
    { term: "Favorable direction", definition: "Whether an increase, decrease, or bounded range represents improvement for a KPI." },
    { term: "Tolerance band", definition: "An approved interval around a target within which performance is considered acceptable." },
    { term: "MTBF", definition: "Mean time between failures, commonly calculated as operating time divided by failure count for repairable assets." },
    { term: "MTTR", definition: "Mean time to repair, commonly calculated as total repair duration divided by completed repairs." },
    { term: "Availability", definition: "The proportion of scheduled or required time that an asset is available under an explicitly defined formula." },
    { term: "Performance Analyzer", definition: "A Power BI tool that records the time spent by report visuals and exposes generated DAX queries for investigation." },
  ],

  formulas: [
    { id: "previous-month", name: "Previous-month downtime", formula: "Downtime PM := CALCULATE([Total Downtime], DATEADD(DimDate[Date], -1, MONTH))", meaning: "Evaluates the base measure over dates shifted one month earlier.", requirement: "Confirm the current date selection and comparison grain are valid and continuous." },
    { id: "previous-year", name: "Previous-year downtime", formula: "Downtime PY := CALCULATE([Total Downtime], SAMEPERIODLASTYEAR(DimDate[Date]))", meaning: "Returns downtime for the comparable date set one year earlier.", requirement: "Use an approved date table and test leap-day, fiscal, and partial-period behavior." },
    { id: "ytd", name: "Year-to-date downtime", formula: "Downtime YTD := CALCULATE([Total Downtime], DATESYTD(DimDate[Date]))", meaning: "Accumulates from the start of the year through the current date context.", requirement: "Declare fiscal year-end when the reporting year is not December 31." },
    { id: "rolling", name: "Rolling three-month downtime", formula: "Downtime R3M := CALCULATE([Total Downtime], DATESINPERIOD(DimDate[Date], MAX(DimDate[Date]), -3, MONTH))", meaning: "Evaluates downtime over a three-month interval ending at the current maximum date.", requirement: "State whether the window uses days, calendar months, or completed months." },
    { id: "absolute-variance", name: "Absolute variance", formula: "Downtime vs PY := [Total Downtime] - [Downtime PY]", meaning: "Shows the signed difference from the prior-year comparison.", requirement: "For downtime, a negative result is normally favorable." },
    { id: "percent-variance", name: "Percent variance", formula: "Downtime YoY % := DIVIDE([Downtime vs PY], [Downtime PY])", meaning: "Scales the difference by prior-year downtime.", requirement: "Define what happens when prior-year downtime is zero or blank." },
    { id: "target-gap", name: "Target gap", formula: "Downtime vs Target := [Total Downtime] - [Downtime Target]", meaning: "Compares actual downtime with the approved maximum target.", requirement: "Store targets at a compatible grain and document favorable direction." },
    { id: "mtbf", name: "Mean time between failures", formula: "MTBF Hours := DIVIDE([Operating Hours], [Failure Events])", meaning: "Estimates operating time per observed failure.", requirement: "Define operating exposure, failure qualification, asset population, and no-failure behavior." },
    { id: "mttr", name: "Mean time to repair", formula: "MTTR Hours := DIVIDE([Repair Hours], [Completed Repairs])", meaning: "Calculates average repair duration per completed repair.", requirement: "Do not mix open repairs, labor hours, and elapsed repair duration without a business rule." },
    { id: "availability", name: "Operational availability", formula: "Availability % := DIVIDE([Scheduled Hours] - [Downtime Hours], [Scheduled Hours])", meaning: "Returns the share of scheduled hours not lost to approved downtime.", requirement: "Clamp or investigate impossible values and define planned versus unplanned downtime." },
  ],

  workedExamples: [
    {
      id: "example-06-05-01",
      title: "Validate the date dimension",
      problem: "A calendar covers January 1, 2025 through December 31, 2026, but March 15, 2026 is missing and two rows repeat June 30, 2026.",
      solutionSteps: [
        "Calculate the expected row count from minimum through maximum date.",
        "Compare expected rows with distinct dates and total rows.",
        "Locate the missing date and duplicate date key.",
        "Repair the calendar before enabling time-intelligence measures.",
      ],
      answer: "The table fails uniqueness and continuity; no time comparison should be published until both defects are corrected.",
      interpretation: "A visible monthly axis can hide daily calendar defects that break shifted date sets.",
    },
    {
      id: "example-06-05-02",
      title: "Compare December with the previous month",
      problem: "Downtime is 58 minutes in December 2026 and 60 minutes in November 2026.",
      solutionSteps: [
        "Evaluate [Total Downtime] in December context: 58.",
        "Shift the date context back one month: November returns 60.",
        "Calculate variance: 58 − 60 = −2 minutes.",
        "Calculate percent variance: −2 ÷ 60 = −3.33%.",
      ],
      answer: "Downtime improved by 2 minutes, or 3.33%, month over month because lower downtime is favorable.",
      interpretation: "The sign and the performance meaning must be documented separately.",
    },
    {
      id: "example-06-05-03",
      title: "Compare with the prior year",
      problem: "December 2026 downtime is 58 minutes and December 2025 downtime is 80 minutes.",
      solutionSteps: [
        "Use SAMEPERIODLASTYEAR or an approved one-year shift to obtain 80.",
        "Calculate absolute change: 58 − 80 = −22 minutes.",
        "Calculate relative change: −22 ÷ 80 = −27.5%.",
        "Confirm both months are complete and use the same date role and population.",
      ],
      answer: "December downtime decreased by 22 minutes, or 27.5%, year over year.",
      interpretation: "Prior year often controls for seasonality better than previous month, but only when the periods are comparable.",
    },
    {
      id: "example-06-05-04",
      title: "Calculate and test year to date",
      problem: "Monthly downtime in 2026 is 96, 90, 84, 79, 76, 72, 70, 66, 68, 63, 60, and 58 minutes.",
      solutionSteps: [
        "Begin at the approved year start, January 1.",
        "Include months through the current December context.",
        "Sum the monthly base values once: 882 minutes.",
        "Test that January YTD equals January and that the accumulation resets at the next year boundary.",
      ],
      answer: "2026 year-to-date downtime is 882 minutes.",
      interpretation: "YTD is a date-set transformation around a base measure, not a separately stored fact.",
    },
    {
      id: "example-06-05-05",
      title: "Build a rolling three-month measure",
      problem: "October, November, and December 2026 downtime values are 63, 60, and 58 minutes.",
      solutionSteps: [
        "Anchor the window at the approved December end date.",
        "Select exactly the three intended calendar months.",
        "Sum the values: 63 + 60 + 58 = 181.",
        "For a rolling monthly average, divide by three completed months: 60.33.",
      ],
      answer: "Rolling-three-month downtime is 181 minutes; the monthly average is approximately 60.33 minutes.",
      interpretation: "A window must state both its length and whether it contains full calendar periods or raw days.",
    },
    {
      id: "example-06-05-06",
      title: "Interpret a lower-is-better target",
      problem: "December downtime is 58 minutes against a maximum target of 90 minutes.",
      solutionSteps: [
        "Calculate actual minus target: 58 − 90 = −32 minutes.",
        "Record that lower downtime is favorable.",
        "Translate the signed variance into a favorable 32-minute margin below the maximum.",
        "Display actual, target, direction, and variance instead of a green color alone.",
      ],
      answer: "The plant is 32 minutes better than the maximum downtime target.",
      interpretation: "Target logic cannot assume that a positive mathematical variance always means success.",
    },
    {
      id: "example-06-05-07",
      title: "Calculate reliability measures",
      problem: "An asset group has 1,440 scheduled operating hours, four failures, and 58 downtime hours in the selected period.",
      solutionSteps: [
        "MTBF = 1,440 ÷ 4 = 360 operating hours per failure.",
        "Availability = (1,440 − 58) ÷ 1,440.",
        "Calculate 1,382 ÷ 1,440 ≈ 95.97%.",
        "Check that the same asset population and period define operating hours, failures, and downtime.",
      ],
      answer: "MTBF is 360 hours and operational availability is approximately 95.97%.",
      interpretation: "Reliability ratios become invalid when their numerators and denominators describe different exposure populations.",
    },
    {
      id: "example-06-05-08",
      title: "Reject an incomplete-period comparison",
      problem: "October data is complete, but November contains records only through November 12. The report compares full-month totals.",
      solutionSteps: [
        "Read the dataset's approved as-of date.",
        "Classify November as a partial month.",
        "Either compare October 1–12 with November 1–12 or wait for November close.",
        "Display the cutoff and comparison rule in the visual subtitle or tooltip.",
      ],
      answer: "The full October versus partial November total is not an aligned performance comparison.",
      interpretation: "Freshness and completeness are part of the metric, not footnotes added after publication.",
    },
  ],

  interactiveExploration: {
    title: "Time Laboratory: Change the Period, Keep the Meaning",
    description:
      "Build a Power BI matrix with Year and Month on rows and measures for Actual, PM, PY, YTD, R3M, Target, Variance, and Status.",
    instructions: [
      "Place the governed date hierarchy—not fact-table date text—on the matrix rows.",
      "Record expected December 2026 values before viewing the measure output.",
      "Move from December to January and test previous-month behavior across the year boundary.",
      "Filter to one plant and confirm all comparison measures preserve the plant filter.",
      "Switch from CompletedDate to an approved OpenedDate measure and explain the changed trend.",
      "Simulate a partial month and apply the comparable-period rule.",
      "Select multiple noncontiguous months and determine whether each measure remains meaningful.",
      "Capture Performance Analyzer evidence for the slowest visual and inspect its DAX query.",
    ],
    investigationQuestions: [
      "Which dates are in the current filter context?",
      "What exact date set does each time function return?",
      "Which non-date filters must remain active?",
      "Does the measure compare equal completed durations?",
      "Where does YTD reset for this organization?",
      "What should a missing comparison period display?",
      "Which result is semi-additive and must not be summed across months?",
      "What evidence proves the visual is both correct and acceptably fast?",
    ],
    expectedDiscovery:
      "Time measures are controlled transformations of date filter context around validated base measures. Their meaning survives interaction only when the date set, comparison contract, and preserved filters are explicit.",
  },

  realWorldApplications: [
    { field: "Manufacturing and Robotics", application: "Monitor downtime, failure events, MTBF, MTTR, availability, maintenance cost, rolling trends, and target gaps by plant, asset, and completed-date role." },
    { field: "Education", application: "Compare enrollment, attendance, mastery, interventions, and course completion by term, school year, cohort, and comparable instructional day." },
    { field: "Retail", application: "Evaluate revenue, margin, orders, inventory snapshots, same-period sales, promotion windows, fiscal weeks, and trailing-twelve-month performance." },
    { field: "Healthcare", application: "Track admissions, discharges, wait times, utilization, readmissions, and capacity using clinically approved event dates and privacy-safe populations." },
    { field: "Finance", application: "Analyze actual, budget, forecast, balances, cash flow, fiscal YTD, period close, variance, and semi-additive account values." },
    { field: "AI Operations", application: "Compare prediction volume, review delay, drift, precision, recall, latency, cost, and incidents across model versions and deployment periods." },
  ],

  aiConnection: {
    title: "AI Can Write a Time Formula Without Knowing Your Calendar",
    explanation:
      "A generated DAX expression may be syntactically correct while assuming a calendar year, contiguous selection, complete current period, active completed-date relationship, or higher-is-better target. Those assumptions must be supplied and tested by the analyst.",
    examples: [
      "Require the assistant to state the calendar, date role, current period, comparison set, and preserved filters before generating DAX.",
      "Ask for separate tests for January, year end, leap day, fiscal boundary, partial period, and missing prior period.",
      "Require a denominator and favorable-direction statement for every rate, variance percent, and attainment measure.",
      "Ask the assistant to branch from approved base measures and reuse variables instead of duplicating raw-column aggregations.",
      "Compare generated values with a controlled pandas test matrix and hand-calculated examples.",
    ],
    caution:
      "Do not accept an AI-generated trend because the line looks smooth. Verify calendar coverage, date relationships, period alignment, base totals, target grain, blank behavior, security, and performance.",
    reflectionQuestion:
      "What calendar and comparison metadata should Luminery AI require before it proposes any time-intelligence measure?",
  },

  pythonLab: {
    title: "Python Lab — Validate Time Intelligence and Maintenance KPIs",
    objective:
      "Create a 24-month maintenance series, reproduce current, prior-month, prior-year, YTD, rolling, target, MTBF, and availability calculations, assert known results, and export an auditable KPI test matrix.",
    code: `from pathlib import Path
import json
import pandas as pd

output_dir = Path("time_intelligence_output")
output_dir.mkdir(exist_ok=True)

months = pd.date_range("2025-01-01", periods=24, freq="MS")
maintenance = pd.DataFrame({
    "Month": months,
    "DowntimeHours": [
        120, 110, 105, 98, 102, 95, 90, 88, 93, 85, 82, 80,
        96, 90, 84, 79, 76, 72, 70, 66, 68, 63, 60, 58,
    ],
    "FailureEvents": [
        8, 7, 7, 6, 7, 6, 6, 5, 6, 5, 5, 5,
        7, 6, 6, 5, 5, 5, 4, 4, 5, 4, 4, 4,
    ],
    "ScheduledHours": [1440] * 24,
    "DowntimeTarget": [90] * 24,
})

maintenance["Period"] = maintenance["Month"].dt.to_period("M")
maintenance["Year"] = maintenance["Month"].dt.year
maintenance["MonthNumber"] = maintenance["Month"].dt.month
maintenance = maintenance.set_index("Period", drop=False).sort_index()

def row_for(period):
    period = pd.Period(period, freq="M")
    if period not in maintenance.index:
        return None
    return maintenance.loc[period]

def value(period, column="DowntimeHours"):
    row = row_for(period)
    return None if row is None else float(row[column])

def shift_period(period, months):
    return pd.Period(period, freq="M") + months

def ytd(period, column="DowntimeHours"):
    period = pd.Period(period, freq="M")
    visible = maintenance.loc[
        (maintenance["Year"] == period.year)
        & (maintenance["MonthNumber"] <= period.month),
        column,
    ]
    return float(visible.sum())

def rolling(period, window=3, column="DowntimeHours"):
    period = pd.Period(period, freq="M")
    periods = pd.period_range(end=period, periods=window, freq="M")
    visible = maintenance.loc[maintenance.index.isin(periods), column]
    return float(visible.sum()) if len(visible) == window else None

def kpi_snapshot(period):
    period = pd.Period(period, freq="M")
    current = value(period)
    previous_month = value(shift_period(period, -1))
    previous_year = value(shift_period(period, -12))
    row = row_for(period)

    yoy_change = None if previous_year is None else current - previous_year
    yoy_percent = None if not previous_year else yoy_change / previous_year
    target = float(row["DowntimeTarget"])
    target_gap = current - target
    failures = float(row["FailureEvents"])
    scheduled = float(row["ScheduledHours"])
    mtbf = scheduled / failures if failures else None
    availability = (scheduled - current) / scheduled if scheduled else None

    return {
        "period": str(period),
        "current_downtime": current,
        "previous_month": previous_month,
        "previous_year": previous_year,
        "yoy_change": yoy_change,
        "yoy_percent": yoy_percent,
        "ytd_downtime": ytd(period),
        "rolling_3_month": rolling(period, 3),
        "rolling_3_month_average": rolling(period, 3) / 3,
        "target": target,
        "target_gap": target_gap,
        "target_status": "Favorable" if current <= target else "Unfavorable",
        "mtbf_hours": mtbf,
        "availability": availability,
    }

snapshot = kpi_snapshot("2026-12")

# Known-result tests for current, shifted, accumulated, rolling, and KPI logic.
assert snapshot["current_downtime"] == 58
assert snapshot["previous_month"] == 60
assert snapshot["previous_year"] == 80
assert snapshot["yoy_change"] == -22
assert round(snapshot["yoy_percent"], 4) == -0.275
assert snapshot["ytd_downtime"] == 882
assert snapshot["rolling_3_month"] == 181
assert round(snapshot["rolling_3_month_average"], 2) == 60.33
assert snapshot["target_gap"] == -32
assert snapshot["target_status"] == "Favorable"
assert snapshot["mtbf_hours"] == 360
assert round(snapshot["availability"], 6) == round((1440 - 58) / 1440, 6)

# Boundary and completeness tests.
assert ytd("2026-01") == 96
assert value(shift_period("2026-01", -1)) == 80
assert rolling("2025-02", 3) is None
assert maintenance["Month"].is_unique
assert len(maintenance) == 24
assert maintenance.index.equals(pd.period_range("2025-01", "2026-12", freq="M"))

test_periods = ["2026-01", "2026-06", "2026-09", "2026-12"]
test_matrix = pd.DataFrame([kpi_snapshot(period) for period in test_periods])
test_matrix.to_csv(output_dir / "time_intelligence_test_matrix.csv", index=False)

with (output_dir / "december_2026_kpi_snapshot.json").open("w", encoding="utf-8") as file:
    json.dump(snapshot, file, indent=2)

print(test_matrix.round(4).to_string(index=False))
print("\\nDecember 2026 YoY change:", snapshot["yoy_change"])
print("December 2026 YoY percent:", f'{snapshot["yoy_percent"]:.1%}')
print("December 2026 availability:", f'{snapshot["availability"]:.2%}')
print("Artifacts:", sorted(path.name for path in output_dir.iterdir()))
print("All time-intelligence, boundary, target, and reliability tests passed.")`,
    questions: [
      "Why does January 2026 previous month correctly return December 2025?",
      "Why does rolling('2025-02', 3) return None instead of summing two months?",
      "Which assertions prove that the monthly calendar is continuous and unique?",
      "How would the code change for a fiscal year beginning July 1?",
      "How would you compare equal days when the current month is incomplete?",
      "Why is a negative target gap favorable for downtime but possibly unfavorable for revenue?",
      "How would you extend the dataset to compute MTTR from repair-level events?",
      "Which outputs should be reconciled with Power BI before publishing the dashboard?",
    ],
    expectedOutcome:
      "A reproducible time-intelligence test matrix and KPI snapshot whose known results, boundaries, calendar continuity, target direction, and reliability calculations are enforced by assertions.",
  },

  guidedPractice: [
    { id: "gp-06-05-01", question: "List five minimum tests for a date dimension.", answer: "Unique date key, no missing dates, approved range coverage, correct attributes and sorts, and valid relationships to all required fact date roles." },
    { id: "gp-06-05-02", question: "Write the logic for prior-year repair cost.", answer: "Repair Cost PY := CALCULATE([Total Repair Cost], SAMEPERIODLASTYEAR(DimDate[Date]))." },
    { id: "gp-06-05-03", question: "Current value is 150 and prior-year value is 120. Find variance and percent variance.", answer: "Variance = 30; percent variance = 30 ÷ 120 = 25%. Whether this is favorable depends on the KPI direction." },
    { id: "gp-06-05-04", question: "Why should inventory balance not be summed across twelve month-end snapshots?", answer: "Inventory balance is semi-additive across time; summing snapshots double-counts the same stock. Use an approved ending, average, minimum, or maximum balance measure." },
    { id: "gp-06-05-05", question: "What is wrong with comparing a complete September with October data through October 8?", answer: "The durations are not aligned. Compare the first eight days of both months, use a forecast clearly labeled as such, or wait for month close." },
    { id: "gp-06-05-06", question: "Calculate availability when scheduled hours are 720 and downtime is 36 hours.", answer: "(720 − 36) ÷ 720 = 0.95, or 95%." },
  ],

  independentPractice: [
    "Design a two-year date dimension data dictionary with at least fifteen attributes and their sort columns.",
    "Write measures for current revenue, prior month, prior year, YTD, rolling six months, and trailing twelve months.",
    "For actual 84 and prior year 105, calculate absolute and percent change and interpret both for a lower-is-better measure.",
    "Create a fiscal-YTD design for a fiscal year ending June 30 and explain the boundary tests.",
    "Define how a report should handle prior-period zero, missing target, no failures, and future dates.",
    "Compare event-opened and event-completed trends using two relationship roles and explain why totals differ.",
    "Create a target table at Plant-Month grain and document the required relationship or measure logic.",
    "Build a KPI test matrix containing detail, subtotal, grand total, partial period, multi-select, and no-data cases.",
  ],

  commonMistakes: [
    { mistake: "Using fact-table date columns directly on visuals", correction: "Use attributes from a governed date dimension so sorting, filtering, and time shifts share one calendar." },
    { mistake: "Allowing missing or duplicate date rows", correction: "Test uniqueness and continuity before creating time measures." },
    { mistake: "Using Auto date/time for an enterprise model", correction: "Create an explicit reusable date dimension with governed attributes and relationships." },
    { mistake: "Comparing incomplete and complete periods", correction: "Apply an as-of date and an equal-duration or completed-period rule." },
    { mistake: "Hiding the active date role", correction: "Name measures by role when opened, completed, posted, or shipped dates answer different questions." },
    { mistake: "Summing monthly percentages", correction: "Recalculate the ratio from base numerators and denominators in the total context." },
    { mistake: "Averaging averages without weights", correction: "Aggregate the underlying totals and counts, then divide." },
    { mistake: "Treating all positive variance as favorable", correction: "Store or document higher-is-better, lower-is-better, or target-range direction." },
    { mistake: "Using a target at the wrong grain", correction: "Align target and actual by date, entity, unit, and population before comparison." },
    { mistake: "Returning zero for every missing prior period", correction: "Use blank when zero would falsely imply observed performance." },
    { mistake: "Ignoring fiscal, ISO-week, or 4-4-5 rules", correction: "Encode the organization's approved calendar and test year boundaries explicitly." },
    { mistake: "Publishing a fast-looking page without measurement", correction: "Capture Performance Analyzer evidence and investigate the slowest visual and query." },
  ],

  discussionQuestions: [
    "When is previous month a better baseline than prior year?",
    "Should an incomplete current month be hidden, forecast, or compared with the same elapsed days?",
    "How should leap day affect daily, monthly, and yearly comparisons?",
    "Which maintenance date role should an executive page use, and which alternate role belongs in investigation pages?",
    "When should a rolling average replace or accompany a raw monthly value?",
    "How can KPI colors harm interpretation when users cannot see the target and direction rule?",
    "Which measures in your organization are semi-additive across time?",
    "What calendar and test evidence should be mandatory during peer review?",
  ],

  formativeAssessment: {
    title: "Formative Assessment — 50 Points",
    instructions:
      "Answer each question and show formulas, period definitions, direction rules, or validation evidence where requested. Each question is worth 5 points.",
    items: [
      { id: "check-06-05-01", type: "concept", points: 5, prompt: "State four requirements of a production date dimension.", sampleAnswer: "Unique dates, continuous range, full fact coverage, approved calendar attributes and sorts, and valid relationships; any four." },
      { id: "check-06-05-02", type: "dax", points: 5, prompt: "Write a prior-year measure for [Total Repair Cost].", sampleAnswer: "Repair Cost PY := CALCULATE([Total Repair Cost], SAMEPERIODLASTYEAR(DimDate[Date]))." },
      { id: "check-06-05-03", type: "calculation", points: 5, prompt: "Actual downtime is 58 and prior year is 80. Calculate change and percent change.", sampleAnswer: "Change = −22; percent change = −22 ÷ 80 = −27.5%." },
      { id: "check-06-05-04", type: "interpretation", points: 5, prompt: "Interpret −27.5% for downtime and explain why the sign alone is insufficient.", sampleAnswer: "Downtime decreased 27.5%, normally favorable; the KPI must explicitly state that lower values are better." },
      { id: "check-06-05-05", type: "model", points: 5, prompt: "Explain how to calculate events by OpenedDate when CompletedDate is the active relationship.", sampleAnswer: "Create an existing inactive OpenedDate relationship and use CALCULATE([Events], USERELATIONSHIP(DimDate[Date], FactEvent[OpenedDate]))." },
      { id: "check-06-05-06", type: "quality", points: 5, prompt: "Describe a valid comparison for a month with data through day 12.", sampleAnswer: "Compare days 1–12 with days 1–12 of the baseline period, or wait for the month to close; label the cutoff." },
      { id: "check-06-05-07", type: "calculation", points: 5, prompt: "Calculate MTBF for 1,440 operating hours and four failures.", sampleAnswer: "1,440 ÷ 4 = 360 operating hours per failure." },
      { id: "check-06-05-08", type: "calculation", points: 5, prompt: "Calculate availability for 1,440 scheduled hours and 58 downtime hours.", sampleAnswer: "(1,440 − 58) ÷ 1,440 ≈ 95.97%." },
      { id: "check-06-05-09", type: "validation", points: 5, prompt: "List five boundary tests for time intelligence.", sampleAnswer: "January, year end, leap day, fiscal boundary, missing prior period, partial period, and no-data selection; any five." },
      { id: "check-06-05-10", type: "performance", points: 5, prompt: "What Power BI evidence should accompany a performance claim?", sampleAnswer: "A Performance Analyzer recording identifying visual duration and DAX query, supported by a repeatable test state and, when needed, DAX Query View investigation." },
    ],
  },

  researchExtension: {
    title: "Research Extension — Comparable-Period KPI Study",
    prompt:
      "Investigate one performance measure whose conclusion changes when calendar, date role, completeness, or comparison baseline changes.",
    choices: [
      "Manufacturing downtime, MTBF, MTTR, or availability",
      "Student attendance or mastery by instructional day",
      "Retail revenue or margin under fiscal and calendar periods",
      "Healthcare wait time or utilization by event date role",
      "AI model quality, latency, cost, or drift by deployment period",
    ],
    requirements: [
      "State the stakeholder, decision, population, unit, grain, and date role",
      "Document the calendar and as-of-date rule",
      "Compare at least three baselines such as PM, PY, target, and rolling average",
      "Identify complete and incomplete periods",
      "Calculate absolute and relative differences",
      "Explain favorable direction and threshold ownership",
      "Test at least two subgroups and one no-data case",
      "Show how the conclusion changes under an invalid comparison",
      "Provide a recommendation with limitations and reproducible evidence",
    ],
  },

  portfolioArtifact: {
    title: "Portfolio Artifact — Governed Time-Intelligence KPI Scorecard",
    purpose:
      "Create an employer-ready Power BI scorecard and evidence pack demonstrating calendar design, reusable DAX, operational interpretation, validation, and performance review.",
    requiredSections: [
      "Decision brief and stakeholder questions",
      "Date-dimension data dictionary and calendar rules",
      "Model diagram with active and alternate date roles",
      "Base, PM, PY, YTD, rolling, target, variance, and reliability measures",
      "KPI catalog with owner, unit, direction, threshold, blank policy, and action",
      "Executive page, trend page, and diagnostic page",
      "Partial-period and as-of-date disclosure",
      "Known-result test matrix and reconciliation",
      "Performance Analyzer evidence and optimization notes",
      "Research findings, limitations, and peer-review log",
    ],
    evidenceChecklist: [
      "Continuous unique date table covering every required fact date",
      "Chronological month and fiscal sort columns",
      "At least twelve explicit time-intelligence measures",
      "At least one approved alternate-date measure",
      "At least one rolling window and one semi-additive measure",
      "Every KPI includes baseline, denominator, direction, target, and owner",
      "January, year-end, leap-day, partial-period, missing-prior, and no-data tests",
      "Reconciliation to source-controlled monthly and annual totals",
      "Accessible titles, labels, colors, tooltips, and data-table path",
      "Performance recording, defect log, corrections, and retest evidence",
    ],
  },

  growthIndicators: [
    { title: "Calendar Architect", description: "You create governed, continuous date dimensions and make date roles explicit." },
    { title: "Time-Measure Builder", description: "You branch reusable PM, PY, YTD, rolling, variance, and reliability measures from approved bases." },
    { title: "KPI Interpreter", description: "You align periods, denominators, targets, and favorable direction with real decisions." },
    { title: "Evidence Reviewer", description: "You test boundaries, reconcile results, disclose incomplete periods, and measure report performance." },
  ],

  reflection: [
    "What exact date set is visible in this cell?",
    "Which date role filters the fact table?",
    "Is the current period complete through its approved cutoff?",
    "Does the baseline cover an equal and comparable duration?",
    "What non-date filters must the time shift preserve?",
    "Where does YTD reset for this organization?",
    "Does the rolling window contain days, weeks, or completed months?",
    "Is the measure additive, semi-additive, or non-additive across time?",
    "What does zero mean, and when should the result be blank?",
    "Is higher, lower, or a bounded range favorable?",
    "Who owns the target and threshold?",
    "Which known result and boundary case prove this measure?",
  ],

  summary: [
    "Time intelligence depends on calendar design, date roles, model relationships, base measures, and validation.",
    "Use one governed date dimension with unique, continuous dates and correctly sorted attributes.",
    "Name the active date role and use USERELATIONSHIP for approved alternate roles.",
    "DATEADD and SAMEPERIODLASTYEAR shift the visible date set; they do not repair an invalid calendar or comparison.",
    "DATESYTD accumulates through the current context and must follow the approved calendar or fiscal year.",
    "DATESINPERIOD supports rolling windows whose length and anchor must be documented.",
    "Build PM, PY, YTD, rolling, and target measures from reconciled base measures.",
    "Calculate variance as actual minus baseline, then interpret the sign using favorable direction.",
    "Use DIVIDE and a deliberate blank policy for zero or missing baselines.",
    "Compare equal completed durations or disclose partial-period methods clearly.",
    "Do not sum snapshots, percentages, or ratios across time without an approved aggregation rule.",
    "MTBF, MTTR, and availability require aligned populations, exposure, units, and event definitions.",
    "Targets need compatible grain, ownership, direction, thresholds, and action rules.",
    "Test January, year end, leap day, fiscal boundaries, missing priors, partial periods, and no data.",
    "Reconcile detail periods to base totals and source-controlled annual totals.",
    "Use Performance Analyzer and DAX Query View to investigate—not guess about—report performance.",
    "AI-generated time measures remain untrusted until calendar assumptions, comparison contracts, and known results are verified.",
  ],

  previousLesson: {
    id: "data-ai-m06-l04",
    moduleNumber: 6,
    slug: "measures-filter-context-row-context-and-calculate",
    title: "Measures, Filter Context, Row Context, and CALCULATE",
  },
  nextLesson: {
    id: "data-ai-m06-l06",
    moduleNumber: 6,
    slug: "drillthrough-tooltips-security-and-report-validation",
    title: "Drillthrough, Tooltips, Security, and Report Validation",
  },

  lumineryGuidance: {
    message:
      "Define the calendar and comparison before writing the formula. A trustworthy trend preserves meaning across boundaries, filters, targets, and incomplete periods.",
    prompt:
      "Act as my senior Power BI time-intelligence educator, DAX reviewer, KPI architect, reliability analyst, and evidence mentor. Help me complete Module 6 Lesson 5 one verified gate at a time. Require stakeholder, decision, date table, calendar type, date role, as-of date, current period, comparison period, completeness rule, base measure, preserved filters, PM/PY/YTD/rolling logic, target grain, denominator, favorable direction, blank policy, subtotal behavior, known-result tests, boundary tests, reconciliation, accessibility, Performance Analyzer evidence, and peer review. Do not approve fact-date hierarchies, duplicate or missing dates, hidden date roles, complete-versus-partial comparisons, summed snapshots, averaged percentages, unexplained zero fills, mismatched target grain, color-only status, unowned thresholds, or AI-generated DAX that lacks calendar assumptions and tests.",
    coachingQuestions: [
      "What calendar and date role answer this decision question?",
      "What exact dates are current and comparison periods?",
      "Are both periods complete through an equivalent cutoff?",
      "Which filters must remain after the date shift?",
      "Is the measure additive across time?",
      "What is the approved target grain and favorable direction?",
      "What should zero, blank, and missing prior period mean?",
      "Which boundary case is most likely to break this formula?",
      "What known result proves the output?",
      "What Performance Analyzer evidence supports publication?",
    ],
  },
};

export default lesson05;
