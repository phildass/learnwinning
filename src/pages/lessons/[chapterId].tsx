
import React from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { 
  Home, 
  BookOpen, 
  ArrowRight,
  ArrowLeft,
  Download,
  CheckCircle
} from "lucide-react";

export default function DynamicLessonPage() {
  const router = useRouter();
  const { chapterId } = router.query;

  // Chapter 1 has full interactive lesson
  const isChapterOne = chapterId === "chapter-1";
  
  // Complete chapters with interactive lessons
  const completeChapters = ["chapter-1", "chapter-4", "chapter-5", "chapter-6", "chapter-7", "chapter-8", "chapter-10-epilogue"];
  const isCompleteChapter = completeChapters.includes(chapterId as string);

  if (router.isFallback) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-background to-secondary">
        <div className="container py-12">
          <p className="text-center">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>{isChapterOne ? "Chapter 1: The Living Wave" : "Course Chapter"} | Live Like a Winner</title>
        <meta name="description" content="Live Like a Winner course content" />
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
                <p className="text-sm text-muted-foreground">Course Lesson</p>
              </div>
            </Link>
            <div className="flex items-center gap-2">
              <Link href="/modules">
                <Button variant="ghost" size="sm">
                  <BookOpen className="w-4 h-4 mr-2" />
                  Modules
                </Button>
              </Link>
              <Link href="/">
                <Button variant="ghost" size="sm">
                  <Home className="w-4 h-4 mr-2" />
                  Home
                </Button>
              </Link>
            </div>
          </div>
        </header>

        <main className="container py-12">
          <div className="max-w-5xl mx-auto">
            <div className="mb-6">
              <Link href="/modules">
                <Button variant="ghost" size="sm">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Modules
                </Button>
              </Link>
            </div>

            {isChapterOne ? (
              <div className="mb-8">
                <Alert className="border-blue-500/50 bg-blue-500/10">
                  <AlertDescription>
                    <p className="text-sm">
                      <strong>Chapter 1 is available as a full interactive lesson!</strong> Experience the complete learning format with original text, AI summaries, key learnings, and optional tests.
                    </p>
                  </AlertDescription>
                </Alert>
                <div className="mt-6 text-center">
                  <Link href="/lessons/sample">
                    <Button size="lg">
                      <BookOpen className="w-5 h-5 mr-2" />
                      Go to Full Chapter 1 Lesson
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                  </Link>
                </div>
              </div>
            ) : (
              <Card className="border-blue-500/50 bg-gradient-to-br from-white to-blue-50 dark:from-gray-900 dark:to-blue-950/20">
                <CardHeader>
                  <div className="flex items-center justify-center mb-4">
                    <div className="w-16 h-16 rounded-full bg-blue-500/10 flex items-center justify-center">
                      <BookOpen className="w-8 h-8 text-blue-600" />
                    </div>
                  </div>
                  <CardTitle className="text-center text-2xl">Chapter Available in PDF</CardTitle>
                  <CardDescription className="text-center">
                    This chapter is included in the complete course PDF
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <Alert className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-950/20 dark:to-blue-950/20 border-green-200 dark:border-green-800">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <AlertDescription>
                      <p className="font-semibold mb-1">All Content is Accessible!</p>
                      <p className="text-sm">
                        While some chapters have full interactive lessons, ALL chapters (including this one) are available in the complete PDF that comes with your ₹99 purchase. You'll have instant access to read everything.
                      </p>
                    </AlertDescription>
                  </Alert>

                  <div className="bg-gradient-to-r from-teal-50 to-blue-50 dark:from-teal-950/20 dark:to-blue-950/20 rounded-lg p-6 border border-teal-200 dark:border-teal-800">
                    <h3 className="font-semibold mb-4 text-center">What You Can Do Now:</h3>
                    <div className="space-y-3">
                      <Link href="/resources" className="block">
                        <Button className="w-full justify-start h-auto py-4" size="lg">
                          <Download className="w-5 h-5 mr-3 flex-shrink-0" />
                          <div className="text-left">
                            <p className="font-semibold">Download Complete PDF</p>
                            <p className="text-xs">Access all chapters including this one after purchase</p>
                          </div>
                        </Button>
                      </Link>

                      <Link href="/lessons/sample" className="block">
                        <Button className="w-full justify-start h-auto py-4" variant="outline">
                          <BookOpen className="w-5 h-5 mr-3 flex-shrink-0" />
                          <div className="text-left">
                            <p className="font-semibold">Read Chapter 1 (Interactive)</p>
                            <p className="text-xs text-muted-foreground">Free sample with full lesson experience</p>
                          </div>
                        </Button>
                      </Link>

                      <Link href="/modules" className="block">
                        <Button className="w-full justify-start h-auto py-4" variant="outline">
                          <BookOpen className="w-5 h-5 mr-3 flex-shrink-0" />
                          <div className="text-left">
                            <p className="font-semibold">View All Modules</p>
                            <p className="text-xs text-muted-foreground">See complete course structure and summaries</p>
                          </div>
                        </Button>
                      </Link>
                    </div>
                  </div>

                  <Alert>
                    <AlertDescription>
                      <p className="text-sm mb-2">
                        <strong>What You Get with Purchase (₹99):</strong>
                      </p>
                      <ul className="space-y-1 text-sm list-disc ml-4">
                        <li>7 chapters with full interactive lessons (summaries, key learnings, tests)</li>
                        <li>Complete PDF with ALL 10 chapters + epilogue + 9 interludes</li>
                        <li>Lifetime access to all content</li>
                        <li>Certificate upon completion (if you take the tests)</li>
                        <li>Learn at your own pace - read or study interactively</li>
                      </ul>
                    </AlertDescription>
                  </Alert>

                  <div className="pt-4 border-t">
                    <Link href="/checkout" className="block">
                      <Button size="lg" className="w-full bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-700 hover:to-blue-700">
                        <ArrowRight className="w-5 h-5 mr-2" />
                        Purchase Full Course - ₹99
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            )}
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
