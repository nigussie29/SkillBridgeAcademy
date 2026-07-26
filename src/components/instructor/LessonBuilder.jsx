import { useEffect, useState } from "react";

import { getCourses } from "../../services/courses";
import { getModulesByCourse } from "../../services/supabase/modules";
import { createLesson } from "../../services/supabase/lessons";

const initialLesson = {
  courseId: "",
  moduleId: "",
  title: "",
  description: "",

  learningObjectives: "",

  learnContent: "",
  practiceContent: "",
  buildContent: "",
  masteryCheck: "",
  applyContent: "",
  researchPrompt: "",
  createChallenge: "",
  leadReflection: "",

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

        learning_objectives:
          lessonData.learningObjectives || null,

        learn_content:
          lessonData.learnContent || null,

        practice_content:
          lessonData.practiceContent || null,

        build_content:
          lessonData.buildContent || null,

        mastery_check:
          lessonData.masteryCheck || null,

        apply_content:
          lessonData.applyContent || null,

        research_prompt:
          lessonData.researchPrompt || null,

        create_challenge:
          lessonData.createChallenge || null,

        lead_reflection:
          lessonData.leadReflection || null,

        content: lessonData.content,

        video_url:
          lessonData.videoUrl || null,

        order_index:
          Number(lessonData.orderIndex) || 1,

        free_preview:
          lessonData.freePreview,
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
        Pyravanta Lesson Builder
      </p>

      <h2 className="mt-2 text-3xl font-extrabold text-slate-900">
        Create a structured learning lesson
      </h2>

      <p className="mt-3 max-w-3xl leading-7 text-slate-600">
        Connect the lesson to a course and module, then guide learners through
        the Pyravanta Learning Path from understanding to leadership.
      </p>

      <form onSubmit={handleSubmit} className="mt-8 space-y-6">

        {/* Course + Module */}

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
                <option
                  key={course.id}
                  value={course.id}
                >
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
                updateField(
                  "moduleId",
                  event.target.value
                )
              }
              className="inputStyle"
              required
              disabled={
                !lessonData.courseId ||
                loadingModules
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
                <option
                  key={module.id}
                  value={module.id}
                >
                  {module.title}
                </option>
              ))}
            </select>
          </Field>
        </div>

        {/* Basic lesson information */}

        <Field
          label="Lesson title"
          htmlFor="lesson-title"
        >
          <input
            id="lesson-title"
            type="text"
            value={lessonData.title}
            onChange={(event) =>
              updateField(
                "title",
                event.target.value
              )
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
              updateField(
                "description",
                event.target.value
              )
            }
            rows={4}
            placeholder="What will learners understand or accomplish in this lesson?"
            className="inputStyle"
            required
          />
        </Field>

        {/* Learning objectives */}

        <div className="rounded-3xl border border-blue-200 bg-blue-50/50 p-6">
          <p className="text-sm font-bold uppercase tracking-wide text-blue-600">
            Pyravanta Learning Path
          </p>

          <h3 className="mt-2 text-2xl font-extrabold text-slate-900">
            Learning Objectives
          </h3>

          <p className="mt-2 text-slate-600">
            Define what the learner should know or be able to do by the end
            of this lesson.
          </p>

          <textarea
            id="lesson-objectives"
            value={lessonData.learningObjectives}
            onChange={(event) =>
              updateField(
                "learningObjectives",
                event.target.value
              )
            }
            rows={5}
            placeholder={`Enter one measurable objective per line.

Example:
Explain what a variable represents
Translate a real-world situation into an algebraic expression
Solve a simple linear equation`}
            className="inputStyle"
          />
        </div>

        {/* Stage 1 — Learn */}

        <LearningStage
          number="1"
          title="Learn"
          subtitle="Build understanding"
          description="Introduce the concept clearly before asking the learner to practice or apply it."
        >
          <textarea
            id="lesson-learn"
            value={lessonData.learnContent}
            onChange={(event) =>
              updateField(
                "learnContent",
                event.target.value
              )
            }
            rows={8}
            placeholder={`Teach the core idea here.

Example:
A variable is a symbol that represents a value.

If x + 3 = 7, x represents the unknown number we are trying to find.

Think of the equation as a balanced scale...`}
            className="inputStyle"
          />
        </LearningStage>

        {/* Stage 2 — Practice */}

        <LearningStage
          number="2"
          title="Practice"
          subtitle="Strengthen the skill"
          description="Give learners guided problems or activities to practice the new concept."
        >
          <textarea
            id="lesson-practice"
            value={lessonData.practiceContent}
            onChange={(event) =>
              updateField(
                "practiceContent",
                event.target.value
              )
            }
            rows={7}
            placeholder={`Example:

Solve x + 5 = 12.

What operation should you use first?
Why must you perform it on both sides?`}
            className="inputStyle"
          />
        </LearningStage>

        {/* Stage 3 — Build */}

        <LearningStage
          number="3"
          title="Build"
          subtitle="Turn learning into something"
          description="Ask learners to build, solve, model, code, explain, or create something using what they learned."
        >
          <textarea
            id="lesson-build"
            value={lessonData.buildContent}
            onChange={(event) =>
              updateField(
                "buildContent",
                event.target.value
              )
            }
            rows={7}
            placeholder={`Example:

A movie ticket costs $12 plus a $3 service fee.

Create an equation representing the total cost and explain what each quantity represents.`}
            className="inputStyle"
          />
        </LearningStage>

        {/* Stage 4 — Master */}

        <LearningStage
          number="4"
          title="Master"
          subtitle="Demonstrate mastery"
          description="Check whether the learner can demonstrate the skill independently before moving to real-world application."
        >
          <textarea
            id="lesson-master"
            value={lessonData.masteryCheck}
            onChange={(event) =>
              updateField(
                "masteryCheck",
                event.target.value
              )
            }
            rows={7}
            placeholder={`Create a mastery check.

Example:
Solve independently:

3x + 5 = 20

Show each step and explain why the same operation must be performed on both sides.`}
            className="inputStyle"
          />
        </LearningStage>

        {/* Stage 5 — Apply */}

        <LearningStage
          number="5"
          title="Apply"
          subtitle="Use the skill in context"
          description="Ask learners to apply the mastered skill to a new, realistic, or unfamiliar situation."
        >
          <textarea
            id="lesson-apply"
            value={lessonData.applyContent}
            onChange={(event) =>
              updateField(
                "applyContent",
                event.target.value
              )
            }
            rows={7}
            placeholder={`Create an application task.

Example:
A taxi charges a $4 starting fee plus $2 per mile.

Write an equation for the total cost of a trip and use it to find the cost of an 8-mile ride.`}
            className="inputStyle"
          />
        </LearningStage>

        {/* Stage 6 — Research */}

        <LearningStage
          number="6"
          title="Research"
          subtitle="Investigate beyond the lesson"
          description="Give learners a question that encourages investigation, evidence, comparison, and deeper thinking."
        >
          <textarea
            id="lesson-research"
            value={lessonData.researchPrompt}
            onChange={(event) =>
              updateField(
                "researchPrompt",
                event.target.value
              )
            }
            rows={7}
            placeholder={`Create a research question.

Example:
Where are linear equations used in real life?

Investigate one example from business, engineering, science, or technology.

Explain the variables and how the equation helps solve the problem.`}
            className="inputStyle"
          />
        </LearningStage>

        {/* Stage 7 — Create */}

        <LearningStage
          number="7"
          title="Create"
          subtitle="Produce something original"
          description="Ask learners to combine what they have learned into an original product, solution, explanation, model, project, or artifact."
        >
          <textarea
            id="lesson-create"
            value={lessonData.createChallenge}
            onChange={(event) =>
              updateField(
                "createChallenge",
                event.target.value
              )
            }
            rows={7}
            placeholder={`Create an original challenge.

Example:
Design your own real-world problem that can be represented by a linear equation.

Write the equation, solve it, and explain what each variable represents.`}
            className="inputStyle"
          />
        </LearningStage>

        {/* Stage 8 — Lead */}

        <LearningStage
          number="8"
          title="Lead"
          subtitle="Share mastery with others"
          description="Ask learners to communicate, teach, present, defend, or reflect on their work so mastery develops into leadership."
        >
          <textarea
            id="lesson-lead"
            value={lessonData.leadReflection}
            onChange={(event) =>
              updateField(
                "leadReflection",
                event.target.value
              )
            }
            rows={7}
            placeholder={`Create a leadership challenge.

Example:
Teach another learner how to solve a linear equation.

Explain the process in your own words, demonstrate an example, and describe one common mistake a beginner should avoid.`}
            className="inputStyle"
          />
        </LearningStage>

        {/* Legacy / general lesson content */}

        <Field
          label="General Lesson Content"
          htmlFor="lesson-content"
        >
          <textarea
            id="lesson-content"
            value={lessonData.content}
            onChange={(event) =>
              updateField(
                "content",
                event.target.value
              )
            }
            rows={10}
            placeholder={`Optional general lesson content.

This field remains for compatibility with the current learner lesson page while Pyravanta's structured lesson engine is being developed.`}
            className="inputStyle"
          />
        </Field>

        {/* Video + order */}

        <div className="grid gap-6 md:grid-cols-2">
          <Field
            label="Video URL"
            htmlFor="lesson-video"
          >
            <input
              id="lesson-video"
              type="url"
              value={lessonData.videoUrl}
              onChange={(event) =>
                updateField(
                  "videoUrl",
                  event.target.value
                )
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
                updateField(
                  "orderIndex",
                  event.target.value
                )
              }
              className="inputStyle"
              required
            />
          </Field>
        </div>

        {/* Free preview */}

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

        {/* Luminery */}

        <div className="rounded-2xl bg-violet-50 p-5">
          <p className="font-bold text-violet-700">
            🤖 Luminery Tip
          </p>

          <p className="mt-2 leading-7 text-slate-700">
            A strong lesson moves the learner from understanding to practice,
            creation, application, research, and leadership.
          </p>
        </div>

        {/* Actions */}

        <div className="flex flex-wrap gap-4">
          <button
            type="submit"
            disabled={saving}
            className="rounded-xl bg-blue-600 px-6 py-3 font-bold text-white hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-slate-400"
          >
            {saving
              ? "Saving..."
              : "Save Lesson"}
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

      {/* Error */}

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

      {/* Success */}

      {saved && (
        <div className="mt-8 rounded-2xl bg-green-50 p-6">
          <p className="font-bold text-green-700">
            Lesson saved successfully.
          </p>

          <p className="mt-2 text-slate-700">
            This lesson is now connected to its course and module in Supabase.
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

function Field({
  label,
  htmlFor,
  children,
}) {
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

function LearningStage({
  number,
  title,
  subtitle,
  description,
  children,
}) {
  return (
    <div className="rounded-3xl border border-slate-200 p-6">
      <div className="flex items-start gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-600 text-lg font-extrabold text-white">
          {number}
        </div>

        <div>
          <p className="text-sm font-bold uppercase tracking-wide text-blue-600">
            {title}
          </p>

          <h3 className="mt-1 text-xl font-extrabold text-slate-900">
            {subtitle}
          </h3>

          <p className="mt-2 text-slate-600">
            {description}
          </p>
        </div>
      </div>

      {children}
    </div>
  );
}