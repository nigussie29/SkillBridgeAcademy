export default function LessonTable({
  table,
  eyebrow = "Lesson reference",
}) {
  if (!table) return null;

  const columns = Array.isArray(table.columns)
    ? table.columns
    : [];

  const rows = Array.isArray(table.rows)
    ? table.rows
    : [];

  if (columns.length === 0 || rows.length === 0) {
    return null;
  }

  return (
    <section className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
      <div className="border-b border-slate-200 bg-gradient-to-r from-blue-50 via-indigo-50 to-violet-50 px-6 py-6 md:px-8">
        <p className="text-sm font-bold uppercase tracking-widest text-blue-700">
          {eyebrow}
        </p>

        <h2 className="mt-2 text-2xl font-black text-slate-950 md:text-3xl">
          {table.title || "Reference Table"}
        </h2>

        {table.description && (
          <p className="mt-3 max-w-4xl leading-7 text-slate-700">
            {table.description}
          </p>
        )}
      </div>

      <div className="overflow-x-auto p-4 md:p-6">
        <table className="min-w-full border-separate border-spacing-0 overflow-hidden rounded-2xl border border-slate-200 text-left">
          <thead>
            <tr className="bg-slate-900 text-white">
              {columns.map((column) => (
                <th
                  key={column.key}
                  scope="col"
                  className="border-b border-slate-700 px-4 py-3 text-sm font-extrabold uppercase tracking-wide"
                >
                  {column.label}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {rows.map((row, rowIndex) => (
              <tr
                key={row.id || rowIndex}
                className={
                  rowIndex % 2 === 0
                    ? "bg-white"
                    : "bg-slate-50"
                }
              >
                {columns.map((column) => (
                  <td
                    key={`${rowIndex}-${column.key}`}
                    className="border-b border-slate-200 px-4 py-4 align-top leading-7 text-slate-700 last:border-r-0"
                  >
                    {row[column.key] ?? ""}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
