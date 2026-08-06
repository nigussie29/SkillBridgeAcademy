import { supabase } from "../../lib/supabase";

export async function getLessonResponse(lessonId) {
  const {
    data: { user },
    error: userError,
  } = await supabase.auth.getUser();

  if (userError) {
    throw new Error(userError.message);
  }

  if (!user) {
    throw new Error("You must be logged in.");
  }

  const { data, error } = await supabase
    .from("lesson_responses")
    .select("*")
    .eq("lesson_id", lessonId)
    .eq("user_id", user.id)
    .maybeSingle();

  if (error) {
    throw new Error(error.message);
  }

  return data;
}

export async function savePracticeResponse(
  lessonId,
  practiceResponse
) {
  const {
    data: { user },
    error: userError,
  } = await supabase.auth.getUser();

  if (userError) {
    throw new Error(userError.message);
  }

  if (!user) {
    throw new Error("You must be logged in.");
  }

  const { data, error } = await supabase
    .from("lesson_responses")
    .upsert(
      {
        user_id: user.id,
        lesson_id: lessonId,
        practice_response: practiceResponse,
        updated_at: new Date().toISOString(),
      },
      {
        onConflict: "user_id,lesson_id",
      }
    )
    .select()
    .single();

  if (error) {
    throw new Error(error.message);
  }

  return data;
}

export async function saveMasteryResponse(
  lessonId,
  masteryResponse
) {
  const {
    data: { user },
    error: userError,
  } = await supabase.auth.getUser();

  if (userError) {
    throw new Error(userError.message);
  }

  if (!user) {
    throw new Error("You must be logged in.");
  }

  const { data, error } = await supabase
    .from("lesson_responses")
    .upsert(
      {
        user_id: user.id,
        lesson_id: lessonId,
        mastery_response: masteryResponse,
        updated_at: new Date().toISOString(),
      },
      {
        onConflict: "user_id,lesson_id",
      }
    )
    .select()
    .single();

  if (error) {
    throw new Error(error.message);
  }

  return data;
}