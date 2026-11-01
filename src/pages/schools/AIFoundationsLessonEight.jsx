import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext.jsx";
import { getAiLessonProgress, saveAiLessonProgress } from "../../services/aiLessonProgress.js";
import MathematicalDeepDive from "../../components/learning/MathematicalDeepDive.jsx";
import CodingAndLumineryLab from "../../components/learning/CodingAndLumineryLab.jsx";
import RelatedLibraryResources from "../../components/learning/RelatedLibraryResources.jsx";

// Real recorded measurements from the scikit-learn Iris dataset (cm), using its
// zero-based original row IDs. This is a 12-record educational subset, NOT a
// test set or an accuracy evaluation. Source: scikit-learn.datasets.load_iris()
// Dataset provenance: UCI Iris, doi:10.24432/C56C76.
const irisRows = [
 {id:0,species:"setosa",sepal:5.1,petal:1.4},
 {id:1,species:"setosa",sepal:4.9,petal:1.4},
 {id:10,species:"setosa",sepal:5.4,petal:1.5},
 {id:25,species:"setosa",sepal:5.0,petal:1.6},
 {id:50,species:"versicolor",sepal:7.0,petal:4.7},
 {id:51,species:"versicolor",sepal:6.4,petal:4.5},
 {id:75,species:"versicolor",sepal:6.6,petal:4.4},
 {id:90,species:"versicolor",sepal:5.5,petal:4.4},
 {id:100,species:"virginica",sepal:6.3,petal:6.0},
 {id:101,species:"virginica",sepal:5.8,petal:5.1},
 {id:125,species:"virginica",sepal:7.2,petal:6.0},
 {id:149,species:"virginica",sepal:5.9,petal:5.1},
];
const speciesColors={setosa:"#2563eb",versicolor:"#059669",virginica:"#a855f7"};
const questions=[
 {question:"For training minimum 4 and maximum 8, what is min–max scaling of x = 6?",options:["0.25","0.50","0.75"],answer:1,why:"(6 − 4)/(8 − 4) = 2/4 = 0.5."},
 {question:"If training mean is 5 and standard deviation is 1, what is the z-score of x = 7?",options:["2","5","7"],answer:0,why:"z = (7 − 5)/1 = 2, meaning two training standard deviations above the mean."},
 {question:"When should feature-scaling statistics be computed for an ML model?",options:["On train and test combined","On training data only","On the test set only"],answer:1,why:"Fitting preprocessing on test data leaks information from the held-out set."},
 {question:"If a new petal measurement is greater than the maximum in the fitting data, what can happen under min–max scaling?",options:["The scaled value can exceed 1","The scaled value must equal 1","The measurement becomes invalid"],answer:0,why:"Without clipping, values above the fitted maximum scale above 1."}
];

