import { Link } from "react-router-dom";

export default function CourseTemplate({ course }) {
  if (!course) {
    return (
      <main className="min-h-screen bg-slate-50 px-6 py-20 text-center">
        <h1 className="text-3xl font-extrabold text-slate-900">
          Course not found
        </h1>

        <Link
          to="/courses"
          className="mt-6 inline-block font-bold text-blue-600"
        >
          Back to Courses
        </Link>
      </main>
    );
  }

  const progress = course.progress ?? 0;
  const lessons = course.lessons ?? [];
  const outcomes = course.outcomes ?? [];
  const modules = course.modules ?? [];
  const backPath = course.backPath ?? "/library";
const backLabel = course.backLabel ?? "Back to Knowledge Library";

  return (
    <main className="min-h-screen bg-slate-50 px-6 py-10">
     <div className="mx-auto max-w-7xl">
  {/* Back navigation */}
  <Link
    to={backPath}
    className="mb-6 inline-flex items-center gap-2 text-sm font-bold text-blue-700 transition hover:text-blue-900"
  >
    <span aria-hidden="true">←</span>
    {backLabel}
  </Link>

  {/* Course Hero */} 
        {/* Course Hero */}
        <section className="rounded-3xl bg-gradient-to-br from-blue-700 to-indigo-800 p-8 text-white">
          <p className="font-bold uppercase tracking-wide text-blue-200">
            {course.category}
          </p>

          <h1 className="mt-3 text-4xl font-extrabold md:text-6xl">
            {course.title}
          </h1>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-blue-100">
            {course.description}
          </p>

          <div className="mt-8 flex flex-wrap gap-4 text-sm font-bold">
            <span className="rounded-full bg-white/10 px-4 py-2">
              {course.level}
            </span>

            <span className="rounded-full bg-white/10 px-4 py-2">
              {course.duration}
            </span>

            <span className="rounded-full bg-white/10 px-4 py-2">
              {lessons.length} Lessons
            </span>
          </div>
   
          {course.startPath && (
  <Link
    to={course.startPath}
    className="mt-8 inline-flex items-center rounded-xl bg-white px-6 py-3 font-extrabold text-blue-700 shadow-sm transition hover:-translate-y-0.5 hover:bg-blue-50"
  >
    {progress > 0 ? "Continue Course" : "Begin Course"}
    <span className="ml-2">→</span>
  </Link>
)}
        </section>

        {/* Progress */}
        <section className="mt-8 rounded-3xl bg-white p-8 shadow-sm">
          <div className="flex items-center justify-between gap-4">
            <div>
              <h2 className="text-2xl font-extrabold text-slate-900">
                Course Progress
              </h2>

              <p className="mt-1 text-slate-500">
                Track your learning journey
              </p>
            </div>

            <p className="text-3xl font-extrabold text-blue-600">
              {progress}%
            </p>
          </div>

          <div className="mt-6 h-4 overflow-hidden rounded-full bg-slate-200">
            <div
              className="h-full rounded-full bg-blue-600 transition-all"
              style={{ width: `${progress}%` }}
            />
          </div>
        </section>

        <div className="mt-8 grid gap-8 lg:grid-cols-3">
          <div className="space-y-8 lg:col-span-2">
            {/* Outcomes */}
            <section className="rounded-3xl bg-white p-8 shadow-sm">
              <h2 className="text-2xl font-extrabold text-slate-900">
                What You Will Learn
              </h2>

              <div className="mt-6 grid gap-4 md:grid-cols-2">
                {outcomes.map((outcome) => (
                  <div
                    key={outcome}
                    className="flex items-start gap-3 rounded-2xl bg-slate-50 p-5"
                  >
                    <span className="font-bold text-green-600">✓</span>

                    <p className="text-slate-700">{outcome}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Lessons */}
            {/* Modules */}
<section className="rounded-3xl bg-white p-8 shadow-sm">
  <div className="flex flex-wrap items-end justify-between gap-4">
    <div>
      <p className="text-sm font-bold uppercase tracking-widest text-blue-600">
        Learning pathway
      </p>

      <h2 className="mt-2 text-2xl font-extrabold text-slate-900">
        Course Modules
      </h2>

      <p className="mt-2 text-slate-600">
        Progress through the course one module at a time.
      </p>
    </div>

    <span className="rounded-full bg-blue-50 px-4 py-2 text-sm font-bold text-blue-700">
      {modules.length} modules
    </span>
  </div>

  <div className="mt-6 space-y-4">
    {modules.map((module) => {
      const isAvailable = module.status === "available";

      return (
        <article
          key={module.id}
          className="rounded-2xl border border-slate-200 bg-white p-5"
        >
          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <div className="flex items-start gap-4">
              <div
                className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl font-extrabold ${
                  isAvailable
                    ? "bg-blue-100 text-blue-700"
                    : "bg-slate-100 text-slate-500"
                }`}
              >
                {module.id}
              </div>

              <div>
                <p className="text-sm font-bold uppercase tracking-wide text-slate-500">
                  Module {module.id}
                </p>

                <h3 className="mt-1 text-xl font-extrabold text-slate-900">
                  {module.title}
                </h3>

                <p className="mt-2 max-w-2xl leading-7 text-slate-600">
                  {module.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-700">
                    {module.level}
                  </span>

                  <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-700">
                    {module.duration}
                  </span>

                  <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-700">
                    {module.lessonCount} lessons
                  </span>
                </div>
              </div>
            </div>

            {isAvailable && module.path ? (
              <Link
                to={module.path}
                className="shrink-0 rounded-xl bg-blue-600 px-5 py-3 text-center font-bold text-white transition hover:bg-blue-700"
              >
                Open Module
              </Link>
            ) : (
              <span className="shrink-0 rounded-xl bg-slate-100 px-5 py-3 text-sm font-bold text-slate-500">
                Planned
              </span>
            )}
          </div>
        </article>
      );
    })}
  </div>
</section>
          </div>

          <aside className="space-y-8">
            {/* Final Project */}
            <section className="rounded-3xl bg-white p-8 shadow-sm">
              <p className="text-sm font-bold uppercase tracking-wide text-blue-600">
                Final Project
              </p>

              <h2 className="mt-2 text-2xl font-extrabold text-slate-900">
                {course.finalProject?.title}
              </h2>

              <p className="mt-4 leading-7 text-slate-600">
                {course.finalProject?.description}
              </p>

              {course.finalProject?.path && (
                <Link
                  to={course.finalProject.path}
                  className="mt-6 block rounded-xl bg-blue-600 px-5 py-3 text-center font-bold text-white hover:bg-blue-700"
                >
                  View Final Project
                </Link>
              )}
            </section>

            {/* Certificate */}
            <section className="rounded-3xl bg-white p-8 shadow-sm">
              <div className="text-4xl">🏆</div>

              <h2 className="mt-4 text-2xl font-extrabold text-slate-900">
                Course Certificate
              </h2>

              <p className="mt-4 leading-7 text-slate-600">
                Complete all lessons and the final project to earn your
                SkillBridge Academy certificate.
              </p>

              <p className="mt-5 font-bold text-slate-800">
                Requirement: {course.certificateRequirement ?? "100% completion"}
              </p>
            </section>
          </aside>
        </div>
      </div>
    </main>
  );
}