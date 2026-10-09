const STORAGE_KEY = "skillBridgeDataAiCompletion";

const defaultState = {
  learnerName: "",
  completedProjects: [],
  finalAssessmentScore: "",
  capstonePresented: false,
  responsibleUseDocumented: false,
};

function storageAvailable() {
  return (
    typeof window !== "undefined" &&
    typeof window.localStorage !== "undefined"
  );
}

export function loadDataAiCompletion() {
  if (!storageAvailable()) return { ...defaultState };

  try {
    const saved = JSON.parse(
      window.localStorage.getItem(STORAGE_KEY) || "{}"
    );

    return {
      ...defaultState,
      ...(saved && typeof saved === "object" ? saved : {}),
      completedProjects: Array.isArray(saved?.completedProjects)
        ? [...new Set(saved.completedProjects.map(Number))]
        : [],
    };
  } catch {
    return { ...defaultState };
  }
}

export function saveDataAiCompletion(completion) {
  if (!storageAvailable()) return false;

  window.localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(completion)
  );

  return true;
}

