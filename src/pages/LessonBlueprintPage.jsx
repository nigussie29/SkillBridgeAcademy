import InstructorWorkspace from "../components/instructor/InstructorWorkspace";
import LessonBlueprintBuilder from "../components/instructor/LessonBlueprintBuilder";

export default function LessonBlueprintPage() {
  return (
    <InstructorWorkspace title="Lesson Blueprint">
      <LessonBlueprintBuilder />
    </InstructorWorkspace>
  );
}