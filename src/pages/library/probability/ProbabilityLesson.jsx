import { useNavigate, useParams } from "react-router-dom";

import LessonViewer from "../../../components/library/LessonViewer";
import Breadcrumbs from "../../../components/navigation/Breadcrumbs";

import {
  getProbabilityLesson,
  getProbabilityLessonsByModule,
} from "../../../data/probability/modules/lessons/index.js";

export default function ProbabilityLesson() {
  const navigate = useNavigate();

  const { moduleNumber, lessonSlug } = useParams();

  const lesson = getProbabilityLesson(
    moduleNumber,
    lessonSlug
  );

  const moduleLessons =
    getProbabilityLessonsByModule(moduleNumber);

  const currentLessonIndex =
    moduleLessons.findIndex(
      (item) => item.slug === lessonSlug
    );

  const previousLesson =
    currentLessonIndex > 0
      ? moduleLessons[currentLessonIndex - 1]
      : null;

  const nextLesson =
    currentLessonIndex >= 0 &&
    currentLessonIndex <
      moduleLessons.length - 1
      ? moduleLessons[currentLessonIndex + 1]
      : null;

  function handleBackToModule() {
    navigate(
      `/library/mathematics/probability-foundations/module/${moduleNumber}`
    );
  }

  function handlePrevious() {
    if (!previousLesson) return;

    navigate(
      `/library/mathematics/probability-foundations/module/${moduleNumber}/lesson/${previousLesson.slug}`
    );
  }

  function handleNext() {
    if (!nextLesson) return;

    navigate(
      `/library/mathematics/probability-foundations/module/${moduleNumber}/lesson/${nextLesson.slug}`
    );
  }

  if (!lesson) {
    return (
      <main className="min-h-screen bg-slate-50 px-5 py-12">
        <div className="mx-auto max-w-4xl rounded-3xl border border-red-200 bg-red-50 p-8">
          <p className="text-sm font-bold uppercase tracking-widest text-red-600">
            Probability Foundations
          </p>

          <h1 className="mt-3 text-3xl font-extrabold text-red-900">
            Lesson not found
          </h1>

          <p className="mt-4 leading-7 text-red-700">
            The requested lesson does not match
            an available lesson in Probability
            Foundations.
          </p>

          <button
            type="button"
            onClick={handleBackToModule}
            className="mt-6 rounded-xl bg-red-700 px-5 py-3 font-bold text-white transition hover:bg-red-800"
          >
            Back to Module
          </button>
        </div>
      </main>
    );
  }

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
            label: "School of Mathematics",
            to: "/library/mathematics",
          },
          {
            label: "Probability Foundations",
            to: "/library/mathematics/probability-foundations",
          },
          {
            label: `Module ${moduleNumber}`,
            to: `/library/mathematics/probability-foundations/module/${moduleNumber}`,
          },
          {
            label: `Lesson ${lesson.lessonNumber}: ${lesson.title}`,
          },
        ]}
      />

     <LessonViewer
  lesson={{
    ...lesson,
    previousLesson,
    nextLesson,
  }}
  progressCourseId="probability-foundations"
  onPrevious={handlePrevious}
  onNext={handleNext}
  onBackToModule={handleBackToModule}
/>
    </>
  );
}