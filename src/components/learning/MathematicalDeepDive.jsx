import { useState } from "react";

// Subject-neutral mathematical notes block for the Universal Course Standard.
// Author each worked step and answer explicitly; this component never guesses solutions.
export default function MathematicalDeepDive({ title = "Mathematical Deep Dive", introduction, examples = [], practice = [] }) {
  const [showSolutions, setShowSolutions] = useState(false);
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8" aria-labelledby="mathematical-deep-dive">
      <p className="text-xs font-black uppercase tracking-widest text-blue-700">Deep learning notes · Mathematical reasoning</p>
      <h2 id="mathematical-deep-dive" className="mt-2 text-2xl font-black text-slate-950">{title}</h2>
      {introduction && <p className="mt-4 text-base leading-8 text-slate-700">{introduction}</p>}
      <div className="mt-7 space-y-6">
        {examples.map((example, index) => (
          <article key={example.title} className="overflow-hidden rounded-2xl border border-slate-200">
            <div className="bg-slate-100 px-5 py-3 text-sm font-black text-slate-900">Worked Example {index + 1}: {example.title}</div>
            <div className="space-y-4 p-5">
              <p className="font-semibold text-slate-900">{example.question}</p>
              {example.formula && <div className="overflow-x-auto rounded-xl bg-slate-950 p-4 font-mono text-sm font-bold text-cyan-200">{example.formula}</div>}
              <ol className="space-y-3">
                {example.steps.map((step, stepIndex) => (
                  <li className="flex gap-3" key={stepIndex}><span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-indigo-100 text-sm font-black text-indigo-800">{stepIndex + 1}</span><span className="text-base leading-7">{step}</span></li>
                ))}
              </ol>
              <p className="rounded-xl bg-emerald-50 p-4 text-base font-bold text-emerald-900">Conclusion: {example.answer}</p>
              {example.interpretation && <p className="text-sm leading-7 text-slate-600"><strong>Interpretation:</strong> {example.interpretation}</p>}
            </div>
          </article>
        ))}
      </div>
      {practice.length > 0 && <div className="mt-8 rounded-2xl border border-blue-200 bg-blue-50 p-5">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h3 className="text-xl font-black text-slate-950">Independent mathematical practice</h3>
          <button type="button" className="rounded-xl bg-blue-700 px-4 py-2 text-sm font-bold text-white hover:bg-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700" onClick={() => setShowSolutions(value => !value)} aria-expanded={showSolutions}>{showSolutions ? "Hide solutions" : "Reveal worked solutions"}</button>
        </div>
        <ol className="mt-5 space-y-5">
          {practice.map((item, index) => <li key={index} className="rounded-xl bg-white p-4">
            <p className="font-semibold text-slate-900">{index + 1}. {item.question}</p>
            {showSolutions && <p className="mt-3 border-t border-slate-200 pt-3 text-sm leading-7 text-emerald-800"><strong>Solution:</strong> {item.solution}</p>}
          </li>)}
        </ol>
        <p className="mt-4 text-sm leading-6 text-blue-950">Try each problem before revealing its solution. These practice items do not change your saved quiz result.</p>
      </div>}
    </section>
  );
}
