
import React from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { 
  Home, 
  BookOpen, 
  Download,
  FileText,
  Award,
  Lock
} from "lucide-react";

export default function ResourcesPage() {
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);
  const [hasPaid, setHasPaid] = React.useState(false);

  React.useEffect(() => {
    const authStatus = localStorage.getItem("userAuthenticated");
    const paymentStatus = localStorage.getItem("userHasPaid");
    
    setIsAuthenticated(authStatus === "true");
    setHasPaid(paymentStatus === "true");
  }, []);

  return (
    <>
      <Head>
        <title>Course Resources & Downloads | Live Like a Winner</title>
        <meta name="description" content="Access your course materials and downloadable resources" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen bg-gradient-to-b from-background to-secondary">
        <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
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
                <p className="text-sm text-muted-foreground">Resources & Downloads</p>
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
              <h1 className="text-3xl font-bold mb-2">Course Resources</h1>
              <p className="text-muted-foreground">
                Download course materials and supplementary content
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <BookOpen className="w-5 h-5 text-primary" />
                    <CardTitle>Sample Chapter</CardTitle>
                  </div>
                  <CardDescription>
                    Free download - Chapter One: The Living Wave
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    Download the first chapter as a PDF to read offline or share with friends.
                  </p>
                  <a 
                    href="/ebooks/sample-chapter-one.pdf" 
                    download
                    className="inline-block w-full"
                  >
                    <Button className="w-full" size="lg">
                      <Download className="w-4 h-4 mr-2" />
                      Download Sample Chapter
                    </Button>
                  </a>
                </CardContent>
              </Card>

              <Card className={!hasPaid ? "opacity-60" : ""}>
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <FileText className="w-5 h-5 text-primary" />
                    <CardTitle className="flex items-center gap-2">
                      Full Ebook
                      {!hasPaid && <Lock className="w-4 h-4 text-muted-foreground" />}
                    </CardTitle>
                  </div>
                  <CardDescription>
                    Complete "Live Like a Winner" book
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {hasPaid ? (
                    <>
                      <p className="text-sm text-muted-foreground">
                        Download the complete ebook with all chapters and interludes.
                      </p>
                      <a 
                        href="/ebooks/live-like-a-winner-full.pdf" 
                        download
                        className="inline-block w-full"
                      >
                        <Button className="w-full" size="lg">
                          <Download className="w-4 h-4 mr-2" />
                          Download Full Ebook
                        </Button>
                      </a>
                    </>
                  ) : (
                    <>
                      <Alert>
                        <Lock className="h-5 w-5" />
                        <AlertDescription>
                          This resource is available after course purchase. Complete your payment to unlock the full ebook.
                        </AlertDescription>
                      </Alert>
                      <Link href="/checkout" className="inline-block w-full">
                        <Button variant="outline" className="w-full" size="lg">
                          Purchase Course - ₹99
                        </Button>
                      </Link>
                    </>
                  )}
                </CardContent>
              </Card>

              <Card className="md:col-span-2">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <Award className="w-5 h-5 text-primary" />
                    <CardTitle>Course Certificate</CardTitle>
                  </div>
                  <CardDescription>
                    Digitally signed certificate from Phil Das
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {isAuthenticated && hasPaid ? (
                    <>
                      <p className="text-sm text-muted-foreground">
                        Complete all chapter tests with 70% or higher to earn your certificate. 
                        Once eligible, your certificate will be available for download.
                      </p>
                      <div className="flex gap-3">
                        <Link href="/modules">
                          <Button variant="outline">
                            <BookOpen className="w-4 h-4 mr-2" />
                            Continue Learning
                          </Button>
                        </Link>
                        <Button disabled>
                          <Download className="w-4 h-4 mr-2" />
                          Certificate (In Progress)
                        </Button>
                      </div>
                    </>
                  ) : (
                    <Alert>
                      <Lock className="h-5 w-5" />
                      <AlertDescription>
                        {!isAuthenticated 
                          ? "Please sign in and complete the course to earn your certificate."
                          : "Complete your payment and all chapter tests to earn your certificate."}
                      </AlertDescription>
                    </Alert>
                  )}
                </CardContent>
              </Card>
            </div>

            <Card className="mt-8 bg-gradient-to-r from-blue-50 to-teal-50 dark:from-blue-950/20 dark:to-teal-950/20 border-blue-200 dark:border-blue-800">
              <CardHeader>
                <CardTitle>Need Help?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <p>
                  <strong>Having trouble downloading?</strong> Make sure pop-ups are enabled in your browser.
                </p>
                <p>
                  <strong>Can&apos;t access paid content?</strong> Ensure you&apos;ve completed your payment and are signed in to your account.
                </p>
                <p>
                  <strong>Questions about the course?</strong> Contact us at support@iiskills.in
                </p>
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
