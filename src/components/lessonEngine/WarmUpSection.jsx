export default function WarmUpSection({ warmUp }) {
  if (!warmUp) {
    return null;
  }

  const prompts = Array.isArray(warmUp.prompts)
    ? warmUp.prompts
    : [];

  if (!warmUp.title && prompts.length === 0) {
    return null;
  }

  return (
    <section className="mt-8 rounded-3xl border border-amber-200 bg-amber-50 p-8 shadow-sm">
      <div className="flex items-start gap-4">
        <div className="flex h-12 w-12 flex-none items-center justify-center rounded-2xl bg-amber-100 text-2xl">
          🔥
        </div>

        <div className="flex-1">
          <p className="text-sm font-bold uppercase tracking-wider text-amber-700">
            Warm-Up
          </p>

          <h2 className="mt-2 text-2xl font-extrabold text-slate-900">
            {warmUp.title || "Activate Prior Knowledge"}
          </h2>

          {warmUp.description && (
            <p className="mt-3 leading-7 text-slate-700">
              {warmUp.description}
            </p>
          )}
        </div>
      </div>

      {prompts.length > 0 && (
        <ol className="mt-6 space-y-4">
          {prompts.map((prompt, index) => (
            <li
              key={`${prompt}-${index}`}
              className="flex items-start gap-4 rounded-2xl border border-amber-200 bg-white p-5"
            >
              <span className="flex h-8 w-8 flex-none items-center justify-center rounded-full bg-amber-100 text-sm font-bold text-amber-800">
                {index + 1}
              </span>

              <p className="leading-7 text-slate-700">
                {prompt}
              </p>
            </li>
          ))}
        </ol>
      )}

      <div className="mt-6 rounded-2xl border border-amber-200 bg-white p-5">
        <p className="text-sm font-semibold text-amber-800">
          Student Tip
        </p>

        <p className="mt-2 leading-7 text-slate-700">
          Try each prompt before reading the lesson explanation. Mistakes are
          useful because they show what you are ready to learn.
        </p>
      </div>
    </section>
  );
}