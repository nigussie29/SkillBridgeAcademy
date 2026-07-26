import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  FaClock,
  FaBookOpen,
  FaUsers,
  FaStar,
} from "react-icons/fa";

import { getCourses } from "../services/courses";

const categories = [
  "All",
  "Python",
  "Data Analytics",
  "AI",
  "SQL / Microsoft Fabric",
  "Mathematics",
  "Robotics",
];

function levelColor(level) {
  if (level === "Beginner") {
    return "bg-green-100 text-green-700";
  }

  if (level === "Intermediate") {
    return "bg-yellow-100 text-yellow-700";
  }

  return "bg-red-100 text-red-700";
}

function getCoursePath(course) {
  const slug = course.slug?.toLowerCase() || "";
  const title = course.title?.toLowerCase() || "";

  // Algebra I
  if (
    slug === "algebra-one" ||
    slug === "algebra-1" ||
    slug === "advanced-algebra-1" ||
    title === "algebra i"
  ) {
    return "/library/high-school/algebra-1";
  }

  // Linear Algebra
  if (
    slug === "linear-algebra-foundations" ||
    slug === "linear-algebra-foundations-to-ai" ||
    title.includes("linear algebra")
  ) {
    return "/library/college/linear-algebra";
  }

  // Mathematics
  if (
    slug === "mathematics-data-science-ai" ||
    title.includes("mathematics for data science")
  ) {
    return "/library/mathematics";
  }

  // Python
  if (title.includes("python")) {
    return "/library/computer-science";
  }

  // SQL / Databases
  if (
    title.includes("sql") ||
    title.includes("database") ||
    title.includes("fabric")
  ) {
    return "/library/computer-science";
  }

  // Data & AI
  if (
    title.includes("power bi") ||
    title.includes("data analytics") ||
    title.includes("machine learning") ||
    title.includes("artificial intelligence") ||
    title.includes("ai ")
  ) {
    return "/library/data-ai";
  }

  // Fall back to the regular course detail page.
  return `/courses/${course.id}`;
}

