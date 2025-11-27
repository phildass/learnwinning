import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn('Supabase environment variables not configured. Using mock data.');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
  },
});

// Database Types
export interface User {
  id: string;
  phone_number: string;
  phone_verified?: boolean;
  phone_verified_at?: string;
  email?: string;
  email_verified?: boolean;
  email_verified_at?: string;
  full_name: string;
  age?: number;
  qualification?: string;
  has_paid: boolean;
  payment_date?: string;
  registration_date: string;
  wants_certificate: boolean;
  created_at: string;
  updated_at: string;
}

export interface UserProgress {
  id: string;
  user_id: string;
  current_chapter: number;
  completed_chapters: number[];
  last_accessed: string;
  created_at: string;
  updated_at: string;
}

export interface TestResult {
  id: string;
  user_id: string;
  chapter_number: number;
  score: number;
  passed: boolean;
  answers: Record<number, number>;
  completed_at: string;
  created_at: string;
}

export interface Certificate {
  id: string;
  user_id: string;
  issued_date: string;
  certificate_url?: string;
  created_at: string;
}

// Helper function to check if Supabase is configured
export const isSupabaseConfigured = () => {
  return Boolean(supabaseUrl && supabaseAnonKey);
};
