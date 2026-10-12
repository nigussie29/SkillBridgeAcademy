-- Apply in the academy Supabase project's SQL editor.
begin;
alter table public.profiles drop constraint if exists profiles_role_check;
alter table public.profiles add constraint profiles_role_check
  check (role in ('student', 'instructor', 'admin'));

-- Table-wide UPDATE otherwise lets students change their own role.
revoke update on public.profiles from anon, authenticated;
grant update (full_name) on public.profiles to authenticated;
drop policy if exists "Users can update own profile" on public.profiles;
create policy "Users can update own profile" on public.profiles for update
  to authenticated using (auth.uid() = id) with check (auth.uid() = id);

-- Defense in depth if table-wide UPDATE is granted later.
create or replace function public.protect_profile_role()
returns trigger language plpgsql set search_path = public as $$
begin
  if current_user in ('anon', 'authenticated')
     and (new.role is distinct from old.role or new.id is distinct from old.id) then
    raise exception 'Account roles can only be assigned by a trusted administrator';
  end if;
  return new;
end;
$$;
drop trigger if exists protect_profile_role on public.profiles;
create trigger protect_profile_role before update on public.profiles
for each row execute function public.protect_profile_role();
commit;
