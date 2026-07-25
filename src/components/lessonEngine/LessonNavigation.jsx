import { Link } from "react-router-dom";

export default function LessonNavigation({
  previousLesson,
  nextLesson,
}) {
  if (!previousLesson && !nextLesson) return null;

  return (
    <section className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-between">
      {previousLesson ? (
        <Link
          to={previousLesson.path}
          className="rounded-2xl border border-slate-300 px-6 py-4 hover:bg-slate-100"
        >
          ← {previousLesson.title}
        </Link>
      ) : (
        <div />
      )}

      {nextLesson ? (
        <Link
          to={nextLesson.path}
          className="rounded-2xl bg-blue-600 px-6 py-4 font-semibold text-white hover:bg-blue-700"
        >
          {nextLesson.title} →
        </Link>
      ) : null}
    </section>
  );
}