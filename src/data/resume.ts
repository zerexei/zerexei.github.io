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
  title: "Backend Software Engineer",
  summary: "Backend engineer with 3+ years of experience building and operating production systems, focusing on API development, asynchronous processing, and data modeling. Experience designing backend architectures, making system design decisions with tradeoffs, and improving performance and reliability. Comfortable working across backend, frontend, and infrastructure.",
  location: "Zamboanga City, Philippines",
  email: "angeloarcillas64@gmail.com",
  phone: "+63 936-2547-611",
  github: "https://github.com/zerexei",
  linkedin: "https://linkedin.com/in/angeloarcillas",
  website: "https://angeloarcillas.pages.dev",
  skills: {
    backend: ["Python", "TypeScript", "PHP", "JavaScript", "Laravel", "FastAPI", "Node.js", "REST APIs", "WebSockets"],
    infrastructure: ["AWS (EC2, RDS, S3)", "Docker", "Linux", "CI/CD pipelines", "Prometheus", "Grafana", "OpenTelemetry"],
    databases: ["MySQL", "PostgreSQL", "Redis", "MongoDB", "Data Modeling", "Schema Design", "Query Optimization"],
    frontend: ["Vue.js", "React.js", "Tailwind CSS"],
    practices: ["Automated Testing", "Performance Optimization", "Incident Response", "System Design"],
  },
  experience: [
    {
      company: "Posexei (Startup / Personal Project)",
      role: "Software Engineer (Founder)",
      location: "Remote",
      period: "Jan 2026 - Present",
      description: [
        "Built a multi-service backend system for social media scheduling, using asynchronous workers and service-to-service communication.",
      ],
      achievements: [
        "Used k6 to simulate concurrent workloads to evaluate job processing, retry behavior, and system performance under load.",
        "Applied data modeling and schema design to reduce storage usage in test datasets by ~60% through normalization and removal of duplicate payloads.",
        "Implemented observability (OpenTelemetry, Prometheus) to analyze request flow and identify bottlenecks during simulated load tests.",
      ],
      technologies: ["Laravel", "Redis", "PostgreSQL", "Docker", "k6", "OpenTelemetry"],
    },
    {
      company: "PurpleBug Inc.",
      role: "Software Engineer",
      location: "Makati City, Philippines",
      period: "Jun 2022 – Dec 2025",
      description: [
        "Led end-to-end development of Smicos (backend, frontend, AWS infrastructure) from initial design to production.",
        "Mentored 2–3 junior developers during the project lifecycle.",
      ],
      achievements: [
        "Designed a modular monolith architecture, making practical system design decisions based on complexity, performance, and maintainability tradeoffs.",
        "Built a real-time messaging system integrating 8 external platforms (Messenger, Instagram, Viber, Salesforce), supporting ~10K concurrent WebSocket connections.",
        "Designed asynchronous job pipelines with retry logic and idempotent processing, reducing failures during burst traffic.",
        "Optimized MySQL schemas and queries, reducing query latency by ~40%.",
        "Developed concurrency-safe booking and live agent workflows using transactional locking and queue-based distribution.",
        "Managed AWS infrastructure and CI/CD pipelines (EC2, RDS, S3).",
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
