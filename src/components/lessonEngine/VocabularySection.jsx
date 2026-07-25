export default function VocabularySection({ vocabulary = [] }) {
  if (!Array.isArray(vocabulary) || vocabulary.length === 0) {
    return null;
  }

  return (
    <section className="mt-8 rounded-3xl bg-white p-8 shadow-sm">
      <div className="mb-6">
        <p className="text-sm font-bold uppercase tracking-wider text-blue-700">
          Key Vocabulary
        </p>

        <h2 className="mt-2 text-3xl font-extrabold text-slate-900">
          Words You Need to Know
        </h2>

        <p className="mt-3 text-slate-600">
          Review these terms before continuing through the lesson.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        {vocabulary.map((item, index) => {
          const term =
            typeof item === "string"
              ? item
              : item?.term ?? `Term ${index + 1}`;

          const definition =
            typeof item === "string"
              ? ""
              : item?.definition ?? "";

          const example =
            typeof item === "string"
              ? ""
              : item?.example ?? "";

          return (
            <article
              key={`${term}-${index}`}
              className="rounded-2xl border border-slate-200 bg-slate-50 p-5"
            >
              <h3 className="text-xl font-bold text-slate-900">
                {term}
              </h3>

              {definition && (
                <p className="mt-2 leading-7 text-slate-700">
                  {definition}
                </p>
              )}

              {example && (
                <div className="mt-4 rounded-xl border border-blue-100 bg-blue-50 p-4">
                  <p className="text-sm font-semibold text-blue-800">
                    Example
                  </p>

                  <p className="mt-1 text-slate-700">
                    {example}
                  </p>
                </div>
              )}
            </article>
          );
        })}
      </div>
    </section>
  );
}