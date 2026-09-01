import { useNavigate } from "react-router-dom";
import Breadcrumbs from "../../../components/navigation/Breadcrumbs";
import { getCompletedLessons } from "../../../services/lessonProgress.js";


const algebraOneModules = [
  {
    moduleNumber: 1,
    title: "Foundations of Algebra",
    description:
      "Build fluency with variables, expressions, properties, order of operations, and algebraic language.",
    level: "Foundation",
    estimatedTime: "8–10 hours",
    lessonCount: 8,
    status: "Available",
    theme: "from-blue-950 via-indigo-900 to-slate-950",
    topics: [
      "Variables and expressions",
      "Order of operations",
      "Properties of real numbers",
      "Combining like terms",
      "Distributive property",
    ],
  },
  {
    moduleNumber: 2,
    title: "Solving Linear Equations",
    description:
      "Solve one-step, multi-step, and variable-on-both-sides equations while explaining each transformation.",
    level: "Foundation",
    estimatedTime: "10–12 hours",
    lessonCount: 8,
    status: "Available",
    theme: "from-emerald-950 via-teal-900 to-slate-950",
    topics: [
      "One-step equations",
      "Multi-step equations",
      "Variables on both sides",
      "Literal equations",
      "Applications",
    ],
  },
  {
    moduleNumber: 3,
    title: "Linear Inequalities",
    description:
      "Solve and graph inequalities, compound inequalities, and real-world constraint problems.",
    level: "Foundation",
    estimatedTime: "8–10 hours",
    lessonCount: 8,
   status: "Available",
    theme: "from-violet-950 via-purple-900 to-slate-950",
    topics: [
      "One-variable inequalities",
      "Graphing solutions",
      "Compound inequalities",
      "Absolute value inequalities",
      "Applications",
    ],
  },
  {
    moduleNumber: 4,
    title: "Functions and Relations",
    description:
      "Understand functions as input-output relationships and represent them using tables, graphs, equations, and mappings.",
    level: "Intermediate",
    estimatedTime: "10–12 hours",
    lessonCount: 8,
 status: "Available",
    theme: "from-amber-950 via-orange-900 to-slate-950",
    topics: [
      "Relations",
      "Function notation",
      "Domain and range",
      "Function representations",
      "Rate of change",
    ],
  },
  {
    moduleNumber: 5,
    title: "Linear Functions",
    description:
      "Analyze slope, intercepts, graphs, equations, and real-world linear models.",
    level: "Intermediate",
    estimatedTime: "12–14 hours",
    lessonCount: 8,
    status: "Planned",
    theme: "from-rose-950 via-red-900 to-slate-950",
    topics: [
      "Slope",
      "Slope-intercept form",
      "Point-slope form",
      "Standard form",
      "Linear modeling",
    ],
  },
  {
    moduleNumber: 6,
    title: "Systems of Linear Equations",
    description:
      "Solve systems using graphs, substitution, elimination, and technology.",
    level: "Intermediate",
    estimatedTime: "10–12 hours",
    lessonCount: 8,
    status: "Planned",
    theme: "from-cyan-950 via-sky-900 to-slate-950",
    topics: [
      "Graphing systems",
      "Substitution",
      "Elimination",
      "Solution classification",
      "Applications",
    ],
  },
  {
    moduleNumber: 7,
    title: "Exponents and Exponential Functions",
    description:
      "Apply exponent laws and model growth and decay using exponential functions.",
    level: "Intermediate",
    estimatedTime: "10–12 hours",
    lessonCount: 8,
    status: "Planned",
    theme: "from-fuchsia-950 via-pink-900 to-slate-950",
    topics: [
      "Exponent laws",
      "Scientific notation",
      "Exponential growth",
      "Exponential decay",
      "Applications",
    ],
  },
  {
    moduleNumber: 8,
    title: "Polynomials and Factoring",
    description:
      "Operate with polynomials and use factoring strategies to reveal algebraic structure.",
    level: "Intermediate",
    estimatedTime: "12–14 hours",
    lessonCount: 8,
    status: "Planned",
    theme: "from-indigo-950 via-blue-900 to-slate-950",
    topics: [
      "Polynomial operations",
      "Greatest common factor",
      "Trinomials",
      "Special products",
      "Factoring applications",
    ],
  },
  {
    moduleNumber: 9,
    title: "Quadratic Functions",
    description:
      "Explore quadratic graphs, equations, factoring, square roots, and the quadratic formula.",
    level: "Intermediate",
    estimatedTime: "14–16 hours",
    lessonCount: 8,
    status: "Planned",
    theme: "from-lime-950 via-green-900 to-slate-950",
    topics: [
      "Parabolas",
      "Vertex and intercepts",
      "Factoring quadratics",
      "Square-root method",
      "Quadratic formula",
    ],
  },
  {
    moduleNumber: 10,
    title: "Statistics and Data Modeling",
    description:
      "Analyze data, interpret distributions, study correlation, and create mathematical models.",
    level: "Intermediate",
    estimatedTime: "10–12 hours",
    lessonCount: 8,
    status: "Planned",
    theme: "from-slate-950 via-neutral-900 to-slate-950",
    topics: [
      "Data displays",
      "Measures of center",
      "Variation",
      "Scatter plots",
      "Linear regression",
    ],
  },
];

