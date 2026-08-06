export default function LearningInsightsPanel({
  learningState,
}) {
  if (!learningState) {
    return (
      <section className="rounded-3xl bg-white p-6 shadow-sm">
        <h2 className="text-2xl font-extrabold text-slate-900">
          Learning Insights
        </h2>

        <p className="mt-3 text-slate-600">
          Learning information is currently unavailable.
        </p>
      </section>
    );
  }

  const currentLesson =
    learningState.lesson?.title ?? "Current lesson";

  const currentStage =
    learningState.pyravanta?.currentStage ?? "Learn";

  const currentStageNumber =
    learningState.pyravanta?.currentStageNumber ?? 1;

  const totalStages =
    learningState.pyravanta?.totalStages ?? 8;

  const completedStages =
    learningState.pyravanta?.stages?.filter(
      (stage) => stage.status === "completed"
    ).length ?? 0;

  const hasPracticeEvidence =
    learningState.evidence?.practiceCompleted ?? false;

  const hasMasterEvidence =
    learningState.evidence?.masterCompleted ?? false;

  const assessmentStatus = hasMasterEvidence
    ? "Evidence recorded"
    : "Not assessed yet";

  const nextEvidence = getNextEvidence({
    currentStage,
    hasPracticeEvidence,
    hasMasterEvidence,
  });

  return (
    <section className="rounded-3xl bg-white p-6 shadow-sm">
      {/* Header */}
      <div className="flex items-start gap-3">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-2xl">
          📊
        </div>

        <div>
          <h2 className="text-2xl font-extrabold text-slate-900">
            Learning Insights
          </h2>

          <p className="mt-1 text-sm leading-6 text-slate-500">
            Evidence of your learning
          </p>
        </div>
      </div>

      {/* Current learning context */}
      <div className="mt-6 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 p-5">
        <p className="text-xs font-bold uppercase tracking-widest text-blue-600">
          Current Learning
        </p>

        <h3 className="mt-2 text-xl font-extrabold text-slate-900">
          {currentLesson}
        </h3>

        <div className="mt-4 flex flex-wrap gap-2">
          <span className="rounded-full bg-white px-3 py-1 text-sm font-bold text-blue-700 shadow-sm">
            {currentStage}
          </span>

          <span className="rounded-full bg-white px-3 py-1 text-sm font-semibold text-slate-600 shadow-sm">
            Stage {currentStageNumber} of {totalStages}
          </span>
        </div>
      </div>

      {/* Evidence summary */}
      <div className="mt-5 grid gap-3">
        <InsightRow
          label="Learning Status"
          value="In progress"
          tone="blue"
        />

        <InsightRow
          label="Completed Stages"
          value={`${completedStages} of ${totalStages}`}
          tone="slate"
        />

        <InsightRow
          label="Assessment Status"
          value={assessmentStatus}
          tone={
            hasMasterEvidence
              ? "green"
              : "amber"
          }
        />
      </div>

      {/* Current evidence */}
      <div className="mt-6 rounded-2xl border border-slate-200 p-5">
        <p className="text-xs font-bold uppercase tracking-widest text-slate-500">
          Current Evidence
        </p>

        <div className="mt-4 space-y-3">
          <EvidenceItem
            completed
            text="Lesson opened"
          />

          <EvidenceItem
            completed={hasPracticeEvidence}
            text="Practice response completed"
          />

          <EvidenceItem
            completed={hasMasterEvidence}
            text="Master-stage evidence completed"
          />
        </div>
      </div>

      {/* Next evidence */}
      <div className="mt-5 rounded-2xl border border-blue-100 bg-blue-50 p-5">
        <p className="text-xs font-bold uppercase tracking-widest text-blue-700">
          Next Evidence
        </p>

        <h3 className="mt-2 text-lg font-extrabold text-slate-900">
          {nextEvidence}
        </h3>

        <p className="mt-2 text-sm leading-6 text-slate-600">
          Continue through the Pyravanta Path to build evidence of understanding,
          application, research, creation, and leadership.
        </p>
      </div>
    </section>
  );
}

function InsightRow({
  label,
  value,
  tone,
}) {
  const tones = {
    blue: "bg-blue-50 text-blue-700",
    green: "bg-emerald-50 text-emerald-700",
    amber: "bg-amber-50 text-amber-700",
    slate: "bg-slate-50 text-slate-700",
  };

  return (
    <div className="flex items-center justify-between gap-4 rounded-2xl bg-slate-50 p-4">
      <p className="font-semibold text-slate-600">
        {label}
      </p>

      <span
        className={`rounded-full px-3 py-1 text-sm font-bold ${
          tones[tone] ?? tones.slate
        }`}
      >
        {value}
      </span>
    </div>
  );
}

function EvidenceItem({
  completed,
  text,
}) {
  return (
    <div className="flex items-start gap-3">
      <div
        className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-bold text-white ${
          completed
            ? "bg-emerald-500"
            : "bg-slate-300"
        }`}
      >
        {completed ? "✓" : "○"}
      </div>

      <p
        className={
          completed
            ? "font-semibold text-slate-800"
            : "text-slate-500"
        }
      >
        {text}
      </p>
    </div>
  );
}

function getNextEvidence({
  currentStage,
  hasPracticeEvidence,
  hasMasterEvidence,
}) {
  if (!hasPracticeEvidence) {
    return "Complete the Practice stage";
  }

  if (!hasMasterEvidence) {
    return "Complete the Master stage";
  }

  return `Continue to the stage after ${currentStage}`;
}