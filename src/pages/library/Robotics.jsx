import {
  ArrowRight,
  Bot,
  BrainCircuit,
  Camera,
  CheckCircle2,
  CircuitBoard,
  Code2,
  Cpu,
  Gauge,
  RadioTower,
  Wrench,
} from "lucide-react";
import { Link } from "react-router-dom";

const learningTracks = [
  {
    title: "Robotics Foundations",
    description:
      "Understand robot systems, safety, mechanical structure, actuators, sensors, feedback, and engineering design.",
    icon: Bot,
  },
  {
    title: "Electronics and Sensors",
    description:
      "Build reliable circuits and collect measurements from ultrasonic, infrared, light, motion, and environmental sensors.",
    icon: CircuitBoard,
  },
  {
    title: "Python and Raspberry Pi",
    description:
      "Control GPIO pins, motors, sensors, and cameras with modular Python programs and testable hardware interfaces.",
    icon: Code2,
  },
  {
    title: "Intelligent Robotics",
    description:
      "Apply computer vision, machine learning, planning, and responsible AI to autonomous robotic systems.",
    icon: BrainCircuit,
  },
];

const pathway = [
  {
    number: "01",
    title: "Build the Circuit",
    description:
      "Learn voltage, current, breadboards, GPIO safety, motor drivers, and dependable power connections.",
    icon: CircuitBoard,
  },
  {
    number: "02",
    title: "Sense the Environment",
    description:
      "Collect, validate, filter, and interpret sensor measurements before using them for decisions.",
    icon: RadioTower,
  },
  {
    number: "03",
    title: "Program Motion",
    description:
      "Use Python functions, state logic, timing, and feedback to control motors and robot behavior.",
    icon: Cpu,
  },
  {
    number: "04",
    title: "Add Intelligence",
    description:
      "Integrate cameras, perception, navigation, and AI while preserving human control and safe operation.",
    icon: Camera,
  },
];

const projects = [
  {
    title: "Sensor Measurement Station",
    level: "Foundation",
    description:
      "Connect a sensor, collect timestamped measurements, validate impossible values, and visualize the readings.",
    icon: Gauge,
  },
  {
    title: "Raspberry Pi Obstacle-Avoiding Robot",
    level: "Builder",
    description:
      "Use an ultrasonic sensor, motor driver, and Python state machine to detect obstacles and choose a safe direction.",
    icon: Bot,
  },
  {
    title: "Camera-Guided Mobile Robot",
    level: "Advanced",
    description:
      "Build a vision pipeline that detects a target, evaluates confidence, and issues safe movement commands.",
    icon: Camera,
  },
];

const outcomes = [
  "Explain how sensing, computation, actuation, and feedback work together.",
  "Wire and test sensors, motor drivers, and Raspberry Pi GPIO safely.",
  "Write modular Python programs for robot control and data collection.",
  "Diagnose failures using measurements, logs, diagrams, and repeatable tests.",
  "Design safety limits, manual overrides, and responsible autonomous behavior.",
  "Document a working robot as portfolio evidence with code and test results.",
];

