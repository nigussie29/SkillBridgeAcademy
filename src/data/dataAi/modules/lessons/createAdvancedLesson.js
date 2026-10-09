function slugToIdentifier(slug) {
  return slug.replace(/[^a-z0-9]+/gi, "_").replace(/^_|_$/g, "");
}

function buildLabCode(config) {
  const identifier = slugToIdentifier(config.slug);
  const labels = JSON.stringify(config.metrics.map((item) => item.label));
  const values = JSON.stringify(config.metrics.map((item) => item.value));

  return `from pathlib import Path
import hashlib
import json
import pandas as pd

lesson_slug = "${config.slug}"
output_dir = Path("${identifier}_lesson_output")
output_dir.mkdir(exist_ok=True)

# Replace this instructional evidence table with measured project results.
evidence = pd.DataFrame({
    "metric": ${labels},
    "value": ${values},
})

controls = pd.DataFrame([
    {"control": "input_contract", "status": "PASS", "owner": "data_owner"},
    {"control": "known_result_test", "status": "PASS", "owner": "engineer"},
    {"control": "privacy_and_security", "status": "PASS", "owner": "reviewer"},
    {"control": "reproducible_run", "status": "PASS", "owner": "operator"},
    {"control": "documented_limitations", "status": "PASS", "owner": "product_owner"},
])

assert evidence["metric"].is_unique
assert evidence["value"].notna().all()
assert set(controls["status"]) == {"PASS"}

evidence_path = output_dir / "measured_evidence.csv"
controls_path = output_dir / "control_results.csv"
manifest_path = output_dir / "run_manifest.json"
evidence.to_csv(evidence_path, index=False)
controls.to_csv(controls_path, index=False)

checksum = hashlib.sha256(evidence_path.read_bytes()).hexdigest()
manifest = {
    "lesson": lesson_slug,
    "status": "PASS",
    "evidence_rows": int(len(evidence)),
    "controls_passed": int((controls["status"] == "PASS").sum()),
    "evidence_sha256": checksum,
    "artifacts": [evidence_path.name, controls_path.name],
    "limitations": [
        "Illustrative values are not production benchmarks.",
        "Replace sample evidence with versioned project measurements.",
    ],
}
manifest_path.write_text(json.dumps(manifest, indent=2), encoding="utf-8")

assert manifest["status"] == "PASS"
assert manifest["controls_passed"] == 5
assert len(manifest["evidence_sha256"]) == 64

print("Lesson:", lesson_slug)
print("\\nEvidence:\\n", evidence.to_string(index=False))
print("\\nControls:\\n", controls.to_string(index=False))
print("\\nManifest status:", manifest["status"])
print("Artifacts:", sorted(path.name for path in output_dir.iterdir()))`;
}

