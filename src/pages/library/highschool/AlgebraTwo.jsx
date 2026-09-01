import React from "react";
import { Link } from "react-router-dom";

import algebraTwoModules from "../../../data/mathematics/highschool/algebraTwo/modules.js";
import { getCompletedLessons } from "../../../services/lessonProgress.js";

function CourseHero({
  completedModules,
  totalModules,
  courseProgress,
}) {
  return (
    <section className="bg-gradient-to-br from-blue-950 via-indigo-950 to-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
        <div className="max-w-4xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-blue-300">
            Mathematics · High School
          </p>

          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Algebra II
          </h1>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-200">
            Go beyond procedures and learn to analyze functions,
            transform relationships, solve systems, model quadratic
            behavior, code mathematical ideas, and create evidence
            of what you can do.
          </p>

          <div className="mt-8 max-w-xl rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-blue-300">
                  Course Progress
                </p>

                <p className="mt-1 text-2xl font-bold">
                  {courseProgress}%
                </p>
              </div>

              <p className="text-sm text-slate-300">
                {completedModules}/{totalModules} modules completed
              </p>
            </div>

            <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/10">
              <div
                className="h-full rounded-full bg-blue-400 transition-all duration-500"
                style={{
                  width: `${courseProgress}%`,
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function LearningPathway() {
  const stages = [
    "Understand",
    "Represent",
    "Reason",
    "Model",
    "Analyze",
    "Code",
    "Create",
  ];

  return (
    <section className="border-b border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-10 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-wider text-indigo-700">
          Algebra II Learning Pathway
        </p>

        <h2 className="mt-2 text-2xl font-bold text-slate-950">
          From mathematical understanding to creation
        </h2>

        <div className="mt-6 flex flex-wrap items-center gap-3">
          {stages.map((stage, index) => (
            <React.Fragment key={stage}>
              <div className="rounded-full border border-indigo-200 bg-indigo-50 px-4 py-2 text-sm font-semibold text-indigo-950">
                {stage}
              </div>

              {index < stages.length - 1 && (
                <span className="text-xl text-slate-400">
                  →
                </span>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}

function ModuleCard({ module }) {
  const completedLessonCount = getCompletedLessons(
    "algebra-2",
    module.moduleNumber
  ).length;

  const moduleProgress =
    module.lessonCount > 0
      ? Math.min(
          100,
          Math.round(
            (completedLessonCount / module.lessonCount) * 100
          )
        )
      : 0;

  const isAvailable =
    module.status === "Available";

  return (
    <article className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <div
        className={`bg-gradient-to-br ${module.theme} p-6 text-white`}
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
              Module {module.moduleNumber}
            </p>

            <h3 className="mt-2 text-2xl font-bold">
              {module.title}
            </h3>
          </div>

          <span
            className={`rounded-full px-3 py-1 text-xs font-semibold ${
              isAvailable
                ? "bg-emerald-400/20 text-emerald-100"
                : "bg-white/10 text-white/80"
            }`}
          >
            {module.status}
          </span>
        </div>

        <p className="mt-4 text-sm leading-6 text-white/80">
          {module.description}
        </p>
      </div>

      <div className="p-6">
        <div className="flex items-center justify-between text-sm">
          <span className="font-medium text-slate-700">
            {completedLessonCount}/{module.lessonCount} lessons completed
          </span>

          <span className="font-bold text-indigo-700">
            {moduleProgress}%
          </span>
        </div>

        <div className="mt-3 h-2 overflow-hidden rounded-full bg-slate-100">
          <div
            className="h-full rounded-full bg-indigo-600 transition-all duration-500"
            style={{
              width: `${moduleProgress}%`,
            }}
          />
        </div>

        <div className="mt-6">
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
            Learning Pathway
          </p>

          <p className="mt-2 text-sm leading-6 text-slate-700">
            {module.learningPathway}
          </p>
        </div>

        <div className="mt-6">
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
            Topics
          </p>

          <div className="mt-3 flex flex-wrap gap-2">
            {module.topics.slice(0, 5).map((topic) => (
              <span
                key={topic}
                className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700"
              >
                {topic}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-7 flex items-center justify-between border-t border-slate-100 pt-5">
          <div className="text-sm text-slate-500">
            <span>{module.lessonCount} lessons</span>
            <span className="mx-2">•</span>
            <span>{module.estimatedTime}</span>
          </div>

          {isAvailable ? (
            <Link
              to={`/library/high-school/algebra-2/module/${module.moduleNumber}`}
              className="rounded-xl bg-indigo-700 px-4 py-2 text-sm font-semibold text-white transition hover:bg-indigo-800"
            >
              Open Module →
            </Link>
          ) : (
            <button
              type="button"
              disabled
              className="cursor-not-allowed rounded-xl bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-400"
            >
              In Development
            </button>
          )}
        </div>
      </div>
    </article>
  );
}

function LuminerySection() {
  return (
    <section className="mt-14 rounded-3xl border border-indigo-200 bg-gradient-to-r from-indigo-50 to-blue-50 p-8">
      <p className="text-sm font-semibold uppercase tracking-wider text-indigo-700">
        Luminery AI
      </p>

      <h2 className="mt-2 text-2xl font-bold text-slate-950">
        Your reasoning mentor
      </h2>

      <p className="mt-3 max-w-3xl leading-7 text-slate-700">
        Luminery will help you identify quantities, compare
        representations, test assumptions, analyze function behavior,
        and explain your reasoning instead of simply giving you an
        answer.
      </p>

      <div className="mt-6 rounded-2xl bg-white p-5 shadow-sm">
        <p className="font-semibold text-slate-900">
          Luminery asks:
        </p>

        <p className="mt-2 text-slate-700">
          “What does this function tell you about the relationship,
          and what evidence supports your conclusion?”
        </p>
      </div>
    </section>
  );
}

export default function AlgebraTwo() {
  const totalModules =
    algebraTwoModules.length;

  const completedModules =
    algebraTwoModules.filter((module) => {
      if (module.status !== "Available") {
        return false;
      }

      const completedLessons =
        getCompletedLessons(
          "algebra-2",
          module.moduleNumber
        );

      return (
        completedLessons.length >=
        module.lessonCount
      );
    }).length;

  const courseProgress =
    totalModules > 0
      ? Math.round(
          (completedModules / totalModules) * 100
        )
      : 0;

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/50 to-indigo-50/70">
      <CourseHero
        completedModules={completedModules}
        totalModules={totalModules}
        courseProgress={courseProgress}
      />

      <LearningPathway />

      <section className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-indigo-700">
            Course Modules
          </p>

          <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-950">
            Build deeper mathematical reasoning
          </h2>

          <p className="mt-3 max-w-3xl leading-7 text-slate-600">
            Algebra II begins with functions, advances into systems,
            and then develops quadratic reasoning through modeling,
            analysis, coding, and creation.
          </p>
        </div>

        <div className="mt-9 grid gap-7 lg:grid-cols-3">
          {algebraTwoModules.map((module) => (
            <ModuleCard
              key={module.moduleNumber}
              module={module}
            />
          ))}
        </div>

        <LuminerySection />
      </section>
    </main>
  );
}