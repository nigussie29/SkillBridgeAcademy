import module01Lessons from "./module01/index.js";
import module02Lessons from "./module02/index.js";
import module03Lessons from "./module03/index.js";
import module04Lessons from "./module04/index.js";

const algebraOneLessons = [
  ...module01Lessons,
  ...module02Lessons,
  ...module03Lessons,
  ...module04Lessons,
];

export function getAlgebraOneLessonById(id) {
  return (
    algebraOneLessons.find(
      (lesson) => lesson.id === id
    ) || null
  );
}

export function getAlgebraOneLessonBySlug(slug) {
  return (
    algebraOneLessons.find(
      (lesson) => lesson.slug === slug
    ) || null
  );
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