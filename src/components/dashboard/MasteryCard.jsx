import LearningInsightsPanel from "../mastery/MasteryPanel";

export default function MasteryCard({
  learningState,
}) {
  return (
    <section>
      <LearningInsightsPanel
        learningState={learningState}
      />
    </section>
  );
}