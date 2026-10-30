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

## Foundational purpose — Mathematics × AI × Robotics (UCS v1.2)
SkillBridge Learning OS exists to deepen a person's knowledge by revealing connections among mathematical reasoning, coding, AI, sensors, physical systems, and real-world evidence. It must not become a disconnected catalog of courses or merely a quiz-and-certificate site.

**Core learning cycle:** Observe a meaningful problem → Model it mathematically → Visualize and explain → Implement it in code → Extend it using AI when relevant → Test it in simulation or safe robotics → Analyze errors and limitations → Refine → Communicate evidence. No student should be asked to build a physical system before appropriate preparation and safety review.

### Required cross-disciplinary bridge
Each STEM lesson must contain an explicit **Connection Lab** describing (a) the underlying mathematics, (b) the computation or code model, (c) an AI connection where genuinely relevant, (d) a robotics or physical-world connection where genuinely relevant, (e) a mini-experiment or simulation, and (f) questions requiring transfer and reflection. Foundational topics may use conceptual bridges rather than full hardware builds. Do not represent ordinary deterministic thresholds or algorithms as AI.

**Model example: obstacle avoidance.** A distance sensor measures an estimated distance d in centimeters. A deterministic rule might be "stop if d < 20 cm"; this is not machine learning. Students can explore measurement uncertainty, compare repeated readings, derive a safe threshold, and then consider how a learned classifier could combine multiple sensor features. Use simulation or disconnected motors first. Require explicit attention to sensors' blind spots, hardware constraints, and safe operating conditions.

### Notes and student experience
Learning materials should be rigorous, inviting, and accessible: clear narratives, vocabulary and definitions, equations with units and assumptions, multiple representations (words, tables, graphs, formulas, code, physical systems), detailed worked solutions, animated/interactive manipulatives when they teach something, inquiry prompts, differentiated challenges, misconceptions, and authentic projects. Use consistent headers, card hierarchy, typography and mobile accessibility across schools. Interactive content must work with keyboard controls, meaningful labels and reduced-motion preferences.

### Capability evidence
Assess more than answer correctness. For the selected concept, ask learners to: (1) explain it, (2) solve it or model it, (3) implement or simulate it, (4) test predictions, (5) analyze failure or error, and (6) communicate the limitations of their work. Preserve separate statuses for practice scores, saved quiz completion, project evidence, and reviewed mastery. Luminery AI should provide hints and questions that build independent thinking; Pyravanta capability claims require evidence and meaningful human judgment.

### Incremental delivery and acceptance
Apply these requirements to **AI Foundations Lesson 1 first**, verify its existing quiz and Supabase progress have not regressed, and only then reuse the Connection Lab in other subjects. Do not mark any future lab as working until the user validates it on the live website. Future courses should be built from the shared standard instead of copying bespoke page layouts.

## Coding + Luminery in every lesson (UCS v1.3)

**Coding is a core SkillBridge practice, not an optional marketing label.** Every STEM lesson must include a relevant, age-appropriate coding or computational-thinking activity that directly models the lesson concept. For beginning learners, this may be pseudocode, a guided trace, a block-based program, or a visual simulator. For advanced learners, it may involve executable Python, JavaScript, data analysis, machine-learning training, or robotics code. Always explain inputs, outputs, variables, mathematical assumptions, sample runs, debugging questions, and a small extension task. Never describe a displayed code sample as executed or automatically assessed unless an actual runtime or grader exists. Do not require physical hardware for ordinary practice.

**Luminery belongs in every lesson as a learning-mentor experience.** Each lesson must provide an explicit Luminery guidance section with a conceptual question, progressively revealed hints, a prompt connecting mathematics to code and real-world application, a reflection question, and guidance on how to verify evidence. Keep students thinking rather than giving immediate answers. Luminery guidance must accurately distinguish authored/static prompts from a genuine connected AI mentor; do not fabricate personalization, live conversations, grading, or account analysis. Respect accessibility and privacy.

### Minimum acceptance checks
- The coding task is directly grounded in the mathematical or logical concept and includes a reproducible expected outcome.
- Luminery supports inquiry, mathematical explanation, debugging, transfer, and student independence.
- Lesson design continues to follow the Algebra I visual reference and existing academic structure.
- Students can use keyboard controls, readable code blocks, labels, and contrast-appropriate hint controls.
- Shared component: `src/components/learning/CodingAndLumineryLab.jsx`. Roll it out gradually; do not automatically mark other courses compliant.
- Existing assessment and Supabase progress are unchanged by lesson coding/mentor components. Retest production after the implementation.

## Modern student experience — responsive design baseline (UCS v1.4)
A coherent, modern 21st-century academic experience is required across every page, not only the homepage. Keep a consistent visual hierarchy (clear course title, context, learning outcomes, attractive subject accents, readable notes, lab cards, guided practice, assessment and evidence). Students should be able to move between deep notes, interactive mathematics, coding, Luminery guidance and mastery checks without losing their place.

- Use shared styling and accessible focus states from `src/styles/index.css`; extend the existing design system rather than replacing working subject pages with unrelated templates.
- Prioritize mobile-first layouts, keyboard use, useful contrast, short scannable sections, persistent information architecture and reduced-motion support.
- Add meaningful interactivity: runnable code only when an actual safe runtime exists; simulations and quizzes must give real feedback and retain accurate progress semantics.
- Keep reading comfortable: responsive typography, adequate line spacing, consistent cards, visible glossary and formulas, and in-page activity navigation for long lessons.
- Never equate a visually impressive interface with academic depth. Every polished lesson must retain detailed mathematical reasoning, interdisciplinary transfer, coding and Luminery mentorship.
- Modernization must be incremental: adapt one real lesson, verify production and assessment persistence, then generalize through reusable components. Existing pages are not implicitly redesigned simply because shared tokens were introduced.

## Python-first coding policy (UCS v1.5)
**Python is the mandatory instructional programming language for SkillBridge coding labs across Mathematics, Artificial Intelligence, Robotics, Data Science, and related STEM lessons.** Each coding lab should use valid, age-appropriate Python 3 with explained variables, links to the underlying mathematics, expected output, debugging questions, and extensions. Use Python libraries where relevant (e.g., math, statistics, NumPy, pandas, scikit-learn, Matplotlib, and safe robotics libraries) only when the environment supports them. Label pseudocode explicitly and follow it with Python whenever appropriate. Do not substitute JavaScript code for student Python instruction.

**Implementation distinction:** The website itself can continue using React, JavaScript, Tailwind and Supabase for its frontend and infrastructure. This policy governs the language learners are taught, not the technology required to render the learning interface. Interactive Python execution must only be advertised after a working, sandboxed Python runtime and grading setup has been implemented and tested; otherwise provide accurate Python examples and expected output.

**Migration:** Keep previously validated lessons intact. Audit and update student-facing coding labs gradually to Python before claiming academy-wide compliance. Protect existing progress data and run regression tests on each migrated lesson.