export default function AIFoundationsLessonEight(){
 const {user,loading:authLoading}=useAuth();
 const [method,setMethod]=useState("minmax");
 const [speciesFilter,setSpeciesFilter]=useState("all");
 const [answers,setAnswers]=useState({});
 const [checked,setChecked]=useState(false);
 const [saved,setSaved]=useState(null);
 const [saveStatus,setSaveStatus]=useState("idle");
 const [error,setError]=useState("");
 const fit={};
 for(const key of ["sepal","petal"]){
  const nums=irisRows.map(r=>r[key]);
  const avg=nums.reduce((a,b)=>a+b,0)/nums.length;
  fit[key]={min:Math.min(...nums),max:Math.max(...nums),mean:avg,sd:Math.sqrt(nums.reduce((sum,x)=>sum+(x-avg)**2,0)/nums.length)};
 }
 const transform=(value,key)=>{
   const s=fit[key];
   return method==="minmax"?(s.max===s.min?0:(value-s.min)/(s.max-s.min)):(s.sd===0?0:(value-s.mean)/s.sd);
 };
 const filtered=irisRows.filter(row=>speciesFilter==="all"||row.species===speciesFilter);
 const domain=method==="minmax"?[-0.2,1.2]:[-2.5,2.5];
 const graphX=value=>66+(value-domain[0])/(domain[1]-domain[0])*476;
 const graphY=value=>288-(value-domain[0])/(domain[1]-domain[0])*220;
 const ticks=method==="minmax"?[0,0.25,0.5,0.75,1]:[-2,-1,0,1,2];
 const score=questions.reduce((s,q,i)=>s+(answers[i]===q.answer?1:0),0);
 const allAnswered=questions.every((_,i)=>answers[i]!==undefined);

 useEffect(()=>{
  let active=true;setSaved(null);
  if(!user?.id)return()=>{active=false};
  getAiLessonProgress(user.id,"ai-foundations-m1-l8").then(result=>{if(active)setSaved(result)}).catch(()=>{if(active)setError("Could not load Lesson 8 account progress.")});
  return()=>{active=false};
 },[user?.id]);
 async function handleSave(){
  if(!user?.id||!checked||!allAnswered)return;
  setSaveStatus("saving");setError("");
  try{const result=await saveAiLessonProgress(user.id,score,questions.length,"ai-foundations-m1-l8");setSaved(result);setSaveStatus("saved")}
  catch{setSaveStatus("error");setError("Could not save Lesson 8. Check your connection and the multi-lesson Supabase configuration.")}
 }
 return <main className="academy-modern min-h-screen pb-20 text-slate-700">
  <div className="h-1 bg-gradient-to-r from-indigo-700 via-blue-600 to-emerald-500"/>
  <div className="mx-auto max-w-6xl px-5 py-8">
   <nav aria-label="Course navigation" className="flex flex-wrap gap-2 text-sm font-bold text-indigo-700"><Link to="/schools/artificial-intelligence">School of AI</Link><span>/</span><Link to="/schools/artificial-intelligence/ai-foundations">AI Foundations</Link><span>/</span><span className="text-slate-600">Module 1 · Lesson 8</span></nav>
   <header className="mt-6 rounded-3xl bg-gradient-to-br from-blue-800 via-indigo-800 to-slate-950 p-8 text-white shadow-xl md:p-12">
    <p className="text-sm font-black uppercase tracking-widest text-cyan-200">SkillBridge AI Foundations · Module 1</p>
    <h1 className="mt-4 text-4xl font-black md:text-5xl">Feature Scaling with Real Iris Measurements</h1>
    <p className="mt-5 max-w-3xl text-lg leading-9 text-blue-100">Explore real flower measurements to understand min–max normalization and z-score standardization, with mathematical proofs, a live scatterplot, Python, and responsible training/test practices.</p>
    <div className="mt-6 flex flex-wrap gap-2 text-xs font-bold"><span className="rounded-full bg-white/15 px-4 py-2">70–85 minutes</span><span className="rounded-full bg-white/15 px-4 py-2">Real UCI Iris dataset</span><span className="rounded-full bg-white/15 px-4 py-2">Statistics × Python × Visualization</span></div>
   </header>
   <nav className="academy-mini-nav mt-6 flex flex-wrap gap-2" aria-label="Lesson sections"><a href="#concepts">Deep notes</a><a href="#mathematics">Mathematics</a><a href="#graph">Real-data graph</a><a href="#coding">Python + Luminery</a><a href="#assessment">Assessment</a></nav>
   <div className="mt-8 grid items-start gap-7 lg:grid-cols-[280px_minmax(0,1fr)]">
    <aside className="space-y-5 lg:sticky lg:top-24">
     <section className="overflow-hidden rounded-3xl border border-slate-200 bg-white"><h2 className="bg-emerald-800 px-5 py-4 font-black text-white">Essential Vocabulary</h2><dl className="space-y-4 p-5 text-sm leading-7">{[
      ["Feature","A measurable input, such as sepal length or petal length."],
      ["Min–max normalization","Map values using a fitted minimum and maximum."],
      ["Z-score standardization","Center using a fitted mean and scale by a fitted standard deviation."],
      ["Scatterplot","Points representing observations and relationships between two variables."],
      ["Fitting","Estimating preprocessing parameters from a designated dataset."],
      ["Data leakage","Allowing held-out test observations to influence the fitted preprocessing."],
      ["Population standard deviation","Square root of mean squared deviation across the specified fitting group."],
      ["Generalization","Predicting meaningfully on unseen examples, not just the fitted data."]
     ].map(([term,definition])=><div key={term}><dt className="font-black text-slate-950">{term}</dt><dd>{definition}</dd></div>)}</dl></section>
     <section className="overflow-hidden rounded-3xl border border-slate-200 bg-white"><h2 className="bg-blue-800 px-5 py-4 font-black text-white">Key Mathematics</h2><div className="space-y-3 p-4 font-mono text-sm"><p className="rounded-xl bg-slate-950 p-3 text-cyan-200">x′ = (x − min)/(max − min)</p><p className="rounded-xl bg-slate-950 p-3 text-cyan-200">z = (x − mean)/σ</p><p className="rounded-xl bg-slate-950 p-3 text-cyan-200">Fit on training data only</p></div></section>
     <section className="rounded-3xl border border-slate-200 bg-white p-5 text-sm"><h2 className="font-black text-slate-950">Account progress</h2><p className="mt-2">{saved?`Saved score: ${saved.score}/${saved.total_questions}`:"No saved result loaded for Lesson 8."}</p></section>
    </aside>
    <div className="min-w-0 space-y-7">
     <section id="concepts" className="academy-lesson-section scroll-mt-24 p-7">
      <p className="academy-section-kicker">Essential Question</p><h2 className="mt-2 text-2xl font-black text-slate-950">Why should we scale real features before some machine-learning algorithms?</h2>
      <p className="mt-4 leading-8">The Iris dataset contains actual recorded measurements of iris flowers, including sepal and petal lengths in centimeters and their species labels. These are real observations rather than fabricated robot readings. The full dataset has 150 records and four continuous measurements per flower. Our graph uses 12 specifically identified records from the scikit-learn version so you can examine real data without downloading a file.</p>
      <p className="mt-4 leading-8"><strong>Min–max scaling</strong> subtracts the fitting minimum and divides by the fitting range. <strong>Standardization</strong> subtracts the fitting mean and divides by the fitting standard deviation. Both are affine transformations (when the denominator is nonzero); they preserve the ordering of a feature while changing its numerical representation. A z-score is not a probability.</p>
      <p className="mt-4 leading-8">Feature scaling particularly matters for algorithms using distances and regularized or gradient-based optimization. Decision trees often do not need scaling. Scaling does not by itself remove unusual observations, fix bad labels, or guarantee better predictive accuracy.</p>
      <div className="mt-5 rounded-2xl bg-indigo-50 p-5"><h3 className="font-black text-indigo-950">Real-data provenance and responsible evaluation</h3><ol className="mt-3 list-inside list-decimal space-y-2 text-sm leading-7"><li>Original Iris measurements were collected by Edgar Anderson and used in Fisher's 1936 study.</li><li>These 12 examples are selected real dataset rows, used for visualization rather than a representative random sample.</li><li>The visual demonstration fits scaling statistics to these 12 rows only; species filtering does not refit them.</li><li>For an actual predictive model, split train/test first, fit scalers on training data only, then transform held-out data.</li></ol><p className="mt-4 text-sm font-bold text-indigo-900">Source: <a href="https://archive.ics.uci.edu/dataset/53/iris" target="_blank" rel="noreferrer" className="underline">UCI Machine Learning Repository — Iris (CC BY 4.0)</a>. Python uses scikit-learn's load_iris copy; its description documents two corrected records compared with the UCI version. Neither corrected row is among these 12 examples.</p></div>
     </section>
     <div id="mathematics" className="scroll-mt-24"><MathematicalDeepDive title="Scaling real flower measurements step by step"
      introduction="The calculations below use recorded sepal and petal measurements from specific rows of the Iris dataset. We fit the scaling parameters to the explicitly selected 12-row teaching subset—not to an unseen test set."
      examples={[
       {title:"Min–max scaling on real sepal lengths",question:"The displayed 12 flowers have sepal lengths ranging from 4.9 to 7.2 cm. Scale the recorded 5.1 cm sepal length of row 0.",formula:"x′ = (5.1 − 4.9)/(7.2 − 4.9)",steps:["Compute difference from minimum: 5.1 − 4.9 = 0.2 cm.","Compute fitting range: 7.2 − 4.9 = 2.3 cm.","Divide 0.2/2.3 ≈ 0.087."],answer:"Scaled sepal length ≈ 0.087.",interpretation:"The scaled value has no units. It is based on the chosen fitting subset, not the global 150-row range."},
       {title:"Min–max scaling on real petal lengths",question:"The selected rows have petal lengths ranging from 1.4 to 6.0 cm. Scale row 50's 4.7 cm petal length.",formula:"x′ = (4.7 − 1.4)/(6.0 − 1.4)",steps:["Subtract training-subset minimum: 4.7 − 1.4 = 3.3.","Compute fitting range: 6.0 − 1.4 = 4.6.","Divide 3.3/4.6 ≈ 0.717."],answer:"Scaled petal length ≈ 0.717.",interpretation:"The feature's physical unit disappears after normalization. This does not establish a class probability."},
       {title:"Understand a z-score",question:"Suppose a training feature has mean 5.8 cm and standard deviation 0.7 cm. Standardize a new 7.2 cm measurement.",formula:"z = (7.2 − 5.8)/0.7",steps:["Subtract the training mean: 7.2 − 5.8 = 1.4 cm.","Divide by the training SD: 1.4/0.7 = 2.","Interpret the result as two training standard deviations above the mean."],answer:"z = 2 (unitless).",interpretation:"The 5.8 and 0.7 values are hypothetical training summary statistics for this calculation, not values claimed for the 12-row subset."},
       {title:"Prevent data leakage",question:"A training set has values [2,4,6] and a held-out test reading is 10. Compute the training-fitted min–max transform of the test reading.",formula:"(10 − min_train)/(max_train − min_train)",steps:["Fit on training values only: min_train = 2 and max_train = 6.","Transform the test value: (10 − 2)/(6 − 2) = 8/4.","Do not refit using the test value of 10."],answer:"Scaled test value = 2, which is greater than 1.",interpretation:"Test observations can fall outside the training range. Refitting on the test set would leak evaluation information."}
      ]}
      practice={[
       {question:"For the displayed Iris subset, scale sepal length 7.2 cm using min 4.9 and max 7.2.",solution:"(7.2 − 4.9)/(7.2 − 4.9) = 1."},
       {question:"Using petal range 1.4 to 6.0 cm, scale a petal length of 1.4 cm.",solution:"(1.4 − 1.4)/(6.0 − 1.4) = 0."},
       {question:"If fitted training mean is 4 and SD is 2, find the z-score of x = 1.",solution:"(1 − 4)/2 = −1.5."},
       {question:"Why must you not fit a scaler to a combined training and test dataset?",solution:"The test distribution would influence the transformation learned before evaluation, leaking information about held-out examples."}
      ]}/></div>
     <section id="graph" className="academy-lesson-section scroll-mt-24 p-7">
      <p className="academy-section-kicker">Interactive Graph · Recorded Measurements</p><h2 className="mt-2 text-2xl font-black text-slate-950">See how scaling transforms real observations</h2>
      <p className="mt-3 text-sm leading-7">Every dot represents one recorded iris flower. Change the scaling method or filter by species. The graph recomputes transformed coordinates from the same 12 actual measurements. The scaler parameters stay fitted to all 12 teaching rows when you filter.</p>
      <div className="mt-5 flex flex-wrap gap-4">
       <label className="flex-1 text-sm font-black text-slate-900">Transformation
        <select value={method} onChange={e=>setMethod(e.target.value)} className="mt-2 w-full rounded-xl border border-indigo-300 bg-white p-3"><option value="minmax">Min–max [0,1] on subset</option><option value="zscore">Z-score standardization on subset</option></select>
       </label>
       <label className="flex-1 text-sm font-black text-slate-900">Show species
        <select value={speciesFilter} onChange={e=>setSpeciesFilter(e.target.value)} className="mt-2 w-full rounded-xl border border-indigo-300 bg-white p-3"><option value="all">All three</option><option value="setosa">Setosa</option><option value="versicolor">Versicolor</option><option value="virginica">Virginica</option></select>
       </label>
      </div>
      <figure className="mt-5 rounded-2xl border border-slate-200 bg-white p-4"><figcaption className="font-black text-slate-900">Sepal length versus petal length — transformed real Iris observations</figcaption>
       <svg viewBox="0 0 620 340" className="mt-3 h-auto w-full" role="img" aria-label={`Scatterplot of ${filtered.length} observed Iris records with ${method==="minmax"?"min–max":"z-score"} scaled sepal and petal lengths.`}>
        <rect x="66" y="68" width="476" height="220" rx="4" fill="#f8fafc"/>
        {ticks.map(t=><g key={t}><line x1={graphX(t)} y1="68" x2={graphX(t)} y2="288" stroke="#cbd5e1"/><text x={graphX(t)} y="306" textAnchor="middle" fontSize="13" fill="#475569">{t}</text><line x1="66" y1={graphY(t)} x2="542" y2={graphY(t)} stroke="#cbd5e1"/><text x="53" y={graphY(t)+4} textAnchor="end" fontSize="13" fill="#475569">{t}</text></g>)}
        {filtered.map(row=><circle key={row.id} cx={graphX(transform(row.sepal,"sepal"))} cy={graphY(transform(row.petal,"petal"))} r="7" stroke="white" strokeWidth="2" fill={speciesColors[row.species]}><title>{`Iris row ${row.id}, ${row.species}: sepal ${row.sepal} cm, petal ${row.petal} cm`}</title></circle>)}
        <text x="310" y="329" fontSize="14" fill="#334155" textAnchor="middle">Sepal length (scaled)</text>
        <text x="17" y="180" fontSize="13" fill="#334155" textAnchor="middle" transform="rotate(-90 17 180)">Petal length (scaled)</text>
       </svg>
       <div className="mt-2 flex flex-wrap gap-4 text-sm font-bold">{Object.entries(speciesColors).map(([label,color])=><span key={label} className="flex items-center gap-2"><span aria-hidden="true" className="inline-block h-3 w-3 rounded-full" style={{backgroundColor:color}}/>{label}</span>)}</div>
      </figure>
      <div className="mt-5 grid gap-3 sm:grid-cols-2">{["sepal","petal"].map(key=><div key={key} className="rounded-xl bg-slate-100 p-4 text-sm"><p className="font-black capitalize text-slate-900">{key} length · selected 12 records</p><p className="mt-2">Min: {fit[key].min.toFixed(2)} cm · Max: {fit[key].max.toFixed(2)} cm</p><p className="mt-1">Mean: {fit[key].mean.toFixed(3)} cm · Population SD: {fit[key].sd.toFixed(3)} cm</p></div>)}</div>
      <div className="mt-5 overflow-x-auto"><table className="w-full border-collapse text-sm"><thead><tr className="bg-slate-900 text-white"><th className="p-3 text-left">Source row</th><th className="p-3 text-left">Species</th><th className="p-3 text-left">Sepal (cm)</th><th className="p-3 text-left">Petal (cm)</th><th className="p-3 text-left">Scaled sepal</th><th className="p-3 text-left">Scaled petal</th></tr></thead><tbody>{filtered.map(row=><tr key={row.id} className="border-b border-slate-200"><td className="p-3">{row.id}</td><td className="p-3 capitalize">{row.species}</td><td className="p-3">{row.sepal.toFixed(1)}</td><td className="p-3">{row.petal.toFixed(1)}</td><td className="p-3">{transform(row.sepal,"sepal").toFixed(3)}</td><td className="p-3">{transform(row.petal,"petal").toFixed(3)}</td></tr>)}</tbody></table></div>
      <p className="mt-4 text-sm leading-7"><strong>Explore:</strong> Do three species separate cleanly using these two features? What changes after scaling, and what stays the same? Does scaling by itself train a classifier? Use the full dataset and a genuine held-out split before drawing predictive-performance conclusions.</p>
     </section>
     <section id="connection-lab" className="academy-lesson-section scroll-mt-24 p-7">
      <p className="academy-section-kicker">Mathematics × Python × AI × Robotics × Luminery</p>
      <h2 className="mt-2 text-2xl font-black text-slate-950">Connection Lab: Scale features without losing physical meaning</h2>
      <p className="mt-4 leading-8">A real iris flower's sepal and petal lengths are measured in centimeters. The same mathematical transformation can be applied to a robot's distance and speed features, but scaled values are dimensionless and cannot be used directly as physical stopping distances. This is a conceptual transfer exercise, not a motor-control program.</p>
      <div className="mt-5 grid gap-4 md:grid-cols-2">
       <div className="rounded-2xl border border-indigo-200 bg-indigo-50 p-5"><h3 className="font-black text-indigo-950">1. Mathematical model</h3><p className="mt-2 text-sm leading-7">For the selected real Iris rows, the petal-length minimum is 1.4 cm and maximum is 6.0 cm. Transform 4.7 cm as (4.7 − 1.4)/(6.0 − 1.4) ≈ 0.717. The result has no centimeters because the units cancel.</p></div>
       <div className="rounded-2xl border border-sky-200 bg-sky-50 p-5"><h3 className="font-black text-sky-950">2. Python computation</h3><p className="mt-2 text-sm leading-7">Use the Python lab below to load the authentic Iris observations, select sepal and petal length, fit MinMaxScaler on a clearly defined subset, and compare its output with the hand calculation.</p></div>
       <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5"><h3 className="font-black text-emerald-950">3. AI connection</h3><p className="mt-2 text-sm leading-7">Distance-based models such as k-nearest neighbors can be influenced by differences in feature scale. Split training and test data first, then fit the scaler on training data only. Scaling is preprocessing, not an AI prediction.</p></div>
       <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5"><h3 className="font-black text-amber-950">4. Robotics connection</h3><p className="mt-2 text-sm leading-7">A robot might measure distance in centimeters and wheel speed in meters per second. A learned model could consume scaled versions, but a deterministic stop rule and physical safety limits must still use validated physical measurements and units.</p></div>
      </div>
      <div className="mt-5 rounded-2xl bg-slate-100 p-5"><h3 className="font-black text-slate-950">5. Mini-experiment and prediction</h3><p className="mt-2 text-sm leading-7">In the interactive graph above, switch from min–max scaling to z-score standardization. Predict whether the species labels or relative ordering of sepal lengths will change. Then filter to one species and verify that the fitted statistics stay unchanged. Record one observation that supports your prediction.</p></div>
      <div className="mt-4 rounded-2xl border border-slate-200 p-5"><h3 className="font-black text-slate-950">6. Transfer and reflection</h3><ol className="mt-3 list-inside list-decimal space-y-2 text-sm leading-7"><li>Explain why a normalized value of 0.717 is not 0.717 cm or a 71.7% probability.</li><li>Describe what would go wrong if a robot treated normalized distance as centimeters.</li><li>Explain why a held-out flower must not influence the scaler fitted for an AI evaluation.</li><li>Identify one limitation of transferring insights from flowers to real robot sensor data.</li></ol><p className="mt-4 text-sm font-semibold text-slate-700">Evidence: Submit a graph screenshot or recorded values, your Python output, one verified calculation, and a short safety and leakage explanation. The lab does not automatically mark mastery or operate physical hardware.</p></div>
     </section>
     <div id="coding" className="scroll-mt-24"><CodingAndLumineryLab
      title="Reproduce the real-data analysis in Python"
      introduction="scikit-learn provides the Iris dataset directly, so no external video or data-service API key is necessary. Download or install scikit-learn in your Python workspace. Run this code locally to obtain real measurements and fit two scalers without test leakage."
      code={`from sklearn.datasets import load_iris
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import MinMaxScaler, StandardScaler

iris = load_iris()
X = iris.data[:, [0, 2]]  # sepal and petal length, cm
y = iris.target
rows = [0, 1, 10, 25, 50, 51, 75, 90, 100, 101, 125, 149]

print("Real measurements for row 0:", X[0].tolist())
mini = X[rows]
scaled = MinMaxScaler().fit_transform(mini)
print("Subset scaled row 0:", scaled[0].round(3).tolist())

X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42, stratify=y
)
scaler = StandardScaler()
X_train_scaled = scaler.fit_transform(X_train)
X_test_scaled = scaler.transform(X_test)
print("Training records:", len(X_train))
print("Test records:", len(X_test))`}
      expectedOutput={`Real measurements for row 0: [5.1, 1.4]
Subset scaled row 0: [0.087, 0.0]
Training records: 120
Test records: 30`}
      prediction={{question:"In the 12-record demonstration, the lowest recorded petal length is 1.4 cm. What is its min–max scaled value?",options:["0","0.5","1"],correctIndex:0,retryHint:"Subtract the minimum first. What happens when the reading equals that minimum?",explanation:"(1.4 − 1.4)/(6.0 − 1.4) = 0. The value is the lower endpoint of the fitted subset range."}}
      challenges={["Compare the full-dataset min and max with the selected 12-row subset statistics.","Run the Python example; verify that the first displayed measurement is from a real flower.","Use StandardScaler on the training split and explain what the mean of transformed training features should be.","Explain what information would leak if scaler.fit were called before the train/test split."]}
      hints={["Keep real data values and their physical units separate from transformed unitless values.","For min–max scaling, the training minimum maps to zero and training maximum to one.","For standardization, subtract training mean and divide by training standard deviation.","The test set must remain unseen when the scaler learns its parameters."]}
      reflection="How would you choose a scaling approach for a real dataset containing both flower measurements and much larger-valued features, and how could you prove your evaluation avoided leakage?"
     /></div>
     <RelatedLibraryResources title="Deepen your Data & AI mathematics" description="Use the academy's existing notes on feature quality, statistics, and responsible model evaluation." resources={[{topic:"Knowledge Library",title:"Data & AI Library",why:"Explore preprocessing, statistical reasoning, and machine-learning fundamentals.",path:"/library/data-ai"},{topic:"Previous lesson",title:"Data Distributions, Variability, and Outliers",why:"Review why data ranges and unusual observations matter before fitting a scaler.",path:"/schools/artificial-intelligence/ai-foundations/module-1/lesson-7"}]}/>
     <section id="assessment" className="academy-lesson-section scroll-mt-24 p-7"><p className="academy-section-kicker">Knowledge Check</p><h2 className="mt-2 text-2xl font-black text-slate-950">Prove you understand feature scaling</h2><p className="mt-3 text-sm leading-7">Complete all four questions; at least three correct answers meet this knowledge-check target.</p>
      <div className="mt-7 space-y-6">{questions.map((q,i)=><fieldset key={i} className="border-b border-slate-200 pb-5"><legend className="font-bold text-slate-950">{i+1}. {q.question}</legend><div className="mt-3 space-y-2">{q.options.map((option,j)=><label key={j} className={`flex cursor-pointer gap-3 rounded-xl border p-3 text-sm ${answers[i]===j?"border-indigo-600 bg-indigo-50":"border-slate-200"}`}><input type="radio" name={`ai-scaling-question-${i}`} checked={answers[i]===j} onChange={()=>{setAnswers(old=>({...old,[i]:j}));setChecked(false);setSaveStatus("idle")}} className="accent-indigo-700"/><span>{option}</span></label>)}</div>{checked&&<p className="mt-3 text-sm font-semibold text-indigo-800">{q.why}</p>}</fieldset>)}</div>
      <div className="mt-5 flex flex-wrap gap-3"><button type="button" disabled={!allAnswered} onClick={()=>setChecked(true)} className="rounded-xl bg-indigo-700 px-5 py-3 font-black text-white disabled:opacity-40">Check answers</button><button type="button" onClick={()=>{setAnswers({});setChecked(false);setSaveStatus("idle")}} className="rounded-xl border border-indigo-200 px-5 py-3 font-black text-indigo-800">Try again</button></div>
      {checked&&<p role="status" className="mt-4 rounded-xl bg-indigo-50 p-4 font-black text-indigo-950">Score: {score}/4 — {score>=3?"Knowledge-check target met":"Review and try again"}</p>}
      <div className="mt-5 rounded-xl border border-indigo-200 bg-indigo-50 p-5"><h3 className="font-black text-indigo-950">Save result to your account</h3>{saved&&<p className="mt-2 text-sm">Previously saved: {saved.score}/{saved.total_questions}</p>}{!user&&!authLoading&&<Link to="/login" className="mt-3 inline-block font-bold text-indigo-700 underline">Sign in to save</Link>}{user&&<button type="button" disabled={!checked||saveStatus==="saving"||saveStatus==="saved"} onClick={handleSave} className="mt-3 rounded-xl bg-indigo-700 px-4 py-2 font-bold text-white disabled:opacity-40">{saveStatus==="saving"?"Saving...":saveStatus==="saved"?"Saved":"Save lesson result"}</button>}{saveStatus==="saved"&&<p role="status" className="mt-3 text-sm font-bold text-emerald-900">Saved to your account.</p>}{error&&<p role="alert" className="mt-3 text-sm font-bold text-rose-800">{error}</p>}</div>
     </section>
     <section className="academy-lesson-section p-7"><p className="academy-section-kicker">Portfolio Evidence</p><h2 className="mt-2 text-2xl font-black text-slate-950">Real-data scaling and evaluation report</h2><p className="mt-4 leading-8">Use the full 150-row Iris dataset. Split into training and held-out test sets, fit your chosen scaler on the training set, transform both sets without leakage, and make a graph of at least two features. Show the exact scaler parameters, one worked transformation, and one limitation of your analysis.</p><div className="mt-6 flex flex-wrap gap-3"><Link to="/schools/artificial-intelligence/ai-foundations/module-1/lesson-7" className="rounded-xl border border-indigo-200 px-5 py-3 font-bold text-indigo-800">← Lesson 7</Link><Link to="/schools/artificial-intelligence/ai-foundations" className="rounded-xl bg-indigo-700 px-5 py-3 font-bold text-white">Course overview</Link></div></section>
    </div>
   </div>
  </div>
 </main>;
}
