
import { 
  signInWithPhoneNumber, 
  RecaptchaVerifier, 
  ConfirmationResult,
  signOut as firebaseSignOut,
  onAuthStateChanged,
  User
} from "firebase/auth";
import { auth } from "@/lib/firebase";

declare global {
  interface Window {
    recaptchaVerifier?: RecaptchaVerifier;
    confirmationResult?: ConfirmationResult;
  }
}

export const initRecaptcha = (elementId: string): RecaptchaVerifier => {
  if (window.recaptchaVerifier) {
    window.recaptchaVerifier.clear();
  }

  window.recaptchaVerifier = new RecaptchaVerifier(auth, elementId, {
    size: "invisible",
    callback: () => {
      console.log("reCAPTCHA verified");
    },
    "expired-callback": () => {
      console.log("reCAPTCHA expired");
    },
  });

  return window.recaptchaVerifier;
};

export const sendOTP = async (phoneNumber: string): Promise<ConfirmationResult> => {
  try {
    const formattedPhone = phoneNumber.startsWith("+91") 
      ? phoneNumber 
      : `+91${phoneNumber}`;

    if (!window.recaptchaVerifier) {
      initRecaptcha("recaptcha-container");
    }

    const confirmationResult = await signInWithPhoneNumber(
      auth,
      formattedPhone,
      window.recaptchaVerifier!
    );

    window.confirmationResult = confirmationResult;
    return confirmationResult;
  } catch (error: any) {
    console.error("Error sending OTP:", error);
    
    if (window.recaptchaVerifier) {
      window.recaptchaVerifier.clear();
      window.recaptchaVerifier = undefined;
    }
    
    throw new Error(error.message || "Failed to send OTP");
  }
};

export const verifyOTP = async (code: string): Promise<User> => {
  try {
    if (!window.confirmationResult) {
      throw new Error("No confirmation result found. Please request OTP again.");
    }

    const result = await window.confirmationResult.confirm(code);
    return result.user;
  } catch (error: any) {
    console.error("Error verifying OTP:", error);
    throw new Error(error.message || "Invalid OTP");
  }
};

export const signOut = async (): Promise<void> => {
  try {
    await firebaseSignOut(auth);
    
    if (window.recaptchaVerifier) {
      window.recaptchaVerifier.clear();
      window.recaptchaVerifier = undefined;
    }
    window.confirmationResult = undefined;
  } catch (error: any) {
    console.error("Error signing out:", error);
    throw new Error(error.message || "Failed to sign out");
  }
};

export const onAuthChange = (callback: (user: User | null) => void) => {
  return onAuthStateChanged(auth, callback);
};

export const getCurrentUser = (): User | null => {
  return auth.currentUser;
};
