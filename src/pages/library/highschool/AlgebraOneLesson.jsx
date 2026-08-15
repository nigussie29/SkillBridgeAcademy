import { useNavigate, useParams } from "react-router-dom";

import LessonViewer from "../../../components/library/LessonViewer";
import Breadcrumbs from "../../../components/navigation/Breadcrumbs";

import {
  getAlgebraOneLessonsByModule,
} from "../../../data/mathematics/highschool/algebraOne/lessons/index.js";

export default function AlgebraOneLesson() {
  const navigate = useNavigate();

  const { moduleNumber, lessonSlug } = useParams();

  const moduleLessons =
    getAlgebraOneLessonsByModule(moduleNumber);

  const currentLessonIndex =
    moduleLessons.findIndex(
      (lesson) => lesson.slug === lessonSlug
    );

  const rawLesson =
    currentLessonIndex >= 0
      ? moduleLessons[currentLessonIndex]
      : null;

  const previousLesson =
    currentLessonIndex > 0
      ? moduleLessons[currentLessonIndex - 1]
      : null;

  const nextLesson =
    currentLessonIndex >= 0 &&
    currentLessonIndex < moduleLessons.length - 1
      ? moduleLessons[currentLessonIndex + 1]
      : null;

  function handleBackToModule() {
    navigate(
      `/library/high-school/algebra-1/module/${moduleNumber}`
    );
  }

  function handlePrevious() {
    if (!previousLesson) return;

    navigate(
      `/library/high-school/algebra-1/module/${moduleNumber}/lesson/${previousLesson.slug}`
    );
  }

  function handleNext() {
    if (!nextLesson) return;

    navigate(
      `/library/high-school/algebra-1/module/${moduleNumber}/lesson/${nextLesson.slug}`
    );
  }

  if (!rawLesson) {
    return (
      <main className="min-h-screen bg-slate-50 px-6 py-12">
        <div className="mx-auto max-w-4xl rounded-3xl border border-red-200 bg-red-50 p-8">
          <p className="text-sm font-bold uppercase tracking-widest text-red-600">
            Algebra I
          </p>

          <h1 className="mt-3 text-3xl font-extrabold text-red-900">
            Lesson not found
          </h1>

          <p className="mt-4 text-red-700">
            This lesson could not be found in Module{" "}
            {moduleNumber}.
          </p>

          <button
            type="button"
            onClick={handleBackToModule}
            className="mt-6 rounded-xl bg-red-700 px-5 py-3 font-bold text-white"
          >
            Back to Module {moduleNumber}
          </button>
        </div>
      </main>
    );
  }

  const lesson = {
    ...rawLesson,

    // Probability-style lesson foundation
    whyThisLessonExists:
      rawLesson.whyThisLessonExists ??
      rawLesson.conceptExplanation?.summary ??
      null,

    // Convert Algebra warm-up into the viewer's
    // opening investigation section
    problemFirst:
      rawLesson.problemFirst ??
      (rawLesson.warmUp
        ? {
            title:
              rawLesson.warmUp.title ??
              "Opening Investigation",

            scenario:
              rawLesson.warmUp.scenario ??
              rawLesson.warmUp.problem ??
              "",

            questions:
              rawLesson.warmUp.prompts ?? [],

            expectedInsight:
              rawLesson.warmUp.expectedOutcome ??
              "",
          }
        : null),

    prerequisiteKnowledge:
      rawLesson.prerequisiteKnowledge ?? [],

    formulas:
      rawLesson.formulas ?? [],

    // Convert Desmos/technology work into
    // the shared exploration section
    interactiveExploration:
      rawLesson.interactiveExploration ??
      (rawLesson.technologyActivity
        ? {
            title:
              rawLesson.technologyActivity.title ??
              "Technology Exploration",

            description:
              rawLesson.technologyActivity.objective ??
              "",

            instructions:
              rawLesson.technologyActivity.instructions ??
              [],

            questions:
              rawLesson.technologyActivity
                .reflectionQuestions ?? [],

            expectedDiscovery:
              rawLesson.technologyActivity.extension ??
              "",
          }
        : null),

    // Convert Algebra real-world connection
    // into the shared application format
    realWorldApplications:
      rawLesson.realWorldApplications ??
      (rawLesson.realWorldConnection
        ? [
            {
              field:
                rawLesson.realWorldConnection.title ??
                "Real-World Application",

              application: [
                rawLesson.realWorldConnection.scenario,
                rawLesson.realWorldConnection.model
                  ? `Model: ${rawLesson.realWorldConnection.model}`
                  : "",
                rawLesson.realWorldConnection.connection,
                rawLesson.realWorldConnection.answer
                  ? `Answer: ${rawLesson.realWorldConnection.answer}`
                  : "",
              ]
                .filter(Boolean)
                .join(" "),
            },
          ]
        : []),

    aiConnection:
      rawLesson.aiConnection ?? null,

    discussionQuestions:
      rawLesson.discussionQuestions ?? [],

    researchExtension:
      rawLesson.researchExtension ?? null,

    // Preserve the Algebra creator/portfolio work
    // inside the shared portfolio section
    portfolioArtifact:
      rawLesson.portfolioArtifact ??
      (rawLesson.creatorChallenge ||
      rawLesson.portfolioEvidence
        ? {
            title:
              rawLesson.creatorChallenge?.title ??
              rawLesson.portfolioEvidence?.title ??
              "Portfolio Artifact",

            description:
              rawLesson.creatorChallenge?.description ??
              rawLesson.portfolioEvidence?.artifact ??
              "",

            requiredSections:
              rawLesson.creatorChallenge
                ?.requirements ??
              rawLesson.portfolioEvidence
                ?.requirements ??
              [],

            requiredEvidence: [
              ...(
                rawLesson.creatorChallenge
                  ?.deliverables ?? []
              ),
              ...(
                rawLesson.portfolioEvidence
                  ?.include ?? []
              ),
            ],
          }
        : null),

    growthIndicators:
      rawLesson.growthIndicators ?? [],

    previousLesson,
    nextLesson,
  };

  return (
    <>
      <Breadcrumbs
        items={[
          {
            label: "Home",
            to: "/",
          },
          {
            label: "Knowledge Library",
            to: "/library",
          },
          {
            label: "High School Mathematics",
            to: "/library/mathematics/high-school",
          },
          {
            label: "Algebra I",
            to: "/library/high-school/algebra-1",
          },
          {
            label: `Module ${moduleNumber}`,
            to: `/library/high-school/algebra-1/module/${moduleNumber}`,
          },
          {
            label: `Lesson ${rawLesson.lessonNumber}: ${rawLesson.title}`,
          },
        ]}
      />

      <LessonViewer
        lesson={lesson}
        progressCourseId="algebra-1"
        onPrevious={handlePrevious}
        onNext={handleNext}
        onBackToModule={handleBackToModule}
      />
    </>
  );
}