import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext.jsx";
import { supabase } from "../lib/supabase";

const emptyCourse = {
  title: "",
  slug: "",
  short_description: "",
  description: "",
  category: "Mathematics",
  level: "Beginner",
  price: 0,
  duration: "",
  image_url: "",
  published: true,
};

const emptyLesson = {
  course_id: "",
  title: "",
  description: "",
  video_url: "",
  order_index: 1,
  free_preview: true,
  content: "",
};

const emptyResource = {
  course_id: "",
  title: "",
  description: "",
  file_url: "",
  resource_type: "pdf",
};

function getLibraryPath(course) {
  if (!course) return null;

  const slug = course.slug?.toLowerCase();
  const title = course.title?.toLowerCase();

  // High School Mathematics
  if (
    slug === "algebra-one" ||
    slug === "algebra-1" ||
    slug === "advanced-algebra-1" ||
    title === "algebra i"
  ) {
    return "/library/high-school/algebra-1";
  }

  // College Mathematics
  if (
    slug === "linear-algebra-foundations" ||
    slug === "linear-algebra-foundations-to-ai" ||
    title?.includes("linear algebra")
  ) {
    return "/library/college/linear-algebra";
  }

  // Mathematics Library
  if (
    slug === "mathematics-data-science-ai" ||
    title?.includes("mathematics for data science")
  ) {
    return "/library/mathematics";
  }

  // Computer Science
  if (title?.includes("python")) {
    return "/library/computer-science";
  }

  if (
    title?.includes("sql") ||
    title?.includes("database")
  ) {
    return "/library/computer-science";
  }

  // Data & AI
  if (
    title?.includes("power bi") ||
    title?.includes("data analytics") ||
    title?.includes("machine learning") ||
    title?.includes("ai ")
  ) {
    return "/library/data-ai";
  }

  return null;
}

