import {
  ArrowRight,
  BarChart3,
  BookOpenCheck,
  BrainCircuit,
  CheckCircle2,
  Clock3,
  Code2,
  Database,
  Gauge,
  Layers3,
  ShieldCheck,
  Sparkles,
  Target,
  Award,
  Workflow,
} from "lucide-react";
import { Link } from "react-router-dom";
import { dataAiFoundationsCourse as course } from "../../data/courses/dataAiFoundationsCourse";

const phaseStyles = {
  understand: {
    label: "Understand",
    badge: "bg-emerald-100 text-emerald-800",
    border: "border-emerald-200",
    number: "bg-emerald-700",
  },
  analyze: {
    label: "Analyze",
    badge: "bg-blue-100 text-blue-800",
    border: "border-blue-200",
    number: "bg-blue-700",
  },
  engineer: {
    label: "Engineer and Predict",
    badge: "bg-amber-100 text-amber-800",
    border: "border-amber-200",
    number: "bg-amber-600",
  },
  operate: {
    label: "Build and Operate AI",
    badge: "bg-violet-100 text-violet-800",
    border: "border-violet-200",
    number: "bg-violet-700",
  },
};

const trackCards = [
  {
    title: "Data Analytics",
    description: "Excel, statistics, Python, visualization, and decision-centered analysis.",
    icon: BarChart3,
  },
  {
    title: "SQL and Data Engineering",
    description: "Relational modeling, analytical SQL, Microsoft Fabric, and reliable pipelines.",
    icon: Database,
  },
  {
    title: "Business Intelligence",
    description: "Power BI, DAX, semantic models, accessible dashboards, and governed reporting.",
    icon: Gauge,
  },
  {
    title: "Machine Learning and AI",
    description: "Predictive modeling, generative AI, RAG, deployment, MLOps, and responsible AI.",
    icon: BrainCircuit,
  },
];

