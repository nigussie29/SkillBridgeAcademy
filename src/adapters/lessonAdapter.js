/**
 * Converts raw course lesson data into the format expected
 * by the SkillBridge Academy Lesson Engine.
 */
export function adaptLessonForEngine(rawLesson) {
  if (!rawLesson) {
    return null;
  }

  return {
    // Lesson metadata
    subject:
      rawLesson.courseTitle ??
      rawLesson.subject ??
      "SkillBridge Academy",

    title: rawLesson.title ?? "Untitled Lesson",
    subtitle: rawLesson.subtitle ?? "",
    level: rawLesson.level ?? "",
    duration: rawLesson.duration ?? "",
    status: rawLesson.status ?? "draft",
    masteryPoints: rawLesson.masteryPoints ?? null,

    // Lesson purpose
    essentialQuestion: rawLesson.essentialQuestion ?? null,

    whyItMatters:
      rawLesson.bigIdea ??
      getDescription(rawLesson.realWorldConnection) ??
      "",

    objectives: normalizeArray(rawLesson.learningObjectives),

    // Preparation
    warmUp: normalizeWarmUp(rawLesson.warmUp),
    vocabulary: normalizeArray(rawLesson.vocabulary),

    // Learn
    learn: rawLesson.conceptExplanation
      ? {
          title:
            rawLesson.conceptExplanation.title ??
            "Learn the Core Concept",

          content:
            rawLesson.conceptExplanation.summary ??
            rawLesson.conceptExplanation.content ??
            rawLesson.conceptExplanation.description ??
            "",

          bigIdea:
            rawLesson.conceptExplanation.bigIdea ?? null,

          explanation: normalizeArray(
            rawLesson.conceptExplanation.explanation
          ),

          teachingNotes: normalizeArray(
            rawLesson.conceptExplanation.teachingNotes
          ),

          mathematicalConnections: normalizeArray(
            rawLesson.conceptExplanation.mathematicalConnections
          ),

          commonMisconceptions: normalizeArray(
            rawLesson.conceptExplanation.commonMisconceptions
          ),

          essentialTakeaway:
            rawLesson.conceptExplanation.essentialTakeaway ?? null,

          formula:
            rawLesson.conceptExplanation.formula ?? null,

          examples: normalizeArray(rawLesson.workedExamples),
        }
      : null,

    // Practice
    practice: normalizeArray(rawLesson.guidedPractice),

    independentPractice: normalizeArray(
      rawLesson.independentPractice
    ),

    commonMistakes: normalizeArray(
      rawLesson.commonMistakes
    ),

    // Build challenge
    build: rawLesson.creatorChallenge
      ? {
          title:
            rawLesson.creatorChallenge.title ??
            "Creator Challenge",

          description:
            rawLesson.creatorChallenge.description ?? "",

          requirements: normalizeArray(
            rawLesson.creatorChallenge.requirements
          ),

          tools: normalizeArray(
            rawLesson.creatorChallenge.tools
          ),

          deliverables: normalizeArray(
            rawLesson.creatorChallenge.deliverables
          ),

          honorsExtension:
            rawLesson.creatorChallenge.honorsExtension ?? null,

          portfolioEvidence:
            rawLesson.creatorChallenge.portfolioEvidence ?? null,
        }
      : null,

    // Mastery assessment
    master: rawLesson.formativeAssessment
      ? {
          passingScore:
            rawLesson.formativeAssessment.passingScore ?? 0,

          questions: normalizeArray(
            rawLesson.formativeAssessment.questions
          ),
        }
      : null,

    // Luminery AI Coach
    luminery: rawLesson.lumineryGuidance
      ? {
          message:
            rawLesson.lumineryGuidance.message ?? "",

          recommendation:
            rawLesson.lumineryGuidance.recommendation ??
            rawLesson.lumineryGuidance.prompt ??
            "",

          confidence: clampConfidence(
            rawLesson.lumineryGuidance.confidence ?? 75
          ),
        }
      : null,

    // Apply
    apply: hasApplicationContent(rawLesson)
      ? {
          realWorldConnection: normalizeRealWorldConnection(
            rawLesson.realWorldConnection
          ),

          technologyActivity: normalizeTechnologyActivity(
            rawLesson.technologyActivity
          ),

          pythonLab: normalizePythonLab(
            rawLesson.pythonLab
          ),
        }
      : null,

    // Portfolio evidence
    portfolioEvidence: rawLesson.portfolioEvidence
      ? {
          title:
            rawLesson.portfolioEvidence.title ??
            "Portfolio Evidence",

          artifact:
            rawLesson.portfolioEvidence.artifact ??
            rawLesson.portfolioEvidence.description ??
            "",

          include: normalizeArray(
            rawLesson.portfolioEvidence.include
          ),

          requirements: normalizeArray(
            rawLesson.portfolioEvidence.requirements
          ),
        }
      : null,

    // Summary and reflection
    summary: normalizeArray(rawLesson.summary),
    reflection: normalizeArray(rawLesson.reflection),

    // Navigation
    previousLesson: normalizeLessonNavigation(
      rawLesson.previousLesson
    ),

    nextLesson: normalizeLessonNavigation(
      rawLesson.nextLesson
    ),
  };
}

