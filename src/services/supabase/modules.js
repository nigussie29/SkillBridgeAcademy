import { supabase } from "../../lib/supabase";

export async function getModulesByCourse(courseId) {
  const { data, error } = await supabase
    .from("modules")
    .select("*")
    .eq("course_id", courseId)
    .order("order_index", { ascending: true });

  if (error) {
    throw new Error(error.message);
  }

  return data ?? [];
}

export async function createModule(moduleRecord) {
  const { data, error } = await supabase
    .from("modules")
    .insert(moduleRecord)
    .select()
    .single();

  if (error) {
    throw new Error(error.message);
  }

  return data;
}

export async function updateModule(moduleId, updates) {
  const { data, error } = await supabase
    .from("modules")
    .update(updates)
    .eq("id", moduleId)
    .select()
    .single();

  if (error) {
    throw new Error(error.message);
  }

  return data;
}

export async function deleteModule(moduleId) {
  const { error } = await supabase
    .from("modules")
    .delete()
    .eq("id", moduleId);

  if (error) {
    throw new Error(error.message);
  }

  return true;
}