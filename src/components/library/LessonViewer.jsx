import { useEffect, useState } from "react";
import VennDiagram from "./VennDiagram";
import {
  isLessonCompleted as isLinearAlgebraLessonCompleted,
  toggleLessonCompletion as toggleLinearAlgebraLessonCompletion,
} from "../../services/linearAlgebraProgress.js";

import {
  isLessonCompleted as isSharedLessonCompleted,
  toggleLessonCompletion as toggleSharedLessonCompletion,
} from "../../services/lessonProgress.js";

export default function LessonViewer({
  lesson,
  onPrevious,
  onNext,
  onBackToModule,
  progressCourseId = null,
}) {
  const [showAnswers, setShowAnswers] = useState(false);
  const [completed, setCompleted] = useState(false);

 useEffect(() => {
  if (!lesson?.moduleNumber || !lesson?.slug) {
    setCompleted(false);
    return;
  }

  if (progressCourseId) {
    setCompleted(
      isSharedLessonCompleted(
        progressCourseId,
        lesson.moduleNumber,
        lesson.slug
      )
    );

    return;
  }

  setCompleted(
    isLinearAlgebraLessonCompleted(
      lesson.moduleNumber,
      lesson.slug
    )
  );
}, [lesson, progressCourseId]);
if (!lesson) {
  return <LessonNotFound />;
}

function handleToggleComplete() {
  const result = progressCourseId
    ? toggleSharedLessonCompletion(
        progressCourseId,
        lesson.moduleNumber,
        lesson.slug
      )
    : toggleLinearAlgebraLessonCompletion(
        lesson.moduleNumber,
        lesson.slug
      );

  setCompleted(result.completed);
}
  const {
    title,
    subtitle,
    moduleNumber,
    lessonNumber,
    duration,
    level,
    status,

    essentialQuestion,
    bigIdea,

    whyThisLessonExists,

    problemFirst,

    learningObjectives = [],
    prerequisiteKnowledge = [],
    vocabulary = [],
    formulas = [],

    probabilityScale = [],

    workedExamples = [],

    interactiveExploration,


    realWorldApplications = [],

    aiConnection,

    pythonLab,

    guidedPractice = [],
    independentPractice = [],

    commonMistakes = [],

    discussionQuestions = [],

    formativeAssessment,

    researchExtension,

    portfolioArtifact,

    growthIndicators = [],

    reflection = [],
    summary = [],

    lumineryGuidance,

    previousLesson,
    nextLesson,
  } = lesson;

  return (
    <main className="min-h-screen bg-slate-50 pb-20">
      <LessonHero
        title={title}
        subtitle={subtitle}
        moduleNumber={moduleNumber}
        lessonNumber={lessonNumber}
        duration={duration}
        level={level}
        status={status}
        completed={completed}
        onBackToModule={onBackToModule}
      />

      <div className="mx-auto grid max-w-7xl gap-8 px-5 py-10 lg:grid-cols-[minmax(0,1fr)_280px]">
        <div className="space-y-8">

          {/* Essential Question + Big Idea */}

          {(essentialQuestion || bigIdea) && (
            <SectionCard
              eyebrow="Lesson foundation"
              title="Essential Question and Big Idea"
            >
              {essentialQuestion && (
                <InfoPanel
                  label="Essential Question"
                  text={essentialQuestion}
                />
              )}

              {bigIdea && (
                <InfoPanel
                  label="Big Idea"
                  text={bigIdea}
                  className="mt-4"
                />
              )}
            </SectionCard>
          )}

          {/* Why This Lesson Exists */}

          {whyThisLessonExists && (
            <SectionCard
              eyebrow="Why this matters"
              title={
                typeof whyThisLessonExists === "object"
                  ? whyThisLessonExists.title ||
                    "Why This Lesson Exists"
                  : "Why This Lesson Exists"
              }
            >
              {typeof whyThisLessonExists === "string" ? (
                <p className="text-lg leading-8 text-slate-700">
                  {whyThisLessonExists}
                </p>
              ) : (
                <>
                  {whyThisLessonExists.introduction && (
                    <p className="text-lg leading-8 text-slate-700">
                      {whyThisLessonExists.introduction}
                    </p>
                  )}

                  {whyThisLessonExists.centralProblem && (
                    <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-5">
                      <p className="text-sm font-bold uppercase tracking-wide text-amber-700">
                        The Human Problem
                      </p>

                      <p className="mt-2 text-lg font-extrabold leading-8 text-amber-950">
                        {whyThisLessonExists.centralProblem}
                      </p>
                    </div>
                  )}

                  {whyThisLessonExists.purpose && (
                    <div className="mt-6 rounded-2xl border border-blue-200 bg-blue-50 p-5">
                      <p className="text-sm font-bold uppercase tracking-wide text-blue-700">
  Why This Matters
</p>

                      <p className="mt-2 leading-8 text-blue-950">
                        {whyThisLessonExists.purpose}
                      </p>
                    </div>
                  )}
                </>
              )}
            </SectionCard>
          )}

          {/* Problem First */}

          {problemFirst && (
            <SectionCard
              eyebrow="Problem-first learning"
              title={
                problemFirst.title ||
                "Opening Investigation"
              }
            >
              {problemFirst.scenario && (
                <p className="leading-8 text-slate-700">
                  {problemFirst.scenario}
                </p>
              )}

              {Array.isArray(problemFirst.questions) &&
                problemFirst.questions.length > 0 && (
                  <div className="mt-6">
                    <Subheading>
                      Investigation Questions
                    </Subheading>

                    <NumberedList
                      items={problemFirst.questions}
                    />
                  </div>
                )}

              {problemFirst.expectedInsight && (
                <div className="mt-6 rounded-2xl border border-indigo-200 bg-indigo-50 p-5">
                  <p className="text-sm font-bold uppercase tracking-wide text-indigo-700">
                    Expected Insight
                  </p>

                  <p className="mt-2 leading-7 text-indigo-950">
                    {problemFirst.expectedInsight}
                  </p>
                </div>
              )}
            </SectionCard>
          )}

          {/* Learning Objectives */}

          {learningObjectives.length > 0 && (
            <SectionCard
              eyebrow="Learning goals"
              title="Learning Objectives"
            >
              <CheckList items={learningObjectives} />
            </SectionCard>
          )}

          {/* Prerequisite Knowledge */}

          {prerequisiteKnowledge.length > 0 && (
            <SectionCard
              eyebrow="Before you begin"
              title="Prerequisite Knowledge"
            >
              <TagList items={prerequisiteKnowledge} />
            </SectionCard>
          )}

          {/* Vocabulary */}

          {vocabulary.length > 0 && (
            <SectionCard
              eyebrow="Academic language"
              title="Vocabulary"
            >
              <div className="grid gap-4 md:grid-cols-2">
                {vocabulary.map((item, index) => (
                  <article
                    key={`${item.term}-${index}`}
                    className="rounded-2xl border border-slate-200 bg-slate-50 p-5"
                  >
                    <h3 className="font-extrabold text-slate-900">
                      {item.term}
                    </h3>

                    <p className="mt-2 leading-7 text-slate-600">
                      {item.definition}
                    </p>
                  </article>
                ))}
              </div>
            </SectionCard>
          )}

          {/* Formulas */}

          {formulas.length > 0 && (
            <SectionCard
              eyebrow="Mathematical reference"
              title="Key Formulas"
            >
              <div className="space-y-4">
                {formulas.map((formula, index) => (
                  <article
                    key={`${formula.name}-${index}`}
                    className="rounded-2xl border border-blue-200 bg-blue-50 p-5"
                  >
                    <h3 className="font-extrabold text-blue-950">
                      {formula.name}
                    </h3>

                    {formula.formula && (
                      <div className="mt-3 overflow-x-auto rounded-xl bg-white p-4 font-mono text-blue-900">
                        {formula.formula}
                      </div>
                    )}

                    {formula.meaning && (
                      <p className="mt-3 leading-7 text-blue-900">
                        {formula.meaning}
                      </p>
                    )}

                    {formula.requirement && (
                      <p className="mt-2 text-sm font-semibold text-blue-700">
                        Requirement:{" "}
                        {formula.requirement}
                      </p>
                    )}
                  </article>
                ))}
              </div>
            </SectionCard>
          )}

          {/* Probability Scale */}

          {probabilityScale.length > 0 && (
            <SectionCard
              eyebrow="Visual understanding"
              title="The Probability Scale"
            >
              <p className="mb-6 leading-8 text-slate-700">
                Probability values range from
                impossible to certain. The scale
                connects numerical probability with
                mathematical meaning.
              </p>

              <div className="relative mb-8">
                <div className="h-4 rounded-full bg-gradient-to-r from-red-400 via-amber-300 to-emerald-500" />

                <div className="mt-3 flex justify-between text-xs font-bold text-slate-500">
                  <span>0 — Impossible</span>
                  <span>0.5 — Even Chance</span>
                  <span>1 — Certain</span>
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {probabilityScale.map(
                  (item, index) => (
                    <article
                      key={
                        item.value !== undefined
                          ? `${item.value}-${index}`
                          : index
                      }
                      className="rounded-2xl border border-slate-200 bg-slate-50 p-5"
                    >
                      <div className="flex items-center justify-between gap-3">
                        <h3 className="font-extrabold text-slate-950">
                          {item.label ||
                            item.meaning ||
                            `Probability ${index + 1}`}
                        </h3>

                        {item.value !== undefined && (
                          <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-black text-blue-700">
                            {formatValue(item.value)}
                          </span>
                        )}
                      </div>

                      {item.example && (
                        <p className="mt-3 leading-7 text-slate-600">
                          {item.example}
                        </p>
                      )}
                    </article>
                  )
                )}
              </div>
            </SectionCard>
          )}

          {/* Worked Examples */}

          {workedExamples.length > 0 && (
            <SectionCard
              eyebrow="Learn by example"
              title="Worked Examples"
            >
              <div className="space-y-6">
                {workedExamples.map(
                  (example, index) => (
                    <WorkedExample
                      key={example.id || index}
                      example={example}
                      number={index + 1}
                    />
                  )
                )}
              </div>
            </SectionCard>
          )}

          {/* Interactive Exploration */}

          {interactiveExploration && (
            <SectionCard
              eyebrow="Explore and discover"
              title={
                interactiveExploration.title ||
                "Interactive Exploration"
              }
            >
              {interactiveExploration.description && (
                <p className="leading-8 text-slate-700">
                  {interactiveExploration.description}
                </p>
              )}

{/* Venn Diagram */}
{lesson.vennDiagram && (
  <VennDiagram diagram={lesson.vennDiagram} />
)}
              {Array.isArray(
                interactiveExploration.instructions
              ) &&
                interactiveExploration.instructions
                  .length > 0 && (
                  <div className="mt-6">
                    <Subheading>
                      Investigation Instructions
                    </Subheading>

                    <NumberedList
                      items={
                        interactiveExploration.instructions
                      }
                    />
                  </div>
                )}

              {Array.isArray(
                interactiveExploration.questions
              ) &&
                interactiveExploration.questions
                  .length > 0 && (
                  <div className="mt-8">
                    <Subheading>
                      Investigation Questions
                    </Subheading>

                    <NumberedList
                      items={
                        interactiveExploration.questions
                      }
                    />
                  </div>
                )}

              {Array.isArray(
                interactiveExploration.investigationQuestions
              ) &&
                interactiveExploration
                  .investigationQuestions.length >
                  0 && (
                  <div className="mt-8">
                    <Subheading>
                      Think Like a Statistician
                    </Subheading>

                    <NumberedList
                      items={
                        interactiveExploration
                          .investigationQuestions
                      }
                    />
                  </div>
                )}

              {interactiveExploration.expectedDiscovery && (
                <div className="mt-8 rounded-2xl border border-emerald-200 bg-emerald-50 p-6">
                  <p className="text-sm font-bold uppercase tracking-wide text-emerald-700">
                    Expected Discovery
                  </p>

                  <p className="mt-3 leading-8 text-emerald-950">
                    {
                      interactiveExploration.expectedDiscovery
                    }
                  </p>
                </div>
              )}
            </SectionCard>
          )}

          {/* Real World Applications */}

          {realWorldApplications.length > 0 && (
            <SectionCard
              eyebrow="Creator application"
              title="Real-World Applications"
            >
              <div className="grid gap-4 md:grid-cols-2">
                {realWorldApplications.map(
                  (item, index) => (
                    <article
                      key={`${item.field}-${index}`}
                      className="rounded-2xl border border-slate-200 p-5"
                    >
                      <p className="text-sm font-bold uppercase tracking-wide text-blue-600">
                        {item.field}
                      </p>

                      <p className="mt-2 leading-7 text-slate-700">
                        {item.application}
                      </p>
                    </article>
                  )
                )}
              </div>
            </SectionCard>
          )}

          {/* AI Connection */}

          {aiConnection && (
            <SectionCard
              eyebrow="AI connection"
              title={
                aiConnection.title ||
                "Connection to AI"
              }
            >
              {aiConnection.explanation && (
                <p className="leading-8 text-slate-700">
                  {aiConnection.explanation}
                </p>
              )}

              {aiConnection.example && (
                <div className="mt-5 rounded-2xl border border-indigo-200 bg-indigo-50 p-5">
                  <p className="text-sm font-bold uppercase tracking-wide text-indigo-700">
                    Example
                  </p>

                  <p className="mt-2 leading-7 text-indigo-950">
                    {aiConnection.example}
                  </p>
                </div>
              )}

              {aiConnection.formula && (
                <div className="mt-5 overflow-x-auto rounded-2xl bg-slate-950 p-5 font-mono text-white">
                  {aiConnection.formula}
                </div>
              )}

              {Array.isArray(
                aiConnection.examples
              ) &&
                aiConnection.examples.length > 0 && (
                  <div className="mt-6">
                    <Subheading>
                      Examples
                    </Subheading>

                    <CheckList
                      items={aiConnection.examples}
                    />
                  </div>
                )}

              {Array.isArray(aiConnection.uses) &&
                aiConnection.uses.length > 0 && (
                  <div className="mt-6">
                    <Subheading>Uses</Subheading>

                    <TagList
                      items={aiConnection.uses}
                    />
                  </div>
                )}

              {aiConnection.caution && (
                <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-5">
                  <p className="font-bold text-amber-900">
                    Important Caution
                  </p>

                  <p className="mt-2 leading-7 text-amber-800">
                    {aiConnection.caution}
                  </p>
                </div>
              )}

              {aiConnection.reflectionQuestion && (
                <div className="mt-6 rounded-2xl border border-violet-200 bg-violet-50 p-5">
                  <p className="text-sm font-bold uppercase tracking-wide text-violet-700">
                    Think Critically
                  </p>

                  <p className="mt-2 font-semibold leading-7 text-violet-950">
                    {aiConnection.reflectionQuestion}
                  </p>
                </div>
              )}
            </SectionCard>
          )}

          {/* Python Lab */}

          {pythonLab && (
            <PythonLab lab={pythonLab} />
          )}

          {/* Guided Practice */}

          {guidedPractice.length > 0 && (
            <PracticeSection
              eyebrow="Practice with support"
              title="Guided Practice"
              items={guidedPractice}
              showAnswers={showAnswers}
            />
          )}

          {/* Independent Practice */}

          {independentPractice.length > 0 && (
            <PracticeSection
              eyebrow="Apply independently"
              title="Independent Practice"
              items={independentPractice}
              showAnswers={showAnswers}
            />
          )}

          {/* Show Answers Button */}

          {(guidedPractice.length > 0 ||
            independentPractice.length > 0 ||
            formativeAssessment) && (
            <div className="flex justify-end">
              <button
                type="button"
                onClick={() =>
                  setShowAnswers(
                    (current) => !current
                  )
                }
                className="rounded-xl bg-slate-900 px-5 py-3 font-bold text-white transition hover:bg-slate-700"
              >
                {showAnswers
                  ? "Hide Answers"
                  : "Show Answers"}
              </button>
            </div>
          )}

          {/* Common Mistakes */}

          {commonMistakes.length > 0 && (
            <SectionCard
              eyebrow="Learn from errors"
              title="Common Mistakes"
            >
              <div className="space-y-4">
                {commonMistakes.map(
                  (item, index) => (
                    <article
                      key={index}
                      className="rounded-2xl border border-red-200 bg-red-50 p-5"
                    >
                      <p className="font-extrabold text-red-900">
                        Mistake:{" "}
                        {formatValue(item.mistake)}
                      </p>

                      <p className="mt-2 leading-7 text-red-800">
                        Correction:{" "}
                        {formatValue(
                          item.correction
                        )}
                      </p>

                      {item.example && (
                        <p className="mt-3 text-sm leading-7 text-red-700">
                          Example:{" "}
                          {formatValue(
                            item.example
                          )}
                        </p>
                      )}
                    </article>
                  )
                )}
              </div>
            </SectionCard>
          )}

          {/* Discussion Questions */}

          {discussionQuestions.length > 0 && (
            <SectionCard
              eyebrow="Reason and communicate"
              title="Discussion Questions"
            >
              <NumberedList
                items={discussionQuestions}
              />
            </SectionCard>
          )}

          {/* Formative Assessment */}

          {formativeAssessment && (
            <AssessmentSection
              assessment={formativeAssessment}
              showAnswers={showAnswers}
            />
          )}

          {/* Research Extension */}

          {researchExtension && (
            <SectionCard
              eyebrow="Research"
              title={
                researchExtension.title ||
                "Research Extension"
              }
            >
              {researchExtension.description && (
                <p className="leading-8 text-slate-700">
                  {researchExtension.description}
                </p>
              )}

              {researchExtension.researchQuestion && (
                <InfoPanel
                  label="Research Question"
                  text={
                    researchExtension.researchQuestion
                  }
                  className="mt-5"
                />
              )}

              {Array.isArray(
                researchExtension.applicationOptions
              ) &&
                researchExtension
                  .applicationOptions.length >
                  0 && (
                  <div className="mt-6">
                    <Subheading>
                      Choose an Application
                    </Subheading>

                    <TagList
                      items={
                        researchExtension
                          .applicationOptions
                      }
                    />
                  </div>
                )}

              {researchExtension.task && (
                <div className="mt-6">
                  <Subheading>
                    Your Investigation
                  </Subheading>

                  <p className="leading-8 text-slate-700">
                    {researchExtension.task}
                  </p>
                </div>
              )}

              {Array.isArray(
                researchExtension.requiredEvidence
              ) &&
                researchExtension.requiredEvidence
                  .length > 0 && (
                  <div className="mt-6">
                    <Subheading>
                      Required Evidence
                    </Subheading>

                    <CheckList
                      items={
                        researchExtension
                          .requiredEvidence
                      }
                    />
                  </div>
                )}
            </SectionCard>
          )}

          {/* Portfolio Artifact */}

          {portfolioArtifact && (
            <SectionCard
              eyebrow="Portfolio evidence"
              title={
                portfolioArtifact.title ||
                "Portfolio Artifact"
              }
            >
              {portfolioArtifact.description && (
                <p className="leading-8 text-slate-700">
                  {portfolioArtifact.description}
                </p>
              )}

              {Array.isArray(
                portfolioArtifact.requiredSections
              ) &&
                portfolioArtifact.requiredSections
                  .length > 0 && (
                  <div className="mt-6">
                    <Subheading>
                      Required Sections
                    </Subheading>

                    <CheckList
                      items={
                        portfolioArtifact.requiredSections
                      }
                    />
                  </div>
                )}

              {Array.isArray(
                portfolioArtifact.requiredEvidence
              ) &&
                portfolioArtifact.requiredEvidence
                  .length > 0 && (
                  <div className="mt-6">
                    <Subheading>
                      Required Evidence
                    </Subheading>

                    <CheckList
                      items={
                        portfolioArtifact.requiredEvidence
                      }
                    />
                  </div>
                )}
            </SectionCard>
          )}

          {/* Growth Indicators */}

          {growthIndicators.length > 0 && (
            <SectionCard
              eyebrow="Learning intelligence"
              title="Growth Indicators"
            >
              <p className="mb-6 leading-8 text-slate-700">
                This lesson develops more than
                calculation. Monitor how your
                reasoning, communication,
                interpretation, and curiosity grow.
              </p>

              <div className="grid gap-4 sm:grid-cols-2">
                {growthIndicators.map(
                  (indicator, index) => (
                    <article
                      key={index}
                      className="flex items-center gap-4 rounded-2xl border border-violet-200 bg-violet-50 p-5"
                    >
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-violet-700 font-black text-white">
                        {index + 1}
                      </span>

                      <div>
                        {typeof indicator ===
                        "object" ? (
                          <>
                            <p className="font-extrabold text-violet-950">
                              {indicator.title ||
                                indicator.name ||
                                indicator.skill ||
                                `Growth Indicator ${
                                  index + 1
                                }`}
                            </p>

                            {(indicator.description ||
                              indicator.evidence) && (
                              <p className="mt-1 text-sm leading-6 text-violet-800">
                                {indicator.description ||
                                  indicator.evidence}
                              </p>
                            )}
                          </>
                        ) : (
                          <p className="font-extrabold text-violet-950">
                            {indicator}
                          </p>
                        )}
                      </div>
                    </article>
                  )
                )}
              </div>
            </SectionCard>
          )}

          {/* Reflection */}

          {reflection.length > 0 && (
            <SectionCard
              eyebrow="Metacognition"
              title="Reflection"
            >
              <NumberedList items={reflection} />
            </SectionCard>
          )}

          {/* Summary */}

          {summary.length > 0 && (
            <SectionCard
              eyebrow="Lesson synthesis"
              title="Summary"
            >
              <CheckList items={summary} />
            </SectionCard>
          )}

          {/* Luminery Guidance */}

          {lumineryGuidance && (
            <section className="rounded-3xl border border-violet-200 bg-gradient-to-br from-violet-50 to-indigo-50 p-7">
              <p className="text-sm font-bold uppercase tracking-widest text-violet-700">
                Luminery Guidance
              </p>

              {lumineryGuidance.message && (
                <h2 className="mt-3 text-2xl font-extrabold text-violet-950">
                  {lumineryGuidance.message}
                </h2>
              )}

              {lumineryGuidance.prompt && (
                <p className="mt-4 leading-8 text-violet-900">
                  {lumineryGuidance.prompt}
                </p>
              )}

              {Array.isArray(
                lumineryGuidance.coachingQuestions
              ) &&
                lumineryGuidance
                  .coachingQuestions.length >
                  0 && (
                  <div className="mt-6 rounded-2xl border border-violet-200 bg-white/70 p-5">
                    <p className="text-sm font-bold uppercase tracking-wide text-violet-700">
                      Luminery Coaching Questions
                    </p>

                    <div className="mt-4">
                      <NumberedList
                        items={
                          lumineryGuidance
                            .coachingQuestions
                        }
                      />
                    </div>
                  </div>
                )}
            </section>
          )}

          {/* Navigation */}

          <LessonNavigation
            previousLesson={previousLesson}
            nextLesson={nextLesson}
            onPrevious={onPrevious}
            onNext={onNext}
          />
        </div>

        <LessonSidebar
          lesson={lesson}
          completed={completed}
          onComplete={handleToggleComplete}
        />
      </div>
    </main>
  );
}

