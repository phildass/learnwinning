
import React, { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Home, CreditCard, ShieldCheck, AlertCircle, Mail } from "lucide-react";

export default function CheckoutPage() {
  const router = useRouter();
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!fullName.trim() || !phoneNumber.trim()) {
      alert("Please fill in all required fields");
      return;
    }

    // Validate phone number format
    if (!phoneNumber.match(/^\+?[1-9]\d{9,14}$/)) {
      alert("Please enter a valid phone number with country code (e.g., +919876543210)");
      return;
    }

    // Validate email format if provided
    if (email && !email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      alert("Please enter a valid email address");
      return;
    }

    localStorage.setItem("pendingRegistration", JSON.stringify({
      fullName: fullName.trim(),
      phoneNumber: phoneNumber.trim(),
      email: email.trim(),
      timestamp: Date.now()
    }));

    router.push("/payment");
  };

  return (
    <>
      <Head>
        <title>Purchase Course | Live Like a Winner</title>
        <meta name="description" content="Purchase the full Live Like a Winner course" />
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

        <main className="container py-12">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <Link href="/">
                <Button variant="ghost" size="sm">
                  ← Back to Home
                </Button>
              </Link>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <CreditCard className="w-6 h-6 text-primary" />
                    <CardTitle>Course Purchase</CardTitle>
                  </div>
                  <CardDescription>
                    Enter your details to proceed to payment
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Alert className="mb-6 border-amber-500/50 bg-amber-500/10">
                    <AlertCircle className="h-4 w-4 text-amber-600" />
                    <AlertDescription className="text-amber-900 dark:text-amber-100">
                      Payment is processed via UPI only. No refunds will be issued after payment.
                    </AlertDescription>
                  </Alert>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="fullName">Full Name *</Label>
                      <Input
                        id="fullName"
                        type="text"
                        placeholder="Enter your full name"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        required
                      />
                      <p className="text-xs text-muted-foreground">
                        ⚠️ Ensure your name is as it should appear on the certificate. It cannot be changed later.
                      </p>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+91 98765 43210"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        required
                      />
                      <p className="text-xs text-muted-foreground">
                        Include country code (e.g., +91 for India). You will receive a verification code after payment.
                      </p>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="flex items-center gap-2">
                        <Mail className="w-4 h-4" />
                        Email Address (Optional)
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your.email@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                      <p className="text-xs text-muted-foreground">
                        Optional: Receive course updates and certificate via email
                      </p>
                    </div>

                    <Alert className="bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800">
                      <ShieldCheck className="h-4 w-4 text-blue-600" />
                      <AlertDescription className="text-sm">
                        <strong>Auto-Verification:</strong> Your phone number will be automatically verified after successful payment. You'll receive a verification code to access the course.
                      </AlertDescription>
                    </Alert>

                    <div className="border-t pt-4">
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-lg font-semibold">Total Amount</span>
                        <span className="text-2xl font-bold text-primary">₹99</span>
                      </div>
                      <p className="text-xs text-muted-foreground mb-4">
                        Payment will be made directly to Phil Dass via UPI
                      </p>
                      <Button type="submit" className="w-full" size="lg">
                        <ShieldCheck className="w-5 h-5 mr-2" />
                        Proceed to Payment
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>

              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>What You Get</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <p className="text-sm">Complete access to all chapters and interludes</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <p className="text-sm">AI-powered chapter summaries and key learnings</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <p className="text-sm">Interactive tests after each chapter (optional)</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <p className="text-sm">Digitally signed certificate from Phil Das upon completion</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <p className="text-sm">Lifetime access to course materials</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <p className="text-sm">Learn at your own pace—book or lessons</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-red-500/50">
                  <CardHeader>
                    <CardTitle className="text-red-600 dark:text-red-400">Important Notice</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2 text-sm">
                    <p>• Please read our Privacy Policy and Terms and Conditions before making payment</p>
                    <p className="font-semibold">• No refunds or requests will be entertained after payment</p>
                    <p>• Payment is final and non-reversible</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </main>

        <footer className="border-t mt-20 py-8 bg-background">
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
