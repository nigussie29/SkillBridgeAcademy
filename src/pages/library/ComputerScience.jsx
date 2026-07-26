import { Link } from "react-router-dom";

export default function ComputerScience() {
  return (
    <main className="min-h-screen bg-slate-50 px-6 py-12">
      <div className="mx-auto max-w-7xl">
        <Link
          to="/library"
          className="text-sm font-semibold text-blue-600 hover:text-blue-700"
        >
          ← Back to Library
        </Link>

        <p className="mt-8 text-sm font-bold uppercase tracking-widest text-blue-600">
          SkillBridge Academy
        </p>

        <h1 className="mt-2 text-4xl font-extrabold text-slate-900">
          Computer Science
        </h1>

        <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600">
          Learn programming, web development, databases, algorithms,
          and software engineering through practical projects.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <LibraryArea
            title="Python"
            description="Programming foundations, problem solving, automation, and application development."
          />

          <LibraryArea
            title="Web Development"
            description="HTML, CSS, JavaScript, React, and modern web application development."
          />

          <LibraryArea
            title="Databases"
            description="Database foundations, relational modeling, and SQL."
          />
        </div>
      </div>
    </main>
  );
}

function LibraryArea({ title, description }) {
  return (
    <article className="rounded-3xl bg-white p-7 shadow-sm">
      <h2 className="text-2xl font-extrabold text-slate-900">
        {title}
      </h2>

      <p className="mt-3 leading-7 text-slate-600">
        {description}
      </p>

      <p className="mt-6 font-semibold text-slate-400">
        Courses coming soon
      </p>
    </article>
  );
}