import { Link, useParams } from "react-router-dom";
import pythonLessons from "../../../data/python/lessons";

export default function PythonLesson() {
  const { moduleNumber, lessonSlug } = useParams();
  console.log("URL Module:", moduleNumber);
console.log("URL Lesson:", lessonSlug);
console.log("Lessons:", pythonLessons);

  const lesson = pythonLessons.find(
    (item) =>
      String(item.moduleNumber) === String(moduleNumber) &&
      item.slug === lessonSlug
  );

  const moduleLessons = pythonLessons
    .filter(
      (item) =>
        String(item.moduleNumber) === String(moduleNumber)
    )
    .sort(
      (firstLesson, secondLesson) =>
        firstLesson.lessonNumber - secondLesson.lessonNumber
    );

  const currentLessonIndex = moduleLessons.findIndex(
    (item) => item.slug === lessonSlug
  );

  const previousLesson =
    currentLessonIndex > 0
      ? moduleLessons[currentLessonIndex - 1]
      : null;

  const nextLesson =
    currentLessonIndex >= 0 &&
    currentLessonIndex < moduleLessons.length - 1
      ? moduleLessons[currentLessonIndex + 1]
      : null;

  if (!lesson) {
    return (
      <main className="min-h-screen bg-slate-50 px-6 py-16">
        <div className="mx-auto max-w-4xl rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm">
          <div className="text-5xl">🐍</div>

          <h1 className="mt-5 text-3xl font-extrabold text-slate-900">
            Lesson not found
          </h1>

          <p className="mt-3 text-slate-600">
            This Python lesson may not be available yet.
          </p>

   <Link
  to={`/library/python/python-foundations/module/${lesson.moduleNumber}`}
  className="inline-flex shrink-0 items-center justify-center rounded-xl border border-white/20 bg-white/10 px-4 py-3 font-bold text-white transition hover:bg-white/20"
>
  ← Back to Module
</Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-50">
      <div className="h-2 bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600" />

      <div className="mx-auto max-w-6xl px-6 py-10">
        <nav className="flex flex-wrap items-center gap-2 text-sm font-semibold text-slate-500">
          <Link to="/library" className="transition hover:text-blue-700">
            Library
          </Link>

          <span>/</span>

          <Link
            to="/library/python"
            className="transition hover:text-blue-700"
          >
            Python Foundations
          </Link>

          <span>/</span>

          <Link
            to={`/library/python/python-foundations/module/${lesson.moduleNumber}`}
            className="transition hover:text-blue-700"
          >
            Module {lesson.moduleNumber}
          </Link>

          <span>/</span>

          <span className="text-slate-800">
            Lesson {lesson.lessonNumber}
          </span>
        </nav>

        <section className="mt-6 overflow-hidden rounded-3xl bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950 p-8 text-white shadow-xl md:p-10">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
            <div className="min-w-0">
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-blue-300">
                Python Foundations
              </p>

              <p className="mt-4 text-sm font-semibold text-blue-200">
                Module {lesson.moduleNumber} · Lesson {lesson.lessonNumber}
              </p>

              <h1 className="mt-3 max-w-4xl text-4xl font-extrabold tracking-tight md:text-5xl">
                {lesson.title}
              </h1>

              <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-200">
                {lesson.subtitle}
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <LessonBadge label={lesson.level} />
                <LessonBadge label={lesson.duration} />
                <LessonBadge label={lesson.status} />
                <LessonBadge label="Pyravanta: Learn" />
              </div>
            </div>

            <Link
              to={`/library/python/python-foundations/module/${lesson.moduleNumber}`}
              className="inline-flex shrink-0 items-center justify-center rounded-xl border border-white/20 bg-white/10 px-4 py-3 font-bold text-white transition hover:bg-white/20"
            >
              ← Back to Module
            </Link>
          </div>
        </section>

        <div className="mt-10 grid gap-8 lg:grid-cols-[minmax(0,1fr)_320px]">
          <div className="space-y-8">
            <LessonSection
              eyebrow="Essential Question"
              title={lesson.essentialQuestion}
            />

            <LessonSection eyebrow="Big Idea" title={lesson.bigIdea} />

            <section className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
              <SectionHeading
                icon="🎯"
                eyebrow="Learning Objectives"
                title="By the end of this lesson"
              />

              <ul className="mt-6 space-y-3">
                {lesson.learningObjectives?.map((objective) => (
                  <li
                    key={objective}
                    className="flex items-start gap-3 rounded-2xl bg-slate-50 p-4"
                  >
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-100 text-sm font-bold text-blue-700">
                      ✓
                    </span>

                    <span className="leading-7 text-slate-700">
                      {objective}
                    </span>
                  </li>
                ))}
              </ul>
            </section>

            {lesson.warmUp && (
              <section className="rounded-3xl border border-amber-200 bg-amber-50 p-7">
                <SectionHeading
                  icon="🔥"
                  eyebrow="Warm-Up"
                  title={lesson.warmUp.title}
                />

                <div className="mt-6 space-y-3">
                  {lesson.warmUp.prompts?.map((prompt, index) => (
                    <div
                      key={prompt}
                      className="flex items-start gap-3 rounded-2xl bg-white p-4"
                    >
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-amber-100 text-sm font-extrabold text-amber-700">
                        {index + 1}
                      </span>

                      <p className="leading-7 text-slate-700">{prompt}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {lesson.conceptExplanation && (
              <section className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
                <SectionHeading
                  icon="📘"
                  eyebrow="Learn"
                  title={lesson.conceptExplanation.title}
                />

                <p className="mt-5 leading-8 text-slate-700">
                  {lesson.conceptExplanation.summary}
                </p>

                {lesson.conceptExplanation.teachingNotes?.length > 0 && (
                  <div className="mt-6 rounded-2xl bg-blue-50 p-5">
                    <h3 className="font-extrabold text-blue-900">Key Ideas</h3>

                    <ul className="mt-4 space-y-3">
                      {lesson.conceptExplanation.teachingNotes.map((note) => (
                        <li
                          key={note}
                          className="flex items-start gap-3 text-sm leading-7 text-slate-700"
                        >
                          <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-blue-600" />
                          <span>{note}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </section>
            )}

            {lesson.examples?.length > 0 && (
              <section className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
                <SectionHeading
                  icon="💻"
                  eyebrow="Examples"
                  title="See Python in action"
                />

                <div className="mt-6 space-y-6">
                  {lesson.examples.map((example) => (
                    <article
                      key={example.title}
                      className="overflow-hidden rounded-2xl border border-slate-200"
                    >
                      <div className="bg-slate-100 px-5 py-3">
                        <h3 className="font-extrabold text-slate-900">
                          {example.title}
                        </h3>
                      </div>

                      <pre className="overflow-x-auto bg-slate-950 p-5 text-sm leading-7 text-emerald-300">
                        <code>{example.code}</code>
                      </pre>

                      <p className="p-5 leading-7 text-slate-700">
                        {example.explanation}
                      </p>
                    </article>
                  ))}
                </div>
              </section>
            )}

            {lesson.practice?.length > 0 && (
              <section className="rounded-3xl border border-violet-200 bg-violet-50 p-7">
                <SectionHeading
                  icon="✍️"
                  eyebrow="Practice"
                  title="Check your understanding"
                />

                <div className="mt-6 space-y-4">
                  {lesson.practice.map((item, index) => (
                    <div
                      key={item.prompt}
                      className="rounded-2xl bg-white p-5"
                    >
                      <p className="text-xs font-bold uppercase tracking-widest text-violet-700">
                        Practice {index + 1}
                      </p>

                      <p className="mt-2 leading-7 text-slate-700">
                        {item.prompt}
                      </p>

                      <textarea
                        rows={4}
                        placeholder="Write your response..."
                        className="mt-4 w-full resize-y rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-violet-500 focus:ring-4 focus:ring-violet-100"
                      />
                    </div>
                  ))}
                </div>
              </section>
            )}

            {lesson.project && (
              <section className="rounded-3xl border border-emerald-200 bg-emerald-50 p-7">
                <SectionHeading
                  icon="🛠️"
                  eyebrow="Build"
                  title={lesson.project.title}
                />

                {lesson.project.requirements?.length > 0 && (
                  <div className="mt-6 rounded-2xl bg-white p-5">
                    <h3 className="font-extrabold text-slate-900">
                      Project Requirements
                    </h3>

                    <ul className="mt-4 space-y-3">
                      {lesson.project.requirements.map((requirement) => (
                        <li
                          key={requirement}
                          className="flex items-start gap-3 leading-7 text-slate-700"
                        >
                          <span className="mt-1 font-bold text-emerald-600">✓</span>
                          <span>{requirement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {lesson.project.extensionIdeas?.length > 0 && (
                  <div className="mt-5 rounded-2xl bg-white p-5">
                    <h3 className="font-extrabold text-slate-900">
                      Extension Ideas
                    </h3>

                    <ul className="mt-4 space-y-3">
                      {lesson.project.extensionIdeas.map((idea) => (
                        <li
                          key={idea}
                          className="flex items-start gap-3 leading-7 text-slate-700"
                        >
                          <span className="mt-1 text-emerald-600">→</span>
                          <span>{idea}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </section>
            )}

            {lesson.reflection && (
              <section className="rounded-3xl bg-gradient-to-br from-indigo-900 to-violet-900 p-7 text-white shadow-lg">
                <SectionHeading
                  icon="💭"
                  eyebrow="Reflect"
                  title="Think about your learning"
                  light
                />

                <p className="mt-5 text-lg leading-8 text-indigo-100">
                  {lesson.reflection}
                </p>

                <textarea
                  rows={5}
                  placeholder="Write your reflection..."
                  className="mt-5 w-full resize-y rounded-2xl border border-white/20 bg-white/10 px-4 py-3 text-white outline-none placeholder:text-indigo-200 focus:border-white/50 focus:ring-4 focus:ring-white/10"
                />
              </section>
            )}

            <LessonNavigation
              lesson={lesson}
              previousLesson={previousLesson}
              nextLesson={nextLesson}
            />
          </div>

          <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
            <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-xs font-bold uppercase tracking-widest text-blue-700">
                Lesson Progress
              </p>

              <h2 className="mt-2 text-xl font-extrabold text-slate-900">
                Start your lesson
              </h2>

              <p className="mt-3 text-sm leading-6 text-slate-600">
                Complete each activity and reflection before moving to the next
                lesson.
              </p>

              <div className="mt-5 h-3 overflow-hidden rounded-full bg-slate-200">
                <div className="h-full w-0 rounded-full bg-blue-600" />
              </div>

              <p className="mt-2 text-sm font-semibold text-slate-500">
                0% completed
              </p>

              <button
                type="button"
                className="mt-6 w-full rounded-xl bg-blue-600 px-5 py-3 font-bold text-white transition hover:bg-blue-700"
              >
                Mark Lesson Complete
              </button>
            </section>

            <section className="rounded-3xl border border-violet-200 bg-violet-50 p-6">
              <p className="text-xs font-bold uppercase tracking-widest text-violet-700">
                Luminery Guidance
              </p>

              <p className="mt-3 text-sm leading-7 text-slate-700">
                Focus on understanding the lesson&apos;s main idea before
                memorizing code. Programming begins with clear thinking, careful
                testing, and reflection.
              </p>
            </section>

            <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-xs font-bold uppercase tracking-widest text-slate-500">
                Module Position
              </p>

              <h3 className="mt-2 text-lg font-extrabold text-slate-900">
                Lesson {lesson.lessonNumber} of {moduleLessons.length}
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-500">
                {nextLesson
                  ? `Next: ${nextLesson.title}`
                  : "You have reached the final lesson in this module."}
              </p>
            </section>
          </aside>
        </div>
      </div>
    </main>
  );
}

function LessonNavigation({ lesson, previousLesson, nextLesson }) {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="grid gap-4 md:grid-cols-3">
        {previousLesson ? (
          <Link
  to={`/library/python/python-foundations/module/${previousLesson.moduleNumber}/lesson/${previousLesson.slug}`}
  className="group rounded-2xl border border-slate-200 p-4 transition hover:border-blue-300 hover:bg-blue-50"
>
            <p className="text-xs font-bold uppercase tracking-widest text-slate-500">
              Previous Lesson
            </p>

            <p className="mt-2 font-extrabold text-slate-900 group-hover:text-blue-700">
              ← {previousLesson.title}
            </p>
          </Link>
        ) : (
          <div className="rounded-2xl border border-dashed border-slate-200 p-4 text-slate-400">
            <p className="text-xs font-bold uppercase tracking-widest">
              Previous Lesson
            </p>

            <p className="mt-2 font-semibold">This is the first lesson</p>
          </div>
        )}

        <Link
         to={`/library/python/python-foundations/module/${lesson.moduleNumber}`}
          className="flex items-center justify-center rounded-2xl border border-slate-200 p-4 text-center font-extrabold text-slate-700 transition hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700"
        >
          Back to Module {lesson.moduleNumber}
        </Link>

        {nextLesson ? (
          <Link
           to={`/library/python/python-foundations/module/${nextLesson.moduleNumber}/lesson/${nextLesson.slug}`}
            className="group rounded-2xl border border-slate-200 p-4 text-right transition hover:border-blue-300 hover:bg-blue-50"
          >
            <p className="text-xs font-bold uppercase tracking-widest text-slate-500">
              Next Lesson
            </p>

            <p className="mt-2 font-extrabold text-slate-900 group-hover:text-blue-700">
              {nextLesson.title} →
            </p>
          </Link>
        ) : (
          <div className="rounded-2xl border border-dashed border-emerald-200 bg-emerald-50 p-4 text-right">
            <p className="text-xs font-bold uppercase tracking-widest text-emerald-700">
              Module Complete
            </p>

            <p className="mt-2 font-extrabold text-emerald-900">
              You finished Module {lesson.moduleNumber} ✓
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

function LessonSection({ eyebrow, title }) {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
      <p className="text-xs font-bold uppercase tracking-widest text-blue-700">
        {eyebrow}
      </p>

      <h2 className="mt-3 text-2xl font-extrabold leading-tight text-slate-900">
        {title}
      </h2>
    </section>
  );
}

function SectionHeading({ icon, eyebrow, title, light = false }) {
  return (
    <div className="flex items-start gap-3">
      <div
        className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl text-2xl ${
          light ? "bg-white/10" : "bg-blue-50"
        }`}
      >
        {icon}
      </div>

      <div>
        <p
          className={`text-xs font-bold uppercase tracking-widest ${
            light ? "text-indigo-200" : "text-blue-700"
          }`}
        >
          {eyebrow}
        </p>

        <h2
          className={`mt-1 text-2xl font-extrabold ${
            light ? "text-white" : "text-slate-900"
          }`}
        >
          {title}
        </h2>
      </div>
    </div>
  );
}

function LessonBadge({ label }) {
  return (
    <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-sm font-semibold text-blue-100">
      {label}
    </span>
  );
}