export default function DataAI() {
  return (
    <main className="min-h-screen bg-slate-50 pb-20">
      <section className="overflow-hidden bg-gradient-to-br from-emerald-950 via-teal-900 to-slate-950 text-white">
        <div className="mx-auto max-w-7xl px-6 py-14 md:py-20">
          <Link
            to="/library"
            className="text-sm font-bold text-emerald-200 transition hover:text-white"
          >
            ← Back to Knowledge Library
          </Link>

          <div className="mt-10 grid items-center gap-12 lg:grid-cols-[1.25fr_0.75fr]">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.24em] text-amber-300">
                SkillBridge Academy · Data and AI
              </p>

              <h1 className="mt-4 max-w-4xl text-4xl font-black leading-tight md:text-6xl">
                {course.title}
                <span className="mt-2 block text-emerald-200">
                  {course.subtitle}
                </span>
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-emerald-50/90">
                {course.description}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  to="/library/data-ai/module/1/lesson/data-information-analytics-machine-learning-and-ai"
                  className="inline-flex items-center gap-2 rounded-xl bg-amber-400 px-5 py-3 font-black text-slate-950 transition hover:bg-amber-300"
                >
                  Start Lesson 1
                  <ArrowRight size={18} />
                </Link>

                <a
                  href="#curriculum"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/30 bg-white/10 px-5 py-3 font-bold text-white transition hover:bg-white/20"
                >
                  View Course Map
                </a>
              </div>
            </div>

            <div className="rounded-3xl border border-white/15 bg-white/10 p-7 shadow-2xl backdrop-blur">
              <div className="flex items-center gap-3">
                <div className="rounded-2xl bg-amber-400 p-3 text-slate-950">
                  <BookOpenCheck size={28} />
                </div>
                <div>
                  <p className="text-sm font-bold uppercase tracking-widest text-emerald-200">
                    Complete learner edition
                  </p>
                  <p className="text-2xl font-black">
                    {course.workbookPages}-page workbook
                  </p>
                </div>
              </div>

              <dl className="mt-7 grid grid-cols-2 gap-4">
                <Stat label="Modules" value={course.moduleCount} />
                <Stat label="Lessons" value={course.lessonCount} />
                <Stat label="Portfolio projects" value={course.projectCount} />
                <Stat label="Guided study" value={course.guidedHours} />
              </dl>

              <p className="mt-6 border-t border-white/15 pt-5 text-sm leading-6 text-emerald-50/80">
                One connected pathway: foundations → analytics → engineering →
                machine learning → generative AI → production.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {trackCards.map(({ title, description, icon: Icon }) => (
            <article
              key={title}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <div className="inline-flex rounded-2xl bg-emerald-50 p-3 text-emerald-700">
                <Icon size={24} />
              </div>
              <h2 className="mt-5 text-xl font-black text-slate-950">
                {title}
              </h2>
              <p className="mt-3 leading-7 text-slate-600">
                {description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-6">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-emerald-700">
              Learning outcomes
            </p>
            <h2 className="mt-2 text-3xl font-black text-slate-950">
              What you will be able to do
            </h2>
            <p className="mt-4 leading-7 text-slate-600">
              This pathway is complete only when you can perform the work,
              validate the result, explain the tradeoffs, and show evidence.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {course.outcomes.map((outcome) => (
              <div
                key={outcome}
                className="flex gap-3 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
              >
                <CheckCircle2
                  className="mt-0.5 shrink-0 text-emerald-600"
                  size={20}
                />
                <p className="text-sm font-semibold leading-6 text-slate-700">
                  {outcome}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-14">
        <div className="rounded-3xl bg-slate-950 p-8 text-white md:p-10">
          <div className="flex items-center gap-3 text-amber-300">
            <Workflow size={25} />
            <p className="text-sm font-bold uppercase tracking-widest">
              Learning journey
            </p>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {course.phases.map((phase, index) => (
              <article
                key={phase.id}
                className="rounded-2xl border border-white/10 bg-white/5 p-5"
              >
                <p className="text-sm font-black text-amber-300">
                  Phase {index + 1} · {phase.modules}
                </p>
                <h3 className="mt-2 text-xl font-black">
                  {phase.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">
                  {phase.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="curriculum"
        className="mx-auto max-w-7xl scroll-mt-24 px-6 py-8"
      >
        <p className="text-sm font-bold uppercase tracking-widest text-emerald-700">
          Complete curriculum
        </p>
        <div className="mt-2 flex flex-wrap items-end justify-between gap-5">
          <div>
            <h2 className="text-3xl font-black text-slate-950">
              Ten connected modules
            </h2>
            <p className="mt-3 max-w-3xl leading-7 text-slate-600">
              Open a module to see its seven guided lesson units and portfolio
              project. Finish each module before moving to the next.
            </p>
          </div>

          <span className="rounded-full bg-emerald-100 px-4 py-2 text-sm font-black text-emerald-800">
            All modules available
          </span>
        </div>

        <div className="mt-8 space-y-5">
          {course.modules.map((module) => (
            <ModuleCard key={module.id} module={module} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-14">
        <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-amber-400 via-orange-400 to-amber-500 p-1">
          <div className="rounded-[22px] bg-slate-950 p-8 text-white md:p-10">
            <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-amber-400/15 px-4 py-2 text-sm font-black text-amber-300">
                  <Sparkles size={17} />
                  Integrated capstone
                </div>
                <h2 className="mt-5 text-3xl font-black md:text-4xl">
                  {course.capstone.title}
                </h2>
                <p className="mt-5 leading-8 text-slate-300">
                  {course.capstone.description}
                </p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <h3 className="flex items-center gap-2 text-lg font-black text-amber-300">
                  <Target size={21} />
                  Capstone milestones
                </h3>
                <ol className="mt-5 space-y-4">
                  {course.capstone.milestones.map((milestone, index) => (
                    <li key={milestone} className="flex gap-3">
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-amber-400 font-black text-slate-950">
                        {index + 1}
                      </span>
                      <p className="pt-0.5 text-sm leading-6 text-slate-200">
                        {milestone}
                      </p>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-6">
        <div className="grid gap-6 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm lg:grid-cols-[0.8fr_1.2fr] md:p-10">
          <div>
            <div className="inline-flex rounded-2xl bg-blue-50 p-3 text-blue-700">
              <ShieldCheck size={28} />
            </div>
            <h2 className="mt-5 text-3xl font-black text-slate-950">
              Completion standard
            </h2>
            <p className="mt-4 leading-7 text-slate-600">
              The certificate represents demonstrated capability, not only
              content viewing.
            </p>
          </div>

          <ul className="space-y-4">
            {course.completionRequirements.map((requirement) => (
              <li
                key={requirement}
                className="flex gap-3 rounded-2xl bg-slate-50 p-4"
              >
                <CheckCircle2
                  className="mt-0.5 shrink-0 text-blue-600"
                  size={20}
                />
                <span className="font-semibold leading-6 text-slate-700">
                  {requirement}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-6 flex flex-col gap-5 rounded-3xl bg-gradient-to-r from-indigo-950 to-blue-950 p-7 text-white md:flex-row md:items-center md:justify-between">
          <div className="flex items-start gap-4">
            <div className="rounded-2xl bg-amber-400 p-3 text-slate-950">
              <Award size={27} />
            </div>
            <div>
              <h3 className="text-xl font-black">Completion and certificate center</h3>
              <p className="mt-2 max-w-3xl leading-7 text-blue-100">
                Track all 70 lessons, verify ten portfolio projects, record the
                final assessment, and review certificate eligibility.
              </p>
            </div>
          </div>
          <Link
            to="/library/data-ai/completion"
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-amber-400 px-5 py-3 font-black text-slate-950 transition hover:bg-amber-300"
          >
            Open completion center
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}

function Stat({ label, value }) {
  return (
    <div className="rounded-2xl bg-slate-950/30 p-4">
      <dt className="text-xs font-bold uppercase tracking-wide text-emerald-200">
        {label}
      </dt>
      <dd className="mt-1 text-xl font-black text-white">
        {value}
      </dd>
    </div>
  );
}

function ModuleCard({ module }) {
  const style = phaseStyles[module.phase];

  return (
    <details
      id={`module-${module.id}`}
      className={`group scroll-mt-24 overflow-hidden rounded-3xl border bg-white shadow-sm ${style.border}`}
    >
      <summary className="cursor-pointer list-none p-6 marker:hidden md:p-7">
        <div className="flex items-start gap-5">
          <span
            className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl text-lg font-black text-white ${style.number}`}
          >
            {module.id}
          </span>

          <div className="min-w-0 flex-1">
            <div className="flex flex-wrap items-center gap-2">
              <span className={`rounded-full px-3 py-1 text-xs font-black ${style.badge}`}>
                {style.label}
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-500">
                <Clock3 size={14} />
                {module.duration}
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-500">
                <BookOpenCheck size={14} />
                {module.lessons.length} lesson units
              </span>
            </div>

            <h3 className="mt-3 text-xl font-black text-slate-950 md:text-2xl">
              Module {module.id}: {module.title}
            </h3>
            <p className="mt-3 max-w-4xl leading-7 text-slate-600">
              {module.description}
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              {module.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-700"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <span className="mt-2 text-2xl font-light text-slate-400 transition group-open:rotate-45">
            +
          </span>
        </div>
      </summary>

      <div className="border-t border-slate-200 bg-slate-50 px-6 py-7 md:px-7">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <h4 className="flex items-center gap-2 font-black text-slate-900">
              <Layers3 size={19} className="text-emerald-700" />
              Module lessons
            </h4>
            <ol className="mt-5 grid gap-3 sm:grid-cols-2">
              {module.lessons.map((lesson, index) => {
                const lessonTitle =
                  typeof lesson === "string" ? lesson : lesson.title;
                const lessonPath =
                  typeof lesson === "object" && lesson.status === "available"
                    ? `/library/data-ai/module/${module.id}/lesson/${lesson.slug}`
                    : null;

                return (
                <li
                  key={lessonTitle}
                  className={`flex gap-3 rounded-2xl border bg-white p-4 ${
                    lessonPath
                      ? "border-emerald-300 shadow-sm"
                      : "border-slate-200"
                  }`}
                >
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-slate-900 text-xs font-black text-white">
                    {index + 1}
                  </span>
                  {lessonPath ? (
                    <Link
                      to={lessonPath}
                      className="group/lesson flex flex-1 items-center justify-between gap-3 text-sm font-bold leading-6 text-emerald-800 transition hover:text-emerald-600"
                    >
                      <span>{lessonTitle}</span>
                      <ArrowRight
                        size={17}
                        className="shrink-0 transition group-hover/lesson:translate-x-1"
                      />
                    </Link>
                  ) : (
                    <span className="text-sm font-semibold leading-6 text-slate-700">
                      {lessonTitle}
                    </span>
                  )}
                </li>
                );
              })}
            </ol>
          </div>

          <aside className="rounded-3xl bg-slate-950 p-6 text-white">
            <div className="inline-flex rounded-xl bg-amber-400 p-2.5 text-slate-950">
              <Code2 size={21} />
            </div>
            <p className="mt-5 text-xs font-bold uppercase tracking-widest text-amber-300">
              Portfolio evidence
            </p>
            <h4 className="mt-2 text-xl font-black">
              {module.project}
            </h4>
            <p className="mt-4 text-sm leading-6 text-slate-300">
              Complete the lesson checks, validate the artifact, document the
              limitations, and explain how the result supports a real decision.
            </p>
            <div className="mt-6 flex items-center gap-2 text-sm font-black text-emerald-300">
              <CheckCircle2 size={17} />
              Required before Module {module.id === course.moduleCount ? "completion" : module.id + 1}
            </div>
          </aside>
        </div>
      </div>
    </details>
  );
}
