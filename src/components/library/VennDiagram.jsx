export default function VennDiagram({ diagram }) {
  if (!diagram) return null;

  const {
    title,
    sampleSpace,
    setA,
    setB,
    regions,
    derivedSets,
    purpose,
  } = diagram;

  const formatSet = (items = []) => `{${items.join(", ")}}`;

  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm md:p-8">
      <p className="text-sm font-bold uppercase tracking-widest text-blue-600">
        Visual Representation
      </p>

      <h2 className="mt-3 text-2xl font-extrabold text-slate-900 md:text-3xl">
        {title}
      </h2>

      {purpose && (
        <p className="mt-4 max-w-3xl leading-7 text-slate-600">
          {purpose}
        </p>
      )}

      <div className="mt-8 rounded-3xl border border-slate-200 bg-slate-50 p-5 md:p-6">
        <p className="font-bold text-slate-800">
          {sampleSpace?.label} = {formatSet(sampleSpace?.outcomes)}
        </p>

        {/* Venn diagram */}
        <div className="mt-5 overflow-hidden rounded-3xl border border-slate-200 bg-white">
          <svg
            viewBox="0 0 760 380"
            className="h-auto w-full"
            role="img"
            aria-label="Venn diagram showing events A and B"
          >
            {/* Sample-space boundary */}
            <rect
              x="20"
              y="20"
              width="720"
              height="340"
              rx="22"
              fill="white"
              stroke="#cbd5e1"
              strokeWidth="2"
            />

            {/* Labels */}
          {/* Define the shared intersection region */}
<defs>
  <clipPath id="venn-b-clip">
    <circle cx="445" cy="205" r="130" />
  </clipPath>
</defs>
<text
  x="285"
  y="68"
  textAnchor="middle"
  fontSize="22"
  fontWeight="700"
  fill="#2563eb"
>
  A
</text>

<text
  x="475"
  y="68"
  textAnchor="middle"
  fontSize="22"
  fontWeight="700"
  fill="#ea580c"
>
  B
</text>
{/* Circle A fill */}
<circle
  cx="315"
  cy="205"
  r="130"
  fill="#dbeafe"
/>

{/* Circle B fill */}
<circle
  cx="445"
  cy="205"
  r="130"
  fill="#ffedd5"
/>

{/* A ∩ B — separate common region */}
<circle
  cx="315"
  cy="205"
  r="130"
  fill="#ddd6fe"
  clipPath="url(#venn-b-clip)"
/>

{/* Redraw circle borders so they stay clear */}
<circle
  cx="315"
  cy="205"
  r="130"
  fill="none"
  stroke="#3b82f6"
  strokeWidth="3"
/>

<circle
  cx="445"
  cy="205"
  r="130"
  fill="none"
  stroke="#f97316"
  strokeWidth="3"
/>

{/* Outside both */}
<text
  x="85"
  y="135"
  textAnchor="middle"
  fontSize="22"
  fontWeight="700"
  fill="#0f172a"
>
  {regions?.outsideBoth?.[0]}
</text>

<text
  x="85"
  y="265"
  textAnchor="middle"
  fontSize="22"
  fontWeight="700"
  fill="#0f172a"
>
  {regions?.outsideBoth?.[1]}
</text>

{/* Only A */}
<text
  x="255"
  y="212"
  textAnchor="middle"
  fontSize="24"
  fontWeight="700"
  fill="#0f172a"
>
  {regions?.onlyA?.join(", ")}
</text>

{/* Intersection values */}
<text
  x="380"
  y="175"
  textAnchor="middle"
  fontSize="24"
  fontWeight="700"
  fill="#0f172a"
>
  {regions?.intersection?.[0]}
</text>

<text
  x="380"
  y="225"
  textAnchor="middle"
  fontSize="24"
  fontWeight="700"
  fill="#0f172a"
>
  {regions?.intersection?.[1]}
</text>

{/* Intersection label */}
<text
  x="380"
  y="275"
  textAnchor="middle"
  fontSize="17"
  fontWeight="700"
  fill="#6d28d9"
>
  A ∩ B
</text>

{/* Only B */}
<text
  x="510"
  y="212"
  textAnchor="middle"
  fontSize="24"
  fontWeight="700"
  fill="#0f172a"
>
  {regions?.onlyB?.join(", ")}
</text>
          </svg>
        </div>

        {/* Explanation cards */}
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-blue-100 bg-blue-50 p-5">
            <p className="text-sm font-bold uppercase tracking-wide text-blue-700">
              Event A
            </p>

            <p className="mt-2 font-bold text-slate-900">
              {setA?.label}
            </p>

            <p className="mt-1 text-slate-700">
              {formatSet(setA?.outcomes)}
            </p>
          </div>

          <div className="rounded-2xl border border-orange-100 bg-orange-50 p-5">
            <p className="text-sm font-bold uppercase tracking-wide text-orange-700">
              Event B
            </p>

            <p className="mt-2 font-bold text-slate-900">
              {setB?.label}
            </p>

            <p className="mt-1 text-slate-700">
              {formatSet(setB?.outcomes)}
            </p>
          </div>

          <div className="rounded-2xl border border-emerald-100 bg-emerald-50 p-5">
            <p className="text-sm font-bold uppercase tracking-wide text-emerald-700">
              Derived Sets
            </p>

            <div className="mt-3 space-y-2 text-slate-800">
              <p>
                <strong>A ∪ B:</strong>{" "}
                {formatSet(derivedSets?.union)}
              </p>

              <p>
                <strong>A ∩ B:</strong>{" "}
                {formatSet(derivedSets?.intersection)}
              </p>

              <p>
                <strong>Aᶜ:</strong>{" "}
                {formatSet(derivedSets?.complementA)}
              </p>

              {derivedSets?.complementB && (
                <p>
                  <strong>Bᶜ:</strong>{" "}
                  {formatSet(derivedSets.complementB)}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Interpretation */}
        <div className="mt-6 rounded-2xl border border-violet-200 bg-violet-50 p-5">
          <p className="text-sm font-bold uppercase tracking-wide text-violet-700">
            Read the Diagram
          </p>

          <div className="mt-3 space-y-2 leading-7 text-slate-700">
            <p>
              <strong>2</strong> belongs only to event A.
            </p>

            <p>
              <strong>4 and 6</strong> belong to both A and B, so they
              form the intersection <strong>A ∩ B</strong>.
            </p>

            <p>
              <strong>5</strong> belongs only to event B.
            </p>

            <p>
              <strong>1 and 3</strong> are outside both events but still
              belong to the sample space S.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}