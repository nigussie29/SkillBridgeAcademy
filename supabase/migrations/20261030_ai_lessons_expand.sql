-- Phase 1: permit separate account-backed results for AI Foundations lessons.
-- Run once in the existing Supabase SQL Editor before enabling save for Lesson 2.
-- Preserves all existing rows, RLS policies, and the composite primary key.
begin;
alter table public.ai_lesson_progress
  drop constraint if exists lesson_identifier_check;
alter table public.ai_lesson_progress
  add constraint lesson_identifier_check
  check (course_id = 'ai-foundations'
    and lesson_id ~ '^ai-foundations-m[1-7]-l[1-9][0-9]*$');
alter table public.ai_lesson_progress
  drop constraint if exists ai_lesson_progress_score_check;
alter table public.ai_lesson_progress
  add constraint ai_lesson_progress_score_check
  check (score >= 0 and score <= total_questions);
alter table public.ai_lesson_progress
  drop constraint if exists ai_lesson_progress_total_questions_check;
alter table public.ai_lesson_progress
  add constraint ai_lesson_progress_total_questions_check
  check (total_questions between 1 and 30);
alter table public.ai_lesson_progress
  drop constraint if exists completion_score_check;
alter table public.ai_lesson_progress
  add constraint completion_score_check
  check (completed = (score::numeric / total_questions >= 0.75));
-- Original unnamed constraints inherited from column declarations may have
-- PostgreSQL-generated names. This migration keeps current assessments at
-- four questions; widening question count further requires inspecting those.
commit;
