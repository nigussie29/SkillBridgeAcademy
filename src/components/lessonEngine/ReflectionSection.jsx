export default function ReflectionSection({ reflection }) {
  if (!reflection) {
    return null;
  }

  const prompts = Array.isArray(reflection)
    ? reflection
    : [reflection];

  return (
    <section className="mt-8 rounded-3xl border border-amber-200 bg-amber-50 p-8 shadow-sm">
      <p className="text-sm font-bold uppercase tracking-wider text-amber-700">
        Reflection
      </p>

      <h2 className="mt-2 text-2xl font-extrabold text-slate-900">
        Think About Your Learning
      </h2>

      <p className="mt-3 leading-7 text-slate-600">
        Take a moment to explain what you learned and where you may still need
        practice.
      </p>

      <div className="mt-6 space-y-4">
        {prompts.map((prompt, index) => (
          <div
            key={`${prompt}-${index}`}
            className="rounded-2xl border border-amber-200 bg-white p-6"
          >
            <div className="flex items-start gap-4">
              <span className="flex h-8 w-8 flex-none items-center justify-center rounded-full bg-amber-100 font-bold text-amber-700">
                {index + 1}
              </span>

              <div className="flex-1">
                <p className="leading-7 text-slate-700">
                  {prompt}
                </p>

                <div className="mt-5 min-h-24 rounded-xl border-2 border-dashed border-slate-200 bg-slate-50 p-4">
                  <p className="text-sm text-slate-400">
                    Write your reflection here...
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}