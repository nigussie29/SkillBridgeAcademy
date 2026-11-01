import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext.jsx";
import { getAiLessonProgress, saveAiLessonProgress } from "../../services/aiLessonProgress.js";
import MathematicalDeepDive from "../../components/learning/MathematicalDeepDive.jsx";
import CodingAndLumineryLab from "../../components/learning/CodingAndLumineryLab.jsx";
import RelatedLibraryResources from "../../components/learning/RelatedLibraryResources.jsx";

const LESSON_ID = "ai-foundations-m1-l6";
const questions = [
 {question:"A model produces p = 0.8 for a positive class. What does this number mean?",options:["The model assigns an estimated probability of 80% to the positive class","The classification is always correct","The robot has an 80% safe stopping distance"],answer:0,why:"The output is a model estimate. Its real-world reliability requires calibration and evaluation."},
 {question:"A probability model uses threshold 0.7, predicting positive when p ≥ 0.7. What is predicted for p = 0.65?",options:["Positive","Negative","Always an error"],answer:1,why:"0.65 < 0.7, so the model predicts the negative class."},
 {question:"What is sigmoid(0)?",options:["0","0.5","1"],answer:1,why:"sigmoid(0) = 1/(1 + e^0) = 1/2."},
 {question:"Which metric is directly concerned with missed actual positive cases?",options:["Recall","File size","Training duration"],answer:0,why:"Recall = TP / (TP + FN); false negatives are missed positive cases."}
];
export default function AIFoundationsLessonSix() {
  const { user, loading: authLoading } = useAuth();
  const [intercept, setIntercept] = useState(0);
  const [classificationThreshold, setClassificationThreshold] = useState(0.5);
  const [answers, setAnswers] = useState({});
  const [checked, setChecked] = useState(false);
  const [saved, setSaved] = useState(null);
  const [saveStatus, setSaveStatus] = useState("idle");
  const [error, setError] = useState("");
  const complete = questions.every((_, i) => answers[i] !== undefined);
  const score = questions.reduce((sum, item, i) => sum + (answers[i] === item.answer ? 1 : 0), 0);
  // Illustrative logistic model with hand-chosen parameters, not a trained model.
  const sigmoid = value => 1 / (1 + Math.exp(-value));
  const samples = [
    {distance:8, actual:1},{distance:13, actual:1},
    {distance:22, actual:0},{distance:30, actual:0}
  ];
  const scored = samples.map(row => {
    const z = (20 - row.distance) / 5 + intercept;
    const probability = sigmoid(z);
    const predicted = probability >= classificationThreshold ? 1 : 0;
    return {...row,z,probability,predicted};
  });
  const counts = scored.reduce((out,row) => {
    if(row.actual===1&&row.predicted===1)out.tp++;
    if(row.actual===0&&row.predicted===0)out.tn++;
    if(row.actual===0&&row.predicted===1)out.fp++;
    if(row.actual===1&&row.predicted===0)out.fn++;
    return out;
  },{tp:0,tn:0,fp:0,fn:0});
  const accuracy = (counts.tp+counts.tn)/scored.length;
  const precision = counts.tp+counts.fp ? counts.tp/(counts.tp+counts.fp) : null;
  const recall = counts.tp+counts.fn ? counts.tp/(counts.tp+counts.fn) : null;
  // Chart of sigmoid(z), with a horizontal decision threshold and observed samples.
  const graphX = z => 62 + (z + 6) * 42;
  const graphY = p => 278 - p * 216;
  const curvePath = Array.from({length: 121}, (_,i)=>{
    const z = -6 + i * 0.1;
    return `${i===0?"M":"L"}${graphX(z).toFixed(2)} ${graphY(sigmoid(z)).toFixed(2)}`;
  }).join(" ");
  const cutoffLogit = Math.log(classificationThreshold / (1 - classificationThreshold));


  useEffect(() => {
    let active = true;
    setSaved(null);
    if (!user?.id) return () => {active = false;};
    getAiLessonProgress(user.id, LESSON_ID).then(record => {if (active) setSaved(record);})
      .catch(() => {if (active) setError("Could not load this lesson's saved progress.");});
    return () => {active = false;};
  }, [user?.id]);

  async function handleSave() {
    if (!user?.id || !checked || !complete) return;
    setSaveStatus("saving"); setError("");
    try {
      const record = await saveAiLessonProgress(user.id, score, questions.length, LESSON_ID);
      setSaved(record); setSaveStatus("saved");
    } catch {
      setSaveStatus("error");
      setError("Could not save the assessment. Check the Supabase connection and multi-lesson progress configuration.");
    }
  }

  return <main className="academy-modern min-h-screen pb-20 text-slate-700">
    <div className="h-1 bg-gradient-to-r from-blue-700 via-indigo-700 to-violet-700"/>
    <div className="mx-auto max-w-6xl px-5 py-9">
      <nav className="flex flex-wrap gap-2 text-sm font-bold text-indigo-700" aria-label="Course navigation">
        <Link to="/schools/artificial-intelligence">School of AI</Link><span>/</span>
        <Link to="/schools/artificial-intelligence/ai-foundations">AI Foundations</Link><span>/</span>
        <span className="text-slate-600">Module 1 · Lesson 6</span>
      </nav>
      <header className="mt-6 rounded-3xl bg-gradient-to-br from-blue-800 via-indigo-800 to-slate-950 p-8 text-white shadow-xl md:p-12">
        <p className="text-sm font-black uppercase tracking-widest text-cyan-200">AI Foundations · Module 1 · Lesson 6</p>
        <h1 className="mt-4 text-4xl font-black md:text-5xl">Probability, Classification, and Decision Thresholds</h1>
        <p className="mt-5 max-w-3xl text-lg leading-9 text-blue-100">Learn to turn a model score into a probability estimate, choose a decision threshold, and study the trade-offs between precision and recall through mathematics, Python, and a visual investigation.</p>
        <div className="mt-6 flex flex-wrap gap-2 text-xs font-bold"><span className="rounded-full bg-white/15 px-4 py-2">Beginner</span><span className="rounded-full bg-white/15 px-4 py-2">60–75 minutes</span><span className="rounded-full bg-white/15 px-4 py-2">Probability × Functions × Python × Robotics</span></div>
      </header>
      <nav className="academy-mini-nav mt-6 flex flex-wrap gap-2" aria-label="Lesson sections">
        <a href="#concepts">Concepts</a><a href="#mathematics">Mathematics</a><a href="#simulation">Threshold lab</a><a href="#python">Python + Luminery</a><a href="#assessment">Assessment</a>
      </nav>
      <div className="mt-8 grid items-start gap-7 lg:grid-cols-[280px_minmax(0,1fr)]">
        <aside className="space-y-5 lg:sticky lg:top-24">
          <section className="overflow-hidden rounded-3xl border border-slate-200 bg-white">
            <h2 className="bg-emerald-800 px-5 py-4 font-black text-white">Essential Vocabulary</h2>
            <dl className="space-y-4 p-5 text-sm leading-7">{[
             ["Probability","A number between 0 and 1 representing an estimate of how likely an outcome is."],
             ["Logit","A raw real-number score before a sigmoid transformation."],
             ["Sigmoid","A function converting a real-number score to a number between 0 and 1."],
             ["Threshold","The cutoff used to turn a probability estimate into a class prediction."],
             ["Calibration","Agreement between predicted probabilities and observed event frequencies."],
             ["False positive","A positive prediction for a truly negative example."],
             ["False negative","A negative prediction for a truly positive example."],
             ["Precision","TP divided by TP + FP."],
             ["Recall","TP divided by TP + FN."]
            ].map(([name,definition])=><div key={name}><dt className="font-black text-slate-950">{name}</dt><dd>{definition}</dd></div>)}</dl>
          </section>
          <section className="overflow-hidden rounded-3xl border border-slate-200 bg-white">
            <h2 className="bg-blue-800 px-5 py-4 font-black text-white">Key Formulas</h2>
            <div className="space-y-3 p-4 font-mono text-sm">
              <p className="rounded-xl bg-slate-950 p-3 text-cyan-200">z = w·x + b</p>
              <p className="rounded-xl bg-slate-950 p-3 text-cyan-200">p = 1 / (1 + exp(−z))</p>
              <p className="rounded-xl bg-slate-950 p-3 text-cyan-200">Positive if p ≥ threshold</p>
              <p className="rounded-xl bg-slate-950 p-3 text-cyan-200">Recall = TP / (TP + FN)</p></div>
          </section>
          <section className="rounded-3xl border border-slate-200 bg-white p-5 text-sm leading-7">
            <h2 className="font-black text-slate-950">Account progress</h2>
            <p className="mt-2">{saved ? `Saved score: ${saved.score}/${saved.total_questions}` : "No score loaded for this lesson."}</p>
            <p className="mt-2 text-slate-500">This lesson has its own account progress identifier.</p>
          </section>
        </aside>
        <div className="min-w-0 space-y-7">
          <section id="concepts" className="academy-lesson-section scroll-mt-24 p-7">
            <p className="academy-section-kicker">Essential Question</p>
            <h2 className="mt-2 text-2xl font-black text-slate-950">How can a model express uncertainty and turn it into a decision?</h2>
            <p className="mt-4 leading-8">A regression model predicts a numerical quantity. A binary classifier predicts one of two categories such as obstacle present (1) or absent (0). It may produce a score z and convert that score to a probability estimate p using the sigmoid function. A separate decision threshold then converts p to a yes/no classification.</p>
            <p className="mt-4 leading-8">The sigmoid equation is <strong>p = 1/(1 + exp(−z))</strong>. As z increases, p approaches 1; as z decreases, p approaches 0. At z = 0 the output is exactly 0.5. A logistic regression model uses a linear score z = w·x + b before applying sigmoid.</p>
            <div className="mt-5 rounded-2xl bg-indigo-50 p-5"><h3 className="font-black text-indigo-950">Three distinct decisions</h3><ol className="mt-3 list-inside list-decimal space-y-2 text-sm leading-7 text-indigo-950"><li><strong>Model:</strong> calculate a score from features and parameters.</li><li><strong>Probability transformation:</strong> apply sigmoid to obtain a number between zero and one.</li><li><strong>Policy:</strong> compare the estimate with a threshold appropriate to the costs of different mistakes.</li></ol></div>
            <p className="mt-5 leading-8">Changing a classification threshold does not retrain the model. It changes which outcomes count as positive. A lower threshold usually predicts more positives: this can increase recall while also increasing false positives. A higher threshold can reduce false alarms while missing more real positives. There is no universally optimal threshold.</p>
            <div className="mt-5 rounded-2xl border border-amber-200 bg-amber-50 p-5 text-sm leading-7 text-amber-950"><strong>Important:</strong> An output of 0.8 is not automatically an 80% reliable probability. Calibration must be assessed on representative data. Our example is simulated, with deliberately chosen scores, and is not a validated physical robot obstacle detector.</div>
          </section>
          <div id="mathematics" className="scroll-mt-24">
            <MathematicalDeepDive title="Probability and classification mathematics"
             introduction="First derive the probabilities; then apply an explicit cutoff. A probability estimate and a class prediction are different mathematical objects."
             examples={[
              {title:"Evaluate the sigmoid at zero",question:"Compute sigmoid(0).",formula:"p = 1/(1 + e^(−0))",steps:["Because e⁰ = 1, the denominator is 1 + 1 = 2.","Compute 1/2 = 0.5.","Interpret 0.5 as the model's midpoint before calibration."],answer:"sigmoid(0) = 0.5.",interpretation:"This is a mathematical property, not proof of model calibration."},
              {title:"Calculate a probability estimate",question:"For score z = ln(3), calculate the sigmoid output.",formula:"sigmoid(ln 3) = 1/(1 + e^(−ln 3))",steps:["Use e^(−ln 3) = 1/3.","Denominator: 1 + 1/3 = 4/3.","Divide 1 by 4/3 to get 3/4."],answer:"p = 0.75.",interpretation:"The score transforms to an estimated probability; observed frequencies must still be checked."},
              {title:"Apply two decision thresholds",question:"If p = 0.65, what happens under thresholds 0.5 and 0.7?",formula:"Positive if p ≥ t",steps:["Compare 0.65 ≥ 0.5: true, predict positive.","Compare 0.65 ≥ 0.7: false, predict negative.","Notice that the probability estimate did not change; only the policy changed."],answer:"Positive at 0.5; negative at 0.7.",interpretation:"A cutoff changes decisions and their error trade-offs, not the underlying model."},
              {title:"Measure recall and precision",question:"Suppose TP = 7, FP = 3, FN = 1. Find recall and precision.",formula:"Recall = 7/(7+1); Precision = 7/(7+3)",steps:["There are 8 actual positives, so recall = 7/8 = 87.5%.","There are 10 predicted positives, so precision = 7/10 = 70%.","Interpret missed detections and false alarms separately."],answer:"Recall = 87.5%; precision = 70%.",interpretation:"Metric choice must reflect real costs of missed detections and false alarms."}
             ]}
             practice={[
              {question:"What is sigmoid(0), and why is it not yet a yes/no decision?",solution:"sigmoid(0) = 0.5. A separate decision threshold is needed to assign a class."},
              {question:"If p = 0.4 and t = 0.3, which class is predicted?",solution:"Positive, because 0.4 ≥ 0.3."},
              {question:"TP = 9 and FN = 3. Compute recall.",solution:"9/(9+3) = 9/12 = 0.75 or 75%."},
              {question:"Why can a lower threshold create more false alarms?",solution:"More examples cross the cutoff into the positive class, including some actual negatives."}
             ]}/>
          </div>
          <section id="simulation" className="academy-lesson-section scroll-mt-24 p-7">
            <p className="academy-section-kicker">Interactive Mathematics Lab</p>
            <h2 className="mt-2 text-2xl font-black text-slate-950">Explore probability and decision trade-offs</h2>
            <p className="mt-3 text-sm leading-7">A fixed illustrative formula uses z = (20 − distance)/5 + offset. Move the offset and threshold sliders. Observe how the same four simulated observations change their predicted classes. These weights are hand-chosen, not fitted.</p>
            <label className="mt-5 block rounded-2xl bg-indigo-50 p-5 text-sm font-bold text-indigo-950">Score offset b: {intercept.toFixed(1)}
              <input aria-label="Score offset" className="mt-4 w-full accent-indigo-700" type="range" min="-3" max="3" step="0.1" value={intercept} onChange={e=>setIntercept(Number(e.target.value))}/>
            </label>
            <label className="mt-3 block rounded-2xl bg-violet-50 p-5 text-sm font-bold text-violet-950">Classification threshold t: {classificationThreshold.toFixed(2)}
              <input aria-label="Classification threshold" className="mt-4 w-full accent-violet-700" type="range" min="0.1" max="0.9" step="0.05" value={classificationThreshold} onChange={e=>setClassificationThreshold(Number(e.target.value))}/>
            </label>
            <figure className="mt-6 overflow-hidden rounded-2xl border border-indigo-200 bg-white p-4 sm:p-6">
              <figcaption className="text-lg font-black text-slate-950">Live graph: sigmoid probability and decision threshold</figcaption>
              <p className="mt-2 text-sm leading-7 text-slate-700">The blue S-curve shows p = 1/(1+e^(−z)). The dashed purple line is your selected decision threshold. The colored dots represent the four example observations; change either slider to update the picture.</p>
              <svg viewBox="0 0 640 338" className="mt-4 h-auto w-full" role="img" aria-labelledby="sigmoid-graph-title sigmoid-graph-desc">
                <title id="sigmoid-graph-title">Interactive sigmoid probability curve</title>
                <desc id="sigmoid-graph-desc">An S-shaped probability curve with a horizontal classification threshold at {classificationThreshold.toFixed(2)}, a vertical threshold intersection at logit {cutoffLogit.toFixed(2)}, and four colored example points that change as the score offset changes.</desc>
                <rect x="62" y="62" width="504" height="216" fill="#f8fafc" rx="3"/>
                {[0,0.25,0.5,0.75,1].map(p=><g key={p}><line x1="62" y1={graphY(p)} x2="566" y2={graphY(p)} stroke="#cbd5e1" strokeWidth="1"/><text x="50" y={graphY(p)+5} fontSize="13" fill="#475569" textAnchor="end">{p.toFixed(2)}</text></g>)}
                {[-6,-4,-2,0,2,4,6].map(z=><g key={z}><line x1={graphX(z)} y1="62" x2={graphX(z)} y2="278" stroke="#e2e8f0" strokeWidth="1"/><text x={graphX(z)} y="298" fontSize="13" fill="#475569" textAnchor="middle">{z}</text></g>)}
                <path d={curvePath} stroke="#1d4ed8" strokeWidth="4" fill="none" strokeLinecap="round"/>
                <line x1="62" y1={graphY(classificationThreshold)} x2="566" y2={graphY(classificationThreshold)} stroke="#7c3aed" strokeWidth="3" strokeDasharray="8 6"/>
                <line x1={graphX(cutoffLogit)} y1={graphY(classificationThreshold)} x2={graphX(cutoffLogit)} y2="278" stroke="#7c3aed" strokeWidth="2" strokeDasharray="4 5" opacity="0.8"/>
                {scored.map(row=><circle key={row.distance} cx={graphX(row.z)} cy={graphY(row.probability)} r="8" stroke="white" strokeWidth="2" fill={row.predicted===1?"#047857":"#dc2626"}/>)}
                <text x="314" y="325" fontSize="15" fontWeight="bold" fill="#0f172a" textAnchor="middle">Model score z</text>
                <text x="16" y="175" fontSize="14" fontWeight="bold" fill="#0f172a" textAnchor="middle" transform="rotate(-90 16 175)">Probability p</text>
                <text x="558" y={Math.max(76,graphY(classificationThreshold)-10)} fontSize="13" fill="#6d28d9" textAnchor="end">threshold = {classificationThreshold.toFixed(2)}</text>
              </svg>
              <div className="mt-3 flex flex-wrap gap-x-6 gap-y-2 text-sm font-semibold">
                <span className="text-blue-800">━ Sigmoid curve</span>
                <span className="text-violet-800">┄ Decision threshold</span>
                <span className="text-emerald-800">● Predicted positive</span>
                <span className="text-red-700">● Predicted negative</span>
              </div>
              <p className="mt-3 text-sm leading-7 text-slate-700"><strong>Read the graph:</strong> The horizontal line meets the curve at z ≈ {cutoffLogit.toFixed(2)}. Scores above this intersection predict positive. Moving the threshold changes the classification boundary but does not alter the blue sigmoid function.</p>
            </figure>
            <div className="mt-5 overflow-x-auto"><table className="w-full border-collapse text-left text-sm"><thead><tr className="bg-slate-900 text-white"><th className="p-3">Distance</th><th className="p-3">True label</th><th className="p-3">Estimated p</th><th className="p-3">Predicted</th></tr></thead><tbody>{scored.map(row=><tr key={row.distance} className="border-b border-slate-200 bg-white"><td className="p-3">{row.distance} cm</td><td className="p-3">{row.actual?"Yes":"No"}</td><td className="p-3">{row.probability.toFixed(3)}</td><td className="p-3">{row.predicted?"Yes":"No"}</td></tr>)}</tbody></table></div>
            <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4" aria-live="polite">{Object.entries(counts).map(([name,value])=><div key={name} className="rounded-xl bg-slate-100 p-4 text-center"><p className="text-xs font-black uppercase text-slate-600">{name}</p><p className="mt-1 text-2xl font-black text-slate-950">{value}</p></div>)}</div>
            <div className="mt-3 grid gap-3 sm:grid-cols-3" aria-live="polite">{[["Accuracy",accuracy],["Precision",precision],["Recall",recall]].map(([name,value])=><div key={name} className="rounded-xl bg-emerald-50 p-4"><p className="text-xs font-black uppercase text-emerald-900">{name}</p><p className="mt-2 text-xl font-black">{value===null?"Undefined":(value*100).toFixed(1)+"%"}</p></div>)}</div>
            <p className="mt-4 text-sm leading-7">When there are no predicted positives, precision is undefined, not zero. Try reducing the threshold to increase recall. Does precision always improve? Think about why an obstacle-warning policy needs separate engineering safety controls.</p>
            <button type="button" onClick={()=>{setIntercept(0);setClassificationThreshold(0.5);}} className="mt-4 rounded-xl border border-indigo-300 px-4 py-2 text-sm font-black text-indigo-900">Reset lab</button>
          </section>
          <div id="python" className="scroll-mt-24">
            <CodingAndLumineryLab title="Calculate sigmoid scores and predictions in Python"
              introduction="This short program computes model scores, sigmoid values, and predictions at a selected threshold. The weights are illustrative, not trained; students run the Python outside this website."
              code={`import math

distances = [8, 13, 22, 30]
threshold = 0.5

def sigmoid(z):
    return 1 / (1 + math.exp(-z))

for distance in distances:
    z = (20 - distance) / 5
    p = sigmoid(z)
    prediction = int(p >= threshold)
    print(f"distance={distance}, p={p:.3f}, label={prediction}")`}
              expectedOutput={`distance=8, p=0.917, label=1
distance=13, p=0.802, label=1
distance=22, p=0.401, label=0
distance=30, p=0.119, label=0`}
              prediction={{question:"With the same estimates, what happens to p = 0.401 if the threshold is lowered to 0.4?",options:["It is classified as positive","It remains negative","The probability itself doubles"],correctIndex:0,retryHint:"Use the decision rule: predict positive if p ≥ threshold.",explanation:"Because 0.401 ≥ 0.4, the decision becomes positive. The probability estimate does not change."}}
              challenges={["Manually calculate sigmoid(0) and sigmoid(ln 3).","Change the threshold from 0.5 to 0.9. Which examples remain positive?","Add actual labels and calculate TP, FP, TN, FN, precision, and recall.","Explain how you would check calibration on independent test data."]}
              hints={["Separate model score z, probability p, and class prediction.","sigmoid maps any finite real score into the open interval (0,1).","Lowering the threshold classifies more cases as positive; inspect both false negatives and false positives.","Predicted probabilities are estimates; investigate calibration and test-set performance."]}
              reflection="If a model reports an obstacle probability of 0.65, what additional information would you need before trusting that estimate in a real mobile robot?"
            />
          </div>
          <RelatedLibraryResources title="Study probability and decision making in more depth"
             description="Connect mathematical classification models to existing AI and statistics materials."
             resources={[
              {topic:"Data & AI",title:"Data & AI Knowledge Library",why:"Explore features, models, distributions, and evaluation.",path:"/library/data-ai"},
              {topic:"Previous lesson",title:"Loss Functions and Gradient Descent",why:"Review how parameters are fitted before a classification threshold is chosen.",path:"/schools/artificial-intelligence/ai-foundations/module-1/lesson-5"}
             ]}/>
          <section id="assessment" className="academy-lesson-section scroll-mt-24 p-7">
            <p className="academy-section-kicker">Knowledge Check</p><h2 className="mt-2 text-2xl font-black text-slate-950">Show what you understand</h2>
            <p className="mt-3 text-sm">Answer all four questions. A score of at least three meets this knowledge-check target.</p>
            <div className="mt-7 space-y-6">{questions.map((q,i)=><fieldset key={i} className="border-b border-slate-200 pb-5"><legend className="font-bold text-slate-950">{i+1}. {q.question}</legend><div className="mt-3 space-y-2">{q.options.map((option,j)=><label key={j} className={`flex cursor-pointer gap-3 rounded-xl border p-3 text-sm ${answers[i]===j?"border-indigo-600 bg-indigo-50":"border-slate-200"}`}><input type="radio" name={`ai-probability-question-${i}`} className="accent-indigo-700" checked={answers[i]===j} onChange={()=>{setAnswers(v=>({...v,[i]:j}));setChecked(false);setSaveStatus("idle");}}/><span>{option}</span></label>)}</div>{checked&&<p className="mt-3 text-sm font-semibold text-indigo-800">{q.why}</p>}</fieldset>)}</div>
            <div className="mt-5 flex flex-wrap gap-3"><button type="button" disabled={!complete} onClick={()=>setChecked(true)} className="rounded-xl bg-indigo-700 px-5 py-3 font-black text-white disabled:opacity-40">Check answers</button><button type="button" onClick={()=>{setAnswers({});setChecked(false);setSaveStatus("idle");}} className="rounded-xl border border-indigo-300 px-5 py-3 font-black text-indigo-900">Try again</button></div>
            {checked&&<p role="status" className="mt-4 rounded-xl bg-indigo-50 p-4 font-black text-indigo-950">Score: {score}/4 — {score>=3?"Knowledge-check target met":"Review and try again"}</p>}
            <div className="mt-5 rounded-xl border border-indigo-200 bg-indigo-50 p-5"><h3 className="font-black text-indigo-950">Save to academy account</h3>{saved&&<p className="mt-2 text-sm">Previously saved: {saved.score}/{saved.total_questions}</p>}{!user&&!authLoading&&<Link to="/login" className="mt-2 inline-block font-bold text-indigo-700 underline">Sign in to save</Link>}{user&&<button type="button" disabled={!checked||saveStatus==="saving"||saveStatus==="saved"} onClick={handleSave} className="mt-3 rounded-xl bg-indigo-700 px-4 py-2 font-black text-white disabled:opacity-40">{saveStatus==="saving"?"Saving...":saveStatus==="saved"?"Saved":"Save lesson result"}</button>}{saveStatus==="saved"&&<p role="status" className="mt-3 text-sm font-bold text-emerald-900">Saved to your account.</p>}{error&&<p role="alert" className="mt-3 text-sm font-bold text-rose-800">{error}</p>}</div>
          </section>
          <section className="academy-lesson-section p-7"><p className="academy-section-kicker">Portfolio Evidence</p><h2 className="mt-2 text-2xl font-black text-slate-950">Build a classification decision report</h2><p className="mt-4 leading-8">Using four or more labeled examples, calculate logistic scores, estimated probabilities, class predictions at two thresholds, and resulting precision and recall. Explain the importance of calibration, the consequences of missed detections, and why simulated predictions are not verified robot safety controls.</p><div className="mt-6 flex flex-wrap gap-3"><Link to="/schools/artificial-intelligence/ai-foundations/module-1/lesson-5" className="rounded-xl border border-indigo-200 px-5 py-3 font-bold text-indigo-800">← Lesson 5</Link><Link to="/schools/artificial-intelligence/ai-foundations" className="rounded-xl bg-indigo-700 px-5 py-3 font-bold text-white">Course overview</Link><Link to="/schools/artificial-intelligence/ai-foundations/module-1/lesson-7" className="rounded-xl bg-indigo-700 px-5 py-3 font-bold text-white">Next: Statistics &amp; Data →</Link></div></section>
        </div>
      </div>
    </div>
  </main>;
}
