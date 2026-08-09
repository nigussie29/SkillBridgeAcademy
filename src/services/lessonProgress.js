const STORAGE_KEY = "skillBridgeLessonProgress";

function readProgress() {
  try {
    const saved = JSON.parse(
      localStorage.getItem(STORAGE_KEY) || "{}"
    );

    return saved && typeof saved === "object"
      ? saved
      : {};
  } catch {
    return {};
  }
}

function writeProgress(progress) {
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(progress)
  );
}

function normalizeCourseId(courseId) {
  return String(courseId || "unknown-course")
    .trim()
    .toLowerCase();
}

function getModuleKey(moduleNumber) {
  return `module-${Number(moduleNumber)}`;
}

function getCourseProgress(
  progress,
  courseId
) {
  const normalizedCourseId =
    normalizeCourseId(courseId);

  const courseProgress =
    progress[normalizedCourseId];

  return courseProgress &&
    typeof courseProgress === "object"
    ? courseProgress
    : {};
}

export function getCompletedLessons(
  courseId,
  moduleNumber
) {
  const progress = readProgress();

  const courseProgress =
    getCourseProgress(
      progress,
      courseId
    );

  const moduleKey =
    getModuleKey(moduleNumber);

  const completedLessons =
    courseProgress[moduleKey];

  return Array.isArray(completedLessons)
    ? [...new Set(completedLessons)]
    : [];
}

export function isLessonCompleted(
  courseId,
  moduleNumber,
  lessonSlug
) {
  return getCompletedLessons(
    courseId,
    moduleNumber
  ).includes(lessonSlug);
}

export function markLessonComplete(
  courseId,
  moduleNumber,
  lessonSlug
) {
  const progress = readProgress();

  const normalizedCourseId =
    normalizeCourseId(courseId);

  const moduleKey =
    getModuleKey(moduleNumber);

  const courseProgress =
    getCourseProgress(
      progress,
      normalizedCourseId
    );

  const completedLessons = new Set(
    Array.isArray(courseProgress[moduleKey])
      ? courseProgress[moduleKey]
      : []
  );

  completedLessons.add(lessonSlug);

  courseProgress[moduleKey] = [
    ...completedLessons,
  ];

  progress[normalizedCourseId] =
    courseProgress;

  writeProgress(progress);

  return courseProgress[moduleKey];
}

export function markLessonIncomplete(
  courseId,
  moduleNumber,
  lessonSlug
) {
  const progress = readProgress();

  const normalizedCourseId =
    normalizeCourseId(courseId);

  const moduleKey =
    getModuleKey(moduleNumber);

  const courseProgress =
    getCourseProgress(
      progress,
      normalizedCourseId
    );

  const completedLessons =
    Array.isArray(courseProgress[moduleKey])
      ? courseProgress[moduleKey]
      : [];

  courseProgress[moduleKey] =
    completedLessons.filter(
      (slug) => slug !== lessonSlug
    );

  progress[normalizedCourseId] =
    courseProgress;

  writeProgress(progress);

  return courseProgress[moduleKey];
}

export function toggleLessonCompletion(
  courseId,
  moduleNumber,
  lessonSlug
) {
  if (
    isLessonCompleted(
      courseId,
      moduleNumber,
      lessonSlug
    )
  ) {
    return {
      completed: false,
      lessons: markLessonIncomplete(
        courseId,
        moduleNumber,
        lessonSlug
      ),
    };
  }

  return {
    completed: true,
    lessons: markLessonComplete(
      courseId,
      moduleNumber,
      lessonSlug
    ),
  };
}

export function clearCourseProgress(
  courseId
) {
  const progress = readProgress();

  const normalizedCourseId =
    normalizeCourseId(courseId);

  delete progress[normalizedCourseId];

  writeProgress(progress);
}

export function clearAllLessonProgress() {
  localStorage.removeItem(STORAGE_KEY);
}