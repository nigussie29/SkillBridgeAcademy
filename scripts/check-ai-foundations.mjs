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
assert.match(lesson11, /answers\[i\]===q\.answer\?"Correct\. ":"Not quite\. "/, "Lesson 11 per-question correctness feedback remains visible");
assert.match(lesson11, /disabled=\{!checked\|\|saveStatus==="saving"\|\|saveStatus==="saved"\}/, "Lesson 11 cannot save before checking answers");

// Guard the full assessment state transition, not just the button label.
// Editing an answer or retrying must invalidate the previous check and save state.
assert.match(lesson11, /const allAnswered=questions\.every\(\(_,i\)=>answers\[i\]!==undefined\)/, "Lesson 11 requires an answer to every question");
assert.match(lesson11, /const score=questions\.reduce\(\(a,q,i\)=>a\+\(answers\[i\]===q\.answer\?1:0\),0\)/, "Lesson 11 score uses the answer keys");
assert.match(lesson11, /disabled=\{!allAnswered\} onClick=\{\(\)=>setChecked\(true\)\}/, "Lesson 11 checks only fully answered quizzes");
assert.match(lesson11, /setAnswers\(old=>\(\{\.\.\.old,\[i\]:j\}\)\);setChecked\(false\);setSaveStatus\("idle"\)/, "Changing an answer invalidates prior check and save state");
assert.match(lesson11, /setAnswers\(\{\}\);setChecked\(false\);setSaveStatus\("idle"\)/, "Retry clears answers and invalidates prior check and save state");
assert.match(lesson11, /if\(!user\?\.id\|\|!checked\|\|!allAnswered\)return;/, "Save handler rejects unsigned-in or unchecked/incomplete attempts");
assert.match(lesson11, /\{checked&&<p role="status"[^>]*>Score:/, "Score feedback appears only after checking");
assert.match(lesson11, /\{checked&&<p role="status"[^>]*answers\[i\]===q\.answer/, "Per-question feedback appears only after checking");

assert.match(lesson11, /id="connection-lab"/, "Lesson 11 Connection Lab exists");
assert.match(lesson11, /href="#connection-lab"/, "Lesson 11 navigation reaches Connection Lab");
assert.match(lesson11, /id="graph"/, "Lesson 11 graph exists");
assert.match(lesson11, /setK\(Number\(e\.target\.value\)\)/, "Lesson 11 graph selection remains interactive");
assert.match(lesson11, /getAiLessonProgress\(user\.id,"ai-foundations-m1-l11"\)/, "Lesson 11 restores its own progress");
assert.match(lesson11, /saveAiLessonProgress\(user\.id,score,questions\.length,"ai-foundations-m1-l11"\)/, "Lesson 11 saves its own progress");
console.log("PASS: Lesson 11 quiz, navigation, graph and progress source contracts");

// Lesson 12 is intentionally unpublished until route, database and browser gates pass.
const lesson12 = read("src/pages/schools/AIFoundationsLessonTwelve.jsx");
assert.ok(!published.some((lesson) => lesson.path.endsWith("/lesson-12")), "Lesson 12 must remain unpublished");
assert.ok(!app.includes(`path="${AI_FOUNDATIONS_BASE}/module-1/lesson-12"`), "Lesson 12 route must not be enabled prematurely");
assert.match(lesson12, /const folds = \[0, 1, 2, 3, 4\]/, "Lesson 12 has five validation folds");
assert.match(lesson12, /aria-pressed=\{fold === i\}/, "Lesson 12 fold selector communicates selection");
assert.match(lesson12, /onClick=\{\(\) => setFold\(i\)\}/, "Lesson 12 fold selection is interactive");
assert.match(lesson12, /Separate final test partition/, "Lesson 12 distinguishes the held-out test set");
assert.match(lesson12, /These five scores are an arithmetic teaching example/, "Lesson 12 does not misrepresent illustrative scores");
assert.match(lesson12, /StratifiedKFold\(n_splits=5, shuffle=True, random_state=42\)/, "Lesson 12 Python uses stratified cross-validation");
assert.match(lesson12, /make_pipeline\(StandardScaler\(\), KNeighborsClassifier\(n_neighbors=k\)\)/, "Lesson 12 fits scaling within CV folds");
assert.match(lesson12, /const complete = questions\.every\(\(_, i\) => answers\[i\] !== undefined\)/, "Lesson 12 checks quiz completeness");
assert.match(lesson12, /disabled=\{!complete\} onClick=\{\(\) => setChecked\(true\)\}/, "Lesson 12 blocks incomplete quiz checks");
assert.match(lesson12, /setChecked\(false\)/, "Lesson 12 invalidates checked feedback on answer changes");
assert.match(lesson12, /This unpublished draft does not save account progress/, "Lesson 12 labels progress as unsaved");
assert.doesNotMatch(lesson12, /saveAiLessonProgress/, "Lesson 12 must not imply account saving before migration verification");
assert.match(lesson12, /CodingAndLumineryLab/, "Lesson 12 includes Python and Luminery practice");
// Lesson 12 must preserve the complete four-question assessment contract.
const lesson12QuizStart = lesson12.indexOf("const questions = [");
const lesson12QuizEnd = lesson12.indexOf("];", lesson12QuizStart);
assert.ok(lesson12QuizStart >= 0 && lesson12QuizEnd > lesson12QuizStart, "Lesson 12 quiz definitions exist");
const lesson12Quiz = lesson12.slice(lesson12QuizStart, lesson12QuizEnd);
const lesson12AnswerKeys = [...lesson12Quiz.matchAll(/correct: (\d+)/g)].map((match) => Number(match[1]));
assert.equal(lesson12AnswerKeys.length, 4, "Lesson 12 retains four assessment questions");
assert.ok(new Set(lesson12AnswerKeys).size >= 2, "Lesson 12 answer keys use varied positions");
assert.match(lesson12, /answers\[i\] === q\.correct \? "Correct\. " : "Review\. "/, "Lesson 12 per-question correctness feedback is preserved");
assert.match(lesson12, /setAnswers\(old => \(\{ \.\.\.old, \[i\]: j \}\)\); setChecked\(false\)/, "Lesson 12 changing an answer invalidates previous feedback");
assert.match(lesson12, /setAnswers\(\{\}\); setChecked\(false\)/, "Lesson 12 retry clears answers and checked state");
assert.match(lesson12, /train_test_split\(/, "Lesson 12 Python reserves a held-out test partition");
assert.match(lesson12, /test_size=0\.2, random_state=42, stratify=y/, "Lesson 12 Python uses a reproducible stratified split");
assert.match(lesson12, /cross_val_score\(pipeline, X_train, y_train, cv=cv\)/, "Lesson 12 selects k from training-only cross-validation");
assert.match(lesson12, /model\.fit\(X_train, y_train\)/, "Lesson 12 final model fits on training data");
assert.match(lesson12, /model\.score\(X_test, y_test\)/, "Lesson 12 evaluates the held-out test partition");
console.log("PASS: Unpublished Lesson 12 quiz and train/test separation source contracts");

console.log("PASS: Unpublished Lesson 12 fold, Python, quiz, and publication guards");

console.log("PASS: Course metadata, legacy progress API, and migration presence");
console.log("NOTE: Source checks only. They do not verify Supabase migration execution, live quiz saves, or production browser behavior.");
