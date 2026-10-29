import { supabase } from "../lib/supabase";

export const AI_LESSON_ID = "ai-foundations-m1-l1";
export const AI_COURSE_ID = "ai-foundations";

export async function getAiLessonProgress(userId) {
  if (!userId) return null;
  const { data, error } = await supabase
    .from("ai_lesson_progress")
    .select("score, total_questions, completed, updated_at")
    .eq("user_id", userId)
    .eq("lesson_id", AI_LESSON_ID)
    .maybeSingle();
  if (error) throw error;
  return data;
}

export async function saveAiLessonProgress(userId, score, totalQuestions) {
  if (!userId) throw new Error("Sign in to save your result.");
  const { data, error } = await supabase
    .from("ai_lesson_progress")
    .upsert({
      user_id: userId,
      course_id: AI_COURSE_ID,
      lesson_id: AI_LESSON_ID,
      score,
      total_questions: totalQuestions,
      completed: score >= 3,
      updated_at: new Date().toISOString(),
    }, { onConflict: "user_id,lesson_id" })
    .select("score, total_questions, completed, updated_at")
    .single();
  if (error) throw error;
  return data;
}
