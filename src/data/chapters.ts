
export interface ChapterContent {
  id: string;
  number: number;
  title: string;
  originalText: string;
  summary: string;
  keyLearnings: string[];
  testQuestions?: TestQuestion[];
}

export interface TestQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

// Chapter data will be populated as you provide the content
export const chapters: Record<string, ChapterContent> = {
  "chapter-1": {
    id: "chapter-1",
    number: 1,
    title: "The Living Wave",
    originalText: `Full chapter text will go here...`,
    summary: "Introduction to the Living Wave concept and how we navigate between success and failure.",
    keyLearnings: [
      "Understanding the Living Wave metaphor",
      "The power of gratitude as the mother of all virtues",
      "Know Thyself - Socratic foundation for success",
      "Living LIKE a winner vs being a winner"
    ],
    testQuestions: [
      {
        id: 1,
        question: "What does Svaha describe the 'Living Wave' as?",
        options: [
          "A physical force that controls our movements",
          "An imaginary line representing the trajectory of life that we navigate",
          "A mathematical equation for success",
          "A religious concept from ancient texts"
        ],
        correctAnswer: 1,
        explanation: "Svaha describes the Living Wave as an imaginary yet real line/wave that represents our life's trajectory."
      }
    ]
  },
  // More chapters will be added here
};

// Helper function to get chapter by ID
export function getChapter(chapterId: string): ChapterContent | undefined {
  return chapters[chapterId];
}

// Helper function to get all chapter IDs
export function getAllChapterIds(): string[] {
  return Object.keys(chapters);
}
