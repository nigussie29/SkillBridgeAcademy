# KingsNigus Academy — Universal Course Standard (UCS v1)

## Binding design principle
Every academic school uses a consistent student experience: School → Course → Module → Lesson → Assessment → Evidence → Progress. This applies to Mathematics, Computer Science, Artificial Intelligence, Data Science, Engineering, and Research.

**We start, we finish, then we move.** Existing functioning mathematics, Linear Algebra, Algebra I, Python, and Data & AI implementations must not be removed or rewritten wholesale to achieve consistency.

## Shared course contract
Each course defines a stable id and slug, title, school, level, prerequisites, objectives, estimated duration, modules, assessments, portfolio outcomes, and publication status. Each module defines ordered lessons and mastery criteria. Each lesson has a stable id, module id, title, duration, learning outcomes, essential question, concept explanation, worked example, guided practice, independent practice, real-world application, optional interactive or coding lab, formative assessment, reflection, and evidence task.

## Canonical learner flow
Learn → Explore → Practice → Apply → Build → Assess → Reflect → Record Evidence.
This flow implements SkillBridge Learning OS stages Learn → Practice → Build → Master → Apply → Create → Lead without falsely treating one lesson as full mastery.

## Shared user interface
Use the existing course template and shared LessonViewer wherever compatible. Consistently use a school overview, course hero, module list, lesson reader, progress indicator, previous/back/next controls, vocabulary, worked examples, practice, assessment feedback, accessible keyboard and mobile behavior, and clear completion status. Subject-specific diagrams, graphing, simulators, notebooks, robotics, or AI activities are allowed within shared slots.

## Assessment & progress
Use consistent completion criteria, retries, feedback, and clear distinction between an in-page attempt, browser-local progress, account-backed saved progress, and verified mastery. Require authentication for cross-device account progress, enforce row-level security, and confirm database migration before promising persistence. Do not mark a lesson complete solely for viewing it. A quiz score alone does not prove mastery of a whole course. Certificates and credentials require verified course-level requirements.

## Design tokens and accessibility
Reuse the project's Tailwind design tokens, responsive grids, typography scale, rounded cards, navigation components, and accessible focus/contrast patterns. Preserve a recognizable academy brand; allow subject accent colors without creating a different information architecture.

## Implementation sequence
1. Audit the working shared CourseTemplate, LessonViewer, and progress services.
2. Define reusable school/course/module/lesson data contracts.
3. Bring AI Foundations Lesson 1 into the shared architecture, retaining existing content and quiz behavior.
4. Verify quiz scoring, authenticated progress, RLS, logout/login persistence, dashboard, mobile, and keyboard access.
5. Only then migrate other courses incrementally, one complete and tested course at a time.

## Definition of done
A course is done only when its links, lessons, navigation, assessments, evidence tasks, save/restore flow (where enabled), responsive behavior, accessibility, and production deployment have been tested. Existing courses should be adapted without regressions.

## Required rich academic notes for every lesson (UCS v1.1)
Every lesson must teach its topic in sufficient depth to support independent work, not just present a brief summary. Each published lesson should contain: (1) an essential question and key concepts, (2) foundational definitions and notation, (3) concept explanations and reasoning, (4) relevant mathematics with variables and units explained, (5) at least one fully worked example showing intermediate steps and verification, (6) guided and independent practice with accessible answer explanations, (7) a real-world application or subject-specific investigation, (8) common mistakes and reflection, and (9) meaningful evidence or assessment.

**Discipline-appropriate mathematics:** In Mathematics and AI, quantitative explanations should be thorough (algebra, functions, statistics, vectors, calculus, or other appropriate content). Computer Science should include mathematical reasoning about algorithms, complexity, logic, data, or numerical computing when applicable. Robotics and Engineering should include measurements, units, models, and calculations. Research should explain quantitative methodology where relevant, or rigorous logical/qualitative reasoning when mathematics is not appropriate. Do not force irrelevant equations into humanities-style or qualitative lessons.

Use the reusable `src/components/learning/MathematicalDeepDive.jsx` for step-by-step worked mathematics and revealable practice solutions when appropriate. This component is content-only: it must not automatically mark lessons complete, overwrite quiz records, or claim verified mastery. Existing working courses should be enriched incrementally, with individual production testing before bulk rollout.
