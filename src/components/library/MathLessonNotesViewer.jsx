import { useEffect, useState } from "react";

import LessonTable from "./LessonTable.jsx";
import TikzGraph from "./TikzGraph.jsx";

import {
  isLessonCompleted,
  toggleLessonCompletion,
} from "../../services/lessonProgress.js";

function formatValue(value) {
  if (value === undefined || value === null) return "";
  if (typeof value === "string" || typeof value === "number") {
    return String(value);
  }
  return JSON.stringify(value, null, 2);
}

function Section({ eyebrow, title, children }) {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
      {eyebrow && (
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-violet-700">
          {eyebrow}
        </p>
      )}
      <h2 className="mt-2 text-2xl font-black text-slate-950 md:text-3xl">
        {title}
      </h2>
      <div className="mt-6">{children}</div>
    </section>
  );
}

function NumberedItems({ items }) {
  return (
    <ol className="space-y-4">
      {items.map((item, index) => (
        <li key={item.id || index} className="flex gap-3 leading-7 text-slate-700">
          <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-slate-900 text-sm font-black text-white">
            {index + 1}
          </span>
          <span>{formatValue(item.question || item.prompt || item)}</span>
        </li>
      ))}
    </ol>
  );
}

function PracticeCards({ items, showAnswers }) {
  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <article key={item.id || index} className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <p className="font-extrabold text-slate-950">Question {index + 1}</p>
            {item.difficulty && (
              <span className="rounded-full bg-white px-3 py-1 text-xs font-bold uppercase tracking-wide text-slate-600 shadow-sm">
                {item.difficulty}
              </span>
            )}
          </div>
          <p className="mt-3 leading-7 text-slate-700">
            {formatValue(item.question || item.prompt)}
          </p>
          {showAnswers && (item.answer !== undefined || item.sampleAnswer !== undefined) && (
            <div className="mt-4 rounded-xl border border-emerald-200 bg-emerald-50 p-4">
              <p className="text-xs font-bold uppercase tracking-wide text-emerald-700">Answer</p>
              <p className="mt-2 whitespace-pre-wrap leading-7 text-emerald-950">
                {formatValue(item.answer ?? item.sampleAnswer)}
              </p>
            </div>
          )}
        </article>
      ))}
    </div>
  );
}

function WorkedExample({ example, number }) {
  return (
    <article className="overflow-hidden rounded-3xl border border-slate-200 bg-white">
      <header className="bg-slate-950 px-5 py-4 text-white">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-violet-300">
          Worked Example {number}
        </p>
        <h3 className="mt-1 text-xl font-black">{example.title}</h3>
      </header>
      <div className="space-y-5 p-5 md:p-6">
        <div>
          <p className="text-xs font-bold uppercase tracking-wide text-slate-500">Problem</p>
          <p className="mt-2 text-lg font-semibold leading-8 text-slate-900">
            {example.problem}
          </p>
        </div>

        {example.plan && (
          <div className="rounded-2xl border border-blue-200 bg-blue-50 p-4">
            <p className="text-xs font-bold uppercase tracking-wide text-blue-700">Plan</p>
            <p className="mt-2 leading-7 text-blue-950">{example.plan}</p>
          </div>
        )}

        {Array.isArray(example.solutionSteps) && example.solutionSteps.length > 0 && (
          <div>
            <p className="mb-3 text-sm font-extrabold text-slate-950">Solution Steps</p>
            <NumberedItems items={example.solutionSteps} />
          </div>
        )}

        <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-4">
          <p className="text-xs font-bold uppercase tracking-wide text-emerald-700">Answer</p>
          <p className="mt-2 whitespace-pre-wrap font-semibold leading-7 text-emerald-950">
            {formatValue(example.answer)}
          </p>
        </div>

        {example.interpretation && (
          <div className="rounded-2xl border border-violet-200 bg-violet-50 p-4">
            <p className="text-xs font-bold uppercase tracking-wide text-violet-700">Interpretation</p>
            <p className="mt-2 leading-7 text-violet-950">{example.interpretation}</p>
          </div>
        )}
      </div>
    </article>
  );
}

