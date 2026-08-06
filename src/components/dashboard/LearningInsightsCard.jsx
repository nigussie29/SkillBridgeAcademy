import { Brain, Target, ShieldCheck, Flag, CheckCircle2, Circle } from "lucide-react";

export default function LearningInsightsCard({
  score = 87,
  mastery = "Developing",
  confidence = "High",
  focus = ["Variables", "Expressions"],
  milestone = "Practice Challenge",
  evidence = [
    { label: "Lesson", complete: true },
    { label: "Reflection", complete: true },
    { label: "Practice", complete: false },
    { label: "Mastery", complete: false },
  ],
}) {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-lg">
      {/* Header */}
      <div className="flex items-center gap-3">
        <div className="rounded-2xl bg-indigo-100 p-3">
          <Brain className="h-6 w-6 text-indigo-700" />
        </div>

        <div>
          <h2 className="text-xl font-bold text-slate-900">
            Learning Intelligence
          </h2>

          <p className="text-sm text-slate-500">
            Understand your learning patterns and prepare for your next milestone.
          </p>
        </div>
      </div>

      {/* Score */}
      <div className="mt-8 rounded-2xl bg-gradient-to-r from-indigo-50 to-blue-50 p-5">
        <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
          Today's Score
        </p>

        <div className="mt-2 text-5xl font-extrabold text-indigo-700">
          {score}%
        </div>
      </div>

      {/* Stats */}
      <div className="mt-6 space-y-4">

        <div className="flex items-center justify-between rounded-xl border p-4">
          <div className="flex items-center gap-2">
            <Target className="h-5 w-5 text-indigo-600" />
            <span className="font-medium text-slate-700">
              Mastery
            </span>
          </div>

          <span className="font-semibold text-slate-900">
            {mastery}
          </span>
        </div>

        <div className="flex items-center justify-between rounded-xl border p-4">
          <div className="flex items-center gap-2">
            <ShieldCheck className="h-5 w-5 text-emerald-600" />
            <span className="font-medium text-slate-700">
              Confidence
            </span>
          </div>

          <span className="font-semibold text-slate-900">
            {confidence}
          </span>
        </div>

      </div>

      {/* Focus */}
      <div className="mt-8">
        <h3 className="text-sm font-bold uppercase tracking-wide text-slate-500">
          Current Focus
        </h3>

        <div className="mt-3 flex flex-wrap gap-2">
          {focus.map((item) => (
            <span
              key={item}
              className="rounded-full bg-indigo-100 px-3 py-1 text-sm font-medium text-indigo-700"
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* Milestone */}
      <div className="mt-8 rounded-2xl border border-blue-200 bg-blue-50 p-5">
        <div className="flex items-center gap-2">
          <Flag className="h-5 w-5 text-blue-700" />

          <span className="font-semibold text-blue-700">
            Next Milestone
          </span>
        </div>

        <p className="mt-2 text-lg font-bold text-slate-900">
          {milestone}
        </p>
      </div>

      {/* Evidence */}
      <div className="mt-8">
        <h3 className="text-sm font-bold uppercase tracking-wide text-slate-500">
          Evidence
        </h3>

        <div className="mt-4 space-y-3">
          {evidence.map((item) => (
            <div
              key={item.label}
              className="flex items-center gap-3"
            >
              {item.complete ? (
                <CheckCircle2 className="h-5 w-5 text-emerald-500" />
              ) : (
                <Circle className="h-5 w-5 text-slate-300" />
              )}

              <span className="text-slate-700">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Button */}
      <button className="mt-8 w-full rounded-2xl bg-indigo-600 py-3 font-semibold text-white transition hover:bg-indigo-700">
        View Detailed Insights →
      </button>
    </section>
  );
}