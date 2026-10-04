const lesson01 = {
  id: "data-ai-m06-l01",
  courseId: "data-ai-foundations",
  moduleId: "data-ai-foundations-module-06",
  moduleNumber: 6,
  lessonNumber: 1,
  slug: "choosing-charts-by-analytical-purpose",
  title: "Choosing Charts by Analytical Purpose",
  shortTitle: "Choosing Charts by Purpose",
  subtitle:
    "Start with the decision and comparison, then choose the simplest accurate visual encoding for distribution, ranking, change, relationship, composition, geography, flow, or uncertainty.",
  status: "available",
  duration: "4–5 hours",
  level: "Beginner to Professional",

  essentialQuestion:
    "How do you choose a chart that makes the intended analytical comparison accurate, fast, accessible, and difficult to misinterpret?",
  bigIdea:
    "Chart choice is a reasoning decision, not a decoration decision. Define the audience, decision, question, data type, comparison, and uncertainty first; then select the strongest visual encoding that answers that purpose with the least distortion.",

  whyThisLessonExists: {
    title: "A Chart Can Be Correct and Still Fail the Decision",
    introduction:
      "Analysts often begin with a familiar chart type or the default suggested by software. Professional visualization begins earlier: with the decision, audience, comparison, and evidence that must be visible.",
    centralProblem:
      "A maintenance director receives one crowded dashboard containing a pie chart for twelve assets, a smoothed line for unordered categories, a truncated bar chart, and a dual-axis chart. Every value may be technically present, yet the director cannot reliably identify plant burden, trend, distribution, or the incident requiring investigation.",
    purpose:
      "This lesson builds a reusable chart-selection framework, explains visual encodings and perceptual accuracy, matches charts to analytical purposes, tests misleading alternatives, and produces a validated decision brief using Python and Power BI-ready evidence.",
  },

  problemFirst: {
    title: "Opening Challenge: One Dataset, Eight Different Questions",
    scenario:
      "A maintenance table contains incident date, plant, asset type, downtime minutes, repair cost, severity, and status. Leadership asks: What is typical? Which plant is highest? Is downtime improving? Are cost and downtime related? What share is high severity? Where are incidents located? How does work flow through statuses? How uncertain is the plant comparison?",
    questions: [
      "Which question asks about a distribution rather than one summary value?",
      "Which question needs ranking rather than part-to-whole composition?",
      "Which question contains an ordered time dimension?",
      "Which question compares two quantitative variables?",
      "When is a table more honest and useful than a chart?",
      "Which chart makes sample size and uncertainty visible?",
      "What visual encoding lets the audience compare most accurately?",
      "Which alternative chart could lead to a materially different decision?",
    ],
    expectedInsight:
      "The same dataset does not have one best chart. Each analytical question defines a comparison task, and that task determines the suitable chart family.",
  },

  visualModels: [
    {
      id: "question-to-chart-gates",
      type: "lifecycle",
      title: "The Question-to-Chart Decision Path",
      description:
        "Move through these gates before selecting a chart in Python, Excel, Power BI, or another tool.",
      stages: [
        { label: "1. Decision", detail: "State the action, decision owner, audience, time horizon, and consequence of being wrong." },
        { label: "2. Question", detail: "Classify the purpose: lookup, distribution, comparison, ranking, time, relationship, composition, geography, flow, or uncertainty." },
        { label: "3. Data", detail: "Identify measure type, categories, order, cardinality, grain, sample size, missingness, and denominators." },
        { label: "4. Encoding", detail: "Prefer common-position and aligned-length comparisons; add color, shape, or area only when needed." },
        { label: "5. Integrity", detail: "Check baseline, scale, aggregation, bins, sorting, labels, accessibility, uncertainty, and excluded values." },
        { label: "6. Test", detail: "Ask a representative reader to state the main finding, evidence, and action without coaching." },
      ],
      feedback:
        "If the reader answers a different question than the one declared, revise the chart even when it is visually attractive.",
      interpretation:
        "Chart selection is a controlled chain from decision purpose to data structure to human perception.",
    },
    {
      id: "analytical-purpose-map",
      type: "lifecycle",
      title: "Analytical Purpose and Recommended Chart Family",
      description:
        "Use this map as a starting point, then apply data and audience constraints.",
      stages: [
        { label: "Lookup", detail: "Use a table, KPI card, or bullet chart when exact values, status, or target attainment matter most." },
        { label: "Distribution", detail: "Use histogram, dot plot, box plot, violin plot, strip plot, or ECDF to reveal shape, spread, and unusual values." },
        { label: "Comparison", detail: "Use bars, dots, intervals, slopes, or small multiples with a shared scale for category or group differences." },
        { label: "Time", detail: "Use line, step, area, or control charts when ordered time and continuity are meaningful; preserve gaps." },
        { label: "Relationship", detail: "Use scatterplots, bubbles cautiously, heatmaps, or faceted views to examine association and subgroup structure." },
        { label: "Composition", detail: "Use stacked bars, 100% stacked bars, treemaps, or tables only when parts share a valid whole." },
        { label: "Geography or Flow", detail: "Use maps only for spatial questions; use Sankey, alluvial, or funnels only when path or stage movement is the question." },
        { label: "Uncertainty", detail: "Use intervals, bands, distributions, or ensembles rather than presenting estimates as exact facts." },
      ],
      feedback:
        "A table is often the best choice for precise lookup; a chart is best when pattern, contrast, shape, or change is the primary task.",
      interpretation:
        "Purpose narrows the chart family; integrity, accessibility, and reader testing determine the final design.",
    },
  ],

  learningObjectives: [
    "Translate a stakeholder request into a precise analytical and visual question.",
    "Distinguish lookup, distribution, comparison, ranking, time, relationship, composition, geography, flow, and uncertainty tasks.",
    "Identify categorical, ordinal, quantitative, temporal, spatial, and relational fields.",
    "Choose tables, KPI cards, bars, dots, lines, distributions, scatterplots, maps, flow diagrams, and small multiples appropriately.",
    "Explain why position and aligned length usually support more accurate comparison than angle, area, volume, or color intensity.",
    "Use sample size, grain, denominator, time window, and aggregation to evaluate chart validity.",
    "Choose appropriate sorting, orientation, baseline, axis scale, binning, and faceting.",
    "Avoid pie-chart overload, dual axes, 3D effects, decorative area, and misleading truncation.",
    "Show missing values, suppressed categories, targets, reference lines, and uncertainty when decision-relevant.",
    "Design charts that remain understandable without color alone.",
    "Select a chart based on audience task rather than software defaults.",
    "Create a chart specification before implementation.",
    "Build and validate a coordinated analytical figure with Python.",
    "Translate the same visual specification into Power BI fields and formatting choices.",
    "Defend a chart choice using purpose, evidence, perception, integrity, and action.",
  ],

  prerequisiteKnowledge: [
    "Module 2: descriptive statistics, distributions, sampling, and uncertainty",
    "Module 5: pandas analysis, grouped summaries, EDA, visualization, and reproducibility",
    "Understanding of measures, dimensions, grain, filters, and denominators",
    "Ability to read a table, bar chart, line chart, histogram, box plot, and scatterplot",
    "Python with pandas, NumPy, and Matplotlib for the computational lab",
  ],

  vocabulary: [
    { term: "Analytical purpose", definition: "The reasoning task a visual must support, such as lookup, comparison, distribution, trend, relationship, or composition." },
    { term: "Decision question", definition: "A bounded question whose answer can change a specific action, priority, or resource choice." },
    { term: "Chart specification", definition: "A written design declaring question, population, grain, fields, aggregation, chart, encodings, scales, labels, and tests." },
    { term: "Visual encoding", definition: "The mapping of data to position, length, angle, area, color, shape, size, or motion." },
    { term: "Perceptual accuracy", definition: "How precisely a reader can compare values represented by a visual encoding." },
    { term: "Common scale", definition: "A shared numerical axis that makes values directly comparable across marks or panels." },
    { term: "Baseline", definition: "The reference value from which visual magnitude is judged, normally zero for bars." },
    { term: "Dimension", definition: "A descriptive field used to group, filter, label, or slice measures." },
    { term: "Measure", definition: "A numerical value aggregated under a declared filter context, such as total downtime or incident rate." },
    { term: "Cardinality", definition: "The number of distinct values in a field; high cardinality can overwhelm categorical visuals." },
    { term: "Distribution", definition: "The frequency pattern of values across their range, including center, spread, shape, and tails." },
    { term: "Ranking", definition: "An ordered comparison from highest to lowest or according to a decision-relevant score." },
    { term: "Time series", definition: "Measurements ordered through time at a defined interval and population." },
    { term: "Composition", definition: "Parts that share a meaningful and consistently defined whole." },
    { term: "Relationship", definition: "How two or more variables vary together without automatically implying causation." },
    { term: "Small multiples", definition: "Repeated charts using consistent encodings and scales to compare groups clearly." },
    { term: "Facet", definition: "One panel in a set of small multiples defined by a grouping variable." },
    { term: "Histogram", definition: "A chart grouping continuous values into bins to display distribution shape and frequency." },
    { term: "Box plot", definition: "A compact summary of median, quartiles, spread, and rule-based unusual values." },
    { term: "ECDF", definition: "An empirical cumulative distribution function showing the proportion of observations at or below each value." },
    { term: "Dot plot", definition: "A position-based comparison using points, often clearer than bars when the zero baseline is not essential." },
    { term: "Slope chart", definition: "A chart emphasizing change between two ordered points for multiple categories." },
    { term: "Bullet chart", definition: "A compact target-attainment chart combining actual value, reference, and qualitative ranges." },
    { term: "Scatterplot", definition: "A chart of paired quantitative values used to examine association, clusters, nonlinearity, and unusual points." },
    { term: "Heatmap", definition: "A matrix using color intensity to represent magnitude, supported by labels or an accessible value table." },
    { term: "Treemap", definition: "A nested area display for hierarchical composition; exact comparisons are difficult." },
    { term: "Choropleth map", definition: "A map coloring regions by a normalized value such as a rate, not usually a raw count." },
    { term: "Sankey diagram", definition: "A flow diagram whose band widths represent quantities moving between stages or categories." },
    { term: "Dual axis", definition: "A chart with two numerical scales that can imply relationships through arbitrary scaling." },
    { term: "Overplotting", definition: "Visual overlap that hides density, frequency, or subgroups." },
    { term: "Reference line", definition: "A labeled target, threshold, benchmark, or baseline that supports interpretation." },
    { term: "Uncertainty interval", definition: "A range representing sampling, measurement, model, or forecast uncertainty under stated assumptions." },
    { term: "Annotation", definition: "Text or marks explaining a decision-relevant point, event, threshold, or limitation." },
    { term: "Data-ink ratio", definition: "The proportion of visual marks serving data communication rather than decoration." },
    { term: "Accessibility", definition: "Design that supports readers with varied vision, cognition, devices, and assistive technology." },
    { term: "Visual integrity", definition: "Faithful representation of population, quantities, scales, comparisons, missingness, and uncertainty." },
  ],

  formulas: [
    { id: "share", name: "Part-to-whole share", formula: "shareᵢ = partᵢ ÷ Σ parts", meaning: "Measures each category as a fraction of one valid whole.", requirement: "Parts must be mutually exclusive, collectively meaningful, and use the same denominator." },
    { id: "rate", name: "Normalized rate", formula: "rate = events ÷ exposure × scale", meaning: "Compares groups with different opportunity, population, time, or capacity.", requirement: "Label the exposure and scale, such as incidents per 1,000 operating hours." },
    { id: "percent-change", name: "Percent change", formula: "% change = (new − old) ÷ |old| × 100", meaning: "Expresses change relative to a nonzero baseline.", requirement: "State behavior for zero, negative, missing, or incomparable baselines." },
    { id: "index", name: "Indexed value", formula: "indexₜ = valueₜ ÷ base value × 100", meaning: "Compares relative trajectories with a common starting value.", requirement: "Label the base period and also preserve absolute values when scale matters." },
    { id: "weighted-mean", name: "Weighted mean", formula: "x̄w = Σ(wᵢxᵢ) ÷ Σwᵢ", meaning: "Combines group values according to exposure or importance.", requirement: "Use documented nonnegative weights and show how aggregation affects interpretation." },
    { id: "cumulative-share", name: "Cumulative share", formula: "Cₖ = Σᵢ₌₁ᵏ partᵢ ÷ Σ parts", meaning: "Supports Pareto-style prioritization after ordering categories.", requirement: "Sort by the declared measure and avoid implying a universal 80/20 rule." },
    { id: "standard-error", name: "Standard error of a mean", formula: "SE(x̄) = s ÷ √n", meaning: "Describes estimated sampling variability of the mean under appropriate assumptions.", requirement: "Do not substitute it for distribution spread or use it when the sampling design makes the formula invalid." },
    { id: "freedman-diaconis", name: "Freedman–Diaconis bin width", formula: "h = 2·IQR·n^(−1/3)", meaning: "Provides a robust starting width for histogram bins.", requirement: "Treat it as a starting rule, test reasonable alternatives, and disclose the final bins." },
  ],

  workedExamples: [
    {
      id: "example-06-01-01",
      title: "Choose a distribution chart instead of one average",
      problem: "A director asks whether incident downtime is usually brief or widely variable.",
      solutionSteps: [
        "Identify the task as distribution, not lookup or ranking.",
        "Preserve the incident-level grain rather than aggregating immediately.",
        "Use a histogram, dot/strip plot, box plot, or ECDF depending on sample size and audience.",
        "Add n, units, median, and unusual-event annotation.",
      ],
      answer: "Use a histogram plus visible points or a box plot with individual observations; do not answer with a single KPI card.",
      interpretation: "An average hides shape, spread, multimodality, and rare high-impact incidents.",
    },
    {
      id: "example-06-01-02",
      title: "Rank plants using a dot plot",
      problem: "Leadership needs to see which plant has the highest downtime rate per 1,000 operating hours.",
      solutionSteps: [
        "Calculate a normalized rate because operating exposure differs.",
        "Sort plants from highest to lowest by the rate.",
        "Use horizontal dots or bars with direct value labels and a target line.",
        "Show incident counts and operating hours in a tooltip or supporting table.",
      ],
      answer: "Use a sorted horizontal dot plot or bar chart of downtime rate with a labeled target.",
      interpretation: "Ranking becomes accurate only after the denominator makes plants comparable.",
    },
    {
      id: "example-06-01-03",
      title: "Use a line chart only for ordered time",
      problem: "Monthly downtime from January through December must be compared with a service target.",
      solutionSteps: [
        "Keep calendar order and preserve months with no observations.",
        "Use a line because adjacent time points have meaningful continuity.",
        "Add the target as a labeled reference line.",
        "Annotate a verified event rather than smoothing it away.",
      ],
      answer: "Use a line chart with all months, a shared time interval, units, target, and event annotation.",
      interpretation: "Connecting unordered asset categories would falsely imply continuity; connecting ordered months supports change detection.",
    },
    {
      id: "example-06-01-04",
      title: "Replace a crowded pie chart",
      problem: "Twelve asset types contribute to total repair cost, and exact comparison matters.",
      solutionSteps: [
        "Confirm the categories share a legitimate repair-cost whole.",
        "Recognize that twelve angles and slices are difficult to compare.",
        "Sort a horizontal bar chart by cost and optionally add cumulative share.",
        "Group a long tail only with an explicit and reviewable rule.",
      ],
      answer: "Use sorted bars, optionally with a Pareto cumulative-share line in a separate aligned panel.",
      interpretation: "Aligned length supports more accurate comparison than slice angle and area.",
    },
    {
      id: "example-06-01-05",
      title: "Examine a relationship without implying causation",
      problem: "An analyst asks whether repair cost increases with downtime.",
      solutionSteps: [
        "Use incident-level paired quantitative values in a scatterplot.",
        "Encode plant by both color and marker shape.",
        "Inspect overplotting, subgroups, nonlinearity, range, and influential points.",
        "State association and alternative explanations, not a causal claim.",
      ],
      answer: "Use a scatterplot with transparent points, accessible group encoding, direct labels for influential incidents, and a supporting correlation table.",
      interpretation: "A scatterplot exposes patterns that a correlation coefficient alone can conceal.",
    },
    {
      id: "example-06-01-06",
      title: "Reject a persuasive dual-axis chart",
      problem: "Downtime and repair cost have different units and appear to move together on a dual-axis line chart.",
      solutionSteps: [
        "Recognize that changing either axis range changes the apparent alignment.",
        "Use two vertically aligned charts sharing the time axis.",
        "If relationship is the real question, use a scatterplot instead.",
        "Report the exact aggregation and uncertainty.",
      ],
      answer: "Use aligned small multiples for time patterns or a scatterplot for association; avoid arbitrary dual-axis alignment.",
      interpretation: "The chart form must reflect the question, not manufacture a visual relationship.",
    },
  ],

  interactiveExploration: {
    title: "Chart Court: Defend or Redesign",
    description:
      "Review a set of candidate charts as analyst, decision owner, accessibility reviewer, and skeptical peer.",
    steps: [
      "Write the intended question and action without naming a chart.",
      "List the fields, grain, aggregation, denominator, time range, and missingness.",
      "Choose one primary and one alternative chart family.",
      "Identify the comparison the eye must perform in each option.",
      "Test zero baseline, sorting, bins, log scale, small multiples, and direct labels where appropriate.",
      "Remove decorative elements and restore any hidden categories or missing periods.",
      "Ask a reader for the finding, evidence, uncertainty, and action.",
    ],
    questions: [
      "Which chart made the correct comparison fastest?",
      "Which design choice changed the apparent conclusion?",
      "What data disappeared through aggregation or filtering?",
      "Could the chart be understood without color?",
      "Would a table better support the required exact lookup?",
    ],
    expectedDiscovery:
      "The winning chart is the one that enables the intended comparison accurately and transparently, not the one with the most visual effects.",
  },

  realWorldApplications: [
    { field: "Manufacturing and Robotics", application: "Use distributions for cycle time, lines for ordered sensor trends, scatterplots for load-temperature relationships, and Pareto bars for failure priorities." },
    { field: "Business Intelligence", application: "Match KPI cards, tables, bars, trends, decomposition views, and small multiples to executive, manager, and operator decisions." },
    { field: "Finance", application: "Separate absolute exposure, percent return, volatility distribution, time movement, and portfolio composition instead of mixing them in one chart." },
    { field: "Education", application: "Show score distributions, subgroup comparisons, learning trajectories, intervention funnels, and uncertainty without ranking small groups unfairly." },
    { field: "Healthcare Operations", application: "Use rates with exposure denominators, wait-time distributions, patient-flow diagrams, control charts, and privacy-aware small-cell suppression." },
    { field: "AI and Machine Learning", application: "Visualize class balance, feature distributions, calibration, threshold tradeoffs, confusion matrices, subgroup performance, and drift using question-specific displays." },
  ],

  aiConnection: {
    title: "AI Can Suggest a Chart, but It Cannot Own the Decision Contract",
    explanation:
      "Natural-language BI assistants and generative AI can produce code or recommend visuals quickly. They may not know the valid population, grain, denominator, time semantics, accessibility needs, uncertainty, or consequence of a wrong decision. The analyst must supply and validate that contract.",
    example:
      "If asked to 'show which plant is worst,' AI may rank raw downtime totals. A valid specification may instead require downtime per 1,000 operating hours, a minimum exposure rule, an uncertainty interval, and a supporting count table.",
    uses: [
      "Generate alternative chart specifications",
      "Draft Python or Power BI implementation steps",
      "Identify accessibility and integrity risks",
      "Produce concise chart titles and alt text",
      "Test whether a finding survives alternate aggregation",
      "Document field roles, filters, and assumptions",
    ],
    caution:
      "Never accept an AI-selected chart until you verify population, grain, fields, aggregation, denominator, sorting, scales, missingness, uncertainty, and accessible interpretation against source evidence.",
    reflectionQuestion:
      "What information must you provide so an AI assistant chooses a chart for the real decision instead of merely matching keywords?",
  },

  pythonLab: {
    title: "Build and Validate a Purpose-Driven Maintenance Decision Brief",
    objective:
      "Create four coordinated charts—distribution, ranked comparison, time trend, and relationship—from one validated maintenance dataset, then test that each chart answers its declared analytical purpose.",
    code: `from pathlib import Path

import matplotlib.pyplot as plt
import numpy as np
import pandas as pd

OUTPUT_DIR = Path("outputs")
OUTPUT_DIR.mkdir(parents=True, exist_ok=True)

incidents = pd.DataFrame({
    "incident_id": [f"I-{i:03d}" for i in range(1, 15)],
    "date": pd.to_datetime([
        "2026-01-05", "2026-01-18", "2026-02-03", "2026-02-21",
        "2026-03-06", "2026-03-20", "2026-04-02", "2026-04-19",
        "2026-05-05", "2026-05-23", "2026-06-04", "2026-06-18",
        "2026-07-07", "2026-07-21",
    ]),
    "plant": ["A", "B", "A", "C", "B", "A", "C", "B", "A", "C", "B", "A", "C", "B"],
    "asset_type": ["press", "robot", "welder", "conveyor", "press", "robot", "welder", "conveyor", "press", "robot", "welder", "conveyor", "press", "robot"],
    "downtime_min": [8, 14, 6, 19, 11, 7, 22, 15, 9, 58, 13, 5, 18, 16],
    "repair_cost_usd": [420, 850, 310, 1020, 640, 390, 1180, 790, 470, 3100, 720, 280, 980, 900],
    "severity": ["low", "medium", "low", "high", "medium", "low", "high", "medium", "low", "high", "medium", "low", "high", "medium"],
})

operating_hours = pd.Series({"A": 4100, "B": 3900, "C": 3600}, name="operating_hours")

# Validate the chart population before visualization.
assert incidents["incident_id"].is_unique
assert incidents[["date", "plant", "downtime_min", "repair_cost_usd"]].notna().all().all()
assert incidents["downtime_min"].ge(0).all()
assert incidents["repair_cost_usd"].ge(0).all()
assert set(incidents["plant"]) == set(operating_hours.index)

plant_summary = incidents.groupby("plant").agg(
    incidents=("incident_id", "count"),
    downtime_total=("downtime_min", "sum"),
    downtime_median=("downtime_min", "median"),
)
plant_summary = plant_summary.join(operating_hours)
plant_summary["downtime_per_1000h"] = (
    plant_summary["downtime_total"] / plant_summary["operating_hours"] * 1000
)
plant_summary = plant_summary.sort_values("downtime_per_1000h", ascending=True)

monthly = (
    incidents.assign(month=incidents["date"].dt.to_period("M").dt.to_timestamp())
    .groupby("month", as_index=False)
    .agg(downtime_total=("downtime_min", "sum"), incidents=("incident_id", "count"))
)

chart_specs = pd.DataFrame([
    {"panel": "A", "purpose": "distribution", "question": "What is typical and unusual?", "chart": "histogram + points"},
    {"panel": "B", "purpose": "ranking", "question": "Which plant has the highest exposure-adjusted burden?", "chart": "sorted dot plot"},
    {"panel": "C", "purpose": "time", "question": "How does monthly downtime change?", "chart": "line chart"},
    {"panel": "D", "purpose": "relationship", "question": "How do cost and downtime vary together?", "chart": "scatterplot"},
])

fig, axes = plt.subplots(2, 2, figsize=(13, 9), constrained_layout=True)

# A. Distribution: histogram plus incident-level rug points.
bins = [0, 10, 20, 30, 40, 50, 60]
axes[0, 0].hist(incidents["downtime_min"], bins=bins, color="#2563EB", edgecolor="white")
axes[0, 0].scatter(incidents["downtime_min"], np.full(len(incidents), -0.12), marker="|", color="#111827", clip_on=False)
axes[0, 0].axvline(incidents["downtime_min"].median(), color="#B45309", linestyle="--", label="Median")
axes[0, 0].set(title="A. Distribution: most incidents are under 25 minutes", xlabel="Downtime per incident (minutes)", ylabel="Incident count")
axes[0, 0].legend()

# B. Ranking: normalized rate, sorted, with direct labels.
axes[0, 1].scatter(plant_summary["downtime_per_1000h"], plant_summary.index, s=90, color="#0F766E")
for plant, row in plant_summary.iterrows():
    axes[0, 1].text(row["downtime_per_1000h"] + 0.3, plant, f'{row["downtime_per_1000h"]:.1f}', va="center")
axes[0, 1].set(title="B. Ranking: downtime per 1,000 operating hours", xlabel="Downtime minutes per 1,000 hours", ylabel="Plant")

# C. Time: ordered months with point markers and no invented smoothing.
axes[1, 0].plot(monthly["month"], monthly["downtime_total"], marker="o", color="#7C3AED", linewidth=2)
axes[1, 0].set(title="C. Time: monthly downtime burden", xlabel="Month", ylabel="Downtime (minutes)")
axes[1, 0].tick_params(axis="x", rotation=30)

# D. Relationship: paired measures, plant encoded by color and shape.
styles = {"A": ("o", "#2563EB"), "B": ("s", "#F59E0B"), "C": ("^", "#0F766E")}
for plant, (marker, color) in styles.items():
    subset = incidents.loc[incidents["plant"].eq(plant)]
    axes[1, 1].scatter(subset["downtime_min"], subset["repair_cost_usd"], marker=marker, color=color, label=f"Plant {plant}", s=65, alpha=0.85)
flagged = incidents.loc[incidents["downtime_min"].idxmax()]
axes[1, 1].annotate(flagged["incident_id"], (flagged["downtime_min"], flagged["repair_cost_usd"]), xytext=(-35, 10), textcoords="offset points", arrowprops={"arrowstyle": "->"})
axes[1, 1].set(title="D. Relationship: repair cost and downtime", xlabel="Downtime (minutes)", ylabel="Repair cost (USD)")
axes[1, 1].legend()

fig.suptitle("Purpose-driven maintenance decision brief — Jan–Jul 2026", fontsize=16, fontweight="bold")
figure_path = OUTPUT_DIR / "purpose_driven_chart_brief.png"
spec_path = OUTPUT_DIR / "chart_specifications.csv"
summary_path = OUTPUT_DIR / "plant_chart_evidence.csv"
fig.savefig(figure_path, dpi=150, bbox_inches="tight")
plt.close(fig)
chart_specs.to_csv(spec_path, index=False)
plant_summary.reset_index().to_csv(summary_path, index=False)

# Acceptance tests: population, purpose, sorting, denominator, and artifacts.
assert len(incidents) == 14
assert chart_specs["purpose"].tolist() == ["distribution", "ranking", "time", "relationship"]
assert plant_summary["downtime_per_1000h"].is_monotonic_increasing
assert monthly["month"].is_monotonic_increasing
assert flagged["incident_id"] == "I-010"
assert np.isclose(incidents["downtime_min"].median(), 13.5)
assert all(path.exists() and path.stat().st_size > 0 for path in [figure_path, spec_path, summary_path])

print("Chart purposes:", chart_specs[["panel", "purpose", "chart"]].to_dict("records"))
print("Plant ranking:")
print(plant_summary[["downtime_total", "operating_hours", "downtime_per_1000h"]].round(2))
print("Median downtime:", incidents["downtime_min"].median())
print("Annotated incident:", flagged["incident_id"])
print("Artifacts:", [figure_path.name, spec_path.name, summary_path.name])
print("All chart-purpose, ordering, denominator, population, and artifact tests passed.")`,
    questions: [
      "What decision question does each of the four panels answer?",
      "Why does Panel A preserve incident-level values rather than plant totals?",
      "Why is Panel B based on operating hours instead of raw downtime alone?",
      "Why are the plants sorted and directly labeled?",
      "Why is a line appropriate for months but not for asset categories?",
      "What does the scatterplot reveal that two KPI cards would hide?",
      "Why is I-010 annotated rather than automatically removed?",
      "Which choices make the figure accessible without relying only on color?",
      "What uncertainty is still missing from the plant ranking?",
      "How would you reproduce these four specifications in Power BI?",
    ],
    reflectionQuestions: [
      "Which panel best supports an operational action, and what is that action?",
      "Which panel is most sensitive to aggregation, denominator, scale, or bin choices?",
      "What supporting table should accompany the figure for exact lookup?",
    ],
    extension:
      "Add twelve months, operating-hour confidence checks, weekly small multiples by plant, severity composition, uncertainty intervals, an accessible text summary, and a Power BI report page that uses the same chart specifications and validation tests.",
  },

  guidedPractice: [
    { id: "gp-06-01-01", question: "Which chart family answers 'What values are typical, spread out, or unusual?'", answer: "A distribution display such as a histogram, dot/strip plot, box plot, violin plot, or ECDF, chosen for the data volume and audience." },
    { id: "gp-06-01-02", question: "Why should bars normally start at zero?", answer: "Bar length represents magnitude from the baseline, so truncation exaggerates proportional differences." },
    { id: "gp-06-01-03", question: "When is a line chart appropriate?", answer: "When the x-axis is meaningfully ordered—usually time or another continuous sequence—and connecting adjacent values represents real continuity." },
    { id: "gp-06-01-04", question: "What should be used to compare plants with different operating hours?", answer: "A normalized rate such as downtime minutes per 1,000 operating hours, shown with counts and exposure evidence." },
    { id: "gp-06-01-05", question: "Why is a pie chart weak for twelve categories?", answer: "Readers compare many slice angles and areas poorly; sorted aligned bars make ranking and differences clearer." },
    { id: "gp-06-01-06", question: "What is a safer alternative to a dual-axis time chart?", answer: "Use vertically aligned small multiples sharing the time axis, or a scatterplot if the question is relationship." },
  ],

  independentPractice: [
    { id: "ip-06-01-01", difficulty: "Foundational", question: "Classify ten stakeholder questions by analytical purpose.", sampleAnswer: "Label each as lookup, distribution, comparison, ranking, time, relationship, composition, geography, flow, or uncertainty and explain the comparison task." },
    { id: "ip-06-01-02", difficulty: "Foundational", question: "Redesign a twelve-slice pie chart of repair cost.", sampleAnswer: "Use sorted horizontal bars with direct labels; add cumulative share only when prioritization is useful and the denominator is valid." },
    { id: "ip-06-01-03", difficulty: "Applied", question: "Write a complete chart specification for downtime rate by plant.", sampleAnswer: "Declare decision, population, grain, numerator, operating-hour denominator, scale, filters, sorted dot/bar chart, target, labels, accessibility, and validation tests." },
    { id: "ip-06-01-04", difficulty: "Applied", question: "Create two honest views of monthly downtime: absolute and indexed.", sampleAnswer: "Use two aligned line panels, label units and base month, preserve all months, and explain how relative and absolute interpretations differ." },
    { id: "ip-06-01-05", difficulty: "Analytical", question: "Compare histogram, box plot, and ECDF for the same downtime data.", sampleAnswer: "Evaluate shape visibility, compactness, sample size, exact comparisons, audience familiarity, and sensitivity to bins." },
    { id: "ip-06-01-06", difficulty: "Advanced", question: "Create a relationship view that reveals plant subgroups and influential incidents.", sampleAnswer: "Use a scatterplot with color plus shape, transparency, direct labels, facets when needed, and a supporting table; avoid causal claims." },
    { id: "ip-06-01-07", difficulty: "Professional", question: "Conduct a reader test for one executive chart and revise it.", sampleAnswer: "Record whether readers identify the intended finding, evidence, uncertainty, and action; revise the specification based on observed errors rather than preference alone." },
  ],

  commonMistakes: [
    { mistake: "Choosing the chart before defining the decision question.", correction: "Write the question, comparison task, audience, and action first." },
    { mistake: "Using a KPI card to answer a distribution question.", correction: "Show incident-level shape, spread, sample size, and unusual values." },
    { mistake: "Ranking raw totals when group exposure differs.", correction: "Use a valid denominator and show both rate and underlying counts." },
    { mistake: "Using a line chart for unordered categories.", correction: "Use bars or dots unless adjacency and continuity have real meaning." },
    { mistake: "Using many pie or donut slices.", correction: "Use sorted aligned bars for accurate comparison; reserve part-to-whole charts for a small valid whole." },
    { mistake: "Using 3D effects, pictograms, or volume to encode magnitude.", correction: "Use position or aligned length and remove perspective distortion." },
    { mistake: "Truncating a bar-chart baseline.", correction: "Begin magnitude bars at zero or switch to a position-based dot chart with a clearly labeled scale." },
    { mistake: "Using dual axes to make series appear related.", correction: "Use aligned panels or a scatterplot and state units separately." },
    { mistake: "Hiding missing periods or zero-event groups.", correction: "Construct the complete expected domain and distinguish zero, missing, not applicable, and suppressed." },
    { mistake: "Using a map because location exists.", correction: "Use a map only when spatial pattern or geographic action is central; normalize choropleths by exposure." },
    { mistake: "Encoding critical categories only by color.", correction: "Add direct labels, shape, pattern, position, or line style with sufficient contrast." },
    { mistake: "Overloading one chart with every measure.", correction: "Prioritize one question and use coordinated small multiples or drill detail." },
    { mistake: "Showing a forecast without uncertainty.", correction: "Add intervals or scenario bands and distinguish observed from predicted values." },
    { mistake: "Treating a software default as a validated design.", correction: "Audit aggregation, field roles, scales, bins, sorting, and accessibility." },
    { mistake: "Writing a title that only names fields.", correction: "Use a question or evidence-based headline with scope, time, and units." },
  ],

  discussionQuestions: [
    "Can the same chart be excellent for one audience and poor for another? Give a decision-based example.",
    "When should an analyst prefer a table over a visualization?",
    "Which chart types are most often used persuasively rather than analytically?",
    "How should small samples and uncertainty change chart choice?",
    "When is a map necessary, and when does it merely decorate a geographic field?",
    "How should AI-generated chart recommendations be validated before publication?",
  ],

  formativeAssessment: {
    totalPoints: 50,
    passingScore: 40,
    questions: [
      { id: "check-06-01-01", type: "purpose", points: 5, prompt: "List eight analytical purposes and one suitable chart family for each.", sampleAnswer: "Lookup—table/card; distribution—histogram/box/ECDF; comparison—bar/dot; ranking—sorted bar/dot; time—line; relationship—scatter; composition—stacked bar; uncertainty—interval/band. Geography and flow are also valid purpose categories." },
      { id: "check-06-01-02", type: "perception", points: 5, prompt: "Why are position and aligned length usually preferred for precise comparison?", sampleAnswer: "Readers judge common-position and aligned-length differences more accurately than angle, area, volume, or color intensity." },
      { id: "check-06-01-03", type: "distribution", points: 5, prompt: "Select and defend a chart for incident downtime distribution.", sampleAnswer: "Use a histogram with points or an ECDF/box plot, retaining incident grain, n, units, center, spread, and unusual values." },
      { id: "check-06-01-04", type: "denominator", points: 5, prompt: "Why can ranking raw totals be misleading?", sampleAnswer: "Groups may differ in population, exposure, opportunity, capacity, or time; use a valid normalized rate and show underlying totals." },
      { id: "check-06-01-05", type: "time", points: 5, prompt: "State four requirements for an honest time-series chart.", sampleAnswer: "Ordered consistent intervals, preserved gaps, units and aggregation, comparable scale, observed/predicted distinction, and event annotation; any four earn full credit." },
      { id: "check-06-01-06", type: "integrity", points: 5, prompt: "Explain two risks of a dual-axis chart and give an alternative.", sampleAnswer: "Independent scales can manufacture alignment and confuse units. Use aligned panels sharing time or a scatterplot for relationship." },
      { id: "check-06-01-07", type: "composition", points: 5, prompt: "What conditions make part-to-whole visualization valid?", sampleAnswer: "Parts must share one meaningful denominator, be mutually exclusive or clearly defined, use consistent scope, and not hide substantial unknown categories." },
      { id: "check-06-01-08", type: "accessibility", points: 5, prompt: "Give five accessibility requirements for a professional chart.", sampleAnswer: "Readable type, sufficient contrast, non-color encoding, direct labels, descriptive title, text alternative, logical order, and keyboard/tooltip support; any five earn full credit." },
      { id: "check-06-01-09", type: "specification", points: 5, prompt: "List the major parts of a chart specification.", sampleAnswer: "Decision, audience, question, population, grain, fields, aggregation, denominator, chart family, encodings, scales, sorting, filters, labels, uncertainty, accessibility, and validation tests." },
      { id: "check-06-01-10", type: "ai", points: 5, prompt: "How should an analyst validate an AI-recommended chart?", sampleAnswer: "Verify the analytical contract, data roles, population, grain, aggregation, denominator, scales, missingness, uncertainty, accessibility, source reconciliation, and reader interpretation." },
    ],
  },

  researchExtension: {
    title: "Chart Choice, Perception, and Decision Accuracy Study",
    researchQuestion:
      "How does chart type affect reading time, numerical accuracy, confidence, accessibility, and operational decisions for the same evidence?",
    applicationOptions: [
      "Manufacturing maintenance",
      "Financial performance",
      "Student-support decisions",
      "Healthcare operations",
      "Customer experience",
      "AI model monitoring",
    ],
    task:
      "Create three visual encodings for the same analytical question, including one common but weak option. Randomize presentation order, ask readers to answer identical evidence and action questions, and compare accuracy, response time, confidence, and accessibility feedback.",
    requiredEvidence: [
      "One approved decision question, population, grain, metric, and denominator",
      "Three charts using identical underlying evidence",
      "Predeclared reader questions and success criteria",
      "At least five reviewers or a clearly labeled pilot limitation",
      "Accuracy, time, confidence, and accessibility results",
      "Reader errors mapped to specific visual encodings",
      "Ethical handling of participant data and consent",
      "Evidence-based recommendation and limitations",
    ],
  },

  portfolioArtifact: {
    title: "Lesson 1 Portfolio Evidence: Purpose-Driven Visualization Decision Brief",
    description:
      "Create a professional one-page analytical brief and chart-specification appendix that answer four different stakeholder questions from one validated dataset.",
    requiredSections: [
      "Stakeholder, decision, audience, population, grain, time, and limitations",
      "Question-to-purpose classification for every visual",
      "Chart specification with fields, aggregation, denominator, scales, filters, and accessibility",
      "Distribution, ranked comparison, time, and relationship views",
      "Supporting exact-value and sample-size table",
      "Findings separated from interpretation and action",
      "Alternative-chart critique and reader-test evidence",
      "Python or Power BI implementation notes and reproducibility record",
    ],
    requiredEvidence: [
      "At least four distinct analytical purposes",
      "At least one exposure-normalized rate",
      "At least one visible uncertainty or sample-size limitation",
      "At least one direct annotation tied to an exact source ID",
      "No critical information encoded only by color",
      "Documented scale, sorting, bin, missingness, and denominator choices",
      "Automated or manual chart-integrity checklist",
      "Reader-test result showing intended finding and action were understood",
    ],
  },

  growthIndicators: [
    { title: "Question Framer", description: "You classify the reasoning task before choosing a visual." },
    { title: "Perceptual Designer", description: "You use encodings that make the intended comparison accurate and fast." },
    { title: "Integrity Reviewer", description: "You test denominators, aggregation, baselines, scales, missingness, and uncertainty." },
    { title: "Decision Communicator", description: "You connect every chart to evidence, interpretation, action, and limitation." },
  ],

  reflection: [
    "Which current dashboard visual has no clearly stated decision question?",
    "Which KPI card hides a distribution or subgroup difference?",
    "Which ranking uses totals although exposure differs?",
    "Which chart connects categories that have no meaningful order?",
    "Which part-to-whole display has too many categories or an unclear denominator?",
    "Which chart changes its story when the axis or bin choice changes?",
    "Which important category is encoded only by color?",
    "Which map should be replaced by a sorted comparison chart?",
    "Which forecast or group estimate lacks uncertainty or sample size?",
    "Can a reader state the evidence and action without your verbal explanation?",
  ],

  summary: [
    "Choose charts from the analytical purpose, audience task, and decision—not from software defaults.",
    "Classify questions as lookup, distribution, comparison, ranking, time, relationship, composition, geography, flow, or uncertainty.",
    "Confirm population, grain, field types, cardinality, aggregation, denominator, time, and missingness before design.",
    "Position on a common scale and aligned length usually support more accurate comparison than angle, area, volume, or color intensity.",
    "Use tables for exact lookup and charts for pattern, contrast, shape, change, and relationships.",
    "Use distributions to reveal shape and spread instead of replacing the population with one average.",
    "Normalize comparisons when exposure, population, time, opportunity, or capacity differs.",
    "Use lines for meaningful order and continuity, especially time; do not connect unordered categories.",
    "Use scatterplots for paired quantitative relationships and avoid causal claims from association alone.",
    "Use composition charts only when parts share a valid whole and the number of categories remains interpretable.",
    "Avoid misleading baselines, arbitrary dual axes, 3D effects, decorative area, hidden gaps, and overloaded panels.",
    "Show counts, denominators, targets, unusual IDs, missingness, and uncertainty when they affect the decision.",
    "Design with direct labels, readable type, sufficient contrast, and non-color encodings.",
    "Write a chart specification and test the result with representative readers.",
    "AI can accelerate chart creation, but the analyst remains responsible for the decision contract and evidence integrity.",
  ],

  previousLesson: {
    id: "data-ai-m05-l07",
    moduleNumber: 5,
    slug: "portfolio-project-audited-data-analysis-notebook",
    title: "Portfolio Project: Audited Data-Analysis Notebook",
  },
  nextLesson: {
    id: "data-ai-m06-l02",
    moduleNumber: 6,
    slug: "visual-hierarchy-accessibility-and-honest-communication",
    title: "Visual Hierarchy, Accessibility, and Honest Communication",
  },

  lumineryGuidance: {
    message:
      "Name the decision and comparison first; then choose the simplest accurate chart, audit its integrity, and test whether a reader reaches the intended action.",
    prompt:
      "Act as my senior data-visualization educator, Power BI architect, perceptual-design reviewer, and research mentor. Help me complete Module 6 Lesson 1 one verified gate at a time. Require stakeholder, decision, audience, analytical purpose, population, grain, field types, aggregation, denominator, time window, chart family, encodings, baseline, scale, sorting, bins, missingness, uncertainty, accessibility, annotation, source evidence, reader test, and reproducibility. Challenge pie overload, decorative 3D, dual axes, truncated bars, unordered lines, raw-total ranking with unequal exposure, hidden categories, maps without spatial purpose, color-only meaning, causal overclaim, and AI-generated charts without validation. Do not approve the visual until the intended finding, evidence, uncertainty, and action are clear to an independent reader.",
    coachingQuestions: [
      "What decision and action must this visual support?",
      "What exact comparison must the reader perform?",
      "What are the population, grain, measures, dimensions, time, and denominator?",
      "Which chart family matches the analytical purpose?",
      "Which encoding makes the comparison most accurate?",
      "How could scale, aggregation, bins, sorting, or missingness change the story?",
      "What sample-size or uncertainty evidence is required?",
      "Can the chart be understood without color and without your narration?",
      "What did the reader test reveal, and what will you revise?",
    ],
  },
};

export default lesson01;
