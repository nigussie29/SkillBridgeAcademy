export default function LumineryCard({
  learner = "Learner",
  greeting = "Welcome back",
  message,
  recommendation,
  mission = "Complete today's learning mission.",
  tasks = [
    { title: "Review previous lesson", duration: "10 min" },
    { title: "Complete today's lesson", duration: "20 min" },
    { title: "Complete the lesson check", duration: "5 min" },
  ],
  onStartSession,
}) {
  return (
    <section className="overflow-hidden rounded-3xl bg-gradient-to-br from-violet-700 via-indigo-700 to-blue-900 text-white shadow-xl">
      {/* Header */}
      <div className="flex flex-col gap-5 border-b border-white/10 px-6 py-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-4">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-3xl shadow-inner">
            ✨
          </div>

          <div>
            <h2 className="text-2xl font-extrabold">
              Luminery AI
            </h2>

            <p className="mt-1 text-sm text-violet-200">
              Your personal learning mentor
            </p>
          </div>
        </div>

        <div className="inline-flex w-fit items-center gap-2 rounded-full border border-emerald-300/20 bg-emerald-400/10 px-3 py-1.5 text-xs font-bold text-emerald-200">
          <span className="h-2 w-2 rounded-full bg-emerald-400" />
          Ready to guide you
        </div>
      </div>

      <div className="p-6">
        {/* Personalized guidance */}
        <div className="rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur-sm">
          <p className="text-sm text-violet-200">
            {greeting}, {learner} 👋
          </p>

          <p className="mt-3 text-lg font-semibold leading-8">
            {message ||
              "Focus on understanding the concept before moving into practice."}
          </p>
        </div>

        {/* Mission and recommendation */}
        <div className="mt-6 grid gap-4 lg:grid-cols-2">
          <div className="rounded-2xl bg-white/10 p-5">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-violet-200">
              Today&apos;s Mission
            </p>

            <p className="mt-3 leading-7 text-white">
              {mission}
            </p>
          </div>

          <div className="rounded-2xl bg-white/10 p-5">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-violet-200">
              Luminery Guidance
            </p>

            <p className="mt-3 text-sm leading-7 text-violet-50">
              {recommendation ||
                "Work carefully, explain your reasoning, and check your understanding before continuing."}
            </p>
          </div>
        </div>

        {/* Today's plan */}
        <div className="mt-6">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-violet-200">
                Today&apos;s Plan
              </p>

              <h3 className="mt-2 text-xl font-extrabold">
                Your guided learning sequence
              </h3>
            </div>

            <p className="hidden text-sm text-violet-200 sm:block">
              {tasks.length} learning activities
            </p>
          </div>

          <div className="mt-4 space-y-3">
            {tasks.map((task, index) => (
              <div
                key={`${task.title}-${index}`}
                className="flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/10 px-4 py-3 transition hover:bg-white/15"
              >
                <div className="flex min-w-0 items-center gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/10 text-sm font-bold text-violet-100">
                    {index + 1}
                  </div>

                  <span className="text-sm font-medium">
                    {task.title}
                  </span>
                </div>

                <span className="shrink-0 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-violet-100">
                  {task.duration}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <button
          type="button"
          onClick={onStartSession}
          className="mt-7 flex w-full items-center justify-center gap-2 rounded-2xl bg-white px-6 py-4 font-extrabold text-indigo-700 shadow-lg transition hover:-translate-y-0.5 hover:bg-indigo-50 focus:outline-none focus:ring-4 focus:ring-white/30"
        >
          <span>🚀</span>
          <span>Start Guided Session</span>
        </button>
      </div>
    </section>
  );
}