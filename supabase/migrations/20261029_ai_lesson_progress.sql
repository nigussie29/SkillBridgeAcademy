-- Run in the King'sNigus Supabase SQL Editor before enabling cloud progress.
create table if not exists public.ai_lesson_progress (
  user_id uuid not null references auth.users(id) on delete cascade,
  course_id text not null,
  lesson_id text not null,
  score integer not null check (score between 0 and 4),
  total_questions integer not null default 4 check (total_questions = 4),
  completed boolean not null default false,
  updated_at timestamptz not null default now(),
  primary key (user_id, lesson_id),
  constraint lesson_identifier_check check (
    course_id = 'ai-foundations' and lesson_id = 'ai-foundations-m1-l1'
  ),
  constraint completion_score_check check (completed = (score >= 3))
);
alter table public.ai_lesson_progress enable row level security;
revoke all on public.ai_lesson_progress from anon;
grant select, insert, update on public.ai_lesson_progress to authenticated;
drop policy if exists "Read own AI progress" on public.ai_lesson_progress;
create policy "Read own AI progress" on public.ai_lesson_progress
  for select to authenticated using ((select auth.uid()) = user_id);
drop policy if exists "Insert own AI progress" on public.ai_lesson_progress;
create policy "Insert own AI progress" on public.ai_lesson_progress
  for insert to authenticated with check ((select auth.uid()) = user_id);
drop policy if exists "Update own AI progress" on public.ai_lesson_progress;
create policy "Update own AI progress" on public.ai_lesson_progress
  for update to authenticated
  using ((select auth.uid()) = user_id)
  with check ((select auth.uid()) = user_id);
