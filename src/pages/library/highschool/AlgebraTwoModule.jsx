import React from "react";
import { Link, useParams } from "react-router-dom";

import {
  getAlgebraTwoModuleByNumber,
} from "../../../data/mathematics/highschool/algebraTwo/modules.js";

import {
  getAlgebraTwoLessonsByModule,
} from "../../../data/mathematics/highschool/algebraTwo/lessons/index.js";

import {
  getCompletedLessons,
} from "../../../services/lessonProgress.js";

export default function AlgebraTwoModule() {
  const { moduleNumber } = useParams();

  const module = getAlgebraTwoModuleByNumber(
    moduleNumber
  );

  const lessons = getAlgebraTwoLessonsByModule(
    moduleNumber
  );

  if (!module) {
    return (
      <main className="min-h-screen bg-slate-50 px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <h1 className="text-3xl font-bold text-slate-950">
            Module not found
          </h1>

          <Link
            to="/library/high-school/algebra-2"
            className="mt-6 inline-block font-semibold text-indigo-700"
          >
            ← Back to Algebra II
          </Link>
        </div>
      </main>
    );
  }

  const completedLessons =
    getCompletedLessons(
      "algebra-2",
      Number(moduleNumber)
    );

  const completedCount =
    completedLessons.length;

  const progress =
    module.lessonCount > 0
      ? Math.min(
          100,
          Math.round(
            (completedCount /
              module.lessonCount) *
              100
          )
        )
      : 0;

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/50 to-indigo-50/70">
      <section
        className={`bg-gradient-to-br ${module.theme} text-white`}
      >
        <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
          <Link
            to="/library/high-school/algebra-2"
            className="text-sm font-semibold text-blue-200 hover:text-white"
          >
            ← Algebra II
          </Link>

          <p className="mt-8 text-sm font-semibold uppercase tracking-[0.25em] text-blue-300">
            Module {module.moduleNumber}
          </p>

          <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
            {module.title}
          </h1>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-white/80">
            {module.description}
          </p>

          <div className="mt-8 max-w-xl rounded-2xl border border-white/10 bg-white/5 p-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-blue-200">
                  Module Progress
                </p>

                <p className="mt-1 text-2xl font-bold">
                  {progress}%
                </p>
              </div>

              <p className="text-sm text-white/70">
                {completedCount}/{module.lessonCount} lessons completed
              </p>
            </div>

            <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/10">
              <div
                className="h-full rounded-full bg-blue-400 transition-all"
                style={{
                  width: `${progress}%`,
                }}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-indigo-700">
            Learning Pathway
          </p>

          <p className="mt-3 leading-7 text-slate-700">
            {module.learningPathway}
          </p>
        </div>

        <div className="mt-10">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-indigo-700">
                Module Lessons
              </p>

              <h2 className="mt-2 text-3xl font-bold text-slate-950">
                {lessons.length} lesson
                {lessons.length === 1 ? "" : "s"} currently built
              </h2>
            </div>

            <p className="text-sm text-slate-500">
              Planned total: {module.lessonCount}
            </p>
          </div>

          <div className="mt-8 grid gap-5">
            {lessons.map((lesson) => {
              const isComplete =
                completedLessons.includes(
                  lesson.slug
                );

              return (
                <Link
                  key={lesson.id}
                  to={`/library/high-school/algebra-2/module/${module.moduleNumber}/lesson/${lesson.lessonNumber}`}
                  className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-indigo-300 hover:shadow-md"
                >
                  <div className="flex items-start justify-between gap-6">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-indigo-700">
                        Lesson {lesson.lessonNumber}
                      </p>

                      <h3 className="mt-2 text-xl font-bold text-slate-950 group-hover:text-indigo-800">
                        {lesson.title}
                      </h3>

                      <p className="mt-2 text-sm leading-6 text-slate-600">
                        {lesson.subtitle}
                      </p>
                    </div>

                    <span
                      className={`shrink-0 rounded-full px-3 py-1 text-xs font-semibold ${
                        isComplete
                          ? "bg-emerald-100 text-emerald-700"
                          : "bg-indigo-50 text-indigo-700"
                      }`}
                    >
                      {isComplete
                        ? "Completed"
                        : "Start"}
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>

          {lessons.length === 0 && (
            <div className="mt-8 rounded-2xl border border-dashed border-slate-300 bg-white p-8 text-center">
              <p className="font-semibold text-slate-800">
                Lessons are being developed.
              </p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}