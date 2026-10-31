import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext.jsx";
import { getAiLessonProgress, saveAiLessonProgress } from "../../services/aiLessonProgress.js";
import MathematicalDeepDive from "../../components/learning/MathematicalDeepDive.jsx";
import CodingAndLumineryLab from "../../components/learning/CodingAndLumineryLab.jsx";
import RelatedLibraryResources from "../../components/learning/RelatedLibraryResources.jsx";

const LESSON_ID = "ai-foundations-m1-l3";
const questions = [
  {question:"Which system is a fixed-rule program rather than a trained machine-learning model?",options:["Stop when distance < 20 cm","A classifier trained on labeled sensor readings","A model whose parameters are fitted from examples"],answer:0,why:"The distance threshold is explicitly programmed and is not learned from data."},
  {question:"For z = 0.6x₁ + 0.4x₂ with x₁ = 5 and x₂ = 10, what is z?",options:["7","8","15"],answer:0,why:"0.6 × 5 + 0.4 × 10 = 3 + 4 = 7."},
  {question:"What is a model's prediction error when its prediction is 13 and the observed value is 10?",options:["23","3","0.3"],answer:1,why:"Absolute prediction error is |13 − 10| = 3."},
  {question:"Before trusting a learned obstacle-detection model, what should a developer do?",options:["Assume training accuracy guarantees safe operation","Test it on unseen representative data and investigate failure cases","Remove every difficult example"],answer:1,why:"A model must be evaluated on unseen data and real-world limitations; safety requires additional system safeguards."},
];
const samples = [{distance:12,action:"STOP"},{distance:20,action:"CONTINUE"},{distance:35,action:"CONTINUE"}];

