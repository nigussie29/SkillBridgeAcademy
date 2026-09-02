import React from "react";

function formatValue(value) {
  if (typeof value !== "number") {
    return value;
  }

  return Number.isInteger(value)
    ? value
    : Number(value.toFixed(2));
}

export default function RepresentationTableGraph({
  model,
}) {
  if (!model) {
    return null;
  }

  const {
    title =
      "Table & Graph — the same rule, two more views",

    description =
      "The table and graph represent the same input-output relationship.",

    equation,

    columns = [],

    rows = [],

    xKey = "x",
    yKey = "y",

    xLabel = "input",
    yLabel = "output",

    highlightPoint = null,
  } = model;

  if (!rows.length) {
    return null;
  }

  const graphPoints = rows
    .map((row) => ({
      x: Number(row[xKey]),
      y: Number(row[yKey]),
    }))
    .filter(
      (point) =>
        Number.isFinite(point.x) &&
        Number.isFinite(point.y)
    );

  if (!graphPoints.length) {
    return null;
  }

  const xValues = graphPoints.map(
    (point) => point.x
  );

  const yValues = graphPoints.map(
    (point) => point.y
  );

  const minX = Math.min(...xValues);
  const maxX = Math.max(...xValues);

  const minY = Math.min(...yValues);
  const maxY = Math.max(...yValues);

  const xRange =
    maxX - minX || 1;

  const yRange =
    maxY - minY || 1;

  const width = 700;
  const height = 420;

  const padding = {
    top: 30,
    right: 30,
    bottom: 60,
    left: 75,
  };

  function scaleX(x) {
    return (
      padding.left +
      ((x - minX) / xRange) *
        (width -
          padding.left -
          padding.right)
    );
  }

  function scaleY(y) {
    return (
      height -
      padding.bottom -
      ((y - minY) / yRange) *
        (height -
          padding.top -
          padding.bottom)
    );
  }

  const pathData = graphPoints
    .map((point, index) => {
      const command =
        index === 0 ? "M" : "L";

      return `${command} ${scaleX(
        point.x
      )} ${scaleY(point.y)}`;
    })
    .join(" ");

  const isHighlighted = (row) => {
    if (!highlightPoint) {
      return false;
    }

    return (
      Number(row[xKey]) ===
        Number(highlightPoint.x) &&
      Number(row[yKey]) ===
        Number(highlightPoint.y)
    );
  };

  const highlightedGraphPoint =
    highlightPoint
      ? graphPoints.find(
          (point) =>
            point.x ===
              Number(
                highlightPoint.x
              ) &&
            point.y ===
              Number(
                highlightPoint.y
              )
        )
      : null;

  return (
    <section className="mt-8 rounded-3xl border border-slate-200 bg-slate-50 p-5 sm:p-6 lg:p-8">
      <div className="max-w-3xl">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-indigo-700">
          One Relationship, Many Representations
        </p>

        <h3 className="mt-2 text-2xl font-extrabold tracking-tight text-slate-950 sm:text-3xl">
          {title}
        </h3>

        <p className="mt-3 leading-7 text-slate-600">
          {description}
        </p>

        {equation && (
          <div className="mt-5 inline-flex rounded-xl border border-indigo-200 bg-indigo-50 px-4 py-2">
            <code className="font-semibold text-indigo-950">
              {equation}
            </code>
          </div>
        )}
      </div>

      <div className="mt-8 grid gap-5 lg:grid-cols-[minmax(0,0.7fr)_minmax(0,1.3fr)]">
        {/* TABLE */}
        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="border-b border-slate-100 px-5 py-5">
            <p className="text-xs font-bold uppercase tracking-wider text-indigo-700">
              Table
            </p>

            <h4 className="mt-1 text-xl font-bold text-slate-950">
              Selected input-output values
            </h4>

            <p className="mt-1 text-sm leading-6 text-slate-500">
              Each row shows one input
              moving through the same
              relationship.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[420px] border-collapse text-left">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50">
                  {columns.map(
                    (column) => (
                      <th
                        key={column.key}
                        className="px-5 py-3 text-xs font-bold uppercase tracking-wider text-slate-500"
                      >
                        {column.label}
                      </th>
                    )
                  )}
                </tr>
              </thead>

              <tbody>
                {rows.map(
                  (row, rowIndex) => {
                    const highlighted =
                      isHighlighted(
                        row
                      );

                    return (
                      <tr
                        key={`${row[xKey]}-${row[yKey]}-${rowIndex}`}
                        className={`border-b border-slate-100 last:border-b-0 ${
                          highlighted
                            ? "bg-amber-50"
                            : "bg-white"
                        }`}
                      >
                        {columns.map(
                          (
                            column,
                            columnIndex
                          ) => (
                            <td
                              key={
                                column.key
                              }
                              className={`px-5 py-4 text-sm ${
                                highlighted
                                  ? "font-bold text-amber-800"
                                  : "text-slate-700"
                              }`}
                            >
                              {formatValue(
                                row[
                                  column
                                    .key
                                ]
                              )}

                              {highlighted &&
                                columnIndex ===
                                  0 && (
                                  <span className="ml-2 rounded-full bg-amber-200 px-2 py-1 text-xs font-bold text-amber-900">
                                    (
                                    {formatValue(
                                      row[
                                        xKey
                                      ]
                                    )}
                                    ,{" "}
                                    {formatValue(
                                      row[
                                        yKey
                                      ]
                                    )}
                                    )
                                  </span>
                                )}
                            </td>
                          )
                        )}
                      </tr>
                    );
                  }
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* GRAPH */}
        {/* GRAPH */}
<div className="self-start overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="border-b border-slate-100 px-5 py-5">
            <p className="text-xs font-bold uppercase tracking-wider text-indigo-700">
              Graph
            </p>

            <h4 className="mt-1 text-xl font-bold text-slate-950">
              {yLabel} plotted over{" "}
              {xLabel}
            </h4>

            <p className="mt-1 text-sm leading-6 text-slate-500">
              Every plotted point matches
              an input-output row in the
              table.
            </p>
          </div>

          <div className="p-4 sm:p-5">
            <div className="w-full overflow-hidden rounded-xl bg-[#102A27] p-3">
              <svg
                viewBox={`0 0 ${width} ${height}`}
                role="img"
                aria-label={`${equation ?? "Function"} graph`}
                className="h-auto w-full"
              >
                
               
{/* horizontal grid + y-axis values */}
{[0, 1, 2, 3, 4].map((step) => {
  const y =
    padding.top +
    (step / 4) *
      (height -
        padding.top -
        padding.bottom);

  const tickValue =
    maxY - (step / 4) * yRange;

  return (
    <g key={`grid-y-${step}`}>
      <line
        x1={padding.left}
        y1={y}
        x2={width - padding.right}
        y2={y}
        stroke="#36534F"
        strokeWidth="1"
      />

      <text
        x={padding.left - 12}
        y={y + 5}
        textAnchor="end"
        fontSize="14"
        fontWeight="600"
        fill="#D7E7E4"
      >
        {formatValue(tickValue)}
      </text>
    </g>
  );
})}

                {/* x axis */}
                <line
                  x1={padding.left}
                  y1={
                    height -
                    padding.bottom
                  }
                  x2={
                    width -
                    padding.right
                  }
                  y2={
                    height -
                    padding.bottom
                  }
                 stroke="#A7C7C2"
                  strokeWidth="1.5"
                />

                {/* y axis */}
                <line
                  x1={padding.left}
                  y1={padding.top}
                  x2={padding.left}
                  y2={
                    height -
                    padding.bottom
                  }
                  stroke="#A7C7C2"
                  strokeWidth="1.5"
                />

                {/* area */}
                <path
                  d={`${pathData} L ${scaleX(
                    graphPoints[
                      graphPoints.length -
                        1
                    ].x
                  )} ${
                    height -
                    padding.bottom
                  } L ${scaleX(
                    graphPoints[0].x
                  )} ${
                    height -
                    padding.bottom
                  } Z`}
                  fill="#163B36"
opacity="0.55"
                />

                {/* function line */}
                <path
                  d={pathData}
                  fill="none"
                  stroke="#5EEAD4"
strokeWidth="5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />

                {/* x labels */}
                {graphPoints.map(
                  (point) => (
                    <text
                      key={`x-${point.x}`}
                      x={scaleX(
                        point.x
                      )}
                      y={
                        height -
                        padding.bottom +
                        25
                      }
                      textAnchor="middle"
                      fontSize="13"
                      fill="#D7E7E4"
                    >
                      {formatValue(
                        point.x
                      )}
                    </text>
                  )
                )}

                {/* points */}
                {graphPoints.map(
                  (point) => {
                    const highlighted =
                      highlightedGraphPoint &&
                      point.x ===
                        highlightedGraphPoint.x &&
                      point.y ===
                        highlightedGraphPoint.y;

                    return (
                      <circle
                        key={`${point.x}-${point.y}`}
                        cx={scaleX(
                          point.x
                        )}
                        cy={scaleY(
                          point.y
                        )}
                        r={
                          highlighted
                            ? 8
                            : 6
                        }
                        fill={
                          highlighted
                            ? "#fbbf24"
                            : "#ffffff"
                        }
                        stroke={
  highlighted
    ? "#a16207"
    : "#5EEAD4"
}
                        strokeWidth="3"
                      />
                    );
                  }
                )}

                {/* highlighted label */}
                {highlightedGraphPoint && (
                  <g>
                    <rect
                      x={
                        scaleX(
                          highlightedGraphPoint.x
                        ) - 42
                      }
                      y={
                        scaleY(
                          highlightedGraphPoint.y
                        ) - 42
                      }
                      width="84"
                      height="26"
                      rx="6"
                      fill="#0f172a"
                    />

                    <text
                      x={scaleX(
                        highlightedGraphPoint.x
                      )}
                      y={
                        scaleY(
                          highlightedGraphPoint.y
                        ) - 24
                      }
                      textAnchor="middle"
                      fontSize="12"
                      fontWeight="700"
                      fill="#ffffff"
                    >
                      (
                      {formatValue(
                        highlightedGraphPoint.x
                      )}
                      ,{" "}
                      {formatValue(
                        highlightedGraphPoint.y
                      )}
                      )
                    </text>
                  </g>
                )}

                {/* x-axis title */}
                <text
                  x={width / 2}
                  y={height - 12}
                  textAnchor="middle"
                  fontSize="13"
                  fill="#D7E7E4"
                >
                  {xLabel}
                </text>

                {/* y-axis title */}
                <text
                  x="18"
                  y={height / 2}
                  textAnchor="middle"
                  fontSize="13"
                  fill="#D7E7E4"
                  transform={`rotate(-90 18 ${
                    height / 2
                  })`}
                >
                  {yLabel}
                </text>
              </svg>
            </div>
          </div>
        </div>
      </div>

      {highlightPoint && (
        <div className="mt-5 rounded-2xl border border-amber-200 bg-amber-50 p-4">
          <p className="text-sm font-semibold text-amber-950">
            Same mathematical fact:
          </p>

          <p className="mt-1 text-sm leading-6 text-amber-900">
            The highlighted table row
            and highlighted graph point
            both represent{" "}
            <strong>
              (
              {formatValue(
                highlightPoint.x
              )}
              ,{" "}
              {formatValue(
                highlightPoint.y
              )}
              )
            </strong>
            .
          </p>
        </div>
      )}
    </section>
  );
}