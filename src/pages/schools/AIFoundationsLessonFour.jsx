import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext.jsx";
import { getAiLessonProgress, saveAiLessonProgress } from "../../services/aiLessonProgress.js";
import MathematicalDeepDive from "../../components/learning/MathematicalDeepDive.jsx";
import CodingAndLumineryLab from "../../components/learning/CodingAndLumineryLab.jsx";
import RelatedLibraryResources from "../../components/learning/RelatedLibraryResources.jsx";

const LESSON_ID = "ai-foundations-m1-l4";
const examples = [
  {distance: 8, label: 1, predicted: 1},
  {distance: 13, label: 1, predicted: 1},
  {distance: 22, label: 0, predicted: 1},
  {distance: 30, label: 0, predicted: 0},
];
const questions = [
  {question:"In supervised learning, what does a label represent?",options:["A known target or outcome for a training example","The row number in a spreadsheet","A guarantee that a model is correct"],answer:0,why:"A label is the known target associated with a labeled training example."},
  {question:"A test set has 8 correct predictions out of 10. What is accuracy?",options:["20%","80%","8%"],answer:1,why:"Accuracy is correct predictions / all predictions = 8/10 = 0.8 = 80%."},
  {question:"Which case is a false positive for an obstacle-warning classifier?",options:["Warning when an obstacle exists","No warning when no obstacle exists","Warning when no obstacle exists"],answer:2,why:"A false positive is a positive prediction when the true label is negative."},
  {question:"Which evaluation method best estimates performance on unfamiliar examples?",options:["Use only the same examples used to train","Reserve representative unseen examples for testing","Select only the easiest examples"],answer:1,why:"Held-out representative test data helps estimate generalization. It does not guarantee real-world safety."},
];

