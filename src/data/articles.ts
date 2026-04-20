export interface Article {
  id: string;
  slug: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
  category: string;
  content: string;
}

export const articles: Article[] = [
  {
    id: "1",
    slug: "database-optimization-mysql",
    title: "Optimizing MySQL for High-Traffic Applications",
    description: "Learn how to reduce query latency and improve performance through indexing, schema design, and caching strategies.",
    date: "2024-03-15",
    readTime: "8 min read",
    category: "Databases",
    content: "# Optimizing MySQL for High-Traffic Applications\n\nDatabase performance is often the bottleneck in high-traffic applications. Here are key strategies I used to reduce latency by 40% in production systems.\n\n## 1. Indexing Strategies\nEffective indexing is the first step in optimization. Always analyze your query patterns before creating indexes.\n\n## 2. Schema Normalization vs Denormalization\nWhile normalization reduces redundancy, strategic denormalization can significantly speed up read operations in specific use cases.\n\n## 3. Caching with Redis\nUsing Redis for high-frequency, relatively static data can offload substantial work from the primary database.",
  },
  {
    id: "2",
    slug: "building-idempotent-apis",
    title: "The Importance of Idempotency in Distributed Systems",
    description: "How to design APIs that can safely handle retries and network failures without unintended side effects.",
    date: "2024-02-10",
    readTime: "6 min read",
    category: "System Design",
    content: "# The Importance of Idempotency in Distributed Systems\n\nIn distributed systems, failures are inevitable. Designing idempotent APIs ensures that if a request is retried, the system state remains consistent.\n\n## Why Idempotency Matters\nNetwork timeouts, client-side retries, and transient failures can cause the same request to be sent multiple times.\n\n## Implementation Techniques\nUsing unique request IDs, database constraints, and state machine checks are effective ways to enforce idempotency.",
  },
  {
    id: "3",
    slug: "ci-cd-for-backend-services",
    title: "Designing Robust CI/CD Pipelines for Backend Services",
    description: "A look at best practices for automated testing, deployment strategies, and incident response integration.",
    date: "2024-01-22",
    readTime: "10 min read",
    category: "DevOps",
    content: "# Designing Robust CI/CD Pipelines for Backend Services\n\nAutomation is the key to maintaining stability while moving fast. A good CI/CD pipeline should go beyond just building code.",
  },
  {
    id: "4",
    slug: "webhook-reliability",
    title: "Handling Webhooks at Scale: Reliability and Retries",
    description: "Strategies for building resilient webhook consumers that can handle high volumes and transient failures.",
    date: "2024-04-05",
    readTime: "7 min read",
    category: "System Design",
    content: "# Handling Webhooks at Scale: Reliability and Retries\n\nWebhooks are the backbone of many event-driven systems. However, they can be a source of instability if not handled correctly. Here's how I approach building reliable webhook consumers.",
  },
];

