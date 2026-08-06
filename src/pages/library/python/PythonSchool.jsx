import { Link } from "react-router-dom";

export default function PythonSchool() {
  return (
    <main className="min-h-screen bg-slate-50 pb-20">
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950 text-white">
        <div className="mx-auto max-w-7xl px-5 py-16 md:py-20">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-blue-300">
            SkillBridge Academy
          </p>

          <h1 className="mt-4 max-w-4xl text-4xl font-black leading-tight md:text-6xl">
            School of Python and Software Development
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-200">
            Learn Python from beginner foundations to professional software
            development, automation, data science, artificial intelligence,
            APIs, and real-world applications.
          </p>
        </div>
      </section>

      {/* School content */}
      <section className="mx-auto max-w-7xl px-5 py-12">
        <div className="mb-8">
          <p className="text-sm font-bold uppercase tracking-widest text-blue-600">
            Learning pathway
          </p>

          <h2 className="mt-2 text-3xl font-black text-slate-950">
            Begin your Python journey
          </h2>

          <p className="mt-3 max-w-3xl leading-7 text-slate-600">
            Start with Python Foundations, then continue into application
            development, professional engineering, data and AI, automation,
            and APIs.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {/* Python Foundations */}
          <Link
  to="/library/python/python-foundations"
  className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
>
  <div className="bg-gradient-to-br from-blue-700 via-indigo-700 to-slate-900 p-7 text-white">
    <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-200">
      Course 01
    </p>

    <h3 className="mt-3 text-2xl font-black">
      Python Foundations
    </h3>

    <p className="mt-3 leading-7 text-blue-100">
      Learn variables, data types, input, output, conditions, loops,
      functions, collections, and beginner projects.
    </p>
  </div>

  <div className="p-7">
    <div className="flex flex-wrap gap-2">
      <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-blue-700">
        Beginner
      </span>

      <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-700">
        8 weeks
      </span>

      <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-700">
        3 modules
      </span>
    </div>

    <div className="mt-8 flex items-center justify-between font-bold text-blue-700">
      Explore Course

      <span className="transition group-hover:translate-x-1">
        →
      </span>
    </div>
  </div>
</Link>

          {/* Future course */}
          <article className="overflow-hidden rounded-3xl border border-slate-200 bg-white opacity-80">
            <div className="bg-gradient-to-br from-emerald-800 via-teal-800 to-slate-900 p-7 text-white">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-200">
                Course 02
              </p>

              <h3 className="mt-3 text-2xl font-black">
                Python Application Development
              </h3>

              <p className="mt-3 leading-7 text-emerald-100">
                Build organized, multi-file Python applications using
                functions, files, modules, classes, testing, and databases.
              </p>
            </div>

            <div className="p-7">
              <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-600">
                Planned
              </span>
            </div>
          </article>

          {/* Future course */}
          <article className="overflow-hidden rounded-3xl border border-slate-200 bg-white opacity-80">
            <div className="bg-gradient-to-br from-violet-800 via-purple-800 to-slate-900 p-7 text-white">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-violet-200">
                Course 03
              </p>

              <h3 className="mt-3 text-2xl font-black">
                Python for Data and AI
              </h3>

              <p className="mt-3 leading-7 text-violet-100">
                Use Python for data analysis, machine learning, artificial
                intelligence, automation, and intelligent applications.
              </p>
            </div>

            <div className="p-7">
              <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-600">
                Planned
              </span>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}