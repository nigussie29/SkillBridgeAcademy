import DashboardLayout from "../components/dashboard/DashboardLayout";
import WelcomeCard from "../components/dashboard/WelcomeCard";
import {
  ArrowRight,
  BriefcaseBusiness,
  FolderKanban,
  Microscope,
} from "lucide-react";
import { Link } from "react-router-dom";
import MasteryCard from "../components/dashboard/MasteryCard";
import LumineryCard from "../components/dashboard/LumineryCard";
import LearningJourneyCard from "../components/dashboard/LearningJourneyCard";




import { useAuth } from "../context/AuthContext";
import { studentLearningState } from "../data/studentLearningState";

export default function Dashboard() {
  const { profile } = useAuth();

  const firstName =
    profile?.full_name?.split(" ")[0] || "Student";

  // --------------------------------------------------
  // Today's learning mission
  // --------------------------------------------------

  const todaysMission = {
    subject: studentLearningState.mission.subject,
    currentStage:
      studentLearningState.pyravanta.currentStage,
    nextStep: studentLearningState.mission.nextStep,
    purpose: studentLearningState.mission.purpose,
    estimatedTime: `${studentLearningState.mission.estimatedMinutes} minutes`,
  };

  // --------------------------------------------------
  // Professional growth preview data
  // These can later come from Supabase.
  // --------------------------------------------------

  const career = {
    targetRole: "AI and Data Professional",
    readiness: 68,
    nextSkill: "Strengthen mathematical foundations",
  };

  const portfolio = {
    projects: 6,
    certificates: 3,
    latestProject: "Credit Default Prediction",
    githubConnected: true,
  };

  const research = {
    topic: "Machine Learning Model Comparison",
    progress: 52,
    nextStep: "Complete the research extension",
  };

  return (
    <DashboardLayout>
      <div className="space-y-10">

        {/* ==================================================
            HERO — KEEP UNCHANGED
           ================================================== */}

        <section>
          <WelcomeCard
            name={firstName}
            mission={{
              ...todaysMission,
              currentStageNumber:
                studentLearningState.pyravanta
                  .currentStageNumber,
            }}
            course={studentLearningState.course.title}
            module={`Module ${studentLearningState.module.number} — ${studentLearningState.module.title}`}
            lesson={studentLearningState.lesson.title}
            stage={
              studentLearningState.pyravanta.currentStage
            }
            totalStages={
              studentLearningState.pyravanta.totalStages
            }
            onContinue={() => {
              window.location.href =
                studentLearningState.lesson.path;
            }}
          />
        </section>

        {/* ==================================================
            PRIMARY LEARNING WORKSPACE
            Journey + AI Mentor
           ================================================== */}

        <section
          aria-labelledby="learning-workspace-title"
        >
          <div className="mb-5">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-sky-700">
              Learning Workspace
            </p>

            <h2
              id="learning-workspace-title"
              className="mt-1 text-2xl font-extrabold text-slate-950"
            >
              Your journey and daily guidance
            </h2>
          </div>

          <div
            className="
              grid items-start gap-6
              xl:grid-cols-[minmax(260px,0.8fr)_minmax(0,2fr)]
            "
          >
            {/* Pyravanta summary */}
            <div className="min-w-0">
              <LearningJourneyCard
                stages={
                  studentLearningState.pyravanta.stages
                }
              />
            </div>

            {/* Luminery mentor */}
            <div className="min-w-0">
              <LumineryCard
                learner={firstName}
                greeting="Welcome back"
                message={
                  studentLearningState.luminery.message
                }
                mission={
                  studentLearningState.luminery.mission
                }
                recommendation={
                  studentLearningState.luminery
                    .recommendation
                }
                tasks={[
                  {
                    title: "Learn the core concept",
                    duration: "10 min",
                  },
                  {
                    title:
                      "Identify variables, constants, coefficients, and terms",
                    duration: "10 min",
                  },
                  {
                    title: "Complete guided practice",
                    duration: "15 min",
                  },
                  {
                    title:
                      "Reflect on what you learned",
                    duration: "10 min",
                  },
                ]}
              />
            </div>
          </div>
        </section>

        {/* ==================================================
            LEARNING INTELLIGENCE
            One focused section — no sidebar clutter
           ================================================== */}

       {/* ==================================================
    PROFESSIONAL GROWTH
    Portfolio + Research + Career
   ================================================== */}

{/* ==================================================
    YOUR FUTURE STARTS HERE
    Portfolio + Research + TalentBridge AI
   ================================================== */}

<section
  aria-labelledby="future-pathways-title"
  className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm"
>
  {/* Section introduction */}
  <div className="border-b border-slate-200 bg-gradient-to-br from-indigo-950 via-indigo-900 to-violet-900 px-6 py-10 text-center text-white sm:px-10">
    <p className="text-xs font-extrabold uppercase tracking-[0.24em] text-indigo-200">
     FROM LEARNING TO OPPORTUNITY
    </p>

    <h2
      id="future-pathways-title"
      className="mt-3 text-3xl font-black tracking-tight sm:text-4xl"
    >
      Your Future Starts Here
    </h2>

    <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-indigo-100">
      Everything you learn inside SkillBridge becomes something you can
      actually use.
    </p>
  </div>

  {/* Destination cards */}
  <div className="grid gap-0 divide-y divide-slate-200 lg:grid-cols-3 lg:divide-x lg:divide-y-0">
    {/* Portfolio */}
    <Link
      to="/portfolio"
      className="group flex min-h-[310px] flex-col p-7 transition duration-300 hover:bg-emerald-50/60 sm:p-8"
    >
      <div className="flex items-start justify-between gap-5">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700 transition group-hover:scale-105">
          <FolderKanban className="h-7 w-7" />
        </div>

        <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-extrabold uppercase tracking-wider text-emerald-700">
          Showcase
        </span>
      </div>

      <div className="mt-7">
        <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-emerald-700">
          Portfolio
        </p>

        <h3 className="mt-2 text-2xl font-black text-slate-950">
          Show what you can build
        </h3>

        <p className="mt-3 leading-7 text-slate-600">
          Turn completed learning into real projects, GitHub evidence, and a
          professional showcase of your skills.
        </p>
      </div>

      <div className="mt-auto flex items-center gap-2 pt-8 font-extrabold text-emerald-700">
        Open Portfolio

        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </div>
    </Link>

    {/* Research */}
    <Link
      to="/research"
      className="group flex min-h-[310px] flex-col p-7 transition duration-300 hover:bg-violet-50/60 sm:p-8"
    >
      <div className="flex items-start justify-between gap-5">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-100 text-violet-700 transition group-hover:scale-105">
          <Microscope className="h-7 w-7" />
        </div>

        <span className="rounded-full bg-violet-50 px-3 py-1 text-xs font-extrabold uppercase tracking-wider text-violet-700">
          Discover
        </span>
      </div>

      <div className="mt-7">
        <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-violet-700">
          Research Lab
        </p>

        <h3 className="mt-2 text-2xl font-black text-slate-950">
          Think like a researcher
        </h3>

        <p className="mt-3 leading-7 text-slate-600">
          Ask meaningful questions, test ideas, record evidence, and develop
          the habits of independent discovery.
        </p>
      </div>

      <div className="mt-auto flex items-center gap-2 pt-8 font-extrabold text-violet-700">
        Open Research Lab

        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </div>
    </Link>

    {/* TalentBridge AI */}
    <Link
      to="/talentbridge"
      className="group flex min-h-[310px] flex-col p-7 transition duration-300 hover:bg-amber-50/60 sm:p-8"
    >
      <div className="flex items-start justify-between gap-5">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-100 text-amber-700 transition group-hover:scale-105">
          <BriefcaseBusiness className="h-7 w-7" />
        </div>

        <span className="rounded-full bg-amber-50 px-3 py-1 text-xs font-extrabold uppercase tracking-wider text-amber-700">
          Career
        </span>
      </div>

      <div className="mt-7">
        <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-amber-700">
          TalentBridge AI
        </p>

        <h3 className="mt-2 text-2xl font-black text-slate-950">
          Turn skills into opportunities
        </h3>

        <p className="mt-3 leading-7 text-slate-600">
          Continue from learning into career preparation with AI-powered
          support for resumes, interviews, job matching, and career direction.
        </p>
      </div>

      <div className="mt-auto flex items-center gap-2 pt-8 font-extrabold text-amber-700">
        Open TalentBridge AI

        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </div>
    </Link>
  </div>
</section>

      </div>
    </DashboardLayout>
  );
}