export default function AIFoundationsLessonThree() {
 const {user,loading:authLoading}=useAuth();
 const [threshold,setThreshold]=useState(20);
 const [answers,setAnswers]=useState({});
 const [submitted,setSubmitted]=useState(false);
 const [saved,setSaved]=useState(null);
 const [saveStatus,setSaveStatus]=useState("idle");
 const [error,setError]=useState("");
 const completed=questions.every((_,index)=>answers[index]!==undefined);
 const score=questions.reduce((sum,q,index)=>sum+(answers[index]===q.answer?1:0),0);
 useEffect(()=>{
  let active=true;
  if(!user?.id){setSaved(null);return ()=>{active=false};}
  getAiLessonProgress(user.id,LESSON_ID).then(record=>{if(active)setSaved(record);}).catch(()=>{if(active)setError("Could not load Lesson 3 progress. Check your account connection and the multi-lesson Supabase migration.");});
  return ()=>{active=false};
 },[user?.id]);
 async function save(){
  if(!user?.id||!submitted||!completed)return;
  setSaveStatus("saving");setError("");
  try{
   const record=await saveAiLessonProgress(user.id,score,questions.length,LESSON_ID);
   setSaved(record);setSaveStatus("saved");
  }catch{
   setSaveStatus("error");setError("Could not save Lesson 3. The multi-lesson database migration may still need to be applied. Lesson 1's saved record is unchanged.");
  }
 }
 return <main className="academy-modern min-h-screen pb-20 text-slate-700">
  <div className="h-1 bg-gradient-to-r from-indigo-700 via-blue-600 to-cyan-500"/>
  <div className="mx-auto max-w-6xl px-5 py-8">
   <nav aria-label="Course navigation" className="flex flex-wrap gap-2 text-sm font-bold text-indigo-700"><Link to="/schools/artificial-intelligence">School of AI</Link><span>/</span><Link to="/schools/artificial-intelligence/ai-foundations">AI Foundations</Link><span>/</span><span className="text-slate-600">Module 1 · Lesson 3</span></nav>
   <header className="mt-6 rounded-3xl bg-gradient-to-br from-blue-800 via-indigo-800 to-slate-950 p-8 text-white shadow-xl md:p-12">
    <p className="text-sm font-black uppercase tracking-widest text-cyan-200">SkillBridge AI Foundations · Module 1</p>
    <h1 className="mt-4 text-4xl font-black md:text-5xl">Rules, Learning, and Predictions</h1>
    <p className="mt-5 max-w-3xl text-lg leading-9 text-blue-100">Learn when a system follows human-written rules, when it learns from examples, and how mathematics and Python help verify predictions.</p>
    <div className="mt-6 flex flex-wrap gap-2 text-xs font-bold"><span className="rounded-full bg-white/15 px-4 py-2">Lesson 3</span><span className="rounded-full bg-white/15 px-4 py-2">45–60 minutes</span><span className="rounded-full bg-white/15 px-4 py-2">Math × Python × Robotics</span></div>
   </header>
   <nav className="academy-mini-nav mt-6 flex flex-wrap gap-2" aria-label="Lesson sections"><a href="#concepts">Deep notes</a><a href="#mathematics">Mathematics</a><a href="#experiment">Experiment</a><a href="#coding">Python + Luminery</a><a href="#assessment">Assessment</a></nav>
   <div className="mt-8 grid items-start gap-7 lg:grid-cols-[280px_minmax(0,1fr)]">
    <aside className="space-y-5 lg:sticky lg:top-24">
     <section className="overflow-hidden rounded-3xl border border-slate-200 bg-white"><h2 className="bg-emerald-800 px-5 py-4 font-black text-white">Essential Vocabulary</h2><dl className="space-y-4 p-5 text-sm leading-6">{[
      ["Rule-based program","A system whose decision logic is explicitly written by a programmer."],
      ["Machine learning","Methods that fit model parameters or patterns using data."],
      ["Feature","A measured or encoded input used to make a prediction."],
      ["Weight","A model coefficient that scales a feature's contribution."],
      ["Prediction","An estimated output for an input."],
      ["Error","A difference between a prediction and an observed outcome."],
      ["Generalization","Performance on new examples rather than just training data."]
     ].map(([term,definition])=><div key={term}><dt className="font-black text-slate-950">{term}</dt><dd>{definition}</dd></div>)}</dl></section>
     <section className="overflow-hidden rounded-3xl border border-slate-200 bg-white"><h2 className="bg-blue-800 px-5 py-4 font-black text-white">Key Mathematics</h2><div className="space-y-3 p-4 font-mono text-sm"><p className="rounded-xl bg-slate-950 p-3 text-cyan-200">z = w₁x₁ + w₂x₂ + b</p><p className="rounded-xl bg-slate-950 p-3 text-cyan-200">error = |prediction − actual|</p><p className="rounded-xl bg-slate-950 p-3 text-cyan-200">stop if distance &lt; threshold</p></div></section>
     <section className="rounded-3xl border border-slate-200 bg-white p-5 text-sm"><h2 className="font-black text-slate-950">Account progress</h2><p className="mt-2">{saved?`Saved result: ${saved.score}/${saved.total_questions}`:"No saved result loaded for this lesson."}</p><p className="mt-3 text-slate-500">The quiz uses a unique Lesson 3 ID.</p></section>
    </aside>
    <div className="min-w-0 space-y-7">
     <section id="concepts" className="academy-lesson-section scroll-mt-24 p-7">
      <p className="academy-section-kicker">Essential Question</p><h2 className="mt-2 text-2xl font-black text-slate-950">How is a programmed rule different from a system that learns?</h2>
      <p className="mt-4 leading-8">A thermostat following a temperature threshold is performing a deterministic rule: its programmer explicitly sets the decision. A trained classifier is different: its coefficients or decision boundaries are estimated from examples. Both systems use mathematics and code, but only the second is learning from data.</p>
      <p className="mt-4 leading-8">In robotics, an ultrasonic sensor might report a distance. A rule may stop the robot when the reading is below a threshold. A machine-learning model could instead use features such as distance, speed, and earlier measurements to estimate an obstacle risk. A learned estimate does not eliminate the need for safety engineering or human evaluation.</p>
      <div className="mt-5 rounded-2xl bg-indigo-50 p-5"><h3 className="font-black text-indigo-950">Learning objectives</h3><ul className="mt-3 list-inside list-disc space-y-2 text-sm leading-7"><li>Distinguish deterministic rules from learned models.</li><li>Compute linear weighted scores and absolute prediction error.</li><li>Trace a Python condition and test boundary cases.</li><li>Describe train/test evaluation and possible generalization failure.</li><li>Explain safe applications and limitations in robotics.</li></ul></div>
     </section>
     <div id="mathematics" className="scroll-mt-24"><MathematicalDeepDive
      title="Mathematics of predictions"
      introduction="Calculate carefully before deciding whether a numerical score is meaningful. Coefficients are chosen here for explanation, not trained on real robot data."
      examples={[
       {title:"Linear weighted model",question:"Given x = [5,10], w = [0.6,0.4], and b = 0, calculate z.",formula:"z = 0.6(5) + 0.4(10) + 0",steps:["Multiply 0.6 × 5 = 3.","Multiply 0.4 × 10 = 4.","Add contributions and bias: 3 + 4 + 0 = 7."],answer:"The illustrative model score is 7.",interpretation:"A score is not automatically a calibrated probability or a safe decision."},
       {title:"Absolute error",question:"A model predicts 13 cm but a reference measurement is 10 cm. Find absolute error.",formula:"|13 − 10|",steps:["Identify the predicted value: 13 cm.","Identify the reference value: 10 cm.","Subtract and take the absolute value."],answer:"Absolute error = 3 cm.",interpretation:"Compare prediction accuracy over representative cases, including difficult cases."},
       {title:"Boundary condition",question:"A rule says STOP when distance is less than 20 cm. What happens at 20 cm?",formula:"20 < 20 is false",steps:["Write the comparison distance < threshold.","Substitute 20 for both values.","Because 20 is not strictly less than 20, the else branch runs."],answer:"The rule returns CONTINUE.",interpretation:"The sample rule is an instructional example, not a validated robot stopping policy."}
      ]}
      practice={[
       {question:"Compute z = 0.3(10) + 0.7(4).",solution:"3 + 2.8 = 5.8."},
       {question:"Find |17 − 12| in centimeters.",solution:"5 cm."},
       {question:"With threshold 25 cm, what happens at 24 cm and 25 cm?",solution:"24 < 25: STOP. 25 < 25: false, so CONTINUE."}
      ]}
     /></div>
     <section id="experiment" className="academy-lesson-section scroll-mt-24 p-7">
      <p className="academy-section-kicker">Visual Investigation</p><h2 className="mt-2 text-2xl font-black text-slate-950">Explore the rule boundary</h2>
      <p className="mt-3 text-sm leading-7">Change the threshold, predict the actions, and compare them to the rule. This is a mathematical visualization, not a live Python or hardware controller.</p>
      <label className="mt-5 block rounded-2xl bg-indigo-50 p-5 text-sm font-bold text-indigo-950">Threshold: {threshold} cm<input type="range" min="10" max="40" value={threshold} className="mt-4 w-full accent-indigo-700" onChange={event=>setThreshold(Number(event.target.value))}/></label>
      <div className="mt-5 grid gap-3 sm:grid-cols-3" aria-live="polite">{samples.map(item=><div key={item.distance} className="rounded-xl border border-slate-200 bg-slate-50 p-4"><p className="font-black text-slate-900">{item.distance} cm</p><p className="mt-2 text-sm font-bold text-indigo-700">{item.distance < threshold?"STOP":"CONTINUE"}</p><p className="mt-1 font-mono text-xs text-slate-500">{item.distance} &lt; {threshold}</p></div>)}</div>
      <p className="mt-4 text-sm leading-7"><strong>Investigate:</strong> Find thresholds that change only one action. What happens at equality? What if the sensor measurement is noisy or arrives late?</p>
      <button type="button" onClick={()=>setThreshold(20)} className="mt-3 rounded-xl border border-indigo-300 px-4 py-2 text-sm font-bold text-indigo-800">Reset experiment</button>
     </section>
     <div id="coding" className="scroll-mt-24"><CodingAndLumineryLab
      title="Trace robot-control logic using Python"
      introduction="Explain the mathematics of comparisons, trace the output, and then modify the program in your own Python environment."
      code={`threshold_cm = 20
readings_cm = [12, 20, 35]
for distance_cm in readings_cm:
    if distance_cm < threshold_cm:
        print("STOP")
    else:
        print("CONTINUE")`}
      expectedOutput={`STOP
CONTINUE
CONTINUE`}
      prediction={{question:"What is printed for the second sensor reading (20 cm)?",options:["STOP","CONTINUE","No output"],correctIndex:1,retryHint:"Substitute 20 into the strict less-than comparison 20 < 20.",explanation:"20 < 20 is false, so the else branch prints CONTINUE."}}
      simulation={{initialThreshold:20,initialReading:20}}
      challenges={["Change the threshold to 25. What changes?","Add a sensor reading of 18 cm and predict the output.","Explain how a learned model might use more input features—and why it must be evaluated separately.","Describe why this rule is not machine learning."]}
      reflection="How would you test whether a model learned useful patterns instead of memorizing examples? What could go wrong when a sensor gives a misleading reading?"
      hints={["Identify which decisions are hard-coded and which values would have to be estimated from data.","A learned model must be evaluated using data not used for fitting it.","Even a model with good test accuracy can fail under different environmental conditions; independently designed safety measures remain necessary."]}
     /></div>
     <RelatedLibraryResources title="Learn more about models and evaluation" description="Deepen this comparison between deterministic programs and learned predictions using relevant existing Data & AI lessons." resources={[
      {topic:"AI foundations",title:"Data, information, analytics, machine learning, and AI",why:"Revisit the distinction between automation, analysis, machine learning, and artificial intelligence.",path:"/library/data-ai/module/1/lesson/data-information-analytics-machine-learning-and-ai"},
      {topic:"Machine learning",title:"Features, Labels, Baselines, and Problem Framing",why:"Examine what a supervised model is asked to predict and why a baseline matters.",path:"/library/data-ai/module/8/lesson/features-labels-baselines-and-problem-framing"}
     ]}/>
     <section id="assessment" className="academy-lesson-section scroll-mt-24 p-7">
      <p className="academy-section-kicker">Knowledge Check</p><h2 className="mt-2 text-2xl font-black text-slate-950">Explain, calculate, and apply</h2>
      <p className="mt-3 text-sm">Answer all four questions. Three correct meets the lesson knowledge-check target.</p>
      <div className="mt-7 space-y-6">{questions.map((q,i)=><fieldset key={i} className="border-b border-slate-200 pb-5"><legend className="font-bold text-slate-950">{i+1}. {q.question}</legend><div className="mt-3 space-y-2">{q.options.map((option,j)=><label key={j} className={`flex cursor-pointer gap-3 rounded-xl border p-3 text-sm ${answers[i]===j?"border-indigo-600 bg-indigo-50":"border-slate-200"}`}><input className="accent-indigo-700" type="radio" name={`ai-rule-question-${i}`} checked={answers[i]===j} onChange={()=>{setAnswers(current=>({...current,[i]:j}));setSubmitted(false);setSaveStatus("idle");}}/><span>{option}</span></label>)}</div>{submitted&&<p className="mt-3 text-sm font-semibold text-indigo-800">{q.why}</p>}</fieldset>)}</div>
      <div className="mt-5 flex flex-wrap gap-3"><button type="button" disabled={!completed} onClick={()=>setSubmitted(true)} className="rounded-xl bg-indigo-700 px-5 py-3 font-black text-white disabled:opacity-40">Check answers</button><button type="button" onClick={()=>{setAnswers({});setSubmitted(false);setSaveStatus("idle");}} className="rounded-xl border border-indigo-300 px-5 py-3 font-black text-indigo-900">Try again</button></div>
      {submitted&&<p role="status" className="mt-4 rounded-xl bg-indigo-50 p-4 font-black text-indigo-950">Score: {score}/4 — {score>=3?"Knowledge-check target met":"Review and retry"}</p>}
      <div className="mt-5 rounded-xl border border-indigo-200 bg-indigo-50 p-5"><h3 className="font-black text-indigo-950">Save your assessment</h3>{saved&&<p className="mt-2 text-sm">Previous saved score: {saved.score}/4</p>}{!user&&!authLoading&&<Link to="/login" className="mt-2 inline-block font-bold text-indigo-700 underline">Sign in to save</Link>}{user&&<button type="button" onClick={save} disabled={!submitted||saveStatus==="saving"||saveStatus==="saved"} className="mt-3 rounded-xl bg-indigo-700 px-4 py-2 font-black text-white disabled:opacity-40">{saveStatus==="saving"?"Saving...":saveStatus==="saved"?"Saved":"Save lesson result"}</button>}{saveStatus==="saved"&&<p role="status" className="mt-3 text-sm font-bold text-emerald-900">Saved to your account.</p>}{error&&<p role="alert" className="mt-3 text-sm font-bold text-rose-800">{error}</p>}<p className="mt-3 text-xs leading-6 text-slate-600">Cloud saving requires the separately applied multi-lesson Supabase migration. Quiz practice still works without it.</p></div>
     </section>
     <section className="academy-lesson-section p-7"><p className="academy-section-kicker">Portfolio Evidence</p><h2 className="mt-2 text-2xl font-black text-slate-950">Prove your understanding</h2><p className="mt-4 leading-8">Build a comparison table of at least five robot sensor readings. For each, predict the fixed-rule action and calculate a simple weighted score from features you choose. Explain which system is learned, which is not, and what tests would be needed before deploying on real hardware.</p><div className="mt-6 flex flex-wrap gap-3"><Link to="/schools/artificial-intelligence/ai-foundations/module-1/lesson-2" className="rounded-xl border border-indigo-200 px-5 py-3 font-bold text-indigo-800">← Lesson 2</Link><Link to="/schools/artificial-intelligence/ai-foundations" className="rounded-xl bg-indigo-700 px-5 py-3 font-bold text-white">Course overview</Link></div></section>
    </div>
   </div>
  </div>
 </main>;
}
