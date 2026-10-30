import { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthContext.jsx";
import { getAiLessonProgress, saveAiLessonProgress } from "../../services/aiLessonProgress.js";
import { markLessonComplete } from "../../services/lessonProgress.js";
import { Link } from "react-router-dom";
import Breadcrumbs from "../../components/navigation/Breadcrumbs.jsx";
import { ArrowLeft, ArrowRight, BrainCircuit, CheckCircle2, RotateCcw } from "lucide-react";
import MathematicalDeepDive from "../../components/learning/MathematicalDeepDive.jsx";

const questions = [
 {question:"Which description best defines artificial intelligence?", options:["Software that can perform tasks requiring capabilities such as perception, language, or reasoning","Any website connected to the internet","Only physical robots"], answer:0, why:"AI systems can recognize patterns, interpret language, make predictions, and perform other tasks."},
 {question:"Which of these is a machine-learning example?", options:["A fixed calculator formula","An email spam filter trained on examples","A printed textbook"], answer:1, why:"A trained spam classifier learns statistical patterns from labeled messages."},
 {question:"Which statement about generative AI is most accurate?", options:["Its outputs are always correct","It can produce new text or images but needs checking","It cannot produce language"], answer:1, why:"Generative models can produce fluent but inaccurate responses; verification remains important."},
 {question:"A school wants AI to decide whether to deny a student a place. What is essential?", options:["No human review","Transparent evaluation, privacy protection, and meaningful human oversight","Only faster automation"], answer:1, why:"High-impact decisions require careful oversight and safeguards."}
];

export default function AIFoundationsLessonOne(){
 const { user, loading: authLoading } = useAuth();
 const [answers,setAnswers] = useState({});
 const [studyHours,setStudyHours] = useState(4);
 const [practiceScore,setPracticeScore] = useState(7);
 const [saved,setSaved] = useState(null);
 const [saveStatus,setSaveStatus] = useState("idle");
 const [saveError,setSaveError] = useState("");
 useEffect(() => {
  let active=true;
  setSaved(null);
  if (!user?.id) return () => {active=false};
  getAiLessonProgress(user.id).then(data => {if(active) setSaved(data)}).catch(() => {if(active) setSaveError("Saved progress could not be loaded. Cloud storage may not be configured yet.")});
  return () => {active=false};
 }, [user?.id]);
 async function handleSave(){
  if(!user?.id || !submitted || !complete) return;
  setSaveStatus("saving"); setSaveError("");
  try {
   const record=await saveAiLessonProgress(user.id,score,questions.length);
   setSaved(record); setSaveStatus("saved");
   if(record.completed) {try{markLessonComplete("ai-foundations",1,"what-is-artificial-intelligence")}catch{/* Cloud record remains authoritative. */}}
  } catch {setSaveStatus("error");setSaveError("Unable to save to your account. Please check Supabase configuration and try again.");}
 }
 const [submitted,setSubmitted] = useState(false);
 const score = questions.reduce((sum,q,i)=>sum+(answers[i]===q.answer?1:0),0);
 const complete = Object.keys(answers).length===questions.length;
 return <main className="min-h-screen bg-slate-50 pb-20 text-[17px] leading-8 text-slate-700">
  <div className="h-1 bg-gradient-to-r from-blue-700 via-indigo-700 to-slate-950" />
  <div className="mx-auto max-w-7xl px-5 py-8 md:px-6">
   <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 text-sm font-bold text-slate-500">
    <Link to="/schools">Academic Schools</Link><span aria-hidden="true">/</span>
    <Link to="/schools/artificial-intelligence">Artificial Intelligence</Link><span aria-hidden="true">/</span>
    <Link to="/schools/artificial-intelligence/ai-foundations">AI Foundations</Link><span aria-hidden="true">/</span>
    <span className="text-slate-900" aria-current="page">Module 1 / Lesson 1</span>
   </nav>
   <section className="mt-6 overflow-hidden rounded-3xl bg-gradient-to-br from-blue-800 via-indigo-800 to-slate-950 p-7 text-white shadow-xl md:p-10">
    <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
     <div>
      <p className="text-sm font-black uppercase tracking-[0.2em] text-cyan-200">AI Foundations</p>
      <p className="mt-4 text-sm font-bold text-white/80">Module 1 · Lesson 1</p>
      <h1 className="mt-3 text-4xl font-black leading-tight md:text-5xl">What Is Artificial Intelligence?</h1>
      <p className="mt-5 max-w-4xl text-lg leading-9 text-white/85">Discover how AI uses data, mathematical models, and human judgment to solve problems responsibly.</p>
      <div className="mt-7 flex flex-wrap gap-2 text-xs font-black">
       <span className="rounded-full bg-white/15 px-4 py-2">25–35 minutes</span>
       <span className="rounded-full bg-white/15 px-4 py-2">Foundation</span>
       <span className="rounded-full bg-white/15 px-4 py-2">4-question knowledge check</span>
       <span className="rounded-full bg-white/15 px-4 py-2">Mathematics lab</span>
      </div>
     </div>
     <Link to="/schools/artificial-intelligence/ai-foundations" className="inline-flex shrink-0 items-center gap-2 self-start rounded-xl bg-white/10 px-4 py-3 text-sm font-black text-white ring-1 ring-white/20 hover:bg-white/20"><ArrowLeft size={16}/> Module</Link>
    </div>
   </section>
   <div className="mt-8 grid items-start gap-7 lg:grid-cols-[300px_minmax(0,1fr)]">
    <aside className="space-y-6 lg:sticky lg:top-24" aria-label="Lesson reference">
     <section className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
      <h2 className="bg-emerald-800 px-5 py-4 text-sm font-black text-white">Essential Vocabulary</h2>
      <dl className="space-y-4 p-5">
       {[
         ["Artificial Intelligence","Computing systems designed to perform tasks such as pattern recognition, prediction, and language processing."],
         ["Feature","A measurable property used as an input to a model."],
         ["Vector","An ordered list of numbers representing features."],
         ["Weight","A numerical coefficient determining a feature's contribution to a calculation."],
         ["Probability","A number between 0 and 1 expressing model-estimated uncertainty."],
         ["Prediction Error","The difference between a predicted result and an observed value."],
         ["Generative AI","Systems that generate text, images, or other content from learned patterns."]
       ].map(([term,definition])=><div key={term}><dt className="font-black text-slate-950">{term}</dt><dd className="mt-1 text-sm leading-6 text-slate-600">{definition}</dd></div>)}
      </dl>
     </section>
     <section className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
      <h2 className="bg-blue-800 px-5 py-4 text-sm font-black text-white">Key Formulas</h2>
      <div className="space-y-3 p-5 text-sm">
       <p className="overflow-x-auto rounded-xl bg-slate-950 p-3 font-mono font-bold text-cyan-200">x = [x₁, x₂]</p>
       <p className="overflow-x-auto rounded-xl bg-slate-950 p-3 font-mono font-bold text-cyan-200">z = w₁x₁ + w₂x₂</p>
       <p className="overflow-x-auto rounded-xl bg-slate-950 p-3 font-mono font-bold text-cyan-200">Error = |ŷ − y|</p>
      </div>
     </section>
     <section className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
      <h2 className="text-sm font-black uppercase tracking-widest text-slate-500">Lesson status</h2>
      <p className="mt-3 text-sm leading-6 text-slate-700">{saved ? `Saved score: ${saved.score}/${saved.total_questions}` : "No account score loaded yet."}</p>
      <p className="mt-1 text-sm font-bold text-indigo-800">{saved?.completed ? "Knowledge check completed" : "Complete the quiz and save your score below."}</p>
      <p className="mt-3 text-xs leading-5 text-slate-500">Progress is confirmed by your saved assessment, not by opening the page.</p>
     </section>
    </aside>
    <div className="min-w-0 space-y-7">
     <div className="grid gap-4 md:grid-cols-2">
      <section className="rounded-3xl border-l-4 border-blue-500 bg-white p-6 shadow-sm">
       <p className="text-xs font-black uppercase tracking-widest text-blue-700">Essential Question</p>
       <p className="mt-3 font-bold text-slate-950">How can mathematics and data help a computer make useful predictions?</p>
      </section>
      <section className="rounded-3xl border-l-4 border-emerald-500 bg-white p-6 shadow-sm">
       <p className="text-xs font-black uppercase tracking-widest text-emerald-700">Big Idea</p>
       <p className="mt-3 font-bold text-slate-950">AI models represent information numerically, combine features, and evaluate results while requiring human oversight.</p>
      </section>
     </div>
     <section className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
      <p className="text-xs font-black uppercase tracking-widest text-blue-700">Context</p>
      <h2 className="mt-2 text-2xl font-black text-slate-950">Why this matters</h2>
      <p className="mt-4 leading-8">Understanding features, weighted scores, probabilities, and error prepares you to question AI outputs rather than accept them without evidence.</p>
     </section>
   <section className="rounded-3xl border border-slate-200 bg-white p-7">
    <h2 className="text-2xl font-black">Learning objectives</h2>
    <ul className="mt-4 list-inside list-disc space-y-2 leading-7 text-slate-700"><li>Explain AI in your own words.</li><li>Distinguish rule-based programs, machine learning, and generative AI.</li><li>Identify benefits, limitations, and responsible-use considerations.</li><li>Represent features as vectors, calculate a weighted score, and interpret probability and absolute error.</li></ul>
   </section>
   <section className="rounded-3xl border border-slate-200 bg-white p-7"><h2 className="text-2xl font-black">1. Understand</h2>
    <p className="mt-4 leading-8 text-slate-700">Artificial intelligence (AI) is a field of computing concerned with building systems that perform tasks associated with human intelligence, such as recognizing patterns, understanding language, making predictions, and planning actions. AI does not necessarily think or understand the world as a person does.</p>
    <div className="mt-6 grid gap-4 md:grid-cols-3">
     {[["Rule-based program","A developer explicitly writes instructions. Example: if a score is below 60, show a review message."],["Machine learning","A model is fitted using data. Example: learning patterns that help flag suspicious transactions."],["Generative AI","A model produces content. Example: generating a draft study explanation that still needs verification."]].map(([title,body])=><div key={title} className="rounded-2xl bg-indigo-50 p-5"><h3 className="font-bold text-indigo-950">{title}</h3><p className="mt-2 text-sm leading-6 text-slate-700">{body}</p></div>)}
    </div>
   </section>
   <section className="rounded-3xl border border-slate-200 bg-white p-7"><h2 className="text-2xl font-black">2. Explore a real situation</h2>
    <p className="mt-4 leading-8 text-slate-700">Imagine a tutoring center receiving hundreds of inquiries. A rule-based system can assign messages containing the exact word “algebra” to a mathematics queue. A trained language classifier may identify requests about solving equations even when the word “algebra” is absent. A generative model can draft a polite reply for staff approval. None of these systems should automatically promise availability or invent pricing.</p>
    <div className="mt-5 rounded-xl border-l-4 border-cyan-500 bg-cyan-50 p-5"><strong>Think:</strong> Which part of this workflow needs human verification? What could happen if a model misreads the message?</div>
   </section>
   <section className="rounded-3xl border border-indigo-200 bg-white p-7" aria-labelledby="ai-mathematics-title">
    <p className="text-xs font-extrabold uppercase tracking-widest text-indigo-700">Mathematics behind AI</p>
    <h2 id="ai-mathematics-title" className="mt-2 text-2xl font-black">3. How AI uses mathematics</h2>
    <p className="mt-4 leading-8 text-slate-700">Numbers are the language of many AI models. We represent information as numbers, combine it with mathematical operations, and compare predictions against evidence. These simple examples prepare you for the deeper linear algebra, statistics, and calculus studied in later courses.</p>
    <div className="mt-6 grid gap-4 md:grid-cols-2">
     <div className="rounded-2xl bg-slate-50 p-5">
      <h3 className="font-bold text-slate-950">1. Vectors: describe information</h3>
      <p className="mt-3 leading-7 text-slate-700">A student can be represented by a feature vector x = [4, 7], where 4 is hours spent studying and 7 is a practice score out of 10. The model operates on numerical features, not on the student's identity.</p>
      <p className="mt-3 rounded-xl bg-white p-3 font-mono text-sm text-indigo-800">x = [hours, practice]</p>
     </div>
     <div className="rounded-2xl bg-slate-50 p-5">
      <h3 className="font-bold text-slate-950">2. Weighted sums: combine evidence</h3>
      <p className="mt-3 leading-7 text-slate-700">A simple illustrative model combines two features with weights. The weights determine how strongly each feature contributes to its numerical score.</p>
      <p className="mt-3 rounded-xl bg-white p-3 font-mono text-sm text-indigo-800">z = 0.5 × hours + 0.8 × practice</p>
     </div>
     <div className="rounded-2xl bg-slate-50 p-5">
      <h3 className="font-bold text-slate-950">3. Probability: express uncertainty</h3>
      <p className="mt-3 leading-7 text-slate-700">Some models estimate probabilities. For example, a probability of 0.75 represents 75% estimated likelihood under a model—not a guarantee that an event will happen.</p>
      <p className="mt-3 rounded-xl bg-white p-3 font-mono text-sm text-indigo-800">P(event) = 0.75 = 75%</p>
     </div>
     <div className="rounded-2xl bg-slate-50 p-5">
      <h3 className="font-bold text-slate-950">4. Error: learn from differences</h3>
      <p className="mt-3 leading-7 text-slate-700">A model's prediction can be compared with the actual result. If the prediction is 8 and the true result is 6, the absolute error is 2. Training seeks to reduce suitable error measures on representative data.</p>
      <p className="mt-3 rounded-xl bg-white p-3 font-mono text-sm text-indigo-800">Absolute error = |8 − 6| = 2</p>
     </div>
    </div>
    <div className="mt-7 rounded-2xl border border-indigo-200 bg-indigo-50 p-6">
     <h3 className="text-lg font-black text-indigo-950">Interactive mathematics lab: build a weighted score</h3>
     <p className="mt-2 text-sm leading-6 text-indigo-900">Move the sliders to see how a linear model combines two features. This is a teaching example, not a real grading or admission decision tool.</p>
     <div className="mt-5 grid gap-5 sm:grid-cols-2">
      <label className="block text-sm font-semibold text-indigo-950">Study hours: {studyHours}<input aria-label="Study hours" className="mt-3 w-full accent-indigo-700" type="range" min="0" max="10" step="1" value={studyHours} onChange={event=>setStudyHours(Number(event.target.value))}/></label>
      <label className="block text-sm font-semibold text-indigo-950">Practice score: {practiceScore}/10<input aria-label="Practice score" className="mt-3 w-full accent-indigo-700" type="range" min="0" max="10" step="1" value={practiceScore} onChange={event=>setPracticeScore(Number(event.target.value))}/></label>
     </div>
     <div className="mt-5 rounded-xl bg-white p-5" aria-live="polite">
      <p className="text-sm font-bold text-indigo-800">Linear model calculation</p>
      <p className="mt-2 font-mono text-sm text-slate-800">z = 0.5 × {studyHours} + 0.8 × {practiceScore}</p>
      <p className="mt-3 text-3xl font-black text-indigo-800">{(0.5*studyHours+0.8*practiceScore).toFixed(1)} <span className="text-sm font-medium text-slate-500">model-score units</span></p>
     </div>
     <p className="mt-4 text-sm leading-6 text-indigo-950"><strong>Try it:</strong> Set hours to 4 and practice to 7. Calculate 0.5 × 4 + 0.8 × 7 = 7.6. Then increase one feature. Which weight creates a larger change for each one-point increase?</p>
    </div>
    <p className="mt-6 text-sm leading-7 text-slate-600"><strong>Think critically:</strong> The weights here are chosen to teach arithmetic; they are not learned from real student data. Real AI development requires representative data, testing, and checks for fairness and privacy.</p>
   </section>
     <MathematicalDeepDive
      title="Mathematics behind AI — worked notes"
      introduction="Follow each calculation from representation to interpretation. AI relies on accurate arithmetic, algebra, vectors, statistics, and optimization. These are introductory mathematical models for learning, not verified student performance predictions."
      examples={[
       {title:"Representing data as a vector",question:"A learner studies 4 hours and completes 7 of 10 practice tasks. Write the feature vector and explain its entries.",formula:"x = [x₁, x₂] = [4, 7]",steps:["Define x₁ as study hours and x₂ as completed practice tasks.","Place both numeric features in a fixed order.","Keep the definition and units attached to each entry; switching the order changes the meaning."],answer:"x = [4, 7].",interpretation:"A vector encodes measurements in a consistent order. It does not by itself evaluate a person."},
       {title:"The dot product and weighted prediction",question:"Calculate a simple linear score from x = [4, 7] and weights w = [0.5, 0.8].",formula:"z = w · x = (0.5 × 4) + (0.8 × 7)",steps:["Multiply the first weight and feature: 0.5 × 4 = 2.","Multiply the second weight and feature: 0.8 × 7 = 5.6.","Add the weighted contributions: z = 2 + 5.6 = 7.6."],answer:"The weighted score is 7.6 model-score units.",interpretation:"Changing the first feature by 1 changes z by 0.5; changing the second by 1 changes z by 0.8, with weights held fixed."},
       {title:"Mean absolute error",question:"A toy model predicts [8, 6, 9] while observed values are [7, 8, 8]. Calculate mean absolute error (MAE).",formula:"MAE = (|8 − 7| + |6 − 8| + |9 − 8|) / 3",steps:["Find the three absolute errors: 1, 2, and 1.","Add them to get 4.","Divide by 3 predictions: MAE = 4 / 3 ≈ 1.33."],answer:"MAE ≈ 1.33 in the same units as the target variable.",interpretation:"Lower MAE indicates smaller typical absolute prediction errors on this sample, but the model must also be tested on new data."},
       {title:"Probability is not certainty",question:"A model estimates an event probability of 0.75. Express it as a percentage and interpret it.",formula:"0.75 × 100% = 75%",steps:["Recall that probability is between 0 and 1.","Multiply 0.75 by 100 to convert it to a percentage.","Distinguish an estimated likelihood from a guaranteed outcome."],answer:"The estimated probability is 75%, not a guarantee.",interpretation:"Whether the probability is trustworthy depends on calibration, evaluation, and the data used."}
      ]}
      practice={[
       {question:"For x = [3, 5] and w = [2, 0.4], calculate w · x.",solution:"(2 × 3) + (0.4 × 5) = 6 + 2 = 8."},
       {question:"A model predicts 12, and the actual result is 9. Find the absolute error.",solution:"|12 − 9| = 3."},
       {question:"Convert a model probability of 0.2 into a percentage.",solution:"0.2 × 100% = 20%."},
       {question:"Using z = 0.5x₁ + 0.8x₂, what happens when x₂ rises from 6 to 8 while x₁ is unchanged?",solution:"The increase is 0.8 × (8 − 6) = 1.6 model-score units."}
      ]}
     />
   <section className="rounded-3xl border border-slate-200 bg-white p-7"><h2 className="text-2xl font-black">4. Practice: categorize the system</h2>
    <p className="mt-4 leading-8 text-slate-700">Write down a reason for each classification: (a) a timer alerts exactly 10 minutes after a start button is pressed; (b) an image model learns to identify cats from labeled photos; (c) a chatbot drafts a new explanation of fractions. Suggested classifications: (a) fixed-rule automation; (b) machine learning; (c) generative AI.</p>
    <p className="mt-4 leading-8 text-slate-700"><strong>Responsible AI checklist:</strong> Ask whether training data is appropriate, whether outputs can be wrong or biased, whose personal information is involved, and who reviews consequential decisions.</p>
   </section>
   <section className="rounded-3xl border border-slate-200 bg-white p-7"><h2 className="text-2xl font-black">5. Check your understanding</h2>
    <p className="mt-3 text-slate-600">Answer all four questions, then select Check Answers. A score of at least 3 out of 4 meets this lesson's knowledge-check target.</p>
    <div className="mt-8 space-y-8">{questions.map((q,i)=><fieldset key={i} className="border-b border-slate-100 pb-7"><legend className="font-bold">{i+1}. {q.question}</legend><div className="mt-4 space-y-3">{q.options.map((opt,j)=><label key={j} className={`flex cursor-pointer gap-3 rounded-xl border p-4 text-sm leading-6 ${answers[i]===j?"border-indigo-600 bg-indigo-50":"border-slate-200"}`}><input type="radio" name={`question-${i}`} checked={answers[i]===j} onChange={()=>{setAnswers(prev=>({...prev,[i]:j}));setSubmitted(false);setSaveStatus("idle");}} className="mt-1 accent-indigo-600"/><span>{opt}</span></label>)}</div>{submitted&&<p className={`mt-3 text-sm font-semibold ${answers[i]===q.answer?"text-emerald-700":"text-amber-800"}`}>{answers[i]===q.answer?"Correct. ":"Review this answer. "}{q.why}</p>}</fieldset>)}</div>
    <div className="mt-7 flex flex-wrap gap-3"><button type="button" disabled={!complete} onClick={()=>setSubmitted(true)} className="rounded-xl bg-indigo-700 px-6 py-3 font-bold text-white hover:bg-indigo-600 disabled:cursor-not-allowed disabled:opacity-40">Check Answers</button><button type="button" onClick={()=>{setAnswers({});setSubmitted(false);setSaveStatus("idle")}} className="inline-flex items-center gap-2 rounded-xl border border-slate-300 px-6 py-3 font-bold"><RotateCcw size={17}/>Try Again</button></div>
    {submitted&&<div role="status" className={`mt-6 rounded-2xl p-5 ${score>=3?"bg-emerald-50 text-emerald-900":"bg-amber-50 text-amber-950"}`}><div className="flex items-center gap-2 font-black">{score>=3&&<CheckCircle2 size={20}/>}Score: {score}/4 — {score>=3?"Knowledge-check target met":"Review the explanations and retry"}</div><p className="mt-2 text-sm">Your score is currently in-page only. Sign in and select Save Result to store it in your academy account. This quiz does not award a course credential.</p></div>}
    <div className="mt-5 rounded-2xl border border-indigo-200 bg-indigo-50 p-5">
     <h3 className="font-bold text-indigo-950">Account progress</h3>
     {saved && <p className="mt-2 text-sm text-indigo-900">Last saved result: {saved.score}/{saved.total_questions} · {saved.completed?"Knowledge check completed":"Needs review"}</p>}
     {!user && !authLoading && <p className="mt-2 text-sm text-indigo-900">Sign in to save and restore your progress after logging out.</p>}
     {user && !submitted && <p className="mt-3 text-sm font-medium text-indigo-900" role="status">{saved ? "Your previously saved score is safe. To save a new attempt, answer all four questions and select Check Answers." : "To enable saving, answer all four questions above and select Check Answers."} {complete ? "All questions answered — select Check Answers above." : `Questions answered: ${Object.keys(answers).length} of ${questions.length}.`}</p>}
     {user && submitted && <button type="button" onClick={handleSave} disabled={saveStatus==="saving" || saveStatus==="saved"} className="mt-3 rounded-xl bg-indigo-700 px-5 py-3 font-bold text-white disabled:opacity-50">{saveStatus==="saving"?"Saving...":saveStatus==="saved"?"Result Saved":"Save Result to My Account"}</button>}
     {!user && <Link className="mt-3 inline-block font-bold text-indigo-700 underline" to="/login">Sign in to save</Link>}
     {saveStatus==="saved" && <p role="status" className="mt-2 text-sm font-semibold text-emerald-800">Saved securely to your account.</p>}
     {saveError && <p role="alert" className="mt-2 text-sm font-semibold text-red-700">{saveError}</p>}
    </div>
   </section>
   <section className="rounded-3xl border border-slate-200 bg-white p-7"><h2 className="text-2xl font-black">6. Create evidence</h2><p className="mt-3 leading-8 text-slate-700">In 100–150 words, describe one problem that AI might help solve in your community. Explain the data needed, one possible error, and which decision should remain with a person. Save your response for your future portfolio.</p><Link to="/schools/artificial-intelligence/ai-foundations" className="mt-6 inline-flex items-center gap-2 font-bold text-indigo-700">Back to AI Foundations <ArrowRight size={18}/></Link></section>
    </div>
   </div>
  </div>
 </main>;
}
