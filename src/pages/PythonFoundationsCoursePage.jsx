import CourseTemplate from "../components/course/CourseTemplate";
import { pythonFoundationsCourse } from "../data/courses/pythonFoundationsCourse";

export default function PythonFoundationsCoursePage() {
  return <CourseTemplate course={pythonFoundationsCourse} />;
}