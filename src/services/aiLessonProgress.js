import { supabase } from "../lib/supabase";

export const AI_COURSE_ID = "ai-foundations";
export const AI_LESSON_ID = "ai-foundations-m1-l1";

// Existing Lesson 1 calls do not pass a lesson ID. Keep that contract unchanged.
export async function getAiLessonProgress(userId, lessonId = AI_LESSON_ID) {
  if (!userId) return null;
  const { data, error } = await supabase
    .from("ai_lesson_progress")
    .select("score, total_questions, completed, updated_at")
    .eq("user_id", userId)
    .eq("course_id", AI_COURSE_ID)
    .eq("lesson_id", lessonId)
    .maybeSingle();
  if (error) throw error;
  return data;
}

export async function saveAiLessonProgress(userId, score, totalQuestions, lessonId = AI_LESSON_ID) {
  if (!userId) throw new Error("Sign in to save your result.");
  if (!/^ai-foundations-m[1-7]-l[1-9][0-9]*$/.test(lessonId)) throw new Error("Invalid AI lesson identifier.");
  if (!Number.isInteger(score) || !Number.isInteger(totalQuestions) || totalQuestions < 1 || score < 0 || score > totalQuestions) {
    throw new Error("Invalid assessment score.");
  }
  const { data, error } = await supabase
    .from("ai_lesson_progress")
    .upsert({
      user_id: userId,
      course_id: AI_COURSE_ID,
      lesson_id: lessonId,
      score,
      total_questions: totalQuestions,
      completed: score / totalQuestions >= 0.75,
      updated_at: new Date().toISOString(),
    }, { onConflict: "user_id,lesson_id" })
    .select("score, total_questions, completed, updated_at")
    .single();
  if (error) throw error;
  return data;
}
