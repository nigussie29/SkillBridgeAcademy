export default function ApplySection({ apply }) {
  if (!apply || typeof apply !== "object") {
    return null;
  }

  return (
    <section className="mt-8 rounded-3xl bg-white p-8 shadow-sm">
      <div>
        <p className="text-sm font-bold uppercase tracking-wider text-indigo-700">
          Apply Your Learning
        </p>

        <h2 className="mt-2 text-2xl font-extrabold text-slate-900">
          {apply.title || "Apply Your Knowledge"}
        </h2>

        {apply.description && (
          <p className="mt-3 leading-7 text-slate-600">
            {apply.description}
          </p>
        )}
      </div>

      {apply.realWorldConnection && (
        <div className="mt-8 rounded-2xl border border-blue-200 bg-blue-50 p-6">
          <h3 className="text-lg font-bold text-blue-900">
            🌍 Real-World Connection
          </h3>

          <p className="mt-3 leading-7 text-slate-700">
            {apply.realWorldConnection}
          </p>
        </div>
      )}

      {apply.technologyActivity && (
        <div className="mt-6 rounded-2xl border border-purple-200 bg-purple-50 p-6">
          <h3 className="text-lg font-bold text-purple-900">
            💻 Technology Activity
          </h3>

          <p className="mt-3 leading-7 text-slate-700">
            {apply.technologyActivity}
          </p>
        </div>
      )}

      {apply.pythonLab && (
        <div className="mt-6 rounded-2xl border border-yellow-200 bg-yellow-50 p-6">
          <h3 className="text-lg font-bold text-yellow-900">
            🐍 Python Lab
          </h3>

          <pre className="mt-4 overflow-x-auto rounded-xl bg-slate-900 p-5 text-sm text-green-300">
            <code>{apply.pythonLab}</code>
          </pre>
        </div>
      )}
    </section>
  );
}