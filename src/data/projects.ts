export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  github?: string;
  demo?: string;
  featured?: boolean;
  featuredDetails?: {
    problem: string;
    architecture: string;
    challenges: string;
    solutions: string;
    impact: string;
  };
}

export const projects: Project[] = [
  {
    id: "smicos",
    title: "Smicos",
    description: "An omnichannel customer support platform integrating multiple messaging services into a unified interface.",
    tech: ["Laravel", "Vue.js", "MySQL", "Redis", "AWS", "WebSockets", "Docker"],
    featured: true,
    featuredDetails: {
      problem: "Managing customer support across multiple platforms (Messenger, Instagram, Viber, etc.) was fragmented and inefficient for businesses.",
      architecture: "Designed as a modular monolith on AWS, using EC2 for compute, RDS for data, and S3 for storage. Integrated multiple external APIs through a unified service layer.",
      challenges: "Handling real-time synchronization for 10K+ concurrent WebSocket connections and ensuring reliable delivery of ~50K daily events during burst traffic.",
      solutions: "Implemented asynchronous job pipelines with retry logic and idempotent processing. Optimized database schemas and introduced Redis caching to handle high-frequency queries.",
      impact: "Reduced query latency by 40% and improved system reliability, leading to faster response times for agents and better customer satisfaction.",
    },
    demo: "https://smicos.com",
  },
  {
    id: "posexei",
    title: "Posexei",
    description: "Multi-service backend for social media scheduling and automation.",
    tech: ["FastAPI", "Python", "Redis", "PostgreSQL", "Docker", "k6"],
    github: "https://github.com/zerexei/posexei",
  },
  {
    id: "pb-pm-tool",
    title: "Project Management Tool",
    description: "Internal PM tool with real-time updates, Gantt charts, and task tracking.",
    tech: ["Laravel", "Vue.js", "WebSockets", "TypeScript", "MySQL"],
    github: "https://github.com/zerexei",
  },
  {
    id: "chatbot-builder",
    title: "Chatbot Builder",
    description: "No-code platform for building and deploying automated customer flows.",
    tech: ["Laravel", "JavaScript", "Botman", "MySQL"],
    github: "https://github.com/zerexei",
  },
];
