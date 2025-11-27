import { supabase, isSupabaseConfigured, User } from '@/lib/supabase';

export class SupabaseAuthService {
  // Check if user is authenticated
  static async getCurrentUser(): Promise<User | null> {
    if (!isSupabaseConfigured()) {
      return null;
    }

    try {
      const { data: { user: authUser } } = await supabase.auth.getUser();
      
      if (!authUser) {
        return null;
      }

      // Get user profile from users table
      const { data: profile, error } = await supabase
        .from('users')
        .select('*')
        .eq('id', authUser.id)
        .single();

      if (error) {
        console.error('Error fetching user profile:', error);
        return null;
      }

      return profile;
    } catch (error) {
      console.error('Error getting current user:', error);
      return null;
    }
  }

  // Send OTP to phone number
  static async sendPhoneOTP(phoneNumber: string): Promise<{ success: boolean; error?: string }> {
    if (!isSupabaseConfigured()) {
      console.log('Demo mode: Would send OTP to', phoneNumber);
      return { success: true };
    }

    try {
      const { error } = await supabase.auth.signInWithOtp({
        phone: phoneNumber,
        options: {
          shouldCreateUser: true,
        }
      });

      if (error) {
        return { success: false, error: error.message };
      }

      return { success: true };
    } catch (error) {
      console.error('Error sending phone OTP:', error);
      return { success: false, error: 'Failed to send verification code' };
    }
  }

  // Auto-verify phone after payment
  static async autoVerifyPhone(phoneNumber: string, userId: string): Promise<{ success: boolean; error?: string }> {
    if (!isSupabaseConfigured()) {
      console.log('Demo mode: Auto-verified phone for', phoneNumber);
      return { success: true };
    }

    try {
      // Mark phone as verified in user profile
      const { error } = await supabase
        .from('users')
        .update({
          phone_verified: true,
          phone_verified_at: new Date().toISOString(),
        })
        .eq('id', userId);

      if (error) {
        return { success: false, error: error.message };
      }

      return { success: true };
    } catch (error) {
      console.error('Error auto-verifying phone:', error);
      return { success: false, error: 'Failed to verify phone number' };
    }
  }

  // Send email verification
  static async sendEmailVerification(email: string): Promise<{ success: boolean; error?: string }> {
    if (!isSupabaseConfigured()) {
      console.log('Demo mode: Would send email verification to', email);
      return { success: true };
    }

    try {
      const { error } = await supabase.auth.signInWithOtp({
        email: email,
        options: {
          shouldCreateUser: false,
        }
      });

      if (error) {
        return { success: false, error: error.message };
      }

      return { success: true };
    } catch (error) {
      console.error('Error sending email verification:', error);
      return { success: false, error: 'Failed to send email verification' };
    }
  }

  // Auto-verify email
  static async autoVerifyEmail(email: string, userId: string): Promise<{ success: boolean; error?: string }> {
    if (!isSupabaseConfigured()) {
      console.log('Demo mode: Auto-verified email for', email);
      return { success: true };
    }

    try {
      // Mark email as verified in user profile
      const { error } = await supabase
        .from('users')
        .update({
          email: email,
          email_verified: true,
          email_verified_at: new Date().toISOString(),
        })
        .eq('id', userId);

      if (error) {
        return { success: false, error: error.message };
      }

      return { success: true };
    } catch (error) {
      console.error('Error auto-verifying email:', error);
      return { success: false, error: 'Failed to verify email' };
    }
  }

  // Sign in with phone number (OTP)
  static async signInWithPhone(phoneNumber: string): Promise<{ success: boolean; error?: string }> {
    if (!isSupabaseConfigured()) {
      return { success: false, error: 'Supabase not configured' };
    }

    try {
      const { error } = await supabase.auth.signInWithOtp({
        phone: phoneNumber,
      });

      if (error) {
        return { success: false, error: error.message };
      }

      return { success: true };
    } catch (error) {
      console.error('Error signing in with phone:', error);
      return { success: false, error: 'Failed to send OTP' };
    }
  }

  // Verify OTP
  static async verifyOTP(phoneNumber: string, token: string): Promise<{ success: boolean; error?: string; user?: User }> {
    if (!isSupabaseConfigured()) {
      return { success: false, error: 'Supabase not configured' };
    }

    try {
      const { data, error } = await supabase.auth.verifyOtp({
        phone: phoneNumber,
        token: token,
        type: 'sms',
      });

      if (error) {
        return { success: false, error: error.message };
      }

      if (!data.user) {
        return { success: false, error: 'No user returned after verification' };
      }

      // Check if user profile exists, create if not
      const { data: profile, error: profileError } = await supabase
        .from('users')
        .select('*')
        .eq('id', data.user.id)
        .single();

      if (profileError && profileError.code === 'PGRST116') {
        // User doesn't exist, create profile
        const { data: newProfile, error: createError } = await supabase
          .from('users')
          .insert({
            id: data.user.id,
            phone_number: phoneNumber,
            full_name: '', // To be filled later
            has_paid: false,
            wants_certificate: true,
          })
          .select()
          .single();

        if (createError) {
          return { success: false, error: 'Failed to create user profile' };
        }

        return { success: true, user: newProfile };
      } else if (profileError) {
        return { success: false, error: 'Failed to fetch user profile' };
      }

      return { success: true, user: profile };
    } catch (error) {
      console.error('Error verifying OTP:', error);
      return { success: false, error: 'Failed to verify OTP' };
    }
  }

  // Sign out
  static async signOut(): Promise<void> {
    if (!isSupabaseConfigured()) {
      return;
    }

    try {
      await supabase.auth.signOut();
    } catch (error) {
      console.error('Error signing out:', error);
    }
  }

  // Update user profile
  static async updateProfile(userId: string, updates: Partial<User>): Promise<{ success: boolean; error?: string }> {
    if (!isSupabaseConfigured()) {
      return { success: false, error: 'Supabase not configured' };
    }

    try {
      const { error } = await supabase
        .from('users')
        .update(updates)
        .eq('id', userId);

      if (error) {
        return { success: false, error: error.message };
      }

      return { success: true };
    } catch (error) {
      console.error('Error updating profile:', error);
      return { success: false, error: 'Failed to update profile' };
    }
  }

  // Enhanced payment completion with auto-verification
  static async markPaymentComplete(userId: string, phoneNumber: string, email?: string): Promise<{ success: boolean; error?: string }> {
    if (!isSupabaseConfigured()) {
      console.log('Demo mode: Payment marked complete for user', userId);
      return { success: true };
    }

    try {
      // Update payment status
      const { error: paymentError } = await supabase
        .from('users')
        .update({
          has_paid: true,
          payment_date: new Date().toISOString(),
        })
        .eq('id', userId);

      if (paymentError) {
        return { success: false, error: paymentError.message };
      }

      // Auto-verify phone number
      await this.autoVerifyPhone(phoneNumber, userId);

      // Auto-verify email if provided
      if (email) {
        await this.autoVerifyEmail(email, userId);
      }

      // Send verification code to phone
      await this.sendPhoneOTP(phoneNumber);

      // Create initial progress record
      const { error: progressError } = await supabase
        .from('user_progress')
        .insert({
          user_id: userId,
          current_chapter: 1,
          completed_chapters: [],
        });

      if (progressError && progressError.code !== '23505') {
        console.error('Error creating progress record:', progressError);
      }

      return { success: true };
    } catch (error) {
      console.error('Error marking payment complete:', error);
      return { success: false, error: 'Failed to update payment status' };
    }
  }
}
