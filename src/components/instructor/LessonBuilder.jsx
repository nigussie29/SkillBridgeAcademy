import { useEffect, useState } from "react";
import { getCourses } from "../../services/courses";
import { getModulesByCourse } from "../../services/supabase/modules";
import { createLesson } from "../../services/supabase/lessons";

const initialLesson = {
  courseId: "",
  moduleId: "",
  title: "",
  description: "",
  content: "",
  videoUrl: "",
  orderIndex: 1,
  freePreview: false,
};

export default function LessonBuilder() {
  const [lessonData, setLessonData] = useState(initialLesson);

  const [courses, setCourses] = useState([]);
  const [modules, setModules] = useState([]);

  const [loadingCourses, setLoadingCourses] = useState(true);
  const [loadingModules, setLoadingModules] = useState(false);
  const [saving, setSaving] = useState(false);

  const [saved, setSaved] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadCourses() {
      try {
        setLoadingCourses(true);
        setError("");

        const data = await getCourses();

        setCourses(data);
      } catch (err) {
        console.error("Course loading error:", err);
        setError(err?.message || "Courses could not be loaded.");
      } finally {
        setLoadingCourses(false);
      }
    }

    loadCourses();
  }, []);

  useEffect(() => {
    async function loadModules() {
      if (!lessonData.courseId) {
        setModules([]);
        return;
      }

      try {
        setLoadingModules(true);
        setError("");

        const data = await getModulesByCourse(lessonData.courseId);

        setModules(data);
      } catch (err) {
        console.error("Module loading error:", err);
        setError(err?.message || "Modules could not be loaded.");
      } finally {
        setLoadingModules(false);
      }
    }

    loadModules();
  }, [lessonData.courseId]);

  function updateField(field, value) {
    setLessonData((previous) => ({
      ...previous,
      [field]: value,
    }));

    setSaved(false);
  }

  function handleCourseChange(value) {
    setLessonData((previous) => ({
      ...previous,
      courseId: value,
      moduleId: "",
    }));

    setSaved(false);
  }

  async function handleSubmit(event) {
    event.preventDefault();

    if (!lessonData.courseId) {
      setError("Please select a course.");
      return;
    }

    if (!lessonData.moduleId) {
      setError("Please select a module.");
      return;
    }

    try {
      setSaving(true);
      setSaved(false);
      setError("");

      const lessonRecord = {
        course_id: lessonData.courseId,
        module_id: lessonData.moduleId,
        title: lessonData.title,
        description: lessonData.description,
        content: lessonData.content,
        video_url: lessonData.videoUrl || null,
        order_index: Number(lessonData.orderIndex) || 1,
        free_preview: lessonData.freePreview,
      };

      const savedLesson = await createLesson(lessonRecord);

      console.log("Saved lesson:", savedLesson);

      setSaved(true);
    } catch (err) {
      console.error("Lesson save error:", err);
      setError(err?.message || "Lesson could not be saved.");
    } finally {
      setSaving(false);
    }
  }

  function handleReset() {
    setLessonData(initialLesson);
    setModules([]);
    setSaved(false);
    setError("");
  }

  return (
    <section className="rounded-3xl bg-white p-8 shadow-sm">
      <p className="text-sm font-bold uppercase tracking-wide text-blue-600">
        SkillBridge Lesson Builder
      </p>

      <h2 className="mt-2 text-3xl font-extrabold text-slate-900">
        Create a structured learning lesson
      </h2>

      <p className="mt-3 max-w-3xl leading-7 text-slate-600">
        Connect each lesson to a course and module, then define the learner
        content, sequence, and preview settings.
      </p>

      <form onSubmit={handleSubmit} className="mt-8 space-y-6">
        <div className="grid gap-6 md:grid-cols-2">
          <Field label="Course" htmlFor="lesson-course">
            <select
              id="lesson-course"
              value={lessonData.courseId}
              onChange={(event) =>
                handleCourseChange(event.target.value)
              }
              className="inputStyle"
              required
              disabled={loadingCourses}
            >
              <option value="">
                {loadingCourses
                  ? "Loading courses..."
                  : "Select a course"}
              </option>

              {courses.map((course) => (
                <option key={course.id} value={course.id}>
                  {course.title}
                </option>
              ))}
            </select>
          </Field>

          <Field label="Module" htmlFor="lesson-module">
            <select
              id="lesson-module"
              value={lessonData.moduleId}
              onChange={(event) =>
                updateField("moduleId", event.target.value)
              }
              className="inputStyle"
              required
              disabled={
                !lessonData.courseId || loadingModules
              }
            >
              <option value="">
                {!lessonData.courseId
                  ? "Select a course first"
                  : loadingModules
                  ? "Loading modules..."
                  : "Select a module"}
              </option>

              {modules.map((module) => (
                <option key={module.id} value={module.id}>
                  {module.title}
                </option>
              ))}
            </select>
          </Field>
        </div>

        <Field label="Lesson title" htmlFor="lesson-title">
          <input
            id="lesson-title"
            type="text"
            value={lessonData.title}
            onChange={(event) =>
              updateField("title", event.target.value)
            }
            placeholder="Example: Introduction to Variables"
            className="inputStyle"
            required
          />
        </Field>

        <Field
          label="Lesson description"
          htmlFor="lesson-description"
        >
          <textarea
            id="lesson-description"
            value={lessonData.description}
            onChange={(event) =>
              updateField("description", event.target.value)
            }
            rows={4}
            placeholder="What will learners understand or accomplish in this lesson?"
            className="inputStyle"
            required
          />
        </Field>

        <Field label="Lesson content" htmlFor="lesson-content">
          <textarea
            id="lesson-content"
            value={lessonData.content}
            onChange={(event) =>
              updateField("content", event.target.value)
            }
            rows={12}
            placeholder={`Write the lesson content here.

Example:
Welcome to Lesson 1.

In this lesson, learners will:
- Understand the core concept
- Work through an example
- Complete guided practice
- Reflect on what they learned`}
            className="inputStyle"
            required
          />
        </Field>

        <div className="grid gap-6 md:grid-cols-2">
          <Field label="Video URL" htmlFor="lesson-video">
            <input
              id="lesson-video"
              type="url"
              value={lessonData.videoUrl}
              onChange={(event) =>
                updateField("videoUrl", event.target.value)
              }
              placeholder="https://..."
              className="inputStyle"
            />
          </Field>

          <Field
            label="Lesson order"
            htmlFor="lesson-order"
          >
            <input
              id="lesson-order"
              type="number"
              min="1"
              value={lessonData.orderIndex}
              onChange={(event) =>
                updateField("orderIndex", event.target.value)
              }
              className="inputStyle"
              required
            />
          </Field>
        </div>

        <label className="flex items-center gap-3 rounded-2xl border border-slate-200 p-4">
          <input
            type="checkbox"
            checked={lessonData.freePreview}
            onChange={(event) =>
              updateField(
                "freePreview",
                event.target.checked
              )
            }
            className="h-5 w-5"
          />

          <div>
            <p className="font-bold text-slate-800">
              Allow free preview
            </p>

            <p className="text-sm text-slate-500">
              Learners may preview this lesson without full enrollment.
            </p>
          </div>
        </label>

        <div className="rounded-2xl bg-violet-50 p-5">
          <p className="font-bold text-violet-700">
            🤖 Luminery Tip
          </p>

          <p className="mt-2 leading-7 text-slate-700">
            A strong lesson should have one clear learning purpose,
            meaningful practice, and a direct connection to the module
            outcomes.
          </p>
        </div>

        <div className="flex flex-wrap gap-4">
          <button
            type="submit"
            disabled={saving}
            className="rounded-xl bg-blue-600 px-6 py-3 font-bold text-white hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-slate-400"
          >
            {saving ? "Saving..." : "Save Lesson"}
          </button>

          <button
            type="button"
            onClick={handleReset}
            className="rounded-xl border border-slate-300 px-6 py-3 font-bold text-slate-700 hover:bg-slate-50"
          >
            Reset
          </button>
        </div>
      </form>

      {error && (
        <div className="mt-6 rounded-2xl border border-red-200 bg-red-50 p-5">
          <p className="font-bold text-red-700">
            Lesson could not be saved.
          </p>

          <p className="mt-1 text-sm text-red-600">
            {error}
          </p>
        </div>
      )}

      {saved && (
        <div className="mt-8 rounded-2xl bg-green-50 p-6">
          <p className="font-bold text-green-700">
            Lesson saved successfully.
          </p>

          <p className="mt-2 text-slate-700">
            This lesson is now connected to its selected course and module
            in Supabase.
          </p>
        </div>
      )}

      <style>{`
        .inputStyle {
          margin-top: 0.75rem;
          width: 100%;
          border-radius: 1rem;
          border: 1px solid rgb(203 213 225);
          padding: 1rem;
          color: rgb(15 23 42);
          outline: none;
          transition: 0.2s;
          background: white;
        }

        .inputStyle:focus {
          border-color: rgb(59 130 246);
          box-shadow: 0 0 0 4px rgb(219 234 254);
        }

        .inputStyle:disabled {
          background: rgb(248 250 252);
          color: rgb(100 116 139);
          cursor: not-allowed;
        }
      `}</style>
    </section>
  );
}

function Field({ label, htmlFor, children }) {
  return (
    <div>
      <label
        htmlFor={htmlFor}
        className="block font-bold text-slate-800"
      >
        {label}
      </label>

      {children}
    </div>
  );
}