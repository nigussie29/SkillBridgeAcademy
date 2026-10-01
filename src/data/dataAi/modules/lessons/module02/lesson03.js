const lesson03 = {
  id: "data-ai-m02-l03",
  courseId: "data-ai-foundations",
  moduleId: "data-ai-foundations-module-02",
  moduleNumber: 2,
  lessonNumber: 3,
  slug: "sampling-bias-and-representative-evidence",
  title: "Sampling, Bias, and Representative Evidence",
  shortTitle: "Sampling and Representative Evidence",
  subtitle:
    "Design samples that support trustworthy conclusions, diagnose how evidence becomes biased, and state clearly which population the data can represent.",
  status: "available",
  duration: "120–140 minutes",
  level: "Beginner to Professional",

  essentialQuestion:
    "How can we collect evidence from part of a population and make conclusions that are credible for the people, systems, places, and times we care about?",
  bigIdea:
    "A large dataset is not automatically representative. Trustworthy inference depends on a clearly defined target population, an adequate sampling frame, a defensible selection process, strong participation, valid measurement, and transparent analysis of who is missing.",

  whyThisLessonExists: {
    title: "More Data Does Not Automatically Mean Better Evidence",
    introduction:
      "Data and AI projects often analyze the records that are easiest to obtain: customers who responded, machines with connected sensors, students who completed an assessment, or patients who returned for follow-up. Those records may be numerous and still systematically differ from the population behind the decision.",
    centralProblem:
      "When the sampling frame excludes important groups, participation depends on the outcome, measurements differ across groups, or analysts ignore unequal selection probabilities, an estimate can be precise but wrong. Machine-learning systems then reproduce the same evidence gaps at scale.",
    purpose:
      "This lesson builds an evidence-design workflow: define the target population and unit, audit the sampling frame, choose a probability-based design when feasible, track recruitment and nonresponse, compare the sample with known population benchmarks, apply justified weights, and limit claims to the evidence actually collected.",
  },

  problemFirst: {
    title: "Opening Investigation: Can One Plant Represent the Whole Network?",
    scenario:
      "A manufacturer operates 1,000 robots: 600 in Plant A, 300 in Plant B, and 100 in Plant C. Plant C recently installed advanced sensors and reports the easiest data access. An analyst studies 80 Plant C robots, finds a 20% fault rate, and recommends planning for 200 failures across the network.",
    questions: [
      "What is the target population and what is one observational unit?",
      "Which robots are included in the available sampling frame?",
      "Why might Plant C differ from Plants A and B?",
      "Does increasing the Plant C sample size repair the coverage problem?",
      "What sampling design would represent all three plants?",
      "Should each plant contribute the same number or a population-proportional number of robots?",
      "What conclusion is justified if only Plant C data can be obtained?",
    ],
    expectedInsight:
      "The 80 observations may estimate Plant C accurately, but they cannot automatically represent the network. Plant, robot model, workload, sensor coverage, maintenance practice, and product mix may affect both selection and faults. A stratified design across all plants—or a claim limited explicitly to Plant C—is more defensible.",
  },

  learningObjectives: [
    "Distinguish a target population, accessible population, sampling frame, sample, parameter, and statistic.",
    "Explain why sample size cannot correct systematic undercoverage or selection bias.",
    "Compare census, simple random, systematic, stratified, cluster, convenience, and voluntary-response designs.",
    "Select a sampling design that fits the population structure, decision, cost, and operational constraints.",
    "Calculate sampling fractions, response rates, sample proportions, weighted estimates, and approximate standard errors.",
    "Diagnose undercoverage, nonresponse, selection, response, measurement, survivorship, and time-window bias.",
    "Audit representativeness using benchmarks, subgroup comparisons, missingness patterns, and sensitivity analysis.",
    "Write conclusions whose scope matches the population, frame, selection process, measurement, and uncertainty.",
  ],

  prerequisiteKnowledge: [
    "Fractions, proportions, percentages, weighted averages, and square roots",
    "Reading tables, distributions, and group comparisons",
    "Module 2 Lesson 1: center, spread, shape, and unusual observations",
    "Module 2 Lesson 2: probability, conditional probability, and base rates",
    "Module 1: decision framing, units of analysis, data quality, KPIs, and governance",
  ],

  visualModels: [
    {
      id: "representative-evidence-chain",
      type: "lifecycle",
      title: "The Representative Evidence Chain",
      description:
        "Each link can narrow or distort the evidence. A strong analysis documents the losses between the population of interest and the final analytic dataset.",
      stages: [
        { label: "1. Target Population", detail: "Define exactly who or what the decision concerns, including place, eligibility, and time." },
        { label: "2. Sampling Frame", detail: "Identify the operational list or process that can actually reach eligible units and audit omissions or duplicates." },
        { label: "3. Selection", detail: "Use a documented design with known or defensible inclusion probabilities whenever possible." },
        { label: "4. Participation", detail: "Track contact, eligibility, response, refusal, failure, and reasons for missing data by relevant group." },
        { label: "5. Analytic Sample", detail: "Validate measurements, apply justified weights, quantify uncertainty, and limit claims to supported populations." },
      ],
      feedback:
        "Compare the analytic sample with population benchmarks, investigate every major loss, and revise future collection when gaps appear.",
      interpretation:
        "Representativeness is evidence about a process, not a visual impression or a large row count. Every inference inherits the strengths and weaknesses of this chain.",
    },
  ],

  vocabulary: [
    { term: "Target population", definition: "The complete group of people, objects, events, locations, or time periods to which the study intends to generalize." },
    { term: "Accessible population", definition: "The portion of the target population that the study can realistically reach under current systems and constraints." },
    { term: "Sampling frame", definition: "The operational list, registry, database, map, or process from which units can be selected." },
    { term: "Observational unit", definition: "The entity represented by one selected record, such as one robot, shift, customer, student, transaction, or patient." },
    { term: "Census", definition: "An attempt to collect data from every unit in the defined population; it can still suffer from missingness and measurement error." },
    { term: "Sample", definition: "The subset of population units selected or observed for analysis." },
    { term: "Parameter", definition: "A numerical characteristic of a population, usually unknown, such as the true network fault proportion." },
    { term: "Statistic", definition: "A numerical summary calculated from a sample and used to estimate or describe a population parameter." },
    { term: "Probability sample", definition: "A sample selected through a random mechanism with known or defensible inclusion probabilities." },
    { term: "Simple random sample", definition: "A probability sample in which every possible sample of the specified size has an equal chance of selection." },
    { term: "Systematic sample", definition: "A design that selects every kth unit after a random start, provided the ordering does not create harmful periodic patterns." },
    { term: "Stratified sample", definition: "A design that divides the population into important subgroups and samples within every subgroup." },
    { term: "Cluster sample", definition: "A design that randomly selects naturally occurring groups and studies all or some units within selected groups." },
    { term: "Convenience sample", definition: "A nonprobability sample formed from units that are easiest to reach, access, or measure." },
    { term: "Voluntary-response sample", definition: "A sample in which units decide whether to participate, often attracting people with stronger experiences or opinions." },
    { term: "Selection bias", definition: "Systematic distortion caused when inclusion in the data is related to the outcome or characteristics of interest." },
    { term: "Undercoverage", definition: "A sampling-frame problem in which some eligible population groups are missing or insufficiently represented." },
    { term: "Nonresponse bias", definition: "Distortion that occurs when selected nonrespondents differ meaningfully from respondents on the study outcome." },
    { term: "Response bias", definition: "Systematic inaccuracy in reported answers caused by wording, memory, incentives, interviewer effects, or social pressure." },
    { term: "Measurement bias", definition: "Systematic difference between the measured value and the intended construct due to instruments, definitions, procedures, or data systems." },
    { term: "Survivorship bias", definition: "Distortion caused by studying units that remain observable while ignoring units that failed, exited, or disappeared." },
    { term: "Sampling weight", definition: "A value describing how much population representation an observed unit contributes, often related to inverse inclusion probability and later adjustments." },
    { term: "Response rate", definition: "The proportion of eligible sampled units that provide usable responses under a stated calculation standard." },
    { term: "Representativeness", definition: "The degree to which the evidence supports inference to a clearly defined population for a particular variable and decision." },
  ],

  formulas: [
    {
      id: "sample-proportion",
      name: "Sample proportion",
      formula: "p̂ = x / n",
      meaning: "Estimates a population proportion using x observed cases with the characteristic among n valid sampled units.",
      requirement: "Define the numerator, denominator, eligibility, missing-data treatment, population, and time window.",
    },
    {
      id: "sampling-fraction",
      name: "Sampling fraction",
      formula: "f = n / N",
      meaning: "Reports the share of a finite population included in the sample.",
      requirement: "A large sampling fraction does not repair selection bias if the included units are systematically different.",
    },
    {
      id: "response-rate",
      name: "Basic response rate",
      formula: "Response rate = usable eligible responses / eligible sampled units",
      meaning: "Tracks participation among the eligible units selected for contact or measurement.",
      requirement: "Document eligibility assumptions, partial responses, unreachable units, exclusions, and the response-rate standard used.",
    },
    {
      id: "weighted-mean",
      name: "Weighted estimate",
      formula: "x̄w = Σ(wᵢxᵢ) / Σwᵢ",
      meaning: "Combines observations or subgroup estimates according to justified representation weights.",
      requirement: "Weights require a defensible design or adjustment model; report trimming, normalization, benchmarks, and sensitivity to extreme weights.",
    },
    {
      id: "inverse-probability-weight",
      name: "Design weight",
      formula: "wᵢ = 1 / πᵢ",
      meaning: "Gives more representation to units with lower inclusion probability πᵢ under a probability design.",
      requirement: "Inclusion probabilities must be known or credibly estimated; weighting cannot recreate groups absent from the frame.",
    },
    {
      id: "proportion-standard-error",
      name: "Approximate standard error of a proportion",
      formula: "SE(p̂) ≈ √[p̂(1 − p̂) / n]",
      meaning: "Approximates random sampling variability for a simple random sample under suitable conditions.",
      requirement: "Do not use this simple formula as though it covers clustering, weighting, small samples, dependence, nonresponse, or systematic bias.",
    },
    {
      id: "finite-population-correction",
      name: "Finite population correction",
      formula: "FPC = √[(N − n) / (N − 1)]",
      meaning: "Reduces estimated sampling variability when a simple random sample contains a substantial fraction of a finite population.",
      requirement: "Apply only when sampling without replacement from a well-defined finite population and when the design assumptions fit.",
    },
  ],

  workedExamples: [
    {
      id: "example-02-03-01",
      title: "Separate the target population from the sampling frame",
      problem: "A company wants the network-wide robot fault rate, but its database contains only robots with upgraded sensors. Identify the target population, sampling frame, and main risk.",
      solutionSteps: [
        "Target population: all eligible robots in the network during the defined period.",
        "Sampling frame: robots represented in the upgraded-sensor database.",
        "Compare frame membership with plant, robot model, age, workload, and maintenance status.",
        "Recognize that sensor availability may be associated with both plant and fault detection.",
      ],
      answer: "The upgraded-sensor database is an incomplete frame; undercoverage and selection bias threaten a network-wide estimate.",
      interpretation: "A precise analysis of the available database may describe connected robots well while misrepresenting the full network.",
    },
    {
      id: "example-02-03-02",
      title: "Select a simple random sample",
      problem: "A validated registry lists 1,000 robots. Describe how to select a simple random sample of 100.",
      solutionSteps: [
        "Assign each eligible robot one unique identifier.",
        "Use a reproducible random-number generator with a recorded seed or auditable selection process.",
        "Select 100 distinct identifiers without replacement.",
        "Preserve the selected list, replacements policy, eligibility checks, and contact outcomes.",
      ],
      answer: "Select 100 unique robots through an auditable random process from the complete validated frame.",
      interpretation: "Random selection protects against systematic human choice, but frame errors, nonresponse, and measurement problems can remain.",
    },
    {
      id: "example-02-03-03",
      title: "Allocate a proportional stratified sample",
      problem: "A network has 600 robots in Plant A, 300 in B, and 100 in C. Allocate a proportional stratified sample of 200.",
      solutionSteps: [
        "Calculate population shares: A = 600/1000 = 0.60, B = 0.30, C = 0.10.",
        "Multiply each share by 200.",
        "Plant A: 0.60 × 200 = 120 robots.",
        "Plant B: 0.30 × 200 = 60 robots; Plant C: 0.10 × 200 = 20 robots.",
        "Randomly select within each plant using validated plant-specific frames.",
      ],
      answer: "Sample 120 from A, 60 from B, and 20 from C.",
      interpretation: "Proportional allocation mirrors the plant distribution. Disproportionate allocation may be useful for small groups but requires weights for network estimates.",
    },
    {
      id: "example-02-03-04",
      title: "Distinguish stratified and cluster sampling",
      problem: "Compare sampling robots from every plant with randomly choosing two plants and sampling only within those plants.",
      solutionSteps: [
        "Stratified sampling includes units from every plant and estimates within-plant differences directly.",
        "Cluster sampling selects entire plants or plant groups first and may omit unselected plants.",
        "Stratification can improve precision when plants differ but units within plants are similar.",
        "Clustering can reduce travel and collection cost but often increases sampling variability when robots within a plant resemble one another.",
      ],
      answer: "Sampling within every plant is stratified; selecting only some plants first is cluster sampling.",
      interpretation: "The designs solve different operational problems and require different variance calculations.",
    },
    {
      id: "example-02-03-05",
      title: "Calculate and interpret a response rate",
      problem: "Of 250 selected maintenance technicians, 220 are eligible and 154 submit usable surveys. Find the basic response rate.",
      solutionSteps: [
        "Use eligible sampled units as the denominator: 220.",
        "Use usable eligible responses as the numerator: 154.",
        "Response rate = 154 / 220 = 0.70.",
        "Compare respondents and nonrespondents using available shift, plant, tenure, and role information.",
      ],
      answer: "The basic response rate is 70%.",
      interpretation: "A 70% response rate does not prove absence of nonresponse bias; bias depends on whether response is related to the outcome after accounting for available adjustments.",
    },
    {
      id: "example-02-03-06",
      title: "Recover a population estimate with subgroup weights",
      problem: "An equal-size sample estimates fault rates of 3% in Plant A, 7% in B, and 20% in C. Population shares are 60%, 30%, and 10%. Estimate the network rate.",
      solutionSteps: [
        "An unweighted mean of subgroup rates is (0.03 + 0.07 + 0.20) / 3 = 0.10, or 10%.",
        "Apply population-share weights: 0.60(0.03) + 0.30(0.07) + 0.10(0.20).",
        "Calculate 0.018 + 0.021 + 0.020 = 0.059.",
        "Verify that the weights sum to 1 and document their source.",
      ],
      answer: "The weighted network fault estimate is 5.9%.",
      interpretation: "Equal subgroup sample sizes overrepresent the small high-fault plant in an unweighted estimate. Correct weighting aligns the estimate with the target population structure.",
    },
  ],

  interactiveExploration: {
    title: "Audit the Journey from Population to Analytic Sample",
    description:
      "Create a sample-disposition table that makes coverage, selection, participation, and analysis losses visible for your project.",
    instructions: [
      "Write a one-sentence target-population definition with unit, eligibility, geography or system, and time window.",
      "Describe the accessible population and sampling frame; list known omissions, duplicates, outdated entries, and unknown coverage gaps.",
      "Map each selection stage and record the probability or rule used at that stage.",
      "Count sampled, contacted, eligible, ineligible, unreachable, refused, partially complete, usable, and excluded units.",
      "Compare the analytic sample with trusted population benchmarks for every decision-relevant characteristic available.",
      "Examine whether missingness or participation differs by group, outcome proxy, time, location, or system access.",
      "Calculate unweighted and justified weighted estimates and compare them.",
      "Run a sensitivity scenario for an underrepresented group's plausible outcome rate.",
      "Identify which claims apply to the target population, accessible population, respondents, or only the analytic sample.",
      "Propose the smallest feasible collection improvement for the next cycle.",
    ],
    investigationQuestions: [
      "Who or what had zero chance of appearing in the data?",
      "Which groups had unequal inclusion or response probabilities?",
      "Could the reason for missingness be related to the outcome?",
      "Do weights reduce visible imbalance while increasing variance or instability?",
      "Which important characteristics have no population benchmark?",
      "What decision would change if the missing group had a substantially different outcome?",
    ],
    expectedDiscovery:
      "Bias can enter before selection, during recruitment, through measurement, and during exclusions. Representativeness must be defended for a specific outcome and population; it cannot be inferred from sample size alone.",
  },

  realWorldApplications: [
    { field: "Manufacturing and Robotics", application: "Sample across plants, robot models, ages, shifts, and workloads so connected machines or easy-to-access incidents do not define the entire fleet." },
    { field: "Education", application: "Account for absent students, device access, course enrollment, test completion, school selection, and differential opportunity to learn." },
    { field: "Healthcare", application: "Separate the clinic population from the community population and examine access, referral, survival, follow-up, and documentation processes." },
    { field: "Customer Analytics", application: "Avoid treating app users, survey respondents, loyalty members, or recent purchasers as interchangeable with all customers or potential customers." },
    { field: "Public Policy", application: "Use transparent probability designs, multilingual outreach, mode adjustments, weights, and nonresponse analysis for credible population estimates." },
    { field: "Machine Learning and AI", application: "Audit training, validation, and production populations for coverage gaps, label availability, feedback loops, subgroup imbalance, and distribution shift." },
  ],

  aiConnection: {
    title: "Training Data Is a Sample of the World",
    explanation:
      "Every AI dataset reflects a collection mechanism. Search logs include people who used the system; labeled outcomes may exist only for cases that received follow-up; sensor data may come only from newer devices; human feedback may come from selected raters. A model can optimize perfectly for that sample and still fail in the deployment population.",
    example:
      "A predictive-maintenance model is trained on robots with modern sensors. Older robots have fewer measurements and more missing fault labels. High validation accuracy on connected robots does not establish performance for older equipment, especially if model outputs influence which robots receive inspection and therefore which labels become available.",
    uses: ["Dataset design", "Train-test splitting", "Fairness audits", "Domain adaptation", "Active learning", "Feedback-loop monitoring", "External validation"],
    caution:
      "Oversampling a rare group can improve learning and evaluation, but reported performance and population estimates must use appropriate weights, prevalence, and deployment benchmarks. Synthetic data cannot prove coverage of real missing groups.",
    reflectionQuestion:
      "Which people, machines, behaviors, or outcomes in your project have little or no chance of becoming labeled training data?",
  },

  pythonLab: {
    title: "Compare Convenience, Random, and Stratified Robot Samples",
    objective:
      "Create a multi-plant robot population, compare sampling designs, quantify coverage error, and use population-share weights to recover a network estimate from a disproportionate stratified sample.",
    code: `import numpy as np
import pandas as pd

rng = np.random.default_rng(42)

plant_sizes = {"A": 600, "B": 300, "C": 100}
fault_rates = {"A": 0.03, "B": 0.07, "C": 0.20}

population_parts = []
for plant, size in plant_sizes.items():
    part = pd.DataFrame({
        "plant": plant,
        "fault": rng.binomial(1, fault_rates[plant], size=size),
    })
    population_parts.append(part)

population = pd.concat(population_parts, ignore_index=True)
population["robot_id"] = np.arange(1, len(population) + 1)

true_rate = population["fault"].mean()

# Convenience sample: only the easiest plant to access.
convenience = population.loc[population["plant"] == "C"].sample(
    n=80,
    random_state=42,
)

# Simple random sample from the complete frame.
srs = population.sample(n=90, random_state=42)

# Disproportionate stratified sample: equal size from each plant.
stratified = (
    population.groupby("plant", group_keys=False)
    .sample(n=30, random_state=42)
    .copy()
)

population_shares = (
    population["plant"].value_counts(normalize=True)
)
stratum_rates = stratified.groupby("plant")["fault"].mean()
weighted_stratified_rate = (
    stratum_rates * population_shares[stratum_rates.index]
).sum()

estimates = pd.Series({
    "true_population_rate": true_rate,
    "convenience_plant_c": convenience["fault"].mean(),
    "simple_random_sample": srs["fault"].mean(),
    "stratified_unweighted": stratified["fault"].mean(),
    "stratified_weighted": weighted_stratified_rate,
})

sample_composition = pd.concat({
    "population": population["plant"].value_counts(normalize=True),
    "convenience": convenience["plant"].value_counts(normalize=True),
    "srs": srs["plant"].value_counts(normalize=True),
    "stratified": stratified["plant"].value_counts(normalize=True),
}, axis=1).fillna(0)

print("Fault-rate estimates:\\n", estimates.round(4))
print("\\nPlant composition:\\n", sample_composition.round(3))
print("\\nStratum fault rates:\\n", stratum_rates.round(3))

assert len(population) == 1000
assert set(stratified["plant"].unique()) == {"A", "B", "C"}
assert population_shares.sum().round(10) == 1
assert estimates.between(0, 1).all()`,
    questions: [
      "How does the convenience sample's plant composition differ from the population?",
      "Which estimates are closest to the generated population fault rate in this run?",
      "Why is the equal-allocation stratified estimate biased upward when left unweighted?",
      "How do population-share weights change the stratified estimate?",
      "Why can the simple random estimate still differ from the true population value?",
      "What repeated-sampling simulation would compare bias and variability across designs?",
    ],
    reflectionQuestions: [
      "Which design is operationally easiest, and what evidence quality does that convenience cost?",
      "When is disproportionate stratification worth the need for weights?",
      "Which important robot characteristics remain absent from this simulation?",
    ],
    extension:
      "Repeat each design 1,000 times, plot the sampling distributions, calculate empirical bias and root mean squared error, then add plant-specific nonresponse and compare adjustment strategies.",
  },

  guidedPractice: [
    { id: "gp-02-03-01", question: "A school wants conclusions about all enrolled students but surveys only students attending one club. Identify the target population and sample.", answer: "Target population: all enrolled students under the defined scope. Sample: participating members of the selected club." },
    { id: "gp-02-03-02", question: "A factory samples 120 of 600 eligible robots. Find the sampling fraction.", answer: "f = 120 / 600 = 0.20, or 20%." },
    { id: "gp-02-03-03", question: "Why does doubling a convenience sample not necessarily reduce bias?", answer: "It reduces random variability within the accessible group but preserves systematic exclusion and self-selection." },
    { id: "gp-02-03-04", question: "Which design guarantees observations from every plant: stratified or cluster sampling?", answer: "Stratified sampling, because units are selected within every defined plant stratum." },
    { id: "gp-02-03-05", question: "Of 180 eligible selected units, 135 respond. Find the response rate.", answer: "135 / 180 = 0.75, or 75%." },
    { id: "gp-02-03-06", question: "Why can a weighted estimate be less stable than an unweighted estimate?", answer: "Large or highly variable weights allow a small number of observations to contribute substantial influence, increasing variance and sensitivity." },
  ],

  independentPractice: [
    { id: "ip-02-03-01", difficulty: "Foundational", question: "Define population, frame, sample, parameter, and statistic using one customer-service example.", sampleAnswer: "Population: all eligible service cases; frame: the case-management list; sample: selected cases; parameter: true population resolution rate; statistic: sample resolution proportion." },
    { id: "ip-02-03-02", difficulty: "Foundational", question: "Explain the difference between undercoverage and nonresponse.", sampleAnswer: "Undercoverage excludes eligible units from the frame or selection opportunity; nonresponse occurs after eligible units are selected but do not provide usable data." },
    { id: "ip-02-03-03", difficulty: "Applied", question: "Design a stratified sample for three schools with different enrollments.", sampleAnswer: "Define each school as a stratum, validate student frames, choose proportional or precision-driven allocations, randomly select within schools, track participation, and weight if inclusion probabilities differ." },
    { id: "ip-02-03-04", difficulty: "Applied", question: "Audit an online customer-satisfaction poll posted on a receipt.", sampleAnswer: "It is a voluntary-response sample restricted to purchasers who notice the invitation and choose to respond; strong experiences and digital access may affect participation." },
    { id: "ip-02-03-05", difficulty: "Analytical", question: "A weighted estimate differs sharply from the raw estimate. What should be investigated?", sampleAnswer: "Weight sources, inclusion probabilities, adjustment cells, benchmark quality, extreme weights, small groups, coding, nonresponse assumptions, effective sample size, and sensitivity to trimming." },
    { id: "ip-02-03-06", difficulty: "Advanced", question: "Design a nonresponse-bias analysis using administrative fields available for respondents and nonrespondents.", sampleAnswer: "Compare response rates and distributions by known fields, model response propensity, examine outcome proxies, construct justified adjustments, and report sensitivity to unobserved differences." },
    { id: "ip-02-03-07", difficulty: "Professional", question: "Write an evidence limitation for a model trained only on connected devices.", sampleAnswer: "Performance is established only for connected devices represented in the study period; older or offline devices are undercovered, may differ in fault behavior and measurement quality, and require separate validation before deployment." },
  ],

  commonMistakes: [
    { mistake: "Calling a dataset representative because it is large.", correction: "Evaluate frame coverage, selection, participation, measurement, and alignment with the target population; size addresses only part of random error." },
    { mistake: "Treating a census extract as free from bias.", correction: "Audit missing units, outdated records, duplicate identities, eligibility errors, unrecorded events, and measurement differences." },
    { mistake: "Using random train-test splitting as proof of population representativeness.", correction: "A random split represents the collected dataset, not groups or conditions absent from collection." },
    { mistake: "Confusing stratified sampling with cluster sampling.", correction: "Stratification samples within every group; clustering selects some groups first for operational efficiency." },
    { mistake: "Assuming a high response rate eliminates nonresponse bias.", correction: "Compare respondents and nonrespondents and examine whether participation relates to the outcome." },
    { mistake: "Applying weights without documenting their construction.", correction: "Report inclusion probabilities, adjustment variables, benchmarks, trimming, normalization, effective sample size, and sensitivity." },
    { mistake: "Generalizing beyond the observed population and time period.", correction: "State exactly which population, system, geography, conditions, and dates the evidence supports." },
  ],

  discussionQuestions: [
    "When is a carefully described convenience sample still useful?",
    "Should a small underrepresented group be oversampled even when this requires substantial weighting?",
    "How should organizations balance representative evidence with collection cost and urgency?",
    "Can weighting correct a sampling frame that completely excludes a population group?",
    "Who is responsible for identifying people or systems that have no chance of entering an AI dataset?",
  ],

  formativeAssessment: {
    totalPoints: 30,
    passingScore: 24,
    questions: [
      { id: "check-02-03-01", type: "definition", points: 5, prompt: "Distinguish a target population, sampling frame, sample, parameter, and statistic.", sampleAnswer: "The target population is the group of interest; the frame is the operational selection source; the sample is observed units; a parameter describes the population; a statistic is calculated from the sample." },
      { id: "check-02-03-02", type: "calculation", points: 5, prompt: "A sample includes 240 of 1,200 units. Find the sampling fraction.", sampleAnswer: "240 / 1,200 = 0.20, or 20%." },
      { id: "check-02-03-03", type: "selection", points: 5, prompt: "Choose a design that ensures evidence from every plant and explain why.", sampleAnswer: "Use stratified random sampling with plant as the stratum, because selection occurs within every plant." },
      { id: "check-02-03-04", type: "reasoning", points: 5, prompt: "Explain why a sample of 100,000 app users may not represent all customers.", sampleAnswer: "App access and usage affect inclusion; nonusers may differ systematically in demographics, needs, behavior, and outcomes, so large size does not repair undercoverage." },
      { id: "check-02-03-05", type: "calculation", points: 5, prompt: "Population shares are 70% and 30%; subgroup estimates are 4% and 12%. Find the weighted estimate.", sampleAnswer: "0.70(0.04) + 0.30(0.12) = 0.028 + 0.036 = 0.064, or 6.4%." },
      { id: "check-02-03-06", type: "communication", points: 5, prompt: "Write the required elements of a professional sampling limitation.", sampleAnswer: "Name the target and observed populations, frame gaps, design, response, measurement, weighting, uncertainty, excluded groups, time period, likely bias direction when known, and limits on generalization." },
    ],
  },

  researchExtension: {
    title: "Investigate Who Is Missing from a Real Dataset",
    researchQuestion:
      "How does a dataset's collection mechanism determine whose experiences, failures, behaviors, or outcomes become visible and whose remain missing?",
    applicationOptions: ["Connected-device maintenance", "Student attendance and assessment", "Customer reviews", "Healthcare follow-up", "Fraud labels", "Public opinion polling"],
    task:
      "Choose one dataset or documented data system. Reconstruct the representative evidence chain, compare the observed sample with the target population, identify likely selection and measurement mechanisms, and design a practical improvement or external validation study.",
    requiredEvidence: [
      "Target population, unit, eligibility, geography or system, and time window",
      "Sampling-frame source and coverage audit",
      "Selection, recruitment, participation, and exclusion flow",
      "Sample-versus-population benchmark table",
      "At least three plausible bias mechanisms",
      "Weighted or sensitivity analysis when defensible",
      "Revised claim scope and collection recommendation",
    ],
  },

  portfolioArtifact: {
    title: "Statistical Investigation, Part 3: Sampling and Bias Audit",
    description:
      "Add an evidence-representativeness section to your Module 2 investigation so reviewers can see who or what the data represents and where bias may enter.",
    requiredSections: [
      "Decision, target population, accessible population, unit, eligibility, and time window",
      "Sampling-frame description with coverage strengths and gaps",
      "Sampling design, inclusion probabilities, and operational selection procedure",
      "Disposition counts from selection through final analytic sample",
      "Response rate and missingness by relevant group",
      "Sample-versus-population benchmark comparison",
      "Unweighted and justified weighted estimates",
      "Bias pathways: coverage, selection, nonresponse, measurement, survivorship, and time",
      "Sensitivity analysis for at least one missing or underrepresented group",
      "Supported claim scope, limitations, and next collection improvement",
    ],
    requiredEvidence: [
      "Population-to-analysis flow figure",
      "Sampling-frame coverage table",
      "Sample disposition table",
      "Benchmark comparison table or chart",
      "Reproducible selection or weighting code",
      "One bias sensitivity scenario",
      "One decision-ready evidence limitation paragraph",
    ],
  },

  growthIndicators: [
    { title: "Population Definer", description: "You specify exactly who or what the evidence is intended to represent." },
    { title: "Sampling Designer", description: "You choose a selection method aligned with population structure, constraints, and inference goals." },
    { title: "Bias Investigator", description: "You trace coverage, selection, response, measurement, and exclusion mechanisms instead of treating missing data as random automatically." },
    { title: "Evidence Communicator", description: "You match every conclusion to the population, period, design, uncertainty, and limitations actually supported." },
  ],

  reflection: [
    "Who or what has zero chance of appearing in your current project data?",
    "Which easy-to-access group might be dominating the evidence?",
    "Could participation or labeling depend on the outcome you want to predict?",
    "What population benchmark would reveal the most important imbalance?",
    "Would weighting solve the problem, or is new data collection required?",
    "What conclusion must be narrowed until representative evidence improves?",
  ],

  summary: [
    "The target population defines the group for which a conclusion is intended; the sampling frame defines who or what can actually be selected.",
    "A sample statistic estimates a population parameter only under assumptions supported by the design and data-generating process.",
    "Large samples reduce some random sampling variability but cannot eliminate systematic coverage, selection, nonresponse, or measurement bias.",
    "Simple random, systematic, stratified, and cluster designs solve different statistical and operational problems.",
    "Stratified sampling selects within every subgroup; cluster sampling selects some naturally occurring groups first.",
    "Response rate is important but does not by itself determine nonresponse bias.",
    "Weights can correct known unequal representation under defensible assumptions but cannot create information about completely absent groups.",
    "Representativeness should be audited with population benchmarks, subgroup response patterns, disposition counts, and sensitivity analysis.",
    "AI training and evaluation datasets are samples shaped by access, labeling, measurement, and feedback loops.",
    "Professional conclusions name the supported population, time window, design, uncertainty, bias risks, and limits on generalization.",
  ],

  previousLesson: {
    id: "data-ai-m02-l02",
    moduleNumber: 2,
    slug: "probability-conditional-probability-and-bayes-reasoning",
    title: "Probability, Conditional Probability, and Bayes Reasoning",
  },
  nextLesson: null,

  lumineryGuidance: {
    message:
      "Before trusting an estimate or AI model, identify who or what had no chance to enter the evidence.",
    prompt:
      "Help me audit the representativeness of my evidence. Define the target and accessible populations, unit, eligibility, geography or system, and time window. Audit the sampling frame, selection probabilities, recruitment, nonresponse, measurement, exclusions, and weights. Compare the analytic sample with population benchmarks, test sensitivity to missing groups, and rewrite the conclusion so its scope matches the evidence.",
    coachingQuestions: [
      "What exact population should this decision represent?",
      "Who or what is absent from the sampling frame?",
      "How was each unit given a chance of selection?",
      "Which selected units did not participate or become labeled, and why?",
      "How does the analytic sample differ from trusted population benchmarks?",
      "What assumptions make the weights defensible?",
      "Which conclusion must be narrowed or delayed until better evidence exists?",
    ],
  },
};

export default lesson03;
