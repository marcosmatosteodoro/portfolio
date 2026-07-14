import type { Localized } from "./profile";

export type SkillGroup = {
  category: Localized;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    category: { "pt-BR": "Frontend", en: "Frontend" },
    items: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "HTML5",
      "CSS",
      "SASS",
      "Tailwind CSS",
      "Chakra UI",
      "Bootstrap",
      "Redux",
      "Stimulus / Hotwire",
      "Vue.js",
      "jQuery",
      "Vite",
      "Webpack",
    ],
  },
  {
    category: { "pt-BR": "Backend", en: "Backend" },
    items: [
      "Node.js",
      "Ruby on Rails",
      "PHP",
      "Laravel",
      "Python",
      "REST APIs",
      "WebSockets / Streaming",
      "MVC",
      "ORM",
    ],
  },
  {
    category: { "pt-BR": "Mobile & Desktop", en: "Mobile & Desktop" },
    items: ["Flutter", "Electron"],
  },
  {
    category: { "pt-BR": "Bancos de dados", en: "Databases" },
    items: ["PostgreSQL", "MySQL", "SQL Server", "Oracle", "MariaDB", "SQL"],
  },
  {
    category: { "pt-BR": "DevOps & Infra", en: "DevOps & Infra" },
    items: [
      "Docker",
      "CI/CD",
      "GitHub Actions",
      "GitFlow",
      "Digital Ocean",
      "Linode",
      "Heroku",
      "Linux",
    ],
  },
  {
    category: { "pt-BR": "Testes", en: "Testing" },
    items: ["Jest", "PHPUnit", "RSpec", "TDD", "Unit / Integration / E2E"],
  },
  {
    category: { "pt-BR": "Práticas", en: "Practices" },
    items: ["SOLID", "DRY", "Design Patterns (GoF)", "Scrum / Agile", "Clean Code"],
  },
  {
    category: { "pt-BR": "Integrações & Cloud", en: "Integrations & Cloud" },
    items: [
      "Firebase",
      "PubNub",
      "Dolby",
      "OAuth",
      "Azure Cognitive Services",
      "AWS IoT",
      "LLMs / AI",
    ],
  },
];
