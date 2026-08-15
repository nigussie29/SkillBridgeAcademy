import module01Lessons from "./module01/index.js";
import module02Lessons from "./module02/index.js";

const algebraOneLessons = [
  ...module01Lessons,
  ...module02Lessons,
];

export function getAlgebraOneLessonById(id) {
  return algebraOneLessons.find((lesson) => lesson.id === id) || null;
}

export function getAlgebraOneLessonBySlug(slug) {
  return algebraOneLessons.find((lesson) => lesson.slug === slug) || null;
}

export function getAlgebraOneLessonByNumber(
  moduleNumber,
  lessonNumber
) {
  return (
    algebraOneLessons.find(
      (lesson) =>
        lesson.moduleNumber === Number(moduleNumber) &&
        lesson.lessonNumber === Number(lessonNumber)
    ) || null
  );
}

export function getAlgebraOneLessonsByModule(moduleNumber) {
  return algebraOneLessons.filter(
    (lesson) =>
      lesson.moduleNumber === Number(moduleNumber)
  );
}

export default algebraOneLessons;