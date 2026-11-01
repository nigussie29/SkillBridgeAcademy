export const AI_FOUNDATIONS_BASE = "/schools/artificial-intelligence/ai-foundations";
export const AI_FOUNDATIONS_LESSON_ONE = `${AI_FOUNDATIONS_BASE}/module-1/lesson-1`;
export const AI_FOUNDATIONS_LESSON_TWO = `${AI_FOUNDATIONS_BASE}/module-1/lesson-2`;
export const AI_FOUNDATIONS_LESSON_THREE = `${AI_FOUNDATIONS_BASE}/module-1/lesson-3`;
export const AI_FOUNDATIONS_LESSON_FOUR = `${AI_FOUNDATIONS_BASE}/module-1/lesson-4`;
export const AI_FOUNDATIONS_LESSON_FIVE = `${AI_FOUNDATIONS_BASE}/module-1/lesson-5`;
export const AI_FOUNDATIONS_LESSON_SIX = `${AI_FOUNDATIONS_BASE}/module-1/lesson-6`;
export const AI_FOUNDATIONS_LESSON_SEVEN = `${AI_FOUNDATIONS_BASE}/module-1/lesson-7`;
export const AI_FOUNDATIONS_LESSON_EIGHT = `${AI_FOUNDATIONS_BASE}/module-1/lesson-8`;
export const AI_FOUNDATIONS_LESSON_NINE = `${AI_FOUNDATIONS_BASE}/module-1/lesson-9`;

// Course metadata follows the existing shared CourseTemplate contract.
// Module 1 has nine lessons available for study; the remaining curriculum is planned.
export const aiFoundationsCourse = {
  id: "ai-foundations",
  slug: "ai-foundations",
  school: "artificial-intelligence",
  title: "AI Foundations",
  category: "School of Artificial Intelligence",
  description: "Develop the concepts, reasoning, and responsible-use habits needed to understand artificial intelligence and begin building useful AI applications.",
  level: "Beginner",
  duration: "7 planned modules",
  prerequisites: ["Basic computer literacy"],
  certificateAvailable: false,
  progress: 0, // Do not confuse a lesson quiz result with overall course completion.
  backPath: "/schools/artificial-intelligence",
  backLabel: "Back to School of Artificial Intelligence",
  startPath: AI_FOUNDATIONS_LESSON_ONE,
  outcomes: [
    "Explain what AI is and distinguish rules, machine learning, and generative AI",
    "Evaluate claims and limitations of common AI applications",
    "Apply responsible AI principles with human oversight",
    "Build and explain a small AI application as portfolio evidence"
  ],
  lessons: [
    { id: "what-is-artificial-intelligence", title: "What Is Artificial Intelligence?", status: "available", path: AI_FOUNDATIONS_LESSON_ONE },
    { id: "data-features-patterns", title: "Data, Features, and Patterns", status: "available", path: AI_FOUNDATIONS_LESSON_TWO },
    { id: "rules-learning-predictions", title: "Rules, Learning, and Predictions", status: "available", path: AI_FOUNDATIONS_LESSON_THREE },
    { id: "training-data-labels-evaluation", title: "Training Data, Labels, and Model Evaluation", status: "available", path: AI_FOUNDATIONS_LESSON_FOUR },
    { id: "learning-loss-gradient-descent", title: "Learning from Errors: Loss Functions and Gradient Descent", status: "available", path: AI_FOUNDATIONS_LESSON_FIVE },
    { id: "probability-classification-thresholds", title: "Probability, Classification, and Decision Thresholds", status: "available", path: AI_FOUNDATIONS_LESSON_SIX },
    { id: "distributions-variability-outliers", title: "Data Distributions, Variability, and Outliers", status: "available", path: AI_FOUNDATIONS_LESSON_SEVEN },
    { id: "real-iris-feature-scaling", title: "Feature Scaling with Real Iris Measurements", status: "available", path: AI_FOUNDATIONS_LESSON_EIGHT },
    { id: "real-iris-nearest-neighbor", title: "Distance, Similarity, and Nearest-Neighbor AI", status: "available", path: AI_FOUNDATIONS_LESSON_NINE }
  ],
  modules: [
    {id: 1, title: "Introduction to Artificial Intelligence", description: "Begin with AI concepts, practical examples, and responsible use. Lessons 1–9 cover AI concepts, regression, classification, statistics, scaling, and nearest-neighbor learning with real Iris observations. Additional lessons are planned.", level: "Beginner", duration: "In development", lessonCount: 9, status: "available", path: AI_FOUNDATIONS_LESSON_ONE, lessons: [{ title: "What Is Artificial Intelligence?", path: AI_FOUNDATIONS_LESSON_ONE }, { title: "Data, Features, and Patterns", path: AI_FOUNDATIONS_LESSON_TWO }, { title: "Rules, Learning, and Predictions", path: AI_FOUNDATIONS_LESSON_THREE }, { title: "Training Data, Labels, and Model Evaluation", path: AI_FOUNDATIONS_LESSON_FOUR }, { title: "Learning from Errors: Loss Functions and Gradient Descent", path: AI_FOUNDATIONS_LESSON_FIVE }, { title: "Probability, Classification, and Decision Thresholds", path: AI_FOUNDATIONS_LESSON_SIX }, { title: "Data Distributions, Variability, and Outliers", path: AI_FOUNDATIONS_LESSON_SEVEN }, { title: "Feature Scaling with Real Iris Measurements", path: AI_FOUNDATIONS_LESSON_EIGHT }, { title: "Distance, Similarity, and Nearest-Neighbor AI", path: AI_FOUNDATIONS_LESSON_NINE }]},
    {id: 2, title: "How Machines Learn", description: "Training data, prediction, and evaluation.", level: "Beginner", duration: "Planned", lessonCount: 0, status: "planned"},
    {id: 3, title: "Python and Data Foundations", description: "Python basics and data preparation.", level: "Beginner", duration: "Planned", lessonCount: 0, status: "planned"},
    {id: 4, title: "Machine Learning Basics", description: "Classification, regression, and assessment.", level: "Beginner", duration: "Planned", lessonCount: 0, status: "planned"},
    {id: 5, title: "Generative AI and Prompt Engineering", description: "LLM applications and verification.", level: "Beginner", duration: "Planned", lessonCount: 0, status: "planned"},
    {id: 6, title: "Responsible AI and Ethics", description: "Privacy, fairness, reliability, and governance.", level: "Beginner", duration: "Planned", lessonCount: 0, status: "planned"},
    {id: 7, title: "Build Your First AI Application", description: "Build, test, and explain a small capstone project.", level: "Beginner", duration: "Planned", lessonCount: 0, status: "planned"}
  ],
  finalProject: {
    title: "Your First Responsible AI Application",
    description: "Plan, implement, test, and explain a practical AI application with clearly stated limitations. This capstone is not published yet."
  },
  certificateRequirement: "All required lessons, assessments, and capstone evidence must be verified before a certificate can be issued. Certificates are not yet available."
};
