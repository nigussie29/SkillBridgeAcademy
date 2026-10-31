import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext.jsx";
import { getAiLessonProgress, saveAiLessonProgress } from "../../services/aiLessonProgress.js";
import MathematicalDeepDive from "../../components/learning/MathematicalDeepDive.jsx";
import CodingAndLumineryLab from "../../components/learning/CodingAndLumineryLab.jsx";
import RelatedLibraryResources from "../../components/learning/RelatedLibraryResources.jsx";

const LESSON_ID = "ai-foundations-m1-l2";
const quiz = [
  { q: "What is a feature in a machine-learning dataset?", options: ["A measurable input property", "A guaranteed prediction", "A computer brand"], correct: 0, why: "Features are measurable or encoded input properties used by a model." },
  { q: "The readings are 10, 14, and 12 cm. What is their arithmetic mean?", options: ["10 cm", "12 cm", "14 cm"], correct: 1, why: "The mean is (10 + 14 + 12) / 3 = 12 cm." },
  { q: "Which statement about an outlier is correct?", options: ["It must always be deleted", "It can indicate unusual conditions or a measurement problem", "It proves the model is accurate"], correct: 1, why: "Investigate outliers instead of automatically discarding them." },
  { q: "A distance sensor makes occasional errors. Which practice is best?", options: ["Assume every reading is perfect", "Record repeated readings and evaluate their variation", "Increase robot speed without testing"], correct: 1, why: "Repeated measurements help reveal variability and measurement uncertainty." },
];

