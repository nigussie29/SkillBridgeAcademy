import {
  BookOpen,
  Brain,
  Code2,
  Database,
  LineChart,
  Users,
} from "lucide-react";
import LearningJourneySection from "../features/home/LearningJourneySection.jsx";
import SchoolsSection from "../features/home/SchoolsSection";
import HomeHero from "../features/home/HomeHero.jsx";
import LearningOS from "../features/home/LearningOS.jsx";

const topics = [
  {
    icon: BookOpen,
    title: "Mathematics Library",
    text: "Build confidence in algebra, geometry, statistics, calculus, and problem-solving.",
  },
  {
    icon: Code2,
    title: "Computer Science Library",
    text: "Learn programming, Python, SQL, web development, and software engineering.",
  },
  {
    icon: LineChart,
    title: "Data Analytics Library",
    text: "Create dashboards, analyze data, and communicate meaningful insights.",
  },
  {
    icon: Database,
    title: "Data Engineering Library",
    text: "Explore Microsoft Fabric, databases, pipelines, and modern data platforms.",
  },
  {
    icon: Brain,
    title: "Artificial Intelligence Library",
    text: "Learn machine learning and create practical AI portfolio projects.",
  },
  {
    icon: Users,
    title: "Career Learning Paths",
    text: "Follow structured pathways designed for students and career changers.",
  },
];

export default function Home() {
  return (
    <main>
      <HomeHero />
      <section className="section py-20">
        
  <div className="mx-auto max-w-5xl text-center">
    <p className="text-sm font-bold uppercase tracking-[0.25em] text-blue-600">
      Our Vision
    </p>

    <h2 className="mt-4 text-4xl font-extrabold text-slate-900 md:text-5xl">
      Education Should Create Thinkers,
      <br />
      Not Just Test Takers.
    </h2>

   <p className="mx-auto mt-8 max-w-4xl text-lg leading-8 text-slate-600">
  At{" "}
  <span className="font-semibold text-slate-900">
    SkillBridge Academy
  </span>
  , we believe every learner has the potential to become a thinker,
  creator, researcher, innovator, and leader. Through our{" "}
  <span className="font-semibold text-blue-600">
    seven-level SkillBridge Learning OS
  </span>
  , students move beyond memorization toward curiosity, creativity,
  independent thinking, real-world problem solving, and meaningful
  creation.
</p>

    <div className="mt-10 flex flex-wrap justify-center gap-3">
   {[
  "Learn",
  "Practice",
  "Build",
  "Master",
  "Apply",
  "Create",
  "Lead",
].map((step) => (
        <span
          key={step}
          className="rounded-full bg-blue-50 px-5 py-2 text-sm font-semibold text-blue-700"
        >
          {step}
        </span>
      ))}
    </div>

    <blockquote className="mt-12 border-l-4 border-blue-600 pl-6 text-left">
      <p className="text-2xl font-bold italic text-slate-900">
        “Think Deeply. Create Boldly. Lead Wisely.”
      </p>
    </blockquote>
  </div>
</section>
       <LearningOS />
       <SchoolsSection />
       

      <LearningJourneySection />
    </main>
  );
}