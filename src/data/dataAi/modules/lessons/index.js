import dataAiModule01Lessons from "./module01/index.js";
import dataAiModule02Lessons from "./module02/index.js";
import dataAiModule03Lessons from "./module03/index.js";

const dataAiLessons = [
  ...dataAiModule01Lessons,
  ...dataAiModule02Lessons,
  ...dataAiModule03Lessons,
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
