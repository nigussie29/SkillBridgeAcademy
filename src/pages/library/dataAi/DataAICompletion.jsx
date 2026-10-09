import { useEffect, useMemo, useState } from "react";
import {
  ArrowRight,
  Award,
  BookOpenCheck,
  CheckCircle2,
  Circle,
  ClipboardCheck,
  FolderKanban,
  GraduationCap,
  Presentation,
  Printer,
  ShieldCheck,
  Target,
} from "lucide-react";
import { Link } from "react-router-dom";

import Breadcrumbs from "../../../components/navigation/Breadcrumbs";
import { dataAiFoundationsCourse as course } from "../../../data/courses/dataAiFoundationsCourse";
import { getCompletedLessons } from "../../../services/lessonProgress";
import {
  loadDataAiCompletion,
  saveDataAiCompletion,
} from "../../../services/dataAiCompletion";

const courseId = "data-ai-foundations";

export default function DataAICompletion() {
  const [evidence, setEvidence] = useState(loadDataAiCompletion);

  const moduleProgress = useMemo(
    () =>
      course.modules.map((module) => {
        const completed = new Set(
          getCompletedLessons(courseId, module.id)
        );
        const completedCount = module.lessons.filter((lesson) =>
          completed.has(lesson.slug)
        ).length;

        return {
          ...module,
          completedCount,
          complete: completedCount === module.lessons.length,
        };
      }),
    []
  );

  const completedLessonCount = moduleProgress.reduce(
    (total, module) => total + module.completedCount,
    0
  );
  const lessonPercent = Math.round(
    (completedLessonCount / course.lessonCount) * 100
  );
  const projectCount = evidence.completedProjects.length;
  const score = Number(evidence.finalAssessmentScore);
  const assessmentPassed =
    evidence.finalAssessmentScore !== "" && score >= 80;
  const allLessonsComplete =
    completedLessonCount === course.lessonCount;
  const allProjectsComplete =
    projectCount === course.projectCount;
  const certificateEligible =
    allLessonsComplete &&
    allProjectsComplete &&
    assessmentPassed &&
    evidence.capstonePresented &&
    evidence.responsibleUseDocumented;

  const firstIncompleteLesson = useMemo(() => {
    for (const module of course.modules) {
      const completed = new Set(
        getCompletedLessons(courseId, module.id)
      );
      const lesson = module.lessons.find(
        (item) => !completed.has(item.slug)
      );
      if (lesson) return { module, lesson };
    }
    return null;
  }, []);

  useEffect(() => {
    saveDataAiCompletion(evidence);
  }, [evidence]);

  function toggleProject(moduleId) {
    setEvidence((current) => {
      const selected = new Set(current.completedProjects);
      if (selected.has(moduleId)) selected.delete(moduleId);
      else selected.add(moduleId);

      return {
        ...current,
        completedProjects: [...selected].sort((a, b) => a - b),
      };
    });
  }

  return (
    <main className="min-h-screen bg-slate-50 pb-20">
      <Breadcrumbs
        items={[
          { label: "Home", to: "/" },
          { label: "Knowledge Library", to: "/library" },
          { label: "Data and AI", to: "/library/data-ai" },
          { label: "Completion and Certificate" },
        ]}
      />

      <section className="bg-gradient-to-br from-slate-950 via-indigo-950 to-blue-950 text-white">
        <div className="mx-auto max-w-7xl px-6 py-14 md:py-18">
          <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.24em] text-amber-300">
                Data and AI · Completion Center
              </p>
              <h1 className="mt-4 text-4xl font-black leading-tight md:text-6xl">
                Turn completed lessons into verified capability.
              </h1>
              <p className="mt-5 max-w-3xl text-lg leading-8 text-blue-100">
                Track all 70 lessons, document the ten portfolio projects,
                record final mastery, and verify the capstone evidence required
                for certificate eligibility.
              </p>
            </div>

            <div className="rounded-3xl border border-white/15 bg-white/10 p-7 shadow-2xl backdrop-blur">
              <div className="flex items-center gap-3">
                <div className="rounded-2xl bg-amber-400 p-3 text-slate-950">
                  <GraduationCap size={30} />
                </div>
                <div>
                  <p className="text-sm font-bold uppercase tracking-widest text-blue-200">
                    Overall readiness
                  </p>
                  <p className="text-3xl font-black">
                    {certificateEligible ? "Eligible" : "In progress"}
                  </p>
                </div>
              </div>
              <div className="mt-6 h-4 overflow-hidden rounded-full bg-white/15">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-amber-400 to-emerald-400 transition-all"
                  style={{ width: `${lessonPercent}%` }}
                />
              </div>
              <p className="mt-3 font-bold text-blue-100">
                {completedLessonCount} of {course.lessonCount} lessons complete
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10">
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          <SummaryCard
            icon={BookOpenCheck}
            label="Lessons"
            value={`${completedLessonCount}/${course.lessonCount}`}
            complete={allLessonsComplete}
          />
          <SummaryCard
            icon={FolderKanban}
            label="Portfolio projects"
            value={`${projectCount}/${course.projectCount}`}
            complete={allProjectsComplete}
          />
          <SummaryCard
            icon={ClipboardCheck}
            label="Final assessment"
            value={
              evidence.finalAssessmentScore === ""
                ? "Not recorded"
                : `${evidence.finalAssessmentScore}%`
            }
            complete={assessmentPassed}
          />
          <SummaryCard
            icon={Presentation}
            label="Integrated capstone"
            value={evidence.capstonePresented ? "Verified" : "Pending"}
            complete={evidence.capstonePresented}
          />
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-6 py-4 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="space-y-8">
          <section className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-black uppercase tracking-widest text-emerald-700">
                  Curriculum progress
                </p>
                <h2 className="mt-2 text-3xl font-black text-slate-950">
                  Ten-module mastery map
                </h2>
              </div>
              <Target className="text-emerald-700" size={30} />
            </div>

            <div className="mt-7 grid gap-4 sm:grid-cols-2">
              {moduleProgress.map((module) => (
                <article
                  key={module.id}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-5"
                >
                  <div className="flex items-center justify-between gap-3">
                    <p className="text-sm font-black text-slate-500">
                      Module {module.id}
                    </p>
                    {module.complete ? (
                      <CheckCircle2 className="text-emerald-600" size={21} />
                    ) : (
                      <Circle className="text-slate-400" size={21} />
                    )}
                  </div>
                  <h3 className="mt-2 font-black text-slate-950">
                    {module.title}
                  </h3>
                  <div className="mt-4 h-2 overflow-hidden rounded-full bg-slate-200">
                    <div
                      className="h-full rounded-full bg-emerald-600"
                      style={{
                        width: `${(module.completedCount / module.lessons.length) * 100}%`,
                      }}
                    />
                  </div>
                  <p className="mt-2 text-sm font-bold text-slate-600">
                    {module.completedCount}/{module.lessons.length} lessons
                  </p>
                </article>
              ))}
            </div>

            <div className="mt-7">
              {firstIncompleteLesson ? (
                <Link
                  to={`/library/data-ai/module/${firstIncompleteLesson.module.id}/lesson/${firstIncompleteLesson.lesson.slug}`}
                  className="inline-flex items-center gap-2 rounded-xl bg-emerald-700 px-5 py-3 font-black text-white transition hover:bg-emerald-800"
                >
                  Continue with first incomplete lesson
                  <ArrowRight size={18} />
                </Link>
              ) : (
                <p className="inline-flex items-center gap-2 rounded-xl bg-emerald-100 px-5 py-3 font-black text-emerald-900">
                  <CheckCircle2 size={18} />
                  All 70 lessons completed
                </p>
              )}
            </div>
          </section>

          <section className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
            <p className="text-sm font-black uppercase tracking-widest text-blue-700">
              Portfolio evidence
            </p>
            <h2 className="mt-2 text-3xl font-black text-slate-950">
              Verify the ten module projects
            </h2>
            <p className="mt-3 leading-7 text-slate-600">
              Check a project only after its artifact, reproducibility evidence,
              limitations, and decision explanation are complete.
            </p>

            <div className="mt-6 space-y-3">
              {course.modules.map((module) => {
                const checked = evidence.completedProjects.includes(module.id);
                return (
                  <label
                    key={module.id}
                    className={`flex cursor-pointer gap-4 rounded-2xl border p-4 transition ${
                      checked
                        ? "border-blue-300 bg-blue-50"
                        : "border-slate-200 hover:border-blue-200"
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={checked}
                      onChange={() => toggleProject(module.id)}
                      className="mt-1 h-5 w-5 accent-blue-700"
                    />
                    <span>
                      <span className="block text-sm font-black text-slate-500">
                        Module {module.id}
                      </span>
                      <span className="mt-1 block font-bold text-slate-900">
                        {module.project}
                      </span>
                    </span>
                  </label>
                );
              })}
            </div>
          </section>
        </div>

        <aside className="space-y-8">
          <section className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
            <p className="text-sm font-black uppercase tracking-widest text-violet-700">
              Final verification
            </p>
            <h2 className="mt-2 text-2xl font-black text-slate-950">
              Record mastery evidence
            </h2>

            <label className="mt-6 block">
              <span className="font-bold text-slate-800">
                Learner name
              </span>
              <input
                type="text"
                value={evidence.learnerName}
                onChange={(event) =>
                  setEvidence((current) => ({
                    ...current,
                    learnerName: event.target.value,
                  }))
                }
                placeholder="Name for certificate review"
                className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 text-lg outline-none transition focus:border-violet-500 focus:ring-4 focus:ring-violet-100"
              />
            </label>

            <label className="mt-5 block">
              <span className="font-bold text-slate-800">
                Final assessment score
              </span>
              <div className="mt-2 flex items-center gap-3">
                <input
                  type="number"
                  min="0"
                  max="100"
                  value={evidence.finalAssessmentScore}
                  onChange={(event) =>
                    setEvidence((current) => ({
                      ...current,
                      finalAssessmentScore: event.target.value,
                    }))
                  }
                  className="w-28 rounded-xl border border-slate-300 px-4 py-3 text-lg font-black outline-none transition focus:border-violet-500 focus:ring-4 focus:ring-violet-100"
                />
                <span className="font-bold text-slate-600">
                  % · minimum 80%
                </span>
              </div>
            </label>

            <EvidenceCheck
              checked={evidence.capstonePresented}
              onChange={(checked) =>
                setEvidence((current) => ({
                  ...current,
                  capstonePresented: checked,
                }))
              }
              title="Integrated capstone completed and presented"
              description={course.capstone.title}
            />

            <EvidenceCheck
              checked={evidence.responsibleUseDocumented}
              onChange={(checked) =>
                setEvidence((current) => ({
                  ...current,
                  responsibleUseDocumented: checked,
                }))
              }
              title="Responsible-use evidence documented"
              description="Limitations, privacy, fairness, security, human review, monitoring, and next steps are explicit."
            />
          </section>

          <section
            className={`overflow-hidden rounded-3xl border p-1 shadow-lg ${
              certificateEligible
                ? "border-amber-400 bg-gradient-to-br from-amber-300 via-yellow-400 to-amber-500"
                : "border-slate-300 bg-slate-200"
            }`}
          >
            <div className="rounded-[20px] bg-slate-950 p-7 text-white">
              <div className="flex items-center justify-between gap-4">
                <div className="rounded-2xl bg-amber-400 p-3 text-slate-950">
                  <Award size={32} />
                </div>
                <span
                  className={`rounded-full px-3 py-1 text-xs font-black uppercase tracking-wide ${
                    certificateEligible
                      ? "bg-emerald-400 text-emerald-950"
                      : "bg-slate-700 text-slate-200"
                  }`}
                >
                  {certificateEligible ? "Eligible" : "Evidence pending"}
                </span>
              </div>
              <p className="mt-6 text-sm font-bold uppercase tracking-widest text-amber-300">
                KingNigus Academy
              </p>
              <h2 className="mt-2 text-3xl font-black">
                Data and Artificial Intelligence
              </h2>
              <p className="mt-3 text-lg font-bold text-blue-100">
                Foundations to Production
              </p>
              <p className="mt-5 leading-7 text-slate-300">
                Certificate eligibility activates only after every required
                evidence gate passes. Completion data is saved on this device.
              </p>

              <ul className="mt-6 space-y-3 text-sm">
                <Gate passed={allLessonsComplete} text="70 lessons" />
                <Gate passed={allProjectsComplete} text="10 portfolio projects" />
                <Gate passed={assessmentPassed} text="Final assessment ≥ 80%" />
                <Gate passed={evidence.capstonePresented} text="Integrated capstone" />
                <Gate passed={evidence.responsibleUseDocumented} text="Responsible-use documentation" />
              </ul>

              <button
                type="button"
                disabled={!certificateEligible}
                onClick={() => window.print()}
                className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-amber-400 px-5 py-3 font-black text-slate-950 transition hover:bg-amber-300 disabled:cursor-not-allowed disabled:bg-slate-700 disabled:text-slate-400"
              >
                <Printer size={18} />
                Print completion record
              </button>
            </div>
          </section>
        </aside>
      </section>
    </main>
  );
}

function SummaryCard({ icon: Icon, label, value, complete }) {
  return (
    <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex items-center justify-between gap-4">
        <div className="rounded-2xl bg-blue-50 p-3 text-blue-700">
          <Icon size={25} />
        </div>
        {complete ? (
          <CheckCircle2 className="text-emerald-600" size={23} />
        ) : (
          <Circle className="text-slate-400" size={23} />
        )}
      </div>
      <p className="mt-5 text-sm font-bold uppercase tracking-wide text-slate-500">
        {label}
      </p>
      <p className="mt-1 text-2xl font-black text-slate-950">{value}</p>
    </article>
  );
}

function EvidenceCheck({ checked, onChange, title, description }) {
  return (
    <label className="mt-5 flex cursor-pointer gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4">
      <input
        type="checkbox"
        checked={checked}
        onChange={(event) => onChange(event.target.checked)}
        className="mt-1 h-5 w-5 accent-violet-700"
      />
      <span>
        <span className="block font-black text-slate-900">{title}</span>
        <span className="mt-1 block text-sm leading-6 text-slate-600">
          {description}
        </span>
      </span>
    </label>
  );
}

function Gate({ passed, text }) {
  return (
    <li className="flex items-center gap-3">
      {passed ? (
        <CheckCircle2 className="shrink-0 text-emerald-400" size={19} />
      ) : (
        <ShieldCheck className="shrink-0 text-slate-500" size={19} />
      )}
      <span className={passed ? "font-bold text-white" : "text-slate-400"}>
        {text}
      </span>
    </li>
  );
}

