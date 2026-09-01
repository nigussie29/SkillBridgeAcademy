import module01Lessons from "./module01/index.js";

const algebraTwoLessons = [
  ...module01Lessons,
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