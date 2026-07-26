import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { FaCheckCircle, FaRegCircle } from "react-icons/fa";

import { getLessonById } from "../services/supabase/lessons";
import { getCourseById } from "../services/courses";

import { LessonEngine } from "../components/lessonEngine";
import LumineryTutor from "../components/LumineryTutor";
import CourseProgress from "../components/dashboard/CourseProgress";

import {
  getLessonBySlug,
  getLessonsByCourse,
} from "../academy/lessons";

import { getCompletedLessons } from "../academy/mastery/ProgressTracker";
import { courses } from "../data/courses";

export default function LessonPage() {
  const { lessonSlug } = useParams();

  const [progressVersion, setProgressVersion] = useState(0);

  // ---------------------------------------
  // Existing static lesson
  // ---------------------------------------

  const staticLesson = getLessonBySlug(lessonSlug);

  // ---------------------------------------
  // Instructor-created Supabase lesson
  // ---------------------------------------

  const [supabaseLesson, setSupabaseLesson] = useState(null);
  const [supabaseCourse, setSupabaseCourse] = useState(null);
  const [loading, setLoading] = useState(!staticLesson);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadSupabaseLesson() {
      // Static lessons continue using the original LessonEngine.
      if (staticLesson) {
        setSupabaseLesson(null);
        setSupabaseCourse(null);
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        setError("");
        setSupabaseLesson(null);
        setSupabaseCourse(null);

        const lessonData = await getLessonById(lessonSlug);

        setSupabaseLesson(lessonData);

        if (lessonData?.course_id) {
          const courseData = await getCourseById(
            lessonData.course_id
          );

          setSupabaseCourse(courseData);
        }
      } catch (err) {
        console.error(
          "Supabase lesson loading error:",
          err
        );

        setError(
          err?.message ||
            "Lesson could not be loaded."
        );
      } finally {
        setLoading(false);
      }
    }

    loadSupabaseLesson();
  }, [lessonSlug, staticLesson]);

  // ---------------------------------------
  // Loading
  // ---------------------------------------

  if (loading) {
    return (
      <main className="min-h-screen bg-slate-50 px-6 py-20">
        <div className="mx-auto max-w-4xl rounded-3xl bg-white p-10 text-center shadow-sm">
          <p className="font-semibold text-slate-600">
            Loading lesson...
          </p>
        </div>
      </main>
    );
  }

  // ---------------------------------------
  // Instructor-created Pyravanta lesson
  // ---------------------------------------

  if (supabaseLesson) {
    const learningStages = [
      {
        number: 1,
        title: "Learn",
        subtitle: "Build understanding",
        content: supabaseLesson.learn_content,
      },
      {
        number: 2,
        title: "Practice",
        subtitle: "Strengthen the skill",
        content: supabaseLesson.practice_content,
      },
      {
        number: 3,
        title: "Build",
        subtitle: "Turn learning into something",
        content: supabaseLesson.build_content,
      },
      {
        number: 4,
        title: "Master",
        subtitle: "Demonstrate mastery",
        content: supabaseLesson.mastery_check,
      },
      {
        number: 5,
        title: "Apply",
        subtitle: "Use the skill in context",
        content: supabaseLesson.apply_content,
      },
      {
        number: 6,
        title: "Research",
        subtitle: "Investigate beyond the lesson",
        content: supabaseLesson.research_prompt,
      },
      {
        number: 7,
        title: "Create",
        subtitle: "Produce something original",
        content: supabaseLesson.create_challenge,
      },
      {
        number: 8,
        title: "Lead",
        subtitle: "Share mastery with others",
        content: supabaseLesson.lead_reflection,
      },
    ];

    const availableStages = learningStages.filter(
      (stage) => stage.content
    );

    return (
      <main className="min-h-screen bg-slate-50">
        {/* Top brand line */}

        <div className="h-2 bg-gradient-to-r from-blue-600 to-indigo-700" />

        <div className="mx-auto max-w-6xl px-6 py-10">
          <Link
            to={
              supabaseCourse
                ? `/courses/${supabaseCourse.id}`
                : "/courses"
            }
            className="font-bold text-blue-600 hover:text-blue-700"
          >
            ← Back to Course
          </Link>

          {/* Lesson header */}

          <article className="mt-6 rounded-3xl bg-white p-8 shadow-sm md:p-10">
            <p className="text-sm font-bold uppercase tracking-wide text-blue-600">
              Pyravanta Learning Path
            </p>

            <h1 className="mt-3 text-4xl font-extrabold text-slate-950 md:text-5xl">
              {supabaseLesson.title}
            </h1>

            {supabaseCourse && (
              <p className="mt-3 font-semibold text-slate-500">
                {supabaseCourse.title}
              </p>
            )}

            {supabaseLesson.description && (
              <div className="mt-8 rounded-2xl bg-blue-50 p-6">
                <h2 className="font-extrabold text-slate-900">
                  Lesson Overview
                </h2>

                <p className="mt-2 whitespace-pre-wrap leading-7 text-slate-700">
                  {supabaseLesson.description}
                </p>
              </div>
            )}

            {/* Learning objectives */}

            {supabaseLesson.learning_objectives && (
              <section className="mt-8 rounded-2xl border border-blue-200 p-6">
                <p className="text-sm font-bold uppercase tracking-wide text-blue-600">
                  Before You Begin
                </p>

                <h2 className="mt-2 text-2xl font-extrabold text-slate-900">
                  Learning Objectives
                </h2>

                <div className="mt-5 space-y-3">
                  {supabaseLesson.learning_objectives
                    .split("\n")
                    .map((objective) => objective.trim())
                    .filter(Boolean)
                    .map((objective, index) => (
                      <div
                        key={`${objective}-${index}`}
                        className="flex items-start gap-3"
                      >
                        <FaCheckCircle className="mt-1 shrink-0 text-emerald-500" />

                        <p className="leading-7 text-slate-700">
                          {objective}
                        </p>
                      </div>
                    ))}
                </div>
              </section>
            )}

            {/* Path indicator */}

            {availableStages.length > 0 && (
              <section className="mt-10">
                <p className="text-sm font-bold uppercase tracking-wide text-slate-500">
                  Your Learning Journey
                </p>

                <div className="mt-4 grid gap-3 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-8">
                  {availableStages.map((stage) => (
                    <a
                      key={stage.number}
                      href={`#stage-${stage.number}`}
                      className="rounded-2xl border border-slate-200 p-3 text-center transition hover:border-blue-500 hover:bg-blue-50"
                    >
                      <div className="mx-auto flex h-9 w-9 items-center justify-center rounded-xl bg-blue-600 font-extrabold text-white">
                        {stage.number}
                      </div>

                      <p className="mt-2 text-sm font-bold text-slate-800">
                        {stage.title}
                      </p>
                    </a>
                  ))}
                </div>
              </section>
            )}
          </article>

          {/* Eight Pyravanta stages */}

          <div className="mt-8 space-y-6">
            {availableStages.map((stage) => (
              <LearningStage
                key={stage.number}
                number={stage.number}
                title={stage.title}
                subtitle={stage.subtitle}
                content={stage.content}
              />
            ))}
          </div>

          {/* Legacy/general content */}

          {supabaseLesson.content && (
            <section className="mt-8 rounded-3xl bg-white p-8 shadow-sm">
              <h2 className="text-2xl font-extrabold text-slate-900">
                Lesson Summary
              </h2>

              <div className="mt-4 whitespace-pre-wrap leading-8 text-slate-700">
                {supabaseLesson.content}
              </div>
            </section>
          )}

          {/* Video */}

          {supabaseLesson.video_url && (
            <section className="mt-8 rounded-3xl bg-white p-8 shadow-sm">
              <h2 className="text-2xl font-extrabold text-slate-900">
                Lesson Resource
              </h2>

              <a
                href={supabaseLesson.video_url}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-block rounded-xl bg-blue-600 px-5 py-3 font-bold text-white transition hover:bg-blue-700"
              >
                Open Lesson Video →
              </a>
            </section>
          )}

          {/* Luminery */}

          <section className="mt-8 rounded-3xl bg-violet-50 p-8">
            <p className="font-bold text-violet-700">
              🤖 Luminery
            </p>

            <h2 className="mt-2 text-xl font-extrabold text-slate-900">
              Reflect on your learning
            </h2>

            <p className="mt-3 leading-7 text-slate-700">
              As you move through the Pyravanta path, think about how your
              understanding changes from learning the concept to applying,
              researching, creating, and eventually teaching it to someone
              else.
            </p>
          </section>

          {/* Navigation */}

          <div className="mt-8 flex flex-wrap justify-between gap-4">
            <Link
              to={
                supabaseCourse
                  ? `/courses/${supabaseCourse.id}`
                  : "/courses"
              }
              className="rounded-xl border border-slate-300 px-6 py-3 font-bold text-slate-700 transition hover:bg-white"
            >
              ← Back to Course
            </Link>

            <Link
              to="/dashboard"
              className="rounded-xl bg-blue-600 px-6 py-3 font-bold text-white transition hover:bg-blue-700"
            >
              Go to Dashboard
            </Link>
          </div>
        </div>
      </main>
    );
  }

  // ---------------------------------------
  // Nothing found
  // ---------------------------------------

  if (!staticLesson) {
    return (
      <main className="min-h-screen bg-slate-50 px-6 py-20 text-center">
        <h1 className="text-3xl font-bold text-slate-900">
          Lesson not found
        </h1>

        {error && (
          <p className="mt-3 text-slate-600">
            {error}
          </p>
        )}

        <Link
          to="/courses"
          className="mt-6 inline-block font-bold text-blue-600 hover:text-blue-700"
        >
          ← Back to Courses
        </Link>
      </main>
    );
  }

  // ---------------------------------------
  // Original static SkillBridge LessonEngine
  // ---------------------------------------

  const lesson = staticLesson;
  const courseId = lesson.metadata.courseId;

  const course = courses.find(
    (item) => item.id === courseId
  );

  const courseLessons =
    getLessonsByCourse(courseId);

  const completedLessons =
    getCompletedLessons(courseId);

  function handleProgressUpdate() {
    setProgressVersion(
      (current) => current + 1
    );
  }

  return (
    <main className="min-h-screen bg-slate-50 px-6 py-10">
      <div className="mx-auto max-w-7xl">
        <Link
          to={
            course
              ? `/courses/${course.id}`
              : "/courses"
          }
          className="font-bold text-blue-600 hover:text-blue-700"
        >
          ← Back to Course
        </Link>

        <div className="mt-6 grid gap-8 lg:grid-cols-3">
          <section className="lg:col-span-2">
            <LessonEngine
              lesson={lesson}
              onProgressUpdate={
                handleProgressUpdate
              }
            />
          </section>

          <aside className="h-fit rounded-3xl bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-extrabold text-slate-900">
              Course Progress
            </h2>

            <CourseProgress
              courseLessons={courseLessons}
              refreshKey={progressVersion}
            />

            <div className="mt-8">
              <h3 className="font-extrabold text-slate-900">
                Lesson List
              </h3>

              <div className="mt-4 space-y-3">
                {courseLessons.map((item) => {
                  const isActive =
                    item.slug === lesson.slug;

                  const isCompleted =
                    completedLessons.includes(
                      item.id
                    );

                  return (
                    <Link
                      key={item.id}
                      to={`/lessons/${item.slug}`}
                      className={`flex items-center gap-3 rounded-xl border p-4 font-semibold transition ${
                        isActive
                          ? "border-blue-600 bg-blue-50 text-blue-700"
                          : "border-slate-200 text-slate-700 hover:border-blue-600"
                      }`}
                    >
                      {isCompleted ? (
                        <FaCheckCircle
                          className="shrink-0 text-emerald-500"
                          aria-label="Completed"
                        />
                      ) : (
                        <FaRegCircle
                          className="shrink-0 text-slate-400"
                          aria-label="Not completed"
                        />
                      )}

                      <span>
                        Lesson{" "}
                        {item.metadata.lessonNumber}:{" "}
                        {item.metadata.title}
                      </span>
                    </Link>
                  );
                })}
              </div>
            </div>

            <Link
              to="/dashboard"
              className="mt-8 block rounded-xl bg-blue-600 py-3 text-center font-bold text-white transition hover:bg-blue-700"
            >
              Go to Dashboard
            </Link>

            <div className="mt-8">
              <LumineryTutor
                courseTitle={
                  course?.title ??
                  "SkillBridge Academy"
                }
                lessonTitle={
                  lesson.metadata.title
                }
              />
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}

// ---------------------------------------
// Pyravanta learner stage
// ---------------------------------------

function LearningStage({
  number,
  title,
  subtitle,
  content,
}) {
  return (
    <section
      id={`stage-${number}`}
      className="scroll-mt-6 rounded-3xl bg-white p-8 shadow-sm md:p-10"
    >
      <div className="flex items-start gap-4">
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-blue-600 text-xl font-extrabold text-white">
          {number}
        </div>

        <div>
          <p className="text-sm font-bold uppercase tracking-wide text-blue-600">
            {title}
          </p>

          <h2 className="mt-1 text-2xl font-extrabold text-slate-900">
            {subtitle}
          </h2>
        </div>
      </div>

      <div className="mt-6 whitespace-pre-wrap leading-8 text-slate-700">
        {content}
      </div>
    </section>
  );
}