import lesson01 from "./lesson01.js";
import lesson02 from "./lesson02.js";
import lesson03 from "./lesson03.js";
import lesson04 from "./lesson04.js";
import lesson05 from "./lesson05.js";
import lesson06 from "./lesson06.js";
import lesson07 from "./lesson07.js";
import lesson08 from "./lesson08.js";

const module03Lessons = [
  lesson01,
  lesson02,
  lesson03,
  lesson04,
  lesson05,
  lesson06,
  lesson07,
  lesson08,
];

export function getModule03LessonById(id) {
  return (
    module03Lessons.find(
      (lesson) => lesson.id === id
    ) || null
  );
}

export function getModule03LessonBySlug(slug) {
  return (
    module03Lessons.find(
      (lesson) => lesson.slug === slug
    ) || null
  );
}

export function getModule03LessonByNumber(lessonNumber) {
  return (
    module03Lessons.find(
      (lesson) =>
        lesson.lessonNumber === Number(lessonNumber)
    ) || null
  );
}

export default module03Lessons;