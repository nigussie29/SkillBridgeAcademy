import module01Lessons from "./module01/index.js";
import module03Lessons from "./module03/index.js";

const algebraTwoLessons = [
  ...module01Lessons,
  ...module03Lessons,
];

export function getAlgebraTwoLessonById(id) {
  return (
    algebraTwoLessons.find(
      (lesson) => lesson.id === id
    ) || null
  );
}

export function getAlgebraTwoLessonBySlug(slug) {
  return (
    algebraTwoLessons.find(
      (lesson) => lesson.slug === slug
    ) || null
  );
}

export function getAlgebraTwoLessonByNumber(
  moduleNumber,
  lessonNumber
) {
  return (
    algebraTwoLessons.find(
      (lesson) =>
        lesson.moduleNumber === Number(moduleNumber) &&
        lesson.lessonNumber === Number(lessonNumber)
    ) || null
  );
}

export function getAlgebraTwoLessonsByModule(
  moduleNumber
) {
  return algebraTwoLessons.filter(
    (lesson) =>
      lesson.moduleNumber === Number(moduleNumber)
  );
}

export default algebraTwoLessons;