export default function Admin() {
  const { user } = useAuth();

  const [activeTab, setActiveTab] = useState("course");
  const [courses, setCourses] = useState([]);
  const [course, setCourse] = useState(emptyCourse);
  const [lesson, setLesson] = useState(emptyLesson);
  const [resource, setResource] = useState(emptyResource);
  const [selectedFile, setSelectedFile] = useState(null);

  const [courseStatus, setCourseStatus] = useState("");
  const [lessonStatus, setLessonStatus] = useState("");
  const [resourceStatus, setResourceStatus] = useState("");

  useEffect(() => {
    fetchCourses();
  }, []);

  async function fetchCourses() {
    const { data, error } = await supabase
      .from("courses")
      .select("id, title, slug, category, level, published, duration")
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Courses fetch error:", error);
      return;
    }

    setCourses(data || []);
  }

  function slugify(value) {
    return value
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");
  }

  function updateCourseField(event) {
    const { name, value, type, checked } = event.target;

    const updated = {
      ...course,
      [name]: type === "checkbox" ? checked : value,
    };

    if (name === "title") {
      updated.slug = slugify(value);
    }

    setCourse(updated);
  }

  function updateLessonField(event) {
    const { name, value, type, checked } = event.target;

    setLesson({
      ...lesson,
      [name]: type === "checkbox" ? checked : value,
    });
  }

  function updateResourceField(event) {
    const { name, value } = event.target;

    setResource({
      ...resource,
      [name]: value,
    });
  }

  function handleFileChange(event) {
    const file = event.target.files?.[0] ?? null;
    setSelectedFile(file);
  }

  async function createCourse(event) {
    event.preventDefault();

    if (!user?.id) {
      setCourseStatus("You must be signed in as an admin to create a course.");
      return;
    }

    setCourseStatus("Creating course...");

    const { error } = await supabase.from("courses").insert({
      ...course,
      price: Number(course.price),
      created_by: user.id,
    });

    if (error) {
      setCourseStatus(error.message);
    } else {
      setCourseStatus("Course created successfully.");
      setCourse(emptyCourse);
      await fetchCourses();
    }
  }

  async function createLesson(event) {
    event.preventDefault();
    setLessonStatus("Creating lesson...");

    const { error } = await supabase.from("lessons").insert({
      ...lesson,
      order_index: Number(lesson.order_index),
    });

    if (error) {
      setLessonStatus(error.message);
    } else {
      setLessonStatus("Lesson created successfully.");
      setLesson(emptyLesson);
    }
  }

  async function createResource(event) {
    event.preventDefault();
    setResourceStatus("Creating resource...");

    let fileUrl = resource.file_url;

    if (selectedFile) {
      const safeFileName = selectedFile.name
        .toLowerCase()
        .replace(/[^a-z0-9.]+/g, "-");

      const filePath = `resources/${Date.now()}-${safeFileName}`;

      const { error: uploadError } = await supabase.storage
        .from("course-files")
        .upload(filePath, selectedFile);

      if (uploadError) {
        setResourceStatus(uploadError.message);
        return;
      }

      const { data: publicUrlData } = supabase.storage
        .from("course-files")
        .getPublicUrl(filePath);

      fileUrl = publicUrlData.publicUrl;
    }

    if (!fileUrl) {
      setResourceStatus("Please upload a file or paste a file URL.");
      return;
    }

    const { error } = await supabase.from("resources").insert({
      ...resource,
      file_url: fileUrl,
    });

    if (error) {
      setResourceStatus(error.message);
    } else {
      setResourceStatus("Resource created successfully.");
      setResource(emptyResource);
      setSelectedFile(null);
    }
  }

  return (
    <section className="section py-16">
      <div className="max-w-3xl">
        <h1 className="text-4xl font-extrabold">Admin Dashboard</h1>
        <p className="mt-4 text-slate-600">
          Manage courses, lessons, and downloadable resources for SkillBridge Academy.
        </p>
      </div>

      <div className="mt-8 flex flex-wrap gap-3">
        <button type="button" onClick={() => setActiveTab("course")} className={activeTab === "course" ? "btn-primary" : "btn-secondary"}>
          Courses
        </button>

        <button type="button" onClick={() => setActiveTab("lesson")} className={activeTab === "lesson" ? "btn-primary" : "btn-secondary"}>
          Lessons
        </button>

        <button type="button" onClick={() => setActiveTab("resource")} className={activeTab === "resource" ? "btn-primary" : "btn-secondary"}>
          Resources
        </button>
      </div>

      <div className="mt-6 rounded-2xl border border-blue-200 bg-blue-50 p-4 text-blue-900">
        {activeTab === "course" && (
          <p>
            <strong>Course:</strong> Create a new course or manage an existing course and open its learner-facing Library page.
          </p>
        )}

        {activeTab === "lesson" && (
          <p>
            <strong>Lesson:</strong> Add Lesson 1, Lesson 2, Lesson 3, etc. inside an existing course.
          </p>
        )}

        {activeTab === "resource" && (
          <p>
            <strong>Resource:</strong> Add PDF notes, worksheets, templates, datasets, or download links for a course.
          </p>
        )}
      </div>

      <div className="mt-10">
        {activeTab === "course" && (
          <div className="space-y-8">
            <form onSubmit={createCourse} className="card grid gap-4 p-6 md:grid-cols-2">
              <div className="md:col-span-2">
                <h2 className="text-2xl font-bold">Create Course</h2>
                <p className="mt-2 text-slate-600">
                  Add a new full course to the public Courses page.
                </p>
              </div>

              <div className="md:col-span-2">
                <label className="label">Course Title</label>
                <input className="input" name="title" value={course.title} onChange={updateCourseField} required />
              </div>

              <div>
                <label className="label">Category</label>
                <select className="input" name="category" value={course.category} onChange={updateCourseField}>
                  <option>Mathematics</option>
                  <option>Python</option>
                  <option>SQL</option>
                  <option>Power BI</option>
                  <option>Microsoft Fabric</option>
                  <option>AI</option>
                  <option>Data Analytics</option>
                  <option>Coding</option>
                </select>
              </div>

              <div>
                <label className="label">Level</label>
                <select className="input" name="level" value={course.level} onChange={updateCourseField}>
                  <option>Beginner</option>
                  <option>Intermediate</option>
                  <option>Advanced</option>
                </select>
              </div>

              <div>
                <label className="label">Duration</label>
                <input className="input" name="duration" value={course.duration} onChange={updateCourseField} placeholder="Example: 4 weeks" />
              </div>

              <div>
                <label className="label">Price</label>
                <input className="input" name="price" type="number" value={course.price} onChange={updateCourseField} />
              </div>

              <div className="md:col-span-2">
                <label className="label">Image URL</label>
                <input className="input" name="image_url" value={course.image_url} onChange={updateCourseField} placeholder="https://..." />
              </div>

              <div className="md:col-span-2">
                <label className="label">Short Description</label>
                <input className="input" name="short_description" value={course.short_description} onChange={updateCourseField} required />
              </div>

              <div className="md:col-span-2">
                <label className="label">Full Description</label>
                <textarea className="input min-h-32" name="description" value={course.description} onChange={updateCourseField} required />
              </div>

              <label className="flex items-center gap-2 md:col-span-2">
                <input type="checkbox" name="published" checked={course.published} onChange={updateCourseField} />
                Published
              </label>

              <div className="md:col-span-2">
                <button className="btn-primary">Create Course</button>
                {courseStatus && <p className="mt-4 text-sm text-slate-600">{courseStatus}</p>}
              </div>
            </form>

            <section className="card p-6">
              <div>
                <p className="text-sm font-bold uppercase tracking-wide text-blue-600">
                  Course Management
                </p>
                <h2 className="mt-2 text-2xl font-bold text-slate-900">
                  Manage Existing Courses
                </h2>
                <p className="mt-2 text-slate-600">
                  Review courses, manage their lessons, and open published courses in the Knowledge Library.
                </p>
              </div>

              <div className="mt-6 space-y-4">
                {courses.length === 0 ? (
                  <p className="text-slate-500">No courses found.</p>
                ) : (
                  courses.map((item) => {
                    const libraryPath = getLibraryPath(item);

                    return (
                      <article key={item.id} className="rounded-2xl border border-slate-200 p-5">
                        <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
                          <div>
                            <div className="flex flex-wrap items-center gap-2">
                              <h3 className="text-xl font-bold text-slate-900">
                                {item.title}
                              </h3>

                              <span className={`rounded-full px-3 py-1 text-xs font-bold ${item.published ? "bg-green-100 text-green-700" : "bg-amber-100 text-amber-700"}`}>
                                {item.published ? "Published" : "Draft"}
                              </span>
                            </div>

                            <p className="mt-2 text-sm text-slate-500">
                              {item.category}
                              {item.level ? ` • ${item.level}` : ""}
                              {item.duration ? ` • ${item.duration}` : ""}
                            </p>
                          </div>

                          <div className="flex flex-wrap gap-3">
                            <button
                              type="button"
                              onClick={() => {
                                setLesson((previous) => ({
                                  ...previous,
                                  course_id: item.id,
                                }));
                                setActiveTab("lesson");
                              }}
                              className="btn-secondary"
                            >
                              Lessons
                            </button>

                            {libraryPath ? (
                              <Link to={libraryPath} className="btn-primary">
                                View in Library
                              </Link>
                            ) : (
                              <span className="rounded-xl bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-500">
                                Library route not assigned
                              </span>
                            )}
                          </div>
                        </div>
                      </article>
                    );
                  })
                )}
              </div>
            </section>
          </div>
        )}

        {activeTab === "lesson" && (
          <form onSubmit={createLesson} className="card grid gap-4 p-6 md:grid-cols-2">
            <div className="md:col-span-2">
              <h2 className="text-2xl font-bold">Create Lesson</h2>
              <p className="mt-2 text-slate-600">Add a lesson inside an existing course.</p>
            </div>

            <div className="md:col-span-2">
              <label className="label">Select Course</label>
              <select className="input" name="course_id" value={lesson.course_id} onChange={updateLessonField} required>
                <option value="">Choose a course</option>
                {courses.map((item) => (
                  <option key={item.id} value={item.id}>
                    {item.title}
                  </option>
                ))}
              </select>
            </div>

            <div className="md:col-span-2">
              <label className="label">Lesson Title</label>
              <input className="input" name="title" value={lesson.title} onChange={updateLessonField} placeholder="Lesson 3: Statistics Foundations" required />
            </div>

            <div>
              <label className="label">Lesson Order</label>
              <input className="input" name="order_index" type="number" value={lesson.order_index} onChange={updateLessonField} required />
            </div>

            <div>
              <label className="label">Video URL</label>
              <input className="input" name="video_url" value={lesson.video_url} onChange={updateLessonField} placeholder="YouTube embed URL or video file URL" />
            </div>

            <div className="md:col-span-2">
              <label className="label">Short Lesson Description</label>
              <input className="input" name="description" value={lesson.description} onChange={updateLessonField} required />
            </div>

            <div className="md:col-span-2">
              <label className="label">Lesson Notes / Content</label>
              <textarea
                className="input min-h-72 font-mono text-sm"
                name="content"
                value={lesson.content}
                onChange={updateLessonField}
                placeholder={"# Lesson Title\\n\\n## Learning Objectives\\n1. ..."}
              />
            </div>

            <label className="flex items-center gap-2 md:col-span-2">
              <input type="checkbox" name="free_preview" checked={lesson.free_preview} onChange={updateLessonField} />
              Free Preview
            </label>

            <div className="md:col-span-2">
              <button className="btn-primary">Create Lesson</button>
              {lessonStatus && <p className="mt-4 text-sm text-slate-600">{lessonStatus}</p>}
            </div>
          </form>
        )}

        {activeTab === "resource" && (
          <form onSubmit={createResource} className="card grid gap-4 p-6 md:grid-cols-2">
            <div className="md:col-span-2">
              <h2 className="text-2xl font-bold">Create Resource</h2>
              <p className="mt-2 text-slate-600">
                Add a downloadable PDF, worksheet, template, dataset, or link to a course.
              </p>
            </div>

            <div className="md:col-span-2">
              <label className="label">Select Course</label>
              <select className="input" name="course_id" value={resource.course_id} onChange={updateResourceField} required>
                <option value="">Choose a course</option>
                {courses.map((item) => (
                  <option key={item.id} value={item.id}>
                    {item.title}
                  </option>
                ))}
              </select>
            </div>

            <div className="md:col-span-2">
              <label className="label">Resource Title</label>
              <input className="input" name="title" value={resource.title} onChange={updateResourceField} placeholder="Mathematics Lesson 3 Notes PDF" required />
            </div>

            <div>
              <label className="label">Resource Type</label>
              <select className="input" name="resource_type" value={resource.resource_type} onChange={updateResourceField}>
                <option value="pdf">PDF</option>
                <option value="worksheet">Worksheet</option>
                <option value="template">Template</option>
                <option value="dataset">Dataset</option>
                <option value="link">Link</option>
              </select>
            </div>

            <div>
              <label className="label">File URL</label>
              <input className="input" name="file_url" value={resource.file_url} onChange={updateResourceField} placeholder="Paste Supabase public file URL" />
            </div>

            <div className="md:col-span-2">
              <label className="label">Upload File</label>
              <input
                className="input"
                type="file"
                accept=".pdf,.doc,.docx,.xlsx,.csv,.png,.jpg,.jpeg"
                onChange={handleFileChange}
              />

              {selectedFile && (
                <p className="mt-2 text-sm text-slate-600">
                  Selected: {selectedFile.name}
                </p>
              )}
            </div>

            <div className="md:col-span-2">
              <label className="label">Resource Description</label>
              <textarea className="input min-h-24" name="description" value={resource.description} onChange={updateResourceField} required />
            </div>

            <div className="md:col-span-2">
              <button className="btn-primary">Create Resource</button>
              {resourceStatus && <p className="mt-4 text-sm text-slate-600">{resourceStatus}</p>}
            </div>
          </form>
        )}
      </div>
    </section>
  );
}
""