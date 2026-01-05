
import { 
  doc, 
  setDoc, 
  getDoc, 
  updateDoc, 
  collection,
  query,
  where,
  getDocs,
  serverTimestamp,
  Timestamp
} from "firebase/firestore";
import { db } from "@/lib/firebase";

export interface UserProfile {
  uid: string;
  fullName: string;
  phoneNumber: string;
  age?: number;
  qualification?: string;
  hasPaid: boolean;
  paymentDate?: Timestamp;
  paymentAmount?: number;
  registrationComplete: boolean;
  createdAt: Timestamp;
  updatedAt: Timestamp;
}

export interface CourseProgress {
  uid: string;
  currentChapter: number;
  completedChapters: number[];
  testResults: {
    [chapterNumber: number]: {
      score: number;
      passed: boolean;
      completedAt: Timestamp;
    };
  };
  wantsCertificate: boolean;
  certificateIssued: boolean;
  certificateIssuedAt?: Timestamp;
  lastAccessedAt: Timestamp;
}

export const createUserProfile = async (
  uid: string,
  fullName: string,
  phoneNumber: string
): Promise<void> => {
  try {
    const userRef = doc(db, "users", uid);
    const userProfile: UserProfile = {
      uid,
      fullName,
      phoneNumber,
      hasPaid: false,
      registrationComplete: false,
      createdAt: serverTimestamp() as Timestamp,
      updatedAt: serverTimestamp() as Timestamp,
    };

    await setDoc(userRef, userProfile);
  } catch (error: any) {
    console.error("Error creating user profile:", error);
    throw new Error(error.message || "Failed to create user profile");
  }
};

export const getUserProfile = async (uid: string): Promise<UserProfile | null> => {
  try {
    const userRef = doc(db, "users", uid);
    const userSnap = await getDoc(userRef);

    if (userSnap.exists()) {
      return userSnap.data() as UserProfile;
    }
    return null;
  } catch (error: any) {
    console.error("Error getting user profile:", error);
    throw new Error(error.message || "Failed to get user profile");
  }
};

export const updateUserProfile = async (
  uid: string,
  updates: Partial<UserProfile>
): Promise<void> => {
  try {
    const userRef = doc(db, "users", uid);
    await updateDoc(userRef, {
      ...updates,
      updatedAt: serverTimestamp(),
    });
  } catch (error: any) {
    console.error("Error updating user profile:", error);
    throw new Error(error.message || "Failed to update user profile");
  }
};

export const completeRegistration = async (
  uid: string,
  age: number,
  qualification: string
): Promise<void> => {
  try {
    await updateUserProfile(uid, {
      age,
      qualification,
      registrationComplete: true,
    });
  } catch (error: any) {
    console.error("Error completing registration:", error);
    throw new Error(error.message || "Failed to complete registration");
  }
};

export const markPaymentComplete = async (
  uid: string,
  paymentAmount: number = 99
): Promise<void> => {
  try {
    await updateUserProfile(uid, {
      hasPaid: true,
      paymentDate: serverTimestamp() as Timestamp,
      paymentAmount,
    });
  } catch (error: any) {
    console.error("Error marking payment complete:", error);
    throw new Error(error.message || "Failed to mark payment complete");
  }
};

export const initializeCourseProgress = async (
  uid: string,
  wantsCertificate: boolean = true
): Promise<void> => {
  try {
    const progressRef = doc(db, "courseProgress", uid);
    const progressData: CourseProgress = {
      uid,
      currentChapter: 1,
      completedChapters: [],
      testResults: {},
      wantsCertificate,
      certificateIssued: false,
      lastAccessedAt: serverTimestamp() as Timestamp,
    };

    await setDoc(progressRef, progressData);
  } catch (error: any) {
    console.error("Error initializing course progress:", error);
    throw new Error(error.message || "Failed to initialize course progress");
  }
};

export const getCourseProgress = async (uid: string): Promise<CourseProgress | null> => {
  try {
    const progressRef = doc(db, "courseProgress", uid);
    const progressSnap = await getDoc(progressRef);

    if (progressSnap.exists()) {
      return progressSnap.data() as CourseProgress;
    }
    return null;
  } catch (error: any) {
    console.error("Error getting course progress:", error);
    throw new Error(error.message || "Failed to get course progress");
  }
};

export const updateCourseProgress = async (
  uid: string,
  updates: Partial<CourseProgress>
): Promise<void> => {
  try {
    const progressRef = doc(db, "courseProgress", uid);
    await updateDoc(progressRef, {
      ...updates,
      lastAccessedAt: serverTimestamp(),
    });
  } catch (error: any) {
    console.error("Error updating course progress:", error);
    throw new Error(error.message || "Failed to update course progress");
  }
};

export const completeChapter = async (
  uid: string,
  chapterNumber: number
): Promise<void> => {
  try {
    const progress = await getCourseProgress(uid);
    if (!progress) {
      throw new Error("Course progress not found");
    }

    const completedChapters = Array.from(new Set([...progress.completedChapters, chapterNumber]));
    
    await updateCourseProgress(uid, {
      completedChapters,
      currentChapter: chapterNumber + 1,
    });
  } catch (error: any) {
    console.error("Error completing chapter:", error);
    throw new Error(error.message || "Failed to complete chapter");
  }
};

export const submitTestResult = async (
  uid: string,
  chapterNumber: number,
  score: number,
  passed: boolean
): Promise<void> => {
  try {
    const progress = await getCourseProgress(uid);
    if (!progress) {
      throw new Error("Course progress not found");
    }

    const testResults = {
      ...progress.testResults,
      [chapterNumber]: {
        score,
        passed,
        completedAt: serverTimestamp() as Timestamp,
      },
    };

    await updateCourseProgress(uid, { testResults });

    if (passed) {
      await completeChapter(uid, chapterNumber);
    }
  } catch (error: any) {
    console.error("Error submitting test result:", error);
    throw new Error(error.message || "Failed to submit test result");
  }
};

export const issueCertificate = async (uid: string): Promise<void> => {
  try {
    await updateCourseProgress(uid, {
      certificateIssued: true,
      certificateIssuedAt: serverTimestamp() as Timestamp,
    });
  } catch (error: any) {
    console.error("Error issuing certificate:", error);
    throw new Error(error.message || "Failed to issue certificate");
  }
};

export const getAllUsers = async (): Promise<UserProfile[]> => {
  try {
    const usersRef = collection(db, "users");
    const querySnapshot = await getDocs(usersRef);
    
    const users: UserProfile[] = [];
    querySnapshot.forEach((doc) => {
      users.push(doc.data() as UserProfile);
    });
    
    return users;
  } catch (error: any) {
    console.error("Error getting all users:", error);
    throw new Error(error.message || "Failed to get users");
  }
};

export const getPaidUsers = async (): Promise<UserProfile[]> => {
  try {
    const usersRef = collection(db, "users");
    const q = query(usersRef, where("hasPaid", "==", true));
    const querySnapshot = await getDocs(q);
    
    const users: UserProfile[] = [];
    querySnapshot.forEach((doc) => {
      users.push(doc.data() as UserProfile);
    });
    
    return users;
  } catch (error: any) {
    console.error("Error getting paid users:", error);
    throw new Error(error.message || "Failed to get paid users");
  }
};
