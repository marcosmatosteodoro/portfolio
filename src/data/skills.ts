import type { Localized } from "./profile";

export type SkillGroup = {
  category: Localized;
  items: string[];
  /** Grupo de destaque (stack principal): ocupa a largura toda e vem primeiro. */
  highlight?: boolean;
};

/**
 * Curadoria para vaga sênior: a stack principal primeiro, depois o que tem prova
 * na experiência ou nos projetos. Conceitos genéricos (MVC, ORM, HTML) ficam de fora.
 */
export const skillGroups: SkillGroup[] = [
  {
    category: { "pt-BR": "Stack principal", en: "Core stack" },
    highlight: true,
    items: [
      "Node.js",
      "TypeScript",
      "React",
      "Next.js",
      "PostgreSQL",
      "Ruby on Rails",
      "PHP / Laravel",
      "Docker",
    ],
  },
  {
    category: { "pt-BR": "IA e LLMs", en: "AI & LLMs" },
    items: [
      "OpenAI API",
      "Claude API (tool use)",
      "MCP (Model Context Protocol)",
      "Azure Cognitive Services",
    ],
  },
  {
    category: { "pt-BR": "Back-end e APIs", en: "Back-end & APIs" },
    items: [
      "Express",
      "NestJS",
      "Prisma",
      "TypeORM",
      "REST APIs",
      "OAuth / JWT",
      "WebSockets",
      "WebRTC",
      "PubNub",
      "Python",
    ],
  },
  {
    category: { "pt-BR": "Front-end e mobile", en: "Front-end & Mobile" },
    items: [
      "JavaScript",
      "Redux Toolkit",
      "Zustand",
      "Tailwind CSS",
      "SASS",
      "Hotwire / Stimulus",
      "Vue.js",
      "PWA",
      "Flutter",
      "Electron",
    ],
  },
  {
    category: { "pt-BR": "Bancos de dados", en: "Databases" },
    items: ["MySQL", "SQL Server", "MariaDB", "SQLite", "Oracle", "Firebase"],
  },
  {
    category: { "pt-BR": "DevOps e cloud", en: "DevOps & Cloud" },
    items: ["GitHub Actions", "CI/CD", "GitFlow", "Vercel", "DigitalOcean", "Linode", "Linux"],
  },
  {
    category: { "pt-BR": "Testes e práticas", en: "Testing & Practices" },
    items: [
      "Jest",
      "Vitest",
      "RSpec",
      "PHPUnit",
      "TDD",
      "E2E",
      "SOLID",
      "Design Patterns",
      "Scrum",
    ],
  },
];
