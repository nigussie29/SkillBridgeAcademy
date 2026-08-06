
import { useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Breadcrumbs from "../../../components/navigation/Breadcrumbs";

/*
|--------------------------------------------------------------------------
| Python module data
|--------------------------------------------------------------------------
| This is temporary local data.
| Later, it can be moved into src/data/python/ and connected to Supabase.
|--------------------------------------------------------------------------
*/

const pythonModules = {
  1: {
    title: "Python Basics and Programming Foundations",

    description:
      "Learn how Python works, write your first programs, and develop the problem-solving habits of a confident programmer.",

    estimatedTime: "8–10 hours",

    level: "Beginner",

    color: "from-slate-950 via-blue-950 to-indigo-950",

    objectives: [
      "Understand what Python is and where it is used.",
      "Run Python programs and read basic output.",
      "Create variables and work with common data types.",
      "Use input and output to build interactive programs.",
      "Write readable Python code and solve beginner problems.",
    ],

    lessons: [
      {
  id: "what-is-python",
  slug: "what-is-python",
  lessonNumber: 1,
  title: "What Is Python?",
  subtitle:
    "Discover what Python is, why it is popular, and how programmers use it.",
  duration: "45–60 minutes",
  level: "Beginner",
  status: "Available",
},

      {
        id: "first-python-program",
        slug: "first-python-program",
        lessonNumber: 2,
        title: "Your First Python Program",
        subtitle:
          "Learn how Python programs are structured and write your first working script.",
        duration: "40 min",
        level: "Beginner",
        status: "Available",
      },

      {
        id: "variables-data-types",
        slug: "variables-data-types",
        lessonNumber: 3,
        title: "Variables and Data Types",
        subtitle:
          "Store information using variables, strings, integers, floats, and Boolean values.",
        duration: "50 min",
        level: "Beginner",
        status: "Available",
      },

      {
        id: "input-output",
        slug: "input-output",
        lessonNumber: 4,
        title: "Input and Output",
        subtitle:
          "Create interactive programs with print(), input(), and formatted strings.",
        duration: "45 min",
        level: "Beginner",
        status: "Available",
      },

      {
        id: "operators-expressions",
        slug: "operators-expressions",
        lessonNumber: 5,
        title: "Operators and Expressions",
        subtitle:
          "Use arithmetic, comparison, and logical operators to calculate and make decisions.",
        duration: "50 min",
        level: "Beginner",
        status: "Available",
      },

      {
        id: "writing-readable-code",
        slug: "writing-readable-code",
        lessonNumber: 6,
        title: "Writing Readable Python Code",
        subtitle:
          "Use meaningful names, comments, spacing, and clear program structure.",
        duration: "35 min",
        level: "Beginner",
        status: "Available",
      },

      {
        id: "debugging-basics",
        slug: "debugging-basics",
        lessonNumber: 7,
        title: "Errors and Debugging Basics",
        subtitle:
          "Read error messages, identify common mistakes, and correct broken programs.",
        duration: "45 min",
        level: "Beginner",
        status: "Available",
      },

      {
        id: "personal-profile-project",
        slug: "personal-profile-project",
        lessonNumber: 8,
        title: "Build a Personal Profile Program",
        subtitle:
          "Combine variables, input, output, expressions, and formatting in your first complete Python project.",
        duration: "60 min",
        level: "Beginner",
        status: "Available",
      },
    ],
  },

  2: {
    title: "Decisions and Program Logic",

    description:
      "Teach Python programs to make decisions using conditions, comparisons, Boolean logic, and structured problem solving.",

    estimatedTime: "8–10 hours",

    level: "Beginner",

    color: "from-emerald-950 via-teal-900 to-slate-950",

    objectives: [
      "Create Boolean expressions.",
      "Use if, elif, and else statements.",
      "Combine conditions using logical operators.",
      "Validate user input.",
      "Build decision-based programs.",
    ],

    lessons: [
      {
        id: "boolean-thinking",
        slug: "boolean-thinking",
        lessonNumber: 1,
        title: "Boolean Thinking",
        subtitle:
          "Understand True, False, comparisons, and how programs evaluate decisions.",
        duration: "40 min",
        level: "Beginner",
        status: "Available",
      },

      {
        id: "if-statements",
        slug: "if-statements",
        lessonNumber: 2,
        title: "If Statements",
        subtitle:
          "Control program behavior by running code only when a condition is true.",
        duration: "45 min",
        level: "Beginner",
        status: "Available",
      },

      {
        id: "elif-else",
        slug: "elif-else",
        lessonNumber: 3,
        title: "Elif and Else",
        subtitle:
          "Build programs that choose between several possible outcomes.",
        duration: "45 min",
        level: "Beginner",
        status: "Available",
      },

      {
        id: "logical-operators",
        slug: "logical-operators",
        lessonNumber: 4,
        title: "Logical Operators",
        subtitle:
          "Combine conditions with and, or, and not.",
        duration: "45 min",
        level: "Beginner",
        status: "Available",
      },

      {
        id: "nested-decisions",
        slug: "nested-decisions",
        lessonNumber: 5,
        title: "Nested Decisions",
        subtitle:
          "Place decisions inside other decisions to model more complex logic.",
        duration: "50 min",
        level: "Beginner",
        status: "Available",
      },

      {
        id: "input-validation",
        slug: "input-validation",
        lessonNumber: 6,
        title: "Input Validation",
        subtitle:
          "Check user input and prevent invalid program behavior.",
        duration: "50 min",
        level: "Beginner",
        status: "Available",
      },

      {
        id: "grade-calculator",
        slug: "grade-calculator",
        lessonNumber: 7,
        title: "Build a Grade Calculator",
        subtitle:
          "Apply conditional logic to classify student scores.",
        duration: "60 min",
        level: "Beginner",
        status: "Available",
      },

      {
        id: "decision-project",
        slug: "decision-project",
        lessonNumber: 8,
        title: "Decision-Making Project",
        subtitle:
          "Build a complete Python program that responds intelligently to user choices.",
        duration: "75 min",
        level: "Beginner",
        status: "Available",
      },
    ],
  },

  3: {
    title: "Loops and Repetition",

    description:
      "Automate repetitive tasks using for loops, while loops, counters, accumulators, and structured iteration.",

    estimatedTime: "10–12 hours",

    level: "Beginner",

    color: "from-violet-950 via-purple-900 to-slate-950",

    objectives: [
      "Use for loops to repeat actions.",
      "Use while loops for condition-based repetition.",
      "Work with range(), counters, and accumulators.",
      "Control loops using break and continue.",
      "Build programs that process repeated input.",
    ],

    lessons: [
      {
        id: "why-loops",
        slug: "why-loops",
        lessonNumber: 1,
        title: "Why Programs Need Loops",
        subtitle:
          "Understand repetition and recognize problems that loops can solve.",
        duration: "35 min",
        level: "Beginner",
        status: "Available",
      },

      {
        id: "for-loops",
        slug: "for-loops",
        lessonNumber: 2,
        title: "For Loops",
        subtitle:
          "Repeat actions over sequences and ranges of values.",
        duration: "50 min",
        level: "Beginner",
        status: "Available",
      },

      {
        id: "range-function",
        slug: "range-function",
        lessonNumber: 3,
        title: "The range() Function",
        subtitle:
          "Generate number sequences and control loop repetition.",
        duration: "40 min",
        level: "Beginner",
        status: "Available",
      },

      {
        id: "while-loops",
        slug: "while-loops",
        lessonNumber: 4,
        title: "While Loops",
        subtitle:
          "Repeat code while a condition remains true.",
        duration: "50 min",
        level: "Beginner",
        status: "Available",
      },

      {
        id: "counters-accumulators",
        slug: "counters-accumulators",
        lessonNumber: 5,
        title: "Counters and Accumulators",
        subtitle:
          "Count events and calculate totals during repeated operations.",
        duration: "50 min",
        level: "Beginner",
        status: "Available",
      },

      {
        id: "break-continue",
        slug: "break-continue",
        lessonNumber: 6,
        title: "Break and Continue",
        subtitle:
          "Control when loops stop or skip an iteration.",
        duration: "45 min",
        level: "Beginner",
        status: "Available",
      },

      {
        id: "nested-loops",
        slug: "nested-loops",
        lessonNumber: 7,
        title: "Nested Loops",
        subtitle:
          "Use loops inside loops to create patterns and process structured data.",
        duration: "55 min",
        level: "Beginner",
        status: "Available",
      },

      {
        id: "number-guessing-game",
        slug: "number-guessing-game",
        lessonNumber: 8,
        title: "Build a Number Guessing Game",
        subtitle:
          "Combine loops, conditions, input, and random numbers in a complete project.",
        duration: "75 min",
        level: "Beginner",
        status: "Available",
      },
    ],
  },
};

/*
|--------------------------------------------------------------------------
| Local progress helpers
|--------------------------------------------------------------------------
*/

function getStorageKey(moduleNumber) {
  return `skillbridge-python-module-${moduleNumber}-completed-lessons`;
}

function getCompletedLessons(moduleNumber) {
  try {
    const storedValue = window.localStorage.getItem(
      getStorageKey(moduleNumber),
    );

    const parsedValue = storedValue
      ? JSON.parse(storedValue)
      : [];

    return Array.isArray(parsedValue) ? parsedValue : [];
  } catch {
    return [];
  }
}

export default function PythonFoundationsModule() {
  const navigate = useNavigate();
  const { moduleNumber } = useParams();

  const numericModuleNumber = Number(moduleNumber);

  const metadata = pythonModules[numericModuleNumber];

  const lessons = useMemo(
    () => metadata?.lessons ?? [],
    [metadata],
  );

  const completedLessons = useMemo(
    () => getCompletedLessons(numericModuleNumber),
    [numericModuleNumber],
  );

  function handleOpenLesson(lesson) {
    navigate(
      `/library/python/python-foundations/module/${numericModuleNumber}/lesson/${lesson.slug}`,
    );
  }

  function handleBackToCourse() {
    navigate("/library/python/python-foundations");
  }

  if (!metadata || lessons.length === 0) {
    return (
      <main className="min-h-screen bg-slate-50 px-5 py-12">
        <div className="mx-auto max-w-4xl rounded-3xl border border-red-200 bg-red-50 p-8">
          <p className="text-sm font-bold uppercase tracking-widest text-red-600">
            Python Foundations
          </p>

          <h1 className="mt-3 text-3xl font-extrabold text-red-900">
            Module not found
          </h1>

          <p className="mt-4 leading-7 text-red-700">
            This Python module does not contain available lessons yet.
          </p>

          <button
            type="button"
            onClick={handleBackToCourse}
            className="mt-6 rounded-xl bg-red-700 px-5 py-3 font-bold text-white transition hover:bg-red-800"
          >
            Back to Python Foundations
          </button>
        </div>
      </main>
    );
  }

  const validCompletedLessons = completedLessons.filter(
    (lessonSlug) =>
      lessons.some((lesson) => lesson.slug === lessonSlug),
  );

  const completedCount = validCompletedLessons.length;

  const progressPercentage =
    lessons.length > 0
      ? Math.round(
          (completedCount / lessons.length) * 100,
        )
      : 0;

  const firstIncompleteLesson =
    lessons.find(
      (lesson) =>
        !validCompletedLessons.includes(lesson.slug),
    ) ?? lessons[0];

  function handleStartOrContinue() {
    if (firstIncompleteLesson) {
      handleOpenLesson(firstIncompleteLesson);
    }
  }

  return (
    <main className="min-h-screen bg-slate-50 pb-20">
      <Breadcrumbs
        items={[
          {
            label: "Home",
            to: "/",
          },
          {
            label: "Knowledge Library",
            to: "/library",
          },
          {
            label: "School of Python",
            to: "/library/python",
          },
          {
            label: "Python Foundations",
            to: "/library/python/python-foundations",
          },
          {
            label: `Module ${numericModuleNumber}: ${metadata.title}`,
          },
        ]}
      />

      <ModuleHero
        moduleNumber={numericModuleNumber}
        metadata={metadata}
        lessonCount={lessons.length}
        completedCount={completedCount}
        progressPercentage={progressPercentage}
        onBack={handleBackToCourse}
      />

      <div className="mx-auto max-w-7xl px-5 py-10">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_320px]">
          <div className="space-y-8">
            <section className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm md:p-8">
              <p className="text-sm font-bold uppercase tracking-widest text-blue-600">
                Module overview
              </p>

              <h2 className="mt-2 text-3xl font-black text-slate-950">
                What you will learn
              </h2>

              <div className="mt-6 grid gap-4 md:grid-cols-2">
                {metadata.objectives.map(
                  (objective, index) => (
                    <article
                      key={objective}
                      className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-5"
                    >
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-100 text-sm font-black text-blue-700">
                        {index + 1}
                      </span>

                      <p className="leading-7 text-slate-700">
                        {objective}
                      </p>
                    </article>
                  ),
                )}
              </div>
            </section>

            <section className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm md:p-8">
              <div className="flex flex-wrap items-end justify-between gap-4">
                <div>
                  <p className="text-sm font-bold uppercase tracking-widest text-blue-600">
                    Learning sequence
                  </p>

                  <h2 className="mt-2 text-3xl font-black text-slate-950">
                    Module Lessons
                  </h2>

                  <p className="mt-3 text-slate-600">
                    Complete the lessons in sequence for the
                    strongest learning experience.
                  </p>
                </div>

                <div className="flex flex-wrap gap-3">
                  <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-bold text-slate-700">
                    {lessons.length} lessons
                  </span>

                  <span className="rounded-full bg-emerald-100 px-4 py-2 text-sm font-bold text-emerald-700">
                    {completedCount} completed
                  </span>
                </div>
              </div>

              <div className="mt-8 space-y-4">
                {lessons.map((lesson, index) => {
                  const isCompleted =
                    validCompletedLessons.includes(
                      lesson.slug,
                    );

                  return (
                    <LessonCard
                      key={lesson.id}
                      lesson={lesson}
                      position={index + 1}
                      isCompleted={isCompleted}
                      onOpen={() =>
                        handleOpenLesson(lesson)
                      }
                    />
                  );
                })}
              </div>
            </section>
          </div>

          <ModuleSidebar
            metadata={metadata}
            lessonCount={lessons.length}
            completedCount={completedCount}
            progressPercentage={progressPercentage}
            continueLesson={firstIncompleteLesson}
            onStart={handleStartOrContinue}
          />
        </div>
      </div>
    </main>
  );
}

