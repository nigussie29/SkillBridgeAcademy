export default function ApplySection({ apply }) {
  if (!apply || typeof apply !== "object") {
    return null;
  }

  const realWorld = apply.realWorldConnection;
  const technology = apply.technologyActivity;
  const pythonLab = apply.pythonLab;

  return (
    <section className="mt-8 rounded-3xl bg-white p-8 shadow-sm">
      <div>
        <p className="text-sm font-bold uppercase tracking-wider text-indigo-700">
          Apply Your Learning
        </p>

        <h2 className="mt-2 text-2xl font-extrabold text-slate-900">
          {apply.title || "Connect Mathematics to the Real World"}
        </h2>

        {apply.description && (
          <p className="mt-3 leading-7 text-slate-600">
            {apply.description}
          </p>
        )}
      </div>

      {realWorld && (
        <div className="mt-8 rounded-2xl border border-blue-200 bg-blue-50 p-6">
          <p className="text-xs font-bold uppercase tracking-wider text-blue-700">
            Real-World Connection
          </p>

          <h3 className="mt-1 text-lg font-bold text-blue-950">
            🌍 {realWorld.title || "Algebra in Context"}
          </h3>

          {realWorld.description && (
            <p className="mt-3 leading-7 text-slate-700">
              {realWorld.description}
            </p>
          )}

          {realWorld.scenario && (
            <div className="mt-5 rounded-xl bg-white p-5">
              <p className="text-sm font-bold text-slate-900">
                Scenario
              </p>

              <p className="mt-2 leading-7 text-slate-700">
                {realWorld.scenario}
              </p>
            </div>
          )}

          {realWorld.model && (
            <div className="mt-5 rounded-xl border border-blue-200 bg-white p-5">
              <p className="text-sm font-bold text-blue-900">
                Mathematical Model
              </p>

              <p className="mt-2 text-lg font-semibold text-slate-900">
                {realWorld.model}
              </p>
            </div>
          )}

          {realWorld.prompts?.length > 0 && (
            <div className="mt-5">
              <h4 className="font-bold text-slate-900">
                Think and Solve
              </h4>

              <ol className="mt-3 space-y-3">
                {realWorld.prompts.map((prompt, index) => (
                  <li
                    key={`${prompt}-${index}`}
                    className="flex gap-3 rounded-xl bg-white p-4"
                  >
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-blue-100 text-sm font-bold text-blue-800">
                      {index + 1}
                    </span>

                    <span className="leading-7 text-slate-700">
                      {prompt}
                    </span>
                  </li>
                ))}
              </ol>
            </div>
          )}

          {realWorld.solution?.length > 0 && (
            <details className="mt-5 rounded-xl bg-white p-5">
              <summary className="cursor-pointer font-bold text-slate-900">
                View Solution
              </summary>

              <ol className="mt-4 space-y-2">
                {realWorld.solution.map((step, index) => (
                  <li
                    key={`${step}-${index}`}
                    className="leading-7 text-slate-700"
                  >
                    <span className="font-bold text-blue-700">
                      {index + 1}.
                    </span>{" "}
                    {step}
                  </li>
                ))}
              </ol>

              {realWorld.answer && (
                <p className="mt-4 rounded-lg bg-blue-50 p-3 font-bold text-blue-900">
                  Answer: {realWorld.answer}
                </p>
              )}
            </details>
          )}

          {realWorld.connection && (
            <div className="mt-5 rounded-xl border-l-4 border-blue-500 bg-white p-5">
              <p className="text-sm font-bold text-blue-900">
                Why This Matters
              </p>

              <p className="mt-2 leading-7 text-slate-700">
                {realWorld.connection}
              </p>
            </div>
          )}
        </div>
      )}

      {technology && (
        <div className="mt-6 rounded-2xl border border-purple-200 bg-purple-50 p-6">
          <p className="text-xs font-bold uppercase tracking-wider text-purple-700">
            Technology Activity
          </p>

          <h3 className="mt-1 text-lg font-bold text-purple-950">
            💻 {technology.title || "Digital Exploration"}
          </h3>

          {technology.tool && (
            <p className="mt-3 text-sm font-semibold text-purple-900">
              Tool: {technology.tool}
            </p>
          )}

          {technology.objective && (
            <p className="mt-3 leading-7 text-slate-700">
              {technology.objective}
            </p>
          )}

          {technology.instructions?.length > 0 && (
            <div className="mt-5">
              <h4 className="font-bold text-slate-900">
                Instructions
              </h4>

              <ol className="mt-3 space-y-3">
                {technology.instructions.map((instruction, index) => (
                  <li
                    key={`${instruction}-${index}`}
                    className="flex gap-3 rounded-xl bg-white p-4"
                  >
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-purple-100 text-sm font-bold text-purple-800">
                      {index + 1}
                    </span>

                    <span className="leading-7 text-slate-700">
                      {instruction}
                    </span>
                  </li>
                ))}
              </ol>
            </div>
          )}

          {technology.reflectionQuestions?.length > 0 && (
            <div className="mt-5 rounded-xl bg-white p-5">
              <h4 className="font-bold text-slate-900">
                Reflection Questions
              </h4>

              <ul className="mt-3 space-y-2">
                {technology.reflectionQuestions.map(
                  (question, index) => (
                    <li
                      key={`${question}-${index}`}
                      className="leading-7 text-slate-700"
                    >
                      • {question}
                    </li>
                  )
                )}
              </ul>
            </div>
          )}

          {technology.extension && (
            <div className="mt-5 rounded-xl bg-white p-5">
              <p className="font-bold text-purple-900">
                Extension Challenge
              </p>

              <p className="mt-2 leading-7 text-slate-700">
                {technology.extension}
              </p>
            </div>
          )}

          {technology.teacherTip && (
            <p className="mt-5 text-sm italic leading-6 text-slate-600">
              Teacher Tip: {technology.teacherTip}
            </p>
          )}
        </div>
      )}

      {pythonLab && (
        <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-6">
          <p className="text-xs font-bold uppercase tracking-wider text-amber-700">
            Python Lab
          </p>

          <h3 className="mt-1 text-lg font-bold text-amber-950">
            🐍 {pythonLab.title || "Algebra with Python"}
          </h3>

          {pythonLab.objective && (
            <p className="mt-3 leading-7 text-slate-700">
              {pythonLab.objective}
            </p>
          )}

          {pythonLab.code && (
            <pre className="mt-5 overflow-x-auto rounded-xl bg-slate-900 p-5 text-sm text-green-300">
              <code>{pythonLab.code}</code>
            </pre>
          )}

          {pythonLab.expectedOutput && (
            <div className="mt-5">
              <p className="font-bold text-slate-900">
                Expected Output
              </p>

              <pre className="mt-3 overflow-x-auto rounded-xl bg-slate-950 p-5 text-sm text-slate-100">
                <code>{pythonLab.expectedOutput}</code>
              </pre>
            </div>
          )}

          {pythonLab.investigation?.length > 0 && (
            <div className="mt-5">
              <h4 className="font-bold text-slate-900">
                Investigation
              </h4>

              <ol className="mt-3 space-y-3">
                {pythonLab.investigation.map((item, index) => (
                  <li
                    key={`${item}-${index}`}
                    className="flex gap-3 rounded-xl bg-white p-4"
                  >
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-amber-100 text-sm font-bold text-amber-800">
                      {index + 1}
                    </span>

                    <span className="leading-7 text-slate-700">
                      {item}
                    </span>
                  </li>
                ))}
              </ol>
            </div>
          )}

          {pythonLab.reflectionQuestions?.length > 0 && (
            <div className="mt-5 rounded-xl bg-white p-5">
              <h4 className="font-bold text-slate-900">
                Reflection Questions
              </h4>

              <ul className="mt-3 space-y-2">
                {pythonLab.reflectionQuestions.map(
                  (question, index) => (
                    <li
                      key={`${question}-${index}`}
                      className="leading-7 text-slate-700"
                    >
                      • {question}
                    </li>
                  )
                )}
              </ul>
            </div>
          )}

          {pythonLab.challenge && (
            <div className="mt-5 rounded-xl border border-amber-300 bg-white p-5">
              <p className="font-bold text-amber-900">
                Coding Challenge
              </p>

              <p className="mt-2 leading-7 text-slate-700">
                {pythonLab.challenge}
              </p>
            </div>
          )}
        </div>
      )}
    </section>
  );
}