export interface TechItem {
  name: string;
  icon: string;
}

export interface ExperienceData {
  slug: string;
  company: string;
  role: string;
  period: string;
  location: string;
  description: string;
  responsibilities: string[];
  keyAchievements?: string[];
  techs: TechItem[];
  rotate: string;
}

export const experiences: ExperienceData[] = [
  {
    slug: "019f9f1a-f13b-7a8d-8a68-d2e7af5fba2d",
    company: "PT Artajasa Pembayaran Elektronis",
    role: "Backend Engineer (Cita Kita)",
    period: "May 2025 - Present",
    location: "Yogyakarta, Indonesia",
    description: "Developing and maintaining microservices for cross-border back-office systems using Golang, PostgreSQL, Redis, NATS, and Kubernetes.",
    responsibilities: [
      "Design, develop, and maintain high-throughput backend microservices for cross-border payment and back-office processing.",
      "Implement asynchronous event-driven architecture using NATS message broker and Redis caching layers.",
      "Optimize database queries and schema structures in PostgreSQL for low-latency transaction processing.",
      "Manage containerized service deployments and scaling across Kubernetes environments."
    ],
    keyAchievements: [
      "Engineered reliable cross-border back-office transaction pipeline.",
      "Improved system throughput and message delivery resilience under heavy load."
    ],
    techs: [
      { name: "Golang", icon: "https://www.svgrepo.com/show/353795/go.svg" },
      { name: "PostgreSQL", icon: "https://www.svgrepo.com/show/303301/postgresql-logo.svg" },
      { name: "Redis", icon: "https://www.svgrepo.com/show/354272/redis.svg" },
      { name: "NATS", icon: "/icons/nats.svg" },
      { name: "Kubernetes", icon: "https://www.svgrepo.com/show/448233/kubernetes.svg" },
      { name: "Docker", icon: "https://www.svgrepo.com/show/448221/docker.svg" },
    ],
    rotate: "rotate-1"
  },
  {
    slug: "019f9f1a-f13b-7fa4-b190-e97c4f60b3ab",
    company: "PT Nordspec Mandala Persada",
    role: "Backend Developer",
    period: "Nov 2024 - May 2025",
    location: "Yogyakarta, Indonesia",
    description: "Built and optimized backend systems with Golang and Laravel, collaborating with the frontend team to deliver scalable applications.",
    responsibilities: [
      "Engineered clean, robust RESTful APIs using Golang and Laravel for core business applications.",
      "Designed and normalized relational database schemas using MySQL.",
      "Collaborated closely with frontend engineers to define seamless integration contracts.",
      "Containerized micro-apps using Docker for reliable CI/CD deployment pipelines."
    ],
    keyAchievements: [
      "Accelerated API response times through strategic query optimization and caching.",
      "Delivered multiple web services on tight production schedules."
    ],
    techs: [
      { name: "Golang", icon: "https://www.svgrepo.com/show/353795/go.svg" },
      { name: "Laravel", icon: "https://www.svgrepo.com/show/353985/laravel.svg" },
      { name: "MySQL", icon: "https://www.svgrepo.com/show/303251/mysql-logo.svg" },
      { name: "Javascript", icon: "https://www.svgrepo.com/show/349419/javascript.svg" },
      { name: "Docker", icon: "https://www.svgrepo.com/show/448221/docker.svg" },
    ],
    rotate: "-rotate-1"
  },
  {
    slug: "019f9f1a-f13b-7734-b06c-a427f2e62b39",
    company: "PT Jetorbit Teknologi Indonesia",
    role: "Creative Designer",
    period: "Jun 2022 - Nov 2024",
    location: "Yogyakarta, Indonesia",
    description: "Craft and design for promotion banner, social media post, company design assets, UI/UX design, and everything related to creative design.",
    responsibilities: [
      "Created high-fidelity UI/UX component libraries and wireframes in Figma.",
      "Designed promotional assets, brand identity materials, and social media visual collateral.",
      "Collaborated with product and engineering teams to ensure design consistency across brand products."
    ],
    keyAchievements: [
      "Overhauled core digital promotional assets, driving enhanced brand presence.",
      "Established comprehensive visual guidelines for ongoing design efforts."
    ],
    techs: [
      { name: "Figma", icon: "https://www.svgrepo.com/show/448222/figma.svg" },
      { name: "Adobe Photoshop", icon: "https://www.svgrepo.com/show/7054/photoshop.svg" },
      { name: "Adobe Illustrator", icon: "https://www.svgrepo.com/show/12710/illustrator.svg" },
    ],
    rotate: "rotate-1"
  }
];
