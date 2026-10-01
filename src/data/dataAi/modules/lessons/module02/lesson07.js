const lesson07 = {
  id: "data-ai-m02-l07",
  courseId: "data-ai-foundations",
  moduleId: "data-ai-foundations-module-02",
  moduleNumber: 2,
  lessonNumber: 7,
  slug: "portfolio-project-reproducible-statistical-investigation",
  title: "Portfolio Project: Reproducible Statistical Investigation",
  shortTitle: "Reproducible Statistical Investigation",
  subtitle:
    "Combine descriptive statistics, probability, sampling, causal caution, inference, and visualization into one auditable decision brief.",
  status: "available",
  duration: "4–6 hours",
  level: "Beginner to Professional",

  essentialQuestion:
    "Can another analyst reproduce the investigation, verify every decision, and reach a proportionate conclusion from the same evidence?",
  bigIdea:
    "A professional statistical investigation is not a collection of calculations. It is a traceable chain from a decision and target population to validated data, appropriate methods, uncertainty, visual evidence, limitations, and a recommendation that does not exceed what the design can support.",

  whyThisLessonExists: {
    title: "A Result Is Valuable Only When It Can Be Trusted and Reused",
    introduction:
      "Organizations need analyses that survive review, staff turnover, new data, and changing decisions. A notebook that runs once is not enough. The question, data definitions, exclusions, assumptions, code, outputs, and conclusion must remain connected so the work can be reproduced and responsibly updated.",
    centralProblem:
      "Analysts often begin with available columns instead of a decision, silently repair data, mix exploratory and confirmatory work, report only favorable findings, ignore missingness and dependence, overstate causality, or deliver figures without the code and definitions required to recreate them.",
    purpose:
      "This capstone lesson integrates the entire module into a portfolio-quality investigation. Learners will frame the decision, create an analysis plan, validate data, profile distributions, calculate conditional risks and relationships, evaluate bias and confounding, estimate effects with uncertainty, stress-test the conclusion, and package reproducible evidence for technical and executive audiences.",
  },

  problemFirst: {
    title: "Project Brief: Should the Factory Adopt a New Maintenance Protocol?",
    scenario:
      "A manufacturer completed a 90-day pilot of a new robot-maintenance protocol across three plants. Leadership wants to know whether the protocol reduces downtime and fault risk enough to justify a staged rollout. The dataset contains plant, robot age, workload, temperature, assigned protocol, downtime, fault status, and maintenance notes. Some temperature values are missing, incidents repeat within operational groups, and Plant A contains a severe shutdown.",
    questions: [
      "What exact decision will the investigation support?",
      "What are the target population, unit of analysis, treatment, outcomes, follow-up period, and minimum worthwhile effect?",
      "Was the protocol assigned randomly, and was assignment preserved during analysis?",
      "Which quality checks must pass before calculating results?",
      "How should missing temperature values and the severe shutdown be handled and documented?",
      "Which descriptive, probability, relationship, and inference questions are primary?",
      "What chart set gives leaders the smallest complete body of evidence?",
      "What conclusion is justified if the result is statistically detectable but smaller than the operational target?",
    ],
    expectedInsight:
      "The project must separate the prespecified protocol effect from exploratory plant, workload, temperature, and subgroup patterns. Valid severe events belong in the main analysis, missingness needs a documented assessment, and the final recommendation must integrate effect magnitude, uncertainty, safety, cost, implementation, and design limitations.",
  },

  learningObjectives: [
    "Translate an organizational decision into a statistical question, estimand, analysis plan, and minimum worthwhile effect.",
    "Create a data dictionary and validate row grain, keys, types, ranges, missingness, duplicates, and category definitions.",
    "Profile center, spread, shape, conditional probability, relationships, subgroups, and unusual observations.",
    "Evaluate sampling, assignment, selection, measurement, dependence, confounding, and generalizability.",
    "Estimate a difference with a confidence interval, hypothesis test, raw effect, relative effect, and standardized effect when appropriate.",
    "Create accessible distribution, comparison, relationship, and uncertainty figures with honest scales and decision thresholds.",
    "Perform sensitivity and robustness analyses without hiding valid inconvenient observations.",
    "Package code, data instructions, outputs, limitations, and conclusions so another analyst can reproduce the work.",
    "Present separate technical and executive conclusions with a proportionate next action.",
  ],

  prerequisiteKnowledge: [
    "Lesson 1: distributions, center, spread, and unusual observations",
    "Lesson 2: probability, conditional probability, and Bayes reasoning",
    "Lesson 3: sampling, bias, and representative evidence",
    "Lesson 4: correlation, confounding, and causal claims",
    "Lesson 5: confidence intervals, hypothesis tests, and effect size",
    "Lesson 6: statistical visualization and bounded interpretation",
    "Basic Python, pandas, NumPy, SciPy, and Matplotlib or equivalent spreadsheet and BI skills",
  ],

  visualModels: [
    {
      id: "reproducible-investigation-cycle",
      type: "lifecycle",
      title: "The Reproducible Statistical Investigation Cycle",
      description:
        "Every published claim should trace backward to a decision, a defined population, validated data, and a reproducible method.",
      stages: [
        { label: "1. Frame", detail: "Define the decision, audience, target population, unit, treatment or exposure, outcomes, estimand, timing, and meaningful threshold." },
        { label: "2. Plan", detail: "Prespecify primary questions, hypotheses, metrics, exclusions, missing-data rules, subgroup analyses, methods, and success criteria." },
        { label: "3. Validate", detail: "Audit provenance, grain, keys, types, ranges, categories, missingness, duplicates, dependence, and representativeness." },
        { label: "4. Analyze", detail: "Describe distributions, calculate conditional risks and relationships, estimate effects and uncertainty, visualize evidence, and test assumptions." },
        { label: "5. Stress-Test and Communicate", detail: "Run robustness checks, document limitations, package reproducible files, and deliver technical and executive conclusions." },
      ],
      feedback:
        "Reviewer questions, corrected data, new samples, implementation outcomes, and monitoring results should update the plan, code, evidence, and decision.",
      interpretation:
        "Reproducibility is continuous. A result is stronger when each transformation and judgment is visible, testable, and connected to the final claim.",
    },
  ],

  vocabulary: [
    { term: "Reproducibility", definition: "The ability to obtain the same results using the same data, code, methods, and computational conditions." },
    { term: "Replicability", definition: "The ability to obtain a consistent conclusion in new data, populations, settings, or independent implementations." },
    { term: "Data provenance", definition: "Documented information about where data came from, how they were collected, and how they changed." },
    { term: "Data dictionary", definition: "A table defining each variable's meaning, type, unit, allowed values, source, and missing-value rules." },
    { term: "Analysis plan", definition: "A prespecified document connecting questions, outcomes, methods, exclusions, thresholds, and reporting rules." },
    { term: "Estimand", definition: "The precise population quantity or effect the investigation aims to estimate." },
    { term: "Row grain", definition: "The real-world entity or event represented by one row of a dataset." },
    { term: "Audit trail", definition: "A traceable record of data versions, transformations, decisions, code, outputs, and reviewer changes." },
    { term: "Validation check", definition: "An automated or documented test that verifies an expected property of the data or analysis." },
    { term: "Exploratory analysis", definition: "Investigation used to discover patterns and generate hypotheses, clearly separated from confirmatory claims." },
    { term: "Confirmatory analysis", definition: "A prespecified analysis used to evaluate a defined primary hypothesis or estimand." },
    { term: "Missingness", definition: "The pattern and mechanism through which expected values are absent from the dataset." },
    { term: "Complete-case analysis", definition: "Analysis restricted to rows with observed values for all required variables, valid only under defensible missingness assumptions." },
    { term: "Sensitivity analysis", definition: "An analysis that changes a consequential assumption or data-handling choice to test how the conclusion responds." },
    { term: "Robustness check", definition: "An alternative reasonable specification, subset, measure, or method used to determine whether a conclusion is stable." },
    { term: "Assumption", definition: "A condition connecting the observed data and method to the intended interpretation." },
    { term: "Benchmark", definition: "A simple comparison, baseline, target, or existing process used to judge whether a result adds value." },
    { term: "Random seed", definition: "A fixed starting value that makes pseudorandom simulation, splitting, or resampling repeatable." },
    { term: "Computational environment", definition: "The software, package versions, operating conditions, and settings needed to run an analysis." },
    { term: "Version control", definition: "A system that records file changes and supports review, comparison, collaboration, and restoration." },
    { term: "README", definition: "A starting document explaining the project purpose, files, setup, execution steps, outputs, and limitations." },
    { term: "Technical appendix", definition: "Detailed methods, diagnostics, formulas, checks, and supplemental results supporting the main brief." },
    { term: "Executive summary", definition: "A concise decision-centered explanation of the finding, magnitude, uncertainty, limitation, and recommended action." },
    { term: "Reproducibility package", definition: "The organized collection of code, data instructions, environment information, outputs, documentation, and license or access notes." },
  ],

  formulas: [
    {
      id: "completeness-rate",
      name: "Data completeness rate",
      formula: "Completeness = observed required values / expected required values",
      meaning: "Summarizes how much required information is present for a variable, group, or analysis set.",
      requirement: "Inspect missingness by outcome, treatment, plant, time, and subgroup; a high overall rate can hide concentrated gaps.",
    },
    {
      id: "conditional-risk",
      name: "Conditional probability or risk",
      formula: "P(Fault | Group) = faults in group / observed units in group",
      meaning: "Calculates the outcome proportion within a clearly defined condition or comparison group.",
      requirement: "Report the numerator, denominator, follow-up window, repeated-unit structure, and missing outcome handling.",
    },
    {
      id: "interquartile-range",
      name: "Interquartile range",
      formula: "IQR = Q₃ − Q₁",
      meaning: "Measures the spread of the middle half of a distribution and supports robust unusual-observation checks.",
      requirement: "Do not delete values solely because they fall outside a conventional fence; investigate their validity and influence.",
    },
    {
      id: "pearson-correlation",
      name: "Pearson correlation",
      formula: "r = sxy / (sₓsᵧ)",
      meaning: "Summarizes the direction and strength of a linear association between two numerical variables.",
      requirement: "Inspect the scatterplot, nonlinearity, outliers, subgroup structure, time order, and confounding before interpretation.",
    },
    {
      id: "welch-interval",
      name: "Welch confidence interval for a mean difference",
      formula: "(x̄₁ − x̄₂) ± t*√(s₁²/n₁ + s₂²/n₂)",
      meaning: "Estimates the difference between two independent group means without requiring equal variances.",
      requirement: "Define subtraction order, experimental unit, independence, assignment or sampling design, degrees of freedom, and missingness.",
    },
    {
      id: "cohen-d",
      name: "Standardized mean difference",
      formula: "d = (x̄₁ − x̄₂) / spooled",
      meaning: "Expresses a mean difference in pooled-standard-deviation units for comparison across scales.",
      requirement: "Also report the effect in natural units and compare it with a prespecified meaningful threshold.",
    },
    {
      id: "risk-comparison",
      name: "Risk difference and relative risk",
      formula: "RD = p₁ − p₀; RR = p₁ / p₀",
      meaning: "RD gives the absolute percentage-point change, while RR gives the multiplicative risk ratio.",
      requirement: "State group order, baseline risk, uncertainty, follow-up, and whether assignment supports a causal interpretation.",
    },
  ],

  workedExamples: [
    {
      id: "example-02-07-01",
      title: "Turn a broad request into a precise estimand",
      problem: "Leadership asks, 'Does the new maintenance plan work?' Rewrite the request as a testable primary question.",
      solutionSteps: [
        "Define eligible production robots across the three pilot plants.",
        "Define treatment as assignment to the new protocol and control as assignment to the existing protocol.",
        "Define the primary outcome as total downtime minutes per robot during 90 days.",
        "Define the estimand as the average treatment-minus-control difference under assignment.",
        "Define a four-hour reduction as the minimum worthwhile effect before analyzing outcomes.",
      ],
      answer: "Among eligible pilot robots, what is the 90-day average effect of assignment to the new protocol versus current protocol on downtime, and is the reduction plausibly at least four hours?",
      interpretation: "The rewritten question fixes the population, intervention, comparison, outcome, time, estimand, and practical threshold.",
    },
    {
      id: "example-02-07-02",
      title: "Validate row grain and duplicate keys",
      problem: "The data dictionary says one row equals one robot, but robot_id R-104 appears three times. What should happen before analysis?",
      solutionSteps: [
        "Confirm whether rows actually represent robots, incidents, visits, or repeated time windows.",
        "Compare timestamps and event identifiers for R-104.",
        "If duplicates are accidental, correct them using source evidence and document the rule.",
        "If rows are repeated observations, revise the grain and use methods that account for dependence.",
      ],
      answer: "Stop the primary analysis until the row grain and key structure are resolved and tested.",
      interpretation: "A technically correct formula applied at the wrong grain produces a confidently wrong result.",
    },
    {
      id: "example-02-07-03",
      title: "Compare typical performance with a severe event",
      problem: "Plant A has mean downtime 13.7 minutes, median 12.9, and a valid 58-minute shutdown. How should it be handled?",
      solutionSteps: [
        "Verify the shutdown against logs and maintenance notes.",
        "Keep it in the main analysis because it is a valid observed outcome.",
        "Report mean, median, spread, and the full distribution.",
        "Run a documented sensitivity analysis without the event to show influence, not to replace the primary result.",
      ],
      answer: "Retain the event, investigate it, visualize it, and report how strongly it influences the conclusion.",
      interpretation: "Rare severe failures may be more decision-relevant than typical performance, so robust summaries and tail-risk evidence should coexist.",
    },
    {
      id: "example-02-07-04",
      title: "Calculate conditional fault risk",
      problem: "The new-protocol group has 12 faults among 120 robots; control has 21 faults among 120. Calculate risk, RD, and RR.",
      solutionSteps: [
        "New-protocol risk = 12/120 = 0.10.",
        "Control risk = 21/120 = 0.175.",
        "RD = 0.10 − 0.175 = −0.075, a 7.5-percentage-point reduction.",
        "RR = 0.10/0.175 ≈ 0.571.",
      ],
      answer: "RD = −7.5 percentage points and RR ≈ 0.57.",
      interpretation: "The observed fault risk is about 43% lower under the new protocol, but uncertainty, adherence, missing outcomes, and assignment integrity must accompany the estimate.",
    },
    {
      id: "example-02-07-05",
      title: "Integrate an interval, p-value, and effect size",
      problem: "The estimated downtime difference is −3.1 hours, 95% CI [−4.8, −1.4], p = 0.001, d = −0.62, and the worthwhile threshold is −4 hours. Interpret the evidence.",
      solutionSteps: [
        "The negative estimate favors the new protocol by 3.1 hours on average.",
        "The interval excludes zero, and the p-value indicates incompatibility with a zero-effect model under the assumptions.",
        "The standardized difference is moderate, but the raw effect is more operationally interpretable.",
        "The interval contains reductions smaller and larger than four hours.",
      ],
      answer: "The protocol likely reduces downtime, but the evidence does not establish that the average reduction reaches the four-hour operational target.",
      interpretation: "A staged rollout or larger confirmatory study may be better than either immediate universal adoption or rejection.",
    },
    {
      id: "example-02-07-06",
      title: "Write separate technical and executive conclusions",
      problem: "Convert the previous result into one technical statement and one executive recommendation.",
      solutionSteps: [
        "Technical: name the design, population, effect order, estimate, interval, p-value, effect size, assumptions, and limitations.",
        "Executive: lead with the decision, magnitude, uncertainty relative to the threshold, risk, and next action.",
        "Avoid claiming that statistical significance alone proves operational value.",
        "Preserve a link from the summary to the full reproducibility package.",
      ],
      answer: "Technical detail supports auditability; the executive statement supports a proportionate decision without hiding uncertainty.",
      interpretation: "Different audiences need different depth, but they must receive the same underlying result and limitations.",
    },
  ],

  interactiveExploration: {
    title: "Project Planning Studio",
    description:
      "Design the investigation before running the final analysis so exploratory choices do not quietly become confirmatory evidence.",
    instructions: [
      "Write the decision, audience, target population, unit, treatment or exposure, primary outcome, time window, estimand, and meaningful threshold.",
      "Create a table connecting each question to variables, method, figure, assumption, and decision use.",
      "Draft a data dictionary for every required field.",
      "List validation checks for keys, types, ranges, missingness, categories, time, and dependence.",
      "Mark analyses as primary, secondary, exploratory, or diagnostic.",
      "Draw a causal diagram for the primary comparison and identify variables that should and should not be adjusted.",
      "Prespecify missing-data handling, unusual-observation investigation, subgroup rules, and multiplicity notes.",
      "Choose the smallest complete figure set: distribution, comparison, relationship, and uncertainty.",
      "Define at least three robustness checks and the conclusions they could change.",
      "Create a project file map and a one-command or one-notebook execution path.",
    ],
    questions: [
      "Which choices must be made before looking at the primary outcome?",
      "Which variables are essential for the decision and which are merely available?",
      "Where could selection, confounding, dependence, or measurement error enter?",
      "What result would change the recommendation?",
      "Which output proves that the analysis is reproducible?",
      "What would an independent reviewer challenge first?",
    ],
    expectedDiscovery:
      "The analysis becomes clearer and shorter when every method and figure has a defined decision purpose. Prespecification does not eliminate exploration; it labels exploration honestly and protects the primary claim.",
  },

  realWorldApplications: [
    { field: "Manufacturing and Robotics", application: "Evaluate maintenance, safety, quality, cycle time, energy, and fault interventions with traceable sensor and operational evidence." },
    { field: "Education", application: "Assess instructional programs with representative samples, outcome definitions, uncertainty, subgroup safeguards, and reproducible reporting." },
    { field: "Healthcare", application: "Package treatment or quality-improvement evidence with protocol definitions, missingness, risk measures, uncertainty, and privacy controls." },
    { field: "Business and Marketing", application: "Create auditable A/B tests, pricing studies, retention analyses, and customer experiments tied to prespecified business thresholds." },
    { field: "Public Policy", application: "Evaluate programs with transparent populations, comparison strategies, equity analysis, assumptions, and reproducible public evidence." },
    { field: "Machine Learning and AI", application: "Build trustworthy benchmark and model-evaluation reports with leakage checks, repeated splits, uncertainty, subgroup metrics, and versioned artifacts." },
  ],

  aiConnection: {
    title: "Reproducible Statistics Is the Foundation of Trustworthy AI",
    explanation:
      "AI systems inherit the definitions, sampling, measurement, comparison, and reporting choices made before training. Reproducible statistical evidence helps teams verify baselines, discover leakage, understand subgroup performance, choose thresholds, and detect whether an apparent model gain survives new samples and deployment conditions.",
    example:
      "A predictive-maintenance model improves average precision by 0.02. A reproducibility package reveals that the gain depends on one random split, repeated sensor windows from the same robots appear in training and test data, and the improvement disappears under robot-level splitting.",
    uses: ["Baseline validation", "Leakage detection", "Model comparison", "Threshold selection", "Fairness review", "Drift monitoring", "Model cards"],
    caution:
      "Reproducible code can reproduce a biased design perfectly. Trust requires both computational reproducibility and valid population, measurement, assignment, causal, privacy, and governance choices.",
    reflectionQuestion:
      "What statistical claim must be independently reproducible before your current AI system should influence a real decision?",
  },

  pythonLab: {
    title: "Complete the Robot-Maintenance Statistical Investigation",
    objective:
      "Generate a documented pilot dataset, validate its structure, analyze protocol effects and fault risk, visualize distributions and uncertainty, run a sensitivity analysis, and export portfolio-ready evidence.",
    code: `import json
import platform
import sys

import matplotlib.pyplot as plt
import numpy as np
import pandas as pd
from scipy import stats

SEED = 42
rng = np.random.default_rng(SEED)
n = 360

robots = pd.DataFrame({
    "robot_id": [f"R-{i:04d}" for i in range(1, n + 1)],
    "plant": rng.choice(["A", "B", "C"], n, p=[0.34, 0.33, 0.33]),
    "robot_age_years": rng.uniform(1, 12, n),
    "high_load": rng.binomial(1, 0.42, n),
    "protocol_new": rng.binomial(1, 0.50, n),
    "temperature_c": rng.normal(68, 7, n),
})

plant_effect = robots["plant"].map({"A": 1.4, "B": 0.0, "C": -0.6})
robots["downtime_hours"] = (
    8.0
    + 0.72 * robots["robot_age_years"]
    + 2.6 * robots["high_load"]
    + 0.10 * (robots["temperature_c"] - 68)
    - 3.0 * robots["protocol_new"]
    + plant_effect
    + rng.normal(0, 3.8, n)
).clip(lower=0)

# Preserve one valid severe shutdown for investigation.
severe_index = robots.index[robots["plant"] == "A"][0]
robots.loc[severe_index, "downtime_hours"] = 44.0

fault_logit = -3.0 + 0.10 * robots["downtime_hours"] + 0.55 * robots["high_load"]
fault_probability = 1 / (1 + np.exp(-fault_logit))
robots["fault"] = rng.binomial(1, fault_probability)

# Simulate concentrated temperature missingness for an explicit audit.
missing_candidates = robots.index[robots["plant"] == "C"]
missing_index = rng.choice(missing_candidates, size=24, replace=False)
robots.loc[missing_index, "temperature_c"] = np.nan

# Structural and domain validation.
assert robots["robot_id"].is_unique
assert len(robots) == n
assert robots["protocol_new"].isin([0, 1]).all()
assert robots["fault"].isin([0, 1]).all()
assert (robots["downtime_hours"] >= 0).all()
assert robots["robot_age_years"].between(1, 12).all()

missingness = robots.isna().mean().sort_values(ascending=False)
missing_by_plant = robots.groupby("plant")["temperature_c"].apply(
    lambda values: values.isna().mean()
)

summary = robots.groupby("protocol_new")["downtime_hours"].agg(
    count="count",
    mean="mean",
    median="median",
    std="std",
    minimum="min",
    maximum="max",
)

control = robots.loc[robots["protocol_new"] == 0, "downtime_hours"]
new = robots.loc[robots["protocol_new"] == 1, "downtime_hours"]
difference = new.mean() - control.mean()
se = np.sqrt(new.var(ddof=1) / len(new) + control.var(ddof=1) / len(control))

df = (
    (new.var(ddof=1) / len(new) + control.var(ddof=1) / len(control)) ** 2
    / (
        (new.var(ddof=1) / len(new)) ** 2 / (len(new) - 1)
        + (control.var(ddof=1) / len(control)) ** 2 / (len(control) - 1)
    )
)
t_critical = stats.t.ppf(0.975, df)
ci_low = difference - t_critical * se
ci_high = difference + t_critical * se
t_stat, p_value = stats.ttest_ind(new, control, equal_var=False)

pooled_sd = np.sqrt(
    ((len(new) - 1) * new.var(ddof=1) + (len(control) - 1) * control.var(ddof=1))
    / (len(new) + len(control) - 2)
)
cohen_d = difference / pooled_sd

fault_table = robots.groupby("protocol_new")["fault"].agg(["sum", "count", "mean"])
risk_control = fault_table.loc[0, "mean"]
risk_new = fault_table.loc[1, "mean"]
risk_difference = risk_new - risk_control
relative_risk = risk_new / risk_control

# Sensitivity analysis: retain the severe event in the primary result,
# then show its influence without replacing the primary estimate.
without_severe = robots.drop(index=severe_index)
sensitivity_difference = (
    without_severe.loc[without_severe["protocol_new"] == 1, "downtime_hours"].mean()
    - without_severe.loc[without_severe["protocol_new"] == 0, "downtime_hours"].mean()
)

effect_summary = pd.Series({
    "difference_new_minus_control": difference,
    "ci_low": ci_low,
    "ci_high": ci_high,
    "welch_t": t_stat,
    "p_value_two_sided": p_value,
    "cohen_d": cohen_d,
    "risk_control": risk_control,
    "risk_new": risk_new,
    "risk_difference": risk_difference,
    "relative_risk": relative_risk,
    "difference_without_severe_event": sensitivity_difference,
})

fig, axes = plt.subplots(1, 3, figsize=(16, 5))

axes[0].hist(control, bins=np.arange(0, 48, 3), alpha=0.6, label="Current")
axes[0].hist(new, bins=np.arange(0, 48, 3), alpha=0.6, label="New")
axes[0].set(
    title="Downtime distributions",
    xlabel="90-day downtime (hours)",
    ylabel="Robot count",
)
axes[0].legend()

plot_data = summary.reset_index()
plot_data["se"] = plot_data["std"] / np.sqrt(plot_data["count"])
plot_data["ci"] = 1.96 * plot_data["se"]
axes[1].errorbar(
    plot_data["mean"],
    [0, 1],
    xerr=plot_data["ci"],
    fmt="o",
    capsize=6,
    color="#1d4ed8",
)
axes[1].set(
    title="Mean downtime and 95% intervals",
    xlabel="90-day downtime (hours)",
    yticks=[0, 1],
    yticklabels=["Current", "New"],
)

plant_protocol = robots.groupby(["plant", "protocol_new"])["downtime_hours"].mean().unstack()
plant_protocol.columns = ["Current", "New"]
plant_protocol.plot(kind="bar", ax=axes[2], color=["#64748b", "#0f766e"])
axes[2].set(
    title="Mean downtime by plant and protocol",
    xlabel="Plant",
    ylabel="90-day downtime (hours)",
)
axes[2].tick_params(axis="x", rotation=0)

fig.suptitle("Robot Maintenance Pilot: Primary and Subgroup Evidence")
fig.tight_layout()
plt.savefig("robot_maintenance_investigation.png", dpi=160, bbox_inches="tight")

summary.to_csv("protocol_summary.csv")
effect_summary.to_csv("effect_summary.csv", header=["value"])

environment = {
    "python": sys.version.split()[0],
    "platform": platform.platform(),
    "numpy": np.__version__,
    "pandas": pd.__version__,
    "scipy": stats.__version__ if hasattr(stats, "__version__") else "see scipy package",
    "random_seed": SEED,
}
with open("analysis_environment.json", "w", encoding="utf-8") as file:
    json.dump(environment, file, indent=2)

print("Protocol summary")
print(summary.round(2))
print("Missingness by plant")
print(missing_by_plant.round(3))
print("Effect summary")
print(effect_summary.round(3))

assert ci_low < difference < ci_high
assert 0 <= p_value <= 1
assert np.isfinite(relative_risk)
assert robots.loc[severe_index, "downtime_hours"] == 44.0`,
    questions: [
      "What is the primary estimand, and why does subtraction order matter?",
      "How does temperature missingness vary by plant, and which analyses could it bias?",
      "What do the mean, median, and severe shutdown collectively reveal?",
      "Does the confidence interval exclude zero and reach the operational threshold?",
      "How do the absolute and relative fault-risk effects differ in interpretation?",
      "Does removing the severe event change the direction, magnitude, or decision?",
      "Are plant-specific protocol patterns consistent with the overall result?",
      "Which exported files allow another analyst to verify the work?",
    ],
    reflectionQuestions: [
      "Which conclusion is confirmatory and which findings are exploratory?",
      "What additional evidence is required before rollout beyond the pilot plants?",
      "Which data or governance limitation would you prioritize before the next study?",
    ],
    extension:
      "Add cluster-aware uncertainty, bootstrap the median difference, create a causal DAG, investigate protocol adherence, estimate plant-specific effects with shrinkage or partial pooling, and package the work as a version-controlled repository with a README and requirements file.",
  },

  guidedPractice: [
    { id: "gp-02-07-01", question: "What is the difference between reproducibility and replicability?", answer: "Reproducibility reruns the same analysis with the same data and methods; replicability tests whether the conclusion holds in new data or settings." },
    { id: "gp-02-07-02", question: "Why must row grain appear in the data dictionary?", answer: "It determines valid keys, denominators, independence, aggregation, and the meaning of every statistic." },
    { id: "gp-02-07-03", question: "What belongs in a primary analysis plan?", answer: "Population, unit, treatment or exposure, outcome, estimand, hypotheses, method, exclusions, missingness, threshold, subgroups, and reporting rule." },
    { id: "gp-02-07-04", question: "Why keep a valid severe event in the primary analysis?", answer: "It belongs to the observed outcome distribution and may be decision-critical; influence should be shown through a documented sensitivity analysis." },
    { id: "gp-02-07-05", question: "What makes a conclusion proportionate?", answer: "Its strength matches the design, effect magnitude, uncertainty, assumptions, robustness, and generalizability." },
    { id: "gp-02-07-06", question: "Name four minimum files in a reproducibility package.", answer: "README, analysis code or notebook, data or access instructions, and generated tables/figures; also include environment information and a data dictionary." },
  ],

  independentPractice: [
    { id: "ip-02-07-01", difficulty: "Foundational", question: "Write a six-line data dictionary entry for downtime_hours.", sampleAnswer: "Include name, definition, type, unit, valid range, source, time window, missing-value rule, and whether it is primary or derived." },
    { id: "ip-02-07-02", difficulty: "Foundational", question: "Create five validation assertions for the robot dataset.", sampleAnswer: "Unique robot IDs, binary protocol and fault fields, nonnegative downtime, valid age range, and expected row count or date coverage." },
    { id: "ip-02-07-03", difficulty: "Applied", question: "Classify five planned analyses as confirmatory, secondary, exploratory, or diagnostic.", sampleAnswer: "Primary protocol effect is confirmatory; fault risk may be secondary; plant interactions exploratory; residual and missingness checks diagnostic." },
    { id: "ip-02-07-04", difficulty: "Applied", question: "Write a sensitivity-analysis table with assumption, alternative, result, and decision impact.", sampleAnswer: "Rows can include severe-event inclusion, complete-case versus adjusted missingness, mean versus median, clustered versus naive SE, and plant exclusion." },
    { id: "ip-02-07-05", difficulty: "Analytical", question: "Explain why random assignment may support the primary effect but not every subgroup claim.", sampleAnswer: "Randomization targets the overall assigned comparison; subgroup samples may be small, imbalanced, selected after viewing data, and subject to multiplicity." },
    { id: "ip-02-07-06", difficulty: "Advanced", question: "Design a folder and execution structure for this project.", sampleAnswer: "Use README, data/raw and data/processed, src or notebooks, tests, outputs/tables, outputs/figures, docs, requirements or environment file, and a single documented run command." },
    { id: "ip-02-07-07", difficulty: "Professional", question: "Prepare a three-minute executive briefing and a reviewer appendix.", sampleAnswer: "Briefing: decision, effect, uncertainty, threshold, risk, recommendation. Appendix: design, data dictionary, checks, methods, diagnostics, sensitivity, code, environment, and limitations." },
  ],

  commonMistakes: [
    { mistake: "Starting with the dataset instead of the decision.", correction: "Define the decision, population, unit, estimand, time, and meaningful threshold before selecting variables or methods." },
    { mistake: "Editing source data manually without a record.", correction: "Preserve raw data, transform through code, log every rule, and test the processed output." },
    { mistake: "Treating exploration as prespecified confirmation.", correction: "Label primary, secondary, exploratory, and diagnostic analyses and report all prespecified outcomes." },
    { mistake: "Using a random seed as the entire reproducibility plan.", correction: "Record data version, code, package versions, environment, file paths, parameters, and execution order too." },
    { mistake: "Removing observations because they weaken the result.", correction: "Use validity evidence and prespecified rules; show influence through transparent sensitivity analysis." },
    { mistake: "Reporting p-values without effects and intervals.", correction: "Report natural-unit effects, uncertainty, practical thresholds, and when useful relative or standardized measures." },
    { mistake: "Calling reproducible analysis automatically unbiased.", correction: "Audit sampling, measurement, missingness, dependence, confounding, privacy, and external validity in addition to code execution." },
  ],

  discussionQuestions: [
    "How much documentation is enough for a small analysis versus a high-stakes decision?",
    "Should exploratory discoveries influence immediate action or only future confirmatory studies?",
    "Who should approve data exclusions and meaningful-effect thresholds?",
    "How should teams balance open reproducibility with privacy, security, and proprietary data?",
    "What evidence would make you trust an analysis created by someone you cannot contact?",
  ],

  formativeAssessment: {
    totalPoints: 40,
    passingScore: 32,
    questions: [
      { id: "check-02-07-01", type: "framing", points: 5, prompt: "Define the population, unit, treatment, outcome, estimand, and meaningful threshold for the project.", sampleAnswer: "Eligible pilot robots; one robot; assignment to new versus current protocol; 90-day downtime; average assigned-group difference; four-hour reduction threshold." },
      { id: "check-02-07-02", type: "validation", points: 5, prompt: "List five data checks that must pass before analysis.", sampleAnswer: "Unique keys at the declared grain, valid types, plausible ranges, expected categories, and documented missingness; also check time coverage and duplicates." },
      { id: "check-02-07-03", type: "probability", points: 5, prompt: "Explain the evidence required to interpret a conditional fault risk.", sampleAnswer: "Numerator, denominator, group definition, follow-up, missing outcomes, repeated-unit structure, assignment or sampling, and uncertainty." },
      { id: "check-02-07-04", type: "causal", points: 5, prompt: "Why can the primary randomized comparison support a stronger claim than an observational temperature relationship?", sampleAnswer: "Randomization balances pre-treatment causes on average, while temperature may be confounded, affected by operations, selectively missing, or measured after relevant processes." },
      { id: "check-02-07-05", type: "inference", points: 5, prompt: "Interpret an effect whose interval excludes zero but crosses the meaningful threshold.", sampleAnswer: "Evidence supports some nonzero effect, but plausible effects include values below and above the amount required for the operational decision." },
      { id: "check-02-07-06", type: "visualization", points: 5, prompt: "Name the minimum four figures for the investigation and their purposes.", sampleAnswer: "Distribution, group comparison, relationship or subgroup diagnostic, and effect-with-uncertainty plot tied to a decision threshold." },
      { id: "check-02-07-07", type: "reproducibility", points: 5, prompt: "List six elements of a reproducibility package.", sampleAnswer: "README, data/access instructions, data dictionary, code, environment versions, validation tests, generated outputs, and limitations." },
      { id: "check-02-07-08", type: "communication", points: 5, prompt: "Write the structure of an executive recommendation.", sampleAnswer: "Decision, main effect in natural units, uncertainty relative to the threshold, important risk or limitation, recommended action, and next evidence or monitoring step." },
    ],
  },

  researchExtension: {
    title: "Independent Replication and Peer Review",
    researchQuestion:
      "Can an independent reviewer reproduce the results and identify any assumption that materially changes the recommendation?",
    applicationOptions: ["Robot maintenance", "Student support", "Healthcare quality", "Marketing experiment", "Policy evaluation", "AI model benchmark"],
    task:
      "Exchange reproducibility packages with another learner or reviewer. Rebuild the environment, run the analysis without verbal help, compare outputs, audit the design and claims, log every discrepancy, and publish a response-to-review document.",
    requiredEvidence: [
      "Reviewer execution log and environment details",
      "Checksums, row counts, or output comparisons",
      "Design, sampling, measurement, missingness, and causal critique",
      "At least one independently implemented key calculation",
      "Sensitivity analysis selected by the reviewer",
      "Issue log with severity and resolution",
      "Revised conclusion and response-to-review memo",
    ],
  },

  portfolioArtifact: {
    title: "Module 2 Portfolio Project: Reproducible Statistical Investigation",
    description:
      "Submit a complete decision-centered statistical investigation that a reviewer can rerun, audit, and use as evidence of professional analytical capability.",
    requiredSections: [
      "Executive summary and decision recommendation",
      "Decision, audience, population, unit, treatment or exposure, outcomes, time, estimand, and meaningful threshold",
      "Data source, provenance, collection, sampling or assignment, ethics, privacy, and access",
      "Data dictionary and analysis plan",
      "Validation checks for grain, keys, types, ranges, categories, missingness, duplicates, and dependence",
      "Descriptive statistics and distribution interpretation",
      "Conditional probability or risk analysis",
      "Relationship, confounding, and causal-caution analysis",
      "Effect estimate, confidence interval, hypothesis test, and practical effect measures",
      "Accessible visualization brief with uncertainty and decision thresholds",
      "Sensitivity, robustness, subgroup, and assumption checks",
      "Limitations, generalizability, next experiment, and monitoring plan",
      "Reproducibility instructions and technical appendix",
    ],
    requiredEvidence: [
      "README with one clear execution path",
      "Raw-data access note and immutable source description",
      "Data dictionary and project analysis plan",
      "Reproducible notebook or scripts",
      "Automated validation assertions or tests",
      "Environment or requirements file with fixed random seed",
      "At least three decision-relevant tables",
      "At least four accessible statistical figures",
      "Primary and sensitivity results side by side",
      "Executive brief, technical appendix, and limitations statement",
      "Version-control history or dated audit log",
    ],
  },

  growthIndicators: [
    { title: "Investigation Architect", description: "You connect a decision, estimand, design, data, method, and meaningful threshold before calculating results." },
    { title: "Reproducibility Engineer", description: "You preserve provenance, automate transformations and checks, record the environment, and make outputs rerunnable." },
    { title: "Statistical Reviewer", description: "You challenge missingness, dependence, confounding, uncertainty, robustness, and generalizability." },
    { title: "Decision Communicator", description: "You deliver consistent technical and executive conclusions with limitations and proportionate actions." },
  ],

  reflection: [
    "Which analysis choice in your project has the greatest effect on the conclusion?",
    "Could another analyst recreate every transformation without asking you a question?",
    "Which result is confirmatory, and which discoveries require a new study?",
    "Where might sampling, measurement, missingness, dependence, or confounding bias the result?",
    "Does the executive summary preserve the uncertainty and limitation visible in the technical analysis?",
    "What new data or experiment would most improve the next decision?",
  ],

  summary: [
    "A reproducible investigation begins with a decision, population, unit, estimand, time window, and meaningful threshold.",
    "An analysis plan separates primary confirmation from secondary, exploratory, and diagnostic work.",
    "A data dictionary and provenance record protect meaning as data move through the project.",
    "Validation checks must verify row grain, keys, types, ranges, categories, missingness, duplicates, time, and dependence.",
    "Descriptive statistics should reveal center, spread, shape, subgroups, and unusual observations before inference.",
    "Conditional probabilities require explicit numerators, denominators, populations, and follow-up windows.",
    "Correlation and adjusted models do not become causal without a defensible design and assumptions.",
    "Effect estimates require uncertainty, natural units, practical thresholds, and honest error interpretation.",
    "Valid severe observations should be investigated and stress-tested, not silently removed.",
    "Statistical figures should show distributions, comparisons, relationships, uncertainty, sample sizes, and decision references.",
    "Computational reproducibility does not repair biased sampling, invalid measurement, confounding, or privacy problems.",
    "A portfolio-ready package includes code, data instructions, definitions, tests, environment information, outputs, limitations, and a bounded recommendation.",
  ],

  previousLesson: {
    id: "data-ai-m02-l06",
    moduleNumber: 2,
    slug: "statistical-visualization-and-interpretation-lab",
    title: "Statistical Visualization and Interpretation Lab",
  },
  nextLesson: null,

  lumineryGuidance: {
    message:
      "Make every conclusion traceable from the decision through the data, method, uncertainty, robustness checks, and reproducible evidence package.",
    prompt:
      "Act as my statistical project reviewer. Help me define the decision, population, unit, treatment or exposure, outcomes, estimand, timing, meaningful threshold, and analysis plan. Audit provenance, grain, keys, types, ranges, missingness, duplicates, dependence, sampling, assignment, confounding, and privacy. Review descriptive statistics, conditional risks, relationships, effect estimates, intervals, tests, visualizations, sensitivity analyses, and generalizability. Then produce a reproducibility checklist, technical conclusion, executive recommendation, limitations, and next-study plan.",
    coachingQuestions: [
      "What decision will change if the result is convincing?",
      "What exact population quantity or effect are you estimating?",
      "Which analyses were specified before observing the primary outcome?",
      "Can every data transformation and exclusion be reproduced and justified?",
      "Which assumption or observation most threatens the conclusion?",
      "Does the effect remain meaningful across uncertainty and robustness checks?",
      "Can an independent reviewer rerun the project from the README alone?",
    ],
  },
};

export default lesson07;
