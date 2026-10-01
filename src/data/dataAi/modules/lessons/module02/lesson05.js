const lesson05 = {
  id: "data-ai-m02-l05",
  courseId: "data-ai-foundations",
  moduleId: "data-ai-foundations-module-02",
  moduleNumber: 2,
  lessonNumber: 5,
  slug: "confidence-intervals-hypothesis-tests-and-effect-size",
  title: "Confidence Intervals, Hypothesis Tests, and Effect Size",
  shortTitle: "Intervals, Tests, and Effect Size",
  subtitle:
    "Quantify uncertainty, test claims transparently, and judge whether an observed difference is large enough to matter in the real decision.",
  status: "available",
  duration: "120–140 minutes",
  level: "Beginner to Professional",

  essentialQuestion:
    "How can we move from a sample result to a responsible conclusion about a population while separating statistical evidence from practical importance?",
  bigIdea:
    "Statistical inference combines an estimate, its sampling uncertainty, a clearly defined hypothesis, and a decision threshold. A p-value does not measure effect size or truth; confidence intervals and domain-relevant effect measures are needed to understand what values remain plausible and whether the result matters.",

  whyThisLessonExists: {
    title: "A Small p-Value Is Not the Finish Line",
    introduction:
      "Data and AI teams compare models, policies, plants, customer groups, and system versions using samples. Observed differences change from sample to sample, so decision-makers need a disciplined way to quantify uncertainty and distinguish signal from random variation.",
    centralProblem:
      "Teams often treat p < 0.05 as proof, interpret a nonsignificant result as no effect, confuse a confidence interval with a probability statement about a fixed parameter, test many outcomes until one appears significant, or ignore whether the effect is operationally meaningful.",
    purpose:
      "This lesson develops a complete inference workflow: define the estimand and minimum important effect, examine the design and assumptions, calculate an estimate and standard error, build a confidence interval, conduct a prespecified hypothesis test, report effect size and uncertainty, examine power and multiplicity, and translate the evidence into a proportionate decision.",
  },

  problemFirst: {
    title: "Opening Investigation: Is the New Maintenance Protocol Worth Adopting?",
    scenario:
      "A randomized pilot assigns 80 robots to the current maintenance protocol and 80 to a new protocol. Mean 90-day downtime is 20.1 hours for control and 17.8 hours for the new protocol. The estimated reduction is 2.3 hours, the 95% confidence interval for new minus control is [−4.1, −0.5], and p = 0.013. Operations previously defined a reduction of at least 4 hours as the minimum worthwhile effect.",
    questions: [
      "What population parameter and causal effect is the pilot estimating?",
      "What does the confidence interval say about plausible average effects?",
      "What does p = 0.013 mean under the null hypothesis?",
      "Does the p-value give the probability that the null hypothesis is true?",
      "Is the result statistically significant at α = 0.05?",
      "Is the estimated effect practically important under the 4-hour threshold?",
      "Why does the interval include both worthwhile and insufficient reductions?",
      "What decision balances evidence, safety, cost, and the value of more data?",
    ],
    expectedInsight:
      "The pilot provides evidence against a zero average effect, but the point estimate is smaller than the prespecified 4-hour operational threshold. The interval includes modest benefit and benefit large enough to matter. A limited rollout, additional data, cost analysis, and safety monitoring may be more defensible than either immediate universal adoption or rejection.",
  },

  learningObjectives: [
    "Distinguish a population parameter, sample statistic, estimator, estimate, sampling distribution, standard error, and confidence interval.",
    "Calculate and interpret confidence intervals for a mean, proportion, difference in means, and difference in proportions under suitable conditions.",
    "State null and alternative hypotheses using the population quantity and decision context.",
    "Calculate and interpret test statistics and p-values without treating them as probabilities that a hypothesis is true.",
    "Explain significance level, Type I error, Type II error, statistical power, and the consequences of one-sided versus two-sided tests.",
    "Distinguish statistical significance from practical, clinical, educational, or operational significance.",
    "Calculate and interpret raw differences, percentage-point differences, relative risk, and standardized mean differences.",
    "Report estimates, intervals, p-values, assumptions, multiplicity, missingness, and decision thresholds in one coherent conclusion.",
  ],

  prerequisiteKnowledge: [
    "Means, proportions, standard deviation, square roots, and basic algebra",
    "Module 2 Lesson 1: distributions, outliers, center, spread, and shape",
    "Module 2 Lesson 2: probability, conditional probability, and decision thresholds",
    "Module 2 Lesson 3: representative samples, bias, and weighting",
    "Module 2 Lesson 4: association, confounding, causal design, and adjusted comparisons",
  ],

  visualModels: [
    {
      id: "inference-to-decision-workflow",
      type: "lifecycle",
      title: "The Inference-to-Decision Workflow",
      description:
        "A responsible inference connects design, uncertainty, statistical evidence, effect magnitude, and real-world consequences.",
      stages: [
        { label: "1. Define", detail: "Specify the population, estimand, null and alternative, primary outcome, α, direction, and minimum important effect before seeing results." },
        { label: "2. Estimate", detail: "Calculate the sample effect in interpretable units and verify data quality, design integrity, missingness, and assumptions." },
        { label: "3. Quantify Uncertainty", detail: "Use the sampling design to calculate a standard error, confidence interval, and when appropriate a test statistic and p-value." },
        { label: "4. Evaluate Importance", detail: "Compare the interval with zero, the minimum worthwhile effect, harms, costs, capacity, and subgroup evidence." },
        { label: "5. Decide and Learn", detail: "Choose adopt, reject, continue testing, or stage rollout; document uncertainty and monitor whether results reproduce in practice." },
      ],
      feedback:
        "Replication, new samples, deployment monitoring, and changing conditions should update both the estimated effect and the decision.",
      interpretation:
        "No single threshold makes a decision automatically. Good inference integrates the entire interval, study design, effect size, error costs, and prior commitments.",
    },
  ],

  vocabulary: [
    { term: "Population parameter", definition: "A fixed but usually unknown numerical feature of the target population, such as the true mean downtime reduction." },
    { term: "Sample statistic", definition: "A numerical summary calculated from observed sample data." },
    { term: "Estimator", definition: "A rule or procedure used to calculate an estimate of a population parameter from sample data." },
    { term: "Point estimate", definition: "A single sample-based value used as the best current estimate of a population parameter." },
    { term: "Sampling distribution", definition: "The distribution of a statistic over repeated samples generated under the same design." },
    { term: "Standard error", definition: "The estimated standard deviation of a statistic's sampling distribution." },
    { term: "Confidence interval", definition: "A range produced by a procedure designed to capture the true parameter at a stated long-run rate under its assumptions." },
    { term: "Confidence level", definition: "The long-run proportion of intervals from repeated valid samples that would contain the true parameter." },
    { term: "Margin of error", definition: "The critical value multiplied by the standard error; it is the distance from a symmetric point estimate to an interval endpoint." },
    { term: "Critical value", definition: "A multiplier from a reference distribution chosen for the confidence level, test direction, and degrees of freedom." },
    { term: "Null hypothesis", definition: "The reference claim tested, often specifying no difference, no effect, or a benchmark parameter value." },
    { term: "Alternative hypothesis", definition: "The competing claim describing the direction or existence of a difference from the null value." },
    { term: "Test statistic", definition: "A standardized measure of how far the observed estimate lies from the null value relative to its standard error." },
    { term: "p-value", definition: "Assuming the null hypothesis and test model are true, the probability of obtaining a result at least as incompatible with the null as the observed result." },
    { term: "Significance level", definition: "The prespecified Type I error threshold α used to define a rejection rule." },
    { term: "Type I error", definition: "Rejecting the null hypothesis when the null is true; its prespecified probability is controlled by α under the test assumptions." },
    { term: "Type II error", definition: "Failing to reject the null when a specified meaningful alternative is true." },
    { term: "Statistical power", definition: "The probability of rejecting the null when a specified alternative effect is true, equal to 1 − β." },
    { term: "One-sided test", definition: "A test with a directional alternative selected before observing the data and justified because the opposite direction is not treated as equivalent evidence." },
    { term: "Two-sided test", definition: "A test that treats sufficiently large departures in either direction as evidence against the null." },
    { term: "Statistical significance", definition: "A result meeting a prespecified statistical evidence rule, such as p < α; it does not measure magnitude or importance." },
    { term: "Practical significance", definition: "The degree to which an effect is large enough to change a real decision given costs, harms, benefits, and constraints." },
    { term: "Effect size", definition: "A quantitative measure of the magnitude of a difference or relationship in raw, relative, or standardized units." },
    { term: "Multiple comparisons", definition: "Testing several hypotheses or outcomes, which increases the chance of at least one false-positive finding unless addressed." },
  ],

  formulas: [
    {
      id: "standard-error-mean",
      name: "Standard error of a sample mean",
      formula: "SE(x̄) = s / √n",
      meaning: "Estimates how much the sample mean would vary across repeated independent samples.",
      requirement: "The design must support independence or the standard error must account for clustering, repeated measures, weighting, or other dependence.",
    },
    {
      id: "mean-confidence-interval",
      name: "One-sample t confidence interval",
      formula: "x̄ ± t* × s/√n",
      meaning: "Estimates a population mean when the population standard deviation is unknown.",
      requirement: "Use suitable randomization or sampling, inspect skew and outliers, and use the correct t critical value and degrees of freedom.",
    },
    {
      id: "one-sample-t-test",
      name: "One-sample t statistic",
      formula: "t = (x̄ − μ₀) / (s/√n)",
      meaning: "Measures how many estimated standard errors the sample mean is from the null mean μ₀.",
      requirement: "The p-value interpretation assumes the null, the design, and the test model; it does not give P(H₀ | data).",
    },
    {
      id: "proportion-confidence-interval",
      name: "Approximate confidence interval for a proportion",
      formula: "p̂ ± z*√[p̂(1 − p̂)/n]",
      meaning: "Estimates a population proportion using a normal approximation.",
      requirement: "Check success-failure counts and use Wilson, exact, or design-based methods when the approximation or simple-random assumptions are weak.",
    },
    {
      id: "welch-difference",
      name: "Welch interval for a difference in means",
      formula: "(x̄₁ − x̄₂) ± t*√(s₁²/n₁ + s₂²/n₂)",
      meaning: "Estimates a difference between two independent population means without assuming equal variances.",
      requirement: "Define the subtraction order, verify independence between groups, and use Welch-Satterthwaite degrees of freedom.",
    },
    {
      id: "cohen-d",
      name: "Cohen's standardized mean difference",
      formula: "d = (x̄₁ − x̄₂) / spooled",
      meaning: "Expresses a mean difference in pooled standard-deviation units.",
      requirement: "Report the raw-unit effect too; standardized values depend on the population's variability and are not universal measures of importance.",
    },
    {
      id: "binary-effect-sizes",
      name: "Risk difference and relative risk",
      formula: "RD = p₁ − p₂; RR = p₁ / p₂",
      meaning: "RD gives the absolute percentage-point change; RR gives the multiplicative change between group risks.",
      requirement: "Always state which group is in the numerator and report baseline risk, uncertainty, follow-up time, and missing outcomes.",
    },
  ],

  workedExamples: [
    {
      id: "example-02-05-01",
      title: "Build a confidence interval for mean downtime",
      problem: "A sample of 36 robots has mean downtime 18.4 hours and sample standard deviation 4.5 hours. Using t* = 2.03, find the 95% confidence interval.",
      solutionSteps: [
        "Calculate SE = 4.5 / √36 = 4.5 / 6 = 0.75 hours.",
        "Calculate the margin of error: 2.03 × 0.75 = 1.5225 hours.",
        "Lower endpoint: 18.4 − 1.5225 = 16.8775.",
        "Upper endpoint: 18.4 + 1.5225 = 19.9225.",
      ],
      answer: "The 95% confidence interval is approximately [16.88, 19.92] hours.",
      interpretation: "Under repeated valid sampling, 95% of intervals constructed by this procedure would contain the true population mean. The fixed mean itself does not have a 95% probability of moving into this realized interval.",
    },
    {
      id: "example-02-05-02",
      title: "Calculate and interpret a one-sample test statistic",
      problem: "For n = 25 robot batches, mean defect count is 12.4 with s = 4.0. Test H₀: μ = 10.",
      solutionSteps: [
        "Calculate SE = 4 / √25 = 0.8.",
        "Calculate t = (12.4 − 10) / 0.8 = 3.0.",
        "With 24 degrees of freedom, a two-sided p-value is approximately 0.006.",
        "Compare p with the prespecified α, not with a threshold chosen after seeing the result.",
      ],
      answer: "t = 3.0 and p ≈ 0.006 for a two-sided test.",
      interpretation: "If μ = 10 and the test assumptions hold, a result at least this far from 10 would be unusual. The p-value is not the probability that H₀ is true.",
    },
    {
      id: "example-02-05-03",
      title: "Choose a one-sided or two-sided alternative",
      problem: "A new safety protocol could reduce or increase incidents. Should the primary test be one-sided or two-sided?",
      solutionSteps: [
        "State the decision before looking at outcomes.",
        "An increase in incidents is scientifically and operationally important.",
        "A one-sided benefit test would not treat harm as evidence in the primary rejection region.",
        "Use a two-sided alternative and report the direction and interval.",
      ],
      answer: "Use a two-sided primary test because meaningful effects in either direction matter.",
      interpretation: "Test direction is a design decision, not a way to reduce a p-value after observing the data.",
    },
    {
      id: "example-02-05-04",
      title: "Separate statistical from practical significance",
      problem: "A very large dataset estimates a 0.20-hour downtime reduction with 95% CI [0.15, 0.25] and p < 0.001. The minimum worthwhile reduction is 2 hours.",
      solutionSteps: [
        "The interval excludes zero, so the result meets the statistical significance rule.",
        "The entire interval lies far below the 2-hour minimum worthwhile reduction.",
        "Large n makes very small effects estimable with high precision.",
        "Compare expected benefit with implementation cost, disruption, and risk.",
      ],
      answer: "The effect is statistically detectable but not practically important under the prespecified 2-hour threshold.",
      interpretation: "Statistical significance is not a synonym for value, impact, or return on investment.",
    },
    {
      id: "example-02-05-05",
      title: "Reason about Type I error, Type II error, and power",
      problem: "A fault detector trial uses α = 0.05 and has 80% power for a meaningful improvement. Interpret these operating characteristics.",
      solutionSteps: [
        "If the null is true and assumptions hold, the rejection rule has a 5% long-run Type I error rate.",
        "If the specified meaningful improvement is true, the design has an 80% chance to reject the null.",
        "The corresponding Type II error probability for that effect is β = 1 − 0.80 = 0.20.",
        "Power changes with effect size, variance, sample size, allocation, missingness, and the test rule.",
      ],
      answer: "The design controls false positives at 5% under H₀ and misses the specified meaningful effect about 20% of the time.",
      interpretation: "Power is tied to a particular alternative effect, not a permanent property of a test.",
    },
    {
      id: "example-02-05-06",
      title: "Compare absolute and relative effects for faults",
      problem: "Faults occur in 18 of 200 treatment robots and 30 of 200 control robots. Calculate the risk difference and relative risk.",
      solutionSteps: [
        "Treatment risk = 18 / 200 = 0.09, or 9%.",
        "Control risk = 30 / 200 = 0.15, or 15%.",
        "RD = 0.09 − 0.15 = −0.06, a 6-percentage-point reduction.",
        "RR = 0.09 / 0.15 = 0.60.",
      ],
      answer: "RD = −0.06 and RR = 0.60.",
      interpretation: "The treatment group has 40% lower relative risk and 6 fewer faults per 100 robots. Both absolute and relative measures are needed for decision-making.",
    },
  ],

  interactiveExploration: {
    title: "Explore What Changes an Interval and a Decision",
    description:
      "Vary sample size, variability, confidence level, observed effect, and the minimum important effect to see how statistical and operational conclusions change.",
    instructions: [
      "Choose a baseline estimate, sample standard deviation, and sample size.",
      "Calculate the standard error and a 95% confidence interval.",
      "Double the sample size while holding the observed effect and variability fixed.",
      "Quadruple the sample size and compare interval widths.",
      "Change the confidence level from 95% to 99%.",
      "Increase the measurement variability and observe the interval.",
      "Place zero and the minimum worthwhile effect on the same number line.",
      "Classify the result as clearly harmful, inconclusive, statistically detectable but too small, promising but uncertain, or clearly worthwhile.",
      "Repeat under a one-sided and two-sided test chosen before seeing data.",
      "Add five exploratory outcomes and discuss how multiplicity changes false-positive risk.",
    ],
    investigationQuestions: [
      "Why does interval width shrink approximately with 1/√n?",
      "Why can a tiny effect become statistically significant in a huge dataset?",
      "When does a confidence interval rule out both no effect and a worthwhile effect?",
      "What conclusion is appropriate when the interval includes benefit, no effect, and harm?",
      "How do missing outcomes or clustering change the effective information?",
      "Which result would justify collecting more data rather than immediate adoption?",
    ],
    expectedDiscovery:
      "Precision improves with more independent information, but a narrow interval around a trivial effect does not make the effect useful. The decision depends on where the full interval lies relative to zero and the minimum important threshold.",
  },

  realWorldApplications: [
    { field: "Manufacturing and Robotics", application: "Estimate whether a maintenance protocol reduces downtime, failures, energy use, or defects enough to justify implementation." },
    { field: "Education", application: "Report learning gains with intervals and meaningful-score thresholds instead of relying only on p-values." },
    { field: "Healthcare", application: "Compare absolute risk reduction, relative risk, harms, uncertainty, and clinical importance for treatments or screening." },
    { field: "Business and Marketing", application: "Evaluate A/B tests using conversion lift, revenue impact, confidence intervals, guardrails, and multiple-testing controls." },
    { field: "Public Policy", application: "Quantify program effects and uncertainty while considering equity, costs, implementation fidelity, and external validity." },
    { field: "Machine Learning and AI", application: "Compare models across repeated folds or independent test units, report metric uncertainty, and test whether improvements are decision-relevant." },
  ],

  aiConnection: {
    title: "Model Improvements Need Uncertainty and Effect Size",
    explanation:
      "A model that scores 0.842 instead of 0.838 on one test set is not automatically better. Test-set composition, correlated observations, threshold choice, repeated tuning, and subgroup variation can make small improvements unstable or operationally meaningless.",
    example:
      "A predictive-maintenance model reduces false alerts from 12.0% to 11.6% on 100,000 sensor windows. The difference may be statistically detectable, but windows from the same robot are dependent and a 0.4-percentage-point reduction may not justify retraining, validation, deployment risk, and maintenance workflow changes.",
    uses: ["A/B testing", "Model comparison", "Calibration evaluation", "Subgroup metrics", "Threshold selection", "Online experiments", "Monitoring and drift detection"],
    caution:
      "Do not treat every row as independent when observations share users, robots, classrooms, patients, or time periods. Use the experimental or sampling unit, account for repeated model selection, and report practical impact.",
    reflectionQuestion:
      "What is the minimum metric improvement that would actually change deployment or operational policy in your project?",
  },

  pythonLab: {
    title: "Evaluate a Robot-Maintenance Experiment",
    objective:
      "Simulate a two-group randomized pilot, calculate a Welch confidence interval and hypothesis test, estimate Cohen's d, bootstrap the mean difference, and compare the result with an operational threshold.",
    code: `import numpy as np
import pandas as pd
from scipy import stats

rng = np.random.default_rng(42)
n_control = 80
n_treatment = 80

control = rng.normal(loc=20.0, scale=5.0, size=n_control)
treatment = rng.normal(loc=17.5, scale=5.0, size=n_treatment)

mean_control = control.mean()
mean_treatment = treatment.mean()
difference = mean_treatment - mean_control

var_control = control.var(ddof=1)
var_treatment = treatment.var(ddof=1)
se = np.sqrt(
    var_treatment / n_treatment
    + var_control / n_control
)

df = (
    (var_treatment / n_treatment + var_control / n_control) ** 2
    / (
        (var_treatment / n_treatment) ** 2 / (n_treatment - 1)
        + (var_control / n_control) ** 2 / (n_control - 1)
    )
)

t_critical = stats.t.ppf(0.975, df)
ci_low = difference - t_critical * se
ci_high = difference + t_critical * se

t_stat, p_value = stats.ttest_ind(
    treatment,
    control,
    equal_var=False,
)

pooled_sd = np.sqrt(
    (
        (n_treatment - 1) * var_treatment
        + (n_control - 1) * var_control
    )
    / (n_treatment + n_control - 2)
)
cohen_d = difference / pooled_sd

bootstrap_differences = np.empty(5000)
for i in range(5000):
    treatment_sample = rng.choice(
        treatment, size=n_treatment, replace=True
    )
    control_sample = rng.choice(
        control, size=n_control, replace=True
    )
    bootstrap_differences[i] = (
        treatment_sample.mean() - control_sample.mean()
    )

bootstrap_ci = np.quantile(
    bootstrap_differences,
    [0.025, 0.975],
)

summary = pd.Series({
    "control_mean": mean_control,
    "treatment_mean": mean_treatment,
    "difference_new_minus_control": difference,
    "welch_t": t_stat,
    "p_value_two_sided": p_value,
    "ci_low": ci_low,
    "ci_high": ci_high,
    "cohen_d": cohen_d,
    "bootstrap_ci_low": bootstrap_ci[0],
    "bootstrap_ci_high": bootstrap_ci[1],
})

minimum_worthwhile_reduction = -4.0

print("Experiment summary:\\n", summary.round(3))
print(
    "\\nMeets 4-hour point-estimate target:",
    difference <= minimum_worthwhile_reduction,
)

assert len(control) == n_control
assert len(treatment) == n_treatment
assert ci_low < difference < ci_high
assert 0 <= p_value <= 1
assert cohen_d < 0`,
    questions: [
      "What is the estimated treatment-minus-control difference, and why is its sign important?",
      "Does the 95% Welch interval include zero?",
      "What does the two-sided p-value mean under the null?",
      "How large is Cohen's d, and what does the raw-hour difference add?",
      "How closely does the bootstrap interval agree with the Welch interval?",
      "Does the point estimate reach the four-hour operational threshold?",
    ],
    reflectionQuestions: [
      "Would statistical significance alone justify universal rollout?",
      "How would robot-level clustering or repeated windows change the analysis?",
      "Which safety, cost, and subgroup outcomes should be prespecified as guardrails?",
    ],
    extension:
      "Repeat the experiment 1,000 times under a zero effect and a four-hour reduction. Estimate the empirical Type I error and power, then add missing outcomes and cluster-level treatment assignment.",
  },

  guidedPractice: [
    { id: "gp-02-05-01", question: "A sample mean is 50, SE = 2, and z* = 1.96. Find the approximate 95% confidence interval.", answer: "50 ± 1.96(2) = 50 ± 3.92, so [46.08, 53.92]." },
    { id: "gp-02-05-02", question: "Interpret a 95% confidence interval [−3.2, −0.8] for treatment minus control.", answer: "The procedure supports a negative average difference between 0.8 and 3.2 units under its assumptions; zero is excluded." },
    { id: "gp-02-05-03", question: "What does p = 0.03 mean?", answer: "If the null and test assumptions are true, results at least as incompatible with the null as observed occur with probability 0.03." },
    { id: "gp-02-05-04", question: "At α = 0.05, what formal decision follows from p = 0.08?", answer: "Fail to reject H₀; do not conclude that H₀ is true or that the effect is exactly zero." },
    { id: "gp-02-05-05", question: "If power is 0.90 for a specified effect, what is β?", answer: "β = 1 − 0.90 = 0.10." },
    { id: "gp-02-05-06", question: "Why should a raw effect accompany Cohen's d?", answer: "Raw units show operational meaning, while d depends on the variability of the population and may be harder to translate into action." },
  ],

  independentPractice: [
    { id: "ip-02-05-01", difficulty: "Foundational", question: "Distinguish standard deviation from standard error.", sampleAnswer: "Standard deviation describes variability among observations; standard error describes sampling variability of an estimator." },
    { id: "ip-02-05-02", difficulty: "Foundational", question: "Explain why a 99% confidence interval is wider than a 95% interval from the same data.", sampleAnswer: "The higher confidence procedure uses a larger critical value to achieve a higher long-run capture rate." },
    { id: "ip-02-05-03", difficulty: "Applied", question: "Write H₀ and H₁ for testing whether a new protocol changes mean downtime.", sampleAnswer: "H₀: μnew − μcontrol = 0; H₁: μnew − μcontrol ≠ 0 for a two-sided test." },
    { id: "ip-02-05-04", difficulty: "Applied", question: "A result has p = 0.20 and a wide interval. Explain why 'no effect' is not justified.", sampleAnswer: "The study may be imprecise and compatible with important benefit, no effect, or harm; failing to reject is not proof of equality." },
    { id: "ip-02-05-05", difficulty: "Analytical", question: "A tiny effect has p < 0.001 in ten million rows. What should be examined?", sampleAnswer: "Independence, clustering, bias, raw effect size, interval, minimum important effect, costs, harms, and whether repeated testing inflated evidence." },
    { id: "ip-02-05-06", difficulty: "Advanced", question: "Design a power analysis for a two-group maintenance trial.", sampleAnswer: "Specify the primary outcome, minimum important difference, variance, α, power, allocation, clustering, attrition, compliance, and analysis plan before calculating required units." },
    { id: "ip-02-05-07", difficulty: "Professional", question: "Audit an A/B test that reports only significant metrics.", sampleAnswer: "Request all prespecified outcomes, assignment unit, sample-size plan, stopping rule, exclusions, missingness, multiplicity method, raw effects, intervals, guardrails, and subgroup analyses." },
  ],

  commonMistakes: [
    { mistake: "Interpreting a 95% confidence interval as a 95% probability statement about a fixed parameter.", correction: "Describe the long-run performance of the interval procedure and the values compatible with the observed data and assumptions." },
    { mistake: "Saying p = 0.03 means a 3% probability that the null is true.", correction: "A p-value conditions on the null; it does not assign a posterior probability to the hypothesis." },
    { mistake: "Treating p > 0.05 as proof of no effect.", correction: "Report the interval and whether it rules out effects large enough to matter; consider equivalence or noninferiority designs when appropriate." },
    { mistake: "Equating statistical significance with practical importance.", correction: "Compare the raw effect and full interval with a prespecified minimum important effect, costs, benefits, harms, and constraints." },
    { mistake: "Choosing one-sided testing after seeing the effect direction.", correction: "Prespecify direction using scientific and decision logic; otherwise use the planned two-sided analysis." },
    { mistake: "Testing many metrics and highlighting only significant ones.", correction: "Prespecify primary outcomes, report all analyses, and use multiplicity controls or clearly label exploratory findings." },
    { mistake: "Treating rows as independent experimental units.", correction: "Analyze at the assignment and sampling structure, accounting for repeated observations, clusters, weights, time, and dependence." },
  ],

  discussionQuestions: [
    "Should α always be 0.05, or should it depend on the consequences of errors?",
    "When is collecting more data the best decision after an inconclusive interval?",
    "Can a statistically nonsignificant result still support a useful operational decision?",
    "How should organizations choose a minimum important effect before an experiment?",
    "What incentives encourage teams to report only favorable significant results?",
  ],

  formativeAssessment: {
    totalPoints: 30,
    passingScore: 24,
    questions: [
      { id: "check-02-05-01", type: "calculation", points: 5, prompt: "A mean is 24, SE = 1.5, and t* = 2. Find the confidence interval.", sampleAnswer: "24 ± 2(1.5) = 24 ± 3, so [21, 27]." },
      { id: "check-02-05-02", type: "interpretation", points: 5, prompt: "Interpret p = 0.04 correctly.", sampleAnswer: "Assuming the null and model are true, a result at least as incompatible with the null as observed has probability 0.04." },
      { id: "check-02-05-03", type: "errors", points: 5, prompt: "Distinguish Type I error, Type II error, and power.", sampleAnswer: "Type I rejects a true null; Type II fails to reject for a specified true alternative; power is one minus the Type II error probability for that alternative." },
      { id: "check-02-05-04", type: "reasoning", points: 5, prompt: "Why can a result be statistically significant but operationally unimportant?", sampleAnswer: "A large sample can estimate a very small effect precisely, while the effect remains below the minimum worthwhile threshold." },
      { id: "check-02-05-05", type: "effect-size", points: 5, prompt: "Treatment risk is 8% and control risk is 10%. Find RD and RR.", sampleAnswer: "RD = 0.08 − 0.10 = −0.02, or −2 percentage points; RR = 0.08 / 0.10 = 0.80." },
      { id: "check-02-05-06", type: "communication", points: 5, prompt: "List the elements of a professional inference conclusion.", sampleAnswer: "Design and population, estimand, point estimate, interval, p-value when planned, raw and standardized effect, assumptions, missingness, multiplicity, minimum important effect, limitations, and decision." },
    ],
  },

  researchExtension: {
    title: "Audit Statistical Evidence Behind a Real Decision",
    researchQuestion:
      "Does a published experiment or comparison report enough information to judge uncertainty, effect magnitude, and practical importance?",
    applicationOptions: ["Maintenance experiment", "Educational intervention", "Medical treatment", "Marketing A/B test", "Policy evaluation", "AI model comparison"],
    task:
      "Choose one report with a confidence interval or hypothesis test. Reconstruct the design, estimand, sample, assumptions, primary outcome, estimate, interval, p-value, effect size, power or precision, multiplicity, and decision threshold, then rewrite the conclusion.",
    requiredEvidence: [
      "Original claim and decision context",
      "Population, unit, design, assignment or sampling process, and sample size",
      "Null, alternative, α, direction, and primary outcome",
      "Point estimate, standard error, interval, test statistic, and p-value",
      "Raw and relative or standardized effect sizes",
      "Minimum important effect and error consequences",
      "Assessment of missingness, dependence, multiplicity, power, and limits",
    ],
  },

  portfolioArtifact: {
    title: "Statistical Investigation, Part 5: Inference and Effect-Size Brief",
    description:
      "Extend your Module 2 investigation with a reproducible uncertainty analysis and a decision statement that separates statistical evidence from practical importance.",
    requiredSections: [
      "Decision, population, unit, estimand, comparison, and time window",
      "Study design, sampling or assignment process, exclusions, and missingness",
      "Primary outcome and minimum important effect selected before analysis",
      "Null and alternative hypotheses, α, direction, and stopping rule",
      "Point estimate, standard error, confidence interval, test statistic, and p-value",
      "Raw, relative, and standardized effect sizes when appropriate",
      "Assumption and diagnostic checks",
      "Power, precision, clustering, weighting, and multiplicity considerations",
      "Statistical conclusion and practical decision stated separately",
      "Limitations, replication, rollout, and monitoring recommendation",
    ],
    requiredEvidence: [
      "One sampling-distribution or interval figure",
      "One estimate-and-confidence-interval plot",
      "Reproducible Python, SQL, or spreadsheet calculation",
      "One raw and one relative or standardized effect measure",
      "One minimum-important-effect comparison",
      "One sensitivity or power scenario",
      "One decision-ready inference paragraph",
    ],
  },

  growthIndicators: [
    { title: "Uncertainty Quantifier", description: "You connect estimates to sampling variability, standard errors, intervals, and design assumptions." },
    { title: "Hypothesis Tester", description: "You define hypotheses and error thresholds before analysis and interpret p-values conditionally." },
    { title: "Effect-Size Interpreter", description: "You report magnitude in raw, relative, and standardized units and compare it with meaningful thresholds." },
    { title: "Evidence Decision Maker", description: "You integrate design, uncertainty, power, multiplicity, cost, harm, and practical importance." },
  ],

  reflection: [
    "Which decision in your project needs an interval rather than only a point estimate?",
    "What minimum effect would be large enough to change the action?",
    "Which error is more costly: adopting an ineffective intervention or missing a useful one?",
    "Are any observations incorrectly being treated as independent?",
    "How many outcomes, subgroups, models, or thresholds have been tested?",
    "What result would justify adoption, continued testing, or rejection?",
  ],

  summary: [
    "A point estimate summarizes the observed sample; a standard error quantifies its expected sampling variability.",
    "A confidence interval is generated by a procedure with a stated long-run coverage rate under its assumptions.",
    "Interval width depends on variability, independent information, confidence level, design, and analysis method.",
    "A hypothesis test compares an observed estimate with a null value relative to its standard error.",
    "A p-value is calculated assuming the null; it is not the probability that the null hypothesis is true.",
    "Failing to reject a null hypothesis does not prove equality or absence of an important effect.",
    "Type I error, Type II error, and power must be interpreted for a prespecified rule and alternative effect.",
    "Statistical significance measures compatibility with a null model, not practical value.",
    "Effect sizes should be reported in decision-relevant raw units and, when useful, relative or standardized units.",
    "Multiple testing, optional stopping, dependence, missingness, and selective reporting can invalidate ordinary interpretations.",
    "A professional decision uses the full interval, design quality, minimum important effect, costs, harms, and replication evidence.",
  ],

  previousLesson: {
    id: "data-ai-m02-l04",
    moduleNumber: 2,
    slug: "correlation-confounding-and-causal-claims",
    title: "Correlation, Confounding, and Causal Claims",
  },
  nextLesson: {
    id: "data-ai-m02-l06",
    moduleNumber: 2,
    slug: "statistical-visualization-and-interpretation-lab",
    title: "Statistical Visualization and Interpretation Lab",
  },

  lumineryGuidance: {
    message:
      "Report how large the effect may be and how uncertain it is before deciding whether a statistical result matters.",
    prompt:
      "Help me conduct and communicate a statistical inference. Define the population, estimand, design, primary outcome, minimum important effect, null and alternative, α, and test direction. Calculate the estimate, standard error, confidence interval, test statistic, p-value, and effect size. Check assumptions, dependence, missingness, power, stopping, and multiplicity. Then write separate statistical and practical conclusions with a decision and monitoring plan.",
    coachingQuestions: [
      "What exact population quantity or effect are you estimating?",
      "What effect size would be large enough to change the decision?",
      "What design justifies the standard error and comparison?",
      "What values remain plausible across the full confidence interval?",
      "What does the p-value mean under the null—and what does it not mean?",
      "How could dependence, missingness, optional stopping, or multiple testing change the evidence?",
      "Should the decision be adoption, rejection, staged rollout, or more data collection?",
    ],
  },
};

export default lesson05;