/* =========================================================
   LESSON NOT FOUND
========================================================= */

function LessonNotFound() {
  return (
    <main className="min-h-screen bg-slate-50 px-5 py-12">
      <div className="mx-auto max-w-5xl rounded-3xl border border-red-200 bg-red-50 p-8">
        <p className="text-sm font-bold uppercase tracking-wider text-red-600">
          Lesson error
        </p>

        <h1 className="mt-2 text-3xl font-extrabold text-red-900">
          Lesson not found
        </h1>

        <p className="mt-3 text-red-700">
          The requested lesson could not be loaded.
        </p>
      </div>
    </main>
  );
}

/* =========================================================
   LESSON HERO
========================================================= */

function LessonHero({
  title,
  subtitle,
  moduleNumber,
  lessonNumber,
  duration,
  level,
  status,
  completed,
  onBackToModule,
}) {
  return (
    <header className="bg-gradient-to-br from-blue-950 via-indigo-900 to-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-5 py-12">
        <button
          type="button"
          onClick={onBackToModule}
          className="text-sm font-bold text-blue-200 transition hover:text-white"
        >
          ← Back to Module
        </button>

        <div className="mt-8 max-w-4xl">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-blue-300">
            Module {moduleNumber} · Lesson{" "}
            {lessonNumber}
          </p>

          <h1 className="mt-4 text-4xl font-black leading-tight md:text-6xl">
            {title}
          </h1>

          {subtitle && (
            <p className="mt-5 max-w-3xl text-lg leading-8 text-blue-100">
              {subtitle}
            </p>
          )}

          <div className="mt-8 flex flex-wrap gap-3">
            {duration && (
              <HeroBadge>{duration}</HeroBadge>
            )}

            {level && (
              <HeroBadge>{level}</HeroBadge>
            )}

            {status && (
              <HeroBadge>{status}</HeroBadge>
            )}

            {completed && (
              <HeroBadge>Completed ✓</HeroBadge>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

/* =========================================================
   LESSON SIDEBAR
========================================================= */

function LessonSidebar({
  lesson,
  completed,
  onComplete,
}) {
  const sections = [
    lesson.whyThisLessonExists &&
      "Why This Lesson Exists",

    lesson.problemFirst &&
      "Opening Investigation",

    lesson.learningObjectives?.length > 0 &&
      "Objectives",

    lesson.prerequisiteKnowledge?.length > 0 &&
      "Prerequisites",

    lesson.vocabulary?.length > 0 &&
      "Vocabulary",

    lesson.formulas?.length > 0 &&
      "Formulas",

    lesson.probabilityScale?.length > 0 &&
      "Probability Scale",

    lesson.workedExamples?.length > 0 &&
      "Worked Examples",

    lesson.interactiveExploration &&
      "Exploration",

    lesson.realWorldApplications?.length > 0 &&
      "Real-World Applications",

    lesson.aiConnection &&
      "AI Connection",

    lesson.pythonLab &&
      "Python Lab",

    lesson.guidedPractice?.length > 0 &&
      "Guided Practice",

    lesson.independentPractice?.length > 0 &&
      "Independent Practice",

    lesson.commonMistakes?.length > 0 &&
      "Common Mistakes",

    lesson.discussionQuestions?.length > 0 &&
      "Discussion",

    lesson.formativeAssessment &&
      "Assessment",

    lesson.researchExtension &&
      "Research",

    lesson.portfolioArtifact &&
      "Portfolio",

    lesson.growthIndicators?.length > 0 &&
      "Growth Indicators",

    lesson.reflection?.length > 0 &&
      "Reflection",

    lesson.summary?.length > 0 &&
      "Summary",
  ].filter(Boolean);

  return (
    <aside className="h-fit space-y-5 lg:sticky lg:top-6">
      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <p className="text-sm font-bold uppercase tracking-wider text-slate-500">
          Lesson progress
        </p>

        <div className="mt-4 h-3 overflow-hidden rounded-full bg-slate-200">
          <div
            className={`h-full rounded-full transition-all duration-300 ${
              completed
                ? "w-full bg-emerald-500"
                : "w-1/4 bg-blue-600"
            }`}
          />
        </div>

        <p className="mt-3 font-bold text-slate-900">
          {completed
            ? "Lesson completed"
            : "Lesson in progress"}
        </p>

        <button
          type="button"
          onClick={onComplete}
          className={`mt-5 w-full rounded-xl px-4 py-3 font-bold transition ${
            completed
              ? "bg-emerald-100 text-emerald-800 hover:bg-emerald-200"
              : "bg-blue-600 text-white hover:bg-blue-700"
          }`}
        >
          {completed
            ? "Mark Incomplete"
            : "Mark Complete"}
        </button>

        <p className="mt-3 text-center text-xs leading-5 text-slate-500">
          Your progress is saved automatically on
          this device.
        </p>
      </div>

      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <p className="text-sm font-bold uppercase tracking-wider text-slate-500">
          Included sections
        </p>

        <ul className="mt-4 space-y-3">
          {sections.map((section) => (
            <li
              key={section}
              className="flex items-center gap-3 text-sm font-semibold text-slate-700"
            >
              <span className="h-2 w-2 rounded-full bg-blue-600" />

              {section}
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}

/* =========================================================
   SECTION CARD
========================================================= */

function SectionCard({
  eyebrow,
  title,
  children,
}) {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
      {eyebrow && (
        <p className="text-sm font-bold uppercase tracking-widest text-blue-600">
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

/* =========================================================
   INFO PANEL
========================================================= */

function InfoPanel({
  label,
  text,
  className = "",
}) {
  return (
    <div
      className={`rounded-2xl border border-slate-200 bg-slate-50 p-5 ${className}`}
    >
      <p className="text-sm font-bold uppercase tracking-wide text-slate-500">
        {label}
      </p>

      <p className="mt-2 text-lg font-semibold leading-8 text-slate-900">
        {formatValue(text)}
      </p>
    </div>
  );
}

/* =========================================================
   WORKED EXAMPLE
========================================================= */

function WorkedExample({
  example,
  number,
}) {
  return (
    <article className="overflow-hidden rounded-2xl border border-slate-200">
      <header className="bg-slate-950 px-5 py-4 text-white">
        <p className="text-sm font-bold uppercase tracking-wide text-blue-300">
          Example {number}
        </p>

        <h3 className="mt-1 text-xl font-extrabold">
          {example.title || "Worked Example"}
        </h3>
      </header>

      <div className="space-y-5 p-5">
        {example.problem && (
          <div>
            <Subheading>Problem</Subheading>

            <p className="leading-7 text-slate-700">
              {formatValue(example.problem)}
            </p>
          </div>
        )}

        {Array.isArray(
          example.solutionSteps
        ) &&
          example.solutionSteps.length > 0 && (
            <div>
              <Subheading>
                Solution Steps
              </Subheading>

              <NumberedList
                items={example.solutionSteps}
              />
            </div>
          )}

        {example.answer !== undefined && (
          <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-4">
            <p className="text-sm font-bold uppercase tracking-wide text-emerald-700">
              Answer
            </p>

            <pre className="mt-2 whitespace-pre-wrap font-sans font-semibold leading-7 text-emerald-950">
              {formatValue(example.answer)}
            </pre>
          </div>
        )}

        {example.interpretation && (
          <div>
            <Subheading>
              Interpretation
            </Subheading>

            <p className="leading-7 text-slate-700">
              {formatValue(
                example.interpretation
              )}
            </p>
          </div>
        )}
      </div>
    </article>
  );
}

/* =========================================================
   PYTHON LAB
========================================================= */

function PythonLab({ lab }) {
  return (
    <SectionCard
      eyebrow="Computational practice"
      title={lab.title || "Python Lab"}
    >
      {lab.objective && (
        <p className="leading-8 text-slate-700">
          {lab.objective}
        </p>
      )}

      {lab.code && (
        <pre className="mt-6 overflow-x-auto rounded-2xl bg-slate-950 p-6 text-sm leading-7 text-slate-100">
          <code>{lab.code}</code>
        </pre>
      )}

      {Array.isArray(lab.questions) &&
        lab.questions.length > 0 && (
          <div className="mt-6">
            <Subheading>
              Lab Questions
            </Subheading>

            <NumberedList
              items={lab.questions}
            />
          </div>
        )}

      {Array.isArray(
        lab.reflectionQuestions
      ) &&
        lab.reflectionQuestions.length >
          0 && (
          <div className="mt-6">
            <Subheading>
              Reflection Questions
            </Subheading>

            <NumberedList
              items={
                lab.reflectionQuestions
              }
            />
          </div>
        )}

      {lab.extension && (
        <div className="mt-6 rounded-2xl border border-purple-200 bg-purple-50 p-5">
          <p className="font-extrabold text-purple-900">
            Extension Challenge
          </p>

          <p className="mt-2 leading-7 text-purple-800">
            {lab.extension}
          </p>
        </div>
      )}
    </SectionCard>
  );
}

/* =========================================================
   PRACTICE
========================================================= */

function PracticeSection({
  eyebrow,
  title,
  items,
  showAnswers,
}) {
  return (
    <SectionCard
      eyebrow={eyebrow}
      title={title}
    >
      <div className="space-y-4">
        {items.map((item, index) => (
          <article
            key={item.id || index}
            className="rounded-2xl border border-slate-200 p-5"
          >
            <div className="flex flex-wrap items-center justify-between gap-3">
              <p className="font-extrabold text-slate-900">
                Question {index + 1}
              </p>

              {item.difficulty && (
                <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold uppercase tracking-wide text-slate-600">
                  {item.difficulty}
                </span>
              )}
            </div>

            <p className="mt-3 leading-7 text-slate-700">
              {formatValue(
                item.question ||
                  item.prompt
              )}
            </p>

            {showAnswers &&
              (item.answer !== undefined ||
                item.sampleAnswer !==
                  undefined) && (
                <AnswerPanel
                  value={
                    item.answer ??
                    item.sampleAnswer
                  }
                />
              )}
          </article>
        ))}
      </div>
    </SectionCard>
  );
}

/* =========================================================
   ASSESSMENT
========================================================= */

function AssessmentSection({
  assessment,
  showAnswers,
}) {
  const questions =
    assessment.questions || [];

  return (
    <SectionCard
      eyebrow="Mastery check"
      title="Formative Assessment"
    >
      <div className="flex flex-wrap gap-3">
        {assessment.totalPoints !==
          undefined && (
          <Tag>
            Points: {assessment.totalPoints}
          </Tag>
        )}

        {assessment.passingScore !==
          undefined && (
          <Tag>
            Passing:{" "}
            {assessment.passingScore}
          </Tag>
        )}
      </div>

      <div className="mt-6 space-y-4">
        {questions.map(
          (question, index) => (
            <article
              key={question.id || index}
              className="rounded-2xl border border-slate-200 p-5"
            >
              <div className="flex flex-wrap items-center justify-between gap-3">
                <p className="font-extrabold text-slate-900">
                  Assessment Question{" "}
                  {index + 1}
                </p>

                {question.points !==
                  undefined && (
                  <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-bold text-blue-700">
                    {question.points} points
                  </span>
                )}
              </div>

              <p className="mt-3 leading-7 text-slate-700">
                {formatValue(
                  question.prompt ||
                    question.question
                )}
              </p>

              {Array.isArray(
                question.options
              ) &&
                question.options.length >
                  0 && (
                  <div className="mt-4 space-y-2">
                    {question.options.map(
                      (
                        option,
                        optionIndex
                      ) => (
                        <div
                          key={`${formatValue(
                            option
                          )}-${optionIndex}`}
                          className="rounded-xl bg-slate-50 px-4 py-3 text-slate-700"
                        >
                          {formatValue(
                            option
                          )}
                        </div>
                      )
                    )}
                  </div>
                )}

              {showAnswers &&
                (question.answer !==
                  undefined ||
                  question.sampleAnswer !==
                    undefined) && (
                  <AnswerPanel
                    value={
                      question.answer ??
                      question.sampleAnswer
                    }
                  />
                )}
            </article>
          )
        )}
      </div>
    </SectionCard>
  );
}

/* =========================================================
   ANSWER PANEL
========================================================= */

function AnswerPanel({ value }) {
  return (
    <div className="mt-4 rounded-xl bg-emerald-50 p-4">
      <p className="text-sm font-bold uppercase tracking-wide text-emerald-700">
        Answer
      </p>

      <pre className="mt-2 whitespace-pre-wrap font-sans leading-7 text-emerald-950">
        {formatValue(value)}
      </pre>
    </div>
  );
}

/* =========================================================
   LESSON NAVIGATION
========================================================= */

function LessonNavigation({
  previousLesson,
  nextLesson,
  onPrevious,
  onNext,
}) {
  return (
    <nav className="grid gap-4 md:grid-cols-2">
      <button
        type="button"
        onClick={onPrevious}
        disabled={!previousLesson}
        className="rounded-2xl border border-slate-200 bg-white p-5 text-left transition hover:border-blue-300 hover:shadow-sm disabled:cursor-not-allowed disabled:opacity-40"
      >
        <p className="text-sm font-bold uppercase tracking-wide text-slate-500">
          ← Previous Lesson
        </p>

        <p className="mt-2 font-extrabold text-slate-900">
          {previousLesson?.title ||
            "No previous lesson"}
        </p>
      </button>

      <button
        type="button"
        onClick={onNext}
        disabled={!nextLesson}
        className="rounded-2xl border border-slate-200 bg-white p-5 text-left transition hover:border-blue-300 hover:shadow-sm disabled:cursor-not-allowed disabled:opacity-40"
      >
        <p className="text-sm font-bold uppercase tracking-wide text-slate-500">
          Next Lesson →
        </p>

        <p className="mt-2 font-extrabold text-slate-900">
          {nextLesson?.title ||
            "No next lesson"}
        </p>
      </button>
    </nav>
  );
}

/* =========================================================
   CHECK LIST
========================================================= */

function CheckList({ items }) {
  return (
    <ul className="space-y-3">
      {items.map((item, index) => (
        <li
          key={`${formatValue(
            item
          )}-${index}`}
          className="flex items-start gap-3 leading-7 text-slate-700"
        >
          <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-100 text-sm font-black text-blue-700">
            ✓
          </span>

          <span>{formatValue(item)}</span>
        </li>
      ))}
    </ul>
  );
}

/* =========================================================
   NUMBERED LIST
========================================================= */

function NumberedList({ items }) {
  return (
    <ol className="space-y-3">
      {items.map((item, index) => (
        <li
          key={`${formatValue(
            item
          )}-${index}`}
          className="flex items-start gap-3 leading-7 text-slate-700"
        >
          <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-slate-900 text-sm font-bold text-white">
            {index + 1}
          </span>

          <span>{formatValue(item)}</span>
        </li>
      ))}
    </ol>
  );
}

/* =========================================================
   TAG LIST
========================================================= */

function TagList({ items }) {
  return (
    <div className="flex flex-wrap gap-3">
      {items.map((item, index) => (
        <Tag
          key={`${formatValue(
            item
          )}-${index}`}
        >
          {formatValue(item)}
        </Tag>
      ))}
    </div>
  );
}

/* =========================================================
   TAG
========================================================= */

function Tag({ children }) {
  return (
    <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-bold text-blue-700">
      {children}
    </span>
  );
}

/* =========================================================
   HERO BADGE
========================================================= */

function HeroBadge({ children }) {
  return (
    <span className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-bold text-white backdrop-blur">
      {children}
    </span>
  );
}

/* =========================================================
   SUBHEADING
========================================================= */

function Subheading({ children }) {
  return (
    <h3 className="mb-3 text-lg font-extrabold text-slate-900">
      {children}
    </h3>
  );
}

/* =========================================================
   FORMAT VALUE
========================================================= */

function formatValue(value) {
  if (
    value === undefined ||
    value === null
  ) {
    return "";
  }

  if (
    typeof value === "string" ||
    typeof value === "number" ||
    typeof value === "boolean"
  ) {
    return String(value);
  }

  if (Array.isArray(value)) {
    return value
      .map((item) => formatValue(item))
      .join(", ");
  }

  if (typeof value === "object") {
    if (value.text) {
      return String(value.text);
    }

    if (value.label) {
      return String(value.label);
    }

    if (value.title) {
      return String(value.title);
    }
  }

  return JSON.stringify(value, null, 2);
}