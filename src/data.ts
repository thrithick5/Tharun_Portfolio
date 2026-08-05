export const portfolio = {
  name: "Tharun Hrithick SR",
  headline: "Hello, I'm",
  role: "AI Agent & Backend Developer",
  tagline: "Full-Stack Developer & AI Enthusiast",
  location: "Bangalore, India",
  objective:
    "Fourth-year B.Tech student in Information Science and Engineering with hands-on experience in Python, Generative AI, and prompt engineering. Skilled at working closely with large language models, writing clear domain-specific prompts, and evaluating model outputs with strong attention to detail. Comfortable working independently in remote, asynchronous environments, and equally adaptable to in-office settings, and eager to apply research, reasoning, and analytical skills to help improve the performance of AI systems.",
  contact: {
    phone: "+91-8072231360",
    email: "tharunhrithick5@gmail.com",
    linkedin: "https://www.linkedin.com/in/tharun-hrithick-sr-56a601293/",
    github: "https://github.com/thrithick5",
  },
};

export const services = [
  {
    title: "AI Agents & Automation",
    description:
      "Autonomous, tool-using AI agents that plan, reason and execute real workflows end-to-end.",
  },
  {
    title: "RAG Pipelines",
    description:
      "Context-aware retrieval systems grounded in your documents, reports and knowledge base.",
  },
  {
    title: "Generative AI Applications",
    description:
      "LLM-powered products — from healthcare assistants to automated reporting tools.",
  },
  {
    title: "Backend Engineering",
    description:
      "Fast, secure and scalable Python APIs with FastAPI, Flask and PostgreSQL.",
  },
];

export const skills = [
  { category: "Programming", items: ["Python", "Java", "JavaScript"] },
  {
    category: "AI & ML",
    items: [
      "Agentic AI",
      "Prompt Engineering",
      "Generative AI",
      "Machine Learning",
      "RAG",
      "Deep Learning",
    ],
  },
  {
    category: "Web Development",
    items: ["React", "Next.js", "HTML", "CSS"],
  },
  { category: "Database", items: ["MySQL", "PostgreSQL", "ChromaDB", "SQLite"] },
  {
    category: "Tools",
    items: ["Git", "n8n", "Claude Code", "Postman", "OpenCode", "Google Stitch"],
  },
  {
    category: "Soft Skills",
    items: ["Problem-solving", "Collaboration", "Adaptability", "Quick Learning"],
  },
];

export const projects = [
  {
    number: "01",
    title: "Nerve — AI Healthcare Assistant",
    stack: "FastAPI · React · PostgreSQL · RAG · OCR",
    accent: "#e11d48",
    description:
      "Full-stack healthcare assistant answering medical queries from reports, PDFs and images with context-aware RAG responses.",
    span: "lg:col-span-1 lg:row-span-2",
    link: "https://nerve-healthcare-assistant.vercel.app",
  },
  {
    number: "02",
    title: "Early Lung Cancer Detection",
    stack: "PyTorch · Flask · CNN · SQL",
    accent: "#8b0000",
    description:
      "End-to-end medical image classification of CT scans with 91% validation accuracy and real-time predictions.",
    span: "lg:col-span-2",
    link: "https://lung-cancer-prediction-frontend.vercel.app",
  },
  {
    number: "03",
    title: "Automated Report Generator",
    stack: "FastAPI · Mistral API · SQLAlchemy",
    accent: "#e11d48",
    description:
      "Parses Git repositories to auto-generate structured development summaries via the Mistral AI API.",
    span: "lg:col-span-2",
    link: "https://automated-report-generator-frontend.vercel.app/",
  },
  {
    number: "04",
    title: "Emotion Detection & Music",
    stack: "Python · Scikit-Learn · NLP",
    accent: "#9f1239",
    description:
      "Real-time sentiment engine matching emotional states to context-specific audio playlists at 88% accuracy.",
    span: "lg:col-span-3",
    link: "https://emotion-detection-music-recommendat-kohl.vercel.app",
  },
];

export const workExperience = [
  {
    period: "Present",
    role: "AI Agent Development Intern",
    company: "MacAppStudio",
    description:
      "Developed Nerve, an AI-powered healthcare assistant using FastAPI, React and RAG for context-aware responses from medical reports, PDFs and images. Implemented OCR processing with Tesseract, semantic retrieval with ChromaDB, and JWT/Google authentication with PostgreSQL-backed conversation history.",
  },
  {
    period: "3 Months",
    role: "Artificial Intelligence Virtual Intern",
    company: "Infosys Springboard 6.0",
    description:
      "Engineered a facial emotion recognition and personalized music recommendation pipeline in Python, optimizing SVM and NLP classifiers to 88% accuracy with structured data preprocessing pipelines.",
  },
  {
    period: "3 Months",
    role: "Backend Development (Python)",
    company: "Hawky (Startup), Bangalore",
    description:
      "Architected high-throughput Flask API endpoints, reducing core response latencies by 15%. Built scalable database schemas and resolved critical server bottlenecks before launch.",
  },
];

export const leadership = [
  {
    period: "Academic Project",
    role: "Lead Agentic AI Developer — Nerve",
    company: "MacAppStudio",
    description:
      "Owned the end-to-end product vision: architecture, RAG engine, auth flows and deployment for a production-grade healthcare assistant.",
  },
  {
    period: "PCL Project",
    role: "Project Lead — Lung Cancer Detection",
    company: "College Project",
    description:
      "Directed model selection, training pipelines and the full-stack integration, delivering a 91% accuracy diagnostic web app.",
  },
  {
    period: "Internship",
    role: "Pipeline Owner — Emotion & Music System",
    company: "Infosys Springboard 6.0",
    description:
      "Led the dual-module pipeline design — from data normalization through SVM/NLP tuning to the recommendation layer.",
  },
];

export const certifications = [
  "Generative AI — Microsoft & LinkedIn",
  "ChatGPT Prompt Engineering — DeepLearning AI",
  "Artificial Intelligence — Infosys Springboard",
  "Introduction to Agent Skills — Anthropic",
  "Database & SQL for Data Science — Coursera (IBM)",
];

export const galleryItems = [
  {
    label: "Nerve · RAG UI",
    caption: "Healthcare Assistant",
    background:
      "linear-gradient(135deg, #1a0a0f, #5c0000 45%, #e11d48 120%)",
    image: "/nerve-chat.png",
    link: "https://nerve-healthcare-assistant.vercel.app",
  },
  {
    label: "Portrait",
    caption: "Tharun Hrithick SR",
    background: "linear-gradient(180deg, #000000, #2f0000)",
    image: "/photo.jpg",
  },
  {
    label: "Automation Pipeline",
    caption: "Agent Workflows",
    background:
      "linear-gradient(135deg, #2f0000, #9f1239 55%, #fb7185 130%)",
    image: null,
  },
];
