import { Link } from "react-router-dom";

const heroHighlights = [
  "Learn with clear pathways",
  "Build portfolio-ready projects",
  "Track progress in one workspace",
  "Grow with Luminery guidance",
];

export default function HomeHero() {
  return (
    <section className="relative overflow-hidden bg-slate-950 px-6 py-20 text-white md:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(37,99,235,0.35),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(124,58,237,0.28),_transparent_35%)]" />

      <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div>
          <p className="inline-flex rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-2 text-sm font-bold text-blue-200">
  Learning → Creation → Opportunity
</p>
          <h1 className="mt-6 max-w-4xl text-5xl font-black leading-tight tracking-tight md:text-7xl">
            Build skills.
            <span className="block text-blue-400">Create real work.</span>
            Grow into your future.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 md:text-xl">
            A complete learning environment for mathematics, technology, data,
            artificial intelligence, projects, research, and career growth.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <Link
  to="/courses"
  className="rounded-xl bg-blue-600 px-6 py-3 text-center font-bold text-white transition hover:bg-blue-500"
>
  Explore Courses
</Link>

            <button
  type="button"
  onClick={() => {
    document
      .getElementById("learning-os")
      ?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
  }}
  className="rounded-xl border border-white/20 bg-white/5 px-6 py-3 text-center font-bold text-white transition hover:bg-white/10"
>
  Open My Learning OS
</button>
          </div>

          <div className="mt-10 grid gap-3 sm:grid-cols-2">
            {heroHighlights.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 text-sm font-semibold text-slate-300"
              >
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-300">
                  ✓
                </span>
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-2xl backdrop-blur">
          <div className="rounded-2xl bg-white p-6 text-slate-900">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm font-bold uppercase tracking-wide text-blue-600">
                  Student workspace
                </p>

                <h2 className="mt-2 text-2xl font-extrabold">
                  Your learning journey, organized
                </h2>
              </div>

              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-100 text-xl font-black text-blue-700">
                J
              </div>
            </div>

            <div className="mt-7 rounded-2xl bg-slate-950 p-5 text-white">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-400">Current pathway</p>
                  <p className="mt-1 font-bold">
                    Data Analytics Foundations
                  </p>
                </div>

                <span className="rounded-full bg-blue-500/20 px-3 py-1 text-sm font-bold text-blue-300">
                  42%
                </span>
              </div>

              <div className="mt-5 h-3 overflow-hidden rounded-full bg-white/10">
                <div className="h-full w-[42%] rounded-full bg-blue-500" />
              </div>

              <div className="mt-6 grid grid-cols-3 gap-3">
                <Metric value="7" label="Lessons" />
                <Metric value="2" label="Projects" />
                <Metric value="5" label="Day streak" />
              </div>
            </div>

            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <PreviewCard
                label="Continue learning"
                title="Python Data Analysis"
                detail="Lesson 8 of 18"
              />

              <PreviewCard
                label="Next project"
                title="Sales Dashboard"
                detail="Power BI portfolio project"
              />
            </div>

            <div className="mt-5 rounded-2xl bg-violet-50 p-5">
              <p className="text-sm font-bold uppercase tracking-wide text-violet-700">
                Luminery guidance
              </p>

              <p className="mt-2 font-bold text-slate-900">
                Your next best step is to complete the data-cleaning practice
                before starting the dashboard project.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Metric({ value, label }) {
  return (
    <div className="rounded-xl bg-white/5 p-3 text-center">
      <p className="text-xl font-extrabold">{value}</p>
      <p className="mt-1 text-xs text-slate-400">{label}</p>
    </div>
  );
}

function PreviewCard({ label, title, detail }) {
  return (
    <article className="rounded-2xl border border-slate-200 p-4">
      <p className="text-xs font-bold uppercase tracking-wide text-blue-600">
        {label}
      </p>

      <h3 className="mt-2 font-extrabold text-slate-900">{title}</h3>

      <p className="mt-1 text-sm text-slate-500">{detail}</p>
    </article>
  );
}