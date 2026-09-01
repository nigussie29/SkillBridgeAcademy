import lesson01 from "./lesson01.js";
import lesson02 from "./lesson02.js";
import lesson03 from "./lesson03.js";
import lesson04 from "./lesson04.js";
import lesson05 from "./lesson05.js";
import lesson06 from "./lesson06.js";
import lesson07 from "./lesson07.js";
import lesson08 from "./lesson08.js";

const module04Lessons = [
  lesson01,
  lesson02,
  lesson03,
  lesson04,
  lesson05,
  lesson06,
  lesson07,
  lesson08,
];

export function getModule04LessonById(id) {
  return (
    module04Lessons.find(
      (lesson) => lesson.id === id
    ) || null
  );
}

export function getModule04LessonBySlug(slug) {
  return (
    module04Lessons.find(
      (lesson) => lesson.slug === slug
    ) || null
  );
}

export function getModule04LessonByNumber(lessonNumber) {
  return (
    module04Lessons.find(
      (lesson) =>
        lesson.lessonNumber === Number(lessonNumber)
    ) || null
  );
}

export default module04Lessons;