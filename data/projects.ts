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
    id: "coffee-ai-agent",
    title: "Coffee Shop AI Agent",
    shortDescription: "A smart AI barista that takes orders and recommends drinks.",
    fullDescription: "I wanted to see if I could build an AI that feels like a real barista. This agent doesn't just take orders; it understands context. I used LLaMA 3.1 and a multi-agent architecture to handle everything from safety checks to personalized recommendations. It's deployed on RunPod GPUs, so it responds instantly.",
    techStack: ["Python", "LLaMA 3.1", "Pinecone", "React Native", "Firebase", "RunPod"],
    impact: "Reduced order latency by 3x and enabled real-time voice-like interaction.",
    githubUrl: "https://github.com/yashshah/coffee-agent",
    architecture: [
      "User Input -> Guard Agent (Safety Check)",
      "Classifier Agent -> Determines Intent",
      "Recommender Agent -> RAG (Pinecone + OpenAI)",
      "Order Handler -> Firebase Transaction",
      "LLM -> LLaMA 3.1 (RunPod GPU)"
    ],
    highlights: [
      "It feels real: I used RAG to give it knowledge about specific coffee blends.",
      "It's fast: Deployed on RunPod GPUs to minimize the awkward pause in conversation.",
      "It's safe: A dedicated Guard Agent ensures it stays on topic and safe."
    ]
  },
  {
    id: "book-recommendation",
    title: "Semantic Book Search",
    shortDescription: "Find books by describing the 'vibe' or plot, not just keywords.",
    fullDescription: "Standard keyword search fails when you don't know the title. I built this engine to let users search by meaning. Using zero-shot classification and LLM embeddings, it understands queries like 'a sad story about a robot' and finds the perfect match. It analyzes emotion and genre to give truly relevant suggestions.",
    techStack: ["Python", "LangChain", "Chroma", "Gradio", "Transformers"],
    impact: "Achieved 78% accuracy in genre detection and 66% in sentiment matching.",
    githubUrl: "https://github.com/yashshah/book-recs",
    architecture: [
      "Data Ingestion -> Text Preprocessing",
      "Embedding Generation -> Pretrained LLM Models",
      "Vector Store -> ChromaDB",
      "Inference -> Cosine Similarity Search",
      "UI -> Gradio Interface"
    ],
    highlights: [
      "Encoded over 5,200 books into a vector space for semantic retrieval.",
      "Implemented zero-shot classification to auto-tag books by genre.",
      "Added sentiment analysis to match books to the user's current mood."
    ]
  },
  {
    id: "youtube-analysis",
    title: "YouTube Viral Trends Pipeline",
    shortDescription: "A scalable data pipeline to analyze what makes videos go viral.",
    fullDescription: "I was curious about YouTube trends, so I built a pipeline to analyze them at scale. It ingests data from over 100,000 videos, processes it using serverless AWS functions, and visualizes the results. It's a full ETL pipeline demonstrating how to handle big data efficiently in the cloud.",
    techStack: ["AWS S3", "AWS Lambda", "AWS Glue", "AWS Athena", "QuickSight", "Python"],
    impact: "Processed 100k+ video records and visualized key engagement metrics.",
    githubUrl: "https://github.com/yashshah/youtube-analysis",
    architecture: [
      "Ingestion -> AWS S3 (Raw JSON)",
      "Transformation -> AWS Lambda & Glue (ETL)",
      "Storage -> S3 (Parquet)",
      "Query Engine -> AWS Athena",
      "Visualization -> Amazon QuickSight"
    ],
    highlights: [
      "Built a completely serverless architecture to keep costs low and scalability high.",
      "Optimized performance by converting raw JSON to Parquet format.",
      "Created interactive dashboards to spot trends in views and likes."
    ]
  },
  {
    id: "secure-auth",
    title: "SecureAuth System",
    shortDescription: "A production-ready authentication system built from scratch.",
    fullDescription: "Security is hard to get right, so I built this system to master the fundamentals. It's a full-stack auth solution with JWTs, secure password hashing, and session management. I focused on best practices like token rotation and secure storage to ensure it's ready for real-world use.",
    techStack: ["React", "Node.js", "Express", "MongoDB", "Redux Toolkit", "JWT"],
    impact: "Provides a secure, reusable auth foundation for future applications.",
    architecture: [
      "Client -> React + Redux Toolkit",
      "API -> Express.js REST Endpoints",
      "Auth -> JWT (Access/Refresh Tokens)",
      "Database -> MongoDB (bcryptjs hashing)"
    ],
    highlights: [
      "Implemented industry-standard security with bcryptjs and JWT.",
      "Managed complex global state using Redux Toolkit.",
      "Designed a scalable REST API that's easy to integrate."
    ]
  }
];
