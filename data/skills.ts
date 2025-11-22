export interface SkillCategory {
  title: string;
  skills: string[];
}

export const skills: SkillCategory[] = [
  {
    title: "AI & LLMs",
    skills: ["OpenAI API", "LangChain", "LlamaIndex", "Hugging Face", "RAG", "Prompt Engineering", "Fine-tuning"]
  },
  {
    title: "Backend & Data",
    skills: ["Python", "FastAPI", "PostgreSQL", "Redis", "Pinecone", "Microsoft Fabric", "SQL"]
  },
  {
    title: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Shadcn/UI"]
  },
  {
    title: "DevOps & Cloud",
    skills: ["Docker", "Kubernetes", "AWS", "Azure", "Vercel", "CI/CD", "Git"]
  }
];
