import { useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import { getCompletedLessons } from "../../../services/lessonProgress";
import { getMathematicsCourse, getMathematicsLessonPath, getMathematicsModule } from "../../../data/mathematics/curriculum";

export default function MathematicsModule({ fixedCourseSlug }) {
  const { courseSlug, moduleNumber } = useParams();
  const slug = fixedCourseSlug || courseSlug;
  const course = getMathematicsCourse(slug);
  const module = getMathematicsModule(slug, moduleNumber);
  const completed = useMemo(() => course && module ? getCompletedLessons(course.id, module.id) : [], [course, module]);
  if (!course || !module) return <main className="min-h-screen bg-slate-50 p-12 text-center"><h1 className="text-4xl font-black">Module not found</h1></main>;
  const next = module.lessons.find((lesson) => !completed.includes(lesson.slug)) || module.lessons[0];
  const progress = Math.round((completed.length / 8) * 100);

  return (
    <main className="min-h-screen bg-slate-50 pb-20 text-[17px] text-slate-700">
      <section className={`bg-gradient-to-br ${module.color} text-white`}><div className="mx-auto max-w-7xl px-6 py-14"><nav className="flex flex-wrap gap-2 text-sm font-bold text-white/70"><Link to="/library/mathematics">Mathematics</Link><span>/</span><Link to={course.basePath}>{course.title}</Link><span>/</span><span>Module {module.id}</span></nav><p className="mt-8 text-sm font-black uppercase tracking-[0.2em] text-cyan-300">Module {module.id} of 8</p><h1 className="mt-3 max-w-5xl text-4xl font-black md:text-5xl">{module.title}</h1><p className="mt-5 max-w-4xl text-xl leading-9 text-white/85">{module.description}</p><div className="mt-7 flex flex-wrap gap-3 text-sm font-black"><Pill>8 lessons</Pill><Pill>1 portfolio project</Pill><Pill>8 mastery checks</Pill></div><Link to={getMathematicsLessonPath(course, next)} className="mt-8 inline-flex rounded-xl bg-white px-6 py-3 font-black text-blue-800">{completed.length ? "Continue module" : "Start module"} →</Link></div></section>
      <div className="mx-auto max-w-7xl px-6 py-10">
        <section className="grid gap-6 lg:grid-cols-[1fr_360px]"><div className="rounded-3xl bg-white p-7 shadow-sm ring-1 ring-slate-200"><div className="flex items-end justify-between"><div><p className="text-sm font-black uppercase tracking-widest text-blue-700">Module progress</p><h2 className="mt-2 text-3xl font-black text-slate-950">{completed.length} of 8 lessons</h2></div><span className="text-3xl font-black text-blue-700">{progress}%</span></div><div className="mt-5 h-4 overflow-hidden rounded-full bg-slate-200"><div className="h-full bg-blue-600" style={{ width: `${progress}%` }} /></div></div><div className="rounded-3xl bg-emerald-50 p-7 ring-1 ring-emerald-200"><p className="text-sm font-black uppercase tracking-widest text-emerald-800">Module project</p><h2 className="mt-2 text-2xl font-black text-slate-950">{module.project}</h2><p className="mt-2 leading-7">Lesson 8 guides the complete mathematical artifact.</p></div></section>
        <section className="mt-8 rounded-3xl bg-white p-7 shadow-sm ring-1 ring-slate-200"><p className="text-sm font-black uppercase tracking-widest text-blue-700">Key formulas and relationships</p><div className="mt-5 grid gap-3 md:grid-cols-3">{module.formulas.map((formula) => <div key={formula} className="rounded-2xl bg-slate-950 p-4 text-center font-mono font-bold text-cyan-200">{formula}</div>)}</div></section>
        <section className="mt-9"><p className="text-sm font-black uppercase tracking-widest text-blue-700">Lesson sequence</p><h2 className="mt-2 text-3xl font-black text-slate-950">Understand → represent → solve → verify → create</h2><div className="mt-6 grid gap-5 md:grid-cols-2">{module.lessons.map((lesson) => { const done = completed.includes(lesson.slug); return <Link key={lesson.id} to={getMathematicsLessonPath(course, lesson)} className="group flex gap-5 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-blue-300 hover:shadow-lg"><div className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl text-xl font-black ${done ? "bg-emerald-100 text-emerald-700" : "bg-blue-100 text-blue-700"}`}>{done ? "✓" : lesson.lessonNumber}</div><div><div className="flex flex-wrap gap-2"><p className="text-sm font-black uppercase tracking-widest text-slate-500">Lesson {lesson.lessonNumber}</p>{lesson.project && <span className="rounded-full bg-amber-100 px-2 py-1 text-xs font-black text-amber-800">PROJECT</span>}</div><h3 className="mt-2 text-xl font-black text-slate-950 group-hover:text-blue-700">{lesson.title}</h3><p className="mt-2 leading-7">{lesson.bigIdea}</p><p className="mt-4 text-sm font-black text-blue-700">{lesson.duration} · Open lesson →</p></div></Link>; })}</div></section>
        <div className="mt-10 flex flex-wrap justify-between gap-4"><Link to={course.basePath} className="rounded-xl border border-slate-300 bg-white px-5 py-3 font-black">← Course overview</Link>{module.id < 8 ? <Link to={`${course.basePath}/module/${module.id + 1}`} className="rounded-xl bg-blue-700 px-5 py-3 font-black text-white">Next module →</Link> : <Link to={`${course.basePath}/completion`} className="rounded-xl bg-emerald-700 px-5 py-3 font-black text-white">Course completion →</Link>}</div>
      </div>
    </main>
  );
}

function Pill({ children }) { return <span className="rounded-full bg-white/10 px-4 py-2 ring-1 ring-white/20">{children}</span>; }
