-- SevaPremi Internship Command Center
-- Run this in Supabase SQL Editor for:
-- https://sduajufbgitydrkrluob.supabase.co
--
-- This version has NO login requirement and NO RLS protection.
-- The website can read, add, edit, and delete directly using the publishable key.
-- Anyone who has the site/key can access these tables, so use only for non-private data.

create extension if not exists pgcrypto;

create table if not exists public.members (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  role text,
  team text,
  hours numeric default 0,
  impact text,
  next_steps text,
  resource_link text,
  notes text,
  created_at timestamptz not null default now()
);

create table if not exists public.tasks (
  id uuid primary key default gen_random_uuid(),
  member_name text not null,
  date date,
  hours numeric default 0,
  title text not null,
  notes text,
  status text default 'In Progress',
  created_at timestamptz not null default now()
);

create table if not exists public.research_items (
  id uuid primary key default gen_random_uuid(),
  category text not null,
  research_area text,
  details text,
  findings text,
  stakeholders text,
  next_action text,
  status text default 'Researching',
  created_at timestamptz not null default now()
);

create table if not exists public.solutions (
  id uuid primary key default gen_random_uuid(),
  problem text not null,
  root_cause text,
  template text,
  verification text default 'Pending',
  created_at timestamptz not null default now()
);

create table if not exists public.meetings (
  id uuid primary key default gen_random_uuid(),
  date date,
  title text not null,
  attendees text,
  duration text,
  summary text,
  actions text,
  created_at timestamptz not null default now()
);

create table if not exists public.resources (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  type text,
  owner text,
  url text,
  notes text,
  created_at timestamptz not null default now()
);

create table if not exists public.weekly_planners (
  id uuid primary key default gen_random_uuid(),
  member_name text not null,
  planner_text text,
  created_at timestamptz not null default now()
);

-- Remove older RLS policies if you already ran the previous protected script.
drop policy if exists "members_select_own" on public.members;
drop policy if exists "members_insert_own" on public.members;
drop policy if exists "members_update_own" on public.members;
drop policy if exists "members_delete_own" on public.members;
drop policy if exists "tasks_select_own" on public.tasks;
drop policy if exists "tasks_insert_own" on public.tasks;
drop policy if exists "tasks_update_own" on public.tasks;
drop policy if exists "tasks_delete_own" on public.tasks;
drop policy if exists "research_select_own" on public.research_items;
drop policy if exists "research_insert_own" on public.research_items;
drop policy if exists "research_update_own" on public.research_items;
drop policy if exists "research_delete_own" on public.research_items;
drop policy if exists "solutions_select_own" on public.solutions;
drop policy if exists "solutions_insert_own" on public.solutions;
drop policy if exists "solutions_update_own" on public.solutions;
drop policy if exists "solutions_delete_own" on public.solutions;
drop policy if exists "meetings_select_own" on public.meetings;
drop policy if exists "meetings_insert_own" on public.meetings;
drop policy if exists "meetings_update_own" on public.meetings;
drop policy if exists "meetings_delete_own" on public.meetings;
drop policy if exists "resources_select_own" on public.resources;
drop policy if exists "resources_insert_own" on public.resources;
drop policy if exists "resources_update_own" on public.resources;
drop policy if exists "resources_delete_own" on public.resources;

alter table public.members disable row level security;
alter table public.tasks disable row level security;
alter table public.research_items disable row level security;
alter table public.solutions disable row level security;
alter table public.meetings disable row level security;
alter table public.resources disable row level security;
alter table public.weekly_planners disable row level security;

-- Allow the public anon role used by the publishable key to edit website data.
grant usage on schema public to anon;
grant select, insert, update, delete on public.members to anon;
grant select, insert, update, delete on public.tasks to anon;
grant select, insert, update, delete on public.research_items to anon;
grant select, insert, update, delete on public.solutions to anon;
grant select, insert, update, delete on public.meetings to anon;
grant select, insert, update, delete on public.resources to anon;
grant select, insert, update, delete on public.weekly_planners to anon;

-- Extra grants are harmless and help if Supabase serves a different browser role.
grant usage on schema public to authenticated;
grant select, insert, update, delete on public.members to authenticated;
grant select, insert, update, delete on public.tasks to authenticated;
grant select, insert, update, delete on public.research_items to authenticated;
grant select, insert, update, delete on public.solutions to authenticated;
grant select, insert, update, delete on public.meetings to authenticated;
grant select, insert, update, delete on public.resources to authenticated;
grant select, insert, update, delete on public.weekly_planners to authenticated;

-- Refresh Supabase/PostgREST schema cache after table/policy changes.
notify pgrst, 'reload schema';
