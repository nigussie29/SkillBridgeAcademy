// src/data/studentLearningState.js

// --------------------------------------------------
// Temporary student progress data
// Later, these values can come from Supabase.
// --------------------------------------------------

const learningProgress = {
  lessonCompleted: false,
  reflectionCompleted: false,
  practiceCompleted: false,
  applicationCompleted: false,
  projectCompleted: false,
  masteryCompleted: false,
  portfolioPublished: false,
};

// --------------------------------------------------
// Pyravanta learning stages
// --------------------------------------------------

const pyravantaStageDefinitions = [
  {
    id: 1,
    title: "Learn",
    icon: "📘",
    description: "Understand the core lesson",
    path: "/courses/algebra-1/variables-and-expressions",
  },
  {
    id: 2,
    title: "Reflect",
    icon: "💭",
    description: "Explain what you learned",
    path: "/dashboard/reflection",
  },
  {
    id: 3,
    title: "Practice",
    icon: "✍️",
    description: "Strengthen the concept through practice",
    path: "/dashboard/practice",
  },
  {
    id: 4,
    title: "Apply",
    icon: "🎯",
    description: "Use the concept in a meaningful context",
    path: "/dashboard/apply",
  },
  {
    id: 5,
    title: "Build",
    icon: "🛠️",
    description: "Create a learning artifact or project",
    path: "/dashboard/projects",
  },
  {
    id: 6,
    title: "Master",
    icon: "🧠",
    description: "Complete the mastery check",
    path: "/dashboard/mastery",
  },
  {
    id: 7,
    title: "Share",
    icon: "🌍",
    description: "Add learning evidence to your portfolio",
    path: "/dashboard/portfolio",
  },
  {
    id: 8,
    title: "Advance",
    icon: "🚀",
    description: "Move forward to the next lesson",
    path: "/dashboard/journey",
  },
];

// --------------------------------------------------
// Determine the student's current Pyravanta stage
// --------------------------------------------------

function getCurrentStageNumber(progress) {
  if (!progress.lessonCompleted) {
    return 1;
  }

  if (!progress.reflectionCompleted) {
    return 2;
  }

  if (!progress.practiceCompleted) {
    return 3;
  }

  if (!progress.applicationCompleted) {
    return 4;
  }

  if (!progress.projectCompleted) {
    return 5;
  }

  if (!progress.masteryCompleted) {
    return 6;
  }

  if (!progress.portfolioPublished) {
    return 7;
  }

  return 8;
}

const currentStageNumber =
  getCurrentStageNumber(learningProgress);

// --------------------------------------------------
// Create completed, current, and locked stage statuses
// --------------------------------------------------

const pyravantaStages = pyravantaStageDefinitions.map(
  (stage) => {
    let status = "locked";

    if (stage.id < currentStageNumber) {
      status = "completed";
    }

    if (stage.id === currentStageNumber) {
      status = "current";
    }

    return {
      ...stage,
      status,
    };
  },
);

const currentStage =
  pyravantaStages.find(
    (stage) => stage.id === currentStageNumber,
  ) ?? pyravantaStages[0];

// --------------------------------------------------
// Main student learning state
// --------------------------------------------------

export const studentLearningState = {
  course: {
    id: "algebra-1",
    title: "Algebra I",
  },

  module: {
    number: 1,
    title: "Algebra Foundations",
  },

  lesson: {
    id: "variables-and-expressions",
    title: "Variables and Expressions",
    path: "/courses/algebra-1/variables-and-expressions",
  },

  mission: {
    subject: "Algebra I",
    nextStep: "Complete Lesson 1",
    purpose:
      "Build the foundation of Algebra I by understanding variables, expressions, constants, coefficients, and terms.",
    estimatedMinutes: 45,
  },

  progress: learningProgress,

  pyravanta: {
    currentStageNumber,
    currentStage: currentStage.title,
    currentStageDescription: currentStage.description,
    totalStages: pyravantaStages.length,
    stages: pyravantaStages,
  },

  luminery: {
    message:
      "You are beginning your Algebra I journey by learning how variables and expressions represent mathematical ideas.",
    mission:
      "Complete today's lesson and reflect on the core concept.",
    recommendation:
      "Focus first on understanding variables, constants, coefficients, and terms.",
  },
};