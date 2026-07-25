

export const lessonCatalog = [
  ...algebra1Lessons,
  ...linearAlgebraLessons,
];

export function findLessonById(lessonId) {
  return lessonCatalog.find((lesson) => lesson.id === lessonId);
}