export default function AlgebraOne() {
  const navigate = useNavigate();

  function openModule(module) {
    if (module.status !== "Available") return;

    navigate(
      `/library/high-school/algebra-1/module/${module.moduleNumber}`
    );
  }

  function beginCourse() {
    const firstAvailableModule = algebraOneModules.find(
      (module) => module.status === "Available"
    );

    if (firstAvailableModule) {
      openModule(firstAvailableModule);
    }
  }
  const totalModules = algebraOneModules.length;

  const completedModules = algebraOneModules.filter((module) => {
    if (module.status !== "Available") {
      return false;
    }

    const completedLessons = getCompletedLessons(
      "algebra-1",
      module.moduleNumber
    );

    return completedLessons.length >= module.lessonCount;
  }).length;

  const courseProgress =
    totalModules > 0
      ? Math.round((completedModules / totalModules) * 100)
      : 0;
  return (
    <main className="min-h-screen bg-slate-50 pb-20">
      <Breadcrumbs
        items={[
          { label: "Home", to: "/" },
          { label: "Knowledge Library", to: "/library" },
          {
            label: "High School Mathematics",
            to: "/library/high-school",
          },
          { label: "Algebra I" },
        ]}
      />

      <CourseHero
        onBegin={beginCourse}
        courseProgress={courseProgress}
        completedModules={completedModules}
        totalModules={totalModules}
      />

      <div className="mx-auto max-w-7xl px-5 py-10">
        <CourseOverview />

        <section className="mt-12">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-sm font-bold uppercase tracking-widest text-blue-600">
                Algebra I pathway
              </p>

              <h2 className="mt-2 text-3xl font-black text-slate-950 md:text-4xl">
                Course Modules
              </h2>

              <p className="mt-3 max-w-3xl leading-7 text-slate-600">
                Progress from foundational algebraic reasoning to
                functions, systems, exponents, polynomials, quadratics,
                and data modeling.
              </p>
            </div>

            <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-bold text-blue-700">
              10 Modules
            </span>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {algebraOneModules.map((module) => (
              <ModuleCard
                key={module.moduleNumber}
                module={module}
                onOpen={() => openModule(module)}
              />
            ))}
          </div>
        </section>

        <LuminerySection />
      </div>
    </main>
  );
}

