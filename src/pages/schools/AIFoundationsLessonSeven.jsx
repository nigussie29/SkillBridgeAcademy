import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext.jsx";
import { getAiLessonProgress, saveAiLessonProgress } from "../../services/aiLessonProgress.js";
import MathematicalDeepDive from "../../components/learning/MathematicalDeepDive.jsx";
import CodingAndLumineryLab from "../../components/learning/CodingAndLumineryLab.jsx";
import RelatedLibraryResources from "../../components/learning/RelatedLibraryResources.jsx";

const LESSON_ID = "ai-foundations-m1-l7";
const INITIAL_READINGS = [18,20,19,21,22,20];
const questions = [
  {question:"For [2, 4, 6], what is the arithmetic mean?",options:["4","6","12"],answer:0,why:"Add the three observations (12) and divide by the count (3): mean = 4."},
  {question:"Which quantity measures the average squared deviation from the mean for a complete population?",options:["Mean","Population variance","Minimum"],answer:1,why:"Population variance is the sum of squared deviations divided by the population size."},
  {question:"Why might the mean alone be misleading for noisy robot sensor readings?",options:["It always equals the maximum","It can conceal spread and unusual measurements","It is never useful"],answer:1,why:"Two groups can have the same mean yet very different variability or outliers."},
  {question:"When evaluating an AI model on sensor data, what is a suitable practice?",options:["Use only ideal readings","Ignore all unusual values","Examine distribution, outliers, and separate test conditions"],answer:2,why:"Understanding spread and unusual conditions helps reveal reliability problems."},
];

