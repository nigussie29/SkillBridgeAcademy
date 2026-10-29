import { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthContext.jsx";
import { getAiLessonProgress, saveAiLessonProgress } from "../../services/aiLessonProgress.js";
import { markLessonComplete } from "../../services/lessonProgress.js";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, BrainCircuit, CheckCircle2, RotateCcw } from "lucide-react";

const questions = [
 {question:"Which description best defines artificial intelligence?", options:["Software that can perform tasks requiring capabilities such as perception, language, or reasoning","Any website connected to the internet","Only physical robots"], answer:0, why:"AI systems can recognize patterns, interpret language, make predictions, and perform other tasks."},
 {question:"Which of these is a machine-learning example?", options:["A fixed calculator formula","An email spam filter trained on examples","A printed textbook"], answer:1, why:"A trained spam classifier learns statistical patterns from labeled messages."},
 {question:"Which statement about generative AI is most accurate?", options:["Its outputs are always correct","It can produce new text or images but needs checking","It cannot produce language"], answer:1, why:"Generative models can produce fluent but inaccurate responses; verification remains important."},
 {question:"A school wants AI to decide whether to deny a student a place. What is essential?", options:["No human review","Transparent evaluation, privacy protection, and meaningful human oversight","Only faster automation"], answer:1, why:"High-impact decisions require careful oversight and safeguards."}
];

