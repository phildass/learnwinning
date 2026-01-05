
import React, { useEffect, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Home, ArrowLeft, CheckCircle2, AlertCircle, Smartphone, Loader2 } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";

interface RegistrationData {
  fullName: string;
  phoneNumber: string;
  email?: string;
  timestamp: number;
}

export default function PaymentPage() {
  const router = useRouter();
  const [registrationData, setRegistrationData] = useState<RegistrationData | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const pendingData = localStorage.getItem("pendingRegistration");
    if (pendingData) {
      try {
        const parsedData: RegistrationData = JSON.parse(pendingData);
        // Expire data after 30 minutes to ensure freshness
        if (Date.now() - parsedData.timestamp > 1000 * 60 * 30) {
          localStorage.removeItem("pendingRegistration");
          alert("Your registration session has expired. Please start over.");
          router.push("/checkout");
        } else {
          setRegistrationData(parsedData);
        }
      } catch (e) {
        console.error("Failed to parse registration data:", e);
        localStorage.removeItem("pendingRegistration");
        router.push("/checkout");
      }
    }
    setIsLoading(false);
  }, [router]);

  return (
    <>
      <Head>
        <title>UPI Payment | Live Like a Winner</title>
        <meta name="description" content="Complete your payment via UPI" />
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
          <div className="max-w-3xl mx-auto">
            <div className="mb-8">
              <Link href="/checkout">
                <Button variant="ghost" size="sm">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Checkout
                </Button>
              </Link>
            </div>

            <Card>
              <CardHeader className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <Smartphone className="w-8 h-8 text-primary" />
                  </div>
                </div>
                <CardTitle className="text-2xl">Complete Payment via UPI</CardTitle>
                <CardDescription>
                  Scan the QR code below with any UPI app to complete your payment
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <Alert className="border-red-500/50 bg-red-500/10">
                  <AlertCircle className="h-4 w-4 text-red-600" />
                  <AlertDescription className="text-red-900 dark:text-red-100">
                    <strong>Important:</strong> Please read the Privacy Policy and Terms and Conditions before making payment. No refunds or requests will be entertained after payment is made.
                  </AlertDescription>
                </Alert>

                <div className="bg-white p-8 rounded-lg border-2 border-primary/20 flex flex-col items-center">
                  <div className="mb-4">
                    <Image
                      src="/GooglePay_QR.png"
                      alt="UPI Payment QR Code"
                      width={350}
                      height={350}
                      className="rounded-lg"
                    />
                  </div>
                  <p className="text-center text-sm text-muted-foreground mb-2">
                    Scan with any UPI app (Google Pay, PhonePe, Paytm, etc.)
                  </p>
                  <div className="text-center">
                    <p className="text-lg font-semibold">Amount: ₹99</p>
                    <p className="text-sm text-muted-foreground">Payment to: Phil Dass</p>
                  </div>
                </div>

                <div className="border-t pt-6">
                  <h3 className="font-semibold mb-3 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600" />
                    Your Registration Details
                  </h3>
                  <div className="bg-secondary/50 p-4 rounded-lg space-y-2">
                    {isLoading ? (
                      <div className="space-y-3">
                        <Skeleton className="h-5 w-3/4" />
                        <Skeleton className="h-5 w-full" />
                        <Skeleton className="h-5 w-1/2" />
                      </div>
                    ) : registrationData ? (
                      <>
                        <div className="flex justify-between">
                          <span className="text-sm text-muted-foreground">Name:</span>
                          <span className="text-sm font-medium">{registrationData.fullName}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm text-muted-foreground">Phone:</span>
                          <span className="text-sm font-medium">{registrationData.phoneNumber}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm text-muted-foreground">Amount:</span>
                          <span className="text-sm font-medium text-primary">₹99</span>
                        </div>
                      </>
                    ) : (
                      <p className="text-sm text-muted-foreground">No registration data found. Please return to the checkout page.</p>
                    )}
                  </div>
                </div>

                {registrationData && (
                  <Alert>
                    <AlertDescription>
                      <strong>After completing payment:</strong>
                      <ol className="mt-2 ml-4 space-y-1 text-sm list-decimal">
                        <li>You will receive a verification code on {registrationData.phoneNumber} shortly.</li>
                        <li>Proceed to the <Link href="/auth/login" className="text-primary hover:underline font-semibold">Sign In page</Link>.</li>
                        <li>Enter your phone number and the OTP to access the full course.</li>
                      </ol>
                    </AlertDescription>
                  </Alert>
                )}

                <div className="border-t pt-4 space-y-3">
                  <h4 className="font-semibold text-sm">Payment Instructions:</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary">1.</span>
                      <span>Open any UPI app on your smartphone.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">2.</span>
                      <span>Select "Scan QR Code" and scan the code above.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">3.</span>
                      <span>Verify the amount (₹99) and recipient (Phil Dass).</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">4.</span>
                      <span>Complete the payment using your UPI PIN.</span>
                    </li>
                     <li className="flex items-start gap-2">
                      <span className="text-primary">5.</span>
                      <span>After payment, go to the <Link href="/auth/login" className="text-primary hover:underline font-semibold">Sign In page</Link> to verify your number and begin the course.</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800 rounded-lg p-4">
                  <p className="text-sm text-amber-900 dark:text-amber-100 font-medium">
                    ⚠️ Payment Reminder: This payment is final and non-refundable. Make sure you have read and agreed to our terms before proceeding.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>

        <footer className="border-t mt-20 py-8 bg-background">
          <div className="container flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © 2025 Indian Institute of Professional Skills Development. All rights reserved.
            </p>
            <div className="flex gap-4">
              <Link href="/privacy" className="text-sm text-muted-foreground hover:text-foreground">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-sm text-muted-foreground hover:text-foreground">
                Terms & Conditions
              </Link>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
