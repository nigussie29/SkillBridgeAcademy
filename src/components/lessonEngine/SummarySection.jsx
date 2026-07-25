export default function SummarySection({ summary }) {
  if (!summary) return null;

  return (
    <section className="mt-8 rounded-3xl bg-slate-50 p-8 shadow-sm">
      <p className="text-sm font-bold uppercase tracking-wider text-slate-600">
        Lesson Summary
      </p>

      <h2 className="mt-2 text-2xl font-extrabold text-slate-900">
        Key Takeaways
      </h2>

      <div className="mt-6 rounded-2xl bg-white p-6 border border-slate-200">
        <p className="leading-8 text-slate-700">
          {summary}
        </p>
      </div>
    </section>
  );
}