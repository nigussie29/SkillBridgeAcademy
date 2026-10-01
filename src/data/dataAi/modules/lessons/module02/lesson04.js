const lesson04 = {
  id: "data-ai-m02-l04",
  courseId: "data-ai-foundations",
  moduleId: "data-ai-foundations-module-02",
  moduleNumber: 2,
  lessonNumber: 4,
  slug: "correlation-confounding-and-causal-claims",
  title: "Correlation, Confounding, and Causal Claims",
  shortTitle: "Correlation and Causal Claims",
  subtitle:
    "Measure relationships responsibly, identify alternative explanations, and distinguish descriptive association from evidence about cause and effect.",
  status: "available",
  duration: "120–140 minutes",
  level: "Beginner to Professional",

  essentialQuestion:
    "When two variables move together, what evidence is required before we can claim that changing one will change the other?",
  bigIdea:
    "Correlation describes a pattern in observed data; causation describes what would happen under an intervention. A credible causal claim requires a defensible design, correct time order, explicit assumptions, control of common causes, and evidence that survives alternative explanations.",

  whyThisLessonExists: {
    title: "Prediction and Explanation Are Different Jobs",
    introduction:
      "Dashboards, experiments, and AI models reveal relationships everywhere: maintenance visits correlate with failures, attendance correlates with achievement, and model alerts correlate with incidents. These patterns can be useful for prediction without proving what would happen if a decision-maker intervened.",
    centralProblem:
      "Common causes, reverse causality, selection, measurement, mediators, and colliders can create, hide, or reverse associations. Acting on an untested causal story may waste resources or harm the people and systems the analysis was intended to help.",
    purpose:
      "This lesson builds a disciplined causal-reasoning workflow: define the treatment, outcome, population, and time; visualize the relationship; measure association; draw a causal diagram; identify confounders and design choices; estimate an adjusted comparison when justified; test robustness; and communicate exactly what the evidence supports.",
  },

  problemFirst: {
    title: "Opening Investigation: Does Maintenance Cause Robot Failure?",
    scenario:
      "Across 500 factory robots, machines receiving more preventive-maintenance visits also have more downtime. A manager concludes that maintenance is causing failures and proposes reducing inspections. Older, high-load robots, however, receive more maintenance and are also more likely to fail.",
    questions: [
      "What are the exposure, outcome, observational unit, population, and time order?",
      "Does the positive correlation show that maintenance causes downtime?",
      "Which variables may be common causes of both maintenance and downtime?",
      "Could reverse causality or indication bias explain the pattern?",
      "What would a causal diagram for age, workload, maintenance, and downtime look like?",
      "Which variables should be adjusted for, and which should not?",
      "What experiment or quasi-experiment could estimate the effect of additional maintenance?",
      "What decision is justified before causal evidence is available?",
    ],
    expectedInsight:
      "The crude relationship mixes the effect of maintenance with the risk profile that triggered maintenance. Robot age and workload are plausible confounders; emerging faults may also increase both visits and later downtime. The correlation supports investigation and prediction, not the claim that reducing maintenance will reduce failures.",
  },

  learningObjectives: [
    "Distinguish association, prediction, explanation, and causal effect.",
    "Calculate and interpret covariance, Pearson correlation, Spearman rank correlation, and a simple regression slope.",
    "Recognize nonlinearity, outliers, restricted range, aggregation, and subgroup structure that can mislead correlation analysis.",
    "Identify confounders, mediators, colliders, reverse causality, selection bias, and common-cause pathways.",
    "Draw and interpret a simple directed acyclic graph for an applied decision.",
    "Compare randomized experiments, natural experiments, quasi-experiments, and observational adjustment strategies.",
    "Estimate and interpret crude, stratified, and adjusted relationships without claiming more than the design supports.",
    "Write evidence statements that separate observed association from assumptions and intervention-ready causal conclusions.",
  ],

  prerequisiteKnowledge: [
    "Fractions, percentages, averages, standard deviation, and coordinate graphs",
    "Module 2 Lesson 1: distributions, center, spread, shape, and unusual observations",
    "Module 2 Lesson 2: conditional probability and Bayes reasoning",
    "Module 2 Lesson 3: sampling frames, bias, representativeness, and weighting",
    "Module 1: decision questions, units of analysis, features, targets, actions, and data quality",
  ],

  visualModels: [
    {
      id: "causal-evidence-ladder",
      type: "lifecycle",
      title: "The Causal Evidence Ladder",
      description:
        "Move from an observed pattern to an intervention claim only by adding design evidence and making assumptions visible.",
      stages: [
        { label: "1. Observe Association", detail: "Define the variables and population, visualize the data, quantify the relationship, and inspect subgroup patterns." },
        { label: "2. Establish Time Order", detail: "Verify that the proposed cause occurs before the outcome and that measurement windows align." },
        { label: "3. Map Alternatives", detail: "Draw plausible common causes, reverse paths, mediators, colliders, selection mechanisms, and measurement errors." },
        { label: "4. Identify the Effect", detail: "Use randomization or a defensible observational strategy that blocks confounding without opening biased paths." },
        { label: "5. Test and Communicate", detail: "Check balance, overlap, sensitivity, robustness, uncertainty, transportability, and limits before recommending action." },
      ],
      feedback:
        "New domain knowledge, negative controls, experiments, or deployment outcomes should revise both the causal diagram and the decision.",
      interpretation:
        "A stronger coefficient does not move a study up the ladder. Stronger identification comes from design, assumptions, diagnostics, and evidence about interventions.",
    },
  ],

  vocabulary: [
    { term: "Association", definition: "A statistical relationship in which the distribution of one variable differs with the value of another." },
    { term: "Correlation", definition: "A standardized summary of the direction and strength of a relationship, commonly focused on linear or monotonic patterns." },
    { term: "Covariance", definition: "A scale-dependent measure of whether two variables tend to deviate from their means in the same or opposite directions." },
    { term: "Pearson correlation", definition: "A value from −1 to 1 describing the strength and direction of a linear relationship between two numerical variables." },
    { term: "Spearman correlation", definition: "A rank-based value from −1 to 1 describing the strength and direction of a monotonic relationship." },
    { term: "Causal effect", definition: "The difference in an outcome that would occur under two alternative interventions for the same target population." },
    { term: "Treatment or exposure", definition: "The intervention, condition, policy, behavior, or input whose effect is being studied." },
    { term: "Outcome", definition: "The response or result that may change because of the treatment or exposure." },
    { term: "Potential outcome", definition: "The outcome a unit would experience under a specified treatment condition, whether or not that condition was actually observed." },
    { term: "Counterfactual", definition: "The unobserved alternative outcome for the same unit under a different treatment or exposure." },
    { term: "Confounder", definition: "A pre-exposure common cause of both the treatment and outcome that can distort their observed association." },
    { term: "Lurking variable", definition: "An unmeasured or unexamined variable that helps explain an observed relationship." },
    { term: "Reverse causality", definition: "A situation in which the proposed outcome influences the proposed cause, rather than only the other way around." },
    { term: "Mediator", definition: "A variable on the causal pathway through which a treatment produces part of its effect on an outcome." },
    { term: "Collider", definition: "A variable caused by two other variables; conditioning on it can create a noncausal association between its causes." },
    { term: "Directed acyclic graph", definition: "A diagram of assumed causal relationships using directed arrows and no directed cycles, often abbreviated DAG." },
    { term: "Backdoor path", definition: "A noncausal path from treatment to outcome that begins with an arrow entering the treatment and can transmit confounding." },
    { term: "Randomized experiment", definition: "A study in which treatment is assigned by chance so measured and unmeasured pre-treatment causes are balanced on average." },
    { term: "Observational study", definition: "A study that observes exposures and outcomes without random assignment by the researcher." },
    { term: "Natural experiment", definition: "A setting where an external process creates treatment variation that may approximate random assignment under defensible assumptions." },
    { term: "Quasi-experiment", definition: "A nonrandomized design using timing, thresholds, comparison groups, or external variation to estimate causal effects." },
    { term: "Adjustment", definition: "A design or analysis method used to compare treated and untreated units at similar levels of justified pre-treatment confounders." },
    { term: "Simpson's paradox", definition: "A reversal or disappearance of an aggregate association after data are separated into relevant subgroups." },
    { term: "Identification assumption", definition: "An untestable or partly testable condition connecting observed data to a causal quantity, such as no unmeasured confounding." },
  ],

  formulas: [
    {
      id: "covariance",
      name: "Sample covariance",
      formula: "sxy = Σ[(xᵢ − x̄)(yᵢ − ȳ)] / (n − 1)",
      meaning: "Positive covariance indicates same-direction variation; negative covariance indicates opposite-direction variation.",
      requirement: "Covariance depends on measurement units and can be dominated by outliers; inspect the scatterplot first.",
    },
    {
      id: "pearson-correlation",
      name: "Pearson correlation",
      formula: "r = sxy / (sₓsᵧ)",
      meaning: "Standardizes covariance to measure linear association from −1 to 1.",
      requirement: "A value near zero does not rule out a nonlinear relationship, and any value can be distorted by outliers or mixed groups.",
    },
    {
      id: "spearman-correlation",
      name: "Spearman rank correlation without ties",
      formula: "ρs = 1 − [6Σdᵢ² / n(n² − 1)]",
      meaning: "Measures monotonic association by comparing ranks rather than raw values.",
      requirement: "Use appropriate tie handling in software and inspect whether the relationship is meaningfully monotonic.",
    },
    {
      id: "regression-slope",
      name: "Simple least-squares slope",
      formula: "b₁ = r(sᵧ / sₓ)",
      meaning: "Describes the estimated change in Y associated with a one-unit increase in X in a simple linear model.",
      requirement: "The word associated is essential unless the design and assumptions justify a causal interpretation.",
    },
    {
      id: "partial-correlation",
      name: "Partial correlation controlling Z",
      formula: "rxy·z = (rxy − rxz ryz) / √[(1 − rxz²)(1 − ryz²)]",
      meaning: "Summarizes the linear association between X and Y remaining after linearly accounting for Z.",
      requirement: "Controlling a variable is not automatically valid; Z must be selected from a defensible causal model, not only statistical significance.",
    },
    {
      id: "standardization",
      name: "Standardized adjusted mean",
      formula: "E[Y | do(X = x)] = Σz E[Y | X = x, Z = z]P(Z = z)",
      meaning: "Combines outcome estimates within confounder strata using a common target-population distribution.",
      requirement: "Requires consistency, positivity, exchangeability given Z, correct measurement, and an adequate model or sufficient data within strata.",
    },
    {
      id: "average-treatment-effect",
      name: "Average treatment effect",
      formula: "ATE = E[Y(1) − Y(0)]",
      meaning: "Defines the average difference between each unit's potential outcome under treatment and under control.",
      requirement: "Both potential outcomes cannot be observed for the same unit; study design and assumptions are needed to estimate the ATE.",
    },
  ],

  workedExamples: [
    {
      id: "example-02-04-01",
      title: "Interpret a strong correlation without claiming causation",
      problem: "Robot age and annual downtime have r = 0.78. What does this establish?",
      solutionSteps: [
        "The sign is positive: older robots tend to have more downtime.",
        "The magnitude indicates a strong linear association in the observed sample.",
        "Check the scatterplot, outliers, subgroup structure, measurement definitions, and range of ages.",
        "List alternatives such as workload, robot model, maintenance policy, plant, and survivorship.",
      ],
      answer: "The data show a strong positive linear association; they do not by themselves establish that age causes the measured increase in downtime.",
      interpretation: "Age may be part of a causal mechanism, a proxy for other conditions, or both. A causal estimate requires a clearly defined comparison and identification strategy.",
    },
    {
      id: "example-02-04-02",
      title: "Calculate Pearson correlation",
      problem: "For X = [1, 2, 3, 4] and Y = [2, 3, 5, 4], calculate the sample covariance and Pearson correlation.",
      solutionSteps: [
        "Calculate x̄ = 2.5 and ȳ = 3.5.",
        "The cross-products of deviations are 2.25, 0.25, 0.75, and 0.75; their sum is 4.",
        "Sample covariance is 4 / (4 − 1) = 1.333.",
        "Both sample standard deviations are √(5/3) ≈ 1.291.",
        "r = 1.333 / (1.291 × 1.291) = 0.80.",
      ],
      answer: "The sample covariance is approximately 1.333 and Pearson r = 0.80.",
      interpretation: "The four observations have a strong positive linear association, but the small sample and descriptive calculation do not establish a causal effect.",
    },
    {
      id: "example-02-04-03",
      title: "Expose confounding with stratification",
      problem: "Maintained robots have 12% downtime and less-maintained robots have 8%. Within both old and new robot groups, maintained robots have lower downtime. Explain the reversal.",
      solutionSteps: [
        "Separate robots by age before comparing maintenance groups.",
        "Older robots have higher baseline downtime and receive maintenance more often.",
        "The crude 12% versus 8% comparison overrepresents old high-risk robots in the maintained group.",
        "Within-age comparisons better isolate maintenance from age, assuming other important confounders are addressed.",
      ],
      answer: "Robot age confounds the crude association and can produce Simpson's paradox.",
      interpretation: "Aggregation can reverse the sign of a relationship. Report both the causal rationale for stratification and the adjusted result.",
    },
    {
      id: "example-02-04-04",
      title: "Decide whether to adjust for a mediator or collider",
      problem: "Training affects operator skill, which affects errors. Both workload and equipment failure affect whether an incident is investigated. Which variables should be controlled?",
      solutionSteps: [
        "Operator skill is a mediator on the path Training → Skill → Errors.",
        "Adjusting for skill removes part of the total training effect.",
        "Investigation is a collider on Workload → Investigation ← Equipment Failure.",
        "Restricting analysis to investigated incidents can create an artificial association between workload and equipment failure.",
      ],
      answer: "Do not adjust for the mediator when estimating the total effect, and avoid conditioning on the collider unless a justified method addresses the resulting selection.",
      interpretation: "Variable selection must follow the estimand and causal diagram; more controls can increase bias.",
    },
    {
      id: "example-02-04-05",
      title: "Design a randomized maintenance experiment",
      problem: "A factory wants the effect of an additional monthly inspection on 90-day downtime.",
      solutionSteps: [
        "Define eligible robots, the added-inspection protocol, usual-care control, outcome, and 90-day follow-up.",
        "Randomize eligible robots or operationally independent clusters before treatment.",
        "Check adherence, contamination, missing outcomes, safety, and baseline balance.",
        "Compare mean downtime by assigned group using intention-to-treat analysis.",
        "Report uncertainty, harms, costs, and whether results apply to other plants or robot types.",
      ],
      answer: "Random assignment supports a causal estimate of offering the additional inspection under the study protocol.",
      interpretation: "Randomization protects internal validity on average, but implementation, attrition, interference, and generalizability still require evaluation.",
    },
    {
      id: "example-02-04-06",
      title: "Write an honest observational conclusion",
      problem: "After adjustment for robot age, model, plant, load, and prior faults, additional maintenance is associated with 2.1 fewer downtime hours, 95% CI [0.8, 3.4]. Write the conclusion.",
      solutionSteps: [
        "State the population, time period, treatment definition, outcome, and adjustment set.",
        "Report the adjusted estimate and interval.",
        "Use association language because treatment was not randomized.",
        "Name residual confounding, measurement, overlap, and selection limitations.",
        "Recommend a trial or quasi-experimental validation before policy change.",
      ],
      answer: "Among observed eligible robots, additional maintenance was associated with 2.1 fewer downtime hours after stated adjustment; unmeasured confounding prevents a definitive causal claim.",
      interpretation: "Quantitative precision does not replace design validity. The conclusion separates the estimate from the assumptions needed for causality.",
    },
  ],

  interactiveExploration: {
    title: "Build and Challenge a Causal Diagram",
    description:
      "Create a DAG for the robot-maintenance question, then test how different adjustment choices change the claim.",
    instructions: [
      "Define one treatment, one outcome, the target population, and the intervention time.",
      "Place only pre-treatment variables before the treatment and post-treatment variables after it.",
      "Add arrows using domain knowledge about direct causes rather than observed correlations alone.",
      "Mark every common cause of treatment and outcome.",
      "Identify mediators on the intended causal pathway.",
      "Identify colliders and selection variables caused by two or more variables.",
      "Trace every open backdoor path from treatment to outcome.",
      "Choose the smallest sufficient pre-treatment adjustment set that blocks those paths without opening collider paths.",
      "List important unmeasured causes and propose sensitivity checks or new data collection.",
      "Write separate descriptive, predictive, and causal questions for the same diagram.",
    ],
    investigationQuestions: [
      "Which arrows are supported by time order and domain knowledge?",
      "Could an early symptom cause both treatment and the later outcome?",
      "Which variable is a mediator if the goal is the total effect?",
      "Which selection rule could create collider bias?",
      "Where might positivity fail because some robots always receive one treatment?",
      "What experiment or quasi-experiment would make the causal claim more credible?",
    ],
    expectedDiscovery:
      "The correct adjustment set depends on the causal question and assumed graph. Blindly controlling every available variable can block real effects, introduce collider bias, or hide lack of overlap.",
  },

  realWorldApplications: [
    { field: "Manufacturing and Robotics", application: "Separate the effect of maintenance or operating settings from age, workload, robot model, plant policy, and emerging faults." },
    { field: "Education", application: "Distinguish the association between tutoring and achievement from selection into tutoring, prior performance, attendance, and opportunity to learn." },
    { field: "Healthcare", application: "Address confounding by indication when sicker patients receive stronger treatment and also have worse outcomes." },
    { field: "Business and Marketing", application: "Estimate incremental campaign impact rather than attributing all purchases by targeted customers to the campaign." },
    { field: "Public Policy", application: "Use phased rollouts, eligibility thresholds, comparison trends, and transparent assumptions to evaluate programs." },
    { field: "Machine Learning and AI", application: "Recognize that predictive features may be consequences, proxies, or colliders and may fail when interventions change the data-generating process." },
  ],

  aiConnection: {
    title: "A Predictive Feature Is Not Automatically a Causal Lever",
    explanation:
      "Machine-learning models optimize prediction from patterns in observed data. A high feature importance or SHAP value describes model behavior under the recorded distribution; it does not show that changing the feature will change the outcome. Some features are consequences of risk, proxies for unmeasured causes, or artifacts of selection.",
    example:
      "A model learns that emergency inspections strongly predict robot failure. Automatically reducing inspections because they are associated with failure would be dangerous: inspections are triggered by warning signs, and they may prevent even more severe failures.",
    uses: ["Policy evaluation", "Uplift modeling", "Treatment-effect estimation", "Causal feature design", "Fairness analysis", "Intervention simulation", "Feedback-loop monitoring"],
    caution:
      "Causal machine learning still depends on human-defined treatments, outcomes, populations, timing, graphs, overlap, and identification assumptions. Flexible algorithms do not make unmeasured confounding disappear.",
    reflectionQuestion:
      "Which high-importance feature in your project is actionable, and what evidence shows that intervening on it would improve the outcome?",
  },

  pythonLab: {
    title: "Reveal Confounding in Robot Maintenance Data",
    objective:
      "Simulate a common-cause structure, compare crude and stratified correlations, fit an adjusted linear model, and explain why the unadjusted relationship reverses.",
    code: `import numpy as np
import pandas as pd

rng = np.random.default_rng(42)
n = 1200

robots = pd.DataFrame({
    "robot_age_years": rng.uniform(1, 12, n),
    "high_load": rng.binomial(1, 0.45, n),
})

# Older and high-load robots receive more maintenance.
robots["maintenance_visits"] = (
    1.0
    + 0.32 * robots["robot_age_years"]
    + 0.90 * robots["high_load"]
    + rng.normal(0, 0.70, n)
).clip(lower=0)

# Maintenance reduces downtime, but age and load increase it.
robots["downtime_hours"] = (
    7.0
    + 2.2 * robots["robot_age_years"]
    + 5.0 * robots["high_load"]
    - 1.8 * robots["maintenance_visits"]
    + rng.normal(0, 3.0, n)
).clip(lower=0)

crude_correlation = robots[
    ["maintenance_visits", "downtime_hours"]
].corr().iloc[0, 1]

robots["age_group"] = pd.cut(
    robots["robot_age_years"],
    bins=[0, 4, 8, 12],
    labels=["newer", "midlife", "older"],
    include_lowest=True,
)

within_group = robots.groupby(
    "age_group", observed=True
)[["maintenance_visits", "downtime_hours"]].apply(
    lambda g: g["maintenance_visits"].corr(g["downtime_hours"])
)

# Fit downtime = intercept + maintenance + age + high_load.
X = np.column_stack([
    np.ones(n),
    robots["maintenance_visits"],
    robots["robot_age_years"],
    robots["high_load"],
])
y = robots["downtime_hours"].to_numpy()
coefficients = np.linalg.lstsq(X, y, rcond=None)[0]

results = pd.Series(
    coefficients,
    index=["intercept", "maintenance", "age", "high_load"],
)

print("Crude maintenance-downtime correlation:", round(crude_correlation, 3))
print("\\nCorrelation within age groups:\\n", within_group.round(3))
print("\\nAdjusted linear-model coefficients:\\n", results.round(3))

assert len(robots) == n
assert robots[["maintenance_visits", "downtime_hours"]].notna().all().all()
assert crude_correlation > 0
assert results["maintenance"] < 0`,
    questions: [
      "Why is the crude maintenance-downtime correlation positive?",
      "What happens to the relationship within narrower age groups?",
      "How should the adjusted maintenance coefficient be interpreted?",
      "Which causal arrows were encoded in the simulation?",
      "Why does correct adjustment require high_load as well as age?",
      "Which real-world variables could still confound an observational maintenance study?",
    ],
    reflectionQuestions: [
      "Would adding every recorded variable to the model improve causal validity?",
      "How could emerging fault symptoms create reverse causality?",
      "What randomized or quasi-experimental design would strengthen the evidence?",
    ],
    extension:
      "Add a post-maintenance sensor score as a mediator and an investigated-incident indicator as a collider. Compare estimates after controlling for each, draw the DAG, and explain why the target estimand changes.",
  },

  guidedPractice: [
    { id: "gp-02-04-01", question: "What does r = −0.65 say about two numerical variables?", answer: "They have a moderately strong negative linear association in the observed data; it does not establish causation." },
    { id: "gp-02-04-02", question: "Why can Pearson r be near zero even when X strongly determines Y?", answer: "The relationship may be nonlinear or symmetric, such as Y = X² over values centered around zero." },
    { id: "gp-02-04-03", question: "A third variable causes both X and Y. What role does it play?", answer: "It is a confounder or common cause and can create or distort the observed X–Y association." },
    { id: "gp-02-04-04", question: "Should a mediator be controlled when estimating a total effect?", answer: "Generally no, because adjustment blocks part of the treatment's total causal pathway." },
    { id: "gp-02-04-05", question: "What key advantage does random assignment provide?", answer: "It makes treatment independent of pre-treatment causes on average, supporting exchangeable group comparisons." },
    { id: "gp-02-04-06", question: "Rewrite 'maintenance reduced downtime' for a nonrandomized study.", answer: "After stated adjustment, additional maintenance was associated with lower downtime; residual confounding prevents a definitive causal conclusion." },
  ],

  independentPractice: [
    { id: "ip-02-04-01", difficulty: "Foundational", question: "Distinguish association, prediction, and causal effect using one student-support example.", sampleAnswer: "Association describes observed co-movement; prediction estimates which students may need help; causal effect asks how outcomes would change if support were assigned versus not assigned." },
    { id: "ip-02-04-02", difficulty: "Foundational", question: "Describe three scatterplots that could have the same Pearson correlation but different practical meanings.", sampleAnswer: "A clean linear cloud, a cloud driven by one outlier, and two separated subgroups can share r while implying different structures and decisions." },
    { id: "ip-02-04-03", difficulty: "Applied", question: "Draw a DAG for workload, maintenance, sensor alerts, and downtime.", sampleAnswer: "A defensible graph may include workload → maintenance, workload → downtime, emerging risk → alerts, emerging risk → maintenance, maintenance → downtime, and alerts → maintenance." },
    { id: "ip-02-04-04", difficulty: "Applied", question: "Explain reverse causality in the relationship between medical treatment intensity and poor outcomes.", sampleAnswer: "Worsening illness may trigger stronger treatment and also predict poor outcomes, making treatment appear harmful without adequate design." },
    { id: "ip-02-04-05", difficulty: "Analytical", question: "An aggregate trend disappears within every plant. What should be investigated?", sampleAnswer: "Plant composition, baseline risks, treatment policies, measurement, weights, within-plant overlap, and whether plant is a confounder or modifier." },
    { id: "ip-02-04-06", difficulty: "Advanced", question: "Design a difference-in-differences evaluation for a phased maintenance policy.", sampleAnswer: "Use comparable treated and not-yet-treated plants, pre/post outcomes, a parallel-trends assessment, event-time plots, contamination checks, clustered uncertainty, and sensitivity to simultaneous changes." },
    { id: "ip-02-04-07", difficulty: "Professional", question: "Audit a dashboard that labels highly correlated KPIs as 'drivers.'", sampleAnswer: "Separate descriptive correlation from intervention evidence, examine time order and common causes, replace causal labels, document design and assumptions, and propose experiments for actionable candidates." },
  ],

  commonMistakes: [
    { mistake: "Saying correlation proves causation.", correction: "Treat correlation as descriptive evidence and require a causal design, temporal order, assumptions, and alternative-explanation checks." },
    { mistake: "Assuming a small correlation means no important relationship.", correction: "Inspect nonlinearity, range restriction, subgroup effects, measurement reliability, and practical impact." },
    { mistake: "Relying on a coefficient without viewing the data.", correction: "Use scatterplots, subgroup displays, time plots, residuals, and outlier diagnostics before summarizing." },
    { mistake: "Controlling every available variable.", correction: "Choose variables from the causal question and DAG; avoid post-treatment mediators, colliders, instruments, and redundant proxies unless the estimand requires them." },
    { mistake: "Using prediction accuracy as proof of intervention value.", correction: "A predictor can forecast outcomes accurately while being unsafe or ineffective to manipulate." },
    { mistake: "Calling an adjusted observational estimate unbiased.", correction: "State the measured adjustment set and discuss unmeasured confounding, positivity, specification, selection, and measurement assumptions." },
    { mistake: "Generalizing one causal effect to every setting.", correction: "Evaluate population, implementation, context, heterogeneity, interference, and transportability before applying results elsewhere." },
  ],

  discussionQuestions: [
    "When is an association strong enough to justify action even without a proven causal effect?",
    "Can an ethically impossible experiment still support a credible causal conclusion?",
    "Why might a company prefer a predictive model when leaders are asking a causal question?",
    "Who should approve the assumptions represented in a causal diagram?",
    "How should causal uncertainty be communicated when the decision cannot wait?",
  ],

  formativeAssessment: {
    totalPoints: 30,
    passingScore: 24,
    questions: [
      { id: "check-02-04-01", type: "interpretation", points: 5, prompt: "Interpret r = 0.72 without making a causal claim.", sampleAnswer: "The variables have a strong positive linear association in the observed population and period, subject to data quality, outliers, range, and subgroup structure." },
      { id: "check-02-04-02", type: "reasoning", points: 5, prompt: "Explain how robot age could confound maintenance and downtime.", sampleAnswer: "Age can increase both maintenance assignment and downtime risk, creating a backdoor path Maintenance ← Age → Downtime." },
      { id: "check-02-04-03", type: "diagram", points: 5, prompt: "Distinguish a confounder, mediator, and collider using arrows.", sampleAnswer: "Confounder: X ← Z → Y; mediator: X → M → Y; collider: X → C ← Y." },
      { id: "check-02-04-04", type: "design", points: 5, prompt: "Name three requirements beyond random assignment for a trustworthy experiment.", sampleAnswer: "Examples include adherence, low differential attrition, valid outcome measurement, no harmful interference, adequate power, protocol fidelity, and representative eligibility." },
      { id: "check-02-04-05", type: "comparison", points: 5, prompt: "Why can an adjusted regression still fail to estimate a causal effect?", sampleAnswer: "It may omit confounders, adjust the wrong variables, lack overlap, mismeasure variables, use a misspecified model, or analyze a selected sample." },
      { id: "check-02-04-06", type: "communication", points: 5, prompt: "Write a causal-caution paragraph for an observational result.", sampleAnswer: "State the observed association, population, timing, adjustment set, uncertainty, alternative explanations, identification assumptions, scope limits, and the experiment or robustness evidence still needed." },
    ],
  },

  researchExtension: {
    title: "Audit a Causal Claim in Data, Business, or AI",
    researchQuestion:
      "What design and assumptions support a published claim that changing one variable will improve an outcome?",
    applicationOptions: ["Predictive maintenance", "Student intervention", "Healthcare treatment", "Marketing campaign", "Public policy", "AI recommendation system"],
    task:
      "Choose one causal claim from a report, article, dashboard, experiment, or model proposal. Reconstruct the treatment, outcome, population, time order, DAG, design, adjustment strategy, diagnostics, and limitations, then rewrite the claim at the strongest level the evidence supports.",
    requiredEvidence: [
      "Original causal statement and decision it may influence",
      "Treatment, outcome, unit, population, timing, and estimand",
      "Causal diagram with confounders, mediators, colliders, and selection",
      "Study-design classification and comparison strategy",
      "Association or effect estimate with uncertainty",
      "Assessment of identification assumptions and robustness",
      "Rewritten claim and recommended next evidence step",
    ],
  },

  portfolioArtifact: {
    title: "Statistical Investigation, Part 4: Causal Claim Audit",
    description:
      "Extend your Module 2 investigation by separating descriptive findings from causal questions and designing a credible next test for one actionable relationship.",
    requiredSections: [
      "Decision question, treatment, outcome, unit, population, intervention time, and follow-up window",
      "Descriptive visualization and crude association",
      "Domain-informed DAG with documented arrow rationale",
      "Confounders, reverse causality, mediators, colliders, selection, and measurement risks",
      "Target causal estimand and hypothetical intervention",
      "Preferred randomized, quasi-experimental, or observational identification strategy",
      "Adjustment set and variables intentionally excluded",
      "Balance, overlap, trend, falsification, and sensitivity diagnostics",
      "Descriptive conclusion, causal assumptions, and decision recommendation",
      "Next experiment or data-collection improvement",
    ],
    requiredEvidence: [
      "One labeled scatterplot or subgroup relationship figure",
      "One causal DAG",
      "Crude and adjusted comparison table",
      "Reproducible code or spreadsheet calculation",
      "One robustness or sensitivity analysis",
      "One causal-caution paragraph",
      "One intervention-ready research design",
    ],
  },

  growthIndicators: [
    { title: "Association Analyst", description: "You visualize and quantify relationships while checking form, outliers, groups, scale, and measurement." },
    { title: "Causal Mapper", description: "You translate domain knowledge into explicit treatment, outcome, timing, and causal pathways." },
    { title: "Design Critic", description: "You evaluate randomization, comparison groups, overlap, assumptions, diagnostics, and alternative explanations." },
    { title: "Claim Steward", description: "You match causal language and recommended action to the strongest evidence the study truly supports." },
  ],

  reflection: [
    "Which relationship in your current project is being described as a driver without intervention evidence?",
    "What common cause could explain both the proposed treatment and outcome?",
    "Could the outcome or an early symptom influence the treatment?",
    "Which variable might be a mediator or collider rather than a confounder?",
    "What causal assumption would be hardest to defend to a skeptical reviewer?",
    "What is the smallest feasible experiment or quasi-experiment that would improve the decision?",
  ],

  summary: [
    "Association describes observed co-movement; causation describes a contrast between interventions.",
    "Pearson correlation summarizes linear association, while Spearman correlation summarizes monotonic rank association.",
    "Correlation can be distorted by outliers, nonlinearity, restricted range, aggregation, subgroup mixing, and measurement error.",
    "A confounder is a pre-treatment common cause of the treatment and outcome.",
    "Reverse causality occurs when the proposed outcome or its early symptoms influence the proposed cause.",
    "Mediators transmit effects, while conditioning on colliders can create spurious associations.",
    "A DAG makes causal assumptions visible and helps identify defensible adjustment sets.",
    "Randomization supports causal comparison on average, but implementation, attrition, measurement, interference, and transportability still matter.",
    "Adjusted observational estimates require explicit no-unmeasured-confounding, overlap, consistency, and modeling assumptions.",
    "Predictive importance does not prove that a feature is a safe or effective intervention target.",
    "Professional communication separates descriptive results, causal assumptions, uncertainty, limitations, and the next evidence step.",
  ],

  previousLesson: {
    id: "data-ai-m02-l03",
    moduleNumber: 2,
    slug: "sampling-bias-and-representative-evidence",
    title: "Sampling, Bias, and Representative Evidence",
  },
  nextLesson: {
    id: "data-ai-m02-l05",
    moduleNumber: 2,
    slug: "confidence-intervals-hypothesis-tests-and-effect-size",
    title: "Confidence Intervals, Hypothesis Tests, and Effect Size",
  },

  lumineryGuidance: {
    message:
      "Before calling a relationship a driver, ask what intervention, comparison, and assumptions make the causal claim identifiable.",
    prompt:
      "Help me audit a causal claim. Define the treatment, outcome, unit, population, timing, intervention, and estimand. Visualize the association, draw a DAG, identify confounders, reverse causality, mediators, colliders, selection, and measurement problems. Recommend a randomized, quasi-experimental, or observational identification strategy, specify diagnostics and sensitivity tests, and rewrite the conclusion at the strongest level the evidence supports.",
    coachingQuestions: [
      "What exact intervention is being compared with what alternative?",
      "Does the proposed cause clearly occur before the outcome?",
      "Which pre-treatment variables cause both treatment and outcome?",
      "Are any proposed controls actually mediators or colliders?",
      "Do treated and untreated units overlap enough for a fair comparison?",
      "Which unmeasured cause could overturn the estimate?",
      "What evidence would justify moving from association language to a causal recommendation?",
    ],
  },
};

export default lesson04;
