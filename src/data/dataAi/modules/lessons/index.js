import dataAiModule01Lessons from "./module01/index.js";

const dataAiLessons = [...dataAiModule01Lessons];

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
