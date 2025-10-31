export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  image: string;
  githubUrl?: string;
  liveUrl?: string;
  category: string;
  featured?: boolean;
}

export interface LabChallenge {
  id: string;
  title: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced" | "Expert";
  category: string;
  dateCompleted: string;
  problemStatement: string;
  approach: string[];
  tools: string[];
  screenshots: string[];
  codeSnippets?: {
    language: string;
    code: string;
    description?: string;
  }[];
  keyLearnings: string[];
  writeupUrl?: string;
}

export interface AnimationProps {
  children: React.ReactNode;
  className?: string;
  animation?: "fadeIn" | "slideUp" | "slideLeft" | "slideRight" | "scaleUp";
  delay?: number;
  duration?: number;
}
