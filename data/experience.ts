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
    id: "zydus-ba",
    role: "IT Business Analyst Intern",
    company: "Zydus Pharmaceuticals USA Inc.",
    period: "June 2025 - Present",
    description: [
      "I'm currently building a multi-agent AI system within Microsoft Teams to help the sales team query complex data without needing SQL knowledge. It uses a modular architecture with specialized agents for routing and validation.",
      "One of my biggest wins was optimizing our address matching pipeline. I used PySpark and fuzzy logic to link over 600K records with 93% accuracy, which was a huge step up from the manual process.",
      "I also tackled a massive data reconciliation project, fixing over 1 million SAP transactions using automated logic to ensure our compliance reporting was 100% accurate.",
      "To speed up drug analysis, I wrote a Python pipeline that extracts tables from hundreds of PDFs, making data available in Microsoft Fabric for immediate analysis."
    ],
    techStack: ["Microsoft Fabric", "Azure OpenAI", "Python", "PySpark", "SQL", "Microsoft Teams"]
  },
  {
    id: "asu-de",
    role: "Data Engineer",
    company: "Arizona State University",
    period: "Jan 2024 - May 2025",
    description: [
      "I worked on modernizing student record processing. By cleaning and standardizing Excel data for Salesforce, I helped cut down report generation time by over 50%.",
      "I loved contributing to the Smart DART app. I implemented over 10 new features using React and AWS Lambda, which not only added functionality but also improved the app's speed by 2.6%.",
      "I noticed our inventory tracking was messy, so I built a custom Flask-Airtable system to track 500+ SKUs. It solved our sync issues and saved the team hours of manual work every week."
    ],
    techStack: ["React", "TypeScript", "AWS Lambda", "DynamoDB", "Flask", "GraphQL", "Salesforce"]
  },
  {
    id: "nyc-dof-swe",
    role: "Software Engineer Intern",
    company: "New York City Department of Finance",
    period: "June 2024 - Aug 2024",
    description: [
      "I focused on improving internal tools. I built modular SharePoint components using React and SPFx that made document retrieval 35% faster for the staff.",
      "I created a responsive intake form that handled validation automatically. It routed data directly via Power Automate, eliminating a lot of back-and-forth email chains.",
      "Data migration was a big part of my role. I wrote Python scripts to clean and map 50,000+ records, ensuring we didn't lose a single piece of data during the transfer to SharePoint."
    ],
    techStack: ["React", "SPFx", "Fluent UI", "Python", "Power Automate", "SharePoint"]
  },
  {
    id: "ai-genesis-ai",
    role: "AI Engineer",
    company: "AI Genesis Glib",
    period: "Dec 2022 - April 2023",
    description: [
      "I built a conversational agent from scratch using Rasa. It handled flight bookings and significantly reduced the load on our support team by automating common requests.",
      "I later migrated our NLP stack to LangChain and Pinecone. This was a game-changer, improving our intent recognition to 95% and making the bot feel much more intelligent.",
      "Quality was key, so I set up a rigorous testing pipeline with pytest. We tested over 100 scenarios to ensure the bot routed users correctly every time."
    ],
    techStack: ["Rasa", "LangChain", "Pinecone", "FastAPI", "Python", "Pytest"]
  }
];