export default function AIFoundationsLessonFour() {
  const { user, loading: authLoading } = useAuth();
  const [threshold, setThreshold] = useState(24);
  const [answers, setAnswers] = useState({});
  const [checked, setChecked] = useState(false);
  const [saved, setSaved] = useState(null);
  const [saveStatus, setSaveStatus] = useState("idle");
  const [error, setError] = useState("");
  const complete = questions.every((_, i) => answers[i] !== undefined);
  const score = questions.reduce((sum, item, i) => sum + (answers[i] === item.answer ? 1 : 0), 0);
  const counts = examples.reduce((acc, row) => {
    const predicted = row.distance < threshold ? 1 : 0;
    if (row.label === 1 && predicted === 1) acc.tp++;
    if (row.label === 0 && predicted === 0) acc.tn++;
    if (row.label === 0 && predicted === 1) acc.fp++;
    if (row.label === 1 && predicted === 0) acc.fn++;
    return acc;
  }, {tp:0,tn:0,fp:0,fn:0});
  const accuracy = (counts.tp + counts.tn) / examples.length;
  const precision = counts.tp + counts.fp ? counts.tp / (counts.tp + counts.fp) : null;
  const recall = counts.tp + counts.fn ? counts.tp / (counts.tp + counts.fn) : null;

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
        <span className="text-slate-600">Module 1 · Lesson 4</span>
      </nav>
      <header className="mt-6 rounded-3xl bg-gradient-to-br from-blue-800 via-indigo-800 to-slate-950 p-8 text-white shadow-xl md:p-12">
        <p className="text-sm font-black uppercase tracking-widest text-cyan-200">AI Foundations · Module 1 · Lesson 4</p>
        <h1 className="mt-4 text-4xl font-black md:text-5xl">Training Data, Labels, and Model Evaluation</h1>
        <p className="mt-5 max-w-3xl text-lg leading-9 text-blue-100">Move beyond writing prediction rules. Learn how labeled examples support supervised learning, how model errors are measured, and why testing on unseen examples matters.</p>
        <div className="mt-6 flex flex-wrap gap-2 text-xs font-bold"><span className="rounded-full bg-white/15 px-4 py-2">Beginner</span><span className="rounded-full bg-white/15 px-4 py-2">60–75 minutes</span><span className="rounded-full bg-white/15 px-4 py-2">Statistics × Python × AI × Robotics</span></div>
      </header>
      <nav className="academy-mini-nav mt-6 flex flex-wrap gap-2" aria-label="Lesson sections">
        <a href="#concepts">Concepts</a><a href="#mathematics">Mathematics</a><a href="#simulation">Evaluation lab</a><a href="#python">Python + Luminery</a><a href="#assessment">Assessment</a>
      </nav>
      <div className="mt-8 grid items-start gap-7 lg:grid-cols-[280px_minmax(0,1fr)]">
        <aside className="space-y-5 lg:sticky lg:top-24">
          <section className="overflow-hidden rounded-3xl border border-slate-200 bg-white">
            <h2 className="bg-emerald-800 px-5 py-4 font-black text-white">Essential Vocabulary</h2>
            <dl className="space-y-4 p-5 text-sm leading-7">{[
              ["Training data","Examples used to fit or learn model parameters."],
              ["Label","The known target value associated with an example."],
              ["Classifier","A model that predicts categories or classes."],
              ["Test set","Examples reserved for evaluation after model development."],
              ["False positive","The model predicts a positive class when the true label is negative."],
              ["False negative","The model predicts negative when the true label is positive."],
              ["Precision","Share of predicted positives that really are positive."],
              ["Recall","Share of true positives that the system detects."]
            ].map(([name,definition]) => <div key={name}><dt className="font-black text-slate-950">{name}</dt><dd>{definition}</dd></div>)}</dl>
          </section>
          <section className="overflow-hidden rounded-3xl border border-slate-200 bg-white">
            <h2 className="bg-blue-800 px-5 py-4 font-black text-white">Key Formulas</h2>
            <div className="space-y-3 p-4 font-mono text-sm">
              <p className="rounded-xl bg-slate-950 p-3 text-cyan-200">Accuracy = (TP + TN) / N</p>
              <p className="rounded-xl bg-slate-950 p-3 text-cyan-200">Precision = TP / (TP + FP)</p>
              <p className="rounded-xl bg-slate-950 p-3 text-cyan-200">Recall = TP / (TP + FN)</p>
            </div>
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
            <h2 className="mt-2 text-2xl font-black text-slate-950">How do we know whether a prediction model has actually learned something useful?</h2>
            <p className="mt-4 leading-8">Supervised learning starts with observations that include both input features and a known outcome. A robot sensor dataset might contain a distance in centimeters and an independently verified obstacle label. A row such as <strong>(distance = 8 cm, obstacle = yes)</strong> gives one example. The model uses many such examples to learn a relationship. We must not confuse a manually chosen distance threshold with a trained model.</p>
            <h3 className="mt-5 text-lg font-black text-slate-950">A sound evaluation process</h3>
            <ol className="mt-3 list-inside list-decimal space-y-2 leading-8"><li>Define the target, units, and what counts as a positive case.</li><li>Collect representative examples with reliable labels and consent where applicable.</li><li>Separate training, validation, and test data before tuning the model.</li><li>Fit parameters using training data; use validation data for model selection.</li><li>Evaluate once on held-out test data, inspect mistakes, and document limitations.</li></ol>
            <p className="mt-4 leading-8">Accuracy by itself is insufficient when some mistakes matter more than others. Missing an obstacle can be more consequential than issuing a harmless false warning. The correct metric depends on the actual decision costs. Sensor failures, unusual lighting, different floors, and distribution changes can also reduce reliability after deployment.</p>
            <div className="mt-5 rounded-2xl bg-amber-50 p-5 text-sm leading-7 text-amber-950"><strong>Safety distinction:</strong> This lesson uses simulated labels and a fixed threshold to practice evaluation mathematics. It does not train an AI model, measure real sensor accuracy, or provide a physical stopping policy.</div>
          </section>
          <div id="mathematics" className="scroll-mt-24">
            <MathematicalDeepDive
              title="Mathematics of classification and evidence"
              introduction="The four confusion-matrix counts are true positive (TP), true negative (TN), false positive (FP), and false negative (FN). First count the cases, then compute the metric."
              examples={[
                {title:"Classification accuracy",question:"A test set has 10 predictions. Eight are correct. Calculate accuracy.",formula:"accuracy = correct / total",steps:["Identify eight correct predictions.","Identify ten total held-out examples.","Divide 8 by 10 to get 0.8; multiply by 100 to get 80%."],answer:"Accuracy = 80%.",interpretation:"Accuracy is meaningful only for the evaluated data distribution and must be compared with a baseline."},
                {title:"Confusion matrix, precision, and recall",question:"Suppose TP = 6, FP = 2, FN = 3 and TN = 9. Find precision and recall.",formula:"precision = 6/(6+2); recall = 6/(6+3)",steps:["Count predicted positives: 6 + 2 = 8.","Precision = 6/8 = 0.75, or 75%.","Count all real positives: 6 + 3 = 9.","Recall = 6/9 = 0.667, or approximately 66.7%."],answer:"Precision = 75%; recall ≈ 66.7%.",interpretation:"A system can have relatively good precision yet miss one-third of real positive cases."},
                {title:"Why a majority baseline matters",question:"A dataset contains 90 negative examples and 10 positive examples. A classifier always predicts negative. Find accuracy and recall for the positive class.",formula:"accuracy = 90/100; recall = 0/10",steps:["Predicting all examples negative gets all 90 negative cases correct.","Accuracy is 90/100 = 90%.","None of the 10 positive cases are detected.","Recall for positive cases is 0/10 = 0%."],answer:"Accuracy = 90%; positive-class recall = 0%.",interpretation:"High accuracy can conceal total failure to detect the class we care about."},
                {title:"Train/test split arithmetic",question:"A dataset contains 200 independent examples. If 80% are reserved for training and 20% for testing, how many examples belong to each?",formula:"training = 0.8 × 200; test = 0.2 × 200",steps:["Compute 0.8 × 200 = 160.","Compute 0.2 × 200 = 40.","Check 160 + 40 = 200."],answer:"160 training and 40 test examples.",interpretation:"If nearby sensor readings are correlated, splitting related measurements across both groups can cause leakage; grouping by recording session may be necessary."}
              ]}
              practice={[
                {question:"A model gets 18 of 25 examples right. Find accuracy.",solution:"18/25 = 0.72 = 72%."},
                {question:"TP = 8, FP = 2. Find precision.",solution:"8/(8+2) = 0.8 = 80%."},
                {question:"TP = 8, FN = 4. Find recall.",solution:"8/(8+4) = 2/3 ≈ 66.7%."},
                {question:"A 90%-accurate always-negative classifier is tested on a dataset with 10% positives. Why might it still be unusable?",solution:"It misses every positive case: positive-class recall is 0%. The class costs and false negatives matter."}
              ]}
            />
          </div>
          <section id="simulation" className="academy-lesson-section scroll-mt-24 p-7">
            <p className="academy-section-kicker">Interactive Mathematics Lab</p>
            <h2 className="mt-2 text-2xl font-black text-slate-950">Explore a confusion matrix</h2>
            <p className="mt-3 text-sm leading-7">Four illustrative records have known obstacle labels. Change a hand-written warning threshold and see how TP, TN, FP, FN, accuracy, precision, and recall respond. The threshold is not machine-learned.</p>
            <label className="mt-5 block rounded-2xl bg-indigo-50 p-5 text-sm font-black text-indigo-950">Warning threshold: {threshold} cm
              <input type="range" min="5" max="40" step="1" value={threshold} onChange={e=>setThreshold(Number(e.target.value))} className="mt-4 w-full accent-indigo-700"/>
            </label>
            <div className="mt-5 overflow-x-auto"><table className="w-full border-collapse text-left text-sm"><thead><tr className="bg-slate-900 text-white"><th className="p-3">Distance</th><th className="p-3">Actual obstacle</th><th className="p-3">Predicted warning</th><th className="p-3">Classification</th></tr></thead><tbody>{examples.map(row=>{const predicted=row.distance < threshold?1:0;const type=row.label===1?(predicted===1?"TP":"FN"):(predicted===1?"FP":"TN");return <tr key={row.distance} className="border-b border-slate-200 bg-white"><td className="p-3">{row.distance} cm</td><td className="p-3">{row.label===1?"Yes":"No"}</td><td className="p-3">{predicted?"Yes":"No"}</td><td className="p-3 font-black text-indigo-800">{type}</td></tr>})}</tbody></table></div>
            <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4" aria-live="polite">{Object.entries(counts).map(([name,value])=><div key={name} className="rounded-xl bg-slate-100 p-4 text-center"><p className="text-xs font-black uppercase text-slate-600">{name}</p><p className="mt-1 text-2xl font-black text-slate-950">{value}</p></div>)}</div>
            <div className="mt-3 grid gap-3 sm:grid-cols-3" aria-live="polite"><div className="rounded-xl bg-emerald-50 p-4"><p className="text-xs font-black uppercase text-emerald-900">Accuracy</p><p className="mt-2 text-xl font-black">{(accuracy*100).toFixed(0)}%</p></div><div className="rounded-xl bg-blue-50 p-4"><p className="text-xs font-black uppercase text-blue-900">Precision</p><p className="mt-2 text-xl font-black">{precision===null?"Undefined":(precision*100).toFixed(1)+"%"}</p></div><div className="rounded-xl bg-violet-50 p-4"><p className="text-xs font-black uppercase text-violet-900">Recall</p><p className="mt-2 text-xl font-black">{recall===null?"Undefined":(recall*100).toFixed(1)+"%"}</p></div></div>
            <p className="mt-4 text-sm leading-7">Investigate a threshold of 12 cm and compare it with 24 cm. Which mistakes increase? Why might false negatives matter for obstacle detection? A threshold with zero predicted positives has undefined precision, not zero precision.</p>
            <button type="button" onClick={()=>setThreshold(24)} className="mt-4 rounded-xl border border-indigo-300 px-4 py-2 text-sm font-bold text-indigo-800">Reset lab</button>
          </section>
          <div id="python" className="scroll-mt-24">
            <CodingAndLumineryLab
              title="Evaluate a simple classifier with Python"
              introduction="The program below is a deterministic threshold classifier. It evaluates known labels and reports accuracy, precision, and recall. This does not train a model or connect to hardware."
              code={`distances_cm = [8, 13, 22, 30]
actual_obstacle = [1, 1, 0, 0]
threshold_cm = 24
predicted = [int(d < threshold_cm) for d in distances_cm]

tp = sum(p == 1 and y == 1 for p, y in zip(predicted, actual_obstacle))
tn = sum(p == 0 and y == 0 for p, y in zip(predicted, actual_obstacle))
fp = sum(p == 1 and y == 0 for p, y in zip(predicted, actual_obstacle))
fn = sum(p == 0 and y == 1 for p, y in zip(predicted, actual_obstacle))
accuracy = (tp + tn) / len(actual_obstacle)
precision = tp / (tp + fp) if tp + fp else None
recall = tp / (tp + fn) if tp + fn else None
print(f"TP={tp}, TN={tn}, FP={fp}, FN={fn}")
print(f"Accuracy={accuracy:.2f}")
print(f"Precision={precision:.2f}; Recall={recall:.2f}")`}
              expectedOutput={`TP=2, TN=1, FP=1, FN=0
Accuracy=0.75
Precision=0.67; Recall=1.00`}
              prediction={{question:"With threshold 24 cm, what is the classifier's accuracy on the four examples?",options:["50%","75%","100%"],correctIndex:1,retryHint:"Check the four distances: 8, 13, and 22 are below the threshold; 30 is not. Compare each prediction with its actual label.",explanation:"Three of four predictions are correct. Accuracy is 3/4 = 75%."}}
              challenges={["Change threshold_cm to 12 and calculate TP, TN, FP, FN before running Python.","Explain why maximizing accuracy alone may conceal dangerous false negatives.","Describe how you would collect an independent test set and prevent overlap between training and testing.","Explain why this code evaluates a hand-coded rule rather than training an AI model."]}
              reflection="If a classifier misses an obstacle at a particular speed, which evaluation metric would reveal that failure? What additional real-world safety controls are required before hardware use?"
              hints={["Start with actual positives versus predicted positives, not just a single accuracy score.","False negatives are actual obstacles that the classifier fails to warn about.","Use held-out representative data, inspect failures, and implement independent safeguards. Never assume a high average score makes a robot safe."]}
            />
          </div>
          <RelatedLibraryResources title="Connect evaluation to deeper Data & AI study" description="Use the existing Knowledge Library to investigate training, testing, statistics, and common machine-learning mistakes." resources={[
            {topic:"Machine learning",title:"Training, Validation, Test Sets, and Cross-Validation",why:"Learn how separate data splits reduce optimistic estimates and help evaluate generalization.",path:"/library/data-ai/module/8/lesson/training-validation-test-sets-and-cross-validation"},
            {topic:"AI foundations",title:"Units of analysis, features, targets, and actions",why:"Connect observations and labels to decisions and the meaning of each dataset row.",path:"/library/data-ai/module/1/lesson/units-of-analysis-features-targets-and-actions"}
          ]}/>
          <section id="assessment" className="academy-lesson-section scroll-mt-24 p-7">
            <p className="academy-section-kicker">Knowledge Check</p><h2 className="mt-2 text-2xl font-black text-slate-950">Show what you understand</h2>
            <p className="mt-3 text-sm">Answer all four questions. A score of at least three meets this knowledge-check target.</p>
            <div className="mt-7 space-y-6">{questions.map((q,i)=><fieldset key={i} className="border-b border-slate-200 pb-5"><legend className="font-bold text-slate-950">{i+1}. {q.question}</legend><div className="mt-3 space-y-2">{q.options.map((option,j)=><label key={j} className={`flex cursor-pointer gap-3 rounded-xl border p-3 text-sm ${answers[i]===j?"border-indigo-600 bg-indigo-50":"border-slate-200"}`}><input type="radio" name={`ai-eval-question-${i}`} className="accent-indigo-700" checked={answers[i]===j} onChange={()=>{setAnswers(v=>({...v,[i]:j}));setChecked(false);setSaveStatus("idle");}}/><span>{option}</span></label>)}</div>{checked&&<p className="mt-3 text-sm font-semibold text-indigo-800">{q.why}</p>}</fieldset>)}</div>
            <div className="mt-5 flex flex-wrap gap-3"><button type="button" disabled={!complete} onClick={()=>setChecked(true)} className="rounded-xl bg-indigo-700 px-5 py-3 font-black text-white disabled:opacity-40">Check answers</button><button type="button" onClick={()=>{setAnswers({});setChecked(false);setSaveStatus("idle");}} className="rounded-xl border border-indigo-300 px-5 py-3 font-black text-indigo-900">Try again</button></div>
            {checked&&<p role="status" className="mt-4 rounded-xl bg-indigo-50 p-4 font-black text-indigo-950">Score: {score}/4 — {score>=3?"Knowledge-check target met":"Review and try again"}</p>}
            <div className="mt-5 rounded-xl border border-indigo-200 bg-indigo-50 p-5"><h3 className="font-black text-indigo-950">Save to academy account</h3>{saved&&<p className="mt-2 text-sm">Previously saved: {saved.score}/{saved.total_questions}</p>}{!user&&!authLoading&&<Link to="/login" className="mt-2 inline-block font-bold text-indigo-700 underline">Sign in to save</Link>}{user&&<button type="button" disabled={!checked||saveStatus==="saving"||saveStatus==="saved"} onClick={handleSave} className="mt-3 rounded-xl bg-indigo-700 px-4 py-2 font-black text-white disabled:opacity-40">{saveStatus==="saving"?"Saving...":saveStatus==="saved"?"Saved":"Save lesson result"}</button>}{saveStatus==="saved"&&<p role="status" className="mt-3 text-sm font-bold text-emerald-900">Saved to your account.</p>}{error&&<p role="alert" className="mt-3 text-sm font-bold text-rose-800">{error}</p>}</div>
          </section>
          <section className="academy-lesson-section p-7"><p className="academy-section-kicker">Portfolio Evidence</p><h2 className="mt-2 text-2xl font-black text-slate-950">Build and explain a validation report</h2><p className="mt-4 leading-8">Use six or more clearly labeled example readings, compute confusion-matrix counts, accuracy, precision, and recall, and document a baseline. Provide your Python code, a separate test strategy, one limitation of the labels, and an explanation of why this simulated threshold is not a trained AI or a real robot safety controller.</p><div className="mt-6 flex flex-wrap gap-3"><Link to="/schools/artificial-intelligence/ai-foundations/module-1/lesson-3" className="rounded-xl border border-indigo-200 px-5 py-3 font-bold text-indigo-800">← Lesson 3</Link><Link to="/schools/artificial-intelligence/ai-foundations" className="rounded-xl bg-indigo-700 px-5 py-3 font-bold text-white">Course overview</Link><Link to="/schools/artificial-intelligence/ai-foundations/module-1/lesson-5" className="rounded-xl bg-indigo-700 px-5 py-3 font-bold text-white">Next: Gradient Descent →</Link></div></section>
        </div>
      </div>
    </div>
  </main>;
}
