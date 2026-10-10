import { useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  getAllCourseLessons,
  getComputerScienceCourse,
  getComputerScienceLesson,
  getCourseLessonPath,
} from "../../../data/computerScience/courses";
import { isLessonCompleted, toggleLessonCompletion } from "../../../services/lessonProgress";

export default function ComputerScienceLesson({ fixedCourseSlug }) {
  const { courseSlug, moduleNumber, lessonSlug } = useParams();
  const slug = fixedCourseSlug || courseSlug;
  const course = getComputerScienceCourse(slug);
  const lesson = getComputerScienceLesson(slug, moduleNumber, lessonSlug);
  const [completed, setCompleted] = useState(() =>
    course && lesson ? isLessonCompleted(course.id, lesson.moduleNumber, lesson.slug) : false
  );

  const navigation = useMemo(() => {
    if (!course || !lesson) return {};
    const lessons = getAllCourseLessons(course);
    const index = lessons.findIndex((item) => item.id === lesson.id);
    return { previous: lessons[index - 1], next: lessons[index + 1] };
  }, [course, lesson]);

  if (!course || !lesson) {
    return <main className="min-h-screen bg-slate-50 p-12 text-center"><h1 className="text-4xl font-black">Lesson not found</h1><p className="mt-4 text-lg">The requested lesson is not in this course.</p><Link className="mt-6 inline-block font-black text-blue-700" to="/library/computer-science">Back to Computer Science</Link></main>;
  }

  const handleCompletion = () => {
    const result = toggleLessonCompletion(course.id, lesson.moduleNumber, lesson.slug);
    setCompleted(result.completed);
  };

  return (
    <main className="min-h-screen bg-slate-50 pb-20 text-[17px] leading-8 text-slate-700">
      <div className={`h-2 bg-gradient-to-r ${course.accent}`} />
      <div className="mx-auto max-w-7xl px-6 py-8">
        <nav className="flex flex-wrap items-center gap-2 text-sm font-bold text-slate-500">
          <Link className="hover:text-blue-700" to="/library/computer-science">Computer Science</Link><span>/</span>
          <Link className="hover:text-blue-700" to={course.basePath}>{course.title}</Link><span>/</span>
          <Link className="hover:text-blue-700" to={`${course.basePath}/module/${lesson.moduleNumber}`}>Module {lesson.moduleNumber}</Link><span>/</span><span>Lesson {lesson.lessonNumber}</span>
        </nav>

        <section className={`mt-6 overflow-hidden rounded-3xl bg-gradient-to-br ${course.accent} p-8 text-white shadow-xl md:p-10`}>
          <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.2em] text-cyan-300">{course.title}</p>
              <p className="mt-4 font-bold text-white/75">Module {lesson.moduleNumber} · Lesson {lesson.lessonNumber} of 8</p>
              <h1 className="mt-3 max-w-5xl text-4xl font-black leading-tight md:text-5xl">{lesson.title}</h1>
              <p className="mt-5 max-w-4xl text-xl leading-9 text-white/85">{lesson.subtitle}</p>
              <div className="mt-7 flex flex-wrap gap-3 text-sm font-black"><Badge>{lesson.duration}</Badge><Badge>{lesson.level}</Badge><Badge>100-point assessment</Badge>{lesson.project && <Badge>Portfolio project</Badge>}</div>
            </div>
            <Link to={`${course.basePath}/module/${lesson.moduleNumber}`} className="shrink-0 rounded-xl bg-white/10 px-4 py-3 font-black ring-1 ring-white/20">← Module</Link>
          </div>
        </section>

        <div className="mt-8 grid items-start gap-8 lg:grid-cols-[320px_minmax(0,1fr)]">
          <aside className="space-y-6 lg:sticky lg:top-6">
            <InfoBox title="Essential Vocabulary" tone="emerald">
              <dl className="space-y-4">{lesson.vocabulary.map((item) => <div key={item.term}><dt className="font-black text-slate-950">{item.term}</dt><dd className="mt-1 leading-7 text-slate-600">{item.definition}</dd></div>)}</dl>
            </InfoBox>
            <InfoBox title="Key Reference" tone="blue">
              <ul className="space-y-3">{lesson.keyReference.map((item) => <li key={item} className="rounded-xl bg-slate-950 px-3 py-2 font-mono text-sm leading-6 text-cyan-200">{item}</li>)}</ul>
            </InfoBox>
            <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
              <p className="text-sm font-black uppercase tracking-widest text-slate-500">Lesson status</p>
              <button onClick={handleCompletion} className={`mt-4 w-full rounded-xl px-5 py-3 font-black text-white ${completed ? "bg-emerald-700" : "bg-blue-700 hover:bg-blue-800"}`}>{completed ? "✓ Completed — undo" : "Mark lesson complete"}</button>
            </div>
          </aside>

          <div className="min-w-0 space-y-8">
            <section className="grid gap-5 md:grid-cols-2">
              <Callout title="Essential Question" color="border-blue-500">{lesson.essentialQuestion}</Callout>
              <Callout title="Big Idea" color="border-emerald-500">{lesson.bigIdea}</Callout>
            </section>

            <LessonSection label="Context" title="Why this matters">
              <p>{lesson.whyItMatters}</p>
            </LessonSection>

            <LessonSection label="Objectives" title="By the end of this lesson, you can">
              <Checklist items={lesson.objectives} />
            </LessonSection>

            <LessonSection label="Supporting Figure" title="Professional problem-solving cycle">
              <div className="grid gap-3 md:grid-cols-5">
                {lesson.visualSteps.map((step, index) => (
                  <div key={step.label} className="relative rounded-2xl border border-blue-200 bg-blue-50 p-4 text-center">
                    <p className="font-black text-blue-900">{step.label}</p><p className="mt-2 text-sm leading-6 text-slate-600">{step.detail}</p>
                    {index < lesson.visualSteps.length - 1 && <span className="absolute -right-3 top-1/2 z-10 hidden -translate-y-1/2 text-xl font-black text-blue-500 md:block">→</span>}
                  </div>
                ))}
              </div>
            </LessonSection>

            <LessonSection label="Worked Examples" title="Read, predict, run, and explain">
              <div className="space-y-6">{lesson.workedExamples.map((example, index) => <article key={`${example.title}-${index}`} className="overflow-hidden rounded-2xl border border-slate-200"><div className="bg-slate-100 px-5 py-3 font-black text-slate-900">Example {index + 1} — {example.title}</div><pre className="overflow-x-auto bg-slate-950 p-5 text-[15px] leading-7 text-cyan-100"><code>{example.code}</code></pre><p className="p-5">{example.explanation}</p></article>)}</div>
            </LessonSection>

            <LessonSection label="Guided Lab" title={lesson.lab.title}>
              <Numbered items={lesson.lab.instructions} />
              <h3 className="mt-7 text-xl font-black text-slate-950">Deliverables</h3>
              <Checklist items={lesson.lab.deliverables} />
            </LessonSection>

            <section className="grid gap-6 xl:grid-cols-2">
              <Practice title="Guided Practice" items={lesson.guidedPractice} tone="blue" />
              <Practice title="Independent Practice" items={lesson.independentPractice} tone="violet" />
            </section>

            <section className="rounded-3xl border border-orange-300 bg-orange-50 p-7 md:p-8">
              <p className="text-sm font-black uppercase tracking-widest text-orange-800">Common Mistakes</p>
              <h2 className="mt-2 text-2xl font-black text-slate-950">Debug these habits early</h2>
              <ul className="mt-5 space-y-3">{lesson.commonMistakes.map((item) => <li key={item} className="flex gap-3"><span className="font-black text-orange-700">!</span><span>{item}</span></li>)}</ul>
            </section>

            {lesson.project && <Project project={lesson.project} />}

            <LessonSection label="Assessment" title="Mastery check — 100 points">
              <p className="mb-6">Answer each prompt with reasoning, implementation evidence, or test results. Each item is worth 10 points.</p>
              <ol className="grid gap-4 md:grid-cols-2">{lesson.assessment.map((item, index) => <li key={item.id} className="rounded-2xl border border-slate-200 bg-slate-50 p-5"><div className="flex gap-3"><span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-700 text-sm font-black text-white">{index + 1}</span><div><p className="font-bold text-slate-900">{item.prompt}</p><p className="mt-2 text-sm font-black text-blue-700">{item.points} points</p></div></div></li>)}</ol>
              <div className="mt-6 rounded-2xl bg-slate-950 p-5 font-black text-white">Total: {lesson.assessment.reduce((total, item) => total + item.points, 0)} points · Mastery target: 80 points</div>
            </LessonSection>

            <section className="grid gap-6 xl:grid-cols-2">
              <Practice title="Lesson Summary" items={lesson.summary} tone="emerald" />
              <Practice title="Reflection" items={lesson.reflection} tone="amber" />
            </section>

            <div className="rounded-3xl bg-slate-950 p-7 text-white">
              <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between"><div><p className="text-sm font-black uppercase tracking-widest text-cyan-300">Save your progress</p><h2 className="mt-2 text-2xl font-black">Ready to continue?</h2></div><button onClick={handleCompletion} className={`rounded-xl px-6 py-3 font-black ${completed ? "bg-emerald-500 text-slate-950" : "bg-white text-blue-800"}`}>{completed ? "✓ Lesson completed" : "Mark complete"}</button></div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {navigation.previous ? <NavCard label="Previous lesson" lesson={navigation.previous} course={course} /> : <Link className="rounded-2xl border border-slate-200 bg-white p-5 font-black text-slate-700" to={course.basePath}>← Course overview</Link>}
              {navigation.next ? <NavCard next label="Next lesson" lesson={navigation.next} course={course} /> : <Link className="rounded-2xl bg-emerald-700 p-5 text-right font-black text-white" to={`${course.basePath}/completion`}>Course completion →</Link>}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

function Badge({ children }) { return <span className="rounded-full bg-white/10 px-4 py-2 ring-1 ring-white/20">{children}</span>; }
function InfoBox({ title, tone, children }) { const style = tone === "emerald" ? "bg-emerald-800" : "bg-blue-800"; return <section className="overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-slate-200"><h2 className={`${style} px-6 py-4 text-lg font-black text-white`}>{title}</h2><div className="p-6">{children}</div></section>; }
function Callout({ title, color, children }) { return <section className={`rounded-3xl border-l-8 ${color} bg-white p-6 shadow-sm`}><p className="text-sm font-black uppercase tracking-widest text-slate-500">{title}</p><p className="mt-3 text-lg font-bold leading-8 text-slate-900">{children}</p></section>; }
function LessonSection({ label, title, children }) { return <section className="rounded-3xl bg-white p-7 shadow-sm ring-1 ring-slate-200 md:p-8"><p className="text-sm font-black uppercase tracking-widest text-blue-700">{label}</p><h2 className="mt-2 text-3xl font-black leading-tight text-slate-950">{title}</h2><div className="mt-6">{children}</div></section>; }
function Checklist({ items }) { return <ul className="mt-4 grid gap-3">{items.map((item) => <li key={item} className="flex gap-3"><span className="font-black text-emerald-600">✓</span><span>{item}</span></li>)}</ul>; }
function Numbered({ items }) { return <ol className="space-y-4">{items.map((item, index) => <li key={item} className="flex gap-4"><span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-blue-100 font-black text-blue-800">{index + 1}</span><span>{item}</span></li>)}</ol>; }
function Practice({ title, items, tone }) { const styles = { blue: "border-blue-300 bg-blue-50 text-blue-800", violet: "border-violet-300 bg-violet-50 text-violet-800", emerald: "border-emerald-300 bg-emerald-50 text-emerald-800", amber: "border-amber-300 bg-amber-50 text-amber-800" }; return <section className={`rounded-3xl border p-7 ${styles[tone]}`}><h2 className="text-2xl font-black text-slate-950">{title}</h2><ol className="mt-5 space-y-3">{items.map((item, index) => <li key={item} className="flex gap-3"><span className="font-black">{index + 1}.</span><span className="text-slate-700">{item}</span></li>)}</ol></section>; }
function Project({ project }) { return <section className="rounded-3xl bg-gradient-to-br from-amber-500 to-orange-600 p-8 text-white shadow-lg"><p className="text-sm font-black uppercase tracking-widest text-amber-100">Portfolio Project</p><h2 className="mt-2 text-3xl font-black">{project.title}</h2><p className="mt-4 text-lg leading-8 text-white/90">{project.description}</p><div className="mt-6 rounded-2xl bg-white/10 p-5"><h3 className="font-black">Definition of done</h3><ul className="mt-3 grid gap-2 md:grid-cols-2">{project.requirements.map((item) => <li key={item} className="flex gap-2"><span>✓</span><span>{item}</span></li>)}</ul></div></section>; }
function NavCard({ label, lesson, course, next }) { return <Link to={getCourseLessonPath(course, lesson)} className={`rounded-2xl border border-slate-200 bg-white p-5 ${next ? "text-right" : ""}`}><p className="text-sm font-black uppercase tracking-widest text-slate-500">{label}</p><p className="mt-2 font-black text-blue-700">{next ? "" : "← "}{lesson.title}{next ? " →" : ""}</p></Link>; }
