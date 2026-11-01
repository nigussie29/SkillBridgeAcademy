import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext.jsx";
import { getAiLessonProgress, saveAiLessonProgress } from "../../services/aiLessonProgress.js";
import MathematicalDeepDive from "../../components/learning/MathematicalDeepDive.jsx";
import CodingAndLumineryLab from "../../components/learning/CodingAndLumineryLab.jsx";
import RelatedLibraryResources from "../../components/learning/RelatedLibraryResources.jsx";

// Real observed values from scikit-learn's load_iris dataset. Each row keeps
// its original zero-based index. We train on three labeled reference flowers
// and investigate row 51 as a separate real observation, not a measured model
// accuracy claim. Dataset: https://archive.ics.uci.edu/dataset/53/iris
const reference = [
  {id:0,species:"setosa",sepal:5.1,petal:1.4},
  {id:50,species:"versicolor",sepal:7.0,petal:4.7},
  {id:100,species:"virginica",sepal:6.3,petal:6.0},
];
const realTest={id:51,species:"versicolor",sepal:6.4,petal:4.5};
const colors={setosa:"#2563eb",versicolor:"#059669",virginica:"#9333ea"};
const questions=[
 {question:"What mathematical expression gives Euclidean distance between two points (x₁,y₁) and (x₂,y₂)?",options:["√((x₂−x₁)²+(y₂−y₁)²)","(x₂−x₁)+(y₂−y₁)","(x₂+x₁)(y₂+y₁)"],answer:0,why:"Euclidean distance comes from the Pythagorean theorem applied to changes along both axes."},
 {question:"If two flowers have sepal lengths 7.0 and 6.4 cm and petal lengths 4.7 and 4.5 cm, what is their distance (to two decimals)?",options:["0.40 cm","0.63 cm","1.20 cm"],answer:1,why:"√((7.0−6.4)²+(4.7−4.5)²) = √(0.36+0.04) ≈ 0.63 cm."},
 {question:"What does a 1-nearest-neighbor classifier use to predict the class of a new observation?",options:["The label of the closest reference observation","The mean of all class labels","The largest feature value"],answer:0,why:"For k = 1, the class assigned to the new observation is the class of its nearest labeled training example."},
 {question:"Why should feature scaling be fitted using training data only before a nearest-neighbor evaluation?",options:["To guarantee perfect predictions","To avoid test-data leakage","To remove the need for held-out testing"],answer:1,why:"Fitting a scaler on test examples allows information from the evaluation set to influence the model pipeline."},
];
export default function AIFoundationsLessonNine(){
 const {user,loading:authLoading}=useAuth();
 const [sepal,setSepal]=useState(realTest.sepal);
 const [petal,setPetal]=useState(realTest.petal);
 const [useScaling,setUseScaling]=useState(false);
 const [answers,setAnswers]=useState({});
 const [checked,setChecked]=useState(false);
 const [saved,setSaved]=useState(null);
 const [saveStatus,setSaveStatus]=useState("idle");
 const [error,setError]=useState("");
 const minSepal=Math.min(...reference.map(r=>r.sepal));
 const maxSepal=Math.max(...reference.map(r=>r.sepal));
 const minPetal=Math.min(...reference.map(r=>r.petal));
 const maxPetal=Math.max(...reference.map(r=>r.petal));
 // Demonstration scaler is fitted to reference rows only, never the test point.
 const scaled=(row)=>useScaling?[(row.sepal-minSepal)/(maxSepal-minSepal),(row.petal-minPetal)/(maxPetal-minPetal)]:[row.sepal,row.petal];
 const point={sepal,petal};
 const [px,py]=scaled(point);
 const ranking=reference.map(row=>{
  const [x,y]=scaled(row);
  const dx=px-x,dy=py-y;
  return {...row,distance:Math.hypot(dx,dy)};
 }).sort((a,b)=>a.distance-b.distance);
 const nearest=ranking[0];
 const graphX=x=>64+(x-4)/4*500;
 const graphY=y=>294-(y-0.5)/6.5*225;
 const score=questions.reduce((s,q,i)=>s+(answers[i]===q.answer?1:0),0);
 const answered=questions.every((_,i)=>answers[i]!==undefined);
 useEffect(()=>{
  let active=true;setSaved(null);
  if(!user?.id)return()=>{active=false};
  getAiLessonProgress(user.id,"ai-foundations-m1-l9").then(record=>{if(active)setSaved(record)}).catch(()=>{if(active)setError("Could not load Lesson 9 account progress.")});
  return()=>{active=false};
 },[user?.id]);
 async function save(){
  if(!user?.id||!checked||!answered)return;
  setSaveStatus("saving");setError("");
  try{
   const record=await saveAiLessonProgress(user.id,score,questions.length,"ai-foundations-m1-l9");
   setSaved(record);setSaveStatus("saved");
  }catch{setSaveStatus("error");setError("Could not save Lesson 9. Check the account connection and multi-lesson database constraints.")}
 }
 return <main className="academy-modern min-h-screen pb-20 text-slate-700">
  <div className="h-1 bg-gradient-to-r from-indigo-700 via-blue-600 to-cyan-500"/>
  <div className="mx-auto max-w-6xl px-5 py-8">
   <nav aria-label="Course navigation" className="flex flex-wrap gap-2 text-sm font-bold text-indigo-700"><Link to="/schools/artificial-intelligence">School of AI</Link><span>/</span><Link to="/schools/artificial-intelligence/ai-foundations">AI Foundations</Link><span>/</span><span className="text-slate-600">Module 1 · Lesson 9</span></nav>
   <header className="mt-6 rounded-3xl bg-gradient-to-br from-blue-800 via-indigo-800 to-slate-950 p-8 text-white shadow-xl md:p-12">
    <p className="text-sm font-black uppercase tracking-widest text-cyan-200">AI Foundations · Module 1 · Lesson 9</p>
    <h1 className="mt-4 text-4xl font-black md:text-5xl">Distance, Similarity, and Nearest-Neighbor AI</h1>
    <p className="mt-5 max-w-3xl text-lg leading-9 text-blue-100">Use authentic Iris measurements to turn algebra into a simple machine-learning classifier. Compare raw and scaled distances, watch the nearest flower change, and learn why data preparation matters.</p>
    <div className="mt-6 flex flex-wrap gap-2 text-xs font-bold"><span className="rounded-full bg-white/15 px-4 py-2">Real UCI Iris data</span><span className="rounded-full bg-white/15 px-4 py-2">Pythagorean theorem × Python</span><span className="rounded-full bg-white/15 px-4 py-2">Interactive graph</span></div>
   </header>
   <nav aria-label="Lesson sections" className="academy-mini-nav mt-6 flex flex-wrap gap-2"><a href="#concepts">Deep notes</a><a href="#mathematics">Worked mathematics</a><a href="#graph">Distance graph</a><a href="#coding">Python + Luminery</a><a href="#assessment">Assessment</a></nav>
   <div className="mt-8 grid items-start gap-7 lg:grid-cols-[280px_minmax(0,1fr)]">
    <aside className="space-y-5 lg:sticky lg:top-24">
     <section className="overflow-hidden rounded-3xl border border-slate-200 bg-white"><h2 className="bg-emerald-800 px-5 py-4 font-black text-white">Vocabulary</h2><dl className="space-y-4 p-5 text-sm leading-7">{[
      ["Euclidean distance","Straight-line distance between numerical feature vectors."],
      ["Training reference","A labeled example available when predicting an unfamiliar input."],
      ["1-nearest neighbor","A classifier that assigns the closest training example's label."],
      ["Feature scale","The numerical units and ranges used to represent a feature."],
      ["Data leakage","Using evaluation examples to learn model parameters or preprocessing statistics."],
      ["Test observation","A labeled example held out from the reference set for evaluation."]
     ].map(([term,definition])=><div key={term}><dt className="font-black text-slate-950">{term}</dt><dd>{definition}</dd></div>)}</dl></section>
     <section className="overflow-hidden rounded-3xl border border-slate-200 bg-white"><h2 className="bg-blue-800 px-5 py-4 font-black text-white">Key Mathematics</h2><div className="space-y-3 p-4 font-mono text-sm"><p className="rounded-xl bg-slate-950 p-3 text-cyan-200">d = √(Δx² + Δy²)</p><p className="rounded-xl bg-slate-950 p-3 text-cyan-200">x′ = (x−min)/(max−min)</p><p className="rounded-xl bg-slate-950 p-3 text-cyan-200">ŷ = label of nearest point</p></div></section>
     <section className="rounded-3xl border border-slate-200 bg-white p-5 text-sm"><h2 className="font-black text-slate-950">Account progress</h2><p className="mt-2">{saved?`Saved result: ${saved.score}/${saved.total_questions}`:"No saved result loaded for Lesson 9."}</p></section>
    </aside>
    <div className="min-w-0 space-y-7">
     <section id="concepts" className="academy-lesson-section scroll-mt-24 p-7">
      <p className="academy-section-kicker">Essential Question</p><h2 className="mt-2 text-2xl font-black text-slate-950">How can geometric distance become a classification decision?</h2>
      <p className="mt-4 leading-8">Imagine representing each Iris flower as a point in a coordinate plane. The horizontal coordinate is sepal length (cm), and the vertical coordinate is petal length (cm). Flowers with similar measurements appear near each other. Given a new flower, a one-nearest-neighbor (1-NN) classifier finds the closest labeled reference flower and uses that flower's species as its prediction.</p>
      <p className="mt-4 leading-8">For two points (x₁,y₁) and (x₂,y₂), the Pythagorean theorem gives <strong>d = √((x₂−x₁)² + (y₂−y₁)²)</strong>. Distance is nonnegative and equals zero for identical feature pairs. When both features are measured in centimeters, the raw distance also has units of centimeters.</p>
      <p className="mt-4 leading-8">But raw distance may overemphasize a feature with a large numerical range. In Lesson 8, we learned to normalize numerical features. Here you can toggle min–max scaling using parameters fitted only to the three reference flowers, then observe whether the nearest neighbor changes.</p>
      <div className="mt-5 rounded-2xl bg-indigo-50 p-5"><h3 className="font-black text-indigo-950">Real dataset, honest evaluation</h3><p className="mt-3 text-sm leading-7">Reference rows 0 (setosa), 50 (versicolor), and 100 (virginica) are actual observations from the scikit-learn Iris dataset. The initial query is real row 51 (versicolor), intentionally excluded from the three references. This three-point demonstration is not a meaningful estimate of classification accuracy. A real ML evaluation needs many training examples, representative held-out data, a scaling pipeline fitted on training rows, and review of wrong predictions.</p><p className="mt-3 text-sm leading-7">Dataset source: <a href="https://archive.ics.uci.edu/dataset/53/iris" target="_blank" rel="noreferrer" className="font-bold text-indigo-700 underline">UCI Machine Learning Repository — Iris</a>.</p></div>
     </section>
     <div id="mathematics" className="scroll-mt-24"><MathematicalDeepDive title="Geometry of AI similarity" introduction="Trace every term of the distance formula before using code or moving the graph. The values below are actual recorded Iris features."
      examples={[
       {title:"Calculate distance to one Iris flower",question:"Row 51 has features (6.4,4.5) cm. Row 50 is (7.0,4.7) cm. Find their Euclidean distance.",formula:"d = √((7.0−6.4)²+(4.7−4.5)²)",steps:["Compute sepal difference 7.0−6.4=0.6 cm.","Compute petal difference 4.7−4.5=0.2 cm.","Square each difference: 0.36 and 0.04 cm².","Add 0.40 cm² and take the square root."],answer:"d = √0.40 ≈ 0.632 cm.",interpretation:"Row 50 is a real versicolor observation."},
       {title:"Compare competing neighbors",question:"Compare query (6.4,4.5) with virginica row 100 (6.3,6.0).",formula:"d = √((6.3−6.4)²+(6.0−4.5)²)",steps:["The sepal difference is −0.1 cm; the petal difference is 1.5 cm.","Square differences: 0.01 and 2.25 cm².","Add 2.26 cm² and calculate its square root.","Compare roughly 1.503 cm with 0.632 cm for row 50."],answer:"Row 50 is closer than row 100.",interpretation:"A nearest-neighbor prediction uses the smallest distance among all training references."},
       {title:"Scaling each dimension",question:"Reference sepal lengths are 5.1, 7.0, 6.3 cm and petal lengths are 1.4, 4.7, 6.0 cm. Scale query (6.4,4.5) using these reference ranges.",formula:"sepal′=(6.4−5.1)/1.9; petal′=(4.5−1.4)/4.6",steps:["Fit sepal range: min 5.1, max 7.0, range 1.9 cm.","Scaled sepal = 1.3/1.9 ≈ 0.684.","Fit petal range: min 1.4, max 6.0, range 4.6 cm.","Scaled petal = 3.1/4.6 ≈ 0.674."],answer:"Scaled query ≈ (0.684, 0.674).",interpretation:"Transform both reference and query with the same training-fitted parameters."},
       {title:"Distance is not probability",question:"If the closest distance is 0.632 cm, can we claim a 63.2% probability of being versicolor?",formula:"distance ≠ probability",steps:["Distance describes separation in the chosen feature space.","A nearest-neighbor label is chosen from the reference point with the smallest distance.","No probability calibration has been performed on these three training examples."],answer:"No. 0.632 cm is a distance, not a probability.",interpretation:"Do not convert a numeric similarity score into a confidence percentage without valid modeling."}
      ]}
      practice={[
       {question:"Calculate Euclidean distance between (0,0) and (3,4).",solution:"√(3²+4²) = √25 = 5 units."},
       {question:"Find the raw distance between (2,3) and (2,7).",solution:"√(0²+4²) = 4 units."},
       {question:"The training range is [10,30]. Scale a test observation 35.",solution:"(35−10)/(30−10)=25/20=1.25. Test data may scale above one without clipping."},
       {question:"Why not fit the scaler on all Iris observations before splitting the test set?",solution:"It would allow test data to influence preprocessing parameters, creating evaluation leakage."}
      ]}/></div>
     <section id="graph" className="academy-lesson-section scroll-mt-24 p-7">
      <p className="academy-section-kicker">Interactive Graph · Real Iris Dataset</p><h2 className="mt-2 text-2xl font-black text-slate-950">Find the nearest real flower</h2>
      <p className="mt-3 text-sm leading-7">The three colored points are real labeled Iris flowers; the black outlined point is the query. Colored lines connect the query to each reference, with the nearest connection emphasized. Change either measured feature or toggle scaling to see how the mathematical distances change.</p>
      <div className="mt-5 grid gap-4 sm:grid-cols-2">
       <label className="rounded-2xl bg-blue-50 p-4 text-sm font-black text-blue-950">Query sepal length: {sepal.toFixed(1)} cm<input className="mt-3 w-full accent-blue-700" type="range" min="4" max="8" step="0.1" value={sepal} onChange={e=>setSepal(Number(e.target.value))}/></label>
       <label className="rounded-2xl bg-violet-50 p-4 text-sm font-black text-violet-950">Query petal length: {petal.toFixed(1)} cm<input className="mt-3 w-full accent-violet-700" type="range" min="0.5" max="7" step="0.1" value={petal} onChange={e=>setPetal(Number(e.target.value))}/></label>
      </div>
      <label className="mt-4 flex items-center gap-3 rounded-xl border border-indigo-200 bg-indigo-50 p-4 text-sm font-bold text-indigo-950"><input type="checkbox" checked={useScaling} onChange={e=>setUseScaling(e.target.checked)} className="h-4 w-4 accent-indigo-700"/>Use min–max scaling fitted to the three reference flowers</label>
      <figure className="mt-5 overflow-hidden rounded-2xl border border-slate-200 bg-white p-4">
       <figcaption className="font-black text-slate-950">Measured feature space (centimeters)</figcaption>
       <svg viewBox="0 0 620 335" role="img" className="mt-3 h-auto w-full" aria-label={`Iris scatterplot with query sepal ${sepal.toFixed(1)} and petal ${petal.toFixed(1)} centimeters; nearest reference species ${nearest.species} under ${useScaling?"min-max scaled":"raw"} distance.`}>
        <rect x="64" y="69" width="500" height="225" fill="#f8fafc" rx="4"/>
        {[4,5,6,7,8].map(x=><g key={x}><line x1={graphX(x)} x2={graphX(x)} y1="69" y2="294" stroke="#cbd5e1"/><text x={graphX(x)} y="314" textAnchor="middle" fontSize="13" fill="#475569">{x}</text></g>)}
        {[1,2,3,4,5,6,7].map(y=><g key={y}><line x1="64" x2="564" y1={graphY(y)} y2={graphY(y)} stroke="#e2e8f0"/><text x="54" y={graphY(y)+4} textAnchor="end" fontSize="13" fill="#475569">{y}</text></g>)}
        {ranking.map(row=><line key={row.id} x1={graphX(sepal)} y1={graphY(petal)} x2={graphX(row.sepal)} y2={graphY(row.petal)} stroke={colors[row.species]} strokeWidth={row.id===nearest.id?4:2} strokeDasharray={row.id===nearest.id?"":"5 5"} opacity={row.id===nearest.id?1:0.55}/>)}
        {reference.map(row=><g key={row.id}><circle cx={graphX(row.sepal)} cy={graphY(row.petal)} r="9" fill={colors[row.species]} stroke="white" strokeWidth="2"/><text x={graphX(row.sepal)+11} y={graphY(row.petal)-9} fontSize="12" fontWeight="bold" fill={colors[row.species]}>{row.species}</text></g>)}
        <circle cx={graphX(sepal)} cy={graphY(petal)} r="10" fill="#0f172a" stroke="white" strokeWidth="3"/>
        <text x="315" y="332" fontSize="14" textAnchor="middle" fill="#334155">Sepal length (cm)</text>
        <text x="17" y="185" fontSize="13" textAnchor="middle" transform="rotate(-90 17 185)" fill="#334155">Petal length (cm)</text>
       </svg>
       <p className="mt-3 text-xs leading-6 text-slate-600">Position is always plotted in raw centimeters for interpretability; when scaling is checked, the distance ranking is computed in scaled coordinates. The line lengths on the displayed axes then differ from scaled numerical distances.</p>
      </figure>
      <div className="mt-5 grid gap-3 sm:grid-cols-3" aria-live="polite">{ranking.map((row,i)=><div key={row.id} className={`rounded-xl border p-4 ${i===0?"border-emerald-300 bg-emerald-50":"border-slate-200 bg-slate-50"}`}><p className="text-sm font-black capitalize" style={{color:colors[row.species]}}>{i+1}. {row.species}</p><p className="mt-2 font-mono text-xl font-black text-slate-900">{row.distance.toFixed(3)}</p><p className="mt-1 text-xs text-slate-600">{useScaling?"Scaled units":"cm"} · reference row {row.id}</p></div>)}</div>
      <p role="status" className="mt-5 rounded-xl bg-indigo-50 p-4 font-bold leading-7 text-indigo-950">1-NN prediction: <strong className="capitalize">{nearest.species}</strong>. {sepal===realTest.sepal&&petal===realTest.petal?`The original real held-out row 51 is versicolor; ${nearest.species==="versicolor"?"the example prediction matches":"the example prediction does not match"} its recorded label.`:"You have modified the query measurements; this point may no longer represent a real observed flower."}</p>
      <button type="button" className="mt-4 rounded-xl border border-indigo-300 px-4 py-2 font-bold text-indigo-800" onClick={()=>{setSepal(realTest.sepal);setPetal(realTest.petal);setUseScaling(false)}}>Restore real Iris row 51</button>
      <p className="mt-4 text-sm leading-7"><strong>Experiment:</strong> Change the petal length from 4.5 to 6.5 cm. Which reference becomes closest? Now enable scaling. Discuss how changing the measurement representation influences a distance-based algorithm.</p>
     </section>
     <div id="coding" className="scroll-mt-24"><CodingAndLumineryLab
      title="Compute 1-nearest-neighbor distances in Python"
      introduction="This complete program loads the authentic 150-row Iris dataset, uses three actual reference rows, and evaluates the separate row 51. It is instructional Python to run locally, not a browser execution."
      code={`from sklearn.datasets import load_iris
from math import dist

iris = load_iris()
features = iris.data[:, [0, 2]]
labels = iris.target
reference_rows = [0, 50, 100]
test_row = 51

query = features[test_row]
neighbors = sorted(
    (dist(query, features[i]), i, iris.target_names[labels[i]])
    for i in reference_rows
)
for distance, row, species in neighbors:
    print(f"{species}: {distance:.3f} cm (row {row})")
print("prediction:", neighbors[0][2])
print("actual:", iris.target_names[labels[test_row]])`}
      expectedOutput={`versicolor: 0.632 cm (row 50)
virginica: 1.503 cm (row 100)
setosa: 3.362 cm (row 0)
prediction: versicolor
actual: versicolor`}
      prediction={{question:"The query's distance to versicolor row 50 is about 0.632 cm and to virginica row 100 about 1.503 cm. Which label does 1-NN choose from these two candidates?",options:["Versicolor","Virginica","Neither, because a probability is missing"],correctIndex:0,retryHint:"Compare 0.632 and 1.503: the smallest nonnegative distance is the nearest.",explanation:"1-NN takes the label of the closest reference. The smaller distance is 0.632 cm, which belongs to versicolor."}}
      challenges={["Calculate the row 51 to row 50 distance by hand and confirm Python output.","Fit a MinMaxScaler on reference training rows only and compare nearest-neighbor rankings.","Increase the training reference set and evaluate the entire separate held-out test split.","Explain why a correct prediction on one held-out flower cannot establish model accuracy."]}
      hints={["Think of each flower as a two-dimensional point (sepal length, petal length).","Use differences in each coordinate, square them, add, and take the square root.","Compare distances across reference flowers; the shortest is chosen for k = 1.","Scale using training examples only, and judge generalization on separate held-out examples."]}
      reflection="If one feature were measured in millimeters and another in centimeters, how could unscaled Euclidean distance mislead the classifier? How would you evaluate that risk?"
     /></div>
     <RelatedLibraryResources title="Connect the classifier to Data & AI study" description="Review the real-dataset scaling lesson and extend your mathematical foundation." resources={[{topic:"Previous lesson",title:"Feature Scaling with Real Iris Measurements",why:"Understand how transformed inputs change distance calculations.",path:"/schools/artificial-intelligence/ai-foundations/module-1/lesson-8"},{topic:"Knowledge Library",title:"Data & AI Knowledge Library",why:"Continue into classification, preprocessing, and model validation.",path:"/library/data-ai"}]}/>
     <section id="assessment" className="academy-lesson-section scroll-mt-24 p-7"><p className="academy-section-kicker">Knowledge Check</p><h2 className="mt-2 text-2xl font-black text-slate-950">Test your distance reasoning</h2><p className="mt-3 text-sm">Answer all four questions. At least three correct answers meet the assessment target.</p>
      <div className="mt-7 space-y-6">{questions.map((q,i)=><fieldset key={i} className="border-b border-slate-200 pb-5"><legend className="font-bold text-slate-950">{i+1}. {q.question}</legend><div className="mt-3 space-y-2">{q.options.map((option,j)=><label key={j} className={`flex cursor-pointer gap-3 rounded-xl border p-3 text-sm ${answers[i]===j?"border-indigo-600 bg-indigo-50":"border-slate-200"}`}><input type="radio" name={`ai-neighbor-question-${i}`} checked={answers[i]===j} onChange={()=>{setAnswers(old=>({...old,[i]:j}));setChecked(false);setSaveStatus("idle")}} className="accent-indigo-700"/><span>{option}</span></label>)}</div>{checked&&<p className="mt-3 text-sm font-semibold text-indigo-800">{q.why}</p>}</fieldset>)}</div>
      <div className="mt-5 flex flex-wrap gap-3"><button type="button" disabled={!answered} onClick={()=>setChecked(true)} className="rounded-xl bg-indigo-700 px-5 py-3 font-black text-white disabled:opacity-40">Check answers</button><button type="button" onClick={()=>{setAnswers({});setChecked(false);setSaveStatus("idle")}} className="rounded-xl border border-indigo-200 px-5 py-3 font-black text-indigo-800">Try again</button></div>
      {checked&&<p role="status" className="mt-4 rounded-xl bg-indigo-50 p-4 font-black text-indigo-950">Score: {score}/4 — {score>=3?"Knowledge-check target met":"Review and try again"}</p>}
      <div className="mt-5 rounded-xl border border-indigo-200 bg-indigo-50 p-5"><h3 className="font-black text-indigo-950">Save progress to your account</h3>{saved&&<p className="mt-2 text-sm">Previously saved: {saved.score}/{saved.total_questions}</p>}{!user&&!authLoading&&<Link to="/login" className="mt-3 inline-block font-bold text-indigo-700 underline">Sign in to save</Link>}{user&&<button type="button" disabled={!checked||saveStatus==="saving"||saveStatus==="saved"} onClick={save} className="mt-3 rounded-xl bg-indigo-700 px-4 py-2 font-bold text-white disabled:opacity-40">{saveStatus==="saving"?"Saving...":saveStatus==="saved"?"Saved":"Save lesson result"}</button>}{saveStatus==="saved"&&<p role="status" className="mt-3 text-sm font-bold text-emerald-900">Saved to your account.</p>}{error&&<p role="alert" className="mt-3 text-sm font-bold text-rose-800">{error}</p>}</div>
     </section>
     <section className="academy-lesson-section p-7"><p className="academy-section-kicker">Portfolio Evidence</p><h2 className="mt-2 text-2xl font-black text-slate-950">Build and evaluate a real Iris nearest-neighbor classifier</h2><p className="mt-4 leading-8">Using the full dataset, construct a stratified train/test split, fit a MinMaxScaler on training features only, then train a 1-NN classifier. Evaluate on the held-out set using a confusion matrix and explain two mistakes or limitations. Compare scaled and raw distances and document reproducible Python code. Avoid overinterpreting the three-reference classroom demonstration.</p><div className="mt-6 flex flex-wrap gap-3"><Link to="/schools/artificial-intelligence/ai-foundations/module-1/lesson-8" className="rounded-xl border border-indigo-200 px-5 py-3 font-bold text-indigo-800">← Lesson 8</Link><Link to="/schools/artificial-intelligence/ai-foundations" className="rounded-xl bg-indigo-700 px-5 py-3 font-bold text-white">Course overview</Link></div></section>
    </div>
   </div>
  </div>
 </main>;
}
