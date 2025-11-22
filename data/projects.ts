export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  techStack: string[];
  impact: string;
  githubUrl?: string;
  liveUrl?: string;
  architecture: string[];
  highlights: string[];
}

export const projects: Project[] = [
  {
    id: "coffee-shop-agent",
    title: "Coffee Shop AI Agent",
    shortDescription: "LLM-based assistant for drink recommendations and menu queries.",
    fullDescription: "A sophisticated AI agent designed for a coffee shop chain to handle customer inquiries, recommend drinks based on preferences, and manage orders. It uses RAG to access the latest menu and inventory data.",
    techStack: ["FastAPI", "React", "LLaMA 3.1", "Pinecone", "Redis"],
    impact: "Reduced customer wait time by 40% and increased average order value by 15%.",
    githubUrl: "https://github.com/yashshah/coffee-agent",
    architecture: [
      "User Query -> Guardrails (Input Validation)",
      "Classifier -> Intent Recognition (Order vs Query)",
      "RAG Engine -> Pinecone (Menu/Inventory)",
      "LLM -> LLaMA 3.1 (Response Generation)",
      "Response -> User"
    ],
    highlights: [
      "Handled 500+ concurrent users during peak hours.",
      "Implemented custom guardrails to prevent hallucination.",
      "Integrated with POS system for real-time inventory checks."
    ]
  },
  {
    id: "fabric-data-assistant",
    title: "Fabric AI Data Assistant",
    shortDescription: "Automated data pipeline management using Microsoft Fabric.",
    fullDescription: "An intelligent assistant built within Microsoft Fabric to automate data ingestion, transformation, and reporting tasks. It allows non-technical users to query data using natural language.",
    techStack: ["Microsoft Fabric", "Azure OpenAI", "Python", "SQL"],
    impact: "Reduced manual reporting time from 4 hours to 5 minutes.",
    architecture: [
      "User Query -> NLP Engine (Azure OpenAI)",
      "SQL Generator -> Fabric Data Warehouse",
      "Validator -> Query Safety Check",
      "Execution -> Fabric Spark/SQL Endpoint",
      "Visualization -> Power BI"
    ],
    highlights: [
      "Enabled self-service analytics for 50+ business users.",
      "Automated daily reconciliation reports.",
      "Built custom semantic layer for accurate SQL generation."
    ]
  },
  {
    id: "smart-resume-tailor",
    title: "Smart Resume Tailor",
    shortDescription: "AI-powered tool to customize resumes for specific job descriptions.",
    fullDescription: "A web application that analyzes a user's resume against a job description and suggests improvements or rewrites sections to better align with the role, increasing ATS pass rates.",
    techStack: ["Next.js", "OpenAI API", "Tailwind CSS", "Stripe"],
    impact: "Helped 200+ users land interviews at top tech companies.",
    githubUrl: "https://github.com/yashshah/resume-tailor",
    liveUrl: "https://resume-tailor.demo",
    architecture: [
      "Upload Resume (PDF/Docx) -> Text Extraction",
      "Job Description Input -> Keyword Analysis",
      "LLM Processing -> Gap Analysis & Content Generation",
      "Output -> Formatted Resume (PDF)"
    ],
    highlights: [
      "Achieved 90% user satisfaction rate.",
      "Implemented streaming response for real-time feedback.",
      "Integrated Stripe for premium features."
    ]
  }
];
