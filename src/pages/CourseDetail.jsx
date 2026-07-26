import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getLessonsByCourse } from "../services/supabase/lessons";
import {
  FaClock,
  FaBookOpen,
  FaUsers,
  FaStar,
  FaCheckCircle,
} from "react-icons/fa";

import { getCourseById } from "../services/courses";
import { getModulesByCourse } from "../services/supabase/modules";

export default function CourseDetail() {
  const { id } = useParams();

  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [modules, setModules] = useState([]);
  const [lessons, setLessons] = useState([]);

  useEffect(() => {
  async function loadCourse() {
    try {
      setLoading(true);
      setError("");

      const data = await getCourseById(id);

      setCourse(data);

      const moduleData = await getModulesByCourse(data.id);

      setModules(moduleData);
      const lessonData = await getLessonsByCourse(data.id);

setLessons(lessonData);
    } catch (err) {
      console.error("Course detail loading error:", err);

      setError(
        err?.message ||
          "Course could not be loaded."
      );
    } finally {
      setLoading(false);
    }
  }

  if (id) {
    loadCourse();
  }
}, [id]);

  if (loading) {
    return (
      <main className="min-h-screen bg-slate-50 px-6 py-20">
        <div className="mx-auto max-w-4xl rounded-3xl bg-white p-10 text-center shadow-sm">
          <p className="font-semibold text-slate-600">
            Loading course...
          </p>
        </div>
      </main>
    );
  }

  if (error || !course) {
    return (
      <main className="min-h-screen bg-slate-50 px-6 py-20 text-center">
        <h1 className="text-3xl font-bold text-slate-900">
          Course not found
        </h1>

        {error && (
          <p className="mt-3 text-slate-600">
            {error}
          </p>
        )}

        <Link
          to="/courses"
          className="mt-6 inline-block font-bold text-blue-600"
        >
          Back to Courses
        </Link>
      </main>
    );
  }

  const description =
    course.description ||
    course.short_description ||
    "Course description coming soon.";

  const duration =
    course.duration ||
    course.weeks ||
    "Self-paced";

  const lessonCount = lessons.length;

  const students =
    course.students ?? 0;

  const rating =
    course.rating ?? "New";

  const skills =
    Array.isArray(course.skills)
      ? course.skills
      : [];

  const curriculum =
    Array.isArray(course.curriculum)
      ? course.curriculum
      : [];

  return (
    <main className="min-h-screen bg-slate-50">
      <section className="bg-gradient-to-br from-blue-700 to-indigo-800 px-6 py-20 text-white">
        <div className="mx-auto max-w-7xl">
          <p className="font-bold uppercase tracking-wide text-blue-200">
            {course.category || "SkillBridge Course"}
          </p>

          <h1 className="mt-4 max-w-4xl text-4xl font-extrabold md:text-6xl">
            {course.title}
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-blue-100">
            {description}
          </p>

          <div className="mt-8 flex flex-wrap gap-5 text-sm font-semibold">
            <span className="flex items-center gap-2">
              <FaBookOpen />
              {lessonCount} lessons
            </span>

            <span className="flex items-center gap-2">
              <FaClock />
              {duration}
            </span>

            <span className="flex items-center gap-2">
              <FaUsers />
              {students}+ students
            </span>

            <span className="flex items-center gap-2">
              <FaStar />
              {rating}
            </span>
          </div>
        </div>
      </section>

      <section className="px-6 py-14">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <div className="rounded-3xl bg-white p-8 shadow-sm">
              <h2 className="text-2xl font-extrabold text-slate-900">
                What you will learn
              </h2>

              {skills.length > 0 ? (
                <div className="mt-6 grid gap-4 md:grid-cols-2">
                  {skills.map((skill) => (
                    <p
                      key={skill}
                      className="flex items-center gap-3 text-slate-700"
                    >
                      <FaCheckCircle className="text-green-600" />
                      {skill}
                    </p>
                  ))}
                </div>
              ) : (
                <p className="mt-4 text-slate-600">
                  Learning outcomes will appear here as the course is developed.
                </p>
              )}
            </div>

           <div className="mt-8 rounded-3xl bg-white p-8 shadow-sm">
  <h2 className="text-2xl font-extrabold text-slate-900">
    Course Curriculum
  </h2>

  {modules.length > 0 ? (
    <div className="mt-6 space-y-5">
      {modules.map((module, moduleIndex) => {
        const moduleLessons = lessons
          .filter((lesson) => lesson.module_id === module.id)
          .sort(
            (a, b) =>
              (a.order_index ?? 0) -
              (b.order_index ?? 0)
          );

        return (
          <article
            key={module.id}
            className="rounded-2xl border border-slate-200 p-6"
          >
            <p className="text-sm font-bold uppercase tracking-wide text-blue-600">
              Module {moduleIndex + 1}
            </p>

            <h3 className="mt-2 text-xl font-extrabold text-slate-900">
              {module.title}
            </h3>

            {module.description && (
              <p className="mt-3 leading-7 text-slate-600">
                {module.description}
              </p>
            )}

            {moduleLessons.length > 0 ? (
              <div className="mt-5 space-y-3">
                {moduleLessons.map((lesson, lessonIndex) => (
                 <Link
  key={lesson.id}
  to={`/lessons/${lesson.id}`}
  className="flex items-center justify-between rounded-xl bg-slate-50 p-4 transition hover:bg-blue-50"
>
  <span className="font-semibold text-slate-800">
    Lesson {lessonIndex + 1}: {lesson.title}
  </span>

  <span className="text-sm font-semibold text-blue-600">
    Open Lesson →
  </span>
</Link>
                ))}
              </div>
            ) : (
              <p className="mt-5 text-sm text-slate-500">
                Lessons have not been added to this module yet.
              </p>
            )}
          </article>
        );
      })}
    </div>
  ) : (
    <p className="mt-4 text-slate-600">
      Modules and lessons have not been added yet.
    </p>
  )}
</div>
          </div>

          <aside className="rounded-3xl bg-white p-8 shadow-sm">
            <h3 className="text-2xl font-extrabold text-slate-900">
              Enroll in this course
            </h3>

            <p className="mt-4 text-slate-600">
              Start learning today and build real career-ready skills.
            </p>

            {lessonCount > 0 ? (
              <button
                type="button"
                className="mt-6 block w-full rounded-xl bg-blue-600 py-3 text-center font-bold text-white"
              >
                Start First Lesson
              </button>
            ) : (
              <div className="mt-6 rounded-xl bg-slate-100 px-4 py-3 text-center font-semibold text-slate-500">
                Lessons coming soon
              </div>
            )}

            <Link
              to="/dashboard"
              className="mt-3 block w-full rounded-xl border border-slate-300 py-3 text-center font-bold text-slate-700 hover:bg-slate-50"
            >
              Go to Dashboard
            </Link>
          </aside>
        </div>
      </section>
    </main>
  );
}