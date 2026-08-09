import probabilityModule01Lessons from "./module01/index.js";

const probabilityLessons = [
  ...probabilityModule01Lessons,
];

export function getProbabilityLessonsByModule(moduleNumber) {
  return probabilityLessons.filter(
    (lesson) =>
      Number(lesson.moduleNumber) === Number(moduleNumber)
  );
}

export function getProbabilityLesson(
  moduleNumber,
  lessonSlug
) {
  return (
    probabilityLessons.find(
      (lesson) =>
        Number(lesson.moduleNumber) ===
          Number(moduleNumber) &&
        lesson.slug === lessonSlug
    ) ?? null
  );
}

export function getProbabilityLessonBySlug(lessonSlug) {
  return (
    probabilityLessons.find(
      (lesson) => lesson.slug === lessonSlug
    ) ?? null
  );
}

export default probabilityLessons;