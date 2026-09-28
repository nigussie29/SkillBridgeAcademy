import { useNavigate, useParams } from "react-router-dom";

import LessonViewer from "../../../components/library/LessonViewer";
import Breadcrumbs from "../../../components/navigation/Breadcrumbs";
import {
  getDataAiLesson,
  getDataAiLessonsByModule,
} from "../../../data/dataAi/modules/lessons/index.js";

const coursePath = "/library/data-ai";

export default function DataAILesson() {
  const navigate = useNavigate();
  const { moduleNumber, lessonSlug } = useParams();
  const lesson = getDataAiLesson(moduleNumber, lessonSlug);
  const moduleLessons = getDataAiLessonsByModule(moduleNumber);
  const currentLessonIndex = moduleLessons.findIndex(
    (item) => item.slug === lessonSlug
  );
  const previousLesson =
    currentLessonIndex > 0 ? moduleLessons[currentLessonIndex - 1] : null;
  const nextLesson =
    currentLessonIndex >= 0 && currentLessonIndex < moduleLessons.length - 1
      ? moduleLessons[currentLessonIndex + 1]
      : null;

  function handleBackToModule() {
    navigate(`${coursePath}#module-${moduleNumber}`);
  }

  function handlePrevious() {
    if (!previousLesson) return;
    navigate(
      `${coursePath}/module/${moduleNumber}/lesson/${previousLesson.slug}`
    );
  }

  function handleNext() {
    if (!nextLesson) return;
    navigate(`${coursePath}/module/${moduleNumber}/lesson/${nextLesson.slug}`);
  }

  if (!lesson) {
    return (
      <main className="min-h-screen bg-slate-50 px-5 py-12">
        <div className="mx-auto max-w-4xl rounded-3xl border border-red-200 bg-red-50 p-8">
          <p className="text-sm font-bold uppercase tracking-widest text-red-600">
            Data and Artificial Intelligence
          </p>
          <h1 className="mt-3 text-3xl font-extrabold text-red-900">
            Lesson not found
          </h1>
          <p className="mt-4 leading-7 text-red-700">
            The requested lesson is not available in this module yet.
          </p>
          <button
            type="button"
            onClick={handleBackToModule}
            className="mt-6 rounded-xl bg-red-700 px-5 py-3 font-bold text-white transition hover:bg-red-800"
          >
            Back to Module {moduleNumber}
          </button>
        </div>
      </main>
    );
  }

  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Home", to: "/" },
          { label: "Knowledge Library", to: "/library" },
          { label: "Data and AI", to: coursePath },
          { label: `Module ${moduleNumber}`, to: `${coursePath}#module-${moduleNumber}` },
          { label: `Lesson ${lesson.lessonNumber}: ${lesson.shortTitle}` },
        ]}
      />

      <LessonViewer
        lesson={{ ...lesson, previousLesson, nextLesson }}
        progressCourseId="data-ai-foundations"
        onPrevious={handlePrevious}
        onNext={handleNext}
        onBackToModule={handleBackToModule}
      />
    </>
  );
}
