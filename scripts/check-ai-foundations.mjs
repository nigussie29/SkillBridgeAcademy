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
const lessonWords = ["One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Eleven", "Twelve"];
assert.ok(published.length <= lessonWords.length, "Extend integrity test lesson filename mapping before publishing additional lessons");

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
  const file = read(`src/pages/schools/AIFoundationsLesson${lessonWords[index]}.jsx`);
  assert.match(file, /MathematicalDeepDive/, `Lesson ${n}: worked mathematics`);
  assert.match(file, /CodingAndLumineryLab/, `Lesson ${n}: Python and Luminery`);
  assert.match(file, /RelatedLibraryResources/, `Lesson ${n}: library connection`);
  assert.match(file, /saveAiLessonProgress/, `Lesson ${n}: account save logic`);
  if (n === 1) assert.match(progress, /AI_LESSON_ID = "ai-foundations-m1-l1"/);
  else assert.ok(file.includes(`"${id}"`), `Lesson ${n}: unique Supabase progress ID`);
  console.log(`PASS: Lesson ${n} route, content, library bridge and save contract`);
}
// Lesson 11 regression guard: static source contracts only, not a browser or DB test.
const lesson11 = read("src/pages/schools/AIFoundationsLessonEleven.jsx");
const quizStart = lesson11.indexOf("const questions=[");
const quizEnd = lesson11.indexOf("];", quizStart);
assert.ok(quizStart >= 0 && quizEnd > quizStart, "Lesson 11 quiz definitions exist");
const quizDefinitions = lesson11.slice(quizStart, quizEnd);
const answerIndices = [...quizDefinitions.matchAll(/answer:(\d+)/g)].map((match) => Number(match[1]));
assert.equal(answerIndices.length, 4, "Lesson 11 retains four assessment questions");
assert.ok(new Set(answerIndices).size >= 2, "Lesson 11 answer keys are not all in one position");
assert.match(lesson11, /id="connection-lab"/, "Lesson 11 Connection Lab exists");
assert.match(lesson11, /href="#connection-lab"/, "Lesson 11 navigation reaches Connection Lab");
assert.match(lesson11, /id="graph"/, "Lesson 11 graph exists");
assert.match(lesson11, /setK\(Number\(e\.target\.value\)\)/, "Lesson 11 graph selection remains interactive");
assert.match(lesson11, /getAiLessonProgress\(user\.id,"ai-foundations-m1-l11"\)/, "Lesson 11 restores its own progress");
assert.match(lesson11, /saveAiLessonProgress\(user\.id,score,questions\.length,"ai-foundations-m1-l11"\)/, "Lesson 11 saves its own progress");
console.log("PASS: Lesson 11 quiz, navigation, graph and progress source contracts");

console.log("PASS: Course metadata, legacy progress API, and migration presence");
console.log("NOTE: Source checks only. They do not verify Supabase migration execution, live quiz saves, or production browser behavior.");