export default function MathLessonNotesViewer({
  lesson,
  progressCourseId = "algebra-2",
  onPrevious,
  onNext,
  onBackToModule,
}) {
  const [showAnswers, setShowAnswers] = useState(false);
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    if (!lesson?.moduleNumber || !lesson?.slug) {
      setCompleted(false);
      return;
    }

    setCompleted(
      isLessonCompleted(
        progressCourseId,
        lesson.moduleNumber,
        lesson.slug
      )
    );
  }, [lesson, progressCourseId]);

  if (!lesson) return null;

  function handleToggleComplete() {
    const result = toggleLessonCompletion(
      progressCourseId,
      lesson.moduleNumber,
      lesson.slug
    );
    setCompleted(result.completed);
  }

  const definitions = lesson.definitionTable;
  const concepts = lesson.mainConceptTable;
  const graphs = lesson.tikzGraphs || [];
  const workedExamples = lesson.workedExamples || [];
  const independentPractice = lesson.independentPractice || [];
  const groupWork = lesson.groupWork || [];
  const homework = lesson.homework || [];
  const quiz = lesson.quiz || [];
  const commonMistakes = lesson.commonMistakes || [];

  return (
    <main className="min-h-screen bg-slate-50 pb-20">
      <header className="bg-gradient-to-br from-violet-950 via-purple-900 to-slate-950 text-white">
        <div className="mx-auto max-w-7xl px-5 py-12">
          <button
            type="button"
            onClick={onBackToModule}
            className="text-sm font-bold text-violet-200 transition hover:text-white"
          >
            ← Back to Module
          </button>

          <div className="mt-8 max-w-4xl">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-violet-300">
              Algebra II · Module {lesson.moduleNumber} · Lesson {lesson.lessonNumber}
            </p>
            <h1 className="mt-4 text-4xl font-black leading-tight md:text-6xl">
              {lesson.title}
            </h1>
            {lesson.subtitle && (
              <p className="mt-5 max-w-3xl text-lg leading-8 text-violet-100">
                {lesson.subtitle}
              </p>
            )}
            <div className="mt-7 flex flex-wrap gap-3 text-sm font-bold">
              {lesson.duration && <span className="rounded-full border border-white/20 bg-white/10 px-4 py-2">{lesson.duration}</span>}
              {lesson.level && <span className="rounded-full border border-white/20 bg-white/10 px-4 py-2">{lesson.level}</span>}
              {completed && <span className="rounded-full bg-emerald-500/20 px-4 py-2 text-emerald-100">Completed ✓</span>}
            </div>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-7xl space-y-8 px-5 py-10">
        <Section eyebrow="Lesson foundation" title="Essential Question and Big Idea">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-violet-200 bg-violet-50 p-5">
              <p className="text-xs font-bold uppercase tracking-wide text-violet-700">Essential Question</p>
              <p className="mt-2 text-lg font-bold leading-8 text-violet-950">{lesson.essentialQuestion}</p>
            </div>
            <div className="rounded-2xl border border-blue-200 bg-blue-50 p-5">
              <p className="text-xs font-bold uppercase tracking-wide text-blue-700">Big Idea</p>
              <p className="mt-2 leading-8 text-blue-950">{lesson.bigIdea}</p>
            </div>
          </div>
        </Section>

        {lesson.problemFirst && (
          <Section eyebrow="Problem-first learning" title={lesson.problemFirst.title || "Opening Investigation"}>
            <p className="text-lg leading-8 text-slate-700">{lesson.problemFirst.scenario}</p>
            {lesson.problemFirst.questions?.length > 0 && (
              <div className="mt-6"><NumberedItems items={lesson.problemFirst.questions} /></div>
            )}
          </Section>
        )}

        {definitions && <LessonTable table={definitions} eyebrow="Definition table" />}
        {concepts && <LessonTable table={concepts} eyebrow="Main concept table" />}

        {graphs.length > 0 && (
          <Section eyebrow="Graph-first mathematics" title="TikZ Graphs and Visual Reasoning">
            <div className="space-y-6">
              {graphs.map((graph) => <TikzGraph key={graph.id || graph.src} graph={graph} />)}
            </div>
          </Section>
        )}

        {lesson.learningObjectives?.length > 0 && (
          <Section eyebrow="Learning goals" title="Learning Objectives">
            <ul className="grid gap-3 md:grid-cols-2">
              {lesson.learningObjectives.map((objective, index) => (
                <li key={index} className="rounded-2xl border border-slate-200 bg-slate-50 p-4 leading-7 text-slate-700">
                  <span className="mr-2 font-black text-violet-700">✓</span>{objective}
                </li>
              ))}
            </ul>
          </Section>
        )}

        {lesson.formulas?.length > 0 && (
          <Section eyebrow="Mathematical reference" title="Key Rules and Formulas">
            <div className="grid gap-4 md:grid-cols-2">
              {lesson.formulas.map((formula, index) => (
                <article key={index} className="rounded-2xl border border-blue-200 bg-blue-50 p-5">
                  <h3 className="font-black text-blue-950">{formula.name}</h3>
                  <div className="mt-3 rounded-xl bg-white p-4 font-mono font-bold text-blue-950">{formula.formula}</div>
                  <p className="mt-3 leading-7 text-blue-900">{formula.meaning}</p>
                </article>
              ))}
            </div>
          </Section>
        )}

        {workedExamples.length > 0 && (
          <Section eyebrow="Learn by example" title="Four Worked Examples">
            <div className="space-y-6">
              {workedExamples.map((example, index) => (
                <WorkedExample key={example.id || index} example={example} number={index + 1} />
              ))}
            </div>
          </Section>
        )}

        {independentPractice.length > 0 && (
          <Section eyebrow="Apply independently" title="Independent Work - 10 Questions">
            <PracticeCards items={independentPractice} showAnswers={showAnswers} />
          </Section>
        )}

        {groupWork.length > 0 && (
          <Section eyebrow="Reason together" title="Group Work - 10 Tasks">
            <PracticeCards items={groupWork} showAnswers={showAnswers} />
          </Section>
        )}

        {quiz.length > 0 && (
          <Section eyebrow="Mastery check" title="Lesson Quiz - 5 Questions">
            <PracticeCards items={quiz} showAnswers={showAnswers} />
          </Section>
        )}

        {homework.length > 0 && (
          <Section eyebrow="Continue the learning" title="Homework - 10 Questions">
            <PracticeCards items={homework} showAnswers={showAnswers} />
          </Section>
        )}

        {(independentPractice.length > 0 || groupWork.length > 0 || quiz.length > 0 || homework.length > 0) && (
          <div className="flex justify-end">
            <button
              type="button"
              onClick={() => setShowAnswers((current) => !current)}
              className="rounded-xl bg-slate-950 px-5 py-3 font-bold text-white transition hover:bg-slate-800"
            >
              {showAnswers ? "Hide Answer Key" : "Show Answer Key"}
            </button>
          </div>
        )}

        {commonMistakes.length > 0 && (
          <Section eyebrow="Learn from errors" title="Common Mistakes">
            <div className="space-y-4">
              {commonMistakes.map((item, index) => (
                <article key={index} className="rounded-2xl border border-red-200 bg-red-50 p-5">
                  <p className="font-black text-red-950">Mistake: {item.mistake}</p>
                  <p className="mt-2 leading-7 text-red-900">Correction: {item.correction}</p>
                </article>
              ))}
            </div>
          </Section>
        )}

        {lesson.summary?.length > 0 && (
          <Section eyebrow="Lesson synthesis" title="Summary">
            <ul className="space-y-3">
              {lesson.summary.map((item, index) => (
                <li key={index} className="flex gap-3 leading-7 text-slate-700">
                  <span className="font-black text-violet-700">✓</span>{item}
                </li>
              ))}
            </ul>
          </Section>
        )}

        <div className="grid gap-4 md:grid-cols-3">
          <button
            type="button"
            onClick={onPrevious}
            disabled={!lesson.previousLesson}
            className="rounded-2xl border border-slate-200 bg-white p-5 text-left font-bold text-slate-900 disabled:opacity-40"
          >
            ← {lesson.previousLesson?.title || "No previous lesson"}
          </button>

          <button
            type="button"
            onClick={handleToggleComplete}
            className={`rounded-2xl p-5 font-black ${completed ? "bg-emerald-100 text-emerald-900" : "bg-violet-700 text-white"}`}
          >
            {completed ? "Mark Incomplete" : "Mark Lesson Complete"}
          </button>

          <button
            type="button"
            onClick={onNext}
            disabled={!lesson.nextLesson}
            className="rounded-2xl border border-slate-200 bg-white p-5 text-right font-bold text-slate-900 disabled:opacity-40"
          >
            {lesson.nextLesson?.title || "No next lesson"} →
          </button>
        </div>
      </div>
    </main>
  );
}
