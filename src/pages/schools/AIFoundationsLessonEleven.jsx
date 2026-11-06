import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext.jsx";
import { getAiLessonProgress, saveAiLessonProgress } from "../../services/aiLessonProgress.js";
import MathematicalDeepDive from "../../components/learning/MathematicalDeepDive.jsx";
import CodingAndLumineryLab from "../../components/learning/CodingAndLumineryLab.jsx";
import RelatedLibraryResources from "../../components/learning/RelatedLibraryResources.jsx";

// These measured values are reproducible with scikit-learn's Iris dataset, two
// features (sepal length, petal length), stratified 80/20 split (seed=42),
// StandardScaler fitted inside the training pipeline, and KNeighborsClassifier.
// They are NOT simulation, a representative benchmark, or calibrated confidence.
const results=[
  {k:1,train:119/120,test:26/30},{k:3,train:116/120,test:27/30},
  {k:5,train:116/120,test:27/30},{k:7,train:116/120,test:26/30},
  {k:9,train:115/120,test:28/30},{k:11,train:116/120,test:27/30},
  {k:15,train:108/120,test:27/30},{k:19,train:106/120,test:27/30},
  {k:25,train:107/120,test:27/30},{k:35,train:103/120,test:25/30},
  {k:55,train:102/120,test:23/30},{k:75,train:95/120,test:23/30},
  {k:99,train:77/120,test:18/30},{k:119,train:58/120,test:16/30}
];
const questions=[
 {question:"A 1-nearest-neighbor model scores 99.2% on training data but 86.7% on held-out data. What should you investigate?",options:["Possible overfitting","Guaranteed generalization","Missing test labels"],answer:0,why:"A large train/test performance gap is a warning sign that fit to training examples may not generalize. It is not definitive proof by itself."},
 {question:"When k becomes very large in a nearest-neighbor classifier, what can happen?",options:["The model always achieves perfect accuracy","The model may become too simple to capture class boundaries","All training labels disappear"],answer:1,why:"A large neighborhood mixes distant examples, potentially smoothing over genuine distinctions and causing underfitting."},
 {question:"Which data should be used to choose k while protecting a final unbiased evaluation?",options:["The final test set repeatedly","The complete dataset before splitting","A training-derived validation set or cross-validation"],answer:2,why:"Use validation or cross-validation for model selection and preserve the final test set for one final evaluation."},
 {question:"For 28 correct predictions out of 30 held-out samples, what is the accuracy rounded to one decimal place?",options:["90.0%","93.3%","96.7%"],answer:1,why:"28/30 = 0.93333..., so accuracy is 93.3% to one decimal place."}
];

