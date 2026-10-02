const lesson06 = {
  id: "data-ai-m03-l06",
  courseId: "data-ai-foundations",
  moduleId: "data-ai-foundations-module-03",
  moduleNumber: 3,
  lessonNumber: 6,
  slug: "decision-focused-excel-dashboard-design",
  title: "Decision-Focused Excel Dashboard Design",
  shortTitle: "Excel Dashboard Design",
  subtitle:
    "Transform governed Excel data into a clear one-page decision system with trustworthy KPIs, honest charts, visible context, accessible design, and accountable actions.",
  status: "available",
  duration: "4–5 hours",
  level: "Beginner to Professional",

  essentialQuestion:
    "How can an Excel dashboard help a specific audience recognize what changed, understand why it matters, and take the right action without hiding context or uncertainty?",
  bigIdea:
    "A dashboard is not a collection of attractive charts. It is a compact decision interface connecting governed measures, comparisons, filters, explanations, thresholds, owners, and actions.",

  whyThisLessonExists: {
    title: "A Dashboard Must Improve a Decision",
    introduction:
      "Excel can combine PivotTables, PivotCharts, formulas, slicers, sparklines, shapes, conditional formatting, and Power Query outputs into a powerful reporting surface. The difficulty is not adding more visuals; it is selecting the smallest evidence set that helps a known audience make a recurring decision.",
    centralProblem:
      "Many dashboards show decorative KPIs, inconsistent denominators, truncated axes, unexplained colors, hidden filters, unstable calculations, and no recommended action. A technically correct chart can still mislead when its population, baseline, period, target, or uncertainty is invisible.",
    purpose:
      "This lesson teaches you to write a dashboard brief, prioritize decision-critical KPIs, build honest comparison and trend views, design visual hierarchy, use color and alerts responsibly, connect slicers, document filter context, test accessibility, reconcile measures, and convert findings into owned actions.",
  },

  problemFirst: {
    title: "Opening Investigation: Which Plant Needs Attention First?",
    scenario:
      "An operations dashboard shows Plant A in red with 1,240 downtime minutes, Plant B in green with 920, and Plant C in yellow with 610. The chart begins at 600, no production exposure is shown, September and October are both selected, one plant is excluded by a slicer, and the red threshold was copied from last year's target. Leadership wants to redirect maintenance staff immediately.",
    questions: [
      "What decision is the dashboard expected to support, and who owns it?",
      "Should the primary measure be total downtime, downtime per operating hour, event rate, severity, or a combination?",
      "Which population, period, filters, data-quality rules, and refresh time define the displayed values?",
      "What target or baseline makes a red, yellow, or green status meaningful?",
      "Does the axis, sorting, color, or layout exaggerate the difference?",
      "What diagnostic evidence helps explain the KPI without implying unsupported causation?",
      "What action, owner, timing, and follow-up measure should accompany an alert?",
    ],
    expectedInsight:
      "The dashboard must expose normalized measures and counts, period and filter context, an approved target or baseline, honest visual scales, drill-down evidence, limitations, and a defined response. Color alone is not a decision rule.",
  },

  learningObjectives: [
    "Write a dashboard brief defining audience, decision, cadence, scope, grain, actions, and success criteria.",
    "Select a small KPI set using outcome, driver, guardrail, and data-quality roles.",
    "Define each KPI with numerator, denominator, population, period, target, direction, owner, and refresh source.",
    "Choose chart forms for comparison, trend, composition, distribution, relationship, and exception analysis.",
    "Create KPI cards, PivotCharts, sparklines, slicers, timelines, dynamic titles, and linked explanatory tables in Excel.",
    "Use target lines, reference bands, sorting, annotations, and consistent scales without visual distortion.",
    "Apply conditional formatting and status colors using documented, mutually exclusive rules.",
    "Design a readable visual hierarchy, grid, spacing system, number format, and accessible color palette.",
    "Show filter context, data period, refresh timestamp, definitions, limitations, and quality status on the dashboard.",
    "Test accuracy, interactions, edge cases, accessibility, performance, reconciliation, and actionability before publication.",
  ],

  prerequisiteKnowledge: [
    "Lesson 1: governed workbook layers, Excel Tables, grain, lineage, and report architecture",
    "Lesson 2: validation, data-quality flags, publication gates, and exception evidence",
    "Lesson 3: KPI formulas, lookups, conditional aggregation, periods, and reconciliation",
    "Lesson 4: PivotTables, PivotCharts, filter context, drill-down, and honest aggregation",
    "Lesson 5: refreshable Power Query staging, transformation, exception, and published tables",
  ],

  visualModels: [
    {
      id: "decision-dashboard-loop",
      type: "lifecycle",
      title: "The Decision-to-Action Dashboard Loop",
      description:
        "A dashboard succeeds only when governed evidence reaches a responsible decision and the resulting action is measured again.",
      stages: [
        {
          label: "1. Frame the Decision",
          detail:
            "Name the audience, recurring decision, cadence, scope, constraints, available actions, and consequence of delay or error.",
        },
        {
          label: "2. Govern the Measures",
          detail:
            "Define KPI grain, numerator, denominator, population, period, target, direction, owner, quality gate, and source lineage.",
        },
        {
          label: "3. Reveal the Pattern",
          detail:
            "Use a compact hierarchy of KPI status, trend, comparison, diagnostic evidence, filters, and explanatory notes.",
        },
        {
          label: "4. Decide and Act",
          detail:
            "Translate the signal into a named action, owner, due date, escalation rule, and expected result while recording uncertainty.",
        },
        {
          label: "5. Measure the Response",
          detail:
            "Refresh governed data, track outcomes and guardrails, compare with baseline, and revise thresholds or actions when evidence changes.",
        },
      ],
      feedback:
        "If a visual cannot change or verify a decision, move it to an analysis sheet or remove it from the primary dashboard.",
      interpretation:
        "The dashboard is one stage in a managed learning loop; it does not replace investigation, judgment, ownership, or measurement of consequences.",
    },
  ],

  vocabulary: [
    { term: "Dashboard", definition: "A compact decision interface that monitors important measures, context, exceptions, and actions." },
    { term: "Dashboard brief", definition: "A specification of audience, decision, cadence, scope, actions, measures, constraints, and success criteria." },
    { term: "KPI", definition: "A governed measure tied to an important objective, target, owner, and decision." },
    { term: "Outcome metric", definition: "A measure of the result the organization ultimately wants to improve." },
    { term: "Driver metric", definition: "A measure of a process or behavior that may influence an outcome and can often be acted upon sooner." },
    { term: "Guardrail metric", definition: "A measure protecting against harmful tradeoffs while another metric is optimized." },
    { term: "Data-quality indicator", definition: "A visible measure of completeness, validity, timeliness, reconciliation, or another trust condition." },
    { term: "KPI card", definition: "A compact display of current value, unit, comparison, target status, and often a small trend." },
    { term: "Baseline", definition: "A reference period, group, or condition used to interpret current performance." },
    { term: "Target", definition: "An approved desired level with direction, effective date, owner, and review policy." },
    { term: "Threshold", definition: "A documented boundary that changes status, attention, or action." },
    { term: "Variance", definition: "The difference between actual performance and a target, plan, baseline, or comparison." },
    { term: "Filter context", definition: "The active selections defining the population represented by a dashboard value." },
    { term: "Dynamic title", definition: "A title that updates to show selected period, population, unit, or filter context." },
    { term: "Slicer", definition: "A visible button-based filter controlling connected PivotTables and PivotCharts." },
    { term: "Timeline", definition: "An interactive date filter for selecting years, quarters, months, or days." },
    { term: "Sparkline", definition: "A small in-cell chart showing a compact trend or variation pattern." },
    { term: "Small multiple", definition: "A repeated set of charts using the same scale and design to compare groups fairly." },
    { term: "Reference line", definition: "A visual line marking a target, baseline, limit, or other meaningful comparison." },
    { term: "Visual hierarchy", definition: "The ordering of attention through position, size, contrast, whitespace, and grouping." },
    { term: "Preattentive attribute", definition: "A visual feature such as position, length, or color that the eye notices quickly." },
    { term: "Gestalt grouping", definition: "The use of proximity, alignment, similarity, and enclosure to show relationships." },
    { term: "Semantic color", definition: "Color used consistently to convey a defined meaning such as status, category, or exception." },
    { term: "Direct labeling", definition: "Placing a label near the value or series it describes instead of relying on a distant legend." },
    { term: "Drill-down", definition: "Movement from an aggregate signal to the records or lower-level groups that created it." },
    { term: "Tool tip", definition: "Concise contextual information revealed when a user points to a visual element." },
    { term: "Refresh timestamp", definition: "The visible date and time when the underlying data and measures were last updated." },
    { term: "Accessibility", definition: "Design that remains understandable and operable across visual, motor, cognitive, and technical differences." },
    { term: "Reconciliation", definition: "Evidence that dashboard measures match governed source calculations under identical filters." },
    { term: "Action register", definition: "A record connecting a dashboard finding to an action, owner, due date, status, and follow-up result." },
  ],

  formulas: [
    {
      id: "kpi-rate",
      name: "KPI rate",
      formula: "Rate = qualifying events / eligible opportunities",
      meaning: "Supports fair comparison when groups have different exposure or population size.",
      requirement: "Display or document the numerator, denominator, period, quality filter, and repeated-event policy.",
    },
    {
      id: "target-variance",
      name: "Variance from target",
      formula: "Variance = actual − target",
      meaning: "Shows the size and direction of the gap in natural units.",
      requirement: "State whether a positive value is favorable and show target owner and effective date.",
    },
    {
      id: "target-attainment",
      name: "Target attainment",
      formula: "Attainment = actual / target",
      meaning: "Expresses actual performance as a share of target when a ratio is meaningful.",
      requirement: "Reverse or relabel carefully for lower-is-better measures and never divide by a zero target.",
    },
    {
      id: "period-change",
      name: "Percent period change",
      formula: "% change = (current − prior) / prior",
      meaning: "Shows change relative to the prior-period base.",
      requirement: "Use comparable periods and populations, show absolute change, and define behavior when prior equals zero.",
    },
    {
      id: "weighted-average",
      name: "Weighted average",
      formula: "Weighted mean = Σ(value × exposure) / Σ(exposure)",
      meaning: "Combines group performance while respecting different population or exposure sizes.",
      requirement: "Use a defensible weight and avoid averaging displayed group averages.",
    },
    {
      id: "rolling-average",
      name: "Rolling average",
      formula: "Rolling mean at t = Σ(values in window ending at t) / number of valid periods",
      meaning: "Reduces short-term noise to reveal a local trend.",
      requirement: "Name the window, alignment, missing-period rule, and whether the current period is complete.",
    },
    {
      id: "pareto-share",
      name: "Cumulative contribution",
      formula: "Cumulative share through category k = cumulative amount through k / total amount",
      meaning: "Identifies how much of a problem is concentrated in the largest categories.",
      requirement: "Sort categories descending, retain the full denominator, and do not infer causation from concentration.",
    },
  ],

  workedExamples: [
    {
      id: "example-03-06-01",
      title: "Write a dashboard brief before choosing charts",
      problem: "A plant manager asks for a maintenance dashboard. What information should be specified first?",
      solutionSteps: [
        "Audience: plant manager and maintenance lead; cadence: weekly review.",
        "Decision: prioritize maintenance capacity and investigate reliability deterioration.",
        "Scope: active plants, completed weeks, validated work orders, and operating-hour exposure.",
        "Actions: assign an investigation, schedule preventive work, correct data, or escalate a safety event.",
        "Success: faster response with no increase in safety events or deferred critical work.",
      ],
      answer: "Create an audience-decision-action brief before selecting KPIs, chart types, colors, or layout.",
      interpretation: "The same data may require different dashboards for executives, analysts, technicians, and auditors.",
    },
    {
      id: "example-03-06-02",
      title: "Design a complete KPI card",
      problem: "October downtime rate is 3.8 hours per 1,000 operating hours; target is at most 3.0 and September was 3.2. What should the card show?",
      solutionSteps: [
        "Show 3.8 hours per 1,000 operating hours as the primary value.",
        "Calculate target variance: 3.8 − 3.0 = +0.8, unfavorable because lower is better.",
        "Calculate period change: (3.8 − 3.2) / 3.2 = 18.75% increase.",
        "Add target, direction, period, exposure count, small trend, quality status, and refresh time.",
      ],
      answer: "KPI: 3.8 h/1,000 h; 0.8 above target; 18.8% worse than September, with exposure and context visible.",
      interpretation: "A large number alone is not a KPI card; it needs unit, comparison, target, direction, and context.",
    },
    {
      id: "example-03-06-03",
      title: "Choose an honest comparison chart",
      problem: "Compare downtime rate across 12 plants with long plant names.",
      solutionSteps: [
        "Use a horizontal bar chart because labels remain readable.",
        "Sort by rate from worst to best or by approved operational order.",
        "Start the value axis at zero because bar length encodes magnitude.",
        "Add a target reference line, direct value labels, exposure counts, and one restrained highlight for the selected plant.",
      ],
      answer: "Use a zero-based, sorted horizontal bar chart with direct labels, target line, and visible exposure.",
      interpretation: "Position and length support accurate comparison better than color intensity, pie slices, or 3-D effects.",
    },
    {
      id: "example-03-06-04",
      title: "Separate trend from incomplete-period noise",
      problem: "The current week appears 45% better, but only three of seven days have loaded.",
      solutionSteps: [
        "Mark the current period as incomplete using the calendar and refresh timestamp.",
        "Compare completed periods or normalize by exposure if operationally appropriate.",
        "Use a dashed segment, annotation, or shaded region for partial data.",
        "Do not award green status until the completeness rule passes.",
      ],
      answer: "Treat the current week as provisional and prevent incomplete data from driving status.",
      interpretation: "A dashboard can calculate correctly and still compare noncomparable periods.",
    },
    {
      id: "example-03-06-05",
      title: "Build a Pareto diagnostic",
      problem: "Fault downtime totals are 420, 250, 130, 90, 60, and 50 minutes. How much do the top three contribute?",
      solutionSteps: [
        "Sort descending and total all categories: 1,000 minutes.",
        "Cumulative top three = 420 + 250 + 130 = 800 minutes.",
        "Cumulative share = 800 / 1,000 = 80%.",
        "Show bars for amount and a cumulative line on a clearly labeled secondary percentage axis.",
      ],
      answer: "The top three fault categories contribute 80% of recorded downtime.",
      interpretation: "Concentration helps prioritize investigation but does not prove the fault categories are root causes.",
    },
    {
      id: "example-03-06-06",
      title: "Test a dashboard before publication",
      problem: "The KPI cards match the source total, but a plant slicer changes one chart and not another.",
      solutionSteps: [
        "Open Report Connections and verify which PivotTables each slicer controls.",
        "Confirm compatible PivotTables share the intended cache or Data Model relationship.",
        "Test every slicer option, clear-filter state, empty state, and multiple selection.",
        "Compare titles, cards, charts, detail table, and reconciliation values under the same selection.",
      ],
      answer: "Publication fails until all intended visuals respond consistently or the independent visual is clearly labeled.",
      interpretation: "Interactive inconsistency creates contradictory claims inside the same dashboard.",
    },
  ],

  interactiveExploration: {
    title: "One-Page Excel Dashboard Design Studio",
    description:
      "Build a decision-centered maintenance dashboard from the governed Power Query output and PivotTables created in earlier lessons.",
    instructions: [
      "Write a one-paragraph dashboard brief naming audience, decision, cadence, scope, available actions, and guardrails.",
      "Create a KPI dictionary and select no more than six primary cards across outcome, driver, guardrail, and quality roles.",
      "Sketch a grid with a context header, KPI row, trend view, comparison view, diagnostic view, and action/quality footer.",
      "Create PivotTables on a hidden analysis sheet and connect PivotCharts, slicers, and a timeline deliberately.",
      "Use dynamic titles that state selected period, plant, unit, and whether the current period is complete.",
      "Add target lines, consistent number formats, direct labels, alt text, keyboard-friendly filters, and a visible refresh timestamp.",
      "Create a detail or exception table supporting drill-down from the most important alert.",
      "Test full population, single plant, multiple plants, no activity, zero denominator, missing target, and incomplete period.",
      "Reconcile every KPI under at least three filter states and record a decision and action from the dashboard.",
    ],
    questions: [
      "Which visual earns the first position because it affects the primary decision?",
      "Which metric is an outcome, driver, guardrail, or data-quality indicator?",
      "Can every color be explained without referring to personal preference?",
      "Are values still interpretable when printed in grayscale or viewed with color-vision differences?",
      "Do titles and notes reveal period, population, filters, target, and refresh status?",
      "What should a user do when a threshold is crossed?",
    ],
    expectedDiscovery:
      "A strong dashboard reduces cognitive effort by establishing hierarchy, consistency, and context while preserving a path from signal to evidence, action, and verification.",
  },

  realWorldApplications: [
    { field: "Manufacturing and Robotics", application: "Monitor downtime rate, critical failures, mean time to repair, repeat faults, data quality, and assigned corrective actions by plant and robot family." },
    { field: "Finance", application: "Track revenue, margin, expense variance, cash exposure, forecast accuracy, exceptions, and action owners without hiding reporting period or currency context." },
    { field: "Education", application: "Monitor attendance, mastery, intervention response, opportunity gaps, data completeness, and student-support actions at appropriate privacy levels." },
    { field: "Healthcare Operations", application: "Display wait time, throughput, quality events, staffing exposure, access guardrails, and secure escalation workflows with privacy controls." },
    { field: "Retail and Supply Chain", application: "Track service level, late orders, inventory risk, returns, supplier exceptions, and action status across region, product, and period." },
    { field: "AI and Machine Learning", application: "Monitor prediction volume, model accuracy, subgroup performance, drift indicators, delayed labels, incident severity, and retraining decisions." },
  ],

  aiConnection: {
    title: "Dashboard Design Is Model-Governance Design",
    explanation:
      "AI monitoring dashboards shape when people trust, investigate, override, or retrain a model. They must distinguish model performance from data quality, show denominators and delayed labels, compare subgroups responsibly, and connect alerts to documented review actions.",
    example:
      "A predictive-maintenance dashboard shows false-negative rate, actual failures, prediction volume, score distribution, data-latency status, and subgroup results by plant. An alert opens a review of affected work orders instead of automatically declaring the model unsafe or triggering retraining.",
    uses: [
      "Monitor target, input, and prediction drift over time",
      "Compare error counts and rates across governed subgroups",
      "Track model versions, thresholds, label delay, and data completeness",
      "Link alerts to record-level review and incident documentation",
      "Evaluate retraining outcomes and operational guardrails",
    ],
    caution:
      "Dashboard thresholds can automate attention but should not automate high-stakes conclusions. Small samples, delayed outcomes, feedback loops, changing populations, and proxy variables can make apparently stable metrics misleading.",
    reflectionQuestion:
      "Which model-monitoring alert should require human review before it changes a threshold, workflow, or deployment decision?",
  },

  pythonLab: {
    title: "Cross-Check the Excel Dashboard with pandas and matplotlib",
    objective:
      "Recalculate core maintenance KPIs and create a compact analytical dashboard prototype that can be compared with the Excel implementation.",
    code: `import pandas as pd
import matplotlib.pyplot as plt

events = pd.DataFrame({
    "plant": ["A", "A", "A", "B", "B", "B", "C", "C", "C", "C"],
    "month": pd.to_datetime([
        "2026-08-01", "2026-09-01", "2026-10-01",
        "2026-08-01", "2026-09-01", "2026-10-01",
        "2026-08-01", "2026-09-01", "2026-10-01", "2026-10-01",
    ]),
    "fault_family": ["Drive", "Sensor", "Drive", "Power", "Drive", "Power", "Sensor", "Network", "Sensor", "Drive"],
    "downtime_min": [180, 140, 210, 160, 120, 150, 90, 100, 80, 70],
    "operating_hours": [720, 710, 715, 690, 700, 705, 650, 660, 670, 670],
    "critical_event": [1, 0, 1, 1, 0, 0, 0, 1, 0, 0],
    "row_status": ["PASS"] * 10,
})

validated = events.loc[events["row_status"].eq("PASS")].copy()
current_month = validated["month"].max()
current = validated.loc[validated["month"].eq(current_month)].copy()
prior = validated.loc[validated["month"].eq(current_month - pd.offsets.MonthBegin(1))].copy()

def downtime_rate(frame):
    exposure = frame["operating_hours"].sum()
    return frame["downtime_min"].sum() / exposure * 1000 if exposure else float("nan")

current_rate = downtime_rate(current)
prior_rate = downtime_rate(prior)
target_rate = 250.0
variance = current_rate - target_rate
period_change = (current_rate - prior_rate) / prior_rate if prior_rate else float("nan")

plant = current.groupby("plant", as_index=False).agg(
    downtime_min=("downtime_min", "sum"),
    operating_hours=("operating_hours", "sum"),
    critical_events=("critical_event", "sum"),
)
plant["downtime_rate"] = plant["downtime_min"] / plant["operating_hours"] * 1000
plant = plant.sort_values("downtime_rate", ascending=True)

trend = validated.groupby("month", as_index=False).agg(
    downtime_min=("downtime_min", "sum"),
    operating_hours=("operating_hours", "sum"),
)
trend["downtime_rate"] = trend["downtime_min"] / trend["operating_hours"] * 1000

fault = current.groupby("fault_family", as_index=False)["downtime_min"].sum()
fault = fault.sort_values("downtime_min", ascending=False)
fault["cumulative_share"] = fault["downtime_min"].cumsum() / fault["downtime_min"].sum()

# Reconciliation controls used to compare with Excel.
assert current["downtime_min"].sum() == plant["downtime_min"].sum()
assert current["operating_hours"].sum() == plant["operating_hours"].sum()
assert current["downtime_min"].sum() == fault["downtime_min"].sum()

fig, axes = plt.subplots(2, 2, figsize=(12, 8))
fig.suptitle(f"Maintenance Decision Dashboard — {current_month:%B %Y}", fontsize=16, fontweight="bold")

axes[0, 0].axis("off")
status = "ABOVE TARGET" if variance > 0 else "ON TARGET"
axes[0, 0].text(0.02, 0.72, f"{current_rate:.1f}", fontsize=30, fontweight="bold")
axes[0, 0].text(0.02, 0.50, "downtime min / 1,000 operating h", fontsize=11)
axes[0, 0].text(0.02, 0.29, f"{status}: {variance:+.1f}", fontsize=12)
axes[0, 0].text(0.02, 0.10, f"Change vs prior: {period_change:+.1%}", fontsize=12)

axes[0, 1].plot(trend["month"], trend["downtime_rate"], marker="o", linewidth=2)
axes[0, 1].axhline(target_rate, color="firebrick", linestyle="--", label="Target")
axes[0, 1].set_title("Downtime Rate Trend")
axes[0, 1].set_ylabel("min / 1,000 operating h")
axes[0, 1].legend(frameon=False)
axes[0, 1].grid(axis="y", alpha=0.25)

axes[1, 0].barh(plant["plant"], plant["downtime_rate"], color="#2563EB")
axes[1, 0].axvline(target_rate, color="firebrick", linestyle="--")
axes[1, 0].set_title("Plant Comparison")
axes[1, 0].set_xlabel("downtime min / 1,000 operating h")

axes[1, 1].bar(fault["fault_family"], fault["downtime_min"], color="#0F766E")
axes[1, 1].set_title("Downtime by Fault Family")
axes[1, 1].set_ylabel("minutes")
axes[1, 1].tick_params(axis="x", rotation=25)

plt.tight_layout()
plt.savefig("maintenance_decision_dashboard.png", dpi=160, bbox_inches="tight")

print("Current downtime rate:", round(current_rate, 2))
print("Target variance:", round(variance, 2))
print("Period change:", round(period_change, 4))
print("Plant summary:\\n", plant.round(2).to_string(index=False))
print("Created maintenance_decision_dashboard.png")`,
    questions: [
      "Why is downtime normalized by operating hours?",
      "Which function protects the calculation from a zero denominator?",
      "How are the current and prior periods selected?",
      "Which assertions reconcile the chart summaries to the filtered source?",
      "Why does the plant bar chart use a zero baseline while the line chart can emphasize change over time?",
      "Which elements would you add to the Excel version for filters, definitions, ownership, and action tracking?",
    ],
    reflectionQuestions: [
      "Do Excel and pandas return the same values under identical filter context?",
      "What visual choices changed when the dashboard was designed for a decision rather than for exploration?",
      "Which dashboard statement is descriptive, and which would require causal evidence?",
    ],
    extension:
      "Export the plant, trend, and fault summaries to Excel; build matching PivotCharts and KPI cards; add slicers, dynamic titles, a refresh timestamp, quality status, action register, and a three-state reconciliation test.",
  },

  guidedPractice: [
    { id: "gp-03-06-01", question: "What should be defined before choosing a dashboard chart?", answer: "The audience, decision, cadence, scope, available actions, measure definitions, and success criteria." },
    { id: "gp-03-06-02", question: "What four metric roles create a balanced KPI set?", answer: "Outcome, driver, guardrail, and data-quality indicators." },
    { id: "gp-03-06-03", question: "Why should a bar chart usually begin at zero?", answer: "Bar length encodes magnitude, so a truncated axis exaggerates proportional differences." },
    { id: "gp-03-06-04", question: "What makes a status threshold trustworthy?", answer: "A documented definition, owner, direction, effective date, evidence, review cadence, and action rule." },
    { id: "gp-03-06-05", question: "Why must active filters be visible?", answer: "A correct value for a subset becomes misleading when readers assume it represents the full population." },
    { id: "gp-03-06-06", question: "What must happen after dashboard refresh?", answer: "Validate source and quality status, reconcile KPIs, test filters and titles, review exceptions, and confirm publication controls." },
  ],

  independentPractice: [
    { id: "ip-03-06-01", difficulty: "Foundational", question: "Write a dashboard brief for a weekly student-support meeting.", sampleAnswer: "Identify users, recurring support decisions, student/course scope, weekly cadence, privacy limits, actions, outcomes, guardrails, and success measures." },
    { id: "ip-03-06-02", difficulty: "Foundational", question: "Choose KPI roles for maintenance performance.", sampleAnswer: "Outcome: downtime rate; drivers: response time and repeat faults; guardrail: safety events or overdue critical work; quality: completeness and unmatched robot IDs." },
    { id: "ip-03-06-03", difficulty: "Applied", question: "Design a KPI card for late-order rate.", sampleAnswer: "Show rate, late and eligible counts, target, variance, prior change, trend, period, filters, direction, owner, quality status, and refresh time." },
    { id: "ip-03-06-04", difficulty: "Applied", question: "Choose charts for monthly trend, regional comparison, and defect composition.", sampleAnswer: "Line chart for ordered time, sorted horizontal bars for regions, and stacked bar or Pareto for composition/concentration." },
    { id: "ip-03-06-05", difficulty: "Analytical", question: "Audit a red-green dashboard for visual and analytical risk.", sampleAnswer: "Check color-only meaning, threshold ownership, direction, scale, missing counts, denominator, filter context, incomplete periods, accessibility, and required action." },
    { id: "ip-03-06-06", difficulty: "Advanced", question: "Design a dashboard QA test matrix.", sampleAnswer: "Test totals, filters, interactions, titles, zero/missing denominators, no-data states, incomplete periods, new categories, target changes, print/mobile views, keyboard use, contrast, refresh, and reconciliation." },
    { id: "ip-03-06-07", difficulty: "Professional", question: "Create an executive action brief from one dashboard alert.", sampleAnswer: "State signal, magnitude, context, evidence, uncertainty, affected population, proposed action, owner, due date, guardrails, expected effect, and follow-up measure." },
  ],

  commonMistakes: [
    { mistake: "Starting with available charts instead of a decision.", correction: "Write the audience-decision-action brief and KPI dictionary before designing the page." },
    { mistake: "Using too many KPI cards and visuals.", correction: "Keep the smallest decision-critical set and move exploratory details to analysis or drill-down sheets." },
    { mistake: "Showing totals when groups have different exposure.", correction: "Use normalized rates with visible numerator, denominator, and total impact where both matter." },
    { mistake: "Using red and green without governed thresholds.", correction: "Document threshold logic and add text, icons, or patterns so meaning does not depend on color alone." },
    { mistake: "Truncating a bar-chart axis or using 3-D effects.", correction: "Preserve truthful length comparison with a zero baseline and simple two-dimensional marks." },
    { mistake: "Hiding filter, period, refresh, or data-quality context.", correction: "Place context in the header and use dynamic titles and quality indicators near decision-critical values." },
    { mistake: "Treating correlation or concentration as root cause.", correction: "Label patterns descriptively and require investigation or causal evidence before intervention claims." },
    { mistake: "Publishing after refresh without interaction testing.", correction: "Reconcile measures and test every slicer, timeline, clear state, edge case, title, and visual connection." },
  ],

  discussionQuestions: [
    "Should a dashboard show a metric when its denominator is small or data quality is below threshold?",
    "When does conditional formatting clarify priority, and when does it manipulate attention?",
    "How many KPIs can an executive dashboard support before hierarchy collapses?",
    "Should users be allowed to alter filters without a visible record of the selected population?",
    "How should a dashboard distinguish a signal requiring investigation from evidence justifying action?",
  ],

  formativeAssessment: {
    totalPoints: 40,
    passingScore: 32,
    questions: [
      { id: "check-03-06-01", type: "brief", points: 5, prompt: "List eight elements of a dashboard brief.", sampleAnswer: "Audience, decision, cadence, scope, grain, actions, constraints, KPI roles, source, owner, and success criteria; any eight relevant elements earn full credit." },
      { id: "check-03-06-02", type: "kpi", points: 5, prompt: "Define a complete downtime-rate KPI.", sampleAnswer: "Validated downtime minutes divided by eligible operating hours times a stated scale for the same plant and period, with target, direction, owner, filters, and refresh source." },
      { id: "check-03-06-03", type: "visual", points: 5, prompt: "Choose and justify charts for comparison and trend.", sampleAnswer: "Sorted zero-based bars support categorical comparison; a line chart preserves time order and shows change across consistent intervals." },
      { id: "check-03-06-04", type: "integrity", points: 5, prompt: "Identify five ways a dashboard can visually mislead.", sampleAnswer: "Truncated axes, 3-D perspective, inconsistent scales, area used for one-dimensional values, excessive color, unsorted categories, hidden context, and incomplete periods; any five earn full credit." },
      { id: "check-03-06-05", type: "context", points: 5, prompt: "List six context elements that should remain visible.", sampleAnswer: "Period, population, filters, unit, target, direction, data quality, refresh time, source, and incomplete-period status; any six earn full credit." },
      { id: "check-03-06-06", type: "accessibility", points: 5, prompt: "Give five accessibility improvements for an Excel dashboard.", sampleAnswer: "Readable type, sufficient contrast, non-color status cues, direct labels, alt text, logical reading order, keyboard-accessible controls, and plain language; any five earn full credit." },
      { id: "check-03-06-07", type: "qa", points: 5, prompt: "Design four interaction and edge-case tests.", sampleAnswer: "Test all/one/multiple filters, clear state, zero denominator, no data, incomplete period, new category, missing target, and disconnected visual; any four earn full credit." },
      { id: "check-03-06-08", type: "action", points: 5, prompt: "Convert an alert into an accountable action statement.", sampleAnswer: "State the evidence and uncertainty, assign an action and owner, set due date and escalation, name guardrails, and define the follow-up outcome measure." },
    ],
  },

  researchExtension: {
    title: "Dashboard Decision-Quality Study",
    researchQuestion:
      "How do visual hierarchy, filter visibility, denominator disclosure, and action framing change the accuracy and speed of decisions made from the same governed data?",
    applicationOptions: [
      "Maintenance operations",
      "Financial performance",
      "Student support",
      "Healthcare operations",
      "Supply-chain reliability",
      "AI model monitoring",
    ],
    task:
      "Create two dashboards from the same governed dataset: one common but weak design and one decision-focused design. Give users realistic tasks, measure interpretation accuracy and time, collect confidence and action choices, and recommend a tested final design.",
    requiredEvidence: [
      "Audience, decision, action, and KPI specification",
      "Two complete dashboard designs using identical data",
      "Controlled user tasks and scoring rubric",
      "Accuracy, time, confidence, and action results",
      "Accessibility and visual-integrity audit",
      "Filter and denominator interpretation findings",
      "KPI and source reconciliation",
      "Final recommendation, limitations, and next test",
    ],
  },

  portfolioArtifact: {
    title: "Lesson 6 Portfolio Evidence: Decision-Focused Excel Dashboard",
    description:
      "Extend the Module 3 workbook with a one-page dashboard that converts governed Power Query and PivotTable outputs into trustworthy monitoring, diagnosis, and action.",
    requiredSections: [
      "Dashboard brief and audience-decision-action statement",
      "KPI dictionary with outcome, driver, guardrail, and quality roles",
      "Context header with period, filters, source, quality status, and refresh time",
      "KPI cards with targets, comparisons, counts, units, and trend context",
      "Comparison, trend, and diagnostic visuals with honest scales",
      "Slicer, timeline, dynamic-title, and drill-down behavior",
      "Accessibility, visual-integrity, performance, and edge-case review",
      "Action register and KPI-to-source reconciliation",
    ],
    requiredEvidence: [
      "One completed one-page Excel dashboard",
      "Three to six governed KPI cards",
      "At least one comparison, one trend, and one diagnostic visual",
      "Connected slicers and timeline with visible filter context",
      "One dynamic title and one target or reference line",
      "One detail or exception view supporting investigation",
      "One decision and action record produced from the dashboard",
      "Excel-to-source and Excel-to-pandas reconciliation evidence",
    ],
  },

  growthIndicators: [
    { title: "Decision Designer", description: "You connect each visual to a defined audience, decision, action, and success measure." },
    { title: "KPI Governor", description: "You define targets, denominators, directions, owners, quality rules, and source lineage." },
    { title: "Visual Integrity Reviewer", description: "You choose honest encodings, scales, color rules, labels, and accessible interactions." },
    { title: "Dashboard QA Lead", description: "You test filters, edge cases, refresh behavior, reconciliation, and actionability before publication." },
  ],

  reflection: [
    "Which dashboard decision is currently unclear or unsupported by action?",
    "Which KPI needs a better denominator, target, owner, or guardrail?",
    "Which chart attracts more attention than its decision value deserves?",
    "Which filter or incomplete period could mislead a reader?",
    "Where does color carry meaning that should also appear in text or symbols?",
    "What action and follow-up measure should accompany the most important alert?",
  ],

  summary: [
    "A dashboard is a decision interface, not a gallery of charts.",
    "Begin with audience, decision, cadence, available actions, constraints, and success criteria.",
    "Use a small balanced KPI set across outcome, driver, guardrail, and data-quality roles.",
    "Every KPI needs grain, numerator, denominator, population, period, target, direction, owner, and lineage.",
    "KPI cards should show unit, comparison, target status, context, and supporting counts or exposure.",
    "Use bars for categorical comparison, lines for time, and diagnostic views for composition, distribution, or concentration.",
    "Bar charts normally require a zero baseline; all charts require honest, consistent scales and labels.",
    "Color should communicate governed meaning and must not be the only status cue.",
    "Visual hierarchy should lead from status to trend, comparison, diagnosis, and action.",
    "Expose active filters, period completeness, data quality, source, and refresh time.",
    "Test slicers, titles, no-data states, zero denominators, new categories, incomplete periods, and accessibility.",
    "Reconcile every decision-critical KPI and connect alerts to owned actions and measured outcomes.",
  ],

  previousLesson: {
    id: "data-ai-m03-l05",
    moduleNumber: 3,
    slug: "repeatable-data-cleaning-with-power-query",
    title: "Repeatable Data Cleaning with Power Query",
  },
  nextLesson: null,

  lumineryGuidance: {
    message:
      "Design for the decision, not for decoration. Make context, targets, uncertainty, evidence, ownership, and action visible before asking anyone to trust a color or KPI.",
    prompt:
      "Act as my senior Excel dashboard, BI, and visual-integrity reviewer. Help me define the audience, recurring decision, cadence, scope, actions, constraints, and success criteria. Create a governed KPI dictionary with outcome, driver, guardrail, and quality roles; specify grain, numerator, denominator, period, target, direction, owner, filter context, and lineage. Recommend a one-page hierarchy of KPI cards, trend, comparison, diagnostic evidence, filters, quality status, notes, and action register. Review chart selection, scales, sorting, color, labels, accessibility, dynamic titles, slicer connections, edge cases, refresh behavior, performance, and reconciliation. Then produce a publication checklist and one actionable decision brief.",
    coachingQuestions: [
      "Who will use the dashboard, what recurring decision will they make, and what actions are available?",
      "Which KPIs are outcomes, drivers, guardrails, or quality indicators?",
      "What denominator, target, period, population, and direction create each KPI's meaning?",
      "Does each chart use the most accurate encoding and an honest scale?",
      "Are active filters, incomplete periods, refresh time, and quality status visible?",
      "Can the dashboard be understood without relying on color alone?",
      "What action, owner, due date, guardrail, and follow-up measure should result from the signal?",
    ],
  },
};

export default lesson06;
