export default function WelcomeCard({
  name = "Student",
  mission,
  course,
  module,
  lesson,
  stage,
  totalStages = 8,
  onContinue,
}) {
  return (
    <section className="overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-900
via-[#2F2B88]
to-[#090E2D] px-6 py-8 text-white shadow-xl md:px-8 md:py-10 lg:px-10 lg:py-12">
      <div className="grid items-stretch gap-8 lg:grid-cols-[minmax(0,1fr)_320px]">
        {/* Left side */}
        <div className="min-w-0">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-blue-200">
            SkillBridge Academy
          </p>

          <h1 className="mt-3 text-3xl font-extrabold leading-tight md:text-4xl lg:text-5xl">
            Welcome back, {name} 👋
          </h1>

          <p className="mt-4 max-w-3xl text-base leading-7 text-blue-100 md:text-lg">
            Continue your journey toward becoming a confident mathematics,
            technology, and AI problem solver.
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-2 xl:grid-cols-5">
            <HeroDetail
              icon="📚"
              label="Course"
              value={course || "Algebra I"}
            />

            <HeroDetail
              icon="📖"
              label="Module"
              value={module || "Module 1"}
            />

            <HeroDetail
              icon="📝"
              label="Lesson"
              value={lesson || mission?.subject || "Current lesson"}
            />

            <HeroDetail
              icon="🧭"
              label="Stage"
              value={`${stage || mission?.currentStage || "Learn"} • ${
                mission?.currentStageNumber || 1
              } of ${totalStages}`}
            />

            <HeroDetail
              icon="⏱"
              label="Time"
              value={mission?.estimatedTime || "45 minutes"}
            />
          </div>

          <button
            type="button"
            onClick={onContinue}
            className="mt-8 inline-flex items-center justify-center rounded-2xl bg-white px-6 py-3.5 font-bold text-blue-800 shadow-lg transition hover:-translate-y-0.5 hover:bg-blue-50 focus:outline-none focus:ring-4 focus:ring-white/30"
          >
            ▶ Continue Learning
          </button>
        </div>

        {/* Right side */}
    {/* Right side */}
<aside className="rounded-3xl border border-violet-200 bg-gradient-to-br from-violet-50 via-indigo-50 to-white p-8 text-slate-900 shadow-lg">
 <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-pink-100 via-violet-100 to-indigo-100 text-3xl shadow-md">
    🎯
  </div>

  <p className="mt-6 text-xs font-bold uppercase tracking-[0.2em] text-violet-700">
    Today&apos;s Goal
  </p>

  <h2 className="mt-3 text-2xl font-extrabold leading-tight text-slate-900">
    {mission?.subject || "Continue your current lesson"}
  </h2>

  <p className="mt-4 text-sm leading-7 text-slate-600">
    {mission?.purpose ||
      "Focus on understanding the core idea before moving to practice."}
  </p>

  <div className="mt-6 border-t border-violet-200 pt-5">
    <p className="text-xs font-bold uppercase tracking-[0.18em] text-violet-700">
      Next Step
    </p>

    <p className="mt-2 font-semibold text-slate-900">
      {mission?.nextStep || "Complete the current learning stage"}
    </p>
  </div>

  <p className="mt-6 text-sm font-semibold text-indigo-700">
    Understanding is more important than speed.
  </p>
</aside>
      </div>
    </section>
  );
}

function HeroDetail({ icon, label, value }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur-sm">
      <div className="flex items-center gap-2">
        <span className="text-lg">{icon}</span>

        <p className="text-xs font-bold uppercase tracking-wide text-blue-200">
          {label}
        </p>
      </div>

      <p className="mt-2 truncate font-semibold text-white">
        {value}
      </p>
    </div>
  );
}