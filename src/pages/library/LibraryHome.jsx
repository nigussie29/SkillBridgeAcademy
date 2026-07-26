

import { Link } from "react-router-dom";
const libraries = [
  {
    title: "Mathematics",
    icon: "📘",
    description:
      "Build strong mathematical foundations from high school through college-level mathematics.",
    topics: [
      "Algebra I",
      "Geometry",
      "Calculus",
      "Linear Algebra",
      "Probability",
    ],
    path: "/library/mathematics",
    available: true,
  },

  {
    title: "Computer Science",
    icon: "💻",
    description:
      "Learn programming, web development, databases, algorithms, and software engineering.",
    topics: [
      "Python",
      "Web Development",
      "SQL Fundamentals",
      "Algorithms",
    ],
    path: "/library/computer-science",
    available: true,
  },

  {
    title: "Data & AI",
    icon: "🤖",
    description:
      "Develop practical skills in analytics, business intelligence, machine learning, and artificial intelligence.",
    topics: [
      "Data Analytics",
      "Power BI",
      "Machine Learning",
      "SQL for Data Analysis",
    ],
    path: "/library/data-ai",
    available: true,
  },
];
export default function LibraryHome() {
  return (
    <main className="min-h-screen bg-slate-50 px-6 py-12">
      <div className="mx-auto max-w-7xl">
        {/* Hero */}
        <section className="rounded-3xl bg-gradient-to-br from-blue-800 to-indigo-900 px-8 py-12 text-white md:px-12">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-blue-200">
            SkillBridge Academy
          </p>

          <h1 className="mt-4 max-w-4xl text-4xl font-extrabold leading-tight md:text-6xl">
            The Knowledge Library
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-blue-100">
            Explore mathematics, computer science, data, and artificial
            intelligence through structured learning pathways.
          </p>

          <div className="mt-8 rounded-2xl bg-white/10 p-5 backdrop-blur">
            <p className="text-xl font-bold">
              Learn. Practice. Build. Master. Apply. Research. Create. Lead.
            </p>
          </div>
        </section>

        {/* Library Categories */}
        <section className="mt-12">
          <p className="text-sm font-bold uppercase tracking-wide text-blue-600">
            Explore Knowledge
          </p>

          <h2 className="mt-2 text-3xl font-extrabold text-slate-900">
            Choose a field of study
          </h2>

          <p className="mt-3 max-w-3xl leading-7 text-slate-600">
            Start with a field, explore its courses, and continue through
            modules and lessons.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {libraries.map((library) => (
              <article
                key={library.title}
                className="flex flex-col rounded-3xl bg-white p-7 shadow-sm"
              >
                <div className="text-5xl">
                  {library.icon}
                </div>

                <h3 className="mt-5 text-2xl font-extrabold text-slate-900">
                  {library.title}
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  {library.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {library.topics.map((topic) => (
                    <span
                      key={topic}
                      className="rounded-full bg-slate-100 px-3 py-1 text-sm font-semibold text-slate-700"
                    >
                      {topic}
                    </span>
                  ))}
                </div>

                <div className="mt-auto pt-7">
                  {library.available ? (
                    <Link
                      to={library.path}
                      className="inline-block rounded-xl bg-blue-600 px-5 py-3 font-bold text-white transition hover:bg-blue-700"
                    >
                      Explore {library.title}
                    </Link>
                  ) : (
                    <span className="inline-block rounded-xl bg-slate-100 px-5 py-3 font-bold text-slate-500">
                      Coming Soon
                    </span>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}