export default function Courses() {
  const [courses, setCourses] = useState([]);
  const [selected, setSelected] = useState("All");
  const [search, setSearch] = useState("");

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadCourses() {
      try {
        setLoading(true);
        setError("");

        const data = await getCourses();

        setCourses(data);
      } catch (err) {
        console.error("Course loading error:", err);

        setError(
          err?.message ||
            "Courses could not be loaded."
        );
      } finally {
        setLoading(false);
      }
    }

    loadCourses();
  }, []);

  const filteredCourses = courses.filter((course) => {
    const category = course.category || "";
    const title = course.title || "";
    const description =
      course.description ||
      course.short_description ||
      "";

    const matchesCategory =
      selected === "All" ||
      category === selected;

    const searchText = search.toLowerCase();

    const matchesSearch =
      title.toLowerCase().includes(searchText) ||
      description.toLowerCase().includes(searchText) ||
      category.toLowerCase().includes(searchText);

    return matchesCategory && matchesSearch;
  });

  return (
    <main className="min-h-screen bg-slate-50">
      <section className="px-6 py-14">
        <div className="mx-auto max-w-7xl">

          {/* Page Header */}

          <p className="text-sm font-bold uppercase tracking-wide text-blue-600">
            Courses
          </p>

          <h1 className="mt-3 max-w-3xl text-4xl font-extrabold tracking-tight text-slate-950 md:text-5xl">
            Explore career-ready courses.
          </h1>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
            Learn practical skills in Python, AI,
            data analytics, Power BI,
            Microsoft Fabric, mathematics,
            and robotics.
          </p>

          {/* Summary Cards */}

          <div className="mt-10 grid gap-4 md:grid-cols-4">
            {[
              [courses.length || "0", "Courses"],
              ["2,500+", "Students"],
              ["98%", "Completion"],
              ["4.9", "Average Rating"],
            ].map(([number, label]) => (
              <div
                key={label}
                className="rounded-2xl bg-white p-5 shadow-sm"
              >
                <p className="text-3xl font-extrabold text-blue-600">
                  {number}
                </p>

                <p className="mt-1 text-sm font-medium text-slate-600">
                  {label}
                </p>
              </div>
            ))}
          </div>

          {/* Search + Categories */}

          <div className="mt-10 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <input
              type="text"
              placeholder="Search courses..."
              value={search}
              onChange={(event) =>
                setSearch(event.target.value)
              }
              className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none focus:border-blue-600 md:max-w-md"
            />

            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  type="button"
                  onClick={() =>
                    setSelected(category)
                  }
                  className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${
                    selected === category
                      ? "border-blue-600 bg-blue-600 text-white"
                      : "border-slate-300 bg-white text-slate-700 hover:border-blue-600"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Loading */}

          {loading && (
            <div className="mt-10 rounded-2xl bg-white p-8 text-center shadow-sm">
              <p className="font-semibold text-slate-600">
                Loading courses...
              </p>
            </div>
          )}

          {/* Error */}

          {!loading && error && (
            <div className="mt-10 rounded-2xl border border-red-200 bg-red-50 p-6">
              <p className="font-bold text-red-700">
                Courses could not be loaded.
              </p>

              <p className="mt-2 text-sm text-red-600">
                {error}
              </p>
            </div>
          )}

          {/* Course Grid */}

          {!loading && !error && (
            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filteredCourses.map((course) => {
                const description =
                  course.description ||
                  course.short_description ||
                  "Course description coming soon.";

                const duration =
                  course.duration ||
                  course.weeks ||
                  "Self-paced";

                const lessonCount =
                  course.lessons ??
                  course.lesson_count ??
                  0;

                const students =
                  course.students ?? 0;

                const rating =
                  course.rating ?? "New";

                return (
                  <article
                    key={course.id}
                    className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
                  >
                    <div className="flex h-40 items-center justify-center bg-gradient-to-br from-blue-600 to-indigo-700 px-6 text-center">
                      <h2 className="text-2xl font-extrabold text-white">
                        {course.category ||
                          "SkillBridge Course"}
                      </h2>
                    </div>

                    <div className="p-6">
                      <div className="flex items-center justify-between gap-4">
                        <span
                          className={`rounded-full px-3 py-1 text-xs font-bold ${levelColor(
                            course.level
                          )}`}
                        >
                          {course.level ||
                            "Beginner"}
                        </span>

                        <span className="text-sm font-semibold text-slate-500">
                          {duration}
                        </span>
                      </div>

                      <h3 className="mt-4 text-xl font-extrabold text-slate-950">
                        {course.title}
                      </h3>

                      <p className="mt-3 min-h-16 text-sm leading-6 text-slate-600">
                        {description}
                      </p>

                      <div className="mt-5 grid grid-cols-2 gap-3 text-sm text-slate-600">
                        <p className="flex items-center gap-2">
                          <FaBookOpen />
                          {lessonCount} lessons
                        </p>

                        <p className="flex items-center gap-2">
                          <FaClock />
                          {duration}
                        </p>

                        <p className="flex items-center gap-2">
                          <FaUsers />
                          {students}+ students
                        </p>

                        <p className="flex items-center gap-2">
                          <FaStar />
                          {rating}
                        </p>
                      </div>

                      <Link
                        to={getCoursePath(course)}
                        className="mt-6 block w-full rounded-xl bg-blue-600 py-3 text-center font-bold text-white transition hover:bg-blue-700"
                      >
                        Explore Course →
                      </Link>
                    </div>
                  </article>
                );
              })}
            </div>
          )}

          {!loading &&
            !error &&
            filteredCourses.length === 0 && (
              <div className="mt-10 rounded-2xl bg-white p-8 text-center shadow-sm">
                <h2 className="text-xl font-bold text-slate-900">
                  No courses found
                </h2>

                <p className="mt-2 text-slate-600">
                  Try another search or category.
                </p>
              </div>
            )}
        </div>
      </section>
    </main>
  );
}