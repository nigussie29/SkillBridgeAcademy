import { useEffect, useState } from "react";

import { getCourses } from "../../services/courses";
import { getModulesByCourse } from "../../services/supabase/modules";
import { getLessonsByModule } from "../../services/supabase/lessons";

import {
  getLessonBlueprintByLessonId,
  saveLessonBlueprint,
} from "../../services/supabase/lessonBlueprints";

const emptyBlueprintFields = {
  coreConcept: "",
  prerequisites: "",
  vocabulary: "",
  misconceptions: "",

  visualExploration: "",
  technologyTools: "",
  pythonOpportunity: "",
  dataOpportunity: "",

  realWorldApplication: "",
  crossSubjectConnection: "",
  futureMathConnection: "",
  aiConnection: "",

  assessmentEvidence: "",
  researchOpportunity: "",
  creationOpportunity: "",

  sources: "",
};

export default function LessonBlueprintBuilder() {
  const [courseId, setCourseId] = useState("");
  const [moduleId, setModuleId] = useState("");
  const [lessonId, setLessonId] = useState("");

  const [courses, setCourses] = useState([]);
  const [modules, setModules] = useState([]);
  const [lessons, setLessons] = useState([]);

  const [blueprint, setBlueprint] =
    useState(emptyBlueprintFields);

  const [loadingCourses, setLoadingCourses] = useState(true);
  const [loadingModules, setLoadingModules] = useState(false);
  const [loadingLessons, setLoadingLessons] = useState(false);
  const [loadingBlueprint, setLoadingBlueprint] = useState(false);

  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [error, setError] = useState("");

  // ---------------------------------------
  // Load courses
  // ---------------------------------------

  useEffect(() => {
    async function loadCourses() {
      try {
        setLoadingCourses(true);
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
        setLoadingCourses(false);
      }
    }

    loadCourses();
  }, []);

  // ---------------------------------------
  // Load modules after course selection
  // ---------------------------------------

  useEffect(() => {
    async function loadModules() {
      if (!courseId) {
        setModules([]);
        setModuleId("");
        setLessons([]);
        setLessonId("");
        setBlueprint(emptyBlueprintFields);
        return;
      }

      try {
        setLoadingModules(true);
        setError("");

        const data = await getModulesByCourse(courseId);

        setModules(data);
        setModuleId("");
        setLessons([]);
        setLessonId("");
        setBlueprint(emptyBlueprintFields);
      } catch (err) {
        console.error("Module loading error:", err);

        setError(
          err?.message ||
            "Modules could not be loaded."
        );
      } finally {
        setLoadingModules(false);
      }
    }

    loadModules();
  }, [courseId]);

  // ---------------------------------------
  // Load lessons after module selection
  // ---------------------------------------

  useEffect(() => {
    async function loadLessons() {
      if (!moduleId) {
        setLessons([]);
        setLessonId("");
        setBlueprint(emptyBlueprintFields);
        return;
      }

      try {
        setLoadingLessons(true);
        setError("");

        const data = await getLessonsByModule(moduleId);

        setLessons(data);
        setLessonId("");
        setBlueprint(emptyBlueprintFields);
      } catch (err) {
        console.error("Lesson loading error:", err);

        setError(
          err?.message ||
            "Lessons could not be loaded."
        );
      } finally {
        setLoadingLessons(false);
      }
    }

    loadLessons();
  }, [moduleId]);

  // ---------------------------------------
  // Load existing blueprint after lesson selection
  // ---------------------------------------

  useEffect(() => {
    async function loadBlueprint() {
      if (!lessonId) {
        setBlueprint(emptyBlueprintFields);
        return;
      }

      try {
        setLoadingBlueprint(true);
        setError("");
        setSaved(false);

        const data =
          await getLessonBlueprintByLessonId(lessonId);

        if (!data) {
          setBlueprint(emptyBlueprintFields);
          return;
        }

        setBlueprint({
          coreConcept:
            data.core_concept || "",

          prerequisites:
            data.prerequisites || "",

          vocabulary:
            data.vocabulary || "",

          misconceptions:
            data.misconceptions || "",

          visualExploration:
            data.visual_exploration || "",

          technologyTools:
            data.technology_tools || "",

          pythonOpportunity:
            data.python_opportunity || "",

          dataOpportunity:
            data.data_opportunity || "",

          realWorldApplication:
            data.real_world_application || "",

          crossSubjectConnection:
            data.cross_subject_connection || "",

          futureMathConnection:
            data.future_math_connection || "",

          aiConnection:
            data.ai_connection || "",

          assessmentEvidence:
            data.assessment_evidence || "",

          researchOpportunity:
            data.research_opportunity || "",

          creationOpportunity:
            data.creation_opportunity || "",

          sources:
            data.sources || "",
        });
      } catch (err) {
        console.error("Blueprint loading error:", err);

        setError(
          err?.message ||
            "Blueprint could not be loaded."
        );
      } finally {
        setLoadingBlueprint(false);
      }
    }

    loadBlueprint();
  }, [lessonId]);

  function updateField(field, value) {
    setBlueprint((previous) => ({
      ...previous,
      [field]: value,
    }));

    setSaved(false);
  }

  // ---------------------------------------
  // Save blueprint
  // ---------------------------------------

  async function handleSubmit(event) {
    event.preventDefault();

    if (!courseId) {
      setError("Please select a course.");
      return;
    }

    if (!moduleId) {
      setError("Please select a module.");
      return;
    }

    if (!lessonId) {
      setError("Please select a lesson.");
      return;
    }

    try {
      setSaving(true);
      setSaved(false);
      setError("");

      const record = {
        lesson_id: lessonId,
        course_id: courseId,
        module_id: moduleId,

        core_concept:
          blueprint.coreConcept || null,

        prerequisites:
          blueprint.prerequisites || null,

        vocabulary:
          blueprint.vocabulary || null,

        misconceptions:
          blueprint.misconceptions || null,

        visual_exploration:
          blueprint.visualExploration || null,

        technology_tools:
          blueprint.technologyTools || null,

        python_opportunity:
          blueprint.pythonOpportunity || null,

        data_opportunity:
          blueprint.dataOpportunity || null,

        real_world_application:
          blueprint.realWorldApplication || null,

        cross_subject_connection:
          blueprint.crossSubjectConnection || null,

        future_math_connection:
          blueprint.futureMathConnection || null,

        ai_connection:
          blueprint.aiConnection || null,

        assessment_evidence:
          blueprint.assessmentEvidence || null,

        research_opportunity:
          blueprint.researchOpportunity || null,

        creation_opportunity:
          blueprint.creationOpportunity || null,

        sources:
          blueprint.sources || null,

        status: "draft",

        updated_at:
          new Date().toISOString(),
      };

      const result =
        await saveLessonBlueprint(record);

      console.log(
        "Saved lesson blueprint:",
        result
      );

      setSaved(true);
    } catch (err) {
      console.error(
        "Blueprint save error:",
        err
      );

      setError(
        err?.message ||
          "Lesson blueprint could not be saved."
      );
    } finally {
      setSaving(false);
    }
  }

  return (
    <section className="rounded-3xl bg-white p-8 shadow-sm">
      <p className="text-sm font-bold uppercase tracking-wide text-blue-600">
        Lesson Intelligence Blueprint
      </p>

      <h2 className="mt-2 text-3xl font-extrabold text-slate-900">
        Research and design before generating the lesson
      </h2>

      <p className="mt-3 max-w-3xl leading-7 text-slate-600">
        Select a course, module, and lesson, then build the
        instructional intelligence that will later guide the
        Instructor Agent and Pyravanta's eight-stage lesson path.
      </p>

      <form
        onSubmit={handleSubmit}
        className="mt-8 space-y-6"
      >
        {/* -------------------------------- */}
        {/* Course → Module → Lesson */}
        {/* -------------------------------- */}

        <div className="rounded-3xl border border-blue-200 bg-blue-50/50 p-6">
          <p className="text-sm font-bold uppercase tracking-wide text-blue-600">
            Blueprint Target
          </p>

          <h3 className="mt-2 text-xl font-extrabold text-slate-900">
            Select the lesson to design
          </h3>

          <div className="mt-6 grid gap-6 lg:grid-cols-3">
            <SelectField
              label="Course"
              value={courseId}
              onChange={(value) =>
                setCourseId(value)
              }
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
            </SelectField>

            <SelectField
              label="Module"
              value={moduleId}
              onChange={(value) =>
                setModuleId(value)
              }
              disabled={
                !courseId || loadingModules
              }
            >
              <option value="">
                {!courseId
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
            </SelectField>

            <SelectField
              label="Lesson"
              value={lessonId}
              onChange={(value) =>
                setLessonId(value)
              }
              disabled={
                !moduleId ||
                loadingLessons
              }
            >
              <option value="">
                {!moduleId
                  ? "Select a module first"
                  : loadingLessons
                  ? "Loading lessons..."
                  : "Select a lesson"}
              </option>

              {lessons.map((lesson) => (
                <option
                  key={lesson.id}
                  value={lesson.id}
                >
                  {lesson.title}
                </option>
              ))}
            </SelectField>
          </div>

          {loadingBlueprint && (
            <p className="mt-4 font-semibold text-blue-700">
              Loading existing blueprint...
            </p>
          )}
        </div>

        {/* -------------------------------- */}
        {/* Blueprint intelligence */}
        {/* -------------------------------- */}

        <BlueprintSection
          title="Concept Foundation"
          description="Define the knowledge and misconceptions that shape the lesson."
        >
          <Field
            label="Core concept"
            value={blueprint.coreConcept}
            onChange={(value) =>
              updateField(
                "coreConcept",
                value
              )
            }
            placeholder="What must the learner truly understand?"
          />

          <Field
            label="Prerequisites"
            value={blueprint.prerequisites}
            onChange={(value) =>
              updateField(
                "prerequisites",
                value
              )
            }
            placeholder="What should learners already know?"
          />

          <Field
            label="Vocabulary"
            value={blueprint.vocabulary}
            onChange={(value) =>
              updateField(
                "vocabulary",
                value
              )
            }
            placeholder="Important terms, symbols, and notation."
          />

          <Field
            label="Common misconceptions"
            value={blueprint.misconceptions}
            onChange={(value) =>
              updateField(
                "misconceptions",
                value
              )
            }
            placeholder="What do learners commonly misunderstand?"
          />
        </BlueprintSection>

        <BlueprintSection
          title="Mathematics + Technology"
          description="Move from concept to visualization, computation, and data."
        >
          <Field
            label="Visual exploration"
            value={blueprint.visualExploration}
            onChange={(value) =>
              updateField(
                "visualExploration",
                value
              )
            }
            placeholder="Desmos, GeoGebra, diagrams, simulations, interactive graphs..."
          />

          <Field
            label="Technology tools"
            value={blueprint.technologyTools}
            onChange={(value) =>
              updateField(
                "technologyTools",
                value
              )
            }
            placeholder="Which technology genuinely improves understanding?"
          />

          <Field
            label="Python opportunity"
            value={blueprint.pythonOpportunity}
            onChange={(value) =>
              updateField(
                "pythonOpportunity",
                value
              )
            }
            placeholder="How could Python compute, simulate, visualize, or model this idea?"
          />

          <Field
            label="Data opportunity"
            value={blueprint.dataOpportunity}
            onChange={(value) =>
              updateField(
                "dataOpportunity",
                value
              )
            }
            placeholder="What dataset could make the concept meaningful?"
          />
        </BlueprintSection>

        <BlueprintSection
          title="Connections and Application"
          description="Connect mathematics to the real world, other disciplines, and AI."
        >
          <Field
            label="Real-world application"
            value={blueprint.realWorldApplication}
            onChange={(value) =>
              updateField(
                "realWorldApplication",
                value
              )
            }
            placeholder="Where does this concept appear in real life?"
          />

          <Field
            label="Cross-subject connection"
            value={blueprint.crossSubjectConnection}
            onChange={(value) =>
              updateField(
                "crossSubjectConnection",
                value
              )
            }
            placeholder="Science, business, engineering, computer science, finance..."
          />

          <Field
            label="Future mathematics connection"
            value={blueprint.futureMathConnection}
            onChange={(value) =>
              updateField(
                "futureMathConnection",
                value
              )
            }
            placeholder="Where will learners encounter this idea again?"
          />

          <Field
            label="AI connection"
            value={blueprint.aiConnection}
            onChange={(value) =>
              updateField(
                "aiConnection",
                value
              )
            }
            placeholder="How does this concept connect to AI, ML, robotics, or automation?"
          />
        </BlueprintSection>

        <BlueprintSection
          title="Evidence, Research, and Creation"
          description="Define what proves mastery and how learners move beyond the lesson."
        >
          <Field
            label="Assessment evidence"
            value={blueprint.assessmentEvidence}
            onChange={(value) =>
              updateField(
                "assessmentEvidence",
                value
              )
            }
            placeholder="What evidence proves real understanding?"
          />

          <Field
            label="Research opportunity"
            value={blueprint.researchOpportunity}
            onChange={(value) =>
              updateField(
                "researchOpportunity",
                value
              )
            }
            placeholder="What could the learner investigate?"
          />

          <Field
            label="Creation opportunity"
            value={blueprint.creationOpportunity}
            onChange={(value) =>
              updateField(
                "creationOpportunity",
                value
              )
            }
            placeholder="What original artifact, model, project, or explanation could the learner create?"
          />

          <Field
            label="Sources"
            value={blueprint.sources}
            onChange={(value) =>
              updateField(
                "sources",
                value
              )
            }
            placeholder="Standards, references, datasets, research sources, documentation..."
          />
        </BlueprintSection>

        {/* Instructor Agent foundation */}

        <div className="rounded-2xl bg-violet-50 p-6">
          <p className="font-bold text-violet-700">
            🤖 Instructor Agent Foundation
          </p>

          <p className="mt-2 leading-7 text-slate-700">
            The Instructor Agent will eventually research these
            areas, propose a Lesson Intelligence Blueprint, and
            generate Learn, Practice, Build, Master, Apply,
            Research, Create, and Lead only after instructor review.
          </p>
        </div>

        {/* Actions */}

        <div className="flex flex-wrap items-center gap-4">
          <button
            type="submit"
            disabled={
              saving ||
              !courseId ||
              !moduleId ||
              !lessonId
            }
            className="rounded-xl bg-blue-600 px-6 py-3 font-bold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-slate-400"
          >
            {saving
              ? "Saving..."
              : "Save Blueprint"}
          </button>

          {saved && (
            <p className="font-semibold text-emerald-600">
              ✓ Blueprint saved
            </p>
          )}
        </div>
      </form>

      {error && (
        <div className="mt-6 rounded-2xl border border-red-200 bg-red-50 p-5">
          <p className="font-bold text-red-700">
            Blueprint error
          </p>

          <p className="mt-1 text-sm text-red-600">
            {error}
          </p>
        </div>
      )}
    </section>
  );
}

function SelectField({
  label,
  value,
  onChange,
  disabled,
  children,
}) {
  return (
    <div>
      <label className="block font-bold text-slate-800">
        {label}
      </label>

      <select
        value={value}
        onChange={(event) =>
          onChange(event.target.value)
        }
        disabled={disabled}
        className="mt-3 w-full rounded-2xl border border-slate-300 bg-white p-4 text-slate-800 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100 disabled:cursor-not-allowed disabled:bg-slate-100"
      >
        {children}
      </select>
    </div>
  );
}

function BlueprintSection({
  title,
  description,
  children,
}) {
  return (
    <section className="rounded-3xl border border-slate-200 p-6">
      <h3 className="text-xl font-extrabold text-slate-900">
        {title}
      </h3>

      <p className="mt-2 text-slate-600">
        {description}
      </p>

      <div className="mt-6 space-y-6">
        {children}
      </div>
    </section>
  );
}

function Field({
  label,
  value,
  onChange,
  placeholder,
}) {
  return (
    <div>
      <label className="block font-bold text-slate-800">
        {label}
      </label>

      <textarea
        value={value}
        onChange={(event) =>
          onChange(event.target.value)
        }
        rows={4}
        placeholder={placeholder}
        className="mt-3 w-full rounded-2xl border border-slate-300 p-4 text-slate-800 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
      />
    </div>
  );
}