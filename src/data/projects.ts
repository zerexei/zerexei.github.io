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
      architecture: "Led end-to-end development of a modular monolith on AWS. Made critical architectural trade-offs between complexity and maintainability to ensure long-term stability and performance.",
      challenges: "Handling real-time synchronization for 10K+ concurrent WebSocket connections and ensuring reliable delivery of ~50K daily events during burst traffic.",
      solutions: "Implemented asynchronous job pipelines with idempotent processing and Redis caching. Designed concurrency-safe workflows using transactional locking and queue-based distribution.",
      impact: "As Lead Developer, I owned the system design, managed AWS infrastructure, and collaborated with 2–3 junior developers and cross-functional teams to deliver a production-ready system.",
    },
    demo: "https://smicos.com",
  },
  {
    id: "posexei",
    title: "Posexei",
    description: "Multi-service backend for social media scheduling, focusing on asynchronous processing and distributed systems.",
    tech: ["Laravel", "PHP", "Redis", "Postgres", "Docker", "k6"],
    github: "https://github.com/zerexei/posexei",
  },
  {
    id: "observability",
    title: "Observability Stack",
    description: "Production-ready demonstration featuring the LGTP stack (Loki, Grafana, Tempo, Prometheus) integrated with OpenTelemetry.",
    tech: ["FastAPI", "OpenTelemetry", "Grafana", "Prometheus", "Loki", "Tempo"],
    github: "https://github.com/zerexei/observability",
  },
  {
    id: "botman-drivers",
    title: "BotMan Driver",
    description: "Custom drivers for the BotMan framework, providing unified integration for Web, Messenger, Viber, and WhatsApp.",
    tech: ["PHP", "BotMan", "APIs", "Webhooks"],
    github: "https://github.com/zerexei/botman-drivers",
  },
  {
    id: "centralize-logging",
    title: "Centralized Logging System",
    description: "Lightweight service for log management across multiple environments, featuring centralized querying and storage.",
    tech: ["FastAPI", "Python", "Supabase", "PostgreSQL"],
    github: "https://github.com/zerexei/centralize-logging-system",
  },
  {
    id: "php-core",
    title: "PHP-Core Framework",
    description: "A minimal MVC framework featuring a custom Service Container, routing, request handling, and middleware.",
    tech: ["PHP", "MVC", "OOP", "System Design"],
    github: "https://github.com/zerexei/PHP-Core",
  },
  {
    id: "p2p-file-transfer",
    title: "P2P File Transfer",
    description: "Browser-based peer-to-peer file transfer tool using WebRTC for direct, serverless data exchange.",
    tech: ["TypeScript", "React.js", "Peer.js", "WebRTC"],
    github: "https://github.com/zerexei/p2p-file-transfer",
  },
  {
    id: "grapejs-components",
    title: "Web Builder Components",
    description: "A drag-and-drop web application builder with custom components and real-time preview.",
    tech: ["GrapesJS", "JavaScript", "Vue.js", "CSS"],
    github: "https://github.com/zerexei/grapejs-components",
  },
];
