import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";
import { aiFoundationsCourse, AI_FOUNDATIONS_BASE } from "../src/data/courses/aiFoundationsCourse.js";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const read = (path) => readFileSync(resolve(root, path), "utf8");
const app = read("src/App.jsx");
const progress = read("src/services/aiLessonProgress.js");
const sqlOriginal = read("supabase/migrations/20261029_ai_lesson_progress.sql");
const sqlExpanded = read("supabase/migrations/20261030_ai_lessons_expand.sql");
const libraryResources = read("src/components/learning/RelatedLibraryResources.jsx");
const seenIds = new Set();
const published = aiFoundationsCourse.lessons.filter((lesson) => lesson.status === "available");

assert.equal(aiFoundationsCourse.certificateAvailable, false, "No unverified course certificates");
assert.ok(published.length >= 3, "AI Foundations has at least three published lessons");
assert.equal(aiFoundationsCourse.modules[0].lessonCount, aiFoundationsCourse.modules[0].lessons.length, "Module lesson count matches its links");
assert.equal(aiFoundationsCourse.modules[0].lessonCount, published.length, "Module 1 lesson count matches the published list");
assert.match(progress, /getAiLessonProgress\(userId, lessonId = AI_LESSON_ID\)/, "Legacy Lesson 1 progress read preserved");
assert.match(progress, /saveAiLessonProgress\(userId, score, totalQuestions, lessonId = AI_LESSON_ID\)/, "Legacy Lesson 1 progress save preserved");
assert.match(sqlOriginal, /row level security/i, "Progress database protects rows");
assert.match(sqlExpanded, /lesson_identifier_check/, "Multi-lesson migration updates the ID restriction");
assert.match(libraryResources, /\/library\/data-ai/, "Shared library bridge points to Data & AI");

for (const [index, lesson] of published.entries()) {
  const n = index + 1;
  const id = `ai-foundations-m1-l${n}`;
  assert.ok(!seenIds.has(id), `Duplicate lesson ID: ${id}`);
  seenIds.add(id);
  assert.equal(lesson.path, `${AI_FOUNDATIONS_BASE}/module-1/lesson-${n}`, `Lesson ${n} route must be sequential`);
  assert.ok(app.includes(`path="${lesson.path}"`), `App route for Lesson ${n} is registered`);
  const file = read(`src/pages/schools/AIFoundationsLesson${["One","Two","Three"][index]}.jsx`);
  assert.match(file, /MathematicalDeepDive/, `Lesson ${n}: worked mathematics`);
  assert.match(file, /CodingAndLumineryLab/, `Lesson ${n}: Python and Luminery`);
  assert.match(file, /RelatedLibraryResources/, `Lesson ${n}: library connection`);
  assert.match(file, /saveAiLessonProgress/, `Lesson ${n}: account save logic`);
  if (n === 1) assert.match(progress, /AI_LESSON_ID = "ai-foundations-m1-l1"/);
  else assert.ok(file.includes(`"${id}"`), `Lesson ${n}: unique Supabase progress ID`);
  console.log(`PASS: Lesson ${n} route, content, library bridge and save contract`);
}
console.log("PASS: Course metadata, legacy progress API, and migration presence");
console.log("NOTE: Source checks only. They do not verify Supabase migration execution, live quiz saves, or production browser behavior.");
