const lesson01 = {
  id: "data-ai-m02-l01",
  courseId: "data-ai-foundations",
  moduleId: "data-ai-foundations-module-02",
  moduleNumber: 2,
  lessonNumber: 1,
  slug: "center-spread-shape-and-unusual-observations",
  title: "Center, Spread, Shape, and Unusual Observations",
  shortTitle: "Describing Distributions",
  subtitle:
    "Build a complete distribution profile with appropriate measures of center and spread, a description of shape, and careful investigation of unusual observations.",
  status: "available",
  duration: "110-125 minutes",
  level: "Beginner to Professional",

  essentialQuestion:
    "How can we describe a dataset accurately enough that a decision-maker understands what is typical, how much values vary, what shape the distribution has, and which observations require investigation?",
  bigIdea:
    "No single statistic tells the whole story. A defensible description combines center, spread, shape, sample size, units, context, and unusual observations—and uses measures that fit the distribution rather than hiding it.",

  whyThisLessonExists: {
    title: "An Average Is Not a Complete Analysis",
    introduction:
      "Dashboards and AI reports often begin with an average. But two groups can share the same mean while having very different variability, skewness, clusters, gaps, or extreme observations. Those differences can change operational risk and the decision that should follow.",
    centralProblem:
      "Analysts can create confident but misleading summaries by reporting center without spread, using the mean for a strongly skewed distribution, removing unusual observations without investigation, or comparing groups with different units, definitions, or populations.",
    purpose:
      "This lesson develops a complete distribution-description routine: verify the data and unit, visualize the values, select appropriate numerical summaries, investigate unusual observations, compare relevant groups, and communicate decision implications with uncertainty.",
  },

  problemFirst: {
    title: "Opening Investigation: Is Typical Robot Downtime Really 14 Minutes?",
    scenario:
      "A factory reports that the average robot downtime is 14 minutes. Most incidents last between 4 and 12 minutes, but a few last more than an hour. The maintenance manager uses the average to plan technician coverage and says the process is stable.",
    questions: [
      "What is the unit of observation: robot, incident, shift, or day?",
      "Does the mean represent a typical incident when a few values are very large?",
      "What would the median reveal that the mean may hide?",
      "How should the range, IQR, and standard deviation be interpreted?",
      "Is the distribution symmetric, skewed, uniform, bimodal, clustered, or gapped?",
      "Are long incidents errors, rare valid events, or evidence of a separate failure process?",
      "Which summary should guide staffing, safety planning, and root-cause investigation?",
    ],
    expectedInsight:
      "The mean alone cannot establish what is typical or stable. The analyst must confirm the observation unit, examine the distribution, report an appropriate center and spread, retain and investigate unusual events, and connect the summary to the operational decision.",
  },

  learningObjectives: [
    "Identify the observational unit, variable, data type, unit of measurement, population, sample, and time window.",
    "Calculate and interpret mean, median, mode, range, IQR, variance, standard deviation, and z-score.",
    "Select mean and standard deviation for approximately symmetric distributions without influential extremes.",
    "Select median and IQR for skewed distributions or distributions with influential unusual observations.",
    "Describe distribution shape using symmetry, skewness, modality, clusters, gaps, tails, and unusual values.",
    "Use visual and rule-based methods to flag unusual observations without automatically deleting them.",
    "Compare distributions using consistent definitions, units, populations, time windows, and paired measures of center and spread.",
    "Write a decision-focused statistical description that distinguishes calculation, evidence, interpretation, and action.",
  ],

  prerequisiteKnowledge: [
    "Arithmetic operations, fractions, decimals, percentages, and square roots",
    "Reading tables, dot plots, histograms, and box plots",
    "Module 1: units of analysis, data quality, baselines, KPIs, and decision framing",
    "Basic Python lists and pandas DataFrames are helpful for the computational practice",
  ],

  visualModels: [
    {
      id: "complete-distribution-profile",
      type: "comparison",
      title: "The Four-Part Distribution Profile",
      description:
        "Describe all four dimensions together. The most appropriate numerical pair depends on the shape and influence of unusual values.",
      items: [
        { label: "Center", symbol: "Mean • Median • Mode", meaning: "Locate a typical or balancing value and explain why the selected measure fits the distribution." },
        { label: "Spread", symbol: "Range • IQR • Standard deviation", meaning: "Quantify variability using a measure that matches the chosen center and decision context." },
        { label: "Shape", symbol: "Symmetry • Skew • Modality", meaning: "Describe peaks, tails, clusters, gaps, and the direction in which values extend." },
        { label: "Unusual", symbol: "Context • Fences • z-scores", meaning: "Flag observations, verify them, investigate their cause and impact, and document any treatment." },
      ],
    },
  ],

  vocabulary: [
    { term: "Distribution", definition: "The pattern of values for a variable, including where observations concentrate, how they vary, their shape, and any unusual features." },
    { term: "Observational unit", definition: "The entity represented by one row or measurement, such as one robot incident, student, transaction, patient visit, or day." },
    { term: "Center", definition: "A numerical description of a typical, central, or balancing location in a distribution." },
    { term: "Mean", definition: "The arithmetic average, found by adding all observed values and dividing by the number of observations." },
    { term: "Median", definition: "The middle ordered value, or the average of the two middle values when the number of observations is even." },
    { term: "Mode", definition: "The most frequently occurring value or category; a distribution may have one mode, multiple modes, or no unique mode." },
    { term: "Spread", definition: "The amount of variability or dispersion among observations." },
    { term: "Range", definition: "The maximum value minus the minimum value; it depends only on the two most extreme observations." },
    { term: "Quartile", definition: "A value that divides ordered data into quarters; Q1 marks about 25% and Q3 about 75% of observations at or below the value." },
    { term: "Interquartile range (IQR)", definition: "The spread of the middle 50% of ordered data, calculated as Q3 minus Q1." },
    { term: "Variance", definition: "The average squared distance from the mean, using a population or sample formula appropriate to the data-generating context." },
    { term: "Standard deviation", definition: "The typical distance of observations from the mean, expressed in the original measurement unit." },
    { term: "Shape", definition: "The overall form of a distribution, described by symmetry, skewness, modality, tails, clusters, gaps, and unusual values." },
    { term: "Skewed distribution", definition: "A distribution with a longer or heavier tail on one side; the skew direction follows the long tail." },
    { term: "Modality", definition: "The number of prominent peaks or groups in a distribution, such as unimodal or bimodal." },
    { term: "Outlier", definition: "An observation unusually far from the main pattern under a defined rule or model; it is a flag for investigation, not automatic proof of error." },
    { term: "Influential observation", definition: "A value whose inclusion or exclusion materially changes a statistic, model, or decision." },
    { term: "Robust statistic", definition: "A measure, such as the median or IQR, that is less affected by extreme observations or strong skewness." },
    { term: "z-score", definition: "The signed number of standard deviations an observation lies above or below the mean." },
    { term: "Five-number summary", definition: "Minimum, Q1, median, Q3, and maximum, used to describe ordered data and construct a box plot." },
  ],

  formulas: [
    {
      id: "mean",
      name: "Sample mean",
      formula: "x̄ = (Σxᵢ) / n",
      meaning: "The balance point of the observed values.",
      requirement: "Report the unit, sample size, population definition, and time window; examine skewness and influential values before calling the mean typical.",
    },
    {
      id: "range",
      name: "Range",
      formula: "Range = maximum − minimum",
      meaning: "The full observed span of the data.",
      requirement: "Interpret cautiously because it uses only two observations and usually grows as sample size grows.",
    },
    {
      id: "iqr",
      name: "Interquartile range",
      formula: "IQR = Q3 − Q1",
      meaning: "The width of the middle 50% of ordered observations.",
      requirement: "State the quartile convention or software when exact quartiles may differ across methods.",
    },
    {
      id: "sample-standard-deviation",
      name: "Sample standard deviation",
      formula: "s = √(Σ(xᵢ − x̄)² / (n − 1))",
      meaning: "The typical distance of sample observations from the sample mean.",
      requirement: "Use with the mean for approximately symmetric data without strongly influential extremes; distinguish sample s from population σ.",
    },
    {
      id: "z-score",
      name: "Standardized score",
      formula: "z = (x − x̄) / s",
      meaning: "Expresses an observation's location in standard-deviation units relative to the sample mean.",
      requirement: "A large |z| is a flag, not proof of error; z-scores can be misleading for strongly skewed or heavy-tailed data.",
    },
    {
      id: "outlier-fences",
      name: "1.5 × IQR outlier fences",
      formula: "Lower fence = Q1 − 1.5(IQR); Upper fence = Q3 + 1.5(IQR)",
      meaning: "Flags observations beyond robust boundaries used in a standard box plot.",
      requirement: "Investigate flagged values in context and document corrections, exclusions, transformations, or retention.",
    },
  ],

  workedExamples: [
    {
      id: "example-02-01-01",
      title: "Calculate and compare mean and median",
      problem: "Robot downtime minutes for seven incidents are 4, 5, 6, 7, 8, 10, and 58. Find the mean and median.",
      solutionSteps: [
        "Add the values: 4 + 5 + 6 + 7 + 8 + 10 + 58 = 98.",
        "Divide by n = 7: mean = 98 / 7 = 14 minutes.",
        "The ordered middle value is the fourth value: median = 7 minutes.",
        "Compare the summaries with the distribution: six of seven incidents are at or below 10 minutes.",
      ],
      answer: "Mean = 14 minutes; median = 7 minutes.",
      interpretation: "The 58-minute incident pulls the mean upward. The median better describes a typical incident, while the mean remains useful for total-resource planning when reported with the full distribution.",
    },
    {
      id: "example-02-01-02",
      title: "Calculate quartiles, IQR, and fences",
      problem: "For the ordered data 4, 5, 6, 7, 8, 10, 58, use the median-of-halves convention to calculate Q1, Q3, IQR, and outlier fences.",
      solutionSteps: [
        "Exclude the overall median 7 when splitting the odd-sized dataset.",
        "Lower half: 4, 5, 6, so Q1 = 5.",
        "Upper half: 8, 10, 58, so Q3 = 10.",
        "IQR = 10 − 5 = 5.",
        "Lower fence = 5 − 1.5(5) = −2.5; upper fence = 10 + 1.5(5) = 17.5.",
      ],
      answer: "Q1 = 5, Q3 = 10, IQR = 5, fences are −2.5 and 17.5; 58 is flagged.",
      interpretation: "The rule identifies 58 for investigation. It does not authorize deletion; the event may be a valid and important failure.",
    },
    {
      id: "example-02-01-03",
      title: "Choose matched measures from distribution shape",
      problem: "Which center-and-spread pair should summarize a strongly right-skewed repair-cost distribution?",
      solutionSteps: [
        "Identify the long right tail and potential high-cost influential values.",
        "Recognize that the mean and standard deviation are sensitive to those values.",
        "Use the median to describe central location robustly.",
        "Use the IQR to describe the middle 50% robustly.",
        "Also report the tail, maximum, and operational importance of rare large losses.",
      ],
      answer: "Use median and IQR as the primary pair, accompanied by a visual and tail-risk information.",
      interpretation: "Robust summaries improve the description of a typical case but should not erase rare costly events from risk planning.",
    },
    {
      id: "example-02-01-04",
      title: "Compare two groups without comparing center alone",
      problem: "Plant A and Plant B both have median downtime of 8 minutes. Plant A has IQR 3 minutes; Plant B has IQR 14 minutes. What can be concluded?",
      solutionSteps: [
        "Confirm both plants use the same incident definition, unit, and period.",
        "Recognize that equal medians indicate similar central location.",
        "Compare IQRs: Plant B's middle 50% is much more variable.",
        "Inspect shape, sample size, extreme events, robot mix, and maintenance process before explaining the difference.",
      ],
      answer: "The plants have similar typical downtime but Plant B has substantially less consistent incident duration.",
      interpretation: "A decision based only on median would miss operational instability that may require investigation.",
    },
    {
      id: "example-02-01-05",
      title: "Investigate an unusual observation",
      problem: "A sensor-temperature dataset contains 888°C among values near 40°C. What should the analyst do?",
      solutionSteps: [
        "Preserve the raw record and its lineage before changing anything.",
        "Verify device range, units, timestamp, calibration, schema, and missing-value codes.",
        "Check whether 888 is a sentinel code, parsing error, equipment event, or valid reading.",
        "Quantify how the value affects mean, standard deviation, charts, thresholds, and decisions.",
        "Correct, exclude, cap, transform, or retain only under a documented rule and report sensitivity.",
      ],
      answer: "Treat 888°C as an investigation flag; do not silently delete or accept it.",
      interpretation: "Unusual observations can reveal data-quality failures, rare system failures, new subgroups, fraud, safety events, or genuine scientific discovery.",
    },
  ],

  interactiveExploration: {
    title: "Construct a Complete Distribution Profile",
    description:
      "Analyze one numerical variable from your project and create a description another analyst can reproduce and a decision-owner can use.",
    instructions: [
      "Define the observational unit, variable, unit of measurement, population, sample, eligibility rules, and time window.",
      "Check missingness, duplicates, impossible values, mixed units, data types, and collection changes.",
      "Sort the values and create at least one appropriate visual such as a dot plot, histogram, or box plot.",
      "Calculate n, mean, median, mode when useful, minimum, Q1, Q3, maximum, range, IQR, and sample standard deviation.",
      "Describe symmetry or skewness, number of modes, peaks, clusters, gaps, tails, and unusual observations.",
      "Apply the IQR fences and, when appropriate, z-scores as investigation flags.",
      "Recalculate key statistics with and without an influential observation to measure sensitivity without hiding it.",
      "Choose and justify the primary center-and-spread pair.",
      "Compare at least one meaningful group using identical definitions and scales.",
      "Write the decision implication, uncertainty, limitations, and next investigation.",
    ],
    investigationQuestions: [
      "Would the conclusion change if the mean were replaced by the median?",
      "Could two subgroups be creating an apparently wide or bimodal distribution?",
      "Does the range reflect process variation or only one extreme event?",
      "Which unusual observations are influential, and are they valid?",
      "Does the visualization use bin widths or axis limits that change the story?",
      "Which summary is appropriate for a typical case, total resource demand, and worst-case planning?",
    ],
    expectedDiscovery:
      "Different decisions may require different summaries. The median can describe a typical skewed case, the mean can support total-resource planning, and tail measures can support safety or capacity planning—provided each is labeled and interpreted correctly.",
  },

  realWorldApplications: [
    { field: "Manufacturing and Robotics", application: "Profile downtime, vibration, temperature, cycle time, and repair cost; investigate multimodality by robot type, shift, product, or failure mode." },
    { field: "Education", application: "Describe assessment time, attendance, assignment completion, and growth while checking ceiling effects, missingness, subgroup distributions, and unequal access." },
    { field: "Finance", application: "Use robust summaries for transaction amounts and losses, while preserving rare large events for fraud, liquidity, and tail-risk analysis." },
    { field: "Healthcare", application: "Summarize wait times, biomarker values, treatment duration, and outcomes with clinical ranges, patient mix, measurement limits, and safety-critical extremes." },
    { field: "Microsoft Fabric and Power BI", application: "Create governed semantic measures for mean, median, percentiles, IQR, and counts; display distributions rather than KPI cards alone." },
    { field: "Machine Learning and AI", application: "Profile feature distributions, target imbalance, missingness, clipping, drift, and unusual values before training and during production monitoring." },
  ],

  aiConnection: {
    title: "Distribution Profiles Are a First Defense Against AI Failure",
    explanation:
      "Machine-learning systems learn from the distributions present in their data. Skew, rare categories, influential values, mixed populations, measurement limits, and missingness can change features, thresholds, loss functions, model evaluation, and production behavior.",
    example:
      "A predictive-maintenance feature has a low median but a long right tail. Standardizing it with a mean and standard deviation may compress most ordinary observations and allow a few extremes to dominate model fitting. The team may compare robust scaling, transformation, segmentation, and explicit tail features.",
    uses: ["Exploratory data analysis", "Feature engineering", "Robust scaling", "Anomaly detection", "Threshold design", "Drift monitoring"],
    caution:
      "An anomaly score or outlier rule cannot determine whether an observation is wrong, harmful, rare but valid, or evidence of a new process. Domain review and lineage remain necessary.",
    reflectionQuestion:
      "How could a model appear accurate overall while performing poorly in a small but operationally important tail of the distribution?",
  },

  pythonLab: {
    title: "Profile Robot Downtime with pandas",
    objective:
      "Calculate a reproducible distribution profile, flag possible outliers with the IQR rule, compare groups, and measure how one influential event changes the mean and standard deviation.",
    code: `import pandas as pd

incidents = pd.DataFrame({
    "plant": ["A", "A", "A", "A", "A", "A", "A", "B", "B", "B", "B", "B", "B", "B"],
    "downtime_min": [4, 5, 6, 7, 8, 10, 58, 5, 6, 7, 8, 9, 10, 11],
})

series = incidents["downtime_min"]
q1 = series.quantile(0.25)
q3 = series.quantile(0.75)
iqr = q3 - q1
lower_fence = q1 - 1.5 * iqr
upper_fence = q3 + 1.5 * iqr

incidents["iqr_flag"] = (
    (incidents["downtime_min"] < lower_fence)
    | (incidents["downtime_min"] > upper_fence)
)

profile = series.agg(["count", "mean", "median", "min", "max", "std"])
profile["q1"] = q1
profile["q3"] = q3
profile["iqr"] = iqr

group_profile = incidents.groupby("plant")["downtime_min"].agg(
    count="count",
    mean="mean",
    median="median",
    std="std",
    minimum="min",
    maximum="max",
)

without_flagged = incidents.loc[~incidents["iqr_flag"], "downtime_min"]

print("Overall profile:\n", profile.round(2))
print("\nIQR fences:", round(lower_fence, 2), round(upper_fence, 2))
print("\nFlagged observations:\n", incidents.loc[incidents["iqr_flag"]])
print("\nPlant comparison:\n", group_profile.round(2))
print("\nMean with all data:", round(series.mean(), 2))
print("Mean without flagged values:", round(without_flagged.mean(), 2))

assert series.notna().all()
assert (series >= 0).all()`,
    questions: [
      "What are the overall mean and median, and why do they differ?",
      "Which observation is flagged by the IQR rule?",
      "How does removing the flagged value change the mean?",
      "Why should the flagged row remain visible even when a sensitivity analysis excludes it?",
      "What additional fields—robot type, shift, failure mode, operating hours, or timestamp—would help explain the distribution?",
      "How would you add a histogram and box plot while keeping the analysis reproducible?",
    ],
    reflectionQuestions: [
      "Which statistic best represents a typical incident for staffing?",
      "Which statistic best represents total resource demand?",
      "What decision would require direct attention to the long tail rather than a central value?",
    ],
    extension:
      "Add validated failure-mode and shift fields, calculate median and IQR by group, plot distributions on the same scale, and create an investigation table for every flagged value with status, owner, cause, and resolution.",
  },

  guidedPractice: [
    { id: "gp-02-01-01", question: "Find the mean and median of 2, 3, 4, 5, 16.", answer: "Mean = 30 / 5 = 6. Median = 4. The value 16 pulls the mean above the median." },
    { id: "gp-02-01-02", question: "Which pair usually summarizes a roughly symmetric distribution without influential extremes?", answer: "Mean and standard deviation, together with sample size, unit, context, and a visual check." },
    { id: "gp-02-01-03", question: "Which pair usually summarizes a strongly skewed distribution?", answer: "Median and IQR, while also describing the tail and any operationally important extremes." },
    { id: "gp-02-01-04", question: "If Q1 = 12 and Q3 = 20, find the IQR and upper outlier fence.", answer: "IQR = 8. Upper fence = 20 + 1.5(8) = 32." },
    { id: "gp-02-01-05", question: "What does a z-score of −2 mean?", answer: "The observation is two sample standard deviations below the sample mean. Whether that is unusual depends on distribution shape and context." },
    { id: "gp-02-01-06", question: "Why is a flagged outlier not automatically deleted?", answer: "It may be valid, important, or evidence of a distinct process; deletion requires verified cause, a documented rule, and sensitivity reporting." },
  ],

  independentPractice: [
    { id: "ip-02-01-01", difficulty: "Foundational", question: "For 5, 7, 8, 8, 12, find mean, median, mode, and range.", sampleAnswer: "Mean = 8; median = 8; mode = 8; range = 12 − 5 = 7." },
    { id: "ip-02-01-02", difficulty: "Foundational", question: "Explain why the skew direction follows the long tail rather than the location of most observations.", sampleAnswer: "Skew names the direction in which relatively few values extend farther from the main concentration." },
    { id: "ip-02-01-03", difficulty: "Applied", question: "Choose and justify numerical summaries for household income in a city.", sampleAnswer: "Income is commonly right-skewed, so median and IQR are strong primary summaries; also report sample size, relevant percentiles, and the upper tail for inequality and policy analysis." },
    { id: "ip-02-01-04", difficulty: "Applied", question: "Create a complete distribution description for ten customer wait times.", sampleAnswer: "Define the observation and period, show a visual, report an appropriate center and spread, describe shape, identify unusual values, and interpret the operational implication." },
    { id: "ip-02-01-05", difficulty: "Analytical", question: "Two teams have mean task time 20 minutes. Team X has standard deviation 2; Team Y has standard deviation 12. Compare them responsibly.", sampleAnswer: "Their means match, but Team Y is much less consistent. Inspect shape, sample size, task mix, extremes, and whether standard deviation is appropriate before explaining the cause." },
    { id: "ip-02-01-06", difficulty: "Advanced", question: "Design an outlier-investigation protocol for sensor data.", sampleAnswer: "Preserve raw data and lineage; flag with transparent rules; verify units, range, timestamps, calibration, schema, and device state; assess influence; obtain domain review; document treatment; and monitor recurrence." },
    { id: "ip-02-01-07", difficulty: "Professional", question: "Audit a dashboard that reports only averages for three KPIs.", sampleAnswer: "Add denominators, sample sizes, distributions, appropriate spread, percentiles, missingness, group comparisons, unusual values, uncertainty, definitions, and decision thresholds." },
  ],

  commonMistakes: [
    { mistake: "Reporting an average without identifying the observation unit.", correction: "State what one value represents, the eligible population, measurement unit, time window, and exclusions before calculating summaries." },
    { mistake: "Using mean and median as interchangeable words for average.", correction: "Name the exact measure, show how it was calculated, and explain why it fits the distribution and decision." },
    { mistake: "Reporting center without spread.", correction: "Pair mean with standard deviation or median with IQR, and include a distribution visual." },
    { mistake: "Calling a distribution skewed without naming the direction.", correction: "Use right-skewed for a longer right tail and left-skewed for a longer left tail." },
    { mistake: "Deleting every value beyond an outlier fence.", correction: "Treat rules as flags for verification and contextual investigation; preserve lineage and report sensitivity." },
    { mistake: "Comparing groups with different definitions or exposure.", correction: "Harmonize units, populations, eligibility, time windows, missingness, and collection methods before interpreting differences." },
    { mistake: "Assuming low spread always means good performance.", correction: "A consistently poor process can have low spread; judge center, spread, target, guardrails, and context together." },
  ],

  discussionQuestions: [
    "When is the mean more decision-useful than the median even in a skewed distribution?",
    "Should rare but valid safety events be summarized with the same measures used for typical operations?",
    "How can a histogram's bin width or axis scale manipulate the apparent shape?",
    "When does a bimodal distribution suggest that two populations should be analyzed separately?",
    "Who should approve the treatment of influential observations in high-impact analyses?",
  ],

  formativeAssessment: {
    totalPoints: 25,
    passingScore: 20,
    questions: [
      { id: "check-02-01-01", type: "calculation", points: 5, prompt: "For 3, 4, 5, 6, and 22, calculate mean, median, and range.", sampleAnswer: "Mean = 40 / 5 = 8; median = 5; range = 22 − 3 = 19." },
      { id: "check-02-01-02", type: "calculation", points: 5, prompt: "If Q1 = 10 and Q3 = 18, calculate IQR and both 1.5 × IQR fences.", sampleAnswer: "IQR = 8; lower fence = 10 − 12 = −2; upper fence = 18 + 12 = 30." },
      { id: "check-02-01-03", type: "selection", points: 5, prompt: "Select and justify the primary center and spread for a strongly right-skewed repair-cost distribution.", sampleAnswer: "Use median and IQR because they are robust to high-cost extremes; also report tail information and a visual because rare large costs remain important." },
      { id: "check-02-01-04", type: "interpretation", points: 5, prompt: "Describe the four required dimensions of a complete distribution profile.", sampleAnswer: "Center, spread, shape, and unusual observations, supported by sample size, units, context, data quality, and a suitable visual." },
      { id: "check-02-01-05", type: "reasoning", points: 5, prompt: "A value is beyond the upper IQR fence. List the responsible next steps.", sampleAnswer: "Preserve it, verify lineage and validity, investigate context and cause, measure influence, consult domain owners, document any treatment, report sensitivity, and monitor recurrence." },
    ],
  },

  researchExtension: {
    title: "Investigate How One Average Can Hide Two Different Stories",
    researchQuestion:
      "Can datasets with the same center produce meaningfully different operational, social, scientific, or AI decisions because their spread, shape, or unusual observations differ?",
    applicationOptions: ["Robot downtime", "Student learning time", "Transaction amount", "Hospital wait time", "Delivery delay", "AI response latency"],
    task:
      "Find or create two datasets with similar means or medians but different variability or shape. Verify definitions, produce comparable visuals and numerical profiles, identify influential observations, and explain how the better decision changes when the full distributions are considered.",
    requiredEvidence: [
      "Source, unit, population, eligibility, and time-window documentation",
      "Raw or reproducible generated data",
      "Matched center-and-spread calculations",
      "At least two comparable distribution visuals",
      "Shape and unusual-observation analysis",
      "Sensitivity analysis and limitations",
      "Evidence-supported decision recommendation",
    ],
  },

  portfolioArtifact: {
    title: "Statistical Investigation, Part 1: Distribution Profile",
    description:
      "Create a reproducible profile for one decision-relevant numerical variable in your Data and AI Project Charter. The artifact becomes the first analytical section of the Module 2 portfolio investigation.",
    requiredSections: [
      "Decision context and question",
      "Observational unit, variable, unit, population, sample, and time window",
      "Source, collection method, eligibility, exclusions, and data-quality checks",
      "Sample size, missingness, duplicates, and impossible-value assessment",
      "Mean, median, mode when useful, five-number summary, range, IQR, variance, and standard deviation",
      "Shape, modality, clusters, gaps, tails, and unusual observations",
      "Justified primary center-and-spread pair",
      "Meaningful group comparison on consistent definitions and scales",
      "Decision implication, uncertainty, limitations, and next analysis",
    ],
    requiredEvidence: [
      "Reproducible code or calculation workbook",
      "One histogram or dot plot",
      "One box plot or five-number-summary visualization",
      "One summary-statistics table",
      "One outlier and influence investigation table",
      "One sensitivity analysis",
      "One concise findings paragraph written for a decision owner",
    ],
  },

  growthIndicators: [
    { title: "Distribution Reader", description: "You describe center, spread, shape, and unusual observations as one connected evidence story." },
    { title: "Robust Summarizer", description: "You select statistics that fit the distribution instead of choosing familiar measures automatically." },
    { title: "Anomaly Investigator", description: "You preserve, verify, contextualize, and document unusual values before deciding how to treat them." },
    { title: "Decision Communicator", description: "You translate statistical patterns into operational meaning without overstating what the data proves." },
  ],

  reflection: [
    "Which measure of center would most change the story in your current project?",
    "What type of variability matters most for the decision: ordinary spread, subgroup differences, or rare extremes?",
    "Which unusual observation might contain the most valuable information?",
    "Could an apparent outlier be evidence of a separate valid population?",
    "What definition, unit, or time-window change would make your current comparison unfair?",
    "How will you prevent one KPI average from hiding an important tail or subgroup?",
  ],

  summary: [
    "A complete distribution description includes center, spread, shape, unusual observations, sample size, units, and context.",
    "The mean is the balance point and is sensitive to influential values; the median is the ordered middle and is robust.",
    "Pair mean with standard deviation for suitable approximately symmetric data and median with IQR for skewed data or influential extremes.",
    "The range uses only the minimum and maximum, while the IQR describes the middle 50%.",
    "Standard deviation measures typical distance from the mean in the original unit.",
    "Skew direction follows the long tail; modality, clusters, and gaps can reveal mixed processes or subgroups.",
    "IQR fences and z-scores flag observations for investigation; they do not prove error or authorize deletion.",
    "Group comparisons require consistent definitions, units, eligibility, exposure, time windows, and data collection.",
    "Sensitivity analysis shows whether an observation materially changes the statistical or operational conclusion.",
    "Decision-ready analysis uses numerical summaries, visuals, domain context, data lineage, and honest limitations together.",
  ],

  previousLesson: {
    id: "data-ai-m01-l07",
    moduleNumber: 1,
    slug: "portfolio-project-one-page-data-and-ai-project-charter",
    title: "Portfolio Project: One-Page Data and AI Project Charter",
  },
  nextLesson: {
    id: "data-ai-m02-l02",
    moduleNumber: 2,
    slug: "probability-conditional-probability-and-bayes-reasoning",
    title: "Probability, Conditional Probability, and Bayes Reasoning",
  },

  lumineryGuidance: {
    message:
      "Never describe a numerical distribution with one statistic when the decision depends on variability, shape, or rare events.",
    prompt:
      "Help me audit a numerical distribution. First verify the observational unit, variable, units, population, sample, eligibility, time window, and data quality. Then calculate and compare appropriate center and spread, describe shape, investigate unusual and influential observations, compare meaningful groups fairly, and write a decision-focused conclusion with limitations.",
    coachingQuestions: [
      "What does one observation represent?",
      "Which center is typical for this shape, and why?",
      "Which spread measure matches that center?",
      "Is the distribution symmetric, skewed, clustered, gapped, or multimodal?",
      "Which observations are unusual, influential, invalid, or operationally important?",
      "Could a subgroup or collection change explain the pattern?",
      "What decision changes after seeing the complete distribution?",
    ],
  },
};

export default lesson01;
