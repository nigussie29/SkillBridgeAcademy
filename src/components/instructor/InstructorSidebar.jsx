import { NavLink } from "react-router-dom";

const links = [
  {
    label: "Overview",
    path: "/instructor",
  },
  {
    label: "Course Wizard",
    path: "/instructor/create-course",
  },
  {
    label: "Course Builder",
    path: "/instructor/courses",
  },
  {
    label: "Module Builder",
    path: "/instructor/modules",
  },
  {
    label: "Lesson Builder",
    path: "/instructor/lessons",
  },
  {

  label: "Lesson Blueprint",
  path: "/instructor/lesson-blueprint",
},
  {
    label: "Assessment Builder",
    path: "/instructor/assessments",
  },
  {
    label: "Research Builder",
    path: "/instructor/research",
  },
  {
    label: "Portfolio Builder",
    path: "/instructor/portfolio",
  },
  {
    label: "Publish Course",
    path: "/instructor/publish",
  },
];

export default function InstructorSidebar() {
  return (
    <div className="sticky top-0 flex h-screen flex-col overflow-y-auto p-6">
      <div>
        <p className="text-sm font-bold uppercase tracking-wide text-blue-600">
          SkillBridge Academy
        </p>

        <h2 className="mt-2 text-2xl font-extrabold text-slate-900">
          Instructor Studio
        </h2>
      </div>

      <nav className="mt-8 space-y-2">
        {links.map((link) => (
          <NavLink
            key={link.path}
            to={link.path}
            end={link.path === "/instructor"}
            className={({ isActive }) =>
              `block rounded-xl px-4 py-3 font-semibold transition ${
                isActive
                  ? "bg-blue-600 text-white"
                  : "text-slate-700 hover:bg-slate-100"
              }`
            }
          >
            {link.label}
          </NavLink>
        ))}
      </nav>

      <div className="mt-auto rounded-2xl bg-blue-50 p-4">
        <p className="font-bold text-blue-700">
          SkillBridge Method
        </p>

        <p className="mt-2 text-sm leading-6 text-slate-600">
          Start with the problem. Design for mastery, research, creation, and
          leadership.
        </p>
      </div>
    </div>
  );
}