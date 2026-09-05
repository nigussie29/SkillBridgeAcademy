import { Link } from "react-router-dom";
import {
  ArrowRight,
  BookOpen,
  Brain,
  Code2,
  Database,
  FlaskConical,
  GraduationCap,
  Settings,
  Sparkles,
} from "lucide-react";

import { schools } from "../../data/schools.js";

const schoolIcons = {
  mathematics: BookOpen,
  "computer-science": Code2,
  "artificial-intelligence": Brain,
  "data-science": Database,
  engineering: Settings,
  research: FlaskConical,
};

const availableSchools = new Set([
  "mathematics",
]);

export default function Schools() {
  return (
    <main className="min-h-screen bg-slate-50">

      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-950 via-indigo-950 to-slate-950 px-6 py-20 text-white md:py-24">
        <div
          aria-hidden="true"
          className="absolute -left-32 top-0 h-96 w-96 rounded-full bg-blue-500/20 blur-3xl"
        />

        <div
          aria-hidden="true"
          className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-violet-500/20 blur-3xl"
        />

        <div className="relative mx-auto max-w-7xl">

          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-400/10 px-4 py-2 text-sm font-bold text-blue-200">
              <GraduationCap size={18} />
              SkillBridge Academic Schools
            </div>

            <h1 className="mt-7 text-5xl font-black tracking-tight sm:text-6xl lg:text-7xl">
              Choose the field.
              <span className="block text-blue-400">
                Build the capability.
              </span>
              <span className="block">
                Create your future.
              </span>
            </h1>

            <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-300 md:text-xl">
              SkillBridge Academic Schools organize learning around
              meaningful disciplines while connecting knowledge to
              projects, research, portfolio evidence, and real-world
              opportunities.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              {[
                "Learn",
                "Practice",
                "Build",
                "Master",
                "Apply",
                "Create",
                "Lead",
              ].map((stage, index) => (
                <span
                  key={stage}
                  className={`rounded-full border px-4 py-2 text-sm font-bold ${
                    index === 6
                      ? "border-amber-300/40 bg-amber-300/10 text-amber-200"
                      : "border-white/10 bg-white/5 text-slate-300"
                  }`}
                >
                  {stage}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SCHOOL INTRO */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl">

          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-extrabold uppercase tracking-[0.28em] text-blue-600">
              Academic Schools
            </p>

            <h2 className="mt-4 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">
              Choose Your School
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600">
              Each school provides a structured environment for
              learning, building projects, developing deeper expertise,
              and creating evidence of what you can do.
            </p>
          </div>

          {/* SCHOOL GRID */}
          <div className="mt-14 grid gap-7 md:grid-cols-2 xl:grid-cols-3">
            {schools.map((school) => {
              const Icon =
                schoolIcons[school.id] ?? Sparkles;

              const isAvailable =
                availableSchools.has(school.id);

              return (
                <article
                  key={school.id}
                  className="group relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="absolute right-0 top-0 h-32 w-32 rounded-bl-full bg-blue-50 transition group-hover:bg-blue-100" />

                  <div className="relative">

                    {/* Icon and status */}
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-lg shadow-blue-600/20">
                        <Icon size={30} strokeWidth={2.1} />
                      </div>

                      <span
                        className={`rounded-full px-3 py-1.5 text-xs font-extrabold uppercase tracking-wide ${
                          isAvailable
                            ? "bg-emerald-50 text-emerald-700"
                            : "bg-slate-100 text-slate-500"
                        }`}
                      >
                        {isAvailable
                          ? "Open"
                          : "Coming Soon"}
                      </span>
                    </div>

                    {/* School */}
                    <p className="mt-7 text-xs font-extrabold uppercase tracking-[0.2em] text-blue-600">
                      SkillBridge School
                    </p>

                    <h3 className="mt-2 text-2xl font-black text-slate-950">
                      {school.title}
                    </h3>

                    <p className="mt-4 min-h-[84px] leading-7 text-slate-600">
                      {school.description}
                    </p>

                    {/* Capability line */}
                    <div className="mt-6 border-t border-slate-100 pt-5">
                      <p className="text-sm font-bold text-slate-500">
                        Learning pathway
                      </p>

                      <p className="mt-2 text-sm font-semibold leading-6 text-slate-800">
                        Knowledge → Skills → Projects → Evidence
                      </p>
                    </div>

                    {/* Action */}
                    <div className="mt-7">
                      {isAvailable ? (
                        <Link
                          to={school.path}
                          className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3.5 font-bold text-white transition hover:bg-blue-500"
                        >
                          Enter School
                          <ArrowRight size={18} />
                        </Link>
                      ) : (
                        <div className="flex w-full items-center justify-center rounded-xl border border-slate-200 bg-slate-50 px-5 py-3.5 font-bold text-slate-500">
                          School in Development
                        </div>
                      )}
                    </div>

                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* DIFFERENTIATOR */}
      <section className="border-y border-slate-200 bg-white px-6 py-20">
        <div className="mx-auto max-w-7xl">

          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">

            <div>
              <p className="text-sm font-extrabold uppercase tracking-[0.28em] text-blue-600">
                More Than Subjects
              </p>

              <h2 className="mt-4 text-4xl font-black tracking-tight text-slate-950">
                A school should lead to capability.
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-600">
                SkillBridge connects academic knowledge with real
                work. Students do not simply complete courses—they
                reason, model, code, investigate, build, create, and
                develop evidence of their abilities.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">

              <OutcomeCard
                number="01"
                title="Understand"
                description="Build strong conceptual foundations."
              />

              <OutcomeCard
                number="02"
                title="Build"
                description="Turn knowledge into projects and solutions."
              />

              <OutcomeCard
                number="03"
                title="Create"
                description="Produce original work and portfolio evidence."
              />

              <OutcomeCard
                number="04"
                title="Advance"
                description="Connect learning to research, career, and opportunity."
              />

            </div>
          </div>
        </div>
      </section>

      {/* CLOSING */}
      <section className="bg-slate-950 px-6 py-20 text-white">
        <div className="mx-auto max-w-5xl text-center">

          <p className="text-sm font-extrabold uppercase tracking-[0.28em] text-blue-400">
            The SkillBridge Difference
          </p>

          <h2 className="mt-4 text-4xl font-black sm:text-5xl">
            Don't just study a field.
            <span className="block text-blue-400">
              Build evidence that you can work in it.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Every SkillBridge School connects learning to creation,
            portfolio development, research, and future opportunity.
          </p>

          <Link
            to="/courses"
            className="mt-9 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-7 py-4 font-bold text-white transition hover:bg-blue-500"
          >
            Explore Courses
            <ArrowRight size={18} />
          </Link>

        </div>
      </section>

    </main>
  );
}

function OutcomeCard({
  number,
  title,
  description,
}) {
  return (
    <article className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
      <span className="text-sm font-black text-blue-600">
        {number}
      </span>

      <h3 className="mt-3 text-xl font-black text-slate-950">
        {title}
      </h3>

      <p className="mt-2 leading-7 text-slate-600">
        {description}
      </p>
    </article>
  );
}