import { Link } from "react-router-dom";

export default function DataAI() {
  return (
    <main className="min-h-screen bg-slate-50 px-6 py-12">
      <div className="mx-auto max-w-7xl">
        <Link
          to="/library"
          className="text-sm font-semibold text-blue-600 hover:text-blue-700"
        >
          ← Back to Library
        </Link>

        <p className="mt-8 text-sm font-bold uppercase tracking-widest text-violet-600">
          SkillBridge Academy
        </p>

        <h1 className="mt-2 text-4xl font-extrabold text-slate-900">
          Data & AI
        </h1>

        <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600">
          Build skills in data analytics, business intelligence,
          machine learning, and artificial intelligence.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          <LibraryArea
            title="Data Analytics"
            description="Analyze data, discover patterns, and communicate insights."
          />

          <LibraryArea
            title="Power BI"
            description="Build data models, DAX measures, dashboards, and business intelligence solutions."
          />

          <LibraryArea
            title="Machine Learning"
            description="Learn predictive modeling, evaluation, feature engineering, and applied machine learning."
          />

          <LibraryArea
            title="SQL for Data Analysis"
            description="Query, aggregate, join, and analyze relational data using SQL."
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