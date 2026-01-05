
import { supabase, isSupabaseConfigured, UserProgress, TestResult } from '@/lib/supabase';

export class SupabaseUserService {
  // Get user progress
  static async getUserProgress(userId: string): Promise<UserProgress | null> {
    if (!isSupabaseConfigured()) {
      return null;
    }

    try {
      const { data, error } = await supabase
        .from('user_progress')
        .select('*')
        .eq('user_id', userId)
        .single();

      if (error) {
        console.error('Error fetching user progress:', error);
        return null;
      }

      return data;
    } catch (error) {
      console.error('Error getting user progress:', error);
      return null;
    }
  }

  // Complete Registration after OTP verification
  static async completeRegistration(
    userId: string,
    details: { full_name: string; email?: string; has_paid: boolean; payment_date: string }
  ): Promise<{ success: boolean; error?: string }> {
    if (!isSupabaseConfigured()) {
      return { success: false, error: 'Supabase not configured' };
    }

    try {
      // 1. Update user profile with full name, email, and payment status
      const { error: profileError } = await supabase
        .from('users')
        .update({
          full_name: details.full_name,
          email: details.email,
          has_paid: details.has_paid,
          payment_date: details.payment_date,
          phone_verified: true, // Mark phone as verified
          phone_verified_at: new Date().toISOString(),
        })
        .eq('id', userId);

      if (profileError) {
        console.error('Error updating user profile during registration:', profileError);
        return { success: false, error: 'Failed to update user profile.' };
      }

      // 2. Create initial progress record for the user
      const { error: progressError } = await supabase
        .from('user_progress')
        .insert({
          user_id: userId,
          current_chapter: 1,
          completed_chapters: [],
        });
      
      // Ignore error if progress record already exists (e.g., re-verification)
      if (progressError && progressError.code !== '23505') { 
        console.error('Error creating user progress record:', progressError);
        // Don't block registration for this, but log it.
      }
      
      return { success: true };
    } catch (error) {
      console.error('Error completing registration:', error);
      return { success: false, error: 'An unexpected error occurred during registration.' };
    }
  }

  // Update user progress
  static async updateProgress(
    userId: string,
    currentChapter: number,
    completedChapters: number[]
  ): Promise<{ success: boolean; error?: string }> {
    if (!isSupabaseConfigured()) {
      return { success: false, error: 'Supabase not configured' };
    }

    try {
      const { error } = await supabase
        .from('user_progress')
        .upsert({
          user_id: userId,
          current_chapter: currentChapter,
          completed_chapters: completedChapters,
          last_accessed: new Date().toISOString(),
        });

      if (error) {
        return { success: false, error: error.message };
      }

      return { success: true };
    } catch (error) {
      console.error('Error updating progress:', error);
      return { success: false, error: 'Failed to update progress' };
    }
  }

  // Save test result
  static async saveTestResult(
    userId: string,
    chapterNumber: number,
    score: number,
    passed: boolean,
    answers: Record<number, number>
  ): Promise<{ success: boolean; error?: string }> {
    if (!isSupabaseConfigured()) {
      return { success: false, error: 'Supabase not configured' };
    }

    try {
      const { error } = await supabase
        .from('test_results')
        .upsert({
          user_id: userId,
          chapter_number: chapterNumber,
          score,
          passed,
          answers,
          completed_at: new Date().toISOString(),
        });

      if (error) {
        return { success: false, error: error.message };
      }

      // If test passed, add chapter to completed chapters
      if (passed) {
        const progress = await this.getUserProgress(userId);
        if (progress) {
          const completedChapters = progress.completed_chapters || [];
          if (!completedChapters.includes(chapterNumber)) {
            completedChapters.push(chapterNumber);
            await this.updateProgress(userId, progress.current_chapter, completedChapters);
          }
        }
      }

      return { success: true };
    } catch (error) {
      console.error('Error saving test result:', error);
      return { success: false, error: 'Failed to save test result' };
    }
  }

  // Get test results for user
  static async getTestResults(userId: string): Promise<TestResult[]> {
    if (!isSupabaseConfigured()) {
      return [];
    }

    try {
      const { data, error } = await supabase
        .from('test_results')
        .select('*')
        .eq('user_id', userId)
        .order('chapter_number', { ascending: true });

      if (error) {
        console.error('Error fetching test results:', error);
        return [];
      }

      return data || [];
    } catch (error) {
      console.error('Error getting test results:', error);
      return [];
    }
  }

  // Check if user is eligible for certificate
  static async isEligibleForCertificate(userId: string): Promise<boolean> {
    if (!isSupabaseConfigured()) {
      return false;
    }

    try {
      const testResults = await this.getTestResults(userId);
      
      // Check if user has passed all required chapters (10 chapters total)
      const TOTAL_CHAPTERS = 10;
      const passedChapters = testResults.filter(r => r.passed).length;
      
      return passedChapters >= TOTAL_CHAPTERS;
    } catch (error) {
      console.error('Error checking certificate eligibility:', error);
      return false;
    }
  }

  // Issue certificate
  static async issueCertificate(userId: string): Promise<{ success: boolean; certificateId?: string; error?: string }> {
    if (!isSupabaseConfigured()) {
      return { success: false, error: 'Supabase not configured' };
    }

    try {
      // Check eligibility first
      const eligible = await this.isEligibleForCertificate(userId);
      if (!eligible) {
        return { success: false, error: 'User not eligible for certificate' };
      }

      const { data, error } = await supabase
        .from('certificates')
        .insert({
          user_id: userId,
          issued_date: new Date().toISOString(),
        })
        .select()
        .single();

      if (error) {
        return { success: false, error: error.message };
      }

      return { success: true, certificateId: data.id };
    } catch (error) {
      console.error('Error issuing certificate:', error);
      return { success: false, error: 'Failed to issue certificate' };
    }
  }

  // Get user certificate
  static async getUserCertificate(userId: string) {
    if (!isSupabaseConfigured()) {
      return null;
    }

    try {
      const { data, error } = await supabase
        .from('certificates')
        .select('*')
        .eq('user_id', userId)
        .single();

      if (error) {
        console.error('Error fetching certificate:', error);
        return null;
      }

      return data;
    } catch (error) {
      console.error('Error getting certificate:', error);
      return null;
    }
  }
}
