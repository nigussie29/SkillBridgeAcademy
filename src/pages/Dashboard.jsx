import DashboardLayout from "../components/dashboard/DashboardLayout";
import WelcomeCard from "../components/dashboard/WelcomeCard";
import ContinueLearningCard from "../components/dashboard/ContinueLearningCard";
import MasteryCard from "../components/dashboard/MasteryCard";
import LumineryCard from "../components/dashboard/LumineryCard";
import LearningJourneyCard from "../components/dashboard/LearningJourneyCard";
import PortfolioCard from "../components/dashboard/PortfolioCard";
import ResearchCard from "../components/dashboard/ResearchCard";
import CareerCard from "../components/dashboard/CareerCard";
import AchievementsCard from "../components/dashboard/AchievementsCard";

import { useAuth } from "../context/AuthContext";
import { studentMastery } from "../data/mastery/studentMastery";
import { getCourseProgress } from "../academy/mastery/ProgressTracker";

export default function Dashboard() {
  const { profile } = useAuth();

  const firstName =
    profile?.full_name?.split(" ")[0] || "Student";

  // --------------------------------------------------
  // Current student course
  // Temporary local data until enrollment is connected
  // to Supabase.
  // --------------------------------------------------

  const algebraOneCourse = {
    id: "algebra-one",
    title: "Algebra I",
    category: "High School Mathematics",
    level: "High School",
    progress: 0,

    lessons: [
      {
        id: "variables-and-expressions",
        title: "Variables and Expressions",
        status: "completed",
        path:
          "/library/high-school/algebra-1/module/1/lesson/variables-and-expressions",
      },

      {
        id: "order-of-operations",
        title: "Order of Operations",
        status: "current",
        path:
          "/library/high-school/algebra-1/module/1/lesson/order-of-operations",
      },

      {
        id: "properties-of-real-numbers",
        title: "Properties of Real Numbers",
        status: "locked",
        path:
          "/library/high-school/algebra-1/module/1/lesson/properties-of-real-numbers",
      },
    ],
  };

  // --------------------------------------------------
  // Today's learning mission
  // --------------------------------------------------

 const todaysMission = {
  subject: "Variables and Expressions",
  currentStage: "Learn",
  nextStep: "Complete Lesson 1",
  purpose:
    "Build the foundation of Algebra I by understanding variables, expressions, constants, coefficients, and terms.",
  estimatedTime: "45 minutes",
};
  // --------------------------------------------------
  // Career / portfolio / research demo data
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

  const achievements = [
    {
      id: 1,
      icon: "🏆",
      title: "Lesson Builder",
      description:
        "Completed your first SkillBridge lesson.",
      date: "Today",
    },

    {
      id: 2,
      icon: "🚀",
      title: "Platform Architect",
      description:
        "Built the LessonTemplate and CourseTemplate engines.",
      date: "Sprint 3",
    },
  ];

  // --------------------------------------------------
  // Course progress
  // --------------------------------------------------

  const liveProgress = getCourseProgress(
    algebraOneCourse.id,
    algebraOneCourse.lessons.length
  );

  const courseWithLiveProgress = {
    ...algebraOneCourse,
    progress: liveProgress,
  };

  return (
    <DashboardLayout>
      <div className="space-y-8">

        {/* 1. Student Welcome / Mission */}
        <WelcomeCard
          name={firstName}
          mission={todaysMission}
        />

        {/* 2. Continue Learning + Mastery */}
        <section className="grid items-start gap-6 xl:grid-cols-12">
          <div className="xl:col-span-8">
            <ContinueLearningCard
              course={courseWithLiveProgress}
            />
          </div>

          <div className="xl:col-span-4">
            <MasteryCard mastery={studentMastery} />
          </div>
        </section>

        {/* 3. Learning Journey */}
        <section>
          <LearningJourneyCard />
        </section>

        {/* 4. Luminery + Career + Achievements */}
        <section className="grid items-start gap-6 xl:grid-cols-12">
          <div className="xl:col-span-8">
            <LumineryCard
              learner={firstName}
              greeting="Welcome back"
              message="You are building a strong Algebra I foundation. Your current focus is understanding how the structure of an expression determines the order in which operations are performed."
              mission="Complete Lesson 2: Order of Operations."
              recommendation="Predict each result before calculating. Explain why each operation comes next instead of relying only on memorized rules."
              confidence={91}
              tasks={[
                {
                  title: "Review the Warm-Up",
                  duration: "5 min",
                },
                {
                  title: "Complete Guided Practice",
                  duration: "15 min",
                },
                {
                  title: "Complete Independent Practice",
                  duration: "15 min",
                },
                {
                  title: "Take the Mastery Assessment",
                  duration: "10 min",
                },
              ]}
            />
          </div>

          <aside className="space-y-6 xl:col-span-4">
            <CareerCard career={career} />

            <AchievementsCard
              achievements={achievements}
            />
          </aside>
        </section>

        {/* 5. Portfolio + Research */}
        <section>
          <div className="mb-4">
            <p className="text-sm font-bold uppercase tracking-widest text-violet-600">
              Growth and Evidence
            </p>

            <h2 className="mt-1 text-2xl font-extrabold text-slate-900">
              Build, apply, and document your skills
            </h2>
          </div>

          <div className="grid items-start gap-6 lg:grid-cols-2">
            <PortfolioCard portfolio={portfolio} />
            <ResearchCard research={research} />
          </div>
        </section>

      </div>
    </DashboardLayout>
  );
}