import { Link } from "react-router-dom";
import {
  ArrowRight,
  BarChart3,
  Brain,
  Briefcase,
  Code2,
  FolderKanban,
  Sigma,
  Sparkles,
} from "lucide-react";

const journeys = [
  {
    id: "mathematics",
    number: "01",
    icon: Sigma,
    eyebrow: "Foundation Journey",
    title: "Think Mathematically",
    description:
      "Strengthen algebra, probability, statistics, calculus, and mathematical reasoning.",
    outcome:
      "Reason clearly • Model problems • Build quantitative confidence",
    path: "/library/mathematics",
    action: "Start Mathematics",
  },
  {
    id: "coding",
    number: "02",
    icon: Code2,
    eyebrow: "Builder Journey",
    title: "Learn to Code",
    description:
      "Develop programming skills through Python, software thinking, problem solving, and practical development.",
    outcome:
      "Write code • Solve problems • Build working applications",
    path: "/library/computer-science",
    action: "Start Coding",
  },
  {
    id: "data",
    number: "03",
    icon: BarChart3,
    eyebrow: "Data Journey",
    title: "Turn Data Into Decisions",
    description:
      "Learn how to analyze information, discover patterns, communicate insights, and support decisions.",
    outcome:
      "Analyze • Visualize • Explain • Decide",
    path: "/library/data-ai",
    action: "Explore Data",
  },
  {
    id: "ai",
    number: "04",
    icon: Brain,
    eyebrow: "Intelligence Journey",
    title: "Build With AI",
    description:
      "Move from understanding artificial intelligence to creating models, intelligent workflows, and practical solutions.",
    outcome:
      "Understand AI • Experiment • Build • Evaluate",
    path: "/library/data-ai",
    action: "Explore AI",
  },
  {
    id: "projects",
    number: "05",
    icon: FolderKanban,
    eyebrow: "Creation Journey",
    title: "Create Real Work",
    description:
      "Turn what you learn into projects, investigations, prototypes, dashboards, models, and portfolio evidence.",
    outcome:
      "Build • Create • Document • Prove",
    path: "/projects",
    action: "Explore Projects",
  },
  {
    id: "career",
    number: "06",
    icon: Briefcase,
    eyebrow: "Opportunity Journey",
    title: "Grow Into Your Future",
    description:
      "Connect your knowledge, projects, and evidence to future study, research, career development, and opportunity.",
    outcome:
      "Skills • Evidence • Portfolio • Opportunity",
    path: "/courses",
    action: "Explore Pathways",
  },
];

export default function LearningJourneySection() {
  return (
    <section className="relative overflow-hidden bg-slate-950 px-6 py-24 text-white">

      {/* Background glow */}
      <div
        aria-hidden="true"
        className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-blue-600/20 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-indigo-600/20 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl">

        {/* Header */}
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">

          <div>
            <p className="text-sm font-extrabold uppercase tracking-[0.28em] text-blue-400">
              Learning Journeys
            </p>

            <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
              Choose where
              <span className="block text-blue-400">
                your learning takes you.
              </span>
            </h2>
          </div>

          <div className="max-w-2xl">
            <p className="text-lg leading-8 text-slate-300">
              Academic Schools organize what you study.
              SkillBridge Learning Journeys organize what you want
              to become capable of doing.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-2 text-sm font-bold">
              <span className="rounded-lg bg-white/10 px-3 py-2">
                Learn
              </span>

              <span className="text-blue-400">→</span>

              <span className="rounded-lg bg-white/10 px-3 py-2">
                Build
              </span>

              <span className="text-blue-400">→</span>

              <span className="rounded-lg bg-white/10 px-3 py-2">
                Evidence
              </span>

              <span className="text-blue-400">→</span>

              <span className="rounded-lg bg-blue-600 px-3 py-2">
                Opportunity
              </span>
            </div>
          </div>

        </div>

        {/* Journey Cards */}
        <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-3">

          {journeys.map((journey) => {
            const Icon = journey.icon;

            return (
              <article
                key={journey.id}
                className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.055] p-7 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-blue-400/40 hover:bg-white/[0.08]"
              >
                {/* Number */}
                <span className="absolute right-6 top-5 text-5xl font-black text-white/[0.05]">
                  {journey.number}
                </span>

                {/* Icon */}
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-blue-400/20 bg-blue-500/10 text-blue-300">
                  <Icon size={27} strokeWidth={2.1} />
                </div>

                <p className="mt-6 text-xs font-extrabold uppercase tracking-[0.2em] text-blue-400">
                  {journey.eyebrow}
                </p>

                <h3 className="mt-3 text-2xl font-black text-white">
                  {journey.title}
                </h3>

                <p className="mt-4 min-h-[84px] leading-7 text-slate-300">
                  {journey.description}
                </p>

                {/* Outcome */}
                <div className="mt-6 rounded-2xl border border-white/10 bg-slate-950/60 p-4">
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    You develop
                  </p>

                  <p className="mt-2 text-sm font-bold leading-6 text-slate-200">
                    {journey.outcome}
                  </p>
                </div>

                <Link
                  to={journey.path}
                  className="mt-7 inline-flex items-center gap-2 font-extrabold text-blue-300 transition group-hover:gap-3 group-hover:text-blue-200"
                >
                  {journey.action}
                  <ArrowRight size={18} />
                </Link>

              </article>
            );
          })}

        </div>

        {/* SkillBridge journey statement */}
        <div className="mt-16 overflow-hidden rounded-[2rem] border border-blue-400/20 bg-gradient-to-r from-blue-600/15 via-indigo-600/10 to-violet-600/15 p-8 sm:p-10">

          <div className="grid gap-8 lg:grid-cols-[auto_1fr_auto] lg:items-center">

            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-xl shadow-blue-600/20">
              <Sparkles size={30} />
            </div>

            <div>
              <p className="text-sm font-extrabold uppercase tracking-[0.22em] text-blue-300">
                Your Journey Is Not Just Course Completion
              </p>

              <h3 className="mt-2 text-2xl font-black sm:text-3xl">
                Turn learning into evidence of what you can do.
              </h3>

              <p className="mt-3 max-w-3xl leading-7 text-slate-300">
                SkillBridge connects lessons to reasoning, models,
                code, projects, portfolio evidence, research, and
                future opportunity.
              </p>
            </div>

            <Link
              to="/library"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 font-extrabold text-slate-950 transition hover:bg-blue-50"
            >
              Open Library
              <ArrowRight size={18} />
            </Link>

          </div>

        </div>

      </div>
    </section>
  );
}