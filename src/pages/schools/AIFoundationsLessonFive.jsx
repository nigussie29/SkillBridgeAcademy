import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext.jsx";
import { getAiLessonProgress, saveAiLessonProgress } from "../../services/aiLessonProgress.js";
import MathematicalDeepDive from "../../components/learning/MathematicalDeepDive.jsx";
import CodingAndLumineryLab from "../../components/learning/CodingAndLumineryLab.jsx";
import RelatedLibraryResources from "../../components/learning/RelatedLibraryResources.jsx";

const LESSON_ID = "ai-foundations-m1-l5";
const questions = [
  {question:"In the linear model y-hat = wx + b, which quantities are learned from data?",options:["The input x","The weight w and bias b","The measurement unit only"],answer:1,why:"A training algorithm adjusts model parameters such as weight and bias; input features come from observations."},
  {question:"For actual y = 5 and prediction y-hat = 3, what is squared error?",options:["2","4","8"],answer:1,why:"Squared error is (3 − 5)² = (−2)² = 4."},
  {question:"In gradient descent, what does the learning rate control?",options:["How far parameters change per update","How many labels exist","Whether a fixed rule becomes intelligent"],answer:0,why:"The learning rate scales the step taken opposite to the gradient."},
  {question:"Why must we evaluate a trained model on unseen data?",options:["To guarantee every future output is correct","To estimate generalization beyond training examples","To eliminate the need for monitoring"],answer:1,why:"Held-out evaluation helps assess performance on unfamiliar examples, but does not eliminate risk."},
];

