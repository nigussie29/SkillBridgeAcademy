import { Link } from "react-router-dom";
import { computerScienceCourses } from "../../data/computerScience/courses";

export default function ComputerScience() {
  const totalModules = computerScienceCourses.reduce((sum, course) => sum + course.moduleCount, 0);
  const totalLessons = computerScienceCourses.reduce((sum, course) => sum + course.lessonCount, 0);

  return (
    <main className="min-h-screen bg-slate-50 pb-20 text-[17px] text-slate-700">
      <section className="bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950 text-white">
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
          <Link to="/library" className="font-bold text-blue-200 hover:text-white">← Knowledge Library</Link>
          <p className="mt-8 text-sm font-black uppercase tracking-[0.24em] text-cyan-300">KingNigus Academy</p>
          <h1 className="mt-3 max-w-5xl text-4xl font-black leading-tight md:text-6xl">School of Computer Science</h1>
          <p className="mt-5 max-w-4xl text-xl leading-9 text-slate-200">Build practical software skills through complete pathways in Python, modern web development, and relational databases. Every course includes guided labs, assessments, projects, and a capstone.</p>
          <div className="mt-8 flex flex-wrap gap-3 text-sm font-black">
            <Pill>3 available courses</Pill><Pill>{totalModules} modules</Pill><Pill>{totalLessons} lessons</Pill><Pill>24 portfolio projects</Pill>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12">
        <div className="flex flex-wrap items-end justify-between gap-5">
          <div><p className="text-sm font-black uppercase tracking-widest text-blue-700">Complete course catalog</p><h2 className="mt-2 text-3xl font-black text-slate-950">Choose your pathway</h2><p className="mt-3 max-w-3xl leading-8">Begin with one specialization or combine all three to build a full-stack software portfolio.</p></div>
          <span className="rounded-full bg-emerald-100 px-4 py-2 text-sm font-black text-emerald-800">All courses available</span>
        </div>

        <div className="mt-8 grid gap-7 lg:grid-cols-3">
          {computerScienceCourses.map((course) => (
            <Link key={course.id} to={course.basePath} className="group flex min-h-[500px] flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
              <div className={`bg-gradient-to-br ${course.accent} p-7 text-white`}>
                <div className="flex items-center justify-between gap-3"><p className="text-xs font-black uppercase tracking-[0.2em] text-white/70">Computer Science</p><span className="rounded-full bg-emerald-300/20 px-3 py-1 text-xs font-black text-emerald-100">AVAILABLE</span></div>
                <h3 className="mt-6 text-3xl font-black leading-tight">{course.title}</h3>
                <p className="mt-4 leading-8 text-white/80">{course.description}</p>
              </div>
              <div className="flex flex-1 flex-col p-7">
                <div className="grid grid-cols-2 gap-3 text-sm font-bold"><Stat value="8" label="Modules" /><Stat value="64" label="Lessons" /><Stat value="8" label="Projects" /><Stat value={course.duration} label="Duration" /></div>
                <div className="mt-6 rounded-2xl bg-slate-50 p-4"><p className="text-sm font-black uppercase tracking-widest text-slate-500">Final capstone</p><p className="mt-2 font-black text-slate-950">{course.capstone}</p></div>
                <div className="mt-auto flex items-center justify-between pt-7 font-black text-blue-700"><span>Explore full course</span><span className="transition group-hover:translate-x-1">→</span></div>
              </div>
            </Link>
          ))}
        </div>

        <section className="mt-10 rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200"><p className="text-sm font-black uppercase tracking-widest text-blue-700">Recommended sequence</p><h2 className="mt-2 text-3xl font-black text-slate-950">A practical full-stack route</h2><div className="mt-6 grid gap-4 md:grid-cols-3"><Step number="1" title="Python Foundations" text="Build programming logic, automation, testing, and a complete information system." /><Step number="2" title="Database Foundations" text="Design the reliable data layer and query it confidently with PostgreSQL." /><Step number="3" title="Web Development" text="Create the accessible user interface and connect it to real data and APIs." /></div></section>
      </section>
    </main>
  );
}

function Pill({ children }) { return <span className="rounded-full bg-white/10 px-4 py-2 ring-1 ring-white/20">{children}</span>; }
function Stat({ value, label }) { return <div className="rounded-2xl bg-blue-50 p-3"><p className="font-black text-blue-800">{value}</p><p className="text-xs uppercase tracking-wide text-slate-500">{label}</p></div>; }
function Step({ number, title, text }) { return <div className="rounded-2xl bg-slate-50 p-5"><span className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-700 font-black text-white">{number}</span><h3 className="mt-4 text-xl font-black text-slate-950">{title}</h3><p className="mt-2 leading-7">{text}</p></div>; }
