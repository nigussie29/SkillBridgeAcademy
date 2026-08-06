import { Link } from "react-router-dom";

const computerScienceCourses = [
  {
    id: "python-foundations",
    title: "Python Foundations",
    description:
      "Learn programming fundamentals, problem solving, variables, conditions, loops, functions, collections, debugging, and beginner projects.",
    level: "Beginner",
    duration: "8 weeks",
    status: "available",
    path: "/library/python/python-foundations",
    accent:
      "from-blue-700 via-indigo-700 to-slate-900",
  },
  {
    id: "web-development-foundations",
    title: "Web Development Foundations",
    description:
      "Learn HTML, CSS, JavaScript, responsive design, and modern web application development.",
    level: "Beginner",
    duration: "Planned",
    status: "planned",
    path: null,
    accent:
      "from-emerald-800 via-teal-800 to-slate-900",
  },
  {
    id: "database-foundations",
    title: "Database Foundations",
    description:
      "Learn relational databases, data modeling, SQL, PostgreSQL, and practical database development.",
    level: "Beginner",
    duration: "Planned",
    status: "planned",
    path: null,
    accent:
      "from-violet-800 via-purple-800 to-slate-900",
  },
];

export default function ComputerScience() {
  return (
    <main className="min-h-screen bg-slate-50 pb-20">
      {/* School hero */}
      <section className="bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950 text-white">
        <div className="mx-auto max-w-7xl px-6 py-14 md:py-18">
          <Link
            to="/library"
            className="text-sm font-bold text-blue-200 transition hover:text-white"
          >
            ← Back to Knowledge Library
          </Link>

          <p className="mt-8 text-sm font-bold uppercase tracking-[0.24em] text-blue-300">
            SkillBridge Academy
          </p>

          <h1 className="mt-3 max-w-4xl text-4xl font-black leading-tight md:text-6xl">
            School of Computer Science
          </h1>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-200">
            Learn programming, software development, web technologies,
            databases, algorithms, and problem solving through structured
            courses and practical projects.
          </p>
        </div>
      </section>

      {/* Course catalog */}
      <section className="mx-auto max-w-7xl px-6 py-12">
        <div className="flex flex-wrap items-end justify-between gap-5">
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-blue-600">
              Course catalog
            </p>

            <h2 className="mt-2 text-3xl font-black text-slate-950">
              Choose your course
            </h2>

            <p className="mt-3 max-w-3xl leading-7 text-slate-600">
              Begin with Python Foundations and continue into web development,
              databases, algorithms, and software engineering.
            </p>
          </div>

          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-bold text-blue-700">
            1 available course
          </span>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {computerScienceCourses.map((course) => (
            <CourseCard
              key={course.id}
              course={course}
            />
          ))}
        </div>
      </section>
    </main>
  );
}

function CourseCard({ course }) {
  const isAvailable = course.status === "available";

  const content = (
    <>
      <div
        className={`bg-gradient-to-br ${course.accent} p-7 text-white`}
      >
        <div className="flex items-start justify-between gap-4">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/70">
            Computer Science
          </p>

          <span
            className={`rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wide ${
              isAvailable
                ? "bg-emerald-400/20 text-emerald-100"
                : "bg-white/10 text-white/70"
            }`}
          >
            {isAvailable ? "Available" : "Planned"}
          </span>
        </div>

        <h3 className="mt-5 text-2xl font-black">
          {course.title}
        </h3>

        <p className="mt-3 leading-7 text-white/80">
          {course.description}
        </p>
      </div>

      <div className="flex flex-1 flex-col p-7">
        <div className="flex flex-wrap gap-2">
          <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-blue-700">
            {course.level}
          </span>

          <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-700">
            {course.duration}
          </span>
        </div>

        <div
          className={`mt-auto flex items-center justify-between pt-8 font-bold ${
            isAvailable
              ? "text-blue-700"
              : "text-slate-400"
          }`}
        >
          <span>
            {isAvailable
              ? "Explore Course"
              : "Coming Soon"}
          </span>

          {isAvailable && (
            <span className="transition-transform group-hover:translate-x-1">
              →
            </span>
          )}
        </div>
      </div>
    </>
  );

  if (isAvailable && course.path) {
    return (
      <Link
        to={course.path}
        className="group flex min-h-[390px] flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
      >
        {content}
      </Link>
    );
  }

  return (
    <article className="flex min-h-[390px] flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white opacity-80 shadow-sm">
      {content}
    </article>
  );
}