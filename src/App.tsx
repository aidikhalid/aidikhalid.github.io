import aidiProfilePic from '@images/aidi-profile-pic.png';
import aidiLowGow from '@images/aidikhalid-low-gow.svg';
import versionCoffeePreview from '@images/version-coffee-chatbot-preview.png';
import chatterPreview from '@images/chatter-preview.png';
import healthcarePreview from '@images/healthcare-app-preview.png';
import lexinomiPreview from '@images/lexinomi-preview.png';
import cafeLaptopPreview from '@images/cafe-and-laptop-preview.png';
import calculatorPreview from '@images/calculator-preview.png';
import ticTacToePreview from '@images/tic-tac-toe-preview.png';
import resume from '@pdf/Aidi-resume-2026.pdf';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { buttonVariants } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { ModeToggle } from '@/components/theme/mode-toggle';
import { cn } from '@/lib/utils';

interface ProjectLink {
  label: string;
  url: string;
}

interface Project {
  id: string;
  title: string;
  image: string;
  imageAlt: string;
  links: ProjectLink[];
  paragraphs: string[];
}

const projects: Project[] = [
  {
    id: 'version-coffee',
    title: 'Version Coffee Chatbot',
    image: versionCoffeePreview,
    imageAlt: 'Version Coffee Chatbot app preview',
    links: [
      { label: 'Live Site', url: 'https://version-coffee.aidikhalid.com' },
      { label: 'Github', url: 'https://github.com/aidikhalid/version-coffee-chatbot.git' },
    ],
    paragraphs: [
      "A full-stack AI-powered coffee shop application featuring a RAG-based chatbot capable of answering questions, taking orders, and providing recommendations. Built with React, Express, Python FastAPI, and OpenAI's GPT-4o-mini.",
      "Demo account:\nEmail: shinji@nerv.com\nPassword: 123456",
      "(The site may take a moment to load because it spins down on inactivity.)",
    ],
  },
  {
    id: 'chatter',
    title: 'Chatter',
    image: chatterPreview,
    imageAlt: 'Chatter app preview',
    links: [
      { label: 'Live Site', url: 'https://chatter.aidikhalid.com' },
      { label: 'Github', url: 'https://github.com/aidikhalid/chatter.git' },
    ],
    paragraphs: [
      "A modern real-time chat application built with React, Node.js, Express, Socket.IO, and MongoDB.",
      "Demo accounts:\nEmail: shinji@nerv.com / rei@nerv.com / asuka@nerv.com\nPassword (all): 123456",
      "Use an incognito window to log in as another user. The database can be reset from the login page after testing.",
      "(The site may take a moment to load because it spins down on inactivity.)",
    ],
  },
  {
    id: 'healthcare',
    title: 'Healthcare App',
    image: healthcarePreview,
    imageAlt: 'Healthcare App site preview',
    links: [
      { label: 'Live Site', url: 'https://carepulse-one-olive.vercel.app' },
      { label: 'Github', url: 'https://github.com/aidikhalid/carepulse.git' },
    ],
    paragraphs: [
      "A web app for booking medical appointments and managing them as staff. Built with Next.js, Zod, Shadcn, Twilio, and Appwrite.",
      'Admin access: Click the "Admin" link at the bottom of the landing page. Code: 123456',
    ],
  },
  {
    id: 'lexinomi',
    title: 'Lexinomi (WIP)',
    image: lexinomiPreview,
    imageAlt: 'Lexinomi app preview',
    links: [
    ],
    paragraphs: [
      "An AI-powered language learning app built around real conversation practice instead of static drills. Users can learn through guided scenarios, spoken responses, and level-aware lessons tailored to their progress. It is still a work in progress, with the learning experience and product features actively being refined.",
    ],
  },
  {
    id: 'cafe-laptop',
    title: 'Cafe and Laptop',
    image: cafeLaptopPreview,
    imageAlt: 'Cafe and Laptop site preview',
    links: [
      { label: 'Live Site', url: 'https://cafe-and-laptop.onrender.com/' },
      { label: 'Github', url: 'https://github.com/aidikhalid/cafe-and-laptop' },
    ],
    paragraphs: [
      "A website for finding, sharing, and rating work-friendly cafes. Built with Python, Flask, SQLAlchemy, PostgreSQL, HTML, CSS, and Bootstrap.",
      "Demo account:\nEmail: shinji@nerv.com\nPassword: 123",
      "(The site may take a moment to load because it spins down on inactivity.)",
    ],
  },
  {
    id: 'calculator',
    title: 'Calculator',
    image: calculatorPreview,
    imageAlt: 'Calculator site preview',
    links: [
      { label: 'Live Site', url: 'https://aidikhalid.github.io/calculator/' },
      { label: 'Github', url: 'https://github.com/aidikhalid/calculator/tree/main' },
    ],
    paragraphs: [
      "An online calculator. Aside from using the mouse, you may also use the keypad for input. Made with JavaScript, HTML, and CSS.",
    ],
  },
  {
    id: 'tic-tac-toe',
    title: 'Tic-Tac-Toe',
    image: ticTacToePreview,
    imageAlt: 'Tic-Tac-Toe program preview',
    links: [
      { label: 'Github', url: 'https://github.com/aidikhalid/tictactoe' },
    ],
    paragraphs: [
      "A text-based Tic-Tac-Toe game with a simple enemy AI for the player to fight against. The AI has three difficulties to choose from: Easy, Medium, and Impossible. You can also battle against another player (local). Made with Python.",
    ],
  },
];

