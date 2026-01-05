import React from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Award, GraduationCap, ArrowRight, Sparkles, CheckCircle, Download } from "lucide-react";
import { ThemeSwitch } from "@/components/ThemeSwitch";

export default function Home() {
  return (
    <>
      <Head>
        <title>Learn to Live Like a Winner | Indian Institute of Professional Skills Development</title>
        <meta name="description" content="Master the art of winning with this engaging self-help course based on the book Live Like a Winner by Phil Das" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-brand-blue/5 via-background to-brand-teal/5">
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
                <p className="text-sm text-muted-foreground">Indian Institute of Professional Skills Development</p>
              </div>
            </Link>
            <div className="flex items-center gap-2">
              <Link href="/modules">
                <Button variant="ghost" size="sm">
                  <BookOpen className="w-4 h-4 mr-2" />
                  <span className="hidden sm:inline">Modules</span>
                </Button>
              </Link>
              <ThemeSwitch />
            </div>
          </div>
        </header>

        <main className="container py-12 md:py-20">
          <section className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div className="space-y-6 order-2 md:order-1">
              <div className="inline-block">
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-brand-blue/10 to-brand-teal/10 border border-brand-blue/20 text-sm font-medium">
                  <Sparkles className="w-4 h-4 text-brand-blue" />
                  Entertainment Meets Education
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
                Welcome to a Course with{" "}
                <span className="bg-gradient-to-r from-brand-blue to-brand-teal bg-clip-text text-transparent">
                  Entertainment
                </span>
              </h2>
              <p className="text-xl md:text-2xl text-muted-foreground">
                Read the book or learn as you go
              </p>
              <h3 className="text-2xl md:text-3xl font-semibold bg-gradient-to-r from-brand-blue to-brand-teal bg-clip-text text-transparent">
                How to Live Like a Winner
              </h3>
              <div className="flex flex-col gap-4 pt-4">
                <div className="flex items-baseline gap-3">
                  <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-brand-blue to-brand-teal bg-clip-text text-transparent">
                    ₹99
                  </div>
                  <div className="text-lg text-muted-foreground">
                    One-time payment
                  </div>
                </div>
                <p className="text-base text-muted-foreground">
                  Get entertained and gain the wisdom to be a winner
                </p>
              </div>
              <div className="bg-gradient-to-r from-brand-blue/10 to-brand-teal/10 border border-brand-teal/20 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <Award className="w-6 h-6 text-brand-teal flex-shrink-0 mt-1" />
                  <p className="text-sm">
                    You will receive a <span className="font-semibold text-brand-blue">certificate of completion</span> from the author (Digitally Signed by Phil Das)
                  </p>
                </div>
              </div>
            </div>

            <div className="order-1 md:order-2 relative">
              <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/20 to-brand-teal/20 rounded-3xl blur-3xl" />
              <div className="relative rounded-3xl overflow-hidden border-4 border-white shadow-2xl transform hover:scale-105 transition-transform duration-300 bg-white">
                <Image 
                  src="/winner.png" 
                  alt="You Did It - Winner Certificate" 
                  width={800}
                  height={800}
                  className="w-full h-auto"
                  priority
                />
              </div>
            </div>
          </section>

          <section className="grid md:grid-cols-2 gap-8 mb-16">
            <Card className="hover:shadow-2xl transition-all duration-300 border-2 hover:border-brand-blue/50 bg-gradient-to-br from-white to-brand-blue/5 flex flex-col">
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <BookOpen className="w-6 h-6 text-brand-blue" />
                  <CardTitle className="text-2xl">The Book</CardTitle>
                </div>
                <CardDescription className="text-base leading-relaxed text-foreground/80">
                  Live Like a Winner presents a thoughtful self-help philosophy rooted in the "Living Wave" metaphor.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3 text-sm leading-relaxed flex-1">
                <p>
                  Through conversations with Svaha, the wise founder of an old-age home, explore complex ideas via accessible frameworks like the "ABC of Life" and "Four Quadrants."
                </p>
                <p>
                  Svaha argues that life's metaphysical elements and choices govern success, allowing us to "ride the wave" above ordinary life.
                </p>
                <p>
                  The narrative balances abstract theory with human stories, notably Rukmini's search for her lost son—a compelling test of faith and destiny.
                </p>
                <div className="bg-gradient-to-r from-brand-teal/10 to-brand-blue/10 rounded-lg p-4 border border-brand-teal/20 mt-4">
                  <p className="font-semibold text-brand-blue text-sm">
                    An original blend of philosophy, psychology, and cultural wisdom, urging conscious choice, gratitude, and daily self-improvement.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-2xl transition-all duration-300 border-2 hover:border-brand-teal/50 bg-gradient-to-br from-white to-brand-teal/5 flex flex-col">
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <GraduationCap className="w-6 h-6 text-brand-teal" />
                  <CardTitle className="text-2xl">Course Features</CardTitle>
                </div>
                <CardDescription className="text-base leading-relaxed text-foreground/80">
                  A comprehensive learning experience designed to transform your understanding and application.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3 text-sm leading-relaxed flex-1">
                <p>
                  AI-powered summaries extract key learnings from each chapter, making complex philosophical concepts easy to understand and apply.
                </p>
                <p>
                  Interactive assessments reinforce learning and track progress. Tests are optional—skip them to just read, but required for certification.
                </p>
                <p>
                  Choose your path: read like traditional literature, or engage with guided lessons and interactive content that adapts to your style.
                </p>
                <div className="bg-gradient-to-r from-brand-blue/10 to-brand-teal/10 rounded-lg p-4 border border-brand-blue/20 mt-4">
                  <p className="font-semibold text-brand-teal text-sm">
                    Earn an official certificate from IIPSD, digitally signed by Phil Das. Unlimited lifetime access at your own pace.
                  </p>
                </div>
              </CardContent>
            </Card>
          </section>

          <section className="text-center space-y-8 bg-gradient-to-r from-brand-blue/10 via-brand-teal/10 to-brand-blue/10 rounded-3xl p-12 border-2 border-brand-blue/20">
            <div className="max-w-2xl mx-auto">
              <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-brand-blue to-brand-teal bg-clip-text text-transparent">
                Sample the First Chapter for Free
              </h3>
              <p className="text-lg text-muted-foreground mb-8">
                Pay only after you feel satisfied with the content
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-3xl mx-auto">
              <Link href="/lessons/sample" className="w-full sm:w-auto">
                <Button 
                  size="lg" 
                  className="w-full sm:w-auto text-lg px-8 py-6 group bg-gradient-to-r from-brand-blue to-brand-teal hover:from-brand-blue-dark hover:to-brand-teal-dark shadow-lg hover:shadow-xl transition-all"
                >
                  Start the First Chapter/Lesson
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>

              <Link href="/checkout" className="w-full sm:w-auto">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="w-full sm:w-auto text-lg px-8 py-6 group border-2 border-brand-teal hover:bg-brand-teal/10 hover:border-brand-teal-dark shadow-lg hover:shadow-xl transition-all"
                >
                  I Want to Do the Full Course
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>

            <div className="mt-12 pt-8 border-t border-brand-teal/20">
              <div className="max-w-3xl mx-auto">
                <div className="bg-gradient-to-br from-white to-brand-blue/5 dark:from-gray-900 dark:to-brand-blue/10 rounded-2xl p-8 border-2 border-brand-blue/30 shadow-xl">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-brand-blue to-brand-teal flex items-center justify-center">
                      <BookOpen className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1 text-left">
                      <h4 className="text-xl font-bold mb-2 text-foreground">
                        Read the Sample Chapter & Discover Why You Should Join
                      </h4>
                      <p className="text-base text-muted-foreground leading-relaxed">
                        Experience Phil Das's unique storytelling and wisdom firsthand. This free sample chapter introduces you to the Living Wave philosophy, Svaha's profound teachings, and the engaging narrative style that makes complex concepts accessible and entertaining.
                      </p>
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4 mb-6">
                    <div className="flex items-start gap-3 text-left">
                      <CheckCircle className="w-5 h-5 text-brand-teal flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-sm text-foreground">Preview the Complete Experience</p>
                        <p className="text-xs text-muted-foreground">Original text, AI summaries, key learnings, and optional test</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 text-left">
                      <CheckCircle className="w-5 h-5 text-brand-teal flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-sm text-foreground">Understand the Philosophy</p>
                        <p className="text-xs text-muted-foreground">Grasp the Living Wave concept and how it applies to your life</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 text-left">
                      <CheckCircle className="w-5 h-5 text-brand-teal flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-sm text-foreground">Engage with the Content</p>
                        <p className="text-xs text-muted-foreground">Interactive lessons designed for both readers and learners</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 text-left">
                      <CheckCircle className="w-5 h-5 text-brand-teal flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-sm text-foreground">Make an Informed Decision</p>
                        <p className="text-xs text-muted-foreground">See exactly what you'll get before investing ₹99</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-brand-blue/5 to-brand-teal/5 rounded-lg p-4 mb-6 border border-brand-blue/20">
                    <p className="text-sm text-center text-muted-foreground italic">
                      "Read the sample chapter and know why you should either buy the ebook or take a lesson. Experience the unique blend of philosophy, storytelling, and practical wisdom that sets this course apart."
                    </p>
                  </div>

                  <a 
                    href="/ebooks/sample-chapter-one.pdf" 
                    download
                    className="inline-block w-full"
                  >
                    <Button 
                      size="lg" 
                      className="w-full bg-gradient-to-r from-brand-blue to-brand-teal hover:from-brand-blue-dark hover:to-brand-teal-dark shadow-lg hover:shadow-xl transition-all group"
                    >
                      <Download className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                      <span className="font-semibold">Download Free Sample Chapter (PDF)</span>
                    </Button>
                  </a>
                  
                  <p className="text-xs text-muted-foreground text-center mt-3">
                    Chapter One: The Living Wave (~3,500 words) • No registration required
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* NEW TEASER SECTION - Choose Your Path */}
          <section className="mt-20 mb-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-brand-blue to-brand-teal bg-clip-text text-transparent">
                Choose Your Learning Path
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Ready to master the art of living like a winner? Pick the path that works best for you.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* Download Full Book Option */}
              <Card className="hover:shadow-2xl transition-all duration-300 border-2 hover:border-brand-blue/50 bg-gradient-to-br from-white to-brand-blue/5 dark:from-gray-900 dark:to-brand-blue/10 flex flex-col">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-brand-blue to-brand-teal flex items-center justify-center mx-auto mb-4">
                    <BookOpen className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl mb-2">Read the Book</CardTitle>
                  <CardDescription className="text-base">
                    Download and read at your own pace
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4 flex-1 flex flex-col">
                  <div className="space-y-3 flex-1">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-brand-blue flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-left">Complete book with all 10 chapters + epilogue</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-brand-blue flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-left">All 9 interludes with real-world stories</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-brand-blue flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-left">Read offline anytime on any device</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-brand-blue flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-left">Traditional reading experience</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-brand-blue flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-left">Full ownership - yours forever</p>
                    </div>
                  </div>
                  
                  <div className="pt-4 border-t">
                    <div className="text-center mb-4">
                      <div className="text-3xl font-bold text-brand-blue">₹99</div>
                      <p className="text-sm text-muted-foreground">One-time payment</p>
                    </div>
                    <Link href="/checkout" className="block">
                      <Button 
                        size="lg" 
                        className="w-full bg-gradient-to-r from-brand-blue to-brand-teal hover:from-brand-blue-dark hover:to-brand-teal-dark"
                      >
                        <Download className="w-5 h-5 mr-2" />
                        Download Full Book
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>

              {/* Enroll for Certificate Lesson Option */}
              <Card className="hover:shadow-2xl transition-all duration-300 border-2 hover:border-brand-teal/50 bg-gradient-to-br from-white to-brand-teal/5 dark:from-gray-900 dark:to-brand-teal/10 flex flex-col relative overflow-hidden">
                <div className="absolute top-4 right-4 z-10">
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-gradient-to-r from-yellow-400 to-orange-400 text-xs font-bold text-white shadow-lg">
                    <Sparkles className="w-3 h-3" />
                    RECOMMENDED
                  </span>
                </div>
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-brand-teal to-brand-blue flex items-center justify-center mx-auto mb-4">
                    <GraduationCap className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl mb-2">Certificate Lesson</CardTitle>
                  <CardDescription className="text-base">
                    Interactive learning with certification
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4 flex-1 flex flex-col">
                  <div className="space-y-3 flex-1">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-brand-teal flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-left">Full book PLUS interactive lessons</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-brand-teal flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-left">AI-powered summaries & key learnings</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-brand-teal flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-left">Comprehension tests after each chapter</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-brand-teal flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-left">Track your progress & understanding</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <Award className="w-5 h-5 text-brand-teal flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-left font-semibold">Earn official IIPSD certificate digitally signed by Phil Das</p>
                    </div>
                  </div>
                  
                  <div className="pt-4 border-t">
                    <div className="text-center mb-4">
                      <div className="text-3xl font-bold text-brand-teal">₹99</div>
                      <p className="text-sm text-muted-foreground">One-time payment • Lifetime access</p>
                    </div>
                    <Link href="/checkout" className="block">
                      <Button 
                        size="lg" 
                        className="w-full bg-gradient-to-r from-brand-teal to-brand-blue hover:from-brand-teal-dark hover:to-brand-blue-dark shadow-lg"
                      >
                        <GraduationCap className="w-5 h-5 mr-2" />
                        Enroll for Certificate Lesson
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Comparison Helper */}
            <div className="mt-12 max-w-3xl mx-auto">
              <Card className="bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-950/20 dark:to-blue-950/20 border-purple-200 dark:border-purple-800">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-purple-600 flex items-center justify-center">
                      <Sparkles className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-lg mb-2">Not sure which path to choose?</h4>
                      <p className="text-sm text-muted-foreground mb-3">
                        <strong>Choose "Read the Book"</strong> if you prefer traditional reading and want quick access to all content without tests.
                      </p>
                      <p className="text-sm text-muted-foreground">
                        <strong>Choose "Certificate Lesson"</strong> if you want an interactive learning experience with guided lessons, progress tracking, and an official certificate to showcase your achievement.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              {/* Sample Chapter Link - Positioned as Third Option */}
              <div className="text-center mt-8">
                <div className="inline-flex items-center gap-3 text-muted-foreground">
                  <div className="h-px w-12 bg-border"></div>
                  <span className="text-sm font-medium">or</span>
                  <div className="h-px w-12 bg-border"></div>
                </div>
                <div className="mt-4">
                  <Link href="/lessons/sample" className="group inline-flex flex-col items-center gap-2 p-4 rounded-xl border-2 border-dashed border-brand-teal/30 hover:border-brand-teal hover:bg-brand-teal/5 transition-all">
                    <div className="flex items-center gap-2">
                      <BookOpen className="w-5 h-5 text-brand-teal group-hover:scale-110 transition-transform" />
                      <span className="text-lg font-semibold text-brand-teal">
                        Choose Sample Chapter and Lesson
                      </span>
                      <ArrowRight className="w-5 h-5 text-brand-teal group-hover:translate-x-1 transition-transform" />
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Preview the complete learning experience before deciding
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </main>

        <footer className="border-t mt-20 py-8 bg-background">
          <div className="container">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-6">
              <p className="text-sm text-muted-foreground">
                © 2025 Indian Institute of Professional Skills Development. All rights reserved.
              </p>
              <div className="flex gap-4">
                <Link href="/privacy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Terms & Conditions
                </Link>
              </div>
            </div>
            <div className="text-center">
              <Link href="/admin">
                <Button variant="ghost" size="sm" className="text-xs text-muted-foreground">
                  Admin
                </Button>
              </Link>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