export default function AIFoundationsLessonOne(){
 const { user, loading: authLoading } = useAuth();
 const [answers,setAnswers] = useState({});
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
 return <main className="min-h-screen bg-slate-50 text-slate-900">
  <section className="bg-gradient-to-br from-slate-950 via-indigo-950 to-violet-950 px-6 py-16 text-white">
   <div className="mx-auto max-w-5xl">
    <Link to="/schools/artificial-intelligence" className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-200 hover:text-white"><ArrowLeft size={16}/> School of Artificial Intelligence</Link>
    <div className="mt-8 flex items-center gap-3 text-sm font-bold uppercase tracking-widest text-cyan-300"><BrainCircuit size={22}/> AI Foundations · Module 1 · Lesson 1</div>
    <h1 className="mt-4 text-4xl font-black sm:text-5xl">What Is Artificial Intelligence?</h1>
    <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-200">Discover what AI does, how learning from data differs from fixed rules, where AI is used, and why human judgment still matters.</p>
    <p className="mt-4 text-sm text-slate-300">Estimated reading and practice: 25–35 minutes · No prerequisites</p>
   </div>
  </section>
  <div className="mx-auto max-w-5xl space-y-8 px-6 py-12">
   <section className="rounded-3xl border border-slate-200 bg-white p-7">
    <h2 className="text-2xl font-black">Learning objectives</h2>
    <ul className="mt-4 list-inside list-disc space-y-2 leading-7 text-slate-700"><li>Explain AI in your own words.</li><li>Distinguish rule-based programs, machine learning, and generative AI.</li><li>Identify benefits, limitations, and responsible-use considerations.</li></ul>
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
   <section className="rounded-3xl border border-slate-200 bg-white p-7"><h2 className="text-2xl font-black">3. Practice: categorize the system</h2>
    <p className="mt-4 leading-8 text-slate-700">Write down a reason for each classification: (a) a timer alerts exactly 10 minutes after a start button is pressed; (b) an image model learns to identify cats from labeled photos; (c) a chatbot drafts a new explanation of fractions. Suggested classifications: (a) fixed-rule automation; (b) machine learning; (c) generative AI.</p>
    <p className="mt-4 leading-8 text-slate-700"><strong>Responsible AI checklist:</strong> Ask whether training data is appropriate, whether outputs can be wrong or biased, whose personal information is involved, and who reviews consequential decisions.</p>
   </section>
   <section className="rounded-3xl border border-slate-200 bg-white p-7"><h2 className="text-2xl font-black">4. Check your understanding</h2>
    <p className="mt-3 text-slate-600">Answer all four questions, then select Check Answers. A score of at least 3 out of 4 meets this lesson's knowledge-check target.</p>
    <div className="mt-8 space-y-8">{questions.map((q,i)=><fieldset key={i} className="border-b border-slate-100 pb-7"><legend className="font-bold">{i+1}. {q.question}</legend><div className="mt-4 space-y-3">{q.options.map((opt,j)=><label key={j} className={`flex cursor-pointer gap-3 rounded-xl border p-4 text-sm leading-6 ${answers[i]===j?"border-indigo-600 bg-indigo-50":"border-slate-200"}`}><input type="radio" name={`question-${i}`} checked={answers[i]===j} onChange={()=>{setAnswers(prev=>({...prev,[i]:j}));setSubmitted(false);setSaveStatus("idle");}} className="mt-1 accent-indigo-600"/><span>{opt}</span></label>)}</div>{submitted&&<p className={`mt-3 text-sm font-semibold ${answers[i]===q.answer?"text-emerald-700":"text-amber-800"}`}>{answers[i]===q.answer?"Correct. ":"Review this answer. "}{q.why}</p>}</fieldset>)}</div>
    <div className="mt-7 flex flex-wrap gap-3"><button type="button" disabled={!complete} onClick={()=>setSubmitted(true)} className="rounded-xl bg-indigo-700 px-6 py-3 font-bold text-white hover:bg-indigo-600 disabled:cursor-not-allowed disabled:opacity-40">Check Answers</button><button type="button" onClick={()=>{setAnswers({});setSubmitted(false);setSaveStatus("idle")}} className="inline-flex items-center gap-2 rounded-xl border border-slate-300 px-6 py-3 font-bold"><RotateCcw size={17}/>Try Again</button></div>
    {submitted&&<div role="status" className={`mt-6 rounded-2xl p-5 ${score>=3?"bg-emerald-50 text-emerald-900":"bg-amber-50 text-amber-950"}`}><div className="flex items-center gap-2 font-black">{score>=3&&<CheckCircle2 size={20}/>}Score: {score}/4 — {score>=3?"Knowledge-check target met":"Review the explanations and retry"}</div><p className="mt-2 text-sm">Your score is currently in-page only. Sign in and select Save Result to store it in your academy account. This quiz does not award a course credential.</p></div>}
    <div className="mt-5 rounded-2xl border border-indigo-200 bg-indigo-50 p-5">
     <h3 className="font-bold text-indigo-950">Account progress</h3>
     {saved && <p className="mt-2 text-sm text-indigo-900">Last saved result: {saved.score}/{saved.total_questions} · {saved.completed?"Knowledge check completed":"Needs review"}</p>}
     {!user && !authLoading && <p className="mt-2 text-sm text-indigo-900">Sign in to save and restore your progress after logging out.</p>}
     {user && <button type="button" onClick={handleSave} disabled={!submitted || saveStatus==="saving"} className="mt-3 rounded-xl bg-indigo-700 px-5 py-3 font-bold text-white disabled:opacity-50">{saveStatus==="saving"?"Saving...":"Save Result to My Account"}</button>}
     {!user && <Link className="mt-3 inline-block font-bold text-indigo-700 underline" to="/login">Sign in to save</Link>}
     {saveStatus==="saved" && <p role="status" className="mt-2 text-sm font-semibold text-emerald-800">Saved securely to your account.</p>}
     {saveError && <p role="alert" className="mt-2 text-sm font-semibold text-red-700">{saveError}</p>}
    </div>
   </section>
   <section className="rounded-3xl border border-slate-200 bg-white p-7"><h2 className="text-2xl font-black">5. Create evidence</h2><p className="mt-3 leading-8 text-slate-700">In 100–150 words, describe one problem that AI might help solve in your community. Explain the data needed, one possible error, and which decision should remain with a person. Save your response for your future portfolio.</p><Link to="/schools/artificial-intelligence" className="mt-6 inline-flex items-center gap-2 font-bold text-indigo-700">Back to AI school <ArrowRight size={18}/></Link></section>
  </div>
 </main>;
}
