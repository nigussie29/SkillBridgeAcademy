import React from "react";

function TableCard({ table, role = "dimension", className = "" }) {
  const isFact = role === "fact";

  return (
    <article
      className={`relative z-10 overflow-hidden rounded-2xl border-2 bg-white shadow-lg ${
        isFact ? "border-amber-400" : "border-emerald-300"
      } ${className}`}
    >
      <div
        className={`px-4 py-3 ${
          isFact
            ? "bg-amber-500 text-slate-950"
            : "bg-emerald-800 text-white"
        }`}
      >
        <p className="text-xs font-black uppercase tracking-[0.16em] opacity-80">
          {isFact ? "Fact table · many side" : "Dimension · one side"}
        </p>
        <h4 className="mt-1 break-words text-lg font-black leading-tight">
          {table.name}
        </h4>
      </div>

      <div className="divide-y divide-slate-100 px-4 py-2 text-[15px] leading-6">
        {table.fields.map((field) => (
          <div key={field.name} className="flex items-start gap-2 py-2">
            {field.key && (
              <span
                className={`mt-0.5 shrink-0 rounded-md px-1.5 py-0.5 text-[11px] font-black ${
                  field.key === "PK"
                    ? "bg-indigo-100 text-indigo-800"
                    : "bg-amber-100 text-amber-800"
                }`}
              >
                {field.key}
              </span>
            )}
            <span className={field.key ? "font-bold text-slate-900" : "text-slate-600"}>
              {field.name}
            </span>
          </div>
        ))}
      </div>
    </article>
  );
}

function RelationshipBadge({ className = "" }) {
  return (
    <div
      aria-hidden="true"
      className={`z-20 hidden items-center gap-1 rounded-full border border-blue-200 bg-white px-2 py-1 text-xs font-black text-blue-800 shadow-sm lg:flex ${className}`}
    >
      <span>1</span>
      <span aria-hidden="true">→</span>
      <span>*</span>
    </div>
  );
}

export default function StarSchemaDiagram({ model }) {
  if (!model?.fact || !Array.isArray(model?.dimensions)) {
    return null;
  }

  const dimensions = model.dimensions.slice(0, 5);

  return (
    <section className="rounded-3xl border border-slate-200 bg-gradient-to-br from-slate-50 via-white to-blue-50 p-5 shadow-sm sm:p-7 lg:p-8">
      <div className="max-w-4xl">
        <p className="text-xs font-black uppercase tracking-[0.18em] text-emerald-700">
          Semantic-model blueprint
        </p>
        <h3 className="mt-2 text-2xl font-black tracking-tight text-slate-950 sm:text-3xl">
          {model.title || "Power BI Star Schema"}
        </h3>
        {model.description && (
          <p className="mt-3 text-lg leading-8 text-slate-700">
            {model.description}
          </p>
        )}
      </div>

      <div
        className="relative mx-auto mt-8 max-w-6xl lg:min-h-[820px]"
        role="img"
        aria-label={model.accessibleDescription || model.description}
      >
        <svg
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 hidden h-full w-full lg:block"
          viewBox="0 0 1000 820"
          preserveAspectRatio="none"
        >
          <defs>
            <marker id="star-schema-arrow" markerWidth="9" markerHeight="9" refX="8" refY="3" orient="auto" markerUnits="strokeWidth">
              <path d="M0,0 L0,6 L9,3 z" fill="#2563eb" />
            </marker>
          </defs>
          <path d="M250 145 C360 145 390 315 455 350" fill="none" stroke="#2563eb" strokeWidth="4" markerEnd="url(#star-schema-arrow)" />
          <path d="M750 145 C640 145 610 315 545 350" fill="none" stroke="#2563eb" strokeWidth="4" markerEnd="url(#star-schema-arrow)" />
          <path d="M245 660 C350 650 390 515 455 470" fill="none" stroke="#2563eb" strokeWidth="4" markerEnd="url(#star-schema-arrow)" />
          <path d="M755 660 C650 650 610 515 545 470" fill="none" stroke="#2563eb" strokeWidth="4" markerEnd="url(#star-schema-arrow)" />
          <path d="M500 210 L500 315" fill="none" stroke="#2563eb" strokeWidth="4" markerEnd="url(#star-schema-arrow)" />
        </svg>

        <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_minmax(280px,1.05fr)_minmax(0,1fr)] lg:grid-rows-[auto_auto_auto] lg:items-center lg:gap-x-16 lg:gap-y-10">
          {dimensions[0] && <TableCard table={dimensions[0]} className="lg:col-start-1 lg:row-start-1" />}
          {dimensions[1] && <TableCard table={dimensions[1]} className="lg:col-start-3 lg:row-start-1" />}
          {dimensions[2] && <TableCard table={dimensions[2]} className="lg:col-start-2 lg:row-start-1" />}

          <TableCard table={model.fact} role="fact" className="lg:col-start-2 lg:row-start-2" />

          {dimensions[3] && <TableCard table={dimensions[3]} className="lg:col-start-1 lg:row-start-3" />}
          {dimensions[4] && <TableCard table={dimensions[4]} className="lg:col-start-3 lg:row-start-3" />}
        </div>

        <RelationshipBadge className="absolute left-[31%] top-[22%]" />
        <RelationshipBadge className="absolute right-[31%] top-[22%]" />
        <RelationshipBadge className="absolute left-1/2 top-[29%] -translate-x-1/2" />
        <RelationshipBadge className="absolute bottom-[22%] left-[31%]" />
        <RelationshipBadge className="absolute bottom-[22%] right-[31%]" />
      </div>

      <div className="mt-7 grid gap-4 md:grid-cols-3">
        <div className="rounded-2xl border border-indigo-200 bg-indigo-50 p-4">
          <p className="text-sm font-black uppercase tracking-wide text-indigo-800">Relationship</p>
          <p className="mt-2 leading-7 text-indigo-950"><strong>1 → *</strong> means one unique dimension row can describe many fact rows.</p>
        </div>
        <div className="rounded-2xl border border-blue-200 bg-blue-50 p-4">
          <p className="text-sm font-black uppercase tracking-wide text-blue-800">Filter direction</p>
          <p className="mt-2 leading-7 text-blue-950">Filters travel from each dimension into the fact table through a single active path.</p>
        </div>
        <div className="rounded-2xl border border-amber-200 bg-amber-50 p-4">
          <p className="text-sm font-black uppercase tracking-wide text-amber-800">Fact grain</p>
          <p className="mt-2 leading-7 text-amber-950"><strong>{model.grain}</strong></p>
        </div>
      </div>

      {model.note && (
        <p className="mt-5 rounded-2xl border border-slate-200 bg-white p-4 leading-7 text-slate-700">
          <strong>Modeling note:</strong> {model.note}
        </p>
      )}
    </section>
  );
}
