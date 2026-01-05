
import React from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { 
  Home, 
  BookOpen, 
  FileText,
  CheckCircle,
  Clock,
  AlertCircle,
  ArrowRight,
  GraduationCap,
  Download
} from "lucide-react";

interface Module {
  id: string;
  number: number;
  title: string;
  status: "complete" | "partial" | "planned";
  wordCount?: number;
  keyTopics?: string[];
  summary?: string;
  parts?: number;
}

interface Interlude {
  id: string;
  number: number;
  title: string;
  placement: string;
  status: "complete" | "planned";
  wordCount?: number;
  topics?: string[];
  summary?: string;
}

const chapters: Module[] = [
  {
    id: "chapter-1",
    number: 1,
    title: "The Living Wave",
    status: "complete",
    wordCount: 3500,
    keyTopics: ["Living Wave concept", "Gratitude as virtue", "Know Thyself", "Living LIKE a winner", "Scorpion & Frog story"],
    summary: "Introduces the Living Wave as an invisible force governing life's trajectory. Explores how we navigate between success (above the line) and failure (below the line), emphasizing gratitude, self-knowledge, and conscious choice."
  },
  {
    id: "chapter-2",
    number: 2,
    title: "Chapter Two",
    status: "planned",
    summary: "Available in full PDF download. This chapter continues the philosophical exploration started in Chapter One."
  },
  {
    id: "chapter-3",
    number: 3,
    title: "Chapter Three",
    status: "planned",
    summary: "Available in full PDF download. This chapter builds upon the foundational concepts before introducing the Four Quadrants framework."
  },
  {
    id: "chapter-4",
    number: 4,
    title: "The Four Quadrants of Life",
    status: "complete",
    wordCount: 1200,
    keyTopics: ["Life stages", "Choices framework", "Human nature", "Deadpool analogy"],
    summary: "Maps life's journey through infancy, youth, middle-age, and old age. Explains how we are products of our choices and explores the philosophy that you don't need to be a hero all the time—just make the right choices at critical moments."
  },
  {
    id: "chapter-5",
    number: 5,
    title: "The Sermon at the Mount",
    status: "complete",
    wordCount: 2000,
    keyTopics: ["Hearsay philosophy", "Cockroach Theory", "Perception vs reality", "Critical thinking"],
    summary: "Svaha's presentation at Mount Carmel College. Explores how we learn through hearsay, the Cockroach Theory of blown-out-of-proportion reactions, and the importance of analytical thinking versus cynicism."
  },
  {
    id: "chapter-6",
    number: 6,
    title: "Live Like a Winner!",
    status: "complete",
    wordCount: 1500,
    keyTopics: ["Old age home tour", "Vanilla life concept", "Grace through gratitude", "Animal souls"],
    summary: "Tour of Svaha's old age home and exploration of the 'vanilla life' metaphor. Discusses how most of life is routine and ordinary, and how gratitude and grace elevate us above the baseline."
  },
  {
    id: "chapter-7",
    number: 7,
    title: "The Old Lady and Her Lost Son",
    status: "complete",
    wordCount: 2500,
    keyTopics: ["Lost son story", "Autism (ASD)", "Family tragedy", "40-year search"],
    summary: "Rukmini Akka's emotional story of losing her autistic son Ramu 40 years ago during a family emergency. Her husband's accident, their struggles, and her continued search for her lost child provide a poignant human dimension to the philosophy."
  },
  {
    id: "chapter-8",
    number: 8,
    title: "'Pataphysics Aur Nikla Hero",
    status: "complete",
    wordCount: 1800,
    keyTopics: ["'Pataphysics philosophy", "Metaphysics vs physics", "Thoughts as metaphysical", "Alfred Jarry", "Life's unpredictability"],
    summary: "Explores 'Pataphysics (philosophy of absurdism) and its connection to life's unpredictability. Discusses the distinction between physical and metaphysical, proposing that thoughts are metaphysical until spoken. Connects absurdism to the Living Wave philosophy."
  },
  {
    id: "chapter-9",
    number: 9,
    title: "Chapter Nine",
    status: "planned",
    summary: "Available in full PDF download. This chapter bridges the philosophical teachings with the scientific reasoning explored in Chapter Ten."
  },
  {
    id: "chapter-10-epilogue",
    number: 10,
    title: "Scientific Reasoning & Epilogue: Ramu Comes Home",
    status: "complete",
    wordCount: 4200,
    keyTopics: [
      "Scientific reasoning",
      "Emotional control",
      "Harvard Study",
      "WISER Model",
      "Quality relationships",
      "Common sense",
      "Thoughts as algorithms",
      "Ramu's 40-year journey",
      "Multiple variables converge",
      "Faith + perseverance",
      "Mother-son reunion",
      "Philosophy manifest"
    ],
    summary: "Combined module: Chapter Ten explores whether scientific reasoning supports the Living Wave theory, introduces the WISER Model, and emphasizes quality relationships. The Epilogue transforms abstract philosophy into visceral reality through Ramu's extraordinary return after 40 years—validating every principle through a miracle that combines faith, perseverance, scientific intervention, and human connection. Svaha's final words—'This is life'—unite all teachings in one transcendent moment."
  }
];