function CourseHero({
  onBegin,
  courseProgress,
  completedModules,
  totalModules,
}) {
  return (
    <header className="bg-gradient-to-br from-blue-950 via-indigo-900 to-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-5 py-14 md:py-20">
        <p className="text-sm font-bold uppercase tracking-[0.25em] text-blue-300">
          SkillBridge Academy · High School Mathematics
        </p>

        <div className="mt-6 grid gap-10 lg:grid-cols-[minmax(0,1fr)_340px] lg:items-end">
          <div>
            <h1 className="max-w-4xl text-5xl font-black leading-tight md:text-7xl">
              Algebra I
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-blue-100">
              Build strong algebraic reasoning through visual models,
              guided practice, Desmos exploration, Python labs, and
              real-world creator projects.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <HeroBadge>Grades 8–9</HeroBadge>
              <HeroBadge>10 Modules</HeroBadge>
              <HeroBadge>80 Planned Lessons</HeroBadge>
              <HeroBadge>Desmos and Python</HeroBadge>
            </div>

            <button
              type="button"
              onClick={onBegin}
              className="mt-8 rounded-xl bg-white px-6 py-4 font-extrabold text-blue-950 transition hover:bg-blue-100"
            >
              Begin Algebra I
            </button>
          </div>

          <section className="rounded-3xl border border-white/20 bg-white/10 p-6 backdrop-blur">
            <p className="text-sm font-bold uppercase tracking-widest text-blue-200">
              Course Progress
            </p>

            <div className="mt-4 flex items-end justify-between gap-4">
              <p className="text-5xl font-black">
                {courseProgress}%
              </p>

              <p className="text-sm font-semibold text-blue-100">
                {completedModules}/{totalModules} modules completed
              </p>
            </div>

            <div className="mt-5 h-3 overflow-hidden rounded-full bg-white/20">
              <div
                className="h-full rounded-full bg-white"
                style={{
                  width: `${courseProgress}%`,
                }}
              />
            </div>

            <p className="mt-4 leading-7 text-blue-100">
              Complete all lessons in a module to count that module toward
              your Algebra I course progress.
            </p>
          </section>
        </div>
      </div>
    </header>
  );
}

function CourseOverview() {
  const outcomes = [
    "Interpret and simplify algebraic expressions.",
    "Solve equations and inequalities using logical transformations.",
    "Represent and analyze linear functions.",
    "Solve systems of equations using multiple strategies.",
    "Model growth, quadratics, and real-world data.",
    "Use Desmos, Python, and project-based learning.",
  ];

  return (
    <section className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_340px]">
      <article className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm md:p-8">
        <p className="text-sm font-bold uppercase tracking-widest text-blue-600">
          Course Overview
        </p>

        <h2 className="mt-2 text-3xl font-black text-slate-950">
          Algebra for thinkers and creators
        </h2>

        <p className="mt-5 leading-8 text-slate-700">
          Algebra I develops the language students use to describe
          patterns, relationships, constraints, change, and unknown
          quantities. Students will reason, visualize, practice, code,
          and create throughout the course.
        </p>

        <div className="mt-7 grid gap-4 md:grid-cols-2">
          {outcomes.map((outcome, index) => (
            <article
              key={outcome}
              className="flex items-start gap-3 rounded-2xl bg-slate-50 p-5"
            >
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-100 text-sm font-black text-blue-700">
                {index + 1}
              </span>

              <p className="leading-7 text-slate-700">
                {outcome}
              </p>
            </article>
          ))}
        </div>
      </article>

      <aside className="rounded-3xl border border-violet-200 bg-gradient-to-br from-violet-50 to-indigo-50 p-7">
        <p className="text-sm font-bold uppercase tracking-widest text-violet-700">
          Learning tools
        </p>

        <h2 className="mt-3 text-2xl font-black text-violet-950">
          Learn through multiple representations
        </h2>

        <div className="mt-6 space-y-3">
          {[
            "Visual algebra models",
            "Desmos investigations",
            "Guided practice",
            "Python creator labs",
            "Real-world applications",
            "Portfolio challenges",
          ].map((item) => (
            <div
              key={item}
              className="flex items-center gap-3 font-semibold text-violet-900"
            >
              <span className="h-2 w-2 rounded-full bg-violet-600" />
              {item}
            </div>
          ))}
        </div>
      </aside>
    </section>
  );
}

