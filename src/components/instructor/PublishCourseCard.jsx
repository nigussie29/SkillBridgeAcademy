
import { Link } from "react-router-dom";
export default function PublishCourseCard({
  courseTitle = "Untitled Course",
  status = "Draft",
  checklist = {},
  onPublish,
}) {
  const requirements = [
    {
      key: "problem",
      label: "Problem statement completed",
    },
    {
      key: "audience",
      label: "Target audience defined",
    },
    {
      key: "outcomes",
      label: "Learning outcomes completed",
    },
    {
      key: "modules",
      label: "At least one module created",
    },
    {
      key: "lessons",
      label: "Lessons added",
    },
    {
      key: "assessment",
      label: "Assessment plan added",
    },
    {
      key: "research",
      label: "Research activity added",
    },
    {
      key: "portfolio",
      label: "Portfolio evidence defined",
    },
  ];

  const completedCount = requirements.filter(
    (item) => checklist[item.key]
  ).length;

  const readiness = Math.round(
    (completedCount / requirements.length) * 100
  );

  const isReady = completedCount === requirements.length;

  function handlePublish() {
    if (!isReady) {
      return;
    }

    onPublish?.();
  }

  return (
    <section className="rounded-3xl bg-white p-8 shadow-sm">
      <p className="text-sm font-bold uppercase tracking-wide text-green-600">
        SkillBridge Publishing Review
      </p>

      <div className="mt-2 flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
        <div>
          <h2 className="text-3xl font-extrabold text-slate-900">
            Publish Course
          </h2>

          <p className="mt-3 max-w-2xl leading-7 text-slate-600">
            Review the course against the SkillBridge Method before making it
            available to learners.
          </p>
        </div>

        <div className="rounded-2xl bg-slate-50 px-6 py-4 text-center">
          <p className="text-sm font-bold uppercase tracking-wide text-slate-500">
            Status
          </p>

          <p className="mt-1 text-xl font-extrabold text-slate-900">
            {status}
          </p>
        </div>
      </div>

      <div className="mt-8 rounded-2xl bg-blue-50 p-6">
        <p className="text-sm font-bold uppercase tracking-wide text-blue-600">
          Course
        </p>

        <h3 className="mt-2 text-2xl font-extrabold text-slate-900">
          {courseTitle}
        </h3>

        <div className="mt-6 flex items-center justify-between gap-4">
          <p className="font-bold text-slate-700">
            Publishing readiness
          </p>

          <p className="text-2xl font-extrabold text-blue-700">
            {readiness}%
          </p>
        </div>

        <div className="mt-3 h-3 overflow-hidden rounded-full bg-blue-100">
          <div
            className="h-full rounded-full bg-blue-600 transition-all duration-500"
            style={{ width: `${readiness}%` }}
          />
        </div>
      </div>

      <div className="mt-8">
        <h3 className="text-xl font-extrabold text-slate-900">
          Publishing Checklist
        </h3>

        <div className="mt-5 space-y-3">
          {requirements.map((item) => {
            const complete = Boolean(checklist[item.key]);

            return (
              <div
                key={item.key}
                className={`flex items-center gap-4 rounded-2xl border p-4 ${
                  complete
                    ? "border-green-200 bg-green-50"
                    : "border-slate-200 bg-slate-50"
                }`}
              >
                <span className="text-xl">
                  {complete ? "✅" : "⬜"}
                </span>

                <p
                  className={`font-semibold ${
                    complete
                      ? "text-green-800"
                      : "text-slate-700"
                  }`}
                >
                  {item.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      <div className="mt-8 rounded-2xl bg-violet-50 p-5">
        <p className="font-bold text-violet-700">
          🤖 Luminery Review
        </p>

        <p className="mt-2 leading-7 text-slate-700">
          {isReady
            ? "This course meets the current SkillBridge publishing requirements and is ready for final instructor review."
            : "Complete the remaining requirements before publishing. Every course should clearly connect learning, mastery, research, portfolio evidence, and real-world purpose."}
        </p>
      </div>

     <div className="mt-8 flex flex-wrap items-center gap-4">
  <button
    type="button"
    onClick={handlePublish}
    disabled={!isReady}
    className="rounded-xl bg-green-600 px-6 py-3 font-bold text-white transition hover:bg-green-700 disabled:cursor-not-allowed disabled:bg-slate-300"
  >
    Publish Course
  </button>

  {!isReady && (
    <p className="text-sm font-semibold text-slate-500">
      {requirements.length - completedCount} requirement(s) remaining
    </p>
  )}
</div>
    </section>
  );
}