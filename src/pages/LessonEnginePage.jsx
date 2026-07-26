import { useParams } from "react-router-dom";
import LessonTemplate from "../components/lessonEngine/LessonTemplate.jsx";
import { adaptLessonForEngine } from "../adapters/lessonAdapter.js";

import { getAlgebraOneLessonBySlug } from "../data/mathematics/highschool/algebraOne/lessons/index.js";

export default function LessonEnginePage() {
  const { lessonSlug } = useParams();

  const rawLesson = getAlgebraOneLessonBySlug(lessonSlug);
  const lesson = adaptLessonForEngine(rawLesson);

  if (!lesson) {
    return (
      <main className="mx-auto max-w-5xl px-6 py-12">
        <h1 className="text-3xl font-bold">
          Lesson Not Found
        </h1>

        <p className="mt-3 text-slate-600">
          We could not find this lesson.
        </p>
      </main>
    );
  }

  return <LessonTemplate lesson={lesson} />;
}