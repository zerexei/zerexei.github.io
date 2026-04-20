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
    description: "A real-time messaging SaaS platform integrating 8+ external platforms, supporting 10K+ concurrent connections and 50K+ daily events.",
    tech: ["Laravel", "Vue.js", "MySQL", "Redis", "AWS", "WebSockets", "Docker"],
    featured: true,
    featuredDetails: {
      problem: "Enterprise clients needed a unified, real-time interface to manage customer interactions across fragmented messaging platforms (Messenger, Instagram, Viber, etc.).",
      architecture: "Designed a real-time, event-driven architecture using WebSockets and asynchronous pipelines. Owned backend architecture, AWS infrastructure, and production support.",
      challenges: "Eliminating race conditions in multi-user booking scenarios and ensuring system resilience during third-party API failures and traffic spikes.",
      solutions: "Implemented concurrency-safe workflows using transactional locking and queue-based distribution. Developed Redis-backed idempotent processing pipelines with exponential backoff.",
      impact: "Reduced database query latency by ~40% through schema optimization. Led production incident response and improved system reliability through enhanced logging and monitoring.",
    },
    demo: "https://smicos.com",
  },
  {
    id: "distributed-systems",
    title: "Distributed Systems Project",
    description: "Multi-service backend architecture for social media scheduling, exploring asynchronous communication and system performance under load.",
    tech: ["Python", "FastAPI", "Redis", "PostgreSQL", "Docker", "k6"],
    github: "https://github.com/zerexei/posexei",
    featured: true,
    featuredDetails: {
      problem: "Designing a scalable social media scheduler that handles high-concurrency job processing and reliable service-to-service communication.",
      architecture: "Built using Python (FastAPI) and a distributed worker pattern with Redis as the message broker.",
      challenges: "Evaluating system behavior under heavy load and optimizing storage for large volumes of webhook payloads.",
      solutions: "Utilized k6 for load testing and performance profiling. Applied normalization and deduplication strategies to data models.",
      impact: "Reduced test dataset storage usage by ~60% and validated system resilience through rigorous load simulations.",
    },
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
    id: "grapejs-web-builder",
    title: "Web Builder",
    description: "A drag-and-drop web application builder with custom components and real-time preview.",
    tech: ["GrapesJS", "JavaScript", "Vue.js", "CSS"],
    github: "https://github.com/zerexei/grapejs-components",
  },

];