const interludes: Interlude[] = [
  {
    id: "interlude-1",
    number: 1,
    title: "The Fibonacci Sequence",
    placement: "Between Chapter One and Chapter Two",
    status: "complete",
    wordCount: 500,
    topics: ["Mathematical patterns", "Natural order"],
    summary: "Explores mathematical patterns in nature and life's inherent order through the Fibonacci sequence."
  },
  {
    id: "interlude-2",
    number: 2,
    title: "Interlude Two",
    placement: "Between Chapter Two and Chapter Three",
    status: "planned",
    summary: "Available in full PDF download. Narrative break and philosophical story."
  },
  {
    id: "interlude-3",
    number: 3,
    title: "Interlude Three",
    placement: "Between Chapter Three and Chapter Four",
    status: "planned",
    summary: "Available in full PDF download. Narrative break and philosophical story."
  },
  {
    id: "interlude-4",
    number: 4,
    title: "Interlude Four",
    placement: "Between Chapter Four and Chapter Five",
    status: "planned",
    summary: "Available in full PDF download. Narrative break and philosophical story."
  },
  {
    id: "interlude-5",
    number: 5,
    title: "Interlude Five",
    placement: "Between Chapter Five and Chapter Six",
    status: "planned",
    summary: "Available in full PDF download. Narrative break and philosophical story."
  },
  {
    id: "interlude-6",
    number: 6,
    title: "Interlude Six",
    placement: "Between Chapter Six and Chapter Seven",
    status: "planned",
    summary: "Available in full PDF download. Narrative break and philosophical story."
  },
  {
    id: "interlude-7",
    number: 7,
    title: "Interlude Seven",
    placement: "Between Chapter Seven and Chapter Eight",
    status: "planned",
    summary: "Available in full PDF download. Narrative break and philosophical story."
  },
  {
    id: "interlude-8",
    number: 8,
    title: "The Romance of the Masai Mara",
    placement: "After Chapter Eight",
    status: "complete",
    wordCount: 600,
    topics: ["Animal migration", "Great Migration", "Life's journey", "Survival & perseverance"],
    summary: "Describes the incredible Bar-tailed Godwit's non-stop migration and the Great Migration of the Masai Mara. Uses natural world examples to illustrate life's journey, challenges, and the importance of following seasons of opportunity."
  },
  {
    id: "interlude-9",
    number: 9,
    title: "Interlude Nine",
    placement: "Between Chapter Nine and Chapter Ten",
    status: "planned",
    summary: "Available in full PDF download. Narrative break and philosophical story before the final chapter."
  }
];

