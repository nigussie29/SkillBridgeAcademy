export default function ApplySection({ apply }) {
  if (!apply || typeof apply !== "object") {
    return null;
  }

  const technology = apply.technologyActivity;
  const pythonLab = apply.pythonLab;
  const realWorld = apply.realWorldConnection;

  return (
    <section className="mt-8 rounded-3xl bg-white p-8 shadow-sm">
      <div>
        <p className="text-sm font-bold uppercase tracking-wider text-indigo-700">
          {apply.eyebrow || "Apply Your Learning"}
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

      {/* Real-world connection */}
      {realWorld && (
        <div className="mt-8 rounded-2xl border border-blue-200 bg-blue-50 p-6">
          <h3 className="text-lg font-bold text-blue-900">
            🌍 Real-World Connection
          </h3>

          {typeof realWorld === "string" ? (
            <p className="mt-3 leading-7 text-slate-700">
              {realWorld}
            </p>
          ) : (
            <div className="mt-3 space-y-3 text-slate-700">
              {realWorld.title && (
                <h4 className="font-bold text-slate-900">
                  {realWorld.title}
                </h4>
              )}

              {realWorld.description && (
                <p className="leading-7">
                  {realWorld.description}
                </p>
              )}

              {realWorld.scenario && (
                <p className="leading-7">
                  {realWorld.scenario}
                </p>
              )}
            </div>
          )}
        </div>
      )}

      {/* Technology activity */}
      {technology && (
        <div className="mt-6 rounded-2xl border border-purple-200 bg-purple-50 p-6">
          <h3 className="text-lg font-bold text-purple-900">
            💻 Technology Activity
          </h3>

          {typeof technology === "string" ? (
            <p className="mt-3 leading-7 text-slate-700">
              {technology}
            </p>
          ) : (
            <div className="mt-4 space-y-4">
              {technology.title && (
                <h4 className="font-bold text-slate-900">
                  {technology.title}
                </h4>
              )}

              {technology.scenario && (
                <p className="leading-7 text-slate-700">
                  {technology.scenario}
                </p>
              )}

              {Array.isArray(technology.prompts) &&
                technology.prompts.length > 0 && (
                  <ol className="space-y-3">
                    {technology.prompts.map((prompt, index) => (
                      <li
                        key={`${prompt}-${index}`}
                        className="flex items-start gap-3 rounded-xl bg-white p-4"
                      >
                        <span className="flex h-7 w-7 flex-none items-center justify-center rounded-full bg-purple-100 text-sm font-bold text-purple-700">
                          {index + 1}
                        </span>

                        <span className="leading-7 text-slate-700">
                          {prompt}
                        </span>
                      </li>
                    ))}
                  </ol>
                )}

              {(technology.sampleExpression ||
                technology.sampleResult) && (
                <div className="rounded-xl bg-white p-4">
                  {technology.sampleExpression && (
                    <p className="font-mono font-semibold text-slate-800">
                      {technology.sampleExpression}
                    </p>
                  )}

                  {technology.sampleResult && (
                    <p className="mt-2 text-slate-700">
                      Result: {technology.sampleResult}
                    </p>
                  )}
                </div>
              )}
            </div>
          )}
        </div>
      )}

      {/* Python lab */}
      {pythonLab && (
        <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-6">
          <h3 className="text-lg font-bold text-amber-900">
            🐍 Python Lab
          </h3>

          {typeof pythonLab === "string" ? (
            <pre className="mt-4 overflow-x-auto rounded-xl bg-slate-900 p-5 text-sm text-green-300">
              <code>{pythonLab}</code>
            </pre>
          ) : (
            <div className="mt-4 space-y-4">
              {pythonLab.title && (
                <h4 className="font-bold text-slate-900">
                  {pythonLab.title}
                </h4>
              )}

              {pythonLab.instructions && (
                <p className="leading-7 text-slate-700">
                  {pythonLab.instructions}
                </p>
              )}

              {pythonLab.code && (
                <pre className="overflow-x-auto rounded-xl bg-slate-900 p-5 text-sm text-green-300">
                  <code>{pythonLab.code}</code>
                </pre>
              )}

              {pythonLab.expectedOutput && (
                <div className="rounded-xl bg-white p-4">
                  <p className="font-semibold text-slate-900">
                    Expected Output
                  </p>

                  <p className="mt-2 font-mono text-slate-700">
                    {pythonLab.expectedOutput}
                  </p>
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </section>
  );
}