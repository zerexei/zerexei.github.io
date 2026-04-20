export interface Experience {
  company: string;
  role: string;
  location: string;
  period: string;
  description: string[];
  achievements: string[];
  technologies: string[];
}

export interface ResumeData {
  name: string;
  title: string;
  summary: string;
  location: string;
  email: string;
  phone: string;
  github: string;
  linkedin: string;
  website: string;
  skills: {
    backend: string[];
    infrastructure: string[];
    databases: string[];
    frontend: string[];
    practices: string[];
  };
  experience: Experience[];
  education: {
    degree: string;
    school: string;
    location: string;
  };
}

export const resumeData: ResumeData = {
  name: "Angelo Dave F. Arcillas",
  title: "Backend Software Engineer (Real-Time Systems & Reliability)",
  summary: "Backend engineer with 3+ years of experience building and operating real-time, event-driven systems in production. Experienced in designing high-concurrency messaging platforms, asynchronous workflows, and reliable backend services, with hands-on involvement across backend, infrastructure, and system operations.",
  location: "Zamboanga City, Philippines",
  email: "angeloarcillas64@gmail.com",
  phone: "+63 936-2547-611",
  github: "https://github.com/zerexei",
  linkedin: "https://linkedin.com/in/angeloarcillas",
  website: "https://angeloarcillas.pages.dev",
  skills: {
    backend: ["Python (FastAPI)", "TypeScript", "PHP (Laravel)", "JavaScript (Node.js)", "WebSockets", "REST APIs", "Event-Driven Systems", "Asynchronous Pipelines", "Concurrency Control", "Idempotent Workflows"],
    infrastructure: ["AWS (EC2, RDS, S3, CloudFront)", "CI/CD pipelines", "Linux", "Docker", "Logging", "Metrics", "Prometheus", "OpenTelemetry", "Grafana", "Loki", "Tempo"],
    databases: ["PostgreSQL", "MySQL", "Redis", "MongoDB", "Data Modeling", "Schema Design", "Indexing", "Query Optimization"],
    frontend: ["Vue.js", "React.js", "Tailwind CSS"],
    practices: ["Performance Optimization", "Incident Response", "API Design", "Automated Testing"],
  },
  experience: [
    {
      company: "Distributed Systems Project",
      role: "Backend Engineer",
      location: "Remote",
      period: "Jan 2026 – Present",
      description: [
        "Building a multi-service backend architecture for social media scheduling, using asynchronous workers and service-to-service communication to explore distributed system concepts.",
      ],
      achievements: [
        "Used **k6** to simulate concurrent workloads to evaluate job processing, retry behavior, and system performance under load.",
        "Applied data modeling and schema design to reduce storage usage in test datasets by **~60%** through normalization and removal of duplicate payloads.",
      ],
      technologies: ["Python", "FastAPI", "Redis", "PostgreSQL", "Docker", "k6"],
    },
    {
      company: "PurpleBug Inc.",
      role: "Software Engineer",
      location: "Makati City, Philippines",
      period: "Jun 2022 – Dec 2025",
      description: [
        "Led end-to-end design, development, and operations of Smicos, a real-time messaging SaaS platform serving SME and enterprise clients across healthcare, financial services, telecom, and government; owned backend architecture, infrastructure, and production support, and mentored junior engineers.",
      ],
      achievements: [
        "Designed and operated a real-time, event-driven messaging system integrating **8+ external platforms** (Messenger, Instagram, Viber, Salesforce), supporting **10K concurrent WebSocket connections** and **50K+ daily events** with **sub-second latency**.",
        "Built **Redis-backed asynchronous processing pipelines** with idempotent workers, retries, and exponential backoff, improving system resilience during traffic spikes and third-party API failures.",
        "Designed concurrency-safe workflows (booking and live agent routing) using **transactional locking** and **queue-based distribution**, eliminating race conditions in multi-user scenarios.",
        "Optimized database performance through schema design and indexing, reducing query latency by **~40%** for real-time workloads.",
        "Owned AWS infrastructure and CI/CD pipelines (EC2, RDS, S3), supporting deployment and operation of backend services.",
        "Led production incident response, diagnosing cross-service failures and improving system reliability through custom logging, tracing, and monitoring tooling.",
        "Implemented subscription billing and access control systems for SaaS and enterprise clients, integrating payment workflows and plan enforcement logic.",
      ],
      technologies: ["Laravel", "Vue.js", "MySQL", "Redis", "AWS", "WebSockets", "Docker"],
    },

  ],
  education: {
    degree: "Bachelor of Science in Computer Science",
    school: "Western Mindanao State University",
    location: "Philippines",
  },
};
