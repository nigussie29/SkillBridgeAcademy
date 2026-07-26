import { Link } from "react-router-dom";

export default function LessonNavigation({
  previousLesson,
  nextLesson,
}) {
  if (!previousLesson && !nextLesson) return null;

  const getLessonPath = (lesson) => {
    if (!lesson) return null;

    if (lesson.href) {
      return lesson.href;
    }

    if (lesson.path) {
      return lesson.path;
    }

    if (lesson.slug && lesson.moduleNumber) {
      return `/library/high-school/algebra-1/module/${lesson.moduleNumber}/lesson/${lesson.slug}`;
    }

    return null;
  };

  const previousPath = getLessonPath(previousLesson);
  const nextPath = getLessonPath(nextLesson);

  return (
    <section className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-between">
      {previousLesson && previousPath ? (
        <Link
          to={previousPath}
          className="rounded-2xl border border-slate-300 px-6 py-4 hover:bg-slate-100"
        >
          ← {previousLesson.title}
        </Link>
      ) : (
        <div />
      )}

      {nextLesson && nextPath ? (
        <Link
          to={nextPath}
          className="rounded-2xl bg-blue-600 px-6 py-4 font-semibold text-white hover:bg-blue-700"
        >
          {nextLesson.title} →
        </Link>
      ) : null}
    </section>
  );
}