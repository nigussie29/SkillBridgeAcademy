import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext.jsx";
import { getAiLessonProgress, saveAiLessonProgress } from "../../services/aiLessonProgress.js";
import MathematicalDeepDive from "../../components/learning/MathematicalDeepDive.jsx";
import CodingAndLumineryLab from "../../components/learning/CodingAndLumineryLab.jsx";
import RelatedLibraryResources from "../../components/learning/RelatedLibraryResources.jsx";

// Reproducible held-out results from real scikit-learn Iris records:
// train_test_split(indices, test_size=.2, random_state=42, stratify=y);
// Pipeline(StandardScaler(), KNeighborsClassifier(n_neighbors=3));
// Features: sepal length and petal length (original columns 0 and 2).
// Rows=actual species, columns=predicted species, classes in sklearn order.
const confusion=[[10,0,0],[0,9,1],[0,2,8]];
const species=["setosa","versicolor","virginica"];
const questions=[
 {question:"A held-out 30-flower test has 27 correct predictions. What is accuracy?",options:["90%","80%","70%"],answer:0,why:"Accuracy = 27/30 = 0.90 = 90%."},
 {question:"In a confusion matrix where rows are actual species and columns are predicted species, what does an off-diagonal entry represent?",options:["A correctly classified flower","A classification error","A missing input value"],answer:1,why:"Off-diagonal cells count cases where the predicted label differs from the actual label."},
 {question:"For virginica: TP = 8 and FN = 2. What is recall?",options:["0.8","0.9","1.0"],answer:0,why:"Recall = TP/(TP+FN) = 8/(8+2) = 0.8."},
 {question:"Why must the test set stay separate from training and scaler fitting?",options:["It makes all predictions perfect","It provides a less biased estimate of generalization","It eliminates real-data errors"],answer:1,why:"Unseen test data helps evaluate the trained pipeline without information leakage."}
];