/* --------------------------------------------------
   Helpers
-------------------------------------------------- */

function normalizeArray(value) {
  return Array.isArray(value) ? value : [];
}

function normalizeWarmUp(value) {
  if (!value) {
    return null;
  }

  if (typeof value === "string") {
    return {
      title: "Warm-Up",
      scenario: "",
      problem: "",
      prompts: [value],
      teacherGuidance: [],
      expectedOutcome: "",
    };
  }

  return {
    title: value.title ?? "Warm-Up",
    scenario: value.scenario ?? "",
    problem: value.problem ?? "",
    prompts: normalizeArray(value.prompts),
    teacherGuidance: normalizeArray(value.teacherGuidance),
    expectedOutcome: value.expectedOutcome ?? "",
  };
}

function normalizeRealWorldConnection(value) {
  if (!value) {
    return null;
  }

  if (typeof value === "string") {
    return {
      title: "Real-World Connection",
      description: value,
      scenario: "",
      model: "",
      prompts: [],
      solution: [],
      answer: "",
      connection: "",
    };
  }

  return {
    title:
      value.title ??
      "Real-World Connection",

    description:
      value.description ??
      value.summary ??
      "",

    scenario:
      value.scenario ?? "",

    model:
      value.model ?? "",

    prompts:
      normalizeArray(value.prompts),

    solution:
      normalizeArray(value.solution),

    answer:
      value.answer ?? "",

    connection:
      value.connection ?? "",
  };
}

function normalizeTechnologyActivity(value) {
  if (!value) {
    return null;
  }

  if (typeof value === "string") {
    return {
      title: "Technology Activity",
      tool: "",
      objective: "",
      instructions: [value],
      reflectionQuestions: [],
      extension: "",
      teacherTip: "",
    };
  }

  return {
    title:
      value.title ??
      "Technology Activity",

    tool:
      value.tool ?? "",

    objective:
      value.objective ?? "",

    instructions:
      normalizeArray(value.instructions),

    reflectionQuestions:
      normalizeArray(value.reflectionQuestions),

    extension:
      value.extension ?? "",

    teacherTip:
      value.teacherTip ?? "",
  };
}

function normalizePythonLab(value) {
  if (!value) {
    return null;
  }

  if (typeof value === "string") {
    return {
      title: "Python Lab",
      objective: "",
      code: value,
      expectedOutput: "",
      investigation: [],
      reflectionQuestions: [],
      challenge: "",
    };
  }

  return {
    title:
      value.title ??
      "Python Lab",

    objective:
      value.objective ?? "",

    code:
      value.code ?? "",

    expectedOutput:
      value.expectedOutput ?? "",

    investigation:
      normalizeArray(value.investigation),

    reflectionQuestions:
      normalizeArray(value.reflectionQuestions),

    challenge:
      value.challenge ?? "",
  };
}

function getDescription(value) {
  if (!value) {
    return "";
  }

  if (typeof value === "string") {
    return value;
  }

  return (
    value.description ??
    value.summary ??
    value.scenario ??
    value.connection ??
    ""
  );
}

function hasApplicationContent(lesson) {
  return Boolean(
    lesson.realWorldConnection ||
      lesson.technologyActivity ||
      lesson.pythonLab
  );
}

function normalizeLessonNavigation(lesson) {
  if (!lesson) {
    return null;
  }

  if (typeof lesson === "string") {
    return {
      title: lesson,
      slug: null,
      href: null,
      moduleNumber: null,
      lessonNumber: null,
    };
  }

  return {
    title:
      lesson.title ??
      lesson.name ??
      "Next Lesson",

    slug:
      lesson.slug ?? null,

    href:
      lesson.href ??
      lesson.path ??
      lesson.url ??
      null,

    moduleNumber:
      lesson.moduleNumber ??
      lesson.module ??
      null,

    lessonNumber:
      lesson.lessonNumber ?? null,
  };
}

function clampConfidence(value) {
  const confidence = Number(value);

  if (Number.isNaN(confidence)) {
    return 75;
  }

  return Math.min(100, Math.max(0, confidence));
}