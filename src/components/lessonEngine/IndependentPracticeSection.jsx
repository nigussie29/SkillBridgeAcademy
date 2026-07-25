export default function IndependentPracticeSection({
  questions = [],
}) {
  if (!Array.isArray(questions) || questions.length === 0) {
    return null;
  }

  return (
    <section className="mt-8 rounded-3xl bg-white p-8 shadow-sm">
      <div>
        <p className="text-sm font-bold uppercase tracking-wider text-green-700">
          Independent Practice
        </p>

        <h2 className="mt-2 text-2xl font-extrabold text-slate-900">
          Try It Yourself
        </h2>

        <p className="mt-3 text-slate-600 leading-7">
          Solve each problem on your own before checking the answer.
        </p>
      </div>

      <div className="mt-6 space-y-5">
        {questions.map((question, index) => (
          <article
            key={index}
            className="rounded-2xl border border-slate-200 p-6"
          >
            <div className="flex items-start gap-4">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-green-100 font-bold text-green-700">
                {index + 1}
              </span>

              <div className="flex-1">
                <p className="font-medium text-slate-800">
                  {question.question}
                </p>

                <details className="mt-4">
                  <summary className="cursor-pointer font-semibold text-blue-600 hover:text-blue-800">
                    Show Answer
                  </summary>

                  <div className="mt-3 rounded-xl bg-green-50 p-4">
                    <p className="font-semibold text-green-700">
                      Answer
                    </p>

                    <p className="mt-2 text-slate-700">
                      {question.answer}
                    </p>
                  </div>
                </details>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}