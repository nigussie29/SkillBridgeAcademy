export default function CommonMistakesSection({
  mistakes = [],
}) {
  if (!Array.isArray(mistakes) || mistakes.length === 0) {
    return null;
  }

  return (
    <section className="mt-8 rounded-3xl bg-white p-8 shadow-sm">
      <div>
        <p className="text-sm font-bold uppercase tracking-wider text-red-700">
          Common Mistakes
        </p>

        <h2 className="mt-2 text-2xl font-extrabold text-slate-900">
          Learn From These Mistakes
        </h2>

        <p className="mt-3 leading-7 text-slate-600">
          Review each mistake and compare it with the correct
          mathematical thinking.
        </p>
      </div>

      <div className="mt-6 space-y-5">
        {mistakes.map((item, index) => (
          <article
            key={`${item?.mistake ?? "mistake"}-${index}`}
            className="overflow-hidden rounded-2xl border border-slate-200"
          >
            <div className="border-b border-red-100 bg-red-50 p-5">
              <div className="flex items-start gap-3">
                <span className="flex h-8 w-8 flex-none items-center justify-center rounded-full bg-red-100 font-bold text-red-700">
                  ✕
                </span>

                <div>
                  <p className="text-sm font-bold uppercase tracking-wide text-red-700">
                    Mistake
                  </p>

                  <p className="mt-2 leading-7 text-slate-800">
                    {item?.mistake || "No mistake description provided."}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-emerald-50 p-5">
              <div className="flex items-start gap-3">
                <span className="flex h-8 w-8 flex-none items-center justify-center rounded-full bg-emerald-100 font-bold text-emerald-700">
                  ✓
                </span>

                <div>
                  <p className="text-sm font-bold uppercase tracking-wide text-emerald-700">
                    Correct Thinking
                  </p>

                  <p className="mt-2 leading-7 text-slate-800">
                    {item?.correction ||
                      "Review the lesson explanation and check each step carefully."}
                  </p>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}