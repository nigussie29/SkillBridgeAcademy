import lesson01 from "./lesson01.js";
import lesson02 from "./lesson02.js";
import lesson03 from "./lesson03.js";

const module01Lessons = [
  lesson01,
  lesson02,
  lesson03,
];

export function getModule01LessonById(id) {
  return (
    module01Lessons.find(
      (lesson) => lesson.id === id
    ) || null
  );
}

export function getModule01LessonBySlug(slug) {
  return (
    module01Lessons.find(
      (lesson) => lesson.slug === slug
    ) || null
  );
}

export function getModule01LessonByNumber(
  lessonNumber
) {
  return (
    module01Lessons.find(
      (lesson) =>
        lesson.lessonNumber ===
        Number(lessonNumber)
    ) || null
  );
}

export default module01Lessons;