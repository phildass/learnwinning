import React, { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Home, LogIn } from "lucide-react";

export default function LoginPage() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [code, setCode] = useState("");
  const [codeSent, setCodeSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSendCode = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    // Validate phone number format
    if (!phoneNumber.match(/^\+?[1-9]\d{9,14}$/)) {
      setError("Please enter a valid phone number (e.g., +919876543210)");
      setLoading(false);
      return;
    }

    try {
      // Import auth service dynamically to avoid build issues
      const { SupabaseAuthService } = await import('@/services/supabaseAuthService');
      const result = await SupabaseAuthService.sendPhoneOTP(phoneNumber);

      if (result.success) {
        setCodeSent(true);
        setError("");
      } else {
        setError(result.error || "Failed to send verification code");
      }
    } catch (err) {
      console.error("Error sending OTP:", err);
      setError("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyCode = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const { SupabaseAuthService } = await import('@/services/supabaseAuthService');
      const { SupabaseUserService } = await import('@/services/supabaseUserService');
      const result = await SupabaseAuthService.verifyOTP(phoneNumber, code);

      if (result.success && result.user) {
        const pendingRegData = localStorage.getItem("pendingRegistration");

        if (pendingRegData) {
          const { fullName, email } = JSON.parse(pendingRegData);
          
          // Complete the registration by updating the profile
          await SupabaseUserService.completeRegistration(result.user.id, {
            full_name: fullName,
            email: email,
            has_paid: true,
            payment_date: new Date().toISOString(),
          });
          
          localStorage.removeItem("pendingRegistration");
        }

        // Store basic auth state
        localStorage.setItem("userAuthenticated", "true");
        localStorage.setItem("userId", result.user.id);
        
        // Redirect user to the course modules
        window.location.href = "/modules";

      } else {
        setError(result.error || "Invalid verification code");
      }
    } catch (err) {
      console.error("Error verifying OTP:", err);
      setError("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Head>
        <title>Sign In | Live Like a Winner</title>
        <meta name="description" content="Sign in to continue your learning journey" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen bg-gradient-to-b from-background to-secondary">
        <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="container flex h-20 items-center justify-between">
            <Link href="/" className="flex items-center gap-4 hover:opacity-80 transition-opacity">
              <Image 
                src="/LLAWLOGO.png" 
                alt="Live Like a Winner Logo" 
                width={60} 
                height={60}
                className="rounded-lg"
              />
              <div className="flex flex-col">
                <h1 className="text-lg font-bold leading-tight">Live Like a Winner</h1>
                <p className="text-sm text-muted-foreground">Indian Institute of Professional Skills Development</p>
              </div>
            </Link>
            <Link href="/">
              <Button variant="ghost" size="sm">
                <Home className="w-4 h-4 mr-2" />
                Home
              </Button>
            </Link>
          </div>
        </header>

        <main className="container py-12 flex items-center justify-center min-h-[calc(100vh-12rem)]">
          <Card className="w-full max-w-md">
            <CardHeader>
              <div className="flex items-center gap-2 mb-2">
                <LogIn className="w-6 h-6 text-primary" />
                <CardTitle>Sign In</CardTitle>
              </div>
              <CardDescription>
                {!codeSent 
                  ? "Enter your phone number to receive a verification code"
                  : "Enter the 6-digit code sent to your phone"}
              </CardDescription>
            </CardHeader>
            <CardContent>
              {error && (
                <Alert className="mb-6 border-red-500/50 bg-red-500/10">
                  <AlertDescription className="text-red-900 dark:text-red-100">
                    {error}
                  </AlertDescription>
                </Alert>
              )}

              {!codeSent ? (
                <form onSubmit={handleSendCode} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+91 98765 43210"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      required
                      disabled={loading}
                    />
                    <p className="text-xs text-muted-foreground">
                      Include country code (e.g., +91 for India)
                    </p>
                  </div>
                  <Button type="submit" className="w-full" disabled={loading}>
                    {loading ? "Sending..." : "Send Verification Code"}
                  </Button>
                </form>
              ) : (
                <form onSubmit={handleVerifyCode} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="code">Verification Code</Label>
                    <Input
                      id="code"
                      type="text"
                      placeholder="Enter 6-digit code"
                      value={code}
                      onChange={(e) => setCode(e.target.value.replace(/\D/g, ''))}
                      required
                      maxLength={6}
                      disabled={loading}
                    />
                    <p className="text-sm text-muted-foreground">
                      Code sent to {phoneNumber}
                    </p>
                  </div>
                  <Button type="submit" className="w-full" disabled={loading}>
                    {loading ? "Verifying..." : "Verify & Sign In"}
                  </Button>
                  <Button 
                    type="button" 
                    variant="ghost" 
                    className="w-full"
                    onClick={() => {
                      setCodeSent(false);
                      setCode("");
                      setError("");
                    }}
                    disabled={loading}
                  >
                    Change Phone Number
                  </Button>
                </form>
              )}

              <div className="mt-6 text-center">
                <p className="text-sm text-muted-foreground">
                  Don&apos;t have an account?{" "}
                  <Link href="/checkout" className="text-primary hover:underline font-semibold">
                    Purchase the course
                  </Link>
                </p>
              </div>
            </CardContent>
          </Card>
        </main>

        <footer className="border-t py-8 bg-background">
          <div className="container flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © 2025 Indian Institute of Professional Skills Development. All rights reserved.
            </p>
            <Link href="/admin">
              <Button variant="ghost" size="sm">
                Admin
              </Button>
            </Link>
          </div>
        </footer>
      </div>
    </>
  );
}
