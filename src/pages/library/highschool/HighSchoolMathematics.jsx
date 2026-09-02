import { useNavigate } from "react-router-dom";
import Breadcrumbs from "../../../components/navigation/Breadcrumbs";

const courseCatalog = [
  {
    id: "algebra-1",
    title: "Algebra I",
    description:
      "Build a strong foundation in expressions, equations, inequalities, functions, systems, exponents, and quadratic relationships.",
    gradeLevel: "Grades 8–9",
    status: "Available",
    theme: "from-blue-950 via-indigo-900 to-slate-950",
    topics: [
      "Expressions and equations",
      "Linear functions",
      "Systems of equations",
      "Exponents",
      "Quadratic functions",
    ],
  },
  {
    id: "geometry",
    title: "Geometry",
    description:
      "Develop spatial reasoning through transformations, congruence, similarity, coordinate geometry, circles, area, and volume.",
    gradeLevel: "Grades 9–10",
    status: "Planned",
    theme: "from-emerald-950 via-teal-900 to-slate-950",
    topics: [
      "Transformations",
      "Congruence",
      "Similarity",
      "Circles",
      "Area and volume",
    ],
  },
  {
    id: "algebra-2",
    title: "Algebra II",
    description:
      "Extend algebraic reasoning through polynomial, rational, radical, exponential, logarithmic, and trigonometric functions.",
    gradeLevel: "Grades 10–11",
    status: "Available",
    theme: "from-violet-950 via-purple-900 to-slate-950",
    topics: [
      "Polynomial functions",
      "Rational functions",
      "Radicals",
      "Exponential functions",
      "Logarithms",
    ],
  },
  {
    id: "precalculus",
    title: "Precalculus",
    description:
      "Prepare for calculus through advanced functions, trigonometry, sequences, vectors, limits, and mathematical modeling.",
    gradeLevel: "Grades 11–12",
    status: "Planned",
    theme: "from-amber-950 via-orange-900 to-slate-950",
    topics: [
      "Advanced functions",
      "Trigonometry",
      "Sequences and series",
      "Vectors",
      "Introduction to limits",
    ],
  },
];

export default function HighSchoolMathematics() {
  const navigate = useNavigate();

  function openCourse(course) {
    if (course.status !== "Available") return;

    navigate(`/library/high-school/${course.id}`);
  }

  return (
    <main className="min-h-screen bg-slate-50 pb-20">
      <Breadcrumbs
        items={[
          { label: "Home", to: "/" },
          { label: "Knowledge Library", to: "/library" },
          { label: "High School Mathematics" },
        ]}
      />

      <header className="bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950 text-white">
        <div className="mx-auto max-w-7xl px-5 py-14 md:py-20">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-blue-300">
            SkillBridge Academy · Mathematics Library
          </p>

          <h1 className="mt-5 max-w-5xl text-5xl font-black leading-tight md:text-7xl">
            High School Mathematics
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-blue-100">
            Learn mathematics through reasoning, visualization,
            technology, practice, coding, and real-world creation.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <HeroBadge>Grades 8–12</HeroBadge>
            <HeroBadge>Four Course Pathways</HeroBadge>
            <HeroBadge>Desmos and GeoGebra</HeroBadge>
            <HeroBadge>Python Creator Labs</HeroBadge>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-5 py-10">
        <LearningFramework />

        <section className="mt-12">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-sm font-bold uppercase tracking-widest text-blue-600">
                Course pathways
              </p>

              <h2 className="mt-2 text-3xl font-black text-slate-950 md:text-4xl">
                Choose a Mathematics Course
              </h2>

              <p className="mt-3 max-w-3xl leading-7 text-slate-600">
                Progress from foundational algebra to advanced
                mathematical modeling and preparation for calculus.
              </p>
            </div>

            <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-bold text-blue-700">
              4 Courses
            </span>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {courseCatalog.map((course) => (
              <CourseCard
                key={course.id}
                course={course}
                onOpen={() => openCourse(course)}
              />
            ))}
          </div>
        </section>

        <LuminerySection />
      </div>
    </main>
  );
}

