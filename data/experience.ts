export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string[];
  techStack: string[];
}

export const experience: ExperienceItem[] = [
  {
    id: "senior-ai-eng",
    role: "Senior AI Engineer",
    company: "TechCorp Inc.",
    period: "2023 - Present",
    description: [
      "Lead the development of enterprise AI agents using LangChain and OpenAI.",
      "Architected a RAG pipeline serving 10k+ daily queries with <500ms latency.",
      "Mentored 3 junior engineers and established AI engineering best practices."
    ],
    techStack: ["Python", "LangChain", "Azure OpenAI", "Pinecone"]
  },
  {
    id: "full-stack-dev",
    role: "Full-Stack Developer",
    company: "StartUp Solutions",
    period: "2021 - 2023",
    description: [
      "Built and shipped 5+ SaaS products from 0 to 1 using Next.js and Supabase.",
      "Optimized database queries reducing page load time by 60%.",
      "Implemented real-time collaboration features using WebSockets."
    ],
    techStack: ["Next.js", "TypeScript", "Supabase", "PostgreSQL"]
  },
  {
    id: "data-eng",
    role: "Data Engineer",
    company: "DataFlow Systems",
    period: "2019 - 2021",
    description: [
      "Designed and maintained ETL pipelines processing 1TB+ data daily.",
      "Migrated legacy data warehouse to Snowflake, reducing costs by 30%.",
      "Automated data quality checks using Great Expectations."
    ],
    techStack: ["Python", "Apache Airflow", "Snowflake", "AWS"]
  }
];
