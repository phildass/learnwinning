
# Firebase Setup Instructions

## 1. Create Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click "Add project"
3. Enter project name: "Live Like a Winner" (or your preferred name)
4. Follow the setup wizard
5. Enable Google Analytics (optional)

## 2. Enable Phone Authentication

1. In Firebase Console, go to **Authentication** > **Sign-in method**
2. Click on **Phone** provider
3. Enable the toggle
4. Click **Save**

**Important**: For production, you'll need to:
- Verify your domain in Firebase Console
- Add authorized domains (learnwinning.iiskills.in)
- For testing, localhost is automatically authorized

## 3. Create Firestore Database

1. In Firebase Console, go to **Firestore Database**
2. Click **Create database**
3. Choose **Production mode** (we'll deploy custom rules)
4. Select a location (choose closest to India, e.g., asia-south1)
5. Click **Enable**

## 4. Deploy Firestore Security Rules

1. Copy the contents of `firestore.rules` file
2. In Firebase Console, go to **Firestore Database** > **Rules**
3. Replace the existing rules with the copied content
4. Click **Publish**

## 5. Create Admin User

After deploying, you need to manually add an admin user:

1. In Firebase Console, go to **Firestore Database**
2. Create a new collection called `admins`
3. Add a document with ID as your Firebase Auth UID
4. Add any fields you want (e.g., `role: "admin"`, `email: "admin@iiskills.in"`)

**To get your Firebase Auth UID:**
- After you first sign in to the app, check Firebase Console > Authentication > Users
- Copy your UID from there

## 6. Get Firebase Configuration

1. In Firebase Console, go to **Project Settings** (gear icon)
2. Scroll down to **Your apps** section
3. Click the **Web** icon (</>) to add a web app
4. Register app with nickname: "Live Like a Winner Web"
5. Copy the configuration object

## 7. Add Configuration to Environment Variables

Create a `.env.local` file in your project root with these variables:

```env
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key_here
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project_id.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project_id.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
```

**IMPORTANT**: Replace all values with your actual Firebase config values.

## 8. Database Structure

### Users Collection (`users`)
```typescript
{
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
```

### Course Progress Collection (`courseProgress`)
```typescript
{
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
```

### Admins Collection (`admins`)
```typescript
{
  role: "admin";
  email: string;
  createdAt: Timestamp;
}
```

## 9. Security Best Practices

✅ **Environment Variables**: Never commit `.env.local` to version control
✅ **Security Rules**: Always use the provided Firestore rules
✅ **Admin Access**: Only add trusted users as admins
✅ **Phone Authentication**: Monitor usage in Firebase Console
✅ **API Keys**: Firebase API keys are safe to expose (they're restricted by Firebase)

## 10. Testing

1. Start your development server: `npm run dev`
2. Try registering with a phone number
3. You should receive an OTP
4. After verification, check Firestore to see your user document

## 11. Production Deployment

Before deploying to production:
1. Add your production domain to authorized domains in Firebase Console
2. Ensure all environment variables are set in Vercel
3. Test phone authentication thoroughly
4. Monitor Firebase Usage & Billing

## 12. Costs

**Firebase Free Tier (Spark Plan)**:
- Phone Authentication: First 10K verifications/month FREE
- Firestore: 50K reads, 20K writes, 20K deletes per day FREE
- Storage: 1 GB FREE

For your use case with expected traffic, the free tier should be sufficient initially.

## Support

If you encounter any issues:
- Check Firebase Console > Usage
- Review Firebase logs
- Test with Firebase Emulator for development