export default function Robotics() {
  return (
    <main className="min-h-screen bg-slate-50 pb-20">
      <section className="overflow-hidden bg-gradient-to-br from-slate-950 via-orange-950 to-amber-900 text-white">
        <div className="mx-auto max-w-7xl px-6 py-14 md:py-20">
          <Link
            to="/library"
            className="text-sm font-bold text-amber-200 transition hover:text-white"
          >
            ← Back to Knowledge Library
          </Link>

          <div className="mt-10 grid items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.24em] text-amber-300">
                SkillBridge Academy · Robotics
              </p>

              <h1 className="mt-4 max-w-4xl text-4xl font-black leading-tight md:text-6xl">
                Build machines that
                <span className="mt-2 block text-amber-300">
                  sense, think, and act.
                </span>
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-amber-50/90">
                Learn robotics through mathematics, electronics, Python,
                Raspberry Pi, engineering design, computer vision, and AI—then
                prove your skills with working projects.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#pathway"
                  className="inline-flex items-center gap-2 rounded-xl bg-amber-400 px-5 py-3 font-black text-slate-950 transition hover:bg-amber-300"
                >
                  Explore the Pathway
                  <ArrowRight size={18} />
                </a>

                <a
                  href="#projects"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/30 bg-white/10 px-5 py-3 font-bold text-white transition hover:bg-white/20"
                >
                  View Projects
                </a>
              </div>
            </div>

            <div className="rounded-3xl border border-white/15 bg-white/10 p-7 shadow-2xl backdrop-blur">
              <div className="flex items-center gap-4">
                <div className="rounded-2xl bg-amber-400 p-3 text-slate-950">
                  <Bot size={32} />
                </div>
                <div>
                  <p className="text-sm font-bold uppercase tracking-widest text-amber-200">
                    Robotics Laboratory
                  </p>
                  <p className="text-2xl font-black">Learning pathway</p>
                </div>
              </div>

              <div className="mt-7 grid grid-cols-2 gap-4">
                <Stat label="Learning tracks" value="4" />
                <Stat label="Portfolio projects" value="3" />
                <Stat label="Core platform" value="Raspberry Pi" />
                <Stat label="Course status" value="In development" />
              </div>

              <p className="mt-6 border-t border-white/15 pt-5 text-sm leading-6 text-amber-50/80">
                Start with safe circuits and measurements. Progress toward
                autonomous systems only after each component passes its test.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {learningTracks.map(({ title, description, icon: Icon }) => (
            <article
              key={title}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <div className="inline-flex rounded-2xl bg-amber-50 p-3 text-amber-700">
                <Icon size={25} />
              </div>
              <h2 className="mt-5 text-xl font-black text-slate-950">
                {title}
              </h2>
              <p className="mt-3 leading-7 text-slate-600">{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="pathway" className="mx-auto max-w-7xl px-6 py-10">
        <p className="text-sm font-bold uppercase tracking-widest text-amber-700">
          Learning pathway
        </p>
        <h2 className="mt-2 text-3xl font-black text-slate-950 md:text-4xl">
          From first circuit to intelligent robot
        </h2>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600">
          Each stage combines concepts, hands-on construction, troubleshooting,
          and a clear pass/fail test before the learner moves forward.
        </p>

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {pathway.map(({ number, title, description, icon: Icon }) => (
            <article
              key={number}
              className="flex gap-5 rounded-3xl border border-slate-200 bg-white p-7 shadow-sm"
            >
              <div className="shrink-0">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-950 text-amber-300">
                  <Icon size={25} />
                </div>
              </div>
              <div>
                <p className="text-sm font-black text-amber-700">STAGE {number}</p>
                <h3 className="mt-1 text-xl font-black text-slate-950">
                  {title}
                </h3>
                <p className="mt-3 leading-7 text-slate-600">{description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-8 rounded-3xl bg-slate-950 p-8 text-white lg:grid-cols-[0.8fr_1.2fr] md:p-10">
          <div>
            <div className="inline-flex rounded-2xl bg-amber-400 p-3 text-slate-950">
              <Wrench size={26} />
            </div>
            <p className="mt-5 text-sm font-bold uppercase tracking-widest text-amber-300">
              Mastery outcomes
            </p>
            <h2 className="mt-2 text-3xl font-black">
              Build, test, explain, and improve.
            </h2>
            <p className="mt-4 leading-7 text-slate-300">
              Robotics mastery is demonstrated by a safe working system,
              understandable code, reliable evidence, and thoughtful design
              decisions.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {outcomes.map((outcome) => (
              <div
                key={outcome}
                className="flex gap-3 rounded-2xl border border-white/10 bg-white/5 p-5"
              >
                <CheckCircle2
                  className="mt-0.5 shrink-0 text-amber-300"
                  size={20}
                />
                <p className="text-sm font-semibold leading-6 text-slate-200">
                  {outcome}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="mx-auto max-w-7xl px-6 py-10">
        <p className="text-sm font-bold uppercase tracking-widest text-amber-700">
          Portfolio projects
        </p>
        <h2 className="mt-2 text-3xl font-black text-slate-950 md:text-4xl">
          Create evidence of what you can do
        </h2>

        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          {projects.map(({ title, level, description, icon: Icon }) => (
            <article
              key={title}
              className="flex flex-col rounded-3xl border border-slate-200 bg-white p-7 shadow-sm"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="rounded-2xl bg-amber-50 p-3 text-amber-700">
                  <Icon size={26} />
                </div>
                <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-black uppercase tracking-wide text-slate-700">
                  {level}
                </span>
              </div>
              <h3 className="mt-5 text-2xl font-black text-slate-950">
                {title}
              </h3>
              <p className="mt-3 leading-7 text-slate-600">{description}</p>
              <div className="mt-auto pt-7 text-sm font-bold text-amber-700">
                Course materials in development
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

function Stat({ label, value }) {
  return (
    <div className="rounded-2xl bg-black/15 p-4">
      <dt className="text-xs font-bold uppercase tracking-wide text-amber-200">
        {label}
      </dt>
      <dd className="mt-2 text-lg font-black text-white">{value}</dd>
    </div>
  );
}
