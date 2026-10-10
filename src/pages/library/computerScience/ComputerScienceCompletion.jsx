import { useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import { getCompletedLessons } from "../../../services/lessonProgress";
import { getComputerScienceCourse } from "../../../data/computerScience/courses";

export default function ComputerScienceCompletion({ fixedCourseSlug }) {
  const { courseSlug } = useParams();
  const course = getComputerScienceCourse(fixedCourseSlug || courseSlug);
  const moduleProgress = useMemo(() => course?.modules.map((module) => ({ module, count: getCompletedLessons(course.id, module.id).length })) || [], [course]);

  if (!course) return <main className="min-h-screen p-12 text-center"><h1 className="text-4xl font-black">Course not found</h1></main>;
  const completed = moduleProgress.reduce((total, item) => total + item.count, 0);
  const eligible = completed === 64;

  return (
    <main className="min-h-screen bg-slate-50 pb-20 text-[17px] text-slate-700">
      <section className={`bg-gradient-to-br ${course.accent} text-white`}><div className="mx-auto max-w-6xl px-6 py-16"><Link className="font-bold text-white/75" to={course.basePath}>← {course.title}</Link><p className="mt-8 text-sm font-black uppercase tracking-[0.2em] text-cyan-300">Completion center</p><h1 className="mt-3 text-4xl font-black md:text-6xl">Finish strong. Prove what you can build.</h1><p className="mt-5 max-w-4xl text-xl leading-9 text-white/85">Track all 64 lessons, eight portfolio projects, and the final {course.capstone} capstone.</p></div></section>
      <div className="mx-auto max-w-6xl px-6 py-10">
        <section className={`rounded-3xl p-8 shadow-sm ring-1 ${eligible ? "bg-emerald-50 ring-emerald-300" : "bg-white ring-slate-200"}`}><div className="flex flex-wrap items-end justify-between gap-5"><div><p className="text-sm font-black uppercase tracking-widest text-blue-700">Lesson completion</p><h2 className="mt-2 text-4xl font-black text-slate-950">{completed} / 64</h2><p className="mt-3 text-lg">{eligible ? "All lessons complete. Submit your capstone and evidence for review." : `${64 - completed} lessons remain before capstone review.`}</p></div><div className="text-6xl">{eligible ? "🏆" : "🎓"}</div></div><div className="mt-6 h-4 overflow-hidden rounded-full bg-slate-200"><div className="h-full bg-gradient-to-r from-blue-600 to-emerald-500" style={{ width: `${Math.round((completed / 64) * 100)}%` }} /></div></section>

        <section className="mt-8 grid gap-5 md:grid-cols-2">
          {moduleProgress.map(({ module, count }) => <Link key={module.id} to={`${course.basePath}/module/${module.id}`} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm hover:border-blue-300"><div className="flex items-center justify-between"><p className="text-sm font-black uppercase tracking-widest text-blue-700">Module {module.id}</p><span className={`rounded-full px-3 py-1 text-sm font-black ${count === 8 ? "bg-emerald-100 text-emerald-800" : "bg-slate-100 text-slate-700"}`}>{count}/8</span></div><h3 className="mt-3 text-xl font-black text-slate-950">{module.title}</h3><p className="mt-3 text-sm font-bold text-blue-700">{count === 8 ? "Complete ✓" : "Continue module →"}</p></Link>)}
        </section>

        <section className="mt-8 rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200"><p className="text-sm font-black uppercase tracking-widest text-blue-700">Certificate requirements</p><h2 className="mt-2 text-3xl font-black text-slate-950">Evidence-based completion</h2><div className="mt-6 grid gap-5 md:grid-cols-2"><Requirement title="64 lessons" text="Complete every lesson and mastery check." /><Requirement title="8 projects" text="Submit one working, documented project per module." /><Requirement title="Final capstone" text={`Build and present ${course.capstone}.`} /><Requirement title="Portfolio reflection" text="Explain decisions, tests, limitations, and next steps." /></div><p className="mt-7 rounded-2xl bg-amber-50 p-5 font-bold text-amber-900">A certificate becomes review-eligible after the 64 lessons, eight module projects, and final capstone evidence are complete.</p></section>
      </div>
    </main>
  );
}

function Requirement({ title, text }) { return <div className="rounded-2xl bg-slate-50 p-5"><h3 className="text-xl font-black text-slate-950">✓ {title}</h3><p className="mt-2 leading-7">{text}</p></div>; }