export default function AIFoundationsLessonSeven() {
  const { user, loading: authLoading } = useAuth();
  const [readings,setReadings] = useState(INITIAL_READINGS);
  const [newReading,setNewReading] = useState(20);
  const [answers,setAnswers] = useState({});
  const [checked,setChecked] = useState(false);
  const [saved,setSaved] = useState(null);
  const [saveStatus,setSaveStatus] = useState("idle");
  const [error,setError] = useState("");
  const total = readings.reduce((sum,n)=>sum+n,0);
  const mean = total / readings.length;
  const deviations = readings.map(n=>(n-mean)**2);
  const variance = deviations.reduce((sum,n)=>sum+n,0) / readings.length;
  const standardDeviation = Math.sqrt(variance);
  const sorted = [...readings].sort((a,b)=>a-b);
  const median = sorted.length % 2 ? sorted[Math.floor(sorted.length/2)] : (sorted[sorted.length/2-1]+sorted[sorted.length/2])/2;
  const min = Math.min(...readings);
  const max = Math.max(...readings);
  const xAxis = value => 56+(value/100)*510;
  const yAxis = value => 280-(value/100)*195;
  const points = readings.map((value,index)=>({value,index,x:xAxis(index*100/(Math.max(readings.length-1,1))),y:yAxis(value)}));
  const pathLine = points.map((point,i)=>`${i===0?"M":"L"}${point.x.toFixed(1)} ${point.y.toFixed(1)}`).join(" ");
  const complete = questions.every((_,i)=>answers[i]!==undefined);
  const score = questions.reduce((sum,item,i)=>sum+(answers[i]===item.answer?1:0),0);
  useEffect(()=>{
    let active = true;setSaved(null);
    if(!user?.id)return ()=>{active=false};
    getAiLessonProgress(user.id,LESSON_ID).then(record=>{if(active)setSaved(record)}).catch(()=>{if(active)setError("Could not load Lesson 7 account progress.")});
    return ()=>{active=false};
  },[user?.id]);
  async function handleSave(){
    if(!user?.id||!checked||!complete)return;
    setSaveStatus("saving");setError("");
    try{const record=await saveAiLessonProgress(user.id,score,questions.length,LESSON_ID);setSaved(record);setSaveStatus("saved")}
    catch{setSaveStatus("error");setError("Could not save Lesson 7. Check your connection and the AI progress table configuration.")}
  }
  return <main className="academy-modern min-h-screen pb-20 text-slate-700">
    <div className="h-1 bg-gradient-to-r from-indigo-700 via-blue-600 to-emerald-500"/>
    <div className="mx-auto max-w-6xl px-5 py-8">
      <nav aria-label="Course navigation" className="flex flex-wrap gap-2 text-sm font-bold text-indigo-700"><Link to="/schools/artificial-intelligence">School of AI</Link><span>/</span><Link to="/schools/artificial-intelligence/ai-foundations">AI Foundations</Link><span>/</span><span className="text-slate-600">Module 1 · Lesson 7</span></nav>
      <header className="mt-6 rounded-3xl bg-gradient-to-br from-blue-800 via-indigo-800 to-slate-950 p-8 text-white shadow-xl md:p-12">
        <p className="text-sm font-black uppercase tracking-widest text-cyan-200">SkillBridge AI Foundations · Module 1</p>
        <h1 className="mt-4 text-4xl font-black md:text-5xl">Data Distributions, Variability, and Outliers</h1>
        <p className="mt-5 max-w-3xl text-lg leading-9 text-blue-100">Discover why averages alone can hide important problems. Measure spread, visualize noisy robot sensor readings, and connect statistical reasoning to responsible AI evaluation.</p>
        <div className="mt-6 flex flex-wrap gap-2 text-xs font-bold"><span className="rounded-full bg-white/15 px-4 py-2">60–75 minutes</span><span className="rounded-full bg-white/15 px-4 py-2">Statistics × Interactive Graphs</span><span className="rounded-full bg-white/15 px-4 py-2">Python × AI × Robotics</span></div>
      </header>
      <nav aria-label="Lesson sections" className="academy-mini-nav mt-6 flex flex-wrap gap-2"><a href="#concepts">Deep notes</a><a href="#mathematics">Mathematics</a><a href="#graph">Interactive graph</a><a href="#coding">Python + Luminery</a><a href="#assessment">Assessment</a></nav>
      <div className="mt-8 grid items-start gap-7 lg:grid-cols-[280px_minmax(0,1fr)]">
        <aside className="space-y-5 lg:sticky lg:top-24">
          <section className="overflow-hidden rounded-3xl border border-slate-200 bg-white"><h2 className="bg-emerald-800 px-5 py-4 font-black text-white">Essential Vocabulary</h2><dl className="space-y-4 p-5 text-sm leading-7">{[
            ["Observation","An individual measurement collected in a dataset."],
            ["Mean","Sum of values divided by the number of values."],
            ["Median","Middle value of sorted observations."],
            ["Variance","Mean of the squared distances from the mean, for a population."],
            ["Standard deviation","Square root of variance, in the original measurement units."],
            ["Outlier","An observation unusually far from the bulk of the data; it needs investigation."],
            ["Distribution","How observed values are spread across possible outcomes."],
            ["Generalization","Whether model performance carries to new and representative data."]
          ].map(([term,def])=><div key={term}><dt className="font-black text-slate-950">{term}</dt><dd>{def}</dd></div>)}</dl></section>
          <section className="overflow-hidden rounded-3xl border border-slate-200 bg-white"><h2 className="bg-blue-800 px-5 py-4 font-black text-white">Key Mathematics</h2><div className="space-y-3 p-4 font-mono text-sm"><p className="rounded-xl bg-slate-950 p-3 text-cyan-200">mean = Σx / n</p><p className="rounded-xl bg-slate-950 p-3 text-cyan-200">variance = Σ(x − mean)² / n</p><p className="rounded-xl bg-slate-950 p-3 text-cyan-200">SD = √variance</p></div></section>
          <section className="rounded-3xl border border-slate-200 bg-white p-5 text-sm"><h2 className="font-black text-slate-950">Account progress</h2><p className="mt-2">{saved?`Saved score: ${saved.score}/${saved.total_questions}`:"No saved score loaded yet."}</p><p className="mt-2 text-slate-500">Lesson 7 uses its own progress record.</p></section>
        </aside>
        <div className="min-w-0 space-y-7">
          <section id="concepts" className="academy-lesson-section scroll-mt-24 p-7">
            <p className="academy-section-kicker">Essential Question</p><h2 className="mt-2 text-2xl font-black text-slate-950">Can two datasets have the same average but different reliability?</h2>
            <p className="mt-4 leading-8">Yes. Consider two sets of hypothetical robot readings in centimeters: A = [19,20,21] and B = [5,20,35]. Both have mean 20 cm, but the second set varies much more. A model using only the average could overlook noisy measurements and unusually high or low values.</p>
            <p className="mt-4 leading-8">A <strong>distribution</strong> describes the pattern of values. The mean summarizes a center, the median describes the middle ordered value, and the standard deviation measures typical spread around the mean. Looking at all three helps us explain data instead of blindly trusting a single number.</p>
            <div className="mt-5 rounded-2xl bg-indigo-50 p-5"><h3 className="font-black text-indigo-950">Statistical reasoning in AI</h3><ol className="mt-3 list-inside list-decimal space-y-2 text-sm leading-7"><li>Collect measurements and record their units, conditions, and source.</li><li>Plot individual observations before calculating an average.</li><li>Calculate center and spread, then inspect unusual readings.</li><li>Investigate whether unusual readings are real events or measurement problems.</li><li>Evaluate model behavior across different conditions and representative test datasets.</li></ol></div>
            <p className="mt-4 leading-8"><strong>Population versus sample:</strong> This lesson calculates population variance using division by n for the observations displayed. If these readings are a sample used to estimate a larger population variance, sample variance typically divides by n − 1. Keep the purpose of the calculation explicit.</p>
            <div className="mt-4 rounded-2xl border border-amber-200 bg-amber-50 p-5 text-sm leading-7 text-amber-950"><strong>Robot safety:</strong> These are simulated values. A low standard deviation does not prove a sensor is accurate or a robot can stop safely. Never connect this graph to motors or treat its statistics as a safety guarantee.</div>
          </section>
          <div id="mathematics" className="scroll-mt-24"><MathematicalDeepDive
            title="Build understanding through worked statistics"
            introduction="Begin with manageable datasets and explain every step, including the meaning of centimeters and squared centimeters."
            examples={[
              {title:"Compare equal means",question:"Find the mean of A = [19,20,21] and B = [5,20,35].",formula:"mean = (x₁ + x₂ + x₃) / 3",steps:["For A: (19 + 20 + 21) / 3 = 60 / 3 = 20 cm.","For B: (5 + 20 + 35) / 3 = 60 / 3 = 20 cm.","Notice both means match even though B is much more spread out."],answer:"Both means equal 20 cm.",interpretation:"An average alone can hide large differences in reliability."},
              {title:"Calculate population variance",question:"For [18,20,22] cm, calculate population variance.",formula:"variance = [(18−20)²+(20−20)²+(22−20)²]/3",steps:["Mean = (18+20+22)/3 = 20 cm.","Deviations from mean: −2, 0, 2 cm.","Squared deviations: 4, 0, 4 cm².","Add and divide by 3: 8/3 ≈ 2.667 cm²."],answer:"Population variance ≈ 2.667 cm².",interpretation:"Variance has squared units, so standard deviation is often easier to interpret."},
              {title:"Standard deviation",question:"Use variance 8/3 cm² to find population standard deviation.",formula:"SD = √(8/3) ≈ 1.633",steps:["Start from variance = 8/3 ≈ 2.667 cm².","Take the square root of 2.667.","Restore the original distance unit because √cm² = cm."],answer:"Population SD ≈ 1.633 cm.",interpretation:"SD describes spread, not whether the sensor is correctly calibrated."},
              {title:"Effect of an outlier",question:"Compare the means of [19,20,21] and [19,20,61].",formula:"mean1 = 60/3; mean2 = 100/3",steps:["Before the outlier, mean = 20 cm.","Replace 21 with 61 and calculate 19 + 20 + 61 = 100.","New mean = 100/3 ≈ 33.33 cm.","In the altered dataset the median remains 20 cm."],answer:"The mean changes from 20 to about 33.33 cm; the median stays 20 cm.",interpretation:"Investigate the unusual value rather than automatically deleting it."}
            ]}
            practice={[
              {question:"Find the mean of [10,12,14] cm.",solution:"(10+12+14)/3 = 36/3 = 12 cm."},
              {question:"Find the median of [8,50,9,10,11] cm.",solution:"Sort to [8,9,10,11,50]; the middle is 10 cm."},
              {question:"Find the population variance of [2,4,6].",solution:"Mean = 4; squared deviations = [4,0,4]; variance = 8/3 ≈ 2.667."},
              {question:"Why should an outlier be investigated before removal?",solution:"It might represent a real obstacle, a data-entry problem, or a sensor failure. Discarding it without evidence can bias the model."}
            ]}/></div>
          <section id="graph" className="academy-lesson-section scroll-mt-24 p-7">
            <p className="academy-section-kicker">Interactive Statistics Graph</p><h2 className="mt-2 text-2xl font-black text-slate-950">Observe the effect of noisy sensor data</h2>
            <p className="mt-3 text-sm leading-7">The blue line shows a sequence of simulated sensor measurements. The dashed horizontal line shows the current mean. Add readings, including an extreme value, to see how the mean and standard deviation change.</p>
            <figure className="mt-5 overflow-hidden rounded-2xl border border-slate-200 bg-white p-4"><figcaption className="font-black text-slate-900">Sensor readings and their mean (centimeters)</figcaption>
              <svg viewBox="0 0 620 325" className="mt-3 h-auto w-full" role="img" aria-label={`Line chart of ${readings.length} readings. Mean ${mean.toFixed(2)} centimeters and population standard deviation ${standardDeviation.toFixed(2)} centimeters.`}>
                <rect x="56" y="85" width="510" height="195" fill="#f8fafc" rx="4"/>
                {[0,2,4,6,8,10].map(n=><g key={n}><line x1="56" x2="566" y1={yAxis(n*10)} y2={yAxis(n*10)} stroke="#cbd5e1"/><text x="45" y={yAxis(n*10)+5} textAnchor="end" fontSize="12" fill="#475569">{n*10}</text></g>)}
                <line x1="56" y1={yAxis(mean)} x2="566" y2={yAxis(mean)} stroke="#9333ea" strokeWidth="3" strokeDasharray="7 5"/>
                <path d={pathLine} stroke="#2563eb" strokeWidth="3" fill="none" strokeLinejoin="round"/>
                {points.map(point=><g key={point.index}><circle cx={point.x} cy={point.y} r="6" fill={point.value > mean + 2*standardDeviation?"#dc2626":"#2563eb"} stroke="white" strokeWidth="1"/><title>{`Reading ${point.index+1}: ${point.value} cm`}</title></g>)}
                <text x="310" y="314" textAnchor="middle" fontSize="14" fill="#334155">Observation order</text><text x="16" y="185" transform="rotate(-90 16 185)" textAnchor="middle" fontSize="13" fill="#334155">Distance (cm)</text>
              </svg><div className="flex flex-wrap gap-4 text-sm font-semibold"><span className="text-blue-700">━ Readings</span><span className="text-violet-700">┄ Mean</span></div>
            </figure>
            <label className="mt-5 block rounded-2xl bg-indigo-50 p-5 text-sm font-black text-indigo-950">New simulated reading: {newReading} cm<input type="range" className="mt-3 w-full accent-indigo-700" min="0" max="100" value={newReading} onChange={e=>setNewReading(Number(e.target.value))}/></label>
            <div className="mt-4 flex flex-wrap gap-3"><button type="button" disabled={readings.length>=12} onClick={()=>setReadings(old=>[...old,newReading])} className="rounded-xl bg-indigo-700 px-5 py-3 text-sm font-black text-white disabled:opacity-40">Add reading</button><button type="button" disabled={readings.length<=INITIAL_READINGS.length} onClick={()=>setReadings(old=>old.slice(0,-1))} className="rounded-xl border border-indigo-200 px-5 py-3 text-sm font-black text-indigo-800 disabled:opacity-40">Undo last</button><button type="button" onClick={()=>{setReadings(INITIAL_READINGS);setNewReading(20)}} className="rounded-xl border border-indigo-200 px-5 py-3 text-sm font-black text-indigo-800">Reset</button></div>
            <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4" aria-live="polite">{[["Mean",mean.toFixed(2)+" cm"],["Median",median.toFixed(2)+" cm"],["Population SD",standardDeviation.toFixed(2)+" cm"],["Range",(max-min).toFixed(0)+" cm"]].map(([name,value])=><div key={name} className="rounded-xl bg-slate-100 p-4"><p className="text-xs font-black uppercase text-slate-600">{name}</p><p className="mt-2 text-lg font-black text-indigo-900">{value}</p></div>)}</div>
            <p className="mt-4 text-sm leading-7"><strong>Challenge:</strong> Add a 90 cm measurement. Compare the mean and median. What happens to population SD? Could this be a real obstacle reading or a sensor error? Explain how you would verify.</p>
          </section>
          <div id="coding" className="scroll-mt-24"><CodingAndLumineryLab
            title="Measure data spread in Python"
            introduction="Use Python's standard statistics library to reproduce the graph's initial summary. This code is for external execution; the website does not run Python."
            code={`import statistics

readings_cm = [18, 20, 19, 21, 22, 20]
print("mean:", round(statistics.mean(readings_cm), 2))
print("median:", round(statistics.median(readings_cm), 2))
print("population SD:", round(statistics.pstdev(readings_cm), 2))
readings_cm.append(90)
print("new mean:", round(statistics.mean(readings_cm), 2))`}
            expectedOutput={`mean: 20
median: 20.0
population SD: 1.29
new mean: 30.0`}
            prediction={{question:"What will happen to the mean after appending 90 to the original six readings?",options:["It remains 20","It rises to 30","It becomes 90"],correctIndex:1,retryHint:"The original six readings sum to 120. Adding 90 produces 210 across seven readings.",explanation:"210 / 7 = 30 cm. A single extreme reading can move the mean considerably."}}
            challenges={["Calculate mean and median by hand for the initial dataset.","Add 90 in Python, then compare median, population SD, and mean.","Explain the difference between statistics.pstdev and statistics.stdev.","Describe how you would verify whether a surprising robot sensor reading is valid."]}
            hints={["Compute the sum first and divide by the number of observations.","Sort values to locate the median; when the count is even, average the two middle values.","Variance uses squared deviations; standard deviation restores the original measurement units.","An outlier can be an important safety signal. Do not delete it without checking the source."]}
            reflection="How could a model appear accurate on average yet fail when robot sensors encounter unusual conditions, and what additional evidence would you collect?"
          /></div>
          <RelatedLibraryResources title="Connect statistics to AI evaluation" description="Review how data quality and statistical summaries influence model performance and decisions." resources={[{topic:"Data & AI",title:"Data & AI Knowledge Library",why:"Explore statistics, data quality, and machine-learning workflows.",path:"/library/data-ai"},{topic:"Prior lesson",title:"Probability and Decision Thresholds",why:"Connect input distributions with estimated probabilities and classification decisions.",path:"/schools/artificial-intelligence/ai-foundations/module-1/lesson-6"}]}/>
          <section id="assessment" className="academy-lesson-section scroll-mt-24 p-7"><p className="academy-section-kicker">Knowledge Check</p><h2 className="mt-2 text-2xl font-black text-slate-950">Check your statistical reasoning</h2><p className="mt-3 text-sm">Complete all four questions. Three correct answers meet the lesson knowledge-check target.</p>
            <div className="mt-7 space-y-6">{questions.map((q,i)=><fieldset key={i} className="border-b border-slate-200 pb-5"><legend className="font-bold text-slate-950">{i+1}. {q.question}</legend><div className="mt-3 space-y-2">{q.options.map((option,j)=><label key={j} className={`flex cursor-pointer gap-3 rounded-xl border p-3 text-sm ${answers[i]===j?"border-indigo-600 bg-indigo-50":"border-slate-200"}`}><input type="radio" name={`ai-statistics-question-${i}`} checked={answers[i]===j} onChange={()=>{setAnswers(old=>({...old,[i]:j}));setChecked(false);setSaveStatus("idle")}} className="accent-indigo-700"/><span>{option}</span></label>)}</div>{checked&&<p className="mt-3 text-sm font-semibold text-indigo-800">{q.why}</p>}</fieldset>)}</div>
            <div className="mt-5 flex flex-wrap gap-3"><button type="button" disabled={!complete} onClick={()=>setChecked(true)} className="rounded-xl bg-indigo-700 px-5 py-3 font-black text-white disabled:opacity-40">Check answers</button><button type="button" onClick={()=>{setAnswers({});setChecked(false);setSaveStatus("idle")}} className="rounded-xl border border-indigo-200 px-5 py-3 font-black text-indigo-800">Try again</button></div>
            {checked&&<p role="status" className="mt-4 rounded-xl bg-indigo-50 p-4 font-black text-indigo-950">Score: {score}/4 — {score>=3?"Knowledge-check target met":"Review and retry"}</p>}
            <div className="mt-5 rounded-xl border border-indigo-200 bg-indigo-50 p-5"><h3 className="font-black text-indigo-950">Save progress to your account</h3>{saved&&<p className="mt-2 text-sm">Previously saved: {saved.score}/{saved.total_questions}</p>}{!user&&!authLoading&&<Link to="/login" className="mt-3 inline-block font-bold text-indigo-700 underline">Sign in to save</Link>}{user&&<button type="button" disabled={!checked||saveStatus==="saving"||saveStatus==="saved"} onClick={handleSave} className="mt-3 rounded-xl bg-indigo-700 px-4 py-2 font-bold text-white disabled:opacity-40">{saveStatus==="saving"?"Saving...":saveStatus==="saved"?"Saved":"Save lesson result"}</button>}{saveStatus==="saved"&&<p role="status" className="mt-3 text-sm font-bold text-emerald-900">Saved to your account.</p>}{error&&<p role="alert" className="mt-3 text-sm font-bold text-rose-800">{error}</p>}</div>
          </section>
          <section className="academy-lesson-section p-7"><p className="academy-section-kicker">Portfolio Evidence</p><h2 className="mt-2 text-2xl font-black text-slate-950">Build a sensor-data quality report</h2><p className="mt-4 leading-8">Document at least six simulated sensor readings. Plot the data, calculate mean, median, population standard deviation, and range, then add an unusual reading. Explain the effect, possible causes, and why you should validate a reading before excluding it. Include Python code and a practical data-testing plan.</p><div className="mt-6 flex flex-wrap gap-3"><Link to="/schools/artificial-intelligence/ai-foundations/module-1/lesson-6" className="rounded-xl border border-indigo-200 px-5 py-3 font-bold text-indigo-800">← Lesson 6</Link><Link to="/schools/artificial-intelligence/ai-foundations" className="rounded-xl bg-indigo-700 px-5 py-3 font-bold text-white">Course overview</Link></div></section>
        </div>
      </div>
    </div>
  </main>;
}