function ModuleCard({ module, onOpen }) {
  const isAvailable = module.status === "Available";

  const completedLessonCount = isAvailable
    ? Math.min(
        getCompletedLessons(
          "algebra-1",
          module.moduleNumber
        ).length,
        module.lessonCount
      )
    : 0;

  const moduleProgress =
    module.lessonCount > 0
      ? Math.round(
          (completedLessonCount / module.lessonCount) * 100
        )
      : 0;

  return (
    <article
      className={`overflow-hidden rounded-3xl border bg-white shadow-sm transition ${
        isAvailable
          ? "border-slate-200 hover:-translate-y-1 hover:border-blue-300 hover:shadow-lg"
          : "border-slate-200 opacity-80"
      }`}
    >
      <div
        className={`bg-gradient-to-br ${module.theme} p-6 text-white`}
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-white/70">
              Module {String(module.moduleNumber).padStart(2, "0")}
            </p>

            <h3 className="mt-3 text-2xl font-black leading-tight">
              {module.title}
            </h3>
          </div>

          <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-bold uppercase tracking-wide">
            {module.status}
          </span>
        </div>

        <p className="mt-4 min-h-[84px] leading-7 text-white/80">
          {module.description}
        </p>
      </div>

      <div className="p-6">
        <div className="flex flex-wrap gap-2">
          {module.topics.slice(0, 4).map((topic) => (
            <span
              key={topic}
              className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-600"
            >
              {topic}
            </span>
          ))}
        </div>

        <dl className="mt-6 grid grid-cols-2 gap-4">
          <ModuleDetail
            label="Lessons"
            value={module.lessonCount}
          />

          <ModuleDetail
            label="Level"
            value={module.level}
          />

          <ModuleDetail
            label="Time"
            value={module.estimatedTime}
          />

          <ModuleDetail
            label="Progress"
            value={`${moduleProgress}%`}
          />
        </dl>

        <div className="mt-6">
          <div className="mb-2 flex items-center justify-between text-xs font-bold text-slate-500">
            <span>
              {completedLessonCount}/{module.lessonCount} lessons completed
            </span>

            <span>
              {moduleProgress}%
            </span>
          </div>

          <div className="h-2 overflow-hidden rounded-full bg-slate-200">
            <div
              className="h-full rounded-full bg-blue-600"
              style={{
                width: `${moduleProgress}%`,
              }}
            />
          </div>
        </div>

        <button
          type="button"
          onClick={onOpen}
          disabled={!isAvailable}
          className={`mt-6 w-full rounded-xl px-4 py-3 font-bold transition ${
            isAvailable
              ? "bg-blue-600 text-white hover:bg-blue-700"
              : "cursor-not-allowed bg-slate-200 text-slate-500"
          }`}
        >
          {isAvailable ? "Open Module" : "Planned"}
        </button>
      </div>
    </article>
  );
}

function ModuleDetail({ label, value }) {
  return (
    <div className="rounded-xl bg-slate-50 p-3">
      <dt className="text-xs font-bold uppercase tracking-wide text-slate-500">
        {label}
      </dt>

      <dd className="mt-1 font-extrabold text-slate-900">
        {value}
      </dd>
    </div>
  );
}

function LuminerySection() {
  return (
    <section className="mt-12 rounded-3xl border border-violet-200 bg-gradient-to-br from-violet-50 to-indigo-50 p-8 md:p-10">
      <p className="text-sm font-bold uppercase tracking-[0.25em] text-violet-700">
        Luminery
      </p>

      <h2 className="mt-4 max-w-4xl text-3xl font-black text-violet-950 md:text-5xl">
        Algebra is not only about finding an answer. It is about
        understanding relationships.
      </h2>

      <p className="mt-5 max-w-4xl text-lg leading-8 text-violet-900">
        Students will explain their reasoning, compare strategies,
        visualize patterns, test ideas with technology, and build
        projects that demonstrate meaningful mathematical understanding.
      </p>
    </section>
  );
}

function HeroBadge({ children }) {
  return (
    <span className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-bold text-white backdrop-blur">
      {children}
    </span>
  );
}