function LearningFramework() {
  const stages = [
    {
      number: "01",
      title: "Understand",
      description:
        "Develop meaning and reasoning before memorizing procedures.",
    },
    {
      number: "02",
      title: "Visualize",
      description:
        "Use graphs, diagrams, models, Desmos, and GeoGebra.",
    },
    {
      number: "03",
      title: "Practice",
      description:
        "Build accuracy through guided and independent problem solving.",
    },
    {
      number: "04",
      title: "Code",
      description:
        "Use Python and technology to explore mathematical patterns.",
    },
    {
      number: "05",
      title: "Create",
      description:
        "Build projects that demonstrate authentic mathematical mastery.",
    },
  ];

  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm md:p-8">
      <p className="text-sm font-bold uppercase tracking-widest text-blue-600">
        SkillBridge learning framework
      </p>

      <h2 className="mt-2 text-3xl font-black text-slate-950">
        From understanding to creation
      </h2>

      <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
        {stages.map((stage) => (
          <article
            key={stage.number}
            className="rounded-2xl bg-slate-50 p-5"
          >
            <p className="text-sm font-black text-blue-600">
              {stage.number}
            </p>

            <h3 className="mt-3 text-xl font-black text-slate-950">
              {stage.title}
            </h3>

            <p className="mt-3 leading-7 text-slate-600">
              {stage.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}

function CourseCard({ course, onOpen }) {
  const isAvailable = course.status === "Available";

  return (
    <article
      className={`overflow-hidden rounded-3xl border bg-white shadow-sm transition ${
        isAvailable
          ? "border-slate-200 hover:-translate-y-1 hover:border-blue-300 hover:shadow-lg"
          : "border-slate-200 opacity-80"
      }`}
    >
      <div
        className={`bg-gradient-to-br ${course.theme} p-7 text-white`}
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-white/70">
              {course.gradeLevel}
            </p>

            <h3 className="mt-3 text-3xl font-black">
              {course.title}
            </h3>
          </div>

          <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-bold uppercase tracking-wide">
            {course.status}
          </span>
        </div>

        <p className="mt-5 leading-8 text-white/80">
          {course.description}
        </p>
      </div>

      <div className="p-7">
        <p className="text-sm font-bold uppercase tracking-widest text-slate-500">
          Major topics
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {course.topics.map((topic) => (
            <span
              key={topic}
              className="rounded-full bg-slate-100 px-3 py-2 text-xs font-bold text-slate-600"
            >
              {topic}
            </span>
          ))}
        </div>

        <button
          type="button"
          onClick={onOpen}
          disabled={!isAvailable}
          className={`mt-7 w-full rounded-xl px-4 py-3 font-bold transition ${
            isAvailable
              ? "bg-blue-600 text-white hover:bg-blue-700"
              : "cursor-not-allowed bg-slate-200 text-slate-500"
          }`}
        >
         {isAvailable ? `Open ${course.title}` : "Planned"}
        </button>
      </div>
    </article>
  );
}

function LuminerySection() {
  return (
    <section className="mt-12 rounded-3xl border border-violet-200 bg-gradient-to-br from-violet-50 to-indigo-50 p-8 md:p-10">
      <p className="text-sm font-bold uppercase tracking-[0.25em] text-violet-700">
        Luminery
      </p>

      <h2 className="mt-4 max-w-4xl text-3xl font-black text-violet-950 md:text-5xl">
        Mathematics becomes powerful when students can explain it,
        apply it, and create with it.
      </h2>

      <p className="mt-5 max-w-4xl text-lg leading-8 text-violet-900">
        Every course will combine mathematical reasoning, visual
        exploration, guided practice, technology integration, coding,
        reflection, and portfolio-quality creator challenges.
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