
import React, { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { 
  Home, 
  BookOpen, 
  FileText, 
  GraduationCap, 
  CheckCircle,
  XCircle,
  ArrowRight,
  Lightbulb,
  Target,
  Award,
  Heart,
  Download
} from "lucide-react";

interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

const testQuestions: Question[] = [
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
    explanation: "Svaha describes the Living Wave as an imaginary yet real line/wave that represents our life's trajectory, which we constantly navigate and try to stay above."
  },
  {
    id: 2,
    question: "According to Svaha, what is the 'mother of all virtues'?",
    options: [
      "Discipline",
      "Hard work",
      "Gratitude",
      "Knowledge"
    ],
    correctAnswer: 2,
    explanation: "Svaha emphasizes that gratitude is the mother of all virtues, as it gives birth to kindness, compassion, humility, patience, and other positive qualities."
  },
  {
    id: 3,
    question: "What is the WISER Model that emotionally intelligent people use?",
    options: [
      "Watch, Integrate, Select, Examine, Reflect",
      "Watch, Interpret, Select, Engage, Reflect",
      "Wait, Interpret, Solve, Execute, Review",
      "Wonder, Imagine, Select, Engage, Respond"
    ],
    correctAnswer: 1,
    explanation: "The WISER Model stands for Watch, Interpret, Select, Engage, and Reflect - a framework for processing feelings and choosing wise actions."
  },
  {
    id: 4,
    question: "What does Svaha say about the scientific basis of the Living Wave?",
    options: [
      "There are definitive scientific facts proving it exists",
      "It's purely astrological",
      "There are no scientific facts, but case studies support aspects; it's more common sense than belief",
      "It's completely unscientific"
    ],
    correctAnswer: 2,
    explanation: "Svaha acknowledges there are no definitive scientific facts, but many studies and case studies support wave theory aspects. He calls it common sense rather than just a belief system."
  },
  {
    id: 5,
    question: "What does Svaha say about fools and their path to success?",
    options: [
      "Fools cannot win",
      "Fools need special training",
      "Even fools can win - everyone has equal opportunity to ride the wave",
      "Fools must follow a different path"
    ],
    correctAnswer: 2,
    explanation: "Svaha emphasizes that even fools can win this race. Everyone has an equal opportunity to ride the wave of success and stay above the line - they just have to make the move."
  }
];