export default function AIFoundationsLessonTwo() {
  const { user, loading: authLoading } = useAuth();
  const [readings, setReadings] = useState([10, 14, 12]);
  const [answers, setAnswers] = useState({});
  const [checked, setChecked] = useState(false);
  const [saved, setSaved] = useState(null);
  const [saveState, setSaveState] = useState("idle");
  const [error, setError] = useState("");
  const mean = readings.reduce((sum, value) => sum + value, 0) / readings.length;
  const score = quiz.reduce((count,item,index) => count + (answers[index] === item.correct ? 1 : 0), 0);
  const complete = quiz.every((_,index) => answers[index] !== undefined);

  useEffect(() => {
    let active = true;
    setSaved(null);
    setError("");
    if (user?.id) {
      getAiLessonProgress(user.id, LESSON_ID).then(record => { if (active) setSaved(record); }).catch(() => {
        if (active) setError("Could not load this lesson's cloud progress. The multi-lesson database migration may still be required.");
      });
    }
    return () => { active = false; };
  }, [user?.id]);

  async function saveResult() {
    if (!user?.id || !checked || !complete) return;
    setSaveState("saving");
    setError("");
    try {
      const record = await saveAiLessonProgress(user.id, score, quiz.length, LESSON_ID);
      setSaved(record);
      setSaveState("saved");
    } catch {
      setSaveState("error");
      setError("Save unavailable for Lesson 2. The Supabase multi-lesson migration must be applied before cloud saving will work. Your original Lesson 1 result is unaffected.");
    }
  }

  return <main className="academy-modern min-h-screen pb-20 text-slate-700">
    <div className="h-1 bg-gradient-to-r from-blue-700 via-indigo-700 to-violet-700" />
    <div className="mx-auto max-w-6xl px-5 py-9">
      <nav className="flex flex-wrap gap-2 text-sm font-bold text-indigo-700" aria-label="Lesson navigation">
        <Link to="/schools/artificial-intelligence">School of AI</Link><span>/</span>
        <Link to="/schools/artificial-intelligence/ai-foundations">AI Foundations</Link><span>/</span>
        <span className="text-slate-600">Module 1 · Lesson 2</span>
      </nav>
      <header className="mt-6 rounded-3xl bg-gradient-to-br from-blue-800 via-indigo-800 to-slate-950 p-8 text-white shadow-xl md:p-12">
        <p className="text-sm font-black uppercase tracking-widest text-cyan-200">AI Foundations · Module 1 · Lesson 2</p>
        <h1 className="mt-4 text-4xl font-black md:text-5xl">Data, Features, and Patterns</h1>
        <p className="mt-5 max-w-3xl text-lg leading-9 text-blue-100">Discover how mathematical representations, Python, AI, and robot sensors all depend on reliable data.</p>
        <div className="mt-6 flex flex-wrap gap-2 text-xs font-bold"><span className="rounded-full bg-white/15 px-4 py-2">Beginner</span><span className="rounded-full bg-white/15 px-4 py-2">45–60 minutes</span><span className="rounded-full bg-white/15 px-4 py-2">Math × Python × Robotics</span></div>
      </header>
      <nav className="academy-mini-nav mt-6 flex flex-wrap gap-2" aria-label="Jump to lesson section">
        <a href="#concepts">Concepts</a><a href="#worked">Worked mathematics</a><a href="#lab">Interactive data lab</a><a href="#python">Python + Luminery</a><a href="#assessment">Assessment</a>
      </nav>
      <div className="mt-8 grid items-start gap-7 lg:grid-cols-[280px_minmax(0,1fr)]">
        <aside className="space-y-5 lg:sticky lg:top-24">
          <section className="overflow-hidden rounded-3xl border border-slate-200 bg-white">
            <h2 className="bg-emerald-800 px-5 py-4 font-black text-white">Essential Vocabulary</h2>
            <dl className="space-y-4 p-5 text-sm leading-6">{[
              ["Dataset","An organized collection of observations."],["Feature","A measured or encoded input variable."],["Observation","One record of measured features."],["Mean","Sum of observations divided by their count."],["Outlier","A value that differs markedly from the others."],["Noise","Unwanted variation or error in measurements."],["Sensor","A device that measures a physical quantity."]
            ].map(([term,definition])=><div key={term}><dt className="font-black text-slate-950">{term}</dt><dd>{definition}</dd></div>)}</dl>
          </section>
          <section className="overflow-hidden rounded-3xl border border-slate-200 bg-white">
            <h2 className="bg-blue-800 px-5 py-4 font-black text-white">Key Formulas</h2>
            <div className="space-y-3 p-4 font-mono text-sm"><p className="rounded-xl bg-slate-950 p-3 text-cyan-200">x = [x₁, x₂, …, xₙ]</p><p className="rounded-xl bg-slate-950 p-3 text-cyan-200">mean = Σxᵢ / n</p><p className="rounded-xl bg-slate-950 p-3 text-cyan-200">range = max − min</p></div>
          </section>
          <section className="rounded-3xl border border-slate-200 bg-white p-5 text-sm leading-7">
            <h2 className="font-black text-slate-900">Account progress</h2>
            <p className="mt-2">{saved ? `Saved score: ${saved.score}/${saved.total_questions}` : "No score loaded for this lesson."}</p>
            <p className="mt-2 text-slate-500">Lesson 1 and Lesson 2 use different progress identifiers.</p>
          </section>
        </aside>
        <div className="min-w-0 space-y-7">
          <section id="concepts" className="academy-lesson-section scroll-mt-24 p-7">
            <p className="academy-section-kicker">Essential Question</p>
            <h2 className="mt-2 text-2xl font-black text-slate-950">How does raw data become useful information for AI and robots?</h2>
            <p className="mt-4 leading-8">Imagine a robot approaching an obstacle. A distance sensor sends numerical readings. Those readings are data, but an AI or a program cannot use them responsibly until we understand the numbers, their units, their variability, and their limitations.</p>
            <h3 className="mt-5 text-lg font-black text-slate-900">The big idea</h3>
            <p className="mt-2 leading-8">A dataset is a collection of observations. Each observation may have features such as distance (centimeters), robot speed (centimeters/second), and whether an obstacle is present. Features form a vector, such as x = [distance, speed]. A fixed threshold is a programmed rule; a learned AI model uses examples to estimate patterns.</p>
            <div className="mt-5 rounded-2xl bg-indigo-50 p-5"><h3 className="font-black text-indigo-950">Learning goals</h3><ul className="mt-3 list-inside list-disc space-y-2 text-sm leading-7"><li>Distinguish observations, features, labels, and predictions.</li><li>Compute means and ranges with correct units.</li><li>Interpret noisy readings and potential outliers.</li><li>Use Python to process a small sensor dataset.</li><li>Explain the connection between mathematics, AI, and robotics.</li></ul></div>
          </section>
          <div id="worked" className="scroll-mt-24">
            <MathematicalDeepDive
              title="From sensor readings to mathematical evidence"
              introduction="Work with small datasets by hand before using Python. Always report units and make your assumptions explicit."
              examples={[
                {title:"Mean sensor distance",question:"The robot records 10 cm, 14 cm, and 12 cm. Find the mean.",formula:"mean = (10 + 14 + 12) / 3",steps:["Add measurements: 10 + 14 + 12 = 36 cm.","Count the three observations.","Divide 36 cm by 3 to obtain 12 cm."],answer:"Mean distance = 12 cm.",interpretation:"A mean summarizes readings; it does not describe their uncertainty by itself."},
                {title:"Range and variability",question:"The recorded values are 10, 14, and 12 cm. Find their range.",formula:"range = maximum − minimum",steps:["Identify maximum = 14 cm.","Identify minimum = 10 cm.","Subtract: 14 − 10 = 4 cm."],answer:"Range = 4 cm.",interpretation:"A larger range can indicate greater variation, but cannot alone identify its cause."},
                {title:"Why outliers matter",question:"Readings are 10, 12, and 38 cm. Compare mean and median.",formula:"mean = (10+12+38)/3 = 20 cm",steps:["Compute the mean: 60/3 = 20 cm.","Sort values: 10, 12, 38.","The middle value is the median: 12 cm."],answer:"Mean 20 cm; median 12 cm.",interpretation:"The large reading influences the mean. Investigate it before deciding whether to exclude it."}
              ]}
              practice={[
                {question:"Find the mean of [8, 10, 12] cm.",solution:"(8 + 10 + 12) / 3 = 10 cm."},
                {question:"Find the range of [9, 15, 11, 13] cm.",solution:"15 − 9 = 6 cm."},
                {question:"Represent distance 18 cm and speed 5 cm/s as a feature vector.",solution:"x = [18, 5] when the agreed feature order is [distance (cm), speed (cm/s)]."}
              ]}
            />
          </div>
          <section id="lab" className="academy-lesson-section scroll-mt-24 p-7">
            <p className="academy-section-kicker">Interactive Mathematics Lab</p>
            <h2 className="mt-2 text-2xl font-black text-slate-950">Explore how data changes the mean</h2>
            <p className="mt-3 text-sm leading-7">Change each simulated distance reading. Watch the mean and range update. The example is for mathematical exploration and is not a real sensor or safety system.</p>
            <div className="mt-5 grid gap-4 md:grid-cols-3">{readings.map((value,index)=><label key={index} className="rounded-xl bg-indigo-50 p-4 text-sm font-bold text-indigo-950">Reading {index+1}: {value} cm<input className="mt-4 w-full accent-indigo-700" type="range" min="0" max="50" value={value} onChange={event=>setReadings(current=>current.map((n,j)=>index===j?Number(event.target.value):n))}/></label>)}</div>
            <div className="mt-5 grid gap-3 sm:grid-cols-2" aria-live="polite"><div className="rounded-xl bg-blue-50 p-4"><p className="text-xs font-bold uppercase text-blue-800">Arithmetic mean</p><p className="mt-2 text-3xl font-black text-blue-950">{mean.toFixed(2)} cm</p></div><div className="rounded-xl bg-emerald-50 p-4"><p className="text-xs font-bold uppercase text-emerald-800">Range</p><p className="mt-2 text-3xl font-black text-emerald-950">{Math.max(...readings)-Math.min(...readings)} cm</p></div></div>
            <p className="mt-4 text-sm leading-7">Try increasing one reading to 50 cm. Explain why the mean moves and what that suggests about relying on a single statistic.</p>
            <button type="button" className="mt-3 rounded-xl border border-indigo-400 px-4 py-2 text-sm font-bold text-indigo-800" onClick={()=>setReadings([10,14,12])}>Reset data lab</button>
          </section>
          <div id="python" className="scroll-mt-24">
            <CodingAndLumineryLab
              title="Analyze robot sensor readings with Python"
              introduction="Use Python's built-in functions to compute a mean and a range, compare results with your hand calculations, and discuss measurement quality."
              code={`readings_cm = [10, 14, 12]
mean_cm = sum(readings_cm) / len(readings_cm)
range_cm = max(readings_cm) - min(readings_cm)
print(f"Mean: {mean_cm:.1f} cm")
print(f"Range: {range_cm} cm")`}
              expectedOutput={`Mean: 12.0 cm
Range: 4 cm`}
              prediction={{question:"What mean will Python print for [10, 14, 12]?",options:["10.0 cm","12.0 cm","14.0 cm"],correctIndex:1,retryHint:"Add the three readings and divide by how many readings there are.",explanation:"36 divided by 3 gives 12.0 cm."}}
              challenges={["Change the first measurement to 20 cm. Predict the new mean before calculating.","Change the list to [10, 12, 38]. Compare the mean and median by hand.","Explain why this program computes descriptive statistics but does not train an AI model."]}
              reflection="A sensor sometimes measures 38 cm where neighboring readings are near 12 cm. How would you investigate whether it is noise, a real change, or a hardware problem?"
              hints={["Describe the observed data before deciding what it means.","Compare repeated measurements, units, and sensor positioning.","Use statistics to characterize variability; do not delete a reading without investigating its cause."]}
            />
          </div>
          <RelatedLibraryResources
            title="Deepen your understanding of data and features"
            description="Connect the mathematics of robot sensor readings to data preparation and statistical reasoning from the Data & AI Knowledge Library."
            resources={[
              {topic:"Data features",title:"Units of analysis, features, targets, and actions",why:"Understand what each record measures, how features differ from prediction targets, and why units matter.",path:"/library/data-ai/module/1/lesson/units-of-analysis-features-targets-and-actions"},
              {topic:"Statistics",title:"Center, spread, shape, and unusual observations",why:"Study mean, spread, and unusual values to better reason about sensor measurement quality.",path:"/library/data-ai/module/2/lesson/center-spread-shape-and-unusual-observations"},
              {topic:"Data quality",title:"Structured, semi-structured, and unstructured data",why:"Compare how observations are represented and prepared for analysis.",path:"/library/data-ai/module/1/lesson/structured-semi-structured-and-unstructured-data"},
            ]}
          />
          <section id="assessment" className="academy-lesson-section scroll-mt-24 p-7">
            <p className="academy-section-kicker">Formative Assessment</p>
            <h2 className="mt-2 text-2xl font-black text-slate-950">Check your understanding</h2>
            <p className="mt-3 text-sm">Answer four questions. Three correct answers meet this lesson's knowledge-check target.</p>
            <div className="mt-7 space-y-6">{quiz.map((item,index)=><fieldset key={index} className="border-b border-slate-200 pb-5"><legend className="font-bold text-slate-900">{index+1}. {item.q}</legend><div className="mt-3 space-y-2">{item.options.map((option,j)=><label key={j} className="flex cursor-pointer gap-3 rounded-xl border border-slate-200 p-3 text-sm"><input type="radio" name={`ai-data-question-${index}`} className="accent-indigo-700" checked={answers[index]===j} onChange={()=>{setAnswers(prev=>({...prev,[index]:j}));setChecked(false);setSaveState("idle");}}/><span>{option}</span></label>)}</div>{checked&&<p className="mt-3 text-sm font-semibold text-indigo-800">{item.why}</p>}</fieldset>)}</div>
            <div className="mt-5 flex flex-wrap gap-3"><button type="button" disabled={!complete} onClick={()=>setChecked(true)} className="rounded-xl bg-indigo-700 px-5 py-3 font-bold text-white disabled:opacity-50">Check answers</button><button type="button" onClick={()=>{setAnswers({});setChecked(false);setSaveState("idle");}} className="rounded-xl border border-indigo-300 px-5 py-3 font-bold text-indigo-900">Try again</button></div>
            {checked&&<p role="status" className="mt-4 rounded-xl bg-indigo-50 p-4 font-black text-indigo-950">Score: {score}/4 — {score>=3?"Knowledge-check target met":"Review and try again"}</p>}
            <div className="mt-5 rounded-xl border border-indigo-200 bg-indigo-50 p-5">
              <h3 className="font-black text-indigo-950">Save to academy account</h3>
              {saved&&<p className="mt-2 text-sm">Previously saved: {saved.score}/{saved.total_questions}</p>}
              {!user&&!authLoading&&<Link className="mt-2 inline-block font-bold text-indigo-700 underline" to="/login">Sign in to save</Link>}
              {user&&<button type="button" disabled={!checked||saveState==="saving"||saveState==="saved"} onClick={saveResult} className="mt-3 rounded-xl bg-indigo-700 px-4 py-2 font-bold text-white disabled:opacity-40">{saveState==="saving"?"Saving...":saveState==="saved"?"Saved":"Save lesson result"}</button>}
              {saveState==="saved"&&<p role="status" className="mt-2 text-sm font-bold text-emerald-800">Saved to your account.</p>}
              {error&&<p role="alert" className="mt-3 text-sm font-semibold text-rose-800">{error}</p>}
              <p className="mt-2 text-xs text-slate-600">Cloud saving for Lesson 2 requires the new database migration. The Lesson 1 progress record is separate and preserved.</p>
            </div>
          </section>
          <section className="academy-lesson-section p-7"><h2 className="text-2xl font-black text-slate-950">Create portfolio evidence</h2><p className="mt-3 leading-8">Record five simulated sensor readings, compute their mean and range, write Python that reproduces your calculations, and explain one source of measurement uncertainty and how you would test it. Include a clear distinction between a deterministic statistics program and a trained AI model.</p><div className="mt-5 flex flex-wrap gap-3"><Link className="rounded-xl border border-slate-300 px-4 py-3 font-bold text-indigo-700" to="/schools/artificial-intelligence/ai-foundations/module-1/lesson-1">← Lesson 1</Link><Link className="rounded-xl bg-indigo-700 px-4 py-3 font-bold text-white" to="/schools/artificial-intelligence/ai-foundations">Course overview</Link><Link className="rounded-xl bg-indigo-700 px-4 py-3 font-bold text-white" to="/schools/artificial-intelligence/ai-foundations/module-1/lesson-3">Next: Rules and Predictions →</Link></div></section>
        </div>
      </div>
    </div>
  </main>;
}
