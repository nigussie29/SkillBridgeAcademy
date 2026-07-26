import { useEffect, useState } from "react";
import { getCourses } from "../../services/courses";
import { createModule } from "../../services/supabase/modules";

const initialModule = {
  courseId: "",
  title: "",
  description: "",
  problem: "",
  outcomes: "",
  prerequisites: "",
  duration: "",
  masteryStages: [],
  lessonTitles: "",
  assessmentPlan: "",
  researchConnection: "",
  portfolioEvidence: "",
};

const masteryOptions = [
  "Learn",
  "Practice",
  "Build",
  "Master",
  "Apply",
  "Research",
  "Create",
  "Lead",
];

export default function ModuleBuilder() {
  const [moduleData, setModuleData] = useState(initialModule);
  const [saved, setSaved] = useState(false);
  const [courses, setCourses] = useState([]);
const [loadingCourses, setLoadingCourses] = useState(true);
const [saving, setSaving] = useState(false);
const [error, setError] = useState("");

useEffect(() => {
  async function loadCourses() {
    try {
      setLoadingCourses(true);

      const data = await getCourses();

      setCourses(data);
    } catch (err) {
      console.error("Could not load courses:", err);
      setError(err.message);
    } finally {
      setLoadingCourses(false);
    }
  }

  loadCourses();
}, []);

  function updateField(field, value) {
    setModuleData((previous) => ({
      ...previous,
      [field]: value,
    }));

    setSaved(false);
  }

  function toggleMasteryStage(stage) {
    const currentStages = moduleData.masteryStages;

    const nextStages = currentStages.includes(stage)
      ? currentStages.filter((item) => item !== stage)
      : [...currentStages, stage];

    updateField("masteryStages", nextStages);
  }

  async function handleSubmit(event) {
  event.preventDefault();

  if (!moduleData.courseId) {
    setError("Please select a course.");
    return;
  }

  try {
    setSaving(true);
    setSaved(false);
    setError("");

    const moduleRecord = {
      course_id: moduleData.courseId,
      title: moduleData.title,
      description: moduleData.description,
      problem: moduleData.problem,
      outcomes: moduleData.outcomes,
      prerequisites: moduleData.prerequisites,
      duration: moduleData.duration,
      mastery_stages: moduleData.masteryStages,
      lesson_titles: moduleData.lessonTitles,
      assessment_plan: moduleData.assessmentPlan,
      research_connection: moduleData.researchConnection,
      portfolio_evidence: moduleData.portfolioEvidence,
      order_index: 1,
    };

    const savedModule = await createModule(moduleRecord);

    console.log("Saved module:", savedModule);

    setSaved(true);
  } catch (err) {
    console.error("Module save error:", err);
    setError(err.message);
  } finally {
    setSaving(false);
  }
}

  function handleReset() {
    setModuleData(initialModule);
    setSaved(false);
  }

  return (
    <section className="rounded-3xl bg-white p-8 shadow-sm">
      <p className="text-sm font-bold uppercase tracking-wide text-blue-600">
        SkillBridge Module Builder
      </p>

      <h2 className="mt-2 text-3xl font-extrabold text-slate-900">
        Design a coherent learning module
      </h2>

      <p className="mt-3 max-w-3xl leading-7 text-slate-600">
        Organize lessons, assessments, research, and portfolio evidence around
        one meaningful learning goal.
      </p>

      <form onSubmit={handleSubmit} className="mt-8 space-y-6">
        <Field label="Module title" htmlFor="module-title">
          <Field label="Course" htmlFor="module-course">
  <select
    id="module-course"
    value={moduleData.courseId}
    onChange={(event) =>
      updateField("courseId", event.target.value)
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
          <input
            id="module-title"
            type="text"
            value={moduleData.title}
            onChange={(event) => updateField("title", event.target.value)}
            placeholder="Example: Matrix Operations and Transformations"
            className="inputStyle"
            required
          />
        </Field>

        <Field label="Module description" htmlFor="module-description">
          <textarea
            id="module-description"
            value={moduleData.description}
            onChange={(event) =>
              updateField("description", event.target.value)
            }
            rows={5}
            placeholder="Describe the purpose, scope, and value of this module."
            className="inputStyle"
            required
          />
        </Field>

        <Field label="Problem this module solves" htmlFor="module-problem">
          <textarea
            id="module-problem"
            value={moduleData.problem}
            onChange={(event) => updateField("problem", event.target.value)}
            rows={4}
            placeholder="What learner or real-world problem does this module address?"
            className="inputStyle"
          />
        </Field>

        <Field label="Module outcomes" htmlFor="module-outcomes">
          <textarea
            id="module-outcomes"
            value={moduleData.outcomes}
            onChange={(event) => updateField("outcomes", event.target.value)}
            rows={6}
            placeholder={`Enter one measurable outcome per line.

Example:
Explain matrix operations
Multiply matrices accurately
Build a matrix calculator
Apply transformations to an AI problem`}
            className="inputStyle"
            required
          />
        </Field>

        <div className="grid gap-6 md:grid-cols-2">
          <Field label="Prerequisites" htmlFor="module-prerequisites">
            <textarea
              id="module-prerequisites"
              value={moduleData.prerequisites}
              onChange={(event) =>
                updateField("prerequisites", event.target.value)
              }
              rows={4}
              placeholder="What should learners know before starting?"
              className="inputStyle"
            />
          </Field>

          <Field label="Estimated duration" htmlFor="module-duration">
            <input
              id="module-duration"
              type="text"
              value={moduleData.duration}
              onChange={(event) =>
                updateField("duration", event.target.value)
              }
              placeholder="Example: 2 weeks or 6 hours"
              className="inputStyle"
            />
          </Field>
        </div>

        <div>
          <p className="block font-bold text-slate-800">
            Mastery Pyramid stages
          </p>

          <div className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {masteryOptions.map((stage) => {
              const selected = moduleData.masteryStages.includes(stage);

              return (
                <button
                  key={stage}
                  type="button"
                  onClick={() => toggleMasteryStage(stage)}
                  className={`rounded-2xl border p-4 text-left font-bold transition ${
                    selected
                      ? "border-blue-600 bg-blue-50 text-blue-700"
                      : "border-slate-200 text-slate-700 hover:border-blue-300"
                  }`}
                >
                  {selected ? "✓" : "○"} {stage}
                </button>
              );
            })}
          </div>
        </div>

        <Field label="Lesson titles" htmlFor="module-lessons">
          <textarea
            id="module-lessons"
            value={moduleData.lessonTitles}
            onChange={(event) =>
              updateField("lessonTitles", event.target.value)
            }
            rows={6}
            placeholder={`Enter one lesson per line.

Example:
Introduction to Matrices
Matrix Addition and Subtraction
Matrix Multiplication
Linear Transformations
Module Project`}
            className="inputStyle"
          />
        </Field>

        <Field label="Assessment plan" htmlFor="module-assessment">
          <textarea
            id="module-assessment"
            value={moduleData.assessmentPlan}
            onChange={(event) =>
              updateField("assessmentPlan", event.target.value)
            }
            rows={5}
            placeholder="How will learners demonstrate understanding and mastery throughout the module?"
            className="inputStyle"
          />
        </Field>

        <Field label="Research connection" htmlFor="module-research">
          <textarea
            id="module-research"
            value={moduleData.researchConnection}
            onChange={(event) =>
              updateField("researchConnection", event.target.value)
            }
            rows={5}
            placeholder="What question or investigation will extend learning beyond the module?"
            className="inputStyle"
          />
        </Field>

        <Field label="Portfolio evidence" htmlFor="module-portfolio">
          <textarea
            id="module-portfolio"
            value={moduleData.portfolioEvidence}
            onChange={(event) =>
              updateField("portfolioEvidence", event.target.value)
            }
            rows={5}
            placeholder="What artifact will learners add to their portfolio?"
            className="inputStyle"
          />
        </Field>

        <div className="rounded-2xl bg-violet-50 p-5">
          <p className="font-bold text-violet-700">🤖 Luminery Tip</p>

          <p className="mt-2 leading-7 text-slate-700">
            A strong module has one clear purpose. Every lesson, assessment,
            research task, and portfolio artifact should support the same
            learning outcomes.
          </p>
        </div>

        <div className="flex flex-wrap gap-4">
          <button
  type="submit"
  disabled={saving}
  className="rounded-xl bg-blue-600 px-6 py-3 font-bold text-white hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-slate-400"
>
  {saving ? "Saving..." : "Save Module"}
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
      Module could not be saved.
    </p>

    <p className="mt-1 text-sm text-red-600">
      {error}
    </p>
  </div>
)}
      {saved && (
        <div className="mt-8 rounded-2xl bg-green-50 p-6">
          <p className="font-bold text-green-700">
            Module design saved successfully.
          </p>

          <p className="mt-2 text-slate-700">
            Later, this module will connect to a course, lessons, assessments,
            research activities, and portfolio artifacts in Supabase.
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
        }

        .inputStyle:focus {
          border-color: rgb(59 130 246);
          box-shadow: 0 0 0 4px rgb(219 234 254);
        }
      `}</style>
    </section>
  );
}

function Field({ label, htmlFor, children }) {
  return (
    <div>
      <label htmlFor={htmlFor} className="block font-bold text-slate-800">
        {label}
      </label>

      {children}
    </div>
  );
}