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

  // Existing static SkillBridge lesson
  const staticLesson = getLessonBySlug(lessonSlug);

  // New Supabase instructor-created lesson
  const [supabaseLesson, setSupabaseLesson] = useState(null);
  const [supabaseCourse, setSupabaseCourse] = useState(null);
  const [loading, setLoading] = useState(!staticLesson);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadSupabaseLesson() {
      // Existing static lessons continue using LessonEngine.
      if (staticLesson) {
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        setError("");

        const lessonData = await getLessonById(lessonSlug);

        setSupabaseLesson(lessonData);

        if (lessonData.course_id) {
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
  // NEW: Instructor-created Supabase lesson
  // ---------------------------------------

  if (supabaseLesson) {
    return (
      <main className="min-h-screen bg-slate-50">
        {/* SkillBridge top line */}
        <div className="h-2 bg-gradient-to-r from-blue-600 to-indigo-700" />

        <div className="mx-auto max-w-5xl px-6 py-10">
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

          <article className="mt-6 rounded-3xl bg-white p-8 shadow-sm md:p-10">
            <p className="text-sm font-bold uppercase tracking-wide text-blue-600">
              SkillBridge Lesson
            </p>

            <h1 className="mt-3 text-4xl font-extrabold text-slate-950">
              {supabaseLesson.title}
            </h1>

            {supabaseCourse && (
              <p className="mt-2 font-semibold text-slate-500">
                {supabaseCourse.title}
              </p>
            )}

            {supabaseLesson.description && (
              <div className="mt-8 rounded-2xl bg-blue-50 p-6">
                <h2 className="font-extrabold text-slate-900">
                  Lesson Overview
                </h2>

                <p className="mt-2 leading-7 text-slate-700">
                  {supabaseLesson.description}
                </p>
              </div>
            )}

            <div className="mt-8">
              <h2 className="text-2xl font-extrabold text-slate-900">
                Lesson Content
              </h2>

              <div className="mt-4 whitespace-pre-wrap leading-8 text-slate-700">
                {supabaseLesson.content ||
                  "Lesson content coming soon."}
              </div>
            </div>

            {supabaseLesson.video_url && (
              <div className="mt-8">
                <a
                  href={supabaseLesson.video_url}
                  target="_blank"
                  rel="noreferrer"
                  className="font-bold text-blue-600 hover:text-blue-700"
                >
                  Open lesson video →
                </a>
              </div>
            )}

            <div className="mt-10 rounded-2xl bg-violet-50 p-6">
              <p className="font-bold text-violet-700">
                🤖 Luminery
              </p>

              <p className="mt-2 leading-7 text-slate-700">
                Think about the main idea of this lesson,
                what you already know, and how this lesson
                connects to the larger module.
              </p>
            </div>
          </article>
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
  // ORIGINAL SkillBridge Lesson Engine
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
          {/* Lesson Engine */}

          <section className="lg:col-span-2">
            <LessonEngine
              lesson={lesson}
              onProgressUpdate={
                handleProgressUpdate
              }
            />
          </section>

          {/* Sidebar */}

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
                        {
                          item.metadata
                            .lessonNumber
                        }
                        :{" "}
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