export default function AIFoundationsLessonTen(){
 const {user,loading:authLoading}=useAuth();
 const [focus,setFocus]=useState(2);
 const [metric,setMetric]=useState("recall");
 const [answers,setAnswers]=useState({});
 const [checked,setChecked]=useState(false);
 const [saved,setSaved]=useState(null);
 const [saveStatus,setSaveStatus]=useState("idle");
 const [error,setError]=useState("");
 const total=confusion.flat().reduce((a,b)=>a+b,0);
 const correct=confusion.reduce((sum,row,i)=>sum+row[i],0);
 const tp=confusion[focus][focus];
 const actualCount=confusion[focus].reduce((a,b)=>a+b,0);
 const predictedCount=confusion.reduce((sum,row)=>sum+row[focus],0);
 const precision=tp/predictedCount;
 const recall=tp/actualCount;
 const f1=2*precision*recall/(precision+recall);
 const current=metric==="precision"?precision:metric==="f1"?f1:recall;
 const allAnswered=questions.every((_,i)=>answers[i]!==undefined);
 const score=questions.reduce((sum,q,i)=>sum+(answers[i]===q.answer?1:0),0);
 useEffect(()=>{
  let active=true;setSaved(null);
  if(!user?.id)return()=>{active=false};
  getAiLessonProgress(user.id,"ai-foundations-m1-l10").then(record=>{if(active)setSaved(record)}).catch(()=>{if(active)setError("Could not load Lesson 10 account progress.")});
  return()=>{active=false};
 },[user?.id]);
 async function save(){
  if(!user?.id||!checked||!allAnswered)return;
  setSaveStatus("saving");setError("");
  try{const record=await saveAiLessonProgress(user.id,score,questions.length,"ai-foundations-m1-l10");setSaved(record);setSaveStatus("saved")}
  catch{setSaveStatus("error");setError("Could not save Lesson 10. Check the connection and lesson progress configuration.")}
 }
 return <main className="academy-modern min-h-screen pb-20 text-slate-700">
 <div className="h-1 bg-gradient-to-r from-indigo-700 via-blue-600 to-emerald-500"/>
 <div className="mx-auto max-w-6xl px-5 py-8">
 <nav aria-label="Course navigation" className="flex flex-wrap gap-2 text-sm font-bold text-indigo-700"><Link to="/schools/artificial-intelligence">School of AI</Link><span>/</span><Link to="/schools/artificial-intelligence/ai-foundations">AI Foundations</Link><span>/</span><span>Module 1 · Lesson 10</span></nav>
 <header className="mt-6 rounded-3xl bg-gradient-to-br from-blue-800 via-indigo-800 to-slate-950 p-8 text-white shadow-xl md:p-12">
  <p className="text-sm font-black uppercase tracking-widest text-cyan-200">KingNigUs Academy · Real-World AI Statistics</p>
  <h1 className="mt-4 text-4xl font-black md:text-5xl">Evaluating AI: Accuracy, Precision, Recall, and Confusion Matrices</h1>
  <p className="mt-5 max-w-3xl text-lg leading-9 text-blue-100">Investigate a real held-out Iris classification experiment. Explore which species are confused, calculate metrics by hand, and reproduce every result with Python.</p>
  <p className="mt-4 text-sm font-bold text-cyan-100">150 Iris records · 120 training flowers · 30 held-out test flowers · 90% test accuracy in this experiment</p>
 </header>
 <nav aria-label="Lesson sections" className="academy-mini-nav mt-6 flex flex-wrap gap-2"><a href="#concepts">Concepts</a><a href="#mathematics">Worked mathematics</a><a href="#graph">Interactive matrix</a><a href="#coding">Python &amp; Luminery</a><a href="#assessment">Assessment</a></nav>
 <div className="mt-8 grid items-start gap-7 lg:grid-cols-[280px_minmax(0,1fr)]">
 <aside className="space-y-5 lg:sticky lg:top-24">
  <section className="overflow-hidden rounded-3xl border border-slate-200 bg-white"><h2 className="bg-emerald-800 px-5 py-4 font-black text-white">Vocabulary</h2><dl className="space-y-4 p-5 text-sm leading-7">{[
   ["Confusion matrix","A table comparing the actual and predicted classes for a test set."],
   ["True positive","A correctly detected example of the chosen class."],
   ["False positive","An example from another class incorrectly predicted as the chosen class."],
   ["False negative","An example of the chosen class incorrectly predicted as another class."],
   ["Precision","Among predictions of the chosen class, the fraction that truly belong to it."],
   ["Recall","Among actual examples of a chosen class, the fraction correctly detected."],
   ["F1","Harmonic mean of precision and recall."],
   ["Held-out test set","Observations not used when fitting the classifier or scaler."]
  ].map(([a,b])=><div key={a}><dt className="font-black text-slate-950">{a}</dt><dd>{b}</dd></div>)}</dl></section>
  <section className="overflow-hidden rounded-3xl border border-slate-200 bg-white"><h2 className="bg-blue-800 px-5 py-4 font-black text-white">Mathematics</h2><div className="space-y-3 p-4 font-mono text-sm"><p className="rounded-xl bg-slate-950 p-3 text-cyan-200">Accuracy = correct / total</p><p className="rounded-xl bg-slate-950 p-3 text-cyan-200">Precision = TP/(TP+FP)</p><p className="rounded-xl bg-slate-950 p-3 text-cyan-200">Recall = TP/(TP+FN)</p><p className="rounded-xl bg-slate-950 p-3 text-cyan-200">F1 = 2PR/(P+R)</p></div></section>
  <section className="rounded-3xl border border-slate-200 bg-white p-5 text-sm"><h2 className="font-black text-slate-950">Account progress</h2><p className="mt-2">{saved?`Saved result: ${saved.score}/${saved.total_questions}`:"No saved result loaded for Lesson 10."}</p></section>
 </aside>
 <div className="min-w-0 space-y-7">
 <section id="concepts" className="academy-lesson-section scroll-mt-24 p-7">
  <p className="academy-section-kicker">Essential Question</p><h2 className="mt-2 text-2xl font-black text-slate-950">Is 90% accuracy enough to understand a classifier?</h2>
  <p className="mt-4 leading-8">Not always. Accuracy counts correct predictions across all classes, but it does not show which groups the model confuses. A <strong>confusion matrix</strong> provides that detail. Each row of this lesson's matrix represents the recorded flower species, and each column represents the model's prediction.</p>
  <p className="mt-4 leading-8">We trained a reproducible three-nearest-neighbor model on two real Iris measurements (sepal length and petal length). We used a stratified 80/20 split of all 150 dataset records, fitted a standardization transform on the 120 training records, and evaluated only on the 30 held-out records. The resulting matrix below is computed from that experiment, not invented.</p>
  <p className="mt-4 leading-8">To understand each species individually, treat that species as the positive class and all others as negative (one-versus-rest). Then you can calculate <strong>precision</strong>, <strong>recall</strong>, and <strong>F1</strong>. A good model evaluation considers all of them alongside data quality, error consequences, and performance on new examples.</p>
  <div className="mt-5 rounded-2xl bg-indigo-50 p-5"><h3 className="font-black text-indigo-950">Real dataset and reproducible method</h3><p className="mt-3 text-sm leading-7">Data: <a href="https://archive.ics.uci.edu/dataset/53/iris" className="font-bold underline" target="_blank" rel="noreferrer">UCI Iris</a>, available through <code>sklearn.datasets.load_iris</code>. The 90% figure is <em>one</em> test split, not a guaranteed population performance level. The code below reproduces the experiment. Avoid fitting preprocessing on the test set.</p></div>
 </section>
 <div id="mathematics" className="scroll-mt-24"><MathematicalDeepDive title="Derive classification metrics from real results"
  introduction="Each example uses the held-out confusion matrix from a reproducible Iris experiment. Pay attention to the difference between rows (actual labels) and columns (predicted labels)."
  examples={[
   {title:"Overall accuracy",question:"The test contains 30 Iris flowers. The diagonal has 10, 9, and 8 correct predictions. Find accuracy.",formula:"Accuracy = (10 + 9 + 8) / 30",steps:["Sum correct predictions on the diagonal: 10 + 9 + 8 = 27.","Sum every matrix cell to get 30 test observations.","Divide 27 by 30 = 0.9.","Convert to percentage: 90%."],answer:"Accuracy = 90%.",interpretation:"Three held-out flowers were misclassified in this one test split."},
   {title:"Virginica precision",question:"The model predicted virginica for nine flowers: eight virginica and one versicolor. Find virginica precision.",formula:"Precision = TP/(TP+FP)",steps:["Virginica true positives: 8.","Virginica false positives: 1 versicolor flower.","Predicted virginica total: 8 + 1 = 9.","Precision = 8/9 ≈ 0.889."],answer:"Virginica precision ≈ 88.9%.",interpretation:"When the model predicts virginica, about 8/9 of those predictions are correct on this test set."},
   {title:"Virginica recall",question:"Ten test flowers are actually virginica, and the classifier recognizes eight. Find recall.",formula:"Recall = TP/(TP+FN)",steps:["Virginica true positives = 8.","Two virginica test flowers were labeled versicolor: false negatives = 2.","Actual virginica count = 8 + 2 = 10.","Recall = 8/10 = 0.8."],answer:"Virginica recall = 80%.",interpretation:"Two actual virginica flowers were missed by this model on the held-out split."},
   {title:"Virginica F1-score",question:"Calculate F1 from precision 8/9 and recall 8/10.",formula:"F1 = 2PR/(P + R)",steps:["Use precision = 8/9 and recall = 8/10.","Multiply and double: numerator = 2×(8/9)×(8/10).","Divide by (8/9 + 8/10).","Simplify to F1 = 16/19 ≈ 0.842."],answer:"Virginica F1 ≈ 84.2%.",interpretation:"F1 balances precision and recall; it is not the same as overall accuracy."}
  ]}
  practice={[
   {question:"Find versicolor recall using nine correctly classified and one missed actual versicolor.",solution:"Recall = 9/(9+1) = 0.9 = 90%."},
   {question:"Find versicolor precision using nine true positives and two false positives.",solution:"Precision = 9/(9+2) = 9/11 ≈ 81.8%."},
   {question:"What does the cell in actual virginica, predicted versicolor mean?",solution:"Two actual virginica flowers were predicted as versicolor."},
   {question:"Why is reporting only accuracy insufficient?",solution:"It hides which classes have high false-positive or false-negative rates; class-specific errors may have different costs."}
  ]}/></div>
 <section id="graph" className="academy-lesson-section scroll-mt-24 p-7">
  <p className="academy-section-kicker">Interactive Data Visualization</p><h2 className="mt-2 text-2xl font-black text-slate-950">Explore a real confusion matrix</h2>
  <p className="mt-3 text-sm leading-7">Change the species and metric. The selected class is highlighted in the matrix; every quantity is calculated from the fixed, real held-out predictions, not a fabricated example.</p>
  <div className="mt-5 grid gap-4 sm:grid-cols-2"><label className="text-sm font-black text-indigo-950">Focus species<select value={focus} onChange={e=>setFocus(Number(e.target.value))} className="mt-2 w-full rounded-xl border border-indigo-300 bg-white p-3">{species.map((s,i)=><option key={s} value={i}>{s}</option>)}</select></label>
  <label className="text-sm font-black text-indigo-950">Metric<select value={metric} onChange={e=>setMetric(e.target.value)} className="mt-2 w-full rounded-xl border border-indigo-300 bg-white p-3"><option value="precision">Precision</option><option value="recall">Recall</option><option value="f1">F1-score</option></select></label></div>
  <figure className="mt-5 overflow-x-auto rounded-2xl border border-slate-200 bg-white p-5"><figcaption className="mb-4 font-black text-slate-950">Held-out test set · actual species (rows) vs predicted (columns)</figcaption>
   <div className="min-w-[480px]"><p className="mb-2 text-center text-xs font-black uppercase text-slate-600">Predicted species →</p><div className="grid grid-cols-[110px_repeat(3,minmax(0,1fr))] gap-2"><div/><div className="text-center text-xs font-bold">Setosa</div><div className="text-center text-xs font-bold">Versicolor</div><div className="text-center text-xs font-bold">Virginica</div>
   {confusion.map((row,i)=><div key={species[i]} className="contents"><div className="flex items-center justify-end text-right text-xs font-black capitalize text-slate-800">{species[i]}</div>{row.map((count,j)=><div key={j} className={`rounded-xl border-2 p-5 text-center ${i===focus&&j===focus?"border-emerald-600 bg-emerald-100":"border-slate-200"}`} style={{backgroundColor:i===focus&&j===focus?undefined:`rgba(37,99,235,${0.04+0.07*count})`}}><div className="text-2xl font-black text-slate-900">{count}</div><div className="mt-1 text-xs text-slate-600">{i===j?"Correct":"Incorrect"}</div></div>)}</div>)}</div><p className="mt-3 text-center text-xs text-slate-600">↑ Actual species for each row</p></div>
  </figure>
  <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4" aria-live="polite">{[["Accuracy",`${(100*correct/total).toFixed(1)}%`],["True positive",tp],["False positive",predictedCount-tp],["False negative",actualCount-tp]].map(([name,value])=><div key={name} className="rounded-xl bg-slate-100 p-4"><p className="text-xs font-black uppercase text-slate-600">{name}</p><p className="mt-2 text-xl font-black text-indigo-900">{value}</p></div>)}</div>
  <div className="mt-5 rounded-xl bg-indigo-50 p-5" aria-live="polite"><p className="text-sm font-black capitalize text-indigo-950">{species[focus]} · {metric}</p><div className="mt-3 h-5 overflow-hidden rounded-full bg-slate-200"><div className="h-full rounded-full bg-indigo-700" style={{width:`${current*100}%`}}/></div><p className="mt-2 text-2xl font-black text-indigo-950">{(current*100).toFixed(1)}%</p><p className="mt-2 text-sm leading-7">Precision: {(precision*100).toFixed(1)}% · Recall: {(recall*100).toFixed(1)}% · F1: {(f1*100).toFixed(1)}%. These are measured on this particular 30-row held-out test set.</p></div>
 </section>
 <div id="coding" className="scroll-mt-24"><CodingAndLumineryLab
  title="Reproduce the Iris confusion matrix in Python"
  introduction="This program loads the actual Iris dataset and reproduces the graph's matrix. Run it in your Python environment with scikit-learn installed. The website displays code but does not execute it."
  code={`from sklearn.datasets import load_iris
from sklearn.model_selection import train_test_split
from sklearn.pipeline import make_pipeline
from sklearn.preprocessing import StandardScaler
from sklearn.neighbors import KNeighborsClassifier
from sklearn.metrics import confusion_matrix, accuracy_score

iris = load_iris()
X = iris.data[:, [0, 2]]  # sepal and petal length
y = iris.target
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42, stratify=y
)
model = make_pipeline(StandardScaler(), KNeighborsClassifier(n_neighbors=3))
model.fit(X_train, y_train)
predictions = model.predict(X_test)
print(confusion_matrix(y_test, predictions).tolist())
print("Accuracy:", round(accuracy_score(y_test, predictions), 2))`}
  expectedOutput={`[[10, 0, 0], [0, 9, 1], [0, 2, 8]]
Accuracy: 0.9`}
  prediction={{question:"For virginica, the matrix shows 8 true positives and 2 false negatives. What is recall?",options:["80%","88.9%","90%"],correctIndex:0,retryHint:"Use the number of correctly detected virginica flowers divided by all actual virginica flowers.",explanation:"Recall = 8/(8+2) = 0.8, or 80%."}}
  challenges={["Explain why the matrix has exactly 30 entries across all cells.","Compare precision and recall for versicolor and virginica.","Change k from 3 to 1, rerun the experiment, and document how the matrix changes.","Repeat multiple train/test splits and explain why one split is not a guarantee of future accuracy."]}
  hints={["Each matrix row represents a true class, not a predicted class.","Sum the diagonal for the count of correct classifications.","To calculate one-class recall, use that class's actual row total.","Fit preprocessing inside the training pipeline to avoid test-data leakage."]}
  reflection="If false negatives are more costly than false positives in a high-stakes application, would accuracy alone be an appropriate selection metric? Why not?"
 /></div>
 <RelatedLibraryResources title="Explore more AI evaluation resources" description="Connect these real evaluation results with data quality, feature scaling, and classification." resources={[{topic:"Previous lesson",title:"Distance, Similarity, and Nearest-Neighbor AI",why:"Recall how the classifier chooses similar observations.",path:"/schools/artificial-intelligence/ai-foundations/module-1/lesson-9"},{topic:"Knowledge Library",title:"Data & AI Library",why:"Explore classification evaluation, Python, and data-science principles.",path:"/library/data-ai"}]}/>
 <section id="assessment" className="academy-lesson-section scroll-mt-24 p-7"><p className="academy-section-kicker">Knowledge Check</p><h2 className="mt-2 text-2xl font-black text-slate-950">Evaluate what the model learned</h2><p className="mt-3 text-sm">Answer all four questions; three correct answers meet the target.</p>
 <div className="mt-7 space-y-6">{questions.map((q,i)=><fieldset key={i} className="border-b border-slate-200 pb-5"><legend className="font-bold text-slate-950">{i+1}. {q.question}</legend><div className="mt-3 space-y-2">{q.options.map((option,j)=><label key={j} className={`flex cursor-pointer gap-3 rounded-xl border p-3 text-sm ${answers[i]===j?"border-indigo-600 bg-indigo-50":"border-slate-200"}`}><input type="radio" name={`ai-metrics-question-${i}`} checked={answers[i]===j} onChange={()=>{setAnswers(old=>({...old,[i]:j}));setChecked(false);setSaveStatus("idle")}} className="accent-indigo-700"/><span>{option}</span></label>)}</div>{checked&&<p className="mt-3 text-sm font-semibold text-indigo-800">{q.why}</p>}</fieldset>)}</div>
 <div className="mt-5 flex flex-wrap gap-3"><button type="button" disabled={!allAnswered} onClick={()=>setChecked(true)} className="rounded-xl bg-indigo-700 px-5 py-3 font-black text-white disabled:opacity-40">Check answers</button><button type="button" onClick={()=>{setAnswers({});setChecked(false);setSaveStatus("idle")}} className="rounded-xl border border-indigo-200 px-5 py-3 font-black text-indigo-800">Try again</button></div>
 {checked&&<p role="status" className="mt-4 rounded-xl bg-indigo-50 p-4 font-black text-indigo-950">Score: {score}/4 — {score>=3?"Target met":"Review and retry"}</p>}
 <div className="mt-5 rounded-xl border border-indigo-200 bg-indigo-50 p-5"><h3 className="font-black text-indigo-950">Save progress to your account</h3>{saved&&<p className="mt-2 text-sm">Previously saved: {saved.score}/{saved.total_questions}</p>}{!user&&!authLoading&&<Link to="/login" className="mt-3 inline-block font-bold text-indigo-700 underline">Sign in to save</Link>}{user&&<button type="button" disabled={!checked||saveStatus==="saving"||saveStatus==="saved"} onClick={save} className="mt-3 rounded-xl bg-indigo-700 px-4 py-2 font-bold text-white disabled:opacity-40">{saveStatus==="saving"?"Saving...":saveStatus==="saved"?"Saved":"Save lesson result"}</button>}{saveStatus==="saved"&&<p role="status" className="mt-3 text-sm font-bold text-emerald-900">Saved to your account.</p>}{error&&<p role="alert" className="mt-3 text-sm font-bold text-rose-800">{error}</p>}</div></section>
 <section className="academy-lesson-section p-7"><p className="academy-section-kicker">Portfolio Evidence</p><h2 className="mt-2 text-2xl font-black text-slate-950">Deliver an honest AI evaluation report</h2><p className="mt-4 leading-8">Reproduce the Iris train/test split, report your confusion matrix, accuracy, and class-wise precision, recall, and F1. Explain at least two misclassifications and why test performance can vary across splits. Include the code, data source, and the limits of this experiment.</p><div className="mt-6 flex flex-wrap gap-3"><Link to="/schools/artificial-intelligence/ai-foundations/module-1/lesson-9" className="rounded-xl border border-indigo-200 px-5 py-3 font-bold text-indigo-800">← Lesson 9</Link><Link to="/schools/artificial-intelligence/ai-foundations" className="rounded-xl bg-indigo-700 px-5 py-3 font-bold text-white">Course overview</Link></div></section>
 </div></div></div></main>;
}
