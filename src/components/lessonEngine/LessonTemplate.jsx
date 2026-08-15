import LessonHero from "./LessonHero";
import LearningObjectives from "./LearningObjectives";
import WhyItMatters from "./WhyItMatters";
import LearnSection from "./LearnSection";
import PracticeSection from "./PracticeSection";
import BuildSection from "./BuildSection";
import MasterSection from "./MasterSection";
import LumineryCoach from "./LumineryCoach";
import PortfolioEvidence from "./PortfolioEvidence";
import CareerConnection from "./CareerConnection";
import ResearchExtension from "./ResearchExtension";
import AppliedMathematicsConnection from "./AppliedMathematicsConnection";
import ApplySection from "./ApplySection";
import NextLesson from "./NextLesson";
import ReflectionSection from "./ReflectionSection";
import VocabularySection from "./VocabularySection";
import SummarySection from "./SummarySection";
import WarmUpSection from "./WarmUpSection";
import LessonNavigation from "./LessonNavigation";
export default function LessonTemplate({ lesson }) {
  if (!lesson) {
    return (
      <main className="min-h-screen bg-slate-50 px-6 py-10">
        <div className="mx-auto max-w-7xl">
          <section className="rounded-3xl bg-white p-8 shadow-sm">
            <h1 className="text-3xl font-extrabold text-slate-900">
              Lesson unavailable
            </h1>

            <p className="mt-3 text-slate-600">
              The requested lesson could not be loaded.
            </p>
          </section>
        </div>
      </main>
    );
  }

  return (
   <main className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/50 to-indigo-50/70 px-6 py-10">
      <div className="mx-auto max-w-7xl">
        <LessonHero lesson={lesson} />

     {lesson.warmUp && (
  <WarmUpSection warmUp={lesson.warmUp} />
)}

          {lesson.objectives?.length > 0 && (
          <LearningObjectives objectives={lesson.objectives} />
        )}

        {lesson.vocabulary?.length > 0 && (
  <VocabularySection vocabulary={lesson.vocabulary} />
)}

      
        {lesson.whyItMatters && (
          <WhyItMatters text={lesson.whyItMatters} />
        )}

        {lesson.learn && (
          <LearnSection learn={lesson.learn} />
        )}

        {lesson.practice?.length > 0 && (
          <PracticeSection practice={lesson.practice} />
        )}

        {lesson.build && (
          <BuildSection build={lesson.build} />
        )}

       {lesson.master && (
    <MasterSection
        lesson={lesson}
    />
)}
        {lesson.luminery && (
          <LumineryCoach
            message={lesson.luminery.message}
            recommendation={lesson.luminery.recommendation}
            confidence={lesson.luminery.confidence}
          />
        )}

        {lesson.portfolioEvidence && (
          <PortfolioEvidence
            evidence={lesson.portfolioEvidence}
          />
        )}

        {lesson.careerConnection && (
          <CareerConnection
            careers={lesson.careerConnection}
          />
        )}

        {lesson.researchExtension && (
          <ResearchExtension
            research={lesson.researchExtension}
          />
        )}

        {lesson.appliedMathematics && (
          <AppliedMathematicsConnection
            math={lesson.appliedMathematics}
          />
        )}

        {lesson.apply && (
          <ApplySection apply={lesson.apply} />
        )}

        {lesson.nextLesson && (
          <NextLesson lesson={lesson.nextLesson.title} />
        )}
        {lesson.summary && (
  <SummarySection summary={lesson.summary} />
)}
{lesson.reflection && (
  <ReflectionSection reflection={lesson.reflection} />
)}
<LessonNavigation
  previousLesson={lesson.previousLesson}
  nextLesson={lesson.nextLesson}
/>
      </div>
    </main>
  );
}