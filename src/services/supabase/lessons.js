import { supabase } from "../../lib/supabase";


export async function getLessonsByModule(moduleId) {
  const { data, error } = await supabase
    .from("lessons")
    .select("*")
    .eq("module_id", moduleId)
    .order("order_index", { ascending: true });

  if (error) {
    throw new Error(error.message);
  }

  return data ?? [];
}

export async function getLessonsByCourse(courseId) {
  const { data, error } = await supabase
    .from("lessons")
    .select("*")
    .eq("course_id", courseId)
    .order("order_index", { ascending: true });

  if (error) {
    throw new Error(error.message);
  }

  return data ?? [];
}
export async function getLessonById(lessonId) {
  const { data, error } = await supabase
    .from("lessons")
    .select("*")
    .eq("id", lessonId)
    .single();

  if (error) {
    throw new Error(error.message);
  }

  return data;
}
export async function createLesson(lessonRecord) {
  const { data, error } = await supabase
    .from("lessons")
    .insert(lessonRecord)
    .select()
    .single();

  if (error) {
    throw new Error(error.message);
  }

  return data;
}

export async function updateLesson(lessonId, updates) {
  const { data, error } = await supabase
    .from("lessons")
    .update(updates)
    .eq("id", lessonId)
    .select()
    .single();

  if (error) {
    throw new Error(error.message);
  }

  return data;
}

export async function deleteLesson(lessonId) {
  const { error } = await supabase
    .from("lessons")
    .delete()
    .eq("id", lessonId);

  if (error) {
    throw new Error(error.message);
  }

  return true;
}