import { Link } from "react-router-dom";
import { ArrowRight, BrainCircuit, Bot, Sparkles, ShieldCheck, BookOpen, Code2 } from "lucide-react";

const programs = [
  { name: "AI Foundations", level: "Beginner", project: "Build a simple AI-powered application", skills: "AI concepts, responsible use, prompts" },
  { name: "Python for AI", level: "Beginner", project: "Create a data exploration assistant", skills: "Python, pandas, visualization" },
  { name: "Mathematics for AI", level: "Intermediate", project: "Build a linear algebra visualizer", skills: "Vectors, matrices, probability, calculus" },
  { name: "Machine Learning", level: "Intermediate", project: "Train and evaluate a prediction model", skills: "scikit-learn, supervised learning, evaluation" },
  { name: "Deep Learning", level: "Advanced", project: "Build an image classifier", skills: "Neural networks, training, PyTorch" },
  { name: "Generative AI & LLMs", level: "Advanced", project: "Create a grounded AI chatbot", skills: "Transformers, retrieval, evaluation" },
  { name: "AI Agents & Automation", level: "Advanced", project: "Build a supervised workflow agent", skills: "Tool calling, orchestration, safeguards" },
  { name: "AI Engineering & MLOps", level: "Professional", project: "Deploy and monitor an AI service", skills: "APIs, testing, Docker, monitoring" },
];

const stages = ["Learn", "Practice", "Build", "Master", "Apply", "Create", "Lead"];

export default function ArtificialIntelligenceSchool() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-indigo-950 to-violet-950 px-6 py-20 text-white md:py-28">
        <div aria-hidden="true" className="pointer-events-none absolute -right-20 -top-24 h-96 w-96 rounded-full bg-fuchsia-500/20 blur-3xl" />
        <div aria-hidden="true" className="pointer-events-none absolute -bottom-28 left-0 h-80 w-80 rounded-full bg-cyan-400/20 blur-3xl" />
        <div className="relative mx-auto max-w-7xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-violet-300/30 bg-white/10 px-4 py-2 text-sm font-bold text-violet-100"><BrainCircuit size={18} /> KingsNigus Academy · Academic Schools</div>
          <h1 className="mt-8 max-w-4xl text-4xl font-black tracking-tight sm:text-6xl lg:text-7xl">School of <span className="block bg-gradient-to-r from-cyan-300 via-blue-300 to-fuchsia-300 bg-clip-text text-transparent">Artificial Intelligence</span></h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-200 md:text-xl">Learn AI. Build intelligence. Shape the future. Develop mathematics, coding, model-building, and responsible AI skills through practical projects and verifiable evidence.</p>
          <div className="mt-9 flex flex-wrap gap-4">
            <a href="#programs" className="inline-flex items-center gap-2 rounded-xl bg-cyan-400 px-7 py-4 font-bold text-slate-950 transition hover:bg-cyan-300">Explore AI programs <ArrowRight size={18} /></a>
            <Link to="/login" className="inline-flex items-center rounded-xl border border-white/25 bg-white/10 px-7 py-4 font-bold text-white transition hover:bg-white/20">Student login</Link>
          </div>
          <div className="mt-7 rounded-2xl border border-cyan-300/30 bg-white/10 p-5 backdrop-blur-sm">
            <p className="text-xs font-extrabold uppercase tracking-widest text-cyan-200">Connected Knowledge Library</p>
            <div className="mt-3 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <p className="max-w-2xl text-sm leading-7 text-slate-100">The School of AI provides structured learning pathways. The Data &amp; AI Library adds detailed notes, Python, statistics, analytics, data engineering, and project references. Use both as one connected learning journey.</p>
              <Link to="/library/data-ai" className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-cyan-400 px-5 py-3 text-sm font-black text-slate-950 hover:bg-cyan-300">Open Data &amp; AI Library <ArrowRight size={17}/></Link>
            </div>
          </div>
          <div className="mt-10 flex flex-wrap gap-2">{stages.map(stage => <span key={stage} className="rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-bold text-slate-100">{stage}</span>)}</div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20" id="programs">
        <div className="max-w-3xl">
          <p className="text-sm font-extrabold uppercase tracking-widest text-indigo-600">Capability-first AI education</p>
          <h2 className="mt-3 text-3xl font-black sm:text-4xl">Explore eight AI learning pathways</h2>
          <p className="mt-4 text-lg leading-8 text-slate-600">Each pathway is a planned program with an applied portfolio project. Course enrollment opens as lessons, assessments, and instructor review are ready.</p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {programs.map((program, index) => (
            <article key={program.name} className="flex flex-col rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              <div className="flex items-center justify-between gap-3"><span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-100 font-black text-indigo-700">{String(index + 1).padStart(2,"0")}</span><span className="rounded-full bg-amber-50 px-3 py-1 text-xs font-bold text-amber-800">Curriculum in development</span></div>
              <h3 className="mt-6 text-xl font-extrabold">{program.name}</h3>
              <p className="mt-2 text-sm font-bold text-indigo-700">{program.level}</p>
              <p className="mt-4 text-sm leading-6 text-slate-600">{program.skills}</p>
              <div className="mt-auto border-t border-slate-100 pt-5"><p className="text-xs font-bold uppercase tracking-wide text-slate-500">Portfolio project</p><p className="mt-2 text-sm font-semibold">{program.project}</p>{index === 0 && <Link to="/schools/artificial-intelligence/ai-foundations" className="mt-5 inline-flex items-center gap-2 rounded-lg bg-indigo-700 px-4 py-2.5 text-sm font-bold text-white hover:bg-indigo-600">Explore AI Foundations <ArrowRight size={16}/></Link>}</div>
            </article>
          ))}
        </div>
      </section>
      <section className="bg-white px-6 py-20"><div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-3">
        {[{Icon:BookOpen,title:"Concepts that stick",body:"Combine explanations, mathematical foundations, coding practice and formative assessment."},{Icon:Bot,title:"Mentored thinking",body:"Luminery AI is part of our learning vision. Instructor review and student independence remain essential."},{Icon:ShieldCheck,title:"Evidence over badges",body:"Demonstrate capability with projects, reflections and defensible work. Certificates are not offered before requirements are ready."}].map(({Icon,title,body}) => <article key={title} className="rounded-3xl border border-slate-200 p-7"><Icon className="text-indigo-600" size={32}/><h3 className="mt-5 text-xl font-bold">{title}</h3><p className="mt-3 leading-7 text-slate-600">{body}</p></article>)}
      </div></section>
      <section className="bg-slate-950 px-6 py-16 text-white"><div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 md:flex-row md:items-center"><div><div className="flex items-center gap-2 text-cyan-300"><Sparkles size={20}/><span className="font-bold">From learning to creation</span></div><h2 className="mt-3 text-3xl font-black">Start with what you can build.</h2><p className="mt-3 max-w-2xl text-slate-300">Explore current resources while AI school course content is being prepared.</p></div><Link to="/library/data-ai" className="inline-flex items-center gap-2 rounded-xl bg-cyan-400 px-7 py-4 font-bold text-slate-950 hover:bg-cyan-300"><Code2 size={18}/> Explore Data & AI library</Link></div></section>
    </main>
  );
}
