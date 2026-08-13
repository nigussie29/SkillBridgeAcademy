import { useNavigate, useParams } from "react-router-dom";

import Breadcrumbs from "../../../components/navigation/Breadcrumbs";

import probabilityModule01 from "../../../data/probability/modules/module01.js";
import probabilityModule02 from "../../../data/probability/modules/module02.js";

import { getCompletedLessons } from "../../../services/lessonProgress.js";

const COURSE_ID = "probability-foundations";

const modules = {
  1: probabilityModule01,
  2: probabilityModule02,
};
export default function ProbabilityModule() {
  const navigate = useNavigate();
  const { moduleNumber } = useParams();

  const numericModuleNumber = Number(moduleNumber);
  const module = modules[numericModuleNumber];

  if (!module) {
    return (
      <main className="min-h-screen bg-slate-50 px-5 py-12">
        <div className="mx-auto max-w-5xl rounded-3xl border border-red-200 bg-red-50 p-8">
          <p className="text-sm font-bold uppercase tracking-widest text-red-600">
            Probability Foundations
          </p>

          <h1 className="mt-3 text-3xl font-black text-red-950">
            Module not found
          </h1>

          <button
            type="button"
            onClick={() =>
              navigate(
                "/library/mathematics/probability-foundations"
              )
            }
            className="mt-6 rounded-xl bg-red-700 px-5 py-3 font-bold text-white"
          >
            Back to Probability Foundations
          </button>
        </div>
      </main>
    );
  }

  const completedLessons = getCompletedLessons(
    COURSE_ID,
    numericModuleNumber
  );

 const lessonCount =
  module.lessonCount ?? module.lessons.length;

  const completedCount = module.lessons.filter(
    (lesson) =>
      completedLessons.includes(lesson.slug)
  ).length;

  const progressPercentage =
    lessonCount > 0
      ? Math.round(
          (completedCount / lessonCount) * 1000
        ) / 10
      : 0;

  const moduleCompleted =
    lessonCount > 0 &&
    completedCount === lessonCount;

  const availableLessons = module.lessons.filter(
    (lesson) => lesson.status === "available"
  );

  const firstAvailableLesson =
    availableLessons[0] || null;

  const firstIncompleteAvailableLesson =
    availableLessons.find(
      (lesson) =>
        !completedLessons.includes(lesson.slug)
    ) || firstAvailableLesson;

  function handleBackToCourse() {
    navigate(
      "/library/mathematics/probability-foundations"
    );
  }

  function handleOpenLesson(lesson) {
    if (lesson.status !== "available") {
      return;
    }

    navigate(
      `/library/mathematics/probability-foundations/module/${numericModuleNumber}/lesson/${lesson.slug}`
    );
  }

  function handleContinue() {
    if (!firstIncompleteAvailableLesson) {
      return;
    }

    handleOpenLesson(firstIncompleteAvailableLesson);
  }

  return (
    <main className="min-h-screen bg-slate-50 pb-20">
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
            label: `Module ${numericModuleNumber}`,
          },
        ]}
      />

      {/* =====================================================
          MODULE HERO
      ====================================================== */}

      <header className="bg-gradient-to-br from-blue-950 via-indigo-900 to-slate-950 text-white">
        <div className="mx-auto max-w-7xl px-5 py-12">
          <button
            type="button"
            onClick={handleBackToCourse}
            className="text-sm font-bold text-blue-200 transition hover:text-white"
          >
            ← Back to Probability Foundations
          </button>

          <div className="mt-8 max-w-4xl">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-blue-300">
              Probability Foundations · Module{" "}
              {numericModuleNumber}
            </p>

            <h1 className="mt-4 text-4xl font-black leading-tight md:text-6xl">
              {module.title}
            </h1>

            {module.subtitle && (
              <p className="mt-4 text-xl font-semibold text-blue-100">
                {module.subtitle}
              </p>
            )}

            <p className="mt-5 max-w-3xl text-lg leading-8 text-blue-100">
              {module.description}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <HeroBadge>{module.level}</HeroBadge>

              <HeroBadge>
                {module.duration}
              </HeroBadge>

              <HeroBadge>
                {module.lessonCount} Lessons
              </HeroBadge>

              {completedCount > 0 && (
                <HeroBadge>
                  {completedCount} Completed ✓
                </HeroBadge>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* =====================================================
          MAIN CONTENT
      ====================================================== */}

      <div className="mx-auto grid max-w-7xl gap-8 px-5 py-10 lg:grid-cols-[minmax(0,1fr)_300px]">
        <div className="space-y-8">

          {/* Essential Question */}

          {module.essentialQuestion && (
            <section className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
              <p className="text-sm font-bold uppercase tracking-widest text-blue-600">
                Module Foundation
              </p>

              <h2 className="mt-2 text-2xl font-black text-slate-950">
                Essential Question
              </h2>

              <div className="mt-5 rounded-2xl border border-blue-200 bg-blue-50 p-5">
                <p className="text-lg font-bold leading-8 text-blue-950">
                  {module.essentialQuestion}
                </p>
              </div>
            </section>
          )}

          {/* Outcomes */}

          {module.outcomes?.length > 0 && (
            <section className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
              <p className="text-sm font-bold uppercase tracking-widest text-blue-600">
                What You Will Master
              </p>

              <h2 className="mt-2 text-2xl font-black text-slate-950">
                Module Learning Outcomes
              </h2>

              <div className="mt-6 grid gap-4 md:grid-cols-2">
                {module.outcomes.map(
                  (outcome, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-5"
                    >
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-blue-100 text-sm font-black text-blue-700">
                        ✓
                      </span>

                      <p className="leading-7 text-slate-700">
                        {outcome}
                      </p>
                    </div>
                  )
                )}
              </div>
            </section>
          )}

          {/* Lessons */}

          <section className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
            <p className="text-sm font-bold uppercase tracking-widest text-blue-600">
              Learning Journey
            </p>

            <h2 className="mt-2 text-3xl font-black text-slate-950">
              Module Lessons
            </h2>

            <p className="mt-3 leading-7 text-slate-600">
              Complete each lesson to build your
              understanding of probability step by
              step.
            </p>

            <div className="mt-8 space-y-4">
              {module.lessons.map((lesson) => {
                const isCompleted =
                  completedLessons.includes(
                    lesson.slug
                  );

                const isAvailable =
                  lesson.status === "available";

                return (
                  <article
                    key={lesson.id}
                    className={`rounded-2xl border p-5 transition ${
                      isCompleted
                        ? "border-emerald-200 bg-emerald-50"
                        : isAvailable
                          ? "border-slate-200 bg-white hover:border-blue-300 hover:shadow-sm"
                          : "border-slate-200 bg-slate-50"
                    }`}
                  >
                    <button
                      type="button"
                      disabled={!isAvailable}
                      onClick={() =>
                        handleOpenLesson(lesson)
                      }
                      className={`flex w-full items-start justify-between gap-5 text-left ${
                        isAvailable
                          ? "cursor-pointer"
                          : "cursor-not-allowed"
                      }`}
                    >
                      <div className="flex min-w-0 gap-4">
                        <span
                          className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl font-black ${
                            isCompleted
                              ? "bg-emerald-600 text-white"
                              : isAvailable
                                ? "bg-blue-600 text-white"
                                : "bg-slate-200 text-slate-500"
                          }`}
                        >
                          {isCompleted
                            ? "✓"
                            : lesson.lessonNumber}
                        </span>

                        <div>
                          <div className="flex flex-wrap items-center gap-3">
                            <p className="text-sm font-bold uppercase tracking-wider text-slate-500">
                              Lesson{" "}
                              {lesson.lessonNumber}
                            </p>

                            <span
                              className={`rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wide ${
                                isCompleted
                                  ? "bg-emerald-100 text-emerald-700"
                                  : isAvailable
                                    ? "bg-blue-100 text-blue-700"
                                    : "bg-slate-200 text-slate-500"
                              }`}
                            >
                              {isCompleted
                                ? "Completed"
                                : isAvailable
                                  ? "Available"
                                  : "Planned"}
                            </span>
                          </div>

                          <h3 className="mt-2 text-xl font-extrabold text-slate-950">
                            {lesson.title}
                          </h3>

                          {lesson.subtitle && (
                            <p className="mt-2 leading-7 text-slate-600">
                              {lesson.subtitle}
                            </p>
                          )}

                          <div className="mt-4 flex flex-wrap gap-3 text-sm font-semibold text-slate-500">
                            <span>
                              {lesson.duration}
                            </span>

                            <span>
                              • {lesson.level}
                            </span>
                          </div>
                        </div>
                      </div>

                      <span
                        className={`mt-2 text-2xl ${
                          isAvailable
                            ? "text-blue-600"
                            : "text-slate-300"
                        }`}
                      >
                        {isAvailable ? "→" : "🔒"}
                      </span>
                    </button>
                  </article>
                );
              })}
            </div>
          </section>
        </div>

        {/* ===================================================
            SIDEBAR
        ==================================================== */}

        <aside className="h-fit space-y-5 lg:sticky lg:top-6">
          <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm font-bold uppercase tracking-widest text-slate-500">
              Module Progress
            </p>

            <div className="mt-5 flex items-end justify-between gap-3">
              <p className="text-4xl font-black text-slate-950">
                {progressPercentage}%
              </p>

              <p className="text-sm font-semibold text-slate-500">
                {completedCount} / {lessonCount}
              </p>
            </div>

            <p className="mt-2 text-sm text-slate-600">
              {completedCount} of {lessonCount} lessons
              completed
            </p>

            <div className="mt-4 h-3 overflow-hidden rounded-full bg-slate-200">
              <div
                className={`h-full rounded-full transition-all duration-500 ${
                  moduleCompleted
                    ? "bg-emerald-500"
                    : "bg-blue-600"
                }`}
                style={{
                  width: `${progressPercentage}%`,
                }}
              />
            </div>

            {moduleCompleted && (
              <div className="mt-5 rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-center">
                <p className="font-extrabold text-emerald-800">
                  Module completed ✓
                </p>
              </div>
            )}

            {firstIncompleteAvailableLesson && (
              <button
                type="button"
                onClick={handleContinue}
                className="mt-6 w-full rounded-xl bg-blue-600 px-4 py-3 font-bold text-white transition hover:bg-blue-700"
              >
                {completedLessons.includes(
                  firstIncompleteAvailableLesson.slug
                )
                  ? "Review Lesson"
                  : "Continue Learning"}
              </button>
            )}
          </section>

          <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm font-bold uppercase tracking-widest text-slate-500">
              Module Overview
            </p>

            <div className="mt-5 space-y-4 text-sm">
              <SidebarRow
                label="Level"
                value={module.level}
              />

              <SidebarRow
                label="Duration"
                value={module.duration}
              />

              <SidebarRow
                label="Lessons"
                value={module.lessonCount}
              />

              <SidebarRow
                label="Available"
                value={availableLessons.length}
              />
            </div>
          </section>
        </aside>
      </div>
    </main>
  );
}

function HeroBadge({ children }) {
  return (
    <span className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-bold text-white backdrop-blur">
      {children}
    </span>
  );
}

function SidebarRow({ label, value }) {
  return (
    <div className="flex items-start justify-between gap-4 border-b border-slate-100 pb-3 last:border-0 last:pb-0">
      <span className="font-semibold text-slate-500">
        {label}
      </span>

      <span className="text-right font-bold text-slate-900">
        {value}
      </span>
    </div>
  );
}