import { useState } from "react";

function getColors(status) {
  switch (status) {
    case "completed":
      return {
        circle: "bg-emerald-500",
        line: "bg-emerald-500",
        text: "text-emerald-700",
        badge: "bg-emerald-50 text-emerald-700",
      };

    case "current":
      return {
        circle: "bg-blue-600",
        line: "bg-slate-300",
        text: "text-blue-700",
        badge: "bg-blue-50 text-blue-700",
      };

    default:
      return {
        circle: "bg-slate-300",
        line: "bg-slate-300",
        text: "text-slate-500",
        badge: "bg-slate-100 text-slate-500",
      };
  }
}

export default function LearningJourneyCard({
  stages = [],
}) {
  const [isOpen, setIsOpen] = useState(false);

  if (!stages.length) {
    return null;
  }

  const currentStage =
    stages.find((stage) => stage.status === "current") ??
    stages[0];

  const completedCount = stages.filter(
    (stage) => stage.status === "completed"
  ).length;

  const progress = Math.round(
    (completedCount / stages.length) * 100
  );

  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      {/* Header */}
      <div className="flex items-start gap-3">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-2xl">
          🧭
        </div>

        <div className="min-w-0">
          <h2 className="text-xl font-extrabold text-slate-900">
            Pyravanta Path
          </h2>

          <p className="mt-1 text-sm leading-5 text-slate-500">
            Your personal learning roadmap
          </p>
        </div>
      </div>

      {/* Current stage */}
      <div className="mt-6 rounded-2xl border border-blue-100 bg-blue-50 p-4">
        <p className="text-xs font-bold uppercase tracking-widest text-blue-600">
          You&apos;re Here
        </p>

        <div className="mt-3 flex items-center gap-3">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-600 text-xl text-white shadow-sm">
            {currentStage.icon}
          </div>

          <div className="min-w-0">
            <h3 className="text-xl font-extrabold text-slate-900">
              {currentStage.title}
            </h3>

            <p className="text-sm text-slate-500">
              Stage {currentStage.id} of {stages.length}
            </p>
          </div>
        </div>
      </div>

      {/* Progress */}
      <div className="mt-6">
        <div className="flex items-center justify-between gap-4">
          <p className="text-sm font-semibold text-slate-600">
            Path Progress
          </p>

          <p className="text-sm font-bold text-blue-600">
            {progress}%
          </p>
        </div>

        <div className="mt-3 h-3 overflow-hidden rounded-full bg-slate-200">
          <div
            className="h-full rounded-full bg-blue-600 transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>

        <p className="mt-2 text-xs text-slate-500">
          {completedCount} of {stages.length} stages completed
        </p>
      </div>

      {/* Toggle */}
      <button
        type="button"
        onClick={() => setIsOpen((current) => !current)}
        className="mt-6 flex w-full items-center justify-between rounded-xl border border-slate-200 px-4 py-3 font-bold text-slate-700 transition hover:border-blue-300 hover:bg-blue-50"
        aria-expanded={isOpen}
      >
        <span>
          {isOpen ? "Hide Pyravanta Path" : "Open Pyravanta Path"}
        </span>

        <span
          className={`transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          ▼
        </span>
      </button>

      {/* Expanded stages */}
      {isOpen && (
        <div className="mt-6 space-y-5 border-t border-slate-200 pt-6">
          {stages.map((stage, index) => {
            const colors = getColors(stage.status);

            return (
              <div key={stage.id}>
                <div className="flex items-start gap-4">
                  <div className="flex flex-col items-center">
                    <div
                      className={`flex h-10 w-10 items-center justify-center rounded-full text-white ${colors.circle}`}
                    >
                      {stage.icon}
                    </div>

                    {index < stages.length - 1 && (
                      <div
                        className={`mt-1 h-9 w-1 rounded ${colors.line}`}
                      />
                    )}
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between gap-3">
                      <h3 className={`font-bold ${colors.text}`}>
                        {stage.title}
                      </h3>

                      <span
                        className={`shrink-0 rounded-full px-2.5 py-1 text-xs font-bold ${colors.badge}`}
                      >
                        {stage.status === "completed" && "Completed"}
                        {stage.status === "current" && "Current"}
                        {stage.status === "locked" && "Locked"}
                      </span>
                    </div>

                    <p className="mt-1 text-sm text-slate-500">
                      Stage {stage.id} of {stages.length}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
}