import { useState } from "react";

/**
 * Reusable lesson-level code example and guided Luminery learning prompts.
 * Code is displayed for examination and offline practice, never executed in the browser.
 * The guidance is authored, not a live AI service.
 */
export default function CodingAndLumineryLab({
  language = "Python",
  title = "Code the mathematics",
  introduction,
  code,
  expectedOutput,
  challenges = [],
  hints = [],
  reflection,
}) {
  const [hintLevel, setHintLevel] = useState(0);
  const [showOutput, setShowOutput] = useState(false);

  return (
    <section className="space-y-6" aria-label="Coding practice and Luminery mentor">
      <article className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
        <div className="bg-gradient-to-r from-slate-950 to-indigo-950 px-6 py-6 text-white">
          <p className="text-xs font-black uppercase tracking-widest text-cyan-200">SkillBridge Code Lab · {language}</p>
          <h2 className="mt-2 text-2xl font-black">{title}</h2>
          <p className="mt-3 text-sm leading-7 text-slate-200">{introduction}</p>
        </div>
        <div className="space-y-5 p-6">
          <p className="text-sm font-semibold text-slate-700">Read and explain the program. Run it in your own Python environment or a teacher-approved coding workspace.</p>
          <pre className="overflow-x-auto rounded-2xl bg-slate-950 p-5 text-sm leading-7 text-cyan-200" tabIndex={0}><code>{code}</code></pre>
          {expectedOutput && <div>
            <button type="button" onClick={() => setShowOutput(value => !value)} aria-expanded={showOutput} className="rounded-xl border border-indigo-300 px-4 py-2 text-sm font-bold text-indigo-800 hover:bg-indigo-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">{showOutput ? "Hide expected output" : "Show expected output"}</button>
            {showOutput && <pre className="mt-3 overflow-x-auto rounded-xl bg-slate-100 p-4 font-mono text-sm text-slate-900">{expectedOutput}</pre>}
          </div>}
          <div className="rounded-2xl bg-blue-50 p-5">
            <h3 className="text-lg font-black text-blue-950">Try, change, explain</h3>
            <ol className="mt-3 list-inside list-decimal space-y-2 text-sm leading-7 text-blue-950">{challenges.map((item,i)=><li key={i}>{item}</li>)}</ol>
          </div>
          <p className="text-xs leading-6 text-slate-500">This is a readable programming example, not an in-browser Python interpreter. It does not affect your saved lesson quiz result.</p>
        </div>
      </article>
      <article className="overflow-hidden rounded-3xl border border-violet-200 bg-white shadow-sm" aria-labelledby="luminery-mentor-heading">
        <div className="bg-gradient-to-r from-violet-800 to-indigo-900 px-6 py-6 text-white">
          <p className="text-xs font-black uppercase tracking-widest text-violet-200">Luminery · Learning mentor</p>
          <h2 id="luminery-mentor-heading" className="mt-2 text-2xl font-black">Think deeper, one hint at a time</h2>
          <p className="mt-3 text-sm leading-7 text-violet-100">Try reasoning independently. Reveal guidance only when needed.</p>
        </div>
        <div className="space-y-5 p-6">
          {reflection && <p className="font-semibold leading-8 text-slate-900">{reflection}</p>}
          <div className="rounded-2xl bg-violet-50 p-5">
            <p className="text-xs font-black uppercase tracking-widest text-violet-800">Guided prompts</p>
            {hintLevel > 0 ? (
              <ol className="mt-3 space-y-3 text-sm leading-7 text-violet-950">
                {hints.slice(0,hintLevel).map((hint,index)=><li key={index}><strong>Hint {index+1}:</strong> {hint}</li>)}
              </ol>
            ) : <p className="mt-3 text-sm text-violet-950">No hints revealed yet. Start by writing your own reasoning.</p>}
            <div className="mt-5 flex flex-wrap gap-3">
              <button type="button" disabled={hintLevel >= hints.length} onClick={() => setHintLevel(value => Math.min(value + 1,hints.length))} className="rounded-xl bg-violet-800 px-4 py-2 text-sm font-bold text-white hover:bg-violet-700 disabled:opacity-50">{hintLevel >= hints.length ? "All hints revealed" : "Reveal next hint"}</button>
              {hintLevel > 0 && <button type="button" onClick={() => setHintLevel(0)} className="rounded-xl border border-violet-300 px-4 py-2 text-sm font-bold text-violet-900">Reset hints</button>}
            </div>
          </div>
          <p className="text-xs leading-6 text-slate-500">Luminery guided prompts are authored instructional content, not a live AI conversation or a personalized analysis of student records.</p>
        </div>
      </article>
    </section>
  );
}
