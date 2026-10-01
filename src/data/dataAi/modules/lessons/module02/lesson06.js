const lesson06 = {
  id: "data-ai-m02-l06",
  courseId: "data-ai-foundations",
  moduleId: "data-ai-foundations-module-02",
  moduleNumber: 2,
  lessonNumber: 6,
  slug: "statistical-visualization-and-interpretation-lab",
  title: "Statistical Visualization and Interpretation Lab",
  shortTitle: "Statistical Visualization Lab",
  subtitle:
    "Turn distributions, comparisons, relationships, and uncertainty into honest visual evidence that supports a clear decision.",
  status: "available",
  duration: "130–150 minutes",
  level: "Beginner to Professional",

  essentialQuestion:
    "How can we choose, construct, and interpret a statistical graphic so that it reveals the important pattern without exaggerating what the data can prove?",
  bigIdea:
    "A statistical visualization is an argument built from marks, encodings, scales, grouping choices, and uncertainty. The best figure matches the analytical question, preserves the data-generating context, makes comparisons easy, and states both the visible evidence and its limits.",

  whyThisLessonExists: {
    title: "A Chart Can Clarify Evidence—or Quietly Distort It",
    introduction:
      "Data and AI teams rely on charts to identify failures, compare interventions, evaluate models, and explain uncertainty. A well-designed figure can reveal structure that a table hides, while a poor scale, misleading aggregation, or inappropriate chart can create a conclusion that the data do not support.",
    centralProblem:
      "Teams often choose charts by habit, decorate before analyzing, truncate axes to magnify small changes, hide subgroup variation inside averages, connect unrelated observations, ignore sample size, or present model outputs without uncertainty and decision thresholds.",
    purpose:
      "This lab develops a repeatable visualization workflow: define the question and unit, inspect data quality, select an honest visual form, map variables to accurate encodings, reveal distributions and subgroups, show uncertainty and reference values, test alternative views, and write a decision-ready interpretation.",
  },

  problemFirst: {
    title: "Opening Investigation: Which Plant Needs Intervention?",
    scenario:
      "A dashboard shows that Plant A averages 15.1 minutes of downtime and Plant B averages 9.4 minutes. Management plans to retrain Plant A immediately. The underlying data reveal that most Plant A incidents are similar to Plant B, but one 58-minute shutdown raises the mean. Plant A also has fewer observations and a different robot mix.",
    questions: [
      "What decision is the chart expected to support?",
      "What is the observational unit, and what time period does each row represent?",
      "Does a bar chart of means reveal the shape and sample size of each plant's data?",
      "Which visual would expose the 58-minute incident without automatically deleting it?",
      "Should the comparison show the mean, median, individual observations, or all three?",
      "How could robot type, shift, workload, or plant size explain the apparent difference?",
      "What uncertainty should accompany the group estimates?",
      "What conclusion is justified before investigating the unusual shutdown?",
    ],
    expectedInsight:
      "The average alone hides skew, sample size, and the influential shutdown. A jittered dot plot or box plot with individual observations, group summaries, and uncertainty is more informative. The figure supports investigation of Plant A and the extreme incident, but it does not by itself prove that plant practices caused the difference.",
  },

  learningObjectives: [
    "Match distribution, comparison, relationship, composition, time, and uncertainty questions to appropriate statistical graphics.",
    "Explain how position, length, angle, area, color, shape, and size differ in perceptual accuracy.",
    "Construct and interpret histograms, box plots, ECDFs, dot plots, scatterplots, line charts, and confidence-interval plots.",
    "Choose scales, baselines, bins, ordering, grouping, and reference values that preserve an honest comparison.",
    "Detect skew, multimodality, outliers, overplotting, aggregation bias, and subgroup patterns.",
    "Add uncertainty, sample size, denominators, and decision thresholds to statistical figures.",
    "Distinguish what a visualization shows from causal, predictive, or population claims it cannot establish.",
    "Create an accessible, reproducible visualization brief with a headline, evidence statement, limitation, and recommended next action.",
  ],

  prerequisiteKnowledge: [
    "Module 2 Lesson 1: center, spread, shape, and unusual observations",
    "Module 2 Lesson 2: probability and conditional reasoning",
    "Module 2 Lesson 3: sampling, bias, and representative evidence",
    "Module 2 Lesson 4: correlation, confounding, and causal caution",
    "Module 2 Lesson 5: confidence intervals, hypothesis tests, and effect size",
    "Basic Python, pandas, NumPy, and Matplotlib syntax is helpful but not required for the conceptual work",
  ],

  visualModels: [
    {
      id: "question-to-chart-workflow",
      type: "lifecycle",
      title: "The Question-to-Chart Evidence Workflow",
      description:
        "Build the figure from the decision and data structure, then stress-test the interpretation before communicating it.",
      stages: [
        { label: "1. Define", detail: "State the decision, audience, population, unit, variables, time window, and comparison that the figure must support." },
        { label: "2. Diagnose", detail: "Check missingness, duplicates, sample size, denominators, measurement quality, skew, unusual observations, and subgroup composition." },
        { label: "3. Encode", detail: "Choose a chart and map the most important comparison to accurate encodings such as common-position or aligned length." },
        { label: "4. Test", detail: "Try alternative scales, bins, orderings, facets, robust summaries, uncertainty displays, and annotations; look for conclusions that change." },
        { label: "5. Explain", detail: "Write what is visible, how large it is, how uncertain it is, what may explain it, what the chart cannot prove, and the next action." },
      ],
      feedback:
        "New observations, corrected labels, subgroup analysis, domain review, and deployment outcomes should revise both the graphic and its interpretation.",
      interpretation:
        "The chart is the middle of the reasoning process—not the beginning or the end. A professional figure is traceable to the decision and accompanied by a bounded claim.",
    },
  ],

  vocabulary: [
    { term: "Statistical visualization", definition: "A graphic designed to reveal and communicate patterns, variation, uncertainty, and comparisons in data." },
    { term: "Mark", definition: "A visible geometric object such as a point, line, bar, or area used to represent data." },
    { term: "Visual encoding", definition: "A mapping from a data value to a visual property such as position, length, color, shape, or size." },
    { term: "Scale", definition: "The rule that converts data values into visual positions, lengths, colors, or other displayed properties." },
    { term: "Baseline", definition: "A reference value from which a visual magnitude is judged; bar lengths normally require a zero baseline." },
    { term: "Aspect ratio", definition: "The relationship between a plot's width and height, which can make slopes and separation appear steeper or flatter." },
    { term: "Distribution", definition: "The pattern of values described by center, spread, shape, gaps, clusters, and unusual observations." },
    { term: "Histogram", definition: "A display that groups numerical values into intervals and shows the count, proportion, or density within each bin." },
    { term: "Bin width", definition: "The numerical span of each histogram interval; it controls how much local variation is smoothed or exposed." },
    { term: "Density", definition: "A normalized representation whose total area equals one, allowing distribution-shape comparisons across unequal sample sizes." },
    { term: "Box plot", definition: "A compact display of the median, quartiles, interquartile range, whiskers, and potential unusual observations." },
    { term: "Empirical cumulative distribution function", definition: "The proportion of observed values less than or equal to each value x, abbreviated ECDF." },
    { term: "Dot plot", definition: "A display of individual observations as points, often jittered to reduce overlap and combined with group summaries." },
    { term: "Scatterplot", definition: "A graph using point position to show the joint values of two numerical variables." },
    { term: "Trend line", definition: "A fitted or smoothed line summarizing the average pattern in a relationship; it is not automatically causal." },
    { term: "Residual", definition: "The observed outcome minus the value predicted by a fitted model." },
    { term: "Overplotting", definition: "The hiding of observations because many points are drawn at the same or nearby positions." },
    { term: "Transparency", definition: "A visual setting that makes marks partly see-through so overlapping observations can reveal density." },
    { term: "Faceting", definition: "Splitting one graphic into aligned small panels using the same structure for meaningful subgroup comparison." },
    { term: "Small multiples", definition: "Repeated charts with consistent encodings and scales that support comparison across categories or time." },
    { term: "Reference line", definition: "A line marking a target, baseline, null value, safety limit, or other decision-relevant threshold." },
    { term: "Uncertainty interval", definition: "A visual range showing sampling, measurement, model, or predictive uncertainty around an estimate." },
    { term: "Annotation", definition: "Text, arrows, labels, or highlights that direct attention to a verified feature without replacing the evidence." },
    { term: "Accessibility", definition: "Design that remains understandable with color-vision differences, assistive technology, small screens, and varied levels of statistical expertise." },
  ],

  formulas: [
    {
      id: "z-score",
      name: "Standardized value",
      formula: "zᵢ = (xᵢ − x̄) / s",
      meaning: "Expresses an observation's distance from the sample mean in sample-standard-deviation units.",
      requirement: "Interpret cautiously for strongly skewed or multimodal data; a standardized distance does not make an observation an error.",
    },
    {
      id: "interquartile-range",
      name: "Interquartile range",
      formula: "IQR = Q₃ − Q₁",
      meaning: "Measures the spread of the middle 50% of observations and forms the central box in a box plot.",
      requirement: "Report the median and sample size too; equal IQRs do not imply equal distribution shapes.",
    },
    {
      id: "iqr-fences",
      name: "Exploratory box-plot fences",
      formula: "Lower = Q₁ − 1.5(IQR); Upper = Q₃ + 1.5(IQR)",
      meaning: "Flags observations beyond conventional box-plot whisker limits for investigation.",
      requirement: "A flagged value is not automatically wrong and should not be deleted without domain and data-quality evidence.",
    },
    {
      id: "freedman-diaconis",
      name: "Freedman–Diaconis bin width",
      formula: "h = 2(IQR)n⁻¹ᐟ³",
      meaning: "Provides a robust starting bin width for a histogram by balancing detail and sampling noise.",
      requirement: "It is a starting point, not a law; compare nearby widths and retain domain-relevant boundaries when justified.",
    },
    {
      id: "histogram-density",
      name: "Histogram density",
      formula: "Density = bin count / (n × bin width)",
      meaning: "Scales each bar so the total histogram area equals one, supporting shape comparisons across groups.",
      requirement: "Density height is not a probability by itself; probability is represented by area across an interval.",
    },
    {
      id: "ecdf",
      name: "Empirical cumulative distribution function",
      formula: "Fₙ(x) = (1/n)Σ I(xᵢ ≤ x)",
      meaning: "Shows the observed proportion at or below each x without selecting histogram bins.",
      requirement: "Use clear axes and explain that vertical differences compare cumulative proportions, not counts.",
    },
    {
      id: "residual",
      name: "Residual",
      formula: "eᵢ = yᵢ − ŷᵢ",
      meaning: "Measures the vertical difference between an observed outcome and its fitted value.",
      requirement: "Inspect residuals for curvature, changing spread, clusters, and unusual cases before trusting a fitted trend.",
    },
  ],

  workedExamples: [
    {
      id: "example-02-06-01",
      title: "Choose a chart from the question",
      problem: "A reliability engineer asks three questions: What is the downtime distribution? Which plant differs? Does temperature relate to downtime? Choose one primary chart for each.",
      solutionSteps: [
        "Use a histogram or ECDF to examine one numerical distribution.",
        "Use jittered observations with box plots or interval estimates to compare plants.",
        "Use a scatterplot for temperature and downtime, adding a cautious trend and subgroup encoding when justified.",
        "Label units, sample sizes, time window, and relevant thresholds in every figure.",
      ],
      answer: "Distribution: histogram or ECDF; group comparison: points plus box plots or intervals; relationship: scatterplot with diagnostics.",
      interpretation: "Chart choice begins with the analytical task and variable types, not with a preferred software menu.",
    },
    {
      id: "example-02-06-02",
      title: "Explain why the mean-only bar chart misleads",
      problem: "Plant A downtime values are [4, 5, 6, 7, 8, 10, 58] and Plant B values are [5, 6, 7, 8, 9, 10, 11]. Compare the means and medians.",
      solutionSteps: [
        "Plant A mean = 98/7 = 14 minutes; median = 7 minutes.",
        "Plant B mean = 56/7 = 8 minutes; median = 8 minutes.",
        "The 58-minute incident strongly pulls Plant A's mean upward.",
        "Plot all observations and label the unusual event rather than showing only two bars.",
      ],
      answer: "The means suggest Plant A is much worse, while the medians show typical incidents are similar; one unusual event drives the difference.",
      interpretation: "The extreme incident may be operationally critical, but the chart should distinguish routine performance from a rare severe failure.",
    },
    {
      id: "example-02-06-03",
      title: "Calculate and investigate IQR fences",
      problem: "For the sorted values [4, 5, 6, 7, 8, 10, 58], use Q₁ = 5 and Q₃ = 10 to calculate exploratory fences.",
      solutionSteps: [
        "IQR = 10 − 5 = 5.",
        "Lower fence = 5 − 1.5(5) = −2.5.",
        "Upper fence = 10 + 1.5(5) = 17.5.",
        "The value 58 lies beyond the upper fence and should be investigated.",
      ],
      answer: "The fences are −2.5 and 17.5; 58 is flagged.",
      interpretation: "The box plot identifies 58 as unusual relative to the sample. It does not determine whether the event is a valid failure, a measurement problem, or a different operating regime.",
    },
    {
      id: "example-02-06-04",
      title: "Repair a truncated-axis comparison",
      problem: "Two defect rates are 4.8% and 5.1%. A bar chart begins at 4.7%, making one bar appear four times taller. How should it be redesigned?",
      solutionSteps: [
        "For bars, start the magnitude baseline at zero so length represents the full value.",
        "If the small difference is analytically important, use a dot plot or slope chart with explicit values and a clearly labeled narrow scale.",
        "Add the absolute difference of 0.3 percentage points and the denominator for each rate.",
        "Show uncertainty or repeated-period variation before treating the difference as stable.",
      ],
      answer: "Use zero-based bars or a clearly labeled position-based comparison with exact values, denominators, and uncertainty.",
      interpretation: "A narrow axis is not always forbidden, but using bar length with a truncated baseline visually exaggerates the magnitude.",
    },
    {
      id: "example-02-06-05",
      title: "Reveal a subgroup reversal with faceting",
      problem: "An overall scatterplot suggests workload is weakly related to downtime, but older and newer robots follow different patterns. What should be done?",
      solutionSteps: [
        "Encode robot age group with color only if the groups remain legible and accessible.",
        "Create aligned facets for newer and older robots using the same x- and y-scales.",
        "Show group-specific trends and sample sizes.",
        "Describe the overall and within-group patterns separately and investigate age as a confounder or effect modifier.",
      ],
      answer: "Use common-scale facets or small multiples to expose within-group relationships and composition differences.",
      interpretation: "The visualization can reveal Simpson-like aggregation behavior, but causal interpretation still requires the design and assumptions from Lesson 4.",
    },
    {
      id: "example-02-06-06",
      title: "Write a bounded chart interpretation",
      problem: "A 95% interval plot shows the new protocol reduces mean downtime by 3.4 hours, CI [2.0, 4.7], while the minimum worthwhile reduction is 4 hours. Write the conclusion.",
      solutionSteps: [
        "State the direction and point estimate in hours.",
        "Describe the full interval and whether it crosses zero.",
        "Compare the interval with the four-hour operational threshold.",
        "Separate statistical evidence from the practical decision and mention study design limits.",
      ],
      answer: "The protocol is associated with an estimated 3.4-hour reduction, and the interval excludes no effect; however, plausible effects include values below and above the four-hour target.",
      interpretation: "The figure supports a promising but not decisively worthwhile result; cost, safety, design quality, and more data should guide rollout.",
    },
  ],

  interactiveExploration: {
    title: "Stress-Test One Dataset with Six Visual Views",
    description:
      "Use the same robot-downtime data to learn which features are stable across charts and which depend on a design choice.",
    instructions: [
      "Write the decision question and identify the unit, population, variables, and time window.",
      "Create a raw table profile with counts, missingness, range, median, mean, and IQR.",
      "Draw histograms using three reasonable bin widths.",
      "Create an ECDF and compare its message with the histograms.",
      "Compare plants using jittered observations plus box plots and sample-size labels.",
      "Create a scatterplot of temperature versus downtime using transparency.",
      "Facet the scatterplot by robot age group or shift using common scales.",
      "Add a confidence-interval plot for plant means and a reference line for the operational target.",
      "Write one conclusion that remains true across the views and one conclusion that changes.",
      "Select the smallest set of figures needed for the final decision brief.",
    ],
    questions: [
      "Which pattern was stable across every reasonable bin width?",
      "Which observation influenced the mean most strongly?",
      "Did the ECDF make any comparison clearer than the histogram?",
      "What did faceting reveal that color alone did not?",
      "Which uncertainty display best matched the decision?",
      "What claim would be tempting but unsupported?",
    ],
    expectedDiscovery:
      "No single chart answers every question. Robust conclusions persist across reasonable design choices, while fragile conclusions depend on a bin, scale, aggregation, excluded case, or subgroup definition.",
  },

  realWorldApplications: [
    { field: "Manufacturing and Robotics", application: "Monitor downtime, sensor distributions, fault severity, cycle time, defects, and maintenance effects without hiding rare but costly failures." },
    { field: "Education", application: "Compare score distributions, growth, participation, and subgroup uncertainty instead of ranking classrooms by a single average." },
    { field: "Healthcare", application: "Show absolute risk, treatment effects, uncertainty, missing outcomes, and clinically meaningful thresholds with careful privacy and denominator controls." },
    { field: "Business and Marketing", application: "Visualize funnels, cohort retention, A/B test lift, seasonality, and segment differences using consistent definitions and honest baselines." },
    { field: "Public Policy", application: "Map rates with appropriate denominators, display geographic uncertainty, and separate population composition from program effects." },
    { field: "Machine Learning and AI", application: "Compare model errors, calibration, thresholds, residuals, subgroup metrics, drift, and uncertainty using the correct unit of analysis." },
  ],

  aiConnection: {
    title: "Visual Diagnostics Reveal How an AI System Fails",
    explanation:
      "A single accuracy score can hide class imbalance, threshold tradeoffs, subgroup failure, poor calibration, temporal drift, and a few highly influential cases. Diagnostic figures connect model behavior to the people, machines, and decisions affected by its errors.",
    example:
      "A predictive-maintenance classifier has 92% accuracy. A precision-recall curve, calibration plot, threshold-cost chart, and error-rate small multiples reveal that the model misses rare critical failures on older robots and produces too many alerts during one shift.",
    uses: ["Error analysis", "Model comparison", "Calibration", "Threshold selection", "Fairness review", "Drift monitoring", "Human-in-the-loop design"],
    caution:
      "Do not plot thousands of correlated sensor windows as if they were independent machines. Use the deployment unit, show denominators, protect sensitive groups, document filtering, and avoid turning exploratory patterns into confirmed claims.",
    reflectionQuestion:
      "Which figure would most quickly reveal whether your model's apparent improvement matters for the real decision and remains reliable across important groups?",
  },

  pythonLab: {
    title: "Build a Decision-Ready Robot Reliability Visual Brief",
    objective:
      "Create a reproducible set of distribution, comparison, relationship, and uncertainty figures; diagnose an influential shutdown; and write a bounded operational conclusion.",
    code: `import numpy as np
import pandas as pd
import matplotlib.pyplot as plt

rng = np.random.default_rng(42)
n = 240

robots = pd.DataFrame({
    "plant": rng.choice(["A", "B", "C"], size=n, p=[0.34, 0.33, 0.33]),
    "robot_age_years": rng.uniform(1, 12, size=n),
    "temperature_c": rng.normal(68, 7, size=n),
    "high_load": rng.binomial(1, 0.42, size=n),
})

plant_effect = robots["plant"].map({"A": 1.8, "B": 0.0, "C": -0.8})
robots["downtime_min"] = (
    3.5
    + 0.65 * robots["robot_age_years"]
    + 0.16 * (robots["temperature_c"] - 68)
    + 3.2 * robots["high_load"]
    + plant_effect
    + rng.gamma(shape=1.8, scale=1.6, size=n)
).clip(lower=0)

# Preserve a valid severe event for investigation.
severe_index = robots.index[robots["plant"] == "A"][0]
robots.loc[severe_index, "downtime_min"] = 58.0

summary = robots.groupby("plant")["downtime_min"].agg(
    count="count",
    mean="mean",
    median="median",
    std="std",
    minimum="min",
    maximum="max",
)
summary["se"] = summary["std"] / np.sqrt(summary["count"])
summary["ci_low"] = summary["mean"] - 1.96 * summary["se"]
summary["ci_high"] = summary["mean"] + 1.96 * summary["se"]

q1 = robots["downtime_min"].quantile(0.25)
q3 = robots["downtime_min"].quantile(0.75)
iqr = q3 - q1
upper_fence = q3 + 1.5 * iqr
robots["iqr_flag"] = robots["downtime_min"] > upper_fence

fig, axes = plt.subplots(2, 2, figsize=(13, 9))

# 1. Distribution: histogram with a shared, transparent plant overlay.
for plant, group in robots.groupby("plant"):
    axes[0, 0].hist(
        group["downtime_min"],
        bins=np.arange(0, 62, 3),
        alpha=0.45,
        label=f"Plant {plant}",
    )
axes[0, 0].set(
    title="Downtime distribution by plant",
    xlabel="Downtime per incident (minutes)",
    ylabel="Incident count",
)
axes[0, 0].legend()

# 2. Comparison: jittered observations plus medians.
plant_order = ["A", "B", "C"]
colors = {"A": "#0f766e", "B": "#2563eb", "C": "#d97706"}
for position, plant in enumerate(plant_order):
    values = robots.loc[robots["plant"] == plant, "downtime_min"]
    jitter = rng.normal(0, 0.055, size=len(values))
    axes[0, 1].scatter(
        np.full(len(values), position) + jitter,
        values,
        alpha=0.55,
        s=25,
        color=colors[plant],
    )
    axes[0, 1].scatter(
        position,
        values.median(),
        marker="D",
        s=90,
        edgecolor="black",
        color="white",
        zorder=5,
    )
axes[0, 1].set(
    title="Every incident; white diamond = median",
    xlabel="Plant",
    ylabel="Downtime per incident (minutes)",
    xticks=range(3),
    xticklabels=plant_order,
)

# 3. Relationship: transparency exposes point density.
scatter = axes[1, 0].scatter(
    robots["temperature_c"],
    robots["downtime_min"],
    c=robots["robot_age_years"],
    cmap="viridis",
    alpha=0.65,
    s=32,
)
axes[1, 0].set(
    title="Temperature, age, and downtime",
    xlabel="Temperature (°C)",
    ylabel="Downtime per incident (minutes)",
)
fig.colorbar(scatter, ax=axes[1, 0], label="Robot age (years)")

# 4. Uncertainty: plant means and approximate 95% intervals.
y_positions = np.arange(len(summary))
xerr = np.vstack([
    summary["mean"] - summary["ci_low"],
    summary["ci_high"] - summary["mean"],
])
axes[1, 1].errorbar(
    summary["mean"],
    y_positions,
    xerr=xerr,
    fmt="o",
    capsize=5,
    color="#1d4ed8",
)
axes[1, 1].axvline(10, color="#b45309", linestyle="--", label="10-minute target")
axes[1, 1].set(
    title="Mean downtime with approximate 95% intervals",
    xlabel="Mean downtime per incident (minutes)",
    ylabel="Plant",
    yticks=y_positions,
    yticklabels=summary.index,
)
axes[1, 1].legend()

fig.suptitle("Robot Reliability: Distribution, Comparison, Relationship, and Uncertainty")
fig.tight_layout()
plt.savefig("statistical_visualization_lab.png", dpi=160, bbox_inches="tight")

print("Plant summary:\\n", summary.round(2))
print("\\nUpper IQR fence:", round(upper_fence, 2))
print("Flagged observations:\\n", robots.loc[robots["iqr_flag"]])

assert len(robots) == n
assert robots[["plant", "downtime_min"]].notna().all().all()
assert (robots["downtime_min"] >= 0).all()
assert robots["iqr_flag"].any()`,
    questions: [
      "Which plant has the highest mean and which has the highest median?",
      "How does the severe Plant A incident affect the mean, interval, and histogram?",
      "What feature is easier to see in the jittered plot than in the histogram?",
      "Does temperature have a clear relationship with downtime after considering robot age?",
      "Which plants appear to meet the ten-minute target, and how uncertain is that judgment?",
      "What additional grouping variable would you facet before recommending intervention?",
    ],
    reflectionQuestions: [
      "Which of the four panels is most useful to an operations manager, and which is most useful to an analyst?",
      "Would removing the severe event improve or damage the analysis? What evidence is required?",
      "How would robot-level repeated incidents or unequal monitoring change the intervals?",
    ],
    extension:
      "Add shift and robot model, create common-scale facets, calculate bootstrap intervals for medians, annotate the severe event with its maintenance record, and produce a one-page figure with an executive headline and a technical caption.",
  },

  guidedPractice: [
    { id: "gp-02-06-01", question: "Which chart best reveals the shape of one numerical variable?", answer: "A histogram, density plot, dot plot, or ECDF; choose based on sample size and whether bin-free cumulative comparison is useful." },
    { id: "gp-02-06-02", question: "Why should ordinary bar charts usually start at zero?", answer: "Because bar length encodes magnitude from the baseline; truncation makes proportional differences appear larger than they are." },
    { id: "gp-02-06-03", question: "What does a point beyond a box-plot whisker mean?", answer: "It is unusual under the chosen rule and merits investigation; it is not automatically an error or deletion candidate." },
    { id: "gp-02-06-04", question: "How can overplotting be reduced?", answer: "Use transparency, jitter, smaller marks, aggregation, hexagonal bins, density contours, or meaningful facets." },
    { id: "gp-02-06-05", question: "What must accompany a rate?", answer: "Its denominator, population, time window, and preferably uncertainty or repeated-period context." },
    { id: "gp-02-06-06", question: "What is the final sentence of a professional chart interpretation?", answer: "A bounded decision or next step that states what the evidence supports and what remains uncertain." },
  ],

  independentPractice: [
    { id: "ip-02-06-01", difficulty: "Foundational", question: "Match one chart to each task: distribution, group comparison, relationship, and change over time.", sampleAnswer: "Histogram or ECDF; dot/box/interval plot; scatterplot; line chart with an honest time axis." },
    { id: "ip-02-06-02", difficulty: "Foundational", question: "Explain how changing histogram bin width can change the visible story.", sampleAnswer: "Very wide bins hide clusters and gaps, while very narrow bins amplify sampling noise; robust conclusions should survive several reasonable widths." },
    { id: "ip-02-06-03", difficulty: "Applied", question: "Redesign a pie chart with 14 categories.", sampleAnswer: "Use an ordered horizontal bar or dot plot, group genuinely minor categories only when justified, label values directly, and preserve the denominator." },
    { id: "ip-02-06-04", difficulty: "Applied", question: "Create a caption for a plant interval plot.", sampleAnswer: "State the outcome, unit, groups, time window, point estimate, interval method, sample sizes, reference line, and principal limitation." },
    { id: "ip-02-06-05", difficulty: "Analytical", question: "A trend disappears after faceting by robot age. What should be reported?", sampleAnswer: "Report the aggregate and within-age patterns, composition differences, plausible confounding, and the need for design-based causal analysis." },
    { id: "ip-02-06-06", difficulty: "Advanced", question: "Design a visualization set for a model-threshold decision.", sampleAnswer: "Use score distributions by class, precision-recall or ROC curves, calibration, threshold-cost or capacity curves, confusion matrices, and subgroup intervals at the proposed threshold." },
    { id: "ip-02-06-07", difficulty: "Professional", question: "Audit an executive dashboard for misleading visual claims.", sampleAnswer: "Check definitions, grain, filters, denominators, missingness, baselines, scales, sorting, color, aggregation, uncertainty, accessibility, causal language, and decision relevance." },
  ],

  commonMistakes: [
    { mistake: "Choosing a chart before defining the question.", correction: "Start with the decision, comparison, variables, unit, population, and time window." },
    { mistake: "Showing only means for skewed data.", correction: "Display distributions or individual observations and include robust summaries such as medians and IQRs." },
    { mistake: "Deleting every visual outlier.", correction: "Investigate provenance and domain meaning; compare results with and without a value only as a documented sensitivity analysis." },
    { mistake: "Using truncated bar axes to dramatize change.", correction: "Use zero-based magnitude bars or position-based dot plots with explicit values when small differences matter." },
    { mistake: "Using color alone to carry essential meaning.", correction: "Combine accessible color with labels, position, shape, line style, or faceting and test contrast." },
    { mistake: "Drawing a trend line and calling it causal.", correction: "Describe association, inspect residuals and subgroups, and reserve causal claims for defensible designs." },
    { mistake: "Adding every possible chart to a dashboard.", correction: "Keep the smallest evidence set that answers the decision, with details available through drill-down or an appendix." },
  ],

  discussionQuestions: [
    "When is a visually dramatic difference too small to matter operationally?",
    "Should a severe but rare event dominate a reliability dashboard?",
    "How should uncertainty be shown to an audience unfamiliar with confidence intervals?",
    "When does simplifying a chart become misleading omission?",
    "Who is responsible when a technically correct chart leads users toward the wrong decision?",
  ],

  formativeAssessment: {
    totalPoints: 30,
    passingScore: 24,
    questions: [
      { id: "check-02-06-01", type: "selection", points: 5, prompt: "Choose and justify one chart for comparing complete downtime distributions across three plants.", sampleAnswer: "Use common-scale ECDFs or faceted histograms; both show shape and distribution differences, while the ECDF avoids bin selection." },
      { id: "check-02-06-02", type: "calculation", points: 5, prompt: "Given Q₁ = 6 and Q₃ = 14, calculate the IQR and exploratory fences.", sampleAnswer: "IQR = 8; lower fence = −6 and upper fence = 26." },
      { id: "check-02-06-03", type: "critique", points: 5, prompt: "Identify two problems with a bar chart of rates that starts at 48% and omits denominators.", sampleAnswer: "The truncated baseline exaggerates bar-length differences, and missing denominators hide sample size, precision, and comparability." },
      { id: "check-02-06-04", type: "interpretation", points: 5, prompt: "A scatterplot shows a positive trend. Write what it does and does not establish.", sampleAnswer: "It shows a positive observed association in the displayed data; it does not establish causation, rule out confounding, or guarantee the pattern outside the sampled range." },
      { id: "check-02-06-05", type: "design", points: 5, prompt: "Name four elements required in a decision-ready uncertainty figure.", sampleAnswer: "Point estimates, clearly defined intervals, sample sizes or denominators, and a labeled null or meaningful decision threshold; also include units and method." },
      { id: "check-02-06-06", type: "communication", points: 5, prompt: "Write the four parts of a bounded chart conclusion.", sampleAnswer: "Visible pattern, magnitude and uncertainty, important limitation or alternative explanation, and proportionate decision or next evidence step." },
    ],
  },

  researchExtension: {
    title: "Reconstruct and Improve a Published Statistical Graphic",
    researchQuestion:
      "Does a public chart faithfully represent its source data, uncertainty, denominators, and decision context?",
    applicationOptions: ["Manufacturing dashboard", "Education report", "Healthcare comparison", "Business KPI", "Public-policy graphic", "AI benchmark"],
    task:
      "Choose one published statistical graphic. Locate or reconstruct its data, document the analytical question and design choices, reproduce the original as closely as possible, create an improved alternative, and compare the conclusions a reader may draw.",
    requiredEvidence: [
      "Original figure, source, audience, and decision context",
      "Data definitions, unit, population, time window, filters, and denominators",
      "Audit of chart type, encodings, scales, baselines, order, color, annotations, and accessibility",
      "Assessment of distributions, subgroups, missingness, uncertainty, and causal language",
      "Reproducible reconstruction",
      "Redesigned figure with a technical caption",
      "Before-and-after interpretation and recommended publication standard",
    ],
  },

  portfolioArtifact: {
    title: "Statistical Investigation, Part 6: Visualization and Interpretation Brief",
    description:
      "Complete the analytical communication stage of your Module 2 investigation with a reproducible figure set and a decision-ready narrative.",
    requiredSections: [
      "Decision, audience, population, unit, variables, comparison, and time window",
      "Data-quality and representativeness note",
      "Chart-selection rationale tied to each analytical question",
      "Distribution figure with center, spread, shape, and unusual observations",
      "Group-comparison figure with sample size and uncertainty",
      "Relationship or time figure with subgroup and residual checks",
      "Decision threshold or reference value",
      "Alternative visualization used as a robustness check",
      "Statistical interpretation separated from causal or predictive claims",
      "Executive headline, limitation, recommendation, and next evidence step",
    ],
    requiredEvidence: [
      "One reproducible multi-panel statistical figure",
      "One accessible color and labeling review",
      "One chart-design sensitivity comparison",
      "One unusual-observation investigation",
      "One uncertainty or effect-size display",
      "Complete Python, SQL, spreadsheet, or BI transformation trail",
      "One technical caption and one executive interpretation",
    ],
  },

  growthIndicators: [
    { title: "Visual Analyst", description: "You select graphics from the question, variable types, data structure, and decision." },
    { title: "Pattern Diagnostician", description: "You detect distribution shape, subgroup structure, overplotting, unusual observations, and unstable conclusions." },
    { title: "Evidence Designer", description: "You use accurate encodings, honest scales, uncertainty, thresholds, and accessible annotations." },
    { title: "Interpretation Steward", description: "You communicate visible evidence, limitations, alternative explanations, and proportionate next actions." },
  ],

  reflection: [
    "Which chart in your current project is present because of habit rather than an analytical need?",
    "What important distribution or subgroup is hidden behind an average?",
    "Which scale, bin, filter, or ordering choice most changes your conclusion?",
    "Where should uncertainty or a decision threshold be added?",
    "Could a reader incorrectly infer causation from any of your figures?",
    "What is the smallest figure set that fully supports the decision?",
  ],

  summary: [
    "Statistical visualization begins with the decision, audience, unit, population, variables, and time window.",
    "Position on a common scale is generally easier to compare accurately than angle, area, color intensity, or volume.",
    "Histograms reveal distribution shape but depend on bin choices; ECDFs provide a complementary bin-free cumulative view.",
    "Box plots summarize quartiles efficiently but should be paired with observations or distribution views when sample size permits.",
    "Scatterplots require checks for overplotting, nonlinearity, subgroup structure, restricted range, and influential cases.",
    "Faceting and small multiples can reveal patterns that aggregate charts or color encodings hide.",
    "Bar lengths normally require a zero baseline; narrow position scales must be clearly labeled and justified.",
    "Uncertainty, sample sizes, denominators, and decision thresholds convert descriptive figures into more responsible evidence.",
    "Unusual observations should be investigated, not automatically removed.",
    "A trend line summarizes an observed pattern and does not establish causation.",
    "Professional interpretation states the pattern, magnitude, uncertainty, limitation, and proportionate next action.",
  ],

  previousLesson: {
    id: "data-ai-m02-l05",
    moduleNumber: 2,
    slug: "confidence-intervals-hypothesis-tests-and-effect-size",
    title: "Confidence Intervals, Hypothesis Tests, and Effect Size",
  },
  nextLesson: {
    id: "data-ai-m02-l07",
    moduleNumber: 2,
    slug: "portfolio-project-reproducible-statistical-investigation",
    title: "Portfolio Project: Reproducible Statistical Investigation",
  },

  lumineryGuidance: {
    message:
      "Choose the chart from the decision, then test whether the conclusion survives honest scales, subgroups, uncertainty, and alternative views.",
    prompt:
      "Help me design and interpret a statistical visualization. First define the decision, audience, population, observational unit, variables, time window, comparison, and meaningful threshold. Audit data quality and representativeness. Recommend the most accurate chart and an alternative view, specify scales, encodings, facets, uncertainty, sample-size labels, annotations, and accessibility. Then write a bounded interpretation with the visible pattern, effect magnitude, uncertainty, limitations, unsupported claims, and next action.",
    coachingQuestions: [
      "What exact comparison must the viewer make?",
      "Which visual encoding makes that comparison most accurate?",
      "What distribution, denominator, or subgroup is hidden by the summary?",
      "How do scale, bins, filters, and order change the apparent result?",
      "Where should uncertainty and a meaningful threshold appear?",
      "What claim is visible, and what causal or population claim remains unsupported?",
      "What is the smallest evidence set that supports the decision?",
    ],
  },
};

export default lesson06;