function ModuleHero({
  moduleNumber,
  metadata,
  lessonCount,
  completedCount,
  progressPercentage,
  onBack,
}) {
  return (
    <header
      className={`bg-gradient-to-br ${metadata.color} text-white`}
    >
      <div className="mx-auto max-w-7xl px-5 py-12 md:py-16">
        <button
          type="button"
          onClick={onBack}
          className="text-sm font-bold text-white/70 transition hover:text-white"
        >
          ← Back to Python Foundations
        </button>

        <div className="mt-8 max-w-4xl">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-white/70">
            Python Foundations · Module {moduleNumber}
          </p>

          <h1 className="mt-4 text-4xl font-black leading-tight md:text-6xl">
            {metadata.title}
          </h1>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-white/80">
            {metadata.description}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <HeroBadge>
              {lessonCount} Lessons
            </HeroBadge>

            <HeroBadge>
              {metadata.estimatedTime}
            </HeroBadge>

            <HeroBadge>
              {metadata.level}
            </HeroBadge>

            <HeroBadge>
              {completedCount}/{lessonCount} Completed
            </HeroBadge>

            <HeroBadge>
              {progressPercentage}% Complete
            </HeroBadge>
          </div>
        </div>
      </div>
    </header>
  );
}

function LessonCard({
  lesson,
  position,
  isCompleted,
  onOpen,
}) {
  return (
    <article className="group rounded-2xl border border-slate-200 bg-white transition hover:border-blue-300 hover:shadow-md">
      <button
        type="button"
        onClick={onOpen}
        className="flex w-full items-start gap-5 p-5 text-left md:p-6"
      >
        <div
          className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl font-black ${
            isCompleted
              ? "bg-emerald-100 text-emerald-700"
              : "bg-blue-100 text-blue-700"
          }`}
        >
          {isCompleted ? "✓" : position}
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div>
              <p className="text-sm font-bold uppercase tracking-wide text-slate-500">
                Lesson {lesson.lessonNumber}
              </p>

              <h3 className="mt-1 text-xl font-extrabold text-slate-950 transition group-hover:text-blue-700">
                {lesson.title}
              </h3>
            </div>

            <span
              className={`rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wide ${
                isCompleted
                  ? "bg-emerald-100 text-emerald-700"
                  : "bg-slate-100 text-slate-600"
              }`}
            >
              {isCompleted
                ? "Completed"
                : lesson.status}
            </span>
          </div>

          <p className="mt-3 line-clamp-2 leading-7 text-slate-600">
            {lesson.subtitle}
          </p>

          <div className="mt-4 flex flex-wrap gap-3 text-sm font-semibold text-slate-500">
            <span>{lesson.duration}</span>
            <span>• {lesson.level}</span>
          </div>
        </div>

        <span className="mt-2 text-2xl text-slate-300 transition group-hover:translate-x-1 group-hover:text-blue-600">
          →
        </span>
      </button>
    </article>
  );
}

function ModuleSidebar({
  metadata,
  lessonCount,
  completedCount,
  progressPercentage,
  continueLesson,
  onStart,
}) {
  const moduleCompleted =
    lessonCount > 0 &&
    completedCount === lessonCount;

  return (
    <aside className="h-fit space-y-5 lg:sticky lg:top-6">
      <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <p className="text-sm font-bold uppercase tracking-widest text-slate-500">
          Module progress
        </p>

        <div className="mt-5 flex items-end justify-between gap-3">
          <p className="text-4xl font-black text-slate-950">
            {progressPercentage}%
          </p>

          <p className="text-sm font-semibold text-slate-500">
            {completedCount}/{lessonCount} lessons
          </p>
        </div>

        <div className="mt-4 h-3 overflow-hidden rounded-full bg-slate-200">
          <div
            className={`h-full rounded-full transition-all duration-500 ${
              moduleCompleted
                ? "bg-emerald-500"
                : "bg-blue-600"
            }`}
            style={{
              width: `${progressPercentage}%`,
            }}
          />
        </div>

        {moduleCompleted && (
          <div className="mt-5 rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-center">
            <p className="font-extrabold text-emerald-800">
              Module completed ✓
            </p>

            <p className="mt-1 text-sm text-emerald-700">
              You completed all {lessonCount} lessons.
            </p>
          </div>
        )}

        <button
          type="button"
          onClick={onStart}
          className={`mt-6 w-full rounded-xl px-4 py-3 font-bold text-white transition ${
            moduleCompleted
              ? "bg-emerald-600 hover:bg-emerald-700"
              : "bg-blue-600 hover:bg-blue-700"
          }`}
        >
          {completedCount === 0
            ? "Start Module"
            : moduleCompleted
              ? "Review Module"
              : "Continue Learning"}
        </button>

        {continueLesson && (
          <p className="mt-3 text-center text-sm text-slate-500">
            {moduleCompleted
              ? "Review from"
              : "Next lesson"}
            : {continueLesson.title}
          </p>
        )}
      </section>

      <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <p className="text-sm font-bold uppercase tracking-widest text-slate-500">
          Module details
        </p>

        <dl className="mt-5 space-y-4">
          <DetailRow
            label="Level"
            value={metadata.level}
          />

          <DetailRow
            label="Estimated time"
            value={metadata.estimatedTime}
          />

          <DetailRow
            label="Lessons"
            value={lessonCount}
          />

          <DetailRow
            label="Completed"
            value={`${completedCount}/${lessonCount}`}
          />
        </dl>
      </section>

      <section className="rounded-3xl border border-amber-200 bg-gradient-to-br from-amber-50 to-blue-50 p-6">
        <p className="text-sm font-bold uppercase tracking-widest text-blue-700">
          Luminery
        </p>

        <h2 className="mt-3 text-xl font-black text-slate-950">
          Learn by writing code
        </h2>

        <p className="mt-3 leading-7 text-slate-700">
          Read the idea, run the example, explain what
          happened, and then change the code to test your
          understanding.
        </p>
      </section>
    </aside>
  );
}

function DetailRow({ label, value }) {
  return (
    <div className="flex items-center justify-between gap-4 border-b border-slate-100 pb-4 last:border-0 last:pb-0">
      <dt className="text-sm font-semibold text-slate-500">
        {label}
      </dt>

      <dd className="text-right font-bold text-slate-900">
        {value}
      </dd>
    </div>
  );
}

function HeroBadge({ children }) {
  return (
    <span className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-bold text-white backdrop-blur">
      {children}
    </span>
  );
}