export default function AIFoundationsLessonFive() {
  const { user, loading: authLoading } = useAuth();
  const [weight, setWeight] = useState(0);
  const [learningRate, setLearningRate] = useState(0.1);
  const [answers, setAnswers] = useState({});
  const [checked, setChecked] = useState(false);
  const [saved, setSaved] = useState(null);
  const [saveStatus, setSaveStatus] = useState("idle");
  const [error, setError] = useState("");
  const complete = questions.every((_, i) => answers[i] !== undefined);
  const score = questions.reduce((sum, item, i) => sum + (answers[i] === item.answer ? 1 : 0), 0);
  // Synthetic training pair x = 2, y = 6. With b fixed at zero:
  // prediction = 2w, squared loss = (2w - 6)^2, derivative = 8w - 24.
  const prediction = 2 * weight;
  const residual = prediction - 6;
  const loss = residual * residual;
  const gradient = 8 * weight - 24;
  const nextWeight = weight - learningRate * gradient;
  const nextLoss = (2 * nextWeight - 6) ** 2;

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
        <span className="text-slate-600">Module 1 · Lesson 5</span>
      </nav>
      <header className="mt-6 rounded-3xl bg-gradient-to-br from-blue-800 via-indigo-800 to-slate-950 p-8 text-white shadow-xl md:p-12">
        <p className="text-sm font-black uppercase tracking-widest text-cyan-200">AI Foundations · Module 1 · Lesson 5</p>
        <h1 className="mt-4 text-4xl font-black md:text-5xl">Learning from Errors: Loss Functions and Gradient Descent</h1>
        <p className="mt-5 max-w-3xl text-lg leading-9 text-blue-100">Discover how a model actually learns: calculate prediction error, define a loss function, and change a weight using gradient descent. Work through each step with mathematics, Python, and a safe interactive simulation.</p>
        <div className="mt-6 flex flex-wrap gap-2 text-xs font-bold"><span className="rounded-full bg-white/15 px-4 py-2">Beginner</span><span className="rounded-full bg-white/15 px-4 py-2">70–85 minutes</span><span className="rounded-full bg-white/15 px-4 py-2">Algebra × Calculus × Python × AI</span></div>
      </header>
      <nav className="academy-mini-nav mt-6 flex flex-wrap gap-2" aria-label="Lesson sections">
        <a href="#concepts">Concepts</a><a href="#mathematics">Mathematics</a><a href="#simulation">Gradient descent lab</a><a href="#python">Python + Luminery</a><a href="#assessment">Assessment</a>
      </nav>
      <div className="mt-8 grid items-start gap-7 lg:grid-cols-[280px_minmax(0,1fr)]">
        <aside className="space-y-5 lg:sticky lg:top-24">
          <section className="overflow-hidden rounded-3xl border border-slate-200 bg-white">
            <h2 className="bg-emerald-800 px-5 py-4 font-black text-white">Essential Vocabulary</h2>
            <dl className="space-y-4 p-5 text-sm leading-7">{[
              ["Parameter","A number the training process can adjust, such as weight w or bias b."],
              ["Prediction","The output of a model for a supplied input."],
              ["Residual","Predicted value minus observed target."],
              ["Loss function","A numerical measure of prediction error that training attempts to reduce."],
              ["Squared error","The square of the residual: (prediction − target)²."],
              ["Gradient","The rate of change of loss with respect to a parameter."],
              ["Learning rate","Step-size multiplier used when updating parameters."],
              ["Generalization","A model's performance on new examples not used to fit it."]
            ].map(([name,definition]) => <div key={name}><dt className="font-black text-slate-950">{name}</dt><dd>{definition}</dd></div>)}</dl>
          </section>
          <section className="overflow-hidden rounded-3xl border border-slate-200 bg-white">
            <h2 className="bg-blue-800 px-5 py-4 font-black text-white">Key Formulas</h2>
            <div className="space-y-3 p-4 font-mono text-sm">
              <p className="rounded-xl bg-slate-950 p-3 text-cyan-200">ŷ = wx + b</p>
              <p className="rounded-xl bg-slate-950 p-3 text-cyan-200">L = (ŷ − y)²</p>
              <p className="rounded-xl bg-slate-950 p-3 text-cyan-200">dL/dw = 2(wx − y)x</p>
              <p className="rounded-xl bg-slate-950 p-3 text-cyan-200">w_new = w − α(dL/dw)</p></div>
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
            <h2 className="mt-2 text-2xl font-black text-slate-950">How does a machine change its predictions after making a mistake?</h2>
            <p className="mt-4 leading-8">In Lesson 4 you measured how well a classifier performed. Now we introduce the mathematics behind <strong>training</strong>. Instead of manually changing a threshold, a learning algorithm uses a loss function to measure error and a rule for updating parameters to reduce that loss.</p>
            <p className="mt-4 leading-8">Start with a very small linear model: <strong>ŷ = wx + b</strong>. The letter x represents an input feature, w is its weight, b is a bias or offset, and ŷ is the predicted value. The true measured value is y. In this lesson, we set b = 0 and use one illustrative training example (x = 2, y = 6), so you can see every calculation.</p>
            <div className="mt-5 rounded-2xl bg-blue-50 p-5">
              <h3 className="font-black text-blue-950">The complete learning cycle</h3>
              <ol className="mt-3 list-inside list-decimal space-y-2 text-sm leading-7 text-blue-950">
                <li>Make a prediction using the current weight.</li>
                <li>Calculate the difference between the prediction and the target.</li>
                <li>Convert the error to a nonnegative squared loss.</li>
                <li>Find how sensitive loss is to the weight (the gradient).</li>
                <li>Update the weight in the direction that reduces loss.</li>
                <li>Repeat, then evaluate against representative unseen data.</li>
              </ol>
            </div>
            <p className="mt-5 leading-8">The <strong>learning rate α</strong> controls the update size. Small steps often converge slowly; overly large steps can overshoot or diverge. One successful calculation does not show generalization—real models require diverse training data, careful validation, and appropriate safeguards.</p>
            <div className="mt-5 rounded-2xl border border-amber-200 bg-amber-50 p-5 text-sm leading-7 text-amber-950"><strong>Robotics connection:</strong> Robot movement and sensor readings can be used to create a regression dataset, but a fitted equation is not automatically safe for controlling a moving robot. Our simulation is mathematical only; never use it as a motor controller or a certified stopping-distance policy.</div>
          </section>
          <div id="mathematics" className="scroll-mt-24">
            <MathematicalDeepDive title="Deriving the first learning update"
              introduction="A single observed pair x = 2, y = 6, with bias b = 0, makes the arithmetic transparent. This introduction to derivatives comes from algebra: we can expand the squared loss and see its slope."
              examples={[
                {title:"Predict using a linear function",question:"Let x = 2, w = 1 and b = 0. Find the predicted output.",formula:"ŷ = wx + b = 1(2) + 0",steps:["Identify input x = 2 and weight w = 1.","Multiply 1 × 2 = 2.","Add bias 0. The prediction is 2."],answer:"ŷ = 2, which is 4 below the actual target 6.",interpretation:"The weight scales how strongly x contributes. This is a regression prediction, not a probability."},
                {title:"Square the prediction error",question:"With prediction 2 and target 6, compute squared loss.",formula:"L = (ŷ − y)² = (2 − 6)²",steps:["Calculate the residual 2 − 6 = −4.","Square the residual: (−4)² = 16.","Observe that loss is nonnegative and penalizes larger errors more strongly."],answer:"Squared loss = 16.",interpretation:"Squaring changes the units: if the target is in centimeters, squared error is in cm²."},
                {title:"Derive the gradient from the square",question:"For x = 2, y = 6 and b = 0, find dL/dw.",formula:"L(w) = (2w − 6)² = 4w² − 24w + 36",steps:["Expand (2w − 6)² into 4w² − 24w + 36.","Differentiate each term: derivative = 8w − 24.","At w = 1, gradient = 8(1) − 24 = −16.","A negative slope means increasing the weight locally reduces loss."],answer:"dL/dw = −16 at w = 1.",interpretation:"Calculus measures the local sensitivity of loss to a small parameter change."},
                {title:"Take one gradient descent step",question:"Starting at w = 1 with learning rate α = 0.1, update the weight and compute the new loss.",formula:"w_new = 1 − 0.1(−16) = 2.6",steps:["Multiply learning rate and gradient: 0.1 × (−16) = −1.6.","Subtract the result: 1 − (−1.6) = 2.6.","Make a new prediction: 2.6 × 2 = 5.2.","New squared loss: (5.2 − 6)² = 0.64."],answer:"Weight 2.6; loss falls from 16 to 0.64.",interpretation:"For this one example, the best weight is 3. A lower training loss does not establish reliability on unseen inputs."}
              ]}
              practice={[
                {question:"If x = 3, w = 2, and b = 1, what is ŷ?",solution:"ŷ = 2 × 3 + 1 = 7."},
                {question:"With predicted value 7 and true value 5, calculate residual and squared loss.",solution:"Residual = 7 − 5 = 2. Squared loss = 2² = 4."},
                {question:"At w = 2, calculate the gradient of L(w) = (2w − 6)².",solution:"Gradient = 8w − 24 = 8(2) − 24 = −8."},
                {question:"At w = 2 with α = 0.1, perform one gradient step and calculate squared loss.",solution:"New w = 2 − 0.1(−8) = 2.8. Prediction = 5.6; squared loss = (5.6 − 6)² = 0.16."},
                {question:"Why might a very large learning rate cause problems?",solution:"It can jump across the minimum and even increase loss, rather than reducing it."}
              ]}/>
          </div>
          <section id="simulation" className="academy-lesson-section scroll-mt-24 p-7">
            <p className="academy-section-kicker">Interactive Mathematics Lab</p>
            <h2 className="mt-2 text-2xl font-black text-slate-950">Train a one-parameter model, step by step</h2>
            <p className="mt-3 text-sm leading-7">Explore the synthetic example x = 2, y = 6, with bias fixed at zero. Move the weight to see the prediction, squared loss, and slope. Then take a gradient descent step. This lab evaluates JavaScript arithmetic only; it is not a trained production AI or a Python execution environment.</p>
            <label className="mt-5 block rounded-2xl bg-indigo-50 p-5 text-sm font-bold text-indigo-950">Weight w: {weight.toFixed(2)}
              <input aria-label="Model weight" className="mt-4 w-full accent-indigo-700" type="range" min="-2" max="6" step="0.05" value={weight} onChange={e=>setWeight(Number(e.target.value))}/>
            </label>
            <label className="mt-3 block rounded-2xl bg-violet-50 p-5 text-sm font-bold text-violet-950">Learning rate α: {learningRate.toFixed(2)}
              <input aria-label="Learning rate" className="mt-4 w-full accent-violet-700" type="range" min="0.01" max="0.6" step="0.01" value={learningRate} onChange={e=>setLearningRate(Number(e.target.value))}/>
            </label>
            <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4" aria-live="polite">
              {[[ "Prediction",prediction.toFixed(2) ],["Residual",residual.toFixed(2)],["Squared loss",loss.toFixed(3)],["Gradient",gradient.toFixed(2)]].map(([name,value])=><div key={name} className="rounded-xl border border-slate-200 bg-slate-50 p-4"><p className="text-xs font-black uppercase text-slate-600">{name}</p><p className="mt-2 text-xl font-black text-indigo-900">{value}</p></div>)}
            </div>
            <div className="mt-5 rounded-2xl border border-emerald-200 bg-emerald-50 p-5 text-sm leading-8">
              <p className="font-black text-emerald-950">One proposed update</p>
              <p>New weight: {weight.toFixed(2)} − {learningRate.toFixed(2)} × ({gradient.toFixed(2)}) = <strong>{nextWeight.toFixed(3)}</strong></p>
              <p>Proposed new loss: <strong>{nextLoss.toFixed(3)}</strong> {nextLoss < loss ? "(decreases)" : nextLoss > loss ? "(increases)" : "(unchanged)"}</p>
              <p className="mt-2 text-xs leading-6">Large rates can overshoot. The proposed weight may exceed the slider's range; the step button stays within the visible range.</p>
            </div>
            <div className="mt-5 flex flex-wrap gap-3">
              <button type="button" disabled={nextWeight < -2 || nextWeight > 6} onClick={()=>setWeight(Number(nextWeight.toFixed(5)))} className="rounded-xl bg-indigo-700 px-5 py-3 text-sm font-black text-white disabled:cursor-not-allowed disabled:opacity-40">Take one learning step</button>
              <button type="button" onClick={()=>{setWeight(0);setLearningRate(0.1);}} className="rounded-xl border border-indigo-300 px-5 py-3 text-sm font-black text-indigo-900">Reset experiment</button>
            </div>
            <p className="mt-4 text-sm leading-7"><strong>Investigate:</strong> Starting at w = 0 with α = 0.1, how many steps bring the loss below 0.1? Reset and try α = 0.5. Why does the loss increase dramatically? What changes if the training data contain noisy sensor readings?</p>
          </section>
          <div id="python" className="scroll-mt-24">
            <CodingAndLumineryLab
              title="Implement one-dimensional gradient descent in Python"
              introduction="Work through each update numerically. This is authored Python for students to run independently. The browser does not execute or grade Python."
              code={`x = 2.0
y = 6.0
weight = 0.0
learning_rate = 0.1

for step in range(4):
    prediction = weight * x
    loss = (prediction - y) ** 2
    gradient = 2 * (prediction - y) * x
    print(f"step={step} weight={weight:.3f} loss={loss:.3f}")
    weight -= learning_rate * gradient

print(f"final weight={weight:.3f}")`}
              expectedOutput={`step=0 weight=0.000 loss=36.000
step=1 weight=2.400 loss=1.440
step=2 weight=2.880 loss=0.058
step=3 weight=2.976 loss=0.002
final weight=2.995`}
              prediction={{question:"After the first update from weight 0 with learning rate 0.1, what is the new weight?",options:["0.240","2.400","3.000"],correctIndex:1,retryHint:"At weight 0, prediction is 0, gradient is 2(0 − 6)(2) = −24. Compute 0 − 0.1(−24).",explanation:"The gradient is −24, so weight becomes 2.4 after the first update."}}
              challenges={["Calculate the first two updates with a pencil before reading the output.","Change learning_rate to 0.5. Explain the resulting oscillation and why loss does not shrink.","Introduce two different training examples, recompute mean squared error, and describe how a shared weight might trade off between them.","Explain why the program is genuine parameter fitting on a toy dataset, but not evidence of a reliable physical robot model."]}
              hints={["Write down the function: prediction = weight × x.","To reduce squared loss, calculate gradient = 2(prediction − y)x.","Subtract learning_rate × gradient from weight; inspect whether the new loss decreased.","A real model needs independent test data, careful units, and safety review before practical use."]}
              reflection="If a model fits its training example perfectly but fails on a different sensor reading, what does that reveal about generalization and the quality of the training data?"
            />
          </div>
          <RelatedLibraryResources title="Extend the mathematics through the Data & AI Library"
            description="Continue from scalar functions and errors into regression, model training, and evidence-based evaluation."
            resources={[
              {topic:"Data & AI",title:"Mathematics and modeling",why:"Revisit features, targets, and how mathematical models express relationships.",path:"/library/data-ai"},
              {topic:"AI Foundations",title:"Training and evaluation",why:"Connect the learning process to held-out tests and generalization from Lesson 4.",path:"/schools/artificial-intelligence/ai-foundations/module-1/lesson-4"}
            ]}/>
          <section id="assessment" className="academy-lesson-section scroll-mt-24 p-7">
            <p className="academy-section-kicker">Knowledge Check</p><h2 className="mt-2 text-2xl font-black text-slate-950">Show what you understand</h2>
            <p className="mt-3 text-sm">Answer all four questions. A score of at least three meets this knowledge-check target.</p>
            <div className="mt-7 space-y-6">{questions.map((q,i)=><fieldset key={i} className="border-b border-slate-200 pb-5"><legend className="font-bold text-slate-950">{i+1}. {q.question}</legend><div className="mt-3 space-y-2">{q.options.map((option,j)=><label key={j} className={`flex cursor-pointer gap-3 rounded-xl border p-3 text-sm ${answers[i]===j?"border-indigo-600 bg-indigo-50":"border-slate-200"}`}><input type="radio" name={`ai-gradient-question-${i}`} className="accent-indigo-700" checked={answers[i]===j} onChange={()=>{setAnswers(v=>({...v,[i]:j}));setChecked(false);setSaveStatus("idle");}}/><span>{option}</span></label>)}</div>{checked&&<p className="mt-3 text-sm font-semibold text-indigo-800">{q.why}</p>}</fieldset>)}</div>
            <div className="mt-5 flex flex-wrap gap-3"><button type="button" disabled={!complete} onClick={()=>setChecked(true)} className="rounded-xl bg-indigo-700 px-5 py-3 font-black text-white disabled:opacity-40">Check answers</button><button type="button" onClick={()=>{setAnswers({});setChecked(false);setSaveStatus("idle");}} className="rounded-xl border border-indigo-300 px-5 py-3 font-black text-indigo-900">Try again</button></div>
            {checked&&<p role="status" className="mt-4 rounded-xl bg-indigo-50 p-4 font-black text-indigo-950">Score: {score}/4 — {score>=3?"Knowledge-check target met":"Review and try again"}</p>}
            <div className="mt-5 rounded-xl border border-indigo-200 bg-indigo-50 p-5"><h3 className="font-black text-indigo-950">Save to academy account</h3>{saved&&<p className="mt-2 text-sm">Previously saved: {saved.score}/{saved.total_questions}</p>}{!user&&!authLoading&&<Link to="/login" className="mt-2 inline-block font-bold text-indigo-700 underline">Sign in to save</Link>}{user&&<button type="button" disabled={!checked||saveStatus==="saving"||saveStatus==="saved"} onClick={handleSave} className="mt-3 rounded-xl bg-indigo-700 px-4 py-2 font-black text-white disabled:opacity-40">{saveStatus==="saving"?"Saving...":saveStatus==="saved"?"Saved":"Save lesson result"}</button>}{saveStatus==="saved"&&<p role="status" className="mt-3 text-sm font-bold text-emerald-900">Saved to your account.</p>}{error&&<p role="alert" className="mt-3 text-sm font-bold text-rose-800">{error}</p>}</div>
          </section>
          <section className="academy-lesson-section p-7"><p className="academy-section-kicker">Portfolio Evidence</p><h2 className="mt-2 text-2xl font-black text-slate-950">Build a one-weight learning report</h2><p className="mt-4 leading-8">Choose a small labeled regression dataset, define a model, and show at least two gradient steps with the learning rate, predictions, gradients, and losses. Include your Python trace, one potential failure on unseen inputs, and an explanation of why the mathematics does not replace real-world robot safety testing.</p><div className="mt-6 flex flex-wrap gap-3"><Link to="/schools/artificial-intelligence/ai-foundations/module-1/lesson-4" className="rounded-xl border border-indigo-200 px-5 py-3 font-bold text-indigo-800">← Lesson 4</Link><Link to="/schools/artificial-intelligence/ai-foundations" className="rounded-xl bg-indigo-700 px-5 py-3 font-bold text-white">Course overview</Link></div></section>
        </div>
      </div>
    </div>
  </main>;
}