const getStatusBadge = (status: "complete" | "partial" | "planned") => {
  switch (status) {
    case "complete":
      return (
        <Badge className="bg-green-500 hover:bg-green-600">
          <CheckCircle className="w-3 h-3 mr-1" />
          Complete
        </Badge>
      );
    case "partial":
      return (
        <Badge className="bg-amber-500 hover:bg-amber-600">
          <Clock className="w-3 h-3 mr-1" />
          Partial
        </Badge>
      );
    case "planned":
      return (
        <Badge className="bg-blue-500 hover:bg-blue-600">
          <Download className="w-3 h-3 mr-1" />
          PDF Available
        </Badge>
      );
  }
};

export default function ModulesPage() {
  const completeChapters = chapters.filter(c => c.status === "complete").length;
  const partialChapters = chapters.filter(c => c.status === "partial").length;
  const plannedChapters = chapters.filter(c => c.status === "planned").length;
  
  const completeInterludes = interludes.filter(i => i.status === "complete").length;
  const plannedInterludes = interludes.filter(i => i.status === "planned").length;

  return (
    <>
      <Head>
        <title>Course Modules & Chapters | Live Like a Winner</title>
        <meta name="description" content="Complete overview of all course chapters and interludes" />
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
                <p className="text-sm text-muted-foreground">Course Modules</p>
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
          <div className="max-w-6xl mx-auto">
            <div className="mb-8">
              <h1 className="text-3xl font-bold mb-2">Course Modules & Chapters</h1>
              <p className="text-muted-foreground">
                All chapters are accessible - read interactive lessons or download the full PDF
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-4 mb-8">
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    Total Chapters
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">{chapters.length}</div>
                  <p className="text-xs text-muted-foreground mt-1">
                    All accessible
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    Interactive Lessons
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-green-600">{completeChapters}</div>
                  <p className="text-xs text-muted-foreground mt-1">
                    Fully interactive
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    PDF Available
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-blue-600">{plannedChapters}</div>
                  <p className="text-xs text-muted-foreground mt-1">
                    Download to read
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    Interludes
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">{interludes.length}</div>
                  <p className="text-xs text-muted-foreground mt-1">
                    {completeInterludes} complete, {plannedInterludes} in PDF
                  </p>
                </CardContent>
              </Card>
            </div>

            <Alert className="mb-6 bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-950/20 dark:to-blue-950/20 border-green-200 dark:border-green-800">
              <CheckCircle className="h-5 w-5 text-green-600" />
              <AlertDescription>
                <p className="font-semibold mb-1">All Chapters Are Accessible!</p>
                <p className="text-sm">
                  <strong>7 chapters</strong> offer full interactive lessons with summaries, key learnings, and optional tests. 
                  <strong> 4 chapters</strong> are available in the complete PDF download (included with your purchase). 
                  You can read ALL content immediately after purchasing for just ₹99.
                </p>
              </AlertDescription>
            </Alert>

            <Tabs defaultValue="chapters" className="space-y-6">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="chapters">
                  <BookOpen className="w-4 h-4 mr-2" />
                  Chapters ({chapters.length})
                </TabsTrigger>
                <TabsTrigger value="interludes">
                  <FileText className="w-4 h-4 mr-2" />
                  Interludes ({interludes.length})
                </TabsTrigger>
              </TabsList>

              <TabsContent value="chapters" className="space-y-4">
                {chapters.map((chapter) => (
                  <Card 
                    key={chapter.id}
                    className={
                      chapter.status === "complete" 
                        ? "border-green-500/50" 
                        : chapter.status === "partial" 
                        ? "border-amber-500/50" 
                        : "border-blue-500/50"
                    }
                  >
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <span className="text-sm font-semibold text-muted-foreground">
                              Chapter {chapter.number}
                            </span>
                            {chapter.parts && (
                              <Badge variant="outline" className="text-xs">
                                {chapter.parts} Parts
                              </Badge>
                            )}
                          </div>
                          <CardTitle className="text-lg">{chapter.title}</CardTitle>
                        </div>
                        {getStatusBadge(chapter.status)}
                      </div>
                      {chapter.wordCount && (
                        <p className="text-sm text-muted-foreground">
                          ~{chapter.wordCount.toLocaleString()} words
                        </p>
                      )}
                    </CardHeader>
                    <CardContent className="space-y-3">
                      {chapter.keyTopics && chapter.keyTopics.length > 0 && (
                        <div>
                          <p className="text-sm font-semibold mb-2">Key Topics:</p>
                          <div className="flex flex-wrap gap-2">
                            {chapter.keyTopics.map((topic, index) => (
                              <Badge key={index} variant="secondary" className="text-xs">
                                {topic}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      )}
                      
                      {chapter.summary && (
                        <div>
                          <p className="text-sm font-semibold mb-1">Summary:</p>
                          <p className="text-sm text-muted-foreground">
                            {chapter.summary}
                          </p>
                        </div>
                      )}

                      <div className="pt-2 flex gap-2">
                        <Link href={`/lessons/${chapter.id}`} className="flex-1">
                          <Button variant="default" size="lg" className="w-full">
                            <BookOpen className="w-4 h-4 mr-2" />
                            {chapter.status === "complete" ? "Read Interactive Lesson" : "View Chapter"}
                          </Button>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>

              <TabsContent value="interludes" className="space-y-4">
                <Alert className="mb-4">
                  <FileText className="h-5 w-5" />
                  <AlertDescription>
                    <strong>Interludes</strong> provide narrative breaks and real-world examples between chapters, enriching the learning experience with stories and analogies. All interludes are accessible either as interactive content or in the full PDF.
                  </AlertDescription>
                </Alert>

                {interludes.map((interlude) => (
                  <Card 
                    key={interlude.id}
                    className={interlude.status === "complete" ? "border-green-500/50" : "border-blue-500/50"}
                  >
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <span className="text-sm font-semibold text-muted-foreground">
                              Interlude {interlude.number}
                            </span>
                          </div>
                          <CardTitle className="text-base">{interlude.title}</CardTitle>
                          <CardDescription className="mt-1">
                            {interlude.placement}
                          </CardDescription>
                        </div>
                        {getStatusBadge(interlude.status)}
                      </div>
                      {interlude.wordCount && (
                        <p className="text-sm text-muted-foreground">
                          ~{interlude.wordCount} words
                        </p>
                      )}
                    </CardHeader>
                    <CardContent className="space-y-3">
                      {interlude.topics && interlude.topics.length > 0 && (
                        <div>
                          <p className="text-sm font-semibold mb-2">Topics:</p>
                          <div className="flex flex-wrap gap-2">
                            {interlude.topics.map((topic, index) => (
                              <Badge key={index} variant="secondary" className="text-xs">
                                {topic}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      )}
                      
                      {interlude.summary && (
                        <div>
                          <p className="text-sm text-muted-foreground">
                            {interlude.summary}
                          </p>
                        </div>
                      )}

                      <div className="pt-2">
                        <Link href="/lessons/sample" className="block">
                          <Button variant="outline" size="lg" className="w-full">
                            <FileText className="w-4 h-4 mr-2" />
                            {interlude.status === "complete" ? "Read Interlude" : "Available in PDF"}
                          </Button>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>
            </Tabs>

            <Card className="mt-8 bg-gradient-to-br from-teal-50 to-blue-50 dark:from-teal-950/20 dark:to-blue-950/20 border-teal-200 dark:border-teal-800">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <GraduationCap className="w-5 h-5" />
                  Ready to Access All Content?
                </CardTitle>
                <CardDescription>
                  Get instant access to 7 interactive lessons + complete PDF with all chapters
                </CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col sm:flex-row gap-4">
                <Link href="/lessons/sample" className="flex-1">
                  <Button variant="outline" className="w-full" size="lg">
                    <BookOpen className="w-4 h-4 mr-2" />
                    Try Free Sample
                  </Button>
                </Link>
                <Link href="/checkout" className="flex-1">
                  <Button className="w-full" size="lg">
                    <ArrowRight className="w-4 h-4 mr-2" />
                    Enroll Now - ₹99
                  </Button>
                </Link>
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
