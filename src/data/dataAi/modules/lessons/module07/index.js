import lesson01 from "./lesson01.js";
import lesson02 from "./lesson02.js";
import lesson03 from "./lesson03.js";
import lesson04 from "./lesson04.js";
import lesson05 from "./lesson05.js";
import { advancedDataAiLessons } from "../advancedLessonCatalog.js";

const advancedModule07Lessons = advancedDataAiLessons.filter(
  (lesson) => lesson.moduleNumber === 7
);

const dataAiModule07Lessons = [
  lesson01,
  lesson02,
  lesson03,
  lesson04,
  lesson05,
  ...advancedModule07Lessons,
];

export default dataAiModule07Lessons;
