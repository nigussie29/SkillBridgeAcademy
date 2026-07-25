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
    warmUp: rawLesson.warmUp ?? null,
    vocabulary: normalizeArray(rawLesson.vocabulary),

    // Learn section
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

      teachingNotes: normalizeArray(
        rawLesson.conceptExplanation.teachingNotes
      ),

      formula:
        rawLesson.conceptExplanation.formula ?? null,

      examples: normalizeArray(rawLesson.workedExamples),
    }
  : null,

    // Practice section
    practice: normalizeArray(rawLesson.guidedPractice),

    independentPractice: normalizeArray(
      rawLesson.independentPractice
    ),

    commonMistakes: normalizeArray(
      rawLesson.commonMistakes
    ),

    // Creator challenge
    build: rawLesson.creatorChallenge
      ? {
          title:
            rawLesson.creatorChallenge.title ??
            "Creator Challenge",

          description:
            rawLesson.creatorChallenge.description ??
            "",

          requirements: normalizeArray(
            rawLesson.creatorChallenge.requirements
          ),

          tools: normalizeArray(
            rawLesson.creatorChallenge.tools
          ),

          deliverables: normalizeArray(
            rawLesson.creatorChallenge.deliverables
          ),
        }
      : null,

    // Mastery assessment
    master: rawLesson.formativeAssessment
      ? {
          passingScore:
            rawLesson.formativeAssessment.passingScore ??
            0,

          questions: normalizeArray(
            rawLesson.formativeAssessment.questions
          ),
        }
      : null,

    // Luminery AI coach
    luminery: rawLesson.lumineryGuidance
      ? {
          message:
            rawLesson.lumineryGuidance.message ??
            "",

          recommendation:
            rawLesson.lumineryGuidance.recommendation ??
            rawLesson.lumineryGuidance.prompt ??
            "",

          confidence: clampConfidence(
            rawLesson.lumineryGuidance.confidence ?? 75
          ),
        }
      : null,

    // Real-world application
    // Real-world application
apply: hasApplicationContent(rawLesson)
  ? {
      realWorldConnection:
        rawLesson.realWorldConnection ?? null,

      technologyActivity:
        rawLesson.technologyActivity ?? null,

      pythonLab:
        rawLesson.pythonLab ?? null,
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

// Reflection and summary
summary: normalizeArray(rawLesson.summary),
reflection: normalizeArray(rawLesson.reflection),
    // Reflection and summary
    summary: normalizeArray(rawLesson.summary),
reflection: normalizeArray(rawLesson.reflection),

    // Lesson navigation
    previousLesson: normalizeLessonNavigation(
      rawLesson.previousLesson
    ),

    nextLesson: normalizeLessonNavigation(
      rawLesson.nextLesson
    ),
  };
}

function normalizeArray(value) {
  return Array.isArray(value) ? value : [];
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
    value.content ??
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
    };
  }

  return {
    title:
      lesson.title ??
      lesson.name ??
      "Next Lesson",

    slug: lesson.slug ?? null,

    href:
      lesson.href ??
      lesson.path ??
      lesson.url ??
      null,

    moduleNumber:
      lesson.moduleNumber ??
      lesson.module ??
      null,
  };
}

function clampConfidence(value) {
  const confidence = Number(value);

  if (Number.isNaN(confidence)) {
    return 75;
  }

  return Math.min(100, Math.max(0, confidence));
}