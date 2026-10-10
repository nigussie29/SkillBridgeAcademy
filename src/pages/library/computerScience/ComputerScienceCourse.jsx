import { useEffect, useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getCompletedLessons } from "../../../services/lessonProgress";
import {
  getAllCourseLessons,
  getComputerScienceCourse,
  getCourseLessonPath,
} from "../../../data/computerScience/courses";

export default function ComputerScienceCourse({ fixedCourseSlug }) {
  const { courseSlug } = useParams();
  const course = getComputerScienceCourse(fixedCourseSlug || courseSlug);
  const [revision, setRevision] = useState(0);

  useEffect(() => {
    const refresh = () => setRevision((value) => value + 1);
    window.addEventListener("focus", refresh);
    return () => window.removeEventListener("focus", refresh);
  }, []);

  const completed = useMemo(() => {
    if (!course) return [];
    return course.modules.flatMap((module) =>
      getCompletedLessons(course.id, module.id).map(
        (slug) => `${module.id}:${slug}`
      )
    );
  }, [course, revision]);

  if (!course) return <NotFound />;

  const lessons = getAllCourseLessons(course);
  const completedSet = new Set(completed);
  const firstIncomplete = lessons.find(
    (lesson) => !completedSet.has(`${lesson.moduleNumber}:${lesson.slug}`)
  );
  const progress = Math.round((completed.length / lessons.length) * 100);

  return (
    <main className="min-h-screen bg-slate-50 pb-20 text-[17px] text-slate-700">
      <section className={`bg-gradient-to-br ${course.accent} text-white`}>
        <div className="mx-auto max-w-7xl px-6 py-14 md:py-20">
          <Link to="/library/computer-science" className="font-bold text-white/75 hover:text-white">
            ← School of Computer Science
          </Link>
          <p className="mt-8 text-sm font-black uppercase tracking-[0.22em] text-cyan-300">
            Complete career pathway
          </p>
          <h1 className="mt-3 max-w-5xl text-4xl font-black leading-tight md:text-6xl">
            {course.title}
          </h1>
          <p className="mt-5 max-w-4xl text-xl leading-9 text-white/85">
            {course.description}
          </p>
          <div className="mt-8 flex flex-wrap gap-3 text-sm font-extrabold">
            <Pill>{course.moduleCount} modules</Pill>
            <Pill>{course.lessonCount} lessons</Pill>
            <Pill>{course.projectCount} portfolio projects</Pill>
            <Pill>{course.duration}</Pill>
            <Pill>{course.level}</Pill>
          </div>
          <Link
            to={firstIncomplete ? getCourseLessonPath(course, firstIncomplete) : `${course.basePath}/completion`}
            className="mt-9 inline-flex rounded-xl bg-white px-6 py-3 font-black text-blue-800 shadow-lg transition hover:-translate-y-0.5"
          >
            {completed.length ? "Continue learning" : "Begin course"} →
          </Link>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-6 py-10">
        <section className="grid gap-6 lg:grid-cols-[1fr_340px]">
          <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
            <div className="flex items-end justify-between gap-4">
              <div>
                <p className="text-sm font-black uppercase tracking-widest text-blue-700">Your progress</p>
                <h2 className="mt-2 text-3xl font-black text-slate-950">{completed.length} of 64 lessons</h2>
              </div>
              <span className="text-3xl font-black text-blue-700">{progress}%</span>
            </div>
            <div className="mt-5 h-4 overflow-hidden rounded-full bg-slate-200">
              <div className="h-full rounded-full bg-gradient-to-r from-blue-600 to-cyan-500" style={{ width: `${progress}%` }} />
            </div>
          </div>
          <div className="rounded-3xl bg-amber-50 p-7 ring-1 ring-amber-200">
            <p className="text-sm font-black uppercase tracking-widest text-amber-800">Capstone</p>
            <h2 className="mt-2 text-2xl font-black text-slate-950">{course.capstone}</h2>
            <p className="mt-2 leading-7">Complete all eight module projects, then present the final system with evidence.</p>
          </div>
        </section>

        <section className="mt-9 rounded-3xl bg-white p-7 shadow-sm md:p-9">
          <p className="text-sm font-black uppercase tracking-widest text-blue-700">Career outcomes</p>
          <h2 className="mt-2 text-3xl font-black text-slate-950">What you will be able to do</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {course.outcomes.map((outcome) => (
              <div key={outcome} className="flex gap-3 rounded-2xl bg-slate-50 p-5 leading-7">
                <span className="font-black text-emerald-600">✓</span><span>{outcome}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-9">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-sm font-black uppercase tracking-widest text-blue-700">Structured pathway</p>
              <h2 className="mt-2 text-3xl font-black text-slate-950">All 8 modules are available</h2>
            </div>
            <Link to={`${course.basePath}/completion`} className="font-black text-blue-700 hover:text-blue-900">Completion requirements →</Link>
          </div>
          <div className="mt-6 grid gap-6 lg:grid-cols-2">
            {course.modules.map((module) => {
              const moduleCompleted = getCompletedLessons(course.id, module.id).length;
              return (
                <Link
                  key={module.id}
                  to={`${course.basePath}/module/${module.id}`}
                  className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className={`bg-gradient-to-br ${module.color} p-6 text-white`}>
                    <div className="flex items-center justify-between gap-4">
                      <span className="rounded-xl bg-white/15 px-3 py-2 text-sm font-black">MODULE {module.id}</span>
                      <span className="rounded-full bg-emerald-300/20 px-3 py-1 text-sm font-black text-emerald-100">AVAILABLE</span>
                    </div>
                    <h3 className="mt-5 text-2xl font-black leading-tight">{module.title}</h3>
                    <p className="mt-3 leading-7 text-white/80">{module.description}</p>
                  </div>
                  <div className="p-6">
                    <div className="flex flex-wrap gap-2 text-sm font-bold">
                      <Tag>8 lessons</Tag><Tag>{module.duration}</Tag><Tag>1 project</Tag>
                    </div>
                    <div className="mt-5 flex items-center justify-between font-black text-blue-700">
                      <span>{moduleCompleted}/8 complete</span><span className="transition group-hover:translate-x-1">Open module →</span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>
      </div>
    </main>
  );
}

function Pill({ children }) {
  return <span className="rounded-full bg-white/10 px-4 py-2 ring-1 ring-white/20">{children}</span>;
}

function Tag({ children }) {
  return <span className="rounded-full bg-slate-100 px-3 py-1 text-slate-700">{children}</span>;
}

function NotFound() {
  return <main className="min-h-screen bg-slate-50 p-10 text-center"><h1 className="text-4xl font-black">Course not found</h1><Link className="mt-6 inline-block font-bold text-blue-700" to="/library/computer-science">Back to Computer Science</Link></main>;
}