function App() {
  return (
    <>
      <div className="max-w-7xl mx-auto px-5 pt-[30px] flex flex-col min-[900px]:flex-row min-[900px]:gap-[50px] min-[900px]:h-screen min-[900px]:overflow-hidden">

        {/* Header */}
        <div className="flex flex-col justify-between h-full min-[1100px]:max-w-xl min-[1100px]:w-full min-[1100px]:flex-shrink-0">
          <div>
            <div className="flex justify-between">
              <div className="flex flex-col">
                <img src={aidiProfilePic} alt="Profile picture of Aidi" className="w-[280px]" />
                <img src={aidiLowGow} alt="Aidi Low Gow" className="mt-4 w-[280px]" />
              </div>
              <div className="flex flex-col gap-2 bg-primary block min-[900px]:hidden">
                <ModeToggle />
              </div>
            </div>
          </div>
          <div className="flex flex-col pb-8">
            <h1 className='text-[3rem] mt-4 mb-4 min-[425px]:text-[4rem] min-[1100px]:text-[6rem] min-[1100px]:mt-0 min-[1100px]:mb-0'>AIDI KHALID</h1>
            <div>
              <div className="flex gap-2">
                <a href={resume} target="_blank" className={cn(buttonVariants({ variant: 'link', size: 'lg' }), 'text-lg')}>RESUME</a>
                <a href="https://www.linkedin.com/in/aidikhalid" target="_blank" className={cn(buttonVariants({ variant: 'link', size: 'lg' }), 'text-lg')}>LINKEDIN</a>
                <a href="https://github.com/aidikhalid" target="_blank" className={cn(buttonVariants({ variant: 'link', size: 'lg' }), 'text-lg')}>GITHUB</a>
              </div>
            </div>
            <div className="mt-[10px]">
              <p>
                Full-stack Software Developer with 2+ years of experience building AI-powered and web applications. Previously spent 11 years in the game and animation industries, contributing to award-winning productions including Baldur&apos;s Gate 3 and No Straight Roads. Combines technical problem-solving with extensive cross-functional production experience.
              </p>
            </div>
          </div>
        </div>

        {/* Projects */}
        <div className="flex flex-col w-full">
          <div className="hidden min-[900px]:block">
            <div className="flex justify-end bg-primary">
              <ModeToggle />
            </div>
          </div>
          <ScrollArea className="h-full w-full min-[900px]:min-w-[400px]">
            <div className="min-h-full flex flex-col justify-end pb-8">
              <Accordion className="w-full gap-2">
                {projects.map((project) => (
                  <AccordionItem key={project.id} value={project.id}>
                    <AccordionTrigger className="text-[1.5rem]">{project.title.toUpperCase()}</AccordionTrigger>
                    <AccordionContent>
                      <div className="flex flex-col pt-4 gap-4">
                        <div>
                          <img src={project.image} alt={project.imageAlt} className="w-md" />
                        </div>
                        <div>
                          <div className="flex gap-2">
                            {project.links.map((link) => (
                              <a key={link.label} href={link.url} target="_blank" className={cn(buttonVariants({ variant: 'link', size: 'lg' }), 'text-lg')}>
                                {link.label.toUpperCase()}
                              </a>
                            ))}
                          </div>
                          <div className="mt-[10px] space-y-[1em]">
                            {project.paragraphs.map((para, i) => (
                              <p key={i}>
                                {para.split('\n').map((line, j, arr) => (
                                  <span key={j}>{line}{j < arr.length - 1 && <br />}</span>
                                ))}
                              </p>
                            ))}
                          </div>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </ScrollArea>
        </div>
      </div>
    </>
  )
}

export default App
