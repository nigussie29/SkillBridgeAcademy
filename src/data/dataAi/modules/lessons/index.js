import dataAiModule01Lessons from "./module01/index.js";
import dataAiModule02Lessons from "./module02/index.js";
import dataAiModule03Lessons from "./module03/index.js";
import dataAiModule04Lessons from "./module04/index.js";
import dataAiModule05Lessons from "./module05/index.js";
import dataAiModule06Lessons from "./module06/index.js";
import dataAiModule07Lessons from "./module07/index.js";
import dataAiModule08Lessons from "./module08/index.js";
import dataAiModule09Lessons from "./module09/index.js";
import dataAiModule10Lessons from "./module10/index.js";

const dataAiLessons = [
  ...dataAiModule01Lessons,
  ...dataAiModule02Lessons,
  ...dataAiModule03Lessons,
  ...dataAiModule04Lessons,
  ...dataAiModule05Lessons,
  ...dataAiModule06Lessons,
  ...dataAiModule07Lessons,
  ...dataAiModule08Lessons,
  ...dataAiModule09Lessons,
  ...dataAiModule10Lessons,
];

export function getDataAiLessonsByModule(moduleNumber) {
  return dataAiLessons.filter(
    (lesson) => Number(lesson.moduleNumber) === Number(moduleNumber)
  );
}

export function getDataAiLesson(moduleNumber, lessonSlug) {
  return (
    dataAiLessons.find(
      (lesson) =>
        Number(lesson.moduleNumber) === Number(moduleNumber) &&
        lesson.slug === lessonSlug
    ) ?? null
  );
}

export default dataAiLessons;
