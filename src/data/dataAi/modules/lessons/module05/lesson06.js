const lesson06 = {
  id: "data-ai-m05-l06",
  courseId: "data-ai-foundations",
  moduleId: "data-ai-foundations-module-05",
  moduleNumber: 5,
  lessonNumber: 6,
  slug: "exploratory-analysis-visualization-and-reproducibility",
  title: "Exploratory Analysis, Visualization, and Reproducibility",
  shortTitle: "EDA, Visualization, and Reproducibility",
  subtitle:
    "Investigate distributions and relationships, communicate evidence honestly, and package every calculation and figure so another analyst can reproduce the result.",
  status: "available",
  duration: "4–5 hours",
  level: "Beginner to Professional",

  essentialQuestion:
    "How can exploratory analysis reveal trustworthy patterns and unusual observations without exaggerating evidence or becoming impossible to reproduce?",
  bigIdea:
    "EDA is disciplined investigation, not chart decoration. It begins with a declared population and data-quality checks, combines numerical and visual evidence, treats unusual values as questions, and ends with a reproducible record of data, code, environment, outputs, and limitations.",

  whyThisLessonExists: {
    title: "A Beautiful Chart Can Still Tell the Wrong Story",
    introduction:
      "Exploratory data analysis helps analysts understand distributions, groups, relationships, time patterns, missingness, and anomalies before formal modeling. Its flexibility is valuable, but it also makes selective reporting, misleading scales, hidden exclusions, and irreproducible notebook state easy.",
    centralProblem:
      "Plant A and Plant B each report seven downtime incidents. Most values range from four to eleven minutes, but Plant A has one 58-minute incident. The overall mean rises to eleven minutes, while the median remains 7.5. If the analyst deletes the unusual event or reports only the mean, leadership receives an incomplete story.",
    purpose:
      "This lesson teaches an EDA question hierarchy, numerical profiling, robust summaries, IQR and standardized screening, categorical and relational analysis, chart selection, visual integrity, accessibility, annotation, sensitivity analysis, reproducible scripts and notebooks, environment capture, and validated evidence exports.",
  },

  problemFirst: {
    title: "Opening Investigation: Is the 58-Minute Incident an Error or an Important Event?",
    scenario:
      "Fourteen incidents contain downtime values [4, 5, 6, 7, 8, 10, 58] for Plant A and [5, 6, 7, 8, 9, 10, 11] for Plant B. The IQR rule flags 58, but the source record may represent a true major failure.",
    questions: [
      "What population and time period do these fourteen rows represent?",
      "Are identifiers unique, values complete, units consistent, and ranges plausible?",
      "How do mean, median, standard deviation, quartiles, and IQR describe the data differently?",
      "Which plot best shows shape, group differences, and the unusual event?",
      "Does IQR screening prove the value is wrong?",
      "How do results change with and without the flagged observation?",
      "What operational evidence should be checked before treatment?",
      "What files and metadata are required for another analyst to reproduce the conclusion?",
    ],
    expectedInsight:
      "An outlier flag is a prompt for investigation. Report both the full-data result and a clearly labeled sensitivity analysis; change the value only with verified evidence and lineage.",
  },

  visualModels: [
    {
      id: "eda-evidence-cycle",
      type: "lifecycle",
      title: "The Reproducible EDA Evidence Cycle",
      description:
        "Move from a decision question to validated evidence without losing population, code, or interpretation context.",
      stages: [
        { label: "1. Frame", detail: "State the decision, population, grain, time window, variables, comparison groups, and limitations." },
        { label: "2. Validate", detail: "Check schema, keys, dtypes, missingness, ranges, duplicates, units, and reconciliation." },
        { label: "3. Explore", detail: "Examine univariate distributions, group differences, relationships, and time patterns." },
        { label: "4. Investigate", detail: "Trace unusual values, missingness patterns, subgroup effects, and alternative explanations." },
        { label: "5. Communicate", detail: "Choose honest visual encodings, label denominators and units, annotate evidence, and state uncertainty." },
        { label: "6. Reproduce", detail: "Save code, data reference, environment, parameters, outputs, assertions, and rerun instructions." },
      ],
      feedback:
        "When an insight depends on one filter, one chart scale, or one unusual record, add a sensitivity view and document exactly which records change the conclusion.",
      interpretation:
        "EDA is complete only when the audience can understand the claim and another analyst can regenerate the evidence.",
    },
    {
      id: "chart-purpose-map",
      type: "lifecycle",
      title: "Chart Selection by Analytical Purpose",
      description:
        "Choose an encoding because it answers the question, not because it is familiar or visually impressive.",
      stages: [
        { label: "Distribution", detail: "Use histograms, density views, box plots, violin plots, or ECDFs to show shape, spread, and unusual values." },
        { label: "Comparison", detail: "Use aligned bars, dots, intervals, or small multiples for categories and groups." },
        { label: "Relationship", detail: "Use scatterplots with transparent points, trend summaries, and relevant grouping." },
        { label: "Time", detail: "Use line or step charts with ordered time, gaps preserved, and an appropriate interval." },
        { label: "Composition", detail: "Use stacked bars or tables cautiously when parts share a meaningful whole and labels remain readable." },
      ],
      feedback:
        "Axes, baselines, bin widths, aggregation, color, ordering, and omitted data are analytical decisions and must not distort the evidence.",
      interpretation:
        "The best chart is the simplest accurate encoding that makes the relevant comparison easy to see.",
    },
  ],

  learningObjectives: [
    "Frame an EDA question using decision, population, grain, time, variables, and comparison groups.",
    "Run structural and data-quality checks before calculating statistics or drawing charts.",
    "Profile numerical variables with count, mean, median, quantiles, spread, and robust alternatives.",
    "Profile categorical variables with frequencies, proportions, cross-tabs, and denominator-aware comparisons.",
    "Use IQR fences and standardized values as screening tools rather than automatic deletion rules.",
    "Compare full-data and sensitivity results while retaining exact affected identifiers.",
    "Interpret correlation and association without claiming causation.",
    "Identify nonlinearity, subgroup structure, confounding, overplotting, and missing-data patterns.",
    "Choose charts for distribution, comparison, relationship, time, and composition questions.",
    "Apply honest axes, scales, bins, ordering, color, annotations, units, and uncertainty communication.",
    "Design color-accessible and text-supported figures that remain understandable without color alone.",
    "Separate exploratory discovery from confirmatory inference and predeclared tests.",
    "Create a restart-and-run-all analysis with no hidden state or uncontrolled manual steps.",
    "Capture environment, random seeds, parameters, data versions, outputs, and validation logs.",
    "Build and test a reproducible manufacturing downtime EDA report.",
  ],

  prerequisiteKnowledge: [
    "Module 2: descriptive statistics, distributions, outliers, sampling, and uncertainty",
    "Module 5 Lessons 1–5: Python, NumPy, pandas, validation, joins, reshaping, and feature creation",
    "Basic understanding of mean, median, quartiles, standard deviation, proportions, and correlation",
    "Ability to interpret a histogram, box plot, bar chart, scatterplot, and time series",
    "Python with pandas, NumPy, and Matplotlib installed",
  ],

  vocabulary: [
    { term: "Exploratory data analysis (EDA)", definition: "A structured investigation of data quality, distributions, groups, relationships, time patterns, and anomalies before final conclusions." },
    { term: "Data audit", definition: "Evidence-based review of schema, population, keys, dtypes, missingness, ranges, duplicates, and lineage." },
    { term: "Univariate analysis", definition: "Analysis of one variable's distribution, center, spread, shape, and unusual values." },
    { term: "Bivariate analysis", definition: "Analysis of the relationship or comparison between two variables." },
    { term: "Multivariate analysis", definition: "Analysis involving three or more variables, often to reveal conditional patterns or confounding." },
    { term: "Distribution", definition: "How values occur across their possible range, including frequency, center, spread, shape, and tails." },
    { term: "Center", definition: "A representative location of a distribution, commonly described by mean or median." },
    { term: "Mean", definition: "The arithmetic average, sensitive to extreme values and population definition." },
    { term: "Median", definition: "The middle ordered value or midpoint of the two middle values; robust to many extreme observations." },
    { term: "Mode", definition: "The most frequent observed value or category, potentially nonunique." },
    { term: "Spread", definition: "The amount of variability in a distribution, described by range, IQR, variance, standard deviation, or robust measures." },
    { term: "Range", definition: "Maximum minus minimum; highly sensitive to extremes." },
    { term: "Variance", definition: "The average or sample-adjusted squared deviation from the mean." },
    { term: "Standard deviation", definition: "The square root of variance, expressed in the variable's original units." },
    { term: "Quantile", definition: "A cutoff below which a specified proportion of ordered observations falls under a defined method." },
    { term: "Quartile", definition: "One of the values dividing ordered data into four parts, especially Q1, median, and Q3." },
    { term: "Interquartile range (IQR)", definition: "Q3 minus Q1, measuring the spread of the middle half of observations." },
    { term: "Outlier", definition: "An observation unusually distant under a chosen rule; it may be error, rare truth, new process, or important event." },
    { term: "Robust statistic", definition: "A statistic less influenced by a small number of extreme values, such as median or IQR." },
    { term: "Skewness", definition: "Asymmetry in a distribution's shape; sample estimates can be unstable for small datasets." },
    { term: "Frequency table", definition: "A table of category or value counts, often paired with proportions and missing counts." },
    { term: "Cross-tabulation", definition: "A table showing joint frequencies or proportions for two categorical variables." },
    { term: "Covariance", definition: "A scale-dependent measure of how two numerical variables vary together." },
    { term: "Correlation", definition: "A standardized measure of association; Pearson correlation summarizes linear association." },
    { term: "Association", definition: "A statistical relationship that does not by itself establish causation." },
    { term: "Histogram", definition: "A distribution chart grouping numerical values into bins whose width and boundaries affect the displayed shape." },
    { term: "Box plot", definition: "A compact distribution summary showing median, quartiles, whiskers, and rule-based flagged points." },
    { term: "Bar chart", definition: "A chart comparing categorical magnitudes with aligned lengths and normally a zero baseline." },
    { term: "Scatterplot", definition: "A chart placing paired numerical values on two axes to reveal association, clusters, nonlinearity, and unusual points." },
    { term: "Line chart", definition: "A chart connecting ordered values, typically through time, where gaps and interval choice matter." },
    { term: "Heatmap", definition: "A matrix whose cell color represents magnitude; it requires a labeled scale and accessible alternative values." },
    { term: "Small multiples", definition: "Repeated charts using common scales to compare groups without overcrowding one panel." },
    { term: "Visual encoding", definition: "The mapping of data to position, length, color, shape, size, or other visible properties." },
    { term: "Axis scale", definition: "The numerical mapping from values to positions, such as linear, logarithmic, or date scale." },
    { term: "Overplotting", definition: "Points overlapping so heavily that frequency and structure become hidden." },
    { term: "Annotation", definition: "Text, lines, or markers that explain a relevant event, threshold, point, or limitation." },
    { term: "Sensitivity analysis", definition: "Repeating analysis under plausible alternative rules to measure how conclusions change." },
    { term: "Reproducibility", definition: "The ability to regenerate results using the same data, code, parameters, environment, and documented steps." },
    { term: "Random seed", definition: "A recorded initialization value supporting repeatable pseudo-random operations." },
    { term: "Computational environment", definition: "The operating system, language, packages, versions, settings, and hardware context used to produce results." },
  ],

  formulas: [
    { id: "mean", name: "Arithmetic mean", formula: "x̄ = (1/n) Σᵢ xᵢ", meaning: "Summarizes the balance point of eligible numerical observations.", requirement: "Report n, missingness policy, units, and sensitivity to unusual values." },
    { id: "sample-variance", name: "Sample variance", formula: "s² = Σᵢ(xᵢ − x̄)² ÷ (n − 1)", meaning: "Measures average squared deviation using the sample degrees-of-freedom correction.", requirement: "Use only when n > 1 and interpret alongside distribution shape and units squared." },
    { id: "sample-sd", name: "Sample standard deviation", formula: "s = √s²", meaning: "Expresses spread in the original measurement units.", requirement: "Extreme values can strongly influence it; compare with IQR when distributions are skewed." },
    { id: "iqr", name: "Interquartile range", formula: "IQR = Q3 − Q1", meaning: "Measures the spread of the middle 50% of observations.", requirement: "Record the quantile definition or software method for strict reproducibility." },
    { id: "iqr-fences", name: "IQR screening fences", formula: "lower = Q1 − 1.5·IQR; upper = Q3 + 1.5·IQR", meaning: "Flags observations outside conventional exploratory fences.", requirement: "A flag is not proof of error and must not trigger automatic deletion." },
    { id: "z-score", name: "Standardized value", formula: "zᵢ = (xᵢ − x̄) ÷ s", meaning: "Measures distance from the mean in standard-deviation units.", requirement: "Interpret cautiously for small, skewed, heavy-tailed, or contaminated distributions." },
    { id: "correlation", name: "Pearson correlation", formula: "r = cov(X,Y) ÷ (sX·sY)", meaning: "Summarizes linear association from −1 to 1.", requirement: "Inspect the scatterplot, subgroup structure, outliers, range restriction, and time ordering." },
    { id: "relative-change", name: "Relative change", formula: "relative change = (new − old) ÷ old", meaning: "Expresses change relative to a baseline.", requirement: "Define behavior when the baseline is zero, missing, negative, or not comparable." },
  ],

  workedExamples: [
    {
      id: "example-05-06-01",
      title: "Compare mean and median under one extreme value",
      problem: "For the fourteen downtime values in the opening investigation, compare mean and median.",
      solutionSteps: [
        "Sort the values and confirm all fourteen records belong to the same governed population.",
        "Add the values to obtain 154 and divide by 14 for the mean.",
        "Average the seventh and eighth ordered values, 7 and 8, for the median.",
      ],
      answer: "Mean = 11.0 minutes; median = 7.5 minutes.",
      interpretation: "The 58-minute incident pulls the mean upward while the median remains near the typical incident range.",
    },
    {
      id: "example-05-06-02",
      title: "Use IQR as a screening rule",
      problem: "Calculate IQR fences for the downtime series using pandas' default linear quantiles.",
      solutionSteps: [
        "Calculate Q1 = 6.0 and Q3 = 9.75.",
        "Calculate IQR = 3.75.",
        "Calculate lower fence = 0.375 and upper fence = 15.375.",
        "Flag 58 because it exceeds 15.375, retaining its incident ID.",
      ],
      answer: "Only the 58-minute observation is flagged.",
      interpretation: "The rule identifies statistical unusualness, not whether the incident is erroneous or operationally important.",
    },
    {
      id: "example-05-06-03",
      title: "Report a sensitivity analysis honestly",
      problem: "Compare the overall downtime mean with and without the flagged 58-minute incident.",
      solutionSteps: [
        "Full-data mean is 154 ÷ 14 = 11.0.",
        "Without the flagged row, the remaining sum is 96 across 13 incidents.",
        "Calculate 96 ÷ 13 ≈ 7.38.",
        "Report both results and the exact excluded ID; do not replace the primary result silently.",
      ],
      answer: "Mean changes from 11.0 to approximately 7.38 minutes.",
      interpretation: "The conclusion about typical downtime is sensitive to one major incident, which is itself decision-relevant evidence.",
    },
    {
      id: "example-05-06-04",
      title: "Choose a chart for a distribution and group comparison",
      problem: "Show downtime shape, unusual values, and Plant A versus Plant B differences.",
      solutionSteps: [
        "Use a histogram to examine overall shape, choosing and reporting bin boundaries.",
        "Use side-by-side box plots or small-multiple dot plots to compare plants.",
        "Overlay or label individual points because each group has only seven observations.",
        "Annotate the 58-minute incident rather than hiding it behind a summary.",
      ],
      answer: "A histogram plus plant-level box or dot plots answers complementary questions.",
      interpretation: "No single chart reveals every important feature; coordinated views should share the same population and units.",
    },
    {
      id: "example-05-06-05",
      title: "Interpret correlation with visual evidence",
      problem: "Repair cost and downtime have a strong positive correlation. What may be concluded?",
      solutionSteps: [
        "Inspect the scatterplot for linearity, clusters, outliers, and influential points.",
        "Calculate correlation on the declared eligible population.",
        "Compare by plant or asset type to identify subgroup structure.",
        "Describe association; do not claim downtime causes cost without a causal design.",
      ],
      answer: "Longer incidents are associated with higher repair cost in this sample, subject to influential points and other variables.",
      interpretation: "A coefficient compresses a relationship and cannot replace the plotted evidence or domain reasoning.",
    },
    {
      id: "example-05-06-06",
      title: "Prove a notebook is reproducible",
      problem: "An analysis works only when cells are run in a particular hidden order.",
      solutionSteps: [
        "Move parameters and imports to explicit early cells or a configuration file.",
        "Use deterministic input paths, seeds, functions, and output locations.",
        "Restart the kernel and run all cells from top to bottom.",
        "Assert expected row counts, statistics, flagged IDs, and output files.",
        "Capture package versions and data version or checksum.",
      ],
      answer: "The analysis passes only when a clean restart reproduces every validated table and figure.",
      interpretation: "A notebook's visible code is not sufficient if its result depends on hidden memory or manual edits.",
    },
  ],

  interactiveExploration: {
    title: "Change the View Without Changing the Evidence",
    description:
      "Explore the same fourteen records under alternative summaries and visual settings, recording which changes reveal structure and which distort interpretation.",
    steps: [
      "Compare mean, median, standard deviation, IQR, range, and trimmed sensitivity summaries.",
      "Change histogram bin widths and boundaries while keeping the same population.",
      "Compare overall, Plant A, and Plant B distributions using shared axes.",
      "Display the 58-minute observation, remove it only in a labeled sensitivity panel, and compare conclusions.",
      "Plot repair cost against downtime with and without point labels and transparency.",
      "Restart the analysis from a clean environment and verify identical outputs.",
    ],
    questions: [
      "Which conclusions are stable across reasonable choices?",
      "Which depend heavily on the flagged incident?",
      "Which chart setting makes a difference look larger than it is?",
      "Which output cannot be recreated without hidden state?",
      "Which claim should remain descriptive rather than causal?",
    ],
    expectedDiscovery:
      "EDA choices shape what viewers notice; transparent alternatives and reproducible code separate genuine patterns from presentation artifacts.",
  },

  realWorldApplications: [
    { field: "Manufacturing and Robotics", application: "Profile downtime and sensor distributions, compare plants and assets, investigate failure events, and publish reproducible maintenance evidence." },
    { field: "Finance", application: "Examine returns, transaction distributions, anomalies, risk relationships, and period changes without hiding tail events." },
    { field: "Education", application: "Compare score distributions and support indicators while reporting missingness, denominators, subgroup evidence, and uncertainty." },
    { field: "Healthcare Operations", application: "Explore wait times, utilization, and outcomes using privacy-aware populations, robust summaries, and honest uncertainty." },
    { field: "Business Intelligence", application: "Prototype and validate metrics and visuals before encoding them in governed Power BI semantic models." },
    { field: "AI and Machine Learning", application: "Identify leakage, drift, imbalance, outliers, nonlinearities, and subgroup risks before modeling and during monitoring." },
  ],

  aiConnection: {
    title: "EDA Is the First Model-Risk Review",
    explanation:
      "Before training, EDA can expose target leakage, duplicated entities, class imbalance, missingness tied to outcomes, impossible ranges, unstable categories, temporal drift, and subgroup differences. After deployment, the same governed profiles help detect distribution and data-quality drift.",
    example:
      "A predictive-maintenance feature with unusually high correlation to failure may be a useful precursor—or a repair code recorded after the failure. Plot it through event time, inspect source lineage, and verify availability at the prediction cutoff before approving it.",
    uses: [
      "Leakage and post-outcome field detection",
      "Feature distribution and outlier review",
      "Class and subgroup imbalance analysis",
      "Train, validation, test, and production comparison",
      "Drift and data-quality monitoring",
      "Error analysis and model-limit communication",
    ],
    caution:
      "Repeatedly exploring the test set turns it into a tuning resource. Conduct discovery on training data, preserve final evaluation independence, and label post-hoc findings.",
    reflectionQuestion:
      "Which feature or chart in your project might reveal information recorded only after the outcome occurred?",
  },

  pythonLab: {
    title: "Reproducible Plant Downtime EDA and Outlier Investigation",
    objective:
      "Validate fourteen incident records, calculate full and grouped profiles, flag the 58-minute incident with the IQR rule, compare sensitivity results, generate four diagnostic charts, and assert reproducible evidence.",
    code: `from pathlib import Path
import platform

import matplotlib
import matplotlib.pyplot as plt
import numpy as np
import pandas as pd

OUTPUT_PATH = Path("eda_diagnostics.png")

incidents = pd.DataFrame({
    "incident_id": pd.Series(
        [f"A-{i:02d}" for i in range(1, 8)] + [f"B-{i:02d}" for i in range(1, 8)],
        dtype="string",
    ),
    "plant": pd.Series(["A"] * 7 + ["B"] * 7, dtype="string"),
    "event_date": pd.to_datetime(
        list(pd.date_range("2026-09-01", periods=7, freq="D")) * 2,
        utc=True,
    ),
    "downtime_min": pd.Series(
        [4, 5, 6, 7, 8, 10, 58, 5, 6, 7, 8, 9, 10, 11],
        dtype="Int64",
    ),
    "repair_cost_usd": pd.Series(
        [40, 50, 60, 65, 80, 100, 400, 45, 55, 70, 75, 90, 95, 110],
        dtype="Float64",
    ),
})

# Gate 1: validate the analytical population before exploration.
assert incidents.shape == (14, 5)
assert incidents["incident_id"].notna().all()
assert incidents["incident_id"].is_unique
assert incidents[["downtime_min", "repair_cost_usd"]].notna().all().all()
assert incidents["downtime_min"].ge(0).all()
assert incidents["repair_cost_usd"].ge(0).all()
assert set(incidents["plant"]) == {"A", "B"}

series = incidents["downtime_min"]
q1 = float(series.quantile(0.25))
q3 = float(series.quantile(0.75))
iqr = q3 - q1
lower_fence = q1 - 1.5 * iqr
upper_fence = q3 + 1.5 * iqr

incidents["iqr_flag"] = (
    series.lt(lower_fence) | series.gt(upper_fence)
).astype("boolean")

profile = series.agg(["count", "mean", "median", "min", "max", "std"])
profile.loc["q1"] = q1
profile.loc["q3"] = q3
profile.loc["iqr"] = iqr

group_profile = incidents.groupby("plant")["downtime_min"].agg(
    count="count",
    mean="mean",
    median="median",
    std="std",
    minimum="min",
    maximum="max",
)

flagged = incidents.loc[incidents["iqr_flag"]].copy()
without_flagged = incidents.loc[~incidents["iqr_flag"]].copy()
correlation_all = float(incidents[["downtime_min", "repair_cost_usd"]].corr().iloc[0, 1])
correlation_without_flagged = float(
    without_flagged[["downtime_min", "repair_cost_usd"]].corr().iloc[0, 1]
)

# Gate 2: create coordinated, honest diagnostic views.
fig, axes = plt.subplots(2, 2, figsize=(11, 8), constrained_layout=True)

axes[0, 0].hist(series.astype(float), bins=[0, 5, 10, 15, 30, 45, 60], color="#2563EB", edgecolor="white")
axes[0, 0].set(title="Downtime distribution", xlabel="Downtime (minutes)", ylabel="Incident count")

plant_values = [
    incidents.loc[incidents["plant"].eq(p), "downtime_min"].astype(float)
    for p in ["A", "B"]
]
axes[0, 1].boxplot(plant_values, tick_labels=["Plant A", "Plant B"])
axes[0, 1].set(title="Downtime by plant", ylabel="Downtime (minutes)")

for plant, color in [("A", "#2563EB"), ("B", "#F59E0B")]:
    subset = incidents.loc[incidents["plant"].eq(plant)]
    axes[1, 0].scatter(
        subset["downtime_min"], subset["repair_cost_usd"],
        label=f"Plant {plant}", color=color, alpha=0.8,
    )
axes[1, 0].set(title="Repair cost and downtime", xlabel="Downtime (minutes)", ylabel="Repair cost (USD)")
axes[1, 0].legend()

daily = incidents.groupby("event_date")["downtime_min"].mean()
axes[1, 1].plot(daily.index, daily.values, marker="o", color="#0F766E")
axes[1, 1].set(title="Daily mean downtime", xlabel="Event date", ylabel="Mean downtime (minutes)")
axes[1, 1].tick_params(axis="x", rotation=30)

fig.suptitle("Plant downtime exploratory diagnostics", fontsize=14)
fig.savefig(OUTPUT_PATH, dpi=150, bbox_inches="tight")
plt.close(fig)

# Gate 3: exact, sensitivity, and reproducibility assertions.
assert q1 == 6.0
assert q3 == 9.75
assert iqr == 3.75
assert lower_fence == 0.375
assert upper_fence == 15.375
assert flagged["incident_id"].tolist() == ["A-07"]
assert flagged["downtime_min"].tolist() == [58]
assert float(series.mean()) == 11.0
assert float(series.median()) == 7.5
assert np.isclose(without_flagged["downtime_min"].mean(), 96 / 13)
assert float(group_profile.loc["A", "mean"]) == 14.0
assert float(group_profile.loc["B", "mean"]) == 8.0
assert OUTPUT_PATH.exists() and OUTPUT_PATH.stat().st_size > 0

environment = {
    "python": platform.python_version(),
    "pandas": pd.__version__,
    "numpy": np.__version__,
    "matplotlib": matplotlib.__version__,
}

print("Overall profile:")
print(profile.round(2))
print("IQR fences:", lower_fence, upper_fence)
print("Flagged observations:", flagged[["incident_id", "plant", "downtime_min"]].to_dict("records"))
print("Plant comparison:")
print(group_profile.round(2))
print("Mean with all data:", round(float(series.mean()), 2))
print("Mean without flagged value:", round(float(without_flagged["downtime_min"].mean()), 2))
print("Correlation all / sensitivity:", round(correlation_all, 3), round(correlation_without_flagged, 3))
print("Environment:", environment)
print("Figure created:", OUTPUT_PATH)
print("All EDA, visualization, sensitivity, and reproducibility tests passed.")`,
    questions: [
      "What population, row grain, time period, and units are validated before EDA?",
      "Why are mean and median both reported?",
      "How are Q1, Q3, IQR, and fences calculated?",
      "Why is A-07 retained after it is flagged?",
      "What conclusion changes when A-07 is excluded in sensitivity analysis?",
      "Why do the histogram and box plots answer different questions?",
      "How can A-07 influence the correlation between downtime and repair cost?",
      "What makes the daily plot potentially sensitive to aggregation choice?",
      "Which assertions prove the exact analytical population and flagged record?",
      "Which environment information supports reproducibility, and what additional data-version evidence should production include?",
    ],
    reflectionQuestions: [
      "Which operational source can confirm whether A-07 is a true major failure or a recording problem?",
      "Should Plant A be evaluated by typical downtime, total burden, tail risk, or all three?",
      "How would more months of data change the reliability of plant comparisons?",
    ],
    extension:
      "Add twelve months of incidents, asset types, shift, maintenance category, and status. Create missingness and group profiles, small multiples, weekly rates with exposure denominators, bootstrap intervals, robust correlations, and a versioned HTML or PDF report that reruns from one command.",
  },

  guidedPractice: [
    { id: "gp-05-06-01", question: "For the fourteen downtime values, what are the mean and median?", answer: "The mean is 11.0 minutes and the median is 7.5 minutes." },
    { id: "gp-05-06-02", question: "With Q1 = 6 and Q3 = 9.75, calculate IQR and the upper fence.", answer: "IQR = 3.75; upper fence = 9.75 + 1.5(3.75) = 15.375." },
    { id: "gp-05-06-03", question: "Does the IQR flag prove 58 is an error?", answer: "No. It proves the value is unusual under that rule; source and operational evidence determine whether it is erroneous, rare, or important." },
    { id: "gp-05-06-04", question: "Which chart should compare one numerical distribution across two plants?", answer: "Use side-by-side box or violin plots with individual points, shared axes, sample sizes, and units; small multiples are another clear option." },
    { id: "gp-05-06-05", question: "Why should a bar chart normally begin at zero?", answer: "Bar length encodes magnitude from the baseline, so a truncated baseline exaggerates proportional differences unless clearly justified and communicated." },
    { id: "gp-05-06-06", question: "What is a minimum notebook reproducibility test?", answer: "Restart the kernel, run all cells in order, regenerate outputs, and pass assertions using recorded data and package versions without manual intervention." },
  ],

  independentPractice: [
    { id: "ip-05-06-01", difficulty: "Foundational", question: "Create a validated numerical profile containing count, missing count, mean, median, standard deviation, minimum, quartiles, maximum, and IQR.", sampleAnswer: "Define the eligible population, use pandas aggregations and quantiles, record units and method, and assert expected counts and boundaries." },
    { id: "ip-05-06-02", difficulty: "Foundational", question: "Create frequency and proportion tables for severity, including missing values.", sampleAnswer: "Use value_counts(dropna=False) for counts and normalize=True for proportions, then state the denominator explicitly." },
    { id: "ip-05-06-03", difficulty: "Applied", question: "Flag IQR observations while retaining IDs and compare full versus sensitivity statistics.", sampleAnswer: "Create a Boolean flag, preserve exact identifiers, report both populations and metrics, and investigate before correction or exclusion." },
    { id: "ip-05-06-04", difficulty: "Applied", question: "Create one distribution, comparison, relationship, and time chart with accessible labels.", sampleAnswer: "Use a histogram or box plot, aligned comparison chart, scatterplot, and line chart with titles, units, sample scope, color-safe encoding, and annotations." },
    { id: "ip-05-06-05", difficulty: "Analytical", question: "Compare Pearson and rank correlation with and without influential observations.", sampleAnswer: "Inspect scatterplots, compute both measures on controlled populations, report exact changes, and avoid causal claims." },
    { id: "ip-05-06-06", difficulty: "Advanced", question: "Design a visual sensitivity analysis for alternative bins, scales, filters, and group definitions.", sampleAnswer: "Hold the source population visible, vary one justified choice at a time, use shared scales when comparing, and document which conclusions change." },
    { id: "ip-05-06-07", difficulty: "Professional", question: "Package an EDA project that another analyst can rerun from a clean environment.", sampleAnswer: "Include data reference, code, configuration, environment lock, seeds, assertions, one-command execution, deterministic outputs, README, data dictionary, findings, and limitations." },
  ],

  commonMistakes: [
    { mistake: "Exploring before defining population, grain, time, and units.", correction: "Write the analytical contract and validate the data first." },
    { mistake: "Reporting only the mean for a skewed or contaminated distribution.", correction: "Include median, quantiles, spread, shape, sample size, and sensitivity evidence." },
    { mistake: "Automatically deleting every IQR or z-score flag.", correction: "Retain IDs, investigate provenance and domain meaning, and label alternative analyses." },
    { mistake: "Calling an observation an outlier without naming the rule.", correction: "State the screening method, population, parameters, and quantile definition." },
    { mistake: "Using correlation without viewing the scatterplot.", correction: "Inspect nonlinearity, subgroups, influential points, missingness, and restricted ranges." },
    { mistake: "Interpreting association as causation.", correction: "Use causal language only with an appropriate design, assumptions, and analysis." },
    { mistake: "Choosing histogram bins that manufacture or hide patterns.", correction: "Test reasonable bin widths and report or preserve the bin definition." },
    { mistake: "Truncating bar-chart axes to exaggerate differences.", correction: "Use a zero baseline for magnitude bars or choose position-based dots with clearly labeled scales." },
    { mistake: "Using color alone to encode critical categories.", correction: "Combine accessible color with labels, shapes, line styles, position, or direct annotation." },
    { mistake: "Connecting unordered categories with a line.", correction: "Use lines only when order and continuity carry real meaning." },
    { mistake: "Hiding denominators behind percentages.", correction: "Show counts, eligible population, missingness, and the exact percentage denominator." },
    { mistake: "Exploring the test set repeatedly during model development.", correction: "Keep final evaluation independent and conduct feature discovery on training data." },
    { mistake: "Publishing charts generated from hidden notebook state.", correction: "Restart, run all, assert outputs, and automate the build." },
    { mistake: "Using unrecorded package versions and mutable data files.", correction: "Capture environment, data version or checksum, parameters, and generation time." },
    { mistake: "Saving screenshots instead of data and code evidence.", correction: "Export validated tables, scripts, figures, metadata, and reproducible instructions." },
  ],

  discussionQuestions: [
    "When should a true extreme event remain central to an operational summary rather than be treated as statistical noise?",
    "Which visual design choices are analytical assumptions rather than decoration?",
    "How can EDA remain open to discovery without becoming selective evidence hunting?",
    "What information should accompany a chart so a decision maker can evaluate its population and uncertainty?",
    "When does repeated subgroup exploration require confirmatory follow-up or multiplicity control?",
    "What is the minimum reproducibility evidence expected in a professional analytics portfolio?",
  ],

  formativeAssessment: {
    totalPoints: 50,
    passingScore: 40,
    questions: [
      { id: "check-05-06-01", type: "framing", points: 5, prompt: "State the required elements of an EDA analytical contract.", sampleAnswer: "Decision question, population, grain, time window, variables, groups, units, eligibility, missingness policy, source, and known limitations." },
      { id: "check-05-06-02", type: "statistics", points: 5, prompt: "Compare mean, median, standard deviation, and IQR.", sampleAnswer: "Mean and standard deviation summarize center and spread but are sensitive to extremes; median and IQR are robust summaries of central location and middle-half spread." },
      { id: "check-05-06-03", type: "outliers", points: 5, prompt: "Explain the correct use of IQR fences.", sampleAnswer: "Use them to flag unusual observations under a declared quantile method, retain IDs, investigate source and domain meaning, and avoid automatic deletion." },
      { id: "check-05-06-04", type: "sensitivity", points: 5, prompt: "What should a complete outlier sensitivity analysis report?", sampleAnswer: "Primary full-data result, alternative result, exact affected IDs, reason for the alternative, population sizes, metric changes, and unchanged versus changed conclusions." },
      { id: "check-05-06-05", type: "charts", points: 5, prompt: "Match chart types to distribution, comparison, relationship, and time questions.", sampleAnswer: "Histogram/box/ECDF for distribution, aligned bars/dots for comparison, scatter for relationships, and ordered line/step charts for time." },
      { id: "check-05-06-06", type: "integrity", points: 5, prompt: "Give five visual choices that can distort evidence.", sampleAnswer: "Truncated bar baseline, selective axis range, misleading bins, unequal scales, area/volume exaggeration, hidden missing groups, inappropriate smoothing, or color emphasis; any five earn full credit." },
      { id: "check-05-06-07", type: "correlation", points: 5, prompt: "Why is a high correlation insufficient evidence for causation?", sampleAnswer: "Confounding, reverse direction, selection, time trends, subgroup structure, and influential observations can generate association without the claimed causal effect." },
      { id: "check-05-06-08", type: "accessibility", points: 5, prompt: "List four requirements for an accessible chart.", sampleAnswer: "Readable text and contrast, non-color encodings, direct labels or alternatives, descriptive title, units, logical order, and a data table or text summary; any four earn full credit." },
      { id: "check-05-06-09", type: "reproducibility", points: 5, prompt: "What evidence is required to rerun an analysis?", sampleAnswer: "Data version, code, parameters, environment and versions, seeds, paths, execution order, assertions, output definitions, and README instructions." },
      { id: "check-05-06-10", type: "ai", points: 5, prompt: "Give four ways EDA can reveal model risk.", sampleAnswer: "Leakage, entity duplication, temporal drift, class imbalance, missingness by outcome/group, impossible ranges, subgroup shifts, and influential features; any four earn full credit." },
    ],
  },

  researchExtension: {
    title: "Robust EDA, Visual Integrity, and Reproducibility Study",
    researchQuestion:
      "How do population filters, unusual observations, visualization choices, and computational environments change the conclusions of an exploratory analysis?",
    applicationOptions: [
      "Manufacturing downtime",
      "Financial returns and transactions",
      "Student performance",
      "Healthcare wait times",
      "Customer behavior",
      "AI feature and drift monitoring",
    ],
    task:
      "Perform a complete EDA under one primary analytical contract, then repeat it under controlled alternative missingness, outlier, aggregation, binning, scale, and subgroup decisions. Reproduce the work in a fresh environment or automated run.",
    requiredEvidence: [
      "Population, grain, time, source, units, and eligibility contract",
      "Data-quality audit and exact exception identifiers",
      "Numerical and categorical profiles with robust alternatives",
      "At least four question-matched accessible charts",
      "Outlier and influential-point investigation with sensitivity results",
      "Correlation or association analysis with visual and subgroup evidence",
      "Clean restart or one-command reproducibility record",
      "Environment, data version, assertions, findings, uncertainty, and limitations",
    ],
  },

  portfolioArtifact: {
    title: "Lesson 6 Portfolio Evidence: Reproducible Exploratory Analysis Report",
    description:
      "Create a professional notebook and generated report that validate one operational dataset, explain its distributions and relationships, investigate anomalies, and regenerate every table and figure from a clean run.",
    requiredSections: [
      "Executive question, decision context, population, grain, time, units, and limitations",
      "Data dictionary and quality audit with row reconciliation",
      "Numerical, categorical, group, relationship, and time profiles",
      "Accessible distribution, comparison, relationship, and time figures",
      "Outlier investigation and labeled sensitivity analysis",
      "Findings separated into evidence, interpretation, uncertainty, and next action",
      "Environment specification, data version, configuration, seeds, and run instructions",
      "Automated assertions and deterministic output manifest",
    ],
    requiredEvidence: [
      "At least twelve validated metrics with denominators and units",
      "At least four coordinated figures and one supporting data table",
      "Exact flagged, excluded, or corrected identifiers",
      "Full versus sensitivity results for one influential decision",
      "One relationship analysis that explicitly avoids causal overclaim",
      "One accessibility review using color, labels, contrast, and text alternatives",
      "Restart-and-run-all or one-command execution proof",
      "Reproducible package versions and no private or uncontrolled production data",
    ],
  },

  growthIndicators: [
    { title: "Exploratory Investigator", description: "You move systematically from data quality to distributions, groups, relationships, time, and anomalies." },
    { title: "Visual Evidence Designer", description: "You select honest, accessible encodings based on analytical purpose and audience decisions." },
    { title: "Sensitivity Reviewer", description: "You test whether conclusions depend on filters, unusual values, bins, scales, or group definitions." },
    { title: "Reproducible Researcher", description: "You package data references, code, environment, assertions, figures, and conclusions for independent reruns." },
  ],

  reflection: [
    "Which current chart lacks a clear population, denominator, time range, or unit?",
    "Which summary relies on the mean although the distribution is skewed or contains extremes?",
    "Which flagged value was removed without source investigation?",
    "Which conclusion changes under a reasonable sensitivity analysis?",
    "Which correlation may be driven by one point, subgroup, or time trend?",
    "Which bar or axis scale exaggerates the visible difference?",
    "Which important category is encoded only by color?",
    "Which notebook output depends on hidden execution order?",
    "Which data file or package version could change without being recorded?",
    "Which AI insight came from repeatedly examining data intended for final evaluation?",
  ],

  summary: [
    "EDA is a structured investigation of data quality, distributions, categories, groups, relationships, time patterns, and anomalies.",
    "Begin with a declared decision, population, grain, time window, variables, groups, units, and eligibility policy.",
    "Validate schema, keys, dtypes, missingness, ranges, duplicates, lineage, and row reconciliation before interpretation.",
    "Use mean and standard deviation with robust median, quantiles, and IQR when unusual values or skewness matter.",
    "IQR fences and z-scores flag observations for investigation; they do not prove error or authorize deletion.",
    "Sensitivity analysis should retain exact affected IDs and compare full-data and alternative conclusions transparently.",
    "Frequency tables and cross-tabs require explicit counts, proportions, missingness, and denominators.",
    "Correlation describes association, not causation, and must be interpreted with scatterplots, subgroups, time, and influential-point evidence.",
    "Select charts according to distribution, comparison, relationship, time, or composition purpose.",
    "Axes, baselines, bins, scales, ordering, aggregation, and smoothing affect interpretation and must remain honest.",
    "Accessible charts use readable labels, sufficient contrast, direct annotation, and non-color encodings or text alternatives.",
    "Separate exploratory discovery from confirmatory claims and preserve independent final evaluation data.",
    "A reproducible analysis records data version, code, parameters, environment, seeds, output definitions, assertions, and rerun instructions.",
    "Restart-and-run-all or one-command execution exposes hidden state and manual dependencies.",
    "For AI, EDA is an early risk review for leakage, drift, imbalance, duplicates, missingness, subgroup differences, and unstable features.",
  ],

  previousLesson: {
    id: "data-ai-m05-l05",
    moduleNumber: 5,
    slug: "groupby-merge-reshape-and-feature-creation",
    title: "GroupBy, Merge, Reshape, and Feature Creation",
  },
  nextLesson: null,

  lumineryGuidance: {
    message:
      "Validate the population, compare robust and conventional evidence, investigate unusual records, communicate honestly, and make every result rerunnable.",
    prompt:
      "Act as my senior exploratory-data analyst, visualization reviewer, and reproducible-research coach. Help me complete Module 5 Lesson 6 one verified gate at a time. Require decision context, population, grain, time, units, eligibility, data-quality audit, numerical and categorical profiles, robust summaries, exact outlier IDs, sensitivity analysis, chart-purpose matching, honest axes and bins, accessible encodings, relationship diagnostics, uncertainty, environment capture, data version, assertions, and clean reruns. Do not let me report a mean without distribution context, delete flags automatically, claim causation from correlation, exaggerate differences through visual scales, hide denominators or missing groups, explore the final test set repeatedly, or publish results that depend on hidden notebook state.",
    coachingQuestions: [
      "What population and decision does this analysis represent?",
      "Which quality checks must pass before exploration?",
      "What do center, spread, shape, and tails each show?",
      "Which exact record is unusual and why?",
      "How does the conclusion change under sensitivity analysis?",
      "Which chart best answers this question without distortion?",
      "What uncertainty or alternative explanation remains?",
      "Can the result be recreated after a clean restart?",
      "Which data, code, environment, and assertions prove reproducibility?",
    ],
  },
};

export default lesson06;
