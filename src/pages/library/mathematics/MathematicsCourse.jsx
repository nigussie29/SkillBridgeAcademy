import { useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import { getCompletedLessons } from "../../../services/lessonProgress";
import { getAllMathematicsLessons, getMathematicsCourse, getMathematicsLessonPath } from "../../../data/mathematics/curriculum";

export default function MathematicsCourse({ fixedCourseSlug }) {
  const { courseSlug } = useParams();
  const course = getMathematicsCourse(fixedCourseSlug || courseSlug);
  const completed = useMemo(() => course ? course.modules.flatMap((module) => getCompletedLessons(course.id, module.id).map((slug) => `${module.id}:${slug}`)) : [], [course]);
  if (!course) return <Missing label="Course" />;

  const lessons = getAllMathematicsLessons(course);
  const done = new Set(completed);
  const nextLesson = lessons.find((lesson) => !done.has(`${lesson.moduleNumber}:${lesson.slug}`));
  const progress = Math.round((completed.length / lessons.length) * 100);

  return (
    <main className="min-h-screen bg-slate-50 pb-20 text-[17px] text-slate-700">
      <section className={`bg-gradient-to-br ${course.accent} text-white`}>
        <div className="mx-auto max-w-7xl px-6 py-16">
          <Link to="/library/mathematics" className="font-bold text-white/75 hover:text-white">← Mathematics Library</Link>
          <p className="mt-8 text-sm font-black uppercase tracking-[0.22em] text-cyan-300">{course.pathway}</p>
          <h1 className="mt-3 max-w-5xl text-4xl font-black leading-tight md:text-6xl">{course.title}</h1>
          <p className="mt-5 max-w-4xl text-xl leading-9 text-white/85">{course.description}</p>
          <div className="mt-8 flex flex-wrap gap-3 text-sm font-black"><Pill>{course.grade}</Pill><Pill>8 modules</Pill><Pill>64 lessons</Pill><Pill>8 projects</Pill><Pill>{course.duration}</Pill></div>
          <Link to={nextLesson ? getMathematicsLessonPath(course, nextLesson) : `${course.basePath}/completion`} className="mt-9 inline-flex rounded-xl bg-white px-6 py-3 font-black text-blue-800 shadow-lg">{completed.length ? "Continue course" : "Begin course"} →</Link>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-6 py-10">
        <section className="grid gap-6 lg:grid-cols-[1fr_360px]">
          <div className="rounded-3xl bg-white p-7 shadow-sm ring-1 ring-slate-200"><div className="flex items-end justify-between gap-4"><div><p className="text-sm font-black uppercase tracking-widest text-blue-700">Course progress</p><h2 className="mt-2 text-3xl font-black text-slate-950">{completed.length} of 64 lessons</h2></div><span className="text-3xl font-black text-blue-700">{progress}%</span></div><div className="mt-5 h-4 overflow-hidden rounded-full bg-slate-200"><div className="h-full bg-gradient-to-r from-blue-600 to-cyan-500" style={{ width: `${progress}%` }} /></div></div>
          <div className="rounded-3xl bg-amber-50 p-7 ring-1 ring-amber-200"><p className="text-sm font-black uppercase tracking-widest text-amber-800">Course capstone</p><h2 className="mt-2 text-2xl font-black text-slate-950">{course.capstone}</h2><p className="mt-2 leading-7">Synthesize all eight module projects into evidence of mathematical mastery.</p></div>
        </section>

        <section className="mt-8 rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200"><p className="text-sm font-black uppercase tracking-widest text-blue-700">Course outcomes</p><h2 className="mt-2 text-3xl font-black text-slate-950">Reason, represent, verify, and apply</h2><div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">{course.outcomes.map((item) => <div key={item} className="flex gap-3 rounded-2xl bg-slate-50 p-5"><span className="font-black text-emerald-600">✓</span><span>{item}</span></div>)}</div></section>

        <section className="mt-10"><div className="flex flex-wrap items-end justify-between gap-4"><div><p className="text-sm font-black uppercase tracking-widest text-blue-700">Complete learning pathway</p><h2 className="mt-2 text-3xl font-black text-slate-950">All eight modules are available</h2></div><Link className="font-black text-blue-700" to={`${course.basePath}/completion`}>Completion requirements →</Link></div>
          <div className="mt-6 grid gap-6 lg:grid-cols-2">{course.modules.map((module) => { const count = getCompletedLessons(course.id, module.id).length; return <Link key={module.id} to={`${course.basePath}/module/${module.id}`} className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"><div className={`bg-gradient-to-br ${module.color} p-6 text-white`}><div className="flex items-center justify-between"><span className="rounded-xl bg-white/15 px-3 py-2 text-sm font-black">MODULE {module.id}</span><span className="rounded-full bg-emerald-300/20 px-3 py-1 text-xs font-black text-emerald-100">AVAILABLE</span></div><h3 className="mt-5 text-2xl font-black">{module.title}</h3><p className="mt-3 leading-7 text-white/80">{module.description}</p></div><div className="p-6"><div className="flex flex-wrap gap-2 text-sm font-bold"><Tag>8 lessons</Tag><Tag>1 project</Tag><Tag>100-point checks</Tag></div><div className="mt-5 flex items-center justify-between font-black text-blue-700"><span>{count}/8 complete</span><span className="transition group-hover:translate-x-1">Open module →</span></div></div></Link>; })}</div>
        </section>
      </div>
    </main>
  );
}

function Pill({ children }) { return <span className="rounded-full bg-white/10 px-4 py-2 ring-1 ring-white/20">{children}</span>; }
function Tag({ children }) { return <span className="rounded-full bg-slate-100 px-3 py-1 text-slate-700">{children}</span>; }
function Missing({ label }) { return <main className="min-h-screen bg-slate-50 p-12 text-center"><h1 className="text-4xl font-black">{label} not found</h1><Link className="mt-6 inline-block font-black text-blue-700" to="/library/mathematics">Back to Mathematics</Link></main>; }