export default function AIFoundationsLessonEleven(){
 const {user,loading:authLoading}=useAuth();
 const [k,setK]=useState(1);
 const [answers,setAnswers]=useState({});
 const [checked,setChecked]=useState(false);
 const [saved,setSaved]=useState(null);
 const [saveStatus,setSaveStatus]=useState("idle");
 const [error,setError]=useState("");
 const selected=results.find(row=>row.k===k)||results[0];
 const posX=(index)=>64+(index/(results.length-1))*518;
 const posY=(value)=>292-(value-0.45)/0.55*222;
 const trainPath=results.map((r,i)=>`${i===0?"M":"L"}${posX(i).toFixed(2)} ${posY(r.train).toFixed(2)}`).join(" ");
 const testPath=results.map((r,i)=>`${i===0?"M":"L"}${posX(i).toFixed(2)} ${posY(r.test).toFixed(2)}`).join(" ");
 const ix=results.findIndex(r=>r.k===k);
 const allAnswered=questions.every((_,i)=>answers[i]!==undefined);
 const score=questions.reduce((a,q,i)=>a+(answers[i]===q.answer?1:0),0);
 useEffect(()=>{
   let live=true;setSaved(null);
   if(!user?.id)return()=>{live=false};
   getAiLessonProgress(user.id,"ai-foundations-m1-l11").then(r=>{if(live)setSaved(r)}).catch(()=>{if(live)setError("Could not load Lesson 11 saved progress.")});
   return()=>{live=false};
 },[user?.id]);
 async function save(){
  if(!user?.id||!checked||!allAnswered)return;
  setSaveStatus("saving");setError("");
  try{const r=await saveAiLessonProgress(user.id,score,questions.length,"ai-foundations-m1-l11");setSaved(r);setSaveStatus("saved")}
  catch{setSaveStatus("error");setError("Could not save this lesson. Check network access and the AI lesson database configuration.")}
 }
 return <main className="academy-modern min-h-screen pb-20 text-slate-700">
  <div className="h-1 bg-gradient-to-r from-indigo-700 via-blue-600 to-emerald-500"/>
  <div className="mx-auto max-w-6xl px-5 py-8">
   <nav aria-label="Course navigation" className="flex flex-wrap gap-2 text-sm font-bold text-indigo-700"><Link to="/schools/artificial-intelligence">School of AI</Link><span>/</span><Link to="/schools/artificial-intelligence/ai-foundations">AI Foundations</Link><span>/</span><span>Module 1 · Lesson 11</span></nav>
   <header className="mt-6 rounded-3xl bg-gradient-to-br from-blue-800 via-indigo-800 to-slate-950 p-8 text-white shadow-xl md:p-12">
    <p className="text-sm font-black uppercase tracking-widest text-cyan-200">KingNigUs Academy · Real Data &amp; Mathematics</p>
    <h1 className="mt-4 text-4xl font-black md:text-5xl">Overfitting, Underfitting, and Generalization</h1>
    <p className="mt-5 max-w-3xl text-lg leading-9 text-blue-100">Why can a model remember training examples yet struggle with unfamiliar data? Explore authentic Iris results and discover how model complexity, validation, and honest testing work together.</p>
    <p className="mt-4 text-sm font-bold text-cyan-100">Real Iris dataset · 120 training flowers · 30 held-out test flowers · 14 measured model settings</p>
   </header>
   <nav aria-label="Lesson sections" className="academy-mini-nav mt-6 flex flex-wrap gap-2"><a href="#why">What and why</a><a href="#mathematics">Worked mathematics</a><a href="#graph">Interactive graph</a><a href="#connection-lab">Connection Lab</a><a href="#coding">Python &amp; Luminery</a><a href="#assessment">Assessment</a></nav>
   <div className="mt-8 grid items-start gap-7 lg:grid-cols-[280px_minmax(0,1fr)]">
    <aside className="space-y-5 lg:sticky lg:top-24">
     <section className="overflow-hidden rounded-3xl border border-slate-200 bg-white"><h2 className="bg-emerald-800 px-5 py-4 font-black text-white">Essential Vocabulary</h2><dl className="space-y-4 p-5 text-sm leading-7">{[
      ["Training data","Labeled examples a model learns from."],
      ["Test data","Separate held-out examples used to estimate performance after model selection."],
      ["Overfitting","Learning specifics of training data that do not transfer well to new examples."],
      ["Underfitting","A model too limited to capture important relationships in the data."],
      ["Generalization","The ability to perform well on genuinely unseen examples."],
      ["Model complexity","How flexible a model is in representing different patterns."],
      ["Cross-validation","Repeated training/validation partitions used to compare models on training-derived data."],
      ["Hyperparameter k","Number of neighbors considered in k-nearest-neighbor classification."]
     ].map(([term,meaning])=><div key={term}><dt className="font-black text-slate-950">{term}</dt><dd>{meaning}</dd></div>)}</dl></section>
     <section className="overflow-hidden rounded-3xl border border-slate-200 bg-white"><h2 className="bg-blue-800 px-5 py-4 font-black text-white">Useful Mathematics</h2><div className="space-y-3 p-4 font-mono text-sm"><p className="rounded-xl bg-slate-950 p-3 text-cyan-200">accuracy = correct / total</p><p className="rounded-xl bg-slate-950 p-3 text-cyan-200">gap = train accuracy − test accuracy</p><p className="rounded-xl bg-slate-950 p-3 text-cyan-200">error = 1 − accuracy</p></div></section>
     <section className="rounded-3xl border border-slate-200 bg-white p-5 text-sm"><h2 className="font-black text-slate-950">Account progress</h2><p className="mt-2">{saved?`Saved quiz: ${saved.score}/${saved.total_questions}`:"No saved Lesson 11 result loaded."}</p></section>
    </aside>
    <div className="min-w-0 space-y-7">
     <section id="why" className="academy-lesson-section scroll-mt-24 p-7">
      <p className="academy-section-kicker">Understand the Why</p><h2 className="mt-2 text-2xl font-black text-slate-950">Memorizing is not the same as learning a reusable pattern</h2>
      <p className="mt-4 leading-8">Imagine a student memorizing every answer to a practice examination. A perfect practice score does not guarantee understanding of a new exam. A machine-learning model can behave similarly: it may match nearly all training flowers but make more errors on new flowers. This is <strong>overfitting</strong>.</p>
      <p className="mt-4 leading-8">At the other extreme, imagine a student using one oversimplified rule for every problem. The rule misses important differences. A model that cannot represent the signal well may be <strong>underfitting</strong>. In both cases, the goal is not to maximize memorization; it is to choose a model that works on examples it has not seen before.</p>
      <div className="mt-5 grid gap-4 md:grid-cols-3">
       {[
        {name:"Underfitting",why:"Too little useful flexibility can cause poor performance even on training examples.",example:"For Iris, k = 119 considers nearly all 120 training samples, smoothing away many class boundaries.",question:"Why it matters: a simple model may miss real differences."},
        {name:"Possible overfitting",why:"A very flexible model can be extremely accurate on familiar training examples but less reliable on held-out ones.",example:"For this Iris experiment, k = 1 gets 119/120 correct in training but only 26/30 on the test set.",question:"Why it matters: the training score alone can be misleading."},
        {name:"Better generalization",why:"We evaluate candidate models on unseen validation observations and avoid information leakage.",example:"Select k using cross-validation on training data, then inspect the final held-out test result once.",question:"Why it matters: the score estimates transfer to new data rather than recall of old examples."}
       ].map(item=><article key={item.name} className="rounded-xl border border-slate-200 bg-slate-50 p-5"><h3 className="font-black text-indigo-950">{item.name}</h3><p className="mt-3 text-sm leading-7">{item.why}</p><p className="mt-3 text-sm leading-7"><strong>Example:</strong> {item.example}</p><p className="mt-3 text-sm font-semibold leading-7 text-indigo-900">{item.question}</p></article>)}
      </div>
      <div className="mt-5 rounded-2xl bg-indigo-50 p-5"><h3 className="font-black text-indigo-950">Why use two accuracy curves?</h3><p className="mt-3 text-sm leading-7">The <strong>training curve</strong> tells us how well the model matches the examples it learned from. The <strong>test curve</strong> tells us how it performed on 30 separate flowers. A large gap can warn about overfitting, but it does not prove a universal diagnosis. A low score on both sets can warn about underfitting or insufficient features. Repeating the experiment, inspecting individual errors, and using cross-validation gives stronger evidence.</p></div>
      <div className="mt-5 rounded-2xl border border-amber-200 bg-amber-50 p-5"><h3 className="font-black text-amber-950">Important: do not choose k by repeatedly inspecting the final test data</h3><p className="mt-3 text-sm leading-7">This graph displays test outcomes for educational comparison only. In a real project, viewing the final test results for many k values and then selecting the best k would make the test set part of model selection. Instead, use cross-validation within the 120 training rows and reserve the 30 held-out rows for a final check. The smallest training/test gap is not automatically the best model, either.</p></div>
      <p className="mt-4 text-sm leading-7">Dataset provenance: <a className="font-bold text-indigo-700 underline" href="https://archive.ics.uci.edu/dataset/53/iris" rel="noreferrer" target="_blank">UCI Machine Learning Repository — Iris</a>. This dataset records real flower measurements; the outcomes here arise from a specified scikit-learn experiment.</p>
     </section>
     <div id="mathematics" className="scroll-mt-24"><MathematicalDeepDive
       title="Learn the mathematics behind generalization"
       introduction="Work with actual counts from the reproducible Iris experiment: 120 training flowers and 30 held-out flowers."
       examples={[
        {title:"Training accuracy for k = 1",question:"The classifier correctly identifies 119 of 120 training flowers. Find training accuracy.",formula:"training accuracy = 119/120",steps:["Identify the denominator: 120 training examples.","Identify the numerator: 119 correct training predictions.","Divide: 119 ÷ 120 = 0.991666...","Convert to 99.2% after rounding to one decimal place."],answer:"Training accuracy ≈ 99.2%.",interpretation:"A high training score does not prove the model will perform well on new flowers."},
        {title:"Held-out test accuracy for k = 1",question:"On 30 unseen Iris flowers, the model correctly predicts 26. Find test accuracy.",formula:"test accuracy = 26/30",steps:["There are 26 correct test predictions.","There are 30 held-out observations.","Divide 26/30 ≈ 0.866667.","Convert to 86.7%."],answer:"Held-out accuracy ≈ 86.7%.",interpretation:"The model has a noticeable training-versus-test gap on this one split."},
        {title:"Calculate the generalization gap",question:"Compare k = 1 training accuracy 119/120 with test accuracy 26/30.",formula:"gap = (119/120 − 26/30) × 100 percentage points",steps:["Train = 0.991667.","Test = 0.866667.","Subtract: 0.125.","Express as 12.5 percentage points."],answer:"Training–test accuracy gap = 12.5 percentage points.",interpretation:"A large positive gap can suggest overfitting, but the estimate is affected by small test-set size."},
        {title:"Very large neighborhoods",question:"For k = 119, only 58 of 120 training samples are correct and 16 of 30 test samples are correct.",formula:"train = 58/120; test = 16/30",steps:["Training accuracy = 58/120 ≈ 48.3%.","Test accuracy = 16/30 ≈ 53.3%.","Both are low relative to simpler useful settings.","This is consistent with an overly smooth, underfitting model."],answer:"Train ≈ 48.3% and test ≈ 53.3%.",interpretation:"Do not judge a model only by a small gap: both curves can be poor at the same time."}
       ]}
       practice={[
        {question:"For k = 9, 115 of 120 training flowers and 28 of 30 test flowers are correct. Find both accuracies.",solution:"Train 115/120 ≈ 95.8%; test 28/30 ≈ 93.3%."},
        {question:"Find the error rate when accuracy is 90%.",solution:"Error = 1 − 0.90 = 0.10 = 10%."},
        {question:"Why would selecting k after looking at all displayed test scores risk bias?",solution:"Because the final test outcomes influence the decision. The test set is no longer independent of model selection."},
        {question:"If training and testing accuracy are both low, does a small gap prove good generalization?",solution:"No. Both can be low due to an overly simple model, missing features, difficult data, or other problems."}
       ]}
     /></div>
     <section id="graph" className="academy-lesson-section scroll-mt-24 p-7">
      <p className="academy-section-kicker">Interactive Real-Data Graph</p><h2 className="mt-2 text-2xl font-black text-slate-950">Watch training and test accuracy change with k</h2>
      <p className="mt-3 text-sm leading-7">Every plotted point represents a measured result from the same Iris train/test split. Choose the number of neighbors to see the exact accuracy and gap. The selected k values are discrete because the classifier requires an integer neighbor count.</p>
      <label className="mt-5 block rounded-xl bg-indigo-50 p-5 font-bold text-indigo-950">Number of neighbors: k = {k}
       <select className="mt-3 w-full rounded-xl border border-indigo-300 bg-white p-3" value={k} onChange={e=>setK(Number(e.target.value))}>{results.map(row=><option key={row.k} value={row.k}>k = {row.k}</option>)}</select>
      </label>
      <figure className="mt-5 overflow-hidden rounded-xl border border-slate-200 bg-white p-4">
       <figcaption className="font-black text-slate-950">Measured training and held-out test accuracy across neighbor counts</figcaption>
       <svg viewBox="0 0 640 365" role="img" className="mt-4 h-auto w-full" aria-label={`Iris experiment: k ${k}, training accuracy ${(100*selected.train).toFixed(1)} percent, test accuracy ${(100*selected.test).toFixed(1)} percent.`}>
        <rect x="64" y="70" width="518" height="222" fill="#f8fafc"/>
        {[0.5,0.6,0.7,0.8,0.9,1].map(v=><g key={v}><line x1="64" x2="582" y1={posY(v)} y2={posY(v)} stroke="#d1d5db"/><text x="55" y={posY(v)+4} textAnchor="end" fill="#64748b" fontSize="12">{Math.round(v*100)}%</text></g>)}
        <path d={trainPath} stroke="#2563eb" strokeWidth="3.5" fill="none" strokeLinejoin="round"/>
        <path d={testPath} stroke="#059669" strokeWidth="3.5" fill="none" strokeLinejoin="round"/>
        <line x1={posX(ix)} x2={posX(ix)} y1="70" y2="292" stroke="#a855f7" strokeWidth="2" strokeDasharray="5 5"/>
        {results.map((r,i)=><g key={r.k}><circle cx={posX(i)} cy={posY(r.train)} r={i===ix?6:3} fill="#2563eb"/><circle cx={posX(i)} cy={posY(r.test)} r={i===ix?6:3} fill="#059669"/>{i%2===0&&<text x={posX(i)} y="312" textAnchor="middle" fontSize="11" fill="#334155">{r.k}</text>}</g>)}
        <text x="320" y="348" fill="#334155" fontSize="14" textAnchor="middle">Number of neighbors (k), increasing left to right</text>
        <text x="18" y="185" fill="#334155" fontSize="13" textAnchor="middle" transform="rotate(-90 18 185)">Accuracy</text>
       </svg>
       <div className="mt-2 flex flex-wrap gap-5 text-sm font-black"><span className="text-blue-700">● Training accuracy</span><span className="text-emerald-700">● Test accuracy</span><span className="text-violet-700">┊ Selected k</span></div>
      </figure>
      <div className="mt-5 grid gap-3 sm:grid-cols-3" aria-live="polite">{[["Training accuracy",(100*selected.train).toFixed(1)+"%"],["Test accuracy",(100*selected.test).toFixed(1)+"%"],["Train − test gap",(100*(selected.train-selected.test)).toFixed(1)+" points"]].map(([name,value])=><div key={name} className="rounded-xl bg-slate-100 p-4"><p className="text-xs font-black uppercase text-slate-600">{name}</p><p className="mt-2 text-xl font-black text-indigo-950">{value}</p></div>)}</div>
      <div className="mt-5 rounded-xl border border-indigo-200 bg-indigo-50 p-5 text-sm leading-7 text-indigo-950"><strong>Why did the graph change?</strong> As k increases, a prediction depends on more nearby labeled flowers. A small k can fit local details closely; a very large k smooths over class differences. These particular test values may fluctuate rather than follow a perfectly smooth curve. Use validation data—not this final test graph—to select a production model.</div>
      <p className="mt-4 text-sm leading-7"><strong>Try it:</strong> Select k = 1, k = 9, and k = 119. Explain why the largest training accuracy and the smallest training/test gap are each insufficient as a standalone model-selection rule.</p>
     </section>
     <section id="connection-lab" className="academy-lesson-section scroll-mt-24 p-7">
      <p className="academy-section-kicker">Mathematics × Python × AI × Robotics × Luminery</p>
      <h2 className="mt-2 text-2xl font-black text-slate-950">Connection Lab: Will the robot recognize a new obstacle?</h2>
      <p className="mt-4 leading-8">Imagine a robot learning to classify a safe, stationary obstacle from a labeled table of sensor measurements. Memorizing every training measurement may not help when the next object is slightly different. The Iris experiment teaches the same generalization question without requiring a physical robot.</p>
      <div className="mt-5 grid gap-4 md:grid-cols-2">
       <article className="rounded-xl border border-slate-200 bg-white p-5"><h3 className="font-black text-indigo-950">1. Mathematics and measurement</h3><p className="mt-3 text-sm leading-7">Let d be a measured distance in centimeters and let r be a reflectance reading in arbitrary sensor units. These features have different scales. Standardize each using z = (x − μ) / σ, where μ is the training mean and σ is the training standard deviation. Fit μ and σ on training data only. This is a mathematical model, not a claim that a sensor measures exact distance.</p></article>
       <article className="rounded-xl border border-slate-200 bg-white p-5"><h3 className="font-black text-indigo-950">2. Python and AI</h3><p className="mt-3 text-sm leading-7">Represent each labeled observation as [distance_cm, reflectance]. Compare small and large k in a scikit-learn pipeline. Choose k using training-only cross-validation, then check performance on held-out observations. k-nearest neighbors is learned classification; a fixed rule such as “stop if distance is below 20 cm” is deterministic logic, not AI.</p></article>
       <article className="rounded-xl border border-slate-200 bg-white p-5"><h3 className="font-black text-indigo-950">3. Robotics: safe simulation first</h3><p className="mt-3 text-sm leading-7">Create a small table of simulated readings and known obstacle labels. Keep motors disconnected. Simulate a new reading near the boundary and observe how k changes its predicted class. A real sensor has noise, blind spots, and failure modes: never rely on this classroom classifier alone for physical collision prevention.</p></article>
       <article className="rounded-xl border border-slate-200 bg-white p-5"><h3 className="font-black text-indigo-950">4. Luminery inquiry and evidence</h3><p className="mt-3 text-sm leading-7">Before revealing a result, predict which model might memorize individual readings. Hint 1: compare train and validation accuracy. Hint 2: inspect how many neighbors vote. Hint 3: ask whether the held-out examples resemble the training examples. Record your graph, code, predictions, observed errors, and one limitation. These are authored prompts, not a live AI mentor or automated assessment.</p></article>
      </div>
      <div className="mt-5 rounded-2xl bg-amber-50 p-5 text-sm leading-7 text-amber-950"><strong>Mini-experiment and transfer:</strong> Without running hardware, choose k = 1, 9, and 119 in the Iris graph above. Write down the training accuracy, held-out accuracy, and gap for each. Then explain how you would design a separate training/validation/test experiment for noisy robot sensor measurements. Why might a classifier trained in a bright room fail in dim light? How would you detect that failure without repeatedly tuning on your final test set?</div>
      <p className="mt-4 text-sm leading-7"><strong>Evidence to submit:</strong> a three-row results table, a short explanation of overfitting versus underfitting, a reproducible Python notebook or script, and a paragraph describing safe simulation and limitations. This evidence is separate from the saved quiz score and is not automatically reviewed.</p>
     </section>
     <div id="coding" className="scroll-mt-24"><CodingAndLumineryLab
       title="Reproduce the real Iris learning curves in Python"
       introduction="Run this Python 3 example in your own environment with scikit-learn installed; the lesson does not execute Python in the browser or automatically grade code. It reproduces the displayed Iris results. The held-out test scores are shown for teaching only: choose a production hyperparameter using training-only validation, not the displayed test ranking."
       code={`from sklearn.datasets import load_iris
from sklearn.model_selection import train_test_split, StratifiedKFold, cross_val_score
from sklearn.pipeline import make_pipeline
from sklearn.preprocessing import StandardScaler
from sklearn.neighbors import KNeighborsClassifier

iris = load_iris()
X = iris.data[:, [0, 2]]
y = iris.target
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.20, stratify=y, random_state=42
)
for k in [1, 3, 9, 35, 119]:
    model = make_pipeline(
        StandardScaler(), KNeighborsClassifier(n_neighbors=k)
    )
    model.fit(X_train, y_train)
    print(k, round(model.score(X_train, y_train), 3),
          round(model.score(X_test, y_test), 3))

# For a real project, choose k on training-only cross-validation.
cv = StratifiedKFold(n_splits=5, shuffle=True, random_state=42)
candidates = [1, 3, 5, 7, 9, 11, 15, 19]
cv_scores = {
    k: cross_val_score(
        make_pipeline(StandardScaler(), KNeighborsClassifier(n_neighbors=k)),
        X_train, y_train, cv=cv
    ).mean()
    for k in candidates
}
best_k = max(candidates, key=lambda k: cv_scores[k])
final_model = make_pipeline(
    StandardScaler(), KNeighborsClassifier(n_neighbors=best_k)
)
final_model.fit(X_train, y_train)
print("Selected k using training CV:", best_k)
print("Final held-out accuracy:", round(final_model.score(X_test, y_test), 3))`}
       expectedOutput={`1 0.992 0.867
3 0.967 0.9
9 0.958 0.933
35 0.858 0.833
119 0.483 0.533
(Additional output reports the k selected by training-only cross-validation and its final test accuracy.)`}
       prediction={{question:"If a model fits 119/120 training examples but only 26/30 test examples, what is the key concern?",options:["The model may be overfitting","The model has perfect generalization","The test set must be added to training"],correctIndex:0,retryHint:"Compare how well the model performs on familiar examples with how well it performs on held-out observations.",explanation:"Train accuracy is 99.2%, while held-out accuracy is 86.7%. This gap warrants investigating overfitting and split variability."}}
       challenges={["Reproduce the five displayed rows with Python and confirm their values.","Compute the training/test accuracy gap for k = 1 and k = 119.","Explain why k = 119 can perform poorly on both training and test data.","Use training-only cross-validation to choose k, and document the resulting final held-out score."]}
       hints={["A performance gap is a warning sign, not proof of one particular cause.","Small k uses fewer neighbors and can adapt to very local patterns.","Large k pools more data and can ignore useful class differences.","Keep the final test split separate from all model-selection decisions."]}
       reflection="Why is the k with the highest training accuracy not necessarily the most reliable model? What evidence would convince you that your chosen k generalizes?"
     /></div>
     <RelatedLibraryResources title="Connect model complexity with the AI pathway" description="Build on real data, distance, evaluation, and mathematics." resources={[{topic:"Previous lesson",title:"Evaluating AI Models",why:"Compare train/test accuracy with class-specific confusion-matrix metrics.",path:"/schools/artificial-intelligence/ai-foundations/module-1/lesson-10"},{topic:"Knowledge Library",title:"Data & AI Library",why:"Review generalization, evaluation, statistics, and model-development practices.",path:"/library/data-ai"}]}/>
     <section id="assessment" className="academy-lesson-section scroll-mt-24 p-7"><p className="academy-section-kicker">Assessment</p><h2 className="mt-2 text-2xl font-black text-slate-950">Explain what the learning curves mean</h2><p className="mt-3 text-sm">Answer all four questions. Three correct answers meet the knowledge-check target.</p>
      <div className="mt-6 space-y-6">{questions.map((q,i)=><fieldset key={i} className="border-b border-slate-200 pb-5"><legend className="font-bold text-slate-950">{i+1}. {q.question}</legend><div className="mt-3 space-y-2">{q.options.map((option,j)=><label key={j} className={`flex cursor-pointer gap-3 rounded-xl border p-3 text-sm ${answers[i]===j?"border-indigo-600 bg-indigo-50":"border-slate-200"}`}><input type="radio" name={`ai-generalization-${i}`} checked={answers[i]===j} onChange={()=>{setAnswers(old=>({...old,[i]:j}));setChecked(false);setSaveStatus("idle")}} className="accent-indigo-700"/><span>{option}</span></label>)}</div>{checked&&<p role="status" className={`mt-3 text-sm font-semibold ${answers[i]===q.answer?"text-emerald-800":"text-rose-800"}`}>{answers[i]===q.answer?"Correct. ":"Not quite. "}{q.why}</p>}</fieldset>)}</div>
      <div className="mt-5 flex flex-wrap gap-3"><button type="button" disabled={!allAnswered} onClick={()=>setChecked(true)} className="rounded-xl bg-indigo-700 px-5 py-3 font-black text-white disabled:opacity-40">Check answers</button><button type="button" onClick={()=>{setAnswers({});setChecked(false);setSaveStatus("idle")}} className="rounded-xl border border-indigo-200 px-5 py-3 font-black text-indigo-800">Try again</button></div>
      {checked&&<p role="status" className="mt-4 rounded-xl bg-indigo-50 p-4 font-black text-indigo-950">Score: {score}/4 — {score>=3?"Knowledge-check target met":"Review and retry"}</p>}
      <div className="mt-5 rounded-xl border border-indigo-200 bg-indigo-50 p-5"><h3 className="font-black text-indigo-950">Save your lesson result</h3>{saved&&<p className="mt-2 text-sm">Previously saved: {saved.score}/{saved.total_questions}</p>}{!user&&!authLoading&&<Link to="/login" className="mt-3 inline-block font-bold text-indigo-700 underline">Sign in to save</Link>}{user&&<button type="button" disabled={!checked||saveStatus==="saving"||saveStatus==="saved"} onClick={save} className="mt-3 rounded-xl bg-indigo-700 px-5 py-3 font-bold text-white disabled:opacity-40">{saveStatus==="saving"?"Saving...":saveStatus==="saved"?"Saved":"Save lesson result"}</button>}{saveStatus==="saved"&&<p role="status" className="mt-3 text-sm font-bold text-emerald-900">Saved to your account.</p>}{error&&<p role="alert" className="mt-3 text-sm font-bold text-rose-800">{error}</p>}</div>
     </section>
     <section className="academy-lesson-section p-7"><p className="academy-section-kicker">Portfolio Project</p><h2 className="mt-2 text-2xl font-black text-slate-950">Build a generalization evidence report</h2><p className="mt-4 leading-8">Using the full 150-row Iris dataset, define a reproducible 80/20 held-out split, compare at least five k values with training-only cross-validation, choose one k, evaluate it on the untouched test set, and explain any training/validation gap. Include at least one graph, reproducible Python code, and an explanation of the limits of a single test split.</p><div className="mt-6 flex flex-wrap gap-3"><Link to="/schools/artificial-intelligence/ai-foundations/module-1/lesson-10" className="rounded-xl border border-indigo-200 px-5 py-3 font-bold text-indigo-800">← Lesson 10</Link><Link to="/schools/artificial-intelligence/ai-foundations" className="rounded-xl bg-indigo-700 px-5 py-3 font-bold text-white">Course overview</Link></div></section>
    </div>
   </div>
  </div>
 </main>;
}