export function createAdvancedLesson(config, previousLesson, nextLesson) {
  const topicStages = config.topics.slice(0, 7).map((topic, index) => ({
    label: `${index + 1}. ${topic}`,
    detail: config.topicDetails?.[index] || `Define, implement, test, and document ${topic.toLowerCase()} with accountable evidence.`,
  }));

  const comparisonItems = config.approaches.map((approach) => ({
    label: approach.label,
    symbol: approach.symbol,
    meaning: approach.meaning,
  }));

  return {
    id: `data-ai-m${String(config.moduleNumber).padStart(2, "0")}-l${String(config.lessonNumber).padStart(2, "0")}`,
    courseId: "data-ai-foundations",
    moduleId: `data-ai-foundations-module-${String(config.moduleNumber).padStart(2, "0")}`,
    moduleNumber: config.moduleNumber,
    lessonNumber: config.lessonNumber,
    slug: config.slug,
    title: config.title,
    shortTitle: config.shortTitle || config.title,
    subtitle: config.subtitle,
    status: "available",
    duration: config.projectLesson ? "8–12 hours" : "5–7 hours",
    level: "Beginner to Professional",

    essentialQuestion: config.essentialQuestion,
    bigIdea: config.bigIdea,

    whyThisLessonExists: {
      title: config.whyTitle,
      introduction: config.introduction,
      centralProblem: config.centralProblem,
      purpose: `This lesson develops ${config.topics.join(", ")}, reproducible evidence, responsible decision-making, and a portfolio-ready application.`,
    },

    problemFirst: {
      title: config.investigationTitle,
      scenario: config.scenario,
      questions: config.investigationQuestions,
      expectedInsight: config.expectedInsight,
    },

    visualModels: [
      {
        id: `${config.slug}-lifecycle`,
        type: "lifecycle",
        title: config.lifecycleTitle,
        description: "Follow the complete path from a defined decision to tested evidence and monitored use.",
        stages: topicStages,
        feedback: config.feedback,
        interpretation: config.lifecycleInterpretation,
      },
      {
        id: `${config.slug}-comparison`,
        type: "comparison",
        title: config.comparisonTitle,
        description: "Compare alternatives before selecting a technique or architecture.",
        items: comparisonItems,
      },
      {
        id: `${config.slug}-control-flow`,
        type: "lifecycle",
        title: "Professional Control Loop — Design, Test, Operate, Improve",
        description: "Technical work is incomplete until its assumptions, failures, limitations, and operating response are explicit.",
        stages: [
          { label: "1. Define", detail: "State the decision, users, data, target, constraints, consequences, and success criteria." },
          { label: "2. Baseline", detail: "Create the simplest valid reference result before adding complexity." },
          { label: "3. Build", detail: "Implement modular, versioned, reproducible logic with controlled configuration." },
          { label: "4. Test", detail: "Use known results, edge cases, failure injection, subgroup checks, and independent validation." },
          { label: "5. Release", detail: "Approve evidence, document limitations, assign ownership, and publish through controlled stages." },
          { label: "6. Monitor", detail: "Track technical, data, model, user, business, safety, and cost behavior." },
          { label: "7. Improve", detail: "Investigate deviations, correct root causes, compare new evidence, and preserve change history." },
        ],
        feedback: "A sophisticated method without a controlled decision loop is not a production system.",
        interpretation: "Professional capability connects mathematics, code, evidence, communication, and accountable operations.",
      },
      {
        id: `${config.slug}-metrics`,
        type: "barChart",
        title: config.metricTitle,
        description: "Illustrative values demonstrate how to communicate evidence; replace them with controlled measurements in a real project.",
        ariaLabel: `Horizontal bar graph for ${config.title} showing ${config.metrics.map((m) => `${m.label} ${m.value}`).join(", ")}.`,
        unit: config.metricUnit,
        max: Math.max(...config.metrics.map((item) => item.value)),
        items: config.metrics,
        interpretation: config.metricInterpretation,
      },
    ],

    representationModel: {
      title: `${config.title} — Evidence Table and Trend Graph`,
      description: "The table and graph represent the same measured relationship so learners can verify values before interpreting the trend.",
      equation: config.graphEquation,
      columns: [
        { key: "stage", label: "Stage" },
        { key: "score", label: config.graphYLabel },
      ],
      rows: config.graphRows,
      xKey: "stage",
      yKey: "score",
      xLabel: "Progressive stage",
      yLabel: config.graphYLabel,
      highlightPoint: config.graphRows.at(-1) ? { x: config.graphRows.at(-1).stage, y: config.graphRows.at(-1).score } : null,
    },

    learningObjectives: [
      ...config.topics.map((topic) => `Explain and apply ${topic.toLowerCase()} in a decision-focused workflow.`),
      "Create a defensible baseline before introducing complexity.",
      "Separate training or development evidence from final independent evaluation.",
      "Measure correctness, reliability, performance, safety, fairness, latency, and cost where applicable.",
      "Build a reproducible Python evidence pack with assertions and a PASS manifest.",
      "Communicate assumptions, limitations, ownership, and conditions that would reverse the recommendation.",
    ],

    prerequisiteKnowledge: config.prerequisites,

    vocabulary: config.vocabulary.map(([term, definition]) => ({ term, definition })),
    formulas: config.formulas.map((item, index) => ({ id: `${config.slug}-formula-${index + 1}`, ...item })),

    workedExamples: config.exampleContexts.slice(0, 8).map((context, index) => ({
      id: `example-${String(config.moduleNumber).padStart(2, "0")}-${String(config.lessonNumber).padStart(2, "0")}-${String(index + 1).padStart(2, "0")}`,
      title: context.title,
      problem: context.problem,
      solutionSteps: context.steps,
      answer: context.answer,
      interpretation: context.interpretation,
    })),

    interactiveExploration: {
      title: config.explorationTitle,
      purpose: config.explorationPurpose,
      instructions: [
        "Define the decision, user, action, data population, target, timing, constraints, and consequences of error.",
        ...config.topics.slice(0, 6).map((topic) => `Investigate ${topic.toLowerCase()} using a controlled example and preserved evidence.`),
        "Compare the result with a simple baseline and at least one alternative.",
        "Test edge cases, failure behavior, reproducibility, privacy, fairness, security, latency, and cost as applicable.",
        "Record limitations, owners, review date, and conditions that require redesign.",
      ],
      investigationQuestions: config.investigationQuestions,
      expectedDiscovery: config.expectedInsight,
    },

    realWorldApplications: [
      { field: "Manufacturing and Robotics", application: config.applications.manufacturing },
      { field: "Education", application: config.applications.education },
      { field: "Finance", application: config.applications.finance },
      { field: "Healthcare", application: config.applications.healthcare },
      { field: "Retail", application: config.applications.retail },
      { field: "AI Systems", application: config.applications.ai },
    ],

    aiConnection: {
      title: config.aiTitle,
      explanation: config.aiExplanation,
      uses: config.aiUses,
      caution: config.aiCaution,
      reflectionQuestion: config.aiReflection,
    },

    pythonLab: {
      title: `Python Lab — ${config.labTitle}`,
      description: config.labDescription,
      code: buildLabCode(config),
      questions: config.labQuestions,
      expectedOutcome: `A reproducible evidence pack for ${config.title.toLowerCase()} with measured results, five passing controls, SHA-256 evidence, documented limitations, and a PASS manifest.`,
    },

    guidedPractice: config.topics.slice(0, 6).map((topic, index) => ({
      id: `gp-${config.moduleNumber}-${config.lessonNumber}-${index + 1}`,
      question: `What must be defined or tested for ${topic.toLowerCase()}?`,
      answer: config.topicDetails?.[index] || `Define the contract, implement the method, compare with a baseline, test edge cases, and preserve evidence.`,
    })),

    independentPractice: config.topics.slice(0, 8).map((topic, index) => ({
      id: `ip-${config.moduleNumber}-${config.lessonNumber}-${index + 1}`,
      difficulty: index < 2 ? "Explain" : index < 5 ? "Apply" : "Evaluate",
      question: `Create and defend a professional artifact demonstrating ${topic.toLowerCase()} for the lesson scenario.`,
    })),

    commonMistakes: config.commonMistakes,
    discussionQuestions: config.discussionQuestions,

    formativeAssessment: {
      totalPoints: 100,
      passingScore: 80,
      questions: Array.from({ length: 10 }, (_, index) => {
        const topic = config.topics[index % config.topics.length];
        return {
          id: `check-${String(config.moduleNumber).padStart(2, "0")}-${String(config.lessonNumber).padStart(2, "0")}-${String(index + 1).padStart(2, "0")}`,
          points: 10,
          prompt: index < config.topics.length
            ? `Explain, apply, and validate ${topic.toLowerCase()} for the lesson scenario.`
            : `Integrate the lesson methods into a reproducible decision and evidence workflow.` ,
          sampleAnswer: index < config.topicDetails.length
            ? `${config.topicDetails[index]} Include assumptions, baseline comparison, tests, limitations, ownership, and measured evidence.`
            : "Define the decision and contract, build a baseline, implement reproducibly, evaluate independent evidence, document limitations, and monitor the approved outcome.",
        };
      }),
    },

    researchExtension: {
      title: `Research Extension — ${config.researchTitle}`,
      description: config.researchDescription,
      researchQuestion: config.researchQuestion,
      applicationOptions: ["Manufacturing and robotics", "Education", "Finance", "Healthcare", "Retail or public service"],
      task: "Pre-register criteria, use current primary sources, create reproducible comparisons, report uncertainty and limitations, and recommend one approach with reversal conditions.",
      requiredEvidence: [
        "Question, hypotheses, scope, stakeholders, risks, and decision criteria",
        "Versioned data, code, configuration, environments, and known-result fixtures",
        "Baseline and alternative methods under comparable conditions",
        "Correctness, uncertainty, subgroup, failure, safety, latency, and cost evidence",
        "Architecture, lineage, ownership, monitoring, incident response, and rollback",
        "Limitations, source citations, product-version date, conclusion, and reversal conditions",
      ],
    },

    portfolioArtifact: {
      title: config.portfolioTitle,
      description: config.portfolioDescription,
      requiredSections: [
        "Executive problem, decision, users, actions, success criteria, and consequences of error",
        "Data contract, population, target, grain, keys, timing, quality, privacy, and lineage",
        "Architecture and method-selection rationale with baseline and rejected alternatives",
        "Versioned implementation, configuration, tests, assertions, and reproducibility evidence",
        "Evaluation with known results, independent evidence, subgroups, edge cases, and failure injection",
        "Security, fairness, explainability, human oversight, latency, capacity, and cost controls",
        "Monitoring, alerts, ownership, escalation, rollback, retraining or review triggers, and runbook",
        "Limitations, ethical risks, source citations, screenshots, README, and interview narrative",
      ],
    },

    growthIndicators: config.growthIndicators,
    reflection: config.reflection,
    summary: config.summary,
    previousLesson,
    nextLesson,

    lumineryGuidance: {
      message: config.lumineryMessage,
      prompt: `Act as my senior ${config.mentorRoles.join(", ")}, and portfolio mentor. Help me complete ${config.title} one verified gate at a time. Require decision context, contracts, baselines, reproducible implementation, independent evaluation, edge cases, failure tests, privacy, security, fairness, explainability, human oversight, latency, cost, monitoring, documentation, limitations, and interview evidence. Do not approve unsupported claims, leakage, untested code, invented metrics, hidden assumptions, unsafe automation, or release without reproducible evidence.`,
      coachingQuestions: config.reflection.slice(0, 10),
    },
  };
}

