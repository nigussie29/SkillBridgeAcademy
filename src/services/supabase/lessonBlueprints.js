import { supabase } from "../../lib/supabase";

export async function getLessonBlueprintByLessonId(lessonId) {
  if (!lessonId) {
    return null;
  }

  const { data, error } = await supabase
    .from("lesson_blueprints")
    .select("*")
    .eq("lesson_id", lessonId)
    .order("updated_at", { ascending: false })
    .limit(1)
    .maybeSingle();

  if (error) {
    throw new Error(error.message);
  }

  return data ?? null;
}

export async function saveLessonBlueprint(blueprintRecord) {
  const { data, error } = await supabase
    .from("lesson_blueprints")
    .upsert(blueprintRecord, {
      onConflict: "lesson_id",
    })
    .select()
    .single();

  if (error) {
    throw new Error(error.message);
  }

  return data;
}

export async function deleteLessonBlueprint(blueprintId) {
  const { error } = await supabase
    .from("lesson_blueprints")
    .delete()
    .eq("id", blueprintId);

  if (error) {
    throw new Error(error.message);
  }

  return true;
}