const lesson04 = {
  id: "data-ai-m03-l04",
  courseId: "data-ai-foundations",
  moduleId: "data-ai-foundations-module-03",
  moduleNumber: 3,
  lessonNumber: 4,
  slug: "pivottables-pivotcharts-and-analytical-summaries",
  title: "PivotTables, PivotCharts, and Analytical Summaries",
  shortTitle: "PivotTables and Analytical Summaries",
  subtitle:
    "Summarize validated data interactively, compare groups and periods, and build charts whose filters, denominators, and totals remain visible and trustworthy.",
  status: "available",
  duration: "4–5 hours",
  level: "Beginner to Professional",

  essentialQuestion:
    "How can PivotTables and PivotCharts reveal decision-relevant patterns without changing the meaning of the source grain or hiding the population behind each number?",
  bigIdea:
    "A PivotTable is a query interface over a defined dataset. Its rows, columns, filters, values, aggregation, and denominator together create the meaning of every displayed result.",

  whyThisLessonExists: {
    title: "Fast Summaries Still Need Analytical Discipline",
    introduction:
      "PivotTables let analysts reorganize thousands of validated rows in seconds. They can compare plants, fault families, priorities, technicians, and time periods without writing a separate formula for every combination. PivotCharts make those patterns easier to see and discuss.",
    centralProblem:
      "A PivotTable can also mislead quickly: Excel may count instead of sum, averages may hide unequal group sizes, repeated entities may be counted as separate people or machines, filters may remain active, blank categories may disappear, dates may group incorrectly, and charts may exaggerate small differences.",
    purpose:
      "This lesson teaches you to design analytical questions before placing fields, choose the correct aggregation, use filters and slicers responsibly, create comparison and trend views, calculate rates and shares with explicit denominators, drill down to evidence, refresh safely, and reconcile every summary to the validated source.",
  },

  problemFirst: {
    title: "Opening Investigation: Where Is Maintenance Performance Breaking Down?",
    scenario:
      "Leadership wants a one-page analytical summary of the validated maintenance table. They need total downtime, work-order volume, average downtime, service-level breaches, and distinct robots affected by plant, month, priority, and fault family. A draft PivotTable shows Plant A with the highest downtime, but an unnoticed technician filter is active, dates include October, and the distinct robot count was replaced by a simple row count.",
    questions: [
      "What exact decision should each summary support?",
      "What does one source row represent, and which measures are additive at that grain?",
      "Should the Values area use Sum, Count, Average, Distinct Count, or a calculated rate?",
      "Which filters define the population and period?",
      "How should missing categories and zero-activity groups appear?",
      "Which chart best communicates composition, comparison, trend, or relationship?",
      "What controls prove the PivotTable and PivotChart reflect the intended validated source?",
    ],
    expectedInsight:
      "The analyst must define the question, grain, measures, denominator, period, and quality filters before dragging fields. The final workbook should expose filter context, use correct aggregations, include counts beside averages and rates, support drill-down, and reconcile totals after every refresh.",
  },

  learningObjectives: [
    "Translate an analytical question into PivotTable Rows, Columns, Filters, and Values areas.",
    "Choose Sum, Count, Average, Min, Max, and Distinct Count according to source grain and business meaning.",
    "Use Show Values As for percent of total, running total, difference, and percent difference with an explicit base.",
    "Create date groups, custom categories, sort order, Top N views, slicers, and timelines without hiding filter context.",
    "Calculate rates, shares, weighted averages, and target variances with correct denominators.",
    "Use drill-down to inspect the source rows behind an aggregate and investigate unusual results.",
    "Select and format PivotCharts for comparison, trend, composition, and distribution while avoiding visual distortion.",
    "Refresh the PivotTable safely and verify source range, cache, filters, field types, and new categories.",
    "Reconcile PivotTable totals and independently reproduce the summary with pandas.",
  ],

  prerequisiteKnowledge: [
    "Lesson 1: tidy data, declared grain, Excel Tables, and refreshable workbook architecture",
    "Lesson 2: validated types, quality flags, and publication gates",
    "Lesson 3: conditional measures, lookup fields, periods, denominators, and reconciliation",
    "Basic Excel sorting, filtering, and chart concepts",
    "Basic pandas groupby and pivot_table are helpful for the optional lab",
  ],

  visualModels: [
    {
      id: "pivot-analysis-cycle",
      type: "lifecycle",
      title: "The Trustworthy Pivot Analysis Cycle",
      description:
        "A strong PivotTable begins with a decision and ends with a reconciled, refreshable explanation—not simply a field arrangement.",
      stages: [
        {
          label: "1. Frame",
          detail:
            "Define the decision, source grain, analysis population, period, comparison groups, measures, denominators, and expected action.",
        },
        {
          label: "2. Place Fields",
          detail:
            "Assign dimensions to Rows, Columns, Filters, slicers, or timelines and assign validated measures to Values with intentional aggregation.",
        },
        {
          label: "3. Interpret",
          detail:
            "Read totals, rates, shares, trends, counts, missing categories, and group differences in the active filter context.",
        },
        {
          label: "4. Investigate",
          detail:
            "Drill down to records, compare alternative views, inspect extremes, test denominators, and distinguish signal from small samples or data defects.",
        },
        {
          label: "5. Reconcile and Refresh",
          detail:
            "Match source totals, record filters and refresh time, test new categories and periods, and publish only when controls pass.",
        },
      ],
      feedback:
        "When users ask a new question, return to the decision and grain before rearranging fields; do not let convenient visuals redefine the measure.",
      interpretation:
        "The same data can support many PivotTables, but each displayed number has one specific meaning created by its field layout and filter context.",
    },
  ],

  vocabulary: [
    { term: "PivotTable", definition: "An interactive summary that groups and aggregates fields from a tabular source." },
    { term: "PivotChart", definition: "A chart linked to a PivotTable whose displayed categories and values respond to the same filters." },
    { term: "Source grain", definition: "The real-world meaning of one source row, which determines valid counts and aggregations." },
    { term: "Dimension", definition: "A descriptive field used to group, filter, slice, or label measures, such as plant or month." },
    { term: "Measure", definition: "A numeric quantity or calculation summarized in the Values area, such as downtime or work-order count." },
    { term: "Rows area", definition: "The field area that creates hierarchical labels down the PivotTable." },
    { term: "Columns area", definition: "The field area that creates comparison categories across the PivotTable." },
    { term: "Values area", definition: "The field area containing measures and their selected aggregations." },
    { term: "Filters area", definition: "The field area that limits the entire PivotTable to selected values." },
    { term: "Filter context", definition: "The active combination of filters, slicers, timelines, row labels, and column labels that defines a result." },
    { term: "Aggregation", definition: "The operation used to combine rows, such as Sum, Count, Average, Min, Max, or Distinct Count." },
    { term: "Distinct Count", definition: "The number of unique values rather than the number of source rows." },
    { term: "Show Values As", definition: "A PivotTable feature that displays a measure as a share, difference, rank, running total, or related calculation." },
    { term: "Subtotal", definition: "A summary at an intermediate hierarchy level." },
    { term: "Grand total", definition: "The summary across all displayed rows or columns in the current filter context." },
    { term: "Grouping", definition: "Combining dates, numbers, or categories into analytical buckets such as months, quarters, or ranges." },
    { term: "Slicer", definition: "A visible button-based filter connected to one or more compatible PivotTables." },
    { term: "Timeline", definition: "A visual date filter that selects years, quarters, months, or days." },
    { term: "Drill-down", definition: "Opening the source records that contribute to a selected PivotTable value." },
    { term: "Pivot cache", definition: "Excel's stored copy of source data used by one or more PivotTables." },
    { term: "Refresh", definition: "The action that reloads source changes into the PivotTable and recalculates its summaries." },
    { term: "Calculated field", definition: "A PivotTable calculation based on source fields; it has limitations and may not behave like a row-level formula or model measure." },
    { term: "GETPIVOTDATA", definition: "An Excel function that retrieves a PivotTable result by named fields and items rather than by fragile coordinates." },
    { term: "Reconciliation", definition: "A control proving that the PivotTable population, counts, and additive totals match the validated source under the same filters." },
  ],

  formulas: [
    {
      id: "rate",
      name: "Event rate",
      formula: "Rate = qualifying events / eligible events",
      meaning: "Expresses the frequency of a defined outcome within a clearly aligned population.",
      requirement: "Show numerator, denominator, period, grain, quality filter, and whether repeat events are allowed.",
    },
    {
      id: "share-total",
      name: "Share of total",
      formula: "Share = group amount / total amount in stated filter context",
      meaning: "Shows how much each group contributes to the selected total.",
      requirement: "State whether the base is row, column, parent, or grand total and expose active filters.",
    },
    {
      id: "weighted-average",
      name: "Weighted average",
      formula: "Weighted mean = Σ(value × weight) / Σ(weight)",
      meaning: "Combines group values while preserving their different exposure or sample sizes.",
      requirement: "Do not average group averages unless their denominators are equal or intentionally weighted.",
    },
    {
      id: "period-change",
      name: "Absolute period change",
      formula: "Change = current period − prior period",
      meaning: "Measures the direction and magnitude of change in natural units.",
      requirement: "Use comparable periods, populations, definitions, and complete refreshes.",
    },
    {
      id: "percent-change",
      name: "Percent change",
      formula: "% change = (current − prior) / prior",
      meaning: "Measures change relative to the prior-period base.",
      requirement: "Do not calculate when the prior value is zero without a defined business rule; also show the absolute change.",
    },
    {
      id: "target-variance",
      name: "Variance from target",
      formula: "Variance = actual − target",
      meaning: "Shows how far actual performance is above or below the approved target.",
      requirement: "Define whether positive is favorable and keep target ownership and effective date visible.",
    },
    {
      id: "getpivotdata",
      name: "Stable PivotTable retrieval",
      formula: '=GETPIVOTDATA("Sum of downtime_min",$A$3,"plant","A","priority","High")',
      meaning: "Retrieves the High-priority Plant A downtime result using PivotTable field names and items.",
      requirement: "Use stable captions, handle missing combinations deliberately, and do not hide an unexpected empty result.",
    },
  ],

  workedExamples: [
    {
      id: "example-03-04-01",
      title: "Place fields from an analytical question",
      problem: "Compare validated downtime by plant and priority for September. Design the PivotTable layout.",
      solutionSteps: [
        "Filter source rows to row_status = PASS and September through an exposed timeline or period filter.",
        "Place plant in Rows and priority in Columns.",
        "Place downtime_min in Values and set aggregation to Sum.",
        "Add work_order_id as Count in Values to show volume beside downtime.",
      ],
      answer: "Rows: plant; Columns: priority; Values: Sum of downtime_min and Count of work_order_id; Filters: PASS quality and September.",
      interpretation: "The count prevents a large total from being mistaken for consistently poor individual performance.",
    },
    {
      id: "example-03-04-02",
      title: "Choose Count versus Distinct Count",
      problem: "Plant A has 48 work-order rows involving 17 robots. What should a measure named Robots affected display?",
      solutionSteps: [
        "Recognize the source grain is one row per work order.",
        "A simple Count of robot_id returns 48 events, not unique robots.",
        "Add the source to the Data Model and use Distinct Count of robot_id.",
        "Label the two measures Work orders and Distinct robots affected.",
      ],
      answer: "Robots affected = 17 distinct robot IDs; work-order volume = 48 rows.",
      interpretation: "Both measures are useful, but they answer different questions and must not share an ambiguous label.",
    },
    {
      id: "example-03-04-03",
      title: "Avoid the average-of-averages error",
      problem: "Plant A averages 80 minutes across 100 orders; Plant B averages 120 minutes across 20 orders. What is the combined average?",
      solutionSteps: [
        "Multiply each mean by its order count: 80×100 = 8,000 and 120×20 = 2,400.",
        "Add total downtime: 10,400 minutes.",
        "Add total orders: 120.",
        "Divide 10,400 by 120.",
      ],
      answer: "Combined average = 86.67 minutes, not (80 + 120)/2 = 100.",
      interpretation: "A PivotTable average calculated from source rows weights groups correctly; manually averaging displayed group averages may not.",
    },
    {
      id: "example-03-04-04",
      title: "Use Show Values As percent of total",
      problem: "Plant totals are A = 4,200, B = 2,800, and C = 3,000 downtime minutes. Calculate each share.",
      solutionSteps: [
        "Calculate the grand total: 10,000 minutes.",
        "A share = 4,200/10,000 = 42%.",
        "B share = 2,800/10,000 = 28%.",
        "C share = 3,000/10,000 = 30% and verify shares total 100%.",
      ],
      answer: "A 42%, B 28%, C 30% of the selected total.",
      interpretation: "The share changes when filters change, so the chart or title must state the active population and period.",
    },
    {
      id: "example-03-04-05",
      title: "Calculate and interpret period change",
      problem: "Validated downtime falls from 2,500 minutes in August to 2,000 in September. Find absolute and percent change.",
      solutionSteps: [
        "Absolute change = 2,000 − 2,500 = −500 minutes.",
        "Percent change = −500/2,500 = −0.20.",
        "Confirm the same plants, status rules, and date coverage are present in both months.",
        "Report both magnitude and relative change.",
      ],
      answer: "Downtime decreased by 500 minutes, or 20%, from August to September.",
      interpretation: "A reduction may reflect improvement, lower production exposure, missing data, or different case mix; the PivotTable alone does not prove cause.",
    },
    {
      id: "example-03-04-06",
      title: "Reconcile a filtered PivotTable",
      problem: "The validated source has 360 rows and 28,450 downtime minutes. The PivotTable shows 342 rows and 27,810 minutes.",
      solutionSteps: [
        "Inspect report filters, slicers, timelines, grouped items, and hidden labels.",
        "Confirm the PivotTable source covers the complete Excel Table and has been refreshed.",
        "Check blank categories, exclusions, and the quality filter.",
        "Calculate differences: 18 rows and 640 minutes remain unexplained.",
      ],
      answer: "The PivotTable is not ready for publication until the 18 rows and 640 minutes are explained or the intended filter is documented.",
      interpretation: "A PivotTable grand total is only authoritative within its active source and filter context.",
    },
  ],

  interactiveExploration: {
    title: "Pivot Analysis Design Studio",
    description:
      "Build three PivotTable views from the same validated maintenance table and show how field placement changes the question being answered.",
    instructions: [
      "Write one comparison question, one trend question, and one composition question.",
      "For each question, document source grain, population, period, Rows, Columns, Filters, Values, aggregation, and denominator.",
      "Create a simple first view and add counts beside averages or rates.",
      "Apply slicers for plant and priority and a timeline for opened_at.",
      "Use drill-down on one high value and verify the extracted records.",
      "Choose one PivotChart for each analytical purpose and write a decision-centered title.",
      "Refresh with an added month and reconcile counts and totals before and after refresh.",
    ],
    questions: [
      "What changed in meaning when a field moved from Rows to Filters or Columns?",
      "Did Excel choose Sum or Count automatically, and was that choice correct?",
      "Could a distinct entity be counted more than once?",
      "What population defines each percent of total or average?",
      "Are all active filters visible to the reader?",
      "Which chart reveals the decision pattern with the least visual clutter?",
    ],
    expectedDiscovery:
      "PivotTables are not neutral displays. Field placement, aggregation, filters, grouping, and denominators define the analytical claim, while reconciliation and drill-down keep that claim connected to evidence.",
  },

  realWorldApplications: [
    { field: "Manufacturing and Robotics", application: "Compare downtime, faults, service breaches, and distinct robots by plant, model, fault family, technician, priority, and month." },
    { field: "Finance", application: "Summarize revenue, cost, variance, transaction volume, and unique customers by account, product, region, and period." },
    { field: "Education", application: "Compare attendance, assessment results, intervention volume, and distinct students across courses, grades, programs, and terms." },
    { field: "Healthcare Operations", application: "Analyze encounters, wait times, quality events, and distinct patients by service, provider, location, and period under privacy controls." },
    { field: "Retail and Supply Chain", application: "Explore sales, inventory, late orders, returns, and distinct products or suppliers by store, category, region, and time." },
    { field: "Machine Learning and AI", application: "Create group-level baseline and monitoring summaries for predictions, outcomes, errors, drift, and subgroup performance." },
  ],

  aiConnection: {
    title: "PivotTables Are a Fast Model-Monitoring Lens",
    explanation:
      "Before building a full monitoring dashboard, analysts can pivot predictions, outcomes, and errors by time, model version, subgroup, geography, and score band. This exposes imbalance, drift, failure concentration, and threshold effects quickly.",
    example:
      "A predictive-maintenance model's false-negative count is summarized by plant and month, while the false-negative rate divides those misses by actual failures in the same group. Counts show operational harm; rates support comparison across differently sized plants.",
    uses: [
      "Profile training and scoring populations by group and period",
      "Compare prediction volume, outcome prevalence, and error counts",
      "Calculate subgroup error rates with aligned denominators",
      "Inspect model-version and threshold changes over time",
      "Drill down from a monitoring signal to reviewable records",
    ],
    caution:
      "Small samples, changing labels, delayed outcomes, selection bias, and hidden filters can produce unstable or unfair comparisons. Pivot analysis is diagnostic evidence, not automatic proof of model quality or causation.",
    reflectionQuestion:
      "Which model-monitoring metric becomes misleading if you show only the count and omit its denominator?",
  },

  pythonLab: {
    title: "Reproduce PivotTables and a PivotChart with pandas",
    objective:
      "Create validated maintenance summaries, distinct counts, percent-of-total measures, period comparisons, and a chart, then reconcile them to the source.",
    code: `import pandas as pd
import matplotlib.pyplot as plt

orders = pd.DataFrame({
    "work_order_id": [f"WO-{i:03d}" for i in range(1, 13)],
    "robot_id": ["R1", "R1", "R2", "R3", "R4", "R4", "R5", "R6", "R2", "R3", "R5", "R6"],
    "plant": ["A", "A", "A", "B", "B", "B", "C", "C", "A", "B", "C", "C"],
    "month": pd.to_datetime([
        "2026-08-01", "2026-09-01", "2026-09-01", "2026-08-01",
        "2026-09-01", "2026-09-01", "2026-08-01", "2026-09-01",
        "2026-10-01", "2026-09-01", "2026-09-01", "2026-10-01",
    ]),
    "priority": ["High", "High", "Standard", "Critical", "High", "Standard", "Standard", "High", "High", "Critical", "Standard", "High"],
    "downtime_min": [80, 120, 40, 160, 100, 60, 50, 90, 110, 140, 70, 85],
    "sla_breach": [0, 1, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0],
    "row_status": ["PASS"] * 11 + ["REVIEW"],
})

validated = orders.loc[orders["row_status"].eq("PASS")].copy()
validated["month_label"] = validated["month"].dt.strftime("%Y-%m")

# PivotTable: Sum of downtime by plant and priority.
downtime_pivot = pd.pivot_table(
    validated,
    index="plant",
    columns="priority",
    values="downtime_min",
    aggfunc="sum",
    fill_value=0,
    margins=True,
    margins_name="Grand Total",
)

# Multiple measures by plant: row count, distinct robots, mean, and breach rate.
plant_summary = validated.groupby("plant", as_index=False).agg(
    work_orders=("work_order_id", "count"),
    distinct_robots=("robot_id", "nunique"),
    downtime_total=("downtime_min", "sum"),
    downtime_average=("downtime_min", "mean"),
    breach_rate=("sla_breach", "mean"),
)
plant_summary["downtime_share"] = (
    plant_summary["downtime_total"] / plant_summary["downtime_total"].sum()
)

# Trend PivotTable and absolute/percent change.
trend = pd.pivot_table(
    validated,
    index="month_label",
    columns="plant",
    values="downtime_min",
    aggfunc="sum",
    fill_value=0,
).sort_index()
trend_change = trend.diff()
trend_pct_change = trend.pct_change().replace([float("inf"), float("-inf")], pd.NA)

# Reconciliation controls.
assert int(downtime_pivot.loc["Grand Total", "Grand Total"]) == int(validated["downtime_min"].sum())
assert int(plant_summary["work_orders"].sum()) == len(validated)
assert int(plant_summary["downtime_total"].sum()) == int(validated["downtime_min"].sum())
assert abs(float(plant_summary["downtime_share"].sum()) - 1.0) < 1e-12

# PivotChart equivalent.
chart_data = trend.drop(columns=[], errors="ignore")
ax = chart_data.plot(kind="line", marker="o", figsize=(9, 5))
ax.set_title("Validated Downtime by Plant and Month")
ax.set_xlabel("Month")
ax.set_ylabel("Downtime minutes")
ax.grid(axis="y", alpha=0.25)
plt.tight_layout()
plt.savefig("validated_downtime_pivot_chart.png", dpi=160)

print("Downtime PivotTable:\\n", downtime_pivot)
print("\\nPlant summary:\\n", plant_summary.round(3).to_string(index=False))
print("\\nMonthly trend:\\n", trend)
print("\\nAbsolute change:\\n", trend_change)
print("\\nPercent change:\\n", trend_pct_change.round(3))
print("\\nCreated validated_downtime_pivot_chart.png")`,
    questions: [
      "What source population is included in every summary?",
      "How does distinct_robots differ from work_orders?",
      "Why is breach_rate calculated as the mean of a 0/1 field?",
      "Which assertion reconciles the PivotTable grand total to the source?",
      "Why can percent change be undefined or infinite when the prior period is zero?",
      "Which Excel field placements reproduce downtime_pivot and trend?",
    ],
    reflectionQuestions: [
      "Which analytical questions are easiest in a PivotTable and which require formulas, Power Query, DAX, or SQL?",
      "How would you make active filter context impossible for a report reader to miss?",
      "What minimum sample-size note should accompany group averages and rates?",
    ],
    extension:
      "Export the source and summaries to Excel, create a matching PivotTable and PivotChart manually, compare every grand total and group result, and document filter, grouping, or type differences.",
  },

  guidedPractice: [
    { id: "gp-03-04-01", question: "What four field areas define a basic PivotTable?", answer: "Rows, Columns, Values, and Filters; slicers and timelines can also contribute to filter context." },
    { id: "gp-03-04-02", question: "Why might Excel use Count instead of Sum automatically?", answer: "The field may contain text, mixed types, blanks, or numbers stored as text, so Excel does not treat it as a clean numeric measure." },
    { id: "gp-03-04-03", question: "When is Distinct Count required?", answer: "When the question asks for unique entities but the source contains multiple rows per entity." },
    { id: "gp-03-04-04", question: "Why show counts beside averages and rates?", answer: "Counts reveal exposure and sample size, helping readers judge stability and avoid comparing a tiny group with a large group as if equally supported." },
    { id: "gp-03-04-05", question: "What does drill-down provide?", answer: "A record-level extract of the rows contributing to a selected aggregate for investigation and verification." },
    { id: "gp-03-04-06", question: "What must happen after source data change?", answer: "Refresh, review new fields/categories and active filters, rerun validation and reconciliation, and record the refresh time." },
  ],

  independentPractice: [
    { id: "ip-03-04-01", difficulty: "Foundational", question: "Design field placement for total sales by region and product category.", sampleAnswer: "Rows: region; Columns: product category; Values: Sum of sales; Filters: period and validated status." },
    { id: "ip-03-04-02", difficulty: "Foundational", question: "Explain Count of customer_id versus Distinct Count of customer_id.", sampleAnswer: "Count measures qualifying rows containing an ID; Distinct Count measures unique customers." },
    { id: "ip-03-04-03", difficulty: "Applied", question: "Build a PivotTable specification for monthly breach rate by plant.", sampleAnswer: "Rows: month; Columns: plant; Values: Average of 0/1 breach flag or numerator divided by eligible count; Filters: PASS and eligible status; show counts too." },
    { id: "ip-03-04-04", difficulty: "Applied", question: "Choose PivotCharts for plant comparison, monthly trend, and fault composition.", sampleAnswer: "Sorted bar/column for comparison, line for trend, and stacked bar for composition; avoid pie charts with many categories." },
    { id: "ip-03-04-05", difficulty: "Analytical", question: "Explain how a hidden slicer selection can change a true number into a misleading claim.", sampleAnswer: "The number is correct only for the filtered subset, but a title that implies the full population overgeneralizes the result." },
    { id: "ip-03-04-06", difficulty: "Advanced", question: "Design a reconciliation sheet for four PivotTables sharing one source.", sampleAnswer: "Record source rows/totals, PivotTable name, cache/source, refresh time, filters, rows, totals, differences, issue status, and owner." },
    { id: "ip-03-04-07", difficulty: "Professional", question: "Create a one-page analytical brief from three PivotTables and two PivotCharts.", sampleAnswer: "Include the decision, filter context, KPIs with counts/denominators, one comparison, one trend, one diagnostic table, findings, limitations, actions, and reconciliation status." },
  ],

  commonMistakes: [
    { mistake: "Accepting Excel's automatic aggregation without checking it.", correction: "Confirm field type and explicitly choose Sum, Count, Average, Distinct Count, or another meaningful aggregation." },
    { mistake: "Counting transaction rows as distinct customers, students, or robots.", correction: "Use source grain and Distinct Count when the question concerns unique entities." },
    { mistake: "Averaging group averages.", correction: "Calculate from source rows or use a weighted mean with the appropriate denominators." },
    { mistake: "Hiding active filters or slicer selections.", correction: "Display filter context, period, source status, and refresh timestamp near every decision-facing summary." },
    { mistake: "Using percentages without naming their base.", correction: "State percent of row, column, parent, or grand total and show the underlying amount." },
    { mistake: "Selecting a chart for decoration rather than analytical purpose.", correction: "Choose comparison, trend, composition, or relationship charts intentionally and preserve honest axes and labels." },
    { mistake: "Refreshing without reconciling.", correction: "After refresh, verify source coverage, filters, new categories, counts, additive totals, and publication checks." },
  ],

  discussionQuestions: [
    "When is a PivotTable sufficient, and when does the analysis need a Power BI semantic model?",
    "Should report users be allowed to change filters without seeing a warning about changed interpretation?",
    "How should small groups be displayed when rates are unstable or privacy-sensitive?",
    "What is the safest way to communicate a dramatic percent change from a very small prior value?",
    "Which PivotTable result would you always reproduce independently before a high-stakes decision?",
  ],

  formativeAssessment: {
    totalPoints: 40,
    passingScore: 32,
    questions: [
      { id: "check-03-04-01", type: "design", points: 5, prompt: "Map a plant-by-priority downtime question to PivotTable field areas.", sampleAnswer: "Rows plant, Columns priority, Values Sum downtime plus Count orders, Filters quality and period." },
      { id: "check-03-04-02", type: "grain", points: 5, prompt: "Explain why Count and Distinct Count can differ.", sampleAnswer: "Count reflects qualifying rows; Distinct Count reflects unique values, and one entity may appear on multiple rows." },
      { id: "check-03-04-03", type: "averages", points: 5, prompt: "Why is averaging displayed group averages unsafe?", sampleAnswer: "Groups may have different denominators; use source-level values or weight each mean by its valid count/exposure." },
      { id: "check-03-04-04", type: "context", points: 5, prompt: "List five elements of PivotTable filter context.", sampleAnswer: "Report filters, slicers, timeline, row items, column items, hidden items, date group, Top N, and quality/period criteria; any five relevant elements earn full credit." },
      { id: "check-03-04-05", type: "rates", points: 5, prompt: "Define a trustworthy breach rate.", sampleAnswer: "Validated qualifying breaches divided by validated eligible work orders for the same grain, group, period, and filter context." },
      { id: "check-03-04-06", type: "charts", points: 5, prompt: "Choose chart types for group comparison and time trend and justify them.", sampleAnswer: "Sorted bar/column supports categorical comparison; line chart preserves ordered time and makes trend visible." },
      { id: "check-03-04-07", type: "refresh", points: 5, prompt: "List six post-refresh checks.", sampleAnswer: "Source range, refresh time, row count, additive totals, field types, filters, new categories, blanks, date groups, and publication gate; any six earn full credit." },
      { id: "check-03-04-08", type: "audit", points: 5, prompt: "Explain how to reconcile a PivotTable to source.", sampleAnswer: "Apply identical population and filters, compare row/event counts and additive totals, explain differences, inspect no-match or blank categories, and retain the evidence." },
    ],
  },

  researchExtension: {
    title: "Interactive Summary Reliability Study",
    researchQuestion:
      "How do aggregation choice, filter visibility, denominator definition, and chart design change the decisions users make from the same dataset?",
    applicationOptions: [
      "Maintenance performance",
      "Financial variance",
      "Student support",
      "Healthcare operations",
      "Supply-chain reliability",
      "AI model monitoring",
    ],
    task:
      "Create two technically valid but differently designed PivotTable/PivotChart summaries from the same governed data. Test them with users, document interpretation differences, and redesign the stronger version to make context, uncertainty, denominators, and actions clearer.",
    requiredEvidence: [
      "Decision question and source-grain statement",
      "Two alternative field layouts and chart designs",
      "Aggregation, denominator, period, and filter documentation",
      "Counts and rates by relevant groups",
      "User interpretation protocol and observations",
      "Reconciliation and independent calculation",
      "Accessibility and visual-integrity review",
      "Final design recommendation with limitations",
    ],
  },

  portfolioArtifact: {
    title: "Lesson 4 Portfolio Evidence: Interactive Analytical Summary",
    description:
      "Extend the Module 3 workbook with refreshable PivotTables, PivotCharts, slicers, timelines, drill-down evidence, and reconciliation controls.",
    requiredSections: [
      "Decision questions, audience, source grain, population, and period",
      "PivotTable field map for comparison, trend, and composition views",
      "Measures with aggregation, numerator, denominator, and format",
      "Distinct-count and average safeguards",
      "Visible slicers, timeline, and filter-context statement",
      "PivotChart purpose, title, axis, labels, and accessibility choices",
      "Drill-down investigation and interpretation notes",
      "Refresh and reconciliation controls",
    ],
    requiredEvidence: [
      "At least three PivotTables",
      "At least two decision-focused PivotCharts",
      "One distinct-count measure",
      "One rate with displayed numerator and denominator",
      "One percent-of-total or period-change view",
      "Connected slicers and timeline",
      "A drill-down evidence sample",
      "Source-to-Pivot reconciliation and pandas or formula cross-check",
    ],
  },

  growthIndicators: [
    { title: "Pivot Analyst", description: "You translate decisions into intentional dimensions, measures, aggregations, and filters." },
    { title: "Context Guardian", description: "You expose grain, period, population, denominators, filters, and refresh status." },
    { title: "Visual Investigator", description: "You select charts by analytical purpose and drill down from patterns to source evidence." },
    { title: "Summary Auditor", description: "You reconcile PivotTables to validated sources and reproduce critical results independently." },
  ],

  reflection: [
    "Which PivotTable measure in your work may be using the wrong aggregation?",
    "Where do you need Distinct Count instead of Count?",
    "Which active filter could most easily mislead a report reader?",
    "What average or rate needs a visible sample size or denominator?",
    "Which chart could communicate the same evidence more honestly?",
    "What reconciliation will you require after every refresh?",
  ],

  summary: [
    "A PivotTable is an analytical query whose meaning depends on field placement, aggregation, grain, and filter context.",
    "Rows and Columns define group structure; Values define measures; Filters, slicers, and timelines define the population.",
    "Always confirm Excel's chosen aggregation and the physical type of the source field.",
    "Count measures rows; Distinct Count measures unique entities.",
    "Averages and rates require aligned denominators and should be shown with counts.",
    "Show Values As can calculate shares and changes, but its comparison base must be explicit.",
    "Never average group averages without equal denominators or deliberate weighting.",
    "Half-open periods and visible filter context protect time comparisons.",
    "Drill-down connects an aggregate pattern to the records that created it.",
    "PivotCharts should match comparison, trend, composition, or relationship purposes and use honest formatting.",
    "Refresh can introduce new categories, types, rows, and periods, so post-refresh validation is essential.",
    "Every decision-critical PivotTable should reconcile to the validated source and an independent calculation.",
  ],

  previousLesson: {
    id: "data-ai-m03-l03",
    moduleNumber: 3,
    slug: "logical-lookup-and-conditional-aggregation-formulas",
    title: "Logical, Lookup, and Conditional Aggregation Formulas",
  },
  nextLesson: {
    id: "data-ai-m03-l05",
    moduleNumber: 3,
    slug: "repeatable-data-cleaning-with-power-query",
    title: "Repeatable Data Cleaning with Power Query",
  },

  lumineryGuidance: {
    message:
      "Treat every PivotTable cell as a claim about a defined population. Make its grain, aggregation, denominator, filters, and refresh state visible.",
    prompt:
      "Act as my senior Excel and BI reviewer. Help me define the decision, source grain, validated population, period, dimensions, measures, aggregation, numerator, denominator, and action. Design PivotTable Rows, Columns, Values, Filters, slicers, and timeline; select Distinct Count where necessary; calculate rates, shares, changes, weighted averages, and target variance safely; choose honest PivotCharts; and create drill-down, refresh, filter-context, accessibility, and reconciliation controls. Then propose a one-page analytical brief and an independent pandas or formula cross-check.",
    coachingQuestions: [
      "What decision should this summary change?",
      "What does one source row represent, and what exactly are you counting?",
      "Which aggregation and denominator create the displayed meaning?",
      "What filters, slicers, timelines, and hidden items are active?",
      "Does the chart match comparison, trend, composition, or another analytical purpose?",
      "Which source rows explain the most important result?",
      "Do all counts and additive totals reconcile after refresh?",
    ],
  },
};

export default lesson04;
