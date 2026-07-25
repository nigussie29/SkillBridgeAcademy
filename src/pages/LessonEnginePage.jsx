

export default function LessonEnginePage() {
  const { lessonSlug } = useParams();

  const lesson = findLessonById(lessonSlug);

  if (!lesson) {
    return (
      <main className="min-h-screen bg-slate-50 px-6 py-20">
        <div className="mx-auto max-w-3xl rounded-3xl bg-white p-10 text-center shadow-sm">
          <p className="text-sm font-bold uppercase tracking-wide text-blue-600">
            SkillBridge Academy
          </p>

          <h1 className="mt-3 text-3xl font-extrabold text-slate-900">
            Lesson not found
          </h1>

          <p className="mt-4 text-slate-600">
            The requested lesson could not be found in the lesson catalog.
          </p>

          <Link
            to="/courses"
            className="mt-7 inline-block rounded-xl bg-blue-600 px-6 py-3 font-bold text-white hover:bg-blue-700"
          >
            Return to Courses
          </Link>
        </div>
      </main>
    );
  }

  return <LessonTemplate lesson={lesson} />;
}