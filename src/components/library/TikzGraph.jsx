export default function TikzGraph({ graph }) {
  if (!graph?.src) return null;

  return (
    <figure className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
      <div className="border-b border-slate-200 bg-gradient-to-r from-violet-50 via-blue-50 to-emerald-50 px-6 py-5">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-violet-700">
          TikZ / PGFPlots visual
        </p>

        <h3 className="mt-2 text-2xl font-black text-slate-950">
          {graph.title || "Mathematical Graph"}
        </h3>

        {graph.equation && (
          <div className="mt-3 inline-flex rounded-xl border border-violet-200 bg-white px-4 py-2 font-mono font-bold text-violet-950">
            {graph.equation}
          </div>
        )}
      </div>

      <div className="bg-white p-4 sm:p-6">
        <img
          src={graph.src}
          alt={graph.alt || graph.title || "Mathematical graph"}
          className="mx-auto h-auto w-full max-w-4xl"
          loading="lazy"
        />
      </div>

      {(graph.caption || graph.sourceNote) && (
        <figcaption className="border-t border-slate-200 bg-slate-50 px-6 py-5">
          {graph.caption && (
            <p className="leading-7 text-slate-700">
              {graph.caption}
            </p>
          )}

          {graph.sourceNote && (
            <p className="mt-2 text-xs font-semibold uppercase tracking-wide text-slate-500">
              {graph.sourceNote}
            </p>
          )}
        </figcaption>
      )}
    </figure>
  );
}