export default function SampleLessonPage() {
  const [activeTab, setActiveTab] = useState("original");
  const [answers, setAnswers] = useState<{ [key: number]: number }>({});
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerChange = (questionId: number, answerIndex: number) => {
    setAnswers(prev => ({ ...prev, [questionId]: answerIndex }));
  };

  const handleSubmitTest = () => {
    let correctCount = 0;
    testQuestions.forEach(q => {
      if (answers[q.id] === q.correctAnswer) {
        correctCount++;
      }
    });
    setScore(correctCount);
    setShowResults(true);
  };

  const handleResetTest = () => {
    setAnswers({});
    setShowResults(false);
    setScore(0);
  };

  const scorePercentage = (score / testQuestions.length) * 100;
  const passed = scorePercentage >= 70;

  return (
    <>
      <Head>
        <title>Sample Lesson: Chapter One & Interlude One | Live Like a Winner</title>
        <meta name="description" content="Free sample lesson from Live Like a Winner course" />
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
                <p className="text-sm text-muted-foreground">Sample Lesson</p>
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
          <div className="max-w-5xl mx-auto">
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-2">
                <BookOpen className="w-6 h-6 text-primary" />
                <h1 className="text-3xl font-bold">Chapter One: The Living Wave</h1>
              </div>
              <p className="text-muted-foreground">
                Free sample lesson including Chapter One and Interlude One
              </p>
            </div>

            <Alert className="mb-6 border-blue-500/50 bg-blue-500/10">
              <Lightbulb className="h-5 w-5 text-blue-600" />
              <AlertDescription>
                <p className="font-semibold mb-1">This is a FREE preview</p>
                <p className="text-sm">
                  Explore the complete lesson with Original Text, Summary, Key Learnings, and a Test. 
                  The full course includes 10 chapters with similar comprehensive lessons.
                </p>
              </AlertDescription>
            </Alert>

            <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="original">
                  <FileText className="w-4 h-4 mr-2" />
                  Original
                </TabsTrigger>
                <TabsTrigger value="summary">
                  <BookOpen className="w-4 h-4 mr-2" />
                  Summary
                </TabsTrigger>
                <TabsTrigger value="lesson">
                  <Target className="w-4 h-4 mr-2" />
                  Lesson
                </TabsTrigger>
                <TabsTrigger value="test">
                  <GraduationCap className="w-4 h-4 mr-2" />
                  Test
                </TabsTrigger>
              </TabsList>

              <TabsContent value="original">
                <Card>
                  <CardHeader>
                    <CardTitle>Original Text</CardTitle>
                    <CardDescription>
                      Chapter One and Interlude One as written by Phil Das
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="prose prose-sm max-w-none dark:prose-invert">
                    <h2 className="text-2xl font-bold mt-0">Chapter One: The Living Wave</h2>
                    
                    <p>
                      There was a din, a cacophony of noises from the neighbourhood. A new building was coming up 
                      some 700 yards away. There was a huge trench dug up for the foundation, which was already and 
                      metal necessitated by the groundwork. From elsewhere came some music that played at some 
                      venue. There were sounds of traffic and a humdrum that persisted all through, but that slowly faded 
                      into the background. And his office, with its large open windows, allowed the din to persist. When I 
                      told him later about the noise, Svaha had laughed out aloud. &quot;I prefer to call it the sound of life.&quot; I 
                      wondered at the thought. But I digress.
                    </p>

                    <p>
                      &quot;What is the living line?&quot; I asked Svaha, &quot;—or is it the wave?&quot; I was a little apprehensive that he 
                      might think I was stupid. I was. But only I knew it. So why tell the world?
                    </p>

                    <p>
                      He looked at me in an amused manner. Not rewarding at all. He looked away and I kept looking at 
                      him, waiting for an answer. Did he smile condescendingly at me?
                    </p>

                    <p>
                      He spoke, looking back at me, &quot;It&apos;s a wave, but you can also depict it as a line from afar.&quot;
                    </p>

                    <p>
                      &quot;It is an imaginary line—?&quot; I asked him seriously. Then I immediately regretted it. It seemed like déjà 
                      vu, when you state the obvious, knowing fully well that the question was unwarranted.
                    </p>

                    <p>
                      &quot;In reality it is abstract, in the abstract it is real.&quot; He replied, laughing out loud.
                    </p>

                    <p>
                      Confounding. I found the statement an oxymoron. It was that kind of a feeling that required a 
                      thesaurus or a dictionary. I looked at him inquiringly.
                    </p>

                    <p>
                      &quot;Yes,&quot; he said, &quot;it is an imaginary line or a wave. But it is as real as our feelings, or emotions. It is real, 
                      and we strive all our lives to live above it. Picture this: if everything above the line is a good feeling—
                      happiness, etc.—then below the line would be sadness and all things negative. We are constantly 
                      trying to stay above the line. Most people live on the line, and there are many who are doomed to 
                      live below the line. Something like accounts: in black or in the red. In our case, we can use red for 
                      below and blue for the above... and the line itself can be grey or black...&quot;
                    </p>

                    <p>
                      I blubbered, &quot;I cannot follow your thought...&quot;
                    </p>

                    <p>
                      &quot;Okay,&quot; he said, &quot;let me lay it down in a clearer way.&quot;
                    </p>

                    <p>I waited patiently.</p>

                    <p>&quot;You&apos;ve heard of the web of lies?&quot;</p>

                    <p>I nodded my head.</p>

                    <p>
                      &quot;Yes, it is easy to understand because the premise and the fact is that once you tell a lie, you have to 
                      tell more lies to hide the truth. Most of us do. Many escape unhurt or with minimal damage; many 
                      others suffer. The web turns into realistic threads or ropes of your own doing that entangle you.&quot;
                    </p>

                    <p>
                      I nodded my head again. It was easy to visualise it. I had been through the experience. I shuddered 
                      thinking of it.
                    </p>

                    <p>
                      &quot;So, you understand that what was done to evade a situation made a difference to that part of life, 
                      but it involved you to burrow deeper into a chasm of lies?&quot;
                    </p>

                    <p>&quot;Indeed, I do,&quot; I replied with confidence.</p>

                    <p>
                      &quot;So, is it difficult to assume there must be a wave, a line that controls our life without us being aware 
                      of it?&quot;
                    </p>

                    <p>&quot;I presume it is a possibility,&quot; I replied with as much truth I could muster.</p>

                    <p>
                      &quot;The imaginary web is to be focused on. What if this web was stretched to form a linear line, a wave, 
                      and that is what we are forced to navigate or ride... instead of lies, we have a whole lot of other 
                      innumerable factors—&quot;
                    </p>

                    <p>&quot;—Such as?&quot; I ventured.</p>

                    <p>
                      &quot;—Such as our genealogy—our genetics—our childhood, education, our family and friends, our 
                      emotions, truth, and lies...&quot;
                    </p>

                    <p>I wondered.</p>

                    <p>&quot;Of course, the lies entangle us, and we flow on, yet because of other threads... other waves...&quot;</p>

                    <p>&quot;Yet some do well...&quot;</p>

                    <p>
                      &quot;Some do well despite their lies, because they are supported by other factors, other elements...&quot;
                    </p>

                    <p>I was sceptical. &quot;But people already know it—&quot;</p>

                    <p>
                      &quot;Yes, many know it but refuse to acknowledge it. The line is a living line. Or a wave. It is something 
                      that ties down to living as we know it. It is powerful as other elements of life.&quot;
                    </p>

                    <p>&quot;—All the elements are real and have a form!&quot; I exclaimed out of exasperation.</p>

                    <p>
                      &quot;—This is as real as magnetism, black holes, black matter... not as real as the elements of earth—fire, 
                      air...&quot;
                    </p>

                    <p>I was beginning to comprehend him ever so slightly. &quot;Ah!&quot; was my response.</p>

                    <p>
                      He continued, &quot;Though it is imaginary, we have to assume it is real. Like a Lakshman Rekha. (This in 
                      reference to a line drawn by mythological Lakshman, Lord Ram&apos;s brother, forbidding Sita not to step 
                      over the line. In general, it refers to any commandment that draws a line between what you can and 
                      can&apos;t do. Rekha can be a line or a boundary.) But in this case, it does not forbid you to cross it. It, in 
                      fact, encourages you to rise above it. In fact, I have termed the line as Ram Rekha.&quot;
                    </p>

                    <p>&quot;Okay,&quot; I mumbled while I tried to follow his train of thought. It seemed like it was in a tunnel.</p>

                    <p>
                      &quot;By the way, there is a place called Ramlekhapur or something similar in the northern part of India. A 
                      lot of temples and a river... it is supposed to be the place where Lord Ram is said to have drawn a line 
                      on the ground—with his bow or an arrow—to show till where his kingdom extended.&quot;
                    </p>

                    <p>&quot;Interesting, there is actually a place like that?&quot; I asked.</p>

                    <p>&quot;Indeed.&quot; He replied. &quot;But let us talk about this wave...&quot;</p>

                    <p>I nodded my head.</p>

                    <p>
                      He was into the topic. &quot;The living wave, as I like to call it, is an omnipresent wave, and this world is 
                      filled with billions of them. Just as the planets move about due to gravitation, we too—this wave, our 
                      life—is controlled by gravitation that cannot be explained. I am not a physics guy or a scientist, but I 
                      dare say that if studies are conducted, we might be able to prove it. But I know one thing for sure—
                      we live a linear life. We count our life in years, and we go from 0 to 100, sometimes less and 
                      sometimes more.&quot;
                    </p>

                    <p>
                      He stopped and looked at me questioningly. I understood him slightly—what he was trying to say, but 
                      it was confusing. I swayed my head unknowingly.
                    </p>

                    <p>
                      He took it as a confirmation that I was in agreement. &quot;I mean gravitation in the spirit of its actions. 
                      Gravitation in the real world is controlled by the polar regions. On the earth itself, we are pulled to 
                      the core by about 9.8 meters per second squared. This living wave has a different gravitational force. 
                      For want of a simpler word, I am using gravitational—in the loosest sense of the word—but what it 
                      attracts is our life, our living.&quot;
                    </p>

                    <p>I was lost again.</p>

                    <p>
                      He looked at me patiently and then continued. &quot;It has a greater pull on the good things in life and has 
                      little swing over those that are beneath the line. So, when you succeed, it is harder for you to 
                      maintain it. And when you despair, you go down, and it is easy to stay down. The force helps you by 
                      not interfering with this segment of you, your life. Let me show you a diagram.&quot;
                    </p>

                    <div className="my-6 flex justify-center">
                      <Image 
                        src="/image1.png" 
                        alt="Living Wave Diagram - Cube representation" 
                        width={400}
                        height={300}
                        className="rounded-lg border"
                      />
                    </div>

                    <p>
                      &quot;The cube is just to give you an idea that the linear life we lead is only because of time. There are a 
                      whole lot of other variables at play that mould our lives. Like laziness, procrastination, indiscipline, 
                      anger, rudeness, etc., can take us down. The same way, hard work, discipline, planning can make us 
                      rise above the line. The thick line is our living line... I refuse to call it the life line, because it can mean 
                      something else. Many argue that life is no longer linear. It is not: That is why the living line is 
                      enclosed in a three-dimensional box, which allows us to see that there are numerous things at play 
                      here. Other than that, it is semantics. Easier to understand.&quot;
                    </p>

                    <p>
                      &quot;So, you mean that we live presumably in a life governed by the routine, the positive and the 
                      negative aspects of life playing like a kind of a pendulum?&quot; I asked, wondering whether I was right.
                    </p>

                    <p>
                      &quot;—Indeed, you are right. On the top side of the line are the positive aspects, and the bottom has the 
                      negative. And the force is like gravity, but it is different for different people. And there might be 
                      similarities too, but in general, if we assume life by this standard, we can evaluate life and map every 
                      life. The good part is, we can help ourselves stay above the living line—&quot;
                    </p>

                    <p>
                      &quot;How do we do it?&quot; I asked, suddenly very intent on knowing more about this new direction. &quot;Is it 
                      possible for us to chart our lives, to be successful... to be happy... always?&quot;
                    </p>

                    <p>
                      The wise old man looked at me, amused, and smiled. &quot;Possible, yes. It is simple, and yet, 
                      complicated.&quot;
                    </p>

                    <p>Damn, I said to myself. There&apos;s always a catch somewhere. But I was eager to know more.</p>

                    <p>
                      &quot;—Let me be clear. The line is not actually a line... it is more like a wave. Don&apos;t think of it just as a 
                      single line wave, but as a wave with multidimensional properties. If you were to see a wave with a lot 
                      of interconnected lines... from a distance... theoretically... it looks like a line, but get closer, and you 
                      will see a million lines acting together, just like the human body is made of atoms, electrons, and 
                      protons—&quot;
                    </p>

                    <p>&quot;That&apos;s chaos!&quot;</p>

                    <p>
                      &quot;It could be. It is for many. There are so many forces working for us to live by the line... the wave. Life 
                      is chaotic when it is not controlled. That is why we have to work on ourselves... our words, our 
                      actions, our nature, our principles... in general, our lives are chaotic.&quot;
                    </p>

                    <p>
                      I pondered what he said as he got up and went to his table and picked up an A4 paper and handed it 
                      to me.
                    </p>

                    <p>I looked at it. It had a figure of a wave in lines.</p>

                    <div className="my-6 flex justify-center">
                      <Image 
                        src="/image2.png" 
                        alt="Living Wave Pattern - Complex wave representation" 
                        width={500}
                        height={300}
                        className="rounded-lg border"
                      />
                    </div>

                    <p>&quot;Is this what our lives look like?&quot; I asked him.</p>

                    <p>
                      &quot;Yes,&quot; He replied and continued, &quot;No life is alike, and that is why no wave is alike. But in their 
                      reactivity, their reaction to stimuli... they are similar.&quot;
                    </p>

                    <p>I could only ruminate on this rationale.</p>

                    <p>Then I had to ask him. &quot;How does one live like a winner?&quot;</p>

                    <p>
                      He contemplated for a while and then said, &quot;Live like a winner. It is there in the statement itself. Like. 
                      That is the key word. It does not mean that you have to be a winner to feel like a winner. We don&apos;t 
                      always win everything. Most of our life is lived on the line. Routine. Ordinary. We are not always 
                      competing. We are not winning elections or a football or cricket match all the time. It happens only a 
                      few times in life. Some are winners all the time. But they live far above the line... such that... that line 
                      becomes the new normal. Like famous film stars like Shah Rukh Khan or an affable prime minister like 
                      Narendra Modi. We have an option to live like winners. We can&apos;t all be famous or keep winning. The 
                      nice part is that we have a commonality with the famous... the rich... we are participants in this life. 
                      We live too. Ordinary to some. Always something special to yourself, to someone close to you. Why 
                      live it in an ordinary way or like a loser? In life, we are all winners, in one way or the other. So, we 
                      have to live like winners. In doing so, we will also be living above the line, we will be riding the 
                      wave... Let that become a new normal for us ordinary folks...&quot;
                    </p>

                    <p>He drifted off with a sigh.</p>

                    <p>I wondered whether he lived like a winner.</p>

                    <p>&quot;Do you live like a winner?&quot;</p>

                    <p>
                      &quot;Of course!&quot; His reply was instantaneous and confident. &quot;Do I appear any other way to you?&quot;
                    </p>

                    <p>I said no.</p>

                    <p>
                      &quot;I am lucky I was born with a silver spoon in my mouth. No hassles anywhere. Some heartaches 
                      during youth and disillusionment in the middle age. But looking back, I have no regrets. I am getting 
                      old, but thankfully I have my senses intact. I live life like that. Every morning, I get up feeling like a 
                      winner.&quot; He smiled widely and continued, &quot;If you wake up alive in the morning, you are already a 
                      winner!!&quot;
                    </p>

                    <p>
                      I nodded in agreement. Perhaps it was an oft-repeated phrase. I had read it somewhere. Perhaps a 
                      WhatsApp forward... But now I could see some sense in it. How lightly we take life in our childhood 
                      and youth! It&apos;s only the old who treasure their lives, their health, their words... A pity that by then 
                      they have passed their prime and make no impact on society... except politicians and film stars...
                    </p>

                    <p>I waited for him to continue.</p>

                    <p>
                      &quot;Accepting yourself, understanding yourself... is the primary route to being a winner. You should be 
                      able to understand the basics of what is required of you if you want to achieve your goals. If you 
                      know what you are capable of. Of course, some have insane desires but are not capable of achieving 
                      them. Some want things that are beyond them and yet will pursue it diligently, with effort, and they 
                      get there... That is the first rule, as Socrates or some other philosopher, has said: Know yourself. I can 
                      add to it. Know the world. Know your limitations. Know the path to your goal... if you don&apos;t know, 
                      don&apos;t want to know... then you are doomed. The first element for every winner is knowledge. Of life 
                      and its unpredictability. I can go on about this factor, but let me talk of virtues that will help one 
                      become a winner.
                    </p>

                    <p>
                      &quot;Gratitude. That&apos;s a number one virtue. And it is rightly said that it is the mother of all virtues. To me, 
                      it makes sense. Because gratitude makes you kinder, more compassionate, more cheerful, more 
                      hopeful, cut some slack for mistakes—in yourself and others—it definitely makes you a better 
                      person. It makes you a winner—&quot; He paused for a moment, getting into the topic and slightly 
                      animated. &quot;Gratitude helps you break from the shackles of entitlement. From ego. It makes us 
                      humble. And recent studies—scientific studies—have shown that humility helps us gain confidence 
                      and an ability to tackle our problems with a calmer mind. When you are thankful, you are being 
                      humble and grateful. Imagine waking up alive in the morning and you are thankful. Religion strives 
                      because it has a large measure of gratitude sprinkled in people, towards their god or gods. And it 
                      works wonders! Gratitude fills you with grace... To many in English, this word says a lot. Anugraha in 
                      Kannada is somewhat acceptable. But in Hindi, you have a whole lot of words used... like sundar, 
                      which actually is beautiful in English. Then there is krupa and daya, which again translated into 
                      English means kindness, which is close. It also means divine favour or kindness. Or Eeshwar Ki Daya 
                      in Hindi.&quot;
                    </p>

                    <p>
                      I heard him in fascination. Indeed, grace was a difficult word to translate into other Indian languages. 
                      But it embraces and encompasses many feelings... was I right? ... or perhaps it should be...
                    </p>

                    <p>
                      And while I pondered on grace, he continued. &quot;Yes, gratitude fills us with grace... compassion... I dare 
                      say that the most graceful persons in the world are those with gratitude in their hearts. And when 
                      you are filled with grace, it gives birth to other virtues—like humility, compassion, kindness, 
                      patience, loving... you name it, it covers all—&quot;
                    </p>

                    <p>&quot;You mean to say, to be a winner, you need only one ingredient? Gratitude—&quot;</p>

                    <p>&quot;You are right!&quot; he said, &quot;Just like you—&quot;</p>

                    <p>
                      We were interrupted by a knock on the door. It was one of the managers, and he had come to clear 
                      the week&apos;s menu. He had to go to the market to buy groceries and other material.
                    </p>

                    <p>
                      After the help had left, Svaha was busy with his accounts book, and he suddenly looked up and said, 
                      &quot;There is another way to prove the existence of the line.&quot;
                    </p>

                    <p>
                      &quot;You do that. You will like what you will find out—&quot; he said, and I nodded in agreement. But before there was a further digression from what I wanted to learn, I asked the question.
                    </p>

                    <p>
                      &quot;What is the living wave?&quot; I asked him, a little apprehensive that he might think I was stupid. I was. But only I knew it. So why tell the world?
                    </p>

                    <p>
                      And he told me, and I was close to understanding him and about the living wave. But I was curious to learn more. Know more.
                    </p>

                    <p>
                      In between our discussion, many intrusions happened. But they were short and quick. And now he was meeting another man, an old man who was a resident of the old age home. The conversation went like this.
                    </p>

                    <p>&quot;Svahaji, you&apos;ve to do something.&quot; He appeared desolate.</p>

                    <p>
                      Svaha smiled and said, &quot;Stay calm, Sirji; everything&apos;s gonna be fine. I will talk to him. But you have to ignore him. He is just having fun and doesn&apos;t mean any harm—&quot;
                    </p>

                    <p>&quot;But it hurts—&quot;</p>

                    <p>Svaha smiled again, but with concern in his eyes. &quot;I will talk to him.&quot;</p>

                    <p>
                      He got up from his chair, walked across the table, and laid his arms around him, whispering something to him, and led him to the door.
                    </p>

                    <p>
                      After the help had left, he turned to me and said, &quot;Daily tamasha (drama) in the old age home. Different people; it takes time for people to adjust... and sometimes, no matter how much time, problems persist—&quot;
                    </p>

                    <p>
                      I nodded my head, and I could see how people could have problems living with strangers. Especially old people.
                    </p>

                    <p>&quot;Tell me,&quot; I said, taking the discussion to our topic, &quot;How come a name like Svaha?&quot;</p>

                    <p>
                      He laughed loudly. &quot;It started out as a joke... when I was out of college, I was witnessing an opening ceremony of a college—where I worked later—and they had the burning pyre—holy fire—and the pujaris (priests) were pouring ghee or fruits or something... They were chanting some hymns or slokas and every time they would end with a Svāhā... And then the bug bit me. I used to end some of my statements with a Svāhā, and some people—my friends and students—would use it whenever I said something profound... or stupid... I don&apos;t know... and later, some people just started me calling that. I guess the college students are to blame... They used to call me Svāhaji... So later, when I started this Foundation, I decided to relinquish my old name, which is Gopalkrishna by the way, and took on Svaha without a surname or anything—&quot;
                    </p>

                    <p>&quot;—Quite interesting! But you know and like the meaning?&quot; I asked him.</p>

                    <p>
                      &quot;I do, I do, and I liked it. It also means that I have the obligation to speak only the truth. Though in daily life, managing this place... so many other tasks, it is difficult to adhere to truthfulness. But I strive...&quot; He drifted off, perhaps thinking of the truth in his words.
                    </p>

                    <p>
                      We sat in silence for some time, and he spoke at length on the Fibonacci numbers and then on the Junkyard fallacy and how religion had a trump card in this, and then his phone buzzed, and he went to answer it.
                    </p>

                    <p>He spoke for a couple of minutes and then he said &quot;bye&quot; and put his cell phone down.</p>

                    <p>&quot;Sorry,&quot; he said and smiled. &quot;That was one of the donors, and he has promised to increase his donations next year...&quot;</p>

                    <p>&quot;That&apos;s very good news.&quot;</p>

                    <p>
                      &quot;It is... it is....&quot; He replied, and the smile indicated his happiness. &quot;Once upon a time I struggled with the funds and it was tough to raise money... but now, it just comes naturally. Goes on to show that those days I was living on the periphery of the wave, and now I am riding the wave...&quot;
                    </p>

                    <p>There it was: the living wave again. I was still sceptical about that.</p>

                    <p>
                      &quot;So, you were gravitationally pulled towards the line... life, and you managed to wrest yourself away from it and move away... upwards—?&quot; I asked him.
                    </p>

                    <p>
                      &quot;Gravitationally? Banish the thought. I must have given you the wrong idea. It is like that, but the power of this line is omnipotent and beyond the laws of physics, beyond any worldly laws. It is a divine thing—&quot;
                    </p>

                    <p>I cut him there.</p>

                    <p>
                      &quot;—You mean, destiny or divine intervention? And then it is a matter of faith... religion. Tell me, do you believe in this... line... this wave... because you are religious?&quot;
                    </p>

                    <p>
                      &quot;I am religious. But I believe in the living line for more... practical reasons. And mark my words, the religious have more reasons for being content than those without.&quot;
                    </p>

                    <p>&quot;How so?&quot;</p>

                    <p>
                      &quot;Any faith... religion—is like a guide map. It is good to have a map... GPS... to lead your way. And in many ways, faith gives you hope, reasons to pray and thank God, when your prayers are answered and... the courage or strength to go on even if they are not. But I am digressing. It is not gravitation that keeps us bound to the ordinary life. It is much more. It is scientific to an extent. It is like dark matter in space. We are forced to live by the line because it is as much luck as it is in our genetics.&quot;
                    </p>

                    <p>&quot;I am still unsure what you mean...?&quot;</p>

                    <p>He was silent as he pondered, perhaps, on the best way to explain to me, the simpleton.</p>

                    <hr className="my-8" />

                    <h2 className="text-2xl font-bold">Chapter Four: The Four Quadrants of Life</h2>
                    
                    <p>
                      Life, he once explained to me, was a journey through four quadrants of a graph.
                    </p>

                    <p>And then he told me.</p>

                    <p>
                      &quot;It&apos;s quite easy to live like a winner. Just like it is easy to lead a healthy life. Do you know that famous quote by Hippocrates? &apos;If someone wishes for good health, one must first ask oneself if he is ready to do away with the reasons for his illness. Only then is it possible to help him.&apos; The same applies to living like a winner. Do away with all that subtracts your living. Live a healthy life. Eat healthy, live healthy. Think good thoughts. Do good deeds. Everything that makes you a better person. We are tethered by the knowledge we gain. But to be good, one does not require knowledge. One can be ignorant of many things, but we know the value of truth. The value of a good deed.&quot;
                    </p>

                    <p>
                      That was the ultimate wisdom that every man possesses and yet, they choose to live life their own way. I thought deeply on this. So true. &quot;We are the choices we make?&quot; I asked him.
                    </p>

                    <p>
                      He replied with a twinkle in his eyes. &quot;We are, to a maximum percentage, an afterthought of our choices. We are also influenced by external forces—like parents, schooling, etc. But in the end, we are a product of the choices we make.&quot;
                    </p>

                    <p>
                      &quot;So, it means that we are bound by our whims and fancies, and these in fact control our ability to live like a winner?&quot; I asked him.
                    </p>

                    <p>
                      He was silent as he pondered on my question. &quot;Have you seen the movie, Deadpool?&quot;
                    </p>

                    <p>I shook my head. &quot;I don&apos;t think so.&quot;</p>

                    <p>
                      &quot;Well, there is a scene where the tin man [Colossus], who is a good guy belonging to the X-Men fraternity, is making a point to Deadpool on why he should be a part of the X-Men. He says: &apos;you don&apos;t have to be a hero all the time. At the most, around 4–5 times in a lifetime.&apos; I am paraphrasing as I don&apos;t recall the exact words. But what impressed me was that this applies to real life, ordinary lives. We are lucky in that, most of us. We have to do the right things only a few times and we can be right forever. Of course, we cannot do wrong things either.&quot;
                    </p>

                    <p>
                      I pondered over it. It was true. Almost 80 per cent of our lives is mundane and ordinary. It was the balance 20% which made us different. And sometimes, or more often, choices we make in that 20 per cent make us what we are.
                    </p>

                    <p>He then changed course and spoke about the four quadrants of life.</p>

                    <p>
                      &quot;Life as we know, as all of us know, is broken into different stages. Infancy, childhood, youth, middle-age, old-age, etc. Whatever people may say and adhere to, there is a simple fact of evolution that we are all slaves of. Like infancy—we are practically helpless. Unlike the deer and those that are born on the plains—they are up and about on their feet within hours, so that they can run away from their predators. In youth, we are susceptible to fall into the honey trap, and this goes for females too, but to a lesser extent. The youth have their heads in the air, or their noses in the air—there are exceptions of course, as in nature. They can do anything, get away with anything—it is truly said there is no word such as failure in the lexicon of youth—and they fall in love, they live as if there is no tomorrow, they live in a different world. Then there is middle-age and old-age, and we mature a little bit. But as I said before, exceptions exist, and many live their youth long after they cease to be, as some middle-aged folks do.&quot;
                    </p>

                    <p>He trailed off. But I got the gist.</p>

                    <p>
                      Then he handed me a file with papers filed neatly with graphs and notes.
                    </p>

                    <p>&quot;Have a look at the first paper.&quot;</p>

                    <p>It had some etchings in it. It looked like this:</p>

                    <div className="my-6 flex justify-center">
                      <Image 
                        src="/image3.png" 
                        alt="The Four Quadrants of Life - Life stages diagram" 
                        width={500}
                        height={400}
                        className="rounded-lg border"
                      />
                    </div>

                    <p>
                      I looked up at him and he said, &quot;It&apos;s not a rule and there will be... there are exceptions, but generally it is accepted by most people.&quot;
                    </p>

                    <p>
                      I asked him what the quadrants had to do with the wave that supposedly controls our lives.
                    </p>

                    <p>He laughed.</p>

                    <p>
                      &quot;It is not supposedly. I believe it is as real as me... And that is an interesting question. But unlike the soothsayers and religious saints who can predict one&apos;s future, the wave can only give us some clues. If an infant is from a rich family, you realise he or she will have a comfortable life. If he or she is from an educated family, we know he or she will get a proper education. If he is born into a poor family, he will have a hard life. The wave is real here and pertains to hard economic facts—&quot;
                    </p>

                    <p>&quot;—But that is conjecture.&quot;</p>

                    <p>He was silent for a moment and then continued.</p>

                    <p>
                      &quot;True, it is not 100 per cent true, but it is logical to derive this assumption. And we do and all do. There will be lots of hits and misses, and we realise as we grow up. For example, the first 20–24 years are what defines your future. For many it can be 30 or more. Unfortunately, many do not realise it.&quot;
                    </p>

                    <p>
                      I thought about it and I saw an analogy. The wave was very much controllable. It was like steering a wheel or a drive.
                    </p>

                    <p>I said it to Svaha and he was pleased by my thinking.</p>

                    <p>
                      &quot;Yes indeed. It is very much within our control, very much like driving, sailing, or surfing.&quot;
                    </p>

                    <p>He used the watery surface because it was an allegory to his wave theory.</p>

                    <p>
                      &quot;The graph of life is a fact. And we all live the same way. We grow up, work, reproduce, multiply, make homes, make a living, and age... knowing this, living through life makes many people—all people—realise that life has a purpose. To survive, to live, comfortably, and this requires us to follow some norms. Educate ourselves—the best way possible, get employed properly, earn enough to survive and save, form good relationships, have a balance between work and life, between everything that makes up your life. Too much of anything is a bad thing. The greatest pleasure has to have a measure. If people can understand the human genetics and human fallibilities and apply this to living their lives, they would be the winners.&quot;
                    </p>

                    <p>When put across this way, it really seemed so much easily done.</p>

                    <p>&quot;Easily said than done?&quot; The words slipped out of my mouth.</p>

                    <p>
                      &quot;The world agrees with you. That&apos;s why we flounder and flail. Between human genetics and the make-up of our minds, we are irrevocably falling and never landing. Like a cat falling to the ground with buttered toast tied to its back—making it a perpetual revolving machine. We never seem to make the right choices. Therein lies our gullibility. We believe in something and believe it to be true. And even if it is disproved, we cling on to it because it is our truth.&quot;
                    </p>

                    <p>I was getting lost.</p>

                    <p>
                      &quot;Seems like you are digressing...&quot; I pointed out gently to him.
                    </p>

                    <p>
                      &quot;No—I was just ruminating on the reasons why we fail. And the word—digressing—is an apt word to describe our own attitude to life. We digress from our purpose and hence end up tangled in the threads of life.&quot;
                    </p>

                    <hr className="my-8" />

                    <h2 className="text-2xl font-bold">Chapter Five: The Sermon at the Mount</h2>

                    <p>
                      I was there for dinner—in the lawn of the office of the old-age home. I had been called for dinner to celebrate his birthday, and I was very pleased he thought it fit to spend his birthday with me.
                    </p>

                    <p>I told him so, and he replied.</p>

                    <p>&quot;My actual birthday is tomorrow, but this is a good way to usher it in.&quot;</p>

                    <p>I did not mind. The gesture was kind enough.</p>

                    <p>
                      We finished dinner and sat in the lawn chairs while the table we had our dinner at was cleared off by workers in the kitchen. The air was cool around us. The sky was clear of clouds, and the stars twinkled gaily as if celebrating the birthday.
                    </p>

                    <p>&quot;Seems like the stars are here to celebrate your birthday?&quot;</p>

                    <p>
                      Svaha looked at me and then at the skies, and looked back at me, embarrassed at my compliment. He smiled and kept quiet.
                    </p>

                    <p>
                      &quot;It&apos;s quite a splendid night. Seems like all&apos;s well on earth. At least this part,&quot; I said, trying to look beyond the words and picturing the image of my life. My life was boring.
                    </p>

                    <p>We bid goodbye and I was about to leave when he handed me a sheaf of papers.</p>

                    <p>
                      &quot;I will also send you the soft copy by mail... This is the presentation I made at a girls&apos; college—Mount Carmel, I think—some months back. It is about life and pointers on how to make a success of it...&quot;
                    </p>

                    <p>I thanked him and said, &quot;That would be lovely reading. I am sure it will help.&quot;</p>

                    <p>
                      I present his text as he has made it with a few editing changes here and there, but overall, it is Svaha&apos;s words, and any discrepancies are entirely mine.
                    </p>

                    <div className="my-6 p-4 border-l-4 border-primary bg-secondary/30 rounded">
                      <p className="font-semibold mb-2">Svaha&apos;s Presentation at Mount Carmel College</p>
                    </div>

                    <p>
                      Thank you, Mrs Mehta, for your lovely introduction. I don&apos;t know whether I deserve the accolades you heaped on me. I am humbled.
                    </p>

                    <p>
                      Thank you, Principal, Rev Sister Philomena, who has graciously invited me to speak to you all.
                    </p>

                    <p>And a very good afternoon to you all.</p>

                    <p>
                      I see nearly 300 or more girls—or ladies—and I feel very much intimidated. It reminds me of an anecdote. A leading socialite was asked whether he would be willing to speak for half an hour to a thousand ladies of an association. To which he is supposed to have replied, &quot;I would rather spend a thousand hours in prison.&quot;
                    </p>

                    <p>
                      That is of course hearsay. And perhaps not the right anecdote to start this harmonious talk with you. Or perhaps it is. I will get back on this saddle soon enough.
                    </p>

                    <p>
                      I have been given the topic of &apos;Pointers to a happy living.&apos; And that I feel is going a little overboard. But it can be helpful. I wish to give you some pointers that you can adopt to make your life more fulfilling. That is not to say that you will not make your life fulfilling with your other traits. Surely that is logical. But it is a good way to begin if you have some rules to follow—that which has been learned and practised with good results.
                    </p>

                    <p>So here we are to the first one.</p>

                    <h3 className="text-xl font-bold mt-6 mb-3">Hearsay</h3>

                    <p>
                      I started with a risqué anecdote. It could have been in good taste or not, it is left to you. What I wanted you to take in was just the humour. But sometimes it can fall flat. So, the anecdote could have been said at the wrong time or the wrong place. It will lead to a wrong impression—of the teller—that he/she is insensitive or arrogant or a male chauvinist.
                    </p>

                    <p>In my case, I have to tell you that it was meant to be an icebreaker.</p>

                    <p>
                      You are on the verge of taking on life, perhaps you will study further or work or marry and raise a family. You are like the brisk sunny morning, like the dew drop on a peepal tree leaf, reflecting the sun&apos;s light, gleaming with dreams and ambitions: you hold life in your palms!
                    </p>

                    <p>
                      And while confusion and choices will make your decisions that much harder, thank your fates that you are not confused like a shark with a splitting earache. Your confusion is justified and they are confusing because they are many—and they all need to be addressed and resolved as best as they can be, before you move ahead.
                    </p>

                    <p className="font-semibold">Hearsay.</p>

                    <p>All our lives we are moulded by hearsay.</p>

                    <p>
                      From infancy to childhood. We perceive things by sight and sound and touch and other senses. But none more so than by what we hear.
                    </p>

                    <p>Courts dismiss hearsay as nothing concrete.</p>

                    <p>But in real life, it makes for the boon or bane in life.</p>

                    <p>As infants and children, we have a dime a dozen questions for our elders.</p>

                    <p>
                      What is that? Why is that? And so on. Researchers have concluded that by the age of 10 we have asked a million questions or more. It rapidly declines as we grow older till most of us stop asking questions. In reality, it is the other way around—we stop growing when we stop asking questions.
                    </p>

                    <p>
                      We get answers. Sometimes we store it in the recesses of our brain. But the answers in themselves are heard and thereby become hearsay.
                    </p>

                    <p>
                      Some hearsays are based on fact, logic or reality. Some others are just euphemisms of the teller&apos;s understanding of the subject. And not always the reality.
                    </p>

                    <p>So, you learn from all you hear.</p>

                    <p>
                      Suddenly you are older and you realise you know much more than your parents, your elders. So many things you heard have been proven wrong in school.
                    </p>

                    <p>
                      We keep learning from hearsay. Our entire life is based on hearsay. The more we are able to discern the truth from the inconsequential, the better we are helping ourselves live.
                    </p>

                    <p>
                      So, the first thing, or one of the things to do is to develop the ability to distinguish knowledge, hearsay, between that which can help you lead your life productively.
                    </p>

                    <p>That&apos;s learning in some ways. Or most ways.</p>

                    <p>
                      If I am not wrong it was Marcus Aurelius, a Roman Emperor who was also a Stoic philosopher, lived in the first century, who is credited with the thought: &quot;Everything you hear is an opinion, not a fact; everything you see is a perspective, not the truth.&quot;
                    </p>

                    <p>
                      So, the first lesson is to reflect on what you hear and what you see. Do not be cynical. Be analytical. There is a context to almost everything. You need to rationalise, think carefully and arrive at a conjecture. But even that could be far from the truth. So...
                    </p>

                    <h3 className="text-xl font-bold mt-6 mb-3">The Cockroach Theory</h3>

                    <p>
                      Which brings me to an important theory: the Cockroach Theory. I bring up the Cockroach Theory because it has a relation to hearsay, and that can lead to perception, and that in turn, leads to our reaction.
                    </p>

                    <p>
                      You and I are the sum of all the things we hear, see and feel or parts thereof. So, this theory is a reflection of that.
                    </p>

                    <p>
                      When someone sees a cockroach suddenly, (let us presume it is a woman) she shrieks, jumps and runs away. Another person slinks away avoiding to face the roach. There&apos;s a ruckus around and finally one person takes a broom and sweeps away the insect to the doorway from where it flees into the darkness.
                    </p>

                    <p>
                      The cockroach by itself is harmless. It does not bite, claw or threaten your life in any way. True, it might be dirty and a health deterrent. Our reaction to a roach is, most of the time, blown out of proportion. It may be partly because our brains are wired that way. The assumption is that if there is one, there must be many more. We assume and make a hullabaloo out of it. The impression to the onlooker is that it is a life and death situation. It is not. Most of us suffer from katsaridaphobia, a phobia of cockroaches. Perhaps this is one of the reasons why we are discomforted by the appearance of one.
                    </p>

                    <p>
                      The theory has many versions; in economics or the corporate world, it refers to the possibility that when one problem is announced, there must be many more.
                    </p>

                    <p>
                      A famous IT personnel has said that it is the inability of some to not be able to handle a situation with a calm mind.
                    </p>

                    <p>
                      True, I agree on that. But on a personal level, I think the cockroach theory is relevant to all of us, because it shows how things can be blown out of proportion when there is not much proof of them. Modern news is a testament to that theory. I would say the cockroach theory is the fallacy of the undisclosed, supposedly doomsday predictions, arising from or of, a minuscule and indeterminate validation.
                    </p>

                    <p>
                      In a way, this is the corollary of &apos;if there is smoke there has to be a fire somewhere,&apos; and while this can be true some of the time, it is not true all the time. In life, we are faced by the cockroach theory constantly. In the information age where data is the new gold, it can be noxious as well.
                    </p>

                    <p>
                      The answer to the problem is simple. Don&apos;t judge instantly. Don&apos;t be judgmental. Give it time. Weigh all the contextual facts. Reserve your decision. You don&apos;t always have to react. Your silence. Your noncommittal attitude is a reaction.
                    </p>

                    <p>Let me give you some time to churn around the thought in your minds.</p>

                    <p>Let&apos;s analyse another factor that plays a role in defining us.</p>

                    <p className="text-center text-sm text-muted-foreground italic mt-6">
                      (Part 2 to follow)
                    </p>

                    <hr className="my-8" />

                    <h2 className="text-2xl font-bold">Chapter Six: Live Like a Winner!</h2>

                    <p>
                      There were four dormitories with 15 to 20 beds in each of them.
                    </p>

                    <p>
                      Two were for men. The men&apos;s dormitories were filled up and, in the women&apos;s section, more than 50 per cent was vacant.
                    </p>

                    <p>&quot;Seems like women are better off?&quot; I asked Svaha.</p>

                    <p>
                      &quot;It&apos;s life. Men are more independent and stay alone and finally have to come here.&quot;
                    </p>

                    <p>
                      The apartment block was a four-storeyed building with about 16 independent studio apartments for couples and singles. This was for the paying section.
                    </p>

                    <p>
                      &quot;We put even those who are very sick... or when the pandemic struck... We had to move many from the dorms to this block. Even though it is a paid block, there are no hard or fast rules...&quot;
                    </p>

                    <p>&quot;Where do you stay?&quot;</p>

                    <p>
                      &quot;There—&quot; he pointed to a house by the gate. It was a two-bedroom villa-kind of a house with a lawn in front, and it was a single-storeyed building.
                    </p>

                    <p>&quot;Nice,&quot; I said.</p>

                    <p>
                      We went to his home and I saw that it was very spacious and the sitting room had a relaxed atmosphere with large French windows and comfortable seats—there was a seven-seater sofa set in pastel colours and with a cloth covering. No leather. Was this for the heat or because he was a vegan? I asked him.
                    </p>

                    <p>
                      &quot;I am a vegetarian and generally avoid animal products, but I am not a rigid vegan.&quot;
                    </p>

                    <p>
                      &quot;Do you think animals have souls?&quot; I asked him while his housekeeper served us steaming hot filter coffee—from coffee beans from his own plantations.
                    </p>

                    <p>&quot;Do you?&quot; He asked back, making me ponder.</p>

                    <p>&quot;I don&apos;t know, but humans generally assume—&quot;</p>

                    <p>
                      &quot;—Yes, the assumption is that we have souls. And animals do not. But I believe that animals have equal rights while on earth and they might have equal rights in heaven too... By that supposition, animals must have souls too.&quot;
                    </p>

                    <p>
                      I guessed that made sense. But I was more intent on whether I had a soul. Or was I soulless?
                    </p>

                    <p>
                      There was a dining room next to the kitchen, which was quite large with a huge refrigerator. The kitchen was Italian, which was in vogue in the region. Quite luxurious, and I knew from its make that it was British earlier, but the ownership of the company was now Indian.
                    </p>

                    <p>He really fit the bill to a T.</p>

                    <p>
                      He was philanthropic and a humble soul, but he liked the trappings of a wealthy man. Or his wife was behind it all.
                    </p>

                    <p>
                      &quot;It&apos;s all for a show. People give you money because you have money. The house, the car... all are an indication that I can look after myself. People don&apos;t give to you if you are poor. Nobody trusts a poor man. Really, nothing earns trust like wealth!&quot; He said to me, reading my mind correctly that this was what I was thinking. He was very astute, or my questions naturally led to that surmise. We were walking back to his office, and he stopped to chat with the gardener. The old age home was sprinkled with greenery, and in some corners, I could see flowers blooming and swaying in the afternoon breeze.
                    </p>

                    <p>
                      I walked ahead and he caught up with me, and together we went into his office.
                    </p>

                    <p>
                      &quot;That&apos;s the old age home, and you have seen everything... except the cottages behind the dormitories.&quot;
                    </p>

                    <p>
                      &quot;True,&quot; I said. &quot;I have seen your old age home, your home... met some of the residents, and I must say that you are doing a wonderful job.&quot;
                    </p>

                    <p>
                      He smiled and replied, &quot;Thank you, but there are so many other people who take care of the home—admin, cooking, healthcare—&quot;
                    </p>

                    <p>&quot;—You have a clinic here?&quot; I asked with surprise.</p>

                    <p>
                      &quot;No... we have a weekly visit from the local doctor and local nurse. Everybody gets to see them. Monthly once we have specialists coming in—depends on the needs. Usually, we have a cardiologist or a diabetologist as a regular, but sometimes we get others too—like an oncologist or a neurologist...&quot;
                    </p>

                    <p>
                      &quot;That&apos;s good. Medical care of the elderly is a requirement,&quot; I said.
                    </p>

                    <p>
                      &quot;Yes, it is. We have most with cases of high BP and diabetes, and a few who are terminal—with cancer and such—.&quot;
                    </p>

                    <p>
                      I went silent. There was work here. The old age home had to provide for everything.
                    </p>

                    <p>&quot;What do you do about religion... prayers?&quot;</p>

                    <p>
                      &quot;Ah yes, we do have a room, or you can call it a hall... dedicated for that. It can be used by anybody. Any religion, though we have mostly Hindus. There is one Muslim gentleman and two Christians, I think.&quot;
                    </p>

                    <p>&quot;What was that about, the old man with a grievance against another...?&quot;</p>

                    <p>He thought for a while.</p>

                    <p>
                      &quot;Oh, you are referring to Someshwar. He gets his leg pulled by another person here called Raghunath. They are actually in the same dormitory. They have a weird relationship. They are friends, but Raghu is brutal in his comments, and this can give rise to tensions. In some ways, it reminds me of the Bob Dylan poem—&quot;
                    </p>

                    <p>I looked at him with surprise. &quot;—Bob Dylan?&quot;</p>

                    <p>
                      &quot;Yes, something about old men... &apos;Do not go gentle into that good night?&apos; Was that the title? It speaks of people who turn old and go meekly to their graves... or old age. And Raghu is somewhat of a &apos;rager.&apos; He talks loudly and refuses to take anything that is against his principles—and that is almost everything. Someshwar is soft-spoken and rigid about his faith and belief. So, there is some friction... Sometimes I feel it is a good thing. Some other times, it gets irritating.&quot;
                    </p>

                    <p>Dylan Thomas. Really? I wondered.</p>

                    <p>
                      But for an old age home, the poem did seem relevant. (I had later googled it and read the whole poem.)
                    </p>

                    <p>&quot;Who else rages?&quot; I asked him.</p>

                    <p>
                      &quot;Nobody. They are quite content... at least they appear to be... Nobody rages and rants... except Raghu who has an acid tongue.&quot;
                    </p>

                    <p>
                      Then he took me to the kitchen where there were a few men and women, cooking Indian dishes. Rice and rotis—Indian fare—sambhar and some vegetable dishes. It was a vegetarian kitchen.
                    </p>

                    <p>
                      Later, as we sat by the table and the room was packed with nearly 50 people or so, I asked the question, &quot;—We were interrupted when you were explaining to me that gratitude is the only virtue to make you a winner... or live like a winner—&quot;
                    </p>

                    <p>
                      He was silent as one of his workers served us hot rotis and plied some vegetable dishes and the sambhar into the hollow spaces in our steel plates.
                    </p>

                    <p>
                      &quot;It is not the only one virtue, but it is a great beginning. And as they say, &apos;well begun is half done,&apos; so gratitude as a primary emotion—an emotive being—is a good way to start living like a winner. Did I tell you that gratitude fills us with grace?&quot;
                    </p>

                    <p>I replied, &quot;Yes, you did—&quot;</p>

                    <p>
                      &quot;Grace means we live our lives gracefully. That is the ultimate living. We are kinder, more humane, more understanding and more patient—&quot;
                    </p>

                    <p>
                      &quot;So, it means that we have to embrace or imbibe these qualities too... in addition to gratitude?&quot;
                    </p>

                    <p>
                      &quot;In most cases, a grateful human being will naturally get these other qualities. Or it has to have other virtues aid it in our victory.&quot; Svaha replied as he swivelled his chair towards me. There was a knock on the door and a man walked in with a tray. It was ice cream. Vanilla sprinkled with varied nuts. He placed the ice cream on the table, rather the cups, and departed with an empty tray.
                    </p>

                    <p>
                      &quot;Please have,&quot; Svaha motioned with his hands, and he picked up one of the cups and scooped out the ice cream and put it in his mouth. He smacked his lips. I could see that he was enjoying the ice cream. I picked up the cup and followed suit. It was delicious.
                    </p>

                    <p>
                      &quot;Life is like vanilla. In this cup. In the ice cream. The wave we live on... the living wave... that is vanilla. Routine. Ordinary.&quot;
                    </p>

                    <p className="text-center text-sm text-muted-foreground italic mt-6">
                      (Part 2 to follow)
                    </p>

                    <hr className="my-8" />

                    <h2 className="text-2xl font-bold">Chapter Seven: The Old Lady and Her Lost Son</h2>

                    <p>
                      In one of my meetings, later when I had got to know him well, which was a fortnight later, I knocked on his office door and he called out, "Come in."
                    </p>

                    <p>
                      I walked in and saw that an old lady was standing and talking with him.
                    </p>

                    <p>
                      He smiled at me and motioned me to take a chair. I sat down and got out my phone.
                    </p>

                    <p>
                      "This is my cousin sister. Rukmini Akka; she is one of the residents here," he said to me.
                    </p>

                    <p>
                      She did a namaste in Kannada—Namaskara. I replied similar greetings to her as I stood with folded palms. Then I took the chair.
                    </p>

                    <p>
                      She was around 85, I guessed. She was stooped a little and had a walking stick in her hand. She stood just 5 feet and with the stoop, she must have lost another half a foot. She was dressed in a printed cotton saree, which was off-white in colour with a white blouse. Her hair was neatly tied into a bun, and it was all grey. She looked at me and then went back to her conversation with Svaha. I couldn't understand what they were saying as I was paying little attention to them; I was busy answering some text messages on my phone. I was so engrossed in the texting, I never knew when they finished talking. I heard the old woman say bye and I looked up at her. She was saying bye to Svaha. She looked at me and just nodded her head, and I nodded back. Then she walked out of the room.
                    </p>

                    <p>
                      Svaha sighed and took his seat behind the table.
                    </p>

                    <p>
                      "She's a good old lady but very troubled."
                    </p>

                    <p>
                      "Why is that?" I asked curiously.
                    </p>

                    <p>
                      "She will tell you more, I gather—if you meet her and talk to her. But what I can tell you is that she is looking... searching for her son who went missing almost 40 years ago."
                    </p>

                    <p>
                      "40 years ago? That's pretty long back, and the trail must have gone cold! Why now? Sounds intriguing," I said, suddenly very interested in the old lady.
                    </p>

                    <p>
                      "Oh, you'll find the story very interesting. Would you like to meet her? Talk to her?"
                    </p>

                    <p>
                      I said, "Sure." I wondered whether the old woman would be interested in talking to me.
                    </p>

                    <p>
                      "You know a lot of people and perhaps you can help?"
                    </p>

                    <p>
                      "I can try. But first let me know the whole story," I said to him, though I knew there was little I could do.
                    </p>

                    <p>
                      He made a call to her and asked her if she was free to meet me. He said something about me knowing a few government officials in the police and CBI. I smiled at the reference because I had told him in passing that I knew a couple of officers in the government.
                    </p>

                    <p>
                      She agreed to meet me, and we walked out to her cottage.
                    </p>

                    <p>
                      She lived in an independent house which was single-storeyed. It was next to, or behind, the dormitories. There were four cottages, or houses that were built like cottages. Circular and with red tiles. The architect had painstakingly created a house that was spacious, had two bedrooms, a hall, and a kitchen. One bedroom was on the ground floor and there was a bedroom on the first floor. She had a maid too, who lived with her and helped her through her daily walks of life.
                    </p>

                    <p>
                      It was an idyllic scene. A garden spread out before the house. There were no white picket fences. Just some flowering shrubs giving an aura of a fenced area. The door was open, and Svaha knocked and walked in. Though it was warm outside, the interiors of the house seemed cooler. There was no air conditioner, and the fan was whirring in the living room where the old lady now was.
                    </p>

                    <p>
                      She did not get up but I said a Namaskara with folded palms and she reciprocated.
                    </p>

                    <p>
                      "Please sit," she told us in Kannada. She had a faint rural accent, which I later learnt was because her childhood was in a village and schooling had done the rest. She had gone to a city for her college and from there on she had been urbanised, but her accent remained.
                    </p>

                    <p>
                      "Thank you," I said while Svaha told the lady it would be helpful if she told me, as I could also do my bit in searching for her long-lost son.
                    </p>

                    <p>
                      She was silent for a minute or so and then opened her eyes and looked at me in the eye and said, "It's a long story or an old story, or both—but it has got to do with a change that has come through and I have been looking for him—my son—since a year or so..." She drifted off pensively, and I was silent respectfully.
                    </p>

                    <p>
                      Svaha stood up from his sofa, where he had been seated. "Akka (meaning elder sister), you can tell him the entire thing. I have got something to attend to."
                    </p>

                    <p>
                      He looked at me and said, "Come and see me later," and he was out of the door.
                    </p>

                    <p>
                      I watched him go and then looked at the old lady. She asked me whether I wanted anything to drink and I declined. Even then, she beckoned her maid who was in the kitchen to make some lemonade.
                    </p>

                    <p>I waited.</p>

                    <p>
                      "Let me tell you something about myself. I was born in a village near Belagavi—or Belgaum—and though we were well off, we were sent to the local government school. For nothing better to do, I studied up till 10th here... Though I was engaged by the time I was in the eighth grade. My parents wanted to marry me off then only... that was a time when little girls who hit their puberty were thought to be ready for marriage... But I wanted to study and made a ruckus, and they allowed me to continue with the assurance that I was to get married after 10th. I passed out of 10th and as luck could have it, my husband-to-be was away on some long work, and I got admission into a college in Belgaum—I hope I am not boring you?" She said abruptly.
                    </p>

                    <p>
                      I assured her I was not. I was visualising a strong female in the past. She got what she wanted.
                    </p>

                    <p>
                      "Just as I was about to enter the 12th... or PUC II year, this guy was back and I was married off to him. I could not do anything. I thought I would study after marriage too, but that was a pipe dream. There was too much to do. For my husband, my in-laws... It was a joint family with three brothers and three sisters. It was a full house, and it was only when my husband got a job in Harihar... we shifted. By then I had three kids. Two sons and a daughter. The eldest son is in the US and the daughter is married to a defence guy. It is the third child—a son—that I lost when he was around 13."
                    </p>

                    <p>
                      "13 seems quite old... he would have found his way back?" I said, rather defensively.
                    </p>

                    <p>
                      "Ah, you are right. But he was not normal. He was born with swalinateya...—what do they call it?—autism or ASD?"
                    </p>

                    <p>
                      I looked at her with surprise. "Autistic?" This was getting more difficult.
                    </p>

                    <p>
                      "Yes, he was born like that. Physically perfect and mentally not so much. Right from infancy, he needed much attention. He would always be crying. He would always throw tantrums. From infancy to childhood, he was a handful. My other children did not get the attention they deserved... But they were good and normal and did well in studies. By the time he got to be 13, he was okay, manageable, but still required assistance. He did not mind being alone. Other people's company he abhorred. He never went to school, but I did manage to teach him the Kannada language... he picked it up well, but he never could get into a school. There was no school for special needs kids, and when it came, it was too late."
                    </p>

                    <p>
                      I wondered what went on in their little heads. I later learned that many famous personalities had the first level of autism or ASD—Autism Spectrum Disorder—and it had been classified into three levels. The lowest or the first level was when people with this disorder could manage having a fully successful life, albeit with some peculiarities that, over time, became acceptable to people around them. Sheldon, from The Big Bang Theory, was definitely a character based on this disorder! But this guy, her son, must have belonged to the second or third level.
                    </p>

                    <p>
                      "What happened?" I asked curiously.
                    </p>

                    <p>
                      She continued, "We had a tough time during those days. We did not get any support from his family. My father had enough on his hands, but helped with the education of the children. Even my son could go to the US for further studies due to his help, and my daughter's marriage happened because of his generosity."
                    </p>

                    <p>
                      She was lucky to have a supportive family, I thought to myself.
                    </p>

                    <p>
                      "In every other way, we were unlucky. One day, my husband had an accident while riding his bike. He skidded, on a huge road hump that had been put overnight and without any white stripes, etc., and a truck hit him and ran over his leg. He was taken to a local hospital, unconscious, and when I was informed, I ran to the hospital. My first son and daughter also reached the hospital and, in the commotion, I had left my younger son at home without a caretaker."
                    </p>

                    <p>
                      She stopped suddenly and went pensive. Old memories had been stirred up, and like demons, they attacked the soul and mind, like ravenous hyenas finding a dead prey, unhindered by other scavengers. But then, it was a natural emotion for any human. More painful because it had not been resolved. Loose ends are always a bother. They never help complete the picture.
                    </p>

                    <p>
                      I waited and she picked up the conversation, after a while. "My husband was in bad condition. The doctors told us that he needed—his leg—to be amputated... lose a leg from his knees down... His right leg. We had no option but to agree, and his leg was amputated, and he was in bed for more than six months, and he walked with a crutch later. There was less money, and we had to spend much on his recovery..."
                    </p>

                    <p>
                      I could imagine the pain she had been through.
                    </p>

                    <p>
                      "On the day of his—my husband's—accident, this was exactly on Wednesday, the 24th of August in 1983. I remember the date now very clearly. But then, I had forgotten of him. That he was alone at home. It was late at night. I stayed back at the hospital and sent my son and daughter home. We had no phone at home. I did not know of my son."
                    </p>

                    <p>
                      "What was his name?" I asked her because she failed to name her children. Especially him.
                    </p>

                    <p className="text-center text-sm text-muted-foreground italic mt-6">
                      (Part 2 to follow)
                    </p>

                    <hr className="my-8" />

                    <h2 className="text-2xl font-bold">Chapter Eight: &apos;Pataphysics Aur Nikla Hero</h2>

                    <p>
                      &quot;Have you seen or heard of a film called Phata Poster Nikhla Hero, which was released many years ago?&quot; Svaha asked me one day when we were in the midst of a discussion of how living above the wave was consistent or inconsistent with the great philosophies of the world.
                    </p>

                    <p>
                      So, this question about a Hindi potboiler seemed like a digression. I however, decided to humour him.
                    </p>

                    <p>
                      &quot;I have not seen the movie—I read some good reviews and the name is amusing.&quot; It translates to &apos;the poster tore apart and out came the hero.&apos; It was supposed to be a pun.
                    </p>

                    <p>
                      &quot;The name is what we should focus on.&quot; He guffawed loudly at my look. Then he asked me, &quot;Have you heard of &apos;Pataphysics?&quot;
                    </p>

                    <p>I said I had heard of it but nothing more.</p>

                    <p>
                      He went silent for a while before he spoke. &quot;There is a philosophy of absurdism that was popular because it defied all logic. It was called &apos;Pataphysics, or Pataphysique in French, which is an alteration of the word métaphysique (metaphysics). The first known use of the term was in 1934. It is written with an apostrophe before the first &apos;p&apos;. That, in itself, should tell you that it is an absurd theory or philosophy. &apos;Pataphysics satirises nonsense. It is said to be created by the Frenchman, Alfred Jarry. Alfred&apos;s most famous work, Ubu Roi, was a forerunner to his becoming a role model for avant-garde artists. The play playfully scorns the French monarchy and explores themes of chaos and anarchy. Andrew Hugill&apos;s book &apos;Pataphysics is another important book on the subject. Alfred propounded that the world couldn&apos;t be understood in one easy way. Basically, he was making fun of people, the academicians, et al., and their pretentious knowledge who assumed they knew everything.&quot;
                    </p>

                    <p>
                      I thought it was amusing. &quot;Amusing,&quot; I said. &quot;But tell me, why talk of &apos;Pataphysics... does it have anything to do with the living wave?&quot;
                    </p>

                    <p>
                      &quot;Life is a bit absurd in itself and hence the connection,&quot; He replied with a smile.
                    </p>

                    <p>
                      &quot;Yes, I guess so,&quot; I concurred with him, &quot;in parts...&quot;
                    </p>

                    <p>
                      &quot;To understand &apos;Pataphysics is to fail to understand &apos;Pataphysics,&quot; He quoted. And he continued, &quot;It&apos;s a playful philosophy that mocks the conventions of science, religion, and philosophy. It revels in absurdity and paradox, intentionally defying traditional logic and embracing contradictions. It rarely makes sense and therein lies its whole essence. Life can be, sometimes, something like this.&quot;
                    </p>

                    <p>
                      I think I understood him and &apos;Pataphysics to some extent. But I was still dark about most of the topic.
                    </p>

                    <p>Svaha looked at me and laughed.</p>

                    <p>
                      &quot;Your perplexity is like a world—a mirror to rationality. We live in an absurd world but seek logical answers to it. It is like the era has not changed where eminent thinkers of the day believed the universe and everything in it could be explained and understood in a single book. Science does too, in the Theory of Everything. But that&apos;s a fickle dream. That&apos;s why &apos;Pataphysics matters.&quot;
                    </p>

                    <p>I tried to grapple with reality. But he continued.</p>

                    <p>
                      &quot;This brings us to the realm of metaphysics. Perhaps &apos;Pataphysics is a meta-metaphysics that suggests that everything—both physical and metaphysical—is a kind of imagined fiction. True, it makes fun of everything but it does not shield itself from being made fun of. &apos;Pataphysics, it is said, will always be sardonic. It is nonsense...&quot;
                    </p>

                    <p>
                      I finally saw the rational or irrationality of &apos;Pataphysics. It was nonsense.
                    </p>

                    <p>
                      &quot;Do you mean that life is nonsense?&quot; I asked him seriously.
                    </p>

                    <p>He laughed boisterously. I waited.</p>

                    <p>
                      &quot;No, I don&apos;t mean life is nonsense. But the philosophy of &apos;Pataphysics states that unequivocally. And I tend to agree with it, sometimes. Like Murphy&apos;s Law. It has its moments. Wait, I will give you some statements of &apos;Pataphysics...&quot; He picked up his phone and entered something and then a few seconds later he held the phone so I could see what he had searched.
                    </p>

                    <div className="my-6 bg-secondary/30 rounded-lg p-6 border">
                      <p className="font-semibold mb-3">Examples of &apos;Pataphysics Ideas</p>
                      <ul className="list-disc list-inside space-y-2 text-sm">
                        <li>Correct definitions are the same as wrong definitions</li>
                        <li>All religions are equally important and imaginary</li>
                        <li>Chalk is actually cheese</li>
                      </ul>
                    </div>

                    <p>
                      I laughed out loudly. But I understood him clearly now. Murphy&apos;s Law got me to the element. And this was better.
                    </p>

                    <p>
                      He kept his phone down and said to me, &quot;But let&apos;s move forward. What do you understand by metaphysics?&quot;
                    </p>

                    <p>
                      I stared at him, puzzled. I thought I knew the answer, but right now, I was speechless.
                    </p>

                    <p>
                      &quot;Okay, let me break it down for you. Physics refers to everything physical, and metaphysics refers to everything beyond physical things. Superman—or Metaman—is something ahead of the ordinary man...&quot;
                    </p>

                    <p>
                      I wondered then whether I finally understood the Superman of Clark Kent or the Superman of the philosopher.
                    </p>

                    <p>
                      &quot;I overstep my boundaries when I refer to Superman. Let&apos;s come back to the ordinary life and the meta within us.&quot;
                    </p>

                    <p>He seemed to be enjoying himself.</p>

                    <p>I wondered what he was coming to.</p>

                    <p>
                      &quot;Every part of the human body is physical. The arms and legs, to the heart and brain... but wait, we have sight and hearing, which are again electrical signals which are physical in nature, so what part of the human body is metaphysical?&quot;
                    </p>

                    <p>
                      He was silent and waited for me to answer but I was stuck in a blank mind.
                    </p>

                    <p>
                      He cleared his throat and then looking into his papers he articulated, &quot;The Stanford Encyclopedia of Philosophy states that the word &apos;metaphysics&apos; is notoriously hard to define. Elsewhere there is an elaboration of the word: &apos;One might almost say that in the seventeenth century metaphysics began to be a catch-all category, a repository of philosophical problems that could not be otherwise classified as epistemology, logic, ethics or other branches of philosophy.&apos; Wikipedia defines metaphysics as the branch of philosophy that examines the basic structure of reality. It is often characterised as first philosophy, implying that it is more fundamental than other forms of philosophical inquiry.
                    </p>

                    <p>
                      &quot;I would like to propose a new definition. Let us be content with what physics stands for. All physical forms that we are acquainted with: the universe in general and even the black holes within. Those without physical form belong to metaphysics. The simplest example is our thoughts. Imagine, within ourselves, thoughts are metaphysical—only thoughts... without a physical form. When spoken out, words—electrical vibrations that have been converted from metaphysical form to a physical form. Voila! We have formed a connection between the philosophical metaphysics to the physical physics!&quot;
                    </p>

                    <p>
                      I tried to understand him. And to an extent began to understand that metaphysics was a real thing. Because I knew my thoughts were real.
                    </p>

                    <p>
                      &quot;So, then there is much to what ancient philosophers thought about it to what the middle-age thinkers reworded. It is definitely beyond physics. It is ahead of physics. It is metaphysics!&quot;
                    </p>

                    <p>
                      &quot;Isn&apos;t all philosophy metaphysical?&quot; I countered.
                    </p>

                    <p>
                      &quot;Let&apos;s leave that debate to students of philosophy and to the esteemed philosophers. We have to explore what it means to live life as we know it...&quot;
                    </p>

                    <p>
                      I looked askance at him. &quot;Is this another aspect of life... what does it meant to live as a winner?&quot; I looked at him, quizzically.
                    </p>

                    <p>
                      &quot;Yes, you are right.&quot; He looked straight at me and said, &quot;This relates to life as we know it, and why living like a winner is really quite simple.&quot;
                    </p>

                    <p>I did not get that part.</p>

                    <p>He was not influenced by my look at that moment either.</p>

                    <p>
                      &quot;We know for sure that there are two parts to life. The physical and the metaphysical. We understand our thoughts and reactions are responsible for that. To become a winner, we have to conquer our metaphysical part—which could be or is our conscience—and this would unequivocally nudge our physical counterpart towards the right direction.&quot;
                    </p>

                    <p>
                      &quot;But what I think I know of metaphysics is that it alludes to something different, something deeper...&quot; I told him with confusion writ on my face.
                    </p>

                    <p>
                      He was quick to reply. &quot;True, very true. Simply put, metaphysics deals with the nature of existence, truth, and knowledge. According to the world, metaphysics explores the fundamental nature of reality, including the relationship between mind and matter and substance and attribute, and potentiality and actuality. It is a complex and abstract field that seeks the principles and structures of the universe, such as space, time, and causality. The key point is it is an abstract field. I have just rounded it off to conscience—which is not far off the mark...&quot;
                    </p>

                    <p>I could see some sense in his explanation.</p>

                    <p>But why were we discussing metaphysics? I wondered out aloud.</p>

                    <p>
                      &quot;We were actually discussing &apos;Pataphysics and its co-relation to life, and that&apos;s how we ended up discussing metaphysics,&quot; He answered patiently.
                    </p>

                    <p>
                      I tried to review the discussion and thought deeply about the ramifications on the larger goal of riding the wave of life or staying above the line, to becoming winners in the long run.
                    </p>

                    <p>
                      &quot;So life is really unpredictable and there is every chance that we are doomed to fail if we take one wrong step?&quot; I asked him.
                    </p>

                    <p>
                      &quot;Life is unpredictable. But our thoughts and actions need not be. That is where the line or the wave of life gains equilibrium. We get many chances to fail and to succeed. Actually, the chances to success are more than the chances to failure.&quot;
                    </p>

                    <p>I looked at him unsure of what to make of it.</p>

                    <p>
                      &quot;Fools die many times, the valiant die only once.&quot; Have you heard of this adage? It is similar to normal life. Smart people, wise people will make the right choices. Fools will make the wrong ones and they pay for it.&quot;
                    </p>

                    <hr className="my-8" />

                    <h2 className="text-2xl font-bold">Interlude Eight: The Romance of the Masai Mara</h2>
                    
                    <p>
                      A Bar-tailed Godwit recently (2022) is said to have flown 8,435 miles (13,560 km) non-stop from Alaska to Tasmania. The 11-day journey, without rest or food, was tracked by a satellite tag. The Guinness World Records book has recorded this bird flying non-stop, breaking the record for the longest non-stop migration of a bird. What a bird! And what stamina and endurance! But then it is not the only one. Many birds migrate thousands of miles to beat the winter.
                    </p>

                    <p>
                      So do the Monarch butterflies, tiny little things, who fly on their dainty wings from Mexico to Canada!
                    </p>

                    <p>Whales do in the oceans, and animals do too on land.</p>

                    <p>
                      And one of the most magnificent and awe-inspiring scenes of migration is by millions of wildebeest (or gnus), zebras, antelopes, and other herd animals who cross the Serengeti and Masai Mara region. It&apos;s a fascinating scene. So magnificent and large it is, that it&apos;s called the Great Migration, and people from all over the world come here to witness the astounding scenery, especially the river crossing.
                    </p>

                    <p>
                      This migration is actually a continuous, year-long journey of animals migrating through Tanzania and Kenya in a cyclical manner. They follow the seasons. East Africa&apos;s wide wide-open grasslands are the setting for the migration as millions of wildebeest (also known as clowns of Africa!), Burchell&apos;s zebras, antelopes, and other herd animals make the trek from the Serengeti in Tanzania to the Masai Mara in Kenya. While significant numbers into the multi-thousands do clump together, more often there are smaller herds spread throughout a region or multiple regions. All of these herds make the trek with two things in mind: fresh grazing lands and water. And on the way, they multiply.
                    </p>

                    <p>
                      Along the way, many migrating animals become prey to predators including lions, cheetahs, crocodiles, and hyenas. Hundreds of thousands of wildebeest and over 40,000 zebras perish in this tough trek, mainly younger ones. The lions get the pick of the pack, a break from regular buffalo meat.
                    </p>

                    <p>
                      This migration spans some 1,200 miles over two countries. And the migration itself is made up of events that we call life. These events include mating rituals, calving, and the shifting fortunes of the herd, all of which are influenced by the subtle changes in rainfall that occur through the year.
                    </p>

                    <hr className="my-8" />

                    <h2 className="text-2xl font-bold">Chapter Ten: Scientific Reasoning</h2>

                    <p>
                      &quot;Let&apos;s talk about whether there is any scientific reasoning to the wave we are supposed to live above.&quot; I broached on the term again, wanting to know whether there were any laws that governed our living. I wanted a perspective that challenged contemporary thinking: whether it was fate, destiny or karma, God, or anything else.
                    </p>

                    <p>I was meeting him after a break.</p>

                    <p>
                      He looked up from the accounts book he was peering through. His spectacle on his nose was round, like Gandhi used to wear them. &quot;What was that, again?&quot;
                    </p>

                    <p>I repeated my question.</p>

                    <p>
                      He put away the book he was seeing and looked up at me. &quot;Indeed, there are plenty of scientific reasons. I have told you about the chaos theory, absurdism, and the butterfly effect. Let&apos;s take it further. We are actually the after-effects of our moments lived shortly in real time, forever stored in our hippocampus, like hippopotamuses in a placid lake: that makes our life a compendium of moments knitted together like a colourful Christmas sweater: and that is like saying, we are just an overblown moment in time&apos;s confounding and eternal journey to nowhere.
                    </p>

                    <p>
                      Your thoughts are cognitive substances, linear products produced by your hippocampus, stored as an electrical impulse, sub-atomic and invisible to the human eye and beyond the understanding of the material amygdala, but multidimensional in subject matter. Your thought is now a memory, stored forever, retrieved randomly. I am thinking now and it is now a part of this conversation as well as my temporal lobe. Your thoughts are the algorithms that define your life. Think carefully.
                    </p>

                    <p>
                      You can read a million articles and books on making better decisions, avoiding bias, and raising your EQ, but they&apos;ll do you no good if your emotions regularly swamp your ability to think through problems constructively.&quot;
                    </p>

                    <p>I listened to him quietly.</p>

                    <p>
                      &quot;Scientific reasoning is the root of becoming a winner,&quot; He said, and I believed him.
                    </p>

                    <p>
                      &quot;But it has to be backed by strong and controlled emotions,&quot; He continued. &quot;This is a way of saying that good decision making, healthy relationships, and all-around success in life depend on getting your emotions under control.&quot;
                    </p>

                    <p>
                      &quot;So, becoming a winner means that you have to control your emotions? Can your relationship with others also improve?&quot; I asked him politely.
                    </p>

                    <p>
                      &quot;Very true—you have to control your emotions if you want to become a winner. And as to relationships—you have to hear what a study has to say about a happy life. A Harvard Study of Adult Development has concluded that when it comes to living a long and happy life, the quality of your relationships matters most.&quot;
                    </p>

                    <p>
                      &quot;Really? A good relationship is what makes for a good life. Could you then say a quality relationship is a step ahead of scientific relations and emotive control?&quot; I questioned him further.
                    </p>

                    <p>
                      &quot;They are all symbiotic in reality. Scientific reasoning can lead us to better control of our emotions, and this in turn can make us better human beings with quality relationships.&quot;
                    </p>

                    <p>
                      I understood him very well now. But it was still far from my objective of realising whether the wave that we understood to control our lives had any scientific reasoning or realistic formula that could be applied to it.
                    </p>

                    <p>I said so to him.</p>

                    <p>
                      He was pensive for a moment, then replied, &quot;There are no scientific facts associated with the view. There are a vast number of studies and case studies that prove many of the points in the wave theory. But realistically, I have no clear picture of the studies that have been done. An astrological Janam Kundali (Birth Chart) might be the closest relative, but as you know, they can hardly be right in all aspects. It is true that a majority of our human composition is affected by the gravitational pull of celestial objects. But do they really govern your life totally? Debatable. So many factors are an essential part of a man&apos;s life. The organic and the inorganic. Genetics, family, education, friends, aptitude, attitude, challenges, likes and dislikes... the list is long and cannot be numbered and counted as a single element controlling lives.&quot;
                    </p>

                    <p>&quot;So, it is literally a belief system?&quot;</p>

                    <p>
                      &quot;Belief, yes. But that is the important part of life. To believe in something is called faith. It can be hyperbole in some cases. But to subscribe to a belief that can be explained realistically is plain common sense. So, I would call it common sense rather than a belief system.&quot;
                    </p>

                    <p>An answer that had both positive nuances.</p>

                    <p>&quot;Can you tell me more on this,&quot; I persisted.</p>

                    <p>
                      He laughed out loud. &quot;Common sense is very uncommon, and it is better we call it intelligence. I could go further and call it emotional intelligence. For example, In The Good Life, (a book) the writers, Robert Waldinger and Marc Schulz, explain that emotionally intelligent people don&apos;t let their emotions drive their actions. They are said to employ the WISER Model to process their feelings and actively choose a wise course of action. What is the WISER Model? WISER stands for Watch, Interpret, Select, Engage, and Reflect. Basically, it is to think before reacting. I concur with the model.&quot;
                    </p>

                    <p>
                      &quot;So, you would say that this is a part of the wave and not the wave in whole? That, it helps or goes a long way in making us winners?&quot; I asked him seriously.
                    </p>

                    <p>
                      &quot;You said it. It is a part of the wave. An important part. While it would be debatable which is more relevant. Small things matter. Bigger things matter more. So, we should have the ability to understand what is more important and pick that element. For refinement and a purpose.&quot;
                    </p>

                    <p>
                      &quot;What happens to those whose thoughts or common sense—in this case, unintelligence—leads them to make unsavoury decisions?&quot; I asked him, suddenly feeling left out among the many losers.
                    </p>

                    <p>He looked at me with a sage-like air.</p>

                    <p>
                      &quot;For most humans that is always the case. They are unable to make a wise decision. Or even a logical one. In this case, many are apt to take the advice of the wise. That is good. More important is to take the example of successful stories around us and follow that. Follow the people who succeed in life. Follow the system. You are less likely to fail when you have good role models.&quot;
                    </p>

                    <p>&quot;That is quite an answer,&quot; I told him quite sincerely.</p>

                    <p>
                      There it was. I was flabbergasted at the simplicity of the plan. All roads lead to success. To victory. Even fools can win this race. Everyone had an equal opportunity to ride the wave of success. Everyone could stay above the line. They just had to make the move.
                    </p>

                    <hr className="my-8" />

                    <h2 className="text-2xl font-bold">Epilogue: Ramu Comes Home</h2>
                    
                    <p>
                      Between the conversations with Svaha, we had touched upon the subject of Ramu. In the last conversation, he had told me that Rukmini had gone out of town to meet some people in this regard. I decided to catch up with her after she was back.
                    </p>

                    <p>
                      I have tried hard to grasp Svaha&apos;s principles on how to live like a winner, and it seems like a tough job. First comes the acceptance of such a philosophy, and next is to give up the denial of some practices which have become a norm of our daily life. For one, how does one become another person? For, giving up all that I am, at least, most of it, will make me into another person. Perhaps a better person. We need a reward for everything we do and everything we accomplish. Perhaps that will prompt us to live a better life. The reward of becoming a better person is in itself much of a winning of this game we call life.
                    </p>

                    <p>
                      But I thought I should address a concern, and that was to be directed to Svaha. Over all my discussions, there were multiple thoughts on how to live like a winner. It was almost confusing. I said so to him in one of my recent discussions with him.
                    </p>

                    <p>
                      &quot;You speak of so many factors that contribute to an individual living like a winner. The Four Quadrants, the ABC of Life, Gratitude, Hippocrates... it is somewhat confusing. There are too many issues... Too many variables...&quot;
                    </p>

                    <p>
                      He replied nonchalantly, &quot;That is the thing. There are indeed too many variables. We cannot be good at everything. We cannot control all the variables. But accomplishing a few, even one, would make us a winner.&quot;
                    </p>

                    <p>
                      &quot;You are saying that despite so many variables, if we can conquer one of them, we might still lead an accomplished life?&quot;
                    </p>

                    <p>
                      &quot;Yes, indeed. The important thing is to know that there are many factors that can make you successful. Knowledge makes the man a more complete individual. And if that knowledge leads you to control one or more factors, you are the dictator of your life: you can turn it around as you please.&quot;
                    </p>

                    <p>We spoke some more and then I left for home.</p>

                    <p>It was a few weeks later that I received a call from Svaha.</p>

                    <p>He told me excitedly, &quot;Ramu has been found.&quot;</p>

                    <p>I was stunned and happy with the news.</p>

                    <p>
                      I learned later from him and others on how it came about. I had personally talked to a senior official in the police in Bengaluru, and he had come up with a blank. I had put him across to a private investigator who had been hired by the mother. It had been some days and I had lost track of the case. But here it was, right in my face, and I, in some small way, was responsible for the happy ending.
                    </p>

                    <p>
                      The PI, Anita, after painstaking investigation and some bit of serendipity, had zeroed in on Ramu having been through a hospital. Ramu had somehow reached Bengaluru by train. He must have been coaxed into doing this by someone who saw his rolled gold chain as the real thing. He had his head smashed hard and he was shorn of the rolled gold chain around his neck, as well as his card—which had details of his home and address—and left for dead. But some cleaners found him in the train compartment, unconscious. He had been taken to a nearby government hospital, where he was operated upon and stitched up. He had been in the general ward when he was visited by some nuns from a convent in the city. They saw him lying alone, unattended, and, moved by his pathetic condition, offered to take him to their own nursing home. The government hospital, overrun with patients, had agreed quite easily. He was transferred to the nursing home and was treated well and regained consciousness, but his memory was kaput.
                    </p>

                    <p>
                      He did not recall his name or address. But he was correctly diagnosed as suffering from Autism Spectrum Disorder (ASD). He had difficulty in communication, social interactions, and had a repetitive behaviour disorder.
                    </p>

                    <p>
                      As serendipity would have it, a couple from Norway, who were also doctors—the woman being a specialist paediatrician—were visiting the convent and happened to come to the nursing home. They had met Ramu and taken a keen interest in him. They apparently felt that they could get him better treatment in Oslo, and with due permissions from the government, an emergency passport made out to a John Doe, they had taken him by a chartered flight to Oslo.
                    </p>

                    <p>
                      The PI had tracked Ramu to the convent and got the details of the Norwegian couple and their contacts. They had come back to the nursing home with Ramu 10 years later and tried to ascertain his past, but found nothing to help them. The PI had pursued getting in touch with them and found out that he was a Norwegian citizen now and partially cured of his Autism. He was now 55 years old and apparently had no recollection of his past. Until the PI met him personally at Oslo.
                    </p>

                    <p>
                      The mother agreed to send the PI to Oslo to verify whether this guy, called Jakob Anderson, was indeed Ramu. She gave her all the details she had of her son. She revealed that he had a birth mark on his chest—a brown finger-tip sized cluster of pigment cells. They had sent his photographs throughout his growing up and the latest, and the mother was convinced that he was her boy.
                    </p>

                    <p>
                      The PI met Ramu in Oslo and confirmed that he was indeed Ramu. The verification of the birth mark was a crucial part, and it had been proven to exist. But a more important part was whether Ramu or Jakob was keen on meeting his mother and siblings. The PI confirmed that Jakob was overjoyed and eager to meet his mother, though he barely remembered her.
                    </p>

                    <p>He was coming back with the PI.</p>

                    <p>
                      I went to the old age home in the morning, as he was expected to come straight from the airport to meet his mother.
                    </p>

                    <p>
                      I met Svaha and his wife at his house. The mother was there. All jittery and nervous, but absolutely ecstatic with happiness.
                    </p>

                    <p>
                      We received a call from the airport from the PI and later when they were in the car nearing the old age home. We stepped out, all of us, nearly 30 of us including a priest/pujari, to see the cars drive up to the villa.
                    </p>

                    <p>
                      The vehicles stopped. I stood a distance away while the mother rushed up to the first car. The doors opened and out stepped Ramu. He was tall and rugged with long hair. He had a beautiful smile on his clean-shaven face. He looked around and spotted his mother. No introductions were necessary. He seemed to know instinctively that she was his mother. He did not say anything. He reached out with both his arms and enveloped her in a heart-wrenching hug. I could hear her cry loudly, unabashedly. And he was crying too. Softly, and the tears rolled down his cheeks. I couldn&apos;t help brushing away a tear from my eye.
                    </p>

                    <p>The surprises were many.</p>

                    <p>
                      After they had hugged to their heart&apos;s content, Ramu introduced his wife, who was tall and pretty with short red hair. She hugged his mother and kissed her fiercely on her cheeks. Then two kids in their teens stepped out of the other car and were introduced to the mother. They were Ramu&apos;s kids.
                    </p>

                    <p>
                      &quot;This is life,&quot; Svaha whispered to me as he threw both his arms out pointing towards Ramu and his mother, and stretched them out, sweeping to his left and right.
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="summary">
                <Card>
                  <CardHeader>
                    <CardTitle>Module Summary: Chapter Ten & Epilogue</CardTitle>
                    <CardDescription>
                      AI-generated overview of scientific reasoning and the philosophy in action
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 rounded-lg p-6 border border-purple-200 dark:border-purple-800">
                      <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                        <BookOpen className="w-5 h-5 text-primary" />
                        Chapter Ten: Scientific Reasoning - The Foundation
                      </h3>
                      <p className="text-sm leading-relaxed">
                        This chapter bridges philosophy and practical life application. While Svaha acknowledges there are no definitive scientific facts proving the Living Wave theory, he argues it represents &quot;common sense&quot; backed by numerous case studies. The chapter explores:
                      </p>
                      <ul className="list-disc list-inside space-y-1 text-sm mt-3">
                        <li><strong>Memory as Life&apos;s Algorithm:</strong> Our thoughts—stored as electrical impulses in the hippocampus—define our life trajectory</li>
                        <li><strong>Emotional Intelligence vs. Reason:</strong> Scientific reasoning must be backed by controlled emotions to achieve success</li>
                        <li><strong>The WISER Model:</strong> Watch, Interpret, Select, Engage, Reflect - a framework for wise decision-making</li>
                        <li><strong>Quality Relationships:</strong> Harvard&apos;s 80-year study concludes relationships matter most for happiness</li>
                        <li><strong>Success is Universal:</strong> Even fools can win if they follow successful role models and systems</li>
                      </ul>
                    </div>

                    <div className="bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-950/20 dark:to-orange-950/20 rounded-lg p-6 border border-amber-200 dark:border-amber-800">
                      <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                        <Heart className="w-5 h-5 text-red-500" />
                        Epilogue: Ramu Comes Home - Philosophy in Action
                      </h3>
                      <p className="text-sm leading-relaxed mb-3">
                        The epilogue transforms abstract philosophy into visceral reality through Ramu&apos;s extraordinary 40-year journey. Lost at 13 with autism, attacked and left for dead, he was rescued by nuns, adopted by Norwegian doctors, treated in Oslo, and returned as Jakob Anderson—a husband and father who barely remembers his past but instinctively recognizes his mother.
                      </p>
                      <p className="text-sm leading-relaxed font-semibold">
                        This isn&apos;t just a feel-good ending—it&apos;s the Living Wave manifest. Every element converges: faith (the mother&apos;s 40-year belief), perseverance (the PI&apos;s investigation), serendipity (Norwegian doctors at the right moment), scientific intervention (autism treatment), and human connection (the instinctive mother-son recognition). Svaha&apos;s final words—&quot;This is life&quot;—unite all his teachings in one transcendent moment.
                      </p>
                    </div>

                    <div className="space-y-3 mt-6">
                      <h3 className="text-lg font-semibold flex items-center gap-2">
                        <Target className="w-5 h-5 text-primary" />
                        Key Integrated Insights
                      </h3>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-secondary/30 rounded-lg p-4 border">
                          <h4 className="font-semibold mb-2 text-sm">Faith vs. Common Sense</h4>
                          <p className="text-sm text-muted-foreground">
                            The Living Wave isn&apos;t provable scientifically, but it&apos;s explainable realistically—making it common sense rather than blind faith. Ramu&apos;s story validates this: what seemed impossible (finding a lost autistic child after 40 years) happened through a series of logical yet miraculous events.
                          </p>
                        </div>

                        <div className="bg-secondary/30 rounded-lg p-4 border">
                          <h4 className="font-semibold mb-2 text-sm">Multiple Variables Converge</h4>
                          <p className="text-sm text-muted-foreground">
                            Genetics (Ramu&apos;s autism), family (mother&apos;s persistence), education/skills (PI&apos;s investigation), external forces (Norwegian doctors), attitude (never giving up), luck (timing)—all the variables Svaha discusses throughout the book converge in Ramu&apos;s rescue. You don&apos;t need to control all variables; controlling a few can create miracles.
                          </p>
                        </div>

                        <div className="bg-secondary/30 rounded-lg p-4 border">
                          <h4 className="font-semibold mb-2 text-sm">Emotional Intelligence in Crisis</h4>
                          <p className="text-sm text-muted-foreground">
                            The mother controlled her emotions for 40 years without losing hope. The PI used the WISER Model: watched patterns, interpreted clues, selected investigation paths, engaged systematically, reflected and adapted. This demonstrates scientific reasoning backed by emotional strength.
                          </p>
                        </div>

                        <div className="bg-secondary/30 rounded-lg p-4 border">
                          <h4 className="font-semibold mb-2 text-sm">The Power of Role Models</h4>
                          <p className="text-sm text-muted-foreground">
                            The Norwegian doctors became Ramu&apos;s unwitting role models and saviors. Following successful systems (convent care, international treatment, diligent investigation) led to success. As Svaha teaches: &quot;You are less likely to fail when you have good role models.&quot;
                          </p>
                        </div>

                        <div className="bg-secondary/30 rounded-lg p-4 border">
                          <h4 className="font-semibold mb-2 text-sm">Quality Relationships = Quality Life</h4>
                          <p className="text-sm text-muted-foreground">
                            The Harvard study&apos;s conclusion manifests perfectly: the mother&apos;s relationship with Ramu transcended memory loss, geography, and decades. Their instinctive recognition proves relationships matter most—even when the brain forgets, the heart remembers.
                          </p>
                        </div>

                        <div className="bg-secondary/30 rounded-lg p-4 border">
                          <h4 className="font-semibold mb-2 text-sm">&quot;This is Life&quot;</h4>
                          <p className="text-sm text-muted-foreground">
                            Svaha&apos;s final statement encapsulates everything: life is unpredictable chaos and divine order simultaneously. Scientific reasoning + faith + emotional control + perseverance + serendipity = winning. The Living Wave delivered a miracle not through magic, but through the convergence of all the principles taught throughout the book.
                          </p>
                        </div>
                      </div>
                    </div>

                    <Alert className="border-green-500/50 bg-green-500/10 mt-6">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <AlertDescription>
                        <p className="font-semibold mb-1">The Complete Circle</p>
                        <p className="text-sm">
                          Chapter Ten provides the intellectual framework: scientific reasoning, emotional intelligence, relationship quality, and universal opportunity for success. The Epilogue provides the emotional proof: a real-life miracle that validates every principle Svaha teaches. Together, they show that living like a winner isn&apos;t just philosophy—it&apos;s a practical, achievable way of navigating the Living Wave, even when circumstances seem impossible. Knowledge + faith + perseverance = transformation. You don&apos;t need to be perfect; you need to keep trying. Even fools can win this race—and Ramu&apos;s return after 40 years is living proof.
                        </p>
                      </AlertDescription>
                    </Alert>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="lesson">
                <Card>
                  <CardHeader>
                    <CardTitle>Key Learnings & Actionable Insights</CardTitle>
                    <CardDescription>
                      Practical wisdom and transformative principles from Chapter One
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="bg-gradient-to-r from-teal-50 to-blue-50 dark:from-teal-950/20 dark:to-blue-950/20 rounded-lg p-6 border border-teal-200 dark:border-teal-800">
                      <h3 className="text-xl font-bold mb-4">Transformative Principles</h3>
                      
                      <div className="space-y-4">
                        <div className="flex gap-4">
                          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-teal-600 text-white flex items-center justify-center font-bold">
                            1
                          </div>
                          <div>
                            <h4 className="font-semibold mb-2">The Divine Nature of the Wave</h4>
                            <p className="text-sm text-muted-foreground">
                              The Living Wave transcends physical laws—it&apos;s omnipotent, divine, beyond worldly explanation. This isn&apos;t just metaphor; it&apos;s recognition that life operates on forces we can&apos;t fully measure but must respect. Like dark matter shaping galaxies unseen, the wave shapes destinies through a combination of genetics, luck, and mysterious universal forces.
                            </p>
                          </div>
                        </div>

                        <div className="flex gap-4">
                          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-teal-600 text-white flex items-center justify-center font-bold">
                            2
                          </div>
                          <div>
                            <h4 className="font-semibold mb-2">Religion as Practical Navigation Tool</h4>
                            <p className="text-sm text-muted-foreground">
                              Faith provides a GPS for riding the wave—not through miracles, but through frameworks for gratitude, hope, community, and resilience. Religious people aren&apos;t more successful, but they have more tools for contentment. Prayer answered brings gratitude; prayer unanswered builds courage. Both keep you riding above the line.
                            </p>
                          </div>
                        </div>

                        <div className="flex gap-4">
                          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-teal-600 text-white flex items-center justify-center font-bold">
                            3
                          </div>
                          <div>
                            <h4 className="font-semibold mb-2">Gratitude: The Universal Solvent</h4>
                            <p className="text-sm text-muted-foreground">
                              Gratitude dissolves entitlement, ego, and victimhood—the three poisons that keep us below the line. It births humility, and humility (scientifically proven!) increases confidence and problem-solving ability. Morning gratitude isn&apos;t just positive thinking; it&apos;s neurological rewiring that literally changes how your brain navigates the wave.
                            </p>
                          </div>
                        </div>

                        <div className="flex gap-4">
                          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-teal-600 text-white flex items-center justify-center font-bold">
                            4
                          </div>
                          <div>
                            <h4 className="font-semibold mb-2">Know Thyself—The Socratic Foundation</h4>
                            <p className="text-sm text-muted-foreground">
                              Self-knowledge is non-negotiable. Know yourself. Know the world. Know your limitations. Know the path to your goal. Without this foundation, you drift aimlessly, tossed by forces you don&apos;t understand. With it, you can make conscious choices about which variables to strengthen and which to eliminate.
                            </p>
                          </div>
                        </div>

                        <div className="flex gap-4">
                          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-teal-600 text-white flex items-center justify-center font-bold">
                            5
                          </div>
                          <div>
                            <h4 className="font-semibold mb-2">Transcending the Scorpion&apos;s Fate</h4>
                            <p className="text-sm text-muted-foreground">
                              Yes, we have nature—genetic predispositions, ingrained habits, reactive patterns. But unlike the scorpion, we have consciousness. We can recognize our &quot;stinging&quot; moments before they happen and choose differently. Awareness precedes change. Notice your patterns, then deliberately break them.
                            </p>
                          </div>
                        </div>

                        <div className="flex gap-4">
                          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-teal-600 text-white flex items-center justify-center font-bold">
                            6
                          </div>
                          <div>
                            <h4 className="font-semibold mb-2">Living LIKE Winners Live</h4>
                            <p className="text-sm text-muted-foreground">
                              The brilliant reframe: &quot;LIKE&quot; is the operative word. You don&apos;t need Shah Rukh Khan&apos;s fame or Modi&apos;s power to live like a winner. Winners wake up grateful. They know themselves. They practice gratitude. They work on their variables. You can do all of this today, regardless of circumstances. That&apos;s the accessible revolution in this philosophy.
                            </p>
                          </div>
                        </div>

                        <div className="flex gap-4">
                          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-teal-600 text-white flex items-center justify-center font-bold">
                            7
                          </div>
                          <div>
                            <h4 className="font-semibold mb-2">Grace: The Untranslatable Elevation</h4>
                            <p className="text-sm text-muted-foreground">
                              When gratitude fills you, you gain &quot;grace&quot;—that quality beyond translation, encompassing beauty, kindness, divine favor, and elegant presence. Graceful people move through life differently, riding the wave with a fluidity that transcends struggle. Grace is gratitude made visible in action and attitude.
                            </p>
                          </div>
                        </div>

                        <div className="flex gap-4">
                          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-teal-600 text-white flex items-center justify-center font-bold">
                            8
                          </div>
                          <div>
                            <h4 className="font-semibold mb-2">The Asymmetry Demands Vigilance</h4>
                            <p className="text-sm text-muted-foreground">
                              Accept this truth without bitterness: success pulls harder (requiring maintenance) while failure has little pull (making stagnation easy). This isn&apos;t unfair—it&apos;s physics of the Living Wave. Those who accept this reality stop resenting the effort required and start strategically allocating energy to stay above the line.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold flex items-center gap-2">
                        <Target className="w-5 h-5 text-primary" />
                        Practical Applications
                      </h3>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-blue-50 dark:bg-blue-950/20 rounded-lg p-4 border border-blue-200 dark:border-blue-800">
                          <h4 className="font-semibold mb-2 text-sm flex items-center gap-2">
                            <Heart className="w-4 h-4 text-blue-600" />
                            Morning Winner Ritual
                          </h4>
                          <p className="text-sm text-muted-foreground">
                            Before phone, before anything: &quot;I woke up alive—I&apos;m already a winner.&quot; Three gratitudes. One intention to live like a winner today. This 60-second practice rewires your brain&apos;s default position on the wave from neutral/below to above.
                          </p>
                        </div>

                        <div className="bg-blue-50 dark:bg-blue-950/20 rounded-lg p-4 border border-blue-200 dark:border-blue-800">
                          <h4 className="font-semibold mb-2 text-sm flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-blue-600" />
                            Know Thyself Journaling
                          </h4>
                          <p className="text-sm text-muted-foreground">
                            Weekly journal: What are my true capabilities? Real limitations? What do my goals actually require? What&apos;s the honest path? This Socratic inquiry builds the self-knowledge foundation that makes conscious wave-riding possible.
                          </p>
                        </div>

                        <div className="bg-blue-50 dark:bg-blue-950/20 rounded-lg p-4 border border-blue-200 dark:border-blue-800">
                          <h4 className="font-semibold mb-2 text-sm flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-blue-600" />
                            Scorpion Pattern Detection
                          </h4>
                          <p className="text-sm text-muted-foreground">
                            List your &quot;scorpion moments&quot;—where do you self-sabotage despite knowing better? What triggers your &quot;sting&quot;? Create pre-commitment strategies: when trigger occurs, pause 10 seconds and choose the non-scorpion response. Awareness + pause = transcendence.
                          </p>
                        </div>

                        <div className="bg-blue-50 dark:bg-blue-950/20 rounded-lg p-4 border border-blue-200 dark:border-blue-800">
                          <h4 className="font-semibold mb-2 text-sm flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-blue-600" />
                            Faith as Navigation System
                          </h4>
                          <p className="text-sm text-muted-foreground">
                            Whether religious or not, create your &quot;faith GPS&quot;: core principles, values, practices that provide hope when things work and resilience when they don&apos;t. This framework helps navigate the omnipotent, unpredictable nature of the wave.
                          </p>
                        </div>

                        <div className="bg-blue-50 dark:bg-blue-950/20 rounded-lg p-4 border border-blue-200 dark:border-blue-800">
                          <h4 className="font-semibold mb-2 text-sm flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-blue-600" />
                            Variable Audit
                          </h4>
                          <p className="text-sm text-muted-foreground">
                            Monthly review: Which variables pulled me down (laziness, anger, procrastination)? Which lifted me up (discipline, planning, kindness)? You can&apos;t change genetics or past, but you control daily variables. Audit them ruthlessly; adjust strategically.
                          </p>
                        </div>

                        <div className="bg-blue-50 dark:bg-blue-950/20 rounded-lg p-4 border border-blue-200 dark:border-blue-800">
                          <h4 className="font-semibold mb-2 text-sm flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-blue-600" />
                            Grace Through Gratitude Challenge
                          </h4>
                          <p className="text-sm text-muted-foreground">
                            In difficult moments, ask: &quot;What can I be grateful for here?&quot; This practice fills you with grace—that elevated state where you cut slack for mistakes (yours and others&apos;), maintain composure, and stay above the line even in storms.
                          </p>
                        </div>
                      </div>
                    </div>

                    <Alert className="border-green-500/50 bg-green-500/10">
                      <Award className="h-5 w-5 text-green-600" />
                      <AlertDescription>
                        <p className="font-semibold mb-2">Deep Reflection Exercise</p>
                        <p className="text-sm mb-2">Before moving forward, spend 15 minutes with these questions:</p>
                        <ul className="text-sm space-y-1 list-disc list-inside">
                          <li>What three things am I deeply grateful for right now?</li>
                          <li>What does &quot;living like a winner&quot; specifically mean in MY life?</li>
                          <li>What are my scorpion patterns—where do I self-sabotage?</li>
                          <li>Do I truly know myself, my limitations, and my realistic path forward?</li>
                          <li>What is my &quot;faith GPS&quot;—the principles and practices that keep me navigating when the wave gets rough?</li>
                          <li>Am I riding the wave consciously, or being swept along unconsciously?</li>
                        </ul>
                      </AlertDescription>
                    </Alert>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="test">
                <Card>
                  <CardHeader>
                    <CardTitle>Chapter Comprehension Test</CardTitle>
                    <CardDescription>
                      Test your understanding of Chapter One and Interlude One (Optional - skip if you just want to read)
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    {!showResults ? (
                      <div className="space-y-8">
                        <Alert>
                          <Lightbulb className="h-5 w-5 text-blue-600" />
                          <AlertDescription>
                            <p className="text-sm">
                              <strong>Note:</strong> This test is optional. You can skip it and continue reading if you don&apos;t want to apply for the certificate. 
                              To earn the course completion certificate, you must complete and pass all chapter tests with a score of 70% or higher.
                            </p>
                          </AlertDescription>
                        </Alert>

                        {testQuestions.map((question, index) => (
                          <div key={question.id} className="space-y-3 pb-6 border-b last:border-b-0">
                            <div className="flex items-start gap-3">
                              <div className="flex-shrink-0 w-7 h-7 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
                                {index + 1}
                              </div>
                              <div className="flex-1">
                                <p className="font-medium mb-3">{question.question}</p>
                                <RadioGroup
                                  value={answers[question.id]?.toString()}
                                  onValueChange={(value) => handleAnswerChange(question.id, parseInt(value))}
                                >
                                  {question.options.map((option, optionIndex) => (
                                    <div key={optionIndex} className="flex items-center space-x-2 mb-2">
                                      <RadioGroupItem value={optionIndex.toString()} id={`q${question.id}-o${optionIndex}`} />
                                      <Label htmlFor={`q${question.id}-o${optionIndex}`} className="cursor-pointer">
                                        {option}
                                      </Label>
                                    </div>
                                  ))}
                                </RadioGroup>
                              </div>
                            </div>
                          </div>
                        ))}

                        <div className="flex gap-3 pt-4">
                          <Button 
                            onClick={handleSubmitTest}
                            disabled={Object.keys(answers).length !== testQuestions.length}
                            size="lg"
                          >
                            <CheckCircle className="w-4 h-4 mr-2" />
                            Submit Test
                          </Button>
                          <Link href="/checkout">
                            <Button variant="outline" size="lg">
                              <ArrowRight className="w-4 h-4 mr-2" />
                              Skip Test & Continue Reading
                            </Button>
                          </Link>
                        </div>

                        {Object.keys(answers).length !== testQuestions.length && (
                          <p className="text-sm text-muted-foreground">
                            Please answer all {testQuestions.length} questions before submitting.
                          </p>
                        )}
                      </div>
                    ) : (
                      <div className="space-y-6">
                        <div className={`rounded-lg p-6 border-2 ${passed ? 'bg-green-50 dark:bg-green-950/20 border-green-500' : 'bg-red-50 dark:bg-red-950/20 border-red-500'}`}>
                          <div className="flex items-center gap-4 mb-4">
                            {passed ? (
                              <CheckCircle className="w-12 h-12 text-green-600" />
                            ) : (
                              <XCircle className="w-12 h-12 text-red-600" />
                            )}
                            <div>
                              <h3 className="text-2xl font-bold">
                                {passed ? 'Congratulations!' : 'Keep Learning'}
                              </h3>
                              <p className="text-sm text-muted-foreground">
                                You scored {score} out of {testQuestions.length} ({scorePercentage.toFixed(0)}%)
                              </p>
                            </div>
                          </div>
                          <Progress value={scorePercentage} className="h-3 mb-4" />
                          <p className="text-sm">
                            {passed 
                              ? 'You have demonstrated strong understanding of this chapter. You\'re on the path to becoming a winner!' 
                              : 'A score of 70% or higher is required to pass. Review the material and try again.'}
                          </p>
                        </div>

                        <div className="space-y-4">
                          <h4 className="font-semibold">Answer Review</h4>
                          {testQuestions.map((question, index) => {
                            const userAnswer = answers[question.id];
                            const isCorrect = userAnswer === question.correctAnswer;
                            
                            return (
                              <div key={question.id} className={`rounded-lg p-4 border-2 ${isCorrect ? 'border-green-500 bg-green-50 dark:bg-green-950/20' : 'border-red-500 bg-red-50 dark:bg-red-950/20'}`}>
                                <div className="flex items-start gap-3 mb-2">
                                  {isCorrect ? (
                                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                                  ) : (
                                    <XCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                                  )}
                                  <div className="flex-1">
                                    <p className="font-medium mb-2">{index + 1}. {question.question}</p>
                                    <p className="text-sm mb-1">
                                      <strong>Your answer:</strong> {question.options[userAnswer]}
                                    </p>
                                    {!isCorrect && (
                                      <p className="text-sm mb-1">
                                        <strong>Correct answer:</strong> {question.options[question.correctAnswer]}
                                      </p>
                                    )}
                                    <p className="text-sm text-muted-foreground mt-2">
                                      <strong>Explanation:</strong> {question.explanation}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                        </div>

                        <div className="flex gap-3">
                          <Button onClick={handleResetTest} variant="outline" size="lg">
                            Retake Test
                          </Button>
                          <Link href="/checkout">
                            <Button size="lg">
                              <ArrowRight className="w-4 h-4 mr-2" />
                              Continue to Full Course
                            </Button>
                          </Link>
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>

            <div className="mt-12 grid md:grid-cols-2 gap-6">
              <Card className="bg-gradient-to-br from-teal-50 to-blue-50 dark:from-teal-950/20 dark:to-blue-950/20 border-teal-200 dark:border-teal-800">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BookOpen className="w-5 h-5" />
                    Enjoyed the Sample?
                  </CardTitle>
                  <CardDescription>
                    Unlock 9 more chapters with similar comprehensive lessons
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Link href="/checkout">
                    <Button size="lg" className="w-full">
                      <ArrowRight className="w-4 h-4 mr-2" />
                      Purchase Full Course - ₹99
                    </Button>
                  </Link>
                  <div className="text-center text-sm text-muted-foreground">or</div>
                  <a 
                    href="/ebooks/sample-chapter-one.pdf" 
                    download
                    className="inline-block w-full"
                  >
                    <Button variant="outline" size="lg" className="w-full">
                      <Download className="w-4 h-4 mr-2" />
                      Download as PDF
                    </Button>
                  </a>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 border-blue-200 dark:border-blue-800">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Award className="w-5 h-5" />
                    Earn Your Certificate
                  </CardTitle>
                  <CardDescription>
                    Complete all chapters and tests to receive your digitally signed certificate
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Link href="/auth/login">
                    <Button size="lg" variant="outline" className="w-full">
                      Sign In to Start Learning
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
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
