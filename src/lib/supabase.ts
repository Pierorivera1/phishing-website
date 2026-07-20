import { createClient } from '@supabase/supabase-js';

const rawUrl =
  process.env.NEXT_PUBLIC_SUPABASE_URL ||
  'https://qzfqadxsbhvidyhxqmcb.supabase.co';

const rawKey =
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF6ZnFhZHhzYmh2aWR5aHhxbWNiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODQ0NDY1NDIsImV4cCI6MjEwMDAyMjU0Mn0.keynwqbrnmJ4N_F5obR6Oer4zvpPG0Rq6EP72mYoYFo';

const supabaseUrl = rawUrl.trim().replace(/\s+/g, '');
const supabaseAnonKey = rawKey.trim().replace(/\s+/g, '');

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
